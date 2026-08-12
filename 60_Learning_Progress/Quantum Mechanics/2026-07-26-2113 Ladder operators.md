---
type: learning-progress
topic: "Ladder operators"
area: Quantum Mechanics
status: solid-enough
created: 2026-07-26
parent: "[[2026-07-26-2030 Displacement operator]]"
related: "[[2026-07-26-2112 Harmonic oscillator]]"
---
# Ladder operators — foundations

**Why this note exists:** Prerequisite for the displacement-operator thread. Learner knows Dirac notation and Hermitian operators; does **not** yet know $a$, $a^\dagger$.

**Suggested scope for this thread:**
- Definition of $a$ and $a^\dagger$ from $\hat{x},\hat{p}$ (or as abstract algebra with $[a,a^\dagger]=1$)
- Neither $a$ nor $a^\dagger$ is Hermitian; $a^\dagger$ is the adjoint of $a$
- Action on number states: $a|n\rangle=\sqrt{n}|n-1\rangle$, $a^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle$
- Number operator $N=a^\dagger a$, link to HO energies via [[2026-07-26-2112 Harmonic oscillator]]
- Commutator algebra needed later for $D(\alpha)$

**Resume parent when ready:** [[2026-07-26-2030 Displacement operator]] → $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$

---

## Turns

### 2026-08-04 — Turn 1 (open)

**Learner:** `/learn` this note (resume after HO solid enough).

**Tutor:**

You already own the HO spectrum: levels labeled by $n=0,1,2,\ldots$, with $E_n=\hbar\omega\!\left(n+\frac{1}{2}\right)$ and equal steps of $\hbar\omega$. Ladder operators are the algebraic tool that *moves you between those levels* without re-solving the differential equation each time — and they are the letters that later show up in $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$.

**Scaffold (one idea only):** Think of the energy ladder as a stack of kets $|0\rangle,|1\rangle,|2\rangle,\ldots$. There will be two operators:
- one that **lowers** the rung ($|n\rangle\to$ something on $|n-1\rangle$), called $a$
- one that **raises** the rung ($|n\rangle\to$ something on $|n+1\rangle$), called $a^\dagger$

(We have not defined them yet — only named the job each one does.)

**Question (one):** Have you seen $a$ / $a^\dagger$ before at all (even just “annihilation / creation”), or are we starting completely cold? If you have a scrap of memory, say what it is — even a wrong half-memory is useful.

### 2026-08-04 — Turn 2

**Learner:** Heard annihilation/creation names; exact meaning forgotten → treat as cold start.

**Tutor:**

Cold start is fine. We will treat the **action on number states** as the working meaning first (definition from $\hat{x},\hat{p}$ comes later).

**Scaffold:** Each energy step is one quantum of energy $\hbar\omega$. In that language:
- **Annihilation** $a$ removes one quantum → lowers $n$ by $1$
- **Creation** $a^\dagger$ adds one quantum → raises $n$ by $1$

The exact rules (including the important coefficients) are:

$$
a|n\rangle=\sqrt{n}\,|n-1\rangle,\qquad a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle
$$

for $n=0,1,2,\ldots$. The $\sqrt{\,\cdot\,}$ factors keep the states normalized when you climb or drop; for now just use them as part of the definition.

**Question (one):** Using only the first rule, what is $a|0\rangle$? (Hint: plug in $n=0$. Does the answer match something you already know about the HO — that there is no level $n=-1$?)

### 2026-08-04 — Turn 3

**Learner:** Thinks $a|0\rangle$ is the ground state / “does not change,” but also says it returns a zero value; links correctly to no $n=-1$.

**Tutor:**

The physics instinct is right; one wording fix, then we lock it.

**Correction (short):** $a|0\rangle$ is **not** “still the ground state” and **not** “the state is unchanged.” Plug in the formula:

$$
a|0\rangle=\sqrt{0}\,|{-1}\rangle=0
$$

That $0$ is the **zero vector** (the null ket) — not the ket $|0\rangle$. So annihilation on the ground state **destroys the state as a vector**: output is literally nothing you can normalize into a physical state. That is how the algebra enforces “no $n=-1$.” Your second half (“return a zero value” + no $n=-1$) is exactly the point.

**Scaffold:** Keep the two rules next to each other and *substitute* $n$:

