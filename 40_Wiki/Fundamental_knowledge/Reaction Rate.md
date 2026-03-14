---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - nuclear-astrophysics
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# Reaction Rate
## Definition

The **reaction rate** $R$ is the number of nuclear reactions occurring per unit time. It depends on the densities of the interacting species and the probability of interaction, encoded in the [[Neutron Capture Cross Section|cross section]] $\sigma$ and the relative velocity $v$ between projectile and target.

## Key Points

- **Beam-on-target form:** For a beam of intensity $I$ (particles/s) hitting a thin target of number density $n_t$ (nuclei/cm²), the reaction rate is simply $R = I \cdot n_t \cdot \sigma$
- **Astrophysical (thermal) form:** In a stellar plasma where both species have thermal velocities following a [[Maxwell-Boltzmann Distribution]], the rate per volume is $r = n_1 \, n_2 \, \langle \sigma v \rangle$, where the **thermally averaged reactivity** is:
$$\langle \sigma v \rangle = \left(\frac{8}{\pi \mu}\right)^{1/2} \frac{1}{(k_B T)^{3/2}} \int_0^{\infty} E \; \sigma(E) \; e^{-E / k_B T} \, dE$$
- The cross section $\sigma(E)$ can vary by orders of magnitude with energy — sharp peaks arise from resonances described by the [[Breit-Wigner-Resonance-Formula|Breit-Wigner formula]]
- For charged-particle reactions, the integrand is concentrated in the [[Gamow Window]] — a narrow energy range where Coulomb barrier penetration and thermal population overlap
- Reaction rates directly determine nucleosynthesis pathways: a high neutron capture rate drives the [[r-process Nucleosynthesis|r-process]], while a lower rate produces the s-process

## Examples

- In the [[r-process Nucleosynthesis|r-process]], neutron capture rates ($R \propto n_n \cdot \sigma \cdot v$) at $n_n > 10^{20}$ cm$^{-3}$ outpace $\beta^-$ decay ([[Half-Life|half-lives]] of seconds), enabling rapid buildup of neutron-rich nuclei
- [[Surrogate Reaction|Surrogate reactions]] like $(d, p)$ are used to indirectly constrain $(n, \gamma)$ reaction rates on unstable nuclei that cannot be studied with direct neutron beams

## Related Concepts

- [[Neutron Capture Cross Section]]
- [[Binding Energy]]
- [[Half-Life]]
- [[Surrogate Reaction]]
- [[r-process Nucleosynthesis]]
- [[Gamow Window]]
- [[Maxwell-Boltzmann Distribution]]
- [[S-factor]]

## References

- Iliadis, *Nuclear Physics of Stars*, Ch. 3 — Thermonuclear reactions
- Krane, *Introductory Nuclear Physics*, §11.1 — Cross sections and reaction rates
