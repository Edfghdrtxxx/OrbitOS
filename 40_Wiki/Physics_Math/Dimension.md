---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Dimension

## Definition

The **dimension** of a [[Vector_Spaces|vector space]] $V$, written $\dim(V)$, is the number of vectors in any [[Basis]] of $V$. All bases have the same size, so dimension is well-defined.

## Key Points

- $\dim(\mathbb{R}^n) = n$; a spin-1 system in QM has $\dim = 3$ (states $|{+1}\rangle, |0\rangle, |{-1}\rangle$)
- Any set of more than $\dim(V)$ vectors in $V$ must be [[Linear Independence|linearly dependent]]
- **Dimension formula** for [[Subspace|subspaces]]: $\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$
- A [[Subspace]] of $\mathbb{R}^n$ has dimension $\leq n$

## Examples

- The $xy$-plane in $\mathbb{R}^3$ has dimension 2
- The solution set of $x - 2y + z = 0$ in $\mathbb{R}^3$ has $\dim = 2$ (one constraint removes one dimension)

## Related Concepts

- [[Vector_Spaces]]
- [[Basis]]
- [[Subspace]]
- [[Rank]]
- [[Hilbert Space]]

## References

- Derived from [[Vector_Spaces]] definitions and key results
