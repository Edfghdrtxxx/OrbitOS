---
type: wiki
tags:
  - nuclear-physics
  - beamline
  - RIKEN-RIBF
  - instrumentation
created: 2026-03-13
---
# OEDO
## Definition

**OEDO** (*Optimized Energy-Degrading Optics for RI beams*) is a beamline system at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN RIBF]] that decelerates [[Radioactive Isotope Beam|RI beams]] from ~200 MeV/u (as produced by [[BigRIPS]]) down to 10--50 MeV/u while preserving beam quality. Construction was completed in March 2017 with first beam in June 2017. It feeds the [[SHARAQ Spectrometer]] downstream.

## Problem Solved

In-flight RI beam facilities produce secondary beams at high energy via projectile fragmentation or in-flight fission. Many reaction studies -- [[Transfer Reactions|nucleon transfer]], sub-barrier Coulomb excitation, [[Surrogate Reaction|surrogate reactions]] -- require energies of 10--50 MeV/u. Conventional thick degraders destroy beam quality through emittance blow-up and straggling. OEDO achieves **achromatic energy degradation** that preserves beam optics.

## Three Key Components

1. **Angle-tunable wedge degrader** at the dispersive focus of BigRIPS: exploits position-momentum correlation so higher-momentum particles lose more energy, yielding achromatic output
2. **RF deflector**: converts longitudinal phase-space correlations (time-of-flight vs. energy) into transverse spatial correlations that downstream optics can correct. Also filters contaminants by mass-to-charge ratio $A/Q$ (wrong $A/Q$ particles arrive at different RF phases and receive off-phase kicks)
3. **Two sets of superconducting quadrupole triplet magnets**: refocus the decelerated beam onto the secondary target at the S0 focal point

## Performance

| Parameter | Value |
|-----------|-------|
| Momentum acceptance | $\pm 2\%$ |
| Beam spot at S0 | $< 10$ mm |
| Transmission (BigRIPS to S0) | ~18% |
| Output energy | 10--50 MeV/u (tunable) |

## Physics Enabled

- Nucleon transfer $(d,p)$, $(p,d)$ on unstable nuclei in inverse kinematics
- Sub-barrier Coulomb excitation for $B(E2)$ measurements
- [[Surrogate Reaction|Surrogate reactions]] for astrophysical cross sections ([[r-process Nucleosynthesis|r-process]])

## Related Concepts

- [[BigRIPS]]
- [[SHARAQ Spectrometer]]
- [[Radioactive Isotope Beam]]
- [[Quadrupole Magnet]]
- [[Transfer Reactions]]
- [[UTokyo CNS]]

## References

- Imai et al., PTEP 2019, 023D02 -- comprehensive OEDO technical paper
