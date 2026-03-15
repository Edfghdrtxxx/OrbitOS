---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - radiation-physics
created: 2026-03-06
last_reviewed:
next_review: 2026-03-06
review_interval: 0
---
# Stopping Power

## Definition

Stopping power is the average energy loss per unit path length ($-\mathrm{d}E/\mathrm{d}x$) of a charged particle traversing matter. It is the physical quantity underlying [[dE-dx]] measurements and is described by the [[Bethe-Bloch Formula]] for the electronic (collisional) component.

## Key Points

- **Electronic stopping** dominates at intermediate-to-high energies: energy is transferred to atomic electrons; scales as $Z_\text{proj}^2 / v^2$ at non-relativistic speeds
- **Nuclear stopping** contributes mainly at very low energies (keV/u range) via elastic Coulomb scattering with target nuclei
- The quantity $S = -\mathrm{d}E/\mathrm{d}x$ can be expressed per unit density (mass stopping power, MeV·cm²/g) for material-independent comparisons
- Integrating stopping power over energy gives the [[Range-Energy Relation]], which predicts how far a particle penetrates before stopping
- Tabulated in databases such as SRIM/TRIM and ATIMA, widely used in nuclear and medical physics

## Examples

- A 100 MeV/u ${}^{12}\mathrm{C}$ ion has much higher stopping power in tissue than a proton at the same velocity, due to the $Z^2$ scaling — this underpins heavy-ion radiotherapy
- In [[Particle Identification]], differences in stopping power between isotopes (e.g., ${}^{6}\mathrm{Li}$ vs ${}^{7}\mathrm{Li}$) produce distinct [[dE-dx]] vs $E$ loci in the [[ΔE-E Method]]

## Related Concepts

- [[dE-dx]]
- [[Bethe-Bloch Formula]]
- [[Range-Energy Relation]]
- [[ΔE-E Method]]
- [[Energy Straggling]]
- [[Bragg Curve]]

## References

- Ziegler, J. F. et al. (2010). *SRIM — The Stopping and Range of Ions in Matter*. NIM B 268, 1818.
