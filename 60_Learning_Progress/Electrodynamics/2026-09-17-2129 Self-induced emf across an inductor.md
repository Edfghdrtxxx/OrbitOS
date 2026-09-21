---
type: learning-progress
topic: "Self-induced emf across an inductor"
area: Electrodynamics
status: in-progress
created: 2026-09-17
tags:
  - physics
  - electrodynamics
  - induction
  - faraday-law
  - lenz-law
  - gre-physics
---
# Self-induced emf across an inductor — $\mathcal{E} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$

**Why this note exists:** Flashcard recall query from Kahn's *Conquering the Physics GRE* (Electrodynamics, Inductors, eq. 2.45): determining the self-induced electromotive force $\mathcal{E}$ across an inductor of inductance $L$ when its current $I$ changes.

**Target:**
1. Master the definition of self-inductance $L = \Phi_B / I$ (magnetic flux linkage per unit current) and the resulting self-induced emf $\mathcal{E} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$.
2. Understand the physical mechanism: Faraday's law $\mathcal{E} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}$ coupled with Lenz's law (back-emf opposing current variations to preserve energy conservation).
3. Connect the concept to GRE Physics problem patterns: geometry scaling of inductance (e.g. ideal solenoid $L = \mu_0 n^2 A l = \mu_0 N^2 A / l$), RL circuit transient response (time constant $\tau = L/R$), and stored magnetic energy $U_L = \frac{1}{2} L I^2$.

**Active 2026-09-17.** Turn 1 opened with baseline alignment, direct formulation, and diagnostic question.

