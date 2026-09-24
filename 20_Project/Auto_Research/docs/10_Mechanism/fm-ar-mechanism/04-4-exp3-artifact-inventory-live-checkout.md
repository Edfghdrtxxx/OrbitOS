<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 4. EXP3 artifact inventory (live checkout)

All rows below were read directly from `/Users/Reid Hu/MATE-Automation/runs`; `accuracy`, macro-F1, α-recall, and best epoch come from each `metrics.json`; config/fusion/label information comes from each `config.yaml`. “Preds” means `predictions.csv`; “split” means non-empty `data_split.json`; “ckpt” means `best_model.pth`; “complete” means `run_complete.json` exists.

| Run (timestamp) | seed | task/config | acc | macro-F1 | α-recall | best ep | preds | split | ckpt | complete |
|---|---:|---|---:|---:|---:|---:|---|---|---|---|
| ResNet-HC `20260921_092858` | 0 | Garfield_HC; fusion none; triton map | 0.95448 | 0.92670 | 0.84720 | 30 | no | no | no | yes |
| ResNet-HC `20260921_125613` | 1 | Garfield_HC; fusion none; triton map | 0.95748 | 0.93069 | 0.83940 | 27 | no | no | no | yes |
| ResNet-HC `20260921_002013` | 42 | Garfield_HC; fusion none; triton map | 0.95908 | 0.93357 | 0.84840 | 27 | **yes** | **yes** | no | yes |
| ResNet-Raw `20260921_231713` | 0 | Garfield_Raw; fusion none; triton map | 0.88904 | 0.80974 | 0.60860 | 17 | no | no | no | yes |
| ResNet-Raw `20260922_041244` | 1 | Garfield_Raw; fusion none; triton map | 0.89224 | 0.80864 | 0.57820 | 3 | no | no | no | yes |
| ResNet-Raw `20260921_181834` | 42 | Garfield_Raw; fusion none; triton map | 0.89248 | 0.81858 | 0.63560 | 18 | no | no | no | yes |
| XA-HC `20260922_122647` | 0 | Garfield_HC; cross-attention; triton map | 0.95412 | 0.92518 | 0.83040 | 23 | no | no | no | yes |
| XA-HC `20260922_152448` | 1 | Garfield_HC; cross-attention; triton map | 0.95788 | 0.93206 | 0.85360 | 21 | no | no | no | yes |
| XA-HC `20260922_085316` | 42 | Garfield_HC; cross-attention; triton map | 0.95676 | 0.92894 | 0.82760 | 22 | no | no | no | yes |
| XA-Raw `20260923_084135` | 0 | Garfield_Raw; cross-attention; triton map; split file is 0 bytes | 0.87572 | 0.78392 | 0.55980 | 7 | no | no | no | yes |
| XA-Raw `20260922_185618` | 42 | Garfield_Raw; cross-attention; triton map | 0.87116 | 0.77595 | 0.54820 | 12 | no | **yes** | no | yes |
| XA-Raw label-fix `20260923_154749` | 42 | Garfield_Raw; `file_class_list=[1,1,1,1,0]` (4He-vs-rest) | 0.92136 | 0.86928 | 0.72540 | 13 | no | **0-byte** | no | **no** |

The label map in `src/run_experiment.py:627-629` maps raw label 4 to class 0. The 11 triton-task runs therefore are valid triton-vs-rest diagnostics, not 4He results. The label-fix config's explicit file-class list is the only local 4He-vs-rest training artifact. The closing analysis records a corrected 4He battery (`original=0.9275`, `zero_q=0.8065`), but the local label-fix JSON is the known buggy pre-fix battery (`original=0.7005`); I treat the corrected values as report evidence only, not as a local JSON-backed prediction dump.

<!-- SOURCE-BODY-END -->
