---
type: learning-session
topic: determinant equations / characteristic equations
project: "[[GRE_Physics_Prep]]"
started: 2026-09-23
---
# Determinant equations

Context: captured via `/daily-note-addition` on [[2026-09-23]]; learner asked to learn how to solve determinant equations (GRE prep context — eigenvalue/normal-mode problems).

### Turn 1 — 2026-09-23 (learner)

> this item. (referring to: "Learn how to solve determinant equations")

### Tutor

"Determinant equation" on the GRE almost always means one move: a matrix equation like $M\mathbf{v} = \lambda\mathbf{v}$ (eigenvalues) or a coupled system that only has a non-trivial solution when $\det(A) = 0$. The mechanics are short — expand the determinant, get a polynomial, solve it — and the real skill is setting up $\det(M - \lambda I) = 0$ cleanly and picking the cheapest expansion.

Before I pitch the level: where are you starting from — do you remember how to expand a $2\times2$ and $3\times3$ determinant at all, or is it the "why does $\det = 0$ give eigenvalues" part that's fuzzy?

### Turn 2 — 2026-10-01 (learner)

> /learn how to solve determinant equations in GRE_Physics_Prep (~ 25 mins)
> - Determinant setup & solving method (cofactor expansion, characteristic equations) (~ 20 mins)
> - Error analysis & answer review against notes (~ 5 mins)

