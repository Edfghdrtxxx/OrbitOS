---
type: learning-progress
topic: "Pendulum angular vs linear displacement"
area: Classical Mechanics
status: active
created: 2026-09-19
tags:
  - physics
  - classical-mechanics
  - gre-physics
  - oscillations
  - simple-pendulum
---
# Pendulum angular vs linear displacement — coordinate choice in oscillations

**Why this note exists:** Learner asked when to use angular coordinate $\theta$ versus horizontal displacement $x$ for solving pendulum problems, comparing their handwritten torque derivation to Conquering the Physics GRE equation (1.46).

## Context

**Image #1 (Handwritten notes):**
- **Transcription:**
  $$\vec{\tau} = I \ddot{\theta} \implies mL^2 \ddot{\theta} = -L \cdot mg \sin\theta$$
  $$L \ddot{\theta} = -g \sin\theta$$
  $$L \ddot{\theta} + g \theta = 0$$
  $$\ddot{\theta} + \frac{g}{L} \theta = 0$$
  Top-left marginal annotation:
  $$-mg \frac{x}{L}$$
- **Visual Layout & Details:** Vertical handwritten derivation in dark ink on white paper. Shows cancellation of $L$ on both sides. In the third line, $\sin\theta$ is modified with a circled term transitioning to small-angle approximation $\theta$. The formula $-mg\frac{x}{L}$ is jotted on the side as a parallel expression.

**Image #2 (Conquering the Physics GRE excerpt):**
- **Transcription:**
  OSCILLATIONS
  Small-angle equation of motion for a simple pendulum of length $L$ (mass $m$, small horizontal displacement $x$)?
  $$m\ddot{x} = -mgx/L \quad (1.46)$$
- **Visual Layout & Details:** Header "OSCILLATIONS" in small-caps copper/brown. Prompt asking for small-angle equation of motion in terms of horizontal displacement $x$, followed by a horizontal dividing line and display equation (1.46).

**Image #3 (Prep Studio solution gr9277-61):**
- **Transcription:**
  pick any that apply
  SOLUTION
  For a rigid body pivoted at one end, the small-oscillation frequency obeys $\omega^2 = \frac{g\sum_i m_i x_i}{\sum_i m_i x_i^2}$, where $x_i$ is each mass's distance from the pivot (numerator = gravitational restoring torque, denominator = moment of inertia). With rod length $\ell$, configuration I (both masses at $\ell$) gives $\omega_I^2 = \frac{g(2m\ell)}{2m\ell^2} = \frac{g}{\ell}$. Configuration II (one mass at $\ell/2$, one at $\ell$) gives $\sum m_i x_i = \frac{3}{2}m\ell$ and $\sum m_i x_i^2 = \frac{5}{4}m\ell^2$, so $\omega_{II}^2 = \frac{g(\frac{3}{2}m\ell)}{\frac{5}{4}m\ell^2} = \frac{6}{5}\frac{g}{\ell}$. The ratio is therefore $\frac{\omega_{II}}{\omega_I} = \sqrt{6/5}$, choice (A).
  GRE shortcut: moving a mass inward shrinks the inertia ($\propto x^2$) faster than the restoring torque ($\propto x$), so the frequency rises and the ratio must exceed 1; $\sqrt{6/5}$ is the smallest option above 1.
- **Visual Layout & Details:** Light cream card with copper/brown "SOLUTION" header. Contains algebraic derivation for configurations I and II, explicit definitions of numerator as restoring torque and denominator as moment of inertia, and closes with a bold "GRE shortcut" heuristic.

**Image #4 (Handwritten single-mass ratio derivation):**
- **Transcription:**
  $$\frac{\tau_A = m g d_A = m g l}{I_A = m l^2} = \frac{g}{l} = \omega_A^2 \longrightarrow \frac{\omega_A}{\omega_B} = \sqrt{\frac{1}{2}}$$
  $$\frac{\tau_B = m g d_B = \frac{1}{2}m g l}{I_B = \frac{1}{4}m l^2} = \frac{2g}{l} = \omega_B^2 \quad \frac{\omega_B}{\omega_A} = \sqrt{2}$$
