<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 8. Reproduction script (verbatim)

`scripts/analysis/fm_ar_paired_writeup.py` in the worktree; output JSON `paired_writeup_results.json` alongside it.

```python
#!/usr/bin/env python3
"""Paired statistics for the EXP3 auto-research campaign (fm-ar-paired-writeup).

Read-only against the live checkout's runs/ directory. Reproduces and extends
the paired comparisons the manuscript currently reports:

  1. EXP8 certified pair (XA vs ResNet, auditfix_d570d34_01):
     - 75k val predictions.csv: overall + null-excluded paired accuracy
       (exact McNemar, bootstrap 95% CI).
     - 475k eval_exp8/predictions.csv: per-channel paired accuracy McNemar,
       per-channel false-target rate P(pred in {A,B} | channel) with Wilson
       CIs, paired FTR differences with bootstrap CIs, exact McNemar on the
       leak indicator, Holm correction over the 7-channel clutter family
       (C, D, null, E, F, G, H) and pooled F+G+H.
  2. TRK5 (cnn_resnet) vs TRK6 (cnn_xa) energy regression: event-level
     equal-weight estimator (manuscript convention), paired RMSE and MAE
     differences with bootstrap CIs, Wilcoxon signed-rank, Cohen's d —
     overall, per manuscript energy bin, and per track count. Per-slot MAE
     is also reported for comparability with the earlier probe.
  3. CNN vs classical baselines on shared events: same event-level paired
     statistics for the five same-sample family members; pairs with zero
     event overlap are refused explicitly.

Reuses the repo's own guards/estimators:
  - src.evaluation.paired_stats: load_predictions_csv, align_pair,
    paired_stats, mcnemar_exact_pvalue   (EXP8 val dump)
  - src.evaluation.aggregate_trk_energy_comparison: load_observations
    (strict contract: canonical slot roster, broadcast truth, error
    consistency), paired_stats (event-level RMSE bootstrap + Wilcoxon +
    Cohen's d), EXPECTED_ENERGY_BINS   (all regression pairs)

Small helpers re-implemented locally (each <15 lines, no public API exists):
Holm step-down, Wilson score interval, generic paired percentile bootstrap.

Usage:
    python scripts/analysis/fm_ar_paired_writeup.py \
        [--runs-root /Users/Reid Hu/MATE-Automation/runs] \
        [--out paired_writeup_results.json] [--n-bootstrap 10000]

CPU only; ~2-4 min total at n-bootstrap 10000.
"""
from __future__ import annotations

import argparse
import csv
import json
import math
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from src.evaluation.paired_stats import (  # noqa: E402
    align_pair,
    load_predictions_csv,
    mcnemar_exact_pvalue,
    paired_stats as cls_paired_stats,
)
from src.evaluation.aggregate_trk_energy_comparison import (  # noqa: E402
    EXPECTED_ENERGY_BINS,
    load_observations,
    paired_stats as reg_paired_stats,
)

try:
    from scipy.stats import wilcoxon as _wilcoxon
except ImportError:  # pragma: no cover
    _wilcoxon = None

# EXP8 channel semantics (evaluate_exp8_unseen.py: file_class_list [0,1,2,2,2];
# unseen files all class 2). Order is contract-pinned.
SEEN_TAGS = ["A", "B", "C", "D", "null"]
CLUTTER_TAGS = ["C", "D", "null", "E", "F", "G", "H"]
FAR_OOD_TAGS = ["F", "G", "H"]
TARGET_CLASSES = (0, 1)
EVENTS_PER_FILE = 100_000  # data_split.per_file_limit; global_idx // 100k -> file

TRUTH_TOL_MEV = 1e-5  # same tolerance as aggregate_trk_energy_comparison


# ---------------------------------------------------------------------------
# Small local helpers (no public API in the repo for these)
# ---------------------------------------------------------------------------

def holm_adjust(pvals):
    """Holm-Bonferroni step-down adjusted p-values, original order."""
    p = np.asarray(pvals, dtype=np.float64)
    m = p.size
    order = np.argsort(p, kind="stable")
    adj = np.empty(m)
    running = 0.0
    for rank, idx in enumerate(order):
        running = max(running, (m - rank) * p[idx])
        adj[idx] = min(1.0, running)
    return adj


def wilson_ci(k, n, confidence=0.95):
    """Wilson score interval for a binomial proportion."""
    if n == 0:
        return (float("nan"), float("nan"))
    from scipy.stats import norm
    z = float(norm.ppf(1 - (1 - confidence) / 2))
    p = k / n
    denom = 1 + z * z / n
    centre = (p + z * z / (2 * n)) / denom
    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / denom
    return (centre - half, centre + half)


def paired_boot_ci(stat_a, stat_b, n_resamples, seed, confidence=0.95):
    """Percentile bootstrap CI of mean(stat_a) - mean(stat_b), paired resample."""
    a = np.asarray(stat_a, dtype=np.float64)
    b = np.asarray(stat_b, dtype=np.float64)
    n = a.size
    observed = float(a.mean() - b.mean())
    if n == 0:
        return observed, float("nan"), float("nan")
    rng = np.random.default_rng(seed)
    diffs = np.empty(n_resamples)
    for i in range(n_resamples):
        sel = rng.integers(0, n, size=n)
        diffs[i] = a[sel].mean() - b[sel].mean()
    alpha = 1 - confidence
    return (observed,
            float(np.percentile(diffs, 100 * alpha / 2)),
            float(np.percentile(diffs, 100 * (1 - alpha / 2))))


def mcnemar_table(correct_a, correct_b):
    """Discordant counts + exact two-sided p. b = A right/B wrong."""
    ca = np.asarray(correct_a, dtype=bool)
    cb = np.asarray(correct_b, dtype=bool)
    b = int(np.sum(ca & ~cb))
    c = int(np.sum(~ca & cb))
    return {
        "b_a_correct_b_wrong": b,
        "c_a_wrong_b_correct": c,
        "both_correct": int(np.sum(ca & cb)),
        "both_wrong": int(np.sum(~ca & ~cb)),
        "p_exact": mcnemar_exact_pvalue(b, c),
    }


# ---------------------------------------------------------------------------
# EXP8
# ---------------------------------------------------------------------------

def exp8_val_split(run_xa, run_rn, n_boot, seed):
    """75k val predictions.csv pair: alignment check + paired accuracy.

    The dump's event_index is a positional index into the val loader's
    iteration order (evaluate.py: np.arange(N)); it does NOT reproduce
    data_split.val_indices ordering (verified: label agreement only 59.9%,
    i.e. chance). Per-channel val breakdown is therefore unrecoverable
    from the artifacts alone; only the overall paired comparison is
    reported here. The dump IS confirmed to be the val set by per-file
    label counts (15088/15000/15000/15000/14912 == val_indices histogram).
    """
    dump_xa = load_predictions_csv(run_xa / "predictions.csv")
    dump_rn = load_predictions_csv(run_rn / "predictions.csv")
    aligned = align_pair(dump_xa, dump_rn)  # raises on label mismatch
    stats = cls_paired_stats(aligned, n_resamples=n_boot, seed=seed)

    # Diagnostic: does event_index map positionally into val_indices?
    split = json.loads((run_xa / "data_split.json").read_text())
    val_idx = np.asarray(split["val_indices"], dtype=np.int64)
    ev = aligned["event_index"].astype(np.int64)
    file_of = val_idx[ev] // EVENTS_PER_FILE
    expected_label = np.where(file_of == 0, 0, np.where(file_of == 1, 1, 2))
    positional_agreement = float(np.mean(expected_label == aligned["true_label"]))
    return {
        "n_aligned": int(aligned["n_common"]),
        "n_label_mismatch": int(aligned["n_label_mismatch"]),
        "val_positional_label_agreement": positional_agreement,
        "channel_mapping_recoverable": bool(positional_agreement > 0.99),
        "overall": stats,
    }


def _load_eval_exp8(path):
    """Load eval_exp8/predictions.csv -> dict of numpy arrays."""
    tags, gidx, true, pred = [], [], [], []
    with open(path, newline="") as f:
        for row in csv.DictReader(f):
            tags.append(row["channel"])
            gidx.append(int(row["global_idx"]))
            true.append(int(row["true_class"]))
            pred.append(int(row["pred_class"]))
    return {
        "channel": np.asarray(tags),
        "global_idx": np.asarray(gidx, dtype=np.int64),
        "true": np.asarray(true, dtype=np.int64),
        "pred": np.asarray(pred, dtype=np.int64),
    }


def exp8_eval_split(run_xa, run_rn, n_boot, seed):
    """475k eval_exp8 pair: per-channel accuracy + FTR, McNemar, Holm."""
    xa = _load_eval_exp8(run_xa / "eval_exp8" / "predictions.csv")
    rn = _load_eval_exp8(run_rn / "eval_exp8" / "predictions.csv")
    # --- alignment ---
    # global_idx is unique only WITHIN a channel (each unseen file indexes
    # 0..99999 locally), so the pairing key is (channel, global_idx). The
    # dumps are written in identical row order; verify that first, else
    # fall back to a keyed join. Refuse on any true_class disagreement.
    rowwise_identical = (
        xa["global_idx"].size == rn["global_idx"].size
        and np.array_equal(xa["global_idx"], rn["global_idx"])
        and np.array_equal(xa["channel"], rn["channel"])
    )
    if rowwise_identical:
        ka = np.arange(xa["global_idx"].size)
        kb = ka
    else:
        pos_rn = {(c, int(g)): i
                  for i, (c, g) in enumerate(zip(rn["channel"], rn["global_idx"]))}
        if len(pos_rn) != rn["global_idx"].size:
            raise ValueError("eval_exp8 RN dump has duplicate (channel, global_idx)")
        keep_xa, keep_rn = [], []
        for i, (c, g) in enumerate(zip(xa["channel"], xa["global_idx"])):
            j = pos_rn.get((c, int(g)))
            if j is not None:
                keep_xa.append(i)
                keep_rn.append(j)
        ka = np.asarray(keep_xa)
        kb = np.asarray(keep_rn)
    if ka.size == 0:
        raise ValueError("eval_exp8 arms share zero (channel, global_idx) keys")
    mismatch = int(np.sum(xa["true"][ka] != rn["true"][kb]))
    if mismatch:
        raise ValueError(
            f"eval_exp8 alignment refused: {mismatch} true_class "
            "disagreements on shared events")
    tag = xa["channel"][ka]
    y = xa["true"][ka]
    pa = xa["pred"][ka]
    pb = rn["pred"][kb]

    correct_a = pa == y
    correct_b = pb == y
    leak_a = np.isin(pa, TARGET_CLASSES)
    leak_b = np.isin(pb, TARGET_CLASSES)

    channels = [t for t in dict.fromkeys(tag.tolist())]
    per_channel = {}
    acc_pvals, leak_pvals = {}, {}
    for i, t in enumerate(channels):
        m = tag == t
        n = int(m.sum())
        d_acc = paired_boot_ci(correct_a[m], correct_b[m], n_boot, seed + i)
        mc_acc = mcnemar_table(correct_a[m], correct_b[m])
        acc_pvals[t] = mc_acc["p_exact"]
        entry = {
            "n": n,
            "acc_xa": float(correct_a[m].mean()),
            "acc_rn": float(correct_b[m].mean()),
            "delta_acc": d_acc[0],
            "delta_acc_ci": [d_acc[1], d_acc[2]],
            "mcnemar_acc": mc_acc,
        }
        if t in CLUTTER_TAGS:
            ka_ftr = int(leak_a[m].sum())
            kb_ftr = int(leak_b[m].sum())
            d_ftr = paired_boot_ci(leak_a[m], leak_b[m], n_boot, seed + 100 + i)
            mc_leak = mcnemar_table(leak_a[m], leak_b[m])
            leak_pvals[t] = mc_leak["p_exact"]
            entry["ftr"] = {
                "xa": ka_ftr / n, "xa_wilson": list(wilson_ci(ka_ftr, n)),
                "rn": kb_ftr / n, "rn_wilson": list(wilson_ci(kb_ftr, n)),
                "xa_count": ka_ftr, "rn_count": kb_ftr,
                "delta_xa_minus_rn": d_ftr[0],
                "delta_ci": [d_ftr[1], d_ftr[2]],
                "mcnemar_leak": mc_leak,
            }
        per_channel[t] = entry

    # Holm over the 7-channel clutter family (manuscript convention) and
    # over all 9 channels for the accuracy family.
    leak_holm = dict(zip(
        CLUTTER_TAGS,
        holm_adjust([leak_pvals[t] for t in CLUTTER_TAGS])))
    acc_holm = dict(zip(
        channels, holm_adjust([acc_pvals[t] for t in channels])))
    for t in channels:
        per_channel[t]["mcnemar_acc"]["p_holm_9ch"] = float(acc_holm[t])
        if t in CLUTTER_TAGS:
            per_channel[t]["ftr"]["mcnemar_leak"]["p_holm_7clutter"] = float(
                leak_holm[t])

    # Pooled far-OOD F+G+H
    m = np.isin(tag, FAR_OOD_TAGS)
    n = int(m.sum())
    ka_ftr = int(leak_a[m].sum())
    kb_ftr = int(leak_b[m].sum())
    d_ftr = paired_boot_ci(leak_a[m], leak_b[m], n_boot, seed + 200)
    pooled = {
        "n": n,
        "xa": ka_ftr / n, "xa_wilson": list(wilson_ci(ka_ftr, n)),
        "rn": kb_ftr / n, "rn_wilson": list(wilson_ci(kb_ftr, n)),
        "xa_count": ka_ftr, "rn_count": kb_ftr,
        "delta_xa_minus_rn": d_ftr[0],
        "delta_ci": [d_ftr[1], d_ftr[2]],
        "mcnemar_leak": mcnemar_table(leak_a[m], leak_b[m]),
    }
    # Pooled seen-channel accuracy excluding null (manuscript's 59,928).
    m_seen = np.isin(tag, ["A", "B", "C", "D"])
    d_seen = paired_boot_ci(correct_a[m_seen], correct_b[m_seen],
                            n_boot, seed + 300)
    seen_acc = {
        "n": int(m_seen.sum()),
        "acc_xa": float(correct_a[m_seen].mean()),
        "acc_rn": float(correct_b[m_seen].mean()),
        "delta_acc": d_seen[0],
        "delta_acc_ci": [d_seen[1], d_seen[2]],
        "mcnemar": mcnemar_table(correct_a[m_seen], correct_b[m_seen]),
    }
    return {
        "n_aligned": int(ka.size),
        "n_xa": int(xa["global_idx"].size),
        "n_rn": int(rn["global_idx"].size),
        "per_channel": per_channel,
        "pooled_fgh_ftr": pooled,
        "seen_nonnull_acc": seen_acc,
    }


# ---------------------------------------------------------------------------
# TRK regression (event-level, manuscript convention)
# ---------------------------------------------------------------------------

def _subset_events(events, mask_fn):
    return {e: obs for e, obs in events.items() if mask_fn(obs)}


def _mae_diff(events_a, events_b, n_boot, seed):
    """Paired event-level MAE difference with bootstrap CI."""
    common = sorted(
        e for e in set(events_a) & set(events_b)
        if events_a[e].prediction_mev is not None
        and events_b[e].prediction_mev is not None)
    if not common:
        return None
    ae_a = np.asarray([abs(events_a[e].prediction_mev - events_a[e].truth_mev)
                       for e in common])
    ae_b = np.asarray([abs(events_b[e].prediction_mev - events_b[e].truth_mev)
                       for e in common])
    d, lo, hi = paired_boot_ci(ae_a, ae_b, n_boot, seed)
    return {"mae_a": float(ae_a.mean()), "mae_b": float(ae_b.mean()),
            "delta_mae": d, "delta_mae_ci": [lo, hi]}


def reg_pair(events_a, events_b, n_boot, seed):
    """Full event-level paired block for one method pair."""
    out = reg_paired_stats(events_a, events_b, n_boot, seed)
    if out["pairing_status"] == "paired":
        out["mae"] = _mae_diff(events_a, events_b, n_boot, seed + 1)
    return out


def trk_analysis(runs_root, n_boot, seed):
    paths = {
        "cnn_resnet": runs_root / "TRK5-ResNet-EnergyReg/seed42/predictions_regression.csv",
        "cnn_xa": runs_root / "TRK6-XA-EnergyReg/seed42/predictions_regression.csv",
        "ransac_fixed": runs_root / "baseline-ransac/seed42/predictions_regression.csv",
        "hough_fixed": runs_root / "baseline-hough/seed42/predictions_regression.csv",
        "hough_opt": runs_root / "baseline-hough-opt/seed42/predictions_regression.csv",
        "hc_fixed": runs_root / "baseline-hc/seed42/predictions_regression.csv",
        "hc_opt": runs_root / "baseline-hc-opt/seed42/predictions_regression.csv",
        # Same-name methods on a DIFFERENT event sample: must be refused.
        "ransac_v3": runs_root / "baseline-ransac_atransac_full-opt-v3/seed42/predictions_regression.csv",
        "hough_v3": runs_root / "baseline-hough-opt-v3/seed42/predictions_regression.csv",
        "hc_v3": runs_root / "baseline-hc-opt-v3/seed42/predictions_regression.csv",
    }
    loaded = {}
    for label, p in paths.items():
        if not p.exists():
            loaded[label] = None
            continue
        loaded[label] = load_observations(p)

    resnet = loaded["cnn_resnet"].events
    xa = loaded["cnn_xa"].events

    # --- TRK5 vs TRK6: overall, per energy bin, per track count ---
    trk = {"overall": reg_pair(resnet, xa, n_boot, seed)}
    for i, (lo, hi) in enumerate(EXPECTED_ENERGY_BINS):
        last = i == len(EXPECTED_ENERGY_BINS) - 1
        def in_bin(obs, lo=lo, hi=hi, last=last):
            return lo <= obs.truth_mev < hi or (last and obs.truth_mev == hi)
        trk[f"bin_{lo}_{hi}"] = reg_pair(
            _subset_events(resnet, in_bin), _subset_events(xa, in_bin),
            n_boot, seed + 10 + i)
    for k in (1, 2, 3, 4):
        trk[f"tracks_{k}"] = reg_pair(
            _subset_events(resnet, lambda o, k=k: o.n_truth_slots == k),
            _subset_events(xa, lambda o, k=k: o.n_truth_slots == k),
            n_boot, seed + 20 + k)

    # --- per-slot MAE (probe comparability; slots, not events) ---
    def slot_mae(path):
        errs = []
        with open(path, newline="") as f:
            for row in csv.DictReader(f):
                if row["pred_energy_mev"] not in ("", "-1.0"):
                    errs.append(abs(float(row["error_mev"])))
        return float(np.mean(errs)), len(errs)
    trk["per_slot_mae"] = {
        "cnn_resnet": slot_mae(paths["cnn_resnet"]),
        "cnn_xa": slot_mae(paths["cnn_xa"]),
    }

    # --- CNN vs classical on shared events ---
    base_pairs = {}
    for label in paths:
        if label.startswith("cnn_") or loaded[label] is None:
            continue
        for cnn_label, cnn_events in (("cnn_resnet", resnet), ("cnn_xa", xa)):
            base_pairs[f"{label}__vs__{cnn_label}"] = reg_pair(
                loaded[label].events, cnn_events, n_boot, seed + 30)
    return {"trk5_vs_trk6": trk, "baseline_vs_cnn": base_pairs,
            "n_events": {k: (len(v.events) if v else None)
                         for k, v in loaded.items()}}


# ---------------------------------------------------------------------------
# Report printing
# ---------------------------------------------------------------------------

def fmt_p(p):
    if p is None:
        return "n/a"
    if p == 0.0 or p < 1e-300:
        return "<1e-300"
    return f"{p:.3g}"


def print_exp8(res):
    v = res["exp8_val"]
    print("\n## EXP8 val predictions.csv (75k, XA - RN)")
    o = v["overall"]
    print(f"aligned n={v['n_aligned']} label_mismatch={v['n_label_mismatch']} "
          f"positional-label-agreement={v['val_positional_label_agreement']:.4f} "
          f"(channel map recoverable: {v['channel_mapping_recoverable']})")
    print(f"overall acc XA={o['acc_a']:.5f} RN={o['acc_b']:.5f} "
          f"delta={o['delta_acc']*100:+.3f}pp "
          f"CI=[{o['delta_acc_ci'][0]*100:+.3f},{o['delta_acc_ci'][1]*100:+.3f}]pp "
          f"McNemar b={o['mcnemar']['b_a_correct_b_wrong']} "
          f"c={o['mcnemar']['c_a_wrong_b_correct']} "
          f"p={fmt_p(o['mcnemar']['p_exact'])}")

    e = res["exp8_eval"]
    print(f"\n## EXP8 eval_exp8 (aligned n={e['n_aligned']} of "
          f"{e['n_xa']}/{e['n_rn']})")
    print(f"{'ch':5s}{'n':>8s}{'accXA':>8s}{'accRN':>8s}{'dAcc pp':>9s}"
          f"{'pAcc':>9s}{'pHolm9':>9s}{'ftrXA':>8s}{'ftrRN':>8s}"
          f"{'dFTR':>8s}{'dFTR CI':>22s}{'pLeak':>9s}{'pHolm7':>9s}")
    for t, c in e["per_channel"].items():
        f = c.get("ftr")
        row = (f"{t:5s}{c['n']:8d}{c['acc_xa']:8.4f}{c['acc_rn']:8.4f}"
               f"{c['delta_acc']*100:+9.3f}{fmt_p(c['mcnemar_acc']['p_exact']):>9s}"
               f"{fmt_p(c['mcnemar_acc']['p_holm_9ch']):>9s}")
        if f:
            row += (f"{f['xa']:8.4f}{f['rn']:8.4f}{f['delta_xa_minus_rn']:+8.4f}"
                    f"  [{f['delta_ci'][0]:+.4f},{f['delta_ci'][1]:+.4f}]"
                    f"{fmt_p(f['mcnemar_leak']['p_exact']):>9s}"
                    f"{fmt_p(f['mcnemar_leak']['p_holm_7clutter']):>9s}")
        print(row)
    p = e["pooled_fgh_ftr"]
    print(f"pooled FGH n={p['n']} XA={p['xa']:.4f} [{p['xa_wilson'][0]:.4f},"
          f"{p['xa_wilson'][1]:.4f}] ({p['xa_count']}) "
          f"RN={p['rn']:.4f} [{p['rn_wilson'][0]:.4f},{p['rn_wilson'][1]:.4f}] "
          f"({p['rn_count']}) delta={p['delta_xa_minus_rn']:+.4f} "
          f"CI=[{p['delta_ci'][0]:+.4f},{p['delta_ci'][1]:+.4f}] "
          f"p={fmt_p(p['mcnemar_leak']['p_exact'])}")
    s = e["seen_nonnull_acc"]
    print(f"seen non-null (A-D) n={s['n']} acc XA={s['acc_xa']:.5f} "
          f"RN={s['acc_rn']:.5f} delta={s['delta_acc']*100:+.3f}pp "
          f"CI=[{s['delta_acc_ci'][0]*100:+.3f},{s['delta_acc_ci'][1]*100:+.3f}]pp "
          f"p={fmt_p(s['mcnemar']['p_exact'])}")


def print_trk(res):
    t = res["trk"]["trk5_vs_trk6"]
    print("\n## TRK5 (RN) vs TRK6 (XA), event-level equal-weight estimator")
    print(f"{'subset':14s}{'n':>8s}{'rmseRN':>9s}{'rmseXA':>9s}{'dRMSE':>9s}"
          f"{'RMSE CI':>22s}{'maeRN':>9s}{'maeXA':>9s}{'dMAE':>9s}"
          f"{'MAE CI':>22s}{'wilcoxon':>10s}{'d':>7s}")
    for key, r in t.items():
        if key == "per_slot_mae" or not isinstance(r, dict):
            continue
        if r["pairing_status"] != "paired":
            print(f"{key:14s} REFUSED: {r['pairing_status']}")
            continue
        m = r["mae"]
        print(f"{key:14s}{r['n_common_events']:8d}{r['rmse_a_mev']:9.4f}"
              f"{r['rmse_b_mev']:9.4f}{r['rmse_diff_mev']:+9.4f}"
              f"  [{r['bootstrap_ci_95_mev'][0]:+.4f},{r['bootstrap_ci_95_mev'][1]:+.4f}]"
              f"{m['mae_a']:9.4f}{m['mae_b']:9.4f}{m['delta_mae']:+9.4f}"
              f"  [{m['delta_mae_ci'][0]:+.4f},{m['delta_mae_ci'][1]:+.4f}]"
              f"{fmt_p(r['wilcoxon_p_value']):>10s}{r['cohens_d']:7.3f}")
    ps = t["per_slot_mae"]
    print(f"per-slot MAE: RN={ps['cnn_resnet'][0]:.5f} ({ps['cnn_resnet'][1]} slots) "
          f"XA={ps['cnn_xa'][0]:.5f} ({ps['cnn_xa'][1]} slots)")

    print("\n## Baseline vs CNN (event-level, shared events)")
    print(f"{'pair':38s}{'status':>10s}{'n':>8s}{'rmseA':>9s}{'rmseCNN':>9s}"
          f"{'dRMSE':>9s}{'maeA':>9s}{'maeCNN':>9s}{'dMAE':>9s}{'wilcoxon':>10s}")
    for name, r in res["trk"]["baseline_vs_cnn"].items():
        if r["pairing_status"] != "paired":
            print(f"{name:38s}{r['pairing_status']:>10s}")
            continue
        m = r["mae"]
        print(f"{name:38s}{'paired':>10s}{r['n_common_events']:8d}"
              f"{r['rmse_a_mev']:9.4f}{r['rmse_b_mev']:9.4f}"
              f"{r['rmse_diff_mev']:+9.4f}{m['mae_a']:9.4f}{m['mae_b']:9.4f}"
              f"{m['delta_mae']:+9.4f}{fmt_p(r['wilcoxon_p_value']):>10s}")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--runs-root", default="/Users/Reid Hu/MATE-Automation/runs")
    ap.add_argument("--out", default="paired_writeup_results.json")
    ap.add_argument("--n-bootstrap", type=int, default=10000)
    ap.add_argument("--seed", type=int, default=42)
    args = ap.parse_args()
    runs = Path(args.runs_root)

    res = {}
    xa_dir = runs / "EXP8-XA-Ideal-UnseenChannel/auditfix_d570d34_01"
    rn_dir = runs / "EXP8-ResNet-Ideal-UnseenChannel/auditfix_d570d34_01"
    res["exp8_val"] = exp8_val_split(xa_dir, rn_dir, args.n_bootstrap, args.seed)
    res["exp8_eval"] = exp8_eval_split(xa_dir, rn_dir, args.n_bootstrap, args.seed)
    res["trk"] = trk_analysis(runs, args.n_bootstrap, args.seed)

    Path(args.out).write_text(json.dumps(res, indent=2, default=float))
    print_exp8(res)
    print_trk(res)
    print(f"\nwrote {args.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
```
<!-- SOURCE-BODY-END -->
