---
type: learning-progress
topic: "Ampère–Maxwell law in matter and displacement current"
area: Electrodynamics
status: active
created: 2026-10-10
tags:
  - physics
  - electrodynamics
  - maxwell-equations
  - displacement-current
  - magnetic-dipole
  - dielectrics
  - gre-physics
---
# Ampère–Maxwell law in matter: $\nabla\times\mathbf{H}=\dot{\mathbf{D}}+\mathbf{J}$

**Why this note exists:** Three Prep Studio items (Electromagnetism) raised three questions. Daily child: `/learn Ampère–Maxwell law in matter, far-field dipole, and the limit of E = Q/(ε0 A)` in [[GRE_Physics_Prep]].

**Order (learner: "one step at a time"):**
1. $\mathbf{H}$, $\dot{\mathbf{D}}$, the symbols $\nabla\cdot$ and $\nabla\times$, and why $\nabla\times\mathbf{H}=\dot{\mathbf{D}}+\mathbf{J}$ holds — this note, active.
2. Why the far field of a loop is $B\propto m/r^3$ — queued; related: [[2026-09-17-1537 Magnetic dipole moment of a current loop]].
3. Where $E=Q/(\epsilon_0A)$ stops holding (capacitor filled with a dielectric) — queued; related: [[2026-09-20-1803 Electric displacement D and linear dielectrics]], [[2026-09-14-0828 Capacitance]].

### Prior context
- **Already computable:** In the gap $D=\sigma_f=Q_f/A$, so $A\,\partial D/\partial t=\mathrm{d}Q_f/\mathrm{d}t=I$ (learner, handwritten, Turn 4).
- **What broke:** One loop around the wire of a charging capacitor: free current through Surface 1 (flat disk) is $I$, through Surface 2 (bag through the gap) is $0$ (learner, Turn 3).
- **New object had to:** Supply $I$ on Surface 2, where no charge crosses: a second term, the rate of change of the electric flux, next to the current term (learner, handwritten braces "surface 1" / "surface 2", Turn 5).

---

## Context (images transcribed)

### Image 1 — question (Prep Studio, Question 1 of 15, "Not yet done", Electromagnetism, 60 s)

Which of the following equations is a consequence of the equation $\nabla\times\mathbf{H}=\dot{\mathbf{D}}+\mathbf{J}$?

- (A) $\nabla\cdot(\dot{\mathbf{D}}+\mathbf{J})=0$
- (B) $\nabla\times(\dot{\mathbf{D}}+\mathbf{J})=0$
- (C) $\nabla(\dot{\mathbf{D}}\cdot\mathbf{J})=0$
- (D) $\dot{\mathbf{D}}+\mathbf{J}=0$
- (E) $\dot{\mathbf{D}}\cdot\mathbf{J}=0$

No option is marked as picked in the image.

### Image 2 — solution to the question in Image 1

SOLUTION

Take the divergence of both sides of $\nabla\times\mathbf{H}=\dot{\mathbf{D}}+\mathbf{J}$. The divergence of any curl vanishes identically, $\nabla\cdot(\nabla\times\mathbf{H})=0$, so $\nabla\cdot(\dot{\mathbf{D}}+\mathbf{J})=0$. This is exactly the charge-continuity condition: since $\nabla\cdot\mathbf{D}=\rho$, it reads $\nabla\cdot\mathbf{J}+\dot\rho=0$, and it was Maxwell's motivation for adding the displacement current. GRE shortcut: whenever a curl sits on the left, immediately take the divergence — $\nabla\cdot(\nabla\times\ )\equiv0$ kills it, giving answer A.

### Image 3 — one line of a solution (the question itself is not in the image)

At a point far from the loop the field is that of a magnetic dipole, $B\propto m/r^3$,

(The line is cut off after the comma.)

### Image 4 — solution to the question in Image 5

SOLUTION

