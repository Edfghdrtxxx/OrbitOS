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

## Complete Derivation (with corrections integrated)

> [!tip] Audit Status
> Original handwritten derivation algebra is **correct**. Below is the complete version with all missing justifications filled in. Sections marked with >[!warning] are blind spots found in the original.

### Step 0 — What Is the Lagrangian?

For a mechanical system with generalized coordinate $q$, the **Lagrangian** is defined as:

$$L(q, \dot{q}, t) = T(\dot{q}) - V(q)$$

where $T$ is kinetic energy and $V$ is potential energy.

**Why $T - V$ instead of $T + V$ (total energy)?**

Start from Newton's second law for a conservative force $F = -\frac{\partial V}{\partial q}$:

$$m\ddot{q} = -\frac{\partial V}{\partial q}$$

Now check: if we define $L = T - V = \frac{1}{2}m\dot{q}^2 - V(q)$ and compute the Euler-Lagrange equation (derived below), we get:

$$\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}} = -\frac{\partial V}{\partial q} - m\ddot{q} = 0 \quad\Longrightarrow\quad m\ddot{q} = -\frac{\partial V}{\partial q}$$

which **reproduces Newton's second law exactly**. The combination $T + V$ does not produce the correct sign. So $L = T - V$ is not an arbitrary choice — it is the unique combination (up to total time derivatives) that encodes Newtonian dynamics.

More generally, $L(q, \dot{q}, t)$ is any scalar function of generalized coordinates, their velocities, and time that generates the correct equations of motion. For non-mechanical systems (fields, relativity), $L$ is constructed from symmetry principles rather than $T - V$.

### Step 1 — Why Is the Action $S = \int L\,dt$?

We want a single scalar quantity defined over an **entire path** $q(t)$ from $t_1$ to $t_2$ whose extremum selects the physical trajectory. This requires:

1. **Path-dependence** — it must "see" the whole trajectory, not just a single instant. This demands an integral over time.
2. **Additivity** — the action over $[t_1, t_3]$ should equal the sum over $[t_1, t_2]$ and $[t_2, t_3]$. An integral $\int L\,dt$ satisfies this automatically.
3. **Locality** — the integrand at time $t$ should depend only on the local state $(q, \dot{q}, t)$, not on the path's global shape. This keeps the resulting equations of motion as ODEs, not integral equations.

The simplest object satisfying all three is:

$$S[q] = \int_{t_1}^{t_2} L\bigl(q(t),\, \dot{q}(t),\, t\bigr)\, dt$$

> [!info] Historical thread
> This idea did not appear from nowhere. Fermat (1662) showed light travels the path of **least time**. Maupertuis (1744) proposed a similar principle for mechanics. Euler and Lagrange formalized it into the calculus of variations. Hamilton (1834) gave the modern statement.

Note that $S$ is a **functional** — it maps an entire function $q(t)$ to a single number, unlike an ordinary function which maps a number to a number.

### Step 2 — Hamilton's Principle (the Physical Axiom)

**Hamilton's Principle (Principle of Stationary Action):** Among all paths $q(t)$ connecting fixed endpoints $q(t_1)$ and $q(t_2)$, the physical path is the one for which the action functional $S[q]$ is **stationary**:

$$\delta S = 0 \quad \text{for all admissible variations}$$

> [!caution] "Stationary" $\neq$ "Minimum"
> The action is stationary (first variation vanishes), but it is not always a minimum — it can be a maximum or saddle point. "Principle of Least Action" is a common but technically incorrect name.

This is a **postulate**, not derived from Newton's laws. It is taken as a foundational axiom, and Newton's laws emerge as consequences (as verified in Step 0 above).

### Assumptions

> [!warning] Blind Spot: Smoothness assumptions were unstated in the original
> The following must hold for every step below to be valid:

- $L(q, \dot{q}, t)$ is $C^2$ in all arguments (needed for chain rule + integration by parts)
- $q(t)$ is $C^2$ on $[t_1, t_2]$ (so $\dot{q}$ is differentiable and $\frac{d}{dt}\frac{\partial L}{\partial \dot{q}}$ exists)
- $\eta(t)$ is $C^1$ on $[t_1, t_2]$ with boundary conditions $\eta(t_1) = \eta(t_2) = 0$

### Step 3 — Perturbed Path

Introduce a small parameter $\varepsilon$ and an arbitrary perturbation $\eta(t)$ satisfying $\eta(t_1) = \eta(t_2) = 0$:

$$q_\varepsilon(t) = q(t) + \varepsilon\,\eta(t)$$

The perturbed action is:

$$S(\varepsilon) = \int_{t_1}^{t_2} L\bigl(q(t) + \varepsilon\,\eta(t),\; \dot{q}(t) + \varepsilon\,\dot{\eta}(t),\; t\bigr)\, dt$$

The stationarity condition becomes:

$$\delta S \;=\; \frac{dS}{d\varepsilon}\bigg|_{\varepsilon=0} = 0$$

### Step 4 — Differentiate Under the Integral (Leibniz Integral Rule)

