---
area: "[[Physics]]"
tags: [statistics, probability, data-analysis]
created: 2026-03-13
last_reviewed:
next_review: 2026-03-13
review_interval: 0
---
# Gaussian Distribution

## Definition

The Gaussian (normal) distribution is a continuous probability distribution defined by mean $\mu$ and standard deviation $\sigma$, with probability density function $f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)$. It is the most common distribution in experimental physics due to the [[Central Limit Theorem]].

## Key Points

- The [[Central Limit Theorem]] guarantees that the sum of many independent random variables converges to a Gaussian, regardless of the original distributions
- Characterized entirely by two parameters: $\mu$ (location) and $\sigma$ (scale); the FWHM is $2\sqrt{2\ln 2}\;\sigma \approx 2.355\sigma$
- Detector response functions and [[Energy Resolution]] are typically modeled as Gaussians
- The standard normal distribution has $\mu = 0$, $\sigma = 1$; any Gaussian can be standardized via $z = (x - \mu)/\sigma$
- Arises as the large-$\lambda$ limit of the [[Poisson Distribution]] and the large-$n$ limit of the [[Binomial Distribution]]

## Examples

- Measurement errors in tracking position from a [[Track Reconstruction]] algorithm
- Fitting the peak shape in an energy spectrum from a [[Scintillation Detector]]

## Related Concepts

- [[Poisson Distribution]]
- [[Binomial Distribution]]
- [[Central Limit Theorem]]
- [[Energy Resolution]]
- [[Least Squares Fitting]]
- [[Chi-Squared Distribution]]

## References

- G. Cowan, *Statistical Data Analysis*, Oxford University Press
