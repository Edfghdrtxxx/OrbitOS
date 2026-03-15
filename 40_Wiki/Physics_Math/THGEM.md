---
area: "[[Physics]]"
tags: [detector, gas-detector, MPGD]
created: 2026-03-15
last_reviewed:
next_review: 2026-03-15
review_interval: 0
---
# THGEM

## Schematics

*No suitable open-license schematics found on Wikimedia Commons for this topic.*

## Definition

A Thick Gas Electron Multiplier (THGEM) is a robust variant of the [[GEM Detector]] in which the amplification element is a standard PCB ($0.4$–$1.0\,\text{mm}$ thick) with mechanically drilled holes ($\sim 0.3$–$1.0\,\text{mm}$ diameter), rather than the thin chemically-etched [[Kapton]] foil used in conventional GEMs. A voltage applied across the copper-clad faces produces a strong [[Electric Field]] inside each hole, driving [[Electron Avalanche]] multiplication of ionisation electrons.

## Key Points

- Mechanically drilled from standard double-sided copper-clad PCB — far simpler and cheaper to fabricate than photolithographic GEM foils, and straightforwardly scalable to large areas
- Thicker substrate and larger hole pitch make the device intrinsically more robust against electrical discharges and mechanical damage than thin-foil GEMs
- Typical single-stage gas gains of $10^3$–$10^4$; cascading two or more THGEM layers extends the achievable gain while keeping the discharge probability low
- At CNS (UTokyo), the **DG-M-THGEM** (Dual-Gain Micro-pattern THGEM) prototype uses two gain regions — a suppressed beam region (gain $< 100$) and a high-gain recoil region ($\sim 2000$) — solving the dynamic-range problem in [[Active-Target TPC]] experiments where beam particles deposit orders of magnitude more energy than recoil tracks (Iwamoto, Ota, Imai et al., PTEP 2023)
- Demonstrated stable operation up to $2.5 \times 10^6\,\text{pps}$ beam intensity

## Examples

- The DG-M-THGEM was developed for [[Active-Target TPC]] readout at the OEDO-SHARAQ beamline ([[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN RIBF]]), enabling simultaneous tracking of intense heavy-ion beams and faint recoil particles
- THGEMs are also employed in RICH detectors, neutron imaging, and cryogenic noble-liquid detectors where mechanical robustness and large-area coverage are critical

## Related Concepts

- [[GEM Detector]]
- [[Active-Target TPC]]
- [[Time Projection Chamber]]
- [[Gas Amplification]]
- [[Electron Avalanche]]
- [[Ion Backflow]]
- [[Micro-Pattern Gas Detector]]
- [[Micromegas]]
- [[ADC]]
- [[DAQ]]
- [[Readout Electronics]]

## References

- Breskin, A. et al., "A concise review on THGEM detectors," *Nucl. Instrum. Meth. A* **598**, 107–111 (2009)
- Iwamoto, C., Ota, S., Imai, N. et al., "DG-M-THGEM for active-target TPC," *PTEP* 2023, ptad038
