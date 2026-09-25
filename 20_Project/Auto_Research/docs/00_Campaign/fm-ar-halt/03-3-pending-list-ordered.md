<!-- Verbatim source section; overview: [[../fm-ar-halt]] -->
<!-- SOURCE-BODY-START -->
## 3. Pending list (ordered)

1. **GPU Rung 1** (captain-gated): RN-Raw-lf s42 (~4.8h) then XA-HC-lf + RN-HC-lf (~6.4h). Protocol-ready per fm-ar-test-split (launch as merged + held-out eval). Preflight needs CUDA; PR#12 pack staged on box. Box 176 currently no-GPU; box 193 data status unverified (no connect string in records).
2. **D6-s42 battery re-run** (box 176 CPU, ~75 min): `exp3_counterfactual_battery.py --run-dir runs/EXP3-XA-Raw-100k-seed42/20260922_185618 --split val --device cpu --batch-size 64 --max-events 2000 --conditions permuted_cls mean_cls scaled_cls clipped_cls centered_q zero_ch0 zero_ch1`. Run **solo** (concurrent jobs caused two silent deaths).
3. **diag-s0** (~30 min at 500 ev): `exp3_h1_diagnostics.py --xa-run-dir runs/EXP3-XA-Raw-100k-seed0/20260923_084135 --rn-run-dir runs/EXP3-ResNet-Raw-100k-seed0/20260921_231713 --split val --device cpu --batch-size 32 --max-events 500`.
4. **Redump ×5** (~10 min each): `exp3_dump_predictions.py --run-dir <RD> --split val --device cpu --batch-size 64 --max-events 2000` for XA-Raw s42 `20260922_185618`, XA-Raw s0 `20260923_084135`, XA-Raw lf `20260923_154749`, XA-HC s42 `20260922_085316`, XA-HC s0 `20260922_122647`. Then `exp3_paired_stats.py` (check `n_label_mismatch==0`).
5. **heldout_unused eval** on lf checkpoint: `exp3_heldout_unused.py --run-dir runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749 --per-file-take 400 --device cpu --batch-size 32`.
6. **Prereg scorer re-run** once D6-s42 lands: `scripts/analysis/exp3_prereg_score.py --battery <s42 _d5.json> <hc batteries> --attention <g7 jsons> --out <file>` (local; no torch needed).
7. **Windows label check** (captain): h5py label read on `t` file + V6 `predictions.csv`×`data_split.json` join; EXP2 Option A carbon-drop re-score (~5 min).
8. **GPU reserve choice** (captain, deferred to supervisor talk): fm-ar-gpu-reserve-choice.
9. **B2 copy** of the s42 battery to close formally-pending prereg rows (~15–30 min CPU).
10. **e23 batching rewrite** then run.
11. **NimpSim `3He_100k.h5`/`4He_100k.h5` location** — still unanswered; needed for Option A/B.
12. **`exp3_collect_tables.py`** (PR#8) after G0/G1/G7 — G7 now done; G0/G1 status per firstmate.
13. **Closing-doc revision pass** per fm-ar-closing-check (R1/R2/R7/R13–15) — doc edits, no box dependency.
14. **Local push**: MATE-Automation master is 3 commits ahead of origin (`83d58c1`, `65e8160`, `d23a948` incl. PR15 merge). Not pushed per halt instruction.

<!-- SOURCE-BODY-END -->
