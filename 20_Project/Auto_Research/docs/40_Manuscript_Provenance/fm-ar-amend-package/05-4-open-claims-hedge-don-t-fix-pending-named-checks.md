<!-- Verbatim source section; overview: [[../fm-ar-amend-package]] -->
<!-- SOURCE-BODY-START -->
## 4. Open claims — hedge, don't fix (pending named checks)

These stay open; the author should hedge rather than rewrite. Ordered by line.

| Loc | Claim | Pending check | Where | Hedge guidance |
|---|---|---|---|---|
| L282–291 (Table 4), L295, L503, L569–570 (App C) | V6 2×2 numbers + "α vs Nonα" task identity + α-recall column | `windows_visit_checks.py` checks [A]+[B]+[D] — Garfield H5 raw labels + `label_map_version`, V6 class-0 source file, label-blast verdict (one command, one JSON) | Windows box, ~5 min | If Windows files were OLD-mapped at V6 run time, Table 4 is triton-vs-rest — same bug as EXP3. XA-vs-RN and HC-vs-Raw deltas survive either way; task identity and α-recall are what's at risk. Do **not** reinstate `figures/_legacy/v6_*.pdf` before this check. |
| L295 | "primary error mode is α→Nonα … ³He closest in stopping power" | Same Windows visit — per-species `predictions.csv`×split join (runbook §C) | Windows box | Plausible mechanism, no per-species breakdown exists; keep the "consistent with" hedge or soften to "consistent with nearest-neighbor confusion in stopping power". |
| L428 + Fig. `angular_resolution_comparison` | CNN σ_θ 1.57/0.77/0.45° vs 1.70/0.90/0.59°; RANSAC ≈3.6/1.25/0.7° overlay | fm-ar-angle-baseline (in flight): same-sample RANSAC/Hough on TRK3-v2 split; TRK3/4-v2 `predictions_regression.csv` sync from AutoDL | IMP/CPU + AutoDL sync | Already hedged in-text ("indicative rather than controlled", ±15–20% placement uncertainty) — adequate until the same-sample baseline lands. |
| L481 | "RANSAC reached R²=0.878 on the raw 3D point cloud against 0.848 on the converted representation" | Re-run `run_baseline_rawpoints.py` | box 176 / IMP (CPU, torch-free) | Internal-study artifact; consistent with the F4 audit doc. Keep "in an internal study" framing. |
| L555–557 (App B) | p/d/t per-class metrics | Legacy run artifacts | Windows/legacy | Consistent with headline accuracies; not locally re-derivable. |
| L589–591 (App D) + L407–418 (Table 7 CI/stratification cells) | Energy-stratified angle MAE + <1° fractions | Sync TRK3/4-v2 `metrics.json` from AutoDL | AutoDL, minutes | Headline MAE verified (0.9922°/0.8324°); stratified cells are box artifacts, internally consistent. |
| L176 | "~100% signal retention on clean NimpSim events" (DBSCAN) | Documented in S1/S4 specs; implementation server-side | IMP server | Keep "validated at" phrasing or soften to "validated at near-complete signal retention". |
| L323–332 (if max\|h\| added) | Any activation-OOD claim | `exp8_maxh_observable_join.py` on the GPU box (torch-free, ~minutes) — decides proxy vs learned | GPU box | Until the join runs, the only honest statement is the scale-proxy framing in row L332; never "flags unseen isotopes at AUROC 0.90". |

Also open but covered by §1 rows: the true-4He direction of the Raw deficit (Rung 1, 14.5 billed GPU-h, queued not launched — L298's hedged rewrite stands regardless), and the map-level `permuted_q` falsifier (Check A, box-176 CPU ~1 h — L313's reframed wording stands regardless).

---

<!-- SOURCE-BODY-END -->
