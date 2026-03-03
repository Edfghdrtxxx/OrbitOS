---
title: Vector Spaces
type: wiki
tags: [math, linear-algebra, vector-spaces, Phase-0]
created: 2026-02-15
related: "[[Linear_Algebra]]"
last_reviewed:
next_review: 2026-03-03
review_interval: 0
---
                                                                                                                                                                                                                                                                                     # Vector Spaces

> [!abstract] Core Idea
> A vector space is a set of objects (vectors) that you can add together and scale, following consistent rules. In QM, the state space of a quantum system is a vector space — every possible state $|\psi\rangle$ lives in one.

## Definitions

### Vector Space Axioms
A set $V$ over a field $F$ (usually $\mathbb{R}$ or $\mathbb{C}$) is a **vector space** if for all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ and scalars $a, b \in F$:

1. **Closure under addition:** $\mathbf{u} + \mathbf{v} \in V$
2. **Closure under scalar multiplication:** $a\mathbf{u} \in V$
3. **Commutativity:** $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
4. **Associativity:** $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
5. **Zero vector exists:** $\exists\, \mathbf{0}$ such that $\mathbf{u} + \mathbf{0} = \mathbf{u}$
6. **Additive inverse:** $\exists\, (-\mathbf{u})$ such that $\mathbf{u} + (-\mathbf{u}) = \mathbf{0}$
7. **Scalar distributivity:** $a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$
8. **Vector distributivity:** $(a + b)\mathbf{u} = a\mathbf{u} + b\mathbf{u}$
9. **Scalar associativity:** $a(b\mathbf{u}) = (ab)\mathbf{u}$
10. **Identity element:** $1\mathbf{u} = \mathbf{u}$

> [!tip] Why 10 axioms?
> These aren't arbitrary — they guarantee that linear combinations $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots$ always make sense. Every theorem in linear algebra ultimately traces back to these.

### Linear Independence

Vectors $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ are **linearly independent** if the only solution to:

$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n = \mathbf{0}$$

is $c_1 = c_2 = \cdots = c_n = 0$.

**Geometric meaning:** No vector in the set can be written as a combination of the others. They point in "genuinely different directions."

> [!note]- Feynman Explanation: Linear Independence
>
> **Start with what you know.** Imagine you're giving someone directions to a café.
>
> You say: "Walk 3 blocks east, then 2 blocks north." That gets them there. East and north are **independent directions** — knowing how far east to go tells you nothing about how far north to go. You need both pieces of information.
>
> Now imagine someone gives you a third direction: "northeast." But northeast is just east + north combined. It's not a *new* direction — it's redundant. If you already have east and north, adding northeast gives you **no new ability to reach places**. That's linear *dependence*: one direction is a mix of the others.
>
> **The formal definition, unpacked.** The equation $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots = \mathbf{0}$ is really asking: "Is there a *non-trivial recipe* that mixes these vectors and gets zero?" If yes, then at least one vector is a disguised copy of the others — you can rearrange the recipe to isolate it. If no, the only way to mix them into zero is to use none of them ($c_i = 0$ for all $i$), which means each vector carries genuinely new information.
>
> **Three mental tests:**
>
> | Test | Independent? | Dependent? |
> |------|-------------|------------|
> | Can I remove one vector and still reach the same places? | No — each one is essential | Yes — at least one is redundant |
> | Do the vectors all point along different "dimensions"? | Yes | No — some share a dimension |
> | If I stack them as rows and row-reduce, do I get all pivots? | Yes — full rank | No — at least one zero row |
>
> **2D visual.** Two vectors in the plane:
> - **Independent:** they point in different directions → they span the whole plane. You can reach any point $(x, y)$ by mixing them.
> - **Dependent:** one is a scaled version of the other (they lie on the same line) → you can only reach points on that line. You're stuck in 1D despite having "2" vectors.
>
> **3D example.** Three vectors in $\mathbb{R}^3$:
> - $\mathbf{v}_1 = (1, 0, 0)$, $\mathbf{v}_2 = (0, 1, 0)$, $\mathbf{v}_3 = (0, 0, 1)$ — independent. Three different axes, reaches everywhere in 3D.
> - $\mathbf{v}_1 = (1, 0, 0)$, $\mathbf{v}_2 = (0, 1, 0)$, $\mathbf{v}_3 = (2, 3, 0)$ — dependent! Because $\mathbf{v}_3 = 2\mathbf{v}_1 + 3\mathbf{v}_2$. All three are trapped in the $xy$-plane. The third vector is "free-loading" — it doesn't open up the $z$ direction.
>
> **The "so what?" for physics.** In quantum mechanics, the states $|\uparrow\rangle$ and $|\downarrow\rangle$ for a spin-1/2 particle are linearly independent — neither can be built from the other. That's why you need *both* to describe any spin state: $|\psi\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle$. If they were dependent, you'd only need one number instead of two, and spin would be much less interesting.
>
> **The one sentence version:** Vectors are linearly independent when none of them is redundant — each one lets you reach places you couldn't reach before.

