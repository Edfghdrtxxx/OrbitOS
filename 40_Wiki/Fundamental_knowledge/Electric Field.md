---
area: "[[Physics]]"
tags: [electromagnetism, fundamental-physics, gaseous-detectors]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Electric Field

## Definition

An Electric Field is a vector field that describes the force per unit positive charge at every point in space, produced by charge distributions or time-varying magnetic fields — in detector physics it drives the [[Drift Velocity|drift]] and collection of ionization charges that form the measurable signal.

## Key Points

- **Definition**: \(\vec{E} = -\nabla \phi\) for electrostatic fields, where \(\phi\) is the electric potential; units are V/m (or V/cm in detector literature)
- **Role in gas detectors**: The field strength sets the [[Drift Velocity]] of electrons and ions, determines [[Diffusion]] coefficients, and must be sufficiently uniform to preserve [[Spatial Resolution]] across the active volume of a [[Time Projection Chamber]]
- **Amplification region**: In [[Micromegas]] and [[GEM Detector|GEM]] detectors, a high-field gap (~50–100 kV/cm) triggers electron avalanche multiplication, converting a few primary electrons into detectable charge
- **Field cage**: A precision resistor chain creates a uniform drift field in a [[Time Projection Chamber]]; field distortions from space charge or misalignment degrade [[Track Reconstruction]]

## Examples

- The ALICE TPC operates with a drift field of ~400 V/cm over 2.5 m, maintained by a field cage with < 0.1% non-uniformity to ensure consistent [[Drift Time]]–position mapping
- A [[Micromegas]] amplification gap of 128 µm at ~45 kV/cm provides a gas gain of ~10⁴, producing signals large enough for single-electron detection

## Related Concepts

- [[Drift Velocity]]
- [[Drift Time]]
- [[Time Projection Chamber]]
- [[Diffusion]]
- [[GEM Detector]]
- [[Micromegas]]
- [[Electrostatics]]

## References

- Griffiths, D. J. (2017). *Introduction to Electrodynamics*, 4th ed. Cambridge University Press — Ch. 2
- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer — Ch. 2
