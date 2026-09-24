> Origin: `fm-ar-methods-audit` scout report; recorded 2026-09-24.

# Scout report: manuscript method statements vs. code (EXP3 campaign audit)

**Question (firstmate spec):** which method/setup claims in `10_Papers-Thesis/Physics_Informed/main.tex` disagree with the code/configs that produced the reported results? Deliverable: claim-by-claim table (verified / mismatch / unverifiable, file:line on both sides) + prioritized mismatch list. Manuscript read-only; nothing under `10_Papers-Thesis/` touched.

**Manuscript audited:** `/Users/Reid Hu/MATE-Automation/10_Papers-Thesis/Physics_Informed/main.tex` (606 lines, rev. with EXP8 unseen-channel section). Line numbers below are that file.

**Evidence base.** Three provenance tiers:
- **This repo (worktree HEAD = live checkout code):** EXP1/EXP2/EXP3/EXP8/TRK1–6/Z01/baselines. Code cited as `src/...`, `configs/...`, `scripts/...` (identical in worktree and live checkout).
- **Run artifacts (live checkout `runs/`, gitignored):** `runs/<EXP>/<stamp>/{config.yaml,metrics.json,...}` — read-only.
- **Legacy V3/V4/V6 codebase** (Windows box, not locally readable): behavior pinned by the reproduction specs `20_doc/Legacy Codebase/S1..S5-*/spec.md`, which record audited legacy-code behavior with "divergence resolutions" (D-*). Where a claim depends on legacy code I cite the spec line; these are documented facts about the published runs, not inferences.

Verdict key: **V** = verified, **M** = mismatch, **P** = partially wrong / incomplete disclosure, **U** = unverifiable locally (needs box/legacy file).

---

## 1. Claim-by-claim table

### §2 Detector & simulation (lines 92–156)

| # | Manuscript claim (line) | Verdict | Evidence |
|---|---|---|---|
| 1 | Gas 95% ⁴He / 5% CO₂ @ 500 mbar; tracking region z∈[0,295.7], y∈[−146.5,146.5], x∈[−100,100] mm; 80×48 triangular pads (94) | V | `scripts/preprocessing/convert_trk_server_v2.py:150-157` (IMAGE_WIDTH=80, HEIGHT=48, Y_MIN=−146.5, Y_MAX=146.5, Z_MIN=0, Z_MAX=295.7, X_MIN=−100, X_MAX=100); bin widths 3.6625/6.160417 mm (lines 160-161) match "≈3.66/6.16 mm" (166). Gas/pressure are simulation inputs — not checkable in code (U for the numbers themselves, but consistent with `data/srim/alpha_HeCO2_95_5_0.5bar.csv` naming). |
| 2 | MATEROOT/Geant4 sim; ⁷ species × 10⁵ events; ¹²C+⁴He @ 300 MeV (105-107) | V | `20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md` dataset sections; EXP8 config lists 100k-event files per species (`configs/EXP8_XA_Ideal_UnseenChannel.yaml`, `per_file_limit: 100000`); eval metrics confirm 100,000 events/file (`runs/EXP8-XA-*/auditfix_d570d34_01/eval_exp8/metrics.json` `data_inputs.channels.*.event_count`). |
| 3 | Garfield++ post-processor: hits → nearest pad (80×48), charge/pad; drift-time = **charge-weighted** mean of x_norm; ENC 800 e⁻ ≈ σ 0.027 MeV additive Gaussian; no LLD (142) | V | Charge-weighted mean confirmed by `S1 spec` Req-3.2 table (line ~346: Garfield_Raw = "Charge-weighted mean (from C postprocessor)"). ENC/σ confirmed by measurement: `20_doc/EXP3_garfield_noise_robustness_analysis.md:19` — measured Ch0 noise σ≈0.028 vs stated 0.027 MeV, noise added to every pad by `garfield_postprocessor_v5.C`. **Caveat:** "maps hits to the nearest pad" is wrong for Garfield_Raw — see #11. |
| 4 | Garfield datasets = 5 species (p,d,t,³He,α) × 10⁵ = 500k; two variants Garfield_Raw / Garfield_HC; HDF5 (N,80,48,2) float32, channels padSignals/driftTime (144) | P | 5-species/500k true for the V5/V6 production (`S4 spec:24-25`). **But** 13C/14C Garfield_HC files exist and were used for EXP2: `configs/EXP2_*_13C14C.yaml` → `Garfield_HC/sim_12C300MeV_13C_elastic_100k_garfield_v5_hc.h5` (+14C), generated per `openspec/changes/EXP2-fusion-mechanism-comparison/implementation_log.md:50`. So "comprise five particle species" is incomplete — the fusion-comparison runs used two more Garfield species. |
| 5 | TRK dataset 1: 1.2M events, 12 strata = multiplicity(1–4)×energy{0.5,2.0,3.2 MeV}, 10⁵/stratum, polar-angle truth (152) | V | `openspec/changes/TRK-trajectory-reconstruction/task.md:51` (1,200,000 events), `01_remote_data_exploration.md` (12 files × 100k, per-file energy/multiplicity); `task.md:95` angle_theta (N,4). |
| 6 | TRK dataset 2: 1.2M events, E~U[0.3,4.0] MeV sampled **once per event, broadcast** to all slots; sentinel −1.0; max per-event spread 1 ulp ≈2.4e-7 MeV; 19-probe QA (154) | V | `openspec/changes/TRK-energy-regression/spec.md:94-108` — `EventGeneratorIsotropic::GenerateEvent` samples once per event; measured per-event slot std ~2.4e-7 MeV = float32 ULP floor; contract per_event_std<1e-5; 19-probe QA gate (spec:81, `08_post_regen_qa.md`). |
| 7 | Both TRK datasets → same dual-channel 80×48 images; split 70/15/15 (840k/180k/180k) stratified on multiplicity and (dataset 1) energy stratum; HC not applied (156) | V | `configs/TRK3_v2_*.yaml` `split_ratio: [0.70,0.15,0.15]`, `stratify_by: "label_energy"` (joint multiplicity×energy); `configs/TRK5.yaml`/`TRK6.yaml` `stratify_by: "label"` (multiplicity only — correct for continuous energy). `task.md:122-123` 840k/180k/180k. Test n=180,000 confirmed: `runs/TRK5-*/seed42/metrics.json` `n_truth_events=180000`, `n_truth_valid_slots=450000`. |

