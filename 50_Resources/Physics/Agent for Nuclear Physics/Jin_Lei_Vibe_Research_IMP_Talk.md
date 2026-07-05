---
type: resource
status: processed
source_type: talk-slides
platform: jinlei.fewbody.com (Slidev)
author:
  - Jin Lei (金磊, Tongji University)
title: Vibe Research 在直接核反应理论中的实战 + 把 AI 当研究生培养（近物所·3小时）
source_url: https://jinlei.fewbody.com/talks/imp-talk/
published: 2026-06-23
retrieved: 2026-07-04
venue: Institute of Modern Physics (IMP), CAS, Lanzhou
topic:
  - Vibe Research
  - LLM-assisted research workflow
  - AI agent knowledge base
  - Claude Code
  - direct nuclear reactions
  - CDCC emulator
  - reduced basis methods
tags:
  - Vibe-Research
  - Claude-Code
  - Knowledge-Base
  - Nuclear-Reactions
  - Emulator
  - Expert-Filter
related:
  - "[[Vibe_Coding_9_Pre-Dev_Steps_5_In-Dev_Principles]]"
  - "[[Anthropic_How_We_Built_Our_Multi-Agent_Research_System]]"
  - "[[Claude_Code_Memory_Solutions]]"
  - "[[Claude_MD_Complete_Guide]]"
  - "[[Context Window]]"
  - "[[Agent Teams]]"
---
# Vibe Research 在直接核反应理论中的实战 + 把 AI 当研究生培养

> [!info]- Retrieval note (non-source material)
> - **Source:** Slidev HTML deck at https://jinlei.fewbody.com/talks/imp-talk/ — 3-hour talk given at IMP (近代物理研究所, the user's institute) on 2026-06-23 by Jin Lei (金磊, 同济大学物理科学与工程学院, direct nuclear reaction theory).
> - **Retrieved:** 2026-07-04 via Slidev print mode (`?print`), all 65 slides extracted from DOM text.
> - **Cleanup applied (formatting only, no content dropped):** KaTeX formulas appeared triple-rendered in raw extraction (LaTeX source + rendered text + fallback) — deduplicated to single `$...$` LaTeX. Comparison tables (slides 19, 21, 59, 62) reconstructed from linearized text. Bullet structure restored where `innerText` flattened it.
> - **Not captured (visual-only):** slide 20 git-commit timeline screenshot, slide 41 live-demo screen recording, slide 42 PDF preview of the generated review draft, interactive knowledge-graph links.

## Slide 1 — Title

**Vibe Research 在直接核反应理论中的实战**
*LLM-Assisted Research in Low-Energy Nuclear Theory*

Jin Lei (金磊) · 同济大学物理科学与工程学院 / Tongji University
中国科学院近代物理研究所 · 2026 年 6 月 23 日

Dec 2025 – Apr 2026 · 16 papers · 11 on arXiv · 4 published in Phys. Rev. C + 1 published in Phys. Lett. B + 1 accepted in Phys. Rev. C

> ⚠ 免责声明: 建议尚不具备独立科研能力的低年级研究生现在离场. 本报告的内容如果被没有 Expert Filter 的人照搬, 大概率会毁掉整个科研生涯.

---

# 实战篇 · Vibe Research in Action

## Slide 2 — 实战篇开篇

四个月十六篇论文背后的 LLM 辅助研究工作流：先看做出了什么

## Slide 3 — 一个不对称的对照实验

**2024（~3 months）**
- 单通道散射 emulator
- 复杂度: 1 channel
- 工具: GPT-4 网页版
- 执行者: 同济博士生 (同济本校保研, GPA top), GPT-4 辅助
- [Liu, Jin Lei, Ren, Phys. Lett. B 858, 139070 (2024)]

**2025-12（4 days）**
- CDCC reduced-basis emulator
- 复杂度: 37 channels, 18 parameters
- 执行者: 我 + Claude Code CLI (agentic), 没有学生参与
- [Jin Lei, Phys. Rev. C 113, 044610 (2026)]

同济保研博士生 3 个月 vs 我 + AI 4 天. 复杂度还高了一个量级.
- 学生: 反馈慢、不可控、需要情绪价值、push 狠了觉得你是法西斯.
- AI: 花钱, tokens 够, 立刻出结果, 情绪价值还拉满.

## Slide 4 — 计算物理的真实瓶颈

一个计算物理项目的智力内核通常在几天到几周内结晶: 一个物理想法 · 一个新算法 · 一个数值不稳定性的来源 · 一个物理诠释

把这个内核变成一篇发表的论文通常需要几个月到几年: 内存分配 debug · 库文档查阅 · 图表格式调整 · 论文撰写 · 审稿回复

一个长期被回避的事实: 一个研究者一辈子能做完的物理远少于他能想到的物理. 真正的约束从来不是"想什么", 而是"做完什么". Implementation overhead 占据了总工作量的绝大部分. 智力内核只是少数份额.

## Slide 5 — 直接反应: 一个极端案例

- **理论骨架: 几十年前已定型** — DWBA · ADWA · CDCC · R-matrix · Faddeev · IAV breakup. 形式框架在 1960s 到 1990s 之间全部成形. 此后: 完善, 而非突破.
- **实验数据: 增长速度超过理论家的处理能力** — FRIB · RIKEN · GANIL · HIAF · FAIR · NSCL. 全球 RIB 设施产出反应数据的速度远超理论端的消化能力.
- **理论家: 停滞或萎缩** — 低能核理论博士产出 20 年来持平. 资深理论家陆续退休. 可用于将数据转化为物理的有效人力: 持平或下降.
- **结构性后果:** 可以问的物理远多于能做完的物理. 传统的解法("培养更多学生")回报递减, 二十年来越填越窄.

## Slide 6 — 两个极端, 都错了

**怀疑派** — "LLM 摧毁科学严谨性." 虚构引用 · 错误物理 · 随机鹦鹉 · 不可验证.
- 对的: LLM 确实会犯错, 需要人工验证.
- 错的: 把"需要监督"等同于"不能使用".

**热情派** — "AI Scientist 能做端到端研究." 自主生成论文 · 每篇 \$15 · 不需要研究者. (Sakana AI, 2024)
- 对的: LLM 能起草代码和文章.
- 错的: 把"能起草"等同于"能决策".

**中间立场: Vibe Research = 协作, 不是自动化.** 人的判断始终居中. LLM 处理摩擦. Expert Filter 不可简化.

## Slide 7 — 先交代一下: "Vibe" 从哪来?

> "There's a new kind of coding I call vibe coding, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
> — Andrej Karpathy, 2025 年 2 月 (OpenAI 联合创始人 · 前 Tesla AI 负责人)

Vibe Coding 的原味 (消费级): 自然语言描述需求 (语音也行) · 接受 AI 生成的代码, 不逐行审读 · 出错就把报错丢回去继续改 · 写个周末小工具, "跑得起来就行"

一年内进入主流词汇: Collins 英语词典 Word of the Year 2025 · Merriam-Webster 2025 年 3 月收录. 一条推特 → 行业术语.

**但科研不能照抄:** "forget the code" 在消费级 app 里可行, 在 Phys. Rev. 上不可行. 物理错误不会报错, LLM 会自信地给你一个看起来对的错结论. 所以今天讲的不是 Vibe Coding, 是 Vibe Research — 借 Karpathy 的加速直觉, 但把"放弃理解代码"换成"放弃手写代码"; 物理判断必须由研究者亲手把关.

