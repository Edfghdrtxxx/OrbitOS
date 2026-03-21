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

- No adjustable parameters — contrasts with phenomenological models (e.g., [[Nuclear Shell Model]] with fitted interactions, [[Liquid Drop Model]])
- Nuclear frameworks: [[No-Core Shell Model]] (NCSM), [[Coupled Cluster Theory|Coupled Cluster]] (CC), [[In-Medium Similarity Renormalization Group|IM-SRG]], Self-Consistent Green's Function (SCGF)
- Chemistry frameworks: [[Hartree-Fock Method]] as starting point; post-HF methods (CI, CC, MP2) recover electron correlation energy
- Computational cost scales steeply with $A$ — currently feasible up to medium-mass nuclei ($A \lesssim 100$)
- Reproduces [[Binding Energy|binding energies]], [[Magic Numbers|magic numbers]], [[Shell Evolution|shell evolution]], and [[Spin-Orbit Coupling|spin-orbit splittings]] from first principles

## Examples

- **Nuclear:** Ab initio predictions of ${}^{78}\text{Ni}$ as doubly magic were confirmed by first spectroscopy in 2019 (Nature **570**, 190), validating [[Shell closure|shell closure]] far from stability
- **Chemistry:** CCSD(T) — Coupled Cluster with Singles, Doubles, and perturbative Triples — is the "gold standard" of quantum chemistry for molecular energy calculations

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
- Hergert et al., "The in-medium similarity renormalization group: A novel ab initio method for nuclei," *Phys. Rep.* **621**, 165 (2016)
- Hagen et al., "Coupled-cluster computations of atomic nuclei," *Rep. Prog. Phys.* **77**, 096302 (2014)