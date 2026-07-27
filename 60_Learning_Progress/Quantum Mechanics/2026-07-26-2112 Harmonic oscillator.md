---
type: learning-progress
topic: "Harmonic oscillator"
area: Quantum Mechanics
status: active
created: 2026-07-26
parent: "[[2026-07-26-2030 Displacement operator]]"
related: "[[2026-07-26-2113 Ladder operators]]"
prerequisite: "[[2026-07-26-2126 Time-independent Schrödinger equation]]"
---
# Harmonic oscillator — foundations

**Status:** **active** — TISE foundation solid enough. Resume $E_0>0$, then spectrum.

**Why this note exists:** Prerequisite for the displacement-operator thread. Learner knows Dirac notation and Hermitian operators; does **not** yet have HO ladder structure.

**Wiki (permanent, separate):** [[Harmonic Oscillator]] exists under `40_Wiki/Physics_Math/` (nuclear-shell flavored). This note is the live `/learn` session only — do not duplicate the wiki unless enriching it later.

**Suggested scope for this thread:**
- Classical setup: $V(x)=\frac{1}{2}m\omega^2 x^2$
- Quantum Hamiltonian and energy spectrum $E_n=\hbar\omega\left(n+\frac{1}{2}\right)$
- Number states $|n\rangle$ as energy eigenbasis
- Why ladder operators enter (hand off to [[2026-07-26-2113 Ladder operators]])

**Resume parent when ready:** [[2026-07-26-2030 Displacement operator]] → $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$

---

## Turns

### Turn 1 — 2026-07-26 (learner)

> Agree. Harmonic oscillator first.

### Tutor

We park $D(\alpha)$ and build the quantum harmonic oscillator (QHO) first — only using Dirac notation and Hermitian operators. No ladder operators yet.

**Classical picture.** A mass on a spring: restoring force $F=-kx$, potential $V(x)=\frac{1}{2}kx^2$. With $\omega=\sqrt{k/m}$, that is

$$
V(x)=\frac{1}{2}m\omega^2 x^2.
$$

**Quantum.** Promote $x$ and $p$ to operators. The Hamiltonian is

$$
H=\frac{p^2}{2m}+\frac{1}{2}m\omega^2 x^2.
$$

$x$ and $p$ are Hermitian, so $H$ is Hermitian → energy eigenvalues are real. Solving the time-independent Schrödinger equation gives a discrete ladder of energies, equally spaced:

$$
E_n=\hbar\omega\left(n+\frac{1}{2}\right),\qquad n=0,1,2,\ldots
$$

The eigenstates are labeled $|n\rangle$ (number states / Fock states later): $H|n\rangle=E_n|n\rangle$.

One striking feature: the ground state is **not** zero energy — $E_0=\frac{1}{2}\hbar\omega$.

**Question:** Using only what you already know (uncertainty principle, or that a bound particle cannot sit at $x=0$ with $p=0$), why must $E_0$ be strictly positive?

---

### Turn 2 — 2026-07-26 (learner)

> [Image of $H=\frac{p^2}{2m}+\frac{1}{2}m\omega^2 x^2$ without hats]  
> Is this suitable for all situations? Where is your hat for operators?

### Tutor

**Hats.** Fair call. After “promote $x$ and $p$ to operators,” the careful form is

$$
\hat{H}=\frac{\hat{p}^2}{2m}+\frac{1}{2}m\omega^2\hat{x}^2,
$$

with $[\hat{x},\hat{p}]=i\hbar$. Many texts drop the hats once the quantum context is clear; that is a **convention**, not a change of meaning. From here on in this thread, operators get hats when ambiguity matters.

**Not for all situations.** That $\hat{H}$ is only the **1D quantum harmonic oscillator** (one mass $m$, one frequency $\omega$). It is *not* the Hamiltonian of an arbitrary quantum system. Examples of different cases:

| Case | What changes |
|------|----------------|
| Free particle | No potential term |
| Infinite well / Coulomb / … | Different $V(\hat{x})$ |
| 3D isotropic HO | $\hat{H}=\frac{\hat{\mathbf{p}}^2}{2m}+\frac{1}{2}m\omega^2\hat{\mathbf{r}}^2$ |
| Anisotropic HO | Different $\omega_x,\omega_y,\omega_z$ |

Same *classical-looking* symbols can mean numbers (classical) or operators (quantum); the commutator $[\hat{x},\hat{p}]=i\hbar$ is what makes the quantum case different.

**Question (still open from Turn 1, now with hats):** For *this* $\hat{H}$, why must the ground-state energy $E_0$ be strictly positive — using uncertainty, or that you cannot have a state with $\langle\hat{x}\rangle=\langle\hat{p}\rangle=0$ and zero spreads?

---

### Turn 3 — 2026-07-26 (learner)

> Foundation missed: time-independent Schrödinger equation.

### Tutor (process)

Forked prerequisite note: [[2026-07-26-2126 Time-independent Schrödinger equation]].  
This HO thread is **paused** until TISE is usable. Open questions (hats, $E_0>0$) keep for when we resume.

---

### Turn 4 — 2026-07-27 (resume after TISE solid)

TISE (abstract + 1D differential) marked solid enough. Resume open question:

For $\hat{H}=\frac{\hat{p}^2}{2m}+\frac{1}{2}m\omega^2\hat{x}^2$, why must $E_0$ be **strictly positive**?

