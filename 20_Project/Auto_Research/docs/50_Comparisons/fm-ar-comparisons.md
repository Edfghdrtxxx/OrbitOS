> Origin: `fm-ar-comparisons` scout report; recorded 2026-09-24.

# EXP3 campaign — traditional-methods comparison inventory

**Task:** for the paper's three comparisons vs traditional methods (isotope classification, polar-angle regression, kinetic-energy regression): what evidence exists, what is missing/unfair, and the single highest-value next CPU comparison.
**Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (all `runs/` paths below resolve there); local worktree used only for re-analysis of existing CSVs. No box-176/AutoDL/IMP contact. No manuscript files touched.
**Date:** 2026-09-24. All numbers single-seed (42) unless noted.

---

## 1. Inventory table

| Task | Our result | Traditional result | Metric alignment | Gap / fairness verdict |
|---|---|---|---|---|
| **Kinetic-energy regression** (TRK5/TRK6, 180k test events, `data_split.json` sha1 `40fe9abd…`) | TRK6 XA: RMSE **0.0219**, MAE 0.0103 MeV; TRK5 ResNet: RMSE **0.0264**, MAE 0.0147 (`runs/TRK{5,6}-*/seed42/metrics.json`) | RANSAC 0.4827, Hough 0.5234, HC 0.7375, Hough-opt 0.4935, HC-opt 0.7197 RMSE (`runs/baseline-*/seed42/metrics.json`); LM-refined RANSAC exists as descriptive-only artifact | **Aligned.** All 7 methods pinned to TRK5's `data_split.json`, same 180k events, same event-mean estimator, same LISE++/Hubert 4He range table (`data/srim/4he_range_lise_hubert_05bar.csv`, sha `bf7f52ad…`). 21/21 paired Wilcoxon significant (Bonferroni 0.05/21), per `20_doc/audits/TRK_reeval_2026-07-12_postaudit_regeneration.md` | **Complete and fair** — the strongest of the three. CNN ≈18–22× lower RMSE. Only caveat: `-opt` hyperparameters were swept under the deprecated calibration (documented limitation, audit doc §Caveats) |
| **Polar-angle regression** (TRK3-v2/TRK4-v2) | TRK4-v2 XA: MAE **0.8324°**; TRK3-v2 ResNet: MAE **0.9922°**, RMSE 1.4871° (per `99_System/.scratch/trk-reporting/03_summary.md` §4, sourced from `runs/TRK{3,4}-v2-*/seed42/metrics.json` — **run dirs absent locally, on AutoDL only**) | **No in-house traditional baseline.** Only literature overlay: MATEROOT Fig. 8 RANSAC σ_θ vs range, digitized in `scripts/plotting/plot_TRK_angular_resolution.py:73-78` (σ=3.6°@30mm → 0.50°@320mm; laser point 0.42°@300mm). TRK3 v1 1-track σ: 1.764°@~30mm, 0.875°@~83mm, 0.513°@~168mm → CNN ~1.3–2× better (`openspec/changes/TRK-group-meeting-20260326/02_materoot_figure_analysis.md` §Fig.8) | **Misaligned.** (a) Literature curve, not same-sample; (b) energy→range mapping approximate ±15–20% horizontal uncertainty; (c) TRK3 σ has −0.43…−0.63° bias vs MATEROOT's possibly-zero-mean σ; (d) per-slot vs per-event tier mismatch documented in same doc | **Weakest leg.** No baseline ever run on our images for angle. `src/baselines/` has no angle mode — all baseline methods output track fits consumed only by the energy path |
| **Isotope classification** (EXP3, Garfield 4He-vs-rest binary) | RN-Raw 0.8925 acc (α-recall 0.636); XA-Raw 0.8712 (α-recall 0.548); RN-HC 0.9570; XA-HC 0.9563 (`runs/EXP3-*/metrics.json`; triton-task label bug per closing doc §1) | **None on this task.** Nearest: `Z01-Logistic-Moments` (LogReg on the same 4 physics features, L2/C=1.0) — but on the Z01 publisher dataset, and **its publisher-test eval never ran** (no `metrics.json` in `runs/Z01-Logistic-Moments/z01-overnight-20260919-01/`; `evaluate_z01.py` exists but was not invoked). EXP7 p/d/t baseline: proposed, never run (`openspec/changes/EXP7-pdt-baseline/propose.md` — itself rated low-priority) | **Missing.** No traditional classifier has ever touched the EXP3 Garfield task | **Largest gap.** The paper's headline task has zero traditional comparison. A moments/physics-feature LogReg is the canonical "conventional cuts" baseline and is *already implemented* as diagnostic D2 in `scripts/analysis/exp3_h1_diagnostics.py` (LogReg on the 4 raw physics features) — but D1–D4 are the lead's running jobs; no `h1_diagnostics.json` exists locally yet |

