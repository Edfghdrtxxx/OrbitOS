---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - reactions
  - astrophysics
  - review/physics
created: 2026-04-22
last_reviewed:
next_review: 2026-04-22
review_interval: 0
sr-due: 2026-04-24
sr-interval: 1
sr-ease: 230
---
# Direct Capture vs Resonance

## Schematics

![[Direct_Capture_vs_Resonance_cross_section.png]]
*Neutron absorption cross section vs. neutron energy for $^{10}\text{B}$ (upper curve) and $^{11}\text{B}$ (lower curve), log–log. $^{10}\text{B}$ shows a clean monotonic $1/v$ slope characteristic of pure direct (non-resonant) capture; $^{11}\text{B}$ shows the same $1/v$ baseline overlaid with compound-nucleus resonance peaks near $\sim 10^{4}$–$10^{6}\,\text{eV}$. (Public domain, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Neutroncrosssectionboron.png))*

![[Direct_Capture_vs_Resonance_mechanism.excalidraw|1000]]
*Energy-level schematic of the two mechanisms. **Left:** direct capture — a single electromagnetic transition (dashed red $\gamma$) takes $a + X$ from the entrance continuum straight into a bound state of $Y$ (ground or any excited state). **Right:** resonant capture — compound-nucleus formation into $Y^*$ with partial width $\Gamma_a$, followed by $\gamma$-decay with partial width $\Gamma_\gamma$. Both channels add incoherently to the stellar rate.*

## Definition

**Direct capture (DC)** and **resonant capture (RC)** are two competing mechanisms for the same radiative-capture reaction $a + X \rightarrow Y + \gamma$. Direct capture is a one-step electromagnetic transition from the scattering continuum directly into a bound state of $Y$; resonant capture proceeds through a long-lived compound-nucleus state $Y^*$ whose excitation energy matches the entrance-channel energy.

## Key Points

- **Direct capture** cross section is smooth in energy, set by the final-state [[Spectroscopic Factor]] and the entrance-channel wavefunction overlap. For s-wave neutron capture it follows a $1/v$ law; for charged particles it is suppressed by the [[Coulomb Barrier]] (Gamow factor).
- **Resonant capture** exhibits Breit–Wigner peaks at discrete CM energies; the area under a narrow resonance is fixed by the resonance strength $\omega\gamma \propto \Gamma_a \Gamma_\gamma / \Gamma_{\text{tot}}$ (full form in Theory below; see also [[Breit-Wigner-Resonance-Formula]]).
- The total stellar [[Reaction Rate]] $\langle\sigma v\rangle$ is the **sum** of both components. Whichever contribution falls inside the Gamow window dominates; a single narrow resonance there can enhance the rate by orders of magnitude.
- Direct capture dominates **between** resonances and **below** the lowest resonance — i.e. whenever no resonance sits in the energy window of interest.
- Experimental discriminator: the astrophysical S-factor $S(E)$ is smooth and slowly varying for direct capture but shows sharp peaks at each resonance; modern rate compilations (e.g. NACRE, STARLIB) fit both components jointly.

## Theory

**Direct capture cross section.** A single electromagnetic transition of multipolarity $L$ from the scattering state $\chi_i(\vec{r}, E)$ to the bound state $\phi_f(\vec{r})$ of $Y$ gives
$$
\sigma_{\text{DC}}(E) \;=\; \frac{8\pi}{\hbar v}\,\frac{L+1}{L\,[(2L+1)!!]^{2}}\left( \frac{E_\gamma}{\hbar c} \right)^{2L+1}\, S_f\, |I_L(E)|^{2}
$$
with final-state [[Spectroscopic Factor]] $S_f$ and radial overlap $I_L(E) = \int_0^\infty \phi_f(r)\, \mathcal{O}_L(r)\, \chi_i(r,E)\, dr$. At low energy $|I_L|^{2}$ is smooth, so $\sigma_{\text{DC}}$ is smooth in $E$: the $1/v$ factor from $v^{-1}$ drives $s$-wave neutron capture to $\sigma \propto 1/\sqrt{E}$, while charged-particle DC picks up the [[Gamow Factor]] $e^{-2\pi\eta}$ through $\chi_i$ — the [[Astrophysical S-factor]] $S(E) \equiv E\,\sigma(E)\,e^{2\pi\eta}$ removes it.