Take the steps in order. While the dielectric (constant $\kappa$) is inserted the battery is still connected, so $V$ is held fixed: $V_f=V_0$ (killing A and B) and $E=V/d$ is unchanged, $E_f=E_0$ (killing D). But $C\to\kappa C$, so the free charge grows, $Q_f=\kappa Q_0>Q_0$ (killing C). The displacement $D=\sigma_{\text{free}}=Q/A=\kappa\varepsilon_0E$ therefore rises to $D_f=\kappa D_0>D_0$; disconnecting the battery afterward merely freezes this state, so the only true statement is $D_f>D_0$, choice (E).

### Image 5 — question

A parallel-plate capacitor is connected to a battery. $V_0$ is the potential difference between the plates, $Q_0$ the charge on the positive plate, $E_0$ the magnitude of the electric field, and $D_0$ the magnitude of the displacement vector. The original vacuum between the plates is filled with a dielectric and then the battery is disconnected. If the corresponding electrical parameters for the final state of the capacitor are denoted by a subscript $f$, which of the following is true?

- (A) $V_f>V_0$
- (B) $V_f<V_0$
- (C) $Q_f=Q_0$
- (D) $E_f>E_0$ — marked red, "YOUR PICK"
- (E) $D_f>D_0$ — marked green, "CORRECT"

---

## Turns

### Turn 1 — 2026-10-10 (learner)

> 1. What is H? What is D dot? Is it time derivative? Why they have this relation? What rules do those signs use?
> 2. Another question is why the relation between magnetic field and moment is like this?
> 3. I know the formula E = Q/(epsilon_0A) so I chose option D. It seems like I ignore the boundary of this formula, which is not universal
>
> We take it one step at a time.

### Tutor

Question 1 first; questions 2 and 3 wait in the order list at the top of this note.

**The notation.**

- **$\dot{\mathbf{D}}$:** yes, the dot is the time derivative, $\dot{\mathbf{D}}\equiv\partial\mathbf{D}/\partial t$. The solution uses the same dot in $\dot\rho=\partial\rho/\partial t$.
- **$\nabla\cdot$ (divergence):** the operator you used in $\rho=\epsilon_0\nabla\cdot\mathbf{E}$. It is the flux out of a tiny closed surface, divided by the volume inside. It takes a vector field and returns a scalar.
- **$\nabla\times$ (curl):** the circulation $\oint\mathbf{F}\cdot\mathrm{d}\boldsymbol{\ell}$ around a tiny closed loop, divided by the area of the loop. It takes a vector field and returns a vector (along the loop's normal). It is the point-by-point version of the left side of Ampère's law, $\oint\mathbf{B}\cdot\mathrm{d}\boldsymbol{\ell}=\mu_0I_{\text{enc}}$.
- **$\mathbf{H}$:** the magnetic partner of $\mathbf{D}$. $\mathbf{D}=\epsilon_0\mathbf{E}+\mathbf{P}$ was built so that Gauss's law counts only free charge. $\mathbf{H}=\mathbf{B}/\mu_0-\mathbf{M}$ ($\mathbf{M}$ = magnetization, the magnetic dipole moment per unit volume) is built so that Ampère's law counts only free current $\mathbf{J}$. In vacuum $\mathbf{M}=0$ and $\mathbf{P}=0$, so $\mathbf{H}=\mathbf{B}/\mu_0$, $\mathbf{D}=\epsilon_0\mathbf{E}$, and the equation in the question is $\nabla\times\mathbf{B}=\mu_0\mathbf{J}+\mu_0\epsilon_0\,\partial\mathbf{E}/\partial t$.

**Why the relation has a $\dot{\mathbf{D}}$ in it.** Before Maxwell the law had no such term: $\oint\mathbf{H}\cdot\mathrm{d}\boldsymbol{\ell}=I_{\text{free}}$, where $I_{\text{free}}$ is the current that pierces *any* surface whose edge is the loop. Test that law on a capacitor while a current $I$ charges it. Draw one loop around the wire and give it two surfaces with that same loop as their edge:

![[charging-capacitor-two-surfaces.excalidraw|1000]]

Both surfaces hang from the same loop: Surface 1 is the flat blue disk that the wire crosses, and Surface 2 is the orange dashed bag that wraps around the left plate and closes in the gap.

How much free current pierces Surface 1, and how much pierces Surface 2?

### Turn 2 — 2026-10-10 (learner)

> Replace this part by excalidraw

(Attached image: a screenshot of the Turn 1 paragraph "Why the relation has a $\dot{\mathbf{D}}$ in it" and the text sketch of the wire, the two plates, the loop, Surface 1 and Surface 2.)

### Tutor

The text sketch in Turn 1 is replaced by the drawing `charging-capacitor-two-surfaces.excalidraw`. The Turn 1 question stands: how much free current pierces Surface 1, and how much pierces Surface 2?

### Turn 3 — 2026-10-10 (learner)

> 1. Give me the complete form of the H and D vector in Maxwell equations
> 2. Surface 1: I
> 3. Surface 2: 0

### Tutor

**Maxwell's equations in matter** (subscript $f$ = free: charge and current that are not part of the material's own dipoles). Only the first and the last contain $\mathbf{D}$ and $\mathbf{H}$; the middle two are the same as in vacuum.

