---
title: Auto-Research L1 — Current Campaign
type: plan
status: stopped
created: 2026-09-19
revised: 2026-09-19
parent: "[[L0_Start_Here]]"
related:
  - "[[L2_Contracts]]"
  - "[[Auto_Research_Blueprint]]"
---
# L1 — Current Campaign

Load after [[L0_Start_Here]] when you need identity, two-tier boundaries, paths, or blockers. Paths below are **planned/unverified** unless marked otherwise. This file does **not** claim that remote directories or Z-01 bytes currently exist. Scientific reasoning lives in Experiment Recordings, not here.

## Two-tier campaign boundary

| Tier | Role | Budget | Design | Goal |
|---|---|---|---|---|
| **Z-01 smoke** | Public AT-TPC sim capability / cross-detector pipeline check | **≤2.0** GPU-hours | **Exactly two frozen arms** (CPU LogReg-moments + generic image-only ResNet18). No search. No fused arm. **Not** physics-informed | Confirm hashed-input → train → eval → digest on public p/C data that is **not** a MATE GEM surrogate. Cannot support physics-informed-vs-generic |
| **MATE EXP3** | Publication-relevant seed-variance on the NIM A 2×2 table | Remaining budget after the ≤2.0 Z-01 attempt (up to **~14.0**). Not gated on Z-01 success; EXP3's own MATE data / provenance / approval / preflight | Existing proposal: 3 seeds × 4 configs, conditional first gate | Error bars on reported effects; not a new architecture hunt |

Do not spend the EXP3 reserve on Z-01 search. Do not claim Z-01 angle or energy regression. Do **not** label any Z-01 arm physics-informed. **Z-01 success or scientific lift is not required for EXP3.** If Z-01 fails, record it and continue to EXP3 when EXP3's own MATE data, provenance, approval, and preflight independently pass. A high LogReg score does **not** unlock a fused arm.

## Campaign identity

