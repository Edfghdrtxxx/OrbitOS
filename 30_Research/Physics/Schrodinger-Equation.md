---
type: derivation
area: "[[Physics]]"
domain: Quantum-Mechanics
premises: []
result:
tags:
  - derivation
  - quantum-mechanics
aliases:
  - Schrödinger equation
  - TDSE
  - TISE
created: 2026-03-27
last_reviewed:
next_review:
review_interval: 0
---
# Schrödinger Equation
## Setup

**Goal:** Derive the time-dependent Schrödinger equation (TDSE) from physical motivation, then obtain the time-independent Schrödinger equation (TISE) via separation of variables.

**Starting from:**
- The Hamilton-Jacobi equation and the optics–mechanics analogy (geometric optics → wave optics ≈ classical mechanics → wave mechanics) (see `Feynman: The Eikonal Equation`)
- de Broglie relations: $E = \hbar\omega$, $p = \hbar k$
- Classical non-relativistic energy: $E = \frac{p^2}{2m} + V$

**Strategy:** Use the Hamilton–Jacobi / eikonal analogy to motivate the existence of a wave equation. Then write the free-particle plane wave, differentiate to identify operators for $E$ and $p$, and demand consistency with the classical energy relation to arrive at the TDSE. Finally, separate variables to obtain the TISE.

> [!Feynman]- The Eikonal Equation
> **Q:** What is eikonal equation?
> **Language note:** More natural phrasing: *"What is **the** eikonal equation?"* — in English, specific named equations need the definite article "the."
>
> Imagine you shine a flashlight in a dark room. The light travels in straight lines (rays) and you can trace where it goes just by following those rays — you don't need to think about waves at all. This "ray tracing" approach is called **geometric optics**, and it works great when the objects the light hits are much bigger than its wavelength.
>
> The **eikonal equation** is the mathematical rule that governs these rays. It looks like this:
>
> $$|\nabla S|^2 = n^2(\mathbf{r})$$
>
> Here $S(\mathbf{r})$ is the **eikonal** (from Greek *eikon* = image) — a function whose surfaces of constant value are the wavefronts. $n(\mathbf{r})$ is the refractive index, which tells light how fast it can travel at each point in space. The gradient $\nabla S$ points in the direction the ray travels.
>
> In plain words: the eikonal equation says *"the direction and spacing of wavefronts are determined by how the medium's refractive index varies in space."*
>
> Here's why it matters for us: the **Hamilton-Jacobi equation** in classical mechanics has almost the same shape:
>
> $$|\nabla W|^2 = 2m(E - V(\mathbf{r}))$$
>
> where $W$ is Hamilton's characteristic function (the "action") and $V$ is the potential energy. Compare the two — $W$ plays the role of $S$, and $2m(E - V)$ plays the role of $n^2$. The potential energy landscape guides a particle the same way the refractive index landscape guides a light ray.
>
> Here's what trips people up: the eikonal equation is **not** a wave equation — it's the **approximation you get when you ignore the wave nature** of light (short-wavelength limit). Similarly, the Hamilton-Jacobi equation is what you get when you ignore the wave nature of matter. The whole point of Schrödinger's program was to ask: *"If geometric optics is the short-wavelength limit of wave optics... what is classical mechanics the short-wavelength limit of?"*

## Derivation

> [!question] Step 1
> Let's start with the motivation. The Hamilton-Jacobi equation in classical mechanics looks like the eikonal equation in geometric optics. What is this analogy, and what does it suggest about classical mechanics?

## Result

*To be completed*

## Pitfalls

*To be completed*

## Related

*To be completed*
