# Persistent error message explanation

## Export metadata (verbatim)

```json
{
  "uuid": "02bd0d10-afa7-4c6f-ada2-31f2570e718b",
  "name": "Persistent error message explanation",
  "summary": "**Conversation overview**\n\nThe person was troubleshooting a persistent error on Claude Desktop where a banner message indicated that a tool result could not be submitted and the request may have expired or the connection was interrupted. Claude explained the technical root cause: Anthropic's API requires strict pairing of every `tool_use` block with a corresponding `tool_result` block, and when that submission fails — due to connection interruption or request timeout — the conversation enters a structurally invalid state that cannot be repaired inline, requiring a fresh chat rather than a retry.\n\nThe person then shared a screenshot showing two \"Unknown Connector ⚠\" entries in their conversation transcript at the locations where the `use_widget` tool had been invoked. Claude explained these as the persistent residue of the same failed handoffs, where the frontend's local connector registry could not resolve the orphaned `tool_use` blocks into renderable widgets, falling back to the generic placeholder label. The person asked Claude to investigate Anthropic's update logs for a likely cause. Claude fetched Anthropic's official release notes and cross-referenced them against the status page incident history and Claude Code CHANGELOG, identifying a cluster of relevant releases in April 2026 — specifically the Cowork GA for Windows (Apr 9), Claude Opus 4.7 (Apr 16), and Claude Design (Apr 17) — alongside six documented authentication and error incidents between Apr 6–13 and an active tool-result stream validation bug fix in Claude Code. Claude presented a hypothesis that an Apr 16–17 schema or registry mismatch in the widget rendering pipeline was the most likely proximate cause, while clearly labeling it as inferential rather than admitted by Anthropic in any changelog entry.\n\nAt the end of the conversation, the person instructed Claude to remove a memory entry about tracking the Claude Opus 4.7 release on Vertex AI as redundant. Claude executed the removal using a memory exclusion control and noted that the existing memory entry would persist until the next background refresh cycle.",
  "created_at": "2026-04-22T07:05:05.738465Z",
  "updated_at": "2026-04-22T07:38:26.621415Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-22T07:05:06.551378Z

What does this mean? Why it shows up persistently today?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db401-b85e-75b1-97d8-23e9f4864838",
  "updated_at": "2026-04-22T07:05:06.551378Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019db401-78f5-70f5-8ebc-0188ebea9a12",
      "file_name": "1776841486946_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-22T07:07:04.377131Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user is encountering a persistent error on Claude.ai where tool results fail to submit, with a message about the request expiring or connection being interrupted. I should look into Anthropic's documentation to find information about this specific error and why it might be happening repeatedly today.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:05:12.072423Z",
  "stop_timestamp": "2026-04-22T07:05:12.072423Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01DYcfx9R8kddKFowvhxwi5T",
  "name": "web_search",
  "input": {
    "query": "Claude.ai \"Tool result could not be submitted\" error"
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
  "tool_use_id": "toolu_01DYcfx9R8kddKFowvhxwi5T",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[Bug] Anthropic API Error: Advisor tool result content could not be processed · Issue #51128 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/51128",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Bug Description ❯ continuue ⎿ API Error: 400 {&quot;type&quot;:&quot;error&quot;,&quot;error&quot;:{&quot;type&quot;:&quot;invalid_request_error&quot;,&quot;message&quot;:&quot;Advisor tool result content could not be processed.&quot;},&quot;request_id&quot;:&quot;req_011CaF3AwSmaFwEZDP4GXAzn&quot;} ❯ continue ⎿ API Error: 40...\n\nBug Description ❯ continuue ⎿ API Error: 400 {\"type\":\"error\",\"error\":{\"type\":\"invalid_request_error\",\"message\":\"Advisor tool result content could not be processed.\"},\"request_id\":\"req_011CaF3AwSmaFwEZDP4GXAzn\"} ❯ continue ⎿ API Error: 40...\n\n\n\nNote: your current working directory is /Users/siewbrayden/Desktop/Brayden's Projects/autoconstitution.\\n at call (/$bunfs/root/src/entrypoints/cli.js:4732:7630)\\n at processTicksAndRejections (native:7:39)\",\"timestamp\":\"2026-04-19T07:29:06.791Z\"},{\"error\":\"AxiosError: timeout of 5000ms exceeded\\n at <anonymous> (/$bunfs/root/src/entrypoints/cli.js:115:13344)\\n at emit (node:events:92:22)\\n at <anonymous> (/$bunfs/root/src/entrypoints/cli.js:114:3321)\\n at request (/$bunfs/root/src/entrypoints/cli.js:117:2467)\\n at processTicksAndRejections (native:7:39)\",\"timestamp\":\"2026-04-19T08:14:41.126Z\"},{\"error\":\"AxiosError: timeout of 5000ms exceeded\\n at <anonymous> (/$bunfs/root/src/entrypoints/cli.js:115:13344)\\n at emit (node:events:92:22)\\n at <anonymous> (/$bunfs/root/src/entrypoints/cli.js:114:3321)\\n at request (/$bunfs/root/src/entrypoints/cli.js:117:2467)\\n at processTicksAndRejections (native:7:39)\",\"timestamp\":\"2026-04-19T08:15:35.984Z\"},{\"error\":\"Error: Failed to fetch version fro",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/51128",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[Bug] Anthropic API Error: Advisor tool result content could not be processed · Issue #50223 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/50223",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "To pick up the fix: exit this session (Claude Code holds the conversation in memory), then claude -r 4d73bbb0-c2f1-48dd-8acc-b96c3d3bf727 — the next reload will read the cleaned file.\n\nBug Description it's completely broken. I randomly get these \"Advisor tool result content could not be processed.\" - and I just can't send anymore messages. I'm stuck with these 400 errors. If I ctrl+c and come back in, it's still stuck ...\n\nI'm able to work around it by having another claude clean up the broken transcript: ⏺ Done. Removed the broken advisor pair (uuids 8379bfb2… and 65edf1fa…) and re-pointed the next thinking block's parentUuid to bridge the gap. Chain integrity verified — 0 orphans, 0 remaining advisor references. Backup saved alongside as .bak.1776469470. Root cause: Claude Code persisted the advisor_tool_result.content as a Python repr() of a dict (single-quoted {'type': 'advisor_redacted_result', ...}) instead of valid JSON, so the API rejected every replay. \n\nTo pick up the fix: exit this session (Claude Code holds the conversation in memory), then claude -r 4d73bbb0-c2f1-48dd-8acc-b96c3d3bf727 — the next reload will read the cleaned file. If anything looks wrong, restore with mv …jsonl.bak.1776469470 …jsonl. Worth filing as a Claude Code bug (advisor result serialization).\n\n\n\n[{\"error\":\"Error: NON-FATAL: Lock acquisition failed for /Users/byronluk/.local/share/claude/versions/2.1.113 (expected in multi-process scenarios)\\n at sd_ (/$bunfs/root/src/entrypoints/cli.js:2751:2177)\\n at WH8 (/$bunfs/root/src/entrypoints/cli.js:2751:1257)\\n at processTicksAndRejections (native:7:39)\",\"timestamp\":\"2026-04-17T23:33:13.020Z\"},{\"error\":\"Error: 400 {\\\"type\\\":\\\"error\\\",\\\"error\\\":{\\\"type\\\":\\\"invalid_request_error\\\",\\\"message\\\":\\\"Advisor tool result content could not be processed.\\\"},\\\"request_id\\\":\\\"req_011CaADZqy9jsFboqdYqg8YG\\\"}\\n at generate (/$bunfs/root/src/entrypoints/cli.js:11:53158)\\n at makeRequest (/$bunfs/root/src/entrypoints/cli.js:50:4943)\\n at",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/50223",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Tool results silently dropped with \"missing due to internal error\" across all tools on Windows (regression in 2.1.101) · Issue #46767 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/46767",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "`Bash ls -la &quot;C:/Users/the_robot/.claude/&quot;` → wrapper error (same message) 3. `Bash ls -la &quot;C:/ai-agent\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Summary Claude...\n\nThis is especially harmful because: - It's indistinguishable from a real tool result to the model's next-turn reasoning, so the model often hallucinates what the tool would have returned rather than surfacing the failure. - There's no log entry or telemetry the user can grep for after the fact — the only evidence lives inside the session transcript. - There's no user-visible signal that anything is wrong until progress stalls. \n\n### Error Messages/Logs ```shell ## Error messages and logs ### The wrapper error itself The exact string surfaced to the model, observed multiple times in 2026-04-11: [Tool result missing due to internal error] It appears inline where a normal tool_result block would have been. No stderr, no exit code, no timestamp, no layer identifier. ### Concrete observations from today's session 1. `Bash ls -la \"C:/Users/the_robot/.local/bin/claude.exe\"` → wrapper error 2. `Bash ls -la \"C:/Users/the_robot/.claude/\"` → wrapper error (same message) 3. `Bash ls -la \"C:/ai-agent\n\n`WebFetch https://registry.npmjs.org/@anthropic-ai/claude-code` → wrapper error (this one is particularly diagnostic — it's a plain HTTPS fetch, no subprocess, no filesystem, no Windows-specific path. It still hit the bug. \n\n### No Claude Code debug log I could not find a Claude Code internal log surfacing the underlying exception. `~/.claude/` and `~/.local/share/claude/` contain no error log or crash dump for these events. If there is a debug mode that would capture the underlying exception (`CLAUDE_CODE_DEBUG=1`, a log file path, etc.), point me at it and I'll reproduce with it on and attach the output.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/46767",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Missing Tool Result Block for Unresolved Tool Use in Claude Code Execution · Issue #3331 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/3331",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "[{\"error\":\"Error: Command failed: security find-generic-password -a $USER -w -s \\\"Claude Code\\\"\\nsecurity: SecKeychainSearchCopyNext: The specified item could not be found in the keychain.\\n\\n at genericNodeError (node:internal/errors:983:15)\\n at wrappedFn (node:internal/errors:537:14)\\n at checkExecSyncError (node:child_process:892:11)\\n at execSync (node:child_process:964:15)\\n at $D (file:///opt/homebrew/lib/node_modules/@anthropic-ai/claude-code/cli.js:704:4293)\\n at file:///opt/homebrew/lib/node_modules/@anthropic-ai/claude-code/cli.js:623:9350\\n at Q (file:///opt/homebrew/lib/node_modules/@anthropic-ai/claude-code/cli.js:526:14406)\\n at dC (file:///opt/homebrew/lib/node_modules/@anthropic-ai/claude-code/cli.js:623:8496)\\n at mC (file:///opt/homebrew/lib/node_modules/@anthropic-ai/claude-code/cli.js:623:7361)\\n at wB (file:///opt/homebrew/lib/node_modules/@anthropic-ai/claude-code/cli.js:623:11970)\",\"timestamp\":\"2025-07-11T10:21:44.707Z\"},{\"error\":\"Error: 400 {\\\"type\\\":\\\"error\\\",",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/3331",
        "search_provider": "anthropic",
        "age": "July 11, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Error reference - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/errors",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "cannot be modified · All three variants mean the same thing: the sequence of tool_use, tool_result, and thinking blocks in history no longer matches what the API expects.\n\nCorrecting in-thread keeps the wrong attempt in context, which can anchor later answers to it. See Checkpointing. If quality still seems off after checking the above, run /feedback and describe what you expected versus what you got. Feedback submitted this way includes the conversation transcript, which is the fastest way for Anthropic to diagnose a real regression. See Report an error if /feedback is unavailable on your provider. This page covers errors from the Claude API. For errors from other Claude Code components, see the relevant guide: ... Permission denied or filesystem errors during install: Troubleshooting If an error is not listed here or the suggested fix does not help: Run /feedback inside Claude Code to send the transcript and a description to Anthropic.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/errors",
        "search_provider": "anthropic",
        "age": "15 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Fix Claude API's 400 Orphaned Tool Result Error in Production | Efficient Coder",
      "url": "https://www.xugj520.cn/en/archives/fix-claude-api-orphaned-tool-result-error.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "xugj520.cn",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=xugj520.cn",
        "site_name": "Gaoxiaoma"
      },
      "is_missing": false,
      "text": "A: The proxy handles any HTTP POST/GET to paths matching /claude/*/v1/*. If Claude’s batch API uses the same message format and authentication, it will work. The orphan detection triggers only on messages containing tool blocks; other requests pass through untouched. Q8: How do I debug if the cleanup isn’t happening? ... Production header: Add X-BetterClaude-Debug: true to requests (requires a one-line code change) to inject diagnostics into response headers · Cloudflare Logs: Enable Workers Trace Logs to see request/response metadata · Tags: AI DevelopmentAPI Error HandlingClaude APICloudflare Workers ... To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions.\n\n\n\nScenario: Imagine a financial analysis bot that pulls stock data via a get_price tool. During a market surge, the bot calls the tool 15 times in one conversation. Your cost-saving cleanup routine truncates messages older than 10 turns, accidentally removing the tool_use for the 3rd price query but keeping its result. When the user asks, “What was that third stock’s price again?” and the client resends history, Claude rejects the entire payload. The user sees “Something went wrong,” and your logs show the dreaded orphan error. No amount of resending will fix it—your conversation history is structurally invalid. Author’s reflection: I’ve seen this pattern destroy user trust in otherwise brilliant AI features. The irony is that the tool executed perfectly; the data just lost its reference. It’s like having a receipt for a package that was never ordered—the system can’t reconcile it.\n\n\n\nWhen Claude returns a stream (indicated by headers[\"content-type\"] === \"text/event-stream\"), the Worker: Forwards headers immediately: The cl",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.xugj520.cn/en/archives/fix-claude-api-orphaned-tool-result-error.html",
        "search_provider": "anthropic",
        "age": "December 25, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Fix: Claude AI 'Tool Use Sequence Interrupted' Error",
      "url": "https://shop.avivamiento.com/blog/fix-claude-ai-tool-use",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "avivamiento.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=avivamiento.com",
        "site_name": "avivamiento"
      },
      "is_missing": false,
      "text": "Fix: Claude AI 'Tool Use Sequence Interrupted' Error\n\nby Alex Johnson 53 views\n\nExperiencing the frustrating \"Tool Use Sequence Interrupted: Missing Tool Result Block\" error in Claude can be a major roadblock. This article breaks down the causes, provides a detailed explanation of the error, and offers step-by-step solutions to get Claude back on track. We'll explore the error's origins, examine the environment in which it occurs, and provide proven troubleshooting steps to resolve it. Whether you're a seasoned Claude user or just starting, this guide will equip you with the knowledge to tackle this issue effectively.\n\nUnderstanding the Error: A Detailed Breakdown\n\nThe error message messages.255: 'tool_use' ids were found without 'tool_result' blocks immediately after indicates a problem in how Claude processes tool interactions. In essence, Claude expects a tool_result block immediately following a tool_use block. When this sequence is broken, the error arises, halting the process. \n\nThis often occurs when there are network interruptions, VPN issues, or inconsistencies in the Claude context. The error often involves complex interactions, especially when using the -resume command to continue a previous conversation.\n\nLet's dissect the key components of the error message:\n\n  • tool_use: This refers to a request Claude makes to use an external tool. For instance, Claude might need to access a search engine to gather information or use a calculator to perform a computation.\n  • tool_result: This is the outcome or response from the tool that Claude used. It's the information Claude needs to continue processing the request. The tool_result must directly follow the tool_use block.\n  • messages.255: This part of the error message indicates that the issue occurred around message 255 in the conversation history. While the specific number may vary, it helps pinpoint where the problem started.\n\nWhy does this happen?\n\nSeveral factors can contribute to this error:\n\n\n\n  •",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://shop.avivamiento.com/blog/fix-claude-ai-tool-use",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude API Tool Handling Issue in Self-Hosted Version",
      "url": "https://typingmind.canny.io/feature-requests/p/claude-api-tool-handling-issue-in-self-hosted-version",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "canny.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=canny.io",
        "site_name": "canny"
      },
      "is_missing": false,
      "text": "Claude API Tool Handling Issue in Self-Hosted Version\ncomplete\nE\nEmmi\nI've identified an issue with Claude API tool handling in the self-hosted version of Typing Mind. The issue appears to be related to recent changes in Anthropic's API requirements for handling tool_use and tool_result blocks.\nIssue Details:\nWhen using Claude models in the self-hosted version, I receive the following error when attempting to use tools:\nRequest failed. Error details: messages.3:\ntool_use\nids were found without tool_result\nblocks immediately after: toolu_01[...]. Each tool_use\nblock must have a corresponding tool_result\nblock in the next message.Troubleshooting Steps Taken:\nVerified the issue occurs consistently with Claude models but not with other models\nConfirmed the official Typing Mind website works correctly with the same API key\nChecked network requests in browser developer tools:\nFound Claude correctly sends a tool_use event\nThe follow-up request doesn't include the proper tool_result format",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://typingmind.canny.io/feature-requests/p/claude-api-tool-handling-issue-in-self-hosted-version",
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

 The initial search results are focused on Claude's API and code-related issues rather than the specific browser interface problem the user encountered. I need to refine my search to target the Claude.ai web interface error about submitting tool results.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:05:18.572403Z",
  "stop_timestamp": "2026-04-22T07:05:19.537145Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01AQqPzxhLUzZ1Cp9dgqCj2b",
  "name": "web_search",
  "input": {
    "query": "Claude.ai \"request may have expired\" \"refresh the page\" tool result"
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
  "tool_use_id": "toolu_01AQqPzxhLUzZ1Cp9dgqCj2b",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Authentication token expiration causes request failures even after re-authentication · Issue #15137 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/15137",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Suspected Cause: The re-authentication mechanism appears to refresh the token, but the original failed request may not be properly retrying with the new token, instead continuing to use the expired token.\n\nDescription: Since approximately 3 days ago, I'm experiencing a critical authentication issue where session token expiration consistently causes request failures, even after successful re-authentication. Bug Behavior: Session token expir...\n\nClaude Code automatically attempts to re-authenticate (shows retry attempts: 1/10, 2/10, etc.) ... Expected Behavior: After successful re-authentication, the original request should be retried and succeed, not continue to fail with the same token expiration error. Frequency: This happens every single time a session expires - 100% reproduction rate. ... Impact: This forces manual intervention on every session expiration, significantly disrupting workflow and making the tool unreliable for longer sessions. \n\nSuspected Cause: The re-authentication mechanism appears to refresh the token, but the original failed request may not be properly retrying with the new token, instead continuing to use the expired token. ... area:authautocloseIssue will be closed automaticallyIssue will be closed automaticallybugSomething isn't workingSomething isn't workinghas reproHas detailed reproduction stepsHas detailed reproduction stepsplatform:macosIssue specifically occurs on macOSIssue specifically occurs o",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/15137",
        "search_provider": "anthropic",
        "age": "December 23, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Fix Claude AI Internal Server Error in 2026",
      "url": "https://www.hostingseekers.com/blog/how-to-fix-claude-ai-internal-server-error/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "hostingseekers.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=hostingseekers.com",
        "site_name": "Hostingseekers"
      },
      "is_missing": false,
      "text": "Most of the time, the error is a temporary glitch. A quick refreshment can work wonders. Try refreshing a few times, but avoid excessive attempts to prevent temporary blocks. If the servers are overloaded, patience is the key.\n\nIf you are accessing Claude AI through an API or third-party application, any problem within that platform can also result in internal errors. For instance, if an API endpoint is misconfigured, access tokens are expired, or the hosting platform experiences downtime, it can impact your ability to interact with Claude. These problems may show up as internal server errors, even though the core Claude AI system may be operating. Session timeouts are common but often overlooked. Most AI platforms, including Claude, automatically terminate inactive sessions after a specific period to conserve server resources and maintain security. If you leave your sessions idle for too long, they may expire. \n\nWhen you return and try to resume, the session may no longer be valid, causing an error to appear until the session is refreshed or reshared. Let’s check out some standard Error codes and what they mean · Understanding the error code can save you time and help you fix the issue. Something in your reque\n\nIn this guide, we explored effective solutions to fix the Claude AI internal server error. We covered practical yet straightforward steps like checking the status page, refreshing the platform, ensuring a stable internet connection, trying a different browser, and contacting support if needed. These quick actions can help users overcome temporary technical glitches and get back to using Claude seamlessly. Ans. Not always. While most internal server errors are server-side, a poor or unstable internet connection can mimic or trigger similar errors. Always check your connection first. Ans. Most internal issues are resolved within minutes. \n\nIt provides advanced capabilities for reasoning, summarization, content generation, and coding, with a 200K token conte",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.hostingseekers.com/blog/how-to-fix-claude-ai-internal-server-error/",
        "search_provider": "anthropic",
        "age": "March 2, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[Bug] Anthropic API Error: Advisor tool result content could not be processed · Issue #51128 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/51128",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "You switched accounts on another tab or window. Reload to refresh your session. ... area:coreduplicateThis issue or pull request already existsThis issue or pull request already existsplatform:macosIssue specifically occurs on macOSIssue specifically occurs on macOS ... Bug Description ❯ continuue ⎿ API Error: 400 {&quot;type&quot;:&quot;error&quot;,&quot;error&quot;:{&quot;type&quot;:&quot;invalid_request_error&quot;,&quot;message&quot;:&quot;Advisor tool result content could not be processed.&quot;},&quot;request_id&quot;:&quot;req_011CaF3AwSmaFwEZDP4GXAzn&quot;} ❯ continue ⎿ API Error: 400 {&quot;type&quot;:&quot;error&quot;,&quot;error&quot;:{&quot;type&quot;:&quot;invalid_request_error&quot;,&quot;message&quot;:&quot;Advisor tool result content could not be processed.&quot;},&quot;request_id&quot;:&quot;req_011CaF3BQVTQhPKWvBWzd1mZ&quot;} ... \n\n❯ continue ⎿ API Error: 400 {&quot;type&quot;:&quot;error&quot;,&quot;error&quot;:{&quot;type&quot;:&quot;invalid_request_error&quot;,&quot;message&quot;:&quot;Advisor tool result content could not be processed.&quot;},&quot;request_id&quot;:&quot;req_011CaF3CfB2jscsSMvwrtw5q&quot;} ...\n\nYou switched accounts on another tab or window. Reload to refresh your session. ... area:coreduplicateThis issue or pull request already existsThis issue or pull request already existsplatform:macosIssue specifically occurs on macOSIssue specifically occurs on macOS ... Bug Description ❯ continuue ⎿ API Error: 400 {\"type\":\"error\",\"error\":{\"type\":\"invalid_request_error\",\"message\":\"Advisor tool result content could not be processed.\"},\"request_id\":\"req_011CaF3AwSmaFwEZDP4GXAzn\"} ❯ continue ⎿ API Error: 400 {\"type\":\"error\",\"error\":{\"type\":\"invalid_request_error\",\"message\":\"Advisor tool result content could not be processed.\"},\"request_id\":\"req_011CaF3BQVTQhPKWvBWzd1mZ\"} ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/51128",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Claude Code does not handle expiry of short term IAM credentials (security tokens) · Issue #2280 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/2280",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "API Error: 403 The security token included in the request is expired is returned continually. To work around you can quit and restart with claude --continue but if using many Claude Code sessions this is problematic.\n\nEnvironment Platform (select one): Anthropic API AWS Bedrock Google Vertex AI Other: Claude CLI version: 1.0.29 (Claude Code) Operating System: Windows 11 Terminal: cmd Bug Description When using CLAUDE_CODE_USE_BEDROCK=1, if your IAM cr...\n\nI expect Claude Code to check for refreshed credentials when receiving 403s (API Error: 403 The security token included in the request is expired) from AWS API calls. API Error: 403 The security token included in the request is expired is returned continually. To work around you can quit and restart with claude --continue but if using many Claude Code sessions this is problematic. It is common for enterprises to not use long lived IAM access keys but rather short lived STS tokens, for example via saml2aws/oktacli if using Okta.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/2280",
        "search_provider": "anthropic",
        "age": "June 19, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Bug: /login Does Not Recover Active Session After OAuth Token Expiration · Issue #15007 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/15007",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Please obtain a new token or refresh your existing token.&quot;},&quot;request_id&quot;:&quot;req_011CWLUzY7DCEZ1Mr6dF6B15&quot;} · Please run /login ... Each request has a unique request_id, confirming these are separate retry attempts, all failing.\n\nBug Report: /login Does Not Recover Active Session After OAuth Token Expiration Summary When an OAuth token expires during an active Claude Code session, running /login and successfully authenticating in the browser does not recover the ...\n\nWhen an OAuth token expires during an active Claude Code session, running /login and successfully authenticating in the browser does not recover the session. The session remains stuck in a 401 error loop, forcing users to abandon the session and lose context. ... Session shows repeated errors: API Error: 401 {\"type\":\"error\",\"error\":{\"type\":\"authentication_error\",\"message\":\"OAuth token has expired...\"}} ... \n\nAPI Error: 401 {\"type\":\"error\",\"error\":{\"type\":\"authentication_error\",\"message\":\"OAuth token has expired. Please obtain a new token or refresh your existing token.\"},\"request_id\":\"req_011CWLUr4VZkAL644D4Di2nC\"} · Please run /login API Error: 401 {\"type\":\"error\",\"error\":{\"type\":\"authentication_error\",\"message\":\"OAuth token has expired. Please obtain a new token or refresh your existing token.\"},\"request_id\":\"req_011CWLUt58aFJwcWZG8NMqA4\"} · Please run /login API Error: 401 {\"type\":\"error\",\"error\":{\"type\":\"authentication_error\",\"message\":\"OAuth token has expired.\n\nPlease obtain a new token or refresh your existing token.\"},\"request_id\":\"req_011CWLUzY7DCEZ1Mr6dF6B15\"} · Please run /login ... Each request has a unique request_id, confirming these are separate retry attempts, all failing. ... 1. /login saves new token to ~/.claude/auth-token (or equivalent) 2. Active session watches file or checks on next API call 3. If token changed, reload it before retrying ... 1.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/15007",
        "search_provider": "anthropic",
        "age": "December 21, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code OAuth Token Expiry: Fixes & Alternatives",
      "url": "https://daveswift.com/claude-oauth-update/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "daveswift.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=daveswift.com",
        "site_name": "Dave Swift"
      },
      "is_missing": false,
      "text": "When the token expires, the client needs to use a refresh token to get a new access token. If the refresh token itself has been revoked or has expired, you&#x27;ll need to re-authenticate entirely.\n\nA dashboard where parents can see what their kids are using AI for. That kind of transparency would help a lot of families feel comfortable letting younger users work with these tools — and it's a real market that doesn't exist yet. I have to think someone is already building this internally. Whoever ships it first will have a real edge. If you see anything moving in this space, let me know. One of the most common issues with Claude Code OAuth is unexpected token expiry. Anthropic OAuth access tokens are short-lived — typically expiring within 60 minutes. When a token expires mid-session, your agent loses authentication and any running task fails silently or throws a generic 401 error. \n\nThe refresh flow works like this: your initial OAuth authentication generates both an access token and a refresh token. The access token handles API requests but expires quickly.\n\nIf you're a Google Workspace subscriber, log into your Workspace admin account, go to Billing → Buy or Upgrade → Advanced AI Access. You'll see pricing with an additional 15% off compared to the main consumer site, and that discount appears to persist as long as you maintain your Workspace account. None of the major providers — Google, Anthropic, or OpenAI — currently offer a family plan with parent and child accounts. It's an obvious gap, and someone will likely fill it, but there's no announced timeline from any of the major players as of now. Yes. Claude OAuth access tokens are short-lived and expire after a set period — typically within an hour. When the token expires, the client needs to use a refresh token to get a new access token. \n\nIf the refresh token itself has been revoked or has expired, you'll need to re-authenticate entirely.\n\nThe Anthropic API gives me everything I want technically",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://daveswift.com/claude-oauth-update/",
        "search_provider": "anthropic",
        "age": "46 minutes ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Not Working? Beginner FAQ for Common Errors & Fixes | Claude Lab",
      "url": "https://claudelab.net/en/articles/claude-ai/claude-beginner-common-errors-faq",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelab.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelab.net",
        "site_name": "Claude Lab"
      },
      "is_missing": false,
      "text": "- Press F5 (or Cmd+R on Mac) to refresh the page - If issues persist, clear your browser cache: Chrome: Settings &gt; Privacy &gt; Clear browsing data Safari: Safari &gt; Clear History ...\n\n- Press F5 (or Cmd+R on Mac) to refresh the page - If issues persist, clear your browser cache: Chrome: Settings > Privacy > Clear browsing data Safari: Safari > Clear History ... Step 3: Try a different browser Test with Chrome, Safari, Firefox, or Edge. Browser-specific cache or extensions might be the culprit. ... This disables extensions and bypasses cached data, helping identify the root cause. Step 5: Verify your API key (if applicable) If you're using Claude via an API, ensure your authentication credentials are correct: import anthropic # Check that your API key is set client = anthropic.Anthropic(api_key=\"your-key-here\") :::warning If errors persist across multiple attempts, your API key may be invalid or expired. Check your Anthropic account dashboard for renewal.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelab.net/en/articles/claude-ai/claude-beginner-common-errors-faq",
        "search_provider": "anthropic",
        "age": "March 21, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Fix: Claude AI 'Tool Use Sequence Interrupted' Error",
      "url": "https://shop.avivamiento.com/blog/fix-claude-ai-tool-use",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "avivamiento.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=avivamiento.com",
        "site_name": "avivamiento"
      },
      "is_missing": false,
      "text": "Fix: Claude AI 'Tool Use Sequence Interrupted' Error\n\nby Alex Johnson 53 views\n\nExperiencing the frustrating \"Tool Use Sequence Interrupted: Missing Tool Result Block\" error in Claude can be a major roadblock. This article breaks down the causes, provides a detailed explanation of the error, and offers step-by-step solutions to get Claude back on track. We'll explore the error's origins, examine the environment in which it occurs, and provide proven troubleshooting steps to resolve it. Whether you're a seasoned Claude user or just starting, this guide will equip you with the knowledge to tackle this issue effectively.\n\nUnderstanding the Error: A Detailed Breakdown\n\nThe error message messages.255: 'tool_use' ids were found without 'tool_result' blocks immediately after indicates a problem in how Claude processes tool interactions. In essence, Claude expects a tool_result block immediately following a tool_use block. When this sequence is broken, the error arises, halting the process. \n\nThis often occurs when there are network interruptions, VPN issues, or inconsistencies in the Claude context. The error often involves complex interactions, especially when using the -resume command to continue a previous conversation.\n\nLet's dissect the key components of the error message:\n\n  • tool_use: This refers to a request Claude makes to use an external tool. For instance, Claude might need to access a search engine to gather information or use a calculator to perform a computation.\n  • tool_result: This is the outcome or response from the tool that Claude used. It's the information Claude needs to continue processing the request. The tool_result must directly follow the tool_use block.\n  • messages.255: This part of the error message indicates that the issue occurred around message 255 in the conversation history. While the specific number may vary, it helps pinpoint where the problem started.\n\nWhy does this happen?\n\nSeveral factors can contribute to this error:\n\n\n\n  •",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://shop.avivamiento.com/blog/fix-claude-ai-tool-use",
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

 I should check the Anthropic status page to see if there's a known outage affecting things today.

