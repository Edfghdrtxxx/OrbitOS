---
type: learning-progress
topic: "Volume integral of ρ from ∇·E"
area: Electrodynamics
status: complete
created: 2026-09-21
tags:
  - physics
  - electrodynamics
  - gauss-law
  - spherical-coordinates
  - volume-integral
  - gre-physics
  - electrostatics
---
# Volume integral of $\rho$ from $\nabla\cdot\mathbf{E}$ over a sphere

**Why this note exists:** Electrostatics solution (Maxwell I $\to$ $\rho$, then $Q=\int\rho\,\mathrm{d}^3 r$ over a sphere) used as the GRE-prep object for volume integrals. Daily child: `/learn volume integral of ρ from ∇·E over a sphere in [[GRE_Physics_Prep]]`.

**Target:** Be able to evaluate $Q=\int\rho\,\mathrm{d}^3 r$ on this electrostatics solution, from the floor the learner is actually on — not from a 5-point outline.

**Closed 2026-09-21.** Upper-hemisphere transfer: $Q$ does not vanish. GRE takeaway locked.

**Reopened 2026-10-04 (Turn 17).** Prep Studio retake: picked $0$ as a guess; handwritten cylindrical attempt gave $2\pi\epsilon_0E_0R^4$. **Closed 2026-10-04 (Turn 23):** $Q=\frac45\pi\epsilon_0E_0R^5$ for $\mathbf{E}=E_0z^3\hat{\mathbf{z}}$, evaluated by hand.

### Prior context
- **Already computable:** Gauss's law in integral form $\oint\mathbf{E}\cdot\mathrm{d}\mathbf{A}=Q_{\mathrm{enc}}/\epsilon_0$; spherical Gaussian *surface* $4\pi r^2$ ([[2026-09-15-0916 Boundary condition on normal E]], [[2026-09-20-1803 Electric displacement D and linear dielectrics]]). Learner stated: origin-to-point = spherical $r$, $z$-axis-to-point = cylindrical $s$; $(r,\theta,\phi)$ not $(x,y,\theta)$; $\theta$ landmarks; $z=r\cos\theta$; spherical edges $\mathrm{d}r$, $r\mathrm{d}\theta$, $r\sin\theta\,\mathrm{d}\phi$.
- **What broke:** Mixing leftover Cartesian $(x,y)$ with spherical $\theta$ (reworked Turn 7). Mixing finite coordinates with differentials in the volume edges (reworked Turn 12: $\mathrm{d}r$, $r\mathrm{d}\theta$, $r\sin\theta\,\mathrm{d}\phi$).
- **New object had to:**

---

## Context (solution transcribed)

To find the total charge enclosed, use Maxwell I for the charge density, then integrate over the sphere.

From $\nabla\cdot\mathbf{E}$: $\rho=\epsilon_0\nabla\cdot\mathbf{E}=\epsilon_0\partial/\partial z(E_0 z^2)=2\epsilon_0 E_0 z$.

Total enclosed charge ($z=r\cos\theta$ in spherical coordinates):

$$Q=\int\rho(\mathbf{r})\,\mathrm{d}^3 r=2\epsilon_0 E_0\int_0^R\int_0^\pi\int_0^{2\pi}(r\cos\theta)\,r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi=0.$$

Hindsight: $\mathbf{E}$ points the same way throughout the sphere, so no net charge for field lines to start or end on. Equivalently $\rho=2\epsilon_0 E_0 z$ is odd in $z$: positive for $z>0$, negative for $z<0$, equal magnitude across $z=0$.

### Image — handwritten $\mathrm{d}^3 r$ (Turn 13)

**Transcript:**

$$\mathrm{d}^3 r=\mathrm{d}r\cdot(r\mathrm{d}\theta)\cdot(r\sin\theta\cdot\mathrm{d}\phi)=r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$

**Visual / marks:** Two-line pencil derivation. First line writes the three-edge product; second line collects $r\cdot r=r^2$. Small scribble near the last $\mathrm{d}\phi$; formula otherwise clean.

### Image — handwritten triple integral (Turn 14)

**Transcript:**

