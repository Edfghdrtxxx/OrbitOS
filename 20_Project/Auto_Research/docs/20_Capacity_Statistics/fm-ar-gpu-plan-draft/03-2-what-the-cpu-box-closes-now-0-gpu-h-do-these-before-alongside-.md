<!-- Verbatim source section; overview: [[../fm-ar-gpu-plan-draft]] -->
<!-- SOURCE-BODY-START -->
## 2. What the CPU box closes NOW (0 GPU-h) — do these before/alongside any GPU spend

All run on box 176 in no-GPU mode (2GB cgroup, `--max-events 2000 --batch-size 64`, ~10 min/condition — proven by the battery already run there). Scripts exist in-repo.

| # | Item | Exact run | Closes | Cost |
|---|---|---|---|---|
| C0 | **Per-event prediction dumps → paired stats** | `scripts/analysis/exp3_dump_predictions.py` per checkpoint (11 ckpts incl. label-fix); McNemar + paired bootstrap already in `src/evaluation/evaluate.py` (~L257–321). Needs re-sync of the two 0-byte `data_split.json` (XA-Raw-s0, XA-Raw-lf) | True McNemar/paired-bootstrap CIs for all same-seed pairs (val_indices byte-identical across arms — verified); enables D4 error-overlap and per-isotope breakdowns for free | ~2–4 CPU-h on-box |
| C1 | **D5: permuted_cls / mean_cls + predicted-class histogram** | Extend `exp3_counterfactual_battery.py` with the two conditions; run on all 6 XA ckpts | Whether zero_cls collapse (0.19 ≈ minority prevalence) is an **OOD-bias artifact vs genuine physics dependence** — gates every "load-bearing"/"task-invariant" sentence (audit flag F1) | ~1–2 CPU-h |
| C2 | **D1–D4 probes** (lead already running) | `scripts/analysis/exp3_h1_diagnostics.py` | H1a capacity vs H1b crowding localization | in flight |
| C3 | **Traditional classification baseline** = D2's physics-features LogReg, reported with α-recall vs RN-Raw 0.8925/0.636 | same script output | The paper's missing traditional-baseline leg for isotope classification (comparisons report rank 1) | free with C2 |
| C4 | **Corrected label-fix battery sync + battery on the converged 4He ckpt** | re-run fixed battery script on `EXP3-XA-Raw-100k-label-fix-seed42` best_model.pth; sync JSON | Replaces the buggy local JSON; tests whether zero_q −12.1pp and zero_cls collapse hold on the *converged* 4He model (C9 cross-task check) | ~1 CPU-h |
| C5 | **EXP4 attention on XA-Raw-s0 and XA-Raw-lf** | `scripts/analysis/exp4_attention_metrics.py` | C10: Raw Bragg-focus is currently single-seed (s42 only) | ~1 CPU-h |
| C6 | **p–t easiness confound check** | Compare deposited-energy/Bragg distributions of the p file vs d/t/³He/⁴He in `Garfield_{Raw,HC}` H5s (h5py read-only) | The one outlier in the Z²A difficulty ordering (difficulty report §5.2) | ~30 min |
| C7 | **RANSAC/Hough angle baseline** | fm-ar-angle-baseline worker already building it (fit→`atan2`→`predictions_regression.csv` contract, pinned to TRK3-v2 split) | The "literature-only" caveat on the angle-regression leg | in flight (IMP/CPU) |
| C8 | **Z01 publisher-test eval** | `python src/evaluation/evaluate_z01.py --run-dir runs/Z01-Logistic-Moments/z01-overnight-20260919-01` on the box holding `pr_test_simulated.npy` | Housekeeping: trained model never scored | minutes |
| C9 | **Artifact re-syncs** | `data_split.json` ×2 (0-byte), corrected lf battery JSON, label-fix `run.log` | Backs currently-unbacked numbers (audit F4: lf val trajectory now backed by synced history.json ✓) | minutes |

**Net: every open gap except multi-seed 4He training, the triton grid hole, and mechanism-pack cures is CPU-closable.** GPU money buys exactly one thing: trained 4He (and one triton) checkpoints.

<!-- SOURCE-BODY-END -->