- **Gauss:** $\nabla\cdot\mathbf{D}=\rho_f$
- **No magnetic charge:** $\nabla\cdot\mathbf{B}=0$
- **Faraday:** $\nabla\times\mathbf{E}=-\dfrac{\partial\mathbf{B}}{\partial t}$
- **Ampère–Maxwell:** $\nabla\times\mathbf{H}=\mathbf{J}_f+\dfrac{\partial\mathbf{D}}{\partial t}$
- **Definitions:** $\mathbf{D}=\epsilon_0\mathbf{E}+\mathbf{P}$, $\mathbf{H}=\dfrac{\mathbf{B}}{\mu_0}-\mathbf{M}$
- **Linear material only:** $\mathbf{D}=\epsilon\mathbf{E}=\kappa\epsilon_0\mathbf{E}$, $\mathbf{B}=\mu\mathbf{H}$

The question in Image 1 writes $\mathbf{J}$ for $\mathbf{J}_f$ and $\dot{\mathbf{D}}$ for $\partial\mathbf{D}/\partial t$.

**The two surfaces.** $I$ and $0$ are both right. That is the failure of the old law: the left side $\oint\mathbf{H}\cdot\mathrm{d}\boldsymbol{\ell}$ belongs to the loop alone, so it is one number, yet the right side is $I$ for Surface 1 and $0$ for Surface 2. Something that is not a current of moving charge must pierce Surface 2 and count as $I$.

Look at what does change in the gap. You showed on 2026-09-20 that between the plates $D=\sigma_f=Q/A$, with $Q$ the free charge on the plate and $A$ the plate area. While the wire delivers current $I$, the plate charge grows at the rate $\dfrac{\mathrm{d}Q}{\mathrm{d}t}=I$.

What is $A\,\dfrac{\partial D}{\partial t}$ in the gap, written in terms of $I$?

### Turn 4 — 2026-10-10 (learner)

> 1. What's the relation between μ and μ_0?
> 2. See the attached image

**Attached images (two photos of one handwritten page; the second photo shows the lower part of the page and the last lines). Transcription, in the order written:**

