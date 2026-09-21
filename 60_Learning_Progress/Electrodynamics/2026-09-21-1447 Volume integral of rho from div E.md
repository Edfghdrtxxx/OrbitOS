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
