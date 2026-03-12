---
area: "[[Physics]]"
tags: [nuclear-instrumentation, detector, timing]
created: 2026-03-12
last_reviewed:
next_review: 2026-03-12
review_interval: 0
---
# Diamond Detector

## Definition

A diamond detector is a solid-state radiation detector using synthetic CVD (chemical vapor deposition) diamond as the active material, functioning as a fast ionization chamber with excellent timing resolution and radiation hardness.

## Key Points

- **Principle**: A charged particle traverses the diamond crystal, creating electron-hole pairs (~36 pairs/μm); an applied electric field collects the charge, producing a fast current pulse with ~1 ns collection time
- **High-rate capability**: Handles up to ~$10^7$ pps due to ultra-fast charge collection and minimal [[Dead Time]], making it ideal for primary beam monitoring and high-intensity [[Time-of-Flight]] measurements
- **Radiation hardness**: The diamond lattice is extremely robust under irradiation, far exceeding silicon in radiation tolerance — critical for use near primary beam lines
- **Trade-offs**: Lower signal-to-noise than silicon (~36 vs ~108 electron-hole pairs/μm), expensive to produce as high-quality single-crystal CVD, and typically limited to ~1 cm² active area
- **Timing resolution**: Achieves tens of picoseconds, comparable to or better than fast [[Scintillation Detector|plastic scintillators]] with [[Photomultiplier Tube|PMTs]]

## Examples

- Used as beam monitors at [[BigRIPS]] and other fragment separators where beam intensities exceed $10^6$ pps and would saturate [[Scintillation Detector|plastic scintillators]]
- Employed as start/stop detectors in [[Time-of-Flight]] systems for high-rate experiments where conventional detectors suffer pile-up

## Related Concepts

- [[Time-of-Flight]]
- [[Dead Time]]
- [[Scintillation Detector]]
- [[Silicon Photomultiplier]]
- [[Photodetector]]
- [[Time Resolution]]
- [[CVD Diamond]]

## References

- Pomorski, M. et al. (2008). *physica status solidi (a)*, 205, 2163–2171 — CVD diamond detectors for particle physics
- Berdermann, E. et al. (2010). *Diamond and Related Materials*, 19, 358–367 — diamond timing detectors at GSI
