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

### Turn 3 — 2026-09-27 (learner)

> Activate learn skill and continue to learn the first item and continue from that original thread in our repo

### Tutor

Picking up where Turn 2 left off. You already own $T = \frac{7}{10}mv^2$ for a solid sphere rolling without slipping; the open step is feeding a fixed energy input $E$ into that and reading off $v$.

One thing is missing from this note: the original pinball problem's givens (spring constant and compression, or ramp height). They were never recorded, so I will not guess them — paste the problem text when you get to the numbers. The prediction does not need them. Put the same $E$ into two objects: a frictionless sliding block, where all of $E$ is $\frac{1}{2}mv^2$, and your rolling sphere, where all of $E$ is $\frac{7}{10}mv^2$. Both equations have $E$ on one side and $mv^2$ on the other.

Which one leaves the launcher faster, and what is $v_{\text{roll}}^2 / v_{\text{slide}}^2$ as a pure number?

### Turn 4 — 2026-09-27 (learner)

> The problem says that there is no sliding.  It is a ramp with height h, and lease the ball from the top. The potential energy is entirely converted into kinematics energy, which comprises E rotation and E transition. that those are from my understanding. You could challenge it. Also, I have a question about why we need to divide the total kinematic energy into two parts when the pinball starts rotating. Why there are two parts. This part I just remember without fully understanding

### Tutor

Problem givens, now recorded: solid ball released from rest at the top of a ramp of height $h$, rolls without slipping. Your setup is right: $mgh = E_{\text{trans}} + E_{\text{rot}}$. I will challenge one word in it later: "entirely." Friction acts on the ball the whole way down; it is what makes the ball spin. Yet no energy is lost to it. We come back to why after the two-parts question, because that question comes first.

On the two parts: there is really only one kinetic energy. It is the sum over every small piece of the ball, $\sum_i \frac{1}{2}m_i v_i^2$. The trouble is that the pieces of a rolling ball do not share one speed. At any instant, the point touching the ramp is at rest, the center moves at $v$, and the top point moves at $2v$. So $\frac{1}{2}mv^2$, which gives every piece the center's speed, cannot be the whole story. The split into "translation + rotation" is bookkeeping. It sorts each piece's motion into "moving with the center" plus "circling around the center," and it turns out the sum separates cleanly into those two terms.

Here is a case that pulls the two terms apart. A ball spins in place on a fixed axle through its center. The center does not move, so $\frac{1}{2}mv_{\text{cm}}^2 = 0$. Does this ball have kinetic energy? If yes, which pieces are carrying it?

### Turn 5 — 2026-09-27 (learner)

> I think it does have kinetic energy. The pieces are all the rotating ones.

### Tutor

Yes. One refinement shows where the formula comes from. The pieces do not all move equally. A piece on the axle does not move at all. A piece at distance $r_i$ from the axle moves at $v_i = \omega r_i$, so the outer pieces carry most of the energy. Add them up:

$$\sum_i \tfrac{1}{2} m_i (\omega r_i)^2 = \tfrac{1}{2}\Big(\sum_i m_i r_i^2\Big)\omega^2 = \tfrac{1}{2} I \omega^2 .$$

So $\frac{1}{2}I\omega^2$ is not a separate kind of energy. It is the ordinary $\frac{1}{2}mv^2$ summed over pieces moving in a circle. The moment of inertia $I = \sum m_i r_i^2$ is simply what that sum is called.

Now rebuild the rolling ball from two motions. First, carry the whole ball forward at $v$, so every piece gets $+v$. Then spin it about its center at $\omega = v/R$. At the **top** point, the spin velocity also points forward with magnitude $\omega R = v$, so the total is $v + v = 2v$. Do the same for the **bottom** point, the one touching the ramp: which way does the spin velocity point there, how large is it, and what total velocity do you get?

### Turn 6 — 2026-09-27 (learner)

> Oh I see. It is more like parallel-axis theorem, which break down the object into two parts. One is the center of the mass, and another one is the relationship between remnant and CM.
> The way the spin velocity point is backward, which is ωR = v, and total velocity I get is zero.

### Tutor

Both are right. The bottom point gets $+v$ from the carry and $-v$ from the spin, so it is momentarily at rest. That is exactly what "rolling without slipping" means.

The parallel-axis link is more than an analogy. It is the same theorem. Both split every position into "where the CM is" plus "where the piece sits relative to the CM." Both drop the cross term for the same reason: measured from the CM, $\sum_i m_i \vec r_i' = 0$. Here is one check that ties the two together. Because the contact point is at rest, the ball is instantaneously rotating about that point. Its moment of inertia there is $I_P = \frac{2}{5}mR^2 + mR^2 = \frac{7}{5}mR^2$, and $\frac{1}{2}I_P\omega^2 = \frac{7}{10}mv^2$. That is your coefficient again, with no split needed.

