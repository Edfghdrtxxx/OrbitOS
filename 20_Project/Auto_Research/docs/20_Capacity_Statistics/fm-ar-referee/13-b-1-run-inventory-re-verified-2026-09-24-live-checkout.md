<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.1 Run inventory (re-verified 2026-09-24, live checkout)

12 run dirs under `runs/EXP3-*/`. **No `best_model.pth` exists locally** (`find runs -name '*.pth'` → only two EXP8 checkpoints). `import torch` fails locally. No Garfield H5 locally.

| Run | seed | status | metrics | history | split | preds | battery | attn | train time |
|---|---|---|---|---|---|---|---|---|---|
| ResNet-HC s0 | 0 | complete | ✓ 0.95448 | ✓ | — | — | n/a | n/a | 3.42h |
| ResNet-HC s1 | 1 | complete | ✓ 0.95748 | ✓ | — | — | n/a | n/a | 2.96h |
| ResNet-HC s42 | 42 | complete | ✓ 0.95908 | ✓ | ✓ | **✓ 25k** | n/a | n/a | 2.77h |
| ResNet-Raw s0 | 0 | complete | ✓ 0.88904 | ✓ | — | — | n/a | n/a | 4.84h |
| ResNet-Raw s1 | 1 | complete | ✓ 0.89224 | ✓ | — | — | n/a | n/a | 4.59h |
| ResNet-Raw s42 | 42 | complete | ✓ 0.89248 | ✓ | — | — | n/a | n/a | 4.89h |
| XA-HC s0 | 0 | complete | ✓ 0.95412 | ✓ | — | — | ✓ | ✓ | 2.93h |
| XA-HC s1 | 1 | complete | ✓ 0.95788 | ✓ | — | — | ✓ | ✓ | 3.49h |
| XA-HC s42 | 42 | complete | ✓ 0.95676 | ✓ | — | — | ✓ | ✓ | 3.52h |
| XA-Raw s0 | 0 | recovered¹ | ✓ 0.87572 | ✓ | ✗ 0-byte | — | ✓ | — | ~5.6h² |
| XA-Raw s42 | 42 | complete | ✓ 0.87116 | ✓ | ✓ | — | ✓ | ✓ | 4.91h |
| XA-Raw-lf s42 (4He) | 42 | **complete**³ | ✓ 0.92136 | ✓ | ✗ 0-byte | — | ✓ **corrected**⁴ | — | ~5.4h est |

¹ `run_complete.json` status "recovered": evaluator guard crash on AMP/FP32 drift (diff 1.2e-4); checkpoint metadata patched, weights untouched. `data_split.json` is 0 bytes (sync truncation).
² s0 run.log absent locally; estimate from 23 ep × 14.7 min/ep.
³ **Changed since seed-evidence report:** `metrics.json` + `history.json` + `config.yaml` now synced (early-stopped ep22, best val 0.9214 @ ep13). 4He 2×2 is 1/4 done.
⁴ **Changed:** the local `counterfactual_battery.json` is now the **corrected** run (original 0.9275, zero_q 0.8065, permuted_q 0.9275, zero_cls 0.1935, zero_both 0.5235) — resolves audit flag F2. The buggy 0.7005 file is gone.

**Grid:** triton 2×2 = 11/12 cells (XA-Raw-s1 missing). 4He 2×2 = 1/12 (XA-Raw-lf s42 only).

**Split determinism (re-verified):** the two s42 `data_split.json` files have **byte-identical `val_indices`** (n=25,000, `test_size 0.2`, `stratify: true`) → same-seed arms evaluate on the same events; paired in principle. The lf run's split is 0 bytes locally — re-pull needed before pairing it.

<!-- SOURCE-BODY-END -->