**Breit–Wigner resonance.** For an isolated resonance at CM energy $E_R$ with entrance width $\Gamma_a$, $\gamma$-decay width $\Gamma_\gamma$, and total width $\Gamma_{\text{tot}} = \Gamma_a + \Gamma_\gamma + \dots$:
$$
\sigma_{\text{BW}}(E) \;=\; \frac{\pi}{k^{2}}\, g_J \, \frac{\Gamma_a(E)\,\Gamma_\gamma(E)}{(E - E_R)^{2} + (\Gamma_{\text{tot}}/2)^{2}}, \qquad g_J \;=\; \frac{2J+1}{(2J_1+1)(2J_2+1)}
$$
Integrating over energy yields the resonance strength
$$
\omega\gamma \;\equiv\; g_J \cdot \frac{\Gamma_a\,\Gamma_\gamma}{\Gamma_{\text{tot}}}
$$
which is the quantity the stellar rate actually samples — independent of the width as long as the resonance is narrow (see [[Breit-Wigner-Resonance-Formula]]).

**Stellar rate — non-resonant DC.** Folding $\sigma_{\text{DC}}$ with the Maxwell–Boltzmann distribution gives the [[Gamow Window]] form for charged particles,
$$
\langle \sigma v \rangle_{\text{DC}} \;\propto\; \frac{S_{\text{eff}}(E_0)}{T^{2/3}}\, \exp\!\left(-\frac{3\,E_0}{kT}\right), \qquad E_0 = \left( \frac{\pi\,\alpha\, Z_1 Z_2 \sqrt{\mu c^{2}/2}\, kT}{\hbar c} \right)^{2/3}
$$
For neutron DC there is no Coulomb barrier and the $1/v$ law gives $\langle \sigma v \rangle \approx \text{const}$ across stellar temperatures.

**Stellar rate — narrow resonance.** When $\Gamma_{\text{tot}} \ll kT$, the Breit–Wigner peak acts as a δ-function in energy and
$$
\langle \sigma v \rangle_{\text{RC}} \;=\; \left( \frac{2\pi}{\mu\, kT} \right)^{3/2} \hbar^{2} \, (\omega\gamma)_R \, \exp\!\left(-\frac{E_R}{kT}\right)
$$
**Total rate.** The observable stellar [[Reaction Rate]] is the incoherent sum
$$
\langle \sigma v \rangle_{\text{tot}}(T) \;=\; \langle \sigma v \rangle_{\text{DC}} \;+\; \sum_{R} \langle \sigma v \rangle_{\text{RC},R}
$$
A single resonance with $E_R$ inside the Gamow window typically enhances the rate by orders of magnitude over DC alone; resonances outside the window contribute only through their Breit–Wigner tails (relevant when the window sits close to but not on a resonance — the subthreshold-resonance case in $^{12}\text{C}(\alpha,\gamma)^{16}\text{O}$).

## Examples

- **Neutron capture on $^{10}\text{B}$ vs. $^{11}\text{B}$**: $^{10}\text{B}(n,\alpha)^{7}\text{Li}$ shows a clean $1/v$ curve over eight decades in energy (pure direct), while $^{11}\text{B}(n,\gamma)$ displays resonance peaks on a $1/v$ baseline — see the schematic above.
- **$^{12}\text{C}(p,\gamma)^{13}\text{N}$** (CNO cycle entry): dominated by direct capture at the lowest stellar energies, with the $E_p \approx 0.4\,\text{MeV}$ resonance (2.37 MeV level in $^{13}\text{N}$) providing resonant enhancement at slightly higher temperatures.
- **$^{12}\text{C}(\alpha,\gamma)^{16}\text{O}$** (nuclear-astrophysics "holy grail"): the rate at $T_9 \sim 0.2$ requires summing direct E1/E2 capture and the low-energy tails of subthreshold resonances in $^{16}\text{O}$.

## Related Concepts

- [[Breit-Wigner-Resonance-Formula]]
- [[Neutron Capture Cross Section]]
- [[Reaction Rate]]
- [[Giant Resonance]]
- [[Direct Reactions]]
- [[Coulomb Barrier]]
- [[Spectroscopic Factor]]
- [[Differential Cross Section]]
- [[Gamma Ray]]
- [[Nuclear Transition]]
- [[p-process]]
- [[r-process Nucleosynthesis]]
- [[Gamow Window]]
- [[Gamow Factor]]
- [[Astrophysical S-factor]]
- [[Compound Nucleus Reaction]]

## References

- C. Iliadis, *Nuclear Physics of Stars*, 2nd ed., Wiley-VCH (2015), ch. 3 (reaction mechanisms) and ch. 4 (thermonuclear rates).
- C. E. Rolfs & W. S. Rodney, *Cauldrons in the Cosmos*, University of Chicago Press (1988).
