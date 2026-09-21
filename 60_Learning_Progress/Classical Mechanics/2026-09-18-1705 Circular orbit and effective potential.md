---
type: learning-progress
topic: "Circular orbit and effective potential"
area: Classical Mechanics
status: active
created: 2026-09-18
tags:
  - physics
  - classical-mechanics
  - gre-physics
  - central-force
  - effective-potential
---
# Circular orbit and effective potential — 1D radial equilibrium

**Why this note exists:** Learner asked for the logical link between a "circular orbit" and setting the derivative of the effective potential to zero, $V'(r) = 0$, based on a Conquering the Physics GRE solution.

## Context

**Source:** Conquering the Physics GRE solution excerpt (screenshot)
**Transcription:**
SOLUTION
**A** – Don't let the complicated-seeming problem statement fool you: this is just an application of the orbit formalism to the central potential $U(r) = \frac{1}{2}kr^2$ for a spring. We're looking for the radius of a circular orbit, so we solve $V'(r) = 0$:
$$\frac{-l^2}{mr^3} + kr = 0 \implies r = (l^2/mk)^{1/4}.$$
We can check that $V''(r) = k + 3l^2/mr^4 > 0$, so this is indeed a stable circular orbit. Incidentally, since all of the answer choices have different units, this would have been a perfect chance to practice using dimensional analysis.

**Visual Layout & Details:**
Text solution block titled "SOLUTION" in brick-red small caps. Bold text "**A** –" indicates Option A is correct. Formula typesetting in standard serif LaTeX. No other markings or highlights.

---

## Turns

### Turn 1 — 2026-09-18 (learner)

> I don't understand the logical connection between "circular orbit" and "the derivation of effective potential V = 0"

### Tutor

The link comes directly from treating the radial motion as an **equivalent 1D problem**.

In a central potential with conserved angular momentum $l$, the radial motion obeys the 1D Newton's second law:
$$m\ddot{r} = -\frac{\mathrm{d}V_{\text{eff}}}{\mathrm{d}r} = -V'(r)$$
where $V(r) = U(r) + \frac{l^2}{2mr^2}$ is the effective potential.

A **circular orbit** means the distance from the center never changes: $r(t) = r_0 = \text{const}$. Therefore, both radial velocity and radial acceleration must vanish for all time:
$$\dot{r} = 0 \quad \text{and} \quad \ddot{r} = 0$$

Plugging $\ddot{r} = 0$ into $m\ddot{r} = -V'(r)$ immediately forces:
$$-V'(r_0) = 0 \implies V'(r_0) = 0$$

Physically, $-V'(r) = 0$ is just the radial force balance: the inward physical force $-U'(r)$ exactly supplies the outward centrifugal pseudo-force $\frac{l^2}{mr^3} = \frac{mv_\theta^2}{r}$ required to keep the particle on a circle. In the 1D energy landscape $V(r)$, the particle sits completely motionless at an equilibrium point.

---

**Question:**

If sitting at an extremum $V'(r_0) = 0$ guarantees $\ddot{r} = 0$, why does the solution also check $V''(r_0) > 0$ — what would physically happen to the circular orbit if $V'(r_0) = 0$ but $V''(r_0) < 0$?

### Turn 2 — 2026-09-18 (learner)

> Record the session in the daily note first.
> If the second order derivative less than 0, then it is a large extremum, which is not stable against any perturbation.

### Tutor

Recorded in today's daily note under `**a1. GRE Physics Prep**` and in `## Log`.

Exactly right: $V''(r_0) < 0$ means $r_0$ is a **local maximum** (a hillcrest in the 1D potential landscape).
- For a small radial displacement $\delta r = r - r_0$, Taylor expansion gives:
  $$m\ddot{\delta r} \approx -V''(r_0)\,\delta r = +|V''(r_0)|\,\delta r$$
