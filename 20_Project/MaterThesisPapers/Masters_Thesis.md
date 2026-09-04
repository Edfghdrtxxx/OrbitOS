---
title: Master's Thesis
type: project
status: active
area: "[[Physics Research]]"
created: 2026-02-13
due: 2027-06
priority: high
tags:
  - thesis
  - resnet
  - tpc
  - particle-id
updated: 2026-03-06
---
# Master's Thesis

## Context

**Objective:** Complete Master's thesis on deep learning-based particle identification (PID) for Time Projection Chambers (TPC) using simulated data. Primary method: ResNet-based classification. ^4d11fd

**Scope:** Simulation-only study — real experimental data is not required at this stage. The thesis demonstrates PID capability using the [[MATE-Automation]] pipeline.

**Success Metrics:**
- [ ] ResNet PID model achieves strong AUC / classification accuracy across target particle species on TPC simulation data
- [ ] Clear comparison baseline established (conventional method vs. ResNet)
- [ ] Thesis chapter structure drafted and approved by supervisor
- [ ] Thesis written and defended (June 2027)

**Key Constraints:**
- Data: TPC simulation data (Geant4-based or equivalent) — already available
- Compute: IMP lab resources; Python + ML framework (PyTorch or TensorFlow)
- Timeline: Thesis must be submitted before June 2027 (prerequisite for UTokyo Kenkyusei application)
- Dependencies: [[MATE-Automation]] codebase

---

## Actions

### Phase 1: Model Development & Results (Current)

> Current state: Simulation data available, ResNet PID model trained, preliminary AUC metrics produced.

- [ ] Document current model architecture (ResNet variant, input format, output classes)
- [ ] Record the first concrete milestone in the progress log (e.g., model architecture documented, baseline established)
- [ ] Identify remaining gaps: which particle types are underperforming?
- [ ] Run ablation or baseline comparison (e.g., conventional χ² PID vs. ResNet)
- [ ] Finalize training dataset scope and confirm reproducibility

### Phase 2: Analysis Deepening

- [ ] Evaluate model robustness: noise injection, energy range variation
- [ ] Clarify role of ViT / domain adaptation (DANN, MCD) — include in thesis if in scope; otherwise document as future work
- [ ] Produce publication-quality figures: ROC curves, confusion matrix, feature maps

### Phase 3: Thesis Writing

- [ ] Draft thesis structure and outline (discuss with supervisor)
- [ ] Write Chapter: Introduction & Motivation (TPC, PID problem, ML approach)
- [ ] Write Chapter: Methodology (ResNet architecture, training procedure, simulation setup)
- [ ] Write Chapter: Results (AUC, accuracy, comparisons, key figures)
- [ ] Write Chapter: Discussion & Conclusion
- [ ] Internal review with supervisor → revise
- [ ] Submit for defense (target: spring 2027)

### Parked until 2026-11-02

> [!note] Agent instruction
> Do not copy these into daily notes before 2026-11-02. On the first plan day on/after that date, propose which of these become weekly rows.

- Learn how to extract the ideas from literature by myself (~ 45 mins)
- Normalize the literature authors paradigm of the paper: the displayed name number should be consistent, and store it as a rule for all papers from now on. (~ 20 mins)
- Cross verify the results of angular regression to find more perspectives for confirmation and ensure all of them are consistent (~ 120 mins)
- Figure the anomaly in the distribution of energy regression of RANSAC out (~ 120 mins)
- Update the figure and overleaf project based on the anomaly analysis.
- One-shot BLOCK audit of the Physics_Informed NIM A paper (A) — [[MATE-Automation]] (`99_System/Handoff documents/paper-abd-2026-08-18/A_block_audit.md`) (~ 90 mins)
- Paper-completion chores: P1 funding, NST→NIM A packaging, blocked figures (D) — [[MATE-Automation]] (`99_System/Handoff documents/paper-abd-2026-08-18/D_paper_completion.md`) (~ 90 mins)

### Graduation map (frozen 2026-09-01)

Checked on SEP 个人工作台 + 培养指导 + IMP 工作流程 / 科研成果要求. Course credits pass. Defense and degree application have **not** arrived — not current failures. Target: 2027-06 graduation → UTokyo Kenkyusei 2027-10. [[Masters_Thesis]] · [[MATE-Automation]] · [[Japan_Itinerary]]

#### Course credits — pass

SEP 集中教学学分预警 (academic-type master’s) and 培养指导 课程成绩 agree.