(Re-invoked from today's daily note; the Turn 1 calibration question is still unanswered.)

### Tutor

Rather than ask the same question again, here is a probe that doubles as the diagnosis — wherever you stop tells me exactly which half of this (the expansion mechanics, or the $\det(M-\lambda I)=0$ setup) we work on.

Take the GRE-flavoured matrix

$$M=\begin{pmatrix}2 & 1\\ 1 & 2\end{pmatrix}$$

(this is the stiffness matrix of two identical masses joined by springs — the normal-mode problem the exam dresses up in different clothes).

Write down the equation whose solutions are the eigenvalues of $M$, and carry it as far as you can — even if that is only the first line. Three honest stopping points, all useful to me:

- you can't write the equation at all $\to$ we start from *why* a determinant shows up here;
- you write $\det(M-\lambda I)=0$ but stall turning the matrix into a polynomial $\to$ we drill expansion;
- you get both roots $\to$ we jump straight to $3\times3$ and cofactor expansion, where the GRE actually eats people's clock.

So: how far does it go?

### Turn 3 — 2026-10-01 (learner)

> Before everything starts, let's build up a picture or comprehensive understanding of this concept so that I can absorb it better.
> Stopping point: I can't write the equation at al

### Tutor

Fair — you're at the floor, so here is the floor. Three ideas, and the third *is* the equation.

**1. A matrix is a map, and $\det$ measures how much it stretches area.** Feed $M$ the unit square (spanned by $\hat x,\hat y$); it comes out a parallelogram, and $\det M$ is that parallelogram's area (signed).

```
      y                              y'
      ^                              ^
      |  ┌───┐   unit square         |      ┌────┐
      |  │   │   area = 1     --M->  |     /    /     area = |det M|
      |  └───┘                       |    └────┘
      +--------> x                   +-----------> x'
```

**2. $\det M = 0$ is the degenerate case: the parallelogram is squashed flat.** Area zero means the whole plane got collapsed onto a line (or a point). And if a 2-D plane gets flattened, some nonzero direction had to be crushed to nothing — i.e. there exists $\mathbf v \neq 0$ with $M\mathbf v = 0$.

```
   det M = 0 :    ┌───┐  --M->   ────────   (flat, area 0)
                  └───┘
                            ⇒ ∃ v ≠ 0 with Mv = 0
```

That biconditional is the engine of the whole topic:

$$\det A = 0 \iff A\mathbf v = \mathbf 0 \text{ has a solution with } \mathbf v \neq \mathbf 0$$

**3. Now the eigenvalue question.** An eigenvalue is a number $\lambda$ for which some nonzero vector is merely *rescaled* rather than rotated: $M\mathbf v = \lambda\mathbf v$. Move everything to one side — and note $\lambda\mathbf v = \lambda I\mathbf v$, so the $\lambda$ has to be wearing an identity matrix to be subtractable:

$$M\mathbf v - \lambda I\mathbf v = \mathbf 0 \quad\Longrightarrow\quad (M-\lambda I)\,\mathbf v = \mathbf 0$$

You are asking the matrix $A = M - \lambda I$ to kill a nonzero vector. By idea 2, that happens exactly when it flattens space:

$$\boxed{\det(M-\lambda I) = 0}$$

That is the **characteristic equation**. Expanding the determinant turns it into a polynomial in $\lambda$ (degree $n$ for an $n\times n$ matrix), and its roots are the eigenvalues. Physically, in the two-mass–spring problem, $\lambda$ sets $\omega^2$ and the surviving $\mathbf v$ *is* the normal mode's shape.

One step for you: for our

$$M=\begin{pmatrix}2 & 1\\ 1 & 2\end{pmatrix}$$

write out the matrix $M - \lambda I$ explicitly (all four entries). Don't expand anything yet — just the matrix.

### Turn 4 — 2026-10-01 (learner)

> *(handwritten photo, blue ink on grey paper)*
>
> $$M-\lambda I=\begin{pmatrix}2-\lambda & 1-\lambda\\ 1-\lambda & 2-\lambda\end{pmatrix}$$

### Tutor

Good instinct on the structure — but one entry type is wrong, and it is the single most common way this setup breaks. You subtracted $\lambda$ from **all four** entries. Look again at what you are actually subtracting: not $\lambda$, but $\lambda I$.

So write out $\lambda I$ by itself for the $2\times2$ case — all four entries, explicitly. What is in the off-diagonal slots of the identity matrix?

### Turn 5 — 2026-10-01 (learner)

> (lamada 0, lamada 0)

### Tutor

The part that matters is right: the off-diagonal slots are $\mathbf 0$. (Your two rows as typed both read $(\lambda,\ 0)$ — I'll take that as a typo for the diagonal; if you really meant it, the bottom row should be $(0,\ \lambda)$ so the $\lambda$ sits on the *diagonal*.)

$$\lambda I=\begin{pmatrix}\lambda & 0\\ 0 & \lambda\end{pmatrix}$$

So subtracting it only touches the diagonal; the off-diagonal $1$s are untouched. A free sanity check you should run every time: set $\lambda=0$ and the matrix must collapse back to $M$ itself — your Turn 4 version gave $\begin{pmatrix}2&1\\1&2\end{pmatrix}$ correctly at $\lambda=0$ by luck, but try $\lambda=1$ and the off-diagonals vanish, which would mean the two masses stopped being coupled. Nonsense — the coupling is physics, $\lambda$ can't erase it.

Now redo it: write $M-\lambda I$ for $M=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.

### Turn 6 — 2026-10-01 (learner)

> *(handwritten photo)*
>
> $$M-\lambda I=\begin{pmatrix}2-\lambda & 1\\ 1 & 2-\lambda\end{pmatrix}$$

### Tutor

That's it. Only the diagonal shifts.

Now impose the flattening condition. For a $2\times2$ the determinant is the one rule worth memorising cold:

$$\det\begin{pmatrix}a & b\\ c & d\end{pmatrix}=ad-bc$$

(main diagonal product minus anti-diagonal product — it is the signed area of the parallelogram from Turn 3.)

Apply it to your matrix, set the result to $0$, and solve for $\lambda$. You should land on a quadratic and two roots.

### Turn 7 — 2026-10-01 (learner)

> *(handwritten photo)*
>
> $$\det\begin{pmatrix}a & b\\ c & d\end{pmatrix}=ad-bc$$
> $$(2-\lambda)^2-1=0$$
> $$2-\lambda=\pm1$$
> $$\lambda=2\pm1=3\ \text{or}\ 1$$

### Tutor

Correct, and you took the good route — recognising $(2-\lambda)^2=1$ instead of grinding out $\lambda^2-4\lambda+3=0$ and quoting the quadratic formula. On the clock that is worth real seconds, and perfect-square structure like this is extremely common in GRE normal-mode matrices.

Two free checks you now own, both one-liners:
- **Trace:** $\lambda_1+\lambda_2=\operatorname{tr}M=2+2=4$. ✓ ($3+1$)
- **Determinant:** $\lambda_1\lambda_2=\det M=4-1=3$. ✓ ($3\times1$)

Those hold for any $n\times n$ and catch arithmetic slips instantly.

Now collect the payoff — the eigenvector, which in the spring problem *is* the normal mode. Take $\lambda=3$: write $M-3I$ explicitly, then find a nonzero $\mathbf v=\begin{pmatrix}x\\y\end{pmatrix}$ with $(M-3I)\mathbf v=\mathbf 0$. What is the relation between $x$ and $y$?

### Turn 8 — 2026-10-01 (learner)

> What is trace btw?
>
> *(handwritten photo)*
>
> $$M-3I=\begin{pmatrix}2&1\\1&2\end{pmatrix}-\begin{pmatrix}3&0\\0&3\end{pmatrix}=\begin{pmatrix}-1&1\\1&-1\end{pmatrix}\ \to\ \det(M-3I)=(-1)(-1)-(1)(1)=0$$
>
> wait, it's strange
>
> $$(M-3I)\mathbf v=0$$
> $$\begin{pmatrix}-1&1\\1&-1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}-x+y\\x-y\end{pmatrix}=0$$
> $$x=y$$

### Tutor

$x=y$ — correct. And **trace** is just the sum of the diagonal entries: $\operatorname{tr}M=M_{11}+M_{22}+\dots+M_{nn}$. Here $2+2=4$. (It is basis-independent, which is why it must equal $\sum\lambda_i$.)

Now the "wait, it's strange": nothing is strange — you just rediscovered the whole point. $\det(M-3I)=0$ is not a coincidence, it is *the equation you solved to get $\lambda=3$ in the first place*. You chose $\lambda$ precisely so the determinant would vanish. If it had come out nonzero, you'd have made an arithmetic error.

And notice the consequence you hit: the two rows gave $-x+y=0$ and $x-y=0$ — **the same equation twice**. That redundancy is the algebraic face of the flattening picture from Turn 3. A matrix with $\det=0$ doesn't pin down a unique $\mathbf v$; it leaves a whole *line* of solutions, $\mathbf v=t\begin{pmatrix}1\\1\end{pmatrix}$ for any $t\neq0$. Eigenvectors are only ever defined up to scale — so on the GRE, if your answer is $(1,1)$ and the choices show $(2,2)$ or $\frac{1}{\sqrt2}(1,1)$, that is the same eigenvector, not a different one.

Physically, in the two-mass–spring system $\begin{pmatrix}1\\1\end{pmatrix}$ means both masses move together, in phase, same amplitude.

Your turn: do $\lambda=1$. Find its eigenvector, and say what motion it describes.

### Turn 9 — 2026-10-01 (learner)

> *(handwritten photo)*
>
> $$M-\lambda I=\begin{pmatrix}1&1\\1&1\end{pmatrix}$$
> $$(M-\lambda I)\mathbf v=\begin{pmatrix}x+y\\x+y\end{pmatrix}=0$$
> $$x=-y\ \to\ \mathbf v=t\begin{pmatrix}1\\-1\end{pmatrix}$$
> $\to$ Physically it means these 2 mass move to the opposite direction?

### Tutor

Yes — exactly right, and no question mark needed. $\begin{pmatrix}1\\-1\end{pmatrix}$ is the antisymmetric mode: equal amplitudes, opposite directions, the spring between them stretching and compressing. That is why it has the *other* eigenvalue: the coupling spring is active, so the restoring force is stiffer. (In the real spring problem the symmetric mode leaves the middle spring unstretched, giving the lower frequency.) Note also that your two eigenvectors are orthogonal, $(1,1)\cdot(1,-1)=0$ — guaranteed for a symmetric matrix, and another free GRE check.

The $2\times2$ machine is now yours. On to the half that actually costs time on the exam: $3\times3$.

**Cofactor expansion.** Pick any one row or column. For each entry, multiply it by the determinant of the $2\times2$ you get by deleting that entry's row and column (its *minor*), and attach a sign from the checkerboard

$$\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}$$

then add the three terms. Expanding along the first row:

$$\det\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix}=a\begin{vmatrix}e&f\\h&i\end{vmatrix}-b\begin{vmatrix}d&f\\g&i\end{vmatrix}+c\begin{vmatrix}d&e\\g&h\end{vmatrix}$$

The one tactical rule: **expand along whichever row or column has the most zeros**, because a zero entry kills its whole minor — you never compute it.

Try it on the three-mass chain matrix:

$$A=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$$

Compute $\det A$ (just the number, no $\lambda$ yet). Say which row or column you chose and why.
