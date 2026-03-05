---
area: "[[Physics]]"
tags: [nuclear-instrumentation, detector-physics, photodetector]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Photomultiplier Tube

## Definition

A Photomultiplier Tube (PMT) is a vacuum-tube photodetector that converts weak light signals into measurable electrical pulses through the photoelectric effect at a photocathode followed by electron multiplication across a chain of dynodes, achieving gains of 10⁶–10⁷.

## Key Points

- **Operating principle**: Incident photon → photoelectron (photocathode) → secondary electron cascade through 8–14 dynodes → amplified anode current pulse
- **Key specifications**: Quantum efficiency (QE, 20–30% for bialkali cathodes at ~400 nm), gain (~10⁶), transit time spread (TTS, ~0.3–1 ns — limits timing resolution)
- **Role in timing**: PMT transit time spread sets the fundamental timing limit; combined with [[Constant Ratio Timing]], sub-nanosecond time resolution is achieved for [[Time-of-Flight]] and [[Coincidence Detection]]
- **Limitations**: Sensitive to magnetic fields (requires shielding), bulky, high-voltage supply needed (~1–2 kV); increasingly supplemented by [[Silicon Photomultiplier|silicon photomultipliers]] (SiPMs)

## Examples

- A Hamamatsu R1828 PMT coupled to a NaI(Tl) crystal is a classic [[Scintillation Detector]] assembly for [[Gamma Spectroscopy]], providing both energy and timing information
- In large-area [[Time-of-Flight]] walls, arrays of PMTs with fine-mesh dynodes operate in magnetic fringe fields near spectrometer magnets

## Related Concepts

- [[Scintillation Detector]]
- [[Gamma Spectroscopy]]
- [[Constant Ratio Timing]]
- [[Time-of-Flight]]
- [[Coincidence Detection]]
- [[Silicon Photomultiplier]]
- [[Photoelectric Effect]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 9 (Photomultiplier tubes)
- Hamamatsu Photonics (2007). *Photomultiplier Tubes: Basics and Applications*, 3rd ed.
