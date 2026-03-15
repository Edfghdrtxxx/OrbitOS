---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, quantum-mechanics, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Hilbert Space

## Definition

A **Hilbert space** is a (possibly infinite-dimensional) [[Vector_Spaces|vector space]] equipped with an [[Inner Product Spaces|inner product]] that is **complete** — every Cauchy sequence converges within the space. In quantum mechanics, the state space of any quantum system is a Hilbert space.

## Key Points

- Finite-dimensional Hilbert spaces are just $\mathbb{C}^n$ with the standard inner product
- Infinite-dimensional examples: $L^2$ (square-integrable functions), used for position/momentum wave functions
- Completeness distinguishes Hilbert spaces from generic [[Inner Product Spaces]] — it guarantees that limits of states stay in the space
- Every separable Hilbert space has a countable orthonormal [[Basis]]

## Examples

- Spin-1/2 system: $\mathcal{H} = \mathbb{C}^2$ with [[Basis]] $\{|\uparrow\rangle, |\downarrow\rangle\}$
- Particle on a line: $\mathcal{H} = L^2(\mathbb{R})$, states are wave functions $\psi(x)$

## Related Concepts

- [[Vector_Spaces]]
- [[Inner Product Spaces]]
- [[Basis]]
- [[Dimension]]
- [[Eigenvalues and Eigenvectors]]

## References

- Referenced in [[Vector_Spaces]] QM Connection section