## Slide 8 — Vibe Research: 精确定义

**人的判断力 × LLM 实现速度**

人保留的 (不可替代): 问题选择 (解决什么) · 物理判断 (这合不合理) · 数值直觉 (这对不对劲) · 结果解释 (这意味着什么) · 最终筛选 (什么进论文)

LLM 加速的: 文献综合 (周 → 天) · 样板代码 (天 → 秒) · 算法实现 (周 → 小时) · Debug (假设和诊断在秒级完成) · 图表和初稿 (天 → 小时) · 审稿回复 (天 → 小时)

> "Vibe Research 不是让 AI 替你做物理. 是把物理之外的一切交给 AI, 再把省下的时间用来做更多的物理."

## Slide 9 — Expert Filter (专家过滤器)

- 传统流程: Idea → 几个月 coding → 结果. 迭代缓慢. 90% 时间花在 implementation 上.
- AI 协作流程: Idea → AI coding (小时) → Expert Filter → 结果. 快速迭代. 90% 时间花在判断上.

**悖论: LLM 不是民主化研究. Expert Filter 放大专家优势. 非专家得到同样的输出, 但无法区分信号与噪声.**

## Slide 10 — 案例一: DBMM, 问题

**Direct Boundary Matching Method** — 核散射问题有一个长期存在的技术痛点: 边界条件处理是繁琐的.

现有的绕行方案:
- **R-matrix method** · Bloch operator 保证厄米性, 然后两步匹配 Coulomb 函数
- **Complex Scaling** · 旋转 $r \to r e^{i\theta}$ 使散射态变为 $L^2$ 衰减函数
- **Lorentz Integral Transform** · 通过 Lorentzian kernel 将连续谱转为束缚态, 再反演

共同代价: 每种方法都需要额外的形式化机器 (Bloch operator, 坐标旋转, kernel 反演). 代码复杂度和推导长度都增加. 应用到新系统意味着每次都要重新打通整套框架.

根本原因: 散射态的振荡和不衰减渐近行为与束缚态的 $L^2$ 表示相冲突.

## Slide 11 — 案例一: DBMM, 简洁的想法

**把出射波边界条件直接写进矩阵方程的最后一行.** 不需要 Bloch operator. 不需要坐标旋转. 不需要 kernel 反演.

设定: 径向 Schrödinger 方程在 $[0, R]$ 上, 用 Lagrange-Legendre 基 $\hat f_j(x)$ 在 Gauss-Legendre 网格点上展开.

内部行 $i = 1, \dots, N-1$: $\sum_j M_{ij} c_j = b_i$, 标准离散化 Schrödinger.

最后一行 ($i = N$) 直接编码出射波边界条件:
$$\sum_{j=1}^N B_j c_j = 0, \quad B_j = \left.\frac{d\hat f_j}{dx}\right|_{x=1} - R\gamma_s \hat f_j(1), \quad \gamma_s = k\frac{H_\ell^{+\prime}(\eta, kR)}{H_\ell^+(\eta, kR)}$$

一次矩阵求解. 无需后处理匹配步骤.

形式上的推论: 矩阵的每一行对应一个清晰的物理陈述. 内部行说 "Schrödinger 在此处成立." 最后一行说 "出射波在 $r = R$ 处成立." 形式本身自解释. 直接推广到耦合道, 不需要任何额外技巧.

## Slide 12 — 案例一: DBMM 验证

p + ¹²C, $E_{\mathrm{lab}} = 30$ MeV, 与 Numerov 对照:
- $|S_\ell|$ 和 $\arg(S_\ell)$ 随 $\ell$ 变化
- 复 $S_\ell$ 平面上的 Argand 图
- 径向波函数 $\psi_\ell(r)$, $\ell = 0, 5$

结论: $|S_\ell|$ 与 Numerov 符合到 $2.5 \times 10^{-5}$, 相位符合优于 $0.01°$, 覆盖所有分波. 波函数在每个网格点上吻合, 从内部到渐近区. 矩阵的每一行对应一个清晰的物理陈述, 这种自解释结构正是让 POD-Galerkin 在案例二中保持简洁的关键.

*Jin Lei, Phys. Rev. C 113, 024614 (2026)*

## Slide 13 — 案例二: CDCC 计算瓶颈

**CDCC (Continuum-Discretized Coupled-Channels):** 直接反应的主力方法. 将三体散射转化为有限维耦合道. 严格处理 breakup 对弹性和反应截面的反馈.

一次现代 CDCC 计算: $N_{\mathrm{ch}} \sim 30$ 到 $50$ 个耦合道 · $J_{\max} \sim 30$ 个分波 · $\sim 10^4$ 维复线性系统 · 单次完整计算: 几十分钟到几小时

对 Bayesian UQ 来说, 这是一堵墙. MCMC 和 nested sampling 需要 $10^4$ 到 $10^6$ 次 likelihood 评估. 几十分钟乘以几十万次等于 $O(10^6)$ CPU-hours. 不是慢, 是实际上不可行.

## Slide 14 — 什么是 Emulator?

一句话: 精确求解器的快速近似代理 (fast surrogate). 用少量精确解"学"出低维表示, 使新参数点的计算从分钟级压缩到毫秒级.

**Offline (一次性投入):** 在参数空间采样 $N_s$ 个点 → 每个点运行完整求解器 → 从 $N_s$ 组精确解中提取低维结构. 代价高, 但只做一次.

**Online (每次新参数):** 投影到低维空间 → 求解 $n_b \times n_b$ 小系统 ($n_b \ll N$) → 重建完整解. 毫秒级, 可重复 10⁶ 次.

为什么核物理需要它? Bayesian UQ 需要 $10^4$–$10^6$ 次 likelihood 评估. Emulator 让每次评估从 30 min → 30 ms, 使贝叶斯推断从不可行变为常规操作.

## Slide 15 — 核物理 Emulator: 三条路线

1. **Eigenvector Continuation** — Furnstahl, Garcia, Millican & Zhang (2020). 不同参数点的精确解构成非正交变分基, 通过 Kohn 变分原理求 K-matrix. 在 NN 散射和 $\alpha$-²⁰⁸Pb 中验证. 核结构领域 (NCSM) 也广泛使用.
2. **POD-Galerkin / RBM** — Liu, Jin Lei & Ren, PLB (2024); Jin Lei, PRC 113, 044610 (2026) ← 今天的案例. SVD 提取主模式 (proper orthogonal decomposition), Galerkin 投影将耦合方程降维. 源自计算流体力学, 代数结构清晰, 天然适配矩阵求解器.
3. **机器学习代理** — GP emulators; BANNANE (2026). Gaussian process, 神经网络等统计模型拟合输入-输出映射. BANNANE 首次实现跨核素 $(Z, N)$ 仿真, 突破连续参数限制.

共同点: 都不是 black box. 都利用物理方程对参数的连续依赖性, 用数学降维而非暴力拟合.

## Slide 16 — 案例二: 基于 DBMM 的 POD-Galerkin

**Offline (一次性):** 在采样参数处求解 $N_s$ 次完整 CDCC → 将 snapshot 收集到矩阵 $C_{\mathrm{snap}}$ → SVD 截断, 保留 $n_b$ 个主要模式 → 预计算与参数无关的矩阵.

