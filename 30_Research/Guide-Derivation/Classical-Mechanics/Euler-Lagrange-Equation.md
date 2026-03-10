---
type: derivation
domain: Classical Mechanics
premises: []
result:
tags:
  - derivation
  - classical-mechanics
  - variational-calculus
aliases:
  - E-L equation
  - Euler-Lagrange
created: 2026-03-10
last_reviewed:
next_review:
review_interval: 0
---
# Euler-Lagrange Equation
## Setup

**Goal:** Derive the Euler-Lagrange equation — the differential equation that a function $q(t)$ must satisfy to make the action functional $S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t)\,\mathrm{d}t$ stationary.

**Starting from:**
- The action functional $S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t)\,\mathrm{d}t$
- Hamilton's principle: the physical path makes $S$ stationary ($\delta S = 0$)
- Fixed endpoints: $q(t_1)$ and $q(t_2)$ are given

**Strategy:** Calculus of variations — compute $\delta S = 0$ by introducing a variation of the path, expand the integrand to first order, and extract the condition that must hold for arbitrary variations.

## FAQ

> [!faq]- Why do we need to find a function $q(t)$ that satisfies this condition?
> We want to know the **actual trajectory** a particle takes. Newton's $F = ma$ gives one way. The Lagrangian approach gives an equivalent (and often more powerful) way to find the same trajectory — by asking "which entire path is the right one?" instead of "what forces act at each instant?"

> [!faq]- Why do we need to make the action functional $S$ stationary?
> This is **Hamilton's principle** — a foundational axiom of classical mechanics. It says: *nature chooses the path that makes $S$ stationary.* We don't derive this from something deeper; it's an empirical observation elevated to a principle. It reproduces all of Newtonian mechanics and generalizes naturally to fields, relativity, and quantum mechanics.

> [!faq]- What is the meaning of the action functional?
> The action is a **single number assigned to an entire path**. Given any candidate trajectory $q(t)$ from $t_1$ to $t_2$, you compute $S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t)\,\mathrm{d}t$, where $L = T - V$ (kinetic minus potential energy). Every path gets a number $S$. Nature picks the one where $S$ is stationary.

> [!faq]- Does "stationary" mean the function is time-independent?
> **No.** "Stationary" here means stationary **with respect to variations of the path**, not with respect to time. It's the same idea as $f(x)$ having $\mathrm{d}f/\mathrm{d}x = 0$ at a minimum — the function doesn't change to first order if you nudge $x$. Similarly, $S$ is "stationary" when small deformations of the path $q(t)$ don't change $S$ to first order. The path itself can (and usually does) depend on time.

## Derivation

> [!hint] Why $\delta S = 0$? — The logical chain
> 1. **Problem:** Among all paths $q(t)$ connecting two fixed points $q(t_1)$ and $q(t_2)$, which one does nature choose?
> 2. **Hamilton's principle** answers: the path that makes the action $S[q]$ **stationary** — just like finding a minimum of an ordinary function by setting $\mathrm{d}f/\mathrm{d}x = 0$.
> 3. **"Stationary"** means: if you wiggle the path slightly, $S$ doesn't change to first order. We call that first-order change $\delta S$.
> 4. **Our job:** Compute $\delta S$ explicitly (in terms of $q$ and its derivatives), then demand $\delta S = 0$. The equation that falls out is the Euler-Lagrange equation.
>
> So the entire derivation is really just answering: *"What does $\delta S = 0$ look like when you work out the math?"*

> [!question] Step 1
> To compute $\delta S$, we need to consider what happens when we slightly perturb the path. Suppose the true path is $q(t)$. How would you write a "nearby" path, and what boundary conditions must it satisfy?

## Result

## Pitfalls

## Related
