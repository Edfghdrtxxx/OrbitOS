---
type: learning-session
topic: Thermodynamics — Carnot cycle step by step (signs of Q, W, ΔU, ΔS, ΔF; reversibility; which temperature for which step)
project: "[[GRE_Physics_Prep]]"
created: 2026-10-23
---
# Carnot cycle step by step

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-23.md`, a1): `/learn Carnot cycle step by step in [[GRE_Physics_Prep]] (~ 40 mins)`.
- Session started from the learner's main GRE session. Exam 2026-11-01 (9 days); next full mock ets2024 on 2026-10-25. Budget about 30–40 minutes. Explain in Chinese, English term at first use as 中文（English）.
- This session may be the learner's Kahn §4.2.6 reading, scheduled for 2026-10-24 in [[Mock-Review-Oct18]] §6.8 item 5.
- Gap type: a recurring "why". Knowing the isothermal-expansion card did not transfer to the Carnot question.
- Done when: (1) the learner fills the sign table for all four steps without help; (2) answers each of the four doubts below in one sentence; (3) solves 2–3 unseen GRE-style check questions on cycles, each in about 100 s or less.
- Scope: Prep Studio (`/Users/Reid Hu/Physics GRE`) and its Recall cards are read only here; the main session handles cards.

### Sources
- Kahn, *Conquering the Physics GRE*, §4.2.6 "Model Systems", Carnot paragraph ([Kahn md, line 3964](/Users/Reid%20Hu/OrbitOS/50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:3964)): four steps, $W=Q=\int T\,dS=(T_H-T_C)(S_2-S_1)$, rectangle in the $T$–$S$ plane; "Clockwise paths in the $P$–$V$- and $T$–$S$-planes do positive work" (line 3987).
- Kahn §4.2.1 First Law $\Delta U=Q-W$, $Q$ = heat added to the system, $W$ = work done by the system ([line 3771](/Users/Reid%20Hu/OrbitOS/50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:3771)).
- Kahn §4.2.3 reversible process: $\delta W=P\,dV$ (4.17), $\delta Q=T\,dS$ (4.18), $\Delta S=\int\delta Q/T$ (4.19); isentropic = reversible adiabatic ([lines 3827–3848](/Users/Reid%20Hu/OrbitOS/50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:3827)).
- Kahn §4.2.4 Helmholtz free energy $dA=-S\,dT-P\,dV$ (4.26) ([line 3899](/Users/Reid%20Hu/OrbitOS/50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:3899)); the exam solution and the learner write it as $F$.

### Sign convention for this session
- $Q$ = heat flowing **into** the gas; $W$ = work done **by** the gas; $\Delta U=Q-W$ (Kahn 4.14).

### Recall card `cpgl-4.03h` (read only)
Verbatim from `/Users/Reid Hu/Physics GRE/content/bank/cpg-lists.js` line 139. The main session reports it graded easy four times.
- **Front:** For $n$ moles of an ideal gas expanding isothermally and reversibly from $V_i$ to $V_f$ at temperature $T$, what are the work $W$ done by the gas, the heat $Q$ and $\Delta U$?
- **Back:** $$W = Q = nRT\ln\frac{V_f}{V_i}, \qquad \Delta U = 0$$ $T$ is fixed, so $U$ does not change and all the heat absorbed leaves as work. Doubling the volume gives $W = nRT\ln 2$, and the entropy rises by $nR\ln(V_f/V_i)$.
- **Note:** Kahn §4.2.3, p.83. This is the first step of a Carnot cycle, at the hot-reservoir temperature $T_H$: the gas absorbs $Q_H$, so its entropy rises by $Q_H/T_H$, and its Helmholtz free energy falls, since $dF = -S\,dT - P\,dV = -P\,dV \lt 0$ at fixed $T$. Do not use $\delta Q = C\,dT$ here: heat flows in while $T$ stays fixed. Every step of a Carnot cycle is reversible.
- Whether the note text existed when the card was graded is not known.

### Missed question — `cpg-x1-18` (Kahn Sample Exam 1 #18)
Verbatim from `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js` line 438:

Which of the following is NOT true about the isothermal expansion phase of a Carnot cycle?
- (A) The free energy of the gas increases.
- (B) The entropy of the gas increases.
- (C) The isothermal expansion phase is reversible.
- (D) The expansion takes place at the temperature of the "hot" reservoir.
- (E) The gas does work on its surroundings.

Correct: (A). Wrong on the 2026-10-22 mock; wrong again on the 2026-10-23 redo: picked (C) after 123 s, tapped Guessed and Forgot something.

### Learner's handwritten work on `cpg-x1-18` (image, transcribed)
Two A4 sheets photographed, two columns each, items numbered 1–13 of the 2026-10-23 redo. Item 3 is `cpg-x1-18` (bottom of the left column, page 1, continuing at the top of the right column). Transcription of item 3:

> 3\. (A) $PV = nRT$
> $T$ is constant and $V\uparrow$ → $P\downarrow$ and $Q = W$
> $dF = -S\,dT - P\,dV$ (under $-S\,dT$: a box with an arrow to "0"; under $-P\,dV$: an arrow "↓")
> gas does work to outside. so $P\,dV\uparrow$, $-P\,dV\downarrow$, $dF\downarrow$
> (B) $\Delta S = \int \frac{\delta Q}{T}$
> $\delta Q = mc\,dT$
> How to know it increases?
> (C) I don't know.
> Are all the Carnot cycles reversible.
> (D) I don't know. Just remember it?
> (E) Pressure → outside
> Expansion → outside → same direction
> → positive work

The other items on the sheets belong to other topics and are not transcribed here: rigid rotor $m$, $3m$ with $\mu=\frac34m$ (top left), commutators (1), Hermitian guess (2), telescope $f_o=80$ cm, magnification 4 (4), "I don't understand the phenomenon" (5), total internal reflection (6), $\vec J^2$ and good quantum numbers (7), thin films (8, 11), zero-event upper limit (9), step-potential reflection (10), thin lens (12), mirror $f=-R/2$ (13).

### Evidence that this recurs (from the main session)
- GR0877 (2026-10-11): `gr0877-21` (adiabatic process, $TV^{\gamma-1}$ constant) wrong; `gr0877-35` (heat pump, Carnot COP) right but flagged.
- GR1777 (2026-10-18): `gr1777-91` (Carnot air conditioner on a $T$–$S$ rectangle, $Q_{bc}/W=T_c/(T_h-T_c)\approx30$) wrong.
- Kahn Sample Exam 1 (2026-10-22): `cpg-x1-18` wrong, then wrong again on the 2026-10-23 redo. [[Mock-Review-Oct18]] line 386: #45 (adiabatic) and #49 (entropy change) right on that exam.

### Prior knowledge
- [[Progress-context]] has no thermodynamics thread. [[Trap-Log]] has no thermodynamics row before this session.
- From the handwriting: the learner can write $dF=-S\,dT-P\,dV$ and get $dF<0$ at fixed $T$ during expansion; knows an expanding gas does positive work; wrote $Q=W$ for the isotherm.

### Turn 1 — 2026-10-23 (learner, request relayed by the main GRE session)

> /learn the Carnot cycle, step by step: for each of the four steps, the sign of $Q$, $W$, $\Delta U$ and $\Delta S$ of the gas, and $\Delta F$ for the two isothermal steps; why every step is reversible; why the expansion happens at $T_H$ and the compression at $T_C$.
> (Learner's own words on the sheet, item 3: (B) "$\Delta S=\int\delta Q/T$, $\delta Q=mc\,dT$. How to know it increases?"; (C) "I don't know. Are all the Carnot cycles reversible."; (D) "I don't know. Just remember it?")

### Tutor

本节符号约定沿用 Kahn 式 (4.14)：$\Delta U = Q - W$，$Q$ = **流入**气体的热量，$W$ = 气体**对外**做的功。

**从你的卡片到 (B)。** 你在 (A) 栏已经写了 "$Q=W$"。Recall 卡片 `cpgl-4.03h` 给出可逆等温膨胀（reversible isothermal expansion）$W = Q = nRT\ln(V_f/V_i)$、$\Delta U=0$；卡诺循环（Carnot cycle）的第 1 步就是这张卡片，温度取高温热源（hot reservoir）的温度 $T_H$。$V_f>V_i$，所以 $Q>0$：气体吸了热，温度却不变。你在 (B) 用的 $\delta Q = mc\,dT$ 在这一步给出 $Q=0$（因为 $dT=0$），和卡片矛盾。热容（heat capacity）公式只管"吸进来的热用来升温"的过程；等温步骤的热量只能由第一定律（first law）$Q=\Delta U+W$ 算出。

**检验问题：** 用可逆过程的 $\delta Q = T\,dS$（Kahn 式 (4.18)），写出第 1 步的熵变（entropy change）$\Delta S$（用 $Q_H$ 和 $T_H$ 表示），并给出第 1 步五格的符号：$Q$、$W$、$\Delta U$、$\Delta S$，以及亥姆霍兹自由能（Helmholtz free energy）的变化 $\Delta F$。

### Turn 2 — 2026-10-23 (learner, handwritten image)

One sheet photographed on a green surface; a partial "3" at the top-left edge. Transcription, line by line:

> $\Delta S = nR\ln\frac{V_f}{V_i}$
> $W = Q = nRT\ln\frac{V_f}{V_i}$
> $\delta Q = T\,dS$
> $Q = T\cdot\Delta S$
> $\to \Delta S = \frac{Q}{T} = nR\ln\frac{V_f}{V_i} > 0$
> $Q = T\cdot\Delta S > 0$.
> $\Delta U = nC_V\,\Delta T = 0$.
> $dF = -S\,dT - P\,dV$
> $= -\delta W$
> $\Delta F = -W = -nRT\ln\frac{V_f}{V_i}$

### Tutor

第 1 步这一行全对：$Q>0$，$W=Q>0$，$\Delta U=0$，$\Delta S=Q_H/T_H=nR\ln(V_f/V_i)>0$，$\Delta F=-W<0$。这一行本身就回答了 `cpg-x1-18`：$\Delta F<0$，所以 (A)"自由能增加"不成立，(A) 就是答案。

值得停一下的是你写的 $\Delta U = nC_V\,\Delta T = 0$，这是 $C\,dT$ 的正确用法。理想气体（ideal gas）的 $U$ 只取决于 $T$，所以 $dU=nC_V\,dT$ 在**任何**路径上都成立；而 $\delta Q=nC_V\,dT$ 只在定容（constant volume）时成立，因为那时 $W=0$。你在 (B) 的错误，是把"内能的式子"当成了"热量的式子"。

**问题：** 考试那张纸上，你在 (A) 栏已经推出 $dF\downarrow$，最后却选了 (C)。当时是什么让 (C) 看起来比 (A) 更像答案？

### Turn 3 — 2026-10-23 (learner)

> 因为我知道有些过程不是reversible的

### Tutor

你的前提是对的：确实有不可逆（irreversible）过程，比如自由膨胀（free expansion）。但题目问的不是"某个过程"，而是卡诺循环。卡诺循环**按定义**就是每一步都可逆的循环；只要有一步不可逆，它就不再是卡诺循环，效率也会低于上限 $1-T_C/T_H$（Kahn 式 (4.37)）。所以 (C) 为真，靠定义就能判断。考试上的规则：在 NOT 题里，一个你**推出为假**的选项（(A)，$dF\downarrow$）比一个你只是"怀疑"的选项更可靠；"有些过程不可逆"只说明 (C) 可能为假，没有说明它为假。

热机里不可逆的来源主要有两种：一是热量跨过有限温差（finite temperature difference）流动；二是摩擦或突然的、非准静态（non-quasistatic）的运动，比如自由膨胀。卡诺循环把两种都排除了。例如在等温步骤中，气体温度等于热源温度，热量只跨过无穷小的温差流动。

**问题：** 第 1 步结束时，气体温度是 $T_H$。如果跳过绝热膨胀，直接让这团气体接触温度为 $T_C$ 的冷热源（cold reservoir），会发生什么？为什么这一步不可逆？

### Turn 4 — 2026-10-23 (learner)

> You can use excalidraw to show me Carnot cycle first.
>
> 同时我也不清楚从哪个角度入手思考你的问题

### Tutor

卡诺循环的图在这一轮的末尾。先给你一个入手的角度。

**入手角度：可逆性的检验。** Kahn §4.2.3 对可逆过程（reversible process）的定义是：每一个无穷小步骤，都能靠把条件改变一个无穷小量而倒过来进行（[Kahn md, line 3827](/Users/Reid%20Hu/OrbitOS/50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:3827)）。所以判断一步是否可逆，只问一句：**把条件轻轻推一下，过程的方向会不会反过来？**

用数字试，取 $T_H=600\ \mathrm K$，$T_C=300\ \mathrm K$：
- **第 1 步（可逆）：** 气体比 $600\ \mathrm K$ 低一丝，热源是 $600\ \mathrm K$，热量从热源流进气体。把热源温度降低一丝、降到气体温度以下，热量就改为从气体流回热源。轻推一下，方向就反过来了。
- **跳过绝热膨胀：** 气体是 $600\ \mathrm K$，冷热源是 $300\ \mathrm K$，热量从气体流进冷热源。

**问题：** 在第二种情形里，冷热源的温度至少要升到多少，热量的方向才会反过来？按上面的检验，这一步可逆吗？

**图：卡诺循环的四步。** 上半部分是 $P$–$V$ 图（示意，不按比例）：红色等温线（isotherm）$T_H$，蓝色等温线 $T_C$，两条更陡的黑线是绝热线（adiabat），沿 $1\to2\to3\to4\to1$ 顺时针走。下半部分是四个活塞–气缸（piston–cylinder），依次放在高温热源、绝热支架（insulating stand）、冷热源、绝热支架上，下面写着每一步开始和结束时的气体温度。看下半部分：气缸离开高温热源时是 $T_H$，经过绝热支架那一步变成 $T_C$ 之后，才放到冷热源上。把这和"从第一块直接放到第三块"比较，就是上面的问题。

![[carnot-cycle-four-steps.excalidraw|1000]]

### Turn 5 — 2026-10-23 (learner)

Attached: a screenshot of this note in Obsidian reading view, at the end of Turn 4; the embed showed as a file card "carnot-cycle-four-steps.excalidraw", not as the drawing. (The tutor forced a re-render; the drawing then showed: 0 cards, 1 drawn.)

> 至少需要升到600K热量才会反过来，如果adiabatic expansion让温度降下来之后再接触Cold reservior，热量只夸过无穷小的温差流动

### Tutor

对。冷热源要升到 $600\ \mathrm K$ 以上，热量才会倒流；这是一个有限的改变，不是无穷小的推动，所以这一步不可逆。你还说出了绝热膨胀存在的理由：它不和任何热源交换热量，就把气体从 $T_H$ 带到 $T_C$，于是气体接触冷热源时，温差只有无穷小。这就回答了你在 (C) 栏的疑问：卡诺循环的四步都按这种方式设计，所以每一步都可逆。

下一个是你在 (D) 栏的疑问："为什么膨胀在 $T_H$？只能死记吗？" 不用死记，可以从你第 1 步那一行推出来。热机（heat engine）的定义是：从高温热源吸热 $Q_H$，向冷热源放热 $Q_C$（Kahn §4.2.6）。你第 1 步写过：等温线上 $\Delta U=0$，所以 $Q=W$。

**问题：** 在 $T_C$ 那条等温线上，气体要向冷热源**放**热。由 $Q=W$，这一步的 $W$ 是正还是负？所以这一步是膨胀还是压缩？

### Turn 6 — 2026-10-23 (learner)

Attached: a screenshot of this note in Obsidian reading view; the Turn 4 embed still showed as the file card "carnot-cycle-four-steps.excalidraw".

> No it still doesn't show
> Negative, dV < 0 -> compression

### Tutor

对：$Q<0\Rightarrow W<0\Rightarrow dV<0$，压缩。这就是 (D) 的理由，不用死记：在等温线上 $Q=W$，所以从高温热源**吸**热的那一步必须是膨胀，向冷热源**放**热的那一步必须是压缩。

四步需要的工具你现在都有了。约定不变：$\Delta U=Q-W$，$Q$ 是流入气体的热量，$W$ 是气体对外做的功。

**问题：** 不看图、不翻前面，在纸上填完下面整张表（每格写 +、− 或 0），拍照发来。

| 步骤 | Q | W | ΔU | ΔS | ΔF |
|---|---|---|---|---|---|
| 1→2 等温膨胀，T_H |  |  |  |  |  |
| 2→3 绝热膨胀 |  |  |  |  | 不问 |
| 3→4 等温压缩，T_C |  |  |  |  |  |
| 4→1 绝热压缩 |  |  |  |  | 不问 |

### Turn 7 — 2026-10-23 (learner, handwritten image)

One sheet photographed. Top edge cut off. Transcription:

> (top, partly legible) $T_H$ ⇒ $Q>0$; brace: "isothermal: $Q=W=\dots$" (cut off), "adiabatic"
> Table with header "Q | W | ΔU | ΔS | ΔF". The row labels fill the first column, under "Q", so only four entries per row:
> - isothermal, $T_H$, expansion: W +, ΔU 0, ΔS +, ΔF −
> - adiabatic, expansion: W +, ΔU −, ΔS 0, ΔF (struck through)
> - isothermal, $T_C$, compression: W −, ΔU 0, ΔS −, ΔF +
> - adiabatic compression: W −, ΔU +, ΔS 0, ΔF (struck through)
>
> isothermal: $\Delta T=0\to Q=W=nRT\ln\frac{V_f}{V_i}>0$ (expansion)
> $\Delta S=\int\frac{\delta Q}{T}=nR\ln\frac{V_f}{V_i}>0$ (a crossed-out "$Q/T$" before the integral)
> $\Delta F=\Delta U-\Delta(TS)<0$
> adiabatic: $Q=0$, $\Delta U=-W$, $PV^\gamma=$ constant.
> $W=\int P\,dV$. expansion $dV>0$
> $\to\Delta U<0\to\Delta T<0$, $T\downarrow$
> $\Delta S=\frac f2 C_V\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}$
> $\delta Q=0\to\Delta S=0$

### Tutor

整张表全对，没有提示。表里 $Q$ 那一列被步骤名占了，但你在下面写了等温线 $Q=W$、绝热线 $Q=0$，所以 $Q$ 列是 $+,\ 0,\ -,\ 0$，也对。注意第 3 步：它和第 1 步每一格都反号（$\Delta U$ 除外，两者都是 $0$）；第 4 步和第 2 步也一样。整圈下来 $\Delta U$ 和 $\Delta S$ 都回到 $0$，这正是状态函数（state function）的意思。

两处小修正：
- **可逆的条件：** 你写的 $\delta Q=0\to\Delta S=0$ 只对**可逆**绝热过程成立。自由膨胀也是绝热的（$Q=0$），但 $\Delta S=nR\ln(V_f/V_i)>0$（Kahn Example 4.2）。卡诺循环的绝热步骤是可逆的，所以这里 $\Delta S=0$ 没错。GRE 有时把 "adiabatic" 当成"可逆绝热"用（Kahn §4.2.3 的 Warning）。
- **熵的公式：** 理想气体 $\Delta S=nC_V\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}$，其中摩尔热容 $C_V=\frac f2R$。你写的 $\frac f2C_V$ 把 $\frac f2$ 算了两次。这一行在本题里用不到，记一下即可。

**问题：** 不翻前面，用**一句话**分别回答你在 `cpg-x1-18` 纸上的四个疑问：
1. (A)：为什么 (A) 是答案？
2. (B)："How to know it increases?"
3. (C)："Are all the Carnot cycles reversible?"
4. (D)："Just remember it?"（为什么膨胀在 $T_H$）

### Turn 8 — 2026-10-23 (learner)

> 1. 我們推导了这个绝热过程中，德尔塔U=零，T不变，然后是负的TSS又大于0，所以德尔塔F<零自由能是减小的
> 2. delta S=NRNVF÷Vi，由于是膨胀过程VF>VI, 所以大于零
> 3. 是的，全都是无穷小的温度变化，所以都是可逆的
> 4. 我們需要在高温热源处吸热，所以就是都在这里膨胀，才能把热量吸进来

### Tutor

四句的结论都对，有两处措辞要改：
1. **(A)：** 第 1 步是**等温**（isothermal），不是绝热（adiabatic）。你描述的 $\Delta U=0$、$T$ 不变，正是等温：$\Delta F=\Delta U-T\Delta S=-T\Delta S<0$，所以"自由能增加"不成立，(A) 就是答案。
2. **(B)：** 对。$\Delta S=nR\ln(V_f/V_i)>0$。
3. **(C)：** 结论对，理由要改。绝热步骤中温度的**变化**是有限的（$T_H\to T_C$）；无穷小的是**传热时气体和热源之间的温差**。一句话版本："每一步都可逆：传热只在温差无穷小时发生，绝热步骤不传热，且缓慢、无摩擦。"
4. **(D)：** 对。补上中间一环更完整："等温线上 $Q=W$，所以吸热的那一步必须膨胀。"

**检验题（check questions）。** 三道题，每道限时约 100 s，不翻笔记、不看图。在纸上写下选项、用时和一行理由，拍照发来。

**Q1.** A Carnot cycle is drawn as a rectangle in the $T$–$S$ plane between $T=400\ \mathrm K$ and $T=300\ \mathrm K$. The working gas absorbs $900\ \mathrm J$ of heat per cycle at $300\ \mathrm K$. How much work is done **on** the gas per cycle?
- (A) $225\ \mathrm J$
- (B) $300\ \mathrm J$
- (C) $675\ \mathrm J$
- (D) $900\ \mathrm J$
- (E) $1200\ \mathrm J$

**Q2.** Which of the following is NOT true about the isothermal compression phase of a Carnot engine cycle that uses an ideal gas?
- (A) The entropy of the gas decreases.
- (B) The free energy of the gas increases.
- (C) Heat flows from the gas to the cold reservoir.
- (D) The total entropy of the gas and the cold reservoir increases.
- (E) The work done by the gas is negative.

**Q3.** One mole of a monatomic ideal gas, initially at temperature $T_0$ and volume $V_0$, expands to $2V_0$ in one of two ways: (i) a reversible adiabatic expansion; (ii) a free expansion into vacuum inside an insulated container. Which of the following is true?
- (A) In both processes the entropy of the gas is unchanged.
- (B) Process (i) ends at $2^{-2/3}T_0$; process (ii) ends at $T_0$, and the gas's entropy rises by $R\ln2$.
- (C) Both processes end at $2^{-2/3}T_0$.
- (D) Process (i) ends at $T_0/2$; process (ii) ends at $T_0$, and the gas's entropy rises by $R\ln2$.
- (E) Both processes end at $T_0$, because $Q=0$ in both.

### Turn 9 — 2026-10-23 (learner, handwritten image)

One sheet photographed; the left edge shows parts of earlier sheets (the Turn 7 table, Poisson notes). No times written. Transcription of the new work:

> **Q1.** Sketch: rectangle in the $T$–$S$ plane between 300 and 400, axis $S$.
> $\frac{Q_C}{T_C}=\frac{Q_H}{T_H}$
> $\frac{Q_C}{300\ \mathrm K}=\frac{900\ \mathrm J}{400\ \mathrm K}$
> $Q_C=675\ \mathrm J$
> $=$ Work on the gas $\to$ (C) [isothermal $Q=W$]
> (side scratch: long division $27/4=6.75$)
>
> **Q2.** isothermal. $\Delta S=nR\ln\frac{V_f}{V_i}<0$, compression. (A) ✓
> (B) $F=U-TS=-TS\to\Delta F>0$
> (C) $Q=W<0$. correct
> (D) incorrect. entropy ↑
> (E) $W<0$.
>
> **Q3.** $T_0$, $V_0\to2V_0$
> (A): adiabatic: $Q=0$, $\Delta U=-W$; $T\cdot V^{\gamma-1}=$ constant
> free expansion (insulated): $\Delta S=nR\ln\frac{V_f}{V_i}>0\neq0$
> (B) monatomic: $f=3$; $\gamma=\frac{2+f}{f}=\frac53$, $\gamma-1=\frac23$
> $T\cdot V^{2/3}=$ constant
> $T_0\cdot V_0^{2/3}=T_f\cdot(2V_0)^{2/3}$
> $T_f=\left(\frac12\right)^{2/3}T_0=2^{-2/3}T_0$. correct
> (C) incorrect. (D) ✗ (E) ✗
>
> (bottom) $\Delta S=n\frac f2R\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}$

### Tutor

**成绩：2/3。** Q2 (D) 对，Q3 (B) 对，Q1 错：你选了 (C)，答案是 (B) $300\ \mathrm J$。纸上没有写用时，所以 100 s 的标准这次无法核对。

Q3 底部的熵公式你改对了：$n\frac f2R\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}$。Q2 选 (D)，说明"可逆"你已经会用：可逆步骤中，气体加热源的总熵不变。

**Q1 错在两处：**
1. **900 J 放错了温度。** 题目说气体在 **300 K** 吸收 900 J，你把它放在 400 K（$900\ \mathrm J/400\ \mathrm K$）。在低温吸热，说明这台机器是制冷机（refrigerator），在 $T$–$S$ 图上逆时针走。$\Delta S=900/300=3\ \mathrm{J/K}$，所以在 400 K 放出的热是 $400\times3=1200\ \mathrm J$。
2. **把单步的 $Q=W$ 当成整圈的功。** $Q=W$ 只对一条等温线成立。整圈的净功要把四步加起来：两条绝热线的功互相抵消（$W_2=-\Delta U_2$，$W_4=-\Delta U_4$，而 $\Delta U_2=-\Delta U_4$），只剩两条等温线：$W_{\text{net}}=W_1+W_3=Q_1+Q_3$。所以你写的 "isothermal $Q=W$" 是对的起点，只是要用在**两条**等温线上再相加。这里外界对气体做的功是 $1200-900=300\ \mathrm J$，正是矩形的面积 $(400-300)\times3$。

**问题（限时 100 s，写下用时）：** 一台卡诺冰箱（Carnot refrigerator）每圈从 $250\ \mathrm K$ 的冷冻室取走 $500\ \mathrm J$ 热量，向 $300\ \mathrm K$ 的厨房放热。每圈需要输入多少功？向厨房放出多少热？

### Turn 10 — 2026-10-23 (learner)

Attached: a screenshot of one line from the Turn 9 tutor reply: "$\Delta S=900/300=3\ \mathrm{J/K}$，所以在 400 K 放出的热是 $400\times3=1200\ \mathrm J$。"

> Elaborate

### Tutor

那一行跳了两步，分开写：

1. **等温线上 $Q=T\,\Delta S$。** 可逆时 $\delta Q=T\,dS$；等温线上 $T$ 是常数，可以提到积分外面，得到 $Q=T\,\Delta S$。在 300 K 那条边上，气体吸热 $900\ \mathrm J$，所以气体的熵增加 $\Delta S=900/300=3\ \mathrm{J/K}$。
2. **为什么 400 K 那条边的熵变也是 3 J/K，只是方向相反。** 两条绝热线可逆，$\Delta S=0$，在 $T$–$S$ 图上是两条竖直线。气体转一圈回到原来的状态，而熵是状态函数，所以整圈 $\Delta S=0$。于是 400 K 那条边上 $\Delta S=-3\ \mathrm{J/K}$，那里的热 $Q=400\times(-3)=-1200\ \mathrm J$，即气体放出 1200 J。

换成图来看：等温边上的热，等于这条边下方、一直到 $T=0$ 的面积。

```
T (K)
400 ┤     ●━━━━━━━━━━●   top edge:    Q = 400 × 3 = 1200 J (released)
    │     ┃▓▓▓▓▓▓▓▓▓▓┃
    │     ┃▓▓▓ W ▓▓▓▓┃   rectangle:   W = 1200 − 900 = 300 J
