---
type: learning-progress
topic: "Harmonic oscillator"
area: Quantum Mechanics
status: solid-enough
created: 2026-07-26
parent: "[[2026-07-26-2030 Displacement operator]]"
related: "[[2026-07-26-2113 Ladder operators]]"
prerequisite: "[[2026-07-26-2126 Time-independent Schrödinger equation]]"
---
# Harmonic oscillator — foundations

**Status:** **solid enough** — Foundation locked (drill complete). Ladder ops done; resume $D(\alpha)$ when ready.

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

---

### Turn 5 — 2026-07-28 (learner)

> I guess the reason is probably associated with the form of $V(x)$, but I can't tell the exact why.

### Tutor

Half-right. The shape of $V$ matters, but not in the way “the formula looks special” — the key is what **classical** physics would allow, and what **uncertainty** forbids.

**What $V$ gives you.** For the oscillator, $V(x)=\frac{1}{2}m\omega^2 x^2\ge 0$ everywhere, and its minimum is $V(0)=0$. Classically a particle can sit forever at $x=0$ with $p=0$, so $E=0$ is allowed.

**What quantum forbids.** Energy is

$$
E=\Bigl\langle\frac{\hat{p}^2}{2m}\Bigr\rangle+\bigl\langle V(\hat{x})\bigr\rangle.
$$

Both pieces are $\ge 0$ for this $V$. To make the **total** zero you would need **both** averages zero at once:

- $\langle V\rangle=0$ forces the particle to live only at $x=0$ (where $V=0$) $\Rightarrow$ $\Delta x\to 0$.
- Uncertainty: $\Delta x\,\Delta p\gtrsim\hbar/2$ then forces $\Delta p\to\infty$ $\Rightarrow$ $\langle\hat{p}^2/2m\rangle$ blows up.

If instead you try $p=0$ exactly ($\Delta p\to 0$), then $\Delta x$ blows up and the particle samples $V(x)>0$ far from the origin $\Rightarrow$ $\langle V\rangle>0$.

So you **cannot** kill kinetic and potential energy together. The ground state is the best compromise; its energy $E_0$ is **strictly positive** (zero-point energy). The quadratic shape of $V$ later fixes the *value* $E_0=\frac{1}{2}\hbar\omega$; uncertainty is why it cannot be zero.

**Question:** In one sentence: if a classical particle can have $E=0$ at the bottom of $V$, what single quantum principle blocks that for the oscillator?

---

### Turn 6 — 2026-07-28 (learner)

> Because in this case, the Hamiltonian has both $p$ and $x$, which are conjugate quantities in quantum mechanics. On the basis of uncertainty, they must not be 0 simultaneously.

### Tutor

Correct — that is the heart of zero-point energy.

Small precision: “not both zero” means you cannot prepare a state with $\hat{x}$ and $\hat{p}$ both sharply zero (or with $\langle\hat{x}^2\rangle=\langle\hat{p}^2\rangle=0$ at once). Conjugate pair $\Rightarrow$ $[\hat{x},\hat{p}]=i\hbar$ $\Rightarrow$ $\Delta x\,\Delta p\ge\hbar/2$. For $\hat{H}=\hat{p}^2/2m+\frac{1}{2}m\omega^2\hat{x}^2$, that blocks $E=0$.

**Spectrum (fact to plant, ladder ops later).** Solving TISE for this $\hat{H}$ yields equally spaced levels

$$
E_n=\hbar\omega\Bigl(n+\frac{1}{2}\Bigr),\qquad n=0,1,2,\ldots
$$

with eigenstates $|n\rangle$ (number states): $\hat{H}|n\rangle=E_n|n\rangle$. Ground state $n=0$ has $E_0=\frac{1}{2}\hbar\omega>0$ — matches what you just argued.

**Question:** The spacing between neighboring levels is $E_{n+1}-E_n$. What is that spacing, and does it depend on $n$?

---

### Turn 7 — 2026-07-28 (learner)

> The spacing is the energy level, which is n-independent.

### Tutor

**n-independent — correct.** That is the striking HO feature: equal steps all the way up the ladder.

**Tighten the wording.** Spacing is not “the energy level” (that usually means $E_n$ itself). Spacing is the **difference** between neighboring levels:

$$
E_{n+1}-E_n.
$$

You already have the formula $E_n=\hbar\omega\bigl(n+\tfrac{1}{2}\bigr)$. Write $E_{n+1}$ from the same formula, subtract, and simplify.

**Question:** What is $E_{n+1}-E_n$ (as a multiple of $\hbar\omega$)? Check with two concrete pairs if you want: $E_1-E_0$ and $E_2-E_1$ — same number both times?

---

### Turn 8 — 2026-07-28 (learner)

Handwritten:

$$
E_{n+1}=\hbar\omega\Bigl(n+1+\frac{1}{2}\Bigr),\qquad E_{n+1}-E_n=\hbar\omega,\qquad E_2-E_1=E_1-E_0=\hbar\omega.
$$

### Tutor

Correct on all three lines. You used the formula, subtracted, and checked two concrete steps — same gap $\hbar\omega$ every time. That is **equal spacing** (independent of $n$).

So the full picture for this thread so far:

| Idea | Statement |
|------|-----------|
| Hamiltonian | $\hat{H}=\hat{p}^2/2m+\frac{1}{2}m\omega^2\hat{x}^2$ |
| Spectrum | $E_n=\hbar\omega\bigl(n+\frac{1}{2}\bigr)$, $n=0,1,2,\ldots$ |
| Spacing | $E_{n+1}-E_n=\hbar\omega$ |
| Zero-point | $E_0=\frac{1}{2}\hbar\omega>0$ (uncertainty) |

The energy eigenstates are labeled $|n\rangle$ (**number states**): $\hat{H}|n\rangle=E_n|n\rangle$.

**Question:** The quantum number $n$ runs $0,1,2,\ldots$ — not negative. Using only the spectrum (and that the ground state is the lowest energy), why is there no state with $n=-1$?

---

### Turn 9 — 2026-07-28 (learner)

> Idk, I just memorized this conclusion.

### Tutor

Honest — and useful. Memorizing $n=0,1,2,\ldots$ without a reason leaves a gap. You do **not** need ladder operators yet; use the formula you already trust plus “ground state = lowest energy.”

**Foothold.** Pretend $n=-1$ were allowed and plug into the same formula:

$$
E_{-1}=\hbar\omega\Bigl(-1+\frac{1}{2}\Bigr)=-\frac{1}{2}\hbar\omega.
$$

You already know $E_0=\frac{1}{2}\hbar\omega$ is the **ground-state** energy — the bottom of the ladder.

**Question:** Compare $E_{-1}$ to $E_0$. If the ground state is the lowest allowed energy, can $n=-1$ be a physical energy level of this oscillator? (One sentence is enough.)

---

### Turn 10 — 2026-07-28 (learner)

> $n$ equals minus one cannot be a real physical energy level of the harmonic oscillator.

### Tutor

Correct. The reason in one line: $E_{-1}=-\frac{1}{2}\hbar\omega$ sits **below** $E_0=\frac{1}{2}\hbar\omega$, and the ground state is already the lowest. (Bonus link to zero-point: for this $\hat{H}$, $\langle\hat{H}\rangle\ge 0$ for every state, so a negative eigenvalue is impossible.)

**This foundation is solid enough.** You can now state:

- $\hat{H}=\hat{p}^2/2m+\frac{1}{2}m\omega^2\hat{x}^2$
- $E_n=\hbar\omega\bigl(n+\frac{1}{2}\bigr)$ with $n=0,1,2,\ldots$ (no negative $n$)
- $E_{n+1}-E_n=\hbar\omega$
- $E_0>0$ from uncertainty
- Eigenstates $|n\rangle$ with $\hat{H}|n\rangle=E_n|n\rangle$

**Next:** algebraic machinery that *builds* this ladder — [[2026-07-26-2113 Ladder operators]] ($a$, $a^\dagger$, and why $a|0\rangle=0$). After that, resume [[2026-07-26-2030 Displacement operator]].

Session closed for HO foundations unless you want a quick quiz or to jump straight into ladder operators.

---

### Turn 11 — 2026-07-28 (learner)

> Drill me to make sure this is solid, including several preceding threads.

### Tutor

Cross-thread **active-recall drill** (position rep + TISE + HO). No peeking notes. Answer in your own words / formulas; skip none you can attempt. **Round 1** below; Round 2 after scoring.

**Round 1 (6 items)**

1. **Position rep.** In one sentence: what is $\Psi(x)=\langle x|\Psi\rangle$? (Projection / ket vs wavefunction.)
2. **TISE abstract.** Write the eigenvalue equation for energy eigenstates (Dirac form).
3. **Hermitian.** Why are energy eigenvalues real?
4. **Superposition.** For $|\psi\rangle=\frac{1}{\sqrt{2}}(|E_1\rangle+|E_2\rangle)$ with $E_1=\hbar\omega$, $E_2=3\hbar\omega$: what is $P(E_1)$? What is $\langle\hat{H}\rangle$?
5. **HO spectrum.** Write $E_n$ and the spacing $E_{n+1}-E_n$.
6. **Zero-point.** In one sentence: why is $E_0$ strictly positive?

*(Round 2 will hit: full $\Psi(x)$ vs one component; 1D TISE differential form; $P(E)$ vs $\langle\hat{H}\rangle$ as types; $n=-1$; hats / 1D HO scope.)*

---

### Turn 12 — 2026-07-29 (learner)

Handwritten Round 1 answers (summarized):

