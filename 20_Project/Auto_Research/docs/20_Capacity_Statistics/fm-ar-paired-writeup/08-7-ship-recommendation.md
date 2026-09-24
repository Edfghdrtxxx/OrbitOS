<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 7. Ship recommendation

**The script is worth shipping.** It is general (any two `predictions.csv`/`predictions_regression.csv` dumps), reuses the repo's own guards and estimators, refuses unaligned pairs loudly, and fills a real gap: no existing script produces per-channel EXP8 paired stats or per-bin TRK paired stats from the CSVs alone (`exp3_paired_stats.py` needs `predictions_paired.csv` dumps that don't exist locally; `aggregate_trk_energy_comparison.py` needs the full metrics.json roster). Suggested home if promoted: `scripts/analysis/paired_writeup.py` with `--runs-root` defaulting to the repo's `runs/`. One caveat for shipping: the eval_exp8 alignment relies on identical row order (verified) with a `(channel, global_idx)` keyed fallback — that contract should be asserted, as the script does.

Known limitation (not a script bug): per-channel **val** statistics for EXP8 are unrecoverable because `predictions.csv` `event_index` doesn't map to `data_split.val_indices` order (§3.2). Regenerating that dump with global indices would fix it; out of scope here (needs torch + checkpoint on the GPU box).

<!-- SOURCE-BODY-END -->
