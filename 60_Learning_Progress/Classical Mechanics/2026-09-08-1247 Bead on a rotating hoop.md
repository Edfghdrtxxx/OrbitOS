---
type: learning-progress
topic: "Bead on a rotating hoop"
area: Classical Mechanics
status: active
created: 2026-09-08
tags:
  - physics
  - classical-mechanics
  - gre-physics
  - lagrangian
  - bifurcation
---

# Bead on a rotating hoop — mechanism and stability analysis

**Why this note exists:** Learner requested deep understanding of the underlying physical mechanism and general analysis methods (effective potential, rotating-frame force projection, and pitchfork bifurcation) behind the bead on a rotating hoop problem from GRE Physics Prep.

**Suggested scope:**
- Competing forces in the rotating frame ($F_g$ vs. $F_{\text{cf}}$ projected onto the 1D wire constraint)
- Linear stability analysis around $\theta = 0$ (competing linear slopes $\to$ effective spring constant $k_{\text{eff}}$)
- Energy landscape / effective potential $U_{\text{eff}}(\theta)$ and curvature test ($\mathrm{d}^2 U_{\text{eff}}/\mathrm{d}\theta^2$)
- Supercritical pitchfork bifurcation and symmetry breaking ($\theta \leftrightarrow -\theta$)
- General analysis recipe for 1D constrained systems with steady rotation

---

## Turns

### Turn 1 — 2026-09-08 (learner)

> /learn the underlying mechanism and analysis method behind this problem

### Tutor

The entire problem comes down to a **competition of two linear slopes at the bottom ($\theta = 0$)**.

At the exact bottom ($\theta = 0$), both forces along the wire vanish identically. Thus, $\theta = 0$ is *always* an equilibrium for any rotation speed $\omega$. The question is whether it is a **stable bowl** or an **unstable peak**.

#### 1. The two competing forces along the wire

In the co-rotating frame of the hoop, the bead has only 1 degree of freedom: moving along the circular wire parameterized by angle $\theta$ (measured from the downward vertical).

Any motion must be along the unit tangent vector $\hat{\mathbf{e}}_\theta$. Normal forces exerted by the wire act perpendicular to $\hat{\mathbf{e}}_\theta$ and do zero work, so we only project the active forces onto the wire:

- **Gravity** acts vertically downward ($mg$):
  Its restoring component pointing back toward $\theta = 0$ is:
  $$F_{g,\parallel} = -mg\sin\theta \approx -mg\,\theta \quad (\text{for small }\theta)$$

- **Centrifugal pseudo-force** acts horizontally outward with magnitude $F_{\text{cf}} = m\omega^2 r = m\omega^2(R\sin\theta)$:
  Its projection pushing the bead *away* from $\theta = 0$ (up the wire) is:
  $$F_{\text{cf},\parallel} = F_{\text{cf}}\cos\theta = m\omega^2 R\sin\theta\cos\theta \approx +m\omega^2 R\,\theta \quad (\text{for small }\theta)$$

```text
       Rotation Axis
            |
            |       O (center)
            |      /
            |     / R
            |    / \theta
            |   /
            |  * Bead (mass m)
            |   \
            |    \---> F_cf = m\omega^2(R sin\theta)  [horizontal outward]
            |     \
            |      v F_g = mg  [vertically downward]
            |       
         (Tangent direction along hoop is inclined at angle \theta to the horizontal)
```

#### 2. The linear stability condition

Summing the tangential forces for small $\theta$:
$$F_{\text{net},\parallel} = F_{\text{cf},\parallel} + F_{g,\parallel} \approx -(mg - m\omega^2 R)\,\theta = -k_{\text{eff}}\,\theta$$

where the effective restoring spring constant is:
$$k_{\text{eff}} = m(g - \omega^2 R)$$

- When $g > \omega^2 R$ ($\omega < \sqrt{g/R}$), $k_{\text{eff}} > 0$: gravity restores faster than centrifugal force repels. The bottom is a **stable equilibrium**.
- When $\omega^2 R > g$ ($\omega > \sqrt{g/R}$), $k_{\text{eff}} < 0$: centrifugal repulsion overpowers gravity's restore. The bottom becomes an **unstable equilibrium**.

---

**Question:**

Notice how both forces scale linearly with $\theta$ near the bottom ($\sin\theta\cos\theta \approx \theta$). Looking at the geometry of the circular hoop, **why does the centrifugal force's projection along the wire pick up a factor of $\cos\theta$, while gravity's projection picks up $\sin\theta$?**