$$\int r\cos\theta\cdot r^2\sin^2\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi=\int r^3\sin^2\theta\cos\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$

$$=\int_{r=0}^{R}\int_{\theta=0}^{\pi}\int_{\phi=0}^{2\pi} r^3\sin^2\theta\cos\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$

where $\int_{\phi=0}^{2\pi}\mathrm{d}\phi=2\pi$,

$$\int_{\theta=0}^{\pi}\sin^2\theta\cos\theta\,\mathrm{d}\theta=\int_{\theta=0}^{\pi}\frac{\sin\theta}{2}\sin^2\theta\,\mathrm{d}\theta.$$

**Visual / marks:** Six-line pencil. First line already has $\sin^2\theta$ (extra $\sin\theta$ vs $\mathrm{d}^3 r=r^2\sin\theta$). Last line is a broken identity. Limits $r:0\to R$, $\theta:0\to\pi$, $\phi:0\to 2\pi$ written on the integral signs.

### Image — handwritten cylindrical attempt (Turn 17, 2026-10-04)

**Transcript:**

$R$, $\mathbf{E}=E_0z^2\hat{\mathbf{z}}$

$$Q=\int\rho(r)\,\mathrm{d}^3r$$

$$\rho=(\nabla\cdot\mathbf{E})\cdot\epsilon_0=\epsilon_0\frac{\partial}{\partial z}(E_0z^2)=2\epsilon_0zE_0$$

$$\int\epsilon_0E_0z\,\mathrm{d}^3r=2\int\epsilon_0E_0z\,r\,\mathrm{d}r\,\mathrm{d}\phi\,\mathrm{d}z$$

$$=2\epsilon_0E_0\int_0^R r\,\mathrm{d}r\int_{-R}^{R}z\,\mathrm{d}z\int_0^{2\pi}\mathrm{d}\phi$$

$$=2\epsilon_0E_0\cdot\frac12\cdot R^2\cdot R^2\cdot2\pi$$

$$=2\pi\epsilon_0E_0R^4$$

**Visual / marks:** Pen on paper, cylindrical coordinates with the axis distance written as $r$. An upward arrow and a curved downward arrow sit to the right of the limits line. Bottom-left fragments ("$E$", a fraction $d/\sqrt{d^2+r^2}$) belong to a different problem.

### Image — Prep Studio screenshot (Turn 17, 2026-10-04)

**Transcript:**

Question 15 of 16 · Electromagnetism · Back to plan · 185 s

The electric field inside a sphere of radius $R$ is given by $\mathbf{E}=E_0z^2\,\hat{\mathbf{z}}$. What is the total charge of the sphere?

- A: $\frac{\pi}{2}\epsilon_0E_0R^4$
- B: $\pi\epsilon_0E_0R^3$
- C: $2\pi\epsilon_0E_0R^4$
- D: $4\pi\epsilon_0E_0R^3$
- E: $0$ — YOUR PICK · CORRECT

Correct — next review in 1 d · +10 XP

186 s — over pace (target 103 s)

How did it go? — filed as a lucky guess in your mistake book · flagged keep failing in your mistake book. Checked: Guessed, Too slow, Forgot something, Keep failing. Unchecked: Knew it.

SOLUTION: To find the total charge enclosed, we can use the first of Maxwell's equations to find the charge density and then integrate it over the sphere. From the first Maxwell equation, we have $\rho=\epsilon_0\nabla\cdot\mathbf{E}=\epsilon_0\frac{\partial}{\partial z}(E_0z^2)=2\epsilon_0E_0z$. The total enclosed charge is therefore (recalling $z=r\cos\theta$ in spherical coordinates) $Q=\int\rho(r)\,\mathrm{d}^3\mathbf{r}=2\epsilon_0E_0\int_0^R\int_0^\pi\int_0^{2\pi}(r\cos\theta)\,r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi=0.$

**Visual / marks:** Option E is highlighted green. The handwritten result $2\pi\epsilon_0E_0R^4$ equals option C, not the picked option E.

### Image — Prep Studio "Session complete" screenshot (Turn 19, 2026-10-04)

**Transcript:**

Session complete · 9 / 16 · 56%

