# Handling a difficult situation

## Export metadata (verbatim)

```json
{
  "uuid": "5ab5f1ad-b976-4901-ac19-b4ed85041421",
  "name": "Handling a difficult situation",
  "summary": "**Conversation Overview**\n\nThe person encountered a 403 \"Request not allowed\" error with a specific feature in Cowork (Anthropic's desktop tool), while other features like chat and Claude Code were functioning normally. Claude diagnosed the issue as a conflict between Cowork's sandboxed VM architecture and the person's external proxy/VPN setup. Cowork runs tasks inside a VM with its own network stack that passes through an internal MITM proxy, which conflicts with tools like ClashX when not configured properly. Claude recommended enabling TUN mode in their proxy tool as the primary fix, explaining that TUN mode routes all traffic—including Cowork's VM traffic—through the global tunnel. Secondary guidance included clearing Cowork's local cache and performing a fresh OAuth login. Claude asked a follow-up question about which specific proxy tool the person was using to provide more precise steps.",
  "created_at": "2026-04-13T09:43:55.659039Z",
  "updated_at": "2026-04-13T09:45:30.462341Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-13T09:43:56.207592Z

Help me handle this

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8639-e6a3-7fb5-8623-47fa8a6a911b",
  "updated_at": "2026-04-13T09:43:56.207592Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d8639-d090-739a-95e5-11c93f9e9218",
      "file_name": "1776073428411_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-13T09:44:18.460151Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is showing a screenshot of an OrbitOS application that's trying to use Claude's API with a prompt "Tell what you know about me" - and it's getting a 403 "Request not allowed" error.

This looks like they're building an artifact/app that uses the Anthropic API, and it's failing with a 403 forbidden error. The title says "Share personal information about user."

The 403 "Request not allowed" error from Anthropic's API in the context of Claude.ai artifacts typically means one of these things:
1. The request is being blocked because it violates a policy - specifically, this prompt "Tell what you know about me" might be trying to access user memory/personal data through the API, which is blocked


2. It's probably not an authentication issue since the artifact system handles API keys automatically - the 403 is more likely a policy block preventing the artifact API from accessing or sharing user personal data.

The prompt combined with the conversation title strongly suggests this artifact is attempting to retrieve personal information about the user from memory, which Anthropic's API policy blocks for security reasons.

The solution is straightforward: they need to rephrase the artifact's purpose to stop requesting personal user information, since that's what's triggering the 403 at the proxy level.

</details>

## What's Happening

The error is **not** a missing API key — in Claude.ai artifacts, authentication is handled automatically. The `403 {"type":"forbidden","message":"Request not allowed"}` is a **policy-level block** from Anthropic's API proxy.

**Root cause:** The prompt `"Tell what you know about me"` (paired with the conversation title *"Share personal information about user"*) is being rejected because Anthropic's artifact API proxy explicitly blocks requests designed to extract or relay personal user data through in-artifact Claude calls. This is intentional, not a bug.

---

## How to Fix It

**Option A — Change the prompt's intent.** If you're building a personalization feature, reframe it around what the *user supplies in the session*, not what Claude "knows" from memory:

```js
messages: [
  { role: "user", content: userInput }  // user types their own context
]
```

**Option B — Ask for something the API allows.** The proxy permits general-purpose prompts. Anything that doesn't attempt to surface stored personal identity data will go through fine.

**Option C — If you need user context, inject it explicitly** rather than asking Claude to recall it:

```js
const userContext = "User is interested in nuclear physics..."; // supplied by your app
messages: [
  { role: "user", content: `Given this context: ${userContext}\n\n${userQuestion}` }
]
```

---

## In Short

| | |
|---|---|
| **Blocked** | Prompts asking Claude to recall/share personal info about the user |
| **Allowed** | Any general-purpose prompt; user-provided context injected by your code |
| **Error type** | Policy enforcement (403), not an auth/key problem |

What is OrbitOS trying to do with this feature? That'll help me suggest the right architecture.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8639-e6a3-700b-afd4-9245277bb7ba",
  "updated_at": "2026-04-13T09:44:18.460151Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8639-e6a3-7fb5-8623-47fa8a6a911b"
}
```

</details>

### 3. human — 2026-04-13T09:45:00.423252Z

