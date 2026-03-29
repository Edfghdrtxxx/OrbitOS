# MORIGIN Figure -- Publication-Quality Design Specification

> **Purpose:** Implementation-ready blueprint for recreating the SRC conceptual schematic
> (coordinate-space physics to momentum-space observables) using matplotlib +
> `academic-draw` skill. Every color, coordinate, function, and annotation is
> specified so the implementing agent makes zero design decisions.

---

## 1. Figure Dimensions and Format

| Property | Value |
|---|---|
| Target width | **7.0 inches** (double-column, Physical Review style) |
| Target height | **3.8 inches** |
| `figsize` | `(7.0, 3.8)` |
| DPI | 300 |
| Output formats | PDF (primary), PNG (preview) |
| Output path | User-specified; use manual `fig.savefig()` + `plt.close()` (see Section 10.3) |

**Rationale:** The figure contains side-by-side coordinate-space and momentum-space content with connecting arrows. Double-column width is required for legibility. The 7:3.8 aspect ratio (~1.84:1) provides adequate height for two stacked left panels plus the right momentum-distribution panel.

---

## 2. Panel Layout

Use **manual `fig.add_axes()`** positioning (NOT `subplots` or `gridspec`) because the panels have irregular sizes and the connecting arrows span across panel boundaries.

**CRITICAL:** Do NOT call `fig.tight_layout()` anywhere. The `save_academic_figure()` utility calls `fig.tight_layout()` internally (line 127 of `academic_style.py`), which will **destroy** the manual axes layout. See Section 10.3 for the required workaround.

### 2.1 Axes Definitions (in figure fraction coordinates `[left, bottom, width, height]`)

| Axes ID | Description | Position `[left, bottom, width, height]` | Aspect |
|---|---|---|---|
| `ax_nn` | n-n interaction potential + SRC wavefunction (top-left) | `[0.06, 0.54, 0.32, 0.42]` | auto |
| `ax_nuc` | Nuclear mean-field potential + mean-field wavefunction (bottom-left) | `[0.06, 0.06, 0.32, 0.42]` | auto |
| `ax_mom` | Momentum distribution rho(p) (right) | `[0.52, 0.06, 0.44, 0.86]` | auto |

All three axes share a conceptual connection region between x ~ 0.38 and x ~ 0.52 in figure coordinates -- this gap is where the connecting arrows live.

### 2.2 Axes Configuration

The left panels (`ax_nn`, `ax_nuc`) use **invisible spines, no ticks, no tick labels** because these are schematic/conceptual diagrams, not data plots. The axes serve purely as drawing canvases.

```python
for ax in [ax_nn, ax_nuc]:
    ax.set_xlim(...)   # see Section 6
    ax.set_ylim(...)
    for spine in ax.spines.values():
        spine.set_visible(False)
    ax.set_xticks([])
    ax.set_yticks([])
    # Disable top/right ticks that academic style enables by default
    ax.tick_params(top=False, right=False, bottom=False, left=False)
```

**`ax_mom` configuration (separate -- has visible spines and ticks):**

```python
ax_mom.spines['bottom'].set_visible(True)
ax_mom.spines['left'].set_visible(True)
ax_mom.spines['top'].set_visible(False)
ax_mom.spines['right'].set_visible(False)

# X-axis ticks
ax_mom.set_xticks([1, 2, 3, 4])
ax_mom.set_xticklabels(['1', '2', '3', '4'])
ax_mom.tick_params(axis='x', direction='in', length=5, width=1.0)

# Y-axis: log-scale decade ticks (MUST be set AFTER set_yscale('log'))
# set_yscale('log') is called in Section 6.6. After that:
import matplotlib.ticker as ticker
ax_mom.yaxis.set_major_locator(ticker.LogLocator(base=10, numticks=10))
ax_mom.yaxis.set_major_formatter(ticker.LogFormatterSciNotation())
ax_mom.tick_params(axis='y', direction='in', length=5, width=1.0, which='both')

# Disable ticks on hidden spines (academic style enables xtick.top and ytick.right)
ax_mom.tick_params(top=False, right=False)
```

---

## 3. Color Scheme (Colorblind-Friendly)

All colors chosen from the Tol Bright palette + select additions for maximum distinguishability under CVD simulation (protanopia, deuteranopia).

| Component | Hex Color | Name | Usage |
|---|---|---|---|
| n-n potential curve | `#332288` | Indigo | V_NN(r) curve in `ax_nn` |
| Nuclear mean-field potential | `#332288` | Indigo | V_WS(r) curve in `ax_nuc` (same as n-n for "potential" consistency) |
| SRC wavefunction (correlated pair) | `#009988` | Teal | Wavefunction in `ax_nn` showing short-range correlation suppression. **Uses teal (not blue)** to represent ALL SRC correlations generically, avoiding misleading color-association with only the tensor channel. |
| Mean-field wavefunction | `#CC3311` | Red | Wavefunction in `ax_nuc` showing smooth harmonic-oscillator-like shape |
| rho(p) total | `#CC3311` | Red | Total momentum distribution curve in `ax_mom` |
| rho(p) mean-field component | `#EE7733` | Orange | Mean-field (IPM) contribution to rho(p), dominant below k_F |
| rho(p) SRC/high-momentum tail | `#009988` | Teal | SRC contribution to rho(p), dominant above ~2 fm^-1 |
| rho(p) tensor-correlated | `#0077BB` | Blue | Tensor/D-state SRC contribution (the second high-k component) |
| Arrow: mean-field connection | `#EE7733` | Orange | Arrow from `ax_nuc` wavefunction to `ax_mom` low-k region |
| Arrow: SRC connection (nn to high-k) | `#009988` | Teal | Arrow from `ax_nn` wavefunction to `ax_mom` high-k region |
| Arrow: tensor connection | `#0077BB` | Blue | Arrow from `ax_nn` to tensor component |
| k_F marker | `#BBBBBB` | Light Gray | Vertical dashed line at k_F |
| Axis lines (schematic) | `#000000` | Black | Drawn axis lines and zero-lines |
| Panel labels | `#000000` | Black | (a), (b), (c) text |
| Annotation text | `#000000` | Black | "n-n interaction", "nuclear potential", etc. |
| Big conceptual arrows (nucleon pair indicators) | Use same color as corresponding wavefunction with alpha=0.7 | -- | The large "down-pointing" arrows indicating nucleon pairs |

