<!-- Verbatim source section; overview: [[../fm-ar-seed-evidence]] -->
<!-- SOURCE-BODY-START -->
## 1. Run inventory (`/Users/Reid Hu/MATE-Automation/runs/EXP3-*`)

12 run directories, 11 completed training runs + 1 partial. All trained on AutoDL (`/root/autodl-tmp/z01-exec/runs/...` per `run_complete.json`), artifacts rsynced back. **No `best_model.pth` exists anywhere under local `runs/`** (verified: `find runs -name '*.pth'` → only two EXP8 checkpoints).

| Run dir | seed | status | metrics | history | split | preds | battery | attn | dur |
|---|---|---|---|---|---|---|---|---|---|
| EXP3-ResNet-HC-100k-seed0/20260921_092858 | 0 | complete | ✓ | ✓ (37 ep) | — | — | n/a | n/a | 3.5h |
| EXP3-ResNet-HC-100k-seed1/20260921_125613 | 1 | complete | ✓ | ✓ (32 ep) | — | — | n/a | n/a | 3.0h |
| EXP3-ResNet-HC-100k-seed42/20260921_002013 | 42 | complete | ✓ | ✓ (30 ep) | ✓ | **✓ 25k** | n/a | n/a | 2.8h |
| EXP3-ResNet-Raw-100k-seed0/20260921_231713 | 0 | complete | ✓ | ✓ (20 ep) | — | — | n/a | n/a | 4.9h |
| EXP3-ResNet-Raw-100k-seed1/20260922_041244 | 1 | complete | ✓ | ✓ (19 ep) | — | — | n/a | n/a | 4.7h |
| EXP3-ResNet-Raw-100k-seed42/20260921_181834 | 42 | complete | ✓ | ✓ (20 ep) | — | — | n/a | n/a | 5.0h |
| EXP3-XA-HC-100k-seed0/20260922_122647 | 0 | complete | ✓ | ✓ (31 ep) | — | — | ✓ | ✓ | 3.0h |
| EXP3-XA-HC-100k-seed1/20260922_152448 | 1 | complete | ✓ | ✓ (37 ep) | — | — | ✓ | ✓ | 3.5h |
| EXP3-XA-HC-100k-seed42/20260922_085316 | 42 | complete | ✓ | ✓ (38 ep) | — | — | ✓ | ✓ | 3.6h |
| EXP3-XA-Raw-100k-seed0/20260923_084135 | 0 | **recovered**¹ | ✓ | ✓ (23 ep) | ✗ 0-byte | — | ✓ | — | 7.4h |
| EXP3-XA-Raw-100k-seed42/20260922_185618 | 42 | complete | ✓ | ✓ (20 ep) | ✓ | — | ✓ | ✓ | 13.7h |
| EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749 | 42 | **partial**² | — | — | — | — | ✓ | — | killed |

¹ `run_complete.json` status `"recovered"`: "evaluator guard crash on AMP/FP32 drift (diff 1.2e-4); checkpoint metadata patched to recomputed acc; weights untouched". Its `data_split.json` is a **0-byte file** (sync truncation) — re-pull from box.
² Label-fix (4He) run killed at epoch ~13; local dir contains only `counterfactual_battery.json` — no metrics/history/config synced.

**Grid completeness:** triton 2×2 has 11/12 cells (XA-Raw-seed1 missing). 4He 2×2 has 0/12 (one partial XA-Raw-s42).

**Split determinism (verified):** `src/data/dataloader.py:379-394` — `train_test_split(random_state=seed)` on positions in the concatenated 125k-event file space. The two s42 `data_split.json` files (ResNet-HC and XA-Raw) contain **byte-identical `val_indices`** → same-seed arms evaluate on the same 25k events (different representations of the same events). Same-seed cross-arm comparisons are therefore *paired in principle*; only per-event predictions are missing to exploit it.

<!-- SOURCE-BODY-END -->