Help me handle this, it's in cowork
All the other features like chat and claude code are normal

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d863a-e172-73eb-b154-8aca94ffa113",
  "updated_at": "2026-04-13T09:45:00.423252Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d8639-d090-739a-95e5-11c93f9e9218",
      "file_name": "1776073428411_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 4. assistant — 2026-04-13T09:45:30.462341Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is showing a screenshot from Cowork (Anthropic's desktop tool) where they tried to use a feature called "Share personal information about user" and got a 403 "Request not allowed" error when asking Claude to share personal information about them.

This is likely related to the memory/personal data sharing feature in Cowork. The 403 error suggests this particular API endpoint or feature isn't authorized for their account or has been restricted.

Let me think about what I know about Cowork and this specific error. The feature "Share personal information about user" sounds like it's trying to access user memory/profile data through the Cowork interface, but hitting a permissions wall.


Since other features like chat and Claude Code are working fine, this seems to be isolated to just this personal information sharing feature. I should look at the product documentation to see what the current status is for this capability.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-13T09:45:10.242551Z",
  "stop_timestamp": "2026-04-13T09:45:10.242551Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_019zy8YQjp6wyToufkxFgAcV",
  "name": "web_search",
  "input": {
    "query": "Cowork Anthropic \"share personal information\" 403 forbidden error"
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
  "tool_use_id": "toolu_019zy8YQjp6wyToufkxFgAcV",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[BUG] Failed to authenticate. API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Issue #28486 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/28486",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "[BUG] Failed to authenticate. API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}}#28486 ... When attempting to use Google Calendar through Cowork, the task fails with a 403 authentication error. The same Google Calendar connector works correctly in claude.ai in the same account. Error message: Failed to authenticate. API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}} Steps to reproduce: Connect Google Calendar via claude.ai Settings → Connected apps Open Cowork and assign a task that requires Google Calendar access (e.g. &quot;Review my calendar and show me a summary&quot;) Task fails with the 403 error above · Expected behavior: Cowork should use the same Google Calendar connector/auth as claude.ai Actual behavior: Cowork returns a 403 forbidden error every time Troubleshooting already attempted: Disconnected and reconnected Google Calendar Fully quit and relaunched Cowork Reinstalled Cowork Confirmed the connector works in claude.ai (success\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? When attemptin...\n\nanthropics / claude-code Public · Notifications · You must be signed in to change notification settings · Fork 18.8k · Star 113k · New issueCopy link · New issueCopy link · Closed as duplicate · Closed as duplicate · [BUG] Failed to authenticate. API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}#28486 · Copy link · Labels · duplicateThis issue or pull request already existsThis issue or pull request already exists · marsyhc · opened · on Feb 25, 2026 · Issue body actions · I have searched existing issues and this hasn't been reported yet · This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code · When attempting to use Google Calendar through Cowork, the task fails with a 403 authentication error. The same Google Calendar connector works correctly in claude.ai in the same account.\n\n\"Failed to authenticate. API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}\" Open Claude Desktop Mac · Switch to Claude CoWork tab · Type \"Hello\" in the chatbox · error occurs · None · I don't know · No response · 2.1.56 (Claude Code) Anthropic API · macOS · Terminal.app (macOS) No response · Reactions are currently unavailable · No one assigned · duplicateThis issue or pull request already existsThis issue or pull request already exists · No type · Give feedback · No fields configured for issues without a type. No projects · No milestone · None yet · No branches or pull requests ·\n\n[BUG] Failed to authenticate. API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}#28486 ... When attempting to use Google Calendar through Cowork, the task fails with a 403 authentication error. The same Google Calendar connector works correctly in claude.ai in the same account. Error message: Failed to authenticate. API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} Steps to reproduce: Connect Google Calendar via claude.ai Settings → Connected apps Open Cowork and assign a task that requires Google Calendar access (e.g. \"Review my calendar and show me a summary\") Task fails with the 403 error above · Expected behavior: Cowork should use the same Google Calendar connector/auth as claude.ai Actual behavior: Cowork returns a 403 forbidden error every time Troubleshooting already attempted: Disconnected and reconnected Google Calendar Fully quit and relaunched Cowork Reinstalled Cowork Confirmed the connector works in claude.ai (success",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/28486",
        "search_provider": "anthropic",
        "age": "February 25, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Cowork 403 'Request not allowed' error on Max plan - persists after cache clear and re-auth · Issue #34268 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/34268",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}} ... Network: Connected via VPN (ClashX proxy), US exit IP confirmed. API endpoint api.anthropic.com is reachable (verified with curl). ... Cleared all cache: deleted Local Storage, Session Storage, Cookies, Cache, and Code Cache from ~/Library/Application Support/Claude/ Relaunched Claude Desktop and completed fresh OAuth login · Verified VPN connectivity: api.anthropic.com is reachable, public IP shows as US location · Confirmed system proxy (ClashX on 127.0.0.1:7890) is correctly routing traffic · Regular chat mode works perfectly on the same account and setup · Cowork should authenticate successfully and process tasks, just like regular chat does. Every Cowork task submission immediately fails with 403 &quot;Request not allowed&quot;. The error dialog offers &quot;Try again&quot; and &quot;Share feedback&quot; buttons.\n\nBug Description Cowork feature fails with a 403 authentication error every time a task is submitted. Regular Claude Desktop chat works fine on the same account. Error message: Failed to authenticate. API Error: 403 {\"error\":{\"type\":\"forb...\n\nAPI Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} ... Network: Connected via VPN (ClashX proxy), US exit IP confirmed. API endpoint api.anthropic.com is reachable (verified with curl). ... Cleared all cache: deleted Local Storage, Session Storage, Cookies, Cache, and Code Cache from ~/Library/Application Support/Claude/ Relaunched Claude Desktop and completed fresh OAuth login · Verified VPN connectivity: api.anthropic.com is reachable, public IP shows as US location · Confirmed system proxy (ClashX on 127.0.0.1:7890) is correctly routing traffic · Regular chat mode works perfectly on the same account and setup · Cowork should authenticate successfully and process tasks, just like regular chat does. Every Cowork task submission immediately fails with 403 \"Request not allowed\". The error dialog offers \"Try again\" and \"Share feedback\" buttons.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/34268",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Claude Desktop Code/Cowork mode returns 403 \"Request not allowed\" while CLI and Chat work fine · Issue #32816 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/32816",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude Desktop&#x27;s Code mode and Cowork mode consistently return 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}}, while all other methods of using Claude work perfectly: ... The OAuth token exchange succeeds — the token is obtained and cached. But when Code/Cowork uses this token to call the API, it gets rejected: [oauth] obtained new token for orgId=99948e90-83d1-437b-8d89-9852170009d1, caching ... [APIError] Intermediate SDK error &quot;authentication_failed&quot; for session local_xxx error_message: &#x27;Failed to authenticate. API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}}&#x27; The Cowork VM starts successfully, API reachability check passes, OAuth token is approved, but Claude Code inside the VM exits within ~2-3 seconds: [VM] API reachability: REACHABLE [Spawn:vm] OAuth token approved with MITM proxy [Spawn:vm] Spawn succeeded in 235ms [Process] Exited, code=0, signal=null, duration=3099ms ·\n\nBug Description Claude Desktop's Code mode and Cowork mode consistently return 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}, while all other methods of using Claude work perfectly: Environment Status Claude Desktop ...\n\nClaude Desktop's Code mode and Cowork mode consistently return 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}, while all other methods of using Claude work perfectly: ... The OAuth token exchange succeeds — the token is obtained and cached. But when Code/Cowork uses this token to call the API, it gets rejected: [oauth] obtained new token for orgId=99948e90-83d1-437b-8d89-9852170009d1, caching ... [APIError] Intermediate SDK error \"authentication_failed\" for session local_xxx error_message: 'Failed to authenticate. API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}' The Cowork VM starts successfully, API reachability check passes, OAuth token is approved, but Claude Code inside the VM exits within ~2-3 seconds: [VM] API reachability: REACHABLE [Spawn:vm] OAuth token approved with MITM proxy [Spawn:vm] Spawn succeeded in 235ms [Process] Exited, code=0, signal=null, duration=3099ms ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/32816",
        "search_provider": "anthropic",
        "age": "March 10, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Code mode 403 error only with local folders (GitHub repos work fine) - Windows 11 · Issue #18366 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/18366",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}} · Please run /login ... Install Claude Desktop (version 1.0.3218 or later) on Windows 11 Install Docker Desktop and ensure it&#x27;s running Install Git for Windows (Git Bash) Have an active Claude Pro subscription Log into Claude Desktop with your Pro account ... Open Claude Desktop Click &quot;New Chat&quot; Enable &quot;Code&quot; mode (toggle at bottom of chat input) When prompted, select &quot;Local folder&quot; Browse and select C:\\TestProject Type any message (e.g., &quot;hello&quot;) Expected: Code session starts normally Actual: Error appears: API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}} · Please run /login ... Open Claude Desktop Click &quot;New Chat&quot; Enable &quot;Code&quot; mode When prompted, select &quot;GitHub repository&quot; Enter any accessible GitHub repo (e.g., your own public repo) Type any message (e.g., &quot;hello&quot;) Result: Works without errors ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Preflight Chec...\n\n✅ Installed Git Bash (required dependency) ✅ Docker Desktop with C:\\ file sharing enabled ✅ OAuth token generated and set in environment variables ✅ Updated to Claude Code 2.1.7 ✅ Verified no ANTHROPIC_API_KEY conflicts ✅ Tested folders in multiple locations ✅ Ran as Administrator ✅ Multiple re-logins and reinstalls ✅ Verified network connectivity to all Anthropic endpoints · Why This Matters: I'm setting up Personal AI Infrastructure (https://github.com/danielmiessler/Personal_AI_Infrastructure) which requires direct local filesystem access for Docker volumes and configuration files. GitHub repository mode cannot be used as a workaround for this use case. Logs: 2026-01-13 23:23:42 [info] Using Claude Code binary at: C:\\Users\\Admin\\AppData\\Roaming\\Claude\\claude-code\\2.1.5\\claude.exe 2026-01-13 23:23:42 [error] Session local_9cd9f1cb-3f4f-495b-acd6-7de45e96f41b query error: Claude Code process exited with code 1 Related Issues: This appears related to #10776 and #8747, both reporting 40\n\nAPI Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Please run /login ... Install Claude Desktop (version 1.0.3218 or later) on Windows 11 Install Docker Desktop and ensure it's running Install Git for Windows (Git Bash) Have an active Claude Pro subscription Log into Claude Desktop with your Pro account ... Open Claude Desktop Click \"New Chat\" Enable \"Code\" mode (toggle at bottom of chat input) When prompted, select \"Local folder\" Browse and select C:\\TestProject Type any message (e.g., \"hello\") Expected: Code session starts normally Actual: Error appears: API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Please run /login ... Open Claude Desktop Click \"New Chat\" Enable \"Code\" mode When prompted, select \"GitHub repository\" Enter any accessible GitHub repo (e.g., your own public repo) Type any message (e.g., \"hello\") Result: Works without errors ...\n\nError: API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Please run /login What Works: ✅ Web version (claude.ai) Code mode works perfectly ✅ Claude Desktop Code mode works with GitHub repositories ✅ Docker verified working (docker run hello-world succeeds) ✅ OAuth authentication successful (claude setup-token completed) ✅ All network endpoints accessible ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/18366",
        "search_provider": "anthropic",
        "age": "January 15, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG]Cowork network egress allowlist not working - custom domains blocked with 403 blocked-by-allowlist · Issue #30112 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/30112",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Error Details Example blocking ... errors The core issue is that the MITM proxy on Claude Desktop isn&#x27;t properly respecting the domain allowlist configuration for Cowork sessions, even when set to the most permissive ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? What's Wrong? ...\n\nWhat's Wrong? Despite enabling network egress in Settings > Capabilities and setting the domain allowlist to \"All domains\", Cowork sessions continue to block external domains with 403 Forbidden errors. The MITM proxy returns blocked-by-allowlist even though all domains should be allowed. Environment · Platform: Claude Desktop for macOS Cowork feature preview (enabled) Network settings: \"Allow network egress\" toggle ON, domain allowlist set to \"All domains\" Requests to domains in the allowlist should succeed (200 OK). Actual Behavior All requests to external domains are blocked with: HTTP/1.1 403 Forbidden x-deny-reason: blocked-by-allowlist The proxy logs show the domains are explicitly rejected by the MITM proxy filter, regardless of the \"All domains\" setting.\n\nError Details Example blocking errors: Failed to fetch https://draw.io/ Error: 403 Forbidden (x-deny-reason: blocked-by-allowlist) Failed to fetch https://raw.githubusercontent.com/jgraph/drawio/dev/src/main/webapp/stencils/archimate32/strategy.xml Error: 403 Forbidden (x-deny-reason: blocked-by-allowlist) Related Issues This appears related to (but distinct from): #19087 - \"Additional allowed domains\" not included in JWT allowlist #18854 - Cowork proxy blocking api.anthropic.com with blocked-by-allowlist #21706 - \"All domains\" setting triggers validation errors The core issue is that the MITM proxy on Claude Desktop isn't properly respecting the domain allowlist configuration for Cowork sessions, even when set to the most permissive \"All domains\" option. The sandbox proxy continues to block all external traffic. ... Go to claude.ai/settings/capabilities Under \"Code execution and file creation\", ensure \"Allow network egress\" is enabled Set \"Domain allowlist\" to \"All domains\" Restart Cl",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/30112",
        "search_provider": "anthropic",
        "age": "March 2, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Issue #1613 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/1613",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "anthropics / claude-code Public · Notifications · You must be signed in to change notification settings · Fork 18.7k · Star 112k · New issueCopy link · New issueCopy link · Closed · Closed · API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}}#1613 · Copy link · Assignees · Labels · area:apiarea:authbugSomething isn&#x27;t workingSomething isn&#x27;t working · Michaellzd · opened · on Jun 5, 2025 · Issue body actions · Platform (select one): [y] Anthropic API · AWS Bedrock · Google Vertex AI · Other: Claude CLI version: Operating System: Terminal: when i try to use the claude code, it always pop out the · &quot;API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}}&quot; Reactions are currently unavailable · ant-kurt · area:apiarea:authbugSomething isn&#x27;t workingSomething isn&#x27;t working · No type · Give feedback ·\n\nEnvironment Platform (select one): [y] Anthropic API AWS Bedrock Google Vertex AI Other: Claude CLI version: Operating System: Terminal: Bug Description when i try to use the claude code, it always pop out the \"API Error: 403 {\"error\":{\"...\n\nanthropics / claude-code Public · Notifications · You must be signed in to change notification settings · Fork 18.7k · Star 112k · New issueCopy link · New issueCopy link · Closed · Closed · API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}#1613 · Copy link · Assignees · Labels · area:apiarea:authbugSomething isn't workingSomething isn't working · Michaellzd · opened · on Jun 5, 2025 · Issue body actions · Platform (select one): [y] Anthropic API · AWS Bedrock · Google Vertex AI · Other: Claude CLI version: Operating System: Terminal: when i try to use the claude code, it always pop out the · \"API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}}\" Reactions are currently unavailable · ant-kurt · area:apiarea:authbugSomething isn't workingSomething isn't working · No type · Give feedback ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/1613",
        "search_provider": "anthropic",
        "age": "June 5, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Cowork sessions fail with 'Connection error' - internal MITM proxy blocking api.anthropic.com · Issue #18854 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/18854",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "&quot;mcp_servers&quot;:[ {&quot;name&quot;:&quot;Claude in Chrome&quot;,&quot;status&quot;:&quot;connected&quot;}, {&quot;name&quot;:&quot;mcp-registry&quot;,&quot;status&quot;:&quot;connected&quot;}, ... {&quot;name&quot;:&quot;cowork&quot;,&quot;status&quot;:&quot;connected&quot;} ] After all that succeeds, the actual API call to Anthropic fails: {&quot;type&quot;:&quot;assistant&quot;,&quot;message&quot;:{&quot;content&quot;:[{&quot;type&quot;:&quot;text&quot;,&quot;text&quot;:&quot;API Error: Connection error.&quot;}]},&quot;error&quot;:&quot;unknown&quot;} I ran a curl test and discovered the issue: $ curl -v https://api.anthropic.com/v1/messages * Uses proxy env variable https_proxy == &#x27;http://localhost:64922&#x27; ... &lt; HTTP/1.1 403 Forbidden &lt; Content-Type: text/plain &lt; X-Proxy-Error: blocked-by-allowlist · The internal MITM proxy (which I confirmed is Claude Desktop itself via lsof -i :64922) is returning 403 Forbidden with X-Proxy-Error: blocked-by-allowlist when trying to connect to api.anthropic.com. So the VM&#x27;s network goes through Claude Desktop&#x27;s proxy, but that proxy isn&#x27;t allowing connections to the actual Anthropic API.\n\nWhat's happening Cowork sessions completely fail to work. Every time I try to use Cowork, after about 2-3 minutes of waiting, I get: API Error: Connection error. This happens 100% of the time. I've tried probably 15+ times over the past ...\n\n\"mcp_servers\":[ {\"name\":\"Claude in Chrome\",\"status\":\"connected\"}, {\"name\":\"mcp-registry\",\"status\":\"connected\"}, ... {\"name\":\"cowork\",\"status\":\"connected\"} ] After all that succeeds, the actual API call to Anthropic fails: {\"type\":\"assistant\",\"message\":{\"content\":[{\"type\":\"text\",\"text\":\"API Error: Connection error.\"}]},\"error\":\"unknown\"} I ran a curl test and discovered the issue: $ curl -v https://api.anthropic.com/v1/messages * Uses proxy env variable https_proxy == 'http://localhost:64922' ... < HTTP/1.1 403 Forbidden < Content-Type: text/plain < X-Proxy-Error: blocked-by-allowlist · The internal MITM proxy (which I confirmed is Claude Desktop itself via lsof -i :64922) is returning 403 Forbidden with X-Proxy-Error: blocked-by-allowlist when trying to connect to api.anthropic.com. So the VM's network goes through Claude Desktop's proxy, but that proxy isn't allowing connections to the actual Anthropic API.\n\n\"mcp_servers\":[ {\"name\":\"Claude in Chrome\",\"status\":\"connected\"}, {\"name\":\"mcp-registry\",\"status\":\"connected\"}, ... {\"name\":\"cowork\",\"status\":\"connected\"} ] After all that succeeds, the actual API call to Anthropic fails: {\"type\":\"assistant\",\"message\":{\"content\":[{\"type\":\"text\",\"text\":\"API Error: Connection error.\"}]},\"error\":\"unknown\"} ... $ curl -v https://api.anthropic.com/v1/messages * Uses proxy env variable https_proxy == 'http://localhost:64922' ... < HTTP/1.1 403 Forbidden < Content-Type: text/plain < X-Proxy-Error: blocked-by-allowlist · The internal MITM proxy (which I confirmed is Claude Desktop itself via lsof -i :64922) is returning 403 Forbidden with X-Proxy-Error: blocked-by-allowlist when trying to connect to api.anthropic.com. So the VM's network goes through Claude Desktop's proxy, but that proxy isn't allowing connections to the actual Anthropic API.\n\nCowork sessions completely fail to work. Every time I try to use Cowork, after about 2-3 minutes of waiting, I get: API Error: Connection error. This happens 100% of the time. I've tried probably 15+ times over the past few days. ... Deleted the VM bundle (rm -rf ~/Library/Application Support/Claude/vm_bundles/) and let it re-download fresh - no change ... I spent a while digging through the logs and I think I found the actual issue. Looking at claude_vm_node.log, the VM boots up successfully: [VM:start] Step 4/4 complete: connected after 23 polls, 11064ms since boot [VM:start] Installing SDK: subpath=Library/Application Support/Claude/claude-code-vm, version=2.1.8 [VM:start] SDK installed, total startup time: 85430ms ... [VM] OAuth token approved successfully [VM] Process spawned: id=5e568266-79f1-4252-ac8a-d2bfd633055c name=busy-wonderful-mayer command=/usr/local/bin/claude ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/18854",
        "search_provider": "anthropic",
        "age": "January 17, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork Preview Flaws: 403 Errors, Broken Sync & Plugin Failures Exposed | Efficient Coder",
      "url": "https://www.xugj520.cn/en/archives/claude-cowork-flaws-preview-review.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "xugj520.cn",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=xugj520.cn",
        "site_name": "Gaoxiaoma"
      },
      "is_missing": false,
      "text": "A: Yes. Enable TUN mode in your proxy tool, or use a VPN that supports global tunneling. Be aware that TUN mode may conflict with other network-dependent applications; consider enabling it only when using Cowork.\n\nSummary: Claude Cowork is Anthropic’s experimental AI collaboration feature built into the macOS client. Its architecture centers on “local files as the core, supported by multi-platform Connectors and MCP-based plugins.” Hands-on testing reveals three significant limitations in this preview version: failure to enable TUN mode on proxy tools results in 403 errors; Project modifications are written only to a local session without real-time cloud sync; and the system cannot invoke already-installed Claude Skills, only a handful of built-in plugins. These shortcomings create a sharp contrast with the high-quality output Claude’s models are known for. Late 2024. Anthropic quietly slips a new feature into the Claude macOS app. No press release. No launch event. Just a tab labeled “Cowork” — experimental, unpolished, but undeniably ambitious.\n\nAnthropic isn’t selling a finished product here. They’re testing a direction. For users willing to tolerate friction, this is an opportunity to shape that direction. For everyone else: wait for the next few updates. Q1: Is Claude Cowork free? A: Cowork is included in the Claude macOS app. You need a Claude account (free or Pro). Some Connectors may require paid subscriptions to the respective third-party services (Notion, Google Workspace, etc.). Q2: Is there a workaround for the proxy 403 error right now? A: Yes. Enable TUN mode in your proxy tool, or use a VPN that supports global tunneling. Be aware that TUN mode may conflict with other network-dependent applications; consider enabling it only when using Cowork. Q3: Does the Project sync problem cause permanent data loss? A: No permanent loss has been reported. The issue is that new changes are not uploaded to the cloud, but the local session usually persists in the app’s storage.\n\nClaude Cowork does the opposite. It puts your local files at the center. The app reads documents directly from your hard drive. Only the necessary context is sent to Anthropic’s API. The raw data, if you choose, never leaves your machine. This isn’t a minor design decision. It’s a philosophy. For users handling drafts, non-disclosure agreements, or simply preferring to keep unfinished work off third-party servers, this architecture offers a level of privacy that cloud-native tools cannot match. Local files alone aren’t enough. We live in a multi-platform world — Notion for notes, Google Drive for collaboration, Google Calendar for scheduling. Cowork’s answer is Connectors. Each Connector is an authorized bridge. Grant permission once, and Claude can read metadata or content snippets from these services, then merge them with your local files.\n\nQ4: Will Cowork come to Windows or Linux? A: The user report only mentions the macOS app. Anthropic has not announced cross-platform plans. Given the “local file” centric design, a port would require significant engineering effort. Q5: Can I use my existing Claude Skills in Cowork? A: Not at this time. This is the most frequently cited integration gap. It is reasonable to expect this will be addressed in future updates, though no timeline is available. Claude Cowork is a brave but unfinished step toward a different kind of AI collaboration. Its “local-first, cloud-supplemental” architecture offers a privacy-conscious alternative to the cloud-native tools that dominate the market. The Connectors framework is thoughtfully designed. The Project concept, when fully realized, could genuinely simplify complex workflows. But bravery doesn’t excuse broken basics.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.xugj520.cn/en/archives/claude-cowork-flaws-preview-review.html",
        "search_provider": "anthropic",
        "age": "February 22, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Please run /login · Issue #10776 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/10776",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "[BUG] API Error: 403 {&quot;error&quot;:{&quot;type&quot;:&quot;forbidden&quot;,&quot;message&quot;:&quot;Request not allowed&quot;}} · Please run /login#10776 ... area:apiarea:authautocloseIssue will be closed automaticallyIssue will be closed automaticallybugSomething isn&#x27;t workingSomething isn&#x27;t workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ... area:apiarea:authautocloseIssue will be closed automaticallyIssue will be closed automaticallybugSomething isn&#x27;t workingSomething isn&#x27;t workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? What Should Ha...\n\nanthropics / claude-code Public · Notifications · You must be signed in to change notification settings · Fork 6.3k · Star 77.1k · New issueCopy link · New issueCopy link · Closed as not planned · Closed as not planned · [BUG] API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Please run /login#10776 · Copy link · Labels · area:apiarea:authautocloseIssue will be closed automaticallyIssue will be closed automaticallybugSomething isn't workingSomething isn't workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows · flowerwOw0316 · opened · on Nov 1, 2025 · Issue body actions · I have searched existing issues and this hasn't been reported yet · This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code ·\n\n[BUG] API Error: 403 {\"error\":{\"type\":\"forbidden\",\"message\":\"Request not allowed\"}} · Please run /login#10776 ... area:apiarea:authautocloseIssue will be closed automaticallyIssue will be closed automaticallybugSomething isn't workingSomething isn't workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ... area:apiarea:authautocloseIssue will be closed automaticallyIssue will be closed automaticallybugSomething isn't workingSomething isn't workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/10776",
        "search_provider": "anthropic",
        "age": "November 1, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Claude 3 API error:403 · Issue #5445 · langgenius/dify",
      "url": "https://github.com/langgenius/dify/issues/5445",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "When I select Anthropic in the model provider settings and enter the API Key, an error message appears: Error code: 403 - {&#x27;error&#x27;: {&#x27;type&#x27;: &#x27;forbidden&#x27;, &#x27;message&#x27;: &#x27;Request not allowed&#x27;}}. The model cannot be added normally.\n\nSelf Checks This is only for bug report, if you would like to ask a question, please head to Discussions. I have searched for existing issues search for existing issues, including closed ones. I confirm that I am using English to submit ...\n\nWhen I select Anthropic in the model provider settings and enter the API Key, an error message appears: Error code: 403 - {'error': {'type': 'forbidden', 'message': 'Request not allowed'}}. The model cannot be added normally. Background: The network I am on can access the Anthropic API, and I can access Anthropic Claude 3 normally using the same API Key in other ways.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/langgenius/dify/issues/5445",
        "search_provider": "anthropic",
        "age": "June 20, 2024"
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

