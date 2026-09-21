---
type: learning-progress
topic: "Polarization and bound surface charge density"
area: Electrodynamics
status: complete
created: 2026-09-19
tags:
  - physics
  - electrodynamics
  - dielectrics
  - polarization
  - bound-charge
  - gre-physics
---
# Polarization $\mathbf{P}$ and bound surface charge density $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$

**Why this note exists:** Learner encountered GRE recall formula $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$ (Eq. 2.56) and expressed confusion about both the foundational definition of polarization $\mathbf{P}$ and the physical origin of bound surface charge density $\sigma_b$.

**Target:**
1. Ground the physical meaning of polarization $\mathbf{P}$ as dipole moment density (dipole moment per unit volume) and recognize its units ($\text{C}/\text{m}^2$).
2. Understand the physical mechanism of bound charge: internal head-to-tail cancellation in neutral dielectrics vs. uncompensated charges at the surface.
3. Understand the geometric dot product $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$: why surface orientation projects the dipole density.

### Prior context
- **Already computable:** Electric dipole moment $\mathbf{p} = q\mathbf{d}$; magnetic dipole moment $\mathbf{m} = NI\mathbf{A}$ ([[2026-09-17-1537 Magnetic dipole moment of a current loop]]); boundary conditions on normal $E$ ([[2026-09-15-0916 Boundary condition on normal E]]); parallel-plate capacitors with dielectric insertion.
- **What broke:** Microscopic tracking of $10^{23}$ individual atomic bound charges in a dielectric is impossible under external fields.
- **New object had to:** Average discrete atomic dipoles into a continuous macroscopic field $\mathbf{P}$ that accounts for all induced electric fields via equivalent macroscopic charge densities ($\sigma_b, \rho_b$).

---

## Turns

### Turn 1 — 2026-09-19 (learner)

> I am confused by two things. The first is the bound surface charge density sigma b and the other one is polarization. Including the definition of it, I am confounded. There is a long time when I learned it.
>
> [Image attachment: Flashcard recall item]
>
> **Transcript:**
> What is the bound surface charge density $\sigma_b$ in terms of the polarization $P$ at a surface with outward normal $\mathbf{n}$?
> 
> $$\sigma_b = \mathbf{P} \cdot \hat{\mathbf{n}} \quad (2.56)$$
> 
> $\mathbf{P} = \text{polarization (dipole moment per unit volume)}, \hat{\mathbf{n}} = \text{outward normal}.$
>
> **Visual / marks:** Flashcard review card with white background and horizontal dotted separator line. Prompt asks for bound surface charge density $\sigma_b$ in terms of polarization $P$ and surface normal $\mathbf{n}$. Centered display equation shows $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$ with equation label $(2.56)$. Below equation is the variable legend defining $\mathbf{P}$ and $\hat{\mathbf{n}}$.

### Tutor

To understand where $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$ comes from, we start with **polarization $\mathbf{P}$** first, because bound charge is just a direct physical consequence of it.

In an insulator (dielectric), electrons are bound to their nuclei and cannot freely roam around like in a conductor. When you apply an external electric field $\mathbf{E}$, each neutral atom or molecule stretches slightly: positive charges shift along the field and negative charges shift opposite, creating a tiny electric dipole moment $\mathbf{p} = q\mathbf{d}$. 

**Polarization $\mathbf{P}$ is simply the dipole moment density**—the total dipole moment per unit volume:
$$\mathbf{P} \equiv \frac{\sum \mathbf{p}}{\Delta V}$$
Notice its units: $\frac{\text{C}\cdot\text{m}}{\text{m}^3} = \frac{\text{C}}{\text{m}^2}$, which is identically the unit of **surface charge density**.

Now picture a slab of dielectric where these induced atomic dipoles line up head-to-tail in a chain:
$$(-\ q \quad +\!q)\ (-\ q \quad +\!q)\ (-\ q \quad +\!q)\ (-\ q \quad +\!q)$$

