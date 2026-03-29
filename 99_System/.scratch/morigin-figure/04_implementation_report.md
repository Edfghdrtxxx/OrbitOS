# Implementation Report -- SRC Momentum Distribution Figure

## What the Script Does

The script `generate_src_figure.py` creates a publication-quality three-panel schematic figure showing the connection between coordinate-space nucleon-nucleon correlations and momentum-space observables:

- **Panel (a):** NN interaction potential (AV18-like schematic) with a correlated SRC pair wavefunction overlaid, showing suppression at short range ("wound"). Two large arrows (teal + blue) point at the repulsive core region indicating nucleon pair indicators.
- **Panel (b):** Woods-Saxon nuclear mean-field potential with a nodeless 1p-shell single-particle wavefunction (red).
- **Panel (c):** Log-scale momentum distribution rho(k) decomposed into three components -- mean-field/IPM (orange dashed), tensor SRC for np pairs (blue dotted), central SRC for pp/nn pairs (teal dash-dot) -- plus the smoothed total (red solid). Includes k_F marker, SRC-dominant region bracket, and a legend.

Three cross-axes ConnectionPatch arrows map coordinate-space features to their momentum-space signatures. Attribution text credits Hen et al. (2017).

## Output Files

| File | Path | Size |
|------|------|------|
| PDF (vector) | `D:\obsidian\OrbitOS\50_Resources\Physics\ExtractionDistillation\SRC_momentum_distribution.pdf` | ~53 KB |
| SVG (vector) | `D:\obsidian\OrbitOS\50_Resources\Physics\ExtractionDistillation\SRC_momentum_distribution.svg` | ~119 KB |
| Script | `D:\obsidian\OrbitOS\50_Resources\Physics\ExtractionDistillation\generate_src_figure.py` | Python 3 |

## Physics Audit Corrections Applied

1. **"NN interaction" label** (not "n-n interaction") -- SRC are dominated by np pairs (np/pp ratio ~20:1), so the generic "NN" label is correct per the physics audit.
2. **Nodeless wavefunction** in panel (b) -- uses 1p-shell (n_r=0, l=1) state with zero radial nodes, producing a single smooth hump. No polynomial node factor.
3. **SRC functions clamped** above LOG_FLOOR = 1e-10 using `np.maximum()` for log-scale safety.
4. **Tensor SRC curve shows turnover and decay** -- peaks around ~1.8 fm^-1 and decays through 3-4 fm^-1, not flat or still rising at the edge.
5. **Cross-axes arrows land on actual curve coordinates** -- computed using `curve_value_at()` helper from the curve arrays.
6. **Both large arrows point at the repulsive core region** of the NN potential (at r ~ 1.0 and 1.4 fm, y ~ 50 MeV), consistent with the physics audit finding that both green and blue arrows target the short-range region.

## Integrity Audit Requirements Applied

1. **Attribution text** included at bottom of figure: "Adapted from concepts in Hen et al., Rev. Mod. Phys. 89, 045002 (2017)"
2. **Colorblind-friendly Tol Bright palette** used throughout (indigo, teal, red, orange, blue).
3. **Quantitative k_F marker** at 1.36 fm^-1 with dashed vertical line, differentiating from generic schematics.
4. **Log-scale decade labels** on rho(k) y-axis with proper LogLocator/LogFormatterSciNotation.
5. **Component decomposition** with distinct line styles (solid total, dashed mean-field, dotted tensor, dash-dot central) for maximum distinguishability.

## Deviations from Design Spec

1. **Output format SVG instead of PNG:** The user's task specification requested PDF + SVG output (not PDF + PNG as in the design spec). SVG was generated as requested.
2. **Output filename:** Uses `SRC_momentum_distribution` as specified in the task, not `morigin_src_schematic` from the design spec.
3. **No scipy dependency:** Gaussian smoothing uses `np.convolve` with a manually constructed kernel, as required by the spec (Section 6.6).

## Revision -- Review 04 Fixes (2026-03-29)

Three HIGH-severity visual issues from `review_04.md` were fixed:

### H3 -- Cross-axes arrow source endpoints at dead-amplitude regions
- **Arrow 1 (mean-field, orange):** Source moved from `r = 7.5 fm` (decayed tail) to `r = 3.5 fm` (near the wavefunction peak where amplitude is clearly visible).
- **Arrow 2 (SRC, teal):** Source moved from `r = 4.5 fm` (essentially zero) to `r = 2.5 fm` (within the visible oscillation region of the SRC wavefunction).
- Arrow 3 (SRC, blue) was already at `r = 3.5 fm` with reasonable amplitude -- unchanged.

### H5 -- Attribution text overlapping x-axis label
- Moved `fig.text()` y-coordinate from `-0.02` to `-0.06` in figure coordinates, providing clear separation from the "Momentum k [fm^-1]" x-axis label.

### H6 -- "SRC dominant" annotation crowding the legend
- Moved the bidirectional arrow from `y = 0.8` to `y = 0.15` (log-scale data coordinates).
- Moved the "SRC dominant" text from `y = 1.0` to `y = 0.2`.
- This places the annotation in the mid-range of the log-scale plot, well below the legend at upper right.

All other code (academic-draw integration, physics corrections, manual savefig, PDF+SVG output) unchanged. Script re-executed cleanly with no errors.

## Issues Encountered

- **None.** The script executed cleanly on first run with no errors or warnings. The academic-draw style verification passed. All matplotlib patches and annotations rendered correctly.
