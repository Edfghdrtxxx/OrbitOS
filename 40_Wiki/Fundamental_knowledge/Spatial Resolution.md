---
area: "[[Physics]]"
tags: [detector-performance, tracking, instrumentation]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Spatial Resolution

## Definition

Spatial Resolution is the minimum distance over which a detector can distinguish two separate interaction points or particle tracks, determining the precision of position-sensitive measurements in nuclear and particle physics experiments.

## Key Points

- **Quantification**: Reported as the RMS or FWHM of the point-spread function; typical values range from ~µm (silicon trackers) to ~mm ([[Time Projection Chamber|TPCs]], [[Micromegas]])
- **Limiting factors in gas detectors**: [[Diffusion]] of drift electrons, [[Drift Time]] measurement precision (affected by [[Time Walk]] and [[Jitter]]), pad/strip pitch, and [[Electric Field]] non-uniformities
- **Along the drift axis**: In a [[Time Projection Chamber]], spatial resolution along the field direction is \(\sigma_z = v_d \cdot \sigma_t\), coupling [[Drift Velocity]] and [[Time Resolution]] directly
- **Transverse to drift**: Determined by the readout segmentation (pad size, strip pitch) and charge-sharing between adjacent electrodes, improved by centre-of-gravity algorithms

## Examples

- The ALICE TPC achieves ~0.8 mm spatial resolution along the drift axis and ~0.3 mm in the pad-row direction, enabling clean [[Track Reconstruction]] in high-multiplicity heavy-ion collisions
- A [[Micromegas]] detector with 250 µm strip pitch achieves ~80 µm spatial resolution via charge interpolation, suitable for [[Particle Identification]] in fixed-target experiments

## Related Concepts

- [[Time Resolution]]
- [[Drift Time]]
- [[Diffusion]]
- [[Track Reconstruction]]
- [[Time Projection Chamber]]
- [[Micromegas]]
- [[GEM Detector]]

## References

- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer — Ch. 6
- Sauli, F. (2014). *Gaseous Radiation Detectors*. Cambridge University Press — Ch. 8
