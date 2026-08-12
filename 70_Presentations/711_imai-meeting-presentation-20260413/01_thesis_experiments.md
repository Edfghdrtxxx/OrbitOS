# Thesis Experiments & Methodology — Research Findings

_Extracted: 2026-04-12 | For: Imai-san presentation prep_

---

## Thesis Overview

**Full title (working):** Deep learning-based particle identification (PID) for Time Projection Chambers (TPC) using simulated data

**Framework name:** AFTPC — Automated Framework for Time Projection Chamber (also referred to as MATE-Automation internally)

**Codebase location:** `D:\Something\research\MATE-Automation-V4`

**Scope:** Simulation-only study. Real experimental data is not required at the Master's level. The thesis demonstrates PID capability using the MATE-Automation pipeline on Geant4-based (or equivalent) TPC simulation data.

**Primary method:** ResNet-based classification. Cross-Attention Fusion (CrossAtt+HC) architecture is the main improvement over the baseline.

**Secondary/future-work methods:** ViT (Vision Transformers), DANN & MCD (domain adaptation) — role in thesis still to be clarified (include if in scope, otherwise document as future work).

**Detector hardware:** MATE detector — uses GEM (Gas Electron Multiplier) as the gas amplification stage (not Micromegas). Readout: 3,792 triangular pads (48 rows × 80 pads), with a central beam-pipe hole in the last 2 rows.

**Status as of 2026-04-12:**
- ResNet PID model: trained, preliminary AUC metrics in hand
- EXP1 and EXP2: COMPLETED (2026-03-18)
- EXP3–EXP7: pending (blocked on substantiation outline; see note below)
- TRK (trajectory reconstruction) series: implementation shipped 2026-03-21, results organized 2026-04-11
- Thesis writing: not yet started (target defense: spring 2027)

---

## Strategy Pivot (from memory file)

**Original plan:** Rebuild all legacy training scripts and reproduce all existing results from scratch.

**Pivoted plan (since 2026-03-16):** Run 7 targeted supplementary experiments (EXP1–EXP7) that address specific reviewer-anticipatable gaps. Full reproduction was abandoned — the existing results are usable; what is missing is controlled comparisons and statistical rigor.

Experiment specs live at: `D:\Something\research\MATE-Automation-V4\openspec\changes\EXP*/propose.md`

---

## The 7 Experiments (EXP1–EXP7)

| ID   | Name                        | What it tests                                                                                              | Requires training? | Status (as of 2026-04-12) |
|------|-----------------------------|------------------------------------------------------------------------------------------------------------|-------------------|--------------------------|
| EXP1 | Matched Training Size       | Trains CrossAtt+HC @100k samples to isolate whether the architecture improvement is real, or just a 4× data scaling confound | Yes | DONE (2026-03-18) |
| EXP2 | Fusion Mechanism Comparison | CrossAtt vs GatedFusion vs Concat baseline on 3He/4He & 13C/14C — which fusion strategy is best?          | Yes | DONE (2026-03-18) |
| EXP3 | Seed Variance               | 3 seeds × 4 configs for error bars on the 2×2 ablation. Conditional: only run if ResNet+HC std < 0.5 pp   | Yes | Pending |
| EXP4 | Quantitative Attention      | Post-hoc Bragg peak attention fraction metric on the existing model — no retraining needed                  | No (post-hoc)     | Pending |
| EXP5 | Learning Curves             | Accuracy vs. training size {10k–400k} for CrossAtt+HC vs ResNet+Raw — data efficiency claim               | Yes | Pending |
| EXP6 | 13C/14C 2×2 Ablation        | Replicate factorial ablation on the hardest pair (Δ(A/Z) ≈ 8%) — the most physics-demanding PID case     | Yes | Pending |
| EXP7 | p/d/t Baseline              | ResNet+Raw baseline for the 93% 3-class result (p/d/t = proton/deuteron/triton) — low priority, deferrable | Yes | Pending (deferred) |

**Key notes:**
- EXP4 is the easiest to complete (no training, post-hoc analysis only)
- EXP7 is lowest priority and explicitly deferrable
- EXP1 & EXP2 are the most critical — they are the foundation of the architecture comparison claim
- EXP6 represents the hardest physics case (13C vs 14C, only 8% difference in A/Z ratio)
- EXP3 is conditional on EXP1/2 results showing low variance