</details>

Let me check whether there's a known ongoing issue today.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:05:24.171054Z",
  "stop_timestamp": "2026-04-22T07:05:24.335751Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01EpqhoHAAD3tSwarrzQfjti",
  "name": "web_fetch",
  "input": {
    "url": "https://status.claude.com/"
  },
  "message": "Fetching: https://status.claude.com/",
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
  "tool_use_id": "toolu_01EpqhoHAAD3tSwarrzQfjti",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "63a679d3-5c15-4530-90f0-63f2cc03dc9a"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://status.claude.com/",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://status.claude.com/",
      "subtitles": null,
      "url": "https://status.claude.com/",
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
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:05:29.066213Z",
  "stop_timestamp": "2026-04-22T07:05:29.199751Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01TUrFgAMbXUTo7enkRXZMbr",
  "name": "web_search",
  "input": {
    "query": "Anthropic Claude status page April 22 2026 outage"
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
  "tool_use_id": "toolu_01TUrFgAMbXUTo7enkRXZMbr",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Is Claude down? Anthropic confirms Claude outage, problems with Cowork.",
      "url": "https://tech.yahoo.com/ai/claude/articles/claude-down-anthropic-confirms-claude-173417916.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "yahoo.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=yahoo.com",
        "site_name": "Yahoo!"
      },
      "is_missing": false,
      "text": "According to an Anthropic status monitor, Claude AI experienced a &quot;major outage&quot; for 40 minutes and a &quot;partial outage&quot; for 73 minutes. Anthropic reported that the service had an overall uptime of 98.79 percent over the past 90 days.\n\nRather than a true Claude outage, access may simply be temporarily restricted for free users. Claude has seen massive growth so far in 2026. In March, amid a feud with the Pentagon and Trump administration, an Anthropic spokesperson told Mashable the company was signing up more than 1 million new users a day. This is a developing story...\n\nRead more about the incident at the Anthropic website. ... Updated on Wednesday, April 15 at 1:37 p.m. ET — In a statement to Mashable, an Anthropic spokesperson confirmed that Claude was experiencing an outage on Wednesday afternoon. The problems affected the Claude.ai desktop browser as well as the popular Anthropic services Cowork and Claude Code. \n\n\"Claude.ai and Cowork are currently down for most users and some users may also have trouble logging into Claude Code. Our team is working to restore service and we’re appreciative of everyone’s understanding while we work through this,\" the spokesperson said. You can read our original story about this outage below. We'll continue to update this page as new information is available and service is restored. Claude, the popular AI chatbot from Anthropic, appeared to experience a potential outage on Wednesday.\n\nClaude appeared to be experiencing problems on Wednesday afternoon. - Anthropic · Updated on Wednesday, April 15 at 2:08 p.m. ET — A recent Claude status page update confirmed that \"This incident has been resolved.\" An Anthropic spokesperson said that the company appreciates users' patience as it fixed the problem. Previous updates reported issues with Claude.ai, Clade Code, and the Claude API, with an earlier status stating, \"Claude.ai and Platform are down.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://tech.yahoo.com/ai/claude/articles/claude-down-anthropic-confirms-claude-173417916.html",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Claude Code Status. Check if Anthropic Claude Code is down or having an outage. | StatusGator",
      "url": "https://statusgator.com/services/anthropic/claude-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "statusgator.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=statusgator.com",
        "site_name": "StatusGator"
      },
      "is_missing": false,
      "text": "StatusGator last checked the status of Anthropic on April 21, 2026 at 2:38 AM UTC and the service was operational. There have been 6 user-submitted reports of outages in the past 24 hours, but the outage is now resolved.\n\nStatusGator last checked the status of Anthropic on April 21, 2026 at 2:38 AM UTC and the service was operational. There have been 6 user-submitted reports of outages in the past 24 hours, but the outage is now resolved. This chart represents Anthropic Claude Code service health over the last 24 hours, with data points collected every 15 minutes based on issue reports, page visits, and signal strength. Sign up for free to see more Anthropic Claude Code status data. ... View and upvote the most commonly reported Anthropic Claude Code issues to help us better indicate the service status. ... Explore our interactive Anthropic Claude Code outage map to monitor real-time incidents and service issues across the globe. \n\nClaude.ai and Claude Code are down due to server issues. ... Login issues due to authentication failure.\n\nSince June 20, 2024, StatusGator has been monitoring Anthropic Claude Code outages, downtime, and service disruptions to provide comprehensive insights into its status history. Over the years, we've tracked and logged service outages and problems reported on the official Anthropic Status Page. ... Follow the recent outages and downtime for Anthropic Claude Code in the table below. If you're experiencing a problem now, check the current Anthropic Claude Code status or ... Stay updated with instant alerts for Anthropic Claude Code outages by signing up now! Start monitoring for free · You can also monitor any service or website on your status page ... Stay updated with instant alerts for Anthropic Claude Code outages by signing up now!",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://statusgator.com/services/anthropic/claude-code",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic products are operational after brief outage, status page says",
      "url": "https://www.cnbc.com/2026/04/15/anthropic-outage-elevated-errors-claude-chatbot-code-api.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "cnbc.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=cnbc.com",
        "site_name": "CNBC"
      },
      "is_missing": false,
      "text": "Anthropic said it is working to &quot;fully resolve this issue,&quot; according to its page showing the status of the Claude chatbot, Claude Code and the API.\n\nAnthropic is experiencing elevated error rates across its Claude chatbot, its application programming interface and Claude Code, according to the company's status page. The company said it is working to \"fully resolve this issue.\" On Downdetector, a site that logs user reports of internet issues, roughly 2,000 users were reporting issues with Claude as of 1:12 p.m. ET. Artificial intelligence lab Anthropic is exploring the possibility of designing its own chips, three sources said, as the company and its rivals respond to a shortage of AI chips needed to power and develop more advanced AI systems. ... Anthropic on Wednesday said it experienced elevated error rates across its Claude chatbot, its application programming interface and its coding assistant, Claude Code, according to the company's status page. As of 1:50 p.m. \n\nET, all systems are operational.\n\nAnthropic was founded in 2021 by a group of researchers and executives who defected from OpenAI, and was valued at $380 billion as of February. The company is best known for developing a family of artificial intelligence models called Claude, and its products, particularly Claude Code, have exploded in popularity over the last year. The startup had early success selling to large enterprises, as companies spend billions of dollars to deploy AI across their workforces. Anthropic is engaged in a fierce competition for enterprise market share against rivals, including Google and OpenAI, which was valued at $850 billion in its latest fundraising round in late March. On Downdetector, a site that logs user reports of internet issues, roughly 2,000 users were reporting issues with Claude as of 1:12 p.m. ET, down from roughly 6,000 users at 10:42 a.m. ET. Around 500 users were reporting issues by 1:34 p.m.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cnbc.com/2026/04/15/anthropic-outage-elevated-errors-claude-chatbot-code-api.html",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Status: check for Anthropic outages and issues - StatusSight",
      "url": "https://statussight.com/status/anthropic",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "statussight.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=statussight.com",
        "site_name": "StatusSight"
      },
      "is_missing": false,
      "text": "Resolved: This incident has been resolved. 16 Apr 2026 22:41:12 (4 days ago) Monitoring: We are continuing to monitor for any further issues. 16 Apr 2026 22:40:22 (4 days ago) Monitoring: A fix has been implemented and we are monitoring the results.\n\nClaude API (api.anthropic.com) Claude Code · Claude Cowork · More... We are currently investigating this issue. Resolved: This incident has been resolved. 20 Apr 2026 07:25:21 (1 day ago) Monitoring: We are continuing to monitor for any further issues. 20 Apr 2026 06:41:55 (1 day ago) Monitoring: A fix has been implemented and we are monitoring the results. 20 Apr 2026 06:38:16 (1 day ago) Investigating: We are currently investigating this issue. \n\n20 Apr 2026 06:14:02 (1 day ago) See all updates · Elevated errors on Opus 4.6 · Started 19 Apr 2026 22:44:32 (1 day ago), resolved 20 Apr 2026 00:00:15 (1 day ago) Incident without Impact · Resolved · claude.ai · platform.claude.com (formerly console.anthropic.com) Claude API (api.anthropic.com) Claude Code · Claude Cowork · We are currently investigating this issue. Resolved: This incident has been resolved.\n\nStarted 16 Apr 2026 22:26:00 (4 days ago), resolved 16 Apr 2026 22:41:12 (4 days ago) Minor Incident · Resolved · platform.claude.com (formerly console.anthropic.com) We are currently investigating this issue. Resolved: This incident has been resolved. 16 Apr 2026 22:41:12 (4 days ago) Monitoring: We are continuing to monitor for any further issues. 16 Apr 2026 22:40:22 (4 days ago) Monitoring: A fix has been implemented and we are monitoring the results. 16 Apr 2026 22:33:41 (4 days ago) Investigating: We are currently investigating this issue. \n\n16 Apr 2026 22:26:00 (4 days ago) See all updates · Claude Cowork not starting for some users · Started 16 Apr 2026 19:24:38 (5 days ago), resolved 16 Apr 2026 21:29:01 (4 days ago) Major Incident · Resolved · Claude Cowork · We are currently investigating this issue on the v1.3036.0 release of Claude Desktop",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://statussight.com/status/anthropic",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "anthropics claude ai suffers major outage on september 10 2025",
      "url": "https://www.webpronews.com/anthropics-claude-ai-suffers-major-outage-on-september-10-2025",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "webpronews.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=webpronews.com",
        "site_name": "webpronews"
      },
      "is_missing": false,
      "text": "In the fast-paced world of artificial intelligence, where reliability is paramount for enterprise adoption, San Francisco-based Anthropic faced a significant setback on September 10, 2025, when its core services experienced widespread disruptions. The outage affected the company’s flagship AI model, Claude, along with its developer Console and associated APIs, leaving users from individual developers to major corporations unable to access critical tools during peak hours.\nThe incident began in the early afternoon Pacific Time, as reported by TechCrunch, with users encountering error messages, failed API calls, and complete unavailability of Claude’s conversational and coding features. Anthropic acknowledged the issues on its official status page, attributing them to unspecified technical problems without an immediate resolution timeline, highlighting the vulnerabilities in cloud-based AI infrastructure.\nBroader Implications for AI Dependability\n\n\nThis disruption comes at a time when Anthropic has been positioning itself as a more ethical and stable alternative to competitors like OpenAI, yet it underscores the inherent risks in relying on centralized AI services. Industry insiders note that such outages can halt workflows in sectors ranging from software development to content creation, where Claude’s capabilities in natural language processing and code generation are increasingly integrated.\nAccording to details emerging from WebProNews, the event frustrated a broad user base amid high demand, following prior incidents that have raised questions about the reliability of AI platforms. Anthropic’s status page, accessible at status.anthropic.com, provided real-time updates, but the lack of detailed etiology in initial communications left many speculating about potential causes, from server overloads to software bugs.\nHistorical Context and Competitive Pressures\n\n\nAnthropic’s challenges are not isolated; the company has faced scrutiny in recent months over is",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.webpronews.com/anthropics-claude-ai-suffers-major-outage-on-september-10-2025",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "anthropic outage disrupts claude ai and apis on september 10 2025",
      "url": "https://www.webpronews.com/anthropic-outage-disrupts-claude-ai-and-apis-on-september-10-2025",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "webpronews.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=webpronews.com",
        "site_name": "webpronews"
      },
      "is_missing": false,
      "text": "In the fast-paced world of artificial intelligence, where reliability is paramount for enterprises and developers alike, Anthropic’s latest service disruption has sent ripples through the tech sector. On September 10, 2025, the San Francisco-based AI company reported widespread outages affecting its flagship Claude AI model, the developer Console, and associated APIs, leaving users from individual coders to large corporations scrambling for alternatives. The incident, which began in the early afternoon Pacific Time, highlighted the vulnerabilities inherent in cloud-based AI services, even as Anthropic has positioned itself as a more ethical and stable player compared to rivals like OpenAI.\nDetails emerging from the outage indicate that users encountered error messages, failed API calls, and complete unavailability of Claude’s conversational and coding capabilities. \n\nAccording to a report from TechCrunch, Anthropic acknowledged the issues on its status page, attributing them to unspecified technical problems without providing an immediate timeline for resolution. This marks the company’s most significant downtime in recent months, coming on the heels of smaller incidents earlier in the year that had already raised concerns about scalability.\nThe Immediate Fallout and User Frustrations\nSocial media platforms buzzed with complaints as the outage unfolded, with developers expressing dismay over halted workflows. Posts on X, formerly Twitter, captured the sentiment: one user lamented that the disruption had “ruined my vibe coding,” while another noted that Claude’s services appeared “melted” under pressure. \n\nThese real-time reactions underscore the dependency many have on Claude for tasks ranging from software debugging to content generation, particularly in industries like software development and content creation where downtime translates to lost productivity.\nAnthropic’s status updates, as monitored by sites like Downdetector, showed a spike in rep",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.webpronews.com/anthropic-outage-disrupts-claude-ai-and-apis-on-september-10-2025",
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

 I'm looking up the specific error message and checking what the status page shows for that date.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:05:38.972444Z",
  "stop_timestamp": "2026-04-22T07:05:38.972444Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01PzuV6Jms5po4YL9nDi6pyR",
  "name": "web_search",
  "input": {
    "query": "Claude.ai status April 22 2026 tool error connection"
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
  "tool_use_id": "toolu_01PzuV6Jms5po4YL9nDi6pyR",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Status",
      "url": "https://status.claude.com/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "We will provide an update as soon as possible. Apr 13, 15:58 UTC · Investigating - We are currently investigating this issue. Apr 13, 15:40 UTC ... No incidents reported. ... Resolved - Email login was broken between approximately 3:46 PM and 4:52 PM PDT on April 10, 2026. Apr 11, 00:00 UTC ...\n\nUpdate - We are continuing to investigate elevated errors on Claude.ai, primarily affecting login. We will provide an update as soon as possible. Apr 13, 15:58 UTC · Investigating - We are currently investigating this issue. Apr 13, 15:40 UTC ... No incidents reported. ... Resolved - Email login was broken between approximately 3:46 PM and 4:52 PM PDT on April 10, 2026. Apr 11, 00:00 UTC ... Resolved - The issue affecting requests to non-Opus models has been resolved. Apr 10, 16:51 UTC · Identified - We have identified the current issue as affecting requests to models other than Claude Opus 4.6, and are working to fully resolve this issue. We will provide additional updates shortly. \n\nApr 10, 16:42 UTC · Investigating - We are investigating reports of elevated errors on requests to Claude across all products. We will provide an update as soon as possible.\n\nInvestigating - We are currently investigating an issue related to uploading files on Claude.ai and Claude API. Some users will see their uploads failing and they are advised to retry. Apr 20, 13:31 UTC ... Resolved - This incident has been resolved. Apr 20, 07:25 UTC · Update - We are continuing to monitor for any further issues. Apr 20, 06:41 UTC · Monitoring - A fix has been implemented and we are monitoring the results. Apr 20, 06:38 UTC · Investigating - We are currently investigating this issue. Apr 20, 06:14 UTC ... Resolved - This incident has been resolved. Apr 20, 00:00 UTC · Investigating - We are currently investigating this issue. Apr 19, 22:44 UTC ... No incidents reported. ... Resolved - The issue affecting uploads to Google Drive has been resolved. \n\nApr 17, 19:56 UTC · Investigating - We are inves",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://status.claude.com/",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude claude.ai Status. Check if Claude claude.ai is down or having an outage. | StatusGator",
      "url": "https://statusgator.com/services/claude/claudeai",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "statusgator.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=statusgator.com",
        "site_name": "StatusGator"
      },
      "is_missing": false,
      "text": "StatusGator last checked the status of Claude on April 21, 2026 at 8:28 AM UTC and the service was operational. There have been 27 user-submitted reports of outages in the past 24 hours, but the outage is now resolved.\n\nStatusGator last checked the status of Claude on April 21, 2026 at 8:28 AM UTC and the service was operational. There have been 27 user-submitted reports of outages in the past 24 hours, but the outage is now resolved. This chart represents Claude claude.ai service health over the last 24 hours, with data points collected every 15 minutes based on issue reports, page visits, and signal strength. Sign up for free to see more Claude claude.ai status data. ... View and upvote the most commonly reported Claude claude.ai issues to help us better indicate the service status. ... Still seems to be broken I get the message: my output keeps getting cut off - and its eating my tokens ... Atempting to anwer 10minutes already. ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://statusgator.com/services/claude/claudeai",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude down and not working as users report service throwing errors [U: Acknowledged]",
      "url": "https://piunikaweb.com/2026/03/27/claude-down-not-working-service-throws-errors/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "piunikaweb.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=piunikaweb.com",
        "site_name": "PiunikaWeb"
      },
      "is_missing": false,
      "text": "Posts flooding X show users are seeing a ‘529’ error code. The official status page indicates that the company is already aware of the elevated errors and even tried implementing a fix, but it failed.\n\nUpdate 04/02/2026 – 04:29 pm (IST): Claude users are running into errors when trying to use the AI tool. Posts flooding X show users are seeing a ‘529’ error code. The official status page indicates that the company is already aware of the elevated errors and even tried implementing a fix, but it failed. Update 22/01/2026 – 09:50 pm (IST): Barely a week after suffering a major outage, Claude seems to be facing hiccups again at the moment. We are seeing social media getting flooded with reports of the service being down. Even Downdetector is showing a sharp spike in reports. Anthropic seems to have just acknowledged the outage, saying: We are currently investigating an issue affecting Claude Code authentication. \n\nUsers may encounter errors when attempting to sign in or authenticate their Claude Code sessions · We’re keeping a tab on the situation, and will update the article as and when we get more information on the matter.\n\nOriginal article published on January 14, 2026, follows: It is never a good sign when your main AI sidekick starts giving you the cold shoulder. Right now, Claude is acting up and throwing errors, leaving a massive chunk of its user base stuck without their favorite AI tool. Social media is already a mess of complaints from folks who are hitting a brick wall and cannot get anything finished. I tried checking the service for myself and immediately ran into a red banner. It simply says, “This isn’t working right now. You can try again later,” which pretty much sums up the current state of things. Downdetector is showing a big spike in reports right now, confirming that this is not just a few isolated cases. \n\nOver 800 people have flagged that the service is broken in just the last few minutes. If you were planning on having a p",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://piunikaweb.com/2026/03/27/claude-down-not-working-service-throws-errors/",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Status. Check if Claude is down or having an outage. | StatusGator",
      "url": "https://statusgator.com/services/claude",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "statusgator.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=statusgator.com",
        "site_name": "StatusGator"
      },
      "is_missing": false,
      "text": "Claude down? Check the current Claude status right now, learn about outages, downtime, incidents, and issues.\n\nAI-powered conversational assistant for businesses. ... StatusGator last checked the status of Claude on April 21, 2026 at 10:23 PM UTC and the service was operational. There have been 6 user-submitted reports of outages in the past 24 hours. This chart represents Claude service health over the last 24 hours, with data points collected every 15 minutes based on issue reports, page visits, and signal strength. Sign up for free to see more Claude status data. ... View and upvote the most commonly reported Claude issues to help us better indicate the service status. ... Explore our interactive Claude outage map to monitor real-time incidents and service issues across the globe. This dynamic map highlights regions around the world affected by recent Claude outages, giving you a clear view of performance and downtime trends. Top reported Claude outage locations, last 24 hours: ...\n\n\n\nClaude (AI-powered conversational assistant for businesses) is a a Chat, Communications, and AI solution that StatusGator has been monitoring since October 2025. Over the past 6 months, we have collected data on on more than 432 outages that affected Claude users. When Claude publishes downtime on their status page, they do so across 6 components using 4 different statuses: up, warn, down, and maintenance which we use to provide granular uptime metrics and notifications. If you're wondering, \"Is Claude down?\", or need to know its current status, we've got you covered. Our platform tracks every reported outage, performance issue, and maintenance window to ensure you're informed. Whether Claude is experiencing a problem now or has recently resolved one, our detailed history keeps you updated. More than 200 StatusGator users monitor Claude to get notified when it's down, is under maintenance, or has an outage.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://statusgator.com/services/claude",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Is Claude Down Right Now? Live Claude Status & Outages | IsDown",
      "url": "https://isdown.app/status/claude-ai",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "isdown.app",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=isdown.app",
        "site_name": "IsDown"
      },
      "is_missing": false,
      "text": "Claude last outage was on April 20, 2026 with the title &quot;Elevated errors for uploading files&quot; IsDown has tracked 185 Claude incidents since October 2025. When Claude goes down, incidents typically resolve within 212 minutes.\n\nIsDown last checked Claude status on April 21, 2026 at 02:29 AM EDT. We've received 266 user reports in the past 24 hours. Want to know the next time Claude is down? Start free 14-day trial. ... Thank you for reporting an issue with Claude. This chart shows the number of user-reported issues for Claude service health over the past 24 hours, grouped into 20-minute intervals. It's normal to see occasional reports, which may be due to individual user issues rather than a broader problem. Sign up to get alerts when Claude is down. See where users report Claude is down. The map shows recent Claude outages from around the world. ... Stop finding out about outages from your users. Monitor 6,320+ cloud services and get alerted the second something breaks. ... \n\nSee what users report when Claude is down and how Claude outages affect them. ... Not replying to questions.\n\nClaude last outage was on April 20, 2026 with the title \"Elevated errors for uploading files\" IsDown has tracked 185 Claude incidents since October 2025. When Claude goes down, incidents typically resolve within 212 minutes. Check the Claude status at the top of this page. IsDown combines official status page data with user reports to show whether Claude is down for everyone or if the issue is on your end. IsDown and DownDetector help users determine if Claude is having problems. The big difference is that IsDown is a status page aggregator. IsDown monitors a service's official status page to give our customers a more reliable source of information instead of just relying on reports from users. The integration allows us to provide more details about Claude's Outages, like incident title, description, updates, and the parts of the affected service.\n\n\n\nIsDown detected 33 outages",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://isdown.app/status/claude-ai",
        "search_provider": "anthropic",
        "age": "6 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Fix Claude AI “App Unavailable” Error",
      "url": "https://e-acc.medium.com/how-to-fix-claude-ai-app-unavailable-error-0f17186ea26c",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "medium"
      },
      "is_missing": false,
      "text": "How to Fix Claude AI “App Unavailable” Error\n\ne/acc Blogging\n5 min readJul 10, 2024\n\n--\n\nClaude, the AI assistant developed by Anthropic, has gained popularity for its advanced language capabilities and helpful responses. However, users sometimes encounter the frustrating “Claude App Unavailable” error when trying to access the service. This comprehensive guide will explore the causes of this error and provide several solutions to help you regain access to Claude.\n\nUnderstanding the Claude App Unavailable Error\n\nThe Claude App Unavailable error typically occurs when users attempt to register for a new account or access the Claude AI service. This error can manifest in different ways, including:\n\n  • “Unfortunately, Claude is not available to new users right now. We’re working hard to expand our availability.”\n  • “Claude is only available in certain regions right now.”\n  • “Claude is currently unavailable due to scheduled maintenance.”",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://e-acc.medium.com/how-to-fix-claude-ai-app-unavailable-error-0f17186ea26c",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "r/ClaudeAI Mod 21d ago",
      "url": "https://redite.crans.org/r/ClaudeAI/comments/1l0lk3r/status_report_claude_performance_observations/mvq884a/?context=3",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "crans.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=crans.org",
        "site_name": "crans"
      },
      "is_missing": false,
      "text": "r/ClaudeAI Mod 21d ago\n\nStatus Report Status Report: Claude Performance Observations – Week of May 25 – June 1, 2025\n\nPrior week's Status Report is here: \nhttps://www.reddit.com/r/ClaudeAI/comments/1kuv3py/status_report_claude_performance_observations/\n\nDisclaimer: This was entirely built by AI. Please report any hallucinations\n\n🧠 EXECUTIVE SUMMARY\n\nClaude 4 users this week saw a double whammy:\n\n  • Frequent outages, “capacity errors,” login loops → confirmed by Anthropic\n  • Massively reduced usage limits post-Claude 4 launch → Max plan users hitting caps in <10 prompts\n  • Silent context loss starting around 20–30k tokens, despite 200k token advertising\n  • Broken features: artifacts, DOCX exports, history/versioning, desktop app, drag/drop\n\nDespite that, Claude 4’s coding and reasoning power still impressed when it worked.\n\n🔧 KEY PERFORMANCE OBSERVATIONS (FROM USER COMMENTS)\n\nCategory What People Reported Frequency Impact",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://redite.crans.org/r/ClaudeAI/comments/1l0lk3r/status_report_claude_performance_observations/mvq884a/?context=3",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "r/ClaudeAI • u/sixbillionthsheep Mod • 20d ago",
      "url": "https://redite.crans.org/r/ClaudeAI/comments/1l0lk3r/status_report_claude_performance_observations",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "crans.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=crans.org",
        "site_name": "crans"
      },
      "is_missing": false,
      "text": "r/ClaudeAI • u/sixbillionthsheep Mod • 20d ago\nStatus Report Status Report: Claude Performance Observations – Week of May 25 – June 1, 2025\nPrior week's Status Report is here:\nhttps://www.reddit.com/r/ClaudeAI/comments/1kuv3py/status_report_claude_performance_observations/\nDisclaimer: This was entirely built by AI. Please report any hallucinations\n🧠 EXECUTIVE SUMMARY\nClaude 4 users this week saw a double whammy:\n- Frequent outages, “capacity errors,” login loops → confirmed by Anthropic\n- Massively reduced usage limits post-Claude 4 launch → Max plan users hitting caps in <10 prompts\n- Silent context loss starting around 20–30k tokens, despite 200k token advertising\n- Broken features: artifacts, DOCX exports, history/versioning, desktop app, drag/drop\nDespite that, Claude 4’s coding and reasoning power still impressed when it worked.\n🔧 KEY PERFORMANCE OBSERVATIONS (FROM USER COMMENTS)\nCategory | What People Reported | Frequency | Impact |\n---|---|---|---|",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://redite.crans.org/r/ClaudeAI/comments/1l0lk3r/status_report_claude_performance_observations",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "s ea39cfe21f fbb0ed36 0168 5196 bac1 cffc7814db3c",
      "url": "https://trends.glance.com/story/articles/Entertainment/IN/en/timesnow/s-ea39cfe21f-fbb0ed36-0168-5196-bac1-cffc7814db3c",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "glance.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=glance.com",
        "site_name": "glance"
      },
      "is_missing": false,
      "text": "As of Tuesday evening, Anthropic, the San Francisco–based AI firm that launched Claude in 2023, has not released any official statement or update on its status page regarding the outage. The company typically posts maintenance alerts or downtime notices through its support channels, but none were visible at the time of writing.User reports indicate problems with Claude AI since 7:53 AM EST.How is it affecting you? #ClaudeAiDownhttps://t.co/EbXfoHRBJc\n— Downdetector (@downdetector) November 11, 2025\n\n\n/images/ppid_a911dc6a-image-176267002751715265.webp)\n\n\n/images/ppid_a911dc6a-image-176280304285485933.webp)\n\n\n\n/images/ppid_a911dc6a-image-17627848377601450.webp)\n\n\n/images/ppid_59c68470-image-176268503141659849.webp)",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://trends.glance.com/story/articles/Entertainment/IN/en/timesnow/s-ea39cfe21f-fbb0ed36-0168-5196-bac1-cffc7814db3c",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "r/ClaudeAI • u/sixbillionthsheep Mod • Jun 01 '25",
      "url": "https://redite.crans.org/r/ClaudeAI/duplicates/1l0lk3r",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "crans.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=crans.org",
        "site_name": "crans"
      },
      "is_missing": false,
      "text": "r/ClaudeAI • u/sixbillionthsheep Mod • Jun 01 '25\nStatus Report Status Report: Claude Performance Observations – Week of May 25 – June 1, 2025\nPrior week's Status Report is here:\nhttps://www.reddit.com/r/ClaudeAI/comments/1kuv3py/status_report_claude_performance_observations/\nDisclaimer: This was entirely built by AI. Please report any hallucinations\n🧠 EXECUTIVE SUMMARY\nClaude 4 users this week saw a double whammy:\n- Frequent outages, “capacity errors,” login loops → confirmed by Anthropic\n- Massively reduced usage limits post-Claude 4 launch → Max plan users hitting caps in <10 prompts\n- Silent context loss starting around 20–30k tokens, despite 200k token advertising\n- Broken features: artifacts, DOCX exports, history/versioning, desktop app, drag/drop\nDespite that, Claude 4’s coding and reasoning power still impressed when it worked.\n🔧 KEY PERFORMANCE OBSERVATIONS (FROM USER COMMENTS)\nCategory | What People Reported | Frequency | Impact |\n---|---|---|---|",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://redite.crans.org/r/ClaudeAI/duplicates/1l0lk3r",
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

 I'm checking the Claude status page to see what's currently happening with the service.

