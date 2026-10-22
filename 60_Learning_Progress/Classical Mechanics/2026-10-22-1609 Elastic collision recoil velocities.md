---
type: learning-session
topic: CM — 1D elastic collision, target at rest
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Elastic collision recoil velocities (Kahn Sample Exam 1 #2)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn elastic collision recoil velocities (Kahn Sample Exam 1 #2)`.
- Source: Kahn Sample Exam 1, question 2, sat in the Prep Studio mock room 2026-10-22 (Studio record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6.
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-2`): A block of mass $m$ moving with velocity $v$ collides with a heavier block of mass $4m$, initially at rest. If the collision is perfectly elastic, what is the velocity of the heavier block after the collision?
  - (A) $4v$
  - (B) $\frac14 v$
  - (C) $v$
  - (D) $\frac52 v$
  - (E) $\frac25 v$
- Learner's answer: (B) $\frac14 v$, flagged (by the learner's flag rule, a guess), 94 s on screen. Correct: (E) $\frac25 v$. No reason stated yet for (B).
- Kahn's solution (book line "2. E"): momentum $v = 4v_1 + v_2$ and energy $\frac12 v^2 = \frac12\cdot 4v_1^2 + \frac12 v_2^2$, substitute, get $v_2 = -\frac32 v_1$, then $v_1 = \frac25 v$. Kahn adds: "If you find yourself getting bogged down in numerical factors, this is a good example of a problem to skip and save for later."
- Kahn §1.4.1 Linear Collisions: "Exhaust all limiting cases and dimensional analysis arguments before doing algebra."
- Kahn §9.1 Derive, Don't Memorize: recoil velocities in 1D elastic collisions with one mass at rest are a **Class 2** formula — memorize the derivation steps, not the formula.
- Prior: no collision thread in [[Progress-context]]. Related: [[2026-10-04-1801 Sanity checks]] (a units check cannot catch a lost pure number).

### Turn 1 — 2026-10-22 (learner)

> 先帮我看看错题吧，有几个在做的时候我觉得比较需要关键理解的题目， 你看一遍corpus然后来教我。
> 第一个是第二题，似乎直接记住结论更好？

### Tutor

关于"直接记结论"：Kahn 在 §9.1 "Derive, Don't Memorize" 里正好拿这一类题举例，把"一维弹性碰撞、一方静止时的反冲速度"归为 Class 2：记推导步骤，不记公式本身。我的建议是记一条比公式更短的事实：**弹性碰撞中，两物体的相对速度大小不变、方向反过来**，即 $v_2' - v_1' = v_1 - v_2$。它和动量守恒都是一次方程，两行就能解出结果，不用像 Kahn 的官方解析那样解能量的二次方程。官方解析里的平方展开，就是考场上容易卡住、算错因子的地方。

不过这道题比解方程更快的方法是不算。重块的动能不可能超过入射动能：$\frac12(4m)v_1'^2 \le \frac12 mv^2$，所以 $v_1' \le \frac12 v$。这一句就排除了 (A) $4v$、(C) $v$、(D) $\frac52 v$，只剩 (B) $\frac14 v$ 和 (E) $\frac25 v$。

请你检查 (B)：如果重块最后的速度是 $\frac14 v$，由动量守恒，轻块最后的速度是多少？这时两块的总动能还等于 $\frac12 mv^2$ 吗？

### Turn 2 — 2026-10-22 (learner)

> 轻的最后为0 velocity
> 最后kinetic energy 为1/8 mv^2，能量不守恒

### Tutor

对。$mv = 4m\cdot\frac14 v + m v_1'$ 给出 $v_1' = 0$；总动能 $\frac12(4m)\left(\frac{v}{4}\right)^2 = \frac18 mv^2$，比入射的 $\frac12 mv^2$ 少了 $\frac34$，所以 (B) 是非弹性碰撞，不可能，答案是 (E)。(B) 描述的是"入射块停下、把动量全部交出去"，这只在两块**质量相等**时发生：等质量的弹性碰撞中两块交换速度。这一条可以作为检查答案的极限情形记住。

现在练一次不靠选项的做法，这样题目换成 $m$ 撞 $3m$、或者改问轻块的速度时也能用。两条都是一次方程：

- 动量守恒：$mv = mv_1' + 4m\,v_2'$
- 相对速度反转（弹性碰撞）：$v_2' - v_1' = v$

请从这两条解出 $v_2'$（重块）和 $v_1'$（轻块），并说出轻块碰撞后往哪个方向运动。

### Turn 3 — 2026-10-22 (learner)

> 分别为1/2 和 -1/2，light one向反方向移动。
> Create a new flashcard for the velocity relation and directly select for me.

### Tutor

方向对：轻块碰撞后向反方向运动。但两个数值不对。你的答案满足相对速度那一条：$\frac12 v - \left(-\frac12 v\right) = v$。它不满足动量守恒：$m\left(-\frac12 v\right) + 4m\left(\frac12 v\right) = \frac32 mv$，而碰撞前的动量是 $mv$。另外，前一步你已经确定重块是 $\frac25 v$，$\frac12 v$ 和它也对不上。我看不到你这一步是怎么写的，所以不猜原因；规则是：解完以后把两个答案分别代回**两条**方程检查。

做法：先从相对速度那一条写出 $v_1' = v_2' - v$，再把它代入动量方程 $mv = mv_1' + 4m\,v_2'$。只剩一个未知数 $v_2'$。

卡片：Studio 已经有一张同主题的卡 `supp-newton-momentum`（"Collisions with a target at rest (supplemental)"）。Studio 的规则是新卡先并入已有的同主题卡（`/Users/Reid Hu/Physics GRE/AGENTS.md` 第 64 行），所以我没有另建新卡，而是把这张卡改为同时问"弹性碰撞中相对速度怎样变化"，答案里加上 $v_2' - v_1' = -(v_2 - v_1)$、两条一次方程的解法，以及 $m_2 \gg m_1$、$m_2 \ll m_1$ 两个极限。这张卡已加入你今天的复习列表（今天的新卡第 10 张）。

请把 $v_1' = v_2' - v$ 代入动量方程，解出 $v_2'$ 和 $v_1'$，再代回两条方程检查。

### Turn 4 — 2026-10-22 (learner)

> 我是按照这个算的"这样题目换成 𝑚 撞 3𝑚"

### Tutor

你是对的，上一轮是我看错了。你算的是我提到的 $m$ 撞 $3m$：动量 $v = v_1' + 3v_2'$，相对速度 $v_2' - v_1' = v$，解得 $v_2' = \frac12 v$，$v_1' = -\frac12 v$。代回检查两条都成立：$-\frac12 + 3\cdot\frac12 = 1$，$\frac12 - \left(-\frac12\right) = 1$。它也和通式一致：$v_2' = \frac{2m_1}{m_1 + m_2}v = \frac{2}{4}v$。上一轮记进 Trap-Log 的那一行是我的错误，已经删掉。

你没有提示就用两条一次方程解出了一个新的质量比，方向也对，这道题的方法已经掌握。总结三点：

- 弹性碰撞、一方静止：相对速度反转 $v_2' - v_1' = v$，加上动量守恒，两条一次方程，不用解平方。
- 先筛选项：被撞的块动能不能超过入射动能；"入射块停下"只在两块质量相等时成立。
- 极限检查：等质量交换速度；靶很重时入射块以 $-v$ 弹回；靶很轻时靶获得 $2v$。

Studio 卡片 `supp-newton-momentum` 已在今天的复习列表里。下一道你想看的是哪一题？
