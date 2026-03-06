---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - accelerator-physics
created: 2026-03-06
last_reviewed:
next_review: 2026-03-06
review_interval: 0
---
# Magnetic Rigidity

## Definition

Magnetic rigidity ($B\rho$) is the product of magnetic field strength $B$ and the radius of curvature $\rho$ of a charged particle's trajectory in that field. It equals the particle's momentum per unit charge: $B\rho = p/(Ze)$, and at a given velocity is proportional to $A/Z$.

## Key Points

- Defined as $B\rho = \frac{mv}{Ze} = \frac{p}{Ze}$, where $m$ is the relativistic mass, $v$ is velocity, and $Ze$ is the ion charge
- At fixed velocity, $B\rho \propto A/Z$ — this makes $A/Z$ the governing separation parameter in $B\rho$-[[Time-of-Flight|TOF]] identification (not in [[dE-dx]]-based [[Particle Identification|PID]])
- Fragment separators like [[BigRIPS]] use dipole magnets to select ions by $B\rho$, combined with [[Time-of-Flight|TOF]] and [[dE-dx|ΔE]] for full isotope identification
- Units: Tesla·meter (T·m)

## Examples

- At [[BigRIPS]], the first-stage dipoles set a $B\rho$ window to select a band of exotic nuclei; downstream detectors then resolve individual isotopes via [[Time-of-Flight|TOF]] and [[dE-dx]]
- Two isotopes with the same $A/Z$ (e.g., deuteron $d$ and ${}^4\mathrm{He}$, both $A/Z=2$) cannot be separated by $B\rho$ alone — additional [[dE-dx]] or [[Energy Resolution|energy]] measurement is required

## Related Concepts

- [[Time-of-Flight]]
- [[Particle Identification]]
- [[BigRIPS]]
- [[dE-dx]]
- [[Lorentz Force]]
- [[Isotope Separation]]

## References

- Tarasov, O. B. & Bazin, D. (2008). *LISE++: Radioactive beam production with in-flight separators*. NIM B 266, 4657.