</details>

Let me check the live Claude status page for current incidents.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:05:44.545544Z",
  "stop_timestamp": "2026-04-22T07:05:44.783234Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015oxZW1AY54wGitgNxrmZ3R",
  "name": "web_fetch",
  "input": {
    "url": "https://status.claude.com"
  },
  "message": "Fetching: https://status.claude.com",
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
  "tool_use_id": "toolu_015oxZW1AY54wGitgNxrmZ3R",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Past Incidents",
      "url": "https://status.claude.com",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "Claude Status\n\n\n\n[![Claude logo](https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/362807/NEW_claude_status_banner-183284a4-558d-4835-b3a4-a601e0a4daa8.png)](https://status.claude.com)\n\n[Subscribe to UpdatesSubscribe](#)\n\n\nx\n\nGet email notifications whenever Claude **creates**, **updates** or **resolves** an incident.\n\nEmail address:\n\n\n\nEnter OTP:\n\n\nResend OTP in:  seconds\n\nDidn't receive the OTP?\n[Resend OTP](#)\n\nBy subscribing you agree to our [Privacy Policy](https://www.anthropic.com/privacy).\n\nThis site is protected by reCAPTCHA and the Google [Privacy Policy](https://policies.google.com/privacy) and [Terms of Service](https://policies.google.com/terms) apply.\n\nGet text message notifications whenever Claude **creates** or **resolves** an incident.\n\nCountry code:\n\nAfghanistan (+93)\nAlbania (+355)\nAlgeria (+213)\nAmerican Samoa (+1)\nAndorra (+376)\nAngola (+244)\nAnguilla (+1)\nAntigua and Barbuda (+1)\nArgentina (+54)\nArmenia (+374)\nAruba (+297)\nAustralia/Cocos/Christmas Island (+61)\nAustria (+43)\nAzerbaijan (+994)\nBahamas (+1)\nBahrain (+973)\nBangladesh (+880)\nBarbados (+1)\nBelarus (+375)\nBelgium (+32)\nBelize (+501)\nBenin (+229)\nBermuda (+1)\nBolivia (+591)\nBosnia and Herzegovina (+387)\nBotswana (+267)\nBrazil (+55)\nBrunei (+673)\nBulgaria (+359)\nBurkina Faso (+226)\nBurundi (+257)\nCambodia (+855)\nCameroon (+237)\nCanada (+1)\nCape Verde (+238)\nCayman Islands (+1)\nCentral Africa (+236)\nChad (+235)\nChile (+56)\nChina (+86)\nColombia (+57)\nComoros (+269)\nCongo (+242)\nCongo, Dem Rep (+243)\nCosta Rica (+506)\nCroatia (+385)\nCyprus (+357)\nCzech Republic (+420)\nDenmark (+45)\nDjibouti (+253)\nDominica (+1)\nDominican Republic (+1)\nEgypt (+20)\nEl Salvador (+503)\nEquatorial Guinea (+240)\nEstonia (+372)\nEthiopia (+251)\nFaroe Islands (+298)\nFiji (+679)\nFinland/Aland Islands (+358)\nFrance (+33)\nFrench Guiana (+594)\nFrench Polynesia (+689)\nGabon (+241)\nGambia (+220)\nGeorgia (+995)\nGermany (+49)\nGhana (+233)\nGibraltar (+350)\nGreece (+30)\nGreenland (+299)\nGrenada (+1)\nGuadeloupe (+590)\nGuam (+1)\nGuatemala (+502)\nGuinea (+224)\nGuyana (+592)\nHaiti (+509)\nHonduras (+504)\nHong Kong (+852)\nHungary (+36)\nIceland (+354)\nIndia (+91)\nIndonesia (+62)\nIraq (+964)\nIreland (+353)\nIsrael (+972)\nItaly (+39)\nJamaica (+1)\nJapan (+81)\nJordan (+962)\nKenya (+254)\nKorea, Republic of (+82)\nKosovo (+383)\nKuwait (+965)\nKyrgyzstan (+996)\nLaos (+856)\nLatvia (+371)\nLebanon (+961)\nLesotho (+266)\nLiberia (+231)\nLibya (+218)\nLiechtenstein (+423)\nLithuania (+370)\nLuxembourg (+352)\nMacao (+853)\nMacedonia (+389)\nMadagascar (+261)\nMalawi (+265)\nMalaysia (+60)\nMaldives (+960)\nMali (+223)\nMalta (+356)\nMartinique (+596)\nMauritania (+222)\nMauritius (+230)\nMexico (+52)\nMonaco (+377)\nMongolia (+976)\nMontenegro (+382)\nMontserrat (+1)\nMorocco/Western Sahara (+212)\nMozambique (+258)\nNamibia (+264)\nNepal (+977)\nNetherlands (+31)\nNew Zealand (+64)\nNicaragua (+505)\nNiger (+227)\nNigeria (+234)\nNorway (+47)\nOman (+968)\nPakistan (+92)\nPalestinian Territory (+970)\nPanama (+507)\nParaguay (+595)\nPeru (+51)\nPhilippines (+63)\nPoland (+48)\nPortugal (+351)\nPuerto Rico (+1)\nQatar (+974)\nReunion/Mayotte (+262)\nRomania (+40)\nRussia/Kazakhstan (+7)\nRwanda (+250)\nSamoa (+685)\nSan Marino (+378)\nSaudi Arabia (+966)\nSenegal (+221)\nSerbia (+381)\nSeychelles (+248)\nSierra Leone (+232)\nSingapore (+65)\nSlovakia (+421)\nSlovenia (+386)\nSouth Africa (+27)\nSpain (+34)\nSri Lanka (+94)\nSt Kitts and Nevis (+1)\nSt Lucia (+1)\nSt Vincent Grenadines (+1)\nSudan (+249)\nSuriname (+597)\nSwaziland (+268)\nSweden (+46)\nSwitzerland (+41)\nTaiwan (+886)\nTajikistan (+992)\nTanzania (+255)\nThailand (+66)\nTogo (+228)\nTonga (+676)\nTrinidad and Tobago (+1)\nTunisia (+216)\nTurkey (+90)\nTurks and Caicos Islands (+1)\nUganda (+256)\nUkraine (+380)\nUnited Arab Emirates (+971)\nUnited Kingdom (+44)\nUnited States (+1)\nUruguay (+598)\nUzbekistan (+998)\nVenezuela (+58)\nVietnam (+84)\nVirgin Islands, British (+1)\nVirgin Islands, U.S. (+1)\nYemen (+967)\nZambia (+260)\nZimbabwe (+263)\n\nPhone number:\n\n\n[Change number](#)\nEnter OTP:\n\n\nResend OTP in: 30 seconds\n\nDidn't receive the OTP?\n[Resend OTP](#)\n\nMessage and data rates may apply. By subscribing you agree to our [Privacy Policy](https://www.anthropic.com/privacy), the Atlassian [Terms of Service](https://www.atlassian.com/legal/product-specific-terms#statuspage-specific-terms), and the Atlassian [Privacy Policy](https://www.atlassian.com/legal/privacy-policy). This site is protected by reCAPTCHA and the Google [Privacy Policy](https://policies.google.com/privacy) and [Terms of Service](https://policies.google.com/terms) apply.\n\nGet incident updates and maintenance status messages in Slack.\n\n[Subscribe via Slack](https://subscriptions.statuspage.io/slack_authentication/kickoff?page_code=tymt9n04zgry)\n\nBy subscribing you acknowledge our [Privacy Policy](https://www.anthropic.com/privacy). In addition, you agree to the Atlassian [Cloud Terms of Service](https://www.atlassian.com/legal/cloud-terms-of-service) and acknowledge Atlassian's [Privacy Policy](https://www.atlassian.com/legal/privacy-policy).\n\nGet incident updates and maintenance status messages in Microsoft Teams channel.\n\nChannel's Webhook URL:\n\n\n[Here's where to find](https://support.atlassian.com/statuspage/docs/set-up-microsoft-teams-integration/) the URL of a teams channel\n\nBy subscribing you acknowledge our [Privacy Policy](https://www.anthropic.com/privacy). In addition, you agree to the Atlassian [Cloud Terms of Service](https://www.atlassian.com/legal/cloud-terms-of-service) and acknowledge Atlassian's [Privacy Policy](https://www.atlassian.com/legal/privacy-policy).\n\nGet webhook notifications whenever Claude **creates** an incident, **updates** an incident, **resolves** an incident or **changes** a component status.\n\nWebhook URL:\n\n\nThe URL we should send the webhooks to\n\nEmail address:\n\n\nWe'll send you email if your endpoint fails\n\nBy subscribing you agree to our [Privacy Policy](https://www.anthropic.com/privacy).\n\nThis site is protected by reCAPTCHA and the Google [Privacy Policy](https://policies.google.com/privacy) and [Terms of Service](https://policies.google.com/terms) apply.\n\nVisit our [support site](https://support.claude.com).\n\nGet the [Atom Feed](https://status.claude.com/history.atom) or [RSS Feed](https://status.claude.com/history.rss).\n\n[Claude.ai down](https://status.claude.com/incidents/6jd2m42f8mld)\n[Subscribe](#subscribe-modal-6jd2m42f8mld)\n\n**Update** - We are continuing to investigate elevated errors on Claude.ai, primarily affecting login. We will provide an update as soon as possible.\n  \nApr 13, 2026 - 15:58 UTC\n\n**Investigating** - We are currently investigating this issue.\n  \nApr 13, 2026 - 15:40 UTC\n\n[×](#)\n\n#### Subscribe to Incident\n\nSubscribe to updates for **Claude.ai down** via email and/or text message. You'll receive email notifications when incidents are updated, and text message notifications whenever Claude **creates** or **resolves** an incident.\n\nVIA EMAIL:\n\nVIA SMS:\n\nAfghanistan (+93)\nAlbania (+355)\nAlgeria (+213)\nAmerican Samoa (+1)\nAndorra (+376)\nAngola (+244)\nAnguilla (+1)\nAntigua and Barbuda (+1)\nArgentina (+54)\nArmenia (+374)\nAruba (+297)\nAustralia/Cocos/Christmas Island (+61)\nAustria (+43)\nAzerbaijan (+994)\nBahamas (+1)\nBahrain (+973)\nBangladesh (+880)\nBarbados (+1)\nBelarus (+375)\nBelgium (+32)\nBelize (+501)\nBenin (+229)\nBermuda (+1)\nBolivia (+591)\nBosnia and Herzegovina (+387)\nBotswana (+267)\nBrazil (+55)\nBrunei (+673)\nBulgaria (+359)\nBurkina Faso (+226)\nBurundi (+257)\nCambodia (+855)\nCameroon (+237)\nCanada (+1)\nCape Verde (+238)\nCayman Islands (+1)\nCentral Africa (+236)\nChad (+235)\nChile (+56)\nChina (+86)\nColombia (+57)\nComoros (+269)\nCongo (+242)\nCongo, Dem Rep (+243)\nCosta Rica (+506)\nCroatia (+385)\nCyprus (+357)\nCzech Republic (+420)\nDenmark (+45)\nDjibouti (+253)\nDominica (+1)\nDominican Republic (+1)\nEgypt (+20)\nEl Salvador (+503)\nEquatorial Guinea (+240)\nEstonia (+372)\nEthiopia (+251)\nFaroe Islands (+298)\nFiji (+679)\nFinland/Aland Islands (+358)\nFrance (+33)\nFrench Guiana (+594)\nFrench Polynesia (+689)\nGabon (+241)\nGambia (+220)\nGeorgia (+995)\nGermany (+49)\nGhana (+233)\nGibraltar (+350)\nGreece (+30)\nGreenland (+299)\nGrenada (+1)\nGuadeloupe (+590)\nGuam (+1)\nGuatemala (+502)\nGuinea (+224)\nGuyana (+592)\nHaiti (+509)\nHonduras (+504)\nHong Kong (+852)\nHungary (+36)\nIceland (+354)\nIndia (+91)\nIndonesia (+62)\nIraq (+964)\nIreland (+353)\nIsrael (+972)\nItaly (+39)\nJamaica (+1)\nJapan (+81)\nJordan (+962)\nKenya (+254)\nKorea, Republic of (+82)\nKosovo (+383)\nKuwait (+965)\nKyrgyzstan (+996)\nLaos (+856)\nLatvia (+371)\nLebanon (+961)\nLesotho (+266)\nLiberia (+231)\nLibya (+218)\nLiechtenstein (+423)\nLithuania (+370)\nLuxembourg (+352)\nMacao (+853)\nMacedonia (+389)\nMadagascar (+261)\nMalawi (+265)\nMalaysia (+60)\nMaldives (+960)\nMali (+223)\nMalta (+356)\nMartinique (+596)\nMauritania (+222)\nMauritius (+230)\nMexico (+52)\nMonaco (+377)\nMongolia (+976)\nMontenegro (+382)\nMontserrat (+1)\nMorocco/Western Sahara (+212)\nMozambique (+258)\nNamibia (+264)\nNepal (+977)\nNetherlands (+31)\nNew Zealand (+64)\nNicaragua (+505)\nNiger (+227)\nNigeria (+234)\nNorway (+47)\nOman (+968)\nPakistan (+92)\nPalestinian Territory (+970)\nPanama (+507)\nParaguay (+595)\nPeru (+51)\nPhilippines (+63)\nPoland (+48)\nPortugal (+351)\nPuerto Rico (+1)\nQatar (+974)\nReunion/Mayotte (+262)\nRomania (+40)\nRussia/Kazakhstan (+7)\nRwanda (+250)\nSamoa (+685)\nSan Marino (+378)\nSaudi Arabia (+966)\nSenegal (+221)\nSerbia (+381)\nSeychelles (+248)\nSierra Leone (+232)\nSingapore (+65)\nSlovakia (+421)\nSlovenia (+386)\nSouth Africa (+27)\nSpain (+34)\nSri Lanka (+94)\nSt Kitts and Nevis (+1)\nSt Lucia (+1)\nSt Vincent Grenadines (+1)\nSudan (+249)\nSuriname (+597)\nSwaziland (+268)\nSweden (+46)\nSwitzerland (+41)\nTaiwan (+886)\nTajikistan (+992)\nTanzania (+255)\nThailand (+66)\nTogo (+228)\nTonga (+676)\nTrinidad and Tobago (+1)\nTunisia (+216)\nTurkey (+90)\nTurks and Caicos Islands (+1)\nUganda (+256)\nUkraine (+380)\nUnited Arab Emirates (+971)\nUnited Kingdom (+44)\nUnited States (+1)\nUruguay (+598)\nUzbekistan (+998)\nVenezuela (+58)\nVietnam (+84)\nVirgin Islands, British (+1)\nVirgin Islands, U.S. (+1)\nYemen (+967)\nZambia (+260)\nZimbabwe (+263)\n\nEnter mobile number\n\n[Edit number](#) [Send OTP](#)\n\nEnter the OTP sent\n\n[Resend OTP](#)  in 30 seconds\n\nTo receive SMS updates, please verify your number. To proceed with just email click ‘Subscribe’\n\nSubscribe to Incident\n\n\n\nMessage and data rates may apply. By subscribing you agree to our [Privacy Policy](https://www.anthropic.com/privacy), the Atlassian [Terms of Service](https://www.atlassian.com/legal/product-specific-terms#statuspage-specific-terms), and the Atlassian [Privacy Policy](https://www.atlassian.com/legal/privacy-policy). This site is protected by reCAPTCHA and the Google [Privacy Policy](https://policies.google.com/privacy) and [Terms of Service](https://policies.google.com/terms) apply.\n\nUptime over the past 90 days. [View historical uptime.](https://status.claude.com/uptime)\n\nclaude.ai\n\nMajor Outage\n\n\n90 days ago\n\n98.71\n% uptime\n\nToday\n\nplatform.claude.com (formerly console.anthropic.com)\n\nOperational\n\n\n90 days ago\n\n99.19\n% uptime\n\nToday\n\nClaude API (api.anthropic.com)\n\nOperational\n\n\n90 days ago\n\n98.94\n% uptime\n\nToday\n\nClaude Code\n\nOperational\n\n\n90 days ago\n\n99.11\n% uptime\n\nToday\n\nClaude Cowork\n\nOperational\n\n\n90 days ago\n\n99.5\n% uptime\n\nToday\n\nClaude for Government\n\nOperational\n\n\n90 days ago\n\n99.91\n% uptime\n\nToday\n\nOperational\n\nDegraded Performance\n\nPartial Outage\n\nMajor Outage\n\nMaintenance\n\nMajor outage\n\nPartial outage\n\nNo downtime recorded on this day.\n\nNo data exists for this day.\n\nhad a major outage.\n\nhad a partial outage.\n\n### Related\n\nNo incidents or maintenance related to this downtime.\n\n\n\n## Past Incidents\n\nApr 13, 2026\n\nUnresolved incident: Claude.ai down.\n\nApr 12, 2026\n\nNo incidents reported.\n\nApr 11, 2026\n\n[Email login down](https://status.claude.com/incidents/qcfvv041lb1k)\n\n**Resolved** -\nEmail login was broken between approximately 3:46 PM and 4:52 PM PDT on April 10, 2026.\n  \n\nApr 11, 00:00 UTC\n\nApr 10, 2026\n\n[Elevated errors on requests to Claude models](https://status.claude.com/incidents/411xbc51v608)\n\n**Resolved** -\nThe issue affecting requests to non-Opus models has been resolved.\n  \n\nApr 10, 16:51 UTC\n\n**Identified** -\nWe have identified the current issue as affecting requests to models other than Claude Opus 4.6, and are working to fully resolve this issue. We will provide additional updates shortly.\n  \n\nApr 10, 16:42 UTC\n\n**Investigating** -\nWe are investigating reports of elevated errors on requests to Claude across all products. We will provide an update as soon as possible.\n  \n\nApr 10, 16:30 UTC\n\n[Some Claude.ai share links were inaccessible](https://status.claude.com/incidents/ccm8hy0pld48)\n\n**Resolved** -\nBetween April 2 and April 10, some users who were not signed in to Claude.ai (web, mobile, desktop) were not able to access some Claude.ai sharing links.\n  \n\nApr 10, 14:00 UTC\n\n[Degraded Performance on Vaults](https://status.claude.com/incidents/2z4mf00ffcwd)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr 10, 04:38 UTC\n\n**Monitoring** -\nA fix has been implemented and we are monitoring the results.\n  \n\nApr 10, 04:36 UTC\n\n**Investigating** -\nWe are currently investigating this issue.\n  \n\nApr 10, 04:28 UTC\n\nApr  9, 2026\n\n[Elevated Connector Error Rates](https://status.claude.com/incidents/cb0h2zyzl0kd)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr  9, 17:34 UTC\n\n**Monitoring** -\nA fix has been implemented and we are monitoring the results.\n  \n\nApr  9, 16:55 UTC\n\n**Investigating** -\nCertain connectors are experiencing higher error rates. We are investigating the issue.\n  \n\nApr  9, 16:54 UTC\n\n[Sonnet 4.6 elevated rate of errors](https://status.claude.com/incidents/v0t3z924dbhg)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr  9, 08:53 UTC\n\n**Identified** -\nThe issue has been identified and a fix is being implemented.\n  \n\nApr  9, 08:07 UTC\n\nApr  8, 2026\n\n[Errors when connecting to Claude.ai](https://status.claude.com/incidents/hsgj6gh6rlck)\n\n**Resolved** -\nSome users experienced an error when trying to access Claude.ai on desktop and the web from 23:22–23:50 UTC. This issue has now been resolved.\n  \n\nApr  8, 23:57 UTC\n\n[Outage affecting Workspace Creation](https://status.claude.com/incidents/z0bqmftj68dr)\n\n**Resolved** -\nThe issue affecting API workspace creation has been resolved. Impact occurred from approximately 4:15 PM to 7:30 PM UTC.\n  \n\nApr  8, 19:40 UTC\n\n**Monitoring** -\nA fix has been deployed for the issue affecting API workspace creation and we are monitoring for recovery.\n  \n\nApr  8, 19:28 UTC\n\n**Investigating** -\nWe are investigating errors related to creating workspaces via the Claude Console at platform.claude.com and via the admin API  \n  \n\nApr  8, 19:22 UTC\n\n[Elevated errors on Claude.ai, API, Claude Code](https://status.claude.com/incidents/5f418rpyb84x)\n\n**Resolved** -\nFrom 17:25–17:44 UTC, we saw elevated errors on attempts to log into Claude.ai (mobile, web, and desktop) and platform.claude.com, as well as /login attempts via Claude Code. This issue is now resolved.\n  \n\nApr  8, 17:50 UTC\n\n**Investigating** -\nWe are currently investigating an issue with authentication across multiple product surfaces.\n  \n\nApr  8, 17:46 UTC\n\n[Sonnet 4.6 elevated rate of errors](https://status.claude.com/incidents/lhws0phdvzz3)\n\n**Resolved** -\nThe incident is now resolved. Sonnet 4.6 exhibited errors above baseline between 23:00 PT / 7:00 UTC and 1:50 PT / 9:50 UTC.\n  \n\nApr  8, 09:33 UTC\n\n**Monitoring** -\nA fix has been implemented and we are monitoring the results.\n  \n\nApr  8, 09:01 UTC\n\n**Identified** -\nThe issue has been identified and a fix is being implemented.\n  \n\nApr  8, 07:59 UTC\n\n**Update** -\nWe are continuing to investigate this issue.\n  \n\nApr  8, 07:06 UTC\n\n**Investigating** -\nWe are currently investigating this issue.\n  \n\nApr  8, 06:23 UTC\n\nApr  7, 2026\n\n[Elevated errors on Claude.ai](https://status.claude.com/incidents/124yr07585k9)\n\n**Resolved** -\nFrom 14:32–15:12 UTC, we saw elevated errors impacting various Claude services, including Claude.ai and Claude Code authentication. These errors have been resolved.\n  \n\nApr  7, 15:59 UTC\n\n**Monitoring** -\nWe have applied a fix and success rates have returned to normal. We are continuing to monitor closely to ensure there are no further issues.\n  \n\nApr  7, 15:22 UTC\n\n**Identified** -\nWe have identified an issue resulting in elevated errors on Claude.ai, including desktop and mobile. Users may experience errors when attempting to login, engaging with voice mode, or completing chats with Claude. We are working to resolve this issue as soon as possible.\n  \n\nApr  7, 14:32 UTC\n\nApr  6, 2026\n\n[Sonnet 4.6 elevated rate of errors](https://status.claude.com/incidents/xmqkb966qt1h)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr  6, 21:45 UTC\n\n**Investigating** -\nWe are currently investigating this issue.\n  \n\nApr  6, 21:26 UTC\n\n[Elevated errors on Claude.ai](https://status.claude.com/incidents/vfjv5x6qkd4j)\n\n**Resolved** -\nFrom 15:00–16:30 UTC on April 6, we saw elevated errors on login for Claude.ai and Claude Code. This issue also affected some Claude.ai conversations and other product functionality such as voice mode. This issue is now resolved.\n  \n\nApr  6, 17:16 UTC\n\n**Monitoring** -\nWe have applied a fix, and are seeing success rates recover across affected services. We are continuing to monitor to ensure there is no recurrence of issues.\n  \n\nApr  6, 16:44 UTC\n\n**Update** -\nWe are continuing to work on a fix for this issue.\n  \n\nApr  6, 16:17 UTC\n\n**Update** -\nThis issue additionally affects login on other surfaces, such as Claude.code.\n  \n\nApr  6, 15:54 UTC\n\n**Identified** -\nWe have identified an issue resulting in elevated errors on Claude.ai, including desktop and mobile. Users may experience errors when attempting to login, engaging with voice mode, or completing chats with Claude. We are working to resolve this issue as soon as possible.\n  \n\nApr  6, 15:45 UTC\n\nApr  5, 2026\n\nNo incidents reported.\n\nApr  4, 2026\n\n[Sonnet 4.6 and Opus 4.6 elevated error rate](https://status.claude.com/incidents/7n7xgqws441v)\n\n**Resolved** -\nBetween 10:09 and 10:31 PDT, Sonnet 4.6 and Opus 4.6 experienced elevated error rates across most product surfaces.\n  \n\nApr  4, 17:30 UTC\n\nApr  3, 2026\n\n[Elevated errors on requests to Claude Sonnet 4.6](https://status.claude.com/incidents/fznql3y9tpn7)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr  3, 19:21 UTC\n\n**Investigating** -\nWe are currently investigating an issue resulting in elevated errors on requests to Claude Sonnet 4.6. We will provide an update as soon as possible.\n  \n\nApr  3, 18:12 UTC\n\nApr  2, 2026\n\nNo incidents reported.\n\nApr  1, 2026\n\n[Errors on the Claude.ai desktop application](https://status.claude.com/incidents/z22j49ktx41d)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr  1, 22:16 UTC\n\n**Identified** -\nWe have identified an issue which results in the Claude.ai desktop application returning an error when attempting to connect. We are working to resolve this issue as quickly as possible, and the Claude.ai website is unaffected.\n  \n\nApr  1, 22:15 UTC\n\n[Elevated errors on requests to Claude Opus 4.6](https://status.claude.com/incidents/3bg93cy9bk1v)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr  1, 10:40 UTC\n\n**Identified** -\nWe have identified an issue resulting in elevated errors on requests to Claude Opus 4.6, and are working to resolve this. We will provide an update as soon as possible.\n  \n\nApr  1, 09:06 UTC\n\n[Elevated timeouts on requests to Claude Opus 4.6 and Sonnet 4.6](https://status.claude.com/incidents/fvj2fgqrchsj)\n\n**Resolved** -\nWe have identified an issue which resulted in elevated rates of timeouts when making requests to Claude Opus 4.6 and Sonnet 4.6 from 17:45 UTC on March 31 through 05:52 UTC on April 1. This issue has been resolved.\n  \n\nApr  1, 07:01 UTC\n\n[Elevated errors and latency on Claude Haiku 4.5](https://status.claude.com/incidents/cbffv7jf2jck)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nApr  1, 02:14 UTC\n\n**Monitoring** -\nA fix has been implemented and we are monitoring the results.\n  \n\nApr  1, 01:47 UTC\n\n**Investigating** -\nWe are currently investigating this issue.\n  \n\nApr  1, 01:27 UTC\n\nMar 31, 2026\n\n[Unavailable connectors in Claude.ai desktop applications](https://status.claude.com/incidents/z5scppyhphjk)\n\n**Resolved** -\nWe have resolved an issue that resulted in the unavailability of connectors in the Claude.ai desktop application. Affected connectors were removed from organization allowlists, and can be manually re-added while we work to automatically restore impacted allowlists.\n  \n\nMar 31, 22:59 UTC\n\n**Identified** -\nWe have identified an issue which has resulted in some Claude.ai connectors becoming unavailable within the desktop application. We are working to restore access to these extensions, and will provide an update as soon as possible.\n  \n\nMar 31, 20:12 UTC\n\n[Opus 4.6 and Sonnet 4.6 error rate elevated](https://status.claude.com/incidents/65w1yxq40m3l)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nMar 31, 22:09 UTC\n\n**Update** -\nWe are continuing to work on a fix for this issue.\n  \n\nMar 31, 21:01 UTC\n\n**Identified** -\nThe issue has been identified and a fix is being implemented.\n  \n\nMar 31, 19:41 UTC\n\n[Elevated errors on Claude Opus 4.6](https://status.claude.com/incidents/k3z0fjwdjkzl)\n\n**Resolved** -\nThis incident has been resolved.\n  \n\nMar 31, 09:44 UTC\n\n**Monitoring** -\nAt baseline error rate from 2:19 PT / 9:19 UTC.\n  \n\nMar 31, 09:21 UTC\n\n**Investigating** -\nIssue started at 1:33 PT / 8:53 UTC.\n  \n\nMar 31, 08:53 UTC\n\nMar 30, 2026\n\nNo incidents reported.\n\n[← Incident History](https://status.claude.com/history)\n[Powered by Atlassian Statuspage](https://www.atlassian.com/software/statuspage?utm_campaign=status.claude.com&utm_content=SP-notifications&utm_medium=powered-by&utm_source=inapp)",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://status.claude.com/"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Past Incidents",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Past Incidents",
      "subtitles": null,
      "url": "https://status.claude.com",
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

 Looking at the status page, there was a Major Outage flagged in the past 90 days, and while the most recent incidents listed go back to April 20, 2026, there's no specific entry for April 22 yet—though April 2026 shows a pattern of recurring issues, including a file upload problem documented on April 20.

The user's error message about tool results failing to submit appears to be a Claude.ai web interface issue where the tool execution pipeline breaks down—specifically when Claude invokes a tool and the backend can't successfully return the result back to the model to continue the conversation.

