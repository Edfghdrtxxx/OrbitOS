approved

## Findings

All 13 original findings have been addressed. The spec is implementation-ready with two minor advisories (non-blocking).

### Verification of All 13 Round-1 Findings

#### Finding 1 (HIGH): `save_academic_figure` calls `tight_layout()` -- RESOLVED
- Section 10.1 no longer imports `save_academic_figure`. Section 10.3 uses manual `fig.savefig(bbox_inches='tight')` + `plt.close(fig)`. The rationale for why `bbox_inches='tight'` preserves layout while trimming whitespace is correctly explained. Checklist item 18 reaffirms it. Both PDF and PNG are saved from a single figure instance. No issues.

#### Finding 2 (HIGH): Floating tick marks on invisible spines -- RESOLVED
- Section 2.2 now calls `ax.tick_params(top=False, right=False, bottom=False, left=False)` for both left panels, and `ax_mom.tick_params(top=False, right=False)` for the right panel. This correctly suppresses ticks on all hidden spines.

#### Finding 3 (HIGH): SRC functions produce exact zeros breaking log scale -- RESOLVED
- Section 6.6 defines `LOG_FLOOR = 1e-10` and both `rho_src_tensor` and `rho_src_scalar` return `np.maximum(raw, LOG_FLOOR)`. The boolean mask also uses `.astype(float)` to avoid type issues. Verified computationally: both functions return exactly `1e-10` below their onset thresholds. No `log(0)` risk.

#### Finding 4 (HIGH): `psi_mf` with spurious node -- RESOLVED
- Section 6.5 completely rewritten. The function `psi_mf(r, b=1.8)` now computes `x * exp(-x^2/2)` with no polynomial node factor. Verified computationally: zero sign changes across `r in [0.01, 8.0]`, single peak at `r = 1.80 fm`. Physics note explicitly states n_r=0 for 1p-shell. Correct.

#### Finding 5 (HIGH): `ax_mom` log-scale y-axis has no ticks -- RESOLVED
- Section 2.2 now configures `LogLocator(base=10, numticks=10)` and `LogFormatterSciNotation()` after `set_yscale('log')`. The general axes loop no longer touches `ax_mom`. Verified that `LogFormatterSciNotation` exists in matplotlib 3.10.3. The implementation structure (Section 11) shows the correct ordering: `set_yscale('log')` first, then tick configuration.

#### Finding 6 (HIGH): Cross-axes arrow endpoints don't land on curves -- RESOLVED
- Section 8.1 now includes explicit endpoint computation from functional forms. Arrow 1 target corrected to `(0.8, 1.5)` matching `rho_meanfield(0.8) = 1.5` (verified). Arrows 2 and 3 use programmatic evaluation: `rho_src_scalar(np.array([2.8]))[0]` and `rho_src_tensor(np.array([2.2]))[0]`. A `curve_value_at()` helper is provided. The comment block states approximate values (`~0.0051` and `~0.011`) that are slightly off from actual (`0.0069` and `0.0149`), but since the code uses function calls rather than hardcoded values, the rendered arrows will land correctly.

#### Finding 7 (HIGH): Panel label "(a)" collides with "n-n interaction" -- RESOLVED
- "n-n interaction" moved from y=0.95 to y=0.86. The 12% gap (~0.19 inches at 1.6-inch panel height) provides comfortable clearance. Section 7.2 table and code are consistent. Coordinate Reference (Section 12) updated.

#### Finding 8 (HIGH): Horizontal axis arrows don't coincide with zero-energy lines -- RESOLVED
- Section 5 now computes exact axes-fraction positions: `y_zero_frac_nn = 0.2857` (120/420, verified) and `y_zero_frac_nuc = 0.7333` (55/75, verified). Separate `axhline(y=0)` calls are removed. Comments explicitly state "the horizontal arrow IS the zero line."

#### Finding 9 (HIGH): Missing scipy dependency -- RESOLVED
- Section 6.6 replaces `scipy.ndimage.gaussian_filter1d` with a pure-numpy `gaussian_smooth()` function using `np.convolve` with a Gaussian kernel. No external dependencies beyond numpy and matplotlib.

#### Finding 10 (HIGH): Contradictory axis label text -- RESOLVED
- Unified to `r"$r$ [fm]"` with units everywhere. Section 5 code writes `r'$r$ [fm]'` at arrow tips. Section 7.2 table matches. No contradictions remain.

#### Finding 11 (MEDIUM): No `V(r)` label code provided -- RESOLVED
- Section 7.2 now includes explicit `ax.text()` code for both `V(r)` labels using `transform=ax.transAxes`, negative x-coordinate (-0.06), and `clip_on=False`. Both panels are covered.

#### Finding 12 (MEDIUM): Smoothed total rho(p) obscures mean-field component -- RESOLVED
- Section 4 z-order table revised: individual components at zorder=5 (above), total at zorder=4 (below). Code in Section 6.6 plots components first with `zorder=5`, then total with `zorder=4`. Explanatory notes in both sections confirm this is intentional. The orange dashed line will render on top of the red solid line.

#### Finding 13 (MEDIUM): SRC wavefunction color implies exclusive tensor association -- RESOLVED
- SRC wavefunction changed from blue (`#0077BB`) to teal (`#009988`) throughout. Section 3 includes an explicit rationale note explaining that teal represents ALL SRC correlations generically. Color table, Section 6.3 code, and Section 8.2 arrows are all consistent.

### New Issues Check

#### Advisory A (LOW, non-blocking): Gaussian smoothing edge effects
- The `np.convolve(..., mode='same')` smoothing introduces boundary artifacts. At `k=0.01`, the smoothed total is 39% below the raw total (0.196 vs 0.321). At `k=4.5`, it is 41% below (0.000252 vs 0.000428). This means the red total curve will visibly dip below the sum of its components at both edges of the k range. The effect is confined to approximately the first and last 3 data points (~0.05 fm^-1). On a 4.5 fm^-1 axis this is barely visible. The implementer can mitigate by using `mode='same'` with edge padding (e.g., `np.pad(y, kernel_size//2, mode='edge')` before convolution), but this is cosmetic.

#### Advisory B (LOW, non-blocking): Comment approximations differ from actual function values
- Section 8.1 endpoint computation comments state `rho_src_scalar(2.8) ~ 0.0051` and `rho_src_tensor(2.2) ~ 0.011`, but actual values are `0.0069` and `0.0149` respectively. This is harmless because the code uses programmatic function evaluation (`rho_src_scalar(np.array([2.8]))[0]`), not the approximate comment values. The comments are documentation, not implementation. No action required.

### Implementation Readiness Assessment

- **Completeness:** All curves, colors, positions, labels, arrows, and save logic are specified with code snippets. The implementation agent can copy-paste and assemble.
- **API correctness:** All matplotlib calls verified against 3.10.3: `FancyArrowPatch`, `ConnectionPatch`, `LogLocator`, `LogFormatterSciNotation`, axes-fraction annotations all work as specified.
- **Mathematical consistency:** Axis limits, zero-line fractions, wavefunction shapes, and momentum distributions are numerically verified. No dimensional inconsistencies.
- **No ambiguity:** The spec leaves zero design decisions to the implementer. Every coordinate, color, linewidth, and z-order is explicit.

**Verdict: APPROVED for implementation.**
