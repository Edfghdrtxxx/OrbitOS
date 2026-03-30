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

> [!Feynman]- Conservative vs Non-Conservative Forces
> **Q:** What is the conservative force and what is another kind?
> **Language note:** More natural phrasing: *"What is a conservative force, and what is the other kind?"* — use the article "a" before "conservative force"; "another kind" → "the other kind" since there are exactly two categories.
>
> Imagine you carry a ball up a hill. You can take a straight path, a zigzag path, or a spiral path. If the ball ends up at the same height, gravity has done the same amount of work on it regardless of which path you took. That is what makes gravity a **conservative force**: the work it does depends only on where you start and where you end — not on the path between them.
>
> The key consequence: you can define a **potential energy** $V(q)$ for a conservative force. The force is just the slope of that energy landscape: $F = -\partial V / \partial q$. The minus sign means the force pushes you "downhill" on the energy surface.
>
> Common conservative forces: gravity, electrostatic (Coulomb) force, spring (Hooke's law) force.
>
> The other kind is a **non-conservative force** (also called a **dissipative force**). Friction is the classic example. If you slide a box from A to B along a short path, friction does less work than if you take a long detour — the work *depends on the path*. Because of this, you cannot define a potential energy $V$ for friction. Energy is lost to heat, and you cannot get it back by reversing the path.
>
> Common non-conservative forces: friction, air resistance (drag), viscous damping.
>
> Here is what trips people up: this entire Euler-Lagrange derivation assumes $L = T - V$, which **only works for conservative forces**. If non-conservative forces are present, you need a modified form (the Euler-Lagrange equation with a generalized force term $Q_i$ on the right-hand side) because there is no $V$ to put into the Lagrangian.

$$m\ddot{q} = -\frac{\partial V}{\partial q}$$

Now check: if we define $L = T - V = \frac{1}{2}m\dot{q}^2 - V(q)$ and compute the Euler-Lagrange equation (derived below), we get:

$$\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}} = -\frac{\partial V}{\partial q} - m\ddot{q} = 0 \quad\Longrightarrow\quad m\ddot{q} = -\frac{\partial V}{\partial q}$$

> [!Feynman]- How were the two partial derivatives computed?
> Start from $L = \frac{1}{2}m\dot{q}^2 - V(q)$. Notice that the first term $\frac{1}{2}m\dot{q}^2$ depends **only** on $\dot{q}$, and the second term $V(q)$ depends **only** on $q$. This separation is the key.
>
> **Computing $\frac{\partial L}{\partial q}$** — differentiate $L$ with respect to $q$, treating $\dot{q}$ as an independent variable:
>
> $$\frac{\partial L}{\partial q} = \frac{\partial}{\partial q}\!\left(\frac{1}{2}m\dot{q}^2\right) - \frac{\partial}{\partial q}\bigl(V(q)\bigr) = 0 - \frac{\partial V}{\partial q} = -\frac{\partial V}{\partial q}$$
>
> The first term vanishes because $\frac{1}{2}m\dot{q}^2$ contains no $q$ at all — $\dot{q}$ is treated as its own independent variable in the Lagrangian formalism, not as "$dq/dt$ which depends on $q$."
>
> **Computing $\frac{\partial L}{\partial \dot{q}}$** — differentiate $L$ with respect to $\dot{q}$, treating $q$ as an independent variable:
>
> $$\frac{\partial L}{\partial \dot{q}} = \frac{\partial}{\partial \dot{q}}\!\left(\frac{1}{2}m\dot{q}^2\right) - \frac{\partial}{\partial \dot{q}}\bigl(V(q)\bigr) = m\dot{q} - 0 = m\dot{q}$$
>
> Here $V(q)$ vanishes because it contains no $\dot{q}$. The first term is just the power rule: $\frac{\partial}{\partial \dot{q}}(\frac{1}{2}m\dot{q}^2) = \frac{1}{2}m \cdot 2\dot{q} = m\dot{q}$.
>
> **Then take the total time derivative:**
>
> $$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}} = \frac{d}{dt}(m\dot{q}) = m\ddot{q}$$
>
> **Combine** by plugging into $\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}}$:
>
> $$\underbrace{-\frac{\partial V}{\partial q}}_{\partial L/\partial q} - \underbrace{m\ddot{q}}_{\frac{d}{dt}(\partial L/\partial \dot{q})} = 0$$
>
> which rearranges to $m\ddot{q} = -\frac{\partial V}{\partial q}$, i.e. Newton's second law.
>
> **The conceptual trap — "But $\dot{q}$ depends on $q$!":**
>
> You are right that *physically*, $\dot{q} = dq/dt$ is determined by $q(t)$. But here is the crucial distinction:
>
> $L(q, \dot{q}, t)$ is defined as a **function of three independent slots**. Think of it as $L(a, b, c) = \frac{1}{2}mb^2 - V(a)$. The letters $a$, $b$, $c$ are just input slots — they know nothing about each other. When you compute $\partial L / \partial a$, you hold $b$ fixed. When you compute $\partial L / \partial b$, you hold $a$ fixed. That is simply what "partial derivative" means for a multi-variable function.
>
> **Analogy:** Define $f(x, y) = x^2 + y$. Then $\partial f/\partial x = 2x$ and $\partial f/\partial y = 1$. Now suppose someone tells you "in my problem, $y = x^2$." Does that change the partial derivatives? **No.** The function $f$ still has the same formula and the same partials. The constraint $y = x^2$ tells you *which points* in the $(x, y)$ plane you evaluate $f$ at — it does not redefine $f$.
>
> Same thing here: $L(q, \dot{q}, t)$ is a recipe that takes three numbers and returns one number. The physical constraint $\dot{q} = dq/dt$ tells you *which inputs* to feed into $L$ when you are on an actual trajectory — it does not change $L$'s definition or its partial derivatives.
>
> **Where does the dependence come back?** Exactly at the step $\frac{d}{dt}\frac{\partial L}{\partial \dot{q}}$. The **total** time derivative $\frac{d}{dt}$ is where you finally use the fact that $q$ and $\dot{q}$ evolve together along a trajectory. The partial derivative $\frac{\partial}{\partial \dot{q}}$ treats them as independent; the total derivative $\frac{d}{dt}$ treats them as linked.
>
> This two-stage structure — *partial* derivative first (independent slots), *total* time derivative second (trajectory dependence) — is the entire engine of the Euler-Lagrange equation.

