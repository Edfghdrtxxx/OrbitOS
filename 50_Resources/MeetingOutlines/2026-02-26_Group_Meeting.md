---
type: inbox
created: 2026-02-26
topic: 组会 — 束流实验数据分析 & MWDC平面关系
status: processed
source: AI transcription (corrected)
related:
tags:
  - inbox
  - meeting
---
## 议题一：束流实验数据分析

- 通过trigger计数筛选出不同计数率（10³, 10⁴, 10⁵, 10⁶）下的数据，并对波形进行了分析。
- 在10⁵计数率下发现数据存在堆积现象，混入了¹²C和¹⁶O的束流。
- 波形幅度谱的均值随计数率升高而降低，推测与波形反冲导致的基线下降有关。
- **决定：** 重点验证10⁵计数率下的数据分析算法可行性，并与模拟结果对比；10⁶计数率因信噪比低，作为未来展望，暂不深入分析。

## 议题二：MWDC平面关系问题

- 黄太森发现MWDC的两个编号可能互换，导致平面关系不正确。
- 刘恩强在分析中发现TTC分布存在中间有空隙的异常现象，初步判断是信号源或硬件问题导致，尚未找到确切原因。
- 刘恩强发现信号基线出现异常变化，原因待定。
- 黄太森提议改用插值法优化，认为当前采样率（12.5 ns）可能不足。
- 核心矛盾集中在采样精度与波形拟合的平衡上，技术方案尚未收敛。

## 议题三：其他进展

- hzh正在整理论文写作及机器学习在核物理中的相关文献收集工作，已有初步进展，同时被要求收集相关文献。
- 石福帅反馈模拟数据差异不大，从2.5G微增至2.9G，未做详细计算验证。

## 待办事项

| 负责人 | 任务                           |
| --- | ---------------------------- |
| 张卫东 | 统一图表坐标轴；重点分析10⁵计数率数据，验证算法可行性 |
| 黄太森 | 整理并修正MWDC平面关系代码，交换错误编号       |
| 黄太森 | 继续分析TTC分布异常原因；下周一与孙志鹏团队开会讨论  |
| 刘恩强 | 检查TTC分布拟合参数，确认是否为过零点选择不当导致异常 |
| hzh | 继续论文写作及ML相关文献整理              |

## 会议信息

- **时间：** 2026-02-26 09:30
- **主持：** 惠仁（导师）
- **形式：** 线上/线下（刘恩强在惠州远程参会）

## Reflections for My Thesis & Research

### Signal representation: classical vs ML framing

The core unresolved debate — whether 12.5 ns sampling is sufficient or interpolation is needed — is fundamentally a signal representation problem. My ResNet PID work faces the same class of question: how much information does a neural network need from TPC signals to reliably classify particles? This tension (sampling precision vs waveform fitting) is worth framing in my thesis literature review as the baseline my ML approach improves upon or complements.

### High-rate pileup as ML motivation

The 10⁵ pileup problem (mixed ¹²C and ¹⁶O) is exactly the scenario where classical algorithms struggle and ML can shine. Even though my thesis scope is simulation-only, pileup resilience works as a strong **motivation** and **future work direction**. It also gives a concrete talking point for UTokyo supervisor outreach — "my ML approach could address high-rate pileup scenarios in TPC experiments."

### Literature collection as thesis scaffolding

The advisor-assigned task "collect ML-for-nuclear-physics literature" should be treated strategically, not passively. Structure it as Chapter 2 scaffolding:
- **PID methods:** traditional (dE/dx cuts, Bethe-Bloch) vs ML (BDT, CNN, ResNet)
- **ML in nuclear/particle experiments:** ALICE TPC PID, STAR, sPHENICS
- **Domain adaptation** (DANN, MCD) for bridging simulation → real data

This literature review doubles as preparation for UTokyo entrance exam discussions about my research background.

### Debugging discipline from colleagues

- **Huang Taisen's MWDC plane swap:** a simple indexing error cascaded into wrong physics. Lesson: validate my data pipeline end-to-end (simulation → preprocessing → training) before trusting ML outputs.
- **Liu Enqiang's TTC anomaly:** hardware vs software ambiguity still unresolved. Lesson: when results look wrong, systematically isolate whether it's data, code, or physics — this discipline matters for thesis defense.
