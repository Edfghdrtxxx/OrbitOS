---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Span

## Definition

The **span** of vectors $\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ is the set of all possible [[Linear Combination|linear combinations]]: $\text{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_n\} = \{c_1\mathbf{v}_1 + \cdots + c_n\mathbf{v}_n \mid c_i \in F\}$. It is always a [[Subspace]] of the [[Vector_Spaces|vector space]].

## Key Points

- The span of any set of vectors is itself a [[Subspace]] (closed under addition and scalar multiplication)
- Adding a [[Linear Independence|linearly dependent]] vector does not increase the span
- A set of vectors spans $V$ if every $\mathbf{v} \in V$ can be expressed as a [[Linear Combination]] of them
- A [[Basis]] is a minimal spanning set (linearly independent + spans the space)

## Examples

- $\text{span}\{(1,0,0), (0,1,0)\} = \{(x,y,0) \mid x,y \in \mathbb{R}\}$ — the $xy$-plane in $\mathbb{R}^3$
- $\text{span}\{(1,2)\} = \{(t, 2t) \mid t \in \mathbb{R}\}$ — a line through the origin

## Related Concepts

- [[Vector_Spaces]]
- [[Linear Independence]]
- [[Basis]]
- [[Subspace]]
- [[Dimension]]

## References

- Derived from [[Vector_Spaces]] definitions
