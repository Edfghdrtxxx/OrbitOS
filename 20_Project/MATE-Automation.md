---
type: project
status: active
area: "[[Physics Research]]"
path: D:\Something\research\MATE-Automation-V4
---
The codebase lives outside this vault. The `path` above is **relative to the vault root** (`D:\Something\research\MATE-Automation-V4`). ^3a27d1

To learn about this project quickly, read `GEMINI.md` in the project root directory.

## Detector Readout Pad Geometry (Reference)

> [!info] Amplification stage
> MATE uses **GEM** as its gas amplification stage (not Micromegas). Don't confuse the two when reading detector code.

Specification intended to guide resolution/conversion logic for `scripts/utils/convert_root_to_h5_data.py`.

### 1. General Grid Structure
The detector readout plane is organized into a grid of triangular pads:
- **Z orientation (rows):** 48 rows (strips) along the Z axis.
- **Y orientation (pads per row):** each full row contains 80 pads along the Y axis.
- **Total pads:** exactly 3,792 (numbered 0 to 3791).

### 2. Pad Arrangement and Shape
- **Pad geometry:** triangular. Within each row, pads are arranged in an interlocking pattern where triangles alternate between pointing "up" (increasing Z) and "down" (decreasing Z).
- **Row dimensions:** each row ≈ 0.606 units tall in Z, with a ≈ 0.01 unit gap between adjacent rows.
- **Y pitch:** Y-coordinate increment between adjacent pads of the same orientation ≈ 0.723 units (≈ 0.362 units between any two adjacent pads regardless of orientation).

### 3. Geometric Anomalies (Central Hole)
The detector is not a perfect rectangle — it contains a central hole at one end of the Z range:
- **Continuous rows (0–45):** the first 46 rows (indices 0 to 3679) are continuous and contain the full 80 pads each, covering Y ≈ −14.65 to +14.65.
- **Split rows (46–47):** the last two rows (indices 3680 to 3791) are split into two segments. Each contains only 56 pads (28 left + 28 right).
- **Hole dimensions:** the gap in the last two rows spans Y ≈ −4.88 to +4.15. This likely accommodates a beam pipe or exit window at the far end of the detector (Z ≈ 28.3 to 29.57).

## Progress

### 2026-04-17 — Energy regression ($E_3$) spec-mode, day 3
- Received new generated data from Lu Li.
- Clarified the physics picture and role of $E_3$ energy regression in the analysis chain (~60 min discussion).
- Used `/orchestrate` spec-mode to author `openspec/changes/TRK-energy-regression/spec.md` + task files `01_server_regeneration.md`, `02_data_conversion.md`, `03_post_regen_qa.md`.
- Preprocessing scripts drafted (uncommitted): `scripts/preprocessing/convert_trk_server_v2.py`, `merge_trk_h5.py`, `npz_to_h5.py`.
- Modifications to `src/data/dataset.py`, `src/run_experiment.py`, `src/evaluation/evaluate_trk_classification.py`.
- Absorbed classical-algorithm baselines (RANSAC / Hough / Cluster) into the spec for ML comparison.
- Local `/orchestrate` skill tuned with an indexing/pointers paradigm to avoid single-file context bloat in task.md.
- Added reference asset: [[50_Resources/Physics/literature/ResNet_vs_ViT|ResNet_vs_ViT.pptx]].
- **Status:** Implementation carries over to 2026-04-18 as that day's #1. Vertex-reconstruction direction dropped per supervisor re-direction.