which **reproduces Newton's second law exactly**. The combination $T + V$ does not produce the correct sign. So $L = T - V$ is not an arbitrary choice — it is the unique combination (up to total time derivatives) that encodes Newtonian dynamics.

More generally, $L(q, \dot{q}, t)$ is any scalar function of generalized coordinates, their velocities, and time that generates the correct equations of motion. For non-mechanical systems (fields, relativity), $L$ is constructed from symmetry principles rather than $T - V$. (see `Feynman: Conservative vs Non-Conservative Forces`)

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

---

## Worked Examples — Computing Lagrangians and Applying E-L

### Bridge: From Particles to Fields

Everything above uses the **point-particle** Euler-Lagrange equation where $q(t)$ is a coordinate. In quantum mechanics and nuclear physics, the dynamical variables are **fields** $\phi(\mathbf{x}, t)$ — functions of both space and time. The Lagrangian becomes an integral of a **Lagrangian density** $\mathcal{L}$:

$$L = \int \mathcal{L}\bigl(\phi,\, \partial_\mu\phi\bigr)\, d^3x$$

and the action is:

$$S[\phi] = \int \mathcal{L}\bigl(\phi,\, \partial_\mu\phi\bigr)\, d^4x$$

The Euler-Lagrange equation generalizes to:

$$\boxed{\partial_\mu \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)} - \frac{\partial \mathcal{L}}{\partial \phi} = 0}$$

> [!Feynman]- How does this reduce to the particle version?
> In the particle case, there is only one "direction" to differentiate — time. So $\partial_\mu \to \frac{d}{dt}$, the field $\phi \to q$, and $\partial_\mu\phi \to \dot{q}$. The field E-L equation collapses to $\frac{d}{dt}\frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} = 0$, which is the same equation (with swapped term order — the minus sign is the same).

The "independent slots" idea from Step 0 carries over exactly: when computing $\frac{\partial \mathcal{L}}{\partial \phi}$, treat $\partial_\mu\phi$ as an independent variable. When computing $\frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)}$, treat $\phi$ as independent. The physical link between a field and its derivatives is restored by $\partial_\mu$ acting on the result.

---

