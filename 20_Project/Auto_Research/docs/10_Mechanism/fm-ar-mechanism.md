> Origin: `fm-ar-mechanism` scout report; recorded 2026-09-24.

# EXP3 unified mechanism model and seed-evidence report

**Date:** 2026-09-24 (Asia/Taipei)  
**Scope:** read-only analysis of `/Users/Reid Hu/MATE-Automation/runs/`, repository code/docs, and the EXP3 scout reports in `/Users/Reid Hu/firstmate/data/fm-ar-*/report.md`. No server, queue, IMP box, manuscript, or live-run file was touched.  
**Task status:** report only; no GPU work was started.

## 1. Evidence boundary and commands

Facts below are from primary artifacts. Interpretations and preregistered predictions are labelled explicitly.

```bash
find /Users/Reid\ Hu/MATE-Automation/runs -maxdepth 3 -type f
python3 - <<'PY'  # loaded every runs/EXP3-*/*/metrics.json and config.yaml
...
PY
find /Users/Reid\ Hu/MATE-Automation/runs -name '*.pth' -print
python3 -c 'import torch'  # ModuleNotFoundError locally
```

The direct inventory found 12 EXP3 run directories (11 triton-task runs plus one label-fix run), no EXP3 checkpoint, one EXP3 `predictions.csv`, four non-empty EXP3 split files, and six counterfactual battery JSONs. The only local `.pth` files are the two EXP8 checkpoints. `data/` contains SRIM files but no Garfield HDF5. These facts make local EXP3 forward inference infeasible in this worktree; a small CPU job on box 176 is feasible because the existing battery already ran there under the 2 GB cap.

Relevant code anchors are [`src/data/dataset.py:463-473`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/data/dataset.py:463), [`src/data/normalization.py:24-30`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/data/normalization.py:24), [`src/models/model.py:350-383`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/models/model.py:350), [`src/models/cross_attention.py:153-200`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/models/cross_attention.py:153), [`src/models/classifier.py:5-10`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/models/classifier.py:5), and the label map in [`src/run_experiment.py:624-629`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/run_experiment.py:624).

## 2. Smallest mechanism set that explains the evidence

### 2.1 Mechanism M1: HC is image-side denoising

**Facts.** The physics-free ResNet (`fusion_type: none`) improves from Raw to HC by 6.52–6.66 percentage points for seeds 0, 1, and 42. The paired input audit reports Raw Ch0 occupancy about 1,956/3,840 pads versus HC about 113/3,840 and Raw Ch0 charge dominated by the measured noise floor. The HC-vs-Raw scout traces the difference to largest-cluster DBSCAN filtering (plus the fixed hole mask and a small Ch1 averaging change); both paths use the same dataset z-score and physics-feature code. The source implementation confirms that the ResNet path sends a 512-d GAP vector directly to the head and ignores physics (`model.py:379-383`).

**Model claim.** The HC gain is a representation/SNR effect: denoising makes the track charge visible to the image backbone. It does not require a physics-feature explanation and is therefore independent evidence from the later XA-head mechanism.

### 2.2 Mechanism M2: raw, internally mismatched physics is a low-dimensional side channel

**Facts.** The dataset returns four raw float32 features (`dataset.py:470`; `normalization.py:24-30`). In XA, the same raw vector goes through `query_proj` and is concatenated with a 64-d attended vector to form a 68-d head input (`model.py:350-377`); the head is `Linear(68,128) -> ReLU -> Dropout -> Linear` (`classifier.py:5-10`). The feature-norm scout measured Izz around 170 while other components are orders smaller; it measured an Izz DC contribution that fixes 108/128 hidden signs in an EXP8 XA checkpoint. The EXP8 OOD scout measured carbon hidden activations about four times the seen range and carbon-to-proton leakage of 8.0–8.5% for XA versus 1.4–1.6% for ResNet.