- **Visual Layout & Details:** Handwritten derivation in pencil/ink on white paper. Shows fraction lines dividing torque by moment of inertia for Setup A (top) and Setup B (bottom). Setup A shows a crossed-out scribble before $mg$ in the torque expression. Both setups explicitly calculate $\omega^2$ and conclude with the ratio $\frac{\omega_B}{\omega_A} = \sqrt{2}$.

---

## Turns

### Turn 1 — 2026-09-19 (learner)

> Sometimes I use angle to solve the problem. Sometimes I use displacement. Which one should I use in a certain case?

### Tutor

They describe the exact same physics under the small-angle approximation ($x \approx L\theta \implies \ddot{x} \approx L\ddot{\theta}$). Substituting $x = L\theta$ turns $m\ddot{x} = -\left(\frac{mg}{L}\right)x$ directly into $\ddot{\theta} + \frac{g}{L}\theta = 0$. The key advantage of the linear form $m\ddot{x} = -k_{\text{eff}}x$ is that it reveals gravity as an **effective spring** with constant $k_{\text{eff}} = \frac{mg}{L}$.

The choice comes down to coupling and geometry:
- **Use $x$ (displacement):** When the pendulum is coupled to linear components (e.g., horizontal springs, sliding carts, or coupled pendulums). You can immediately add spring forces $F_{\text{spring}} = -kx$ to $F_{\text{gravity}} = -k_{\text{eff}}x$ without converting back and forth through torques.
- **Use $\theta$ (angle):** When dealing with extended rigid bodies / physical pendulums (pivoting rods or disks where moment of inertia $I$ and torque $\tau = I\ddot{\theta}$ dominate), or when the problem asks for angular quantities or large-angle energy states.

To see the power of the $x$-representation: if a simple pendulum of mass $m$ and length $L$ has its bob attached horizontally to a fixed wall by an ideal spring of spring constant $k$ (at small displacements $x$), what is the total effective spring constant $k_{\text{tot}}$, and what is the resulting oscillation frequency $\omega$?

### Turn 2 — 2026-09-19 (learner)

> k total equals to k minus mg over L and the corresponding oscillation frequency omega equals square root of k over m minus g over L.

### Tutor

You've identified both stiffness terms ($k$ and $\frac{mg}{L}$) and correctly used the harmonic oscillator structure $\omega = \sqrt{\frac{k_{\text{tot}}}{m}}$. Look closely, however, at the direction of each force when the bob is pulled to the right ($+x$):
- The spring pulls left back to its equilibrium: $F_{\text{spring}} = -kx$.
- Gravity's horizontal component also pulls left back to the vertical line: $F_{\text{gravity}} = -\left(\frac{mg}{L}\right)x$.

Since both forces pull in the **same direction** toward equilibrium, they reinforce each other:
$$F_{\text{net}} = -kx - \left(\frac{mg}{L}\right)x = -\left(k + \frac{mg}{L}\right)x \implies k_{\text{tot}} = k + \frac{mg}{L}$$
The attached spring makes the pendulum stiffer, so the frequency must increase to $\omega = \sqrt{\frac{k}{m} + \frac{g}{L}}$.

Now, consider when gravity would oppose the spring to produce your minus sign ($k_{\text{tot}} = k - \frac{mg}{L}$): if this were an **inverted pendulum** (a rigid vertical rod of length $L$ balanced upright, with mass $m$ at the top and the same horizontal stabilizing spring $k$ attached to the top), what is the direction of gravity when tilted by $+x$, and what minimum spring constant $k$ is required to keep it stable ($\omega^2 > 0$)?

### Turn 3 — 2026-09-19 (learner)

> Draw a schema for me. I am confused by your description

### Tutor

![[pendulum-spring-comparison.excalidraw|1000]]