Now the challenge to "entirely." Static friction acts on the ball at the contact point the whole way down. The work a force does is force times the displacement of the point where it acts. Given what you just found about that point, how much work does friction do? What does that mean for your equation $mgh = E_{\text{trans}} + E_{\text{rot}}$?

### Turn 7 — 2026-09-27 (learner)

> Since the displacement equals 0, the work the friction does equals 0 too. That means "entirely". It is a process without heat dissipated.

### Tutor

Correct. "Entirely" holds, and your reason is the right one. Friction is not idle, though. Its torque about the center is what spins the ball up, and it also slows the center's forward motion. It takes energy out of translation and puts exactly the same amount into rotation, so the net work is zero. It reroutes energy without draining any. Compare a ball that *slips*: then the contact point slides across the ramp, kinetic friction does real work on a moving point, and some energy leaves as heat. So "no slipping" is the condition that makes your energy equation exact.

The last step closes the problem and Turn 2's prediction together. Solve $mgh = \frac{7}{10}mv^2$ for $v$. Then compare it with a frictionless sliding block from the same height, where $mgh = \frac{1}{2}mv^2$. What is $v_{\text{roll}}^2 / v_{\text{slide}}^2$?

### Turn 8 — 2026-09-27 (learner)

> square root of 5/7

### Tutor

Right number, one layer off. $\sqrt{5/7}$ is the ratio of the **speeds**, $v_{\text{roll}}/v_{\text{slide}}$. The question asked for the ratio of the **squares**, which is $5/7$. GRE answer choices often list both, so check which quantity the stem asks for before you circle. Your result also gives the launch speed: $v_{\text{roll}} = \sqrt{5/7}\cdot\sqrt{2gh} = \sqrt{\frac{10}{7}gh}$. The rolling ball is slower because $\frac{2}{7}$ of $mgh$ goes into spin.

One transfer check to close the thread. A hollow spherical shell ($I = \frac{2}{3}mR^2$) and your solid ball are released together from the top of the same ramp, and both roll without slipping. Which one reaches the bottom first, and what is the shell's $v^2$ in terms of $gh$?

### Turn 9 — 2026-09-27 (learner)

> *(handwritten image, transcribed verbatim)*
> $E_h = \frac{1}{2}mv_h^2 + \frac{1}{2}I_h\omega_h^2$
> $= \frac{1}{2}mv_h^2 + \frac{1}{2}\cdot\frac{2}{3}mv_h^2$
> $= \frac{5}{6}mv_h^2$
> whereas $E_{\text{solid}} = \frac{7}{10}mv_s^2$
> $\frac{5}{6} - \frac{7}{10} = \frac{50-42}{60} = \frac{8}{60} > 0$
> $\to \frac{5}{6} > \frac{7}{10} \to v_h^2 < v_s^2$
> $\to$ Solid reaches first. $v_h = \sqrt{\frac{6}{5}gh}$
> because there are less energy being splitted into rotation

### Tutor

All correct. The shell's coefficient is $\frac{1}{2}+\frac{1}{3} = \frac{5}{6}$, so $v_h^2 = \frac{6}{5}gh$, which is less than the solid's $v_s^2 = \frac{10}{7}gh$. Your reason is the physical one: the shell keeps its mass at the rim, so a larger share of $mgh$ is spent on spin. One small tightening. A higher speed *at the bottom* does not by itself prove an earlier arrival. Here it does, because the same energy equation holds at every height with $h$ replaced by the drop so far. The solid is ahead at every point on the ramp, not just at the end. For GRE races, use the rule: smaller $I/(mR^2)$ wins. Mass and radius do not matter.

That closes the thread. What you can now do without the formula sheet:
- Explain the two-part KE: carry + spin about the CM, with $\frac{1}{2}I\omega^2 = \sum \frac{1}{2}m_i\omega^2 r_i^2$. Check it through the contact point at rest ($v_{\text{bottom}} = 0$, $v_{\text{top}} = 2v$) or through the parallel axis, $I_P = I_{\text{cm}} + mR^2$.
- Explain why static friction does no work in rolling without slipping, and why $mgh$ converts entirely.
- Get $v = \sqrt{\frac{2gh}{1 + I/(mR^2)}}$ for any rolling shape: solid $\sqrt{10gh/7}$, shell $\sqrt{6gh/5}$. Remember the speed-versus-speed² ratio check from Turn 8.

Next, when you want it: [[GRE_Physics_Prep]] has the bead-on-rotating-hoop re-derivation queued, and that item uses rotational KE again.
