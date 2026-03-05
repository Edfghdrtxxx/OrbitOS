---
area: "[[Physics]]"
tags: [signal-processing, instrumentation, electronics]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Dynamic Range

## Definition

Dynamic Range is the ratio between the largest and smallest signal amplitudes a measurement system can faithfully process, usually expressed in decibels (dB) or as a dimensionless ratio — it defines the usable signal window of any detector or electronics chain.

## Key Points

- **Expression**: Commonly stated as \(DR = 20 \log_{10}(A_{\max}/A_{\min})\) in dB; a 12-bit [[ADC]] provides ~72 dB dynamic range
- **Limiting factors**: At the low end, electronic noise and [[Dark Count Rate|dark counts]] set the floor; at the high end, saturation or non-linearity caps the ceiling
- **Impact on timing**: A wide dynamic range amplifies [[Time Walk]] in [[Leading-Edge Discriminator|leading-edge discriminators]] because pulses span a larger amplitude spread
- **Design trade-off**: Increasing dynamic range often requires sacrificing [[Energy Resolution]] or timing precision unless compression techniques (logarithmic amplifiers, dual-gain paths) are used
- **Relevance to DAQ**: The [[DAQ]] system's overall dynamic range must match the detector's output span to avoid clipping or underutilisation of digitiser bits

## Examples

- A [[Scintillation Detector]] system measuring [[Gamma Ray|gamma rays]] from 50 keV to 10 MeV needs a dynamic range of ~200:1 (~46 dB), requiring at minimum an 8-bit [[ADC]]
- In a [[Time Projection Chamber]], pad signals can vary over three orders of magnitude depending on particle species, demanding 10+ bit digitisation in the [[FPGA]]-based front-end

## Related Concepts

- [[ADC]]
- [[Energy Resolution]]
- [[Time Walk]]
- [[DAQ]]
- [[Pulse Height]]
- [[Signal-to-Noise Ratio]]

## References

- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 7
- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 16
