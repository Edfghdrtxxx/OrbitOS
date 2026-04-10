原创 coolbat coolbat

在小说阅读器读本章

去阅读

## 一、你是不是也遇到过这些问题？

每次打开 Claude Code，你都要重新解释一遍：

**如果你是开发者：**  
"这个项目用 TypeScript，不要生成 JavaScript"  
"测试框架是 Vitest，不是 Jest"  
"提交代码前必须先跑 lint，不要跳过"

**如果你是内容创作者：**  
"我这个项目的文章要控制在 3000 字以内"  
"语气要口语化，不要太正式"  
"写完之后帮我存到 drafting/ 文件夹"

说了一遍又一遍，下次对话又得重来。

你可能会想：Claude 不是有记忆功能吗？为什么就是记不住？

**问题不在 Claude 的记忆力，在于你没给它一份"入职手册"。**

想象一下：公司来了个新人，你每天早上都要口头重复一遍规定——几点打卡、报销流程、文件怎么命名。累不累？

正常做法是什么？写一份入职手册，让他自己看。

**CLAUDE.md 就是给 Claude 的"项目入职手册"。** 一次写好，每次启动都自动生效。

---

## 二、CLAUDE.md 到底是什么？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3K67gxIpWCLMkHx1D8icTIFcCHc5OlK1FWMzOVicibPT4PPibAZtMRBoJbkpXwESj9p54YQWsXdoYGfrZuNjnlmauqdBNRrwKeFibbfIxoSpvNoE/640?wx_fmt=png&from=appmsg)

### 不是"记忆"，是"规则文件"

很多人以为 CLAUDE.md 是让 Claude "记住"你的偏好。不是的。

CLAUDE.md 是放在项目根目录的一个 Markdown 文件。每次你启动 Claude Code，它都会自动读取这个文件，然后按照里面的规则工作。

**和 Auto Memory 有什么区别？**

| 维度 | CLAUDE.md | Auto Memory |
| --- | --- | --- |
| 性质 | 你明确写下的规则 | Claude 自己观察总结 |
| 内容 | "这个项目必须怎么做" | "这个用户习惯怎么做" |
| 适用 | 标准、流程、硬性要求 | 细微偏好、使用习惯 |
| 作者 | 你 | Claude |

举个例子：

你每次都让 Claude 用中文回复，Auto Memory 可能会学到"这个用户喜欢中文"。

但如果你在 CLAUDE.md 里写"所有回复必须使用中文"，那每次启动 Claude 就知道：这是项目规则，不是偏好猜测。

**最好的做法是两者结合** ——CLAUDE.md 管规则，Auto Memory 管习惯。

### 什么时候需要 CLAUDE.md？

**开发者：** 这是最核心的使用场景。

Claude Code 帮你写代码，但它不知道你的项目用什么技术栈、代码风格是什么、哪些命令可以运行、哪些操作不能做。没有 CLAUDE.md，它只能猜。

典型的开发者配置：

- 技术栈说明（"这个项目用 Next.js 14 + TypeScript + Tailwind"）
- 代码风格（"缩进 2 空格，函数用箭头函数，不用 `var` "）
- 测试要求（"每个新功能必须有单元测试，框架是 Vitest"）
- 常用命令（"启动： `pnpm dev，` 测试： `pnpm test，` 构建： `pnpm build` "）
- 禁止操作（"不要直接改 `main` 分支，不要删除任何 migration 文件"）
- 架构约定（"API 路由放在 `src/app/api/，` 数据库操作只在 `src/lib/db/` 里"）

有了这些，Claude 就能像一个真正了解这个代码库的人一样工作，而不是每次都从零开始猜。

**内容创作者：** 你有固定的写作风格、字数要求、文件命名规范。与其每次解释，不如写进去。

**团队协作：** 多人用 Claude Code 参与同一个项目，规则必须统一。CLAUDE.md 提交到 Git，所有人的 Claude 都按同一套规则走。

**复杂项目：** 项目有特殊的文件结构、工作流程、命名约定。写一次，省无数次重复解释。

---

## 三、三步上手