- Because the sign is positive, the effective radial force pushes the particle *further away* from equilibrium: a slight nudge outward accelerates it outward ($r \to \infty$), while a nudge inward accelerates it toward the center.
- In contrast, $V''(r_0) > 0$ forms a potential well (a bowl), providing a restoring force $m\ddot{\delta r} \approx -k_{\text{eff}}\,\delta r$ that traps the particle in bounded radial oscillations (epicycles) around $r_0$.

---

**Question:**

In this spring problem, $U(r) = \frac{1}{2}kr^2$ gives $V''(r) = k + \frac{3l^2}{mr^4}$. Since $k, m, r > 0$, this is strictly positive everywhere. Does this mean *every* circular orbit in a spring potential is stable, or can you think of any power-law potential $U(r) \propto r^n$ where circular orbits can become unstable?

### Turn 3 — 2026-09-18 (learner)

> If we introduce gravity, then the motion could be unstable

### Tutor

This is a classic GRE intuition trap! While Newtonian gravity $U(r) = -\frac{GMm}{r}$ curves downward on its own ($U''(r) = -\frac{2GMm}{r^3} < 0$), its circular orbits are actually **strictly stable**:
- The centrifugal barrier $V_{\text{cf}}(r) = \frac{l^2}{2mr^2}$ curves upward: $V_{\text{cf}}''(r) = +\frac{3l^2}{mr^4}$.
- At the circular radius $r_0$, the force balance $V'(r_0) = 0$ requires $\frac{l^2}{mr_0^3} = \frac{GMm}{r_0^2}$.
- Substituting this gives:
  $$V''(r_0) = -\frac{2GMm}{r_0^3} + \frac{3GMm}{r_0^3} = +\frac{GMm}{r_0^3} > 0$$
The $+3$ from the steeper centrifugal barrier ($1/r^4$) always beats the $-2$ from gravity ($1/r^3$), which is why planetary orbits don't spontaneously destabilize.

In general, for an attractive power-law force $F(r) = -C/r^n$ (potential $U \propto -r^{1-n}$), circular orbits are stable **if and only if $n < 3$**. Instability only sets in when the inward force steepens to $n \ge 3$ (like $U \propto -1/r^2$, or General Relativity corrections near a black hole's ISCO).

---

**Question:**

Using this balance, if an inward force steepens to $F(r) = -C/r^4$ ($n=4$), what would the sign of $V''(r_0)$ be when you substitute the equilibrium condition $C/r_0^4 = l^2/(mr_0^3)$?

### Turn 4 — 2026-09-18 (learner)

> negative

### Tutor

Spot on:
$$V''(r_0) = -\frac{4C}{r_0^5} + \frac{3l^2}{mr_0^4} = -\frac{4C}{r_0^5} + \frac{3C}{r_0^5} = -\frac{C}{r_0^5} < 0$$
Because the inward attractive force steepens faster than the centrifugal barrier ($1/r^4$ vs $1/r^3$), its derivative has a larger negative magnitude ($-4$) than the centrifugal barrier's positive restore ($+3$), turning the circular orbit into an unstable peak.

#### Summary of the core mechanism:
1. **Circular orbit condition:** A circular orbit requires constant radius $r(t) = r_0$, meaning radial velocity and acceleration vanish identically ($\dot{r} = 0, \ddot{r} = 0$). In the 1D effective equation of motion $m\ddot{r} = -V'(r)$, this forces **$V'(r_0) = 0$** (exact balance between physical central force and centrifugal pseudo-force).
2. **Radial stability condition:** An orbit is stable against small radial perturbations if and only if it sits in a potential bowl, **$V''(r_0) > 0$**.
3. **Power-law criterion:** For an attractive central force $F(r) = -C/r^n$, circular orbits are stable $\iff n < 3$. Standard Newtonian gravity ($n = 2$) and harmonic spring potentials ($n = -1$) are strictly stable, while steeper forces ($n \ge 3$) are unstable.
