---
area: "[[Physics]]"
tags: [detector, gas-detector, instrumentation]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# Gas Detector

## Schematics

![[Gas_Detector_voltage_regions.gif]]
*Ion-pair current vs. applied voltage for a wire-cylinder gas detector, showing the ionization chamber, proportional counter, and Geiger-Mueller operating regions with separate curves for alpha and beta radiation. (Wikimedia Commons)*

![[Gas_Detector_ion_chamber_operation.gif]]
*Visualisation of ionization chamber operation: incident radiation creates ion pairs in the gas, and the applied electric field drifts electrons to the anode and positive ions to the cathode, generating a measurable current. (Wikimedia Commons)*

![[Gas_Detector_classification.png]]
*Classification of particle detectors (hermetic detector family), showing gaseous ionization types (ionization chamber, Geiger counter, spark chamber, proportional counter and derivatives) alongside solid-state types. (Wikimedia Commons)*

## Definition

A **gas detector** (gaseous ionization detector) is a class of [[Ionizing Radiation]] detector that measures charged particles or photons by collecting the ionization produced when radiation passes through a gas-filled volume under an applied [[Electric Field]]. The number of collected electron-ion pairs — and therefore the output signal — depends on the applied voltage, the gas composition, and the detector geometry, giving rise to distinct operating regimes (ionization, proportional, Geiger-Mueller).

## Key Points

- **Operating principle:** Incident radiation ionizes gas molecules, producing primary electron-ion pairs. The applied [[Electric Field]] drifts electrons toward the anode and positive ions toward the cathode, generating a measurable current or pulse whose amplitude is proportional to the deposited energy (in the proportional regime) or saturated (in the Geiger-Mueller regime).
- **Voltage regions:** As the anode voltage increases, the detector traverses the recombination region, the [[Ionisation Chamber|ionization chamber]] plateau, the proportional region (with gas gain up to ~$10^{5}$), the limited-proportional region, and finally the [[Geiger Mode|Geiger-Mueller]] region where every event produces a full discharge regardless of primary ionization.
- **Gas choices:** Common fill gases include noble gases (Ar, He, Xe) mixed with organic or polyatomic quench gases (e.g., $\text{CO}_2$, $\text{CH}_4$, isobutane). The quench gas absorbs UV photons and prevents spurious secondary discharges. Gas mixture composition directly affects [[Drift Velocity]], [[Diffusion]], and gain stability.
- **Signal formation:** By the Shockley-Ramo theorem the measurable signal depends on the motion of charge carriers through the weighting field. In cylindrical wire chambers the signal arises predominantly from positive-ion drift, because ions traverse most of the potential difference; in planar geometries (e.g., parallel-plate ionization chambers) both electrons and ions contribute comparably. A [[Preamplifier]] is typically required for pulse shaping.
- **Applications:** Gas detectors are used in [[Gamma Spectroscopy]], radiation dosimetry ([[Dosimetry]]), particle tracking in [[Time Projection Chamber]] systems, high-energy physics experiments, and radiation protection surveys ([[Radiation Controlled Area]]).

## Examples

- **Ionization chamber for dosimetry:** A parallel-plate [[Ionisation Chamber]] filled with air operates in the ionization plateau, collecting all primary ion pairs without gas multiplication. The measured current is directly proportional to the [[Ionizing Radiation|radiation]] dose rate, making it the standard instrument for [[Dosimetry]] calibration (typical sensitivity $\sim 10^{-12}$ A per mR/h).
- **Multi-Wire Proportional Chamber (MWPC):** Invented by Georges Charpak (Nobel Prize 1992), the MWPC uses a plane of thin anode wires between cathode planes, each wire acting as an independent proportional counter. It achieves [[Spatial Resolution]] of $\sim 1\,\text{mm}$ and rate capability of $\sim 10^{4}\,\text{Hz/mm}^{2}$, enabling real-time [[Track Reconstruction]] in particle physics experiments.

## Related Concepts

- [[Ionisation Chamber]]
- [[Geiger Mode]]
- [[Time Projection Chamber]]
- [[Ionizing Radiation]]
- [[Electric Field]]
- [[Drift Velocity]]
- [[Diffusion]]
- [[Dead Time]]
- [[Energy Resolution]]
- [[DAQ]]
- [[Preamplifier]]
- [[Scintillation Detector]]
- [[Silicon Photomultiplier]]

## References

- Knoll, G. F. *Radiation Detection and Measurement*, 4th ed. Wiley, 2010. Chapters 5–7.
- Blum, W., Riegler, W., and Rolandi, L. *Particle Detection with Drift Chambers*, 2nd ed. Springer, 2008.
- Sauli, F. *Gaseous Radiation Detectors: Fundamentals and Applications*. Cambridge University Press, 2014.
