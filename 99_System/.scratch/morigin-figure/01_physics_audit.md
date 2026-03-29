# Physics Accuracy Audit — MORIGIN Figure (Revised)

## Summary Verdict
The figure captures the correct qualitative narrative — short-range correlations (SRC) in the bare NN interaction generate the high-momentum tail in nuclear momentum distributions — but contains several labeling issues, visual ambiguities, and one notable omission (log-scale axis markings) that should be addressed before use in a presentation or publication.

## Detailed Findings

### NN Potential (labeled "n-n interaction")
**Assessment: Qualitatively correct; labeling is misleading.**

The depicted potential shows the essential features of a realistic bare NN interaction:
- **Short-range repulsive core** (positive, rising steeply at small r): Correct. This represents the hard/soft core present in all modern NN potentials (AV18, Reid, CD-Bonn, etc.), originating from quark-level Pauli repulsion and vector meson exchange.
- **Intermediate-range attraction** (negative well at ~1 fm): Correct. This is the dominant binding mechanism, arising primarily from two-pion exchange (sigma meson exchange in older models).
- **Long-range tail**: The potential appears to flatten toward zero at large r, which is qualitatively correct (one-pion exchange tail).
- **Blue curve**: A blue oscillatory curve is overlaid on the potential and extends through the attractive well and beyond. This likely represents the relative wavefunction (or a correlated pair wavefunction) of two nucleons. It shows the characteristic suppression at short range (wound due to the repulsive core) followed by oscillatory behavior through the attractive well. The depiction is qualitatively reasonable for a schematic.

**Issues:**
1. **"n-n interaction" label is misleading.** SRC are overwhelmingly dominated by neutron-proton (np) pairs, not neutron-neutron (nn) pairs, due to the tensor force operating primarily in the T=0 (isospin singlet) channel. The np/pp SRC pair ratio is approximately 20:1 from JLab experiments (Subedi et al. 2008, Hen et al. 2014). If this figure illustrates the origin of SRC in general, the label should read **"NN interaction"** or **"nucleon-nucleon interaction."** Labeling it "n-n" misrepresents which channel dominates SRC physics.
2. The potential curve is somewhat schematic — the attractive well appears slightly too broad relative to the repulsive core. In realistic potentials (e.g., AV18), the zero-crossing from repulsion to attraction occurs at r ~ 0.5-0.7 fm, the attractive minimum is near r ~ 0.8-1.0 fm at roughly -100 MeV, and the repulsive core reaches several hundred MeV to ~2 GeV at r ~ 0.3 fm. The figure's proportions are acceptable for a schematic but could be sharpened.

### Nuclear Mean-Field
**Assessment: Qualitatively correct; wavefunction details require clarification.**

- **Potential shape**: The black curve labeled "nuclear potential" shows a Woods-Saxon-like profile — a flat bottom with smooth surface diffuseness. This is correct for the nuclear mean-field (real part of the optical potential or shell-model potential). The depth appears reasonable (~50 MeV is typical for the central Woods-Saxon well).
- **Horizontal lines**: These represent discrete bound-state energy levels within the well. Their spacing appears qualitatively reasonable.
- **Wavefunctions (red curves)**: Two bound-state wavefunctions are shown:
  - The lower-energy state (deeper in the well) shows two interior peaks — consistent with a state having one radial node.
  - The higher-energy state (near the top of the well) shows one interior peak — consistent with a nodeless state.

**Issues:**
1. **Node counting depends on quantum numbers.** For states of the **same** orbital angular momentum l, the most deeply bound state in a Woods-Saxon potential is nodeless (1s, 1p, 1d...), and higher-n states have progressively more radial nodes while being less deeply bound. Under this same-l assumption, the figure's depiction (deeper state with more oscillations) would be inverted. **However**, if the two wavefunctions represent different l values — for example, the deeper state being 2s (one radial node) and the shallower state being 1p or 1d (nodeless for that l) — then the node structure could be correct. The figure does not label the quantum numbers, so neither interpretation can be ruled out. **Recommendation**: Add quantum number labels (e.g., nl_j) to the energy levels and wavefunctions. If both states share the same l, the wavefunctions should be swapped so the deeper state is nodeless.
2. **Decay outside the well**: The wavefunctions show exponential decay beyond the nuclear surface (classically forbidden region), which is correct. For deeply bound states, the decay should be rapid; for weakly bound states, it should extend further. This appears roughly correct.

### Momentum Distribution
**Assessment: Mostly correct; some quantitative and labeling concerns.**

The right panel shows rho(p) on a log scale vs momentum in fm^-1, which is the standard way to display nuclear momentum distributions.