$$
a|n\rangle=\sqrt{n}\,|n-1\rangle,\qquad a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle
$$

**Question (one):** Compute both of these (write the ket and the coefficient):

1. $a|2\rangle$
2. $a^\dagger|0\rangle$

### 2026-08-04 — Turn 4

**Learner:** $a|2\rangle=\sqrt{2}\,|1\rangle$, $a^\dagger|0\rangle=|1\rangle$ (i.e. $\sqrt{1}|1\rangle$).

**Tutor:**

Both correct. Detail: $a^\dagger|0\rangle=\sqrt{0+1}|1\rangle=\sqrt{1}|1\rangle=|1\rangle$ — writing $|1\rangle$ is fine because the coefficient is $1$. Action rules are usable.

**Scaffold (number operator):** Define
$$
\hat{N}=a^\dagger a
$$
(apply $a$ first, then $a^\dagger$). On a number state:
$$
a|n\rangle=\sqrt{n}|n-1\rangle \implies a^\dagger a|n\rangle=a^\dagger\bigl(\sqrt{n}|n-1\rangle\bigr)=\sqrt{n}\cdot\sqrt{(n-1)+1}\,|n\rangle=n|n\rangle.
$$
So $\hat{N}|n\rangle=n|n\rangle$: the eigenvalue is just the label $n$. That is why $|n\rangle$ are called **number states** (Fock states). Link you already own: the HO Hamiltonian is
$$
\hat{H}=\hbar\omega\Bigl(\hat{N}+\frac{1}{2}\Bigr)=\hbar\omega\Bigl(a^\dagger a+\frac{1}{2}\Bigr),
$$
which recovers $E_n=\hbar\omega\!\left(n+\frac{1}{2}\right)$.

**Question (one):** Compute $\hat{N}|3\rangle$ two ways and check they match: (i) from $\hat{N}|n\rangle=n|n\rangle$, and (ii) by applying $a$ then $a^\dagger$ with the ladder rules (show the intermediate ket).

### 2026-08-05 — Turn 5

**Learner (photo):**
$$
\hat{N}|3\rangle=a^\dagger a|3\rangle=a^\dagger\bigl(\sqrt{3}|2\rangle\bigr)=\sqrt{3}\cdot\sqrt{2+1}\,|3\rangle=3|3\rangle
$$
and left column $3|3\rangle$ from $\hat{N}|n\rangle=n|n\rangle$ — match.

**Tutor:**

Correct end-to-end. Order of operators matters: $a$ first drops $|3\rangle\to\sqrt{3}|2\rangle$, then $a^\dagger$ climbs with $\sqrt{3}$, and $\sqrt{3}\cdot\sqrt{3}=3$. Number operator is locked.

**Scaffold (order matters — next piece for $D(\alpha)$):** $\hat{N}=a^\dagger a$, but the reverse product is different:
$$
aa^\dagger|n\rangle \neq a^\dagger a|n\rangle \quad\text{in general.}
$$
(You will need the commutator $[a,a^\dagger]=aa^\dagger-a^\dagger a$ later.)

**Question (one):** Using only the ladder rules, compute $aa^\dagger|2\rangle$ (show intermediate ket). Then compare to $\hat{N}|2\rangle=2|2\rangle$ — same or different?

### 2026-08-05 — Turn 6

**Learner (photo):**
$$
aa^\dagger|2\rangle=a\bigl(\sqrt{3}|3\rangle\bigr)=\sqrt{3}\sqrt{3}|2\rangle=3|2\rangle
$$
different from $\hat{N}|2\rangle=2|2\rangle$.

**Tutor:**

Correct. Raise first: $a^\dagger|2\rangle=\sqrt{3}|3\rangle$; lower back: factor $\sqrt{3}$ again $\to 3|2\rangle$. Order matters: $aa^\dagger$ multiplies by $n+1$, while $a^\dagger a$ multiplies by $n$.

**Scaffold (commutator):** Define
$$
[a,a^\dagger]=aa^\dagger-a^\dagger a.
$$
On your state:
$$
[a,a^\dagger]|2\rangle=aa^\dagger|2\rangle-a^\dagger a|2\rangle=3|2\rangle-2|2\rangle=|2\rangle=1\cdot|2\rangle.
$$
In general $aa^\dagger|n\rangle=(n+1)|n\rangle$ and $a^\dagger a|n\rangle=n|n\rangle$, so
$$
[a,a^\dagger]|n\rangle=|n\rangle \quad\Rightarrow\quad [a,a^\dagger]=1
$$
(the identity operator). This relation is the algebraic heart of the ladder; $D(\alpha)$ uses it heavily.