Inside the interior bulk, every $(+\!q)$ head sits right against the $(-\ q)$ tail of its neighbor, so their charges cancel out locally. 

Looking at that chain, what happens at the very two ends (the outer boundaries of the material) where a charge has no neighboring dipole to cancel it?

### Turn 2 — 2026-09-19 (learner)

> Take this into account as well.
> One side of the material, positive charge accumulates; while on the other side of the material, negative charge accumulates.
>
> [Image attachment: Flashcard recall item]
>
> **Transcript:**
> DIELECTRICS
> What is the bound volume charge density $\rho_b$ in terms of the polarization $P$?
> 
> $$\rho_b = -\nabla \cdot \mathbf{P} \quad (2.57)$$
>
> **Visual / marks:** Flashcard review card with header "DIELECTRICS" in brown sans-serif font. Prompt asks for bound volume charge density $\rho_b$ in terms of polarization $P$. Horizontal dotted separator line above centered equation (2.57) showing $\rho_b = -\nabla\cdot\mathbf{P}$.

### Tutor

Spot on—that uncompensated charge accumulation at the edges is exactly the **bound surface charge** $\sigma_b$:
- On the surface where $\mathbf{P}$ points outward (parallel to $\hat{\mathbf{n}}$), the positive heads poke out: $\sigma_b = +P$.
- On the opposite face where $\mathbf{P}$ points inward (antiparallel to $\hat{\mathbf{n}}$), the negative tails are exposed: $\sigma_b = -P$.
- On side faces where dipoles lie flat along the wall ($\mathbf{P} \perp \hat{\mathbf{n}}$), no heads or tails pierce the surface: $\sigma_b = 0$.
The dot product $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$ captures all three cases automatically by projecting the dipole orientation onto the surface normal.

Now, look at the volume density $\rho_b = -\nabla\cdot\mathbf{P}$ from your second card. In a uniform dielectric, the internal $(+\!q)$ and $(-\ q)$ cancellation is mathematically exact everywhere, so $\nabla\cdot\mathbf{P} = 0 \implies \rho_b = 0$. 

If $\mathbf{P}$ is *non-uniform* and has a positive divergence ($\nabla\cdot\mathbf{P} > 0$), positive charges are being displaced *outward* from that volume element. Why does pushing positive charge out of a region leave behind a **negative** volume charge, giving the minus sign in $\rho_b = -\nabla\cdot\mathbf{P}$?

### Turn 3 — 2026-09-19 (learner)

> The divergence of p vector larger than zero means that the charge runs off, which leaves behind a negative volume charge.

### Tutor

Exactly right. Because each atomic dipole's positive head points along $\mathbf{P}$, $\nabla\cdot\mathbf{P} > 0$ means a net amount of positive charge has been pushed *out* through the boundary of that volume element, leaving behind an uncompensated negative deficit: $\rho_b = -\nabla\cdot\mathbf{P}$.

You now have the full physical picture:
1. **$\mathbf{P}$:** Dipole moment per unit volume ($\sum \mathbf{p}/\Delta V$), units $\text{C}/\text{m}^2$.
2. **$\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$:** Uncompensated charges left at the outer boundary.
3. **$\rho_b = -\nabla\cdot\mathbf{P}$:** Uncompensated charge in the bulk due to non-uniform dipole divergence.

To lock this in with the classic GRE benchmark problem:
Suppose a dielectric sphere of radius $R$ has a frozen-in **uniform** polarization $\mathbf{P} = P_0 \hat{\mathbf{z}}$.
Using these two relations, what are:
1. The bound volume charge density $\rho_b$ inside the sphere?
2. The bound surface charge density $\sigma_b(\theta)$ on the sphere's surface (where $\hat{\mathbf{n}} = \hat{\mathbf{r}}$, and $\theta$ is the standard polar angle from the $z$-axis)?

