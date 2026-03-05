---
area: "[[Physics]]"
tags: [electronics, timing, detector]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Leading-Edge Discriminator

## Definition

A leading-edge discriminator is the simplest type of timing discriminator that triggers a logic pulse when an input signal crosses a fixed voltage threshold. Because the trigger point depends on pulse amplitude, it introduces [[Time Walk]] — larger pulses cross the threshold earlier than smaller ones.

## Key Points

- Fires whenever the signal's rising edge exceeds a preset voltage level, producing a digital timing mark
- Susceptible to [[Time Walk]]: amplitude variations shift the apparent arrival time, degrading time resolution
- Contrasted with the [[Constant Fraction Discriminator]], which triggers at a constant fraction of pulse height to eliminate amplitude-dependent walk
- Often paired with [[Constant Ratio Timing]] techniques to partially compensate for walk effects
- Preferred in applications where signal amplitudes are uniform or where simplicity and low cost outweigh precision

## Examples

- A [[Scintillation Detector]] coupled to a [[Photomultiplier Tube]] using a leading-edge discriminator for basic event counting, where nanosecond-level timing accuracy is not critical
- Threshold-based trigger in a [[Gamma Spectroscopy]] system to reject low-energy noise while accepting valid pulses above a set voltage

## Related Concepts

- [[Time Walk]]
- [[Constant Fraction Discriminator]]
- [[Constant Ratio Timing]]
- [[TDC]]
- [[ADC]]
- [[Time-of-Flight]]
- [[Coincidence Detection]]
- [[Scintillation Detector]]
- [[Photomultiplier Tube]]

## References

- Knoll, G. F. *Radiation Detection and Measurement*, 4th ed. — Ch. 17 (Pulse Processing)