Rough set — the reworking is where the learning happens. You earned 144 XP this session. Set 08 marked done in your plan.

HOW THIS SET WENT: tiles 1–16. Missed (red): 1, 4, 5, 7, 9, 13, 16. Correct (green): 2, 3, 6, 8, 10, 11, 12, 14, 15. Legend: Correct · Missed · Not answered.

Review your misses (first four visible):

- Two point charges with the same charge $+Q$ are fixed along the $x$-axis and are a distance $2R$ apart as shown. A small particle with mass $m$ and charge $-q$ is placed at the midpoint between them. What is the angular frequency $\omega$ of small oscillations of this particle along the $y$-direction?
- A point charge $q$ is brought to a distance $d$ from a grounded conducting plane. What is the magnitude of the force on the plane from the point charge?
- Two pith balls of equal mass $M$ and equal charge $q$ are suspended from the same point on long massless threads of length $L$ as shown in the figure above. If $k$ is the Coulomb's law constant, then for small values of $\theta$, the distance $d$ between the charged pith balls at equilibrium is
- The exponent in Coulomb's inverse square law has been found to differ from two by less than one part in a billion by measuring which of the following?

**Visual / marks:** In the first and third miss rows, each inline-math symbol and each text run between symbols is laid out as its own narrow column, so the sentence reads as a row of short stacked fragments. The second and fourth rows (little or no inline math) render as normal sentences. Picked options, times, and self-tags are not visible.

### Image — handwritten $Q$ for $\mathbf{E}=E_0z^3\hat{\mathbf{z}}$ (Turn 20, 2026-10-04)

**Transcript:**

$$\vec{E}=E_0z^3\hat{z}$$

$$\rho=\epsilon_0\nabla\cdot\vec{E}=\epsilon_0\frac{\partial}{\partial z}E_z=3E_0z^2\cdot\epsilon_0$$

$$Q=\int\rho\,\mathrm{d}^3r$$

$$=\int_{r=0}^{r=R}\int_{\theta=0}^{\theta=\frac{\pi}{2}}\int_{\phi=0}^{\phi=2\pi}3\epsilon_0E_0z\ ?$$

"it seems that Spherical coordinate cannot complet the calculus?"

"wait $z=r\cos\theta$"

$$\to\ Q=\int_{r=0}^{R}\int_{\theta=0}^{\frac{\pi}{2}}\int_{\phi=0}^{2\pi}3\epsilon_0E_0(r\cos\theta)\,r^2\sin^2\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$

**Visual / marks:** Pencil on a tan notepad, laptop keyboard above. Two struck-out starts before the integral signs on the $Q$ lines; one struck-out word before "calculus". The first limits line has no $\mathrm{d}^3r$ and ends in a question mark. The last line is not evaluated.

---

## Turns

### Turn 1 — 2026-09-21 (learner)

> /learn volume integral
>
> Captain asked to learn volume integrals from this electrostatics solution (screenshot transcribed below). Teach it in OrbitOS against GRE Physics Prep. Capture notes there. Do not wait on firstmate.
>
> The solution:
>
> To find the total charge enclosed, use Maxwell I for the charge density, then integrate over the sphere.
>
> From ∇·E: ρ = ε0 ∇·E = ε0 ∂/∂z (E0 z²) = 2 ε0 E0 z.
>
> Total enclosed charge (z = r cosθ in spherical coordinates):
>
> Q = ∫ ρ(r) d³r = 2 ε0 E0 ∫_0^R ∫_0^π ∫_0^{2π} (r cosθ) r² sinθ dr dθ dφ = 0.
>
> Hindsight: E points the same way throughout the sphere, so no net charge for field lines to start or end on. Equivalently ρ = 2 ε0 E0 z is odd in z: positive for z>0, negative for z<0, equal magnitude across z=0.
>
> Today's daily note already has an open a1 child for this /learn item. Use it; do not make the captain edit the daily note by hand.

### Tutor

Recast: the solution above is the object of study, not work you already finished, and the 5-point outline is dropped. You are not assumed to be able to do this volume integral yet.

