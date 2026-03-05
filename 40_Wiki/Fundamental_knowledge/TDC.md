---
area: "[[Physics]]"
tags: [electronics, timing, detector]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# TDC

## Definition

A Time-to-Digital Converter (TDC) measures the time interval between two logic signals and encodes it as a digital number. It is essential for [[Time-of-Flight]] measurements and [[Coincidence Detection]] in nuclear and particle physics experiments.

## Key Points

- Converts a START–STOP time interval into a digital word with picosecond-to-nanosecond resolution, far finer than a simple clock counter
- Common architectures: delay-line TDC (tapped delay chain), Vernier TDC (dual oscillators), and interpolation-based designs
- Often implemented inside an [[FPGA]] using carry-chain delay elements, or as a dedicated [[ASIC]] for the best resolution and lowest dead time
- Complements the [[ADC]]: the TDC records *when* an event occurred while the ADC records *what* the signal looked like
- Input signals typically come from a discriminator — either a [[Leading-Edge Discriminator]] (simple but affected by [[Time Walk]]) or a [[Constant Fraction Discriminator]] (walk-free)

## Examples

- Measuring particle velocity via [[Time-of-Flight]] between two [[Scintillation Detector]] stations, with a TDC providing ~25 ps bin width for particle identification
- [[Coincidence Detection]] in PET scanners, where paired TDCs timestamp annihilation photon arrivals to localize the source along the line of response

## Related Concepts

- [[Time-of-Flight]]
- [[Coincidence Detection]]
- [[ADC]]
- [[FPGA]]
- [[ASIC]]
- [[Leading-Edge Discriminator]]
- [[Constant Fraction Discriminator]]
- [[Time Walk]]
- [[Scintillation Detector]]

## References

- Henzler, S. *Time-to-Digital Converters*, Springer Series in Advanced Microelectronics
- Knoll, G. F. *Radiation Detection and Measurement*, 4th ed. — Ch. 17 (Pulse Processing)