### Example 1 — Charged Particle in an Electromagnetic Field

> [!tip] Why this matters
> This is the Lagrangian governing charged particles drifting through a TPC — directly relevant to particle tracking and identification.

A particle of charge $e$ and mass $m$ in potentials $\phi(\mathbf{r}, t)$ and $\mathbf{A}(\mathbf{r}, t)$:

$$L = \frac{1}{2}m\dot{\mathbf{r}}^2 + e\,\dot{\mathbf{r}} \cdot \mathbf{A}(\mathbf{r}, t) - e\,\phi(\mathbf{r}, t)$$

This is still a **particle** Lagrangian — generalized coordinates are $q_i = (x, y, z)$.

> [!Feynman]- Why does the vector potential $\mathbf{A}$ appear coupled to velocity?
> The magnetic force $e\,\mathbf{v}\times\mathbf{B}$ depends on velocity, which is unusual — it cannot come from a potential $V(\mathbf{r})$ alone. The trick is that $\mathbf{B} = \nabla\times\mathbf{A}$, and the coupling $e\,\dot{\mathbf{r}}\cdot\mathbf{A}$ is a **velocity-dependent potential** that, through the E-L equation, produces exactly $e\,\mathbf{v}\times\mathbf{B}$. This is the only way to fit magnetism into the Lagrangian framework.

**Computing the partial derivatives** (for the $x$-component):

**Slot 1 — $\frac{\partial L}{\partial x}$** (hold $\dot{x}, \dot{y}, \dot{z}$ fixed):

$$\frac{\partial L}{\partial x} = e\left(\dot{x}\frac{\partial A_x}{\partial x} + \dot{y}\frac{\partial A_y}{\partial x} + \dot{z}\frac{\partial A_z}{\partial x}\right) - e\frac{\partial \phi}{\partial x}$$

The kinetic term $\frac{1}{2}m\dot{\mathbf{r}}^2$ vanishes — it has no $x$ (same logic as Step 0).

**Slot 2 — $\frac{\partial L}{\partial \dot{x}}$** (hold $x, y, z$ fixed):

$$\frac{\partial L}{\partial \dot{x}} = m\dot{x} + eA_x$$

Note: $eA_x$ survives because $\dot{\mathbf{r}}\cdot\mathbf{A} = \dot{x}A_x + \dot{y}A_y + \dot{z}A_z$ and we differentiate w.r.t. $\dot{x}$.

**Total time derivative:**

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{x}} = m\ddot{x} + e\frac{dA_x}{dt} = m\ddot{x} + e\left(\frac{\partial A_x}{\partial t} + \dot{x}\frac{\partial A_x}{\partial x} + \dot{y}\frac{\partial A_x}{\partial y} + \dot{z}\frac{\partial A_x}{\partial z}\right)$$

Here the chain rule on $A_x(\mathbf{r}(t), t)$ is where the trajectory dependence re-enters (just as predicted by the "independent slots" discussion).

**E-L equation** $\frac{\partial L}{\partial x} - \frac{d}{dt}\frac{\partial L}{\partial \dot{x}} = 0$ gives, after careful cancellation:

$$m\ddot{x} = e\underbrace{\left(-\frac{\partial\phi}{\partial x} - \frac{\partial A_x}{\partial t}\right)}_{E_x} + e\underbrace{\left[\dot{y}\!\left(\frac{\partial A_y}{\partial x} - \frac{\partial A_x}{\partial y}\right) - \dot{z}\!\left(\frac{\partial A_x}{\partial z} - \frac{\partial A_z}{\partial x}\right)\right]}_{(\mathbf{v}\times\mathbf{B})_x}$$

$$\boxed{m\ddot{\mathbf{r}} = e(\mathbf{E} + \mathbf{v}\times\mathbf{B})}$$

The **Lorentz force law** — derived purely from the Lagrangian, with no forces assumed.

---

### Example 2 — Klein-Gordon Field (Relativistic Scalar Field)

> [!tip] Why this matters
> The simplest relativistic quantum field theory. Describes spin-0 particles (pions, the Higgs boson). This is usually the first field Lagrangian encountered in QFT courses.

The Lagrangian density (using the mostly-minus metric $\eta^{\mu\nu} = \mathrm{diag}(+,-,-,-)$ and $\hbar = c = 1$):