- **Overall shape**: The red/orange curve dominates at low momentum and falls off, while the blue curve rises to dominate at high momentum. This correctly captures the two-component structure: mean-field (below k_F) and SRC (above ~2 fm^-1).
- **Fermi surface location**: The red/orange distribution appears to peak near ~1 fm^-1 and begin its steep descent around 1-1.5 fm^-1. The Fermi momentum for symmetric nuclear matter is k_F ~ 1.36 fm^-1 (~270 MeV/c). For finite nuclei, k_F varies but is in the range 1.0-1.4 fm^-1. The figure's depiction is consistent with this.
- **SRC high-momentum tail**: The blue curve rises from negligible values at low momenta, becomes visible around ~2 fm^-1, and appears to be the dominant contribution by ~3 fm^-1, extending to ~4 fm^-1. This general behavior is physically correct — SRC are expected to dominate the momentum distribution above ~2 fm^-1 (~400 MeV/c, approximately 1.5 k_F).
- **Green curve**: A green contribution extends relatively flat across the ~2-4 fm^-1 range at lower magnitude than the blue curve. This likely represents intermediate-range correlations, potentially the tensor-force contribution at moderate momenta. Its placement is reasonable.
- **Orange arrow**: An orange arrow points horizontally from ~1 to ~2 fm^-1 along the bottom of the plot. Its meaning is somewhat ambiguous — it may indicate the transition region between mean-field and SRC-dominated regimes, or the momentum range probed by specific knockout reactions.

