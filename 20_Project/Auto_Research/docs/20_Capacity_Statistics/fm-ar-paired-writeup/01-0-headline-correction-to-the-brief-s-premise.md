<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 0. Headline correction to the brief's premise

The brief says "the manuscript currently reports these comparisons as unpaired point estimates." **That is no longer true for the EXP8 FTR table and the energy-regression family.** `main.tex` already carries paired McNemar + Holm (EXP8, line 330/336-353), paired Wilcoxon + Bonferroni over the 21-pair family (lines 399, 442, 447), and a paired bootstrap CI on the pooled FTR excess (line 330). What this task adds is therefore:

1. **Independent reproduction** of every paired number in the manuscript from the raw prediction CSVs — all reproduced to the printed precision (see §3–§5). No discrepancies found.
2. **New numbers the manuscript does not have:** per-channel ΔFTR bootstrap CIs (the table omits them "for brevity"), the 9-channel accuracy McNemar family, the val-set paired accuracy result, per-energy-bin and per-track-count paired TRK5/TRK6 statistics, and paired MAE differences for all CNN-vs-classical pairs.
3. **One artifact caveat that matters for reproducibility:** the 75k `predictions.csv` `event_index` cannot be mapped back to channels (§3.2).

<!-- SOURCE-BODY-END -->
