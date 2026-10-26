---
type: learning-session
topic: Atomic — electric-dipole (E1) selection rules in hydrogen and light atoms
project: "[[GRE_Physics_Prep]]"
created: 2026-10-23
---
# Electric-dipole (E1) selection rules in hydrogen and light atoms

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-23.md`, a1): `/learn atomic electric-dipole (E1) selection rules in hydrogen and light atoms in [[GRE_Physics_Prep]] (~ 35 mins)`.
- Session started from the learner's main GRE session after the 2026-10-23 particle + atomic fact drill (12/15). Exam 2026-11-01; budget about 30–40 minutes. Explain in Chinese, English term at first use.
- Goal: say why each rule holds, and answer a GRE selection-rule question in under 60 s.
- Order: (1) one-electron rules $\Delta l=\pm1$, $\Delta m_l=0,\pm1$, $\Delta s=0$, $\Delta n$ unrestricted, with the photon's angular momentum $1$ and the odd parity of the dipole operator; (2) why $2s\to1s$ is forbidden, $2s$ metastable, two-photon decay, and what "forbidden" means; (3) LS-coupling form, brief; (4) three GRE-style check questions on the learner's traps, graded.
- Source: Kahn, *Conquering the Physics GRE*, §5.7.5 "Selection Rules" ([Kahn md, line 5341](/Users/Reid%20Hu/OrbitOS/50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:5341)). Kahn states $\Delta m=0,\pm1$ from the photon's spin $1$ and $\Delta l=\pm1$ "sort of" from angular-momentum addition, and remarks that the case $\Delta l=0$ "is conspicuously absent" without giving the parity reason (line 5350). $2s\to1s$ happens by two-photon emission (line 5352).
- Related Prep Studio Recall cards (read only, not edited here): `cpgl-5.17` in `/Users/Reid Hu/Physics GRE/content/bank/cpg-lists.js` (allowed/forbidden hydrogen transitions); `supp-dipole-selection-extra` in `/Users/Reid Hu/Physics GRE/js/data-formulas.js` (LS-coupling rules: opposite parity, $\Delta S=0$, $\Delta L=0,\pm1$ excluding $0\leftrightarrow0$, $\Delta J=0,\pm1$ excluding $0\leftrightarrow0$).
- Mock evidence: [[Mock-Review-Oct18]] line 344 — atomic physics on Kahn Sample Exam 1 was 3/5, but the 3 right answers (#79 hyperfine, #85 selection rule, #92 nuclear recoil) were all guesses, so "really knew" 0/5.

### Missed question 1 — `gr1777-99` (ETS GR1777 #99)
Verbatim from `/Users/Reid Hu/Physics GRE/content/bank/ets-exams.js` (id `gr1777-99`):

Consider an electron in the $n = 4$, $\ell = 1$ state in hydrogen. Which of the following final states can NOT be reached by an allowed transition?
- (A) $n = 3$, $\ell = 2$
- (B) $n = 3$, $\ell = 1$
- (C) $n = 3$, $\ell = 0$
- (D) $n = 2$, $\ell = 0$
- (E) $n = 1$, $\ell = 0$

Correct: (B). Missed on the 2026-10-18 GR1777 mock and again on the 2026-10-23 drill (picked (E) $n=1$, $\ell=0$).

### Missed question 2 — `cpg-x1-85` (Kahn Sample Exam 1 #85)
Verbatim from `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js` (id `cpg-x1-85`):

Which of the following is NOT true about the $2s \to 1s$ transition in the hydrogen atom?
- (A) The dominant decay mode is two-photon emission.
- (B) It violates $\Delta l = \pm 1$.
- (C) It violates $\Delta m = \pm 1$ or $0$.
- (D) It cannot occur in the electric dipole approximation.
- (E) None of these.

Correct: (C). Guessed right on the 2026-10-22 mock; right on the 2026-10-23 drill but flagged as unfamiliar.

### Learner's handwritten review of the 2026-10-23 drill (image, transcribed)
One A4 sheet photographed on the laptop keyboard, two columns, numbered 1–15. Q8 is the $2s\to1s$ question (`cpg-x1-85`); Q9 matches `gr1777-99` by its note (inferred from the handwriting, not from a drill record).

Left column:
- 1\. Different components, electron + tau evolve even without collision or reaction
- 2\. Guessed, don't know why. I don't know the relation between the electric dipole moment of neutron and parity, or other two properties. (Below: partly legible scratch arithmetic — 0.01, 850, 3000, 0.05 × 7, 0.35, × 3 — not transcribed further.)
- 3\. I know there are 3 effects of photon scattering
  - photoelectric: $eV_s = h\nu - \phi$
  - compton scattering: $\frac{1}{E'} - \frac{1}{E} = \frac{1}{mc^2}(1-\cos\theta)$
  - pair production: Dirac Equation
  - dominates from low - medium - high energy respectively
  - Figure: High Energy domination → Pair Production
- 4\. Hand-drawn table, columns "Anti quark", "quark", "typical":
  - Lepton: 0, 0, "e, τ, μ; half integer spin"
  - Baryon: 0, 3, "proton, neutron"
  - Meson: 1, 1, "π, K; integer spin"
- 5\. I don't know why spin-spin coupling doesn't count
- 6\. Integer times of excitation energy
- 7\. recoil conduces the energy (observed) decreasing

Right column:
- 8\. 2s → 1s; n from 2 to 1, $\Delta l = 0$; → $\Delta m = 0$; "it violate the [word unclear: '3rd' or 'Δm'] option literally." "I flagged this question because I am not familiar with the selection rules of transition"
- 9\. Don't know the selection rule.
- 10\. Don't know the derivation of hyperfine structure. Worth a flashcard?
- 11\. $\mu^-$: "meson" struck out, "boson" struck out, → lepton (worth a flash card LoL); an arrow from "electron" points up to "lepton"
- 12\. $L_n = n\hbar = m v r_n$; $r_n = \frac{n\hbar}{mv} \to p_n = \frac{n\hbar}{r_n}$
- 13\. Bose-Einstein; Not follow → Fermion. I don't remember that Neutrinos are Fermions, worth a flashcard
- 14\. No idea
- 15\. The same as problem 7.

### Prior knowledge
- No atomic-physics thread in [[Progress-context]]; no selection-rule row in [[Trap-Log]]. Treat the rules as new.
- Usable foundations from [[Progress-context]]: an odd integrand over a region symmetric under $z\to-z$ integrates to zero ($\rho\propto z$ on a sphere gives $Q=0$; parity transfer stated unaided 2026-10-04, [[2026-09-21-1447 Volume integral of rho from div E]]); angular-momentum addition with $|m|\le S$ ([[2026-10-22-1831 Spin-3-2 multiplet symmetry]]).

### Turn 1 — 2026-10-23 (learner, request relayed by the main GRE session)

> /learn Atomic electric-dipole (E1) selection rules in hydrogen and light atoms, at Physics GRE depth.
> Goal: the student should be able to say why each rule holds, not only recite it, and answer a GRE selection-rule question in under 60 s.
> (Learner's own words on the sheet: Q8 "I flagged this question because I am not familiar with the selection rules of transition"; Q9 "Don't know the selection rule.")

### Tutor

你在手写纸上已经把缺口说清楚了：第 8 题 "not familiar with the selection rules of transition"，第 9 题 "Don't know the selection rule"。所以直接从"为什么"开始。

**起点：只接受一条式子。** 在电偶极近似（electric-dipole approximation，简称 E1）下，光的波长（约 $100\ \mathrm{nm}$）远大于原子（约 $0.1\ \mathrm{nm}$），电子感到的是一个均匀、随时间振荡的电场，微扰（perturbation）是 $H'=e\,\mathbf E_0\cdot\mathbf r\,\cos\omega t$。含时微扰论（time-dependent perturbation theory）给出跃迁速率

$$\Gamma_{i\to f}\ \propto\ \big|\langle f|\,\mathbf r\,|i\rangle\big|^2=\Big|\int\psi_f^*(\mathbf r)\,\mathbf r\,\psi_i(\mathbf r)\,\mathrm d^3r\Big|^2 .$$

选择定则（selection rules）就是一张清单：哪些 $i\to f$ 让这个积分**必然**为零。积分为零的跃迁叫电偶极禁戒（E1-forbidden）。

**你已经会的那一招。** 2026-10-04 你用过：$\rho\propto z$ 在关于原点对称的球上积分，被积函数是奇函数（odd function），所以 $Q=0$。这里是同一招，对象换成波函数。在宇称变换（parity transformation）$\mathbf r\to-\mathbf r$ 下，氢原子波函数 $\psi_{nlm}=R_{nl}(r)\,Y_l^m(\theta,\phi)$ 的径向部分不变（$r$ 不变），角向部分给出

$$\psi_{nlm}(-\mathbf r)=(-1)^l\,\psi_{nlm}(\mathbf r),$$

而算符 $\mathbf r$ 本身变号：$\mathbf r\to-\mathbf r$。

**检验问题：** 被积函数 $\psi_f^*\,\mathbf r\,\psi_i$ 在 $\mathbf r\to-\mathbf r$ 下整体乘上 $(-1)$ 的几次方（用 $l_i$、$l_f$ 表示）？据此，$\Delta l=l_f-l_i$ 取哪些值时，这个积分一定为零？

### Turn 2 — 2026-10-23 (learner)

> 你这个讲的好像太难了吧，GRE是不是用不到这些.

### Tutor

你说得对。GRE 不考那个积分，上一轮的积分推导放下不用。GRE 只考规则本身，加一句话的理由。

**GRE 需要的全部（氢原子，一个电子跃迁）：**
- $\Delta l=\pm1$：$l$ 必须变，而且只能变 1。
- $\Delta m=0,\pm1$。
- $\Delta n$ 任意：$n$ 跳多少都行，$4\to1$ 也行。

**一句话理由：** 光子的自旋（spin）是 1，发射或吸收一个光子，原子的角动量最多改变 1 个单位，所以 $l$ 和 $m$ 最多变 1；另外，发射光子时原子的宇称（parity，波函数在 $\mathbf r\to-\mathbf r$ 下是否变号，等于 $(-1)^l$）必须翻转，所以 $l$ 不能不变。两条合起来就是 $\Delta l=\pm1$。

**60 秒做题法：** 把能级按 $l$ 排成列：

```
  s(l=0)   p(l=1)   d(l=2)   f(l=3)
   4s       4p       4d       4f
   3s       3p       3d
   2s       2p
   1s
