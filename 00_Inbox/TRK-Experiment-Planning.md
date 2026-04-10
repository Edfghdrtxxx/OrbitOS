---
created: 2026-03-20
status: captured
source: start-my-day
---
TRK experiment series — track number classification + angle reconstruction from raw simulation data via [[MATE-Automation]].

**Source file:** `D:\Something\research\MATE-Automation-V4\TRK_experiment_planning_notes.md`

**Two steps:**
1. Track Number Classification — ML-based (1-4 tracks) from isotropic alpha source, comparing Standard ResNet vs Cross-Attention Fusion ResNet
2. Angle Reconstruction — correct track number is prerequisite; events classified into 4 tiers by angular deviation

**Prerequisites:**
- Dataset not yet generated (placeholders)
- Verify data conversion script maps cloud points to pixels using triangular (not rectangular) pad geometry
- Validate against `MATE_4000ch_trianglePad_geo.txt`

**Deliverables:** Training visualizations (loss/residual curves) + 4-tier classification statistics