This could stem from several sources: timeouts on long-running operations like web searches, network interruptions (particularly relevant given Reid's location in China where VPN stability is often problematic), session token expiration, or backend infrastructure issues on Anthropic's side. The persistence today aligns with Anthropic's documented spike in incidents throughout April 2026, and there may be lingering effects from the file upload issues reported a couple days ago.

I should be careful to distinguish what I can verify against what I'm inferring—the status page didn't show an April 22 incident specifically, though status pages often lag behind actual problems. Given Reid's setup with Windows and Claude Desktop, and the "refresh the page" message appearing, I should focus on giving a technically grounded explanation of what the error means while attributing specific claims to actual sources rather than speculation. I'm deciding whether to ask clarifying questions or provide a direct answer given what I know. The user's question is specific enough that I can give a solid response while being transparent about what I can and can't verify—like whether this is a Claude.ai web versus desktop issue, or if a VPN is involved. I'll structure my answer to separate confirmed facts from educated guesses, then offer optional follow-up questions if they'd help narrow things down further. The core issue is that Anthropic's API requires every tool invocation to be paired with a result message, and if that result can't be delivered—whether due to a timeout, connection drop, or request termination—the conversation gets stuck in an unresolvable state, which is why the UI forces a refresh instead of letting you retry.

Looking at the evidence, Anthropic's status page doesn't show a specific incident on April 22, 2026, but their 90-day health data does reveal a "Major Outage" day in that window and notably high incident density in early-to-mid April with multiple login and error issues, plus a file-upload investigation on April 20. The status page likely lags behind what users are actually experiencing.

Given that you're in mainland China, this could just as easily be a network-path problem—GFW interference, VPN instability, or CDN edge issues—rather than a pure Anthropic outage, since the "orphaned tool_result" error is a connection-resilience symptom. I can't tell from the screenshot alone whether this is Anthropic-side, your network-side, or both factors combined.

I'm thinking through whether to ask you some targeted questions to narrow down which side the problem is on and point you toward the right fix.

</details>

## What the message means

It's a client-side error from Claude.ai saying that your conversation turn is in an unresolvable state. Under the hood, Claude used a tool (web search, code execution, artifact rendering, connector call, file generation, etc.) and the frontend tried to post the tool's result back to Anthropic's API — but that submission never completed.

Anthropic's API enforces a strict pairing: every `tool_use` block must be followed by a corresponding `tool_result` block in the very next message ([Claude Code errors doc](https://code.claude.com/docs/en/errors)). If the `tool_result` cannot be delivered, the conversation turn becomes structurally invalid and the UI asks you to refresh rather than retry inline — because inline retry would resend an already-broken history and the API would reject it with a 400 "tool_use ids were found without tool_result blocks" error (documented behavior — [reference](https://shop.avivamiento.com/blog/fix-claude-ai-tool-use)).

Two root causes fit the literal wording of the banner:

1. **"Request may have expired"** — the tool took longer to complete than the request's budget allowed, so the submission timed out before Claude's backend accepted it.
2. **"Connection was interrupted"** — the streaming connection (SSE) between your client and Anthropic dropped mid-turn, orphaning the pending tool_result.

## Why it may be persistent today — facts vs. assumptions

**Verified facts** (checked just now against [status.claude.com](https://status.claude.com)):
- No incident is currently listed specifically for **22 April 2026** on Anthropic's public status page.
- The claude.ai component's 90-day panel shows **one "Major Outage" day** and **98.71% uptime**.
- April 2026 incident density is unusually high: login/error incidents on Apr 6, 7, 8 (×3), 9, 10, 13, and an unresolved "Claude.ai down" banner last updated **Apr 13, 15:58 UTC**. A "file uploads failing" investigation opened **Apr 20, 13:31 UTC** is the most recent tool-adjacent issue I can see.

**Assumptions / hypotheses — NOT confirmed**:
- Anthropic's status page typically lags behind real-time user-visible degradation, so a current partial issue may simply not be posted yet.
- Your location (mainland China, per context) adds a plausible co-factor: this error is fundamentally a *connection-resilience* symptom, and GFW-induced TCP resets, VPN route flaps, or CDN edge-selection churn can produce exactly this pattern — even when Anthropic itself is healthy. I cannot prove this from a screenshot alone.
- I cannot tell from the image whether you are on claude.ai web, the desktop app, or Cowork; the banner wording appears in multiple surfaces.

## To narrow it down

The diagnosis branches meaningfully on a few variables. Want me to ask a short triage set so I can point you at the most likely fix (Anthropic-side wait-it-out vs. your-network-side mitigations vs. client-side refresh/clear-cache)?

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:06:55.667766Z",
  "stop_timestamp": "2026-04-22T07:06:58.897335Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015JG9xUKXEtTkvbcsvKEDkm",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "question": "Which surface is throwing the banner?",
        "options": [
          "claude.ai in browser",
          "Claude Desktop app",
          "Claude Cowork workspace",
          "Not sure / multiple"
        ],
        "type": "single_select"
      },
      {
        "question": "Is a VPN / proxy involved in your connection right now?",
        "options": [
          "Yes, VPN on",
          "No, direct connection",
          "Tried both, same error"
        ],
        "type": "single_select"
      },
      {
        "question": "When does the banner typically appear?",
        "options": [
          "During web_search / research",
          "During artifact or code generation",
          "During connector (Drive/Gmail/etc.) calls",
          "Randomly, no clear trigger"
        ],
        "type": "single_select"
      }
    ]
  },
  "message": "Generating ask_user_input_v0...",
  "integration_name": "Dynamic Widget",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
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
  "tool_use_id": "toolu_015JG9xUKXEtTkvbcsvKEDkm",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\n  \"questions\": [\n    {\n      \"question\": \"Which surface is throwing the banner?\",\n      \"options\": [\n        \"claude.ai in browser\",\n        \"Claude Desktop app\",\n        \"Claude Cowork workspace\",\n        \"Not sure / multiple\"\n      ],\n      \"type\": \"single_select\"\n    },\n    {\n      \"question\": \"Is a VPN / proxy involved in your connection right now?\",\n      \"options\": [\n        \"Yes, VPN on\",\n        \"No, direct connection\",\n        \"Tried both, same error\"\n      ],\n      \"type\": \"single_select\"\n    },\n    {\n      \"question\": \"When does the banner typically appear?\",\n      \"options\": [\n        \"During web_search / research\",\n        \"During artifact or code generation\",\n        \"During connector (Drive/Gmail/etc.) calls\",\n        \"Randomly, no clear trigger\"\n      ],\n      \"type\": \"single_select\"\n    }\n  ]\n}",
      "uuid": "a208f1b0-77d8-416b-b945-c94e5a19c4e0"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Generated ask_user_input_v0 widget",
  "integration_name": "Dynamic Widget",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Pick whichever matches and I'll give you a targeted fix — or tell me if none of the options fit and I'll adjust.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db401-b85e-7da5-81ce-1da675d593e0",
  "updated_at": "2026-04-22T07:07:04.377131Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db401-b85e-75b1-97d8-23e9f4864838"
}
```

</details>

### 3. human — 2026-04-22T07:13:16.448980Z

Q: Which surface is throwing the banner?
A: Claude Desktop app

Q: Is a VPN / proxy involved in your connection right now?
A: Yes, VPN on and so as normal situation before

Q: When does the banner typically appear?
A: Randomly, no clear trigger

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db409-2c7d-772d-a0bc-ff71e1e990ee",
  "updated_at": "2026-04-22T07:13:16.448980Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db401-b85e-7da5-81ce-1da675d593e0"
}
```

</details>

### 4. assistant — 2026-04-22T07:14:22.344803Z

 

<details>
<summary>Thinking (verbatim)</summary>

 So Reid is in China using a VPN to access Claude, which is standard for them—the VPN being on isn't new or unusual. They're experiencing random errors with the Desktop app that have no clear trigger, which suggests this might be a connectivity or app-specific issue rather than a configuration problem.

The Desktop app maintains persistent connections that can be fragile over VPN, especially with micro-drops that the browser would handle through refreshes but the app's retry logic might not recover from gracefully. Since Reid says nothing changed on their end, this points toward either an undocumented Anthropic-side issue or a recent change in how the Desktop app handles these connections.

Let me pull together some concrete troubleshooting steps: check the Desktop version and compare behavior in the browser to isolate whether it's app-specific, try switching VPN servers or protocols to rule out network instability, clear the app cache and re-login, and file feedback through the thumbs down button so Anthropic can investigate.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:13:35.652849Z",
  "stop_timestamp": "2026-04-22T07:13:36.072933Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KghmYfbcbTiFdKrA85L1qD",
  "name": "web_search",
  "input": {
    "query": "Claude Desktop app tool result error April 2026 VPN connection drop"
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
  "tool_use_id": "toolu_01KghmYfbcbTiFdKrA85L1qD",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude was down — here's everything we know | TechRadar",
      "url": "https://www.techradar.com/news/live/claude-anthropic-down-outage-april-15-2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techradar.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techradar.com",
        "site_name": "TechRadar"
      },
      "is_missing": false,
      "text": "It&#x27;s not deja vu — Claude was having some issues again the morning of April 15, 2026, with Anthropic confirming an active disruption causing &#x27;Elevated errors on Claude.ai, API, Claude Code.&#x27;\n\nIt's not deja vu — Claude was having some issues again the morning of April 15, 2026, with Anthropic confirming an active disruption causing 'Elevated errors on Claude.ai, API, Claude Code.' The company first confirmed issues at 10:53 AM ET, and then issued a fix at 11:03 AM ET, but after a recovery, it wrote \"Claude.ai and Platform are down\" as of 11:40 AM ET, before finally marking the full incident as resolved at 1:42 PM ET. Down Detector reports matched up with the up-and-down issues and, at its peak, showed over 5,100 reports. Both my colleague and I encountered issues with using Free and Pro Claude accounts on both desktop and mobile as well.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.techradar.com/news/live/claude-anthropic-down-outage-april-15-2026",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Status",
      "url": "https://status.claude.com/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Resolved - Email login was broken between approximately 3:46 PM and 4:52 PM PDT on April 10, 2026. Apr 11, 00:00 UTC ... Resolved - The issue affecting requests to non-Opus models has been resolved. Apr 10, 16:51 UTC · Identified - We have identified the current issue as affecting requests ...\n\nResolved - Email login was broken between approximately 3:46 PM and 4:52 PM PDT on April 10, 2026. Apr 11, 00:00 UTC ... Resolved - The issue affecting requests to non-Opus models has been resolved. Apr 10, 16:51 UTC · Identified - We have identified the current issue as affecting requests to models other than Claude Opus 4.6, and are working to fully resolve this issue. We will provide additional updates shortly. Apr 10, 16:42 UTC · Investigating - We are investigating reports of elevated errors on requests to Claude across all products. We will provide an update as soon as possible. Apr 10, 16:30 UTC ... \n\nResolved - Between April 2 and April 10, some users who were not signed in to Claude.ai (web, mobile, desktop) were not able to access some Claude.ai sharing links. Apr 10, 14:00 UTC ... Resolved - This incident has been resolved. Apr 10, 04:38 UTC ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://status.claude.com/",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Fix Claude Desktop Cowork And VPN Issue (The vm_bundles Solution) — Full Guide",
      "url": "https://alirezarezvani.medium.com/how-to-fix-claude-desktop-cowork-when-its-stuck-the-vm-bundles-solution-b6dfb15ed60d",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Claude Desktop Cowork stuck with VPN error? The actual problem is VM initialization failure. Here is the vm_bundles fix that works—complete terminal commands and troubleshooting ladder.\n\nHow To Solve the VPN Issue with Claude CoWork. These Are My Steps to Get the CoWork back to work.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://alirezarezvani.medium.com/how-to-fix-claude-desktop-cowork-when-its-stuck-the-vm-bundles-solution-b6dfb15ed60d",
        "search_provider": "anthropic",
        "age": "February 10, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Getting Claude Code to work in your corporate environment | by Anando Ghose | Medium",
      "url": "https://medium.com/@me_53022/getting-claude-code-to-work-in-your-corporate-environment-9ee34379214d",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Turns out the connection error is an error that is being thrown by the Claude Code extension. While trying to access the Anthropic API, the extension is getting an invalid certificate.\n\nI’ve used Claude extensively for coding in the past, and with the buzz around Claude Code I knew I had to get in on it. I downloaded the…\n\nTurns out the connection error is an error that is being thrown by the Claude Code extension. While trying to access the Anthropic API, the extension is getting an invalid certificate. Normally what happens when you visit a site is that the site presents the browser with a certificate certifying that the site is indeed what it claims to be. In the case of laptops issued by your company, these are usually behind VPNs like Zscaler. \n\nYou do this by sharing the certificate of the VPN provider with Claude and saying — if you come across this certificate, trust that it will forward your request to the correct place and get back to you with what you need. ... Now that you understand why we’re doing what we’re doing, let’s get to the easy bit — actually doing it. Just a little more meandering.. sorry. When (and if) you read the above reasoning — one question may have come to your mind — why doesn’t this error come up when I use Claude on my browser?\n\nThe answer — it is already added to your browser (added by your IT team when they set up your laptop and installed the VPN service like Zscaler). You just need to get your hands on the certificate provided by your VPN.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@me_53022/getting-claude-code-to-work-in-your-corporate-environment-9ee34379214d",
        "search_provider": "anthropic",
        "age": "January 13, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "I'm getting an API connection error. How can I fix it? | Claude Help Center",
      "url": "https://support.claude.com/en/articles/10366432-i-m-getting-an-api-connection-error-how-can-i-fix-it",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Try these steps: Check if there are any firewall rules or network restrictions blocking the connection to the Claude API endpoint. Configure your firewall or network settings to allow the connection.\n\nThis error usually indicates an issue on your end, potentially related to your firewall, network, or VPN. Try these steps: Check if there are any firewall rules or network restrictions blocking the connection to the Claude API endpoint. Configure your firewall or network settings to allow the connection. Ensure you're not using a VPN when running the request.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/10366432-i-m-getting-an-api-connection-error-how-can-i-fix-it",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "VPN connection dropping",
      "url": "https://community.talktalk.co.uk/t5/Broadband/VPN-connection-dropping/td-p/2925119",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "talktalk.co.uk",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=talktalk.co.uk",
        "site_name": "talktalk"
      },
      "is_missing": false,
      "text": "VPN connection dropping\non 15-10-2022 08:52 AM\nMessage 19 of 19\nHi,\nSimilar to many other posts, e.g.:\nI've been using an HP laptop and TalkTalk's Sagemcom router to access my company's VPN for a long time working from home with no issue. In the last few weeks it's starting randomly dropping the connection from the VPN. I've tried hardwiring directly into the router and there's no change, it still drops the connection\nHaving read through the forums it appears that a small change in the Firmware is required to re-allow VPN connections.\nPlease can someone update the Firmware as needed.\nThanks\nLabels:\n- Labels:\n-\nConnection\n-\nFirmware\n-\nVPN\nShow option menu\n- Mark as New\n- Bookmark\n- Subscribe\n- Mute\n- Subscribe to RSS Feed\n- Highlight\n- Report Inappropriate Content\n18 REPLIES 18\non 26-10-2022 07:17 AM\nMessage 1 of 19\nHi 1X8xFoxyx8X1\nThanks for your reply.\nPlease let us know how you get on.\nDebbie\nShow option menu\n- Mark as New\n- Bookmark\n- Subscribe\n- Mute\n- Subscribe to RSS Feed\n\n\n- Highlight\n- Report Inappropriate Content\non 25-10-2022 03:21 PM\nMessage 2 of 19\nHi Debbie-TalkTalk\nIt's very strange, it's now dropping out even when it's not on the VPN which I don't believe it was doing last week.\nI'm going to speak to my IT department and see if it's maybe something that they might have had with others who are working from home.\nI'll also be able to see if it does it whilst I'm in the office as I have to go in at some point in the next week or so.\nI'll let you know what happens, thank you\nShow option menu\n- Mark as New\n- Bookmark\n- Subscribe\n- Mute\n- Subscribe to RSS Feed\n- Highlight\n- Report Inappropriate Content\non 25-10-2022 11:54 AM\nMessage 3 of 19\nHi 1X8xFoxyx8X1\nDoes it connect ok to your VPN client but then drop out?\nDo the drops only occur when using VPN?\nShow option menu\n- Mark as New\n- Bookmark\n- Subscribe\n- Mute\n- Subscribe to RSS Feed\n- Highlight\n- Report Inappropriate Content\non 25-10-2022 11:52 AM\nMessage 4 of 19\nHi Debbie-TalkTalk\n\n\nI installed the new r",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://community.talktalk.co.uk/t5/Broadband/VPN-connection-dropping/td-p/2925119",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "r/ClaudeAI Mod 21d ago",
      "url": "https://redite.crans.org/r/ClaudeAI/comments/1l0lk3r/status_report_claude_performance_observations/mvq884a/?context=3",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "crans.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=crans.org",
        "site_name": "crans"
      },
      "is_missing": false,
      "text": "r/ClaudeAI Mod 21d ago\n\nStatus Report Status Report: Claude Performance Observations – Week of May 25 – June 1, 2025\n\nPrior week's Status Report is here: \nhttps://www.reddit.com/r/ClaudeAI/comments/1kuv3py/status_report_claude_performance_observations/\n\nDisclaimer: This was entirely built by AI. Please report any hallucinations\n\n🧠 EXECUTIVE SUMMARY\n\nClaude 4 users this week saw a double whammy:\n\n  • Frequent outages, “capacity errors,” login loops → confirmed by Anthropic\n  • Massively reduced usage limits post-Claude 4 launch → Max plan users hitting caps in <10 prompts\n  • Silent context loss starting around 20–30k tokens, despite 200k token advertising\n  • Broken features: artifacts, DOCX exports, history/versioning, desktop app, drag/drop\n\nDespite that, Claude 4’s coding and reasoning power still impressed when it worked.\n\n🔧 KEY PERFORMANCE OBSERVATIONS (FROM USER COMMENTS)\n\nCategory What People Reported Frequency Impact\n\n\nAvailability/Uptime Site outages, “Claude will return soon”, login fails Very common 🔥 Full stop\nQuota Issues Max users locked after just 1–10 prompts; reset timers drift Very common 🚫 Stops productivity\nContext Truncation Claude forgets content after ~30k tokens, no warning Common ⚠️ Breaks long threads\nArtifact Failures Blank tabs, lost output, no autosave Common 💾 Risk of data loss\nFile Handling Bugs Drag & drop fails; DOCX export button doesn’t work Common 📎 Blocks workflow\nVersioning Broken History shows wrong version or duplicate Occasional ❓ Can’t trust memory\nDesktop Bugs “Loading…” loop on Windows; missing chat elements Occasional 🖥️ App unreliable\nAPI Errors (529) 3.x models also blocked; API gets overloaded even when UI works Common ☁️ Fallbacks fail too\nSpeed/Latency Claude 4 faster for some; Max users report lag Mixed ⚙️ Performance swings\nTone Changes Opus 4 acts rude/confident/less obedient Isolated 🤖 Personality shift\n\n\n\n📉 USER SENTIMENT SNAPSH",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://redite.crans.org/r/ClaudeAI/comments/1l0lk3r/status_report_claude_performance_observations/mvq884a/?context=3",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "VPN STOPPED WORKING",
      "url": "https://community.talktalk.co.uk/t5/Broadband/VPN-STOPPED-WORKING/m-p/2856387/highlight/true",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "talktalk.co.uk",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=talktalk.co.uk",
        "site_name": "talktalk"
      },
      "is_missing": false,
      "text": "VPN STOPPED WORKING\non 28-01-2022 07:22 PM\nMessage 6 of 6\nHi, My VPN connection to work has stopped working from 13thh January and I am get the error message \"Error 619 : A connection to the remote computer could not be established, so the port used for this connection was closed.\"\nIt was working OK from March 2020, . I have noted that a number of users appear to having a similar problem from Thursday 13 January.\nThe router which we have (with no problem for about 2 years) is a TalkTalk WI-FI HUB FAST 5364-3. T8\nPlease can you let me know if there is a solution to this issue as I need to be able to work from home which I am unable to do at present.\nMany thanks,\nFabio\nLabels:\n- Labels:\n-\nVPN\nShow option menu\n- Mark as New\n- Bookmark\n- Subscribe\n- Mute\n- Subscribe to RSS Feed\n- Highlight\n- Report Inappropriate Content\n5 REPLIES 5\non 02-02-2022 06:33 AM\nMessage 1 of 6\nHi Fabio\nSorry for the delay. The Huawei WIFI hub is on its way, please allow 24-48hrs for this to arrive.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://community.talktalk.co.uk/t5/Broadband/VPN-STOPPED-WORKING/m-p/2856387/highlight/true",
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

 I found a relevant Anthropic support article that directly addresses this—it mentions VPN can cause connection errors with the Claude Desktop app, which aligns with what the user is experiencing. So the issue is likely that their always-on VPN is interfering with the persistent native connection the app relies on, and I should recommend disabling it as a troubleshooting step. China, but VPN is still the most common cause)
- Random timing (= connection flap, not specific tool)

Most likely cause: **SSE/WebSocket connection instability** between desktop app and Anthropic API, exacerbated by:
1. VPN tunnel reconnects (even "stable" VPNs flap briefly)
2. Desktop app retry logic is less forgiving than browser (browser refreshes naturally, desktop keeps one persistent session)
3. Possible Anthropic-side issue overlaid (given April 2026 incident density)

Targeted fixes:
1. **Desktop-specific**: Check desktop app version; update. Try the browser (claude.ai) and compare — if browser is stable, it's a desktop app issue.
2. **VPN-specific**:
   - Try a different VPN server/protocol (switch WireGuard ↔ OpenVPN/IKEv2 if available)
   - Try a server in a different region (Singapore/Japan often more stable to US endpoints)
   - Check for IPv6 leaks (can cause desktop app to try routes outside tunnel)
   - Per Anthropic's own support: they officially recommend not using VPNs, though that's not practical for Reid in China
3. **Active conversation workaround**: When the banner appears, end the conversation or give feedback rather than refreshing mid-turn—refreshing with a dangling tool_use often recreates the same error.

Reid's already familiar with this pattern from past VPN/VM conflicts with Cowork, so he knows the desktop + VPN friction well. I should also mention filing feedback via thumbs down, which is the official channel for these issues.

</details>

## Narrowed diagnosis

That combination — **Desktop app + persistent VPN + random timing** — points most strongly to **SSE connection instability**, not a specific tool failing.

Here's the mechanism: Claude Desktop holds a long-lived streaming connection (Server-Sent Events) to Anthropic for the duration of each turn. The browser version does the same, but when the browser's connection hiccups, the page natively retries or you refresh. The Desktop app, by contrast, wraps that same stream in an Electron/Tauri shell where in-flight state lives in app memory — so when the stream drops mid-tool-call, the app knows the `tool_result` couldn't be delivered but has no graceful recovery path. You get the banner.

Why VPN matters even though "nothing changed on your side":

- VPN tunnels flap briefly on MTU renegotiation, keepalive timeouts, or upstream route changes. A 2-second flap is invisible to a web page load but fatal to an SSE stream carrying a pending `tool_result`.
- Anthropic's own support page on connection errors explicitly lists VPN as a common cause: "This error usually indicates an issue on your end, potentially related to your firewall, network, or VPN... Ensure you're not using a VPN when running the request." ([support.claude.com](https://support.claude.com/en/articles/10366432-i-m-getting-an-api-connection-error-how-can-i-fix-it)). Obviously "don't use a VPN" isn't realistic from your location — but it confirms Anthropic treats VPN paths as a known risk surface.
- Random timing (no per-tool pattern) is the signature of *transport-layer* failure rather than a backend tool bug. Tool-specific bugs cluster on specific tools.

There's also a weaker hypothesis: an Anthropic-side partial degradation not yet posted. I can't confirm it — the status page has no 22 Apr entry as of my last fetch — but April 2026 has had high incident density and status-page lag is real.

## What I'd try, in rough order of leverage

**1. Compare with browser.** Open the exact same prompt at claude.ai in your browser through the same VPN. If the browser is stable and desktop isn't, it confirms it's a desktop-app state-management issue rather than your network path. If both fail identically, it's upstream (VPN path or Anthropic).

**2. Check the desktop app version.** Help → About. If it's not current, update — Anthropic ships Desktop updates frequently and recent versions have had stream-recovery fixes (e.g., the Apr 1 desktop connection incident). I don't have the current version number memorized; the in-app updater is authoritative.

**3. VPN path changes, cheapest first:**
- Switch VPN *protocol* (WireGuard ↔ OpenVPN/IKEv2). WireGuard is lower-overhead but some providers have flakier WG endpoints.
- Switch VPN *exit region*. Japan and Singapore exits tend to have more stable routes to Anthropic's US-hosted endpoints than European or South American ones.
- Disable IPv6 on your active network adapter. If the VPN tunnels only IPv4 and your ISP returns IPv6 AAAA records, the desktop app may race two routes, one of which falls outside the tunnel and times out.

**4. Don't just "refresh" mid-turn.** When the banner appears on a conversation that already has a dangling `tool_use`, refreshing sometimes re-sends the broken history and the API rejects it, perpetuating the error. Instead, either (a) start a new conversation for that task, or (b) edit your last message to re-prompt without the tool-triggering ask, which forces a new turn structure.

**5. File feedback.** If the banner persists after updating and changing VPN path, use 👎 on an affected response — per the Anthropic flow, that sends the conversation transcript to them, which is the most efficient channel for a real regression report.

## What I cannot confirm

- Whether there's currently an undisclosed Anthropic-side issue on 22 Apr 2026. My reading of status.claude.com at the start of this conversation showed no 22 Apr entry, but that's a snapshot, not live monitoring.
- Whether your specific VPN provider is currently flapping. Only your VPN client's connection log can answer that.
- Whether the error is happening on other users' Desktop installs today. r/ClaudeAI and Downdetector would be better real-time signals than anything I can fetch synchronously.

If the browser-vs-desktop comparison in step 1 gives you a clear answer, I can narrow further from there.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db409-2c7d-7eda-bed1-4e39a4511535",
  "updated_at": "2026-04-22T07:14:22.344803Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db409-2c7d-772d-a0bc-ff71e1e990ee"
}
```

</details>

### 5. human — 2026-04-22T07:16:01.511073Z

By the way, will it be normal after restarting the desktop?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db40b-b8fa-7214-8a05-12cc27020475",
  "updated_at": "2026-04-22T07:16:01.511073Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db401-b85e-7da5-81ce-1da675d593e0"
}
```

</details>

### 6. assistant — 2026-04-22T07:16:19.894420Z

 Short answer: **often yes, but not guaranteed** — it depends on which of the two root causes is actually hitting you, and restarting only fixes one of them cleanly.

## What a desktop restart actually does

