---
area: "[[Physics]]"
tags: [detector, photonics, noise]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Optical Crosstalk

## Definition

Optical crosstalk in a [[Silicon Photomultiplier]] is the phenomenon whereby an avalanche in one [[Single-Photon Avalanche Diode]] micro-cell triggers one or more neighboring cells via emitted photons (direct crosstalk) or carrier diffusion (indirect crosstalk), producing a spuriously large output for a single incident photon.

## Key Points

- Inflates the apparent photon multiplicity: one true photon can produce signals equivalent to several photons
- Direct crosstalk: avalanche photons propagate to adjacent cells; reduced by optical isolation (trenches, absorbers)
- Indirect crosstalk: carriers diffuse to nearby cells; structure and bias affect severity
- Typically quoted as a fraction (e.g., 5–20% per fired cell); limits [[Energy Resolution]] and photon-counting accuracy

## Examples

- In [[Gamma Spectroscopy]] with [[Scintillation Detector]] + SiPM, optical crosstalk broadens the photopeak and degrades [[Energy Resolution]]
- Low-crosstalk SiPMs are preferred for applications requiring precise photon-number resolution (e.g., quantum optics)

## Related Concepts

- [[Silicon Photomultiplier]]
- [[Single-Photon Avalanche Diode]]
- [[Dark Count Rate]]
- [[Energy Resolution]]
- [[Scintillation Detector]]
- [[Gamma Spectroscopy]]
- [[Photodetector]]

## References

- Gundacker, S. & Heering, A., "The silicon photomultiplier: fundamentals and applications of a modern solid-state photon detector," *Phys. Med. Biol.* **65**, 17TR01 (2020)
- Piemonte, C. & Gola, A., "Overview on the main parameters affecting the response of silicon photomultipliers," *Nucl. Instrum. Methods A* **926**, 2–15 (2019)
