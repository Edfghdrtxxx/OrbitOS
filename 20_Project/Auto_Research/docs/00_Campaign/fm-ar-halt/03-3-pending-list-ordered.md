<!-- Verbatim source section; overview: [[../fm-ar-halt]] -->
<!-- SOURCE-BODY-START -->
## 3. Pending list (ordered)

1. **GPU Rung 1** (captain-gated): RN-Raw-lf s42 (~4.8h) then XA-HC-lf + RN-HC-lf (~6.4h). Protocol-ready per fm-ar-test-split (launch as merged + held-out eval). Preflight needs CUDA; PR#12 pack staged on box. Box 176 currently no-GPU; box 193 data status unverified (no connect string in records).
2. ~~**D6-s42 battery re-run**~~ **DONE 2026-09-25 on box 176 (CPU)** — VERIFY-OK, ~70 min; output `counterfactual_battery_d5.json`. See [[00_Campaign/fm-ar-cpu-box|fm-ar-cpu-box]].
3. ~~**diag-s0**~~ **DONE 2026-09-25 on box 176** — VERIFY-OK, ~5 min at 500 ev; output `h1_diagnostics.json`. See [[00_Campaign/fm-ar-cpu-box|fm-ar-cpu-box]].
4. ~~**Redump ×5**~~ **DONE 2026-09-25 on box 176** — all five `predictions_paired.csv` produced (~8–9 min each). `exp3_paired_stats.py`: cross-family pairs correctly refused by the pairing guard; the 2 legal within-family pairs PAIRED-OK in 9s. See [[00_Campaign/fm-ar-cpu-box|fm-ar-cpu-box]].
5. ~~**heldout_unused eval** on lf checkpoint~~ **DONE 2026-09-25 on box 176** — VERIFY-OK, ~8 min; `held_out_acc = 0.9205` on 2000 never-seen events. See [[00_Campaign/fm-ar-cpu-box|fm-ar-cpu-box]].
6. ~~**Prereg scorer re-run** once D6-s42 lands~~ **DONE 2026-09-25 (local)** — `prereg_score_s42.json` produced from the s42 battery + s0/lf attention JSONs. See [[00_Campaign/fm-ar-cpu-box|fm-ar-cpu-box]].
7. **Windows label check** (captain): h5py label read on `t` file + V6 `predictions.csv`×`data_split.json` join; EXP2 Option A carbon-drop re-score (~5 min).
8. **GPU reserve choice** (captain, deferred to supervisor talk): fm-ar-gpu-reserve-choice.
9. **B2 copy** of the s42 battery to close formally-pending prereg rows (~15–30 min CPU).
10. **e23 batching rewrite** then run.
11. **NimpSim `3He_100k.h5`/`4He_100k.h5` location** — still unanswered; needed for Option A/B.
12. **`exp3_collect_tables.py`** (PR#8) after G0/G1/G7 — G7 now done; G0/G1 status per firstmate.
13. **Closing-doc revision pass** per fm-ar-closing-check (R1/R2/R7/R13–15) — doc edits, no box dependency.
14. **Local push**: MATE-Automation master is 3 commits ahead of origin (`83d58c1`, `65e8160`, `d23a948` incl. PR15 merge). Not pushed per halt instruction.

<!-- SOURCE-BODY-END -->
