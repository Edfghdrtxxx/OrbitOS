<!-- Verbatim source section; overview: [[../fm-ar-cpu-box]] -->
<!-- SOURCE-BODY-START -->
- Rerun with only the 2 legal within-family pairs: `PAIRED-OK` in 9s. Output: `/root/autodl-tmp/.autodl/paired_stats.{json,md}` (on Mac `runs/_autodl_out/`).
- OBSERVATION: XA-HC vs RN-HC, seeds {0,1,42}, n=2000 each, `n_label_mismatch=0`: dacc {+0.0040, +0.0045, −0.0055}, pooled mean +0.001 ± 0.0056 — no significant architecture gap on HC.
- OBSERVATION: XA-Raw vs RN-Raw, seeds {0,42}, `n_label_mismatch=0`: dacc {−0.0140, −0.0170}, pooled −0.0155 ± 0.0021 — small consistent XA deficit on Raw (paired, same events); minority-recall delta mean −0.065.

### 5. heldout_lf — VERIFY-OK
- Cmd: `exp3_heldout_unused.py --run-dir runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749 --per-file-take 400 --device cpu --batch-size 32`
- Runtime: ~8 min (13:54→14:02). Output: `held_out_metrics.json` + `held_out_split.json` (+ `predictions_heldout.{csv,npz}` on box).
- OBSERVATION: label-fix run evaluated on 2000 **never-seen** events (400/file × 5 files, disjoint from train/val/test): **held_out_acc = 0.9205** vs best_val 0.9214 — Δ−0.0009. No overfit-to-val signal. Per-class recall: class0 0.7325, class1 0.9675.
- `CHAIN2_DONE` 14:02:46+08:00.

<!-- SOURCE-BODY-END -->