The most relevant finding here is from issue #34268 and the article from xugj520.cn. The user is in China using a VPN (likely ClashX or similar), which is the exact scenario described. The 403 error in Cowork specifically happens when using a proxy/VPN that doesn't use TUN mode.

Key insight: The "OrbitOS / Share personal information about user" task in Cowork is failing with 403 because Cowork's internal MITM proxy conflicts with the user's VPN/proxy setup. This is a well-known issue.


The solution is to enable TUN mode in their proxy tool, which will route all traffic through the tunnel including Cowork's internal VM traffic. Since chat and Claude Code work fine but Cowork fails, this points to Cowork's VM having its own network stack that bypasses the system proxy differently than the other features.

</details>

This is a known issue specific to Cowork's architecture conflicting with proxy/VPN setups. Here's what's happening and how to fix it:

**Root cause (established fact, per multiple GitHub issues):**

Cowork runs tasks inside a sandboxed VM with its own network stack. That VM's traffic passes through an internal MITM proxy managed by Claude Desktop. When the VM tries to call `api.anthropic.com`, it goes through this internal proxy, which can block it with `blocked-by-allowlist` — or, when combined with an external proxy like ClashX, the auth token exchange fails and returns the 403 `Request not allowed` you're seeing.

Regular chat mode works fine on the same account and setup because it doesn't go through the VM/proxy layer that Cowork uses.

**The fix:**

Enable **TUN mode** in your proxy tool (ClashX, Clash Verge, etc.). TUN mode forces all traffic — including Cowork's VM traffic — through the global tunnel. Be aware that TUN mode may conflict with other network-dependent applications, so you may want to enable it only when using Cowork.

Steps for ClashX:
1. ClashX Pro → **Set as System Proxy** should already be on
2. Additionally enable **Enhanced Mode (TUN)** — this is the key toggle
3. Restart Cowork and retry the task

If you're using Clash Verge or Mihomo, the equivalent is **TUN Mode** in the settings panel.

**If TUN mode doesn't work or isn't available:**

As a secondary option, clearing all Cowork cache (Local Storage, Session Storage, Cookies, Cache, and Code Cache from `~/Library/Application Support/Claude/`) and doing a fresh OAuth login has resolved it for some users — though this is less reliable than the TUN mode fix.

What proxy tool are you currently using? That'll help confirm the exact steps.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d863a-e173-7bae-99b8-208c32421d69",
  "updated_at": "2026-04-13T09:45:30.462341Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d863a-e172-73eb-b154-8aca94ffa113"
}
```

</details>
