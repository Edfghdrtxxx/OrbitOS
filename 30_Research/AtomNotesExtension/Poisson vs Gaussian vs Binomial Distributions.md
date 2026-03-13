---
type: research
area: "[[Physics]]"
tags: [statistics, probability, distributions]
created: 2026-03-13
sources:
  - "[[Poisson Distribution]]"
  - "[[Gaussian Distribution]]"
  - "[[Binomial Distribution]]"
---
# Poisson vs Gaussian vs Binomial Distributions

This note synthesizes the three foundational probability distributions used throughout experimental physics: the [[Binomial Distribution]], the [[Poisson Distribution]], and the [[Gaussian Distribution]]. Rather than treating each in isolation, this research note compares their properties side-by-side, maps the mathematical limits that connect them, and provides a practical decision guide for choosing the right model in counting experiments, detector characterization, and data analysis.

## At a Glance

| Property | [[Binomial Distribution]] | [[Poisson Distribution]] | [[Gaussian Distribution]] |
|---|---|---|---|
| **Type** | Discrete | Discrete | Continuous |
| **Parameters** | $n$ (trials), $p$ (success prob.) | $\lambda$ (mean rate) | $\mu$ (mean), $\sigma$ (std. dev.) |
| **Mean** | $\mu = np$ | $\mu = \lambda$ | $\mu$ |
| **Variance** | $\sigma^2 = np(1-p)$ | $\sigma^2 = \lambda$ | $\sigma^2$ |
| **PMF / PDF** | $P(k) = \binom{n}{k} p^k (1-p)^{n-k}$ | $P(k) = \frac{\lambda^k e^{-\lambda}}{k!}$ | $f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$ |
| **Support** | $k \in \{0, 1, \dots, n\}$ | $k \in \{0, 1, 2, \dots\}$ | $x \in (-\infty, +\infty)$ |
| **Skewness** | $\frac{1-2p}{\sqrt{np(1-p)}}$ | $\frac{1}{\sqrt{\lambda}}$ | $0$ (symmetric) |
| **Key constraint** | Finite $n$, fixed $p$ | Events independent, rate constant | Result of many additive contributions |
| **Physics use cases** | Detector efficiency, [[Silicon Photomultiplier]] pixel firing, decay within one [[Half-Life]] | Radioactive decay counts, photon counting, [[Dead Time]] corrections | [[Energy Resolution]] peak shapes, measurement errors, [[Least Squares Fitting]] residuals |

## Definition Comparison

**[[Binomial Distribution]]** --- The most general of the three discrete distributions. It models the number of successes $k$ in a fixed number $n$ of independent Bernoulli trials, each with the same success probability $p$. It answers: *"Out of $n$ tries, how many succeed?"*

**[[Poisson Distribution]]** --- A discrete distribution that models the number of events $k$ occurring in a fixed interval (time, space, or exposure) given a constant average rate $\lambda$. It answers: *"How many events occur in this window?"* There is no explicit upper bound on $k$, and no notion of a finite number of trials.

**[[Gaussian Distribution]]** --- The unique continuous distribution that emerges whenever many independent contributions are summed ([[Central Limit Theorem]]). Parameterized by mean $\mu$ and standard deviation $\sigma$, it answers: *"What is the probability density at a given value $x$?"* Unlike the other two, the support extends over all real numbers $(-\infty, +\infty)$.

## Mathematical Relationships

The three distributions are not independent models --- they form a hierarchy connected by well-defined limiting theorems. Understanding these limits is essential for knowing when a simpler distribution can replace a more general one.

### Binomial $\to$ Poisson Limit

$$\text{Binom}(k; n, p) \xrightarrow{n \to \infty,\; p \to 0,\; np = \lambda} \text{Poisson}(k; \lambda)$$

**Conditions:** The number of trials $n$ is very large, the success probability $p$ per trial is very small, and their product $\lambda = np$ remains finite and fixed.

**Physical intuition:** When you have an enormous number of potential "opportunities" for an event (e.g., a huge number of radioactive nuclei), each with a tiny probability of decaying in a short time window, the total count of decays follows a Poisson distribution. The individual-trial structure washes out, and only the average rate $\lambda$ matters.

**Rule of thumb:** The Poisson approximation is accurate when $n \geq 20$ and $p \leq 0.05$ (equivalently $\lambda = np \leq n/20$).

### Poisson $\to$ Gaussian Limit

$$\text{Poisson}(k; \lambda) \xrightarrow{\lambda \to \infty} \mathcal{N}(k;\, \mu = \lambda,\; \sigma^2 = \lambda)$$

**Conditions:** The mean number of counts $\lambda$ is large ($\lambda \gtrsim 20$ in practice).

**Physical intuition:** When a counting experiment yields a large number of events, the relative fluctuation $1/\sqrt{\lambda}$ becomes small and the discrete, asymmetric Poisson shape becomes well-approximated by a symmetric Gaussian bell curve centered at $\lambda$ with width $\sqrt{\lambda}$. This is a specific instance of the [[Central Limit Theorem]] --- a Poisson random variable can be viewed as a sum of many independent rare-event contributions.