### §3 Preprocessing (lines 164–180)

| # | Manuscript claim (line) | Verdict | Evidence |
|---|---|---|---|
| 8 | Projection: 80 bins y × 48 bins z, y∈[−146.5,146.5], z∈[0,295.7]; each hit → **nearest pad center** (triangular geometry) (166) | P | True for NimpSim/TRK path: `convert_trk_server_v2.py:216-266` `map_hits_to_yz_indices` does triangle-centroid nearest-neighbor refinement. **False for Garfield_Raw**: `S1 spec:236` — `garfield_postprocessor_v5.C` "uses simple floor binning with clamping (not triangular pad geometry)". The sentence is unconditional but the Garfield data feeding the V6/EXP1-3 results were floor-binned. |
| 9 | Central beam-hole pads masked to zero (166) | P | True for NimpSim + HC paths: `convert_trk_server_v2.py:261-264` (`hole_mask` rows j≥46, pads 28≤i≤51, applied as hit-level filter); `S1 spec:218-232`. **False for Garfield_Raw**: `S1 spec:236,243` — the C postprocessor "does NOT apply the central hole mask" and the converter applies none. |
| 10 | Ch0 = pad-wise **sum of log(1+q)** (170) | P | True for NimpSim/TRK: `convert_trk_server_v2.py:293` `log1p(clip(charge,0))` per hit then `np.add.at` (sum of per-hit logs). **False for Garfield (both Raw and HC)**: `S1 spec:297-303` — `Ch0 = log1p(clip(padSignals))` i.e. log of the *summed* charge; mathematically different for multi-hit bins. |
| 11 | Ch1 = mean of x_norm over contributing hits, x_norm=(x−X_min)/(X_max−X_min), X_min=−100, X_max=100 (170) | P | True for NimpSim/TRK (`convert_trk_server_v2.py:297-303` simple mean) and Garfield_HC (S1 Req-3.2). **False for Garfield_Raw**: charge-weighted mean (S1 spec:329,346) — the manuscript itself says so at line 142, so §3.2's unconditional "the mean" is imprecise but §2.4 discloses it. X_min/X_max verified `convert_trk_server_v2.py:156-157`. |
| 12 | "each channel is standardized using mean and std computed from the training set" (170) | V (with nuance) | `src/data/dataset.py:469-470` per-channel z-score; stats from a **subsample** of the training split (`src/data/normalization.py:50-98`, `max_samples` default 3200; legacy: 2000, or 10000 for V4-HeHe-RN — `S2 spec:495`, `S3 spec:253`). "Training set" is accurate; the subsample is an undisclosed detail, not an error. |
| 13 | "physics features are normalized in the same way" (170) | **M** | Physics features are fed **raw**. `src/data/dataset.py:472-475` ("Read physics features raw (NOT normalized, Req-7.2)"); `src/data/normalization.py:24-27` ("explicitly NOT normalized… Published results used raw un-normalized physics features"); `normalization_stats.json` per run covers ch0/ch1 only (e.g. `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/normalization_stats.json`). Legacy published runs also raw: `S3 spec:254`, `S1 spec` D-PHYS-NORM (`spec.md:569`). Same error repeated at line 207. |
| 14 | HC: DBSCAN on (y,z) in mm, largest non-noise cluster kept, ε=10 mm, min_samples=3, ~100% signal retention on clean NimpSim (174-176) | V | `S4 spec:56` — "DBSCAN clustering (eps=10mm, min_samples=3 on 2D y,z coordinates). The largest non-noise cluster is retained". Retention validated per S1/S4 (documented; implementation is server-side, U for the retention number itself but consistent). |
| 15 | Garfield_HC MoI features computed from post-HC images (180) | V | `S1 spec` Req-4/HC path (features computed from the rebuilt HC image); `convert_trk_server_v2.py:443-461` computes features from the image passed in — for HC files that image is the denoised one. |

