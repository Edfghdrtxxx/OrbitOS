<!-- Verbatim source section; overview: [[../fm-ar-gpu-plan-draft]] -->
<!-- SOURCE-BODY-START -->
## 0. Two facts that changed since the scout reports were written (verified today)

1. **The 4He label-fix run COMPLETED.** `runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/` now contains `metrics.json` + `history.json` (synced 14:23 today, after all five scout snapshots):
   - **test acc 0.92136, α-recall 0.7254, macro-F1 0.8693**, confusion [[3627,1373],[593,19407]], best epoch 13 (val 0.9214), early-stopped at epoch 22 on val_loss.
   - Consequence: the 4He 2×2 is **1/4 done, not 0/4**. Claim C12 ("4He learnable by XA-Raw ≥0.92") is now a real converged test number — single-seed, but no longer provisional. The headline gap is the **RN-Raw-lf comparator**, not an XA rerun.
   - Its `data_split.json` is **0 bytes locally** (sync truncation, same as XA-Raw-s0) — re-pull from box before paired stats.
   - Its local `counterfactual_battery.json` is the **buggy pre-fix run** (original 0.7005, positional-label bug). Closing doc §13 NOTE records the corrected battery: **original 0.9275, zero_q 0.8065 (−12.1pp)** — the "+9.2pp sign flip" is **retracted**; zero_q hurts on 4He too. The corrected JSON is not yet synced locally (open question Q1).
2. **Budget fact:** ~60 GPU-hours remained before November per the captain (campaign record, 2026-09-23); ~32h of reserve was unspent when the GPU closed. The 16h and 60h cut lines below are against that envelope.

<!-- SOURCE-BODY-END -->
