---
type: learning-progress
topic: "Time-independent Schrödinger equation"
area: Quantum Mechanics
status: solid-enough
created: 2026-07-26
downstream: "[[2026-07-26-2112 Harmonic oscillator]]"
parent_chain: "[[2026-07-26-2030 Displacement operator]]"
---
# Time-independent Schrödinger equation — foundations

**Why this note exists:** Prerequisite for the harmonic-oscillator thread. Learner knows Dirac notation and Hermitian operators; does **not** yet have TISE as a working tool.

**Suggested scope:**
- Stationary states: when $\hat{H}$ has no explicit time dependence
- Abstract (Dirac) form: $\hat{H}|\psi\rangle=E|\psi\rangle$
- Position representation: $-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+V(x)\psi=E\psi$
- Link: Hermitian $\hat{H}$ ⇒ real $E$; eigenstates as energy basis
- Hand off to [[2026-07-26-2112 Harmonic oscillator]] when $V=\frac{1}{2}m\omega^2 x^2$ is ready

---

## Turns

### Turn 1 — 2026-07-26 (learner)

> Foundation missed: time-independent Schrödinger equation.

### Tutor

Right call — forking a separate note. HO and $D(\alpha)$ stay paused until this is usable.

You already have two pieces we need:

1. **Dirac notation** — states $|\psi\rangle$, operators acting on them  
2. **Hermitian operators** — observables with real eigenvalues

The **time-independent Schrödinger equation (TISE)** is the **energy eigenvalue equation** for the Hamiltonian:

$$
\hat{H}|\psi\rangle = E|\psi\rangle.
$$

In words: find states $|\psi\rangle$ that $\hat{H}$ multiplies by a number $E$ (the energy). Those are the **stationary states** / energy eigenstates. Because $\hat{H}$ is Hermitian, every $E$ that shows up is real — which matches what an energy must be.

When people write the 1D “differential” form, they are only unpacking $\hat{H}=\frac{\hat{p}^2}{2m}+V(\hat{x})$ in the position basis ($\hat{p}\to -i\hbar\frac{d}{dx}$):

$$
-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2}+V(x)\psi(x)=E\psi(x).
$$

Same equation; different clothing.

**Question:** In Dirac form, is $E$ an operator or a number — and how does that fit with “$\hat{H}$ is Hermitian”?

---

### Turn 2 — 2026-07-26 (learner)

> E is a number. $\hat{H}$ Hermitian is reflected on the eigenvalue of the operator being a real number instead of a complex number.

### Tutor

Correct on both counts.

- $E$ is a **scalar** (a number), not an operator. $\hat{H}$ is the operator; $E$ is what you get when $|\psi\rangle$ is an eigenstate.
- Hermitian $\Leftrightarrow$ eigenvalues real: if $\hat{H}^\dagger=\hat{H}$ and $\hat{H}|\psi\rangle=E|\psi\rangle$ (with $|\psi\rangle\neq 0$), then $E\in\mathbb{R}$. Energy cannot come out complex for a physical $\hat{H}$.

(Small precision: “Hermitian $\Rightarrow$ real eigenvalues” is the direction that matters here. The converse is subtler and we do not need it.)

**Next piece — why “time-independent”?**  
The full dynamics is the **time-dependent** Schrödinger equation

$$
i\hbar\frac{d}{dt}|\Psi(t)\rangle=\hat{H}|\Psi(t)\rangle.
$$

If $\hat{H}$ itself does **not** depend explicitly on $t$, energy eigenstates evolve only by a phase:

$$
|\Psi(t)\rangle=e^{-iEt/\hbar}|\psi\rangle,
\quad\text{where}\quad\hat{H}|\psi\rangle=E|\psi\rangle.
$$

The *shape* of the state (probabilities $|\psi(x)|^2$ in position) is fixed; only a global phase $e^{-iEt/\hbar}$ runs. That is why those $|\psi\rangle$ are called **stationary states**, and why the eigenvalue problem is “time-independent.”

