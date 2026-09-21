---
type: learning-progress
topic: "Magnetic dipole moment of a current loop"
area: Electrodynamics
status: done
created: 2026-09-17
tags:
  - physics
  - electrodynamics
  - magnetostatics
  - dipoles
  - gre-physics
---
# Magnetic dipole moment of a current loop — $\mathbf{m} = I\mathbf{A}$

**Why this note exists:** Flashcard recall item from Kahn's *Conquering the Physics GRE* (Electromagnetism, Dipoles, eq. 2.53): understanding the definition, direction convention, and physical coupling of the magnetic dipole moment $\mathbf{m} = I\mathbf{A}$.

**Target:**
1. Master the definition $\mathbf{m} = I\mathbf{A}$ (or $N I \mathbf{A}$ for $N$ turns) and the right-hand rule relating the direction of $\mathbf{A}$ to current $I$.
2. Understand the physical coupling to an external magnetic field: torque $\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$ and potential energy $U = -\mathbf{m}\cdot\mathbf{B}$.
3. Distinguish uniform $\mathbf{B}$ (net force $\mathbf{F} = \mathbf{0}$, pure torque) from non-uniform $\mathbf{B}$ ($\mathbf{F} = \nabla(\mathbf{m}\cdot\mathbf{B})$), which frequently appears as a GRE trap.

**Active 2026-09-17.** Turn 1 opened with baseline alignment and diagnostic question.

### Prior context
- **Already computable:** Magnetic force on a straight current segment $\mathbf{F} = I(\mathbf{L} \times \mathbf{B})$ (or $\mathrm{d}\mathbf{F} = I(\mathrm{d}\mathbf{l}\times\mathbf{B})$); electric dipole definition $\mathbf{p} = q\mathbf{d}$ (torque/energy coupling not assumed).
- **What broke:**
- **New object had to:**

---

## Turns

### Turn 1 — 2026-09-17 (learner)

> First activate Daily note addition skill to record this item, then invoke the Learn skill to guide me through this.
>
> [Image attachment: Flashcard / Question card]
>
> **Transcript:**
> DIPOLES
> What is the magnetic dipole moment $m$ of a current loop carrying current $I$ and enclosing area vector $A$?
>
> $$\mathbf{m} = I\mathbf{A} \quad (2.53)$$
>
> $\mathbf{A} =$ area vector normal to the loop (right-hand rule).
>
> **Visual / marks:** Minimalist flashcard with cream rounded-card container. Header "DIPOLES" in brown small-caps. Centered question text with italicized variables $m$, $I$, $A$. Light dashed horizontal separator line. Centered equation $\mathbf{m} = I\mathbf{A}$ in bold math font with equation reference label (2.53) in gray. Definition line below explains $\mathbf{A}$ is the area vector normal to the loop determined by the right-hand rule.

### Tutor

Aligning with your baseline in [[Progress-context]]: you already know the electric dipole moment $\mathbf{p} = q\mathbf{d}$ and how it couples to an electric field via torque $\boldsymbol{\tau} = \mathbf{p} \times \mathbf{E}$ and potential energy $U = -\mathbf{p} \cdot \mathbf{E}$.

Equation (2.53), $\mathbf{m} = I\mathbf{A}$, defines the exact magnetic analogue for any closed planar loop:
1. **Magnitude:** $|\mathbf{m}| = I A$ (or $N I A$ if wound with $N$ turns). It measures how strong the current loop is as an elementary magnetic source.
2. **Direction:** The vector $\mathbf{A}$ points perpendicular to the loop's plane. By the right-hand rule: curl your right-hand fingers along the direction of current flow around the loop, and your thumb points in the direction of $\mathbf{m}$ (the effective "North pole" of the loop).

Once $\mathbf{m}$ is defined, it couples to an external $\mathbf{B}$-field in exact parallel to electrostatics:
$$\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}, \quad U = -\mathbf{m}\cdot\mathbf{B}$$

To locate where to start our focus: is your primary question how the Lorentz force on each loop edge naturally adds up to produce this torque $\mathbf{m} \times \mathbf{B}$, how the right-hand rule orientation works in practice, or how this is tested on the Physics GRE (such as net force in uniform vs. non-uniform fields)?

### Turn 2 — 2026-09-17 (learner)

> 1. > you already know the electric dipole moment 𝐩 = q𝐝 and
>   how it couples to an electric field via torque 𝛕 = 𝐩 × 𝐄 and potential energy U = -𝐩 · 𝐄.
> I don't know them except electric dipole moment. Where did you get them from? 
> 2. What does "wound with" mean? Curl? 
> 3. My primary concern is the definition of all these "messy" definitions in EM. I was confused since undergradute. Today, I finally have the oppotunity to figure it out, and practice it to ensure retention, especially with respect to that of GRE

### Tutor

You called me out fairly: that was an unwarranted assumption not listed in your [[Progress-context]]. Let's discard unearned analogies and build directly from what is physically concrete.