```text
  Case A: Hanging Pendulum (Stable)           Case B: Inverted Pendulum (Tilted)
  
       Ceiling ///////                             Bob  (m) ---> +x  [Gravity pushes RIGHT: +(mg/L)x]
               | (pivot)                            /   <--- F_spring [-kx pulls LEFT]
               |                                   /
               |                                  / (rigid rod, length L)
               \ (string, length L)              /
                \                               /
      F_spring   \  F_gravity                  | (pivot)
   <--- [-kx]    (m) ---> +x                  /////// Ground
             <--- [-(mg/L)x]
  
  Both pull LEFT (reinforcing):                Forces OPPOSE each other:
  F_net = -kx - (mg/L)x = -(k + mg/L)x         F_net = -kx + (mg/L)x = -(k - mg/L)x
  => k_tot = k + mg/L                          => k_tot = k - mg/L
```

Notice the geometric difference:
- In **Case A (hanging)**, tilting $+x$ lifts the bob against gravity, creating an inward restoring pull ($-\frac{mg}{L}x$). The spring also pulls back inward ($-kx$), so both stiffnesses add ($k_{\text{tot}} = k + \frac{mg}{L}$).
- In **Case B (inverted)**, tilting $+x$ makes the top-heavy mass want to topple further outward ($+\frac{mg}{L}x$). Only the spring resists this by pulling inward ($-kx$), giving your subtracted form ($k_{\text{tot}} = k - \frac{mg}{L}$).

Looking at Case B: what happens physically to the inverted pendulum if the spring is too weak, specifically if $k < \frac{mg}{L}$?

### Turn 4 — 2026-09-19 (learner)

> Add a standard in learn skill regarding the insertion of excalidraw. Add an argument 1000 behind the insertion like what I did.
> The pendulum with reach the ground

### Tutor

Exactly right: if $k < \frac{mg}{L}$, the effective stiffness becomes negative ($k_{\text{tot}} < 0 \implies \omega^2 < 0$), yielding real exponential runaway solutions ($x(t) \propto e^{\gamma t}$ with $\gamma = \sqrt{\frac{g}{L} - \frac{k}{m}}$). Gravity's outward toppling pull overpowers the spring's restoring pull, so the upright equilibrium is completely unstable and the pendulum falls over until it hits the ground.

### Summary & Takeaways
1. **Mathematical equivalence:** At small angles ($x \approx L\theta$), $m\ddot{x} = -\left(\frac{mg}{L}\right)x$ and $\ddot{\theta} + \frac{g}{L}\theta = 0$ are the exact same harmonic oscillator with $\omega = \sqrt{g/L}$.
2. **Coordinate selection rule:**
   - **Use $x$ (displacement):** When coupled to linear forces (horizontal springs, sliding carts). Gravity directly enters Hooke's law as an effective spring constant $k_{\text{eff}} = \frac{mg}{L}$.
   - **Use $\theta$ (angle):** When dealing with extended rigid bodies / physical pendulums ($\tau = I\ddot{\theta}$) or large-angle energy states.
3. **Coupling signs:**
   - **Hanging pendulum:** Gravity restores $\implies k_{\text{tot}} = k + \frac{mg}{L}$ (stiffer, higher frequency $\omega = \sqrt{\frac{k}{m} + \frac{g}{L}}$).
   - **Inverted pendulum:** Gravity destabilizes $\implies k_{\text{tot}} = k - \frac{mg}{L}$ (stable oscillations $\iff k > \frac{mg}{L}$; topples if $k < \frac{mg}{L}$).

*(Excalidraw standard updated in `.agents/skills/learn/SKILL.md` to `![[<name>.excalidraw|1000]]`.)*

### Turn 5 — 2026-09-19 (learner)

> Enter drill stage

### Tutor

#### Prep Studio Learn Transfer Handoff

