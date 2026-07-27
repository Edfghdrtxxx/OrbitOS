# Using Windows with VPN enabled

## Export metadata (verbatim)

```json
{
  "uuid": "630af958-97ec-461c-88e8-5457b8930fb4",
  "name": "Using Windows with VPN enabled",
  "summary": "**Conversation Overview**\n\nThe person was troubleshooting why Anthropic's Cowork application was stuck on the \"Setting up Claude's workspace\" screen on Windows while running a VPN, with a preference to keep the VPN active. Claude explained that Cowork runs inside a Hyper-V Linux VM whose NAT networking is broken by VPN software reconfiguring system routing tables, and that even split tunneling does not resolve the conflict because the Hyper-V NAT layer does not respect VPN exclusions. Claude noted one advanced workaround involving manually recreating the Cowork VM network with a non-conflicting subnet, but flagged it as fragile and likely to break on updates.\n\nThe person then asked for an estimated fix timeline. Claude explained that the most detailed GitHub issue on the topic (issue #25513) was closed as \"not planned\" and labeled out of scope by Anthropic's Claude Code team, that no public roadmap commitment exists, and that Anthropic's recent Cowork development focus has been on feature expansion rather than VM networking architecture. Claude assessed a near-term fix as unlikely and suggested submitting logs referencing the GitHub issue to add weight to the request.\n\nFinally, the person asked whether using Claude Code and Claude Chat together would cover everything Cowork offers. Claude confirmed that for a technically proficient user, the combination covers nearly all Cowork functionality, with Claude Code providing superior filesystem access, token efficiency, and VPN compatibility. The only meaningful gaps identified were Cowork's built-in scheduled/recurring task feature and mobile dispatch capability, both of which could be approximated manually using cron jobs with the `claude -p` CLI flag.",
  "created_at": "2026-03-26T09:06:30.088585Z",
  "updated_at": "2026-03-26T09:12:40.445478Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-26T09:06:31.200059Z

Why my cowork stuck here for a while.
Windows + VPN, and I don't want to close VPN to use it. Is it possible?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d2965-2fcf-79e5-b9f4-2e544953f07b",
  "updated_at": "2026-03-26T09:06:31.200059Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d2964-96b1-74d0-afca-469c8b959a4f",
      "file_name": "1774515950683_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-26T09:07:11.511613Z

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about Anthropic's "Cowork" product being stuck at the "Setting up Claude's workspace" screen. They're on Windows with a VPN and don't want to disable the VPN. Let me search for current information about this.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-26T09:06:36.204219Z",
  "stop_timestamp": "2026-03-26T09:06:36.204219Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01TFHN3Xf1WwXXNRSKjzgcMi",
  "name": "web_search",
  "input": {
    "query": "Anthropic Cowork stuck \"setting up workspace\" VPN"
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
  "tool_use_id": "toolu_01TFHN3Xf1WwXXNRSKjzgcMi",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[BUG] Cowork stuck on \"Setting up workspace\" - CoworkVMService fails to start on Windows 11 Home · Issue #37070 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/37070",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "[BUG] Cowork stuck on &quot;Setting up workspace&quot; - CoworkVMService fails to start on Windows 11 Home#37070 ... invalidIssue doesn&#x27;t seem to be related to Claude CodeIssue doesn&#x27;t seem to be related to Claude Code ... Windows 11 Home 25H2 CoworkVMService: Stopped, cannot start Error: signature verification initialization failed: failed to get service executable path Tried: reinstall, repair, reset - all failed · Cowork workspace should start successfully and be ready to use. ... invalidIssue doesn&#x27;t seem to be related to Claude CodeIssue doesn&#x27;t seem to be related to Claude Code ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Windows 11 Hom...\n\nanthropics / claude-code Public · Notifications · You must be signed in to change notification settings · Fork 6.8k · Star 82k · New issueCopy link · New issueCopy link · Open · Open · [BUG] Cowork stuck on \"Setting up workspace\" - CoworkVMService fails to start on Windows 11 Home#37070 · Copy link · Labels · invalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Code · Ashlyn150 · opened · on Mar 21, 2026 · Issue body actions · I have searched existing issues and this hasn't been reported yet · This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code · Windows 11 Home 25H2 CoworkVMService: Stopped, cannot start Error: signature verification initialization failed: failed to get service executable path Tried: reinstall, repair, reset - all failed ·\n\nOpen Cowork tab · Workspace stuck on \"Setting up Claude's workspace\" forever · None · No, this never worked · No response · 1.1.7714.0 · Anthropic API · Windows · PowerShell · No response · Reactions are currently unavailable · No one assigned · invalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Code · No type · No projects · No milestone · None yet · No branches or pull requests ·\n\n[BUG] Cowork stuck on \"Setting up workspace\" - CoworkVMService fails to start on Windows 11 Home#37070 ... invalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Code ... Windows 11 Home 25H2 CoworkVMService: Stopped, cannot start Error: signature verification initialization failed: failed to get service executable path Tried: reinstall, repair, reset - all failed · Cowork workspace should start successfully and be ready to use. ... invalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Code ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/37070",
        "search_provider": "anthropic",
        "age": "5 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] · Issue #23991 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/23991",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Cowork should successfully provision the VM workspace and allow task execution. The VM backend fails to create or locate the user&#x27;s home directory (/sessions/&lt;session-name&gt;), and recovery also fails. This appears to be a server-side VM provisioning issue, as all local cleanup steps have no effect. Regular Chat mode works perfectly — this is Cowork-specific · The error suggests the backend expects the user directory to already exist but it was never created · No VPN or proxy software is running · Network connectivity to api.anthropic.com is confirmed working · Prior to the RPC error, other connection errors were observed (ECONNRESET, ERR_QUIC_PROTOCOL_ERROR) which may or may not be related · Cowork should successfully provision the VM workspace and allow task execution. RPC error: ensure user: user &lt;session-name&gt; should already exist but does not, and recovery failed: home directory /sessions/&lt;session-name&gt; does not exist: stat /sessions/&lt;session-name&gt;: no such file or directory This ha\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? [BUG] Cowork V...\n\nCowork should successfully provision the VM workspace and allow task execution. The VM backend fails to create or locate the user's home directory (/sessions/<session-name>), and recovery also fails. This appears to be a server-side VM provisioning issue, as all local cleanup steps have no effect. Regular Chat mode works perfectly — this is Cowork-specific · The error suggests the backend expects the user directory to already exist but it was never created · No VPN or proxy software is running · Network connectivity to api.anthropic.com is confirmed working · Prior to the RPC error, other connection errors were observed (ECONNRESET, ERR_QUIC_PROTOCOL_ERROR) which may or may not be related · Cowork should successfully provision the VM workspace and allow task execution. RPC error: ensure user: user <session-name> should already exist but does not, and recovery failed: home directory /sessions/<session-name> does not exist: stat /sessions/<session-name>: no such file or directory This ha\n\nCowork consistently fails during workspace setup with an RPC error indicating the VM user's home directory does not exist. This occurs 100% of the time, across completely fresh sessions, even after full cache clearing and sign-out/sign-in. The workspace setup progress bar begins (reaches ~17–20%) and then fails with: RPC error: ensure user: user <session-name> should already exist but does not, and recovery failed: home directory /sessions/<session-name> does not exist: stat /sessions/<session-name>: no such file or directory · This has been reproduced with two different session identities, confirming the issue is not tied to a specific stale session: ... rm -rf ~/Library/Application\\ Support/Claude/Cache rm -rf ~/Library/Application\\ Support/Claude/Code\\ Cache rm -rf ~/Library/Application\\ Support/Claude/vm_bundles rm -rf ~/Library/Application\\ Support/Claude/sessions ...\n\nCowork should successfully provision the VM workspace and allow task execution. The VM backend fails to create or locate the user's home directory (/sessions/<session-name>), and recovery also fails. This appears to be a server-side VM provisioning issue, as all local cleanup steps have no effect. Regular Chat mode works perfectly — this is Cowork-specific · The error suggests the backend expects the user directory to already exist but it was never created ... Prior to the RPC error, other connection errors were observed (ECONNRESET, ERR_QUIC_PROTOCOL_ERROR) which may or may not be related · Cowork should successfully provision the VM workspace and allow task execution. RPC error: ensure user: user <session-name> should already exist but does not, and recovery failed: home directory /sessions/<session-name> does not exist: stat /sessions/<session-name>: no such file or directory This has been reproduced with two different session identities, confirming the issue is not tied to a specif",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/23991",
        "search_provider": "anthropic",
        "age": "February 7, 2026"
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
      "text": "Made sure no VPN was running - confirmed · I spent a while digging through the logs and I think I found the actual issue. Looking at claude_vm_node.log, the VM boots up successfully: [VM:start] Step 4/4 complete: connected after 23 polls, 11064ms since boot [VM:start] Installing SDK: subpath=Library/Application Support/Claude/claude-code-vm, version=2.1.8 [VM:start] SDK installed, total startup time: 85430ms · In claude_vm_swift.log: [VM] OAuth token approved successfully [VM] Process spawned: id=5e568266-79f1-4252-ac8a-d2bfd633055c name=busy-wonderful-mayer command=/usr/local/bin/claude · The session audit shows all MCP servers connecting fine: &quot;mcp_servers&quot;:[ {&quot;name&quot;:&quot;Claude in Chrome&quot;,&quot;status&quot;:&quot;connected&quot;}, {&quot;name&quot;:&quot;mcp-registry&quot;,&quot;status&quot;:&quot;connected&quot;}, ... {&quot;name&quot;:&quot;cowork&quot;,&quot;status&quot;:&quot;connected&quot;} ] After all that succeeds, the actual API call to Anthropic fails: {&quot;type&quot;:&quot;assistant&quot;,&quot;message&quot;:{&quot;content&quot;:[{&quot;type&quot;:&quot;text&quot;,&quot;text&quot;:&quot;API Error: Connection error.&quot;}]},&quot;error&quot;:&quot;unknown&quot;} I ran a\n\nWhat's happening Cowork sessions completely fail to work. Every time I try to use Cowork, after about 2-3 minutes of waiting, I get: API Error: Connection error. This happens 100% of the time. I've tried probably 15+ times over the past ...\n\nCowork sessions fail with 'Connection error' - internal MITM proxy blocking api.anthropic.com#18854 · Copy link · Assignees · Labels · area:corebugSomething isn't workingSomething isn't workinghas reproHas detailed reproduction stepsHas detailed reproduction stepsplatform:macosIssue specifically occurs on macOSIssue specifically occurs on macOS · mikecfisher · opened · on Jan 17, 2026 · Issue body actions · Cowork sessions completely fail to work. Every time I try to use Cowork, after about 2-3 minutes of waiting, I get: API Error: Connection error. This happens 100% of the time. I've tried probably 15+ times over the past few days. macOS (Darwin 25.2.0) Claude Desktop - latest version (just updated today) Claude Code SDK 2.1.8 · No VPN running · macOS firewall is off · UniFi router with no special network security configured · Updated Claude Desktop to the latest version - no change ·\n\nMade sure no VPN was running - confirmed · I spent a while digging through the logs and I think I found the actual issue. Looking at claude_vm_node.log, the VM boots up successfully: [VM:start] Step 4/4 complete: connected after 23 polls, 11064ms since boot [VM:start] Installing SDK: subpath=Library/Application Support/Claude/claude-code-vm, version=2.1.8 [VM:start] SDK installed, total startup time: 85430ms · In claude_vm_swift.log: [VM] OAuth token approved successfully [VM] Process spawned: id=5e568266-79f1-4252-ac8a-d2bfd633055c name=busy-wonderful-mayer command=/usr/local/bin/claude · The session audit shows all MCP servers connecting fine: \"mcp_servers\":[ {\"name\":\"Claude in Chrome\",\"status\":\"connected\"}, {\"name\":\"mcp-registry\",\"status\":\"connected\"}, ... {\"name\":\"cowork\",\"status\":\"connected\"} ] After all that succeeds, the actual API call to Anthropic fails: {\"type\":\"assistant\",\"message\":{\"content\":[{\"type\":\"text\",\"text\":\"API Error: Connection error.\"}]},\"error\":\"unknown\"} I ran a\n\nIt looks like the VM's egress traffic goes through Claude Desktop's MITM proxy for security/isolation, but the allowlist that's supposed to permit api.anthropic.com isn't working correctly. The proxy is blocking the exact domain that Cowork needs to function. The rest of the networking works fine - I can see in the logs that it successfully fetches from https://claude.ai/api/organizations/.../dxt/blocklist, so outbound HTTPS works in general. It's specifically api.anthropic.com that's getting blocked. Happy to provide full logs if helpful. The relevant ones are: ... area:corebugSomething isn't workingSomething isn't workinghas reproHas detailed reproduction stepsHas detailed reproduction stepsplatform:macosIssue specifically occurs on macOSIssue specifically occurs on macOS ...",
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
      "title": "[BUG] Cowork stuck on \"Setting up Claude's workspace\" — Windows 11 Home · Issue #36392 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/36392",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Tried: uninstall/reinstall, clear cache, delete VM bundle, remove CoworkVMService via AppxPackage removal. Nothing works. App version: 1.1.7714.0, Windows 11 Home, HypervisorPlatform and VirtualMachinePlatform both Enabled.\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Cowork tab is ...\n\nCowork tab is permanently stuck on \"Setting up Claude's workspace\" on Windows 11 Home. The VM downloads successfully but always times out at the create_vm_config step after exactly 5 minutes with \"Request timed out: configure\". Also seeing a VHDX path mismatch — the VM service looks for files in AppData\\Local\\Packages\\Claude_pzs8sxrjxfjjc\\LocalCache\\Roaming\\Claude\\vm_bundles but the app downloads them to AppData\\Roaming\\Claude\\vm_bundles. Tried: uninstall/reinstall, clear cache, delete VM bundle, remove CoworkVMService via AppxPackage removal. Nothing works. App version: 1.1.7714.0, Windows 11 Home, HypervisorPlatform and VirtualMachinePlatform both Enabled. Cowork should work on Windows 11 Home, or display a clear error message stating it's unsupported rather than hanging indefinitely. [VM:steps] create_vm_config started [VM:start] Startup failed: Error: Request timed out: configure [VM:start] Startup failed: Error: failed to set VHDX path: VHDX file not found: C:\\Users\\xnoha\\AppData\\\n\nWindows 11 Home specifically. HypervisorPlatform and VirtualMachinePlatform both enabled. VM service (CoworkVMService) starts but times out communicating with hypervisor. Possible Win 11 Home Hyper-V limitation. ... area:coworkarea:desktopbugSomething isn't workingSomething isn't workinghas reproHas detailed reproduction stepsHas detailed reproduction stepsplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/36392",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Get started with Cowork | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13345190-get-started-with-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "With the introduction of projects in Cowork, you can organize related tasks into persistent, self-contained workspaces with their own files, links, instructions, and memory, making Cowork more powerful for recurring or long-running work. ... Cowork is a research preview with unique risks due to its agentic nature and internet access. Cowork respects your current network egress permissions. Network egress permissions don&#x27;t apply to the web search tool. Cowork stores conversation history locally on your computer, so is not subject to Anthropic&#x27;s data retention timeframe. Cowork activity is not captured in Audit Logs, Compliance API, or Data Exports. Do not use Cowork for regulated workloads. Please review Use Cowork safely for more information. For important limitations and considerations for Team and Enterprise organizations using Cowork, see Cowork for Team and Enterprise plans.\n\nSpreadsheets and presentations: Cowork can produce spreadsheets and slides that can be further edited with Claude for Excel and Powerpoint. Projects: Group related tasks into separate workspaces with their own files, context, instructions, and memory. See Organize your tasks with projects in Cowork. Mobile access for Pro and Max: Message Claude from your phone and get results delivered back to the same conversation. Claude works on your desktop using your local files and connectors — you just don't have to be sitting in front of it. See Assign tasks to Claude from anywhere in Cowork. Cowork runs directly on your computer, giving Claude access to the files you choose to share. Code runs safely in an isolated space, but Claude can make real changes to your files. ... Analyzes your request and creates a plan. Breaks complex work into subtasks when needed.\n\nThis article explains how to use Cowork, a research preview that brings Claude Code's agentic capabilities to Claude Desktop for knowledge work beyond coding. Cowork is available as a research preview for paid plans (Pro, Max, Team, Enterprise) on: ... Cowork requires the latest version of Claude for Windows. Download or update at claude.com/download. Cowork uses the same agentic architecture that powers Claude Code, now accessible within Claude Desktop and without opening the terminal. Instead of responding to prompts one at a time, Claude can take on complex, multi-step tasks and execute them on your behalf. With Cowork, you can describe an outcome, step away, and come back to finished work—formatted documents, organized files, synthesized research, and more. With scheduled tasks, Claude can complete work for you automatically, which isn't possible in regular chats outside of Cowork.\n\nClaude Desktop app: Cowork requires the desktop app for macOS or Windows and is not available on web or mobile. Paid Claude subscription: This research preview is available to paid Claude plans (Pro, Max, Team, Enterprise) only. Active internet connection: Required throughout the session. Open Claude Desktop. Look for the mode selector that includes \"Chat\" and the Cowork tab. Click the \"Cowork\" tab to switch modes to \"Tasks\". Describe the task you want Claude to complete. Review Claude's approach, then let it run. Note: The Claude Desktop app must remain open while Claude is working. If you close the app, your session will end. ... Progress indicators show what Claude is doing at each step. Transparency: Claude surfaces its reasoning and approach so you can follow along. Steering: You can jump in to course-correct or provide additional direction mid-task.\n\nDeletion protection: When using Cowork, Claude requires your explicit permission before permanently deleting any files. You will see a permission prompt and will need to select \"Allow\" before Claude is allowed to perform deletion tasks. Tasks can run for extended periods depending on complexity. You can monitor progress or step away and return when Claude finishes. You can give Claude standing instructions that apply to every Cowork session. Use this to specify your preferred tone, output format, or background on your role. ... Navigate to Settings > Cowork within Claude Desktop. Click \"Edit\" next to Global instructions. Type your instructions in the text box and click \"Save\": Folder instructions add project-specific context to Cowork when you select a local folder. Claude can also update these on its own during a session. Plugins customize how Claude works for your role, team, and company in Cowork.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13345190-get-started-with-cowork",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Claude Desktop Cowork: Freezing, API 500 errors, and 12GB VM bundle causing instability on macOS 26.3 · Issue #26646 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/26646",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This persists through full reinstallation, reboot, and clearing all cached data. ... Cowork workspace should set up fully, accept tasks, and run without freezing or API errors. Cowork returns the following error, sometimes while the workspace ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Claude Desktop...\n\nFeature flags from the renderer process confirm Cowork VM is active: json\"yukonSilver\": {\"status\": \"supported\"}, \"yukonSilverGems\": {\"status\": \"supported\"} Troubleshooting Already Attempted ✅ Full reinstall of Claude Desktop ✅ System reboot ✅ Cleared ~/Library/Application Support/Claude/local-agent-mode-sessions/ contents ✅ Cleared ~/Library/Application Support/Claude/vm_bundles ✅ Cleared ~/Library/Application Support/Claude/Cache ✅ Cleared ~/Library/Application Support/Claude/Code Cache ✅ Verified no VPN or antivirus interference ✅ Verified 80GB free disk space ❌ Cannot roll back to pre-Feb 16 version (no Time Machine, no old installer available) Related Issues #26302 — Cowork VM boots on every launch even when unused, consuming background resources (same VM behavior, Windows) #22543 — Cowork feature creates 10GB VM bundle that severely degrades performance #23830 — Claude Cowork conflict with macOS 26 (vsock timeout issues) #26087 — Cowork VM Kernel Panic Deadlocks Main Thread Impact\n\nDon't start the Cowork VM unless the user opens a Cowork session — the VM currently boots on every launch even when unused · Investigate the API 500 errors occurring during workspace setup — the request ID is provided above for server-side debugging · Reduce VM bundle size or implement incremental updates rather than re-downloading 12GB on every clean install · Provide a version rollback mechanism — there is currently no way for users to return to a working version when updates introduce regressions · Expected Behavior Cowork workspace should set up fully, accept tasks, and run without freezing or API errors.\n\nClaude Desktop with Cowork has become unusable since approximately February 16, 2026. The app freezes repeatedly, Cowork sessions fail with API 500 errors before the workspace finishes setting up, and the VM bundle immediately balloons to 12GB after a clean install. This persists through full reinstallation, reboot, and clearing all cached data. ... Cowork workspace should set up fully, accept tasks, and run without freezing or API errors. Cowork returns the following error, sometimes while the workspace is still setting up (observed at 85% setup): API Error: 500 {\"type\":\"error\",\"error\":{\"type\":\"api_error\",\"message\":\"Internal server error\"},\"request_id\":\"req_011CYFn7QMyPcrNmWWz9K8GR\"} ... ⚠ This task didn't load properly API Error: 500 {\"type\":\"error\",\"error\":{\"type\":\"api_error\",\"message\":\"Internal server error\"},\"request_id\":\"req_011CYFn7QMyPcrNmWWz9K8GR\"} Immediately after a fresh install and first Cowork launch, the VM bundle grows to 12GB: $ du -sh ~/Library/Application\\ Support/Cl",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/26646",
        "search_provider": "anthropic",
        "age": "February 18, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How To Fix Claude Cowork On Windows: A Complete Troubleshooting Guide (March 2026) - Cybersecurity For Me",
      "url": "https://cybersecurityforme.com/how-to-fix-claude-cowork-on-windows/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "cybersecurityforme.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=cybersecurityforme.com",
        "site_name": "Cybersecurity For Me"
      },
      "is_missing": false,
      "text": "... Verify your subscription plan. Cowork requires a Pro or Max plan. Free and Trial accounts cannot access it—the tab simply won’t appear. Disable any VPN temporarily. VPNs can interfere with regional licensing checks. Turn it off, restart Claude, and check if the Cowork tab appears.\n\nWindows 11 Home: Unclear support status. Hyper-V is not available on Home edition . Some users report Cowork working initially, then breaking after updates. Anthropic has not officially clarified whether Home is supported. Windows 10 Pro: Users report the same “yukonSilver not supported” errors despite Hyper-V being fully enabled. It’s unclear if Windows 10 is officially supported at all. ... Verify your subscription plan. Cowork requires a Pro or Max plan. Free and Trial accounts cannot access it—the tab simply won’t appear. Disable any VPN temporarily. VPNs can interfere with regional licensing checks. Turn it off, restart Claude, and check if the Cowork tab appears. If you installed Claude before February 10, 2026, you likely have the older Squirrel-based package. You might see a banner saying “Cowork requires a newer installation” with a “Reinstall” button that does absolutely nothing when clicked.\n\nNote: Some users report that Cowork was working, then broke after auto-updating to version 1.1.5749 (released March 9, 2026). If this happened to you, you’re waiting for Anthropic to fix the regression. If the workspace starts but can’t connect to Claude’s API (common on Windows 11 Home) : ... Restart your computer and try again. If you get “Access is denied” when trying to remove CoworkVMService: ... This is a known installer bug, the service sometimes becomes impossible to remove even for administrators. After reviewing dozens of GitHub issues from real users, here’s the truth about Cowork on Windows: If you’re on Windows 11 Pro and have enabled all virtualization features but still see errors, you’re likely experiencing a Claude bug, not a configuration problem. The “yukonSilver not supported” error appears to be faulty platform detection within the app itself.\n\nYou’re likely waiting for Anthropic to fix bugs on their end. No amount of BIOS tweaking or PowerShell commands will resolve faulty app-side detection. Submit logs through the app: Settings → Help → Submit Logs · Include GitHub issue numbers in your description: #24918, #25136, #32004, etc. Specify your Windows edition and build (e.g., “Windows 11 Pro 25H2 Build 26200.7462”) Note whether Cowork ever worked and which update broke it · Claude Cowork on Windows launched with tremendous potential but real growing pains. The most common issues like missing tabs, “yukonSilver” errors, and API connection failures which stem from a combination of unclear system requirements, installation upgrade path problems, and app-side detection bugs. I'm Kevin James, and I'm passionate about writing on Security and cybersecurity topics. Here, I'd like to share a bit more about myself.I hold a Bachelor of Science in Cybersecurity from Utica College, New York, which has been the foundation of my career in c\n\nClaude’s Cowork feature launched for Windows on February 10, 2026, promising real-time AI collaboration that can see your screen and interact with applications. But for many Windows users, the reality has been different like missing Cowork tabs, cryptic “yukonSilver not supported” errors, and API connection failures. This guide cuts through the confusion with accurate, up-to-date troubleshooting based on real user experiences from the first month of Windows Cowork. Note: If you are experiencing the specific error “Could not connect to MCP server Claude in Chrome”, See our guide: [Could Not Connect to MCP Server Claude in Chrome: Troubleshooting Guide]. ... Let’s be honest upfront: Cowork on Windows is still quite rough around the edges. The feature relies on complex virtualization technology, and the initial release has encountered significant growing pains.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cybersecurityforme.com/how-to-fix-claude-cowork-on-windows/",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Broken by Default: Claude Cowork on Windows - Jonas Kamsker",
      "url": "https://blog.kamsker.at/blog/cowork-windows-broken/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "kamsker.at",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=kamsker.at",
        "site_name": "Jonas Kamsker"
      },
      "is_missing": false,
      "text": "VPN software, network tunnels, and virtual adapters are the most common reason Windows “loses” NAT rules or DNS configurations for Hyper-V virtual switches. Remember: Cowork’s VM has its own networking stack, completely separate from WSL2 and Docker. When your VPN reconfigures routing tables, it doesn’t know or care that there’s a third VM that also needs internet. Debugging Depth Meter: [████████░░] 8/10 Layer 1: DNS empty on VM adapter - annoying but diagnosable Layer 2: WinNAT missing entirely - invisible unless you know to check Layer 3: VM disk corrupted - produces an error that looks like a JSON bug Bonus: VPN adapters silently antagonizing all of the above · The error messages are the real villain. “API unreachable” sends you down the wrong path entirely - you start checking Anthropic’s status page, your firewall, your proxy settings.\n\nVPN software, network tunnels, and virtual adapters are the most common reason Windows “loses” NAT rules or DNS configurations for Hyper-V virtual switches. Remember: Cowork’s VM has its own networking stack, completely separate from WSL2 and Docker. When your VPN reconfigures routing tables, it doesn’t know or care that there’s a third VM that also needs internet. Debugging Depth Meter: [████████░░] 8/10 Layer 1: DNS empty on VM adapter - annoying but diagnosable Layer 2: WinNAT missing entirely - invisible unless you know to check Layer 3: VM disk corrupted - produces an error that looks like a JSON bug Bonus: VPN adapters silently antagonizing all of the above · The error messages are the real villain. “API unreachable” sends you down the wrong path entirely - you start checking Anthropic’s status page, your firewall, your proxy settings.\n\nAnd that’s the core tension. Cowork is marketed at the people least equipped to debug it when it breaks. The fix is three PowerShell commands, but the path to discovering those three commands requires knowledge that Anthropic’s target audience definitionally does not have. The relevant logs live in %LOCALAPPDATA%\\Packages\\Claude_*\\LocalCache\\Roaming\\Claude\\logs\\ (Microsoft Store install) or %APPDATA%\\Claude\\logs\\ (non-Store install) - specifically cowork_vm_node.log for VM networking status and main.log for the CLI/sandbox errors. If you’re hitting anything like what I described, start there. Why did WinNAT disappear? Best guess: a Windows Update, a VPN install, or a Hyper-V reconfiguration silently cleared it. Windows doesn’t warn you. It just lets NAT rules evaporate like a goldfish releasing a memory. Will this happen again? Probably. WinNAT has the persistence of a New Year’s resolution.\n\nAnd then Cowork looked me dead in the eyes and said: “The Claude API cannot be reached from Claude’s workspace.” · Which is a weird thing to say when I’m literally on the internet right now. Cowork doesn’t fail with one error. It fails with two, and they look like completely different problems. ... Your first instinct: is Anthropic down? You check. There isn’t an outage. You can resolve api.anthropic.com from your terminal. Port 443 is open. Your host machine has internet. Everything is fine. Except nothing is fine. Error 2 (the real one, hidden behind “longer loading”): CLI output was not valid JSON … Output: sandbox-helper: host share not mounted at /mnt/.virtiofs-root/shared: not a mount point · There it is. Buried in the second error message like a confession at the bottom of a Terms of Service. The VM’s filesystem is broken, the CLI process outputs an error string instead of JSON, and Cowork’s parser falls over because it expected structured data and got a cry for help.\n\nAnd here’s the part that really bothers me: Anthropic is positioning Cowork squarely at non-technical users. Knowledge workers. The marketing says “Claude Code power for the rest of your work.” If I - someone who debugs Hyper-V networking as a semi-regular hobby - spent hours in PowerShell diagnosing this, a non-dev user has exactly zero chance. They see “API unreachable,” they Google it, they find nothing useful, and they uninstall. That’s not a speed bump - that’s a product cliff with no guardrail. Here’s the thing the “API unreachable” error doesn’t tell you: Cowork doesn’t run on your machine. Not really. Cowork runs inside a dedicated Linux VM - a full virtual machine running on Hyper-V (Windows’ built-in hypervisor, the same technology that powers WSL2 and Docker Desktop). Under the hood, Cowork talks to Microsoft’s Host Compute Service (HCS) - a low-level API for creating and managing VMs that sits beneath the friendlier tools like Hyper-V Manager.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.kamsker.at/blog/cowork-windows-broken/",
        "search_provider": "anthropic",
        "age": "February 19, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Fix: Claude Cowork Errors - Z Digital Agency",
      "url": "https://www.zdigitalagency.com/fix-claude-cowork-errors/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "zdigitalagency.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=zdigitalagency.com",
        "site_name": "Z Digital Agency"
      },
      "is_missing": false,
      "text": "The VPN TAP adapter can conflict with Cowork’s Hyper-V NAT setup. If you’re experiencing persistent issues, try fully quitting your VPN application (not just disconnecting — close the app entirely).\n\nUnfortunately, changing the startup type to Automatic via PowerShell is blocked by access restrictions on the service. This is a known issue reported on Anthropic’s GitHub (issues #24918, #25241, #27010). Anthropic will likely ship a proper fix in a future update. Until then, restarting CoworkVMService manually is the reliable workaround. Not necessarily. Cowork can work on Windows 11 Home, though Home editions lack some Hyper-V components (like full WinNAT support) that can cause additional issues. If you encounter “Classe non valide” errors when running Get-NetNat, you may be hitting a Home-edition limitation that requires a different workaround or an upgrade to Pro. VPN software can interfere with Cowork’s virtual networking, even when disconnected. The VPN TAP adapter can conflict with Cowork’s Hyper-V NAT setup. If you’re experiencing persistent issues, try fully quitting your VPN application (not just disconnecting — close the app entirely).\n\nClaude Cowork users on Windows 11 (Home and Pro) frequently encounter two errors that block the workspace from starting: ... “Failed to start Claude’s workspace — Can’t reach the Claude API from Claude’s workspace.” ... Both errors appear even when your internet connection works perfectly and regular Claude Chat mode has no issues. The Cowork tab simply refuses to start. Claude Cowork doesn’t run directly on your machine. It runs inside a dedicated Linux virtual machine powered by Hyper-V (or more precisely, Microsoft’s Host Compute Service). This VM is managed by a Windows service called CoworkVMService. Here’s the catch: that service can stop running on its own — after a reboot, a Windows update, a sleep/wake cycle, or seemingly at random. When CoworkVMService is stopped, the Cowork VM can’t boot, the virtual network adapter never gets created, and Claude Desktop shows you cryptic error messages about the API being unreachable.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.zdigitalagency.com/fix-claude-cowork-errors/",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Fix Claude Desktop Cowork And VPN Issue (The vm_bundles Solution) — Full Guide",
      "url": "https://openclaw.hashnode.dev/how-to-fix-claude-desktop-cowork-and-vpn-issue-the-vm-bundles-solution-full",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "hashnode.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=hashnode.dev",
        "site_name": "Hashnode"
      },
      "is_missing": false,
      "text": "# Step 1: Quit Claude Desktop completely # Use Cmd+Q or right-click dock icon → Quit # Verify it closed (check Activity Monitor if unsure) # Step 2: Delete the VM bundle rm -rf ~/Library/Application\\ Support/Claude/vm_bundles # Step 3: Empty ...\n\nHow To Solve the VPN Issue with Claude CoWork. These Are My Steps to Get the CoWork back to work. ... 📖 Read the full article on Medium → — with better formatting, code highlights, and community discussion. Quick note: AI tools assisted with research for this solution and guide. The troubleshooting experience, terminal commands, and production testing are from my actual workflow. Last Tuesday afternoon, I clicked “Set up workspace” in Claude Desktop Cowork. The spinner appeared. I waited. Sixty seconds later: Problem: I was not using a VPN. No Tailscale. No Mullvad. No corporate security software. Direct connection. I did what any engineer does when software lies to them. I reinstalled Claude Desktop. Still broken. Rebooted my Mac. Still broken. Checked every network setting I could find. Still broken. Three hours later, I found the actual fix.\n\n# Step 1: Quit Claude Desktop completely # Use Cmd+Q or right-click dock icon → Quit # Verify it closed (check Activity Monitor if unsure) # Step 2: Delete the VM bundle rm -rf ~/Library/Application\\ Support/Claude/vm_bundles # Step 3: Empty your Trash # This actually frees the disk space # Step 4: Restart your Mac # Full reboot, not just logout # Step 5: Open Claude Desktop and try Cowork # Claude will download a fresh VM bundle ... The rm -rf command removes the directory containing your VM environment. This does NOT affect your Claude chat history (stored separately in a different location). This does NOT affect your workspace files (unless you explicitly moved them inside the VM, which you should not have done). This forces Claude Desktop to download clean VM images from Anthropic’s servers. The download takes 2–5 minutes depending on your internet connection.\n\nSymptom First Try If That Fails “VPN error” (no VPN running) Quit + reboot Delete vm_bundles Works after update, then stops Delete vm_bundles Full cache cleanup Slow workspace performance Delete vm_bundles Check disk space Fresh install fails immediately Check permissions Full cache cleanup ... This works for VM initialization failures. It will not fix API connection issues (different problem). It will not fix MCP server connection issues (different subsystem). If your actual VPN is the problem, you must disable it — there is no workaround. ... GitHub Issue #24070 has the technical deep-dive if you want to understand the kernel-level details. The official troubleshooting gist covers additional edge cases: https://gist.github.com/chillskellingtom/5b810654ad8ee357ec0d226acf2a137f · Claude Desktop logs live at ~/Library/Logs/Claude/ if you need to debug further. Did this fix work for you? What other Cowork initialization issues have you run into?\n\n# Quit Claude Desktop completely # Use Cmd+Q, not just closing the window # Then reboot your Mac # Try Cowork again · When this works: You have stuck helper processes or stale network state. A clean restart clears these. ... When this works: Claude lacks the permissions needed to create or access the VM environment. # Check for tunnel interfaces ifconfig | egrep '^(utun|ppp|ipsec|wg|tun|tap)' # Check for VPN processes ps aux | egrep -i 'warp|mullvad|tailscale|wireguard|openvpn|zscaler' | grep -v egrep · When this works: You actually do have a VPN or network filtering software running. You either did not realize it was active, or you have a “hangover” system extension from previously uninstalled software (Little Snitch is notorious for this). If you see output from either command, disable that software and try Cowork again. If you tried the quick fixes and Cowork is still broken, this is the solution.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://openclaw.hashnode.dev/how-to-fix-claude-desktop-cowork-and-vpn-issue-the-vm-bundles-solution-full",
        "search_provider": "anthropic",
        "age": "February 15, 2026"
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

The user is asking about Cowork being stuck on "Setting up Claude's workspace" while using a VPN on Windows. Let me synthesize what I found.

Key findings:
1. Cowork runs inside a Hyper-V Linux VM on Windows
2. VPNs are a known major issue - they reconfigure routing tables and break the VM's networking
3. The VPN TAP adapter conflicts with Cowork's Hyper-V NAT setup
4. Multiple sources confirm this is a significant problem

The user explicitly says they don't want to close their VPN. Let me search for any workarounds that allow VPN + Cowork.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-26T09:06:44.199866Z",
  "stop_timestamp": "2026-03-26T09:06:44.199866Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01691DYRBygfoL1TxPfRZ4FL",
  "name": "web_search",
  "input": {
    "query": "Cowork Claude VPN workaround split tunnel Windows"
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
  "tool_use_id": "toolu_01691DYRBygfoL1TxPfRZ4FL",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[BUG] Cowork incompatible with VPN - Hyper-V NAT routing prevents VM from reaching Claude API · Issue #25513 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/25513",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "The Hyper-V NAT layer (vEthernet (cowork-vm-nat)) caches routing decisions at VM creation time and does not: Respect VPN split tunnel exclusions Honor Windows routing table entries (even persistent routes) Update when network adapter metrics are changed Refresh when Hyper-V Host Network Service is restarted · Traffic from the VM is routed through the VPN tunnel despite all configuration attempts to exclude it. Extensive Troubleshooting (with VPN vendor support): Working with Windscribe VPN support, the following were tested: ... Mode: Exclusive (bypass VPN for specified apps/domains) Apps excluded: claude.exe, cowork-svc.exe Domains excluded: api.anthropic.com, claude.ai, statsig.anthropic.com, cdn.anthropic.com, assets.anthropic.com Windscribe firewall: Disabled R.O.B.E.R.T. (DNS blocking): Configured to allow Claude domains · Result: VM traffic still routed through VPN tunnel 2.\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Environment: O...\n\n**Proposed Solutions:** **Option 1 (Ideal):** Add External vSwitch Support - Add a Settings option to use External virtual switch instead of NAT - VM would operate on the same network as the host - VPN split tunnel and routing rules would work correctly - Users could enable this for VPN compatibility **Option 2:** VM-Level Routing Configuration - Configure routes inside the Cowork VM itself - Bypass reliance on host NAT translation - Force Claude API traffic through specific gateway **Option 3:** VPN Detection and Guidance - Detect VPN during Cowork startup - Display clear warning about VPN incompatibility - Offer to temporarily disable VPN for the session - Document which VPNs are compatible/incompatible **Option 4:** Documentation - Clearly document VPN limitations - Provide official configuration guidance - Set proper user expectations ### Error Messages/Logs ```shell ...\n\nOS: Windows 10 Claude Desktop: v1.1.2998.0 (Microsoft Store version) VPN: Windscribe (likely affects all VPNs) Cowork VM Network: vEthernet (cowork-vm-nat) using NAT mode ... Cowork's Hyper-V NAT networking layer is fundamentally incompatible with VPN software. The VM cannot reach api.anthropic.com when a VPN is active, forcing users to choose between using Cowork or maintaining VPN protection. ... API Error: Unable to connect to API (ECONNRESET) \"Taking longer than expected to reach the Claude API\" → timeout \"Failed to start Claude's workspace - Can't reach the Claude API from Claude's workspace\" ... ✅ Cowork works perfectly when VPN is disconnected ✅ Regular Chat mode works with VPN connected ✅ Host computer can reach api.anthropic.com with VPN active ... ❌ Cowork VM cannot reach Claude API through the VPN tunnel ❌ Cowork VM cannot reach Claude API even when VPN split tunnel is configured ❌ Cowork VM routing ignores host-level routing table overrides ...\n\nThe Hyper-V NAT layer (vEthernet (cowork-vm-nat)) caches routing decisions at VM creation time and does not: Respect VPN split tunnel exclusions Honor Windows routing table entries (even persistent routes) Update when network adapter metrics are changed Refresh when Hyper-V Host Network Service is restarted · Traffic from the VM is routed through the VPN tunnel despite all configuration attempts to exclude it. Extensive Troubleshooting (with VPN vendor support): Working with Windscribe VPN support, the following were tested: ... Mode: Exclusive (bypass VPN for specified apps/domains) Apps excluded: claude.exe, cowork-svc.exe Domains excluded: api.anthropic.com, claude.ai, statsig.anthropic.com, cdn.anthropic.com, assets.anthropic.com Windscribe firewall: Disabled R.O.B.E.R.T. (DNS blocking): Configured to allow Claude domains · Result: VM traffic still routed through VPN tunnel 2.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/25513",
        "search_provider": "anthropic",
        "age": "February 13, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Fixing Claude Cowork's Network Conflict on Windows",
      "url": "https://www.elliotsegler.com/fixing-claude-coworks-network-conflict-on-windows.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "elliotsegler.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=elliotsegler.com",
        "site_name": "Elliot Segler"
      },
      "is_missing": false,
      "text": "Now we need to stop Cowork and remove the conflicting network. This is the nuclear option, but it&#x27;s necessary. # Stop all Claude processes Stop-Process -Name &quot;cowork-svc&quot; -Force -ErrorAction SilentlyContinue Stop-Process -Name &quot;Claude&quot; -Force ...\n\nAssuming you followed all the steps and didn't hit any weird edge cases, Cowork should now be functional with internet connectivity. The VM will use your new subnet instead of the conflicting 172.16.0.0/24 range. ... Package updates: When Claude updates, you may need to repeat steps 5-6 as the WindowsApps folder will be replaced with a new version · MSIX integrity: Modifying the WindowsApps package breaks the package signature, but Windows still allows the app to run since you have ownership · Subnet selection: Make sure to choose a subnet that doesn't conflict with any of your networks (local, VPN, etc.) If Cowork still fails to start, check the Event Viewer for Hyper-V-Compute-Operational logs, verify the network exists with Get-HnsNetwork, and make sure the VHDX files are in the right places. Hopefully this helps some people out. If you're running into this issue, you're probably on a corporate network with a VPN, and you're definitely not alone.\n\nNow we need to stop Cowork and remove the conflicting network. This is the nuclear option, but it's necessary. # Stop all Claude processes Stop-Process -Name \"cowork-svc\" -Force -ErrorAction SilentlyContinue Stop-Process -Name \"Claude\" -Force -ErrorAction SilentlyContinue # Kill the Cowork VM hcsdiag kill cowork-vm # Wait for cleanup Start-Sleep -Seconds 3 # Get the conflicting network ID $broken_cowork_network = Get-HnsNetwork | Where-Object {$_.Name -eq \"cowork-vm-nat\"} # Remove it (replace with your actual ID) Remove-HnsNetwork -InputObjects $broken_cowork_network · Here's where we create the replacement network. I'm using 172.24.0.0/24, but you can use any subnet that doesn't conflict with your network. Common safe options include 10.200.0.0/24 or 192.168.200.0/24. Your mileage may vary. For those less familiar with addressing, we usually set the gateway address to the first address of the subnet.\n\nRestart the claude app (and/or the Claude service, which is actually cowork-svc.exe) and you'll see the VM start, but fail again. Have another look at the logs and you'll probably see it complain about failing to copy smol-bin.vhdx. And this is where things get interesting. The Cowork service expects to find smol-bin.x64.vhdx in a specific location within the MSIX package, but the file structure doesn't match. I noticed on github, other users complaining of issues related to EFS encryption. In my case, the source was not EFS encrypted. It was pretty easy to check... PS C:\\Users\\elliotsegler> cipher.exe /c \"C:\\Program Files\\WindowsApps\\Claude_1.1.3189.0_x64__pzs8sxrjxfjjc\\app\\resources\\smol-bin.x64.vhdx\" Listing C:\\Program Files\\WindowsApps\\Claude_1.1.3189.0_x64__pzs8sxrjxfjjc\\app\\resources\\ New files added to this directory will not be encrypted. U smol-bin.x64.vhdx ·\n\nThe U means it's not encrypted. That's good, but issue for me is Cowork expects it elsewhere. Also, an easy fix. We need to create the expected directory structure and copy the file. First, take ownership of the WindowsApps package (this requires an elevated PowerShell): # Take ownership of the resources folder takeown /f \"C:\\Program Files\\WindowsApps\\Claude_1.1.3189.0_x64__pzs8sxrjxfjjc\\app\\resources\" /r /d y # Grant yourself full control icacls \"C:\\Program Files\\WindowsApps\\Claude_1.1.3189.0_x64__pzs8sxrjxfjjc\\app\\resources\" /grant \"${env:USERNAME}:F\" /t · Note: The path Claude_1.1.3189.0_x64__pzs8sxrjxfjjc is version-specific. You'll need to replace this with your actual installed version path. ... $basePath = \"C:\\Program Files\\WindowsApps\\Claude_1.1.3189.0_x64__pzs8sxrjxfjjc\\app\\resources\" # Create vm_bundles directory New-Item -ItemType Directory -Path \"$basePath\\vm_bundles\\claudevm.bundle\" -Force # Take ownership and grant permissions takeown /f \"$basePath\\vm_bundles\" /r /d y ica",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.elliotsegler.com/fixing-claude-coworks-network-conflict-on-windows.html",
        "search_provider": "anthropic",
        "age": "February 16, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork FAQ: Pricing, Security, Limits & More",
      "url": "https://cowork.bruniaux.com/faq/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bruniaux.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bruniaux.com",
        "site_name": "Claude Cowork Guide"
      },
      "is_missing": false,
      "text": "This is the #1 reported issue. Disconnect VPN completely before using Cowork. Split-tunnel configurations may also cause problems. ... There&#x27;s no official security documentation yet (research preview).\n\nNot yet (January 2026). macOS only. Windows is on Anthropic's roadmap but has no ETA. Linux has no official announcement. Use Claude Code for Linux agentic capabilities. ... No. VPN software creates routing conflicts with Cowork's internal VM networking. This is the #1 reported issue. Disconnect VPN completely before using Cowork. Split-tunnel configurations may also cause problems. ... There's no official security documentation yet (research preview). Best practices: use a dedicated workspace folder, review every execution plan before approving, keep credentials out of the workspace, verify file sources. Your files are sent to Anthropic servers for processing — treat the workspace accordingly. ... Yes! Cowork can create Excel files with working formulas, multiple sheets, and formatting. Specify your regional setting (US comma , vs EU semicolon ;) in your prompt to avoid formula errors.\n\nFree, open-source guide for Claude Cowork. 28 workflows, 70 prompts, security best practices. Master desktop AI automation.\n\n13 answers about Claude Cowork: pricing, platform compatibility, security, usage limits, Excel support, VPN issues and more. From real daily use since launch.\n\n70 ready-to-use prompts, 28 workflows, security guide. Master Claude's desktop AI assistant.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cowork.bruniaux.com/faq/",
        "search_provider": "anthropic",
        "age": "January 1, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Broken by Default: Claude Cowork on Windows - Jonas Kamsker",
      "url": "https://blog.kamsker.at/blog/cowork-windows-broken/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "kamsker.at",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=kamsker.at",
        "site_name": "Jonas Kamsker"
      },
      "is_missing": false,
      "text": "$svc=&#x27;CoworkVMService&#x27; # Auto-detect bundle path (Store install uses a versioned package folder) $bundle = (Get-Item &quot;$env:LOCALAPPDATA\\Packages\\Claude_*\\LocalCache\\Roaming\\Claude\\vm_bundles\\claudevm.bundle&quot; -ErrorAction SilentlyContinue).FullName if (-not $bundle) { $bundle = &quot;$env:APPDATA\\Claude\\vm_bundles\\claudevm.bundle&quot; } $session=Join-Path $bundle &#x27;sessiondata.vhdx&#x27; $bak=&quot;$session.bak.$(Get-Date -Format &#x27;yyyyMMdd-HHmmss&#x27;)&quot; Stop-Service $svc -Force Rename-Item -Path $session -NewName (Split-Path $bak -Leaf) Start-Service $svc · In my case, Cowork created a fresh sessiondata.vhdx on next start. The old one sits there timestamped, waiting for the forensic investigation you’ll never do. If your install never creates sessiondata.vhdx at all - or it’s still broken after this - you’re likely hitting a different setup bug and may need a full reinstall. Restart everything properly - and I do mean properly: Quit Claude Desktop from the system tray (not just closing the window - actually Ex\n\nClaude Cowork is broken by default on Windows. This is my journey figuring out why - and how to fix it. ... I’ll be honest: the idea of Cowork excited me. An AI agent that lives on my desktop, manages files, automates tasks - the kind of thing that makes you feel like you’re living in the future. Point it at a workspace, give it a job, go make coffee. So I installed it on Windows. Clicked the button. Waited. And then Cowork looked me dead in the eyes and said: “The Claude API cannot be reached from Claude’s workspace.” · Which is a weird thing to say when I’m literally on the internet right now. Cowork doesn’t fail with one error. It fails with two, and they look like completely different problems. ... Your first instinct: is Anthropic down? You check. There isn’t an outage. You can resolve api.anthropic.com from your terminal. Port 443 is open.\n\nThis is a known issue, by the way. Multiple users have reported it. The installer creates the virtual network via HNS but doesn’t reliably create the corresponding WinNAT rule that gives that network internet access. And if you’re running VPN software, it gets worse - VPNs are fundamentally incompatible with Cowork’s NAT setup because VPN split-tunnel rules don’t apply to NAT’d VM traffic. The VPN doesn’t know Cowork’s VM exists. It can’t route for a tenant it’s never met. Even if networking were perfect, Cowork still wouldn’t have started. Remember sessiondata.vhdx? The VM’s persistent state disk? It was in an inconsistent state, which meant the VirtioFS host share - the file sharing bridge between your Windows folders and the VM - failed to mount. The sandbox helper process tried to set up the environment, discovered the mount point was broken, and printed an error to stdout.\n\n$svc='CoworkVMService' # Auto-detect bundle path (Store install uses a versioned package folder) $bundle = (Get-Item \"$env:LOCALAPPDATA\\Packages\\Claude_*\\LocalCache\\Roaming\\Claude\\vm_bundles\\claudevm.bundle\" -ErrorAction SilentlyContinue).FullName if (-not $bundle) { $bundle = \"$env:APPDATA\\Claude\\vm_bundles\\claudevm.bundle\" } $session=Join-Path $bundle 'sessiondata.vhdx' $bak=\"$session.bak.$(Get-Date -Format 'yyyyMMdd-HHmmss')\" Stop-Service $svc -Force Rename-Item -Path $session -NewName (Split-Path $bak -Leaf) Start-Service $svc · In my case, Cowork created a fresh sessiondata.vhdx on next start. The old one sits there timestamped, waiting for the forensic investigation you’ll never do. If your install never creates sessiondata.vhdx at all - or it’s still broken after this - you’re likely hitting a different setup bug and may need a full reinstall. Restart everything properly - and I do mean properly: Quit Claude Desktop from the system tray (not just closing the window - actually Ex\n\nVPN software, network tunnels, and virtual adapters are the most common reason Windows “loses” NAT rules or DNS configurations for Hyper-V virtual switches. Remember: Cowork’s VM has its own networking stack, completely separate from WSL2 and Docker. When your VPN reconfigures routing tables, it doesn’t know or care that there’s a third VM that also needs internet. Debugging Depth Meter: [████████░░] 8/10 Layer 1: DNS empty on VM adapter - annoying but diagnosable Layer 2: WinNAT missing entirely - invisible unless you know to check Layer 3: VM disk corrupted - produces an error that looks like a JSON bug Bonus: VPN adapters silently antagonizing all of the above · The error messages are the real villain. “API unreachable” sends you down the wrong path entirely - you start checking Anthropic’s status page, your firewall, your proxy settings.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.kamsker.at/blog/cowork-windows-broken/",
        "search_provider": "anthropic",
        "age": "February 19, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Cowork Troubleshooting Guide | Cowork Guide",
      "url": "https://cowork.bruniaux.com/guide/04-troubleshooting/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bruniaux.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bruniaux.com",
        "site_name": "Cowork Guide"
      },
      "is_missing": false,
      "text": "If you experience VM connection timeouts: Disconnect VPN before launching Cowork · If using corporate VPN, check if split tunneling is available · Windows-specific: Some VPN clients (e.g., Cisco AnyConnect) may require a full restart after disconnecting · Section titled “General ...\n\nAdd Claude Desktop to Exclusions if needed (Settings → Virus & threat protection → Manage settings → Exclusions) Section titled “VPN on Windows” · The same VPN routing conflict applies on Windows. If you experience VM connection timeouts: Disconnect VPN before launching Cowork · If using corporate VPN, check if split tunneling is available · Windows-specific: Some VPN clients (e.g., Cisco AnyConnect) may require a full restart after disconnecting · Section titled “General Troubleshooting” · Section titled “Cowork Doesn’t Understand Request” · Symptoms: Wrong interpretation of task · Unexpected plan proposed · Asks clarifying questions that seem off · Solutions: Be more explicit in your request · Use the prompt patterns from Getting Started · Break complex tasks into steps · Provide examples of expected output · Better Prompt Pattern: Task: [clear single objective] Input: [exact folder/files] Output: [exact format and location] Constraints: [any limitations] Example: [what success looks\n\nRoot Cause: VPN software creates routing conflicts with Cowork’s internal VM networking. This is the #1 reported issue on r/ClaudeAI. ... Why It Happens: Cowork runs in a sandboxed virtual machine. VPNs intercept and reroute network traffic at the system level, breaking the host↔VM communication channel. There’s no fix that keeps VPN active. ... macOS: Try in Safe Mode (hold Shift during boot). Windows: Try clean boot (msconfig → Selective startup) ... Open System Settings → Privacy & Security (macOS 13+) Note: On macOS 12 and earlier, use System Preferences → Security & Privacy ... Why It Happens: System overhead (tool definitions, safety instructions, execution logs) consumes ~25-35K tokens before your task even starts. The effective usable context is closer to 165K, not 200K. ... Important: Cowork sessions require the desktop app to remain open.\n\nAdd Claude Desktop to Exclusions if needed (Settings → Virus & threat protection → Manage settings → Exclusions) ... The same VPN routing conflict applies on Windows. If you experience VM connection timeouts: ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cowork.bruniaux.com/guide/04-troubleshooting/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How To Fix Claude Cowork On Windows: A Complete Troubleshooting Guide (March 2026) - Cybersecurity For Me",
      "url": "https://cybersecurityforme.com/how-to-fix-claude-cowork-on-windows/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "cybersecurityforme.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=cybersecurityforme.com",
        "site_name": "Cybersecurity For Me"
      },
      "is_missing": false,
      "text": "Windows 10 Pro: Users report the ... requires a Pro or Max plan. Free and Trial accounts cannot access it—the tab simply won’t appear. Disable any VPN temporarily....\n\nFor developers concerned about secure AI-assisted workflows, our companion guide on Claude Code Security covers enterprise safety measures. Before diving into solutions, diagnose exactly what’s going wrong. Cowork problems on Windows fall into five distinct categories: Take a moment to match your experience, it will point you toward the most relevant solutions. ... Windows 11 Home: Unclear support status. Hyper-V is not available on Home edition . Some users report Cowork working initially, then breaking after updates. Anthropic has not officially clarified whether Home is supported. Windows 10 Pro: Users report the same “yukonSilver not supported” errors despite Hyper-V being fully enabled. It’s unclear if Windows 10 is officially supported at all. ... Verify your subscription plan. Cowork requires a Pro or Max plan. Free and Trial accounts cannot access it—the tab simply won’t appear. Disable any VPN temporarily.\n\nVPNs can interfere with regional licensing checks. Turn it off, restart Claude, and check if the Cowork tab appears. If you installed Claude before February 10, 2026, you likely have the older Squirrel-based package. You might see a banner saying “Cowork requires a newer installation” with a “Reinstall” button that does absolutely nothing when clicked. The “Check for Updates” feature falsely reports you have the latest version. ... Warning: This process may disrupt local MCP server configurations and desktop extensions. Back up any custom configurations first. If you’re still stuck, a complete cleanup often helps: Uninstall Claude Desktop normally, then open PowerShell as Administrator and run: ... Get-ChildItem \"$env:LOCALAPPDATA\\Packages\\\" -Filter \"Claude_*\" | ForEach-Object { Remove-Item -Recurse -Force \"$($_.FullName)\\LocalCache\\Roaming\\Claude\" -ErrorAction SilentlyContinue } ...\n\nClaude’s Cowork feature launched for Windows on February 10, 2026, promising real-time AI collaboration that can see your screen and interact with applications. But for many Windows users, the reality has been different like missing Cowork tabs, cryptic “yukonSilver not supported” errors, and API connection failures. This guide cuts through the confusion with accurate, up-to-date troubleshooting based on real user experiences from the first month of Windows Cowork. Note: If you are experiencing the specific error “Could not connect to MCP server Claude in Chrome”, See our guide: [Could Not Connect to MCP Server Claude in Chrome: Troubleshooting Guide]. ... Let’s be honest upfront: Cowork on Windows is still quite rough around the edges. The feature relies on complex virtualization technology, and the initial release has encountered significant growing pains.\n\nIf you see this, Claude’s internal platform detection is incorrectly marking your system as incompatible. This is a known bug—multiple GitHub issues track it (#25136, #32004, #32837). ... Note: Some users report that Cowork was working, then broke after auto-updating to version 1.1.5749 (released March 9, 2026). If this happened to you, you’re waiting for Anthropic to fix the regression. If the workspace starts but can’t connect to Claude’s API (common on Windows 11 Home) : ... Restart your computer and try again. If you get “Access is denied” when trying to remove CoworkVMService: ... This is a known installer bug, the service sometimes becomes impossible to remove even for administrators. After reviewing dozens of GitHub issues from real users, here’s the truth about Cowork on Windows: If you’re on Windows 11 Pro and have enabled all virtualization features but still see errors, you’re likely experiencing a Claude bug, not a configuration problem.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cybersecurityforme.com/how-to-fix-claude-cowork-on-windows/",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork – macOS workspace init troubleshooting",
      "url": "https://gist.github.com/chillskellingtom/5b810654ad8ee357ec0d226acf2a137f",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "... Uninstall Claude Desktop, then delete remaining app data folders (paths vary; typically under %AppData% and %LocalAppData%), reboot, reinstall. ... If you’re using a package build, purge config/cache directories for that app, reboot, reinstall.\n\nGet-NetAdapterBinding -Name \"*\" | ? { $.Enabled -eq $true -and $.ComponentID -match \"wfplwfs|ndis|vpn|filter\" } netsh winhttp show proxy · If you have corporate security tooling, test by temporarily disabling its network protection component (if permitted), then retry Cowork. Linux: network managers / firewalls / eBPF filters ... sudo ufw status || true sudo nft list ruleset 2>/dev/null | head -n 50 || true sudo iptables -S 2>/dev/null | head -n 50 || true · If you’re using a corporate agent (Zscaler/etc.), test with it disabled (if permitted), then retry Cowork. ... Working theory: Cowork’s workspace networking can be sensitive to tunnels and network-stack modifications. Split tunnelling often doesn’t help if the tunnel mechanism still hooks the stack. ... scutil --nc list ifconfig | egrep '^(utun|ppp|ipsec|wg|tun|tap)' ps aux | egrep -i 'warp|mullvad|tailscale|wireguard|openvpn|zscaler|cisco|globalprotect|forti' | grep -v egrep ·\n\nClean test: 1. Stop the VPN service/app (e.g. sudo systemctl stop tailscaled). 2. Bring tunnel interfaces down if needed. 3. Retry Cowork. ... Even without a classic VPN, packet filtering can break workspace connectivity. ... Reboot → retry Cowork. Re-enable later: ... Get-NetFirewallProfile # To disable temporarily (use caution): # Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled False · If it fixes Cowork, re-enable and add precise allow rules for Claude/related helper processes instead of leaving it off. ... Or test by flushing a specific ruleset (only if you know what you’re doing). Prefer a reversible “disable” over “delete everything”. ... If workspace artefacts are wedged, clear them. 5.1 Delete vm_bundles (recommended first) 1. Quit Claude Desktop completely. 2. Finder → Cmd + Shift + G → go to: • ~/Library/Application Support/Claude/ 3.\n\nA step-by-step troubleshooting ladder for Claude Desktop → Cowork workspace initialisation failures (timeouts, ‘API Error: Connection error’, ‘VPN must be disabled’, ‘network not provided to workspace’, etc.). Start at the top. Don’t skip ahead unless you’re already confident. ... ✅ Root cause: Little Snitch network extension was still enabled/active after uninstall (a ‘hangover’ system extension). Disabling/removing that network extension resolved Cowork. Quit Claude Desktop completely (not just close the window). Reboot the machine. Try Cowork again. Why: clears stuck helper processes, stale network state, and half-dead background components. This is the #1 ‘it looks uninstalled but it’s still intercepting traffic’ class of bug. ... Disable suspicious items: • System Settings → General → Login Items & Extensions → Network Extensions ·\n\nClaude Cowork – macOS workspace init troubleshooting - Claude Cowork – macOS workspace init troubleshooting.md",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://gist.github.com/chillskellingtom/5b810654ad8ee357ec0d226acf2a137f",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Fix Claude Desktop Cowork And VPN Issue (The vm_bundles Solution) — Full Guide",
      "url": "https://openclaw.hashnode.dev/how-to-fix-claude-desktop-cowork-and-vpn-issue-the-vm-bundles-solution-full",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "hashnode.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=hashnode.dev",
        "site_name": "Hashnode"
      },
      "is_missing": false,
      "text": "If your actual VPN is the problem, you must disable it — there is no workaround. ... GitHub Issue #24070 has the technical deep-dive if you want to understand the kernel-level details.\n\nHow To Solve the VPN Issue with Claude CoWork. These Are My Steps to Get the CoWork back to work. ... 📖 Read the full article on Medium → — with better formatting, code highlights, and community discussion. Quick note: AI tools assisted with research for this solution and guide. The troubleshooting experience, terminal commands, and production testing are from my actual workflow. Last Tuesday afternoon, I clicked “Set up workspace” in Claude Desktop Cowork. The spinner appeared. I waited. Sixty seconds later: Problem: I was not using a VPN. No Tailscale. No Mullvad. No corporate security software. Direct connection. I did what any engineer does when software lies to them. I reinstalled Claude Desktop. Still broken. Rebooted my Mac. Still broken. Checked every network setting I could find. Still broken. Three hours later, I found the actual fix.\n\n# Quit Claude Desktop completely # Use Cmd+Q, not just closing the window # Then reboot your Mac # Try Cowork again · When this works: You have stuck helper processes or stale network state. A clean restart clears these. ... When this works: Claude lacks the permissions needed to create or access the VM environment. # Check for tunnel interfaces ifconfig | egrep '^(utun|ppp|ipsec|wg|tun|tap)' # Check for VPN processes ps aux | egrep -i 'warp|mullvad|tailscale|wireguard|openvpn|zscaler' | grep -v egrep · When this works: You actually do have a VPN or network filtering software running. You either did not realize it was active, or you have a “hangover” system extension from previously uninstalled software (Little Snitch is notorious for this). If you see output from either command, disable that software and try Cowork again. If you tried the quick fixes and Cowork is still broken, this is the solution.\n\nThis works for VM initialization failures. It will not fix API connection issues (different problem). It will not fix MCP server connection issues (different subsystem). If your actual VPN is the problem, you must disable it — there is no workaround. ... GitHub Issue #24070 has the technical deep-dive if you want to understand the kernel-level details. The official troubleshooting gist covers additional edge cases: https://gist.github.com/chillskellingtom/5b810654ad8ee357ec0d226acf2a137f · Claude Desktop logs live at ~/Library/Logs/Claude/ if you need to debug further. Did this fix work for you? What other Cowork initialization issues have you run into? Drop your experience in the comments — I am tracking patterns to document other edge cases. ✨ Thanks for reading! If you want more practical insights on AI development tools and engineering systems, hit subscribe to stay updated.\n\nThis is non-obvious. Most software reinstalls fix corruption issues. Claude Desktop explicitly preserves VM bundles across reinstalls — probably for performance reasons, but it makes troubleshooting harder. There is no UI option to reset the workspace. You must use the terminal. For non-technical users, this is a significant barrier. The required download is 10GB. On slow connections, this is painful. The “VPN error” is a detection heuristic, not a diagnostic tool. If it sees any tunnel interface, it assumes VPN. But tunnel interfaces exist for many reasons (Tailscale, Docker, Parallels, etc.). The error message should say “VM initialization failed” and suggest vm_bundles cleanup. VM bundles persist across reinstalls by design. This is probably correct behavior for normal operation, but it breaks the mental model users have for “reinstall fixes things.” ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://openclaw.hashnode.dev/how-to-fix-claude-desktop-cowork-and-vpn-issue-the-vm-bundles-solution-full",
        "search_provider": "anthropic",
        "age": "February 15, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Fix: Claude Cowork Errors - Z Digital Agency",
      "url": "https://www.zdigitalagency.com/fix-claude-cowork-errors/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "zdigitalagency.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=zdigitalagency.com",
        "site_name": "Z Digital Agency"
      },
      "is_missing": false,
      "text": "This is a known issue reported on Anthropic’s GitHub (issues #24918, #25241, #27010). Anthropic will likely ship a proper fix in a future update. Until then, restarting CoworkVMService manually is the reliable workaround. Not necessarily.\n\nThis means the service doesn’t start on boot — it relies on Claude Desktop to trigger it. When something interrupts that handshake (a crash, a Windows update, a wake from sleep), the service stays stopped and Cowork breaks. Unfortunately, changing the startup type to Automatic via PowerShell is blocked by access restrictions on the service. This is a known issue reported on Anthropic’s GitHub (issues #24918, #25241, #27010). Anthropic will likely ship a proper fix in a future update. Until then, restarting CoworkVMService manually is the reliable workaround. Not necessarily. Cowork can work on Windows 11 Home, though Home editions lack some Hyper-V components (like full WinNAT support) that can cause additional issues. If you encounter “Classe non valide” errors when running Get-NetNat, you may be hitting a Home-edition limitation that requires a different workaround or an upgrade to Pro. VPN software can interfere with Cowork’s virtual networking, even when disconnected.\n\nIf you’ve just opened Claude Desktop on Windows 11 and ran into one of these errors in the Cowork tab, you’re not alone — and the fix is simpler than you think. Claude Cowork users on Windows 11 (Home and Pro) frequently encounter two errors that block the workspace from starting: ... “Failed to start Claude’s workspace — Can’t reach the Claude API from Claude’s workspace.” ... Both errors appear even when your internet connection works perfectly and regular Claude Chat mode has no issues. The Cowork tab simply refuses to start. Claude Cowork doesn’t run directly on your machine. It runs inside a dedicated Linux virtual machine powered by Hyper-V (or more precisely, Microsoft’s Host Compute Service). This VM is managed by a Windows service called CoworkVMService. Here’s the catch: that service can stop running on its own — after a reboot, a Windows update, a sleep/wake cycle, or seemingly at random.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.zdigitalagency.com/fix-claude-cowork-errors/",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-cowork-vpn-fix/README.md at main · vec715/claude-cowork-vpn-fix",
      "url": "https://github.com/vec715/claude-cowork-vpn-fix/blob/main/README.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "# Check your host&#x27;s public IP curl -s ifconfig.me # Ask Cowork to run the same command # Both IPs should match ... nat on utun4 — Masquerades VM traffic (192.168.64.0/24) through the VPN interface so it exits via the VPN tunnel instead of the regular network. scrub max-mss 1300 — Clamps TCP MSS to prevent packets larger than the VPN tunnel can handle. Without this, large packets get fragmented or dropped, causing connections to reset.\n\nRoute Claude Cowork VM traffic through host VPN on macOS. Fixes slow connections and timeouts caused by MTU mismatch with VPN tunnels. - vec715/claude-cowork-vpn-fix\n\n# Check your host's public IP curl -s ifconfig.me # Ask Cowork to run the same command # Both IPs should match ... nat on utun4 — Masquerades VM traffic (192.168.64.0/24) through the VPN interface so it exits via the VPN tunnel instead of the regular network. scrub max-mss 1300 — Clamps TCP MSS to prevent packets larger than the VPN tunnel can handle. Without this, large packets get fragmented or dropped, causing connections to reset.\n\nClaude Cowork runs in a Linux VM using Apple's Virtualization.framework. By default, the VM's network traffic bypasses your VPN, even when VPN is connected on the host. Even worse: if traffic does route through the VPN, there's an MTU mismatch (VM uses 1500, VPN tunnel is ~1376) causing packets to drop and connections to fail silently. ... # 1. Find your VPN interface (look for one with inet 10.x.x.x) ifconfig | grep -A2 \"^utun\" # 2. Apply fix (replace utun4 with yours) sudo pfctl -a com.apple/vm-vpn-nat -f - <<'EOF' scrub on bridge100 max-mss 1300 nat on utun4 from 192.168.64.0/24 to any -> (utun4) EOF # 3. Verify sudo pfctl -a com.apple/vm-vpn-nat -s all · This fix is temporary and won't survive a reboot. See below for persistent setup. sudo tee /etc/pf.anchors/vm-vpn-nat <<'EOF' scrub on bridge100 max-mss 1300 nat on utun4 from 192.168.64.0/24 to any -> (utun4) EOF ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/vec715/claude-cowork-vpn-fix/blob/main/README.md",
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

