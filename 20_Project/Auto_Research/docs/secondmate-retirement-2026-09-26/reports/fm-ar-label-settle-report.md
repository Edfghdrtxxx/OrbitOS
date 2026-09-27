# fm-ar-label-settle — settling the two Windows-machine concerns from surviving evidence

**Date:** 2026-09-25 · **Worker:** fm-ar-label-settle (scout) · **Mode:** findings only — no code changes, no training, no manuscript edits, no writes to box 176 or IMP.
**Scope:** (1) V6 Table 4 label-map question (label-blast §1.4); (2) EXP2 3He/4He clean accuracy (exp2-contam §4 Option A). Windows machine and everything only on it are gone.
**Sources searched:** live checkout `/Users/Reid Hu/MATE-Automation` (git history, `runs/`, `configs/`, `20_doc/`, `openspec/`, `99_System/`, memory archive), OrbitOS `Auto_Research/docs/`, manuscript `main.tex` (read-only), GitHub legacy repo `Edfghdrtxxx/MATE-Event-Classifier-DL`, and **box 176 read-only** (AutoDL instance B, `connect.westb.seetacloud.com:43812`, via `gpu_exec.py` — `ls`/`find`/h5py attr reads only).

---

## 0. TL;DR

| Concern | Settled from surviving evidence? | Verdict | Confidence |
|---|---|---|---|
| **1. V6 Table 4** (96.6/95.8/95.1/93.5, Feb 2026) | **Not to certainty — but the surviving evidence converges on one answer** | **Table 4 is almost certainly triton-vs-rest** (the same `{4:0}`-on-OLD-labels bug that hit EXP3), not α-vs-rest | **~80%** |
| **2. EXP2 clean α-vs-rest accuracy** | **No — unrecoverable** | Exact clean number is lost with the Windows `predictions.csv`/`data_split.json`/checkpoints; the estimate ≈95.7–95.8% stands | estimate only |

Smallest covering task set (details §3, §4):
- **T1 (GPU, ~10–15 h):** run the 3 remaining EXP3 label-fix arms on box 176 — configs already exist — to complete a true 4He-vs-rest 2×2 at 100k/25k. This *replaces* Table 4's comparative claims at matched size (and removes V6's 400k-vs-100k confound).
- **T2 (GPU, ~30–50 h, optional):** two new V6-faithful 400k/100k XA configs if the manuscript wants to keep 400k-scale numbers.
- **T3 (GPU, ~5–8 h):** clean retrain of the two EXP2 3He4He arms — **configs are already repaired** (explicit 5-file list + `file_class_list`); produces clean-*trained* numbers, fully controlled vs EXP1-XA.
- **T4 (CPU, ~0):** when the box-176 copy lands at `/Users/Reid Hu/MATE-data-archive/autodl-176/` (**currently empty — copy still in flight**), re-verify labels/attrs locally; plus the already-planned EXP3 checkpoint prediction dump on box-176 CPU.
- **T5 (0 GPU-h alternative):** manuscript-only repair — annotate/relabel Table 4 and the EXP2 arm; the clean 13C/14C arm already carries the fusion claim.

All GPU items are **awaiting the captain's GPU-time decision** (set aside pending the graduate-supervisor talk). CPU items can run on the free IMP server once reachable, or on box-176 CPU.

---

## 1. Concern 1 — V6 Table 4: what the surviving evidence says

### 1.1 The decisive new fact: `label_map_version` is a relabel-script artifact, and the Windows files carried it

Chain of evidence (each link verified this session or cited from prior verified reports):

