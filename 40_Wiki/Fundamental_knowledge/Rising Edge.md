---
area: "[[Physics]]"
tags: [signal-processing, timing, waveform]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Rising Edge

## Definition

The Rising Edge is the leading portion of a detector signal pulse during which the voltage (or current) transitions from baseline to peak amplitude — its slope and shape determine how timing information is extracted and are the origin of [[Time Walk]] in threshold-based systems.

## Key Points

- **Slope dependence**: Faster rising edges (shorter [[Rise Time|rise times]]) yield more precise timing because the threshold crossing point is better defined, reducing sensitivity to noise and amplitude variations
- **Rise time**: Defined as the interval for the pulse to go from 10% to 90% of its peak; typical values range from ~1 ns ([[Scintillation Detector|fast scintillators]]) to ~µs ([[Ionisation Chamber|ionisation chambers]])
- **Timing extraction**: A [[Leading-Edge Discriminator]] fires when the rising edge crosses a fixed threshold, while a [[Constant Fraction Discriminator]] triggers at a constant fraction of the peak, making the trigger point independent of [[Pulse Height]]
- **Time Walk mechanism**: At a fixed threshold, a large-amplitude pulse's rising edge crosses earlier than a small pulse's, producing the amplitude-dependent timing shift known as [[Time Walk]]

## Examples

- In a [[Photomultiplier Tube]]-based [[Scintillation Detector]], the rising edge is ~2–5 ns; a [[Leading-Edge Discriminator]] set at 50 mV will fire several nanoseconds earlier for a 1 V pulse than for a 100 mV pulse
- [[FPGA]]-based digital pulse processing samples the rising edge at high rate (e.g. 1 GSPS) to apply digital [[Constant Fraction Discriminator|CFD]] algorithms, recovering sub-sample [[Time Resolution]]

## Related Concepts

- [[Time Walk]]
- [[Leading-Edge Discriminator]]
- [[Constant Fraction Discriminator]]
- [[Pulse Height]]
- [[Time Resolution]]
- [[Constant Ratio Timing]]
- [[Rise Time]]
- [[Jitter]]
- [[Ionisation Chamber]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 17
- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 14
