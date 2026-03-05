---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Linear Combination

## Definition

A **linear combination** of vectors $\mathbf{v}_1, \ldots, \mathbf{v}_n$ is any expression $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n$ where $c_i$ are scalars from the underlying field. This is the fundamental operation that [[Vector_Spaces|vector space]] axioms guarantee always works.

## Key Points

- The set of all linear combinations of given vectors is their [[Span]]
- Testing [[Linear Independence]]: check if the only combination giving $\mathbf{0}$ is the trivial one ($c_i = 0$)
- In QM, superposition $|\psi\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle$ is a linear combination of [[Basis]] states
- Every theorem in [[Linear_Algebra]] ultimately relies on linear combinations being well-defined

## Examples

- $3(1,0) + 2(0,1) = (3,2)$ — a linear combination in $\mathbb{R}^2$
- $|\psi\rangle = \frac{1}{\sqrt{3}}|{+1}\rangle + \frac{1}{\sqrt{3}}|0\rangle + \frac{1}{\sqrt{3}}|{-1}\rangle$ — quantum state as linear combination

## Related Concepts

- [[Vector_Spaces]]
- [[Span]]
- [[Linear Independence]]
- [[Basis]]

## References

- Derived from [[Vector_Spaces]] axioms and QM connection