### Span

The **span** of a set of vectors is all possible linear combinations:

$$\text{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_n\} = \{c_1\mathbf{v}_1 + \cdots + c_n\mathbf{v}_n \mid c_i \in F\}$$

### Basis and Dimension

A **basis** is a linearly independent set that spans the entire space.

- **Dimension** = number of vectors in any basis
- $\mathbb{R}^3$ has dimension 3 (standard basis: $\hat{e}_1, \hat{e}_2, \hat{e}_3$)
- A basis is the minimal spanning set and the maximal independent set

> [!example] Physics Connection
> In QM, the eigenstates $|n\rangle$ of the Hamiltonian form a basis for the state space. Any state can be written as $|\psi\rangle = \sum_n c_n |n\rangle$. The coefficients $c_n$ are probability amplitudes — this is exactly a linear combination in a vector space.

### Subspace

A **subspace** $W \subseteq V$ is a subset that is itself a vector space under the same operations. Quick test: check closure under addition and scalar multiplication (other axioms are inherited).

## Key Results

| Result            | Statement                                                  |
| ----------------- | ---------------------------------------------------------- |
| Unique zero       | The zero vector is unique                                  |
| Basis size        | All bases of a finite-dimensional space have the same size |
| Extension         | Any independent set can be extended to a basis             |
| Dimension formula | $\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$           |

## Practice Problems

Problems are grouped by difficulty. Work through them in order — each level builds on the previous one. Fill in your answers in the `[!todo]` blocks, then tell me when you're ready to check them.

### Level 1 — Warm-up (Definitions & Recognition)

**P1.1** Are the following vectors in $\mathbb{R}^2$ linearly independent?

$$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$$

> [!todo] Your Answer
> P1.1: <!-- Write your answer here --> No, they are linearly dependent, because$\mathbf{v}_1$ has linear relationship with $\mathbf{v}_2$, where $3 \cdot \mathbf{v}_1 = \mathbf{v}_2$, there exists a non-trivial scalar combination -> dependent.

**P1.2** Which of these subsets of $\mathbb{R}^2$ are subspaces? Explain why or why not.
- (a) $\{(x, y) \mid x \geq 0\}$
- (b) $\{(x, y) \mid y = 2x\}$
- (c) $\{(x, y) \mid x + y = 1\}$

> [!todo] Your Answer
> P1.2a: <!-- Write your answer here --> No, it's not a subspace of R^2 because the only failure is the scalar multiplication in this set is not closed (addition is closed). We can multiply a negative coefficient to a positive vector/number to make it out of this set.
> 
> P1.2b: <!-- Write your answer here --> It is a subset of R^2, because it pass the origin (0, 0) and is closed under both addition and scalar multiplication.
> 
> P1.2c: <!-- Write your answer here --> It's not a subspace of R^2, because it is a non-homogeneous equation and does not pass the origin (0, 0), which means it isn't closed under addition.

**P1.3** What is $\text{span}\{(1, 0, 0), (0, 1, 0)\}$ in $\mathbb{R}^3$? Describe it geometrically.

> [!todo] Your Answer
> P1.3: <!-- Write your answer here --> The z dimension of this set is squashed and this set is the basis of x-y plane. We can reach any points in x-y plane by linear combination based on this basis set.

### Level 2 — Computation (Row Reduction & Rank)

**P2.1** Determine if these vectors in $\mathbb{R}^3$ are linearly independent by row-reducing:

$$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}, \quad \mathbf{v}_3 = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}$$