### Turn 4 — 2026-09-20 (learner)

> [Image attachment: Handwritten calculation]
>
> **Transcript:**
> $R, \quad \vec{P} = P_0 \hat{z}$
> 
> $\rho_b = -\nabla \cdot \vec{P}$
> $= -\frac{\partial}{\partial z}(P_0)$
> $= 0$
> 
> $\sigma_b(\theta) = \vec{P} \cdot \hat{n}$
> $= P_0 \hat{z} \cdot \hat{r}$
> $= P_0 \cos\theta$
>
> **Visual / marks:** Handwritten physics derivation in black pencil/pen on white paper. Shows clean mathematical steps: evaluates the divergence of constant $P_0\hat{z}$ as $-\frac{\partial}{\partial z}(P_0) = 0$, and evaluates the surface projection on outward normal $\hat{r}$ as $P_0 \hat{z}\cdot\hat{r} = P_0\cos\theta$.

### Tutor

Perfect derivation—clean, exact, and complete.

1. **Volume bound charge $\rho_b = 0$:** Because $P_0$ is uniform, $\nabla\cdot\mathbf{P} = 0$. The head-to-tail cancellation in the bulk is exact everywhere; no net charge runs off or accumulates in any volume element.
2. **Surface bound charge $\sigma_b(\theta) = P_0 \cos\theta$:** At the north pole ($\theta = 0$), $\sigma_b = +P_0$ (positive heads poke straight out). At the south pole ($\theta = \pi$), $\sigma_b = -P_0$ (negative tails exposed). Around the equator ($\theta = \pi/2$), dipoles run tangent to the surface ($\hat{\mathbf{z}}\perp\hat{\mathbf{r}}$), giving $\sigma_b = 0$.

Both core concepts are locked: $\mathbf{P}$ as dipole moment density ($\text{C}/\text{m}^2$), $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$ as boundary projection, and $\rho_b = -\nabla\cdot\mathbf{P}$ as bulk divergence.

### Turn 5 — 2026-09-20 (learner)

> Drill now

### Tutor

#### Prep Studio Learn Transfer Handoff

Targeted 3-question transfer set launched in Prep Studio via CDP handoff:
- **Target URL:** `file:///Users/Reid%20Hu/Physics%20GRE/index.html?boot=20260916-m12b#/practice/custom`
- **Trigger:** Physics GRE transfer check for polarization, bound surface charge ($\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$), and dielectric boundary fields
- **Grounded concepts:**
  - Polarization $\mathbf{P}$ as dipole moment per unit volume
  - Bound surface charge density $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$
  - Bound volume charge density $\rho_b = -\nabla\cdot\mathbf{P}$
  - Dielectric boundary conditions & capacitor dielectric insertion
- **Target questions (QIDs):**
  1. `gr8677-54` — Dielectric bound charge at a conductor-dielectric interface
  2. `cpg-2.5.3-1` — Work needed to insert dielectric into a capacitor at constant $V$
  3. `cpg-2.5.3-2` — Electric field outside a thin slab of polarized material ($d^2 \ll A$)

Please answer the 3 questions directly in your connected Prep Studio tab (`#/practice/custom`). Once finished, copy and return your `pgre-learn-drill-receipt` (or click **Copy agent receipt** on the summary screen and paste it here) so we can debrief any traps.

### Turn 6 — 2026-09-20 (learner)