**Note on SRC wavefunction color change:** The SRC wavefunction in `ax_nn` is teal (`#009988`) rather than blue. This avoids creating a misleading one-to-one visual association with only the tensor SRC component (blue, `#0077BB`) in `ax_mom`. Physically, the SRC wavefunction represents ALL short-range correlations (both tensor and central). The teal color correctly links it to the general SRC concept.

---

## 4. Line Styles

| Element | Linewidth | Linestyle | Marker | zorder |
|---|---|---|---|---|
| n-n potential V_NN(r) | 2.0 | solid `'-'` | none | 3 |
| Woods-Saxon potential V_WS(r) | 2.0 | solid `'-'` | none | 3 |
| SRC wavefunction | 2.5 | solid `'-'` | none | 4 |
| Mean-field wavefunction | 2.5 | solid `'-'` | none | 4 |
| rho(p) mean-field | 2.0 | dashed `'--'` | none | 5 |
| rho(p) SRC/teal | 2.0 | dash-dot `'-.'` | none | 5 |
| rho(p) tensor/blue | 2.0 | dotted `':'` | none | 5 |
| rho(p) total | 2.5 | solid `'-'` | none | 4 |
| k_F vertical line | 1.2 | dashed `'--'` | none | 2 |
| Schematic axis lines | 1.0 | solid `'-'` | none | 1 |
| Zero-energy reference lines | 0.8 | solid `'-'` | none | 1 |

**z-order note:** The individual rho(p) components (mean-field, SRC, tensor) are drawn with **zorder=5**, ABOVE the total curve (zorder=4). This ensures the orange dashed mean-field line remains visible where it overlaps with the red total curve below k_F.

---

## 5. Schematic Axis Lines (for `ax_nn` and `ax_nuc`)

These panels are conceptual sketches, not data plots. Draw axis lines manually.

**IMPORTANT:** The horizontal axis arrows MUST coincide with the zero-energy reference lines. Do not draw separate `axhline(y=0)` lines -- the axis arrow itself serves as the zero-energy reference. The y-position of the horizontal arrow in axes-fraction coordinates must be computed from the data limits so it passes through `y=0` in data coordinates.

### ax_nn (n-n interaction panel)

y-limits: `[-120, 300]`. Zero in data coordinates maps to axes fraction: `(0 - (-120)) / (300 - (-120)) = 120/420 = 0.2857`.

```python
# Vertical axis (energy/potential)
ax_nn.annotate('', xy=(0, 1.05), xycoords='axes fraction',
               xytext=(0, -0.02), textcoords='axes fraction',
               arrowprops=dict(arrowstyle='->', color='black', lw=1.0))

# Horizontal axis (r) -- MUST pass through y=0 in data coords
# y=0 maps to axes fraction 0.2857
y_zero_frac_nn = 0.2857
ax_nn.annotate('', xy=(1.05, y_zero_frac_nn), xycoords='axes fraction',
               xytext=(-0.02, y_zero_frac_nn), textcoords='axes fraction',
               arrowprops=dict(arrowstyle='->', color='black', lw=1.0))

# "r [fm]" label at arrow tip (consistent with Section 7.2 table)
ax_nn.text(1.08, y_zero_frac_nn, r'$r$ [fm]', transform=ax_nn.transAxes, fontsize=12,
           va='center', ha='left')

# Do NOT draw a separate axhline(y=0) -- the horizontal arrow IS the zero line.
```

### ax_nuc (nuclear potential panel)

y-limits: `[-55, 20]`. Zero in data coordinates maps to axes fraction: `(0 - (-55)) / (20 - (-55)) = 55/75 = 0.7333`.

```python
# Vertical arrow up
ax_nuc.annotate('', xy=(0, 1.05), xycoords='axes fraction',
                xytext=(0, -0.02), textcoords='axes fraction',
                arrowprops=dict(arrowstyle='->', color='black', lw=1.0))

# Horizontal axis arrow -- MUST pass through y=0 in data coords
y_zero_frac_nuc = 0.7333
ax_nuc.annotate('', xy=(1.05, y_zero_frac_nuc), xycoords='axes fraction',
                xytext=(-0.02, y_zero_frac_nuc), textcoords='axes fraction',
                arrowprops=dict(arrowstyle='->', color='black', lw=1.0))

# "r [fm]" label (consistent with Section 7.2 table)
ax_nuc.text(1.08, y_zero_frac_nuc, r'$r$ [fm]', transform=ax_nuc.transAxes, fontsize=12,
            va='center', ha='left')

# Do NOT draw a separate axhline(y=0) -- the horizontal arrow IS the zero line.
```

---

## 6. Mathematical Curves -- Exact Functional Forms and Parameters

### 6.1 Data Domain Definitions

| Axes | x range (data coords) | y range (data coords) | Physical x meaning |
|---|---|---|---|
| `ax_nn` | `[0.0, 5.0]` | `[-120, 300]` | r in fm |
| `ax_nuc` | `[0.0, 8.0]` | `[-55, 20]` | r in fm |
| `ax_mom` | `[0.0, 4.5]` | `[1e-4, 2.0]` (log scale on y) | k in fm^-1 |

### 6.2 n-n Interaction Potential V_NN(r) -- in `ax_nn`

