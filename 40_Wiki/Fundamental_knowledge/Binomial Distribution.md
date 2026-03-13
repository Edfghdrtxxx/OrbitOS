---
area: "[[Physics]]"
tags: [statistics, probability]
created: 2026-03-13
last_reviewed:
next_review: 2026-03-13
review_interval: 0
---
# Binomial Distribution

## Definition

The binomial distribution gives the probability of exactly $k$ successes in $n$ independent Bernoulli trials, each with success probability $p$. Its probability mass function is $P(k) = \binom{n}{k} p^k (1-p)^{n-k}$, with mean $\mu = np$ and variance $\sigma^2 = np(1-p)$.

## Key Points

- Each trial is independent with the same probability $p$ — the classic "coin-flip" model
- In the limit $n \to \infty$, $p \to 0$, $np = \lambda$ fixed, it reduces to the [[Poisson Distribution]]
- In the limit of large $n$ with $p$ not too close to 0 or 1, it approaches the [[Gaussian Distribution]] with $\mu = np$, $\sigma^2 = np(1-p)$
- Detection efficiency measurements use binomial statistics: $k$ detected out of $n$ incident particles gives $\hat{p} = k/n$ with uncertainty $\sqrt{p(1-p)/n}$
- The [[Silicon Photomultiplier]] pixel firing probability per photon follows binomial statistics

## Examples

- Estimating detector efficiency: out of $n = 1000$ incident particles, $k = 950$ are detected, giving $\hat{p} = 0.95$
- Probability that exactly 3 out of 10 radioactive nuclei decay within one [[Half-Life]]

## Related Concepts

- [[Poisson Distribution]]
- [[Gaussian Distribution]]
- [[Central Limit Theorem]]
- [[Silicon Photomultiplier]]
- [[Bernoulli Trial]]
- [[Confidence Interval]]

## References

- G. Cowan, *Statistical Data Analysis*, Oxford University Press