The move in the solution is Maxwell I $\to$ $\rho$, then $Q=\int\rho\,\mathrm{d}^3 r$ over the sphere, and they claim that integral is $0$.

Is it the setup (what is being integrated, and why) or the mechanics (how that triple integral is written and evaluated) that's throwing you?

### Turn 2 — 2026-09-21 (learner)

> I know what is being integrated and the reason. However, I am not familiar with the cylindrical coordinates and spherical coordinates. They constantly make me confused.

### Tutor

Setup is in place. The gap is the coordinate systems, not the electrostatics.

Park cylindrical for this turn — the region is a sphere, so the tool is spherical. The mix-up that usually hurts is two different distances sharing a letter in some books: spherical $r$ is origin-to-point; cylindrical $s$ (sometimes also written $r$) is $z$-axis-to-point. Same symbol, not the same length.

On a point at the north pole of this sphere of radius $R$, which of those two distances is $R$, and which is $0$?

### Turn 3 — 2026-09-21 (learner)

> I think it is (0,0, R)

### Tutor

That is the north pole in Cartesian: $(x,y,z)=(0,0,R)$. Right point.

The question was not the coordinates of the point. It was two *lengths* measured from that point: origin-to-point (spherical $r$) versus $z$-axis-to-point (cylindrical $s$).

From $(0,0,R)$, what is the distance to the origin, and what is the distance to the $z$-axis?

### Turn 4 — 2026-09-21 (learner)

> The distance to the origin is R, and the distance to z-axis is 0

### Tutor

Right. Origin-to-point is $R$ (spherical $r$). Axis-to-point is $0$ (cylindrical $s$). Those are different lengths; they only match on the equator of this sphere, never at the poles.

Spherical coordinates for this integral are $(r,\theta,\phi)$. You have $r$. Polar angle $\theta$ is measured *down from $+\hat{\mathbf{z}}$*: $0$ at the north pole, $\pi$ at the south pole. That is not the 2D angle in the $xy$-plane.

At this same north pole $(0,0,R)$, what is $\theta$?

### Turn 5 — 2026-09-21 (learner)

> 1. Is polar angle 2D angle in xz-plane?
> 2. At this same north pole, θ equals 0
> 3. Based on your statement, the three free degrees are x, y, θ respectively right?

### Tutor

$\theta=0$ at the north pole is right.

$(x,y,\theta)$ is not. Cartesian already uses three numbers $(x,y,z)$. Spherical is a *replacement* triple: $(r,\theta,\phi)$. You do not keep $x,y$ and add $\theta$.

$\theta$ is the angle between the position vector and $+\hat{\mathbf{z}}$. In the $xz$-plane it *looks* like the angle down from $+z$, but it only runs $0\to\pi$, not a full 2D turn around the origin.

At the south pole $(0,0,-R)$, what is $\theta$?

### Turn 6 — 2026-09-21 (learner)

> π

### Tutor

Right. South pole is $\theta=\pi$. So $\theta$ runs $0$ (north) $\to\pi$ (south). That is why it is not a 2D angle that winds all the way around in the $xz$-plane.

At the equator point $(x,y,z)=(R,0,0)$, what is $\theta$?

### Turn 7 — 2026-09-21 (learner)

> (R, π/2, 0)

### Tutor

That triple is right: $(r,\theta,\phi)=(R,\pi/2,0)$. You replaced $(x,y,z)$, not mixed. Equator is $\theta=\pi/2$; $+\hat{\mathbf{x}}$ is $\phi=0$.

The density in the solution is $\rho\propto z$. At this equator point, is $z$ positive, negative, or zero — and what is $\cos\theta$?

### Turn 8 — 2026-09-21 (learner)

> At this equator point, the z is zero. cosθ = 0

### Tutor

Right. Equator: $z=0$ and $\cos\theta=0$ together.

North pole you already have $z=R$ and $\theta=0$. What is $\cos(0)$? If you multiply $r$ by that cosine, do you get $z$?

### Turn 9 — 2026-09-21 (learner)

> cos0 = 1
> Yes, we can obtain z

### Tutor

Right. North: $\cos 0=1$, and $r\cdot 1=R=z$.

