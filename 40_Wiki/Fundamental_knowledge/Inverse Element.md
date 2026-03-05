---
area: "[[Linear_Algebra]]"
tags: [math, algebra, abstract-algebra]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Inverse Element

## Definition

An **inverse element** of $a$ under a binary operation $\circ$ with [[Identity Element|identity element]] $e$ is an element $a^{-1}$ such that $a \circ a^{-1} = a^{-1} \circ a = e$. When it exists, the inverse is unique.

## Key Points

- A [[Field (mathematics)|field]] requires every element to have an additive inverse ($a + (-a) = 0$) and every nonzero element to have a multiplicative inverse ($a \times a^{-1} = 1$)
- $\mathbb{Z}$ (integers) fails to be a field precisely because most elements lack a multiplicative inverse (e.g., there is no integer $n$ with $2n = 1$)
- In a [[Vector_Spaces|vector space]], every vector $\mathbf{v}$ has an additive inverse $-\mathbf{v}$ such that $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$
- Invertible matrices have a matrix inverse $A^{-1}$ satisfying $AA^{-1} = I$ — connected to [[Rank]] and [[Row Reduction]]

## Examples

- Additive inverse of $5$ in $\mathbb{R}$: $-5$, since $5 + (-5) = 0$
- Multiplicative inverse of $3$ in $\mathbb{R}$: $\frac{1}{3}$, since $3 \times \frac{1}{3} = 1$

## Related Concepts

- [[Identity Element]]
- [[Field (mathematics)]]
- [[Rank]]
- [[Row Reduction]]
- [[Matrix Operations]]

## References

- Axler, *Linear Algebra Done Right*, Ch. 1