Now I have a clear picture. Let me summarize the situation for the user:

1. The root cause is well-documented: Cowork runs inside a Hyper-V Linux VM on Windows. VPNs reconfigure routing tables and break the VM's NAT networking.
2. On Windows specifically, this is essentially unsolvable while keeping VPN active - even split tunneling doesn't work because the Hyper-V NAT layer doesn't respect VPN split tunnel exclusions.
3. There's a macOS workaround using pfctl NAT rules, but nothing equivalent for Windows.
4. One advanced workaround exists: manually recreating the Cowork VM network with a non-conflicting subnet (from elliotsegler.com), but this is very hacky and may break on updates.


5. The bottom line is that Windows + VPN is a known fundamental incompatibility with no reliable solution currently available.

</details>

Reid, unfortunately this is a well-documented and currently unresolved incompatibility. Here's what's going on:

**The root cause (verified fact):**
Cowork runs inside a dedicated Linux VM on Hyper-V. VPN software, network tunnels, and virtual adapters are the most common reason Windows "loses" NAT rules or DNS configurations for Hyper-V virtual switches. When your VPN reconfigures routing tables, it doesn't know or care that there's a third VM that also needs internet.

**Why split tunneling doesn't help either:**
A detailed bug report (GitHub issue [#25513](https://github.com/anthropics/claude-code/issues/25513)) documents extensive testing with Windscribe VPN support. The Hyper-V NAT layer caches routing decisions at VM creation time and does not respect VPN split tunnel exclusions, honor Windows routing table entries, or update when network adapter metrics are changed. Traffic from the VM is routed through the VPN tunnel despite all configuration attempts to exclude it. Even with app exclusions for `claude.exe` and domain exclusions for `api.anthropic.com`, VM traffic was still routed through the VPN tunnel.

**Bottom line:**
If your actual VPN is the problem, you must disable it — there is no workaround. This is stated across multiple independent sources. VPNs intercept and reroute network traffic at the system level, breaking the host-to-VM communication channel.

**One advanced (fragile) workaround exists** — from [Elliot Segler's blog](https://www.elliotsegler.com/fixing-claude-coworks-network-conflict-on-windows.html): manually removing the conflicting `cowork-vm-nat` network via PowerShell and recreating it with a subnet that doesn't conflict with your VPN range (e.g., `10.200.0.0/24` instead of the default `172.16.0.0/24`). However, when Claude updates, you may need to repeat the steps as the WindowsApps folder will be replaced, and modifying the package breaks the MSIX signature. This requires elevated PowerShell and familiarity with Hyper-V networking — and success depends on your specific VPN's behavior.

There's also a macOS-specific `pfctl` NAT workaround on [GitHub](https://github.com/vec715/claude-cowork-vpn-fix), but nothing equivalent exists for Windows in a clean way.

**What you can realistically do:**

If you absolutely need both VPN and Cowork simultaneously, your best bet is to try the subnet-reconfiguration approach from Segler's guide, choosing a subnet that doesn't overlap with your VPN's address range. But I want to be honest — this is hacky, may break on updates, and isn't guaranteed to work with every VPN. Anthropic has acknowledged this class of issue but hasn't shipped a fix yet.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d2965-2fcf-7284-9c4b-b66d4236a2ff",
  "updated_at": "2026-03-26T09:07:11.511613Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d2965-2fcf-79e5-b9f4-2e544953f07b"
}
```

</details>

### 3. human — 2026-03-26T09:09:56.365844Z

How long will it be fixed? Can you estimate?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d2968-4a1f-73da-89c1-3d683c03a4ba",
  "updated_at": "2026-03-26T09:09:56.365844Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d2965-2fcf-7284-9c4b-b66d4236a2ff"
}
```

</details>

### 4. assistant — 2026-03-26T09:10:19.752442Z

<details>
<summary>Thinking (verbatim)</summary>

The user is asking me to estimate when Anthropic will fix the VPN+Cowork incompatibility on Windows. Let me search for any recent updates or roadmap information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-26T09:10:02.124534Z",
  "stop_timestamp": "2026-03-26T09:10:02.124534Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LgHeGDGyxAatbpHUdPpv1p",
  "name": "web_search",
  "input": {
    "query": "Anthropic Cowork VPN fix roadmap 2026"
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
  "tool_use_id": "toolu_01LgHeGDGyxAatbpHUdPpv1p",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Cowork FAQ: Pricing, Security, Limits & More",
      "url": "https://cowork.bruniaux.com/faq/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bruniaux.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bruniaux.com",
        "site_name": "Claude Cowork Guide"
      },
      "is_missing": false,
      "text": "Max tier: 5x-20x more. File processing consumes tokens rapidly — a single large PDF can cost 10+ messages. ... Not yet (January 2026). macOS only. Windows is on Anthropic&#x27;s roadmap but has no ETA. Linux has no official announcement.\n\nFree, open-source guide for Claude Cowork. 28 workflows, 70 prompts, security best practices. Master desktop AI automation.\n\n13 answers about Claude Cowork: pricing, platform compatibility, security, usage limits, Excel support, VPN issues and more. From real daily use since launch.\n\n70 ready-to-use prompts, 28 workflows, security guide. Master Claude's desktop AI assistant.\n\nNo, this is exploratory research. Cowork is brand new (launched January 2026). This guide reflects personal experimentation and current understanding — both will evolve rapidly. Not affiliated with Anthropic. For official information, visit anthropic.com. ... Florian Bruniaux, a developer experimenting with Cowork since its recent launch. This is a living document — learning in real-time and documenting findings as they evolve. Feedback, corrections, and reality checks are essential! ... Yes! The guide repository is open-source. Found an error? Have a better prompt? Contributions are welcome on GitHub.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cowork.bruniaux.com/faq/",
        "search_provider": "anthropic",
        "age": "January 1, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Release Notes - March 2026 Latest Updates - Releasebot",
      "url": "https://releasebot.io/updates/anthropic",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "releasebot.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
        "site_name": "Releasebot"
      },
      "is_missing": false,
      "text": "For more information, see Assign tasks to Claude from anywhere in Cowork. Original source Report a problem ... Claude Developer Platform releases the display field for extended thinking to omit thinking blocks for faster streaming while preserving signature. We&#x27;ve launched the display field for extended thinking, letting you omit thinking content from responses for faster streaming. Set thinking.display: &quot;omitted&quot; to receive thinking blocks with an empty thinking field and the signature preserved for multi-turn continuity. Billing is unchanged. Learn more in Controlling thinking display. Original source Report a problem ... No date parsed from source. ... Anthropic unveils a sweeping update with MCP elicitation support and new Elicitation hooks, a startup name flag, sparse worktree paths, a PostCompact hook, an effort command, and a configurable session quality survey.\n\nFor more information, see Assign tasks to Claude from anywhere in Cowork. Original source Report a problem ... Claude Developer Platform releases the display field for extended thinking to omit thinking blocks for faster streaming while preserving signature. We've launched the display field for extended thinking, letting you omit thinking content from responses for faster streaming. Set thinking.display: \"omitted\" to receive thinking blocks with an empty thinking field and the signature preserved for multi-turn continuity. Billing is unchanged. Learn more in Controlling thinking display. Original source Report a problem ... No date parsed from source. ... Anthropic unveils a sweeping update with MCP elicitation support and new Elicitation hooks, a startup name flag, sparse worktree paths, a PostCompact hook, an effort command, and a configurable session quality survey.\n\nAdded --bare flag for scripted -p calls — skips hooks, LSP, plugin sync, and skill directory walks; requires ANTHROPIC_API_KEY or an apiKeyHelper via --settings (OAuth and keychain auth disabled); auto-memory fully disabled · Added --channels permission relay — channel servers that declare the permission capability can forward tool approval prompts to your phone · Fixed multiple concurrent Claude Code sessions requiring repeated re-authentication when one session refreshes its OAuth token · Fixed voice mode silently swallowing retry failures and showing a misleading \"check your network\" message instead of the actual error · Fixed voice mode audio not recovering when the server silently drops the WebSocket connection · Fixed CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS not suppressing the structured-outputs beta header, causing 400 errors on proxy gateways forwarding to Vertex/Bedrock ·\n\nAdded ANTHROPIC_CUSTOM_MODEL_OPTION env var to add a custom entry to the /model picker, with optional _NAME and _DESCRIPTION suffixed vars for display · Fixed ANTHROPIC_BETAS environment variable being silently ignored when using Haiku models · Fixed queued prompts being concatenated without a newline separator · Improved memory usage and startup time when resuming large sessions · [VSCode] Fixed a brief flash of the login screen when opening the sidebar while already authenticated · [VSCode] Fixed \"API Error: Rate limit reached\" when selecting Opus — model dropdown no longer offers 1M context variant to subscribers whose plan tier is unknown Original source Report a problem ... Claude Developer Platform releases updated Models API exposing max_input_tokens, max_tokens, and a capabilities object for each model. We've added model capability fields to the Models API.\n\nJoin Releasebot and get updates from Anthropic and hundreds of other software products. ... No date parsed from source. ... Claude Code releases a maintenance update that adds a --console flag for Anthropic Console login, a Show turn duration toggle, and numerous stability fixes across CLI, voice, streaming, and VSCode. It improves startup memory, session handling, and navigation, with multi-seed and timeout enhancements. Added --console flag to claude auth login for Anthropic Console (API billing) authentication · Added \"Show turn duration\" toggle to the /config menu · Fixed claude -p hanging when spawned as a subprocess without explicit stdin (e.g. Python subprocess.run) ... Fixed /btw returning the main agent's output instead of answering the side question when triggered during streaming · Fixed voice mode not activating correctly on startup when voiceEnabled: true is set ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://releasebot.io/updates/anthropic",
        "search_provider": "anthropic",
        "age": "5 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How To Fix Claude Cowork On Windows: A Complete Troubleshooting Guide (March 2026) - Cybersecurity For Me",
      "url": "https://cybersecurityforme.com/how-to-fix-claude-cowork-on-windows/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "cybersecurityforme.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=cybersecurityforme.com",
        "site_name": "Cybersecurity For Me"
      },
      "is_missing": false,
      "text": "... Verify your subscription plan. Cowork requires a Pro or Max plan. Free and Trial accounts cannot access it—the tab simply won’t appear. Disable any VPN temporarily. VPNs can interfere with regional licensing checks. Turn it off, restart Claude, and check if the Cowork tab appears.\n\nFix Claude Cowork on Windows: Complete troubleshooting guide for 'yukonSilver' errors, missing tabs, and Windows edition issues.\n\nNote: Some users report that Cowork was working, then broke after auto-updating to version 1.1.5749 (released March 9, 2026). If this happened to you, you’re waiting for Anthropic to fix the regression. If the workspace starts but can’t connect to Claude’s API (common on Windows 11 Home) : ... Restart your computer and try again. If you get “Access is denied” when trying to remove CoworkVMService: ... This is a known installer bug, the service sometimes becomes impossible to remove even for administrators. After reviewing dozens of GitHub issues from real users, here’s the truth about Cowork on Windows: If you’re on Windows 11 Pro and have enabled all virtualization features but still see errors, you’re likely experiencing a Claude bug, not a configuration problem. The “yukonSilver not supported” error appears to be faulty platform detection within the app itself.\n\nClaude’s Cowork feature launched for Windows on February 10, 2026, promising real-time AI collaboration that can see your screen and interact with applications. But for many Windows users, the reality has been different like missing Cowork tabs, cryptic “yukonSilver not supported” errors, and API connection failures. This guide cuts through the confusion with accurate, up-to-date troubleshooting based on real user experiences from the first month of Windows Cowork. Note: If you are experiencing the specific error “Could not connect to MCP server Claude in Chrome”, See our guide: [Could Not Connect to MCP Server Claude in Chrome: Troubleshooting Guide]. ... Let’s be honest upfront: Cowork on Windows is still quite rough around the edges. The feature relies on complex virtualization technology, and the initial release has encountered significant growing pains.\n\nYou’re likely waiting for Anthropic to fix bugs on their end. No amount of BIOS tweaking or PowerShell commands will resolve faulty app-side detection. Submit logs through the app: Settings → Help → Submit Logs · Include GitHub issue numbers in your description: #24918, #25136, #32004, etc. Specify your Windows edition and build (e.g., “Windows 11 Pro 25H2 Build 26200.7462”) Note whether Cowork ever worked and which update broke it · Claude Cowork on Windows launched with tremendous potential but real growing pains. The most common issues like missing tabs, “yukonSilver” errors, and API connection failures which stem from a combination of unclear system requirements, installation upgrade path problems, and app-side detection bugs. I'm Kevin James, and I'm passionate about writing on Security and cybersecurity topics. Here, I'd like to share a bit more about myself.I hold a Bachelor of Science in Cybersecurity from Utica College, New York, which has been the foundation of my career in c",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cybersecurityforme.com/how-to-fix-claude-cowork-on-windows/",
        "search_provider": "anthropic",
        "age": "1 day ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude was down — Here's what happened why the AI service as out of order | Tom's Guide",
      "url": "https://www.tomsguide.com/news/live/claude-down-live-outage-updates-3-25-26",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "tomsguide.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=tomsguide.com",
        "site_name": "Tom's Guide"
      },
      "is_missing": false,
      "text": "A new error report has popped up on Claude&#x27;s status website, this time citing &quot;Elevated connection reset errors in Cowork.&quot; We&#x27;ll keep an eye on this one too, as it could lead to another overall spike in outage reports as people attempt to use Cowork. ... Finally, we&#x27;ve received an update from Anthropic that it has implemented a fix. It could take a little while for things to fully return to normal, but it&#x27;s a step in the right direction to say the least. ... Claude&#x27;s owner, Anthropic, has been quiet since the last &quot;We are continuing to investigate this issue&quot; post on its status page. And while we&#x27;ve seen Downdetector reports drop again, the outage appears to still be happening with no official report from the company that it&#x27;s fixed. ... As is always the case during a big outage, users have poured into the Downdetector comments section to let their voices be heard.\n\nAI Google Gemini’s dominance is over — Anthropic’s new Claude is now the best AI for real work · AI The ‘glitch prompt’ makes ChatGPT smarter — here’s what happened when I tried it on Claude · AI Claude hits No. 1 on the App Store as users flee ChatGPT over OpenAI's 'Department of War' deal · AI Claude just made two of its best features free — here’s how to use Projects and Artifacts · AI I spent 24 hours with Claude Opus 4.6 — here's why it feels more human than any other AI I've tested · Social Media X was down — here's what happened during the massive outage · AI I tested Claude Cowork — Anthropic’s new AI feels more like a coworker than a chatbot · AI I tried Claude’s new Cowork feature — and it ran my laptop from my phone · Social Media X was down — here's what happened in the massive global outage · AI Anthropic brings Claude into healthcare — skip the ChatGPT Health waitlist ...\n\nA new error report has popped up on Claude's status website, this time citing \"Elevated connection reset errors in Cowork.\" We'll keep an eye on this one too, as it could lead to another overall spike in outage reports as people attempt to use Cowork. ... Finally, we've received an update from Anthropic that it has implemented a fix. It could take a little while for things to fully return to normal, but it's a step in the right direction to say the least. ... Claude's owner, Anthropic, has been quiet since the last \"We are continuing to investigate this issue\" post on its status page. And while we've seen Downdetector reports drop again, the outage appears to still be happening with no official report from the company that it's fixed. ... As is always the case during a big outage, users have poured into the Downdetector comments section to let their voices be heard.\n\nAccording to Anthropic's status page, Claude is recovering, so any straggler issues should be fixed soon. \"We are currently seeing recovery, and our engineers are working to ensure no further recurrences. We will provide an update as soon as possible,\" reads the status page. ... We're now seeing \"Elevated errors on Claude Opus 4.6\" on the status page. This is a new error, as the original problem was more general. ... Downdetector reports have hit 226, which is close to the point of being fully over. We'll continue to monitor the situation until Claude's status page officially says everything is fixed, but it seems that things have mostly returned to normal. ... We want to hear from you! Are you able to use Claude right now or is it still broken for you? Vote in the poll below! ... Despite Claude's status still showing down officially, it seems most users are able to access the AI chatbot, as the Downdetector reports have dropped to around 700 (a far cry from the 5,000 we saw at its pea\n\nWhile it's frustrating for a service like Claude to be down, Anthropic quickly updated its status page to report the issue, which is always nice to see. Too often, we see services wait too long, keeping users in the dark. In this case, the company said, \"We are currently investigating this issue,\" and it followed up a few minutes later saying, \"We are continuing to investigate this issue.\" So while there's no solution in place yet, at least know the firm is aware and working to solve the issue. ... The reports have started pouring in as thousands of users flock to Downdetector to report that their favorite service isn't working. As of this post, there are more than 4,000 reports, which is quite high in such a short time. ... Please logout and then login again, you will then be prompted to enter your display name. Logout ... Meta and YouTube just found negligent in landmark social media addiction case — 'a significant blow to social networks' ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.tomsguide.com/news/live/claude-down-live-outage-updates-3-25-26",
        "search_provider": "anthropic",
        "age": "18 hours ago"
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
      "text": "Elevated connection reset errors in Cowork Subscribe · Investigating - We are currently investigating this issue. Mar 25, 2026 - 14:33 UTC ... Identified - The issue has been identified and a fix is being implemented. Mar 25, 2026 - 14:33 UTC · Update - We are continuing to investigate this issue. Mar 25, 2026 - 13:52 UTC · Investigating - We are currently investigating this issue. Mar 25, 2026 - 13:45 UTC · Uptime over the past 90 days. View historical uptime. ... No downtime recorded on this day. No data exists for this day. ... No incidents or maintenance related to this downtime. ... Resolved - This incident has been resolved. Mar 25, 13:10 UTC · Monitoring - A fix has been implemented and we are monitoring the results. Mar 25, 10:06 UTC · Investigating - We are currently investigating this issue. Mar 25, 09:35 UTC ... No incidents reported.\n\nElevated connection reset errors in Cowork Subscribe · Investigating - We are currently investigating this issue. Mar 25, 2026 - 14:33 UTC ... Identified - The issue has been identified and a fix is being implemented. Mar 25, 2026 - 14:33 UTC · Update - We are continuing to investigate this issue. Mar 25, 2026 - 13:52 UTC · Investigating - We are currently investigating this issue. Mar 25, 2026 - 13:45 UTC · Uptime over the past 90 days. View historical uptime. ... No downtime recorded on this day. No data exists for this day. ... No incidents or maintenance related to this downtime. ... Resolved - This incident has been resolved. Mar 25, 13:10 UTC · Monitoring - A fix has been implemented and we are monitoring the results. Mar 25, 10:06 UTC · Investigating - We are currently investigating this issue. Mar 25, 09:35 UTC ... No incidents reported.\n\nInvestigating - Since approximately 20:00 UTC / 13:00 PT on Friday, March 20, Claude.ai responses may appear to \"hang\" for around 5 seconds after the text has finished streaming before the message completes. The Anthropic API is not affected. Mar 22, 11:14 UTC ... Resolved - This incident has been resolved. Mar 21, 01:42 UTC · Update - We have observed success rates return to normal for Claude Opus 4.6, and are working to fully resolve elevated errors for Claude Sonnet 4.6. Mar 21, 00:58 UTC · Identified - We have identified an issue resulting in elevated errors on both Claude Opus and Sonnet 4.6, and are working to resolve this issue as quickly as possible. Mar 21, 00:17 UTC · Investigating - We are currently investigating elevated error rates affecting Claude Opus 4.6. Our team is actively working to identify the root cause. Mar 21, 00:07 UTC ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://status.claude.com/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic updates Claude Cowork tool built to give the average office worker a productivity boost",
      "url": "https://www.cnbc.com/2026/02/24/anthropic-claude-cowork-office-worker.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "cnbc.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=cnbc.com",
        "site_name": "CNBC"
      },
      "is_missing": false,
      "text": "Companies can now connect Claude Cowork to Google Drive, Gmail, DocuSign and FactSet. Anthropic&#x27;s recent product rollouts have sent software and cybersecurity stocks tumbling this year as the AI tools threaten to upend those business models.\n\nCompanies can now connect Claude Cowork to Google Drive, Gmail, DocuSign and FactSet. Anthropic's recent product rollouts have sent software and cybersecurity stocks tumbling this year as the AI tools threaten to upend those business models. CEO and Co-Founder of Anthropic Dario Amodei speaks during the 56th annual World Economic Forum (WEF) meeting in Davos, Switzerland, January 20, 2026. ... Anthropic's Claude Cowork, which rocked Wall Street last month, is getting a wider release. The artificial intelligence startup launched a series of connectors and plugins for the knowledge worker tool on Tuesday that enterprises can use to help \"turbo charge\" the capabilities of individual employees. Anthropic launched Claude Cowork in a research capacity last month, rattling software stocks as investors grappled with AI's disruptive potential. The company said Claude Cowork's new updates mark its transition into a true enterprise-grade product.\n\nStarting Tuesday, organizations will be able to connect Claude Cowork to their existing tools like Google Drive, Gmail, DocuSign and FactSet. They can also deploy customizable plugins across domains like financial analysis, engineering and human resources that encode institutional knowledge and workflows, Anthropic said. \"We're trying to make it much more accessible and much more ready for anyone to be able to use,\" Kate Jensen, Head of Americas at Anthropic, told CNBC in an interview. Investors were on edge ahead of Anthropic's expected announcement, but software stocks rallied as the company named its partners and revealed the details behind its new offering. The iShares Expanded Tech-Software Sector ETF closed down nearly 5% on Monday, but closed up more than 1% on Tuesday. During a livestream on Tuesday, Peter McCrory, Anthropic's head of economics, said the company is not yet seeing any evidence of widespread displacement in the labor market.\n\nAnthropic has had early success selling to the enterprise market, which accounts for roughly 80% of its business. But the five-year-old company is racing to fend off growing competition from rivals like OpenAI and Google, who have also set their sights on lucrative enterprise contracts. With its updates to Claude Cowork, Anthropic is looking to build on the momentum of its existing products like Claude Code, its AI coding tool that has seen a wave of adoption across companies over the last year. \"Engineers think about Claude Code as a tool that they just couldn't live without anymore,\" Jensen said. \"We expect that every knowledge worker will feel that way about Cowork.\" The startup was founded in 2021 by a group of researchers and executives from OpenAI, which kickstarted the AI boom with the launch of its ChatGPT chatbot in 2022. Anthropic launched Claude, its flagship chatbot, the following year, and its valuation has since swelled to $380 billion.\n\nJensen said Claude Cowork goes beyond the basic chatbot interface that users have come to know, and that the tool's real-time context from its internal connectors should help employees feel like they're getting a real productivity boost. \"We're actually bringing the context that we need and the admin controls that enterprises really have always cared about to make these experiences for the end users just really different than anything they've really had before,\" she said. WATCH: A once quiet rivalry between OpenAI and Anthropic is heating up ... Choose CNBC as your preferred source on Google and never miss a moment from the most trusted name in business news.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cnbc.com/2026/02/24/anthropic-claude-cowork-office-worker.html",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Cowork incompatible with VPN - Hyper-V NAT routing prevents VM from reaching Claude API · Issue #25513 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/25513",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Mode: Exclusive (bypass VPN for specified apps/domains) Apps excluded: claude.exe, cowork-svc.exe Domains excluded: api.anthropic.com, claude.ai, statsig.anthropic.com, cdn.anthropic.com, assets.anthropic.com Windscribe firewall: Disabled R.O.B.E.R.T. (DNS blocking): Configured to allow Claude domains · Result: VM traffic still routed through VPN tunnel 2. Network Adapter Metrics (Priority) ❌ ... Wi-Fi: metric 5 (highest priority - physical connection) WindscribeWireguard: metric 10 (VPN tunnel with split rules) vEthernet (cowork-vm-nat): metric 15 (Cowork VM) Purpose: Ensure VPN split tunnel rules are evaluated before VM routing decisions · Result: No improvement - VM ignores metric priorities 3. Persistent Routes (Manual Routing Table) ❌ · Configuration: Added persistent routes forcing Claude IPs through Wi-Fi gateway: powershell · route -p add 160.79.104.10 mask 255.255.255.255 192.168.0.1 metric 5 # api.anthropic.com route -p add 34.36.57.103 mask 255.255.255.255 192.168.0.1 metric\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Environment: O...\n\nanthropics / claude-code Public · Notifications · You must be signed in to change notification settings · Fork 6.4k · Star 78k · New issueCopy link · New issueCopy link · Closed as not planned · Closed as not planned · [BUG] Cowork incompatible with VPN - Hyper-V NAT routing prevents VM from reaching Claude API#25513 · Copy link · Labels · bugSomething isn't workingSomething isn't workinginvalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Code · ErosEleutherios · opened · on Feb 13, 2026 · Issue body actions · I have searched existing issues and this hasn't been reported yet · This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code · Environment: OS: Windows 10 Claude Desktop: v1.1.2998.0 (Microsoft Store version) VPN: Windscribe (likely affects all VPNs) Cowork VM Network: vEthernet (cowork-vm-nat) using NAT mode ·\n\nCowork's Hyper-V NAT networking layer is fundamentally incompatible with VPN software. The VM cannot reach api.anthropic.com when a VPN is active, forcing users to choose between using Cowork or maintaining VPN protection. ... API Error: Unable to connect to API (ECONNRESET) \"Taking longer than expected to reach the Claude API\" → timeout \"Failed to start Claude's workspace - Can't reach the Claude API from Claude's workspace\" ... ✅ Cowork works perfectly when VPN is disconnected ✅ Regular Chat mode works with VPN connected ✅ Host computer can reach api.anthropic.com with VPN active ... ❌ Cowork VM cannot reach Claude API through the VPN tunnel ❌ Cowork VM cannot reach Claude API even when VPN split tunnel is configured ❌ Cowork VM routing ignores host-level routing table overrides ... The Hyper-V NAT layer (vEthernet (cowork-vm-nat)) caches routing decisions at VM creation time and does not: Respect VPN split tunnel exclusions Honor Windows routing table entries (even persistent routes\n\nMode: Exclusive (bypass VPN for specified apps/domains) Apps excluded: claude.exe, cowork-svc.exe Domains excluded: api.anthropic.com, claude.ai, statsig.anthropic.com, cdn.anthropic.com, assets.anthropic.com Windscribe firewall: Disabled R.O.B.E.R.T. (DNS blocking): Configured to allow Claude domains · Result: VM traffic still routed through VPN tunnel 2. Network Adapter Metrics (Priority) ❌ ... Wi-Fi: metric 5 (highest priority - physical connection) WindscribeWireguard: metric 10 (VPN tunnel with split rules) vEthernet (cowork-vm-nat): metric 15 (Cowork VM) Purpose: Ensure VPN split tunnel rules are evaluated before VM routing decisions · Result: No improvement - VM ignores metric priorities 3. Persistent Routes (Manual Routing Table) ❌ · Configuration: Added persistent routes forcing Claude IPs through Wi-Fi gateway: powershell · route -p add 160.79.104.10 mask 255.255.255.255 192.168.0.1 metric 5 # api.anthropic.com route -p add 34.36.57.103 mask 255.255.255.255 192.168.0.1 metric",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/25513",
        "search_provider": "anthropic",
        "age": "February 13, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic's Cowork Shipped With Known Vulnerability",
      "url": "https://www.govinfosecurity.com/anthropics-cowork-shipped-known-vulnerability-a-30553",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "govinfosecurity.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=govinfosecurity.com",
        "site_name": "GovInfoSecurity"
      },
      "is_missing": false,
      "text": "To mitigate the risks, Anthropic advised Cowork users to avoid connecting the tool to sensitive documents, limit its Chrome extension to trusted sites and monitor for suspicious actions that may indicate prompt injection.\n\nAI Agent Can Access File Upload API to Exfiltrate Documents Rashmi Ramesh (rashmiramesh_) • January 19, 2026 ... Security researchers have demonstrated how Anthropic's new Claude Cowork productivity agent can be tricked into stealing user files and uploading them to an attacker's account, exploiting a vulnerability the company allegedly knew about but left unpatched for three months. See Also: Proof of Concept: Bot or Buyer? Identity Crisis in Retail · The vulnerability allows attackers to manipulate Cowork through prompt injection into uploading user files to an attacker's Anthropic account, without requiring any additional approval from the victim. Security firm PromptArmor published a proof of concept, showing how the attack works against the artificial intelligence agent. The attack chain starts when a user connects Cowork to a local folder containing sensitive information.\n\nThe user uploads a document that contains a hidden prompt injection. When Cowork analyzes the files, the injected prompt triggers automatically. PromptArmor demonstrated this using a scenario in which the malicious document posed as a Claude Skill, a type of instruction file users can upload to extend the AI's capabilities. The injection instructs Claude to execute a curl command to Anthropic's file upload API using the attacker's API key, rather than the victim's. Code executed by Claude runs in a virtual machine that restricts outbound network requests to almost all domains, but the Anthropic API is whitelisted as trusted, allowing the attack to succeed. The vulnerability affects Claude Haiku and the company's flagship model Claude Opus 4.5. PromptArmor demonstrated data exfiltration from Opus 4.5 when a simulated user uploaded a malicious integration guide while developing a new AI tool.\n\nRehberger said Anthropic again contacted him that month to say that data exfiltration vulnerabilities are in scope for reporting. But, he said, the company did not implement a fix. When Cowork launched on Jan. 13, nearly three months after the initial disclosure, the API was still vulnerable. To mitigate the risks, Anthropic advised Cowork users to avoid connecting the tool to sensitive documents, limit its Chrome extension to trusted sites and monitor for suspicious actions that may indicate prompt injection. Developer Simon Willison, who reviewed Cowork, questioned the company's approach. \"I do not think it is fair to tell regular non-programmer users to watch out for 'suspicious actions that may indicate prompt injection,'\" Willison said. Anthropic said that Cowork was released as a research preview with unique risks due to its agentic nature and internet access.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.govinfosecurity.com/anthropics-cowork-shipped-known-vulnerability-a-30553",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork Changelog: Latest Updates & Features",
      "url": "https://coworkerai.io/changelog",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "coworkerai.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=coworkerai.io",
        "site_name": "Claude Cowork"
      },
      "is_missing": false,
      "text": "Anthropic launches self-serve purchasing for the Enterprise plan. Organizations can now sign up, configure SSO, and start using Claude Enterprise without going through a sales process. + Self-serve Enterprise signup at claude.ai/enterprise ... Claude Sonnet 4.6 is now the default model for ...\n\nWelcome! We've moved from ClaudeCowork.io to CoworkerAI.io . Please update your bookmarks. Moved to CoworkerAI.io! ✕ ... check English 中文 日本語 한국어 繁體中文 Español Deutsch Français Português (BR) Italiano Русский Nederlands Polski Tiếng Việt Indonesia Get Started menu ... English 中文 日本語 한국어 繁體中文 Español Deutsch Français Português (BR) Italiano Русский Nederlands Polski Tiếng Việt Indonesia ... Track the latest announcements and features from Anthropic's Claude ecosystem. This is a community-curated timeline based on official sources. This is a fan-curated site. For official release notes, visit Anthropic's support page. ... Dispatch creates a single, persistent conversation between your phone and Claude Desktop. Send tasks from your phone, Claude executes them locally on your computer.\n\nAnthropic launches the largest expansion of Cowork's integration capabilities with 13 new enterprise connectors, 10 department-specific plugins, and a Plugin Create platform for custom integrations. + 13 new enterprise connectors: Google Workspace, DocuSign, FactSet, Apollo, and more · + 10 department-specific plugins for HR, Finance, Design, Engineering, etc. + Plugin Create: build and deploy custom plugins with natural language · + Cross-app workflows: Excel <-> PowerPoint automation · + Admin controls: private marketplace and per-user plugin provisioning ... Cowork now supports recurring scheduled tasks. Configure a task once — daily briefings, weekly reports, automated file processing — and Claude runs it on schedule. Uses the /schedule skill or the Scheduled Tasks sidebar. + Recurring task scheduling: hourly, daily, weekly, or weekdays-only ·\n\nAnthropic launches self-serve purchasing for the Enterprise plan. Organizations can now sign up, configure SSO, and start using Claude Enterprise without going through a sales process. + Self-serve Enterprise signup at claude.ai/enterprise ... Claude Sonnet 4.6 is now the default model for Cowork sessions. Sonnet 4.6 offers a strong balance of speed and capability, making everyday Cowork tasks faster while maintaining high-quality output. + Sonnet 4.6 set as default model for all Cowork sessions · + Faster response times for routine tasks compared to Opus · + Users can still switch to Opus 4.6 for complex tasks ... A new unified MCP connector brings Microsoft 365 integration to Claude Cowork. Access Word, Excel, PowerPoint, OneDrive, and SharePoint through a single connector, streamlining enterprise productivity workflows. + Single connector for the entire Microsoft 365 suite ·\n\nClaude Cowork launches on Windows with full feature parity with macOS. All capabilities—including plugins, file access, multi-step task execution, and MCP connectors—are now available on both platforms. ... Anthropic releases Claude Opus 4.6 with a 1M token context window (beta), adaptive thinking, and significant improvements in agentic task performance and code review capabilities. + 1M token context window (beta) — a first for the Opus model family · + Adaptive thinking for more careful planning on complex tasks · + Improved agentic task performance and sustained reasoning ... Claude Cowork is now available to Team and Enterprise plans in research preview, bringing autonomous desktop AI capabilities to organizational workflows. ... Anthropic releases 11 open-source plugins for Claude Cowork, covering role-specific business workflows. From sales pipeline management to HR onboarding, these plugins bring domain expertise to the desktop agent.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://coworkerai.io/changelog",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The Future of AI at Work: Introducing Cowork | Webinars \\ Anthropic",
      "url": "https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "Chat changed how we get answers. Claude Code transformed how developers build software. Now, Cowork brings that same execution power to everyone. Join Boris Cherny and Mikaela Grace from Anthropic for a look at the future of AI at work—where Claude doesn&#x27;t just answer questions, but actually does the work alongside you. See live demos of multi-step workflows, learn what &quot;agentic AI” really means in practice, and discover how your team can put this technology to use today. ... What agentic AI actually looks like — The difference between asking questions and getting work done · Tangible use cases — Live demos of real workflows including research synthesis, document creation, and data extraction · ‍How to get started — Practical guidance for admins and teams on rolling out Cowork · By submitting, you acknowledge the Anthropic Privacy Policy.\n\nJan 30, 2026 · — · 10:00 am · PST · Chat changed how we get answers. Claude Code transformed how developers build software. Now, Cowork brings that same execution power to everyone. Join Boris Cherny and Mikaela Grace from Anthropic for a look at the future of AI at work—where Claude doesn't just answer questions, but actually does the work alongside you. See live demos of multi-step workflows, learn what \"agentic AI” really means in practice, and discover how your team can put this technology to use today. Head of Claude Code @ Anthropic · Applied AI, Anthropic · The Chat → Code → Cowork evolution — Why Cowork exists and what problem it solves · What agentic AI actually looks like — The difference between asking questions and getting work done · Tangible use cases — Live demos of real workflows including research synthesis, document creation, and data extraction ·\n\n‍How to get started — Practical guidance for admins and teams on rolling out Cowork · By submitting, you acknowledge the Anthropic Privacy Policy. The recording of this webinar is not available yet. Watch webinarWatch webinar · Watch webinar · We’re excited to have you join us on · January 30, 2026 · at · 10:00 am · PST · What’s next: You'll receive a calendar invite with the webinar link within the next few minutes · A reminder email will be sent 24 hours before the event · All attendees will receive a recording link within 48 hours after the webinar · What’s next: You'll receive a calendar invite with the webinar link within the next few minutes · A reminder email will be sent 24 hours before the event · All attendees will receive a recording link within 48 hours after the webinar · Have questions? Feel free to contact us at partner-marketing@anthropic.com.\n\nChat changed how we get answers. Claude Code transformed how developers build software. Now, Cowork brings that same execution power to everyone. Join Boris Cherny and Mikaela Grace from Anthropic for a look at the future of AI at work—where Claude doesn't just answer questions, but actually does the work alongside you. See live demos of multi-step workflows, learn what \"agentic AI” really means in practice, and discover how your team can put this technology to use today. ... What agentic AI actually looks like — The difference between asking questions and getting work done · Tangible use cases — Live demos of real workflows including research synthesis, document creation, and data extraction · ‍How to get started — Practical guidance for admins and teams on rolling out Cowork · By submitting, you acknowledge the Anthropic Privacy Policy.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork",
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

