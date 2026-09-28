---
type: learning-progress
topic: "Expectation value in an eigenbasis"
area: Quantum Mechanics
status: closed
created: 2026-09-27
project: "[[GRE_Physics_Prep]]"
related: "[[2026-07-26-2112 Harmonic oscillator]]"
prerequisite: "[[2026-07-26-2126 Time-independent Schrödinger equation]]"
---
# Expectation value in an eigenbasis

**Status:** **closed 2026-09-28** (Turn 13). All five links derived; the unaided mirror check (same state, new $\hat B$) passed, splitting $\lambda_k$ from $c_k$ in both directions. Open for retention: card 5.5 conjugate without a hint; $\langle A\rangle$ vs a single reading.

**Why this note exists:** The learner brought Prep Studio formula card `cpgf-5.6` (Kahn eq. 5.6, tag *Formalism*, topic `qm`) from QM formula recall. Prior: $\langle\hat H\rangle=\sum_i P(E_i)E_i$ and the equal-weight two-level case are locked in [[2026-07-26-2112 Harmonic oscillator]]. The projection picture $\Psi(x)=\langle x|\Psi\rangle$ and the 3D-vector components analogy are locked in [[2026-07-27-1331 Position representation]]. Dirac notation is self-report only.

**Learner goal (Turn 2):** Retention of the card is weak. They want the full physical picture before memorizing, by derivation. They know the pieces separately and cannot yet chain them. They also want to strengthen card `cpgf-5.5`, $c_n=\langle f_n|\Psi\rangle=\int f_n^*(x)\,\Psi(x,t)\,\mathrm{d}x$.

**Derivation chain (target; tick as the learner derives each link):**
1. [x] Expand: $|\Psi\rangle=\sum_n c_n|f_n\rangle$ (assumes a complete eigenbasis)
2. [x] Project out one coefficient (orthonormality): $c_k=\langle f_k|\Psi\rangle$ (Turn 3, handwritten)
3. [x] Rewrite the projection in position space (card 5.5): $c_n=\int f_n^*(x)\,\Psi(x,t)\,\mathrm{d}x$ via completeness and conjugate symmetry (Turns 8–10)
4. [x] Read $|c_k|^2$ as a probability; normalization: $P(\lambda_k)=|c_k|^2$, $\langle\Psi|\Psi\rangle=\sum_k|c_k|^2$ (Turns 5–7; unnormalized example handwritten)
5. [x] Sandwich $\hat A$: $\langle\Psi|\hat A|\Psi\rangle=\sum_k\lambda_k|c_k|^2$ (card 5.6) (Turn 4, handwritten)

## Context

Attached image, transcribed verbatim:

- **Category label (top, small caps, rust colour):** FORMALISM
- **Front (question):** "Given a state decomposed in an orthonormal eigenbasis of $\hat A$ with eigenvalues $\lambda_k$ and coefficients $c_k$, what is the expectation value of $A$?"
- **Back (display equation, tag in grey):**

$$\langle A\rangle=\sum_k \lambda_k\,|c_k|^2 \qquad (5.6)$$

- **Legend line under the equation:** "$\lambda_k$ eigenvalues, $c_k$ expansion coefficients."

Layout: cream card. The question sits above a dashed divider; the answer side (equation and legend) is revealed below it. No answer choice or correct/incorrect mark. The learner sent the card with no text. Source in the bank: `/Users/Reid Hu/Physics GRE/content/bank/cpg-formulas.js`, id `cpgf-5.6`.

