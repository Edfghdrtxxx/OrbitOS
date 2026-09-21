---
type: learning-progress
topic: "Mutual inductance"
area: Electrodynamics
status: done
created: 2026-09-18
tags:
  - physics
  - electrodynamics
  - induction
  - mutual-inductance
  - faraday-law
  - gre-physics
---
# Mutual inductance — $\Phi_{21} = M_{12} I_1$

**Why this note exists:** Flashcard recall & conceptual distinction query from Kahn's *Conquering the Physics GRE* (Electrodynamics, Inductors, eq. 2.43): defining mutual inductance $M_{12}$ via the magnetic flux $\Phi_{21}$ through loop 2 due to current $I_1$ in loop 1, and contrasting mutual inductance with self-inductance.

**Target:**
1. Define magnetic flux $\Phi_{21} = \int_{S_2} \mathbf{B}_1 \cdot \mathrm{d}\mathbf{a}_2$ and mutual inductance $M_{12} = \Phi_{21} / I_1$ (flux linkage in a separate circuit per unit current).
2. Understand the physical mechanism: linearity of Biot–Savart/Ampère guaranteeing $M_{12}$ is a purely geometric coupling invariant, and Neumann reciprocity ($M_{12} = M_{21}$).
3. Contrast mutual inductance ($M$) with self-inductance ($L$): single-loop self-reaction vs two-loop cross-coupling, sign freedom ($\pm$ vs strictly positive), and coupled energy $U = \frac{1}{2}L_1 I_1^2 + \frac{1}{2}L_2 I_2^2 \pm M I_1 I_2$ with geometric bound $M \le \sqrt{L_1 L_2}$.
4. Connect to the Depth framework (深刻的方式 / DEPTH) and GRE problem patterns (reciprocity shortcuts, concentric loop scaling, solenoid transformers).

### Prior context
- **Already computable:** Self-inductance $L = \Phi_B / I$, solenoid self-inductance $L = \mu_0 N^2 A / l$, magnetic field energy density $u_B = \frac{B^2}{2\mu_0}$, self-induced back-emf $\mathcal{E} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$ (from [[2026-09-17-2129 Self-induced emf across an inductor]]).
- **What broke:** Self-inductance only describes an isolated circuit reacting to its own current variations. When two circuits share space, time-varying current in loop 1 induces an emf in loop 2 without any physical wire connection.
- **New object had to:** Quantify the magnetic cross-talk / geometric coupling between two distinct circuits into a lumped parameter $M$, extending Faraday induction to multi-circuit systems.

---

## Turns

### Turn 1 — 2026-09-18 (learner)

> /learn "What is the magnetic flux 
> Φ
> 21
> Φ 
> 21
> ​
>   through loop 2 due to current 
> I
> 1
> I 
> 1
> ​
>   in loop 1, defining the mutual inductance 
> M
> 12
> M 
> 12
> ​
>  ? " What is the difference between mutual inductance and self-inductance? Before learning start, record this in daily note by using daily note addition.

### Tutor

The magnetic flux $\Phi_{21}$ through loop 2 caused by current $I_1$ in loop 1 is:
$$\Phi_{21} \equiv \int_{S_2} \mathbf{B}_1 \cdot \mathrm{d}\mathbf{a}_2$$

Because $\mathbf{B}_1 \propto I_1$ via the Biot–Savart law, this flux is directly proportional to $I_1$, defining the **mutual inductance** $M_{12}$:
$$\Phi_{21} = M_{12} I_1 \implies M_{12} \equiv \frac{\Phi_{21}}{I_1}$$

**Core difference:**
- **Self-inductance ($L$):** Quantifies self-reaction—flux through a circuit produced by its *own* current ($\Phi_{11} = L I_1$), where Lenz's law strictly forces $L > 0$.
- **Mutual inductance ($M$):** Quantifies cross-coupling—flux linked in a *separate* circuit ($\Phi_{21} = M_{12} I_1$), transferring energy across space without wire contact.

Because $M$ couples two distinct loops rather than one, its sign is not constrained to be positive. What geometric choice determines whether $M_{12}$ is positive or negative?

### Turn 2 — 2026-09-18 (learner)

> I will tell you my reasoning steps because you said that its sign is not constrained to be positive and look at the equation. the current should be always positive, so the flux of the magnetic field could be negative.
> Based on the definition of the flux of the magnetic field, it equals the area integral over B times ds.
> The value of B is positive as well. So the only thing could be negative is the product of the B and ds.
> If the plane is over 90 degrees, the value will be negative.

### Tutor

