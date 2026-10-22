---
type: learning-session
topic: QM — rigid rotor energy levels and the moment of inertia of a dumbbell
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Rigid rotor moment of inertia (Kahn Sample Exam 1 #100)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn rigid rotor levels and the dumbbell moment of inertia (Kahn Sample Exam 1 #100)`.
- Source: Kahn Sample Exam 1, question 100, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6. Last item of the learner's marked-question queue (15, 36, 75, 76, 78, 80, 90, 99, 100).
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-100`): What are the energy levels of a quantized system consisting of a massless rigid rod of length $a$ connecting two masses $m$, where $n$ is a non-negative integer?
  - (A) $\frac{\hbar^2 n(n+1)}{ma^2}$
  - (B) $\frac{\hbar^2 n(n+1)}{2ma^2}$
  - (C) $\frac{\hbar^2 n}{2ma^2}$
  - (D) $\frac{\hbar^2 n}{ma^2}$
  - (E) $\frac{\hbar^2 (n+1)}{ma^2}$
- Learner's answer: (B), flagged, 139 s (`pgre-status` attempt log). Correct: (A).
- Prior: Studio card `supp-rigid-rotor` already states $E_J = \hbar^2 J(J+1)/(2I)$ and $I = \mu r_e^2$. Moment of inertia appears in [[Progress-context]] under "CM — rolling without slipping".

### Turn 1 — 2026-10-22 (learner)

> Oh, we can skip this one, to 100

### Tutor

~~你选对了 $n(n+1)$ 这一半，只差在转动惯量（moment of inertia）$I$ 上。~~（错：这题是猜的，见 Turn 2）

**两步：**
1. **能级公式：** 经典转动动能 $T = \frac{L^2}{2I}$；量子化后 $L^2 = \hbar^2 n(n+1)$，所以 $E_n = \frac{\hbar^2 n(n+1)}{2I}$。(C)(D)(E) 的 $n$、$n+1$ 都不是 $L^2$ 的本征值（eigenvalue）。
2. **转动惯量：** 杆绕质心（center of mass）转，质心在杆的正中间。每个质量离转轴 $\frac a2$，不是 $a$：
$$I = m\left(\tfrac a2\right)^2 + m\left(\tfrac a2\right)^2 = \tfrac12 ma^2 .$$
代入：$E_n = \frac{\hbar^2 n(n+1)}{2\cdot\frac12 ma^2} = \frac{\hbar^2 n(n+1)}{ma^2}$，即 (A)。

**(B) 从哪来：** (B) 等于用了 $I = ma^2$，相当于把转轴放在一端、或者把每个质量的距离当成 $a$。

**通用写法（双原子分子 diatomic molecule 也用它）：** 用约化质量（reduced mass）$\mu = \frac{m_1 m_2}{m_1 + m_2}$，$I = \mu a^2$。两个质量相等时 $\mu = \frac m2$，$I = \frac12 ma^2$，和上面一样。Studio 的卡 `supp-rigid-rotor` 里已经有 $I = \mu r_e^2$。

检验：如果两端质量是 $m$ 和 $3m$，杆长仍是 $a$，$I$ 是多少？

### Turn 2 — 2026-10-22 (learner)

> (quoting "You got the $n(n+1)$ half right") No I haven't. New flashcard + direct selection
>
> I guessed this problem

### Tutor

更正：这题是猜的，选 (B) 不能说明你知道 $n(n+1)$ 或 $I$ 的任何一半。Turn 1 那句已划掉。两步都要记：$L^2$ 的本征值是 $\hbar^2 n(n+1)$；哑铃（dumbbell）绕质心转，每个质量离轴 $\frac a2$，$I = \frac12 ma^2$。

新建了卡 `supp-dumbbell-rotor`：正面问能级和每个因子的来源，背面写 $E_n = \frac{\hbar^2 n(n+1)}{ma^2}$、$T = L^2/(2I)$、$I = 2m(a/2)^2$（不是 $ma^2$）和 $I = \mu a^2$。它和列表卡 `supp-rigid-rotor` 有重叠；那张已有 4 条，测试规定列表卡最多 4 条，加不进去。新卡已加入今天的列表。

Turn 1 的检验问题仍然有效：两端质量是 $m$ 和 $3m$，杆长 $a$，$I$ 是多少？

### Turn 3 — 2026-10-22 (learner)

> ma^2

### Tutor

不对，正确是 $\frac34 ma^2$。你的 $ma^2$ 正好等于把转轴放在杆的中点：$m\left(\frac a2\right)^2 + 3m\left(\frac a2\right)^2 = ma^2$。

问题在转轴（rotation axis）的位置：自由转动的物体绕**质心**（center of mass）转，而质心偏向重的一端。两个质量相等时质心刚好在中点，所以 #100 用 $\frac a2$ 没错；质量不等时就不能用中点了。

- 质心：离 $m$ 的距离是 $\frac{3m\cdot a}{m+3m} = \frac34 a$，离 $3m$ 的距离是 $\frac14 a$。
- $I = m\left(\frac34 a\right)^2 + 3m\left(\frac14 a\right)^2 = \frac{9}{16}ma^2 + \frac{3}{16}ma^2 = \frac34 ma^2$。
- 用约化质量（reduced mass）一步得到：$\mu = \frac{m\cdot 3m}{4m} = \frac34 m$，$I = \mu a^2 = \frac34 ma^2$。约化质量的好处就是不用先找质心。

检验：两端质量 $m$ 和 $m/2$，杆长 $a$，用约化质量写出 $I$。

### Turn 4 — 2026-10-22 (learner)

> Reduced Mass: 1/3 m
> I = 1/3 ma^2
> Yes merge

### Tutor

对：$\mu = \frac{m\cdot\frac m2}{\frac32 m} = \frac13 m$，$I = \frac13 ma^2$。这次直接用约化质量（reduced mass），没有再把转轴放在中点。

卡片：`supp-dumbbell-rotor` 的内容并进了 `supp-rigid-rotor`（没有加新条目，补在前两条里）：第一条加了 $T = L^2/(2I)$ 和 $L^2 = \hbar^2J(J+1)$；第二条加了 $\mu = m_1m_2/(m_1+m_2)$、"绕质心转，不是中点"、等质量 $I = \frac12 mr_e^2$、$m$ 与 $3m$ 给出 $\frac34 mr_e^2$。`supp-dumbbell-rotor` 已删除并从今天的列表移除；`supp-rigid-rotor` 已加入今天的列表。问题面没变，所以不用加进 `CURATION_REQUEUE_IDS`。

#100 到此结束，标记题队列（marked-question queue）全部完成。
