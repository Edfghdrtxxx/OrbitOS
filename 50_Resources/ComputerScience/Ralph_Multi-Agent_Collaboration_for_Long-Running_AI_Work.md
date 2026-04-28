---
type: resource
status: processed
source_type: video
platform: BibiGPT / Bilibili
author: Ralph
title: Ralph+多智能体协同，让AI长时高品质工作，从原理到实践
source_url: https://bibigpt.co/video/BV1t9oZBDENp
topic:
  - AI agents
  - Claude Code
  - multi-agent collaboration
  - long-running AI work
tags:
  - AI-Agent
  - ClaudeCode
  - Multi-Agent
  - Workflow
created: 2026-04-28
processed: 2026-04-28
---
# Ralph + Multi-Agent Collaboration for Long-Running AI Work

> Source title: Ralph+多智能体协同，让AI长时高品质工作，从原理到实践  
> Source type: BibiGPT video export  
> Processing mode: curated source note; appendix contains BibiGPT export material plus both corrected and raw ASR transcript sections.

## Source Card

- **Core subject:** Long-running AI work using context reset, file-based coordination, and multi-agent orchestration.
- **Main comparison:** Ralph-style `while` loop sessions versus orchestrated [[Multi-Agent Collaboration]].
- **Primary workflow pattern:** [[Orchestrator Agent]] coordinates planner, developer, and tester agents while keeping its own context clean.
- **Quality mechanism:** independent testing agents report bugs back to the original developer agent, creating a [[Feedback Loop]].
- **Context strategy:** split large work into isolated agent sessions and exchange only file paths or local files to reduce context pollution.
- **Knowledge strategy:** record bug-fix experience so later agents can reuse lessons within the same run.

## Bilingual Digest / 双语摘要

This source explains how long-duration AI work can be made more stable by separating planning, development, testing, and coordination across multiple agents. The central problem is that a single long chat gradually loses usable context and quality declines. Ralph addresses this by repeatedly launching fresh sessions through a loop script. The multi-agent method instead keeps a main orchestrator focused on coordination while specialized sub-agents do the actual work in isolated contexts.

这份资料讨论如何让 AI 更稳定地完成长时任务。核心问题是：单个长对话会逐渐消耗上下文，导致理解负担增加、质量下降。Ralph 的做法是用循环脚本不断启动新会话；多智能体方案则让主会话作为组织智能体，只负责调度，把计划、开发、测试交给独立上下文中的子智能体完成。

The video emphasizes that inter-agent communication should happen through files rather than long chat messages. The orchestrator should receive file paths, not full implementation details, so its context remains small. Testing should be performed by separate agents, and when a bug is found, the same developer agent should continue the fix because it retains the relevant implementation context.

视频强调，智能体之间最好通过本地文件传递信息，而不是在主对话里粘贴大段内容。组织智能体只接收文件路径，不阅读完整成果，从而保持上下文干净。测试应由独立测试智能体完成；发现 bug 后，应回到原来的开发智能体继续修复，因为它保留了开发阶段的上下文。

## Key Ideas / 关键概念

1. **Context isolation / 上下文隔离**  
   Large work is decomposed into smaller tasks, each handled in a fresh or specialized context.

2. **Orchestration instead of direct execution / 调度优先，而非主会话亲自执行**  
   The main agent coordinates the workflow and avoids doing implementation work.

3. **File-based handoff / 基于文件的交接**  
   Agents write plans, outputs, test reports, and logs to files; the orchestrator passes paths around.

4. **Independent verification / 独立验收**  
   Separate tester agents improve quality compared with self-testing by the developer agent.

5. **Same-agent repair loop / 同一智能体修复闭环**  
   Bugs should return to the original developer and original tester, preserving relevant context.

6. **Experience retention / 经验沉淀**  
   Bug-fix lessons are recorded so later work can avoid repeating the same mistakes.

## Related OrbitOS Links

- [[Claude Code]]
- [[AI Agent]]
- [[Multi-Agent Collaboration]]
- [[Orchestrator Agent]]
- [[Feedback Loop]]
- [[Context Window]]
- [[Experience Retention]]
- [[Long-Running AI Work]]
- [[Workflow Design]]
- [[Vibe Coding]]

## Source Outline

- **00:00 — Opening & overview:** the motivation for long-running autonomous AI work.
- **00:38 — Ralph loop:** using repeated fresh sessions to avoid context exhaustion.
- **04:22 — Multi-agent collaboration:** replacing a shell-maintained loop with orchestrated sub-agents.
- **05:06 — Workflow design:** planner, developer, testers, bug-fix loop, and progress logs.
- **07:24 — Orchestrator prompt:** constraints that keep the orchestrator focused on coordination.
- **10:09 — Sub-agent prompts:** file handoff, output format, and experience accumulation.
- **12:30 — Execution & results:** hours-long execution, iterative testing, and final synthesis.

## Retrieval Notes

- Use this note when thinking about [[Claude Code]] workflows for long-running tasks.
- Use the appendix for the full exported transcript and screenshots.
- Treat the digest above as source summary, not personal endorsement or implementation decision.

---

## Appendix — BibiGPT Export Material and Transcript Corrections

# 【BibiGPT】AI 一键总结：[Ralph+多智能体协同，让AI长时高品质工作，从原理到实践](https://bibigpt.co/video/BV1t9oZBDENp)