- $\nabla\cdot\vec D=\rho_f$
- $\nabla\cdot\vec B=0$
- $\nabla\times\vec E=-\dfrac{\partial B}{\partial t}$
- $\nabla\times\vec H=\vec J_f+\dfrac{\partial D}{\partial t}$
- $\nabla\times\vec B=\vec J+\mu_0\epsilon_0\dfrac{\partial E}{\partial t}$
- $\vec D=\epsilon_0\vec E+\vec P$
- $\vec P=\chi_e\epsilon_0\vec E$, and beside it $B=\mu H$
- $\chi_e=(k-1)$
- $\vec D=k\epsilon_0\vec E=1\cdot\epsilon_0\vec E+(k-1)\epsilon_0\vec E=\epsilon_0\vec E+\vec P$
- $\vec H=\dfrac{\vec B}{\mu_0}-\vec M$
- $\vec D=k\epsilon_0\vec E=\epsilon\vec E$
- $\vec H=\dfrac1\mu\vec B=\dfrac{1}{\mu_0}\vec B-\vec M$
- $\left(\dfrac1\mu-\dfrac{1}{\mu_0}\right)\vec B=-\vec M$
- $\left(\dfrac{1}{\mu_0}-\dfrac1\mu\right)\vec B=\vec M$
- $\vec B=\dfrac{1}{\frac{1}{\mu_0}-\frac1\mu}\vec M$
- $D=\sigma_f=\dfrac QA$ (written twice; the first copy has a crossed-out $A$), then $=\epsilon_0\vec E+\vec P$
- $A\dfrac{\partial D}{\partial t}=A\dfrac{\partial\sigma_f}{\partial t}=A\cdot\dfrac1A\cdot\dfrac{\partial Q_f}{\partial t}=I$

Other writing at the left edge of the page ("subscript", "$\sin\omega t$", "$\dfrac{\mu_0I_1I_2}{2\pi d}$") belongs to other work and is cut off.

### Tutor

**$A\,\partial D/\partial t=I$ is correct**, and every step in that line is justified: $D=\sigma_f=Q_f/A$, $A$ is constant, $\mathrm{d}Q_f/\mathrm{d}t=I$.

**$\mu$ and $\mu_0$.** The relation copies the electric one. A linear magnetic material has $\vec M=\chi_m\vec H$ ($\chi_m$ = magnetic susceptibility, a pure number), and then $\vec B=\mu_0(\vec H+\vec M)=\mu_0(1+\chi_m)\vec H$, so

$$\mu=\mu_0(1+\chi_m),\qquad\text{next to}\qquad\epsilon=\epsilon_0(1+\chi_e)=k\epsilon_0 .$$

Your own line agrees with this: $\vec M=\left(\dfrac{1}{\mu_0}-\dfrac1\mu\right)\vec B=\dfrac{\mu-\mu_0}{\mu_0}\cdot\dfrac{\vec B}{\mu}=\chi_m\vec H$. Vacuum has $\chi_m=0$, so $\mu=\mu_0$. The algebra from $\vec H=\frac1\mu\vec B$ down to $\vec B=\dfrac{1}{\frac{1}{\mu_0}-\frac1\mu}\vec M$ has no error.

**One slip on the page.** The fifth line, $\nabla\times\vec B=\vec J+\mu_0\epsilon_0\,\partial\vec E/\partial t$, has lost a $\mu_0$. In vacuum $\vec H=\vec B/\mu_0$ and $\vec D=\epsilon_0\vec E$; multiplying the fourth line by $\mu_0$ puts $\mu_0$ on *both* terms: $\nabla\times\vec B=\mu_0\vec J+\mu_0\epsilon_0\,\partial\vec E/\partial t$. This one is visible to a units check: the two terms on the right must have the same units.

**Back to the capacitor.** $A\,\partial D/\partial t$ is the flux of $\partial\vec D/\partial t$ through the part of Surface 2 that lies in the gap, and you found that it equals $I$, the same number that the moving charge gives through Surface 1.

Write the right-hand side of a repaired law, $\oint\vec H\cdot\mathrm{d}\vec\ell=\ ?$, that gives the same value for Surface 1 and for Surface 2, and state what each of its terms contributes on each surface.

### Turn 5 — 2026-10-10 (learner)

> (No text. One attached image: a handwritten page.)

**Transcription of the page, in the order written:**

