# Checkpoint feature in Claude Desktop

## Export metadata (verbatim)

```json
{
  "uuid": "a3a5ed8d-bba2-429d-87b7-1c651dd1769e",
  "name": "Checkpoint feature in Claude Desktop",
  "summary": "**Conversation Overview**\n\nThe person asked a focused technical question about whether the checkpoint/rewind functionality available in Claude Code's terminal interface (via the `/rewind` command and `Esc+Esc` shortcut) is also present in Cowork and Claude Code Desktop (CCD) within Claude Desktop. This indicates familiarity with Claude's product ecosystem and an interest in understanding feature parity across interfaces.\n\nClaude provided a detailed, source-cited response confirming that `/rewind` is exclusive to the terminal/CLI version of Claude Code as of the conversation date. The response distinguished between documented facts and inferences: the `/rewind` feature is confirmed in terminal Claude Code (introduced with v2.0 alongside Sonnet 4.5); CCD lacks per-prompt rewind/undo based on an active GitHub feature request (#43755) explicitly identifying it as a gap; and Cowork has no documented checkpoint or revert capability across official help-center articles, though no explicit Anthropic statement rules it out entirely. Claude also noted practical workarounds—git commits before major changes for CCD, and scoping Cowork access to dedicated project folders with prior backups. The person's question suggested a preference for fact-versus-inference clarity, which Claude explicitly structured into the response.",
  "created_at": "2026-04-24T07:27:17.628791Z",
  "updated_at": "2026-04-24T07:28:50.947295Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-24T07:27:18.690582Z

Do current cowork and code in Claude Desktop have the checkpoint feature as Claude Code in terminal has (`/rewind`)?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe62-c385-7aa2-8f9e-8ef0a6504cf4",
  "updated_at": "2026-04-24T07:27:18.690582Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-24T07:28:50.947295Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I need to check the documentation for information about the `/rewind` checkpoint feature and whether it's available in Cowork and Claude Code within Claude Desktop, since this is a specific product capability question.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:27:24.064153Z",
  "stop_timestamp": "2026-04-24T07:27:24.391378Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LqczjK8uw3jJDtgruwxgtT",
  "name": "web_search",
  "input": {
    "query": "Claude Code /rewind checkpoint feature Claude Desktop Cowork"
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
  "tool_use_id": "toolu_01LqczjK8uw3jJDtgruwxgtT",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[FEATURE] Expose checkpoint restore / rewind in headless Claude Code (for editor & automation integrations) · Issue #16976 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/16976",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude Code provides a checkpoint / rewind mechanism in interactive usage, which is extremely valuable for safely iterating on code changes. However, there is currently no documented or supported way to restore / rewind a checkpoint in headless ...\n\nPreflight Checklist I have searched existing requests and this feature hasn't been requested yet This is a single feature request (not multiple features) Problem Statement Claude Code provides a checkpoint / rewind mechanism in interacti...\n\nClaude Code applies changes, but the result is incorrect. The extension needs to offer an “Undo / Rewind” action. Without headless restore support, this requires external git or filesystem hacks. With this feature, the extension can restore the checkpoint directly and retry or revert cleanly. This feature would allow checkpoint/rewind to be reused consistently across: ... Exposing restore programmatically enables safer, more reliable tooling without duplicating rollback logic. \n\nHappy to help test or validate an implementation from an integration perspective. ... area:corearea:ideautocloseIssue will be closed automaticallyIssue will be closed automaticallyenhancementNew feature or requestNew feature or request ... No fields configured for issues without a type.\n\nExpose checkpoint restore / rewind functionality to headless Claude Code via a stable, non-interactive interface. ... It does not propose a new checkpoint system. It only asks for a way to restore / rewind an existing checkpoint programmatically. Two possible interfaces (either would satisfy this requirement): Provide a dedicated flag to restore a checkpoint by ID: claude --checkpoint <uuid> --checkpoint-scope code|conversation|both · This would allow tools and scripts to trigger rewind behavior explicitly and deterministically. Expose restore functionality via structured stdin messages: json { \"type\": \"control_checkpoint\", \"uuid\": \"message-id\", \"scope\": \"code|conversation|both\"} ... \n\nUsable by first-party tools (e.g. V",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/16976",
        "search_provider": "anthropic",
        "age": "January 9, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "CLI: Implement Claude Code-style /rewind with checkpoint restore + context summarize modes · Issue #12558 · openai/codex",
      "url": "https://github.com/openai/codex/issues/12558",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Checkpoints are created before each Claude edit and each user prompt creates a checkpoint. Checkpoints persist across sessions and are cleaned up with session cleanup (~30 days, configurable).\n\nWhat variant of Codex are you using? CLI What feature would you like to see? Implement a Codex CLI feature that matches the Claude Code checkpoint/rewind model: Trigger rewind through both /rewind and Esc + Esc. Open a rewind menu that l...\n\nCheckpoints are created before each Claude edit and each user prompt creates a checkpoint. Checkpoints persist across sessions and are cleaned up with session cleanup (~30 days, configurable). Rewind/summarize is a local safety net and not a Git replacement. Bash/console/external changes are not reverted by rewind; only tracked file-edit operations are included. Safe rollback of both transcript history and working tree edits to a chosen checkpoint. Optional code-preview before applying a checkpoint revert. \n\nKeep rollback behavior non-destructive for unrelated local changes and allow users to rework from the restored prompt quickly. Existing closely related feature request: CLI: Add /rewind checkpoint restore that reverts both chat context and Codex-applied code edits #11626 · Current Codex backtrack already rewinds conversation context; this feature request is to make it parity-level with Claude Code's checkpoint model including code restore and summarize mode in the same command.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/openai/codex/issues/12558",
        "search_provider": "anthropic",
        "age": "February 23, 2026"
      },
      "links": null
    },
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
      "text": "Add a rewind/checkpoint UI to the Desktop App conversation view: Each user prompt in the conversation acts as a checkpoint · Hovering over a message reveals a &quot;Revert to here&quot; button · Clicking it shows a diff preview of what will be rolled ...\n\nPreflight Checklist I have searched existing requests and this feature hasn't been requested yet This is a single feature request (not multiple features) Problem Statement When working on multi-step coding tasks, I often need to undo cha...\n\nMy typical workflow: I ask Claude to make 5-6 changes across a session. Change #3 broke something, but changes #4-6 are fine. I need to revert only #3, but the Desktop App gives me no way to go back to a specific point. I end up manually reading git diffs and hand-reverting lines, which is slow and defeats the purpose of using an AI editor. The CLI version supports /rewind — but I use the Desktop App as my primary interface, and this core functionality is missing from it. \n\nAdd a rewind/checkpoint UI to the Desktop App conversation view: Each user prompt in the conversation acts as a checkpoint · Hovering over a message reveals a \"Revert to here\" button · Clicking it shows a diff preview of what will be rolled back · User can select/deselect individual files before confirming · After reverting, the conversation history remains visible (greyed out) so context isn't lost ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/43755",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
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
      "text": "Our new checkpoint system automatically saves your code state before each change, and you can instantly rewind to previous versions by tapping Esc twice or using the /rewind command. Checkpoints let you pursue more ambitious and wide-scale tasks knowing you can always return to a prior code state.\n\nWe’re introducing several upgrades to Claude Code: a native VS Code extension, version 2.0 of our terminal interface, and checkpoints for autonomous operation. Powered by Sonnet 4.5, Claude Code now handles longer, more complex development tasks in your terminal and IDE. ... We’re introducing a native VS Code extension in beta that brings Claude Code directly into your IDE. You can now see Claude’s changes in real-time through a dedicated sidebar panel with inline diffs. The extension provides a richer, graphical Claude Code experience for users who prefer to work in IDEs over terminals. ... We’ve also refreshed Claude Code’s terminal interface.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind file changes with checkpointing - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "Checkpoint works with these built-in tools that the agent uses to modify files: File rewinding restores files on disk to a previous state. It does not rewind the conversation itself.\n\nOverviewQuickstartHow the agent loop worksUse Claude Code featuresWork with sessionsStreaming InputStream responses in real-timeConnect MCP serversDefine custom toolsTool searchHandling PermissionsUser approvals and inputControl execution with hooksFile checkpointingStructured outputs in the SDKHosting the Agent SDKSecurely deploying AI agentsModifying system promptsSubagents in the SDKSlash Commands in the SDKAgent Skills in the SDKTrack cost and usageTodo ListsPlugins in the SDKMigration GuideTypeScript SDK referenceTypeScript V2 reference (preview)Python SDK reference ... File checkpointing tracks file modifications made through the Write, Edit, and NotebookEdit tools during an agent session, allowing you to rewind files to any previous state. Want to try it out? Jump to the interactive example. ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
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
      "text": "They’re session-level snapshots that Claude Code creates automatically before each file edit. Think of them as aggressive auto-save points specifically for Claude’s changes — not a replacement for version control. When you run /checkpoints, you see something like this: checkpoint_a3f8d2 - 10:34 AM - \"Updated user service\" checkpoint_b7c4e1 - 10:28 AM - \"Added validation logic\" checkpoint_d9a2f6 - 10:15 AM - \"Refactored a\n\nThe question: Should I convert my Express routes to a controller pattern? Old approach: Spend 2 hours reading blog posts, still unsure Checkpoint approach: 1. Note checkpoint ID 2. \"Convert all routes to controller pattern\" 3. Claude refactors 8 files in 15 minutes 4. I review the result: \"Actually, I hate this. Too much boilerplate.\" 5. /rewind → both → back to original in 2 seconds 6. Decision made with zero wasted code Time spent: 17 minutes instead of 2 hours of analysis paralysis · Pro tip: Press Esc twice for instant access to the rewind menu. \n\nFaster than typing /rewind. When to use: Long-running feature development with multiple risk points. This took me a while to figure out. Checkpoints and Git serve different purposes, and knowing when to use each prevents both “I lost my progress” disasters and “my Git history is a mess” problems.\n\nCheckpoint naming: You can’t label checkpoints. I wish I could mark one as “before risky refactor” but there’s no naming feature. You’re stuck with timestamps and message snippets. ... Checkpoints are session-level snapshots that Claude Code creates automatically before each file edit. They capture file states so you can restore code, conversation context, or both using the /rewind command. They're not Git commits — they're aggressive auto-save points specifically for Claude's changes. ... Press Esc twice for instant access, or type /rewind to browse all checkpoints. You can also run /checkpoints to list checkpoint IDs, then /rewind <id> to jump to a specific one.",
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
      "title": "Checkpointing - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session.\n\nClaude Code automatically tracks Claude’s file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track. As you work with Claude, checkpointing automatically captures the state of your code before each edit. This safety net lets you pursue ambitious, wide-scale tasks knowing you can always return to a prior code state. Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/checkpointing",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What is the Claude Code Checkpoint Feature (rewind)? How to Safely Roll Back Code",
      "url": "https://zenn.dev/tmasuyama1114/articles/claude_code_checkpoint_rewind?locale=en",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "zenn.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=zenn.dev",
        "site_name": "Zenn"
      },
      "is_missing": false,
      "text": "The checkpoint feature is activated by pressing Esc twice or using /rewind · There are three restoration methods: &quot;Restore code and conversation,&quot; &quot;Restore conversation,&quot; and &quot;Restore code&quot; Basically, choosing &quot;Restore code and conversation&quot; ...\n\nType /rewind in the prompt input field. This method also works reliably. Either way, the same checkpoint menu will be displayed. From here, I will explain the features based on actual verification results. First, I prepared a file called hello.txt. ... The content is simply a single line: Hello. I start Claude Code in this state. ... After starting it, I'll try the /rewind command.\n\nRestore code ⚠ Rewinding does not affect files edited manually or via bash. Three options are displayed here. Let's look at how each one works in detail. There are three restoration methods in the checkpoint feature. The restoration range differs for each. \n\nFirst, select the top (default) option, Restore code and conversation, and press Enter. The Claude Code console will appear immediately, and the file contents will be rolled back. The console display (where you input prompts) will look like this: ... It’s like time itself has simply moved backward. This is the easiest method to understand. The benefit of this method is that the instruction you just wrote remains there. If there was a mistake in the prompt, you can correct it and run it again. Now, let's try editing hello.txt again. This time, let's write \"Tomada\" instead of \"World\" after \"Hello\".\n\nThe checkpoint feature is a crucial function that makes working with Claude Code safer. It can be activated by pressing Esc twice or by using /rewind. There are three restoration methods, but basically, you should choose Restore code and conversation. However, note that bash commands and manual edits are not tracked. \n\nBy utilizing this feature, you can proceed with collaborative work with AI more boldly. Please try it out in your daily development! For",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://zenn.dev/tmasuyama1114/articles/claude_code_checkpoint_rewind?locale=en",
        "search_provider": "anthropic",
        "age": "October 15, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code /rewind: Undo Any AI Mistake in One Command — Vincent's Blog",
      "url": "https://blog.vincentqiao.com/en/posts/claude-code-rewind/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "vincentqiao.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=vincentqiao.com",
        "site_name": "Vincent's Blog"
      },
      "is_missing": false,
      "text": "/rewind is Claude Code’s code and conversation rollback command (also aliased as /checkpoint). It restores your file state and conversation history to any earlier point in the session. ... There’s an elegant mechanism behind this: the file snapshot system. After each Claude response, Claude Code automatically snapshots all files that Claude has modified. This process is completely transparent — you won’t even notice it happening. ... File backups are incremental — only files that actually changed get a new version. If a file didn’t change between two turns, the previous backup is reused, saving space. After selecting your rollback point, you have four options: ... The most commonly used mode. Files are restored to the selected point’s state, and all conversation messages after that point are deleted. The conversation “forks” — you can restart the discussion from that point.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.vincentqiao.com/en/posts/claude-code-rewind/",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Use Checkpoints in Claude Code | ClaudeLog",
      "url": "https://claudelog.com/faqs/how-to-use-checkpoints-in-claude-code/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelog.com",
        "site_name": "ClaudeLog"
      },
      "is_missing": false,
      "text": "Use the /rewind command to restore code and conversation to previous states in Claude Code. Create checkpoints for safe experimentation and rollback.\n\nClaude Code v2.0.0 introduced the /rewind command, a built-in checkpoint system that allows you to restore code and conversation to previous states without relying on git. This integrated solution provides instant rollback for both professional developers and vibe coders who may be unfamiliar with version control systems. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. Each agent tackles different components while maintaining full context awareness, eliminating manual debugging bottlenecks and accelerating feature delivery. Discover Verdent AI (Free Trial) Run the /rewind command during any Claude Code session to open the checkpoint interface: ... The separation between code state and context state provides precise control over what gets restored. \n\nWhen you select a checkpoint, the UI shows the original message and timestamp, indicating whether code or conversation has changed since that point.\n\nThe /rewind command allows me to experiment more safely with Claude Code. Previously, I continuously staged or made git commits before asking Claude to perform tasks that might lead to hallucinations or errors. Checkpoints eliminate this friction by providing instant rollback without git overhead, enabling fearless experimentation during active development sessions. ... /rewind creates automatic checkpoints throughout your session for instant rollback. Experiment freely with aggressive changes knowing you can restore any previous state. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. Each agent tackles different components while maintaining full context awareness, eliminating manual debugging bottlenecks and accelerating feature delivery.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelog.com/faqs/how-to-use-checkpoints-in-claude-code/",
        "search_provider": "anthropic",
        "age": "January 19, 2026"
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

 I found a critical piece of evidence: Issue #43755 on the anthropics/claude-code repository from three weeks ago is a feature request specifically asking for per-prompt rewind/undo functionality in the Desktop App, which indicates this capability doesn't currently exist there. The user explicitly mentions that while the CLI version supports /rewind, they rely on the Desktop App as their main interface and are missing this core feature.

Now let me search for information about Cowork specifically.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:27:34.096384Z",
  "stop_timestamp": "2026-04-24T07:27:34.096384Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01R9kg2akG2RHhggiVBMNDCb",
  "name": "web_search",
  "input": {
    "query": "Claude Cowork checkpoint rewind feature"
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
  "tool_use_id": "toolu_01R9kg2akG2RHhggiVBMNDCb",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[FEATURE] Expose checkpoint restore / rewind in headless Claude Code (for editor & automation integrations) · Issue #16976 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/16976",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude Code provides a checkpoint / rewind mechanism in interactive usage, which is extremely valuable for safely iterating on code changes. However, there is currently no documented or supported way to restore / rewind a checkpoint in headless ...\n\nPreflight Checklist I have searched existing requests and this feature hasn't been requested yet This is a single feature request (not multiple features) Problem Statement Claude Code provides a checkpoint / rewind mechanism in interacti...\n\nNone of these integrate with Claude Code’s existing checkpoint semantics or allow selective restore (code vs conversation). ... A user triggers a refactor from the VS Code extension. Claude Code applies changes, but the result is incorrect. The extension needs to offer an “Undo / Rewind” action. Without headless restore support, this requires external git or filesystem hacks. With this feature, the extension can restore the checkpoint directly and retry or revert cleanly. \n\nThis feature would allow checkpoint/rewind to be reused consistently across: ... Exposing restore programmatically enables safer, more reliable tooling without duplicating rollback logic. Happy to help test or validate an implementation from an integration perspective. ... area:corearea:ideautocloseIssue will be closed automaticallyIssue will be closed automaticallyenhancementNew feature or requestNew feature or request ...\n\n[FEATURE] Expose checkpoint restore / rewind in headless Claude Code (for editor & automation integrations)#16976 ... area:corearea:ideautocloseIssue will be closed automaticallyIssue will be closed automaticallyenhancementNew feature or requestNew feature or request ... Claude Code provides a checkpoint / rewind mechanism in interactive usage, which is extremely valuable for safely iterating on code changes. However, there is currently no documented or supported way to restore / rewind a checkpoint in headless mode (e.g. when using claude -p ... \n\nin scripts, automation, or editor integ",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/16976",
        "search_provider": "anthropic",
        "age": "January 9, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "CLI: Implement Claude Code-style /rewind with checkpoint restore + context summarize modes · Issue #12558 · openai/codex",
      "url": "https://github.com/openai/codex/issues/12558",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Rewind/summarize is a local safety net and not a Git replacement. Bash/console/external changes are not reverted by rewind; only tracked file-edit operations are included. Safe rollback of both transcript history and working tree edits to a ...\n\nWhat variant of Codex are you using? CLI What feature would you like to see? Implement a Codex CLI feature that matches the Claude Code checkpoint/rewind model: Trigger rewind through both /rewind and Esc + Esc. Open a rewind menu that l...\n\nCheckpoints are created before each Claude edit and each user prompt creates a checkpoint. Checkpoints persist across sessions and are cleaned up with session cleanup (~30 days, configurable). Rewind/summarize is a local safety net and not a Git replacement. Bash/console/external changes are not reverted by rewind; only tracked file-edit operations are included. Safe rollback of both transcript history and working tree edits to a chosen checkpoint. Optional code-preview before applying a checkpoint revert. \n\nKeep rollback behavior non-destructive for unrelated local changes and allow users to rework from the restored prompt quickly. Existing closely related feature request: CLI: Add /rewind checkpoint restore that reverts both chat context and Codex-applied code edits #11626 · Current Codex backtrack already rewinds conversation context; this feature request is to make it parity-level with Claude Code's checkpoint model including code restore and summarize mode in the same command.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/openai/codex/issues/12558",
        "search_provider": "anthropic",
        "age": "February 23, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind file changes with checkpointing - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "Checkpoint works with these built-in tools that the agent uses to modify files: File rewinding restores files on disk to a previous state. It does not rewind the conversation itself.\n\nOverviewQuickstartHow the agent loop worksUse Claude Code featuresWork with sessionsStreaming InputStream responses in real-timeConnect MCP serversDefine custom toolsTool searchHandling PermissionsUser approvals and inputControl execution with hooksFile checkpointingStructured outputs in the SDKHosting the Agent SDKSecurely deploying AI agentsModifying system promptsSubagents in the SDKSlash Commands in the SDKAgent Skills in the SDKTrack cost and usageTodo ListsPlugins in the SDKMigration GuideTypeScript SDK referenceTypeScript V2 reference (preview)Python SDK reference ... File checkpointing tracks file modifications made through the Write, Edit, and NotebookEdit tools during an agent session, allowing you to rewind files to any previous state. Want to try it out? Jump to the interactive example. ... \n\nOnly changes made through the Write, Edit, and NotebookEdit tools are tracked.\n\nCheckpoint works with these built-in tools that the agent uses to modify files: File rewinding restores files on disk to a previous state. It does not rewind the conversation itself. The conversation history and context remain intact after calling rewindFiles() (TypeScript) or rewind_files() (Python). ... When you rewind to a checkpoint, created files are deleted and modified files are restored to their content at that point. To use file checkpointing, enable it in your options, capture checkpoint UUIDs from the response stream, then call rewindFiles() (TypeScript) or rewind_files() (Python) when you need to restore. The following example shows the complete flow: enable checkpointing, capture the checkpoint UUID and session ID from the response stream, then resume the session later to rewind files. Each step is explained in detail below.\n\n\n\nWith the replay-user-messages option set (shown above), each user m",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
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
      "text": "Our new checkpoint system automatically saves your code state before each change, and you can instantly rewind to previous versions by tapping Esc twice or using the /rewind command. Checkpoints let you pursue more ambitious and wide-scale tasks knowing you can always return to a prior code state.\n\nWe’re introducing several upgrades to Claude Code: a native VS Code extension, version 2.0 of our terminal interface, and checkpoints for autonomous operation. Powered by Sonnet 4.5, Claude Code now handles longer, more complex development tasks in your terminal and IDE. ... We’re introducing a native VS Code extension in beta that brings Claude Code directly into your IDE. You can now see Claude’s changes in real-time through a dedicated sidebar panel with inline diffs. The extension provides a richer, graphical Claude Code experience for users who prefer to work in IDEs over terminals. ... We’ve also refreshed Claude Code’s terminal interface.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously",
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
      "text": "... Press Esc twice for instant access, or type /rewind to browse all checkpoints. You can also run /checkpoints to list checkpoint IDs, then /rewind &lt;id&gt; to jump to a specific one.\n\nThe /rewind command isn't just undo — it's a surgical recovery tool. Here are the 5 patterns that turn AI coding disasters into minor speed bumps.\n\nI was about to git reset --hard and lose everything when I remembered a feature I'd ignored in the changelog: checkpoints. That discovery changed how I work with Claude Code. The /rewind command isn't just \"undo\" — it's a surgical tool with five distinct recovery patterns that would have saved my entire afternoon. These patterns have since saved me dozens of hours. Here’s when to use each one — and the specific commands that rescued my November 14th nightmare. Before diving into patterns, let’s clear up what checkpoints do and don’t do. Checkpoints are not Git commits. \n\nThey’re session-level snapshots that Claude Code creates automatically before each file edit. Think of them as aggressive auto-save points specifically for Claude’s changes — not a replacement for version control. When you run /checkpoints, you see something like this: checkpoint_a3f8d2 - 10:34 AM - \"Updated user service\" checkpoint_b7c4e1 - 10:28 AM - \"Added validation logic\" checkpoint_d9a2f6 - 10:15 AM - \"Refactored a\n\nThe question: Should I convert my Express routes to a controller pattern? Old approach: Spend 2 hours reading blog posts, still unsure Checkpoint approach: 1. Note checkpoint ID 2. \"Convert all routes to controller pattern\" 3. Claude refactors 8 files in 15 minutes 4. I review the result: \"Actually, I hate this. Too much boilerplate.\" 5. /rewind → both → back to original in 2 seconds 6. Decision made with zero wasted code Time spent: 17 minutes instead of 2 hours of analysis paralysis · Pro tip: Press Esc twice for instant access to the rewind menu. \n\nFaster than typing /rewind. When to use: Long-running feature development with",
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
      "title": "Checkpointing - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session.\n\nClaude Code automatically tracks Claude’s file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track. As you work with Claude, checkpointing automatically captures the state of your code before each edit. This safety net lets you pursue ambitious, wide-scale tasks knowing you can always return to a prior code state. Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/checkpointing",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind: AI Agent Checkpointing & Undo for Claude Code",
      "url": "https://mcpmarket.com/server/rewind",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpmarket.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpmarket.com",
        "site_name": "MCP Market"
      },
      "is_missing": false,
      "text": "... Rewind is a lightweight Model Context Protocol (MCP) server designed to enhance the reliability and flexibility of development workflows when using the Claude Code CLI. It introduces intelligent checkpointing, automatically saving project states before an AI agent makes modifications.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpmarket.com/server/rewind",
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
      "text": "Every prompt creates an automatic checkpoint. If Claude breaks something, press Esc twice and rewind to any previous state in seconds.\n\nEvery prompt creates an automatic checkpoint. If Claude breaks something, press Esc twice and rewind to any previous state in seconds. From zero to professional: Claude Code tips, tutorials and deep dive guides. Explore the hub · Claude Code automatically snapshots your code before every edit. Each time you send a prompt, a checkpoint is created. If Claude takes a wrong turn — breaks a feature, goes down the wrong path, or over-engineers a solution — you can rewind to any previous state in seconds. Checkpoints persist across sessions and are cleaned up automatically after 30 days.\n\nPress Esc twice quickly, or type /rewind. Select the checkpoint and what to restore: Esc + Esc → Opens the rewind menu /rewind → Same thing, via command ... Use /model + arrow keys to adjust effort on the fly. \n\nOr configure it permanently with effortLevel in settings or the CLAUDE_CODE_EFFORT_LEVEL environment variable. Show Thinking in Claude Code: Verbose & Extended Mode · Press Ctrl+O to watch Claude think. Spot problems early. Stop bad decisions before they become bad code. Ask Questions While Claude Code Is Working with /btw · Use /btw to ask quick questions while Claude Code is working. No interruption, no history pollution. If I have nothing worth saying, you won't hear from me. When I do, you'll be the first to know. 7,000+ professionals already trust this.",
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
      "title": "How to Use Checkpoints in Claude Code | ClaudeLog",
      "url": "https://claudelog.com/faqs/how-to-use-checkpoints-in-claude-code/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelog.com",
        "site_name": "ClaudeLog"
      },
      "is_missing": false,
      "text": "Use the /rewind command to restore code and conversation to previous states in Claude Code. Create checkpoints for safe experimentation and rollback.\n\nClaude Code v2.0.0 introduced the /rewind command, a built-in checkpoint system that allows you to restore code and conversation to previous states without relying on git. This integrated solution provides instant rollback for both professional developers and vibe coders who may be unfamiliar with version control systems. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. Each agent tackles different components while maintaining full context awareness, eliminating manual debugging bottlenecks and accelerating feature delivery. Discover Verdent AI (Free Trial) Run the /rewind command during any Claude Code session to open the checkpoint interface: ... The separation between code state and context state provides precise control over what gets restored. \n\nWhen you select a checkpoint, the UI shows the original message and timestamp, indicating whether code or conversation has changed since that point.\n\nThe /rewind command allows me to experiment more safely with Claude Code. Previously, I continuously staged or made git commits before asking Claude to perform tasks that might lead to hallucinations or errors. Checkpoints eliminate this friction by providing instant rollback without git overhead, enabling fearless experimentation during active development sessions. ... /rewind creates automatic checkpoints throughout your session for instant rollback. Experiment freely with aggressive changes knowing you can restore any previous state. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. Each agent tackles different components while maintaining full context awareness, eliminating manual debugging bottlenecks and accelerating feature delivery.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelog.com/faqs/how-to-use-checkpoints-in-claude-code/",
        "search_provider": "anthropic",
        "age": "January 19, 2026"
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

 I need a more targeted search for Cowork-specific information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:27:38.208791Z",
  "stop_timestamp": "2026-04-24T07:27:38.476361Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01MPYbHDknfVxmLjowZEwdYv",
  "name": "web_search",
  "input": {
    "query": "Anthropic Cowork desktop agent features"
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
  "tool_use_id": "toolu_01MPYbHDknfVxmLjowZEwdYv",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Cowork: The Complete Guide to Anthropic's AI Desktop Agent for Task Automation - Collabnix",
      "url": "https://collabnix.com/claude-cowork-the-complete-guide-to-anthropics-ai-desktop-agent-for-task-automation/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "collabnix.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=collabnix.com",
        "site_name": "Collabnix"
      },
      "is_missing": false,
      "text": "Released in January 2026 as a research preview, Cowork brings the powerful capabilities of Claude Code to non-technical users, allowing anyone to automate file management, document creation, and workflow tasks through simple natural language commands. Unlike traditional AI chatbots that live ...\n\nLike any AI agent with real-world access, Cowork faces risks from prompt injection attacks where malicious instructions hidden in webpages or files could influence behavior. Anthropic recommends limiting browser access to trusted sites and being cautious about granting folder access to directories containing files from unknown sources. Create dedicated project folders rather than granting broad system access · Back up important files before granting Cowork access ... Platform Availability – Currently macOS only. Windows and Linux support is planned but without a confirmed timeline. No Memory Between Sessions – Claude does not retain context between Cowork sessions. \n\nEvery task starts fresh without knowledge of previous work. No Projects Integration – You cannot currently use Cowork within Claude Projects, Anthropic’s shared workspace feature. Session Persistence – The Claude Desktop app must remain open while Claude works.\n\nThe Max tier provides higher usage limits and priority access to new features. Anthropic has signaled several planned improvements: Windows Support – Expanding beyond macOS exclusivity · Cross-device Sync – Maintaining state across multiple machines · Enhanced Connectors – Google Calendar, Gmail, and Drive integration · Improved Reliability – Addressing current rough edges in complex workflows · Claude Cowork represents a fundamental shift from AI that suggests to AI that acts. For knowledge workers drowning in repetitive operational tasks, this transition is transformative. \n\nWhile still in research preview with notable limitations, Cowork demonstrates that agentic AI capabilities can work for mainstream users, not just developer",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://collabnix.com/claude-cowork-the-complete-guide-to-anthropics-ai-desktop-agent-for-task-automation/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Cowork, a Claude Desktop agent that works in your files — no coding required | VentureBeat",
      "url": "https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files-no",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "venturebeat.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=venturebeat.com",
        "site_name": "VentureBeat"
      },
      "is_missing": false,
      "text": "Additionally, Cowork can pair with Claude in Chrome, Anthropic&#x27;s browser extension, to execute tasks requiring web access. This combination allows the agent to navigate websites, click buttons, fill forms, and extract information from the internet ...\n\nThe launch marks a major inflection point in the race to deliver practical AI agents to mainstream users, positioning Anthropic to compete not just with OpenAI and Google in conversational AI, but with Microsoft's Copilot in the burgeoning market for AI-powered productivity tools. \"Cowork lets you complete non-technical tasks much like how developers use Claude Code,\" the company announced via its official Claude account on X. The feature arrives as a research preview available exclusively to Claude Max subscribers — Anthropic's power-user tier priced between $100 and $200 per month — through the macOS desktop application. \n\nFor the past year, the industry narrative has focused on large language models that can write poetry or debug code. With Cowork, Anthropic is betting that the real enterprise value lies in an AI that can open a folder, read a messy pile of receipts, and generate a structured expense report without human hand-holding.\n\nCowork doesn't operate in isolation. The feature integrates with Anthropic's existing ecosystem of connectors — tools that link Claude to external information sources and services such as Asana, Notion, PayPal, and other supported partners. Users who have configured these connections in the standard Claude interface can leverage them within Cowork sessions. Additionally, Cowork can pair with Claude in Chrome, Anthropic's browser extension, to execute tasks requiring web access. This combination allows the agent to navigate websites, click buttons, fill forms, and extract information from the internet — all while operating from the desktop application.\n\n\n\nThe company expanded access with a web interface in October 2025, followed by a Slack integration in December. Cowork",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files-no",
        "search_provider": "anthropic",
        "age": "January 13, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Cowork: Claude becomes a desktop agent for folder based automation | Windows Forum",
      "url": "https://windowsforum.com/threads/anthropic-cowork-claude-becomes-a-desktop-agent-for-folder-based-automation.400571/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "windowsforum.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=windowsforum.com",
        "site_name": "Windows Forum"
      },
      "is_missing": false,
      "text": "Anthropic introduced Cowork in ... assistant that can read, edit, create, and organize files inside a user‑designated folder, then run multi‑step workflows autonomously inside a sandbox....\n\nNote: This feature may not be available in some browsers. ... You are using an out of date browser. It may not display this or other websites correctly. You should upgrade or use an alternative browser. ... agentic ai agentic automation agentic tools ai productivity claude opus 4.6 cowork windows desktop automation enterprise ai plugin framework security governance windows platform ... Anthropic’s new Cowork turns Claude from a conversational partner into a hands‑on desktop assistant that can read, edit, and create files inside a user‑designated folder — a feature that promises real productivity gains for non‑technical users while reopening familiar security, governance, and operational trade‑offs for IT teams and individuals alike. \n\nAnthropic announced Cowork on January 12, 2026 as a research preview that brings the agentic power of Claude Code out of the terminal and into the macOS desktop app, letting users grant the model scoped access to one folder on their machine and ask it to co\n\nFor individuals and small teams, that means real time savings on document wrangling, expense assembly, and report drafting. For enterprises, it’s a reminder that the next wave of automation is not a feature addition but a governance problem. The responsible path forward is clear: pilot conservatively, require backups and versioning, enable audit trails, and evaluate outputs with acceptance tests. If you’re a technologist or IT leader, treat Cowork as a powerful new automation tool that must be managed, not as a magic black box that you can deploy globally without processes and safeguards. \n\nEarly reporting framed Cowork as “Claude Code without the code,” designed to make agentic automation accessible to non‑developers while preserving a set of human‑in‑the‑loop c",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://windowsforum.com/threads/anthropic-cowork-claude-becomes-a-desktop-agent-for-folder-based-automation.400571/",
        "search_provider": "anthropic",
        "age": "February 12, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The Complete Guide to Claude Cowork: Your AI Desktop Agent",
      "url": "https://aifordevelopers.substack.com/p/the-complete-guide-to-claude-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "If you’ve been watching the agentic AI space heat up with Microsoft’s Copilot Cowork, Google’s Gemini Agent Mode, and OpenAI’s Operator, Cowork is Anthropic’s entry: a desktop-native agent that reads, edits, and creates files on your machine while you step away. This guide covers everything: what Cowork is, how to set it up, what it can actually do, and the advanced features that make it worth paying attention to. In regular Claude chat, you type a message and get a response. Claude can’t touch your files. It can’t produce a finished deliverable. You copy-paste back and forth. Cowork changes that relationship. You point Claude at a folder on your computer, describe what you want done, and Claude works through it — reading files, writing documents, creating spreadsheets, organizing folders — while you watch or walk away. Under the hood, Cowork runs inside a sandboxed virtual machine on your desktop (using Apple’s Virtualization Framework on macOS).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aifordevelopers.substack.com/p/the-complete-guide-to-claude-cowork",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork Tutorial: How to Use Anthropic's AI Desktop Agent | DataCamp",
      "url": "https://www.datacamp.com/tutorial/claude-cowork-tutorial",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "datacamp.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=datacamp.com",
        "site_name": "DataCamp"
      },
      "is_missing": false,
      "text": "In the table below, you can see how Claude Cowork compares to the chat and Claude Code features: Cowork requires a Claude Max subscription, which runs $100 to $200 per month. It's macOS only for now, with Windows support planned. Open the Claude Desktop app, and you'll see three tabs at the top of the window: Chat, Cowork, and Code.\n\nAnnounced in January 2026, Cowork is Anthropic's research preview that turns Claude into a digital coworker. You point it at a folder and describe what you need. Maybe that's sorting a chaotic downloads folder, or pulling expense data from a pile of receipt screenshots. Claude figures out the steps and handles it. In this tutorial, I’ll start with the basics, then move into three practical examples. In later sections, I’ll cover connectors, browser integration, and where Cowork falls short. If you're interested to learn about other ways to automate with Claude, I recommend checking out our OpenClaw tutorial.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.datacamp.com/tutorial/claude-cowork-tutorial",
        "search_provider": "anthropic",
        "age": "January 16, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Cowork: Deep Dive Into Claude’s New AI Desktop Agent",
      "url": "https://tech-now.io/en/blogs/anthropic-cowork-a-deep-dive-into-claudes-new-ai-desktop-agent",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "tech-now.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=tech-now.io",
        "site_name": "TechNow"
      },
      "is_missing": false,
      "text": "Cowork sessions do not persist memory across logins. ... As a research preview, Cowork may be unstable or incomplete. Users have reported issues with connectors, token usage rates, and occasional feature bugs, reflecting its early stage.\n\nGoogle Workspace AI agents embedded in Gmail, Docs, and Drive ... Cowork’s key differentiator lies in its desktop-native execution and file system integration — features most competitors have yet to offer in a mainstream release. Anthropic has signaled that Cowork will grow beyond its initial macOS preview. Planned improvements include: ... These upgrades will determine how widely Cowork can be adopted in enterprise environments where file access controls and security policies are paramount. Anthropic’s Cowork marks a meaningful step toward AI that doesn’t just generate responses but acts within real user environments to complete tasks autonomously. \n\nBy combining folder-level access, planning capabilities, and multi-agent execution, Cowork transforms Claude from a reactive assistant into a desktop collaborator capable of handling complex, multi-step workflows.\n\nAnthropic Cowork: AI desktop agent automates your workflows. Delegate file tasks to Claude today. Try it now!\n\nCowork is an AI desktop agent built into the Claude Desktop application, currently available as a research preview for Claude Max subscribers on macOS. At its core, Cowork lets users delegate work to Claude by granting the AI access to a designated folder on their computer. Once permissions are granted, Claude can: ... Examples from Anthropic’s announcement include reorganizing a messy downloads directory, generating spreadsheets from screenshotted receipts, and synthesizing draft reports from scattered notes. \n\nUnlike simple copy-paste interactions, Cowork uses an agentic architecture: once given a goal, it plans and executes steps independently, reports progress, and works in parallel sub-agents when needed. Before Cowork, Anthropic released Claude Code",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://tech-now.io/en/blogs/anthropic-cowork-a-deep-dive-into-claudes-new-ai-desktop-agent",
        "search_provider": "anthropic",
        "age": "January 13, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "anthropic launches cowork for claude code without coding",
      "url": "https://www.findarticles.com/anthropic-launches-cowork-for-claude-code-without-coding",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "findarticles.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=findarticles.com",
        "site_name": "findarticles"
      },
      "is_missing": false,
      "text": "Anthropic announced Cowork, a new desktop feature that brings Claude Code’s agent-like power to non-technical users by removing the need for terminals, virtual environments, or complex setup. Built directly into the Claude Desktop app, Cowork lets users point the AI at a single folder and then guide it through tasks using natural-language prompts, effectively creating a sandboxed workspace that’s safer and easier to control.\nThe company is rolling out Cowork in a research preview for Max subscribers first, with a waitlist for other plans. It’s an unambiguous push to turn Claude’s coding-centric agent into a general-purpose desktop helper that can read, transform, and write files on command—without asking users to touch a line of code.\nWhat Cowork Does on Desktop: Capabilities and Examples\nAt its core, Cowork adds a scoped file system bridge to Claude. \n\nCowork’s design—ask for explicit consent, constrain file access, keep a visible trail of actions—tracks with those recommendations, but the burden of clarity still sits with the user.\nHow It Fits Into Anthropic’s Strategy for Desktop Agents\nCowork builds on a steady expansion of Claude Code from its early command-line release to more user-friendly channels. Anthropic introduced a web interface, followed by a Slack integration, and now a desktop-native experience with direct file access. The throughline is clear: keep the agent close to where users already work, and strip out the barriers that make automation feel like programming.\nThe initial Max-only release gives Anthropic headroom to observe real-world behavior before widening access. \n\nExpect the roadmap to prioritize reliability, auditability, and enterprise controls such as admin policies, logging, and tighter data residency assurances—features that IT teams increasingly require as agentic tools move from trials to daily operations.\nFor now, Cowork’s promise is straightforward. It turns Claude into a capable desktop collaborator that can a",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.findarticles.com/anthropic-launches-cowork-for-claude-code-without-coding",
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

 I should look more closely at what DataCamp actually says about Claude Code and compare it with the official Anthropic documentation on Cowork to get a clearer picture.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:27:44.321427Z",
  "stop_timestamp": "2026-04-24T07:27:44.595874Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01TCBoA1ccqQdiwhP87p2A6D",
  "name": "web_search",
  "input": {
    "query": "\"Cowork\" checkpoint OR rewind OR undo revert file"
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
  "tool_use_id": "toolu_01TCBoA1ccqQdiwhP87p2A6D",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Rewind file changes with checkpointing - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "Capture checkpoint data: as the ... undo the changes · Resume and rewind: if yes, resume the session with an empty prompt and call rewind_files() to restore the original file · 3 · Run the example · Run the script from the ...\n\nCapture checkpoint data: as the agent runs, store the first user message UUID (your restore point) and the session ID · Prompt for rewind: after the agent finishes, check your utility file to see the doc comments, then decide if you want to undo the changes · Resume and rewind: if yes, resume the session with an empty prompt and call rewind_files() to restore the original file · 3 · Run the example · Run the script from the same directory as your utility file. Open your utility file (utils.py or utils.ts) in your IDE or editor before running the script. You'll see the file update in real-time as the agent adds doc comments, then revert back to the original when you choose to rewind. \n\nPython · Python · TypeScript · TypeScript · You'll see the agent add doc comments, then a prompt asking if you want to rewind. If you choose yes, the file is restored to its original state.\n\nFile checkpointing tracks file modifications made through the Write, Edit, and NotebookEdit tools during an agent session, allowing you to rewind files to any previous state. Want to try it out? Jump to the interactive example. ... Only changes made through the Write, Edit, and NotebookEdit tools are tracked. Changes made through Bash commands (like echo > file.txt or sed -i) are not captured by the checkpoint system. When you enable file checkpointing, the SDK creates backups of files before modifying them through the Write, Edit, or NotebookEdit tools. User messages in the response stream include a checkpoint UUID that you can use as a restore point. Checkpoint works with these built-in tools that the agent uses to modify files: File rewinding restores files on disk to a previous state. \n\nIt does not rewind the conversation itself. The conversation history and",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind: AI Agent Checkpointing & Undo for Claude Code",
      "url": "https://mcpmarket.com/server/rewind",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpmarket.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpmarket.com",
        "site_name": "MCP Market"
      },
      "is_missing": false,
      "text": "Rewind is a lightweight Model Context Protocol (MCP) server designed to enhance the reliability and flexibility of development workflows when using the Claude Code CLI. It introduces intelligent checkpointing, automatically saving project states before an AI agent makes modifications. This allows developers to effortlessly undo unwanted changes, restore deleted files, and quickly revert to previous states across multiple files, providing a safety net and facilitating experimentation with various coding approaches. ... 02Complete Undo Support: Easily restore modified files, recover deleted files, or remove unwanted files. 03Checkpoint Stack Management: View available checkpoints and their history. 04Project Cleanup: Option to clear all checkpoints. 05Fast Multi-File Restore: Revert changes across multiple files instantly. 06Smart Checkpointing: Automatically saves project states before agent modifications.\n\n\n\nRewind is a lightweight Model Context Protocol (MCP) server designed to enhance the reliability and flexibility of development workflows when using the Claude Code CLI. It introduces intelligent checkpointing, automatically saving project states before an AI agent makes modifications. This allows developers to effortlessly undo unwanted changes, restore deleted files, and quickly revert to previous states across multiple files, providing a safety net and facilitating experimentation with various coding approaches. ... 02Complete Undo Support: Easily restore modified files, recover deleted files, or remove unwanted files. 03Checkpoint Stack Management: View available checkpoints and their history. 04Project Cleanup: Option to clear all checkpoints. 05Fast Multi-File Restore: Revert changes across multiple files instantly. 06Smart Checkpointing: Automatically saves project states before agent modifications.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpmarket.com/server/rewind",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Revert changes with checkpoints and editing requests",
      "url": "https://code.visualstudio.com/docs/copilot/chat/chat-checkpoints",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "visualstudio.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=visualstudio.com",
        "site_name": "Visual Studio Code"
      },
      "is_missing": false,
      "text": "Hover over the chat request and select Restore Checkpoint. Confirm that you want to restore the checkpoint and undo any file changes made after that point. Notice that the chat request is removed from the conversation history, and the workspace ...\n\nA chat session in Visual Studio Code might result in changes to one or more files in your workspace. VS Code provides two ways to undo or revise these changes: Edit a previous request: modify a prompt you already sent. VS Code reverts any changes made by that request and all subsequent requests, then resends the edited prompt. Use this when you want to rephrase a request and get different results. Restore a checkpoint: roll back all file changes to a specific point in the conversation. Use this when you want to return to a known good state without modifying your prompts. Both features complement the review workflow, where you accept or reject individual edits. \n\nUse checkpoints and editing when you want to undo an entire batch of changes at once. Each chat request in your conversation history is editable. When you edit a previous chat request, the edited request is sent to the language model as a new request, and any file changes made by the original request and subsequent requests are r\n\nWhen you restore a checkpoint, VS Code reverts the workspace to the state it was in at the time of that checkpoint. This means that all changes made to files after that checkpoint will be undone. To restore your workspace to a previous checkpoint: In the Chat view, navigate to previous chat request in the chat session. Hover over the chat request and select Restore Checkpoint. Confirm that you want to restore the checkpoint and undo any file changes made after that point. Notice that the chat request is removed from the conversation history, and the workspace files are restored to their state at the time of the checkpoint.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.visualstudio.com/docs/copilot/chat/chat-checkpoints",
        "search_provider": "anthropic",
        "age": "November 3, 2021"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Is there an undo/rollback/rewind command? · badlogic/pi-mono · Discussion #1223",
      "url": "https://github.com/badlogic/pi-mono/discussions/1223",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "It gives you /rewind (like Claude Code), Esc+Esc shortcut, diff preview before restoring, and you can choose to rewind files only, conversation only, or both. I actually went a bit overboard and researched 11 coding agents to figure out the ...\n\nDoes pi have a way to undo or revert changes made during a session? For example, Claude Code has a /rewind command that creates checkpoints after each prompt, letting you revert file changes or fork the conversation · Beta Was this translation helpful? Give feedback. ... There was an error while loading. Please reload this page. Something went wrong. There was an error while loading. Please reload this page. ... Beta Was this translation helpful? Give feedback. ... There was an error while loading. Please reload this page. Something went wrong. There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Something went wrong. There was an error while loading. \n\nPlease reload this page. ... AFAIK /fork doesn't change actual files, changes conversations only. This extension mostly works (I tested index.js only manually, placing it to ~/.pi/agent/extensions/pi-rewind-hook.ts) https://www.npmjs.com/package/pi-rewind-hook ·\n\nIt gives you /rewind (like Claude Code), Esc+Esc shortcut, diff preview before restoring, and you can choose to rewind files only, conversation only, or both. I actually went a bit overboard and researched 11 coding agents to figure out the best approach. Ended up with 1 checkpoint per turn (same strategy Cline uses internally), descriptive labels so you know what each checkpoint is, and safe restore that never nukes your node_modules. ... Built on top of checkpoint-pi and pi-rewind-hook — both great extensions that already existed, pi-rewind just merges the best of both + adds the missing pieces. Beta Was this translation helpful? Give feedback. ... Sign up for free to join this conversation on GitHub.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/badlogic/pi-mono/discussions/1223",
        "search_provider": "anthropic",
        "age": "February 14, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code /rewind: Undo Any AI Mistake in One Command — Vincent's Blog",
      "url": "https://blog.vincentqiao.com/en/posts/claude-code-rewind/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "vincentqiao.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=vincentqiao.com",
        "site_name": "Vincent's Blog"
      },
      "is_missing": false,
      "text": "When disabled, /rewind can still roll back conversations, but cannot restore files. You might think: I have git, why do I need /rewind? In short: git is long-term version management, /rewind is instant undo within a session.\n\nWhat now? Manually git checkout each file? If you haven’t committed yet, you can’t even find a clean diff. Or another scenario: Claude’s first few responses were great, but the last one went off track. You want to go back to “before it went wrong” and start over. /rewind is your undo button. One command to roll back both code and conversation to any previous point. /rewind is Claude Code’s code and conversation rollback command (also aliased as /checkpoint). It restores your file state and conversation history to any earlier point in the session. ... There’s an elegant mechanism behind this: the file snapshot system. After each Claude response, Claude Code automatically snapshots all files that Claude has modified. \n\nThis process is completely transparent — you won’t even notice it happening. ... File backups are incremental — only files that actually changed get a new version.\n\n# Disable via environment variable export CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING=1 · Or set fileCheckpointingEnabled: false in global configuration. When disabled, /rewind can still roll back conversations, but cannot restore files. You might think: I have git, why do I need /rewind? In short: git is long-term version management, /rewind is instant undo within a session. They complement each other. Best practice: Commit at every important milestone, then use /rewind for fine-grained rollbacks between commits. The core value of /rewind is giving you the courage to make mistakes. When collaborating with AI on code, you can’t always give perfect instructions. Claude can’t always understand you perfectly either. \n\nWith /rewind, you can experiment boldly: let Claude try an aggressive approach — roll back if it doesn’t work out; let it take a risk",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.vincentqiao.com/en/posts/claude-code-rewind/",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind MCP Server - khalilbalaree/rewind-mcp",
      "url": "https://playbooks.com/mcp/khalilbalaree/rewind-mcp",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "playbooks.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=playbooks.com",
        "site_name": "Playbooks"
      },
      "is_missing": false,
      "text": "Practical workflow example you can follow: create a checkpoint labeled with a description such as &quot;Before adding error handling&quot;, ask the agent to implement changes, and if you need to revert, request an undo to restore the previous ...\n\nRewind MCP is a lightweight checkpointing server that integrates with Claude Code to automatically create and manage project state checkpoints before changes. It enables fast multi-file restores, complete undo capabilities, and a smooth workflow when you want to experiment or iterate without risking permanent code drift. You interact with Rewind MCP through an MCP client. Before the agent makes any changes you can request a checkpoint, describe what you want to do, and then either proceed or rewind as needed. Key patterns you’ll use include creating a checkpoint before modifications, letting the agent apply changes, inspecting the list of available checkpoints, and undoing or rewinding to a previous state when necessary. \n\nPractical workflow example you can follow: create a checkpoint labeled with a description such as \"Before adding error handling\", ask the agent to implement changes, and if you need to revert, request an undo to restore the previous state.\n\nCheckpoint-based server enabling undo, multi-file restores, and quick state management for Claude Code workflows.\n\n{ \"mcpServers\": { \"Rewind-MCP\": { \"command\": \"node\", \"args\": [\"/absolute/path/to/Rewind-MCP/dist/index.js\"], \"env\": {} } } } As you work, you can inspect the available checkpoints to decide where to revert. Restoring a checkpoint brings back files to the exact state they were in at that moment, including both additions and deletions. If you want to share a specific checkpoint with teammates, describe it clearly when you create it, and use list_undos() to review the available options before deciding to rewind. Keep checkpoints concise and descriptive to make it easy to identify the state you want to restore.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://playbooks.com/mcp/khalilbalaree/rewind-mcp",
        "search_provider": "anthropic",
        "age": "December 7, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "CLI: Add /rewind checkpoint restore that reverts both chat context and Codex-applied code edits · Issue #11626 · openai/codex",
      "url": "https://github.com/openai/codex/issues/11626",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "... Ask Codex CLI to modify files. Press Esc twice to rewind a prior user message and fork. Conversation rewinds, but prior file edits remain in the working tree. Workarounds today (/diff, !git diff, manual git restore/reset) are useful but ...\n\nWhat variant of Codex are you using? CLI What feature would you like to see? Add a native /rewind checkpoint flow that restores both: conversation state Codex-applied workspace edits from the same selected checkpoint. Current behavior: E...\n\nSelecting a checkpoint rewinds chat and reverts Codex-made edits after that checkpoint. Provide a pre-apply preview of file changes to be reverted. Allow editing the restored prompt before resubmitting. ... Only revert Codex-created edits after the selected checkpoint. Do not touch unrelated local changes that existed before checkpoint creation. If any file cannot be cleanly restored, show conflicts and require explicit confirmation before partial apply. ... Ask Codex CLI to modify files. \n\nPress Esc twice to rewind a prior user message and fork. Conversation rewinds, but prior file edits remain in the working tree. Workarounds today (/diff, !git diff, manual git restore/reset) are useful but fragmented. A unified checkpoint rewind would make iterative prompting much safer and faster. Related context: #9203, #4487, #8819. ... TUIIssues related to the terminal user interface: text input, menus and dialogs, and terminal displayIssues related to the terminal user interface: text input, menu",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/openai/codex/issues/11626",
        "search_provider": "anthropic",
        "age": "February 12, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Feature request: bring back Undo / Redo for Codex-applied file changes · Issue #16784 · openai/codex",
      "url": "https://github.com/openai/codex/issues/16784",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "... Codex refactors 8 files and breaks tests → /undo should restore the whole change set. Codex overwrites an uncommitted design doc → /undo should restore the exact previous contents.\n\nI suggest restoring /undo and adding /redo, with semantics based on a single Codex task/change set rather than per-file edits. Each Codex write operation should create a lightweight checkpoint containing the affected files and their pre-change state, so users can safely revert file creations, modifications, deletions, and renames. This should also integrate with chat rewind/fork behavior. If a user rewinds to an earlier prompt, the CLI should optionally restore the corresponding file checkpoint too, so conversation state and working tree do not drift apart. ... Codex refactors 8 files and breaks tests → /undo should restore the whole change set. Codex overwrites an uncommitted design doc → /undo should restore the exact previous contents.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/openai/codex/issues/16784",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
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
      "text": "... Work normally — every prompt you send creates a checkpoint automatically. ... Press Esc twice quickly, or type /rewind. Select the checkpoint and what to restore: Esc + Esc → Opens the rewind menu /rewind → Same thing, via command ...\n\nEvery prompt creates an automatic checkpoint. If Claude breaks something, press Esc twice and rewind to any previous state in seconds. From zero to professional: Claude Code tips, tutorials and deep dive guides. Explore the hub · Claude Code automatically snapshots your code before every edit. Each time you send a prompt, a checkpoint is created. If Claude takes a wrong turn — breaks a feature, goes down the wrong path, or over-engineers a solution — you can rewind to any previous state in seconds. Checkpoints persist across sessions and are cleaned up automatically after 30 days.\n\n\n\n> Esc Esc (press Escape twice) ┌─ Rewind to ──────────────────────────┐ │ ● Message 5: \"Add auth middleware\" │ │ ○ Message 4: \"Create user model\" │ │ ○ Message 3: \"Set up database\" │ │ │ │ Restore: ◉ Both ○ Code ○ Convo │ └──────────────────────────────────────┘ · No setup needed. Checkpointing is enabled by default. ... Work normally — every prompt you send creates a checkpoint automatically. ... Press Esc twice quickly, or type /rewind. Select the checkpoint and what to restore: Esc + Esc → Opens the rewind menu /rewind → Same thing, via command ... Use /model + arrow keys to adjust effort on the fly. Or configure it permanently with effortLevel in settings or the CLAUDE_CODE_EFFORT_LEVEL environment variable.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://wmedia.es/en/tips/rewind-changes-instantly-with-checkpoints",
        "search_provider": "anthropic",
        "age": "February 3, 2026"
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

 I should look into the official Anthropic documentation and support resources to see if there's any information about checkpoint or rewind functionality in Cowork and the Desktop app.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:27:50.400126Z",
  "stop_timestamp": "2026-04-24T07:27:50.523547Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01A76iBB9oSvdmg22CYkgJTA",
  "name": "web_search",
  "input": {
    "query": "site:support.claude.com Cowork"
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
  "tool_use_id": "toolu_01A76iBB9oSvdmg22CYkgJTA",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Use Claude Cowork on Team and Enterprise plans | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "This article explains important limitations and considerations for Team and Enterprise organizations using Claude Cowork. Claude Cowork is available as a research preview for paid plans (Pro, Max, Team, Enterprise) on: ... Windows users: Cowork requires the latest version of Claude for Windows. Download or update at claude.com/download. Claude Cowork will be on by default when the research preview launches, but organization owners can manually disable it. ... Log in to your Team or Enterprise organization as an Owner or Primary Owner. Navigate to Organization settings &gt; Capabilities. Locate the Cowork toggle. Toggle off to disable Cowork for all users in your organization. Note: This is an organization-wide setting. Granular controls by user or role are not currently available. Plugins are included with Cowork and controlled by the same admin toggle—there&#x27;s no separate setting ...\n\n\n\nThis article explains important limitations and considerations for Team and Enterprise organizations using Claude Cowork. Claude Cowork is available as a research preview for paid plans (Pro, Max, Team, Enterprise) on: ... Windows users: Cowork requires the latest version of Claude for Windows. Download or update at claude.com/download. Claude Cowork will be on by default when the research preview launches, but organization owners can manually disable it. ... Log in to your Team or Enterprise organization as an Owner or Primary Owner. Navigate to Organization settings > Capabilities. Locate the Cowork toggle. Toggle off to disable Cowork for all users in your organization. Note: This is an organization-wide setting. Granular controls by user or role are not currently available. Plugins are included with Cowork and controlled by the same admin toggle—there's no separate setting to manage plugin access within Cowork.\n\n\n\nFor details on what members can do with plugins, see Use plugins in Cowork. Projects in Cowork let users organize tasks into dedicated workspaces with their ow",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Use Claude Cowork safely | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13364135-use-claude-cowork-safely",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Cowork executes code and commands on your behalf. While we surface what Claude is doing, you shouldn&#x27;t expect to validate every individual command—instead, watch for unexpected patterns: Is Claude accessing files or websites you didn&#x27;t mention?\n\nCowork lets Claude work on your computer with access to your files, browser, connected services, and apps. That capability comes with risks worth understanding. This article covers what we've built to keep you safe, what you should watch for, and how to protect yourself when using Cowork. Claude Cowork is available for paid plans (Pro, Max, Team, Enterprise) on: ... Cowork requires the latest version of Claude for Windows. Download or update at claude.com/download. Claude Cowork has unique risks due to its agentic nature and internet access. ... Avoid granting access to local files with sensitive information, like financial documents. When using the Claude in Chrome extension, limit access to trusted sites. \n\nIf you chose to extend Claude’s default internet access settings, be careful to only extend internet access to sites you trust. Monitor Claude for suspicious actions that may indicate prompt injection.\n\nBe especially cautious with computer use—Claude is interacting with your actual desktop and apps outside the virtual machine. For details on how computer use works and how to manage permissions, see Let Claude use your computer in Cowork. Important: Cowork has access to Claude in Chrome; we strongly advise against using Claude in Chrome to manage or take actions involving sensitive information. See Using Claude in Chrome safely for more information about the potential risks. Cowork activity is not captured in audit logs, Compliance API, or data exports. Do not use Cowork for regulated workloads. For more information, see Cowork for Team and Enterprise plans. ... \n\nAvoid sensitive data and consequential actions. Don't schedule tasks that access sensitive files, send messages on your behalf, make purchases,",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13364135-use-claude-cowork-safely",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Get started with Claude Cowork | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "With Cowork, you can describe an outcome, step away, and come back to finished work—formatted documents, organized files, synthesized research, and more. With scheduled tasks, Claude can complete work for you automatically, which isn&#x27;t possible ...\n\nThis article explains how to use Claude Cowork, which brings Claude Code's agentic capabilities to Claude Desktop for knowledge work beyond coding. Claude Cowork is available for paid plans (Pro, Max, Team, Enterprise) on: ... Cowork requires the latest version of Claude for Windows. Download or update at claude.com/download. If you haven't installed Claude Desktop yet and want to check if your computer will support Cowork, click the link associated with your system to download a simple program that checks this for you: ... Open the program after downloading to run the Cowork readiness check. If you see \"This computer is ready for Cowork,\" you can move forward. \n\nClaude Cowork uses the same agentic architecture that powers Claude Code, now accessible within Claude Desktop and without opening the terminal. Instead of responding to prompts one at a time, Claude can take on complex, multi-step tasks and execute them on your behalf.\n\nWith Cowork, you can describe an outcome, step away, and come back to finished work—formatted documents, organized files, synthesized research, and more. With scheduled tasks, Claude can complete work for you automatically, which isn't possible in regular chats outside of Cowork. With the introduction of projects in Cowork, you can organize related tasks into persistent, self-contained workspaces with their own files, links, instructions, and memory, making Cowork more powerful for recurring or long-running work. ... Cowork has unique risks due to its agentic nature and internet access. Cowork respects your current network egress permissions. \n\nImportant: Network egress permissions don't apply to the web search tool or MCPs, including Claude in Chrome. Team or Enterprise plan owners can",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Use Claude Cowork with third-party platforms | Claude Help Center",
      "url": "https://support.claude.com/en/articles/14680729-use-claude-cowork-with-third-party-platforms",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "If your organization uses Amazon Bedrock, Google Cloud Vertex AI, Azure AI Foundry, or an LLM gateway to access Claude, you can deploy Claude Cowork to run on the same infrastructure. Prompts and completions route through your inference provider, so Anthropic never sees them, while users get the same Cowork experience: delegate long-running tasks to Claude, work with local files, and use MCP connectors. Your IT team configures the deployment via MDM. This deployment supports both Claude Cowork (the long-running task experience) and Claude Code Desktop (CCD), an agentic coding interface for developers who prefer a graphical environment over a terminal. For more on CCD, see Use Claude Code Desktop. This deployment option is built for organizations that need to keep model inference on infrastructure they control. That typically means: Companies that already run Claude through a third-party ...\n\n\n\nIf your organization uses Amazon Bedrock, Google Cloud Vertex AI, Azure AI Foundry, or an LLM gateway to access Claude, you can deploy Claude Cowork to run on the same infrastructure. Prompts and completions route through your inference provider, so Anthropic never sees them, while users get the same Cowork experience: delegate long-running tasks to Claude, work with local files, and use MCP connectors. Your IT team configures the deployment via MDM. This deployment supports both Claude Cowork (the long-running task experience) and Claude Code Desktop (CCD), an agentic coding interface for developers who prefer a graphical environment over a terminal. For more on CCD, see Use Claude Code Desktop. This deployment option is built for organizations that need to keep model inference on infrastructure they control. That typically means: Companies that already run Claude through a third-party platform ·\n\n\n\nFor organizations that access Claude through Anthropic directly, see Get started with Claude Cowork. Claude Cowork works with any of the following third-party platforms: Amazon B",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/14680729-use-claude-cowork-with-third-party-platforms",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Organize your tasks with projects in Claude Cowork | Claude Help Center",
      "url": "https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Instructions — Add tone, formatting, or rules to help guide how Claude works on all tasks in the project. Scheduled tasks — Set up recurring tasks that are specific to the project.\n\nMemory is enabled for Cowork projects. This means Claude can remember context from tasks you've run in a project and apply it to future tasks in the same project. Memory is scoped to the project, so what Claude learns in one project doesn't carry over to others. For more information about how memory works, see Use Claude’s chat search and memory to build on previous context. ... The project's metadata is removed from the UI, but is not removed locally. Any related files or folders stored on your computer are not affected. Projects are only available in Cowork, not in Claude Code. Support for Claude Code is planned for a future update. Projects are desktop-only and stored locally. There's no cloud sync for project data at this time.\n\n\n\nProjects in Claude Cowork let you group related tasks into dedicated workspaces with their own files, context, instructions, and memory. If you use projects on Claude, Cowork projects work similarly, but they live locally on your desktop and are built around the tasks you run through Cowork. Important: This feature requires the latest version of Claude Desktop. Start by updating your desktop app if you’re not using the latest version. Cowork is available for paid plans (Pro, Max, Team, Enterprise) on: ... Cowork requires the latest version of Claude for Windows. Download or update at our download page.\n\nFor members of Team and Enterprise plans, Cowork projects do not support project sharing.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Monitor Claude Cowork activity with OpenTelemetry | Claude Help Center",
      "url": "https://support.claude.com/en/articles/14477985-monitor-claude-cowork-activity-with-opentelemetry",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Each Cowork OTel event includes a shared user account identifier you can use to correlate events with records from the Compliance API.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/14477985-monitor-claude-cowork-activity-with-opentelemetry",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Manage Claude Cowork plugins for your organization | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13837433-manage-claude-cowork-plugins-for-your-organization",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Go to Organization settings > Plugins. Click \"Add plugin\" and select \"GitHub\" as the source. Enter the repository in owner/repo format (for example, acme-corp/claude-plugins). Your personal GitHub token is verified to confirm you have access, then Cowork uses its GitHub App installation token for sync operations. Can't see your repo? Make sure the Claude GitHub App is installed in that repository. An initial sync runs automatically when you connect a repository. After that, organization owners can opt-in to continued automatic updates per marketplace by going to Organization settings > Plugins (under Libraries), clicking the menu button in the upper right corner of the marketplace, then toggling \"Sync automatically\" on: The GitHub marketplace will then be auto-synced whenever a PR is merged to that repo.\n\nDuring a sync, Cowork compares the latest commit in your repo against the last-synced commit. If nothing has changed, the sync is skipped.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13837433-manage-claude-cowork-plugins-for-your-organization",
        "search_provider": "anthropic",
        "age": "March 14, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Use plugins in Claude Cowork | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13837440-use-plugins-in-claude-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Cowork includes a growing library of plugins for common knowledge work—including sales, finance, legal, marketing, HR, engineering, design, operations, data analysis, and more. Each one comes pre-configured with the skills and connectors relevant ...\n\nPlugins are available to all Claude Cowork users on paid plans (Pro, Max, Team, Enterprise). Plugins customize how Claude works for your role, team, and company in Cowork. Each plugin bundles together skills, connectors, and sub-agents into a single package—so instead of setting up each piece individually, you get a ready-to-go setup from the first conversation. Claude also connects to services like Google Drive, Gmail, Slack, DocuSign, and many more. Plugins can bundle the right connectors for a given workflow so you don't have to set them up individually. Note: Connectors in Cowork reach external services through Anthropic's cloud, not through your local network.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13837440-use-plugins-in-claude-cowork",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
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

 I found references to "Claude Code Desktop" (CCD) in the search results, which is the integrated code editor within Claude Desktop. Now I need to look more closely at whether it supports checkpoint or rewind functionality.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:27:55.281759Z",
  "stop_timestamp": "2026-04-24T07:27:55.719890Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CvLP3SaBhq2AohgGcDjXpf",
  "name": "web_search",
  "input": {
    "query": "\"Claude Code Desktop\" CCD checkpoint rewind graphical"
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
  "tool_use_id": "toolu_01CvLP3SaBhq2AohgGcDjXpf",
  "name": "web_search",
  "content": [
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
      "text": "Our new checkpoint system automatically saves your code state before each change, and you can instantly rewind to previous versions by tapping Esc twice or using the /rewind command. Checkpoints let you pursue more ambitious and wide-scale tasks knowing you can always return to a prior code state.\n\nWe’re introducing several upgrades to Claude Code: a native VS Code extension, version 2.0 of our terminal interface, and checkpoints for autonomous operation. Powered by Sonnet 4.5, Claude Code now handles longer, more complex development tasks in your terminal and IDE. ... We’re introducing a native VS Code extension in beta that brings Claude Code directly into your IDE. You can now see Claude’s changes in real-time through a dedicated sidebar panel with inline diffs. The extension provides a richer, graphical Claude Code experience for users who prefer to work in IDEs over terminals. ... We’ve also refreshed Claude Code’s terminal interface.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[FEATURE] Expose checkpoint restore / rewind in headless Claude Code (for editor & automation integrations) · Issue #16976 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/16976",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "However, there is currently no documented or supported way to restore / rewind a checkpoint in headless mode (e.g. when using claude -p ... in scripts, automation, or editor integrations).\n\nPreflight Checklist I have searched existing requests and this feature hasn't been requested yet This is a single feature request (not multiple features) Problem Statement Claude Code provides a checkpoint / rewind mechanism in interacti...\n\nClaude Code applies changes, but the result is incorrect. The extension needs to offer an “Undo / Rewind” action. Without headless restore support, this requires external git or filesystem hacks. With this feature, the extension can restore the checkpoint directly and retry or revert cleanly. This feature would allow checkpoint/rewind to be reused consistently across: ... Exposing restore programmatically enables safer, more reliable tooling without duplicating rollback logic. Happy to help test or validate an implementation from an integration perspective. ... \n\narea:corearea:ideautocloseIssue will be closed automaticallyIssue will be closed automaticallyenhancementNew feature or requestNew feature or request ... No fields configured for issues without a type.\n\nExpose checkpoint restore / rewind functionality to headless Claude Code via a stable, non-interactive interface. ... It does not propose a new checkpoint system. It only asks for a way to restore / rewind an existing checkpoint programmatically. Two possible interfaces (either would satisfy this requirement): Provide a dedicated flag to restore a checkpoint by ID: claude --checkpoint <uuid> --checkpoint-scope code|conversation|both · This would allow tools and scripts to trigger rewind behavior explicitly and deterministically. Expose restore functionality via structured stdin messages: json { \"type\": \"control_checkpoint\", \"uuid\": \"message-id\", \"scope\": \"code|conversation|both\"} ... Usable by first-party tools (e.g. VS Code extension) and third-party integrations ... \n\nNone of t",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/16976",
        "search_provider": "anthropic",
        "age": "January 9, 2026"
      },
      "links": null
    },
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
      "text": "Each user prompt in the conversation acts as a checkpoint · Hovering over a message reveals a &quot;Revert to here&quot; button · Clicking it shows a diff preview of what will be rolled back · User can select/deselect individual files before confirming ...\n\nPreflight Checklist I have searched existing requests and this feature hasn't been requested yet This is a single feature request (not multiple features) Problem Statement When working on multi-step coding tasks, I often need to undo cha...\n\nEach user prompt in the conversation acts as a checkpoint · Hovering over a message reveals a \"Revert to here\" button · Clicking it shows a diff preview of what will be rolled back · User can select/deselect individual files before confirming · After reverting, the conversation history remains visible (greyed out) so context isn't lost · This matches the behavior already available in the CLI via /rewind, adapted for a graphical interface. \n\nUsing git diff and manually reverting specific hunks — works but tedious · Asking Claude to \"undo your last change\" — unreliable, wastes context, and Claude sometimes makes additional unintended modifications · Switching to the CLI version just for /rewind — disrupts workflow · Using competing tools (Cursor, Windsurf) that have this built in ... No fields configured for issues without a type.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/43755",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
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
      "text": "Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session.\n\nClaude Code automatically tracks Claude’s file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track. As you work with Claude, checkpointing automatically captures the state of your code before each edit. This safety net lets you pursue ambitious, wide-scale tasks knowing you can always return to a prior code state. Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session. \n\nSelect the point you want to act on, then choose an action: Restore code and conversation: revert both code and conversation to that point · Restore conversation: rewind to that message while keeping current code · Restore code: revert file changes while keeping the conversation ·\n\nCheckpointing does not track files modified by bash commands. For example, if Claude Code runs: rm file.txt mv old.txt new.txt cp source.txt dest.txt · These file modifications cannot be undone through rewind. Only direct file edits made through Claude’s file editing tools are tracked. Checkpointing only tracks files that have been edited within the current session. Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session. Checkpoints are designed for quick, session-level recovery. For permanent version history and collaboration: Continue using version control (ex.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/checkpointing",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind file changes with checkpointing - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "... def add(a, b): return a + b ... and paste the following code. This script asks Claude to add doc comments to your utility file, then gives you the option to rewind and restore the original....\n\nOverviewQuickstartHow the agent loop worksUse Claude Code featuresWork with sessionsStreaming InputStream responses in real-timeConnect MCP serversDefine custom toolsTool searchHandling PermissionsUser approvals and inputControl execution with hooksFile checkpointingStructured outputs in the SDKHosting the Agent SDKSecurely deploying AI agentsModifying system promptsSubagents in the SDKSlash Commands in the SDKAgent Skills in the SDKTrack cost and usageTodo ListsPlugins in the SDKMigration GuideTypeScript SDK referenceTypeScript V2 reference (preview)Python SDK reference ... File checkpointing tracks file modifications made through the Write, Edit, and NotebookEdit tools during an agent session, allowing you to rewind files to any previous state. Want to try it out? \n\nJump to the interactive example. ... Only changes made through the Write, Edit, and NotebookEdit tools are tracked.\n\nThis complete example creates a small utility file, has the agent add documentation comments, shows you the changes, then asks if you want to rewind. Before you begin, make sure you have the Claude Agent SDK installed. ... def add(a, b): return a + b def subtract(a, b): return a - b def multiply(a, b): return a * b def divide(a, b): if b == 0: raise ValueError(\"Cannot divide by zero\") return a / b ... Create a new file called try_checkpointing.py (Python) or try_checkpointing.ts (TypeScript) in the same directory as your utility file, and paste the following code. This script asks Claude to add doc comments to your utility file, then gives you the option to rewind and restore the original.\n\nCheckpoint works with these built-in tools that the agent uses to modify files: File rewinding restores files on disk to a previous state. It does not rewind the conversation itself.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/agent-sdk/file-checkpointing",
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
      "text": "... # Open rewind menu /rewind # Select the checkpoint from before the refactor started # Choose: &quot;Code only&quot; This restored all 4 files to their pre-disaster state while keeping the conversation intact.\n\nThe /rewind command isn't just undo — it's a surgical recovery tool. Here are the 5 patterns that turn AI coding disasters into minor speed bumps.\n\nI was about to git reset --hard and lose everything when I remembered a feature I'd ignored in the changelog: checkpoints. That discovery changed how I work with Claude Code. The /rewind command isn't just \"undo\" — it's a surgical tool with five distinct recovery patterns that would have saved my entire afternoon. These patterns have since saved me dozens of hours. Here’s when to use each one — and the specific commands that rescued my November 14th nightmare. Before diving into patterns, let’s clear up what checkpoints do and don’t do. Checkpoints are not Git commits. \n\nThey’re session-level snapshots that Claude Code creates automatically before each file edit. Think of them as aggressive auto-save points specifically for Claude’s changes — not a replacement for version control. When you run /checkpoints, you see something like this: checkpoint_a3f8d2 - 10:34 AM - \"Updated user service\" checkpoint_b7c4e1 - 10:28 AM - \"Added validation logic\" checkpoint_d9a2f6 - 10:15 AM - \"Refactored a\n\nWhen you trigger /rewind, you get three restore options: Conversation only — Reset Claude’s context while keeping code changes · Code only — Revert files while preserving the conversation ... Here’s the critical limitation that bit me: Bash commands are NOT tracked. If Claude runs rm, mv, or cp, those changes are permanent. Checkpoints only capture edits made through Claude's file editing tools. \n\nWhat checkpoints track: ✅ File edits via Claude's tools ✅ New file creation ✅ File deletions via edit tools · What checkpoints DON'T track: ❌ Bash commands (rm, mv, cp) ❌ Manual edits you make",
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
      "text": "cd your-project claude-rewind init # That&#x27;s it! Claude Code Rewind Tool is now protecting your code · # View your session timeline claude-rewind timeline # See what Claude changed in the last action claude-rewind diff latest # Rollback to a specific point claude-rewind rollback cr_abc123 # Preview rollback without applying claude-rewind preview cr_abc123 # Show current status claude-rewind status ·\n\nClaude Code Rewind Tool is the first-ever time machine for Claude Code sessions. Never again worry about AI breaking your code. Automatically capture every change, visualize exactly what happened, and rollback to any point with surgical precision. Every developer using Claude Code has experienced this nightmare: ... Claude Code Rewind Tool eliminates this fear forever. \n\nClaude Code Rewind Tool is now protecting your code · # View your session timeline claude-rewind timeline # See what Claude changed in the last action claude-rewind diff latest # Rollback to a specific point claude-rewind rollback cr_abc123 # Preview rollback without applying claude-rewind preview cr_abc123 # Show current status claude-rewind status ·\n\n# Create git commits from snapshots claude-rewind export cr_abc123 --format=patch claude-rewind export cr_abc123 --format=commit # Sync with git history claude-rewind sync-git · # .claude-rewind.yml storage: max_snapshots: 100 compression: true cleanup_after_days: 30 display: theme: \"dark\" diff_algorithm: \"unified\" show_line_numbers: true hooks: pre_snapshot: \"./scripts/pre-snapshot.sh\" post_rollback: \"./scripts/post-rollback.sh\" ... We're building something amazing together! ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/holasoymalva/claude-code-rewind",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Rewind: AI Agent Checkpointing & Undo for Claude Code",
      "url": "https://mcpmarket.com/server/rewind",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpmarket.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpmarket.com",
        "site_name": "MCP Market"
      },
      "is_missing": false,
      "text": "... Rewind is a lightweight Model Context Protocol (MCP) server designed to enhance the reliability and flexibility of development workflows when using the Claude Code CLI. It introduces intelligent checkpointing, automatically saving project states before an AI agent makes modifications.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpmarket.com/server/rewind",
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
      "text": "Press Esc twice quickly, or type /rewind. Select the checkpoint and what to restore: Esc + Esc → Opens the rewind menu /rewind → Same thing, via command ... Use /model + arrow keys to adjust effort on the fly.\n\nEvery prompt creates an automatic checkpoint. If Claude breaks something, press Esc twice and rewind to any previous state in seconds. From zero to professional: Claude Code tips, tutorials and deep dive guides. Explore the hub · Claude Code automatically snapshots your code before every edit. Each time you send a prompt, a checkpoint is created. If Claude takes a wrong turn — breaks a feature, goes down the wrong path, or over-engineers a solution — you can rewind to any previous state in seconds. Checkpoints persist across sessions and are cleaned up automatically after 30 days.\n\nPress Esc twice quickly, or type /rewind. Select the checkpoint and what to restore: Esc + Esc → Opens the rewind menu /rewind → Same thing, via command ... \n\nUse /model + arrow keys to adjust effort on the fly. Or configure it permanently with effortLevel in settings or the CLAUDE_CODE_EFFORT_LEVEL environment variable. Show Thinking in Claude Code: Verbose & Extended Mode · Press Ctrl+O to watch Claude think. Spot problems early. Stop bad decisions before they become bad code. Ask Questions While Claude Code Is Working with /btw · Use /btw to ask quick questions while Claude Code is working. No interruption, no history pollution. If I have nothing worth saying, you won't hear from me. When I do, you'll be the first to know. 7,000+ professionals already trust this.",
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
      "title": "How to Use Checkpoints in Claude Code | ClaudeLog",
      "url": "https://claudelog.com/faqs/how-to-use-checkpoints-in-claude-code/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelog.com",
        "site_name": "ClaudeLog"
      },
      "is_missing": false,
      "text": "Discover Verdent AI (Free Trial) Run the /rewind command during any Claude Code session to open the checkpoint interface: ... The separation between code state and context state provides precise control over what gets restored.\n\nClaude Code v2.0.0 introduced the /rewind command, a built-in checkpoint system that allows you to restore code and conversation to previous states without relying on git. This integrated solution provides instant rollback for both professional developers and vibe coders who may be unfamiliar with version control systems. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. Each agent tackles different components while maintaining full context awareness, eliminating manual debugging bottlenecks and accelerating feature delivery. Discover Verdent AI (Free Trial) Run the /rewind command during any Claude Code session to open the checkpoint interface: ... \n\nThe separation between code state and context state provides precise control over what gets restored. When you select a checkpoint, the UI shows the original message and timestamp, indicating whether code or conversation has changed since that point.\n\nImportant: Rewinding does not affect files edited manually or via bash commands. It only restores changes made by Claude Code during the session. The checkpoint system operates independently of git, making it accessible to all users regardless of version control experience. Professional developers benefit from instant session-level rollback without git overhead, while vibe coders get safety nets without learning git commands. ... Complementary Tool - Professional developers use checkpoints for rapid iteration alongside git for commits · Automatic Tracking - Every change creates a checkpoint without manual intervention · The /rewind command allows me to experiment more safely with Claude Code.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelog.com/faqs/how-to-use-checkpoints-in-claude-code/",
        "search_provider": "anthropic",
        "age": "January 19, 2026"
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

 I should verify this by looking at the official support documentation for Claude Code Desktop to see if there's any explicit confirmation.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:28:00.299858Z",
  "stop_timestamp": "2026-04-24T07:28:00.653268Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01FLNw2nYV157VfYyQN2J87B",
  "name": "web_search",
  "input": {
    "query": "\"Claude Code Desktop\" CCD features Anthropic support article"
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
  "tool_use_id": "toolu_01FLNw2nYV157VfYyQN2J87B",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Anthropic Rebuilds Claude Code Desktop App Around Parallel Sessions - MacRumors",
      "url": "https://www.macrumors.com/2026/04/15/anthropic-rebuilds-claude-code-desktop-app/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "macrumors.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=macrumors.com",
        "site_name": "MacRumors"
      },
      "is_missing": false,
      "text": "The Claude desktop app update is rolling out now to Claude Code users on Pro, Max, Team, and Enterprise plans. In related news, Anthropic also announced Routines – a new way to set up Claude Code automations that run without an active session. A routine bundles a prompt, a repo, and any relevant connectors into a single configuration that can run on a schedule, fire from an API call, or trigger off a GitHub event such as a new pull request. Routines run on Claude Code&#x27;s web infrastructure rather than a local machine, but Anthropic has put in place daily run caps that scale by plan. Routines are available in research preview to Pro, Max, Team, and Enterprise users with Claude Code on the web enabled. For further details, check out Anthropic&#x27;s blog post. ... \n\nClaude Code users have been flooding GitHub and Reddit over the last few days with complaints that their usage limits are being exhausted at a suspiciously fast rate, with many reporting that sessions meant to last hours are literall\n\nAnthropic has released a redesigned Claude Code experience for its Claude desktop app, bringing in a new sidebar for managing multiple sessions, a drag-and-drop layout for arranging the workspace, and more. The new sidebar displays every active and recent session in one place, and users can filter by status, project, or environment, with the option to group sessions by project. A new side chat shortcut (Command + ;) also lets users branch a question off a running task without feeding extra context back into the main thread. Anthropic has also dropped more of the developer workflow into the app itself. \n\nThere's now an integrated terminal for running tests and builds, an in-app file editor for spot edits, a rebuilt diff viewer aimed at large changesets, and an expanded preview pane that handles HTML files and PDFs alongside local app servers. Each pane is also drag-and-drop friendly, so the layout can be arranged to suit.\n\nThe Claude desktop app update is rolling out now",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.macrumors.com/2026/04/15/anthropic-rebuilds-claude-code-desktop-app/",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code overview - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/overview",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Routines run on Anthropic-managed infrastructure, so they keep running even when your computer is off. They can also trigger on API calls or GitHub events. Create them from the web, the Desktop app, or by running /schedule in the CLI.\n\nClaude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools. Available in your terminal, IDE, desktop app, and browser. ... Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks. It understands your entire codebase and can work across multiple files and tools to get things done. Choose your environment to get started. Most surfaces require a Claude subscription or Anthropic Console account. The Terminal CLI and VS Code also support third-party providers. ... The full-featured CLI for working with Claude Code directly in your terminal.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/overview",
        "search_provider": "anthropic",
        "age": "3 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic's Claude Code gets automated 'routines' and a desktop makeover - SiliconANGLE",
      "url": "https://siliconangle.com/2026/04/14/anthropics-claude-code-gets-automated-routines-desktop-makeover/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "siliconangle.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=siliconangle.com",
        "site_name": "SiliconANGLE"
      },
      "is_missing": false,
      "text": "The updates include an integrated terminal, a faster diff viewer, in-app file editor and an expanded preview area. It suggests that Anthropic is trying to own the interface used by developers to interact with Claude.\n\nAnthropic PBC is making it easier to automate tasks using Claude Code without relying on autonomous artificial intelligence agents with the launch of a new service called “routines.” · The routines allow Claude Code users to run automations on the company’s own cloud-based infrastructure. “A routine is a saved Claude Code configuration: a prompt, one or more repositories, and a set of connectors packaged once and run automatically,” the company explained in a blog post today. Anthropic added that the routines are executed on cloud infrastructure managed by itself, so they will keep running even if users shut off their own laptops. \n\nIn the case of the former, it would scan the continuous integration/continuous deployment output, check for errors and then post a report. The company said routines are available to Claude Code Pro, Max, Team and Enterprise subscribers, but they must ensure the model is web-enabled. The use of routines will count against subscriber’s usage limits, and there are daily limits on their use too.\n\nAlongside the new routines, Anthropic revealed a redesigned Claude Code desktop application that tweaks the user interface to bring more functions to the forefront for users and reduce app-switching. “The redesign brings more commonly used tools into the app, so you can review, tweak and ship Claude’s work without bouncing to your editor,” the company explained in a second blog post. The updates include an integrated terminal, a faster diff viewer, in-app file editor and an expanded preview area. \n\nIt suggests that Anthropic is trying to own the interface used by developers to interact with Claude. By eliminating the need for users to “bounce” to their own editor, it encourages them to access the tool directly in",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://siliconangle.com/2026/04/14/anthropics-claude-code-gets-automated-routines-desktop-makeover/",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic's redesigned Claude Code desktop app lets you burn through tokens even faster - The New Stack",
      "url": "https://thenewstack.io/claude-code-desktop-redesign/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "thenewstack.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=thenewstack.io",
        "site_name": "The New Stack"
      },
      "is_missing": false,
      "text": "“The new app is built for how agentic coding actually feels now: many things in flight, and you in the orchestrator seat.” · Also new is an improved diff viewer, which Anthropic says has been “rebuilt for performance on larger changesets.” ...\n\nAnthropic redesigns the Claude Code desktop app with an integrated terminal, side chat, improved diff viewer, and rearrangeable panes for agentic coding. ... You’d think one major update to Claude Code would be enough for one day, but on Tuesday, Anthropic didn’t just launch routines for Claude Code but also a redesigned desktop experience for its coding agents — with a few small tweaks to the overall app, too. As Anthropic describes it, “The new app is built for how agentic coding actually feels now: many things in flight, and you in the orchestrator seat.” · This means you can now see all the active and recent sessions more easily, putting the emphasis on managing agents as they work on multiple repos and across them. \n\nTNS DAILY NEWSLETTER Receive a free roundup of the most recent TNS articles in your inbox each day. ... The New Stack does not sell your information or share it with unaffiliated third parties.\n\nOne of the marquee features is something users of OpenAI’s Codex will be quite familiar with: the updated Claude app now, for the first time, features an integrated terminal. That’s something I know I’ve been missing as I move between the two coding agents — especially given that my Claude tokens seem to be running out at an ever-increasing clip. “The new app is built for how agentic coding actually feels now: many things in flight, and you in the orchestrator seat.” · Also new is an improved diff viewer, which Anthropic says has been “rebuilt for performance on larger changesets.” Anthropic also added an in-app file editor for quick edits, as well as the ability to open HTML and PDF files in-app. \n\nOne nice feature here is that you can rearrange all of the optional panes (Preview",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://thenewstack.io/claude-code-desktop-redesign/",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic redesigns Claude Code desktop app for AI coding workflows | ETIH EdTech News — EdTech Innovation Hub",
      "url": "https://www.edtechinnovationhub.com/news/anthropic-rebuilds-claude-code-desktop-app-for-faster-parallel-coding-workflows",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "edtechinnovationhub.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=edtechinnovationhub.com",
        "site_name": "EdTech Innovation Hub"
      },
      "is_missing": false,
      "text": "He added: “It&#x27;s been my main ... An integrated terminal, in-app file editing, a rebuilt diff viewer, side chats, SSH connections - and a large amount of little quality of life improvements.” · The changes reduce the need to switch between tools, with Anthropic aiming to keep coding, review, file changes, and session management inside a single workflow rather than splitting them across terminal, editor, and browser. Anthropic describes Claude Code as an agentic coding tool that can read a codebase, edit files, run commands, and integrate with development tools...\n\nAnthropic Claude Code desktop app, AI coding tool, and developer workflows take focus as Anthropic adds integrated terminal, file editing, diff viewer, side chats, and SSH. ETIH edtech news covers AI skills, developer productivity, and how Claude Code is moving deeper into real software engineering workflows.\n\n\n\nAnthropic’s redesigned Claude Code desktop app introduces in-app file editing, integrated terminal, and parallel workflows for developers. Anthropic has launched a redesigned version of Claude Code in its desktop app, adding a rebuilt interface for parallel work as competition intensifies around AI coding tools for developers, engineering teams, and technical workflows. The update introduces an integrated terminal, in-app file editing, a rebuilt diff viewer, side chats, and SSH connections, extending Claude Code beyond chat-based assistance into a fuller development environment. For Anthropic, the move is less about adding another feature and more about making Claude Code a place where developers can stay longer and do more of the job. Felix Rieseberg, who works on Claude Code at Anthropic, said in a LinkedIn post: “Today is a big day! We're launching a ~ new ~ version of Claude Code in the desktop app.\n\n\n\nHe added: “It's been my main way to use Claude Code for the last few weeks.” · Rieseberg also highlighted the main additions to the desktop experience: “Some of the new featur",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.edtechinnovationhub.com/news/anthropic-rebuilds-claude-code-desktop-app-for-faster-parallel-coding-workflows",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Desktop Release (2025): What It Means for Developers, IT, and Productivity Teams",
      "url": "https://skywork.ai/blog/?p=30944",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "skywork.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=skywork.ai",
        "site_name": "skywork"
      },
      "is_missing": false,
      "text": "Claude Desktop Release (2025): What It Means for Developers, IT, and Productivity Teams\n\nMac and Windows laptops with AI assistant UI for code and documents\n\nUpdated on 2025-10-22\n\nClaude has moved from “great in the browser” to “present on your desktop,” and the late‑2025 updates turn that presence into real day‑to‑day leverage. Anthropic now offers macOS and Windows apps with enterprise‑friendly packaging and features aimed at coding, document creation, and governed rollout. Below is a practitioner take on what’s new, why it matters, and how to pilot it responsibly this quarter.\n\nWhat’s actually new (and confirmed)\n\n  • Cross‑platform availability with enterprise installers: Anthropic’s official download hub states that Claude Desktop supports PKG (macOS) and MSIX (Windows) installers, with org‑level update control for testing and staged deployment (Anthropic, 2025). See the details on the Claude download page.\n\n\n  • In‑app file creation and editing: In a 2025 announcement, Anthropic introduced the ability to create and edit common files directly in Claude (desktop and web), backed by sandboxed Python/Node execution for analysis and visualization. Read the Anthropic 2025 create‑files announcement.\n  • Agentic coding via Claude Code: Anthropic expanded access to “Claude Code,” enabling terminal‑style, checkpointed workflows and multi‑file edits—now reachable from the apps and the web. See the Anthropic 2025 Claude Code on the web post.\n  • Platform parity notes: As of late 2025, Anthropic’s download notes indicate Mac‑only conveniences like window sharing into chat and a voice input toggle; both macOS and Windows support screenshots and drag‑and‑drop.\n\n\n\nChatGPT’s Atlas is promising but still formalizing enterprise controls.\n\nPlans and gating to watch\n\n  • File creation/editing and code execution are available on paid plans (Pro, Max, Team, Enterprise) in Claude apps, per Anthropic’s 2025 announcements.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://skywork.ai/blog/?p=30944",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Average Ratings 1 Rating",
      "url": "https://slashdot.org/software/comparison/Claude-Code-vs-CodeCompanion.AI",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "slashdot.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=slashdot.org",
        "site_name": "slashdot"
      },
      "is_missing": false,
      "text": "Average Ratings 1 Rating\n\nTotal\nease\nfeatures\ndesign\nsupport\n\nAverage Ratings 0 Ratings\n\nTotal\nease\nfeatures\ndesign\nsupport\n\nNo User Reviews. Be the first to provide a review:\n\nWrite a Review\n\nDescription\n\nAnthropic has launched Claude Code, an AI-powered coding assistant, as part of the Claude 3.7 Sonnet update. This innovative tool enables developers to streamline intricate engineering processes directly from their terminal, acting as a collaborative partner in the coding journey. Claude Code possesses the capability to analyze and navigate through code, modify files, execute tests, as well as commit and push updates to GitHub, while also handling command-line tasks. Initial evaluations have showcased its remarkable efficiency, completing tasks like large-scale code refactoring and debugging in a significantly shorter timeframe than traditional methods.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://slashdot.org/software/comparison/Claude-Code-vs-CodeCompanion.AI",
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

 I'm going to check the Claude Code documentation directly to see if checkpoint and rewind functionality is mentioned for the desktop application.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:28:06.938441Z",
  "stop_timestamp": "2026-04-24T07:28:07.128464Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01GmWTAzBLVSCqVuHsEpo1Vy",
  "name": "web_fetch",
  "input": {
    "url": "https://code.claude.com/docs/en/checkpointing"
  },
  "message": "Fetching: https://code.claude.com/docs/en/checkpointing",
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
  "tool_use_id": "toolu_01GmWTAzBLVSCqVuHsEpo1Vy",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Checkpointing - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/checkpointing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "Checkpointing - Claude Code Docs\n\n[Skip to main content](#content-area)\n\n[Claude Code Docs home page![light logo](https://mintcdn.com/claude-code/c5r9_6tjPMzFdDDT/logo/light.svg?fit=max&auto=format&n=c5r9_6tjPMzFdDDT&q=85&s=78fd01ff4f4340295a4f66e2ea54903c)![dark logo](https://mintcdn.com/claude-code/c5r9_6tjPMzFdDDT/logo/dark.svg?fit=max&auto=format&n=c5r9_6tjPMzFdDDT&q=85&s=1298a0c3b3a1da603b190d0de0e31712)](https://code.claude.com/docs/en/overview)\n\n![US](https://d3gk2c5xim1je2.cloudfront.net/flags/US.svg)\n\nEnglish\n\nSearch...\n\n⌘KAsk AI\n\n* [Claude Developer Platform](https://platform.claude.com/)\n* [Claude Code on the Web](https://claude.ai/code)\n* [Claude Code on the Web](https://claude.ai/code)\n\nSearch...\n\nNavigation\n\nReference\n\nCheckpointing\n\n[Getting started](https://code.claude.com/docs/en/overview)[Build with Claude Code](https://code.claude.com/docs/en/sub-agents)[Deployment](https://code.claude.com/docs/en/third-party-integrations)[Administration](https://code.claude.com/docs/en/admin-setup)[Configuration](https://code.claude.com/docs/en/settings)[Reference](https://code.claude.com/docs/en/cli-reference)[Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)[What's New](https://code.claude.com/docs/en/whats-new)[Resources](https://code.claude.com/docs/en/legal-and-compliance)\n\n##### Reference\n\n* [CLI reference](https://code.claude.com/docs/en/cli-reference)\n* [Commands](https://code.claude.com/docs/en/commands)\n* [Environment variables](https://code.claude.com/docs/en/env-vars)\n* [Tools reference](https://code.claude.com/docs/en/tools-reference)\n* [Interactive mode](https://code.claude.com/docs/en/interactive-mode)\n* [Checkpointing](https://code.claude.com/docs/en/checkpointing)\n* [Hooks reference](https://code.claude.com/docs/en/hooks)\n* [Plugins reference](https://code.claude.com/docs/en/plugins-reference)\n* [Channels reference](https://code.claude.com/docs/en/channels-reference)\n\nOn this page\n\n* [How checkpoints work](#how-checkpoints-work)\n* [Automatic tracking](#automatic-tracking)\n* [Rewind and summarize](#rewind-and-summarize)\n* [Restore vs. summarize](#restore-vs-summarize)\n* [Common use cases](#common-use-cases)\n* [Limitations](#limitations)\n* [Bash command changes not tracked](#bash-command-changes-not-tracked)\n* [External changes not tracked](#external-changes-not-tracked)\n* [Not a replacement for version control](#not-a-replacement-for-version-control)\n* [See also](#see-also)\n\nReference\n\n# Checkpointing\n\nCopy page\n\nTrack, rewind, and summarize Claude’s edits and conversation to manage session state.\n\nCopy page\n\nClaude Code automatically tracks Claude’s file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track.\n\n## [​](#how-checkpoints-work) How checkpoints work\n\nAs you work with Claude, checkpointing automatically captures the state of your code before each edit. This safety net lets you pursue ambitious, wide-scale tasks knowing you can always return to a prior code state.\n\n### [​](#automatic-tracking) Automatic tracking\n\nClaude Code tracks all changes made by its file editing tools:\n\n* Every user prompt creates a new checkpoint\n* Checkpoints persist across sessions, so you can access them in resumed conversations\n* Automatically cleaned up along with sessions after 30 days (configurable)\n\n### [​](#rewind-and-summarize) Rewind and summarize\n\nPress `Esc` twice (`Esc` + `Esc`) or use the `/rewind` command to open the rewind menu. A scrollable list shows each of your prompts from the session. Select the point you want to act on, then choose an action:\n\n* **Restore code and conversation**: revert both code and conversation to that point\n* **Restore conversation**: rewind to that message while keeping current code\n* **Restore code**: revert file changes while keeping the conversation\n* **Summarize from here**: compress the conversation from this point forward into a summary, freeing context window space\n* **Never mind**: return to the message list without making changes\n\nAfter restoring the conversation or summarizing, the original prompt from the selected message is restored into the input field so you can re-send or edit it.\n\n#### [​](#restore-vs-summarize) Restore vs. summarize\n\nThe three restore options revert state: they undo code changes, conversation history, or both. “Summarize from here” works differently:\n\n* Messages before the selected message stay intact\n* The selected message and all subsequent messages get replaced with a compact AI-generated summary\n* No files on disk are changed\n* The original messages are preserved in the session transcript, so Claude can reference the details if needed\n\nThis is similar to `/compact`, but targeted: instead of summarizing the entire conversation, you keep early context in full detail and only compress the parts that are using up space. You can type optional instructions to guide what the summary focuses on.\n\nSummarize keeps you in the same session and compresses context. If you want to branch off and try a different approach while preserving the original session intact, use [fork](https://code.claude.com/docs/en/how-claude-code-works#resume-or-fork-sessions) instead (`claude --continue --fork-session`).\n\n## [​](#common-use-cases) Common use cases\n\nCheckpoints are particularly useful when:\n\n* **Exploring alternatives**: try different implementation approaches without losing your starting point\n* **Recovering from mistakes**: quickly undo changes that introduced bugs or broke functionality\n* **Iterating on features**: experiment with variations knowing you can revert to working states\n* **Freeing context space**: summarize a verbose debugging session from the midpoint forward, keeping your initial instructions intact\n\n## [​](#limitations) Limitations\n\n### [​](#bash-command-changes-not-tracked) Bash command changes not tracked\n\nCheckpointing does not track files modified by bash commands. For example, if Claude Code runs:\n\n```\nrm file.txt\nmv old.txt new.txt\ncp source.txt dest.txt\n```\n\nThese file modifications cannot be undone through rewind. Only direct file edits made through Claude’s file editing tools are tracked.\n\n### [​](#external-changes-not-tracked) External changes not tracked\n\nCheckpointing only tracks files that have been edited within the current session. Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session.\n\n### [​](#not-a-replacement-for-version-control) Not a replacement for version control\n\nCheckpoints are designed for quick, session-level recovery. For permanent version history and collaboration:\n\n* Continue using version control (ex. Git) for commits, branches, and long-term history\n* Checkpoints complement but don’t replace proper version control\n* Think of checkpoints as “local undo” and Git as “permanent history”\n\n## [​](#see-also) See also\n\n* [Interactive mode](https://code.claude.com/docs/en/interactive-mode) - Keyboard shortcuts and session controls\n* [Commands](https://code.claude.com/docs/en/commands) - Accessing checkpoints using `/rewind`\n* [CLI reference](https://code.claude.com/docs/en/cli-reference) - Command-line options\n\nWas this page helpful?\n\nYesNo\n\n[Interactive mode](https://code.claude.com/docs/en/interactive-mode)[Hooks reference](https://code.claude.com/docs/en/hooks)\n\n⌘I\n\n[Claude Code Docs home page![light logo](https://mintcdn.com/claude-code/c5r9_6tjPMzFdDDT/logo/light.svg?fit=max&auto=format&n=c5r9_6tjPMzFdDDT&q=85&s=78fd01ff4f4340295a4f66e2ea54903c)![dark logo](https://mintcdn.com/claude-code/c5r9_6tjPMzFdDDT/logo/dark.svg?fit=max&auto=format&n=c5r9_6tjPMzFdDDT&q=85&s=1298a0c3b3a1da603b190d0de0e31712)](https://code.claude.com/docs/en/overview)\n\n[x](https://x.com/AnthropicAI)[linkedin](https://www.linkedin.com/company/anthropicresearch)\n\nCompany\n\n[Anthropic](https://www.anthropic.com/company)[Careers](https://www.anthropic.com/careers)[Economic Futures](https://www.anthropic.com/economic-futures)[Research](https://www.anthropic.com/research)[News](https://www.anthropic.com/news)[Trust center](https://trust.anthropic.com/)[Transparency](https://www.anthropic.com/transparency)\n\nHelp and security\n\n[Availability](https://www.anthropic.com/supported-countries)[Status](https://status.anthropic.com/)[Support center](https://support.claude.com/)\n\nLearn\n\n[Courses](https://www.anthropic.com/learn)[MCP connectors](https://claude.com/partners/mcp)[Customer stories](https://www.claude.com/customers)[Engineering blog](https://www.anthropic.com/engineering)[Events](https://www.anthropic.com/events)[Powered by Claude](https://claude.com/partners/powered-by-claude)[Service partners](https://claude.com/partners/services)[Startups program](https://claude.com/programs/startups)\n\nTerms and policies\n\n[Privacy choices](#)[Privacy policy](https://www.anthropic.com/legal/privacy)[Disclosure policy](https://www.anthropic.com/responsible-disclosure-policy)[Usage policy](https://www.anthropic.com/legal/aup)[Commercial terms](https://www.anthropic.com/legal/commercial-terms)[Consumer terms](https://www.anthropic.com/legal/consumer-terms)\n\nAssistant\n\nResponses are generated using AI and may contain mistakes.",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://code.claude.com/docs/en/checkpointing"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Checkpointing - Claude Code Docs",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Checkpointing - Claude Code Docs",
      "subtitles": null,
      "url": "https://code.claude.com/docs/en/checkpointing",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
      "source": "claude"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 I need to verify whether checkpointing is exclusive to the terminal version or if it's also available in the Desktop and IDE versions. Let me look through the interactive mode documentation and release notes to see what features the desktop app actually supports. I think I have enough information now to piece together what I've found—the terminal version with CLI v2.0 and later definitely has the `/rewind` and `Esc+Esc` checkpointing features according to the official docs.

For the Desktop version, there's a feature request from a few weeks ago explicitly asking for per-prompt rewind functionality, with the user noting that the CLI has it but the Desktop app doesn't. There's also no headless rewind API documented. The recent Desktop redesign announcement mentions several new features like an integrated terminal and diff viewer, but notably doesn't include checkpoint or rewind capabilities.

Cowork, which is a separate product also within Claude Desktop, has no documented checkpoint or rewind feature either, despite using sandboxed VM execution. The key distinction here is that the checkpointing docs don't explicitly rule out the Desktop app—they just describe the keyboard shortcut that works in CLI—but the open feature request is the strongest evidence that it's actually missing from the Desktop interface.

Given the user's preference for separating facts from assumptions, I should be clear: the absence of documentation and the open feature request are verifiable facts, while any inference about why it's missing would be speculation. They're already familiar with this landscape from previous conversations, so I'll keep this focused and well-sourced without over-explaining.

</details>

Short answer: **No** — neither Cowork nor Claude Code Desktop (CCD) currently exposes the `/rewind` checkpoint feature. It remains a terminal/CLI feature as of today.

**Primary-source evidence**

*For Claude Code in terminal — `/rewind` confirmed:*
The official Claude Code checkpointing reference documents `/rewind` and the `Esc + Esc` shortcut, introduced with Claude Code v2.0 alongside Sonnet 4.5. It lives under the "Reference → Interactive mode" section of the docs, and the UX described (`Esc+Esc`, scrollable prompt list, five options including "Summarize from here") is inherently a terminal-interactive pattern. Claude Code tracks all changes made by its file editing tools: ... Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session. (Source: [code.claude.com/docs/en/checkpointing](https://code.claude.com/docs/en/checkpointing))

*For Claude Code Desktop (CCD) — `/rewind` not available:*
The strongest evidence is a feature request filed on the anthropics/claude-code repo about 3 weeks ago (#43755), titled "Per-prompt rewind/undo in Desktop App." The filer explicitly frames it as a gap: The CLI version supports /rewind — but I use the Desktop App as my primary interface, and this core functionality is missing from it. (Source: [github.com/anthropics/claude-code/issues/43755](https://github.com/anthropics/claude-code/issues/43755))

The April 14–15, 2026 CCD redesign announcement lists integrated terminal, in-app file editor, rebuilt diff viewer, side chats, and SSH — but does not mention checkpoints or rewind. A related issue (#16976) separately notes that there is currently no documented or supported way to restore / rewind a checkpoint in headless mode either, which is the plumbing a graphical CCD rewind would likely need.

*For Cowork — `/rewind` not documented:*
Across the four official Cowork help-center articles I checked (Get started, Use safely, Projects, Team/Enterprise), there is no mention of checkpoint, rewind, or per-prompt revert. Cowork's safety model is described in terms of sandboxing and human oversight, not rollback — Anthropic's guidance is to watch for unexpected behavior rather than rely on undo. Cowork executes code and commands on your behalf. While we surface what Claude is doing, you shouldn't expect to validate every individual command—instead, watch for unexpected patterns. (Source: [support.claude.com/en/articles/13364135](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely))

**Fact vs. inference**

- **Fact (documented):** `/rewind` exists in terminal Claude Code.
- **Fact (documented absence + active feature request):** CCD does not have a per-prompt rewind/undo UI; the community has formally requested it.
- **Inference (absence of evidence, not evidence of absence):** Cowork has no `/rewind` based on what's publicly documented. I did not find a direct Anthropic statement saying "Cowork has no checkpoints," so strictly speaking it's possible the feature exists but is undocumented — unlikely for a shipped feature on a research preview, but worth flagging.

**Practical workaround in the meantime**
For CCD, git commits before major changes remain the main rollback path — the docs explicitly frame `/rewind` as instant undo within a session that complements rather than replaces git. For Cowork, because work happens in a sandboxed VM against a folder you designate, the standard recommendation is to Back up important files before granting Cowork access and scope access to dedicated project folders.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe62-c386-73da-9fa4-4e8be51fb375",
  "updated_at": "2026-04-24T07:28:50.947295Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019dbe62-c385-7aa2-8f9e-8ef0a6504cf4"
}
```

</details>
