---
area: "[[Physics]]"
tags: [electronics, nuclear-instrumentation, signal-processing]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Preamplifier

## Definition

A Preamplifier is the first active electronics stage in a detector readout chain, converting the small current or charge signal from the detector into a voltage pulse with sufficient amplitude and low-impedance drive for subsequent processing — its noise performance dominates the system's [[Energy Resolution]] and [[Signal-to-Noise Ratio]].

## Key Points

- **Types**: Charge-sensitive (integrates detector current; standard for [[HPGe Detector|HPGe]] and semiconductor detectors), current-sensitive (preserves fast timing; used with [[Photomultiplier Tube|PMTs]]), and voltage-sensitive (simple but noisier)
- **Noise contribution**: The equivalent noise charge (ENC) of the preamplifier sets the low-energy threshold and limits [[Energy Resolution]]; cooled FET input stages reduce thermal noise
- **Timing role**: The preamplifier's [[Rise Time]] and bandwidth determine the earliest point at which timing can be extracted from the [[Rising Edge]], directly affecting [[Jitter]] and [[Time Resolution]]
- **Output**: Feeds a shaping amplifier (for spectroscopy) or a [[Constant Fraction Discriminator]] / [[Leading-Edge Discriminator]] (for timing), then to the [[ADC]] or [[DAQ]]

## Examples

- A charge-sensitive preamplifier on an [[HPGe Detector]] integrates ~10⁵ electron-hole pairs from a 1 MeV [[Gamma Ray]], producing a step pulse of ~10 mV that is shaped and digitised by a [[Multichannel Analyzer]]
- In a [[Scintillation Detector]] + [[Silicon Photomultiplier]] system, a trans-impedance preamplifier with < 1 ns [[Rise Time]] preserves the fast [[Rising Edge]] for [[Time-of-Flight]] timing

## Related Concepts

- [[Signal-to-Noise Ratio]]
- [[Energy Resolution]]
- [[Rise Time]]
- [[ADC]]
- [[DAQ]]
- [[Pulse Height]]
- [[Charge-Sensitive Amplifier]]

## References

- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 6–7
- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 16
