# Claude Desktop update information

## Export metadata (verbatim)

```json
{
  "uuid": "78b1976e-a705-45d8-8f75-b43ac8c4d4f7",
  "name": "Claude Desktop update information",
  "summary": "**Conversation Overview**\n\nThe person asked Claude to fetch and summarize the latest update information for Claude Desktop. Claude used web search and web fetch tools to retrieve the official Anthropic release notes from support.claude.com, then compiled a structured overview of recent updates spanning January through March 2026. The response covered major feature releases including computer use capability in Cowork and Claude Code (March 23), persistent Cowork threads (March 17), inline chart and visualization creation (March 12), Excel and PowerPoint add-in improvements (March 11), memory from chat history extended to all users (March 2), scheduled tasks and a plugin marketplace (February), new model releases including Claude Sonnet 4.6 and Claude Opus 4.6, and the initial Cowork research preview rollout to Max and Pro plan users in January. The conversation was informational in nature, with no follow-up questions or corrections from the person.\n\n**Tool Knowledge**\n\nWeb fetch using the direct URL `https://support.claude.com/en/articles/12138966-release-notes` with `html_extraction_method: markdown` successfully retrieved structured release note content from Anthropic's official support documentation. This URL is the canonical source for Claude Desktop release notes and returned well-organized, chronological update information suitable for summarization.",
  "created_at": "2026-03-31T06:18:31.264438Z",
  "updated_at": "2026-03-31T06:19:01.135278Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-31T06:18:33.261353Z