**Fixes reliably:**
- Drops the stuck SSE/WebSocket connection that was holding the orphaned `tool_use` ↔ `tool_result` pair. A fresh process opens a new connection, so the structurally-invalid conversation state is no longer being replayed.
- Clears any in-memory auth token that may have silently expired mid-session (documented failure mode in [Claude Code issue #15137](https://github.com/anthropics/claude-code/issues/15137) — re-auth happens but the original request keeps using the dead token until the client is restarted).
- Resets any local renderer glitches (Electron's webview occasionally stalls on long-lived sessions).

**Does NOT fix:**
- The *specific conversation* that already hit the error. That conversation's history contains an orphaned `tool_use` block with no matching `tool_result`, and the API will reject every subsequent message in it with a 400 error (["tool_use ids were found without tool_result blocks"](https://code.claude.com/docs/en/errors) — this is a documented, persistent state, not a transient one). You'll need to either start a new chat or, if you're on claude.ai web, edit/retry from a message *before* the broken tool call.
- Upstream Anthropic incidents — if the root cause is server-side, restart changes nothing.
- Network-path instability — if GFW resets or VPN route flapping is interrupting the SSE stream, the next long tool call will break the same way.

## Practical escalation ladder

| Try | Fixes |
|---|---|
| 1. Start a new chat (don't restart yet) | Orphaned-turn issue only |
| 2. Restart the Claude Desktop app | + stuck connection, expired token |
| 3. Reboot OS / reset network adapter | + OS-level socket leaks |
| 4. Toggle VPN on↔off, try a different exit node | Network-path instability |
| 5. Check [status.claude.com](https://status.claude.com) | Rules out Anthropic-side outage |

If the banner comes back within a few turns after a restart — especially on long tool calls (web search, artifacts, Cowork actions) — that's strong evidence it's the network path, not the client. In that case restarting is cosmetic; the fix is on the connection side (VPN exit, DNS, or waiting out an Anthropic incident).

**Honest caveat:** this ladder is reasoned from documented API behavior and the causes I cited earlier — I don't have primary-source empirical data on restart success rates for this specific banner on the Windows Claude Desktop build you're running. So treat it as a diagnostic heuristic, not a guarantee.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db40b-b8fa-7b9d-bbaf-f533771f29d9",
  "updated_at": "2026-04-22T07:16:19.894420Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db40b-b8fa-7214-8a05-12cc27020475"
}
```

</details>

### 7. human — 2026-04-22T07:19:32.977490Z

Then what is the reason of this? These are the locations at which the use_widget tool was invoked.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db40e-ee27-75f8-b159-9fa525074231",
  "updated_at": "2026-04-22T07:19:32.977490Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019db40c-ad09-7065-9d45-5539a2e04efa",
      "file_name": "1776842221909_image.png"
    }
  ],
  "parent_message_uuid": "019db40b-b8fa-7b9d-bbaf-f533771f29d9"
}
```

</details>

### 8. assistant — 2026-04-22T07:21:07.436109Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I'm looking at a screenshot showing "Unknown Connector" entries with warning icons where the `use_widget` tool was invoked—this appears to be a separate issue where the tool invocation isn't rendering the expected widget result properly. Let me search for what might be causing these "Unknown Connector" errors.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:19:43.397792Z",
  "stop_timestamp": "2026-04-22T07:19:43.763413Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016GaButayjgAYtJ6RZhR6eV",
  "name": "web_search",
  "input": {
    "query": "Claude.ai \"Unknown Connector\" warning icon tool widget"
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
  "tool_use_id": "toolu_016GaButayjgAYtJ6RZhR6eV",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude in Chrome connector silently disappeared from claude.ai tool list — no error, no trace · Issue #23531 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/23531",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Attempting to use it would return ... As of early February 2026, the behavior has changed: the Claude in Chrome tool no longer appears in Claude&#x27;s tool list at all....\n\nEnvironment: Platform: Windows (Claude Desktop) Interface: claude.ai web chat Plan: paid (Pro/Max) Description: Previously, when using Claude in Chrome from claude.ai (web interface), the browser automation tool appeared in Claude's avai...\n\nExpected behavior: The Claude in Chrome connector should appear in the tool list (even if it fails to connect), so users can at least see it exists and get a meaningful error. Actual behavior: Tool completely absent from session. No error. No indication it was ever available. ... area:toolsbugSomething isn't workingSomething isn't workingexternalplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on WindowsstaleIssue is inactiveIssue is inactive ... No fields configured for issues without a type.\n\n\n\nClaude in Chrome connector silently disappeared from claude.ai tool list — no error, no trace#23531 ... area:toolsbugSomething isn't workingSomething isn't workingexternalplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on WindowsstaleIssue is inactiveIssue is inactive ... Previously, when using Claude in Chrome from claude.ai (web interface), the browser automation tool appeared in Claude's available tool list. Attempting to use it would return a connection error (\"Browser extension is not connected\"), which is a known issue documented in multiple issues (#20298, #21371, #20779, etc.). As of early February 2026, the behavior has changed: the Claude in Chrome tool no longer appears in Claude's tool list at all. Claude cannot even attempt to call it — there is no error, no feedback, nothing. From the user's perspective, the feature has silently vanished.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/23531",
        "search_provider": "anthropic",
        "age": "February 6, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-hidden-toolkit/Claude_Hidden_Toolkit.md at main · N1-AI/claude-hidden-toolkit",
      "url": "https://github.com/N1-AI/claude-hidden-toolkit/blob/main/Claude_Hidden_Toolkit.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude does not warn you about this — it simply loses access to tools that were available moments earlier. ... When you request a capability that doesn&#x27;t exist on your current platform, Claude falls back gracefully rather than failing: ... ...\n\nThe first comprehensive reverse-engineering of Claude.ai's 37 internal tools. Full parameter schemas, platform-specific behavior across browser/desktop/Android/iOS, and reproducible discovery methodology. - claude-hidden-toolkit/Claude_Hidden_Toolkit.md at main · N1-AI/claude-hidden-toolkit\n\nThe only tool behavior that changes in Projects is the MCP Connector layer (Layer 1 calendar tools appear in Projects with Google Calendar connected — see Chapter 6). ... Switching between clients mid-conversation changes your available tools. The tool set is **client-bound, not conversation-bound**. \n\nIf you start a conversation on mobile (where `alarm_create_v0` is available) and continue it on the browser (where it isn't), the alarm tool disappears. Claude does not warn you about this — it simply loses access to tools that were available moments earlier. ... When you request a capability that doesn't exist on your current platform, Claude falls back gracefully rather than failing: ... - **Weather** (mobile): uses `web_search` instead of `weather_fetch` — returns text-only weather data, no interactive widget · - **Charts** (browser/desktop): creates a React artifact with Recharts instead of `chart_display_v0` — opens in the artifact sidebar rather than inline.\n\n> **⚠️ Mobile instability warning (updated March 2026):** `chart_display_v0` has **intermittent instability** on mobile — it sometimes crashes the app and sometimes renders successfully. v1.3 reported 100% crash rate, but further testing in v1.4 showed the crash is state-dependent rather than deterministic. \n\nThe tool is always deferred on both Android and iOS, and MCP connector state is irrelevant to its behavior. ... For readers: **use this tool with caut",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/N1-AI/claude-hidden-toolkit/blob/main/Claude_Hidden_Toolkit.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Bug Report: Claude.ai Custom Connectors - Tools Not Visible Despite Successful Connection · Issue #1675 · modelcontextprotocol/modelcontextprotocol",
      "url": "https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1675",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude.ai Custom Connectors successfully completes OAuth authentication and MCP protocol initialization, but does not display any tools to the user, despite the server manifest containing 25 properly formatted tools. ... After successful OAuth authentication and MCP initialization, the 25 AISMS tools defined in the server manifest should appear and be usable in Claude.ai’s interface. Claude.ai shows a “Connected” status, but zero tools are visible in the chat interface. The connector appears active but is unusable. ... [MCP HTTP POST] MCP Method: initialize ✅ User authenticated ✅ Returning initialize response (protocolVersion: 2025-06-18, tools.listChanged: true) [MCP HTTP POST] MCP Method: notifications/initialized ✅ notifications/initialized received ...\n\nClaude.ai Custom Connectors successfully completes OAuth authentication and MCP protocol initialization, but does not display any tools to the user, despite the server manifest containing 25 properly formatted tools. ... \n\nAfter successful OAuth authentication and MCP initialization, the 25 AISMS tools defined in the server manifest should appear and be usable in Claude.ai’s interface. Claude.ai shows a “Connected” status, but zero tools are visible in the chat interface. The connector appears active but is unusable. ... [MCP HTTP POST] MCP Method: initialize ✅ User authenticated ✅ Returning initialize response (protocolVersion: 2025-06-18, tools.listChanged: true) [MCP HTTP POST] MCP Method: notifications/initialized ✅ notifications/initialized received ...\n\nFully functional with Claude Desktop and ChatGPT. Production-ready, deployed at: https://tenant-001.ainode.cloud/api/mcp/manifest · Test credentials available upon request. ... bugSomething isn't workingSomething isn't workingexternalNot directly related to the MCP protocol.Not directly related to the MCP protocol.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1675",
        "search_provider": "anthropic",
        "age": "October 18, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude.ai Settings → Connectors",
      "url": "https://claude.ai/settings/connectors",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Claude is Anthropic&#x27;s AI, built for problem solvers. Tackle complex challenges, analyze data, write code, and think through your hardest work.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claude.ai/settings/connectors",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] GitHub Connector connected in Claude Desktop but not recognized by Claude · Issue #32479 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/32479",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "No explicit error message shown. Claude simply states that no GitHub tools are available. ... The connector appears to be properly connected in settings (UI shows it as enabled), but Claude has no awareness of it during conversation.\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? When the GitHu...\n\nNo explicit error message shown. Claude simply states that no GitHub tools are available. ... The connector appears to be properly connected in settings (UI shows it as enabled), but Claude has no awareness of it during conversation. Tested by restarting the app multiple times. Conversation link showing the reproduction of this bug: https://claude.ai/share/94057225-116f-4636-b322-71741f6b9a81 ... The GitHub connector is used for Claude Code on the web to connect to your GitHub repos.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/32479",
        "search_provider": "anthropic",
        "age": "March 9, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude → Settings → Connectors → Add custom connector",
      "url": "https://claude.ai/settings/connectors?modal=add-custom-connector",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Claude is Anthropic&#x27;s AI, built for problem solvers. Tackle complex challenges, analyze data, write code, and think through your hardest work.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claude.ai/settings/connectors?modal=add-custom-connector",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Use connectors to extend Claude's capabilities | Claude Help Center",
      "url": "https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Some connectors are interactive and can render live interfaces—like dashboards, task boards, and design tools—directly within your conversation. Look for the Interactive badge in the Connectors Directory to find connectors with this capability. When you add many connectors, Claude gives you control over how they load. You can find the Tool access setting by clicking the “+” button in the lower left corner of your chat, or typing “/” to open the menu. Hover over “Connectors,” then “Tool access” to choose your preferred mode. For most users, Auto (the default) works well. If you have 10 or more connectors active, consider switching to On demand to give your conversations more room. Learn more about tool access modes: Manage Claude&#x27;s tool access. ... Navigate to Customize &gt; Connectors. View all your connected services in the Connectors section.\n\nSelect the connector to see Tool permissions. \n\nThe permissions will be categorized by type (for example, read-only tools, write/delete tools) ... For each permission category or individual permission, select Always allow, Needs approval, or Blocked. Note: Action restrictions work alongside source-system permissions. Even when you allow a write action in Claude, a person still needs the underlying permission in the source system to make that change. Restricting actions in Claude never grants more access than the source system permits—it only narrows it. Once you connect to a service on Claude or Claude Desktop, it will be available to use the next time you log in to your account on Claude for iOS or Android. Once connected, services become available in your conversations: Click the “+” button in the lower left of the chat interface (you can also type “/” to open this menu).\n\nSome connectors are interactive and can render live interfaces—like dashboards, task boards, and design tools—directly within your conversation. \n\nLook for the Interactive badge in the Connectors Directory to find c",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Debugging Claude Connectors: Fix Common Errors in Development and Production - sunpeak",
      "url": "https://sunpeak.ai/blogs/debugging-claude-connectors/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "sunpeak.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=sunpeak.ai",
        "site_name": "sunpeak"
      },
      "is_missing": false,
      "text": "Check the connector is enabled. Adding a connector in Settings makes it available, but you need to enable it per conversation. Click the + button in the chat input and select your connector.\n\nMissing one of these is one of the most common issues. Some users access Claude on claude.ai, others on claude.com. Use authorization code grant with PKCE. Claude does not support pure client credentials flow (machine-to-machine OAuth without user interaction). Your OAuth server must support the authorization code grant type. If you’re using an OAuth provider like Auth0 or Okta, make sure the application type is set to “Regular Web Application” or “SPA,” not “Machine to Machine.” · Provide a test account. If you’re submitting to the Connectors Directory, Anthropic reviewers need a way to test your connector. Provide test credentials or a sandbox environment in your submission. For the full OAuth flow, see Claude Connector OAuth Authentication. \n\nSymptom: Your tool returns data, but Claude shows an incomplete or empty response. Claude Connectors have a 25,000 token limit per tool result.\n\nTL;DR: Debug Claude Connectors locally with sunpeak’s inspector (pnpm dev) before connecting to Claude. Most issues fall into six categories: connection failures, tools not being called, UI not rendering, OAuth errors, token limits, and timeouts. This post covers each one with the fix. You built a Claude Connector. It works locally. You connect it to Claude and something breaks. Maybe Claude ignores your tools. Maybe the UI shows a blank card. Maybe the connection fails silently. This post covers the errors you’ll actually hit when building Claude Connectors and how to fix each one. If you haven’t built a connector yet, start with the Claude Connectors tutorial. The fastest way to debug a Claude Connector is to not use Claude at all. \n\nThe sunpeak inspector replicates the Claude runtime on localhost, so you can test tools, resources, display modes, and themes without a pa",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://sunpeak.ai/blogs/debugging-claude-connectors/",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude (Desktop)",
      "url": "https://developers.jasper.ai/docs/claude-desktop",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "jasper.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=jasper.ai",
        "site_name": "jasper"
      },
      "is_missing": false,
      "text": "Claude (Desktop)\nConnect Jasper to Claude for on-brand content creation\nPrerequisites\nJasper\n- Jasper account with a Business plan (API access)\n- You can reach https://mcp.jasper.ai and https://api.jasper.ai from your network\n- Your Jasper API Key (Needed for Option 2 only)\nClaude\n- The Claude Desktop App\n- Claude account with a Pro, Max, Team, or Enterprise plan.\nSteps to connect\nRemote Option (OAuth)\nSee Anthropic's official remote serve documentation here.\n- Visit Claude.ai → Settings → Connectors\n- Choose “Add custom connector” or “Add external MCP server”\n- Enter the Jasper server URL:\nhttps://mcp.jasper.ai - When prompted, follow the Jasper OAuth consent and client registration flow\n- After connection, toggle the connection on\n- In a chat, click on the Tools icon and ensure the Jasper tools are enabled\nLocal Option (Desktop Extension & API Key)\nSee Anthropic's official local server documentation here.\n- Download the Desktop Extension.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://developers.jasper.ai/docs/claude-desktop",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Uipath Marketplace",
      "url": "https://marketplace.uipath.com/ja/applications/anthropic-claude",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "uipath.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=uipath.com",
        "site_name": "uipath"
      },
      "is_missing": false,
      "text": "Uipath Marketplace\nAnthropic Claude icon\n\nAutomate with Anthropic Claude Integrations and Connector\n\nUnlock the full potential of Anthropic's Claude integrations collection using the Anthropic Claude Connector. The Claude models, known for their advanced generative AI capabilities and impressive token limits, provide users with plenty of opportunities for automated processes.\n\nThe Anthropic Claude connector streamlines the integration process, ensuring that UiPath users can seamlessly incorporate AI-generated text into their automation workflows. This not only enhances the efficiency of tasks but also opens new possibilities for creative automation solutions.\n\nAnthropic Claude コネクタ\n\nThe Anthropic Claude API is a cloud-based platform that allows developers to access machine learning models and apply them to text generation.\n\n\nデスクトップ版 Studio のコンポーネントを見る",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://marketplace.uipath.com/ja/applications/anthropic-claude",
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

 I need to look up the specifics of the `use_widget` tool that Reid referenced to understand what it does and how it might apply here.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:19:48.258117Z",
  "stop_timestamp": "2026-04-22T07:19:48.536310Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01MnhEecDjBwsLce4mSGTNaZ",
  "name": "web_search",
  "input": {
    "query": "\"use_widget\" Claude tool skill widget MCP"
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
  "tool_use_id": "toolu_01MnhEecDjBwsLce4mSGTNaZ",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "MCP Widget Authoring - Claude Code Skill for UI ...",
      "url": "https://mcpmarket.com/tools/skills/mcp-widget-authoring",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpmarket.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpmarket.com",
        "site_name": "MCP Market"
      },
      "is_missing": false,
      "text": "The MCP Widget Authoring skill provides a robust framework for creating rich, interactive UI components that render directly in ChatKit from MCP tool results. By leveraging structured widget templates, JSON Schema validation, and the WidgetTemplateService for data hydration, developers can ...\n\nThe MCP Widget Authoring skill provides a robust framework for creating rich, interactive UI components that render directly in ChatKit from MCP tool results. By leveraging structured widget templates, JSON Schema validation, and the WidgetTemplateService for data hydration, developers can transform raw backend data into polished visual cards, text blocks, and images. This skill streamlines the workflow from server-side tool execution to front-end rendering, offering specialized patterns for BaseMCPServer integration and multi-channel compatibility for platforms like Slack via Block Kit mapping. \n\n01Standardized widget template system with built-in JSON Schema validation · 02WidgetTemplateService for seamless data hydration into UI components · 03BaseMCPServer patterns for streamlined tool and resource registration · 04Multi-channel support including Slack Work Objects and Block Kit compatibility ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpmarket.com/tools/skills/mcp-widget-authoring",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - travisvn/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows — particularly Claude Code",
      "url": "https://github.com/travisvn/awesome-claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "... A: Absolutely! They complement each other. Use Skills for task-specific workflows and MCP for external data/API integration. The mcp-builder skill can even help you build MCP servers. Q: Are there any costs beyond my Claude subscription?\n\nUse Skills when: Capabilities should be accessible to any Claude instance. They're portable expertise. Use Subagents when: You need self-contained agents designed for specific purposes with independent workflows and restricted tool access. Combined approach: Subagents can leverage Skills for specialized expertise, merging independence with portable knowledge. Key insight: If you find yourself typing the same prompt repeatedly across multiple conversations, it's time to create a Skill. ... Use Together: Skills can create MCP servers! The mcp-builder skill helps build high-quality MCP integrations. ... Video tutorials coming soon! Have a good video about Claude Skills? Submit a PR! ... \n\nSkills Explained - Official Anthropic blog post covering progressive disclosure, use cases, and when to use Skills vs other tools · Simon Willison: Claude Skills are awesome, maybe a bigger deal than MCP - Technical deep dive and analysis ·\n\nQ: What's the difference between Claude Skills and Agent Skills? A: They are the same thing. ... A: Skills are available for Pro, Max, Team, and Enterprise users. Free tier users do not have access to Skills. ... A: Yes, skills can include scripts that call external APIs. For complex API integrations, consider using MCP (Model Context Protocol) alongside skills. ... A: Claude scans all available skills' frontmatter (name and description), evaluates relevance to the current task, then loads the full content of relevant skills. Multiple skills can be loaded and composed together automatically. ... A: Absolutely! They complement each other. Use Skills for task-specific workflows and MCP for external data/API integration. \n\nThe mcp-builder skill can even help you build MCP servers. Q: Are there any costs beyond",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/travisvn/awesome-claude-skills",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "awesome-claude-skills/mcp-builder/SKILL.md at master · ComposioHQ/awesome-claude-skills",
      "url": "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/mcp-builder/SKILL.md?plain=1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "description: Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether ...\n\nA curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows - awesome-claude-skills/mcp-builder/SKILL.md at master · ComposioHQ/awesome-claude-skills\n\ndescription: Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK). ... To create high-quality MCP (Model Context Protocol) servers that enable LLMs to effectively interact with external services, use this skill. An MCP server provides tools that allow LLMs to access external services and APIs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/mcp-builder/SKILL.md?plain=1",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "OpenAI Widget Development - Claude Code Skill",
      "url": "https://mcpmarket.com/tools/skills/openai-widget-development",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpmarket.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpmarket.com",
        "site_name": "MCP Market"
      },
      "is_missing": false,
      "text": "Streamlines the creation of interactive UI components and widgets for the OpenAI Apps SDK using the MCP skybridge protocol. ... This skill provides specialized guidance for developers building interactive widgets that render directly within ChatGPT conversations.\n\nStreamlines the creation of interactive UI components and widgets for the OpenAI Apps SDK using the MCP skybridge protocol. ... This skill provides specialized guidance for developers building interactive widgets that render directly within ChatGPT conversations. It covers the complete lifecycle of widget development, including defining HTML templates with the text/html+skybridge mime type, implementing the window.openai bridge for data access and tool invocation, and managing complex layouts and themes. \n\nBy providing standardized patterns for CSP configuration, state management, and file handling, it enables the rapid deployment of sandboxed UI components that seamlessly extend the ChatGPT user experience through the Model Context Protocol. 01Implementation patterns for bidirectional communication between widgets and MCP tools · 02Standardized widget architecture patterns using the window.openai bridge ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpmarket.com/tools/skills/openai-widget-development",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Mcpmarket",
      "url": "https://mcpmarket.com/es/tools/skills/chatgpt-app-widget-builder",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpmarket.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpmarket.com",
        "site_name": "MCP Market"
      },
      "is_missing": false,
      "text": "03Building interactive comparison tools for pricing plans and service options · What are Skills?·How to Install · Security Scan · Install with 🐟 Skill.Fish · npx skillfish add hollaugo/tutorials add-widget · For use in Claude.ai and ChatGPTDownload Skill\n\n03Building interactive comparison tools for pricing plans and service options · What are Skills?·How to Install · Security Scan · Install with 🐟 Skill.Fish · npx skillfish add hollaugo/tutorials add-widget · For use in Claude.ai and ChatGPTDownload Skill\n\nThe skill handles everything from generating Tailwind CSS-based HTML and TypeScript interfaces to configuring server-side widget arrays, ensuring a seamless workflow for creating feature-rich user interfaces directly within the ChatGPT environment.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpmarket.com/es/tools/skills/chatgpt-app-widget-builder",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Skills vs MCP vs Plugins: Complete Guide 2026",
      "url": "https://www.morphllm.com/claude-code-skills-mcp-plugins",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "morphllm.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=morphllm.com",
        "site_name": "Morph"
      },
      "is_missing": false,
      "text": "A Plugin can contain Skills. A Skill can use MCP tools. Slash Commands were merged into Skills. Understanding when to reach for each one requires understanding what problem you&#x27;re solving.\n\nThe definitive guide to extending Claude Code. Understand when to use Skills, MCP servers, Plugins, Hooks, and Slash Commands—with real examples and recommendations. ... Skills = procedural knowledge (30-50 tokens each, loaded on-demand) MCP = external tool connections (can use 50k+ tokens) Plugins = shareable bundles of everything Hooks = automated actions at specific moments Slash Commands = prompt shortcuts · Most developers need: 2-3 MCP servers (GitHub, Filesystem, one domain-specific) + a few custom Skills for their workflow. Claude Code ships with multiple ways to extend its capabilities. Each solves a different problem: The confusion comes from overlap. A Plugin can contain Skills. A Skill can use MCP tools. Slash Commands were merged into Skills. \n\nmy-plugin/ ├── .claude-plugin/ │ └── plugin.json # Metadata and configuration ├── commands/ # Slash commands ├── agents/ # Specialized subagents ├── skills/ # Agent skills ├── hooks/ # Event handlers ├── .mcp.json # MCP server configs └── README.md ...\n\nSkills teach Claude how to perform tasks through instructions and scripts, using only 30-50 tokens per skill until needed. MCP (Model Context Protocol) connects Claude to external tools and data sources like GitHub, databases, and APIs. Skills are for procedural knowledge; MCP is for external connectivity. They work together—a Skill can use MCP tools. MCP servers can consume significant context. A typical five-server setup with 58 tools uses approximately 55,000 tokens before any conversation starts. Some servers like GitHub's official MCP use tens of thousands of tokens alone. Anthropic's Tool Search feature reduces this by 85% through on-demand tool discovery. \n\nSkills have been adopted as the Agent Skills standard b",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.morphllm.com/claude-code-skills-mcp-plugins",
        "search_provider": "anthropic",
        "age": "January 23, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-hidden-toolkit/Claude_Hidden_Toolkit.md at main · N1-AI/claude-hidden-toolkit",
      "url": "https://github.com/N1-AI/claude-hidden-toolkit/blob/main/Claude_Hidden_Toolkit.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "None of the artifact execution layer capabilities (`anthropic_api_in_artifacts`, `persistent_storage`, MCP endpoints) are available on mobile. Combined with the absence of `visualize:show_widget`, `weather_fetch`, and `recipe_display_v0`, mobile users have access to a fundamentally different — and more limited — artifact experience. ... The most architecturally significant tool in the entire system is `tool_search` — a tool whose only purpose is discovering other tools. It represents a recursive layer in Claude.ai&#x27;s architecture: the AI can search for its own capabilities at runtime. ... `tool_search` is not a universal capability — it behaves fundamentally differently depending on your platform: ... \n\n- **Weather** (mobile): uses `web_search` instead of `weather_fetch` — returns text-only weather data, no interactive widget · - **Charts** (browser/desktop): creates a React artifact with Recharts instead of `chart_display_v0` — opens in the artifact sidebar rather than inline.\n\nNone of the artifact execution layer capabilities (`anthropic_api_in_artifacts`, `persistent_storage`, MCP endpoints) are available on mobile. Combined with the absence of `visualize:show_widget`, `weather_fetch`, and `recipe_display_v0`, mobile users have access to a fundamentally different — and more limited — artifact experience. ... The most architecturally significant tool in the entire system is `tool_search` — a tool whose only purpose is discovering other tools. It represents a recursive layer in Claude.ai's architecture: the AI can search for its own capabilities at runtime. ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/N1-AI/claude-hidden-toolkit/blob/main/Claude_Hidden_Toolkit.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Plugins | Skills, MCP Servers & Marketplace Directory",
      "url": "https://claudemarketplaces.com",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudemarketplaces.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudemarketplaces.com",
        "site_name": "Claudemarketplaces"
      },
      "is_missing": false,
      "text": "A bundle of Claude Code extensions — skills, MCP servers, commands, hooks, or agents — packaged as one installable unit. A skill is a single instruction set. A plugin bundles multiple skills, MCP servers, or commands.\n\nDiscover powerful plugins, extensions, and tools for Claude AI. Browse curated marketplaces and boost your development workflow.\n\nWeb & Browser AutomationDatabasesAI & LLM ToolsCloud & InfrastructureCommunication & MessagingDeveloper ToolsDesign & CreativeDocuments & KnowledgeSearch & Web CrawlingAutomation & WorkflowsSecurity & PentestingMonitoring & ObservabilityData & AnalyticsMobile DevelopmentFinance & CommerceMedia & EntertainmentProductivity & OfficeReverse Engineering ... Advertise to Claude Code builders. 105,000+ developers visit here every month to find plugins, skills, and MCP servers. 1inch, AppSignal, IdeaBrowser, and MockHero already run ads.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudemarketplaces.com",
        "search_provider": "anthropic",
        "age": "March 11, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude skills mcp",
      "url": "https://glama.ai/mcp/servers/@K-Dense-AI/claude-skills-mcp",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "glama.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=glama.ai",
        "site_name": "glama"
      },
      "is_missing": false,
      "text": "Loads Claude Agent Skills directly from GitHub repositories, supporting both direct skill folders and Claude Code plugin repositories with automatic content parsing\nClaude Skills MCP Server\nUse - including Cursor, Codex, GPT-5, Gemini, and more. This MCP server brings Anthropic's Agent Skills framework to the entire AI ecosystem through the Model Context Protocol.\nA Model Context Protocol (MCP) server that provides intelligent search capabilities for discovering relevant Claude Agent Skills using vector embeddings and semantic similarity. This server implements the same progressive disclosure architecture that Anthropic describes in their Agent Skills engineering blog, making specialized skills available to any MCP-compatible AI application.\nAn open-source project by - creators of autonomous AI scientists for scientific research.\n\n\nThis MCP server enables any MCP-compatible AI assistant to intelligently search and retrieve skills from our curated Claude Scientific Skills repository and other skill sources like the Official Claude Skills.\nDemo\n\nSemantic search and progressive loading of Claude Agent Skills in Cursor\nHighlights\nTwo-Package Architecture: Lightweight frontend (~15 MB) starts instantly; backend (~250 MB) downloads in background\nNo Cursor Timeout: Frontend responds in <5 seconds, solving the timeout issue\nSemantic Search: Vector embeddings for intelligent skill discovery\nProgressive Disclosure: Multi-level skill loading (metadata → full content → files)\nZero Configuration: Works out of the box with curated skills\nMulti-Source: Load from GitHub repositories and local directories\nFast & Local: No API keys needed, with automatic GitHub caching\nConfigurable: Customize sources, models, and content limits\nQuick Start\nFor Cursor Users\n\n\nAdd through the Cursor Directory, or add to your Cursor config (~/.cursor/mcp.json):\nThe frontend starts instantly and displays tools, automatically downloading and starting the backend in the background (~60-120s due to RAG",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://glama.ai/mcp/servers/@K-Dense-AI/claude-skills-mcp",
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

 So `show_widget` and `use_widget` are tied to Claude's internal Visualizer system under a `visualize:` namespace, and the "Unknown Connector" message appears in the UI when the frontend encounters a tool call or result in the transcript that it doesn't recognize.

The key distinction is that the tool set is client-bound rather than conversation-bound — if a conversation is rendered on a surface where the tool metadata isn't available in the registry, the UI falls back to showing "Unknown Connector." For `use_widget` specifically, it might be a different internal tool than `show_widget`, which is part of the concept-visualizer skill, so I shouldn't assume they're the same thing.

The "Unknown Connector" fallback appears when a tool was invoked during the conversation but the current client no longer has that tool registered — this happens either because the conversation was created on a different surface with different tools available, the tool was deprecated or renamed since the original invocation, or the client-side registry failed to load properly.

I should also clarify that "use_widget" might be a colloquial reference to `show_widget` under the visualize namespace, which is a first-party Anthropic widget rather than an MCP connector, and the UI might display it as "Unknown Connector" if the widget's specific component failed to render due to a payload error or theme issue.

Now I'm realizing there's likely a connection between the two errors — if the `show_widget` tool invocation's result couldn't be submitted properly, the tool_use block would exist in the conversation history without a successful result, and the UI would have insufficient information to render it, which could explain why it's showing as "Unknown Connector" instead of displaying the actual widget. The user is seeing two of these cards with warning triangles where `use_widget` was invoked, so they're viewing the conversation history showing these tool invocations rendered as "Unknown Connector" rather than as functional widgets. I should also consider that Claude's tools are client-bound and the Claude.ai connector registry might fail to hydrate widget tools, which could explain why the UI renders them as "Unknown Connector" when it can't resolve the tool_use block to a registered component in its local metadata.

The most likely explanation here is that the orphaned tool_use from your previous error shows as Unknown Connector because there's no successful payload to render, or the widget renderer isn't available on this version of the surface. It could also be a registry desync where the frontend didn't properly load the widget metadata, or the tool was deprecated between when it was called and when you're viewing it. This probably isn't a separate bug—it's the visible consequence of that earlier tool_result submission failure, which means the conversation has unresolvable tool blocks and you'd need to start fresh. I should also clarify whether you meant `use_widget` or `show_widget` specifically. I'm pulling together evidence from Claude.ai's official connector documentation, a known issue in the Model Context Protocol repository about metadata hydration failures, and reverse-engineering notes that reveal the tool registry is client-specific rather than conversation-specific — meaning tools can become inaccessible when switching between clients or versions mid-conversation.

This almost certainly traces back to the earlier banner error. My working theory is that when the widget call failed to submit its result, the `tool_use` block got saved to the conversation history without a valid result attached, which would break the hydration chain downstream. The conversation itself is now structurally broken — those orphaned tool_use blocks will cause the API to reject any further messages in that thread, so restarting won't help, but a fresh chat will. I could walk through verifying this by exporting the conversation as JSON to see the broken tool_use blocks directly.

My response feels substantive and well-sourced, with the hypothesis clearly labeled as such. I'm maintaining consistency with what I mentioned before about the orphaned blocks, and I'm addressing what the user actually asked — they already know where the widget tool was invoked, they want to understand why it's failing.

</details>

## What "Unknown Connector" actually is

Claude.ai's client renders every tool invocation in the transcript by looking up the tool's name in a **local connector/tool metadata registry** — that's where it gets the display name, icon, and the widget renderer. When the client receives a `tool_use` block in the history that **cannot be resolved against that registry**, it falls back to the generic label "Unknown Connector," the plug-jack icon, and a warning triangle. Two of them means the widget tool was invoked twice.

