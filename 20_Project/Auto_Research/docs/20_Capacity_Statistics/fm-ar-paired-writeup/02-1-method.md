<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 1. Method

Single script `scripts/analysis/fm_ar_paired_writeup.py` (verbatim in §8), run as:

```
python3 scripts/analysis/fm_ar_paired_writeup.py \
    --runs-root '/Users/Reid Hu/MATE-Automation/runs' \
    --out paired_writeup_results.json --n-bootstrap 10000 --seed 42
```

Runtime ~7.5 min CPU (dominated by 10k paired bootstrap resamples over 180k–475k events). Full JSON output: `paired_writeup_results.json` in the worktree (also reproduced below in §3–§5 tables).

Reused repo machinery rather than re-implementing (per the spec):

- `src/evaluation/paired_stats.py` — `load_predictions_csv`, `align_pair` (inner join on `event_index`, refuses on `true_label` disagreement), `paired_stats` (exact McNemar + paired bootstrap), `mcnemar_exact_pvalue`.
- `src/evaluation/aggregate_trk_energy_comparison.py` — `load_observations` (strict contract: canonical slot roster per event, broadcast-truth check, `error_mev` consistency to 5e-6, single method label), `paired_stats` (event-level equal-weight estimator; paired bootstrap on RMSE diff; `scipy.stats.wilcoxon`; Cohen's d), `EXPECTED_ENERGY_BINS` = the manuscript's seven bins (0.3–0.8, 0.8–1.3, 1.3–1.8, 1.8–2.3, 2.3–2.8, 2.8–3.3, 3.3–4.0 MeV).
- `src/evaluation/pairing_guard.py` — inspected; its split-file checks are subsumed here by `load_observations`' truth-consistency refusal (TRK6 has no `data_split.json`, so the guard's split comparison is not applicable anyway).
- `src/evaluation/evaluate_exp8_unseen.py` — channel semantics and FTR definition (`_TARGET_CLASSES = (0,1)`, `_CLUTTER_TAGS`, `_FAR_OOD_TAGS`, `_holm_adjust`) matched exactly.

Locally re-implemented (each <15 lines, no public API exists): Holm step-down, Wilson score interval, generic paired percentile bootstrap.

<!-- SOURCE-BODY-END -->