- given
- $\vec H=\dfrac{1}{\mu_0}\vec B-\vec M$
- $\oint_l\vec B\cdot\mathrm{d}\vec l=\mu_0\int\vec J\cdot\mathrm{d}\vec s+\mu_0\epsilon_0\dfrac{\mathrm{d}}{\mathrm{d}t}\int\vec E\,\mathrm{d}\vec s$
- $\oint_l\vec H\cdot\mathrm{d}\vec l=\oint_l\left(\dfrac{1}{\mu_0}\vec B-\vec M\right)\cdot\mathrm{d}\vec s$
- where $\mu=\mu_0+\chi_m\mu_0$
- $\vec H=\dfrac{1}{\chi_m}\vec M$
- $\dfrac{1}{\mu_0}\vec B-\vec M=\dfrac{1}{\chi_m}\vec M$
- $\dfrac{1}{\mu_0}\vec B=\dfrac{1+\chi_m}{\chi_m}\vec M$
- $\vec B=\dfrac{\mu_0+\chi_m\mu_0}{\chi_m}\vec M=\dfrac{\mu}{\chi_m}\vec M$
- $\to\ \vec M=\dfrac{\chi_m}{\mu}\vec B$, and beside it: where $\dfrac{\mu_0}{\mu}=\dfrac{1}{1+\chi_m}$
- $\to\ \oint_l\vec H\cdot\mathrm{d}\vec l=\oint_l\left(\dfrac{1}{\mu_0}\vec B\right)\cdot\mathrm{d}\vec s+\oint_l\left(\dfrac{\chi_m}{\mu}\vec B\right)\cdot\mathrm{d}\vec s$
- $=\int\vec J\cdot\mathrm{d}\vec s+\epsilon_0\dfrac{\mathrm{d}}{\mathrm{d}t}\int\vec E\cdot\mathrm{d}\vec s+\dfrac{1}{1+\chi_m}\int\vec J\cdot\mathrm{d}\vec s+\dfrac{\epsilon_0}{1+\chi_m}\cdot\dfrac{\mathrm{d}}{\mathrm{d}t}\int\vec E\cdot\mathrm{d}\vec s$
- $=\dfrac{2+\chi_m}{1+\chi_m}\left[\int\vec J\cdot\mathrm{d}\vec s+\epsilon_0\dfrac{\mathrm{d}}{\mathrm{d}t}\int\vec E\cdot\mathrm{d}\vec s\right]$
- Under the bracket: a brace under $\int\vec J\cdot\mathrm{d}\vec s$ with an arrow to "surface 1"; a brace under $\epsilon_0\dfrac{\mathrm{d}}{\mathrm{d}t}\int\vec E\cdot\mathrm{d}\vec s$ with an arrow to "surface 2".

### Tutor

**What is right, and it is the point of the exercise.** The repaired right-hand side has two terms, a current term and a rate-of-change-of-flux term, and your braces assign them correctly: on Surface 1 the current term supplies $I$; on Surface 2 no charge crosses, and the flux term supplies $I$. In the notation of the question:

$$\oint\vec H\cdot\mathrm{d}\vec\ell=\int\vec J_f\cdot\mathrm{d}\vec s+\frac{\mathrm{d}}{\mathrm{d}t}\int\vec D\cdot\mathrm{d}\vec s .$$

Surface 1: $I+0$. Surface 2: $0+A\,\partial D/\partial t=0+I$. Maxwell named the second term the *displacement current*. The equation in Image 1, $\nabla\times\vec H=\vec J+\dot{\vec D}$, is this statement for a tiny loop, divided by the loop's area.

**The route through $\chi_m$ was not needed, and its result is wrong.** The gap and the wire's surroundings are vacuum, so $\vec M=0$ and $\vec H=\vec B/\mu_0$: dividing your "given" line by $\mu_0$ is the whole derivation. The factor $\dfrac{2+\chi_m}{1+\chi_m}$ fails a limiting-case check: at $\chi_m=0$ (vacuum) it gives $2$, and the vacuum law needs $1$. Two slips produce it:

