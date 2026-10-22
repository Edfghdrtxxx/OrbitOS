---
type: learning-progress
topic: "Circular orbit and effective potential"
area: Classical Mechanics
status: active
created: 2026-09-18
tags:
  - physics
  - classical-mechanics
  - gre-physics
  - central-force
  - effective-potential
---
# Circular orbit and effective potential — 1D radial equilibrium

**Why this note exists:** Learner asked for the logical link between a "circular orbit" and setting the derivative of the effective potential to zero, $V'(r) = 0$, based on a Conquering the Physics GRE solution.

## Context

**Source:** Conquering the Physics GRE solution excerpt (screenshot)
**Transcription:**
SOLUTION
**A** – Don't let the complicated-seeming problem statement fool you: this is just an application of the orbit formalism to the central potential $U(r) = \frac{1}{2}kr^2$ for a spring. We're looking for the radius of a circular orbit, so we solve $V'(r) = 0$:
$$\frac{-l^2}{mr^3} + kr = 0 \implies r = (l^2/mk)^{1/4}.$$
We can check that $V''(r) = k + 3l^2/mr^4 > 0$, so this is indeed a stable circular orbit. Incidentally, since all of the answer choices have different units, this would have been a perfect chance to practice using dimensional analysis.

**Visual Layout & Details:**
Text solution block titled "SOLUTION" in brick-red small caps. Bold text "**A** –" indicates Option A is correct. Formula typesetting in standard serif LaTeX. No other markings or highlights.

---

## Turns

### Turn 1 — 2026-09-18 (learner)

> I don't understand the logical connection between "circular orbit" and "the derivation of effective potential V = 0"

### Tutor

The link comes directly from treating the radial motion as an **equivalent 1D problem**.

In a central potential with conserved angular momentum $l$, the radial motion obeys the 1D Newton's second law:
$$m\ddot{r} = -\frac{\mathrm{d}V_{\text{eff}}}{\mathrm{d}r} = -V'(r)$$
where $V(r) = U(r) + \frac{l^2}{2mr^2}$ is the effective potential.

A **circular orbit** means the distance from the center never changes: $r(t) = r_0 = \text{const}$. Therefore, both radial velocity and radial acceleration must vanish for all time:
$$\dot{r} = 0 \quad \text{and} \quad \ddot{r} = 0$$

Plugging $\ddot{r} = 0$ into $m\ddot{r} = -V'(r)$ immediately forces:
$$-V'(r_0) = 0 \implies V'(r_0) = 0$$

Physically, $-V'(r) = 0$ is just the radial force balance: the inward physical force $-U'(r)$ exactly supplies the outward centrifugal pseudo-force $\frac{l^2}{mr^3} = \frac{mv_\theta^2}{r}$ required to keep the particle on a circle. In the 1D energy landscape $V(r)$, the particle sits completely motionless at an equilibrium point.

---

**Question:**

If sitting at an extremum $V'(r_0) = 0$ guarantees $\ddot{r} = 0$, why does the solution also check $V''(r_0) > 0$ — what would physically happen to the circular orbit if $V'(r_0) = 0$ but $V''(r_0) < 0$?

### Turn 2 — 2026-09-18 (learner)

> Record the session in the daily note first.
> If the second order derivative less than 0, then it is a large extremum, which is not stable against any perturbation.

### Tutor

Recorded in today's daily note under `**a1. GRE Physics Prep**` and in `## Log`.

Exactly right: $V''(r_0) < 0$ means $r_0$ is a **local maximum** (a hillcrest in the 1D potential landscape).
- For a small radial displacement $\delta r = r - r_0$, Taylor expansion gives:
  $$m\ddot{\delta r} \approx -V''(r_0)\,\delta r = +|V''(r_0)|\,\delta r$$
- Because the sign is positive, the effective radial force pushes the particle *further away* from equilibrium: a slight nudge outward accelerates it outward ($r \to \infty$), while a nudge inward accelerates it toward the center.
- In contrast, $V''(r_0) > 0$ forms a potential well (a bowl), providing a restoring force $m\ddot{\delta r} \approx -k_{\text{eff}}\,\delta r$ that traps the particle in bounded radial oscillations (epicycles) around $r_0$.

---

**Question:**

In this spring problem, $U(r) = \frac{1}{2}kr^2$ gives $V''(r) = k + \frac{3l^2}{mr^4}$. Since $k, m, r > 0$, this is strictly positive everywhere. Does this mean *every* circular orbit in a spring potential is stable, or can you think of any power-law potential $U(r) \propto r^n$ where circular orbits can become unstable?