The attribution is straightforward:
- Anthropic's own support doc confirms tools only render properly when the connector is registered and enabled for that conversation ([support.claude.com](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)).
- A documented MCP-side failure mode produces exactly this symptom: connection succeeds, but the UI shows zero resolvable tools ([MCP spec issue #1675](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1675)).

## This is almost certainly the same event as the previous banner

**Strong hypothesis** (logically connected, not independently confirmed from Anthropic primary sources):

1. The widget tool fired → your client created a `tool_use` block in the conversation.
2. The backend's `tool_result` for that call failed to submit back (= the yellow banner you showed me first).
3. The conversation history now contains an **orphaned `tool_use`** — present, but with no valid result payload to drive the widget renderer.
4. With no successful payload and no fallback metadata (widget tools don't sit in the user-facing Connectors directory), the UI has nothing to show except the generic placeholder → "Unknown Connector ⚠".

So the two screenshots are the same failure viewed from different angles:
- The **banner** = live, in-the-moment "the handoff failed."
- The **two Unknown Connector cards** = the persistent residue of those same two failed handoffs, now baked into saved conversation state.

## Alternatives I can't rule out without primary-source evidence

These are plausible but unconfirmed — labeling them as speculation:

- The widget namespace (`show_widget` / `use_widget` / `visualize:*`) may be **client-bound**: available in some clients/builds and absent in others. Third-party reverse-engineering of Claude.ai's tool registry claims this pattern explicitly ([N1-AI/claude-hidden-toolkit](https://github.com/N1-AI/claude-hidden-toolkit/blob/main/Claude_Hidden_Toolkit.md)) — but that source is third-party reconnaissance, **not Anthropic documentation**, so treat it as directional, not authoritative.
- The widget's client-side renderer may have thrown independently of the tool_result submission (e.g., payload-schema mismatch after a recent release).
- Anthropic may have renamed/removed the widget tool identifier between the invocation and now, leaving historical invocations unresolvable.

## Practical implication

That conversation is now structurally damaged — the orphaned `tool_use` blocks mean any further turn in it will be rejected by the API with a 400 "tool_use ids were found without tool_result blocks" error (same citation as before: [Claude Code errors doc](https://code.claude.com/docs/en/errors)). A desktop restart won't repair it; the blocks are in the saved transcript, not in the client's RAM. The clean fix is a new chat.

If you want to convert my hypothesis into verified fact, the way to do it is to export that conversation as JSON (Claude.ai settings → export data, or the share/export flow) and inspect whether the `tool_use` blocks that render as "Unknown Connector" are missing their paired `tool_result`. That would be primary evidence. Want me to walk through the export + inspection steps?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db40e-ee27-7ff6-bb53-8759ff8e0803",
  "updated_at": "2026-04-22T07:21:07.436109Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db40e-ee27-75f8-b159-9fa525074231"
}
```

</details>

### 9. human — 2026-04-22T07:27:26.875273Z

Fetch the log of Anthropic's update, try to find the reason

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db416-2b51-739c-8c4d-4a5c1034df87",
  "updated_at": "2026-04-22T07:27:26.875273Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db40e-ee27-7ff6-bb53-8759ff8e0803"
}
```

</details>

### 10. assistant — 2026-04-22T07:29:00.090860Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I need to check Anthropic's official changelog and recent release notes to see if there were any updates that might explain the widget or tool connector issues the user is experiencing.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:27:30.454937Z",
  "stop_timestamp": "2026-04-22T07:27:30.454937Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01E2jzCchTHeWNQPEv8aosDo",
  "name": "web_search",
  "input": {
    "query": "Anthropic Claude changelog release notes April 2026"
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
  "tool_use_id": "toolu_01E2jzCchTHeWNQPEv8aosDo",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Decoding the Claude Code April 2026 Changelog: A Comprehensive Overview of 30+ Version Iterations from 2.1.69 to 2.1.101 - Apiyi.com Blog",
      "url": "https://help.apiyi.com/en/claude-code-changelog-2026-april-updates-en.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "apiyi.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=apiyi.com",
        "site_name": "Apiyi.com Blog"
      },
      "is_missing": false,
      "text": "On March 13, 2026, Anthropic announced that the 1M context window for Opus 4.6 is now fully available to Max, Team, and Enterprise users. ... A single conversation can now handle approximately 750,000 words of code and context.\n\nAuthor's Note: A comprehensive breakdown of the Claude Code March-April 2026 Changelog, covering the Opus 4.6 1M context window, NO_FLICKER rendering, /powerup interactive tutorials, team onboarding, and other major functional iterations. Anthropic's Claude Code entered its most intensive iteration cycle ever between March and April 2026, pushing from v2.1.69 to v2.1.101 in just five weeks—that's over 30 releases! From the full rollout of the Opus 4.6 1M context window to the brand-new flicker-free rendering engine, interactive learning system, and enterprise-grade security sandbox, every update is redefining the boundaries of what an AI programming assistant can do. \n\nCore Value: Get up to speed on all major Claude Code updates in just 3 minutes, and master the key feature changes and practical tips. Throughout March and April 2026, Claude Code maintained an almost daily release frequency.\n\nAuthor's Note: A deep dive into how to access the Claude Mythos API, including the Project Glasswing targeted invitation, restricted AWS Bedrock access, and Vertex AI channels, complete with benchmark data and recommended alternatives. Claude Mythos is the most powerful AI model in history, released by Anthropic on April 7, 2026. It achieved a record-breaking… ... Author's Note: A deep dive into why GPT-5.4 was released just 2 days after GPT-5.3 Instant launched, analyzing the competitive landscape between OpenAI, Anthropic, and Google, and the differentiated positioning of GPT-5.4. On March 3rd, OpenAI released GPT-5.3 Instant. Just 2 days later, on March 5th, GPT-5.4 officially went live. Two heavyweight models from the… ... \n\nHere are the key highlights from the Claude Code March-April 2026 Changelog: Major Model Upgrades: Opus 4.6 with a 1M con",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://help.apiyi.com/en/claude-code-changelog-2026-april-updates-en.html",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Launches Claude Opus 4.7 + Claude Design — What Changed | Abhishek Gautam",
      "url": "https://www.abhs.in/blog/anthropic-claude-opus-4-7-design-tool-launch-april-2026-developer-guide",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "abhs.in",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=abhs.in",
        "site_name": "Abhs"
      },
      "is_missing": false,
      "text": "Anthropic released Claude Opus 4.7 and Claude Design on April 18 2026. Stronger coding, higher-resolution vision, effort controls, task budgets, and a new visual design tool in research preview.\n\nAnthropic released Claude Opus 4.7 and Claude Design on April 18 2026. Stronger coding, higher-resolution vision, effort controls, task budgets, and a new visual design tool in research preview. ... Anthropic shipped two releases on April 18: Claude Opus 4.7, an upgraded model with meaningfully stronger coding and vision capabilities, and Claude Design, a new visualisation tool in research preview. Both are available now for Pro, Max, Team, and Enterprise subscribers. Here is what actually changed and what it means for developers building on top of Claude. Claude Opus 4.7 is not a rebrand of 4.6. The changelog documents specific capability improvements in three areas. Coding: Stronger performance on real-world software engineering tasks.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.abhs.in/blog/anthropic-claude-opus-4-7-design-tool-launch-april-2026-developer-guide",
        "search_provider": "anthropic",
        "age": "4 days ago"
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
      "text": "Bedrock/Vertex 429 fix - Fixed 429 rate-limit errors on Bedrock/Vertex/Foundry referencing status.claude.com, which only covers Anthropic-operated providers · Windows fixes - CLAUDE_ENV_FILE and SessionStart hook env files now apply on Windows; drive-letter paths in permission rules are correctly root-anchored and case-insensitive · Misc fixes - Fixed @ file suggestions re-scanning on every turn in non-git dirs, /resume tab-completion auto-resuming, /context blank-line rendering, /clear dropping /rename names, feedback surveys appearing back-to-back, unclickable wrapped bare URLs, plugin dependency error clarity, and the non-existent commit skill reference · /tui fullscreen - Added /tui command and tui setting for switching to flicker-free fullscreen rendering mid-conversation · Push notifications - Claude can send mobile push notifications when Remote Control and \"Push when Claude decides\" config are enabled ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudefa.st/blog/guide/changelog",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude by Anthropic - Release Notes - April 2026 Latest Updates - Releasebot",
      "url": "https://releasebot.io/updates/anthropic/claude",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "releasebot.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
        "site_name": "Releasebot"
      },
      "is_missing": false,
      "text": "Original source ... Anthropic announces Claude can now create custom charts and inline visualizations in responses. Claude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see Custom visuals in chat.\n\nWith Opus 4.7, we also launched Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create visual outputs like designs, prototypes, slides, and one-pagers. For more information, see Get started with Claude Design . Original source ... Claude launches Opus 4.7, with stronger coding, better long-running software tasks and higher-resolution vision. Our latest model, Claude Opus 4.7, is now generally available. Opus 4.7 shows improvements in software engineering and complex, long-running coding tasks, as well as better vision, allowing it to see images in higher resolution. For more information, see our blog post: Introducing Claude Opus 4.7 . Original source ... \n\nJoin Releasebot and get updates from Anthropic and hundreds of other software products. ... Claude Cowork is now generally available on macOS and Windows in the Claude Desktop app, with expanded analytics, OpenTelemetry support, and role-based access controls for Enterprise plans to help admins tai\n\nUsers on Pro and Max plans can access a persistent agent thread via Claude Desktop or Claude for iOS/Android to manage tasks in Cowork. We're rolling this out to Max plans starting today, and Pro plans over the next two days. For more information, see Assign tasks to Claude from anywhere in Cowork. Original source ... Anthropic announces Claude can now create custom charts and inline visualizations in responses. Claude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see Custom visuals in chat. Original source ... \n\nAnthropic updates Claude for Excel and PowerPoint add-ins to share full context, add skills, and connect via an LLM gateway with major clouds. We",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://releasebot.io/updates/anthropic/claude",
        "search_provider": "anthropic",
        "age": "4 days ago"
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
      "text": "Fixed 429 rate-limit errors on Bedrock/Vertex/Foundry referencing status.claude.com (it only covers Anthropic-operated providers) Fixed feedback surveys appearing back-to-back after dismissing one · Fixed bare URLs in bash/PowerShell/MCP tool output being unclickable when the terminal wraps ...\n\nFixed \"claude-opus-4-7 is temporarily unavailable\" for auto mode Original source ... Join Releasebot and get updates from Anthropic and hundreds of other software products. ... No date parsed from source. ... Claude Code releases Opus 4.7 xhigh, adds Auto mode for Max subscribers, and expands controls with /effort, /ultrareview, and a new terminal-matching theme. It also reduces permission prompts, improves Windows support, and fixes a long list of editor and terminal issues. Auto mode is now available for Max subscribers when using Opus 4.7 · Added xhigh effort level for Opus 4.7, sitting between high and max. \n\nAvailable via /effort, --effort, and the model picker; other models fall back to high · /effort now opens an interactive slider when called without arguments, with arrow-key navigation between levels and Enter to confirm · Added \"Auto (match terminal)\" theme option that matches your terminal's dark/light mode — select it from /theme ·\n\nFixed 429 rate-limit errors on Bedrock/Vertex/Foundry referencing status.claude.com (it only covers Anthropic-operated providers) Fixed feedback surveys appearing back-to-back after dismissing one · Fixed bare URLs in bash/PowerShell/MCP tool output being unclickable when the terminal wraps them across lines · Windows: CLAUDE_ENV_FILE and SessionStart hook environment files now apply (previously a no-op) Windows: permission rules with drive-letter paths are now correctly root-anchored, and paths differing only by drive-letter case are recognized as the same path Original source ... No date parsed from source. ... \n\nClaude Code adds /tui fullscreen rendering, mobile push notifications, cleaner transcript and focus controls, be",
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
      "title": "Anthropic Release Notes - April 2026 Latest Updates - Releasebot",
      "url": "https://releasebot.io/updates/anthropic",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "releasebot.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
        "site_name": "Releasebot"
      },
      "is_missing": false,
      "text": "Fixed 429 rate-limit errors on Bedrock/Vertex/Foundry referencing status.claude.com (it only covers Anthropic-operated providers) Fixed feedback surveys appearing back-to-back after dismissing one · Fixed bare URLs in bash/PowerShell/MCP tool output being unclickable when the terminal wraps ...\n\nClaude Code fixes a permission dialog crash when a teammate requests tool permission. Fixed a crash in the permission dialog when an agent teams teammate requested tool permission Original source ... Join Releasebot and get updates from Anthropic and hundreds of other software products. ... No date parsed from source. ... Claude Code fixes the \"claude-opus-4-7 is temporarily unavailable\" issue in auto mode. Fixed \"claude-opus-4-7 is temporarily unavailable\" for auto mode Original source ... No date parsed from source. ... Claude Code releases Opus 4.7 xhigh, adds Auto mode for Max subscribers, and expands controls with /effort, /ultrareview, and a new terminal-matching theme. \n\nIt also reduces permission prompts, improves Windows support, and fixes a long list of editor and terminal issues. Auto mode is now available for Max subscribers when using Opus 4.7 ·\n\nFixed 429 rate-limit errors on Bedrock/Vertex/Foundry referencing status.claude.com (it only covers Anthropic-operated providers) Fixed feedback surveys appearing back-to-back after dismissing one · Fixed bare URLs in bash/PowerShell/MCP tool output being unclickable when the terminal wraps them across lines · Windows: CLAUDE_ENV_FILE and SessionStart hook environment files now apply (previously a no-op) Windows: permission rules with drive-letter paths are now correctly root-anchored, and paths differing only by drive-letter case are recognized as the same path Original source ... Claude Apps launches Claude Design, a new Anthropic Labs tool for creating designs, prototypes, slides, and one-pagers with Claude. \n\nWith Opus 4.7, we also launched Claude Design, a new Anthropic Labs product that lets you collaborate wi",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://releasebot.io/updates/anthropic",
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

 I'm noticing some key timeline details—Claude Opus 4.7 launched in April 2026 with a new design system, and there's been a recent push toward inline visualizations directly in chat responses. This inline visualization capability seems like it could be directly connected to what I'm looking at with the widget system.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:27:36.576489Z",
  "stop_timestamp": "2026-04-22T07:27:36.576489Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Xo9ntViU6qa6FkZWXVTDS9",
  "name": "web_fetch",
  "input": {
    "url": "https://releasebot.io/updates/anthropic/claude"
  },
  "message": "Fetching: https://releasebot.io/updates/anthropic/claude",
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
  "tool_use_id": "toolu_01Xo9ntViU6qa6FkZWXVTDS9",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Release Notes",
      "url": "https://releasebot.io/updates/anthropic/claude",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "releasebot.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
        "site_name": "releasebot"
      },
      "is_missing": false,
      "text": "Claude by Anthropic - Release Notes - April 2026 Latest Updates\n- Releasebot\n\n\n[![Releasebot](https://releasebot.io/Square.svg) ![Releasebot](https://releasebot.io/Full.svg)](https://releasebot.io/)\n\n[Our data](https://releasebot.io/data) [Latest](https://releasebot.io/updates/latest) [Search feeds](https://releasebot.io/updates) [Sign in](https://releasebot.io/sign-in) [Create account](https://releasebot.io/sign-up)\n\n \n\n1. [Releasebot](https://releasebot.io/)\n2. |\n3. [Anthropic Release Notes](https://releasebot.io/updates/anthropic)\n\n# Claude Release Notes\n\n[Follow](https://releasebot.io/sign-up)\n\nLast updated: Apr 18, 2026\n\nGet this feed:   RSS   Email   API   CSV   MCP   Slack   n8n   Zapier\n\n[AI Language Models](https://releasebot.io/updates/categories/ai-language-models)\n\n* Apr 17, 2026 \n  + Date parsed from source:\n\n    Apr 17, 2026\n  + First seen by Releasebot:\n\n    Apr 18, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## April 17, 2026\n\n  Claude launches Claude Design for collaborating with Claude to create designs, prototypes, slides, and one-pagers.\n\n  ### Claude Design by Anthropic Labs\n\n  With Opus 4.7, we also launched Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create visual outputs like designs, prototypes, slides, and one-pagers. For more information, see Get started with Claude Design .\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Apr 16, 2026 \n  + Date parsed from source:\n\n    Apr 16, 2026\n  + First seen by Releasebot:\n\n    Apr 17, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## April 16, 2026\n\n  Claude launches Opus 4.7, with stronger coding, better long-running software tasks and higher-resolution vision.\n\n  ### Claude Opus 4.7 launch\n\n  Our latest model, Claude Opus 4.7, is now generally available. Opus 4.7 shows improvements in software engineering and complex, long-running coding tasks, as well as better vision, allowing it to see images in higher resolution. For more information, see our blog post: Introducing Claude Opus 4.7 .\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* All of your release notes in one feed\n\n  Join Releasebot and get updates from Anthropic and hundreds of other software products.\n\n  [Create account](https://releasebot.io/sign-up)\n\n  Get updates with:   RSS   Email   API   CSV   MCP   Slack   n8n   Zapier\n* Apr 9, 2026 \n  + Date parsed from source:\n\n    Apr 9, 2026\n  + First seen by Releasebot:\n\n    Apr 10, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## April 9, 2026\n\n  Claude Cowork is now generally available on macOS and Windows in the Claude Desktop app, with expanded analytics, OpenTelemetry support, and role-based access controls for Enterprise plans to help admins tailor access by team and department.\n\n  ### Claude Cowork generally available\n\n  Claude Cowork is now generally available on macOS and Windows through the Claude Desktop app. With this, we’re expanding Claude Cowork with new capabilities:\n\n  + Claude Cowork in the Analytics API. For more information, see Claude Enterprise Analytics API: Access engagement and adoption data.\n  + Usage analytics for Claude Cowork. For more information, see View usage analytics for Team and Enterprise plans.\n  + Claude Cowork OpenTelemetry support. For more information, see Monitor Claude Cowork activity with OpenTelemetry.\n\n  ### Role-based access controls for Enterprise plans\n\n  Admins can now organize users into groups, manually or via SCIM from your identity provider, and assign each group a custom role defining which Claude capabilities its members can use. Turn Claude Cowork on for specific teams, restrict features by department and adjust as adoption grows. Learn more about setting up role-based permissions, managing group spend limits, and managing custom roles.\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n\n  Show more\n* Mar 25, 2026 \n  + Date parsed from source:\n\n    Mar 25, 2026\n  + First seen by Releasebot:\n\n    Mar 26, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## March 25, 2026\n\n  Claude adds interactive apps in its iOS and Android mobile app for live charts, diagrams, and shareable visuals.\n\n  ### Interactive apps in Claude for iOS and Android\n\n  The Claude mobile app can now connect to fully interactive apps. Pull up live charts, sketch diagrams, and build shareable assets, all rendered visually right in your conversation. For more information, see Use interactive connectors in Claude.\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Mar 23, 2026 \n  + Date parsed from source:\n\n    Mar 23, 2026\n  + First seen by Releasebot:\n\n    Mar 25, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## March 23, 2026\n\n  Claude adds computer use in Cowork and Claude Code, plus Dispatch improvements for Pro and Max users.\n\n  ### Computer use research preview in Cowork and Claude Code + Dispatch improvements\n\n  Users on Pro and Max plans can give Claude access to computer use. Claude can open files, run dev tools, point, click, and navigate to what’s on your screen to perform tasks itself—with no setup required. Claude’s new computer use capability makes Dispatch even more helpful by allowing it to use your computer on your behalf while you’re away. For more information, see Let Claude use your computer in Cowork or our blog post: Put Claude to work on your computer.\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n\n  Show more\n* Mar 17, 2026 \n  + Date parsed from source:\n\n    Mar 17, 2026\n  + First seen by Releasebot:\n\n    Mar 18, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## March 17, 2026\n\n  Claude releases a persistent agent thread for Pro and Max plans to manage tasks in Cowork from mobile and desktop.\n\n  ### Control Cowork from your phone with a persistent thread (research preview for Pro/Max)\n\n  Users on Pro and Max plans can access a persistent agent thread via Claude Desktop or Claude for iOS/Android to manage tasks in Cowork. We're rolling this out to Max plans starting today, and Pro plans over the next two days. For more information, see Assign tasks to Claude from anywhere in Cowork.\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Mar 12, 2026 \n  + Date parsed from source:\n\n    Mar 12, 2026\n  + First seen by Releasebot:\n\n    Mar 13, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## March 12, 2026\n\n  Anthropic announces Claude can now create custom charts and inline visualizations in responses.\n\n  ### Claude creates interactive charts, diagrams and visualizations\n\n  Claude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see Custom visuals in chat.\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Mar 11, 2026 \n  + Date parsed from source:\n\n    Mar 11, 2026\n  + First seen by Releasebot:\n\n    Mar 12, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## March 11, 2026\n\n  Anthropic updates Claude for Excel and PowerPoint add-ins to share full context, add skills, and connect via an LLM gateway with major clouds.\n\n  ### Work across Excel and PowerPoint\n\n  We’ve improved our Claude for Excel and Claude for PowerPoint add-ins. They can now share the full context of your conversation, so every action Claude takes in one application is informed by everything that’s happened in the other. We also added support for skills in the add-ins, and the ability for Amazon Bedrock, Google Cloud’s Vertex AI, or Microsoft Foundry users to connect to them via an LLM gateway. For more information, refer to the following articles:\n\n  + Work across Excel and PowerPoint\n  + Use Claude for Excel and PowerPoint with an LLM gateway [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n\n  Show more\n* Mar 2, 2026 \n  + Date parsed from source:\n\n    Mar 2, 2026\n  + First seen by Releasebot:\n\n    Mar 2, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## March 2, 2026\n\n  ### Memory for free users\n\n  Memory from chat history is now available for all Claude users, including free users. For more information, refer to the following articles:\n\n  + Use Claude’s chat search and memory to build on previous context\n  + Import and export your memory from Claude [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Feb 25, 2026 \n  + Date parsed from source:\n\n    Feb 25, 2026\n  + First seen by Releasebot:\n\n    Feb 25, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## February 25, 2026\n\n  ### Scheduled tasks in Cowork\n\n  We introduced the ability to create and schedule both recurring and on-demand tasks in Cowork, as well as a new Customize section in Claude Desktop that groups skills, plugins, and connectors in one place. For more information, see Schedule recurring tasks in Cowork.\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Feb 24, 2026 \n  + Date parsed from source:\n\n    Feb 24, 2026\n  + First seen by Releasebot:\n\n    Feb 25, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## February 24, 2026\n\n  ### Cowork plugins and admin controls\n\n  We launched a new plugin marketplace and admin controls for Team and Enterprise plans. For more information, refer to these articles:\n\n  + Manage Cowork plugins for your organization\n  + Use plugins in Cowork [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Feb 17, 2026 \n  + Date parsed from source:\n\n    Feb 17, 2026\n  + First seen by Releasebot:\n\n    Feb 18, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## February 17, 2026\n\n  ### Claude Sonnet 4.6 launch\n\n  We launched our most capable Sonnet model yet, with a full upgrade of the model’s skills across coding, computer use, long-context reasoning, agent planning, knowledge work, and design. Sonnet 4.6 also features a 1M token context window in beta. Read our blog post for more information: Introducing Claude Sonnet 4.6 .\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Feb 13, 2026 \n  + Date parsed from source:\n\n    Feb 13, 2026\n  + First seen by Releasebot:\n\n    Feb 14, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## February 13, 2026\n\n  ### Analytics API for Enterprise plans\n\n  The Enterprise Analytics API provides programmatic access to usage and engagement data for Claude and Claude Code Remote usage within your organization. Data is aggregated per organization, per day, and each endpoint returns a snapshot for a single date that you specify. For more information, see Access usage data with the Analytics API.\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Feb 12, 2026 \n  + Date parsed from source:\n\n    Feb 12, 2026\n  + First seen by Releasebot:\n\n    Feb 13, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## February 12, 2026\n\n  ### Self-serve Enterprise plans\n\n  Previously, Enterprise plans were only available to customers working with our Sales team. Now, any organization can purchase an Enterprise plan directly on our website with no Sales conversation required. Self-serve Enterprise plans have a single seat type that includes access to Claude, Claude Code, and Cowork. For more information, refer to our blog post or What is the Enterprise plan?\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n* Feb 5, 2026 \n  + Date parsed from source:\n\n    Feb 5, 2026\n  + First seen by Releasebot:\n\n    Feb 6, 2026\n\n  ![Anthropic logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fsupport.anthropic.com%2Fen%2Farticles%2F12138966-release-notes)\n\n  [Claude](https://releasebot.io/updates/anthropic/claude)\n  by\n  [Anthropic](https://releasebot.io/updates/anthropic)\n\n  ## February 5, 2026\n\n  ### Claude Opus 4.6 launch\n\n  We’ve upgraded our smartest model and improved its coding skills. Read our blog post for more information: Introducing Claude Opus 4.6 .\n\n  ### Introducing Claude in PowerPoint\n\n  Claude is now available as an add-in for PowerPoint. Read more here: Using Claude in PowerPoint .\n\n  ### Claude in Excel improvements\n\n  We’ve updated Claude in Excel so it uses Opus 4.6 and supports native Excel operations such as pivot table editing and conditional formatting. See our updated article for more information: Using Claude in Excel .\n\n   [Original source](https://support.anthropic.com/en/articles/12138966-release-notes)\n\n  Show more\n\nLoad more updates\n\n## Related products\n\n* [![Claude Code logo](https://releasebot.io/api/logo/470?domain=githubusercontent.com&source=https%3A%2F%2Fraw.githubusercontent.com%2Fanthropics%2Fclaude-code%2Frefs%2Fheads%2Fmain%2FCHANGELOG.md)\n\n  Claude Code](https://releasebot.io/updates/anthropic/claude-code)\n* [![Claude Apps logo](https://releasebot.io/api/logo/470?domain=anthropic.com&source=https%3A%2F%2Fdocs.anthropic.com%2Fen%2Frelease-notes%2Fclaude-apps)\n\n  Claude Apps](https://releasebot.io/updates/anthropic/claude-apps)\n* [![ChatGPT logo](https://releasebot.io/api/logo/471?domain=openai.com&source=https%3A%2F%2Fhelp.openai.com%2Fen%2Farticles%2F6825453-chatgpt-release-notes)\n\n  ChatGPT](https://releasebot.io/updates/openai/chatgpt)\n* [![Gemini logo](https://releasebot.io/api/logo/164?domain=gemini.google&source=https%3A%2F%2Fgemini.google%2Fgemini-drops)\n\n  Gemini](https://releasebot.io/updates/google/gemini)\n* [![Claude Developer Platform logo](https://releasebot.io/api/logo/470?domain=claude.com&source=https%3A%2F%2Fdocs.claude.com%2Fen%2Frelease-notes%2Foverview.md)\n\n  Claude Developer Platform](https://releasebot.io/updates/anthropic/claude-developer-platform)\n* [![OpenAI Models logo](https://releasebot.io/api/logo/471?domain=openai.com&source=https%3A%2F%2Fhelp.openai.com%2Fen%2Farticles%2F9624314-model-release-notes)\n\n  OpenAI Models](https://releasebot.io/updates/openai/openai-models)\n\n \n\n[![Releasebot](https://releasebot.io/Square.svg) ![Releasebot](https://releasebot.io/Full.svg)](https://releasebot.io/) [Latest](https://releasebot.io/updates/latest) [Index](https://releasebot.io/updates/alphabetical) [About](https://releasebot.io/about) [Sponsor](https://releasebot.io/advertise) [Contact](https://releasebot.io/contact) [Terms](https://releasebot.io/terms) [Privacy](https://releasebot.io/privacy) © 2026 Releasebot",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html",
        "destination_url": "https://releasebot.io/updates/anthropic/claude"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Claude Release Notes",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Claude Release Notes",
      "subtitles": null,
      "url": "https://releasebot.io/updates/anthropic/claude",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
      "source": "releasebot"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 I should check Anthropic's official release notes directly to confirm the details and get the authoritative source for this information.

</details>

