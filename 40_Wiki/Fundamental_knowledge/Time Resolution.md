---
area: "[[Physics]]"
tags: [nuclear-instrumentation, timing, detector-performance]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Time Resolution

## Definition

Time Resolution is the smallest time interval a detection system can reliably distinguish between two separate events, fundamentally limiting the precision of any timing-based measurement in nuclear and particle physics.

## Key Points

- **Quantification**: Typically reported as the FWHM of the time-difference distribution between coincident events, ranging from picoseconds (fast [[Scintillation Detector|scintillators]]) to microseconds (slow gas detectors)
- **Limiting factors**: Detector signal [[Rise Time|rise time]], [[Time Walk]], electronic [[Jitter|jitter]], photoelectron statistics, and [[Dark Count Rate|dark counts]] all degrade time resolution
- **Correction methods**: Using a [[Constant Fraction Discriminator]] or [[Constant Ratio Timing]] removes amplitude-dependent contributions; higher light yield and faster [[Photodetector|photodetectors]] improve intrinsic resolution
- **Relationship to energy**: Better [[Energy Resolution]] often trades off against time resolution because optimising charge collection (slow shaping) conflicts with fast timing

## Examples

- A $\text{BaF}_2$ [[Scintillation Detector]] paired with a [[Photomultiplier Tube]] achieves $\sim 200\;\text{ps}$ FWHM time resolution, enabling sub-nanosecond [[Time-of-Flight]] measurements for [[Particle Identification|particle identification]]
- In a [[Time Projection Chamber]], the time resolution of the pad electronics ($\sim 1$–$10\;\text{ns}$) directly determines the [[Spatial Resolution|spatial resolution]] along the drift axis via the [[Drift Time]]–position relation

## Related Concepts

- [[Time-of-Flight]]
- [[Time Walk]]
- [[Coincidence Detection]]
- [[Constant Fraction Discriminator]]
- [[Dead Time]]
- [[Jitter]]
- [[Drift Time]]
- [[Rise Time]]
- [[Spatial Resolution]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 17
- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. Springer — Ch. 11