| Field | Value |
|---|---|
| Scientific direction | Z-01: classification smoke only. Campaign claim `physics_vs_generic_with_traditional_context` is **not instantiable on Z-01** (no independent physics vector) |
| Primary claim lock | Campaign-level `physics_vs_generic_with_traditional_context` where a physics vector exists; **Z-01 cannot support it** |
| First window | `z01_then_exp3` |
| Z-01 capability | **Classification only** (p vs C). Not angle. Not energy. Not physics-informed |
| Z-01 frozen arms | **A** CPU LogReg on `[Ixx,Iyy,Ixy,M]`; **B** generic `ModifiedResNet18` image-only. No fused/cross-attention |
| EXP3 publication goal | Seed-variance on CrossAtt/ResNet × HC/Raw (3×4, conditional cheapest-first gate) so single-run paper numbers are not the only evidence |
| Direction lock | first window `z01_then_exp3`; council `strategic_gates` **complete for Z-01 design**; route `imp_then_autodl`; recording `labelled_hypotheses` |
| Outer state | `stopped 2026-09-24 at captain's call — AutoDL closed; EXP3 label-fix 2×2 incomplete (XA-Raw-lf killed ep~13, val_acc 0.9214); see [[L0_Start_Here]]` |
| Science state (2026-09-24) | Counterfactual battery on 5 triton checkpoints: **query poisoning refuted** (permuted_q Δ=0 all seeds); classifier physics load-bearing on Raw (zero_cls → 0.19–0.41), redundant on HC (0.95+); deficit is downstream of routing — H1 capacity vs redundancy-crowding, decision table pre-registered in `EXP3_closing_analysis_2026-09-24.md` §10 |
| Resume state (2026-09-24 ~15:10 CST) | **Box 176 up in no-GPU mode** (`ssh -p 43812 root@connect.westb.seetacloud.com`, 2GB cgroup cap). RUNNING: `diag_chain.sh` (label-fix battery re-run w/ fixed labels → D1–D4 s42 → D1–D4 s0); `predump_chain.sh` (12 prediction dumps → Z01 eval — started early, runs concurrently); `d5_chain.sh` (permuted_cls/mean_cls ×6 ckpts, waits for diag); `e23_chain.sh` (EXP8 clip/zero/permuted physics on unseen channels, waits for all). DONE: counterfactual battery 6/6 ckpts (H3 refuted: permuted_q Δ=0 everywhere); label-fix run COMPLETED on box (test 0.92136, first valid 4He result; other 3 arms never ran — chain died post-eval); E1 feature audit (carbon Iyy ~4× OOD). PENDING RESULTS: corrected lf battery JSON, D1–D4 ×2, D5 ×6, prediction dumps ×12, Z01 eval, E2/E3. OPEN THREADS: (a) angle baseline (PR#2 merged) needs TRK H5 — IMP server job, not box 176; (b) GPU plan draft (16h/60h cuts) is captain's budget call — do not act; (c) physics normalization audit scout pending; (d) buggy label-fix battery JSON is void — corrected run in flight; (e) paired stats need dumps to finish. Scripts on box: `.autodl/{diag,d5,predump,e23}_chain.sh`, battery/dump/diag scripts in `z01-exec/scripts/analysis/` |
| GPU budget | **0.0 / 16.0** cumulative; planned split ≤2.0 Z-01 + ~14.0 EXP3 |
| v0 CLI | `validate` / `plan` / `digest` only; no subprocess launch |
| Input contract (Z-01) | `attpc_sim_npy_v0` (`exp8_hdf5_v1` is illegal on Z-01 `.npy`) |
| `campaign_id` | `z01-overnight-20260919-01` (**provisional/unverified**) |
| host | `78f345b3a1-6b25251c` (**provisional/unverified**) |
| `max_gpu_hours` | **16.0** (**provisional/unverified**) |
| `auto_acquire` | `false` |
| `data_root` | **unresolved** — not staged |
| Recording | `/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/2026-09-19_z01-overnight-20260919-01.md` |

Identity values above are **not** launch approval. `data_root` is still missing. Credentials and topology are not provisioned or observed. Direct authorization for a **read-only IMP inventory** (env seam) has **not** been given. Four-value confirmation of host, campaign ID, data root, and cap is still required before `running`.

## Z-01 capability status (verified metadata only)

From Zenodo record `3473953` and arXiv `2008.02757` (no local bytes, no invented hashes):

- 8000 unlabeled + 2400 labelled 2D events; proton vs carbon labels.
- Four files with publisher MD5s; local SHA-256s **not** computed.
- 128×128 single-channel projections summed over time; published VGG16+k-means clusters were near-perfect on this representation.
- **Legal task:** classification smoke. **Illegal on this dataset:** angle regression, energy regression, labelling an arm physics-informed, adding a fused arm.

## Frozen Z-01 arms (strategic council 2026-09-19)

Three-advisor consensus: **physics-informed is unwarranted on Z-01**; traditional context is mandatory. Moments are image-derived duplicates of the same pixels.

| Arm | Spec |
|---|---|
| **A** traditional CPU | `LogisticRegression(penalty=l2, C=1, class_weight=balanced, solver=lbfgs, max_iter=1000, random_state=42)` on standardized `[Ixx, Iyy, Ixy, M]` from raw nonnegative weights. Zero-mass → all zeros, counted. Negative/non-finite pixel → hard preflight fail; no clipping. `StandardScaler` on train only |
| **B** generic CNN | MATE `ModifiedResNet18`, `fusion_type=none`, `in_channels=1`, pretrained, seed 42, batch 32, 15 epochs, warmup 2, AMP on CUDA, early-stop `val_loss` patience 4, no augmentation. Image mean/std from train only |

Publisher train/test fixed. Stratified seed-42 80/20 train/val inside publisher train. Test once after both arms train. Primary `pid_balanced_accuracy` **emitted**, informational (McNemar + paired bootstrap). Artifact integrity hard. Ceiling effect is the main validity threat. **No tuning.**


## Path status

**Documented roots** (recorded in existing server notes; **not live-verified** this session):

| Role | Path | Status |
|---|---|---|
| IMP durable MATE root | `/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2` | documented / unverified |
| AutoDL ephemeral work root | `/root/autodl-tmp` | documented / unverified |
| AutoDL repo convention | `/root/autodl-tmp/MATE-Automation-V4/` | documented / unverified |

**Planned targets** (do not claim these directories or Z-01 bytes exist). Route: **IMP then AutoDL**.

| Role | Path | Status |
|---|---|---|
| Canonical IMP data landing | `/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2/autoresearch_inputs/z01/` | planned / unverified |
| AutoDL execution mirror | `/root/autodl-tmp/MATE-Automation-V4/autoresearch_inputs/z01/` | planned / unverified |

Prefer IMP as the durable canonical landing and AutoDL as a mirrored execution staging root. Local Mac has no torch / no TRK H5; it is not a training host. Host identities remain unknown until live confirmation.

## Engineering readiness

- Standalone `attpc_sim_npy_v0` adapter, frozen LogReg/ResNet runner, one-shot evaluator, and coordinator route are implemented. The plan binds approved config/input/commit/experiment values to exact fresh run directories; Z-01 rejects `base_config`.
- Artifacts use non-pickle LogReg arrays and tensor-only ResNet state dictionaries. Pretrained ResNet18 requires an already-local cache file whose SHA-256 is approved in the arm config; the runner does not acquire weights.
- Publisher test evaluation is immutable and comparison authorization happens before test/model loading. Paired bootstrap is stratified by truth class; zero-discordant McNemar is reported as identical; the 0.98 LogReg ceiling flag is descriptive only.
- Verification: 27 Z-01 contract tests pass with 4 torch-gated skips on this Mac; 41 coordinator tests pass; source compilation passes.

## Current blockers

- **C-09 is `code-path mitigated / operational authorization unresolved` (not closed).** IMP and AutoDL SSH seams are env-only, known-host `RejectPolicy`, fail closed, and have dry-run probes. IMP supports key-first/password fallback and fresh jump channels; AutoDL is key-only with bounded output and traversal-safe downloads. Each seam passes 16 focused tests plus behavior/security review. **No probe, remote access, data transfer, or launch.** Do not read tracked credential documents.
- Credentials and topology are **not** provisioned or observed. Direct point-of-risk authorization for a **read-only IMP inventory** has not been given.
- Z-01 files and byte SHA-256s are absent (do not invent hashes; `auto_acquire` stays false). The approved local ResNet18 cache hash is also unresolved.
- Planned remote directories above are unverified. Interview host `78f345b3a1-6b25251c` and campaign ID `z01-overnight-20260919-01` are **provisional/unverified**, not live-confirmed. `data_root` remains unresolved.
- No `human_approval.json` matching host / `campaign_id` / `data_root` / `max_gpu_hours`.
- v0 must not spawn training. Live `running` is a separate confirmation.

## Exact artifact locations

When a campaign exists, machine artifacts live under the MATE campaign root (`campaigns/<campaign_id>/` or `$MATE_CAMPAIGN_ROOT/<campaign_id>/`). Do **not** duplicate them into Experiment Recordings; link the hashed files.

| Artifact | Path |
|---|---|
| Frozen manifest | `manifest.frozen.json` + `manifest.sha256` |
| Input manifest | `campaign_inputs.json` |
| Status log | `status.jsonl` |
| Approval | `human_approval.json` |
| Generated configs | `generated_configs/` |
| Digest | `digest.md` |
| Terminal | `campaign_complete.json` or `campaign_terminal.json` |
| Per-arm runs | `runs/<experiment_id>/<campaign_id>/` (must not already exist) |

**None of those campaign artifacts exist yet.** Control-plane docs live in OrbitOS:

- Startup state: `20_Project/Auto_Research/L0_Start_Here.md`
- This campaign packet: `20_Project/Auto_Research/L1_Current_Campaign.md`
- Loop authority: `20_Project/Auto_Research/Auto_Research_Blueprint.md`
- Frozen Wave 1 history: `20_Project/Auto_Research/Auto_Research_Mid-Automation_Report.md`
- Scientific recording: `/Users/Reid Hu/MATE-Automation/20_doc/Experiment Recordings/`
- Coordinator: `/Users/Reid Hu/MATE-Automation/src/autoresearch/`
- EXP3 proposal: `/Users/Reid Hu/MATE-Automation/openspec/changes/EXP3-seed-variance/propose.md`