**Question:** If $|\psi\rangle$ is an energy eigenstate with energy $E$, what is the probability of measuring energy $E$ at a later time $t$ — does it change with $t$?

---

### Turn 3 — 2026-07-27 (learner)

> **Primary:** Why total differential here? I think it should be partial differential.  
> [handwritten TDSE with $\partial/\partial t$ and hybrid $|\Psi(x,t)\rangle$]  
> **Also:** No, $P(E)$ doesn't change with time. But I don't know whether the probability could be calculated in this case.  
> [notes: $P(E)$, $\langle E\rangle=\langle\psi|\hat{H}|\psi\rangle$, $\langle\hat{H}\rangle=\langle\psi|\hat{H}|\psi\rangle$]

### Tutor (revised)

**1. Why $\frac{d}{dt}$ in Turn 2 — and when your partial instinct is right.**

In Turn 2 the TDSE was written for an **abstract ket that depends only on time**:

$$
i\hbar\frac{d}{dt}|\Psi(t)\rangle=\hat{H}|\Psi(t)\rangle.
$$

Here $|\Psi\rangle$ is not a function of $x$. The only independent variable is $t$, so the time derivative is an ordinary (total) derivative $\frac{d}{dt}$. That is deliberate, not a slip.

Your instinct — **partial** — is correct for the **wavefunction** picture, where the state is a function of two variables $\Psi(x,t)=\langle x|\Psi(t)\rangle$:

$$
i\hbar\frac{\partial\Psi(x,t)}{\partial t}=\hat{H}\Psi(x,t).
$$

You hold $x$ fixed and differentiate with respect to $t$ $\Rightarrow$ $\partial/\partial t$. Textbooks almost always show this form, so “it should be partial” is the default memory — and it is right **for $\Psi(x,t)$**.

| Object | Variables | Correct derivative |
|--------|-----------|-------------------|
| $\|\Psi(t)\rangle$ (Dirac ket) | $t$ only | $\frac{d}{dt}$ |
| $\Psi(x,t)$ (wavefunction) | $x$ and $t$ | $\frac{\partial}{\partial t}$ |

Hybrid writing $|\Psi(x,t)\rangle$ invites $\partial$ visually but mixes the two languages. Pick one row of the table.

Same physics either way: $\Psi(x,t)=\langle x|\Psi(t)\rangle$ is just the position components of the ket.

**2. Probability (secondary point you raised).**

For a normalized energy eigenstate $\hat{H}|\psi\rangle=E|\psi\rangle$:

$$
P(E)=\bigl|\langle\psi|\Psi\rangle\bigr|^2=1
\quad\text{(non-degenerate case)},
$$

and with $|\Psi(t)\rangle=e^{-iEt/\hbar}|\psi\rangle$ you still get $P(E,t)=1$. Fully calculable; time-independent as you said.

$\langle\hat{H}\rangle=\langle\psi|\hat{H}|\psi\rangle=E$ is the **expectation value**, not $P(E)$. For an eigenstate both “say $E$,” but one is “sure to get $E$,” the other is “average equals $E$.”

**Question:** Suppose the state is a **superposition** of two energies,  
$|\Psi(0)\rangle=\frac{1}{\sqrt{2}}\bigl(|E_1\rangle+|E_2\rangle\bigr)$ with $E_1\neq E_2$.  
What is $P(E_1)$ at $t=0$? Does $\langle\hat{H}\rangle$ equal $E_1$?

---

### Turn 4 — 2026-07-27 (learner)

> $\Psi(x,t)=\langle x|\Psi(t)\rangle$  
> What does this mean? Is it position representation? Explain it vividly and intuitively.

### Tutor (process — forked)

**Mid-session split:** this digression is representation / Dirac machinery, not TISE itself.  
Live thread moved to [[2026-07-27-1331 Position representation]] (full vivid explanation + open question live there).

