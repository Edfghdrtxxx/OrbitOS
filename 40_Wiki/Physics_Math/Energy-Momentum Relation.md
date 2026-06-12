---
area: "[[Physics]]"
tags:
  - special-relativity
  - kinematics
  - relativistic-mechanics
  - invariants
  - review/physics
created: 2026-05-21
---
# Energy-Momentum Relation

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Energy-Momentum_Relation_schematic.svg]]
*Minimal mass-shell diagram in the $(p_{1}, p_{0}) = (p, E/c)$ momentum plane (blue $m = 0$, green $m > 0$). The $m = 0$ case is the light cone $p_{0} = \pm |p_{1}|$ — photons live on the diagonals. The $m > 0$ case is the hyperbola $p_{0}^{2} - p_{1}^{2} = (mc)^{2}$, asymptotic to the light cone at large $|p_{1}|$. The red triangle at the bottom marks the **negative-energy half** ($p_{0} < 0$ inside the lower light cone) — classically excluded for ordinary particles, reinterpreted as the antiparticle sector via the Feynman–Stückelberg picture in QFT. (Public domain, Wikimedia Commons)*

![[Energy-Momentum_Relation_graph.svg]]
*Mass-shell families in $(p, E)$ space for several invariant masses. Each hyperbola $E^{2} - (pc)^{2} = (mc^{2})^{2}$ is the locus of all 4-momenta accessible to a particle of mass $m$ in any inertial frame — different Lorentz observers slide a given particle along its hyperbola, but cannot move it between them. The asymptotes are the $m = 0$ light cones $E = \pm pc$. (CC0, Wikimedia Commons)*

## Definition

The **energy–momentum relation** is the Lorentz-invariant algebraic constraint linking total energy $E$, three-momentum $\mathbf{p}$, and invariant mass $m$ of a free particle in [[Special Relativity]]:
$$E^{2} \;=\; (pc)^{2} \;+\; (m c^{2})^{2}.$$
Equivalently, it is the Minkowski norm of the four-momentum, $p^{\mu} p_{\mu} = E^{2}/c^{2} - |\mathbf{p}|^{2} = (mc)^{2}$, defining the *mass shell* in $(E, pc)$ space.

## Key Points

- **Frame-invariant.** $E$ and $\mathbf{p}$ change under [[Lorentz Transformations]], but $E^{2} - (pc)^{2}$ is invariant — every observer agrees on the rest mass $m$.
- **Massless limit.** For $m = 0$, $E = pc$ — applies to [[Photon]]s, gluons, gravitons, and ultra-relativistic limits of massive particles.
- **Non-relativistic expansion.** For $pc \ll mc^{2}$, $E \approx mc^{2} + p^{2}/(2m)$ — rest energy plus the classical kinetic term $p^{2}/2m$, recovering Newtonian kinematics.
- **Ultra-relativistic expansion.** For $pc \gg mc^{2}$, $E \approx pc + (mc^{2})^{2}/(2pc)$ — momentum dominates, rest mass enters as a small correction.
- **Invariant-mass spectroscopy.** Reconstructing the four-momentum sum of a decay/reaction product system and computing $M^{2}c^{4} = (\sum E)^{2} - (\sum \mathbf{p}\, c)^{2}$ yields the invariant mass of the parent — peaks at the decaying state's rest mass independent of lab-frame boost.

## Examples

- **Invariant-mass peak.** $J/\psi \to e^{+}e^{-}$: measuring the four-momenta of the two leptons and forming $M^{2}c^{4} = (E_{1}+E_{2})^{2} - (\mathbf{p}_{1}+\mathbf{p}_{2})^{2}c^{2}$ yields a sharp resonance at $3.097\,\mathrm{GeV}/c^{2}$ regardless of how the $J/\psi$ was produced.
- **Missing-mass spectroscopy.** Given beam, target, and detected ejectile four-momenta in $(p, d)$, $(p, p')$, or $(d, ^{3}\mathrm{He})$ reactions, the undetected recoil's mass follows from $p^{\mu}_{\mathrm{recoil}} = p^{\mu}_{\mathrm{beam}} + p^{\mu}_{\mathrm{target}} - p^{\mu}_{\mathrm{ejectile}}$ and the energy–momentum relation — the staple kinematic tool of [[Missing-Mass Spectroscopy]] for nuclear-structure work at [[OEDO]], [[SHARAQ Spectrometer]], and [[RCNP]].

## Related Concepts

- [[Lorentz Factor]]
- [[Relativistic Momentum]]
- [[Relativistic Total Energy]]
- [[Relativistic Kinetic Energy]]
- [[Relativistic Force]]
- [[Relativistic Forms of Physical Quantities]]
- [[Four-Momentum]]
- [[Invariant Mass]]
- [[Mass-Energy Equivalence]]
- [[Photon]]
- [[Massless Particle]]
- [[Missing-Mass Spectroscopy]]
- [[Inverse Kinematics]]
- [[Special Relativity]]
- [[Lorentz Transformations]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Appendix on relativistic kinematics.
- D. J. Griffiths, *Introduction to Elementary Particles*, 2nd ed. (Wiley-VCH, 2008) — Ch. 3, relativistic kinematics and invariants.
- W. Rindler, *Relativity: Special, General, and Cosmological*, 2nd ed. (Oxford, 2006) — Ch. 6.
- Wikipedia: [Energy–momentum relation](https://en.wikipedia.org/wiki/Energy%E2%80%93momentum_relation).
