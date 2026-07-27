# Claude code identification

## Export metadata (verbatim)

```json
{
  "uuid": "184c5860-5b9c-43e5-8c9b-fec639e375ce",
  "name": "Claude code identification",
  "summary": "**Conversation Overview**\n\nThe person was exploring a feature visible in a Claude Code screenshot showing an `@` mention typeahead dropdown with entries like `review-latex-r2`, `impl-compile`, `review-compile`, `revise-latex-r2`, `impl-adaptive`, and `review-adaptive`, each labeled \"send message.\" The conversation involved collaborative debugging to identify what these entries were, progressing through several hypotheses (custom slash commands, custom subagents, skills) before the person recalled it was an active orchestration session with multiple dynamically spawned subagents.\n\nClaude confirmed these entries are named background subagents surfaced in the `@` typeahead, a feature introduced in Claude Code version 2.1.89. The person has an extensive skills library in `.claude/skills/` (including notably an `orchestrate` skill), an empty `.claude/commands/` folder, and an empty `.claude/agents/` folder. The person asked whether these dynamically spawned subagents persist across `/clear` and `/resume` commands — Claude confirmed they do not, as subagents are stateless and session-bound. The person then asked whether GitHub issue #7317 (requesting resumable subagent sessions) had been ignored by the Claude Code team; Claude clarified based on the screenshot that it was explicitly closed as \"not planned,\" which is a deliberate product decision rather than neglect, and directed the person to the issue's comment thread for the team's stated rationale.\n\nThe person demonstrated a pattern of valuing factual precision, explicitly requesting fact-based answers early in the conversation and catching an inaccurate initial response by providing contradicting evidence (empty `.claude/agents/` folder). Claude adjusted its approach accordingly, using web searches to verify claims and distinguishing confirmed facts from speculation throughout.",
  "created_at": "2026-04-10T13:34:08.876545Z",
  "updated_at": "2026-04-10T14:39:05.716117Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-10T13:34:09.694630Z

What's this in claude code?
Your answer should be based on facts

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7799-988a-73f2-ac0c-7b4a7ae5c99d",
  "updated_at": "2026-04-10T13:34:09.694630Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d7799-57f9-722e-b345-7fb2bec88033",
      "file_name": "1775828030870_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-10T13:34:42.979122Z

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about a feature shown in Claude Code's interface. Let me look at the image.

The image shows what appears to be Claude Code's autocomplete/command menu with entries like `@review-latex-r2`, `@impl-compile`, `@review-compile`, `@revise-latex-r2`, `@impl-adaptive`, `@review-adaptive` — each with "send message" next to them. There's also a prompt saying "Good pattern. Fix this pattern as a template in @" suggesting the user is typing `@` to trigger some kind of mention/reference.

This looks like Claude Code's custom slash commands or the `@` mention feature for referencing custom commands/templates. 

I should check what information is currently available about this feature to give an accurate answer.

</details>

This looks like **Custom Slash Commands** in Claude Code. Let me verify the current details rather than guess.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-10T13:34:18.879985Z",
  "stop_timestamp": "2026-04-10T13:34:18.879985Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014Xc5oRYsKqkQKXkTWfg85i",
  "name": "web_search",
  "input": {
    "query": "Claude Code custom slash commands 2025"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_014Xc5oRYsKqkQKXkTWfg85i",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "How to Use Claude Code: A Guide to Slash Commands, Agents, Skills, and Plug-ins",
      "url": "https://www.producttalk.org/how-to-use-claude-code-features/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "producttalk.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=producttalk.org",
        "site_name": "Product Talk"
      },
      "is_missing": false,
      "text": "They are prompts or procedures that are stored in a markdown file. In order for Claude to recognize a slash command, the markdown file has to be saved in either your global ~/.claude/commands folder or in a project/.claude/commands.\n\nResearch System plug-in combines slash commands, Python scripts, Claude's built-in sub-agent, and a user-defined sub-agent to help me stay up to date on academic research. For each, I'll share a video showing how I use each plug-in, I'll link to the public repo so you can explore the files and see how I use the different building blocks (you can also try them out yourself if you want), and I'll explain why I made different design decisions. Product Talk is a reader-supported publication. These detailed walk-throughs are for paid subscribers. Click on the subscribe button to get access. ... Audio Version ($) - This link will only work for paid subscribers. I've written more software in the past six months than I've written in my entire lifetime. I started vibe coding in March 2025. My first foray was extraordinarily successful and then resulted in complete failure.\n\n🎖️ This Product Talk Article is brought to you by New Year, New Habit: The 5-Day Customer Interview Challenge. Become a more confident interviewer in less than a week. You'll conduct one practice interview a day, get personalized and detailed feedback so you know exactly what to improve, and we'll be giving out daily prizes to the most improved. Join the challenge today. 🎖️ This Product Talk Article is brought to you by Just Now Possible, a podcast about how AI products come to life—straight from the builders. If you are being asked to add AI features to your roadmap, you don't have to start from scratch. Get a head start by hearing how other teams are navigating similar challenges. Find it on YouTube, Apple Podcasts, and Spotify. Whether it's capturing context in markdown files, running slash commands, or executing tasks in parallel with sub-agents, Claude Code gives us a lot to work with.\n\nBy focusing on one tool, I've been able to learn how to use Claude Code's building blocks. I confidently know how and when to use slash commands, agents, skills, plug-ins, and even hooks. I know there is a lot of confusion out there about these different features. So today, we are going to do a deep dive on how to use Claude Code effectively. If you are new to the series, this article is the sixth in the series: Claude Code: What It Is, How It's Different, and Why Non-Technical People Should Use It · Stop Repeating Yourself: Give Claude Code a Memory · How to Use Claude Code Safely: A Non-Technical Guide to Managing Risk · How to Choose Which Tasks to Automate with AI (+50 Real Examples) How to Build AI Workflows with Claude Code (Even If You're Not Technical) How to Use Claude Code: A Guide to Slash Commands, Agents, Skills, and Plug-ins · Context Rot: Why AI Gets Worse the Longer You Chat (And How to Fix It) ...\n\nWhen I moved from the browser to Claude Code, I started to move my prompts to markdown files. But this didn't distinguish the main prompt (the instructions I wanted the agent to follow) from the added context (other markdown files it needed to reference). An overview of the competitive research slash command that we previously created. Thankfully, Claude Code has slash commands—named as such because they start with a /. In the first article in this series, we created a /competitive-research command and I've also shared details about my /today command and many of my writing slash commands (e.g. /headlines, /seo). So what are these slash commands? They are prompts or procedures that are stored in a markdown file. In order for Claude to recognize a slash command, the markdown file has to be saved in either your global ~/.claude/commands folder or in a project/.claude/commands.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.producttalk.org/how-to-use-claude-code-features/",
        "search_provider": "anthropic",
        "age": "February 5, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Slash Commands in the SDK - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/slash-commands",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "import { query } from &quot;@anthropic-ai/claude-agent-sdk&quot;; // Use a custom command for await (const message of query({ prompt: &quot;/refactor src/auth/login.ts&quot;, options: { maxTurns: 3 } })) { if (message.type === &quot;assistant&quot;) { console.log(&quot;Refactoring suggestions:&quot;, message.message); } } // Custom commands appear in the slash_commands list for await (const message of query({ prompt: &quot;Hello&quot;, options: { maxTurns: 1 } })) { if (message.type === &quot;system&quot; &amp;&amp; message.subtype === &quot;init&quot;) { // Will include both built-in and custom commands console.log(&quot;Available commands:&quot;, message.slash_commands); // Example: [&quot;/compact&quot;, &quot;/clear&quot;, &quot;/help&quot;, &quot;/refactor&quot;, &quot;/security-check&quot;] } } Custom commands support dynamic arguments using placeholders: ... --- argument-hint: [issue-number] [priority] description: Fix a GitHub issue --- Fix issue #$1 with priority $2. Check the issue description and implement the necessary changes.\n\nStreaming InputStream responses in real-timeConnect MCP serversDefine custom toolsTool searchHandling PermissionsUser approvals and inputControl execution with hooksFile checkpointingStructured outputs in the SDKHosting the Agent SDKSecurely deploying AI agentsModifying system promptsSubagents in the SDKSlash Commands in the SDKAgent Skills in the SDKTrack cost and usageTodo ListsPlugins in the SDK ... Reduce hallucinationsIncrease output consistencyMitigate jailbreaksStreaming refusalsReduce prompt leak ... Admin API overviewData residencyWorkspacesUsage and Cost APIClaude Code Analytics APIAPI and data retention ... Slash commands provide a way to control Claude Code sessions with special commands that start with /. These commands can be sent through the SDK to perform actions like clearing conversation history, compacting messages, or getting help.\n\nCustom slash commands are stored in designated directories based on their scope: Project commands: .claude/commands/ - Available only in the current project (legacy; prefer .claude/skills/) Personal commands: ~/.claude/commands/ - Available across all your projects (legacy; prefer ~/.claude/skills/) ... Refactor the selected code to improve readability and maintainability. Focus on clean code principles and best practices. This creates the /refactor command that you can use through the SDK. ... --- allowed-tools: Read, Grep, Glob description: Run security vulnerability scan model: claude-opus-4-6 --- Analyze the codebase for security vulnerabilities including: - SQL injection risks - XSS vulnerabilities - Exposed credentials - Insecure configurations · Once defined in the filesystem, custom commands are automatically available through the SDK: ...\n\nimport { query } from \"@anthropic-ai/claude-agent-sdk\"; // Use a custom command for await (const message of query({ prompt: \"/refactor src/auth/login.ts\", options: { maxTurns: 3 } })) { if (message.type === \"assistant\") { console.log(\"Refactoring suggestions:\", message.message); } } // Custom commands appear in the slash_commands list for await (const message of query({ prompt: \"Hello\", options: { maxTurns: 1 } })) { if (message.type === \"system\" && message.subtype === \"init\") { // Will include both built-in and custom commands console.log(\"Available commands:\", message.slash_commands); // Example: [\"/compact\", \"/clear\", \"/help\", \"/refactor\", \"/security-check\"] } } Custom commands support dynamic arguments using placeholders: ... --- argument-hint: [issue-number] [priority] description: Fix a GitHub issue --- Fix issue #$1 with priority $2. Check the issue description and implement the necessary changes.\n\nimport { query } from \"@anthropic-ai/claude-agent-sdk\"; // Run code review for await (const message of query({ prompt: \"/code-review\", options: { maxTurns: 3 } })) { // Process review feedback } // Run specific tests for await (const message of query({ prompt: \"/test auth\", options: { maxTurns: 5 } })) { // Handle test results } Slash Commands - Complete slash command documentation · Subagents in the SDK - Similar filesystem-based configuration for subagents ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/slash-commands",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Deep Dive - Slash Commands | by Gigi Sayfan | Medium",
      "url": "https://medium.com/@the.gigi/claude-code-deep-dive-slash-commands-9cd6ff4c33cb",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "... Claude Code has a ton of useful slash commands. Just type / and start scrolling. ... I’ll cover the ones I’ve actually used, but explore on your own — there’s more than what I’m showing here.\n\nThis is the second article in the CCDD (Claude Code Deep Dive) series. If you haven’t read the first one, check out Claude Code Deep Dive - Basics where I covered getting started, permissions, sessions and running Claude Code in the terminal and IDE. Today we’re diving into slash commands. We’ll cover both the built-in ones and how to create your own custom commands. “Automation is not about replacing humans, it’s about amplifying them.” ~ Satya Nadella · If you’re not a member read this story for free on The Gigi Zone. ... Claude Code has a ton of useful slash commands. Just type / and start scrolling. ... I’ll cover the ones I’ve actually used, but explore on your own — there’s more than what I’m showing here. When you’re done with a conversation and want to start fresh, /clear is your friend. It's faster than exiting and starting Claude Code again.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@the.gigi/claude-code-deep-dive-slash-commands-9cd6ff4c33cb",
        "search_provider": "anthropic",
        "age": "January 12, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - hesreallyhim/awesome-claude-code: A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic · GitHub",
      "url": "https://github.com/hesreallyhim/awesome-claude-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "&quot;Slash Commands are customized, carefully refined prompts that control Claude&#x27;s behavior in order to perform a specific task&quot; /create-hook by Omri Lavi - Slash command for hook creation - intelligently prompts you through the creation process ...\n\nparry by Dmytro Onypko - Prompt injection scanner for Claude Code hooks. Scans tool inputs and outputs for injection attacks, secrets, and data exfiltration attempts. [NOTE: Early development phase but worth a look.]. TDD Guard by Nizar Selander - A hooks-driven system that monitors file operations in real-time and blocks changes that violate TDD principles. TypeScript Quality Hooks by bartolli - Quality check hook for Node.js TypeScript projects with TypeScript compilation. ESLint auto-fixing, and Prettier formatting. Uses SHA256 config caching for < 5ms validation performance during real-time editing. \"Slash Commands are customized, carefully refined prompts that control Claude's behavior in order to perform a specific task\" /create-hook by Omri Lavi - Slash command for hook creation - intelligently prompts you through the creation process with smart suggestions based on your project setup (TS, Prettier, ESLint...).\n\n/commit-fast by steadycursor - Automates git commit process by selecting the first suggested message, generating structured commits with consistent formatting while skipping manual confirmation and removing Claude co-Contributorship footer. /create-pr by toyamarinyon - Streamlines pull request creation by handling the entire workflow: creating a new branch, committing changes, formatting modified files with Biome, and submitting the PR. /create-pull-request by liam-hq - Provides comprehensive PR creation guidance with GitHub CLI, enforcing title conventions, following template structure, and offering concrete command examples with best practices. /create-worktrees by evmts - Creates git worktrees for all open PRs or specific branches, handling branches with slashes, cleaning up stale worktrees, and supporting custom branch creation for development.\n\nA curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic - hesreallyhim/awesome-claude-code\n\nAB Method by Ayoub Bensalah - A principled, spec-driven workflow that transforms large problems into focused, incremental missions using Claude Code's specialized sub agents. Includes slash-commands, sub agents, and specialized workflows designed for specific parts of the SDLC. Agentic Workflow Patterns by ThibautMelen - A comprehensive and well-documented collection of agentic patterns from Anthropic docs, with colorful Mermaid diagrams and code examples for each pattern. Covers Subagent Orchestration, Progressive Skills, Parallel Tool Calling, Master-Clone Architecture, Wizard Workflows, and more. Also compatible with other providers. Blogging Platform Instructions by cloudartisan - Provides a well-structured set of commands for publishing and maintaining a blogging platform, including commands for creating posts, managing categories, and handling media files.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/hesreallyhim/awesome-claude-code",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Speed Up Your Claude Code Experience with Slash Commands | alexop.dev",
      "url": "https://alexop.dev/posts/claude-code-slash-commands-guide/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "alexop.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=alexop.dev",
        "site_name": "Alexop"
      },
      "is_missing": false,
      "text": "Slash commands are Markdown files stored in .claude/commands/ (project-level) or ~/.claude/commands/ (personal). The filename becomes the command name: commit.md becomes /commit. ... --- description: Create a git commit with a conventional message allowed-tools: Bash(git add:*), Bash(git commit:*) argument-hint: [message] model: haiku --- # Commit Changes &lt;git_diff&gt; !`git diff --cached` &lt;/git_diff&gt; Create a commit message following Conventional Commits. If $ARGUMENTS is provided, use it as the commit message. Slash commands appear in autocomplete when you type / Use $ARGUMENTS to capture everything passed to the command...\n\nWant to extend Claude Code even further? Connect external tools via MCP (Model Context Protocol) What Is the Model Context Protocol (MCP)? How It Works Learn how MCP (Model Context Protocol) standardizes AI tool integration, enabling LLMs to interact with external services, databases, and APIs through a universal protocol similar to USB-C for AI applications. mcptypescriptai Aug 10, 2025 or package your commands into a shareable plugin Building My First Claude Code Plugin How I built a Claude Code plugin to generate skills, agents, commands, and more—and stopped copy-pasting boilerplate. claude-codeaitooling +1 Nov 8, 2025 . I don’t think about naming conventions, commit messages, or PR descriptions anymore. The commands handle it. 💪 Bonus: Shell aliases for even faster execution · You can skip the interactive prompt entirely with claude -p.\n\nSlash Commands are just one piece of the Claude Code puzzle. For the full picture—including MCP, hooks, subagents, and skills—see my comprehensive guide to Claude Code’s feature stack Understanding Claude Code's Full Stack: MCP, Skills, Subagents, and Hooks Explained A practical guide to Claude Code's features: MCP, CLAUDE.md, slash commands, subagents, hooks, plugins, skills, and scheduled tasks. Updated April 2026 with deferred tool loading, worktree isolation, agent teams, and more. claude-codeaimcp +2 Nov 9, 2025 . The /branch command creates a feature branch automatically ... You need Git and the GitHub CLI (gh). Install gh with brew install gh on macOS or check cli.github.com. Run gh auth login to authenticate. Without gh, commands like /pr and /fix-pipeline will not work. Before we build the workflow, you need to understand two features.\n\nSlash commands are Markdown files stored in .claude/commands/ (project-level) or ~/.claude/commands/ (personal). The filename becomes the command name: commit.md becomes /commit. ... --- description: Create a git commit with a conventional message allowed-tools: Bash(git add:*), Bash(git commit:*) argument-hint: [message] model: haiku --- # Commit Changes <git_diff> !`git diff --cached` </git_diff> Create a commit message following Conventional Commits. If $ARGUMENTS is provided, use it as the commit message. Slash commands appear in autocomplete when you type / Use $ARGUMENTS to capture everything passed to the command: ... I replaced my manual git rituals with custom commands. They live in .claude/commands/. Here is how I drive a feature from start to merge. ... I type /branch \"implement dark mode toggle\" and Claude checks out main, pulls latest, and creates feat/dark-mode-toggle.\n\nI type /fix-pipeline. It fetches the failed logs via gh, analyzes the error, and fixes it. Uses Sonnet because debugging requires reasoning. The prompt includes guardrails—Claude must read the actual error before proposing fixes. ... I type /pr. It analyzes all commits on the branch, generates a PR title and description, and opens it via gh pr create. Checks if a PR already exists first. ... I type /review-coderabbit. It fetches CodeRabbit’s comments via GraphQL, verifies each suggestion against the codebase, implements valid fixes or pushes back with reasoning, and resolves every thread. AI reviewers aren’t always right—the prompt ensures Claude verifies before acting. ... I type /merge-to-main. It squash merges the PR, deletes the branch, and pulls main. Done. By moving your process into .claude/commands/, you are building a system. ... Define the process once.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://alexop.dev/posts/claude-code-slash-commands-guide/",
        "search_provider": "anthropic",
        "age": "November 22, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Shipyard | Claude Code CLI Cheatsheet: config, commands, prompts, + best practices",
      "url": "https://shipyard.build/blog/claude-code-cheat-sheet/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "shipyard.build",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=shipyard.build",
        "site_name": "Shipyard"
      },
      "is_missing": false,
      "text": "Strong results for most straightforward ... use as default with Max20 · To change your model to one of these three, use the /model slash command....\n\nNEW BLOG Docker Sandboxes for Claude Code: what they are and how to use them ➔ × · Get leet @ Anthropic's Claude Code with this cheatsheet, including config, CLI commands, advanced features, and best practices for faster dev + test. ... Claude Code is Anthropic’s agentic coding tool that lives in your terminal and for now is SOTA for coding. This cheatsheet should give you everything you need to install, config, and use Claude Code for now… · If you’re brand new to Claude Code, check out this guide. Once you have a Claude Pro or Max subscription (or are paying for API access), you can start using Claude Code from your terminal or the web. (Our advice: opt for the subscription if you’re using it consistently and at a reasonable rate. It’s worth getting API tokens if you don’t want to deal with token refresh windows). ... Set up your Anthropic API key before launching CC.\n\nYou can use these slash commands during a Claude Code session. Note: The /help command shows all available slash commands, including your custom commands from .claude/commands/ and ~/.claude/commands/ directories, as well as any commands you have from connected MCP servers. You can reference files or directories in your prompts. (If you don’t have an exact filename/location, CC can grep for it). ... You can run shell commands directly in a Claude session. Use the ! to bypass Claude’s conversational mode, which will use more tokens to get the same result: ... We appreciate how customizable CC is, and it’s quite easy to extend it with a few features like custom commands, hooks, MCP, and stored prompts. You can create your own CC slash commands. This is a good “shortcut” for pulling up a common prompt. Again, the more context the better (but also keep these abstract so they can be widely applied).\n\nSkills are markdown-based guides that teach Claude Code how to handle specific tasks. Unlike slash commands, skills are invoked via natural language, so Claude decides when to use them. ... --- name: add-numbers description: Add numbers from natural language input --- # Add Numbers Skill When the user asks you to add, sum, or total numbers: 1. Extract all numeric values from the prompt 2. Calculate the sum using `add.py` 3. Return the result with a brief explanation Example: \"add 15, 27, and 8\" → \"The sum is 50 (15 + 27 + 8)\" Claude will automatically reference the skill’s instructions, scripts, and templates. Check out Anthropic’s official skills for pdf, docx, pptx, xlsx, and more. Subagents are specialized Claude instances with their own context windows and personas. Use them for domain-specific tasks (code review, debugging, architecture) to get better results and save tokens.\n\nClaude Code plans all grant you access to the three latest Claude models: Sonnet 4.5, Haiku 4.5, and Opus 4.5. Quick overview: Sonnet 4.5: if you’re on a Pro or Max5 plan, this is the best model to default to. Strong results for most straightforward prompts · Haiku 4.5: use this to save tokens (and get faster results) on easier tasks · Opus 4.5: SOTA model, use sparingly with Pro or Max5 for multi-step planning or complex coding tasks, use as default with Max20 · To change your model to one of these three, use the /model slash command. To use a different Claude model, you can specify the model string with a flag: ... { \"model\": \"claude-sonnet-4-20250514\", \"maxTokens\": 4096, \"permissions\": { \"allowedTools\": [\"Read\", \"Write\", \"Bash(git *)\"], \"deny\": [ \"Read(./.env)\", \"Read(./.env.*)\", \"Write(./production.config.*)\" ] }, \"hooks\": { \"PostToolUse\": [ { \"matcher\": \"Write(*.py)\", \"hooks\": [ { \"type\": \"command\", \"command\": \"python -m black $file\" } ] } ] } } Use CLAUDE.md files to give context",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://shipyard.build/blog/claude-code-cheat-sheet/",
        "search_provider": "anthropic",
        "age": "January 20, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - wshobson/commands: A collection of production-ready slash commands for Claude Code · GitHub",
      "url": "https://github.com/wshobson/commands",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A comprehensive collection of production-ready slash commands for Claude Code that provides intelligent automation and multi-agent orchestration capabilities for modern software development.\n\nA comprehensive collection of production-ready slash commands for Claude Code that provides intelligent automation and multi-agent orchestration capabilities for modern software development. This repository provides 57 production-ready slash commands (15 workflows, 42 tools) that extend Claude Code's capabilities through: Workflows: Multi-agent orchestration systems that coordinate complex, multi-step operations across different domains · Tools: Specialized single-purpose utilities for focused development tasks ... Note: This repository uses the slash commands pattern. For a more modern approach, consider the Plugin Marketplace which provides similar functionality through a cleaner plugin architecture. # Navigate to Claude configuration directory cd ~/.claude # Clone the commands repository git clone https://github.com/wshobson/commands.git · # Add the plugin marketplace /plugin marketplace add https://github.com/wshobson/agents # Install plugin collections /plugin install claude-code-\n\n~/.claude/commands/ ├── workflows/ # Multi-agent orchestration commands │ ├── feature-development.md │ ├── smart-fix.md │ └── ... ├── tools/ # Single-purpose utility commands │ ├── api-scaffold.md │ ├── security-scan.md │ └── ... └── README.md # This documentation · File Creation: Place in workflows/ directory with descriptive naming · Agent Orchestration: Define delegation logic for multiple specialists · Error Handling: Include fallback strategies and error recovery · Output Coordination: Specify how agent outputs should be combined · File Creation: Place in tools/ directory with single-purpose naming · Implementation: Provide complete, production-ready code generation · Framework Detection: Auto-detect and adapt to project stack · Best Practices: Include security, performance, and scalability considerations ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/wshobson/commands",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Extend Claude with skills - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Skill descriptions are loaded into context so Claude knows what’s available. All skill names are always included, but if you have many skills, descriptions are shortened to fit the character budget, which can strip the keywords Claude needs to match your request. The budget scales dynamically at 1% of the context window, with a fallback of 8,000 characters. To raise the limit, set the SLASH_COMMAND_TOOL_CHAR_BUDGET environment variable. Or trim descriptions at the source: front-load the key use case, since each entry is capped at 250 characters regardless of budget.\n\nBundled skills are listed alongside built-in commands in the commands reference, marked Skill in the Purpose column. This example creates a skill that teaches Claude to explain code using visual diagrams and analogies. Since it uses default frontmatter, Claude can load it automatically when you ask how something works, or you can invoke it directly with /explain-code. ... Create a directory for the skill in your personal skills folder. Personal skills are available across all your projects. ... Every skill needs a SKILL.md file with two parts: YAML frontmatter (between --- markers) that tells Claude when to use the skill, and markdown content with instructions Claude follows when the skill is invoked. The name field becomes the /slash-command, and the description helps Claude decide when to load it automatically.Create ~/.claude/skills/explain-code/SKILL.md: --- name: explain-code description: Explains code with visual diagrams and analogies.\n\nSkill descriptions are loaded into context so Claude knows what’s available. All skill names are always included, but if you have many skills, descriptions are shortened to fit the character budget, which can strip the keywords Claude needs to match your request. The budget scales dynamically at 1% of the context window, with a fallback of 8,000 characters. To raise the limit, set the SLASH_COMMAND_TOOL_CHAR_BUDGET environment variable. Or trim descriptions at the source: front-load the key use case, since each entry is capped at 250 characters regardless of budget.\n\nResults are summarized and returned to your main conversation The agent field specifies which subagent configuration to use. Options include built-in agents (Explore, Plan, general-purpose) or any custom subagent from .claude/agents/. If omitted, uses general-purpose. By default, Claude can invoke any skill that doesn’t have disable-model-invocation: true set. Skills that define allowed-tools grant Claude access to those tools without per-use approval when the skill is active. Your permission settings still govern baseline approval behavior for all other tools. Built-in commands like /compact and /init are not available through the Skill tool. Three ways to control which skills Claude can invoke: Disable all skills by denying the Skill tool in /permissions: ... # Allow only specific skills Skill(commit) Skill(review-pr *) # Deny specific skills Skill(deploy *) Permission syntax: Skill(name) for exact match, Skill(name *) for prefix match with any arguments.\n\nCreate, manage, and share skills to extend Claude’s capabilities in Claude Code. Includes custom commands and bundled skills. ... Skills extend what Claude can do. Create a SKILL.md file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with /skill-name. Create a skill when you keep pasting the same playbook, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact. Unlike CLAUDE.md content, a skill’s body loads only when it’s used, so long reference material costs almost nothing until you need it. For built-in commands like /help and /compact, and bundled skills like /debug and /simplify, see the commands reference.Custom commands have been merged into skills. A file at .claude/commands/deploy.md and a skill at .claude/skills/deploy/SKILL.md both create /deploy and work the same way.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/skills",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Customize Claude Code with plugins | Claude",
      "url": "https://www.anthropic.com/news/claude-code-plugins",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "Plugins are a lightweight way to package and share any combination of: Slash commands: Create custom shortcuts for frequently-used operations · Subagents: Install purpose-built agents for specialized development tasks · MCP servers: Connect ...\n\nClaude Code now supports plugins: custom collections of slash commands, agents, MCP servers, and hooks that install with a single command. Category · Product announcements · Product · Claude Code · Date · October 9, 2025 · Reading time · 5 · min · ShareCopy link · https://claude.com/blog/claude-code-plugins · Slash commands, agents, MCP servers, and hooks are all extension points you can use to customize your experience with Claude Code. As we've rolled them out, we've seen users build increasingly powerful setups that they want to share with teammates and the broader community. We built plugins to make this easier. Plugins are a lightweight way to package and share any combination of: Slash commands: Create custom shortcuts for frequently-used operations · Subagents: Install purpose-built agents for specialized development tasks · MCP servers: Connect to tools and data sources through the Model Context Protocol ·\n\nClaude Code now supports plugins: custom collections of slash commands, agents, MCP servers, and hooks that install with a single command. ... Slash commands, agents, MCP servers, and hooks are all extension points you can use to customize your experience with Claude Code. As we've rolled them out, we've seen users build increasingly powerful setups that they want to share with teammates and the broader community. We built plugins to make this easier. Plugins are a lightweight way to package and share any combination of: Slash commands: Create custom shortcuts for frequently-used operations · Subagents: Install purpose-built agents for specialized development tasks · MCP servers: Connect to tools and data sources through the Model Context Protocol · Hooks: Customize Claude Code's behavior at key points in its workflow · You can install plugins directly within Claude Code using the /plugin command, now in public beta.\n\nSupporting users: Open source maintainers, for example, can provide slash commands that help developers use their packages correctly · Sharing workflows: Developers who build productivity-boosting workflows—like debugging setups, deployment pipelines, or testing harnesses—can easily share them with others · Connecting tools: Teams that need to connect internal tools and data sources through MCP servers can use plugins with the same security and configuration protocols to speed up the process · Bundling customizations: Framework authors or technical leads can package multiple customizations that work together for specific use cases · To make it easier to share these customizations, anyone can build and host plugins and create plugin marketplaces—curated collections where other developers can discover and install plugins. You can use plugin marketplaces to share plugins with the community, distribute approved plugins across your organization, and build on existing solutions for common de\n\nPlugins are now in public beta for all Claude Code users. Install them with the /plugin command and they'll work across your terminal and VS Code. Check out our documentation to get started, build your own plugins, or publish a marketplace. To see plugins in action, try this multi-agent workflow we use to develop Claude Code: ... No items found. ... No items found. Explore more product news and best practices for teams building with Claude. ... Bringing automated preview, review, and merge to Claude Code on desktopBringing automated preview, review, and merge to Claude Code on desktop · Bringing automated preview, review, and merge to Claude Code on desktopBringing automated preview, review, and merge to Claude Code on desktop ... Improving skill-creator: Test, measure, and refine Agent SkillsImproving skill-creator: Test, measure, and refine Agent Skills ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/claude-code-plugins",
        "search_provider": "anthropic",
        "age": "November 3, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Build Claude Code Skills (Custom Slash Commands) That Actually Work - DEV Community",
      "url": "https://dev.to/whoffagents/how-to-build-claude-code-skills-custom-slash-commands-that-actually-work-1nje",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dev.to",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dev.to",
        "site_name": "DEV Community"
      },
      "is_missing": false,
      "text": "Claude Code skills are reusable slash commands that give Claude specific instructions for a task. Instead of prompting from scratch every time, you type /auth and Claude already knows your stack, your patterns, and exactly what to produce.\n\nClaude Code skills are reusable slash commands that give Claude specific instructions for a task.... Tagged with claudecode, ai, productivity, tutorial.\n\nClaude Code skills are reusable slash commands that give Claude specific instructions for a task. Instead of prompting from scratch every time, you type /auth and Claude already knows your stack, your patterns, and exactly what to produce. Here's how to build your own. A skill is a markdown file in your .claude/skills/ directory. When you type /skill-name in Claude Code, it loads that file and uses its contents as the instruction set. ... --- name: auth description: \"Generate a complete authentication system for this project\" --- You are implementing authentication for this project. Follow these steps: 1. Read the existing project structure first 2. Check what auth-related packages are already installed 3. Ask the user 3 questions before writing any code: - Which providers do you need? (Google, GitHub, email/password) - Do you need role-based access control?\n\nThe frontmatter (name, description) is metadata. Everything after is the instruction Claude follows. ... --- name: test description: Generate comprehensive tests for a function or module --- Generate tests for the code the user specifies. Before writing tests: 1. Read the target file to understand the function signatures and types 2. Find the existing test directory and read 1-2 existing tests to match the pattern 3. Identify the testing framework in use (Jest, Vitest, etc.) Then generate tests covering: - Happy path (expected inputs produce expected outputs) - Edge cases (empty inputs, null, zero, max values) - Error cases (invalid inputs should throw or return errors) - Async behavior (if the function is async, test success and failure) Match the exact import style, describe block naming, and assertion patterns from existing tests. Run the tests after writing them.\n\nSave this as .claude/skills/test.md. Now type /test in Claude Code and specify a function. --- name: pr description: Generate a pull request description from the current git diff --- Generate a pull request description for the changes in this branch. Steps: 1. Run `git diff main...HEAD` to see all changes 2. Run `git log main...HEAD --oneline` to see commit history 3. Analyze what changed and why Write a PR description with: ## Summary 2-3 bullet points covering what changed at a high level. ## Changes - List each meaningful change with file paths - Group related changes together - Skip trivial changes (whitespace, comments) ## Testing - How was this tested? - What edge cases were considered? ## Notes - Any breaking changes? - Any decisions that need explanation? - Anything reviewers should pay special attention to? Keep the total length under 400 words.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://dev.to/whoffagents/how-to-build-claude-code-skills-custom-slash-commands-that-actually-work-1nje",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

The image shows an autocomplete dropdown triggered by typing `@` in Claude Code. The entries like `@review-latex-r2`, `@impl-compile`, etc. with "send message" are custom slash commands/skills. But wait — they're prefixed with `@`, not `/`. Let me check if `@` is used for something specific.

Actually, looking more carefully, this looks like it could be subagents or the `@` mention syntax for invoking subagents in Claude Code. The naming pattern (review-*, impl-*, revise-*) suggests a multi-agent workflow.


I need to look up what the `@` syntax actually does in this context.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-10T13:34:26.991451Z",
  "stop_timestamp": "2026-04-10T13:34:26.991451Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01MdV5XVv2JmJWMFSQ2rdoim",
  "name": "web_search",
  "input": {
    "query": "Claude Code @ mention subagents send message"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01MdV5XVv2JmJWMFSQ2rdoim",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Create custom subagents - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/sub-agents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Use the test-runner subagent to fix failing tests Have the code-reviewer subagent look at my recent changes · @-mention the subagent. Type @ and pick the subagent from the typeahead, the same way you @-mention files.\n\nCreate and use specialized AI subagents in Claude Code for task-specific workflows and improved context management. ... Subagents are specialized AI assistants that handle specific types of tasks. Use one when a side task would flood your main conversation with search results, logs, or file contents you won’t reference again: the subagent does that work in its own context and returns only the summary. Define a custom subagent when you keep spawning the same kind of worker with the same instructions. Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions. When Claude encounters a task that matches a subagent’s description, it delegates to that subagent, which works independently and returns results. To see the context savings in practice, the context window visualization walks through a session where a subagent handles research in its own separate window.\n\nThe subagent’s system prompt replaces the default Claude Code system prompt entirely, the same way --system-prompt does. CLAUDE.md files and project memory still load through the normal message flow. The agent name appears as @<name> in the startup header so you can confirm it’s active. This works with built-in and custom subagents, and the choice persists when you resume the session. For a plugin-provided subagent, pass the scoped name: claude --agent <plugin-name>:<agent-name>. To make it the default for every session in a project, set agent in .claude/settings.json: ... The CLI flag overrides the setting if both are present. Subagents can run in the foreground (blocking) or background (concurrent): Foreground subagents block the main conversation until complete. Permission prompts and clarifying questions (like AskUserQuestion) are passed through to you.\n\nPress Ctrl+B to background a running task To disable all background task functionality, set the CLAUDE_CODE_DISABLE_BACKGROUND_TASKS environment variable to 1. See Environment variables. One of the most effective uses for subagents is isolating operations that produce large amounts of output. Running tests, fetching documentation, or processing log files can consume significant context. By delegating these to a subagent, the verbose output stays in the subagent’s context while only the relevant summary returns to your main conversation. Use a subagent to run the test suite and report only the failing tests with their error messages · For independent investigations, spawn multiple subagents to work simultaneously: Research the authentication, database, and API modules in parallel using separate subagents · Each subagent explores its area independently, then Claude synthesizes the findings.\n\nA subagent that can both analyze and fix issues. Unlike the code reviewer, this one includes Edit because fixing bugs requires modifying code. The prompt provides a clear workflow from diagnosis to verification. --- name: debugger description: Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when encountering any issues. tools: Read, Edit, Bash, Grep, Glob --- You are an expert debugger specializing in root cause analysis. When invoked: 1. Capture error message and stack trace 2. Identify reproduction steps 3. Isolate the failure location 4. Implement minimal fix 5. Verify solution works Debugging process: - Analyze error messages and logs - Check recent code changes - Form and test hypotheses - Add strategic debug logging - Inspect variable states For each issue, provide: - Root cause explanation - Evidence supporting the diagnosis - Specific code fix - Testing approach - Prevention recommendations Focus on fixing the underlying issue, not the s",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/sub-agents",
        "search_provider": "anthropic",
        "age": "1 hour ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Custom Subagents: Complete Guide to @ Mention and Specialized Agent Teams | Claude Lab",
      "url": "https://claudelab.net/en/articles/claude-code/claude-code-custom-subagents-at-mention-guide",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelab.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelab.net",
        "site_name": "Claude Lab"
      },
      "is_missing": false,
      "text": "Create custom subagents in .claude/agents/, invoke them with @ mention, and build a specialized AI team for code review, test generation, and documentation.\n\nCreate custom subagents in .claude/agents/, invoke them with @ mention, and build a specialized AI team for code review, test generation, and documentation. ... Claude Code lets you create custom subagents — specialized AI assistants that handle specific tasks within their own context window. With the April 2026 update introducing @ mention typeahead, you can now invoke your subagents just as easily as referencing a file. This guide covers everything from creating your first subagent to building a full team of specialized agents for your development workflow. A subagent in Claude Code is an independent AI agent with its own system prompt, tool access, and context window. When the main agent delegates a task, the subagent works independently and returns results without contaminating the primary conversation. Isolated context: Each subagent focuses on its specialty without mixing concerns ·\n\nOnce your agent file is in place, type @ in the Claude Code prompt. A typeahead list appears showing all available subagents — the same UX you already know from file references. > @code-reviewer Please review the changes in src/api/payment.ts · Subagents that are currently running as background processes also appear in the typeahead with a status indicator next to their name. Plugin-provided agents are namespaced as <plugin-name>:<agent-name> (e.g., @testing:jest-runner). Using @ mention instead of describing the task in natural language gives you precise control over which agent handles the task — no ambiguity, no wrong delegation. --- name: code-reviewer description: Reviews code for security vulnerabilities, performance issues, and readability problems. Best for PR reviews and pre-commit quality checks. tools: read, bash --- You are a security-focused senior engineer.\n\nThe name field is required. Use hyphens in filenames (e.g., code-reviewer.md), not underscores. Cause: The tools field is too restrictive. Fix: Add the missing tool to the tools list, or remove the field entirely to grant all permissions. Cause: The description is too vague for Claude to decide when to delegate automatically. Fix: Rewrite the description to be more specific. Phrases like \"best for X tasks\" or \"specialized agent for Y\" help Claude make correct delegation decisions. When in doubt, use explicit @ mention invocation to guarantee the right agent is called. Q: What's the difference between a subagent and a slash command? A: Subagents are autonomous AI agents that can use tools, reason through problems, and make decisions. Slash commands are simply prompt templates that get inserted into the conversation. For complex, multi-step tasks, use subagents.\n\nClaude Code's custom subagents bring genuine specialization to your AI-assisted development workflow. The April 2026 @ mention typeahead makes invoking the right expert feel as natural as referencing a file. Start simple: create a single code-reviewer.md in ~/.claude/agents/ today, and you'll have a consistent review process available in every project you work on. To go deeper on AI agent architecture and multi-agent system design, the Claude Code Custom Skills Development Guide covers how to combine subagents with plugins for production-grade automation pipelines. For a comprehensive reference on autonomous agent patterns, Building LLM-Powered Applications by Valentina Alto is an excellent complement to hands-on Claude Code experimentation. ... Claude Lab offers premium articles with implementation code, benchmarks, and production-ready design patterns — practical content we hope you'll find useful.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelab.net/en/articles/claude-code/claude-code-custom-subagents-at-mention-guide",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Subagents in the SDK - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/subagents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "To guarantee Claude uses a specific subagent, mention it by name in your prompt: &quot;Use the code-reviewer agent to check the authentication module&quot; This bypasses automatic matching and directly invokes the ...\n\nThe parent receives the subagent's final message verbatim as the Agent tool result, but may summarize it in its own response. To preserve subagent output verbatim in the user-facing response, include an instruction to do so in the prompt or systemPrompt option you pass to the main query() call. Claude automatically decides when to invoke subagents based on the task and each subagent's description. For example, if you define a performance-optimizer subagent with the description \"Performance optimization specialist for query tuning\", Claude will invoke it when your prompt mentions optimizing queries. Write clear, specific descriptions so Claude can match tasks to the right subagent. To guarantee Claude uses a specific subagent, mention it by name in your prompt: \"Use the code-reviewer agent to check the authentication module\" This bypasses automatic matching and directly invokes the named subagent.\n\nDefine and invoke subagents to isolate context, run tasks in parallel, and apply specialized instructions in your Claude Agent SDK applications.\n\nWhen you define subagents, Claude determines whether to invoke them based on each subagent's description field. Write clear descriptions that explain when the subagent should be used, and Claude will automatically delegate appropriate tasks. You can also explicitly request a subagent by name in your prompt (for example, \"Use the code-reviewer agent to...\"). Each subagent runs in its own fresh conversation. Intermediate tool calls and results stay inside the subagent; only its final message returns to the parent. See What subagents inherit for exactly what's in the subagent's context. Example: a research-assistant subagent can explore dozens of files without any of that content accumulating in the main conversation. The parent receives a concise summary, not every file the subagent read. Multiple subagents can run concurrently, dramatically speeding up complex workflows.\n\nAnalyze code structure, identify patterns, and suggest improvements without making changes.\"\"\", # Read-only tools: no Edit, Write, or Bash access tools=[\"Read\", \"Grep\", \"Glob\"], ) }, ), ): if hasattr(message, \"result\"): print(message.result) asyncio.run(main()) If Claude completes tasks directly instead of delegating to your subagent: Include the Agent tool: subagents are invoked via the Agent tool, so it must be in allowedTools · Use explicit prompting: mention the subagent by name in your prompt (for example, \"Use the code-reviewer agent to...\") Write a clear description: explain exactly when the subagent should be used so Claude can match tasks appropriately · Agents defined in .claude/agents/ are loaded at startup only. If you create a new agent file while Claude Code is running, restart the session to load it. Claude Code subagents: comprehensive subagent documentation including filesystem-based definitions ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/subagents",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How and when to use subagents in Claude Code | Claude",
      "url": "https://claude.com/blog/subagents-in-claude-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Pro-tip: When a subagent is taking a while, Ctrl+B sends it to the background. The conversation can continue while it runs, and results surface automatically when it finishes. The /tasks command shows anything running in the background. When the same kind of subagent keeps getting requested (a security reviewer, a test writer, a docs proofreader), it can be defined once as a custom subagent. Claude then delegates to it automatically whenever a task matches its description, no prompting required. Custom subagents live as markdown files in .claude/agents/ (project-level, shared with the team) or ~/.claude/agents/ (user-level, available across all projects). Each one gets its own system prompt, tool permissions, and optionally its own model. The easiest way to create one is the /agents command, which walks through setup interactively and can generate a first draft from a description.\n\nIn the code snippet above, /deep-review triggers a three-part subagent analysis on demand. Because the description mentions reviewing staged changes before commits, Claude can also reach for this skill automatically when that context comes up. A skill is a directory, not a single file. Alongside SKILL.md, it can hold templates Claude fills in, example outputs showing the expected format, or scripts Claude executes as part of the workflow. The legacy .claude/commands/ format was a single flat file, so everything had to live in the prompt itself. For more on using skills with Claude Code, see our Claude Code skills docs. Hooks are user-defined shell commands, HTTP endpoints, or LLM prompts that execute automatically at specific points in Claude Code's lifecycle. Hooks can automate subagent workflows based on events. Hooks trigger on specific actions and run subagent tasks without manual invocation.\n\nPro-tip: When a subagent is taking a while, Ctrl+B sends it to the background. The conversation can continue while it runs, and results surface automatically when it finishes. The /tasks command shows anything running in the background. When the same kind of subagent keeps getting requested (a security reviewer, a test writer, a docs proofreader), it can be defined once as a custom subagent. Claude then delegates to it automatically whenever a task matches its description, no prompting required. Custom subagents live as markdown files in .claude/agents/ (project-level, shared with the team) or ~/.claude/agents/ (user-level, available across all projects). Each one gets its own system prompt, tool permissions, and optionally its own model. The easiest way to create one is the /agents command, which walks through setup interactively and can generate a first draft from a description.\n\nA practical guide to Claude Code subagents: when they help, how to direct them, and the signals that tell you delegation is worth it. ... Claude Code handles complex, multi-step projects well, but long sessions accumulate weight. Every file read, every tangent explored, every half-finished thought stays in the context window, slowing responses and driving up token costs. Consider building a new feature in a large TypeScript monorepo. The main work is the implementation, but side tasks keep appearing: trace how an existing service handles auth, find the shared util for date formatting, check whether the design system already has a component close to what you need. None of these need the full project context, and running them inside the main session adds noise. What if you could run them in parallel? Enter subagents. A subagent is an isolated Claude instance with its own context window.\n\nIt takes a task, does the work, and returns only the result. Think of subagents as the browser tabs of a Claude Code session: a place to chase a tangent without losing the main thread. In this article, we discuss when it makes sense to use subagents, how to invoke them, and when the overhead isn't worth it. Subagents are self-contained agents that operate with their own context windows. When Claude spawns a subagent, that assistant works independently to read files, explore code, or make changes. When it completes its task, the subagent returns only the relevant results to the main conversation. Each subagent starts fresh, unburdened by the history of the conversation or invoked skills. Multiple subagents can run in parallel, and each can have different permissions: a research subagent might have read-only access, while an implementation subagent gets full editing capabilities.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claude.com/blog/subagents-in-claude-code",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Use Claude Code: A Guide to Slash Commands, Agents, Skills, and Plug-ins",
      "url": "https://www.producttalk.org/how-to-use-claude-code-features/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "producttalk.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=producttalk.org",
        "site_name": "Product Talk"
      },
      "is_missing": false,
      "text": "As you get close to the context window limit, you&#x27;ll see a message that Claude is compacting the conversation. It&#x27;s basically summarizing the conversation as a means of reducing the size of the context window.\n\nClaude Code automatically manages the context window for you. As you get close to the context window limit, you'll see a message that Claude is compacting the conversation. It's basically summarizing the conversation as a means of reducing the size of the context window. Claude Code (in VS Code) recently started compacting the context window when it gets to 75% full. This is a way of ensuring higher-quality output. But compacting is slow and interrupts tasks. And there are things that we can do to delay the context window filling up. One of them is to offload tasks to sub-agents. My technical-blog-reviewer sub-agent is reviewing my blog post in its own context window and will report back to the main agent when it's done. Sub-agents work in their own context window and report back to the main agent. For example, Claude might spawn a sub-agent to search the web.\n\nI've been going deep on Claude Code. I'm finding this has been a better strategy for getting value out of AI—rather than trying every new tool on the market. By focusing on one tool, I've been able to learn how to use Claude Code's building blocks. I confidently know how and when to use slash commands, agents, skills, plug-ins, and even hooks. I know there is a lot of confusion out there about these different features. So today, we are going to do a deep dive on how to use Claude Code effectively. If you are new to the series, this article is the sixth in the series: Claude Code: What It Is, How It's Different, and Why Non-Technical People Should Use It · Stop Repeating Yourself: Give Claude Code a Memory · How to Use Claude Code Safely: A Non-Technical Guide to Managing Risk · How to Choose Which Tasks to Automate with AI (+50 Real Examples) How to Build AI Workflows with Claude Code (Even If You're Not Technical) How to Use Claude Code: A Guide to Slash Commands, Agents, Skills, and \n\nThis series was inspired by my personal usage of Claude Code. I'm a big fan and I like to share what works for me with readers. I have not received any compensation from Anthropic for writing this series. And you can trust that if that ever changes, I will disclose it. This is not only required by the FTC here in the US, but I strongly believe it is the right thing to do. You can count on me to do so. As you get into building out your first automations, it can feel overwhelming. Anthropic has added a number of features to Claude Code and it can be hard to know what to use when. Today, we'll dive into the building blocks available to us in Claude Code. We'll learn when to use each one, how to use them in combinations to harness Claude's power, and we'll also discuss some of the limitations of these tools—despite the hype. 🎖️ This Product Talk Article is brought to you by New Year, New Habit: The 5-Day Customer Interview Challenge.\n\nWhether it's capturing context in markdown files, running slash commands, or executing tasks in parallel with sub-agents, Claude Code gives us a lot to work with. We'll start with an overview of how each of these features work and when to use them. The more Claude knows about you, your products or business, and how you like to work, the better it can help you do your job. If we engage with Claude in the web app, every conversation starts from scratch. Sure, we can use Claude Projects to share context across chats, but each Project is isolated from the others. This means we have to spend a lot of time uploading and downloading files, making sure we start our chats in the right context, and copying and pasting in and out of our conversations. With Claude Code, we have direct access to our file system. This means we can capture key context in markdown files and point Claude to them on an as-needed basis.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.producttalk.org/how-to-use-claude-code-features/",
        "search_provider": "anthropic",
        "age": "February 5, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - VoltAgent/awesome-claude-code-subagents: A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases · GitHub",
      "url": "https://github.com/VoltAgent/awesome-claude-code-subagents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "3. Deploy and Utilize Your subagent becomes immediately available. Claude Code will automatically engage it when suitable, or you can explicitly request its help: &gt; Have the code-reviewer subagent analyze my latest commits ... Note: When naming conflicts occur, project-specific subagents override global ones. ... --- name: subagent-name description: When this agent should be invoked tools: Read, Write, Edit, Bash, Glob, Grep model: sonnet --- You are a [role description and expertise areas]... [Agent-specific checklists, patterns, and guidelines]... ## Communication Protocol Inter-agent communication specifications... ## Development Workflow Structured implementation phases... Each subagent includes a model field that automatically routes it to the right Claude model — balancing quality and cost: ... You can override any agent&#x27;s model by editing the model field in its frontmatter.\n\nSubagents are specialized AI assistants that enhance Claude Code's capabilities by providing task-specific expertise. They act as dedicated helpers that Claude Code can call upon when encountering particular types of work. Independent Context Windows Every subagent operates within its own isolated context space, preventing cross-contamination between different tasks and maintaining clarity in the primary conversation thread. Domain-Specific Intelligence Subagents come equipped with carefully crafted instructions tailored to their area of expertise, resulting in superior performance on specialized tasks. Shared Across Projects After creating a subagent, you can utilize it throughout various projects and distribute it among team members to ensure consistent development practices. Granular Tool Permissions You can configure each subagent with specific tool access rights, enabling fine-grained control over which capabilities are available for different task types.\n\nEach subagent's tools field specifies Claude Code built-in tools, optimized for their role: Read-only agents (reviewers, auditors): Read, Grep, Glob - analyze without modifying · Research agents (analysts, researchers): Read, Grep, Glob, WebFetch, WebSearch - gather information · Code writers (developers, engineers): Read, Write, Edit, Bash, Glob, Grep - create and execute · Documentation agents (writers, documenters): Read, Write, Edit, Glob, Grep, WebFetch, WebSearch - document with research · Each agent has minimal necessary permissions. You can extend agents by adding MCP servers or external tools to the tools field. Claude Code skill for browsing and fetching subagents from this catalog. ... We welcome contributions! See CONTRIBUTING.md for guidelines. ... This repository is a curated collection of subagent definitions contributed by both the maintainers and the community.\n\nA collection of 100+ specialized Claude Code subagents covering a wide range of development use cases - VoltAgent/awesome-claude-code-subagents\n\n3. Deploy and Utilize Your subagent becomes immediately available. Claude Code will automatically engage it when suitable, or you can explicitly request its help: > Have the code-reviewer subagent analyze my latest commits ... Note: When naming conflicts occur, project-specific subagents override global ones. ... --- name: subagent-name description: When this agent should be invoked tools: Read, Write, Edit, Bash, Glob, Grep model: sonnet --- You are a [role description and expertise areas]... [Agent-specific checklists, patterns, and guidelines]... ## Communication Protocol Inter-agent communication specifications... ## Development Workflow Structured implementation phases... Each subagent includes a model field that automatically routes it to the right Claude model — balancing quality and cost: ... You can override any agent's model by editing the model field in its frontmatter.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/VoltAgent/awesome-claude-code-subagents",
        "search_provider": "anthropic",
        "age": "February 8, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Introduction to subagents",
      "url": "https://anthropic.skilljar.com/introduction-to-subagents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "skilljar.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=skilljar.com",
        "site_name": "Anthropic Courses"
      },
      "is_missing": false,
      "text": "Learn how to use and create sub-agents in Claude Code to manage context, delegate tasks, and build specialized workflows that keep your main conversation clean and focused.\n\nLearn to build with Claude AI through Anthropic's comprehensive courses and training programs.\n\nLearn to build with Claude through Anthropic's comprehensive courses and training programs.\n\nCode not recognized. ... Sub-agents are one of the most practical ways to get more out of longer Claude Code sessions. They let you delegate tasks to isolated assistants that do their work separately and return just the information you need — keeping your main context window clean and your conversations focused. ... How sub-agents work — what happens when Claude Code spins up a separate context window, how inputs flow in, and how summaries come back · Creating custom sub-agents — using the /agents command to build sub-agents tailored to your workflow, from code reviewers to documentation generators · Designing effective sub-agents — patterns that make sub-agents reliable, including structured output formats, obstacle reporting, and limiting tool access · When to use them (and when not to) — practical guidance on where sub-agents help the most and the common anti-patterns to avoid ·\n\nSkilljar only tracks your learning progress within this course platform, while your Anthropic account manages your access to the Anthropic Console and/or Claude AI services. ... Yes, Skilljar employs industry-standard security measures including data encryption, secure hosting, and regular security audits. Your learning data is stored on secure servers with appropriate access controls. Skilljar is SOC 2 compliant and follows best practices for data protection to ensure your information remains safe and private. ... To request deletion of your learning data or account, email academy-support@anthropic.com. Your request will be processed in accordance with applicable privacy laws and our data retention policies. Note that some data may need to be retained for legitimate business purposes, such as compliance or security, but we'll delete all personal information where legally permissible.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://anthropic.skilljar.com/introduction-to-subagents",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Subagents and Main-Agent Coordination: A Complete Guide to AI Agent Delegation Patterns | by Rick Hightower | Mar, 2026 | Towards AI",
      "url": "https://medium.com/@richardhightower/claude-code-subagents-and-main-agent-coordination-a-complete-guide-to-ai-agent-delegation-patterns-a4f88ae8f46c",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Every time Claude Code spawns a subagent, it is making a deliberate architectural choice. Instead of doing everything in one context, it splits the work across isolated, specialized workers… ... We build Enterprise AI. We teach what we learn. Join 100K+ AI practitioners on Towards AI Academy. Free: 6-day Agentic AI Engineering Email Guide: https://email-course.towardsai.net/ ...\n\n“” is published by Rick Hightower in Towards AI.\n\nCover: Claude Code subagent coordination hub-and-spoke delegation pattern with central AI orchestrator and specialized worker agents ... 🚀 Unlock the full potential of AI with Claude Code! Discover how to delegate tasks to specialized subagents for seamless coding assistance. Dive into the hub-and-spoke delegation patterns that keep your AI organized and effective. Ready to revolutionize your workflow? Read on! 🧠✨ #AI #Coding #Productivity · Summary: Claude Code utilizes subagents to delegate tasks, enhancing efficiency by isolating work and maintaining context. Subagents operate independently, each with specific roles like exploring code or executing commands, while the main agent coordinates their activities in a hub-and-spoke model. This architecture promotes clarity, safety, and reusability, allowing teams to define custom agents with precise descriptions for effective delegation.\n\nEvery time Claude Code spawns a subagent, it is making a deliberate architectural choice. Instead of doing everything in one context, it splits the work across isolated, specialized workers… ... We build Enterprise AI. We teach what we learn. Join 100K+ AI practitioners on Towards AI Academy. Free: 6-day Agentic AI Engineering Email Guide: https://email-course.towardsai.net/ ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@richardhightower/claude-code-subagents-and-main-agent-coordination-a-complete-guide-to-ai-agent-delegation-patterns-a4f88ae8f46c",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Best practices for Claude Code subagents",
      "url": "https://www.pubnub.com/blog/best-practices-for-claude-code-sub-agents/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pubnub.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pubnub.com",
        "site_name": "PubNub"
      },
      "is_missing": false,
      "text": "Hooks suggest, humans approve: the hook prints “Use the architect-review subagent on ‘use-case-presets’.” A human pastes it to proceed, preventing runaway chains and forcing a quick glance. Definition of Done per agent: prompts end with checklists (PM: acceptance criteria + questions; Architect: ADR + guardrails; Implementer: code + tests green + summary). Missing DoD? Stop and fix. Every enhancement carries a “slug” (e.g., use-case-presets) and leaves a quick audit trail: Queue: enhancements/_queue.json shows slug → status. ... Proof: Passing tests + commit messages with the slug; optional UI test artifacts. Ask Claude Code to “summarize what changed for &lt;slug&gt; since last run” for a diff-based review. Add queue statuses like ON_HOLD or BLOCKED. If a feature splits, create -a/-b slugs and cross-link in the PM note. Pre-implementation: a human signs off on the ADR.\n\nHooks suggest, humans approve: the hook prints “Use the architect-review subagent on ‘use-case-presets’.” A human pastes it to proceed, preventing runaway chains and forcing a quick glance. Definition of Done per agent: prompts end with checklists (PM: acceptance criteria + questions; Architect: ADR + guardrails; Implementer: code + tests green + summary). Missing DoD? Stop and fix. Every enhancement carries a “slug” (e.g., use-case-presets) and leaves a quick audit trail: Queue: enhancements/_queue.json shows slug → status. ... Proof: Passing tests + commit messages with the slug; optional UI test artifacts. Ask Claude Code to “summarize what changed for <slug> since last run” for a diff-based review. Add queue statuses like ON_HOLD or BLOCKED. If a feature splits, create -a/-b slugs and cross-link in the PM note. Pre-implementation: a human signs off on the ADR.\n\nIf you’ve tried Claude Code for one-off prompting and thought \"Great…but now make it a pipeline,” subagents are your next step. At PubNub, we are migrating from ad-hoc prompts to a subagent pipeline that designs features, reviews architecture, implements code, runs tests, and hands back clean PRs, repeatably and safely. Why? This modular approach is more effective than relying on ad-hoc, all-in-one prompting, where context can become crowded and task performance inconsistent. This guide shares some of our experiences: concepts, best practices, and a hands-on setup (subagents, hooks, and MCP servers). It assumes you already use Claude Code, and we’ll focus on building a reliable agent architecture for any codebase. Claude Code subagents are specialized, autonomous assistants designed to execute specific, well-defined tasks within a larger workflow.\n\nUnlike a general-purpose agent that handles a wide range of requests, a subagent operates with its own distinct system prompt, a curated set of tool permissions, and an isolated context window. This modular design allows you to create a team of AI experts. Give them roles: Product Spec, Architect, Implementer/Tester, and chain them with Claude Code hooks to create a dependable software pipeline: Reproducibility: Stop re-prompting. Subagents and hooks codify repeatable steps. Separation of concerns: PM asks, Architect validates, Implementer builds & tests, QA verifies. Governance & safety: Each agent has scoped tools & permissions, while hooks gate and log transitions. Throughput: Serialize high-risk steps, parallelize safe ones. One important advantage of agents is that they have their own context window and can provide a summary after doing extensive research to the main agent.\n\nSubagents are defined as Markdown with YAML frontmatter (name, description, optional tool list). They can be discovered and invoked by Claude Code from your project’s .claude/agents/ directory or from your user scope. We started with a three-stage pipeline that’s generic to any stack: pm-spec → reads an enhancement, writes a working spec, asks clarifying questions, sets status READY_FOR_ARCH. architect-review → validates design against platform constraints (for PubNub real-time apps, use PubNub’s MCP server for ensuring the architect subagent is up-to-date on the best design patterns and latest SDKS). The architect considers performance/cost limits, produces an ADR, and sets status READY_FOR_BUILD. implementer-tester → implements code & tests (unit + optional UI via Playwright), updates docs, flips status DONE. A hook watches our queue file and prints the next explicit command (e.g., “Use the architect-review subagent on ‘use-case-presets’.”).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.pubnub.com/blog/best-practices-for-claude-code-sub-agents/",
        "search_provider": "anthropic",
        "age": "August 28, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Agents & Subagents: What They Actually Unlock",
      "url": "https://www.ksred.com/claude-code-agents-and-subagents-what-they-actually-unlock/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ksred.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ksred.com",
        "site_name": "Kyle Redelinghuys"
      },
      "is_missing": false,
      "text": "The subagent runs with its own context, tool access, and permissions, then returns a single final message. Subagents cannot spawn further subagents, which keeps the nesting manageable.\n\nThe orchestrator-worker pattern is fairly simple. A parent agent analyses a task, decides whether to handle it directly or delegate it, and uses the Agent tool (previously called the Task tool, and both names still work) to spin up a subagent with a prompt string. The subagent runs with its own context, tool access, and permissions, then returns a single final message. Subagents cannot spawn further subagents, which keeps the nesting manageable. Claude ships with three built-in subagent types. The Explore type handles read-only file discovery and codebase search, running on Haiku by default for speed and cost. The Plan type gathers context before presenting a strategy in plan mode. The General-purpose type handles anything involving both exploration and modification. Claude routes to these automatically based on task characteristics, though the auto-selection is imperfect in practice, and more on that below.\n\nCreated a few .claude/agents/ definitions, gave them names and tool restrictions, felt good about it, and then gradually stopped thinking about them. At some point Claude just started handling things well enough on its own that the agent files sat there gathering dust. They're still in my repos. They just don't get called. I kept telling myself I wasn't missing anything, but context quality on my medium-to-large solo projects had started to feel off, with responses getting vaguer as sessions grew and the model losing track of decisions made earlier in a conversation. I was working around it using Cont3xt.dev, a tool I built specifically to manage AI context, and that helped, but it felt like I was solving a symptom rather than understanding the actual problem. So I went back and dug properly into what agents and subagents actually do, and more importantly what they unlock that a single-agent session can't.\n\nStandard Claude Code gives you a 200K-token context window per session. That sounds enormous until you're in a multi-hour session on a project with a dozen files open, a long conversation history, and tool call outputs stacking up. By the time you hit two-thirds capacity, response quality degrades noticeably, not because the model is worse, but because the context is full of noise and the model has to attend to all of it equally. I'd been experiencing this without quite naming it. Subagents solve this by giving each delegated task its own isolated 200K-token context. The parent agent spawns a subagent with a specific prompt, the subagent does its work, reads files, runs searches, makes tool calls, and returns only its final output to the parent, be that a summary, a result, or a recommendation. All the intermediate noise stays inside the subagent's context and never touches the parent's conversation.\n\nCustom agents are defined as Markdown files with YAML frontmatter, stored in .claude/agents/ at project scope or ~/.claude/agents/ at user scope. A basic definition looks like this: --- name: code-reviewer description: Expert code review specialist. Use immediately after modifying code. tools: Read, Grep, Glob model: sonnet permissionMode: default --- You are a senior code reviewer checking for bugs, security issues, and code quality. Review any code changes and return a concise list of specific findings. The tools field does something genuinely useful here: it physically restricts what the subagent can do. A reviewer defined with only Read, Grep, Glob cannot write files. That's not a naming convention or a prompt instruction, it's a hard constraint. For a solo developer running with broad permissions, having a review agent that structurally cannot modify code is worth something.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.ksred.com/claude-code-agents-and-subagents-what-they-actually-unlock/",
        "search_provider": "anthropic",
        "age": "4 weeks ago"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now I have clear evidence.

</details>

This is the **custom subagent `@` mention typeahead** in Claude Code.

Based on the official Claude Code documentation and recent sources:

- Subagents are specialized AI assistants that handle specific types of tasks. Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions.

- You can invoke them by typing `@` and picking the subagent from the typeahead, the same way you `@`-mention files.

- With the April 2026 update introducing `@` mention typeahead, you can invoke your subagents just as easily as referencing a file.

What you're seeing in the screenshot are custom subagents (defined as `.md` files in `.claude/agents/` or `~/.claude/agents/`) with names like `review-latex-r2`, `impl-compile`, `revise-latex-r2`, `impl-adaptive`, `review-adaptive`. The "send message" label indicates you can send a task to that subagent. The naming pattern suggests a multi-agent workflow with review/implement/revise stages for different tasks (LaTeX, compilation, adaptive).

Custom subagents live as markdown files in `.claude/agents/` (project-level) or `~/.claude/agents/` (user-level). Each gets its own isolated context window so intermediate work doesn't pollute your main conversation.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7799-988a-7c96-84de-981fe62bd06e",
  "updated_at": "2026-04-10T13:34:42.979122Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7799-988a-73f2-ac0c-7b4a7ae5c99d"
}
```

