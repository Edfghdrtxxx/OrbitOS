---
type: learning-session
topic: CM — rolling without slipping / moment of inertia
project: "[[GRE_Physics_Prep]]"
created: 2026-09-22
---
# Rolling sphere launch energy (pinball ramp)

## Context
- Daily-note item (`10_Daily/2026-09-21.md`, a1): `/learn pinball launch ramp rolling sphere speed` — rolling sphere $T = \frac{7}{10}mv^2$ & launch speed via energy conservation.
- Prior: physical-pendulum $I_{\text{pivot}}$ scaling solid ([[2026-09-19-1609 Pendulum angular vs linear displacement]]); no prior rolling-without-slipping thread.

### Turn 1 — 2026-09-22 (learner)

> The pinball's moment of inertia in daily note.

### Tutor

The moment of inertia piece is a lookup, so take it directly: a **solid** uniform sphere about its center has $I = \frac{2}{5}mR^2$ (a hollow shell would be $\frac{2}{3}mR^2$ — a pinball is solid). The physics worth building is how $I$ enters the energy: a rolling sphere carries *two* kinetic energies, translational $\frac{1}{2}mv^2$ plus rotational $\frac{1}{2}I\omega^2$, and rolling without slipping ties them together through $v = \omega R$.

Before we assemble the launch-speed answer: write the total kinetic energy $T$ in terms of $v$ alone (substitute $I$ and $\omega$), and tell me what coefficient of $mv^2$ you get — and where the $\frac{7}{10}$ in your daily-note line would come from.

### Turn 2 — 2026-09-22 (learner)

> T= 1/2 mv^2 + 1/2 Iω^2 = 1/2 mv^2 + 1/2 * 2/5 mv^2 = 7/10 mv^2

### Tutor

Correct — and worth seeing the mechanism inside your middle step: $\omega = v/R$ turns $\frac{1}{2}I\omega^2$ into $\frac{1}{2}\cdot\frac{2}{5}mR^2\cdot\frac{v^2}{R^2} = \frac{1}{5}mv^2$. The $R$ cancels completely, which is why the $\frac{7}{10}$ coefficient is universal for a solid sphere — no mass, no radius survives. Rotation is a fixed tax: $\frac{2}{7}$ of the total kinetic energy sits in spin no matter what.

Now the launch. Whatever feeds the sphere — a spring's $\frac{1}{2}kx^2$ or a height drop $mgh$ — goes into $\frac{7}{10}mv^2$ instead of the usual $\frac{1}{2}mv^2$. Set up the conservation equation for your problem and solve for $v$ — and before you compute, predict: same energy input, does the rolling sphere come out faster or slower than a frictionless sliding block, and by what factor on $v^2$?
