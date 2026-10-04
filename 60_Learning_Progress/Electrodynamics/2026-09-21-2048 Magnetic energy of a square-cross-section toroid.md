---
type: learning-progress
topic: "Magnetic energy of a square-cross-section toroid"
area: Electrodynamics
status: closed
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

**Closed 2026-10-03** (Turn 9). Turn 4: learner derived the full toroid $U_B$ unaided (handwritten, correct): note target met. Coordinate choice: the Turn 3 wording of the boundary rule did not land ("face", "$x=L$" unknown); Turn 4 replaced it with a walk-to-the-wall picture and examples; Turn 5 added the Excalidraw figure `assets/boundary-rule-walk-to-the-wall.excalidraw` (square vs disc, verdict hidden). Turn 6: learner stated the toroid's four walls ($s=R$, $s=R+a$, $z=0$, $z=a$) and "match coordinates to the boundary's shape", but called $\rho=kr$ a boundary; corrected (boundary sets limits, integrand is checked second). Turn 7: cube 1(c) redone correctly (Cartesian, $Q=\frac12\rho_0L^3$, handwritten). Turn 9: transfer check passed with no hint (cylinder with $\rho=\rho_0z/h$: cylindrical, $Q=\frac12\rho_0\pi R^2h$, handwritten; system given, reason not stated); trap in [[Trap-Log]] reworked. Open for retention: state the reason when the region and the integrand point to different systems; boundary of the region vs integrand (Turn 6 mix-up). Tutor-authored diagnostic, not a Prep Studio drill handoff.

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

> I know all the formula but was not able to calculate the integral. And I know the answer should be selected between A and B, because ln[(R+a)/a] is a representative of the transverse of toroid in r-axis. I think the core issue is my integral calculus. Help me improve it. How to make it quickly and precisely?
>
> [Image: SOLUTION with $U_B$ integral in cylindrical coordinates, evaluating to $\frac{\mu_0 N^2 I^2 a}{4\pi}\ln\frac{R+a}{R}$.]
>
> [Image: toroid figure (inner radius $R$, square side $a$, current $I$); stem as above; A green, B red.]

### Tutor (2026-10-03)

Your read on the options is right: the log can only come from the radial integral, so the choice is A vs B, and the only open point is which length multiplies the log. One detail: you typed $\ln[(R+a)/a]$, and both options have $\ln\frac{R+a}{R}$. The radial integral settles which one is correct; we do it next turn.