## 2. What I ran locally (new analysis, ~5 s CPU)

**Coverage-aware common-roster check on the energy comparison** — verifies the ~20× gap is not an artifact of baseline missing predictions. Method: event-mean of finite valid heads per method (the AC5 estimator), inner-join on events present in all 7 methods.

```
common events: 179964 of 180000
method      coverage  RMSE_all  RMSE_common  MAE_common
cnn_resnet   1.0000    0.0264      0.0260      0.0146
cnn_xa       1.0000    0.0219      0.0214      0.0103
ransac       0.9998    0.4827      0.4827      0.3338
hough        0.9998    0.5234      0.5234      0.3574
hc           0.9998    0.7375      0.7375      0.5652
hough_opt    0.9998    0.4935      0.4935      0.3362
hc_opt       0.9998    0.7197      0.7197      0.5474
```

Coverage is ≥99.98% for every method (36 missing events, truth-mean 1.41 MeV vs covered 2.15 — mildly low-energy, immaterial). **The gap is real, not a coverage artifact.** Command: `pandas.read_csv` each `predictions_regression.csv`, `dropna(pred).groupby(event_index).mean()`, inner join, RMSE on residuals. Reproducible anywhere the CSVs exist.

**Per-bin / per-track-count / bias breakdown** (common roster, representative methods):

| RMSE (MeV) | cnn_resnet | cnn_xa | ransac | hough_opt | hc_opt |
|---|---|---|---|---|---|
| E∈[0.3,0.8) n=24495 | 0.0126 | 0.0067 | 0.2492 | 0.2322 | 0.2314 |
| E∈[0.8,1.5) n=34049 | 0.0118 | 0.0038 | 0.2962 | 0.2860 | 0.3799 |
| E∈[1.5,2.5) n=48368 | 0.0231 | 0.0140 | 0.3276 | 0.3113 | 0.5029 |
| E∈[2.5,4.0) n=73052 | 0.0345 | 0.0312 | **0.6642** | **0.6925** | **1.0117** |
| K=1 n=44964 | 0.0356 | 0.0298 | 0.4302 | 0.4365 | 0.4244 |
| K=4 n=45000 | 0.0174 | 0.0138 | 0.4703 | 0.4885 | 0.8723 |
| **bias (mean err)** | −0.0022 | −0.0008 | **−0.1574** | **−0.2109** | **−0.5416** |

Two paper-usable mechanisms fall out:
1. **Classical methods systematically under-predict energy** (−0.16…−0.54 MeV bias, growing with E). Consistent with the range-clipping block already in `metrics.json`: K=1 clipped-track recovery ratios are **8.3× (RANSAC), 7.4× (Hough-opt), 9.0× (HC-opt) vs 2.1× (TRK5), 2.8× (TRK6)** — tracks exiting the active volume lose range information, and the length→energy lookup has no recovery path; the CNNs degrade far less.
2. **Even on unclipped K=1 events the CNNs win ~4–5×**: RANSAC unclipped RMSE 0.0978 vs TRK6 0.0184, TRK5 0.0267 (`metrics.json → range_clipping`). So the gap is not *only* clipping.

**Discrepancy found (flag for lead):** `runs/baseline-ransac_atransac_full-opt-v3/seed42/metrics.json` reports `rmse_mev=0.4785` which is the **slot-level** RMSE; the event-mean (AC5 contract) is **0.4073**. The v3 artifacts appear scored under the retired slot-broadcast policy — same class of bug the 2026-07-12 audit fixed for the canonical five. If any v3 number is quoted, recompute event-mean first.

## 3. Ranked next comparisons (CPU-feasible)

