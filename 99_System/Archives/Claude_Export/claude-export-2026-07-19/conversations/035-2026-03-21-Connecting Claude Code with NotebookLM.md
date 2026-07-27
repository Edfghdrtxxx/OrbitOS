# Connecting Claude Code with NotebookLM

## Export metadata (verbatim)

```json
{
  "uuid": "a69007f8-4684-4057-bc52-6c84c9491fb9",
  "name": "Connecting Claude Code with NotebookLM",
  "summary": "**Conversation Overview**\n\nThe person asked Claude about open source projects that connect Claude Code with NotebookLM. Claude identified four projects: `jacob-bd/notebooklm-mcp-cli`, `PleasePrompto/notebooklm-mcp`, `PleasePrompto/notebooklm-skill`, and `claude-world/notebooklm-skill`. The person then asked which had the most stars, prompting Claude to investigate via web search and GitHub API attempts. Claude concluded that `jacob-bd/notebooklm-mcp-cli` led with approximately 2.1k–2.7k stars.\n\nThe person then pointed Claude to `https://github.com/teng-lin/notebooklm-py` and asked whether it had been mentioned previously. Claude acknowledged it had only been referenced indirectly — as a dependency of `claude-world/notebooklm-skill` — but had not been surfaced as a standalone project. Upon investigation, `teng-lin/notebooklm-py` turned out to be the most starred project in the space at approximately 6.5k stars, making Claude's earlier star-count ranking incorrect. Claude corrected the ranking to: `teng-lin/notebooklm-py` (~6.5k) > `jacob-bd/notebooklm-mcp-cli` (~2.1k+) > `PleasePrompto/notebooklm-mcp` (~1.2k+), and apologized for the omission. The person demonstrated familiarity with this ecosystem and caught a meaningful gap in Claude's initial research.\n\n**Tool Knowledge**\n\nGitHub star counts were retrieved indirectly via web search and `web_fetch` on GitHub HTML pages, as direct GitHub API calls via `bash_tool` were blocked. Star counts varied across cached search result snippets (e.g., jacob-bd showed anywhere from 901 to 2.7k depending on the cached snapshot), so the most reliable approach was cross-referencing multiple cached pages and the author's GitHub profile page, which tended to show more current aggregate counts. For `teng-lin/notebooklm-py`, the repo HTML showed \"Star 3.1k\" while the author profile showed \"6.5k 810,\" illustrating that profile pages can reflect more up-to-date figures than individual repo page snapshots.",
  "created_at": "2026-03-21T13:35:57.308294Z",
  "updated_at": "2026-03-21T14:02:55.655066Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-21T13:35:58.307418Z

Do you know the open source project that can connect claude code with notebooklm?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d109c-14d6-7a4f-a980-6840c1af280d",
  "updated_at": "2026-03-21T13:35:58.307418Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-21T13:36:21.334539Z

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about an open source project that connects Claude Code with NotebookLM. Let me search for this.

</details>

I'm not aware of a specific open source project that connects Claude Code with NotebookLM from my existing knowledge. Let me search for it.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T13:36:00.405203Z",
  "stop_timestamp": "2026-03-21T13:36:00.512121Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01M18mby6i1Xj7tJXC2D4jnK",
  "name": "web_search",
  "input": {
    "query": "open source project connect Claude Code NotebookLM"
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
  "tool_use_id": "toolu_01M18mby6i1Xj7tJXC2D4jnK",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - PleasePrompto/notebooklm-skill: Use this skill to enable Claude Code to communicate directly with your Google NotebookLM notebooks. Query your uploaded documents and get source-grounded, citation-backed answers from Gemini. Features browser automation, library management, persistent authentication, and answers exclusively from your own knowledge base. · GitHub",
      "url": "https://github.com/PleasePrompto/notebooklm-skill",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "# Get started in 30 seconds cd ~/.claude/skills git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm # Open Claude Code: &quot;What are my skills?&quot; Built as a Claude Code Skill adaptation of my NotebookLM MCP Server · For source-grounded, document-based research directly in Claude Code\n\nUse this skill to enable Claude Code to communicate directly with your Google NotebookLM notebooks. Query your uploaded documents and get source-grounded, citation-backed answers from Gemini. Features browser automation, library management, persistent authentication, and answers exclusively from your own knowledge base. - PleasePrompto/notebooklm-skill\n\nUse this skill to query your Google NotebookLM notebooks directly from Claude Code for source-grounded, citation-backed answers from Gemini. Browser automation, library management, persistent auth. Drastically reduced hallucinations - answers only from your uploaded documents. Installation • Quick Start • Why NotebookLM • How It Works • MCP Alternative · This skill works ONLY with local Claude Code installations, NOT in the web UI. The web UI runs skills in a sandbox without network access, which this skill requires for browser automation. You must use Claude Code locally on your machine. When you tell Claude Code to \"search through my local documentation\", here's what happens: Massive token consumption: Searching through documentation means reading multiple files repeatedly · Inaccurate retrieval: Searches for keywords, misses context and connections between docs ·\n\nThis Claude Code Skill lets Claude Code chat directly with NotebookLM — Google's source-grounded knowledge base powered by Gemini 2.5 that provides intelligent, synthesized answers exclusively from your uploaded documents. Your Task → Claude asks NotebookLM → Gemini synthesizes answer → Claude writes correct code · No more copy-paste dance: Claude asks questions directly and gets answers straight back in the CLI. It builds deep understanding through automatic follow-ups, getting specific implementation details, edge cases, and best practices. ... # 1. Create skills directory (if it doesn't exist) mkdir -p ~/.claude/skills # 2. Clone this repository cd ~/.claude/skills git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm # 3. That's it! Open Claude Code and say: \"What are my skills?\" ... Note: The setup uses real Chrome instead of Chromium for cross-platform reliability, consistent browser fingerprinting, and better anti-detection with Google services ...\n\n# Get started in 30 seconds cd ~/.claude/skills git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm # Open Claude Code: \"What are my skills?\" Built as a Claude Code Skill adaptation of my NotebookLM MCP Server · For source-grounded, document-based research directly in Claude Code",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-skill",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "I paired NotebookLM with Claude Code, and it feels like a dream team",
      "url": "https://www.xda-developers.com/paired-notebooklm-with-claude-code/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "xda-developers.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=xda-developers.com",
        "site_name": "XDA Developers"
      },
      "is_missing": false,
      "text": "The best part about NotebookLM is that it&#x27;s grounded in the sources you upload. For instance, when you upload a README or any file to Claude, it uses it as additional context. This means Claude can still inherently draw on its broader training data to fill in the gaps, make assumptions, or simply make up information. That&#x27;s where the issue of AI confidently answering something about your codebase that isn&#x27;t actually in the documentation comes in — what we formally refer to as hallucination. On the other hand, when you upload a file to NotebookLM, it only uses it to answer your questions. If the answer isn&#x27;t in your docs, it&#x27;ll tell you straight up rather than invent something. That&#x27;s what makes it a much safer layer for codebase Q&amp;A specifically. Something I&#x27;ve been doing at the end of my vibe-coding sessions is asking Claude Code to generate an in-depth README file that covers everything in the project — how the different files connect, what each part of the code does, and why certain\n\nThe best part about NotebookLM is that it's grounded in the sources you upload. For instance, when you upload a README or any file to Claude, it uses it as additional context. This means Claude can still inherently draw on its broader training data to fill in the gaps, make assumptions, or simply make up information. That's where the issue of AI confidently answering something about your codebase that isn't actually in the documentation comes in — what we formally refer to as hallucination. On the other hand, when you upload a file to NotebookLM, it only uses it to answer your questions. If the answer isn't in your docs, it'll tell you straight up rather than invent something. That's what makes it a much safer layer for codebase Q&A specifically. Something I've been doing at the end of my vibe-coding sessions is asking Claude Code to generate an in-depth README file that covers everything in the project — how the different files connect, what each part of the code does, and why certain\n\nBefore I start a new project or integrate a new tool, I upload the official documentation, API references, or any relevant technical guides into a NotebookLM notebook first. Instead of skimming through pages of dense docs and hoping something sticks, I can just ask NotebookLM to explain exactly what I need to know in plain language. I also use NotebookLM's different learning features, like Mind Maps and Audio Overviews, to absorb the material in whichever way works best at the time. If I'm away from my desk, on a walk, or commuting, an Audio Overview lets me get up to speed on an API or framework just by listening. If I need to understand how different parts of a system connect before I start building, a Mind Map gives me the big picture at a glance. This way, by the time I open Claude Code, I actually know what I'm asking it to build. I'm always looking for ways to improve my coding workflow, and with vibe-coding, I've noticed that it's very easy to get lost in the details and let the\n\nIt's primarily positioned as a developer tool (though it's an excellent tool for non-developers), lives in the terminal, and is built for a completely different kind of workflow. It's used for writing and modifying code, navigating projects, and automating development tasks directly from the command line. Unlike regular Claude, which you can technically mold into doing NotebookLM-like things if you structure your prompts and context carefully, Claude Code isn't meant for that kind of use. NotebookLM is built for working with the sources you upload and helping you make something of them. Claude Code, on the other hand, is built for interacting with codebases. Interestingly, those two very different purposes complement each other incredibly, and that's exactly what makes pairing the two so effective. If you're using Claude Code to vibe-code like I am, you likely know how easy it is to let it run with something and suddenly have no idea how half of it works.\n\nMahnoor Faisal is a tech journalist covering AI and productivity tools with bylines at XDA, SlashGear, MakeUseOf, Laptop Mag, and Android Police. She's been writing professionally since she was sixteen, and has since penned hundreds of articles. This includes in-depth coverage of AI tools like NotebookLM to breaking news across the AI space. Her passion for technology started when she received her first iPod Touch (4th generation) on her 8th birthday, and she's been deep in the tech world ever since. Currently pursuing a degree in computer science, Mahnoor brings both a journalist's eye and a technical foundation to her coverage of how AI is reshaping the way we work and learn. ... A pattern you've likely noticed with AI tools is that a lot of them seem to come and go. One day, an AI tool is all over social media and everyone seems to be using it.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.xda-developers.com/paired-notebooklm-with-claude-code/",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How I Connected NotebookLM to Claude and Changed How I Do Research Forever",
      "url": "https://aimaker.substack.com/p/notebooklm-mcp-claude-setup-guide-research-workflow",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "Use Case #2 – Building Claude Skills from Research Queries to Presentation Deck: Transform frameworks you’ve studied in NotebookLM into custom Claude Skills that run research queries and turn that content into a context-aware presentation deck · Advanced patterns: Cross-notebook synthesis, parallel research mode, integration with Claude Projects for ongoing work · Let’s build it! Look, I’m not going to lie—this requires using the terminal. But I’m also not technical, and I got this working in about 15 minutes. Trust me, it’s easier than you might think right now. There are four different ways to install this thing. I’m going to show you the one that actually works and skip the alternatives that’ll just confuse you. This process is also 10x easier if you ask Claude Code to do it. If you’ve tried it on my previous post, then this is the right time to test drive installing something technical.\n\nAnd I built a Claude Skill to automate research into a presentation deck.\n\nStop copying research between NotebookLM and Claude. This MCP integration guide shows you how to automate queries, synthesis, and content creation in one workspace.\n\nUse Case #2 – Building Claude Skills from Research Queries to Presentation Deck: Transform frameworks you’ve studied in NotebookLM into custom Claude Skills that run research queries and turn that content into a context-aware presentation deck · Advanced patterns: Cross-notebook synthesis, parallel research mode, integration with Claude Projects for ongoing work · Let’s build it! Look, I’m not going to lie—this requires using the terminal. But I’m also not technical, and I got this working in about 15 minutes. Trust me, it’s easier than you might think right now. There are four different ways to install this thing. I’m going to show you the one that actually works and skip the alternatives that’ll just confuse you. This process is also 10x easier if you ask Claude Code to do it. If you’ve tried it on my previous post, then this is the right time to test drive installing something technical.\n\nAnyway, I spent 6 hours researching Claude Cowork last month to find use cases that would actually resonate with my audience. 20+ blog posts. 10+ YouTube tutorials. 10+ Reddit threads. And the rest comes from X. All loaded into NotebookLM because that’s where I do deep research—20+ million token context window, 50 sources, custom outputs ranging from briefing docs to presentation deck. ... All this research lived in NotebookLM. My actual work happened in Claude. And the gap between them killed my momentum. Here's what the back-and-forth actually looked like: ... The back-and-forth wasn’t just annoying, it was also ruining my focus. I kept telling myself: “There has to be a better way to connect these two tools.” · Turns out there is. I connected NotebookLM directly to Claude Desktop (this also applies to Cowork) using MCP. Now when I need to create a presentation deck about Cowork use cases, I don’t: Manually query NotebookLM 76 times trying to understand the research ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aimaker.substack.com/p/notebooklm-mcp-claude-setup-guide-research-workflow",
        "search_provider": "anthropic",
        "age": "February 12, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "NotebookLM now connects to Claude through MCP, and it's the best research setup I've used",
      "url": "https://www.xda-developers.com/notebooklm-connects-to-claude-through-mcp/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "xda-developers.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=xda-developers.com",
        "site_name": "XDA Developers"
      },
      "is_missing": false,
      "text": "Just to give you some context, MCP is an open-source standard for connecting AI applications to external systems. Claude doesn’t natively know how to interact with NotebookLM, and NotebookLM doesn’t know how to talk to Claude.\n\nNow, all you need to do is create a new file named \"claude_desktop_config.json\" and paste the following code into · Join the newsletter for hands-on walkthroughs of setups like connecting Claude to NotebookLM - step-by-step terminal commands, config files, and practical prompt examples that let you reproduce the workflow yourself. ... By subscribing, you agree to receive newsletter and marketing emails, and accept our Terms of Use and Privacy Policy. You can unsubscribe anytime. ... Once this is set up, you’ll rarely need to open a NotebookLM notebook until you want to access the Studio outputs you’ve generated. Everything else, including querying your sources, creating notebooks, adding new sources, running research, and even triggering the generation of Studio outputs, can all be done directly by Claude. For instance, when I want to generate an Audio Overview about a specific topic, the first step is usually creating a NotebookLM notebook and compiling all the sources I want to popul\n\nIf you look at my NotebookLM setup today, you’ll notice I have a bunch of notebooks. I keep dedicated notebooks for every course I’m taking, new hobbies I’m exploring, skills I’m trying to learn, and more. But NotebookLM isn’t the only tool I rely on. My workflow often meant switching between multiple tools: I’d use another tool to find sources, then jump back into NotebookLM to add them, then switch again to research more or get another perspective, and finally return to NotebookLM to generate a Studio output, like an audio overview, mind map, or another structured summary. ... Qwen3-Coder-Next is a great model, and it's even better with Claude Code as a harness. ... It was effective, but messy. I was constantly hopping from one tool to another, which got extremely chaotic. There was a time I paired NotebookLM with multiple productivity tools, which meant I was jumping from several different tools to NotebookLM, then back again, just to keep my workflow moving.\n\nNow, I’ve singled out Claude as my primary AI tool, which means my workflow has become much more streamlined. Instead of jumping from one external tool to NotebookLM and then to another tool, it’s now a smoother cycle: NotebookLM to Claude, then Claude back to NotebookLM, and back again. But here’s the thing — what if I didn’t need to keep switching at all? That’s exactly what MCP makes possible. While this might sound technical and intimidating to set up, the process is really just a series of copy-paste commands in your terminal. It takes less than 10 minutes to get running. Just to give you some context, MCP is an open-source standard for connecting AI applications to external systems. Claude doesn’t natively know how to interact with NotebookLM, and NotebookLM doesn’t know how to talk to Claude. An MCP server bridges that gap, allowing Claude to interact directly with NotebookLM and get results back, all without you manually jumping between the two.\n\nWith the MCP server, however, I can perform all of these steps entirely within Claude through prompts, letting Claude handle the execution. I can tell Claude to create a new notebook, search for and add high-quality sources on a topic, and then trigger the Audio Overview generation. I’ll only open NotebookLM when I want to access the generated Audio Overview, while still being able to query my notebooks the way I normally would, but directly from Claude. It’s the same research experience, just without the tab-switching. This is what makes this integration the best research setup I’ve used. I can query multiple NotebookLM notebooks, take advantage of Claude’s explanations and coding skills, get external information beyond the context of my notebooks (which NotebookLM alone can’t do since it only answers from your uploaded sources), and produce something actionable from it all.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.xda-developers.com/notebooklm-connects-to-claude-through-mcp/",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - PleasePrompto/notebooklm-mcp: MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. · GitHub",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. - PleasePrompto/notebooklm-mcp\n\nMCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. - PleasePrompto/notebooklm-mcp\n\nIs it really zero hallucinations? Yes. NotebookLM is specifically designed to only answer from uploaded sources. If it doesn't know, it says so. What about rate limits? Free tier has daily query limits per Google account. Quick account switching supported for continued research. How secure is this? Chrome runs locally. Your credentials never leave your machine. Use a dedicated Google account if concerned. Can I see what's happening? Yes! Say \"Show me the browser\" to watch the live NotebookLM conversation. What makes this better than Claude's built-in knowledge? Your docs are always current. No training cutoff. No hallucinations. Perfect for new libraries, internal APIs, or fast-moving projects. ... Stop debugging hallucinations. Start shipping accurate code. # Get started in 30 seconds claude mcp add notebooklm npx notebooklm-mcp@latest · This tool automates browser interactions with NotebookLM to make your workflow more efficient.\n\nAbout CLI tools and AI agents: CLI tools like Claude Code, Codex, and similar AI-powered assistants are incredibly powerful, but they can make mistakes. Please use them with care and awareness: Always review changes before committing or deploying ... I built this tool for myself because I was tired of the copy-paste dance between NotebookLM and my editor. I'm sharing it in the hope it helps others too, but I can't take responsibility for any issues, data loss, or account problems that might occur. Use at your own discretion and judgment. That said, if you run into problems or have questions, feel free to open an issue on GitHub. I'm happy to help troubleshoot! Found a bug? Have a feature idea? Open an issue or submit a PR! MIT — Use freely in your projects. Built with frustration about hallucinated APIs, powered by Google's NotebookLM ·\n\nInstallation • Quick Start • Why NotebookLM • Examples • Claude Code Skill • Documentation · When you tell Claude Code or Cursor to \"search through my local documentation\", here's what happens: Massive token consumption: Searching through documentation means reading multiple files repeatedly · Inaccurate retrieval: Searches for keywords, misses context and connections between docs · Hallucinations: When it can't find something, it invents plausible-sounding APIs · Expensive & slow: Each question requires re-reading multiple files · Let your local agents chat directly with NotebookLM — Google's zero-hallucination knowledge base powered by Gemini 2.5 that provides intelligent, synthesized answers from your docs. Your Task → Local Agent asks NotebookLM → Gemini synthesizes answer → Agent writes correct code · The real advantage: No more manual copy-paste between NotebookLM and your editor.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-skill: The Open-Source Pipeline From Research to Content at Zero Cost - ClaudeWorld",
      "url": "https://claude-world.com/articles/notebooklm-skill-open-source-research-to-content-pipeline/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude-world.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude-world.com",
        "site_name": "ClaudeWorld"
      },
      "is_missing": false,
      "text": "trend-pulse — Real-time trending topic discovery from 7 free sources (Google Trends, Hacker News, Reddit, and more). Powers the trend-to-content pipeline in notebooklm-skill. Works as an MCP Server. cf-browser — 9 browser tools for Claude Code via Cloudflare Browser Rendering. Screenshot, scrape, crawl, and extract content from any webpage. One-command deployment. Together, these three tools form a complete content pipeline: discover trends (trend-pulse) → research in depth (notebooklm-skill) → capture web content (cf-browser) → create and publish (notebooklm-skill). The project is MIT-licensed and actively maintained. Planned additions include more MCP tools (nlm_generate, nlm_download, nlm_list_artifacts), additional pipeline recipes, and deeper integrations with content management systems. GitHub: claude-world/notebooklm-skill Demo (Chinese): youtu.be/6M3K4sxahdE Demo (English): youtu.be/q1kj_OccaVE ·\n\ntrend-pulse — Real-time trending topic discovery from 7 free sources (Google Trends, Hacker News, Reddit, and more). Powers the trend-to-content pipeline in notebooklm-skill. Works as an MCP Server. cf-browser — 9 browser tools for Claude Code via Cloudflare Browser Rendering. Screenshot, scrape, crawl, and extract content from any webpage. One-command deployment. Together, these three tools form a complete content pipeline: discover trends (trend-pulse) → research in depth (notebooklm-skill) → capture web content (cf-browser) → create and publish (notebooklm-skill). The project is MIT-licensed and actively maintained. Planned additions include more MCP tools (nlm_generate, nlm_download, nlm_list_artifacts), additional pipeline recipes, and deeper integrations with content management systems. GitHub: claude-world/notebooklm-skill Demo (Chinese): youtu.be/6M3K4sxahdE Demo (English): youtu.be/q1kj_OccaVE ·\n\nGoogle’s NotebookLM solves both problems — it grounds research in real sources with verifiable citations, generates 10 different artifact types (podcasts, slide decks, reports, quizzes, and more), and it’s completely free. The missing piece? Automation. NotebookLM has no public API. It’s a manual, browser-only tool. ... Built on notebooklm-py v0.3.4, it wraps NotebookLM’s internal HTTP APIs. After a one-time browser login, all subsequent operations are pure HTTP — no browser automation overhead per call. ... This means the same tool works whether you’re a Claude Code user, a Cursor user, or building your own MCP-compatible agent. Every artifact is generated by Google’s infrastructure at zero cost to you: The podcast alone supports four formats: deep dive (15-30 min), brief (3-5 min), critique (10-20 min), and debate (two opposing viewpoints, 10-20 min).\n\nNo Google Cloud project, no OAuth app, no API keys. The session persists for weeks. ... mkdir -p .claude/skills/notebooklm cp -r notebooklm-skill/SKILL.md .claude/skills/notebooklm/ cp -r notebooklm-skill/scripts/ .claude/skills/notebooklm/scripts/ Then just tell Claude: “Research Claude Code best practices using NotebookLM and write an article.” ... { \"mcpServers\": { \"notebooklm\": { \"command\": \"python3\", \"args\": [\"/path/to/notebooklm-skill/mcp-server/server.py\"] } } } ... # Create notebook from URLs python3 scripts/notebooklm_client.py create \\ --title \"Research Topic\" \\ --urls \"https://example.com/article1\" \"https://example.com/article2\" # Generate a podcast python3 scripts/notebooklm_client.py podcast --notebook \"Research Topic\" # Full research-to-article pipeline python3 scripts/pipeline.py research-to-article \\ --urls \"https://...\" --questions 5 --format markdown ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claude-world.com/articles/notebooklm-skill-open-source-research-to-content-pipeline/",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "NotebookLM + Claude Code: My New Dev Workflow | Engr Mejba Ahmed",
      "url": "https://www.mejba.me/blog/notebooklm-claude-code-dev-workflow",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mejba.me",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mejba.me",
        "site_name": "Engr Mejba Ahmed"
      },
      "is_missing": false,
      "text": "The refinement phase stays about the same — you still need to polish, customize, and connect to real data sources. Token usage: This one surprised me. I expected the MCP connection to burn through more tokens since it&#x27;s pulling in research data. But because my prompts are shorter and more accurate, total token consumption actually went down by about 30%. One thing I want to be honest about: this workflow is overkill for simple tasks. If I&#x27;m fixing a bug or adding a small feature to an existing project, I don&#x27;t fire up NotebookLM. Claude Code handles that directly with project context. The NotebookLM pipeline shines when you&#x27;re starting something new, learning a new library, or working with documentation you haven&#x27;t internalized yet. If you&#x27;ve read this far, you&#x27;re probably itching to try this. Here&#x27;s how to get value in the next hour: 1. Pick one project you&#x27;re about to start.\n\nCinematic-quality explainer content generated from your research sources. I've used these to onboard junior developers on complex codebases. Upload the repo docs, the architecture decision records, maybe a few key PR discussions, and generate a 10-minute audio overview they can listen to on their commute. That alone would make NotebookLM worth using. But it's the Claude Code integration that turns it from \"useful research tool\" into \"complete development workflow.\" If you've been following my work, you know I'm deep in the Claude Code ecosystem. It's my primary coding tool — an AI agent that lives in my terminal and has full access to my filesystem, my git repos, and any MCP servers I connect. The magic of Claude Code isn't just that it writes code. Plenty of tools do that. The magic is that it operates as an autonomous agent. Give it a task and it reads your project files, understands the context, creates a plan, writes the code, runs it, checks for errors, and iterates.\n\nResearch time per project: Down from 1-2 hours to 15-25 minutes. NotebookLM's ability to synthesize across multiple sources simultaneously eliminates the tab-switching, re-reading, and manual note-taking that consumed most of my research time. Prompt engineering time: Down by roughly 80%. Instead of crafting elaborate context prompts for Claude Code, I write 1-2 sentence instructions that reference my NotebookLM notebooks. The MCP connection handles the context transfer. First-pass code quality: Noticeably higher. When Claude Code has access to structured, cited research instead of my paraphrased summaries, it makes better implementation decisions. Fewer bugs on the first run, more accurate API usage, better adherence to library-specific patterns. Total project scaffolding time: For a medium-complexity project (like the CRM dashboard), I'm seeing 50-60% time reduction in the initial setup phase.\n\nThe refinement phase stays about the same — you still need to polish, customize, and connect to real data sources. Token usage: This one surprised me. I expected the MCP connection to burn through more tokens since it's pulling in research data. But because my prompts are shorter and more accurate, total token consumption actually went down by about 30%. One thing I want to be honest about: this workflow is overkill for simple tasks. If I'm fixing a bug or adding a small feature to an existing project, I don't fire up NotebookLM. Claude Code handles that directly with project context. The NotebookLM pipeline shines when you're starting something new, learning a new library, or working with documentation you haven't internalized yet. If you've read this far, you're probably itching to try this. Here's how to get value in the next hour: 1. Pick one project you're about to start.\n\nSo here's my challenge to you: pick one project this week and run it through the NotebookLM-to-Claude-Code pipeline. Just one. Time yourself. Compare it to how you normally work. Then decide if the seven minutes of setup was worth it. I already know what you'll decide. Looking to build AI systems, automate workflows, or scale your tech infrastructure? I'd love to help. Fiverr (custom builds & integrations): fiverr.com/s/EgxYmWD ... Get more insights like this delivered to your inbox. Subscribe Now · Your support helps me create more in-depth technical content, open-source tools, and free resources for the developer community. ... Engr. Mejba Ahmed builds AI-powered applications and secure cloud systems for businesses worldwide. With 10+ years shipping production software in Laravel, Python, and AWS, he's helped companies automate workflows, reduce infrastructure costs, and scale without security headaches.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.mejba.me/blog/notebooklm-claude-code-dev-workflow",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Nobody Realizes How Simple This Claude + NotebookLM Setup Is",
      "url": "https://juliangoldie.com/mcp-server-setup/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "juliangoldie.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=juliangoldie.com",
        "site_name": "Julian Goldie"
      },
      "is_missing": false,
      "text": "How do I install the NotebookLM MCP server? Grab the GitHub repo, run it inside Claude Code, and paste the config into your desktop JSON. Restart Claude and you’re done. Can this work with other tools like Anti-Gravity or OpenCode? Yes. You can use the same MCP integration logic to connect ...\n\nWith just one GitHub project, you can bridge Claude and NotebookLM so they talk to each other — giving you a new way to automate research, generate content, and even build interactive media from your notes. Normally, NotebookLM sits in its own world. You upload files, you get insights, but it’s isolated. Claude, on the other hand, can analyze, summarize, and generate anything — but it doesn’t have access to your NotebookLM memory. The MCP server setup fixes that. It connects both worlds so Claude can reach into your notebooks, fetch data, create media, and even run commands like “create infographic,” “generate audio,” or “summarize across notebooks.” · That’s where things get fun. You don’t need to be a coder. It’s literally copy, paste, and run. Here’s the basic flow: You grab the GitHub repository called NotebookLM MCP Server, paste the link inside Claude Code, and run it.\n\nIf you’ve ever wanted Claude to actually use your NotebookLM data — to generate podcasts, infographics, videos, or do deep research — then you’re going to love this. Watch the video below: Want to make money and save time with AI? Get AI Coaching, Support & Courses.Join me in the AI Profit Boardroom: https://juliangoldieai.com/0cK-Hi Most ... Read more\n\nThen Claude Code will install everything you need locally — no extra API costs, no cloud setup. Once installed, you open your Claude settings, edit your config file (called desktop_config.json), and paste the MCP server details. Hit save, restart Claude, and boom — you’ve connected your NotebookLM to Claude. This is where it gets wild. Inside Claude’s chat window, you’ll see a new connector — “NotebookLM MCP.” · That means Claude can now talk to your notebooks directly. ... Claude will go off, read your data, and generate whatever you asked for — directly from NotebookLM. You can even view progress logs, open generated files, and control the whole process without leaving Claude Code. Think about this for a second. Before MCP, you’d have to open NotebookLM, manually copy insights, and paste them into another tool to generate visuals or audio.\n\nYou could then ask it to create a matching infographic or even a short video script from the same notes — all without leaving Claude Code. It’s basically like having your own AI content studio powered by your past research. Once you have this setup, you can also connect Claude to other MCP servers like AppleScript or Browser MCP — meaning you can control your local machine and your browser too. That’s when you start building your own AI command center. But for most creators, the biggest unlock is this: NotebookLM MCP turns Claude into a creative partner that understands your data. Instead of starting from scratch, it uses your notebooks to generate custom insights, scripts, or visuals that reflect your actual knowledge base. Let’s talk about real automation. You can chain MCP servers together. ... Use NotebookLM MCP to pull your notes. Use Anti-Gravity or OpenCode to code an app.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://juliangoldie.com/mcp-server-setup/",
        "search_provider": "anthropic",
        "age": "January 13, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "NotebookLM + Claude is the combo you didn’t know you needed (but do)",
      "url": "https://www.xda-developers.com/pairing-notebooklm-and-claude/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "xda-developers.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=xda-developers.com",
        "site_name": "XDA Developers"
      },
      "is_missing": false,
      "text": "After a bit of digging, I found out I can use Anthropic&#x27;s Model Context Protocol (MCP) to connect Claude Desktop directly to NotebookLM. In simple terms, what this does is enable Claude to see my NotebookLM notebooks, interact with them and ...\n\nA couple of days ago, I found out that Claude has a Projects feature that lets you create NotebookLM-like self-contained workspaces and knowledge bases, where you can upload documents and have hallucination-free chats with Claude. I tried to use the feature as a NotebookLM replacement, and it failed pretty badly because the file upload limit wasn’t very generous. I hit the cap after uploading just a handful of PDFs (on the Max plan, too)! Since then, I’ve been trying to find a middleground that lets me take advantage of NotebookLM’s RAG capabilities and extended source limits, and Claude’s speed, reasoning, and coding strengths. After a bit of digging, I found out I can use Anthropic's Model Context Protocol (MCP) to connect Claude Desktop directly to NotebookLM. In simple terms, what this does is enable Claude to see my NotebookLM notebooks, interact with them and the sources within, and generate responses based on that data.\n\nWith this setup, you effectively stay in one interface (i.e., Claude) for the most part, since it has direct access to NotebookLM, which acts as the knowledge base. Admittedly, this is a workaround, and it isn’t perfect, but it’s a solid way to take advantage of NotebookLM’s source-grounding capabilities and source limits alongside Claude’s superior reasoning and coding abilities. ... The combo I've always needed. ... As someone who has been using Claude extensively for coding projects and NotebookLM for documentation, this has been a massive time-saver. Instead of having to export my documentation from NotebookLM and paste it into Claude every time I need to refer to something, I can do it all within the Claude interface.\n\nThe best part is I don’t need to so much as open NotebookLM myself once it’s set up. Because the MCP server handles the browser automation in the background, I can create new notebooks, add sources, and even trigger Audio Overviews without ever leaving the Claude Desktop app. It basically turns Claude into a “command center” for my research, keeping me in a single flow state instead of constantly tab-switching between my notes and my writing tool. Setting this Claude + NotebookLM workflow up does take some manual work initially, but once it’s all set up, it’s smooth sailing. To begin, make sure you have the Claude Desktop app installed on your device. Then, if you're on a Mac, run this in the terminal to download uv, a Python tool manager: ... Then, you'll need to download the bridge software. Paste the following command in your terminal on both macOS and Windows: ...\n\nAlthough Claude is currently my go-to AI chatbot, the AI productivity tool you'll always catch me obsessing over is NotebookLM. I've penned hundreds of articles about it, used it to learn countless new things (programming, baking the perfect tiramisu, cramming for exams the night before), and I still keep finding new ways to make it work harder for me. One thing I absolutely love doing is pairing NotebookLM with other tools I’m already using. I've paired it with Notion, ChatGPT, Gemini, VS Code, etc. So, of course, it only made sense to try pairing it with Claude, and it's quickly become one of my favorite combinations yet. If you haven't heard of Claude yet, it's a conversational AI chatbot developed by Anthropic that's quickly gained a response for being surprisingly human-like in its responses. Even before the launch of Claude Code, it was already known for handling programming and technical tasks better than most other LLMs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.xda-developers.com/pairing-notebooklm-and-claude/",
        "search_provider": "anthropic",
        "age": "January 17, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - jacob-bd/notebooklm-mcp-cli · GitHub",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Connect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity ...\n\nContribute to jacob-bd/notebooklm-mcp-cli development by creating an account on GitHub.\n\nnlm notebook list # List all notebooks nlm notebook create \"Research Project\" # Create a notebook nlm source add <notebook> --url \"https://...\" # Add sources nlm audio create <notebook> --confirm # Generate podcast nlm download audio <notebook> <artifact-id> # Download audio file nlm share public <notebook> # Enable public link · Run nlm --ai for comprehensive AI-assistant documentation. Connect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity # Generate JSON config for any other tool nlm setup add json · Then use natural language: \"Create a notebook about quantum computing and generate a podcast\" ... Use at your own risk for personal/experimental purposes. 🆕 Claude Desktop users: Download the extension (.mcpb file) → double-click → done!\n\nNote: MCP server configuration (in Claude Code, Cursor, etc.) does not need to change — the executable name notebooklm-mcp is the same. ... # Using uv uv tool uninstall notebooklm-mcp-cli # Using pip pip uninstall notebooklm-mcp-cli # Using pipx pipx uninstall notebooklm-mcp-cli # Remove cached auth tokens and data (optional) rm -rf ~/.notebooklm-mcp-cli ... # Auto mode: launches your browser, you log in, cookies extracted automatically nlm login # Check if already authenticated nlm login --check # Use a named profile (for multiple Google accounts) nlm login --profile work nlm login --profile personal # Manual mode: import cookies from a file nlm login --manual --file cookies.txt # External CDP provider (e.g., OpenClaw-managed browser) nlm login --provider openclaw --cdp-url http://127.0.0.1:18800 ... nlm login --check # Show current auth status nlm login switch <profile> # Switch the default profile nlm login profile list # List all profiles with email addresses nlm login profile dele\n\n# Add to any supported tool nlm setup add claude-code nlm setup add claude-desktop nlm setup add gemini nlm setup add cursor nlm setup add windsurf # Generate JSON config for any other tool nlm setup add json # Check which tools are configured nlm setup list # Diagnose installation & auth issues nlm doctor · Install the NotebookLM expert guide for your AI assistant to help it use the tools effectively. Supported for Cline, Antigravity, OpenClaw, Codex, OpenCode, Claude Code, and Gemini CLI. # Install skill files nlm skill install cline nlm skill install openclaw nlm skill install codex nlm skill install antigravity # Update skills nlm skill update ... # Run CLI commands directly uvx --from notebooklm-mcp-cli nlm setup add cursor uvx --from notebooklm-mcp-cli nlm login · For tools that use JSON config, point them to uvx: { \"mcpServers\": { \"notebooklm-mcp\": { \"command\": \"uvx\", \"args\": [\"--from\", \"notebooklm-mcp-cli\", \"notebooklm-mcp\"] } } } ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
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

