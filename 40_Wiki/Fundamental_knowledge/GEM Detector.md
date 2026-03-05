---
area: "[[Physics]]"
tags: [detector, gas-detector, TPC]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# GEM Detector

## Definition

A Gas Electron Multiplier (GEM) Detector is a [[Gas Amplification]] structure consisting of a thin copper-clad [[Kapton]] foil perforated with a dense pattern of micro-holes (~70 µm diameter), through which electrons are avalanche-multiplied by a strong electric field. GEMs are widely used as the amplification stage in [[Time Projection Chamber]] readout planes.

## Key Points

- A single GEM foil provides a gas gain of ~10³; stacking two or three foils (double/triple-GEM) reaches gains of 10⁴–10⁵ while suppressing ion backflow
- The micro-hole geometry confines the avalanche, reducing the probability of discharge compared to wire-based amplification
- Commonly used in [[Time Projection Chamber]] upgrades (e.g., ALICE TPC at CERN) for continuous readout at high interaction rates
- Signals are read out on a segmented anode (pads or strips) and digitised with [[FPGA]]-based [[Readout Electronics]]
- Fabrication uses standard PCB lithography, making large-area production feasible

## Examples

- The ALICE TPC upgrade replaced multi-wire proportional chambers with quadruple-GEM stacks to handle Pb–Pb collision rates in LHC Run 3
- COMPASS at CERN uses triple-GEM trackers for high-rate muon and hadron beam tracking

## Related Concepts

- [[Time Projection Chamber]]
- [[Gas Amplification]]
- [[Kapton]]
- [[Micromegas]]
- [[FPGA]]
- [[Readout Electronics]]
- [[Ionizing Radiation]]
- [[Coincidence Detection]]

## References

- Sauli, F., "GEM: A new concept for electron amplification in gas detectors," Nuclear Instruments and Methods A, 1997
