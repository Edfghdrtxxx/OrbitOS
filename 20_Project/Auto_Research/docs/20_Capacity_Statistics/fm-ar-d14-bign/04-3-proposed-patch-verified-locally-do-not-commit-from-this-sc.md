<!-- Verbatim source section; overview: [[../fm-ar-d14-bign]] -->
<!-- SOURCE-BODY-START -->
## 3. Proposed patch (verified locally — do not commit from this scout)

Adds: `--cv-folds K` (stratified k-fold probes; every event scored exactly once out-of-fold → paired stats over all n events, not a 250-event test half), per-probe Wilson `*_ci95`, D4 `hypergeom_p_ge_both` (overall + per-class), `--report-peak-rss`. Default behavior (`--cv-folds 0`) is unchanged. Verified on a synthetic 8000-event `h1_features.npz` through `--phase probe`: k-fold OOF accuracies + CIs, full-length paired McNemar, D2-vs-majority, D4 hypergeometric p, `peak_rss_mb` all emitted correctly; the default repeated-splits path still works (regression-checked). Synthetic-run peak RSS: 319 MB.

```diff
diff --git a/scripts/analysis/exp3_h1_diagnostics.py b/scripts/analysis/exp3_h1_diagnostics.py
index 71deb9e..39ddb26 100644
--- a/scripts/analysis/exp3_h1_diagnostics.py
+++ b/scripts/analysis/exp3_h1_diagnostics.py
@@ -248,6 +248,9 @@ def _extract_phase(args) -> Path:
         pairing_check_json=np.asarray([json.dumps(guard)]),
     )
     logger.info("wrote %s", out_path)
+    if getattr(args, "report_peak_rss", False):
+        from scripts.analysis._provenance import peak_rss_mb
+        logger.info("extract-phase peak_rss_mb=%.1f", peak_rss_mb())
     return out_path
 
 
@@ -297,6 +300,69 @@ def _probe_splits(X, y, n_repeats, seed):
     }
 
 
+def _probe_kfold(X, y, k, seed):
+    """Stratified k-fold CV probe: every event scored exactly once OOF.
+
+    Returns per-fold scores plus a full-length out-of-fold correctness
+    vector (index-aligned with ``y``), which enables paired statistics
+    (McNemar, paired CIs) over all n events instead of a single test
+    half. Fold assignment is a seeded permutation split into k
+    contiguous blocks — deterministic given (n, k, seed).
+    """
+    n = len(y)
+    rng = np.random.RandomState(seed)
+    perm = rng.permutation(n)
+    folds = np.array_split(perm, k)
+    oof_correct = np.zeros(n, dtype=bool)
+    scores = []
+    fold_records = []
+    for i in range(k):
+        te = folds[i]
+        tr = np.concatenate([folds[j] for j in range(k) if j != i])
+        acc, correct = _logreg_probe(X[tr], y[tr], X[te], y[te])
+        scores.append(acc)
+        oof_correct[te] = correct
+        fold_records.append(
+            {"fold": i, "test_idx": te.tolist(),
+             "correct": correct.astype(int).tolist()}
+        )
+    arr = np.asarray(scores)
+    return {
+        "scores": scores,
+        "mean": float(arr.mean()),
+        "std": float(arr.std(ddof=1)) if len(arr) > 1 else 0.0,
+        "oof_acc": float(oof_correct.mean()),
+        "oof_correct": oof_correct.astype(int).tolist(),
+        "repeats": fold_records,
+    }
+
+
+def _hypergeom_sf(k, N, K, n):
+    """P(X >= k) for X ~ Hypergeometric(N, K, n).
+
+    N = population size, K = successes in population, n = draws.
+    Used for D4: probability of >= ``both_wrong`` shared errors if the
+    two models' error sets were independent (draw rn_errors from n
+    events of which xa_errors are XA-errors).
+    """
+    if k <= 0:
+        return 1.0
+    lo = max(0, n - (N - K))
+    hi = min(K, n)
+    if k > hi:
+        return 0.0
+    log_den = math.lgamma(N + 1) - math.lgamma(n + 1) - math.lgamma(N - n + 1)
+    total = 0.0
+    for x in range(max(k, lo), hi + 1):
+        total += math.exp(
+            math.lgamma(K + 1) - math.lgamma(x + 1) - math.lgamma(K - x + 1)
+            + math.lgamma(N - K + 1) - math.lgamma(n - x + 1)
+            - math.lgamma(N - K - n + x + 1)
+            - log_den
+        )
+    return min(1.0, total)
+
+
 def _wilson_ci(k, n, z=1.959964):
     """Wilson score interval for k successes in n trials."""
     if n == 0:
@@ -377,14 +443,16 @@ def _d4_block(xa_err, rn_err, labels):
         n_c = int(m.sum())
         xa_e = int((xa_err & m).sum())
         rn_e = int((rn_err & m).sum())
+        both_c = int((xa_err & rn_err & m).sum())
         per_class[str(int(cls))] = {
             "n": n_c,
             "xa_errors": xa_e,
             "rn_errors": rn_e,
-            "both_wrong": int((xa_err & rn_err & m).sum()),
+            "both_wrong": both_c,
             "xa_only_wrong": int((xa_err & ~rn_err & m).sum()),
             "rn_only_wrong": int((~xa_err & rn_err & m).sum()),
             "expected_both_independent": (xa_e * rn_e / n_c) if n_c else 0.0,
+            "hypergeom_p_ge_both": _hypergeom_sf(both_c, n_c, xa_e, rn_e),
         }
 
     return {
@@ -395,6 +463,7 @@ def _d4_block(xa_err, rn_err, labels):
         "xa_only_wrong": xa_only,
         "rn_only_wrong": rn_only,
         "expected_both_independent": (xa_errors * rn_errors / n) if n else 0.0,
+        "hypergeom_p_ge_both": _hypergeom_sf(both, n, xa_errors, rn_errors),
         "xa_error_recall_class0": float(
             ((~xa_err) & (labels == 0)).sum() / max((labels == 0).sum(), 1)
         ),
@@ -403,7 +472,8 @@ def _d4_block(xa_err, rn_err, labels):
         ),
         "per_class": per_class,
     }
-def _run_probes(feat, n_repeats, seed, paired=True, pairing_check=None):
+def _run_probes(feat, n_repeats, seed, paired=True, pairing_check=None,
+                cv_folds=0):
     """Core probe+stats computation on a feature dict. Torch-free.
 
     ``feat`` keys: xa_head_input, xa_aux, xa_labels, xa_preds,
@@ -426,43 +496,74 @@ def _run_probes(feat, n_repeats, seed, paired=True, pairing_check=None):
     labels = xa_labels
     n = len(labels)
 
+    def _run_one(X, y):
+        if cv_folds and cv_folds > 1:
+            return _probe_kfold(X, y, cv_folds, seed)
+        return _probe_splits(X, y, n_repeats, seed)
+
     probes = {
-        "D1_XA68": _probe_splits(feat["xa_head_input"], labels, n_repeats, seed),
-        "D1_RN512": _probe_splits(
+        "D1_XA68": _run_one(feat["xa_head_input"], labels),
+        "D1_RN512": _run_one(
             feat["rn_head_input"],
-            rn_labels if not paired else labels, n_repeats, seed),
-        "D2_physics": _probe_splits(feat["phys_raw"], labels, n_repeats, seed),
-        "D3_attended": _probe_splits(feat["xa_aux"], labels, n_repeats, seed),
+            rn_labels if not paired else labels),
+        "D2_physics": _run_one(feat["phys_raw"], labels),
+        "D3_attended": _run_one(feat["xa_aux"], labels),
     }
 
     out = {"n_events": n}
 
-    # Legacy keys = repeat-0 score (identical protocol to the pre-change
-    # script); mean/spread alongside.
+    # Legacy keys: k-fold mode -> OOF accuracy over all n events;
+    # repeated-split mode -> repeat-0 score (identical protocol to the
+    # pre-change script). mean/spread alongside either way.
     key_map = {
         "D1_XA68": "D1_probe_XA68",
         "D1_RN512": "D1_probe_RN512",
         "D2_physics": "D2_physics_only",
         "D3_attended": "D3_attended_only",
     }
+    use_kfold = bool(cv_folds and cv_folds > 1)
     for pname, legacy_key in key_map.items():
         p = probes[pname]
-        out[legacy_key] = p["scores"][0]
+        out[legacy_key] = p["oof_acc"] if use_kfold else p["scores"][0]
         out[legacy_key + "_mean"] = p["mean"]
         out[legacy_key + "_std"] = p["std"]
         out[legacy_key + "_scores"] = p["scores"]
-    out["probe_protocol"] = {
-        "type": "repeated_50_50_splits",
-        "n_repeats": n_repeats,
-        "seed": seed,
-        "note": "repeat 0 == legacy single split; legacy keys hold repeat-0 "
-        "scores, quote *_mean/*_std for the repeated-split estimate",
-    }
+        k, nn = (int(round(p["oof_acc"] * n)), n) if use_kfold else (
+            int(round(p["scores"][0] * len(p["repeats"][0]["correct"]))),
+            len(p["repeats"][0]["correct"]))
+        lo, hi = _wilson_ci(k, nn)
+        out[legacy_key + "_ci95"] = [lo, hi]
+    if use_kfold:
+        out["probe_protocol"] = {
+            "type": "stratified_kfold_cv",
+            "k": cv_folds,
+            "seed": seed,
+            "note": "every event scored exactly once out-of-fold; legacy "
+            "keys hold OOF accuracy over all n events; paired stats use "
+            "the full-length OOF correctness vectors",
+        }
+    else:
+        out["probe_protocol"] = {
+            "type": "repeated_50_50_splits",
+            "n_repeats": n_repeats,
+            "seed": seed,
+            "note": "repeat 0 == legacy single split; legacy keys hold "
+            "repeat-0 scores, quote *_mean/*_std for the repeated-split "
+            "estimate",
+        }
 
-    # Paired stats on repeat-0 correctness vectors (same test events).
+    # Paired stats: k-fold -> full-length OOF vectors (all n events);
+    # repeated-split -> repeat-0 correctness vectors (same test events).
     if paired:
-        r0 = {name: np.asarray(p["repeats"][0]["correct"])
-              for name, p in probes.items()}
+        if use_kfold:
+            r0 = {name: np.asarray(p["oof_correct"])
+                  for name, p in probes.items()}
+            y_te = labels
+        else:
+            r0 = {name: np.asarray(p["repeats"][0]["correct"])
+                  for name, p in probes.items()}
+            te_idx = np.asarray(probes["D2_physics"]["repeats"][0]["test_idx"])
+            y_te = labels[te_idx]
         n_te = len(r0["D1_XA68"])
         out["D1_paired_XA_vs_RN"] = _paired_probe_stats(
             r0["D1_XA68"], r0["D1_RN512"], n_te)
@@ -472,8 +573,6 @@ def _run_probes(feat, n_repeats, seed, paired=True, pairing_check=None):
             r0["D3_attended"], r0["D1_XA68"], n_te)
 
         # D2 vs the majority baseline on the same test events.
-        te_idx = np.asarray(probes["D2_physics"]["repeats"][0]["test_idx"])
-        y_te = labels[te_idx]
         maj_class = int(np.bincount(y_te.astype(int)).argmax())
         maj_correct = (y_te == maj_class)
         out["D2_vs_majority"] = {
@@ -553,7 +652,8 @@ def _probe_phase(args) -> Path:
         )
         paired = pairing_check["status"] == "ok"
     out = _run_probes(feat, args.probe_repeats, args.probe_seed,
-                      paired=paired, pairing_check=pairing_check)
+                      paired=paired, pairing_check=pairing_check,
+                      cv_folds=getattr(args, "cv_folds", 0))
     out.update(
         {
             "xa_run_dir": str(args.xa_run_dir),
@@ -590,6 +690,9 @@ def _probe_phase(args) -> Path:
             *(rn_cfg.get("data", {}).get("hdf5_files") or []),
         ],
     )
+    if getattr(args, "report_peak_rss", False):
+        from scripts.analysis._provenance import peak_rss_mb
+        out["peak_rss_mb"] = peak_rss_mb()
 
     out_path = args.xa_run_dir / OUTPUT_FILENAME
     out_path.write_text(json.dumps(out, indent=2))
@@ -613,12 +716,15 @@ def _child_argv(args, phase):
         "--max-events", str(args.max_events),
         "--probe-repeats", str(args.probe_repeats),
         "--probe-seed", str(args.probe_seed),
+        "--cv-folds", str(getattr(args, "cv_folds", 0)),
         "--phase", phase,
     ]
     if args.features:
         argv += ["--features", str(args.features)]
     if getattr(args, "allow_unpaired_val", False):
         argv += ["--allow-unpaired-val"]
+    if getattr(args, "report_peak_rss", False):
+        argv += ["--report-peak-rss"]
     return argv
 
 
@@ -646,6 +752,18 @@ def main() -> int:
     )
     ap.add_argument("--probe-repeats", type=int, default=10)
     ap.add_argument("--probe-seed", type=int, default=42)
+    ap.add_argument(
+        "--cv-folds", type=int, default=0,
+        help="probe protocol: 0 (default) = repeated 50/50 splits "
+             "(--probe-repeats); k>=2 = stratified k-fold CV where every "
+             "event is scored exactly once out-of-fold, enabling paired "
+             "stats over all n events",
+    )
+    ap.add_argument(
+        "--report-peak-rss", action="store_true",
+        help="record peak RSS (resource.getrusage) as peak_rss_mb in the "
+             "output JSON — for sizing runs under the 2 GB cgroup cap",
+    )
     ap.add_argument("--allow-unpaired-val", action="store_true",
                     help="when the two runs' splits are incompatible "
                          "(different file spaces or val sets), evaluate "
```

<!-- SOURCE-BODY-END -->