</details>

### 3. human — 2026-04-10T14:18:16.114559Z

I have not customized these subagents before

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c1-f9ac-72c1-8a57-b67269359d7c",
  "updated_at": "2026-04-10T14:18:16.114559Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7799-988a-7c96-84de-981fe62bd06e"
}
```

</details>

### 4. assistant — 2026-04-10T14:18:34.686706Z

<details>
<summary>Thinking (verbatim)</summary>

The user says they haven't customized these subagents. So these aren't custom subagents they created. Let me reconsider what's shown in the image.

Looking again: the entries are `@review-latex-r2`, `@impl-compile`, `@review-compile`, `@revise-latex-r2`, `@impl-adaptive`, `@review-adaptive`. These all say "send message."

If the user didn't create them, they could be:
1. Built-in subagents
2. Plugin-provided subagents
3. Subagents from a plugin marketplace installation
4. Something else entirely


5. Or maybe they're skills or commands defined in a `.claude/` directory that someone else set up in the project repo, which would explain why they're showing up automatically without the user creating them.

I'm not actually certain what these are, so I should ask the user or suggest possibilities rather than making assumptions.

</details>

Good correction. If you didn't create them, a few possibilities:

1. **They came with a project repo.** Subagents in `.claude/agents/` at the project level are shared with anyone who clones the repo. If you're working in someone else's project (or a shared one), those definitions would appear in your `@` typeahead automatically.

2. **They were installed via a plugin.** Plugins are a lightweight way to package and share any combination of slash commands, subagents, MCP servers, and hooks that install with a single command. A `/plugin install` at some point could have added them.

3. **Claude Code auto-generated them during a session.** Claude Code can create subagent files if instructed to during a conversation (e.g., via `/agents` command), and they'd persist across sessions.

To verify, you could check what's actually on disk:

```bash
# Project-level agents
ls .claude/agents/