1. **The converter does not write `label_map_version`.** The legacy converter's documented metadata attrs (`openspec/changes/EXP1-matched-training-size/01_converter_verification.md:48`) list `num_events, image_width/height, conversion_complete, physics_feature_version, has_physics_features` — no `label_map_version`. Direct confirmation: the 13C/14C Garfield_HC files converted on 2026-03-18 **lack** the attr (`99_System/.scratch/exp2-impl/review_01.md:31-33`, "Missing `label_map_version` metadata attribute … The existing 3He/4He files have `label_map_version: 'openspec_v6'`").
2. **Only `relabel_garfield_v6_labels.py` writes it** — as its idempotency guard (`LABEL_MAP_VERSION = "openspec_v6"`, `openspec/changes/EXP1-matched-training-size/review_01b.md:25`). The script's documented purpose: "idempotent relabeling **from old mapping to OpenSpec V6**" (`01_converter_verification.md:24`).
3. **The Windows 5-species Garfield files carried `label_map_version='openspec_v6'`** (measured March 2026: `review_01.md:58`, `review_03b.md:11`).
4. ∴ **The Windows files were relabeled OLD→v6 — i.e., they were OLD-mapped `{3He:0,4He:1,d:2,p:3,t:4}` at conversion.** (If they had been v6-mapped at birth, nothing would ever have set the attr: the converter doesn't write it, and the relabel script skips files already carrying it.)
5. **The relabel script is an openspec-era artifact.** Its guard string is literally `"openspec_v6"` — named after this repo's `openspec/` framework, whose first commit is `c666db3` (2026-03-16). The audit verified the script and the v6 `determine_label_and_info()` on 2026-03-17 (`01_converter_verification.md`, dated 2026-03-17). The V6 runs are dated **2026-02-02/04** (run dirs `V6_ResNet_Raw_20260202_185050`, `V6_ResNet_HC_20260204_004518`, `V6_CrossAtt_Raw_20260204_022458`, `V6_CrossAtt_HC_20260204_141711` — `scripts/plotting/paper_fig_data/v6_training_curves.json`; `openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md:289-292,454-457`).
6. ∴ **The relabel ran after the V6 runs** (a script named for a framework created 2026-03-16 cannot have run before 2026-02-04). At V6 run time the files were OLD-mapped → `v6_common.py remap_labels_alpha_vs_all` `{4:0}` picked **triton** (OLD label 4 = t), exactly the EXP3 bug.

**Verdict: Table 4 is triton-vs-rest, ~80% confidence.** The residual 20% is scenario (a): the relabel script (or an equivalent manual relabel + attr write) existed and ran before 2026-02-04 under a name later retro-documented as "openspec_v6". No surviving evidence supports that; every dated artifact puts the v6 convention in March 2026.

### 1.2 Corroborating (weak) evidence

- **Box-176 Garfield files are OLD-mapped and carry NO `label_map_version` attr** — verified directly today via h5py on box 176: `..._t_...h5` → labels `[4]`, `..._4He_...h5` → labels `[1]`, attrs contain no `label_map_version` (both HC and Raw). They were never relabeled — consistent with being pre-relabel copies of the same Windows lineage (Garfield H5 conversion only ever ran on Windows; no Garfield converter exists in this repo — verified: no `convert_root_to_h5_data.py`/`convert_v5_to_hdf5.py`/`determine_label_and_info` in `scripts/`).
- **V6 class-0 recalls vs EXP3 triton recalls (cross-dataset, weak):** V6-RN-HC 84.36% ≈ EXP3-RN-HC triton recall ~84%; V6-RN-Raw 76.56% vs EXP3-RN-Raw triton ~61%; V6-XA-Raw 84.1% vs EXP3-XA-Raw triton 54.8% — divergent, but V6-XA trained on 400k vs EXP3's 100k and on a different file lineage, so neither direction is probative. Recorded for completeness; not load-bearing.
- **The bug mechanism is identical to EXP3's proven bug:** a `{4:0}` remap written against the NimpSim/v6 convention (label 4 = 4He) applied to OLD-mapped Garfield files (label 4 = triton). EXP3 hit it in Sept 2026 on box-176 files; V6 hit it in Feb 2026 on pre-relabel Windows files. The EXP3 bug went undetected for ~8 months — the V6 bug would have gone undetected for ~8 months too, for the same reason (nothing in a 2×2 confusion matrix reveals which species is class 0).

### 1.3 What is permanently lost (cannot settle to 100%)

- V6 `predictions.csv` + `data_split.json` / saved val indices (`D:\...\outputs\V6_*_2026020*` dirs) — the only artifact that would prove the *run-time* class-0 species.
- `relabel_garfield_v6_labels.py` mtime / legacy-repo git history — would date the relabel exactly.
- Windows Garfield H5 label values — would prove the *current* convention (moot for run-time state anyway).
- The legacy codebase `D:\Something\research\AFTPC_V3_MultiAgentVersion` — GitHub `Edfghdrtxxx/MATE-Event-Classifier-DL` is only a 37-file landing-page snapshot (last push 2026-01-16), no converter, no V6 scripts.
- EXP1/EXP2 run artifacts (predictions, splits, checkpoints, metrics.json) — all Windows-only.

### 1.4 Manuscript impact if the verdict holds (file:line, suggested wording only — captain edits)

| Location | Current text | Status under verdict |
|---|---|---|
| `main.tex:275` | "binary α versus Nonα classification task (α = ⁴He; Nonα ∈ {p, d, t, ³He})" | **Wrong task identity** — the runs were triton-vs-rest. Comparative claims (HC>Raw, XA>RN) remain internally valid (both arms share the task). |
| `main.tex:282-291` (Table 4) | 96.6/95.8/95.1/93.5 + α recalls 87.4/84.4/84.1/76.6 | Numbers real but describe triton-vs-rest; "α Recall" column is triton recall. |
| `main.tex:295-298` | "α recall of 0.874 … correctly identifies 87.4% of α particles … ³He closest to α in stopping power" | Narrative wrong — class 0 was triton; the "³He confusion" story is unsupported. |
| `main.tex:369` | §5.5 "XA 95.80% vs ResNet 95.77%" decomposition | EXP1's 95.80 (post-relabel, α-task) vs V6-RN-HC's 95.77 (triton-task) — **cross-task comparison, invalid** under the verdict. |
| `main.tex:503` | abstract "96.6% accuracy for α versus Nonα" | Wrong task. |
| Suggested wording | — | e.g. "the V6 ablation was later found to have used a stale label map making the positive class triton rather than ⁴He; the architecture and preprocessing comparisons are unaffected, and the corrected α-vs-rest 2×2 is reported in Table X" — or replace the numbers with the label-fix 2×2 (T1). |

Note the asymmetry the captain should see: **EXP1-XA-HC-100k (95.80%) is clean** — it ran 2026-03-17 on the post-relabel v6 files (its `data_split.json` total = 125,000 over 5 files, `exp1-impl/09_execution.md:82-103`). Under the verdict, EXP1 is the *only* clean α-vs-rest Garfield number that survives from the Windows era — and its artifacts are gone too, so it cannot be re-verified, only re-run.

---

## 2. Concern 2 — EXP2 clean accuracy: unrecoverable

- **No EXP2 artifact survives anywhere checked:** `find` on the Mac → zero EXP2 files under `runs/`; box 176 → zero EXP2 run dirs or checkpoints (only configs); OrbitOS → none. The two contaminated runs' `predictions.csv`, `data_split.json`, `metrics.json`, and `best_model.pth` existed only on Windows.
- **Option A (rescore) is dead** — nothing to join. `scripts/analysis/exp2_clean_rescore.py` exists (merged, PR https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/23) but has no inputs.
- **Option B (checkpoint CPU re-eval) is dead** — no checkpoints.
- **The estimate stands:** clean-subset ≈ **95.7–95.8%** for both arms (carbon accuracy physically ≈100%, CM-arithmetic bound ≥89%; exp2-contam §2.2). Statistically indistinguishable from EXP1-XA's 95.80%.
- **Verdict: cannot be settled from surviving evidence.** The exact number is gone; only a retrain produces a real one.

---

## 3. Replacement task specs (launch-ready)

### T1 — Complete the true-4He 2×2 at 100k/25k (covers Concern 1's comparative claims) — GPU, ~10–15 h

- **What:** the three missing label-fix arms on box 176: `EXP3-XA-HC-100k-label-fix-seed42`, `EXP3-ResNet-HC-100k-label-fix-seed42`, `EXP3-ResNet-Raw-100k-label-fix-seed42`. The fourth cell (`EXP3-XA-Raw-100k-label-fix-seed42`, 0.92136) already exists.
- **Configs:** already in repo — `configs/EXP3_XA_HC_100k_label_fix_seed42.yaml`, `EXP3_ResNet_HC_100k_label_fix_seed42.yaml`, `EXP3_ResNet_Raw_100k_label_fix_seed42.yaml` (verified today: declared order `(p,d,t,3He,4He)`, `file_class_list: [1,1,1,1,0]` → 4He = class 0; satisfies the `4ac3f1c` guard).
- **Data:** box-176 `/root/autodl-tmp/data/Garfield_{HC,Raw}/` — present, OLD-mapped, bypassed by `file_class_list` (verified today).
- **Cost:** measured siblings on the same box: RN-HC 166–205 min, XA-HC 176–211 min, RN-Raw 276–294 min, XA-Raw 294–345 min → **≈ 10–15 GPU-h total** (sequential, single GPU).
- **Readout:** yields a clean α-vs-rest 2×2 at matched 100k/25k — a *strictly better* Table 4 (no 400k-vs-100k confound). If RN-HC-lf lands ≈95.8/84.4 it would weakly favor V6-having-been-α; a large deviation supports the triton verdict. Either way the manuscript gets honest replacement numbers.

### T2 — V6-faithful 400k/100k XA arms (only if the paper keeps 400k-scale numbers) — GPU, ~30–50 h, optional

- **What:** XA-HC and XA-Raw at `per_file_limit: 100000` (500k total → 400k/100k), `file_class_list` 4He→0, seed 42.
- **Configs:** need writing — clone `configs/EXP3_XA_{HC,Raw}_100k_label_fix_seed42.yaml`, change `per_file_limit: 25000→100000`, `train_size/val_size` → 400000/100000.
- **Cost:** ~4× the 100k-arm epoch cost → ~15–25 GPU-h each on the 3080 Ti.
- **Readout:** reproduces Table 4's XA column on the true task; combined with T1's RN cells gives a full corrected 2×2 at V6's exact sizes.

### T3 — EXP2 clean retrain (covers Concern 2) — GPU, ~5–8 h

- **What:** re-run `EXP2-GatedFusion-HC-100k-3He4He` and `EXP2-ConcatFusion-HC-100k-3He4He` on box 176.
- **Configs:** **already repaired** — `configs/EXP2_{Gated,Concat}Fusion_HC_100k_3He4He.yaml` now carry explicit 5-file `hdf5_files` (3He,4He,d,p,t — no carbon) + `file_class_list: [1,0,1,1,1]` (verified today). No config work needed.
- **Data:** box-176 Garfield_HC (OLD-mapped, bypassed by `file_class_list`).
- **Cost:** ~2.5–4 GPU-h each (EXP3-scale, 100k train) → **~5–8 GPU-h**.
- **Readout:** clean-*trained* α-vs-rest numbers on the identical 125k/100k/25k split as EXP1-XA (same seed 42, same sorted files) → fully controlled three-way fusion comparison. Confirms or overturns the ≈95.7–95.8 estimate and the "three-way tie" conclusion.
- **Zero-cost alternative:** drop/annotate the arm — the clean 13C/14C runs (84.63/85.74/86.07) already carry the fusion claim; suggested wording for `main.tex:381` in exp2-contam §3.

### T4 — CPU/free items (no GPU decision needed)

- **T4a.** When `/Users/Reid Hu/MATE-data-archive/autodl-176/` finishes syncing (**empty as of today**), re-verify the Garfield labels + absent `label_map_version` locally and check file mtimes for conversion-date evidence. Minutes.
- **T4b.** EXP3 checkpoint prediction dump on box-176 CPU (`exp3_dump_predictions.py`, ~2–4 CPU-h, already spec'd in label-blast §2.6) — all 11 checkpoints confirmed present on box 176 today under `/root/autodl-tmp/z01-exec/runs/EXP3-*/`.
- **T4c.** If the IMP server becomes reachable: nothing here needs it — all CPU items are box-176 or local.

### T5 — Manuscript repair (0 GPU-h, captain's call)

Independent of any retrain: Table 4's task identity, the §5.5 EXP1↔V6 comparison, and the EXP2 arm all need wording fixes under the verdict (§1.4). This is required *regardless* of whether T1–T3 run.

---

## 4. Recommended sequencing

1. **Now (0 GPU):** manuscript annotations per §1.4 + exp2-contam §3 (captain edits); T4a when the archive lands.
2. **On GPU approval:** T1 first (~10–15 h) — it is the cheapest honest replacement for Table 4 and also completes the EXP3 campaign's pre-registered label-fix 2×2. Then T3 (~5–8 h) if the EXP2 arm stays in the paper. T2 only if 400k-scale numbers are specifically wanted.
3. **Total GPU ask:** ~15–23 h for T1+T3 (fits the 24 h budget); ~45–70 h if T2 is added.

## 5. Commands run (reproduction)

```bash
# Box-176 Garfield labels + attrs (read-only, instance B):
MATE_GPU_* python3 scripts/utils/gpu_exec.py "python -c 'import h5py,numpy as np; ...'"
#   -> t file labels [4], 4He file labels [1], NO label_map_version attr (HC+Raw)
# Box-176 inventory: 11 EXP3 best_model.pth under z01-exec/runs/; Garfield_{HC,Raw} 5+5 files;
#   NimpSim files under data/exp8/; NO EXP2/V6 artifacts.
# Mac: find runs -iname '*EXP2*' -> empty; find for V6_* run dirs -> none;
#   predictions.csv only under EXP3-*-seed42 + EXP8.
# GitHub: gh-axi api repos/Edfghdrtxxx/MATE-Event-Classifier-DL -> 37-file snapshot, no converter.
# Git: openspec/ first commit c666db3 2026-03-16; 'openspec_v6' first appears 2026-03-17 (379565a).
# V6 run dates: v6_training_curves.json run names + 01_exp_results_investigation.md:289-292.
# EXP2 configs already fixed: configs/EXP2_*_3He4He.yaml hdf5_files(5) + file_class_list [1,0,1,1,1].
# Label-fix configs exist: configs/EXP3_{XA,ResNet}_{HC,Raw}_100k_label_fix_seed42.yaml.
# Run times: grep 'Training complete in' runs/EXP3-*/*/run.log (166-345 min).
# MATE-data-archive/autodl-176/: EMPTY (copy in flight) as of 2026-09-25.
```

## 6. Open items for the captain

1. **GPU decision** (already gated on the supervisor talk): approve T1 (+T3, +T2?) per §4.
2. **Manuscript repair choice for Table 4:** annotate-as-triton vs replace-with-label-fix-2×2 (needs T1) vs drop the V6 section's task claims.
3. **EXP2 arm:** annotate with the ≈95.7–95.8 estimate vs retrain (T3) vs drop.