$$\mathcal{L} = \frac{1}{2}(\partial_\mu\phi)(\partial^\mu\phi) - \frac{1}{2}m^2\phi^2$$

Expanding the kinetic term: $(\partial_\mu\phi)(\partial^\mu\phi) = \dot{\phi}^2 - (\nabla\phi)^2$.

**Slot 1 — $\frac{\partial \mathcal{L}}{\partial \phi}$** (hold $\partial_\mu\phi$ fixed):

$$\frac{\partial \mathcal{L}}{\partial \phi} = -m^2\phi$$

The kinetic term $\frac{1}{2}(\partial_\mu\phi)(\partial^\mu\phi)$ contains no bare $\phi$ — only derivatives of $\phi$. Same logic as before: derivative slots are independent of the field slot.

**Slot 2 — $\frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)}$** (hold $\phi$ fixed):

$$\frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)} = \partial^\mu\phi$$

> [!Feynman]- Why does $\frac{\partial}{\partial(\partial_\mu\phi)}\left[\frac{1}{2}(\partial_\nu\phi)(\partial^\nu\phi)\right] = \partial^\mu\phi$?
> Write the kinetic term as $\frac{1}{2}\eta^{\nu\rho}(\partial_\nu\phi)(\partial_\rho\phi)$. Differentiating w.r.t. $\partial_\mu\phi$ using the product rule:
>
> $$\frac{1}{2}\eta^{\nu\rho}\left[\delta^\mu_\nu(\partial_\rho\phi) + (\partial_\nu\phi)\delta^\mu_\rho\right] = \frac{1}{2}\left[\eta^{\mu\rho}\partial_\rho\phi + \eta^{\nu\mu}\partial_\nu\phi\right] = \frac{1}{2}[\partial^\mu\phi + \partial^\mu\phi] = \partial^\mu\phi$$
>
> where we used $\frac{\partial(\partial_\nu\phi)}{\partial(\partial_\mu\phi)} = \delta^\mu_\nu$ — the field-theory version of $\frac{\partial \dot{q}}{\partial \dot{q}} = 1$.

**Apply the field E-L equation:**

$$\partial_\mu(\partial^\mu\phi) - (-m^2\phi) = 0$$

$$\boxed{(\partial_\mu\partial^\mu + m^2)\phi = (\Box + m^2)\phi = 0}$$

This is the **Klein-Gordon equation**. In non-relativistic notation: $\ddot{\phi} - \nabla^2\phi + m^2\phi = 0$.

---

### Example 3 — Dirac Field (Spin-1/2 Fermions)

> [!tip] Why this matters
> The Dirac Lagrangian describes all spin-$\frac{1}{2}$ particles: electrons, quarks, nucleons. It is the starting point for QED and for nuclear field theory models.

$$\mathcal{L}_{\text{Dirac}} = \bar{\psi}(i\gamma^\mu\partial_\mu - m)\psi$$

where $\psi$ is a 4-component spinor field and $\bar{\psi} = \psi^\dagger\gamma^0$ is its Dirac adjoint. The key trick: **treat $\psi$ and $\bar{\psi}$ as independent fields**.

> [!Feynman]- Why can $\psi$ and $\bar\psi$ be treated as independent?
> $\bar{\psi}$ is defined in terms of $\psi$ ($\bar\psi = \psi^\dagger\gamma^0$), so they are not truly independent. But you can equivalently vary with respect to the real and imaginary parts of $\psi$. Varying $\psi$ and $\bar\psi$ independently gives the same equations of motion and is algebraically much simpler. This is the same trick used for a complex scalar field $\phi$ and $\phi^*$.

**Vary w.r.t. $\bar\psi$** (the simpler direction):

**Slot 1 — $\frac{\partial \mathcal{L}}{\partial \bar\psi}$:**

$$\frac{\partial \mathcal{L}}{\partial \bar\psi} = (i\gamma^\mu\partial_\mu - m)\psi$$

**Slot 2 — $\frac{\partial \mathcal{L}}{\partial(\partial_\mu\bar\psi)}$:**

$$\frac{\partial \mathcal{L}}{\partial(\partial_\mu\bar\psi)} = 0$$

There are no $\partial_\mu\bar\psi$ terms in $\mathcal{L}$ — derivatives act only on $\psi$.

