---
area: "[[Physics]]"
tags: [nuclear-instrumentation, signal-processing, timing]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Time Walk

## Definition

Time Walk is the systematic shift in measured signal timing caused by variations in pulse amplitude — larger pulses cross a fixed threshold earlier than smaller pulses, introducing an amplitude-dependent timing error in nuclear and particle physics detectors.

## Key Points

- **Cause**: A fixed-level (leading-edge) discriminator fires at different points on the rising edge depending on [[Pulse Height|pulse height]], producing timing offsets that correlate with signal amplitude
- **Magnitude**: Can range from sub-nanosecond to tens of nanoseconds depending on detector type and signal [[Dynamic Range|dynamic range]]
- **Correction**: Eliminated by [[Constant Ratio Timing]] ([[Constant Fraction Discriminator]]), or compensated post-hoc via amplitude-dependent correction curves
- **Impact**: Degrades [[Time Resolution|time resolution]] in [[Time-of-Flight]] measurements, [[Coincidence Detection]], and any timing-critical experiment

## Examples

- In a [[Scintillation Detector]] system, [[Gamma Ray|gamma rays]] of different energies produce pulses of varying amplitude; without correction, a leading-edge discriminator introduces time walk of several nanoseconds between low- and high-energy events
- In [[Time Projection Chamber]] pad electronics, time walk on [[Drift Time|drift-time]] measurements distorts [[Track Reconstruction|reconstructed particle tracks]] unless corrected by a digital CFD in [[FPGA]] firmware or offline calibration

## Related Concepts

- [[Constant Ratio Timing]]
- [[Time-of-Flight]]
- [[Coincidence Detection]]
- [[Scintillation Detector]]
- [[Time Projection Chamber]]
- [[Leading-Edge Discriminator]]
- [[Time Resolution]]
- [[Dynamic Range]]
- [[Drift Time]]
- [[Gamma Ray]]
- [[Pulse Height]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 17 (Pulse timing)
- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 14
