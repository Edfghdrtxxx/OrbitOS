# Differentiation Cross-Check

## Summary
**4 of 6 suggestions implemented** (1 fully, 2 partially, 1 implicitly addressed; 2 not implemented)

## Per-Suggestion Assessment

### Suggestion 1: Add quantitative annotations (energy/distance scales, k_F marker)
- **Status:** Partial
- **Evidence:**
  - **k_F marker: Implemented.** Line 320-324 adds a vertical dashed line at k_F = 1.36 fm^-1 with a "$k_F$" text label. Clearly visible in the PDF as a gray dashed vertical line in panel (c).
  - **Energy/distance scales on NN potential: NOT implemented.** The audit suggested labeling the repulsive core radius (~0.5 fm) and well depth (~-40 MeV) on panel (a). Neither panel (a) nor panel (b) has any numerical tick marks or quantitative annotations -- both have their ticks and spines removed (lines 152-157). The axes show only the schematic arrow-style axis lines with "$r$ [fm]" and "$V(r)$" labels but no numbers.
- **Risk if missing:** Low. The k_F marker (the most important quantitative annotation for the momentum panel) is present. The NN potential panel is explicitly schematic, and adding MeV values to an un-calibrated schematic curve could create a false impression of quantitative accuracy. The figure's purpose is conceptual, so omitting energy scales is defensible.

### Suggestion 2: Add nucleus-specific context (label curves with specific nucleus)
- **Status:** Not implemented
- **Evidence:** No nucleus label (e.g., ^12C, ^4He) appears anywhere in the code or the rendered figure. The momentum distribution curves are labeled generically ("Mean-field (IPM)", "Tensor SRC (np)", "Central SRC (pp/nn)"). The Woods-Saxon parameters (V0=50 MeV, R=3.5 fm, a=0.65 fm at line 84) are roughly consistent with a light-to-medium nucleus but are not identified.
- **Risk if missing:** Low. The figure is a general pedagogical schematic, not a calculation for a specific system. Adding a nucleus label to schematic (non-calculated) curves could be misleading. If the thesis chapter discusses a specific nucleus, it may be worth adding, but for a conceptual overview figure, generic labeling is standard.

### Suggestion 3: Include the tensor force (visual indication of tensor contribution)
- **Status:** Implemented
- **Evidence:** The momentum distribution decomposition explicitly includes a "Tensor SRC (np)" component:
  - `rho_src_tensor(k)` function at lines 105-111, described as "Tensor-correlated SRC pairs (np pairs, D-state)"
  - Plotted as a blue dotted line at lines 258-261 with label `r"Tensor SRC ($np$)"`
  - A separate `rho_src_scalar(k)` "Scalar/central SRC (pp/nn pairs)" is plotted at lines 262-265
  - The blue emphasis arrow (lines 406-411, 414-419) visually highlights the tensor/SRC connection
  - In the rendered PDF, the blue dotted "Tensor SRC (np)" curve is clearly distinct from the teal dash-dot "Central SRC (pp/nn)" curve
- **Risk if missing:** N/A -- fully implemented. This is the single strongest differentiation from standard SRC schematics, which typically show an undifferentiated "SRC" region rather than decomposing it into tensor vs. central components.

### Suggestion 4: Add a Fourier transform symbol (FT notation on connecting lines)
- **Status:** Not implemented
- **Evidence:** The three cross-axes ConnectionPatch arrows (lines 356-394) connect the left panels to the right panel but carry no text labels or mathematical notation. No Fourier transform symbol, "FT" label, or $\mathcal{F}$ annotation appears anywhere in the code. Visually, the arrows are plain colored lines with arrowheads.
- **Risk if missing:** Low-Medium. The Fourier transform relationship between coordinate-space and momentum-space is implicit and well-understood by the target audience (nuclear physicists). Adding an FT symbol would be a minor but genuine differentiator from standard schematics. However, the relationship shown is not a literal Fourier transform of the plotted potentials (the momentum distribution arises from the many-body wavefunction, not a direct FT of V(r)), so an FT symbol could be physically misleading. On balance, omitting it avoids a potential physics inaccuracy.

### Suggestion 5: Refine the color-coding logic (clarify blue arrow intent, systematic mapping)
- **Status:** Partial
- **Evidence:**
  - **Systematic color mapping: Implemented.** The code uses a coherent Tol Bright palette (lines 53-59) with clear assignments: indigo for potential curves, teal for SRC wavefunction + central SRC component, orange for mean-field component + connection, blue for tensor SRC component + connection, red for total distribution + MF wavefunction. Each connection arrow color matches its target component curve.
  - **Distinct line styles: Implemented.** Each rho(k) component uses a different linestyle -- dashed (mean-field), dotted (tensor SRC), dash-dot (central SRC), solid (total) -- at lines 254-270.
  - **Blue arrow clarification: Partially addressed.** The two emphasis arrows in panel (a) (teal at r=1.0, blue at r=1.4, lines 399-411) now point at the region where the repulsive core transitions to the attractive well, roughly consistent with the tensor-force interpretation. However, there is no explicit text annotation clarifying that the blue arrow represents the tensor force contribution. The legend in panel (c) implicitly clarifies the color mapping ("Tensor SRC (np)" is blue), but the audit specifically recommended annotating the arrows in panel (a) to clarify intent.
- **Risk if missing:** Low. The legend provides the color-to-physics mapping. A reader can follow the blue connection arrow from panel (a) to the blue dotted "Tensor SRC (np)" curve in panel (c). The intent is recoverable from context, even without an explicit annotation on the panel (a) arrows.

### Suggestion 6: Correct "n-n interaction" label to "NN interaction"
- **Status:** Implemented
- **Evidence:** Line 295-299 explicitly labels the panel as "NN interaction" with a code comment "PHYSICS AUDIT FIX: 'NN interaction' not 'n-n interaction'". Visually confirmed in the PDF -- panel (a) reads "NN interaction" in italic text.
- **Risk if missing:** N/A -- implemented. This was both a physics correction and a differentiation point (removing an erroneous visual difference that could not legitimately count as originality).

## Overall Originality Assessment

The figure implements the most impactful differentiation suggestions:

1. **Tensor/central SRC decomposition (Suggestion 3):** This is the primary differentiator. Standard SRC schematics show a single "SRC" tail; this figure decomposes it into tensor (np) and central (pp/nn) contributions with distinct colors and linestyles. This adds genuine physics depth beyond what typical pedagogical schematics show.

2. **k_F marker (Suggestion 1, partial):** The Fermi momentum marker is present and clearly labeled.

3. **Systematic color-coding with distinct linestyles (Suggestion 5, partial):** The four-component decomposition with four distinct linestyles and a colorblind-friendly palette goes beyond standard schematics.

4. **Corrected NN label (Suggestion 6):** Physics error fixed.

The two unimplemented suggestions (nucleus-specific labeling and FT symbol) are both defensible omissions -- the first risks implying quantitative accuracy for a schematic figure, and the second risks a physics inaccuracy (the momentum distribution is not a direct Fourier transform of V(r)).

**Verdict:** The figure is sufficiently differentiated for thesis use. The tensor/central SRC decomposition in panel (c), combined with the systematic color-coded connections, the SRC pair wavefunction overlay in panel (a), the k_F marker, and the proper attribution, place this figure clearly in "author-created schematic inspired by standard pedagogical devices" territory rather than a close copy. The integrity audit's "Borderline Derivative" rating is adequately addressed by the implemented differentiations.