Simplified Argonne-v18-like shape with repulsive core and attractive well:

```python
import numpy as np

r = np.linspace(0.01, 5.0, 500)

def V_NN(r):
    """Schematic NN potential: repulsive core + attractive well."""
    V_core = 600.0 * np.exp(-r / 0.25)                      # repulsive core
    V_well = -110.0 * np.exp(-((r - 1.0)**2) / (2 * 0.3**2))  # attractive well ~1 fm
    V_tail = -5.0 * np.exp(-r / 1.4)                         # long-range OPE tail
    return V_core + V_well + V_tail

v_nn = V_NN(r)
v_nn_clipped = np.clip(v_nn, -120, 280)  # clip for display
```

Plot with:
```python
ax_nn.plot(r, v_nn_clipped, color='#332288', linewidth=2.0, zorder=3)
ax_nn.set_ylim(-120, 300)
ax_nn.set_xlim(0, 5.0)
```

### 6.3 SRC Wavefunction (correlated pair) -- in `ax_nn`

The relative wavefunction of a correlated nucleon pair shows suppression at short range (the "wound" due to the repulsive core) and oscillatory behavior at longer range:

```python
def psi_SRC(r):
    """Relative wavefunction of SRC pair -- suppressed at short range."""
    # Wound/suppression factor (1 - e^{-r/a})
    suppression = 1.0 - np.exp(-(r / 0.8)**2)
    # Oscillatory part (modified Bessel / sinusoidal)
    oscillation = np.sin(2.5 * r - 0.3) * np.exp(-0.3 * r)
    return suppression * oscillation

psi_src = psi_SRC(r)
# Scale to fit in the panel: map to range roughly [-50, 50] about zero line
psi_src_scaled = psi_src / np.max(np.abs(psi_src)) * 50.0
```

Plot overlaid on the potential (shares `ax_nn`), referenced to the zero line:
```python
ax_nn.plot(r, psi_src_scaled, color='#009988', linewidth=2.5, zorder=4)
```

**Note:** SRC wavefunction color is teal (`#009988`), not blue -- see Section 3 rationale.

### 6.4 Woods-Saxon Potential V_WS(r) -- in `ax_nuc`

```python
r_nuc = np.linspace(0.0, 8.0, 500)

def V_WS(r, V0=50.0, R=3.5, a=0.65):
    """Standard Woods-Saxon potential."""
    return -V0 / (1.0 + np.exp((r - R) / a))

v_ws = V_WS(r_nuc)
```

Plot:
```python
ax_nuc.plot(r_nuc, v_ws, color='#332288', linewidth=2.0, zorder=3)
ax_nuc.set_ylim(-55, 20)
ax_nuc.set_xlim(0, 8.0)
```

### 6.5 Mean-Field Wavefunction -- in `ax_nuc`

Radial wavefunction for a 1p-shell nucleon (n_r=0, l=1). This state has **ZERO radial nodes** -- the wavefunction is a single smooth hump inside the nuclear potential well.

```python
def psi_mf(r, b=1.8):
    """
    Mean-field single-particle wavefunction in nuclear potential.
    1p-shell state: n_r=0, l=1 => zero radial nodes.
    Shape: r * R_nl(r) ~ r * exp(-r^2 / 2b^2) (nodeless).
    b: oscillator length parameter in fm
    """
    x = r / b
    # No polynomial node factor -- 1p state has n_r=0 radial nodes.
    # The l=1 angular momentum gives the r prefactor (already in r*R form).
    envelope = x * np.exp(-x**2 / 2.0)
    return envelope

psi_mean = psi_mf(r_nuc, b=1.8)
# Scale to ~1/3 of potential well depth for visual overlay
psi_mean_scaled = psi_mean / np.max(np.abs(psi_mean)) * 15.0 - 25.0  # center in the well
```

Plot overlaid on Woods-Saxon:
```python
ax_nuc.plot(r_nuc, psi_mean_scaled, color='#CC3311', linewidth=2.5, zorder=4)
```

**Physics note:** The 1p-shell (n_r=0, l=1) state has zero radial nodes. Using `n_nodes=1` (as in the previous version) would produce a spurious node at r ~ 0.9 fm, creating an incorrect double-peaked shape. The original figure shows a smooth single-humped wavefunction.

### 6.6 Momentum Distribution rho(p) -- in `ax_mom`

Use log scale on y-axis. The distribution has three components.

**CRITICAL:** SRC component functions must NEVER produce exact zeros, because `log10(0)` is undefined and will break the log scale. Use `np.maximum(..., floor)` to clamp all values to a small positive floor.

**Dependencies:** Only numpy is required. Do NOT use `scipy.ndimage.gaussian_filter1d` -- use `np.convolve` with a Gaussian kernel instead (see below).

