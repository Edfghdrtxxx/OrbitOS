---
area: "[[Physics]]"
tags: [spectroscopy, nuclear-instrumentation, data-analysis]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Pulse Height Spectrum

## Definition

A Pulse Height Spectrum is the histogram of [[Pulse Height|pulse heights]] (signal amplitudes) recorded by a [[Multichannel Analyzer]] from a radiation detector, mapping channel number (proportional to energy) against counts — it is the primary output of energy spectroscopy in nuclear and particle physics.

## Key Points

- **Structure**: For a mono-energetic [[Gamma Ray]] source, the spectrum shows a photopeak ([[Photoelectric Absorption]]), a Compton continuum with a Compton edge ([[Compton Scattering]]), backscatter peak, and possible escape peaks ([[Pair Production]] above 1.022 MeV)
- **Energy calibration**: Channel-to-energy conversion uses reference sources with known gamma-ray energies; linearity of the [[ADC]] and gain stability of the [[Preamplifier]] are critical
- **Resolution metric**: The FWHM of the photopeak divided by its centroid energy defines the [[Energy Resolution]] — the narrower the peak, the better the detector can separate nearby lines
- **Background subtraction**: Environmental and cosmic-ray backgrounds produce a continuum beneath spectral features; proper shielding and analysis techniques are needed for accurate peak identification

## Examples

- A ¹³⁷Cs spectrum in an [[HPGe Detector]] shows a sharp 662 keV photopeak (FWHM ~1.5 keV), a [[Compton Scattering|Compton]] edge at ~478 keV, and a backscatter peak at ~184 keV
- In a [[Scintillation Detector]] (NaI:Tl), the same source produces a broader photopeak (FWHM ~45 keV) due to lower [[Energy Resolution]], with the Compton continuum merging into the photopeak base

## Related Concepts

- [[Pulse Height]]
- [[Multichannel Analyzer]]
- [[Energy Resolution]]
- [[Gamma Spectroscopy]]
- [[Compton Scattering]]
- [[Photoelectric Absorption]]
- [[Pair Production]]
- [[Compton Edge]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 10, 12
- Gilmore, G. (2008). *Practical Gamma-Ray Spectrometry*, 2nd ed. Wiley — Ch. 1
