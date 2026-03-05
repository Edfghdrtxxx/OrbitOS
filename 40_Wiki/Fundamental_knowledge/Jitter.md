---
area: "[[Physics]]"
tags: [signal-processing, timing, electronics]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Jitter

## Definition

Jitter is the random, short-term variation in the timing of a signal edge relative to its ideal position, arising from electronic noise and stochastic processes — it sets the irreducible floor of [[Time Resolution]] after all systematic effects like [[Time Walk]] have been corrected.

## Key Points

- **Sources**: Thermal noise in the [[Preamplifier]] and discriminator, photoelectron statistics in [[Scintillation Detector|scintillators]], clock-distribution uncertainties in digital [[DAQ]] systems, and [[Dark Count Rate|dark-count]] pile-up in [[Silicon Photomultiplier|SiPMs]]
- **Quantification**: Measured as the RMS or FWHM of the timing-error distribution; sub-100 ps RMS is typical for fast [[Photomultiplier Tube]]-based systems
- **Relation to slope**: Jitter is inversely proportional to the [[Rising Edge]] slope at the trigger point — faster [[Rise Time|rise times]] and higher [[Signal-to-Noise Ratio]] reduce jitter
- **Mitigation**: Using a [[Constant Fraction Discriminator]] minimises amplitude-dependent contributions; averaging multiple samples in [[FPGA]] firmware further suppresses random jitter

## Examples

- In a [[Time-of-Flight]] system with 200 ps target resolution, the electronics jitter budget must remain below ~100 ps RMS to leave margin for detector contributions
- Clock jitter of ~25 ps RMS on an [[ADC]] sampling clock degrades the effective number of bits (ENOB) and limits [[Dynamic Range]] at high input frequencies

## Related Concepts

- [[Time Resolution]]
- [[Rising Edge]]
- [[Rise Time]]
- [[Signal-to-Noise Ratio]]
- [[Time Walk]]
- [[Clock Distribution]]

## References

- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 14
- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 17