![](https://i2.hdslb.com/bfs/archive/3d5b7ce09d4a132028e7848aea9c8c699667b72a.jpg)


## Summary
本视频深入探讨了如何利用多智能体（Multi-Agent）协同技术，实现AI在长时、高品质任务中的自主工作。作者对比了简单的循环脚本方案与高效的多智能体方案，重点解析了通过组织智能体调度子智能体，结合文件交换与自动迭代测试，让AI能够脱离人工干预，独立完成从需求拆解到开发测试的全流程，大幅提升了复杂任务的自动化水平。


### Highlights
- 针对长时任务，通过多智能体协同架构，可以将复杂的超长任务拆解，利用独立的上下文窗口避免AI因负担过重导致的工作质量下滑。
- 引入了“组织智能体”与“执行智能体”的概念，由组织智能体负责调度与流程管理，确保任务按计划推进，使整体流程更加灵活且易于维护。
- 在工作流中引入闭环反馈机制：测试智能体发现Bug后，直接反馈给对应的开发智能体进行针对性修复，而不是盲目启动新任务 [08:35]。
- 强调智能体间应通过本地文件交换进度与结果，而非在大段对话中传递信息，这能极大节省组织智能体的上下文空间，提高信息传递效率 [13:10]。
- 利用经验沉淀机制，要求开发智能体在修复Bug后归纳经验，确保后续任务能够避免重复犯错，从而实现AI能力的自我迭代 [15:10]。


[#AIAgent](https://bibigpt.co/search?q=AIAgent) [#多智能体协同](https://bibigpt.co/search?q=%E5%A4%9A%E6%99%BA%E8%83%BD%E4%BD%93%E5%8D%8F%E5%90%8C) [#自动化开发](https://bibigpt.co/search?q=%E8%87%AA%E5%8A%A8%E5%8C%96%E5%BC%80%E5%8F%91) [#ClaudeCode](https://bibigpt.co/search?q=ClaudeCode) [#工作流优化](https://bibigpt.co/search?q=%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%BC%98%E5%8C%96)


### Questions
1. **[为什么推荐使用多智能体协同，而不是简单的 `while` 循环脚本？](https://bibigpt.co/search?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8%E5%A4%9A%E6%99%BA%E8%83%BD%E4%BD%93%E5%8D%8F%E5%90%8C%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E7%AE%80%E5%8D%95%E7%9A%84%20%60while%60%20%E5%BE%AA%E7%8E%AF%E8%84%9A%E6%9C%AC%EF%BC%9F)**
  - 简单脚本缺乏智能调度能力，难以处理复杂的逻辑分支和错误修复。多智能体协同通过专门的测试与开发角色分离，并引入闭环修复机制，能显著提高复杂任务的成功率和代码质量。
2. **[如何解决AI处理长任务时上下文（Context）耗尽的问题？](https://bibigpt.co/search?q=%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3AI%E5%A4%84%E7%90%86%E9%95%BF%E4%BB%BB%E5%8A%A1%E6%97%B6%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%88Context%EF%BC%89%E8%80%97%E5%B0%BD%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%9F)**
  - 核心在于“切片”与“隔离”。通过将大任务拆分为若干小任务，并为每个小任务启动独立的对话（或智能体实例），确保每个任务都能获得干净、充足的上下文空间。


### Terminology
- **组织智能体 (Orchestrator Agent)**: 负责全局调度、任务拆解和流程监控的中心角色，它不直接编写代码，而是将需求分发给子智能体并汇总结果。
- **上下文窗口 (Context Window)**: AI 模型处理信息的能力边界，长任务中必须通过重置或拆分来避免空间耗尽。
- **闭环反馈 (Feedback Loop)**: 指测试智能体将检测出的问题返回给开发智能体进行修复，直至验收合格，形成任务执行的自我纠错闭环。
- **经验沉淀 (Knowledge Retention)**: 记录执行过程中的错误与解决方案，并将其存入文档，供后续的任务执行环节直接读取，从而提升效率。

---

## 视频章节总结 ｜ Ralph & Multi-Agent Collaboration: Achieving Long-Duration, High-Quality AI Work — From Theory to Practice

This video explains how to make AI work long hours autonomously with high quality using two approaches. The first is Ralph, a popular community project that loops through new chat sessions, resetting context to handle large tasks. The second, preferred method uses a multi-agent system where an orchestrator agent coordinates specialized sub-agents for planning, development, and testing. The video details how to design workflow, write prompts, and enforce quality constraints. It also shares practical tips like using files for inter-agent communication and accumulating experience to avoid repeated mistakes. The result is a system that can run for hours, producing complex outputs like video presentation slides, with minimal human intervention.

### [00:00](https://bibigpt.co/content/78ed2b17-1f5b-4a95-8e51-35e609fa3ccf?t=0.000) - 🎬 Opening & Overview

![章节截图 00:00](https://bibigpt-apps.chatvid.ai/screenshots/bilibili.com/BV1t9oZBDENp/0.jpg)

The speaker shares a personal experience: giving an AI a task before bed and waking up to a completed 4-hour job. This raises the question of how to achieve continuous, autonomous AI work. The video references Anthropic's article on "Harness Engineering" (? inferred) and the community's interest in long-running AI agents. Two approaches are previewed: the popular Ralph project that uses a while-loop to spawn new chat sessions, and a more flexible multi-agent collaboration method. The goal is to explain both from principles to practice.

### [00:38](https://bibigpt.co/content/78ed2b17-1f5b-4a95-8e51-35e609fa3ccf?t=38.650) - 🔄 Ralph: Looping AI Work

![章节截图 00:38](https://bibigpt-apps.chatvid.ai/screenshots/bilibili.com/BV1t9oZBDENp/38.65.jpg)

The video explains why giving AI a very long task fails: context window depletes and quality drops. The official solution is to split the task into subtasks and execute each in a fresh chat with a clean context. Ralph implements this with a shell script that runs a while-loop, calling the CLI `claude` command (? inferred) to start new sessions. Each session reads the same prompt, which instructs it to read a progress file, pick the next task, work, and mark it done. This files-based communication allows different tasks per cycle. Quality is enforced by requiring the AI to read full context documents and run tests, though self-testing is limited—better to use a separate testing agent. The video also shows how to use Ralph by preparing a requirements doc and running the script.

### [04:22](https://bibigpt.co/content/78ed2b17-1f5b-4a95-8e51-35e609fa3ccf?t=262.880) - 🤖 Multi-Agent Collaboration Concept

![章节截图 04:22](https://bibigpt-apps.chatvid.ai/screenshots/bilibili.com/BV1t9oZBDENp/262.88.jpg)

The multi-agent approach is introduced as a superior alternative. The core idea is to isolate tasks in separate context windows using specialized agents. The orchestrator agent sits in the main chat and only coordinates, never touching code. Sub-agents handle planning, development, and testing. Each sub-agent is defined by a template stored in the `.claude/agents` directory (? inferred). The orchestrator spawns them by name using the Agent tool. This keeps the orchestrator's context clean and allows each agent to focus on its job with full context.

### [05:06](https://bibigpt.co/content/78ed2b17-1f5b-4a95-8e51-35e609fa3ccf?t=306.380) - 🏗️ Designing the Workflow

![章节截图 05:06](https://bibigpt-apps.chatvid.ai/screenshots/bilibili.com/BV1t9oZBDENp/306.38.jpg)

Using the example of generating video presentation slides, the workflow is detailed: the orchestrator receives a requirements doc, forwards it to a planner agent that returns a plan file path. It then iterates through tasks, spawning a developer agent for each. The developer returns the output file path, not the code, to avoid context pollution. The orchestrator then launches up to three tester agents in parallel (for layout, aesthetics, and animation). Each tester writes results to files and returns paths. If bugs are found, the orchestrator invokes the same developer agent (not a new one) to fix them, leveraging its session history, and then asks the original tester to re-verify. This fix-verify loop runs up to three times. Progress is logged throughout.

### [07:24](https://bibigpt.co/content/78ed2b17-1f5b-4a95-8e51-35e609fa3ccf?t=444.670) - 📝 Crafting the Orchestrator Prompt

![章节截图 07:24](https://bibigpt-apps.chatvid.ai/screenshots/bilibili.com/BV1t9oZBDENp/444.67.jpg)

The orchestrator prompt is designed to enforce the workflow. It instructs the orchestrator to never read file contents, only paths, and to first create a log file. A key hack is to tell the AI how to retrieve agent IDs from local filenames, solving a common issue where the model couldn't find IDs. The prompt then spells out the steps: use the planner, enter a development loop, launch developer, run three parallel testers, collect verdicts, and enter a correction loop. It emphasizes that the original developer and tester must be reused via the `resume` parameter (? inferred) in the Agent tool (or the newer `message` method, ? inferred). After each task, the log is updated, and a final summary is generated.

### [10:09](https://bibigpt.co/content/78ed2b17-1f5b-4a95-8e51-35e609fa3ccf?t=609.840) - 🧩 Sub-Agent Prompts & Experience Retention

![章节截图 10:09](https://bibigpt-apps.chatvid.ai/screenshots/bilibili.com/BV1t9oZBDENp/609.84.jpg)

Sub-agent templates consist of a configuration header (name, model, skills, permissions) and a system prompt. The prompt serves two roles: fitting into the workflow and doing the actual work. For the workflow, it must specify reading from and writing to designated files, and returning only file paths. For quality, the developer agent writes tips and lessons learned into an experience file after fixing bugs. This experience is then read by later agents in the same run, speeding up subsequent tasks. The video also shares custom skills tailored for generating information-rich (rather than just pretty) slides, and recommends three third-party skills.

### [12:30](https://bibigpt.co/content/78ed2b17-1f5b-4a95-8e51-35e609fa3ccf?t=750.720) - 🚀 Execution & Results

![章节截图 12:30](https://bibigpt-apps.chatvid.ai/screenshots/bilibili.com/BV1t9oZBDENp/750.72.jpg)

With all agents designed, the user simply sends the requirements doc and the orchestrator prompt to the AI and can walk away. The system ran for several hours, producing a set of presentation slides with some pages passing on the first try and others requiring multiple iterations. The final result combined the best parts from three generated versions. The speaker also displays the work log and the accumulated experience document. The method proves that by combining orchestration, context isolation, and careful prompt engineering, AI can autonomously deliver complex, high-quality output over extended periods.

---

## Corrected Transcript — AI-assisted cleanup

> Note: This section is an edited cleanup of the ASR transcript below. Technical names marked with `(? inferred)` were inferred from context and should be verified against the original video/source if exact quotation matters.

### 🎬 Opening & Overview
睡前我给 AI 发了一个指令，它吭哧吭哧连续干了 4 个小时的活，醒来之后我直接验收成果，非常爽。怎么做到的呢？去年底，Anthropic 发表文章介绍 Harness Engineering（? inferred），
主要讨论如何让 Agent 长时间不间断地工作。此后，这个话题在社区就一直很火。今天我们从原理到实践彻底讲清楚这个事情。提醒一下，今天的视频知识点和秘籍，我劝你先收藏，回头细看。
我会介绍两种方案，一种是社区很火的方案，通过一个 while 循环不断启动新会话来执行任务，典型代表是 Ralph 项目。但我推荐的是另外一个更好用的方式：多智能体协同的方案，更灵活也更好用。来，马上开始。
据说 vibe coding 分为三个段位：青铜阶段是想说啥就说啥，没有章法，然后认为 AI 是傻子；黄金阶段，知道拆分任务，做一步看一步，觉得 AI 还是有点东西的，但还得陪着；到了王者阶段，那可以设定一些 Harness（? inferred）策略，丢下一句话，然后放心走开。

### 🔄 Ralph: Looping AI Work
但是想这么潇洒也没这么容易。如果你试图给 AI 丢一个很长的任务，那么随着工作的展开，模型可用的上下文空间会越来越少，此时模型的理解负担会越来越大，导致工作质量越来越差。
最后上下文耗尽，模型就停止工作了。官方的设想是，首先还是需要制定详细的工作计划，把一个大任务拆分成很多具体的任务。然后每次启动一个全新的会话去执行其中一个任务，
不断重复这个过程，直到所有的工作完成。由于每个任务都是在新的会话里面实现的，因此每个任务都有独立的新的上下文窗口。你发现没有？
这个方法和前面说的黄金段位的做法其实是一样的：做好规划，让 AI 一次只干一个工作。只不过之前要你陪着 AI，这里我们要用一个新的方式让 AI 自己动起来。有个叫 Ralph 的项目实现了这个方法，
这个项目的核心代码是一个 shell 脚本，其中核心代码就这几行：写一个 while 循环，不断地用 claude 命令启动新的会话。针对这个脚本，我们可以发现三个事情。第一个，这个循环是由一个 shell 脚本来维护的，
而我们后面会介绍的多智能体方案，那个循环是用组织智能体来维护的。第二，它使用 Claude Code 的方式是用 claude 命令，在后台静默执行。这个方法估计很多人不知道，大家习惯的用法都是使用 Claude 客户端。其实这两者是等价的，
你执行 `claude 你好` 命令，跟在 Claude 客户端里面写“你好”，作用是一样的。第三，每次启动新会话时，AI 都会读取同一段提示词开展工作。那么这里就有一个问题，为什么读取相同的提示词却会做不一样的事情呢？我们来看一下这段提示词，
在提示词中要求 AI 在每轮会话中的主要工作流程是：首先要读取文件，了解需求和进度，然后从待办任务中挑选一个最重要的来执行。完成工作之后，在相关文件中把这个任务标记为已完成。所以在第一个会话中，AI 可能做的是任务一，
在第二个会话中，AI 做的就是任务二。以此类推，前一个会话里的 AI 和后一个会话里的 AI 是通过文件来交流的。那么通过这个巧妙的设计，就可以用一段提示词来循环执行不同的工作了。但这只是让任务能够循环起来，还不够，还得确保质量。
如何让 AI 在每一轮对话中都有高质量的产出呢？否则辛辛苦苦忙活了一个晚上，最后可能只是多了一堆屎山，没有意义啊。我们来看一下提示词，它这里做了几个约束。一个是提供这项工作所需要的所有上下文，包括需求文档和进度文档，
还有工作规范，也包括从文档中了解以前踩过的坑。第二个是它要求要严格进行测试来确保质量。但是我得说，其实这还不够，自己开发自己测试效果一般，更好的办法是另外找一个子智能体来测试，这个我们一会儿会说。原理介绍完了，接下来顺便说一下怎么应用。这个原理很简单，你其实可以自己写 shell 脚本来实现上述功能。
当然你也可以使用现有的框架，现有框架除了原生的 Ralph，还有一个 Ralph for Claude Code（? inferred），后者是在原来的基础上增加了更多功能，但使用方法都差不多。首先准备一个需求文档，这个文档没有格式要求，但是你写得越清楚越好，一般让 AI 来写就是了。
然后使用 Ralph 框架提供的功能，基于你这个需求文档生成开发计划、设计规格、提示词等后续执行流程所需要的相关文档，这些都是框架会自动帮你完成的。最后运行 shell 脚本来启动这个循环就可以了，具体的操作 README 文档里面都写得很清楚了，我们这边就不介绍了。

### 🤖 Multi-Agent Collaboration Concept
好，现在你已经了解基本原理了，接下来我们重点介绍如何使用多智能体的方案。总结前面的过程，其实核心在于我们需要创造一个独立的上下文空间给 AI 干活。
独立的上下文空间，这不就是指智能体最擅长的吗？直接来说一下整个方案的设想。首先把 Claude Code 的主会话当成组织智能体，它不负责任何编码工作，只负责协调子智能体，这样可以让组织智能体的上下文保持简洁。
其次设定专门的子智能体，负责制定计划、开发和测试。这里其实就是设定多个子智能体的模板，放在 Claude Code 的指定路径下。那么基于这个设想，我们要做的其实就是两个步骤。第一，你要按照你的业务需要设计出整个工作流程。

### 🏗️ Designing the Workflow
第二，按照这个工作流程写出组织智能体和子智能体的提示词。来先说一下怎么设计工作流程，这个工作流程没有绝对的做法，我这边拿我平时做视频素材的例子给大家做个参考。做视频是我的兴趣，因为我喜欢那种在一堆复杂的问题中捋出一条线的感觉。
但是我不喜欢准备素材和剪辑，因为这些工作对我来说主要是体力活。好在有 AI，这些事情我可以交给 AI 去操办，一次视频可能要做几十页的 PPT，如果一次性丢给 AI，经常会有各种布局问题，于是我就拆解任务，每次只开发一个页面，开发一个测一个，
然后再开发下一个，再测一个，这样效果就好很多了。具体来说，我的工作流程是这样的，这个工作流程讲起来有点像绕口令，我尽量说清楚一点。首先组织智能体接收到需求文档，它看都不看，
直接把文档的路径丢给负责做计划的子智能体。子智能体按照事先设定好的工作流程完成计划的制定，然后把计划文档的路径返回给组织智能体。组织智能体拿到计划之后，取出一个任务，
按照原先定好的开发子智能体的模板，启动一个开发子智能体来执行任务。这个开发子智能体完成任务之后，不返回代码结果，而是将文件路径返回给组织智能体。组织智能体接收到路径之后，也不去阅读具体的开发成果，
而是将开发子智能体返回的文件路径提交给测试子智能体。测试子智能体完成测试之后，不是提交大段的测试结果，而是将测试结果写在本地文件，返回这个文件的路径给组织智能体。那接下来组织智能体接收到这个测试的答复之后，如果是测试失败，那重点来了，
要将失败信息返回给刚刚负责开发的那个子智能体，让它接着修改。这里不是启动一个新的开发子智能体来修复 bug，而是让之前的开发子智能体继续来修复这个 bug。因为之前的开发子智能体拥有历史开发阶段的上下文信息，
让它来继续修复这个 bug 会做得更好。同样的，这个 bug 修复完成之后，要让刚刚提出问题的那个测试子智能体来进行验收，而不是新开一个测试子智能体。
而如果一开始就测试成功了，那就更新任务进度，读取新的任务，启动新的开发子智能体继续下一个任务，直到全部完成任务。有了这个流程，我们就可以进入第二步，设计组织智能体的提示词和子智能体的提示词。

### 📝 Crafting the Orchestrator Prompt
其实你不需要自己写提示词，现在应该也没有人是自己写的。你只要把我们上述说的这个过程改写成你的想法，然后发给 Claude Code，让 Claude Code 帮你输出这些文档，然后你看着改就行了。但我们还是大致看一下提示词可能长什么样，以便加深你的理解。
直接给大家看个示例，这是我的组织智能体提示词。首先这里强调只负责调度，不要阅读具体文件。然后初始化的时候创建一下日志文件，方便一会儿记录工作进程。这边要获取一下智能体的 ID，为什么特别写这个呢？
这是我踩过的一个坑。我发现它老是说它获取不到子智能体的 ID，但其实创建子智能体的时候，是会在本地创建一个文件的，通过这个文件名就可以获取子智能体的 ID 了。所以我就把这个方法直接写给 AI。接下来就是开始执行工作流程了。
首先是使用 Agent 工具启动子智能体去制定计划，要求子智能体返回最后的文件路径。然后进入开发循环。先是启动开发子智能体，完成开发之后，并行启动三个测试子智能体，收集判定结果和测试报告的路径，
然后进入修正循环，最多循环三次，避免无限循环。如果修复超过三次还搞不定的话，那后面留着人工来解决。接下来注意，这里谁写的 bug 谁处理，谁提的 bug 谁验收。在修复的时候要启动之前的那个开发，
在验收的时候要启动之前提出问题的测试。注意这个方法要在 Agent 的方法里面加入 resume 参数（? inferred），传入子智能体的 ID。如果你用不了这个方法的话，那可能是版本比较新，可以按照官方文档使用新的 message 方法（? inferred）。
然后完成本次循环之后更新一下日志，这方便回头我们观察一下大致的过程。全部完成之后可以做个总结汇报。那么大家可以发现，流程怎么设计，组织智能体的提示词就怎么写，因为这个流程是由组织智能体来维护的。
接下来看看子智能体。Claude Code 对如何构建子智能体做了规范，你需要做两个步骤。首先是按照子智能体的模板完成智能体的设计，这个就是模板。模板分为两个部分，一个是在顶部给出这个子智能体的配置，比如叫什么名字，使用什么模型，可以使用什么 skill，有什么权限等等。
其次是在底部写出这个子智能体的系统提示词。完成模板设置之后，将文档放在 `.claude/agents` 目录下（? inferred），按照子智能体的名字命名就行了。后续组织智能体就能够通过 Agent 的方法传入子智能体的名字，按照对应的模板直接生成这个子智能体。接下来说说子智能体的提示词。子智能体的提示词有两个作用，一个是用于衔接这个流程，一个是用于办好事情。

### 🧩 Sub-Agent Prompts & Experience Retention
前者是为了这个流程特地设计的，后者是你不管有没有这个流程，原本都得做的，比如要求使用什么 skill 之类的。所以不要迷信 Ralph 等框架，也不要迷信这套流程。组织智能体只是帮你把这套流程维护好，
真正决定最后交付的是一个可用的成果，还是一堆屎山，还得是看你对子智能体的设计。这是我设计的几个子智能体：一个做计划，一个做开发，三个做测试，分别从页面布局、页面美观还有页面动画三个方面开展测试。
其中测试工作比较简单，我是用 Haiku 模型来做。Haiku 我配置的是 GM 4.7（? unverified）模型，其他智能体都是用 GM 5.1（? unverified），这样可以加快速度。关于配合流程，子智能体的提示词有两个重点：一个是要强调通过文件来和其他子智能体进行信息传递，
得规定好开始工作前要读什么文件，结束工作后要写入什么文件。比如对于测试子智能体来说，开始的时候要读开发写的代码文件，结束的时候要把测试结果写入本地文件。第二个是强调输出内容的格式，只输出文件路径给组织智能体，
不要输出大段的开发内容或测试内容给组织智能体，因为这样会占用组织智能体的上下文空间。干活的内容根据你的实际需要，你该咋写咋写，爱咋写咋写。我说个技巧，我让开发在改完 bug 之后，要把经验沉淀下来。
这个经验有两个作用：一个是在同一个大循环的开发过程中，前面踩的坑马上会成为后来者的经验；一个是事后用于完善我们的 skill，这就和我们前面视频介绍的 Harness（? inferred）技巧呼应上了，不要让 AI 犯相同的错误。
你还真别说，有一次 AI 自己也发现了，前面踩完坑之后，后面的测试速度就快了许多。此外，我还会给开发和测试分别分配一个 skill，让它们知道怎么开发、怎么测试。
当然这些 skill 是为我自己量身定做的，其实我也试了很多流行的 skill，好看是好看，但是总感觉不适合我。因为它们大部分是注重设计感，而我其实更注重的是传递信息。但我也把我之前用过感觉还不错的几个 skill 推荐给大家看一下，是这几个。

### 🚀 Execution & Results
好，完成这些智能体的设计之后，接下来就简单了，直接附上需求文档和组织智能体的提示词发送给 AI 就行了。然后你该干嘛干嘛，回来验收成果就行了。而且有一个感觉，只要 AI 在干活，就可以心安理得地吃喝玩乐，
感觉并没有在浪费时间。最后我们来看一下工作成果，这是工作日志，看一下有些页面是一次性通过的，有些是迭代了多次的，整个过程跑了几个小时。理论上你要跑多久都可以，只要不断往后追加任务，跑到地老天荒。
然后也看一下，这是相关的经验总结文档。最后你现在看到的视频中的这个画面，就是这一次的最终成果。其实我是生成了三份，然后挑选各自的精华，最后组成了这个。最后，今天这个视频的知识点其实比较多，不太好消化，
所以我也做了一个提纲，方便参考，这里我就不念了，大家自己看一下。好，我们今天就到这里，如果有收获请给个一键三连，感谢，下次见。

## Raw ASR Transcript — preserved pre-cleanup text

> Note: This section preserves the BibiGPT ASR-style transcript as it appeared before my cleanup pass in this chat. It contains obvious ASR artifacts by design.

### 🎬 Opening & Overview
睡前我给AI发了一个指令，他吭哧吭哧连续干了4个小时的活， 醒来之后我直接验收成果，非常爽。 怎么做到的呢？ 去年底，an斯洛皮克发表文章介绍哈里斯工程，
主要讨论如何让艾ent长时间不间断的工作。 此后，这个话题在社区就一直很火。 今天我们从原理到实践彻底讲清楚这个事情。 提醒一下今天的视频知识点和秘籍，我劝你先收藏，回头细看。
我会介绍两种方案，一种是社区很火的方案， 通过一个外有循环不断启动新绘画来执行任务，典型代表式乱项目。 但我推荐的是另外一个更好用的方式，多正一体协同的方案，更灵活也更好用。 来马上开始。
据说web coding分为三个段位，青铜阶段是想说啥就说啥， 没有章法，然后我们AI是傻子。 黄金阶段，知道拆分任务做一步看一部，觉得AI还是有点东西的，但还得陪着。 到了王者阶段，那可以设定一些哈利斯策略，给丢下一句话，然后放心走开。

### 🔄 Ralph: Looping AI Work
但是想这么潇洒也没这么容易。 如果你试图给A丢一个很长的任务，那么随着工作的展开， 模型可用的上下文空间会越来越少， 此时模型的理解负担会越来越大，导致工作质量越来越差。
最后桑小问耗尽模型就停止工作了。 官方的设想是首先还需要制定详细的工作计划， 把一个大任务拆分成很多具体的任务。 然后每次启动一个全新的绘划去执行其中一个任务，
不断的重复这个过程，直到所有的工作完成。 由于每个任务都是在新的绘划里面实现的， 因此每个任务都有独立的新的上下文窗口。 你发现没有？
这个方法和前面说的黄金段位的做法其实是一样的，做好规划， 让AI一次只干一个工作， 只不过之前要你陪着AI这里我们要用一个新的方式让AI自己动起来。 有个叫ragh的项目实现了这个方法，
这个项目的核心代码是一个需脚本，其中核心代码就这几行写一个。 While循环不断的用cloud命令启动新的规划。 针对这个脚本我们可以发现三个事情。 第一个，这个循环是由一个sh脚本来维护的，
而我们后面会介绍的多智能体方案那个循环是用组织能体来维护的。 第二，它使用cloud code的方式是用cloud命令，是在后台静默执行的。 这个方法估计很多人不知道，大家习惯的用法都是使用cloud客户端。 其实这两者是等价的，
你执行cloud你好命令跟在cloud客户端里面写你好作用是一样的。 第三个，每次启动新绘画时，AI都会读取同一段提示词开展工作。 那么这里就有一个问题，为什么读取相同的提示时却会做不一样的事情呢？ 我们来看一下这段提示词，
在提示词中要求AI在每轮绘话中的主要工作流程是，首先要读取文件， 了解需求和进度，然后从代办任务中挑选一个最重要的来执行。 完成工作之后在相关文件中把这个任务标记为已完成。 所以在第二个绘话中，AI可能做的是任务一，
在第二个绘话中，AI做的就是任务2。 以此类推，前一个绘画里的AI和后一个绘画里的AI是通过文件来交流的。 那么通过这个巧妙的设计，就可以用一段提示词来循环执行不同的工作了。 但这只是让任务能够循环起来，还不够，还得确保。
如何让AI在每一轮对话中都有高质量的产出呢？ 否则辛辛苦苦忙活了一个晚上，最后可能只是多了一堆死3，没有意义啊。 我们来看一下提示词，他这里做了几个约束。 一个是提供这项工作所需要的所有上下文，包括需求文档和进度文档，
还有工作规范，也包括从文档中了解以前踩过的坑。 第二个是他要求要严格进行测试来确保质量。 但是我得说， 其实这还不够自己开发自己测试效果一般更好的办法是另外找一个纸质棱体
来测试， 这个我们一会儿会说。 原理介绍完了，接下来顺便说一下怎么应用。 这个原理很简单，你其实可以自己写需脚本来实现上述功能。
当然你也可以使用现有的框架，现有框架除了这个原生的raf还有一个rafor cloud code， 或者是在原来的基础上增加了更多的这个功能，但使用方法都差不多。 首先准备一个需求文档，这个文档没有格式要求， 但是你写的越清楚越好，一般那个压来写就是了。
然后使用ra框架提供的功能，基于你这个需求文档生成开发计划设计、 规格提示时等后续执行流程所需要的相关文档， 这些都是框架会自动帮你完成的，最后运行需脚本来启动这个循环就可以了， 具体的操作read me文档里面都写的很清楚了，我们这边就不介绍了。

### 🤖 Multi-Agent Collaboration Concept
好，现在你已经了解基本原理了， 接下来我们重点介绍如何使用多智能体的方案。 总结前面的过程， 其实核心在于我们需要创造一个独立的上下文空间给AI干活。
独立的上下文空间，这不就是指智能体最擅长的吗？ 直接来说一下整个方案的设想。 首先把cloud code的主绘画当成组织能体，它不负责任何编码工作， 只负责协调子智能体，这样可以让组织能体的上下文保持简洁。
其次设定专门的纸质冷体，负责制定计划，开发和测试。 这里其实就是设定多个纸质冷体的模板，放在cloucode的指定路径下。 那么基于这个设想，我们要做的其实就是两个步骤。 第一，你要按照你的业务需要设计出整个工作流程。

### 🏗️ Designing the Workflow
第二，按照这个工作流程写出组织冷体和纸质冷体的提示值。 来先说一下怎么设计工作流程，这个工作流程没有绝对的做法， 我这边拿我平时做视频素材的例子给大家做个参考。 做视频是我的兴趣，因为我喜欢那种在一堆复杂的问题中捋出一条线的感觉。
但是我不喜欢准备素材和剪辑，因为这些工作对我来说主要是体力活。 好在有AI这些事情我可以交给AI去操办， 一次视频可能要做几十页的ppt如果一次性丢给AI经常会有各种布局问题， 于是我就拆解任务，每次只开发一个页面，开发一个测一个，
然后再开发下一个，再测一个，这样效果就好很多了。 具体来说，我的工作流程是这样的， 这个工作流程讲起来有点像绕口令，我尽量说清楚一点。 首先组智能体接收到需求文档，它看都不看，
直接把文档的路径丢给负责做计划的子智能体。 纸织人体按照事先设定好的工作流程完成计划的制定， 然后把计划文档的路径返回给组织人体。 组织人体拿到计划之后，取出一个任务，
按照原先定好的开发纸质人体的模板，启动一个开发纸质人体来执行任务。 这个开发纸质人体完成任务之后， 不返回代码结果，而是将文件返回给组织人体。 组织人体接收到路径之后，也不去阅读具体的开发成果，
而是将开发子织人体返回的文件路径提交给测试subagent。 测试subagent完成测试之后，不是提交大段的测试结果， 而是将测试结果写在本地文件，返回这个文件的路径给组织人体。 那接下来组织人体接收到这个测试的答复之后，如果是测试失败，那重点来了，
要将失败信息返回给刚刚负责开发的那个纸质轮体，让它接着修改。 这里不是启动一个新的开发纸质轮体来修复bug， 而是让之前的开发继续来修复这个bug。 因为之前的开发拥有历史开发阶段的上下文信息，
让他来继续修复这个bug会做的更好。 同样的这个bug修复完成之后， 要让刚刚提出问题的那个测试纸质人体来进行验收， 而不是先开一个测试纸质人体。
而如果一开始就测试成功了，那就更新任务进度，读取新的任务， 启动新的开发，纸示人体继续下一个任务，直到全部完成任务。 有了这个流程，我们就可以进入第二步， 设计组织人体的提示值和纸质人体的提示。

### 📝 Crafting the Orchestrator Prompt
其实你不需要自己写提示时，现在应该也没有人是自己写的。 你只要把我们上述说的这个过程改写成你的想法， 然后发给cloud code，让cloud code帮你输出这些文档，然后你看着改就行了。 但我们还是大致看一下提示词可能是长什么样的，以便加深你的理解。
直接给大家看个事例，这是我的组织人体提示词。 首先这里强调只负责调度，不要阅读具体文件。 然后初始化的时候创建一下录制文件，方便一会记录工作进程， 这边要获取一下智能体的ID为什么特别写这个呢？
这是我踩过的一个坑， 我发现老师说他获取不到纸质冷体的ID但其实创建纸质冷体的时候， 是会在本地创建一个文件的，通过这个文件名就可以获取纸质冷体的ID了。 所以我就把这个方法直接写给A I接下来就是开始执行工作流程了。
首先是使用agent工具启动职证去制定计划，要求职值返回最后的文件路径。 然后进入开发循环。 先是启动开发子制冷体， 完成开发之后并行启动三个测试子制冷体收集判定结果和测试报告的路径，
然后进入修正循环，最多循环三次，避免无限循环。 如果修复超过三次还搞不定的话，那后面留着人工来解决。 接下来注意这里谁写的bug谁处理，谁提的bug谁验收， 在修复的时候要启动之前的那个开发，
在验收的时候要启动之前提出问题的测试。 注意这个方法要在a ent的方法里面加入re参数， 传入纸质能体的I D如果你用不了这个方法的话， 那可能是版本比较新，那可以按照官方的文档使用新的message方法。
然后完成本次循环之后更新一下日志， 这方便回头我们观察一下大致的过程，全部完成之后可以做个总结汇报。 那么大家可以发现流程怎么设计，组织人体的提示时就怎么写。 因为这个流程是由组织人体来维护的。
接下来看看组织人体clou对如何构建子智能体做了规范，你需要做两个步骤， 首先是按照子智能体的模板完成智能体的设计，这个就是模板。 模板分为为两个部分，一个是在顶部给出这个子智能体的配置， 比如叫什么名字，使用什么模型，可以使用什么skill，有什么权限等等。
其次是在底部写出这个纸智能体的系统提示值。 完成模板设置之后，将文档放在点cloud杠目录下， 按照子织人体的名字命名就行了。 后续组织人体就能够通过H ent的方法传入纸质人体的名字，
按照对应的模板直接生成这个纸质人体。 接下来说说脂质人体的提示词。 纸质人体的提示词有两个作用， 一个是用于衔接这个流程，一个是用于办好事情。

### 🧩 Sub-Agent Prompts & Experience Retention
前者是为了这个流程特地设计的，或者是你不管有没有这个流程， 原本都得做的，比如要求使用什么skill之类的。 所以不要迷信ra等框架，也不要迷信这套流程， 组织人体只是帮你把这套流程维护好，
真正决定最后交付的是一个可用的成果，还是一堆死伤的， 还得是看你对纸织人体的设计，这是我设计的几个纸质人体，一个做计划， 一个做开发，三个做测试，分别从页面布局、 页面美观还有页面动画三个方面开展测试。
其中测试工作比较简单，我是用嗨酷模型来做， 嗨酷我配置的是GM4.7模型，其他智能体都是用GM5.1，这样可以加快速度。 关于配合流程子制能体的提示词有两个重点， 一个是要强调通过文件来和其他子质能体进行信息传递，
得规定好开始工作前要读什么文件，结束工作后要写入什么文件。 比如对于测试纸质能体来说，开始的时候要读开发写的代码文件， 结束的时候要把测试结果写入本地文件。 第二个是强调输出的内容的格式，只输出文件路径给组织人体，
不要输出大段的开发内容或测试内容给组织人体， 因为这样会占用组织人体的上下文空间。 单的内容根据你的实际需要，你该咋写咋写，爱咋写咋写。 我说个技巧，我让开发在改完bug之后，要把经验沉淀下来。
这个经验有两个作用，一个是在同一个大循环的开发过程中， 前面踩的坑马上会成为后来者的经验。 一个是事后用于完善我们的skill， 这就和我们前面视频介绍的hon尼斯技巧呼应上了，不要让AI犯相同的错误，
你还真别说，有一次AI自己也发现了， 前面踩完坑之后，后面的测试速度就快了许多。 此外，我还会给开发和测试分别分配一个给他们， 让他们知道怎么开发，怎么测试。
当然这些sk是为我自己量身定做的， 其实我也试了很多流行的skill，好看是好看，但是总感觉不适合我。 因为他们大部分是注重设计感，而我其实更注重的是传递信息。 但我也把我之前用过感觉还不错的几个skill推荐给大家看一下，是这几个。

### 🚀 Execution & Results
好，完成这些智能体的设计之后，接下来就简单了， 直接附上需求文档和组织人体的集示时发送给就行了。 然后你该干嘛干嘛，去回来验收成果就行了。 而且有一个感觉，只要在干活就可以心安理得的吃喝玩乐，
感觉并没有在浪费时间。 最后我们来看一下工作成果，这是工作日志，看一下有些页面是一次性通过的， 有些是迭代了多次的，整个过程跑了几个小时。 理论上你要跑多久都可以，只要不断往后封号，跑到地老天荒。
然后也看一下，这是相关的经验总结的文档。 最后你现在看到的视频中的这个画面，就是这一次的最终成果。 其实我是生成了三份，然后挑选各自的精华，最后组成了这个。 最后今天这个视频的知识点其实比较多，不太好消化，
所以我也做了一个提验，方便参考，这里我就不念了，大家自己看一下。 好，我们今天就到这里，如果有收获请给个一键三连，感谢，下次见。