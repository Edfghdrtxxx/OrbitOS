# 【BibiGPT】AI 一键总结：[VibeCoding开发前9个步骤和开发中5个关键点 #人工智能 #vibecoding #大模型 #AI工具 #姜学长](https://bibigpt.co/video/BV1kAw2z9E2s)

![](https://i0.hdslb.com/bfs/archive/76ab8a8a4f00e4fe8a1318b0f29118a43b526040.jpg)


## Summary
- 在使用 AI 进行 VibeCoding 开发时，许多开发者会面临项目后期代码混乱、难以维护的问题。这并非 AI 能力不足，而是缺乏工程化流程。本视频详细拆解了开发前的九个准备步骤及开发中的五个核心关键点，旨在通过构建标准工作流来驾驭 AI，确保项目能够从原型顺利走向落地交付，避免“牵一发而动全身”的崩盘局面。


### Highlights
- 在编写第一行代码前，必须经历定图纸、打地基、立规矩三个阶段的九个细化步骤，确保地基稳固 [01:03]。
- 必须构建 PRD、架构文档及项目状态文档作为 AI 的全局上下文，并随着项目迭代实时同步，否则 AI 将失去逻辑一致性 [04:47]。
- 坚守“小步迭代”的 MVP 法则，将任务拆解为可验证的小切片，每完成一个切片即进行测试、Lint 检查并提交 Git 版本 [07:23]。
- 人类开发者必须作为“边界与验收的把控者”，限制 AI 的自主权限，严禁其在修补 Bug 时顺手重构无关代码或修改 UI 风格 [08:34]。
- 面对报错时要保持科学应对，当 AI 连续两次尝试未果后，必须立即停止猜测，通过最小复现、增加日志断点或回滚代码来解决问题 [09:47]。


[#AI开发](https://bibigpt.co/search?q=AI%E5%BC%80%E5%8F%91) [#VibeCoding](https://bibigpt.co/search?q=VibeCoding) [#工程化](https://bibigpt.co/search?q=%E5%B7%A5%E7%A8%8B%E5%8C%96) [#大模型](https://bibigpt.co/search?q=%E5%A4%A7%E6%A8%A1%E5%9E%8B) [#软件工程](https://bibigpt.co/search?q=%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B)


### Questions <questions>
1. **[为什么 AI 生成的代码后期容易变得混乱？](https://bibigpt.co/search?q=%E4%B8%BA%E4%BB%80%E4%B9%88%20AI%20%E7%94%9F%E6%88%90%E7%9A%84%E4%BB%A3%E7%A0%81%E5%90%8E%E6%9C%9F%E5%AE%B9%E6%98%93%E5%8F%98%E5%BE%97%E6%B7%B7%E4%B9%B1%EF%BC%9F)**
  - 因为缺乏工程流程。如果只是将任务简单丢给 AI 执行而没有设定好验收标准、架构约束和开发规范，AI 的生成逻辑会随着迭代变得发散，导致代码结构崩盘。
- 2. **[在开发过程中，如何防止 AI 擅自改动无关逻辑？](https://bibigpt.co/search?q=%E5%9C%A8%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%EF%BC%8C%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2%20AI%20%E6%93%85%E8%87%AA%E6%94%B9%E5%8A%A8%E6%97%A0%E5%85%B3%E9%80%BB%E8%BE%91%EF%BC%9F)**
  - 采取“闭环提示”策略。在给 AI 发送指令时，明确要求“只修改指定文件和范围”，并严禁其在任务之外进行重构、改变 UI 风格或无关逻辑的变动。


### Terminology
- **PRD (Product Requirement Document)**: 产品需求文档，用于明确功能列表、用户流程及具体的验收标准。
- **MVP (Minimum Viable Product)**: 最小可行性产品，指通过最小化的功能切片快速迭代，验证产品核心价值。
- **Git**: 版本控制工具，用于管理代码版本、支持多分支并行开发，并在出现错误时提供代码回滚的安全保障。
- **上下文 (Context)**: AI 在处理任务时所依赖的项目全局信息，通过固化文档（如 PRD.md, arc.md）来确保 AI 对项目状态的认知保持一致。

---

## 视频章节总结 ｜ The Complete VibeCoding Blueprint: 9 Pre-Dev Steps & 5 In-Dev Rules to Avoid Project Collapse

This video presents a comprehensive framework for effective VibeCoding, addressing the common problem of projects becoming messy and collapsing. The core insight is that success requires a structured engineering workflow to manage AI, not just delegating tasks. The framework is divided into two main parts: nine pre-development steps and five key in-development principles. The pre-development phase focuses on laying a solid foundation through three stages: defining requirements, establishing the project foundation, and setting clear rules. The development phase emphasizes principles like small iterative steps, human oversight, restricting AI autonomy, maintaining security, and scientifically debugging errors. The value lies in providing a practical, actionable methodology to increase project success rates and ensure deliverable products when using AI coding tools.

### [00:00](https://bibigpt.co/content/8e6fe2f3-8be1-41d2-9871-887346d97e17?t=0.000) - 🎯 Introduction: The VibeCoding Problem & The Need for a Workflow
The video opens by highlighting a prevalent issue in VibeCoding: while AI can accelerate initial project development, code often becomes increasingly disorganized, eventually turning into 'legacy code' and causing the entire project to fail. The speaker clarifies that the root cause is not the AI's capability, but the lack of a proper engineering workflow to guide and manage the AI. Simply throwing tasks at the AI and waiting for execution is a recipe for disaster. The solution is a structured methodology, which the speaker introduces as a standard workflow consisting of nine preparatory steps and five core principles during development.

### [00:58](https://bibigpt.co/content/8e6fe2f3-8be1-41d2-9871-887346d97e17?t=58.180) - 📐 Phase 1: Laying the Foundation (Pre-Development Steps 1-3: Defining the Blueprint)
This chapter details the first stage of pre-development, focused on 'Defining the Blueprint.' Step 1 is to have an open, conversational discussion with the AI to outline core pain points, target users, scenarios, and ideal features. Step 2 involves structuring this initial discussion into a formal Product Requirements Document (PRD), crucially including specific, measurable acceptance criteria for every function (e.g., defining exactly what 'login success' entails). Step 3 is about pre-determining the visual style and page framework by referencing existing sites or having the AI propose options, to prevent costly UI redesigns later.

### [02:41](https://bibigpt.co/content/8e6fe2f3-8be1-41d2-9871-887346d97e17?t=161.280) - 🏗️ Phase 2: Building the Foundation (Pre-Development Steps 4-6: Securing the Base)
The second pre-development stage, 'Building the Foundation,' focuses on technical and architectural decisions. Step 4 requires defining project boundaries and non-functional requirements by answering key questions about deployment scope (local vs. public), data sensitivity, and performance/cost limits. Step 5 is about selecting the technology stack, emphasizing 'verifiability' over trendiness—choosing mature technologies with rich documentation and community support to ensure AI outputs are accurate and controllable. Step 6 involves having the AI draft a lightweight architecture document covering directory structure, core modules, and data models, treated as a living document subject to iterative updates.

### [04:10](https://bibigpt.co/content/8e6fe2f3-8be1-41d2-9871-887346d97e17?t=250.500) - ⚙️ Phase 3: Establishing the Rules (Pre-Development Steps 7-9: Setting the Guardrails)
The final pre-development stage, 'Establishing the Rules,' creates the operational framework for the project. Step 7 is to create and maintain three key root directory documents (PRD.md, architecture.md, project.md) that serve as the AI's 'global context,' which must be updated synchronously with every major change. Step 8 involves defining coding standards (e.g., TypeScript usage, naming conventions) and creating a 'reference' folder with approved implementations for common UI components. Step 9, the final step before coding begins, is to set up Git for version control (described as a 'safety belt') and establish quality gates to ensure code stability.

### [05:55](https://bibigpt.co/content/8e6fe2f3-8be1-41d2-9871-887346d97e17?t=355.580) - 🚀 Core Principles for Execution (5 Key In-Development Points)
This chapter outlines the five critical principles to follow during active development, centered on the mantra: 'You define boundaries and validation; AI handles the labor.' Principle 1 is to adhere to an MVP and small-iteration approach, breaking work into verifiable slices. Principle 2 mandates human intervention for module splitting to prevent monolithic code. Principle 3 is to strictly limit AI autonomy using 'state summaries' and explicit instructions to prevent unwanted refactoring. Principle 4 is to enforce security as a non-negotiable checklist, covering practices like keeping API keys out of the frontend. Principle 5 provides a strategy for debugging: if two attempts don't yield new evidence, stop; then minimize the problem, add logging/tests, and use Git to roll back if necessary.

### [08:32](https://bibigpt.co/content/8e6fe2f3-8be1-41d2-9871-887346d97e17?t=512.670) - 💡 Conclusion & Community Invitation
The speaker concludes by summarizing the entire framework: the nine pre-development steps provide the 'what and how,' while the five in-development principles determine if the project can truly be delivered and sustained. An invitation is extended to join the 'Jiang Xuezhang AI Learning Circle' for more practical AI techniques and to participate in a community 'VibeCoding Practical Challenge,' emphasizing learning through practice to improve AI skills.

---

## 口播逐字稿

### 🎯 Introduction: The VibeCoding Problem & The Need for a Workflow
哈喽各位 最近呢web coding啊是特别的火 但很多朋友都在反映一个问题 我通过web coding
我的项目推的特别快 但是呢越往后代码越乱 诶慢慢的变成一个什么 变成史三
然后你越赶呢就越差 最后牵一发而动全身 整个项目呢直接崩盘 问题呢不在于AI是强还是不强
问题是在于web coding 它并不是说哎我把这个活直接丢给AI 我就完事了 我就等他去执行就可以了
而是呢你还是需要去构建一套工程流程啊 去驾驭这个AI 所以今天我就给大家去讲解一套标准的工作流 把这个web coding的这个工作流程给他去讲透
这里呢我给它分成了开发前的九个步骤 和呢开发中的五个关键点 你可以自己去试一下 项目的成功率会大很多好
那首先我先来讲开发前的这九个准备的步骤 我给它定义成呢用AI去写第一行代码之前啊 你就需要用这几个步骤把这个地基给它打好 所以呢这九步我分成了三个阶段

### 📐 Phase 1: Laying the Foundation (Pre-Development Steps 1-3: Defining the Blueprint)
第一个阶段叫做定图纸 第二阶段呢打地基 第三个阶段呢立规矩好 每一个阶段呢中间都包含三个小的步骤
我们先说定图纸 那定图纸首先的第一个步骤就是先别去写代码 先干嘛 先去导需求
就好像你去跟朋友聊天一样 把痛点 把目标用户 把使用场景和你理想中的核心功能
全部的都去讲给AI 这个时候你不用去追求严谨 追求信息量 OK定完需求以后
那步骤二 就是去把这个需求给整理成一个PRD的文档 但是虽然它写成PRD文档 但是你要去做一个验收标准
比如你可以让AI输出一份 比较结构化的PRD文档 它中间包括了功能列表 包括用户流程
包括页面清单 然后重点来了每个功能 你最后都要补一句 到底做到什么时候诶才算完成
标准一定要定好 比如说登录成功 它不是一句话要说清楚 登录失败提示是什么
会不会锁定成功以后会跳到哪里 如果你没有验收标准 AI一定会写的越来越发散好 那步骤三呢就是你去提前的定好这个
比如说视觉以及呢页面框架 在这里你可以去找两到三个参考网站 或者说让AI去给出几种风格的方案 你只需要去决定
比如说我的导航栏啊 怎么去放页面呢 有哪些区别 然后整体我想的气质是这种简约的还是这种
比如说豪华风 这步呢就是为了后面不让AI1边去写功能 一边去把UI推倒重来好 那等我们把这个图纸递完以后

### 🏗️ Phase 2: Building the Foundation (Pre-Development Steps 4-6: Securing the Base)
那我们就可以进入第二步了 去把我们的这个地基给它打好 OK那地基呢也是分成三步 第一步你要明确项目的边界和非功能需求
针对这个呢 我建议你可以回答自己三个问题 第一这是本地自用还是要上线公开的 第二有没有用户的数据支付隐私合规
第三性能和成本有没有上限 这个就叫做非功能的需求 安全性能 可用性成本
你这四个不写清楚 我觉得你后面一定是会要返工的 OK然后再讲步骤五 我们要去锁定我们的技术站
但是原则呢并不是说越主流越好 而是呢越可验证越好 主流技术通常更稳 因为资料多
工具链成熟 AI也不容易瞎编 但更关键的是 你选的这个文档除了主流以外
你还有更多的 比如说社区的一些材料或者官方文档 或者清晰事例 然后呢能跑测试的
然后能进CR的 所以一句话就总结了 就是你不用追求特别潮 比如说某一个新的框架出来
你就立刻诶用它 而是要追求呢是可控的 然后呢包括资料更多的好 那步骤六呢就是让AI去出一个轻量化架构
这个草案呢你不要一次的就给他写死 就说诶他除了这个架构吵完以后就不要变了 你要他输出 比如说目录架构怎么去分层
核心模块有哪些数据模型到底长什么样 哪些逻辑必须要在服务端 而且注意呢这个是一个草案 我不会把它定义成
你要允许呢它能够去持续迭代 但是每次迭代你都需要去记录它的原因好 那讲完了地基的这三个步骤以后 接下来就到我们最后的

### ⚙️ Phase 3: Establishing the Rules (Pre-Development Steps 7-9: Setting the Guardrails)
我们要去把这个规矩给他立好 那规矩利好呢 首先我们需要去用的什么 现在的agent或者说像大模型
他们交互都是会用一个文档 所以呢你需要去把PRD啊 包括架构 包括当前状态写成项目根目录的三个文本
固化成文本 比如呢你可以去写 比如说PRD点MD 然后呢可能还有什么arc点MD描述架构的
然后呢还有project点MD描述现在的这个项目的阶段 比如说做到哪一步 有哪些已知问题 下一步要干嘛
那这三份呢就是AI的全局上下文 重点就是每次大的改动 这三份必须要是同步更新的 否则AI就会按照旧的世界观去写新代码好
然后呢到步骤八 就是要去定开发规范和建参考资料了 让AI呢有照着抄的标准 比如必须要用tab script
必须组件的命名规则 然后呢文件大小上限 另外你还可以再建一个像reference这样的 一个文件夹
放你认可的按钮啊 表单啊 弹窗的这个标准实现好 那规矩的最后一步就是要写第一行代码的时候
你需要去把这个git 包括质量的这个闸门给他拉起来 git呢大家都知道或者不知道的 我给大家介绍一下
它是一个代码版本管理的一个工具 所以呢我定义它就是个安全带 比如说你某个代码通过AI去写着写着 直接写飞了
那你可以通过git1键去回溯到你以前的那个 最好的代码 同时呢通过这样多个分支的一个开发 能够去做不同的一个特性的并行开发
也不用担心会有冲突 OK好 那现在我们的九个步骤都给它定义好了 接下来我们就开始去讲
我们开发中的五个核心关键点 这里呢你需要记住的一句话 就是你负责边界和验收啊 那AI呢负责体力活

### 🚀 Core Principles for Execution (5 Key In-Development Points)
所以呢根据这个大的原则 那第一关键点就是你要去坚守 像小布迭代的一个MVP的法则 你不要一口气去让AI去写一大堆
而是呢一次只做一各可验证的小切片 比如说从页面能打开到能提交表单 到服务端保存 到权限校验到列表展示
你只要没完成一个能跑通的切片 那不就跑测试过lint 然后呢get提交一次 OK那关键点二呢就是人类必须要介入
这个很简单啊 因为我们需要去做模块拆分 你不允许诶 这个所有代码都放到同一个文件里面
那虽然我们前面看的很爽 但后面呢你通过这个文件你去找某一个功能 你会特别崩溃好 第三关键呢禁止AI权限
禁止AI做主 你可以用状态摘要去管理这上下文 比如说你让他修一个按钮 它可能顺便重写整个页面
所以呢每次任务结尾你可以去加一句重要提示 只改我点名的文件和范围 不要顺手重构 不要去改UI风格
不要去改 无关逻辑好 第四关键点呢就是要死守安全底线啊 这个呢不是口号
而是清单 因为AI写代码往往只求能跑 不会默认安全 所以呢你至少盯住这些底线
比如说像我们的API key永远不要进前端 因为很容易去被人给tag出来 然后不要进仓库 然后用环境变量和服务端去调用
另外服务端必须要做健全和授权校验 不能信任前端等 OK那最后的观点就是你要科学的去应对报错 如果两次没有去新增这个证据呢
你就停掉 先说一下问题面 然后报错的时候呢 你也可以把错误信息给AI去修一次
那你第一次做了一次 然后AI修了一次 如果连续两次都没有去新增一些证据啊 或者去提升
那只是在猜呢 那你就必须停掉 所以正确动作呢是有三步 第一个你要去做最小的复线
把问题缩到最小输入 第二个就是加日志加断点 然后打印关键的一个变量和分支 第三个呢就写一个小测试
把当事人的行为锁住 然后再让AI基于这些证据去修 那实在不行呢 我就只能去借助这个git
然后去回滚到上一个稳定点 别让他再乱改和扩大损失 OK所以呢我最后总结一下 我们现在列的一个开发前九个步骤
和开发中的五个关键点 那这九个步骤呢告诉你啊 要去做什么以及怎么做 那开发中的五个关键点呢
像小步迭代 然后主动拆分 然后包括限制AI的行为 实守安全底线
然后科学的去应对报错 就决定了你的项目到底能不能真正的去落地 去存活 Ok
那最后希望这套方法论 能够帮你顺利的去交付自己的产品 好 那说了这么多啊

### 💡 Conclusion & Community Invitation
如果你想了解更多的AI实战技巧 或者和更多的AI同行者在这条路上走得更远的 也会了解江校长AI学习圈 那今天呢我们也正式的会开启我们的实战
web coding的实战打卡 我们的宗旨呢 也是希望社区的朋友们都是从链中学 去
不断的通过实践去提升自己的AI技巧好 那如果感兴趣呢 我们可以评论区见