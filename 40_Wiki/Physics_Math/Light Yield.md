---
area: "[[Physics]]"
tags: [scintillation, detector-performance, nuclear-instrumentation]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Light Yield

## Definition

Light Yield is the number of scintillation photons produced per unit of deposited energy in a [[Scintillation Detector]], typically expressed in photons/MeV — it is the single most important parameter governing both [[Energy Resolution]] and [[Time Resolution]] of scintillator-based systems.

## Key Points

- **Typical values**: NaI(Tl) ~38,000 ph/MeV, CsI(Tl) ~54,000 ph/MeV, plastic scintillators ~10,000 ph/MeV, LYSO ~30,000 ph/MeV; higher light yield improves photoelectron statistics
- **Impact on energy resolution**: [[Energy Resolution]] scales as $\sim 1/\sqrt{N_{pe}}$, where $N_{pe}$ is the number of detected photoelectrons — higher light yield produces more photoelectrons and narrower [[Pulse Height]] distributions
- **Impact on timing**: More photons on the [[Rising Edge]] steepen the signal, reducing [[Jitter]] and improving [[Time Resolution]]; this is why fast, bright scintillators (BaF₂, LYSO) are preferred for [[Time-of-Flight]] applications
- **Non-proportionality**: Light yield is not perfectly linear with energy — deviations at low energies (< 100 keV) introduce an intrinsic [[Energy Resolution]] floor that cannot be improved by better [[Photodetector|photodetectors]]

## Examples

- A NaI(Tl) crystal coupled to a [[Photomultiplier Tube]] (quantum efficiency ~25%) produces ~9,500 photoelectrons per MeV, yielding ~7% FWHM [[Energy Resolution]] at 662 keV
- LYSO scintillators in PET scanners combine high light yield (~30k ph/MeV) with fast decay (40 ns) to achieve ~300 ps [[Time Resolution]] for [[Coincidence Detection]] in [[Time-of-Flight]] PET imaging

## Related Concepts

- [[Scintillation Detector]]
- [[Energy Resolution]]
- [[Time Resolution]]
- [[Photodetector]]
- [[Photomultiplier Tube]]
- [[Silicon Photomultiplier]]
- [[Pulse Height]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 8
- Dorenbos, P. (2010). "Fundamental limitations in the performance of Ce³⁺, Pr³⁺, and Eu²⁺ activated scintillators." *Phys. Status Solidi A*, 207(6), 1367–1379