South pole you already have $\theta=\pi$ and $z=-R$. What is $\cos\pi$, and what do you get if you multiply $r$ by that cosine?

### Turn 10 — 2026-09-21 (learner)

> cospi = -1, we can get the value of z by multiplying

### Tutor

Right. South: $\cos\pi=-1$, and $r\cdot(-1)=-R=z$. All three landmarks match, so for any point:

$$z=r\cos\theta.$$

That is why the solution writes $r\cos\theta$ in the integrand: $\rho\propto z$ becomes $\rho\propto r\cos\theta$.

The other factor is the tiny-box volume $\mathrm{d}^3 r$. Cartesian: $\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z$. Spherical: two of the three edges are *arcs*, not $\mathrm{d}\theta$ and $\mathrm{d}\phi$. The radial edge is just $\mathrm{d}r$. The polar edge is an arc of radius $r$. What is that arc's length in terms of $r$ and $\mathrm{d}\theta$?

### Turn 11 — 2026-09-21 (learner)

> rdθ
> The complete correspondance is (r, rdθ, rsinθø)

### Tutor

$r\,\mathrm{d}\theta$ is the polar arc. Right.

The list $(r,\, r\mathrm{d}\theta,\, r\sin\theta\,\phi)$ mixes a finite coordinate with tiny steps. A volume element is the product of three *tiny* lengths. Polar already has a $\mathrm{d}$. Radial and azimuthal need one too.

The radial edge is a tiny step in $r$. What is that length — $r$, or $\mathrm{d}r$?

### Turn 12 — 2026-09-21 (learner)

> Let me correct it
> dr, rdtheta, rsinthetadphi

### Tutor

Right. Those three are the tiny edges: $\mathrm{d}r$, $r\,\mathrm{d}\theta$, $r\sin\theta\,\mathrm{d}\phi$. Coordinates locate the box; the $\mathrm{d}$'s are the sides.

The box volume is the product of the three lengths. Write $\mathrm{d}^3 r$.

### Turn 13 — 2026-09-21 (learner)

> [Image: handwritten $\mathrm{d}^3 r$]
>
> $$\mathrm{d}^3 r=\mathrm{d}r\cdot(r\mathrm{d}\theta)\cdot(r\sin\theta\cdot\mathrm{d}\phi)=r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$

### Tutor

Right. Product of the three tiny edges: $\mathrm{d}^3 r=r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$.

The integrand is $\rho\,\mathrm{d}^3 r$ with $\rho\propto z=r\cos\theta$. North of the equator $z>0$; south $z<0$; the sphere is the same shape on both sides. Does $\int\rho\,\mathrm{d}^3 r$ vanish, come out positive, or depend on $R$?

### Turn 14 — 2026-09-21 (learner)

> [Image: handwritten triple integral]
>
> $$\int r\cos\theta\cdot r^2\sin^2\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi=\int r^3\sin^2\theta\cos\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$
>
> $$=\int_{r=0}^{R}\int_{\theta=0}^{\pi}\int_{\phi=0}^{2\pi} r^3\sin^2\theta\cos\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$
>
> where $\int_{\phi=0}^{2\pi}\mathrm{d}\phi=2\pi$,
>
> $$\int_{\theta=0}^{\pi}\sin^2\theta\cos\theta\,\mathrm{d}\theta=\int_{\theta=0}^{\pi}\frac{\sin\theta}{2}\sin^2\theta\,\mathrm{d}\theta.$$
>
> My methodology is clearly incorrect, which is impractical in Physics GRE's time-scarce environment.

### Tutor

You named it: this slog is the wrong GRE move. One slip inside it: $\mathrm{d}^3 r$ has $\sin\theta$, not $\sin^2\theta$. The last identity is the part that actually broke. You do not need any of that on the exam.

$\rho\propto z$ is positive above the equator and negative below, equal magnitude, same volume on both sides. Does $\int\rho\,\mathrm{d}^3 r$ vanish, come out positive, or depend on $R$?

### Turn 15 — 2026-09-21 (learner)

> Vanish. I see. It uses geometrical symmetry

### Tutor

