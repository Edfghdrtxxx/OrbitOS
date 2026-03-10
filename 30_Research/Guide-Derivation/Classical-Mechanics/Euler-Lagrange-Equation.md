---
type: derivation
domain: Classical Mechanics
premises:
  - "Hamilton's Principle of Stationary Action"
  - "Definition of the action functional S"
  - "Calculus of variations (functional derivative)"
  - "Fixed endpoints: δq(t₁) = δq(t₂) = 0"
result: "$\\frac{\\partial L}{\\partial q} - \\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L}{\\partial \\dot{q}} = 0$"
tags:
  - derivation
  - classical-mechanics
  - analytical-mechanics
  - GRE-physics
aliases:
  - "Lagrange Equation"
  - "Euler-Lagrange EOM"
created: 2026-03-10
last_reviewed:
next_review:
review_interval: 0
---
# Euler-Lagrange Equation
## Setup

**Goal:** Derive the equation of motion for a mechanical system from Hamilton's Principle of Stationary Action.

**Starting from:**
- **Hamilton's Principle:** The physical trajectory $q(t)$ between times $t_1$ and $t_2$ is the one that makes the action functional $S[q]$ stationary (i.e., $\delta S = 0$).
- **Action functional:** $S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, \mathrm{d}t$, where $L = T - V$ is the Lagrangian.
- **Fixed endpoints:** The variation vanishes at the boundaries: $\delta q(t_1) = \delta q(t_2) = 0$.

**Strategy:** Parameterise a family of paths near the true path, compute $\delta S$, apply integration by parts, then invoke the fundamental lemma of calculus of variations.

## Derivation

### Step 1 — Define the variation

Consider the true path $q(t)$ and a nearby path $q(t) + \varepsilon \eta(t)$, where $\varepsilon$ is an infinitesimal parameter and $\eta(t)$ is an arbitrary smooth function satisfying the fixed-endpoint conditions:

$$
\eta(t_1) = 0, \quad \eta(t_2) = 0 \tag{1}
$$

The velocity along the varied path is $\dot{q} + \varepsilon \dot{\eta}$.

> *Physically:* We are testing whether small deformations of the trajectory change the action. The true trajectory is the one where no deformation (to first order) changes $S$.

### Step 2 — Expand the action along the varied path

Substitute the varied path into the action:

$$
S[q + \varepsilon \eta] = \int_{t_1}^{t_2} L(q + \varepsilon \eta,\; \dot{q} + \varepsilon \dot{\eta},\; t) \, \mathrm{d}t \tag{2}
$$

Taylor-expand $L$ to first order in $\varepsilon$ (**first-order Taylor expansion**):

$$
L(q + \varepsilon \eta, \dot{q} + \varepsilon \dot{\eta}, t) = L(q, \dot{q}, t) + \varepsilon \eta \frac{\partial L}{\partial q} + \varepsilon \dot{\eta} \frac{\partial L}{\partial \dot{q}} + \mathcal{O}(\varepsilon^2) \tag{3}
$$

### Step 3 — Compute the first variation $\delta S$

The first variation is defined as $\delta S = \frac{\mathrm{d}}{\mathrm{d}\varepsilon} S[q + \varepsilon \eta] \Big|_{\varepsilon=0}$, which from Eq. (3) gives:

$$
\delta S = \int_{t_1}^{t_2} \left( \eta \frac{\partial L}{\partial q} + \dot{\eta} \frac{\partial L}{\partial \dot{q}} \right) \mathrm{d}t \tag{4}
$$

> *Physically:* $\delta S$ measures how the action responds to infinitesimal path deformations. Hamilton's Principle requires $\delta S = 0$ for all admissible $\eta$.

### Step 4 — Integration by parts

The second term in Eq. (4) contains $\dot{\eta}$, which is inconvenient because we want everything multiplied by $\eta$ alone. Apply **integration by parts** ($\int u \, \mathrm{d}v = uv - \int v \, \mathrm{d}u$) to that term:

$$
\int_{t_1}^{t_2} \dot{\eta} \frac{\partial L}{\partial \dot{q}} \, \mathrm{d}t = \left[ \eta \frac{\partial L}{\partial \dot{q}} \right]_{t_1}^{t_2} - \int_{t_1}^{t_2} \eta \frac{\mathrm{d}}{\mathrm{d}t} \frac{\partial L}{\partial \dot{q}} \, \mathrm{d}t \tag{5}
$$

