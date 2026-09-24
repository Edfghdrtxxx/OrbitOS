<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 1.2 Result-by-result verdict table

| Result | Files used | Label path | Verdict | Evidence |
|---|---|---|---|---|
| **EXP3** 11/12 runs (all arms, seeds 0/1/42) | box-176 `Garfield_{Raw,HC}` (OLD-mapped) | `{4:0}` raw-label map | **BUGGY — triton-vs-rest** | audit JSON (measured t=4); run configs lack `file_class_list` (verified all 11); predictions.csv per-species check (§1.1); closing doc §1 |
| **EXP3 XA-Raw-label-fix s42** | same box files | `file_class_list [1,1,1,1,0]` in declared `(p,d,t,3He,4He)` order | **CLEAN — true 4He-vs-rest** | `runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/config.yaml:24-35` (4He file → class 0); test 0.92136 |
| **EXP1-XA-HC-100k** (95.80%) | Windows `D:\...\Garfield_HC\` 5 species files | `{4:0}` raw-label map | **CLEAN if Windows files are openspec_v6 — see §1.4 caveat** | `configs/EXP1_XA_HC_100k.yaml` (no task_type → default 3He_4He); `exp1-impl/09_execution.md:85-103` (sorted 5 files at `D:\`, {4:0} remap, 25k alpha/100k non-alpha); `label_map_version='openspec_v6'` attr measured on those files (`review_01.md:58`) |
| **EXP2 Gated/Concat 3He4He** (96.94/96.98%) | Windows `Garfield_HC\` — **7 files globbed** (5 species + 13C + 14C) | `{4:0}` raw-label map | **CLEAN task (α-vs-rest) but contaminated negative pool — see §1.3** | `configs/EXP2_*_3He4He.yaml` (`dataset: Garfield_HC`, no `hdf5_files` → dir glob); 35k val = 5k α + 30k non-α (7 files × 5k) resolves the "unexplained" flag in `01_exp_results_investigation.md:225`; 13C/14C files landed in `Garfield_HC\` on 2026-03-18 (`exp2-impl/01_data_generation.md:99-100`) |
| **EXP2 13C/14C** (84.63/85.74/86.07%) | 2 files, explicit `--label 0/1` at conversion | `{0:0,1:1}` | **CLEAN** | `exp2-impl/01_data_generation.md:45-59` (13C→0, 14C→1, verified `labels` unique per file) |
| **EXP8 unseen-channel** (both arms) | `data/exp8/*.h5` | `file_class_list [0,1,2,2,2]` — raw labels bypassed | **CLEAN** | `configs/EXP8_XA_Ideal_UnseenChannel.yaml:33-40`; run config identical; `evaluate_exp8_unseen.py` assigns class per file; metrics.json `data_inputs.channels.*.assigned_class` confirms |
| **V6 legacy 2×2** (Table 4: 96.6/95.8/95.1/93.5) | Windows `Garfield_{HC,Raw}\` (Feb 2026 runs) | legacy `remap_labels_alpha_vs_all` = `{4:0}` | **UNSETTLED — hinges on whether Windows files were already openspec_v6 in Feb 2026; see §1.4** | `S4 spec:39-42` ("Legacy maps label 4 (4He) -> 0"); if files were OLD-mapped at run time, Table 4 is triton-vs-rest with the identical bug |
| **V4-HeHe** (96.1%) / **V4-HeHe-RN** (91.9%) / **V4-CC** (89.7%) / **V4-CC-RN** (82.8%) / **V4-12C13C** / **V4-pdt** (93.0/91.5%) | NimpSim `HDF5_Form\` per-species files | per-file class assignment (2- or 3-file tasks) | **CLEAN regardless of raw-label values** | `S3 spec:40-42,130-132` (`class_map {0:"3He",1:"4He"}`, `data_files: [3He_100k.h5, 4He_100k.h5]`); NimpSim raw labels are degenerate 0/1 anyway (`EXP8 propose.md:17`: p=1,d=1,3He=0,13C=1,12C=0) so classes could only ever come from file identity |
| **TRK1–6** | `trk_h5` | multiplicity labels / regression | **N/A — unaffected** | labels are track counts, not isotopes |
| **Z01** (Logistic-Moments, ResNet-Generic) | publisher dataset | own pipeline | **N/A — unaffected** | `runs/Z01-*/config.yaml` (z01 arm_kind, balanced 4480/1120 split) |
| **Classical baselines** (ransac/hough/hc/*) | TRK data | regression | **N/A — unaffected** | energy/angle regression, no isotope labels |
| **Kuchera transfer baselines** | Garfield via `file_class_list` | file→class | **CLEAN by design** | `20_doc/baselines/kuchera_transfer_baselines.md:5` ("alpha-vs-rest via `file_class_list`") — note: any Kuchera arm pinned to a *triton-task* EXP3 split inherits that task's semantics |
| **EXP4 attention metrics** | — | measured on EXP3 checkpoints | **task-contaminated interpretation, mechanically fine** | `20_doc/EXP4_attention_collapse_finding.md:6,40` already flags all measured checkpoints as triton-task; class-0 rows are triton recall |

<!-- SOURCE-BODY-END -->
