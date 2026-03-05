---
area: "[[Physics]]"
tags: [nuclear-instrumentation, signal-processing, measurement-technique]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Coincidence Detection

## Definition

Coincidence detection is a technique in nuclear and particle physics that selects events by requiring two or more detector signals to arrive within a narrow time window (resolving time), suppressing uncorrelated background and isolating physically correlated events.

## Key Points

- **Resolving time (2τ)**: The coincidence window width; shorter windows reduce accidental coincidences but require better timing resolution from the detectors
- **Accidental rate**: *R_acc = 2τ · R₁ · R₂*, where *R₁*, *R₂* are individual detector rates — minimized by precise timing via [[Constant Ratio Timing]]
- **Types**: True coincidences (correlated physics events), accidental/random coincidences (uncorrelated), and scattered coincidences (in imaging applications)
- **Hardware**: Implemented with coincidence units (AND logic), or in [[FPGA]] firmware for digital trigger systems

## Examples

- In [[Gamma Spectroscopy]] of cascade gamma rays, a coincidence gate between two NaI [[Scintillation Detector|detectors]] selects only events where both gammas from a nuclear de-excitation are detected simultaneously
- Positron Emission Tomography (PET) scanners use coincidence detection of back-to-back 511 keV annihilation photons to reconstruct tracer distribution in vivo

## Related Concepts

- [[Constant Ratio Timing]]
- [[Time Walk]]
- [[Time-of-Flight]]
- [[Gamma Spectroscopy]]
- [[Scintillation Detector]]
- [[FPGA]]
- [[Dead Time]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 17 (Coincidence techniques)
- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. Springer — Ch. 11
