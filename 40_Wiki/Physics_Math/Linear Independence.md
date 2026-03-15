---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Linear Independence

## Definition

Vectors $\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ are **linearly independent** if the only solution to $c_1\mathbf{v}_1 + \cdots + c_n\mathbf{v}_n = \mathbf{0}$ is $c_1 = c_2 = \cdots = c_n = 0$. Equivalently, no vector in the set can be written as a [[Linear Combination]] of the others.

## Key Points

- If any non-trivial combination gives $\mathbf{0}$, the set is **linearly dependent** — at least one vector is redundant
- Test by row-reducing the matrix formed by the vectors: independent iff [[Rank]] equals the number of vectors
- A [[Basis]] is a linearly independent set that [[Span|spans]] the entire [[Vector_Spaces|vector space]]
- In QM, $|\uparrow\rangle$ and $|\downarrow\rangle$ are linearly independent — neither can be built from the other

## Examples

- $(1,0)$ and $(0,1)$ in $\mathbb{R}^2$ — independent (standard basis)
- $(1,2)$ and $(3,6)$ — dependent since $(3,6) = 3(1,2)$

## Related Concepts

- [[Vector_Spaces]]
- [[Linear Combination]]
- [[Span]]
- [[Basis]]
- [[Rank]]
- [[Row Reduction]]

## References

- Derived from [[Vector_Spaces]] practice problems and definitions