**Question (one):** Without re-deriving from scratch — if $[a,a^\dagger]=1$, what is $[a^\dagger,a]$? (One line: use $[A,B]=-[B,A]$.)

### 2026-08-05 — Turn 7

**Learner:** $[a^\dagger,a]=-1$.

**Tutor:**

Correct: $[a^\dagger,a]=-[a,a^\dagger]=-1$. Basic commutator algebra is locked:
$$
[a,a^\dagger]=1,\qquad [a^\dagger,a]=-1.
$$

**Scaffold (adjoint, not Hermitian):** The dagger on $a^\dagger$ is not decoration — $a^\dagger$ is the **adjoint** (Hermitian conjugate) of $a$. You already know Hermitian operators satisfy $\hat{O}^\dagger=\hat{O}$. Neither ladder operator is Hermitian: $a\neq a^\dagger$ (one lowers, one raises). Quick consistency check with the commutator: if $a$ were Hermitian, then $a^\dagger=a$, so $[a,a^\dagger]=[a,a]=0$, which contradicts $[a,a^\dagger]=1$. So $a$ **cannot** be an observable the way $\hat{x}$, $\hat{p}$, or $\hat{H}$ are.

**Question (one):** Is $\hat{N}=a^\dagger a$ Hermitian? Give a one-line reason (you may use $(AB)^\dagger=B^\dagger A^\dagger$ and $(a^\dagger)^\dagger=a$).

### 2026-08-05 — Turn 8

**Learner (photo):**
$$
(\hat{N})^\dagger=(aa^\dagger)^\dagger \text{ or order slip}\;\to\;(a^\dagger)^\dagger a^\dagger=aa^\dagger\neq\hat{N}
$$
concluded **not** Hermitian.

**Tutor:**

Wrong conclusion — and the algebra shows *where*. Two traps to separate:

1. **Definition:** $\hat{N}=a^\dagger a$ (lower first), **not** $aa^\dagger$.
2. **Adjoint of a product reverses order:** $(AB)^\dagger=B^\dagger A^\dagger$, not $A^\dagger B^\dagger$.

If you start from $a^\dagger a$ but forget the reverse, you get $aa^\dagger$ and then (correctly) notice $aa^\dagger\neq a^\dagger a$ — that only re-proves the commutator story, not that $\hat{N}$ fails to be Hermitian.

**Scaffold:** Write $\hat{N}=AB$ with $A=a^\dagger$, $B=a$. Then
$$
\hat{N}^\dagger=(AB)^\dagger=B^\dagger A^\dagger=a^\dagger\,(a^\dagger)^\dagger=\cdots
$$
(finish the last step with $(a^\dagger)^\dagger=a$).

**Question (one):** Complete that line: what is $\hat{N}^\dagger$? Equal to $\hat{N}$ or not?

### 2026-08-05 — Turn 9

**Learner (photo):**
$$
\hat{N}^\dagger=(a^\dagger a)^\dagger=a^\dagger(a^\dagger)^\dagger=a^\dagger a=\hat{N}
$$
→ Hermitian.

**Tutor:**

Correct. Product order reverse + $(a^\dagger)^\dagger=a$ closes the loop: $\hat{N}^\dagger=\hat{N}$. So $a$ is **not** Hermitian, but $\hat{N}$ (and $\hat{H}$) **are** — consistent with real eigenvalues $n$ and $E_n$.

**Scaffold (definition from $\hat{x},\hat{p}$):** The action rules came first; the operators also have an explicit form. With $\hat{x}^\dagger=\hat{x}$, $\hat{p}^\dagger=\hat{p}$:

$$
a=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x}+\frac{i}{m\omega}\hat{p}\right),\qquad
a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x}-\frac{i}{m\omega}\hat{p}\right).
$$

Notice the only change is the sign of the $i\hat{p}$ term — that is exactly what taking the adjoint does, because $(i\hat{p})^\dagger=-i\hat{p}$.