The speed comes from one check before any calculus: **which variables does the integrand contain?** Here $B=\frac{\mu_0 N I}{2\pi s}$ contains only $s$ (the solution's $r$: the distance from the axis of the hole to the point). A variable the integrand does not contain integrates to the plain length of its range. So the triple integral is one 1D integral times two numbers:

$$U_B=\frac{1}{2\mu_0}\left(\int_0^{a}\mathrm{d}z\right)\left(\int_0^{2\pi}\mathrm{d}\phi\right)\int_R^{R+a}B(s)^2\,s\,\mathrm{d}s$$

The factor $s$ comes from the cylindrical volume element $\mathrm{d}^3 r=s\,\mathrm{d}s\,\mathrm{d}\phi\,\mathrm{d}z$ and stays inside the $s$ integral.

Leave the $s$ integral alone for now. What do the two bracketed integrals give, and which of them puts a length in front of the log?

### Turn 2 — 2026-10-03 (learner)

> My typo
> I don't have a solid foundation of triple integral, especially in cylindrical coordinates. And sometimes I have no idea to use which, spherical, cylindrical or normal one. You can give me a small test to confirm and align my baseline.
> Those two bracketed integrals give height (z) and complete azimuthal angle (phi). The former.

### Tutor

Correct. $\int_0^a\mathrm{d}z=a$ (the height of the square) and $\int_0^{2\pi}\mathrm{d}\phi=2\pi$ (the full turn around the axis). The $a$ is the length in front of the log, so the answer is A. In option B the $R$ sits in front, but $R$ only ever enters as a limit of the $s$ integral.

Baseline test, five items. Work on paper, no lookup. Where you would guess, write "not sure" instead: a marked guess tells me more than a lucky answer.

**1. Choose the coordinates.** For each case, name the system (Cartesian, cylindrical, or spherical) and give the reason in a few words.

- (a) Total charge in a ball of radius $R$ with $\rho=kr$, where $r$ is the distance from the center.
- (b) Magnetic field energy per unit length inside a long straight wire of radius $R$, where $B$ depends only on the distance from the wire's axis.
- (c) Total charge in a cube of side $L$ with $\rho=\rho_0\,x/L$.

**2. Volume elements.** Write $\mathrm{d}^3 r$ in Cartesian, cylindrical, and spherical coordinates.

**3. Set up and evaluate.** Get the volume of a solid cylinder (radius $R$, height $h$) as a triple integral in cylindrical coordinates. Write all three pairs of limits, then evaluate.

**4. The toroid's last piece.** Evaluate $\displaystyle\int_R^{R+a}\frac{1}{s^2}\,s\,\mathrm{d}s$.

**5. Judge this work.** A cylinder (radius $R$, height $h$) has $\rho=ks$, where $s$ is the distance from its axis. A student writes

$$Q=\int_0^h\int_0^{2\pi}\int_0^R ks\,\mathrm{d}s\,\mathrm{d}\phi\,\mathrm{d}z=\pi kR^2h$$

Is this right? If not, name the error and give the correct $Q$.

### Turn 3 — 2026-10-03 (learner)

> 1. (a) spherical. First of all, it is a problem about a ball which is a sphere. Secondly, the distribution of charge density supports this choice as well, which only relates to r.  (b) Cylindrical. Because the shape matches, and B depends on the distance from the wire's axis, which is another typical feature of polarized coordinates.   (c) Cylindrical. the distribution of the charge density uh, perfectly fits the shape of the cylindrical coordinates so that we can put one of the x or y coordinate along the charge density distribution.
> 2. See in the attached image
> 3. See in the second attached image
> 4. See in the third attached image
> 5. He has missed a term s before ks
>
> [Image 1, handwritten, item 2. Heading $\mathrm{d}^3 r$. "Cartesian: $\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z$". "Cylindrical: $r\,\mathrm{d}r\,\mathrm{d}\phi\,\mathrm{d}z$", with a crossed-out symbol before the $r$. "Spherical: $r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$".]
>
> [Image 2, handwritten, item 3.]
> $$V=\int\mathrm{d}^3 r=\int r\,\mathrm{d}r\,\mathrm{d}\phi\,\mathrm{d}z=\int_0^R r\,\mathrm{d}r\int_0^{2\pi}\mathrm{d}\phi\int_0^h\mathrm{d}z=\frac12R^2\cdot2\pi\cdot h=\pi hR^2$$
>
> [Image 3, handwritten, item 4.]
> $$\int_R^{R+a}\frac{1}{s^2}\,s\,\mathrm{d}s=\int_R^{R+a}\frac{1}{s}\,\mathrm{d}s=\ln\frac{R+a}{R}$$
>
> [Image 4, handwritten, item 5. The $\phi$ integral is written as "$\int^{2\pi}\phi$" with no $\mathrm{d}$ and an unclear lower limit. In the last line the "$2\pi$" is overwritten.]
> $$Q=\int\rho(s)\,s\,\mathrm{d}s\,\mathrm{d}\phi\,\mathrm{d}z=\int_0^R ks^2\,\mathrm{d}s\int^{2\pi}\phi\cdot\int_0^h\mathrm{d}z=\frac13ks^3\Big|_0^R\cdot(2\pi)\cdot(h)=\frac{2\pi}{3}khR^3$$

### Tutor

Result: items 1(a), 1(b), 2, 3, 4, 5 are correct. Item 1(c) is wrong.

- **Mechanics are in place.** All three volume elements are right. The cylinder volume has correct limits and the factored form. $\int_R^{R+a}\frac{\mathrm{d}s}{s}=\ln\frac{R+a}{R}$ is right. In item 5 you named the missing factor $s$ and got $Q=\frac{2\pi}{3}khR^3$. One notation point: write $\int_0^{2\pi}\mathrm{d}\phi$, not $\int^{2\pi}\phi$. The value $2\pi$ you used is correct.
- **The toroid is finished.** Your three pieces multiply to $U_B=\frac{1}{2\mu_0}\cdot a\cdot2\pi\cdot\frac{\mu_0^2N^2I^2}{4\pi^2}\ln\frac{R+a}{R}=\frac{\mu_0N^2I^2a}{4\pi}\ln\frac{R+a}{R}$, option A.
- **The gap is the choice of coordinates, item 1(c).** Your self-report matches the test. In (a) and (b) the region and the integrand pointed to the same system, so either reason gave the right answer. In (c) you need a rule for which one decides.

The rule: **the boundary of the region decides first.** Choose the system in which every boundary surface is "one coordinate = a constant". Then all six limits are plain numbers and the integral factors, as in your items 3 and 5. Test cylindrical on the cube: the face $x=L$ becomes $s\cos\phi=L$, so the upper limit of $s$ is $L/\cos\phi$. It depends on $\phi$, and the integral no longer factors. The integrand is checked second: it should contain as few of the chosen coordinates as possible.

Redo 1(c) with that rule. In which system are all six faces of the cube "coordinate = constant", and what is $Q$ for $\rho=\rho_0\,x/L$?

### Turn 4 — 2026-10-03 (learner)

> Please elaborate on the boundary decision rule. I have not understood it, and you can give me more examples.
> What does face mean? X equals L
>  Let me think about the question by myself after understanding.
>
> [Image, handwritten: full toroid calculation. One line is crossed out between the second and third lines. In the fourth line the $8$ is struck and replaced by $4$, and one power of $\pi$ is cancelled against the $2\pi$.]
> $$B=\frac{\mu_0NI}{2\pi r}$$
> $$U=\frac{1}{2\mu_0}\int B^2\,\mathrm{d}^3 r=\frac{1}{2\mu_0}\int\frac{\mu_0^2N^2I^2}{4\pi^2r^2}\cdot r\,\mathrm{d}r\,\mathrm{d}\phi\,\mathrm{d}z$$
> $$=\frac18\cdot\frac{\mu_0N^2I^2}{\pi^2}\cdot\int_R^{R+a}\frac1r\,\mathrm{d}r\cdot\int_0^{2\pi}\mathrm{d}\phi\cdot\int_0^a\mathrm{d}z$$
> $$=\frac18\cdot\frac{\mu_0N^2I^2}{\pi^2}\cdot\ln\frac{R+a}{R}\cdot2\pi\cdot a=\frac14\,\frac{\mu_0N^2I^2}{\pi}\cdot a\ln\frac{R+a}{R}$$

### Tutor

Your toroid calculation is correct from the first line to the last, with no help: $U=\frac{\mu_0N^2I^2a}{4\pi}\ln\frac{R+a}{R}$. That was the target of this note.

**Face.** A face is one flat side of a solid (Chinese: 面). A cube has six. Place the cube so it fills $0\le x\le L$, $0\le y\le L$, $0\le z\le L$. "The face $x=L$" is the flat side on which every point has $x$ equal to $L$. The opposite side is the face $x=0$.

**The rule, with a different picture.** Forget my earlier wording. An integral needs, for each variable, "from where to where". Look at the cube from above (a square) and try two ways of walking from the corner at the origin to the wall:

```
 y
 L ┌───────────┐  ray at 45°: exits at distance s = √2·L
   │         ⟋ │
   │      ⟋    │
   │   ⟋       │
 0 └───────────┘→ ray along x: exits at distance s = L
   0           L   x
```

- **Walk outward from the origin (cylindrical $s$).** Along the $x$-axis you reach the wall at $s=L$. Along the diagonal you reach it at $s=\sqrt2L$. The exit distance changes with the direction $\phi$, so the upper limit of $s$ is not a number.
- **Walk parallel to the $x$-axis (Cartesian $x$).** You always start at $x=0$ and always reach the wall at $x=L$, for every $y$ and every $z$. The limits are numbers: $\int_0^L$.

So the rule in plain words: **use the coordinates in which each wall of the region is reached at the same value every time.** Then every limit is a number, and the integral splits into three separate ones, as in your cylinder and your toroid.

**Examples** (region → its walls → system):

- Cube or rectangular box → $x=0$, $x=L$, $y=0$, $y=L$, $z=0$, $z=L$ → Cartesian.
- Solid ball of radius $R$ → $r=R$ → spherical.
- Spherical shell between radii $a$ and $b$ → $r=a$, $r=b$ → spherical.
- Solid cylinder or straight wire (radius $R$, height $h$) → $s=R$, $z=0$, $z=h$ → cylindrical.
- A disc seen from above: walking outward from the center, you reach the edge at $s=R$ in every direction → cylindrical. Compare with the square in the sketch.

The cube question from Turn 3 stays open for you; answer it when you are ready. A lighter check first, on the region you just integrated: the toroid's square cross-section has four walls. Write each one as "coordinate = constant".

### Turn 5 — 2026-10-03 (learner)

> Use excalidraw to show me.

### Tutor

![[boundary-rule-walk-to-the-wall.excalidraw|1000]]

In each panel, follow one arrow from its start to the wall where it leaves the region. Then compare the arrows inside the same panel: is the exit the same for every arrow? In panels 2 and 3 it is. In panel 1 it is not.

The question from Turn 4 stands: the toroid's square cross-section has four walls. Write each one as "coordinate = constant".

### Turn 6 — 2026-10-03 (learner)

> Yeah. Oh, I see. I now understand the meaning of the boundary. The boundary condition is x equals l in this case. So we need to find a shape of the coordinates to match its boundaries shape. So if the condition is rho equals r, then we can find a sphere or a circle to fit that shape. Is my understanding correct?
> Here are the four walls respectively. r equals R, r equals R plus a, Z equals zero, and Z equals a.

### Tutor

The four walls are correct: $s=R$, $s=R+a$, $z=0$, $z=a$ (your $r$ is the cylindrical $s$). Those are exactly the four limits you wrote in your toroid integral. Your first statement is also correct: choose the coordinates whose shape matches the shape of the boundary.

Your second statement needs one correction. $\rho=kr$ is not a boundary. Two different things appear in every volume integral:

- **The boundary of the region:** where the object ends. For the ball it is the surface $r=R$. It sets the limits of the integral.
- **The integrand:** what fills the object. $\rho=kr$ says how much charge sits at each point inside. It goes under the integral sign.

For the ball of item 1(a), the choice of spherical coordinates comes from the surface $r=R$. The density $\rho=kr$ happens to agree with that choice, and it is checked second. A word on terms: "boundary condition" is the name of a different idea (a requirement on a field at a surface), so here say "boundary of the region".

Now the cube from Turn 3, item 1(c). The region is a cube of side $L$ and the integrand is $\rho=\rho_0\,x/L$. Which coordinate system does the boundary choose, and what is $Q$?

### Turn 7 — 2026-10-03 (learner)

> Cartesian
>
> [Image, handwritten. The symbol between the $x$ integral and the $y$ integral looks like "+" or "·"; the evaluation treats it as a product.]
> $$\int\rho\,\mathrm{d}^3r=\int\rho_0\frac{x}{L}\,\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z=(\rho_0/L)\int_0^Lx\,\mathrm{d}x\cdot\int_0^L\mathrm{d}y\int_0^L\mathrm{d}z=\frac{\rho_0}{L}\cdot\frac12L^2\cdot L\cdot L=\frac12\rho_0L^3$$

### Tutor

Correct: Cartesian, and $Q=\frac12\rho_0L^3$. The limits are all numbers, the integral factors into three, and the units are right ($\rho_0$ times a volume). One notation point: write "$\cdot$" between the factored integrals. On your page the first one looks like "+".

One transfer check, to confirm the rule holds when I do not name it. A solid cylinder has radius $R$ and height $h$, with its base at $z=0$. Its charge density is $\rho=\rho_0\,z/h$. Which coordinate system do you use, and what is $Q$?

### Turn 8 — 2026-10-03 (learner)

> /Users/Reid Hu/OrbitOS/60_Learning_Progress/Electrodynamics/2026-09-21-2048 Magnetic energy of a square-cross-section toroid.md
> /learn this one

### Tutor

Where this note stands. You derived the toroid energy $U_B=\frac{\mu_0N^2I^2a}{4\pi}\ln\frac{R+a}{R}$ with no help. You redid the cube correctly: Cartesian, $Q=\frac12\rho_0L^3$. One check remains, and a correct answer closes this note.

A solid cylinder has radius $R$ and height $h$, with its base at $z=0$. Its charge density is $\rho=\rho_0\,z/h$. Work on paper and write all three pairs of limits. Which coordinate system do you use, and what is $Q$?

### Turn 9 — 2026-10-03 (learner)

> Cylindrical
>
> [Image, handwritten. In line 2 the $r$ before $\mathrm{d}r$ is overwritten. In line 3 the upper limit of the $\phi$ integral reads as "$2\pi$" and the upper limit of the $z$ integral reads as "$h$"; both are hard to read. Line 4 has three cancellation strokes: the $h$ in the denominator, the $2$ of $\frac12R^2$ against the $2$ of $2\pi$, and the exponent of $h^2$.]
> $$Q=\int\rho_{(r)}\,\mathrm{d}^3r=\int\rho_0\frac{z}{h}\,r\,\mathrm{d}r\,\mathrm{d}\phi\,\mathrm{d}z=(\rho_0/h)\int_0^Rr\,\mathrm{d}r\int_0^{2\pi}\mathrm{d}\phi\int_0^hz\,\mathrm{d}z=\frac{\rho_0}{h}\cdot\frac12R^2\cdot2\pi\cdot\frac12h^2=\frac12\rho_0\cdot R^2\cdot\pi\cdot h$$

### Tutor

Correct: cylindrical, and $Q=\frac12\rho_0\pi R^2h$. All six limits are numbers, the measure factor $r$ is in place, and the integral factors into three. A second route gives the same result. The cross-section is the same at every height and the density rises linearly from $0$ at the base to $\rho_0$ at the top, so the average density is $\frac12\rho_0$. $Q$ is that average times the volume $\pi R^2h$. On the exam, the second route is one line.

You chose cylindrical although the density $\rho_0z/h$ contains only $z$. In Turn 3 the same conflict (a cube, with the density along $x$) led you to choose by the density. This time the region decided, with no hint. The trap in [[Trap-Log]] is reworked and this note is closed.

**What you can now do:**

- Evaluate the toroid energy from $B=\frac{\mu_0NI}{2\pi s}$ to $U_B=\frac{\mu_0N^2I^2a}{4\pi}\ln\frac{R+a}{R}$ with no help (Turn 4).
- Factor a triple integral: a variable absent from the integrand gives the plain length of its range.
- Choose coordinates in two steps: the boundary of the region picks the system; the integrand then shows which integrals are plain lengths.

**Error analysis against the item's solution.** Your Turn 4 calculation matches the printed SOLUTION step for step: the same $B$, the same limits ($R\to R+a$, $0\to2\pi$, $0\to a$), the same result, option A. The baseline test showed that the calculus mechanics were in place. The missing piece was the order of the two decisions: region first, integrand second. Three patterns to watch:

1. Choosing the system from the integrand when the region has a different shape (Turn 3, the cube).
2. Calling the integrand a boundary (Turn 6, $\rho=kr$). The boundary sets the limits; the integrand goes under the integral sign.
3. Writing: $\int_0^{2\pi}\mathrm{d}\phi$ with its $\mathrm{d}$, "$\cdot$" between factored integrals, and limits that can be read. On this page the upper limits of $\phi$ and $z$ are hard to read.

**Next:** the open `/learn` items in today's daily note with a started thread are the boundary condition on normal $E$ ([[2026-09-15-0916 Boundary condition on normal E]]) and determinant equations ([[2026-09-23-1713 Determinant equations]]).