**Issues:**
1. **Blue curve turnover**: The blue (SRC) curve represents the SRC *component* of the momentum distribution. As an isolated component, it is expected to rise from negligible values at low momenta, peak somewhere around 1.5-2.5 fm^-1 (where SRC become the dominant contribution), and then fall off at higher momenta. At asymptotically large k, the total momentum distribution tail should fall off approximately as ~k^-4 (related to Tan's contact in nuclear systems, though the nuclear case is more complex than cold atoms due to finite-range interactions and the tensor force). In the figure, the blue curve appears to still be rising or flat near ~3 fm^-1 with no clear turnover within the plotted range. **The blue curve should show a visible turnover and decay by 3-4 fm^-1**, rather than appearing to still be increasing at the edge of the plot.
2. **Red curve at high momentum**: The red (mean-field) contribution crosses the blue and green curves around 2 fm^-1 and continues to fall steeply. The crossover point is approximately correct, and the steeper falloff of the mean-field contribution compared to the SRC tail is correctly depicted.
3. **Missing vertical axis markings**: The rho(p) axis is labeled "(log)" but has no tick marks, decade labels, or scale indication. For a physics figure, this makes it impossible to assess whether the relative magnitudes of mean-field and SRC components are quantitatively reasonable. The SRC contribution accounts for roughly 20-25% of nucleons (based on JLab/BNL data), corresponding to roughly one order of magnitude below the peak of the mean-field distribution. **Quantitative axis markings should be added**, spanning at least 3-4 decades.
4. **Missing label for k_F**: The Fermi momentum k_F is a critical reference point and should be explicitly marked on the momentum axis (e.g., dashed vertical line at k_F ~ 1.4 fm^-1 with label).
5. **The total distribution**: In a proper plot, one usually shows the total rho(p) as a single curve that transitions smoothly from mean-field-dominated to SRC-dominated. Here the separate color-coded contributions are pedagogically useful but should be labeled more clearly.

### Arrows and Labels
**Assessment: Partially correct; the green arrow target was previously misidentified.**

1. **Green arrow in NN potential (top-left)**: Looking at the figure, the green arrow points downward at the **repulsive core** region — the high positive-V part of the potential at small r, near the peak of the repulsive wall. This is distinct from the attractive well below it. A green connecting line runs from this region of the NN potential to the green curve in rho(p). **Interpretation**: The green arrow marks the repulsive core region, and the green connecting line maps it to the intermediate-momentum green contribution in rho(p). This is physically reasonable if the green curve represents contributions from the outer part of the repulsive core / inner attractive well transition region, which would map to intermediate momenta via Fourier transform. However, this interpretation places both the green and blue arrows in or near the short-range region, which somewhat undermines the pedagogical separation between different coordinate-space origins of different momentum-space features.

2. **Blue arrow in NN potential**: Points into the **attractive well** region (below the zero line), not the repulsive core. This is the intermediate-range attractive region (~0.7-1.4 fm). If the blue arrow is meant to indicate the origin of the SRC high-momentum tail, its placement in the attractive well is physically meaningful but requires nuance: while the short-range repulsive core generates the highest-momentum components, the **tensor force**, which operates primarily at intermediate range (in and around the attractive well), is actually the **dominant** source of SRC in nuclear matter, particularly for np pairs in the deuteron-like (T=0, S=1) channel (Schiavilla et al. 2007, Alvioli et al. 2008). The blue arrow pointing at the attractive well region is therefore not necessarily wrong — it may be highlighting that the tensor force, centered in this range, drives the dominant SRC contribution. However, the figure would benefit from clarifying whether the blue arrow indicates the tensor-force origin of SRC or the repulsive-core origin, as these produce SRC at somewhat different momentum scales.

3. **Large blue arrow on rho(p)**: Points at the high-momentum region (~3 fm^-1). This correctly identifies the SRC-dominated high-momentum tail. This is accurate.

4. **Connecting lines**: Thin lines connect coordinate-space features (NN potential) to momentum-space signatures (rho(p)):
   - A green line connects from the NN potential region (near the repulsive core) to the green curve in rho(p) at intermediate momenta.
   - A purple/blue line connects from the NN potential's attractive well region to the blue high-momentum curve in rho(p).
   The conceptual mapping — short-range features in r-space correspond to high-momentum features in k-space via Fourier transform — is correct. However, the exact endpoints of these thin lines are somewhat ambiguous in the schematic, and they serve primarily as visual guides rather than precise quantitative Fourier-transform mappings. **The lines' ambiguity should be acknowledged**, and if the figure is recreated, clearer endpoints and brief annotations (e.g., "short-range -> high-k") would strengthen the pedagogical value.

5. **Orange arrow on rho(p)**: Points horizontally from ~1 to ~2 fm^-1 along the bottom of the plot. Its meaning is not labeled. It likely indicates the transition region between mean-field and SRC contributions, or the momentum range relevant to specific experimental probes. **This should be explicitly labeled.**

### Conceptual Correctness
**Assessment: The core message is correct.**

The figure correctly conveys the central narrative:
1. The bare NN interaction has a short-range repulsive core and intermediate-range attraction.
2. Nucleons in a nucleus experience a mean-field (Woods-Saxon) potential that determines the bulk single-particle structure.
3. The nuclear momentum distribution has two distinct regimes: a low-momentum region dominated by mean-field physics, and a high-momentum tail generated by short-range correlations in the NN interaction.
4. Coordinate-space features (short-range repulsion, intermediate attraction) map to momentum-space features (high-momentum tail, intermediate contributions) via Fourier transform.

**Conceptual concerns:**
1. The connection between the **two-body** NN potential (top-left) and the **one-body** mean-field potential (bottom-left) is not explicitly explained. The mean field is a self-consistent average of the two-body interactions, and SRC represent the residual beyond-mean-field correlations. This relationship could be made clearer with a brief annotation.
2. The figure does not explicitly show that SRC involve **pairs** of nucleons with large relative momentum and small total (center-of-mass) momentum — a key experimental signature (e.g., from BNL/JLab SRC experiments).
3. The tensor force contribution (dominant source of SRC in the 1-3 fm^-1 region, particularly from the np T=0 channel) is not explicitly distinguished from the central short-range repulsion. Both contribute to SRC, but at different momentum scales and through different physical mechanisms.

## Recommended Corrections

1. **Rename "n-n interaction" to "NN interaction"**: SRC are dominated by np pairs (np/pp ratio ~20:1). The label "n-n" (neutron-neutron) misrepresents the dominant channel. Use "NN interaction" or "nucleon-nucleon interaction" for generality.

2. **Clarify quantum number labels in mean-field panel**: Add explicit quantum number labels (e.g., nl_j) to the energy levels and wavefunctions. If both states have the same l, swap them so the more deeply bound state is nodeless. If they represent different l values, the current depiction may be correct — but this must be stated.

3. **Show visible turnover in the blue SRC curve**: The blue (SRC component) curve should peak around 1.5-2.5 fm^-1 and then show clear falloff through 3-4 fm^-1. It is correct for the SRC component to rise from negligible values at low momenta, but the curve should visibly turn over and decay within the plotted range, not appear to still be rising at 3-4 fm^-1.

4. **Add vertical axis markings to rho(p)**: Include tick marks and decade labels on the log-scale vertical axis. The plot should span approximately 3-4 decades, with the SRC contribution peaking roughly one order of magnitude below the mean-field peak. Without axis markings, quantitative accuracy cannot be assessed.

5. **Mark k_F on the momentum axis**: Add a dashed vertical line with label at k_F ~ 1.4 fm^-1, as this is the critical reference scale separating mean-field from correlation-dominated regions.

6. **Label the orange arrow**: Clarify what the orange horizontal arrow on rho(p) represents (e.g., "transition region," "experimental probe range," or the specific reaction kinematics being referenced).

7. **Clarify arrow-to-curve mapping in the NN potential panel**: The green arrow (pointing at the repulsive core) and blue arrow (pointing at the attractive well) create a color-coded mapping to the rho(p) curves. Make this mapping explicit with annotations. If the blue arrow is meant to highlight the tensor-force origin of SRC (which operates in the attractive well region), state this; if it is meant to indicate the repulsive core, reposition it accordingly.

8. **Add annotations to connecting lines**: Label the thin connecting lines between coordinate-space and momentum-space panels. Currently their endpoints are ambiguous. Clearer lines with brief labels (e.g., "tensor/intermediate-range -> SRC tail," "repulsive core -> high-k") would strengthen the figure's pedagogical value.

9. **Clarify two-body vs. one-body relationship**: Add a brief annotation or label indicating that the mean-field potential (bottom-left) arises from averaging the NN interaction (top-left), and that SRC are the residual beyond-mean-field correlations that generate the high-momentum tail.

## Revision Notes

This audit was revised to address 8 findings from a physics review. Changes and rationale:

### Finding 1: Blue arrow claim oversimplified
**Accepted with modification.** The original audit stated the blue arrow "should point at the repulsive core, not the attractive well" and recommended repositioning it. The reviewer correctly noted that the tensor force, which operates at intermediate range (in and around the attractive well at ~0.7-1.4 fm), is the *dominant* source of SRC, particularly for np pairs in the T=0, S=1 channel (Subedi et al. 2008, Hen et al. 2014). The revised audit no longer asserts the blue arrow is simply wrong. Instead, it notes that the blue arrow pointing at the attractive well is physically defensible if it highlights the tensor-force origin of SRC, but the figure should clarify this interpretation.

### Finding 2: Wavefunction node-counting needs qualification
**Accepted.** The original audit asserted the node structure was "physically backwards" and recommended swapping the wavefunctions as the primary fix. The reviewer correctly noted this is only true if both states share the same orbital angular momentum l. If the states represent different l values (e.g., 2s and 1p), the node structure could be correct. The revised audit presents both possibilities and recommends adding quantum number labels as the primary fix rather than blindly swapping.

### Finding 3: Blue curve in rho(p) is not a simple plateau — original audit mischaracterized the issue
**Accepted.** The original audit claimed the blue SRC curve showed "a plateau or rise" and called for it to be "monotonically decreasing" above ~2 fm^-1, labeling the current behavior "a significant physics inaccuracy." The reviewer correctly identified that the blue curve represents the SRC *component* (not the total distribution), so it is expected to rise from negligible values at low momenta, peak, and then fall off. The ~k^-4 Tan contact scaling applies to the total distribution's asymptotic tail, not to the isolated SRC component over the 2-4 fm^-1 range. The real issue is that the turnover is not visible within the plotted range. The revised audit corrects this: the blue curve should peak around 1.5-2.5 fm^-1 and show visible decay by 3-4 fm^-1, rather than being monotonically decreasing from 2 fm^-1.

### Finding 4: Green arrow target misidentified
**Accepted.** The original audit stated the green arrow "points downward into the attractive well." Upon re-examining the figure, the green arrow points at the **repulsive core** (the positive-V peak at small r), not the attractive well. The revised audit corrects the green arrow's target and reinterprets the color-coded mapping accordingly.

### Finding 5: Missing rho(p) vertical axis markings
**Accepted as new finding.** The original audit noted the log scale but did not flag the absence of tick marks, decade labels, or quantitative scale. The revised audit adds this as a new issue with guidance that the SRC contribution should peak roughly one order of magnitude below the mean-field peak (~20-25% of nucleons per JLab/BNL data) and the axis should span 3-4 decades.

### Finding 6: "n-n" label should be "NN"
**Accepted as new finding.** The original audit used "n-n" throughout without flagging that this label is misleading for a figure about SRC. Since SRC are overwhelmingly dominated by np pairs (np/pp ratio ~20:1), the label should be "NN interaction." This is now the first recommended correction.

### Finding 7: Recommendation specificity
**Partially accepted.** The reviewer noted that recommendations 4-8 were too vague for implementation. The revised audit adds more concrete guidance where possible (e.g., specifying dashed vertical line for k_F, decade span for axis markings, specific label text for connecting lines). Some recommendations remain somewhat qualitative because the figure is a schematic and exact implementation depends on the creator's design choices.

### Finding 8: Connecting lines interpretation needs more scrutiny
**Accepted.** The original audit asserted specific interpretations of the connecting lines' endpoints. The revised audit acknowledges the ambiguity of the thin lines in the schematic and presents the interpretation as likely rather than certain. It explicitly notes that the lines serve as visual guides rather than precise quantitative Fourier-transform mappings.