300 ┤     ●━━━━━━━━━━●   bottom edge: Q = 300 × 3 = 900 J (absorbed)
    │     ░░░░░░░░░░░░
    │     ░░░░░░░░░░░░   area under the bottom edge = 900 J
  0 ┼─────┴──────────┴──→ S
          |← 3 J/K →|
```

上边下方的面积（▓ 加 ░）是 1200 J，下边下方的面积（░）是 900 J，两者之差就是矩形 ▓，也就是每圈的功。

**问题（限时 100 s，写下用时）：** 用这两步做 Turn 9 那道冰箱题：卡诺冰箱每圈从 $250\ \mathrm K$ 的冷冻室取走 $500\ \mathrm J$，向 $300\ \mathrm K$ 的厨房放热。每圈需要输入多少功？向厨房放出多少热？

### Turn 11 — 2026-10-23 (learner)

> 利用的就是T，S图像为一个矩形这样子的一个性质，对吧

### Tutor

对。矩形本身来自两件事：等温线上 $T$ 不变，所以是水平边；可逆绝热线 $\Delta S=0$，所以是竖直边。上下两条边一样宽，是因为整圈 $\Delta S=0$。有了矩形，三个量都能直接读出来：低温边上的热 $=T_C\,\Delta S$，高温边上的热 $=T_H\,\Delta S$，每圈的功 $=$ 两者之差 $=$ 矩形面积 $(T_H-T_C)\,\Delta S$。Kahn §4.2.6 写的正是 $W=(T_H-T_C)(S_2-S_1)$。

只有卡诺循环是矩形。其他可逆循环在 $T$–$S$ 图上是别的形状，但"一段过程的热 = 这段曲线下方的面积，每圈的功 = 曲线围成的面积"仍然成立。

**问题（限时 100 s，写下用时）：** 用矩形做那道冰箱题：卡诺冰箱每圈从 $250\ \mathrm K$ 的冷冻室取走 $500\ \mathrm J$，向 $300\ \mathrm K$ 的厨房放热。每圈需要输入多少功？向厨房放出多少热？

### Turn 12 — 2026-10-23 (learner, handwritten image)

One sheet photographed. Transcription:

> Sketch: rectangle in the $T$–$S$ plane, top edge 300 K, bottom edge 250 K, axis $S$.
> $\delta Q=T\,dS$
> Area $=(300-250)\cdot\Delta S$,
> where $\Delta S=\frac{500\ \mathrm J}{250\ \mathrm K}=2\ \mathrm{J/K}$.
> Area $=100\ \mathrm J=Q$ per loop
> $Q_H=\Delta S\cdot T=600\ \mathrm J$
> 1 min 25 s

> 有些推论记起来好像还是太麻烦了，整理成flashcard and directly select for me

### Tutor

全对，85 s，在 100 s 以内：$\Delta S=500/250=2\ \mathrm{J/K}$，功 $=(300-250)\times2=100\ \mathrm J$，放给厨房 $300\times2=600\ \mathrm J$。你写的"$Q$ per loop"指整圈的净热，它等于整圈的功，没有问题。Turn 9 那道题的两个错（热量放错温度、把单步 $Q=W$ 当成整圈的功）这次都没有出现。

**Flashcards。** 先查了整个卡组：今天的推论大多已经有卡片，只缺"卡诺四步"这一张。
- **新卡 `supp-carnot-steps`：** 四步的顺序，每一步 $Q$、$W$、$\Delta U$、$\Delta S$ 的符号，以及两条等温线上的 $\Delta F$。note 里写了为什么膨胀在 $T_H$、为什么每一步可逆，以及 $\delta Q=C\,dT$ 的陷阱。
- **已有卡 `supp-cycle-area` 加了两条：** 卡诺矩形逐边读出热和功；"单步 $Q=W$ 不是整圈的功"这个陷阱。正面没有改，所以复习进度不受影响。
- **已放进今天 Recall 批次的 8 张：** `supp-carnot-steps`；`supp-cycle-area`；`cpgl-4.03h`（等温膨胀）；`cpgl-4.03f`（$\Delta U=nC_V\Delta T$ 对任何路径成立）；`supp-heat-pump-cop`（热机、冰箱、热泵的比值）；`supp-adiabatic-temperature`（$TV^{\gamma-1}$ 不变）；`supp-free-expansion`（自由膨胀）；`supp-reservoir-entropy`（跨有限温差传热的熵增）。其中 `cpgl-4.03h` 和 `supp-heat-pump-cop` 本来就在今天的批次里。

**本次小结。** 三个目标都达到了：四步符号表独立填对；`cpg-x1-18` 的四个疑问各用一句话答出（两处措辞已改）；检验题 2/3，错的那道换数字重做，85 s 做对。前三道题没有记用时。

下一步：
- 今天或明天在 Recall 里过这 8 张卡。
- 几天后冷做 `cpg-x1-18` 和 `gr1777-91`。
- 10-25 的 ets2024 遇到循环题：先看在哪个温度吸热（判断是热机还是冰箱），再按矩形读出热和功。

### Turn 13 — 2026-10-23 (learner)

> 我再梳理一下对这个TS图像的理解，比如说，低温上一直是某一个温度，然后在这个对应温度上产生了对应的热量，温度热量变化，那么对应的德尔塔S就是这个温度除以这个热量变化，就是我們一直要有的那个系数德尔塔s。知道德尔塔S之后，我們就可以知道剩下的，另一边的变化情况了，然后落实到做题中的时候，可以先把这个T、S的矩形画出来，找到互相之间的对应关系。一个是当轮下做的功，就是对应曲线下的面积，一个是每一圈所搬运的热量，就是围成的一圈的面积。然后，顺时针是热泵逆时针空调，对吧。
> 你帮我加的那个新卡和已有的卡片，那个矩形最好用excalidraw，把这个可视化一下，辅助我理解

### Tutor

整体思路对：先画矩形，用已知的那条边求出宽度 $\Delta S$，再用这个宽度求另一条边。有三处要改：

1. **$\Delta S$ 是热量除以温度：** $\Delta S=Q/T$，不是 $T/Q$。Turn 12 你纸上写的 $500\ \mathrm J/250\ \mathrm K$ 是对的，这里是口头说反了。单位检查：$\mathrm{J/K}$。
2. **两种面积说反了：**
   - 一条等温边**下方**、一直到 $T=0$ 的面积，是这条边上交换的**热**：$Q_C=T_C\,\Delta S$，$Q_H=T_H\,\Delta S$。
   - 矩形**围成**的面积，是每圈的**净功** $W=(T_H-T_C)\,\Delta S$。整圈 $\Delta U=0$，所以它也等于每圈的净吸热。
   - 冰箱每圈从冷处"搬走"的热是 $Q_C$，是下边下方的面积，不是围成的面积。
3. **方向：** 顺时针是**热机**（heat engine），对外做净功。逆时针的是冰箱、空调和热泵（heat pump），三者是同一种逆向循环，只是目的不同：冰箱和空调要的是从低温处取走的 $Q_C$，热泵要的是送到高温处的 $Q_H$。

**图：$T$–$S$ 矩形的三块面积。** 两个面板画的是同一个矩形：蓝色（下边下方，一直到 $T=0$）是 $Q_C$，橙色（矩形围成的面积）是 $W$，蓝色加橙色（上边下方）是 $Q_H$。只有走的方向不同：(a) 顺时针是热机；(b) 逆时针是冰箱、空调或热泵，哪一块算"目标"取决于是哪种机器。这张图也加到了卡片 `supp-carnot-steps` 和 `supp-cycle-area` 的 note 里。

![[carnot-ts-rectangle.excalidraw|1000]]

**问题：** 性能系数（coefficient of performance，COP）= 目标 ÷ 成本。用图上的面积写出卡诺热泵的 COP，用 $T_H$、$T_C$ 表示，并算出它在 $T_C=270\ \mathrm K$、$T_H=300\ \mathrm K$ 之间的数值。

### Turn 14 — 2026-10-23 (learner, handwritten image)

One sheet photographed. Transcription:

> $\mathrm{COP}=\frac{\text{object}}{\text{cost}}$
> Heat pump $\mathrm{COP}=\frac{Q_H}{W}=\frac{Q_H}{Q_H-Q_C}$
> $=\frac{\Delta S\,T_H}{\Delta S\,(T_H-T_C)}$
> $=\frac{300\ \mathrm K}{30\ \mathrm K}$
> $=10$

### Tutor

全对：$\mathrm{COP}=Q_H/W=T_H/(T_H-T_C)=300/30=10$。面积这次对上了：目标 $Q_H$ 是上边下方的面积，成本 $W=Q_H-Q_C$ 是矩形围成的面积。也就是每输入 $1\ \mathrm J$ 的功，送进屋 $10\ \mathrm J$ 的热；温差越小，COP 越大。

**最后一问（方向）：** 一个循环在 $T$–$S$ 图上**顺时针**走。它是哪种机器？气体在上边还是在下边吸热？

### Turn 15 — 2026-10-23 (learner)

> 顺时针走是Carnot heat engine. 气体在上面吸热，在高温热源处吸热，要转化为把热能转化为机械能输出就是heat engine

### Tutor

对。顺时针 = 热机（heat engine）：气体在上边（$T_H$）吸热 $Q_H$，在下边（$T_C$）放热 $Q_C$，差值 $W=Q_H-Q_C$（围成的面积）作为功输出。逆时针时上边变成放热、下边变成吸热，功从外面输入；冰箱、空调、热泵都是这个方向，只是"目标"不同。

这两个 $T$–$S$ 陷阱（面积读反、方向读反）都已经用新题自己做对，这次学习结束。

**本次学会的：**
- 四步的符号表（$Q$、$W$、$\Delta U$、$\Delta S$；等温步的 $\Delta F$），以及为什么膨胀在 $T_H$、为什么每一步可逆。
- $T$–$S$ 矩形：边下面积 = 该边的热，围成面积 = 净功；顺时针 = 热机，逆时针 = 冰箱 / 空调 / 热泵；$\mathrm{COP}$ = 目标 ÷ 成本。

**接下来：**
- 今天或明天在 Recall 里复习这 8 张卡（含新卡 `supp-carnot-steps`）。
- 过几天不看笔记重做 `cpg-x1-18` 和 `gr1777-91`。
- 10-25 的 ets2024 遇到循环题时，先找气体在哪个温度吸热（判断热机还是冰箱），再从矩形上读热和功。