### Turn 3 — 2026-09-18 (learner)

> If we introduce gravity, then the motion could be unstable

### Tutor

This is a classic GRE intuition trap! While Newtonian gravity $U(r) = -\frac{GMm}{r}$ curves downward on its own ($U''(r) = -\frac{2GMm}{r^3} < 0$), its circular orbits are actually **strictly stable**:
- The centrifugal barrier $V_{\text{cf}}(r) = \frac{l^2}{2mr^2}$ curves upward: $V_{\text{cf}}''(r) = +\frac{3l^2}{mr^4}$.
- At the circular radius $r_0$, the force balance $V'(r_0) = 0$ requires $\frac{l^2}{mr_0^3} = \frac{GMm}{r_0^2}$.
- Substituting this gives:
  $$V''(r_0) = -\frac{2GMm}{r_0^3} + \frac{3GMm}{r_0^3} = +\frac{GMm}{r_0^3} > 0$$
The $+3$ from the steeper centrifugal barrier ($1/r^4$) always beats the $-2$ from gravity ($1/r^3$), which is why planetary orbits don't spontaneously destabilize.

In general, for an attractive power-law force $F(r) = -C/r^n$ (potential $U \propto -r^{1-n}$), circular orbits are stable **if and only if $n < 3$**. Instability only sets in when the inward force steepens to $n \ge 3$ (like $U \propto -1/r^2$, or General Relativity corrections near a black hole's ISCO).

---

**Question:**

Using this balance, if an inward force steepens to $F(r) = -C/r^4$ ($n=4$), what would the sign of $V''(r_0)$ be when you substitute the equilibrium condition $C/r_0^4 = l^2/(mr_0^3)$?

### Turn 4 — 2026-09-18 (learner)

> negative

### Tutor

Spot on:
$$V''(r_0) = -\frac{4C}{r_0^5} + \frac{3l^2}{mr_0^4} = -\frac{4C}{r_0^5} + \frac{3C}{r_0^5} = -\frac{C}{r_0^5} < 0$$
Because the inward attractive force steepens faster than the centrifugal barrier ($1/r^4$ vs $1/r^3$), its derivative has a larger negative magnitude ($-4$) than the centrifugal barrier's positive restore ($+3$), turning the circular orbit into an unstable peak.

#### Summary of the core mechanism:
1. **Circular orbit condition:** A circular orbit requires constant radius $r(t) = r_0$, meaning radial velocity and acceleration vanish identically ($\dot{r} = 0, \ddot{r} = 0$). In the 1D effective equation of motion $m\ddot{r} = -V'(r)$, this forces **$V'(r_0) = 0$** (exact balance between physical central force and centrifugal pseudo-force).
2. **Radial stability condition:** An orbit is stable against small radial perturbations if and only if it sits in a potential bowl, **$V''(r_0) > 0$**.
3. **Power-law criterion:** For an attractive central force $F(r) = -C/r^n$, circular orbits are stable $\iff n < 3$. Standard Newtonian gravity ($n = 2$) and harmonic spring potentials ($n = -1$) are strictly stable, while steeper forces ($n \ge 3$) are unstable.

## Context — Kahn Sample Exam 1 #9 (2026-10-22)

- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn circular-orbit radius in U=-k/r (Kahn Sample Exam 1 #9)`.
- Source: Kahn Sample Exam 1, question 9, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6.
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-9`): A particle with mass $m$ and angular momentum $l$ moves in a constant central potential $U(r) = -k/r$, with $k > 0$. What, if any, is the radius of its stable circular orbit?
  - (A) The particle has no allowed stable circular orbit.
  - (B) $\dfrac{l^2}{mk}$
  - (C) $\dfrac{l^2}{2mk}$
  - (D) $\dfrac{2l^2}{mk}$
  - (E) $\dfrac{2l^2}{3mk}$
- Learner's answer: (C), flagged (by the learner's flag rule, a guess), 97 s on screen. Correct: (B). No reason stated yet for (C).
- Kahn's solution: $\dfrac{dV_{\text{eff}}}{dr} = -\dfrac{l^2}{mr^3} + \dfrac{k}{r^2} = 0 \Rightarrow r = \dfrac{l^2}{mk}$; stability from the shape of $V_{\text{eff}}$: $+\infty$ at $r \to 0$, approaches 0 from below as $r \to \infty$, one critical point, so it is a minimum.
- Studio's note on (C): "Off by a factor of 2, from mishandling $\frac{d}{dr}\frac{1}{r^2}=-\frac{2}{r^3}$ (dropping the 2) when differentiating the centrifugal term."

### Turn 5 — 2026-10-22 (learner)

> Next: 9

### Tutor

这道题的概念你在这条笔记里已经掌握了：圆轨道就是 $V'(r_0) = 0$，它的物理意义是吸引力正好等于离心项 $\dfrac{l^2}{mr^3}$（Turn 1）；$1/r$ 势的圆轨道一定稳定（Turn 3–4 的 $n < 3$），所以 (A) 可以直接排除。剩下的四个选项只差一个数字因子，这正是量纲检查看不出来的地方。(C) $\dfrac{l^2}{2mk}$ 是对离心项 $\dfrac{l^2}{2mr^2}$ 求导时漏掉指数 2 的结果；我不知道你考试时是不是这样算的。

有一种写法根本不用对 $V_{\text{eff}}$ 求导：直接写圆周运动的力平衡 $\dfrac{mv^2}{r} = \dfrac{k}{r^2}$，再用 $l = mvr$ 消去 $v$。还有一个现成的检查：氢原子的 Bohr 模型就是这道题，其中 $k = \dfrac{e^2}{4\pi\epsilon_0}$，$l = \hbar$。

请用 $\dfrac{mv^2}{r} = \dfrac{k}{r^2}$ 和 $l = mvr$ 求出 $r$；然后代入 $k = \dfrac{e^2}{4\pi\epsilon_0}$、$l = \hbar$，看看结果是不是你熟悉的 Bohr 半径 $a_0$。

### Turn 6 — 2026-10-22 (learner)

> （针对 Context 中 Kahn 解法那一行）我对Kahn的解法有点疑问，我自己推导的时候Lagrangian后面有一个-U, 然后所以出来一个k/r, derive之后是 -k/rr
>
> （针对 Turn 5 第一段）我还是不太理解为什么圆轨道就是V prime = 0. 如果是elliptic呢？我记得原先有一个E total与0关系对应轨道形状的flashcard，好像可以在那里supplement？

### Tutor

**符号**：你的推导是对的，和 Kahn 是同一个方程，只差一个整体负号。拉格朗日量 $L = \frac12 m(\dot r^2 + r^2\dot\theta^2) + \frac{k}{r}$（$-U = +\frac{k}{r}$），径向方程是
$$m\ddot r = \frac{\partial L}{\partial r} = mr\dot\theta^2 - \frac{k}{r^2} = \frac{l^2}{mr^3} - \frac{k}{r^2}.$$
你得到的 $-\frac{k}{r^2}$ 是径向**力**：负号表示指向中心。Kahn 写的是 $V_{\text{eff}}'$，而 $m\ddot r = -V_{\text{eff}}'$，所以他的每一项都和你的差一个负号：$V_{\text{eff}}' = -\frac{l^2}{mr^3} + \frac{k}{r^2}$。令 $\ddot r = 0$ 时，两种写法给出同一个等式 $\frac{l^2}{mr^3} = \frac{k}{r^2}$。

**为什么圆轨道是 $V'_{\text{eff}} = 0$，椭圆呢**：把径向运动看成一维运动，$E = \frac12 m\dot r^2 + V_{\text{eff}}(r)$。$\frac12 m\dot r^2 \ge 0$，所以粒子只能待在 $V_{\text{eff}}(r) \le E$ 的范围里：

![[veff-orbit-shapes.excalidraw|1000]]

- **椭圆**：$E$ 高于谷底。$r$ 在两个转折点 $r_{\min}$、$r_{\max}$（$E = V_{\text{eff}}$ 的两个交点，即近点和远点）之间来回。粒子经过谷底 $r_0$ 时 $V_{\text{eff}}' = 0$，但这时 $\dot r \neq 0$，所以它不会停在那里。
- **圆**：$E$ 正好等于谷底 $V_{\min}$。这时 $\frac12 m\dot r^2 = E - V_{\text{eff}}(r)$ 只在 $r_0$ 处为 0、在其他地方为负，所以粒子只能在 $r_0$，且 $\dot r = 0$；要一直停在那里还需要 $\ddot r = 0$，也就是 $V_{\text{eff}}'(r_0) = 0$。

所以圆轨道需要两个条件同时成立：$V_{\text{eff}}'(r_0) = 0$（径向不受力），并且 $\dot r = 0$（$E = V_{\min}$）。

**卡片**：你记得的那张是 `cpgf-1.38`（"Attractive potential $U = -k/r$ ... how does the total energy $E$ fix the orbit shape?"）。我在它的问题里加了"为什么圆轨道需要 $V_{\text{eff}}'(r_0) = 0$，半径是多少"，答案里加了上面两条：圆轨道的 $\dot r = 0$、$\ddot r = 0$ 推出力平衡和 $r_0 = \frac{l^2}{mk}$；椭圆经过 $r_0$ 时 $\dot r \neq 0$。Studio 页面刷新后可见。按你随后的要求（"别忘了directly select"），这张卡已加入今天的复习列表（复习卡）。

问题：椭圆轨道上的粒子经过 $r_0$ 时，径向受力为 0。用上面的图说明，它为什么不会停在 $r_0$ 变成圆轨道？

### Turn 7 — 2026-10-22 (learner)

> 椭圆轨道上的粒子经过 𝑟0 时，径向受力为 0。但是粒子的E0高于Veff，用一维运动的视角来看仍然有动能从谷底往上走，不会停在 𝑟0 变成圆轨道

### Tutor

对。在 $r_0$ 处 $E - V_{\text{eff}}(r_0) = \frac12 m\dot r^2 > 0$，所以 $\dot r \neq 0$；受力为 0 只说明 $\ddot r = 0$，也就是径向速度在这一刻不变，不说明速度为 0。粒子带着这个径向速度继续往上走，直到碰到转折点 $r_{\max}$（或 $r_{\min}$）才掉头。打一个类比：单摆经过最低点时回复力为 0，但它正是在那里跑得最快。

所以"圆轨道"需要两个条件：$V_{\text{eff}}'(r_0) = 0$ 和 $E = V_{\min}$。椭圆只满足第一个条件的那一瞬间。

现在回到第 9 题本身，算出半径。请用力平衡 $\dfrac{mv^2}{r} = \dfrac{k}{r^2}$ 和 $l = mvr$ 消去 $v$ 求出 $r$；然后代入 $k = \dfrac{e^2}{4\pi\epsilon_0}$、$l = \hbar$，看看结果是不是 Bohr 半径 $a_0$。

### Turn 8 — 2026-10-22 (learner)

> （手写照片，转写如下）
> $\dfrac{mv^2}{r} = \dfrac{k}{r^2}$，$v = \dfrac{l}{mr}$
> $\dfrac{mv^2}{r} = \dfrac{m}{r}\cdot\dfrac{l^2}{m^2r^2} = \dfrac{l^2}{mr^3}$
> $\dfrac{l^2}{mr^3} = \dfrac{k}{r^2}$
> $r = \dfrac{l^2}{mk}$
> when $k = \dfrac{e^2}{4\pi\epsilon_0}$, $l = \hbar$
> $r = \dfrac{4\pi\epsilon_0\,\hbar^2}{me^2}$
>
> Add this excalidraw figure to our flashcard.

Image notes: one handwritten page, black ink on white paper; in line 2 the first $r$ in the denominator is written over another letter; no other marks.

### Tutor

全对，而且没有用任何提示。$r = \dfrac{l^2}{mk}$ 就是选项 (B)；代入后的 $\dfrac{4\pi\epsilon_0\hbar^2}{me^2}$ 正是 Bohr 半径 $a_0$。这条路线没有对 $\dfrac{l^2}{2mr^2}$ 求导，所以不会出现 (C) 那种漏掉因子 2 的错误。

第 9 题到这里完成。总结：

- 圆轨道 = 径向不受力（$V_{\text{eff}}'(r_0) = 0$）且没有径向速度（$E = V_{\min}$）；椭圆经过 $r_0$ 时仍有 $\frac12 m\dot r^2 > 0$。
- 求半径最快的写法是力平衡 $\dfrac{mv^2}{r} = \dfrac{k}{r^2}$ 加 $l = mvr$，得 $r_0 = \dfrac{l^2}{mk}$。
- 检查：$l = \hbar$、$k = \dfrac{e^2}{4\pi\epsilon_0}$ 时必须得到 Bohr 半径，没有多余的因子 2。
- $1/r$ 势的圆轨道一定稳定，所以"没有稳定圆轨道"的选项可以直接排除。

卡片：上面的 Excalidraw 图已导出为 `/Users/Reid Hu/Physics GRE/content/book-assets/veff-orbit-shapes.svg`，挂在 Studio 卡片 `cpgf-1.38` 的 note 里。note 只在翻开答案后显示，所以图不会出现在卡片正面，也不会进入 Match、Quiz 的选项。已在 Studio 里确认图片能加载。