**Turn 3 image (learner's handwritten derivation), transcribed verbatim:**

- Line 1: $|\Psi\rangle=\sum_n c_n|f_n\rangle$
- Line 2 (indented): $\langle f_k|\Psi\rangle=\sum_n c_n\langle f_k|f_n\rangle$
- Line 3: "only if n=k"
- Line 4: $\to c_n=\langle f_n|\Psi\rangle$

Layout: dark ink on grey paper, four lines, top to bottom. The free index is $k$ on line 2, and the result on line 4 is written with $n$. No $\delta_{kn}$ is written, and there is no intermediate "$=c_k$" step.

**Turn 4 image (learner's full handwritten derivation), transcribed verbatim:**

Left column:

- "Lets start from scratch"
- "what we have: $C_n$, $\lambda_n$"
- "what we need to derive: $\langle A\rangle$"
- "According to the defination" (brace grouping three lines):
	- $C_n=\langle f_n|\Psi\rangle$, $|\Psi\rangle=\sum_n C_n|f_n\rangle$
	- $\hat A|f_n\rangle=\lambda_n|f_n\rangle$
	- $\langle A\rangle=\langle\Psi|\hat A|\Psi\rangle$
- (curved arrow from $|\Psi\rangle=\sum_n C_n|f_n\rangle$ down to:) $\langle f_k|\Psi\rangle=\sum_n C_n\langle f_k|f_n\rangle$
- "$\because$ orthonoramal"
- "$\therefore$ $\langle f_n|f_n\rangle=1$"
- "And $\langle f_k|f_n\rangle=\delta_{kn}$"
- "only when $n=k$"
- $\langle f_k|\Psi\rangle=C_k$ "(n and k are only signs)"
- $C_n=\langle f_n|\Psi\rangle$
- "Back to $\langle A\rangle=\langle\Psi|\hat A|\Psi\rangle$"
- "where $\hat A|\Psi\rangle$"
	- $=\hat A\left(\sum_n C_n|f_n\rangle\right)$
	- $=\sum_n C_n\hat A|f_n\rangle$
	- $=\sum_n C_n\lambda_n|f_n\rangle$
- "And $\langle\Psi|=|\Psi\rangle^\dagger$"
	- $=\left[\sum_n C_n|f_n\rangle\right]^\dagger$

Right column:

- $\langle\Psi|=\sum_n C_n^\dagger\,|f_n\rangle^\dagger$
- "Since $C_n$ are scalar"
- $\to C_n^\dagger=C_n^*$
- $\langle\Psi|=\sum_n C_n^*\langle f_n|$
- $\langle A\rangle=\left[\sum_j C_j^*\langle f_j|\right]\left[\sum_k C_k\lambda_k|f_k\rangle\right]$
- "only if $j=k$"
- "$\to$ cancelled to"
- $\langle A\rangle=\sum_k\left[C_k^*\langle f_k|\right]\left[C_k\lambda_k|f_k\rangle\right]$
- "where $\langle f_k|f_k\rangle=1$, normalized"
- $\langle A\rangle=\sum_k\lambda_k C_k^*C_k$
- $=\sum_k\lambda_k|C_k|^2$

Layout: one page of cream paper, dark ink, two columns; the left column continues into the right. Scribbles and overwrites: a scribbled glyph before "$\because$ orthonoramal"; the "1" in $\langle f_n|f_n\rangle=1$ is overwritten; the dagger on $|f_n\rangle^\dagger$ (right column, top) is overwritten; a struck-out word before "only if $j=k$". The learner's message with the image: "I see now! They are connected!" The Turn 3 question ($\lambda_k$ vs $c_k$ under a change of state) is not answered on the page.

**Turn 7 image (learner's handwritten work on the unnormalized state), transcribed verbatim:**

- $\langle\Psi|\hat A|\Psi\rangle=\sum_k\lambda_k|C_k|^2$
- $C_1=1$, $C_2=2$
- $\langle\Psi|\Psi\rangle=\sum_{k=1}^{2}\lambda_k|C_k|^2$
- $=|C_1|^2+|C_2|^2$
- $=5$ "without normalization"
- $C_1'=\dfrac{C_1}{\sqrt{|C_1|^2+|C_2|^2}}=\dfrac{1}{\sqrt5}$
- $C_2'=\dfrac{C_2}{\sqrt5}=\dfrac{2}{\sqrt5}$
- "if it is the probability $\int_{-\infty}^{+\infty}\Psi^*\Psi\,\mathrm{d}x=5$," then below it: "(Normalize $C_n$)$^2$"

Layout: one page of cream paper, dark ink, top to bottom. The lower limit "$k=1$" on line 3 is overwritten, and so is the "5" in the last line. Line 3 keeps $\lambda_k$ in the expression for $\langle\Psi|\Psi\rangle$. Line 4 drops it without comment (all $\lambda_k=1$ for $\hat 1$). The message had no text.

---

## Turns

### Turn 1 — 2026-09-27 (learner)

> *(image only: formula card `cpgf-5.6`, transcribed in Context above; no text)*

### Tutor

This card is a formula you already locked on 2026-07-26 in [[2026-07-26-2112 Harmonic oscillator]], only generalized. There you had $\langle\hat H\rangle=\sum_i P(E_i)\,E_i$: take every possible measurement outcome, multiply it by its probability, and sum. The card swaps $\hat H\to\hat A$ and $E_i\to\lambda_k$, so $|c_k|^2$ now sits in the slot $P(E_i)$ used to hold. The averaging itself is not new. What is new is what fills the weight slot, plus the two conditions the card states up front: the basis is made of eigenstates of $\hat A$, and it is orthonormal.

Which piece do you want to nail first: why the weight is $|c_k|^2$ (a probability, and why squared rather than $c_k$), or how this sum falls out of $\langle\psi|\hat A|\psi\rangle$ once you use those two conditions? If it's something else about the card, tell me that instead.

### Turn 2 — 2026-09-27 (learner)

> 1. I almost forget. The retention is weak.
> 2. My primary motivation is to master the physical picture entirely, and it is the thing makes my retention much stronger in my opinion. Understand before memorizing.
> 3. Derivation. I know all these concepts separately, having no ability to consolidate them now, which is annoying.
> 4. Strength the understanding of C_n = <f_n|Ψ>

### Tutor

Then we derive the whole chain, and card 5.5 ($c_n$) is its first working link, not a side topic. Here is the chain, by name only: expand $|\Psi\rangle$ in the eigenbasis → project out one coefficient → rewrite that projection in position space (card 5.5) → read $|c_k|^2$ as a probability → sandwich $\hat A$ between bra and ket (card 5.6). Each link spends one fact you already own. Consolidating means seeing which fact each link spends.

Link 1 is an assumption, so I'll flag it as it enters. Writing $|\Psi\rangle=\sum_n c_n|f_n\rangle$ assumes the eigenstates of $\hat A$ form a complete basis. For a Hermitian observable they do (the spectral theorem; a continuous spectrum turns the sum into an integral). For link 2, recall your own 3D picture from [[2026-07-27-1331 Position representation]]. To extract $v_y$ from $\mathbf v=v_x\hat x+v_y\hat y+v_z\hat z$, dot with $\hat y$:

$$\hat y\cdot\mathbf v=v_x\underbrace{(\hat y\cdot\hat x)}_{0}+v_y\underbrace{(\hat y\cdot\hat y)}_{1}+v_z\underbrace{(\hat y\cdot\hat z)}_{0}=v_y$$

Now make the same move in Dirac notation. Hit $|\Psi\rangle=\sum_n c_n|f_n\rangle$ with the bra $\langle f_m|$, use $\langle f_m|f_n\rangle=\delta_{mn}$, and write out what survives, term by term like the line above. What do you get?

### Turn 3 — 2026-09-27 (learner)

> *(image: handwritten derivation, transcribed in Context above)*
> 1. I easily mix up the eigenvalue of eigenbasis and the coefficient of eigenbasis with respect to a state.
> 2. Are the derivation and ideas in the image correct?

### Tutor

Yes, it's correct, and it's the same move as the $\hat y$ line. Two small tightenings. First, "only if $n=k$" is the *orthogonal* half of orthonormal: it kills every $n\neq k$ term. The one survivor is $c_k\langle f_k|f_k\rangle$, and it equals $c_k$ only because each basis ket is *normalized*. Written in full: $\langle f_k|\Psi\rangle=\sum_n c_n\,\delta_{kn}=c_k$. So this one line spends both halves of the word "orthonormal" on the card. Second, your last line switches from $k$ to $n$. Inside the sum, $n$ is a dummy index and $k$ is the one you chose, so the result is $c_k=\langle f_k|\Psi\rangle$. Renaming it $c_n$ afterwards is legal, because it's only a label once the sum is gone.

On mixing up $\lambda_k$ and $c_k$, put their defining equations side by side:

$$\hat A|f_k\rangle=\lambda_k|f_k\rangle \qquad\qquad c_k=\langle f_k|\Psi\rangle$$

Physically, $\lambda_k$ is a reading the measuring device can show, like a number printed on a dial. $c_k$ is what you just derived: how much of *this* state lies along $|f_k\rangle$. Suppose you keep the same $\hat A$ but prepare a different state $|\Psi'\rangle$. Which of $\lambda_k$ and $c_k$ changes, and what in the two equations tells you so?

### Turn 4 — 2026-09-27 (learner)

> *(image: full handwritten derivation, transcribed in Context above)*
> I see now! They are connected!

### Tutor

Yes, and you made the connection yourself: this is a complete, correct derivation of card 5.6. Two moves in it are exactly where people slip, and you got both right:

- **The dagger:** $\left(\sum_n c_n|f_n\rangle\right)^\dagger=\sum_n c_n^*\langle f_n|$. It turns kets into bras *and* conjugates the scalars. The $c_k^*$ from the bra times the $c_k$ from the ket is where $|c_k|^2$ comes from.
- **Separate dummy indices $j$ and $k$ for the two sums.** If you reuse $n$ in both, you silently drop the cross terms before orthonormality has earned it. Your $\delta_{jk}$ collapse kills them legitimately.

(The Turn 3 question about $\lambda_k$ vs $c_k$ is still open; I'll come back to it once the chain is closed.)

One assumption hides in your first line: $\langle A\rangle=\langle\Psi|\hat A|\Psi\rangle$ holds only for a normalized state. That's link 4, and it's where the physical picture lives. Your result has to agree with your 07-26 formula $\langle A\rangle=\sum_k P(\lambda_k)\,\lambda_k$ for every state (take the $\lambda_k$ distinct for now; a repeated eigenvalue just groups terms). Match the two term by term. What does that force $\sum_k|c_k|^2$ to equal?

### Turn 5 — 2026-09-27 (learner)

> Equals Sigma P(λ_k) = 1

### Tutor

Right. Matching term by term gives $P(\lambda_k)=|c_k|^2$, and the probabilities of all possible outcomes add to 1, so $\sum_k|c_k|^2=\sum_k P(\lambda_k)=1$. That identification, $P(\lambda_k)=|c_k|^2$, is the **Born rule**. One honesty note on the logic: in Griffiths the Born rule is the postulate, and the sandwich formula is derived from it. Your matching shows they are the same statement seen from two sides, so it doesn't matter which one you anchor your memory on.

Now tie $\sum_k|c_k|^2=1$ back to the state itself. Your page works for any $\hat A$ that has the eigenbasis $\{|f_k\rangle\}$. Rerun it with $\hat A\to\hat 1$, the identity operator, which has every $\lambda_k=1$ in any basis. What does $\langle\Psi|\Psi\rangle$ come out as?

### Turn 6 — 2026-09-27 (learner)

> 1

### Tutor

True for a normalized state. But 1 is only the value. Rerunning your page also gives an expression in the $c_k$ before any 1 appears, and that expression is what you'll need on the GRE, where states often arrive unnormalized. Try one: $|\Psi\rangle=|f_1\rangle+2|f_2\rangle$, with $|f_1\rangle$ and $|f_2\rangle$ orthonormal. Run your page with $\hat A\to\hat 1$ on this state. What is $\langle\Psi|\Psi\rangle$?

### Turn 7 — 2026-09-27 (learner)

> *(image only: handwritten work on $|\Psi\rangle=|f_1\rangle+2|f_2\rangle$, transcribed in Context above)*

### Tutor

Correct: $\langle\Psi|\Psi\rangle=1^2+2^2=5$, and the normalized coefficients $\frac{1}{\sqrt5}$, $\frac{2}{\sqrt5}$ give probabilities $\frac15$ and $\frac45$. Here's the picture to keep: $1^2+2^2$ is Pythagoras. $\langle\Psi|\Psi\rangle$ is the squared length of $|\Psi\rangle$, and $|c_k|^2$ is the share of that squared length lying along $|f_k\rangle$. Normalizing rescales the arrow to unit length, so the shares become probabilities. The GRE form for an unnormalized state is $\langle A\rangle=\dfrac{\langle\Psi|\hat A|\Psi\rangle}{\langle\Psi|\Psi\rangle}$. One fix: your third line keeps $\lambda_k$ inside $\langle\Psi|\Psi\rangle$. There's no operator in $\langle\Psi|\Psi\rangle$, so no eigenvalue can appear in it: it's $\sum_k|c_k|^2$, full stop. That's the Turn 3 $\lambda_k$ vs $c_k$ mix-up in a new form.

Link 4 is done. Your last line already reached for link 3 when you wrote $\langle\Psi|\Psi\rangle$ as $\int\Psi^*\Psi\,\mathrm{d}x$. To earn that step, and card 5.5 with it, you need one more tool, and it's hiding in links 1 and 2. Substitute $c_k=\langle f_k|\Psi\rangle$ back into $|\Psi\rangle=\sum_k c_k|f_k\rangle$, and group the result as $\left(\sum_k|f_k\rangle\langle f_k|\right)|\Psi\rangle$. Since this holds for every $|\Psi\rangle$, what operator is $\sum_k|f_k\rangle\langle f_k|$?

### Turn 8 — 2026-09-27 (learner)

> I guess the operator is identity operator?

### Tutor

Yes, and you don't need to guess: an operator that hands back every vector unchanged is the identity by definition. So

$$\sum_k|f_k\rangle\langle f_k|=\hat 1$$

This is the **completeness relation** (also called the resolution of the identity), and it's your link 1 assumption written as an equation. Here's the picture. Each $|f_k\rangle\langle f_k|$ is a projector: it measures the component along $|f_k\rangle$ and lays it back along $|f_k\rangle$. Summing the projectors over a complete orthonormal set takes the vector apart and puts it back whole. In 3D it reads $\hat x\hat x^{\mathsf T}+\hat y\hat y^{\mathsf T}+\hat z\hat z^{\mathsf T}=I$.

The position basis obeys the same identity, with the sum over $k$ turned into an integral over $x$: $\hat 1=\int|x\rangle\langle x|\,\mathrm{d}x$. (A flag as it enters: $|x\rangle$ is normalized to a Dirac delta, $\langle x|x'\rangle=\delta(x-x')$, instead of a Kronecker $\delta_{jk}$. That's why the sum becomes an integral.) Now insert this $\hat 1$ between $\langle f_n|$ and $|\Psi\rangle$ in $c_n=\langle f_n|\Psi\rangle$. You locked the right-hand factor on 07-27; the left-hand one needs one more property of inner products. What does each factor under the integral become as a function of $x$?

### Turn 9 — 2026-09-27 (learner)

> f(x,t) and PSI(x,t)

### Tutor

Half right. The right factor is exactly what you locked on 07-27: $\langle x|\Psi\rangle=\Psi(x,t)$. The left factor has two problems.

First, the $t$. $f_n$ is an eigenfunction of $\hat A$, so it belongs to the operator, just like $\lambda_n$, and the operator doesn't change in time (assuming $\hat A$ has no explicit $t$-dependence). So it's $f_n(x)$, with no $t$. All of $\Psi$'s time dependence lives in the coefficients, $c_n(t)$. This is the split you keep mixing up: $\hat A$ owns $\lambda_n$ and $f_n$, and the state owns $c_n$ and $\Psi$.

Second, the order. $f_n(x)$ is $\langle x|f_n\rangle$, with $x$ in the bra and $f_n$ in the ket. Your factor $\langle f_n|x\rangle$ has them the other way round. In Turn 4, your dagger step turned $c_n$ into $c_n^*$ when a ket flipped into a bra. So what does swapping the two sides of an inner product do to the number, and what does that make $\langle f_n|x\rangle$?

### Turn 10 — 2026-09-27 (learner)

> The complex conjugate of fn(x)

### Tutor

Right: $\langle f_n|x\rangle=\langle x|f_n\rangle^*=f_n^*(x)$. Swapping the two sides of an inner product conjugates it, $\langle a|b\rangle=\langle b|a\rangle^*$ (conjugate symmetry). That's your Turn 4 dagger step applied to a single number. Put your two factors together and card 5.5 falls out:

$$c_n=\langle f_n|\Psi\rangle=\int_{-\infty}^{\infty}\langle f_n|x\rangle\langle x|\Psi\rangle\,\mathrm{d}x=\int_{-\infty}^{\infty}f_n^*(x)\,\Psi(x,t)\,\mathrm{d}x$$

It's the same move as $\hat y\cdot\mathbf v$. The components are now indexed by a continuous $x$, so the sum over components becomes an integral. The overlap integral measures how much of $\Psi$ lies along $f_n$. Put $\Psi$ in place of $f_n$ and you get your Turn 7 line, $\langle\Psi|\Psi\rangle=\int|\Psi|^2\,\mathrm{d}x$, now derived instead of recalled. That closes the chain: both cards come from one expansion plus orthonormality, completeness, and the dagger.

One last check, and it's your Turn 3 question with both cards in view. Keep the same $\hat A$, but prepare a different state $|\Psi'\rangle$. Across cards 5.5 and 5.6, which symbols change and which stay fixed?

### Turn 11 — 2026-09-27 (learner)

> Brilliant!
> because eigenbasis does not change. So...  To my current understanding, I still think they both change.

### Tutor

You're right that the eigenbasis doesn't change. The rest is where I think a mix-up is hiding, and my wording hasn't landed twice now, so let's use numbers instead. Take your 07-26 two-level system, the same $\hat H$ throughout, with eigenstates $|E_1\rangle$, $|E_2\rangle$ and $E_1=\hbar\omega$, $E_2=3\hbar\omega$. Prepare it two different ways:

- **State A** (your 07-26 state): $\frac{1}{\sqrt2}|E_1\rangle+\frac{1}{\sqrt2}|E_2\rangle$. Possible energy readings: $\hbar\omega$ with probability $\frac12$, and $3\hbar\omega$ with probability $\frac12$. So $\langle\hat H\rangle=2\hbar\omega$.
- **State B** (your Turn 7 state, normalized): $\frac{1}{\sqrt5}|E_1\rangle+\frac{2}{\sqrt5}|E_2\rangle$. Possible energy readings: ?

Fill in state B's line the same way. Which energies can the detector show, and with what probabilities?

### Turn 12 — 2026-09-27 (learner)

> 1. Possible energy: 1/5E1 + 4/5E2
> 2. When the detector shows e1, the probability is 1/5 and when it shows e2, the probability is 4/5.

### Tutor

Line 2 is exactly right, so put it next to state A. The detector shows the same two readings for both states, $E_1=\hbar\omega$ and $E_2=3\hbar\omega$. Only the probabilities moved, from $\frac12,\frac12$ to $\frac15,\frac45$. The readings are the $\lambda_k$, and the probabilities are the $|c_k|^2$. So changing the state left the $\lambda_k$ alone and changed the $c_k$.

Line 1 is where I think your "they both change" came from. $\frac15E_1+\frac45E_2=\frac{13}{5}\hbar\omega$ is a real and useful number, but it's $\langle\hat H\rangle$, not a possible energy. A single measurement can never show $2.6\,\hbar\omega$; it shows $\hbar\omega$ or $3\hbar\omega$. $\langle\hat H\rangle$ is the average over many runs, and it *does* change with the state, from $2\hbar\omega$ to $\frac{13}{5}\hbar\omega$. So something on card 5.6 changes, but it's $\langle A\rangle$ and the $c_k$, never the $\lambda_k$.

Now run it the other way. Keep state B, but measure a different observable $\hat B$ that has the same eigenstates $|E_1\rangle,|E_2\rangle$, with eigenvalues $+1$ and $-1$. Which of $\lambda_k$ and $c_k$ change now, and what does card 5.6 give for $\langle\hat B\rangle$?


### Turn 13 — 2026-09-28 (learner)

> I see. In the previous case, we did't change A hat and eigenstates. The only thing we changed was |ψ>. So the eigenvalues λ_k have not changed since it only relates to A hat and eigenstate. When psi changed, C_n changed accordingly to fit the state.
> Under the current circumstance, the operator changes, so 𝜆 changes with the same eigenstates. <B> = -3/5.

### Tutor

Both halves are right, and together they split $\lambda_k$ from $c_k$ in both directions. Last turn you kept $\hat H$ and changed the state, so the $c_k$ moved and the $\lambda_k$ stayed put. This time you kept the state and changed the operator. The eigenstates are the same, so $c_k=\langle E_k|\Psi\rangle$ stays $\frac{1}{\sqrt5},\frac{2}{\sqrt5}$, and only the $\lambda_k$ change, to $+1$ and $-1$. Card 5.6 then gives $\langle\hat B\rangle=(+1)\cdot\frac15+(-1)\cdot\frac45=-\frac35$. It's also a clean case of last turn's point: a single run of $\hat B$ reads $+1$ or $-1$, never $-\frac35$.

So when the two blur again, ask which object each symbol depends on:
- **$\lambda_k$** come from $\hat A|f_k\rangle=\lambda_k|f_k\rangle$. They belong to the operator: the readings the detector can show.
- **$c_k=\langle f_k|\Psi\rangle$** belong to the state, measured against that basis. $|c_k|^2$ is how often each reading turns up.
- **$\langle A\rangle=\sum_k\lambda_k|c_k|^2$** uses both, so it changes when either one changes.

That closes the session. You derived the whole chain yourself: expand, project out $c_k$ by orthonormality, rewrite the projection in position space (card 5.5), read $|c_k|^2$ as a probability with $\sum_k|c_k|^2=1$, and sandwich $\hat A$ (card 5.6). Two traps stay open for a later `/retention` pass: writing card 5.5 from the bracket with the conjugate and no hint, and keeping $\langle A\rangle$ apart from a single reading. If you want a clean write-up of the full derivation in `30_Research/`, say so and I'll compile it.