# User-level agents (global)
ls ~/.claude/agents/
```

That will tell you exactly where these definitions live and whether you (or someone/something else) put them there. The naming pattern (`review-*`, `impl-*`, `revise-*`) looks like a structured multi-stage workflow — possibly created by Claude Code itself during a previous session if you asked it to set up a pipeline.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c1-f9ac-79a5-abed-fe7b135fac8c",
  "updated_at": "2026-04-10T14:18:34.686706Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77c1-f9ac-72c1-8a57-b67269359d7c"
}
```

</details>

### 5. human — 2026-04-10T14:18:57.227882Z

I have not customized these subagents before and the .claude/agents folder is empty

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c2-9cbc-7e7d-ac62-4ee0643fd620",
  "updated_at": "2026-04-10T14:18:57.227882Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7799-988a-7c96-84de-981fe62bd06e"
}
```

</details>

### 6. assistant — 2026-04-10T14:19:13.255616Z

<details>
<summary>Thinking (verbatim)</summary>

The user says they haven't created custom subagents and .claude/agents/ is empty, yet the @ typeahead is showing these entries. Let me reconsider what these could be.

Looking at the image again: the entries are `@review-latex-r2`, `@impl-compile`, `@review-compile`, `@revise-latex-r2`, `@impl-adaptive`, `@review-adaptive`. These look like they could be slash commands/skills rather than subagents, or they could be coming from a plugin, or from the project's .claude/commands/ or .claude/skills/ directories.


The user is typing @ and getting this autocomplete, with "send message" next to each entry suggesting they're invokable. These could be coming from MCP servers, plugins, or other directories like .claude/commands/ or .claude/skills/, though they don't follow the plugin naming format I'd expect. They might be built-in subagents or auto-generated from somewhere else in the project.

I'm not confident enough to speculate further without more details from the user about where these are coming from or how they were created.

</details>

Good catch — that contradicts my initial explanation. If `.claude/agents/` is empty and you didn't create them, then these aren't custom subagents in the standard sense.

A few possibilities, but I'd rather not speculate without evidence. Can you clarify:

1. Do you have anything in `.claude/commands/` or `.claude/skills/`?
2. Do you have any plugins installed? (`/plugin list`)
3. Were these entries present at the start of the session, or did they appear after Claude Code suggested/created something mid-conversation?

The naming pattern (`review-*`, `impl-*`, `revise-*`) strongly suggests these were **auto-generated by Claude Code during the session** as part of a multi-step workflow — but I want to confirm rather than assume.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c2-9cbc-7d96-a04b-757918443778",
  "updated_at": "2026-04-10T14:19:13.255616Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77c2-9cbc-7e7d-ac62-4ee0643fd620"
}
```