Targeted 3-question transfer set launched in Prep Studio via CDP handoff:
- **Target URL:** `file:///Users/Reid%20Hu/Physics%20GRE/index.html?boot=20260916-m12b#/practice/custom`
- **Trigger:** Physics GRE transfer check for pendulum coordinate selection & coupled spring-pendulum oscillations
- **Grounded concepts:**
  - Pendulum coordinate choice ($\theta$ for rotation/rigid bodies vs $x$ for coupled linear springs/effective $k_{\text{eff}} = mg/L$)
  - Effective spring constant & stiffness coupling (reinforcing $+mg/L$ vs destabilizing $-mg/L$)
  - Inverted pendulum stability threshold ($k > mg/L$)
- **Target questions (QIDs):**
  1. `gr9277-61` — Physical pendulum frequency / rotational oscillations ($\theta$-basis)
  2. `gr9277-74` — Physical pendulum period ($\theta$-basis)
  3. `cpg-1.7.4-1` — Coupled springs / effective stiffness combinations ($x$-basis)

Please answer the 3 questions directly in your connected Prep Studio tab (`#/practice/custom`). Once finished, copy and return your `pgre-learn-drill-receipt` (or click **Copy agent receipt** on the summary screen and paste it here) so we can debrief any traps.

### Turn 6 — 2026-09-19 (learner)

