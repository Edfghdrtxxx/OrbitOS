---
type: learning-session
topic: QM — fast evaluation of the expectation value of position
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Fast expectation value of position (Kahn Sample Exam 1 #99)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn fast expectation value of position (Kahn Sample Exam 1 #99)`.
- Source: Kahn Sample Exam 1, question 99, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6. Part of the learner's marked-question queue (15, 36, 75, 76, 78, 80, 90, 99, 100).
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-99`): Suppose a particle has a normalized wavefunction $\psi(x)$ given by $\psi(x) = \sqrt3(1-x)$ for $0 < x < 1$, and $0$ otherwise. What is the expectation value of the position of this particle?
  - (A) $0$
  - (B) $1$
  - (C) $1/12$
  - (D) $1/4$
  - (E) $1/2$
- Learner's answer: correct, not flagged, 218 s (`pgre-status` attempt log); the exam pace is 170 min / 100 questions, about 102 s per question.
- Prior: expectation value as $\sum_k \lambda_k |c_k|^2$ and $\int \psi^* \hat A \psi$ in [[Progress-context]] ("QM — expansion coefficients and expectation value").

### Turn 1 — 2026-10-22 (learner)

> Then number 99

### Tutor

这题你做对了，但用了 218 s，是考试平均节奏（pace，约 102 s/题）的两倍多。所以这题要练的是**快**，不是概念。

**第一步，不算就先砍选项（estimate before integrating）：**
- 概率密度（probability density）$|\psi|^2 = 3(1-x)^2$ 在 $x=0$ 最大，在 $x=1$ 降到 0，粒子更常待在左边，所以 $\langle x\rangle < \frac12$：排除 (B)、(E)。
- 粒子只在 $0<x<1$，所以 $\langle x\rangle > 0$：排除 (A)。只剩 (C) $\frac1{12}$ 和 (D) $\frac14$。

**第二步，换元（substitution）代替展开：** 令 $u = 1-x$，密度变成 $3u^2$，不用展开 $(1-x)^2$：
$$\langle u\rangle = \int_0^1 u\cdot 3u^2\,du = \tfrac34, \qquad \langle x\rangle = 1 - \langle u\rangle = \tfrac14.$$
一行算完。(C) $\frac1{12}$ 是忘了 $|\psi|^2$ 里的系数 3。

**可复用的规律：** 密度 $\propto u^n$ 在 $[0,1]$ 上时，$\langle u\rangle = \frac{n+1}{n+2}$。$n=2$ 给出 $\frac34$。

检验（不积分）：$\psi(x) = \sqrt{30}\,x(1-x)$，$0<x<1$。$\langle x\rangle$ 是多少？为什么？

### Turn 2 — 2026-10-22 (learner)

> Oh, we can skip this one, to 100

### Tutor

跳过。Turn 1 的速度方法（先估计再换元）留在这里供以后看；检验问题不再追问。

### Turn 3 — 2026-10-22 (learner)

> 你怎么在99题算那么快的？elaborate on how to 换元

### Tutor

要算的是 $\langle x\rangle = \int_0^1 x\cdot 3(1-x)^2\,dx$。

**慢的做法：展开（expand）。** $(1-x)^2 = 1 - 2x + x^2$，乘上 $x$ 得 $x - 2x^2 + x^3$，逐项积分 $\frac12 - \frac23 + \frac14 = \frac1{12}$，再乘 3 得 $\frac14$。三项、分母 2、3、4 通分，容易错，也容易忘了乘 3（这正是选项 (C) $\frac1{12}$）。

**快的做法：换元（substitution, change of variables），令 $u = 1-x$。** 四步：
1. **把被积函数换成 $u$：** $x = 1-u$，$(1-x)^2 = u^2$。
2. **换微元：** $du = -dx$，即 $dx = -du$。
3. **换上下限（limits）：** $x=0 \to u=1$，$x=1 \to u=0$。$dx = -du$ 的负号正好把上下限翻回来：$\int_1^0 (\cdots)(-du) = \int_0^1 (\cdots)\,du$。
4. **积分：**
$$\langle x\rangle = \int_0^1 (1-u)\cdot 3u^2\,du = 3\int_0^1 u^2\,du - 3\int_0^1 u^3\,du = 1 - \tfrac34 = \tfrac14.$$

**为什么快：** 高次的因子 $(1-x)^2$ 变成了单独一个幂 $u^2$，不用展开；低次的因子 $x$ 变成 $1-u$，只有两项。**规则：选 $u$ 让高次因子变成单纯的幂，让平移（shift）落到低次因子上。**

**更快：用概率的语言。** $\langle x\rangle = \langle 1-u\rangle = 1 - \langle u\rangle$。在 $u$ 上，密度（density）是 $3u^2$，已经归一化（$\int_0^1 3u^2\,du = 1$）。对 $[0,1]$ 上的密度 $(n+1)u^n$：
$$\langle u\rangle = \int_0^1 u\cdot(n+1)u^n\,du = \frac{n+1}{n+2}.$$
$n=2$ 给出 $\langle u\rangle = \frac34$，所以 $\langle x\rangle = \frac14$。这一步可以心算。

**什么时候用：** 被积函数含 $(1-x)^n$、$(x-c)^n$ 这类"平移后的高次幂"时，先把它平移到原点。

检验：$\psi(x) = \sqrt5\,(1-x)^2$，$0<x<1$。用上面的方法求 $\langle x\rangle$。

### Turn 4 — 2026-10-22 (learner)

> (handwritten) Let $1-x=u$. $\psi(x)=\sqrt5u^2$ → density $=5u^4$. $\langle u\rangle=\int_0^1 u\cdot5u^4\,du=\frac56$. $\langle x\rangle=1-\langle u\rangle=\frac16$.

### Tutor

对，一步到位：密度 $5u^4$ 已归一化，$\langle u\rangle = \frac{n+1}{n+2} = \frac56$（$n=4$），$\langle x\rangle = \frac16$。换元（substitution）这一招已经会用了。