---

## ML Models & Methods

### Primary Architecture: CrossAtt+HC (Cross-Attention + Hit Channel fusion)
- Built on a ResNet backbone
- Cross-attention mechanism fuses spatial hit-channel (HC) information with the raw TPC image
- Compared against: ResNet+Raw (baseline), GatedFusion, Concat baseline

### Baseline: ResNet+Raw
- Standard ResNet architecture
- Input: raw 2D TPC projection images (from pad-plane readout)
- Already trained; preliminary AUC metrics available

### Particle species tested:
- 3He / 4He pair (lighter nuclei)
- 13C / 14C pair (heavier, hardest PID case — Δ(A/Z) ≈ 8%)
- p/d/t (proton/deuteron/triton) — 3-class result at ~93% accuracy

### Secondary (scope TBD):
- **ViT (Vision Transformer):** via `timm` library — role in thesis is being clarified
- **DANN / MCD (Domain Adaptation):** documented for future work if not included in thesis scope

---

## TRK Experiment Series (Trajectory Reconstruction — separate from EXP1-7)

A parallel series focused on track reconstruction rather than PID classification:

**Two steps:**
1. **Track Number Classification** — ML-based (1–4 tracks) from isotropic alpha source; Standard ResNet vs. CrossAtt Fusion ResNet
2. **Angle Reconstruction** — requires correct track count; events classified into 4 tiers by angular deviation

**Status:** Implementation shipped 2026-03-21 (architecture rewrite, pipeline refactor, ~6200 lines across 44 files). Results organized and presentation drafted 2026-04-11 (7 review cycles, LaTeX tables, TRK_T6 regen, TeX compile, 14 updated plot scripts + 4 new).

**Deliverables produced:** Training visualizations (loss/residual curves) + 4-tier classification statistics

---

## Experimental Setup

- **Data:** TPC simulation data (Geant4-based or equivalent) — already available at IMP
- **Detector geometry:** Triangular pad readout, 48×80 grid, 3,792 total pads, GEM amplification
- **Compute:** IMP lab resources; Python + PyTorch (or TensorFlow)
- **Training sizes explored:** 10k–400k samples (for EXP5 learning curves); EXP1 uses 100k matched
- **Evaluation metrics:** AUC, classification accuracy, ROC curves, confusion matrix, attention maps

---

## Upstream Blocker

The "substantiation outline" — a 45-minute task to write the step-by-step logic (baseline → modification 1 → modification 2 → ...) — has been deferred for 37+ days as of 2026-04-12. This is the upstream gate for EXP3–7 execution and for the paper improvement / knowledge extraction tasks.

---

## Key File Paths (external to vault)

- Codebase: `D:\Something\research\MATE-Automation-V4\`
- EXP specs: `D:\Something\research\MATE-Automation-V4\openspec\changes\EXP*/propose.md`
- TRK spec: `D:\Something\research\MATE-Automation-V4\TRK_experiment_planning_notes.md`
- TRK implementation: `D:\Something\research\MATE-Automation-V4\openspec\changes\TRK-trajectory-reconstruction\task.md`
- Physics Informed supplemental: `D:\Something\research\MATE-Automation-V4\10_Papers-Thesis\Physics_Informed\Supplemental_information`

---

## Relevant Vault Files

- `D:/obsidian/OrbitOS/20_Project/MaterThesisPapers/Masters_Thesis.md` — main project file
- `D:/obsidian/OrbitOS/20_Project/MATE-Automation.md` — codebase project note (links out to external path)
- `D:/obsidian/OrbitOS/00_Inbox/TRK-Experiment-Planning.md` — TRK series summary
- `D:/obsidian/OrbitOS/10_Daily/2026-03-16.md` — pivot decision + EXP1-7 specs created
- `D:/obsidian/OrbitOS/10_Daily/2026-03-18.md` — EXP1 & EXP2 completed
- `D:/obsidian/OrbitOS/10_Daily/2026-04-11.md` — TRK results organized & presentation built
