---
type: learning-progress
topic: "Electric displacement D and linear dielectrics"
area: Electrodynamics
status: complete
created: 2026-09-20
tags:
  - physics
  - electrodynamics
  - dielectrics
  - displacement-field
  - boundary-conditions
  - gre-physics
---

# Electric displacement $\mathbf{D}$ and linear dielectrics

**Why this note exists:** Learner encountered a Physics GRE mistake book problem involving a dielectric of constant $K$ in contact with a conductor of surface charge density $\sigma$. The learner asked three sequential foundational questions:
1. Why $D = \sigma$?
2. Why $E = \sigma/(K\epsilon_0)$?
3. Why $P = \epsilon_0(K-1)E$?

**Target:**
1. Understand why displacement field $\mathbf{D}$ decouples from bound charge via Gauss's law for free charges ($\oint \mathbf{D}\cdot d\mathbf{a} = Q_{\text{free}}$), giving $D = \sigma$.
2. Master the linear constitutive relation $\mathbf{D} = \epsilon\mathbf{E} = K\epsilon_0\mathbf{E}$ and understand how dielectric screening reduces $E$.
3. Understand the relation $\mathbf{D} = \epsilon_0\mathbf{E} + \mathbf{P}$ and how it yields polarization $P = \epsilon_0(K-1)E$.
4. Reconcile the bound surface charge $\sigma_p = \mathbf{P}\cdot\hat{\mathbf{n}} = -P = \sigma\frac{1-K}{K}$ with physical screening.

### Prior context
- **Already computable:** Bound charge formulas $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$ and $\rho_b = -\nabla\cdot\mathbf{P}$ ([[2026-09-19-1816 Polarization and bound surface charge density]]); boundary condition on normal $E$ across charged sheets ([[2026-09-15-0916 Boundary condition on normal E]]); capacitor energy with dielectric insertion.
- **What broke:** In Gauss's law for the electric field, $\oint \mathbf{E}\cdot d\mathbf{a} = \frac{Q_{\text{total}}}{\epsilon_0}$, the total charge includes induced bound charge $Q_b$. But $Q_b$ is caused by the electric field itself, creating a circular dependence where $Q_{\text{total}}$ is unknown until $\mathbf{E}$ is solved.
- **New object had to:** An auxiliary field $\mathbf{D}$ whose flux depends strictly on free charges ($\oint \mathbf{D}\cdot d\mathbf{a} = Q_{\text{free}}$), bypassing the unknown bound charges entirely.

---

## Context (Images Transcribed)

### Image #1 — Problem Statement & Diagram
**Item prompt:**
"A dielectric of dielectric constant $K$ is placed in contact with a conductor having surface charge density $\sigma$, as shown above. What is the polarization (bound) charge density $\sigma_p$ on the surface of the dielectric at the interface between the two materials?"

**Diagram:**
A cross-sectional view of two planar media in contact at a horizontal boundary:
- Top region labeled: "Dielectric $K$". Just above the boundary, bound surface charge density is marked $\sigma_p$ with diagonal hatching angled up-right.
- Bottom region labeled: "Conductor". Just below the boundary, surface charge density is marked $\sigma$ with diagonal hatching angled up-right.
- An arrow on the right points to the dividing line and is labeled "Interface".