Since $\varepsilon$ and $t$ are independent, the integration limits $t_1, t_2$ are constant in $\varepsilon$, and the integrand together with its $\varepsilon$-partial derivative are continuous:

> [!warning] Blind Spot: Original listed conditions as "(1) continuous, (2) $t$, $\varepsilon$ independent" — too vague
> The precise sufficient conditions for Leibniz integral rule are:
> 1. $L$ and $\frac{\partial L}{\partial \varepsilon}$ are **continuous** on the domain $[t_1, t_2] \times (-\varepsilon_0, \varepsilon_0)$
> 2. The integration limits are **constant** with respect to $\varepsilon$

$$\frac{dS}{d\varepsilon} = \int_{t_1}^{t_2} \frac{\partial}{\partial\varepsilon}\, L\bigl(q + \varepsilon\eta,\; \dot{q} + \varepsilon\dot{\eta},\; t\bigr)\, dt$$

### Step 5 — Chain Rule Expansion

> [!warning] Blind Spot: Notation $\frac{\partial L}{\partial(q+\varepsilon\eta)}$ is informal
> Formally, write $L = L(x_1, x_2, x_3)$ with $x_1 = q + \varepsilon\eta$, $x_2 = \dot{q} + \varepsilon\dot{\eta}$, $x_3 = t$, and apply the chain rule as $\sum_i \frac{\partial L}{\partial x_i}\frac{\partial x_i}{\partial \varepsilon}$.

$$\frac{\partial L}{\partial \varepsilon} = \frac{\partial L}{\partial x_1}\cdot\underbrace{\frac{\partial x_1}{\partial\varepsilon}}_{\eta} + \frac{\partial L}{\partial x_2}\cdot\underbrace{\frac{\partial x_2}{\partial\varepsilon}}_{\dot{\eta}} + \frac{\partial L}{\partial x_3}\cdot\underbrace{\frac{\partial x_3}{\partial\varepsilon}}_{0}$$

Setting $\varepsilon = 0$ (so $x_1 \to q$, $x_2 \to \dot{q}$):

$$\frac{\partial L}{\partial \varepsilon}\bigg|_{\varepsilon=0} = \frac{\partial L}{\partial q}\,\eta + \frac{\partial L}{\partial \dot{q}}\,\dot{\eta}$$

### Step 6 — Split the Integral

$$\delta S = \int_{t_1}^{t_2} \frac{\partial L}{\partial q}\,\eta\; dt \;+\; \int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}}\,\dot{\eta}\; dt$$

### Step 7 — Integration by Parts on the Second Integral

For the second integral, set $u = \frac{\partial L}{\partial \dot{q}}$ and $dv = \dot{\eta}\,dt$ (so $v = \eta$, $du = \frac{d}{dt}\frac{\partial L}{\partial\dot{q}}\,dt$):

$$\int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}}\,\dot{\eta}\; dt = \underbrace{\left[\frac{\partial L}{\partial \dot{q}}\,\eta\right]_{t_1}^{t_2}}_{=\,0\;\text{since}\;\eta(t_1)=\eta(t_2)=0} - \int_{t_1}^{t_2} \frac{d}{dt}\!\left(\frac{\partial L}{\partial \dot{q}}\right)\eta\; dt$$

### Step 8 — Combine

$$\delta S = \int_{t_1}^{t_2} \left[\frac{\partial L}{\partial q} - \frac{d}{dt}\!\left(\frac{\partial L}{\partial \dot{q}}\right)\right] \eta\; dt = 0$$

### Step 9 — Conclude via the Fundamental Lemma

> [!warning] Blind Spot: This step was skipped entirely in the original
> Jumping from "$\int [\cdots]\,\eta\,dt = 0$" to "the bracket is zero" is **not** trivial — it requires an explicit theorem.

**Fundamental Lemma of the Calculus of Variations (Du Bois-Reymond Lemma):**

> If $f(t)$ is continuous on $[t_1, t_2]$ and $\displaystyle\int_{t_1}^{t_2} f(t)\,\eta(t)\,dt = 0$ for **all** $C^1$ functions $\eta$ with $\eta(t_1) = \eta(t_2) = 0$, then $f(t) = 0$ for all $t \in [t_1, t_2]$.

Since $\eta$ is arbitrary and satisfies these conditions, the lemma gives:

$$\boxed{\frac{\partial L}{\partial q} - \frac{d}{dt}\!\left(\frac{\partial L}{\partial \dot{q}}\right) = 0}$$

This is the **Euler-Lagrange equation**.

### Generalization to Multiple Degrees of Freedom

> [!info] Blind Spot: Original derivation covers single DOF only
> For $n$ generalized coordinates $q_i$ ($i = 1, \ldots, n$), introduce independent perturbations $\eta_i(t)$ for each coordinate. Since each $\eta_i$ is independently arbitrary, the fundamental lemma applies to each component separately:

$$\frac{\partial L}{\partial q_i} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} = 0, \quad i = 1, \ldots, n$$