There are actually multiple open source projects. Let me summarize the main ones found.

</details>

Yes — there are actually several open source projects in this space. Here are the main ones, based on the search results:

**1. `notebooklm-mcp-cli`** by jacob-bd (GitHub: [jacob-bd/notebooklm-mcp-cli](https://github.com/jacob-bd/notebooklm-mcp-cli))
This is a CLI tool and MCP server that connects AI assistants including Claude Code, Gemini, Cursor, and others to NotebookLM, with automatic setup commands like `nlm setup add claude-code`. It supports notebook management, source addition, audio generation, and downloading artifacts all from the command line.

**2. `notebooklm-mcp`** by PleasePrompto (GitHub: [PleasePrompto/notebooklm-mcp](https://github.com/PleasePrompto/notebooklm-mcp))
An MCP server that lets AI agents like Claude Code and Codex research documentation directly through NotebookLM, with persistent auth, library management, and cross-client sharing. Installation is a single command: `claude mcp add notebooklm npx notebooklm-mcp@latest`.

**3. `notebooklm-skill`** by PleasePrompto (GitHub: [PleasePrompto/notebooklm-skill](https://github.com/PleasePrompto/notebooklm-skill))
A companion project from the same author, packaged as a **Claude Code Skill** rather than an MCP server. It enables Claude Code to communicate directly with NotebookLM notebooks, featuring browser automation, library management, and persistent authentication. It installs into `~/.claude/skills`.

**4. `notebooklm-skill`** by claude-world (GitHub: [claude-world/notebooklm-skill](https://github.com/claude-world/notebooklm-skill))
A separate project that is built on `notebooklm-py` v0.3.4 and wraps NotebookLM's internal HTTP APIs — after a one-time browser login, all subsequent operations are pure HTTP with no browser automation overhead per call. It also comes with companion tools like `trend-pulse` for trending topic discovery and `cf-browser` for web scraping, forming a complete research-to-content pipeline.

Were you thinking of one of these in particular, or would you like more detail on any of them?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d109c-14d6-7f17-b7b0-bedd8745e75f",
  "updated_at": "2026-03-21T13:36:21.334539Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d109c-14d6-7a4f-a980-6840c1af280d"
}
```

</details>

### 3. human — 2026-03-21T13:38:00.907836Z

Which one has the most stars?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d109d-eeee-7eb3-883c-333b9b732001",
  "updated_at": "2026-03-21T13:38:00.907836Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d109c-14d6-7f17-b7b0-bedd8745e75f"
}
```

</details>

### 4. assistant — 2026-03-21T13:39:05.279317Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants to know which of these projects has the most GitHub stars. Let me search for this.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T13:38:02.326625Z",
  "stop_timestamp": "2026-03-21T13:38:02.537158Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01U7K7Mt4UJCr82iHL5u2scm",
  "name": "web_search",
  "input": {
    "query": "github notebooklm-mcp-cli stars"
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
  "tool_use_id": "toolu_01U7K7Mt4UJCr82iHL5u2scm",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - jacob-bd/notebooklm-mcp-cli · GitHub",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Connect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity # Generate JSON config for any other tool nlm setup add json · Then use natural language: &quot;Create a notebook about quantum computing and generate a podcast&quot; ... Use at your own risk for personal/experimental purposes. 🆕 Claude Desktop users: Download the extension (.mcpb file) → double-click → done! One-click install, no config needed. Install from PyPI. This single package includes both the CLI and MCP server: ... # Clone the repository git clone https://github.com/jacob-bd/notebooklm-mcp-cli.git cd notebooklm-mcp # Install with uv uv tool install . # Using uv uv tool upgrade notebooklm-mcp-cli # Using pip pip install --upgrade notebooklm-mcp-cli # Using pipx pipx upgrade notebooklm-mcp-cli ·\n\nConnect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity # Generate JSON config for any other tool nlm setup add json · Then use natural language: \"Create a notebook about quantum computing and generate a podcast\" ... Use at your own risk for personal/experimental purposes. 🆕 Claude Desktop users: Download the extension (.mcpb file) → double-click → done! One-click install, no config needed. Install from PyPI. This single package includes both the CLI and MCP server: ... # Clone the repository git clone https://github.com/jacob-bd/notebooklm-mcp-cli.git cd notebooklm-mcp # Install with uv uv tool install . # Using uv uv tool upgrade notebooklm-mcp-cli # Using pip pip install --upgrade notebooklm-mcp-cli # Using pipx pipx upgrade notebooklm-mcp-cli ·\n\nIf you previously installed the separate CLI and MCP packages, you need to migrate to the unified package. ... # Remove old CLI package (if installed) uv tool uninstall notebooklm-cli # Remove old MCP package (if installed) uv tool uninstall notebooklm-mcp-server · After removing legacy packages, reinstall to fix symlinks: ... Why --force? When multiple packages provide the same executable, uv can leave broken symlinks after uninstalling. The --force flag ensures clean symlinks. ... Note: MCP server configuration (in Claude Code, Cursor, etc.) does not need to change — the executable name notebooklm-mcp is the same. ... # Using uv uv tool uninstall notebooklm-mcp-cli # Using pip pip uninstall notebooklm-mcp-cli # Using pipx pipx uninstall notebooklm-mcp-cli # Remove cached auth tokens and data (optional) rm -rf ~/.notebooklm-mcp-cli ...\n\nUse nlm setup to automatically configure the MCP server for your AI tools — no manual JSON editing required: # Add to any supported tool nlm setup add claude-code nlm setup add claude-desktop nlm setup add gemini nlm setup add cursor nlm setup add windsurf # Generate JSON config for any other tool nlm setup add json # Check which tools are configured nlm setup list # Diagnose installation & auth issues nlm doctor · Install the NotebookLM expert guide for your AI assistant to help it use the tools effectively. Supported for Cline, Antigravity, OpenClaw, Codex, OpenCode, Claude Code, and Gemini CLI. # Install skill files nlm skill install cline nlm skill install openclaw nlm skill install codex nlm skill install antigravity # Update skills nlm skill update ... # Run CLI commands directly uvx --from notebooklm-mcp-cli nlm setup add cursor uvx --from notebooklm-mcp-cli nlm login ·\n\n🎉 January 2026 — Major Update! This project has been completely refactored to unify NotebookLM-MCP and NotebookLM-CLI into a single, powerful package. One install gives you both the CLI (nlm) and MCP server (notebooklm-mcp). See the CLI Guide and MCP Guide for full documentation. Programmatic access to Google NotebookLM — via command-line interface (CLI) or Model Context Protocol (MCP) server. Note: Tested with Pro/free tier accounts. May work with NotebookLM Enterprise accounts but has not been tested. ... nlm notebook list # List all notebooks nlm notebook create \"Research Project\" # Create a notebook nlm source add <notebook> --url \"https://...\" # Add sources nlm audio create <notebook> --confirm # Generate podcast nlm download audio <notebook> <artifact-id> # Download audio file nlm share public <notebook> # Enable public link · Run nlm --ai for comprehensive AI-assistant documentation.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - PleasePrompto/notebooklm-mcp: MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. · GitHub",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "# Get started in 30 seconds claude mcp add notebooklm npx notebooklm-mcp@latest · This tool automates browser interactions with NotebookLM to make your workflow more efficient. However, a few friendly reminders: About browser automation: While I&#x27;ve built in humanization features (realistic typing speeds, natural delays, mouse movements) to make the automation behave more naturally, I can&#x27;t guarantee Google won&#x27;t detect or flag automated usage. I recommend using a dedicated Google account for automation rather than your primary account—think of it like web scraping: probably fine, but better safe than sorry! About CLI tools and AI agents: CLI tools like Claude Code, Codex, and similar AI-powered assistants are incredibly powerful, but they can make mistakes. Please use them with care and awareness: Always review changes before committing or deploying ...\n\n# Get started in 30 seconds claude mcp add notebooklm npx notebooklm-mcp@latest · This tool automates browser interactions with NotebookLM to make your workflow more efficient. However, a few friendly reminders: About browser automation: While I've built in humanization features (realistic typing speeds, natural delays, mouse movements) to make the automation behave more naturally, I can't guarantee Google won't detect or flag automated usage. I recommend using a dedicated Google account for automation rather than your primary account—think of it like web scraping: probably fine, but better safe than sorry! About CLI tools and AI agents: CLI tools like Claude Code, Codex, and similar AI-powered assistants are incredibly powerful, but they can make mistakes. Please use them with care and awareness: Always review changes before committing or deploying ...\n\nFresh start anytime. Scans entire system for NotebookLM data with categorized preview. Reduce token usage by loading only the tools you need. Each tool consumes context tokens — fewer tools = faster responses and lower costs. ... All tools including cleanup_data, re_auth, remove_notebook, reset_session, close_session, get_library_stats · # Check current settings npx notebooklm-mcp config get # Set a profile npx notebooklm-mcp config set profile minimal npx notebooklm-mcp config set profile standard npx notebooklm-mcp config set profile full # Disable specific tools (comma-separated) npx notebooklm-mcp config set disabled-tools \"cleanup_data,re_auth\" # Reset to defaults npx notebooklm-mcp config reset · # Set profile export NOTEBOOKLM_PROFILE=minimal # Disable specific tools export NOTEBOOKLM_DISABLED_TOOLS=\"cleanup_data,re_auth,remove_notebook\" Settings are saved to ~/.config/notebooklm-mcp/settings.json and persist across sessions.\n\nMCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. - PleasePrompto/notebooklm-mcp\n\nLet your CLI agents (Claude, Cursor, Codex...) chat directly with NotebookLM for zero-hallucination answers based on your own notebooks · Installation • Quick Start • Why NotebookLM • Examples • Claude Code Skill • Documentation · When you tell Claude Code or Cursor to \"search through my local documentation\", here's what happens: Massive token consumption: Searching through documentation means reading multiple files repeatedly · Inaccurate retrieval: Searches for keywords, misses context and connections between docs · Hallucinations: When it can't find something, it invents plausible-sounding APIs · Expensive & slow: Each question requires re-reading multiple files · Let your local agents chat directly with NotebookLM — Google's zero-hallucination knowledge base powered by Gemini 2.5 that provides intelligent, synthesized answers from your docs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - jacob-bd/notebooklm-cli · GitHub",
      "url": "https://github.com/jacob-bd/notebooklm-cli",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This project has been merged into NotebookLM MCP CLI. No further updates will be made to this repository. The new package includes both the CLI (nlm) and MCP server (notebooklm-mcp) in a single installation. A powerful command-line interface for Google NotebookLM ... ⚠️ Important Disclaimer: This CLI uses internal APIs that are undocumented and may change without notice. Not affiliated with or endorsed by Google. Use at your own risk for personal/experimental purposes. See also: notebooklm-mcp-cli for the unified CLI + MCP server. ... Full NotebookLM API Coverage — Notebooks, sources, audio podcasts, reports, quizzes, flashcards, mind maps, slides, infographics, videos, and data tables · Seamless Authentication — Uses Chrome DevTools Protocol for reliable, automatic cookie extraction · AI-Teachable — Run nlm --ai to output comprehensive documentation that AI assistants can consume ·\n\nThis project has been merged into NotebookLM MCP CLI. No further updates will be made to this repository. The new package includes both the CLI (nlm) and MCP server (notebooklm-mcp) in a single installation. A powerful command-line interface for Google NotebookLM ... ⚠️ Important Disclaimer: This CLI uses internal APIs that are undocumented and may change without notice. Not affiliated with or endorsed by Google. Use at your own risk for personal/experimental purposes. See also: notebooklm-mcp-cli for the unified CLI + MCP server. ... Full NotebookLM API Coverage — Notebooks, sources, audio podcasts, reports, quizzes, flashcards, mind maps, slides, infographics, videos, and data tables · Seamless Authentication — Uses Chrome DevTools Protocol for reliable, automatic cookie extraction · AI-Teachable — Run nlm --ai to output comprehensive documentation that AI assistants can consume ·\n\n# Quick start for contributors git clone https://github.com/jacob-bd/notebooklm-cli.git cd notebooklm-cli uv pip install -e \".[dev]\" uv run pytest ... Full transparency: this project was built by a non-developer using AI coding assistants. If you're an experienced Python developer, you might look at this codebase and wince. That's okay. The goal here was to scratch an itch—programmatic access to NotebookLM—and learn along the way. The code works, but it's likely missing patterns, optimizations, or elegance that only years of experience can provide. This is where you come in. If you see something that makes you cringe, please consider contributing rather than just closing the tab. PRs and issues are welcome. MIT License.\n\n# Using pip pip install notebooklm-cli # Using pipx (recommended for CLI tools) pipx install notebooklm-cli # Using uv uv tool install notebooklm-cli ... This launches Chrome, navigates to NotebookLM, and automatically extracts your session cookies. You'll need to log in to your Google account if not already signed in. ... # Create a new notebook nlm notebook create \"My Research\" # Output: Created notebook: abc123-def456-... # Add a URL source nlm source add abc123-def456 --url \"https://example.com/article\" # Add a YouTube video nlm source add abc123-def456 --url \"https://youtube.com/watch?v=...\" # Add pasted text nlm source add abc123-def456 --text \"Your content here\" --title \"My Notes\" ... # Set an alias nlm alias set myproject abc123-def456-... # Types are auto-detected! # Now use the alias anywhere nlm notebook get myproject nlm source list myproject nlm audio create myproject --confirm # Manage aliases nlm alias list # List all aliases nlm alias get myproject # Resolve to UUID nlm\n\nUse case: Paste the output of nlm --ai into your AI assistant's context to teach it how to use the CLI. For AI coding assistants that support skills (Claude Code, Gemini CLI/Antigravity, etc.), we provide a pre-packaged skill. Download: Click here to download nlm-cli-skill.zip (hosted in this repo). Install: Extract the zip file into your AI tool's skills directory (e.g., ~/.gemini/antigravity/skills/, ~/.claude/skills, etc.). ... nlm-cli-skill/ ├── SKILL.md # Main skill file with 10 critical rules └── references/ ├── command_reference.md # Complete command signatures ├── troubleshooting.md # Error diagnosis & solutions └── workflows.md # End-to-end task sequences ... nlm notebook list # Rich table (default) nlm notebook list --json # JSON output nlm notebook list --quiet # IDs only (for scripting) nlm notebook list --title # \"ID: Title\" format nlm source list --url # \"ID: URL\" format nlm notebook list --full # All columns ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-cli",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm MCP | Awesome MCP Servers",
      "url": "https://mcpservers.org/servers/roomi-fields/notebooklm-mcp",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpservers.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpservers.org",
        "site_name": "MCP Servers"
      },
      "is_missing": false,
      "text": "Built with frustration about hallucinated APIs, powered by Google&#x27;s NotebookLM · ⭐ Star on GitHub if this saves you debugging time! A simple note storage system with a custom note:// URI scheme, featuring tools to add and summarize notes.\n\nChat with Google NotebookLM via MCP or HTTP REST API for zero-hallucination answers from your docs. Perfect for n8n workflows and automation. ... Import web pages and YouTube videos to NotebookLM with one click. Trusted by 200,000+ users.Install Chrome Extension ... Source citation extraction with 5 formats: none, inline, footnotes, json, expanded (97% excerpt success rate) Session management for multi-turn conversations with auto-reauth on session expiry · Generate multiple content types from your notebook sources: Video Visual Styles: classroom, documentary, animated, corporate, cinematic, minimalist ... # Clone and build locally git clone https://github.com/roomi-fields/notebooklm-mcp.git cd notebooklm-mcp npm install && npm run build # Claude Code claude mcp add notebooklm node /path/to/notebooklm-mcp/dist/index.js # Cursor - add to ~/.cursor/mcp.json { \"mcpServers\": { \"notebooklm\": { \"command\": \"node\", \"args\": [\"/path/to/notebooklm-mcp/dist/index.js\"] } } } Then say: \"Log me in to\n\nA collection of servers for the Model Context Protocol\n\ngit clone https://github.com/roomi-fields/notebooklm-mcp.git cd notebooklm-mcp npm install && npm run build npm run setup-auth # One-time Google login npm run start:http # Start server on port 3000 · # Query the API curl -X POST http://localhost:3000/ask \\ -H \"Content-Type: application/json\" \\ -d '{\"question\": \"Explain X\", \"notebook_id\": \"my-notebook\"}' # Build and run docker build -t notebooklm-mcp . docker run -d --name notebooklm-mcp -p 3000:3000 -p 6080:6080 -v notebooklm-data:/data notebooklm-mcp # Authenticate via noVNC # 1. Open http://localhost:6080/vnc.html # 2. Run: curl -X POST http://localhost:3000/setup-auth -d '{\"show_browser\":true}' # 3. Login to Google in the VNC window · See Docker Guide for NAS deployment (Synology, QNAP). See ROADMAP.md for planned features and version history. ... v1.5.0 — Complete Studio content generation (video, infographic, presentation, data_table) + Notes management + Delete sources ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpservers.org/servers/roomi-fields/notebooklm-mcp",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - kkaminsk/NotebookLM-MCP: Building another MCP. · GitHub",
      "url": "https://github.com/kkaminsk/NotebookLM-MCP",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "┌─────────────────┐ ┌──────────────────┐ ┌─────────────────┐ │ MCP Client │────▶│ NotebookLM MCP │────▶│ Google │ │ (Claude, etc) │ │ Server │ │ NotebookLM │ └─────────────────┘ └──────────────────┘ └─────────────────┘ │ ▼ ┌──────────────┐ │ Patchright │ │ (Browser) │ └──────────────┘ ... # Clone the repository git clone https://github.com/your-org/notebooklm-mcp.git cd notebooklm-mcp # Install dependencies uv sync # Install Patchright browsers uv run patchright install chromium · # Clone the repository git clone https://github.com/your-org/notebooklm-mcp.git cd notebooklm-mcp # Create virtual environment python -m venv .venv source .venv/bin/activate # On Windows: .venv\\Scripts\\activate # Install package pip install -e .\n\nA Python-based Model Context Protocol (MCP) server that bridges AI agents with Google NotebookLM through browser automation. This allows MCP-compatible clients like Claude Desktop to interact with NotebookLM's powerful RAG (Retrieval-Augmented Generation) capabilities. Warning: This is alpha software. It has basic functionality but needs further testing. Use at your own risk. Automating Google services may violate their Terms of Service. Notebook Management: Create notebooks, list existing notebooks · Source Management: Add sources (URLs, text content), list sources in notebooks · Query Interface: Ask questions against notebook sources with citation support · Audio Overview: Generate podcast-style audio discussions from notebook content · Session Persistence: Human-in-the-loop authentication with persistent Chrome profile · Stealth Automation: Uses Patchright for bot detection evasion ·\n\nChrome Profile: Contains your Google session credentials. Keep ~/.notebooklm-mcp/chrome_profile/ secure and never commit it to version control. Local Execution: The server is designed for local use. If deploying remotely, use secure tunnels (SSH) as MCP doesn't provide encryption. Rate Limiting: Avoid rapid automated requests to prevent account flagging. No Official API: This uses browser automation as NotebookLM lacks a public API · DOM Dependency: May break if Google updates NotebookLM's interface · Session Expiry: Sessions may expire and require re-authentication · PDF Upload: Not yet implemented (URL and text sources work) Alpha Status: Basic functionality works but edge cases need testing · Run uv run notebooklm-mcp auth to re-authenticate. ... # Install dev dependencies uv sync --all-extras # Run tests uv run pytest # Run linter uv run ruff check src/ # Format code uv run ruff format src/ MIT License - see LICENSE for details.\n\nOnce connected, the following tools are available to MCP clients: List all notebooks in your NotebookLM account. Create a new notebook with optional initial sources. Parameters: title (required), initial_sources (optional list of URLs) Add a source to a notebook. Parameters: notebook_id, source_type (url, text, google_doc, google_slide), content, title (optional) List all sources in a notebook. ... Ask a question against notebook sources. Parameters: notebook_id, query, use_chat_history (optional) Generate a podcast-style audio discussion. Parameters: notebook_id, custom_instructions (optional) ... import asyncio from patchright.async_api import async_playwright async def create_notebook_workflow(): playwright = await async_playwright().start() context = await playwright.chromium.launch_persistent_context( user_data_dir=\"~/.notebooklm-mcp/chrome_profile\", headless=False, channel=\"chrome\", ) page = context.pages[0] if context.pages else await context.new_page() # Navigate to NotebookLM \n\n┌─────────────────┐ ┌──────────────────┐ ┌─────────────────┐ │ MCP Client │────▶│ NotebookLM MCP │────▶│ Google │ │ (Claude, etc) │ │ Server │ │ NotebookLM │ └─────────────────┘ └──────────────────┘ └─────────────────┘ │ ▼ ┌──────────────┐ │ Patchright │ │ (Browser) │ └──────────────┘ ... # Clone the repository git clone https://github.com/your-org/notebooklm-mcp.git cd notebooklm-mcp # Install dependencies uv sync # Install Patchright browsers uv run patchright install chromium · # Clone the repository git clone https://github.com/your-org/notebooklm-mcp.git cd notebooklm-mcp # Create virtual environment python -m venv .venv source .venv/bin/activate # On Windows: .venv\\Scripts\\activate # Install package pip install -e .",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/kkaminsk/NotebookLM-MCP",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Releases · jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/releases",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Google API errors no longer silently swallowed - When Google returns an error response (e.g., INVALID_ARGUMENT, UserDisplayableError) instead of an answer, the CLI now surfaces a clear error message instead of returning an empty answer. Thanks to @MinhDung2209 for the detailed debugging that uncovered this (issue #57). pip install --upgrade notebooklm-mcp-cli # or uv tool install --force notebooklm-mcp-cli ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Configurable Interface Language (NOTEBOOKLM_HL) - Set NOTEBOOKLM_HL env var to control both the API&#x27;s hl URL parameter and the default artifact creation language. Explicit --language flags still take priority. Thanks to @beausea for this contribution (PR #59, closes #58). pip install --upgrade notebooklm-mcp-cli # or uv tool install --force notebooklm-mcp-cli ...\n\nGoogle API errors no longer silently swallowed - When Google returns an error response (e.g., INVALID_ARGUMENT, UserDisplayableError) instead of an answer, the CLI now surfaces a clear error message instead of returning an empty answer. Thanks to @MinhDung2209 for the detailed debugging that uncovered this (issue #57). pip install --upgrade notebooklm-mcp-cli # or uv tool install --force notebooklm-mcp-cli ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Configurable Interface Language (NOTEBOOKLM_HL) - Set NOTEBOOKLM_HL env var to control both the API's hl URL parameter and the default artifact creation language. Explicit --language flags still take priority. Thanks to @beausea for this contribution (PR #59, closes #58). pip install --upgrade notebooklm-mcp-cli # or uv tool install --force notebooklm-mcp-cli ...\n\nFull changelog: https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/CHANGELOG.md ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... OpenClaw skill path - Fixed incorrect installation path for OpenClaw skills. Now correctly uses ~/.openclaw/workplace/skills/ instead of ~/.openclaw/skills/. ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Focus Prompt Support: Added --focus parameter support to all artifact generation commands (quiz, flashcards, etc.) to guide content creation. Improved Prompt Extraction: studio_status now correctly extracts custom prompts for all artifact types (Quiz, Flashcards, Video, Slides).\n\nUpdated CLI_GUIDE.md, MCP_CLI_TEST_PLAN.md, and agent documentation with --focus examples. ... There was an error while loading. Please reload this page.\n\nThe NOTEBOOKLM_BL env var still works as an override. sources_used now populated in query responses - The sources_used field was always returning [] even when the answer contained citation markers like [1], [2]. Query responses now correctly return sources_used (list of cited source IDs) and citations (dict mapping each citation number to its parent source ID). This also enables the REPL's citation legend feature. Thanks to @MinhDung2209 for reporting (#57). ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Source Rename (source_rename) — Rename any source within a notebook via new RPC b7Wfje. MCP tool: source_rename with notebook_id, source_id, and new_title params · CLI: nlm source rename <source-id> <title> --notebook <notebook-id> Verb-first alias: nlm rename source <source-id> <title> --notebook <notebook-id> ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/releases",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - roomi-fields/notebooklm-mcp: MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. · GitHub",
      "url": "https://github.com/roomi-fields/notebooklm-mcp",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "About CLI tools and AI agents: CLI tools like Claude Code, Codex, and similar AI-powered assistants are powerful but can make mistakes: Always review changes before committing or deploying ... I built this tool for myself and share it hoping it helps others, but I can&#x27;t take responsibility for any issues that might occur. Use at your own discretion. Built with frustration about hallucinated APIs, powered by Google&#x27;s NotebookLM · ⭐ Star on GitHub if this saves you debugging time!\n\nMCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. - roomi-fields/notebooklm-mcp\n\nAbout CLI tools and AI agents: CLI tools like Claude Code, Codex, and similar AI-powered assistants are powerful but can make mistakes: Always review changes before committing or deploying ... I built this tool for myself and share it hoping it helps others, but I can't take responsibility for any issues that might occur. Use at your own discretion. Built with frustration about hallucinated APIs, powered by Google's NotebookLM · ⭐ Star on GitHub if this saves you debugging time!\n\ngit clone https://github.com/roomi-fields/notebooklm-mcp.git cd notebooklm-mcp npm install && npm run build npm run setup-auth # One-time Google login npm run start:http # Start server on port 3000 · # Query the API curl -X POST http://localhost:3000/ask \\ -H \"Content-Type: application/json\" \\ -d '{\"question\": \"Explain X\", \"notebook_id\": \"my-notebook\"}' # Build and run docker build -t notebooklm-mcp . docker run -d --name notebooklm-mcp -p 3000:3000 -p 6080:6080 -v notebooklm-data:/data notebooklm-mcp # Authenticate via noVNC # 1. Open http://localhost:6080/vnc.html # 2. Run: curl -X POST http://localhost:3000/setup-auth -d '{\"show_browser\":true}' # 3. Login to Google in the VNC window · See Docker Guide for NAS deployment (Synology, QNAP). ... See ROADMAP.md for planned features and version history. ... v1.5.0 — Complete Studio content generation (video, infographic, presentation, data_table) + Notes management + Delete sources ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/roomi-fields/notebooklm-mcp",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-mcp-cli/README.md at main · jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/README.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Connect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity · Then use natural language: &quot;Create a notebook about quantum computing and generate a podcast&quot; ... Use at your own risk for personal/experimental purposes. 🆕 Claude Desktop users: Download the extension (.mcpb file) → double-click → done! One-click install, no config needed. Install from PyPI. This single package includes both the CLI and MCP server: ... # Clone the repository git clone https://github.com/jacob-bd/notebooklm-mcp-cli.git cd notebooklm-mcp # Install with uv uv tool install . # Using uv uv tool upgrade notebooklm-mcp-cli # Using pip pip install --upgrade notebooklm-mcp-cli # Using pipx pipx upgrade notebooklm-mcp-cli ·\n\nConnect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity · Then use natural language: \"Create a notebook about quantum computing and generate a podcast\" ... Use at your own risk for personal/experimental purposes. 🆕 Claude Desktop users: Download the extension (.mcpb file) → double-click → done! One-click install, no config needed. Install from PyPI. This single package includes both the CLI and MCP server: ... # Clone the repository git clone https://github.com/jacob-bd/notebooklm-mcp-cli.git cd notebooklm-mcp # Install with uv uv tool install . # Using uv uv tool upgrade notebooklm-mcp-cli # Using pip pip install --upgrade notebooklm-mcp-cli # Using pipx pipx upgrade notebooklm-mcp-cli ·\n\nIf you previously installed the separate CLI and MCP packages, you need to migrate to the unified package. ... # Remove old CLI package (if installed) uv tool uninstall notebooklm-cli # Remove old MCP package (if installed) uv tool uninstall notebooklm-mcp-server · After removing legacy packages, reinstall to fix symlinks: ... Why --force? When multiple packages provide the same executable, uv can leave broken symlinks after uninstalling. The --force flag ensures clean symlinks. ... Note: MCP server configuration (in Claude Code, Cursor, etc.) does not need to change — the executable name notebooklm-mcp is the same. ... # Using uv uv tool uninstall notebooklm-mcp-cli # Using pip pip uninstall notebooklm-mcp-cli # Using pipx pipx uninstall notebooklm-mcp-cli # Remove cached auth tokens and data (optional) rm -rf ~/.notebooklm-mcp-cli ...\n\n🎉 January 2026 — Major Update! This project has been completely refactored to unify NotebookLM-MCP and NotebookLM-CLI into a single, powerful package. One install gives you both the CLI (nlm) and MCP server (notebooklm-mcp). See the CLI Guide and MCP Guide for full documentation. Programmatic access to Google NotebookLM — via command-line interface (CLI) or Model Context Protocol (MCP) server. Note: Tested with Pro/free tier accounts. May work with NotebookLM Enterprise accounts but has not been tested. ... nlm notebook list # List all notebooks nlm notebook create \"Research Project\" # Create a notebook nlm source add <notebook> --url \"https://...\" # Add sources nlm audio create <notebook> --confirm # Generate podcast nlm download audio <notebook> <artifact-id> # Download audio file nlm share public <notebook> # Enable public link · Run nlm --ai for comprehensive AI-assistant documentation.\n\nUse nlm setup to automatically configure the MCP server for your AI tools — no manual JSON editing required: # Add to any supported tool nlm setup add claude-code nlm setup add claude-desktop nlm setup add gemini nlm setup add cursor nlm setup add windsurf # Check which tools are configured nlm setup list # Diagnose installation & auth issues nlm doctor · Install the NotebookLM expert guide for your AI assistant to help it use the tools effectively. Supported for Cline, Antigravity, OpenClaw, Codex, OpenCode, Claude Code, and Gemini CLI. # Install skill files nlm skill install cline nlm skill install openclaw nlm skill install codex nlm skill install antigravity # Update skills nlm skill update ... # Run CLI commands directly uvx --from notebooklm-mcp-cli nlm setup add cursor uvx --from notebooklm-mcp-cli nlm login · For tools that use JSON config, point them to uvx: { \"mcpServers\": { \"notebooklm-mcp\": { \"command\": \"uvx\", \"args\": [\"--from\", \"notebooklm-mcp-cli\", \"notebooklm-mcp\"] } } }",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/README.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - alfredang/notebooklm-mcp: Bridge Google NotebookLM with Claude via MCP. Full programmatic access to create notebooks, manage sources, and generate AI-powered content — podcasts, videos, slides, mind maps, quizzes, flashcards, and reports — all through natural language.",
      "url": "https://github.com/alfredang/notebooklm-mcp/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "# Clone the repository git clone https://github.com/alfredang/notebooklm-mcp.git # Navigate to the project folder cd notebooklm-mcp # Install dependencies (includes notebooklm-py and fastmcp) uv sync ... Note: These dependencies are required for both Claude Desktop and Claude Code. NotebookLM uses browser-based authentication. You must login once to save your session cookies. ... uv run python -c &quot; from notebooklm import NotebookLMClient import asyncio async def test(): client = await NotebookLMClient.from_storage() async with client: notebooks = await client.notebooks.list() print(f&#x27;Authenticated! Found {len(notebooks)} notebooks.&#x27;) asyncio.run(test()) &quot; You should see: Authenticated! Found X notebooks. Before configuring Claude, verify the server starts correctly: ... Starting NotebookLM MCP server... NotebookLM client initialized successfully Starting MCP server &#x27;NotebookLM&#x27; with transport &#x27;stdio&#x27; Press Ctrl+C (or Cmd+C on Mac) to stop the server after confirming it works.\n\nBridge Google NotebookLM with Claude via MCP. Full programmatic access to create notebooks, manage sources, and generate AI-powered content — podcasts, videos, slides, mind maps, quizzes, flashcards, and reports — all through natural language. - alfredang/notebooklm-mcp\n\nclaude mcp add notebooklm -- uv --directory C:\\Users\\yourname\\projects\\notebooklm-mcp run python server.py ... You should see notebooklm in the list. ... Cause: Claude Desktop can't find uv because it doesn't inherit your shell's PATH. Solution: Use the full absolute path to uv in the config (see Step 3.1). ... Cause: Invalid JSON in config file or Claude not restarted properly. ... Cause: Server started before authentication was complete. ... # View recent logs tail -100 ~/Library/Logs/Claude/mcp*.log # Or open in Finder open ~/Library/Logs/Claude/ ... claude mcp remove notebooklm claude mcp add notebooklm -- uv --directory <PROJECT_PATH> run python server.py ...\n\n# Clone the repository git clone https://github.com/alfredang/notebooklm-mcp.git # Navigate to the project folder cd notebooklm-mcp # Install dependencies (includes notebooklm-py and fastmcp) uv sync ... Note: These dependencies are required for both Claude Desktop and Claude Code. NotebookLM uses browser-based authentication. You must login once to save your session cookies. ... uv run python -c \" from notebooklm import NotebookLMClient import asyncio async def test(): client = await NotebookLMClient.from_storage() async with client: notebooks = await client.notebooks.list() print(f'Authenticated! Found {len(notebooks)} notebooks.') asyncio.run(test()) \" You should see: Authenticated! Found X notebooks. Before configuring Claude, verify the server starts correctly: ... Starting NotebookLM MCP server... NotebookLM client initialized successfully Starting MCP server 'NotebookLM' with transport 'stdio' Press Ctrl+C (or Cmd+C on Mac) to stop the server after confirming it works.\n\ncd notebooklm-mcp uv run notebooklm login · What happens: A browser window will open automatically · Log in to your Google account · Navigate to NotebookLM if not redirected automatically · Wait until the terminal displays \"Success\" Close the browser · Verify authentication: uv run python -c \" from notebooklm import NotebookLMClient import asyncio async def test(): client = await NotebookLMClient.from_storage() async with client: notebooks = await client.notebooks.list() print(f'Authenticated! Found {len(notebooks)} notebooks.') asyncio.run(test()) \" You should see: Authenticated! Found X notebooks. Before configuring Claude, verify the server starts correctly: cd notebooklm-mcp uv run python server.py · Expected output: Starting NotebookLM MCP server... NotebookLM client initialized successfully Starting MCP server 'NotebookLM' with transport 'stdio' Press Ctrl+C (or Cmd+C on Mac) to stop the server after confirming it works.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/alfredang/notebooklm-mcp/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Integrate NotebookLM with Gemini CLI, Google Antigravity or Other Agents with MCP | by Dazbo (Darren Lester) | Google Cloud - Community | Mar, 2026 | Medium",
      "url": "https://medium.com/google-cloud/integrate-notebooklm-with-gemini-cli-google-antigravity-or-other-agents-with-mcp-cd83b575dc39",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Because MCP creates a universal standard — often described as the ”USB-C for AI applications” — it unlocks massive off-the-shelf reusability. Developers can build an MCP server once, and any MCP-compatible AI client (like Gemini CLI, Antigravity, or your own agents) can instantly connect to it. I wondered: “Is there an existing NotebookLM MCP server I can use?” · Of course there is! A very brief search led me to https://github.com/jacob-bd/notebooklm-mcp-cli. And it’s clearly very popular. ... I’ll show you how I got it working. It only took a couple of minutes. Note that I’m using WSL Ubuntu, which creates the need for an extra step. ... # If you&#x27;re running in Linux or WSL, make sure you can launch Chrome or Chromium, e.g. sudo apt install chromium-browser # Now install NotebookLM MCP CLI uv tool install notebooklm-mcp-cli · Let’s check the NotebookLM CLI is working by running the nlm command: ...\n\nBecause MCP creates a universal standard — often described as the ”USB-C for AI applications” — it unlocks massive off-the-shelf reusability. Developers can build an MCP server once, and any MCP-compatible AI client (like Gemini CLI, Antigravity, or your own agents) can instantly connect to it. I wondered: “Is there an existing NotebookLM MCP server I can use?” · Of course there is! A very brief search led me to https://github.com/jacob-bd/notebooklm-mcp-cli. And it’s clearly very popular. ... I’ll show you how I got it working. It only took a couple of minutes. Note that I’m using WSL Ubuntu, which creates the need for an extra step. ... # If you're running in Linux or WSL, make sure you can launch Chrome or Chromium, e.g. sudo apt install chromium-browser # Now install NotebookLM MCP CLI uv tool install notebooklm-mcp-cli · Let’s check the NotebookLM CLI is working by running the nlm command: ...\n\nConnect your AI agent to NotebookLM via MCP to autonomously research, summarize, & generate podcasts on your docs using natural language!\n\nIntegrate NotebookLM with Gemini CLI, Google Antigravity or Other Agents with MCP NotebookLM is awesome. Before we jump into the integration, I’m going to give you a quick overview of NotebookLM …\n\nUpgraded Studio Output: NotebookLM doesn’t just answer questions; it actively organizes your content into actionable formats — like Briefing Documents, Study Guides, FAQs, and Mind Maps. Through the Studio panel, you can generate multiple formats. ... I live in tools like Google Antigravity and Gemini CLI. Wouldn’t it be great if, from these tools, I could: ... Create new notebooks, e.g. based on research I’m doing in Gemini CLI ... Well, you can. And in a minute, I’ll show you how. The Model Context Protocol (MCP) is an open standard that allows AI models and agents to safely and easily interact with external tools, APIs, and data. Think of it as the universal adapter that allows models and agents to find and execute the tools it has access to. ... Integrating LLMs used to mean writing custom, brittle API connections for every single data source — a classic M*N maintenance nightmare.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/google-cloud/integrate-notebooklm-with-gemini-cli-google-antigravity-or-other-agents-with-mcp-cd83b575dc39",
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

The search results don't directly show star counts. Let me fetch the GitHub pages to get the actual star counts.

</details>

The search results don't show the exact star counts directly. Let me fetch the GitHub pages to get the actual numbers.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T13:38:11.277996Z",
  "stop_timestamp": "2026-03-21T13:38:11.980928Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01DtMbTrbmxo1L9hkBn6dwaE",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
    "text_content_token_limit": 2000
  },
  "message": "Fetching: https://github.com/jacob-bd/notebooklm-mcp-cli",
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
  "tool_use_id": "toolu_01DtMbTrbmxo1L9hkBn6dwaE",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "github"
      },
      "is_missing": false,
      "text": "GitHub - jacob-bd/notebooklm-mcp-cli\n\n\n\n[Skip to content](#start-of-content)\n\n\n\n\n\n\n\n\n\n\n\n\n\n## Navigation Menu\n\nToggle navigation\n\n[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Fjacob-bd%2Fnotebooklm-mcp-cli)\n\nAppearance settings\n\n* Platform\n\n  + AI CODE CREATION\n    - [GitHub CopilotWrite better code with AI](https://github.com/features/copilot)\n    - [GitHub SparkBuild and deploy intelligent apps](https://github.com/features/spark)\n    - [GitHub ModelsManage and compare prompts](https://github.com/features/models)\n    - [MCP RegistryNewIntegrate external tools](https://github.com/mcp)\n  + DEVELOPER WORKFLOWS\n    - [ActionsAutomate any workflow](https://github.com/features/actions)\n    - [CodespacesInstant dev environments](https://github.com/features/codespaces)\n    - [IssuesPlan and track work](https://github.com/features/issues)\n    - [Code ReviewManage code changes](https://github.com/features/code-review)\n  + APPLICATION SECURITY\n    - [GitHub Advanced SecurityFind and fix vulnerabilities](https://github.com/security/advanced-security)\n    - [Code securitySecure your code as you build](https://github.com/security/advanced-security/code-security)\n    - [Secret protectionStop leaks before they start](https://github.com/security/advanced-security/secret-protection)\n  + EXPLORE\n    - [Why GitHub](https://github.com/why-github)\n    - [Documentation](https://docs.github.com)\n    - [Blog](https://github.blog)\n    - [Changelog](https://github.blog/changelog)\n    - [Marketplace](https://github.com/marketplace)\n\n  [View all features](https://github.com/features)\n* Solutions\n\n  + BY COMPANY SIZE\n    - [Enterprises](https://github.com/enterprise)\n    - [Small and medium teams](https://github.com/team)\n    - [Startups](https://github.com/enterprise/startups)\n    - [Nonprofits](https://github.com/solutions/industry/nonprofits)\n  + BY USE CASE\n    - [App Modernization](https://github.com/solutions/use-case/app-modernization)\n    - [DevSecOps](https://github.com/solutions/use-case/devsecops)\n    - [DevOps](https://github.com/solutions/use-case/devops)\n    - [CI/CD](https://github.com/solutions/use-case/ci-cd)\n    - [View all use cases](https://github.com/solutions/use-case)\n  + BY INDUSTRY\n    - [Healthcare](https://github.com/solutions/industry/healthcare)\n    - [Financial services](https://github.com/solutions/industry/financial-services)\n    - [Manufacturing](https://github.com/solutions/industry/manufacturing)\n    - [Government](https://github.com/solutions/industry/government)\n    - [View all industries](https://github.com/solutions/industry)\n\n  [View all solutions](https://github.com/solutions)\n* Resources\n\n  + EXPLORE BY TOPIC\n    - [AI](https://github.com/resources/articles?topic=ai)\n    - [Software Development](https://github.com/resources/articles?topic=software-development)\n    - [DevOps](https://github.com/resources/articles?topic=devops)\n    - [Security](https://github.com/resources/articles?topic=security)\n    - [View all topics](https://github.com/resources/articles)\n  + EXPLORE BY TYPE\n    - [Customer stories](https://github.com/customer-stories)\n    - [Events & webinars](https://github.com/resources/events)\n    - [Ebooks & reports](https://github.com/resources/whitepapers)\n    - [Business insights](https://github.com/solutions/executive-insights)\n    - [GitHub Skills](https://skills.github.com)\n  + SUPPORT & SERVICES\n    - [Documentation](https://docs.github.com)\n    - [Customer support](https://support.github.com)\n    - [Community forum](https://github.com/orgs/community/discussions)\n    - [Trust center](https://github.com/trust-center)\n    - [Partners](https://github.com/partners)\n* Open Source\n\n  + COMMUNITY\n    - [GitHub SponsorsFund open source developers](https://github.com/sponsors)\n  + PROGRAMS\n    - [Security Lab](https://securitylab.github.com)\n    - [Maintainer Community](https://maintainers.github.com)\n    - [Accelerator](https://github.com/accelerator)\n    - [Archive Program](https://archiveprogram.github.com)\n  + REPOSITORIES\n    - [Topics](https://github.com/topics)\n    - [Trending](https://github.com/trending)\n    - [Collections](https://github.com/collections)\n* Enterprise\n\n  + ENTERPRISE SOLUTIONS\n    - [Enterprise platformAI-powered developer platform](https://github.com/enterprise)\n  + AVAILABLE ADD-ONS\n    - [GitHub Advanced SecurityEnterprise-grade security features](https://github.com/security/advanced-security)\n    - [Copilot for BusinessEnterprise-grade AI features](https://github.com/features/copilot/copilot-business)\n    - [Premium SupportEnterprise-grade 24/7 support](https://github.com/premium-support)\n* [Pricing](https://github.com/pricing)\n\nSearch or jump to...\n\n\n# Search code, repositories, users, issues, pull requests...\n\nSearch\n\nClear\n\n[Search syntax tips](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax)\n\n# Provide feedback\n\nWe read every piece of feedback, and take your input very seriously.\n\n\nInclude my email address so I can be contacted\n\nCancel\n Submit feedback\n\n\n\n\n\n# Saved searches\n\n## Use saved searches to filter your results more quickly\n\nName\n\nQuery\n\nTo see all available qualifiers, see our [documentation](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax).\n\nCancel\n Create saved search\n\n[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Fjacob-bd%2Fnotebooklm-mcp-cli)\n\n[Sign up](/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=jacob-bd%2Fnotebooklm-mcp-cli)\n\nAppearance settings\n\nResetting focus\n\nYou signed in with another tab or window. Reload to refresh your session.\nYou signed out in another tab or window. Reload to refresh your session.\nYou switched accounts on another tab or window. Reload to refresh your session.\n \n\n\nDismiss alert\n\n{{ message }}\n\n[jacob-bd](/jacob-bd) \n/\n**[notebooklm-mcp-cli](/jacob-bd/notebooklm-mcp-cli)**\nPublic\n\n* [Notifications](/login?return_to=%2Fjacob-bd%2Fnotebooklm-mcp-cli) You must be signed in to ch",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://github.com/jacob-bd/notebooklm-mcp-cli"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: GitHub - jacob-bd/notebooklm-mcp-cli",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "GitHub - jacob-bd/notebooklm-mcp-cli",
      "subtitles": null,
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

The HTML didn't include the star count. Let me try the GitHub API instead.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T13:38:19.671286Z",
  "stop_timestamp": "2026-03-21T13:38:21.496301Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01B1aa21HgprkRYcfkKQVniZ",
  "name": "bash_tool",
  "input": {
    "command": "curl -s https://api.github.com/repos/jacob-bd/notebooklm-mcp-cli | python3 -c \"import sys,json; d=json.load(sys.stdin); print(f'jacob-bd/notebooklm-mcp-cli: {d.get(\\\"stargazers_count\\\",\\\"N/A\\\")} stars, {d.get(\\\"forks_count\\\",\\\"N/A\\\")} forks')\"",
    "description": "Get star count for notebooklm-mcp-cli"
  },
  "message": "Get star count for notebooklm-mcp-cli",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"curl -s https://api.github.com/repos/jacob-bd/notebooklm-mcp-cli | python3 -c \\\"import sys,json; d=json.load(sys.stdin); print(f'jacob-bd/notebooklm-mcp-cli: {d.get(\\\\\\\"stargazers_count\\\\\\\",\\\\\\\"N/A\\\\\\\")} stars, {d.get(\\\\\\\"forks_count\\\\\\\",\\\\\\\"N/A\\\\\\\")} forks')\\\"\"}"
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
  "tool_use_id": "toolu_01B1aa21HgprkRYcfkKQVniZ",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":1,\"stdout\":\"\",\"stderr\":\"Traceback (most recent call last):\\n  File \\\"<string>\\\", line 1, in <module>\\n  File \\\"/usr/lib/python3.12/json/__init__.py\\\", line 293, in load\\n    return loads(fp.read(),\\n           ^^^^^^^^^^^^^^^^\\n  File \\\"/usr/lib/python3.12/json/__init__.py\\\", line 346, in loads\\n    return _default_decoder.decode(s)\\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^\\n  File \\\"/usr/lib/python3.12/json/decoder.py\\\", line 337, in decode\\n    obj, end = self.raw_decode(s, idx=_w(s, 0).end())\\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\n  File \\\"/usr/lib/python3.12/json/decoder.py\\\", line 355, in raw_decode\\n    raise JSONDecodeError(\\\"Expecting value\\\", s, err.value) from None\\njson.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)\\n\"}",
      "uuid": "c3c69c68-91f8-4fab-9c52-51862cd29fb9"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "commandLine",
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"plaintext\", \"code\": \"Traceback (most recent call last):\\n  File \\\"<string>\\\", line 1, in <module>\\n  File \\\"/usr/lib/python3.12/json/__init__.py\\\", line 293, in load\\n    return loads(fp.read(),\\n           ^^^^^^^^^^^^^^^^\\n  File \\\"/usr/lib/python3.12/json/__init__.py\\\", line 346, in loads\\n    return _default_decoder.decode(s)\\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^\\n  File \\\"/usr/lib/python3.12/json/decoder.py\\\", line 337, in decode\\n    obj, end = self.raw_decode(s, idx=_w(s, 0).end())\\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\n  File \\\"/usr/lib/python3.12/json/decoder.py\\\", line 355, in raw_decode\\n    raise JSONDecodeError(\\\"Expecting value\\\", s, err.value) from None\\njson.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)\\n\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

GitHub API is blocked. Let me try web_fetch on the GitHub API or search for star counts.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T13:38:32.118583Z",
  "stop_timestamp": "2026-03-21T13:38:32.509578Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KQgmgTf9WTmPggJ6uAkPc7",
  "name": "web_search",
  "input": {
    "query": "jacob-bd notebooklm-mcp-cli github stars count 2026"
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
  "tool_use_id": "toolu_01KQgmgTf9WTmPggJ6uAkPc7",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - jacob-bd/notebooklm-mcp-cli · GitHub",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "🎉 January 2026 — Major Update! This project has been completely refactored to unify NotebookLM-MCP and NotebookLM-CLI into a single, powerful package. One install gives you both the CLI (nlm) and MCP server (notebooklm-mcp).\n\n🎉 January 2026 — Major Update! This project has been completely refactored to unify NotebookLM-MCP and NotebookLM-CLI into a single, powerful package. One install gives you both the CLI (nlm) and MCP server (notebooklm-mcp). See the CLI Guide and MCP Guide for full documentation. Programmatic access to Google NotebookLM — via command-line interface (CLI) or Model Context Protocol (MCP) server. Note: Tested with Pro/free tier accounts. May work with NotebookLM Enterprise accounts but has not been tested. ... nlm notebook list # List all notebooks nlm notebook create \"Research Project\" # Create a notebook nlm source add <notebook> --url \"https://...\" # Add sources nlm audio create <notebook> --confirm # Generate podcast nlm download audio <notebook> <artifact-id> # Download audio file nlm share public <notebook> # Enable public link · Run nlm --ai for comprehensive AI-assistant documentation.\n\nConnect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity # Generate JSON config for any other tool nlm setup add json · Then use natural language: \"Create a notebook about quantum computing and generate a podcast\" ... Use at your own risk for personal/experimental purposes. 🆕 Claude Desktop users: Download the extension (.mcpb file) → double-click → done! One-click install, no config needed. Install from PyPI. This single package includes both the CLI and MCP server: ... # Clone the repository git clone https://github.com/jacob-bd/notebooklm-mcp-cli.git cd notebooklm-mcp # Install with uv uv tool install . # Using uv uv tool upgrade notebooklm-mcp-cli # Using pip pip install --upgrade notebooklm-mcp-cli # Using pipx pipx upgrade notebooklm-mcp-cli ·\n\nNote: MCP server configuration (in Claude Code, Cursor, etc.) does not need to change — the executable name notebooklm-mcp is the same. ... # Using uv uv tool uninstall notebooklm-mcp-cli # Using pip pip uninstall notebooklm-mcp-cli # Using pipx pipx uninstall notebooklm-mcp-cli # Remove cached auth tokens and data (optional) rm -rf ~/.notebooklm-mcp-cli ...\n\n⚠️ Context Window Warning: This MCP provides 35 tools. Disable it when not using NotebookLM to preserve context. In Claude Code: @notebooklm-mcp to toggle. Use nlm setup to automatically configure the MCP server for your AI tools — no manual JSON editing required: # Add to any supported tool nlm setup add claude-code nlm setup add claude-desktop nlm setup add gemini nlm setup add cursor nlm setup add windsurf # Generate JSON config for any other tool nlm setup add json # Check which tools are configured nlm setup list # Diagnose installation & auth issues nlm doctor · Install the NotebookLM expert guide for your AI assistant to help it use the tools effectively. Supported for Cline, Antigravity, OpenClaw, Codex, OpenCode, Claude Code, and Gemini CLI. # Install skill files nlm skill install cline nlm skill install openclaw nlm skill install codex nlm skill install antigravity # Update skills nlm skill update ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - jacob-bd/notebooklm-cli · GitHub",
      "url": "https://github.com/jacob-bd/notebooklm-cli",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This project has been merged into NotebookLM MCP CLI. No further updates will be made to this repository. The new package includes both the CLI (nlm) and MCP server (notebooklm-mcp) in a single installation. A powerful command-line interface for Google NotebookLM ... ⚠️ Important Disclaimer: This CLI uses internal APIs that are undocumented and may change without notice. Not affiliated with or endorsed by Google. Use at your own risk for personal/experimental purposes. See also: notebooklm-mcp-cli for the unified CLI + MCP server. ... Full NotebookLM API Coverage — Notebooks, sources, audio podcasts, reports, quizzes, flashcards, mind maps, slides, infographics, videos, and data tables · Seamless Authentication — Uses Chrome DevTools Protocol for reliable, automatic cookie extraction · AI-Teachable — Run nlm --ai to output comprehensive documentation that AI assistants can consume ·\n\nThis project has been merged into NotebookLM MCP CLI. No further updates will be made to this repository. The new package includes both the CLI (nlm) and MCP server (notebooklm-mcp) in a single installation. A powerful command-line interface for Google NotebookLM ... ⚠️ Important Disclaimer: This CLI uses internal APIs that are undocumented and may change without notice. Not affiliated with or endorsed by Google. Use at your own risk for personal/experimental purposes. See also: notebooklm-mcp-cli for the unified CLI + MCP server. ... Full NotebookLM API Coverage — Notebooks, sources, audio podcasts, reports, quizzes, flashcards, mind maps, slides, infographics, videos, and data tables · Seamless Authentication — Uses Chrome DevTools Protocol for reliable, automatic cookie extraction · AI-Teachable — Run nlm --ai to output comprehensive documentation that AI assistants can consume ·\n\nNotebookLM sessions typically last ~20 minutes. If commands start failing with authentication errors, simply re-run: ... Having issues? See the Troubleshooting Guide for solutions to common problems including authentication, network issues, and OpenAI Codex sandbox configuration. For detailed technical documentation on the internal API and advanced usage, see the docs/ folder: ... For AI assistants, run nlm --ai to get the full command reference. Contributions are welcome! See CONTRIBUTING.md for guidelines. # Quick start for contributors git clone https://github.com/jacob-bd/notebooklm-cli.git cd notebooklm-cli uv pip install -e \".[dev]\" uv run pytest ... Full transparency: this project was built by a non-developer using AI coding assistants. If you're an experienced Python developer, you might look at this codebase and wince. That's okay. The goal here was to scratch an itch—programmatic access to NotebookLM—and learn along the way.\n\n# Using pip pip install notebooklm-cli # Using pipx (recommended for CLI tools) pipx install notebooklm-cli # Using uv uv tool install notebooklm-cli ... This launches Chrome, navigates to NotebookLM, and automatically extracts your session cookies. You'll need to log in to your Google account if not already signed in. ... # Create a new notebook nlm notebook create \"My Research\" # Output: Created notebook: abc123-def456-... # Add a URL source nlm source add abc123-def456 --url \"https://example.com/article\" # Add a YouTube video nlm source add abc123-def456 --url \"https://youtube.com/watch?v=...\" # Add pasted text nlm source add abc123-def456 --text \"Your content here\" --title \"My Notes\" ... # Set an alias nlm alias set myproject abc123-def456-... # Types are auto-detected! # Now use the alias anywhere nlm notebook get myproject nlm source list myproject nlm audio create myproject --confirm # Manage aliases nlm alias list # List all aliases nlm alias get myproject # Resolve to UUID nlm",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-cli",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-mcp-cli/README.md at main · jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/README.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "🎉 January 2026 — Major Update! This project has been completely refactored to unify NotebookLM-MCP and NotebookLM-CLI into a single, powerful package. One install gives you both the CLI (nlm) and MCP server (notebooklm-mcp).\n\n🎉 January 2026 — Major Update! This project has been completely refactored to unify NotebookLM-MCP and NotebookLM-CLI into a single, powerful package. One install gives you both the CLI (nlm) and MCP server (notebooklm-mcp). See the CLI Guide and MCP Guide for full documentation. Programmatic access to Google NotebookLM — via command-line interface (CLI) or Model Context Protocol (MCP) server. Note: Tested with Pro/free tier accounts. May work with NotebookLM Enterprise accounts but has not been tested. ... nlm notebook list # List all notebooks nlm notebook create \"Research Project\" # Create a notebook nlm source add <notebook> --url \"https://...\" # Add sources nlm audio create <notebook> --confirm # Generate podcast nlm download audio <notebook> <artifact-id> # Download audio file nlm share public <notebook> # Enable public link · Run nlm --ai for comprehensive AI-assistant documentation.\n\nConnect AI assistants (Claude, Gemini, Cursor, etc.) to NotebookLM: # Automatic setup — picks the right config for each tool nlm setup add claude-code nlm setup add gemini nlm setup add cursor nlm setup add cline nlm setup add antigravity · Then use natural language: \"Create a notebook about quantum computing and generate a podcast\" ... Use at your own risk for personal/experimental purposes. 🆕 Claude Desktop users: Download the extension (.mcpb file) → double-click → done! One-click install, no config needed. Install from PyPI. This single package includes both the CLI and MCP server: ... # Clone the repository git clone https://github.com/jacob-bd/notebooklm-mcp-cli.git cd notebooklm-mcp # Install with uv uv tool install . # Using uv uv tool upgrade notebooklm-mcp-cli # Using pip pip install --upgrade notebooklm-mcp-cli # Using pipx pipx upgrade notebooklm-mcp-cli ·\n\nNote: MCP server configuration (in Claude Code, Cursor, etc.) does not need to change — the executable name notebooklm-mcp is the same. ... # Using uv uv tool uninstall notebooklm-mcp-cli # Using pip pip uninstall notebooklm-mcp-cli # Using pipx pipx uninstall notebooklm-mcp-cli # Remove cached auth tokens and data (optional) rm -rf ~/.notebooklm-mcp-cli ...\n\n⚠️ Context Window Warning: This MCP provides 29 tools. Disable it when not using NotebookLM to preserve context. In Claude Code: @notebooklm-mcp to toggle. Use nlm setup to automatically configure the MCP server for your AI tools — no manual JSON editing required: # Add to any supported tool nlm setup add claude-code nlm setup add claude-desktop nlm setup add gemini nlm setup add cursor nlm setup add windsurf # Check which tools are configured nlm setup list # Diagnose installation & auth issues nlm doctor · Install the NotebookLM expert guide for your AI assistant to help it use the tools effectively. Supported for Cline, Antigravity, OpenClaw, Codex, OpenCode, Claude Code, and Gemini CLI. # Install skill files nlm skill install cline nlm skill install openclaw nlm skill install codex nlm skill install antigravity # Update skills nlm skill update ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/README.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Releases · jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/releases",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "pip install --upgrade notebooklm-mcp-cli # or uv tool install --force notebooklm-mcp-cli ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Query Timeout Flag - nlm notebook query and nlm query notebook now accept --timeout / -t to set query timeout in seconds (default: 120). Useful for long extraction prompts that need more processing time (closes #57). nlm notebook query &lt;id&gt; &quot;long extraction prompt&quot; --timeout 300 · Full changelog: https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/CHANGELOG.md ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Revise individual slides in an existing slide deck. Creates a new artifact with revisions applied — the original is never modified. MCP: studio_revise tool with artifact_id, slide_instructions, and confirm params ·\n\npip install --upgrade notebooklm-mcp-cli # or uv tool install --force notebooklm-mcp-cli ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Query Timeout Flag - nlm notebook query and nlm query notebook now accept --timeout / -t to set query timeout in seconds (default: 120). Useful for long extraction prompts that need more processing time (closes #57). nlm notebook query <id> \"long extraction prompt\" --timeout 300 · Full changelog: https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/CHANGELOG.md ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Revise individual slides in an existing slide deck. Creates a new artifact with revisions applied — the original is never modified. MCP: studio_revise tool with artifact_id, slide_instructions, and confirm params ·\n\nMCP: download_artifact with slide_deck_format=\"pptx\" Connection pooling and reduced sleep durations cut nlm login time from ~25s to under 3s. Thanks to @pjeby for this contribution (PR #54). Account mismatch guard prevents accidentally overwriting a profile with credentials from a different Google account. Use --force to override. nlm login now warns when connecting to an existing Chrome instance instead of launching a fresh one. Full changelog: https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/CHANGELOG.md ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... OpenClaw skill path - Fixed incorrect installation path for OpenClaw skills. Now correctly uses ~/.openclaw/workplace/skills/ instead of ~/.openclaw/skills/. ...\n\nAuto-extract build label (bl) - The bl URL parameter is now automatically extracted from the NotebookLM page during nlm login and CSRF token refresh, instead of using a hardcoded value that goes stale every few weeks. The NOTEBOOKLM_BL env var still works as an override. sources_used now populated in query responses - The sources_used field was always returning [] even when the answer contained citation markers like [1], [2]. Query responses now correctly return sources_used (list of cited source IDs) and citations (dict mapping each citation number to its parent source ID). This also enables the REPL's citation legend feature. Thanks to @MinhDung2209 for reporting (#57). ... There was an error while loading. Please reload this page. ... There was an error while loading. Please reload this page. ... Source Rename (source_rename) — Rename any source within a notebook via new RPC b7Wfje. MCP tool: source_rename with notebook_id, source_id, and new_title params ·\n\nUpdated CLI_GUIDE.md, MCP_CLI_TEST_PLAN.md, and agent documentation with --focus examples. ... There was an error while loading. Please reload this page.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/releases",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Activity · jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/activity",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "jacob-bd / notebooklm-mcp-cli Public · Notifications · You must be signed in to change notification settings · Fork 474 · Star 2.7k ·\n\njacob-bd / notebooklm-mcp-cli Public · Notifications · You must be signed in to change notification settings · Fork 474 · Star 2.7k ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/activity",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/issues",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Star 901 · Search Issues · is:issue state:open · is:issue state:open Search · LabelsMilestonesNew issue · Open · Closed · Status: Open. #33 In jacob-bd/notebooklm-mcp-cli; · midtownninja opened · on Feb 4, 2026 · Status: Open.\n\nStar 901 · Search Issues · is:issue state:open · is:issue state:open Search · LabelsMilestonesNew issue · Open · Closed · Status: Open. #33 In jacob-bd/notebooklm-mcp-cli; · midtownninja opened · on Feb 4, 2026 · Status: Open. #3 In jacob-bd/notebooklm-mcp-cli; · ccchan234 opened · on Jan 5, 2026 ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/issues",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-mcp-cli/docs at main · jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/tree/main/docs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "jacob-bd / notebooklm-mcp-cli Public · Notifications · You must be signed in to change notification settings · Fork 249 · Star 961 ·\n\njacob-bd / notebooklm-mcp-cli Public · Notifications · You must be signed in to change notification settings · Fork 249 · Star 961 ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/tree/main/docs",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "jacob-bd (Jacob Ben-David) · GitHub",
      "url": "https://github.com/jacob-bd",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Stars · notebooklm-mcp-cli · notebooklm-mcp-cli Public · Python 2.1k 407 · llm-council-plus · llm-council-plus Public · Forked from karpathy/llm-council · LLM Council works together to answer your hardest questions · JavaScript 227 60 · ai-code-connect · ai-code-connect Public · A CLI tool that connects Claude Code and Gemini CLI, eliminating manual copy-paste between AI coding assistants. TypeScript 17 9 · universal-skills-manager · universal-skills-manager Public · Python 43 11 · Something went wrong, please refresh the page to try again. If the problem persists, check the GitHub status page or contact support. There was an error while loading. Please reload this page.\n\nStars · notebooklm-mcp-cli · notebooklm-mcp-cli Public · Python 2.1k 407 · llm-council-plus · llm-council-plus Public · Forked from karpathy/llm-council · LLM Council works together to answer your hardest questions · JavaScript 227 60 · ai-code-connect · ai-code-connect Public · A CLI tool that connects Claude Code and Gemini CLI, eliminating manual copy-paste between AI coding assistants. TypeScript 17 9 · universal-skills-manager · universal-skills-manager Public · Python 43 11 · Something went wrong, please refresh the page to try again. If the problem persists, check the GitHub status page or contact support. There was an error while loading. Please reload this page.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-mcp-cli/CLAUDE.md at main · jacob-bd/notebooklm-mcp-cli",
      "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/CLAUDE.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "NotebookLM MCP Server &amp; CLI - Provides programmatic access to NotebookLM (notebooklm.google.com) via both a Model Context Protocol server and a comprehensive command-line interface. Tested with personal/free tier accounts. May work with Google Workspace accounts but has not been tested. # Install dependencies uv tool install . # Reinstall after code changes (ALWAYS clean cache first) uv cache clean &amp;&amp; uv tool install --force . # Run the MCP server (stdio) notebooklm-mcp # Run with Debug logging notebooklm-mcp --debug # Run as HTTP server notebooklm-mcp --transport http --port 8000 # Run tests uv run pytest # Run a single test uv run pytest tests/test_file.py::test_function -v ... You only need to provide COOKIES! The CSRF token and session ID are now automatically extracted when needed. Option A - Fast (Recommended): Extract CSRF token and session ID directly from network request - no page fetch needed!\n\nNotebookLM MCP Server & CLI - Provides programmatic access to NotebookLM (notebooklm.google.com) via both a Model Context Protocol server and a comprehensive command-line interface. Tested with personal/free tier accounts. May work with Google Workspace accounts but has not been tested. # Install dependencies uv tool install . # Reinstall after code changes (ALWAYS clean cache first) uv cache clean && uv tool install --force . # Run the MCP server (stdio) notebooklm-mcp # Run with Debug logging notebooklm-mcp --debug # Run as HTTP server notebooklm-mcp --transport http --port 8000 # Run tests uv run pytest # Run a single test uv run pytest tests/test_file.py::test_function -v ... You only need to provide COOKIES! The CSRF token and session ID are now automatically extracted when needed. Option A - Fast (Recommended): Extract CSRF token and session ID directly from network request - no page fetch needed!\n\nsrc/notebooklm_tools/ ├── __init__.py # Package version ├── services/ # Shared service layer (v0.3.0+) │ ├── errors.py # ServiceError, ValidationError, NotFoundError, etc. │ ├── chat.py # Chat/query logic │ ├── downloads.py # Artifact downloading │ ├── exports.py # Google Docs/Sheets export │ ├── notebooks.py # Notebook CRUD + describe │ ├── notes.py # Note CRUD │ ├── research.py # Research start/poll/import │ ├── sharing.py # Public link, invite, status │ ├── sources.py # Source add/list/sync/delete │ └── studio.py # Artifact creation, status, rename, delete ├── cli/ # CLI commands and formatting (thin wrapper) ├── mcp/ # MCP server + tools (thin wrapper) │ ├── server.py # FastMCP server facade │ └── tools/ # Modular tool definitions per domain ├── core/ # Low-level API client (no business logic) │ ├── client.py # Internal batchexecute API calls │ ├── constants.py # Code-name mappings (CodeMapper class) │ └── auth.py # AuthManager for profile-based token caching └── utils/ ├── config.\n\ncli/ and mcp/ must NOT import from core/ directly — always go through services/ services/ raises ServiceError/ValidationError — never raw exceptions ... ├── config.toml # CLI settings (default_profile, output format) ├── aliases.json # Notebook aliases ├── profiles/<name>/auth.json # Per-profile credentials and email ├── chrome-profile/ # Chrome session (single-profile/legacy) └── chrome-profiles/<name>/ # Chrome sessions (multi-profile) ... studio_delete requires confirm=True - list artifacts first via studio_status, deletion is IRREVERSIBLE · studio_revise requires confirm=True - creates a new artifact with revisions applied · note_delete requires confirm=True - deletion is IRREVERSIBLE · None - all NotebookLM features that can be accessed programmatically are implemented.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/jacob-bd/notebooklm-mcp-cli/blob/main/CLAUDE.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - jacob-bd/notebooklm-mcp-cli | B Lab",
      "url": "https://b-lab.team/en/content/b6ebeaa0-1f9c-4d96-8cd3-4811c217565c",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "b-lab.team",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=b-lab.team",
        "site_name": "B Lab"
      },
      "is_missing": false,
      "text": "... 1This project offers a unified package providing programmatic access to Google NotebookLM through both a Command-Line Interface (CLI) and a Model Context Protocol (MCP) server.\n\nThe documentation also provides detailed troubleshooting for common issues like uv upgrade problems and Chrome DevTools MCP connectivity, often stemming from npx caching issues resolved by using pnpm. Acknowledging its \"vibe coding\" origin by a non-developer using AI assistants, the project emphasizes its open-source nature and welcomes contributions for refactoring, error handling, and architectural improvements. ... 1This project offers a unified package providing programmatic access to Google NotebookLM through both a Command-Line Interface (CLI) and a Model Context Protocol (MCP) server. 2It enables users to perform a wide range of actions, including creating and managing notebooks, adding diverse sources, querying content with AI, generating various media (audio, video), and sharing, either via terminal commands or by connecting AI assistants.\n\nTo achieve this, the project implements a sophisticated authentication mechanism that requires extracting session cookies from a user's browser. The nlm login or notebooklm-mcp-auth utility facilitates this, primarily through an \"auto mode\" that launches a dedicated headless Chrome instance. Users log into their Google account within this browser, and the necessary authentication tokens and cookies are automatically extracted and stored. The system supports multiple named profiles, each maintaining an isolated Chrome session for simultaneous access to different Google accounts. The project includes robust authentication lifecycle management, automatically refreshing CSRF tokens (valid for minutes) on demand, re-extracting session IDs at MCP server startup, and attempting to auto-refresh longer-lived cookies (2-4 weeks) via the saved headless Chrome profile.\n\nThe project exposes a comprehensive set of 31 NotebookLM functionalities as distinct MCP tools, allowing AI agents to perform complex operations via natural language commands. These tools cover: Notebook Management: notebook_list, notebook_create, notebook_share (public/invite). Source Management: source_add (supporting URLs, text, Google Drive files, local files), source_sync_drive, and source deletion. AI Interaction: notebook_query for AI chat within a notebook, and research_start for web/Drive-based research. Content Generation (Studio): studio_create for generating artifacts like audio podcasts, video explainers, briefing documents, flashcards, infographics, mind maps, and slide decks. Artifact Download: download_artifact for retrieving generated content. AI agents, such as Claude Code or Gemini CLI, integrate with the notebooklm-mcp server by configuring it as an MCP endpoint.\n\n1This project offers a unified package providing programmatic access to Google NotebookLM through both a Command-Line Interface (CLI) and a Model Context Protocol (MCP) server. 2It enables users to perform a wide range of actions, including creating and managing notebooks, adding diverse sources, querying content with AI, generating various media (audio, video), and sharing, either via terminal commands or by connecting AI assistants. 3The tool operates by extracting cookies from a browser for authentication, utilizing undocumented internal APIs to bridge NotebookLM's capabilities with external scripting and AI models. The jacob-bd/notebooklm-mcp-cli project provides programmatic access to Google NotebookLM through a unified command-line interface (CLI) and a Model Context Protocol (MCP) server. This single Python package, installed via uv, pip, or pipx, serves two primary purposes: nlm for direct terminal scripting and automation, and notebooklm-mcp for integrating NotebookLM capabili",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://b-lab.team/en/content/b6ebeaa0-1f9c-4d96-8cd3-4811c217565c",
        "search_provider": "anthropic",
        "age": "January 31, 2026"
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

I found some star counts from different cached pages. The numbers vary because they were cached at different times:
- From the activity page: 2.7k stars, 474 forks
- From the issues page: 901 stars
- From the docs page: 961 stars, 249 forks
- From jacob-bd's profile: 2.1k stars, 407 forks

The most recent/highest numbers suggest around 2.1k-2.7k stars. The variation is due to different caching times. Let me also check the PleasePrompto one.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T13:38:44.751065Z",
  "stop_timestamp": "2026-03-21T13:38:44.971656Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01NRwpRnCycUpsdBGXGk1G6n",
  "name": "web_search",
  "input": {
    "query": "PleasePrompto notebooklm-mcp github stars"
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
  "tool_use_id": "toolu_01NRwpRnCycUpsdBGXGk1G6n",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - PleasePrompto/notebooklm-mcp: MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. · GitHub",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Can I see what&#x27;s happening? Yes! Say &quot;Show me the browser&quot; to watch the live NotebookLM conversation. What makes this better than Claude&#x27;s built-in knowledge? Your docs are always current. No training cutoff. No hallucinations. Perfect for new libraries, internal APIs, or fast-moving projects. ... Stop debugging hallucinations. Start shipping accurate code. # Get started in 30 seconds claude mcp add notebooklm npx notebooklm-mcp@latest · This tool automates browser interactions with NotebookLM to make your workflow more efficient. However, a few friendly reminders: About browser automation: While I&#x27;ve built in humanization features (realistic typing speeds, natural delays, mouse movements) to make the automation behave more naturally, I can&#x27;t guarantee Google won&#x27;t detect or flag automated usage. I recommend using a dedicated Google account for automation rather than your primary account—think of it like web scraping: probably fine, but better safe than sorry!\n\nPrefer Claude Code Skills over MCP? This server is now also available as a native Claude Code Skill with a simpler setup: NotebookLM Claude Code Skill - Clone to ~/.claude/skills and start using immediately ... MCP Server (this repo): Persistent sessions, works with Claude Code, Codex, Cursor, and other MCP clients · Claude Code Skill: Simpler setup, Python-based, stateless queries, works only with local Claude Code · Both use the same browser automation technology and provide zero-hallucination answers from your NotebookLM notebooks. ... That's it. Claude now asks NotebookLM whatever it needs, building expertise before writing code. Challenge: n8n's API is new — Claude hallucinates node names and functions. ... Told Claude: \"Build me a Gmail spam filter workflow. Use this NotebookLM: [link]\" ...\n\nFresh start anytime. Scans entire system for NotebookLM data with categorized preview. Reduce token usage by loading only the tools you need. Each tool consumes context tokens — fewer tools = faster responses and lower costs. ... All tools including cleanup_data, re_auth, remove_notebook, reset_session, close_session, get_library_stats · # Check current settings npx notebooklm-mcp config get # Set a profile npx notebooklm-mcp config set profile minimal npx notebooklm-mcp config set profile standard npx notebooklm-mcp config set profile full # Disable specific tools (comma-separated) npx notebooklm-mcp config set disabled-tools \"cleanup_data,re_auth\" # Reset to defaults npx notebooklm-mcp config reset · # Set profile export NOTEBOOKLM_PROFILE=minimal # Disable specific tools export NOTEBOOKLM_DISABLED_TOOLS=\"cleanup_data,re_auth,remove_notebook\" Settings are saved to ~/.config/notebooklm-mcp/settings.json and persist across sessions.\n\nCan I see what's happening? Yes! Say \"Show me the browser\" to watch the live NotebookLM conversation. What makes this better than Claude's built-in knowledge? Your docs are always current. No training cutoff. No hallucinations. Perfect for new libraries, internal APIs, or fast-moving projects. ... Stop debugging hallucinations. Start shipping accurate code. # Get started in 30 seconds claude mcp add notebooklm npx notebooklm-mcp@latest · This tool automates browser interactions with NotebookLM to make your workflow more efficient. However, a few friendly reminders: About browser automation: While I've built in humanization features (realistic typing speeds, natural delays, mouse movements) to make the automation behave more naturally, I can't guarantee Google won't detect or flag automated usage. I recommend using a dedicated Google account for automation rather than your primary account—think of it like web scraping: probably fine, but better safe than sorry!\n\nLet your CLI agents (Claude, Cursor, Codex...) chat directly with NotebookLM for zero-hallucination answers based on your own notebooks · Installation • Quick Start • Why NotebookLM • Examples • Claude Code Skill • Documentation · When you tell Claude Code or Cursor to \"search through my local documentation\", here's what happens: Massive token consumption: Searching through documentation means reading multiple files repeatedly · Inaccurate retrieval: Searches for keywords, misses context and connections between docs · Hallucinations: When it can't find something, it invents plausible-sounding APIs · Expensive & slow: Each question requires re-reading multiple files · Let your local agents chat directly with NotebookLM — Google's zero-hallucination knowledge base powered by Gemini 2.5 that provides intelligent, synthesized answers from your docs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "PleasePrompto - Overview",
      "url": "https://github.com/PleasePrompto",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Report abuse · More · Overview · Repositories · Projects · Packages · Stars · PleasePrompto/README.md · AI Solution Architect specializing in rapid prototyping, RAG systems, and agentic architectures.\n\nStars · PleasePrompto Follow · 🎯 · Focusing · 🎯 · Focusing · Follow · AI tooling & integration | Claude, NotebookLM, MCP | RAG systems & agentic architectures · 175 followers · 0 following · Germany · https://ductor dev · u/PleasePrompto · @PleasePrompto · x4 · x4 Block or Report · Report abuse · Contact GitHub support about this user’s behavior. Learn more about reporting abuse. Report abuse · More · Overview · Repositories · Projects · Packages · Stars · PleasePrompto/README.md · AI Solution Architect specializing in rapid prototyping, RAG systems, and agentic architectures. AI Development & Integration · AI-assisted development: Claude Code, Cursor, Codex · LLM APIs: Claude, GPT-4, Grok, Gemini, Ollama · Agentic systems: n8n, Dify, LangChain · RAG & Knowledge Systems · Hybrid retrieval with LightRAG and Knowledge Graphs ·\n\nMCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-cl… ... Claude Code skill for free Google AI Mode search with citations. Zero-config setup, persistent browser profile, query optimization. Token-efficient web research. ... MCP server for free Google AI Mode search with citations. Query optimization, CAPTCHA handling, multi-agent support. Works with Claude Code, Cursor, Cline, Windsurf. ... Something went wrong, please refresh the page to try again. If the problem persists, check the GitHub status page or contact support. There was an error while loading. Please reload this page.\n\ngoogle-ai-mode-mcp — MCP server connecting code agents to Google's AI Mode for free, token-efficient web research with AI-synthesized answers and source citations. google-ai-mode-skill — Claude Code skill for querying Google AI Mode directly—source-grounded web research with inline citations and minimal token usage. notebooklm-mcp — MCP server enabling AI agents to research documentation through NotebookLM with persistent authentication and citation-backed answers. notebooklm-skill — Claude Code skill for direct NotebookLM integration with browser automation and source-grounded responses. ... Control Claude Code, Codex CLI and Gemini CLI from Telegram. Live streaming, persistent memory, cron jobs, webhooks, Docker sandboxing. ... Use this skill to enable Claude Code to communicate directly with your Google NotebookLM notebooks. Query your uploaded documents and get source-grounded, citation-backed answers from Gemini.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Actions · PleasePrompto/notebooklm-mcp",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp/actions",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "PleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 175 · Star 1.3k · Automate your workflow from idea to production · GitHub Actions makes it easy to automate all your software ...\n\nPleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 175 · Star 1.3k · Automate your workflow from idea to production · GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Learn more about getting started with Actions. Hosted runners for every major OS make it easy to build and test all your projects. Run directly on a VM or inside a container. Use your own VMs, in the cloud or on-prem, with self-hosted runners. Save time with matrix workflows that simultaneously test across multiple operating systems and versions of your runtime. GitHub Actions supports Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice. See your workflow run in realtime with color and emoji.\n\nLearn more about getting started with Actions. Hosted runners for every major OS make it easy to build and test all your projects. Run directly on a VM or inside a container. Use your own VMs, in the cloud or on-prem, with self-hosted runners. Save time with matrix workflows that simultaneously test across multiple operating systems and versions of your runtime. GitHub Actions supports Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice. See your workflow run in realtime with color and emoji. It’s one click to copy a link that highlights a specific line number to share a CI/CD failure. Automate your software development practices with workflow files embracing the Git flow by codifying it in your repository. Test your web service and its DB in your workflow by simply adding some docker-compose to your workflow file.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp/actions",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - PleasePrompto/notebooklm-skill: Use this skill to enable Claude Code to communicate directly with your Google NotebookLM notebooks. Query your uploaded documents and get source-grounded, citation-backed answers from Gemini. Features browser automation, library management, persistent authentication, and answers exclusively from your own knowledge base. · GitHub",
      "url": "https://github.com/PleasePrompto/notebooklm-skill",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Skill version runs directly in Claude Code without MCP protocol ... Without this skill: NotebookLM in browser → Copy answer Paste in Claude → Copy next question → Back to browser... With this skill: Claude researches directly → Gets answers instantly → Writes correct code · Stop the copy-paste dance. Start getting accurate, grounded answers directly in Claude Code. # Get started in 30 seconds cd ~/.claude/skills git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm # Open Claude Code: &quot;What are my skills?&quot; Built as a Claude Code Skill adaptation of my NotebookLM MCP Server ·\n\nInstallation • Quick Start • Why NotebookLM • How It Works • MCP Alternative · This skill works ONLY with local Claude Code installations, NOT in the web UI. The web UI runs skills in a sandbox without network access, which this skill requires for browser automation. You must use Claude Code locally on your machine. When you tell Claude Code to \"search through my local documentation\", here's what happens: Massive token consumption: Searching through documentation means reading multiple files repeatedly · Inaccurate retrieval: Searches for keywords, misses context and connections between docs · Hallucinations: When it can't find something, it invents plausible-sounding APIs · Manual copy-paste: Switching between NotebookLM browser and your editor constantly · This Claude Code Skill lets Claude Code chat directly with NotebookLM — Google's source-grounded knowledge base powered by Gemini 2.5 that provides intelligent, synthesized answers exclusively from your uploaded documents.\n\nUse this skill to enable Claude Code to communicate directly with your Google NotebookLM notebooks. Query your uploaded documents and get source-grounded, citation-backed answers from Gemini. Features browser automation, library management, persistent authentication, and answers exclusively from your own knowledge base. - PleasePrompto/notebooklm-skill\n\n# 1. Create skills directory (if it doesn't exist) mkdir -p ~/.claude/skills # 2. Clone this repository cd ~/.claude/skills git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm # 3. That's it! Open Claude Code and say: \"What are my skills?\" ... Note: The setup uses real Chrome instead of Chromium for cross-platform reliability, consistent browser fingerprinting, and better anti-detection with Google services ... Claude will list your available skills including NotebookLM. ... Claude will automatically query the notebook to discover its content, then add it with appropriate metadata. ... Claude will ask for a name and topics, then save it for future use. ... Claude automatically selects the right notebook and gets the answer directly from NotebookLM. This is a Claude Code Skill - a local folder containing instructions and scripts that Claude Code can use when needed. Unlike the MCP server version, this runs directly in Claude Code without needing a separate server.\n\nWhy doesn't this work in the Claude web UI? The web UI runs skills in a sandbox without network access. Browser automation requires network access to reach NotebookLM. How is this different from the MCP server? This is a simpler, Python-based implementation that runs directly as a Claude Skill. The MCP server is more feature-rich with persistent sessions and works with multiple tools (Codex, Cursor, etc.). Can I use both this skill and the MCP server? Yes! They serve different purposes. Use the skill for quick Claude Code integration, use the MCP server for persistent sessions and multi-tool support. What if Chrome crashes? Run: \"Clear NotebookLM browser data\" and try again. Is my Google account secure? Chrome runs locally on your machine. Your credentials never leave your computer. Use a dedicated Google account if you're concerned. # Make sure it's in the right location ls ~/.claude/skills/notebooklm/ # Should show: SKILL.md, scripts/, etc.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-skill",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-mcp/README.md at main · PleasePrompto/notebooklm-mcp",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp/blob/main/README.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Let your CLI agents (Claude, Cursor, ... directly with NotebookLM — Google&#x27;s zero-hallucination knowledge base powered by Gemini 2.5 that provides intelligent, synthesized answers from your docs....\n\nPrefer Claude Code Skills over MCP? This server is now also available as a native Claude Code Skill with a simpler setup: NotebookLM Claude Code Skill - Clone to ~/.claude/skills and start using immediately ... MCP Server (this repo): Persistent sessions, works with Claude Code, Codex, Cursor, and other MCP clients · Claude Code Skill: Simpler setup, Python-based, stateless queries, works only with local Claude Code · Both use the same browser automation technology and provide zero-hallucination answers from your NotebookLM notebooks. ... That's it. Claude now asks NotebookLM whatever it needs, building expertise before writing code. Challenge: n8n's API is new — Claude hallucinates node names and functions. ... Told Claude: \"Build me a Gmail spam filter workflow. Use this NotebookLM: [link]\" ...\n\nFresh start anytime. Scans entire system for NotebookLM data with categorized preview. Reduce token usage by loading only the tools you need. Each tool consumes context tokens — fewer tools = faster responses and lower costs. ... All tools including cleanup_data, re_auth, remove_notebook, reset_session, close_session, get_library_stats · # Check current settings npx notebooklm-mcp config get # Set a profile npx notebooklm-mcp config set profile minimal npx notebooklm-mcp config set profile standard npx notebooklm-mcp config set profile full # Disable specific tools (comma-separated) npx notebooklm-mcp config set disabled-tools \"cleanup_data,re_auth\" # Reset to defaults npx notebooklm-mcp config reset · # Set profile export NOTEBOOKLM_PROFILE=minimal # Disable specific tools export NOTEBOOKLM_DISABLED_TOOLS=\"cleanup_data,re_auth,remove_notebook\" Settings are saved to ~/.config/notebooklm-mcp/settings.json and persist across sessions.\n\nCan I see what's happening? Yes! Say \"Show me the browser\" to watch the live NotebookLM conversation. What makes this better than Claude's built-in knowledge? Your docs are always current. No training cutoff. No hallucinations. Perfect for new libraries, internal APIs, or fast-moving projects. ... Stop debugging hallucinations. Start shipping accurate code. # Get started in 30 seconds claude mcp add notebooklm npx notebooklm-mcp@latest · This tool automates browser interactions with NotebookLM to make your workflow more efficient. However, a few friendly reminders: About browser automation: While I've built in humanization features (realistic typing speeds, natural delays, mouse movements) to make the automation behave more naturally, I can't guarantee Google won't detect or flag automated usage. I recommend using a dedicated Google account for automation rather than your primary account—think of it like web scraping: probably fine, but better safe than sorry!\n\nLet your CLI agents (Claude, Cursor, Codex...) chat directly with NotebookLM for zero-hallucination answers based on your own notebooks · Installation • Quick Start • Why NotebookLM • Examples • Claude Code Skill • Documentation · When you tell Claude Code or Cursor to \"search through my local documentation\", here's what happens: Massive token consumption: Searching through documentation means reading multiple files repeatedly · Inaccurate retrieval: Searches for keywords, misses context and connections between docs · Hallucinations: When it can't find something, it invents plausible-sounding APIs · Expensive & slow: Each question requires re-reading multiple files · Let your local agents chat directly with NotebookLM — Google's zero-hallucination knowledge base powered by Gemini 2.5 that provides intelligent, synthesized answers from your docs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp/blob/main/README.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "NotebookLM MCP Server by Please Prompto! | PulseMCP",
      "url": "https://www.pulsemcp.com/servers/pleaseprompto-notebooklm",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pulsemcp.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pulsemcp.com",
        "site_name": "PulseMCP"
      },
      "is_missing": false,
      "text": "GitHub Repo (1.3k stars) A standardized, official file format that defines how to use this MCP server. View the file to see installation instructions, configuration options, and usage guidelines.\n\nAutomates Google NotebookLM interactions through browser automation, enabling document querying and notebook library management with stealth capabilities to avoid detection. GitHub Repo (1.3k stars) A standardized, official file format that defines how to use this MCP server. View the file to see installation instructions, configuration options, and usage guidelines. View server.json file · NAME · com.pulsemcp.mirror/pleaseprompto-notebooklm · MAINTAINER · We (PulseMCP) are temporarily managing this server.json file until the maintainer publishes it to the official registry. Jovani Pink · Integrates browser automation with natural language commands for web scraping, form filling, and visual interaction... Classification · community · Est Visitors (All Time) 10.6k · Release Date · Jan 25, 2025 · Brian Lloyd-Newberry · Provides stealth browser capabilities using Playwright and anti-detection techniques for evading bot detection...\n\nOur estimate as to where this MCP server implementation ranks on the global leaderboard of usage. ... Automates Google NotebookLM interactions through browser automation, enabling document querying and notebook library management with stealth capabilities to avoid detection. ... A standardized, official file format that defines how to use this MCP server. View the file to see installation instructions, configuration options, and usage guidelines. ... We (PulseMCP) are temporarily managing this server.json file until the maintainer publishes it to the official registry. ... Integrates browser automation with natural language commands for web scraping, form filling, and visual interaction... ... Provides stealth browser capabilities using Playwright and anti-detection techniques for evading bot detection... ... Provides browser automation capabilities through a simple API, enabling execution of web tasks using natural language...\n\nAutomates Google NotebookLM interactions through browser automation using Selenium, enabling chat message sending, AI... ... Integrates with web browsers through automated interactions to enable web navigation, content extraction, form... ... Integrates with Google NotebookLM through browser automation to enable document analysis, question answering, and... ... Security-hardened fork with post-quantum encryption, secrets scanning, and enterprise-grade protections ... Connect to Open Notebook, an open-source NotebookLM alternative for research and knowledge management ... Automates Google NotebookLM workflows for creating notebooks, adding content sources, and generating podcasts,... ... Manages multiple named browser instances with support for Chromium and stealth Camoufox browsers, providing session...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.pulsemcp.com/servers/pleaseprompto-notebooklm",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "PleasePrompto/notebooklm-mcp",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp/issues",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "PleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 201 · Star 1.5k · Search Issues · is:issue state:open · is:issue state:open Search · LabelsMilestonesNew issue · Open ...\n\nPleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 201 · Star 1.5k · Search Issues · is:issue state:open · is:issue state:open Search · LabelsMilestonesNew issue · Open · Closed · Status: Open. #32 In PleasePrompto/notebooklm-mcp; · obilodeau opened · on Mar 18, 2026 · Status: Open. #30 In PleasePrompto/notebooklm-mcp; · jonathanzhan1975 opened · on Mar 15, 2026 · Status: Open. #29 In PleasePrompto/notebooklm-mcp; · jawQ opened · on Mar 13, 2026 · Status: Open. #28 In PleasePrompto/notebooklm-mcp; · PointStarIL opened · on Mar 9, 2026 · Status: Open. #27 In PleasePrompto/notebooklm-mcp; · vzografos opened · on Mar 6, 2026 · Status: Open. #25 In PleasePrompto/notebooklm-mcp; · HR-AR opened · on Feb 25, 2026 · Status: Open. #21 In PleasePrompto/notebooklm-mcp; ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp/issues",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-mcp/docs/tools.md at main · PleasePrompto/notebooklm-mcp",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp/blob/main/docs/tools.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base. - notebooklm-mcp/docs/tools.md at main · PleasePrompto/notebooklm-mcp\n\nReturns NotebookLM's answer plus the follow-up reminder. ... Summaries auth status, active sessions, and configuration. ... Opens the persistent Chrome profile so you can log in manually. ... Switch to a different Google account or re-authenticate. Use when NotebookLM rate limit is reached (50 queries/day for free accounts). Closes all sessions, clears auth data, and opens browser for fresh login. add_notebook – Safe conversational add; expects confirmation before writing. list_notebooks – Returns id, name, topics, URL, metadata for every entry. ... JSON representation of the full library: active notebook, stats, individual notebooks. ... Fetch metadata for a specific notebook. The {id} completion pulls from the library automatically.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp/blob/main/docs/tools.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "NotebookLM API Support · Issue #17 · PleasePrompto/notebooklm-mcp",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp/issues/17",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "PleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 156 · Star 1.2k · New issueCopy link · New issueCopy link · Open · Open · NotebookLM API Support#17 · Copy link · ...\n\nPleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 156 · Star 1.2k · New issueCopy link · New issueCopy link · Open · Open · NotebookLM API Support#17 · Copy link · muthukumaranR · opened · on Jan 20, 2026 · Issue body actions · Hi, Does it / Do you have plans to support NotebookLM via API access? That would circumvent the web login and make it conducive for environments where web access is not possible (i.e. automations / services) I can work on a feature if it's not when I get time if you have no plans and think it's okay. let me know! thanks for a nice idea! here's the API documentation FYI: https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks · Reactions are currently unavailable · No one assigned · No labels · No labels · No projects ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp/issues/17",
        "search_provider": "anthropic",
        "age": "January 20, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Activity · PleasePrompto/notebooklm-mcp",
      "url": "https://github.com/PleasePrompto/notebooklm-mcp/activity",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "PleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 131 · Star 934 ·\n\nPleasePrompto / notebooklm-mcp Public · Notifications · You must be signed in to change notification settings · Fork 131 · Star 934 ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/PleasePrompto/notebooklm-mcp/activity",
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

Now I have good data. Let me summarize:

**jacob-bd/notebooklm-mcp-cli**: Multiple cached snapshots show different counts (the pages were cached at different times), but the most recent/highest numbers are around 2.1k-2.7k stars. The profile page shows "2.1k" and the activity page shows "2.7k".

**PleasePrompto/notebooklm-mcp**: Around 1.2k-1.5k stars based on different cached pages.

So jacob-bd/notebooklm-mcp-cli has the most stars. But I should note that these numbers come from different cached snapshots and may not reflect the exact current count.

</details>

Based on the star counts visible across various GitHub pages (noting these are from cached snapshots at different points in time, so exact current numbers may differ slightly):

**`jacob-bd/notebooklm-mcp-cli`** has the most stars — approximately 2.1k stars with 407 forks (one cached page showed as high as 2.7k stars with 474 forks).

**`PleasePrompto/notebooklm-mcp`** is second, with approximately 1.5k stars and 201 forks.

So `jacob-bd/notebooklm-mcp-cli` is the clear leader in popularity. It's also described as "clearly very popular" in a recent Medium article about integrating NotebookLM with Gemini CLI. A key differentiator is that it uses NotebookLM's internal HTTP APIs directly (after a one-time browser login for cookie extraction) rather than relying on browser automation for every query, which makes it faster and more reliable for ongoing use.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d109d-eeee-76c4-8949-82b5eeb8e9e4",
  "updated_at": "2026-03-21T13:39:05.279317Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d109d-eeee-7eb3-883c-333b9b732001"
}
```

</details>

### 5. human — 2026-03-21T14:02:10.947981Z

https://github.com/teng-lin/notebooklm-py
Have you mentioned this before?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d10b4-0cc8-78bf-82cc-eaaeb385c41d",
  "updated_at": "2026-03-21T14:02:10.947981Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d109d-eeee-76c4-8949-82b5eeb8e9e4"
}
```

</details>

### 6. assistant — 2026-03-21T14:02:55.641729Z

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about a specific GitHub repo and whether I mentioned it before. Let me check my previous responses. I mentioned `notebooklm-py` indirectly — in my first response, I said the claude-world/notebooklm-skill project "is built on `notebooklm-py` v0.3.4." But I didn't mention the `teng-lin/notebooklm-py` repo directly as a standalone project. Let me fetch this URL to learn more about it.

</details>

I mentioned `notebooklm-py` indirectly — when describing the `claude-world/notebooklm-skill` project, I noted it was built on `notebooklm-py` v0.3.4. But I didn't call out `teng-lin/notebooklm-py` as a standalone project. Let me take a look at it.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T14:02:17.625479Z",
  "stop_timestamp": "2026-03-21T14:02:18.333587Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KjicxSVbgStWeYxFfiNKNV",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/teng-lin/notebooklm-py",
    "text_content_token_limit": 3000
  },
  "message": "Fetching: https://github.com/teng-lin/notebooklm-py",
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
  "tool_use_id": "toolu_01KjicxSVbgStWeYxFfiNKNV",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - teng-lin/notebooklm-py: Unofficial Python API for Google NotebookLM",
      "url": "https://github.com/teng-lin/notebooklm-py",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "github"
      },
      "is_missing": false,
      "text": "GitHub - teng-lin/notebooklm-py: Unofficial Python API for Google NotebookLM · GitHub\n\n\n\n[Skip to content](#start-of-content)\n\n\n\n\n\n\n\n\n\n\n\n\n\n## Navigation Menu\n\nToggle navigation\n\n[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Fteng-lin%2Fnotebooklm-py)\n\nAppearance settings\n\n* Platform\n\n  + AI CODE CREATION\n    - [GitHub CopilotWrite better code with AI](https://github.com/features/copilot)\n    - [GitHub SparkBuild and deploy intelligent apps](https://github.com/features/spark)\n    - [GitHub ModelsManage and compare prompts](https://github.com/features/models)\n    - [MCP RegistryNewIntegrate external tools](https://github.com/mcp)\n  + DEVELOPER WORKFLOWS\n    - [ActionsAutomate any workflow](https://github.com/features/actions)\n    - [CodespacesInstant dev environments](https://github.com/features/codespaces)\n    - [IssuesPlan and track work](https://github.com/features/issues)\n    - [Code ReviewManage code changes](https://github.com/features/code-review)\n  + APPLICATION SECURITY\n    - [GitHub Advanced SecurityFind and fix vulnerabilities](https://github.com/security/advanced-security)\n    - [Code securitySecure your code as you build](https://github.com/security/advanced-security/code-security)\n    - [Secret protectionStop leaks before they start](https://github.com/security/advanced-security/secret-protection)\n  + EXPLORE\n    - [Why GitHub](https://github.com/why-github)\n    - [Documentation](https://docs.github.com)\n    - [Blog](https://github.blog)\n    - [Changelog](https://github.blog/changelog)\n    - [Marketplace](https://github.com/marketplace)\n\n  [View all features](https://github.com/features)\n* Solutions\n\n  + BY COMPANY SIZE\n    - [Enterprises](https://github.com/enterprise)\n    - [Small and medium teams](https://github.com/team)\n    - [Startups](https://github.com/enterprise/startups)\n    - [Nonprofits](https://github.com/solutions/industry/nonprofits)\n  + BY USE CASE\n    - [App Modernization](https://github.com/solutions/use-case/app-modernization)\n    - [DevSecOps](https://github.com/solutions/use-case/devsecops)\n    - [DevOps](https://github.com/solutions/use-case/devops)\n    - [CI/CD](https://github.com/solutions/use-case/ci-cd)\n    - [View all use cases](https://github.com/solutions/use-case)\n  + BY INDUSTRY\n    - [Healthcare](https://github.com/solutions/industry/healthcare)\n    - [Financial services](https://github.com/solutions/industry/financial-services)\n    - [Manufacturing](https://github.com/solutions/industry/manufacturing)\n    - [Government](https://github.com/solutions/industry/government)\n    - [View all industries](https://github.com/solutions/industry)\n\n  [View all solutions](https://github.com/solutions)\n* Resources\n\n  + EXPLORE BY TOPIC\n    - [AI](https://github.com/resources/articles?topic=ai)\n    - [Software Development](https://github.com/resources/articles?topic=software-development)\n    - [DevOps](https://github.com/resources/articles?topic=devops)\n    - [Security](https://github.com/resources/articles?topic=security)\n    - [View all topics](https://github.com/resources/articles)\n  + EXPLORE BY TYPE\n    - [Customer stories](https://github.com/customer-stories)\n    - [Events & webinars](https://github.com/resources/events)\n    - [Ebooks & reports](https://github.com/resources/whitepapers)\n    - [Business insights](https://github.com/solutions/executive-insights)\n    - [GitHub Skills](https://skills.github.com)\n  + SUPPORT & SERVICES\n    - [Documentation](https://docs.github.com)\n    - [Customer support](https://support.github.com)\n    - [Community forum](https://github.com/orgs/community/discussions)\n    - [Trust center](https://github.com/trust-center)\n    - [Partners](https://github.com/partners)\n\n  [View all resources](https://github.com/resources)\n* Open Source\n\n  + COMMUNITY\n    - [GitHub SponsorsFund open source developers](https://github.com/sponsors)\n  + PROGRAMS\n    - [Security Lab](https://securitylab.github.com)\n    - [Maintainer Community](https://maintainers.github.com)\n    - [Accelerator](https://github.com/accelerator)\n    - [Archive Program](https://archiveprogram.github.com)\n  + REPOSITORIES\n    - [Topics](https://github.com/topics)\n    - [Trending](https://github.com/trending)\n    - [Collections](https://github.com/collections)\n* Enterprise\n\n  + ENTERPRISE SOLUTIONS\n    - [Enterprise platformAI-powered developer platform](https://github.com/enterprise)\n  + AVAILABLE ADD-ONS\n    - [GitHub Advanced SecurityEnterprise-grade security features](https://github.com/security/advanced-security)\n    - [Copilot for BusinessEnterprise-grade AI features](https://github.com/features/copilot/copilot-business)\n    - [Premium SupportEnterprise-grade 24/7 support](https://github.com/premium-support)\n* [Pricing](https://github.com/pricing)\n\nSearch or jump to...\n\n\n# Search code, repositories, users, issues, pull requests...\n\nSearch\n\nClear\n\n[Search syntax tips](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax)\n\n# Provide feedback\n\nWe read every piece of feedback, and take your input very seriously.\n\n\nInclude my email address so I can be contacted\n\nCancel\n Submit feedback\n\n\n\n\n\n# Saved searches\n\n## Use saved searches to filter your results more quickly\n\nName\n\nQuery\n\nTo see all available qualifiers, see our [documentation](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax).\n\nCancel\n Create saved search\n\n[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Fteng-lin%2Fnotebooklm-py)\n\n[Sign up](/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=teng-lin%2Fnotebooklm-py)\n\nAppearance settings\n\nResetting focus\n\nYou signed in with another tab or window. Reload to refresh your session.\nYou signed out in another tab or window. Reload to refresh your session.\nYou switched accounts on another tab or window. Reload to refresh your session.\n \n\n\nDismiss alert\n\n{{ message }}\n\n[teng-lin](/teng-lin) \n/\n**[notebooklm-py](/teng-lin/notebooklm-py)**\nPublic\n\n* [Notifications](/login?return_to=%2Fteng-lin%2Fnotebooklm-py) You must be signed in to change notification settings\n* [Fork\n  397](/login?return_to=%2Fteng-lin%2Fnotebooklm-py)\n* [Star\n   3.1k](/login?return_to=%2Fteng-lin%2Fnotebooklm-py)\n\n* [Code](/teng-lin/notebooklm-py)\n* [Issues\n  6](/teng-lin/notebooklm-py/issues)\n* [Pull requests\n  5](/teng-lin/notebooklm-py/pulls)\n* [Actions](/teng-lin/notebooklm-py/actions)\n* [Projects](/teng-lin/notebooklm-py/projects)\n* [Security\n  0](/teng-lin/notebooklm-py/security)\n* [Insights](/teng-lin/notebooklm-py/pulse)\n\nAdditional navigation options\n\n\n* [Code](/teng-lin/notebooklm-py)\n* [Issues](/teng-lin/notebooklm-py/issues)\n* [Pull requests](/teng-lin/notebooklm-py/pulls)\n* [Actions](/teng-lin/notebooklm-py/actions)\n* [Projects](/teng-lin/notebooklm-py/projects)\n* [Security](/teng-lin/notebooklm-py/security)\n* [Insights](/teng-lin/notebooklm-py/pulse)\n\n# teng-lin/notebooklm-py\n\nmain\n\n[Branches](/teng-lin/notebooklm-py/branches)[Tags](/teng-lin/notebooklm-py/tags)\n\nGo to file\n\nCode\n\nOpen more actions menu\n\n## Folders and files\n\n| Name | | Name | Last commit message | Last commit date |\n| --- | --- | --- | --- | --- |\n| Latest commit   History[486 Commits](/teng-lin/notebooklm-py/commits/main/)   486 Commits | | |\n| [.github](/teng-lin/notebooklm-py/tree/main/.github \".github\") | | [.github](/teng-lin/notebooklm-py/tree/main/.github \".github\") |  |  |\n| [docs](/teng-lin/notebooklm-py/tree/main/docs \"docs\") | | [docs](/teng-lin/notebooklm-py/tree/main/docs \"docs\") |  |  |\n| [scripts](/teng-lin/notebooklm-py/tree/main/scripts \"scripts\") | | [scripts](/teng-lin/notebooklm-py/tree/main/scripts \"scripts\") |  |  |\n| [src/notebooklm](/teng-lin/notebooklm-py/tree/main/src/notebooklm \"This path skips through empty directories\") | | [src/notebooklm](/teng-lin/notebooklm-py/tree/main/src/notebooklm \"This path skips through empty directories\") |  |  |\n| [tests](/teng-lin/notebooklm-py/tree/main/tests \"tests\") | | [tests](/teng-lin/notebooklm-py/tree/main/tests \"tests\") |  |  |\n| [.env.example](/teng-lin/notebooklm-py/blob/main/.env.example \".env.example\") | | [.env.example](/teng-lin/notebooklm-py/blob/main/.env.example \".env.example\") |  |  |\n| [.gitignore](/teng-lin/notebooklm-py/blob/main/.gitignore \".gitignore\") | | [.gitignore](/teng-lin/notebooklm-py/blob/main/.gitignore \".gitignore\") |  |  |\n| [.pre-commit-config.yaml](/teng-lin/notebooklm-py/blob/main/.pre-commit-config.yaml \".pre-commit-config.yaml\") | | [.pre-commit-config.yaml](/teng-lin/notebooklm-py/blob/main/.pre-commit-config.yaml \".pre-commit-config.yaml\") |  |  |\n| [CHANGELOG.md](/teng-lin/notebooklm-py/blob/main/CHANGELOG.md \"CHANGELOG.md\") | | [CHANGELOG.md](/teng-lin/notebooklm-py/blob/main/CHANGELOG.md \"CHANGELOG.md\") |  |  |\n| [CLAUDE.md](/teng-lin/notebooklm-py/blob/main/CLAUDE.md \"CLAUDE.md\") | | [CLAUDE.md](/ten",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://github.com/teng-lin/notebooklm-py"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: GitHub - teng-lin/notebooklm-py: Unofficial Python API for Google NotebookLM",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "GitHub - teng-lin/notebooklm-py: Unofficial Python API for Google NotebookLM",
      "subtitles": null,
      "url": "https://github.com/teng-lin/notebooklm-py",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Let me get more details about this repo from the README.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T14:02:26.877475Z",
  "stop_timestamp": "2026-03-21T14:02:27.154992Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_019mP2J9Cj5gFdhefbeVZdjH",
  "name": "web_search",
  "input": {
    "query": "teng-lin notebooklm-py unofficial python API"
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
  "tool_use_id": "toolu_019mP2J9Cj5gFdhefbeVZdjH",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - teng-lin/notebooklm-py: Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "url": "https://github.com/teng-lin/notebooklm-py",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\nA Comprehensive NotebookLM Skill & Unofficial Python API. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw. Source & Development: https://github.com/teng-lin/notebooklm-py ... This library uses undocumented Google APIs that can change without notice. Not affiliated with Google - This is a community project · APIs may break - Google can change internal endpoints anytime ... Best for prototypes, research, and personal projects. See Troubleshooting for debugging tips. 🤖 AI Agent Tools - Integrate NotebookLM into Claude Code, Codex, and other LLM agents. Ships with a root NotebookLM skill for GitHub and npx skills add discovery, local notebooklm skill install support for Claude Code and .agents skill directories, and repo-level Codex guidance in AGENTS.md.\n\n# Basic installation pip install notebooklm-py # With browser login support (required for first-time setup) pip install \"notebooklm-py[browser]\" playwright install chromium · If playwright install chromium fails with TypeError: onExit is not a function, see the Linux workaround in Troubleshooting. ... # 1. Authenticate (opens browser) notebooklm login # Or use Microsoft Edge (for orgs that require Edge for SSO) # notebooklm login --browser msedge # 2. Create a notebook and add sources notebooklm create \"My Research\" notebooklm use <notebook_id> notebooklm source add \"https://en.wikipedia.org/wiki/Artificial_intelligence\" notebooklm source add \"./paper.pdf\" # 3. Chat with your sources notebooklm ask \"What are the key themes?\" # 4.\n\nnotebooklm auth check --test # Diagnose auth/cookie issues notebooklm agent show codex # Print bundled Codex instructions notebooklm agent show claude # Print bundled Claude Code skill template notebooklm language list # List supported output languages notebooklm metadata --json # Export notebook metadata and sources notebooklm share status # Inspect sharing state notebooklm source add-research \"AI\" # Start web research and import sources notebooklm skill status # Check local agent skill installation ·\n\nGenerate content notebooklm generate audio \"make it engaging\" --wait notebooklm generate video --style whiteboard --wait notebooklm generate cinematic-video \"documentary-style summary\" --wait notebooklm generate quiz --difficulty hard notebooklm generate flashcards --quantity more notebooklm generate slide-deck notebooklm generate infographic --orientation portrait notebooklm generate mind-map notebooklm generate data-table \"compare key concepts\" # 5. Download artifacts notebooklm download audio ./podcast.mp3 notebooklm download video ./overview.mp4 notebooklm download cinematic-video ./documentary.mp4 notebooklm download quiz --format markdown ./quiz.md notebooklm download flashcards --format json ./cards.json notebooklm download slide-deck ./slides.pdf notebooklm download infographic ./infographic.png notebooklm download mind-map ./mindmap.json notebooklm download data-table ./data.csv ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin/notebooklm-py",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "teng-lin (Teng Lin) · GitHub",
      "url": "https://github.com/teng-lin",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Report abuse · More · Overview · Repositories · Projects · Packages · Stars · notebooklm-py · notebooklm-py Public · Unofficial Python API and agentic skill for Google NotebookLM.\n\n@teng_lin · https://trendshift.io/developers/11211 · x4x3x4 · x4x3x4 Block or Report · Report abuse · Contact GitHub support about this user’s behavior. Learn more about reporting abuse. Report abuse · More · Overview · Repositories · Projects · Packages · Stars · notebooklm-py · notebooklm-py Public · Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like… · Python 6.5k 810 · agent-fetch · agent-fetch Public · Full-content web fetcher for AI agents — Chrome TLS fingerprinting, browser impersonation, and multi-strategy article extraction · TypeScript 216 11 · beamcode · beamcode Public · TypeScript 7 1 · Something went wrong, please refresh the page to try again. If the problem persists, check the GitHub status page or contact support.\n\nUnofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like… ... Full-content web fetcher for AI agents — Chrome TLS fingerprinting, browser impersonation, and multi-strategy article extraction ... Something went wrong, please refresh the page to try again. If the problem persists, check the GitHub status page or contact support. There was an error while loading. Please reload this page.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Releases · teng-lin/notebooklm-py",
      "url": "https://github.com/teng-lin/notebooklm-py/releases",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\nNotebook metadata export - Added notebook metadata APIs and CLI export with a simplified sources list · New notebooklm metadata command with human-readable and --json output · New NotebookMetadata and SourceSummary public types ... Documentation refresh - Updated release, development, CLI, README, and Python API docs for current commands, APIs, and uv workflows · Public API surface - Exported NotebookMetadata, SourceSummary, and InfographicStyle ... There was an error while loading. Please reload this page. ... This commit was created on GitHub.com and signed with GitHub’s verified signature. ... Learn about vigilant mode. ... There was an error while loading. Please reload this page.\n\nChat empty answer - Fixed ask returning empty answer when API response marker changes (#123) X.com/Twitter content parsing - Fixed parsing of X.com/Twitter source content (#119) Language sync on login - Syncs server language setting to local config after notebooklm login (#124) Python version check - Added runtime check with clear error message for Python < 3.10 (#125) RPC error diagnostics - Improved error reporting for GET_NOTEBOOK and auth health check failures (#126, #127) Conversation persistence - Chat conversations now persist server-side; conversation ID shown in history output (#138) History Q&A previews - Fixed populating Q&A previews using conversation turns API (#136) generate report --language - Fixed missing --language option for report generation (#109) Chat history API - Simplified history retrieval; improved conversation grouping with parallel fetching (#140, #141) Conversation ID tracking - Server-side conversation lookup via new hPTbtc RPC (GET_LAST_CONVERSATION_ID)",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin/notebooklm-py/releases",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-py/docs/configuration.md at main · teng-lin/notebooklm-py",
      "url": "https://github.com/teng-lin/notebooklm-py/blob/main/docs/configuration.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\n# See where files are being read from notebooklm status --paths · The CLI uses httpx for HTTP requests. Common issues: Timeout: Google's API can be slow; large operations may time out · SSL errors: Ensure your system certificates are up to date · Proxy: Set standard environment variables (HTTP_PROXY, HTTPS_PROXY) if needed · Works out of the box. Chromium is downloaded automatically by Playwright. # Install Playwright dependencies playwright install-deps chromium # Then install Chromium playwright install chromium · Works with PowerShell or CMD. Use backslashes for paths: notebooklm --storage C:\\Users\\Name\\.notebooklm\\storage_state.json list ... Browser login opens in the Windows host browser. The storage file is saved in the WSL filesystem. Playwright is only required for the notebooklm login command. All other operations use standard HTTP requests via httpx.\n\njobs: notebook-task: runs-on: ubuntu-latest steps: - uses: actions/checkout@v4 - name: Setup Python uses: actions/setup-python@v5 with: python-version: '3.12' - name: Install notebooklm-py run: pip install notebooklm-py - name: List notebooks env: NOTEBOOKLM_AUTH_JSON: ${{ secrets.NOTEBOOKLM_AUTH_JSON }} run: notebooklm list ... - name: Setup NotebookLM auth run: | mkdir -p ~/.notebooklm echo \"${{ secrets.NOTEBOOKLM_AUTH_JSON }}\" > ~/.notebooklm/storage_state.json chmod 600 ~/.notebooklm/storage_state.json - name: List notebooks run: notebooklm list · CSRF tokens are automatically refreshed during API calls. However, the underlying session cookies still expire. For long-running CI pipelines: Update the NOTEBOOKLM_AUTH_JSON secret every 1-2 weeks · Monitor for persistent auth failures (these indicate cookie expiration) Some commands support verbose output via Rich console: # Most errors are printed to stderr with details notebooklm list 2>&1 | cat ...\n\nConfiguration Paths ┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┓ ┃ File ┃ Path ┃ Source ┃ ┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━┩ │ Home Directory │ /home/user/.notebooklm │ default │ │ Storage State │ .../storage_state.json │ │ │ Context │ .../context.json │ │ │ Browser Profile │ .../browser_profile │ │ └─────────────────┴──────────────────────────────┴───────────┘ · Authentication sessions are tied to Google's cookie expiration: ...\n\nexport NOTEBOOKLM_HOME=/custom/path # All files now go to /custom/path/ Contains the authentication data extracted from your browser session: { \"cookies\": [ { \"name\": \"SID\", \"value\": \"...\", \"domain\": \".google.com\", \"path\": \"/\", \"expires\": 1234567890, \"httpOnly\": true, \"secure\": true, \"sameSite\": \"Lax\" }, ... ], \"origins\": [] } Required cookies: SID, HSID, SSID, APISID, SAPISID, __Secure-1PSID, __Secure-3PSID ... This file is managed automatically by notebooklm use and notebooklm clear. A persistent Chromium user data directory used during notebooklm login. Why persistent? Google blocks automated login attempts. A persistent profile makes the browser appear as a regular user installation, avoiding bot detection. To reset: Delete the browser_profile/ directory and run notebooklm login again. ... export NOTEBOOKLM_HOME=/custom/path # All files now go here: # /custom/path/storage_state.json # /custom/path/context.json # /custom/path/browser_profile/ ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin/notebooklm-py/blob/main/docs/configuration.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-py/docs/development.md at main · teng-lin/notebooklm-py",
      "url": "https://github.com/teng-lin/notebooklm-py/blob/main/docs/development.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\nThis guide covers everything you need to contribute to notebooklm-py: architecture overview, testing, and releasing.\n\nWhy underscore prefixes? Files like _notebooks.py are internal implementation. Public API stays clean (from notebooklm import NotebookLMClient). Why namespaced APIs? client.notebooks.list() instead of client.list_notebooks() - better organization, scales well, tab-completion friendly. Why async? Google's API can be slow. Async enables concurrent operations and non-blocking downloads. ... # Unit + integration tests (no auth needed) pytest # E2E tests (requires auth + test notebook) pytest tests/e2e -m readonly # Read-only tests only pytest tests/e2e -m \"not variants\" # Skip parameter variants pytest tests/e2e --include-variants # All tests including variants · tests/ ├── unit/ # No network, fast, mock everything ├── integration/ # Mocked HTTP responses + VCR cassettes │ ├── test_vcr_*.py # Client-level VCR tests │ └── cli_vcr/ # CLI integration tests with VCR └── e2e/ # Real API calls (requires auth) VCR tests record HTTP interactions for offline, deterministic replay.\n\nNotebookLM has undocumented rate limits. Generation tests may be skipped when rate limited: Use pytest tests/e2e -m readonly for quick validation ... Need network? ├── No → tests/unit/ ├── Mocked → tests/integration/ └── Real API → tests/e2e/ └── What notebook? ├── Read-only → read_only_notebook_id + @pytest.mark.readonly ├── CRUD → temp_notebook └── Generation → generation_notebook_id └── Parameter variant? → add @pytest.mark.variants ... First step: Run notebooklm auth check --json in your workflow to diagnose issues. Cause: The NOTEBOOKLM_AUTH_JSON env var is set to an empty string. ... Cause: The JSON in NOTEBOOKLM_AUTH_JSON is missing the required structure. Solution: Ensure your secret contains valid Playwright storage state JSON: { \"cookies\": [ {\"name\": \"SID\", \"value\": \"...\", \"domain\": \".google.com\", ...}, ...\n\n│ └───────────────────────────┬─────────────────────────────────┘ │ ┌───────────────────────────▼─────────────────────────────────┐ │ Client Layer │ │ NotebookLMClient → NotebooksAPI, SourcesAPI, ArtifactsAPI │ └───────────────────────────┬─────────────────────────────────┘ │ ┌───────────────────────────▼─────────────────────────────────┐ │ Core Layer │ │ ClientCore → _rpc_call(), HTTP client │ └───────────────────────────┬─────────────────────────────────┘ │ ┌───────────────────────────▼────────────────────────────────┐ │ RPC Layer │ │ encoder.py, decoder.py, types.py (RPCMethod) │ └─────────────────────────────────────────────────────────────┘ ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin/notebooklm-py/blob/main/docs/development.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "NotebookLM Python API: Unofficial Access & AI Agent Skills | AIToolly",
      "url": "https://aitoolly.com/ai-news/article/2026-03-11-unofficial-google-notebooklm-python-api-agent-skills-unlock-hidden-features-with-python-cli-and-ai-a",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aitoolly.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aitoolly.com",
        "site_name": "AIToolly"
      },
      "is_missing": false,
      "text": "... The &#x27;notebooklm-py&#x27; project, developed by teng-lin, offers an unofficial Python API and a suite of agent skills designed for Google NotebookLM. This innovative tool provides users with comprehensive programmatic access to the full range ...\n\nAn unofficial Python API and agent skills for Google NotebookLM, named 'notebooklm-py', has been released by teng-lin. This tool provides comprehensive programmatic access to NotebookLM's functionalities through Python, CLI, and various AI agents such as Claude Code, Codex, and OpenClaw. Notably, it enables access to features not publicly available through the Web UI, offering developers and users enhanced control and extended capabilities for Google NotebookLM. ... The 'notebooklm-py' project, developed by teng-lin, offers an unofficial Python API and a suite of agent skills designed for Google NotebookLM. This innovative tool provides users with comprehensive programmatic access to the full range of NotebookLM's functionalities. Users can interact with NotebookLM through Python scripts, command-line interface (CLI) commands, and integrate with various AI agents including Claude Code, Codex, and OpenClaw.\n\nExplore 'notebooklm-py', an unofficial Python API for Google NotebookLM, offering programmatic access, CLI control, and AI agent integration, including hidden features.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aitoolly.com/ai-news/article/2026-03-11-unofficial-google-notebooklm-python-api-agent-skills-unlock-hidden-features-with-python-cli-and-ai-a",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-py · PyPI",
      "url": "https://pypi.org/project/notebooklm-py/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pypi.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pypi.org",
        "site_name": "PyPI"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\nUnofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw. Source & Development: https://github.com/teng-lin/notebooklm-py ... This library uses undocumented Google APIs that can change without notice. Not affiliated with Google - This is a community project · APIs may break - Google can change internal endpoints anytime ... Best for prototypes, research, and personal projects. See Troubleshooting for debugging tips. 🤖 AI Agent Tools - Integrate NotebookLM into Claude Code or other LLM agents. Ships with Claude Code skills for natural language automation (notebooklm skill install), or build your own integrations with the async Python API. 📚 Research Automation - Bulk-import sources (URLs, PDFs, YouTube, Google Drive), run web/Drive research queries with auto-import, and extract insights programmatically.\n\nUnofficial Python library for automating Google NotebookLM\n\nThe following attestation bundles were made for notebooklm_py-0.3.4.tar.gz: Publisher: publish.yml on teng-lin/notebooklm-py Attestations: Values shown here reflect the state when the release was signed and may no longer be current. ... Details for the file notebooklm_py-0.3.4-py3-none-any.whl. Download URL: notebooklm_py-0.3.4-py3-none-any.whl ... See more details on using hashes here. The following attestation bundles were made for notebooklm_py-0.3.4-py3-none-any.whl: Publisher: publish.yml on teng-lin/notebooklm-py Attestations: Values shown here reflect the state when the release was signed and may no longer be current.\n\nThese features are available via API/CLI but not exposed in NotebookLM's web interface: Batch downloads - Download all artifacts of a type at once · Quiz/Flashcard export - Get structured JSON, Markdown, or HTML (web UI only shows interactive view) Mind map data extraction - Export hierarchical JSON for visualization tools · Data table CSV export - Download structured tables as spreadsheets · Slide deck as PPTX - Download editable PowerPoint files (web UI only offers PDF) Slide revision - Modify individual slides with natural-language prompts · Report template customization - Append extra instructions to built-in format templates · Save chat to notes - Save Q&A answers or conversation history as notebook notes · Source fulltext access - Retrieve the indexed text content of any source · Programmatic sharing - Manage permissions without the UI · # Basic installation pip install notebooklm-py # With browser login support (required for first-time setup) pip install \"notebooklm-py[browser]\"",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pypi.org/project/notebooklm-py/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-py/CLAUDE.md at main · teng-lin/notebooklm-py",
      "url": "https://github.com/teng-lin/notebooklm-py/blob/main/CLAUDE.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\nCSRF tokens expire: Use client.refresh_auth() or re-run notebooklm login ... Wait for all checks to pass. If any fail, investigate and fix. # Get review comments gh api repos/teng-lin/notebooklm-py/pulls/<PR_NUMBER>/comments \\ --jq '.[] | \"File: \\(.path):\\(.line)\\nComment: \\(.body)\\n---\"' For each review comment (especially from gemini-code-assist): ...\n\nnotebooklm-py is an unofficial Python client for Google NotebookLM that uses undocumented RPC APIs. The library enables programmatic automation of NotebookLM features including notebook management, source integration, AI querying, and studio artifact generation (podcasts, videos, quizzes, etc.). Critical constraint: This uses Google's internal batchexecute RPC protocol with obfuscated method IDs that Google can change at any time. All RPC method IDs in src/notebooklm/rpc/types.py are undocumented and subject to breakage. # Create/recreate venv with uv (recommended - relocatable venvs) uv venv .venv uv pip install -e \".[all]\" playwright install chromium # Activate virtual environment source .venv/bin/activate # Run all tests (excluding e2e by default) pytest # Run with coverage pytest --cov # Run e2e tests (requires authentication) pytest tests/e2e -m e2e # CLI testing notebooklm --help ·\n\ngh api repos/teng-lin/notebooklm-py/pulls/<PR>/comments/<COMMENT_ID>/replies \\ -f body=\"Addressed in commit <SHA>: <brief description>\" # Ensure PR is ready to merge gh pr view <PR_NUMBER> --json state,mergeStateStatus,mergeable\n\n# Format code with ruff ruff format src/ tests/ # Check for linting issues ruff check src/ tests/ # Type checking with mypy mypy src/notebooklm --ignore-missing-imports # Run tests pytest ... ruff format src/ tests/ && ruff check src/ tests/ && mypy src/notebooklm --ignore-missing-imports && pytest · CLI Layer (cli/) ↓ Client Layer (client.py, _*.py APIs) ↓ Core Layer (_core.py) ↓ RPC Layer (rpc/) ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin/notebooklm-py/blob/main/CLAUDE.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "notebooklm-py/docs/troubleshooting.md at main · teng-lin/notebooklm-py",
      "url": "https://github.com/teng-lin/notebooklm-py/blob/main/docs/troubleshooting.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\nFor Python API usage, either: Set PYTHONUTF8=1 environment variable before running · Run Python with -X utf8 flag: python -X utf8 your_script.py ... # WARNING (default): Only show warnings and errors notebooklm list # INFO: Show major operations (good for scripts/automation) NOTEBOOKLM_LOG_LEVEL=INFO notebooklm source add https://example.com # Output: # 14:23:45 INFO [notebooklm._sources] Adding URL source: https://example.com # DEBUG: Show all RPC calls with timing (for troubleshooting API issues) NOTEBOOKLM_LOG_LEVEL=DEBUG notebooklm list # Output: # 14:23:45 DEBUG [notebooklm._core] RPC LIST_NOTEBOOKS starting # 14:23:46 DEBUG [notebooklm._core] RPC LIST_NOTEBOOKS completed in 0.842s ... import logging import os # Set before importing notebooklm os.environ[\"NOTEBOOKLM_LOG_LEVEL\"] = \"DEBUG\" from notebooklm import NotebookLMClient # Now all notebooklm operations will log at DEBUG level ...\n\nCommon issues, known limitations, and workarounds for notebooklm-py. First step: Run notebooklm auth check to diagnose auth issues: notebooklm auth check # Quick local validation notebooklm auth check --test # Full validation with network test notebooklm auth check --json # Machine-readable output for CI/CD ... The client automatically refreshes CSRF tokens when authentication errors are detected. This happens transparently: When an RPC call fails with an auth error, the client: Fetches fresh CSRF token and session ID from the NotebookLM homepage ... This means most \"CSRF token expired\" errors resolve automatically. Cause: Session cookies expired (happens every few weeks). Note: Automatic token refresh handles CSRF/session ID expiration. This error only occurs when the underlying cookies (set during notebooklm login) have fully expired. ... Cause: CSRF token expired or couldn't be extracted.\n\n# Re-authenticate if cookies have expired notebooklm login # Or copy a fresh storage_state.json from another machine ... # Get fresh artifact list before download artifacts = await client.artifacts.list(nb_id) audio = next(a for a in artifacts if a.kind == \"audio\") # Use audio.url immediately ... On certain Windows environments (particularly when running inside Sandboxie or similar sandboxing software), the CLI may hang indefinitely at startup. This is caused by the default ProactorEventLoop blocking at the IOCP (I/O Completion Ports) layer. ... Solution: The library automatically sets WindowsSelectorEventLoopPolicy at CLI startup to avoid this issue. If you're using the Python API directly and encounter hanging, add this before any async code: import asyncio import sys if sys.platform == \"win32\": asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy()) Unicode encoding errors on non-English Windows (issue #75, #80): Windows systems with non-English locales (Chinese cp95\n\nCause: X.com (Twitter) has aggressive anti-scraping protections. When NotebookLM attempts to fetch the URL, it receives an error page or compatibility warning instead of the actual content. ... # Step 1: Install bird (macOS/Linux) brew install steipete/tap/bird # Step 2: Fetch X.com content as markdown bird read \"https://x.com/username/status/1234567890\" > article.md # Step 3: Add the local markdown file to NotebookLM notebooklm source add ./article.md ... # Remove incorrectly parsed source notebooklm source delete <source_id> # Or, if you only have the exact title: notebooklm source delete-by-title \"Exact Source Title\" # Then re-add using the bird CLI method above ... Google enforces strict rate limits on the batchexecute endpoint. ... notebooklm generate audio --retry 3 # Retry up to 3 times on rate limit notebooklm generate video --retry 5 # Works with all generate commands ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin/notebooklm-py/blob/main/docs/troubleshooting.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Test · Workflow runs · teng-lin/notebooklm-py",
      "url": "https://github.com/teng-lin/notebooklm-py/actions/workflows/test.yml",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM&#x27;s features—including capabilities the web UI doesn&#x27;t expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.\n\nfix: raise error on empty download instead of producing 0-byte file (… Test #543: Commit 237b72b pushed by teng-lin ... fix: add __main__.py to support python -m notebooklm (#164) Test #542: Commit fd06d91 pushed by teng-lin ... fix: title-based matching + video download validation Test #541: Pull request #173 synchronize by Jah-yee ... feat: add notebook metadata export with sources list (issue #171) Test #540: Pull request #174 opened by furkankoykiran · 4m 4s furkankoykiran:feat/export-notebook-metadata ... fix: title-based matching + video download validation Test #539: Pull request #173 synchronize by Jah-yee ... fix: title-based matching + video download validation Test #538: Pull request #173 opened by Jah-yee ... docs: update README tagline to highlight agentic skill and AI agents … Test #537: Commit aa16254 pushed by teng-lin ... docs: update README tagline to highlight agentic skill and AI agents Test #536: Pull request #172 synchronize by teng-lin ...\n\ndocs: update README tagline to highlight agentic skill and AI agents Test #535: Pull request #172 opened by teng-lin ... fix: resolve source/notebook IDs by title when prefix match fails Test #534: Pull request #163 synchronize by Bortlesboat ... fix: raise error on empty download instead of producing 0-byte file Test #533: Pull request #165 synchronize by Bortlesboat ... fix: add __main__.py to support python -m notebooklm Test #532: Pull request #164 synchronize by Bortlesboat ... fix: raise error on empty download instead of producing 0-byte file Test #531: Pull request #165 synchronize by Bortlesboat ... feat: add notebook_id validation to prevent silent failures Test #528: Pull request #168 opened by hiSandog ... docs: add Trendshift badge and Star History section to README Test #527: Commit c294c32 pushed by teng-lin ... fix: raise error on empty download instead of producing 0-byte file Test #526: Pull request #165 synchronize by Bortlesboat ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/teng-lin/notebooklm-py/actions/workflows/test.yml",
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

So teng-lin/notebooklm-py has about 3.1k stars on the repo page (from the HTML fetch) and the author's profile shows 6.5k stars. Let me check - the HTML showed "Star 3.1k" and the profile page showed "Python 6.5k 810". The profile number might be more current. Let me clarify.

Actually, looking more carefully at the GitHub page HTML I fetched, I see "Star 3.1k" in the repo header. But the author profile page says "Python 6.5k 810" which could be more recent. These numbers are from different cached snapshots.

This is actually the most starred project in this space! It has more stars than jacob-bd/notebooklm-mcp-cli.

</details>

Good catch, Reid — I should have included this one. `teng-lin/notebooklm-py` is actually the **most starred project** in this entire space, and I missed it in my original list.

Based on the data from the GitHub pages: teng-lin/notebooklm-py has approximately 6.5k stars and 810 forks (per the author's profile page), while `jacob-bd/notebooklm-mcp-cli` sits around 2.1–2.7k stars and `PleasePrompto/notebooklm-mcp` around 1.2–1.5k stars.

What makes `notebooklm-py` distinct from the others:

It's positioned as the **foundational Python library** rather than just an MCP server or Claude Code skill. It provides full programmatic access to NotebookLM's features — including capabilities the web UI doesn't expose — via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.

Some notable differentiators from the search results: it exposes features not available in NotebookLM's web UI, such as batch downloads, quiz/flashcard export to structured JSON/Markdown/HTML, mind map data extraction, data table CSV export, slide deck as PPTX (web UI only offers PDF), slide revision via natural-language prompts, and programmatic sharing.

It's also the latest version is v0.3.4 and is published on PyPI — and notably, the `claude-world/notebooklm-skill` project I mentioned earlier is built on top of this library.

So the corrected ranking by stars is roughly: `teng-lin/notebooklm-py` (~6.5k) > `jacob-bd/notebooklm-mcp-cli` (~2.1k+) > `PleasePrompto/notebooklm-mcp` (~1.2k+). Apologies for the omission in my first answer.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d10b4-0ccb-771f-b2da-48d84c4e366c",
  "updated_at": "2026-03-21T14:02:55.641729Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d10b4-0cc8-78bf-82cc-eaaeb385c41d"
}
```

</details>