**Options:**
- A: $\sigma \frac{K}{1 - K}$
- B: $\sigma \frac{K}{1 + K}$
- C: $\sigma K$
- D: $\sigma \frac{1 + K}{K}$
*(Choice E cut off in Image #1, detailed in Image #2).*

### Image #2 — Timing & Solution from Mistake Book
**Timing banner:** "111 s — over pace (target 103 s)"
**Rating buttons:** "How did it go? Knew it [K] / Guessed [G] / Too slow [T] / Forgot something [F]"
**Note banner:** "filed as a lucky guess in your mistake book"

**SOLUTION:**
"Gauss's law for the free charge fixes the displacement in the dielectric at $D = \sigma$, so $E = \sigma/(K\epsilon_0)$ and the polarization is $P = \epsilon_0(K - 1)E = \sigma\frac{K - 1}{K}$, pointing from the positive conductor into the dielectric. The bound surface charge is $\sigma_p = \vec{P}\cdot\hat{n}$; at the interface the dielectric's outward normal $\hat{n}$ points toward the conductor, opposite $\vec{P}$, so $\sigma_p = -P = \sigma\frac{1 - K}{K}$. The result is negative, as it must be to partially screen the free charge, giving choice (E)."

---

## Turns

### Turn 1 — 2026-09-20 (learner)

> 1. Why D = σ?
> 2. Why E = σ/(Kε0)?
> 3. WHy P=ϵ0(K−1)E?

### Tutor

These three relations form a clean sequential chain:
1. **Free charge fixes $D$** (via Gauss's law for displacement).
2. **Dielectric constant $K$ fixes $E$** (via the linear constitutive relation).
3. **Dipole response gives $P$** (via the definition $\mathbf{D} = \epsilon_0\mathbf{E} + \mathbf{P}$).

Let's look at the foundational step first: **Why $D = \sigma$?**

In ordinary Gauss's law, $\oint \mathbf{E}\cdot d\mathbf{a} = \frac{Q_{\text{total}}}{\epsilon_0} = \frac{Q_{\text{free}} + Q_{\text{bound}}}{\epsilon_0}$. This is difficult to use directly because the bound charge $Q_{\text{bound}}$ is induced by the field and unknown in advance. The displacement field $\mathbf{D}$ was invented specifically to bypass this circularity by depending **only on free charge**:
$$\oint \mathbf{D}\cdot d\mathbf{a} = Q_{\text{free, encl}}$$

Draw a tiny Gaussian pillbox of area $A$ straddling the interface:
- The bottom face is inside the conductor, where electrostatic fields vanish: $\mathbf{D} = \mathbf{0}$.
- The top face of area $A$ sits in the dielectric just above the interface.
- The enclosed **free** charge is solely the conductor's surface charge: $Q_{\text{free, encl}} = \sigma A$.

The flux integral gives:
$$D A - 0 = \sigma A \implies D = \sigma$$
Because $\mathbf{D}$ couples only to free charge, $D = \sigma$ holds regardless of what dielectric is placed there or how much bound charge develops!

---

Now, the dielectric responds linearly according to the constitutive relation:
$$\mathbf{D} = \epsilon \mathbf{E} = K \epsilon_0 \mathbf{E}$$

Using $D = \sigma$ and this definition of $K$, how does Question 2 ($E = \frac{\sigma}{K\epsilon_0}$) follow—and physically, why is $E$ smaller by a factor of $K$ compared to a vacuum ($K=1$)?

### Turn 2 — 2026-09-20 (learner)

> Okay, let's go back to the tutoring. 
> "Draw a tiny Gaussian pillbox of area straddling the interface:" Visualize this process

### Tutor

![[gaussian-pillbox-conductor-dielectric-interface.excalidraw|1000]]

The dashed cylinder cuts the interface: the top cap of area $A$ lies in the dielectric where $\mathbf{D}$ leaves normally, the bottom cap sits inside the conductor where $\mathbf{D} = \mathbf{0}$, and the cylindrical side walls have normals perpendicular to $\mathbf{D}$ (yielding zero side flux).

Notice that both the free surface charge $\sigma$ and the induced bound surface charge $\sigma_p$ sit right at that boundary cut. Looking at this geometry, why does the surface flux integral $\oint \mathbf{D}\cdot d\mathbf{a}$ depend solely on the free charge $\sigma A$ and completely ignore the bound charge $\sigma_p$?


### Turn 3 — 2026-09-20 (learner)

> How does d vector equals epsilon e vector equals kappa epsilon zero e vector? To my understanding, I think it is because polarization vector equals... What? I am confused. 
> The reason that E is smaller by a factor of kappa compared to vacuum is that the epsilon in the dielectric is larger than 1.
> I forgot how to calculate the area integral especially in the Gaussian's law. For example, I don't know why we need to minus a zero in the equation of d vector.
> Break down it into understandable steps. 
> Because in the definition of director, the polarization has been naturally included. So we can completely ignore the component distributed by the polarization.

### Tutor

Your intuition on $\mathbf{D}$ is spot on: because the definition of $\mathbf{D}$ already absorbs the material's polarization ($\mathbf{D} = \epsilon_0\mathbf{E} + \mathbf{P}$), its flux completely ignores the bound charge!

Here is the breakdown of the two pieces you asked about:

---

#### 1. The Pillbox Area Integral: Why $DA + 0 = \sigma A$

A closed cylindrical pillbox has three distinct boundary surfaces:
$$\oint_{\text{closed}} \mathbf{D}\cdot d\mathbf{a} = \int_{\text{top cap}} \mathbf{D}\cdot d\mathbf{a} + \int_{\text{bottom cap}} \mathbf{D}\cdot d\mathbf{a} + \int_{\text{sides}} \mathbf{D}\cdot d\mathbf{a}$$

Let's evaluate each surface individually:
1. **Top cap (area $A$, in the dielectric):**
   The outward surface normal points straight up: $d\mathbf{a} = +\hat{\mathbf{z}} dA$.
   The displacement field points straight up: $\mathbf{D} = D \hat{\mathbf{z}}$.
   $$\int_{\text{top cap}} \mathbf{D}\cdot d\mathbf{a} = \int D\, dA = D A$$

2. **Bottom cap (area $A$, inside the conductor):**
   In electrostatic equilibrium, mobile charges inside the conductor rearrange until the internal electric field completely vanishes: $\mathbf{E} = \mathbf{0}$ and $\mathbf{P} = \mathbf{0}$. Therefore:
   $$\mathbf{D}_{\text{inside conductor}} = \mathbf{0}$$
   Because $\mathbf{D} = \mathbf{0}$ everywhere on this face:
   $$\int_{\text{bottom cap}} \mathbf{D}\cdot d\mathbf{a} = 0$$
   *(Note on "minus zero": writing "$DA - 0$" in Turn 1 was shorthand for the jump condition $D_{\text{above}} - D_{\text{below}} = \sigma$, where $D_{\text{below}} = 0$. In standard flux integration, it is simply top flux $DA$ plus bottom flux $0$).*

3. **Side walls (cylinder height $h \to 0$):**
   As the pillbox height shrinks to zero, the side wall area vanishes ($2\pi r h \to 0$). Furthermore, the outward normal is horizontal ($\hat{\mathbf{r}} \perp \hat{\mathbf{z}}$), so $\mathbf{D}\cdot d\mathbf{a}_{\text{sides}} = 0$.

Adding the three surfaces gives the total flux:
$$\oint \mathbf{D}\cdot d\mathbf{a} = DA + 0 + 0 = DA$$
Gauss's law sets this equal to the enclosed **free** charge, $Q_{\text{free}} = \sigma A$:
$$DA = \sigma A \implies D = \sigma$$

---

#### 2. Connecting $\mathbf{D} = \epsilon\mathbf{E} = K\epsilon_0\mathbf{E}$ to $\mathbf{P}$

Here is the 4-step logical chain:

1. **The universal definition (always true, in any medium):**
   $$\mathbf{D} \equiv \epsilon_0 \mathbf{E} + \mathbf{P}$$

2. **Linear dielectric response:**
   In a linear dielectric, the induced polarization $\mathbf{P}$ is directly proportional to the total internal electric field $\mathbf{E}$:
   $$\mathbf{P} = \epsilon_0 \chi_e \mathbf{E}$$
   where $\chi_e$ is the dimensionless **electric susceptibility**.

3. **Substitute $\mathbf{P}$ into $\mathbf{D}$:**
   $$\mathbf{D} = \epsilon_0 \mathbf{E} + (\epsilon_0 \chi_e \mathbf{E}) = \epsilon_0 (1 + \chi_e) \mathbf{E}$$

4. **Group the constant as $K$ (dielectric constant) and $\epsilon$ (permittivity):**
   We define the **dielectric constant** $K$ (also called relative permittivity $\epsilon_r$) as:
   $$K \equiv 1 + \chi_e \implies \chi_e = K - 1$$
   And permittivity as $\epsilon \equiv K \epsilon_0$.
   Therefore:
   $$\mathbf{D} = K \epsilon_0 \mathbf{E} = \epsilon \mathbf{E}$$

Because $\mathbf{P} = \epsilon_0 \chi_e \mathbf{E}$ and $\chi_e = K - 1$, Question 3 immediately follows:
$$\mathbf{P} = \epsilon_0 (K - 1) \mathbf{E}$$

---

**Check question:**
Now you have the complete chain:
1. $D = \sigma$
2. $E = \frac{D}{K\epsilon_0} = \frac{\sigma}{K\epsilon_0}$
3. $P = \epsilon_0 (K - 1) E$

If you substitute $E = \frac{\sigma}{K\epsilon_0}$ into formula (3), what expression do you get for the polarization magnitude $P$ in terms of $\sigma$ and $K$?

### Turn 4 — 2026-09-20 (learner)

> 1. Please give me some drills (by you directly this time) regarding the area integral in Gaussian's law, both e vector or d vector are okay.
> 2. How can we deduce the direction of the director? Why did you directly give me the direction that it is the positive direction of z-axis? 
> 3. Conclude the characteristic of conductor for me and record it in the formula call (dispatch <model agent="m1" name="Grok 4.6"/> to '/Users/Reid Hu/Physics GRE' to complete this task and perform end2end verification). I want to keep this retention strongly. 
> 4. P = (kappa - 1) σ / kappa

### Tutor

#### 1. Checking Your Result for $P$
Your formula is completely correct:
$$P = \sigma \frac{K - 1}{K}$$
From here, the bound surface charge density at the interface is:
$$\sigma_p = \mathbf{P}\cdot\hat{\mathbf{n}}_{\text{dielectric}}$$
The dielectric's outward normal $\hat{\mathbf{n}}$ at the bottom boundary points downward toward the conductor ($-\hat{\mathbf{z}}$), while $\mathbf{P}$ points upward ($+\hat{\mathbf{z}}$). Therefore:
$$\sigma_p = P(-\hat{\mathbf{z}})\cdot\hat{\mathbf{z}} = -P = -\sigma\frac{K - 1}{K} = \sigma\frac{1 - K}{K}$$
Because $K > 1$, $\sigma_p$ is negative, partially screening the positive free charge $\sigma$. This matches choice (E) in your mistake book!

---

#### 2. Deducing the Direction of $\mathbf{D}$
How do we know $\mathbf{D}$ points in the $+\hat{\mathbf{z}}$ direction?
1. **Source of $\mathbf{D}$:** Gauss's law states $\nabla\cdot\mathbf{D} = \rho_{\text{free}}$. $\mathbf{D}$-field lines begin on positive free charge ($+\sigma$) and end on negative free charge.
2. **Planar symmetry:** For a uniform flat sheet in the $xy$-plane, translation and $180^\circ$ rotation about the normal prohibit any tangential components ($D_x = 0, D_y = 0$). $\mathbf{D}$ must be perpendicular to the surface.
3. **Conductor interior:** Inside the conductor ($z < 0$), mobile charges have fully screened internal fields: $\mathbf{E} = \mathbf{0}, \mathbf{P} = \mathbf{0} \implies \mathbf{D} = \mathbf{0}$.
4. **Boundary condition:** The normal jump across a surface with free charge density $\sigma$ is:
   $$D_{z,\text{above}} - D_{z,\text{below}} = \sigma$$
   With $D_{z,\text{below}} = 0$, this requires $D_{z,\text{above}} = +\sigma > 0$.
   Therefore, $\mathbf{D} = +\sigma\hat{\mathbf{z}}$, pointing outward from the positive conductor into the dielectric. (If the conductor had negative charge $-\sigma$, $\mathbf{D}$ would point in the $-\hat{\mathbf{z}}$ direction).

---

#### 3. Conductor Characteristics & Formula Card Record
Grok 4.6 was dispatched to `/Users/Reid Hu/Physics GRE` and added card `cpgf-2.15a` to `js/data-formulas.js`:

- **Card ID:** `cpgf-2.15a` (Topic: `em`, Tag: `Conductors`)
- **Name:** "Electrostatic properties of an ideal conductor"
- **5 Invariants:**
  1. $\mathbf{E} = \mathbf{0}$ inside the conductor everywhere in electrostatic equilibrium.
  2. Bulk charge density $\rho = 0$ inside (any excess charge resides strictly on the outer surface $\sigma$).
  3. Equipotential volume: $V = \text{constant}$ throughout the entire conductor and on its surface.
  4. Surface normal field: Immediately outside, $\mathbf{E} = \frac{\sigma}{\epsilon_0}\hat{\mathbf{n}}$ and $\mathbf{D} = \sigma\hat{\mathbf{n}}$ (tangential field vanishes, $E_\parallel = 0$).
  5. Cavity shielding: In a charge-free hollow cavity inside a conductor, $\mathbf{E} = \mathbf{0}$, completely isolated from external fields.
- **End-to-end verification:** Syntax check (`node --check js/data-formulas.js`) passed; formula export test suite (`node tools/test-formula-export.js`) passed all 65 tests.

---

#### 4. Drill Batch 1 — Area Integrals in Gauss's Law ($\mathbf{E}$ and $\mathbf{D}$)

**Item 1: Planar Sheet vs. Conductor Pillbox**
Consider two different configurations carrying the same surface charge density $\sigma > 0$:
- **System A:** An isolated, infinitely thin non-conducting sheet in vacuum.
- **System B:** The surface of a thick conducting block in vacuum.
Using a cylindrical Gaussian pillbox of cross-sectional area $A$ with flat caps parallel to the surface:
1. Write the flux $\oint \mathbf{E}\cdot d\mathbf{a}$ through the two end-caps for System A and find $E$.
2. Write the flux $\oint \mathbf{E}\cdot d\mathbf{a}$ through the two end-caps for System B and find $E$.
3. Why is the field just outside the conductor ($E = \sigma/\epsilon_0$) exactly twice the field of the isolated sheet ($E = \sigma/(2\epsilon_0)$)?

**Item 2: Spherical Dielectric Shell and Bound Charge**
A solid conducting sphere of radius $a$ carries total free charge $+Q$. It is concentric with a spherical linear dielectric shell of dielectric constant $K$ extending from $r = a$ to $r = b$.
1. Draw a spherical Gaussian surface of radius $r$ with $a < r < b$. Evaluate $\oint \mathbf{D}\cdot d\mathbf{a}$ and solve for $\mathbf{D}(r)$.
2. Using $\mathbf{D} = K\epsilon_0\mathbf{E}$, find $\mathbf{E}(r)$ inside the dielectric ($a < r < b$).
3. Find the polarization $\mathbf{P}(r)$ in the shell, and compute the total bound surface charge $Q_{b,\text{inner}}$ induced at the inner interface $r = a$.

**Item 3: Cylindrical Surface with Non-Uniform Charge**
An infinitely long non-conducting rod of radius $R$ carries non-uniform volume charge density $\rho(s) = \rho_0 \frac{s}{R}$, where $s$ is the distance from the cylindrical axis.
Consider a co-axial cylindrical Gaussian surface of radius $s < R$ and length $L$:
1. Explain why the flux through the two circular flat end-caps is zero.
2. Express the flux through the curved mantle of area $2\pi s L$ in terms of $E(s)$.
3. Evaluate the enclosed charge $Q_{\text{encl}} = \int \rho\, dV$ inside the Gaussian cylinder, and solve for $E(s)$.

### Turn 5 — 2026-09-20 (learner)

> [Image attachment: Handwritten calculations for Drill Item 1 (4.1, 4.2)]
>
> **Transcribed work:**
> $$4.1.\quad \oint \vec{E}_A \cdot d\vec{S} = \frac{Q_{\text{enc},A}}{\epsilon_0}$$
> $$\int_{\text{top}} \vec{E}_A\cdot d\vec{S} + \int_{\text{bottom}} \vec{E}_A\cdot d\vec{S} + \int_{\text{sides}} \vec{E}_A\cdot d\vec{S} = \frac{\sigma S}{\epsilon_0}$$
> $$\underbrace{E_A S}_{\text{top}} + \underbrace{(+E_A S)}_{\text{bottom}} + 0 = \frac{\sigma S}{\epsilon_0} \implies \vec{E}_A = \frac{\sigma}{2\epsilon_0}\hat{n}$$
>
> $$4.2.\quad \int_{\text{top}} \vec{E}_B\cdot d\vec{S} + \int_{\text{bottom}} \vec{E}_B\cdot d\vec{S} + \int_{\text{sides}} \vec{E}_B\cdot d\vec{S} = \frac{Q_{\text{enc},B}}{\epsilon_0}$$
> $$E_B S + 0 + 0 = \frac{\sigma S}{\epsilon_0} \implies E_B = \begin{cases} \frac{\sigma}{\epsilon_0} & (\text{outside the conductor}) \\ 0 & (\text{inside the conductor}) \end{cases}$$
>
> 4.3 Because the electrical field inside the conductor is 0, which doesn't distribute to the total enclosed charge, leading to the 2 coefficient.

### Tutor

Your handwritten derivations for **4.1** and **4.2** are completely rigorous and correct.

**Sharpening 4.3 (The two complementary ways to see the factor of 2):**
1. **The Gauss Pillbox perspective (Flux across 1 face vs. 2 faces):**
   For the isolated sheet, the charge $\sigma S$ has flux escaping symmetrically through **two** end-caps ($2 E_A S$), splitting the field into both half-spaces ($E = \frac{\sigma}{2\epsilon_0}$). For the conductor, because $\mathbf{E} = \mathbf{0}$ inside the metal, **all** electric flux is channeled through the **single** outside face ($1 E_B S = \frac{\sigma S}{\epsilon_0} \implies E_B = \frac{\sigma}{\epsilon_0}$).

2. **The Superposition perspective (Local sheet vs. Rest of conductor):**
   Any local patch of surface charge $\sigma$ naturally produces a field $\frac{\sigma}{2\epsilon_0}$ pointing away from it on both sides. In a conductor, all the *other* charges in the system arrange themselves to create an additional field of exactly $\frac{\sigma}{2\epsilon_0}$ pointing outward:
   - **Inside the metal:** $\mathbf{E}_{\text{patch}} + \mathbf{E}_{\text{rest}} = -\frac{\sigma}{2\epsilon_0} + \frac{\sigma}{2\epsilon_0} = \mathbf{0}$ (exact cancellation).
   - **Just outside:** $\mathbf{E}_{\text{patch}} + \mathbf{E}_{\text{rest}} = +\frac{\sigma}{2\epsilon_0} + \frac{\sigma}{2\epsilon_0} = \frac{\sigma}{\epsilon_0}$ (reinforcement).

---

Now let's move to **Item 2: Spherical Dielectric Shell and Bound Charge**
A solid conducting sphere of radius $a$ carries total free charge $+Q$, surrounded by a concentric linear dielectric shell of constant $K$ extending from $r = a$ to $r = b$.
1. Using a spherical Gaussian surface of radius $r$ ($a < r < b$), evaluate $\oint \mathbf{D}\cdot d\mathbf{a}$ and solve for $\mathbf{D}(r)$.
2. Using $\mathbf{D} = K\epsilon_0\mathbf{E}$, find $\mathbf{E}(r)$ inside the dielectric ($a < r < b$).
3. Find $\mathbf{P}(r)$ in the shell, and compute the total bound surface charge $Q_{b,\text{inner}}$ on the inner surface at $r = a$.

### Turn 6 — 2026-09-20 (learner)

> [Image attachment: Handwritten calculations for Drill Item 2 (spherical dielectric shell)]
>
> **Transcribed work:**
> Top sketch: concentric circles $a$ (inner), $b$ (outer), charge $+Q$ on inner sphere.
>
> $$1.\quad \oint_r \vec{D}\cdot d\vec{S} = Q_{\text{free, enclosed}}$$
> $$D(r)\cdot 4\pi r^2 = Q \implies D(r) = \frac{Q}{4\pi r^2}\quad (a < r < b)$$
>
> $$2.\quad K\epsilon_0 E(r) = D(r) = \frac{Q}{4\pi r^2} \implies E(r) = \frac{Q}{4\pi\epsilon_0 K r^2}\quad (a < r < b)$$
>
> $$3.\quad \vec{D}(r) = \epsilon_0 \vec{E}(r) + \vec{P}(r)\quad \text{where } E(r) = \frac{D(r)}{K\epsilon_0}$$
> $$\vec{P}(r) = \vec{D}(r) - \epsilon_0 \vec{E}(r) = \left(1 - \frac{1}{K\epsilon_0}\cdot\epsilon_0\right)\vec{D}(r) = \frac{K-1}{K}\frac{Q}{4\pi r^2}\hat{\mathbf{r}}$$
>
> $$\oint_S (\epsilon_0\vec{E} + \vec{P})\cdot d\vec{S} = Q_{\text{free, enc}}$$
> $$\oint_S \vec{E}\cdot d\vec{S} = \frac{Q_{\text{free}} + Q_{\text{bound}}}{\epsilon_0}$$
> $$\rightarrow Q_{\text{bound}} = \oint \vec{P}\cdot d\vec{S} = \frac{K-1}{K}Q$$

### Tutor

Your derivations for **1**, **2**, and the formula for **$\mathbf{P}(r)$ in 3** are completely flawless:
1. $D(r) = \frac{Q}{4\pi r^2}\hat{\mathbf{r}}$ (cleanly isolating free charge $Q$).
2. $E(r) = \frac{Q}{4\pi\epsilon_0 K r^2}\hat{\mathbf{r}}$ (shielded by factor of $K$).
3. $\mathbf{P}(r) = \frac{K-1}{K}\frac{Q}{4\pi r^2}\hat{\mathbf{r}}$.

---

#### The Trap in Step 3: The Sign of $Q_{\text{bound}}$
Look at your last two equations:
$$\epsilon_0 \oint \mathbf{E}\cdot d\mathbf{S} + \oint \mathbf{P}\cdot d\mathbf{S} = Q_{\text{free}}$$
Substitute $\epsilon_0 \oint \mathbf{E}\cdot d\mathbf{S} = Q_{\text{free}} + Q_{\text{bound}}$:
$$(Q_{\text{free}} + Q_{\text{bound}}) + \oint \mathbf{P}\cdot d\mathbf{S} = Q_{\text{free}}$$
Subtract $Q_{\text{free}}$ from both sides:
$$Q_{\text{bound}} + \oint \mathbf{P}\cdot d\mathbf{S} = 0 \implies Q_{\text{bound}} = -\oint \mathbf{P}\cdot d\mathbf{S}$$

There is a **minus sign**!

**Why this must be negative (Two Perspectives):**
1. **Surface normal perspective ($\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$):**
   At the inner boundary ($r = a$), the dielectric lies at $r > a$. The outward unit normal pointing **out of the dielectric** (into the inner cavity) points inward toward the center:
   $$\hat{\mathbf{n}}_{\text{dielectric}} = -\hat{\mathbf{r}}$$
   Because $\mathbf{P}(a)$ points outward ($+\hat{\mathbf{r}}$):
   $$\sigma_b(a) = \mathbf{P}(a)\cdot(-\hat{\mathbf{r}}) = -\frac{K-1}{K}\frac{Q}{4\pi a^2}$$
   Multiplying by surface area $4\pi a^2$ gives:
   $$Q_{b,\text{inner}} = -\frac{K-1}{K}Q$$

2. **Physical screening invariant:**
   The central sphere has positive free charge $+Q$. The electric field pulls the electrons of the dielectric atoms inward, depositing a **negative** bound charge layer at the inner surface $r = a$.
   The net enclosed charge inside radius $r$ is:
   $$Q_{\text{net}} = Q_{\text{free}} + Q_{b,\text{inner}} = Q - \frac{K-1}{K}Q = \frac{Q}{K}$$
   which explains why the electric field is reduced by exactly $1/K$:
   $$E(r) = \frac{Q_{\text{net}}}{4\pi\epsilon_0 r^2} = \frac{Q/K}{4\pi\epsilon_0 r^2} = \frac{Q}{4\pi\epsilon_0 K r^2}$$
*(This trap has been recorded in `60_Learning_Progress/Trap-Log.md`).*

---

Now let's tackle the final item:
**Item 3: Non-Uniform Cylindrical Volume Charge**
An infinitely long non-conducting rod of radius $R$ carries non-uniform volume charge density $\rho(s) = \rho_0 \frac{s}{R}$ ($s$ is distance from the axis).
For a co-axial cylindrical Gaussian surface of radius $s < R$ and length $L$:
1. Explain why the flux through the two circular flat end-caps is zero.
2. Write the flux through the curved mantle of area $2\pi s L$ in terms of $E(s)$.
3. Evaluate the enclosed charge $Q_{\text{encl}} = \int \rho\, dV$, and solve for $E(s)$.

### Turn 7 — 2026-09-20 (learner)

> Let's finish this thread now

### Tutor

#### Item 3 Solution (For Complete Reference)
1. **Flat End-Caps Flux:**
   By axial translation symmetry along $\hat{\mathbf{z}}$ and rotational symmetry about the cylinder axis, the electric field is strictly radial: $\mathbf{E} = E(s)\hat{\mathbf{s}}$. The flat end-caps have normals parallel to the axis ($\pm\hat{\mathbf{z}}$). Because $\mathbf{E}\cdot\hat{\mathbf{n}} = E(s)\hat{\mathbf{s}}\cdot(\pm\hat{\mathbf{z}}) = 0$, the flux through both end-caps is identically zero: $\Phi_{\text{caps}} = 0$.

2. **Curved Mantle Flux:**
   The outward normal of the curved cylinder mantle is $\hat{\mathbf{s}}$, perfectly parallel to $\mathbf{E}$. By cylindrical symmetry, $E(s)$ is uniform across the mantle:
   $$\int_{\text{mantle}} \mathbf{E}\cdot d\mathbf{a} = E(s) \cdot (2\pi s L)$$

3. **Enclosed Charge & Field:**
   $$Q_{\text{encl}} = \int_0^L dz \int_0^{2\pi} d\phi \int_0^s \left(\rho_0 \frac{s'}{R}\right) s' ds' = 2\pi L \frac{\rho_0}{R} \left[\frac{s'^3}{3}\right]_0^s = \frac{2\pi \rho_0 L s^3}{3R}$$
   Equating flux to $Q_{\text{encl}}/\epsilon_0$:
   $$E(s) \cdot 2\pi s L = \frac{2\pi \rho_0 L s^3}{3\epsilon_0 R} \implies \mathbf{E}(s) = \frac{\rho_0 s^2}{3\epsilon_0 R}\hat{\mathbf{s}}\quad (s < R)$$

---

## Session Summary & Mastery

In this session, you grounded and verified:
1. **Gauss's law for $\mathbf{D}$:** $\oint \mathbf{D}\cdot d\mathbf{a} = Q_{\text{free}}$ decouples displacement from unknown bound charges. Using a pillbox straddling the conductor interface gives $D = \sigma$ directly because $\mathbf{D}_{\text{in}} = \mathbf{0}$.
2. **Screened electric field:** $\mathbf{D} = K\epsilon_0\mathbf{E} \implies E = \frac{\sigma}{K\epsilon_0}$, showing how dielectric screening reduces $E$ by $1/K$.
3. **Polarization magnitude:** $\mathbf{D} = \epsilon_0\mathbf{E} + \mathbf{P} \implies P = \epsilon_0(K-1)E = \sigma\frac{K-1}{K}$.
4. **Bound surface charge:** $\sigma_p = \mathbf{P}\cdot\hat{\mathbf{n}} = -P = \sigma\frac{1-K}{K}$ (negative charge partially screening the positive free charge, matching choice E).
5. **Conductor electrostatic invariants:** Fully concluded and committed to Prep Studio formula card `cpgf-2.15a` via Grok 4.6 with 65/65 tests passing.
6. **Drill items debriefed:** Planar pillbox (sheet vs. conductor $E$), spherical dielectric shell ($D, E, P$, and the inner bound charge sign invariant $Q_{b,\text{inner}} = -\frac{K-1}{K}Q$), and non-uniform cylindrical charge.
