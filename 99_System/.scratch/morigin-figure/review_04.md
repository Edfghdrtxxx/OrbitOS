needs-revision

## Findings

### HIGH severity

#### H1. "NN interaction" label text in code vs design spec inconsistency (spec label vs audit label)
The **physics audit** (01_physics_audit.md, Correction #1) mandated renaming "n-n interaction" to "NN interaction." The **code** correctly implements `"NN interaction"` (line 297). However, the **design spec** (03_design_spec.md) was never updated -- it still reads `"n-n interaction"` throughout (Section 7.2 table at line 394, code block at line 403, Section 12 coordinate reference at line 747, and Section 3 color table at lines 89-90). This means the spec and the code are out of sync. The code is correct per the physics audit, but any future implementer following the spec would revert to the wrong label. **The design spec should be updated to say "NN interaction" everywhere.**

#### H2. The SRC wavefunction in panel (a) has too many visible oscillation peaks -- appears to have nodes
Looking at the generated figure, the teal SRC wavefunction in panel (a) shows approximately 2-3 full oscillation cycles with clear zero crossings within the plotted range (0-5 fm). The function `psi_SRC(r)` uses `sin(2.5*r - 0.3) * exp(-0.3*r)` which produces multiple oscillation peaks. While a relative wavefunction can oscillate, the visual effect creates an impression that is busier than the original MORIGIN figure, where the blue wavefunction shows approximately one major oscillation with a clear wound at short range. The frequency parameter `2.5` is arguably too high, producing oscillations that are too rapid for a schematic. This is a cosmetic/pedagogical concern more than a physics error, but it reduces clarity compared to the original.

#### H3. Cross-axes arrows: source endpoints are at the far-right edge/outside visible curves
The ConnectionPatch arrow sources are placed at:
- Arrow 1 (mean-field): source at `r = 7.5 fm` in `ax_nuc` (x-range is [0, 8.0]). The mean-field wavefunction has decayed to essentially its baseline offset by r = 7.5 fm. The arrow originates from the flat tail, not from the visually prominent part of the wavefunction. In the original MORIGIN figure, the orange connecting line originates from within the body of the nuclear potential panel, not from the extreme right edge.
- Arrow 2 (SRC/teal): source at `r = 4.5 fm` in `ax_nn` (x-range is [0, 5.0]). The SRC wavefunction has essentially decayed to zero by this point. The arrow originates from the far-right edge of the panel, near zero amplitude.
- Arrow 3 (SRC/blue): source at `r = 3.5 fm` in `ax_nn`, which is reasonable.

Arrows 1 and 2 originate from visually dead regions of their respective curves, undermining the pedagogical purpose of connecting a visible feature in coordinate space to its momentum-space counterpart. **The source x-coordinates should be moved inward** -- e.g., Arrow 1 to ~5.0 fm (where the wavefunction is still visibly nonzero), and Arrow 2 to ~3.0-3.5 fm (where the SRC wavefunction has visible amplitude).

#### H4. Panel (b) mean-field wavefunction: only one wavefunction shown, vs. original's two
The original MORIGIN figure shows **two** bound-state wavefunctions (red curves) at different energy levels inside the Woods-Saxon well, plus horizontal lines indicating bound-state energy levels. The implementation shows only **one** wavefunction with no energy-level lines. The physics audit discussed node counting for two states, and the design spec chose a single nodeless 1p-shell state as a simplification. This is an acceptable design decision that was made deliberately in the spec (Section 6.5), but it is a notable visual departure from the original that reduces the "nuclear shell model" content of panel (b). **No code change required** -- this was a deliberate spec decision -- but the reviewer notes it as a differentiation point.

#### H5. Attribution text is partially clipped/overlapping with x-axis label
In the generated figure, the attribution text at `fig.text(0.5, -0.02, ...)` is placed at y = -0.02 in figure coordinates, which places it below the figure boundary. While `bbox_inches='tight'` will include it, the text visually overlaps or sits extremely close to the x-axis label "Momentum k [fm^-1]". In the rendered PDF, the attribution text and the x-axis label are on top of each other. **Move attribution text further down** (e.g., y = -0.06) or place it at a different location to avoid collision.

#### H6. "SRC dominant" annotation and bidirectional arrow overlap with the legend
In the generated figure, the "SRC dominant" text annotation is placed at `(3.0, 1.0)` in data coordinates, and the bidirectional arrow spans from `(2.0, 0.8)` to `(4.0, 0.8)`. The legend is placed at `loc='upper right'`. Visually, the "SRC dominant" text, the double-headed arrow, and the legend box all crowd into the upper-right region of panel (c). The SRC annotation partially overlaps or is very close to the legend entries. **Either move the "SRC dominant" annotation lower or reposition the legend** (e.g., to 'center right' or use a custom bbox_to_anchor).

### MEDIUM severity

#### M1. Large emphasis arrow in panel (c) is visually confusing
The large blue `FancyArrowPatch` from `(3.5, 0.5)` to `(3.2, 0.015)` in panel (c) is very prominent (linewidth=4, alpha=0.7) and points downward into the SRC tail region. While it matches the original's large blue arrow, in the generated figure it visually dominates and partially obscures the actual data curves beneath it. The arrow head at y=0.015 lands in the middle of the curve region. Combined with the three ConnectionPatch arrows also terminating nearby, the right side of panel (c) is visually cluttered. **Consider reducing alpha to 0.5 or linewidth to 3.**

#### M2. Both large arrows in panel (a) point at y=50 MeV -- not quite at the repulsive core peak
The two large FancyArrowPatch arrows in panel (a) terminate at `posB=(1.0, 50)` and `posB=(1.4, 50)`. The repulsive core of V_NN peaks at r ~ 0.3 fm, not at r = 1.0-1.4 fm. At r = 1.0 fm, V_NN(1.0) is approximately at the zero crossing or the beginning of the attractive well. The arrows are pointing at the region **between** the repulsive core and the attractive well, not squarely at the repulsive core. To more clearly indicate the repulsive core, the arrows should terminate at r ~ 0.5-0.8 fm. However, the design spec explicitly specifies these coordinates (Section 8.2), so this is a spec issue, not a code deviation.

#### M3. `rho_meanfield` function: peak is at k=0.8 fm^-1, which may be too low
The mean-field momentum distribution `rho_meanfield(k)` peaks at k = 0.8 fm^-1 with sigma = 0.45. For a Fermi gas, the momentum distribution should have a peak closer to k_F (1.36 fm^-1) or at least show significant weight up to k_F. The current parameterization makes the mean-field peak appear well below k_F, with the Gaussian already significantly declining at k_F. This is acceptable for a schematic but visually underestimates the mean-field occupation. The design spec explicitly specifies this form (Section 6.6 line 313), so this is a spec-level concern.

#### M4. `rho_src_tensor` does not show a clean ~1/k^4 asymptotic falloff
The physics audit (Correction #3 / Finding 3) notes that the SRC tail should show a monotonic ~1/k^4 falloff at high momenta (related to Tan's contact). The implemented function uses `(k/k0)^2 * exp(-decay*(k-k0))`, which produces an exponential decay, not a power-law decay. For a schematic this is acceptable, but the exponential form falls off faster than 1/k^4 at high k. The total rho(k) curve at high k is dominated by this exponential form rather than a power-law tail. **This is a physics fidelity concern for the schematic.**

#### M5. No tick marks at k=0 on the x-axis of panel (c)
The x-axis ticks are set to `[1, 2, 3, 4]` with no tick at 0. The axis starts at 0 but has no tick there. While the design spec specifies exactly these ticks (Section 2.2), having the axis start at 0 with no tick label is slightly unusual. Minor cosmetic issue.

### LOW severity

#### L1. Hardcoded path to academic-draw skill
Line 22: `skill_scripts = Path(r"D:\Something\research\MATE-Automation-V4\.claude\skills\academic-draw\scripts")`. This is an absolute path to a different repository on the user's machine. If the script is shared or the repo moves, this will break. Consider using a relative path or environment variable. However, this is standard practice for the user's local workflow and matches the design spec exactly.

#### L2. Output format deviation from design spec: SVG instead of PNG
The design spec (Section 1) specifies PDF + PNG output. The implementation produces PDF + SVG. The implementation report (Section "Deviations from Design Spec" #1) explicitly documents this as a user-requested change. **Acceptable deviation.**

#### L3. Output filename deviation from design spec
The design spec specifies `morigin_src_schematic` as the output filename. The implementation uses `SRC_momentum_distribution`. The implementation report documents this as user-requested. **Acceptable deviation.**

#### L4. Minor: `curve_value_at` uses nearest-neighbor, not interpolation
Line 134: The helper uses `np.argmin(np.abs(x_array - x_target))` which is nearest-neighbor lookup, not true interpolation. With 500 points over a 5 fm range, the spacing is 0.01 fm, so the maximum error is ~0.005 fm -- negligible. No issue.

### PASSED checks (no issues found)

- **academic-draw integration:** `apply_academic_style()`, `setup_academic_fonts()`, `verify_academic_style(hard_fail=True)` are all called correctly. `save_academic_figure` is correctly bypassed with manual `fig.savefig()`.
- **No `tight_layout()` call:** Confirmed absent. Manual `fig.savefig(bbox_inches='tight')` is used instead.
- **Log-scale safety:** All SRC component functions use `np.maximum(raw, LOG_FLOOR)` with `LOG_FLOOR = 1e-10`.
- **Nodeless mean-field wavefunction:** `psi_mf` uses `x * exp(-x^2/2)` with no polynomial node factor. Correct for 1p-shell (n_r=0, l=1).
- **k_F marker:** Present at 1.36 fm^-1 with dashed gray vertical line and label. Matches spec.
- **Panel labels (a), (b), (c):** Present in correct positions (0.02, 0.98) with bold 14pt font.
- **Tol Bright palette:** All colors match the spec exactly (#332288, #009988, #CC3311, #EE7733, #0077BB, #BBBBBB).
- **Line styles and z-orders:** Match spec (components at zorder=5 above total at zorder=4).
- **Axis labels with units:** `r"$\rho(k)$  [arb. units]"` and `r"Momentum  $k$  [fm$^{-1}$]"` present.
- **Legend:** Present, frameless, upper right, fontsize 8.
- **Attribution text:** "Adapted from concepts in Hen et al., Rev. Mod. Phys. 89, 045002 (2017)" is present.
- **Serif fonts:** Applied via academic-draw (STIX math).
- **Ticks direction "in":** Configured on ax_mom for both x and y axes.
- **Left panel spines hidden:** All spines set invisible on ax_nn and ax_nuc.
- **Script runs without errors:** Confirmed -- clean execution, no warnings.
- **Both arrows in panel (a) point toward repulsive core region:** They point downward to y=50 at r=1.0 and r=1.4 fm (see M2 for nuance).
- **Figure sufficiently differentiated from original:** New color palette, decomposed momentum distribution with labeled components, k_F marker, log-scale axis markings, single nodeless wavefunction in panel (b) -- all represent meaningful visual and content differentiation from the original MORIGIN.pdf.

## Summary

The implementation faithfully follows the design spec in the vast majority of details. The script runs cleanly, academic-draw integration is correct, physics audit corrections (NN label, nodeless wavefunction, log-scale safety, k_F marker) are applied, and the integrity audit's attribution requirement is met. The figure is publication-quality in isolation.

**Six HIGH findings** prevent approval:
1. Design spec still says "n-n interaction" (code is correct, but spec is stale)
2. SRC wavefunction oscillates too rapidly
3. Cross-axes arrow sources at dead-amplitude regions of curves
4. (Noted but accepted -- single wavefunction in panel b is a deliberate spec choice)
5. Attribution text overlaps with x-axis label
6. "SRC dominant" annotation crowds the legend

Of these, H1 is a spec-maintenance issue (no code change needed for the figure itself), and H4 is accepted as deliberate. **H3, H5, and H6 require code changes** to fix visual quality issues. H2 is a judgment call on wavefunction aesthetics.

Recommended action: Fix H3 (arrow source positions), H5 (attribution placement), and H6 (annotation/legend spacing), then re-review.
