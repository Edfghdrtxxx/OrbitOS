<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 2.1 Run inventory (re-verified today, live checkout)

12 run dirs, 11 completed training runs + 1 recovered. **No `best_model.pth` exists locally for any EXP3 run** (`find runs -name '*.pth'` → only two EXP8 checkpoints). `import torch` fails locally. No Garfield H5 locally (`data/` = 23MB total, sidecar only).

| Run | seed | status | acc | c0-recall* | macroF1 | best ep | preds | split | battery | attn | train |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ResNet-HC | 0 | complete | 0.95448 | 0.8472 | 0.9267 | 30 | ✗ | ✗ | — | — | 3.42h |
| ResNet-HC | 1 | complete | 0.95748 | 0.8394 | 0.9307 | 27 | ✗ | ✗ | — | — | 2.96h |
| ResNet-HC | 42 | complete | 0.95908 | 0.8484 | 0.9336 | 27 | **✓ 25k csv** | ✓ | — | — | 2.77h |
| ResNet-Raw | 0 | complete | 0.88904 | 0.6086 | 0.8097 | 17 | ✗ | ✗ | — | — | 4.84h |
| ResNet-Raw | 1 | complete | 0.89224 | 0.5782 | 0.8086 | 3 | ✗ | ✗ | — | — | 4.59h |
| ResNet-Raw | 42 | complete | 0.89248 | 0.6356 | 0.8186 | 18 | ✗ | ✗ | — | — | 4.89h |
| XA-HC | 0 | complete | 0.95412 | 0.8304 | 0.9252 | 23 | ✗ | ✗ | ✓ | ✓ | 2.93h |
| XA-HC | 1 | complete | 0.95788 | 0.8536 | 0.9321 | 21 | ✗ | ✗ | ✓ | ✓ | 3.49h |
| XA-HC | 42 | complete | 0.95676 | 0.8276 | 0.9289 | 22 | ✗ | ✗ | ✓ | ✓ | 3.52h |
| XA-Raw | 0 | **recovered**¹ | 0.87572 | 0.5598 | 0.7839 | 7 | ✗ | **0-byte** | ✓ | ✗ | ~5.6h est² |
| XA-Raw | 42 | complete | 0.87116 | 0.5482 | 0.7760 | 12 | ✗ | ✓ | ✓ | ✓ | 4.91h |
| XA-Raw-lf (4He) | 42 | complete | 0.92136 | 0.7254 | 0.8693 | 13 | ✗ | **0-byte** | ✓ corrected³ | ✗ | ~5.4h est² |

\* class-0 recall = **triton** recall for the 11 un-fixed runs (label bug: `_LABEL_MAP_BINARY {4:0}` picks raw label 4 = triton, `src/data/dataloader.py:49`); true ⁴He recall only for label-fix.
¹ `run_complete.json` status "recovered": evaluator guard crash on AMP/FP32 drift (diff 1.2e-4); checkpoint metadata patched, weights untouched.
² run.log not synced; estimate from epochs × 14.7 min.
³ Corrected battery verified on disk: original 0.9275, zero_q 0.8065 (−12.1pp), permuted_q 0.9275, zero_cls 0.1935, zero_both 0.5235. The buggy 0.7005 JSON is gone.

**Grid:** triton 2×2 = 11/12 cells (XA-Raw-s1 never ran). 4He 2×2 = 1/12 (XA-Raw-lf s42 only).
**Split determinism (re-verified):** the two s42 `data_split.json` files have **byte-identical `val_indices`** (n=25,000, test_size 0.2, stratify, seed 42) → same-seed arms evaluate on identical events → paired in principle.

<!-- SOURCE-BODY-END -->