First, the vocabulary: **"wound with"** has nothing to do with the vector calculus operation `curl` ($\nabla \times$). "Wound" is simply the past participle of the everyday verb *to wind* (like winding wire around a spool). If you take a copper wire and wrap it around a frame 10 times, the coil is "wound with $N = 10$ turns." Since each turn carries current $I$, $N$ turns pack $N$ times as much circulating current into that area, giving $|\mathbf{m}| = N I A$.

Now, why does this "messy" definition $\mathbf{m} = I\mathbf{A}$ exist at all?

In electrodynamics, quantities like this aren't invented for decoration; they are forced on us by the Lorentz force on a current, $\mathbf{F} = I(\mathbf{L} \times \mathbf{B})$.

Imagine a flat rectangular wire loop of width $a$ and height $b$ (area $A = ab$) carrying current $I$, placed in a uniform magnetic field $\mathbf{B}$:
- The top and bottom wires feel equal and opposite forces that cancel.
- The left and right vertical wires (length $b$) each feel a force of magnitude $F = I b B$, also pointing in opposite directions.

The net force on the loop is zero ($\mathbf{F}_{\text{net}} = \mathbf{0}$). But because the two forces act along different lines separated by the width $a$, they act like two hands turning a steering wheel—they exert a **torque** $\tau$.

Calculating the torque about the loop's central axis:
$$\tau = F \times (\text{lever arm}) = (I b B) \times (a \sin\theta) = I (ab) B \sin\theta$$

Notice what just happened: the current $I$ and the geometric area $A = ab$ naturally merged into a single product, $I A$.

If you were the physicist looking at this loop twist with magnitude $\tau = (IA) B \sin\theta$, what single vector definition for $\mathbf{m}$ would turn this formula into the compact cross product $\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$?

### Turn 3 — 2026-09-17 (learner)

> What is the direction of the magnetic field? I guess it is nearly parallel to a based on your formula.
> m vector equals IA vector.

### Tutor

Spot on: $\mathbf{m} = I\mathbf{A}$. Defining the vector $\mathbf{m}$ along the loop's normal area vector $\mathbf{A}$ turns that torque into the universal law:
$$\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$$

And your physical intuition about the direction of $\mathbf{B}$ is sharp. Look at what happens looking down along the rotation axis:

```
Case 1: B in plane of loop, along width a (theta = 90 deg between m and B)
        F (into page)
        (x)--------------(.) F (out of page)   ==> MAX TORQUE!
             \          /
               --> B (along width)
                  ^
                  | m (normal to loop)

Case 2: Loop turned so m aligns with B (theta = 0 deg)
            F (pulls left)           F (pulls right)
             <--(x)--------------(.)-->        ==> ZERO TORQUE!
                     --> B
                     --> m (normal)
```

1. **When $\mathbf{B}$ lies in the plane of the loop (along width $a$, $\theta = 90^\circ$ relative to the normal $\mathbf{m}$):** One side is pushed into the page, the other pulled out. The lever arm is maximized, giving maximum torque $\tau = m B$.
2. **When the loop turns until its face is perpendicular to $\mathbf{B}$ ($\mathbf{m}$ aligns with $\mathbf{B}$, $\theta = 0^\circ$):** The magnetic forces pull the two sides directly away from each other. The lever arm collapses to zero, so $\tau = m B \sin(0^\circ) = 0$.

This means the magnetic field $\mathbf{B}$ always torques the loop until $\mathbf{m}$ points in the same direction as $\mathbf{B}$—just like a compass needle aligning with Earth's magnetic field!

Now, connecting this to **potential energy**: if $\mathbf{B}$ naturally twists the dipole until it aligns ($\mathbf{m} \parallel \mathbf{B}$), is that aligned state the position of **lowest** potential energy or **highest** potential energy?

### Turn 4 — 2026-09-17 (learner)

> I see. θ is the angular between B and loop plane. And whichever we chose a or b as the I, it doesn't affect the final result. It is always torque = IabBsinθ.
> Lowest potential energy.

### Tutor

You got two key physical insights right:
1. **Lowest potential energy:** Exactly. The aligned state ($\mathbf{m} \parallel \mathbf{B}$) is the most stable equilibrium. Because $\cos(0^\circ) = +1$, defining the potential energy with a minus sign:
$$U = -\mathbf{m}\cdot\mathbf{B} = -m B \cos\theta$$
ensures that alignment gives the minimum energy ($U_{\min} = -m B$), while anti-alignment ($\theta = 180^\circ$) gives the highest energy ($U_{\max} = +m B$).
2. **Dimension symmetry:** Whether the current runs along $a$ or $b$, the enclosed area is $A = ab$. The specific rectangular edge lengths dissolve; only the total enclosed area $A$ matters.

**Now, catch the single biggest trap in GRE dipole problems:**

You wrote: *"$\theta$ is the angle between $\mathbf{B}$ and loop plane."*

Watch out—this is not true! In the cross product $\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$, $\theta$ is the angle between the vector $\mathbf{m}$ and $\mathbf{B}$.