**Question (one):** Starting from the formula for $a$, write $a^\dagger$ by taking the adjoint (use $\hat{x}^\dagger=\hat{x}$, $\hat{p}^\dagger=\hat{p}$, and $(c\hat{O})^\dagger=c^*\,\hat{O}^\dagger$). You only need to show the $i\to -i$ step clearly — no need to re-derive coefficients from scratch.

### 2026-08-05 — Turn 10 (foundations close)

**Learner (photo):**
$$
a^\dagger=\left[\sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x}+\frac{i}{m\omega}\hat{p}\right)\right]^\dagger
=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x}-\frac{i}{m\omega}\hat{p}\right)
$$
(intermediate: real prefactor out; $i\to -i$ via adjoint).

**Tutor:**

Correct final form. Clean reason for the sign flip:
$$
\left(\frac{i}{m\omega}\hat{p}\right)^\dagger=\left(\frac{i}{m\omega}\right)^*\hat{p}^\dagger=-\frac{i}{m\omega}\hat{p},
$$
since $m\omega$ is real and $\hat{p}^\dagger=\hat{p}$. Prefactor $\sqrt{m\omega/(2\hbar)}$ is real, so it is unchanged under $\dagger$.

**Foundations for this thread — solid enough.** You can now use:

- **Action:** $a|n\rangle=\sqrt{n}|n-1\rangle$, $a^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle$
- **Vacuum:** $a|0\rangle=0$ (zero vector, not $|0\rangle$)
- **Number:** $\hat{N}=a^\dagger a$, $\hat{N}|n\rangle=n|n\rangle$; $\hat{H}=\hbar\omega\!\left(\hat{N}+\frac{1}{2}\right)$
- **Commutator:** $[a,a^\dagger]=1$
- **Hermiticity:** $a$ not Hermitian; $a^\dagger$ is its adjoint; $\hat{N}^\dagger=\hat{N}$
- **From $x,p$:** $a\propto\bigl(\hat{x}+\frac{i}{m\omega}\hat{p}\bigr)$, $a^\dagger\propto\bigl(\hat{x}-\frac{i}{m\omega}\hat{p}\bigr)$

**Resume parent when ready:** [[2026-07-26-2030 Displacement operator]] → $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$.

### 2026-08-05 — Turn 11 (mastery drills)

**Learner:** (1) Obsidian table+LaTeX broken → fix skill + note. (2) Drills before $D(\alpha)$.

**Tutor:** Summary list rewritten as bullets (Obsidian-safe). Skill rule: no `$...$` inside GFM pipe tables in progress notes.

**Mastery drills** — work without looking back; show intermediate kets. Bring answers when ready (photo or LaTeX). No answer key here.

**A — Action**
1. Compute $a|4\rangle$ and $a^\dagger|4\rangle$.
2. Compute $a^\dagger a|4\rangle$ and $aa^\dagger|4\rangle$. Are they equal?
3. Compute $a|0\rangle$ and $a^\dagger|0\rangle$. State in one phrase what the first result is (vector type).

**B — Number and energy**
4. From $\hat{N}=a^\dagger a$ only, what is $\hat{N}|5\rangle$?
5. Using $\hat{H}=\hbar\omega\!\left(\hat{N}+\frac{1}{2}\right)$, what is $\hat{H}|5\rangle$? (energy eigenvalue)

**C — Commutator**
6. Compute $[a,a^\dagger]|5\rangle$ two ways: (i) from $[a,a^\dagger]=1$; (ii) as $aa^\dagger|5\rangle-a^\dagger a|5\rangle$ with ladder rules. Match?
7. What is $[a^\dagger,a]$? Why (one line)?

**D — Hermiticity**
8. Why is $a$ not Hermitian? Give either the commutator argument or the raise-vs-lower argument.
9. Show $\hat{N}^\dagger=\hat{N}$ using $(AB)^\dagger=B^\dagger A^\dagger$. (Watch product order.)

**E — From $x,p$ (and invert)**
10. Given $a=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x}+\frac{i}{m\omega}\hat{p}\right)$, obtain $a^\dagger$ by taking the adjoint (show $i\to -i$).
11. Invert: solve for $\hat{x}$ and $\hat{p}$ in terms of $a$ and $a^\dagger$ (linear combinations). Standard target form is fine:
$$\hat{x}=\sqrt{\frac{\hbar}{2m\omega}}\,(a+a^\dagger),\qquad \hat{p}=i\sqrt{\frac{\hbar m\omega}{2}}\,(a^\dagger-a).$$
Derive or verify at least $\hat{x}$ (or both).