> [Image #1] Do I need to memorize that frequency formula regarding the center of the mass?
>
> ```json
> {
>   "kind": "pgre-learn-drill-receipt",
>   "label": "Learn transfer · Pendulum coordinate choice",
>   "score": { "correct": 2, "n": 3, "pct": 67 },
>   "missQids": ["gr9277-61"],
>   "misses": [{ "qid": "gr9277-61", "topic": "cm", "picked": 1 }],
>   "ids": ["gr9277-61", "cpg-1.7.4-1", "gr9277-74"],
>   "questions": [
>     {
>       "qid": "gr9277-61",
>       "topic": "cm",
>       "subtopic": "physical pendulum frequency",
>       "prompt": "A long, straight, and massless rod pivots about one end in a vertical plane. In configuration I, shown above, two small identical masses are attached to the free end; in configuration II, one mass is moved to the center of the rod. What is the ratio of the frequency of small oscillations of configuration II to that of configuration I?",
>       "choices": ["$(6/5)^{\\frac{1}{2}}$", "$(3/2)^{\\frac{1}{2}}$", "$6/5$", "$3/2$", "$5/3$"]
>     },
>     {
>       "qid": "cpg-1.7.4-1",
>       "topic": "cm",
>       "subtopic": "Springs in series/parallel",
>       "prompt": "A block of mass $M$ is attached to two springs, both with spring constants $k$, in series. Another block of mass $m$ is attached to three springs, each of spring constant $k$, in parallel. What is the ratio of the oscillation frequency of the block of mass $M$ to the frequency of the block of mass $m$?",
>       "choices": ["$\\dfrac{3m}{2M}$", "$\\sqrt{\\dfrac{2M}{m}}$", "$\\sqrt{\\dfrac{3M}{m}}$", "$\\sqrt{\\dfrac{m}{6M}}$", "$\\sqrt{\\dfrac{6m}{M}}$"]
>     },
>     {
>       "qid": "gr9277-74",
>       "topic": "cm",
>       "subtopic": "physical pendulum period",
>       "prompt": "Two circular hoops, $X$ and $Y$, are hanging on nails in a wall. The mass of $X$ is four times that of $Y$, and the diameter of $X$ is also four times that of $Y$. If the period of small oscillations of $X$ is $T$, the period of small oscillations of $Y$ is",
>       "choices": ["$T$", "$T/2$", "$T/4$", "$T/8$", "$T/16$"]
>     }
>   ]
> }
> ```

### Tutor

No, you should **not** memorize that formula as a new separate equation. It is nothing more than our basic rotational equation of motion $\tau_{\text{net}} = I\ddot{\theta}$:
$$-(M_{\text{tot}} g d_{\text{CM}})\theta = I_{\text{pivot}} \ddot{\theta} \implies \omega^2 = \frac{\tau_{\text{restoring}}}{I_{\text{pivot}}} = \frac{M_{\text{tot}} g d_{\text{CM}}}{I_{\text{pivot}}}$$
For discrete masses along a rod:
- The numerator is just the total gravitational torque about the pivot: $\sum \tau_i = \sum (m_i g x_i) = g \sum m_i x_i$.
- The denominator is just the moment of inertia about the pivot: $I_{\text{pivot}} = \sum m_i x_i^2$.

The trap on `gr9277-61` (picking Choice B $\sqrt{3/2}$) was tracking the torque numerator ($\sum m_i x_i = \frac{3}{2}m\ell$ vs $2m\ell$, ratio $\frac{3}{4}$) without independently evaluating the inertia denominator ($I = \frac{5}{4}m\ell^2$ vs $2m\ell^2$, ratio $\frac{5}{8}$). Since moving mass inward shrinks rotational inertia ($\propto x^2$) even faster than it shrinks gravitational torque ($\propto x$), the frequency must increase:
$$\frac{\omega_{II}^2}{\omega_I^2} = \frac{\tau_{II} / I_{II}}{\tau_I / I_I} = \frac{3/2}{5/4} = \frac{6}{5} \implies \frac{\omega_{II}}{\omega_I} = \sqrt{\frac{6}{5}}$$

To verify the mechanism: if you have the same massless rod with just **one** mass $m$:
- In Setup A, $m$ is at the free end ($x = \ell$).
- In Setup B, $m$ is at the midpoint ($x = \ell/2$).

Using $\omega^2 = \frac{\tau_{\text{restoring}}}{I_{\text{pivot}}}$, what is the frequency ratio $\frac{\omega_B}{\omega_A}$?

### Turn 7 — 2026-09-19 (learner)

> [Image #1 handwritten derivation]
> $$\frac{\tau_A = mgl}{I_A = ml^2} = \frac{g}{l} = \omega_A^2 \implies \frac{\omega_A}{\omega_B} = \sqrt{\frac{1}{2}}$$
> $$\frac{\tau_B = \frac{1}{2}mgl}{I_B = \frac{1}{4}ml^2} = \frac{2g}{l} = \omega_B^2 \implies \frac{\omega_B}{\omega_A} = \sqrt{2}$$

### Tutor

Spot-on. You evaluated the numerator (restoring torque) and denominator (rotational inertia) independently: torque drops by a factor of $\frac{1}{2}$, but inertia drops by $\frac{1}{4}$, doubling $\omega^2$ and giving $\frac{\omega_B}{\omega_A} = \sqrt{2}$.

### Error-Prone Patterns Summary (Drill Close)
1. **Physical pendulum discrete mass scaling:** In $\omega^2 = \frac{\tau_{\text{restoring}}}{I_{\text{pivot}}} = \frac{g\sum m_i x_i}{\sum m_i x_i^2} = \frac{M_{\text{tot}} g d_{\text{CM}}}{I_{\text{pivot}}}$, torque scales linearly with distance ($\propto x$), while rotational inertia scales quadratically ($\propto x^2$). Moving mass toward the pivot shrinks inertia faster than torque, strictly increasing oscillation frequency. Never look at center of mass displacement alone.
2. **Hanging vs inverted spring coupling signs:**
   - **Hanging:** Gravity pulls inward back to vertical line $\implies F_{\text{net}} = -(k + mg/L)x \implies k_{\text{tot}} = k + mg/L$ (reinforcing stiffness, higher frequency).
   - **Inverted:** Gravity topples outward $\implies F_{\text{net}} = -(k - mg/L)x \implies k_{\text{tot}} = k - mg/L$ (destabilizing, stable oscillations require $k > mg/L$).
3. **Coordinate decision boundary:**
   - Use displacement $x$ with Hooke's-law effective stiffness $k_{\text{eff}} = mg/L$ when coupled to linear elements (springs, carts).
   - Use angle $\theta$ with torque $\tau = I\ddot{\theta}$ whenever dealing with pivot rotation, rigid bodies, or distributed moments of inertia.