There's no official timeline from Anthropic for fixing the VPN incompatibility. Let me be honest about what I found.

</details>

Honest answer: I can't give you a reliable estimate, and here's why.

**What the evidence shows (facts):**

The VPN incompatibility issue was first reported in mid-January 2026 and has been open for over two months. The main GitHub issue (#25513) was closed as "not planned" with the label "invalid — Issue doesn't seem to be related to Claude Code," which suggests Anthropic's Claude Code team considers this outside their scope (it's a Cowork/Desktop VM networking issue, not a Claude Code issue). No Anthropic engineer has publicly committed to a fix or timeline on any of the related GitHub threads I found.

Anthropic's recent Cowork development energy has been focused on feature expansion — enterprise connectors (Google Workspace, DocuSign, FactSet), plugins, scheduled tasks, and Microsoft 365 integration — rather than on the underlying VM networking architecture that causes the VPN conflict.

**My assessment (assumption, not fact):**

The VPN issue is architectural — it requires changing how the Cowork VM does networking (e.g., switching from Hyper-V NAT to an External vSwitch, or implementing proxy-aware networking inside the VM). That's a non-trivial infrastructure change. Given that Anthropic hasn't acknowledged it on any public roadmap and closed the most detailed bug report as out-of-scope, I wouldn't expect a fix in the near term (weeks). It could be months, or it could come bundled with a larger VM networking overhaul — but that's speculation.

**Practical suggestion for you:**

If you need VPN on all the time (which sounds like the case), Cowork on Windows is effectively unusable for you right now. You might consider submitting logs via Settings → Help → Submit Logs in Claude Desktop and referencing GitHub issue #25513 to add weight to the request. Beyond that, the regular Chat mode in Claude Desktop works fine with VPN — it's only Cowork's VM that breaks.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d2968-4a20-7589-822e-21b5c17cb9f9",
  "updated_at": "2026-03-26T09:10:19.752442Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d2968-4a1f-73da-89c1-3d683c03a4ba"
}
```

</details>

### 5. human — 2026-03-26T09:12:11.548544Z

Then if I fully use claude code and claude chat, will there be any functions I miss or features I can't realize?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d296a-58d8-771e-87bd-863a53a63bee",
  "updated_at": "2026-03-26T09:12:11.548544Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d2968-4a20-7589-822e-21b5c17cb9f9"
}
```

