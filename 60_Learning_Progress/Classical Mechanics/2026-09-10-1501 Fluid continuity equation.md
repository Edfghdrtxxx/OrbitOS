---
type: learning-progress
topic: "Fluid continuity equation"
area: Classical Mechanics
status: active
created: 2026-09-10
tags:
  - physics
  - classical-mechanics
  - fluids
  - gre-physics
  - conservation-laws
---

# Fluid continuity equation — conservation and scaling

**Why this note exists:** Learner shared a formula-recall card from Physics GRE Prep Studio covering the fluid continuity equation $v_1 A_1 = v_2 A_2$ under Classical Mechanics / Fluids.

## Context (Verbatim transcription from screenshot)

- **Source:** Physics GRE Prep Studio (exam Nov 1, 2026)
- **Navigation:** Home ▸ Formula recall ▸ Study
- **Section / Tag:** Classical Mechanics | FLUIDS
- **Card index:** Card 2 · 22 left
- **Prompt:**
  > Fluid continuity (conservation) equation relating the flow speeds and cross-sectional areas at two points along a pipe?
- **Revealed answer:**
  $$v_1 A_1 = v_2 A_2 \quad (1.50)$$
- **Rating buttons:** `Again [1]` (today) | `Hard [2]` (soon) | `Good [3]` (soon) | `Easy [4]` (4 d)
- **Visual / state details not captured by text:** Flashcard in "Study" mode with the answer already flipped. Formula is centered with equation number (1.50). The app interface shows standard SRS (spaced repetition) rating options at the bottom, awaiting learner self-assessment.

---

## Turns

### Turn 1 — 2026-09-10 (learner)

> [Image attachment: Physics GRE Prep Studio — Formula recall card 2]
>
> **Top bar:** Home ▸ Formula recall ▸ Study | TODAY 31 min 19 s | Start focus
> **Sidebar:** Physics GRE | Prep Studio · exam Nov 1, 2026 | Mistake book [22 DUE] | Formula recall [23 LEFT]
> **Card category:** Classical Mechanics / FLUIDS
> **Card prompt:** Fluid continuity (conservation) equation relating the flow speeds and cross-sectional areas at two points along a pipe?
> **Card back / revealed answer:**
> $$v_1 A_1 = v_2 A_2 \quad (1.50)$$
> **Rating buttons:** Again [1] today | Hard [2] soon | Good [3] soon | Easy [4] 4 d

### Tutor

This card states volume flow rate conservation: in time $\Delta t$, the fluid cylinder sweeping past point 1 has volume $\Delta V_1 = A_1 (v_1 \Delta t)$, giving a constant volume flux:

$$Q = A_1 v_1 = A_2 v_2$$

Physically, this is **conservation of mass** ($\Delta m_1 = \Delta m_2$) under the assumption that the fluid is **incompressible** ($\rho_1 = \rho_2 = \text{const}$).

What aspect of this card are you looking to dig into — the physical foundation and limits (such as compressible flow $\rho_1 A_1 v_1 = \rho_2 A_2 v_2$ and the differential continuity equation $\nabla \cdot (\rho \mathbf{v}) = -\partial_t \rho$), or how the Physics GRE typically tests it (coupling with Bernoulli's equation, $r^2$ vs. $d$ traps, and branching networks)?

### Turn 2 — 2026-09-10 (learner)

> How does phyics GRE typically test it?

### Tutor

The GRE rarely tests $v_1 A_1 = v_2 A_2$ as a bare single-variable plug-in. Instead, ETS targets **three standard archetypes**:

1. **Bernoulli coupling & the $r^4$ pressure scaling (Venturi):**
   Continuity gives $v_2 = v_1 (r_1/r_2)^2$. Substituting this into Bernoulli's equation for a horizontal pipe ($P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$) produces:
   $$P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2) = \frac{1}{2}\rho v_1^2 \left[\left(\frac{r_1}{r_2}\right)^4 - 1\right]$$
   Notice the 4th-power dependence on the radius ratio.

2. **The "intuitive squeeze" trap (static vs. dynamic pressure):**
   Everyday intuition tricks students into thinking a fluid being "squeezed" through a narrower pipe experiences higher pressure. In reality, continuity forces $v$ to increase, which drives static pressure $P$ **down** ($P_2 < P_1$).

3. **Branching networks ($N$-pipe total flux):**
   A single main conduit (radius $R$, speed $v_0$) splits into $N$ identical smaller capillaries (radius $r$, speed $v$):
   $$A_0 v_0 = N A_{\text{branch}} v \implies \pi R^2 v_0 = N (\pi r^2) v \implies v = \left(\frac{R^2}{N r^2}\right) v_0$$
   If total cross-sectional area increases ($N r^2 > R^2$, as in circulatory capillaries), the fluid actually slows down.

---

Let's test the primary coupling directly:

A horizontal pipe carrying an incompressible, inviscid fluid of density $\rho$ has radius $R_1$ and flow speed $v_1$. The pipe narrows to radius $R_2 = \frac{R_1}{2}$.

In terms of $\rho$ and $v_1$, what is the pressure drop $\Delta P = P_1 - P_2$ across the constriction?

### Turn 3 — 2026-09-10 (learner)

> Wait. learn Bernoulli's equation first

### Tutor

Pausing continuity coupling to build the Bernoulli foundation first. Forked to [[2026-09-10-1522 Bernoulli equation]]. We will return to the $r^4$ pressure drop problem once Bernoulli's theorem is established.
