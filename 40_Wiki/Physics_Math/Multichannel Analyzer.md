---
area: "[[Physics]]"
tags: [nuclear-instrumentation, spectroscopy, electronics]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Multichannel Analyzer

## Definition

A Multichannel Analyzer (MCA) is an electronic instrument that sorts incoming detector pulses by [[Pulse Height]] into discrete channels, accumulating a [[Pulse Height Spectrum]] — it is the standard tool for energy spectroscopy in nuclear and particle physics.

## Key Points

- **Operating principle**: Each pulse is digitised by an [[ADC]]; the digital value selects a channel (bin) in a histogram memory, which is incremented by one — the result is a counts-vs-channel spectrum
- **Channel count**: Typical MCAs offer 1k–16k channels; more channels improve [[Energy Resolution]] sampling but require longer acquisition times for adequate statistics
- **Modern implementations**: Standalone hardware MCAs are largely replaced by [[FPGA]]-based digital pulse processors that combine [[Preamplifier]] output digitisation, shaping, and MCA functionality in a single module
- **Calibration**: Channel-to-energy mapping is established using known [[Gamma Ray]] sources (e.g., ¹³⁷Cs at 662 keV, ⁶⁰Co at 1173/1332 keV)

## Examples

- An [[HPGe Detector]] paired with a 16k-channel MCA resolves the 1173 and 1332 keV photopeaks of ⁶⁰Co in [[Gamma Spectroscopy]], achieving < 2 keV FWHM [[Energy Resolution]]
- A portable [[Scintillation Detector]] with a 1k-channel MCA is used for field radiological surveys to identify isotopes via their characteristic [[Pulse Height Spectrum|pulse-height spectra]]

## Related Concepts

- [[Pulse Height]]
- [[Pulse Height Spectrum]]
- [[ADC]]
- [[Gamma Spectroscopy]]
- [[Energy Resolution]]
- [[FPGA]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 18
- Gilmore, G. (2008). *Practical Gamma-Ray Spectrometry*, 2nd ed. Wiley — Ch. 4
