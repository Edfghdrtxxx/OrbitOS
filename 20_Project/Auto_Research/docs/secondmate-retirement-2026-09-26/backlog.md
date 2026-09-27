## In flight
## Queued
- [ ] fm-ar-gpu-reserve-choice - Captain call: which reserve to run after Rung 1 in the GPU session (repo: mate-automation) (kind: task) (since 2026-09-24) (hold: Deferred: GPU time set aside pending the compute reimbursement talk with the graduate supervisor. When reopened, approve which GPU runs: T1 = Rung 1, the three missing label-fix arms, about 10-15 GPU-h, configs ready, also the honest replacement for Table 4; T3 = EXP2 clean retrain, about 5-8 GPU-h, configs ready; T2 = V6-faithful 400k XA arms, about 30-50 GPU-h, optional; and which reserve after Rung 1: R3a about 7.1 h recommended, NimpSim Option A ResNet arm, or reduced Option B. Plan: data/fm-ar-label-settle/report.md sections 3-4.) (hold-kind: captain)
  Captain hold set: 2026-09-24T13:46:46Z

  The GPU queue (20_doc/workflows/gpu_session_queue.md) spends 14.5 GPU-h on Rung 1 and leaves ~9.5 GPU-h for one reserve. The NimpSim cost scout (data/fm-ar-nimpsim-cost/report.md) found Option B needs ~20-35 GPU-h (range 10-50), so it does not fit. Options: R3a (~7.1 h, no staging; recommended), R3b (~6.5 h), NimpSim Option A ResNet arm only (~5 h, needs NimpSim H5 staged from IMP, pairs against nothing published), or a reduced Option B (workers 8 + per_file_limit 50000, ~8-12 h, borderline, no longer headline scale).
- [ ] fm-ar-queue-drycheck - EXP3: CPU dry-check every GPU-session queue command against current main blocked-by: fm-ar-gpu-reserve-choice (repo: mate-automation) (kind: scout) (since 2026-09-24)
  Read-only scout. Re-run the pack dry-check pattern over gpu_session_queue.md jobs 1-5 on current main, so no GPU-hours burn on a broken command.
- [ ] fm-ar-t1-labelfix-2x2 - GPU: complete the true-4He 2x2 (RN-Raw-lf, XA-HC-lf, RN-HC-lf s42) - replaces V6 Table 4 blocked-by: fm-ar-gpu-reserve-choice (repo: mate-automation) (kind: ship) (since 2026-09-25)
  From fm-ar-label-settle T1: configs/EXP3_{XA_HC,ResNet_HC,ResNet_Raw}_100k_label_fix_seed42.yaml, file_class_list 4He->0, Garfield data from the box-176 archive. ~10-15 GPU-h. Same runs as GPU Rung 1. Awaiting the captain's GPU decision.
- [ ] fm-ar-t3-exp2-retrain - GPU: EXP2 clean retrain (GatedFusion + ConcatFusion 3He4He, 5 files, no carbon) blocked-by: fm-ar-gpu-reserve-choice (repo: mate-automation) (kind: ship) (since 2026-09-25)
  From fm-ar-label-settle T3: configs/EXP2_{Gated,Concat}Fusion_HC_100k_3He4He.yaml already carry the explicit 5-file list and file_class_list [1,0,1,1,1]. ~5-8 GPU-h. Replaces the unrecoverable Windows-only EXP2 artifacts. Awaiting the captain's GPU decision.
- [ ] fm-ar-label-settle-captain-calls - fm-ar-label-settle: captain calls on V6 Table 4 + EXP2 repair (repo: mate-automation) (kind: captain) (since 2026-09-25) (hold: Manuscript findings for the captain's own editing, no firstmate action waits on this: V6 Table 4 is about 80 percent likely triton-vs-rest - annotate as triton, replace with the label-fix 2x2 once T1 runs, or drop the task claims; EXP2 3He4He arm - annotate with the 95.7-95.8 estimate, retrain via T3, or drop. File:line and suggested wording in data/fm-ar-label-settle/report.md section 1.4. GPU approvals moved to fm-ar-gpu-reserve-choice.) (hold-kind: captain)
  Captain hold set: 2026-09-25T02:03:25Z

  Origin: fm-ar-label-settle

## Done
- [x] fm-ar-index-repoint - Repoint auto-research index paths to the second-mate home https://github.com/Edfghdrtxxx/OrbitOS/pull/18 (repo: orbitos) (kind: ship) (merged 2026-09-26)
  Replace the main-home auto-research-index.md path with this second-mate home path in L0_Start_Here.md line 41 and docs/00_Campaign/where-things-live.md line 9. Routed intake; delivery direct-PR +yolo.
