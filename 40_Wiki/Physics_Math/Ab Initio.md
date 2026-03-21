---
area: "[[Physics]]"
tags: [nuclear-theory, computational-physics, quantum-mechanics]
created: 2026-03-21
last_reviewed:
next_review: 2026-03-21
review_interval: 0
---
# Ab Initio

## Schematics

![[Ab_Initio_schematic.png]]
*Hartree-Fock self-consistent field (SCF) procedure: the foundational iterative algorithm of ab initio calculations, cycling through Fock matrix formation and diagonalization until convergence. (CC BY-SA 3.0, Wikimedia Commons)*

![[Ab_Initio_diagram_2.svg]]
*Hierarchy of ab initio theory levels showing the electron correlation energy captured beyond [[Hartree-Fock Method|Hartree-Fock]]: post-HF methods progressively approach the exact nonrelativistic solution of the Schrödinger equation. (Public domain, Wikimedia Commons)*

## Definition

**Ab initio** (Latin: "from the beginning") refers to computational methods that solve the quantum many-body problem starting directly from fundamental physical laws and known constants, without empirical parameters or phenomenological fitting. In [[Nuclear Shell Model|nuclear structure]], ab initio methods derive nuclear properties from realistic nucleon-nucleon (NN) and three-nucleon (3N) interactions rooted in [[Chiral Effective Field Theory|chiral effective field theory]].

## Key Points

- Ab initio methods contrast with phenomenological models (e.g., the traditional [[Nuclear Shell Model]] with fitted effective interactions or the [[Liquid Drop Model]]) by requiring no adjustable parameters beyond the underlying interaction
- In nuclear physics, major ab initio frameworks include the [[No-Core Shell Model]] (NCSM), [[Coupled Cluster Theory|Coupled Cluster]] (CC), [[In-Medium Similarity Renormalization Group|IM-SRG]], and Self-Consistent Green's Function (SCGF) methods
- In quantum chemistry, the [[Hartree-Fock Method]] serves as the starting point; post-HF methods (Configuration Interaction, Coupled Cluster, Møller-Plesset perturbation theory) systematically recover electron correlation energy
- Computational cost scales steeply with particle number — nuclear ab initio calculations are currently feasible up to medium-mass nuclei ($A \lesssim 100$), a frontier that has expanded dramatically since ~2010
- These methods successfully reproduce [[Binding Energy|binding energies]], [[Magic Numbers|magic numbers]], [[Shell Evolution|shell evolution]], and [[Spin-Orbit Coupling|spin-orbit splittings]] from first principles

## Examples

- **Nuclear:** NCSM calculations of ${}^{4}\text{He}$ and $p$-shell nuclei using chiral NN+3N forces reproduce experimental binding energies and spectra without fitting
- **Chemistry:** Coupled Cluster with Singles and Doubles (CCSD(T)) is often called the "gold standard" of quantum chemistry for molecular energy calculations
- **Validation:** Ab initio predictions of the ${}^{48}\text{Ca}$ neutron skin thickness and ${}^{78}\text{Ni}$ [[Shell closure|shell closure]] have been confirmed experimentally, demonstrating predictive power for exotic nuclei

## Related Concepts

- [[Nuclear Shell Model]]
- [[Mean-Field Potential]]
- [[Harmonic Oscillator]] — common basis expansion for NCSM
- [[Eigenvalues and Eigenvectors]] — central to diagonalization-based methods
- [[Hilbert Space]] — the many-body Hilbert space is truncated for tractability
- [[Hartree-Fock Method]]
- [[Coupled Cluster Theory]]
- [[Chiral Effective Field Theory]]
- [[No-Core Shell Model]]
- [[In-Medium Similarity Renormalization Group]]

## References

- Barrett, Navrátil, Vary, "Ab initio no core shell model," *Prog. Part. Nucl. Phys.* **69**, 131 (2013)
- Hergert et al., "In-Medium Similarity Renormalization Group for Nuclear Structure," *Phys. Rep.* **621**, 165 (2016)
- Hagen et al., "Coupled-cluster computations of atomic nuclei," *Rep. Prog. Phys.* **77**, 096302 (2014)