| # | Comparison | Exact recipe | Expected cost | Why this rank |
|---|---|---|---|---|
| **1** | **Physics-features LogReg baseline on the EXP3 classification task** (= D2, but framed as the traditional baseline) | `scripts/analysis/exp3_h1_diagnostics.py` already implements it: load `physics_features` (Iyy, Izz, Iyz, total_mass) + labels from the Garfield H5 for the EXP3 test split (`runs/EXP3-XA-Raw-100k-seed42/20260922_185618/data_split.json`), `LogisticRegression` train-on-train/test-on-test, report acc + α-recall vs RN-Raw 0.8925/0.636. Torch-free variant: ~30 lines of h5py+sklearn, no model needed | ~minutes CPU once the ~25GB Garfield H5 is reachable. **Cannot run locally**: no Garfield H5 on this Mac (`data/` has only `srim/` + a 23MB truth sidecar). Runs on box 176 in no-GPU mode — but that is the lead's D2 job already in flight | Highest paper value (fills the empty classification cell) but **blocked on data locality and already owned by the lead's D1–D4 run**. Do not duplicate — harvest D2's number when `h1_diagnostics.json` lands and cite it as the traditional baseline |
| **2** | **In-house RANSAC/Hough angle baseline on TRK3-v2 test events** | Extend `src/baselines/` with an angle output: existing track fits already produce a direction vector (RANSAC line fit); emit `pred_angle_deg` per slot into the `predictions_regression.csv` contract, pin to `runs/TRK3-v2-ResNet-AngleReg/seed42/data_split.json`, score σ_θ/MAE vs TRK3-v2 0.9922° and TRK4-v2 0.8324°. Replaces the literature-digitized MATEROOT overlay with a same-sample number | Code: ~1–2 h (fit→angle is a `atan2` on the existing line direction + CSV writer + evaluator branch). Run: CPU-feasible on IMP server (torch-free by design) but needs `trk_h5` images — not local | Kills the weakest leg's "literature-only" caveat. Moderate code cost; no training. The MATEROOT overlay stays as context, not as the comparison |
| **3** | **Z01 publisher-test eval of the logistic-moments arm** | `python src/evaluation/evaluate_z01.py --run-dir runs/Z01-Logistic-Moments/z01-overnight-20260919-01` (+ ResNet arm) on the box where `pr_test_simulated.npy` lives (`/root/autodl-tmp/autoresearch_inputs/z01`) | Minutes CPU; but Z01 test npy (315MB) is remote-only | Cheap housekeeping: the trained `model.npz` exists and was never scored. Gives a logistic-vs-CNN classification point on the publisher dataset — secondary to EXP3 but free |

**Not recommended:** re-running any energy baseline (comparison is complete and statistically airtight); EXP7 p/d/t (proposal itself rates it droppable); anything needing torch locally (no torch, no checkpoints, no image H5 on this Mac — verified: `import torch` fails, `data/` has no Garfield/TRK images).

## 4. Bottom line for the paper

- **Energy regression:** done and fair — CNN 0.022–0.026 vs best classical 0.48 MeV RMSE, same split, same estimator, 21/21 Wilcoxon significant, plus a mechanism story (clipping recovery 2–3× vs 7–9×; classical bias −0.16…−0.54 MeV). Quote the post-audit numbers from `20_doc/audits/TRK_reeval_2026-07-12_postaudit_regeneration.md`.
- **Angle regression:** CNN-vs-CNN only (0.83° vs 0.99°); the "traditional" anchor is a digitized literature curve with ±15–20% x-placement uncertainty. An in-house RANSAC angle baseline (rank 2) is the fix.
- **Isotope classification:** no traditional baseline exists. The cheapest honest fill is the physics-features LogReg — already coded as D2; harvest it from the lead's diagnostic run rather than re-running.

## 5. Open questions for the lead

1. Did `h1_diagnostics.json` land on box 176? D2's physics-only LogReg accuracy is exactly the missing classification baseline — request it be reported with α-recall, not just acc.
2. Are `runs/TRK3-v2-*/seed42/` and `runs/TRK4-v2-*/seed42/` (metrics + predictions CSVs) still on the AutoDL disk? They are absent locally; rank-2 needs TRK3-v2's `data_split.json` and any future figure work needs the CSVs (already flagged in `99_System/memory/…/project_paper_pass_20260714.md`).
3. Should the v3 baseline artifacts (`baseline-*-opt-v3`, `ransac_atransac_full-*`) be re-scored under the event-mean contract, or formally excluded from the paper's method family? Their metrics.json currently mixes scoring policies.