**Practical consequence:** For high-statistics spectra (e.g., many counts per bin), $\chi^2$ fitting with Gaussian errors $\sigma_i = \sqrt{N_i}$ is justified. For low-count bins ($N_i \lesssim 20$), Poisson likelihoods should be used instead.

### Binomial $\to$ Gaussian Limit (de Moivre--Laplace Theorem)

$$\text{Binom}(k; n, p) \xrightarrow{n \to \infty,\; p\;\text{fixed}} \mathcal{N}(k;\, \mu = np,\; \sigma^2 = np(1-p))$$

**Conditions:** The number of trials $n$ is large, and $p$ is not too close to 0 or 1 (a common rule of thumb: $np \geq 5$ and $n(1-p) \geq 5$).

**Physical intuition:** When estimating a detector efficiency from a large sample ($n \gg 1$) with moderate $p$, the binomial uncertainty on the estimate $\hat{p} = k/n$ can be approximated by a Gaussian with $\sigma = \sqrt{p(1-p)/n}$. This is the basis for reporting symmetric confidence intervals on efficiency measurements.

### Summary of the Hierarchy

$$\boxed{\text{Binomial} \xrightarrow[\substack{n \to \infty,\; p \to 0 \\ np = \lambda}]{} \text{Poisson} \xrightarrow[\lambda \to \infty]{} \text{Gaussian}}$$

The Binomial can also reach the Gaussian directly (bypassing Poisson) when $p$ stays finite and $n$ grows large. All three roads lead to the Gaussian for large samples --- the [[Central Limit Theorem]] at work.

## When to Use Which

A practical decision guide for experimental nuclear and particle physics:

### Use the [[Binomial Distribution]] when...

- You have a **known, finite number of trials** $n$ and want the number of successes.
- The per-trial probability $p$ is **not negligibly small** (e.g., detector efficiency $\hat{p} \sim 0.9$).
- **Examples:**
  - Measuring the efficiency of a [[Silicon Photomultiplier]]: out of $n$ incident photons, how many fire a pixel?
  - Probability that exactly $k$ out of $n$ nuclei decay within one [[Half-Life]] (where $p = 0.5$, far from zero).

### Use the [[Poisson Distribution]] when...

- You are **counting events** in a fixed interval with no explicit upper bound.
- Events are **independent** and occur at a **constant average rate** $\lambda$.
- $\lambda$ is **moderate to small** (say $\lambda \lesssim 20$), so the discrete, asymmetric shape matters.
- **Examples:**
  - Low-rate radioactive source: counts per second in a [[Scintillation Detector]].
  - Background event counts in a rare-decay search.
  - Applying [[Dead Time]] corrections where missed counts follow Poisson statistics.
  - Low-count bins in a spectrum where $\sqrt{N}$ errors would be inaccurate.

### Use the [[Gaussian Distribution]] when...

- You have a **large number of counts** ($N \gtrsim 20$) per bin or measurement, so Poisson $\approx$ Gaussian.
- You are modeling **continuous measurement errors** (position, energy, time).
- The quantity is the **sum or average of many independent contributions** ([[Central Limit Theorem]]).
- **Examples:**
  - Fitting peak shapes in high-statistics energy spectra ([[Energy Resolution]]).
  - Reporting uncertainties on fitted parameters via [[Least Squares Fitting]].
  - Modeling spatial resolution in [[Track Reconstruction]].

### Quick Decision Flowchart

1. **Is there a fixed, known number of trials $n$?**
   - Yes, and $p$ is not tiny $\to$ **Binomial**
   - Yes, but $n$ is huge and $p$ is tiny $\to$ **Poisson** (as approximation)
2. **Are you counting events with no upper bound?**
   - Yes, and $\lambda \lesssim 20$ $\to$ **Poisson**
   - Yes, and $\lambda \gg 20$ $\to$ **Gaussian** (with $\sigma = \sqrt{\lambda}$)
3. **Are you modeling a continuous measurement or summing many contributions?**
   - Yes $\to$ **Gaussian**

## Related Concepts

- [[Central Limit Theorem]] --- the deep reason the Gaussian appears everywhere
- [[Energy Resolution]] --- modeled as Gaussian width; governed by $1/\sqrt{\lambda}$ Poisson statistics
- [[Dead Time]] --- corrections rely on Poisson counting statistics
- [[Silicon Photomultiplier]] --- pixel firing follows binomial statistics
- [[Half-Life]] --- decay probability per nucleus connects to binomial and Poisson models
- [[Least Squares Fitting]] --- assumes Gaussian-distributed residuals
- [[Chi-Squared Distribution]] --- sum of squared Gaussian variables; used in goodness-of-fit
- [[Confidence Interval]] --- construction depends on which distribution applies
- [[Statistical Uncertainty]] --- $\sqrt{N}$ rule is the Poisson-to-Gaussian bridge
- [[Bernoulli Trial]] --- the single-trial building block of the binomial distribution

## References

- G. Cowan, *Statistical Data Analysis*, Oxford University Press
- W.R. Leo, *Techniques for Nuclear and Particle Physics Experiments*, Springer
- G.F. Knoll, *Radiation Detection and Measurement*, Wiley