TISE open items (resume after representation is usable):
- Superposition: $P(E_1)$ vs $\langle\hat{H}\rangle$ for $\frac{1}{\sqrt{2}}(|E_1\rangle+|E_2\rangle)$
- 1D position form of TISE → hand off to HO

---

### Turn 5 — 2026-07-27 (learner)

> [Image 1] How to interpret $\hat{H}|\psi\rangle=E|\psi\rangle$ vs $\langle\psi|\hat{H}|\psi\rangle=\langle\hat{H}\rangle$? Energy operator “observes” then “project to $\langle\psi|$”?  
> [Image 2] $|\Psi(0)\rangle=\frac{1}{\sqrt{2}}(|E_1\rangle+|E_2\rangle)$; $P(E_1)=\frac{1}{2}$; attempt at $\langle\hat{H}\rangle$; concludes $\langle\hat{H}\rangle\neq P(E_1)$.

### Tutor

**Image 2 — what is already right**

- $P(E_1)=\dfrac{1}{2}$ at $t=0$. Correct.  
  $P(E_1)=\bigl|\langle E_1|\Psi\rangle\bigr|^2=\bigl|\frac{1}{\sqrt{2}}\bigr|^2=\frac{1}{2}$.
- $\langle\hat{H}\rangle\neq P(E_1)$ as a **type** distinction. Correct: one is a probability ($0$–$1$), the other is an energy (e.g. joules / $\hbar\omega$ units).

**Image 2 — where the algebra slipped**

You effectively treated $\hat{H}|\Psi\rangle$ as if it were proportional to $|\Psi\rangle$ with factors $E_1,E_2$ still on the **same** ket. For a superposition that is false.

Let $|\Psi\rangle=\frac{1}{\sqrt{2}}\bigl(|E_1\rangle+|E_2\rangle\bigr)$, with $\hat{H}|E_i\rangle=E_i|E_i\rangle$ and $\langle E_i|E_j\rangle=\delta_{ij}$.

$$
\hat{H}|\Psi\rangle=\frac{1}{\sqrt{2}}\bigl(E_1|E_1\rangle+E_2|E_2\rangle\bigr)
\quad\text{(not a multiple of $|\Psi\rangle$ unless $E_1=E_2$).}
$$

$$
\begin{aligned}
\langle\hat{H}\rangle
&=\langle\Psi|\hat{H}|\Psi\rangle
=\frac{1}{2}\bigl(\langle E_1|+\langle E_2|\bigr)\bigl(E_1|E_1\rangle+E_2|E_2\rangle\bigr)\\
&=\frac{1}{2}(E_1+E_2).
\end{aligned}
$$

So $\langle\hat{H}\rangle=\frac{E_1+E_2}{2}$, not $\frac{E_1+E_2}{\sqrt{2}}$, and not $P(E_1)$.

Also: $\langle\Psi|\Psi\rangle=1$ (normalization), not “$|\psi|^2$” as a free symbol. The modulus-squared lives on **amplitudes** $\langle E_i|\Psi\rangle$, not on the whole ket.

**Image 1 — how to interpret the two formulas**

They are **different statements**. Do not read the second as “project the first after measuring.”

| Formula | When it holds | Meaning |
|---------|----------------|---------|
| $\hat{H}\|\psi\rangle=E\|\psi\rangle$ | only if $\|\psi\rangle$ is an **energy eigenstate** | Eigenvalue equation (TISE). $\hat{H}$ stretches $\|\psi\rangle$ by the number $E$. |
| $\langle\hat{H}\rangle=\langle\psi\|\hat{H}\|\psi\rangle$ | **any** normalized $\|\psi\rangle$ | Average energy if you measured energy many times on identically prepared copies. |

For an **eigenstate**: $\langle\hat{H}\rangle=E$ and $P(E)=1$ — numbers match in a special way.  
For your **superposition**: no single $E$ with $P=1$; $\langle\hat{H}\rangle=\frac{E_1+E_2}{2}$ is the **weighted average** of outcomes, while $P(E_1)=\frac{1}{2}$ is one of the **weights**.