### Prior context
- **Already computable:** Magnetic dipole moment $\mathbf{m} = I\mathbf{A}$, capacitor geometry & energy $U_C = \frac{1}{2} C V^2 = Q^2/(2C)$ (from [[Progress-context]]).
- **What broke:** $\oint \mathbf{E}\cdot\mathrm{d}\mathbf{l} = 0$ (Kirchhoff's loop rule) fails when magnetic flux changes with time ($\oint \mathbf{E}\cdot\mathrm{d}\mathbf{l} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} \neq 0$).
- **New object had to:** Localize non-conservative Faraday induction into a lumped element via geometric invariant $L = \Phi_B / I$, enabling circuit theory to persist in electrodynamics. 

---

## Turns

### Turn 1 — 2026-09-17 (learner)

> /learn "What is the self-induced emf across an inductor of inductance 
> L
> L when its current 
> I
> I changes?"
> Activate daily node addition to record first.

### Tutor

The self-induced electromotive force across an inductor of inductance $L$ when its current $I$ changes with time is given by:

$$\mathcal{E} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$$

Here is how the physical pieces fit together from first principles:

1. **Self-flux ($\Phi_B = L I$):** Any current $I$ flowing through a circuit produces a magnetic field $\mathbf{B}$ proportional to $I$ (via Ampère's or the Biot–Savart law). The magnetic flux $\Phi_B$ passing through the circuit's own loops is therefore directly proportional to $I$:
   $$\Phi_B = L I$$
   The constant of proportionality $L$ is the **self-inductance**. Just like capacitance $C$ in electrostatics ($Q = C V$), $L$ depends purely on the **geometry** and medium (e.g., number of turns, cross-sectional area, length), never on the instantaneous current.

2. **Faraday's Law of Induction:** Whenever the current $I(t)$ varies, its self-flux $\Phi_B(t)$ varies at the rate $\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} = L \frac{\mathrm{d}I}{\mathrm{d}t}$. By Faraday's law, this changing flux generates an induced emf:
   $$\mathcal{E} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$$

3. **Lenz's Law (the minus sign):** The negative sign enforces energy conservation. The induced emf (often called "back-emf") always acts to **oppose the change** in current:
   - If current is increasing ($\frac{\mathrm{d}I}{\mathrm{d}t} > 0$), $\mathcal{E}$ opposes the current, acting like a bucking voltage source resisting the increase.
   - If current is decreasing ($\frac{\mathrm{d}I}{\mathrm{d}t} < 0$), $\mathcal{E}$ supports the current, pushing to keep it flowing.

To locate where we should focus our practice for the GRE: is your main priority understanding how $L$ is calculated from geometry (such as why a solenoid scales as $L \propto N^2$), how the minus sign / back-emf governs RL transient circuits, or how the magnetic energy $U_L = \frac{1}{2} L I^2$ is derived?

### Turn 2 — 2026-09-17 (learner)

> /evolve-skills first to integrate these ideas into our learn skill
>
> [Image attachment: 深刻的方式 / DEPTH]
>
> **Transcript:**
> 深刻的方式
> D E P T H
> 
> — 这个工具为什么会被发明？
> — 它解决了什么原始问题？
> — 它抓住了世界中的什么不变量？
> — 它为什么必须被这样定义？
> — 如果没有这个工具，人类会卡在哪里？

### Tutor

The Depth framework (深刻的方式 / DEPTH) is now integrated into `learn/evolution.md` under User Preferences.

Let's apply these 5 depth questions directly to decode the self-induced emf and inductance $L$.

Without this tool, where would circuit theory be stuck? Kirchhoff's loop rule assumes electrostatics ($\oint \mathbf{E} \cdot \mathrm{d}\mathbf{l} = 0$). But the moment currents vary in time, Faraday's law kicks in ($\oint \mathbf{E} \cdot \mathrm{d}\mathbf{l} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} \neq 0$). A non-conservative electric field appears around the loop, and ordinary circuit analysis breaks down completely.

The **inductor** was invented to solve this exact problem: it localizes the non-conservative Faraday induction into a single lumped element.

Now look at question 3: **"What invariant did it capture?" (它抓住了世界中的什么不变量？)**

In our capacitor study, we saw that charge $Q$ and potential $V$ always scale together, giving the purely geometric invariant $C = Q/V$.

For any rigid wire loop or coil carrying current $I$: what fundamental physical property guarantees that doubling the current $I$ strictly doubles the magnetic field $\mathbf{B}$ and self-flux $\Phi_B$, ensuring the ratio $L = \Phi_B / I$ is an invariant constant determined solely by geometry?

### Turn 3 — 2026-09-17 (learner)

> Can we say that the EMF “electromotive force “is another form of the loop line integral of the
> Electric field?
> The fundamental physical property guarantees that doubling the current are strictly double C, magnetic field B and self-flux is self-inductance. 
> How about the motive emf? It doesn't have that coefficient?

### Tutor

**1. Is EMF the loop line integral of $\mathbf{E}$?**

Yes, absolutely. By definition, the electromotive force $\mathcal{E}$ around any closed path $\mathcal{P}$ is the work done per unit charge:
$$\mathcal{E} \equiv \oint_{\mathcal{P}} \mathbf{E} \cdot \mathrm{d}\mathbf{l}$$
In electrostatics, $\nabla \times \mathbf{E} = \mathbf{0}$, so Stokes' theorem gives $\oint \mathbf{E}\cdot\mathrm{d}\mathbf{l} = 0$ (no net loop emf). But in electrodynamics, Faraday's law states $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$. Stokes' theorem immediately yields:
$$\mathcal{E} = \oint_{\mathcal{P}} \mathbf{E} \cdot \mathrm{d}\mathbf{l} = \int_{S} (\nabla \times \mathbf{E}) \cdot \mathrm{d}\mathbf{a} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}$$
The induced EMF *is* precisely the closed line integral of the non-conservative electric field.

---

**2. Linearity vs. the definition of $L$**

You identified self-inductance $L$, but $L$ is the **name** of the invariant ratio, not the underlying cause.

