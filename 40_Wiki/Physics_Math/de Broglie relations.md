---
area: "[[Physics]]"
tags:
  - quantum-mechanics
  - wave-particle-duality
  - review/physics
created: 2026-07-28
last_reviewed:
next_review: 2026-07-28
review_interval: 0
---
# de Broglie relations

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` inline, `$$...$$` display). Prefer the canonical academic / textbook form (full PDG-style expression, conventional symbols, standard correction terms) over simplified or pedagogical variants.

## Schematics

![[de_Broglie_relations_schematic.svg|249]]
*Free-particle de Broglie wave along $x$: top panel a monochromatic plane wave $\Psi \propto e^{i(px-Et)/\hbar}$; bottom panel a localized wave packet whose envelope tracks the particle. Together they illustrate $p=\hbar k$ and $E=\hbar\omega$ for a pure momentum eigenstate versus a realistic localized state. (Public domain, Wikimedia Commons)*

![[de_Broglie_relations_principle.gif|302]]
*Three free electrons at increasing group velocity (top → bottom): shorter wavelength $\lambda=h/p$ and lower phase velocity as $p$ rises — the geometric content of the de Broglie momentum relation. (CC BY-SA 4.0, Wikimedia Commons)*

![[de_Broglie_relations_diagram.jpg|318]]
*Bohr-orbit picture of a hydrogenic electron as a closed standing [[Matter Wave]]: an integer number of de Broglie wavelengths fit the circumference ($2\pi r = n\lambda$), recovering angular-momentum quantization from $p=h/\lambda$. (Public domain, Wikimedia Commons)*

## Definition

The **de Broglie relations** assign a wave character to any free particle by identifying its energy $E$ and momentum $p$ with the angular frequency $\omega$ and wave number $k$ of an associated [[Matter Wave]]:
$$E = \hbar\omega,\qquad p = \hbar k.$$
Equivalently, in frequency–wavelength form,
$$E = h f,\qquad p = \frac{h}{\lambda},$$
so the **de Broglie wavelength** is $\lambda = h/p$ (and the reduced wavelength $\bar\lambda = \hbar/p$).

## Key Points

- **Matter as wave.** Louis de Broglie (1924) extended the photon relations of Planck and Einstein to *all* free particles — electrons, neutrons, nuclei, atoms — completing [[Wave-Particle Duality]].
- **Angular form as QM premise.** $E=\hbar\omega$ and $p=\hbar k$ are the starting point for writing free-particle plane waves $\Psi \propto e^{i(kx-\omega t)}$ and for deriving the [[Schrodinger-Equation]] from the classical energy $E=p^{2}/2m+V$ via the [[Hamilton-Jacobi Equation]] / eikonal analogy.
- **Wavelength vs momentum.** Heavier or faster particles have shorter $\lambda$; macroscopic $p$ makes $\lambda$ unobservably small. In nuclear and particle physics one often quotes the reduced wavelength $\bar\lambda=\hbar/p$ (e.g. in [[Breit-Wigner-Resonance-Formula]] cross-section formulas).
- **Phase vs group velocity.** For a free-particle dispersion $E(p)$, the group velocity $v_g=\partial\omega/\partial k$ equals the classical particle velocity, while the phase velocity $v_p=\omega/k$ generally does not — a localized particle is a [[Wave Packet]], not a pure plane wave.
- **Not a dynamical law.** The relations fix the *kinematics* of the matter wave; the actual time evolution is governed by the Schrödinger (or Dirac/Klein–Gordon) equation, and interference/diffraction experiments test the wavelength assignment.

## Examples

- **Electron diffraction (Davisson–Germer, 1927).** Electrons of kinetic energy $K$ have $p=\sqrt{2m_e K}$ and $\lambda=h/p$; Bragg peaks from a nickel crystal match this $\lambda$, confirming $p=h/\lambda$ for matter.
- **Bohr quantization from standing waves.** Demanding an integer number of wavelengths on a circular orbit, $2\pi r=n\lambda=nh/p$, immediately yields $L=rp=n\hbar$ — the original Bohr angular-momentum rule recovered from de Broglie.

## Related Concepts

- [[Schrodinger-Equation]]
- [[Hamilton-Jacobi Equation]]
- [[Photoelectric Effect]]
- [[Compton Scattering]]
- [[Energy-Momentum Relation]]
- [[Probability Amplitude]]
- [[Superposition]]
- [[Harmonic Oscillator]]
- [[Hilbert Space]]
- [[Angular Momentum]]
- [[Breit-Wigner-Resonance-Formula]]
- [[Wave-Particle Duality]]
- [[Matter Wave]]
- [[de Broglie Wavelength]]
- [[Wave Packet]]
- [[Phase Velocity]]
- [[Group Velocity]]
- [[Planck Relation]]
- [[Davisson-Germer Experiment]]
- [[Bohr Model]]

## References

- L. de Broglie, *Recherches sur la théorie des quanta* (doctoral thesis, Paris, 1924); Ann. Phys. (Paris) **3**, 22 (1925).
- D. J. Griffiths & D. F. Schroeter, *Introduction to Quantum Mechanics*, 3rd ed. (Cambridge, 2018) — Ch. 1 (de Broglie hypothesis; wave packets).
- Wikipedia: [Matter wave](https://en.wikipedia.org/wiki/Matter_wave), [de Broglie hypothesis](https://en.wikipedia.org/wiki/Matter_wave#de_Broglie_hypothesis).