> [!todo] Your Answer
> P2.1: <!-- Show your row reduction steps and conclusion here --> 
> First, we need to stack them as rows and row-reduce:
> $$\begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & -1 \\
2 & 1 & 3
\end{pmatrix}$$
> Second, swap the rows:
> $$\begin{pmatrix}
2 & 1 & 3 \\
1 & 0 & 2 \\
0 & 1 & -1
\end{pmatrix}$$
> Third, transfer it into staircase:
> $$\begin{pmatrix}
2 & 1 & 3 \\
0 & -1 & 1 \\
0 & 0 & 0
\end{pmatrix}$$
> The rank (2) is less than the number of vectors (3), so at least one vector is a linear combination of the others - they are linearly dependent.

**P2.2** Find a basis for the subspace $W = \{(x, y, z) \in \mathbb{R}^3 \mid x - 2y + z = 0\}$. What is $\dim(W)$?

> [!todo] Your Answer
> P2.2: <!-- Parametrize the subspace and identify basis vectors --> 
> Parametrization Method
> Step 1: Identify free variables
> $$x = 2y - z$$
> Step 2: Write the general vector
> $$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 2y - z \\ y \\ z \end{pmatrix}$$
> Step 3: Decomposition
> $$\begin{pmatrix} 2y \\ y \\ 0 \end{pmatrix} + \begin{pmatrix} -z \\ 0 \\ z \end{pmatrix} = y \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + z \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$$
> Result:
> $$\left\{ \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \right\}$$
> Dimensionality = 2, since there are 2 vectors in basis

**P2.3** Let $U = \text{span}\{(1, 1, 0), (0, 1, 1)\}$ and $W = \text{span}\{(1, 0, 1)\}$. Find $\dim(U + W)$ and $\dim(U \cap W)$.

> [!todo] Your Answer
> P2.3: <!-- Use the dimension formula: dim(U+W) = dim U + dim W - dim(U∩W) -->
> dim(U+W) = 3, dim(U∩W) = 0

### Level 2B — Blind Spot Drills (from P2.1 Review)

**P2.4 (Pivot recognition)** For each matrix, state whether a row swap is needed *before* beginning elimination, and why. Do NOT row-reduce — just decide.

(a)
$$\begin{pmatrix} 0 & 3 & 1 \\ 2 & 1 & 4 \\ 1 & 0 & 5 \end{pmatrix}$$

(b)
$$\begin{pmatrix} 1 & 4 & -2 \\ 0 & 0 & 3 \\ 0 & 5 & 1 \end{pmatrix}$$

(c)
$$\begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 7 \\ 6 & 2 & 0 \end{pmatrix}$$

> [!todo] Your Answer
> P2.4a: <!-- Swap needed? Which rows and why? --> Needed, swap row 1 and row 2 because the pivot of row 1 is 0 and pivot of row 2 is not.
> P2.4b: <!-- Swap needed? Which rows and why? --> Needed, swap row 2 and row 3 because the pivot of row 2 is 0 and pivot of row 3 is not.
> P2.4c: <!-- Swap needed? Which rows and why? --> Not needed, because we can directly attempt to reduce row 3 by row 1 and row 2 with correct pivot (a11 is non-zero).

> [!hint]- When is a row swap necessary?
> A swap is needed only when the current pivot position is **zero**. If the pivot is non-zero (even if it's not 1), you can proceed directly. Swapping a non-zero pivot for a "nicer" number is optional, not required.

**P2.5 (Explicit row operations)** Row-reduce the following matrix to echelon form. You **must** label every elementary row operation (e.g., $R_2 \to R_2 - 3R_1$). No skipped steps.

$$\begin{pmatrix} 1 & 2 & -1 \\ 3 & 5 & 0 \\ 2 & 3 & 1 \end{pmatrix}$$

> [!todo] Your Answer
> P2.5: <!-- Show each step with its row operation label -->
> First, we need to make the pivot in R2 zero:
> R2 -> R2 - 3R1 -> (0, -1, 3)
> Here comes to R3
> Reduce "2" first: R3 -> R3 - 2R1 -> (0, -1, 3) -> Is the same as current R2: R3 -> R3 - R2 -> (0, 0, 0,)

**P2.6 (Extracting the dependency relation)** The vectors below are linearly dependent. Row-reduce to find the rank, then **explicitly state** which vector is a linear combination of the others and verify by substitution.

$$\mathbf{u}_1 = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}, \quad \mathbf{u}_2 = \begin{pmatrix} 3 \\ 1 \\ 0 \end{pmatrix}, \quad \mathbf{u}_3 = \begin{pmatrix} 5 \\ 5 \\ 2 \end{pmatrix}$$

