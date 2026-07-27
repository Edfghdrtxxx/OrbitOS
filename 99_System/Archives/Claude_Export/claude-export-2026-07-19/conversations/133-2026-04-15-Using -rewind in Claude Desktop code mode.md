# Using /rewind in Claude Desktop code mode

## Export metadata (verbatim)

```json
{
  "uuid": "25219fc6-df0d-4e7a-b29c-7eaa2334992f",
  "name": "Using /rewind in Claude Desktop code mode",
  "summary": "**Conversation Overview**\n\nThe person asked about using the `/rewind` feature in Claude Desktop's code mode, specifically whether it functions similarly to the `/rewind` command available in Claude Code (the terminal CLI). Claude clarified that the checkpoint/rewind feature is not available in Claude Desktop's code mode — the command returns \"Unknown skill\" and the `Esc+Esc` shortcut does nothing there. Claude explained how the feature works in Claude Code (terminal), covering automatic checkpointing before edits, the rewind menu, restore options for code and/or conversation, checkpoint persistence for 30 days, and the relationship to Git workflows. Claude also provided a comparison table and listed workarounds including using Claude Code in the terminal, Git discipline, and a third-party community tool. The person followed up to confirm their understanding, and Claude confirmed that no checkpoint feature currently exists in Claude Desktop, noting it is a known missing feature with an open GitHub feature request.",
  "created_at": "2026-04-15T04:00:06.172216Z",
  "updated_at": "2026-04-15T04:02:50.905717Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-15T04:00:06.769311Z

How to use /rewind feature in code mode of Claude Desktop just like Claude Code in terminal?
It is a significant feature.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8f4b-da45-78e2-ae7e-b3a248143e07",
  "updated_at": "2026-04-15T04:00:06.769311Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-15T04:00:30.711142Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about a "/rewind" feature in Claude Desktop's code mode. Let me search for this to get accurate information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-15T04:00:08.866606Z",
  "stop_timestamp": "2026-04-15T04:00:09.135364Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01QQbfeaqDGHCbsG2AyqyS6M",
  "name": "web_search",
  "input": {
    "query": "Claude Desktop code mode /rewind feature"
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
  "tool_use_id": "toolu_01QQbfeaqDGHCbsG2AyqyS6M",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[FEATURE] Per-prompt rewind/undo in Desktop App · Issue #43755 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/43755",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "In the Desktop App, there&#x27;s no way to do this — /rewind returns &quot;Unknown skill&quot; and Esc+Esc does nothing. My typical workflow: I ask Claude to make 5-6 changes across a session.\n\nPreflight Checklist I have searched existing requests and this feature hasn't been requested yet This is a single feature request (not multiple features) Problem Statement When working on multi-step coding tasks, I often need to undo cha...\n\nWhen working on multi-step coding tasks, I often need to undo changes from a specific prompt while keeping changes from other prompts intact. In the Desktop App, there's no way to do this — /rewind returns \"Unknown skill\" and Esc+Esc does nothing. My typical workflow: I ask Claude to make 5-6 changes across a session. Change #3 broke something, but changes #4-6 are fine. I need to revert only #3, but the Desktop App gives me no way to go back to a specific point. \n\nI end up manually reading git diffs and hand-reverting lines, which is slow and defeats the purpose of using an AI editor. The CLI version supports /rewind — but I use the Desktop App as my primary interface, and this core functionality is missing from it. Add a rewind/checkpoint UI to the Desktop App conversation view: Each user prompt in the conversation acts as a checkpoint · Hovering over a message reveals a \"Revert to here\" button ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/43755",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The Essential Claude Code Shortcuts | egghead.io",
      "url": "https://egghead.io/the-essential-claude-code-shortcuts~dgsee",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "egghead.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=egghead.io",
        "site_name": "egghead.io"
      },
      "is_missing": false,
      "text": "Rewinding resets the chat, not your files—pair it with version control or explicit undo prompts for code changes. Explicit undo/redo Ask Claude to revert the last change, then use your shell history to re-run or tweak the prior prompt.\n\nClaude Code interactive mode has a few key shortcuts to help you stay productive. Restarting a session, editing like Bash, and rewinding conversations all help you feel more comfortable with each session. ... Reloads the previous session and context after a crash, restart, or closed editor. Rewind conversation Double‑tap Escape in an empty input to browse history and restore to an earlier point. Rewinding resets the chat, not your files—pair it with version control or explicit undo prompts for code changes. Explicit undo/redo Ask Claude to revert the last change, then use your shell history to re-run or tweak the prior prompt. Please undo the previous change to <file>.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://egghead.io/the-essential-claude-code-shortcuts~dgsee",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code /rewind: 5 Patterns After a 3-Hour Disaster",
      "url": "https://alirezarezvani.medium.com/claude-code-rewind-5-patterns-after-a-3-hour-disaster-a9de9bce0372",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "... Press Esc twice for instant access, or type /rewind to browse all checkpoints. You can also run /checkpoints to list checkpoint IDs, then /rewind &lt;id&gt; to jump to a specific one.\n\nI wish I could mark one as “before risky refactor” but there’s no naming feature. You’re stuck with timestamps and message snippets. ... Checkpoints are session-level snapshots that Claude Code creates automatically before each file edit. They capture file states so you can restore code, conversation context, or both using the /rewind command. They're not Git commits — they're aggressive auto-save points specifically for Claude's changes. ... Press Esc twice for instant access, or type /rewind to browse all checkpoints. You can also run /checkpoints to list checkpoint IDs, then /rewind <id> to jump to a specific one. Each checkpoint offers three restore options: code only, conversation only, or both. Q: What’s the difference between code-only and conversation-only restore? \n\nCode-only restore reverts your files while keeping Claude’s understanding of what you’re trying to do — useful when execution failed but Claude’s mental model is correct.\n\nClaude Code’s /rewind isn’t just undo — it’s surgical recovery. After a 3-hour disaster, here are 5 checkpoint patterns that turn coding…\n\nThe /rewind command isn't just undo — it's a surgical recovery tool. Here are the 5 patterns that turn AI coding disasters into minor speed bumps.\n\nI was about to git reset --hard and lose everything when I remembered a feature I'd ignored in the changelog: checkpoints. That discovery changed how I work with Claude Code. The /rewind command isn't just \"undo\" — it's a surgical tool with five distinct recovery patterns that would have saved my entire afternoon. These patterns have since saved me dozens of hours. Here’s when to use each one — and the specific commands that rescued my November 14th nightmare. \n\nBefore diving into patterns, let’s clear up what checkpoint",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://alirezarezvani.medium.com/claude-code-rewind-5-patterns-after-a-3-hour-disaster-a9de9bce0372",
        "search_provider": "anthropic",
        "age": "November 27, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - holasoymalva/claude-code-rewind: 🕰️ Time machine for Claude Code sessions - Automatic snapshots, granular rollbacks, and visual diffs. Never fear AI mistakes again.",
      "url": "https://github.com/holasoymalva/claude-code-rewind",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "cd your-project claude-rewind init # That&#x27;s it! Claude Code Rewind Tool is now protecting your code · # View your session timeline claude-rewind timeline # See what Claude changed in the last action claude-rewind diff latest # Rollback to a specific point claude-rewind rollback cr_abc123 # Preview rollback without applying claude-rewind preview cr_abc123 # Show current status claude-rewind status ·\n\nClaude Code Rewind Tool is the first-ever time machine for Claude Code sessions. Never again worry about AI breaking your code. Automatically capture every change, visualize exactly what happened, and rollback to any point with surgical precision. Every developer using Claude Code has experienced this nightmare: ... Claude Code Rewind Tool eliminates this fear forever. \n\nZero-configuration capture of every Claude Code action · Lightweight, incremental storage that won't bloat your disk · Rich metadata: timestamps, prompts, affected files, action types · Rollback to any specific point in your Claude Code session · Selective rollback: Choose exactly which files to revert · Smart rollback: Preserves your manual changes while undoing Claude's modifications ... # Install via pip (recommended) pip install claude-code-rewind # Or install via npm npm install -g claude-code-rewind # Or clone and install from source git clone https://github.com/holasoymalva/claude-code-rewind.git cd claude-code-re\n\ncd your-project claude-rewind init # That's it! \n\nClaude Code Rewind Tool is now protecting your code · # View your session timeline claude-rewind timeline # See what Claude changed in the last action claude-rewind diff latest # Rollback to a specific point claude-rewind rollback cr_abc123 # Preview rollback without applying claude-rewind preview cr_abc123 # Show current status claude-rewind status ·\n\n# Clone the repo git clone https://github.com/holasoymalva/claude-code-rewind.git cd claude-code-rewind # Set up development environment python -m venv venv source venv/bin/a",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/holasoymalva/claude-code-rewind",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Enabling Claude Code to work more autonomously",
      "url": "https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "Our new checkpoint system automatically saves your code state before each change, and you can instantly rewind to previous versions by tapping Esc twice or using the /rewind command. Checkpoints let you pursue more ambitious and wide-scale tasks knowing you can always return to a prior code state.\n\nCombined with recent feature releases, Claude Code is now more capable of handling sophisticated tasks. ... Complex development often involves exploration and iteration. Our new checkpoint system automatically saves your code state before each change, and you can instantly rewind to previous versions by tapping Esc twice or using the /rewind command. Checkpoints let you pursue more ambitious and wide-scale tasks knowing you can always return to a prior code state. When you rewind to a checkpoint, you can choose to restore the code, the conversation, or both to the prior state.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind a coding session in Claude Code - Developer Lesson",
      "url": "https://m.academy/lessons/rewind-coding-session-claude-code/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "m.academy",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=m.academy",
        "site_name": "M"
      },
      "is_missing": false,
      "text": "Use /rewind in Claude Code to undo changes, restore code and conversations, and quickly roll back coding sessions.\n\nUse /rewind in Claude Code to undo changes, restore code and conversations, and quickly roll back coding sessions. Need to undo changes Claude Code just made within the current conversation? The /rewind command can reverse both your conversation and code to an earlier point. Think of it as a quick undo button for your entire coding session. Type /rewind to see your recent conversation history. Select where you want to go back to, then choose whether to restore the code, conversation, or both. Claude Code replays your changes in reverse and brings everything back to that exact moment. This works great when Claude makes a sweeping change you want to reconsider, or when you want to explore a different approach without starting completely over. You can also double-tap the Esc key to quickly navigate to previous points in your conversation.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://m.academy/lessons/rewind-coding-session-claude-code/",
        "search_provider": "anthropic",
        "age": "December 1, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code /rewind Explained: AI Made a Mistake? Undo It Instantly — Vincent's Blog",
      "url": "https://blog.vincentqiao.com/en/posts/claude-code-rewind/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "vincentqiao.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=vincentqiao.com",
        "site_name": "Vincent's Blog"
      },
      "is_missing": false,
      "text": "It restores your file state and conversation history to any earlier point in the session. ... There’s an elegant mechanism behind this: the file snapshot system. After each Claude response, Claude Code automatically snapshots all files that ...\n\n/rewind is Claude Code’s code and conversation rollback command (also aliased as /checkpoint). It restores your file state and conversation history to any earlier point in the session. ... There’s an elegant mechanism behind this: the file snapshot system. After each Claude response, Claude Code automatically snapshots all files that Claude has modified. This process is completely transparent — you won’t even notice it happening. ... File backups are incremental — only files that actually changed get a new version. If a file didn’t change between two turns, the previous backup is reused, saving space. After selecting your rollback point, you have four options: ... The most commonly used mode. \n\nFiles are restored to the selected point’s state, and all conversation messages after that point are deleted. The conversation “forks” — you can restart the discussion from that point.\n\n# Disable via environment variable export CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING=1 · Or set fileCheckpointingEnabled: false in global configuration. When disabled, /rewind can still roll back conversations, but cannot restore files. You might think: I have git, why do I need /rewind? In short: git is long-term version management, /rewind is instant undo within a session. They complement each other. Best practice: Commit at every important milestone, then use /rewind for fine-grained rollbacks between commits. The core value of /rewind is giving you the courage to make mistakes. When collaborating with AI on code, you can’t always give perfect instructions. Claude can’t always understand you perfectly either.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.vincentqiao.com/en/posts/claude-code-rewind/",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Checkpointing - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Git) for commits, branches, and long-term history · Checkpoints complement but don’t replace proper version control · Think of checkpoints as “local undo” and Git as “permanent history” · Interactive mode - Keyboard shortcuts and session controls ...\n\nTrack, rewind, and summarize Claude’s edits and conversation to manage session state. ... Claude Code automatically tracks Claude’s file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track. As you work with Claude, checkpointing automatically captures the state of your code before each edit. This safety net lets you pursue ambitious, wide-scale tasks knowing you can always return to a prior code state. Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/checkpointing",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Rewind: Undo Changes Instantly with Checkpoints | wmedia.es",
      "url": "https://wmedia.es/en/tips/rewind-changes-instantly-with-checkpoints",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "wmedia.es",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=wmedia.es",
        "site_name": "Wmedia"
      },
      "is_missing": false,
      "text": "If Claude takes a wrong turn — breaks a feature, goes down the wrong path, or over-engineers a solution — you can rewind to any previous state in seconds. Checkpoints persist across sessions and are cleaned up automatically after 30 days.\n\nClaude Code automatically snapshots your code before every edit. Each time you send a prompt, a checkpoint is created. If Claude takes a wrong turn — breaks a feature, goes down the wrong path, or over-engineers a solution — you can rewind to any previous state in seconds. Checkpoints persist across sessions and are cleaned up automatically after 30 days. ... \n\n> Esc Esc (press Escape twice) ┌─ Rewind to ──────────────────────────┐ │ ● Message 5: \"Add auth middleware\" │ │ ○ Message 4: \"Create user model\" │ │ ○ Message 3: \"Set up database\" │ │ │ │ Restore: ◉ Both ○ Code ○ Convo │ └──────────────────────────────────────┘ · No setup needed. Checkpointing is enabled by default. ... Work normally — every prompt you send creates a checkpoint automatically.\n\nEvery prompt creates an automatic checkpoint. If Claude breaks something, press Esc twice and rewind to any previous state in seconds.\n\nEsc + Esc → Opens the rewind menu /rewind → Same thing, via command ... Use /model + arrow keys to adjust effort on the fly. Or configure it permanently with effortLevel in settings or the CLAUDE_CODE_EFFORT_LEVEL environment variable. \n\nShow Thinking in Claude Code: Verbose & Extended Mode · Press Ctrl+O to watch Claude think. Spot problems early. Stop bad decisions before they become bad code. Ask Questions While Claude Code Is Working with /btw · Use /btw to ask quick questions while Claude Code is working. No interruption, no history pollution. If I have nothing worth saying, you won't hear from me. When I do, you'll be the first to know. 7,000+ professionals alr",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://wmedia.es/en/tips/rewind-changes-instantly-with-checkpoints",
        "search_provider": "anthropic",
        "age": "February 3, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ClaudeLog - Claude Code Docs, Guides, Tutorials & Best Practices",
      "url": "https://claudelog.com/mechanics/rewind/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelog.com",
        "site_name": "ClaudeLog"
      },
      "is_missing": false,
      "text": "Claude Code Rewind: Undo conversation history and return to previous states. Activate with double escape or /rewind to explore different approaches safely.\n\nFor high-stakes operations, use Plan Mode first to review what will happen, then proceed knowing you can rewind if needed. This creates multiple layers of safety. ... This mechanic can be utilised as a means of curing poisoned contexts whilst you are experimenting with Claude Code. ... Rewind enables a try it and see development workflow. The safety of knowing you can always go back removes hesitation from trying new approaches. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. Each agent tackles different components while maintaining full context awareness, eliminating manual debugging bottlenecks and accelerating feature delivery. Discover Verdent AI (Free Trial) ... \n\nExpert guidance on using Rewind effectively, managing conversation history, recovering from mistakes, experimental development workflows, and safe exploration strategies within Claude Code sessions ·\n\nClaude Code Rewind: Undo conversation history and return to previous states. Activate with double escape or /rewind to explore different approaches safely.\n\nBefore /rewind, I would be cautious to ensure I utilised version control to commit at milestones or before asking Claude to do a task where he is prone to error. With /rewind I still commit at milestones, but now I can utilise /rewind to rollback small erroneous actions and maintain a more refined context. Additionally, when advising non-technical users who are somewhat intimidated by the task of learning to use version control, I now have a more digestible panacea. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. \n\nRecover from miscommunications instantly instead of spending time explaining corrections. The rewind interface is elegant. Each conversation turn shows what happened, making it easy to iden",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelog.com/mechanics/rewind/",
        "search_provider": "anthropic",
        "age": "January 16, 2026"
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

The key finding here is clear: `/rewind` is a **Claude Code (terminal CLI) feature**, and it is **NOT available in Claude Desktop's code mode**. This is confirmed by the GitHub issue (document 1) which explicitly states that in the Desktop App, `/rewind` returns "Unknown skill".

Let me summarize what I know:
1. `/rewind` works in Claude Code (terminal)
2. It does NOT work in Claude Desktop
3. There's an open feature request on GitHub for this

I should be clear and direct about this, attributing facts to their sources.

</details>

Here's the direct answer, with facts clearly separated from the current state:

---

## The Core Answer: `/rewind` Is **Not Available** in Claude Desktop's Code Mode

This is a confirmed limitation, not a configuration issue.

In Claude Desktop, `/rewind` returns **"Unknown skill"** and `Esc+Esc` does nothing. This was explicitly reported as a missing feature in the official `anthropics/claude-code` GitHub issue tracker (#43755), filed approximately one week ago.

---

## How `/rewind` Works in Claude Code (Terminal) — The Full Picture

**Source: [Anthropic official docs — Checkpointing](https://code.claude.com/docs/en/checkpointing) & [Anthropic blog](https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously)**

### How checkpoints are created

The checkpoint system automatically saves your code state before each change. When you rewind to a checkpoint, you can choose to restore the code, the conversation, or both to the prior state.

After each Claude response, Claude Code automatically snapshots all files that Claude has modified. File backups are incremental — only files that actually changed get a new version.

### How to trigger `/rewind`

Press **Esc twice** (`Esc + Esc`) or type `/rewind` to open the rewind menu. A scrollable list shows each of your prompts from the session.

### Restore options

After selecting your rollback point, the most commonly used mode restores files to the selected point's state and deletes all conversation messages after that point — the conversation "forks" so you can restart from there.

You can choose whether to restore the **code**, the **conversation**, or **both**.

### Checkpoint lifetime

Checkpoints persist across sessions and are cleaned up automatically after **30 days**.

### Relationship to Git

Git is long-term version management; `/rewind` is instant undo within a session. Best practice: commit at every important milestone, then use `/rewind` for fine-grained rollbacks between commits.

---

## Current Status for Claude Desktop

| Feature | Claude Code (Terminal) | Claude Desktop Code Mode |
|---|---|---|
| `/rewind` command | ✅ Fully supported | ❌ "Unknown skill" |
| `Esc + Esc` shortcut | ✅ Opens rewind menu | ❌ Does nothing |
| Auto-checkpointing | ✅ Before every edit | ❌ Not implemented |

The GitHub feature request proposes adding a **rewind/checkpoint UI** to the Desktop App's conversation view, where each user prompt would act as a checkpoint and hovering over a message would reveal a "Revert to here" button. As of now, this request is open and unresolved.

---

## Your Workarounds in Claude Desktop (in the meantime)

1. **Use Claude Code in terminal** — this is the only place `/rewind` currently works
2. **Git discipline** — commit before each significant Claude-assisted change; this is actually what `/rewind` complements, not replaces
3. **Third-party tool**: A community tool called `claude-code-rewind` (available via `pip install claude-code-rewind` or `npm install -g claude-code-rewind`) adds timeline snapshots, rollback, and diff features as a wrapper around Claude Code sessions. However, this is a third-party project, not from Anthropic.

If this feature matters to your workflow, the GitHub issue #43755 is the place to upvote it directly.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8f4b-da45-78c8-b265-9261baa70b42",
  "updated_at": "2026-04-15T04:00:30.711142Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8f4b-da45-78e2-ae7e-b3a248143e07"
}
```