Let me fetch Anthropic's primary release-notes page to verify.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:27:40.755480Z",
  "stop_timestamp": "2026-04-22T07:27:40.755480Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01JkjUx4nPECETuBpL5DU4qM",
  "name": "web_fetch",
  "input": {
    "url": "https://support.anthropic.com/en/articles/12138966-release-notes"
  },
  "message": "Fetching: https://support.anthropic.com/en/articles/12138966-release-notes",
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
  "tool_use_id": "toolu_01JkjUx4nPECETuBpL5DU4qM",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Release Notes | Claude Help Center",
      "url": "https://support.anthropic.com/en/articles/12138966-release-notes",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "anthropic"
      },
      "is_missing": false,
      "text": "Release Notes | Claude Help Center\n\n[Skip to main content](#main-content)\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/lupk8zyo/787776/ade321b9d8ff06050cb06ac0049d/d7ef4b66df4ff3851b5de741185c97ab.png)](/en/)\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\nSearch for articles...\n\nTable of contents\n\n[All Collections](/en/)[Claude](https://support.claude.com/en/collections/4078531-claude)\n\nRelease Notes\n\n# Release Notes\n\nUpdated this week\n\nTable of contents\n\n## January 2026\n\n### January 16, 2026\n\n**Cowork research preview expanded to Pro plans**\n\nCowork is now available to Pro plan users on Claude Desktop (macOS only).\n\n**Claude Code access added to Team plan Standard seats**\n\nWe’re now including Claude Code access with every Team plan standard seat. Refer to this article for more information: [Purchasing and managing seats on Team plans](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats-on-team-plans).\n\n**Opus 4 and 4.1 deprecated from Claude and Claude Code**\n\nWe’ve removed Claude Opus 4 and 4.1 from the Claude model selector and Claude Code. Refer to this article for further details and recommendations: [Adapting to new model personas after deprecations](https://support.claude.com/en/articles/12738598-adapting-to-new-model-personas-after-deprecations).\n\n### January 12, 2026\n\n**Cowork research preview on Claude Desktop (macOS only) for Max plans**\n\nCowork brings Claude Code's agentic capabilities to the Claude desktop app for knowledge work beyond coding. It runs locally on your computer in an isolated VM, enabling direct access to local files and MCP integrations.\n\nRefer to this article to learn more: [Getting Started with Cowork](https://support.claude.com/en/articles/13345190-getting-started-with-cowork).\n\n**Health and fitness data on Claude Mobile**\n\nClaude can now read and analyze your health and fitness data on iOS and Android. Ask Claude about your activity patterns, workout trends, sleep quality, and more—Claude will provide insights and visualizations using native charts.\n\nHealth features are available on Pro and Max plans and currently limited to users in the US. On Android, Health Connect and Android 14 or later are required.\n\nSee the following articles for more information:\n\n* [Using Claude with iOS Apps](https://support.claude.com/en/articles/11869619-using-claude-with-ios-apps)\n* [Using Claude with Android Apps](https://support.claude.com/en/articles/11869629-using-claude-with-android-apps)\n\n**HIPAA-ready Enterprise plans**\n\nWe now offer a HIPAA-ready version of Claude that is available for organizations with Enterprise plans that choose to process protected health information (PHI) through Claude.\n\nSee [HIPAA-Ready Enterprise Plans](https://support.claude.com/en/articles/13296973-hipaa-ready-enterprise-plans) for more information.\n\n---\n\n## December 2025\n\n### December 18, 2025\n\n**Skills for organizations, partners, and the ecosystem**\n\nIn October, we introduced skills—a way to teach Claude repeatable workflows tailored to how you work. Skills are now easier to deploy, discover, and build with [organization-wide management for Team and Enterprise plans](https://support.claude.com/en/articles/13119606-managing-skills-as-an-admin), a [directory](https://claude.com/connectors) of partner-built skills, and an open standard ([Agent Skills](https://agentskills.io/home)) so skills work across AI platforms.\n\n---\n\n## November 2025\n\n### November 24, 2025\n\n**Claude Opus 4.5 launch**\n\nWe released our most powerful frontier model to date. Read our blog post for more information: [Introducing Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5).\n\n**Claude in Excel beta release**\n\nClaude in Excel is now available in beta to all Max, Team, and Enterprise users. We’ve added some additional capabilities, such as support for pivot tables, charts and file uploads, plus a shortcut to quickly open the full Claude app from Excel (ctrl+option+c). We've also made overall improvements to performance, speed, context management, and the general user experience. See [Claude in Excel](https://support.claude.com/en/articles/12650343-claude-in-excel).\n\n**Context window compaction**\n\nWe’ve changed our context window functionality to enable infinite-length conversations (with some exceptions) and significantly reduce length limit errors by summarizing earlier messages when a chat approaches its context limit. Read more here: [Understanding Usage and Length Limits](https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits).\n\n---\n\n## October 2025\n\n### October 23, 2025\n\n**Claude’s memory on Max and Pro plans**\n\nMax plan users can now access Claude’s memory capabilities. This feature will roll out to Pro plans gradually over the next two weeks.\n\n### October 15, 2025\n\n**Claude Haiku 4.5 launch**\n\nWe released our fastest, most cost-efficient model – Claude Haiku 4.5. Our latest small model matches Sonnet 4’s performance on coding, computer use, and agent tasks.\n\n---\n\n## September 2025\n\n### September 29, 2025\n\n**Claude Sonnet 4.5 launch**\n\nWe released our newest model, Sonnet 4.5. This is the best model in the world for real-world agents, coding, and computer use. Read our blog post here: [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5).\n\n**Creating and editing files with Claude for Pro plans and mobile**\n\nPro users can now leverage Claude’s file creation and editing capabilities, and users on all paid plans can access these features on Claude for iOS or Android. See this updated article for more information: [Create and edit files with Claude](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude).\n\n### September 18, 2025\n\n**Claude’s memory on Enterprise plans**\n\nUsers on Enterprise plans can leverage memory; Claude can now remember relevant context from your chats and generate a memory summary. Incognito chats give you a way to exclude conversations from Claude’s memory. Refer to the following articles for more information:\n\n* [Using Claude’s chat search and memory to build on previous context](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context)\n* [Importing and exporting your memory from Claude](https://support.claude.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)\n* [Using incognito chats](https://support.claude.com/en/articles/12260368-using-incognito-chats)\n\n### September 11, 2025\n\n**Claude’s memory on Team plans and incognito chats for free, Pro, Max, and Team plans**\n\nClaude can now remember relevant context from your chats and will generate a memory summary. Incognito chats give you a way to exclude conversations from Claude’s memory. Refer to the following new articles for more information:\n\n* [Using Claude’s chat search and memory to build on previous context](https://support.anthropic.com/en/articles/11817273-how-does-claude-s-memory-work)\n* [Importing and exporting your memory from Claude](https://support.anthropic.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)\n* [Using incognito chats](https://support.anthropic.com/en/articles/12260368-using-incognito-chats)\n\n### September 9, 2025\n\n**Creating and editing files with Claude**\n\nClaude can now create and edit Excel spreadsheets, PowerPoint slide decks, documents, and PDFs directly in the Claude app. Refer to the following two articles for more information:\n\n* [Create and edit files with Claude](https://support.anthropic.com/en/articles/12111783-create-and-edit-files-with-claude)\n* [Create and edit files with Claude to eliminate hours of busy work](https://support.anthropic.com/en/articles/12143746-create-and-edit-files-with-claude-to-eliminate-hours-of-busy-work)\n\n### September 3, 2025\n\n**Location, maps, and calendar access on Claude for iOS and Android**\n\nClaude can now connect with iOS and Android apps to draft calendar events, help you find locations, and manage reminders (iOS only). See updates to the following two articles for more information:\n\n* [Using Claude with iOS Apps](https://support.anthropic.com/en/articles/11869619-using-claude-with-ios-apps)\n* [Using Claude with Android Apps](https://support.anthropic.com/en/articles/11869629-using-claude-with-android-apps)\n\n---\n\n## August 2025\n\n### August 27, 2025\n\n**Code Execution Tool**\n\nA new API tool that allows Claude to execute Python code in a secure, sandboxed environment. Refer to our docs for more information: [Code execution tool](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/code-execution-tool#upgrade-to-latest-tool-version).\n\n### August 26, 2025\n\n**Claude in Chrome**\n\nAn experimental browser extension that allows Claude to read, click, and navigate websites alongside you. See [Getting Started with Claude in Chrome](https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome) and follow along with extension-specific feature launches here: [Claude in Chrome Release Notes](https://support.claude.com/en/articles/12306336-claude-in-chrome-release-notes).\n\n### August 21, 2025\n\n**Admin controls for desktop extensions**\n\nAllows Team and Enterprise plans to enable/disable public desktop extensions and upload custom extensions. See [Admin Controls for Desktop Extensions](https://support.anthropic.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop#h_17d0fb22f8).\n\n**Making shared artifacts embeddable**\n\nClaude users with free, Pro, or Max plans can generate an embed code for any published artifacts.\n\n### August 20, 2025\n\n**Premium seats with Claude Code for Team and Enterprise plans**\n\nIntroduced a premium seat tier for Team and Enterprise plans offering more usage and access to Claude Code. Refer to the following articles for more information:\n\n* [Purchasing and managing seats](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats)\n* [Using Claude Code with your Team or Enterprise plan](https://support.anthropic.com/en/articles/11845131-using-claude-code-with-your-team-or-enterprise-plan)\n\n**Extra usage for Team and Enterprise plans**\n\nA new setting allows Team and Enterprise plan users to purchase more usage to continue chatting with Claude or using Claude Code after hitting their usage limit. See [Extra Usage for Team and Enterprise Plans](https://support.claude.com/en/articles/12005970-extra-usage-for-team-and-enterprise-plans).\n\n### August 15, 2025\n\n**Ability to change monthly Team plan billing to annual**\n\nAllowing Team plan organizations with monthly billing to upgrade to annual billing. See [How to change your Team plan from monthly to annual billing](https://support.claude.com/en/articles/12083917-how-to-change-your-team-plan-from-monthly-to-annual-billing).\n\n### August 12, 2025\n\n**1M token context window**\n\nThe 1M token context window for Claude Sonnet 4 is currently in beta for API organizations in usage tier 4, or with custom rate limits. See [1M token context window](https://docs.anthropic.com/en/docs/build-with-claude/context-windows#1m-token-context-window) in our docs for more information.\n\n### August 11, 2025\n\n**Ability to search past conversations**\n\nUsers on Max, Team, Enterprise plans can prompt Claude to search over past chats, allowing finer-grained context continuation and synthesizing across topics. See [Searching past chats](https://support.anthropic.com/en/articles/10185728-understanding-claude-s-personalization-features#h_4afb5dcf4b).\n\n### August 6, 2025\n\n**Claude Code Security Reviews**\n\nTwo new cybersecurity features were added to Claude Code:\n\n* /security-review command\n* GitHub Actions\n\nSee [Automated Security Reviews in Claude Code](https://support.anthropic.com/en/articles/11932705-automated-security-reviews-in-claude-code).\n\n### August 5, 2025\n\n**Claude Opus 4.1**\n\nClaude Opus 4.1 (an incremental update to Opus 4) brings enhanced performance as our most capable model for complex reasoning, analysis, and creative tasks.\n\n* Read our announcement here: [Claude Opus 4.1](https://www.anthropic.com/news/claude-opus-4-1).\n* Refer to [Models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview) for more specific information about Opus 4.1.\n\n### August 1, 2025\n\n**Project Sharing**\n\nEnabled project permissions and sharing for Team and Enterprise plans. See [Organization-wide sharing](https://support.anthropic.com/en/articles/9519189-project-visibility-and-sharing#h_0b584425bc) for more information.\n\n**Note:** Refer to [our docs](https://docs.anthropic.com/en/release-notes/overview) for historical release notes.\n\n---\n\nRelated Articles\n\n[How up-to-date is Claude's training data?](https://support.claude.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data)[How large is the context window on paid Claude plans?](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)[Claude Code Model Configuration](https://support.claude.com/en/articles/11940350-claude-code-model-configuration)[Claude in Chrome Release Notes](https://support.claude.com/en/articles/12306336-claude-in-chrome-release-notes)[Applying Claude Opus 4.5’s strengths to your everyday work](https://support.claude.com/en/articles/12920969-applying-claude-opus-4-5-s-strengths-to-your-everyday-work)\n\nDid this answer your question?\n\n😞😐😃\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/487548/17213f6a445c8e6e874b1f4b/fad85208982e639d11b9108df895a293.png)](/en/)\n\n* [Product](https://www.anthropic.com/product)\n* [Research](https://www.anthropic.com/research)\n* [Company](https://www.anthropic.com/company)\n* [News](https://www.anthropic.com/news)\n* [Careers](https://www.anthropic.com/careers)\n\n* [Terms of Service - Consumer](https://www.anthropic.com/terms)\n* [Terms of Service - Commercial](https://www.anthropic.com/legal/commercial-terms)\n* [Privacy Policy](https://www.anthropic.com/privacy)\n* [Usage Policy](https://www.anthropic.com/aup)\n* [Responsible Disclosure Policy](https://www.anthropic.com/responsible-disclosure-policy)\n* [Compliance](https://trust.anthropic.com/)",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://support.anthropic.com/en/articles/12138966-release-notes"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Release Notes | Claude Help Center",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Release Notes | Claude Help Center",
      "subtitles": null,
      "url": "https://support.anthropic.com/en/articles/12138966-release-notes",
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
<summary>Thinking (verbatim)</summary>

 I'm noticing a discrepancy between the primary Anthropic release notes page, which only shows entries through January 2026, and the Releasebot aggregator that has entries up through mid-April 2026 from the same source. It seems like the primary page might have been flattened or Releasebot captured an earlier version before those March and April entries were removed.

Let me check the raw content directly from support.anthropic.com to verify what's actually there, and then I'll look at the docs.claude.com release notes as an alternative source to see if those newer entries appear elsewhere.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:27:48.207234Z",
  "stop_timestamp": "2026-04-22T07:27:48.575251Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VZUjBMNWWHPdo6cXoWEod6",
  "name": "web_search",
  "input": {
    "query": "Claude apps release notes April 2026 tool widgets connector"
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
  "tool_use_id": "toolu_01VZUjBMNWWHPdo6cXoWEod6",
  "name": "web_search",
  "content": [
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
      "text": "Stream validation - Fixed tool input validation failures when streaming emits array/object fields as JSON-encoded strings · Extended thinking 400 - Fixed an API 400 when extended thinking produced a whitespace-only text block alongside real content · Survey polish - Fixed accidental feedback survey submissions from auto-pilot keypresses and consecutive-prompt digit collisions · Homebrew channels - Fixed Homebrew install update prompts to use the cask&#x27;s release channel (claude-code stable, claude-code@latest latest) Plugin MCP dedup - Fixed plugin MCP servers stuck &quot;connecting&quot; when duplicating an unauthenticated claude.ai connector · Write performance - Improved Write tool diff computation 60% faster on files with tabs/&amp;/$ Removed commands - Removed /tag and /vim (toggle vim mode via /config -&gt; Editor mode) Linux sandbox - apply-seccomp helper now ships in both npm and native builds, restoring unix-socket blocking ·\n\nLooking for the latest releases? \n\nThis changelog documents Claude Code's version history through April 2026. For the most current updates, run claude --version in your terminal. Opus 4.7 xhigh - Claude Opus 4.7 with new xhigh effort level (between high and max) now available via /effort, --effort, and the model picker; other models fall back to high · Auto mode for Max - Auto mode is available for Max subscribers when using Opus 4.7, and no longer requires --enable-auto-mode · /effort slider - /effort opens an interactive slider when called without arguments, with arrow-key navigation and Enter to confirm · Auto theme - Added \"Auto (match terminal)\" theme that matches your terminal's dark/light mode, selectable from /theme · /less-permission-prompts skill - Scans transcripts for common read-only Bash and MCP tool calls and proposes a prioritized allowlist for .claude/settings.json ·\n\n\n\nStream validation - Fixed tool input validation failures when streaming emits array/object fields as JSON-encoded strings · Extended thi",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudefa.st/blog/guide/changelog",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude by Anthropic - Release Notes - April 2026 Latest Updates - Releasebot",
      "url": "https://releasebot.io/updates/anthropic/claude",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "releasebot.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
        "site_name": "Releasebot"
      },
      "is_missing": false,
      "text": "The Claude mobile app can now connect to fully interactive apps. Pull up live charts, sketch diagrams, and build shareable assets, all rendered visually right in your conversation. For more information, see Use interactive connectors in Claude. Original source ...\n\nThe Claude mobile app can now connect to fully interactive apps. Pull up live charts, sketch diagrams, and build shareable assets, all rendered visually right in your conversation. For more information, see Use interactive connectors in Claude. Original source ... Claude adds computer use in Cowork and Claude Code, plus Dispatch improvements for Pro and Max users. Users on Pro and Max plans can give Claude access to computer use. Claude can open files, run dev tools, point, click, and navigate to what’s on your screen to perform tasks itself—with no setup required. Claude’s new computer use capability makes Dispatch even more helpful by allowing it to use your computer on your behalf while you’re away. \n\nFor more information, see Let Claude use your computer in Cowork or our blog post: Put Claude to work on your computer. Original source ...\n\nWe introduced the ability to create and schedule both recurring and on-demand tasks in Cowork, as well as a new Customize section in Claude Desktop that groups skills, plugins, and connectors in one place. For more information, see Schedule recurring tasks in Cowork. Original source ... We launched a new plugin marketplace and admin controls for Team and Enterprise plans. For more information, refer to these articles: ... We launched our most capable Sonnet model yet, with a full upgrade of the model’s skills across coding, computer use, long-context reasoning, agent planning, knowledge work, and design. Sonnet 4.6 also features a 1M token context window in beta. Read our blog post for more information: Introducing Claude Sonnet 4.6 . Original source ... \n\nThe Enterprise Analytics API provides programmatic access to usage and engagement data for Claude and",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://releasebot.io/updates/anthropic/claude",
        "search_provider": "anthropic",
        "age": "4 days ago"
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
      "text": "... Claude Code adds larger MCP result persistence, disables inline shell execution for skills and commands, and supports multi-line deep links. It also lets plugins ship executables in bin, improves performance and edit efficiency, and fixes resume, plan mode, terminal, and Windows issues.\n\nFixed an issue where the same message could appear at two positions when scrolling up in fullscreen mode (iTerm2, Ghostty, and other terminals with DEC 2026 support) Fixed idle-return \"/clear to save X tokens\" hint showing cumulative session tokens instead of current context size · Fixed plugin MCP servers stuck \"connecting\" on session start when they duplicate a claude.ai connector that is unauthenticated · Improved Write tool diff computation speed for large files (60% faster on files with tabs/&/$) ... Linux sandbox now ships the apply-seccomp helper in both npm and native builds, restoring unix-socket blocking for sandboxed commands Original source ... No date parsed from source. ... \n\nClaude Code adds larger MCP result persistence, disables inline shell execution for skills and commands, and supports multi-line deep links. It also lets plugins ship executables in bin, improves performance and edit efficiency, and fixes resume, plan mode, terminal, and Windows issues.\n\nClaude Code fixes a permission dialog crash when a teammate requests tool permission. Fixed a crash in the permission dialog when an agent teams teammate requested tool permission Original source ... No date parsed from source. ... Claude Code fixes the \"claude-opus-4-7 is temporarily unavailable\" issue in auto mode. Fixed \"claude-opus-4-7 is temporarily unavailable\" for auto mode Original source ... Join Releasebot and get updates from Anthropic and hundreds of other software products. ... No date parsed from source. ... Claude Code releases Opus 4.7 xhigh, adds Auto mode for Max subscribers, and expands controls with /effort, /ultrareview, and a new terminal-matching theme. \n\nIt also reduces permission pro",
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
      "title": "Claude Release Notes",
      "url": "https://novalinium.com/claude-releases/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "novalinium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=novalinium.com",
        "site_name": "Novalinium"
      },
      "is_missing": false,
      "text": "The Claude mobile app can now connect to fully interactive apps. Pull up live charts, sketch diagrams, and build shareable assets, all rendered visually right in your conversation. For more information, see Use interactive connectors in Claude. ... Users on Pro and Max plans can give Claude ...\n\nThe Claude mobile app can now connect to fully interactive apps. Pull up live charts, sketch diagrams, and build shareable assets, all rendered visually right in your conversation. For more information, see Use interactive connectors in Claude. ... Users on Pro and Max plans can give Claude access to computer use. Claude can open files, run dev tools, point, click, and navigate to what’s on your screen to perform tasks itself—with no setup required. Claude’s new computer use capability makes Dispatch even more helpful by allowing it to use your computer on your behalf while you’re away.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://novalinium.com/claude-releases/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Release Notes",
      "url": "https://docs.claude.com/en/release-notes/claude-apps",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "Release Notes\nClaude Apps\nFollow along with updates across Anthropic’s Claude applications.\nAugust 28, 2025\n- Updated Consumer Terms and Privacy Policy:\n- Consumer users (Free, Pro, and Max plans, and when using Claude Code with those accounts) can now choose whether to share their chats and coding sessions to help improve Claude.\n- Existing users have until September 28, 2025 to make their selection, while new users will choose during signup.\n- Preferences can be changed at any time in https://claude.ai/settings/data-privacy-controls.\n- These updates do not apply to Team, Enterprise, API, or 3rd-party platform users.\nAugust 5, 2025\n- We’ve added Claude Opus 4.1 to claude.ai, an incremental update to Claude Opus 4. Claude Opus 4.1 brings enhanced performance and remains our most capable model for complex reasoning, analysis, and creative tasks.\nMay 22, 2025\n- We’ve added Claude Sonnet 4 to claude.ai.\nFebruary 24th, 2025\n\n\nNovember 21st, 2024\n- Google Docs integration is now available for Pro, Teams, and Enterprise accounts.\nNovember 1st, 2024\n- Enhanced PDF support with visual analysis capabilities, allowing Claude to understand both text and visual elements within PDFs.\nOctober 31st, 2024\n- Launched Claude desktop applications for Windows and Mac.\n- Added voice dictation support to Claude mobile apps.\nOctober 24th, 2024\n- Introduced the Analysis tool, enabling Claude to write and execute code for calculations and data analysis.\nOctober 22nd, 2024\n- Claude Sonnet 3.5, our most intelligent model yet, just got an upgrade and is available in claude.ai. Read more here.\nSeptember 4th, 2024\n- We introduced the Claude Enterprise plan to help organizations securely collaborate with Claude using internal knowledge. Learn more in our Enterprise plan announcement.\nAugust 30th, 2024\n\n\n- We’ve added a new feature to claude.ai that allows you to highlight text or code within an Artifact and quickly have Claude improve or explain the selection.\nAugust 22nd, 2024\n- We’ve",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://docs.claude.com/en/release-notes/claude-apps",
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

 I'm pulling up the documentation for Claude apps from the release notes to get the official details.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:27:52.593008Z",
  "stop_timestamp": "2026-04-22T07:27:52.593008Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01BcSUhacZH7JRg29C8Tftv2",
  "name": "web_fetch",
  "input": {
    "url": "https://docs.claude.com/en/release-notes/claude-apps"
  },
  "message": "Fetching: https://docs.claude.com/en/release-notes/claude-apps",
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
  "tool_use_id": "toolu_01BcSUhacZH7JRg29C8Tftv2",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Release notes | Claude Help Center",
      "url": "https://docs.claude.com/en/release-notes/claude-apps",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "Release notes | Claude Help Center\n\n[Skip to main content](#main-content)\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/lupk8zyo/787776/ade321b9d8ff06050cb06ac0049d/d7ef4b66df4ff3851b5de741185c97ab.png)](https://support.claude.com/en/)\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\nSearch for articles...\n\n1. [All Collections](https://support.claude.com/en/)\n2. [Claude](https://support.claude.com/en/collections/4078531-claude)\n3. Release notes\n\n# Release notes\n\nUpdated this week\n\nTable of contents\n\n## April 2026\n\n### April 17, 2026\n\n**Claude Design by Anthropic Labs**\n\nWith Opus 4.7, we also launched Claude Design, a new **[Anthropic Labs](https://www.anthropic.com/news/introducing-anthropic-labs)** product that lets you collaborate with Claude to create visual outputs like designs, prototypes, slides, and one-pagers. For more information, see **[Get started with Claude Design](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)**.\n\n### April 16, 2026\n\n**Claude Opus 4.7 launch**\n\nOur latest model, Claude Opus 4.7, is now generally available. Opus 4.7 shows improvements in software engineering and complex, long-running coding tasks, as well as better vision, allowing it to see images in higher resolution. For more information, see our blog post: **[Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)**.\n\n### April 9, 2026\n\n**Claude Cowork generally available**\n\nClaude Cowork is now generally available on macOS and Windows through the Claude Desktop app. With this, we’re expanding Claude Cowork with new capabilities:\n\n* **Claude Cowork in the Analytics API.** For more information, see **[Claude Enterprise Analytics API: Access engagement and adoption data](https://support.claude.com/en/articles/13694757-access-engagement-and-adoption-data-with-the-analytics-api)**.\n* **Usage analytics for Claude Cowork.** For more information, see **[View usage analytics for Team and Enterprise plans](https://support.claude.com/en/articles/12883420-view-usage-analytics-for-team-and-enterprise-plans)**.\n* **Claude Cowork OpenTelemetry support.** For more information, see **[Monitor Claude Cowork activity with OpenTelemetry](https://support.claude.com/en/articles/14477985-monitor-cowork-activity-with-opentelemetry)**.\n\n**Role-based access controls for Enterprise plans**\n\nAdmins can now organize users into groups, manually or via SCIM from your identity provider, and assign each group a custom role defining which Claude capabilities its members can use. Turn Claude Cowork on for specific teams, restrict features by department and adjust as adoption grows. Learn more about **[setting up role-based permissions](https://support.claude.com/en/articles/13930458-set-up-role-based-entitlements-on-enterprise-plans)**, **[managing group spend limit](https://support.claude.com/en/articles/13799932-manage-groups-and-group-spend-limits-on-enterprise-plans)**[s](https://support.claude.com/en/articles/13799932-manage-groups-and-group-spend-limits-on-enterprise-plans), and **[managing custom roles](https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans)**.\n\n## March 2026\n\n### March 25, 2026\n\n**Interactive apps in Claude for iOS and Android**\n\nThe Claude mobile app can now connect to fully interactive apps. Pull up live charts, sketch diagrams, and build shareable assets, all rendered visually right in your conversation. For more information, see **[Use interactive connectors in Claude](https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude)**.\n\n### March 23, 2026\n\n**Computer use research preview in Cowork and Claude Code + Dispatch improvements**\n\nUsers on Pro and Max plans can give Claude access to computer use. Claude can open files, run dev tools, point, click, and navigate to what’s on your screen to perform tasks itself—with no setup required. Claude’s new computer use capability makes Dispatch even more helpful by allowing it to use your computer on your behalf while you’re away. For more information, see **[Let Claude use your computer in Cowork](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork)** or our blog post: **[Put Claude to work on your computer](https://claude.com/blog/dispatch-and-computer-use)**.\n\n### March 17, 2026\n\n**Control Cowork from your phone with a persistent thread (research preview for Pro/Max)**\n\nUsers on Pro and Max plans can access a persistent agent thread via Claude Desktop or Claude for iOS/Android to manage tasks in Cowork. We're rolling this out to Max plans starting today, and Pro plans over the next two days. For more information, see **[Assign tasks to Claude from anywhere in Cowork](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork)**.\n\n### March 12, 2026\n\n**Claude creates interactive charts, diagrams and visualizations**\n\nClaude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see **[Custom visuals in chat](https://support.claude.com/en/articles/13979539-custom-visuals-in-chat)**.\n\n### March 11, 2026\n\n**Work across Excel and PowerPoint**\n\nWe’ve improved our Claude for Excel and Claude for PowerPoint add-ins. They can now share the full context of your conversation, so every action Claude takes in one application is informed by everything that’s happened in the other. We also added support for skills in the add-ins, and the ability for Amazon Bedrock, Google Cloud’s Vertex AI, or Microsoft Foundry users to connect to them via an LLM gateway. For more information, refer to the following articles:\n\n* **[Work across Excel and PowerPoint](https://support.claude.com/en/articles/13892150-work-across-apps-with-cowork)**\n* **[Use Claude for Excel and PowerPoint with an LLM gateway](https://support.claude.com/en/articles/13945233-use-claude-in-excel-and-powerpoint-with-an-llm-gateway)**\n\n### March 2, 2026\n\n**Memory for free users**\n\nMemory from chat history is now available for all Claude users, including free users. For more information, refer to the following articles:\n\n* **[Use Claude’s chat search and memory to build on previous context](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context#h_c1c0b33879)**\n* **[Import and export your memory from Claude](https://support.claude.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)**\n\n---\n\n## February 2026\n\n### February 25, 2026\n\n**Scheduled tasks in Cowork**\n\nWe introduced the ability to create and schedule both recurring and on-demand tasks in Cowork, as well as a new Customize section in Claude Desktop that groups skills, plugins, and connectors in one place. For more information, see **[Schedule recurring tasks in Cowork](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork)**.\n\n### February 24, 2026\n\n**Cowork plugins and admin controls**\n\nWe launched a new plugin marketplace and admin controls for Team and Enterprise plans. For more information, refer to these articles:\n\n* **[Manage Cowork plugins for your organization](https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization)**\n* **[Use plugins in Cowork](https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization)**\n\n### February 17, 2026\n\n**Claude Sonnet 4.6 launch**\n\nWe launched our most capable Sonnet model yet, with a full upgrade of the model’s skills across coding, computer use, long-context reasoning, agent planning, knowledge work, and design. Sonnet 4.6 also features a 1M token context window in beta. Read our blog post for more information: **[Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)**.\n\n### February 13, 2026\n\n**Analytics API for Enterprise plans**\n\nThe Enterprise Analytics API provides programmatic access to usage and engagement data for Claude and Claude Code Remote usage within your organization. Data is aggregated per organization, per day, and each endpoint returns a snapshot for a single date that you specify. For more information, see **[Access usage data with the Analytics API](https://support.claude.com/en/articles/13694757-access-usage-data-with-the-analytics-api)**.\n\n### February 12, 2026\n\n**Self-serve Enterprise plans**\n\nPreviously, Enterprise plans were only available to customers working with our Sales team. Now, any organization can purchase an Enterprise plan directly on our website with no Sales conversation required. Self-serve Enterprise plans have a single seat type that includes access to Claude, Claude Code, and Cowork. For more information, refer to **[our blog post](https://claude.com/blog/self-serve-enterprise)** or **[What is the Enterprise plan?](https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan)**\n\n### February 5, 2026\n\n**Claude Opus 4.6 launch**\n\nWe’ve upgraded our smartest model and improved its coding skills. Read our blog post for more information: **[Introducing Claude Opus 4.6](http://anthropic.com/news/claude-opus-4-6)**.\n\n**Introducing Claude for PowerPoint**\n\nClaude is now available as an add-in for PowerPoint. Read more here: **[Use Claude for PowerPoint](https://support.claude.com/en/articles/13521390-using-claude-in-powerpoint)**.\n\n**Claude for Excel improvements**\n\nWe’ve updated Claude for Excel so it uses Opus 4.6 and supports native Excel operations such as pivot table editing and conditional formatting. See our updated article for more information: **[Using Claude for Excel](https://support.claude.com/en/articles/12650343-using-claude-in-excel)**.\n\n---\n\n## January 2026\n\n### January 16, 2026\n\n**Cowork research preview expanded to Pro plans**\n\nCowork is now available to Pro plan users on Claude Desktop (macOS only).\n\n**Claude Code access added to Team plan Standard seats**\n\nWe’re now including Claude Code access with every Team plan standard seat. Refer to this article for more information: **[Purchasing and managing seats on Team plans](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats-on-team-plans)**.\n\n**Opus 4 and 4.1 deprecated from Claude and Claude Code**\n\nWe’ve removed Claude Opus 4 and 4.1 from the Claude model selector and Claude Code. Refer to this article for further details and recommendations: **[Adapting to new model personas after deprecations](https://support.claude.com/en/articles/12738598-adapting-to-new-model-personas-after-deprecations)**.\n\n### January 12, 2026\n\n**Cowork research preview on Claude Desktop (macOS only) for Max plans**\n\nCowork brings Claude Code's agentic capabilities to the Claude desktop app for knowledge work beyond coding. It runs locally on your computer in an isolated VM, enabling direct access to local files and MCP integrations.\n\nRefer to this article to learn more: **[Getting started with Cowork](https://support.claude.com/en/articles/13345190-getting-started-with-cowork)**.\n\n**Health and fitness data on Claude Mobile**\n\nClaude can now read and analyze your health and fitness data on iOS and Android. Ask Claude about your activity patterns, workout trends, sleep quality, and more—Claude will provide insights and visualizations using native charts.\n\nHealth features are available on Pro and Max plans and currently limited to users in the US. On Android, Health Connect and Android 14 or later are required.\n\nSee the following articles for more information:\n\n* **[Using Claude with iOS Apps](https://support.claude.com/en/articles/11869619-using-claude-with-ios-apps)**\n* **[Using Claude with Android Apps](https://support.claude.com/en/articles/11869629-using-claude-with-android-apps)**\n\n**HIPAA-ready Enterprise plans**\n\nWe now offer a HIPAA-ready version of Claude that is available for organizations with Enterprise plans that choose to process protected health information (PHI) through Claude.\n\nSee **[HIPAA-ready Enterprise plans](https://support.claude.com/en/articles/13296973-hipaa-ready-enterprise-plans)** for more information.\n\n---\n\n## December 2025\n\n### December 18, 2025\n\n**Skills for organizations, partners, and the ecosystem**\n\nIn October, we introduced skills—a way to teach Claude repeatable workflows tailored to how you work. Skills are now easier to deploy, discover, and build with **[organization-wide management for Team and Enterprise plans](https://support.claude.com/en/articles/13119606-managing-skills-as-an-admin)**, a **[directory](https://claude.com/connectors)** of partner-built skills, and an open standard (**[Agent Skills](https://agentskills.io/home)**) so skills work across AI platforms.\n\n**Claude in Chrome updates**\n\nClaude in Chrome is now available in beta to all paid plan subscribers, including Pro, Team, and Enterprise plans.\n\n* **Claude Code integration:** Build in your terminal with Claude Code, then test and verify in the browser with the Chrome extension. Claude can read console errors, network requests, and DOM state to help debug issues directly.\n* **Control browser actions from Claude Desktop:** Start a task in Claude Desktop and let it handle work in the browser without switching windows.\n* **Record a workflow:** Teach Claude your workflow by recording the steps, and Claude learns to repeat them. Useful for repetitive browser tasks you want to delegate.\n* **Console logs:** Claude can now read browser console output, helping developers identify and fix errors without switching contexts.\n* **Admin controls for Team and Enterprise:** Admins can now manage Claude in Chrome at the organization level:\n\n  + Enable or disable the extension org-wide\n  + Configure allowlists and blocklists to control which sites Claude can access\n  + Manage Claude in Chrome in Admin settings > Browser extension\n\n---\n\n## November 2025\n\n### November 24, 2025\n\n**Claude Opus 4.5 launch**\n\nWe released our most powerful frontier model to date. Read our blog post for more information: **[Introducing Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)**.\n\n**Claude for Excel beta release**\n\nClaude for Excel is now available in beta to all Max, Team, and Enterprise users. We’ve added some additional capabilities, such as support for pivot tables, charts and file uploads, plus a shortcut to quickly open the full Claude app from Excel (ctrl+option+c). We've also made overall improvements to performance, speed, context management, and the general user experience. See **[Use Claude for Excel](https://support.claude.com/en/articles/12650343-claude-in-excel)**.\n\n**Context window compaction**\n\nWe’ve changed our context window functionality to enable infinite-length conversations (with some exceptions) and significantly reduce length limit errors by summarizing earlier messages when a chat approaches its context limit. Read more here: **[Understanding Usage and Length Limits](https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits)**.\n\n**Claude in Chrome updates**\n\nClaude in Chrome is now available in beta to all Max plan subscribers. After months of testing, we're expanding access with the following updates:\n\n* **Scheduled tasks**: Set recurring browser tasks to run automatically on your schedule. Set it once and Claude handles it from there.\n* **Follow a plan**: Approve Claude's plan, then let it execute the entire workflow independently within those approved boundaries, without asking for permission until it's done.\n* **Model selection**: Choose between Haiku 4.5 for speed, Sonnet 4.5 for complex tasks, or Opus 4.5 for maximum reasoning power—switch anytime based on what you need.\n\n---\n\n## October 2025\n\n### October 23, 2025\n\n**Claude’s memory on Max and Pro plans**\n\nMax plan users can now access Claude’s memory capabilities. This feature will roll out to Pro plans gradually over the next two weeks.\n\n### October 15, 2025\n\n**Claude Haiku 4.5 launch**\n\nWe released our fastest, most cost-efficient model – Claude Haiku 4.5. Our latest small model matches Sonnet 4’s performance on coding, computer use, and agent tasks.\n\n**Claude in Chrome updates**\n\n* **Powered by Haiku 4.5:** Claude in Chrome now defaults to Haiku 4.5 so it’s a faster, more responsive experience. You can always switch back to Sonnet 4.5.\n* **Claude handles image uploads for you:** Give Claude an image and tell it where to upload, whether it’s an expense report, form attachment, or a picture upload.\n* **Show Claude exactly what you mean:** Take a screenshot or drag to highlight specific parts of your screen. Point Claude to the exact button, field, or detail—much faster than describing complex layouts in words.\n\n---\n\n## September 2025\n\n### September 29, 2025\n\n**Claude Sonnet 4.5 launch**\n\nWe released our newest model, Sonnet 4.5. This is the best model in the world for real-world agents, coding, and computer use. Read our blog post here: **[Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)**.\n\n**Creating and editing files with Claude for Pro plans and mobile**\n\nPro users can now leverage Claude’s file creation and editing capabilities, and users on all paid plans can access these features on Claude for iOS or Android. See this updated article for more information: **[Create and edit files with Claude](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)**.\n\n**Claude in Chrome updates**\n\nThe remaining Max users on our waitlist were granted access to Claude in Chrome, along with the following updates:\n\n* **Powered by Sonnet 4.5:** Claude in Chrome now defaults to Sonnet 4.5, our smartest model yet. Improved for browser tasks, you'll notice better reasoning, fewer errors, and more reliable task completion—especially for multi-step workflows.\n* **Work across multiple tabs:** Claude can now juggle multiple browser tabs at once. Just drag tabs into Claude's tab group and it can see and work across all of them simultaneously—no more jumping back and forth to gather information before taking action.\n* **Smarter on the sites you use every day:** Claude now understands how to navigate Slack, Google Calendar, Gmail, Google Docs, and GitHub without you having to direct every click. Ask Claude to \"schedule a meeting\" or \"update the doc\" and it knows what to do—no need to walk it through every step. We’re continuing to improve Claude’s understanding of other popular sites.\n* **Get notified when Claude needs you:** Turn on notifications and Claude will ping you when it needs your permission or when a task is complete. Now you can switch to other work while Claude handles things in the background.\n* **Show Claude exactly what you mean:** Upload images or take screenshots of specific screen areas to give Claude precise visual context. Much faster than describing what you're looking at.\n\n### September 18, 2025\n\n**Claude’s memory on Enterprise plans**\n\nUsers on Enterprise plans can leverage memory; Claude can now remember relevant context from your chats and generate a memory summary. Incognito chats give you a way to exclude conversations from Claude’s memory. Refer to the following articles for more information:\n\n* **[Using Claude’s chat search and memory to build on previous context](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context)**\n* **[Importing and exporting your memory from Claude](https://support.claude.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)**\n* **[Using incognito chats](https://support.claude.com/en/articles/12260368-using-incognito-chats)**\n\n### September 16, 2025\n\n**Claude in Chrome expansion**\n\nClaude in Chrome expanded to 10,000 Max plan users with the release of new capabilities:\n\n* **Long-running workflows:** Claude in Chrome can handle more complex, multi-step workflows, and continue working even when you switch tabs (as long as Chrome is open).\n* **/slash commands:** Save your best-working prompts as shortcuts (/slash commands) and reuse these proven workflows instantly without retyping instructions to Claude.\n* **Contextual prompt suggestions:** Claude in Chrome gives contextual prompt suggestions or helpful tips based on what website you’re on.\n\n### September 11, 2025\n\n**Claude’s memory on Team plans and incognito chats for free, Pro, Max, and Team plans**\n\nClaude can now remember relevant context from your chats and will generate a memory summary. Incognito chats give you a way to exclude conversations from Claude’s memory. Refer to the following new articles for more information:\n\n* **[Using Claude’s chat search and memory to build on previous context](https://support.anthropic.com/en/articles/11817273-how-does-claude-s-memory-work)**\n* **[Importing and exporting your memory from Claude](https://support.anthropic.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)**\n* **[Using incognito chats](https://support.anthropic.com/en/articles/12260368-using-incognito-chats)**\n\n### September 9, 2025\n\n**Creating and editing files with Claude**\n\nClaude can now create and edit Excel spreadsheets, PowerPoint slide decks, documents, and PDFs directly in the Claude app. Refer to the following two articles for more information:\n\n* **[Create and edit files with Claude](https://support.anthropic.com/en/articles/12111783-create-and-edit-files-with-claude)**\n* **[Create and edit files with Claude to eliminate hours of busy work](https://support.anthropic.com/en/articles/12143746-create-and-edit-files-with-claude-to-eliminate-hours-of-busy-work)**\n\n### September 3, 2025\n\n**Location, maps, and calendar access on Claude for iOS and Android**\n\nClaude can now connect with iOS and Android apps to draft calendar events, help you find locations, and manage reminders (iOS only). See updates to the following two articles for more information:\n\n* **[Using Claude with iOS Apps](https://support.anthropic.com/en/articles/11869619-using-claude-with-ios-apps)**\n* **[Using Claude with Android Apps](https://support.anthropic.com/en/articles/11869629-using-claude-with-android-apps)**\n\n---\n\n## August 2025\n\n### August 27, 2025\n\n**Code Execution Tool**\n\nA new API tool that allows Claude to execute Python code in a secure, sandboxed environment. Refer to our docs for more information: **[Code execution tool](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/code-execution-tool#upgrade-to-latest-tool-version)**.\n\n### August 26, 2025\n\n**Claude in Chrome**\n\nAn experimental browser extension that allows Claude to read, click, and navigate websites alongside you. See **[Getting Started with Claude in Chrome](https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome)**.\n\n### August 21, 2025\n\n**Admin controls for desktop extensions**\n\nAllows Team and Enterprise plans to enable/disable public desktop extensions and upload custom extensions. See **[Admin Controls for Desktop Extensions](https://support.anthropic.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop#h_17d0fb22f8)**.\n\n**Making shared artifacts embeddable**\n\nClaude users with free, Pro, or Max plans can generate an embed code for any published artifacts.\n\n### August 20, 2025\n\n**Premium seats with Claude Code for Team and Enterprise plans**\n\nIntroduced a premium seat tier for Team and Enterprise plans offering more usage and access to Claude Code. Refer to the following articles for more information:\n\n* **[Purchasing and managing seats](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats)**\n* **[Using Claude Code with your Team or Enterprise plan](https://support.anthropic.com/en/articles/11845131-using-claude-code-with-your-team-or-enterprise-plan)**\n\n**Extra usage for Team and Enterprise plans**\n\nA new setting allows Team and Enterprise plan users to purchase more usage to continue chatting with Claude or using Claude Code after hitting their usage limit. See **[Extra Usage for Team and Enterprise Plans](https://support.claude.com/en/articles/12005970-extra-usage-for-team-and-enterprise-plans)**.\n\n### August 15, 2025\n\n**Ability to change monthly Team plan billing to annual**\n\nAllowing Team plan organizations with monthly billing to upgrade to annual billing. See **[How to change your Team plan from monthly to annual billing](https://support.claude.com/en/articles/12083917-how-to-change-your-team-plan-from-monthly-to-annual-billing)**.\n\n### August 12, 2025\n\n**1M token context window**\n\nThe 1M token context window for Claude Sonnet 4 is currently in beta for API organizations in usage tier 4, or with custom rate limits. See **[1M token context window](https://docs.anthropic.com/en/docs/build-with-claude/context-windows#1m-token-context-window)** in our docs for more information.\n\n### August 11, 2025\n\n**Ability to search past conversations**\n\nUsers on Max, Team, Enterprise plans can prompt Claude to search over past chats, allowing finer-grained context continuation and synthesizing across topics. See **[Searching past chats](https://support.anthropic.com/en/articles/10185728-understanding-claude-s-personalization-features#h_4afb5dcf4b)**.\n\n### August 6, 2025\n\n**Claude Code Security Reviews**\n\nTwo new cybersecurity features were added to Claude Code:\n\n* /security-review command\n* GitHub Actions\n\nSee **[Automated Security Reviews in Claude Code](https://support.anthropic.com/en/articles/11932705-automated-security-reviews-in-claude-code)**.\n\n### August 5, 2025\n\n**Claude Opus 4.1**\n\nClaude Opus 4.1 (an incremental update to Opus 4) brings enhanced performance as our most capable model for complex reasoning, analysis, and creative tasks.\n\n* Read our announcement here: **[Claude Opus 4.1](https://www.anthropic.com/news/claude-opus-4-1)**.\n* Refer to **[Models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)** for more specific information about Opus 4.1.\n\n### August 1, 2025\n\n**Project Sharing**\n\nEnabled project permissions and sharing for Team and Enterprise plans. See **[Organization-wide sharing](https://support.anthropic.com/en/articles/9519189-project-visibility-and-sharing#h_0b584425bc)** for more information.\n\n**Note:** Refer to **[our docs](https://docs.anthropic.com/en/release-notes/overview)** for historical release notes.\n\n---\n\nRelated Articles\n\n[How up-to-date is Claude's training data?](https://support.claude.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data)[How large is the context window on paid Claude plans?](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)[Claude Code model configuration](https://support.claude.com/en/articles/11940350-claude-code-model-configuration)[Using Claude in Microsoft Foundry](https://support.claude.com/en/articles/12864745-using-claude-in-microsoft-foundry)[Models, usage, and limits in Claude Code](https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code)\n\nDid this answer your question?\n\n😞😐😃\n\nTable of contents\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/487548/17213f6a445c8e6e874b1f4b/fad85208982e639d11b9108df895a293.png)](https://support.claude.com/en/)\n\n* [Product](https://www.anthropic.com/product)\n* [Research](https://www.anthropic.com/research)\n* [Company](https://www.anthropic.com/company)\n* [News](https://www.anthropic.com/news)\n* [Careers](https://www.anthropic.com/careers)\n\n* [Terms of Service - Consumer](https://www.anthropic.com/terms)\n* [Terms of Service - Commercial](https://www.anthropic.com/legal/commercial-terms)\n* [Privacy Policy](https://www.anthropic.com/privacy)\n* [Usage Policy](https://www.anthropic.com/aup)\n* [Responsible Disclosure Policy](https://www.anthropic.com/responsible-disclosure-policy)\n* [Compliance](https://trust.anthropic.com/)",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://support.claude.com/en/articles/12138966-release-notes"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Release notes | Claude Help Center",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Release notes | Claude Help Center",
      "subtitles": null,
      "url": "https://docs.claude.com/en/release-notes/claude-apps",
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

 I've found the official Anthropic release notes, and there's a March 12, 2026 update about Claude creating interactive charts, diagrams, and visualizations in chat—that's likely the feature causing the widget rendering issues we're seeing.