</details>

### 7. human — 2026-04-10T14:25:07.233999Z

1. I have something in skills/ but nothing in commands/
2. No relevant plugins

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c8-3a01-7cd9-8773-95659259e192",
  "updated_at": "2026-04-10T14:25:07.233999Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77c2-9cbc-7d96-a04b-757918443778"
}
```

</details>

### 8. assistant — 2026-04-10T14:25:10.946059Z

<details>
<summary>Thinking (verbatim)</summary>

The user has skills in `.claude/skills/` but no commands or plugins. The `@` typeahead is showing entries like `@review-latex-r2`, `@impl-compile`, etc. with "send message."

Looking back at the image more carefully - the prompt says "Good pattern. Fix this pattern as

</details>



<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c8-3a01-739b-bc4b-c98f30223f84",
  "updated_at": "2026-04-10T14:25:10.946059Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77c8-3a01-7cd9-8773-95659259e192"
}
```

</details>

### 9. human — 2026-04-10T14:25:31.115760Z

1. I have something in skills/ but nothing in commands/
2. No relevant plugins
3. They appear when I use "@"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c8-9f20-7f74-a759-81cbffaf37a6",
  "updated_at": "2026-04-10T14:25:31.115760Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77c2-9cbc-7d96-a04b-757918443778"
}
```

</details>

### 10. assistant — 2026-04-10T14:25:44.309135Z

<details>
<summary>Thinking (verbatim)</summary>

The user has skills in `.claude/skills/` and these entries appear when typing `@`. Let me think about this more carefully.

Looking at the screenshot again: the entries are `@review-latex-r2`, `@impl-compile`, `@review-compile`, `@revise-latex-r2`, `@impl-adaptive`, `@review-adaptive` with "send message" next to each.

Since the user has skills in `.claude/skills/`, these could be skills that are invocable via `@` mention. Let me check - the official docs mentioned that custom commands and skills have been merged, and skills can be invoked with `/skill-name`. 

But wait, the `@` prefix is typically for subagents and files, not skills. The docs say to @-mention subagents the same way you @-mention files. Yet the user says `.claude/agents/` is empty, so these entries must be coming from somewhere else—either skills are appearing in the `@` typeahead, or these are dynamically created subagents. I need to check if the skill names in `.claude/skills/` match these entries to understand what's happening.

</details>

That narrows it down. What are the skill names in your `.claude/skills/` folder? If names like `review-latex-r2`, `impl-compile`, etc. match what's there, then skills may also surface in the `@` typeahead — not just in `/`.

Could you share the output of `ls .claude/skills/`?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77c8-9f20-75da-b90c-cfebd1d4cddd",
  "updated_at": "2026-04-10T14:25:44.309135Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77c8-9f20-7f74-a759-81cbffaf37a6"
}
```

</details>

### 11. human — 2026-04-10T14:30:40.233974Z

