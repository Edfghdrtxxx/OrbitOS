原创 coolbat coolbat

在小说阅读器读本章

去阅读

## 从静态配置到动态记忆

上一篇文章我们讲了如何用 CLAUDE.md 给 Claude 提供项目上下文。但 CLAUDE.md 是静态的——你需要手动维护，而且只能记录"应该知道的"，无法记录"已经发生的"。

[给 Claude 写一份"入职手册"：CLAUDE.md 完全指南](https://mp.weixin.qq.com/s?__biz=MjM5MDE5OTYwMQ==&mid=2247483744&idx=1&sn=af1847d84eebd91a4e266b4ab17bf938&scene=21#wechat_redirect)

如果你希望 Claude 能记住：

- 昨天修复的 bug 和根本原因
- 上周调试时发现的代码模式
- 多个项目间的共同决策和经验

你需要的是一个动态记忆系统： **Claude MEM。**

---

## Claude MEM 是什么？

Claude MEM 是一个为 Claude Code 设计的记忆系统插件。它的核心功能很简单：

**自动记录你和 Claude 的每一次对话、每一次工具调用，然后在下次会话时自动加载相关记忆。**

听起来简单，但实现起来并不容易。它需要解决三个关键问题：

1. **捕获什么？**
	不是所有内容都值得记录
2. **如何存储？**
	原始数据太大，会话历史会迅速膨胀
3. **如何检索？**
	如何在海量记忆中找到相关内容

Claude MEM 的解决方案是：

- **自动捕获：**
	每次工具调用后自动记录
- **AI 压缩：**
	使用 Claude SDK 将原始输出压缩为语义摘要
- **混合搜索：**
	SQLite 全文搜索 + 向量数据库语义搜索
- **渐进式披露：**
	3 层检索机制，只在需要时加载详细信息

真实数据：一个开发者使用 3 周后，积累了 6,814 条观察记录，覆盖 10 个代码库，259 个会话，数据库大小仅 39 MB。

---

## 它是如何工作的？

### 核心机制：插件钩子（Hooks）

Claude MEM 作为 Claude Code 插件运行，通过"钩子"监听生命周期事件：

- **SessionStart：**
	会话开始时，注入之前的记忆
- **PostToolUse：**
	每次工具调用后，捕获输出（一个会话可能触发 100+ 次）
- **SessionEnd：**
	会话结束时，生成会话摘要

这些钩子自动触发，无需 Claude 主动调用。这是 Claude MEM 与 MCP 服务器的关键区别——MCP 需要 Claude 主动询问，而插件钩子是被动捕获。

### 数据流程：从捕获到检索

![](https://mmbiz.qpic.cn/mmbiz_png/3K67gxIpWCIHQcCFQXPujko9icJtRAY3mBHmsv75Gr870nPSIJNKvD77GeMhEIr6mao5KiaQJ5XuXQ5bYGrhloKIpaiaJAtX2Fx8rQVAJylKYE/640?wx_fmt=png&from=appmsg)

一个完整的记忆周期是这样的：

```
会话 1:
用户提问 → Claude 调用工具 → 钩子捕获输出 
→ AI 压缩为观察 → 存入本地数据库

会话 2:
会话开始 → 从数据库检索相关记忆 
→ 注入到 Claude 上下文 → Claude 带着记忆开始工作
```

关键点：

- **捕获时机：**
	每次工具调用后立即捕获，不等会话结束
- **压缩方式：**
	使用 Claude SDK 生成语义摘要，不是简单截断
- **检索策略：**
	基于当前会话的上下文，智能检索相关记忆
- **存储位置：**
	完全本地存储在 SQLite 数据库（ `~/.claude-mem/claude-mem.db` ）

### 渐进式披露：节省 10 倍 Token

Claude MEM 最聪明的设计是"渐进式披露"。它不会一次性加载所有记忆，而是分 3 层检索：

- **Layer 1: search：**
	返回简短的观察摘要列表
- **Layer 2: timeline：**
	返回时间线视图
- **Layer 3: get\_observations：**
	返回完整的观察详情

只有当 Claude 需要更多细节时，才会加载下一层。这种设计节省了 10 倍的 token 使用量。

---

## 如何安装？

### 推荐方式：通过插件市场

在 Claude Code 会话中执行两条命令：

```
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```

然后 **重启 Claude Code。**

就这么简单。

### 常见错误

很多人会尝试：

```
npm install -g claude-mem  # ❌ 错误！
```

这只会安装 SDK 库，钩子不会注册，Worker 不会启动，什么都不会工作。

**正确做法是使用插件市场路径。**

### 前置要求

- Node.js 18+（必须）
- Bun, uv, SQLite（首次运行自动安装）

---

### 安装验证：3 步检查

安装后，通过 3 个步骤验证是否成功：

**1\. 检查 Worker 服务**

```
curl http://localhost:37777/api/health
```

应该返回： `{"status":"ok"}`

如果失败，说明 Worker 没有启动。最常见的原因是 Node.js 版本低于 18。

**2\. 检查钩子注册**

```
cat ~/.claude/hooks.json
```

应该包含 `claude-mem` 的 `PostToolUse` 和 `SessionStart` 条目。

如果没有，说明钩子没有注册，不会捕获任何内容。

**3\. 检查 Web 界面**

![](https://mmbiz.qpic.cn/mmbiz_png/3K67gxIpWCIMBjEozmbVxqzNicfqwbiaBM7BIxCsDibNSj5ciawjSUQrTVLiallDlNSmw9TmOvibDVicjW6wgXibGibtc1Gl1xam7ibjJgh3RbQ1kp4O8/640?wx_fmt=png&from=appmsg)

打开 `http://localhost:37777，` 应该能看到 Web 界面。

执行一次工具调用（比如让 Claude 读取一个文件），观察界面是否出现新的记录。

如果能看到观察记录实时出现，说明一切正常。

---

## 实际使用场景

### 场景 1：长期项目开发

**问题：** 项目持续数周甚至数月，上下文非常复杂。每次会话都要重新解释项目结构、技术栈、之前的决策。

**解决：** Claude MEM 自动积累项目知识。第一次会话时，你详细介绍了项目架构。第二次会话时，Claude 已经记得。第十次会话时，Claude 对项目的理解甚至比你还深。

**效果：** 节省每次会话 10-15 分钟的上下文重建时间。

---

### 场景 2：Bug 调试

**问题：** 昨天调试时发现了一个关键线索，今天继续时 Claude 完全不记得。你要么重新调试一遍，要么手动复述昨天的发现。

**解决：** 调试过程自动记录。今天你只需要问："我们昨天修复了什么认证 bug？"Claude 会从记忆中检索出完整的调试历史。

**示例对话：**

```
你：我们昨天修复的那个 bug，具体是什么原因？
Claude：根据昨天的会话记录，问题出在 JWT token 验证逻辑。
我们发现 token 过期时间设置为 0，导致所有请求都被拒绝。
修复方式是将过期时间改为 3600 秒。
```

---

### 场景 3：多项目切换

**问题：** 你同时维护 10 个不同的代码库。每次切换项目，都要重新介绍项目背景。

**解决：** 每个项目的上下文独立存储。切换到项目 A，Claude 自动加载项目 A 的记忆。切换到项目 B，自动加载项目 B 的记忆。

**真实数据：** 一个开发者管理 10 个代码库，259 个会话，Claude MEM 自动区分和加载对应的记忆。

---

## Claude MEM vs CLAUDE.md：该用哪个？

![](https://mmbiz.qpic.cn/mmbiz_png/3K67gxIpWCKqKOuTh51dEVXPUdnl4ykicMmMEkExs1kUA6aPztQ9M18I83yFWUWOkNPW5LtZeBFJFcrwA0Yw3W7iaWqGbfX77ZXodnvLuOdMQ/640?wx_fmt=png&from=appmsg)

很多人会问：我已经在用 CLAUDE.md 了，还需要 Claude MEM 吗？

答案是： **两者互补，各司其职。**

| 维度 | Claude MEM | CLAUDE.md |
| --- | --- | --- |
| **类型** | 动态记忆系统 | 静态配置文件 |
| **内容** | 会话历史、工具调用、观察记录 | 项目规则、编码标准、架构说明 |
| **更新方式** | 自动捕获 | 手动编写 |
| **适用场景** | 长期项目、调试历史、知识积累 | 项目规范、团队标准、架构文档 |
| **跨工具** | 仅 Claude Code | 所有 AI 工具 |
| **Token 消耗** | 渐进式披露，按需加载 | 每次会话全量加载 |

### 最佳实践：两者结合使用

- **CLAUDE.md：** 存储不变的项目规则
- 编码风格（"使用 TypeScript strict 模式"）
	- 架构决策（"使用 Clean Architecture"）
	- 命名规范（"组件使用 PascalCase"）
	- 技术栈说明（"后端使用 NestJS"）
- **Claude MEM：** 存储动态的工作记忆
- 会话历史（"昨天我们讨论了什么"）
	- Bug 修复记录（"上周修复的认证问题"）
	- 实验结果（"尝试过的 3 种方案"）
	- 临时决策（"这次重构的思路"）

简单来说： **CLAUDE.md 是项目的"宪法"，Claude MEM 是项目的"日记"。**

---

## 跨工具兼容性：能在其他 AI 工具中使用吗？

**简短回答：不能。**

Claude MEM 是专为 Claude Code 设计的插件，依赖 Claude Code 的钩子系统。它无法直接用于 Cursor、VS Code Copilot、Windsurf 等其他 AI 工具。

### 如果你需要跨工具记忆

有 3 种方案：

**方案 1：CLAUDE.md（静态配置）**

- 手动维护的 Markdown 文件
- 所有 AI 工具都支持（Cursor, Copilot, Claude Code）
- 通过 Git 同步
- 适合：项目规范、编码标准、架构决策

**方案 2：supermemory（云端记忆）**

- 付费服务
- 支持跨机器、跨工具同步
- 团队共享记忆
- 适合：团队协作、多设备工作

**方案 3：混合使用**

- CLAUDE.md 存储静态规则
- Claude MEM 存储动态会话记忆（仅 Claude Code）
- 其他工具使用 CLAUDE.md

---

## 需要注意的问题

### 安全问题

Claude MEM 目前存在一些安全问题（社区审计评级：HIGH 风险）：

- **无认证 API：**
	端口 37777 无任何认证，本地任何进程都可以读取
- **路径遍历漏洞：**
	某些工具存在安全漏洞

### 使用建议

- ✅ **适合：** 个人开发机器
- ❌ **不适合：** 云虚拟机、共享机器、生产环境

### 已知问题

1. **ChromaDB 进程泄漏：**
	长时间运行可能产生大量孤儿进程，建议仅使用 FTS5
2. **macOS 冷启动超时：**
	Apple Silicon 上首次启动可能超时
3. **MCP 工具参数问题：**
	search 和 timeline 工具的参数 schema 为空

这些问题不影响日常使用，但需要了解。

---

## 总结：值得使用吗？

如果你符合以下任一条件，Claude MEM 非常值得尝试：

- ✅ 长期维护多个项目
- ✅ 经常需要调试复杂问题
- ✅ 希望 Claude 能"记住"之前的对话
- ✅ 在个人开发机器上工作
- ✅ 使用 Claude Code 作为主力工具

如果你的情况是：

- ❌ 只是偶尔使用 Claude Code
- ❌ 需要跨工具记忆（Cursor, Copilot 等）
- ❌ 在云虚拟机或共享机器上工作
- ❌ 对安全要求极高

那么可能需要考虑其他方案（如 CLAUDE.md 或 supermemory）。

---

## 开始使用

三周前，我在所有项目中安装了 Claude MEM。从那以后，它捕获了 6,814 条观察记录，覆盖 259 个会话，10 个代码库，全部存储在一个 39 MB 的 SQLite 文件中。

最明显的变化是：我不再做那些重复的事情。不再重新解释项目结构，不再重新追踪调试路径。Claude 带着上下文到来，我们从上次结束的地方继续。

这就是记忆的力量。

---

**你用过 Claude MEM 吗？在评论区分享你的使用体验吧！**

如果觉得这篇文章有帮助，欢迎转发给需要的朋友。

---

**相关链接：**

- Claude MEM GitHub: https://github.com/thedotmack/claude-mem
- 官方文档: https://docs.claude-mem.ai/
- Discord 社区: https://discord.com/invite/J4wttp9vDu

内容含AI生成图片

继续滑动看下一个

泡面AI

向上滑动看下一个

知道了

微信扫一扫  
使用小程序

： ， ， ， ， ， ， ， ， ， ， ， ， 。 视频 小程序 赞 ，轻点两下取消赞 在看 ，轻点两下取消在看 分享 留言 收藏 听过