Fetch the new update information of Claude Desktop for me. What's the updates?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d428b-317c-75bc-9603-a92ef041e5d8",
  "updated_at": "2026-03-31T06:18:33.261353Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-31T06:19:01.121278Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants to know about recent updates to Claude Desktop. Let me search for this information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-31T06:18:35.856290Z",
  "stop_timestamp": "2026-03-31T06:18:36.013094Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_018G7izfX8LAgBf1dc5cL5Mm",
  "name": "web_search",
  "input": {
    "query": "Claude Desktop app update 2026"
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
  "tool_use_id": "toolu_018G7izfX8LAgBf1dc5cL5Mm",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Use Claude Code Desktop - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/desktop",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "If the CLI works but Desktop does not, quit the desktop app completely, not just close the window, then reopen and sign in again. Check your internet connection and proxy settings. If the app opens but shows a blank or unresponsive screen: Restart the app. Check for pending updates. The app auto-updates on launch. On Windows, check Event Viewer for crash logs under Windows Logs → Application. If you see Failed to load session, the selected folder may no longer exist, a Git repository may require Git LFS that isn’t installed, or file permissions may prevent access. Try selecting a different folder or restarting the app. If Claude can’t find tools like npm, node, or other CLI commands, verify the tools work in your regular terminal, check that your shell profile properly sets up PATH, and restart the desktop app to reload environment variables.\n\nGet more out of Claude Code Desktop: computer use, Dispatch sessions from your phone, parallel sessions with Git isolation, visual diff review, app previews, PR monitoring, connectors, and enterprise configuration. ... The Code tab within the Claude Desktop app lets you use Claude Code through a graphical interface instead of the terminal. Desktop adds these capabilities on top of the standard Claude Code experience: ... New to Desktop? Start with Get started to install the app and make your first edit. This page covers working with code, computer use, managing sessions, extending Claude Code, scheduled tasks, and configuration. It also includes a CLI comparison and troubleshooting. Before you send your first message, configure four things in the prompt area: Environment: choose where Claude runs. Select Local for your machine, Remote for Anthropic-hosted cloud sessions, or an SSH connection for a remote machine you manage.\n\nCheck back anytime to see progress or steer Claude in a different direction. You can also monitor remote sessions from claude.ai/code or the Claude iOS app. Remote sessions also support multiple repositories. After selecting a cloud environment, click the + button next to the repo pill to add additional repositories to the session. Each repo gets its own branch selector. This is useful for tasks that span multiple codebases, such as updating a shared library and its consumers. See Claude Code on the web for more on how remote sessions work. The Continue in menu, accessible from the VS Code icon in the bottom right of the session toolbar, lets you move your session to another surface: Claude Code on the Web: sends your local session to continue running remotely. Desktop pushes your branch, generates a summary of the conversation, and creates a new remote session with the full context.\n\nIf the CLI works but Desktop does not, quit the desktop app completely, not just close the window, then reopen and sign in again. Check your internet connection and proxy settings. If the app opens but shows a blank or unresponsive screen: Restart the app. Check for pending updates. The app auto-updates on launch. On Windows, check Event Viewer for crash logs under Windows Logs → Application. If you see Failed to load session, the selected folder may no longer exist, a Git repository may require Git LFS that isn’t installed, or file permissions may prevent access. Try selecting a different folder or restarting the app. If Claude can’t find tools like npm, node, or other CLI commands, verify the tools work in your regular terminal, check that your shell profile properly sets up PATH, and restart the desktop app to reload environment variables.\n\nPATH not updated after install: open a new terminal window. PATH updates only apply to new terminal sessions. Concurrent installation error: if you see an error about another installation in progress but there isn’t one, try running the installer as Administrator. ARM64: Windows ARM64 devices are fully supported. The Cowork tab requires Apple Silicon (M1 or later) on macOS. On Windows, Cowork is available on all supported hardware. The Chat and Code tabs work normally on Intel Macs. Remote sessions can create branches that don’t exist on your local machine. Click the branch name in the session toolbar to copy it, then fetch it locally: git fetch origin <branch-name> git checkout <branch-name> ... Visit the Claude support center When filing a bug, include your desktop app version, your operating system, the exact error message, and relevant logs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/desktop",
        "search_provider": "anthropic",
        "age": "6 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Release notes | Claude Help Center",
      "url": "https://support.claude.com/en/articles/12138966-release-notes",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "... We’ve improved our Claude for Excel and Claude for PowerPoint add-ins. They can now share the full context of your conversation, so every action Claude takes in one application is informed by everything that’s happened in the other.\n\nWe’ve updated Claude for Excel so it uses Opus 4.6 and supports native Excel operations such as pivot table editing and conditional formatting. See our updated article for more information: Using Claude for Excel. ... Cowork is now available to Pro plan users on Claude Desktop (macOS only). Claude Code access added to Team plan Standard seats · We’re now including Claude Code access with every Team plan standard seat. Refer to this article for more information: Purchasing and managing seats on Team plans. Opus 4 and 4.1 deprecated from Claude and Claude Code · We’ve removed Claude Opus 4 and 4.1 from the Claude model selector and Claude Code. Refer to this article for further details and recommendations: Adapting to new model personas after deprecations. Cowork research preview on Claude Desktop (macOS only) for Max plans · Cowork brings Claude Code's agentic capabilities to the Claude desktop app for knowledge work beyond coding.\n\nClaude can now connect with iOS and Android apps to draft calendar events, help you find locations, and manage reminders (iOS only). See updates to the following two articles for more information: ... A new API tool that allows Claude to execute Python code in a secure, sandboxed environment. Refer to our docs for more information: Code execution tool. ... An experimental browser extension that allows Claude to read, click, and navigate websites alongside you. See Getting Started with Claude in Chrome. ... Allows Team and Enterprise plans to enable/disable public desktop extensions and upload custom extensions. See Admin Controls for Desktop Extensions. ... Claude users with free, Pro, or Max plans can generate an embed code for any published artifacts. Premium seats with Claude Code for Team and Enterprise plans · Introduced a premium seat tier for Team and Enterprise plans offering more usage and access to Claude Code.\n\nUsers on Pro and Max plans can access a persistent agent thread via Claude Desktop or Claude for iOS/Android to manage tasks in Cowork. We're rolling this out to Max plans starting today, and Pro plans over the next two days. For more information, see Assign tasks to Claude from anywhere in Cowork. Claude creates interactive charts, diagrams and visualizations · Claude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see Custom visuals in chat. ... We’ve improved our Claude for Excel and Claude for PowerPoint add-ins. They can now share the full context of your conversation, so every action Claude takes in one application is informed by everything that’s happened in the other. We also added support for skills in the add-ins, and the ability for Amazon Bedrock, Google Cloud’s Vertex AI, or Microsoft Foundry users to connect to them via an LLM gateway.\n\nControl browser actions from Claude Desktop: Start a task in Claude Desktop and let it handle work in the browser without switching windows. Record a workflow: Teach Claude your workflow by recording the steps, and Claude learns to repeat them. Useful for repetitive browser tasks you want to delegate. Console logs: Claude can now read browser console output, helping developers identify and fix errors without switching contexts. Admin controls for Team and Enterprise: Admins can now manage Claude in Chrome at the organization level: ... We released our most powerful frontier model to date. Read our blog post for more information: Introducing Claude Opus 4.5. ... Claude for Excel is now available in beta to all Max, Team, and Enterprise users. We’ve added some additional capabilities, such as support for pivot tables, charts and file uploads, plus a shortcut to quickly open the full Claude app from Excel (ctrl+option+c).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/12138966-release-notes",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Platform - Claude API Docs",
      "url": "https://platform.claude.com/docs/en/release-notes/overview",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude API Docs"
      },
      "is_missing": false,
      "text": "We&#x27;ve introduced data residency controls, allowing you to specify where model inference runs with the inference_geo parameter. US-only inference is available at 1.1x pricing for models released after February 1, 2026.\n\nFor release notes on Claude Apps, see the Release notes for Claude Apps in the Claude Help Center. For updates to Claude Code, see the complete CHANGELOG.md in the claude-code repository. We're retiring the 1M token context window beta for Claude Sonnet 4.5 and Claude Sonnet 4 on April 30, 2026. After that date, requests that include the context-1m-2025-08-07 beta header on these models will return a 400 error. To continue using 1M context windows, migrate to Claude Sonnet 4.6 or Claude Opus 4.6, which support the full 1M token context window at standard pricing with no beta header required. We've added model capability fields to the Models API. GET /v1/models and GET /v1/models/{model_id} now return max_input_tokens, max_tokens, and a capabilities object. Query the API to discover what each model supports. We've launched the display field for extended thinking, letting you omit thinking content from responses for faster streaming.\n\nUpdates to the Claude Platform, including the Claude API, client SDKs, and the Claude Console.\n\nWe've introduced data residency controls, allowing you to specify where model inference runs with the inference_geo parameter. US-only inference is available at 1.1x pricing for models released after February 1, 2026. The 1M token context window is now available in beta for Claude Opus 4.6, in addition to Sonnet 4.5 and Sonnet 4. Long context pricing applies to requests exceeding 200k input tokens. Fine-grained tool streaming is now generally available on all models and platforms (no beta header required). The output_format parameter for structured outputs has been moved to output_config.format. Structured outputs are now generally available on the Claude API for Claude Sonnet 4.5, Claude Opus 4.5, and Claude Haiku 4.5. GA includes expanded schema support, improved grammar compilation latency, and a simplified integration path with no beta header required.\n\nWe announced the deprecation of the Claude Haiku 3 model (claude-3-haiku-20240307), with retirement scheduled for April 19, 2026. We recommend migrating to Claude Haiku 4.5. Read more in model deprecations. We've launched Claude Sonnet 4.6, our latest balanced model combining speed and intelligence for everyday tasks. Sonnet 4.6 delivers improved agentic search performance while consuming fewer tokens. Sonnet 4.6 supports extended thinking and a 1M token context window (beta). See Models & Pricing for details. API code execution is now free when used with web search or web fetch. Sandboxed code execution improves model capability and token efficiency. See the pricing details for standalone usage. The web search tool and programmatic tool calling are now generally available (no beta header required). Web search and web fetch now support dynamic filtering, which uses code execution to filter results before they reach the context window for better performance and reduced token cost.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "search_provider": "anthropic",
        "age": "9 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude by Anthropic - Release Notes - March 2026 Latest Updates - Releasebot",
      "url": "https://releasebot.io/updates/anthropic/claude",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "releasebot.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=releasebot.io",
        "site_name": "Releasebot"
      },
      "is_missing": false,
      "text": "Original source Report a problem ... Anthropic announces Claude can now create custom charts and inline visualizations in responses. Claude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see Custom visuals in chat.\n\nUsers on Pro and Max plans can access a persistent agent thread via Claude Desktop or Claude for iOS/Android to manage tasks in Cowork. We're rolling this out to Max plans starting today, and Pro plans over the next two days. For more information, see Assign tasks to Claude from anywhere in Cowork. Original source Report a problem ... Anthropic announces Claude can now create custom charts and inline visualizations in responses. Claude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see Custom visuals in chat. Original source Report a problem ... Anthropic updates Claude for Excel and PowerPoint add-ins to share full context, add skills, and connect via an LLM gateway with major clouds. We’ve improved our Claude for Excel and Claude for PowerPoint add-ins. They can now share the full context of your conversation, so every action Claude takes in one application is informed by everything that’s happened in the other.\n\nWe introduced the ability to create and schedule both recurring and on-demand tasks in Cowork, as well as a new Customize section in Claude Desktop that groups skills, plugins, and connectors in one place. For more information, see Schedule recurring tasks in Cowork. Original source Report a problem ... We launched a new plugin marketplace and admin controls for Team and Enterprise plans. For more information, refer to these articles: ... We launched our most capable Sonnet model yet, with a full upgrade of the model’s skills across coding, computer use, long-context reasoning, agent planning, knowledge work, and design. Sonnet 4.6 also features a 1M token context window in beta. Read our blog post for more information: Introducing Claude Sonnet 4.6 . Original source Report a problem ... The Enterprise Analytics API provides programmatic access to usage and engagement data for Claude and Claude Code Remote usage within your organization.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://releasebot.io/updates/anthropic/claude",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic's Claude can now browse apps on your desktop to automate tasks | Tech News - Business Standard",
      "url": "https://www.business-standard.com/technology/tech-news/anthropic-claude-ai-agent-browse-apps-on-desktop-automate-tasks-126032400301_1.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "business-standard.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=business-standard.com",
        "site_name": "Business Standard"
      },
      "is_missing": false,
      "text": "With this update, Claude Code and Claude Cowork tools can now open files, browse the web, and use developer tools, moving beyond a purely chat-based experience. The feature is currently available as a research preview on macOS.\n\nTuesday, March 24, 2026 | 11:00 AM ISTहिंदी में पढें · Home / Technology / Tech News / Anthropic's Claude can now browse apps on your desktop to automate tasks · Anthropic's ClaudeAashish Kumar Shrivastava New Delhi · 4 min read Last Updated : Mar 24 2026 | 10:58 AM IST · Anthropic has announced an update to Claude AI, introducing the ability to carry out tasks directly on a user’s computer. With this update, Claude Code and Claude Cowork tools can now open files, browse the web, and use developer tools, moving beyond a purely chat-based experience. The feature is currently available as a research preview on macOS. In a series of posts on X, Anthropic said users can enable Claude to “use your computer to complete tasks,” including opening apps, navigating the browser, and filling in spreadsheets. The company noted that Claude prioritises connected apps such as Slack, Calendar, and other integrations, and in cases where a connector is not available, it will ask for permission before dir\n\nAs shown in a video shared by Claude on X, the updated system can handle a range of tasks across devices. It can be controlled via a smartphone while executing actions on a computer, extracting a presentation file from a system, converting it into a PDF, and attaching it to a calendar invite. It can also start a development server, capture screenshots based on user instructions, and send them within a set deadline. Additionally, Claude can process batches of photos, resize them, and apply edits such as adding logos. Assign a task from your phone, turn your attention to something else, and come back to finished work on your computer. Tell Claude once to scan your email every morning or pull a report every Friday, and it handles it from there. pic.twitter.com/HeaBKnPl8D — Claude (@claudeai) March 23, 2026 · Earlier last month, Anthropic introduced Claude Cowork, an agent-based AI workspace that allows its assistant to go beyond chat and actively handle tasks such as reading, editing, org\n\nClaude AI Update: Anthropic's Claude Code and Cowork can now open files, browse web and control your Mac; feature available for Claude Pro and Max users on macOS.\n\nClaude Code recently made headlines when Anthropic introduced Claude Code Security, a capability built into its AI coding assistant that helps developers identify vulnerabilities by analysing how code behaves, rather than relying only on known threat patterns. Designed for developers and security teams, the tool aims to bring AI-driven insights directly into codebases. The launch gained attention beyond the developer ecosystem after it triggered a market reaction. According to reports, shares of several cybersecurity firms, including CrowdStrike, Zscaler, Okta, Palo Alto Networks, and SailPoint, declined following the rollout, as investors assessed whether AI-driven tools could disrupt parts of the traditional application security market. Topics : artifical intelligence Latest Technology News AI technology · Don't miss the most important news and views of the day. Get them on our Telegram channel ... Stock Market LIVE UpdatesStock to Watch TodayPM Modi in Lok SabhaGold and Silver Rate",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.business-standard.com/technology/tech-news/anthropic-claude-ai-agent-browse-apps-on-desktop-automate-tasks-126032400301_1.html",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code and Cowork can now use your computer",
      "url": "https://www.engadget.com/ai/claude-code-and-cowork-can-now-use-your-computer-210000126.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "engadget.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=engadget.com",
        "site_name": "Engadget"
      },
      "is_missing": false,
      "text": "The latest update will see these AI resources become capable of opening files, using the browser and running dev tools. When enabled, the Claude AI chatbot will first prioritize connectors to supported services such as the Google workplace suite ...\n\nMon, March 23, 2026 at 9:00 PM UTC · Add Engadget on Google · Anthropic · Anthropic announced today that its Claude Code and Claude Cowork tools are being updated to accomplish tasks using your computer. The latest update will see these AI resources become capable of opening files, using the browser and running dev tools. When enabled, the Claude AI chatbot will first prioritize connectors to supported services such as the Google workplace suite or Slack, but if a connector isn't available, it will be able to still execute an assigned task. Claude should ask for permission before taking these actions, but Anthropic still recommended not using this feature to handle sensitive information as a precaution. Claude computer use will initially be available to Claude Pro and Claude Max subscribers on macOS. This feature is still in a research preview, so will continue to be adjusted based on Anthropic's user feedback.\n\nThe latest update will see these AI resources become capable of opening files, using the browser and running dev tools. When enabled, the Claude AI chatbot will first prioritize connectors to supported services such as the Google workplace suite or Slack, but if a connector isn't available, it will be able to still execute an assigned task. Claude should ask for permission before taking these actions, but Anthropic still recommended not using this feature to handle sensitive information as a precaution. Claude computer use will initially be available to Claude Pro and Claude Max subscribers on macOS. This feature is still in a research preview, so will continue to be adjusted based on Anthropic's user feedback. It will also support use with Anthropic's Dispatch feature, which allows a person to message the chatbot in a single continuous conversation across phone and desktop.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.engadget.com/ai/claude-code-and-cowork-can-now-use-your-computer-210000126.html",
        "search_provider": "anthropic",
        "age": "1 week ago"
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
      "text": "Fixed Claude Desktop sessions incorrectly using the terminal CLI&#x27;s configured API key instead of OAuth · Fixed git-subdir plugins at different subdirectories of the same monorepo commit colliding in the plugin cache · Fixed ordered list numbers ...\n\nClaude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. - Releases · anthropics/claude-code\n\nFixed Claude Desktop sessions incorrectly using the terminal CLI's configured API key instead of OAuth · Fixed git-subdir plugins at different subdirectories of the same monorepo commit colliding in the plugin cache · Fixed ordered list numbers not rendering in terminal UI · Fixed a race condition where stale-worktree cleanup could delete an agent worktree just resumed from a previous crash · Fixed input deadlock when opening /mcp or similar dialogs while the agent is running · Fixed Backspace and Delete keys not working in vim NORMAL mode · Fixed status line not updating when vim mode is toggled on or off · Fixed hyperlinks opening twice on Cmd+click in VS Code, Cursor, and other xterm.js-based terminals · Fixed background colors rendering as terminal-default inside tmux with default configuration · Fixed iTerm2 session crash when selecting text inside tmux over SSH ·\n\nMCP servers configured both locally and via claude.ai connectors are now deduplicated — the local config wins · Background bash tasks that appear stuck on an interactive prompt now surface a notification after ~45 seconds · Token counts ≥1M now display as \"1.5m\" instead of \"1512.6k\" Global system-prompt caching now works when ToolSearch is enabled, including for users with MCP tools configured · Fixed voice push-to-talk: holding the voice key no longer leaks characters into the text input, and transcripts now insert at the correct position · Fixed up/down arrow keys being unresponsive when a footer item is focused · Fixed Ctrl+U (kill-to-line-start) being a no-op at line boundaries in multiline input, so repeated Ctrl+U now clears across lines · Fixed null-unbinding a default chord binding (e.g. \"ctrl+x ctrl+k\": null) still entering chord-wait mode instead of freeing the prefix key ·\n\nAdded --channels permission relay — channel servers that declare the permission capability can forward tool approval prompts to your phone · Fixed multiple concurrent Claude Code sessions requiring repeated re-authentication when one session refreshes its OAuth token · Fixed voice mode silently swallowing retry failures and showing a misleading \"check your network\" message instead of the actual error · Fixed voice mode audio not recovering when the server silently drops the WebSocket connection · Fixed CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS not suppressing the structured-outputs beta header, causing 400 errors on proxy gateways forwarding to Vertex/Bedrock · Fixed --channels bypass for Team/Enterprise orgs with no other managed settings configured ... Fixed a race condition where background agent task output could hang indefinitely when the task completed between polling intervals ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/claude-code/releases",
        "search_provider": "anthropic",
        "age": "6 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Desktop App Launch: Latest Update Guide and 3 Business Wins for 2026 | AI News Detail",
      "url": "https://blockchain.news/ainews/claude-desktop-app-launch-latest-update-guide-and-3-business-wins-for-2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "blockchain.news",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=blockchain.news",
        "site_name": "Blockchain News"
      },
      "is_missing": false,
      "text": "According to @claudeai on X, Anthropic is prompting users to update or download the Claude desktop app via claude.com/download, signaling an active desktop rollout for Claude models (source: @claudeai post, Mar 20, 2026).\n\nAccording to @claudeai on X, Anthropic is prompting users to update or download the Claude desktop app via claude.com/download, signaling an active desktop rollout for Claude models (source: @claudeai post, Mar 20, 2026). As reported by Anthropic’s official download page, the desktop client enables faster access to Claude models and native OS integrations, which can streamline enterprise workflows like document summarization, code review, and meeting note generation. According to Anthropic’s product documentation, desktop availability typically improves response latency, clipboard handling, and local file drag and drop—practical gains for knowledge workers and developers. For teams evaluating AI deployment, this launch suggests opportunities to standardize model access on managed devices, pilot desktop-first prompts for repetitive tasks, and track usage analytics to inform broader AI adoption.\n\nAnthropic's Claude AI has made a significant leap in accessibility with the recent announcement of its desktop app, urging users to update or download it via their official channels. On March 20, 2026, Claude's official Twitter account posted an invitation for users to try the app, highlighting a direct link for downloads. This development comes as part of Anthropic's ongoing efforts to expand the reach of its advanced language model, Claude, which is designed for safe and helpful AI interactions. According to Anthropic's announcements, the desktop app aims to provide seamless integration for professionals and businesses, allowing offline capabilities and enhanced productivity tools. This move aligns with the broader trend in the AI industry where companies are shifting from web-based interfaces to dedicated applications to improve user experience and data security.\n\nKey facts include the app's compatibility with major operating systems like Windows and macOS, as reported in various tech news outlets covering the release. The timing of this launch, in early 2026, coincides with a surge in demand for AI tools that can operate independently of constant internet connectivity, addressing concerns over data privacy and operational efficiency in remote work environments. This desktop version builds on Claude's existing web and mobile platforms, potentially incorporating features like real-time collaboration and customizable workflows, as inferred from user feedback on similar AI apps. The announcement has sparked interest among AI enthusiasts and enterprises looking for robust alternatives to competitors like ChatGPT's desktop offerings from OpenAI, which were introduced earlier in 2024 according to industry reports.\n\nIn terms of business implications, the Claude desktop app opens up new market opportunities for monetization and implementation in various sectors. For instance, in the software development industry, developers can leverage Claude's coding assistance features offline, reducing dependency on cloud services and potentially cutting costs by up to 20 percent, based on productivity studies from Gartner in 2025. Market analysis shows that the global AI software market is projected to reach $126 billion by 2025, as per Statista data from 2023 updates, and desktop apps like this could capture a niche in enterprise solutions where security is paramount. Technical details reveal that the app likely utilizes local processing for certain tasks, minimizing latency issues that plague web-based AI, with integration possibilities for tools like Microsoft Office or Google Workspace.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blockchain.news/ainews/claude-desktop-app-launch-latest-update-guide-and-3-business-wins-for-2026",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code March 2026 Full Capability Interpretation: /loop scheduled tasks, Computer Use, and 12 core new features - Apiyi.com Blog",
      "url": "https://help.apiyi.com/en/claude-code-2026-new-features-loop-computer-use-remote-control-guide-en.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "apiyi.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=apiyi.com",
        "site_name": "Apiyi.com Blog"
      },
      "is_missing": false,
      "text": "Key updates to Claude Code&#x27;s core ... 2026: /loop is the most practical new feature: By turning Claude Code into a background worker with Cron-like scheduled tasks, it becomes incredibly valuable for PR reviews and deployment monitoring. Computer Use + Remote Control are changing how we work: With remote Mac desktop control and mobile terminal access, you can now enjoy AI-assisted programming from anywhere. From a coding tool to an Agent platform: Skills, Subagents, Hooks, MCP, and Plugins now form a complete Agent development platform, complementing OpenClaw&#x27;s &quot;lifestyle OS&quot; approach. Claude Code is evolving from &quot;better code completion&quot; into an &quot;autonomous coding agent platform.&quot;...\n\nEven better, Computer Use can be paired with Remote Control. When you're on the go, you can send instructions via the Claude App on your phone, and Claude Code will automatically execute the desktop operations on your Mac. Your code and files never leave your computer; only the chat messages are transmitted through an encrypted channel. ... This is one of the most anticipated features of March 2026. Activated via the /voice command, it uses a \"Push-to-Talk\" mechanism (hold the spacebar to speak) rather than \"always-on\" listening. It currently supports 20 languages, with 10 new ones added in March. Best for: Quickly issuing commands when your hands are busy, dictating complex requirements (often faster than typing), and collaborative Pair Programming sessions. Released as a research preview in February 2026, this feature lets you control your coding session remotely after starting Claude Code in your terminal.\n\nAs of March 2026, Claude Code has evolved from a simple \"AI programming assistant in the terminal\" into a full-fledged autonomous coding agent platform. From /loop scheduled tasks to Computer Use remote desktop control, and from Voice Mode programming to mobile Remote Control, the version has iterated rapidly from 2.1.63 to 2.1.76, with major updates arriving almost weekly. This article systematically organizes all current core capabilities of Claude Code to help you quickly understand the positioning and use cases for each feature. Core Value: By reading this, you'll master the complete 2026 capability map of Claude Code and identify the feature combinations that best fit your workflow. Let's take a look at the overall capability map before diving into the details. Beyond the user-facing features, there have been significant upgrades under the hood: Default Model Upgrade: Opus 4.6 is now the default model, offering a massive boost in reasoning capabilities.\n\nAuthor's Note: A comprehensive breakdown of the latest 2026 capabilities of Claude Code: /loop scheduled tasks, Computer Use remote desktop control, Voice Mode, mobile Remote Control, background Agents, and 12 other core features. As of March 2026, Claude Code has evolved from a simple \"AI programming assistant in the terminal\" into a full-fledged autonomous coding\n\nThe Chrome integration (the claude in chrome extension) is specialized for browser automation—it only works within the Chrome browser. Computer Use, on the other hand, is full desktop control—it can interact with any application, including browsers, file managers, terminals, and system settings. The Chrome integration is more precise but limited in scope, while Computer Use is more versatile, though it's still in a research preview phase. You can also leverage Computer Use tools when performing model invocation via the Claude API through APIYI (apiyi.com). ... You don't have to choose one over the other. Claude Code is a professional coding tool that excels at code reasoning, complex refactoring, and security. OpenClaw is more of a \"lifestyle operating system\" that shines in cross-platform integration (email, calendars, social media, and messaging).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://help.apiyi.com/en/claude-code-2026-new-features-loop-computer-use-remote-control-guide-en.html",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic says Claude can now use your computer to finish tasks for you in AI agent push",
      "url": "https://www.cnbc.com/2026/03/24/anthropic-claude-ai-agent-use-computer-finish-tasks.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "cnbc.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=cnbc.com",
        "site_name": "CNBC"
      },
      "is_missing": false,
      "text": "The company added that it has built the computer use capability &quot;with safeguards that minimize risk,&quot; and that Claude will always request permission before accessing new apps. Users can use Dispatch, a feature it released last week in Claude Cowork. That lets users have a continuous conversation with Claude from a phone or desktop and assign the agent tasks.\n\nThis photograph shows a figurine in front of the logo of the AI assistant \"Claude\" built by the US artificial intelligence safety and research company Anthropic during a photo session in Paris on February 13, 2026. (Photo by Joel Saget / AFP via Getty Images) ... Anthropic's Claude can now use a person's computer to complete tasks as the company looks to create an AI agent that can rival the viral OpenClaw. Users can now message Claude a task from a phone, and the AI agent will then complete that task, Anthropic announced Monday. After being prompted, Claude can open apps on your computer, navigate a web browser and fill in spreadsheets, Anthropic said. One prompt Anthropic demonstrated in a video posted Monday is a user running late for a meeting. The user asks Claude to export a pitch deck as a PDF file and attach it to a meeting invite. The video shows Claude carrying out the task. The latest update from Anthropic underscores the push from AI firms to create so-called \"agents\" that \n\nAnthropic and its rivals are trying to ramp up capabilities of AI agents after OpenClaw went viral earlier this year.\n\nThe company added that it has built the computer use capability \"with safeguards that minimize risk,\" and that Claude will always request permission before accessing new apps. Users can use Dispatch, a feature it released last week in Claude Cowork. That lets users have a continuous conversation with Claude from a phone or desktop and assign the agent tasks.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cnbc.com/2026/03/24/anthropic-claude-ai-agent-use-computer-finish-tasks.html",
        "search_provider": "anthropic",
        "age": "1 week ago"
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