### §4 Architecture (lines 188–238)

| # | Manuscript claim (line) | Verdict | Evidence |
|---|---|---|---|
| 16 | Modified ResNet-18: 3×3/stride-1 conv1, no maxpool, ImageNet-adapted 2-channel init, 512-d GAP output (190) | V (for "ours") | `src/models/backbone.py:5-16,56-147` — conv1 3×3/s1, maxpool=Identity, center-crop 7×7→3×3 + RGB-mean→repeat-2-channels init; feature map (B,512,10,6), GAP (B,512). **But see #17.** |
| 17 | Implicit: baselines in Table 2 are this same "ResNet-18" | **M (disclosure)** | The ³He/⁴He baseline (91.9%) is a **standard** ResNet-18 — 7×7 conv stride 2, maxpool retained, `pretrained_backbone: false` — not the modified backbone and not ImageNet-initialized: `S3 spec:119-128` (`model_type: ResNet_Standard`, D-HEHE-RN-BACKBONE, D-HEHE-RN-PRETRAINED), `S2 spec:81-109,509`. The ¹³C/¹⁴C and p/d/t baselines do use the modified backbone (`S3 spec:23-24`). Manuscript never discloses the standard-backbone baseline. |
| 18 | MoI features: Iyy, Izz, Iyz charge-weighted 2nd central moments + M=Σw; computed from Ch0 (log-compressed), pad-bin units (194-204) | V | `convert_trk_server_v2.py:443-461` `compute_physics_features`: weights = image[:,:,0] (post-log1p Ch0), centroid + central moments in bin units, returns [Iyy,Izz,Iyz,total_mass]. Matches Eqs. 2-4 and the log-compressed-M caveat. |
| 19 | "These four features are standardized using training-set statistics before fusion" (207) | **M** | Same as #13 — raw into both `query_proj` and classifier concat: `src/models/model.py:354-377`, `src/models/cross_attention.py:160` (`query_proj(physics)`), `src/data/dataset.py:472`. Prior scout report `fm-ar-feature-norm/report.md` §1,§5 identical conclusion. |
| 20 | Fusion: physics(4)→64-d query; CNN tokens→64-d K,V; 4 heads; no attention dropout; classifier = 2-layer, dropout 0.3, input = attended‖physics (211) | V | `src/models/cross_attention.py` — `query_proj: Linear(4→64)`, `kv_proj: Linear(512→64)` (single projection for both K and V — Eq. 5's "K=V=W_KV·T" is accurate), `nn.MultiheadAttention(embed_dim=64, num_heads=4, dropout=0.0)`; `src/models/classifier.py` — `Linear(68→128)→ReLU→Dropout(0.3)→Linear(128→C)`. |
| 21 | Fused dim = patch_dim+d_phys = 68 (228); V6 d_phys∈[1,6] configurable (217) | V | `model.py:181` `attn_dim+physics_dim`; `physics_dim` is a config param (`configs/*.yaml`, EXP8 `physics_dim: 4`); 6-feature ablation via `augment_moi_4col_with_length_eccentricity` (`S5 spec:59-81`). |
| 22 | TRK heads: 4-way classification head "of the same form"; regression = same two-layer head as 4-output regressor; sentinel −1.0 masked; SmoothL1, β=0.0175 rad for angles, MeV for energies; ascending slot convention (238) | V | `configs/TRK1/TRK2` `num_classes:4` classification; `configs/TRK3_v2/TRK4_v2` `task_mode: regression, num_classes:4, loss.beta:0.0175` (comment "1 degree in radians"), `mask_invalid:true`; `src/training/trainer.py:253-257` deg→rad scale π/180 for angle, 1.0 for energy; `src/data/dataset.py:483-487` mask = targets≠−1.0; ascending sort `convert_trk_server_v2.py:513-519`. **Minor omission:** energy β=0.05 MeV (`configs/TRK5.yaml` `loss.beta: 0.05`) never stated in the manuscript. |

### §5 Classification results & training config (lines 246–298, 526–544)

| # | Manuscript claim (line) | Verdict | Evidence |
|---|---|---|---|
| 23 | CE loss; XA+V6: label smoothing 0.05, grad clip 0.5; "V4 baselines use no label smoothing and gradient clipping 1.0" (248) | P | True only for V4-HeHe-RN and V4-pdt-RN (`S3 spec:223-224`, `S2 spec:509`). **V4-CC-RN used LS 0.05 + clip 0.5** (CrossAtt protocol, `S2 spec:510`, `S3 spec:165` "PROTOCOL VIOLATION (documented)"). The manuscript discloses CC-RN's protocol one sentence later (252) but the blanket "V4 baselines" sentence is wrong for one of the three baselines. |
| 24 | Shared AdamW, LR schedule, warmup, early stopping (248); App A: AdamW wd 1e-4, ReduceLROnPlateau(factor 0.5, patience 5), 5-epoch linear warmup 1e-6→target, early stop patience 15 — "All runs share" (526,531) | P | Correct for all CrossAtt + V6 + TRK + EXP8 runs (`trainer.py:273-341`; `S2 spec:281-358`; `S3 spec:241-249`; TRK/EXP8 configs). **V4-HeHe-RN and V4-pdt-RN have `warmup_epochs: 0`** (`S2 spec:509`, `S3 spec:226`) — the "all runs share … warmup" sentence is false for the two standard-protocol baselines. Undisclosed extras: `min_lr=1e-6`, ES `min_delta=1e-4`, ES monitors val_loss while best checkpoint = best val_acc. |
| 25 | Table 6 rows: HeHe 160k/40k, 100 ep, bs 32, lr 3e-5, hflip+vflip+rot; CC 160k/40k, 140 ep, bs 64; pdt 240k/60k, 140 ep, bs 64; V6 400k/100k, 110 ep, bs 128, lr 1e-4, no aug (538-541) | V | `S2 spec:506-514` per-experiment overrides match every cell; augmentation = HFlip(0.5)+VFlip(0.5)+Rotation(10°) (`S3 spec:250`, `S1 spec:653-655`); V6 aug false (`S2 spec:428-432`). Sizes: `S3 spec:42-45,71-74,100-103` (160k/40k, 240k/60k), `S4 spec:24-25` (400k/100k). |
| 26 | 80/20 train/val split; accuracies = held-out validation (248) | V | `S3 spec` split_method stratified 80/20 throughout; V6 same (`S4 spec`); EXP1/2/3/8 use 70/15/15 or 80/20 per config — the sentence's scope is the classification tasks of §5, which are 80/20. |
| 27 | Table 2 caption: "V4 baselines listed here report final-epoch values" (255) | **M** | Legacy code loads `best_model.pth` (best val accuracy) for **all** models including baselines: `S3 spec` D-CKPT-RN (`spec.md:428`: "Baseline checkpoint: spec final-epoch vs code best-epoch → use best-epoch for all models"), `S4 spec:205,219`. The caption repeats the paper's original incorrect claim. |
| 28 | HeHe baseline "smaller, non-augmented dataset" (252) | V | V4-HeHe-RN: `_25k.h5` files → 40k/10k train/val, augmentation false (`S3 spec:132-135,156`; `S2 spec:509`). |
| 29 | CC baseline: 20k/5k, CrossAtt protocol (lr 3e-5, LS 0.05, aug on) (252) | V | `S3 spec:175-178,203` — max_samples 25000 (12500/class) → 20k/5k; `S2 spec:510` CrossAtt protocol. |
| 30 | p/d/t baseline: 60k/15k, non-augmented, standard baseline protocol (252,531) | V | Legacy run `PDT_ResNet18_3Class_20251119_171902`: 91.51% on "NimpSim 75k" → 60k/15k (`openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md:263,304`); script `V3_PDT_3Class_ResNet18.py` (`Legacy Codebase.md:85`). Standard protocol = lr 1e-4, LS 0, clip 1.0, aug off, warmup 0 (`S3 spec:220-227`). |
| 31 | Table 4 (V6): XA+HC 96.6/0.946/87.4/ep21; RN+HC 95.8/0.931/84.4/ep20; XA+Raw 95.1/0.921/84.1/ep8; RN+Raw 93.5/0.893/76.6/ep17; XA 400k/100k, RN 100k/25k (284-289) | V | `S4 spec:242-245` targets match all metrics; `S4 spec:24-25` sizes; best-epoch selection for all V6 (`S4 spec:205`). Best-epoch numbers are legacy-run facts (U to re-derive, consistent with spec). |
| 32 | α recall 0.874, Nonα 0.990; α = 20% of data (295, 569-570) | V | `S4 spec:242` (≥87.4%); 1:4 ratio follows from 5-species 100k each with 4He as positive. |
| 33 | §5.5 first controlled experiment "on the ³He/⁴He task": XA 95.80% vs ResNet 95.77% at 100k; +0.024pp, McNemar p=0.81; 100k→400k adds +1.77pp; "of the +1.80pp separating the 100k ResNet baseline from the 400k cross-attention model" (369) | **M (task mislabeled)** | The 95.80/95.77/97.57 numbers are from the **α vs Nonα task on Garfield_HC**, not ³He/⁴He on NimpSim. `src/run_experiment.py:618-620`: `task_type "3He_4He"` maps label 4 (⁴He)→class 0 and {p,d,t,³He}→class 1, class_map = "Alpha (4He)"/"Non-alpha". EXP1-XA-HC-100k = XA@100k = 95.80% on 5 Garfield_HC files (`openspec/.../EXP2 implementation_log.md:113`; `EXP1 task.md:376` "EXP1 scope is 3He/4He only" refers to this same α/Nonα task naming); ResNet+HC@100k = 95.772% (`01_exp_results_investigation.md:194,200-201`: +0.024pp, p=0.813, +1.772pp p<1e-73); XA@400k = 97.57% (`:257`). EXP3 run configs confirm the task: `runs/EXP3-ResNet-HC-100k-seed42/*/config.yaml` lists the 5 Garfield_HC species files, metrics classes "Alpha (4He)"/"Non-alpha". So the decomposition is real but is **not** on the NimpSim ³He/⁴He task the headline 96.1% refers to — it decomposes the Garfield α-vs-Nonα margin. |
| 34 | §5.5 second experiment: "identical conditions on Garfield_HC data (10⁵ events, parameter-matched ≈1.12×10⁷, single seed)"; CC: concat 86.07 / gated 85.74 / XA 84.63; "³He/⁴He": 96.98 / 96.94 / 95.80, "cross-attention entry evaluated on a smaller validation set" (381) | P | Numbers + params verified: `EXP2 implementation_log.md:103-118` (XA 11,227,138 / Gated 11,237,250 / Concat 11,234,690 — within 0.09%; accuracies match to 2 decimals). **Two problems:** (a) the "³He/⁴He" row is again the α-vs-Nonα task (#33); (b) "smaller validation set" is wrong — EXP1-XA-HC-100k used the same 125k→100k/25k split as the EXP2 3He4He runs (`implementation_log.md:8,113-115`; `configs/EXP1_XA_HC_100k.yaml` per_file_limit 25000 ×5 files). Also "10⁵ events" is sloppy: the CC runs used 100k total (2×50k), the α/Nonα runs 125k total (5×25k). |
| 35 | §5.4 negative result: 6-feature vector (Length=√(12λmax), Ecc=√(1−λmin/λmax)); −0.06pp HeHe, +0.39pp CC on V4 NimpSim pipeline (309) | V | Formulas + derivation: `S5 spec:59-81` (identical equations, runtime-derived from stored 4 cols); expected −0.06pp for HeHe (`S5 spec:86`: 96.04% vs 96.1%). +0.39pp CC is a legacy-run number (U to re-derive, consistent). |
| 36 | Attention map: 10×6 spatial-token grid (319) | V | Feature map (B,512,10,6) → 60 tokens (`backbone.py:24`, `cross_attention.py:16`). |

### §5.7 EXP8 unseen-channel (lines 328–359)

| # | Manuscript claim (line) | Verdict | Evidence |
|---|---|---|---|
| 37 | Retrained seed 42, class weights [1.6667,1.6667,0.5556]; seen test 59,928 excl. null; RN recall 0.923/0.911, acc 0.924, ECE 0.044; XA 0.924/0.909, 0.924, ECE 0.048; B precision 0.867/0.866 (328) | V | `configs/EXP8_XA_Ideal_UnseenChannel.yaml` `class_weights: [1.6667,1.6667,0.5556]`, `seed: 42`; `runs/EXP8-ResNet-*/eval_exp8/metrics.json`: acc_excl_null 0.9242 (n=59,928), A 0.9233, B 0.9111, B prec 0.8673, ECE 0.0444; `runs/EXP8-XA-*/eval_exp8/metrics.json`: 0.9245, A 0.9239, B 0.9091, B prec 0.8664, ECE 0.0475. All match. |
| 38 | Table 5 FTR per channel + pooled F+G+H: RN 0.0378, XA 0.1087, Δ+0.0709; counts 32,598/300k and 11,338/300k (336-352) | V | metrics.json `false_target_rate` per channel matches every cell (e.g. XA F 0.1095=10,949/100k; RN F 0.0377=3,769/100k). Pooled sums: XA 10,949+10,922+10,727=32,598 ✓; RN 3,769+3,548+4,021=11,338 ✓. |

### §6 Reconstruction (lines 395–495)

| # | Manuscript claim (line) | Verdict | Evidence |
|---|---|---|---|
| 39 | Eval: 180k test events, 450k populated slots; event-level bootstrap 1000 resamples; McNemar for classification; Wilcoxon + Cohen's d, Bonferroni 0.05/21 over 7 methods (399) | V | `runs/*/seed42/metrics.json`: `n_truth_events=180000`, `n_truth_valid_slots=450000`, `bootstrap_n_resamples=1000`, `bootstrap_unit="event"`; `src/evaluation/aggregate_trk_energy_comparison.py:71,938` `PAIRED_FAMILY_SIZE=21`, `bonferroni_threshold=0.05/21`; `src/evaluation/statistical_tests.py` implements mcnemar/wilcoxon/cohens_d/bootstrap. |
| 40 | Multiplicity: RN 99.9983% (3 err), XA 99.9994% (1 err), McNemar p=0.48 (403) | V | `20_doc/audits/TRK_reeval_2026-07-12_postaudit_regeneration.md:80` — TRK1 0.999983 (179,997/180,000), TRK2 0.999994 (179,999/180,000); McNemar stat 0.5, p=0.48 (`01_exp_results_investigation.md:88`). |
| 41 | Angle MAE: XA 0.832° [0.830,0.835] vs RN 0.992° [0.989,0.995]; <1° 72.9% vs 65.3%; bias −0.024/−0.076 (407-418) | V | `20_doc/workflows/baseline_angle_regression.md:71-72` — TRK3-v2 ResNet 0.9922°, TRK4-v2 XA 0.8324°. CI/percentile cells are eval-artifact numbers (runs not local; consistent with the regenerated-analysis doc). |
| 42 | "inherited dropout 0.3 over-regularized; retraining with dropout 0.05 + wd 1e-5 improved ResNet MAE 1.112°→0.992°; both regression models use this configuration" (424) | V | `configs/TRK3_v2_*.yaml`/`TRK4_v2_*.yaml`: `dropout: 0.05`, `weight_decay: 1.0e-5`, `_meta.hp_changes` "0.3→0.05, 1e-4→1e-5, reduce over-regularization". v1→v2 MAE 1.112→0.992 is a run artifact (U to re-derive; consistent with _meta rationale). |
| 43 | Energy table: XA RMSE 0.0219/MAE 0.0103; RN 0.0264/0.0147; RANSAC 0.4827/0.3338; Hough-opt 0.4935/0.3362; Hough 0.5234/0.3574; HC-opt 0.7197/0.5474; HC 0.7375/0.5652; each classical leaves 36 events missing (446-463) | V | Exact match to `runs/*/seed42/metrics.json` `overall`: TRK6 0.0219210/0.0103108; TRK5 0.0264226/0.0146559; baseline-ransac 0.482674/0.333791; baseline-hough-opt 0.493491/0.336184; baseline-hough 0.523435/0.357398; baseline-hc-opt 0.719729/0.547376; baseline-hc 0.737505/0.565172; `n_missing_event_predictions=36` for all five classical runs. |
| 44 | Event estimator = arithmetic mean of finite predictions from populated trained heads (440) | V | `metrics.json` `event_estimator="arithmetic_mean_of_finite_valid_output_heads"`. |
| 45 | Per-multiplicity: CNN σ≤0.037, |μ|≤0.003 (444) | V | TRK6: std 0.0313/0.022/0.0164/0.0138, mean −0.0008…−0.001; TRK5: std 0.0369/0.0267/0.0198/0.0173, mean −0.0021…−0.0030 — all within bounds. |
| 46 | Classical baselines: same 80×48 dual-channel images; range→energy via linear inverse interpolation of LISE++ ⁴He in He96C4O8 (96:4), Hubert et al. column; composition differs from 95:5 sim input, no correction (475) | V | `src/baselines/artifact_contract.py:15-16,104` `ACTIVE_CALIBRATION_TABLE_PATH="data/srim/4he_range_lise_hubert_05bar.csv"`, source "LISE++ 4He in He96C4O8; Hubert et al."; `src/baselines/common.py:227-238` `interp1d(kind="linear")` inverse interpolation; deprecated 95:5 table noted at `artifact_contract.py:26`. |
| 47 | LM-refined RANSAC external, descriptive-only, excluded (477); vertex-anchored variants excluded (485) | V | `scripts/preprocessing/convert_LM_ransac_to_predictions.py` exists; `src/baselines/hough_vertex.py`, `ransac_atransac_vertex.py`, `ransac_datadriven_vertex.py`, `hough_datadriven_vertex.py` exist; neither in the 7-method family (`aggregate_trk_energy_comparison.py` roster). |
| 48 | Internal study: RANSAC R²=0.878 raw 3D point cloud vs 0.848 converted (481) | V | `src/baselines/run_baseline_rawpoints.py` exists (raw-point path); numbers are internal-study artifacts (U to re-derive locally; consistent with the audit doc `20_doc/audits/F4_classical_asymmetry_pipeline_audit.md`). |
| 49 | Clipping: K=1 scope only; ratios 2.095 (RN), 2.828 (XA) (489) | V | `runs/TRK5-*/metrics.json` `range_clipping.recovery_ratio=2.0951`, scope "single_track_events_only"; TRK6 `2.8277`. |
| 50 | σ_θ single-track: XA 1.57/0.77/0.45° at 0.5/2.0/3.2 MeV; RN 1.70/0.90/0.59° (428) | U | From `evaluate_trk_regression.py` outputs on box runs; `20_doc/workflows/TRK_angular_resolution_supplement_workflow.md` defines the procedure; per-energy σ values not in local artifacts. Consistent with Table 7 MAE stratification (App. D). |
| 51 | Table 7 (App D): energy-stratified MAE 1.544/1.367, 0.769/0.616, 0.664/0.515; <1° fractions (589-591) | U | Same provenance as #41/#50 (TRK3_v2/TRK4_v2 eval artifacts on box); internally consistent with overall MAE. |
| 52 | p/d/t per-class metrics (App B, 555-557); V6 per-class (App C, 569-570) | U | Legacy run artifacts; consistent with headline accuracies (93.0%, 96.6%). |

---

## 2. Prioritized mismatches for the captain

Ordered by likely referee impact. For each: what the manuscript says → what the code actually does.

**M1 — Physics-feature "standardization" is false (two places).**
`main.tex:170` ("physics features are normalized in the same way") and `main.tex:207` ("standardized using training-set statistics before fusion"). Code feeds raw float32 physics into both the attention query and the classifier concat: `src/data/dataset.py:472-475`, `src/data/normalization.py:24-27`, `src/models/model.py:354-377`. The published legacy runs did the same (`S1 spec` D-PHYS-NORM, `S3 spec:254`). This is not cosmetic: the prior scout showed the raw ~170-magnitude Izz DC term tiles 108/128 hidden ReLUs (`fm-ar-feature-norm/report.md` §3) — the paper currently describes a normalization that would have prevented the mechanism now under investigation. **Highest priority.**

**M2 — The §5.5 "³He/⁴He task" controlled experiments are actually α-vs-Nonα on Garfield_HC.**
`main.tex:369` ("on the ³He/⁴He task… 95.80% and 95.77%") and `main.tex:381` (fusion comparison "on the ³He/⁴He task… 96.98/96.94/95.80"). `src/run_experiment.py:618-620`: `task_type "3He_4He"` = label 4 (⁴He)→0, {p,d,t,³He}→1 — i.e. **α vs Nonα**, on Garfield_HC files (`configs/EXP1_XA_HC_100k.yaml`, `EXP2_*_3He4He.yaml` use the 5 Garfield_HC species files; `runs/EXP3-*/config.yaml` confirms; class names in metrics are "Alpha (4He)"/"Non-alpha"). The decomposition therefore does **not** explain the NimpSim ³He/⁴He headline (96.1%) as the text claims — it decomposes the Garfield α/Nonα margin. The numbers are real; the task label is wrong. Also in the same paragraph: "evaluated on a smaller validation set" is incorrect — EXP1 and EXP2 3He4He runs share the identical 125k→100k/25k split (`EXP2 implementation_log.md:8,113-115`).

**M3 — "V4 baselines report final-epoch values" is false.**
`main.tex:255` (Table 2 caption). Legacy code loads `best_model.pth` (best val acc) for all models including baselines: `S3 spec` D-CKPT-RN (`spec.md:428`), `S4 spec:205,219`. The caption carries over the original paper's incorrect claim; the audit already resolved it the other way.

**M4 — The ³He/⁴He baseline is a different architecture, undisclosed.**
Table 2's "Baseline ResNet-18" (91.9%) is a **standard** ResNet-18 (7×7/s2 conv1, maxpool, `pretrained_backbone: false`), not the modified backbone of §4.1, and randomly initialized — `S3 spec:119-128` (D-HEHE-RN-BACKBONE, D-HEHE-RN-PRETRAINED), `S2 spec:509`. §4.1's ImageNet-adaptation sentence reads as applying to "the network" generally. Separately, V4 baseline heads are single-layer `Dropout(0.3)→Linear(512,C)`, not the two-layer head of §4.3 (`S2 spec:648`). And its protocol differs beyond what §5.1 discloses: lr 1e-4, bs 64, 50 epochs, **no warmup**, norm stats from 10k samples (`S2 spec:509`).

**M5 — "All runs share … a 5-epoch linear warmup" is false for the standard-protocol baselines.**
`main.tex:526,531` (App A + Table 6 caption). V4-HeHe-RN and V4-pdt-RN use `warmup_epochs: 0` (`S2 spec:509`, `S3 spec:226`). Same paragraph's "V4 baselines use no label smoothing and gradient clipping 1.0" (line 248) is also false for V4-CC-RN (LS 0.05, clip 0.5 — disclosed one sentence later but the blanket statement stands uncorrected).

**M6 — §3 preprocessing claims are unconditional but path-dependent (Garfield differs on three points).**
- `main.tex:166` "each hit is assigned to the nearest pad center" — Garfield_Raw used floor binning + clamping, no triangular-pad mapping (`S1 spec:236`).
- `main.tex:166` "pads within the central beam-hole region are masked" — not applied to Garfield_Raw (`S1 spec:236,243`).
- `main.tex:170` Ch0 "pad-wise sum of log(1+q)" — Garfield (Raw and HC) uses `log1p(Σq)` per pad, not `Σ log1p(q)` (`S1 spec:297-303`); Ch1 "the mean" is charge-weighted for Garfield_Raw (disclosed at line 142 but contradicted by the unconditional §3.2 wording).
These matter because the V6/EXP1-3/EXP2 results all run on Garfield data.

**M7 — "Garfield++ datasets comprise five particle species" is incomplete.**
`main.tex:144`. 13C/14C Garfield_HC files exist and produced the §5.5 fusion-comparison numbers (`configs/EXP2_*_13C14C.yaml`; `EXP2 implementation_log.md:50,246-247`). Either scope the sentence to the V5/V6 production or acknowledge the EXP2 additions.

**Minor / cosmetic:**
- Energy-regression SmoothL1 β=0.05 MeV never stated (`configs/TRK5.yaml` `loss.beta`); only the angle β is given (line 238).
- "10⁵ events" in §5.5 (line 381) is imprecise: EXP2-CC used 100k total (2×50k), the α/Nonα runs 125k total (5×25k).
- Normalization stats come from a subsample (2000/3200/10000 depending on run), not the full training set — worth a parenthetical.
- Undisclosed scheduler/ES details: `min_lr=1e-6`, ES `min_delta=1e-4`, ES monitors val_loss while checkpoint selection is best val_acc.
- EXP8/EXP3/TRK runs use `mixed_precision: true` (fp16 autocast) — not stated anywhere; legacy V4/V6 ran fp32 (`mixed_precision: false` in EXP1/EXP2 configs). Relevant to M1 since physics ~170 is cast to fp16 (`model.py:337`).

## 3. Verified-clean highlights (no action needed)

All §6 reconstruction numbers reproduce exactly from local artifacts: energy table (10/10 cells), 36 missing events per classical method, clipping ratios 2.095/2.828, 180k/450k counts, Bonferroni 0.05/21, event-mean estimator, LISE++/Hubert 96:4 table + linear inverse interpolation. EXP8: every Table 5 cell, both arms' recalls/ECE/precision, class weights, 59,928 denominator. Architecture: backbone mods, 64-d Q/K/V, 4 heads, 0.0 attn dropout, 68-d classifier input, dropout 0.3, MoI formulas incl. log-compressed M. TRK datasets: 1.2M/12-strata, broadcast-energy + ULP spread, 70/15/15 stratified splits, ascending-slot sentinel convention. V6 table + training-config table cells all match the S2/S4 specs.

## 4. Open questions for the lead (not blocking)

- **V6 best-epoch column** (Table 4: 21/20/8/17) and **p/d/t per-class metrics** (App B) are legacy-run artifacts not locally re-derivable; consistent with specs but unverified against raw history files.
- **TRK1-4 run artifacts** (multiplicity + angle metrics.json, σ_θ per energy, Table 7 cells) live on box 176; verified only via `20_doc/audits/TRK_reeval_2026-07-12_postaudit_regeneration.md` and `20_doc/workflows/baseline_angle_regression.md` quotes.
- **σ_θ values** (1.57/0.77/0.45 vs 1.70/0.90/0.59) and the **R²=0.878/0.848** internal-study numbers: provenance docs exist; raw artifacts on box.
- Whether the EXP1 "3He/4He" naming was ever a true binary ³He-vs-⁴He task in legacy V3 (the label map says no for all V4+ runs) — worth one grep of the legacy `V3_3He_vs_4He` script on the Windows box before the captain rewrites §5.5.

## 5. Reproduction

```bash
# Manuscript: /Users/Reid Hu/MATE-Automation/10_Papers-Thesis/Physics_Informed/main.tex
# Code (worktree = live checkout): src/models/{backbone,cross_attention,classifier,model}.py,
#   src/data/{dataset,normalization}.py, src/training/trainer.py, src/run_experiment.py:618-642,
#   src/baselines/{artifact_contract,common}.py, src/evaluation/{statistical_tests,aggregate_trk_energy_comparison}.py
# Run artifacts: /Users/Reid Hu/MATE-Automation/runs/{EXP8-*,TRK5-*,TRK6-*,baseline-*}/.../metrics.json
# Legacy behavior: 20_doc/Legacy Codebase/S1..S5-*/spec.md (D-* divergence resolutions)
# Fusion comparison: openspec/changes/EXP2-fusion-mechanism-comparison/implementation_log.md
# Task provenance: openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md:194-263
```