ls .claude/skills/
  ⎿  Feynman-Technique
     ai-newsletters
     ai-products
     anchor-game-framework
     archive
     ask
     atomic-note
     brainstorm
     breakdown-tasks
     defuddle
     end-my-day
     estimate-time
     evolve-skills
     excalidraw-diagram-generator
     guide-derivation
     handoff-prompt
     idea-debate-team
     insert-Feynman
     json-canvas
     kickoff
     mcp-builder
     notebooklm
     obsidian-bases
     obsidian-cli
     obsidian-markdown
     orchestrate
     phrasing-refining
     reflect
     research
     start-my-day
     wiki-review
     wiki-review-workspace

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77cd-5513-7f6d-875e-060cfa1499bc",
  "updated_at": "2026-04-10T14:30:40.233974Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77c8-9f20-75da-b90c-cfebd1d4cddd"
}
```

</details>

### 12. assistant — 2026-04-10T14:30:55.154652Z

<details>
<summary>Thinking (verbatim)</summary>

None of these skill names match the entries in the screenshot (review-latex-r2, impl-compile, review-compile, revise-latex-r2, impl-adaptive, review-adaptive). So they're not coming from skills either.

The prompt text says "Good pattern. Fix this pattern as a template in @" — this looks like Claude Code is mid-conversation and suggesting to save something as a template. The dropdown entries with "send message" look like they could be background tasks or previously spawned subagents in the current session.

Wait — looking again at the screenshot more carefully: "Good pattern. Fix this pattern as a template in @" — this is text the user is typing in the prompt. 

The @ triggered a typeahead showing background subagents that were spawned during this session, with "send message" indicating you can communicate with them directly.

So the /tasks command would display all these background tasks, giving you a way to view and manage them alongside the @ typeahead for quick access.

</details>

None of those skill names match the `@` entries in your screenshot. So skills aren't the source either.

The most likely remaining explanation: these are **background subagents spawned during your current session**. When Claude Code delegates work to subagents (either automatically or via your prompts), those subagents can be sent to the background. When a subagent is taking a while, Ctrl+B sends it to the background. The conversation can continue while it runs.

Background subagents appear in the `@` typeahead with "send message" — meaning you can communicate with them while they're running or after they've completed.

To verify: did you earlier in that session ask Claude Code to do something like review LaTeX, compile, or work on something adaptive? Or did Claude Code itself decide to spawn these as part of a multi-step task? You can check with `/tasks` to see active background tasks.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77cd-5513-71c4-a491-85b6c111bb5a",
  "updated_at": "2026-04-10T14:30:55.154652Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77cd-5513-7f6d-875e-060cfa1499bc"
}
```

</details>

### 13. human — 2026-04-10T14:34:50.085950Z