**F — Mini synthesis (one paragraph or short calc)**
12. Explain why $\hat{H}=\hbar\omega\!\left(a^\dagger a+\frac{1}{2}\right)$ recovers $E_n=\hbar\omega\!\left(n+\frac{1}{2}\right)$ and why $a|0\rangle=0$ is required for a lowest level.

When done, send work; we grade by reasoning, not just final lines. Then open $D(\alpha)$.

### 2026-08-05 — Turn 12 (drill grade + F12)

**Learner:** Photo of A–E; F12 in prose. Also: drills → Physics GRE level (skill/evolution).

**Grade**

- **1 ✓** — $a|4\rangle=2|3\rangle$, $a^\dagger|4\rangle=\sqrt{5}|5\rangle$
- **2 ✓** — $a^\dagger a\to 4|4\rangle$, $aa^\dagger\to 5|4\rangle$, different
- **3 ~** — $a^\dagger|0\rangle=|1\rangle$ correct. **Trap:** $a|0\rangle=0$ is the **zero vector**, not “the vacuum state.” Vacuum is $|0\rangle$; $a$ maps it to the null ket.
- **4 ✓** — $\hat{N}|5\rangle=5|5\rangle$
- **5 ✓** — $\hat{H}|5\rangle=\frac{11}{2}\hbar\omega|5\rangle$
- **6 ✓** — both ways $\to|5\rangle$
- **7 ✓** — $[a^\dagger,a]=-1$
- **8 ✓** — $a\neq a^\dagger$ / commutator $\neq 0$
- **9 ✓** — product reverse; $\hat{N}^\dagger=\hat{N}$
- **10 ✓** — $i\to -i$
- **11 ~** — $\hat{x}=\sqrt{\hbar/(2m\omega)}\,(a+a^\dagger)$ correct. **$\hat{p}$:** needs $i$: $\hat{p}=i\sqrt{\hbar m\omega/2}\,(a^\dagger-a)$. Structure $(a^\dagger-a)$ right; dropping $i$ is not.
- **12 ~** — see below

**F12 — your points, tightened**

You had the right spine: $\hat{N}=a^\dagger a$ supplies the $n$ in $E_n$. Sharper form:

- $\hat{H}\|n\rangle=\hbar\omega\!\left(a^\dagger a+\frac12\right)\|n\rangle=\hbar\omega\!\left(n+\frac12\right)\|n\rangle$ because $a^\dagger a\|n\rangle=n\|n\rangle$.
- $a\|0\rangle=0$ (null ket) is required so the ladder **stops**: there is no $\|{-1}\rangle$. If $a\|0\rangle$ were a normalizable lower state, energies would descend without bound — not the HO. Wording fix: $a$ does **not** “produce the vacuum”; the vacuum is $\|0\rangle$, and $a$ **annihilates** it to the zero vector.

**Mastery call:** Solid on action, $N$, $H$, commutator, adjoint. Re-lock only: (i) zero vector vs vacuum, (ii) $i$ in $\hat{p}(a,a^\dagger)$. After you confirm those two in one line each, thread is drill-complete → open $D(\alpha)$.

**Quick confirm (two lines):**
1. What is $a|0\rangle$ — vacuum or zero vector?
2. Write $\hat{p}$ in terms of $a,a^\dagger$ with the $i$ shown.

### 2026-08-05 — Turn 13 (drill-complete)

**Learner:** (1) GRE drill bar = Physics only. (2) $a|0\rangle$ = zero vector. (3) Photo: $\hat{p}=i\sqrt{m\hbar\omega/2}\,(a^\dagger-a)$.

**Tutor:**

- Skill scoped: Physics GRE difficulty **only for Physics** mastery drills.
- Confirm 1: **zero vector** — locked.
- Confirm 2: $\hat{p}=i\sqrt{\frac{\hbar m\omega}{2}}\,(a^\dagger-a)$ — locked (same as $i\sqrt{m\hbar\omega/2}\,(a^\dagger-a)$).

**Thread status: drill-complete / solid enough.** Resume when ready: [[2026-07-26-2030 Displacement operator]] → $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$.
