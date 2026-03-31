---
area: "[[Physics]]"
tags: [experiment, LHC, particle-physics]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# ATLAS

## Schematics

![[ATLAS_detector_cross_section.svg]]
*Labelled cross-section of the ATLAS detector showing the inner detector, electromagnetic and hadronic calorimeters, muon spectrometer, and toroidal magnet system. (CC BY-SA 2.0, Wikimedia Commons / CERN)*

## Definition

ATLAS (A Toroidal LHC ApparatuS) is one of the two general-purpose particle physics detectors at the Large Hadron Collider (LHC) at [[CERN]]. Located in a cavern 100 m underground at Point 1 on the LHC ring, it is the largest-volume collider detector ever constructed: 46 m long, 25 m in diameter, and weighing approximately 7000 tonnes. Together with CMS, ATLAS announced the discovery of the Higgs boson on 4 July 2012.

## Key Points

- **Sub-detector layers (inside out):**
  1. **Inner Detector** -- pixel detector, semiconductor tracker (SCT), and transition radiation tracker (TRT) inside a 2 T solenoid; provides charged-particle [[Track Reconstruction|tracking]] and vertex reconstruction
  2. **Electromagnetic Calorimeter** -- liquid-argon (LAr) sampling calorimeter with lead absorbers in an accordion geometry; measures electron and photon energies with [[Energy Resolution|resolution]] $\sigma_E/E \approx 10\%/\sqrt{E\,[\text{GeV}]}$
  3. **Hadronic Calorimeter** -- iron/[[Scintillation Detector|scintillator]]-tile barrel plus LAr endcap and forward calorimeters; measures jet and missing transverse energy
  4. **Muon Spectrometer** -- monitored drift tubes (MDT) and cathode strip chambers in a toroidal magnetic field ($\sim 0.5\;\text{T}$) providing standalone muon momentum measurement up to $|\eta| < 2.7$
- **Toroidal magnet system** -- unique among LHC experiments; three large air-core toroid systems (barrel + two endcaps) bend muon trajectories without an iron return yoke, enabling the large spectrometer volume
- **Trigger and [[DAQ]]** -- a two-level trigger system reduces the 40 MHz bunch-crossing rate to $\sim 1\;\text{kHz}$ of events written to storage; Level-1 uses custom [[FPGA]]/[[ASIC]] hardware, the High-Level Trigger runs software algorithms on a computing farm
- **New Small Wheel (NSW) upgrade** -- installed during Long Shutdown 2 (2019-2022), the NSW replaces the innermost endcap muon stations with $>1200\;\text{m}^2$ of resistive [[Micromegas]] detectors and small-strip thin-gap chambers (sTGC), providing both precision tracking ($\sigma \sim 100\;\mu\text{m}$) and trigger capability at high luminosity
- **Physics programme** -- Higgs boson property measurements, searches for supersymmetry and dark matter candidates, precision electroweak and top-quark physics, heavy-ion collisions, and Standard Model tests at $\sqrt{s} = 13.6\;\text{TeV}$

## Examples

- The 2012 Higgs boson observation combined the $H \to \gamma\gamma$ and $H \to ZZ^* \to 4\ell$ channels, achieving $>5\sigma$ significance; ATLAS measured $m_H = 125.09 \pm 0.24\;\text{GeV}$ (combined with CMS, Run 1)
- The NSW [[Micromegas]] modules are the largest application of resistive Micromegas technology, demonstrating [[Spatial Resolution|spatial resolution]] $\sim 100\;\mu\text{m}$ and rate capability up to $15\;\text{kHz/cm}^2$ for the High-Luminosity LHC
- ATLAS uses [[Geant4]] for full detector simulation, with event reconstruction employing [[Kalman Filter]]-based track fitting in the inner detector and muon spectrometer

## Related Concepts

- [[CERN]]
- [[Micromegas]]
- [[Time Projection Chamber]]
- [[Track Reconstruction]]
- [[Scintillation Detector]]
- [[Energy Resolution]]
- [[Spatial Resolution]]
- [[DAQ]]
- [[FPGA]]
- [[ASIC]]
- [[Geant4]]
- [[Kalman Filter]]
- [[GEM Detector]]

## References

- ATLAS Collaboration, "The ATLAS Experiment at the CERN Large Hadron Collider," *JINST* **3** (2008) S08003. doi:10.1088/1748-0221/3/08/S08003
- ATLAS Collaboration, "Observation of a new particle in the search for the Standard Model Higgs boson with the ATLAS detector at the LHC," *Phys. Lett. B* **716** (2012) 1-29. doi:10.1016/j.physletb.2012.08.020
- T. Kawamoto et al., "New Small Wheel Technical Design Report," CERN-LHCC-2013-006 (ATLAS-TDR-020), 2013.