You pinpointed the exact mathematical origin: the sign of $\Phi_{21}$ (and thus $M_{12}$) comes directly from the dot product inside the flux integral:
$$\mathbf{B}_1 \cdot \mathrm{d}\mathbf{a}_2 = |\mathbf{B}_1| |\mathrm{d}\mathbf{a}_2| \cos\theta$$
When the angle $\theta$ between the field $\mathbf{B}_1$ and the surface normal vector $\mathrm{d}\mathbf{a}_2$ exceeds $90^\circ$, $\cos\theta < 0$, making $\Phi_{21} < 0$ and $M_{12} < 0$. (Notice the geometric precision: $\theta$ is between $\mathbf{B}_1$ and the **surface normal vector** $\mathrm{d}\mathbf{a}_2$, not the loop plane itself—just like our dipole angle rule!)

The direction of $\mathrm{d}\mathbf{a}_2$ is fixed by the **Right-Hand Rule applied to the chosen reference direction of positive current in loop 2**.

Now contrast this with self-inductance: if you reverse your chosen reference direction for current in a single isolated loop, why does its self-inductance $L$ stay strictly positive ($L > 0$), whereas for two loops, reversing loop 2's reference direction flips the sign of $M_{12}$?

### Turn 3 — 2026-09-18 (learner)

> because in the case of self-inductance there is no second loop as a reference. Whichever the direction is, the flux of the magnetic field is always positive. However, in the case of mutual inductance,
> the relative direction could be negative to my understanding.

### Tutor

Spot on. In self-inductance, the Right-Hand Rule locks $\mathbf{B}$ and $\mathrm{d}\mathbf{a}$ to the **exact same current**: flipping the current's direction flips both $\mathbf{B}$ and $\mathrm{d}\mathbf{a}$ simultaneously, so $\mathbf{B} \cdot \mathrm{d}\mathbf{a}$ stays strictly positive ($L > 0$). In mutual inductance, the two loops have **independent reference directions**, so their relative orientation freely allows $\mathbf{B}_1 \cdot \mathrm{d}\mathbf{a}_2 < 0$, meaning $M_{12}$ can be positive or negative depending on convention.

Now consider a classic Physics GRE problem: a tiny circular loop of radius $r$ sits at the center of a large circular loop of radius $R$ ($r \ll R$), both in the same plane.

To find their mutual inductance $M$, which way is vastly easier to calculate: putting current $I$ through the **tiny loop** and finding the flux through the big loop, or putting current $I$ through the **big loop** and finding the flux through the tiny loop?

### Turn 4 — 2026-09-18 (learner)

> To be honest, I don't know the difference because it is mutual inductance. To my understanding, mutual is something that you can flip over and symmetric.

### Tutor