Important: applying $\hat{H}$ to $|\psi\rangle$ is **not** “observing / measuring energy.” Measurement is a separate postulate (Born rule → eigenvalues with probabilities). $\hat{H}|\psi\rangle$ is just another vector in Hilbert space.

Sandwiching $\langle\psi|(\cdots)|\psi\rangle$ is **not** “the $\langle\psi|$ representation” in the sense of position representation. It is the definition of the expectation value in the abstract ket language.

**Question:** Using the corrected formula, if $E_1=\hbar\omega$ and $E_2=3\hbar\omega$, what is $\langle\hat{H}\rangle$? What are $P(E_1)$ and $P(E_2)$?

---

### Turn 6 — 2026-07-27 (learner)

> 1. $2\hbar\omega$  
> 2. Both are $\frac{1}{2}$

### Tutor

Correct on both.

$$
\langle\hat{H}\rangle=\frac{E_1+E_2}{2}=\frac{\hbar\omega+3\hbar\omega}{2}=2\hbar\omega,
\qquad
P(E_1)=P(E_2)=\frac{1}{2}.
$$

Check: average energy $= \sum_i P(E_i)E_i = \frac{1}{2}\hbar\omega+\frac{1}{2}(3\hbar\omega)=2\hbar\omega$. Same number, clearer meaning: **expectation value = probability-weighted sum of eigenvalues**.

**Superposition block is solid.** Short map:

| Object | Role |
|--------|------|
| $P(E_i)$ | chance of outcome $E_i$ |
| $\langle\hat{H}\rangle$ | weighted average of outcomes |
| $\hat{H}\|\psi\rangle=E\|\psi\rangle$ | only for eigenstates |

**Next step on this thread:** write TISE in the **position representation** (connect $\hat{H}|\psi\rangle=E|\psi\rangle$ to the differential equation with $V(x)$). That is the bridge back to the harmonic oscillator.

**Question:** In position language, $\hat{p}$ acts as $-i\hbar\frac{d}{dx}$. If $\hat{H}=\frac{\hat{p}^2}{2m}+V(\hat{x})$, what differential equation does a stationary wavefunction $\psi(x)=\langle x|\psi\rangle$ satisfy?

---

### Turn 7 — 2026-07-27 (learner)

> [handwritten]  
> $\hat{H}=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+\hat{V}(x)$  
> $-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\psi(x)+\hat{V}(x)\psi(x)=E\psi(x)$

### Tutor

**Structure is correct.** That is the 1D TISE in the position representation.

Chain: $\hat{p}\to -i\hbar\frac{d}{dx}$ $\Rightarrow$ $\hat{p}^2\to -\hbar^2\frac{d^2}{dx^2}$ $\Rightarrow$ kinetic term $-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$, plus multiplication by $V(x)$.

**Two small notation cleanups (not conceptual errors):**

1. For a stationary wavefunction $\psi(x)$ (only $x$), prefer ordinary derivatives $\frac{d^2}{dx^2}$. Partial $\partial$ is natural for $\Psi(x,t)$; here one variable $\Rightarrow$ $d$.
2. In position language, potential **multiplies**: $V(x)\psi(x)$. Writing $\hat{V}(x)$ is fine as an operator, but once it acts on $\psi(x)$ the clean line is

$$
-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2}+V(x)\psi(x)=E\psi(x).
$$

**TISE foundation is solid enough** for the HO handoff:

| Layer | Form |
|-------|------|
| Abstract | $\hat{H}\|\psi\rangle=E\|\psi\rangle$ |
| Position | $-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi$ |

**Resume HO:** set $V(x)=\frac{1}{2}m\omega^2 x^2$ in [[2026-07-26-2112 Harmonic oscillator]].

**Question (HO restart):** Why must the ground-state energy $E_0$ of that oscillator be **strictly positive** — using uncertainty, or that the particle cannot sit at $x=0$ with $p=0$?

