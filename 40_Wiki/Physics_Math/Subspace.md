---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Subspace

## Definition

A **subspace** $W \subseteq V$ is a subset of a [[Vector_Spaces|vector space]] that is itself a vector space under the same operations. Quick test: verify (1) contains $\mathbf{0}$, (2) closed under addition, (3) closed under scalar multiplication.

## Key Points

- The [[Span]] of any set of vectors is always a subspace
- A subspace must pass through the origin — sets like $\{(x,y) \mid x + y = 1\}$ fail this
- The intersection of two subspaces is always a subspace; the union generally is not
- [[Dimension]] formula: $\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$

## Examples

- $\{(x, y) \mid y = 2x\}$ is a subspace of $\mathbb{R}^2$ (a line through the origin)
- $\{(x, y) \mid x \geq 0\}$ is **not** a subspace (not closed under scalar multiplication with negative scalars)

## Related Concepts

- [[Vector_Spaces]]
- [[Span]]
- [[Basis]]
- [[Dimension]]
- [[Linear Independence]]

## References

- Derived from [[Vector_Spaces]] definitions and P1.2
