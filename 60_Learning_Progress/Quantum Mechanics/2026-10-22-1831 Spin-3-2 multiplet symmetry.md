---
type: learning-session
topic: QM — addition of three spin-1/2 particles, symmetry of the spin-3/2 multiplet
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Symmetry of the spin-3/2 multiplet (Kahn Sample Exam 1 #75)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn symmetry of the spin-3/2 multiplet of three spin-1/2 particles (Kahn Sample Exam 1 #75)`.
- Source: Kahn Sample Exam 1, question 75, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6. Part of the learner's marked-question queue (15, 36, 75, 76, 78, 80, 90, 99, 100).
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-75`): The $\Delta$ is a spin-3/2 bound state of three spin-1/2 quarks. The spin part of the wavefunction of the state with $m = +3/2$ is $|\Delta\rangle = |{\uparrow\uparrow\uparrow}\rangle$. What is the spin part of the wavefunction with definite spin $m = -1/2$?
  - (A) $|{\uparrow\downarrow\downarrow}\rangle$
  - (B) $\frac{1}{\sqrt3}\left(|{\uparrow\downarrow\downarrow}\rangle + |{\downarrow\uparrow\downarrow}\rangle - |{\downarrow\downarrow\uparrow}\rangle\right)$
  - (C) $\frac{1}{\sqrt3}\left(-|{\uparrow\downarrow\downarrow}\rangle + |{\downarrow\uparrow\downarrow}\rangle - |{\downarrow\downarrow\uparrow}\rangle\right)$
  - (D) $\frac{1}{\sqrt3}\left(|{\uparrow\downarrow\downarrow}\rangle + |{\downarrow\uparrow\downarrow}\rangle + |{\downarrow\downarrow\uparrow}\rangle\right)$
  - (E) $|{\downarrow\downarrow\downarrow}\rangle$
- Learner's result: correct, flagged as a guess, about 90 s on screen. A guessed correct answer is not evidence of understanding.
- Kahn's solution (summary): the maximal-spin multiplet is totally symmetric under particle exchange; alternatively, apply the raising operator once to $|{\downarrow\downarrow\downarrow}\rangle$.
- Prior: no spin-addition thread in [[Progress-context]]; ladder operators for one spin are covered in [[2026-07-26-2113 Ladder operators]].

### Turn 1 — 2026-10-22 (learner)

> 下一个

### Tutor

这题你选对了，但标记为猜的，所以我们把"为什么"补上。核心只有一句话：**最高总自旋的整个多重态都是全对称的。**

- 顶态 $|{\uparrow\uparrow\uparrow}\rangle$ 交换任意两个粒子都不变，是全对称的。
- 总降算符 $S_- = s_{1-} + s_{2-} + s_{3-}$ 对三个粒子一视同仁，交换粒子不改变它。对称的态被一个对称的算符作用，结果仍然对称。所以从顶态往下降出来的 $m=\frac12, -\frac12, -\frac32$ 都是全对称的。

用这条规则筛选项，分两刀：
1. **按 $m$ 筛：** $m$ 是三个 $m_i$ 之和。$m=-\frac12$ 需要一个 ↑ 两个 ↓。(E) 是 $m=-\frac32$，排除。
2. **按对称性筛：** (A) 只有一种排列，交换粒子 1 和 2 会变成别的态，不对称。(B)、(C) 带负号，交换后符号会变，不是全对称~~（它们属于 $S=\frac12$ 的混合对称态）~~（这个括号是错的，更正见 Turn 2）。剩下 (D)。

现在请你用 Kahn 的第二种方法验证一次：把 $S_+ = s_{1+} + s_{2+} + s_{3+}$ 作用到 $|{\downarrow\downarrow\downarrow}\rangle$ 上（$\hbar$ 和系数先忽略，只看每一项变成什么），再归一化。你得到的是哪个态？

### Turn 2 — 2026-10-22 (learner)

> 那我怎么知道是顶态呢？因为它的自旋不为零吗？
> 在测试的时候，我flag了他一下，是因为不确定这个definite spin m equals minus one over two是否为多重态

### Tutor

**1. 为什么 $|{\uparrow\uparrow\uparrow}\rangle$ 是顶态。** 不是因为"自旋不为零"，而是因为它的 $m$ 已经是最大值。

- $m = m_1 + m_2 + m_3$，每个 $m_i$ 最大是 $+\frac12$，所以 $m$ 最大是 $\frac32$，而且只有 $|{\uparrow\uparrow\uparrow}\rangle$ 一个态能达到。
- 任何态都满足 $|m| \le S$，三个自旋 $\frac12$ 合成的 $S$ 最大是 $\frac32$。所以 $m = \frac32$ 强制 $S = \frac32$ 且 $m = S$，也就是这个多重态最顶端的那个态。
- 检验：每个 $s_{i+}$ 作用在 ↑ 上都得 0，所以 $S_+|{\uparrow\uparrow\uparrow}\rangle = 0$，上面没有更高的态。

**2. "definite spin $m=-\frac12$" 是不是 Δ 多重态里的态。** 是。第一句话已经规定 Δ 是自旋 $\frac32$ 的粒子，它的四个态 $m = \frac32, \frac12, -\frac12, -\frac32$ 都属于 $S=\frac32$。所以题目要的是 $|S=\frac32, m=-\frac12\rangle$。"definite $m$" 只是说它是 $S_z$ 的本征态。

你的犹豫有道理，因为**只看 $m$ 挑不出答案**：(A)(B)(C)(D) 的每一项都是一个 ↑ 两个 ↓，四个都是 $m=-\frac12$ 的 $S_z$ 本征态。$m=-\frac12$ 的态空间是三维的（↑ 放在三个位置之一），里面有一个 $S=\frac32$ 的态和两个 $S=\frac12$ 的态。这对应总的分解 $\frac12\otimes\frac12\otimes\frac12 = \frac32 \oplus \frac12 \oplus \frac12$，维数 $8 = 4 + 2 + 2$。真正挑出答案的是 $S = \frac32$。

**3. 为什么"全对称"就等于"$S=\frac32$"。** 两个自旋 $\frac12$ 有一个恒等式：$\vec s_i\cdot\vec s_j = \frac12 P_{ij} - \frac14$（取 $\hbar=1$），$P_{ij}$ 是交换粒子 $i$、$j$ 的算符。代入 $S^2 = \sum_i s_i^2 + 2\sum_{i<j}\vec s_i\cdot\vec s_j$ 得
$$S^2 = \tfrac34 + P_{12} + P_{13} + P_{23}.$$
全对称的态被每个 $P_{ij}$ 作用后不变，所以 $S^2 = \frac34 + 3 = \frac{15}{4} = \frac32\cdot\frac52$，即 $S=\frac32$。

**更正 Turn 1。** 我在 Turn 1 说 (B)(C) 是 $S=\frac12$ 的态，这是错的。(B)(C) 和 (D) 的内积是 $\pm\frac13$，不为零，所以它们含有 $\frac19$ 的 $S=\frac32$ 成分，根本不是 $S^2$ 的本征态。用上式算出 $\langle S^2\rangle = \frac{13}{12}$，介于 $\frac34$（$S=\frac12$）和 $\frac{15}{4}$（$S=\frac32$）之间。(A) 也不是 $S^2$ 本征态（$\langle S^2\rangle = \frac74$）。五个选项里只有 (D) 和 (E) 是 $S^2 = \frac{15}{4}$ 的本征态，(E) 的 $m$ 不对。计算方法：在三个自旋的 8 维基上直接用 $S^2 = \frac34 + \sum P_{ij}$ 作用（2026-10-22，纯 Python 有理数计算）。

Turn 1 的 $S_+$ 问题先放下，换成这个：用 $S^2 = \frac34 + P_{12} + P_{13} + P_{23}$ 作用在 (A) $|{\uparrow\downarrow\downarrow}\rangle$ 上。三个交换各把它变成什么？结果是不是 $|{\uparrow\downarrow\downarrow}\rangle$ 的倍数？

### Turn 3 — 2026-10-22 (learner)

> 你这个讲得太复杂了，确认一下GRE also tests like this?

### Tutor

不考到这个深度。Turn 2 第 3 部分（$S^2 = \frac34 + \sum P_{ij}$）和 (B)(C) 是不是 $S^2$ 本征态的讨论超出了 GRE，可以跳过。

GRE 真题考的是同一个想法的两粒子版本：GR0177 第 82 题（`/Users/Reid Hu/Physics GRE/content/bank/ets-exams.js`，id `gr0177-82`）问哪些是两电子三重态（$S=1$）的自旋本征函数，答案是 $|{\uparrow\uparrow}\rangle$ 和 $\frac{1}{\sqrt2}(|{\uparrow\downarrow}\rangle + |{\downarrow\uparrow}\rangle)$，带负号的是单态（$S=0$）。题库里其他 ETS 真题没有比这更深的自旋合成题。

GRE 层面只要记一条规则、做两步：
- **规则：** 最大总自旋的多重态全对称。两个自旋 $\frac12$ 时，三重态对称，单态反对称。
- **第一步，按 $m$ 筛：** 数箭头，$m = \frac12(\#\uparrow - \#\downarrow)$。
- **第二步，按对称性筛：** 在最大自旋的问题里，选所有排列都出现、系数相同、全是加号的那个。

用这两步回答：Δ 的 $m = +\frac12$ 态是什么？

### Turn 4 — 2026-10-22 (learner)

> 一除以根号三乘以上上下上下上下上上

### Tutor

对：$|\tfrac32, +\tfrac12\rangle = \frac{1}{\sqrt3}\left(|{\uparrow\uparrow\downarrow}\rangle + |{\uparrow\downarrow\uparrow}\rangle + |{\downarrow\uparrow\uparrow}\rangle\right)$。两个 ↑ 一个 ↓ 给出 $m=+\frac12$；三种排列都出现，系数相同，全是加号，所以全对称；$\frac{1}{\sqrt3}$ 让三项的平方和为 1。和 #75 的 $m=-\frac12$ 态比，只是把 ↑ 和 ↓ 互换。本题到此结束。下一题：#76。

### Turn 5 — 2026-10-22 (learner)

> 你还没回答我之前那个问题呢，是因为MS不等于零，所以它绝对不可能是单重态吗？一定是多重态这样子?

### Tutor

一半对。关键不等式是 $S \ge |m|$：$m$ 给总自旋 $S$ 一个下限。

- **$m \ne 0$ 确实排除单态。** 单态是 $S=0$，它只有 $m=0$ 一个态。所以任何 $m \ne 0$ 的态都不可能是单态。
- **但这一步在本题里不起作用。** 三个自旋 $\frac12$ 合成，$S$ 只能是 $\frac32$ 或 $\frac12$；奇数个自旋 $\frac12$ 的 $S$ 总是半整数，根本没有 $S=0$ 的单态。
- **真正定下顶态的是"$m$ 取到最大值"。** $m=\frac32$ 给出 $S \ge \frac32$，而 $S$ 最大就是 $\frac32$，所以 $S=\frac32$。
- **$m$ 不是最大值时，$m$ 定不下 $S$。** $m=-\frac12$ 既可以属于 $S=\frac32$，也可以属于 $S=\frac12$。所以 #75 必须靠题干第一句"Δ 是自旋 $\frac32$"。

术语：每个态都属于某个多重态，单态也是多重态（只有 1 个成员）。你说的"一定是多重态"，准确说法是"$S>0$"；本题的结论是"$S=\frac32$ 的四重态"。

检验一下：两个电子，测得 $m_s = 0$。能判断它们处在单态还是三重态吗？

### Turn 6 — 2026-10-22 (learner)

> 不能。因为他们也有可能处于三重态的MS=0的情况
> 所以这个判断和条件应该反过来，如果单态一定MS=0，但是MS=0，得不出单态，对吗

### Tutor

对。单态 $\Rightarrow m_s=0$，反过来不成立。它的逆否命题就是 Turn 5 用的那一条：$m_s \ne 0 \Rightarrow$ 不是单态。

$m_s=0$ 时，单态 $\frac{1}{\sqrt2}(|{\uparrow\downarrow}\rangle - |{\downarrow\uparrow}\rangle)$ 和三重态的 $\frac{1}{\sqrt2}(|{\uparrow\downarrow}\rangle + |{\downarrow\uparrow}\rangle)$ 只差一个符号，只能靠对称性区分：加号对称，属于三重态；减号反对称，是单态。这正是 GR0177 第 82 题考的内容。本题到此结束。

### Turn 7 — 2026-10-22 (learner)

> a flashcard, you decide whether to new a flashcard or supplement a flashcard for this conclusion. directly selected for me. Then we start number 78.

### Tutor

Studio 牌组里已有同主题的卡 `cpgf-5.56`（两个自旋 $\frac12$ 的单态和三重态），所以补充它，不新建。问题面加了一句"Does $m = 0$ identify the singlet?"；背面加了：$s \ge |m|$，单态 $\Rightarrow m=0$，但 $m=0$ 推不出单态（三重态有 $m=0$ 成员，只差符号）；$m \ne 0 \Rightarrow$ 不是单态；$m = m_{\max}$ 定出 $s = s_{\max}$（例：$|{\uparrow\uparrow\uparrow}\rangle$ 的 $s=\frac32$）。问题面改了，所以 `cpgf-5.56` 加进了 `CURATION_REQUEUE_IDS`。六个卡片测试全部通过，这张卡已加入今天的列表。
