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
# Range-Energy Relation

## Definition

The range-energy relation connects a charged particle's initial kinetic energy to the total distance (range $R$) it travels before stopping in a material. It is obtained by integrating the inverse of the [[Stopping Power]]: $R = \int_0^{E_0} \left(-\frac{\mathrm{d}E}{\mathrm{d}x}\right)^{-1} \mathrm{d}E$.

## Key Points

- For heavy ions, the relation can be written as $R = \frac{A}{Z^2}\,G(E/A)$, where $G$ is a universal function of energy per nucleon — the scaling factor is **$A/Z^2$**, not $A/Z$
- This $A/Z^2$ scaling means same-$Z$ isotopes have ranges differing only through their mass number $A$, which is the basis for isotope separation in the [[ΔE-E Method]]
- In a [[Time Projection Chamber|TPC]], the measured track length directly samples the range, enabling [[Particle Identification]] when combined with [[dE-dx]] information
- Range straggling (statistical spread around the mean range) limits the precision of range-based identification

## Examples

- In a gas [[Time Projection Chamber|TPC]], a stopping ${}^{7}\mathrm{Li}$ ion has a measurably longer track than ${}^{6}\mathrm{Li}$ at the same initial energy, because $R \propto A$ at fixed $Z$
- Proton therapy treatment planning relies on the range-energy relation to place the [[Bragg Curve|Bragg peak]] precisely at the tumor depth

## Related Concepts

- [[Stopping Power]]
- [[dE-dx]]
- [[Bethe-Bloch Formula]]
- [[ΔE-E Method]]
- [[Time Projection Chamber]]
- [[Bragg Curve]]
- [[Energy Straggling]]

## References

- Ziegler, J. F. et al. (2010). *SRIM — The Stopping and Range of Ions in Matter*. NIM B 268, 1818.
