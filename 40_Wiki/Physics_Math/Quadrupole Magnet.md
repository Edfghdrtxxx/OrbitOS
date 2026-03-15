---
area: "[[Physics]]"
tags: [accelerator-physics, beam-optics]
created: 2026-03-13
last_reviewed:
next_review: 2026-03-13
review_interval: 0
---
# Quadrupole Magnet

## Definition

A quadrupole magnet produces a magnetic field whose strength increases linearly with distance from the beam axis, providing a restoring (focusing) force in one transverse plane and a defocusing force in the other. It is the charged-particle-optics analogue of a thin lens, and alternating focusing–defocusing (FODO) sequences of quadrupoles are the backbone of beam transport in [[Synchrotron|synchrotrons]], fragment separators, and transfer lines.

## Key Points

- The field inside an ideal magnetic quadrupole is $B_x = gy,\; B_y = gx$, where $g = \partial B_y/\partial x$ is the **field gradient** (in $\text{T/m}$); there is zero field on axis
- A single quadrupole focuses in one plane (say horizontal) and defocuses in the other (vertical) — net focusing in both planes requires at least two quadrupoles of opposite polarity, forming a **FODO cell** (analogous to alternating convex/concave lenses in optics)
- The focusing strength (inverse focal length) is $k = g/(B\rho)$ where $B\rho = p/q$ is the beam rigidity; higher-energy beams need stronger gradients for the same focusing
- Quadrupoles are classified by aperture type: **normal-conducting** (iron-dominated, $g \lesssim 20\;\text{T/m}$) and **superconducting** (coil-dominated, $g$ up to $\sim 200\;\text{T/m}$ in the LHC inner triplets)
- In fragment separators (e.g., BigRIPS at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]], HFRS at planned HIAF), large-aperture superconducting quadrupoles collect the wide angular spread of [[In-Flight Fission]] and [[Projectile Fragmentation]] products

## Examples

- **LHC interaction regions:** Superconducting quadrupole triplets squeeze the beam to $\sim 16\;\mu\text{m}$ spot size at the collision point, maximising luminosity
- **Fragment separator optics:** The BigRIPS separator uses superconducting quadrupole triplets (STQ) between dipole stages to refocus radioactive ion beams produced by ${}^{238}\text{U}$ [[In-Flight Fission]] at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]]

## Related Concepts

- [[Synchrotron]]
- [[Cyclotron]]
- [[Lorentz Force]]
- [[In-Flight Fission]]
- [[Projectile Fragmentation]]
- [[Dipole Magnet]]
- [[Sextupole Magnet]]
- [[RIKEN Nishina Center for Accelerator-Based Science (RNC)]]
- [[Institute of Modern Physics]]

## References

- Wiedemann, *Particle Accelerator Physics*, Ch. 6 (Linear Beam Dynamics — Quadrupole Focusing)
- Lee, *Accelerator Physics*, Ch. 2 (Transverse Motion in Linear Machines)