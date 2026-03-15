---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - particle-detection
created: 2026-03-06
last_reviewed:
next_review: 2026-03-06
review_interval: 0
---
# dE/dx

## Definition

dE/dx (differential energy loss) is the energy lost by a charged particle per unit path length as it traverses a material. It is the fundamental observable used in [[Particle Identification]] via the [[ΔE-E Method]] and is described theoretically by the [[Bethe-Bloch Formula]].

## Key Points

- For heavy ions at intermediate energies, $\mathrm{d}E/\mathrm{d}x \propto Z^2\,f(E/A)$, where $Z$ is the atomic number and $E/A$ is the energy per nucleon
- The $Z^2$ dependence provides strong element separation; isotope separation within the same $Z$ relies on the weaker mass dependence through [[Stopping Power]] and [[Range-Energy Relation]]
- Measured in detectors such as [[Time Projection Chamber|TPCs]], [[Scintillation Detector|scintillators]], and [[GEM Detector|GEM detectors]], often digitized via [[ADC]] readout
- Combined with total energy $E$, the pair (dE/dx, $E$) forms the basis of [[ΔE-E Method|ΔE-E particle identification]]

## Examples

- In a [[Time Projection Chamber|TPC]], the charge deposited along a particle track is proportional to dE/dx, enabling [[Particle Identification|PID]] by plotting dE/dx vs. residual energy
- [[BigRIPS]] uses stacked ΔE detectors where dE/dx measurements help identify exotic isotopes produced by projectile fragmentation

## Related Concepts

- [[Bethe-Bloch Formula]]
- [[Stopping Power]]
- [[ΔE-E Method]]
- [[Particle Identification]]
- [[Energy Resolution]]
- [[Range-Energy Relation]]
- [[Bragg Curve]]

## References

- Bethe, H. (1930). *Zur Theorie des Durchgangs schneller Korpuskularstrahlen durch Materie*. Annalen der Physik.
- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*. Springer.
