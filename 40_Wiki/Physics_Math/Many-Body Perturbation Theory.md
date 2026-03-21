---
area: "[[Physics]]"
tags: [nuclear-structure, many-body-theory, ab-initio]
created: 2026-03-21
last_reviewed:
next_review: 2026-03-21
review_interval: 0
---
# Many-Body Perturbation Theory

## Schematics

![[Many-Body_Perturbation_Theory_diagram.svg]]
*Dyson equation in diagrammatic form: the dressed propagator (bold line) equals the bare propagator plus successive self-energy insertions (circles marked $\Sigma$), summed to all orders. (Public domain, Wikimedia Commons)*

![[Many-Body_Perturbation_Theory_diagram_3.svg]]
*Self-energy Feynman diagram in a many-body system: fermion propagators (arrowed lines) exchange interactions via boson propagators (wavy lines), representing a second-order self-energy correction. (CC0, Wikimedia Commons)*

## Definition

Many-Body Perturbation Theory (MBPT) is an [[Ab Initio]] quantum mechanical framework for computing properties of interacting many-particle systems by treating the residual interaction beyond the [[Mean-Field Potential]] as a perturbation. Starting from a reference state (typically [[Hartree-Fock]]), corrections to energies and wave functions are computed order by order using diagrammatic techniques.

## Key Points

- Begins from a single-particle reference state (e.g., [[Hartree-Fock]]) that approximates the [[Mean-Field Potential]], then adds correlation corrections perturbatively at each order
- Corrections are represented by [[Goldstone Diagram]]s (time-ordered Feynman diagrams), where each vertex corresponds to a two-body (or three-body) interaction and lines represent [[Single-Particle Energy Level]]s
- The [[Linked-Cluster Theorem]] guarantees that only connected diagrams contribute to the energy, ensuring size-extensivity — the energy scales correctly with particle number
- Most successful for closed-shell nuclei near [[Magic Numbers]] where the perturbative expansion converges well; convergence can break down for open-shell or strongly correlated systems
- Modern nuclear MBPT uses [[Chiral Effective Field Theory]] interactions as input and can include three-nucleon forces, achieving high precision for [[Binding Energy]] and [[Spectroscopic Factor]] calculations

## Examples

- Computing the ground-state energy of doubly-magic nuclei such as $^{16}\text{O}$, $^{40}\text{Ca}$, and $^{48}\text{Ca}$ from chiral $NN + 3N$ forces up to third order
- Calculating effective [[Single-Particle Energy Level]]s and [[Shell Evolution]] trends in exotic nuclei, helping explain phenomena like [[Intruder States]] and the emergence or quenching of [[Shell closure]]s far from stability

## Related Concepts

- [[Ab Initio]]
- [[Nuclear Shell Model]]
- [[Mean-Field Potential]]
- [[Hartree-Fock]]
- [[Goldstone Diagram]]
- [[Chiral Effective Field Theory]]
- [[Coupled Cluster Theory]]
- [[Self-Energy]]
- [[Linked-Cluster Theorem]]
- [[Nuclear Matrix Element]]

## References

- I. Shavitt and R. J. Bartlett, *Many-Body Methods in Chemistry and Physics: MBPT and Coupled-Cluster Theory*, Cambridge University Press (2009)
- H. Hergert et al., "Ab initio many-body perturbation theory and no-core shell model," *Phys. Rev. C* **87**, 034307 (2013)
