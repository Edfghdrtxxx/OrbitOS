<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 2. Alignment verification (done before any statistic)

| Pair | Key | Result |
|---|---|---|
| EXP8 val `predictions.csv` XA vs RN | `event_index` | 75,000/75,000 aligned, **0 label mismatches** |
| EXP8 `eval_exp8/predictions.csv` XA vs RN | `(channel, global_idx)` — `global_idx` is unique only within a channel (each unseen file indexes 0–99,999 locally); row order verified identical | 475,000/475,000 aligned, **0 label mismatches** |
| TRK5 vs TRK6 | `event_index` | 180,000/180,000 shared, truth agrees within 1e-5 MeV on all |
| 5 manuscript-family baselines vs TRK5/TRK6 | `event_index` | 180,000/180,000 shared each; 179,964 paired observations after dropping each baseline's 36 non-finite events |
| `baseline-{ransac_atransac_full,hough,hc}-opt-v3` vs TRK5/TRK6 | `event_index` | **0 shared events → refused** (`no_common_observations`). These are different samples; pairing them would be meaningless. |

<!-- SOURCE-BODY-END -->