> [!todo] Your Answer
> P2.6 Row reduction: <!-- Show work --> Stack the vectors as row (Row Rank = Column Rank)
> R2 -> R2 - 3R1 -> (0, -5, -3)
> R3 -> R3 - 5R1 -> (0, -5, -3) = current R2
> 0 = R3 - 5R1 - current R2 = R3 - 5R1 -R2 + 3R1 = R3 - 2R1 - R2
> P2.6 Dependency relation: <!-- e.g., u3 = ?·u1 + ?·u2. Then verify component by component. --> u3 = 2u1 + u2

> [!hint]- How to read off the dependency from the reduced matrix
> After row-reducing the augmented system $[v_1 \mid v_2 \mid v_3]$, any free variable column tells you that vector can be written in terms of the pivot columns. Set the free variable to 1 and back-substitute to find the coefficients.

**P2.7 (Rows vs. columns — same rank?)** Take the three vectors from P2.1:

$$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}, \quad \mathbf{v}_3 = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}$$

(a) You already row-reduced them stacked as **rows** (rank = 2). Now stack them as **columns** and row-reduce. Do you get the same rank?

(b) In one sentence, explain *why* row rank always equals column rank for any matrix.

> [!done] Your Answer
> **P2.7a:**
> Stack v₁, v₂, v₃ as columns → 3×3 matrix A:
> $$A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 2 & -1 & 3 \end{pmatrix}$$
> $R_3 \to R_3 - 2R_1$: row 3 becomes $(0, -1, -1)$
> $R_3 \to R_3 + R_2$: row 3 becomes $(0, 0, 0)$
> Two non-zero rows remain → **rank = 2**. Same as the row-stacked case. ✓
>
> **P2.7b:**
> Row reduction preserves the number of pivots, and each pivot simultaneously witnesses one independent row and one independent column, so both row rank and column rank equal the pivot count.

**P2.8 (Precise language)** Mark each statement as **correct** or **incorrect**. If incorrect, rewrite it precisely.

(a) "Three vectors in $\mathbb{R}^3$ that have rank 2 means one dimension is redundant."

(b) "If $\dim(\text{span}\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}) = 2$, then exactly one vector can be written as a linear combination of the other two."

(c) "A set of vectors is linearly dependent if and only if the matrix formed by these vectors has rank less than the number of vectors."

> [!todo] Your Answer
> P2.8a: <!-- Correct or incorrect? If wrong, rewrite. --> 
> Incorrect.
> If the span of three vectors in R^3 has dimension 2, then one vector is redundant(linearly dependent).
> P2.8b: <!-- Correct or incorrect? If wrong, rewrite. -->
> Incorrect.
> If $\dim(\text{span}\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}) = 2$, then at least one vector can be written as a linear combination of the other two.
> P2.8c: <!-- Correct or incorrect? If wrong, rewrite. -->
> Incorrect
> A set of vectors is linearly dependent if and only if the matrix formed by these vectors has rank less than the number of vectors.

---

### Level 3 — Proof & Reasoning

**P3.1** Prove: If $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ is linearly independent, then so is $\{\mathbf{v}_1, \mathbf{v}_2\}$.

> [!todo] Your Answer
> P3.1: <!-- Write your proof here -->
> Prove it from the definition
> Given: {v1, v2, v3} is linearly independent -> (definition) If we have the equation c1v1 + c2v2 + c3v3 = 0, then we only have a trivial solution where c1 = c2 = c2 = 0
> To prove: {v1, v2} is linearly independent -> The only trivial solution for k1v1 + k2v2 = 0 is k1 = k2 = 0
> Proof: For equation k1v1 + k2v2 = 0, we introduce a new item: 0v3, then we have,
> k1v1 + k2v2 +0v3 = 0
> According to the definition, we have:
> k1 = k2 = 0 -> {v1, v2} is linearly independent

**P3.2** Prove: A set containing the zero vector is always linearly dependent.

> [!todo] Your Answer
> P3.2: <!-- Write your proof here -->

**P3.3** Let $V$ be a vector space of dimension $n$. Prove that any set of $n+1$ vectors must be linearly dependent.

> [!todo] Your Answer
> P3.3: <!-- Write your proof here. Hint: think about the shape of the matrix -->

### Level 4 — Application (Physics & Code)

**P4.1** In a spin-1 system, the three basis states are $|+1\rangle$, $|0\rangle$, $|-1\rangle$. A state is prepared as:

$$|\psi\rangle = \frac{1}{\sqrt{3}}|+1\rangle + \frac{1}{\sqrt{3}}|0\rangle + \frac{1}{\sqrt{3}}|-1\rangle$$

Is $|\psi\rangle$ linearly independent from the basis states? Why does this question not quite make sense, and what's the correct way to phrase it?

> [!todo] Your Answer
> P4.1: <!-- Why is the question ill-formed? What's the correct way to phrase it? -->

**P4.2** *(Coding challenge)* Write a Python function that takes a list of vectors and returns `True` if they are linearly independent. Use NumPy.

<!-- TODO(human): Implement the is_linearly_independent(vectors) function here. Hint: think about what np.linalg.matrix_rank tells you when compared to the number of vectors. -->

> [!tip] Guidance
> Build a matrix from the vectors (as columns), then compare its rank to the number of vectors. If rank equals the number of vectors, they're independent.

**P4.3** *(Detector geometry)* In a TPC, three wire planes measure particle positions. Each plane gives a 1D projection along a direction $\mathbf{d}_i$. For full 2D position reconstruction, you need at least 2 linearly independent projection directions. If the wire directions are $\mathbf{d}_1 = (1, 0)$, $\mathbf{d}_2 = (0, 1)$, $\mathbf{d}_3 = (\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}})$:
- (a) Are any two of these sufficient for reconstruction?
- (b) Why does having all three improve the measurement?

> [!todo] Your Answer
> P4.3a: <!-- Are any two sufficient? Why? -->
> P4.3b: <!-- Why does the third direction help even though it's "redundant"? -->

## QM Connection

The vector space structure is why quantum mechanics works the way it does:
- **Superposition** = linear combinations are valid states
- **Measurement outcomes** = eigenvalues of operators acting on this space
- **Hilbert space** = infinite-dimensional vector space with an inner product (Phase 0.1 topic 8)

---

## Related
- Next: [[Matrix_Operations]]
- Parent: [[Linear_Algebra]]
- Forward: [[Eigenvalues_and_Eigenvectors]], [[Inner_Product_Spaces]]

## Feedback

### Level 1 Review

> [!info] Summary
> Strong conceptual grasp. Main issues are precision of language and one factual slip.

- P1.1: Correct conclusion. Improve rigor by explicitly stating `v2 = 3 v1`, so a non‑trivial linear combination exists.
- P1.2a: Correct. Note that closure under addition actually holds; failure is scalar multiplication with negative scalars (subspace must be closed for all scalars).
- P1.2b: Correct. "Passes origin" is necessary but not sufficient; explicitly cite closure under addition and scalar multiplication.
- P1.2c: Incorrect wording. It **is** a subset of `R^2`, just **not** a subspace (doesn't contain the origin).
- P1.3: Largely correct. Use "linear combination" (not transformation) and state `span = {(x, y, 0) | x, y ∈ R}` explicitly.

### Level 2 Review (P2.1)

> [!info] Summary
> Correct answer, valid arithmetic. Weakness: stops at "dependent" without interpretation.

- P2.1: Correct conclusion and computation.
- **Unnecessary swap**: Original matrix already had good pivots — two ops, no swap needed.
- **No row op labels**: Show every $R_i \to \ldots$ explicitly.
- **Imprecise language**: "Dimension is redundant" — say *vector*, not dimension.
- **Missing dependency**: Should state $\mathbf{v}_3 = 2\mathbf{v}_1 + \mathbf{v}_2$ and verify.
- **Rows vs. columns**: Know why both give the same rank.

> [!warning] Complete P2.4–P2.8 drills before moving to Level 3.

### Level 2 Review (P2.2)

> [!info] Summary
> Dimensional intuition is right; algebraic execution is off.

- **Basis validity**: One proposed vector is not in the subspace. Check $x - 2y + z = 0$ for every basis candidate. Always plug your final basis vectors back into the original equation to verify they actually "live" in that space
- **Perpendicularity**: Not required. Any two independent vectors in $W$ form a basis.
- **Missing parametrization**: Write $x = 2y - z$ first, then express $(x, y, z)$ as a linear combination.
- **Correct form**: $W = \{(2s - t, s, t)\} = s(2,1,0) + t(-1,0,1)$, so $\dim(W)=2$ with basis $\{(2,1,0), (-1,0,1)\}$.
