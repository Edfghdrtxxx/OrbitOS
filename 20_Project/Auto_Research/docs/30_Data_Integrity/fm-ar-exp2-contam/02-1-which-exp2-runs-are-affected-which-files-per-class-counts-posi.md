<!-- Verbatim source section; overview: [[../fm-ar-exp2-contam]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