```

允许的跃迁只连**相邻两列**。同一列里（s→s、p→p）不行；隔一列（d→s）也不行。高低（$n$）不管。

**检验问题（平行题，计时 60 秒）：** 电子在 $n=3$、$l=2$（3d）态。下面哪个末态**不能**通过允许跃迁到达？
- (A) $n=2$, $l=1$
- (B) $n=4$, $l=3$
- (C) $n=4$, $l=1$
- (D) $n=2$, $l=0$
- (E) $n=5$, $l=1$

请给出选项，并用一句话说理由。

### Turn 3 — 2026-10-23 (learner)

> 选D。因为它的末态L=0，其他的选项都在±1的范围内

### Tutor

**(D) 对。** 理由要改准一点：错的不是"末态 $l=0$"。从 2p 跳到 1s，末态也是 $l=0$，但那是允许的（就是莱曼-α 线，Lyman-α line）。(D) 错在 $\Delta l=l_f-l_i=0-2=-2$，从 d 列隔过 p 列跳到 s 列。做题时每个选项都算一次 $\Delta l=l_f-l_i$，只看这个数是不是 $\pm1$。

**现在看 $2s\to1s$。** 两个态都在 s 列，$\Delta l=0$，同一列，所以电偶极禁戒。"禁戒（forbidden）"的意思是：最快的那条通道（发射**一个**电偶极光子）关了，不是"永远不能发生"。2s 只能走慢得多的通道，最主要的是**同时发射两个光子**（two-photon emission）。理由还是那一句：每个光子翻转一次宇称、带走 1 个单位角动量；两个光子宇称翻两次等于没翻，两个 1 可以合成 0，所以 s→s 可以。代价是速度：2p 态约 $1.6\ \mathrm{ns}$ 就衰变，2s 态约 $0.1\ \mathrm s$，长了约 $10^8$ 倍。这种寿命特别长的激发态叫亚稳态（metastable state）。（这两个寿命是标准数值，不在 Kahn 书中；GRE 只要"2s 亚稳、靠双光子衰变"这句结论。）

$\Delta m$ 这一条：2s 和 1s 都是 $m=0$，$\Delta m=0$，在 $0,\pm1$ 之内，**不违反**。所以 $2s\to1s$ 只违反 $\Delta l$ 一条。

**检验问题：** 一个氢原子处在 3s 态。它能不能一步直接跳到 1s？如果不能，它用允许跃迁回到 1s 的最快路线是什么（写出中间态）？

### Turn 4 — 2026-10-23 (learner)

> 等会儿，有点奇怪，你突然提了同时发射两个光子，这个我知道，因为不可能只发射一个光子，会导致invariant mass and momentum conservation不成立
> 但是你这里提这一件事情的Logic chain?
> 一个氢原子处在3S态，不能直接跳到1S，允许跃迁回1S的最快路线是先调到2P。
> 然后再从二P调到1S

### Tutor

**3s 这题对。** $3s\to2p$（$\Delta l=+1$），再 $2p\to1s$（$\Delta l=-1$），两步都允许。这和 Kahn 第 5 章习题 4 的答案路线一样（[Kahn md, line 5548](/Users/Reid%20Hu/OrbitOS/50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:5548)）。

**我提两个光子的逻辑链：**
1. 2s 是激发态，比它低的只有 1s，所以它迟早要回到 1s。
2. 发**一个**光子的 $2s\to1s$ 被 $\Delta l=\pm1$ 关掉了（同一列）。
3. 于是问题变成"那它怎么回到 1s"。答案是走慢得多的通道，主要是同时发两个光子。通道慢，寿命就长，所以 2s 是亚稳态。
4. Kahn 第 85 题的选项 (A) 考的就是这一句。

**你的理由要改。** "原子不可能只发一个光子"不对：$2p\to1s$ 平常就只发一个光子。你说的动量和不变质量（invariant mass）的论证，只在末态**全是光子**时成立，比如静止的电子-正电子对湮灭（$e^+e^-$ annihilation）：初态总动量为 0，一个光子的动量是 $E/c\neq0$，所以至少要两个光子。原子跃迁的末态是"光子 + 反冲的原子"，反冲的原子带走动量（就是你第 7 题写的 recoil）。所以 2s 不能只发一个光子，原因是选择定则（角动量 + 宇称），不是动量守恒。

**检验问题：** 下面两种情况，哪一种可以只发射一个光子？各用一句话说理由。
- (a) 静止的电子和正电子湮灭。
- (b) 静止的氢原子从 2p 退激到 1s。

### Turn 5 — 2026-10-23 (learner)

> 第一个：不能只发射一个光子，因为它没有多余的recoil nucleon来保证这动量守恒。
> 第二个：静止的氢原子从2p到one s是可以的，因为它含有氢原子核来消化这一部分momentum

### Tutor

**两个都对。** (a) 末态只有光子，没有别的粒子分担动量；(b) 整个原子反冲，质量几乎全在原子核上。上一轮的那条陷阱算改正了。

**第 3 部分：多电子原子（LS 耦合，LS coupling），只记四条。** 多电子原子的状态用光谱项符号（term symbol）$^{2S+1}L_J$ 标记：$S$ 是总自旋，$L$ 是总轨道角动量（字母 S、P、D、F 表示 $L=0,1,2,3$；这里的字母 S 指 $L=0$，和总自旋 $S$ 不是一回事），$J$ 是总角动量。例：$^3P_1$ 表示 $S=1$、$L=1$、$J=1$。

- 宇称翻转：跳的那个电子仍然 $\Delta l=\pm1$。
- $\Delta S=0$：光的电场只推电子的位置，不碰自旋。所以在氦原子里，单态（singlet，$S=0$）和三重态（triplet，$S=1$）之间几乎没有光学跃迁，两套光谱各自独立。
- $\Delta L=0,\pm1$，但 $L=0\to L=0$ 不行。
- $\Delta J=0,\pm1$，但 $J=0\to J=0$ 不行。

和单电子相比只变了一处：总 $L$ 可以不变。$L$ 是几个电子的角动量合起来的，跳的那个电子变了 1，合起来的总值可能还是原来那个数。$0\to0$ 不行，理由还是"光子带走 1"：0 和 1 合起来只能得到 1，得不到 0。

**检验问题（计时 30 秒）：** 设下面都是轻原子里宇称相反的两个态。哪一个是允许的电偶极跃迁？其他三个各违反哪一条？
- (A) $^3P_1\to{}^1S_0$
- (B) $^1P_1\to{}^1S_0$
- (C) $^1S_0\to{}^1S_0$
- (D) $^3D_3\to{}^3P_1$

### Turn 6 — 2026-10-23 (learner)

> (Image: a screenshot cropped from the Turn 5 tutor text, showing one line: "$^3P_1$ 表示 $S=1$、$L=1$、$J=1$。")
> 为什么L不会是0呢

### Tutor

**$L$ 是从字母直接读出来的，不是算出来的。** 光谱项符号 $^{2S+1}L_J$ 中间那个字母**就是** $L$：S、P、D、F 依次表示 $L=0,1,2,3$。$^3P_1$ 的字母是 P，所以 $L=1$，这是记号的定义。

**如果你是想用 $J$ 和 $S$ 反推 $L$：** 角动量是矢量相加，不是数字相加。$L$ 和 $S$ 合成的 $J$ 可以取 $|L-S|,\ |L-S|+1,\ \dots,\ L+S$。10 月 22 日你用过同一条规则：两个自旋 ½ 合成，得到 $S=0$（单态）或 $S=1$（三重态），而不只是 $\frac12+\frac12=1$。所以知道 $S=1$、$J=1$，并不能确定 $L$：
- $L=0$：$J$ 只能是 $1$，写作 $^3S_1$（氦原子的 $2\,^3S_1$ 就是这样一个态）。
- $L=1$：$J=0,1,2$，写作 $^3P_0$、$^3P_1$、$^3P_2$。
- $L=2$：$J=1,2,3$，写作 $^3D_1$、$^3D_2$、$^3D_3$。

这三组里都有一个 $S=1$、$J=1$ 的态；把它们区分开的只有中间的字母。

**检验问题（计时 30 秒）：** 设下面都是轻原子里宇称相反的两个态。哪一个是允许的电偶极跃迁？其他三个各违反哪一条（$\Delta S=0$；$\Delta L=0,\pm1$ 且 $0\not\to0$；$\Delta J=0,\pm1$ 且 $0\not\to0$）？
- (A) $^3P_1\to{}^1S_0$
- (B) $^1P_1\to{}^1S_0$
- (C) $^1S_0\to{}^1S_0$
- (D) $^3D_3\to{}^3P_1$

### Turn 7 — 2026-10-23 (learner)

> (Image: photo of a handwritten sheet, transcribed.)
> Top of the sheet, earlier work from the 2026-10-22 circular-orbit session, partly cut off: $\frac{m}{r}\cdot\frac{l^2}{m^2r^2}=\frac{k}{r^2}$ (first factor partly cut), $\frac{l^2}{mr}=k$, $r_0=\frac{l^2}{mk}$.
> $^{2S+1}L_J$ $^3P_1$; $S=1$, $L=1$, $J=1$
> $^{2S+1}L_J$ $\Delta S=0$
> $\Delta L=0,\pm1$, but no $0\to0$
> $\Delta J=0,\pm1$, but not $0\to0$
> $\Delta S=0$ $^{2S+1}L_J$
> (A) $^3P_1\to J=1, S=1, L=1$; $^1S_0\to J=0, L=0, S=0$; $\Delta S\neq0$. (A small mark like ", P'" to the right, unclear.)
> (B) $^1P_1\to J=1, L=1, S=0$; $^1S_0\to J=0, L=0, S=0$; correct
> (C) prohibition of $0\to0$
> (D) $^3D_3\to J=3, L=2, S=1$; $\Delta J=2$, violate's $\Delta J=0,\pm1$

### Tutor

**四个全对。** (B) 是唯一允许的；(A) 违反 $\Delta S=0$；(D) 违反 $\Delta J=0,\pm1$（$\Delta J=-2$）。(C) 再补半句：$^1S_0\to{}^1S_0$ 同时是 $L$ 的 $0\to0$ 和 $J$ 的 $0\to0$，两条都违反。你先把每个符号拆成 $S$、$L$、$J$ 再比较，这就是对的做法。

**第 4 部分：三道检验题。** 这三道针对你的两道错题（`gr1777-99`、`cpg-x1-85`）和今天出现的陷阱，但不是原题。每题限时 60 秒。每题写出选项，并用一句话说理由。我在你全部作答后统一批改。

**检验题 1.** 氢原子里一个电子处在 $n=5$、$l=3$（5f）态。它通过**一次**允许的电偶极跃迁可以到达下面哪个态？
- (A) $n=4$, $l=3$
- (B) $n=3$, $l=1$
- (C) $n=1$, $l=0$
- (D) $n=4$, $l=2$
- (E) $n=2$, $l=0$

**检验题 2.** 关于氢原子的 2s 态，下面哪一句**不对**？
- (A) $2s\to1s$ 的 $\Delta m=0$，满足 $\Delta m$ 规则。
- (B) 处在 2s 的原子比处在 2p 的原子存活的时间长得多。
- (C) $2s\to1s$ 不能只发一个光子，因为一个光子无法保证动量守恒。
- (D) 2s 回到 1s 主要靠同时发射两个光子。
- (E) $2s\to1s$ 只在电偶极近似下被禁戒，实际上仍会发生。

**检验题 3.** 下面哪一个氢原子跃迁是允许的电偶极跃迁？
- (A) $3d,\ m=2\ \to\ 2p,\ m=0$
- (B) $3p,\ m=1\ \to\ 1s,\ m=0$
- (C) $3d,\ m=-1\ \to\ 1s,\ m=0$
- (D) $4p,\ m=1\ \to\ 3p,\ m=0$
- (E) $2s,\ m=0\ \to\ 1s,\ m=0$

### Turn 8 — 2026-10-23 (learner)

> (Image: photo of a handwritten sheet, transcribed.)
> 1. single electron: $\Delta l=\pm1$, $\Delta m=0,\pm1$; (D)
> 2. 2s, $n=2$, $l=0$
>   (A) correct, $\Delta m=0$ ($\Delta l=0$)
>   (B) correct, transition probability is much smaller
>   (C) ~~correct~~ incorrect, it has a core → (C)
>   (D) correct, $\Delta l=0$ → cancel with each other in terms of angular momentum
>   (E) correct
> 3. $\Delta l=\pm1$, $\Delta m=0,\pm1$
>   (A) 3d, $n=3$, $l=2$ → $n=2$, $l=1$, $\Delta m=2$ ✗
>   (B) $\Delta m=1$ ✓, p→s, $\Delta l=1$ ✓
>   (C) d→s, $\Delta l=2$ ✗
>   (D) p→p, $\Delta l=0$ ✗   (E) s→s, $\Delta l=0$ ✗

### Tutor

**三道全对（3/3）。**
- **题 1：** (D)，5f→4d，$\Delta l=-1$。
- **题 2：** (C) 不对。你的理由 "it has a core" 正是要点：原子核随整个原子反冲，承担动量。(C) 把禁戒的原因说成动量守恒，真正的原因是 $\Delta l=0$。你在 (D) 旁写的"两个光子的角动量互相抵消"也对。
- **题 3：** (B)，$\Delta l=-1$、$\Delta m=-1$。四个干扰项各自违反哪条规则，你都找对了。一处记号：p→s 你写 $\Delta l=1$，d→s 写 $\Delta l=2$；按定义 $\Delta l=l_f-l_i$，应是 $-1$、$-2$。判断只看绝对值，所以不影响答案。

**这一节你现在能做到：**
- **单电子：** $\Delta l=\pm1$，$\Delta m=0,\pm1$，$\Delta n$ 任意。理由：光子自旋为 1，且宇称必须翻转。做题只算 $\Delta l=l_f-l_i$，不看 $n$。
- **$2s\to1s$：** $\Delta l=0$，电偶极禁戒，但不是不可能。它靠双光子衰变，所以 2s 是亚稳态。不能只发一个光子的原因是选择定则，不是动量守恒（原子反冲可以承担动量）。
- **多电子（LS 耦合）：** 宇称翻转，$\Delta S=0$，$\Delta L=0,\pm1$，$\Delta J=0,\pm1$，$L$ 和 $J$ 都不许 $0\to0$。先把光谱项符号拆成 $S$、$L$、$J$，再逐条比较。

**下一步：**
- 过几天在 Prep Studio 冷做一次 `gr1777-99` 和 `cpg-x1-85`，检查能否在 60 秒内靠规则答对，而不是靠记住答案。
- 你手写纸上的第 2 题（中子电偶极矩和宇称）用的是同一个事实：电偶极矩是矢量，宇称变换下变号。可以作为下一个短 `/learn` 话题。

Session closed 2026-10-23.