**Online (每组新参数):** 在 $\boldsymbol\theta_*$ 处构建势能矩阵 → Galerkin 投影到 $n_b$ 维基上 → 求解 $n_b \times n_b$ reduced system → 重建完整解, 输出 $d\sigma/d\Omega$.

基石: reduced system 继承了 DBMM 的矩阵结构. DBMM 不是一个平行项目, 而是让 POD-Galerkin 在耦合道问题上保持简洁的数值基础.

## Slide 17 — 案例二: 测试问题

体系: $d + {}^{58}\mathrm{Ni}$ 弹性散射和 breakup, $E_d = 21.6$ MeV

**物理设定:** 氘核作为 $n+p$, 连续谱离散化为 $s, p, d$ 波到 12 MeV · $J_{\max} = 30$ 个分波, $N_{\mathrm{ch}} = 37$ 个耦合道 · 每个 $J$ 的矩阵大小 $\sim 5000 \times 5000$ 复数

**参数空间:** 18 个光学势参数同时变化 (9 个 $p + {}^{58}\mathrm{Ni}$, 9 个 $n + {}^{58}\mathrm{Ni}$) · Woods-Saxon volume, surface 和 Coulomb · 在 KD02 全局参数化基础上变化 10% 到 50% [Koning-Delaroche, NPA 713, 231 (2003)]

**训练:** $N_s = 200$ 个样本, Latin hypercube 采样 · 每个 $J$ 独立 reduced basis ($n_b \sim 5$ 到 $50$, 随 $J$ 变化) · SVD 容差 $\epsilon_{\mathrm{tol}} = 10^{-6}$ · Offline 代价 ≈ 11 小时, 48 核 (Xeon Gold 6248R). 摊到 $10^5$–$10^6$ 次 Bayesian 评估上, offline 代价可忽略.

**为什么这是真正的测试:** 18 维同时变化的参数空间正是 naive surrogate 方法 (RBF, 少参数 EIM) 崩溃的区域. 也是 halo nuclei 光学势 UQ 真正需要的维度.

## Slide 18 — 案例二: 结果

**220× 加速, 亚 0.1% 精度**

- 分波弹性 $\sigma_J$ 随 $J$ 变化, 5 组测试. Exact (黑) 与 emulator ($N_s=200$ 蓝, $N_s=400$ 红) 完全重合.
- $|S_{11}^J|$ 相对误差随 $J$ 变化. 大多数 $J$ 低于 0.1%, 典型 $10^{-4}$ 到 $10^{-2}$ %.

结论: 对 5 组独立测试参数, 37 channels, 18 parameters: emulator 在分波截面, S-matrix 元素, 波函数系数 $c_1(r)$ 和角分布上与完整 CDCC 吻合. 总截面误差: 0.005 到 0.043 %. 时间: 6.5 s → 30 ms 每分波, ≈220× 加速.

## Slide 19 — 案例二: 外部对比

同一时间窗口, 同一 LLM 时代, 同一子领域:

| | Catacora-Rios et al. | Liao et al. | This work |
|---|---|---|---|
| arXiv | 2512.08097 | 2512.09429 | 2512.17687 |
| Method | Petrov-Galerkin + EIM (on FRESCO) | Eigenvector Continuation, RBM (on CCFULL) | POD + Galerkin + DBMM |
| Target | ⁴⁸Ca / ²⁰⁸Pb inelastic (n,n') | ¹⁶O + Sm, W sub-barrier fusion | $d + {}^{58}$Ni, full CDCC |
| Channels | 2 to ~5 | 2, 3, 4 (three systems) | 37 |
| Parameters | 10 (WS + one $\beta$) | 2 ($\beta_2$, $\beta_4$) | 18 (full OP) |
| Speedup | ~30× | 200 to 400× | ~220× |
| Accuracy | ~1% median | matches exact curves | < 0.1% |

同样四个月. 同一 LLM 时代. 同一子领域. 产出截然不同. **差别不在谁能用 LLM. 所有人都能用. 差别在工作流.**

## Slide 20 — 那四天

Git commit 历史, 2025 年 12 月 16 日至 19 日. 时间线显示: 设计文档 → 核心实现 → 测试与优化 → 图表生成 → 论文提交. 四个自然日. 几千行代码. 每个 prompt, 每次代码迭代, 每个 debug 步骤都在本地 git 历史里. *(视觉内容: commit timeline 截图, 未捕获)*

## Slide 21 — 内部对比

2024 vs 2025: 同济保研博士生 vs 我 + AI

| | 2024 项目 | 2025 项目 |
|---|---|---|
| 内容 | 单通道散射 emulator | 耦合道 CDCC emulator |
| 通道数 | 1 | 37 |
| 参数数 | 少量 | 18 |
| 复杂度 | 基线 | ~10× 更难 |
| 执行者 | 博士生 (同济本校保研, GPA top) + GPT-4 网页版 | 我 + Claude Code CLI (agentic) |
| 工作模式 | 学生写代码, 复制粘贴问 LLM | LLM 直接写代码、运行、调试提交 |
| 用时 | ~3 个月 | 4 天 |
| 加速 | 1× | ~20× |
| 发表 | Phys. Lett. B 858, 139070 | Phys. Rev. C 113, 044610 (2026) |

复杂度 × 10, 时间 ÷ 20, 等效加速 ≈ 200. 同一套物理. 同一个导师. 变的是谁在写代码.

## Slide 22 — 不是偶然

4 个月 16 篇论文, 3 个子领域, 5 位合作者:

- **数值方法与求解器 (5):** DBMM 2512.07111 ⭐PRC · RB emulator CDCC 2512.17687 ⭐PRC · HPRMAT GPU R-matrix 2512.11590 · ECS PINN scattering 2602.04553 · BiLNN global optical model 2512.22500
- **反应理论与机制 (6):** Coherent Absorption 2601.08245 w/ Liu, Ren · Deletion Does Not Measure 2603.24253 w/ Liu · Exact CC Green function 2604.00471 w/ Liu, Ren · Channel couplings redirect 2604.05600 w/ Liu, Ren · Knockout quenching 2602.12690 · IAV breakup generalization draft
- **统计推断与 EFT (3):** Intrinsic Info Limit OP draft · Bayesian Calibration draft w/ Furnstahl · Info Geometry of EFT draft w/ Hu, Phillips, Furnstahl

**工作流可泛化.** 不只是一个方向上多发论文, 而是横跨纯理论 (Green function), 计算工具 (GPU solver), 统计方法 (Bayesian calibration), EFT (information geometry). 三个子领域, 五位合作者, 同一条 pipeline.

## Slide 23 — LLM 在哪里失败: Coulomb phase 的故事

在开发 DBMM 期间, Claude 曾生成了一段 Coulomb phase-shift 符号约定错误的代码.

- **LLM 的表现:** 代码整洁, 注释完整, 数值不崩溃, 自信地声称"已对照标准约定验证过".
- **我怎么发现的:** 跑 benchmark, 发现低分波偏了约 $\pi$, 几分钟内知道问题在哪. 因为我知道物理正确的 Argand 图长什么样.
- **反事实:** 如果我是一个对 Coulomb phase 约定不熟的学生, 我会接受那个自信的断言, 继续工作两到三天, 然后在某个下游结果明显不对时才回头. 那两三天就白费了.

这就是 Expert Filter 在起作用. **LLM 的错误不是随机 bug, 而是自信且看起来合理的错误.** 只有领域知识能过滤它们. 这决定了谁能安全地使用 vibe research.

## Slide 24 — 四种失败模式

1. **虚构引用.** LLM 生成看似合理但不存在的 citation. 期刊名对, 作者名对, 年份接近, DOI 格式正确, 但论文不存在. 每条 citation 必须手工验证. 这不能外包.
2. **自信的错误.** LLM 不标注不确定性. 错误代码和错误推导的语气与正确的完全一样. Coulomb phase 的故事就是如此. 只有领域知识能过滤.
3. **过度工程化.** LLM 偏好复杂方案 (可能因为训练数据中复杂代码库过度代表). 它会提议 design pattern, 抽象层, 不必要的灵活性. 简洁性必须由人主动强制执行.
4. **上下文漂移.** 即使有长 context, LLM 也会遗忘早期的设计决定, 在 session 后期产生不一致. 需要显式的 session 管理, 关键约束需周期性重申.

## Slide 25 — AI 辅助研究的五条原则

1. **一切纳入版本控制.** Git 历史 (包括 commit messages) 作为可重复性和可追溯性的保障. 所有代码, prompt, 迭代都保留.
2. **一切都要验证.** LLM 输出视为需要人工验证的草稿. 代码, citation, 方程, 数值结果全部过关.
3. **保存对话记录.** 当 LLM 交互包含实质性科学讨论 (方法权衡, debug 推理) 时, 将 log 存档作为研究记录的一部分.
4. **披露 AI 辅助.** 在论文和致谢中明确说明: 哪个 LLM, 哪个环节, 谁验证的. 透明度让学术社区自行校准信任.
5. **执行同样的严谨标准.** AI 辅助的论文应满足与传统工作同样的审稿标准. 加速不是降低标准的理由.

这五条不是 best practices 提案. 是我每天在做的事.

> ⚠ 前提: 你必须已经具备独立科研能力. Vibe research 放大的是已有的判断力, 不是替代它. 如果你还不能独立判断一个结果对不对, LLM 只会帮你更快地生产无法自我纠正的错误. 这与年级无关 — 有些高年级研究生同样缺乏这种判断力. 没有 Expert Filter 的 vibe research 不是加速器, 是学术垃圾生产线.

## Slide 26 — Vibe Research 作为基础设施

**是 pipeline, 不是用法.** 16 篇论文不是 16 次即兴发挥. 每篇都通过同一条 pipeline. 下面是我实际使用的 skill 工具箱. 个人品味的蒸馏, 不可复制.

**规划 · 档案**
- `research-planning` — 每个项目的入口. 生成 CLAUDE.md (祈使式项目规范) + README.md + TODO.md (Phase 0 文献 → Phase 4 论文, 带 checkboxes).
- `research-profile` — 个人研究档案 wiki. 项目 / 论文 / 想法 / 失败 / 方法 / 合作者结构化互链, 自动注入每个新 session.
- `todo` — 跨 session 任务追踪. "每天结束时, 更新所有 md, commit push."

**文献 · Debug**
- `literature-wiki` — 个人文献知识库. 读过的每篇论文结构化互链, 可跨文献查询、发现矛盾、做综合. (关系图谱: 1301 节点 · 5814 链接)
- `literature-search` — 对接 INSPIRE-HEP / arXiv / CrossRef / Semantic Scholar 实时核对, 先查 literature-wiki, 再补外部发现.
- `debug-physics-first` — Expert Filter 自动化. Rule Zero: 在任何复杂假设之前先做 5 行 invariance 测试. 对称性是 ground truth.

**写作与报告**
- `prc-writing`, `prl-writing` — 期刊专用起草, INSPIRE-HEP 检索引用, 严格遵守格式和风格.
- `review-writing` — Hallmarks-style 综述框架, literature-wiki 优先的文献支撑.
- `slidev-talk` — 这份 slides 就是用这个 skill 生成的. 房间里的 meta-evidence.

关键观察: Vibe Research 不是一种使用方式, 而是一套基础设施. "4 个月 16 篇" 是一条 pipeline 跑了 16 次, 不是 16 次独立的即兴创作. 四个月来 pipeline 一直在自我升级.

## Slide 27 — 从直接反应到整个核物理

案例是直接反应的. 结构性诊断不是.

| 子领域 | 框架成熟度 | 瓶颈 |
|---|---|---|
| Ab initio 结构 | NCSM, IMSRG, CC, Gorkov 框架成熟 | basis 和 channel scaling |
| 大基壳模型 | 形式成熟 | Hamiltonian fitting + Lanczos 运行时间 |
| 核天体物理网络 | r-process/rp-process 成熟 | rate 汇编 + 不确定性传播 |
| 裂变与聚变动力学 | TDHF/TDDFT 成熟 | adiabatic 和 dynamic coupling 通量 |
| EDF 泛函开发 | DFT 框架成熟 | 参数 fitting + validation |

**共同结构:** 理论骨架几十年前已定型, 数据持续增长, 理论家人数停滞. 所有方向的真正约束都是"做不完", 而非"想不出".

**共同机遇:** 当 implementation 的摩擦在每个子领域同时下降, 那些因"人手不够"而被集体搁置的问题第一次变得可以完成.

## Slide 28 — 留给这个房间的问题

核物理长期被称为一门"成熟"的学科, 言外之意是它的黄金时代已经过去. 但"成熟"从来不是指物理问题都被回答了. 而是指这个领域没有足够的人去回答它们.

如果这个领域产出的真正约束从来不是想象力而是劳动力, 那么当一个放大劳动力的工具第一次出现时, 这个领域面对的不是"多几篇论文", 而是整个学科的重新定位. 核物理会继续作为一门越来越精致的守成学科, 还是会在我们这一代人手里, 重新成为一个主动设问的前沿, 在低能量子多体、元素起源和 Standard Model 精密检验上?

我四个月的 16 篇论文不是答案. 只是一个早期证据. 它已经在一个子领域开始了. 剩下的问题是, 它会不会从这个房间扩散到核物理的每一个角落. 这个问题先留在这里 — 接下来，我给你看这件事是怎么做出来的。

## Slide 29 — 给年轻研究者

> ⚠ 免责声明: 以下建议仅针对已具备独立科研能力的研究者 — 能独立判断结果的物理合理性, 能识别 LLM 的自信错误, 能对自己的论文负全责. 与年级无关: 不具备这些能力的研究生使用 vibe research 工作流, 大概率只会更高效地产出无法自我纠正的学术垃圾. 先把 Expert Filter 练出来, 再谈加速.

今天就能开始做的三件事:
1. **挑一个半成品项目, 这个月做完.** 每个博后和学生都有一个"等有时间再做"的清单. 挑一个物理上有意义、技术上定义明确的. 用 LLM 辅助在一个月内完成并提交. 不要挑最有野心的. 挑最站得住脚的.
2. **显式地构建你的 Expert Filter.** 在你的领域, 列出你能检查的东西 (数值范围, 极限行为, 量纲, 对称性). 把每个 LLM 输出通过这个 checklist. 几个月后就会变成本能.
3. **把参考答案记在脑子里.** 对你烂熟于心的 benchmark 问题, 记住关键数字. 当 LLM 给出的结果和记忆不符时, 立刻停下. 记忆是最快的 filter.

你不需要成为最好的程序员. 你需要成为最好的验证者.

---

# 方法篇 · Under the Hood

## Slide 30 — 方法篇开篇

前面讲了"做出了什么"，现在揭开盖子：把 AI 当研究生培养，搭一个跟你一辈子的个人知识库

## Slide 31 — 第一幕: 把 agent 当研究生来带

*Act 1: Train your agent like a student* — 为什么要带，怎么带，带好了对科研有什么好处

## Slide 32 — 当面什么都懂，转头就不认识你

*Brilliant in the moment, a stranger the next session*

今天的 AI agent，就像这么一个新生:
- 当面交流反应极快: 上百页文献、复杂推理都跟得上
- 但换一个对话，就不认识你的课题组
- 不记得你做什么方向、读过谁
- 不记得昨天教过他什么、纠正过什么

他的记性只撑一次对话。你不写下来，下次他就全忘光。**聪明不等于有用——攒得住东西，才算真有用。**

## Slide 33 — 培养，不是换一个更聪明的学生

*You don't swap in a smarter student, you train this one*

让学生变有用，靠的不是换一个更聪明的（换模型），而是天天给他上下文。这套培养攒下来，就是一个个人知识库:

| 培养一个好研究生 | 搭一个 agent 知识库 |
|---|---|
| ① 让他读文献，建立领域全景 | 文献库 / 概念页 |
| ② 告诉他方向和你的标准 | 常驻身份层 profile |
| ③ 教他方法，定下标准流程 | 技能 skills |
| ④ 及时反馈，纠错记住 | 记忆 memory |
| ⑤ 让他积累，不重复踩坑 | 失败库 / 想法库 |
| 终点: 独当一面、经验可传 | 复利闭环 + 攒下的纯文本家底 |

## Slide 34 — 第一步: 让他读文献，建立领域全景

*Make him read until he has a map of the field*

- **好导师都这样干:** 让学生精读经典、跟踪前沿，脑子里建一张领域地图。
- **不培养:** agent 靠 RAG 现查，每次提问从 PDF 里现翻，读完就忘，给你的是一地碎片，拼不出全景。
- **培养好:** 每读一篇，就把它写进对应的概念页。三年下来，每个方法 / 体系页，都是一篇自动长出来的小综述。
- **科研收益:** 一句"谁做过 X""我读过的谁和谁矛盾"，答案早就攒好了。

一个真实概念页 (12 篇文献自动汇成一页小综述):

```markdown
# methods/threshold-anomaly.md
阈异常 (TA)：重离子光学势在
库仑位垒附近的局域能量依赖…

## 用到它的论文 (12)
- [1987] Satchler, NPA 472
- [1991] Satchler, Phys. Rep. 199
- [2011] Deshmukh, EPJA 47
- …每读一篇，自动追加一行
```

规模: 571 篇精读 · 365 实体页 · 195 方法页 · 图谱 1425 节点 · 6432 链接

## Slide 35 — 第二步: 告诉他方向和你的标准

*Give him direction and your taste*

- **好导师都这样干:** 让学生清楚课题组在做什么、好的工作长什么样、规矩在哪。
- **不培养:** 每次对话都得从头讲一遍背景，agent 给的全是大路货建议，抓不住你真正在意什么。
- **培养好:** 一份个人档案每次对话自动带上: 你的研究方向、硬规矩、有哪些机器和代码、合作者的分量。
- **科研收益:** 开口就进入工作状态，按你的标准和品味干活，不用每次都从头教。

真实档案摘录 (agent 开口之前就知道这些):

```markdown
# profile.md（每个会话自动加载）
方向: 核反应理论
  CDCC · 光学势 · 三体 · ML
硬规矩: 物理优先 · 先跑再想 ·
  不用 em-dash · 画图必须走 skill
算力: heliumx 2×5090 ·
  alpha 集群 16×3090 · BSCC
合作者: Moro (博导) · Ren (组长)
  二位的意见加权
```

## Slide 36 — 第三步: 教他方法，定下标准流程

*Teach the method, write the procedure*

- **好导师都这样干:** 教学生科学的方法——怎么读、怎么复现、怎么写——形成一套可复用的流程。
- **不培养:** 每次让 agent 干活都得从头交代步骤，干成什么样全凭它即兴发挥，时好时坏。
- **培养好:** 把"怎么做"写成可复用的技能（skill）: 读一篇论文怎么入库、记一个项目怎么归档，连引用格式、查重、出处都规定死。一句话触发，按固定流程执行。
- **科研收益:** agent 自己按流程维护知识库，你只管把关和提问，脏活它全包了。

## Slide 37 — 第四步: 及时反馈，纠错，让他记住

*Correct him once, and he never forgets*

- **好导师都这样干:** 给具体反馈，指出问题，学生改了以后记住，下回不再犯。
- **不培养:** 同样的错犯了一遍又一遍，你纠正一百次，它第一百零一次还那样。
- **培养好:** 每次"不对，应该这样"，都存成一条规则、自动加载。犯过一次的错，不再犯第二次。
- **科研收益:** agent 越用越像你，不用重训模型，这份默契谁也拿不走。

一条真实的"批语" (犯错一次，从此改正):

```markdown
---
name: 不要在目录间预先镜像
type: feedback
---
不要把一个 talk 的改动
镜像到另一个，除非明确点名。

Why: 自作主张同步，被打回。
How: "给 A 加 X" 就只动 A。
```

## Slide 38 — 第五步: 让他积累，不重复踩坑

*Keep a lab notebook, never fall into the same pit twice*

- **好导师都这样干:** 让学生记实验记录、记下走不通的路、管好时间线。
- **不培养:** 开题容易撞墙，做了一半发现别人早做过，或者重新捡起一个你半年前就否决过的想法。
- **三个库:** 失败库 `failures/` (走不通的路，登记在案) · 想法库 `ideas/killed` (已否决的，不再捡回) · 时间线 `log.md` (什么时候做过什么)

一条真实的已毙想法 (连复活条件都登记好了):

```markdown
# ideas/killed/2body-bilnn-hmc.md
status: killed (2026-05-27)
想法: BiLNN + HMC，"水"一篇
  全局光学势的贝叶斯后验
为何毙: 二体正问题毫秒级就解完,
  "贵到必须用模拟器"不成立;
  KDUQ / ELM 已经做过
复活条件: 自由形式 O(100) 参数
  的非参数化光学势
```

**科研收益:** 每次开新题，都站在你全部历史判断之上，agent 提方案前先读这些，不让你撞同一堵墙。

## Slide 39 — 终点: 出师

*Graduation: independent, and the training stays*

独当一面: 读完就干 → 干完写回库 → 下次起点更高。带得越久越省力，还能帮你起草论文，你读过的相关文献一篇不漏。

但真的研究生会毕业，把经验带走。三年心血，人一走，课题组又从头带新人。

**知识库不会走:** 它是本地纯文本 + git，换电脑、换 agent、换模型都只是一次 git clone。你培养的，是一个永远不毕业、经验永久沉淀的研究生。模型说换就换；知识库是你攒下的家底，跟你一辈子。

## Slide 40 — 同一个问题，培养前 vs 培养后

*Same model, with and without the training*

问: "我读过的文献里，谁的结果和 KD 全局光学势对不上？"

- **培养前（裸模型）:** 不知道你读过什么，只能给教科书式综述: "KD 是广泛使用的全局核子光学势，总体表现良好……" 再追问具体文献，一本正经编引用的风险就上来了。
- **培养后（带知识库）:** 先翻索引和概念页，回答带出处: "你 5 月入库的 DREAM 校准: d+⁵⁸Ni 数据要求氘核表面吸收比 KD 高约 36% → sources/2026-dream…"；库里没有的，明说没读过。

注意: **两边是同一个模型。差别全在上下文**，而上下文就是那五步培养攒下来的。

## Slide 41 — 实战演示: 一句话，让"学生"写出一篇综述

*review-writing in action* — 真实录屏: 调用 review-writing 技能, agent 自动起草一篇综述. 它先查我的文献库，框定论点、定好该引谁，再补检索，最后成文。我读过的相关文献一篇不漏。这就是"出师": 你给一句指令，培养好的"学生"交回一篇初稿。 *(视觉内容: 录屏, 未捕获)*

## Slide 42 — 实战演示成品: 一篇 14 页综述初稿

三体核反应综述初稿, 14 页. 关键: 结构、论点、引用骨架都搭好了；引文只从我已入库的论文里取，库里没有的就标出来或再补查，不硬编。这是初稿，物理判断和润色还得我自己来。 *(视觉内容: PDF 预览, 未捕获)*

## Slide 43 — 一个好研究生需要什么，知识库就给什么

*What a good student needs, the knowledge base provides*

| 一个好研究生需要 | 知识库对应 | 对科研的帮助 |
|---|---|---|
| 读文献、建全景 | 概念页 / debates | 综述自动累积，随时可查 |
| 知道方向和标准 | 常驻身份 profile | 开口进入工作状态 |
| 一套做事方法 | 技能 skills | agent 自己按流程维护 |
| 挨批能改、记得住 | 记忆 memory | 不重复犯错，越用越像你 |
| 记录、不踩坑 | 失败库 / 想法库 | 开题不重复劳动 |
| 出师、能传承 | 复利闭环 + git | 写作不漏引，攒下的家底带得走 |

一处培养，处处受益: 同一个"学生"，喂饱了读、想、写、协作全流程。

## Slide 44 — 第二幕: 揭开盖子

*Act 2: Under the hood* — 刚才讲的是"怎么带"，现在说说这个"学生的脑子"怎么搭的

## Slide 45 — 核心思路: 不是检索，是养一个 wiki

*From RAG to a compounding wiki*

别等提问了才去原始文档里现翻。让 LLM 一篇一篇建、长期维护一个 wiki，垫在你和原始资料之间。

- **raw sources** — 原始资料，只读不改，一切以它为准
- **the wiki** — LLM 负责写和维护，互相链接的笔记
- **schema** — 告诉 LLM 怎么维护 (CLAUDE.md)

知识只整理一次，往后持续更新，不必每次提问都从头推一遍。你负责找料、提问，脏活累活全归 LLM。

一句话: **Obsidian 是 IDE，LLM 是程序员，wiki 是代码库。** [A. Karpathy, "LLM Wiki" (gist, 2026)]

## Slide 46 — 培养的五步，拆开来看就是五层

*The five training steps become five layers*

- **L5 记忆 memory** — 对应第四步 · 反馈纠错
- **L4 技能 skills（读写规矩）** — 对应第三步 · 标准流程
- **L3 概念笔记 + 统一词表** — 对应第一步读文献 + 第五步积累
- **L2 常驻身份层 profile** — 对应第二步 · 方向与标准
- **L1 纯文本 + 链接** — 所有东西的壳子，人和 agent 共享

规模: 1425 文献笔记 · 571 篇精读 · 97 篇个人档案 · 38 位合作者

## Slide 47 — L1: 纯文本 + 链接

*Plain text and links, not an app*

- 人可读: Obsidian 里是一张可点击的知识图谱
- Agent 可读: 纯文件, grep / read 直接拿
- 可 diff: git 记录每次改了什么, 能回滚
- 不绑平台: 纯文本, 二十年后还能打开

要点: 选纯文本, 就是为了让人和 agent 读的是同一份文件, 不搞两套数据.

```text
research-wiki-personal/
├── profile.md         # L2 常驻身份层
├── projects/          # active / paused / done
├── papers/            # 97
├── ideas/             # promising / killed
├── failures/          # 死路登记
├── methods-mine/      # 自有代码 (8)
├── collaborators/     # 38
└── index/             # by-topic / method ...
```

同一份目录: 我在 Obsidian 浏览, agent 用文件系统读写.

## Slide 48 — L2: 常驻身份, profile.md 每次对话第一行

*The always-loaded identity layer*

一行 @import, 让个人档案每次对话自动带上:

```markdown
# ~/.claude/CLAUDE.md
@~/research-wiki-personal/profile.md
```

档案里装着 agent 每次都得知道的"你": 研究方向、正在投的稿子 · 硬规矩 (不用 em-dash、物理优先、先跑再想) · 算力清单、合作者权重.

一页小而精的档案, 每次对话都带着, 比一大坨现查出来的零碎好用. **身份层是"一直带着", 不是"问到了才翻".**

## Slide 49 — L3: 概念笔记 + 统一词表

*Atomic notes and a controlled vocabulary* — 综述怎么长出来:

```text
raw/paper.pdf
      │ 读一遍，抽要点 + 关键数字
      ▼
 sources/<paper>.md   摘要·数字·tags·出处
      │ 按词表查重，自动追加引用
      ▼
 methods/  systems/  entities/
   每个概念页底部："用到它的论文 (N)"
```

词表示例:

```yaml
methods:
  threshold-anomaly:
    canonical: "Threshold anomaly (TA): ..."
    aliases: ["TA", "threshold anomaly",
      "dispersion-relation OMP"]
```

关键: 统一词表让四种写法都归到同一页. 先查重再新建, 概念不散架, 综述才攒得起来. **这是 RAG 给不了的.** (真实图谱: 1425 节点 · 6432 链接)

## Slide 50 — L4: 技能, 把标准流程变成一句话触发

*Skills are the read/write protocol*

- `literature-wiki` — 读论文 → 写 source 笔记 → 更新概念页 → 标矛盾
- `research-profile` — 记 project / paper / idea / failure, 刷新 profile

四条硬规矩: 统一 schema · 每条声明带出处 · 不用 em-dash · 先查重再新建.

三类操作: **ingest**（入库）· **query**（提问，好答案归档回库）· **lint**（体检，找矛盾与孤儿页）.

## Slide 51 — L5: 记忆 + 闭环, 越用越强

*Memory and the compounding loop*

每个纠正 → 一个文件 → MEMORY.md 索引自动加载. 模型一个参数没动, 它却越来越懂你的规矩.

复利闭环: ① 读库 (身份+检索) → ② 干活 (读写画) → ③ 写回 (新笔记/记忆) → ④ 更高 (下次更省力) → ①

**复利: 关键是第三步"写回".** 大多数人用 AI 是开环的——问完就走, 什么都没留下. 闭环就是把每次问出来的好东西写回库里, 垫高下次的起点.

## Slide 52 — 全景: 原始文件怎么变成 agent 的脑子

*The full stack, end to end*

- **AGENT** — 读 + 写, 干活 (始终加载 + 按需检索; 经 skill 写回)
- **profile + memory** — L2 + L5, 常驻身份 + 纠错记忆
- **skills** — L4, 读写规矩
- **wiki: 概念笔记 + 统一词表 + index** — L3, 综合, 越攒越厚
- **raw files: PDF · 代码 · 数据** — L1, 纯文本, git 管版本

人在 Obsidian 这头整理, agent 在文件那头读写, git 里存的是同一本账.

## Slide 53 — 怎么起步: 五个零件，今晚就能开始

*The minimum viable setup*

1. **原始文件** — PDF · 笔记 · 数据, 只存不改
2. **Markdown 库** — 纯文本 + 链接, agent 写, 你读
3. **Obsidian** — 人看的图谱, 浏览、连线
4. **一个 agent** — Claude Code / Codex, 读写主力
5. **一份 schema** — CLAUDE.md / 技能, 怎么维护

起步成本: 新建一个文件夹, 写一份"培养规则", 从今天读的论文开始一篇篇喂. 复利从第一篇就开始了.

上手: A. Karpathy "LLM Wiki" (gist) · 我的 literature-wiki / research-profile 技能

## Slide 54 — 日常长什么样: 读一篇、问一句

*A day with your student: ingest one, ask one*

**读一篇（教他入库）:**

```text
你：把这篇加进文献库
agent：
  · 写一页摘要 + 关键数字 + 出处
  · 按词表查重，更新相关概念页
  · 与旧结论比对，标出矛盾
  · 追加一条时间线日志
```

**问一句（用他的积累）:**

```text
你：我读过的谁在 d+58Ni 上
    和 KD 光学势不一致？
agent：
  · 读索引 + 相关概念页
  · 给出带出处的回答
  · 好答案归档回库，成为新页
```

闭环: 读 → 干活 → 把成果写回库 → 下次起点更高. 跟带学生一样, 每一次都让下一次更省力.

## Slide 55 — 丑话说在前面: 这个学生也有毛病

*Honest limitations*

- **摘要会丢细节:** 浅读条目就剩个元数据, 我库里真有一批标着 "no summary available". 关键论文还得自己精读, 浅读的必须老老实实标出来.
- **概念会分裂:** 词表拦不住所有别名, 同一概念会散成几页. 得定期 lint: 找矛盾、并孤页、补断链.
- **维护有成本:** 每篇入库几分钟、每月做一次体检. 复利的前提是持续喂, 断粮它就停长了.
- **单源会犯错:** 一个模型写进库的结论标"单源", 要紧的换另一个模型交叉验证过再用.

底线: 它不是魔法, 是个需要管理的学生. 但管理的成本, 远低于他干活的收益.

## Slide 56 — 这么用，期刊认吗？APS 刚给了答案

**APS 期刊 AI 新政 · 2026 年 6 月 17 日**

转向: 旧政策只许 AI 做"润色、精简、轻度编辑"；新政策允许实质性使用——文献综合、数据分析、科学推理、图表生成、代码、翻译——条件是披露.

**作者（Authors）:** AI 不能当作者；准确性、责任全在人 · 实质性使用须披露: 工具名 + 版本、如何协助、如何指导与核验 · 图表由 AI 生成 → 在图注里说明并自验 · 纯语言润色不必披露.

**审稿人（Reviewers）:** 可用 AI 理顺思路、改语气、翻译 · 禁止把稿件/报告上传到不受限的 AI 工具（保密: 作者未同意未发表工作进训练集）· 超出轻度编辑须在给编辑的 note 里披露.

落点: 今天这套工作流, 正好踩在新政策的三条线内——人负责、要披露、护保密. **Vibe Research 不是灰色地带, 是被官方写进规范的做法.**

## Slide 57 — 总结

- **为什么需要:** 今天的 agent 当面很聪明, 换个对话就全忘了；攒不下东西, 长期课题里指望不上.
- **怎么办:** 像带研究生一样培养他——读文献、给方向、教方法、纠错、记录. 这套培养拆开来看, 就是纯文本 + 身份 + 笔记 + 技能 + 记忆的五层知识库.
- **对科研的帮助:** 综述自动累积 · 开题不重复劳动 · 写作不漏引 · agent 真正懂你 · 经验永久沉淀、带得走.

一句话: **个人知识库不是存档, 是你对 agent 的培养.** 你读过的每一篇、教过的每一次, 都长在一个永远不毕业的研究生身上.

## Slide 58 — 一个小彩蛋 / One last thing

你们刚看的这套 slides, 就是我"带"出来的这个研究生, 读我的知识库自动写的. 指令就一句（大意）:

```text
给近代物理研究所的报告做这套 slides，
讲个人知识库，用"把 agent 培养成研究生"打比方，素材从我的 wiki 取。
```

所以方法和演示是同一回事. 先开始带你的"学生", 他会复利成长；模型只是随时可换的引擎. 从今晚读的第一篇论文开始.

谢谢！ / Thank you! — 金磊 · 同济大学 · jinl@tongji.edu.cn

---

# Backup Slides

## Slide 59 — Backup B1: 完整 16 篇论文清单

| # | arXiv | Date | Title | Authors / Status |
|---|---|---|---|---|
| 1 | 2512.07111 | 2025-12-07 | Direct Boundary Matching (DBMM) | Jin Lei ⭐ PRC 113, 024614 |
| 2 | 2512.11590 | 2025-12-12 | HPRMAT: GPU R-matrix solver | Jin Lei |
| 3 | 2512.17687 | 2025-12-19 | Reduced basis emulator for CDCC | Jin Lei ⭐ PRC 113, 044610 |
| 4 | 2512.22500 | 2025-12-27 | BiLNN Global Nucleon-Nucleus Optical Model | Jin Lei ⭐ PRC 已接收 |
| 5 | 2601.08245 | 2026-01-13 | Coherent Absorption Dynamics | Liu, Jin Lei, Ren ⭐ PRC 113, 054601 |
| 6 | 2602.04553 | 2026-02-04 | Exterior Complex Scaling PINN for scattering | Jin Lei ⭐ PRC 113, 064618 |
| 7 | 2602.12690 | 2026-02-13 | Dynamical Origin of Quenching (Knockout) | Jin Lei |
| 8 | 2603.24253 | 2026-03-25 | Deletion Does Not Measure (CC Dynamics) | Jin Lei, Liu |
| 9 | 2604.00471 | 2026-04-01 | Exact CC Green Function | Liu, Jin Lei, Ren |
| 10 | 2604.05600 | 2026-04-07 | Channel couplings redirect absorbed flux | Liu, Jin Lei, Ren ⭐ PLB 140479 |
| 11 | 2604.11226 | 2026-04-15 | IAV breakup generalization | Jin Lei |
| 12 | submitted | 2026-04-11 | Intrinsic Information Limit in OP Extraction | Jin Lei |
| 13 | draft | 2026-04-11 | High-Dim Bayesian Calibration | Jin Lei, Furnstahl |
| 14 | draft | 2026-04-11 | Info Geometry of Power Counting | Jin Lei, Hu, Phillips, Furnstahl |
| 15 | draft | 2026-04 | Inclusive breakup of three-body projectiles | Jin Lei |
| 16 | draft | 2026-04 | Dispersive CDCC elastic effective interaction | Liu, Jin Lei, Ren |

2025 年 12 月至 2026 年 4 月. 11 篇上 arXiv, 其中 4 篇已发表于 PRC、1 篇已发表于 PLB、1 篇 PRC 已接收; 另有 1 篇已投稿, 4 篇准备中. Solo × 9, 同济本地组 × 5, w/ Furnstahl × 2, w/ Hu+Phillips+Furnstahl × 1 (重叠计).

## Slide 60 — Backup B2: DBMM 数学细节

**Lagrange-Legendre 基** 在 $[0, R]$ 上, 网格点 $r_j = R \cdot x_j$, 其中 $P_N(2x_j - 1) = 0$:
$$\hat f_j(x) = (-1)^{N-j} \sqrt{\frac{1-x_j}{x_j}} \frac{x P_N(2x-1)}{x - x_j}$$

**边界值** 在 $x = 1$ 处:
$$\hat f_j(1) = \frac{(-1)^{N-j}}{\sqrt{x_j(1-x_j)}}, \qquad \left.\frac{d\hat f_j}{dx}\right|_{x=1} = \frac{(-1)^{N-j}}{\sqrt{x_j(1-x_j)}}\left[N(N+1) - \frac{x_j}{1-x_j}\right]$$

**矩阵方程** (内部行 $i = 1, \dots, N-1$):
$$\sum_{j=1}^N M_{ij} c_j = b_i, \quad M_{ij} = T_{ij} + \left[\frac{\ell(\ell+1)}{r_i^2} + U(r_i) - k^2\right] \delta_{ij}, \quad b_i = -U_{sr}(r_i) F_\ell(\eta, k r_i)\sqrt{R \lambda_i}$$

**最后一行** ($i = N$) 编码边界条件:
$$\sum_{j=1}^N B_j c_j = 0, \quad B_j = \left.\frac{d\hat f_j}{dx}\right|_{x=1} - R \gamma_s \hat f_j(1)$$

**S-matrix** 从 $r = R$ 处的散射波提取: $S_\ell = 1 + 2 i k f_\ell$, 其中 $f_\ell = \psi_\ell^{sc}(R) / [k H_\ell^+(\eta, kR)]$.

*Reference: Jin Lei, Phys. Rev. C 113, 024614 (2026). Full details in Section II.*

## Slide 61 — Backup B3: POD-Galerkin 数学细节

**Snapshot 矩阵**, 来自 $N_s$ 次完整 CDCC 求解, 在采样参数 $\boldsymbol\theta_k$ 处:
$$C_{\mathrm{snap}}^J = [\mathbf{c}^J(\boldsymbol\theta_1), \mathbf{c}^J(\boldsymbol\theta_2), \dots, \mathbf{c}^J(\boldsymbol\theta_{N_s})]$$

**SVD 截断** (能量准则, $\epsilon_{\mathrm{tol}} = 10^{-6}$):
$$C_{\mathrm{snap}}^J = \mathbf{X}^J \mathbf{\Sigma}^J (\mathbf{W}^J)^H, \quad \mathbf{X}_r^J = \text{first } n_b \text{ columns of } \mathbf{X}^J$$

**Reduced ansatz**, 对新参数 $\boldsymbol\theta_*$:
$$\mathbf{c}^J(\boldsymbol\theta_*) \approx \mathbf{X}_r^J \boldsymbol\alpha^J(\boldsymbol\theta_*), \quad \boldsymbol\alpha^J \in \mathbb{C}^{n_b}$$

**Galerkin 投影** 得到 $n_b \times n_b$ reduced system:
$$\mathbf{M}_r^J(\boldsymbol\theta_*) \boldsymbol\alpha^J = \mathbf{b}_r^J, \quad \mathbf{M}_r^J = (\mathbf{X}_r^J)^H \mathbf{M}^J(\boldsymbol\theta_*) \mathbf{X}_r^J$$

**预计算** (与参数无关):
$$\mathbf{K}_r^J = (\mathbf{X}_r^J)^H \mathbf{K}^J \mathbf{X}_r^J, \quad \mathbf{b}_r^J = (\mathbf{X}_r^J)^H \mathbf{b}^J$$

仅势能项在预测时组装:
$$\mathbf{M}_r^J(\boldsymbol\theta_*) = \mathbf{K}_r^J + (\mathbf{X}_r^J)^H \mathbf{V}^J(\boldsymbol\theta_*) \mathbf{X}_r^J$$

*Reference: Jin Lei, Phys. Rev. C 113, 044610 (2026). Full details in Section III.*

## Slide 62 — Backup B4: 计算代价

Table IV of Paper B:

| Method | Time per partial wave | Speedup |
|---|---|---|
| Full CDCC (direct solve, DBMM) | 6.5 s | baseline |
| Emulator prediction (after training) | 30 ms | ≈220× |

- **训练代价 (offline, 一次性):** $N_s = 200$ 样本 × 31 分波 × 6.5 s ≈ 11 小时, 48 核 (Intel Xeon Gold 6248R, 3.0 GHz) · SVD 截断: 秒级 · 预计算 $\mathbf{K}_r^J$ 和 $\mathbf{b}_r^J$: 分钟级
- **预测代价 (online, 每次评估):** 势能构建 + 投影 + reduced 求解 + 重建 ≈ 1 s 每次完整散射计算 (所有 $J$ 合计). 对比完整 CDCC: 每次计算数小时.
- **摊销:** 200 次评估: 训练代价回本. $10^5$ 到 $10^6$ 次评估 (Bayesian inference): 训练代价 < 总量的 1%.

## Slide 63 — Backup B5: 工具栈与 Protocol

**核心工具:**
- LLM: Claude Opus 4.5 (Anthropic), 通过 Claude Code CLI 使用
- 集成: 直接访问文件系统, git 集成, shell 执行
- 语言: Fortran 90, DBMM 和 emulator (3,354 行)
- 数值库: LAPACK (ZGESV, ZGEMM, ZGESVD), BLAS (ZGEMV)
- 版本控制: Git, 完整历史在本地仓库

**Protocol (我实际怎么做的):**
1. **先写设计文档.** 写代码之前, 在 markdown 文件中写 1 到 2 页计划, 和 Claude 迭代直到架构干净.
2. **测试驱动.** 每个模块先写测试再实现. Claude 两者都生成.
3. **每步做物理 sanity check.** Unitarity, Hermiticity, 收敛性, 已知极限.
4. **每次迭代一个 commit.** 每个通过的测试变成一个带详细 message 的 commit.
5. **人工验证关卡.** 每个方程, citation 和数值声明在提交前重新检查.
6. **语言: 中英文混合.** Claude 无缝处理两种语言.

## Slide 64 — Backup: 隐私、安全与可移植

- **本地优先:** 核心知识库是本地纯文本, 不上云
- **版本可追溯:** git 记录每次改动, 可回滚、可审计
- **分级:** 未发表、评审意见放私有库, 公开素材单独存
- **可移植:** 纯 Markdown, 不绑平台；换电脑、换 agent 都是一次 git clone
- **诚实标注:** 浅读条目、单源结论显式标记, 防止以讹传讹写进论文

底线: 你的东西, 存在你自己管的硬盘和仓库里.

## Slide 65 — Backup: 多 agent 与跨模型验证

**工具栈:** Markdown + git + Obsidian · Claude Code: 主力读写 · 一组自写技能: 维护规范 · Codex / GPT: 交叉验证

**多 agent 工作流:** Claude 提方案, Codex 交叉检查, 我综合. 单一模型审过的, 标记为"单源".

关键: 知识库就是一堆纯文本, 谁来读都行, 换 agent 不动数据.
