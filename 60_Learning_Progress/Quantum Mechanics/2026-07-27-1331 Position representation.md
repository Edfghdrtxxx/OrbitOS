---
type: learning-progress
topic: "Position representation"
area: Quantum Mechanics
status: solid-enough
created: 2026-07-27
parent: "[[2026-07-26-2126 Time-independent Schrödinger equation]]"
---
# Position representation — foundations

**Why this note exists:** Mid-session fork from TISE. Learner asked what $\Psi(x,t)=\langle x|\Psi(t)\rangle$ means. This is Dirac / representation machinery, not TISE itself — split so TISE stays on energy eigenstates and the HO handoff.

**Suggested scope:**
- Ket $|\Psi(t)\rangle$ vs wavefunction $\Psi(x,t)=\langle x|\Psi(t)\rangle$
- Position basis $\{|x\rangle\}$; amplitudes vs $|\Psi|^2$
- Link to $\partial/\partial t$ form of TDSE
- Optional later: momentum representation $\langle p|\Psi\rangle$

**Resume parent:** [[2026-07-26-2126 Time-independent Schrödinger equation]] (superposition $P(E)$ vs $\langle\hat{H}\rangle$ still open)

---

## Turns

### Turn 1 — 2026-07-27 (learner) — forked from TISE Turn 4

> $\Psi(x,t)=\langle x|\Psi(t)\rangle$  
> What does this mean? Is it position representation? Explain it vividly and intuitively.

### Tutor

**Yes — that is the position representation** (the wavefunction).

**Two layers of the same state**

- $|\Psi(t)\rangle$ — the full quantum state as an **abstract vector** in Hilbert space. No preferred coordinates. Like a whole arrow in a huge space of possibilities.
- $\Psi(x,t)=\langle x|\Psi(t)\rangle$ — the **list of components** of that arrow when you use the position basis $\{|x\rangle\}$.

**Vector analogy (ordinary 3D)**  
A vector $\mathbf{v}$ is basis-independent. Once you choose the $x$-axis unit vector $\mathbf{e}_x$, the number

$$
v_x=\mathbf{e}_x\cdot\mathbf{v}
$$

is “how much of $\mathbf{v}$ lies along $x$.”  
In Dirac language that is $\langle e_x|v\rangle$.  
Quantum: replace $\mathbf{e}_x$ by the position eigenket $|x\rangle$ (“particle definitely at $x$”), and

$$
\Psi(x,t)=\langle x|\Psi(t)\rangle
$$

is “how much of the state sits at position $x$ at time $t$” — a complex amplitude, not a probability yet.

**Microphone analogy**  
$|\Psi(t)\rangle$ is the whole sound field of a room.  
$\langle x|$ is a microphone placed at location $x$.  
$\Psi(x,t)$ is the complex reading at that mic at time $t$.  
Move the mic (change $x$) → different reading; same sound field.

**What you do with it**  
The measurable density is

$$
\bigl|\Psi(x,t)\bigr|^2\,dx
=\text{probability of finding the particle between }x\text{ and }x+dx.
$$

So: ket = whole state; bra $\langle x|$ = “project onto position $x$”; the complex number that falls out is the wavefunction in the **position representation**.

(Other representations exist the same way: $\tilde{\Psi}(p,t)=\langle p|\Psi(t)\rangle$ is the **momentum** representation.)

**Question:** In one sentence of your own: what is the difference between $|\Psi(t)\rangle$ and $\Psi(x,t)$?

---

### Turn 2 — 2026-07-27 (learner)

> The difference between $|\Psi(t)\rangle$ and $\Psi(x,t)$ is that the former is the original form of the wavefunction, while the latter is the representation that we observe and describe it from the perspective of position, produced by inner product, which could be explained by projection geometrically.

### Tutor

**What you got right**

- $\Psi(x,t)$ is the state **from the position perspective** (position representation).
- It is produced by an **inner product** $\langle x|\Psi(t)\rangle$.
- That inner product is geometric **projection** onto the “direction” $|x\rangle$ — solid.

**What to fix (terminology)**

$|\Psi(t)\rangle$ is **not** “the original form of the wavefunction.” In standard QM language:

| Object | Name | Role |
|--------|------|------|
| $\|\Psi(t)\rangle$ | **state vector** (ket) | Abstract, basis-independent state of the system |
| $\Psi(x,t)=\langle x\|\Psi(t)\rangle$ | **wavefunction** (position representation) | Components of that ket in the position basis |

So the wavefunction is $\Psi(x,t)$, not $|\Psi\rangle$. The ket is more abstract; the wavefunction is one concrete “coordinate list” of that ket. (Momentum representation $\langle p|\Psi\rangle$ would be another list of the **same** ket.)

Also: we do not “observe” $\Psi$ itself — the measurable density is $|\Psi(x,t)|^2$. We *describe* the state in the position language via $\Psi$.

**Cleaned version of your idea**

$|\Psi(t)\rangle$ is the abstract state; $\Psi(x,t)=\langle x|\Psi(t)\rangle$ is its position representation — the complex amplitude obtained by projecting the ket onto $|x\rangle$.

**Question:** If $|\Psi\rangle$ is fixed, and someone gives you $\Psi(x)$ for all $x$, have they given you the full state — or only part of it? (One sentence.)

---

### Turn 3 — 2026-07-27 (learner)

> They have given me merely a part of the full state, since (1) there is no time terms (2) the process of position projection, or rather any projection, will lose a part of information.

### Tutor

Both reasons miss the intended point — but they are understandable. Here is the split that matters.

**One number vs the whole function**

| What you are given | Complete? |
|--------------------|-----------|
| A **single** amplitude $\langle x_0\|\Psi\rangle$ (one projection) | **No** — almost everything lost |
| The **entire** function $\Psi(x)$ for **all** $x$ | **Yes** — full state (at that time) |

Projection onto *one* $|x\rangle$ loses information. Being handed $\Psi(x)$ for every $x$ is not “one projection” — it is the **complete list of components** in a complete basis. You can rebuild the ket:

$$
|\Psi\rangle=\int_{-\infty}^{\infty}\!dx\,|x\rangle\,\Psi(x)
$$

(using $\int|x\rangle\langle x|\,dx=\hat{1}$). Same vector, position clothing.

**Time**

$|\Psi(t)\rangle$ is already “the state **at time** $t$.”  
$\Psi(x)$ (or $\Psi(x,t)$ at fixed $t$) is that same state in position language.  
No missing “time term” inside $\Psi(x)$ is required for completeness **at that $t$**. How the state *changes* for other times is a separate question (TDSE + $\hat{H}$), not a hole in the representation.

So the intended answer is:

> If you are given $\Psi(x)$ for all $x$, you have been given the **full** state (at that time) — the position representation is complete.

**Question:** In the 3D vector analogy: if I give you all three numbers $(v_x,v_y,v_z)$, do I still “only have a projection,” or do I have the whole vector $\mathbf{v}$?

---

### Turn 4 — 2026-07-27 (learner)

> I have the whole vector

### Tutor

Correct. Map it back:

| 3D | QM |
|----|-----|
| $\mathbf{v}$ | $\|\Psi\rangle$ |
| $(v_x,v_y,v_z)$ all three | $\Psi(x)$ for **all** $x$ |
| one component $v_x$ | one amplitude $\langle x_0\|\Psi\rangle$ |

So: full wavefunction $\Leftrightarrow$ full state (at that time). One sample at one $x$ $\Leftrightarrow$ one component only.

**This thread is solid enough to resume TISE.** Core takeaways:

1. $\|\Psi(t)\rangle$ = abstract state vector; $\Psi(x,t)=\langle x\|\Psi(t)\rangle$ = position representation (wavefunction).
2. Full $\Psi(\cdot)$ is a complete description, not a lossy single projection.
3. That is why the TDSE can be written with $\partial\Psi/\partial t$ — same physics as $d\|\Psi\rangle/dt$, in position clothing.

**Resume:** [[2026-07-26-2126 Time-independent Schrödinger equation]] — open item still:

$|\Psi(0)\rangle=\frac{1}{\sqrt{2}}(|E_1\rangle+|E_2\rangle)$, $E_1\neq E_2$.  
What is $P(E_1)$ at $t=0$? Does $\langle\hat{H}\rangle$ equal $E_1$?
