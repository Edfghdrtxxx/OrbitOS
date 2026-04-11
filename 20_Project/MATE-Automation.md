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