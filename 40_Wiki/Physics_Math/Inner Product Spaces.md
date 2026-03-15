---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Inner Product Spaces

## Definition

An **inner product space** is a [[Vector_Spaces|vector space]] equipped with an inner product $\langle \cdot, \cdot \rangle$ — a function that takes two vectors and returns a scalar, satisfying linearity, conjugate symmetry, and positive-definiteness. It enables notions of length, angle, and orthogonality.

## Key Points

- The inner product induces a norm: $\|\mathbf{v}\| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$
- Two vectors are **orthogonal** if $\langle \mathbf{u}, \mathbf{v} \rangle = 0$
- In QM, the inner product $\langle \phi | \psi \rangle$ gives the probability amplitude for measuring state $|\psi\rangle$ in state $|\phi\rangle$
- A complete inner product space is a [[Hilbert Space]]

## Examples

- Standard inner product on $\mathbb{R}^n$: $\langle \mathbf{u}, \mathbf{v} \rangle = \sum u_i v_i$ (dot product)
- On $\mathbb{C}^n$: $\langle \mathbf{u}, \mathbf{v} \rangle = \sum \bar{u}_i v_i$ (conjugate on first argument)

## Related Concepts

- [[Vector_Spaces]]
- [[Hilbert Space]]
- [[Basis]]
- [[Eigenvalues and Eigenvectors]]
- [[Linear_Algebra]]

## References

- Forward reference from [[Vector_Spaces]] (Phase 0.1 topic 8)