Your physical intuition is 100% correct: **the final result is strictly symmetric** ($M_{12} = M_{21}$, known as Neumann's reciprocity). The physical coupling does not care which loop carries the current.

The difference is purely **computational**:
- If you drive current $I$ through the **tiny loop**, it acts like a magnetic dipole whose non-uniform field falls off as $1/r^3$. Calculating the flux $\int \mathbf{B} \cdot \mathrm{d}\mathbf{a}$ over the entire giant disk of radius $R$ is a tough integration.
- But if you drive current $I$ through the **big loop**, what does its field look like near its center? Because the second loop is tiny ($r \ll R$), the magnetic field across it is practically **uniform** and equal to the field at the center: $B \approx \frac{\mu_0 I}{2R}$.

Using this uniform field, what is the magnetic flux $\Phi_{\text{tiny}}$ through the tiny loop of radius $r$, and what does that give for $M$?

### Turn 5 — 2026-09-18 (learner)

> Before I answer this question, I am confused that the form of the uniform magnetic field is strange. I remember there is a coefficient pi in the denominator. 
> the magnetic flux of the tiny loop equals uniform b times pi r squared. Because r is relatively far less than R, so the fraction is near zero. What that gives for m is zero.

### Tutor

Two great observations to untangle:

1. **Where did $\pi$ go?** You're remembering an infinite straight wire: $B_{\text{wire}} = \frac{\mu_0 I}{2\pi d}$. For a circular ring, Biot–Savart has $4\pi$ in the denominator, but integrating around the circle multiplies by its circumference $2\pi R$:
$$B = \frac{\mu_0 I}{4\pi R^2} \oint \mathrm{d}\ell = \frac{\mu_0 I (2\pi R)}{4\pi R^2} = \frac{\mu_0 I}{2R}$$
The $\pi$ cancels out for the center of a circular ring!

2. **Why $M \neq 0$:** The condition $r \ll R$ is what justifies treating $\mathbf{B}$ as **uniform** across the tiny loop ($B \approx B(0)$). But we want the **leading non-zero coupling** between the loops—if we set the ratio to zero, we would predict that no signal or emf could ever transfer between them!
Using your correct formula $\Phi_{\text{tiny}} = B (\pi r^2) = \left(\frac{\mu_0 I}{2R}\right)(\pi r^2)$, the leading-order mutual inductance is:
$$M = \frac{\Phi_{\text{tiny}}}{I} = \frac{\mu_0 \pi r^2}{2R}$$

Looking at this scaling $M \propto \frac{r^2}{R}$: if you double the radius of the tiny loop ($r \to 2r$) while keeping the big loop fixed, by what factor does their mutual inductance increase?

### Turn 6 — 2026-09-18 (learner)

> 4

### Tutor

Exactly: a factor of 4, because the linked flux scales with the **area** ($\propto r^2$) of the small loop!

Now consider the energy stored in the entire coupled system. When two circuits carry currents $I_1$ and $I_2$, the total magnetic energy is:
$$U = \frac{1}{2} L_1 I_1^2 + \frac{1}{2} L_2 I_2^2 \pm M I_1 I_2$$
where the cross-term represents the interaction energy between their magnetic fields.

Because total magnetic field energy $U = \int \frac{B^2}{2\mu_0}\,\mathrm{d}^3 r \ge 0$ must be non-negative for *any* values of $I_1$ and $I_2$, treating $U \ge 0$ as a quadratic in $I_1$ forces its discriminant to satisfy $\Delta \le 0$. What upper bound does this place on $M$ in terms of $L_1$ and $L_2$?

### Turn 7 — 2026-09-18 (learner)

> Why the sign for m could be positive or negative? The value of m could be both positive and negative. Is it insufficient to reflect the sign of the cross-term? 
> To calculate the upper bound of the m, we can handle with the... We can consider the situation of the negative sign of the m and u equals 0.
>  We move the terms and divide both sides by i1 and i2.

### Tutor

You are completely right on the notation: writing $+ M I_1 I_2$ is mathematically complete whenever $M$ carries its own sign. Authors write $\pm$ only when they choose to define $M \equiv |M| > 0$ as a strictly positive magnitude, explicitly writing $+$ when the fields aid each other and $-$ when they oppose.

Your algebraic move is elegant. Setting the opposing case to stay non-negative ($U \ge 0$) and dividing by $I_1 I_2$ yields:
$$M \le \frac{1}{2} L_1 \left(\frac{I_1}{I_2}\right) + \frac{1}{2} L_2 \left(\frac{I_2}{I_1}\right)$$
Notice that the two terms are reciprocals of the current ratio $x \equiv I_1 / I_2$. By the AM–GM inequality (or minimizing over $x$), what is the minimum value of $\frac{1}{2}\left(L_1 x + \frac{L_2}{x}\right)$, which sets the absolute upper bound on $M$?

### Turn 8 — 2026-09-18 (learner)

> I forget this mathematical trick.

### Tutor

Here is the foothold: for any two positive quantities $a$ and $b$, the arithmetic mean is always at least the geometric mean (AM–GM):
$$\frac{a + b}{2} \ge \sqrt{a \cdot b}$$

Let $a = L_1 x$ and $b = \frac{L_2}{x}$. When you multiply them, the current ratio $x$ cancels out completely:
$$a \cdot b = (L_1 x) \left(\frac{L_2}{x}\right) = L_1 L_2$$

Substitute this product into $\sqrt{a \cdot b}$: what does that give for the minimum value of $\frac{a+b}{2}$, and thus the maximum upper bound on $M$?

### Turn 9 — 2026-09-18 (learner)

> Okay, the minimum value now is the square root of L1 times L2 and thus the maximum upper bound on M equals a half square root of L1 times L2.

### Tutor

Watch out for the double-counted $\frac{1}{2}$!
Look at the expression:
$$\frac{a + b}{2} \ge \sqrt{a \cdot b}$$
Your expression from earlier already was:
$$M \le \frac{1}{2}\left(L_1 x + \frac{L_2}{x}\right) = \frac{a + b}{2}$$
Because the $\frac{1}{2}$ is **already inside $\frac{a+b}{2}$**, its minimum value is simply $\sqrt{a \cdot b} = \sqrt{L_1 L_2}$. Thus:
$$M \le \sqrt{L_1 L_2}$$

This bound defines the dimensionless **coupling coefficient** $k \equiv \frac{M}{\sqrt{L_1 L_2}} \le 1$.
Physically, when could two coils ever achieve the theoretical maximum $k = 1$ ($M = \sqrt{L_1 L_2}$)—what would have to happen to every single magnetic field line produced by coil 1?

### Turn 10 — 2026-09-18 (learner)

> Based on the mathematical characteristic of a + b over 2 equation, it is when a = b that the equation can
> reach the equal notion. It is when l1x = l2 over x. which is l1 over l2 equals i2 square over i1 square. and I can't derive what would have to happen.

### Tutor

Look at what your condition $\frac{L_1}{L_2} = \left(\frac{I_2}{I_1}\right)^2$ means when $M = \sqrt{L_1 L_2}$: the total stored magnetic energy is exactly zero:
$$U = \int \frac{\mathbf{B}_{\text{total}}^2}{2\mu_0}\,\mathrm{d}^3 r = 0$$
Because the integrand $\mathbf{B}_{\text{total}}^2 \ge 0$ everywhere in space, the integral can only equal zero if the two magnetic fields cancel each other out completely: $\mathbf{B}_1 + \mathbf{B}_2 = \mathbf{0}$ at every point in space.

For two coils to cancel everywhere, their field shapes must match identically throughout space: **every single magnetic field line created by coil 1 must link coil 2** (100% flux linkage, zero leakage flux). This is the definition of an **ideal transformer** ($k = 1$).

Now let's apply this to a standard GRE synthesis problem:
A short inner solenoid of radius $r$, length $l$, and $N_1$ turns sits entirely inside a long outer solenoid of radius $R$ ($r < R$), length $l$, and $N_2$ turns.
Using the **reciprocity shortcut** ($M_{12} = M_{21}$), which solenoid should you drive current $I$ through to compute $M$ in one line, and what is the resulting formula for $M$?

### Turn 11 — 2026-09-18 (learner)

> I should drive current i through to compute m by using the outer solenoid and the resulting formula for m is magnetic flux over i

### Tutor

Exactly right: driving current $I$ through the **outer solenoid** gives a uniform interior magnetic field:
$$B_2 = \mu_0 \left(\frac{N_2}{l}\right) I$$

Each single turn of the inner solenoid encloses area $\pi r^2$, so one turn links flux $\Phi_1 = B_2 (\pi r^2)$.

Remembering our inductor invariant on series turns: the inner solenoid has $N_1$ turns in series. What is the **total linked flux** $\Phi_{\text{total}}$, and what does that give for the final formula for $M = \Phi_{\text{total}} / I$ in terms of $\mu_0, N_1, N_2, r, l$?

### Turn 12 — 2026-09-18 (learner)

> *(Handwritten derivation attached)*
> $$\Phi_1 = B_2 \pi r^2 = \frac{\mu_0 N_2 I}{l} \pi r^2$$
> $$\Phi_{\text{total}} = N_1 \Phi_1 = \frac{\mu_0 N_1 N_2 I}{l} \pi r^2$$
> $$M = \frac{\Phi_{\text{total}}}{I} = \frac{\mu_0 N_1 N_2}{l} \pi r^2$$

### Tutor

Flawless derivation. You have locked the full set of invariants for mutual inductance:

1. **Reciprocity shortcut ($M_{12} = M_{21}$):** Driving current in the outer solenoid provides a uniform interior field $B_2 = \mu_0 \left(\frac{N_2}{l}\right) I$, bypassing a difficult non-uniform field integration.
2. **Series flux linkage:** Each of the $N_1$ turns encloses area $\pi r^2$, giving:
$$M = \frac{\mu_0 N_1 N_2 \pi r^2}{l}$$
Notice that if $N_1 = N_2 = N$ and $r = R$, this smoothly reduces to the single solenoid self-inductance $L = \frac{\mu_0 N^2 A}{l}$.

**Summary of locked invariants:**
- **Definition & Sign Freedom:** $\Phi_{21} = M_{12} I_1$; $M \lessgtr 0$ due to independent reference orientations, unlike $L > 0$.
- **Neumann Reciprocity:** $M_{12} = M_{21}$; always compute $M$ by driving the loop that produces the simpler, more uniform field.
- **Concentric Loops Scaling:** $M \approx \frac{\mu_0 \pi r^2}{2R} \propto \frac{r^2}{R}$ ($r \ll R$).
- **Coupled Energy & Bound:** $U = \frac{1}{2}L_1 I_1^2 + \frac{1}{2}L_2 I_2^2 \pm M I_1 I_2 \ge 0 \implies M \le \sqrt{L_1 L_2}$ (coupling coefficient $k \equiv \frac{M}{\sqrt{L_1 L_2}} \le 1$, with $k=1$ representing zero leakage flux / ideal transformer).
- **Coaxial Solenoids:** $M = \frac{\mu_0 N_1 N_2 \pi r^2}{l}$.