![](https://mmbiz.qpic.cn/mmbiz_png/3K67gxIpWCIuT9icGRr5DUYCZbefX7TUiaNaLpKc6KJICwiaFhjP5JUYaKnByUfbs7uQ2wkRemOz6oM7GuIsJpEM69nQFnQ6eNvTOj95teEWhY/640?wx_fmt=png&from=appmsg)

### Step 1：创建文件

在项目根目录创建一个文件，文件名必须是：

```
CLAUDE.md
```

注意三点：全大写、`.md` 后缀、放在项目根目录（不是子文件夹里）。

**快捷方式：** 在 Claude Code 里输入 `/init，` 它会帮你自动生成一个初始文件，然后你在上面修改就行。

### Step 2：写入规则

用 Markdown 格式写下你的规则。这是一个适合内容创作项目的最简模板：

```
# 项目说明

这是一个内容创作项目，用于管理微信公众号文章。

## 工作规则

- 所有回复使用中文
- 文章长度：2500-3500 字
- 语气：实用、直接，不说教
- 不要编造事实或数据

## 文件结构

- brief/ 项目简报
- research/ 研究资料
- drafting/ 草稿
- polish/ 审校版本
- distribution/ 分发版本

## 文件命名

- 使用小写字母和横杠：draft-zh.md
- 日期格式：YYYY-MM-DD
```

### Step 3：验证生效

保存后，开启一个新的 Claude Code 对话（或重启），问 Claude：

```
这个项目的文件结构是什么？
```

如果 Claude 能准确复述 CLAUDE.md 里的内容，就说明生效了。

---

## 四、实战模板

### 模板 A：代码开发项目

如果你在用 Claude Code 写代码，这是最核心的配置：

```
# 项目概述

这是一个 Next.js 全栈应用，用 TypeScript 开发，部署在 Vercel。

## 技术栈

- 框架：Next.js 14（App Router）
- 语言：TypeScript（严格模式）
- 样式：Tailwind CSS
- 数据库：PostgreSQL + Prisma
- 测试：Vitest + Testing Library

## 常用命令

- 启动开发服务器：\`pnpm dev\`
- 运行测试：\`pnpm test\`
- 类型检查：\`pnpm type-check\`
- 构建：\`pnpm build\`
- 数据库迁移：\`pnpm db:migrate\`

## 代码规范

- 缩进：2 空格
- 函数：优先使用箭头函数
- 不使用 \`var\`，只用 \`const\` 和 \`let\`
- 组件文件名：PascalCase（UserProfile.tsx）
- 工具函数文件名：camelCase（formatDate.ts）

## 目录结构

-\`src/app/\` — 页面和 API 路由（App Router）
-\`src/components/\` — 可复用组件
-\`src/lib/\` — 工具函数和数据库操作
-\`src/types/\` — TypeScript 类型定义
-\`prisma/\` — 数据库 schema 和迁移文件

## 必须遵守的规则

- 每个新功能必须有对应的单元测试
- 数据库操作只能在 \`src/lib/db/\` 里进行，不能在组件里直接查询
- 不要修改 \`prisma/migrations/\` 里的已有文件
- API 路由必须做输入验证，不要信任客户端传来的数据
- 提交代码前必须通过 \`pnpm type-check\` 和 \`pnpm test\`
```

**这份模板的作用：** Claude 知道你用什么技术、怎么运行项目、代码要写成什么风格、哪些事情绝对不能做。它生成的代码会直接符合你的项目约定，而不是写出一堆你要改的东西。

---

### 模板 B：内容创作项目

下面是一个适合内容创作的完整模板：

```
# 项目概述

这是一个结构化的内容生产系统，用于管理长篇文章和跨平台媒体运营
（微信公众号、小红书、SEO 博客）。

## 目录结构

- brief/ 项目简报和需求
- research/ 研究阶段
- drafting/ 内容起草阶段
- polish/ 内容审校阶段
- distribution/ 平台分发版本
- assets/ 图片和资源
- meta/ 项目元数据

## 工作流程

每个项目按顺序走完以下阶段：
1. Brief — 定义范围、受众、目标
2. Research — 收集资料、整理来源
3. Drafting — 创建大纲、写作草稿
4. Polish — 审校、人性化处理
5. Distribution — 创建各平台版本

## 命名规范

- 项目文件夹：小写加横杠（claude-code-guide）
- 研究文件：research-YYYY-MM-DD.md
- 草稿版本：draft-zh.md、draft-zh-v2.md
- 平台版本：wechat-article.md、xiaohongshu-post.md

## 平台要求

微信公众号：2500-3500 中文字符，对话式语气
SEO 博客：1800-2500 英文单词，结构化标题
小红书：精简，视觉友好，语气活泼

## 必须遵守的规则

- 优先编辑现有文件，不要随意新建
- 不要编造事实、数字、引用
- 写作时用用户提供的语言
- 提供具体例子，不要空泛表达
```

**这份模板涵盖了：** 项目结构 + 工作流程 + 命名规范 + 平台要求 + 禁止事项。

两份模板都可以直接复制，保留适合自己项目的部分，删掉不需要的。

---

## 五、进阶技巧

### 技巧 1：三个层级的配置

CLAUDE.md 支持三个层级，可以同时生效：

- **全局：** `~/.claude/CLAUDE.md`
	— 对你所有项目生效
- **项目：** `项目根目录/CLAUDE.md`
	— 当前项目生效，提交到 Git
- **本地：** `CLAUDE.local.md`
	— 只影响你自己，不提交到 Git

**用法建议：**

- 全局配置写通用规则（比如"回复用中文"）
- 项目配置写项目规则（团队共享）
- 本地配置写个人习惯（不影响别人）

### 技巧 2：引用其他文档

如果某些内容太长，可以用 `@文件路径` 引用：

```
# 项目说明

详细写作规范见：@docs/writing-guide.md
详细命名规范见：@docs/naming-rules.md
```

这样 CLAUDE.md 保持简短，详细内容放在单独文件里，Claude 会在需要时读取。

### 技巧 3：保持简洁

**黄金法则：不要超过 200 行。**

文件越长，效果越差——Claude 读的内容多了，遵守率反而下降，而且占用更多上下文空间。

只写真正重要的规则。格式化、拼写检查这类事情，交给专门的工具（Prettier、ESLint）。

---

## 六、常见问题

**Q：Claude 会 100% 遵守 CLAUDE.md 吗？**

不会。CLAUDE.md 是上下文引导，不是硬性约束。规则越模糊，越容易被忽略。应对方法很简单：写得具体，遇到问题就更新，定期检查输出。

**Q：可以用中文写 CLAUDE.md 吗？**

完全可以。CLAUDE.md 就是普通的 Markdown 文件，什么语言都行。项目是中文的，用中文写更清晰。

**Q：修改 CLAUDE.md 后需要重启吗？**

需要开启新对话，修改才会生效。已有的对话不会重新读取文件。

**Q：团队里只有我用 Claude Code，需要提交 CLAUDE.md 吗？**

建议提交。即使现在只有你用，这个文件记录了项目的规则和结构，本身就是有价值的文档。

**Q：CLAUDE.md 会影响性能吗？**

文件内容会占用上下文 token。所以保持简洁很重要——几十行的规则对速度几乎没影响，几百行就会明显。

---

## 七、现在就开始

理解 CLAUDE.md 的关键只有一句话：

**它不是让 Claude"记住"你，而是给每个项目写一份"使用说明书"。**

手册写好了，Claude 就按手册工作。手册没有，Claude 就按默认行为——而默认行为往往和你想要的不一样。

**立刻行动：**

1. 打开你正在用 Claude Code 的项目
2. 在根目录创建 `CLAUDE.md` （或用 `/init` 自动生成）
3. 复制本文的模板，保留对你有用的部分
4. 保存后开启新对话
5. 问 Claude 一个关于项目的问题，验证规则是否生效

就这五步，10 分钟搞定。

---

*对claude.md或者claude code的使用还有什么技巧或问题，也欢迎大家在评论区分享交流*

内容含AI生成图片

继续滑动看下一个

泡面AI

向上滑动看下一个

知道了

微信扫一扫  
使用小程序

： ， ， ， ， ， ， ， ， ， ， ， ， 。 视频 小程序 赞 ，轻点两下取消赞 在看 ，轻点两下取消在看 分享 留言 收藏 听过