> How are the electric fields of two slabs canceled by each other? I don't understand. I prefer using excalidraw diagram to explain it to me.
>
> [Image attachment: Prep Studio question cpg-2.5.3-2 miss]
>
> **Transcript:**
> A thin slab of material of area $A$ and thickness $d$ carries uniform polarization $\mathbf{P}$, as shown in the diagram. What is the magnitude of the electric field just above the slab, assuming $d^2 \ll A$?
> 
> [Choices:]
> A: $|\mathbf{P}|/(2\epsilon_0)$ [Selected - Incorrect]
> B: $|\mathbf{P}|/\epsilon_0$
> C: $2|\mathbf{P}|\epsilon_0$
> D: $|\mathbf{P}|\epsilon_0$
> E: $0$ [Correct]
> 
> Incorrect — the answer is E. (+2 XP, 65 s — under pace)
>
> **Visual / marks:** Prep Studio review card with question text and perspective diagram of a slab of area $A$, thickness $d$, with upward polarization arrows labeled $\mathbf{P}$. Option A is highlighted in red (picked by learner). Option E is highlighted in green (correct answer). Bottom banner indicates "Incorrect — the answer is E".
>
> ```json
> {
>   "kind": "pgre-learn-drill-receipt",
>   "label": "Learn transfer · Polarization and bound charges",
>   "score": { "correct": 1, "n": 3, "pct": 33 },
>   "missQids": ["cpg-2.5.3-1", "cpg-2.5.3-2"],
>   "misses": [
>     { "qid": "cpg-2.5.3-1", "topic": "em", "picked": 1 },
>     { "qid": "cpg-2.5.3-2", "topic": "em", "picked": 0 }
>   ],
>   "ids": ["cpg-2.5.3-1", "cpg-2.5.3-2", "gr8677-54"],
>   "questions": [
>     {
>       "qid": "cpg-2.5.3-1",
>       "topic": "em",
>       "subtopic": "Dielectrics in capacitors",
>       "prompt": "What is the work needed to insert a dielectric with dielectric constant $\\kappa = 2$ into a parallel-plate capacitor with capacitance $C$ that is maintained at a constant voltage $V$?",
>       "choices": ["$\\frac{1}{2}CV^2$", "$CV^2$", "$2CV^2$", "$-\\frac{1}{2}CV^2$", "$-CV^2$"]
>     },
>     {
>       "qid": "cpg-2.5.3-2",
>       "topic": "em",
>       "subtopic": "Bound charge and polarization",
>       "prompt": "A thin slab of material of area $A$ and thickness $d$ carries uniform polarization $\\mathbf{P}$, as shown in the diagram. What is the magnitude of the electric field just above the slab, assuming $d^2 \\ll A$? <img class=\"q-fig\" src=\"content/book-assets/_page_68_Picture_22.jpeg\">",
>       "choices": ["$|\\mathbf{P}|/(2\\epsilon_0)$", "$|\\mathbf{P}|/\\epsilon_0$", "$2|\\mathbf{P}|\\epsilon_0$", "$|\\mathbf{P}|\\epsilon_0$", "$0$"]
>     },
>     {
>       "qid": "gr8677-54",
>       "topic": "em",
>       "subtopic": "dielectric bound charge",
>       "prompt": "A dielectric of dielectric constant $K$ is placed in contact with a conductor having surface charge density $\\sigma$, as shown above. What is the polarization (bound) charge density $\\sigma_p$ on the surface of the dielectric at the interface between the two materials?<p class=\"q-fig\"><img src=\"content/ets-assets/gr8677-q54.png\" alt=\"Cross-sectional diagram of a dielectric (labeled Dielectric K, hatched above) in contact along a horizontal interface with a conductor (labeled Conductor, hatched below), with surface charge density sigma on the conductor and bound charge density sigma_p at the interface.\"></p>",
>       "choices": ["$\\sigma\\dfrac{K}{1-K}$", "$\\sigma\\dfrac{K}{1+K}$", "$\\sigma K$", "$\\sigma\\dfrac{1+K}{K}$", "$\\sigma\\dfrac{1-K}{K}$"]
>     }
>   ]
> }
> ```

### Tutor

![[polarized-slab-field-cancellation.excalidraw|1000]]

Here is the physical mechanism of why they cancel:

A polarized slab is not just one surface of charge—it is a physical slice of matter with **two** parallel surfaces separated by thickness $d$:
1. **Top surface:** outward normal is $\hat{\mathbf{n}} = +\hat{\mathbf{z}}$, so $\sigma_{\text{top}} = \mathbf{P}\cdot(+\hat{\mathbf{z}}) = +P$.
2. **Bottom surface:** outward normal is $\hat{\mathbf{n}} = -\hat{\mathbf{z}}$, so $\sigma_{\text{bottom}} = \mathbf{P}\cdot(-\hat{\mathbf{z}}) = -P$.
Because $d^2 \ll A$, each surface behaves as an infinite flat sheet of charge with field magnitude $E = \frac{|\sigma|}{2\epsilon_0} = \frac{P}{2\epsilon_0}$.

Now look at the region **just above the slab** ($z > d$):
- The **top positive sheet** ($+P$) pushes electric field **away** from itself (pointing **UP**):
  $$\mathbf{E}_+ = +\frac{P}{2\epsilon_0}\hat{\mathbf{z}}$$
- The **bottom negative sheet** ($-P$) pulls electric field **toward** itself (pointing **DOWN**):
  $$\mathbf{E}_- = -\frac{P}{2\epsilon_0}\hat{\mathbf{z}}$$

Adding them together by superposition:
$$\mathbf{E}_{\text{above}} = \mathbf{E}_+ + \mathbf{E}_- = +\frac{P}{2\epsilon_0}\hat{\mathbf{z}} - \frac{P}{2\epsilon_0}\hat{\mathbf{z}} = \mathbf{0}$$

This is exactly like a parallel-plate capacitor: the positive plate pushes outward and the negative plate pulls inward, canceling the electric field everywhere outside the slab. You picked option A because you calculated the field from *one* charged sheet and forgot the opposing charge on the bottom face!

Looking at that same picture, what do the two fields do in the region **inside the slab** ($0 < z < d$)?

### Turn 7 — 2026-09-20 (learner)

> 1. What is the direction of the polarization? As you shown in the figure, is it from negative to positive charge?
> 2. Now I understand the reason of cancellation.
> 3. Inside the slab, the magnitude of the electrical field is p over epsilon zero.

### Tutor

**1. Direction of polarization $\mathbf{P}$:**
Yes, exactly! In physics, the electric dipole moment for a pair of charges $-q$ and $+q$ separated by displacement vector $\mathbf{d}$ (pointing from $-q$ to $+q$) is defined as:
$$\mathbf{p} = q\mathbf{d}$$
Because $\mathbf{d}$ points from negative to positive, the dipole moment vector $\mathbf{p}$ points from **negative to positive**. Polarization $\mathbf{P}$ is the volume density of dipole moments:
$$\mathbf{P} = \frac{d\mathbf{p}}{dV}$$
So $\mathbf{P}$ points from negative bound charge to positive bound charge (from the bottom face to the top face, along $+\hat{\mathbf{z}}$).

Notice the crucial contrast with electric fields: the **electric field $\mathbf{E}$** always points from positive charge to negative charge. Because the top surface is positive ($\sigma_b = +P$) and the bottom surface is negative ($\sigma_b = -P$), the internal electric field points **downward**, directly opposing $\mathbf{P}$:
$$\mathbf{E}_{\text{inside}} = -\frac{P}{\epsilon_0}\hat{\mathbf{z}}$$

**2 & 3. Internal field magnitude:**
Spot on. Inside the slab ($0 < z < d$):
- Top positive sheet pushes **down**: $\mathbf{E}_+ = -\frac{P}{2\epsilon_0}\hat{\mathbf{z}}$
- Bottom negative sheet pulls **down**: $\mathbf{E}_- = -\frac{P}{2\epsilon_0}\hat{\mathbf{z}}$
- Superposition gives:
  $$\mathbf{E}_{\text{inside}} = \mathbf{E}_+ + \mathbf{E}_- = -\left(\frac{P}{2\epsilon_0} + \frac{P}{2\epsilon_0}\right)\hat{\mathbf{z}} = -\frac{P}{\epsilon_0}\hat{\mathbf{z}}$$
