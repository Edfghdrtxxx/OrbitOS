---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - physics
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# Flux
## Definition

**Flux** is the rate at which a quantity passes through a surface per unit area per unit time. In nuclear and particle physics, **particle flux** $\phi$ is the number of particles traversing a unit cross-sectional area per unit time, typically expressed as cm⁻²·s⁻¹. For a uniform beam or gas of particles with number density $n$ and speed $v$: $\phi = n \cdot v$.

## Key Points

- **General form:** Flux is a scalar defined as $\phi = \frac{d N}{d A \, d t}$, where $N$ is the number of particles, $A$ the area, and $t$ the time — it answers "how intensely is this surface being bombarded?"
- **Connects density to [[Reaction Rate]]:** The reaction rate for a target in a particle field is $R = n_t \cdot \sigma \cdot \phi$, where $\sigma$ is the [[Neutron Capture Cross Section|cross section]] — flux is the bridge between "particles exist" and "reactions happen"
- **Neutron flux** specifically ($\phi_n = n_n \cdot v_n$) is central to reactor physics and nucleosynthesis — in the [[r-process Nucleosynthesis|r-process]], neutron densities $n_n > 10^{20}$ cm⁻³ at thermal speeds $\sim 10^9$ cm/s yield fluxes of $\sim 10^{29}$ cm⁻²s⁻¹
- **Not the same as fluence:** Flux is a rate (per second); **fluence** is the time-integrated flux $\Phi = \int \phi \, dt$ (total particles/cm² over an exposure)
- The concept generalises beyond particles: heat flux (W/m²), electric flux ($\vec{E} \cdot d\vec{A}$), and magnetic flux ($\Phi_B = \vec{B} \cdot d\vec{A}$) all share the same "flow through a surface" structure

## Examples

- A research reactor might have a thermal neutron flux of $\sim 10^{14}$ cm⁻²s⁻¹ — enough to activate samples but ~15 orders of magnitude below r-process conditions
- In accelerator experiments, beam flux is often recast as **[[Luminosity]]** $\mathcal{L}$, so that the event rate is simply $R = \mathcal{L} \cdot \sigma$

## Related Concepts

- [[Reaction Rate]]
- [[Neutron Capture Cross Section]]
- [[r-process Nucleosynthesis]]
- [[Half-Life]]
- [[Becquerel]]
- [[Luminosity]]
- [[Cross Section]]

## References

- Krane, *Introductory Nuclear Physics*, §12.1 — Neutron flux and cross sections
- Lamarsh & Baratta, *Introduction to Nuclear Engineering*, Ch. 3 — Neutron flux and interactions
