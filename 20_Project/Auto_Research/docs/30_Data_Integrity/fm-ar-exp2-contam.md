> Origin: `fm-ar-exp2-contam` scout report; recorded 2026-09-24.

# fm-ar-exp2-contam — EXP2 carbon contamination: blast radius and cheapest honest repair

**Date:** 2026-09-24 · **Worker:** fm-ar-exp2-contam (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (`runs/` is gitignored, read there). No box-176/AutoDL/IMP/Windows contact. No manuscript or lead files touched.
**Builds on:** `fm-ar-label-blast/report.md` §1.3 (which discovered the 7-file glob). This report establishes the full per-run accounting, the inflation estimate, every quotation site, and the repair menu.

---

## 0. TL;DR

- **Two EXP2 runs are contaminated:** `EXP2-GatedFusion-HC-100k-3He4He` and `EXP2-ConcatFusion-HC-100k-3He4He` (the "³He/⁴He" arm). Their configs glob all `*.h5` in `Garfield_HC/`, which by run time contained **7 files**: the 5 light-species files plus the 13C and 14C files written into the same directory ~4 h earlier. Train = 140k (20k α + 120k non-α), val = 35k (5k α + 30k non-α, of which **10k are carbon**). The three 13C/14C runs are clean (explicit `hdf5_files`).
- **Carbon is trivially separable** (Z=6 vs Z≤2; the `total_mass` physics feature alone separates it). Both a CM-arithmetic bound (carbon val accuracy ≥ 89.3%) and physics say carbon accuracy ≈ 100%. The reported 96.94%/96.98% therefore **inflates the light-species accuracy by ~1.2 pp**: on a clean 5-species val the same checkpoints score ≈ **95.7–95.8% — statistically indistinguishable from EXP1-XA's 95.80%**. The manuscript's "ordering was the same (96.98, 96.94, 95.80)" is a val-composition artifact.
- **EXP2 numbers appear in exactly three places:** `main.tex:381` (manuscript), `openspec/changes/EXP2-fusion-mechanism-comparison/implementation_log.md` (multiple lines), `openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md` (multiple lines). `paper_anchor.md`, the EXP3 closing doc, and all other `20_doc/` files quote **no** EXP2 numbers.
- **Cheapest repair:** a zero-compute `predictions.csv` × `data_split.json` join on the Windows box (~5 min) gives exact clean-subset metrics. If Windows is unreachable: copy the two checkpoints to box 176 and re-eval on the 5 `sim_inv` files (~1–3 CPU-h, 0 GPU-h). Retraining on the clean 5-file set (~5–8 GPU-h on the 3080 Ti for both runs) is only needed if the paper wants clean-*trained* numbers — it fits the 24 GPU-h budget but is not required for the manuscript claim, which the clean 13C/14C arm already carries.

---

## 1. Which EXP2 runs are affected, which files, per-class counts, positive class

### 1.1 Affected runs

| Run | Config | File selection | Status |
|---|---|---|---|
| `EXP2-GatedFusion-HC-100k-3He4He/20260318_144537` | `configs/EXP2_GatedFusion_HC_100k_3He4He.yaml` | **dir glob** (`dataset: Garfield_HC`, no `hdf5_files`, no `hdf5_pattern`) | **CONTAMINATED** |
| `EXP2-ConcatFusion-HC-100k-3He4He/20260318_182051` | `configs/EXP2_ConcatFusion_HC_100k_3He4He.yaml` | **dir glob** (same) | **CONTAMINATED** |
| `EXP2-CrossAtt-HC-100k-13C14C/20260318_231654` | `configs/EXP2_CrossAtt_HC_100k_13C14C.yaml` | explicit `hdf5_files` (2 files) | clean |
| `EXP2-GatedFusion-HC-100k-13C14C/20260319_021019` | `configs/EXP2_GatedFusion_HC_100k_13C14C.yaml` | explicit `hdf5_files` (2 files) | clean |
| `EXP2-ConcatFusion-HC-100k-13C14C/20260319_041649` | `configs/EXP2_ConcatFusion_HC_100k_13C14C.yaml` | explicit `hdf5_files` (2 files) | clean |
| `EXP1-XA-HC-100k/20260317_191552` (the XA comparator) | `configs/EXP1_XA_HC_100k.yaml` | dir glob, **but ran 2026-03-17, before the carbon files existed** | clean (5 files, verified: `data_split.json` total = 125,000, `exp1-impl/09_execution.md:82`) |

Stale/failed EXP2 dirs (`20260318_115843`, `115849`, `120104`, `124518`, `124533`) produced no results — irrelevant.

### 1.2 Files globbed (7)

`resolve_hdf5_paths()` (`src/run_experiment.py:560-562`) sorts `data_dir.glob("*.h5")`. Sorted order and global-index ranges (25k subsampled per file, `per_file_limit: 25000`):

| # | File | Global idx range | Species | Class |
|---|---|---|---|---|
| 1 | `sim_12C300MeV_13C_elastic_100k_garfield_v5_hc.h5` | 0–24,999 | 13C | 1 (non-α) |
| 2 | `sim_12C300MeV_14C_elastic_100k_garfield_v5_hc.h5` | 25,000–49,999 | 14C | 1 (non-α) |
| 3 | `sim_inv_12C300MeV_4He_3He_100k_garfield_v5_hc.h5` | 50,000–74,999 | 3He | 1 |
| 4 | `sim_inv_12C300MeV_4He_4He_100k_garfield_v5_hc.h5` | 75,000–99,999 | 4He | **0 (α)** |
| 5 | `sim_inv_12C300MeV_4He_d_100k_garfield_v5_hc.h5` | 100,000–124,999 | d | 1 |
| 6 | `sim_inv_12C300MeV_4He_p_100k_garfield_v5_hc.h5` | 125,000–149,999 | p | 1 |
| 7 | `sim_inv_12C300MeV_4He_t_100k_garfield_v5_hc.h5` | 150,000–174,999 | t | 1 |

Evidence the glob took 7: the val CM totals are exactly 35,000 = 20% × 7 × 25k (`implementation_log.md:151-153`); the carbon files were written to `dataset/Garfield_HC/` on 2026-03-18 (`exp2-impl/01_data_generation.md:99-100`), hours before the 3He4He runs launched (12:01 and 18:20); the directory inventory contains no other `.h5` files. The "4 files (3He, 4He, 6He, Non-alpha)" prose at `implementation_log.md:39-41,166` is stale — there is no 6He or merged Non-alpha file; the 35k val proves 7.

### 1.3 Per-class event counts

175k subsampled → stratified 80/20 on the binary label (`train_test_split(stratify=binary_labels, random_state=42)`):

| Split | class 0 (α) | class 1 (non-α) | total | non-α composition |
|---|---|---|---|---|
| train | 20,000 | 120,000 | 140,000 | 20k each of 3He, d, p, t, 13C, 14C |
| val | 5,000 | 30,000 | 35,000 | ~5k each of 3He, d, p, t, 13C, 14C |

No test set exists — val is the evaluation set (`01_exp_results_investigation.md` §1.2.1; the "held-out test set" language in the spec is a misnomer). Per-species val counts are ~5k each up to stratification jitter; exact per-file counts require the run's `data_split.json`, which lives only on the Windows box.

**Training-set contamination is the second-order issue:** 28.6% of the EXP2-3He4He training data was carbon (40k/140k), vs 0% for EXP1-XA. So even the val-cleaned comparison is not fully controlled — see §4.

### 1.4 Positive class under the file-label convention in force

The runs used `_LABEL_MAP_3HE4HE = {4:0, others:1}` (`src/run_experiment.py:659`, = `NIMPSIM_4HE_BINARY_MAP`). What raw label 4 is depends on the convention inside the Windows `Garfield_HC` files:

- **v6 / openspec_v6** `{p:0, d:1, t:2, 3He:3, 4He:4}` → class 0 = **4He (α)**. This is the convention in force: the files carry `label_map_version='openspec_v6'` (measured, `EXP1 review_01.md:58`, `review_03b.md:11`), and the runs report "4He recall 83.9%" consistent with α-vs-rest. (Caveat carried over from label-blast §1.4: the attr proves the relabel script ran; the raw values were not re-read. Under the OLD convention `{3He:0,4He:1,d:2,p:3,t:4}` — measured on box-176 files, `20_doc/audits/2026-09-23_raw-hc-input-audit.json` — the same map would make class 0 = triton. The Windows values are checkable in ~1 min of h5py on that box.)
- **Either way, carbon is class 1.** The carbon files were converted with explicit `--label 0` (13C) and `--label 1` (14C) (`exp2-impl/01_data_generation.md:45-49`); under `{4:0, others:1}` both map to the negative class under both conventions. The contamination finding is convention-independent.

So the EXP2 "³He/⁴He" task is really **α(4He) vs {p, d, t, 3He, 13C, 14C}** — a different task from EXP1's α vs {p, d, t, 3He}, and neither is "³He-vs-⁴He" (the `task_type` name is a third fiction, per methods-audit M2).

---

## 2. Is the carbon trivially separable? Contaminated vs clean accuracy

**No EXP2 `predictions.csv`, `data_split.json`, `metrics.json`, or checkpoint exists on this Mac** (verified: `find runs -iname '*EXP2*'` → nothing; the only local `predictions.csv` files are EXP3-s42 and EXP8). Per-file metrics for the contaminated runs are not locally decidable — the exact clean-split number requires the Windows artifacts (§4). What is decidable locally:

### 2.1 Carbon is trivially separable — two independent arguments

1. **Physics:** 13C/14C have Z=6; every other species in the pool has Z≤2. The `total_mass` (total charge) physics feature — one of the 4 features fused into the classifier — is ~3× larger for carbon (measured means 6.85/6.86 for 13C/14C, `exp2-impl/01_data_generation.md:75`, vs ~1–2 for p/d/t/He). A model with access to that feature cannot confuse carbon with helium. Even the image channel is trivially distinct (438 avg hits/event for carbon vs far sparser light-ion tracks).
2. **Arithmetic bound from the confusion matrices** (`implementation_log.md:151-153`): let c = carbon val accuracy. For GatedFusion, 30,000·c + 5,000·a_light ≥ 29,734 correct class-1 predictions → c ≥ 0.893. For Concat, c ≥ 0.891. Carbon accuracy is bounded below by ~89% and physically ≈100%.

### 2.2 Clean-split estimate

Recompute accuracy on the 25k light-species subset (5k α + 20k non-α) from the same CMs, at carbon accuracy c:

| Model | reported (35k) | clean-subset acc (c=1.0) | clean range (c∈[0.9,1.0]) |
|---|---|---|---|
| EXP1-XA (CrossAtt) | 95.80% (25k, clean) | 95.80% | — |
| EXP2-GatedFusion | 96.94% | **95.72%** | [95.72%, 97.72%] |
| EXP2-ConcatFusion | 96.98% | **95.74%** | [95.74%, 97.74%] |

At the physically motivated c≈1.0: **Gated 95.72%, Concat 95.74%, XA 95.80% — a three-way tie within ±0.1 pp.** The +1.14/+1.18 pp advantage over XA is entirely the 10k near-free carbon events. The manuscript's fusion ordering on this arm is a val-composition artifact; on the clean task the three mechanisms are indistinguishable (single seed, n=25k → ±0.4 pp noise).

Caveat: this is the contaminated-*trained* model evaluated on a clean subset. A clean retrain could move the number in either direction (carbon in training is 28.6% of data — plausibly harmless or mildly helpful as easy negatives, but unmeasured).

---

## 3. Every place EXP2 numbers are quoted

| # | Location | Numbers quoted | Verdict |
|---|---|---|---|
| 1 | `10_Papers-Thesis/Physics_Informed/main.tex:381` | 13C/14C: 86.07/85.74/84.63; "³He/⁴He": 96.98/96.94/95.80 | 13C/14C numbers **stand** (clean runs). ³He/⁴He numbers **inflated ~1.2 pp and misleading**: task is α-vs-rest not ³He/⁴He; negative pool undisclosed-carbon-contaminated; the "smaller validation set" caveat understates it (different *composition*, plus asymmetric training data — EXP2 trained on 28.6% carbon, EXP1 on none). Clean-subset values ≈95.7–95.8% collapse the ordering to a tie. |
| 2 | `openspec/changes/EXP2-fusion-mechanism-comparison/implementation_log.md:114-115, 126, 150-153, 166, 192, 203` | 96.94/96.98; CMs; "4 files (3He,4He,6He,Non-alpha)"; "Concat > Gated > CrossAtt"; "~11 pp drop confirms Δ(A/Z) intuition" | Accuracy/macro-F1 rows **inflated**; the "4 files" prose **wrong** (7 files, no 6He/Non-alpha files exist); the ranking claim **artifact of val composition**; the "~11 pp drop" line is **uninterpretable** — it compares a contaminated α-vs-7-species task against a clean 13C-vs-14C task. |
| 3 | `openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md:220-223, 258, 475` | 96.943/96.983; "35k val unexplained"; "not directly comparable" | The flag was correct; **root cause now determined** — 7-file glob including carbon. The "not directly comparable" warning stands and should be upgraded to "inflated; clean-subset ≈95.7%". The 13C/14C rows (L229-231, 258) **stand**. |
| 4 | `20_doc/paper/paper_anchor.md` | — | No EXP2 numbers quoted. No action. |
| 5 | `20_doc/EXP3_closing_analysis_2026-09-24.md`, `EXP3_campaign_narrative_draft.md`, `EXP3_results_interpretation_predraft.md`, `EXP3_garfield_noise_robustness_analysis.md`, `EXP4_attention_collapse_finding.md`, `Experiment Recordings/` | — | No EXP2 numbers quoted (grep-verified). No action. |
| 6 | `runs/EXP2-fusion-comparison/figures/` (7 PNGs, Windows only) | exp2_accuracy_bars etc. | **Inflated** for the 3He4He panels; regenerate if reused. |

Suggested wording for `main.tex:381` (finding only — captain edits): replace the ³He/⁴He clause with e.g. *"on the α-vs-rest task the three mechanisms were statistically indistinguishable (≈95.7–95.8% on the five light species; the originally reported 96.9% figures included ¹³C/¹⁴C events in the validation pool)"* — or drop the arm and let the clean 13C/14C result carry the claim, which it already does.

---

## 4. Cheapest honest repair

### Option A — zero-compute re-scoring (cheapest; needs the Windows box, ~5 min)

Both contaminated runs saved `predictions.csv` (event_index, true_label, pred_label) and `data_split.json` (val_indices = global indices into the sorted 7-file space). Carbon events occupy global indices < 50,000 (files 1–2 in §1.2). Join and drop:

```python
import json, pandas as pd
split = json.load(open('data_split.json'))
val = split['val_indices']                      # global indices
df = pd.read_csv('predictions.csv')             # aligned to val_indices order
mask = [i >= 50000 for i in val]                # drop 13C/14C (first two sorted files)
clean = df[mask]
acc = (clean.true_label == clean.pred_label).mean()
# per-species: species = val[i]//25000 -> file table in §1.2
```

Cost: minutes, zero GPU, zero retraining. Yields the exact clean-subset accuracy/macro-F1/per-species recalls for both checkpoints. **This is the recommended first step** — it converts my c≈1.0 estimate into a measurement.

### Option B — CPU re-evaluation on box 176 (~1–3 CPU-h, 0 GPU-h)

If Windows artifacts are unreachable: copy `best_model.pth` + `normalization_stats.json` + `config.yaml` from the two Windows run dirs to box 176 and run `evaluate.py` against the 5 `sim_inv_*_hc.h5` files there. Two caveats: (i) box-176 Garfield files are OLD-mapped, so the eval config **must** set `data.file_class_list` (the 2026-09-23 guard at `run_experiment.py:400-417` refuses Garfield binary runs without it); (ii) box-176 files are an independent conversion — image content should be identical modulo conversion nondeterminism, so treat the result as a cross-check, not bit-exact. Cost: 2 checkpoints × 25k-event CPU forward pass ≈ 20–60 CPU-min each plus transfer.

### Option C — clean retrain (only if clean-*trained* numbers are wanted)

Exact config change for `configs/EXP2_{Gated,Concat}Fusion_HC_100k_3He4He.yaml` — replace the glob with an explicit list and satisfy the guard:

```yaml
data:
  dataset: Garfield_HC
  hdf5_dir: ""
  hdf5_files:
    - "Garfield_HC/sim_inv_12C300MeV_4He_3He_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_4He_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_d_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_p_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_t_100k_garfield_v5_hc.h5"
  file_class_list: [1, 0, 1, 1, 1]   # declared order 3He,4He,d,p,t -> 4He = class 0
  per_file_limit: 25000
```

This reproduces EXP1's exact 125k/100k/25k split (same seed 42, same sorted files), making the retrain fully controlled against EXP1-XA — including identical val indices. On box 176 the same config works unchanged (OLD-mapped files are bypassed by `file_class_list`).

GPU-hour estimate: EXP2 epochs on the RTX 4060 laptop took ~21 min under contention (26–29 epochs → ~9–10 h/run there). On the AutoDL 3080 Ti, EXP3-scale runs (100k train, 20–38 epochs) imply roughly **2.5–4 GPU-h per run → ~5–8 GPU-h for both**, inside the approved 24 GPU-h budget. But note Option C still leaves a single-seed comparison; its marginal value over Option A is only the training-pool difference.

### Recommendation

1. **Option A now** (Windows box, minutes) → exact clean numbers for the manuscript footnote/fix.
2. If the captain wants the fusion claim to rest on fully controlled data, **Option C** (≤8 GPU-h, within budget) — but the clean 13C/14C arm already supports "simplest fusion ≥ cross-attention," so the cheapest *sufficient* manuscript repair may be dropping or annotating the ³He/⁴He arm, costing 0 GPU-h.
3. Whatever runs next on Garfield must use `file_class_list` — the guard now enforces it, and this contamination is exactly the failure mode it exists for.

---

## 5. Reproduction

```bash
# 7-file glob: configs/EXP2_*_3He4He.yaml have no hdf5_files/hdf5_pattern;
#   src/run_experiment.py:560-562 globs *.h5 sorted; carbon files sort first
#   (sim_12C... < sim_inv_12C...).
# Val size proof: implementation_log.md:151-153 CM totals = 35000 = 0.2*7*25000.
# Carbon file timestamps: 99_System/.scratch/exp2-impl/01_data_generation.md:99-100
#   (written to dataset/Garfield_HC/ on 2026-03-18, before 3He4He runs).
# Carbon labels: same file L45-49 (--label 0/1) -> class 1 under {4:0,others:1}.
# EXP1 clean: exp1-impl/09_execution.md:82 (data_split total=125000, 5 files).
# Clean-acc arithmetic: (30000*c + 5000*a)/35000 = reported; c=1 -> a_clean.
# No local EXP2 artifacts: find runs -iname '*EXP2*' -> empty;
#   predictions.csv only under EXP3-*-seed42 and EXP8.
# Guard: src/run_experiment.py:400-417 (Garfield binary requires file_class_list).
# Manuscript: grep -n 'fusion\|96.9\|86.0' 10_Papers-Thesis/Physics_Informed/main.tex -> L381, L493.
```

## 6. Open items for the lead (non-blocking)

1. Run Option A on the Windows box (or sync the two `predictions.csv` + `data_split.json` here — ~2 MB — and I'll compute it).
2. Whether Windows `Garfield_HC` raw labels are v6-valued remains the label-blast §1.4 open check (1 min of h5py); it does not change the carbon finding but decides whether class 0 was 4He or triton at EXP2 run time.
3. If the manuscript keeps a ³He/⁴He-arm fusion number, decide between annotation (Option A output) and retrain (Option C).
