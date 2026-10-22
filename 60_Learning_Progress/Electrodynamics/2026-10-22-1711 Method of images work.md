---
type: learning-session
topic: E&M — method of images, work and energy near a grounded conducting plane
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Method of images: work to bring a charge to a conducting plane (Kahn Sample Exam 1 #15)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn work to bring a charge to a grounded plane, method of images (Kahn Sample Exam 1 #15)`.
- Source: Kahn Sample Exam 1, question 15, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6.
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-15`): How much work is required to move a point charge $q$ from infinity to a distance $d$ above an infinite conducting plane?
  - (A) $-\dfrac{1}{4\pi\epsilon_0}\dfrac{q^2}{4d}$
  - (B) $-\dfrac{1}{4\pi\epsilon_0}\dfrac{q^2}{2d}$
  - (C) $\dfrac{1}{4\pi\epsilon_0}\dfrac{q^2}{4d}$
  - (D) $\dfrac{1}{4\pi\epsilon_0}\dfrac{q^2}{2d}$
  - (E) $0$
- Learner's answer: (A), correct, but flagged and tagged `guessed` (a lucky guess), 146 s on screen. No reason stated yet.
- Kahn's solution: image $-q$ at distance $d$ below the plane; the two-charge energy is $-\frac{1}{4\pi\epsilon_0}\frac{q^2}{2d}$; the charge-plus-plane energy is half of it because $U = \int \frac{\epsilon_0}{2}E^2\,dV$ and $E = 0$ below the plane, so $W = -\frac{1}{4\pi\epsilon_0}\frac{q^2}{4d}$. Kahn adds: "You could also compute this by integrating the force on the point charge, as discussed in Section 2.1.7."
- Studio's notes on the wrong options: (B) is the full two-charge energy, missing the $\frac12$; (C) has the wrong sign (the image attracts $q$, so the work is negative); (D) has both errors; (E) ignores the attraction.
- Related miss in the same mock: #90 (energy change when a shell around a charge is grounded), where the picked option was off by the $\frac12$ in $\frac{\epsilon_0}{2}E^2$ ([[Mock-Review-Oct18]] section 6.4).
- Prior: no method-of-images thread in [[Progress-context]]; an image-charge length slip ($r = 2d$) is on record in [[2026-10-04-1801 Sanity checks]].

### Turn 1 — 2026-10-22 (learner)

> Next: 15

### Tutor

这道题你选对了，但标记为猜测，所以要弄清的是 (A) 和 (B) 之间那个 $\frac12$ 从哪里来。Kahn 的解法用能量：镜像电荷 $-q$ 在平面下方 $d$ 处，两个点电荷的相互作用能是 $-\frac{1}{4\pi\epsilon_0}\frac{q^2}{2d}$，然后说"真实情况的能量是它的一半"。这个"一半"是最容易丢的一步，同一次模考的第 90 题（壳接地后的能量变化）丢的也是 $\frac12$。

先用一个不需要"一半"技巧的方法：直接对力积分。$q$ 在平面上方高度 $z$ 处时，它受到的力和镜像电荷 $-q$（在平面下方 $z$ 处）对它的力完全一样。

请写出 $q$ 在高度 $z$ 时受到的力的大小和方向，然后算出把 $q$ 从 $z = \infty$ 缓慢移到 $z = d$ 时外力做的功。

### Turn 2 — 2026-10-22 (learner)

> 这个我有点糊，你讲一下如何理解记忆，从无穷远处移动就是相对于0势能点的功，此后的逻辑链条是什么？
>
> 刚好90题也是标记的一题，可以一起讲
> 我把后面marked都list
> 15，36，75，76，78，80，90，99，100
> 标记的原因就是这个1/2 的系数不确定如何去理解

#### Context added — Kahn Sample Exam 1 #90

- Question (verbatim, id `cpg-x1-90`, with a figure of a charged ball inside a thin shell): Consider a charge configuration consisting of a ball of charge $Q$ surrounded by a thin conducting shell of radius $a$. The conductor initially has no net charge, but is then connected to ground (the potential at infinity). What is the change in energy of the configuration?
  - (A) $-\dfrac{Q^2}{4\pi\epsilon_0 a}$
  - (B) $\dfrac{Q^2}{4\pi\epsilon_0 a}$
  - (C) $\dfrac{Q^2}{8\pi^2\epsilon_0 a^2}$
  - (D) $-\dfrac{Q^2}{8\pi\epsilon_0 a}$
  - (E) $\dfrac{Q^2}{8\pi\epsilon_0 a}$
- Learner's answer: (A), flagged, 111 s. Correct: (D). Learner's stated reason for flagging #15 and #90: unsure how to understand the factor $\frac12$.
- Kahn's solution: only the field outside $r = a$ changes; before grounding $U = \frac{\epsilon_0}{2}\int_a^\infty E^2\,4\pi r^2\,dr = \frac{Q^2}{8\pi\epsilon_0 a}$; after grounding the field outside is zero, so $\Delta U = -\frac{Q^2}{8\pi\epsilon_0 a}$.
- Marked-question queue from the learner (Kahn Sample Exam 1): 15, 36, 75, 76, 78, 80, 90, 99, 100. Topics from the Studio bank: #36 symmetries and conservation laws; #75 addition of spin, symmetric states; #76 p-n junction; #78 Poisson statistics, confidence limit; #80 neutrino oscillations; #99 expectation value of position; #100 rigid rotor energy levels.

### Tutor

先把逻辑链写出来，一共四步。

1. **功 = 势能的变化。** "缓慢移动"表示动能不变，所以外力做的功全部变成势能：$W_{\text{外}} = U(d) - U(\infty)$。规定 $U(\infty) = 0$，所以 $W_{\text{外}} = U(d)$。你说的"相对于 0 势能点的功"就是这一步。
2. **$q$ 受的力用镜像电荷算。** $q$ 在高度 $z$ 时，平面上的感应电荷对它的力，等于平面下方 $z$ 处一个 $-q$ 对它的力。两者相距 $2z$：
$$F(z) = \frac{1}{4\pi\epsilon_0}\frac{q^2}{(2z)^2} = \frac{1}{4\pi\epsilon_0}\frac{q^2}{4z^2},\quad \text{指向平面（吸引）}.$$
3. **外力的方向。** 要让 $q$ 缓慢下降，你得向上拉住它，外力向上，而位移向下，所以你做负功：
$$W_{\text{外}} = \int_{\infty}^{d} F(z)\,dz = -\int_d^{\infty} \frac{1}{4\pi\epsilon_0}\frac{q^2}{4z^2}\,dz = -\frac{1}{4\pi\epsilon_0}\frac{q^2}{4d}.$$
   （外力沿 $+z$，大小 $F(z)$；积分从 $\infty$ 到 $d$，$dz < 0$，所以结果为负。）
   也就是：$q$ 被吸进来，电场替你做了正功，你做的功是负的。
4. **结果就是 (A)。** 这条路没有出现任何"取一半"。

**为什么"两电荷能量"要取一半。** 如果把 $-q$ 当成真电荷，两电荷的势能是 $U_{\text{pair}} = -\frac{1}{4\pi\epsilon_0}\frac{q^2}{2z}$。但镜像电荷不是你搬过来的：你只移动 $q$，镜像自动跟着动。$q$ 下降 $dz$ 时，两者的距离 $2z$ 减少 $2\,dz$，所以 $U_{\text{pair}}$ 的变化是你实际做功的 2 倍。换成场的说法：真实情况下只有平面上方有电场，平面下方（导体内）$E = 0$；"两电荷"图像把下半空间的场也算了进去，而上下两半对称，所以真实能量是 $U_{\text{pair}}$ 的一半。记法：**力用完整的镜像力，能量只取一半。**

**第 90 题是同一个 $\frac12$。** 接地前，壳的外表面带 $+Q$，壳外的电场和"半径 $a$、带电 $Q$ 的球壳"完全一样；接地后这部分电荷流走，壳外电场消失，能量减少的就是这部分场能。你选的 (A) 是 $-\frac{Q^2}{4\pi\epsilon_0 a}$，也就是 $-QV(a)$，比答案多了一倍。带电体的能量是 $\frac12 QV$，不是 $QV$：电荷是一点一点加上去的，先加的那部分电荷是在较低的电势下放上去的，平均下来只有最终电势的一半。

请用 $U = \frac12 QV$ 算出"半径 $a$、带电 $Q$ 的球壳"的能量，确认它等于 Kahn 用 $\int \frac{\epsilon_0}{2}E^2\,dV$ 算出的 $\frac{Q^2}{8\pi\epsilon_0 a}$。

### Turn 3 — 2026-10-22 (learner)

> （针对 Turn 2 中第 90 题那一段）等会，connected to the ground不是瞬间就把charge导走了吗？I am confused
>
> V = Q/(4πε_0R), U = 1/2 QV = Q^2/(8πε_0R)

### Tutor

你的计算对：$V = \frac{Q}{4\pi\epsilon_0 a}$，$U = \frac12 QV = \frac{Q^2}{8\pi\epsilon_0 a}$，和 Kahn 用场能积分得到的一样。

你的疑问指出了我上一轮说法里不清楚的地方。"电荷一点一点加上去"不是在描述接地的过程，而是在**计算接地前存了多少能量**。能量只由状态决定：接地前的状态存有 $\frac{Q^2}{8\pi\epsilon_0 a}$（壳外的场能），接地后的状态壳外没有场，存 0。不管电荷是瞬间流走还是慢慢流走，能量变化都是 $\Delta U = -\frac{Q^2}{8\pi\epsilon_0 a}$。快慢只决定这部分能量去了哪里：瞬间接地时，它变成导线里的热和电磁辐射。

如果直接看流走的过程，$\frac12$ 也会出现：外表面的电荷流走时，壳的电势跟着下降，$V = \frac{q_{\text{剩}}}{4\pi\epsilon_0 a}$。第一份电荷从电势 $V$ 降到 0，最后一份电荷离开时壳已经接近 0 电势。平均每份电荷只"掉下"$\frac{V}{2}$，所以释放的能量是 $\frac12 QV$，不是 $QV$。这和充电时的论证是同一件事反过来走。

请用同样的想法回答：一个电容为 $C$ 的电容器，带电 $Q$、电压 $V$，用一根导线把两极板直接短接，瞬间放电。导线里产生的热是多少？用 $Q$ 和 $C$ 表示。

### Turn 4 — 2026-10-22 (learner)

> 1/2 Q square over C

### Tutor

对：$\frac{Q^2}{2C} = \frac12 QV$。放电再快，热也等于电容器存的能量；不是 $QV$，因为放电过程中电压从 $V$ 降到 0。

第 15 题和第 90 题到这里完成。总结：

- **功的逻辑链**：缓慢移动 $\Rightarrow$ $W_{\text{外}} = U_{\text{末}} - U_{\text{初}}$，$U(\infty) = 0$；力用完整的镜像力 $\frac{1}{4\pi\epsilon_0}\frac{q^2}{(2z)^2}$，被吸引时外力做负功。
- **镜像题的能量取一半**：镜像电荷跟着 $q$ 动，两电荷距离的变化是 $q$ 位移的 2 倍；场只存在于导体一侧。力取完整，能量取一半。
- **带电导体的能量是 $\frac12 QV$**：充电时电势从 0 升到 $V$，放电时从 $V$ 降到 0，平均只有一半。
- **能量只看状态**：接地或短接再快，$\Delta U$ 不变；快慢只决定能量变成热还是辐射。

按你的标记清单，下一题是第 36 题（对称性与守恒律）。要继续吗？
