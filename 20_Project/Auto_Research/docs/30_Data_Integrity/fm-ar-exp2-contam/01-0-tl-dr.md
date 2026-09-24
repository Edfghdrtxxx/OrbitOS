<!-- Verbatim source section; overview: [[../fm-ar-exp2-contam]] -->
<!-- SOURCE-BODY-START -->
## 0. TL;DR

- **Two EXP2 runs are contaminated:** `EXP2-GatedFusion-HC-100k-3He4He` and `EXP2-ConcatFusion-HC-100k-3He4He` (the "³He/⁴He" arm). Their configs glob all `*.h5` in `Garfield_HC/`, which by run time contained **7 files**: the 5 light-species files plus the 13C and 14C files written into the same directory ~4 h earlier. Train = 140k (20k α + 120k non-α), val = 35k (5k α + 30k non-α, of which **10k are carbon**). The three 13C/14C runs are clean (explicit `hdf5_files`).
- **Carbon is trivially separable** (Z=6 vs Z≤2; the `total_mass` physics feature alone separates it). Both a CM-arithmetic bound (carbon val accuracy ≥ 89.3%) and physics say carbon accuracy ≈ 100%. The reported 96.94%/96.98% therefore **inflates the light-species accuracy by ~1.2 pp**: on a clean 5-species val the same checkpoints score ≈ **95.7–95.8% — statistically indistinguishable from EXP1-XA's 95.80%**. The manuscript's "ordering was the same (96.98, 96.94, 95.80)" is a val-composition artifact.
- **EXP2 numbers appear in exactly three places:** `main.tex:381` (manuscript), `openspec/changes/EXP2-fusion-mechanism-comparison/implementation_log.md` (multiple lines), `openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md` (multiple lines). `paper_anchor.md`, the EXP3 closing doc, and all other `20_doc/` files quote **no** EXP2 numbers.
- **Cheapest repair:** a zero-compute `predictions.csv` × `data_split.json` join on the Windows box (~5 min) gives exact clean-subset metrics. If Windows is unreachable: copy the two checkpoints to box 176 and re-eval on the 5 `sim_inv` files (~1–3 CPU-h, 0 GPU-h). Retraining on the clean 5-file set (~5–8 GPU-h on the 3080 Ti for both runs) is only needed if the paper wants clean-*trained* numbers — it fits the 24 GPU-h budget but is not required for the manuscript claim, which the clean 13C/14C arm already carries.

---

<!-- SOURCE-BODY-END -->
