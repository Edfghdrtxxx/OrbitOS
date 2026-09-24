<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 2.1 Run inventory (re-verified today; matches referee B.1)

12 run dirs, all `metrics.json`+`history.json`+`config.yaml` present. **No EXP3 `.pth` locally** (`find runs -name '*.pth'` → only the two EXP8 checkpoints). `import torch` → ModuleNotFoundError. No Garfield H5 locally (`data/` = 23 MB, TRK/SRIM only).

| Run | acc | preds | split | battery | attn |
|---|---|---|---|---|---|
| RN-HC s0/s1/s42 | 0.95448/0.95748/0.95908 | — / — / **✓25k** | — / — / ✓ | n/a | n/a |
| RN-Raw s0/s1/s42 | 0.88904/0.89224/0.89248 | — | — | n/a | n/a |
| XA-HC s0/s1/s42 | 0.95412/0.95788/0.95676 | — | — | ✓×3 | ✓×3 |
| XA-Raw s0/s42 | 0.87572/0.87116 | — | 0B / ✓ | ✓×2 | — / ✓ |
| XA-Raw-lf s42 (4He) | 0.92136 | — | 0B | ✓ corrected | — |

Grid: triton 2×2 = 11/12 (XA-Raw-s1 missing); 4He 2×2 = 1/12. s42 `val_indices` byte-identical across arms (n=25,000, verified) → pairing valid in principle.

<!-- SOURCE-BODY-END -->
