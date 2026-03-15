---
area: "[[Physics]]"
tags: [nuclear-physics, accelerator-physics, radioactive-beam]
aliases: [secondary beam, cocktail beam]
created: 2026-03-15
last_reviewed:
next_review: 2026-03-15
review_interval: 0
---
# Secondary Beam

## Definition

A secondary beam is a beam of exotic or radioactive nuclei produced when a high-energy primary (stable) beam strikes a production target. The resulting [[Radioactive Isotope Beam]] is separated by a [[Fragment Separator]] and delivered to downstream experiments for nuclear structure and reaction studies.

## Key Points

- **Cocktail beam:** After separation, the secondary beam is typically a mixture of several isotopic species rather than a pure single-isotope beam. Purities range from a few percent for the most exotic species to >90% near stability. This necessitates event-by-event [[Particle Identification]] using the $\Delta E$-$B\rho$-ToF method.
- **Lower intensity than primary beams:** Primary beams reach $10^6$--$10^9$ pps, while secondary beam intensities span orders of magnitude -- moderately exotic RIBs yield $10^3$--$10^6$ pps, and the most exotic species may produce only a few particles per second.
- **Production methods:** Two complementary approaches exist. **In-flight fragmentation** (used at [[HIRFL]], [[BigRIPS|RIKEN]], FRIB, GSI) separates [[Projectile Fragmentation]] products in microseconds via a [[Fragment Separator]], accessing sub-microsecond half-lives and delivering beams at high energy. **[[ISOL]]** (Isotope Separation On-Line, at ISOLDE, ISAC) stops products in a thick target, re-ionizes and mass-separates them at low energy, producing excellent beam quality but limited to species with half-lives $\gtrsim$ ms.
- **Characteristics:** Secondary beams retain nearly the primary beam velocity (in-flight method), are forward-focused by the Lorentz boost, and carry larger emittance and energy spread compared to primary beams due to the stochastic nature of the fragmentation process.
- **Intensity equation:** The secondary beam rate is $R_{\text{sec}} = R_{\text{prim}} \cdot n_t \cdot \sigma_{\text{prod}} \cdot \epsilon_{\text{sep}} \cdot T_{\text{det}}$, where the production cross section $\sigma_{\text{prod}}$ drops exponentially with distance from stability.

## Examples

- At [[RIBLL|RIBLL2]], $^{12}$C fragmentation at ~400 MeV/u on a $^{9}$Be target produces a cocktail of neutron-rich carbon, boron, and beryllium isotopes as secondary beams for reaction studies at the ETF
- At [[BigRIPS]], $^{238}$U fission and fragmentation produces secondary beams of the most neutron-rich nuclei near the $r$-process path

## Related Concepts

- [[Radioactive Isotope Beam]]
- [[Projectile Fragmentation]]
- [[Fragment Separator]]
- [[ISOL]]
- [[Particle Identification]]
- [[RIBLL]]
- [[BigRIPS]]
- [[Magnetic Rigidity]]

## References

- Y. Blumenfeld et al., "Comparison of ISOL and in-flight methods," *Phys. Scr.* **T152** (2013) 014023
- O.B. Tarasov & D. Bazin, "LISE++ code," *NIM B* **266** (2008) 4657