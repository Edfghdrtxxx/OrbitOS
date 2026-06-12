---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - nuclear-astrophysics
  - review/physics
created: 2026-03-14
---
# Reaction Rate
## Schematics

![[Reaction_Rate_thin_target.excalidraw|1000]]
*Thin-target beam geometry: a uniform beam of flux $\Phi$ illuminates a target of thickness $d$ and number density $n$ within beam area $A$; reaction products emerge at rate $R = \Phi \cdot N_t \cdot \sigma$, where $N_t = n \cdot d \cdot A$ is the number of target atoms in the beam footprint. (Author-drawn schematic, not from Commons)*

![[Reaction_Rate_cross_section.svg]]
*Scattering-center geometry defining the cross section: incoming parallel beam with impact parameter $b$ scatters into differential solid angle $d\Omega$, yielding the differential cross section $d\sigma/d\Omega$ whose integral over $4\pi$ gives the total $\sigma$ appearing in the rate formula. (CC BY-SA 4.0, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CrossSectionFig1.svg))*

## Definition

The **reaction rate** $R$ is the number of nuclear reactions occurring per unit time. It depends on the densities of the interacting species and the probability of interaction, encoded in the [[Neutron Capture Cross Section|cross section]] $\sigma$ and the relative velocity $v$ between projectile and target.

## Key Points

- **Beam-on-target form:** For a beam of flux $\Phi$ (particles/cm²/s) striking a thin target of areal density $n_t$ (nuclei/cm²), the reaction rate is $R = \Phi \cdot n_t \cdot \sigma$. Equivalently, with beam intensity $I$ (particles/s) and $N_t$ target atoms inside the beam footprint, $R = I \cdot N_t \cdot \sigma / A = \mathcal{L} \cdot \sigma$, where $\mathcal{L} = I \cdot n_t$ is the **instantaneous [[Luminosity]]** (cm⁻² s⁻¹).
- **Measured yield:** The number of detected events in an experiment of live time $t$ with detection efficiency $\varepsilon$ is $Y = R \cdot t \cdot \varepsilon = \sigma \cdot \varepsilon \cdot \int_0^t \mathcal{L}(t')\,dt'$ — i.e., the cross section is extracted as $\sigma = Y / (\varepsilon \cdot L_{\text{int}})$, where $L_{\text{int}} = \int \mathcal{L}\,dt$ is the **integrated luminosity** (cm⁻²).
- **Astrophysical (thermal) form:** In a stellar plasma where both species have thermal velocities following a [[Maxwell-Boltzmann Distribution]], the rate per volume is $r = n_1 \, n_2 \, \langle \sigma v \rangle$, where the **thermally averaged reactivity** is:
$$\langle \sigma v \rangle = \left(\frac{8}{\pi \mu}\right)^{1/2} \frac{1}{(k_B T)^{3/2}} \int_0^{\infty} E \; \sigma(E) \; e^{-E / k_B T} \, dE$$
- The cross section $\sigma(E)$ can vary by orders of magnitude with energy — sharp peaks arise from resonances described by the [[Breit-Wigner-Resonance-Formula|Breit-Wigner formula]]
- For charged-particle reactions, the integrand is concentrated in the [[Gamow Window]] — a narrow energy range where Coulomb barrier penetration and thermal population overlap
- Reaction rates directly determine nucleosynthesis pathways: a high neutron capture rate drives the [[r-process Nucleosynthesis|r-process]], while a lower rate produces the s-process

## Derivation (thin-target, beam-on-target)

Start from the geometric meaning of the [[Neutron Capture Cross Section|cross section]]: $\sigma$ is the effective area presented by a single target nucleus to an incoming projectile. For a target slab of area $A$, thickness $d$, and number density $n$ (nuclei/cm³), the number of target atoms inside the beam footprint is $N_t = n \cdot A \cdot d$, and the **total blocked area** is $N_t \cdot \sigma = n \cdot A \cdot d \cdot \sigma$.

A projectile crossing the slab interacts with probability (thin-target limit $n \sigma d \ll 1$)
$$P_{\text{int}} = \frac{N_t \sigma}{A} = n \, \sigma \, d \;=\; n_t \, \sigma,$$
where $n_t \equiv n \cdot d$ is the **areal density** (nuclei/cm²). Multiplying by the flux $\Phi$ (particles/cm²/s) and the beam area $A$ gives the rate:
$$R \;=\; \Phi \cdot A \cdot P_{\text{int}} \;=\; \Phi \cdot A \cdot n_t \cdot \sigma \;=\; I \cdot n_t \cdot \sigma,$$
with $I = \Phi \cdot A$ the beam intensity. Beyond the thin-target limit, projectile attenuation replaces this with $R = I \cdot (1 - e^{-n\sigma d})$, which reduces to the linear form when $n \sigma d \ll 1$.

The same probabilistic argument generalises to two colliding beams (collider form: $R = \sigma \cdot \mathcal{L}$) and, after averaging over a thermal velocity distribution, to the astrophysical $r = n_1 n_2 \langle \sigma v \rangle$ above.

## Examples

- In the [[r-process Nucleosynthesis|r-process]], neutron capture rates ($R \propto n_n \cdot \sigma \cdot v$) at $n_n > 10^{20}$ cm$^{-3}$ outpace $\beta^-$ decay ([[Half-Life|half-lives]] of seconds), enabling rapid buildup of neutron-rich nuclei
- [[Surrogate Reaction|Surrogate reactions]] like $(d, p)$ are used to indirectly constrain $(n, \gamma)$ reaction rates on unstable nuclei that cannot be studied with direct neutron beams
- A typical [[Radioactive Isotope Beam|RIB]] experiment with $I = 10^5$ pps, a CH₂ target of $n_t = 10^{22}$ atoms/cm², and $\sigma = 10$ mb $= 10^{-26}$ cm² yields $R = 10^{5} \cdot 10^{22} \cdot 10^{-26} = 10$ reactions/s — the canonical rate scale for in-beam spectroscopy at BigRIPS/RIBLL

## Related Concepts

- [[Neutron Capture Cross Section]]
- [[Differential Cross Section]]
- [[Luminosity]]
- [[Flux]]
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
- Leo, *Techniques for Nuclear and Particle Physics Experiments*, §2.6 — Cross sections and yield in beam-on-target experiments
