<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 3. EXP8 (certified pair, `auditfix_d570d34_01`, seed 42)

### 3.1 Val set (`predictions.csv`, 75k events)

| | XA | RN | Δ (XA−RN) | 95% CI | McNemar |
|---|---|---|---|---|---|
| accuracy | 0.94196 | 0.93989 | **+0.207pp** | [+0.065, +0.347]pp | b=1532, c=1377, **p=0.00429** |

Reproduces the probe's "+0.21pp [+0.07,+0.35], p=0.004" exactly (10k resamples vs probe's settings account for the last digit).

### 3.2 Caveat: val `event_index` is not recoverable to channels

`predictions.csv` `event_index` is `np.arange(N)` over the val loader's iteration order (`src/evaluation/evaluate.py:133`). Mapping it positionally into `data_split.val_indices` reproduces `true_label` on only **59.9%** of events (chance level) — the loader order differs from the recorded index order (likely a different `global_indices` permutation at split time). The dump is confirmed to be the **val** set by its per-file label histogram (15088/15000/15000/15000/14912 = `val_indices` file counts exactly; the test set's is 14938/15000/14990/15000/15072). Consequence: per-channel val statistics are **not** computable from these artifacts; only the overall paired comparison in §3.1 is valid. If per-channel val numbers are ever wanted, the dump must be regenerated with global indices.

### 3.3 Test set (`eval_exp8/predictions.csv`, 475k events, 9 channels)

Per-channel paired accuracy (McNemar exact, Holm over all 9 channels) and false-target rate (FTR = P(pred ∈ {A,B} | channel); McNemar on the leak indicator, Holm over the 7-channel clutter family — the manuscript's convention):

| ch | n | acc XA | acc RN | Δacc pp | p_acc | p_Holm(9) | FTR XA | FTR RN | ΔFTR | ΔFTR 95% CI | p_leak | p_Holm(7) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | 15,000 | 0.9239 | 0.9233 | +0.06 | 0.737 | 1 | — | — | — | — | — | — |
| B | 15,000 | 0.9091 | 0.9111 | −0.20 | 0.334 | 1 | — | — | — | — | — | — |
| C | 14,990 | 0.9181 | 0.9158 | +0.23 | 0.231 | 1 | 0.0819 | 0.0842 | −0.0023 | [−0.0061,+0.0013] | 0.231 | 0.925 |
| D | 14,938 | 0.9468 | 0.9466 | +0.02 | 0.933 | 1 | 0.0532 | 0.0534 | −0.0002 | [−0.0033,+0.0029] | 0.933 | 1 |
| null | 15,072 | 1.0000 | 1.0000 | +0.00 | 1 | 1 | 0.0000 | 0.0000 | +0.0000 | [+0.0000,+0.0000] | 1 | 1 |
| E | 100,000 | 0.9433 | 0.9427 | +0.06 | 0.335 | 1 | 0.0567 | 0.0573 | −0.0006 | [−0.0018,+0.0006] | 0.335 | 1 |
| F | 100,000 | 0.8905 | 0.9623 | −7.18 | <1e-300 | <1e-300 | 0.1095 | 0.0377 | **+0.0718** | [+0.0700,+0.0737] | <1e-300 | <1e-300 |
| G | 100,000 | 0.8908 | 0.9645 | −7.37 | <1e-300 | <1e-300 | 0.1092 | 0.0355 | **+0.0737** | [+0.0719,+0.0756] | <1e-300 | <1e-300 |
| H | 100,000 | 0.8927 | 0.9598 | −6.71 | <1e-300 | <1e-300 | 0.1073 | 0.0402 | **+0.0671** | [+0.0652,+0.0689] | <1e-300 | <1e-300 |
| **pooled F+G+H** | 300,000 | | | | | | 0.1087 [0.1076,0.1098] (32,598) | 0.0378 [0.0371,0.0385] (11,338) | **+0.0709** | [+0.0698,+0.0720] | <1e-300 | |
| **seen A–D (non-null)** | 59,928 | 0.92448 | 0.92419 | +0.03pp | | | | | | | p=0.764 | |

**Every manuscript number reproduced:** FTR cells 0.0842/0.0819, 0.0534/0.0532, 0.0000, 0.0573/0.0567, 0.0377/0.1095, 0.0355/0.1092, 0.0402/0.1073; Δ column −0.0023/−0.0002/0.0000/−0.0006/+0.0718/+0.0737/+0.0671; pooled 0.1087 vs 0.0378, Δ+0.0709, counts 32,598 and 11,338; Holm p<10⁻⁶ for F/G/H; seen non-null n=59,928, acc 0.924 both arms, seen Δ=+0.03pp p=0.76 (the probe's "seen ABCD tie"). New here: per-channel ΔFTR bootstrap CIs and the 9-channel accuracy family.

<!-- SOURCE-BODY-END -->