```python
k = np.linspace(0.01, 4.5, 500)
k_F = 1.36  # Fermi momentum in fm^-1 (typical for medium-mass nuclei)

# Floor value to prevent log-scale breakage
LOG_FLOOR = 1e-10

def rho_meanfield(k, k_F=1.36):
    """Mean-field / IPM momentum distribution -- Gaussian-like, peaks below k_F."""
    sigma = 0.45
    return 1.5 * np.exp(-((k - 0.8)**2) / (2 * sigma**2))

def rho_src_tensor(k):
    """Tensor-correlated SRC pairs (np pairs, D-state) -- power-law tail."""
    # Onset around 1.5 fm^-1, dominates 2-3 fm^-1
    amplitude = 0.08
    k0 = 1.5
    decay = 3.5  # power law index
    raw = amplitude * (k / k0)**2 * np.exp(-decay * (k - k0)) * (k > k0).astype(float)
    return np.maximum(raw, LOG_FLOOR)

def rho_src_scalar(k):
    """Scalar/central SRC (pp/nn pairs) -- steeper power-law tail at higher k."""
    amplitude = 0.015
    k0 = 2.2
    decay = 2.5
    raw = amplitude * (k / k0)**3 * np.exp(-decay * (k - k0)) * (k > k0).astype(float)
    return np.maximum(raw, LOG_FLOOR)

rho_mf = rho_meanfield(k)
rho_tensor = rho_src_tensor(k)
rho_scalar = rho_src_scalar(k)
rho_total = rho_mf + rho_tensor + rho_scalar

# Smooth the total to avoid kinks -- use numpy-only Gaussian convolution
def gaussian_smooth(y, sigma_pts=3):
    """Gaussian smoothing using numpy convolution (no scipy dependency)."""
    kernel_size = int(6 * sigma_pts) + 1
    x_kern = np.arange(kernel_size) - kernel_size // 2
    kernel = np.exp(-x_kern**2 / (2 * sigma_pts**2))
    kernel /= kernel.sum()
    return np.convolve(y, kernel, mode='same')

rho_total_smooth = gaussian_smooth(rho_total, sigma_pts=3)
```

Plot:
```python
ax_mom.set_yscale('log')

# IMPORTANT: Plot individual components FIRST with higher zorder (5) so they
# remain visible on top of the total curve (zorder 4).
ax_mom.plot(k, rho_mf, color='#EE7733', linewidth=2.0, linestyle='--', zorder=5,
            label=r'Mean-field (IPM)')
ax_mom.plot(k, rho_tensor, color='#0077BB', linewidth=2.0, linestyle=':', zorder=5,
            label=r'Tensor SRC ($np$)')
ax_mom.plot(k, rho_scalar, color='#009988', linewidth=2.0, linestyle='-.', zorder=5,
            label=r'Central SRC ($pp/nn$)')

# Total curve BELOW components so dashed/dotted lines stay visible
ax_mom.plot(k, rho_total_smooth, color='#CC3311', linewidth=2.5, linestyle='-', zorder=4,
            label=r'$\rho(k)$ total')

ax_mom.set_xlim(0, 4.5)
ax_mom.set_ylim(1e-4, 2.0)
```

**Note on component visibility:** The mean-field (orange dashed) curve and the red total curve nearly overlap below k_F. By plotting components at zorder=5 and the total at zorder=4, the dashed orange line remains visible through the red solid line.

---

## 7. Labels and Annotations

### 7.1 Panel Labels

Position in upper-left corner of each axes, bold, 14pt. **Offset vertically from other labels to prevent collision.**

```python
label_props = dict(fontsize=14, fontweight='bold', va='top', ha='left')
ax_nn.text(0.02, 0.98, '(a)', transform=ax_nn.transAxes, **label_props)
ax_nuc.text(0.02, 0.98, '(b)', transform=ax_nuc.transAxes, **label_props)
ax_mom.text(0.02, 0.98, '(c)', transform=ax_mom.transAxes, **label_props)
```

### 7.2 Physics Labels on Panels

**Panel labels "(a)"/"(b)" are at y=0.98. Physics description labels must be sufficiently below to avoid collision. Use y=0.86 (12% gap, ~0.19 inches at panel height 1.6 inches -- comfortable clearance).**

| Label | Axes | Position (axes fraction) | Font | Size |
|---|---|---|---|---|
| `"n-n interaction"` | `ax_nn` | `(0.05, 0.86)` | serif italic | 11 |
| `"nuclear potential"` | `ax_nuc` | `(0.30, 0.30)` | serif italic | 11 |
| `r"$V(r)$"` | `ax_nn` | `(-0.06, 0.92)` | math | 12 |
| `r"$V(r)$"` | `ax_nuc` | `(-0.06, 0.92)` | math | 12 |
| `r"$r$ [fm]"` | `ax_nn` | right of x-arrow (see Section 5) | math | 12 |
| `r"$r$ [fm]"` | `ax_nuc` | right of x-arrow (see Section 5) | math | 12 |

```python
# Physics description labels (positioned below panel labels to avoid overlap)
ax_nn.text(0.05, 0.86, 'n-n interaction', transform=ax_nn.transAxes,
           fontsize=11, fontstyle='italic', va='top', ha='left', color='black')
ax_nuc.text(0.30, 0.30, 'nuclear potential', transform=ax_nuc.transAxes,
            fontsize=11, fontstyle='italic', va='top', ha='left', color='black')

# V(r) labels on y-axes (outside axes bounds, needs clip_on=False)
ax_nn.text(-0.06, 0.92, r'$V(r)$', transform=ax_nn.transAxes, fontsize=12,
           va='center', ha='right', clip_on=False)
ax_nuc.text(-0.06, 0.92, r'$V(r)$', transform=ax_nuc.transAxes, fontsize=12,
            va='center', ha='right', clip_on=False)
```

### 7.3 Momentum Panel Labels

```python
# Y-axis label (rotated)
ax_mom.set_ylabel(r'$\rho(k)$  [arb. units]', fontsize=12, labelpad=5)
# X-axis label
ax_mom.set_xlabel(r'Momentum  $k$  [fm$^{-1}$]', fontsize=12, labelpad=5)
```

### 7.4 k_F Marker

```python
k_F = 1.36
ax_mom.axvline(x=k_F, color='#BBBBBB', linewidth=1.2, linestyle='--', zorder=2)
ax_mom.annotate(r'$k_F$', xy=(k_F, 1.5), xytext=(k_F + 0.08, 1.5),
                fontsize=11, color='#666666', va='center', ha='left')
```

### 7.5 SRC Region Annotation