- **Sign:** $\vec H=\dfrac{1}{\mu_0}\vec B-\vec M$, but the line with the arrow adds the $\vec M$ term.
- **Lost factor:** $\dfrac{\chi_m}{\mu}\cdot\mu_0=\dfrac{\chi_m}{1+\chi_m}$, and the page has $\dfrac{1}{1+\chi_m}$.

With both repaired the factor is $1-\dfrac{\chi_m}{1+\chi_m}=\dfrac{1}{1+\chi_m}=\dfrac{\mu_0}{\mu}$, which is only $\vec H=\vec B/\mu$ again. Two smaller points: a loop integral carries $\mathrm{d}\vec l$, not $\mathrm{d}\vec s$; and inside a magnetic material the $\vec J$ in the $\vec B$ form counts the material's bound current as well, which is the reason the $\vec H$ form exists.

**Next step.** Surface 1 and Surface 2 share the loop as their edge, so together they form one closed surface that encloses the left plate. The repaired law gives the same value, $I$, for the flux of $\vec J+\dot{\vec D}$ through each of them, measured in the same direction (left to right).

What is the net flux of $\vec J+\dot{\vec D}$ *out of* that closed surface, and which option in Image 1 states this for every point in space?

### Turn 6 — 2026-10-10 (learner)

> The net flux is 0, so A is correct

### Tutor

Correct. $I$ enters through Surface 1 and $I$ leaves through Surface 2, so the net flux of $\vec J+\dot{\vec D}$ out of the closed surface is $0$. Divergence is the flux out of a tiny closed surface divided by the volume inside, so "zero net flux out of every closed surface" is $\nabla\cdot(\vec J+\dot{\vec D})=0$: option (A). The solution's phrase "the divergence of any curl vanishes" is this same fact: a closed surface has no edge, so there is no loop left for the curl to circulate around.

With $\nabla\cdot\vec D=\rho$, option (A) reads $\nabla\cdot\vec J+\dot\rho=0$: current flowing out of a region lowers the charge inside it. That is conservation of charge. The law without $\dot{\vec D}$ would force $\nabla\cdot\vec J=0$ everywhere, which forbids a plate from charging at all.

**Question 1 is closed.** What you did, in order:

- Found the failure of $\oint\vec H\cdot\mathrm{d}\vec\ell=I_{\text{free}}$: one loop, $I$ through the disk, $0$ through the bag.
- Showed $A\,\partial D/\partial t=I$ in the gap.
- Assigned the current term to Surface 1 and the flux-change term to Surface 2.
- Got option (A) from zero net flux out of the closed surface.

Open items from this note, for a later rework without help: the missing $\mu_0$ in the vacuum form (Turn 4), and the $\chi_m$ route with its unchecked limiting case (Turn 5). Both are in [[Trap-Log]].

**Question 2** (why the far field of a loop is $B\propto m/r^3$) continues in [[2026-09-17-1537 Magnetic dipole moment of a current loop]], Turn 12. Question 3 follows it.

### Turn 7 — 2026-10-10 (learner)

> Besides the two terms you mention, is it okay to close this session now?

### Tutor

Yes. Each of the three questions ended with an answer you produced on a case you had not been shown: option (A) from zero net flux (Turn 6 here); far-field ratio $1$ and centre ratio $8$ for two loops (Turn 14 of [[2026-09-17-1537 Magnetic dipole moment of a current loop]]); the battery-disconnected-first case (Turn 10 of [[2026-09-20-1803 Electric displacement D and linear dielectrics]]).

Three statements in these notes came from the tutor and were never stated by you, so they are not counted as known: $\nabla\cdot\vec J+\dot\rho=0$ as charge conservation, $\mu=\mu_0(1+\chi_m)$, and why the dipole power is $3$. None of them blocks closing.

**Session closed 2026-10-10.** Open: the two reworks listed in Turn 6.
