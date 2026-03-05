---
area: "[[Physics]]"
tags: [detector-physics, spectroscopy, nuclear-instrumentation]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Energy Resolution

## Definition

Energy resolution is a detector's ability to distinguish between two closely spaced energy peaks, quantified as the ratio of the [[FWHM]] of a spectral peak to its centroid energy (R = FWHM/E₀), and is the defining performance metric for [[Gamma Spectroscopy]] systems.

## Key Points

- Expressed as a percentage; smaller values indicate better resolution (e.g., [[HPGe Detector]]s achieve ~0.2% at 1332 keV vs ~7% for [[Scintillation Detector|NaI(Tl)]])
- Three main contributions: statistical fluctuations in signal carriers, electronic noise, and incomplete charge/light collection
- Statistical component follows Poisson statistics and improves as 1/√E₀, meaning higher-energy peaks are resolved more sharply in relative terms
- The [[Photomultiplier Tube]] gain variance and [[Scintillation Detector]] light yield directly impact the statistical term in scintillator-based systems
- Critical for resolving closely spaced gamma lines in [[Gamma Spectroscopy]], such as the ⁶⁰Co doublet at 1173 and 1332 keV

## Examples

- An [[HPGe Detector]] with 1.8 keV FWHM at 1332 keV gives R = 0.14%, allowing separation of gamma lines only a few keV apart — essential for complex isotope identification in [[Neutron Activation]] analysis
- A [[Scintillation Detector|NaI(Tl)]] detector with ~7% resolution at 662 keV (¹³⁷Cs) can distinguish the [[Photoelectric Effect|photopeak]] from the Compton edge but cannot resolve lines closer than ~50 keV

## Related Concepts

- [[Gamma Spectroscopy]]
- [[Scintillation Detector]]
- [[Photomultiplier Tube]]
- [[Coincidence Detection]]
- [[HPGe Detector]]
- [[FWHM]]
- [[Signal-to-Noise Ratio]]
- [[Photoelectric Effect]]
- [[Neutron Activation]]

## References

- G. F. Knoll, *Radiation Detection and Measurement*, 4th ed. (Wiley, 2010), Ch. 4
- G. Gilmore, *Practical Gamma-ray Spectrometry*, 2nd ed. (Wiley, 2008)
