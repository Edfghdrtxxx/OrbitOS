---
type: learning-progress
topic: "Bernoulli equation"
area: Classical Mechanics
status: active
created: 2026-09-10
tags:
  - physics
  - classical-mechanics
  - fluids
  - gre-physics
  - work-energy
parent: "[[2026-09-10-1501 Fluid continuity equation]]"
---

# Bernoulli's equation — work-energy theorem for fluids

**Why this note exists:** Prerequisite fork from [[2026-09-10-1501 Fluid continuity equation]]. The learner requested mastering Bernoulli's equation before tackling fluid continuity coupling and pressure drop problems.

**Target:**
1. Derive Bernoulli's equation along a streamline via the Work-Energy Theorem ($W_{\text{net}} = \Delta K$):
   $$P + \frac{1}{2}\rho v^2 + \rho g y = \text{const}$$
2. Understand the physical meaning of each term as an **energy density** ($\text{J}/\text{m}^3 = \text{N}/\text{m}^2$).
3. Identify the four strict assumptions: steady flow ($\partial_t = 0$), incompressible ($\rho = \text{const}$), inviscid (no viscous shear work), and evaluated along a streamline. (Distinguish streamline-local validity from global irrotationality $\nabla \times \mathbf{v} = 0$).
4. Apply to Physics GRE problem archetypes (Venturi effect, Torricelli's law, manometer coupling).


**Paused 2026-09-11.** Derivation + Item 1 (Venturi/piezometer) locked. Do not restart Item 1. Resume at Drill Batch 1 Item 2 (Torricelli) or a Kahn/official mixed fluids problem.

---

## Turns

### Turn 1 — 2026-09-10 (learner)

> Wait. learn Bernoulli's equation first

### Tutor

At its heart, Bernoulli's equation is nothing more than the **Work-Energy Theorem** ($W_{\text{net}} = \Delta K$) applied to a moving fluid element along a streamline.

Consider an incompressible fluid ($\rho = \text{const}$) flowing through a pipe that changes both cross-sectional area and elevation. In a time interval $\Delta t$:
- A fluid element of mass $\Delta m$ enters at elevation $y_1$ with cross-sectional area $A_1$, speed $v_1$, and pressure $P_1$, moving forward by $\Delta x_1 = v_1 \Delta t$.
- An equal mass $\Delta m$ exits at elevation $y_2$ with cross-sectional area $A_2$, speed $v_2$, and pressure $P_2$, moving forward by $\Delta x_2 = v_2 \Delta t$.

By the continuity equation we just reviewed, incompressibility guarantees that the displaced volume at both ends is identical:
$$\Delta V = A_1 \Delta x_1 = A_2 \Delta x_2 = \frac{\Delta m}{\rho}$$

Now consider the forces acting on this moving fluid parcel:
The fluid *behind* section 1 pushes it forward with force $F_1 = P_1 A_1$ in the direction of motion $\Delta x_1$.
The fluid *ahead* of section 2 pushes backward against it with force $F_2 = P_2 A_2$ opposite to $\Delta x_2$.

What is the net work done by these pressure forces ($W_{\text{pressure}}$) on the fluid element, expressed in terms of $P_1$, $P_2$, and $\Delta V$?

### Turn 2 — 2026-09-10 (learner)

> W_pressure = P1A1ΔX1 - P2A2Δx2

### Tutor

The opposing-force structure is right:
- The upstream fluid pushes forward on the back face: $W_1 = +F_1 \Delta x_1 = +P_1 A_1 \Delta x_1$.
- The downstream fluid pushes backward on the front face: $W_2 = -F_2 \Delta x_2 = -P_2 A_2 \Delta x_2$.

Also note the force inventory: because the fluid is **inviscid**, there is no viscous shear along the wall or between layers; and because the rigid walls do not move, the normal force from the walls does zero work. The only boundary work on the parcel comes from these two end caps.

Now, that expression is in terms of areas and displacements, but the prompt asked for it in terms of the volume element $\Delta V$.

Since incompressibility establishes $\Delta V = A_1 \Delta x_1 = A_2 \Delta x_2$, how does $W_{\text{pressure}}$ simplify when factored in terms of $P_1$, $P_2$, and $\Delta V$?

### Turn 3 — 2026-09-10 (learner)

> [Image attachment: handwritten derivation of pressure work]
>
> **Handwritten transcript:**
> $$W = F\Delta x$$
> $$F_1 = P_1 A_1 \qquad A_1 \Delta x_1 = \Delta V_1 \implies \Delta x_1 = \frac{\Delta V_1}{A_1}$$
> $$F_2 = P_2 A_2 \qquad A_2 \Delta x_2 = \Delta V_2$$
> $$W_1 = P_1 A_1 \cdot \frac{\Delta V_1}{A_1} = P_1 \Delta V_1$$
> $$W_2 = P_2 A_2 \cdot \frac{\Delta V_2}{A_2} = P_2 \Delta V_2$$
> $$\implies W_{\text{pressure}} = (P_1 - P_2)\Delta V$$
>
> **Visual / marks:** Written on unlined paper, rotated $90^\circ$ counter-clockwise. Scribble crossed out next to $F_1 = P_1 A_1$. Factor $A_2$ canceled with slash in denominator of $W_2$. Final line implicitly identifies $\Delta V_1 = \Delta V_2 = \Delta V$.

### Tutor

Your substitutions $\Delta x_1 = \frac{\Delta V_1}{A_1}$ and $\Delta x_2 = \frac{\Delta V_2}{A_2}$ are clean and make the cancellation transparent:
$$W_1 = P_1 \Delta V_1, \qquad W_2 = P_2 \Delta V_2$$

The one tacit step connecting this to your final line is **incompressibility**:
$$\Delta V_1 = \Delta V_2 = \Delta V$$
Since the downstream force opposes the motion ($W_2$ does negative work on the system), subtracting gives:
$$W_{\text{pressure}} = W_1 - W_2 = (P_1 - P_2)\Delta V$$

#### Physical meaning of $[P] = \text{J}/\text{m}^3$:
Pressure has units of energy density ($\text{N}/\text{m}^2 = \text{J}/\text{m}^3$). However, for an incompressible fluid, $P$ is **not internal energy stored in the fluid** (there is no elastic compression energy). It is **boundary work per unit volume** done on the parcel across its moving end caps. (Kahn / GRE prep texts often use the mnemonic "pressure energy" for algebraic bookkeeping, but mechanistically it is pure boundary work).

---

#### Next force in our inventory: Gravity

We are analyzing a **finite material slug** of fluid occupying the stream tube between station 1 and station 2 at time $t$. Over a time interval $\Delta t$, this entire slug moves downstream.

Because the flow is **steady** ($\partial_t = 0$), the velocity, density, and pressure fields in the fixed interior of the pipe do not change over time. Every fluid particle in the middle moves forward, but is immediately replaced by an identical particle.

Therefore, the **net mechanical change** of this closed system over time $\Delta t$ is solely the end-cap swap:
- Mass $\Delta m = \rho \Delta V$ is removed from station 1 (elevation $y_1$, speed $v_1$).
- An identical mass $\Delta m = \rho \Delta V$ is added at station 2 (elevation $y_2$, speed $v_2$).

Let the vertical coordinate $y$ point **upward** ($\hat{\mathbf{y}}$). The downward gravitational force is $\mathbf{F}_g = -\Delta m g \hat{\mathbf{y}}$, and the vertical displacement of this relocated mass is $\Delta \mathbf{r} = (y_2 - y_1)\hat{\mathbf{y}}$.

What is the work $W_g$ done by gravity on this fluid system during time $\Delta t$, expressed in terms of $\rho$, $\Delta V$, $g$, $y_1$, and $y_2$?
*(Careful with the sign: we are tracking work done **by** gravity, so $W_g = -\Delta U_g$. If the fluid flows uphill with $y_2 > y_1$, does gravity do positive or negative work?)*

### Turn 4 — 2026-09-10 (learner)

> [Image attachment: handwritten derivation of gravity work]
>
> **Handwritten transcript:**
> $$\mathbf{F}_g = -\Delta m g \hat{\mathbf{y}}$$
> $$W_g \quad \rho \cdot \Delta V \cdot g \cdot y_1 \cdot y_2 \quad (\text{discarded scratch})$$
> $$W_g = \mathbf{F}_g \cdot \Delta \mathbf{r} = -\Delta m g \hat{\mathbf{y}} \cdot (y_2 - y_1)\hat{\mathbf{y}}$$
> $$= -\Delta m (y_2 - y_1) g$$
> $$\text{where } \Delta m = \rho \cdot \Delta V \implies W_g = \rho \Delta V (y_1 - y_2) g$$
>
> **Visual / marks:** Written on unlined paper, rotated $90^\circ$ counter-clockwise. Scratch formula on upper right is discarded. Explicit dot product with $\hat{\mathbf{y}}\cdot\hat{\mathbf{y}}=1$ and minus sign distributed into $(y_2 - y_1)$ to yield $\rho \Delta V (y_1 - y_2) g$.

### Tutor

Your algebra and the sign are correct:
$$W_g = -\Delta m g (y_2 - y_1) = -\rho g \Delta V (y_2 - y_1) = \rho g \Delta V (y_1 - y_2)$$

Sanity check: if the fluid moves uphill ($y_2 > y_1$), then $y_1 - y_2 < 0$, giving $W_g < 0$. Gravity does negative work on rising fluid, exactly as required.

**Physical clarification on the system:**
Gravity acts on the entire mass of the slug ($M_{\text{slug}} = \int \rho \, \mathrm{d}V$). However, in steady flow, the interior potential energy distribution is constant in time. The net gravitational work on the entire closed material body reduces precisely to the potential energy difference of the swapped end-caps:
$$W_g = -\Delta U_g = -(\Delta m g y_2 - \Delta m g y_1) = -\rho g \Delta V (y_2 - y_1)$$
Your calculation correctly captures this net balance.

---

#### Next piece: Kinetic energy change $\Delta K$

By the exact same steady-flow end-cap accounting:
- The interior fluid's kinetic energy is time-independent ($\partial_t = 0$).
- Mass $\Delta m = \rho \Delta V$ with speed $v_1$ has left station 1.
- An identical mass $\Delta m = \rho \Delta V$ with speed $v_2$ has entered at station 2.

What is the net change in kinetic energy $\Delta K$ of this material slug over time $\Delta t$, expressed in terms of $\rho$, $\Delta V$, $v_1$, and $v_2$?

### Turn 5 — 2026-09-10 (learner)

> [Image attachment: handwritten assembly of net work and Work-Energy Theorem]
>
> **Handwritten transcript:**
> $$\Delta m = \rho \Delta V$$
> $$W_g = -\rho \Delta V (y_2 - y_1) g$$
> $$W_{\text{pressure}} = (P_1 - P_2)\Delta V$$
> $$W_{\text{net}} = \Delta KE = W_g + W_{\text{pressure}} = -\rho \Delta V (y_2 - y_1) g + (P_1 - P_2)\Delta V$$
>
> **Visual / marks:** Written on unlined paper, rotated $90^\circ$ counter-clockwise. Clear assembly bringing the two locked work terms together into $W_{\text{net}} = \Delta KE$, leaving $\Delta KE$ unexpanded.

### Tutor

You cleanly assembled the complete work inventory, and the signs match our derivations:
$$W_{\text{net}} = W_{\text{pressure}} + W_g = (P_1 - P_2)\Delta V - \rho g \Delta V (y_2 - y_1)$$

And you correctly invoked the Work-Energy Theorem: $W_{\text{net}} = \Delta K$.

However, identifying $\Delta K$ with the work sum leaves the kinetic energy side unexpanded. To derive Bernoulli's equation, we need to evaluate $\Delta K$ **independently** from the kinematics of the fluid.

Use the same closed-system end-cap accounting as for gravity:
The slug is a fixed-mass material body filling the stream tube. Because the flow is steady ($\partial_t = 0$), the kinetic energy of the fluid in the fixed interior region is constant in time.

Over time $\Delta t$, the only net change in kinetic energy of the closed material slug is the end-cap swap:
- The material body now occupies a new volume element $\Delta V$ at station 2 moving at speed $v_2$.
- It no longer occupies the volume element $\Delta V$ at station 1 moving at speed $v_1$.

Each end cap carries mass $\Delta m = \rho \Delta V$. Because kinetic energy is proportional to speed squared ($K = \frac{1}{2}m v^2$), the difference involves $v_2^2 - v_1^2$ (not $(v_2 - v_1)^2$).

What is the independent expression for $\Delta K$ of this material slug over time $\Delta t$, in terms of $\rho$, $\Delta V$, $v_1$, and $v_2$?

### Turn 6 — 2026-09-10 (learner)

> [Image attachment: handwritten derivation of kinetic energy change]
>
> **Handwritten transcript:**
> $$\Delta V, v_2$$
> $$\text{new: } +\frac{1}{2}m v_2^2 = \frac{1}{2}\Delta m v_2^2 = \frac{1}{2}\rho \cdot \Delta V \cdot v_2^2$$
> $$\text{old: } -\frac{1}{2}m v_1^2 = -\frac{1}{2}\rho \cdot \Delta V \cdot v_1^2$$
> $$\Delta K = \text{new} - \text{old} = \frac{1}{2}\rho \cdot \Delta V (v_2^2 - v_1^2)$$
>
> **Visual / marks:** Written on unlined paper, rotated $90^\circ$ counter-clockwise. Labeled `new` and `old` end-cap terms. Evaluated `new - old` as difference of magnitudes to obtain $\frac{1}{2}\rho \Delta V (v_2^2 - v_1^2)$.

### Tutor

The kinetic energy change of the slug is right:
$$\Delta K = \frac{1}{2}\rho \Delta V (v_2^2 - v_1^2)$$

*(One small bookkeeping note: write both end-cap kinetic energies as positive magnitudes and subtract once, $\Delta K = K_2 - K_1$. If "old" is already labeled with a minus sign, subtracting it again would formally create a double-negative; your final line correctly evaluated the difference of squares).*

---

Now we have both sides of the Work-Energy Theorem locked:
- **Work side:**
  $$W_{\text{net}} = (P_1 - P_2)\Delta V - \rho g \Delta V (y_2 - y_1)$$
- **Kinetic energy side:**
  $$\Delta K = \frac{1}{2}\rho \Delta V (v_2^2 - v_1^2)$$

The Work-Energy Theorem states:
$$W_{\text{net}} = \Delta K$$

Because the fluid is incompressible, a common volume element $\Delta V$ sits in every term.
Divide through by $\Delta V$ (giving the energy-density form in $\text{J}/\text{m}^3$), then collect all station-1 quantities on the left and all station-2 quantities on the right.

What relation do you get between $P$, $\rho$, $v$, $g$, and $y$ at the two stations?

### Turn 7 — 2026-09-10 (learner)

> [Image attachment: handwritten cancellation and assembly into Bernoulli's equation]
>
> **Handwritten transcript:**
> $$\Delta K = W_{\text{p}} + W_g$$
> $$\frac{1}{2}\rho \cdot \Delta V (v_2^2 - v_1^2) = -\rho \Delta V (y_2 - y_1) g + (P_1 - P_2)\Delta V$$
> *(\Delta V slashed out in all three terms)*
> $$-\frac{1}{2}\rho v_1^2 - \rho y_1 g - P_1 = -\frac{1}{2}\rho v_2^2 - \rho y_2 g - P_2$$
> $$\frac{1}{2}\rho v_1^2 + \rho g y_1 + P_1 = \frac{1}{2}\rho v_2^2 + \rho g y_2 + P_2$$
>
> **Visual / marks:** Written on unlined paper, rotated $90^\circ$ counter-clockwise. Each $\Delta V$ term is canceled with a diagonal stroke. Third line collects terms with negative signs; fourth line multiplies through by $-1$ to produce the standard positive sum (with a minor crossed-out scribble next to the plus sign on the right).

### Tutor

That is the complete two-station equation:
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g y_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g y_2$$

Because stations 1 and 2 were arbitrary points along the stream tube, this combination is conserved along the tube. Shrinking the cross-section to an infinitesimal filament ($A \to 0$) makes the quantities strictly local, yielding the streamline conservation law:
$$P + \frac{1}{2}\rho v^2 + \rho g y = C \quad (\text{along a given streamline})$$

Each term in this sum has dimensions of **energy density** ($\text{J}/\text{m}^3 = \text{N}/\text{m}^2$): $\frac{1}{2}\rho v^2$ is kinetic energy density, $\rho g y$ is gravitational potential energy density, and $P$ is boundary work per unit volume.

---

Before we return to the parent problem, we need to lock the boundaries of where this tool is valid (a major Physics GRE trap surface).

Looking back at the derivation steps you just completed (canceling $\Delta V$, dropping interior fluid changes, ignoring wall shear, and integrating along the tube):

1. What are the **4 non-negotiable physical assumptions** required for this equation to hold?
2. Under what condition is the constant $C$ the **same across different streamlines**?

### Turn 8 — 2026-09-10 (learner)

> Is the boundary important in GRE? If not, let's go to the drills part

### Tutor

Yes — ETS tests validity as **qualitative traps** rather than formal derivations:
- **The 4 non-negotiable assumptions:** steady flow ($\partial_t = 0$), incompressible ($\rho = \text{const}$), inviscid ($\eta = 0$, no shear dissipation), and evaluated along a streamline.
- **Across different streamlines:** The constant $C$ is identical across all streamlines if the flow is **irrotational** ($\nabla \times \mathbf{v} = 0$), or if all streamlines originate from a **common uniform quiescent reservoir** ($v \approx 0$).

Here is **Drill Batch 1** (Physics GRE level: mixed judgment, multi-step algebra, and trap checks).

---

#### Item 1
A horizontal pipe of circular cross-section carries an incompressible, inviscid liquid of density $\rho$. The pipe narrows from radius $R_1$ to radius $R_2 = \frac{R_1}{2}$. At the wide section, the flow speed is $v_1$ and static pressure is $P_1$.
1. In terms of $\rho$ and $v_1$, what is the static pressure difference $\Delta P = P_1 - P_2$ across the constriction?
2. Two vertical open standpipes (piezometers) are tapped into the centerline of section 1 and section 2, open to the atmosphere. Liquid of density $\rho$ rises into each pipe to heights $h_1$ and $h_2$. Which column is higher, and what is the height difference $\Delta h = |h_1 - h_2|$ in terms of the given parameters?

#### Item 2
A large open-top cylindrical water tank of cross-sectional area $A$ is filled with an ideal liquid to depth $H$. A small hole of area $a \ll A$ is punctured in the side wall at the bottom, discharging horizontally into the atmosphere.
1. What is the discharge speed $v_{\text{exit}}$ in terms of $g$ and $H$?
2. Justify why the same Bernoulli constant can be equated between a point on the top free surface and a point in the exit jet, despite them not sharing an obvious single streamline.

#### Item 3
A horizontal pipe of uniform cross-section (diameter $D$, length $L$) carries fluid at a steady volume flow rate $Q$.
- **Case A:** The fluid is ideal (inviscid $\eta = 0$, incompressible).
- **Case B:** The fluid is real, with dynamic viscosity $\eta > 0$ and laminar flow.

For each case, state whether the static pressure drop along the pipe, $\Delta P = P_{\text{inlet}} - P_{\text{outlet}}$, is zero, positive, or negative, and identify which assumption of Bernoulli's equation is satisfied or violated.

### Turn 9 — 2026-09-11 (learner)

> Continue to 60_Learning_Progress/Classical Mechanics/2026-09-10-1522 Bernoulli equation
> Let's take it one step at a time [Image #1, 1171x1568]
>
> **Handwritten transcript:**
> $$R_1 \to R_2 = \frac{1}{2} R_1 \qquad \rho,\ v_1,\ \Delta P = P_1 - P_2$$
> $$v_1 A_1 = v_2 A_2$$
> $$v_2 = \frac{A_1}{A_2} v_1 = \left(\frac{R_1}{R_2}\right)^2 v_1 = 4 v_1$$
> $$P = C - \frac{1}{2}\rho v^2 + \rho g y$$
> $$P_1 = C - \frac{1}{2}\rho v_1^2 + \rho g y_1$$
> $$P_2 = C - \frac{1}{2}\rho v_2^2 + \rho g y_2$$
> $$\Delta P = P_1 + P_2 = C - C - \frac{1}{2}\rho v_1^2 + \frac{1}{2}\rho \cdot 16 v_1^2 + \rho g y_1 - \rho g y_2$$
> $$= \frac{15}{2}\rho v_1^2 + \rho g (y_1 - y_2)$$
>
> **Visual / marks:** Unlined paper, writing rotated $90^\circ$ (photo orientation). Small two-step pipe sketch (wide $\to$ narrow) at the start of the page. Continuity chain written first, then Bernoulli solved for $P$ with a plus in front of $\rho g y$. Label $\Delta P = P_1 + P_2$ (plus written), but the expanded line is the algebra of $P_1 - P_2$ ($C$ cancels; kinetic substitution $v_2^2 = 16 v_1^2$).

### Tutor

Continuity is locked: $A \propto R^2$, so $v_2 = (R_1/R_2)^2 v_1 = 4 v_1$ and $v_2^2 = 16 v_1^2$. That $16$ in the kinetic term is the right substitution.

Stop at the rearrangement. Last session you had
$$P + \frac{1}{2}\rho v^2 + \rho g y = C$$
You wrote $P = C - \frac{1}{2}\rho v^2 + \rho g y$.

Solve that conserved sum for $P$. What sign sits in front of $\rho g y$?

### Turn 10 — 2026-09-11 (learner)

> [Image attachment: handwritten Bernoulli rearrangement with corrected gravity sign]
>
> **Handwritten transcript:**
> $$P = C - \frac{1}{2}\rho v^2 - \rho g y$$
> $$P_1 = C - \frac{1}{2}\rho v_1^2 - \rho g y_1$$
> $$P_2 = C - \frac{16}{2}\rho v_1^2 - \rho g y_2$$
> $$\Delta P = P_1 - P_2$$
> $$= \frac{15}{2}\rho v_1^2 + \rho g (y_2 - y_1)$$
>
> **Visual / marks:** Unlined paper, upright. Gravity terms now all minus. $P_2$ kinetic coefficient written as $\frac{16}{2}$ (i.e. $\frac{1}{2}\times 16$). $\Delta P$ labeled as $P_1 - P_2$ (minus, not plus). Gravity leftover flipped to $\rho g(y_2 - y_1)$ relative to Turn 9.

### Tutor

The minus is right:
$$P = C - \frac{1}{2}\rho v^2 - \rho g y$$
and $\Delta P = P_1 - P_2$ is the difference you actually want. The kinetic piece $\frac{15}{2}\rho v_1^2$ follows from $\frac{1}{2}\rho(16-1)v_1^2$.

Look at Item 1 again: the pipe is **horizontal**, and part 1 asks for $\Delta P$ in terms of $\rho$ and $v_1$ only.

What does that do to the leftover $\rho g(y_2 - y_1)$?

### Turn 11 — 2026-09-11 (learner)

> it turns out 0

### Tutor

Yes. Horizontal means $y_1 = y_2$, so that term is identically zero.

Part 1 is then
$$\Delta P = P_1 - P_2 = \frac{15}{2}\rho v_1^2$$
Faster fluid at the constriction, lower static pressure — Venturi.

Part 2: two open standpipes tapped into the centerline. The liquid in each vertical tube is **at rest**. At a free surface open to the atmosphere, $P = P_{\text{atm}}$.

If the fluid in a standpipe is hydrostatic, how is the rise height $h$ related to the static pressure $P$ at the tap?


### Turn 12 — 2026-09-11 (learner)

> [Image attachment: handwritten hydrostatic / piezometer argument]
>
> **Handwritten transcript:**
> Two vertical strokes (standpipes).
> $$\rho g h + \frac{1}{2}\rho v^2 + P = C$$
> hydrostatic $\to v = 0$
> $$\rho g h + P = C$$
> $$P = C - \rho g h$$
> $$\to P \uparrow,\ h \downarrow$$
> inversely proportional
>
> **Visual / marks:** Unlined paper, upright. Word "this" crossed out before "inversely proportional." Arrows drawn on $P$ (up) and $h$ (down).

### Tutor

$v=0$ in the standpipe is the right call, and $P + \rho g y = C$ along a static column is just hydrostatics.

The inverse reading is the mix-up. $P = C - \rho g y$ says: **higher point, lower pressure**, along one already-filled column. The piezometer height $h$ is a different quantity: how far the **free surface** sits above the tap. That free surface is always at $P_{\text{atm}}$.

Two points in one standpipe, both at rest:

```
  P = P_atm
  ~~~~          y = y_tap + h
  |  |
  |  |          v = 0
--+--  tap      P = P_pipe, y = y_tap
======          flowing pipe
```

Equate $P + \rho g y$ at the free surface and at the tap. What is $P_{\text{pipe}}$ in terms of $P_{\text{atm}}$ and $h$?


### Turn 13 — 2026-09-11 (learner)

> P_pipe = P_atm + ⍴gh

### Tutor

Right: $P_{\text{pipe}} = P_{\text{atm}} + \rho g h$, so $h = (P_{\text{pipe}} - P_{\text{atm}})/(\rho g)$. Higher tap pressure, taller column — not inverse.

You already have $\Delta P = P_1 - P_2 = \frac{15}{2}\rho v_1^2$, and $P_1 > P_2$.

Which column is higher, and what is $\Delta h = |h_1 - h_2|$?


### Turn 14 — 2026-09-11 (learner)

> P1 - p2 = 15/2 pv1^2 = ⍴gh
> h = 15v1^2/2g

### Tutor

The algebra is right if that $h$ is the **difference**:
$$\Delta h = h_1 - h_2 = \frac{P_1 - P_2}{\rho g} = \frac{15 v_1^2}{2g}$$

You still owe the first half of the question. $P_1 > P_2$. Which standpipe is taller — the one on the wide section or the one on the constriction?


### Turn 15 — 2026-09-11 (learner)

> The one on the wide section? This is kind of counterintuitive

### Tutor

Yes — wide section. $P_1 > P_2$, so $h_1 > h_2$. Item 1 is locked.

The counterintuition is the garden-hose reflex: squeeze $\to$ higher pressure. That picture is a *jet into the atmosphere* (or the force to accelerate fluid out of a nozzle). Inside a closed pipe the standpipe does not read speed; it reads **static** pressure.

Continuity already forced $v_2 = 4 v_1$, so $\frac{1}{2}\rho v^2$ jumped. The sum $P + \frac{1}{2}\rho v^2$ is conserved (horizontal), so $P$ has to fall in the throat.

---

Item 2, part 1. Open tank, free surface at depth $H$ above a small hole ($a \ll A$) that discharges into the atmosphere.

Name $P$ and $v$ at two stations: the free surface, and the exit hole. What does $a \ll A$ tell you about the free-surface speed?


### Turn 16 — 2026-09-11 (learner)

> In my opinion, we have spending vast amounts of time doing "similar" drills rather than "more real" drills in references. Is it sufficient to close the session now?

### Tutor

Closing is fine. This session is not "done" against its own target, and that is allowed.

**Locked today:** Bernoulli as $W_{\text{net}}=\Delta K$ along a streamline; horizontal Venturi with $R_2=R_1/2$ giving $v_2=4v_1$ and $\Delta P=\frac{15}{2}\rho v_1^2$; piezometer $h=(P-P_{\mathrm{atm}})/(\rho g)$, taller on the wide side, $\Delta h=15 v_1^2/(2g)$.

**Not locked:** Torricelli (Item 2); inviscid-vs-viscous pressure drop in a uniform pipe (Item 3 — the GRE validity trap); the parent $r^4$ continuity coupling. You also never produced the four assumptions yourself; I stated them after you asked to skip to drills.

On "similar drills": we did **one** GRE-shaped item. The time was not a stack of lookalikes. It was one-step scaffolding, at your request, through three real slips:
1. Sign of $\rho g y$ when solving $P=C-\frac{1}{2}\rho v^2-\rho g y$, then a leftover gravity term on a **horizontal** pipe (the "in terms of $\rho$ and $v_1$" clause is the hint to drop it).
2. $P=C-\rho g y$ (higher *point*, lower $P$) misread as piezometer rise (higher *tap* $P$, taller column).
3. Garden-hose reflex: squeeze $\to$ higher static $P$. Closed-pipe throat: faster, **lower** static $P$.

Those are the patterns, not more Venturi clones. A "more real" next pass is Torricelli in one sitting, or a mixed page from Kahn / the official GRE book — not another Socratic walk through Item 1.

Stop here. Resume from Item 2 or from a book problem when you want it.

