---
area: "[[Physics]]"
tags: [electronics, data-acquisition, detector]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# ADC

## Definition

An Analog-to-Digital Converter (ADC) transforms continuous analog signals from detectors into discrete digital values. It is a critical front-end component in nuclear and particle physics data acquisition, feeding digitized waveforms into an [[FPGA]] or [[ASIC]] for real-time digital pulse processing.

## Key Points

- Two key specifications: **resolution** (number of bits, determining the smallest distinguishable voltage step) and **sampling rate** (samples per second, determining time granularity)
- Higher bit-depth improves energy resolution in [[Gamma Spectroscopy]] and particle identification in a [[Time Projection Chamber]]
- Flash ADCs achieve the fastest conversion but use more power; successive-approximation and sigma-delta architectures trade speed for resolution
- Works in tandem with a [[TDC]] — the ADC captures pulse amplitude/shape while the TDC records precise event timing
- Digital output enables sophisticated algorithms (baseline subtraction, pile-up rejection) that are difficult in the analog domain

## Examples

- A 14-bit, 250 MHz ADC sampling waveforms from a [[Scintillation Detector]] for digital pulse-shape discrimination in neutron–gamma separation
- Waveform digitizers in the [[Time Projection Chamber]] at the [[Institute of Modern Physics]], capturing pad signals for track reconstruction via [[FPGA]] firmware

## Related Concepts

- [[FPGA]]
- [[ASIC]]
- [[TDC]]
- [[Scintillation Detector]]
- [[Gamma Spectroscopy]]
- [[Time Projection Chamber]]
- [[Photomultiplier Tube]]
- [[Leading-Edge Discriminator]]

## References

- Knoll, G. F. *Radiation Detection and Measurement*, 4th ed. — Ch. 17 (Pulse Processing)
- Spieler, H. *Semiconductor Detector Systems* — Ch. 8 (Signal Processing)