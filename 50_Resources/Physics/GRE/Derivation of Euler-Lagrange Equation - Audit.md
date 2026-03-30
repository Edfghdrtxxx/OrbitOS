---
type: resource
tags:
  - physics
  - classical-mechanics
  - calculus-of-variations
  - GRE-Physics
related: "[[Derivation of Euler-Lagrange Equation.jpg]]"
date: 2026-03-30
---
## Source Derivation
![[Derivation of Euler-Lagrange Equation.jpg]]

## Audit Summary

The mechanical steps are **correct** — the final Euler-Lagrange equation is derived properly. However, several conceptual justifications are missing that would be expected in a rigorous derivation (e.g., UTokyo entrance exam).

| Aspect | Status |
|---|---|
| Algebra / calculation | Correct |
| Physical motivation (Hamilton's Principle) | **Missing** |
| Final logical step (Fundamental Lemma) | **Missing** |
| Smoothness assumptions | Not stated |
| Leibniz rule justification | Incomplete |
| Notation | Workable but informal |
| Boundary conditions on $\eta$ | Stated correctly |
| Multi-DOF generalization | Not addressed |

## What's Correct

- Perturbation ansatz $q_\varepsilon(t) = q(t) + \varepsilon\eta(t)$ — standard and correct
- Leibniz integral rule application (good self-correction from "Leibniz Equation" to "Leibniz Integral Rule")
- Chain rule expansion with three terms, correctly killing $\partial t / \partial \varepsilon = 0$
- Setting $\varepsilon = 0$ after differentiating — correct order of operations
- Integration by parts with $u = \partial L/\partial\dot{q}$, $dv = \dot{\eta}\,dt$
- Boundary terms vanish via $\eta(t_1) = \eta(t_2) = 0$

## Blind Spots Identified

### 1. Hamilton's Principle Is Never Stated (the "why")

The derivation defines $\delta S = dS/d\varepsilon|_{\varepsilon=0}$ but never states **why** $\delta S = 0$. The entire derivation hangs on the **Principle of Stationary Action**: *the physical path makes the action stationary*. Without invoking this principle, the derivation has no physical starting point — it's just a calculation with no conclusion.

### 2. Fundamental Lemma of Calculus of Variations Is Missing

At the end the integrand $\int_{t_1}^{t_2}[\cdots]\,\eta\,dt = 0$ is set to zero, then the bracketed expression is declared zero. This requires the **fundamental lemma** (Du Bois-Reymond lemma):

> If $\int_{t_1}^{t_2} f(t)\,\eta(t)\,dt = 0$ for **all** smooth $\eta$ vanishing at the endpoints, then $f(t) = 0$ everywhere on $[t_1, t_2]$.

This is the most important logical step and it was skipped entirely.

### 3. Smoothness Assumptions Are Unstated

The derivation implicitly requires:
- $L$ is $C^2$ in all arguments (needed for chain rule + integration by parts)
- $q(t)$ is $C^2$ (so $\dot{q}$ is differentiable and $\frac{d}{dt}\frac{\partial L}{\partial \dot{q}}$ exists)
- $\eta(t)$ is $C^1$ with $\eta(t_1) = \eta(t_2) = 0$

The boundary conditions on $\eta$ are stated (good), but differentiability requirements are not. In advanced contexts (weak solutions, discontinuous forces), these assumptions matter.

### 4. Leibniz Rule Conditions Are Incomplete

The notes list "(1) continuous, (2) $t$, $\varepsilon$ independent." The actual sufficient conditions are:
- The integrand **and its $\varepsilon$-partial derivative** are continuous on the domain
- Integration limits are constant (satisfied here)

Condition (1) is vague — continuous in what? Continuity of $\partial L/\partial\varepsilon$ specifically is needed, not just $L$.

### 5. Notational Sloppiness

Writing $\frac{\partial L}{\partial(q + \varepsilon\eta)}$ is informal. Formally, if $L = L(x_1, x_2, x_3)$, the chain rule gives $\frac{\partial L}{\partial x_1}\cdot\frac{\partial x_1}{\partial\varepsilon}$ where $x_1 = q + \varepsilon\eta$. The shorthand is understandable but could cause confusion in multi-variable problems where arguments share components.

### 6. Single Degree of Freedom Only

This derivation handles one generalized coordinate. The multi-coordinate generalization ($q_i$, $i = 1, \ldots, n$) is straightforward: each $\eta_i$ is independently arbitrary, yielding one E-L equation per coordinate:

$$\frac{\partial L}{\partial q_i} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} = 0, \quad i = 1, \ldots, n$$
