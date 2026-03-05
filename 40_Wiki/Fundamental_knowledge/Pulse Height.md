---
area: "[[Physics]]"
tags: [signal-processing, nuclear-instrumentation, spectroscopy]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Pulse Height

## Definition

Pulse Height is the peak amplitude of an electrical signal produced by a radiation detector in response to a single event, directly proportional to the energy deposited by the incident particle or photon — it is the fundamental observable in energy spectroscopy.

## Key Points

- **Energy proportionality**: In a linear system, pulse height maps to deposited energy via a gain calibration; the resulting [[Pulse Height Spectrum]] reveals the energy distribution of incident radiation
- **Measurement chain**: The detector pulse is shaped by a [[Preamplifier|preamplifier]], then digitised by an [[ADC]] whose bin width determines the minimum resolvable energy difference (channel width)
- **Impact on timing**: Variations in pulse height cause [[Time Walk]] in [[Leading-Edge Discriminator|leading-edge discriminators]] — larger pulses cross the threshold earlier, introducing amplitude-dependent timing errors corrected by a [[Constant Fraction Discriminator]]
- **Resolution link**: The statistical spread of pulse heights for mono-energetic radiation defines the detector's [[Energy Resolution]], typically reported as FWHM/centroid (%)
- **Spectroscopy applications**: Pulse-height analysis with a [[Multichannel Analyzer|multichannel analyzer]] is the basis of [[Gamma Spectroscopy]], alpha spectroscopy, and charged-particle identification

## Examples

- A [[HPGe Detector]] irradiated by $^{137}\text{Cs}$ produces a photopeak at a pulse height corresponding to $662\;\text{keV}$, with an [[Energy Resolution]] of $\sim 0.2\%$ FWHM
- In a [[Scintillation Detector]] coupled to a [[Silicon Photomultiplier]], the pulse height varies with the number of detected scintillation photons, requiring careful gain calibration for accurate energy assignment

## Related Concepts

- [[Energy Resolution]]
- [[Gamma Spectroscopy]]
- [[Time Walk]]
- [[ADC]]
- [[Leading-Edge Discriminator]]
- [[Dynamic Range]]
- [[Pulse Height Spectrum]]
- [[Preamplifier]]
- [[Multichannel Analyzer]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 4, 17
- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. Springer — Ch. 7