The magnitude is indeed $|\mathbf{E}_{\text{inside}}| = \frac{P}{\epsilon_0}$. The cancellation outside and reinforcement inside are now completely solid.

---

Now let's debrief the second missed question from the drill, `cpg-2.5.3-1`:

> "What is the work needed to insert a dielectric with dielectric constant $\kappa = 2$ into a parallel-plate capacitor with capacitance $C$ that is maintained at a constant voltage $V$?"

In the drill, you picked $CV^2$. Let's trace the energy accounting:
1. The capacitor is maintained at constant voltage $V$. When capacitance increases from $C_i = C$ to $C_f = 2C$, what is the change in the capacitor's stored electrostatic energy ($\Delta U = U_f - U_i$)?
2. How much charge $\Delta Q$ leaves the battery, and how much work did the battery do ($W_{\text{battery}} = \Delta Q \cdot V$)?

### Turn 8 — 2026-09-20 (learner)

> 1. There is no flashcard for the definition and direction of polarization in physics pre studio, disaptch Grok 4.6 to handle this.
> 2. I misinterpreted the question. I thought the initial condition is not vacuum, but with something else between parallet plates. Now I understand the relation between vacuum and dielectrical capacitance.
> 3. $\Delta U = \frac{1}{2} C' V^2 - \frac{1}{2} C V^2 = \frac{1}{2} C V^2$
> 4. The charge volume leaves the battery equals - C/V; The work equals 1/2 C V^2

### Tutor

**1. Stored energy change $\Delta U$:**
Your calculation for $\Delta U$ is completely correct:
$$\Delta U = \frac{1}{2}(2C)V^2 - \frac{1}{2}CV^2 = +\frac{1}{2}CV^2$$

**2. Battery charge $\Delta Q$ and battery work $W_{\text{battery}}$:**
Notice the two traps here:
- **Charge dimension & sign:** Charge is $Q = CV$, not $C/V$.
  - Initial charge: $Q_i = CV$
  - Final charge: $Q_f = C_f V = (2C)V = 2CV$
  - Extra charge supplied by the positive terminal of the battery:
    $$\Delta Q = Q_f - Q_i = 2CV - CV = +CV$$
- **Battery work has no factor of $\frac{1}{2}$:**
  A battery supplies charge across a *fixed potential difference $V$*. Therefore:
  $$W_{\text{battery}} = \Delta Q \cdot V = (CV) \cdot V = +CV^2$$
  *(Why no $\frac{1}{2}$? The factor of $\frac{1}{2}$ in $\frac{1}{2}CV^2$ comes from integrating voltage from $0$ to $V$ as a capacitor charges from scratch, giving an average voltage of $V/2$. But the battery pushes charge across the full, unchanging potential difference $V$!).*

**3. External work needed to insert the dielectric ($W_{\text{ext}}$):**
By the work-energy theorem:
$$\Delta U = W_{\text{ext}} + W_{\text{battery}}$$
Solving for the work done by the external agent $W_{\text{ext}}$:
$$W_{\text{ext}} = \Delta U - W_{\text{battery}} = +\frac{1}{2}CV^2 - CV^2 = -\frac{1}{2}CV^2$$

**Physical insight on the negative sign:**
The fringing fields at the capacitor plates polarize the dielectric slab and naturally pull (suck) it into the gap. To insert it slowly at constant velocity (quasistatically) without accelerating it into kinetic energy, an external hand must push/pull **backwards** against the inward electric attraction. Because the external force opposes displacement ($\mathbf{F}_{\text{ext}}\cdot d\mathbf{x} < 0$), the external work is negative:
$$W_{\text{ext}} = -\frac{1}{2}CV^2$$
This corresponds to choice D in question `cpg-2.5.3-1`!
