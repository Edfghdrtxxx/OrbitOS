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

### Turn 2 — 2026-09-14 (learner)

> You were saying this but I interrupted you:
>
> The hoop session only has Turn 1. The unanswered question is:
> The centrifugal force is horizontal (outward from the center), so its direction is always perpendicular to the vertical. The tangent line is tilted by θ from the horizontal, which means the angle between the centrifugal force (horizontal) and the tangent is exactly θ. Therefore the component along the wire is F_c cosθ.
>
> Gravity is vertical, and the tangent is tilted by θ from the horizontal, so the angle between gravity and the tangent is 90° – θ. That gives the component mg sinθ.
>
> That’s why you see cosθ for the centrifugal term and sinθ for gravity: the two forces are in perpendicular directions, and the 90° difference in their angles to the tangent flips the trig functions.
>
> Moreover, you need to activate daily note addition to record this session. I want to trace every effort I have made.

### Tutor

Curve item is closed (D). That geometry is the answer to Turn 1's question — same $mg\sin\theta$ along the tangent as on the track; hoop $\theta$ (from the downward vertical) *is* the tangent's tilt from the horizontal on a circle.

```
                    rotation axis
                         |
                    O    |
                   /     |
              R   / θ    |          F_cf →  (horizontal)
                 /       |
                * bead   |
               /  ê_θ    v mg
              /   (tangent; tilt θ from horizontal)
```

$F_{\mathrm{cf}}$ is horizontal, so the angle to $\hat e_\theta$ is $\theta$ $\Rightarrow$ $F_{\mathrm{cf}}\cos\theta$. Gravity is vertical, so the angle to $\hat e_\theta$ is $90^\circ-\theta$ $\Rightarrow$ $mg\sin\theta$.

The centrifugal *magnitude* is not $m\omega^2 R$. The distance to the axis is $r=R\sin\theta$, so $F_{\mathrm{cf}}=m\omega^2 R\sin\theta$. Combined with the $\cos\theta$ projection that is $m\omega^2 R\sin\theta\cos\theta$.

For small $\theta$, $\sin\theta\cos\theta\approx\theta$. Does that centrifugal piece restore toward the bottom, or push the bead *up* the wire?