```python
# Horizontal bracket/brace above the SRC tail region
ax_mom.annotate('', xy=(2.0, 0.8), xytext=(4.0, 0.8),
                arrowprops=dict(arrowstyle='<->', color='#009988', lw=1.5))
ax_mom.text(3.0, 1.0, 'SRC\ndominant', fontsize=10, ha='center', va='bottom',
            color='#009988', fontstyle='italic')
```

### 7.6 Legend

Place in `ax_mom`, inside the panel, upper-right area:

```python
ax_mom.legend(
    loc='upper right',
    fontsize=8,
    frameon=False,
    labelspacing=0.4,
    handlelength=2.0,
    borderaxespad=0.5
)
```

---

## 8. Arrows and Connectors

Use `matplotlib.patches.FancyArrowPatch` with `ConnectionPatch` for cross-axes arrows, and in-axes `FancyArrowPatch` for the large conceptual nucleon-pair arrows.

### 8.1 Connecting Arrows (coordinate-space to momentum-space)

These are the thin conceptual lines connecting left panels to right panel regions. Use `matplotlib.patches.ConnectionPatch`.

**CRITICAL: Arrow endpoints must land on (or very near) the actual curves.** The coordinates below are computed from the functional forms in Section 6. The implementation agent MUST verify these by evaluating the functions at the specified x-values and adjusting if needed.

**Endpoint computation method:**
```python
# For each arrow, evaluate the target function at the specified x to get the correct y:
# Arrow 1 target: rho_meanfield(0.8) = 1.5 * exp(0) = 1.5
# Arrow 2 target: rho_src_scalar(2.8) ~ 0.015 * (2.8/2.2)^3 * exp(-2.5*(2.8-2.2)) ~ 0.0051
# Arrow 3 target: rho_src_tensor(2.2) ~ 0.08 * (2.2/1.5)^2 * exp(-3.5*(2.2-1.5)) ~ 0.011
```

```python
from matplotlib.patches import ConnectionPatch

# Arrow 1: Mean-field wavefunction (ax_nuc) -> low-k peak of rho_mf (ax_mom)
# Source: right side of wavefunction in ax_nuc
# Target: peak of mean-field rho at k=0.8 where rho_mf(0.8) = 1.5
arrow_mf = ConnectionPatch(
    xyA=(7.5, -25.0), coordsA='data', axesA=ax_nuc,    # right side of wavefunction
    xyB=(0.8, 1.5),   coordsB='data', axesB=ax_mom,     # peak of mean-field rho
    arrowstyle='->', color='#EE7733', linewidth=1.5,
    connectionstyle='arc3,rad=0.15',
    mutation_scale=15, zorder=6
)
fig.add_artist(arrow_mf)

# Arrow 2: SRC wavefunction (ax_nn) -> central SRC teal region (ax_mom)
# Source: right tail of SRC wavefunction in ax_nn
# Target: central SRC component at k=2.8 where rho_src_scalar(2.8) ~ 0.005
arrow_src_teal = ConnectionPatch(
    xyA=(4.5, psi_SRC(4.5) / np.max(np.abs(psi_src)) * 50.0),
    coordsA='data', axesA=ax_nn,
    xyB=(2.8, rho_src_scalar(np.array([2.8]))[0]),
    coordsB='data', axesB=ax_mom,
    arrowstyle='->', color='#009988', linewidth=1.5,
    connectionstyle='arc3,rad=-0.15',
    mutation_scale=15, zorder=6
)
fig.add_artist(arrow_src_teal)

# Arrow 3: SRC wavefunction (ax_nn) -> tensor/blue high-k (ax_mom)
# Source: SRC wavefunction at r=3.5
# Target: tensor SRC component at k=2.2 where rho_src_tensor(2.2) ~ 0.011
arrow_src_blue = ConnectionPatch(
    xyA=(3.5, psi_SRC(3.5) / np.max(np.abs(psi_src)) * 50.0),
    coordsA='data', axesA=ax_nn,
    xyB=(2.2, rho_src_tensor(np.array([2.2]))[0]),
    coordsB='data', axesB=ax_mom,
    arrowstyle='->', color='#0077BB', linewidth=1.5,
    connectionstyle='arc3,rad=-0.2',
    mutation_scale=15, zorder=6
)
fig.add_artist(arrow_src_blue)
```

**Implementation note:** The arrow source and target y-values above are computed from the curve functions. The implementation agent should store the computed curve arrays (e.g. `psi_src_scaled`, `rho_mf`, etc.) and use them to look up exact y-values at the desired x-positions. Example:

```python
# Helper to find curve value at a given x
def curve_value_at(x_array, y_array, x_target):
    """Interpolate y at x_target from discrete curve data."""
    idx = np.argmin(np.abs(x_array - x_target))
    return y_array[idx]

# Then for arrow endpoints:
# xyA_y = curve_value_at(r, psi_src_scaled, 4.5)
# xyB_y = curve_value_at(k, rho_scalar, 2.8)
```

### 8.2 Large Conceptual Arrows (Nucleon Pair Indicators)

The original figure has large bold arrows indicating nucleon pairs (green and blue in the original; we remap to our palette). These are decorative emphasis markers. Use `FancyArrowPatch` with thick linewidth:

```python
from matplotlib.patches import FancyArrowPatch

# Large arrow in ax_nn: indicates correlated nucleon pair
# Two arrows pointing downward side by side (representing the pair)
arrow_pair_1 = FancyArrowPatch(
    posA=(1.0, 220), posB=(1.0, 50),
    arrowstyle='->,head_length=12,head_width=8',
    color='#009988', linewidth=4, alpha=0.7,
    zorder=10
)
ax_nn.add_patch(arrow_pair_1)

arrow_pair_2 = FancyArrowPatch(
    posA=(1.4, 220), posB=(1.4, 50),
    arrowstyle='->,head_length=12,head_width=8',
    color='#0077BB', linewidth=4, alpha=0.7,
    zorder=10
)
ax_nn.add_patch(arrow_pair_2)

# Large arrow in ax_mom: indicates SRC high-momentum tail significance
arrow_mom_emphasis = FancyArrowPatch(
    posA=(3.5, 0.5), posB=(3.2, 0.015),
    arrowstyle='->,head_length=12,head_width=8',
    color='#0077BB', linewidth=4, alpha=0.7,
    zorder=10
)
ax_mom.add_patch(arrow_mom_emphasis)
```

