---
type: resource
source: "Bilibili - 姜学长 (BV1kAw2z9E2s)"
topic: vibe coding workflow
tags:
  - vibe-coding
  - AI-development
  - software-engineering
  - workflow
created: 2026-03-20
---
![](https://i0.hdslb.com/bfs/archive/76ab8a8a4f00e4fe8a1318b0f29118a43b526040.jpg)

## Summary

When using AI for Vibe Coding, many developers face messy, unmaintainable code as projects grow. The root cause isn't AI capability — it's the lack of an engineering workflow. This video presents a framework of **9 pre-development steps** (in 3 phases) and **5 in-development principles** to keep AI-assisted projects on track from prototype to delivery.

## Pre-Development: 9 Steps in 3 Phases

### Phase 1 — Define the Blueprint (定图纸)

1. **Talk through requirements** — Have an open conversation with AI about pain points, target users, scenarios, and ideal features. Don't worry about rigor yet; prioritize information volume.
2. **Write a PRD with acceptance criteria** — Structure the conversation into a PRD (功能列表, 用户流程, 页面清单). Every feature must have a concrete definition of done (e.g., login success = what happens on failure? lockout? redirect?).
3. **Lock down visual style & page framework** — Pick 2–3 reference sites or have AI propose style options. Decide navigation layout and overall aesthetic upfront to prevent mid-project UI rewrites.

### Phase 2 — Build the Foundation (打地基)

4. **Define project boundaries & non-functional requirements** — Answer three questions: (1) local-only or public deployment? (2) user data / privacy / compliance concerns? (3) performance and cost limits?
5. **Lock the tech stack (verifiability > trendiness)** — Choose mature technologies with rich documentation and community support. AI outputs are more accurate and controllable when docs and examples are abundant.
6. **Draft a lightweight architecture doc** — Have AI output directory structure, core modules, and data models. Treat this as a living document — allow iteration, but record the reason for every change.

### Phase 3 — Set the Rules (立规矩)

7. **Create 3 root-level context documents** — `PRD.md` (requirements), `arc.md` (architecture), `project.md` (current status, known issues, next steps). These are AI's global context — **update them synchronously with every major change**, or AI will write new code against an outdated worldview.
8. **Define coding standards & reference implementations** — Specify conventions (e.g., TypeScript, naming rules, file size limits). Create a `reference/` folder with approved implementations of common UI components (buttons, forms, modals).
9. **Set up Git & quality gates** — Git is your safety belt: rollback to any stable point, run parallel feature branches. Establish quality gates (tests, lint) before writing the first line of code.

## In-Development: 5 Core Principles

> Mantra: **You define boundaries and acceptance; AI handles the labor.**

### 1. Small-step MVP iteration

One verifiable slice at a time: page opens → form submits → server saves → auth checks → list displays. After each slice: run tests, pass lint, commit to Git.

### 2. Human-driven module splitting

Never let all code accumulate in one file. Proactively split modules — AI won't do this well on its own, and monolithic files become unnavigable.

### 3. Restrict AI autonomy

Use "closed-loop prompts" — end every task with:
> "Only modify the files and scope I specified. Do not refactor unrelated code. Do not change UI style. Do not touch unrelated logic."

Use state summaries to keep AI's context aligned with reality.

### 4. Enforce security as a checklist

AI code optimizes for "it runs," not for security. Minimum guardrails:
- API keys never in frontend code or repository — use env vars + server-side calls
- Server-side must perform auth and input validation — never trust the frontend

### 5. Scientific error handling

If two fix attempts produce no new evidence, **stop guessing**. Correct approach:
1. **Minimize** — Reduce the problem to the smallest reproducible input
2. **Instrument** — Add logs, breakpoints, print key variables and branches
3. **Lock behavior** — Write a small test that captures the failing case
4. Let AI fix based on this evidence. If still stuck, **Git rollback** to the last stable point.

## Questions

1. **为什么 AI 生成的代码后期容易变得混乱？**
   因为缺乏工程流程。如果只是将任务简单丢给 AI 执行而没有设定好验收标准、架构约束和开发规范，AI 的生成逻辑会随着迭代变得发散，导致代码结构崩盘。

2. **在开发过程中，如何防止 AI 擅自改动无关逻辑？**
   采取"闭环提示"策略。在给 AI 发送指令时，明确要求"只修改指定文件和范围"，并严禁其在任务之外进行重构、改变 UI 风格或无关逻辑的变动。

## Detailed Chapter Summaries

### [00:00](https://www.bilibili.com/video/BV1kAw2z9E2s?t=0) — Introduction: The VibeCoding Problem & The Need for a Workflow
The video opens by highlighting a prevalent issue in VibeCoding: while AI can accelerate initial project development, code often becomes increasingly disorganized, eventually turning into 'legacy code' and causing the entire project to fail. The speaker clarifies that the root cause is not the AI's capability, but the lack of a proper engineering workflow to guide and manage the AI. Simply throwing tasks at the AI and waiting for execution is a recipe for disaster. The solution is a structured methodology, which the speaker introduces as a standard workflow consisting of nine preparatory steps and five core principles during development.

### [00:58](https://www.bilibili.com/video/BV1kAw2z9E2s?t=58) — Phase 1: Laying the Foundation (Pre-Development Steps 1-3: Defining the Blueprint)
This chapter details the first stage of pre-development, focused on 'Defining the Blueprint.' Step 1 is to have an open, conversational discussion with the AI to outline core pain points, target users, scenarios, and ideal features. Step 2 involves structuring this initial discussion into a formal Product Requirements Document (PRD), crucially including specific, measurable acceptance criteria for every function (e.g., defining exactly what 'login success' entails). Step 3 is about pre-determining the visual style and page framework by referencing existing sites or having the AI propose options, to prevent costly UI redesigns later.

### [02:41](https://www.bilibili.com/video/BV1kAw2z9E2s?t=161) — Phase 2: Building the Foundation (Pre-Development Steps 4-6: Securing the Base)
The second pre-development stage, 'Building the Foundation,' focuses on technical and architectural decisions. Step 4 requires defining project boundaries and non-functional requirements by answering key questions about deployment scope (local vs. public), data sensitivity, and performance/cost limits. Step 5 is about selecting the technology stack, emphasizing 'verifiability' over trendiness—choosing mature technologies with rich documentation and community support to ensure AI outputs are accurate and controllable. Step 6 involves having the AI draft a lightweight architecture document covering directory structure, core modules, and data models, treated as a living document subject to iterative updates.

### [04:10](https://www.bilibili.com/video/BV1kAw2z9E2s?t=250) — Phase 3: Establishing the Rules (Pre-Development Steps 7-9: Setting the Guardrails)
The final pre-development stage, 'Establishing the Rules,' creates the operational framework for the project. Step 7 is to create and maintain three key root directory documents (PRD.md, architecture.md, project.md) that serve as the AI's 'global context,' which must be updated synchronously with every major change. Step 8 involves defining coding standards (e.g., TypeScript usage, naming conventions) and creating a 'reference' folder with approved implementations for common UI components. Step 9, the final step before coding begins, is to set up Git for version control (described as a 'safety belt') and establish quality gates to ensure code stability.

### [05:55](https://www.bilibili.com/video/BV1kAw2z9E2s?t=355) — Core Principles for Execution (5 Key In-Development Points)
This chapter outlines the five critical principles to follow during active development, centered on the mantra: 'You define boundaries and validation; AI handles the labor.' Principle 1 is to adhere to an MVP and small-iteration approach, breaking work into verifiable slices. Principle 2 mandates human intervention for module splitting to prevent monolithic code. Principle 3 is to strictly limit AI autonomy using 'state summaries' and explicit instructions to prevent unwanted refactoring. Principle 4 is to enforce security as a non-negotiable checklist, covering practices like keeping API keys out of the frontend. Principle 5 provides a strategy for debugging: if two attempts don't yield new evidence, stop; then minimize the problem, add logging/tests, and use Git to roll back if necessary.

### [08:32](https://www.bilibili.com/video/BV1kAw2z9E2s?t=512) — Conclusion & Community Invitation
The speaker concludes by summarizing the entire framework: the nine pre-development steps provide the 'what and how,' while the five in-development principles determine if the project can truly be delivered and sustained. An invitation is extended to join the 'Jiang Xuezhang AI Learning Circle' for more practical AI techniques and to participate in a community 'VibeCoding Practical Challenge,' emphasizing learning through practice to improve AI skills.

## Supplementary Practices (from broader community)

The original framework covers the structural essentials. These additional practices, drawn from multiple practitioners, address common failure modes that the 9+5 framework doesn't explicitly cover.

### Prompt discipline

- **Ask AI to plan before coding each feature** — Not just at project level. Before each task, say "outline your approach, don't write code yet." This prevents overengineered solutions and forces a simplification discussion upfront.
- **Request multiple options, pick the simplest** — Have AI generate 2–3 approaches ranked by simplicity. You choose. This surfaces creative solutions while keeping complexity under control.
- **Feed relevant documentation into context** — Don't just pick mature stacks (Step 5) — paste the actual library docs, API references, or working examples into the prompt. AI accuracy depends on having the right docs in-context.

### Context & understanding

- **Fresh context per feature** — Start a new chat/session for each feature or major task. Stale context causes drift, hallucination, and conflicting implementations. Carry over only the 3 root documents (Step 7), not conversation history.
- **Ask AI to explain its code** — If you can't debug it, you can't maintain it. Periodically request file-level or function-level explanations to build your mental model and catch hidden assumptions ("black-box code" risk).

### Quality mindset

- **Treat all AI output as draft, not production code** — AI code optimizes for "it runs," not for edge cases, error handling, or maintainability. Every generation is a starting point that requires human review before it ships.

> For a deeper methodology (separate Proposal / Specs / Design / Tasks artifacts), see Zarar's [Spec-Driven Development](https://zarar.dev/spec-driven-development-from-vibe-coding-to-structured-development/) — an evolution beyond the single-PRD approach.

## Terminology

| Term | Definition |
|------|-----------|
| **PRD** | Product Requirement Document — feature list, user flows, acceptance criteria |
| **MVP** | Minimum Viable Product — smallest functional slice to validate core value |
| **Git** | Version control tool for code history, branching, and safe rollback |
| **Context (上下文)** | The global project information AI relies on, maintained via fixed documents (PRD.md, arc.md, project.md) |

## Source

[Bilibili Video: VibeCoding开发前9个步骤和开发中5个关键点](https://www.bilibili.com/video/BV1kAw2z9E2s) — 姜学长

**Supplementary sources:**
- [12 Rules to Vibe Code Without Frustration](https://creatoreconomy.so/p/12-rules-to-vibe-code-without-frustration) — Peter Yang
- [Spec-Driven Development: From Vibe Coding to Structured Development](https://zarar.dev/spec-driven-development-from-vibe-coding-to-structured-development/) — Zarar
- [Vibe Coding in Practice: Patterns, Pitfalls, and Prompting Strategies](https://aimconsulting.com/insights/vibe-coding-practice-patterns-pitfalls-prompting/) — AIM Consulting
- [8 Vibe Coding Best Practices (2026)](https://www.softr.io/blog/vibe-coding-best-practices) — Softr
- [A Structured Workflow for Vibe Coding Full-Stack Apps](https://dev.to/wasp/a-structured-workflow-for-vibe-coding-full-stack-apps-352l) — Wasp / DEV Community

---

## Appendix: Original Transcript (口播逐字稿)

哈喽各位 最近呢web coding啊是特别的火 但很多朋友都在反映一个问题 我通过web coding 我的项目推的特别快 但是呢越往后代码越乱 诶慢慢的变成一个什么 变成史三 然后你越赶呢就越差 最后牵一发而动全身 整个项目呢直接崩盘 问题呢不在于AI是强还是不强 问题是在于web coding 它并不是说哎我把这个活直接丢给AI 我就完事了 我就等他去执行就可以了 而是呢你还是需要去构建一套工程流程啊 去驾驭这个AI 所以今天我就给大家去讲解一套标准的工作流 把这个web coding的这个工作流程给他去讲透 这里呢我给它分成了开发前的九个步骤 和呢开发中的五个关键点 你可以自己去试一下 项目的成功率会大很多好 那首先我先来讲开发前的这九个准备的步骤 我给它定义成呢用AI去写第一行代码之前啊 你就需要用这几个步骤把这个地基给它打好 所以呢这九步我分成了三个阶段

第一个阶段叫做定图纸 第二阶段呢打地基 第三个阶段呢立规矩好 每一个阶段呢中间都包含三个小的步骤 我们先说定图纸 那定图纸首先的第一个步骤就是先别去写代码 先干嘛 先去导需求 就好像你去跟朋友聊天一样 把痛点 把目标用户 把使用场景和你理想中的核心功能 全部的都去讲给AI 这个时候你不用去追求严谨 追求信息量 OK定完需求以后 那步骤二 就是去把这个需求给整理成一个PRD的文档 但是虽然它写成PRD文档 但是你要去做一个验收标准 比如你可以让AI输出一份 比较结构化的PRD文档 它中间包括了功能列表 包括用户流程 包括页面清单 然后重点来了每个功能 你最后都要补一句 到底做到什么时候诶才算完成 标准一定要定好 比如说登录成功 它不是一句话要说清楚 登录失败提示是什么 会不会锁定成功以后会跳到哪里 如果你没有验收标准 AI一定会写的越来越发散好 那步骤三呢就是你去提前的定好这个 比如说视觉以及呢页面框架 在这里你可以去找两到三个参考网站 或者说让AI去给出几种风格的方案 你只需要去决定 比如说我的导航栏啊 怎么去放页面呢 有哪些区别 然后整体我想的气质是这种简约的还是这种 比如说豪华风 这步呢就是为了后面不让AI1边去写功能 一边去把UI推倒重来好 那等我们把这个图纸递完以后

那我们就可以进入第二步了 去把我们的这个地基给它打好 OK那地基呢也是分成三步 第一步你要明确项目的边界和非功能需求 针对这个呢 我建议你可以回答自己三个问题 第一这是本地自用还是要上线公开的 第二有没有用户的数据支付隐私合规 第三性能和成本有没有上限 这个就叫做非功能的需求 安全性能 可用性成本 你这四个不写清楚 我觉得你后面一定是会要返工的 OK然后再讲步骤五 我们要去锁定我们的技术站 但是原则呢并不是说越主流越好 而是呢越可验证越好 主流技术通常更稳 因为资料多 工具链成熟 AI也不容易瞎编 但更关键的是 你选的这个文档除了主流以外 你还有更多的 比如说社区的一些材料或者官方文档 或者清晰事例 然后呢能跑测试的 然后能进CR的 所以一句话就总结了 就是你不用追求特别潮 比如说某一个新的框架出来 你就立刻诶用它 而是要追求呢是可控的 然后呢包括资料更多的好 那步骤六呢就是让AI去出一个轻量化架构 这个草案呢你不要一次的就给他写死 就说诶他除了这个架构吵完以后就不要变了 你要他输出 比如说目录架构怎么去分层 核心模块有哪些数据模型到底长什么样 哪些逻辑必须要在服务端 而且注意呢这个是一个草案 我不会把它定义成 你要允许呢它能够去持续迭代 但是每次迭代你都需要去记录它的原因好 那讲完了地基的这三个步骤以后 接下来就到我们最后的

我们要去把这个规矩给他立好 那规矩利好呢 首先我们需要去用的什么 现在的agent或者说像大模型 他们交互都是会用一个文档 所以呢你需要去把PRD啊 包括架构 包括当前状态写成项目根目录的三个文本 固化成文本 比如呢你可以去写 比如说PRD点MD 然后呢可能还有什么arc点MD描述架构的 然后呢还有project点MD描述现在的这个项目的阶段 比如说做到哪一步 有哪些已知问题 下一步要干嘛 那这三份呢就是AI的全局上下文 重点就是每次大的改动 这三份必须要是同步更新的 否则AI就会按照旧的世界观去写新代码好 然后呢到步骤八 就是要去定开发规范和建参考资料了 让AI呢有照着抄的标准 比如必须要用tab script 必须组件的命名规则 然后呢文件大小上限 另外你还可以再建一个像reference这样的 一个文件夹 放你认可的按钮啊 表单啊 弹窗的这个标准实现好 那规矩的最后一步就是要写第一行代码的时候 你需要去把这个git 包括质量的这个闸门给他拉起来 git呢大家都知道或者不知道的 我给大家介绍一下 它是一个代码版本管理的一个工具 所以呢我定义它就是个安全带 比如说你某个代码通过AI去写着写着 直接写飞了 那你可以通过git1键去回溯到你以前的那个 最好的代码 同时呢通过这样多个分支的一个开发 能够去做不同的一个特性的并行开发 也不用担心会有冲突 OK好 那现在我们的九个步骤都给它定义好了 接下来我们就开始去讲 我们开发中的五个核心关键点 这里呢你需要记住的一句话 就是你负责边界和验收啊 那AI呢负责体力活

所以呢根据这个大的原则 那第一关键点就是你要去坚守 像小布迭代的一个MVP的法则 你不要一口气去让AI去写一大堆 而是呢一次只做一各可验证的小切片 比如说从页面能打开到能提交表单 到服务端保存 到权限校验到列表展示 你只要没完成一个能跑通的切片 那不就跑测试过lint 然后呢get提交一次 OK那关键点二呢就是人类必须要介入 这个很简单啊 因为我们需要去做模块拆分 你不允许诶 这个所有代码都放到同一个文件里面 那虽然我们前面看的很爽 但后面呢你通过这个文件你去找某一个功能 你会特别崩溃好 第三关键呢禁止AI权限 禁止AI做主 你可以用状态摘要去管理这上下文 比如说你让他修一个按钮 它可能顺便重写整个页面 所以呢每次任务结尾你可以去加一句重要提示 只改我点名的文件和范围 不要顺手重构 不要去改UI风格 不要去改 无关逻辑好 第四关键点呢就是要死守安全底线啊 这个呢不是口号 而是清单 因为AI写代码往往只求能跑 不会默认安全 所以呢你至少盯住这些底线 比如说像我们的API key永远不要进前端 因为很容易去被人给tag出来 然后不要进仓库 然后用环境变量和服务端去调用 另外服务端必须要做健全和授权校验 不能信任前端等 OK那最后的观点就是你要科学的去应对报错 如果两次没有去新增这个证据呢 你就停掉 先说一下问题面 然后报错的时候呢 你也可以把错误信息给AI去修一次 那你第一次做了一次 然后AI修了一次 如果连续两次都没有去新增一些证据啊 或者去提升 那只是在猜呢 那你就必须停掉 所以正确动作呢是有三步 第一个你要去做最小的复线 把问题缩到最小输入 第二个就是加日志加断点 然后打印关键的一个变量和分支 第三个呢就写一个小测试 把当事人的行为锁住 然后再让AI基于这些证据去修 那实在不行呢 我就只能去借助这个git 然后去回滚到上一个稳定点 别让他再乱改和扩大损失 OK所以呢我最后总结一下 我们现在列的一个开发前九个步骤 和开发中的五个关键点 那这九个步骤呢告诉你啊 要去做什么以及怎么做 那开发中的五个关键点呢 像小步迭代 然后主动拆分 然后包括限制AI的行为 实守安全底线 然后科学的去应对报错 就决定了你的项目到底能不能真正的去落地 去存活 Ok 那最后希望这套方法论 能够帮你顺利的去交付自己的产品 好 那说了这么多啊