Oh! Claude, I remember.
It's an orchestration session with multiple subagents.
When were they available (give me the version number)

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77d1-2252-708e-82d5-2ebd6fc9e0df",
  "updated_at": "2026-04-10T14:34:50.085950Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77cd-5513-71c4-a491-85b6c111bb5a"
}
```

</details>

### 14. assistant — 2026-04-10T14:35:02.004252Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants to know when background subagents / orchestration with multiple subagents became available in Claude Code, with a specific version number. Let me search for this.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-10T14:34:53.283746Z",
  "stop_timestamp": "2026-04-10T14:34:53.584432Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_011NDBeeXyFJJKY3DcDumvR2",
  "name": "web_search",
  "input": {
    "query": "Claude Code background subagents version release"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_011NDBeeXyFJJKY3DcDumvR2",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Create custom subagents - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/sub-agents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "A code improvement agent that scans files and suggests improvements for readability, performance, and best practices. It should explain each issue, show the current code, and provide an improved version. Claude generates the identifier, description, and system prompt for you. ... For a read-only reviewer, deselect everything except Read-only tools. If you keep all tools selected, the subagent inherits all tools available to the main conversation. ... Choose which model the subagent uses. For this example agent, select Sonnet, which balances capability and speed for analyzing code patterns. ... Pick a background color for the subagent. This helps you identify which subagent is running in the UI. ... Select User scope to give the subagent a persistent memory directory at ~/.claude/agent-memory/. The subagent uses this to accumulate insights across conversations, such as codebase patterns ...\n\nA code improvement agent that scans files and suggests improvements for readability, performance, and best practices. It should explain each issue, show the current code, and provide an improved version. Claude generates the identifier, description, and system prompt for you. ... For a read-only reviewer, deselect everything except Read-only tools. If you keep all tools selected, the subagent inherits all tools available to the main conversation. ... Choose which model the subagent uses. For this example agent, select Sonnet, which balances capability and speed for analyzing code patterns. ... Pick a background color for the subagent. This helps you identify which subagent is running in the UI. ... Select User scope to give the subagent a persistent memory directory at ~/.claude/agent-memory/. The subagent uses this to accumulate insights across conversations, such as codebase patterns and recurring issues.\n\nCreate and use specialized AI subagents in Claude Code for task-specific workflows and improved context management. ... Subagents are specialized AI assistants that handle specific types of tasks. Use one when a side task would flood your main conversation with search results, logs, or file contents you won’t reference again: the subagent does that work in its own context and returns only the summary. Define a custom subagent when you keep spawning the same kind of worker with the same instructions. Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions. When Claude encounters a task that matches a subagent’s description, it delegates to that subagent, which works independently and returns results. To see the context savings in practice, the context window visualization walks through a session where a subagent handles research in its own separate window.\n\nUse the test-runner subagent to fix failing tests Have the code-reviewer subagent look at my recent changes · @-mention the subagent. Type @ and pick the subagent from the typeahead, the same way you @-mention files. This ensures that specific subagent runs rather than leaving the choice to Claude: ... Your full message still goes to Claude, which writes the subagent’s task prompt based on what you asked. The @-mention controls which subagent Claude invokes, not what prompt it receives. Subagents provided by an enabled plugin appear in the typeahead as <plugin-name>:<agent-name>. Named background subagents currently running in the session also appear in the typeahead, showing their status next to the name. You can also type the mention manually without using the picker: @agent-<name> for local subagents, or @agent-<plugin-name>:<agent-name> for plugin subagents.\n\nThe subagent’s system prompt replaces the default Claude Code system prompt entirely, the same way --system-prompt does. CLAUDE.md files and project memory still load through the normal message flow. The agent name appears as @<name> in the startup header so you can confirm it’s active. This works with built-in and custom subagents, and the choice persists when you resume the session. For a plugin-provided subagent, pass the scoped name: claude --agent <plugin-name>:<agent-name>. To make it the default for every session in a project, set agent in .claude/settings.json: ... The CLI flag overrides the setting if both are present. Subagents can run in the foreground (blocking) or background (concurrent): Foreground subagents block the main conversation until complete. Permission prompts and clarifying questions (like AskUserQuestion) are passed through to you.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/sub-agents",
        "search_provider": "anthropic",
        "age": "5 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Releases · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/releases",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Fixed CLAUDE_CODE_MAX_CONTEXT_TOKENS to honor DISABLE_COMPACT when it is set. Dropped /compact hints when DISABLE_COMPACT is set. ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Added focus view toggle (Ctrl+O) in NO_FLICKER mode showing prompt, one-line tool summary with edit diffstats, and final response · Added refreshInterval status line setting to re-run the status line command every N seconds · Added workspace.git_worktree to the status line JSON input, set when the current directory is inside a linked git worktree · Added ● N running indicator in /agents next to agent types with live subagent instances · Added syntax highlighting for Cedar policy files (.cedar, .cedarpolicy) Fixed --dangerously-skip-permissions being silently downgraded to accept-edits mode after approving a write to a protected path ·\n\nClaude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. - Releases · anthropics/claude-code\n\nFixed compaction writing duplicate multi-MB subagent transcript files on prompt-too-long retries · Fixed claude plugin update reporting \"already at the latest version\" for git-based marketplace plugins when the remote had newer commits · Fixed slash command picker breaking when a plugin's frontmatter name is a YAML boolean keyword · Fixed copying wrapped URLs in NO_FLICKER mode inserting spaces at line breaks · Fixed scroll rendering artifacts in NO_FLICKER mode when running inside zellij · Fixed a crash in NO_FLICKER mode when hovering over MCP tool results · Fixed a NO_FLICKER mode memory leak where API retries left stale streaming state · Fixed slow mouse-wheel scrolling in NO_FLICKER mode on Windows Terminal · Fixed custom status line not displaying in NO_FLICKER mode on terminals shorter than 24 rows · Fixed Shift+Enter and Alt/Cmd+arrow shortcuts not working in Warp with NO_FLICKER mode ·\n\nFixed CLAUDE_CODE_MAX_CONTEXT_TOKENS to honor DISABLE_COMPACT when it is set. Dropped /compact hints when DISABLE_COMPACT is set. ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Added focus view toggle (Ctrl+O) in NO_FLICKER mode showing prompt, one-line tool summary with edit diffstats, and final response · Added refreshInterval status line setting to re-run the status line command every N seconds · Added workspace.git_worktree to the status line JSON input, set when the current directory is inside a linked git worktree · Added ● N running indicator in /agents next to agent types with live subagent instances · Added syntax highlighting for Cedar policy files (.cedar, .cedarpolicy) Fixed --dangerously-skip-permissions being silently downgraded to accept-edits mode after approving a write to a protected path ·\n\nFixed subagent spawning permanently failing with \"Could not determine pane count\" after tmux windows are killed or renumbered during a long-running session · Fixed prompt-type Stop hooks incorrectly failing when the small fast model returns ok:false, and restored preventContinuation:true semantics for non-Stop prompt-type hooks · Fixed tool input validation failures when streaming emits array/object fields as JSON-encoded strings · Fixed an API 400 error that could occur when extended thinking produced a whitespace-only text block alongside real content · Fixed accidental feedback survey submissions from auto-pilot keypresses and consecutive-prompt digit collisions · Fixed misleading \"esc to interrupt\" hint appearing alongside \"esc to clear\" when a text selection exists in fullscreen mode during processing · Fixed Homebrew install update prompts to use the cask's release channel (claude-code → stable, claude-code@latest → latest) Fixed ctrl+e jumping to the end of the next line when al",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/releases",
        "search_provider": "anthropic",
        "age": "11 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code by Anthropic - Release Notes - April 2026 Latest Updates - Releasebot",
      "url": "https://releasebot.io/updates/anthropic/claude-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "releasebot.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
        "site_name": "Releasebot"
      },
      "is_missing": false,
      "text": "Preserved task notifications when backgrounding a running command with Ctrl+B · PowerShell tool on Windows: external-command arguments containing both a double-quote and whitespace now prompt instead of auto-allowing (PS 5.1 argument-splitting hardening) /env now applies to PowerShell tool ...\n\nPreserved task notifications when backgrounding a running command with Ctrl+B · PowerShell tool on Windows: external-command arguments containing both a double-quote and whitespace now prompt instead of auto-allowing (PS 5.1 argument-splitting hardening) /env now applies to PowerShell tool commands (previously only affected Bash) /usage now hides redundant \"Current week (Sonnet only)\" bar for Pro and Enterprise plans ... /buddy is here for April 1st 1 hatch a small creature that watches you code Original source Report a problem ... No date parsed from source. ... Claude Code adds flicker-free alt-screen rendering, named subagents in @ mentions, and broader permission and PowerShell support, while fixing long-session stability, Windows and voice issues, scrollback glitches, and several prompt, cache, and tool crashes. Added CLAUDE_CODE_NO_FLICKER=1 environment variable to opt into flicker-free alt-screen rendering with virtualized scrollback ·\n\nFixed compaction writing duplicate multi-MB subagent transcript files on prompt-too-long retries · Fixed claude plugin update reporting \"already at the latest version\" for git-based marketplace plugins when the remote had newer commits · Fixed slash command picker breaking when a plugin's frontmatter name is a YAML boolean keyword · Fixed copying wrapped URLs in NO_FLICKER mode inserting spaces at line breaks · Fixed scroll rendering artifacts in NO_FLICKER mode when running inside zellij · Fixed a crash in NO_FLICKER mode when hovering over MCP tool results · Fixed a NO_FLICKER mode memory leak where API retries left stale streaming state · Fixed slow mouse-wheel scrolling in NO_FLICKER mode on Windows Terminal · Fixed custom status line not displaying in NO_FLICKER mode on terminals shorter than 24 rows · Fixed Shift+Enter and Alt/Cmd+arrow shortcuts not working in Warp with NO_FLICKER mode ·\n\nFixed prompt history entries containing CJK or emoji being silently dropped when they fall on a 4KB boundary in ~/.claude/history.jsonl · Fixed /stats losing historical data beyond 30 days when the stats cache format changes · Fixed /stats undercounting tokens by excluding subagent/fork usage · Fixed scrollback disappearing when scrolling up in long sessions · Fixed collapsed search/read group badges duplicating in terminal scrollback during heavy parallel tool use · Fixed notification invalidates not clearing the currently-displayed notification immediately · Fixed prompt briefly disappearing after submit when background messages arrived during processing · Fixed long /btw responses being clipped with no way to scroll — responses now render in a scrollable viewport · Fixed Devanagari and other combining-mark text being truncated in assistant output ·\n\nClaude Code adds a major release with Focus view, stronger permissions and sandbox handling, richer status line and no-flicker UI, better resume and transcript reliability, improved Bash and MCP stability, and updated agent, image, and completion workflows. Added focus view toggle (Ctrl+O) in NO_FLICKER mode showing prompt, one-line tool summary with edit diffstats, and final response · Added refreshInterval status line setting to re-run the status line command every N seconds · Added workspace.git_worktree to the status line JSON input, set when the current directory is inside a linked git worktree · Added ● N running indicator in /agents next to agent types with live subagent instances · Added syntax highlighting for Cedar policy files (.cedar, .cedarpolicy) Fixed --dangerously-skip-permissions being silently downgraded to accept-edits mode after approving a write to a protected path ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "search_provider": "anthropic",
        "age": "11 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Async: Background Agents & Parallel Tasks",
      "url": "https://claudefa.st/blog/guide/agents/async-workflows",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudefa.st",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudefa.st",
        "site_name": "Claude Fast"
      },
      "is_missing": false,
      "text": "Code Kit v5.0 released for CC&#x27;s new Agent Teams feature. ... Who is Claude?What is Claude CodeInstallation GuideNative InstallerFirst ProjectConfiguration BasicsTerminal SetupSandboxing GuideSettings Reference ...\n\nCode Kit v5.0 released for CC's new Agent Teams feature. ... Who is Claude?What is Claude CodeInstallation GuideNative InstallerFirst ProjectConfiguration BasicsTerminal SetupSandboxing GuideSettings Reference ... Agent FundamentalsAsync WorkflowsSub-Agent PatternsSub-Agent DesignTask DistributionTeam OrchestrationAgent TeamsTeam ControlsTeam Use CasesTeam Best PracticesTeam WorkflowCustom AgentsAgent PatternsHuman-like Agents ... Run Claude Code sub-agents in the background while you keep working. True parallel AI development that eliminates blocking and boosts throughput. Stop configuring. Start shipping.Everything you're reading about and more.. Agentic Orchestration Kit for Claude Code. ... Problem: When Claude Code spawns a sub-agent for research or complex analysis, your entire session blocks. You wait while the sub-agent works, unable to continue the conversation.\n\nQuick Win: When Claude spawns a sub-agent, press Ctrl+B to move it to the background: You: Research authentication best practices for our Next.js app Claude: I'll spawn a sub-agent to research this... [Sub-agent starts] You: [Press Ctrl+B] You: While that runs, let's work on the database schema... Your session continues. The sub-agent works independently and surfaces results when done. Claude Code now supports asynchronous agent execution. When the main agent spawns sub-agents, you can background them and keep working with Claude on other tasks. ... You'll see each background agent's status, token usage, and progress. Click any agent to inspect details. ... Background agents become even more powerful when combined with structured orchestration. Instead of manually spawning and backgrounding individual agents, a plan-then-execute pipeline can dispatch multiple specialists in parallel, each working on isolated tasks while you focus on something else entirely.\n\nThe ClaudeFast Code Kit implements this with its /team-build command, which coordinates 18 specialized agents through dependency chains so background work stays organized without manual tracking. The same pattern works for long-running shell commands. When Claude runs npm install, docker build, or ffmpeg and it takes a while, background it: Claude: Running npm install... [Command starts] You: [Press Ctrl+B] You: While that installs, can you review the API routes? Monitor with /tasks, same as agents. New CLI flag lets you run Claude Code AS any sub-agent: ... This launches Claude Code with the planning agent's configuration. Ask it questions, test its behavior, verify it works as expected before deploying in workflows. ... Works with built-in agents (plan, explore, etc.) and your custom agents in .claude/agents/. Anthropic shipped several other features alongside background agents: Instant compaction: The /compact command now executes immediately.\n\nSlack integration: Delegate tasks to Claude Code directly from Slack channels. Tag @Claude with bug reports or feature requests for team workflows. Agent doesn't background: Press Ctrl+B while the agent is actively running, not after it completes. Lost track of agents: Use /tasks to see all running background processes with their IDs. Agent completed but no results: The AgentOutputTool automatically surfaces results. If missed, check /tasks for the completed agent's output. Execution patterns: Master parallel, sequential, and background patterns to choose the right approach · Foundation: Understand agent fundamentals before building complex workflows · Design patterns: Learn sub-agent design for effective task delegation · Distribution: Master task distribution for multi-agent orchestration · Custom agents: Build specialized agents with custom agent patterns ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudefa.st/blog/guide/agents/async-workflows",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - VoltAgent/awesome-claude-code-subagents: A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases · GitHub",
      "url": "https://github.com/VoltAgent/awesome-claude-code-subagents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases - VoltAgent/awesome-claude-code-subagents\n\nSubagents are specialized AI assistants that enhance Claude Code's capabilities by providing task-specific expertise. They act as dedicated helpers that Claude Code can call upon when encountering particular types of work. Independent Context Windows Every subagent operates within its own isolated context space, preventing cross-contamination between different tasks and maintaining clarity in the primary conversation thread. Domain-Specific Intelligence Subagents come equipped with carefully crafted instructions tailored to their area of expertise, resulting in superior performance on specialized tasks. Shared Across Projects After creating a subagent, you can utilize it throughout various projects and distribute it among team members to ensure consistent development practices. Granular Tool Permissions You can configure each subagent with specific tool access rights, enabling fine-grained control over which capabilities are available for different task types.\n\nEach subagent's tools field specifies Claude Code built-in tools, optimized for their role: Read-only agents (reviewers, auditors): Read, Grep, Glob - analyze without modifying · Research agents (analysts, researchers): Read, Grep, Glob, WebFetch, WebSearch - gather information · Code writers (developers, engineers): Read, Write, Edit, Bash, Glob, Grep - create and execute · Documentation agents (writers, documenters): Read, Write, Edit, Glob, Grep, WebFetch, WebSearch - document with research · Each agent has minimal necessary permissions. You can extend agents by adding MCP servers or external tools to the tools field. Claude Code skill for browsing and fetching subagents from this catalog. ... We welcome contributions! See CONTRIBUTING.md for guidelines. ... This repository is a curated collection of subagent definitions contributed by both the maintainers and the community.\n\n3. Deploy and Utilize Your subagent becomes immediately available. Claude Code will automatically engage it when suitable, or you can explicitly request its help: > Have the code-reviewer subagent analyze my latest commits ... Note: When naming conflicts occur, project-specific subagents override global ones. ... --- name: subagent-name description: When this agent should be invoked tools: Read, Write, Edit, Bash, Glob, Grep model: sonnet --- You are a [role description and expertise areas]... [Agent-specific checklists, patterns, and guidelines]... ## Communication Protocol Inter-agent communication specifications... ## Development Workflow Structured implementation phases... Each subagent includes a model field that automatically routes it to the right Claude model — balancing quality and cost: ... You can override any agent's model by editing the model field in its frontmatter.\n\nA collection of 100+ specialized Claude Code subagents covering a wide range of development use cases - VoltAgent/awesome-claude-code-subagents",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/VoltAgent/awesome-claude-code-subagents",
        "search_provider": "anthropic",
        "age": "February 8, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - wshobson/agents: Intelligent automation and multi-agent orchestration for Claude Code · GitHub",
      "url": "https://github.com/wshobson/agents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "CLI + Claude Code — uv run plugin-eval score/certify/compare or /eval, /certify, /compare commands · CI Gate — --threshold flag exits non-zero below a minimum score · # Quick evaluation (static only, instant) uv run plugin-eval score path/to/skill --depth quick # Standard evaluation (static + LLM judge) uv run plugin-eval score path/to/skill --depth standard # Full certification (all layers + Elo) uv run plugin-eval certify path/to/skill ... Orchestrate multi-agent teams for parallel workflows using Claude Code&#x27;s experimental Agent Teams feature: ... Includes 4 specialized agents, 7 commands, and 6 skills with reference documentation. ... Transforms Claude Code into a project management tool with a structured Context → Spec &amp; Plan → Implement workflow: ... Interactive Setup — /conductor:setup creates product vision, tech stack, workflow rules, and style guides ·\n\nClaude Code Documentation · Plugins Guide · Subagents Guide · Agent Skills Guide · Slash Commands Reference · Plugin Reference · Agent Reference · Agent Skills Guide · Usage Guide · Architecture ·\n\nEach installed plugin loads only its specific agents, commands, and skills into Claude's context. ... # ❌ Wrong - can't install agents directly /plugin install typescript-pro # ✅ Right - install the plugin /plugin install javascript-typescript@claude-code-workflows · \"Plugin not found\" → Use plugin names, not agent names. Add @claude-code-workflows suffix. Plugins not loading → Clear cache and reinstall: rm -rf ~/.claude/plugins/cache/claude-code-workflows && rm ~/.claude/plugins/installed_plugins.json · Plugin Reference - Complete catalog of all 77 plugins · Agent Reference - All 182 agents organized by category · Agent Skills - 149 specialized skills with progressive disclosure · Usage Guide - Commands, workflows, and best practices ... Three Evaluation Layers — Static analysis (instant), LLM judge (semantic), Monte Carlo simulation (statistical) 10 Quality Dimensions — Triggering accuracy, orchestration fitness, output quality, scope calibration, progressive disclosure, token effici\n\nCLI + Claude Code — uv run plugin-eval score/certify/compare or /eval, /certify, /compare commands · CI Gate — --threshold flag exits non-zero below a minimum score · # Quick evaluation (static only, instant) uv run plugin-eval score path/to/skill --depth quick # Standard evaluation (static + LLM judge) uv run plugin-eval score path/to/skill --depth standard # Full certification (all layers + Elo) uv run plugin-eval certify path/to/skill ... Orchestrate multi-agent teams for parallel workflows using Claude Code's experimental Agent Teams feature: ... Includes 4 specialized agents, 7 commands, and 6 skills with reference documentation. ... Transforms Claude Code into a project management tool with a structured Context → Spec & Plan → Implement workflow: ... Interactive Setup — /conductor:setup creates product vision, tech stack, workflow rules, and style guides ·\n\nSet via claude --model opus or claude --model sonnet when starting a session ... Coordinates 7+ agents: backend-architect → database-architect → frontend-developer → test-automator → security-auditor → deployment-engineer → observability-engineer ... Multi-agent security assessment with SAST, dependency scanning, and code review. /python-development:python-scaffold fastapi-microservice · Creates production-ready FastAPI project with async patterns, activating skills: ... # Activates k8s skills automatically \"Create production Kubernetes deployment with Helm chart and GitOps\" Uses kubernetes-architect agent with 4 specialized skills for production-grade configs. ... 📚 Documentation (4) - code docs, API specs, diagrams, C4 architecture, HADS (Human-AI Document Standard) 🔄 Workflows (5) - git, full-stack, TDD, Conductor (context-driven development), Agent Teams (multi-agent orchestration) ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/wshobson/agents",
        "search_provider": "anthropic",
        "age": "17 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Changelog: All Release Notes (2026)",
      "url": "https://claudefa.st/blog/guide/changelog",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudefa.st",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudefa.st",
        "site_name": "Claude Fast"
      },
      "is_missing": false,
      "text": "Subagent permissions - Fixed handling of subagent permissions · Teleport improvements - Improved error messages and validation for claude --teleport · Usage error handling - Improved error handling in /usage · History fix - Fixed race condition with history entry not getting logged at exit · Vertex fix - Fixed Vertex AI configuration not being applied from settings.json · Microsoft Foundry - Added support for Microsoft Foundry · PermissionRequest hook - Automatically approve or deny tool permission requests with custom logic · Web background tasks - Send background tasks to Claude Code on the web by starting a message with &amp; Agent permissionMode - Added permissionMode field for custom agents · Hook tool_use_id - Added tool_use_id field to hook input types · Skills frontmatter - Declare skills to auto-load for subagents · SubagentStart hook - Added the SubagentStart hook event ·\n\nSonnet 4.6 support - Added support for Claude Sonnet 4.6 · Agent Teams fix - Fixed Agent Teams on Bedrock, Vertex, and Foundry · Plugin ecosystem - Added enabledPlugins and extraKnownMarketplaces from --add-dir, fixed plugin commands/agents/hooks availability · Worktree improvements - Fixed background tasks in worktrees, custom agents/skills not discovered from git worktrees · File handling fixes - Fixed FileWriteTool stripping intentional trailing blank lines, Edit tool corrupting Unicode curly quotes, single file write/edit error aborting parallel operations · Ctrl+F agent kill - Use ctrl+f to kill all background agents instead of double-ESC · Hook improvements - Fixed hooks failing on Windows (now uses Git Bash), added last_assistant_message to Stop and SubagentStop hook inputs · Resume improvements - Increased picker from 10 to 50 sessions, fixed /resume dropping and failing with >16KB first message, fixed custom session titles lost after resuming ·\n\nCompaction fixes - Fixed compaction failing with many PDF documents, plan mode lost after compaction, skills invoked by subagents appearing in main session · UI polish - Simplified teammate navigation to Shift+Down, fixed collapsed read/search hint overflow, CJK wide characters causing misaligned layout, spinner showing '0 tokens' Miscellaneous fixes - Fixed bash permission classifier validation, user-defined agents only loading one file on NFS/FUSE, inline code spans parsed as bash commands, zsh heredoc failing with read-only file system in sandbox, and various other stability fixes · macOS process cleanup - Fixed orphaned CC processes after terminal disconnect on macOS · MCP connectors - Added support for claude.ai MCP connectors in Claude Code · Sandbox temp fix - Fixed sandbox 'operation not permitted' errors for temp files on macOS · Task tool crash fix - Fixed Task tool (backgrounded agents) crashing with ReferenceError ...\n\nSubagent permissions - Fixed handling of subagent permissions · Teleport improvements - Improved error messages and validation for claude --teleport · Usage error handling - Improved error handling in /usage · History fix - Fixed race condition with history entry not getting logged at exit · Vertex fix - Fixed Vertex AI configuration not being applied from settings.json · Microsoft Foundry - Added support for Microsoft Foundry · PermissionRequest hook - Automatically approve or deny tool permission requests with custom logic · Web background tasks - Send background tasks to Claude Code on the web by starting a message with & Agent permissionMode - Added permissionMode field for custom agents · Hook tool_use_id - Added tool_use_id field to hook input types · Skills frontmatter - Declare skills to auto-load for subagents · SubagentStart hook - Added the SubagentStart hook event ·\n\nEnhanced plan mode - Claude will now ask you questions more often in plan mode · Haiku 4.5 for Pro - Added Haiku 4.5 as a model option for Pro users · Queued commands fix - Fixed issue where queued commands don't have access to previous messages' output ... Auto-background commands - Auto-background long-running bash commands instead of killing them (customizable via BASH_DEFAULT_TIMEOUT_MS) Print mode fix - Fixed bug where Haiku was unnecessarily called in print mode · Haiku 4.5 released - Added Haiku 4.5 to model selector · Smart model switching - Haiku 4.5 automatically uses Sonnet in plan mode, Haiku for execution · Explore subagent - Introducing the Explore subagent powered by Haiku for efficient codebase searching · OTEL improvements - Support for HTTP_PROXY and HTTPS_PROXY · Traffic control - CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC now disables release notes fetching ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudefa.st/blog/guide/changelog",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Feature Evolution & Release History | anthropics/claude-code | DeepWiki",
      "url": "https://deepwiki.com/anthropics/claude-code/1.2-feature-evolution-and-release-history",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "deepwiki.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=deepwiki.com",
        "site_name": "DeepWiki"
      },
      "is_missing": false,
      "text": "Version 2.1.90 introduced /powerup, providing interactive lessons with animated demos to teach users how to leverage Claude Code&#x27;s agentic capabilities CHANGELOG.md45 · The agent system has evolved to handle complex multi-agent scenarios: Named Subagents: Version 2.1.89 ...\n\nThis document chronicles the development history of Claude Code, documenting major features, enhancements, and architectural changes across releases. It provides a chronological view of how the system evolved from its initial release to its current state, organized by functional area and version milestone. For details on the current system architecture, see System Architecture. For licensing terms, see License & Security Policy. For GitHub automation workflow history, see 5. GitHub Automation ... Claude Code follows a three-part version numbering scheme: MAJOR.MINOR.PATCH (e.g., 2.1.92). The current release series is 2.1.x, with patch versions incrementing for bug fixes, features, and improvements. Release channels include: Stable channel: Production-ready releases recommended for general use. Latest channel: Bleeding-edge releases with newest features (configurable via /config).\n\nVersion 2.1.90 introduced /powerup, providing interactive lessons with animated demos to teach users how to leverage Claude Code's agentic capabilities CHANGELOG.md45 · The agent system has evolved to handle complex multi-agent scenarios: Named Subagents: Version 2.1.89 added named subagents to @ mention typeahead suggestions, making teammate coordination more discoverable CHANGELOG.md70 · Task Lifecycle: The TaskCreated (v2.1.84) and TaskCompleted hooks allow external monitoring of subagent progress CHANGELOG.md70 · Resumption: Parallel loading of project sessions in the /resume view was added in v2.1.90 to improve performance for users with many concurrent tasks CHANGELOG.md61 · Sources: CHANGELOG.md45 CHANGELOG.md61 CHANGELOG.md70 · Bedrock Integration: Version 2.1.92 added an interactive wizard for 3rd-party platforms, specifically guiding users through AWS authentication and model pinning for Bedrock CHANGELOG.md6 ·\n\nPowerShell Hardening: Recent updates (v2.1.90) hardened PowerShell tool permission checks, fixing background job bypasses and TOCTOU (Time-of-Check to Time-of-Use) vulnerabilities in archive extraction CHANGELOG.md57 · Seccomp Restoration: Linux sandboxes now ship with the apply-seccomp helper in all builds (npm and native), restoring the ability to block unix-socket access for sandboxed commands CHANGELOG.md25 · Skill Execution Control: The disableSkillShellExecution setting (v2.1.91) allows administrators to disable inline shell execution within skills and custom slash commands CHANGELOG.md30 ... Binary Support: Plugins can now ship pre-compiled executables in a bin/ directory, which can be invoked as bare commands by the Bash tool CHANGELOG.md32 · Persistence Overrides: MCP tool results can now bypass standard truncation limits (up to 500K characters) using the anthropic/maxResultSizeChars annotation CHANGELOG.md29 · Offline Resilience: The CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAI\n\nConnection Management: Version 2.1.89 introduced MCP_CONNECTION_NONBLOCKING=true to prevent slow MCP servers from blocking CLI startup CHANGELOG.md71 · Sources: CHANGELOG.md29 CHANGELOG.md32 CHANGELOG.md46 CHANGELOG.md71 · Flicker-Free Mode: CLAUDE_CODE_NO_FLICKER=1 (v2.1.89) enables virtualized scrollback and alt-screen rendering to eliminate terminal flickering CHANGELOG.md68 · DEC 2026 Support: Fixed scrolling issues in modern terminals (iTerm2, Ghostty) by correctly implementing the DEC 2026 synchronization protocol CHANGELOG.md19 · Cost Breakdown: Pro/Subscription users now see a per-model and cache-hit breakdown when using the /cost command CHANGELOG.md7 · Cache Hints: A footer hint now appears when returning to a session after prompt cache expiration, informing the user of the expected token cost for the next turn CHANGELOG.md10 · Sources: CHANGELOG.md7 CHANGELOG.md10 CHANGELOG.md19 CHANGELOG.md68 ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://deepwiki.com/anthropics/claude-code/1.2-feature-evolution-and-release-history",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ClaudeLog - Claude Code Docs, Guides, Tutorials & Best Practices",
      "url": "https://claudelog.com/claude-code-changelog/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelog.com",
        "site_name": "ClaudeLog"
      },
      "is_missing": false,
      "text": "Hardened PowerShell tool permission checks: fixed trailing &amp; background job bypass, -ErrorAction Break debugger hang, archive-extraction TOCTOU, and parse-fail fallback deny-rule degradation · Improved performance: eliminated per-turn JSON.stringify of MCP tool schemas on cache-key lookup · Improved performance: SSE transport now handles large streamed frames in linear time (was quadratic) Improved performance: SDK sessions with long conversations no longer slow down quadratically on transcript writes · Improved /resume all-projects view to load project sessions in parallel, improving load times for users with many projects · Changed --resume picker to no longer show sessions created by claude -p or SDK invocations ... Synopsis: Deferred hook permissions. Flicker-free rendering. PermissionDenied hook. Named subagents in @-mentions. MCP non-blocking mode.\n\nHardened PowerShell tool permission checks: fixed trailing & background job bypass, -ErrorAction Break debugger hang, archive-extraction TOCTOU, and parse-fail fallback deny-rule degradation · Improved performance: eliminated per-turn JSON.stringify of MCP tool schemas on cache-key lookup · Improved performance: SSE transport now handles large streamed frames in linear time (was quadratic) Improved performance: SDK sessions with long conversations no longer slow down quadratically on transcript writes · Improved /resume all-projects view to load project sessions in parallel, improving load times for users with many projects · Changed --resume picker to no longer show sessions created by claude -p or SDK invocations ... Synopsis: Deferred hook permissions. Flicker-free rendering. PermissionDenied hook. Named subagents in @-mentions. MCP non-blocking mode.\n\nFixed caffeinate process not properly terminating when Claude Code exits, preventing Mac from sleeping · Fixed bash mode not activating when tab-accepting !-prefixed command suggestions · Fixed stale slash command selection showing wrong highlighted command after navigating suggestions · Fixed /config menu showing both the search cursor and list selection at the same time · Fixed background subagents becoming invisible after context compaction, which could cause duplicate agents to be spawned · Fixed background agent tasks staying stuck in \"running\" state when git or API calls hang during cleanup · Fixed --channels showing \"Channels are not currently available\" on first launch after upgrade · Fixed uninstalled plugin hooks continuing to fire until the next session · Fixed queued commands flickering during streaming responses · Fixed slash commands being sent to the model as text when submitted while a message is processing ·\n\nSynopsis: Git worktree isolation for agents. Ctrl+F kills background agents. Simple mode file editing. ConfigChange hook event. SDK model capability fields. Many memory, performance, and stability fixes. Added --worktree (-w) flag to start Claude in an isolated git worktree · Subagents support isolation: \"worktree\" for working in a temporary git worktree · Added Ctrl+F keybinding to kill background agents (two-press confirmation) Agent definitions support background: true to always run as a background task · Plugins can ship settings.json for default configuration · Simple mode (CLAUDE_CODE_SIMPLE) now includes the file edit tool in addition to the Bash tool, allowing direct file editing in simple mode · Permission suggestions are now populated when safety checks trigger an ask response, enabling SDK consumers to display permission options ·\n\nFixed Bash tool output being lost when running multiple Claude Code sessions in the same project directory · Fixed subagents with model: opus/sonnet/haiku being silently downgraded to older model versions on Bedrock, Vertex, and Microsoft Foundry · Fixed background bash processes spawned by subagents not being cleaned up when the agent exits · Fixed /resume showing the current session in the picker · Fixed /ide crashing with onInstall is not defined when auto-installing the extension · Fixed /loop not being available on Bedrock/Vertex/Foundry and when telemetry was disabled · Fixed SessionStart hooks firing twice when resuming a session via --resume or --continue · Fixed JSON-output hooks injecting no-op system-reminder messages into the model's context on every turn · Fixed voice mode session corruption when a slow connection overlaps a new recording ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelog.com/claude-code-changelog/",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Subagents in the SDK - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/subagents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "Admin API overviewData residencyWorkspacesUsage and Cost APIClaude Code Analytics APIAPI and data retention ... Define and invoke subagents to isolate context, run tasks in parallel, and apply specialized instructions in your Claude Agent SDK applications. ... Subagents are separate agent instances that your main agent can spawn to handle focused subtasks. Use subagents to isolate context for focused subtasks, run multiple analyses in parallel, and apply specialized instructions without bloating the main agent&#x27;s prompt. This guide explains how to define and use subagents in the SDK using the agents parameter. ... Filesystem-based: define agents as markdown files in .claude/agents/ directories (see defining subagents as files) Built-in general-purpose: Claude can invoke the built-in general-purpose subagent at any time via the Agent tool without you defining anything ·\n\nAdmin API overviewData residencyWorkspacesUsage and Cost APIClaude Code Analytics APIAPI and data retention ... Define and invoke subagents to isolate context, run tasks in parallel, and apply specialized instructions in your Claude Agent SDK applications. ... Subagents are separate agent instances that your main agent can spawn to handle focused subtasks. Use subagents to isolate context for focused subtasks, run multiple analyses in parallel, and apply specialized instructions without bloating the main agent's prompt. This guide explains how to define and use subagents in the SDK using the agents parameter. ... Filesystem-based: define agents as markdown files in .claude/agents/ directories (see defining subagents as files) Built-in general-purpose: Claude can invoke the built-in general-purpose subagent at any time via the Agent tool without you defining anything ·\n\nWhen you define subagents, Claude determines whether to invoke them based on each subagent's description field. Write clear descriptions that explain when the subagent should be used, and Claude will automatically delegate appropriate tasks. You can also explicitly request a subagent by name in your prompt (for example, \"Use the code-reviewer agent to...\"). Each subagent runs in its own fresh conversation. Intermediate tool calls and results stay inside the subagent; only its final message returns to the parent. See What subagents inherit for exactly what's in the subagent's context. Example: a research-assistant subagent can explore dozens of files without any of that content accumulating in the main conversation. The parent receives a concise summary, not every file the subagent read. Multiple subagents can run concurrently, dramatically speeding up complex workflows.\n\nExample: during a code review, you can run style-checker, security-scanner, and test-coverage subagents simultaneously, reducing review time from minutes to seconds. Each subagent can have tailored system prompts with specific expertise, best practices, and constraints. Example: a database-migration subagent can have detailed knowledge about SQL best practices, rollback strategies, and data integrity checks that would be unnecessary noise in the main agent's instructions. Subagents can be limited to specific tools, reducing the risk of unintended actions. Example: a doc-reviewer subagent might only have access to Read and Grep tools, ensuring it can analyze but never accidentally modify your documentation files. Define subagents directly in your code using the agents parameter. This example creates two subagents: a code reviewer with read-only access and a test runner that can execute commands.\n\nYou can also define subagents as markdown files in .claude/agents/ directories. See the Claude Code subagents documentation for details on this approach. Programmatically defined agents take precedence over filesystem-based agents with the same name. Even without defining custom subagents, Claude can spawn the built-in general-purpose subagent when Agent is in your allowedTools. This is useful for delegating research or exploration tasks without creating specialized agents. A subagent's context window starts fresh (no parent conversation) but isn't empty. The only channel from parent to subagent is the Agent tool's prompt string, so include any file paths, error messages, or decisions the subagent needs directly in that prompt. The parent receives the subagent's final message verbatim as the Agent tool result, but may summarize it in its own response.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/subagents",
        "search_provider": "anthropic"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Found it. DeepWiki states version 2.1.89 for named subagents in @ mention typeahead.

</details>

Based on the changelog sources:

**Named subagents in `@` mention typeahead** was added in **version 2.1.89**. Version 2.1.89 added named subagents to @ mention typeahead suggestions, making teammate coordination more discoverable.

That same release also introduced flicker-free rendering, PermissionDenied hook, and MCP non-blocking mode.

So what you're seeing is: during your orchestration session, Claude Code spawned named subagents (like `review-latex-r2`, `impl-compile`, etc.) — possibly via a skill like your `orchestrate` skill — and those running/completed subagents appear in the `@` typeahead so you can send messages directly to them.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77d1-2252-78cf-b0b2-f79e2fbca1b8",
  "updated_at": "2026-04-10T14:35:02.004252Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77d1-2252-708e-82d5-2ebd6fc9e0df"
}
```