---

## 9. Caption Text

Add a figure caption below the figure using `fig.text()`:

```python
caption = (
    "Schematic connection between coordinate-space nucleon-nucleon correlations "
    "and momentum-space observables. "
    "(a) The n-n interaction features a repulsive core at short range, producing "
    "a suppressed (\"wounded\") relative wavefunction. "
    "(b) The nuclear mean-field (Woods-Saxon) potential supports smooth single-particle "
    "wavefunctions. "
    "(c) The single-nucleon momentum distribution $\\rho(k)$: the mean-field component "
    "dominates below $k_F \\approx 1.36$ fm$^{-1}$, while short-range correlations (SRC) "
    "generate a high-momentum tail above $\\sim 2$ fm$^{-1}$."
)
# Do NOT render the caption in the figure itself -- provide it as the \caption{} text
# for the LaTeX document. Store as a variable for reference.
FIGURE_CAPTION = caption
```

**Do not render caption in the figure.** It is provided above for the LaTeX `\caption{}` command.

---

## 10. `academic-draw` Integration

### 10.1 Boilerplate

```python
import sys
from pathlib import Path

skill_scripts = Path(r"D:\Something\research\MATE-Automation-V4\.claude\skills\academic-draw\scripts").resolve()
if str(skill_scripts) not in sys.path:
    sys.path.insert(0, str(skill_scripts))

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

from academic_style import (
    apply_academic_style,
    setup_academic_fonts,
    verify_academic_style,
    # NOTE: Do NOT import save_academic_figure -- we bypass it (see Section 10.3)
)

apply_academic_style()
setup_academic_fonts()
verify_academic_style(hard_fail=True)
```

### 10.2 Style Overrides After `apply_academic_style()`

The academic style sets defaults (serif fonts, tick direction in, all spines on, no grid, `font.size=11`, `axes.labelsize=12`, `legend.fontsize=8`, `lines.linewidth=1.5`, `savefig.dpi=300`). These are all correct for our figure. No overrides needed except:

- The left panels (`ax_nn`, `ax_nuc`) need spines turned off (done per-axes, not globally).
- `mathtext.fontset` is already `stix` (STIX serif math), which is correct.
- The academic style sets `xtick.top: True` and `ytick.right: True` globally. These must be disabled per-axes where top/right spines are hidden (see Section 2.2).

### 10.3 Save Calls -- BYPASS `save_academic_figure`

**CRITICAL:** `save_academic_figure()` calls `fig.tight_layout()` on line 127 of `academic_style.py` before saving. This will **destroy** the manual `fig.add_axes()` layout by rearranging all axes. The spec relies on precise manual positioning with a gap for cross-axes arrows. Therefore, we **must NOT use `save_academic_figure()`**.

Instead, save manually using the same `bbox_inches="tight"` and DPI settings that `save_academic_figure` uses, but **without** calling `tight_layout()`:

```python
out_base = Path(r"<USER_SPECIFIED_OUTPUT_DIR>") / "morigin_src_schematic"
out_base.parent.mkdir(parents=True, exist_ok=True)

# Save PDF (vector, for publication) -- NO tight_layout()
fig.savefig(out_base.with_suffix('.pdf'), bbox_inches='tight', dpi=300)

# Save PNG (raster preview) -- same figure, no need to recreate
fig.savefig(out_base.with_suffix('.png'), bbox_inches='tight', dpi=300)

plt.close(fig)
```

**Why this works:** `bbox_inches='tight'` already trims whitespace around the figure content without rearranging axes positions. This gives the same "tight" output as `tight_layout()` would, but preserves the manual `fig.add_axes()` layout. Since we are not calling `save_academic_figure`, the figure is NOT closed between PDF and PNG saves, so we can save both formats from a single figure instance.

---

## 11. Implementation Structure

Recommended code structure:

```python
import matplotlib.ticker as ticker

def create_morigin_figure():
    """Create and return the MORIGIN SRC schematic figure."""
    fig = plt.figure(figsize=(7.0, 3.8))

    # --- Create axes ---
    ax_nn  = fig.add_axes([0.06, 0.54, 0.32, 0.42])
    ax_nuc = fig.add_axes([0.06, 0.06, 0.32, 0.42])
    ax_mom = fig.add_axes([0.52, 0.06, 0.44, 0.86])

    # --- Configure axes (Section 2.2) ---
    # Left panels: no spines, no ticks
    for ax in [ax_nn, ax_nuc]:
        for spine in ax.spines.values():
            spine.set_visible(False)
        ax.set_xticks([])
        ax.set_yticks([])
        ax.tick_params(top=False, right=False, bottom=False, left=False)

    # Right panel: visible bottom+left spines, log-scale y with ticks
    ax_mom.spines['top'].set_visible(False)
    ax_mom.spines['right'].set_visible(False)
    ax_mom.tick_params(top=False, right=False)
    # (y-axis ticks configured after set_yscale('log') in curve plotting section)

    # --- Set axis limits (Section 6.1) ---
    ax_nn.set_xlim(0, 5.0)
    ax_nn.set_ylim(-120, 300)
    ax_nuc.set_xlim(0, 8.0)
    ax_nuc.set_ylim(-55, 20)
    ax_mom.set_xlim(0, 4.5)

    # --- Draw schematic axis lines (Section 5) ---
    # ...

    # --- Plot curves (Section 6) ---
    # ... (V_NN, psi_SRC, V_WS, psi_mf, rho components)
    # Set ax_mom.set_yscale('log') here
    # Then configure y-axis ticks:
    ax_mom.set_ylim(1e-4, 2.0)
    ax_mom.yaxis.set_major_locator(ticker.LogLocator(base=10, numticks=10))
    ax_mom.yaxis.set_major_formatter(ticker.LogFormatterSciNotation())
    ax_mom.tick_params(axis='y', direction='in', length=5, width=1.0, which='both')
    ax_mom.set_xticks([1, 2, 3, 4])
    ax_mom.set_xticklabels(['1', '2', '3', '4'])
    ax_mom.tick_params(axis='x', direction='in', length=5, width=1.0)

    # --- Add labels and annotations (Section 7) ---
    # ...

    # --- Add arrows and connectors (Section 8) ---
    # ...

    return fig

# --- Main ---
fig = create_morigin_figure()

out_base = Path(r"<USER_SPECIFIED_OUTPUT_DIR>") / "morigin_src_schematic"
out_base.parent.mkdir(parents=True, exist_ok=True)

# Save BOTH formats from a single figure (no tight_layout!)
fig.savefig(out_base.with_suffix('.pdf'), bbox_inches='tight', dpi=300)
fig.savefig(out_base.with_suffix('.png'), bbox_inches='tight', dpi=300)
plt.close(fig)
```