The physical property of nature that guarantees $\mathbf{B} \propto I$ is the **linearity of the electromagnetic field equations** (Biot–Savart law / Ampère's law):
$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint \frac{\mathrm{d}\mathbf{l}' \times \hat{\mathbf{r}}}{r^2}$$
Because current $I$ enters linearly (to the first power), doubling $I$ strictly doubles $\mathbf{B}$ at every point in space. Since $\Phi_B = \int \mathbf{B}\cdot\mathrm{d}\mathbf{a}$, the total flux also strictly doubles. Because $\Phi_B \propto I$, their ratio is independent of current:
$$L \equiv \frac{\Phi_B}{I}$$
This ratio depends solely on **spatial geometry** (shape, area, number of turns) and the core medium ($\mu_0$).

---

**3. Motional EMF ("motive emf") — Why no $L$?**

Recall that $\Phi_B = \int \mathbf{B} \cdot \mathrm{d}\mathbf{a}$. A flux change $\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}$ can happen in two distinct ways:

1. **Stationary loop, changing current / field (Transformer / Inductive EMF):**  
   The wire does not move, but the circuit's own current changes with time:
   $$\mathcal{E}_{\text{ind}} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$$
   Here, $L$ appears because the changing field is produced by the circuit's **own current** ($\Phi_B = L I$).

2. **Moving conductor, fixed external field (Motional EMF):**  
   A rod of length $l$ moves at speed $v$ through a static external magnetic field $\mathbf{B}_{\text{ext}}$ (like a rod on rails):
   $$\mathcal{E}_{\text{mot}} = -B \frac{\mathrm{d}A}{\mathrm{d}t} = -B l v$$
   Here, the magnetic field is provided by an **external magnet** (not the circuit's own current), and the driver of change is the **mechanical motion** ($\frac{\mathrm{d}A}{\mathrm{d}t} = l v$), not $\frac{\mathrm{d}I}{\mathrm{d}t}$. Thus there is no $L \frac{\mathrm{d}I}{\mathrm{d}t}$ term (and GRE problems explicitly say *"neglect self-inductance of the circuit"*).

---

Now, to nail the geometric definition $L = \Phi_B / I$ on the Physics GRE:

Consider an **ideal solenoid** of length $l$, cross-sectional area $A$, and $N$ total turns carrying current $I$.
1. Inside the solenoid, the magnetic field is uniform: $B = \mu_0 \left(\frac{N}{l}\right) I$.
2. What is the total magnetic flux $\Phi_{\text{total}}$ linked through **all $N$ turns**, and what does that give for the self-inductance $L = \Phi_{\text{total}} / I$?

### Turn 4 — 2026-09-17 (learner)

> I think your biot-savart law has a problem that the r-vector in the integral is not the same r-vector as the observation point. There are two different things.
> So the definition of the relation between epilon, the EMF and the flux of the magnetic field is universal. It is compatible with both induced EMF and motional EMF, right? 
> Also I am interested in how the energy of the magnetic field is derived. 
> The total magnetic flux, Psi total, equals μ0 NIA over L, and the self-inductance L equals μ0 NIA over L.
>
> [Image attachment: Snippet of Biot-Savart formula]
>
> **Transcript:**
> $$\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi}\oint \frac{\mathrm{d}\mathbf{l}' \times \hat{\mathbf{r}}}{r^2}$$
>
> **Visual / marks:** Cropped formula snippet in brown serif text on light background, highlighting the integrand with source element $\mathrm{d}\mathbf{l}'$ paired with unit vector $\hat{\mathbf{r}}$ and $r^2$, pointing out the conflation between observation position $\mathbf{r}$ and separation vector $\mathbf{r}-\mathbf{r}'$.

### Tutor

**1. Spot-on catch on the separation vector**

You caught a real and sloppy shorthand. In electrodynamics (Griffiths notation), there are two distinct vectors:
- **Field point (observation point):** $\mathbf{r}$
- **Source point (where the wire segment sits):** $\mathbf{r}'$
- **Separation vector:** $\boldsymbol{\varkappa} \equiv \mathbf{r} - \mathbf{r}'$ (with magnitude $\varkappa = |\mathbf{r} - \mathbf{r}'|$ and direction $\hat{\boldsymbol{\varkappa}}$)

The rigorous Biot–Savart law is:
$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint \frac{\mathrm{d}\mathbf{l}' \times (\mathbf{r} - \mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^3} = \frac{\mu_0 I}{4\pi} \oint \frac{\mathrm{d}\mathbf{l}' \times \hat{\boldsymbol{\varkappa}}}{\varkappa^2}$$

Writing $\hat{\mathbf{r}}/r^2$ lazily conflated the observation point with the separation vector. Your physical takeaway remains exact: because current $I$ sits cleanly outside the integral to the first power, doubling $I$ strictly doubles $\mathbf{B}(\mathbf{r})$ at all field points.

---

**2. Universality of the Flux Rule**

**Yes, absolutely.** The relationship:
$$\mathcal{E} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}$$
is universally true. It is called the **Flux Rule**, and it accounts for:
- Changing magnetic fields through a stationary loop ($\frac{\partial \mathbf{B}}{\partial t}$, transformer/induced emf).
- Moving or deforming loop boundaries through a magnetic field ($\frac{\mathrm{d}\mathbf{A}}{\mathrm{d}t}$, motional emf).
- Any combination of both simultaneously.