1. $|\Psi\rangle$ = abstract state vector; $\Psi(x)=\langle x|\Psi\rangle$ = projection into position rep / wavefunction.
2. $\hat{H}|\psi_n\rangle=E_n|\psi_n\rangle$.
3. “Constraint of the real world + property of Hermitian.”
4. $P(E_1)=\frac{1}{2}$; $\langle\hat{H}\rangle=\frac{E_1+E_2}{2}=2\hbar\omega$.
5. $E_n=\hbar\omega(n+\frac{1}{2})$, $E_{n+1}-E_n=\hbar\omega$.
6. Uncertainty $\Delta x\Delta p\ge\hbar/2$ $\Rightarrow$ $\hat{H}$ “strictly positive”; wrote $E_0=\hbar\omega$ (and $\hbar,\omega>0$).

### Tutor — Round 1 score

| # | Score | Note |
|---|--------|------|
| 1 | **✓** | Ket abstract; $\Psi(x)$ projection — solid |
| 2 | **✓** | Dirac TISE correct |
| 3 | **~** | Hermitian $\Rightarrow$ real eigenvalues is the reason. “Real world constraint” is not a separate physics law — drop that half |
| 4 | **✓** | $P=\frac{1}{2}$, $\langle\hat{H}\rangle=2\hbar\omega$ correct |
| 5 | **✓** | Spectrum + spacing solid |
| 6 | **~ / fix** | Uncertainty path is right; **$E_0=\hbar\omega$ is wrong** — ground state is $E_0=\frac{1}{2}\hbar\omega$. $\hbar>0,\omega>0$ does *not* explain zero-point (classically $E=0$ is still allowed) |

**4 solid, 2 need a touch.** Flag: zero-point *value* slipped under drill pressure — worth re-locking.

**Round 2 (5 items)** — same rules:

7. **Position rep.** Is $\Psi(x_0)$ at one fixed $x_0$ the full state, or only one component? What is the full state in position language?
8. **1D TISE.** Write the time-independent Schrödinger equation as a differential equation for $\psi(x)$ (1D).
9. **Types.** In one line: how is $P(E_i)$ different in *kind* from $\langle\hat{H}\rangle$?
10. **HO bottom.** Why is $n=-1$ not allowed? (formula + ground state)
11. **Zero-point repair.** State $E_0$ correctly, and in one sentence why it cannot be zero (not “because $\hbar\omega>0$”).

---

### Turn 13 — 2026-07-29 (learner)

Handwritten Round 2:

7. One fixed $x$: not full state — only one component. Full state: $\langle x|\Psi\rangle$.
8. $-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\psi(x)+V(x)\psi(x)=E\psi(x)$.
9. $P(E_i)$ = probability of one energy; $\langle\hat{H}\rangle$ = expectation over the state / all energies.
10. $n=-1\Rightarrow E_n<0$, prohibited.
11. $E_0$ = ground energy; cannot be zero because $\Delta x\Delta p\ge\hbar/2$. (Did **not** write $E_0=\frac{1}{2}\hbar\omega$.)

### Tutor — Round 2 score

| # | Score | Note |
|---|--------|------|
| 7 | **~** | “One component” correct. Full state is the **entire function** $\Psi(x)$ for **all** $x$ (or the ket $\|\Psi\rangle$). Writing only $\langle x\|\Psi\rangle$ looks like one $x$ again — say “$\Psi(x)$ as a function of $x$” |
| 8 | **✓** | 1D TISE differential form solid |
| 9 | **✓** | Probability of one outcome vs average energy — solid |
| 10 | **✓** | $n=-1\Rightarrow E<0$ blocked — solid |
| 11 | **~** | Uncertainty reason good; still missing the **value** $E_0=\frac{1}{2}\hbar\omega$ (the Round 1 slip not fully repaired) |

### Drill verdict (Rounds 1–2)

**Solid enough overall** for ladder ops next: Dirac TISE, superposition numbers, HO spectrum/spacing, 1D TISE, $n\ge 0$, zero-point *idea*.

**Two polish items before calling it locked:**
- Full position state = whole $\Psi(x)$, not one sample.
- Memorize/state $E_0=\frac{1}{2}\hbar\omega$ (not $\hbar\omega$).

**Close-the-gap (2 lines only):**

A. Write the formula for $E_0$ (number times $\hbar\omega$).  
B. Complete: “The full state in position language is …”

---

### Turn 14 — 2026-07-29 (learner)

> 1. $\frac{1}{2}\hbar\omega$  
> 2. is entire function in terms of all $x$.

### Tutor

Both locked. $E_0=\frac{1}{2}\hbar\omega$; full position state = entire $\Psi(x)$ for all $x$.

**Drill complete.** Cross-thread (position rep + TISE + HO) is solid enough to leave this foundation and open [[2026-07-26-2113 Ladder operators]] when ready.
