> Origin: `fm-ar-label-blast` scout report; recorded 2026-09-24.

# fm-ar-label-blast — EXP3 label-map blast radius + seed-robust artifact inventory

**Date:** 2026-09-24 · **Worker:** fm-ar-label-blast (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (`runs/` is gitignored, read there); CPU-local analysis only. No box-176/AutoDL/IMP contact. No manuscript or lead files touched.
**Inputs consumed:** `fm-ar-referee/report.md`, `fm-ar-methods-audit/report.md`, `20_doc/EXP3_closing_analysis_2026-09-24.md`, `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md`, `20_doc/audits/2026-09-23_raw-hc-input-audit.json`, all EXP1/EXP2 openspec docs + `99_System/.scratch/exp{1,2}-impl/`, S1–S5 legacy specs, `configs/`, `runs/` artifacts, `10_Papers-Thesis/Physics_Informed/main.tex` (read-only).

---

# PART 1 — Blast radius of the `{4:0}` label map beyond EXP3

## 1.1 The core finding: two Garfield label conventions exist in the wild

The bug is not "the map is wrong" — it is a **map↔file-convention mismatch**, and which convention a given file lineage carries is the whole question:

| Convention | Mapping | Where measured/claimed |
|---|---|---|
| **OLD** | `{3He:0, 4He:1, d:2, p:3, t:4}` | **Measured** on box-176 files: `20_doc/audits/2026-09-23_raw-hc-input-audit.json` — every file's `labels` is constant; `..._t_...h5` → 4, `..._4He_...h5` → 1 (both Raw and HC variants). Same convention documented as "old mapping" in `openspec/changes/EXP1-matched-training-size/01_converter_verification.md:68`. |
| **V6 / openspec_v6** | `{p:0, d:1, t:2, 3He:3, 4He:4}` | Claimed for the **Windows legacy files** (`D:\...\dataset\Garfield_HC\`): `01_converter_verification.md:53-70` (converter `determine_label_and_info()` filename regex), `EXP1 task.md:11`, and the metadata attr `label_map_version='openspec_v6'` measured on those files (`EXP1 review_01.md:58`, `review_03b.md:11`). |

`_LABEL_MAP_3HE4HE = {4:0, others:1}` (`src/run_experiment.py:628`, same as `src/data/dataloader.py:49`) is **correct under the V6 convention and silently trains triton-vs-rest under the OLD convention**. The 2026-09-23 guard (`run_experiment.py:389-411`, commit `4ac3f1c`) now rejects Garfield binary configs without `file_class_list`.

**Direct per-event proof on EXP3 artifacts** (new this report): `runs/EXP3-ResNet-HC-100k-seed42/20260921_002013/predictions.csv` joined through `data_split.json` (`val_indices` are global indices into the 5×100k sorted file space; sorted order = `3He,4He,d,p,t`) shows the **triton file contributes all 5,000 class-0 events and the 4He file is entirely class 1** — triton-vs-rest confirmed at the prediction level, not just the config level.

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

## 1.3 New finding: EXP2's "³He/⁴He" runs are α-vs-rest **with carbon in the negative class**

The EXP2 3He4He configs set `dataset: Garfield_HC` with no `hdf5_files` list → directory glob. The 13C/14C HC files were written into that same directory on 2026-03-18 (`exp2-impl/01_data_generation.md:56,99-100`), *before* the 3He4He runs launched later that day. Result: 7 files × 25k = 175k total → 140k/35k split, matching the observed 35k val (5k class-0 + 30k class-1) that `01_exp_results_investigation.md:225` flags as "unexplained." **Explained.**

Consequences:
- EXP2-Gated/Concat "3He4He" = α vs {p,d,t,3He,13C,14C} — a *different, harder* task than EXP1's α vs {p,d,t,3He}. Their 96.94/96.98% vs EXP1's 95.80% is a cross-task, cross-val-set comparison; the manuscript's "ordering was the same (96.98, 96.94, 95.80)" (`main.tex:381`) already hedges "not fully controlled" but attributes it to val size only — the negative-pool difference is undisclosed.
- The EXP2 implementation log's "4 files (3He, 4He, 6He, Non-alpha)" (`implementation_log.md:166`) is wrong on both count and names — likely stale prose; the 35k val proves 7 files.

## 1.4 The one unsettled question: Windows-file label values at V6/EXP1 run time

Everything above is settled except the actual `labels` dtype values inside the **Windows** `D:\...\dataset\Garfield_{HC,Raw}\*.h5` files. Local evidence:

- `label_map_version='openspec_v6'` attr present on the Windows Garfield_HC files (measured March 2026, `EXP1 review_01.md:58`, `review_03b.md:11`). The relabel script `relabel_garfield_v6_labels.py` sets this attr **after** rewriting labels (`01_converter_verification.md:24,68`; `review_01b.md:25` verifies the idempotency guard).
- **But the attr is not proof of label values**: if the converter wrote `openspec_v6` while emitting OLD labels (e.g., the V5-wrapper default path — the same path whose default mapped both 13C and 14C to label 1, `exp2-impl/01_data_generation.md:49`), the attr lies. The EXP1 docs' label table (`03_data_subsampling.md` §2) asserts `4He=4` but its own verification line only confirms "a single unique label value (0 through 4 respectively)" per file — it never says which file holds which value.
- The box-176 files are OLD-mapped (measured). If they were copied from Windows *after* relabeling they would be v6-mapped — so either they are an independent conversion (V5-wrapper default = OLD) or pre-relabel copies. Both are consistent with Windows files being v6-mapped **now**; neither says anything about **February 2026** (V6 run time) vs the relabel script's creation date.

Two scenarios:
- **(a) Windows files v6-mapped at V6 run time** → V6 Table 4 = true α-vs-Nonα; EXP1/EXP2 = true α-vs-rest; only the EXP3 box lineage carried the bug. EXP1-vs-V6 comparisons valid.
- **(b) Windows files OLD-mapped until an openspec-era relabel** → V6 Table 4 = triton-vs-rest (same bug as EXP3, undetected for 8 months); EXP1/EXP2 clean only if runs post-date the relabel (EXP1 ran 2026-03-17, EXP2 2026-03-18 — plausibly after). Under (b), the EXP1-vs-V6-RN-HC near-tie (95.80 vs 95.75) is a cross-task coincidence, and the manuscript's entire V6 section reports the wrong positive class.

**Cheapest verification (none possible locally — no Garfield H5 on this Mac):**
1. **Windows box, ~1 min:** `h5py.File(r'D:\...\Garfield_HC\sim_inv_12C300MeV_4He_t_100k_garfield_v5_hc.h5')['labels'][:].unique()` + `['metadata'].attrs['label_map_version']` on the `t` and `4He` files. If `t`→4: files are OLD-mapped *now* → V6 was buggy (files can only have been relabeled *to* v6, never back). If `t`→2: v6-mapped now → proceed to step 2 for run-time state.
2. **Windows box, ~2 min:** `predictions.csv` + `data_split.json` (or the run's saved val indices) from `V6_ResNet_HC_20260204_004518` — same join I ran for EXP3-RN-HC-s42 (§1.1): which species file contributes the class-0 events. Decisive for the *run-time* mapping regardless of current file state.
3. **Tiebreaker:** `relabel_garfield_v6_labels.py` mtime / git history on the Windows repo vs V6 run-dir timestamps (2026-02-02/04).

## 1.5 Manuscript numbers at risk (`main.tex`, read-only)

| Location | Number/claim | Status |
|---|---|---|
| Table 4 (`tab:v6-ablation`, L282-291) + §5.3 narrative (L295-298) + abstract/conclusion "96.6% α vs Nonα" (L503) | all four V6 rows, α-recall 87.4%, "+0.8pp HC / +1.6pp Raw" XA gains, "+1.5/+2.3pp" HC gains | **AT RISK pending §1.4.** Important nuance: even under scenario (b) the *comparative* claims survive — both arms share the same wrong task, so XA-vs-RN and HC-vs-Raw deltas are internally valid; only the task identity ("α") and the α-recall column are wrong. Same logic already applies to EXP3 (closing doc §1). |
| §5.5 first experiment (L369): "on the ³He/⁴He task … 95.80/95.77 … +1.77pp" | EXP1 + V6-RN-HC numbers | Task name wrong regardless (it's α-vs-rest, not ³He-vs-⁴He — methods-audit M2). Numbers valid α-vs-rest iff Windows files v6-mapped; the EXP1↔V6 comparison is invalid under scenario (b). |
| §5.5 second experiment (L381): "on the ³He/⁴He task … 96.98/96.94/95.80" | EXP2 numbers | Same naming issue + **undisclosed carbon-contaminated negative pool and non-comparable val sets** (§1.3). |
| Table 2 (`tab:classification-results`, L259-267): 91.9/96.1, 82.8/89.7, 91.5/93.0 | V4 NimpSim | **CLEAN** — per-file classes; unaffected by any label-map issue. |
| §5.7 EXP8 (L328-359) + Table 5 | unseen-channel | **CLEAN** — `file_class_list` bypass. |
| §6 reconstruction (all TRK numbers) | — | **unaffected**. |
| Any EXP3-derived number quoted as 4He | — | illegal except `XA-Raw-lf` 0.92136 (already the campaign's rule). |

## 1.6 Reconciliation note for the methods audit

`fm-ar-methods-audit` items 32-34 read `task_type "3He_4He"` as "label 4 (⁴He)→0" — correct **only** under the v6 file convention. Under the OLD convention the same map yields triton-vs-rest (what EXP3 hit). The task_type name is a third fiction: it is α-vs-rest on 5+ species files, never ³He-vs-⁴He. Per-dataset truth: Garfield box files OLD (`t=4`), Garfield Windows files *claimed* v6 (`4He=4`, unverified values), NimpSim `HDF5_Form` degenerate 0/1 (per-file classes only), TRK multiplicity, EXP2-13C14C explicit 0/1.

---

# PART 2 — EXP3 seed-robust evidence from on-disk artifacts

## 2.1 Run inventory (re-verified today; matches referee B.1)

12 run dirs, all `metrics.json`+`history.json`+`config.yaml` present. **No EXP3 `.pth` locally** (`find runs -name '*.pth'` → only the two EXP8 checkpoints). `import torch` → ModuleNotFoundError. No Garfield H5 locally (`data/` = 23 MB, TRK/SRIM only).

| Run | acc | preds | split | battery | attn |
|---|---|---|---|---|---|
| RN-HC s0/s1/s42 | 0.95448/0.95748/0.95908 | — / — / **✓25k** | — / — / ✓ | n/a | n/a |
| RN-Raw s0/s1/s42 | 0.88904/0.89224/0.89248 | — | — | n/a | n/a |
| XA-HC s0/s1/s42 | 0.95412/0.95788/0.95676 | — | — | ✓×3 | ✓×3 |
| XA-Raw s0/s42 | 0.87572/0.87116 | — | 0B / ✓ | ✓×2 | — / ✓ |
| XA-Raw-lf s42 (4He) | 0.92136 | — | 0B | ✓ corrected | — |

Grid: triton 2×2 = 11/12 (XA-Raw-s1 missing); 4He 2×2 = 1/12. s42 `val_indices` byte-identical across arms (n=25,000, verified) → pairing valid in principle.

## 2.2 Local CPU inference: infeasible (3 independent blockers)

No EXP3 checkpoints locally, no torch, no Garfield H5. Nothing under an hour is possible here; the proven path is box-176 CPU (`exp3_dump_predictions.py` → sync `predictions.csv`/`npz`, ~2–4 CPU-h for all 11, per referee G0 — consistent with the 6-checkpoint battery already run under the 2 GB cap).

## 2.3 Seed statistics (recomputed independently; n=25,000 val/run)

| Arm | seeds | mean ± sd | t-95% CI | class-0 (triton) recall |
|---|---|---|---|---|
| RN-HC | 0,1,42 | 0.95701 ± 0.0023 | [0.9512, 0.9628] | 0.847/0.839/0.848 |
| XA-HC | 0,1,42 | 0.95625 ± 0.0019 | [0.9515, 0.9611] | 0.830/0.854/0.828 |
| RN-Raw | 0,1,42 | 0.89125 ± 0.0019 | [0.8865, 0.8960] | 0.609/0.578/0.636 |
| XA-Raw | 0,42 | 0.87344 ± 0.0032 | [0.8445, 0.9024] (n=2) | 0.560/0.548 |
| XA-Raw-lf (4He) | 42 | 0.92136 | single | 0.725 (α) |

Paired comparisons (same seed; per-event preds exist for only ONE run → true McNemar impossible; unpaired z + McNemar bound χ²≥nΔ²):

| Comparison | Δ (XA−RN) | unpaired z (p) | McNemar χ²≥ (p≤) | Δ bal-acc | Δ c0-rec |
|---|---|---|---|---|---|
| HC s0/s1/s42 | −0.04/+0.04/−0.23pp | −0.19/+0.22/−1.29 | ≤0.13 (n.s.) | −0.66/+0.56/−0.93pp | −1.7/+1.4/−2.1pp |
| **Raw s0** | **−1.33pp** | −4.62 (3.8e-6) | ≥4.44 (≤0.035) | −2.67pp | −4.9pp |
| **Raw s42** | **−2.13pp** | −7.39 (1.5e-13) | ≥11.36 (≤7.5e-4) | −4.62pp | −8.7pp |

Representation effect (HC−Raw, same arch+seed): +6.5 to +8.6pp, 5/5 same sign — seed-robust.

## 2.4 New diagnostic this report: per-species errors, RN-HC-s42 (n=25,000)

Joining `predictions.csv` through `val_indices` to source files (sorted `3He,4He,d,p,t`, 100k/file):

| species | acc | →pred-0 (false triton) |
|---|---|---|
| 3He | 0.9935 | 33/5110 (0.6%) |
| 4He | 0.9934 | 32/4848 (0.7%) |
| d | 0.9637 | **183/5038 (3.6%)** |
| p | 0.9966 | 17/5004 (0.3%) |
| t (true class 0) | 0.8484 | — |

The model's dominant confusion is **d→t** (Z²A: d=2, t=3 — the closest pair to triton), and 4He→t leakage is minimal (0.7%). The triton task is a real stopping-power discrimination problem, not a degenerate one — which is why the XA<RN Raw deficit on it is meaningful as a mechanism result even though it is not the paper's task.

## 2.5 Verdict per paper claim (triton-task semantics)

| Claim | Verdict | Evidence |
|---|---|---|
| XA ≈ RN on HC | **seed-robust** (3/3) | Δ∈[−0.23,+0.04]pp |
| XA < RN on Raw | **seed-robust on observed seeds; grid 11/12** | 2/2 seeds, McNemar-bound p≤0.035/7.5e-4; survives balanced-acc (−2.7/−4.6pp) |
| Deficit concentrates in minority recall | **seed-robust** (2/2) | Δc0-rec −4.9/−8.7pp |
| HC > Raw | **seed-robust** (5/5) | +6.5–8.6pp |
| Query content-free (H3 refuted) | **seed-robust + task-robust, power caveat on Raw** | permuted_q Δ=0 on 6/6 ckpts incl. corrected 4He |
| Classifier physics load-bearing on Raw | **direction-robust; OOD-artifact reading open until D5** | zero_cls→minority-prevalence on 3/3 Raw + 4He |
| zero_q hurts | **direction seed-robust, magnitude wild** | −5.8 to −57.1pp triton; −12.1pp 4He |
| s0 anomaly (zero_both>zero_cls) | **single-seed; signature replicates on 4He** | 0.5235>0.1935 |
| HC attention sink / Raw Bragg-focus | sink **seed-robust** (3/3); Bragg **single-seed** | XA-Raw-s0/lf attention never run |
| **Central claim XA>RN growing on Raw** | **contradicted on triton; untested on 4He** | 4He 2×2 = 1/4, no comparator |
| 4He learnable (XA-Raw-lf 0.9214) | **single-seed, real converged number** | no RN comparator, no second seed |

**Honest position:** identical to referee's — on the measured (triton) task XA never beats RN and is significantly worse exactly where the paper predicted the largest gain; on true 4He exactly one cell of one arm exists. Comparative claims (XA-vs-RN, HC-vs-Raw) are internally valid on the triton task; only the task identity is wrong.

## 2.6 Minimum further runs to close each gap

| Gap | Action | Cost |
|---|---|---|
| Paired stats (all 5 same-seed pairs) | box-176 CPU `exp3_dump_predictions.py` ×11 ckpts + re-sync two 0-byte `data_split.json` (XA-Raw-s0, lf) | **0 GPU-h, ~2–4 CPU-h** |
| D5 discriminator (load-bearing vs OOD artifact) | `permuted_cls`/`mean_cls`/`scaled_cls` + pred histograms ×6 ckpts | **0 GPU-h, ~1–2 CPU-h** |
| 4He comparator (decides central claim) | train RN-Raw-lf s42 | **~4.8 GPU-h** |
| 4He 2×2 | XA-HC-lf + RN-HC-lf s42 | **~6.4 GPU-h** |
| 4He seed-robustness | lf 2×2 on seeds 0,1 (6 runs) | **~33 GPU-h** |
| Capacity control (attn_dim 512) | gated on D1–D5 readout | **~5.5 GPU-h** |
| Triton grid hole | XA-Raw-s1 | **~5.5 GPU-h** (skippable if pivoting to 4He-only reporting) |
| Attention gaps | exp4 metrics on XA-Raw-s0 + lf | **0 GPU-h, ~1 CPU-h** |

Cheapest decisive path unchanged: CPU predump + D5 + attention (~4–7 box CPU-h) → then the single RN-Raw-lf GPU run.

---

# PART 3 — Open questions for the lead (non-blocking)

1. **Windows Garfield label values** (§1.4): the single highest-value check in this report — 1 minute of h5py on the Windows box decides whether Table 4 is α-vs-Nonα or triton-vs-rest. If files are v6-mapped now, the V6 run's `predictions.csv`+split join (§2.4 method) decides the run-time mapping.
2. Do all 11 EXP3 `best_model.pth` still exist on box 176 (incl. RN arms)? G0 needs them.
3. Did `predump_chain`/`diag_chain`/`d5_chain` outputs land? Nothing new synced since the referee report (verified: no `predictions.npz`, no `h1_diagnostics.json`, no D5 conditions in any battery JSON — all still 458–482 B, 5 conditions).
4. XA-Raw-s0 and lf `data_split.json` are 0 bytes locally — re-pull needed for pairing.
5. EXP2-3He4He carbon contamination (§1.3): worth a line in the closing doc — the "³He/⁴He" EXP2 numbers are α-vs-{p,d,t,3He,13C,14C} on a 35k val, not comparable to EXP1's 25k val even before the naming issue.
6. Any Kuchera arm pinned to a triton-task EXP3 `data_split.json` inherits triton-task semantics — flag when those results land.

# Reproduction

```bash
# label conventions: python3 json.load on 20_doc/audits/2026-09-23_raw-hc-input-audit.json
#   -> per-file raw_labels {3He:0,4He:1,d:2,p:3,t:4}
# EXP3 inventory/stats: json.load every runs/EXP3-*/*/metrics.json (script: Part 2.3 logic)
# split identity: val_indices byte-identical across the two s42 data_split.json (n=25000)
# per-species join: predictions.csv event_index -> val_indices -> //100000 -> sorted file_paths
#   (species order 3He,4He,d,p,t) -> table in §2.4; triton file = all class-0
# EXP8 immunity: config file_class_list + metrics.json data_inputs.channels.*.assigned_class
# EXP2 7-file glob: configs (no hdf5_files) + 35k val CM totals + 13C/14C file dates in
#   99_System/.scratch/exp2-impl/01_data_generation.md
# torch: python3 -c "import torch" -> ModuleNotFoundError; find runs -name '*.pth' -> EXP8 only
```
