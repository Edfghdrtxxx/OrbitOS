---
type: learning-session
topic: QM — neutrino flavor oscillation as a two-state superposition
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Neutrino oscillation as a two-state superposition (Kahn Sample Exam 1 #80)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn neutrino flavor oscillation as a two-state superposition (Kahn Sample Exam 1 #80)`.
- Source: Kahn Sample Exam 1, question 80, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6. Part of the learner's marked-question queue (15, 36, 75, 76, 78, 80, 90, 99, 100).
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-80`): An electron neutrino emitted from the Sun may be detected as a tau neutrino on Earth because:
  - (A) Conservation of lepton number does not apply to tau neutrinos.
  - (B) Electron neutrinos from the Sun can annihilate and be reemitted as a pair of tau neutrinos.
  - (C) Electron neutrinos interact with the Earth's magnetic field.
  - (D) A freely propagating neutrino is a superposition of electron and tau neutrinos.
  - (E) Electron neutrinos decay faster than tau neutrinos.
- Learner's answer: (B), flagged, 87 s (`pgre-status` attempt log). Correct: (D).
- Prior: [[Trap-Log]] 2026-09-30 row (reworked): each energy eigenstate in a superposition carries its own phase $e^{-iE_kt/\hbar}$, and the relative phase makes observables oscillate ([[2026-09-30-1509 Kahn 5.1.5 and 5.2.3 debrief]]). No neutrino thread in [[Progress-context]].

### Turn 1 — 2026-10-22 (learner)

> Next: 80

### Tutor

这题的机制你其实已经学过：9 月 30 日那条陷阱，"叠加态里每个能量本征态各带各的相位"。中微子振荡就是同一件事。

**两套基。** 中微子有两种"身份"：
- **味道态**（flavor）$\nu_e$、$\nu_\tau$：弱相互作用产生和探测的是它们。太阳核反应产生的是 $\nu_e$，探测器认出的也是味道。
- **质量态** $\nu_1$、$\nu_2$：质量确定，是自由飞行时的能量本征态，$m_1 \ne m_2$。

两套基不重合。以两种味道为例：$|\nu_e\rangle = \cos\theta\,|\nu_1\rangle + \sin\theta\,|\nu_2\rangle$。所以一个 $\nu_e$ 在飞行时是两个质量态的叠加，这就是选项 (D) 说的"freely propagating neutrino is a superposition"。

**为什么会变味。** 飞行中，$\nu_1$ 和 $\nu_2$ 各自带相位 $e^{-iE_1t/\hbar}$、$e^{-iE_2t/\hbar}$。质量不同，能量不同，相对相位随时间增长。叠加的组合变了，就不再是纯的 $\nu_e$，里面出现了 $\nu_\tau$ 成分。到达地球时测味道，就有一定概率测到 $\nu_\tau$。整个过程不需要和任何东西碰撞，单个中微子自己飞着就变了。

**(B) 为什么错。** (B) 说的是碰撞后湮灭再重新发射，需要另一个粒子参与。中微子几乎不和物质作用，而且这个过程对 $\tau$ 中微子同样会发生，解释不了"$e$ 变成 $\tau$"这个净变化。

GRE 层面记一句：**中微子自由飞行中变味 = 味道态是质量态的叠加，各质量态相位不同 → 中微子有质量。**

检验：如果所有中微子质量都相同（例如都是零），太阳发出的 $\nu_e$ 到地球还会被测成 $\nu_\tau$ 吗？为什么？

### Turn 2 — 2026-10-22 (learner)

> 什么是味道？ intuitively explain it to me.
> 相当于独立于 position space and spin space 的另一套自由度吗？
> 解释完之后  new a flashcard and directly select

### Tutor

**你的理解对：** 味道是一个内部自由度，和位置、自旋并列。中微子的完整状态可以写成 位置 ⊗ 自旋 ⊗ 味道。味道空间有 3 维（$\nu_e$、$\nu_\mu$、$\nu_\tau$），只看两种时是 2 维，和自旋 ½ 一样大。它不是角动量，只是一个"哪一种"的标签。"味道"这个名字是物理学家随手起的，和味觉无关；夸克也有味道（u、d、s、c、b、t）。

**直观上，味道 = 它和哪个带电轻子搭档。** 弱相互作用里，中微子总是和一个带电轻子成对出现：
- β 衰变 $n \to p + e^- + \bar\nu_e$：和电子一起产生的是电子型（反）中微子。
- 探测时，中微子撞上原子核，变出一个带电轻子：变出电子，就叫它 $\nu_e$；变出 $\tau$，就叫它 $\nu_\tau$。

所以"味道"是在产生和探测那一瞬间贴上的标签。

**和自旋的类比（类比，不是同一个物理量）：** 把味道基想成自旋的 $S_x$ 基，质量基想成 $S_z$ 基。
- 自旋：粒子准备在 $+x$ 方向，放进沿 $z$ 的磁场。哈密顿量 $\propto S_z$，$S_z$ 的两个本征态相位走得不一样快，自旋绕 $z$ 轴进动，测 $S_x$ 时结果在 $+$ 和 $-$ 之间来回振荡。
- 中微子：太阳产生 $\nu_e$（味道基里确定）。自由飞行的哈密顿量在质量基里是对角的，$\nu_1$、$\nu_2$ 相位走得不一样快，测味道时结果在 $\nu_e$ 和 $\nu_\tau$ 之间来回振荡。

两种情况的共同结构：**在一套基里准备和测量，在另一套基里演化。** 两套基不重合，才会振荡。

Studio 牌组里没有中微子或味道的卡，所以新建了 `supp-neutrino-oscillation`，已加入今天的列表。

Turn 1 的问题仍然有效：如果所有中微子质量都相同，太阳发出的 $\nu_e$ 到地球还会被测成 $\nu_\tau$ 吗？为什么？

### Turn 3 — 2026-10-22 (learner)

> 味道的英文是？Stow this lesson: if the main body of the answer is Chinese, present English for terminologies to facilitate my academic English proficiency.

### Tutor

味道（flavor；英式拼法 flavour）。三种味道态（flavor eigenstates）是 electron neutrino $\nu_e$、muon neutrino $\nu_\mu$、tau neutrino $\nu_\tau$；对应的另一套基是质量本征态（mass eigenstates）$\nu_1, \nu_2, \nu_3$；这个现象叫中微子振荡（neutrino oscillation）。

Turn 1 的问题仍然有效：如果所有中微子质量（mass）都相同，太阳发出的 $\nu_e$ 到地球还会被测成 $\nu_\tau$ 吗？为什么？

### Turn 4 — 2026-10-22 (learner)

> 不会了，因为质量一致的时候能量也相同，相对相位 is time-independent

### Tutor

对。质量相同，同样动量下能量（energy）也相同，两个质量态的相位一起转，相对相位（relative phase）不随时间变，叠加的组合保持不变，测到的永远是 $\nu_e$。更进一步：这时哈密顿量（Hamiltonian）在味道空间里正比于单位矩阵（identity），任何基都是本征基，"质量基"和"味道基"的区别就不存在了。所以观测到振荡（oscillation）就说明至少有两种中微子质量不同，也就至少有一种中微子质量不为零。

#80 到此结束。卡 `supp-neutrino-oscillation` 已在今天的列表里。下一题：#99。

### Turn 5 — 2026-10-22 (learner)

> 等会儿标准模型不是预测中微子质量是零吗

### Tutor

是的，最初的标准模型（Standard Model）把中微子当成严格无质量（massless）。振荡正是推翻这个假设的实验证据，两件事不矛盾：前者是理论假设，后者是观测结果。

**来自 vault（Kahn 第 8 章）：**
- 中微子被引入来解释 β 衰变能谱后，很长时间里人们认为它严格无质量；这也解释了为什么中微子总是左手的（left-handed），因为无质量的自旋 ½ 粒子螺旋度（helicity）固定 ([Kahn, §8 Nobel list, 2015](50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:6652))。
- 结果不是这样：中微子有很小的质量，所以会发生味道振荡（flavor oscillation）；它解释了太阳中微子问题（solar neutrino problem）：pp 链预测的电子中微子比地球上测到的多得多 ([Kahn, line 6654](50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:6654))。2015 年诺贝尔奖颁给了中微子振荡的发现。
- 振荡只能测质量差（mass differences），测不出绝对质量；已知中微子质量比电子小好几个数量级 ([Kahn, line 6529](50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:6529))。

**来自 vault 之外（教科书常识，未在 vault 中核对）：**
- 标准模型为什么给出零质量：模型里只有左手中微子，没有右手的伙伴，希格斯机制（Higgs mechanism）没法像给电子那样给它一个质量项。
- 所以中微子质量是第一个确立的、超出最初标准模型的现象（beyond the Standard Model）；扩展方式有加入右手中微子、跷跷板机制（seesaw mechanism）等，GRE 不考。

GRE 层面记一句：**最初的标准模型假设中微子无质量；振荡说明它有质量（2015 诺贝尔奖），只能测质量差。**

### Turn 6 — 2026-10-22 (learner)

> 那标准模型没有进行相应的更新吗？
> 尤其是我读的90年代的Nuclear Physics Corpus still treats neutrinos as massless.

### Tutor

**1. 标准模型更新了吗：部分更新。**（vault 之外，教科书常识，未在 vault 中核对）
- 现在的通行做法是在标准模型上加中微子质量和一个混合矩阵（mixing matrix，PMNS 矩阵，类似夸克的 CKM 矩阵），把三个质量差和混合角当作实验测出的参数。这常被称为"带质量中微子的标准模型"（Standard Model with massive neutrinos）。
- 但质量从哪来还没定：可能是狄拉克质量（Dirac mass，需要加入右手中微子），也可能是马约拉纳质量（Majorana mass，中微子是自己的反粒子，用无中微子双 β 衰变 neutrinoless double beta decay 检验）。机制没定，所以没有一个公认的"新版标准模型"。

**2. 为什么 90 年代的书写成无质量：** 那时还没有决定性的证据。
- 太阳中微子缺失（solar neutrino deficit）早就发现了（Ray Davis，2002 年诺贝尔奖），但当时不能确定是太阳模型错了还是中微子本身的问题 ([Physics World](https://physicsworld.com/a/art-mcdonald-and-takaaki-kajita-win-2015-nobel-prize-for-physics/))。
- 决定性证据出现在世纪之交：Super-Kamiokande 的大气中微子（atmospheric neutrinos）和 SNO 的太阳中微子测量（我记得分别是 1998 年和 2001 年，这两个年份未核对）。2015 年诺贝尔奖的颁奖理由是 "for the discovery of neutrino oscillations, which shows that neutrinos have mass" ([Nobel Prize 2015](https://www.nobelprize.org/prizes/physics/2015/summary/))。
- 所以 90 年代的教材反映的是当时的认识，不是错误。

**3. 读那批 corpus 时怎么办：** 在核物理运动学里，把中微子当无质量仍然是很好的近似。
- KATRIN 实验用氚 β 衰变（tritium beta decay）直接测量，2025 年给出电子中微子有效质量 **< 0.45 eV（90% 置信度）** ([KIT press release 029/2025](https://www.kit.edu/kit/english/pi_2025_029_astroparticle-physics-neutrinos-weigh-less-than-0-45-electronvolts.php))。这正是 #78 学的"90% 置信上限"（confidence-level upper limit）。
- β 衰变释放的能量是 MeV 量级（氚是 keV 量级），0.45 eV 相对它们小 4 到 6 个数量级。只有在 β 能谱的端点（endpoint）附近和长距离飞行的味道振荡里，质量才显现出来。

GRE 层面：题目问到时答"中微子有质量（振荡证明）"；做核反应运动学时按无质量处理。

### Turn 7 — 2026-10-22 (learner)

> (quoting "GRE 层面：题目问到时答"中微子有质量（振荡证明）"；做核反应运动学时按无质量处理。") New flashcard and direct selection
>
> (on the overlap with `supp-neutrino-oscillation`) Consolidate them

### Tutor

先建了单独的卡 `supp-neutrino-mass`，按你的要求又合并进 `supp-neutrino-oscillation`：正面加了"What mass do you use in decay kinematics?"；背面加了最初的标准模型（Standard Model）假设无质量、振荡只测质量差、KATRIN 上限 $m_{\nu_e} < 0.45$ eV（90% CL）、运动学按无质量处理。`supp-neutrino-mass` 已删除并从今天的列表移除；合并后的卡在今天的列表里，并加进了 `CURATION_REQUEUE_IDS`。