Let me also fetch the official release notes page for more specific details.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-31T06:18:41.281895Z",
  "stop_timestamp": "2026-03-31T06:18:42.590877Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LHjmyC4roktkPtx7dMowWv",
  "name": "web_fetch",
  "input": {
    "url": "https://support.claude.com/en/articles/12138966-release-notes",
    "html_extraction_method": "markdown",
    "text_content_token_limit": 4000
  },
  "message": "Fetching: https://support.claude.com/en/articles/12138966-release-notes",
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
  "tool_use_id": "toolu_01LHjmyC4roktkPtx7dMowWv",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Release notes | Claude Help Center",
      "url": "https://support.claude.com/en/articles/12138966-release-notes",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "Release notes | Claude Help Center\n\n[Skip to main content](#main-content)\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/lupk8zyo/787776/ade321b9d8ff06050cb06ac0049d/d7ef4b66df4ff3851b5de741185c97ab.png)](https://support.claude.com/en/)\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\nSearch for articles...\n\n1. [All Collections](https://support.claude.com/en/)\n2. [Claude](https://support.claude.com/en/collections/4078531-claude)\n3. Release notes\n\n# Release notes\n\nUpdated this week\n\nTable of contents\n\n## March 2026\n\n### March 25, 2026\n\n**Interactive apps in Claude for iOS and Android**\n\nThe Claude mobile app can now connect to fully interactive apps. Pull up live charts, sketch diagrams, and build shareable assets, all rendered visually right in your conversation. For more information, see **[Use interactive connectors in Claude](https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude)**.\n\n### March 23, 2026\n\n**Computer use research preview in Cowork and Claude Code + Dispatch improvements**\n\nUsers on Pro and Max plans can give Claude access to computer use. Claude can open files, run dev tools, point, click, and navigate to what’s on your screen to perform tasks itself—with no setup required. Claude’s new computer use capability makes Dispatch even more helpful by allowing it to use your computer on your behalf while you’re away. For more information, see **[Let Claude use your computer in Cowork](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork)** or our blog post: **[Put Claude to work on your computer](https://claude.com/blog/dispatch-and-computer-use)**.\n\n### March 17, 2026\n\n**Control Cowork from your phone with a persistent thread (research preview for Pro/Max)**\n\nUsers on Pro and Max plans can access a persistent agent thread via Claude Desktop or Claude for iOS/Android to manage tasks in Cowork. We're rolling this out to Max plans starting today, and Pro plans over the next two days. For more information, see **[Assign tasks to Claude from anywhere in Cowork](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork)**.\n\n### March 12, 2026\n\n**Claude creates interactive charts, diagrams and visualizations**\n\nClaude can now create custom charts, diagrams and other visualizations in-line in its responses. For more information, see **[Custom visuals in chat](https://support.claude.com/en/articles/13979539-custom-visuals-in-chat)**.\n\n### March 11, 2026\n\n**Work across Excel and PowerPoint**\n\nWe’ve improved our Claude for Excel and Claude for PowerPoint add-ins. They can now share the full context of your conversation, so every action Claude takes in one application is informed by everything that’s happened in the other. We also added support for skills in the add-ins, and the ability for Amazon Bedrock, Google Cloud’s Vertex AI, or Microsoft Foundry users to connect to them via an LLM gateway. For more information, refer to the following articles:\n\n* **[Work across Excel and PowerPoint](https://support.claude.com/en/articles/13892150-work-across-apps-with-cowork)**\n* **[Use Claude for Excel and PowerPoint with an LLM gateway](https://support.claude.com/en/articles/13945233-use-claude-in-excel-and-powerpoint-with-an-llm-gateway)**\n\n### March 2, 2026\n\n**Memory for free users**\n\nMemory from chat history is now available for all Claude users, including free users. For more information, refer to the following articles:\n\n* **[Use Claude’s chat search and memory to build on previous context](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context#h_c1c0b33879)**\n* **[Import and export your memory from Claude](https://support.claude.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)**\n\n---\n\n## February 2026\n\n### February 25, 2026\n\n**Scheduled tasks in Cowork**\n\nWe introduced the ability to create and schedule both recurring and on-demand tasks in Cowork, as well as a new Customize section in Claude Desktop that groups skills, plugins, and connectors in one place. For more information, see **[Schedule recurring tasks in Cowork](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork)**.\n\n### February 24, 2026\n\n**Cowork plugins and admin controls**\n\nWe launched a new plugin marketplace and admin controls for Team and Enterprise plans. For more information, refer to these articles:\n\n* **[Manage Cowork plugins for your organization](https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization)**\n* **[Use plugins in Cowork](https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization)**\n\n### February 17, 2026\n\n**Claude Sonnet 4.6 launch**\n\nWe launched our most capable Sonnet model yet, with a full upgrade of the model’s skills across coding, computer use, long-context reasoning, agent planning, knowledge work, and design. Sonnet 4.6 also features a 1M token context window in beta. Read our blog post for more information: **[Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)**.\n\n### February 13, 2026\n\n**Analytics API for Enterprise plans**\n\nThe Enterprise Analytics API provides programmatic access to usage and engagement data for Claude and Claude Code Remote usage within your organization. Data is aggregated per organization, per day, and each endpoint returns a snapshot for a single date that you specify. For more information, see **[Access usage data with the Analytics API](https://support.claude.com/en/articles/13694757-access-usage-data-with-the-analytics-api)**.\n\n### February 12, 2026\n\n**Self-serve Enterprise plans**\n\nPreviously, Enterprise plans were only available to customers working with our Sales team. Now, any organization can purchase an Enterprise plan directly on our website with no Sales conversation required. Self-serve Enterprise plans have a single seat type that includes access to Claude, Claude Code, and Cowork. For more information, refer to **[our blog post](https://claude.com/blog/self-serve-enterprise)** or **[What is the Enterprise plan?](https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan)**\n\n### February 5, 2026\n\n**Claude Opus 4.6 launch**\n\nWe’ve upgraded our smartest model and improved its coding skills. Read our blog post for more information: **[Introducing Claude Opus 4.6](http://anthropic.com/news/claude-opus-4-6)**.\n\n**Introducing Claude for PowerPoint**\n\nClaude is now available as an add-in for PowerPoint. Read more here: **[Use Claude for PowerPoint](https://support.claude.com/en/articles/13521390-using-claude-in-powerpoint)**.\n\n**Claude for Excel improvements**\n\nWe’ve updated Claude for Excel so it uses Opus 4.6 and supports native Excel operations such as pivot table editing and conditional formatting. See our updated article for more information: **[Using Claude for Excel](https://support.claude.com/en/articles/12650343-using-claude-in-excel)**.\n\n---\n\n## January 2026\n\n### January 16, 2026\n\n**Cowork research preview expanded to Pro plans**\n\nCowork is now available to Pro plan users on Claude Desktop (macOS only).\n\n**Claude Code access added to Team plan Standard seats**\n\nWe’re now including Claude Code access with every Team plan standard seat. Refer to this article for more information: **[Purchasing and managing seats on Team plans](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats-on-team-plans)**.\n\n**Opus 4 and 4.1 deprecated from Claude and Claude Code**\n\nWe’ve removed Claude Opus 4 and 4.1 from the Claude model selector and Claude Code. Refer to this article for further details and recommendations: **[Adapting to new model personas after deprecations](https://support.claude.com/en/articles/12738598-adapting-to-new-model-personas-after-deprecations)**.\n\n### January 12, 2026\n\n**Cowork research preview on Claude Desktop (macOS only) for Max plans**\n\nCowork brings Claude Code's agentic capabilities to the Claude desktop app for knowledge work beyond coding. It runs locally on your computer in an isolated VM, enabling direct access to local files and MCP integrations.\n\nRefer to this article to learn more: **[Getting started with Cowork](https://support.claude.com/en/articles/13345190-getting-started-with-cowork)**.\n\n**Health and fitness data on Claude Mobile**\n\nClaude can now read and analyze your health and fitness data on iOS and Android. Ask Claude about your activity patterns, workout trends, sleep quality, and more—Claude will provide insights and visualizations using native charts.\n\nHealth features are available on Pro and Max plans and currently limited to users in the US. On Android, Health Connect and Android 14 or later are required.\n\nSee the following articles for more information:\n\n* **[Using Claude with iOS Apps](https://support.claude.com/en/articles/11869619-using-claude-with-ios-apps)**\n* **[Using Claude with Android Apps](https://support.claude.com/en/articles/11869629-using-claude-with-android-apps)**\n\n**HIPAA-ready Enterprise plans**\n\nWe now offer a HIPAA-ready version of Claude that is available for organizations with Enterprise plans that choose to process protected health information (PHI) through Claude.\n\nSee **[HIPAA-ready Enterprise plans](https://support.claude.com/en/articles/13296973-hipaa-ready-enterprise-plans)** for more information.\n\n---\n\n## December 2025\n\n### December 18, 2025\n\n**Skills for organizations, partners, and the ecosystem**\n\nIn October, we introduced skills—a way to teach Claude repeatable workflows tailored to how you work. Skills are now easier to deploy, discover, and build with **[organization-wide management for Team and Enterprise plans](https://support.claude.com/en/articles/13119606-managing-skills-as-an-admin)**, a **[directory](https://claude.com/connectors)** of partner-built skills, and an open standard (**[Agent Skills](https://agentskills.io/home)**) so skills work across AI platforms.\n\n**Claude in Chrome updates**\n\nClaude in Chrome is now available in beta to all paid plan subscribers, including Pro, Team, and Enterprise plans.\n\n* **Claude Code integration:** Build in your terminal with Claude Code, then test and verify in the browser with the Chrome extension. Claude can read console errors, network requests, and DOM state to help debug issues directly.\n* **Control browser actions from Claude Desktop:** Start a task in Claude Desktop and let it handle work in the browser without switching windows.\n* **Record a workflow:** Teach Claude your workflow by recording the steps, and Claude learns to repeat them. Useful for repetitive browser tasks you want to delegate.\n* **Console logs:** Claude can now read browser console output, helping developers identify and fix errors without switching contexts.\n* **Admin controls for Team and Enterprise:** Admins can now manage Claude in Chrome at the organization level:\n\n  + Enable or disable the extension org-wide\n  + Configure allowlists and blocklists to control which sites Claude can access\n  + Manage Claude in Chrome in Admin settings > Browser extension\n\n---\n\n## November 2025\n\n### November 24, 2025\n\n**Claude Opus 4.5 launch**\n\nWe released our most powerful frontier model to date. Read our blog post for more information: **[Introducing Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)**.\n\n**Claude for Excel beta release**\n\nClaude for Excel is now available in beta to all Max, Team, and Enterprise users. We’ve added some additional capabilities, such as support for pivot tables, charts and file uploads, plus a shortcut to quickly open the full Claude app from Excel (ctrl+option+c). We've also made overall improvements to performance, speed, context management, and the general user experience. See **[Use Claude for Excel](https://support.claude.com/en/articles/12650343-claude-in-excel)**.\n\n**Context window compaction**\n\nWe’ve changed our context window functionality to enable infinite-length conversations (with some exceptions) and significantly reduce length limit errors by summarizing earlier messages when a chat approaches its context limit. Read more here: **[Understanding Usage and Length Limits](https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits)**.\n\n**Claude in Chrome updates**\n\nClaude in Chrome is now available in beta to all Max plan subscribers. After months of testing, we're expanding access with the following updates:\n\n* **Scheduled tasks**: Set recurring browser tasks to run automatically on your schedule. Set it once and Claude handles it from there.\n* **Follow a plan**: Approve Claude's plan, then let it execute the entire workflow independently within those approved boundaries, without asking for permission until it's done.\n* **Model selection**: Choose between Haiku 4.5 for speed, Sonnet 4.5 for complex tasks, or Opus 4.5 for maximum reasoning power—switch anytime based on what you need.\n\n---\n\n## October 2025\n\n### October 23, 2025\n\n**Claude’s memory on Max and Pro plans**\n\nMax plan users can now access Claude’s memory capabilities. This feature will roll out to Pro plans gradually over the next two weeks.\n\n### October 15, 2025\n\n**Claude Haiku 4.5 launch**\n\nWe released our fastest, most cost-efficient model – Claude Haiku 4.5. Our latest small model matches Sonnet 4’s performance on coding, computer use, and agent tasks.\n\n**Claude in Chrome updates**\n\n* **Powered by Haiku 4.5:** Claude in Chrome now defaults to Haiku 4.5 so it’s a faster, more responsive experience. You can always switch back to Sonnet 4.5.\n* **Claude handles image uploads for you:** Give Claude an image and tell it where to upload, whether it’s an expense report, form attachment, or a picture upload.\n* **Show Claude exactly what you mean:** Take a screenshot or drag to highlight specific parts of your screen. Point Claude to the exact button, field, or detail—much faster than describing complex layouts in words.\n\n---\n\n## September 2025\n\n### September 29, 2025\n\n**Claude Sonnet 4.5 launch**\n\nWe released our newest model, Sonnet 4.5. This is the best model in the world for real-world agents, coding, and computer use. Read our blog post here: **[Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)**.\n\n**Creating and editing files with Claude for Pro plans and mobile**\n\nPro users can now leverage Claude’s file creation and editing capabilities, and users on all paid plans can access these features on Claude for iOS or Android. See this updated article for more information: **[Create and edit files with Claude](https://s",
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
      "url": "https://support.claude.com/en/articles/12138966-release-notes",
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