</details>

### 6. assistant — 2026-03-26T09:12:40.391670Z

<details>
<summary>Thinking (verbatim)</summary>

Reid is asking whether using Claude Code + Claude Chat together can cover everything Cowork offers, or if there are unique Cowork-only capabilities he'd miss out on.

Let me think about what Cowork specifically offers versus Claude Code + Claude Chat.

</details>

Great question. Let me search for what Cowork specifically offers that might not be available through Claude Code + Claude Chat.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-26T09:12:17.613140Z",
  "stop_timestamp": "2026-03-26T09:12:17.613140Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_011W5Vv7FpAMemSchBLBGQ7N",
  "name": "web_search",
  "input": {
    "query": "Claude Cowork unique features vs Claude Code Chat comparison"
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
  "tool_use_id": "toolu_011W5Vv7FpAMemSchBLBGQ7N",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "The Difference Between Claude Code and Cowork - Forte Labs",
      "url": "https://fortelabs.com/blog/the-difference-between-claude-code-and-cowork/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "fortelabs.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=fortelabs.com",
        "site_name": "Forte Labs"
      },
      "is_missing": false,
      "text": "· Cowork is inherently simpler to use, as well as safer. It runs in a “virtual machine” that is isolated and protected from the wider Internet, whereas Claude Code is more open to potential leaks and attacks.\n\nStart with Cowork to get a feel for what’s possible. Graduate to Claude Code when you’re ready for a more “power user” experience. Follow us for the latest updates and insights around productivity and Building a Second Brain on X, Facebook, Instagram, LinkedIn, and YouTube. And if you’re ready to start building your Second Brain, get the book and learn the proven method to organize your digital life and unlock your creative potential. ... To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions. ... The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a co\n\nCowork is the easy option. It lives right inside the Claude desktop app — no setup, no installation, just start chatting and it gets to work. Claude Code is the power option. You install it locally, run it from your terminal, and configure it yourself. (There’s now a web version too, but the local version is where the real power is.) Anthropic seems to have created Cowork largely because Claude Code’s setup can be intimidating for non-developers. But there are still real tradeoffs to consider… · Cowork is inherently simpler to use, as well as safer. It runs in a “virtual machine” that is isolated and protected from the wider Internet, whereas Claude Code is more open to potential leaks and attacks. If you’re in doubt about either ease of use or security, start with Cowork. You can always advance from there to Code later on. ... Token efficiency — Cowork burns through your quota faster because of all the hidden work happening behind the scenes (screenshots, image processing, etc.)",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://fortelabs.com/blog/the-difference-between-claude-code-and-cowork/",
        "search_provider": "anthropic",
        "age": "February 21, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude vs Claude Code vs Cowork — Which One Do You Actually Need? | by Yunus Emre Salcan | Feb, 2026 | Medium",
      "url": "https://medium.com/@yunusemresalcan/claude-vs-claude-code-vs-cowork-which-one-do-you-actually-need-66d3952a2eb4",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Its interaction model mirrors Claude ... task, Cowork can actually organize files, edit and update documents, and orchestrate multi-step cross-application workflows — all from a chat interface, no terminal or Python environment required. The honest limitations: Cowork is still in beta. Its configuration options are limited compared to what a developer could achieve with Claude Code or the raw Anthropic API...\n\nClaude vs Claude Code vs Cowork — Which One Do You Actually Need? Anthropic now ships three distinct AI tools. They look related, but they solve entirely different problems. Here’s how to choose …\n\nIts interaction model mirrors Claude AI’s conversational loop but adds a critical execution layer: after you describe the task, Cowork can actually organize files, edit and update documents, and orchestrate multi-step cross-application workflows — all from a chat interface, no terminal or Python environment required. The honest limitations: Cowork is still in beta. Its configuration options are limited compared to what a developer could achieve with Claude Code or the raw Anthropic API. But as a product for extending AI utility to non-engineers, it represents something meaningfully new in Anthropic’s lineup. Best for: Business analysts, operations managers, non-technical teams, and anyone drowning in repetitive file and application tasks who lacks the technical background to script solutions. Comparison of key features across all three Anthropic AI toolsFeatureClaude AIClaude CodeCoworkInterfaceWeb / Mobile ChatCommand Line (CLI)Desktop AppSetup RequiredNoneTechnical (developer)Minimal\n\nUse this guide to find the right Anthropic tool for your specific scenarioYour ScenarioBest ToolWriting a blog post, report, or emailClaude AIBrainstorming and exploring ideas conversationallyClaude AISummarizing or explaining complex researchClaude AIRefactoring a multi-file codebase at scaleClaude CodeBuilding features autonomously with full test coverageClaude CodeDebugging complex cross-module issuesClaude CodeOrganizing or renaming hundreds of files in bulkCoworkExtracting data from PDFs into spreadsheetsCoworkAutomating copy-paste workflows between desktop appsCowork · Claude AI is a conversational chat interface ideal for writing, research, and brainstorming — no setup required. Claude Code is a command-line autonomous agent that operates on your local file system, reads your entire codebase, and performs multi-file coding tasks with deep architectural context. The key difference is execution: Claude AI produces text, while Claude Code takes action on your actual code. Claude Co\n\nAt its core, Anthropic has built three layers of human-AI interaction: a conversational layer (Claude AI), a developer autonomy layer (Claude Code), and a workflow automation layer (Cowork). Each targets a different user, a different context, and a different definition of “getting things done.” ... Claude AI is what most people mean when they say “Claude.” It lives at claude.ai, runs in a browser or mobile app, and asks nothing of you technically. You type. It responds. That’s the entire contract. What makes Claude AI genuinely powerful is the breadth of what that conversation can encompass. Need a first draft of a board memo? A plain-English breakdown of a dense research paper? A devil’s advocate on your startup pitch? Claude AI handles all of these fluidly, with particular strength in long-form reasoning and nuanced analysis. The workflow is simple and circular: you prompt, Claude responds through a chat interface, and you iterate.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@yunusemresalcan/claude-vs-claude-code-vs-cowork-which-one-do-you-actually-need-66d3952a2eb4",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Chat vs Cowork vs Code 2026: Which to Use?",
      "url": "https://www.nocode.mba/articles/claude-desktop-chat-vs-cowork-vs-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nocode.mba",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nocode.mba",
        "site_name": "NoCode MBA"
      },
      "is_missing": false,
      "text": "Both can act as AI assistants that take action on your behalf. The key difference is that Cowork only runs when you initiate it — it doesn&#x27;t operate in the background or wake up on a schedule. OpenClaw is designed as an always-on personal agent.\n\nHow Cowork compares to OpenClaw: Cowork is essentially Claude's answer to the personal agent model that OpenClaw popularized. But there's one key difference — Cowork only works when you initiate it. You send a message, it executes. It's not an always-on assistant running tasks in the background on a schedule. That's a current limitation worth knowing upfront. On connectors: Cowork supports API integrations and plugins, but the library isn't as broad as something like OpenClaw yet. That's clearly the direction things are heading, and the gap is likely to close quickly. One more useful feature: you can set custom instructions specifically for Cowork in the settings. These are separate from your Chat instructions, so you can give Cowork a different persona, set of priorities, or set of defaults that only apply when you're doing agentic work. ... Before getting to the Code tab, it's worth pausing on skills — because this is the feature that most people overlook and it changes how you use C\n\nThey work across Chat and Cowork (and Claude Code too). They're not locked to a specific project. A project forces that context on every conversation. A skill only activates when it's actually relevant. Skills are also catching on fast in the broader community, especially with the rise of OpenClaw — which supports skills too. There are already repositories of shared skills on GitHub worth exploring. Where skills are heading is even more interesting. Right now they're mostly about context. In the future, skills will likely interact directly with apps — your email, your calendar, any connected tool. That turns skills from a memory feature into a workflow automation layer. The Code tab is for developers, and it delivers the full power of Claude Code — just with a better interface than working from the terminal. Like Cowork, you select a folder and give Claude access to your codebase.\n\nIf you've opened up the Claude app recently and noticed three tabs across the top — Chat, Cowork, and Code — but aren't quite sure which one to use when, you're not alone. Each one is built for a fundamentally different type of work. Use the wrong one and you're leaving real capability on the table. Use the right one and you'll wonder how you ever managed without it. Here's a complete breakdown of all three tabs, plus a hidden Claude capability that most people are underusing entirely. Chat is the tab you're probably most familiar with — it's how Claude started, and it remains the go-to for conversational back-and-forth. But it's more powerful than it used to be. A few things worth knowing: Web search is built in. Claude can pull in current information without you having to ask. It asks clarifying questions. For vague or open-ended requests, Claude will ask follow-ups to make sure it gives you something actually useful.\n\nWhat is the difference between Claude Chat and Claude Cowork? Chat is conversational — you ask a question and get an answer. Cowork is agentic, meaning it can run extended multi-step tasks, access folders on your local computer, create and edit files, and connect to external tools. Use Chat for thinking and brainstorming; use Cowork when you need actual work completed. ... They're similar in concept but different in practice. Both can act as AI assistants that take action on your behalf. The key difference is that Cowork only runs when you initiate it — it doesn't operate in the background or wake up on a schedule. OpenClaw is designed as an always-on personal agent. Cowork is currently more limited in connectors too, though that's expected to expand. ... Skills are custom, reusable instruction sets that Claude loads automatically based on context.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nocode.mba/articles/claude-desktop-chat-vs-cowork-vs-code",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code vs Cowork vs Claude: Which Do You Need? | RSL/A",
      "url": "https://rsla.io/blog/claude-code-vs-cowork-vs-claude-app",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "rsla.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=rsla.io",
        "site_name": "RSL/A"
      },
      "is_missing": false,
      "text": "Pro at $20 per month gives you Claude chat with higher limits, plus access to both Claude Code and Cowork with the Sonnet model. This is where most individuals should start. You get everything.\n\nSame model, same reasoning, same underlying intelligence. But they work completely differently. And if you pick the wrong one for a task, you are either paying for features you will never touch or stuck with a tool that cannot do what you actually need. I have been using all three since Cowork launched. Claude Code runs our entire development workflow at RSL/A. Cowork handles research and document heavy projects. Regular Claude is still my go to for quick questions and brainstorming. So I have real opinions on when each one makes sense. Here is the breakdown based on daily use, not spec sheets. Anthropic's naming does not make this obvious, so let me be clear about what these three things are. Claude is the chat app. You go to claude.ai, type a message, get a response. It is what most people think of when they hear \"Claude.\" Upload files, have conversations, get writing help, analyze data.\n\nPro at $20 per month gives you Claude chat with higher limits, plus access to both Claude Code and Cowork with the Sonnet model. This is where most individuals should start. You get everything. Max at $100 per month adds the Opus model, 5x the usage limits of Pro, and features like longer context windows. If you are running a business on these tools, this is the tier that makes sense. Max at $200 per month pushes to 20x usage limits and adds Remote Control for managing Claude Code sessions from your phone. This is the \"I live in Claude all day\" tier. Team and Enterprise plans exist for organizations that need admin controls and usage management across multiple seats. The important thing: you are not paying separately for each product. $20 per month covers all three. So the decision is purely about which one fits each task. Claude chat is your quick draw tool.\n\nBest for building features, websites, apps, and automations. Fixing bugs and debugging issues across a codebase. Deploying code and managing infrastructure. Writing and running scripts for data processing, API integrations, or batch operations. Generating content at scale. Refactoring or reorganizing large projects. Real example from our agency: When we need to generate 12 blog posts with images, SEO metadata, FAQ schema, and cross references, Claude Code handles the entire pipeline. It writes the content, generates images via Gemini API, uploads to Sanity CMS, patches metadata, and sets up internal linking. What would take a team a week takes a single session. Not great for quick questions (overkill, just use Claude chat), working with non code documents (Cowork is better here), or users who do not want to touch a terminal at all. The real power of Claude Code comes from CLAUDE.md context files that tell it about your project's architecture, coding standards, and constraints.\n\nFor our agency, Claude Code handles about 60% of our work. Claude chat handles 25%. Cowork handles 15%. Your split will look different depending on what you do. And that is the point. You get all three for one price, so optimize for your workflow, not for features on a spec sheet. If you want help figuring out which Claude tools fit your business, RSL/A sets up AI workflows for agencies and small businesses. We use all three daily and can show you exactly how to integrate them into your operations. ![Pie chart showing RSL/A usage: Claude Code 60%, Claude Chat 25%, Cowork 15%](60% Claude Code. 25% Claude Chat. 15% Cowork. That is how the split looks at an agency that builds websites, content, and automations.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://rsla.io/blog/claude-code-vs-cowork-vs-claude-app",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Vibe Check: Claude Cowork Is Claude Code for the Rest of Us",
      "url": "https://every.to/vibe-check/vibe-check-claude-cowork-is-claude-code-for-the-rest-of-us",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "every.to",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=every.to",
        "site_name": "Every"
      },
      "is_missing": false,
      "text": "Here’s our day-zero verdict: Cowork is genuinely new—no other company is doing exactly this— but there are rough edges that will require some patience while the Anthropic team smooths them out. The capabilities aren’t as robust as Claude Code, and it’s available exclusively through the Claude macOS app (no web or mobile access at this time). But if you’re a Max subscriber (the $100 tier) with patience for a research preview and curiosity about what asynchronous AI work feels like, Cowork is worth exploring now. If you need polish, give it a few weeks. Think of Cowork as chat that has access to your computer and doesn’t give up after two minutes. In Claude’s chat interface, you send a message, wait for a response, then send another message. You can’t interrupt or redirect mid-stream—if Claude is responding, you’re stuck waiting.\n\nClaude Cowork is a new, third tab in Claude’s desktop app—alongside Chat and Code—and it’s designed to bring Claude Code’s agentic, asynchronous workflow to everyone else. Claude Code is powerful, but it requires comfort with a terminal—the text-based command line developers use. Cowork offers the same “hand off a task and come back when it’s done” experience, but wrapped in a visual interface anyone can use. We got access a few hours before the feature went live to Claude Max users and ran a two-hour livestream led by our testers ... Kieran Klaassen to share our findings. A few members of the Anthropic team joined, including an engineer from the team that built Cowork—more on that conversation below. If you’re interested in catching the full conversation, you can check it out in a special edition of AI & I. Watch on X or YouTube, or listen on Spotify or Apple Podcasts.\n\nHere’s our day-zero verdict: Cowork is genuinely new—no other company is doing exactly this— but there are rough edges that will require some patience while the Anthropic team smooths them out. The capabilities aren’t as robust as Claude Code, and it’s available exclusively through the Claude macOS app (no web or mobile access at this time). But if you’re a Max subscriber (the $100 tier) with patience for a research preview and curiosity about what asynchronous AI work feels like, Cowork is worth exploring now. If you need polish, give it a few weeks. Think of Cowork as chat that has access to your computer and doesn’t give up after two minutes. In Claude’s chat interface, you send a message, wait for a response, then send another message. You can’t interrupt or redirect mid-stream—if Claude is responding, you’re stuck waiting.\n\nThe other big shift: Cowork runs locally on your Apple computer. It can read and edit files in folders you approve, and if you connect it to Chrome, it can browse your logged-in sessions, including your Gmail, analytics dashboards, and social feeds. Under the hood, it’s built on the same foundations as Claude Code, but it’s wrapped in a graphical interface that doesn’t assume you know what a terminal is. Cowork lives in its own tab, and your chats are local, not synced across devices. There’s no · mobile interface or Windows compatibility yet. On the plus side, Skills—packets of custom instructions you can install in Claude to handle specific tasks, like following your company’s style guide or applying design principles—automatically load into Cowork. What Cowork looks like when you open it on the macOS. (Screenshot courtesy of Katie Parrott.)\n\n“The UI is janky, but the concept excites me—this is the opportunity to give non-developers their Claude Code moment. The async workflow, the skills integration, and the local computer access—it’s genuinely new, even if the interface needs work. I don’t see any other company attempting this.” ... “You won’t realize how useful Cowork is until you use it. The learning curve is real—non-technical users aren’t trained to think about working with AI as async, and building that muscle takes time. But once you experience handing off a task and coming back an hour later to find it done, something clicks.” · Cowork’s killer feature is persistence at non-coding tasks: It doesn’t quit the way the chat interface does. Dan asked Cowork to go through the past month of his calendar, categorize how his time was spent, and compare it against his goals.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://every.to/vibe-check/vibe-check-claude-cowork-is-claude-code-for-the-rest-of-us",
        "search_provider": "anthropic",
        "age": "January 13, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude code vs claude cowork: which one is the best agent for your needs?",
      "url": "https://ucstrategies.com/news/claude-code-vs-claude-cowork-which-one-is-the-best-agent-for-your-needs/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ucstrategies.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ucstrategies.com",
        "site_name": "Ucstrategies News"
      },
      "is_missing": false,
      "text": "Crucially, Cowork operates within an isolated Linux VM, ensuring a secure environment for executing complex professional tasks directly on local files. Anthropic is moving fast. We have shifted from simple chat boxes to complex agentic systems that actually get things done in the real world. Understanding the nuances of claude code and claude cowork and standard chat is now a requirement for staying productive. Stop just prompting and start delegating. Standard chat gives you a text response. Agents, however, chase a specific goal you assign. Claude now executes multi-step plans. It acts across files and tools autonomously without needing constant manual input. Shift your mindset. Focus on outcomes, not questions. Claude Code lives in your terminal as a CLI tool. It helps with software engineering. It reads and writes code directly. It has already significantly cut down engineering time.\n\nFeeling overwhelmed by the choice between the various tools in the Anthropic ecosystem like claude code or cowork is a common frustration for professionals trying to optimize their daily output. This article breaks down the functional differences between terminal based engineering and desktop research previews to help you identify which specific solution matches your unique business needs and technical skills. You will gain a clear understanding of the shift toward agentic delegation and learn the practical hardware constraints, security protocols, and subscription requirements needed to leverage these powerful automated systems effectively for your next big project. The essentials: Claude is evolving from a chat interface into an agentic ecosystem focused on goal delegation rather than simple prompting. This shift enables autonomous multi-step workflows, transforming productivity through specialized tools like Claude Code and Cowork.\n\nClaude Cowork is the ideal choice for professionals who want to move beyond simple prompting without learning terminal commands. It provides a user-friendly desktop interface where you can delegate complex goals—like generating a weekly report in .docx format or summarizing hundreds of files—to “sub-agents.” It essentially brings the agentic power of Claude Code to everyday business tasks without the steep learning curve of a CLI. To use these agentic features, you generally need a macOS or Windows x64 system. Access is currently limited to users on Claude Pro, Team, or Enterprise subscription tiers. It is important to note that agentic work is compute-intensive; because one goal can trigger many background steps, these tools consume your message quota much faster than the standard web chat interface. The Model Context Protocol (MCP) acts as a universal bridge between Claude and your data.\n\nCrucially, Cowork operates within an isolated Linux VM, ensuring a secure environment for executing complex professional tasks directly on local files. Anthropic is moving fast. We have shifted from simple chat boxes to complex agentic systems that actually get things done in the real world. Understanding the nuances of claude code and claude cowork and standard chat is now a requirement for staying productive. Stop just prompting and start delegating. Standard chat gives you a text response. Agents, however, chase a specific goal you assign. Claude now executes multi-step plans. It acts across files and tools autonomously without needing constant manual input. Shift your mindset. Focus on outcomes, not questions. Claude Code lives in your terminal as a CLI tool. It helps with software engineering. It reads and writes code directly. It has already significantly cut down engineering time.\n\nAccess currently targets Pro, Team, and Enterprise subscribers. Some advanced capabilities remain restricted to higher tiers like Claude Max. It is a gated ecosystem for professional users. This tool remains a Research Preview for now. Check this Cowork availability and tiers guide for details. It explains the current costs and rollout. ... Agentic work is undeniably expensive. These tools burn through your quotas much faster than standard chat. One simple goal might trigger ten background steps. Each individual step consumes precious tokens from your limited daily message count. High-intensity tasks trigger the 30% rule or extreme compute intensity. This reduces your message count significantly. You must be strategic with delegation to avoid hitting your limits too early. Heavy users should prepare for higher costs. Some estimates suggest intensive agentic use costs around $100 per month.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://ucstrategies.com/news/claude-code-vs-claude-cowork-which-one-is-the-best-agent-for-your-needs/",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How is Claude Cowork different from regular Claude chat?",
      "url": "https://milvus.io/ai-quick-reference/how-is-claude-cowork-different-from-regular-claude-chat",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "milvus.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=milvus.io",
        "site_name": "Milvus"
      },
      "is_missing": false,
      "text": "Claude Cowork is different from regular Claude chat because Cowork is built around task execution over a workspace, not just conversation. In regular chat, Claude mainly responds to what you paste or upload in the moment and produces text in ...\n\nIf your app uses a vector database such as Milvus or Zilliz Cloud, Cowork can do the upfront work that is usually expensive in human time: cleaning inconsistent docs, extracting fields, and producing stable chunk IDs. Regular chat can explain how to do this, but Cowork can actually leave behind the artifacts your pipeline consumes, which is the practical difference you feel day to day. ... Zilliz Cloud is a managed vector database built on Milvus perfect for building GenAI applications.Try Free · Beyond Naive RAG: Build Smarter Systems with Query Routing and Hybrid Retrieval · GLM-5 vs. MiniMax M2.5 vs. Gemini 3 Deep Think: Which Model Fits Your AI Agent Stack? Why I’m Against Claude Code’s Grep-Only Retrieval? It Just Burns Too Many Tokens · Build a Production-Grade Chatbot with Kimi K2 and Milvus ·\n\nClaude Cowork is different from regular Claude chat because Cowork is built around task execution over a workspace, not just conversation. In regular chat, Claude mainly responds to what you paste or upload in the moment and produces text in the chat window. In Cowork, you give Claude a goal (“produce a spreadsheet,” “organize this folder,” “draft a report from these files”), you share a specific folder, and Cowork can read across many files, create new files, and modify artifacts as it works. The output is often something you can open immediately—like a .pptx or .xlsx—rather than guidance or a single answer. This is why Cowork feels closer to delegating work to a teammate than asking a question. The second difference is multi-step planning and statefulness. Regular chat is often a single-turn or short multi-turn exchange. Cowork is designed to plan a sequence of steps, track intermediate state, and keep going until it produces deliverables.\n\nThat “agent loop” matters for real-world work: inventory files, extract data, reconcile inconsistencies, generate structured outputs, and log actions taken. It also changes how you should communicate. In chat, vague prompts can still be useful because you’re often exploring. In Cowork, vague prompts tend to cause drift because the agent has to make decisions about file operations and outputs. Developers get the best results by writing prompts like job specs: scope, constraints, deliverables, and “ask before destructive changes.” · Finally, Cowork encourages an artifact-first” workflow that pairs well with engineering systems. For example, instead of asking chat to “summarize these docs,” you can have Cowork generate a structured corpus: chunked Markdown, a manifest, and a metadata file suitable for ingestion. That output can feed directly into retrieval pipelines.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://milvus.io/ai-quick-reference/how-is-claude-cowork-different-from-regular-claude-chat",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude AI, Code, and Cowork differences explained",
      "url": "https://www.facebook.com/groups/vibecodinglife/posts/1975979689657225/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "facebook.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=facebook.com",
        "site_name": "Facebook"
      },
      "is_missing": false,
      "text": "We cannot provide a description for this page right now",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.facebook.com/groups/vibecodinglife/posts/1975979689657225/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude vs Claude Code vs Claude Cowork: Which One Should You Use?",
      "url": "https://apidog.com/blog/claude-vs-code-vs-cowork/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "apidog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=apidog.com",
        "site_name": "Apidog"
      },
      "is_missing": false,
      "text": "No. Cowork is designed for non-coding knowledge work, while Code is optimized for developer workflows in the terminal. They serve different purposes, Cowork can&#x27;t execute arbitrary code or run terminal commands the way Code can.\n\nTL;DRIntroductionWhat is Claude?Key FeaturesBest ForWhat is Claude Code?Key FeaturesKey Capabilities for DevelopersWhat is Claude Cowork?Key FeaturesHow Cowork WorksExample WorkflowFeature-by-Feature ComparisonInteraction Model ComparisonCapabilities MatrixUse Cases: When to Use EachWhen to Use Claude (Chat)When to Use Claude CodeWhen to Use Claude CoworkDecision FlowchartPricing and AvailabilityClaude Cowork Pricing DetailsSecurity ConsiderationsClaude (Chat)Claude CodeClaude CoworkWhich Claude Product is Right for You?Choose Claude (Chat) If:Choose Claude Code If:Choose Claude Cowork If:The Bottom LineGet Started with API TestingFAQCan I use multiple Claude products together?Does Claude Cowork replace Claude Code?Is Claude Cowork available on Linux?Can I use Claude Code without installing the desktop app?What's the difference between Claude's free and paid plans?Is Claude Cowork safe to use with sensitive files?\n\nYes. Many developers use Claude (Chat) for quick questions, Claude Code for coding sessions, and Cowork for automation. Your conversation history and settings are separate across products. No. Cowork is designed for non-coding knowledge work, while Code is optimized for developer workflows in the terminal. They serve different purposes, Cowork can't execute arbitrary code or run terminal commands the way Code can. Currently, Cowork is only available for macOS and Windows desktop apps. Linux support is not available yet. Yes. Claude Code is a separate command-line tool that works independently of the Claude Desktop app. You install it via npm and use it directly in your terminal. Paid plans (Pro, Max) include higher usage limits, access to more capable models (Opus), priority access to new features, and for Pro/Max plans, includes Claude Cowork access.\n\nAnthropic offers three distinct products under the Claude AI brand, each designed for different workflows and user needs. If you've been wondering about the differences between Claude, Claude Code, and Claude Cowork, you're not alone. Many developers and knowledge workers find the distinctions unclear, especially as Anthropic continues to expand its product lineup. The confusion is understandable, all three products use the same underlying Claude AI models, but they differ significantly in how you interact with them, what tasks they're designed for, and who they're built for. This guide breaks down each product's strengths, limitations, and ideal use cases so you can make an informed decision about which one fits your workflow. Whether you're a developer looking for terminal-based coding assistance, a business user needing to automate document processing, or simply someone who wants a powerful AI chatbot, this comparison will help you find the right tool.\n\nClaude Cowork is a research preview that brings Claude Code's agentic capabilities to the desktop application. Unlike the standard chat interface, Cowork allows Claude to autonomously execute complex, multi-step tasks on your local machine, organizing files, generating documents, analyzing data, and more. Desktop application: Works within the Claude Desktop app (macOS/Windows) Direct local file access: Read, edit, and create files without manual uploads · Agentic task execution: Claude breaks complex tasks into steps and executes them · Scheduled tasks: Automate recurring workflows (daily briefings, weekly reports) Professional outputs: Generate Excel spreadsheets with formulas, PowerPoint presentations · Connector integrations: Pull context from Slack, Notion, Figma, and other tools · Research preview: Active development with evolving capabilities ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://apidog.com/blog/claude-vs-code-vs-cowork/",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "OpenClaw vs Claude Code vs Claude Cowork: Key Differences",
      "url": "https://kanerika.com/blogs/openclaw-vs-claude-code-vs-claude-cowork/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "kanerika.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=kanerika.com",
        "site_name": "Kanerika"
      },
      "is_missing": false,
      "text": "Compare OpenClaw, Claude Code, and Claude Cowork on setup, use cases, and access model and find out which AI agent fits your team&#x27;s workflow and skill level.\n\nWe use cookies to enhance your experience. Consenting allows us to process data like browsing behavior or unique IDs. Not consenting may affect site functionality. ... The technical storage or access is necessary for the legitimate purpose of storing preferences that are not requested by the subscriber or user. ... The technical storage or access that is used exclusively for statistical purposes. We use cookies to enhance your experience. Consenting allows us to process data like browsing behavior or unique IDs. Not consenting may affect site functionality. ... We use cookies to enhance your experience. Consenting allows us to process data like browsing behavior or unique IDs. Not consenting may affect site functionality. ... Limited seats available!",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://kanerika.com/blogs/openclaw-vs-claude-code-vs-claude-cowork/",
        "search_provider": "anthropic",
        "age": "January 28, 2026"
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

