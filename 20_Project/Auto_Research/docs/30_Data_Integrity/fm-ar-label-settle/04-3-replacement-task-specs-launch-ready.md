<!-- Verbatim source section; overview: [[../fm-ar-label-settle]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
