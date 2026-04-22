---
area: "[[Physics]]"
tags: [nuclear-physics, reactions, astrophysics, review/physics]
created: 2026-04-22
last_reviewed:
next_review: 2026-04-22
review_interval: 0
---
# Direct Capture vs Resonance

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Direct_Capture_vs_Resonance_cross_section.png]]
*Neutron absorption cross section vs. neutron energy for $^{10}\text{B}$ (upper curve) and $^{11}\text{B}$ (lower curve), log–log. $^{10}\text{B}$ shows a clean monotonic $1/v$ slope characteristic of pure direct (non-resonant) capture; $^{11}\text{B}$ shows the same $1/v$ baseline overlaid with compound-nucleus resonance peaks near $\sim 10^{4}$–$10^{6}\,\text{eV}$. (Public domain, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Neutroncrosssectionboron.png))*

## Definition

**Direct capture (DC)** and **resonant capture (RC)** are two competing mechanisms for the same radiative-capture reaction $a + X \rightarrow Y + \gamma$. Direct capture is a one-step electromagnetic transition from the scattering continuum directly into a bound state of $Y$; resonant capture proceeds through a long-lived compound-nucleus state $Y^*$ whose excitation energy matches the entrance-channel energy.

## Key Points

- **Direct capture** cross section is smooth in energy, set by the final-state [[Spectroscopic Factor]] and the entrance-channel wavefunction overlap. For s-wave neutron capture it follows a $1/v$ law; for charged particles it is suppressed by the [[Coulomb Barrier]] (Gamow factor).
- **Resonant capture** exhibits Breit–Wigner peaks at discrete CM energies; the area under a narrow resonance is fixed by the resonance strength $\omega\gamma = \frac{2J+1}{(2J_1+1)(2J_2+1)} \cdot \frac{\Gamma_a \Gamma_\gamma}{\Gamma_{\text{tot}}}$ — see [[Breit-Wigner-Resonance-Formula]].
- The total stellar [[Reaction Rate]] $\langle\sigma v\rangle$ is the **sum** of both components. Whichever contribution falls inside the Gamow window dominates; a single narrow resonance there can enhance the rate by orders of magnitude.
- Direct capture dominates **between** resonances and **below** the lowest resonance — i.e. whenever no resonance sits in the energy window of interest.
- Experimental discriminator: the astrophysical S-factor $S(E)$ is smooth and slowly varying for direct capture but shows sharp peaks at each resonance; modern rate compilations (e.g. NACRE, STARLIB) fit both components jointly.

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
- [[Astrophysical S-factor]]
- [[Compound Nucleus Reaction]]

## References

- C. Iliadis, *Nuclear Physics of Stars*, 2nd ed., Wiley-VCH (2015), ch. 3 (reaction mechanisms) and ch. 4 (thermonuclear rates).
- C. E. Rolfs & W. S. Rodney, *Cauldrons in the Cosmos*, University of Chicago Press (1988).
