---
area: "[[Physics]]"
tags: [detector, gas-detector, particle-physics]
created: 2026-03-15
last_reviewed:
next_review: 2026-03-15
review_interval: 0
---
# GEM Detector

## Schematics

![[GEM_Detector_schematic.jpg]]
*Cross-section schematic of a GEM foil showing electric field lines, electron drift and diffusion losses, ion feedback, and the gain–transparency relationship between cathode and anode.*

![[GEM_Detector_diagram.png]]
*Simulated electric field and charge distribution inside a single GEM hole: electrons (red) avalanche-multiply in the high-field region ($U = 250\,\text{V}$) while ions (blue) drift back toward the drift field ($E_d = 1\,\text{kV/cm}$).*

## Definition

A Gas Electron Multiplier (GEM) is a micro-pattern gas detector element consisting of a thin [[Kapton]] foil (typically $50\,\mu\text{m}$) clad on both sides with copper and perforated with a dense array of micro-holes (~$70\,\mu\text{m}$ diameter, ~$140\,\mu\text{m}$ pitch). Applying a voltage difference across the copper layers ($\sim 300$–$400\,\text{V}$) creates a strong [[Electric Field]] inside each hole, causing [[Electron Avalanche]] multiplication of drifting electrons from [[Ionizing Radiation]].

## Key Points

- A single GEM foil achieves a gas gain of $\sim 10^3$; stacking two or three foils (double/triple-GEM) reaches $10^4$–$10^5$ while strongly suppressing [[Ion Backflow]] into the drift volume
- The confined avalanche geometry drastically reduces discharge probability compared to wire-based [[Gas Amplification]], enabling stable operation at high rates
- Widely adopted as the amplification stage in [[Time Projection Chamber]] readout planes — most notably the ALICE TPC upgrade at CERN uses quadruple-GEM stacks for continuous Pb–Pb readout in LHC Run 3
- Signals are collected on a segmented anode (pads or strips) and digitised by [[ADC]]/[[ASIC]]-based [[Readout Electronics]], fed into a [[DAQ]] system
- Fabricated using standard PCB lithography, making large-area production ($\mathcal{O}(\text{m}^2)$) feasible and cost-effective

## Examples

- The ALICE TPC replaced multi-wire proportional chambers with quadruple-GEM stacks to sustain $50\,\text{kHz}$ Pb–Pb interaction rates without gating
- COMPASS at CERN employs triple-GEM trackers for high-rate muon and hadron beam tracking with spatial resolution $\sim 70\,\mu\text{m}$

## Related Concepts

- [[Time Projection Chamber]]
- [[Micromegas]]
- [[Gas Amplification]]
- [[Kapton]]
- [[Ion Backflow]]
- [[Electron Avalanche]]
- [[Readout Electronics]]
- [[FPGA]]
- [[ADC]]
- [[ASIC]]
- [[DAQ]]
- [[Ionizing Radiation]]

## References

- Sauli, F., "GEM: A new concept for electron amplification in gas detectors," *Nucl. Instrum. Meth. A* **386**, 531–534 (1997)
