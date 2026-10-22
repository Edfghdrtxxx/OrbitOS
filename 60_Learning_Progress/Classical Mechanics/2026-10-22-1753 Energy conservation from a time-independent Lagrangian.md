---
type: learning-session
topic: CM — conservation laws from the Lagrangian (energy, momentum)
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Energy conservation from a time-independent Lagrangian (Kahn Sample Exam 1 #36)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn energy conservation from a time-independent Lagrangian (Kahn Sample Exam 1 #36)`.
- Source: Kahn Sample Exam 1, question 36, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6. Part of the learner's marked-question queue (15, 36, 75, 76, 78, 80, 90, 99, 100).
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-36`): Suppose that a particle in a one-dimensional system has a Lagrangian $L$ with a potential that is constant in time and such that $\frac{\partial L}{\partial t} = 0$, $\frac{\partial L}{\partial x} = 0$. Which of the following must be true?
  I. Energy is conserved.
  II. Linear momentum is conserved.
  III. The potential is nonzero.
  IV. The Euler–Lagrange equations are not satisfied.
  - (A) I only
  - (B) II only
  - (C) I and II
  - (D) I, II, and III
  - (E) I, III, and IV
- Learner's answer: (B) II only, flagged, 99 s. Correct: (C).
- Kahn's solution: III and IV are false; I follows from $\partial L/\partial t = 0$ by a chain-rule derivation with the Euler–Lagrange equation (in the bank entry; not copied here because Turn 1 asks for it); II follows from $\frac{d}{dt}\frac{\partial L}{\partial \dot x} = \frac{\partial L}{\partial x} = 0$.
- Prior: no conservation-law thread in [[Progress-context]].

### Turn 1 — 2026-10-22 (learner)

> 继续36题
> 我知道选项二肯定没问题，3，4肯定错，就是不确定1如何来判断？
>
> 因为我想的是Energy conservation prerequisite 是没有no-conservative force, 但是单从Lagrangian似乎无法判断？

### Tutor

你判断 II 对、III 和 IV 错，都对。你对 I 的担心也有道理：有摩擦时机械能不守恒。关键是：**摩擦没法藏在一个不显含时间的拉格朗日量里**。

- 能写成 $L(x, \dot x)$ 并用 Euler–Lagrange 方程得到运动方程，本身就说明力来自势能。
- 反过来看一个有摩擦的例子：阻尼振子 $m\ddot x + \gamma m\dot x + kx = 0$ 可以由 $L = e^{\gamma t}\left(\frac12 m\dot x^2 - \frac12 kx^2\right)$ 得到。这个 $L$ 显含 $t$，所以 $\partial L/\partial t \neq 0$。能量损失在拉格朗日量里表现为"显含时间"。
- 所以题目给出的 $\partial L/\partial t = 0$，正好排除了摩擦和随时间变化的势。判断规则：$\partial L/\partial t = 0 \Rightarrow$ 能量守恒；$\partial L/\partial x = 0 \Rightarrow$ 动量守恒。这就是 Noether 定理的两个最常考的例子：时间平移不变对应能量，空间平移不变对应动量。

这个规则可以三行证出来。第一步是链式法则：
$$\frac{dL}{dt} = \frac{\partial L}{\partial x}\dot x + \frac{\partial L}{\partial \dot x}\ddot x + \frac{\partial L}{\partial t}.$$

请用 Euler–Lagrange 方程 $\frac{\partial L}{\partial x} = \frac{d}{dt}\frac{\partial L}{\partial \dot x}$ 替换第一项，证明
$$\frac{d}{dt}\left(\dot x\,\frac{\partial L}{\partial \dot x} - L\right) = -\frac{\partial L}{\partial t},$$
再说明当 $L = \frac12 m\dot x^2 - U(x)$ 时，括号里的量是什么。

### Turn 2 — 2026-10-22 (learner)

> It is worth a minimalist flashcard.
> Directly select

### Tutor

Studio 牌组里已有这个主题的卡 `cpgf-1.32`（"When does the Hamiltonian equal $T + U$, and when is it conserved?"），背面已经有 $dH/dt = -\partial L/\partial t$。按 Studio 的规则，我没有新建卡，只在背面加了一句：摩擦藏不进不显含时间的 $L$，阻尼振子需要 $L = e^{\gamma t}\left(\frac12 m\dot x^2 - \frac12 kx^2\right)$，它显含 $t$。问题面没有改。这张卡已加入今天的复习列表（复习卡）。动量那一半在另一张卡 `cpgf-1.30`（$\partial L/\partial q_i = 0 \Rightarrow p_i$ 守恒）里。

Turn 1 末尾的推导问题仍然有效。

### Turn 3 — 2026-10-22 (learner)

> Add this decision rule to the flashcard as well. 我直接memorize了，自己以后推，下一个

### Tutor

`cpgf-1.32` 背面最后加了这条判断规则：$\partial L/\partial t = 0 \Rightarrow$ 能量守恒；$\partial L/\partial x = 0 \Rightarrow$ 动量守恒（Noether：时间平移不变对应能量，空间平移不变对应动量）。测试通过，这张卡仍在今天的列表里。Turn 1 末尾的推导留给你以后自己做；本题到此结束。下一题：#75。