Now I have comprehensive information from the official release notes. Let me organize this into a clear summary of recent Claude Desktop updates.

</details>

Here's a summary of recent Claude Desktop updates, drawn from Anthropic's official release notes page (source: [support.claude.com/en/articles/12138966-release-notes](https://support.claude.com/en/articles/12138966-release-notes)):

---

**March 2026 — the most active month:**

On March 23, users on Pro and Max plans gained access to a **computer use research preview** in Cowork and Claude Code. Claude can now open files, run dev tools, point, click, and navigate what's on your screen to perform tasks — with no setup required. This is currently available as a research preview on macOS, and Claude will ask for permission before accessing new apps.

On March 17, a **persistent Cowork thread** became available via Claude Desktop or the mobile apps, letting Pro and Max users assign and manage tasks from anywhere — rolling out to Max first, then Pro.

On March 12, Claude gained the ability to **create custom charts, diagrams, and visualizations inline** in its responses.

On March 11, the **Excel and PowerPoint add-ins** were updated so they now share full conversation context across both applications, with added support for skills and LLM gateway connections for Bedrock, Vertex AI, and Microsoft Foundry users.

On March 2, **memory from chat history** was extended to all Claude users, including free-tier users.

---

**February 2026 highlights:**

Scheduled and recurring tasks in Cowork were introduced on Feb 25, along with a new Customize section in Claude Desktop grouping skills, plugins, and connectors. A plugin marketplace with admin controls for Team/Enterprise launched on Feb 24.

**Claude Sonnet 4.6** launched on Feb 17 with improvements across coding, computer use, long-context reasoning, agent planning, and a 1M-token context window in beta. **Claude Opus 4.6** had launched on Feb 5 with upgraded coding skills.

Claude for PowerPoint was introduced on Feb 5, and Claude for Excel was updated to use Opus 4.6 with support for pivot table editing and conditional formatting.

---

**January 2026 highlights:**

Cowork expanded to Pro plan users on Jan 16 (macOS only), and Claude Code access was added to Team plan standard seats. The Cowork research preview initially launched on Jan 12 for Max plans, running locally in an isolated VM with direct access to local files and MCP integrations.

---

The biggest headline feature is the computer use capability — Anthropic stated it has built this with safeguards that minimize risk, and that Claude will always request permission before accessing new apps. Combined with the Dispatch feature, you can message Claude from your phone and have it execute desktop tasks on your Mac while you're away.

Want me to dig deeper into any specific update?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d428b-317c-7b0a-aaa7-a17b7bad2a3e",
  "updated_at": "2026-03-31T06:19:01.121278Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d428b-317c-75bc-9603-a92ef041e5d8"
}
```

</details>
