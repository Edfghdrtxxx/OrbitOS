---
area: "[[Physics]]"
tags: [electronics, detector, integrated-circuit]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# ASIC

## Definition

An Application-Specific Integrated Circuit (ASIC) is a custom-designed chip optimized for a single function, commonly used for detector readout in particle and nuclear physics experiments. Unlike a general-purpose [[FPGA]], an ASIC trades reconfigurability for superior performance in power consumption, size, and per-channel cost at high volume.

## Key Points

- Chosen over [[FPGA]] when experiments require thousands of readout channels with strict power and space budgets (e.g., vertex detectors at colliders)
- Design cycle is long and expensive (months to years, fabrication masks), so prototyping often begins on an [[FPGA]] before committing to an ASIC
- Integrates analog front-end (preamplifier, shaper) and digital back-end ([[ADC]], [[TDC]], data serializer) on a single die
- Power consumption per channel can be orders of magnitude lower than an equivalent [[FPGA]] implementation
- Once fabricated, functionality is fixed — bugs require a new tape-out, unlike field-programmable alternatives

## Examples

- The GET (General Electronics for TPC) ASIC, designed for readout of [[Time Projection Chamber]] pad planes, integrating charge-sensitive amplifiers and waveform sampling per channel
- NINO and HPTDC ASICs used in [[Time-of-Flight]] detector systems at CERN for sub-25 ps timing resolution

## Related Concepts

- [[FPGA]]
- [[ADC]]
- [[TDC]]
- [[Time Projection Chamber]]
- [[Time-of-Flight]]
- [[Scintillation Detector]]
- [[Leading-Edge Discriminator]]

## References

- Spieler, H. *Semiconductor Detector Systems* — Ch. 7–8 (Front-End Electronics)
- Geronimo, G. D. et al., "Front-end electronics for imaging detectors," *Nucl. Instrum. Methods A*