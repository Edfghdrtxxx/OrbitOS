---
type: learning-session
topic: Lab — Poisson statistics, confidence-level upper limit from zero observed events
project: "[[GRE_Physics_Prep]]"
created: 2026-10-22
---
# Poisson upper limit with zero events (Kahn Sample Exam 1 #78)

## Context
- Daily-note item (`10_Daily/2026-10/2026-10-22.md`, a1): `/learn the 90% upper limit on a Poisson rate from zero events (Kahn Sample Exam 1 #78)`.
- Source: Kahn Sample Exam 1, question 78, sat 2026-10-22 in the Prep Studio mock room (record `ex-mviw8wmq-8zkv`); review in [[Mock-Review-Oct18]] section 6. Part of the learner's marked-question queue (15, 36, 75, 76, 78, 80, 90, 99, 100).
- Question (verbatim, `/Users/Reid Hu/Physics GRE/content/bank/cpg-exams.js`, id `cpg-x1-78`): A dark matter experiment takes data for a time $T$ and observes no events. What is the 90% confidence level upper limit that one can place on the event rate in the detector?
  - (A) One cannot place a limit at the 90% confidence level for this experiment.
  - (B) $-(1/T)\ln 0.9$
  - (C) $-(1/T)\ln 0.1$
  - (D) $(1/T)\ln 0.9$
  - (E) $0$
- Learner's answer: (B), flagged, 59 s (`pgre-status` attempt log). Correct: (C).
- Prior: no Poisson or confidence-limit thread in [[Progress-context]].

### Turn 1 — 2026-10-22 (learner)

> Then we start number 78.

### Tutor

你选 (B)，说明你写出了 $e^{-\lambda T}$，只是把 0.9 和 0.1 放反了。问题出在"90% 上限"的含义上。

- **零事例的概率：** 计数服从 Poisson 分布，平均值 $\lambda T$。看到 0 个事例的概率是 $P(0) = e^{-\lambda T}$。$\lambda$ 越大，$P(0)$ 越小。
- **"90% 置信上限"的意思：** 找一个足够大的 $\lambda_{\rm up}$，大到"如果真实速率是它，看到 0 个事例的机会只有 10%"。比它更大的速率会让"零事例"更不可能，所以都被排除，排除的把握是 90%。
- **所以方程是** $e^{-\lambda_{\rm up}T} = 0.1$，即 $\lambda_{\rm up} = -\frac1T\ln 0.1 = \frac{\ln 10}{T} \approx \frac{2.3}{T}$。
- **(B) 错在哪：** $e^{-\lambda T} = 0.9$ 给出的是"90% 的时间都会看到零事例"的速率。这个速率很小（$\approx 0.1/T$），零事例完全不能排除它，所以它不是上限。
- **不计算的检验：** 置信度越接近 100%，上限必须越大（要排除得更有把握，只能排除更大的速率）。$-\frac1T\ln(1-\text{CL})$ 在 CL $\to 1$ 时趋于无穷，符合；(B) 和 (D) 趋于 0，不符合。

记一个数：零事例时，90% 上限约为 **2.3 个事例**（除以时间 $T$ 就是速率）。

请你用同样的逻辑回答：同一个实验，95% 置信上限是多少？大约是多少个事例？

### Turn 2 — 2026-10-22 (learner)

> Secondly, I choose B for number 68 because I guessed it. I do not know the underlying mechanism of this problem. You can teach me those three distributions, by the way. I'm still keep getting confused by them.