**E-L equation:** $0 - (i\gamma^\mu\partial_\mu - m)\psi = 0$, i.e.:

$$\boxed{(i\gamma^\mu\partial_\mu - m)\psi = 0}$$

The **Dirac equation**. Note how direct this is — one line of E-L computation.

---

### Example 4 — Walecka Model (Nuclear Matter)

> [!tip] Why this matters
> The Walecka $\sigma$-$\omega$ model is the foundation of relativistic mean-field (RMF) theory in nuclear physics — it describes nuclear matter as nucleons interacting via meson exchange, and is widely used for modeling nuclear structure, neutron stars, and heavy-ion collisions.

The model introduces two meson fields mediating the nuclear force:
- $\sigma$: scalar meson (attractive, medium-range) → couples to $\bar\psi\psi$
- $\omega^\mu$: vector meson (repulsive, short-range) → couples to $\bar\psi\gamma^\mu\psi$

$$\mathcal{L} = \underbrace{\bar{\psi}\bigl[i\gamma^\mu\partial_\mu - M + g_s\sigma - g_v\gamma^\mu\omega_\mu\bigr]\psi}_{\text{nucleon + couplings}} + \underbrace{\frac{1}{2}(\partial_\mu\sigma)(\partial^\mu\sigma) - \frac{1}{2}m_s^2\sigma^2}_{\text{free scalar meson}} - \underbrace{\frac{1}{4}\Omega_{\mu\nu}\Omega^{\mu\nu} + \frac{1}{2}m_v^2\omega_\mu\omega^\mu}_{\text{free vector meson}}$$

where $\Omega_{\mu\nu} = \partial_\mu\omega_\nu - \partial_\nu\omega_\mu$ is the field-strength tensor for the $\omega$ meson.

**Vary w.r.t. $\bar\psi$** (nucleon equation):

- $\frac{\partial\mathcal{L}}{\partial\bar\psi} = [i\gamma^\mu\partial_\mu - M + g_s\sigma - g_v\gamma^\mu\omega_\mu]\psi$
- $\frac{\partial\mathcal{L}}{\partial(\partial_\mu\bar\psi)} = 0$

$$\boxed{[i\gamma^\mu\partial_\mu - (M - g_s\sigma) - g_v\gamma^\mu\omega_\mu]\psi = 0}$$

This is the Dirac equation with an **effective mass** $M^* = M - g_s\sigma$ (attraction reduces the nucleon mass in-medium) and a **vector potential** $g_v\omega_\mu$ (repulsion).

**Vary w.r.t. $\sigma$** (scalar meson equation):

- $\frac{\partial\mathcal{L}}{\partial\sigma} = g_s\bar\psi\psi - m_s^2\sigma$
- $\frac{\partial\mathcal{L}}{\partial(\partial_\mu\sigma)} = \partial^\mu\sigma$ (same computation as Klein-Gordon)

$$\boxed{(\Box + m_s^2)\sigma = g_s\bar\psi\psi}$$

Klein-Gordon equation with a **source term** $g_s\bar\psi\psi$ — the scalar density of nucleons generates the $\sigma$ field.

**Vary w.r.t. $\omega_\nu$** (vector meson equation):

- $\frac{\partial\mathcal{L}}{\partial\omega_\nu} = -g_v\bar\psi\gamma^\nu\psi + m_v^2\omega^\nu$
- $\partial_\mu\frac{\partial\mathcal{L}}{\partial(\partial_\mu\omega_\nu)} = \partial_\mu\Omega^{\mu\nu}$

$$\boxed{\partial_\mu\Omega^{\mu\nu} + m_v^2\omega^\nu = g_v\bar\psi\gamma^\nu\psi}$$

A **Proca equation** (massive vector field) sourced by the nucleon current $\bar\psi\gamma^\nu\psi$.

> [!Feynman]- How does this connect to the nuclear force?
> In the mean-field approximation (replace fields with their expectation values), the $\sigma$ field gives a uniform attractive potential that lowers the nucleon mass, while the $\omega^0$ field gives a uniform repulsive potential. The balance between attraction ($\sigma$) and repulsion ($\omega$) is what produces nuclear saturation — the empirical fact that nuclear density is roughly constant across all stable nuclei. This is the same physics encoded in the Bethe-Weizsäcker semi-empirical mass formula, but derived from a relativistic field theory.
