---
type: salvage
source: 30_Research/Physics/Schrodinger-Equation.md
archived: 2026-09-08
reason: Incomplete Step-1 stub removed from 30_Research/. Feynman block kept.
---
# Salvage — Schrödinger / eikonal Feynman

From the abandoned `/guide-derivation` learn-mode stub (created 2026-03-27). Not a complete derivation.

**Goal (unfinished):** Derive the time-dependent Schrödinger equation (TDSE) from physical motivation, then obtain the TISE via separation of variables.

**Starting from:** Hamilton-Jacobi / optics–mechanics analogy; de Broglie $E = \hbar\omega$, $p = \hbar k$; $E = p^2/2m + V$.

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