(Tutor reading: "68" taken as #78. In the mock record `ex-mviw8wmq-8zkv`, #78 is flagged with pick B; #68 is an EM question, not flagged. The three distributions are binomial, Poisson and Gaussian, the trio on the Studio card `supp` "Binomial, Poisson, and Gaussian: one family", added 2026-10-20/21.)

### Tutor

先分清三者，再回到 #78。区分它们只看一件事：**题目给了你什么**。

| 分布 | 题目给你 | 你数的东西 | 平均值 | 方差 | 具体例子 |
| --- | --- | --- | --- | --- | --- |
| 二项分布 binomial | 次数 N 和每次的概率 p | N 次里成功几次（整数 0…N） | Np | Np(1−p) | 抛 10 枚硬币数正面（N=10, p=½）；掷 6 次骰子数几个 6（p=1/6）；20 道五选一全靠猜，猜对几道（p=1/5）；100 个原子核，过一个半衰期后衰变了几个（p=½） |
| 泊松分布 Poisson | 只有速率 r（或平均个数 λ），没有 N | 一段时间里来了几个（整数 0, 1, 2, …，没有上限） | λ = rt | λ | 盖革计数器每分钟平均响 3 次，1 分钟响几次；探测器每秒平均接到 5 个光子，1 秒接到几个；暗物质实验跑了时间 T，看到几个事例；路口每小时平均过 20 辆车，某小时过几辆 |
| 高斯分布 Gaussian | μ 和 σ，或者计数很大 | 连续的测量值（可以取任意实数，如 9.81、9.79） | μ | σ² | 用秒表测同一个单摆的周期 20 次，读数 2.01 s、1.98 s、2.03 s… 散成钟形；用尺子反复量同一根棒的长度；一个班学生的身高；计数很大的泊松计数，如 10 000 个事例 |

**它们是一家人，按顺序变过来：**
- **二项 → 泊松：** 把时间 $T$ 切成 $N$ 个极短的小段，每段里来一个事例的概率是 $p = \lambda/N$（$\lambda = rT$）。这就是 $N$ 次抛硬币。让 $N \to \infty$、$p \to 0$、$Np = \lambda$ 不变，二项分布就变成泊松分布。所以泊松分布就是"没有 N、只有速率"的二项分布。
- **泊松 → 高斯：** $\lambda$ 很大时，泊松分布的柱状图变成一个钟形，$\mu = \lambda$，$\sigma = \sqrt{\lambda}$。

**#78 的机制正好用第一步：** 零事例的概率，就是 $N$ 个小段全部"没来"：
$$P(0) = (1-p)^N = \left(1 - \frac{\lambda}{N}\right)^N \;\xrightarrow{N\to\infty}\; e^{-\lambda} = e^{-rT}.$$
暗物质事例是稀有、独立、按速率到来的，所以是泊松分布，题目只给了时间 $T$ 和"零事例"。之后就是 Turn 1 的逻辑：90% 上限是让"零事例"的概率降到 10% 的速率，$e^{-rT} = 0.1$。

检验你能不能分清：下面三种情况各用哪个分布？
1. 抛 10 枚硬币，数正面朝上的个数。
2. 盖革计数器平均每分钟响 3 次，问 1 分钟内响 5 次的概率。
3. 一次计数得到 10 000 个事例，估计这个数的统计误差。

（Turn 1 的 95% 上限问题留到下一轮。）

### Turn 3 — 2026-10-22 (learner)

> 我不太理解什么叫连续的测量值，你可以把那个table一步先补充一下，举几个具体的例子让我更好理解, 三个distribution都是
> 速率又是什么东西?
> 抛硬币，我猜是二项分布，因为你说数正面朝上的个数，把正面朝上定义为成功，那就是那10次里面总共成功了多少次，符合二项分布，你给的是那个定义。第二个盖革计数区平均每分钟响3次，平均每分钟想3次，这个特征符合一段时间内来了几个，这个就是一段时间是一分钟来了几个，是3个。然后问的就是同样的时间间隔内想其他次数的概率，然后一次计数得到1000个事例，估计这个数的统计误差，我猜是高斯分布

### Tutor

Turn 2 的表格加了一列"具体例子"，三个分布各有几个。

**"连续的测量值"是什么。** 二项和泊松数的是**个数**：0, 1, 2, 3……只能是整数，不会出现 2.7 个正面。高斯描述的是**读数**：秒表测单摆周期，可能读到 2.01 s、1.98 s、2.034 s，可以是任意实数，所以叫连续。测很多次，读数围绕真值散开，画成柱状图就是钟形。

**"速率"是什么。** 速率 $r$ 是单位时间里平均来几个事例，单位是"个/时间"：盖革计数器 $r = 3$ 次/分钟。乘上时间窗口 $t$，得到这个窗口里平均来几个：$\lambda = rt$。1 分钟窗口 $\lambda = 3$；2 分钟窗口 $\lambda = 6$。泊松分布只需要这一个数 $\lambda$。#78 问的"event rate"就是这个 $r$：实验想知道暗物质每单位时间撞进探测器几次。

**你的三个判断：**
1. 抛硬币 → 二项分布。对，理由也对：$N = 10$ 次，每次 $p = \frac12$，数成功次数。
2. 盖革计数器 → 泊松分布。对：只给了速率，没有"总共试几次"，问同样 1 分钟里响 5 次的概率，$P(5) = \frac{3^5 e^{-3}}{5!}$。
3. 10 000 个事例（你写成了 1000，题目是 10 000）→ 高斯分布。方向对，但要补一步：这个数**本身是泊松计数**（探测器在一段时间里数到的个数），只是 $\lambda$ 很大，所以分布的形状近似高斯，$\mu = \lambda$，$\sigma = \sqrt{\lambda}$。统计误差来自泊松分布"方差等于平均值"这一条。

请算出来：计数 10 000 的统计误差 $\sigma$ 是多少？相对误差 $\sigma/N$ 是百分之几？

### Turn 4 — 2026-10-22 (learner)

> 那么这个当count很大的时候，泊松变成高斯或者倾向于高斯的这个理解，是否可以认为，当N足够大，它之间的间隔很小，所以可以近似约等于连续的，然后高速分布就趋向于高斯了?
> 计数1万的统计误差西格玛 = 一除以根号下N为1/100，相对误差是1万%分之一吗？好像有点奇怪

### Tutor

**1. "间隔很小，所以连续"——对了一半。**

- **对的部分：** 计数之间的间隔是 1，分布的宽度是 $\sigma = \sqrt\lambda$。$\lambda = 10\,000$ 时宽度是 100，间隔 1 相对宽度只有 1%，所以柱状图看起来像一条光滑曲线。这解释了"为什么能当成连续的"。
- **缺的部分：** 连续只说明曲线光滑，不说明它是**钟形**。反例：在 1 到 10 000 之间均匀随机抽一个整数，间隔同样很小，曲线却是一条平线，不是钟形。
- **钟形从哪来：** 计数是很多个独立小块的**和**。把时间窗口切成 100 段，总计数 = 每段计数之和，每段互相独立。很多独立随机量相加，和的分布趋向高斯，这叫中心极限定理。泊松变高斯靠的是"很多独立小块相加"，连续只是附带的结果。

**2. 你把绝对误差和相对误差弄混了。** 你算的 $1/\sqrt N = 1/100$ 是相对误差，不是 $\sigma$。

- 绝对误差：$\sigma = \sqrt N = \sqrt{10\,000} = 100$，单位是"个"。结果写成 $10\,000 \pm 100$。
- 相对误差：$\sigma/N = 100/10\,000 = 1/\sqrt N = 1\%$。

你说"好像有点奇怪"，这个直觉是对的：1 万分之一的相对误差太小，误差只有 1 个，不可能。检查方法：$\sigma$ 带单位"个"，应该和 $N$ 同一个量级里比较；$\sigma/N$ 是纯数，通常写成百分比。

检验：数到 400 个事例，$\sigma$ 和相对误差各是多少？

### Turn 5 — 2026-10-22 (learner)

> 你用英文把相对误差和绝对误差写一下，然后，Supplement that existing flash card based on this learning sesSiOn upon completion
> 400个实例绝对误差σ=20，相对误差等于1除以根号下N=5%

### Tutor

对：$400 \pm 20$，相对误差 $5\%$。

In English:
- **Absolute error** $\sigma$: the uncertainty in the same unit as the measured quantity. For a Poisson count $N$, $\sigma = \sqrt N$ counts, and the result is written $N \pm \sqrt N$. Example: $400 \pm 20$ counts.
- **Relative (fractional) error** $\sigma/N$: the absolute error divided by the value. It is a pure number, usually given as a percent. For a Poisson count, $\sigma/N = 1/\sqrt N$. Example: $20/400 = 5\%$.
- **Consequence:** counting longer raises $N$, so the absolute error grows ($\sqrt N$) but the relative error shrinks ($1/\sqrt N$). Four times the counts halves the relative error: $400 \to 5\%$, $1600 \to 2.5\%$.

最后一个问题，回到 #78 本身。答完后本题结束，我再按这次的内容补充 Studio 的卡 `supp-counting-distributions`（"Binomial, Poisson, and Gaussian: one family"）。

同一个暗物质实验，时间 $T$ 内看到 0 个事例。95% 置信上限的速率是多少？大约相当于多少个事例？

### Turn 6 — 2026-10-22 (learner)

> 我不太理解这个问法，什么叫confidence level upper limit的速率?
> 你可以认为我概念也不理解

### Tutor

从头讲，三步。

**第一步：我们想知道什么。** 暗物质每年撞进探测器几次，这个数叫**速率** $r$（单位：次/年）。它是大自然定好的，我们不知道。实验能做的只是：等一段时间 $T$，数来了几次。这次实验等了 $T$，一次都没来。

**第二步：为什么不能直接说"速率是 0"。** 事例是随机来的。就算真实速率不是 0，运气不好也可能一次都没等到。类比：你在车站等了 1 小时，一辆公交都没来。你不能断定"这条线没有车"，也许车本来就少。但你可以断定"这条线不可能 5 分钟一班"：如果真是 5 分钟一班，1 小时等不到车的概率只有 $e^{-12} \approx 0.0006\%$。

所以实验给不出一个确定的速率，只能给一个范围："速率不超过某个数"。这个数就是**上限**（upper limit）。

**第三步：上限划在哪里。** 把每个可能的速率拿来试：假如真实速率是它，"一次都没看到"的概率有多大？取 $T = 1$ 年，概率是 $P(0) = e^{-rT}$：

| 假设的真实速率 r（次/年） | 1 年里平均来几次 | 1 年里一次都没来的概率 | 结论 |
| --- | --- | --- | --- |
| 0.1 | 0.1 | 90% | 很正常，不能排除 |
| 1 | 1 | 37% | 还算正常，不能排除 |
| 2.3 | 2.3 | 10% | 刚好碰到 10% 的门槛 |
| 5 | 5 | 0.7% | 太意外，排除 |
| 12 | 12 | 0.0006% | 几乎不可能，排除 |

速率越大，"一次都没来"越不可能。我们事先定一个门槛：如果某个速率下，我们看到的结果出现的概率低于门槛，就排除这个速率。

- 门槛取 10%，叫 **90% 置信度**（confidence level，CL = 1 − 门槛）。表里第一个被排除的边界是 $r = 2.3$ 次/年，所以"90% 置信上限是 2.3 次/年"。一般地，$e^{-rT} = 0.1$，$r_{\rm up} = -\frac1T \ln 0.1$。
- 90% 的含义：如果真实速率就是 $r_{\rm up}$，重复做很多次这个实验，90% 的实验会看到至少 1 次事例。我们只看到 0 次，所以有 90% 的把握说真实速率比它小。

置信度越高，门槛越低，排除得越谨慎，上限就越往大的方向移。

检验：如果要 95% 置信度，门槛是多少？写出 $r_{\rm up}$ 满足的方程（不用算出数值）。

### Turn 7 — 2026-10-22 (learner)

> (handwritten) Threshold = 1 − upper limit = 0.05; $e^{-r_{\rm up}T} = 0.05$; $r_{\rm up} = -\frac1T\ln(0.05)$
>
> 你可以用英文再给我出两题有关这3个distribution的题目

### Tutor

方程完全对：$e^{-r_{\rm up}T} = 0.05$，$r_{\rm up} = -\frac1T\ln 0.05$。

一个用词要改：第一行应写 **threshold = 1 − confidence level**，不是 1 − upper limit。置信度是 95% 这个百分数；上限是解出来的速率 $r_{\rm up}$，两者不是一个东西。

数值：$-\ln 0.05 = \ln 20 \approx 3.0$，所以 95% 上限约为 **3 个事例**（除以 $T$ 是速率），比 90% 的 2.3 个大，符合"置信度越高，上限越大"。

Two practice problems (GRE style; one question at a time is the rule, so answer both in one reply):

**Problem 1.** A radioactive source is counted for 100 s, and 2,500 counts are recorded. Approximately how long must the source be counted in total for the fractional uncertainty in the count to be 1%?
- (A) 200 s
- (B) 400 s
- (C) 1,000 s
- (D) 2,500 s
- (E) 10,000 s

**Problem 2.** A student guesses at random on 5 multiple-choice questions, each with 5 choices. What is the probability that the student gets at least one question right?
- (A) 0.20
- (B) 0.33
- (C) 0.67
- (D) 0.80
- (E) 1.00

For each problem, also name the distribution you used.

### Turn 8 — 2026-10-22 (learner)

> (handwritten) 1. Poisson Distribution. $r = \frac{2500}{100\,\mathrm s} = 25\,\mathrm s^{-1}$, $\lambda = 2500$. $\sigma = \sqrt\lambda = 50$, absolute error → relative error $\frac{\sigma}{\lambda} = \frac{1}{50} = 2\%$. To make relative error reach 1%: $\frac{1}{100} = 1\% \to \sqrt{\lambda_f} = 100$, $\lambda_f = 10000$. $r t_f = \lambda_f$, $t_f = \frac{\lambda_f}{r} = \frac{10000}{25}\,\mathrm s = 400\,\mathrm s$. (B)
>
> 2. Binomial Distribution. $N = 5$, $p = 0.2$. $P_{\rm least} = 1 - P_{\rm all\ wrong}$ ~~$= 1 - (0.2)^5$~~ $= 1 - (0.8)^5 = 1 - 0.32768 \approx 0.67$. (C)

### Tutor

两题都对，分布也选对了。

- **Problem 1：** 步骤完整。相对误差从 2% 降到 1% 要减半，所以计数要乘 4，时间也乘 4：$100\,\mathrm s \times 4 = 400\,\mathrm s$。这是不用重新算 $\lambda$ 的捷径。注意题目问的是总时间，(B) 正好是总时间。
- **Problem 2：** 你先写了 $1-(0.2)^5$，自己划掉改成 $1-(0.8)^5$。改得对："全错"是每题都错，每题错的概率是 $1-p = 0.8$，所以 $P(\text{全错}) = (1-p)^N$。$(0.2)^5$ 是"全对"的概率。

#78 到此结束。Studio 的卡 `supp-counting-distributions` 按这次的内容补充（见 Log）。
