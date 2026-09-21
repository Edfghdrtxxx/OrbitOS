---
type: learning-progress
topic: "Magnetic energy of a square-cross-section toroid"
area: Electrodynamics
status: in-progress
created: 2026-09-21
tags:
  - physics
  - electrodynamics
  - magnetostatics
  - toroid
  - cylindrical-coordinates
  - volume-integral
  - magnetic-energy
  - gre-physics
---
# Magnetic energy of a square-cross-section toroid

**Why this note exists:** GRE item (square-cross-section toroid, $U_B$) used as the object for the cylindrical volume integral that was parked this morning. Daily child: `/learn magnetic energy of a square-cross-section toroid in [[GRE_Physics_Prep]]`. Parent energy density: [[2026-09-17-2129 Self-induced emf across an inductor]]. Parent coordinates: [[2026-09-21-1447 Volume integral of rho from div E]].

**Target:** Evaluate $U_B=\int B^2/(2\mu_0)\,\mathrm{d}^3 r$ on this toroid from the cylindrical measure, without memorizing the $\ln((R+a)/R)$ result.

**Active 2026-09-21.** Turn 2: GRE clock ≠ slog or memorize; still locating cylindrical $s$.

---

## Context (item transcribed)

### Image — SOLUTION

Recall that the energy stored in a magnetic field $\mathbf{B}$ is given by equation (2.35),

$$U_B=\frac{1}{2\mu_0}\int|\mathbf{B}|^2 d^3\mathbf{r}.$$

Using the expression for the magnetic field of a toroid, we have (using cylindrical coordinates)

$$U=\frac{1}{2\mu_0}\int_0^a\int_0^{2\pi}\int_R^{R+a}\frac{\mu_0^2 N^2 I^2}{4\pi^2 r^2}\,r\,dr\,d\phi\,dz=\frac{\mu_0 N^2 I^2 a}{4\pi}\int_R^{R+a}\frac{dr}{r}=\frac{\mu_0 N^2 I^2 a}{4\pi}\ln\frac{R+a}{R}.$$

### Image — problem stem and options

Figure: doughnut of wire with radial hash marks (windings). Inner radius $R$ drawn from the hole center to the inner edge. Square cross section of side $a$ marked as a dark band on the lower-left of the winding. Current $I$ arrow circulating counterclockwise on the outer rim.

Stem: What is the magnetic energy stored in a toroid of wire with a square cross section of side length $a$, $N$ total winds, inner radius $R$, and current $I$?

- **A** (green): $\dfrac{\mu_0 N^2 I^2 a}{4\pi}\ln\dfrac{R+a}{R}$
- **B** (red): $\dfrac{\mu_0 N^2 I^2 R}{4\pi}\ln\dfrac{R+a}{R}$

**Visual / marks:** Option A is green; option B is red. A is the solution's result. B differs only in the prefactor length ($R$ vs $a$). Do not treat the red mark as a stated reason until the learner gives one.

---

## Turns

### Turn 1 — 2026-09-21 (learner)

> I know all the formual but was not able to calculate the integral. Do I need to memorize this specific case?
>
> [Image: SOLUTION with $U_B$ integral in cylindrical coordinates, evaluating to $\frac{\mu_0 N^2 I^2 a}{4\pi}\ln\frac{R+a}{R}$.]
>
> [Image: toroid figure (inner radius $R$, square side $a$, current $I$); stem as above; A green, B red.]

### Tutor

No. Do not memorize $\frac{\mu_0 N^2 I^2 a}{4\pi}\ln\frac{R+a}{R}$. The GRE split A vs B is which length multiplies the log, and that length is whatever one of the three integrals produces — not a stored formula.

You already have $U_B=\int B^2/(2\mu_0)\,\mathrm{d}^3 r$ and Ampère's $B=\mu_0 N I/(2\pi s)$ inside the winding ([[2026-09-17-2129 Self-induced emf across an inductor]]). This morning you parked cylindrical: spherical $r$ is origin-to-point, cylindrical $s$ is axis-to-point ([[2026-09-21-1447 Volume integral of rho from div E]]).

For a point sitting in the shaded square of the toroid, what is $s$: the inner radius $R$, the side $a$, or the distance from the center of the hole out to that point?

### Turn 2 — 2026-09-21 (learner)

> However, given that the time of GRE is so intense, do I really have time to derive it?

### Tutor

You do not have time to grind that triple on Nov 1. You also should not memorize this $\ln\frac{R+a}{R}$ formula. Those are not the only two options — this morning you already used the third: skip the slog, keep one geometric fact ([[2026-09-21-1447 Volume integral of rho from div E]]).

The exam split is which length sits in front of the log. That length is not $s$. $s$ still has to be named or the integral does not even start.

For a point in the shaded square, what is $s$: the inner radius $R$, the side $a$, or the distance from the center of the hole out to that point?
