---
area: "[[Physics]]"
tags: [detector, photonics, solid-state]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Single-Photon Avalanche Diode

## Definition

A Single-Photon Avalanche Diode (SPAD) is a semiconductor [[Photodetector]] operating in [[Geiger Mode]] that produces a large, saturated output pulse for each absorbed photon, enabling single-photon sensitivity without external amplification.

## Key Points

- Each micro-cell in a [[Silicon Photomultiplier]] is a SPAD; the SiPM sums many SPAD outputs to obtain photon-counting capability
- Requires above-breakdown bias and external [[Quenching Circuit|quenching]] to return to the sensitive state after each avalanche
- Offers sub-nanosecond timing resolution, high gain ($\sim 10^5$–$10^6$), and compact size compared to [[Photomultiplier Tube]]s
- [[Dark Count Rate]] and [[Optical Crosstalk]] limit performance at low light levels

## Examples

- Arrays of SPADs form the core of [[Silicon Photomultiplier]]s used in [[Time-of-Flight]] PET and calorimeters
- Single SPADs are used in LiDAR, quantum cryptography, and fluorescence lifetime imaging

## Related Concepts

- [[Silicon Photomultiplier]]
- [[Geiger Mode]]
- [[Photodetector]]
- [[Photomultiplier Tube]]
- [[Scintillation Detector]]
- [[Time-of-Flight]]
- [[Avalanche Photodiode]]
- [[Dark Count Rate]]
- [[Optical Crosstalk]]

## References

- Cova, S., Ghioni, M., Lacaita, A., Samori, C. & Zappa, F., "Avalanche photodiodes and quenching circuits for single-photon detection," *Appl. Opt.* **35**, 1956–1976 (1996)