Right. Vanishes. $\rho\propto z$ is odd across $z=0$; the sphere is the same on both sides; the hemispheres cancel. That is the GRE move — not the triple slog.

If the region were only the *upper* hemisphere, would $Q$ still vanish?

### Turn 16 — 2026-09-21 (learner)

> No. There is no negative charge to cancel the upper hemisphere

### Tutor

Right. Upper hemisphere: $z>0$, so $\rho>0$, nothing below to cancel. $Q>0$. The full sphere was special because both sides were there.

You can do this now. GRE takeaway: odd density on a symmetric region is $0$ — do not grind the triple. When you do need the measure: $\mathrm{d}^3 r=r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$, with $z=r\cos\theta$. Field-line twin: $\mathbf{E}$ never flips inside the sphere, so no net charge for lines to start or end on.

Next: Set 08 Gauss/electrostatics in [[GRE_Physics_Prep]], or `/retention` on this thread.

### Turn 17 — 2026-10-04 (learner)

> /learn There is a similar session before and I still failed to solve this problem correctly.
>
> [Image: handwritten cylindrical attempt, result $2\pi\epsilon_0E_0R^4$]
>
> [Image: Prep Studio screenshot, Question 15 of 16, picked E ($0$), marked Guessed / Too slow / Forgot something / Keep failing]
>
> Is it because of the boundary mismatch?

### Tutor

Partly. The mismatch is real. Your limits $s:0\to R$, $z:-R\to R$, $\phi:0\to2\pi$ ($s$ = distance from the $z$-axis, the length you wrote as $r$) describe a cylinder of radius $R$ and height $2R$, not the sphere. The sphere's wall is $s^2+z^2=R^2$, so in cylindrical coordinates the upper $s$ limit is $\sqrt{R^2-z^2}$, which is not a number. This is the rule you stated on 2026-10-03: the boundary picks the system, and the sphere's wall is $r=R$ in spherical coordinates.

The mismatch is not what produced $2\pi\epsilon_0E_0R^4$, though. Keep your cylinder limits exactly as you wrote them and look at the middle factor alone. Write the antiderivative of $z$, evaluate it at the upper limit and at the lower limit, and subtract: what is $\int_{-R}^{R}z\,\mathrm{d}z$?

### Turn 18 — 2026-10-04 (learner)

> Ohhhhh! 0!

### Tutor

Right: $\int_{-R}^{R}z\,\mathrm{d}z=\frac12R^2-\frac12(-R)^2=0$. On your page the two limit terms were added, which gave $R^2$. So the wrong number came from that one line, not from the boundary. Your cylinder is also the same shape above and below $z=0$, so even the wrong region gives $Q=0$ here. The boundary mismatch is a real error that happened to cost nothing in this problem; it will cost something whenever the integrand does not cancel.

The check that takes five seconds on the exam: before integrating, look at whether the integrand is odd or even in a variable whose limits are symmetric ($-R\to R$). Odd means that factor is $0$ and you stop.

Same sphere, new field: $\mathbf{E}=E_0z^3\,\hat{\mathbf{z}}$. Without integrating, is $Q$ zero, positive, or negative, and which feature of $\rho$ tells you?

### Turn 19 — 2026-10-04 (learner)

> [Image: Prep Studio "Session complete", 9 / 16, 56%, misses 1, 4, 5, 7, 9, 13, 16]
>
> How to avoid failing at this some points again? Also I think you have access to the drilling result in this session through API. There are vast amounts of such small errors, leading to a wrong answer, which is quite annoying.
> The divergence is even, so Q is positive, the even feature tells me.

### Tutor

Right: $\rho=3\epsilon_0E_0z^2$ is even in $z$, so the two halves add and $Q\neq0$. One sharpening: "even" only tells you there is no cancellation. The sign comes from $\rho\ge0$ at every point (for $E_0>0$). An even density can still be negative in some places.

