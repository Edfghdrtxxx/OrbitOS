---
area: "[[Physics]]"
tags: [statistics, probability, nuclear-physics]
created: 2026-03-13
last_reviewed:
next_review: 2026-03-13
review_interval: 0
---
# Poisson Distribution

## Definition

The Poisson distribution describes the probability of a given number of events occurring in a fixed interval of time or space, given a known constant mean rate $\lambda$ and independence between events. Its probability mass function is $P(k) = \frac{\lambda^k e^{-\lambda}}{k!}$, where $k$ is the number of occurrences.

## Key Points

- The mean and variance are both equal to $\lambda$
- Arises as the limit of the [[Binomial Distribution]] when $n \to \infty$ and $p \to 0$ with $np = \lambda$ held constant
- Models rare or discrete counting events: radioactive decay counts, [[Dead Time]] corrections, photon detection in [[Scintillation Detector]] systems
- For large $\lambda$, the Poisson distribution approaches the [[Gaussian Distribution]] with $\mu = \lambda,\; \sigma^2 = \lambda$
- The relative uncertainty scales as $\frac{1}{\sqrt{\lambda}}$, which governs [[Energy Resolution]] in counting experiments

## Examples

- Counting the number of $\alpha$-particles detected by a [[Scintillation Detector]] in a fixed time window
- Number of cosmic ray events per minute in a [[Coincidence Detection]] setup

## Related Concepts

- [[Binomial Distribution]]
- [[Gaussian Distribution]]
- [[Half-Life]]
- [[Central Limit Theorem]]
- [[Statistical Uncertainty]]

## References

- G. Cowan, *Statistical Data Analysis*, Oxford University Press