---

## 12. Coordinate Reference Summary

All coordinate values used in annotations and arrows reference data coordinates unless noted otherwise. Key anchor points:

### ax_nn data coordinates
| Feature | x (fm) | y (MeV) |
|---|---|---|
| Repulsive core peak (clipped) | 0.3 | 280 |
| Attractive well minimum | 1.0 | -100 |
| Zero crossing (inner) | 0.55 | 0 |
| Zero crossing (outer) | 1.8 | 0 |
| SRC wavefunction suppression zone | 0.0-0.8 | ~0 |
| SRC wavefunction first peak | 1.5 | ~40 |
| Panel label "(a)" position | axes (0.02, 0.98) | -- |
| "n-n interaction" text | axes (0.05, 0.86) | -- |

### ax_nuc data coordinates
| Feature | x (fm) | y (MeV) |
|---|---|---|
| WS well bottom | 0.0 | -50 |
| WS half-depth (R) | 3.5 | -25 |
| WS surface (90%-10%) | 2.5-4.5 | -45 to -5 |
| Mean-field wf peak | ~3.0 | ~-13 |
| Panel label "(b)" position | axes (0.02, 0.98) | -- |
| "nuclear potential" text | axes (0.30, 0.30) | -- |

### ax_mom data coordinates
| Feature | x (fm^-1) | y (arb) |
|---|---|---|
| rho_mf peak | 0.8 | ~1.5 |
| k_F marker | 1.36 | full height |
| SRC onset | ~1.8 | ~0.02 |
| Tensor SRC peak | ~2.2 | ~0.011 |
| Central SRC visible | ~2.8 | ~0.005 |
| x-axis tick marks | 1, 2, 3, 4 | -- |
| Panel label "(c)" position | axes (0.02, 0.98) | -- |

---

## 13. Final Checklist for Implementation Agent

- [ ] Use `fig.add_axes()` with exact positions from Section 2.1
- [ ] Apply `academic-draw` boilerplate from Section 10.1 before any plotting (do NOT import `save_academic_figure`)
- [ ] Use exact hex colors from Section 3 table (note: SRC wavefunction is teal, not blue)
- [ ] Use exact linewidths, linestyles, and **z-orders** from Section 4 table (components above total)
- [ ] Implement all functional forms from Section 6 (V_NN, V_WS, psi_SRC, psi_mf with n_r=0, rho components with LOG_FLOOR)
- [ ] Use `psi_mf` with **zero radial nodes** (no polynomial factor) per Section 6.5
- [ ] Clamp SRC rho functions with `np.maximum(..., 1e-10)` before log-scale plotting (Section 6.6)
- [ ] Use numpy-only Gaussian smoothing (`np.convolve`), NOT scipy (Section 6.6)
- [ ] Draw schematic axis lines per Section 5, with horizontal arrows at **computed y=0 axes-fraction positions** (no separate `axhline`)
- [ ] Configure `ax_mom` with visible bottom+left spines, x-tick marks at 1,2,3,4, and **log-scale y-ticks with decade labels** (Section 2.2)
- [ ] Disable `tick_params(top=False, right=False)` on all axes to prevent floating ticks on hidden spines
- [ ] Add all labels from Section 7 -- panel labels at y=0.98, physics labels at y=0.86 (no overlap)
- [ ] Add `V(r)` labels with `clip_on=False` per Section 7.2 code
- [ ] Use `r"$r$ [fm]"` consistently (with units) for all r-axis labels
- [ ] Place k_F vertical dashed line at 1.36 fm^-1
- [ ] Add "SRC dominant" region annotation
- [ ] Draw 3 cross-axes `ConnectionPatch` arrows per Section 8.1 with **endpoints computed from actual curve values**
- [ ] Draw 3 large emphasis `FancyArrowPatch` arrows per Section 8.2
- [ ] Add legend in `ax_mom` per Section 7.6
- [ ] **Do NOT call `fig.tight_layout()` or `save_academic_figure()`** -- save with `fig.savefig(bbox_inches='tight')` per Section 10.3
- [ ] Save both PDF and PNG from a single figure instance
- [ ] Verify no grid lines appear (academic style default)
- [ ] Verify serif fonts throughout (STIX math)
- [ ] Verify tick direction is "in" on `ax_mom`
- [ ] Fine-tune arrow positions iteratively -- use the `curve_value_at()` helper from Section 8.1

---

## 14. Iterative Refinement Notes