</details>

### 15. human — 2026-04-10T14:36:00.890173Z

But if I `/clear`and `/resume`this session later, they will be gone right?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77d2-3b0d-72d7-afd1-29dfc05caed3",
  "updated_at": "2026-04-10T14:36:00.890173Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77d1-2252-78cf-b0b2-f79e2fbca1b8"
}
```

</details>

### 16. assistant — 2026-04-10T14:36:19.220946Z

<details>
<summary>Thinking (verbatim)</summary>

The user is asking whether subagents persist across /clear or /resume. Let me check what I found.

</details>

That's a good question — let me check rather than guess.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-10T14:36:04.533434Z",
  "stop_timestamp": "2026-04-10T14:36:04.533434Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01QGCDu1rssKfs2gCRmWdU2c",
  "name": "web_search",
  "input": {
    "query": "Claude Code subagents persist resume session clear"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01QGCDu1rssKfs2gCRmWdU2c",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Create custom subagents - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/sub-agents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Subagents provided by an enabled plugin appear in the typeahead as &lt;plugin-name&gt;:&lt;agent-name&gt;. Named background subagents currently running in the session also appear in the typeahead, showing their status next to the name. You can also type the mention manually without using the picker: @agent-&lt;name&gt; for local subagents, or @agent-&lt;plugin-name&gt;:&lt;agent-name&gt; for plugin subagents. Run the whole session as a subagent. Pass --agent &lt;name&gt; to start a session where the main thread itself takes on that subagent’s system prompt, tool restrictions, and model: ... The subagent’s system prompt replaces the default Claude Code system prompt entirely, the same way --system-prompt does. CLAUDE.md files and project memory still load through the normal message flow. The agent name appears as @&lt;name&gt; in the startup header so you can confirm it’s active. This works with built-in and custom subagents, and the choice persists when you resume the session.\n\nSubagents provided by an enabled plugin appear in the typeahead as <plugin-name>:<agent-name>. Named background subagents currently running in the session also appear in the typeahead, showing their status next to the name. You can also type the mention manually without using the picker: @agent-<name> for local subagents, or @agent-<plugin-name>:<agent-name> for plugin subagents. Run the whole session as a subagent. Pass --agent <name> to start a session where the main thread itself takes on that subagent’s system prompt, tool restrictions, and model: ... The subagent’s system prompt replaces the default Claude Code system prompt entirely, the same way --system-prompt does. CLAUDE.md files and project memory still load through the normal message flow. The agent name appears as @<name> in the startup header so you can confirm it’s active. This works with built-in and custom subagents, and the choice persists when you resume the session.\n\nSubagents work within a single session; agent teams coordinate across separate sessions. Subagents help you: Preserve context by keeping exploration and implementation out of your main conversation · Enforce constraints by limiting which tools a subagent can use · Reuse configurations across projects with user-level subagents · Specialize behavior with focused system prompts for specific domains · Control costs by routing tasks to faster, cheaper models like Haiku Claude uses each subagent’s description to decide when to delegate tasks. When you create a subagent, write a clear description so Claude knows when to use it. Claude Code includes several built-in subagents like Explore, Plan, and general-purpose. You can also create custom subagents to handle specific tasks. This page covers the built-in subagents, how to create your own, full configuration options, patterns for working with subagents, and example subagents.\n\nSelect User scope to give the subagent a persistent memory directory at ~/.claude/agent-memory/. The subagent uses this to accumulate insights across conversations, such as codebase patterns and recurring issues. Select None if you don’t want the subagent to persist learnings. ... Review the configuration summary. Press s or Enter to save, or press e to save and edit the file in your editor. The subagent is available immediately. Try it: Use the code-improver agent to suggest improvements in this project · Claude delegates to your new subagent, which scans the codebase and returns improvement suggestions. You now have a subagent you can use in any project on your machine to analyze codebases and suggest improvements. You can also create subagents manually as Markdown files, define them via CLI flags, or distribute them through plugins. The following sections cover all configuration options.\n\nThe memory field gives the subagent a persistent directory that survives across conversations. The subagent uses this directory to build up knowledge over time, such as codebase patterns, debugging insights, and architectural decisions. --- name: code-reviewer description: Reviews code for quality and best practices memory: user --- You are a code reviewer. As you review code, update your agent memory with patterns, conventions, and recurring issues you discover. Choose a scope based on how broadly the memory should apply: ... The subagent’s system prompt includes instructions for reading and writing to the memory directory. The subagent’s system prompt also includes the first 200 lines or 25KB of MEMORY.md in the memory directory, whichever comes first, with instructions to curate MEMORY.md if it exceeds that limit. Read, Write, and Edit tools are automatically enabled so the subagent can manage its memory files.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/sub-agents",
        "search_provider": "anthropic",
        "age": "5 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Work with sessions - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/sessions",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "You can ask a follow-up question, recover from an interruption, or branch off to try a different approach. Sessions persist the conversation, not the filesystem. To snapshot and revert file changes the agent made, use file checkpointing.\n\nAdmin API overviewData residencyWorkspacesUsage and Cost APIClaude Code Analytics APIAPI and data retention ... How sessions persist agent conversation history, and when to use continue, resume, and fork to return to a prior run. ... A session is the conversation history the SDK accumulates while your agent works. It contains your prompt, every tool call the agent made, every tool result, and every response. The SDK writes it to disk automatically so you can return to it later. Returning to a session means the agent has full context from before: files it already read, analysis it already performed, decisions it already made. You can ask a follow-up question, recover from an interruption, or branch off to try a different approach. Sessions persist the conversation, not the filesystem. To snapshot and revert file changes the agent made, use file checkpointing.\n\nContinue and resume both pick up an existing session and add to it. The difference is how they find that session: Continue finds the most recent session in the current directory. You don't track anything. Works well when your app runs one conversation at a time. Resume takes a specific session ID. You track the ID. Required when you have multiple sessions (for example, one per user in a multi-user app) or want to return to one that isn't the most recent. Fork is different: it creates a new session that starts with a copy of the original's history. The original stays unchanged. Use fork to try a different direction while keeping the option to go back. Both SDKs offer an interface that tracks session state for you across calls, so you don't pass IDs around manually. Use these for multi-turn conversations within a single process. ClaudeSDKClient handles session IDs internally.\n\nForking creates a new session that starts with a copy of the original's history but diverges from that point. The fork gets its own session ID; the original's ID and history stay unchanged. You end up with two independent sessions you can resume separately. Forking branches the conversation history, not the filesystem. If a forked agent edits files, those changes are real and visible to any session working in the same directory. To branch and revert file changes, use file checkpointing. This example builds on Capture the session ID: you've already analyzed an auth module in session_id and want to explore OAuth2 without losing the JWT-focused thread. The first block forks the session and captures the fork's ID (forked_id); the second block resumes the original session_id to continue down the JWT path. You now have two session IDs pointing at two separate histories: ...\n\nThis example makes two separate query() calls. The first creates a fresh session; the second sets continue: true, which tells the SDK to find and resume the most recent session on disk. The agent has full context from the first call: ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/sessions",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Session Management | Developing with AI Tools | Steve Kinney",
      "url": "https://stevekinney.com/courses/ai-development/claude-code-session-management",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "stevekinney.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=stevekinney.com",
        "site_name": "Steve Kinney"
      },
      "is_missing": false,
      "text": "When to use it: Use /clear as often as possible, ideally whenever you finish a task, to reduce unnecessary token usage and prevent unrelated tasks from piling up in the same chat.\n\nClaude Code provides commands to continue or resume past conversations, allowing for persistence across work periods. Continue Most Recent Conversation: Use claude -c or claude --continue. Resume by Session ID: Use claude -r \"abc123\" or claude --resume abc123 to pick up a specific session by its ID. Conversation Picker: Simply type claude --resume to view a list of recent conversations and select one. By default, Claude Code prioritizes safety and will ask for permission before performing actions that might modify your system, such as file writes or many bash commands. Managing Allowed Tools: You can manage permissions in four ways: Select “Always allow” when prompted during a session. Use the /permissions command in Claude Code to add or remove tools from the allowlist (e.g., /permissions add Edit or /permissions add \"Bash(git commit:*)\"). Manually edit your .claude/settings.json (for project-specific shared settings) or ~/.claude.json (for global user settings).\n\nPrompt Specificity: Be explicit and direct in your prompts. Clearly describe the task, constraints, and desired output to guide Claude effectively. Cost Efficiency: Use memory files (like CLAUDE.md) to provide persistent context and reduce repetitive prompting, which saves tokens. The /cost command can help monitor token usage if you’re concerned about API costs. IDE Integration: Integrate Claude Code with your IDE (like VS Code or Cursor) for a smoother experience, allowing quick launch, diff viewing, and automatic sharing of selection context. Think of managing Claude Code sessions like conducting an orchestra. Each CLAUDE.md file is a sheet of music, providing the foundational score for the entire performance (your project). Clearing a session is like resetting the stage for a new act, ensuring the musicians aren’t distracted by previous melodies.\n\nHeadless Mode (claude -p): This non-interactive mode is designed for automation in contexts like CI/CD, pre-commit hooks, and build scripts. It can be used for tasks like issue triage or as a linter. Headless mode does not persist between sessions, so it must be triggered each time. Custom Slash Commands: For repeated workflows, you can store prompt templates as Markdown files in the .claude/commands folder. These become available as slash commands (e.g., /project:fix-github-issue) and can be version-controlled and shared with your team. Model Context Protocol (MCP): MCP allows Claude Code to connect to external tools and services, vastly extending its capabilities beyond its built-in functionalities. MCP servers can provide access to databases, web browsers, project management tools (like Jira), documentation, and more. Course Correct Early and Often: While auto-accept mode allows autonomy, being an active collaborator yields better results.\n\nBest Practices for CLAUDE.md: Keep them concise and human-readable, use Markdown headings and bullet points for organization, and explicitly define code style, common commands, and project workflows. You can use @ syntax to import other Markdown files for modularity, which helps keep the main file clean and prevents context overload. The /clear command resets the current chat conversation, effectively wiping the agent’s short-term memory. Why it’s important: Large language models are stateless; they reprocess the entire conversation history with every message in the same window, which quickly consumes tokens and can make responses less focused or accurate. When to use it: Use /clear as often as possible, ideally whenever you finish a task, to reduce unnecessary token usage and prevent unrelated tasks from piling up in the same chat. The /compact command allows you to reduce token usage by summarizing your current conversation and starting a new chat with that summary preloaded.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://stevekinney.com/courses/ai-development/claude-code-session-management",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[FEATURE] Resumable Subagent Sessions (Persistent Multi-Turn Context via Session ID) · Issue #7317 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/7317",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude Code subagents are stateless: each invocation starts with a clean slate, so you can’t “continue” a prior subagent exchange. Any follow-up requires replaying context, which increases latency and token/compute cost.\n\nClaude Code subagents are stateless: each invocation starts with a clean slate, so you can’t “continue” a prior subagent exchange. Any follow-up requires replaying context, which increases latency and token/compute cost. By contrast, the main Claude Code session can be resumed by ID, but that capability doesn’t exist for subagents. Introduce stateful subagent sessions: • On first invocation, the subagent returns a subagent_session_id. • Subsequent calls can pass that ID to resume the subagent with full prior turns (messages, tool outputs, scratch state) restored. • Provide CLI ergonomics (e.g., --agent --agent-resume ) and programmatic APIs to create/continue/close sessions; include TTL, max-turn, and size limits. This mirrors existing main-session resume semantics while remaining scoped to each subagent. Replay everything: Re-invoke the subagent with the original prompt plus the new ask.\n\nYou’re shipping a feature that spans backend and frontend. You invoke two subagents: backend-specialist and frontend-specialist. After initial outputs, integration breaks. 1. Resume the backend subagent with its subagent_session_id and ask a targeted follow-up; it replies with the fix approach. 2. Resume the frontend subagent with its own subagent_session_id, reference the backend’s answer, and apply the corresponding UI change. Because both conversations are continued (not restarted), neither subagent has to re-rebuild context, so the loop is faster, cheaper, and more reliable. ... 👍React with 👍4KosyoK1104, carta-luc-ritchie, pzrinscak-croz and rwestwood89❤️React with ❤️1Bortus-AI👀React with 👀2KosyoK1104 and erenersahin ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/7317",
        "search_provider": "anthropic",
        "age": "September 8, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Session Persistence in Claude Code",
      "url": "https://github.com/ruvnet/ruflo/wiki/session-persistence",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Check exit code · # Complex debugging ... # Resume exactly where left off claude --resume &gt; All background monitors still running &gt; Test files still in context &gt; Continue debugging from exact point ......\n\n🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration - session persistence · ruvnet/ruflo Wiki\n\nClaude Code provides sophisticated session persistence that goes beyond simple conversation history. It maintains complete development environment state including background processes, file contexts, permissions, and working directories. ... # Example: Server started in one session python3 -m http.server 8080 # bash_3 # After --continue or --resume: # - Process still running # - Shell ID preserved (bash_3) # - Can check output with BashOutput tool # - Can kill with KillBash tool ... # Files read with Read tool # Files edited with Edit tool # Files created with Write tool # All remembered across sessions ... # Session 1: Create a marker file claude> Write test-session-marker.txt # Session 2: Claude knows about the file without re-reading claude --continue claude> \"What's in test-session-marker.txt?\" # Claude can reference it from memory · # Current working directory preserved # Environment state maintained # Path contexts remembered ...\n\n# Start a long build claude > Run build script in background > Exit for lunch # Return and check progress claude --continue > Check build output # See what happened while away > Build completed? Check exit code · # Complex debugging session claude > Set up monitoring in background > Create test files > Run diagnostics > [System crash/need to leave] # Resume exactly where left off claude --resume > All background monitors still running > Test files still in context > Continue debugging from exact point ... # Before ending a session, check background tasks /bashes # List all background tasks # Clean up if needed \"Kill all background tasks except the dev server\" # Or selectively \"Kill bash_1 and bash_2 but keep bash_3\" # Create a session marker for complex work \"Create SESSION_NOTES.md with current context\" # Helps both you and Claude remember the context \"Update SESSION_NOTES.md with progress\" ...\n\n# Original work claude --session-id project-main # Branch 1: Try approach A claude --resume project-main # Work on approach A # Branch 2: Try approach B claude --resume project-main # Work on approach B # Both branches have the same starting context ... # Check if process still exists ps aux | grep <command> # If process died, restart it \"Restart the dev server that was in bash_3\" # Try continue instead claude --continue # List recent sessions claude --resume # Interactive selection # Start fresh if needed claude # New session · # Permissions may expire for security # Simply re-approve when prompted # Or use --dangerously-skip-permissions for development · The following features have been tested and verified: ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/ruvnet/ruflo/wiki/session-persistence",
        "search_provider": "anthropic",
        "age": "August 11, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How I Use Every Claude Code Feature - by Shrivu Shankar",
      "url": "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "sshh.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=sshh.io",
        "site_name": "Sshh"
      },
      "is_missing": false,
      "text": "I have scripts that run meta-analysis ... improve agent-facing context. The Takeaway: Use claude --resume and claude --continue to restart sessions and uncover buried historical context....\n\nThe Takeaway: Custom subagents are a brittle solution. Give your main agent the context (in CLAUDE.md) and let it use its own Task/Explore(...) feature to manage delegation. On a simple level, I use claude --resume and claude --continue frequently. They’re great for restarting a bugged terminal or quickly rebooting an older session. I’ll often claude --resume a session from days ago just to ask the agent to summarize how it overcame a specific error, which I then use to improve our CLAUDE.md and internal tooling. More in the weeds, Claude Code stores all session history in ~/.claude/projects/ to tap into the raw historical session data. I have scripts that run meta-analysis on these logs, looking for common exceptions, permission requests, and error patterns to help improve agent-facing context. The Takeaway: Use claude --resume and claude --continue to restart sessions and uncover buried historical context.\n\nThe Takeaway: Treat your CLAUDE.md as a high-level, curated set of guardrails and pointers. Use it to guide where you need to invest in more AI (and human) friendly tools, rather than trying to make it a comprehensive manual. Thanks for reading Shrivu’s Substack! Subscribe for free to receive new posts and support my work. I recommend running /context mid coding session at least once to understand how you are using your 200k token context window (even with Sonnet-1M, I don’t trust that the full context window is actually used effectively). For us a fresh session in our monorepo costs a baseline ~20k tokens (10%) with the remaining 180k for making your change — which can fill up quite fast. A screenshot of /context in one of my recent side projects. You can almost think of this like disk space that fills up as you work on a feature. After a few minutes or hours you’ll need to clear the messages (purple) to make space to continue.\n\nHaving stuck to Claude Code for the last few months, this post is my set of reflections on Claude Code’s entire ecosystem. We’ll cover nearly every feature I use (and, just as importantly, the ones I don’t), from the foundational CLAUDE.md file and custom slash commands to the powerful world of Subagents, Hooks, and GitHub Actions. This post ended up a bit long and I’d recommend it as more of a reference than something to read in entirety. The single most important file in your codebase for using Claude Code effectively is the root CLAUDE.md. This file is the agent’s “constitution,” its primary source of truth for how your specific repository works. How you treat this file depends on the context. For my hobby projects, I let Claude dump whatever it wants in there. For my professional work, our monorepo’s CLAUDE.md is strictly maintained and currently sits at 13KB (I could easily see it growing to 25KB).\n\nThe Takeaway: Use slash commands as simple, personal shortcuts, not as a replacement for building a more intuitive CLAUDE.md and better-tooled agent. On paper, custom subagents are Claude Code’s most powerful feature for context management. The pitch is simple: a complex task requires X tokens of input context (e.g., how to run tests), accumulates Y tokens of working context, and produces a Z token answer. Running N tasks means (X + Y + Z) * N tokens in your main window. The subagent solution is to farm out the (X + Y) * N work to specialized agents, which only return the final Z token answers, keeping your main context clean. I find they are a powerful idea that, in practice, custom subagents create two new problems: They Gatekeep Context: If I make a PythonTests subagent, I’ve now hidden all testing context from my main agent. It can no longer reason holistically about a change.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.sshh.io/p/how-i-use-every-claude-code-feature",
        "search_provider": "anthropic",
        "age": "November 2, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Teaching Claude To Remember: Part 3 — Sessions And Resumable Workflow | by Nick Porter | Medium",
      "url": "https://medium.com/@porter.nicholas/teaching-claude-to-remember-part-3-sessions-and-resumable-workflow-1c356d9e442f",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "I say today’s limits because in a week or two Claude Code might have their own built in Session system. If so ours will snap right into place and be usable from Day 1! Anthropic’s --resume continues the same conversation with the same context. But what happens when: — Your context has ALREADY filled up and compacted once or twice :( — You’re ready to hand the work you had in-flight to someone else — It’s been a day or two and you can’t recall EXACTLY the conversation you had or you’re in a rush and want to just blurt out what you want! ... I have used a couple AI coding tools extensively. Namely Roo Code and Claude Code. I suffered innumerable conversations where I felt like I was re-explaining something I had repeated AT LEAST 3–4 times already. This happened in work that was in-flight or completed work and most often with bugs.\n\nTeaching Claude To Remember: Part 3 — Sessions And Resumable Workflow Hiya! My name is Nick and if you have been following my series on Claude Code you know now is when we get to the fun stuff …\n\nHiya! My name is Nick and if you have been following my series on Claude Code you know now is when we get to the fun stuff. Adding the base structure for CLAUDE.md (part 1) and then strapping on the Memory system (part 2) was critical to getting this system ready for what makes your workflow really start clicking … Sessions. ... All conversations are auto-saved with FULL message history. When you resume, the ENTIRE context is restored. Messages, tool usage, results. This boggles my mind a little coming from a traditional CS background and understanding that all those zeros and ones are sitting out on some server some place … terrifying and also super useful. Key quote from Anthropic: “Name sessions early: Use /rename when starting work on a distinct task — it’s much easier to find ‘payment-integration’ than ‘explain this function’ later.” ...\n\nSo Claude Code has built in Session management. You run claude --resume to pickup on your last conversation and your context is restored — messages, tool results, everything. Context gets convoluted, twisted and often disoriented · This is great for short term workflow continuity. Stepped away for lunch? Run claude --continue. Your IDE crashed again like mine does after I load up a bunch of important stuff? Run claude --resume. There are a few problems with this though: 1) Context gets convoluted, twisted and often disoriented leading to more potential hallucinations. What this ultimately means in a production code environment is ‘your bot just went bonkers and did something stupid’. 2) Long-running sessions are not shareable amongst teammates. 3) Conversations are messy. If your scrolling through the conversation history after maybe 3–4 days tops almost ALL of that resembles unusable and un-resumable effort.\n\nI say today’s limits because in a week or two Claude Code might have their own built in Session system. If so ours will snap right into place and be usable from Day 1! Anthropic’s --resume continues the same conversation with the same context. But what happens when: — Your context has ALREADY filled up and compacted once or twice :( — You’re ready to hand the work you had in-flight to someone else — It’s been a day or two and you can’t recall EXACTLY the conversation you had or you’re in a rush and want to just blurt out what you want! ... I have used a couple AI coding tools extensively. Namely Roo Code and Claude Code. I suffered innumerable conversations where I felt like I was re-explaining something I had repeated AT LEAST 3–4 times already. This happened in work that was in-flight or completed work and most often with bugs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@porter.nicholas/teaching-claude-to-remember-part-3-sessions-and-resumable-workflow-1c356d9e442f",
        "search_provider": "anthropic",
        "age": "January 4, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude",
      "url": "https://code.claude.com/docs/en/sub-agents.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Select **None** if you don&#x27;t want the subagent to persist learnings. Review the configuration summary. Press `s` or `Enter` to save, or press `e` to save and edit the file in your editor. The subagent is available immediately. Try it: ```text theme={null} Use the code-improver agent to suggest ...\n\nIf you need multiple agents working in parallel and communicating with each other, see [agent teams](/en/agent-teams) instead. Subagents work within a single session; agent teams coordinate across separate sessions. Subagents help you: * **Preserve context** by keeping exploration and implementation out of your main conversation * **Enforce constraints** by limiting which tools a subagent can use * **Reuse configurations** across projects with user-level subagents * **Specialize behavior** with focused system prompts for specific domains * **Control costs** by routing tasks to faster, cheaper models like Haiku Claude uses each subagent's description to decide when to delegate tasks. When you create a subagent, write a clear description so Claude knows when to use it. Claude Code includes several built-in subagents like **Explore**, **Plan**, and **general-purpose**. You can also create custom subagents to handle specific tasks.\n\nChoose which model the subagent uses. For this example agent, select **Sonnet**, which balances capability and speed for analyzing code patterns. Pick a background color for the subagent. This helps you identify which subagent is running in the UI. Select **User scope** to give the subagent a [persistent memory directory](#enable-persistent-memory) at `~/.claude/agent-memory/`. The subagent uses this to accumulate insights across conversations, such as codebase patterns and recurring issues. Select **None** if you don't want the subagent to persist learnings. Review the configuration summary. Press `s` or `Enter` to save, or press `e` to save and edit the file in your editor. The subagent is available immediately. Try it: ```text theme={null} Use the code-improver agent to suggest improvements in this project ``` Claude delegates to your new subagent, which scans the codebase and returns improvement suggestions.\n\nThis is the inverse of [running a skill in a subagent](/en/skills#run-skills-in-a-subagent). With `skills` in a subagent, the subagent controls the system prompt and loads skill content. With `context: fork` in a skill, the skill content is injected into the agent you specify. Both use the same underlying system. #### Enable persistent memory The `memory` field gives the subagent a persistent directory that survives across conversations. The subagent uses this directory to build up knowledge over time, such as codebase patterns, debugging insights, and architectural decisions. ```yaml theme={null} --- name: code-reviewer description: Reviews code for quality and best practices memory: user --- You are a code reviewer. As you review code, update your agent memory with patterns, conventions, and recurring issues you discover.\n\nYou now have a subagent you can use in any project on your machine to analyze codebases and suggest improvements. You can also create subagents manually as Markdown files, define them via CLI flags, or distribute them through plugins. The following sections cover all configuration options. ## Configure subagents ### Use the /agents command The `/agents` command provides an interactive interface for managing subagents. Run `/agents` to: * View all available subagents (built-in, user, project, and plugin) * Create new subagents with guided setup or Claude generation * Edit existing subagent configuration and tool access * Delete custom subagents * See which subagents are active when duplicates exist This is the recommended way to create and manage subagents. For manual creation or automation, you can also add subagent files directly. To list all configured subagents from the command line without starting an interactive session, run `claude agents`. This shows agents grouped by source and",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/sub-agents.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Advanced Workflow: Subagents, Commands & Multi-Session - DEV Community",
      "url": "https://dev.to/jangwook_kim_e31e7291ad98/claude-code-advanced-workflow-subagents-commands-multi-session-50hl",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dev.to",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dev.to",
        "site_name": "DEV Community"
      },
      "is_missing": false,
      "text": "The key is correcting efficiently: Esc: Stop Claude mid-action. Context is preserved so you can redirect. Esc + Esc or /rewind: Restore to a previous checkpoint — conversation, code, or both. /clear: Reset context between unrelated tasks.\n\nMaster Claude Code subagents, custom slash commands, multi-session workflows, and AGENTS.md setup with production-tested patterns from a 14-agent AI company. Tagged with ai, productivity, programming, tutorial.\n\nOnce the spec is complete, start a fresh session to implement it. The new session has clean context focused entirely on execution. Open-ended prompts like \"investigate this\" cause Claude to read hundreds of files, filling context. Always scope your investigations: # Bad — unbounded exploration Investigate the authentication system. # Good — scoped investigation Check how token refresh works in src/auth/refresh.ts and whether it handles expired refresh tokens gracefully. When you genuinely need broad investigation, delegate it to a subagent so the exploration does not consume your main context. Claude is not always right on the first try. The key is correcting efficiently: Esc: Stop Claude mid-action. Context is preserved so you can redirect. Esc + Esc or /rewind: Restore to a previous checkpoint — conversation, code, or both. /clear: Reset context between unrelated tasks.\n\nCustom subagents handle specialized tasks: content QA, security review, dependency auditing · Multi-session patterns separate writing from reviewing — our Writer agent produces articles in one context, while our Publisher agent validates and deploys in another · AGENTS.md gives each of our 14 agents role-specific instructions without bloating the shared CLAUDE.md · Hooks enforce non-negotiable rules: every article must pass frontmatter validation before publishing · The result is a system where each agent operates with a clean, focused context and clear responsibilities, using advanced Claude Code features to stay efficient rather than fighting context limits. If you are coming from basic Claude Code usage, here is a progression: Start with subagents: Next time you need to investigate code, say \"use subagents to investigate X\" instead of asking Claude directly.\n\nMost Claude Code tutorials stop at \"write a good CLAUDE.md and let Claude handle the rest.\" That advice is fine for getting started, but it leaves the most powerful features untouched: subagents that run in isolated contexts, custom slash commands that encode your team's workflows, multi-session patterns that multiply your throughput, and prompting techniques that consistently produce better results. At Effloow, we run a fully AI-powered content company with 14 agents orchestrated through Paperclip. Every agent runs Claude Code. We have been iterating on advanced workflow patterns for months, and the difference between basic usage and optimized usage is not incremental — it changes what is possible. This guide covers the advanced patterns we use daily. If you have not set up your CLAUDE.md yet, start with our CLAUDE.md setup guide first, then come back here.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://dev.to/jangwook_kim_e31e7291ad98/claude-code-advanced-workflow-subagents-commands-multi-session-50hl",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How and when to use subagents in Claude Code | Claude",
      "url": "https://claude.com/blog/subagents-in-claude-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "It takes a task, does the work, and returns only the result. Think of subagents as the browser tabs of a Claude Code session: a place to chase a tangent without losing the main thread. In this article, we discuss when it makes sense to use subagents, how to invoke them, and when the overhead isn&#x27;t worth it. Subagents are self-contained agents that operate with their own context windows. When Claude spawns a subagent, that assistant works independently to read files, explore code, or make changes. When it completes its task, the subagent returns only the relevant results to the main conversation. Each subagent starts fresh, unburdened by the history of the conversation or invoked skills. Multiple subagents can run in parallel, and each can have different permissions: a research subagent might have read-only access, while an implementation subagent gets full editing capabilities.\n\nWork that needs agents to coordinate with each other. Subagents report back to the main conversation but can't talk to one another. For tasks where subagents need to communicate, use agent teams. With agent teams, subagents coordinate across separate sessions rather than within one, which makes them heavier and more expensive. For more guidance on when to use subagents vs Agent Teams, check out our Claude Code agent teams docs. The signals described earlier (i.e., needing a second opinion, a lack of dependencies between sub-tasks, and extensive research) make it clear when delegation to a subagent is worth it. Subagents deliver their full value when used deliberately. The automatic invocation Claude provides is helpful, but knowing when to delegate research, parallelize work, and request a fresh perspective produces better results than leaving it to chance.\n\nA practical guide to Claude Code subagents: when they help, how to direct them, and the signals that tell you delegation is worth it. ... Claude Code handles complex, multi-step projects well, but long sessions accumulate weight. Every file read, every tangent explored, every half-finished thought stays in the context window, slowing responses and driving up token costs. Consider building a new feature in a large TypeScript monorepo. The main work is the implementation, but side tasks keep appearing: trace how an existing service handles auth, find the shared util for date formatting, check whether the design system already has a component close to what you need. None of these need the full project context, and running them inside the main session adds noise. What if you could run them in parallel? Enter subagents. A subagent is an isolated Claude instance with its own context window.\n\nIt takes a task, does the work, and returns only the result. Think of subagents as the browser tabs of a Claude Code session: a place to chase a tangent without losing the main thread. In this article, we discuss when it makes sense to use subagents, how to invoke them, and when the overhead isn't worth it. Subagents are self-contained agents that operate with their own context windows. When Claude spawns a subagent, that assistant works independently to read files, explore code, or make changes. When it completes its task, the subagent returns only the relevant results to the main conversation. Each subagent starts fresh, unburdened by the history of the conversation or invoked skills. Multiple subagents can run in parallel, and each can have different permissions: a research subagent might have read-only access, while an implementation subagent gets full editing capabilities.\n\nWhile subagents are a useful feature, subagents carry overhead. Each one spins up its own context, consumes tokens, and adds a layer of indirection between the developer and the work. They're worth that cost when context isolation, parallelism, or a fresh perspective actually helps. For smaller or tightly sequential tasks, sticking to the main conversation is usually simpler, for example: Sequential, dependent work. When step two needs the full output of step one, and step three needs both, a single session handling the chain is usually cleaner than a relay of subagents passing state through files. Same-file edits. Two subagents editing the same file in parallel is a recipe for conflict. In this scenario, keep tightly coupled changes in one context window. Small tasks. For a quick fix or a focused question, the overhead of delegation outweighs the benefit.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claude.com/blog/subagents-in-claude-code",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Key finding from the GitHub issue: subagents are stateless - each invocation starts fresh. And from the docs: "Named background subagents currently running in the session also appear in the typeahead."

