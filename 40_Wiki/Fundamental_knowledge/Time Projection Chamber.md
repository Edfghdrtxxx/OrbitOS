---
area: "[[Physics]]"
tags: [detector-physics, nuclear-instrumentation, particle-tracking]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Time Projection Chamber

## Definition

A Time Projection Chamber (TPC) is a gaseous (or liquid) particle detector that reconstructs 3D charged-particle trajectories by combining 2D position readout from a segmented anode with drift-time measurement along the electric field direction, providing continuous tracking with particle identification via specific energy loss ($\mathrm{d}E/\mathrm{d}x$).

## Key Points

- **Operating principle**: Charged particles ionize the gas; liberated electrons drift in a uniform electric field toward the readout plane; the 2D hit position combined with measured drift time yields full 3D track reconstruction
- **Particle identification**: The $\mathrm{d}E/\mathrm{d}x$ (energy loss per unit length) measured along the track follows the [[Bethe-Bloch Formula]] and distinguishes particle species — a core technique for particle identification in direct reactions
- **Readout technologies**: Pad planes, [[Micromegas]], [[GEM Detector|GEM]]-based amplification stages; digitized by [[ADC]]s and processed in [[FPGA]] firmware with [[Constant Ratio Timing|digital CFD]] for precise drift-time extraction
- **Key parameters**: Drift velocity (depends on gas mixture and field), diffusion (limits spatial resolution), and gain (from gas amplification)

## Examples

- The ALICE TPC at CERN is one of the largest TPCs ever built ($90\;\text{m}^3$ gas volume), providing tracking and $\mathrm{d}E/\mathrm{d}x$-based particle identification for heavy-ion collisions at the LHC
- At IMP-CAS, TPCs are used in direct-reaction experiments to reconstruct light-ion tracks and measure angular distributions for nuclear structure studies

## Related Concepts

- [[Constant Ratio Timing]]
- [[FPGA]]
- [[Ionizing Radiation]]
- [[Time-of-Flight]]
- [[Scintillation Detector]]
- [[Bethe-Bloch Formula]]
- [[GEM Detector]]
- [[Micromegas]]

## References

- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer
- Nygren, D. R. (1974). "The Time Projection Chamber: A New 4π Detector for Charged Particles." *PEP Summer Study*, PEP-0144