The functional forms in Section 6 are approximate schematic representations, not fits to experimental data. The implementation agent should:

1. **Plot each curve individually first** to verify shape and scale before compositing.
2. **Adjust y-scaling of wavefunctions** so they are visually prominent but do not dominate the potential curves.
3. **Verify arrow endpoint y-values** by evaluating the curve functions at the target x-coordinates and comparing to the specified values in Section 8.1. Adjust if the functions produce different values.
4. **Check log-scale rendering** of `ax_mom` -- ensure all rho components are visible, the total curve smoothly envelopes them, and decade tick marks appear on the y-axis.
5. **Test colorblind accessibility** by viewing the output in grayscale -- the line styles (solid/dashed/dotted/dash-dot) provide redundant encoding.
6. **Verify no floating tick marks** appear on hidden spines (top/right edges of `ax_mom`, all edges of left panels).

---

## Revision Notes

This section documents all changes made in response to review findings (review_03.md, 13 findings).

### Finding 1 (HIGH): `save_academic_figure` calls `tight_layout()` -- layout destruction
- **Change:** Removed all usage of `save_academic_figure`. Sections 1, 10.1, 10.3, 11, and 13 now specify manual `fig.savefig(bbox_inches='tight')` + `plt.close(fig)`. Explained why `bbox_inches='tight'` achieves the same whitespace trimming without rearranging axes. Both PDF and PNG are saved from a single figure instance (no re-creation needed).

### Finding 2 (HIGH): Floating tick marks on invisible spines (`ax_mom`)
- **Change:** Section 2.2 now explicitly calls `ax_mom.tick_params(top=False, right=False)` to disable ticks on hidden spines. Same treatment applied to left panels. Added to checklist item 11.

### Finding 3 (HIGH): SRC functions produce exact zeros breaking log scale
- **Change:** Section 6.6 now defines `LOG_FLOOR = 1e-10` and wraps both `rho_src_tensor` and `rho_src_scalar` return values with `np.maximum(raw, LOG_FLOOR)`. Also added `.astype(float)` to the boolean mask to avoid type issues. Added to checklist.

### Finding 4 (HIGH): `psi_mf` with `n_nodes=1` produces spurious node (physics error)
- **Change:** Section 6.5 completely rewritten. The function now takes no `n_nodes` parameter and produces a nodeless wavefunction (`x * exp(-x^2/2)`) correct for the 1p-shell (n_r=0, l=1) state. Added a physics note explaining why. Coordinate Reference (Section 12) updated to remove the incorrect "node at 1.2 fm" entry.

### Finding 5 (HIGH): `ax_mom` log-scale y-axis has no tick marks or labels
- **Change:** Section 2.2 now configures `ax_mom` with `LogLocator` and `LogFormatterSciNotation` for the y-axis after `set_yscale('log')`. The general axes loop no longer touches `ax_mom` -- left panels and right panel are configured separately. Added to checklist.

### Finding 6 (HIGH): Cross-axes arrow endpoints don't land on actual curves
- **Change:** Section 8.1 now includes explicit endpoint computation from the functional forms. Arrow 1 target changed from `(0.8, 0.8)` to `(0.8, 1.5)` (actual `rho_meanfield(0.8)` value). Arrows 2 and 3 use programmatic curve evaluation. Added a `curve_value_at()` helper function. Implementation note added to verify endpoints against actual curve arrays.

### Finding 7 (HIGH): Panel label "(a)" collides with "n-n interaction" text
- **Change:** Moved "n-n interaction" from axes fraction y=0.95 to y=0.86 (12% gap, ~0.19 inches clearance). Section 7.2 table and code updated. Coordinate Reference (Section 12) updated.

### Finding 8 (HIGH): Horizontal axis arrows don't coincide with zero-energy lines
- **Change:** Section 5 completely rewritten. Horizontal arrow y-positions are now computed from data limits to pass through y=0 exactly: `y_zero_frac_nn = 0.2857` (for [-120, 300]) and `y_zero_frac_nuc = 0.7333` (for [-55, 20]). The separate `axhline(y=0)` calls are removed -- the horizontal arrow itself serves as the zero-energy reference.

### Finding 9 (HIGH): Missing scipy dependency
- **Change:** Section 6.6 now uses a pure-numpy Gaussian smoothing function (`np.convolve` with a Gaussian kernel) instead of `scipy.ndimage.gaussian_filter1d`. No external dependencies beyond numpy and matplotlib. Added to checklist.

### Finding 10 (HIGH): Contradictory axis label text (`r"$r$"` vs `r"$r$ [fm]"`)
- **Change:** Unified to `r"$r$ [fm]"` everywhere (Section 5 code and Section 7.2 table). The code in Section 5 now writes `r'$r$ [fm]'` with fontsize=12, matching the table specification.

### Finding 11 (MEDIUM): No `V(r)` label code provided
- **Change:** Section 7.2 now includes explicit code for both `V(r)` labels using `ax.text()` with `transform=ax.transAxes` and `clip_on=False` (since the negative x-coordinate places them outside the axes bounds).

### Finding 12 (MEDIUM): Smoothed total rho(p) obscures mean-field component
- **Change:** Section 4 z-order table revised. Individual rho components now have **zorder=5** (above total), while the total curve has **zorder=4** (below). This ensures the orange dashed mean-field line remains visible where it overlaps with the red total below k_F. Added explanatory note in Sections 4 and 6.6.

### Finding 13 (MEDIUM): SRC wavefunction color implies exclusive tensor association
- **Change:** SRC wavefunction color changed from blue (`#0077BB`) to teal (`#009988`) throughout Sections 3, 6.3, and 8.2. This correctly associates the wavefunction with ALL SRC correlations (both tensor and central) rather than implying exclusive association with the tensor channel (which is blue). Added rationale note in Section 3.