By the fixed-endpoint conditions Eq. (1), the boundary term vanishes:

$$
\left[ \eta \frac{\partial L}{\partial \dot{q}} \right]_{t_1}^{t_2} = \eta(t_2) \frac{\partial L}{\partial \dot{q}}\bigg|_{t_2} - \eta(t_1) \frac{\partial L}{\partial \dot{q}}\bigg|_{t_1} = 0 \tag{6}
$$

### Step 5 — Combine and factor out $\eta$

Substituting Eq. (5) (with vanishing boundary term) back into Eq. (4):

$$
\delta S = \int_{t_1}^{t_2} \eta(t) \left[ \frac{\partial L}{\partial q} - \frac{\mathrm{d}}{\mathrm{d}t} \frac{\partial L}{\partial \dot{q}} \right] \mathrm{d}t = 0 \tag{7}
$$

### Step 6 — Apply the Fundamental Lemma of Calculus of Variations

**Fundamental Lemma:** If $\int_{t_1}^{t_2} \eta(t) \, f(t) \, \mathrm{d}t = 0$ for all smooth $\eta$ with $\eta(t_1) = \eta(t_2) = 0$, then $f(t) = 0$ for all $t \in [t_1, t_2]$.

Since Eq. (7) must hold for *every* admissible $\eta(t)$, the integrand itself must vanish identically:

$$
\frac{\partial L}{\partial q} - \frac{\mathrm{d}}{\mathrm{d}t} \frac{\partial L}{\partial \dot{q}} = 0 \tag{8}
$$

> *Physically:* This is Newton's second law in disguise. The term $\frac{\partial L}{\partial q}$ is the generalised force, and $\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{q}}$ is the rate of change of generalised momentum. The equation says force = rate of change of momentum.

### Generalisation to $n$ degrees of freedom

For a system with $n$ generalised coordinates $q_1, q_2, \ldots, q_n$, each coordinate has its own independent variation $\eta_i$, yielding $n$ independent equations:

$$
\frac{\partial L}{\partial q_i} - \frac{\mathrm{d}}{\mathrm{d}t} \frac{\partial L}{\partial \dot{q}_i} = 0, \quad i = 1, 2, \ldots, n \tag{9}
$$

## Result

$$
\boxed{\frac{\partial L}{\partial q} - \frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{q}} = 0}
$$

**Valid when:**
- The system is described by a Lagrangian $L(q, \dot{q}, t)$ (holonomic constraints, forces derivable from a potential)
- The endpoints are fixed ($\delta q = 0$ at $t_1$ and $t_2$)
- $L$ is at least twice continuously differentiable in its arguments

**Breaks when:**
- Non-holonomic constraints (e.g., rolling without slipping on a surface) — requires Lagrange multipliers or modified formulation
- Dissipative forces (friction) — not derivable from a standard potential; requires Rayleigh dissipation function
- Higher-order Lagrangians $L(q, \dot{q}, \ddot{q}, \ldots)$ — yields higher-order Euler-Lagrange equations
- Discontinuous or non-smooth paths — the fundamental lemma requires smoothness

## Pitfalls

- **Confusing $\frac{\partial}{\partial \dot{q}}$ with $\frac{\mathrm{d}}{\mathrm{d}t}$:** The partial derivative $\frac{\partial L}{\partial \dot{q}}$ treats $q$ and $\dot{q}$ as independent variables. The total time derivative $\frac{\mathrm{d}}{\mathrm{d}t}$ then acts on the result. GRE problems often test whether you correctly apply $\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{q}}$ using the chain rule.
- **Forgetting the boundary term:** If the boundary conditions are not $\delta q = 0$ at both endpoints (e.g., free-endpoint problems), the boundary term from integration by parts does *not* vanish and gives natural boundary conditions instead.
- **Sign error in the equation:** The equation is $\frac{\partial L}{\partial q} - \frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{q}} = 0$, **not** with a plus sign. A common exam trap: writing $+$ instead of $-$ reverses the physics entirely.

## Related

- [[Breit-Wigner-Resonance-Formula]]
- [[Hamilton's Principle]]
- [[Lagrangian Mechanics]]
- [[Hamiltonian Mechanics]]
- [[Noether's Theorem]]