Feynman famously highlighted the wonder of this rule: two completely distinct physical mechanisms—the magnetic Lorentz force $\mathbf{F} = q(\mathbf{v} \times \mathbf{B})$ on moving charges, and the Maxwell-Faraday induced electric field $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ on stationary charges—conspire to produce the exact same mathematical result $\mathcal{E} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}$. (In special relativity, they are simply the same electromagnetic field tensor viewed in different reference frames).

---

**3. The Classic GRE $N^2$ Trap**

Look closely at what you calculated for the solenoid:
$$\Phi_{\text{total}} = \frac{\mu_0 N I A}{l}, \quad L = \frac{\mu_0 N I A}{l} \quad \text{❌ (Misses one factor of } N\text{)}$$

Here is the exact trap Kahn flags in *Conquering the Physics GRE*:
- The field inside the solenoid is $B = \mu_0 \left(\frac{N}{l}\right) I$.
- The flux through **one single turn** is:
  $$\Phi_1 = B A = \mu_0 \left(\frac{N}{l}\right) I A$$
- But an inductor consists of **$N$ turns in series**. Every turn encloses that field, so the **total flux linkage** across all $N$ turns is:
  $$\Phi_{\text{total}} = N \Phi_1 = N \left[\mu_0 \left(\frac{N}{l}\right) I A\right] = \frac{\mu_0 N^2 A}{l} I$$
- Dividing by $I$ gives the true self-inductance:
  $$\boxed{L = \frac{\mu_0 N^2 A}{l}}$$

**GRE rule:** Inductance always scales with $N^2$ ($L \propto N^2$ or $L \propto n^2$). If you double the winding turns in the same length, $B$ doubles *and* the number of turns collecting flux doubles, so $L$ quadruples.

---

**4. Magnetic Energy Derivation ($U_L$)**

To see how magnetic field energy is derived, mirror the capacitor charging derivation you already know ($U_C = \int \frac{q}{C}\,\mathrm{d}q = \frac{1}{2} C V^2$):

To establish a current from $0$ to $I$, an external source must do work against the self-induced back-emf $\mathcal{E} = -L \frac{\mathrm{d}I}{\mathrm{d}t}$.  
The rate of doing work (power) against this back-emf is:
$$P = \frac{\mathrm{d}W}{\mathrm{d}t} = (-\mathcal{E}) I = \left(L \frac{\mathrm{d}I}{\mathrm{d}t}\right) I = L I \frac{\mathrm{d}I}{\mathrm{d}t}$$

Multiplying by $\mathrm{d}t$ gives the incremental work to advance the current:
$$\mathrm{d}W = L I \,\mathrm{d}I$$

