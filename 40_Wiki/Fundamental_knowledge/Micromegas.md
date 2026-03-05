---
area: "[[Physics]]"
tags: [detector, gas-detector, TPC]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Micromegas

## Definition

Micromegas (Micro-Mesh Gaseous Structure) is a [[Gas Detector]] amplification technology that uses a thin [[Metallic Mesh]] suspended $\sim 100\;\mu\text{m}$ above an anode to create a high-field [[Amplification Gap]] where ionisation electrons undergo avalanche multiplication. It is a leading readout technology for [[Time Projection Chamber]]s in nuclear and particle physics.

## Key Points

- The narrow amplification gap ($\sim 128\;\mu\text{m}$) produces fast signals ($\sim 100\;\text{ns}$) with gain up to $\sim 10^4$, well-suited for high-rate environments
- Bulk Micromegas fabrication (mesh laminated onto the PCB with photolithographic pillars) enables large-area, uniform detectors at low cost
- Provides excellent spatial resolution ($\sim 50\;\mu\text{m}$) when combined with fine-pitch strip or pad anodes read out by [[FPGA]]-based electronics
- Compared to [[GEM Detector]]s, Micromegas has a simpler single-stage structure but requires careful spark protection (resistive anode layers)
- Used in [[Time Projection Chamber]] readout for experiments such as T2K and ATLAS NSW at CERN

## Examples

- The T2K near-detector TPC uses bulk Micromegas modules to reconstruct neutrino interaction vertices with high spatial precision
- The ATLAS New Small Wheel upgrade deploys over $1{,}200\;\text{m}^2$ of resistive Micromegas for muon tracking and triggering in the LHC forward region

## Related Concepts

- [[Time Projection Chamber]]
- [[GEM Detector]]
- [[Gas Detector]]
- [[Metallic Mesh]]
- [[Amplification Gap]]
- [[FPGA]]
- [[Readout Electronics]]
- [[Ionizing Radiation]]

## References

- Giomataris, Y. et al., "MICROMEGAS: a high-granularity position-sensitive gaseous detector for high particle-flux environments," Nuclear Instruments and Methods A, 1996