Because $\mathbf{m}$ points along the **normal** $\mathbf{A}$ (perpendicular to the loop):
- $\theta$ is measured from the **normal vector** $\hat{\mathbf{n}}$, NOT from the surface of the loop plane.
- Test it on Case 1: when $\mathbf{B}$ lies in the plane of the loop, the angle between $\mathbf{B}$ and the plane is $0^\circ$. If you plugged $0^\circ$ into $\sin\theta$, you would get $\tau = 0$, which is backwards—that's when torque is *maximum*! The angle between the normal $\mathbf{m}$ and $\mathbf{B}$ is actually $90^\circ$, giving $\sin(90^\circ) = 1$.

Let's test this directly on a GRE-style question:

A flat circular coil of $N = 20$ turns and area $A = 0.05\,\text{m}^2$ carries current $I = 2\,\text{A}$ in a uniform field $B = 0.4\,\text{T}$. If the **plane of the coil** makes an angle of $30^\circ$ with the magnetic field $\mathbf{B}$, what is the magnitude of the torque $\tau$ acting on the coil?

### Turn 5 — 2026-09-17 (learner)

> theta is the angular between the unit norm of the loop plane and B vector.
> in this case, theta = 60˚ -> τ = mBsin60˚ = 0.04 • square root of 3/2

### Tutor

You completely dismantled the trap:
1. **The angle definition:** $\theta$ is indeed the angle between the **unit normal** $\hat{\mathbf{n}}$ and $\mathbf{B}$.
2. **The geometry:** Plane tilted at $30^\circ \implies \theta = 90^\circ - 30^\circ = 60^\circ$.
3. **The formula:** $\tau = m B \sin 60^\circ$ with $\sin 60^\circ = \frac{\sqrt{3}}{2}$.

The only tiny detail to watch is the **number of turns** $N$:
Your $0.04$ came from a single turn ($I A B = 2 \times 0.05 \times 0.4 = 0.04$).
Since the coil has $N = 20$ turns:
$$m = N I A = 20 \times 2 \times 0.05 = 2\,\text{A}\cdot\text{m}^2$$
$$\tau = m B \sin 60^\circ = 2 \times 0.4 \times \frac{\sqrt{3}}{2} = 0.4\sqrt{3}\,\text{N}\cdot\text{m} \approx 0.69\,\text{N}\cdot\text{m}$$

---

### Core GRE Toolkit for Magnetic Dipoles