On the small errors. What this page shows (fact): the physics was right through $\rho=2\epsilon_0E_0z$, and the answer broke on one line of limit evaluation. Your trap log shows the same shape before: $\sin^2\theta$ for $\sin\theta$ (2026-09-21), the dropped $L_E/L_B$ (2026-09-28 and 2026-09-29), the unsquared $\Delta x$ (2026-10-01). In each case a check of about five seconds existed that would have caught it: parity here, a unit check for $\Delta x$. So "be more careful" is not the fix; careful work is slow and you are already over pace. The fix is one fixed check on the final answer before you click, chosen from three: symmetry or sign, units, or one limiting case. Today's page had a second free signal: your computed answer was option C and you clicked E. A computed answer that disagrees with your pick is a prompt to find the line that is wrong. Whether the other six misses in Set 08 are this kind of slip or missing physics, I cannot say: I could not read the Studio results (the Chrome I can reach holds an empty Studio store), and the screenshot shows only question text.

Back to $\mathbf{E}=E_0z^3\,\hat{\mathbf{z}}$ on the sphere. Now $Q\neq0$, so the region matters and cylinder limits would give a wrong number. Write $Q$ as an integral with all three limits filled in, without evaluating it.

**Branch (2026-10-04):** sanity-check practice continues in [[2026-10-04-1801 Sanity checks]]. The Turn 19 question above stays open here.

### Turn 20 — 2026-10-04 (learner)

> [Image: handwritten $Q$ for $\mathbf{E}=E_0z^3\hat{\mathbf{z}}$, ending in $Q=\int_{r=0}^{R}\int_{\theta=0}^{\pi/2}\int_{\phi=0}^{2\pi}3\epsilon_0E_0(r\cos\theta)\,r^2\sin^2\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$]

### Tutor

The choices that matter are right: spherical coordinates for a sphere, $\rho=3\epsilon_0E_0z^2$ with the $3$ brought down, $r:0\to R$, $\phi:0\to2\pi$, and you recovered $z=r\cos\theta$ on your own after the "cannot complete" moment.

The last line has three slips, and it is not evaluated yet, so nothing is lost. Each one is found by a check you already own. Do not recompute anything; compare:

- your $\theta$ limits against the landmarks (which $\theta$ is the south pole?);
- the integrand against your own line 2 for $\rho$;
- the volume element against the three edges of the spherical box, $\mathrm{d}r$, $r\,\mathrm{d}\theta$, $r\sin\theta\,\mathrm{d}\phi$.

What are the three slips?

### Turn 21 — 2026-10-04 (learner)

> 1. from 0 to pi
> 2. missed a square
> 3. no square of sin theta
>
> You see? How to solve them? I am despondent with those mistakes.

### Tutor

All three are right, and look at how you got them: one pass, no recomputing, a few seconds each. That is the fact to hold on to. These are not gaps in understanding. Every piece was correct somewhere on your page or in your memory, and it changed while being copied from one line to the next. This is hard to stop at the source, for anyone, and harder on a tired day. I will not promise that the slips stop. What can be made reliable is catching them, and you just did that three times out of three.

So the method is not "be careful everywhere". It is one fixed audit at one fixed moment: after the setup line is written and before any evaluating, compare three things against their sources.

- **Limits** against the region (landmarks: south pole is $\theta=\pi$).
- **Integrand** against the line that defined it (your line 2).
- **Measure** against the memorised element ($r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$).

Limits, integrand, measure. The setup line is the right moment because everything after it is arithmetic on whatever that line says: a slip caught there costs five seconds, and the same slip caught at the answer costs the whole problem. For problems with no integral, the same moment exists: the line where given quantities enter the formula ($r=2d$, $x=\frac d2$ from the other note).

Write the corrected line, run the three comparisons on it, then evaluate. What is $Q$?

### Turn 22 — 2026-10-04 (learner)

> [Image: handwritten continuation, same page. The earlier last line is corrected in place: the upper $\theta$ limit is struck out and overwritten, a square is added to $(r\cos\theta)$, and the exponent on $\sin\theta$ is scribbled out.]
>
> $$\to\ Q=\int_{r=0}^{R}\int_{\theta=0}^{\pi}\int_{\phi=0}^{2\pi}3\epsilon_0E_0(r\cos\theta)^2\,r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$$
>
> $$=3\epsilon_0E_0\int_0^R r^4\,\mathrm{d}r\int_{\theta=0}^{\pi}\cos^2\theta\sin\theta\,\mathrm{d}\theta\int_{\phi=0}^{2\pi}\mathrm{d}\phi$$
>
> $$=6\pi\epsilon_0E_0\cdot\frac15\cdot R^5\cdot\int_0^{\pi}\cos^2\theta\sin\theta\,\mathrm{d}\theta$$
>
> I stop here because the calculus is too complex to complete in the GRE time frame.

