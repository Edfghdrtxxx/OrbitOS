<!-- Verbatim source section; overview: [[../fm-ar-difficulty]] -->
<!-- SOURCE-BODY-START -->
## 1. What exists on disk (and what doesn't)

| Source | Per-isotope resolution? | Used |
|---|---|---|
| `runs/EXP8-{XA,ResNet}-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/metrics.json` → `per_channel_confusion` | Yes — per-isotope predicted-class counts for 8 channels (p, d, t, 3He, null seen; 4He, 12C, 13C, 14C unseen) | Primary |
| `runs/EXP3-ResNet-HC-100k-seed42/20260921_002013/predictions.csv` + `data_split.json` | Yes — reconstructed (see §3) | Secondary |
| All other 11 EXP3 runs | **No** — `metrics.json` has only the aggregate 2×2 confusion matrix; no `predictions.csv` | Aggregate only |
| `counterfactual_battery.json` (6 files) | No — accuracy scalars only | — |
| Z01 runs | No eval artifacts at all | — |
| TRK5/6, baselines | Regression tasks, not isotope classification | — |

So the pair-level evidence base is: **EXP8 both arms (seen pairs n=6, cross-class pairs incl. unseen n=13, same-class pairs n=15)** and **EXP3 ResNet-HC s42 t-task (n=4)**. Everything is seed-42, single-seed — consistent with the anchor's caveat.

<!-- SOURCE-BODY-END -->