1. **Definition:** $\mathbf{m} = N I \mathbf{A}$
   - Magnitude: current $\times$ enclosed area $\times$ number of turns.
   - Direction: Right-hand rule (curl fingers along current $I$, thumb points along $\mathbf{A} \parallel \mathbf{m}$, loop's North pole).
2. **Torque:** $\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$
   - Magnitude: $\tau = m B \sin\theta$.
   - $\theta$ is measured from the **normal vector** $\mathbf{m}$ to $\mathbf{B}$ (if given angle $\alpha$ to the plane, $\theta = 90^\circ - \alpha$).
3. **Potential Energy:** $U = -\mathbf{m}\cdot\mathbf{B} = -m B \cos\theta$
   - Stable equilibrium (minimum energy): aligned ($\theta = 0^\circ, U_{\min} = -m B$).
   - Unstable equilibrium (maximum energy): anti-aligned ($\theta = 180^\circ, U_{\max} = +m B$).
4. **Force in B-field (Classic GRE Trap):**
   - **Uniform $\mathbf{B}$:** $\mathbf{F}_{\text{net}} = \mathbf{0}$ (no translation, only pure rotation/torque).
   - **Non-uniform $\mathbf{B}$:** $\mathbf{F} = \nabla(\mathbf{m}\cdot\mathbf{B}) \neq \mathbf{0}$ (dipole is attracted toward regions of stronger field if aligned).

---

### Turn 6 — 2026-09-17 (learner)

> What is the name of m vector? Magnetic dipoles? 
> Why the form of potential Energy is like that?
> Upon completion of clarifying, give me some drills to build the retention of these 2 concepts.

### Tutor

#### 1. The Naming: "Dipole" vs. "Dipole Moment"
- **Magnetic dipole** (磁偶极子) is the **physical object itself**—the current loop, bar magnet, or spinning electron.
- **Magnetic dipole moment** (磁偶极矩) is the **vector quantity** $\mathbf{m} = I\mathbf{A}$.
- In physics, the word *"moment"* (矩) always describes the rotational or distant leverage of a physical quantity (like moment of inertia $I = \int r^2\,\mathrm{d}m$, or torque as moment of force $\mathbf{r} \times \mathbf{F}$). Just as an electric dipole has an *electric dipole moment* $\mathbf{p} = q\mathbf{d}$, a magnetic dipole has a *magnetic dipole moment* $\mathbf{m} = I\mathbf{A}$.

#### 2. Why Potential Energy Takes the Form $U = -\mathbf{m}\cdot\mathbf{B}$
Potential energy is simply the **work required by an external agent** to twist the loop from a reference orientation $\theta_0$ to angle $\theta$:
$$W_{\text{ext}} = \int_{\theta_0}^\theta \tau_{\text{ext}} \,\mathrm{d}\theta'$$

Because the magnetic field exerts an internal restoring torque $\tau_B = -m B \sin\theta'$ (trying to pull $\theta$ back to $0$), to turn the loop slowly without angular acceleration you must supply an equal and opposite external torque:
$$\tau_{\text{ext}} = +m B \sin\theta'$$

Integrating this work gives:
$$\Delta U = \int_{\theta_0}^\theta m B \sin\theta' \,\mathrm{d}\theta' = -m B \cos\theta + m B \cos\theta_0$$

By universal convention, we set the zero-energy reference at $\theta_0 = 90^\circ$ (where the loop is perpendicular to its natural alignment, so $\cos 90^\circ = 0$). This leaves:
$$U(\theta) = -m B \cos\theta = -\mathbf{m}\cdot\mathbf{B}$$

The minus sign is physically required:
- When $\mathbf{m} \parallel \mathbf{B}$ ($\theta = 0^\circ$): $\cos 0^\circ = 1 \implies U = -m B$ (the lowest possible energy, maximum stability).
- When $\mathbf{m} \ antiparallel \ \mathbf{B}$ ($\theta = 180^\circ$): $\cos 180^\circ = -1 \implies U = +m B$ (the highest energy, unstable equilibrium).

---

### Drill Batch 1 (Physics GRE Level)

Work through these three problems. No multiple-choice guessing—write out your key steps and final expressions.

#### Problem 1 (Vector normal, turns, & torque)
A circular coil with $N = 50$ turns of radius $R = 10\,\text{cm}$ carries a steady current of $I = 4\,\text{A}$. It is placed in a uniform magnetic field $\mathbf{B} = 0.5\,\text{T}\,\hat{\mathbf{x}}$. The coil lies in the plane described by the Cartesian equation $y + \sqrt{3}z = 0$, with current circulating such that its normal vector has a positive $z$-component.
(a) Find the magnetic dipole moment vector $\mathbf{m}$ in terms of unit vectors $\hat{\mathbf{x}}, \hat{\mathbf{y}}, \hat{\mathbf{z}}$.
(b) Find the torque vector $\boldsymbol{\tau}$ acting on the coil.

#### Problem 2 (Energy change & work)
A planar square loop of side length $s$ carrying current $I$ is initially at rest in stable equilibrium inside a uniform magnetic field $\mathbf{B} = B_0 \hat{\mathbf{z}}$. An external mechanism slowly rotates the loop by $180^\circ$ around the $x$-axis until its dipole moment points antiparallel to $\mathbf{B}$.
(a) How much mechanical work did the external agent perform on the loop during this rotation?
(b) If the loop is released from rest at this $180^\circ$ position with an infinitesimal perturbation, what is the maximum kinetic energy the loop acquires as it swings back?

#### Problem 3 (Force vs. Torque trap: Uniform vs. Gradient field)
A small point-like magnetic dipole $\mathbf{m} = m_0 \hat{\mathbf{z}}$ is placed at the origin in two separate field configurations:
- **Field 1:** $\mathbf{B}_1 = B_0 \hat{\mathbf{x}} + B_0 \hat{\mathbf{z}}$ (uniform)
- **Field 2:** $\mathbf{B}_2 = C z \hat{\mathbf{z}}$ (where $C > 0$ is a constant gradient)

For each field configuration, determine:
(a) Is the net magnetic force $\mathbf{F}_{\text{net}}$ on the dipole zero or non-zero? If non-zero, state its vector direction.
(b) Is the net torque $\boldsymbol{\tau}$ on the dipole zero or non-zero? If non-zero, state its vector direction.

### Turn 7 — 2026-09-17 (learner)

> I forget how to calculate unit normal vector in terms of x,y,z, given the equation of the plane. Is it important in GRE?

### Tutor

**Yes, it is very important on the GRE.** ETS loves plane equations because they test 3D spatial intuition in 30 seconds across several domains: optics (reflection from tilted mirrors), electrodynamics (flux $\Phi = \mathbf{B}\cdot\mathbf{A}$, boundary conditions, dipole orientations), and mechanics (slanted surfaces).

Here is the 10-second rule to lock into memory:

Any flat plane in Cartesian coordinates is defined by:
$$A x + B y + C z = D$$

The coefficients $(A, B, C)$ **are** the components of the normal vector $\mathbf{n}$:
$$\mathbf{n} = A\hat{\mathbf{x}} + B\hat{\mathbf{y}} + C\hat{\mathbf{z}}$$

*(Why? Because the equation says $\mathbf{n}\cdot\mathbf{r} = D$, meaning every position vector $\mathbf{r}$ on the plane projects to the exact same constant length along $\mathbf{n}$.)*

To convert $\mathbf{n}$ into a **unit normal vector** $\hat{\mathbf{n}}$, simply divide by its length:
$$\hat{\mathbf{n}} = \frac{\mathbf{n}}{|\mathbf{n}|} = \frac{A\hat{\mathbf{x}} + B\hat{\mathbf{y}} + C\hat{\mathbf{z}}}{\sqrt{A^2 + B^2 + C^2}}$$

Applying this to Problem 1:
The plane is $y + \sqrt{3}z = 0$, which is $0x + 1y + \sqrt{3}z = 0$.
What are $\mathbf{n}$ and its unit vector $\hat{\mathbf{n}}$?

### Turn 8 — 2026-09-17 (learner)

> And I don't know how to do cross product in terms of cartesian coordiantes.
>
> [Image attachment: Handwritten notebook page]
>
> **Transcript:**
> N = 50   R = 10 cm = 0.1 m
>          I = 4 A   \vec{B} = 0.5 T \hat{x}
> plane: y + \sqrt{3} z = 0
>
> (a) \vec{m} ? (\hat{x}, \hat{y}, \hat{z})
> the unit normal vector:
> \vec{n} = x_n \hat{x} + y_n \hat{y} + z_n \hat{z}
> \vec{n} = \hat{y} + \sqrt{3}\hat{z}
> \hat{n} = \frac{\vec{n}}{|\vec{n}|} = \frac{1}{\sqrt{1+3}} \vec{n}
> = \frac{1}{2}\hat{y} + \frac{\sqrt{3}}{2}\hat{z}
>
> \vec{m} = N I \vec{A}
> = N I \pi R^2 \cdot \hat{n}
> = 50 \cdot 4 \cdot \pi \cdot 0.01 \cdot \hat{n}
> = 2\pi (\frac{1}{2}\hat{y} + \frac{\sqrt{3}}{2}\hat{z})
> = \pi \hat{y} + \sqrt{3}\pi \hat{z}
>
> **Visual / marks:** Vertical lined notepad page written in pencil. Clear, step-by-step derivation: correctly extracts normal $\mathbf{n} = \hat{\mathbf{y}} + \sqrt{3}\hat{\mathbf{z}}$, normalizes to $\hat{\mathbf{n}} = \frac{1}{2}\hat{\mathbf{y}} + \frac{\sqrt{3}}{2}\hat{\mathbf{z}}$, applies $\mathbf{m} = N I A \hat{\mathbf{n}}$ with $N = 50$, $R = 0.1\,\text{m}$, finding $\mathbf{m} = \pi \hat{\mathbf{y}} + \sqrt{3}\pi \hat{\mathbf{z}}$. Clean arithmetic with crossed-out intermediate scribbles.

### Tutor

Your handwritten derivation for part (a) is **100% flawless**. You found $\mathbf{n}$, normalized it to $\hat{\mathbf{n}}$, accounted for $N = 50$ turns, computed the area, and correctly reached:
$$\mathbf{m} = \pi \hat{\mathbf{y}} + \sqrt{3}\pi \hat{\mathbf{z}}$$

Now, here is the fastest way to compute cross products in Cartesian coordinates on the GRE.

#### The 10-Second Method: The Cyclic Circle
For the GRE, 90% of cross products involve vectors where at least one vector has only 1 or 2 non-zero components (like $\mathbf{B} = 0.5\hat{\mathbf{x}}$). You never need to write a tedious $3 \times 3$ determinant.

Just draw this 3-letter cycle in your head:
```
       x
     ↗   ↘
    z  ←  y
```
- **Going with the cycle ($x \to y \to z \to x$):** positive sign!
  $$\hat{\mathbf{x}} \times \hat{\mathbf{y}} = +\hat{\mathbf{z}}, \quad \hat{\mathbf{y}} \times \hat{\mathbf{z}} = +\hat{\mathbf{x}}, \quad \hat{\mathbf{z}} \times \hat{\mathbf{x}} = +\hat{\mathbf{y}}$$
- **Going against the cycle:** negative sign!
  $$\hat{\mathbf{y}} \times \hat{\mathbf{x}} = -\hat{\mathbf{z}}, \quad \hat{\mathbf{z}} \times \hat{\mathbf{y}} = -\hat{\mathbf{x}}, \quad \hat{\mathbf{x}} \times \hat{\mathbf{z}} = -\hat{\mathbf{y}}$$
- **Any vector crossed with itself is zero:**
  $$\hat{\mathbf{x}} \times \hat{\mathbf{x}} = \hat{\mathbf{y}} \times \hat{\mathbf{y}} = \hat{\mathbf{z}} \times \hat{\mathbf{z}} = \mathbf{0}$$

#### Applying it to find $\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$:
You have:
$$\mathbf{m} = \pi \hat{\mathbf{y}} + \sqrt{3}\pi \hat{\mathbf{z}}, \quad \mathbf{B} = 0.5\hat{\mathbf{x}}$$

Distribute the cross product directly like regular algebra:
$$\boldsymbol{\tau} = (\pi \hat{\mathbf{y}} + \sqrt{3}\pi \hat{\mathbf{z}}) \times (0.5 \hat{\mathbf{x}}) = 0.5\pi (\hat{\mathbf{y}} \times \hat{\mathbf{x}}) + 0.5\sqrt{3}\pi (\hat{\mathbf{z}} \times \hat{\mathbf{x}})$$

Using the cyclic circle:
- What is $\hat{\mathbf{y}} \times \hat{\mathbf{x}}$?
- What is $\hat{\mathbf{z}} \times \hat{\mathbf{x}}$?

What does this give for your final torque vector $\boldsymbol{\tau}$?

### Turn 9 — 2026-09-17 (learner)

> 1. - z hat
> 2. + y hat
>
> [Image attachment: Handwritten notebook page]
>
> **Transcript:**
> \vec{\tau} = \vec{m} \times \vec{B}
> = (\pi \hat{y} + \sqrt{3}\pi \hat{z}) \times (0.5 \hat{x})
> = \pi \hat{y} \times 0.5 \hat{x} + \sqrt{3}\pi \hat{z} \times 0.5 \hat{x}
> = -\frac{\pi}{2} \hat{z} + \frac{\sqrt{3}}{2}\pi \hat{y}
> = \frac{\sqrt{3}}{2}\pi \hat{y} - \frac{\pi}{2} \hat{z}
>
> **Visual / marks:** Notepad page in pencil. Fully carried out distributive cross-product calculation: substitutes $\hat{y}\times\hat{x} = -\hat{z}$ and $\hat{z}\times\hat{x} = +\hat{y}$ cleanly, leading directly to the final torque vector $\boldsymbol{\tau} = \frac{\sqrt{3}}{2}\pi \hat{\mathbf{y}} - \frac{\pi}{2}\hat{\mathbf{z}}$.

### Tutor

**Bingo.** Your final torque vector is exact:
$$\boldsymbol{\tau} = \frac{\sqrt{3}}{2}\pi \hat{\mathbf{y}} - \frac{\pi}{2} \hat{\mathbf{z}}\,\text{N}\cdot\text{m}$$

**Quick Two-Way Check (30-second sanity check):**
- Magnitude from components: $|\boldsymbol{\tau}| = \sqrt{\left(\frac{\sqrt{3}}{2}\pi\right)^2 + \left(-\frac{\pi}{2}\right)^2} = \pi\,\text{N}\cdot\text{m}$.
- Magnitude from formula: $|\mathbf{m}| = 2\pi\,\text{A}\cdot\text{m}^2$ (lying entirely in the $yz$-plane), and $\mathbf{B} = 0.5\,\hat{\mathbf{x}}$ is perpendicular to the $yz$-plane ($\theta = 90^\circ$).
  $$\tau = m B \sin(90^\circ) = (2\pi)(0.5)(1) = \pi\,\text{N}\cdot\text{m}$$

They match identically. Problem 1 is completely conquered!

---

Now on to **Problem 2 (Energy change & work)**:

A planar square loop of side length $s$ carrying current $I$ is initially at rest in stable equilibrium inside a uniform magnetic field $\mathbf{B} = B_0 \hat{\mathbf{z}}$. An external mechanism slowly rotates the loop by $180^\circ$ around the $x$-axis until its dipole moment points antiparallel to $\mathbf{B}$.

- (a) How much mechanical work $W_{\text{ext}}$ did the external agent perform on the loop during this rotation?
- (b) If the loop is released from rest at this $180^\circ$ position with an infinitesimal perturbation, what is the maximum kinetic energy $K_{\max}$ the loop acquires as it swings back?

Give this one a shot!

### Turn 10 — 2026-09-17 (learner)

> Let's go
>
> [Image attachment: Handwritten notebook page]
>
> **Transcript:**
> s [square diagram of side s]  I     \vec{B} = B_0 \hat{z}
>
> (a) W_ext = \Delta U
>     = U_t - U_0
>     = U_t = - \vec{m} \cdot \vec{B}
>     = - m B \cos\theta
> where \vec{m} = N I \vec{A} (antiparallel)
>     = 1 \cdot I \cdot s^2 \cdot (-\hat{z})
> \vec{B} = B_0 \hat{z}
> \vec{m} \cdot \vec{B} = I B_0 s^2 \cdot (-1)
> \to W_ext = s^2 I B_0
>
> (b) K_max = \Delta U = s^2 I B_0
>
> **Visual / marks:** Notepad page in pencil. Correctly identifies $W_{\text{ext}} = \Delta U = U_t - U_0$ and $K_{\max} = \Delta U$, correctly computes $U_t = +s^2 I B_0$ for the antiparallel state, but sets $U_0 = 0$ instead of $U_0 = -s^2 I B_0$, resulting in $W_{\text{ext}} = s^2 I B_0$ instead of $2 s^2 I B_0$.

### Tutor

You did 90% of the physics brilliantly:
- You correctly identified $W_{\text{ext}} = \Delta U = U_t - U_0$.
- You correctly found $U_t = +s^2 I B_0$ for the antiparallel final state.
- You recognized that by conservation of mechanical energy, $K_{\max} = \Delta U$.

**Now, catch the classic trap you just walked into:**

In line 3 of your derivation, you wrote:
$$W_{\text{ext}} = U_t - U_0 = U_t$$
You assumed $U_0 = 0$!

Reread the problem setup:
The loop starts in **stable equilibrium**.
In stable equilibrium, the dipole is **aligned** with $\mathbf{B}$ ($\theta = 0^\circ$):
$$\mathbf{m}_0 = +I s^2 \hat{\mathbf{z}}$$
$$U_0 = -\mathbf{m}_0 \cdot \mathbf{B} = -(I s^2 \hat{\mathbf{z}})\cdot(B_0 \hat{\mathbf{z}}) = -s^2 I B_0$$

Notice: $U_0$ is **negative**, not zero! (Remember: $U = 0$ is at $\theta = 90^\circ$, when the loop is perpendicular to the field).

Now compute the actual difference:
$$W_{\text{ext}} = U_t - U_0 = (+s^2 I B_0) - (-s^2 I B_0) = 2 s^2 I B_0$$

And for (b):
As the loop swings from the highest energy state ($U_t = +s^2 I B_0$) back through the ground state ($U_0 = -s^2 I B_0$):
$$K_{\max} = U_t - U_0 = 2 s^2 I B_0$$

This factor of $2$ is the #1 trap on the Physics GRE for dipole work/energy problems!
Flipping a dipole from parallel to antiparallel is always:
$$\Delta U = (+m B) - (-m B) = 2 m B$$

---

Now for the final problem of the drill: **Problem 3 (Force vs. Torque trap: Uniform vs. Gradient field)**

A point-like magnetic dipole $\mathbf{m} = m_0 \hat{\mathbf{z}}$ is placed at the origin in two separate field configurations:
- **Field 1:** $\mathbf{B}_1 = B_0 \hat{\mathbf{x}} + B_0 \hat{\mathbf{z}}$ (uniform)
- **Field 2:** $\mathbf{B}_2 = C z \hat{\mathbf{z}}$ (where $C > 0$ is a constant gradient)

For each field:
- (a) Is the net magnetic force $\mathbf{F}_{\text{net}}$ zero or non-zero? If non-zero, state its direction.
- (b) Is the net torque $\boldsymbol{\tau}$ zero or non-zero? If non-zero, state its direction.

### Turn 11 — 2026-09-17 (learner)

> LEt's go
>
> [Image attachment: 2 handwritten notebook pages]
>
> **Transcript (Page 1):**
> \Delta U = 2 s^2 I B_0
> always 2 m B \iff \Delta U
> \vec{m} = m_0 \hat{z}    \begin{cases} \vec{B}_1 = B_0 \hat{x} + B_0 \hat{z} & (1) \\ \vec{B}_2 = C z \hat{z} & (2) \end{cases}
> (a) d\vec{F} = I d\vec{l} \times \vec{B}
> \vec{m} = N I \vec{A} = I \vec{A} = I d^2 l \cdot \hat{n}
> assume this point is an infinitesimal area with width of dl
> How to judge whether the Force is zero or not?
> whether U is at minimum.
> U_{\min} = - m B
> U_{\text{current}} (1) = - (m_0 \hat{z}) \cdot (B_0 \hat{x} + B_0 \hat{z}) = - m_0 B_0.
> whereas |\vec{B}_1| = \sqrt{2} B_0 \to \text{not minimum}
> (1): Force is not zero, and its direction is [diagram showing m along z, B in xz plane, F drawn in direction of B]
>
> **Transcript (Page 2):**
> U_{\text{current}} (2) = - (m_0 \hat{z}) \cdot (C z \hat{z}) \text{ is the lowest one} \to \text{Zero}
> [Draws cyclic circle: x -> y -> z -> x]
> (b) \vec{\tau} = \vec{m} \times \vec{B}_1
> \vec{\tau}_{(1)} = (m_0 \hat{z}) \times (B_0 \hat{x} + B_0 \hat{z}) = m_0 B_0 (\hat{z} \times \hat{x}) + 0 = m_0 B_0 \hat{y}
> \vec{\tau}_{(2)} = \vec{m} \times \vec{B}_2 = (m_0 \hat{z}) \times (C z \hat{z}) = 0
>
> **Visual / marks:** Two notepad pages in pencil. Page 1 reflects on $\Delta U = 2 m B$, sets up Field 1 and 2. Questions how to judge force, assumes force depends on whether $U$ is at minimum. Concludes Field 1 has non-zero force and Field 2 has zero force. Page 2 draws the cyclic circle, computes torques: $\boldsymbol{\tau}_1 = m_0 B_0 \hat{\mathbf{y}}$ (non-zero) and $\boldsymbol{\tau}_2 = \mathbf{0}$ (zero) with 100% precision.

### Tutor

**Part (b) is 100% flawless:**
- Field 1: $\boldsymbol{\tau}_1 = (m_0 \hat{\mathbf{z}}) \times (B_0 \hat{\mathbf{x}} + B_0 \hat{\mathbf{z}}) = m_0 B_0 (\hat{\mathbf{z}} \times \hat{\mathbf{x}}) = m_0 B_0 \hat{\mathbf{y}}$ (non-zero!).
- Field 2: $\boldsymbol{\tau}_2 = (m_0 \hat{\mathbf{z}}) \times (C z \hat{\mathbf{z}}) = \mathbf{0}$ (zero!).
You used the cyclic circle cleanly and got both immediately.

---

**Now look at Part (a): The Fundamental Split between Force and Torque**

Your intuition in asking: *"How to judge whether the Force is zero or not? whether U is at minimum?"* reveals the core trap.

In physics, potential energy depends on **two different types of coordinates**:
1. **Orientation** $\theta$ (angle) $\longrightarrow$ **Torque:** $\tau = -\frac{\partial U}{\partial \theta}$
2. **Spatial Position** $\mathbf{r} = (x, y, z)$ $\longrightarrow$ **Force:** $\mathbf{F} = -\nabla U$

If $U$ is not at an angular minimum, the system wants to **rotate** (torque). But that does **not** mean it wants to translate (force)!
To have a **force** ($\mathbf{F} = -\nabla U \neq \mathbf{0}$), the potential energy must change when you **shift position in space**.

Look at the two fields:

#### Field 1: $\mathbf{B}_1 = B_0 \hat{\mathbf{x}} + B_0 \hat{\mathbf{z}}$ (Uniform field)
- $U = -\mathbf{m}\cdot\mathbf{B}_1 = -m_0 B_0$.
- Is $B_0$ changing with $x$, $y$, or $z$? No, it is constant everywhere in space.
- If you move the dipole from the origin to $(10, 20, 30)$, $U$ is still $-m_0 B_0$.
- Because $U$ does not vary with position, $\nabla U = \mathbf{0}$:
  $$\mathbf{F}_1 = -\nabla U = \mathbf{0} \quad (\text{ZERO force!})$$
- **GRE Invariant:** The net magnetic force on ANY closed current loop in ANY uniform magnetic field is **always strictly zero**. (The forces on opposite sides cancel identically).

#### Field 2: $\mathbf{B}_2 = C z \hat{\mathbf{z}}$ (Gradient / Non-uniform field)
- $U(z) = -\mathbf{m}\cdot\mathbf{B}_2 = -(m_0 \hat{\mathbf{z}})\cdot(C z \hat{\mathbf{z}}) = -m_0 C z$.
- Look at $U(z)$: it explicitly depends on the coordinate $z$!
- If the dipole moves to higher $z$, $U$ becomes more negative (lower energy). Nature pulls things toward lower potential energy:
  $$\mathbf{F}_2 = -\nabla U = -\frac{\partial U}{\partial z}\hat{\mathbf{z}} = -\frac{\partial}{\partial z}(-m_0 C z)\hat{\mathbf{z}} = +m_0 C \hat{\mathbf{z}} \quad (\text{NON-ZERO force, in }+\hat{\mathbf{z}}\text{ direction!})$$
- This is why an aligned magnet is physically sucked into a region of stronger magnetic field (the Stern-Gerlach effect / magnetic attraction).

---

### Closing the Loop: The 3 Error-Prone Patterns to Lock

We have completed the drill batch. Here are the **3 exact patterns** where ETS sets traps on the GRE:

1. **The Angle Trap ($\theta$ is to the Normal, NOT the plane):**
   - In $\tau = m B \sin\theta$, $\theta$ is the angle between $\mathbf{m}$ (the unit normal $\hat{\mathbf{n}}$) and $\mathbf{B}$.
   - If the problem says *"the plane of the coil is at angle $\alpha$ to $\mathbf{B}$,"* then $\theta = 90^\circ - \alpha$.
2. **The "Factor of 2" in Dipole Work ($\Delta U = 2 m B$):**
   - The stable equilibrium ground state is $U_0 = -m B$ (NOT zero!).
   - Rotating from parallel to antiparallel is:
     $$\Delta U = U_f - U_i = (+m B) - (-m B) = 2 m B$$
   - Zero potential energy ($U = 0$) occurs only when perpendicular ($\theta = 90^\circ$).
3. **Torque vs. Force (Uniform vs. Gradient field):**
   - **Uniform field ($\nabla B = 0$):** $\mathbf{F}_{\text{net}} = \mathbf{0}$ always. The loop can rotate ($\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$), but it cannot translate.
   - **Gradient field ($\nabla B \neq 0$):** $\mathbf{F} = \nabla(\mathbf{m}\cdot\mathbf{B}) \neq \mathbf{0}$. The dipole feels a net linear force pulling it toward the stronger field (if aligned).





