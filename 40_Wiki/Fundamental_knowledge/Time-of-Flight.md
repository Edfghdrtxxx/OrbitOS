---
area: "[[Physics]]"
tags: [nuclear-instrumentation, particle-identification, measurement-technique]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Time-of-Flight

## Definition

Time-of-Flight (ToF) is a measurement technique that determines a particle's velocity by precisely timing how long it takes to traverse a known distance between two detector stations, enabling mass and [[particle identification]] when combined with momentum information.

## Key Points

- **Principle**: Velocity $v = L / \Delta t$, where $L$ is the flight path and $\Delta t$ is the measured transit time; combined with momentum $p$, particle mass is extracted via $m = p / (\beta\gamma c)$
- **Timing requirements**: Sub-nanosecond time resolution is typically needed, achieved using [[Constant Ratio Timing]] (CFD) or high-resolution [[TDC]]s
- **Detector elements**: Start and stop signals commonly from [[Scintillation Detector|scintillation detectors]], [[Photomultiplier Tube|PMTs]], or micro-channel plates; [[Time Walk]] correction is critical
- **Applications**: Particle identification in nuclear and high-energy physics, PET medical imaging, laser ranging (LIDAR)

## Examples

- In a beam-line experiment, a plastic [[Scintillation Detector|scintillator]] start detector and a downstream stop detector measure ToF over $\sim 1\;\text{m}$ to separate protons, deuterons, and tritons at intermediate energies
- [[Time Projection Chamber]] detectors combine drift-time measurement with external ToF walls for full particle identification in heavy-ion collision experiments

## Related Concepts

- [[Constant Ratio Timing]]
- [[Time Walk]]
- [[Scintillation Detector]]
- [[Photomultiplier Tube]]
- [[Coincidence Detection]]
- [[Time Projection Chamber]]
- [[Particle Identification]]

## References

- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. Springer — Ch. 14 (Particle identification)
- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 17
