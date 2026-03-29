needs-revision

## Findings

### 1. `save_academic_figure` calls `tight_layout()` which will destroy manual axes positioning
- File: 03_design_spec.md, Section 10.3 / Section 2.1
- Issue: The spec relies on precise `fig.add_axes([left, bottom, width, height])` positioning, but the actual `save_academic_figure()` implementation (academic_style.py line 127) calls `fig.tight_layout()` before saving. `tight_layout()` will rearrange manually-placed axes, destroying the carefully specified layout and the gap reserved for cross-axes arrows.
- Why it matters: The rendered figure layout will not match the spec. The programmer must either bypass `save_academic_figure`, patch it, or call `fig.savefig` directly. The spec gives no guidance on this conflict.
- Confidence: high

### 2. `ax_mom` will have floating tick marks on invisible spines
- File: 03_design_spec.md, Section 2.2
- Issue: The academic style sets `xtick.top: True` and `ytick.right: True`. The spec hides top/right spines on `ax_mom` but never disables the corresponding tick marks. The result is tick marks floating along invisible edges.
- Why it matters: Visually broken appearance. The programmer must guess whether to add `ax_mom.tick_params(top=False, right=False)`.
- Confidence: high

### 3. `rho_src_tensor` and `rho_src_scalar` produce exact zeros that break log scale
- File: 03_design_spec.md, Section 6.6
- Issue: Both SRC component functions multiply by `(k > k0)`, producing 0.0 for k below the onset threshold. On a log scale, `log10(0)` is undefined. Matplotlib will emit runtime warnings and the curves will have sharp discontinuities at the onset points.
- Why it matters: Runtime warnings and potential visual artifacts. The spec should specify using `np.maximum(value, 1e-8)` or masked arrays.
- Confidence: high

### 4. The `psi_mf` wavefunction with `n_nodes=1` is physically incorrect for a 1p-shell state
- File: 03_design_spec.md, Section 6.5
- Issue: The function uses `n_nodes=1`, producing a polynomial `(2.0*x - 1.0)` with a node at r = 0.9 fm. For a 1p-shell nucleon (n_r=0, l=1), the radial wavefunction has ZERO radial nodes. The original figure shows a smooth single-peaked wavefunction in the nuclear potential well. With `n_nodes=1`, the result will have a spurious sign change producing a double-peaked shape.
- Why it matters: Physics error. The plotted wavefunction will not match the original figure's smooth single-humped shape. Should use `n_nodes=0`.
- Confidence: high

### 5. `ax_mom` log-scale y-axis has no tick marks or labels
- File: 03_design_spec.md, Section 2.2 / Section 6.6
- Issue: The general axes configuration loop calls `ax_mom.set_yticks([])`. The "Revised for ax_mom" block restores x-ticks but never restores y-ticks. With `set_yscale('log')`, the y-axis will be completely blank -- no powers of 10 marked.
- Why it matters: A log-scale axis without tick labels is unreadable for a publication figure. Readers and reviewers expect to see decade markers (10^-4, 10^-3, etc.).
- Confidence: high

### 6. Cross-axes arrow endpoints do not land on the actual curves
- File: 03_design_spec.md, Section 8.1
- Issue: Arrow 1 targets `(0.8, 0.8)` in `ax_mom`, but `rho_meanfield(0.8) = 1.5`, not 0.8. Arrow 2 targets `(2.5, 0.03)`, but `rho_src_tensor(2.5) ~ 0.007`, not 0.03. The arrows will point to empty space rather than landing on the curves they conceptually connect to.
- Why it matters: The visual connection between coordinate-space and momentum-space will look arbitrary. The programmer must recompute endpoints or the figure loses its explanatory power.
- Confidence: high

### 7. Panel label "(a)" collides with "n-n interaction" text
- File: 03_design_spec.md, Section 7.1 / Section 7.2
- Issue: "(a)" is placed at axes fraction (0.02, 0.98) with fontsize 14 bold. "n-n interaction" is at (0.05, 0.95) with fontsize 11 italic. With a panel height of ~1.60 inches, the 3% vertical gap is approximately 0.048 inches -- these two text elements will overlap.
- Why it matters: Overlapping text is unreadable. One label needs to be repositioned.
- Confidence: high

### 8. Horizontal axis arrows do not coincide with y=0 zero-energy lines
- File: 03_design_spec.md, Section 5
- Issue: For `ax_nn`, the horizontal axis arrow is at axes fraction y=0.35, which corresponds to ~27 MeV in data coordinates. But `axhline(y=0)` draws the zero-energy line at 0 MeV (axes fraction ~0.286). Two parallel horizontal lines at different heights will appear. Similarly for `ax_nuc`: the arrow is at axes fraction 0.72 (~-1 MeV) while `axhline(y=0)` is at 0 MeV (axes fraction 0.733).
- Why it matters: For `ax_nn`, the two lines are visually separated by ~1.5mm, creating confusion about which is the physical zero. The programmer must reconcile them.
- Confidence: high

### 9. Missing scipy dependency declaration
- File: 03_design_spec.md, Section 6.6
- Issue: The smoothed total rho(p) uses `from scipy.ndimage import gaussian_filter1d`, but scipy is never listed as a required dependency. The academic-draw boilerplate only imports matplotlib and numpy.
- Why it matters: If scipy is not installed, the implementation fails at runtime with no fallback specified.
- Confidence: high

### 10. Contradictory axis label text: table says `r"$r$ [fm]"` but code writes only `r"$r$"`
- File: 03_design_spec.md, Section 7.2 vs Section 5
- Issue: The Section 7.2 table specifies axis labels as `r"$r$ [fm]"` with units, but the actual code in Section 5 (line 130-131) only places `r'$r$'` without `[fm]` units.
- Why it matters: The programmer has two contradictory instructions and must choose. Minor but creates ambiguity.
- Confidence: high

### 11. No `V(r)` label code provided despite being specified in the table
- File: 03_design_spec.md, Section 7.2
- Issue: The table specifies `r"$V(r)$"` labels at positions `(-0.05, 0.90)` for both left panels, but no code snippet implements these labels. All other annotations in the spec have corresponding code blocks.
- Why it matters: The programmer may overlook this label since there is no code to copy. The negative x-coordinate also means the label sits outside the axes bounds, which requires `clip_on=False` or `transAxes` -- this is not clarified.
- Confidence: medium

### 12. The spec invents a separate smoothed total rho(p) curve not present in the original figure
- File: 03_design_spec.md, Section 6.6
- Issue: The original figure shows a red curve that serves as the total distribution. The spec adds a separate `rho_total_smooth` (red solid) on top of the individual components including `rho_mf` (orange dashed). Below k_F, these two curves overlap almost exactly, making the orange dashed line invisible under the red solid line.
- Why it matters: The mean-field component will be visually obscured. The spec does not flag this as an intentional deviation or provide guidance on z-ordering to keep both visible.
- Confidence: medium

### 13. The SRC wavefunction color (blue) implies exclusive association with the tensor SRC component
- File: 03_design_spec.md, Section 3
- Issue: The SRC wavefunction in `ax_nn` is colored blue (#0077BB), the same color as the tensor SRC component in `ax_mom`. But physically, the SRC wavefunction represents ALL short-range correlations (both tensor and central). The color mapping creates a misleading one-to-one visual link between the wavefunction and only the tensor channel.
- Why it matters: Physics interpretation issue. A reader may incorrectly conclude the wavefunction represents only np tensor correlations.
- Confidence: medium