| Bucket | Required | You have | Status |
|---|---|---|---|
| Total course credits | ≥ 30 | **30.0** (15 courses) | Met |
| Degree courses | ≥ 19 (public 7 + professional ≥ 12) | **26.0** degree-course credits; professional degree **19.0** | Met |
| Public required | 思政 2 + 学术道德 1 + 自然辩证法 1 + 硕士英语 3 | All four on the transcript | Met |
| Public elective | ≥ 2 | **2.0** | Met |
| GPA | — | **3.68** | Recorded |
| Fails | none | Lowest numeric: 基础学术论文写作 62, 粒子辐射探测技术 70, 硕士英语 79 | All passed |

`通过*` on several spring/summer 2025 courses means course evaluation was not submitted in 选课系统. Scores still exist. Not a fail; only a 教务部 cleanup if someone later flags it.

CET-6 is not a substitute for 硕士学位英语 here. English course already passed.

#### Now vs later

Enrollment **2024-09**, 学制 **3**. Today is the start of year 3 / 第五学期.

IMP’s still-posted 硕士生学习工作时间表 (2017 page, still the official 工作流程):

| When | Gate | Live status | What to do |
|---|---|---|---|
| Done | Course 30 credits | Met | Nothing |
| Done (early) | 开题 | *A Physical-Informed Deep Learning Approach for Data Analysis in MATE*, 已提交至培养单位 **2024-12-13** | Leave it. 培养计划 is 已完成 |
| This semester (Nov–Dec 2026, wait for notice) | 中期考核 | 尚未撰写 / 未开始 | **Do not** click 撰写申请. IMP runs it as a batch. Public 通知公示 has no 2026 中期 notice yet |
| This semester (table: 第五学期 12月) | 作学术报告 0/1, 听报告 0/10 | 培养指导 暂无数据, 未提交 | IMP historically **schedules** a 研究生学术论坛 where you give the 1 talk (last public “第N届” page is 2018; later rounds look internal). **Listening** to 10 is not fully automatic — 杨澄中论坛 and 所学术报告 run year-round. **Logging is always yours.** Submit 学术报告 + 社会实践 together; supervisor reviews **once** |
| Overdue on the 2017 table (第四学期 4月) | 社会实践 0/2 | 暂无数据 | Institute 主题教育 / 清明 / 拓展 / 科教帮扶 are the usual batch events. Still must be logged. April 2026 window on that table has already passed |
| Not yet (第六学期, ~Mar–May 2027) | 答辩申请, 学位申请 | 2026秋季 申请未开放; 答辩 未开始 | Correct. Summer-graduation clock from IMP’s 答辩时间表: TOC ~Jan 10–20; 初稿查重 ~Mar 25–30; **发表文章证明 ~Apr 10**; 送审 ~May 5; 答辩 ~May 25; 学位会 ~Jun 30; certificates ~Jul 15 |
| Not yet | 离校手续 | all 未办理 | Ignore until after defense |
| Parallel, IMP will not arrange this | Qualifying result | 发表论文 **暂无数据** | **NIM A** is the intended paper. IMP physics-master rule (2021 学位评定委员会): first completer (advisor excluded), IMP first affiliation + UCAS co-affiliation, ≥1 paper on Appendix 1 or 2 (NIM A is on Appendix 2), **or** 1 invention patent / software copyright. Proof needed ~**2027-04-10** |

#### What this map does not claim

- Course bar is met. 中期, 10+1 talks, 社会实践, and the qualifying paper are **not**.
- 学年考核 ≠ 中期. The 2025–2026 学年考核 files in the vault do not close 中期考核.
- 专业实践 on the SEP card has no count; academic master’s typically does not use that slot.

---

## Progress

- 2026-02-13: [[2026-02-13]] - Project note created
- 2026-02-26: [[2026-02-26]] - Refactored from placeholder to active state. Current status: simulation data available, ResNet PID model trained, preliminary AUC metrics in hand. Thesis writing not yet started.

### Current Results Log

| Date | Milestone | Notes |
|---|---|---|
| — | Record key milestones here (e.g., baseline established, model finalized, chapter drafted) | Updated as milestones are reached |

---

## Related

- [[MATE-Automation]] — The codebase for this thesis
- [[Japan_Itinerary]] — Post-graduation plans; thesis completion is the #1 gate
- [[Fundamental_Knowledge]] — Physics depth supports thesis quality and PhD exam prep

---

## Notes

- Simulation-only is standard at this stage — do not treat absence of real data as a blocker
- Primary advisor deliverable: a clean, reproducible ML pipeline on TPC simulation + written thesis
- Thesis completion by June 2027 is a hard prerequisite for the UTokyo Kenkyusei application window
