# Resolving a stuck process

## Export metadata (verbatim)

```json
{
  "uuid": "0ea04a25-b4c3-41b4-93d0-76bcc1058e7b",
  "name": "Resolving a stuck process",
  "summary": "**Conversation Overview**\n\nThe person encountered a technical issue with the Cowork feature in Claude Desktop, where the \"Setting up Claude's workspace\" loading screen had been stuck for over ten minutes. They asked why this was happening and how to resolve it. Claude explained that Cowork runs on a lightweight VM and that the stuck screen typically results from the VM failing to boot or connect properly, with common causes including network conflicts, insufficient disk space, or VM service failures. Claude provided a structured, escalating troubleshooting sequence: fully restarting Claude Desktop, rebooting the computer, clearing the cache via Help → Troubleshooting, verifying sufficient disk space (noting the VM bundle requires roughly 10+ GB), checking for network range conflicts with VPNs or corporate networks (specifically the 172.16.0.0/24 range used by Cowork's internal NAT), and updating to the latest Claude Desktop version. Claude closed by asking whether the person was on Windows or Mac to help narrow down the most relevant fix. The conversation ended without the person confirming their OS or whether any solution was attempted.",
  "created_at": "2026-03-20T13:04:15.729725Z",
  "updated_at": "2026-03-20T13:04:36.162637Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-20T13:04:16.932927Z

Why it was stuck here for a little over ten minutes?
How can I solve it?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0b58-b62d-7c32-9008-320d1c5cbceb",
  "updated_at": "2026-03-20T13:04:16.932927Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d0b57-a9a9-72ce-ae02-3dc695551d33",
      "file_name": "1774011787512_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-20T13:04:36.152395Z

<details>
<summary>Thinking (verbatim)</summary>

The user is showing the Claude desktop app's "Cowork" feature, stuck on the "Setting up Claude's workspace" loading screen. Let me search for current information about this issue.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-20T13:04:20.948663Z",
  "stop_timestamp": "2026-03-20T13:04:21.114821Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01GPGGgBMcUwcc9eZ423PbuG",
  "name": "web_search",
  "input": {
    "query": "Claude Cowork \"Setting up Claude's workspace\" stuck loading"
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
  "tool_use_id": "toolu_01GPGGgBMcUwcc9eZ423PbuG",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[BUG] Cowork: \"Failed to start Claude's workspace\" — VM service not running, persists after reboot · Issue #27801 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/27801",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "The service failed to start. Restarting Claude or your computer sometimes resolves this. If it persists, you can reinstall the workspace or share your debug logs to help us improve.&quot;\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? aWhen opening ...\n\n[BUG] Cowork: \"Failed to start Claude's workspace\" — VM service not running, persists after reboot#27801 ... The error persists even after rebooting the computer. The Cowork UI still loads (the prompt input and model selector are visible), but the workspace VM cannot start, making Cowork completely unusable. This appears related to the ongoing MCP/Cowork regression introduced in Claude Desktop v1.1.3189 (build 2026-02-14), which has also broken mcp-registry and Claude in Chrome MCP connections (see issue #27492). aThe Cowork workspace VM should start successfully when Cowork is opened. The service should be running reliably and not require workarounds to start. Error shown in Cowork UI: \"Failed to start Claude's workspace VM service not running. The service failed to start. Restarting Claude or your computer sometimes resolves this. If it persists, you can reinstall the workspace or share your debug logs to help us improve.\"\n\na1. Open Claude Desktop (latest version) 2. Click on Cowork mode 3. 3. Observe the error banner: \"Failed to start Claude's workspace — VM service not running. The service failed to start.\" 4. 4. Reboot the computer 5. 5. Re-open Claude Desktop and switch to Cowork 6. 6. Error banner appears again — the issue persists after reboot ... This issue is related to the ongoing Cowork/MCP regression introduced in Claude Desktop v1.1.3189 (Feb 13-14, 2026). See also issue #27492 which documents mcp-registry and Claude in Chrome MCP connection failures in Cowork. ... The UI suggests restarting or reinstalling the workspace, but the error persists after a full computer reboot. Screenshot of the error attached below.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/27801",
        "search_provider": "anthropic",
        "age": "4 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Cowork workspace bricked after Chrome automation task on Windows 11 Home, no recovery path · Issue #25663 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/25663",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "If a workspace becomes corrupted, &quot;Clear cache and restart&quot; or &quot;Reinstall workspace&quot; should actually fix it. If Windows 11 Home is no longer a supported platform, users should receive a clear message about that, not a cryptic VirtioFS mount error.\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? I'm a Max plan...\n\nbugSomething isn't workingSomething isn't workinginvalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Code ... I'm a Max plan subscriber who joined specifically for Cowork and was actively using it with no issues until today. During a Cowork session involving Chrome automation and screenshot capture, the task struggled to complete, and afterward the workspace became permanently broken. Every task now fails immediately with: This task didn't load properly CLI output was not valid JSON. This may indicate an error during startup. Output: sandbox-helper: host share not mounted at /mnt/.virtiofs-root/shared: not a mount point No recovery is possible from the UI.\n\nCleared cache and restarted via Help > Troubleshooting > Clear cache and restart Manually deleted the VM bundle at C:\\Users<user>\\AppData\\Local\\Packages\\Claude_pzs8sxjxfjjc\\LocalCache\\Roaming\\Claude\\vm_bundles\\claudevm.bundle Relaunched Claude Desktop, which triggered a full workspace reinstall After reinstall completed, workspace fails with a new error: \"Failed to start Claude's workspace — VM service not running. The service failed to start.\" A fresh VM bundle download still cannot start the VM service. A single failing task should not be able to brick the entire workspace beyond recovery. If a workspace becomes corrupted, \"Clear cache and restart\" or \"Reinstall workspace\" should actually fix it. If Windows 11 Home is no longer a supported platform, users should receive a clear message about that, not a cryptic VirtioFS mount error. Cowork was working on this same system prior to today.\n\nFailed to start Claude's workspace VM service not running. The service failed to start. Restarting Claude or your computer sometimes resolves this. If it persists, you can reinstall the workspace or share your debug logs to help us improve. ... OS: Windows 11 Home, version 22H2 Hyper-V: Not available (Windows Home edition) Windows Hypervisor Platform: Not enabled Subscription: Max plan Note: Cowork was functional on this exact system configuration prior to this failure. No system changes were made. ... bugSomething isn't workingSomething isn't workinginvalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Code ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/25663",
        "search_provider": "anthropic",
        "age": "February 14, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] ENOSPC: no space left on device - Cowork workspace stuck at 75% on Windows 10 · Issue #34602 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/34602",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "ENOSPC: no space left on device, write Restarting Claude or your computer sometimes resolves this. If it persists, you can reinstall the workspace or share your debug logs to help us improve.\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Cowork workspa...\n\nCowork workspace fails to start every time. Gets stuck at around 75% and then shows ENOSPC: no space left on device error. ... Nothing works. Please fix this bug. The Cowork workspace should start up successfully and be ready to use. ENOSPC: no space left on device, write Restarting Claude or your computer sometimes resolves this. If it persists, you can reinstall the workspace or share your debug logs to help us improve. ... Nothing has worked. The error appears every single time at around 75% of workspace setup. ... area:coworkbugSomething isn't workingSomething isn't workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/34602",
        "search_provider": "anthropic",
        "age": "5 days ago"
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
      "text": "Clean install Claude Desktop (or reinstall after removing previous version) Open Claude Desktop Switch to Cowork tab Workspace setup begins (&quot;Setting up Claude&#x27;s workspace...&quot;) Submit a task before or shortly after workspace setup completes ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Claude Desktop...\n\nClean install Claude Desktop (or reinstall after removing previous version) Open Claude Desktop Switch to Cowork tab Workspace setup begins (\"Setting up Claude's workspace...\") Submit a task before or shortly after workspace setup completes Observe API 500 error and \"This task didn't load properly\" message App becomes unresponsive/freezes, requiring force quit On relaunch, various error messages appear ...\n\nProcess | CPU % | Memory (RSS) -- | -- | -- Claude (main) | 5.5–7.2% | 139–186 MB (fluctuating) Claude Helper (Renderer — Cowork UI) | 0.0% | 123–280 MB (spiking) Claude Helper (Renderer) | 0.0% | ~65 MB Claude Helper (Renderer) | 0.0% | ~65 MB Claude Helper (Network) | 0.0% | ~55 MB Claude Helper (GPU) | 0.0% | ~70 MB Claude Helper (Audio) | 0.0% | ~38 MB · Notable: The Cowork renderer process spiked from 123MB to 280MB and back, suggesting it was loading and then crashing. Feature flags from the renderer process confirm Cowork VM is active: ... [BUG] Claude Desktop 1.1.3189 severe UI lag and mouse stutter on Windows — performance regression after update #26302 — Cowork VM boots on every launch even when unused, consuming background resources (same VM behavior, Windows) Cowork feature creates 10GB VM bundle that severely degrades performance #22543 — Cowork feature creates 10GB VM bundle that severely degrades performance ·\n\nProcess Data at Time of Failure Claude Desktop processes running during the failed session: ProcessCPU %Memory (RSS)Claude (main)5.5–7.2\u00139–186 MB (fluctuating)Claude Helper (Renderer — Cowork UI)0.0\u00123–280 MB (spiking)Claude Helper (Renderer)0.0%~65 MBClaude Helper (Renderer)0.0%~65 MBClaude Helper (Network)0.0%~55 MBClaude Helper (GPU)0.0%~70 MBClaude Helper (Audio)0.0%~38 MB Notable: The Cowork renderer process spiked from 123MB to 280MB and back, suggesting it was loading and then crashing.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/26646",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Cowork Windows - Cannot connect to Claude API from workspace (Windows 11 Home) · Issue #24918 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/24918",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "It&#x27;s unclear if Cowork Windows officially supports Windows 11 Home or requires Pro/Enterprise for Hyper-V · Would appreciate clarification on minimum Windows edition requirements ... Hey folks, we just pushed out a new update today v1.1.4328 that should fix, well, most of these networking issues. If you&#x27;re still facing &quot;Cannot connect to Claude API&quot; please update to v1.1.4328 or higher and give it a go 🤞 ... area:apibugSomething isn&#x27;t workingSomething isn&#x27;t workinghas reproHas detailed reproduction stepsHas detailed reproduction stepsoncallplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? After Cowork W...\n\nAfter Cowork Windows launch (Feb 10, 2026), Cowork consistently fails to connect to the Claude API on Windows 11 Home. The workspace attempts to start but always ends with \"ワークスペースからClaude APIに接続できません\" (Cannot connect to Claude API from workspace). Regular Chat mode works perfectly. Only Cowork is affected. ... Windows Features: Virtual Machine Platform ✅, Windows Hypervisor Platform ✅, Hyper-V ❌ (not available on Home) ... Cowork workspace should start successfully and connect to the Claude API, allowing task execution — the same way regular Chat mode works without issues. Error messages appear in this order: 1. \"申し訳ございません。Claude APIへの接続に時間がかかっています...\" (Taking longer than expected to connect to Claude API) 2.\n\nIt's unclear if Cowork Windows officially supports Windows 11 Home or requires Pro/Enterprise for Hyper-V · Would appreciate clarification on minimum Windows edition requirements ... Hey folks, we just pushed out a new update today v1.1.4328 that should fix, well, most of these networking issues. If you're still facing \"Cannot connect to Claude API\" please update to v1.1.4328 or higher and give it a go 🤞 ... area:apibugSomething isn't workingSomething isn't workinghas reproHas detailed reproduction stepsHas detailed reproduction stepsoncallplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...\n\n\"Claude のワークスペースの起動に失敗しました - ワークスペースからClaude APIに接続できません\" (Failed to start workspace - Cannot connect to Claude API from workspace) Previously also saw (before installing WSL2): - \"お使いのコンピュータがClaudeのワークスペースへのネットワーク接続を提供していません\" (Computer is not providing network connection to workspace) Note: After installing WSL2, the error changed from \"network not provided\" to \"cannot connect to API\", suggesting the VM can now get network access but something still blocks the API connection. Install Claude Desktop on Windows 11 Home (latest version, Feb 2026) ... This is a Day 1 Windows launch issue. Would appreciate clarification on whether Windows 11 Home is officially supported or if Hyper-V (Pro/Enterprise) is required. ... Claude Desktop latest version (Windows, downloaded Feb 11, 2026). This is Cowork on Claude Desktop, not Claude Code CLI.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/24918",
        "search_provider": "anthropic",
        "age": "February 11, 2026"
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
      "text": "Ensure the Claude Desktop app was open throughout the entire task. If the app was closed or your computer went to sleep, the session may have ended. Cowork consumes more usage than standard chat.\n\nCowork requires the latest version of Claude for Windows. Download or update at claude.com/download. Windows arm64 is not supported. Cowork uses the same agentic architecture that powers Claude Code, now accessible within Claude Desktop and without opening the terminal. Instead of responding to prompts one at a time, Claude can take on complex, multi-step tasks and execute them on your behalf. With Cowork, you can describe an outcome, step away, and come back to finished work—formatted documents, organized files, synthesized research, and more. With scheduled tasks, Claude can complete work for you automatically, which isn't possible in regular chats outside of Cowork. ... Cowork is a research preview with unique risks due to its agentic nature and internet access. Cowork respects your current network egress permissions. Network egress permissions don't apply to the web search tool.\n\nFor important limitations and considerations for Team and Enterprise organizations using Cowork, see Cowork for Team and Enterprise plans. Direct local file access: Claude can read from and write to your local files without manual uploads or downloads. Sub-agent coordination: Claude breaks complex work into smaller tasks and coordinates parallel workstreams to complete them. Professional outputs: Generate polished deliverables like Excel spreadsheets with working formulas, PowerPoint presentations, and formatted documents. Long-running tasks: Work on complex tasks for extended periods without conversation timeouts or context limits interrupting your progress. Scheduled tasks: Create and save tasks that you can have Claude run on-demand, or automatically on a cadence of your choosing. Spreadsheets and presentations: Cowork can produce spreadsheets and slides that can be further edited with Claude for Excel and Powerpoint.\n\nFolder instructions add project-specific context to Cowork when you select a local folder. Claude can also update these on its own during a session. Plugins customize how Claude works for your role, team, and company in Cowork. Each one bundles skills, connectors, and sub-agents into a single package. For details on finding, installing, and customizing plugins, see Use plugins in Cowork. You can set up tasks that Claude runs automatically or on demand. To schedule a task, type /schedule in any Cowork task. You can also click \"Scheduled\" in the left sidebar to view, create, and manage your scheduled tasks. Scheduled tasks only run while your computer is awake and the Claude Desktop app is open. For more in-depth details, see Schedule recurring tasks in Cowork. Working on tasks with Cowork consumes more of your usage allocation than chatting with Claude.\n\nThis message is expected and indicates that Cowork is updating to the most recent version to apply any fixes and improvements. Ensure the Claude Desktop app was open throughout the entire task. If the app was closed or your computer went to sleep, the session may have ended. Cowork consumes more usage than standard chat. Try using standard chat for simpler tasks and reserve Cowork for complex, multi-step work that benefits from file access. Check that you've granted Claude the appropriate file access permissions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13345190-get-started-with-cowork",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[BUG] Multiple Issues with Claude Cowork - Failed to start Claude's Workspace · Issue #28092 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/28092",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "I am trying to use Claude cowork Issue 1: Failed to start Claude&#x27;s workspace Can&#x27;t reach the Claude API from Claude&#x27;s workspace. I fixed the first issue but then I am getting the below issue. Issue 2: Filed to start Claude&#x27;s workspace failed to create network endpoint: HcnCreateEndpoint failed with HRESULT 0x800706bf · There are multiple issues popping up when I try to fix something. ... area:coworkbugSomething isn&#x27;t workingSomething isn&#x27;t workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? I am trying to...\n\nI am trying to use Claude cowork Issue 1: Failed to start Claude's workspace Can't reach the Claude API from Claude's workspace. I fixed the first issue but then I am getting the below issue. Issue 2: Filed to start Claude's workspace failed to create network endpoint: HcnCreateEndpoint failed with HRESULT 0x800706bf · There are multiple issues popping up when I try to fix something. ... area:coworkbugSomething isn't workingSomething isn't workingplatform:windowsIssue specifically occurs on WindowsIssue specifically occurs on Windows ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/28092",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
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
      "text": "Start-Service CoworkVMService # ... in your new subnet (e.g., 172.24.0.x). Open the cowork app and after a short while, the VM should load and your Cowork workspace should function....\n\nIt looks like this is hardcoded, and post reboot Cowork has reset all the networking configuration. After resetting itself, it broke my WSL/Docker networking and was repaired by replacing the vswitch again · The other day I ran into an interesting problem with Claude's new Cowork feature. For those not familiar, Cowork is Claude's local development environment that runs in a lightweight VM on your machine. It's pretty neat - except when it decides your network is its network. The issue? Claude Cowork uses a seemlingly hardcoded network range of 172.16.0.0/24 for its internal NAT network. If you're on a home or corporate network (or have a VPN) that also uses this range, the Cowork VM can't access the internet. If you're like me, you might also start to break your own netowork connectivity. Anyway, routing conflicts ensue, and you're left with a very expensive text editor.\n\nLuckily, this is definitely fixable, but it requires mucking around with Windows Host Network Service (HNS), taking ownership of MSIX package files, and manually creating some of Coworks VHDX files. If that sounds like too much mucking around... well, you're not wrong. But it's also the only way I've found to make this work. Others on anthropics/claude-code github appear to be having similar pain: Searching for smol-bin on shows 15 issues at the time I wrote this (link) ... The fix involves creating a new HNS network on a non-conflicting subnet and convincing Cowork to use it instead. ... First, we need the HNS PowerShell module. Some HNS powershell cmdlets may be available by default, but the ones you need to create won't usually be. You can install the additional module, and you'll need to adjust your execution policy if you haven't already. In an Administrative (read: elevated) powershell session: # Allow script execution for current user Set-ExecutionPolicy -ExecutionPolicy RemoteS\n\nNow we need to stop Cowork and remove the conflicting network. This is the nuclear option, but it's necessary. # Stop all Claude processes Stop-Process -Name \"cowork-svc\" -Force -ErrorAction SilentlyContinue Stop-Process -Name \"Claude\" -Force -ErrorAction SilentlyContinue # Kill the Cowork VM hcsdiag kill cowork-vm # Wait for cleanup Start-Sleep -Seconds 3 # Get the conflicting network ID $broken_cowork_network = Get-HnsNetwork | Where-Object {$_.Name -eq \"cowork-vm-nat\"} # Remove it (replace with your actual ID) Remove-HnsNetwork -InputObjects $broken_cowork_network · Here's where we create the replacement network. I'm using 172.24.0.0/24, but you can use any subnet that doesn't conflict with your network. Common safe options include 10.200.0.0/24 or 192.168.200.0/24. Your mileage may vary. For those less familiar with addressing, we usually set the gateway address to the first address of the subnet.\n\nRestart the claude app (and/or the Claude service, which is actually cowork-svc.exe) and you'll see the VM start, but fail again. Have another look at the logs and you'll probably see it complain about failing to copy smol-bin.vhdx. And this is where things get interesting. The Cowork service expects to find smol-bin.x64.vhdx in a specific location within the MSIX package, but the file structure doesn't match. I noticed on github, other users complaining of issues related to EFS encryption. In my case, the source was not EFS encrypted. It was pretty easy to check... PS C:\\Users\\elliotsegler> cipher.exe /c \"C:\\Program Files\\WindowsApps\\Claude_1.1.3189.0_x64__pzs8sxrjxfjjc\\app\\resources\\smol-bin.x64.vhdx\" Listing C:\\Program Files\\WindowsApps\\Claude_1.1.3189.0_x64__pzs8sxrjxfjjc\\app\\resources\\ New files added to this directory will not be encrypted. U smol-bin.x64.vhdx ·",
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
      "title": "[BUG] Claude Cowork conflict with Mac OS 26 · Issue #23830 · anthropics/claude-code",
      "url": "https://github.com/anthropics/claude-code/issues/23830",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Cowork workspace fails to load since updating to macOS 26.3. The VM boots successfully but hangs at the guest_vsock_connect step for 60 seconds, then times out and retries in a loop. This started around 3 Feb after installing macOS 26.3 Beta 3, and persists on macOS 26.3 final (released 6 Feb). C laude Cowork should launch as usual but it doesn&#x27;t!\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? Cowork workspa...\n\nCowork workspace fails to load since updating to macOS 26.3. The VM boots successfully but hangs at the guest_vsock_connect step for 60 seconds, then times out and retries in a loop. This started around 3 Feb after installing macOS 26.3 Beta 3, and persists on macOS 26.3 final (released 6 Feb). C laude Cowork should launch as usual but it doesn't!\n\nFrom cowork_vm_node.log: [VM:steps] guest_vsock_connect started [VM:start] Connection timeout, last completed step: vm_boot [VM:start] Startup failed: Error: VM connection timeout after 60 seconds From cowork_vm_swift.log: [warn] Timeout waiting for VM to stop (state: 1), proceeding with cleanup - Before 3 Feb: Cowork worked normally - 3-4 Feb: Intermittent vsock timeouts (macOS 26.3 Beta 3 installed 27 Jan) - 6 Feb 13:44: One successful connection (took 8.8s, slower than usual) - 6 Feb 15:59+: 10+ consecutive timeouts, no recovery - Each failed retry also fails to cleanly stop the previous VM - vmnet gateway IP increments each retry (67.1, 68.1, 69.1...) as resources don't release · Just open Claude Cowork with the latest version of OS26 ... bugSomething isn't workingSomething isn't workinghas reproHas detailed reproduction stepsHas detailed reproduction stepsplatform:macosIssue specifically occurs on macOSIssue specifically occurs on macOS ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/23830",
        "search_provider": "anthropic",
        "age": "February 6, 2026"
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
      "text": "Cowork consistently fails during workspace setup with an RPC error indicating the VM user&#x27;s home directory does not exist. This occurs 100% of the time, across completely fresh sessions, even after full cache clearing and sign-out/sign-in.\n\nPreflight Checklist I have searched existing issues and this hasn't been reported yet This is a single bug report (please file separate reports for different bugs) I am using the latest version of Claude Code What's Wrong? [BUG] Cowork V...\n\nCowork consistently fails during workspace setup with an RPC error indicating the VM user's home directory does not exist. This occurs 100% of the time, across completely fresh sessions, even after full cache clearing and sign-out/sign-in. The workspace setup progress bar begins (reaches ~17–20%) and then fails with: RPC error: ensure user: user <session-name> should already exist but does not, and recovery failed: home directory /sessions/<session-name> does not exist: stat /sessions/<session-name>: no such file or directory · This has been reproduced with two different session identities, confirming the issue is not tied to a specific stale session: ... rm -rf ~/Library/Application\\ Support/Claude/Cache rm -rf ~/Library/Application\\ Support/Claude/Code\\ Cache rm -rf ~/Library/Application\\ Support/Claude/vm_bundles rm -rf ~/Library/Application\\ Support/Claude/sessions ...\n\nCowork should successfully provision the VM workspace and allow task execution. The VM backend fails to create or locate the user's home directory (/sessions/<session-name>), and recovery also fails. This appears to be a server-side VM provisioning issue, as all local cleanup steps have no effect. Regular Chat mode works perfectly — this is Cowork-specific · The error suggests the backend expects the user directory to already exist but it was never created ... Prior to the RPC error, other connection errors were observed (ECONNRESET, ERR_QUIC_PROTOCOL_ERROR) which may or may not be related ... bugSomething isn't workingSomething isn't workinginvalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Codeplatform:macosIssue specifically occurs on macOSIssue specifically occurs on macOS ...\n\nbugSomething isn't workingSomething isn't workinginvalidIssue doesn't seem to be related to Claude CodeIssue doesn't seem to be related to Claude Codeplatform:macosIssue specifically occurs on macOSIssue specifically occurs on macOS ... Cowork consistently fails during workspace setup with an RPC error indicating the VM user's home directory does not exist. This occurs 100% of the time, across completely fresh sessions, even after full cache clearing and sign-out/sign-in. The workspace setup progress bar begins (reaches ~17–20%) and then fails with: RPC error: ensure user: user <session-name> should already exist but does not, and recovery failed: home directory /sessions/<session-name> does not exist: stat /sessions/<session-name>: no such file or directory · This has been reproduced with two different session identities, confirming the issue is not tied to a specific stale session: ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/issues/23991",
        "search_provider": "anthropic",
        "age": "February 7, 2026"
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

The user is seeing the "Setting up Claude's workspace" screen in Cowork that's been stuck. This is a known issue. Let me give them practical troubleshooting steps.

</details>

This is a known issue with Cowork's workspace VM setup. Cowork runs on a lightweight VM on your machine, and the "Setting up Claude's workspace" screen gets stuck when that VM fails to boot or connect properly. Common causes include network conflicts, disk space issues, or VM service failures.

Here's what to try, in order of escalation:

**1. Restart Claude Desktop completely** — close the app fully (not just minimize), then reopen and switch to Cowork again. The setup message is expected and indicates Cowork is updating to the most recent version, but it shouldn't take more than a couple minutes normally.

**2. Reboot your computer** — this clears any stale VM processes that might be blocking the workspace from starting.

**3. Clear cache and reinstall the workspace** — go to Help → Troubleshooting → "Clear cache and restart." This forces a fresh workspace setup.

**4. Check your disk space** — some users hit an "ENOSPC: no space left on device" error that causes the workspace to get stuck around 75%. The VM bundle is quite large (around 10+ GB), so make sure you have plenty of free space.

**5. Check for network conflicts (Windows)** — Cowork uses a hardcoded network range of 172.16.0.0/24 for its internal NAT network, and if your home or corporate network (or VPN) also uses this range, the VM can't access the internet. If you're on a VPN, try disconnecting it before launching Cowork.

**6. Update Claude Desktop** — make sure you're on the latest version, as Anthropic has pushed updates (like v1.1.4328) that fix networking issues.

Are you on Windows or Mac? That would help narrow down the most likely fix for your situation.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0b58-b62d-775e-b138-a9c4d5c13e24",
  "updated_at": "2026-03-20T13:04:36.152395Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0b58-b62d-7c32-9008-320d1c5cbceb"
}
```

</details>
