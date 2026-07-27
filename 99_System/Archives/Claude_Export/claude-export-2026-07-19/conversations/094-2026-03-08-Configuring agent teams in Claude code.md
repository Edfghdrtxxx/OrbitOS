# Configuring agent teams in Claude code

## Export metadata (verbatim)

```json
{
  "uuid": "f613c12e-53da-4f76-bc0a-d6bc871d5a8a",
  "name": "Configuring agent teams in Claude code",
  "summary": "**Conversation Overview**\n\nThe person asked how to configure the Agent Teams feature in Claude Code. Claude provided a comprehensive technical guide covering all aspects of setup and usage. The conversation was focused entirely on this single technical topic with no personal details shared.\n\nClaude explained that Agent Teams is an experimental feature requiring the flag `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` and Claude Opus 4.6 or newer, and detailed two configuration methods: via `settings.json` or environment variable. The guide covered the settings hierarchy (Enterprise policy → User global → Project-level → Environment variables), terminal prerequisites (tmux or iTerm2 recommended; VS Code integrated terminal and others not yet supported), and how to define agent roles either inline in prompts or persistently via `CLAUDE.md`. Claude also documented key behavioral details such as automatic project context loading, file-locking for task claiming, proper shutdown order (always via the lead agent), and cost implications (approximately 7× token usage compared to a standard session). A practical usage heuristic was provided: single sessions for focused work, subagents for exploratory research, and agent teams for tasks with clear parallelism and non-overlapping file boundaries.",
  "created_at": "2026-03-08T00:51:10.563462Z",
  "updated_at": "2026-03-08T00:51:38.525369Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-08T00:51:12.440904Z

How to configure the feature of agent team in claude code?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccaed-40fb-740a-a70d-3f9a2e6c3752",
  "updated_at": "2026-03-08T00:51:12.440904Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-08T00:51:38.525369Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-08T00:51:13.474409Z",
  "stop_timestamp": "2026-03-08T00:51:14.083410Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01ByzHs7TncknUY2v6sc7NYy",
  "name": "view",
  "input": {
    "description": "Check product self-knowledge skill",
    "path": "/mnt/skills/public/product-self-knowledge/SKILL.md"
  },
  "message": "Check product self-knowledge skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check product self-knowledge skill"
  },
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
  "tool_use_id": "toolu_01ByzHs7TncknUY2v6sc7NYy",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: product-self-knowledge\n     3\tdescription: \"Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Claude Code (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Claude API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Claude.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Claude capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong.\"\n     4\t---\n     5\t\n     6\t# Anthropic Product Knowledge\n     7\t\n     8\t## Core Principles\n     9\t\n    10\t1. **Accuracy over guessing** - Check official docs when uncertain\n    11\t2. **Distinguish products** - Claude.ai, Claude Code, and Claude API are separate products\n    12\t3. **Source everything** - Always include official documentation URLs\n    13\t4. **Right resource first** - Use the correct docs for each product (see routing below)\n    14\t\n    15\t---\n    16\t\n    17\t## Question Routing\n    18\t\n    19\t### Claude API or Claude Code questions?\n    20\t\n    21\t→ **Check the docs maps first**, then navigate to specific pages:\n    22\t\n    23\t- **Claude API & General:** https://docs.claude.com/en/docs_site_map.md\n    24\t- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    25\t\n    26\t### Claude.ai questions?\n    27\t\n    28\t→ **Browse the support page:**\n    29\t\n    30\t- **Claude.ai Help Center:** https://support.claude.com\n    31\t\n    32\t---\n    33\t\n    34\t## Response Workflow\n    35\t\n    36\t1. **Identify the product** - API, Claude Code, or Claude.ai?\n    37\t2. **Use the right resource** - Docs maps for API/Code, support page for Claude.ai\n    38\t3. **Verify details** - Navigate to specific documentation pages\n    39\t4. **Provide answer** - Include source link and specify which product\n    40\t5. **If uncertain** - Direct user to relevant docs: \"For the most current information, see [URL]\"\n    41\t\n    42\t---\n    43\t\n    44\t## Quick Reference\n    45\t\n    46\t**Claude API:**\n    47\t\n    48\t- Documentation: https://docs.claude.com/en/api/overview\n    49\t- Docs Map: https://docs.claude.com/en/docs_site_map.md\n    50\t\n    51\t**Claude Code:**\n    52\t\n    53\t- Documentation: https://docs.claude.com/en/docs/claude-code/overview\n    54\t- Docs Map: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    55\t- npm Package: https://www.npmjs.com/package/@anthropic-ai/claude-code\n    56\t\n    57\t**Claude.ai:**\n    58\t\n    59\t- Support Center: https://support.claude.com\n    60\t- Getting Help: https://support.claude.com/en/articles/9015913-how-to-get-support\n    61\t\n    62\t**Other:**\n    63\t\n    64\t- Product News: https://www.anthropic.com/news\n    65\t- Enterprise Sales: https://www.anthropic.com/contact-sales\n    66\t",
      "uuid": "903c0055-7398-4668-8d0e-b19201353c06"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-08T00:51:18.088718Z",
  "stop_timestamp": "2026-03-08T00:51:18.392252Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01NKazYhWZshxGZ3TNgcXLcv",
  "name": "web_fetch",
  "input": {
    "url": "https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md"
  },
  "message": "Fetching: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
  "integration_name": "Web Fetch",
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
  "tool_use_id": "toolu_01NKazYhWZshxGZ3TNgcXLcv",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "48dc6b11-c87e-4160-b690-ed78a086a26b"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
      "subtitles": null,
      "url": "https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
      "source": "anthropic"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-08T00:51:19.515643Z",
  "stop_timestamp": "2026-03-08T00:51:19.780048Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01WXU1W8Pc8LeKbQmkX4jLa3",
  "name": "web_search",
  "input": {
    "query": "Claude Code agent team multi-agent configuration docs"
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
  "tool_use_id": "toolu_01WXU1W8Pc8LeKbQmkX4jLa3",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Orchestrate teams of Claude Code sessions - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/agent-teams",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Agent teams let you coordinate multiple Claude Code instances working together. One session acts as the team lead, coordinating work, assigning tasks, and synthesizing results. Teammates work independently, each in its own context window, and ...\n\nCoordinate multiple Claude Code instances working together as a team, with shared tasks, inter-agent messaging, and centralized management. ... Agent teams are experimental and disabled by default. Enable them by adding CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS to your settings.json or environment. Agent teams have known limitations around session resumption, task coordination, and shutdown behavior. Agent teams let you coordinate multiple Claude Code instances working together. One session acts as the team lead, coordinating work, assigning tasks, and synthesizing results. Teammates work independently, each in its own context window, and communicate directly with each other. Unlike subagents, which run within a single session and can only report back to the main agent, you can also interact with individual teammates directly without going through the lead.\n\nUsers report the app exits after one message instead of staying connected. Spawn 5 agent teammates to investigate different hypotheses. Have them talk to each other to try to disprove each other's theories, like a scientific debate. Update the findings doc with whatever consensus emerges. The debate structure is the key mechanism here. Sequential investigation suffers from anchoring: once one theory is explored, subsequent investigation is biased toward it. With multiple independent investigators actively trying to disprove each other, the theory that survives is much more likely to be the actual root cause. Teammates load project context automatically, including CLAUDE.md, MCP servers, and skills, but they don’t inherit the lead’s conversation history. See Context and communication for details. Include task-specific details in the spawn prompt: ...\n\nSelf-claim: after finishing a task, a teammate picks up the next unassigned, unblocked task on its own Task claiming uses file locking to prevent race conditions when multiple teammates try to claim the same task simultaneously. ... The lead sends a shutdown request. The teammate can approve, exiting gracefully, or reject with an explanation. ... This removes the shared team resources. When the lead runs cleanup, it checks for active teammates and fails if any are still running, so shut them down first. Always use the lead to clean up. Teammates should not run cleanup because their team context may not resolve correctly, potentially leaving resources in an inconsistent state. Use hooks to enforce rules when teammates finish work or tasks complete: TeammateIdle: runs when a teammate is about to go idle. Exit with code 2 to send feedback and keep the teammate working. TaskCompleted: runs when a task is being marked complete. Exit with code 2 to prevent completion and send feedback. This \n\nSplit panes require tmux or iTerm2: the default in-process mode works in any terminal. Split-pane mode isn’t supported in VS Code’s integrated terminal, Windows Terminal, or Ghostty. CLAUDE.md works normally: teammates read CLAUDE.md files from their working directory. Use this to provide project-specific guidance to all teammates. Explore related approaches for parallel work and delegation: Lightweight delegation: subagents spawn helper agents for research or verification within your session, better for tasks that don’t need inter-agent coordination · Manual parallel sessions: Git worktrees let you run multiple Claude Code sessions yourself without automated team coordination · Compare approaches: see the subagent vs agent team comparison for a side-by-side breakdown ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/agent-teams",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Agent Teams: The Complete Guide 2026",
      "url": "https://claudefa.st/blog/guide/agents/agent-teams",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudefa.st",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudefa.st",
        "site_name": "Claude Fast"
      },
      "is_missing": false,
      "text": "Create reusable prompt structures for your most common team configurations (review team, implementation team, research team). Each template defines roles, file boundaries, and success criteria so you don&#x27;t rebuild from scratch each session. For the full workflow that these templates support, see the end-to-end workflow guide. Permission presets. Pre-approve common operations in your permission settings before spawning teammates. This eliminates the flood of permission prompts that can slow a new team to a crawl. CLAUDE.md as shared runtime context. A well-structured CLAUDE.md with module boundaries, verification commands, and operational context reduces per-teammate exploration costs significantly. Three teammates reading a clear CLAUDE.md is far cheaper than three teammates exploring the codebase independently. ClaudeFast&#x27;s multi-agent system packages these patterns into pre-configured agent definitions and invocation protocols.\n\nClaude Fast | Guide to Claude Code Agent Teams for parallel multi-agent development. What they are, when to use them, and how they compare to subagents.\n\nCreate reusable prompt structures for your most common team configurations (review team, implementation team, research team). Each template defines roles, file boundaries, and success criteria so you don't rebuild from scratch each session. For the full workflow that these templates support, see the end-to-end workflow guide. Permission presets. Pre-approve common operations in your permission settings before spawning teammates. This eliminates the flood of permission prompts that can slow a new team to a crawl. CLAUDE.md as shared runtime context. A well-structured CLAUDE.md with module boundaries, verification commands, and operational context reduces per-teammate exploration costs significantly. Three teammates reading a clear CLAUDE.md is far cheaper than three teammates exploring the codebase independently. ClaudeFast's multi-agent system packages these patterns into pre-configured agent definitions and invocation protocols.\n\nThe developers building agent team muscle memory today are investing in a skill that will compound as multi-agent AI tooling matures. If you want to skip the manual setup and start with production-ready agent definitions, spawn templates, and coordination protocols already wired together, the ClaudeFast Code Kit ships 18 specialized agents with pre-configured team orchestration out of the box. Start with a review task this week. The overhead is low, and the capabilities will change how you think about complex development work. ... Stop configuring. Start shipping.Everything you're reading about and more..\n\nNote on terminology: This post covers Claude Code's native Agent Teams feature, an experimental built-in system for multi-agent collaboration. If you're looking for DIY builder-validator patterns using the Task tool, see team orchestration with builder-validator chains. Both approaches enable multi-agent workflows, but they work very differently under the hood. Agent Teams is an experimental feature that lets you orchestrate teams of Claude Code sessions working together on a shared project. One session acts as the team lead. It coordinates work, assigns tasks, and synthesizes results. Teammates work independently, each in its own context window, and communicate directly with each other. The key difference from subagents is communication. Subagents run within a single session and can only report results back to the main agent. They can't message each other, share discoveries mid-task, or coordinate without the main agent acting as intermediary.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudefa.st/blog/guide/agents/agent-teams",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Swarm Orchestration Skill - Complete guide to multi-agent coordination with TeammateTool, Task system, and all patterns · GitHub",
      "url": "https://gist.github.com/kieranklaassen/4f2aba89594a4aea4ad64d753984b2ea",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude Code Swarm Orchestration Skill - Complete guide to multi-agent coordination with TeammateTool, Task system, and all patterns ... Master multi-agent orchestration using Claude Code&#x27;s TeammateTool and Task system. flowchart TB subgraph ...\n\nClaude Code Swarm Orchestration Skill - Complete guide to multi-agent coordination with TeammateTool, Task system, and all patterns - SKILL.md\n\nClaude Code Swarm Orchestration Skill - Complete guide to multi-agent coordination with TeammateTool, Task system, and all patterns ... Master multi-agent orchestration using Claude Code's TeammateTool and Task system. flowchart TB subgraph TEAM[TEAM] Leader[Leader - you] T1[Teammate 1] T2[Teammate 2] Leader <-->|messages via inbox| T1 Leader <-->|messages via inbox| T2 T1 <-.->|can message| T2 end subgraph TASKS[TASK LIST] Task1[\"#1 completed: Research<br/>owner: teammate1\"] Task2[\"#2 in_progress: Implement<br/>owner: teammate2\"] Task3[\"#3 pending: Test<br/>blocked by #2\"] end T1 --> Task1 T2 --> Task2 Task2 -.->|unblocks| Task3 Loading · flowchart LR A[1. Create Team] --> B[2. Create Tasks] B --> C[3. Spawn Teammates] C --> D[4. Work] D --> E[5. Coordinate] E --> F[6. Shutdown] F --> G[7. Cleanup] Loading ·\n\n# List all panes in current window tmux list-panes # Switch to pane by number tmux select-pane -t 1 # Kill a specific pane tmux kill-pane -t %5 # View swarm session (if external) tmux attach -t claude-swarm # Rebalance pane layout tmux select-layout tiled · Teammates run as split panes within your iTerm2 window.\n\n// Good name: \"security-reviewer\" name: \"oauth-implementer\" name: \"test-writer\" // Bad name: \"worker-1\" name: \"agent-2\" ... // Good prompt: ` 1. Review app/models/user.rb for N+1 queries 2. Check all ActiveRecord associations have proper includes 3. Document any issues found 4. Send findings to team-lead via Teammate write ` // Bad prompt: \"Review the code\" ... // Good: Auto-unblocking TaskUpdate({ taskId: \"2\", addBlockedBy: [\"1\"] }) // Bad: Manual polling \"Wait until task #1 is done, check every 30 seconds...\" Workers send results to your inbox. Check it: cat ~/.claude/teams/{team}/inboxes/team-lead.json | jq '.' ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://gist.github.com/kieranklaassen/4f2aba89594a4aea4ad64d753984b2ea",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Agent Teams Explained: AI for Complex Projects (2026 Guide)",
      "url": "https://www.turingcollege.com/blog/claude-agent-teams-explained",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "turingcollege.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=turingcollege.com",
        "site_name": "Turingcollege"
      },
      "is_missing": false,
      "text": "Agent Teams is an experimental feature, enabled through configuration. Open your Claude Code configuration folder, find settings.json, and add the agent teams configuration flag. The exact line is documented in the Claude Code docs.\n\nAgent Teams is an experimental feature, enabled through configuration. Open your Claude Code configuration folder, find settings.json, and add the agent teams configuration flag. The exact line is documented in the Claude Code docs. Without tmux, Agent Teams still work — but every agent’s output appears in a single conversation thread. With tmux, each agent gets its own panel. You can watch the researcher pulling data while the copywriter drafts content in the panel next to it. More critically, you can intervene — stop an agent going down the wrong path, add a task you forgot, or redirect focus. Specify the task, the deliverables, and (optionally) the roles you want filled. In our test, we specified four roles: strategist, copywriter, visual concept agent, and reviewer. The system also spawned roles we never mentioned — a researcher and copy editor in the second pass.\n\nClaude Agent Teams spawn specialized AI agents that work in parallel. Our test: $7.80, 15 minutes, a full week of social media content. Setup guide inside.\n\nClaude Opus 4.6 introduced Agent Teams — a production-ready system that spawns multiple specialized AI agents to tackle complex tasks in parallel. Agent Teams differ from sub-agents: each teammate can communicate with other teammates, request information independently, and be observed or redirected mid-task via tmux. In our test, a single prompt generated a full week of platform-specific social media content in 15 minutes for $7.80. Agent Teams are overkill for simple tasks. Use them when the work has distinct components and quality control matters more than speed. Setup requires Claude Opus 4.6 access (Pro or Max plan), a one-line addition to your settings.json, and optionally tmux for per-agent visibility. $7.80. That’s what it cost to produce a full week of social media content — three days of LinkedIn posts, X threads, Instagram captions, video storyboards down to the second, and a sourced document with verified statistics.\n\nYou can specify roles in your prompt — strategist, researcher, copywriter, reviewer — and the system will spawn those agents. Claude also spawns additional agents autonomously if it determines the task requires them. You can intervene mid-task via tmux to redirect or stop individual agents. For complex, multi-step tasks, yes. Prompt chaining requires you to manually sequence each step, copy outputs between prompts, and handle errors yourself. Agent Teams automate that orchestration. For simple tasks, prompt chaining or a single agent session remains faster and cheaper. Cost and overkill risk. At $7.80 per complex task, using Agent Teams for work that a single agent handles well is a waste. The feature also requires manual configuration and runs smoother in the terminal with tmux than in the desktop app.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.turingcollege.com/blog/claude-agent-teams-explained",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Set Up and Use Claude Code Agent Teams (And Actually Get Great Results) | by Dára Sobaloju | Feb, 2026 | Medium",
      "url": "https://darasoba.medium.com/how-to-set-up-and-use-claude-code-agent-teams-and-actually-get-great-results-9a34f8648f6d",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Permissions are set at spawn. All teammates inherit the same permission configuration. You can’t give one teammate more access than another. Split panes need tmux or iTerm2. No VS Code terminal, Windows Terminal, or Ghostty support yet. Real constraints, but for the common workflows agent teams are designed for (parallel reviews, multi-layer features, exploration), none of them are dealbreakers. Agent teams are a genuine shift in how AI-assisted development works. Going from “one Claude doing things sequentially” to “multiple Claudes coordinating in parallel” isn’t just faster. Each teammate can go deep on its area without losing context to task-switching, and the results reflect that. This isn’t magic, though. You still need to be a good tech lead. Define clear tasks, provide rich context, monitor progress, and steer when things drift.\n\nPermissions are set at spawn. All teammates inherit the same permission configuration. You can’t give one teammate more access than another. Split panes need tmux or iTerm2. No VS Code terminal, Windows Terminal, or Ghostty support yet. Real constraints, but for the common workflows agent teams are designed for (parallel reviews, multi-layer features, exploration), none of them are dealbreakers. Agent teams are a genuine shift in how AI-assisted development works. Going from “one Claude doing things sequentially” to “multiple Claudes coordinating in parallel” isn’t just faster. Each teammate can go deep on its area without losing context to task-switching, and the results reflect that. This isn’t magic, though. You still need to be a good tech lead. Define clear tasks, provide rich context, monitor progress, and steer when things drift.\n\nHow to Set Up and Use Claude Code Agent Teams (And Actually Get Great Results) If you’ve been using Claude Code for a while, you’ve probably hit the moment where one AI session just isn’t …\n\nClaude Code Agent Teams solve this. Instead of one Claude instance doing everything sequentially, you spin up multiple instances that work together in parallel. Each gets its own context window and its own piece of the puzzle. One session acts as the team lead, coordinating the work, while teammates execute independently and can even talk to each other. The jump from single-session Claude Code to a coordinated team feels like the jump from single-threaded to multi-threaded programming. There’s a learning curve, but once it clicks, you won’t want to go back for anything non-trivial. This guide covers setup, architecture, practical usage, and the stuff I wish someone had told me before I started. ... Claude Code installed and working. If you’re reading this, you probably already have it. If not, grab it from the Claude Code repo on GitHub. A terminal multiplexer (for split-pane mode).\n\nSixteen Claude agents worked together across nearly 2,000 sessions, consuming around 2 billion input tokens at a cost under $20,000. The result was a compiler that could build a bootable Linux 6.9 kernel on x86, ARM, and RISC-V architectures. They used git-based file locking for coordination, which gives you a sense of the scale these teams can operate at. For more perspective on practical patterns, Addy Osmani’s breakdown of agent teams is worth reading. If you’re curious about the orchestration mechanics, there are solid community write-ups on task-based agent orchestration and running multiple Claude instances in parallel. After running agent teams on several projects, here’s what actually moves the needle. Give teammates rich context in their spawn prompts. They start with a blank conversation. Tell them what the project is, what files matter, what conventions to follow, and what their specific goal is.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://darasoba.medium.com/how-to-set-up-and-use-claude-code-agent-teams-and-actually-get-great-results-9a34f8648f6d",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Agent Teams: Run Parallel AI Agents on Your Codebase | Setup & Guide",
      "url": "https://www.sitepoint.com/anthropic-claude-code-agent-teams/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "sitepoint.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=sitepoint.com",
        "site_name": "SitePoint"
      },
      "is_missing": false,
      "text": "For projects that use Agent Teams regularly, you can define agent configurations in your project&#x27;s CLAUDE.md file (the project-level instruction file that Claude Code reads on startup).\n\nAgent Teams takes the single-agent model that Claude Code already established and multiplies it. The concept is straightforward in principle: instead of one AI agent tackling your entire task sequentially, you define multiple agents with specialized roles, and they work on different parts of the problem at the same time. Think about how a real development team operates. You wouldn't have a single engineer simultaneously writing the backend API, building the frontend UI, crafting the test suite, and reviewing all the code. You'd split those responsibilities. One person owns the API layer. Another focuses on components and styling. Someone else writes integration tests. And ideally, a senior engineer reviews pull requests as work comes in. Agent Teams replicates this division of labor with AI. The practical setup involves designating roles when you spawn agents. You might configure a backend agent responsible for server logic and database interactions, a frontend agent handling UI compon\n\nFor explicit multi-agent delegation, you might prompt something like: I need to build a user authentication system. Spawn separate agents to handle: 1. Backend: Create Express.js routes for login, signup, and token refresh 2. Frontend: Build React login and signup forms with form validation 3. Testing: Write integration tests for all auth endpoints 4. Review: Review all code produced by the other agents for security issues · The lead agent will decompose this, assign roles, and spawn the subagents. You'll see output indicating which agents are active and what each is working on. For projects that use Agent Teams regularly, you can define agent configurations in your project's CLAUDE.md file (the project-level instruction file that Claude Code reads on startup). This lets you establish persistent role definitions: ## Agent Team Configuration When working on this project with multiple agents, use these role definitions: - **Backend Agent**: Focuses on /src/server/. Follows our Express mi\n\nAnthropic shipped Agent Teams for Claude Code, and the implications are significant. Instead of issuing one instruction and waiting for one response, you can now spawn multiple AI agents that work simultaneously on different parts of your codebase. One handles your API endpoints. Another builds out React components. A third reviews the code the other two are producing. All running in parallel within a single session. This feature arrived alongside the release of Claude Opus 4, Anthropic's most capable coding model to date, which posted state-of-the-art results on SWE-bench for real-world software engineering tasks. The timing is no coincidence. Multi-agent coordination demands a model that can reason deeply about code architecture, maintain context across complex tasks, and make sound judgment calls without constant human supervision. Opus 4 was built for exactly that.\n\nThis article breaks down what Agent Teams actually are, how the underlying architecture works, how to set things up in your own projects, and what this shift means for development workflows moving forward. You don't need prior experience with Claude Code to follow along, though familiarity with terminal-based development tools will help. Before diving into multi-agent orchestration, it's worth grounding ourselves in what Claude Code actually is, because it's a different beast from the AI coding tools most developers have encountered. Claude Code is Anthropic's agentic coding tool, and it lives entirely in your terminal. The word \"agentic\" is doing real work in that description. Unlike chatbot-style AI assistants where you paste code into a text box and get suggestions back, Claude Code operates directly within your development environment. It reads and writes files on your filesystem.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.sitepoint.com/anthropic-claude-code-agent-teams/",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Chapter 3: Working with General Agents: Claude Code and Cowork | Agent Factory",
      "url": "https://agentfactory.panaversity.org/docs/General-Agents-Foundations/general-agents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "panaversity.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=panaversity.org",
        "site_name": "Agent Factory"
      },
      "is_missing": false,
      "text": "Agent Teams Exercises — 10 hands-on exercises practicing team creation, task coordination, quality hooks, and multi-agent workflows (Lesson 21) Worktrees — Parallel agent isolation using git worktrees for safe, independent workstreams (Lesson 22) Remote Control — Sessions without boundaries: control local Claude Code from any device via secure relay (Lesson 23) Claude Cowork Fundamentals — From terminal to desktop (Lesson 24), getting started (Lesson 25), and practical workflows (Lesson 26) Browser Integration — Claude in Chrome (Lesson 27) for web-based automation · Plugins and Connectors — (Lesson 28): pre-built integrations with Google Workspace, Notion, Slack, and more · Safety, Limitations &amp; What&#x27;s Coming — Understanding boundaries, responsible use, and the future of agentic AI (Lesson 29) Built-in Document Skills — Working with docx, xlsx, pptx, and pdf files ...\n\nAgent Teams Exercises — 10 hands-on exercises practicing team creation, task coordination, quality hooks, and multi-agent workflows (Lesson 21) Worktrees — Parallel agent isolation using git worktrees for safe, independent workstreams (Lesson 22) Remote Control — Sessions without boundaries: control local Claude Code from any device via secure relay (Lesson 23) Claude Cowork Fundamentals — From terminal to desktop (Lesson 24), getting started (Lesson 25), and practical workflows (Lesson 26) Browser Integration — Claude in Chrome (Lesson 27) for web-based automation · Plugins and Connectors — (Lesson 28): pre-built integrations with Google Workspace, Notion, Slack, and more · Safety, Limitations & What's Coming — Understanding boundaries, responsible use, and the future of agentic AI (Lesson 29) Built-in Document Skills — Working with docx, xlsx, pptx, and pdf files (Lesson 30) Decision Framework — Choosing between Code and Cowork (Lesson 31) From Skills to Business — Understanding how \n\nYou know why AI-driven development matters—and that it's happening right now, in 2026. But understanding transformation and experiencing it are two different things.\n\nThe Spec-Driven Blueprint for Building and Monetizing Digital FTEs—Reliable AI Agents You Can Trust, Deploy, and Scale\n\nTwo Interfaces, One AI — Claude Code (terminal-based for developers) and Cowork (desktop-based for knowledge workers), both running on the Claude Agent SDK · Claude Code Installed & Working — Complete setup with multiple paths: Official Claude Pro/Max subscription (Lesson 2), OR free backends via OpenRouter, Gemini, or DeepSeek (Lesson 3) Hello World — Mastering the CLI interface (Lesson 4): slash commands, permission loops, and safe usage patterns · Persistent Project Context — Creating CLAUDE.md files (Lesson 5) that eliminate repetitive context-sharing and establish team memory · Practical Problem-Solving Exercises — 27 hands-on exercises across 8 modules (Lesson 6) building problem decomposition, specification writing, and quality verification skills · Teach Claude Your Way — Mastering custom instructions (Lesson 7) to align Claude's behavior with your personal or team standards ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://agentfactory.panaversity.org/docs/General-Agents-Foundations/general-agents",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Configure Claude Code to Power Your Agent Team | by David Haberlah | Feb, 2026 | Medium",
      "url": "https://medium.com/@haberlah/configure-claude-code-to-power-your-agent-team-90c8d3bca392",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "... Terminal screenshot showing ... agent teammates · Claude Code loads configuration from multiple JSON files, merged according to strict precedence, evaluated highest to lowest (Anthropic, 2025a): ... Settings Hierarchy: ...\n\nFollowing this week’s release of Claude agent teams (Anthropic, 2026a), I moved beyond configuring on the fly toward designing where each setting lives and which layer wins. This article walks through every layer of Claude Code’s configuration, explains the reasoning behind each choice, and shares a forkable repository as a worked example: github.com/haberlah/dotfiles-claude. ... Terminal screenshot showing Claude Code with extended thinking enabled and tmux (terminal multiplexer) split panes running agent teammates · Claude Code loads configuration from multiple JSON files, merged according to strict precedence, evaluated highest to lowest (Anthropic, 2025a): ... Settings Hierarchy: 5 scopes, evaluated highest to lowest. Higher scopes override lower scopes. Settings merge rather than replace. A key defined at multiple levels resolves to the highest-priority scope, but keys defined only at lower levels still take effect (Anthropic, 2025a).\n\nI often hit truncation before setting this where Claude would cut off mid-function when generating long CSVs or multi-file refactors. The trade-off is context allocation. The 200k context window is shared between input and output (Anthropic, 2026b), so reserving 64k for output leaves roughly 136k for input context, system prompts, and MCP tool definitions. For sessions that are particularly context-heavy, I drop this to 32,000 via shell override. CLAUDE_AUTOCOMPACT_PCT_OVERRIDE at 80 triggers compaction earlier than the default 90% threshold. When compaction fires, Claude generates a structured summary preserving task IDs, decisions, errors, and progress, while discarding verbose intermediate output (Anthropic, 2026b). Earlier compaction means more context remains when the final output you are aiming for is generated, often producing higher-quality outcomes. It also eliminates the jarring experience of hitting the context wall mid-task. CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS at 1 enables\n\nAgent teams coordinate multiple Claude Code instances working on a shared task. One session acts as the team lead, assigning work and synthesising results. Teammates work independently, each in their own context window, communicating via an inbox-based messaging system (Anthropic, 2026c). The distinction between agent teams and subagents is architecturally significant. Subagents are focused workers: they spawn, execute a task, and return a summarised result to the parent’s context. The parent benefits from the research without paying the full token cost of the subagent’s work. Agent team members are peers: they persist, go idle, can be resumed, and must be explicitly shut down. Their findings are communicated via messages rather than injected summaries, which is both more flexible as they can discuss, challenge, and iterate, and more expensive (Anthropic, 2026c).\n\nMy Claude Code configuration increases token consumption over the default. Extended thinking adds reasoning tokens to every response. A 64k output token ceiling reserves capacity from the context budget even when most responses are shorter. Agent teams are the biggest multiplier, approximately 7× the tokens of a standard session when teammates run in plan mode (Anthropic, 2026e). Claude Max subscription provides a flat monthly fee that includes Opus 4.6 with extended thinking and agent teams, (see claude.com/pricing for current tiers). The alternative is API billing at per-token rates, which offers precise cost control but becomes more expensive quickly with heavy configurations. The practical rule I follow: single sessions for focused work, subagents for exploratory research that needs a separate context, and agent teams for tasks with clear parallelism and non-overlapping file boundaries.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@haberlah/configure-claude-code-to-power-your-agent-team-90c8d3bca392",
        "search_provider": "anthropic",
        "age": "1 month ago"
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
      "text": "Orchestrate multi-agent teams for parallel workflows using Claude Code&#x27;s experimental Agent Teams feature: ... Includes 4 specialized agents, 7 commands, and 6 skills with reference documentation.\n\n🔄 Workflows (5) - git, full-stack, TDD, Conductor (context-driven development), Agent Teams (multi-agent orchestration) ... And more... ... claude-agents/ ├── .claude-plugin/ │ └── marketplace.json # 72 plugins ├── plugins/ │ ├── python-development/ │ │ ├── agents/ # 3 Python experts │ │ ├── commands/ # Scaffolding tool │ │ └── skills/ # 5 specialized skills │ ├── kubernetes-operations/ │ │ ├── agents/ # K8s architect │ │ ├── commands/ # Deployment tools │ │ └── skills/ # 4 K8s skills │ └── ... (65 more plugins) ├── docs/ # Comprehensive documentation └── README.md # This file ... See Architecture Documentation for detailed guidelines.\n\nA comprehensive production-ready system combining 112 specialized AI agents, 16 multi-agent workflow orchestrators, 146 agent skills, and 79 development tools organized into 72 focused, single-purpose plugins for Claude Code. This unified repository provides everything needed for intelligent automation and multi-agent orchestration across modern software development: 72 Focused Plugins - Granular, single-purpose plugins optimized for minimal token usage and composability · 112 Specialized Agents - Domain experts with deep knowledge across architecture, languages, infrastructure, quality, data/AI, documentation, business operations, and SEO · 146 Agent Skills - Modular knowledge packages with progressive disclosure for specialized expertise · 16 Workflow Orchestrators - Multi-agent coordination systems for complex operations like full-stack development, security hardening, ML pipelines, and incident response ·\n\nIntelligent automation and multi-agent orchestration for Claude Code - wshobson/agents\n\n# Essential development plugins /plugin install python-development # Python with 16 specialized skills /plugin install javascript-typescript # JS/TS with 4 specialized skills /plugin install backend-development # Backend APIs with 3 architecture skills # Infrastructure & operations /plugin install kubernetes-operations # K8s with 4 deployment skills /plugin install cloud-infrastructure # AWS/Azure/GCP with 4 cloud skills # Security & quality /plugin install security-scanning # SAST with security skill /plugin install comprehensive-review # Multi-perspective code analysis # Full-stack orchestration /plugin install full-stack-orchestration # Multi-agent workflows · Each installed plugin loads only its specific agents, commands, and skills into Claude's context. ... # ❌ Wrong - can't install agents directly /plugin install typescript-pro # ✅ Right - install the plugin /plugin install javascript-typescript@claude-code-workflows ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/wshobson/agents",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-code-ultimate-guide/guide/workflows/agent-teams.md at main · FlorianBruniaux/claude-code-ultimate-guide",
      "url": "https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/guide/workflows/agent-teams.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "&quot;We&#x27;ve introduced agent teams in Claude Code as a research preview. You can now spin up multiple agents that work in parallel as a team and coordinate autonomously on shared codebases.&quot;\n\nA tremendous feat of documentation, this guide covers Claude Code from beginner to power user, with production-ready templates for Claude Code features, guides on agentic workflows, and a lot of great learning materials, including quizzes and a handy \"cheatsheet\". Whether it's the \"ultimate\" guide to Claude Code will be up to the reader :) - claude-code-ultimate-guide/guide/workflows/agent-teams.md at main · FlorianBruniaux/claude-code-ultimate-guide\n\n\"We've introduced agent teams in Claude Code as a research preview. You can now spin up multiple agents that work in parallel as a team and coordinate autonomously on shared codebases.\" — Anthropic, Introducing Claude Opus 4.6 · 📝 Documentation Update (2026-02-09): Architecture section corrected based on Addy Osmani's research. Key clarification: Agents communicate via peer-to-peer messaging through a mailbox system, not only through team lead synthesis. Context windows remain isolated (1M tokens per agent), but explicit messaging enables direct coordination between teammates. ... Agent teams represent the evolution from \"single agent\" to \"coordinated teams\" pattern documented by Anthropic across 5000+ organizations: ... The \">5 agents\" rule above is a sensible default, but it breaks down in specific scenarios where the math favors larger teams.\n\nMulti-agent parallel coordination for complex tasks Status: Experimental (v2.1.32+) | Model: Opus 4.6+ required | Flag: CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 · What: Multiple Claude instances work in parallel on a shared codebase, coordinating autonomously without active human intervention. One session acts as team lead to break down tasks and synthesize findings from teammates. When introduced: v2.1.32 (2026-02-05) as research preview Reading time: ~30 min Prerequisites: Opus 4.6 model, understanding of Sub-Agents, familiarity with Task Tool · 🚀 Want to get started fast? See Agent Teams Quick Start Guide (8-10 min, copy-paste patterns for your projects) ... Agent teams enable multiple Claude instances to work in parallel on different subtasks while coordinating through a git-based system. Unlike manual multi-instance workflows where you orchestrate separate Claude sessions yourself, agent teams provide built-in coordination where agents claim tasks, merge changes continuously, and re\n\nContext window as the deciding factor: A single Claude Code agent on a 50K+ line codebase fills 80-90% of its context window just loading the relevant files (source: atcyrus.com). At that point, the agent has almost no room left for reasoning. Splitting across multiple agents keeps each one at ~40% context usage, which leaves headroom for actual problem-solving. ... When more agents hurt: If agents constantly need to read each other's output or modify shared files, adding agents adds merge conflicts and coordination messages that eat into the very context you were trying to save. Note on model selection per role: As of March 2026, all agents in a team run the same model (Opus 4.6, required for Agent Teams). The community has requested role-based model selection where the team lead runs Opus for planning, implementation agents run Sonnet for speed, and test agents run Haiku for cost efficiency.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/guide/workflows/agent-teams.md",
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

Here's a complete guide to configuring Agent Teams in Claude Code:

---

## Claude Code Agent Teams

Agent Teams is an **experimental feature** that lets you coordinate multiple Claude Code instances working together. One session acts as the team lead, coordinating work, assigning tasks, and synthesizing results. Teammates work independently, each in its own context window, and can communicate directly with each other.

---

### 1. Enable the Feature

Agent Teams requires the flag `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` and Claude Opus 4.6 or newer.

**Option A — via `settings.json`:**
```json
{
  "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": 1
}
```

**Option B — via environment variable:**
```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
```

Claude Code loads configuration from multiple JSON files merged according to strict precedence (highest to lowest priority). The settings hierarchy is: Enterprise policy → User global → Project-level → Environment variables.

---

### 2. Terminal Setup (Optional but Recommended)

Split panes require **tmux** or **iTerm2**. VS Code's integrated terminal, Windows Terminal, and Ghostty are not supported yet. Without tmux, agent teams still work but all output appears in a single thread.

---

### 3. Define Roles & Spawn the Team

You can define roles directly in your prompt. Example:

```
Spawn 3 agent teammates to work on this auth system:
1. Backend: Create Express.js routes for login/signup
2. Frontend: Build React login forms with validation
3. Reviewer: Review all code for security issues
```

For projects that use Agent Teams regularly, you can define agent configurations in your project's `CLAUDE.md` file:

```markdown
## Agent Team Configuration
- **Backend Agent**: Focuses on /src/server/
- **Frontend Agent**: Focuses on /src/client/
- **Test Agent**: Writes integration tests for all endpoints
```

---

### 4. Key Behaviors

Teammates load project context automatically, including `CLAUDE.md`, MCP servers, and skills, but they don't inherit the lead's conversation history.

Task claiming uses file locking to prevent race conditions when multiple teammates try to claim the same task simultaneously.

**Shutdown order matters:** Always use the lead to clean up — teammates should not run cleanup because their team context may not resolve correctly, potentially leaving resources in an inconsistent state.

---

### 5. Cost Consideration

Agent teams are the biggest token multiplier — approximately 7× the tokens of a standard session when teammates run in plan mode. The practical rule: use single sessions for focused work, subagents for exploratory research, and agent teams for tasks with clear parallelism and non-overlapping file boundaries.

---

For the full official docs, see: [code.claude.com/docs/en/agent-teams](https://code.claude.com/docs/en/agent-teams)

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccaed-40fb-7e49-9e42-7eccd386602a",
  "updated_at": "2026-03-08T00:51:38.525369Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ccaed-40fb-740a-a70d-3f9a2e6c3752"
}
```

</details>