Let me synthesize what Cowork offers that Claude Code + Claude Chat might not cover, based on the search results.

</details>

Short answer: for someone with your technical background, Claude Code + Claude Chat covers almost everything. Here's the breakdown:

**What Cowork does that you can replicate with Claude Code + Chat:**

Most of Cowork's core capabilities — reading/writing local files, multi-step task execution, generating .docx/.pptx/.xlsx, running bash commands, MCP connectors — are things Claude Code already does, and often with more control. Cowork's capabilities aren't as robust as Claude Code, and Claude Code lives in your terminal as a CLI tool — it reads and writes code directly with full filesystem access. For research, brainstorming, and conversational tasks, Claude Chat (what you're using right now) handles that.

**Cowork-only features you'd genuinely miss:**

1. **Scheduled/recurring tasks** — Cowork supports recurring scheduled tasks: configure a task once — daily briefings, weekly reports, automated file processing — and Claude runs it on schedule. Claude Code has no built-in scheduler (though you could wire up cron + `claude -p` yourself).

2. **Mobile dispatch** — You can message Claude from your phone and get results delivered back to the same conversation. Claude works on your desktop using your local files and connectors — you just don't have to be sitting in front of it. Claude Code doesn't natively offer this (though the `--channels` flag for phone relay is a recent addition to Claude Code CLI).

3. **Non-technical GUI wrapper** — This is irrelevant for you since you're comfortable in a terminal.

4. **Enterprise connectors UI** — 13 enterprise connectors including Google Workspace, DocuSign, FactSet, Apollo with a point-and-click setup. But Claude Code supports MCP servers too, so you can connect the same services manually.

**Where Claude Code is actually better:**

- Full terminal access with no VM sandboxing restrictions
- Direct access to your actual filesystem (no VirtioFS bridge)
- Cowork burns through your quota faster because of all the hidden work happening behind the scenes (screenshots, image processing, etc.) — Claude Code is more token-efficient
- Works fine with VPN (no Hyper-V VM networking issues)
- CLAUDE.md project context files for deep codebase awareness

**Bottom line:** For your use case — a physics grad student doing coding, simulation work (LISE++, data analysis), and document preparation — Claude Code + Claude Chat covers essentially 100% of what you'd need. The only meaningful gap is the scheduled tasks feature, which you could approximate with a cron job calling `claude -p` if you wanted to.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d296a-58d8-7201-9cf7-77c9cfc169a7",
  "updated_at": "2026-03-26T09:12:40.391670Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d296a-58d8-771e-87bd-863a53a63bee"
}
```

</details>