### Tutor

Everything on the page is correct: the corrected setup, the factoring into three one-variable integrals, $\int_0^Rr^4\,\mathrm{d}r=\frac15R^5$, and $2\pi$ from $\phi$. No slip in three lines.

The integral you stopped at is the short one, once you see one fact: the $\sin\theta$ that the volume element supplies is, up to a sign, the derivative of $\cos\theta$. Put $u=\cos\theta$, so $\mathrm{d}u=-\sin\theta\,\mathrm{d}\theta$, and the integrand $\cos^2\theta\sin\theta\,\mathrm{d}\theta$ becomes $-u^2\,\mathrm{d}u$. This is the same place the 2026-09-21 attempt broke (Turn 14), and it comes back in every spherical integral whose integrand depends on $\cos\theta$, so it is worth owning.

With $u=\cos\theta$: what do the limits $\theta=0$ and $\theta=\pi$ become, and what is the integral?

### Turn 23 — 2026-10-04 (learner)

> [Image: handwritten substitution and final answer, two columns on one page]
>
> $\cos^2\theta\sin\theta\,\mathrm{d}\theta$, when $u=\cos\theta$
>
> $$\mathrm{d}u=-\sin\theta\,\mathrm{d}\theta\ \to\ \sin\theta\,\mathrm{d}\theta=-\mathrm{d}u\ \to\ \cos^2\theta\sin\theta\,\mathrm{d}\theta=-u^2\,\mathrm{d}u$$
>
> when $\theta=0$, $\cos\theta=1$; $\theta=\pi$, $\cos\theta=-1$
>
> $$\int_{1}^{-1}(-u^2)\,\mathrm{d}u=\int_{-1}^{1}u^2\,\mathrm{d}u=\frac13 1^3+\frac13(\cdot)^3=\frac23$$
>
> (the base of the second cube is hard to read; it looks like a $3$)
>
> $$\to\ Q=\frac65\pi\epsilon_0E_0R^5\cdot\frac23=\frac45\pi\epsilon_0E_0R^5$$
>
> (the $6$ and the $3$ are cancelled by hand, with a small $2$ written above the $6$)

### Tutor

Correct, start to finish: $Q=\frac45\pi\epsilon_0E_0R^5$. The substitution, the new limits $1\to-1$, the flip of the limits that absorbs the minus sign, and the final cancellation are all right. One thing to tidy: the second term of the evaluation is $-\frac13(-1)^3=+\frac13$; on the page its base reads like a $3$. The value $\frac23$ is right either way.

Two five-second checks on the answer, both pass. Sign: you predicted $Q>0$ in Turn 19 before integrating, and it is. Units: $E_0z^3$ is a field, so $\epsilon_0E_0R^5$ is $\epsilon_0\times\text{field}\times\text{area}$, which is a charge.

You can do this now, so this thread closes here. What you did today on this problem:

- Odd integrand over symmetric limits gives $0$ ($E_0z^2$ case); even integrand does not cancel ($E_0z^3$ case).
- Sphere means spherical limits: $r:0\to R$, $\theta:0\to\pi$, $\phi:0\to2\pi$.
- Setup audit before evaluating: limits, integrand, measure. It found three slips in one pass.
- $\int_0^\pi f(\cos\theta)\sin\theta\,\mathrm{d}\theta=\int_{-1}^{1}f(u)\,\mathrm{d}u$ with $u=\cos\theta$.

On your worry about GRE time: with the audit and the substitution, this whole problem is four lines. Still to prove, on another day and without pointers: a setup written clean the first time, and the $u=\cos\theta$ step without being handed it. `/retention` on this thread is the place for that. The sanity-check thread continues in [[2026-10-04-1801 Sanity checks]].