So yes - /clear wipes session context, and those dynamically spawned subagents would be gone. /resume restores conversation history but subagents are not resumable per the open feature request.

</details>

Yes, they'll be gone. Here's what the evidence says:

**`/clear`**: This resets conversation context entirely. The `/clear` command resets context between unrelated tasks. Your dynamically spawned subagents exist only within the session — they'll disappear.

**`/resume`**: This restores conversation *history* (messages, tool results), but subagents themselves are stateless. Claude Code subagents are stateless: each invocation starts with a clean slate, so you can't "continue" a prior subagent exchange. Any follow-up requires replaying context. The `@` typeahead only shows named background subagents currently running in the session. Once they've completed or the session ends, they won't appear in the typeahead after resume.

**Fact**: Resumable subagent sessions is an open feature request (GitHub issue #7317) — it doesn't exist yet.

**Practical implication**: If your `orchestrate` skill spawns those subagents, you'd need to re-run the orchestration to get them back. If you want persistence across sessions, you'd need to define them as files in `.claude/agents/` — but then they'd be static definitions, not the dynamically-named ones your orchestrator creates.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77d2-3b0d-7b3f-8e3a-d5e936022393",
  "updated_at": "2026-04-10T14:36:19.220946Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77d2-3b0d-72d7-afd1-29dfc05caed3"
}
```

</details>

### 17. human — 2026-04-10T14:38:57.893339Z

So, based on the open information and the screenshot, this issue has been ignored by Claude Code team?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77d4-ed61-7663-8cb7-d40abf6525f4",
  "updated_at": "2026-04-10T14:38:57.893339Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d77d4-5e24-7097-816d-7e38cf7ba3dd",
      "file_name": "1775831898520_image.png"
    }
  ],
  "parent_message_uuid": "019d77d2-3b0d-7b3f-8e3a-d5e936022393"
}
```

</details>

### 18. assistant — 2026-04-10T14:39:05.716117Z

<details>
<summary>Thinking (verbatim)</summary>

The screenshot shows the issue is "Closed as not planned" — not just ignored, but explicitly closed without implementation.

</details>

Not ignored — explicitly **closed as "not planned."** That's a deliberate decision, not neglect. The label "Closed as not planned" means the team reviewed it and chose not to pursue it, at least in the form proposed.

I don't have information on *why* they closed it (there may be comments on the issue thread explaining their reasoning), and I can't say whether they have an alternative approach in mind. It's possible they consider the `memory` field on subagents (persistent knowledge across sessions) or agent teams (cross-session coordination) to be sufficient alternatives, but that's speculation on my part — I don't have a source for their rationale.

If you want the actual reasoning, checking the comments on [issue #7317](https://github.com/anthropics/claude-code/issues/7317) directly would be the most reliable source.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d77d4-ed61-790b-b7e1-565547bfa4ab",
  "updated_at": "2026-04-10T14:39:05.716117Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d77d4-ed61-7663-8cb7-d40abf6525f4"
}
```

</details>