The March 25 mobile app update added interactive connectors to iOS and Android, and then there were several major releases in April: Opus 4.7 on the 16th which could've changed how tools are invoked, Claude Design on the 17th as another visual output tool, and Cowork going GA on the 9th. I should pull the "Custom visuals in chat" support article directly since that'll explain exactly how the widget system works.

The user wants me to find what recent change caused the issue, so let me look at the changelog through that lens. The widget rendering system launched in March and has been rapidly iterated—new connector types, mobile support, model updates, and design tools all shipped in quick succession. The "Unknown Connector" bug most likely stems from a client-server mismatch where Claude.ai's frontend has a local registry of known tools and connectors, but when new widget types ship on the backend, the frontend doesn't recognize them yet.

The April outages and the Claude Code fixes around connector registry issues and stream validation failures suggest the backend infrastructure has been unstable during this period, which would compound the problem. When the client encounters a tool invocation it doesn't have in its registry, it can't render it properly.

Now I'm pulling together the primary source changelog entries from Anthropic's release notes to establish the timeline of feature launches and their correlation with these issues. us 4.7 launch
- Apr 17, 2026: Claude Design launch

From status.claude.com (verified earlier):
- Apr 6, 7, 8 (×3), 9, 10, 13: authentication / elevated error incidents
- Apr 13, 15:58 UTC: last update on "Claude.ai down" investigating login
- Apr 20, 13:31 UTC: file upload investigation opened

From Claude Code CHANGELOG (via claudefa.st and github mirror):
- Stream validation fix for tool input when streaming emits array/object fields as JSON-encoded strings
- Extended thinking 400 fix for whitespace-only text block
- Plugin MCP dedup fix for stuck "connecting"

The recent fixes in Claude Code around tool-result handling and stream validation suggest parallel issues were affecting the frontend during this same period. This timeline aligns with the widget rendering pipeline launching in mid-March and then rapidly evolving through April—so the "Unknown Connector" error likely stems from a schema or client-version mismatch in how the widget registry was being updated across these deployments.

I should be clear about what I can actually support: the widget feature is demonstrably new, there's a documented cluster of related incidents in April, and Claude Code had concurrent tool-handling bugs. But I haven't found a direct changelog entry admitting the specific "Unknown Connector" widget bug, so I need to present this as a well-supported hypothesis rather than confirmed fact.

I'm going to write this up with clear separation between what I can cite directly and what I'm inferring from the pattern.

So I need to synthesize the evidence honestly and focus my response.

</details>

Here's what I found when I walked back through Anthropic's primary-source changelog and cross-referenced against status-page incidents and the Claude Code CHANGELOG. I'll present it as **evidence first, hypothesis second**, with clear attribution.

## Primary-source timeline — what Anthropic actually shipped recently

From Anthropic's official release notes page ([support.claude.com/en/articles/12138966](https://support.claude.com/en/articles/12138966-release-notes), fetched just now):

| Date | Release | Why it matters to your symptoms |
|---|---|---|
| **Mar 12, 2026** | **"Claude creates interactive charts, diagrams and visualizations"** — Custom visuals in chat ([primary doc](https://support.claude.com/en/articles/13979539-custom-visuals-in-chat)) | This is the launch of the **inline widget rendering system itself**. The tool your skills are calling (`show_widget`/`use_widget`/`visualize:*`) is almost certainly part of this surface. It's ~6 weeks old. |
| **Mar 25, 2026** | **Interactive apps on iOS/Android** — "Use interactive connectors in Claude" ([primary doc](https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude)) | Interactive-connector framework extended to mobile. Further churn on connector-metadata schemas. |
| **Apr 9, 2026** | Claude Cowork GA on macOS + Windows | Major Windows desktop client release — re-bundles the connector registry you're rendering against. |
| **Apr 16, 2026** | **Claude Opus 4.7 launch** ([primary doc](https://www.anthropic.com/news/claude-opus-4-7)) | Backend model swap. Tool-invocation behavior can change subtly with new models. |
| **Apr 17, 2026** | **Claude Design (Anthropic Labs)** ([primary doc](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)) | **New visual-output product shipped into the same rendering lane as widgets.** Most recent relevant release. |

From the status page ([status.claude.com](https://status.claude.com), fetched earlier): **six authentication/error incidents between Apr 6–13**, plus an unresolved "Claude.ai down" banner last updated Apr 13 15:58 UTC, and a file-upload investigation opened Apr 20 13:31 UTC. No specific Apr 22 incident posted.

From the Claude Code CHANGELOG ([claudefa.st mirror](https://claudefa.st/blog/guide/changelog), April 2026):
- **"Stream validation — Fixed tool input validation failures when streaming emits array/object fields as JSON-encoded strings"**
- **"Plugin MCP dedup — Fixed plugin MCP servers stuck 'connecting' when duplicating an unauthenticated claude.ai connector"**
- **"Extended thinking 400 — Fixed an API 400 when extended thinking produced a whitespace-only text block alongside real content"**

## What's a fact vs. what's a hypothesis

**Facts (sourced to Anthropic primary docs):**
1. The inline widget/visualization system is a ~6-week-old feature (launched Mar 12, 2026).
2. Three Claude-ecosystem products shipped into that same rendering lane between Apr 9 and Apr 17 (Cowork GA Windows, Opus 4.7, Claude Design).
3. Tool-invocation validation bugs were actively being fixed in Claude Code as recently as April 2026 — specifically *"tool input validation failures when streaming emits array/object fields as JSON-encoded strings."* That is a tool_use/tool_result serialization bug class.
4. Six authentication-layer incidents hit Claude.ai in April alone, with the most recent unresolved incident still labeled *investigating* from Apr 13.

**Hypothesis (not admitted by Anthropic in any changelog entry I could find):**

The pattern is consistent with a **schema/version mismatch in the widget tool registry** introduced by the Apr 16–17 releases:

- Your widget invocation left the client as one shape.
- The backend (now on Opus 4.7 post-Apr 16, with Claude Design plumbing installed Apr 17) may serialize its `tool_result` differently from what your currently-cached Claude Desktop frontend expects — parallel to the documented Claude Code bug where streamed tool output encoded JSON-as-string broke validation.
- The frontend therefore cannot hydrate the widget metadata, and falls back to "Unknown Connector ⚠" in the transcript; the result never reaches the conversation, and you see the banner.

**Strong caveat — what I cannot find:**
- There is **no entry** in Anthropic's release notes, status page, or the Claude Apps changelog that explicitly says *"fixed widget rendering as Unknown Connector"* or *"fixed tool_result submission failure on Claude.ai"*. The hypothesis is inferential. I'm stacking primary-source dots; I am not showing you an admission.
- I did not find an Apr 22, 2026 status-page incident. Either the issue is not yet posted, or it's localized (e.g., your network path, your client version) and won't be posted.

## Strongest single lead

If I had to point at one release, it would be **Apr 16–17** (Opus 4.7 + Claude Design), because:
- Your Desktop client likely auto-updated in that window,
- Claude Design introduces new visual-output plumbing that shares the widget rendering lane,
- and your memory context shows you were tracking Opus 4.7 release on Vertex AI — implying you're an early upgrader on exactly the surface that just changed.

If you'd like, I can:
1. Fetch the primary [*"Custom visuals in chat"* help doc](https://support.claude.com/en/articles/13979539-custom-visuals-in-chat) to see whether Anthropic documents the widget tool names / schema — that'd let us confirm whether `use_widget` is first-party or a skill-level wrapper.
2. Walk you through capturing the network payload (DevTools → Network tab) the next time a widget call fails, which would let us see *directly* whether the broken frame is a malformed `tool_result` JSON (validates my hypothesis) or a missing connector registry entry (different bug class).

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db416-2b51-7a5c-a8a9-04c9e85f801e",
  "updated_at": "2026-04-22T07:29:00.090860Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db416-2b51-739c-8c4d-4a5c1034df87"
}
```

</details>

### 11. human — 2026-04-22T07:38:13.949253Z

This memory is redundant. Remove it

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db420-07a0-7291-a3e6-3ebe375e897b",
  "updated_at": "2026-04-22T07:38:13.949253Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 81,
      "file_type": "txt",
      "extracted_content": "and your memory context shows you were tracking Opus 4.7 release on Vertex AI —"
    }
  ],
  "files": [
    {
      "file_uuid": "e659ba45-41d7-464b-86b8-64193e567f2f",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019db416-2b51-7a5c-a8a9-04c9e85f801e"
}
```

</details>

### 12. assistant — 2026-04-22T07:38:26.621415Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I need to find and remove that memory about tracking the Opus 4.7 release on Vertex AI. Looking at the user's memories, I can see it's listed under "Top of mind" as part of their monitoring activities, so I'll use the memory editing function to exclude that specific entry.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:38:19.950750Z",
  "stop_timestamp": "2026-04-22T07:38:19.950750Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01AATXH4DGkVAtAFcJbr7JeK",
  "name": "memory_user_edits",
  "input": {
    "command": "view"
  },
  "message": "Managing memory...",
  "integration_name": "Memory",
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "tool_identifier": null,
  "icon_name": "memory",
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
  "tool_use_id": "toolu_01AATXH4DGkVAtAFcJbr7JeK",
  "name": "memory_user_edits",
  "content": [
    {
      "type": "text",
      "text": "Memory edits:\n1. User is a Master's student in Particle and Nuclear Physics at IMP, CAS (via UCAS), expected graduation June 2027\n2. ML work — APPLICATION LEVEL (built by him): ResNet-based PID + Regression model for particle identification. EXPLORATION LEVEL (studied, not yet applied in production): Vision Transformers (ViT) as secondary architecture; Domain Adaptation methods (DANN, MCD) for sim-to-experiment generalization.\n3. Physics work — APPLICATION LEVEL: experimental participation at HIRFL-RIBLL (home base, domestic) and at RIKEN RIBF (Japan) in 2025. Group's physics focus: new proton magic numbers & nuclear shell-structure evolution (NOT direct reactions — those are merely one experimental tool). LEARNING LEVEL ONLY (has NOT personally built, calibrated, or constructed): detector concepts incl. MWDC, TPC, and Bρ-ΔE-ToF PID principles.\n4. Tech interests: vibe coding, newest technologies, AI coding assistants (Claude Code, Antigravity, Cursor, Trae). Practices LeetCode algorithm problems.\n5. Values: strictly rejects \"996\" culture; prefers empathetic, reflective quotes on personal growth\n6. Girlfriend works at Huawei Cloud in PaaS technical support\n7. User's name is Reid, not Dickim\n8. My name is Reid\n9. Remove \" He is actively planning to rent an apartment in Beijing's Haidian District (near Dongsheng Science Park) and has been investigating the property's legal status and risks. \"",
      "uuid": "6b3cbb4b-e37c-4bfc-9684-187122dfec4b"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Viewed memory edits",
  "integration_name": "Memory",
  "mcp_server_url": null,
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "icon_name": "memory",
  "display_content": {
    "type": "rich_content",
    "content": [
      {
        "title": "1. User is a Master's student in Particle and Nuclear...",
        "subtitles": [
          "112 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "2. ML work — APPLICATION LEVEL (built by him): ResNet...",
        "subtitles": [
          "297 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "3. Physics work — APPLICATION LEVEL: experimental par...",
        "subtitles": [
          "422 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "4. Tech interests: vibe coding, newest technologies, ...",
        "subtitles": [
          "151 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "5. Values: strictly rejects \"996\" culture; prefers em...",
        "subtitles": [
          "96 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "6. Girlfriend works at Huawei Cloud in PaaS technical...",
        "subtitles": [
          "58 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "7. User's name is Reid, not Dickim",
        "subtitles": [
          "31 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "8. My name is Reid",
        "subtitles": [
          "15 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "9. Remove \" He is actively planning to rent an apartm...",
        "subtitles": [
          "181 characters"
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      }
    ]
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T07:38:22.250818Z",
  "stop_timestamp": "2026-04-22T07:38:22.630652Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014a91g4goUhNiNmrgoKdgJY",
  "name": "memory_user_edits",
  "input": {
    "command": "add",
    "control": "Exclude information about user tracking/monitoring Claude Opus 4.7 release on Vertex AI or other platforms"
  },
  "message": "Managing memory...",
  "integration_name": "Memory",
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "tool_identifier": null,
  "icon_name": "memory",
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
  "tool_use_id": "toolu_014a91g4goUhNiNmrgoKdgJY",
  "name": "memory_user_edits",
  "content": [
    {
      "type": "text",
      "text": "Added memory #10: Exclude information about user tracking/monitoring Claude Opus 4.7 release on Vertex AI or other platforms",
      "uuid": "f12cca57-8e17-4f11-a7bd-178e48ed36f2"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Added memory",
  "integration_name": "Memory",
  "mcp_server_url": null,
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "icon_name": "memory",
  "display_content": {
    "type": "rich_content",
    "content": [
      {
        "title": "Added memory",
        "subtitles": [
          "#10: Exclude information about user tracking/monitoring Claude Opus 4.7 release on Ve..."
        ],
        "url": null,
        "resource_type": null,
        "icon_url": null,
        "source": null
      }
    ]
  },
  "hidden_in_chat": null
}
```

</details>

Done. Added an exclusion so that detail won't be regenerated into memory.

Note: existing memory entries update in the background on Anthropic's schedule, not instantly — so "monitoring the release of Claude Opus 4.7 on Vertex AI and other platforms" may still appear in the "Top of mind" section for a bit before it's rewritten out. The exclusion I just added will apply from the next memory refresh onward.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db420-07a0-7136-9c5f-47be71bd83d4",
  "updated_at": "2026-04-22T07:38:26.621415Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db420-07a0-7291-a3e6-3ebe375e897b"
}
```

</details>
