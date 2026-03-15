---
area: "[[Physics]]"
tags: [detector, photonics, noise]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Dark Count Rate

## Definition

The dark count rate (DCR) is the rate at which a [[Single-Photon Avalanche Diode]] or [[Silicon Photomultiplier]] produces output pulses in the absence of incident light, caused primarily by thermally generated carriers that trigger avalanches indistinguishable from photon-induced events.

## Key Points

- Dominant noise source in [[Silicon Photomultiplier]]s and SPADs at low light levels; scales with device area and temperature
- Arises from thermal generation in the depletion region, trap-assisted tunneling, and afterpulsing
- Typically quoted in Hz/mm² or kHz; cooling reduces DCR significantly (exponential dependence on temperature)
- Limits the minimum detectable signal and the useful dynamic range in photon-counting applications

## Examples

- A cooled [[Silicon Photomultiplier]] may achieve ~100 kHz/cm² DCR at −20 °C vs. MHz/cm² at room temperature
- In [[Time-of-Flight]] PET, high DCR increases random coincidences and degrades image contrast

## Related Concepts

- [[Silicon Photomultiplier]]
- [[Single-Photon Avalanche Diode]]
- [[Geiger Mode]]
- [[Optical Crosstalk]]
- [[Photodetector]]
- [[Scintillation Detector]]

## References

- Cova, S. et al., "Avalanche photodiodes and quenching circuits for single-photon detection," *Appl. Opt.* **35**, 1956–1976 (1996)
- Gundacker, S. & Heering, A., "The silicon photomultiplier: fundamentals and applications of a modern solid-state photon detector," *Phys. Med. Biol.* **65**, 17TR01 (2020)
