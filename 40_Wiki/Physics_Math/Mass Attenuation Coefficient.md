---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - radiation
  - shielding
created: 2026-03-05
last_reviewed: 2026-03-06
next_review: 2026-03-05
review_interval: 0
---
# Mass Attenuation Coefficient

## Definition

The Mass Attenuation Coefficient ($\mu/\rho$, units cm²/g) is the probability per unit areal density that a photon will interact with matter, combining [[Photoelectric Absorption]], [[Compton Scattering]], and [[Pair Production]] contributions — it governs the exponential attenuation of [[Gamma Ray|gamma rays]] and X-rays through any material.

## Key Points

- **Beer–Lambert law**: Intensity falls as $I = I_0 \, e^{-(\mu/\rho)\,\rho\,x}$, where $\rho$ is the material density and $x$ the thickness; the linear attenuation coefficient is $\mu = (\mu/\rho) \cdot \rho$
- **Energy dependence**: Dominated by [[Photoelectric Absorption]] at low energies (steep $\sim E^{-3}$ fall-off), a [[Compton Scattering]] plateau at intermediate energies, and rising [[Pair Production]] above 1.022 MeV
- **Z dependence**: High-Z materials (Pb, W, Bi) have much larger $\mu/\rho$, especially in the photoelectric regime, making them effective gamma-ray shields
- **Tabulated data**: Standard values are published by NIST (XCOM database) and are essential inputs for detector efficiency calculations and shielding design

## Examples

- Lead ($Z = 82$) has $\mu/\rho \approx 0.11$ cm²/g at 662 keV (¹³⁷Cs), meaning ~5 cm of lead reduces the beam intensity by a factor of ~10
- In [[HPGe Detector]] efficiency calibration, the mass attenuation coefficient of germanium is used with Monte Carlo simulations to predict the photopeak detection efficiency as a function of [[Gamma Ray]] energy

## Related Concepts

- [[Gamma Ray]]
- [[Photoelectric Absorption]]
- [[Compton Scattering]]
- [[Pair Production]]
- [[Ionizing Radiation]]
- [[ALARA Principle]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 2
- Hubbell, J. H., & Seltzer, S. M. (2004). NIST XCOM: Photon Cross Sections Database
