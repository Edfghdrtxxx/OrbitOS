---
type: learning-progress
topic: "Boundary condition on normal E"
area: Electrodynamics
status: active
created: 2026-09-15
tags:
  - physics
  - electrodynamics
  - boundary-conditions
  - gre-physics
  - electrostatics
---
# Boundary condition on normal $E$ — $E_{\text{out}}^\perp - E_{\text{in}}^\perp = \frac{\sigma}{\epsilon_0}$

**Why this note exists:** Anki flashcard recall item from EM Batch 1 (Formula Recall): understanding the origin and physical meaning of the jump condition on $\mathbf{E}$ across a charged boundary.

**Target:**
1. Connect $E_{\text{out}}^\perp - E_{\text{in}}^\perp = \frac{\sigma}{\epsilon_0}$ to Gauss's law via a Gaussian pillbox ($h \to 0$).
2. Understand the physical meaning: $\sigma$ as a flux source creating a step jump in the normal field component.
3. Reconcile the jump across an isolated sheet ($E = \sigma / 2\epsilon_0$) versus a conductor boundary ($E_{\text{in}} = 0 \implies E_{\text{out}}^\perp = \sigma/\epsilon_0$).

**Active 2026-09-15.** Turn 1 opened with baseline alignment and diagnostic question.

### Prior context
- **Already computable:** Gauss's law in integral form ($\oint \mathbf{E}\cdot\mathrm{d}\mathbf{A} = Q_{\text{enc}}/\epsilon_0$); conductor surface field ($E=\sigma/\epsilon_0$); parallel-plate capacitor gap field.
- **What broke:**
- **New object had to:**

---

## Turns

### Turn 1 — 2026-09-15 (learner)

> HOw to understand this boundray condition? You can check my progress context to align our baseline
>
> [Image attachment: Anki flashcard]
>
> **Transcript:**
> Card 1 · 47 left | Electromagnetism
> BOUNDARY CONDITIONS
> What is the boundary condition on the perpendicular (normal) component of $E$ across a surface carrying surface charge density $\sigma$?
> 
> $$E_{\mathrm{out}}^\perp - E_{\mathrm{in}}^\perp = \frac{\sigma}{\epsilon_0} \quad (2.15)$$
> 
> Again [1] today | Hard [2] 2 d | Good [3] 3 d | Easy [4] 4 d
>
> **Visual / marks:** Anki review card with cream background. Question asks for the boundary condition on perpendicular component of $E$ across surface charge density $\sigma$. Dotted separator line above equation (2.15). Bottom shows four standard Anki grading buttons with colored borders (Again: red, Hard: olive, Good: green, Easy: brown).

### Tutor

Aligning with your baseline in [[Progress-context]]: you already have Gauss's law in integral form ($\oint \mathbf{E}\cdot\mathrm{d}\mathbf{A} = \frac{Q_{\mathrm{enc}}}{\epsilon_0}$) and the conductor surface field ($E = \frac{\sigma}{\epsilon_0}$) in your recall deck.

Equation (2.15) is not a new law—it is simply **Gauss's law applied locally** to an infinitesimal patch of the surface.

Imagine a wafer-thin cylindrical "pillbox" of top/bottom area $A$ and height $h$ straddling the boundary:

```
            E_out ^ (outward normal n)
                  |
        +---------+---------+   <- top face (in "out", area A)
        |  region "out"     |
  ------+-------------------+------ surface (charge density \sigma)
        |  region "in"      |
        +---------+---------+   <- bottom face (in "in", area A)
                  |
             E_in |
```

When you shrink the height to zero ($h \to 0$), the side walls have zero area, so no flux escapes through the sides. All outward flux passes through the flat caps:
- Top face (normal pointing "out"): flux is $+E_{\mathrm{out}}^\perp A$
- Bottom face (normal pointing into pillbox's exterior, i.e., opposite to "out"): flux is $-E_{\mathrm{in}}^\perp A$

Gauss's law equates this total outward flux to the enclosed charge:
$$\oint \mathbf{E}\cdot\mathrm{d}\mathbf{A} = \left(E_{\mathrm{out}}^\perp - E_{\mathrm{in}}^\perp\right) A = \frac{\sigma A}{\epsilon_0} \implies E_{\mathrm{out}}^\perp - E_{\mathrm{in}}^\perp = \frac{\sigma}{\epsilon_0}$$

This tells you that a surface charge density $\sigma$ acts as an abrupt source of flux, forcing a step jump of size $\frac{\sigma}{\epsilon_0}$ in the normal component of $\mathbf{E}$.

Is your sticking point how the flux signs in the pillbox produce this difference, or how this jump connects to specific cases like a lone charged sheet ($E = \frac{\sigma}{2\epsilon_0}$) versus a conductor ($E = \frac{\sigma}{\epsilon_0}$)?
