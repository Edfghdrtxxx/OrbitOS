---
area: "[[Physics]]"
tags:
  - detector-physics
  - nuclear-instrumentation
  - counting-statistics
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Dead Time

## Definition

Dead time is the minimum time interval after registering an event during which a detector or its associated electronics cannot record another event, leading to systematic count-rate losses that must be corrected in any quantitative measurement.

## Key Points

- **Non-paralyzable (non-extending) model:** The dead window has a fixed duration τ; events arriving during it are simply lost, giving a true rate $n = m / (1 - m\tau)$ where $m$ is the measured rate
- **Paralyzable (extending) model:** Each new event — even if unrecorded — restarts the dead window, so at very high rates the detector can become completely "locked out," with $m = n \, e^{-n\tau}$
- Dead time directly affects [[Coincidence Detection]] by inflating the accidental coincidence rate and reducing the true coincidence efficiency
- Typical dead times range from ~1 µs ([[Scintillation Detector]]s with fast [[Photomultiplier Tube]]s) to ~100 µs ([[Gamma Spectroscopy]] shaping amplifiers)
- Correction is essential for absolute activity measurements in [[Dosimetry]] and [[Neutron Activation]] analysis

## Examples

- A [[Scintillation Detector]] counting a high-activity [[Radioisotope]] source: the measured rate plateaus and then *decreases* at extreme source strengths — the hallmark of paralyzable dead time
- In a [[Time Projection Chamber]] [[DAQ]], the readout digitisation window (~10–100 µs) acts as the dominant dead time contribution per channel

## Related Concepts

- [[Coincidence Detection]]
- [[Scintillation Detector]]
- [[Photomultiplier Tube]]
- [[Gamma Spectroscopy]]
- [[DAQ]]
- [[Particle Identification]]
- [[Dosimetry]]
- [[Radioisotope]]
- [[Neutron Activation]]
- [[Pulse Pileup]]
- [[Count Rate]]

## References

- G.F. Knoll, *Radiation Detection and Measurement*, 4th ed., Wiley
- W.R. Leo, *Techniques for Nuclear and Particle Physics Experiments*, Springer
