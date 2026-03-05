---
area: "[[Physics]]"
tags: [physics, quantum-mechanics]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Probability Amplitude

## Definition

A **probability amplitude** is a complex number $c_n$ that appears as a coefficient when a quantum state is expanded in a [[Basis|basis]]: $|\psi\rangle = \sum_n c_n |n\rangle$. The probability of measuring the system in state $|n\rangle$ is $|c_n|^2$ (Born rule). This is a direct application of [[Linear Combination|linear combinations]] in a [[Hilbert Space]].

## Key Points

- Amplitudes are complex-valued — their phases enable quantum interference
- Normalization requires $\sum_n |c_n|^2 = 1$, ensuring total probability is 1
- Unlike classical probabilities, amplitudes can cancel ([[Superposition|destructive interference]]) or reinforce (constructive interference)
- The inner product $\langle \phi | \psi \rangle$ is itself a probability amplitude for transitioning from $|\psi\rangle$ to $|\phi\rangle$

## Examples

- Spin-1/2: $|\psi\rangle = \frac{1}{\sqrt{2}}|\uparrow\rangle + \frac{i}{\sqrt{2}}|\downarrow\rangle$ — amplitude for spin-up is $\frac{1}{\sqrt{2}}$, probability is $\frac{1}{2}$
- Double slit: total amplitude at a point = sum of amplitudes from each slit; $|A_1 + A_2|^2 \neq |A_1|^2 + |A_2|^2$ (interference)

## Related Concepts

- [[Superposition]]
- [[Hilbert Space]]
- [[Basis]]
- [[Linear Combination]]
- [[Inner Product Spaces]]
- [[Eigenvalues and Eigenvectors]]

## References

- Griffiths, *Introduction to Quantum Mechanics*, Ch. 1
