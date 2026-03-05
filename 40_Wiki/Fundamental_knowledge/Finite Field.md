---
area: "[[Linear_Algebra]]"
tags: [math, algebra, abstract-algebra]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Finite Field

## Definition

A **finite field** (or **Galois field**) is a [[Field (mathematics)|field]] containing a finite number of elements. For every prime $p$ and positive integer $n$, there exists exactly one finite field of order $p^n$, denoted $\mathbb{F}_{p^n}$ or $\text{GF}(p^n)$.

## Key Points

- The simplest finite field is $\mathbb{F}_p = \{0, 1, \ldots, p-1\}$ with arithmetic modulo a prime $p$
- Every finite field has order $p^n$ for some prime $p$ — no other sizes are possible
- Finite fields satisfy all [[Field (mathematics)|field]] axioms: [[Commutativity]], [[Associativity]], [[Distributivity]], and existence of [[Identity Element|identity]] and [[Inverse Element|inverse]] elements
- Central to error-correcting codes, cryptography (e.g., AES operates over $\mathbb{F}_{2^8}$), and combinatorial design theory

## Examples

- $\mathbb{F}_2 = \{0, 1\}$ with addition and multiplication mod 2 — the binary field underlying digital logic
- $\mathbb{F}_7 = \{0, 1, 2, 3, 4, 5, 6\}$ with arithmetic mod 7 — every nonzero element has a multiplicative inverse (e.g., $3 \times 5 = 15 \equiv 1 \pmod{7}$)

## Related Concepts

- [[Field (mathematics)]]
- [[Commutativity]]
- [[Associativity]]
- [[Distributivity]]
- [[Identity Element]]
- [[Inverse Element]]

## References

- Axler, *Linear Algebra Done Right*, Ch. 1
- Lidl & Niederreiter, *Finite Fields*