**Model claim.** This is one cause with two consequences: (a) the query is dominated by a static scale/DC component, and (b) the direct classifier side channel is unbounded under distribution shift. It explains why `zero_cls` can collapse to a class-prevalence-like output without proving event-specific information use, and why the same pathway produces confident carbon OOD errors.

### 2.3 Mechanism M3: feature redundancy/crowding is representation dependent

**Facts.** On the existing 2,000-event batteries, `permuted_q` is within 0.001 of original for every synced triton checkpoint (five local triton JSONs; the closing record reports six including the corrected label-fix run). On HC, zeroing classifier physics changes accuracy by +0.1, −0.4, and −15.6 pp for seeds 42, 1, and 0 respectively. On Raw, zeroing classifier physics gives 0.1935/0.4105/0.1935 for XA-Raw s42/s0 and corrected label-fix 4He, i.e. collapse on every Raw checkpoint. The closing record reports Raw XA early best epochs and a 1.5 pp post-peak decline while RN-Raw plateaus.

**Model claim.** HC makes Ch0 sufficiently informative that the four moments are often redundant with image features. Raw makes Ch0 noisy; the 68-d XA head can crowd image information with a badly scaled direct side channel, producing an architecture-by-representation interaction. The Raw deficit is therefore downstream of image routing. Capacity (64-d attended vector versus RN's 512-d GAP) and crowding are not independent mechanisms: capacity is the structural opportunity, while the raw physics side channel is the proposed cause of the optimization/crowding penalty.

### 2.4 Mechanism M4: query permutation invariance and HC attention sinks are consequences, not separate causes

**Facts.** `permuted_q` does not change predictions. The attention scout reports HC token-50 argmax concentration and Raw Bragg-region mass around 0.47, but no evidence that the physics query causes either map. The query implementation is ordinary `query_proj(physics)` followed by softmax attention (`cross_attention.py:156-200`), with no positional encoding that would force token 50.

**Model claim.** The query is effectively a static or near-static key-selection bias. HC's fixed empty-token sink is a learned consequence of redundancy plus softmax; Raw's Bragg-like map is image/key driven. “Physics query guides attention” is falsified by the current counterfactuals.

### 2.5 Independent versus consequential pieces

| Piece | Status | Relationship |
|---|---|---|
| HC DBSCAN denoising | Supported, independent | Explains the HC-Raw gain even when physics is absent. |
| Raw physics scale asymmetry | Supported by code/EXP8 measurements | Common cause of query DC dominance and direct-head extrapolation. |
| Narrow XA head/crowding | Leading EXP3 explanation, not yet localized by D1-D5 | Uses M2; capacity and crowding are competing descriptions of the same downstream bottleneck. |
| Query-content poisoning | Refuted by permutation accuracy (within the tested manifold) | Not an independent cause; sink/query invariance follows M2/M3. |
| Zeroing-collapse interpretation | Unresolved | Could be information dependence or OOD bias shift; D5 is required. |
| Label/selection effects | Confounds, not mechanisms | EXP3 headline runs use triton-vs-rest mapping; true 4He has only one XA-Raw run. |

## 3. Dated preregistration (locked 2026-09-24)

This table is a prediction made before the pending CPU results are read. “Original” means the same checkpoint and same 2,000-event subset used by the current battery; for the s42 XA-Raw triton checkpoint, `A0=0.8715`. For all rows, report accuracy, Δ from original, class-0 recall, and the exact event count. Tolerance bands are intentionally broad enough to cover the observed seed mechanism variance; they are not post-hoc fits.

Rivals:

- **U:** unified model above (denoising + raw-physics side-channel/crowding + query-content invariance).
- **C:** pure capacity (the 64-d attended representation/head width is the sole cause).
- **Q:** query-routing model (event-specific physics query should control maps/predictions).
- **I:** image-only model (physics is redundant and cannot materially affect Raw predictions).
- **O:** zeroing/OOD-bias model (the `zero_cls` collapse is a covariate-shift artifact; event-specific physics is not required).
- **S:** selection/threshold model (the XA-RN gap is primarily threshold or best-epoch selection).

The table uses the following fixed interpretation of pending overrides: `mean_cls` replaces classifier physics by the train-subset mean; `scaled_cls` z-scores each classifier feature with train-subset mean/std; `clipped_cls` clips each feature to train-subset 1st–99th percentiles; `centered_q` subtracts train-subset physics means only before `query_proj`; channel conditions set one image channel to zero; `swap_physics` uses the index-matched HC physics vector for a Raw image; map-level permutation records max attention-map change and argmax agreement, not only accuracy.

| Pending condition | U prediction | C prediction | Q prediction | I prediction | O prediction | S prediction |
|---|---:|---:|---:|---:|---:|---:|
| `permuted_cls` | 0.86–0.88 (|Δ|≤2 pp) | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 |
| `mean_cls` | 0.86–0.88; near original | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 | 0.86–0.88 |
| `scaled_cls` | **0.88–0.91** (+1–4 pp) | 0.86–0.89 | 0.86–0.89 | 0.86–0.89 | **0.89–0.93** (+3–6 pp) | 0.86–0.89 |
| `clipped_cls` | **0.88–0.91** (+1–4 pp) | 0.86–0.89 | 0.86–0.89 | 0.86–0.89 | **0.89–0.93** (+3–6 pp) | 0.86–0.89 |
| `centered_q` | 0.70–0.88 (seed-sensitive, −2 to −17 pp) | 0.82–0.88 | **0.70–0.84** (≥3 pp loss) | 0.84–0.88 | 0.70–0.88 | 0.84–0.88 |
| `zero_ch0` (XA-Raw) | **0.85–0.88**; RN-Raw 0.87–0.90 | 0.84–0.89 | 0.84–0.89 | 0.84–0.89 | 0.84–0.89 | 0.84–0.89 |
| `zero_ch1` (XA-Raw) | **0.55–0.75** (large loss) | 0.70–0.88 | 0.55–0.75 | 0.70–0.88 | 0.70–0.88 | 0.70–0.88 |
| `swap_physics` (Raw image + HC vector) | **0.78–0.87** (distribution-shift loss) | 0.85–0.89 | 0.75–0.85 | 0.86–0.89 | **0.78–0.87** | 0.84–0.89 |
| map-level `permuted_q` | **max |Δmap| ≤0.01; argmax agreement ≥0.95; accuracy Δ≤0.1 pp** | max ≤0.03; agreement ≥0.90 | **max ≥0.10; agreement ≤0.80; accuracy loss ≥2 pp** | max ≤0.03; agreement ≥0.90 | max ≤0.03; agreement ≥0.90 | max ≤0.03; agreement ≥0.90 |
| threshold sweep | best XA acc 0.88–0.90, α-recall +5–15 pp; RN-XA gap remains ≥1 pp | same | same | same | same | **one threshold closes both acc and balanced-acc gaps; residual gap ≤0.5 pp** |
| selection-bias audit (best versus final/held-out) | XA-RN remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | remains −1.0 to −2.5 pp | **gap shrinks to ≥−0.5 pp** |

The strongest discriminator in this block is `permuted_cls`/`mean_cls`: a large drop would damage O and the unified “static/OOD side-channel” reading, while no drop supports O. `centered_q` is deliberately a wide, seed-sensitive prediction because the existing `zero_q` response spans −57.1 to −5.8 pp on triton checkpoints; it should not be overinterpreted as a stable architecture effect.

### Planned GPU runs

Predictions below are for held-out accuracy; α-recall is reported where the task is binary Alpha-vs-rest. Costs are train-hour estimates from observed logs, with a billed headroom of roughly 1.3×; Raw cells can have larger wall span. The existing XA-Raw label-fix point is 0.92136 accuracy, α-recall 0.7254, but its split is zero bytes locally and it has no `run_complete.json`.

| Planned run | U prediction | C prediction | Q prediction | I prediction | O prediction | S prediction | Minimum cost / purpose |
|---|---:|---:|---:|---:|---:|---:|---|
| RN-Raw-lf s42 | 0.925–0.940; α-recall 0.70–0.78 | 0.925–0.940 | 0.925–0.940 | 0.925–0.940 | 0.925–0.940 | 0.925–0.940 | ~4.8 train h (~6.2 billed); decisive paired 4He Raw comparator. |
| 4He HC pair (RN-HC-lf + XA-HC-lf s42) | each 0.950–0.970; XA−RN −0.5 to +0.5 pp | XA 0.940–0.965 (1–3 pp below RN) | XA≈RN 0.950–0.970 | XA≈RN 0.950–0.970 | XA≈RN 0.950–0.970 | XA≈RN 0.950–0.970 | ~6.4 train h (~8.3 billed); completes the interaction term. |
| RN-modified at 160k, NimpSim 3He/4He | 0.930–0.970; balanced recall 0.88–0.96 | 0.930–0.970 | 0.930–0.970 | 0.930–0.970 | 0.930–0.970 | 0.930–0.970 | ~12–18 train h (unverified); repairs the mislabeled §5.5 decomposition. |
| `attn_dim=512` capacity control (XA-Raw, s42) | 0.885–0.910; **still 0.5–1.5 pp below RN-Raw** | **0.890–0.925; reaches RN within 0.5 pp** | 0.87–0.89 | 0.87–0.89 | 0.87–0.89 | 0.87–0.89 | ~5.5 train h; run only after D1–D5. |
| normalized-physics retrain (`physics_norm=zscore`, XA-Raw s42) | **0.900–0.925; carbon leak ≤2%** | 0.880–0.900; carbon leak 5–8% | 0.87–0.89; leak 8% | 0.87–0.89; leak 8% | **0.905–0.935; leak ≈1.5%** | 0.87–0.89 | ~5 train h; run only if `scaled_cls` improves the existing checkpoint. |

These predictions are not a license to run cures early. The run order remains: CPU prediction dumps/D5/D1-D4; then RN-Raw-lf; then the 4He HC pair; then capacity or normalization only if the readouts satisfy their gates.

## 4. EXP3 artifact inventory (live checkout)

All rows below were read directly from `/Users/Reid Hu/MATE-Automation/runs`; `accuracy`, macro-F1, α-recall, and best epoch come from each `metrics.json`; config/fusion/label information comes from each `config.yaml`. “Preds” means `predictions.csv`; “split” means non-empty `data_split.json`; “ckpt” means `best_model.pth`; “complete” means `run_complete.json` exists.

| Run (timestamp) | seed | task/config | acc | macro-F1 | α-recall | best ep | preds | split | ckpt | complete |
|---|---:|---|---:|---:|---:|---:|---|---|---|---|
| ResNet-HC `20260921_092858` | 0 | Garfield_HC; fusion none; triton map | 0.95448 | 0.92670 | 0.84720 | 30 | no | no | no | yes |
| ResNet-HC `20260921_125613` | 1 | Garfield_HC; fusion none; triton map | 0.95748 | 0.93069 | 0.83940 | 27 | no | no | no | yes |
| ResNet-HC `20260921_002013` | 42 | Garfield_HC; fusion none; triton map | 0.95908 | 0.93357 | 0.84840 | 27 | **yes** | **yes** | no | yes |
| ResNet-Raw `20260921_231713` | 0 | Garfield_Raw; fusion none; triton map | 0.88904 | 0.80974 | 0.60860 | 17 | no | no | no | yes |
| ResNet-Raw `20260922_041244` | 1 | Garfield_Raw; fusion none; triton map | 0.89224 | 0.80864 | 0.57820 | 3 | no | no | no | yes |
| ResNet-Raw `20260921_181834` | 42 | Garfield_Raw; fusion none; triton map | 0.89248 | 0.81858 | 0.63560 | 18 | no | no | no | yes |
| XA-HC `20260922_122647` | 0 | Garfield_HC; cross-attention; triton map | 0.95412 | 0.92518 | 0.83040 | 23 | no | no | no | yes |
| XA-HC `20260922_152448` | 1 | Garfield_HC; cross-attention; triton map | 0.95788 | 0.93206 | 0.85360 | 21 | no | no | no | yes |
| XA-HC `20260922_085316` | 42 | Garfield_HC; cross-attention; triton map | 0.95676 | 0.92894 | 0.82760 | 22 | no | no | no | yes |
| XA-Raw `20260923_084135` | 0 | Garfield_Raw; cross-attention; triton map; split file is 0 bytes | 0.87572 | 0.78392 | 0.55980 | 7 | no | no | no | yes |
| XA-Raw `20260922_185618` | 42 | Garfield_Raw; cross-attention; triton map | 0.87116 | 0.77595 | 0.54820 | 12 | no | **yes** | no | yes |
| XA-Raw label-fix `20260923_154749` | 42 | Garfield_Raw; `file_class_list=[1,1,1,1,0]` (4He-vs-rest) | 0.92136 | 0.86928 | 0.72540 | 13 | no | **0-byte** | no | **no** |

The label map in `src/run_experiment.py:627-629` maps raw label 4 to class 0. The 11 triton-task runs therefore are valid triton-vs-rest diagnostics, not 4He results. The label-fix config's explicit file-class list is the only local 4He-vs-rest training artifact. The closing analysis records a corrected 4He battery (`original=0.9275`, `zero_q=0.8065`), but the local label-fix JSON is the known buggy pre-fix battery (`original=0.7005`); I treat the corrected values as report evidence only, not as a local JSON-backed prediction dump.

## 5. Seed statistics and paired evidence

### 5.1 Accuracy and α-recall by arm

The following are means ± sample SD across completed triton runs; 95% intervals are t intervals across seeds (not binomial intervals). Each run has n=25,000 validation events.

| Arm | seeds | accuracy mean ± SD | 95% t interval | α-recall mean ± SD | verdict |
|---|---|---:|---:|---:|---|
| RN-HC | 0,1,42 | 0.95701 ± 0.00234 | [0.95121, 0.96281] | 0.8450 ± 0.0049 | seed-robust arm level |
| XA-HC | 0,1,42 | 0.95625 ± 0.00193 | [0.95146, 0.96105] | 0.8372 ± 0.0143 | seed-robust arm level |
| RN-Raw | 0,1,42 | 0.89125 ± 0.00192 | [0.88648, 0.89602] | 0.6075 ± 0.0287 | seed-robust arm level |
| XA-Raw | 0,42 | 0.87344 ± 0.00322 | [0.84447, 0.90241] | 0.5540 ± 0.0082 | n=2 only |
| XA-Raw label-fix | 42 | 0.92136 | n=1 | 0.7254 | single-seed only |

Same-seed accuracy differences, computed from the metrics and 25,000-event denominators:

| Comparison | per-seed Δ (XA−RN or HC−Raw) | mean Δ | paired evidence available |
|---|---|---:|---|
| XA−RN, HC | −0.04, +0.04, −0.23 pp (s0,s1,s42) | −0.08 pp | no per-event pair; McNemar lower bounds non-significant |
| XA−RN, Raw | −1.33, −2.13 pp (s0,s42) | −1.73 pp | no per-event pair; McNemar lower-bound p≤0.035 and p≤7.5×10⁻⁴ |
| RN, HC−Raw | +6.54, +6.52, +6.66 pp | +6.58 pp | sign same 3/3 |
| XA, HC−Raw | +7.84, +8.56 pp | +8.20 pp | sign same 2/2 |

### 5.2 The one per-event file and computable bootstrap

`runs/EXP3-ResNet-HC-100k-seed42/20260921_002013/predictions.csv` has 25,000 rows and columns `event_index,true_label,pred_label,confidence`. Its confusion matrix is `[[4242,758],[265,19735]]`, exactly matching `metrics.json`, and accuracy is 23,977/25,000 = 0.95908. A deterministic Python bootstrap (seed 42, B=1,000 resamples of event correctness) gives percentile 95% CI **[0.95656, 0.96172]**; the Wilson binomial interval is **[0.95655, 0.96147]**.

A paired bootstrap or exact McNemar test requires two per-event prediction vectors on the same events. No second EXP3 prediction file exists, no EXP3 checkpoint is local, and no local Garfield HDF5 exists. Therefore no paired McNemar/paired-bootstrap arm comparison was fabricated. The same-seed split files for RN-HC s42 and XA-Raw s42 have identical val-index arrays, so the comparisons are paired in principle; prediction dumps on box 176 are the minimum closure.

### 5.3 Per-paper-claim verdicts

| Claim | Evidence-backed verdict | Reason |
|---|---|---|
| HC improves the image task over Raw | **Seed-robust** (5/5 observed architecture-seed pairs) | +6.52–8.56 pp, same sign. |
| XA and RN are tied on HC | **Seed-robust on triton** (3 pairs) | mean −0.08 pp; no paired event vectors, but all point estimates are within 0.23 pp. |
| XA beats RN on Raw | **Contradicted on triton; untested on true 4He** | XA<RN on both observed Raw seeds by 1.33 and 2.13 pp; the true 4He RN comparator is absent. |
| Query content drives attention | **Contradicted in tested accuracy battery** | `permuted_q` changes ≤0.001 on all synced checkpoints; map-level invariance is still pending. |
| Classifier physics is load-bearing on Raw | **Direction replicated, interpretation unresolved** | `zero_cls` collapses every Raw battery, but zeroing is an OOD input shift; D5 (`permuted_cls`/`mean_cls`) is required. |
| Classifier physics is redundant on HC | **Mostly supported, not universal** | two of three HC checkpoints are unchanged; HC s0 drops 15.6 pp. |
| EXP3 headline is a 4He result | **Contradicted for the 11 triton-map runs** | `src/run_experiment.py:627` maps raw label 4 to class 0; only the explicit label-fix run is 4He-vs-rest. |
| XA-Raw 4He reaches about 0.92 | **Single-seed only** | label-fix metrics are valid but no completion marker, split is zero bytes, and no RN comparator exists. |
| XA physics path improves far-OOD rejection | **Contradicted by EXP8 single-seed artifact** | XA carbon→proton 8.0–8.5% versus RN 1.4–1.6%; confidence scores do not detect the leak. |
| Traditional classification comparison is complete | **Missing** | no EXP3 physics-only LogReg score exists locally; D2 is the planned baseline. |

## 6. Minimum further work and cost

Costs use observed training logs summarized in `fm-ar-gpu-ladder/report.md`; billed estimates include approximately 1.3× headroom, with Raw wall-time uncertainty.

| Gap | Minimum closure | Cost | What it closes |
|---|---|---:|---|
| Exact paired statistics | Generate `predictions.csv` for the 10 missing triton/label-fix checkpoints on box 176; sync only CSVs | 0 GPU h; roughly 2–4 CPU h on box | Exact paired bootstrap, McNemar, D4 error overlap. |
| OOD versus information interpretation | Run D5 (`permuted_cls`, `mean_cls`, class histogram), plus `scaled_cls`/`clipped_cls` | 0 GPU h; roughly 1–2 CPU h | Decides whether “load-bearing” means event-specific information or covariate shift. |
| H1a versus H1b localization | Run D1–D4 frozen probes | 0 GPU h; already queued | Separates representation capacity from head/crowding. |
| True 4He Raw comparator | RN-Raw-lf seed 42 | ~4.8 train h / ~6.2 billed | Decides sign of the paper’s central 4He Raw comparison. |
| Complete 4He 2×2 at seed 42 | RN-Raw-lf plus RN-HC-lf and XA-HC-lf | ~11.2 train h / ~14.6 billed | Adds the architecture×representation interaction term. |
| Seed-robust 4He headline | Add Raw and HC seeds 0 and 1 after the sign gate | ~33.4 train h / ~43 billed for six runs | Three-seed 4He means and spread. |
| Triton grid hole | XA-Raw seed 1 | ~5.5 train h / ~7.2 billed | Makes the diagnostic Raw result 3/3 seeds; optional if campaign pivots to 4He. |
| Capacity control | XA-Raw `attn_dim=512`, seed 42 | ~5.5 train h | Tests whether widening alone closes the Raw gap; gated on D1–D5. |
| Scale control | XA-Raw `physics_norm=zscore`, seed 42 | ~5 train h | Tests the raw-feature side-channel prediction; gated on `scaled_cls`. |
| Correct NimpSim 3He/4He decomposition | RN-modified 160k run (plus matched XA/RN controls if chosen) | ~12–18 train h, unverified until data staged | Repairs the mislabeled §5.5 claim. |

Do not quote any of the triton deltas as 4He evidence, and do not spend on capacity/normalization cures before the CPU diagnostics return.

## 7. Single result that would most damage this model

The most damaging result is **a map-level `permuted_q` change that is large and predictive** on HC: max attention-map change ≥0.10, argmax agreement ≤0.80, and accuracy loss ≥2 pp on the same events. This would directly falsify the claim that the physics query is a static/near-static bias and would force a query-routing mechanism. A close second is `permuted_cls`/`mean_cls` causing a large accuracy drop (≥10 pp) while `scaled_cls` and `clipped_cls` do not improve: that would reject the OOD-bias explanation and support genuine event-specific physics dependence/crowding.

## 8. Open questions for firstmate/lead (not blockers)

1. Sync the corrected label-fix battery JSON and non-empty label-fix split before quoting any 4He counterfactual. The local JSON is the void pre-fix positional-label run.
2. Sync prediction dumps for the missing checkpoints; retain the event IDs and true-label equality checks. The paired-stat implementation should fail on any shared-label mismatch rather than silently dropping rows.
3. Confirm whether the pending `threshold_sweep` uses a single joint threshold for both accuracy and balanced accuracy; the existing audit identified a possible “marginal thresholds” false calibration verdict.
4. The query permutation is weak on Raw because Raw physics is near constant; the HC map-level test is the decisive version.
5. D2 physics-only LogReg is the missing traditional classification baseline. Energy regression already has a fair common-roster CNN-versus-classical comparison; angle remains literature-only.

## 9. Reproducibility index

- EXP3 artifacts: `/Users/Reid Hu/MATE-Automation/runs/EXP3-*/*/{metrics.json,config.yaml,history.json,run_complete.json,data_split.json,counterfactual_battery.json}`.
- Closing record: `20_doc/EXP3_closing_analysis_2026-09-24.md`, especially §§1, 4, 8–12, 14–15.
- Raw/HC audit: `20_doc/audits/2026-09-23_raw-hc-input-audit.json`.
- Source contracts: `src/data/dataset.py:463-473`, `src/data/normalization.py:24-30`, `src/models/model.py:350-383`, `src/models/cross_attention.py:153-200`, `src/models/classifier.py:5-10`, `src/run_experiment.py:624-629`.
- Existing scout evidence consumed: `fm-ar-hc-vs-raw`, `fm-ar-feature-norm`, `fm-ar-attn-sink`, `fm-ar-ood-leakage`, `fm-ar-capacity-critique`, `fm-ar-referee`, `fm-ar-hehe-control`, `fm-ar-seed-evidence`, `fm-ar-results-audit`, `fm-ar-comparisons`, `fm-ar-methods-audit`, `fm-ar-difficulty`, `fm-ar-code-audit`, `fm-ar-gpu-ladder`, `fm-ar-gpu-plan-draft`, and `fm-ar-label-blast` reports.