</details>

### 3. human — 2026-04-15T04:02:44.837553Z

So there is no checkpoint feature in current Claude Desktop?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8f4e-450d-7f03-9d73-67419013aa75",
  "updated_at": "2026-04-15T04:02:44.837553Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8f4b-da45-78c8-b265-9261baa70b42"
}
```

</details>

### 4. assistant — 2026-04-15T04:02:50.905717Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking for confirmation. Based on my search results, this is clearly confirmed - Claude Desktop does not have the checkpoint/rewind feature. Let me confirm this directly.

</details>

**Correct.** Based on the evidence from the previous search:

- In the Desktop App, `/rewind` returns "Unknown skill" and `Esc+Esc` does nothing. This was filed as an open feature request on the official `anthropics/claude-code` GitHub tracker, meaning it is a **known missing feature**, not a bug or misconfiguration.

The checkpoint system — auto-snapshots before edits, the rewind menu, and restore options — exists in Claude Code (the terminal CLI), but has not been brought over to Claude Desktop's code mode as of the time of that report (~1 week ago).

If you want this feature today, **Claude Code in the terminal is the only supported path**.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8f4e-450d-769c-a507-cec22a8f48a0",
  "updated_at": "2026-04-15T04:02:50.905717Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8f4e-450d-7f03-9d73-67419013aa75"
}
```

</details>