Integrating from $0$ to the final current $I$: what does this give for the stored energy $U_L$? And if you substitute $L = \frac{\mu_0 N^2 A}{l}$ and $B = \mu_0 \frac{N}{l} I$, how does that energy express itself in terms of the magnetic field $B$ and volume $V = A l$?

### Turn 5 — 2026-09-17 (learner)

> create a new trap log to record what I failed in practice so that I can review these traps to avoid doing them again. Concisely reflect the existence of this log in the learn skill and the instruct agents to record in this log whenever user falls in any trap.
> My solution is attached.
>
> [Image attachment: Handwritten derivation sheet]
>
> **Transcript:**
> $$P = \frac{\mathrm{d}W}{\mathrm{d}t} = -\mathcal{E} I = +L \frac{\mathrm{d}I}{\mathrm{d}t} \cdot I$$
> $$\mathrm{d}W = L I \,\mathrm{d}I$$
> $$U = \int \mathrm{d}W = \frac{1}{2} L I^2$$
> 
> $$L = \frac{\mu_0 N^2 A}{l}$$
> $$\Phi_B = L \cdot I = \int_S \vec{B} \cdot \mathrm{d}\vec{s} = N \cdot B \cdot A$$
> $$B = \frac{N \mu_0 I}{l}$$
> $$\Phi_B = N \cdot B \cdot A = N \cdot \frac{N \mu_0 I}{l} \cdot A = \frac{\mu_0 N^2 A I}{l}$$
> $$L = \frac{\mu_0 N^2 A}{l}$$
> 
> $$U = \frac{1}{2} \cdot \frac{\mu_0 N^2 A}{l} \cdot I^2 = \frac{1}{2} \frac{\mu_0 N^2 A I^2}{l}$$
> $$= \frac{1}{2} \frac{\mu_0 N I}{l} \cdot N A I = \frac{1}{2} N A B I, \quad A = \frac{V}{l}$$
> $$= \frac{1}{2} N \cdot \frac{V}{l} \cdot B \cdot I = \frac{1}{2} \frac{\mu_0 N I}{l} \cdot B \cdot \frac{V}{\mu_0} = \frac{1}{2\mu_0} B^2 \cdot V$$
> "which is the same with $U_B = \frac{1}{2\mu_0} \int_V |B|^2 \mathrm{d}^3 r$"
>
> **Visual / marks:** Vertical handwritten derivation on lined paper in neat black pencil/pen. Clear line-by-line progression through power balance, incremental work $\mathrm{d}W$, circuit energy $\frac{1}{2}LI^2$, solenoid flux linkage $N \cdot B \cdot A$ yielding $L \propto N^2$, and algebraic grouping of factors into magnetic energy density $\frac{B^2}{2\mu_0}$ multiplied by total volume $V$.

### Tutor

Flawless work. Your handwritten derivation establishes two foundational results with absolute rigor:

1. **Energy stored in an inductor:**
   $$U_L = \frac{1}{2} L I^2$$
2. **Magnetic field energy density:**
   $$u_B = \frac{B^2}{2\mu_0} \implies U_B = \int_V \frac{B^2}{2\mu_0} \,\mathrm{d}^3 r$$
   Notice how beautifully this pairs with electrostatics:
   $$u_E = \frac{1}{2} \epsilon_0 E^2 \longleftrightarrow u_B = \frac{1}{2\mu_0} B^2$$
   The parallel is exact: electric energy density scales with $\epsilon_0 E^2$, while magnetic energy density scales with $B^2 / \mu_0$.

**Trap Log Established & Instructed:**
1. Created `60_Learning_Progress/Trap-Log.md` and logged this Solenoid $N^2$ trap as reworked (`[x]`).
2. Updated `learn/SKILL.md` (and `evolution.md`) instructing all future agents running `/learn` to check `Trap-Log.md` at Phase 0 and immediately log any exam trap, calculation slip, or flawed assumption fallen into during practice.


