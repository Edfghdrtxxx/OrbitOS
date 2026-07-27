# Open source tools for conclusion drafting

## Export metadata (verbatim)

```json
{
  "uuid": "ef94d8a5-86d4-4bc0-83f3-97ac7b794d56",
  "name": "Open source tools for conclusion drafting",
  "summary": "**Conversation Overview**\n\nThe person asked about open-source skills for conclusion drafting, specifically for academic papers and business/technical reports. Claude conducted web searches to investigate available options and found no standalone \"conclusion drafting\" skill in major curated repositories, but identified several open-source manuscript-drafting skill suites that include conclusion writing as part of broader research-writing pipelines.\n\nClaude surfaced four primary candidates from GitHub: `imbad0202/academic-research-skills` (a full research-to-finalize pipeline with writing-quality checks, anti-AI-jargon warnings, and optional voice calibration from past papers, noted as most recently maintained); `Galaxy-Dawn/claude-scholar` (supports per-section drafting on demand); `WenyuChiou/ai-research-skills` (a 15-skill pipeline-coupled suite requiring a research gap gate before drafting); and `Imbad0202/academic-research-skills-codex` (a Codex CLI port). Claude distinguished verified facts from unverified assumptions throughout, noting that none of the SKILL.md files were confirmed to scope a dedicated conclusion step.\n\nThe conversation ended with Claude posing two follow-up questions to narrow the recommendation: whether the person wants a full pipeline suite or a lightweight on-demand skill, and whether Claude should verify the actual SKILL.md file contents before the person installs anything. The person had not yet responded to these questions. Domain terminology used includes: Claude Code skills, SKILL.md, YAML/Markdown deliverables, anti-hallucination schema enforcement, and manuscript drafting pipelines.",
  "created_at": "2026-07-04T11:54:35.599462Z",
  "updated_at": "2026-07-04T12:01:02.204530Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-04T11:54:39.211137Z

Is there any open source skill for conclusion drafting?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2cfb-00e5-7778-bb0a-ec5264d21402",
  "updated_at": "2026-07-04T11:54:39.211137Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-04T11:54:55.552324Z

I need to search for this—let me check what's currently available.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T11:54:39.748583Z",
  "stop_timestamp": "2026-07-04T11:54:40.092148Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01G1bDanaPJCStaTe7KNSC5P",
  "name": "web_search",
  "input": {
    "query": "open source Claude skill conclusion drafting"
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
  "start_timestamp": "2026-07-04T11:54:40.658195Z",
  "stop_timestamp": "2026-07-04T11:54:40.658210Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01G1bDanaPJCStaTe7KNSC5P",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "awesome-claude-skills/content-research-writer/SKILL.md at master · ComposioHQ/awesome-claude-skills",
      "url": "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/content-research-writer/SKILL.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Open Claude Code from this directory and start writing. ... Here&#x27;s my introduction. Help me make the hook more compelling. ... I just finished the &quot;Why This Matters&quot; section. Review it and give feedback. ... Review the full draft for flow, clarity, and consistency. ... # Article Outline: [Title] ## Hook - [Opening line/story/statistic] - [Why reader should care] ## Introduction - Context and background - Problem statement - What this article covers ## Main Sections ### Section 1: [Title] - Key point A - Key point B - Example/evidence - [Research needed: specific topic] ### Section 2: [Title] - Key point C - Key point D - Data/citation needed ### Section 3: [Title] - Key point E - Counter-arguments - Resolution ## Conclusion - Summary of main points - Call to action - Final thought ## Research To-Do - [ ] Find data on [topic] - [ ] Get examples of [concept] - [ ] Source citation for [claim] ...\n\nA curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows - awesome-claude-skills/content-research-writer/SKILL.md at master · ComposioHQ/awesome-claude-skills\n\n### Add Data The third mistake would benefit from evidence: > \"[Add citation]: Studies show teams without regular user contact are 3x more likely to build unused features [needs source]\" ### Flow Improvement Consider reordering: Mistake 3 → Mistake 2 → Mistake 1 This builds from small to big impact. Ready for the next section! Outline together · Research key points · Write introduction → get feedback · Write body sections → feedback each · Write conclusion → final review · Polish and edit · Discuss hook ideas · Quick outline (shorter format) Draft in one session · Review for clarity and links · Quick polish · Outline steps · Write code examples · Add explanations · Test instructions · Add troubleshooting section · Final review for accuracy · Brainstorm unique angle · Research existing perspectives · Develop your thesis · Write with strong POV · Add supporting evidence · Craft compelling conclusion · Work in VS Code: Better than web Claude for long-form writing ·\n\nOpen Claude Code from this directory and start writing. ... Here's my introduction. Help me make the hook more compelling. ... I just finished the \"Why This Matters\" section. Review it and give feedback. ... Review the full draft for flow, clarity, and consistency. ... # Article Outline: [Title] ## Hook - [Opening line/story/statistic] - [Why reader should care] ## Introduction - Context and background - Problem statement - What this article covers ## Main Sections ### Section 1: [Title] - Key point A - Key point B - Example/evidence - [Research needed: specific topic] ### Section 2: [Title] - Key point C - Key point D - Data/citation needed ### Section 3: [Title] - Key point E - Counter-arguments - Resolution ## Conclusion - Summary of main points - Call to action - Final thought ## Research To-Do - [ ] Find data on [topic] - [ ] Get examples of [concept] - [ ] Source citation for [claim] ...\n\n# Feedback: Common Mistakes Section ## What Works Well ✓ - Strong examples (the Slack notification story) - Clear structure (3 mistakes, clean layout) - Practical advice for each mistake ## Suggestions ### Make It More Specific Your second point says \"Bad prioritization\" but could be stronger: Current: > \"Many teams prioritize badly by focusing on features instead of outcomes.\" Suggested: > \"I've watched teams ship 14 features in a quarter yet move none of their key metrics. They prioritized activity over progress.\" ### Add Data The third mistake would benefit from evidence: > \"[Add citation]: Studies show teams without regular user contact are 3x more likely to build unused features [needs source]\" ### Flow Improvement Consider reordering: Mistake 3 → Mistake 2 → Mistake 1 This builds from small to big impact. Ready for the next section! ... Version your drafts: article-v1.md, article-v2.md, etc.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/content-research-writer/SKILL.md"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Skills for Writing: Drafting, Editing, Style",
      "url": "https://www.infrasity.com/claude-skills/writing-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "infrasity.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=infrasity.com",
        "site_name": "Infrasity"
      },
      "is_missing": false,
      "text": "... Everything you need to know about installing and running these Claude Skills. ... Claude Skills for writing are open-source slash commands for Claude Code that turn blog and content workflows into one-command tasks. The pack covers writing, rewriting, outlines, briefs, SEO and AI-citation ...\n\nLong-form drafting, editing, style and tone, and repurposing, each one a skill that runs from a single command inside Claude Code. Open source, free, and updated weekly. ... Each runs from one command inside Claude Code. Open a skill for the details, or view it on GitHub. ... The blog skill is a full-lifecycle content engine with 30 sub-skills, 12 templates, and 5-category scoring. It routes your request to the right tool, pulls real ranking and traffic data from Google Search Console and Google Analytics, validates page speed through Google PageSpeed, and draws on NotebookLM source notebooks for primary-source research, shipping content dual-optimized for Google rankings and AI citations. Works best with Google Search Console, Google Analytics, Google PageSpeed, NotebookLM ... The blog-write skill writes complete articles from a topic, brief, or outline, following the 6 pillars of dual optimization.\n\nEliminate predictable AI writing patterns from any draft. Cut filler phrases, break formulaic structures, force active voice, and score the result for human-sounding prose. ... We'll show you where your product stands today and what it takes to get cited across ChatGPT, Claude, and Perplexity. ... Everything you need to know about installing and running these Claude Skills. ... Claude Skills for writing are open-source slash commands for Claude Code that turn blog and content workflows into one-command tasks. The pack covers writing, rewriting, outlines, briefs, SEO and AI-citation optimization, schema, charts, images, translation, and repurposing, all run inside Claude Code with no dashboards. What is Claude Code and do I need it to use these writing skills? Claude Code is Anthropic's CLI tool for running AI-powered commands in your terminal. You need Claude Code installed to use these writing skills.\n\nClone the repo, open Claude Code, and run a skill by name, for example /blog write to draft an article, /blog rewrite to optimize an existing post, or /blog repurpose to turn one post into social content. Most skills need no setup beyond Claude Code. ... Yes. The stop-slop skill and the AI-content detection in blog-analyze and blog-rewrite catch predictable AI tells like filler phrases, em dashes, and formulaic structure, then rewrite for varied rhythm and a natural voice, with persona controls that keep your brand tone consistent across posts. Do Claude writing skills replace writers or a content agency? No. They handle the repeatable, research-heavy parts of content, outlines, sourcing, SEO checks, schema, and formatting, so writers can focus on ideas, voice, and judgment. The skills work best as an extension of your team, not a replacement for it.\n\nAre these writing Claude skills free and open source? Yes. Every writing skill is open source and free to use, hosted on GitHub and updated weekly. You can read each skill's prompt, fork it, and adapt it to your own brand voice, audience, and content workflow. ... The full content lifecycle: writing new blog articles, rewriting and optimizing old ones, outlines and content briefs, editorial calendars and topic clusters, on-page SEO and AI-citation (GEO) audits, schema markup, fact-checking, charts and images, audio narration, translation and localization, and repurposing to social, email, and video. What is AI SEO and GEO, and how do these writing skills help? AI SEO, also called GEO (generative engine optimization), is getting your content cited in AI answers from ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini. Skills like blog-geo, blog-schema, and blog-rewrite audit and optimize structure, citation capsules, and answer-first formatting so AI systems can extract and cit",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 day ago",
        "search_provider": "anthropic",
        "url": "https://www.infrasity.com/claude-skills/writing-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic’s Complete Guide to Claude Skills Building - KDnuggets",
      "url": "https://www.kdnuggets.com/anthropics-complete-guide-to-claude-skills-building",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "kdnuggets.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=kdnuggets.com",
        "site_name": "KDnuggets"
      },
      "is_missing": false,
      "text": "Should trigger: &quot;Write a blog post about our product launch&quot; &quot;Draft content for the engineering blog&quot; &quot;Create a post following our style guide&quot; &quot;I need a 1,500-word piece on async communication for developers&quot; Should NOT trigger: &quot;Summarize this article for me&quot; &quot;Help me fix this Python function&quot; &quot;Write an email to the sales team&quot; &quot;Create a presentation about Q4 results&quot; Run 10–20 should-trigger queries and track how many activate the skill automatically versus requiring explicit invocation. Aim for 90%+ automatic triggering on relevant requests. 2. Output quality tests: Run the same request three to five times and compare outputs for structural consistency. Test edge cases: a topic with no clear conclusion, a brief with conflicting instructions, a word count target that is impractically short or long. After any edit to SKILL.md or references/style-guide.md, rerun the full test matrix before distributing.\n\nThis guide covers the complete picture: what skills are technically, how to plan and design them, the exact file structure and naming rules, how to write instructions that Claude follows reliably, a complete working skill built from scratch, how to test and distribute, and what to do when things go wrong. By Shittu Olumide, Technical Content Specialist on June 8, 2026 in Artificial Intelligence · Every time you begin a new Claude conversation, you start from zero. Your preferred output format, your team's writing style, your domain vocabulary, and your quality standards are gone. You spend the first few exchanges re-establishing context you already established in the last session and the session before that. For a one-off question, that is fine. For repeatable professional work, it is a tax on every conversation. Claude Skills are the fix. A skill is a folder of instructions you build once that Claude loads automatically when the task calls for it.\n\nShould trigger: \"Write a blog post about our product launch\" \"Draft content for the engineering blog\" \"Create a post following our style guide\" \"I need a 1,500-word piece on async communication for developers\" Should NOT trigger: \"Summarize this article for me\" \"Help me fix this Python function\" \"Write an email to the sales team\" \"Create a presentation about Q4 results\" Run 10–20 should-trigger queries and track how many activate the skill automatically versus requiring explicit invocation. Aim for 90%+ automatic triggering on relevant requests. 2. Output quality tests: Run the same request three to five times and compare outputs for structural consistency. Test edge cases: a topic with no clear conclusion, a brief with conflicting instructions, a word count target that is impractically short or long. After any edit to SKILL.md or references/style-guide.md, rerun the full test matrix before distributing.\n\nA skill is a folder. Inside it lives a SKILL.md file (required) and optionally a scripts/ directory for executable code, a references/ directory for documentation Claude loads as needed, and an assets/ directory for templates and supporting files. That is the entire technical definition. Skills are not models, plugins in the WordPress sense, or paid add-ons. They are open-source markdown instructions plus supporting files. You can read every one of them on GitHub before you install anything. What makes them powerful is the architecture underneath. According to Anthropic's official guide, skills use a three-level progressive disclosure system designed to minimize token usage while maintaining specialized expertise. These levels are: YAML frontmatter: Always loaded in Claude's system prompt, costing around 100 tokens per skill regardless of how many skills are installed.\n\nFor teams building on Model Context Protocol (MCP) servers, skills add a knowledge layer on top of connectivity. The way Anthropic frames it in the official guide: MCP provides the professional kitchen — access to tools, ingredients, and equipment. Skills provide the recipes and step-by-step instructions for creating something valuable. MCP tells Claude what it can do. Skills tell Claude how to do it well. A three-tier pyramid diagram showing progressive disclosure · The most common mistake when building a skill is starting with the file structure rather than the use case. Anthropic's guide is explicit: identify two or three concrete use cases before touching any files. ... What domain knowledge or best practices should be embedded that the user would otherwise need to explain every session? ... Use Case: Blog Post Drafting Trigger: User says \"write a blog post\", \"draft content for our blog\", or \"create a post following our style guide\" Steps: 1.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 month ago",
        "search_provider": "anthropic",
        "url": "https://www.kdnuggets.com/anthropics-complete-guide-to-claude-skills-building"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - ComposioHQ/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows · GitHub",
      "url": "https://github.com/ComposioHQ/awesome-claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Claude Skills are reusable instruction packages that teach an AI agent how to handle a specific class of tasks. Each skill is a folder containing a SKILL.md file with YAML frontmatter (name, description) and Markdown instructions, optionally ...\n\nClaude Skills are reusable instruction packages that teach an AI agent how to handle a specific class of tasks. Each skill is a folder containing a SKILL.md file with YAML frontmatter (name, description) and Markdown instructions, optionally bundled with scripts, references, and assets. Anthropic introduced the format in October 2025 and released it as an open standard in December 2025; it's now supported by Claude Code, Claude.ai, the Claude API, OpenAI Codex, Cursor, Gemini CLI, Antigravity, and Windsurf. Skills load progressively. At session start, the agent sees only each skill's name and description — roughly 100 tokens per skill. The full SKILL.md body (typically under 5,000 tokens) loads only when the agent decides the skill is relevant to the current task. Auxiliary files in scripts/ and references/ load on demand. This is what lets a single agent host hundreds of skills without bloating its context window.\n\nA curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows - ComposioHQ/awesome-claude-skills\n\nartifacts-builder - Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). aws-skills - AWS development with CDK best practices, cost optimization MCP servers, and serverless/event-driven architecture patterns. building-blog - Adds an SEO-first, i18n-ready blog to a Next.js + Sanity site via a 40-question intake, a one-page plan, and a 20-section spec. Includes a generator for AI hero images via Gemini 3 Pro Image (Nano Banana Pro). By @BuildShipGrowRepeat · Changelog Generator - Automatically creates user-facing changelogs from git commits by analyzing history and transforming technical commits into customer-friendly release notes. Chrome Relay - Drives the user's already-open Chrome session — cookies, SSO, extensions, localhost — through a local CLI bridge.\n\nlean-ctx - MCP server and context runtime for AI coding agents: session caching, AST-aware compression, and 90+ shell patterns to reduce token usage. Supports Claude Code, Cursor, Copilot, and other integrations. Install the Claude Code skill with lean-ctx init --agent claude-code; docs at leanctx.com. By @yvgude · MCP Builder - Guides creation of high-quality MCP (Model Context Protocol) servers for integrating external APIs and services with LLMs using Python or TypeScript. move-code-quality-skill - Analyzes Move language packages against the official Move Book Code Quality Checklist for Move 2024 Edition compliance and best practices. OpenWeb - Agent-native way to access any website. Calls the same APIs the website calls (JSON in, JSON out) with auth (cookies, JWT, CSRF, signing) auto-resolved per request. 90+ sites built in. By @openweb-org ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 23, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/ComposioHQ/awesome-claude-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Best Open Source Claude Code Skills on GitHub (2026)",
      "url": "https://www.agensi.io/learn/open-source-claude-code-skills-github",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "agensi.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=agensi.io",
        "site_name": "Agensi"
      },
      "is_missing": false,
      "text": "Curated list of open source SKILL.md skills on GitHub for Claude Code. Free to use, fork, and customize. With security tips for vetting repos.\n\n> Quick Answer: For a quick start, check awesome-skill-md on GitHub, a curated list of quality open source Claude Code skills. Evaluate skills by checking stars/activity, reading the SKILL.md content, researching the creator, and reviewing issues/PRs. ... The awesome-skill-md repository is a curated, categorized list of quality skills with links to guides and tools. Start here instead of raw GitHub search. ... Stars and activity. A repo with 50 stars and recent commits is more trustworthy than one with 0 stars and no activity for 6 months. The SKILL.md content. Open it and read it entirely. Is it well-written with clear instructions? Or is it a wall of generic text that looks AI-generated? The creator. Do they have other repos? A profile with real projects? Or is it a throwaway account? Issues and PRs. Active discussion means the community is using and improving the skill.\n\nMost quality open source skills are simple and focused. A 20-line SKILL.md that says \"use pytest, follow these patterns, check these edge cases\" is more valuable than a 500-line repo with a complex setup.\n\nIf you've built skills for your own workflow, open sourcing them helps the ecosystem: 1. Create a public repo with your SKILL.md files 2. Add a README explaining what each skill does and how to install it 3. Add a LICENSE file (MIT or CC0 for maximum adoption) 4. Submit a PR to awesome-skill-md to get listed · If your skill is polished enough, consider listing it on Agensi where you can earn revenue while maintaining an open source version.\n\nBrowse security-reviewed skills at Agensi.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "4 days ago",
        "search_provider": "anthropic",
        "url": "https://www.agensi.io/learn/open-source-claude-code-skills-github"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - alirezarezvani/claude-skills: 337 Claude Code skills & agent skills & plugins (30+ Agents, 70+ custom commands, 330+ skills, customizable references, scripts)for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory, research, business operations, commercial & finance, and your daily productivity skills.",
      "url": "https://github.com/alirezarezvani/claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "354 production-ready Claude Code skills, plugins, and agent skills for 13 AI coding tools. The most comprehensive open-source library of Claude Code skills and agent plugins — also works with OpenAI Codex, Gemini CLI, Cursor, and 9 more coding agents. Reusable expertise packages covering engineering, DevOps, marketing (incl. AEO — Answer Engine Optimization for LLM citation), security (PreToolUse hooks), compliance, C-level advisory (incl. founder-mode CFO/CMO/CRO/CPO/COO/CHRO/CISO/GC/CDO/CAIO/CCO/VPE personas + 21 /cs:* slash commands), productivity (capture/email/reflect), an academic research stack (litreview/grants/dossier/patent/syllabus/pulse/notebooklm/deep-research + hybrid router), and enterprise Research Operations (clinical-research/research-finance/market-research/product-research, v2.9.0). Works with: Claude Code · OpenAI Codex ·\n\n337 Claude Code skills & agent skills & plugins (30+ Agents, 70+ custom commands, 330+ skills, customizable references, scripts)for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory, research, business operations, commercial & finance, and your daily productivity skills. - alirezarezvani/claude-skills\n\n354 production-ready Claude Code skills, plugins, and agent skills for 13 AI coding tools. The most comprehensive open-source library of Claude Code skills and agent plugins — also works with OpenAI Codex, Gemini CLI, Cursor, and 9 more coding agents. Reusable expertise packages covering engineering, DevOps, marketing (incl. AEO — Answer Engine Optimization for LLM citation), security (PreToolUse hooks), compliance, C-level advisory (incl. founder-mode CFO/CMO/CRO/CPO/COO/CHRO/CISO/GC/CDO/CAIO/CCO/VPE personas + 21 /cs:* slash commands), productivity (capture/email/reflect), an academic research stack (litreview/grants/dossier/patent/syllabus/pulse/notebooklm/deep-research + hybrid router), and enterprise Research Operations (clinical-research/research-finance/market-research/product-research, v2.9.0). Works with: Claude Code · OpenAI Codex ·\n\n5,200+ GitHub stars — the most comprehensive open-source Claude Code skills & agent plugins library. Claude Code skills (also called agent skills or coding agent plugins) are modular instruction packages that give AI coding agents domain expertise they don't have out of the box. Each skill includes: SKILL.md — structured instructions, workflows, and decision frameworks · Python tools — 593 CLI scripts (all stdlib-only, zero pip installs) Reference docs — 711 templates, checklists, and domain-specific knowledge files · One repo, thirteen platforms. Works natively as Claude Code plugins, Codex agent skills, Gemini CLI skills, Hermes Agent skills, Mistral Vibe skills, and converts to more tools via scripts/convert.sh. All 593 Python tools run anywhere Python runs. ... All three work together. See Orchestration for how to combine them.\n\nWill updating break my installation? No. We follow semantic versioning and maintain backward compatibility within patch releases. Existing script arguments, plugin source paths, and SKILL.md structures are never changed in patch versions. See the CHANGELOG for details on each release. Are the Python tools dependency-free? Yes. All 593 Python CLI tools use the standard library only — zero pip installs required. Every script is verified to run with --help. How do I create my own Claude Code skill? Each skill is a folder with a SKILL.md (frontmatter + instructions), optional scripts/, references/, and assets/. See the Skills & Agents Factory for a step-by-step guide. We welcome contributions! See CONTRIBUTING.md for guidelines. ... MIT — see LICENSE for details. ... Hermes Agent is BYO-sync tier: the repo ships a pre-generated .hermes/skills/claude-skills/ tree, but you run python scripts/sync-hermes-skills.py once locally to install into ~/.hermes/skills/. Uses the same agentskills.io SK",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 weeks ago",
        "search_provider": "anthropic",
        "url": "https://github.com/alirezarezvani/claude-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - hesreallyhim/awesome-claude-code: A hand-picked collection of the finest of resources for the most awesome of agents, Claude Code, the undisputed champion of coding companions, from the unstoppable team at Anthropic PBC. A delectable showcase of top tier skills, ambidextrous agents, scintillating status lines, top notch developer tooling, and also we have plugins · GitHub",
      "url": "https://github.com/hesreallyhim/awesome-claude-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "AI Research Skills by Wenyu Chiou - A catalog of 15 Claude Code skills mapped to 8 research-workflow stages (literature → gap analysis → design → drafting → reviewer response), where each stage emits an explicit YAML/Markdown deliverable the next stage consumes. Thoughtfully designed around anti-hallucination — schemas force &quot;gap&quot; status on unsupported claims, and downstream skills refuse malformed, overconfident handoffs. chrome-cdp-ex by Endeavor Yen - A zero-dependency Claude Code skill (68 commands) that connects to your real Chrome — logged-in tabs, cookies, live page state — to give the agent a perception layer: layout, visible styles, per-action &quot;what changed&quot; evidence, CSS-cascade-to-source tracing, and session replay/Playwright export. Notably rigorous about its own claims, with a dogfood benchmark gate that blocks performance/adoption assertions unless it passes.\n\nA hand-picked collection of the finest of resources for the most awesome of agents, Claude Code, the undisputed champion of coding companions, from the unstoppable team at Anthropic PBC. A delectable showcase of top tier skills, ambidextrous agents, scintillating status lines, top notch developer tooling, and also we have plugins - hesreallyhim/awesome-claude-code\n\nAI Research Skills by Wenyu Chiou - A catalog of 15 Claude Code skills mapped to 8 research-workflow stages (literature → gap analysis → design → drafting → reviewer response), where each stage emits an explicit YAML/Markdown deliverable the next stage consumes. Thoughtfully designed around anti-hallucination — schemas force \"gap\" status on unsupported claims, and downstream skills refuse malformed, overconfident handoffs. chrome-cdp-ex by Endeavor Yen - A zero-dependency Claude Code skill (68 commands) that connects to your real Chrome — logged-in tabs, cookies, live page state — to give the agent a perception layer: layout, visible styles, per-action \"what changed\" evidence, CSS-cascade-to-source tracing, and session replay/Playwright export. Notably rigorous about its own claims, with a dogfood benchmark gate that blocks performance/adoption assertions unless it passes.\n\ncapcut-cli by René Zander - A zero-dependency Node CLI (and Claude Code plugin/skill) that lets the agent edit CapCut / JianYing video projects programmatically — inspect timelines, build drafts, add text/audio, word-level captions and Whisper transcription, templates, and cut long-form into shorts — JSON in, JSON out, no server. Deeply mature for a media tool: 205 tests across macOS/Windows/Linux CI, a huge documented command surface, and a deliberately stateless \"the CLI is the protocol\" design. motion-skills by iart.ai - An open-source collection of ~50 motion-graphics, animation, and video skills across 14 installable packs — kinetic typography, data-driven charts, explainers, TikTok/Reels, web/WebGL animation, and Manim math animation — that teach an agent how a professional would build each piece. Every visual skill ships a deliver-and-verify loop (render a frame → screenshot → check) plus a small verify toolkit, so the agent inspects its own output instead of guessing at timing \n\nCate by 0-AI UG - A cross-platform desktop IDE built on an infinite zoomable canvas, where editors, terminals, browsers, and docs float in freeform space instead of tabs — and ships skills that let Claude Code spawn agent terminals on the canvas, coordinate through canvas notes, and drive browser panels. A genuinely novel UX, well-engineered (CI, e2e tests, context-isolated IPC, scoped filesystem access) and widely adopted. CloudCLI (Claude Code UI) by siteboon - A web and mobile PWA for driving Claude Code (and Cursor/Codex/Gemini) from any device — file explorer, git, integrated shell, and full session management that reads and writes your real ~/.claude config rather than duplicating it. By far the most-adopted Claude Code UI, with a self-hostable open-source core, an optional Docker microVM sandbox mode, a plugin ecosystem, and tools disabled by default for safety.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "4 days ago",
        "search_provider": "anthropic",
        "url": "https://github.com/hesreallyhim/awesome-claude-code"
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
        "site_name": "Claude Code Docs"
      },
      "is_missing": false,
      "text": "This example creates a skill that summarizes the uncommitted changes in your git repository and flags anything risky. It pulls the live diff into the prompt before Claude reads it, so the response is grounded in your actual working tree rather than what Claude can guess from open files. Claude loads the skill automatically when you ask about your changes, or you can invoke it directly with /summarize-changes. ... Create a directory for the skill in your personal skills folder. Personal skills are available across all your projects. ... Every skill needs a SKILL.md file with two parts: YAML frontmatter between --- markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs. The directory name becomes the command you type, and the description helps Claude decide when to load the skill automatically.Save this to ~/.claude/skills/summarize-changes/SKILL.md: --- description: Summarizes uncommitted changes and flags anything \n\nClaude receives the fully-rendered prompt with actual PR data This is preprocessing, not something Claude executes. Claude only sees the final result. Substitution runs once over the original file. Command output is inserted as plain text and is not re-scanned for further !`<command>` placeholders, so a command cannot emit a placeholder for a later pass to expand. The inline form is only recognized when ! appears at the start of a line or immediately after whitespace. If ! follows another character, as in KEY=!`cmd`, the placeholder is left as literal text and the command does not run. For multi-line commands, use a fenced code block opened with ```! instead of the inline form: ## Environment ```! node --version npm --version git status --short ``` To disable this behavior for skills and custom commands from user, project, plugin, or additional-directory sources, set \"disableSkillShellExecution\": true in settings.\n\nRun /doctor to see how many skill descriptions are being shortened or dropped and which skills are affected. As of v2.1.196, the Skills row in /context reports the size of the listing after the budget is applied, so it matches what the model receives. Earlier versions counted the full text of every description, so the row could show a value several times larger than the budget /doctor reports. To raise the budget, set the skillListingBudgetFraction setting (e.g. 0.02 = 2%) or the SLASH_COMMAND_TOOL_CHAR_BUDGET environment variable to a fixed character count. To free budget for other skills, set low-priority entries to \"name-only\" in skillOverrides so they list without a description. You can also trim the description and when_to_use text at the source: put the key use case first, since each entry’s combined text is capped at 1,536 characters regardless of budget.\n\nYour existing .claude/commands/ files keep working. Skills add optional features: a directory for supporting files, frontmatter to control whether you or Claude invokes them, and the ability for Claude to load them automatically when relevant. Claude Code skills follow the Agent Skills open standard, which works across multiple AI tools. Claude Code extends the standard with additional features like invocation control, subagent execution, and dynamic context injection. Claude Code includes a set of bundled skills that are available in every session unless disabled with the disableBundledSkills setting, including /code-review, /batch, /debug, /loop, and /claude-api. Unlike most built-in commands, which execute fixed logic directly, bundled skills are prompt-based: they give Claude detailed instructions and let it orchestrate the work using its tools.\n\nThis example creates a skill that summarizes the uncommitted changes in your git repository and flags anything risky. It pulls the live diff into the prompt before Claude reads it, so the response is grounded in your actual working tree rather than what Claude can guess from open files. Claude loads the skill automatically when you ask about your changes, or you can invoke it directly with /summarize-changes. ... Create a directory for the skill in your personal skills folder. Personal skills are available across all your projects. ... Every skill needs a SKILL.md file with two parts: YAML frontmatter between --- markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs. The directory name becomes the command you type, and the description helps Claude decide when to load the skill automatically.Save this to ~/.claude/skills/summarize-changes/SKILL.md: --- description: Summarizes uncommitted changes and flags anything",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 weeks ago",
        "search_provider": "anthropic",
        "url": "https://code.claude.com/docs/en/skills"
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

I didn't find any open-source skill dedicated specifically to "conclusion drafting" as a standalone task. Here's what the search surfaced, separating what's verifiable from what's inferred.

**Facts (attributed):**

There is no standalone "conclusion drafting" skill in the major curated lists. The closest matches are broader writing skills that include conclusion-writing as one step within a larger workflow:

- **content-research-writer** (ComposioHQ/awesome-claude-skills) — an article-writing skill whose workflow explicitly includes a "Write conclusion → final review" step, with a conclusion template covering summary of main points, call to action, and final thought. Its outline template has a Conclusion section: summary of main points, call to action, final thought. Source: github.com/ComposioHQ/awesome-claude-skills

- **AI Research Skills by Wenyu Chiou** (listed in hesreallyhim/awesome-claude-code) — this is the one most relevant to your academic context. It's a catalog of 15 Claude Code skills mapped to 8 research-workflow stages (literature → gap analysis → design → drafting → reviewer response), where each stage emits a YAML/Markdown deliverable the next stage consumes, designed around anti-hallucination so schemas force a "gap" status on unsupported claims. The "drafting" stage would be where conclusion-writing falls, though the source doesn't confirm a dedicated conclusion sub-skill. Source: github.com/hesreallyhim/awesome-claude-code

- **Blog writing skill packs** (infrasity.com) — open-source slash commands for Claude Code covering writing, rewriting, outlines, and briefs, hosted on GitHub and free. Conclusion-writing is implicit in the drafting commands but not broken out separately.

**Where to look directly:** the curated hubs are `awesome-skill-md`, `ComposioHQ/awesome-claude-skills`, and `hesreallyhim/awesome-claude-code`.

**Assumption / gap:** None of the sources I retrieved confirm a skill whose sole purpose is drafting conclusions. It's possible one exists in a less-indexed repo.

One clarification would help me narrow this:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T11:54:54.601321Z",
  "stop_timestamp": "2026-07-04T11:54:55.489598Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016T4UPerjnpA6CBdS41puGE",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "question": "What kind of conclusion are you drafting?",
        "options": [
          "Academic paper / thesis",
          "Blog / article",
          "Report / business doc",
          "General-purpose"
        ]
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
  "start_timestamp": "2026-07-04T11:54:55.505201Z",
  "stop_timestamp": "2026-07-04T11:54:55.505210Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_016T4UPerjnpA6CBdS41puGE",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\"questions\":[{\"question\":\"What kind of conclusion are you drafting?\",\"options\":[\"Academic paper / thesis\",\"Blog / article\",\"Report / business doc\",\"General-purpose\"]}]}",
      "uuid": "8bd5c024-99eb-488b-b5eb-b785b26df222"
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

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2cfb-00e5-78c9-97fa-637429662c61",
  "updated_at": "2026-07-04T11:54:55.552324Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f2cfb-00e5-7778-bb0a-ec5264d21402"
}
```

</details>

### 3. human — 2026-07-04T12:00:38.625106Z

Q: What kind of conclusion are you drafting?
A: 1 + 3

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2d00-7ae8-7816-82aa-985a3e4a458c",
  "updated_at": "2026-07-04T12:00:38.625106Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f2cfb-00e5-78c9-97fa-637429662c61"
}
```

</details>

### 4. assistant — 2026-07-04T12:01:02.204530Z

Given academic paper/thesis and report/business doc, the most relevant open-source option is the research-workflow skill set rather than the blog-oriented ones. Let me verify what it actually contains before pointing you to it.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T12:00:40.159065Z",
  "stop_timestamp": "2026-07-04T12:00:40.269401Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KuJeYL85dR3oJf6sRt6JYu",
  "name": "web_search",
  "input": {
    "query": "Wenyu Chiou AI research skills Claude Code drafting github"
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
  "start_timestamp": "2026-07-04T12:00:40.821139Z",
  "stop_timestamp": "2026-07-04T12:00:40.821154Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01KuJeYL85dR3oJf6sRt6JYu",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "[Resource]: AI Research Skills · Issue #1900 · hesreallyhim/awesome-claude-code",
      "url": "https://github.com/hesreallyhim/awesome-claude-code/issues/1900",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Catalog of 15 Claude Code skills mapped to 8 research-workflow stages: literature search, gap analysis, research design, manuscript drafting, and reviewer response. Five plugins install via one marketplace command, with each pipeline stage producing ...\n\nCatalog of 15 Claude Code skills mapped to 8 research-workflow stages: literature search, gap analysis, research design, manuscript drafting, and reviewer response. Five plugins install via one marketplace command, with each pipeline stage producing an explicit YAML/Markdown deliverable that the next stage reads as input. Install via claude plugin marketplace add WenyuChiou/ai-research-skills then claude plugin install research-workspace@ai-research-skills (one command for 11 skills). Ask Claude to walk you through the gap-to-topic skill against any literature collection; it produces a 3-gate decision dossier (open / contribution / feasibility) at .research/topic_dossier.gaps.yml with structured verdicts per candidate topic. Give Claude a list of 15-30 papers on any research topic. Trigger gap-to-topic to aggregate them, identify open gaps, and emit a verdict per candidate research direction (do-not-pursue / conditional-go / worth-pursuing) backed by structured reasoning.\n\nDisplay Name AI Research Skills Category Agent Skills Sub-Category None Primary Link https://github.com/WenyuChiou/ai-research-skills Author Name Wenyu Chiou Author Link https://github.com/WenyuChiou License MIT Other License No response...",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 26, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/hesreallyhim/awesome-claude-code/issues/1900"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - WenyuChiou/ai-research-skills: Universal SKILL.md catalog for research workflows: literature review, research design, project memory, manuscript writing, and cross-agent delegation for Claude Code, Codex, Gemini, Cursor, OpenClaw, and generic AI clients. · GitHub",
      "url": "https://github.com/WenyuChiou/ai-research-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "What this is. A catalog of 15 Claude Code skills built around one stubborn question most research-AI tools dodge: is this research gap actually worth doing? The pipeline opens with a structured decision dossier — three gates: open / contribution ...\n\nUniversal SKILL.md catalog for research workflows: literature review, research design, project memory, manuscript writing, and cross-agent delegation for Claude Code, Codex, Gemini, Cursor, OpenClaw, and generic AI clients. - WenyuChiou/ai-research-skills\n\nclaude plugin marketplace add WenyuChiou/ai-research-skills claude plugin install research-workspace@ai-research-skills · Windows cmd.exe: run the commands one at a time. If the plugin list does not show research-workspace@ai-research-skills, your paste probably only executed the first line; see docs/install.md for the single-line CMD form. For Claude Code, the first two commands install the 11-skill research-workspace plugin. Add the optional plugins only when you need manuscript writing, full Zotero operations, or Claude-to-Codex/Gemini delegation. Additive install — stop after any step and use what you have: # 1. Marketplace + 11 research-hub skills (6 immediately usable, pure reasoning) claude plugin marketplace add WenyuChiou/ai-research-skills claude plugin install research-workspace@ai-research-skills # 2. Manuscript work — claim-evidence audit, banned-word, reviewer response claude plugin install academic-writing-skills@ai-research-skills # 3.\n\nWhat this is. A catalog of 15 Claude Code skills built around one stubborn question most research-AI tools dodge: is this research gap actually worth doing? The pipeline opens with a structured decision dossier — three gates: open / contribution / feasibility — and downstream stages (research design, manuscript drafting, reviewer response) only fire on a candidate that clears all three. Built for graduate students, PhDs, postdocs, and research support staff. Five plugins, one marketplace install — and the same SKILL.md files load into Codex CLI, Gemini CLI, Cursor, Windsurf, Hermes, OpenClaw, and generic API clients too (see §7 Compatibility). For literature automation, the SKILL.md catalog and the executable research-hub runtime are separate layers; see docs/runtime-contract.md. 📚 Part of the agentic AI learning roadmap — featured in §13–14 (research workflows).\n\nIt does not tell you whether Codex, Cursor, OpenClaw, Hermes, or a generic API client has loaded the SKILL.md files. Marketplace-installed plugins live under ~/.claude/plugins/cache/..., not ~/.claude/skills/. Per-plugin details: docs/install.md. Python / Zotero / Git not set up yet? Start with docs/setup-guide.md. Need to know whether a skill is prompt-only or needs the Python runtime? See docs/runtime-contract.md. I'd rather clone the repo (contributors / debugging) git clone https://github.com/WenyuChiou/ai-research-skills.git cd ai-research-skills · This catalog is the registry, not a monorepo. Each plugin's source code lives in its own repo: github.com/WenyuChiou/research-hub — 11 research-workspace skills · github.com/WenyuChiou/academic-writing-skills — 1 skill ... If you're hacking on a plugin, clone its source repo, not this catalog.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 month ago",
        "search_provider": "anthropic",
        "url": "https://github.com/WenyuChiou/ai-research-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "WenyuChiou (Wenyu Chiou) · GitHub",
      "url": "https://github.com/WenyuChiou",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "🌐 Personal site (EN / 繁中): wenyuchiou.github.io · 🏛️ Lab: Complex Adaptive Water Systems (CAWS) · Center: Catastrophe Modeling &amp; Resilience · ✉️ wec324@lehigh.edu · 💼 LinkedIn · 📚 ORCID ... A trilingual (繁中 / English / 简中) learning roadmap for agentic AI: from LLM basics to multi-agent systems, with 240+ curated resources and hands-on examples. 中文 AI agent 學習地圖。 ... Universal SKILL.md catalog for research workflows: literature review, research design, project memory, manuscript writing, and cross-agent delegation for Claude Code, Codex, Gemini, Cursor, OpenCla… ... Claude Code skill for using Codex CLI as an execution specialist for implementation-heavy coding work, multi-file refactors, and wrapper-based execution flows. ... Claude Code skill for using Gemini CLI for large-context synthesis, English or zh-TW/CJK long-form drafting, and second-opinion review.\n\n🌐 Personal site (EN / 繁中): wenyuchiou.github.io · 🏛️ Lab: Complex Adaptive Water Systems (CAWS) · Center: Catastrophe Modeling & Resilience · ✉️ wec324@lehigh.edu · 💼 LinkedIn · 📚 ORCID ... A trilingual (繁中 / English / 简中) learning roadmap for agentic AI: from LLM basics to multi-agent systems, with 240+ curated resources and hands-on examples. 中文 AI agent 學習地圖。 ... Universal SKILL.md catalog for research workflows: literature review, research design, project memory, manuscript writing, and cross-agent delegation for Claude Code, Codex, Gemini, Cursor, OpenCla… ... Claude Code skill for using Codex CLI as an execution specialist for implementation-heavy coding work, multi-file refactors, and wrapper-based execution flows. ... Claude Code skill for using Gemini CLI for large-context synthesis, English or zh-TW/CJK long-form drafting, and second-opinion review.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/WenyuChiou"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - hesreallyhim/awesome-claude-code: A hand-picked collection of the finest of resources for the most awesome of agents, Claude Code, the undisputed champion of coding companions, from the unstoppable team at Anthropic PBC. A delectable showcase of top tier skills, ambidextrous agents, scintillating status lines, top notch developer tooling, and also we have plugins · GitHub",
      "url": "https://github.com/hesreallyhim/awesome-claude-code",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "AI Research Skills by Wenyu Chiou - A catalog of 15 Claude Code skills mapped to 8 research-workflow stages (literature → gap analysis → design → drafting → reviewer response), where each stage emits an explicit YAML/Markdown deliverable ...\n\nA hand-picked collection of the finest of resources for the most awesome of agents, Claude Code, the undisputed champion of coding companions, from the unstoppable team at Anthropic PBC. A delectable showcase of top tier skills, ambidextrous agents, scintillating status lines, top notch developer tooling, and also we have plugins - hesreallyhim/awesome-claude-code\n\nAI Research Skills by Wenyu Chiou - A catalog of 15 Claude Code skills mapped to 8 research-workflow stages (literature → gap analysis → design → drafting → reviewer response), where each stage emits an explicit YAML/Markdown deliverable the next stage consumes. Thoughtfully designed around anti-hallucination — schemas force \"gap\" status on unsupported claims, and downstream skills refuse malformed, overconfident handoffs. chrome-cdp-ex by Endeavor Yen - A zero-dependency Claude Code skill (68 commands) that connects to your real Chrome — logged-in tabs, cookies, live page state — to give the agent a perception layer: layout, visible styles, per-action \"what changed\" evidence, CSS-cascade-to-source tracing, and session replay/Playwright export. Notably rigorous about its own claims, with a dogfood benchmark gate that blocks performance/adoption assertions unless it passes.\n\nAgent Collab Skills by Wenyu Chiou - Claude Code marketplace for multi-agent collaboration — task splitter, output reconciler, adversarial debate, shared memory, acceptance gate. Composes with codex-delegate / gemini-delegate. gstack by Garry Tan - Garry Tan's (Y Combinator) Claude Code setup and \"open source software factory\" for managing the development lifecycle end-to-end. Includes a set of agents and in-depth skills/tools along with workflows for advancing a product from ideation to production. agentcairn by ccf - Long-term, cross-project memory for AI coding agents. Your own Obsidian vault as the source of truth. Daemonless and without opaque databases, your memory belongs to you. Callimachus by BetaBots-LLC - One local, searchable index of your AI coding-agent history Claude Code, Codex, Cursor, Gemini & more. Keyword + semantic search, MCP server, CLI & VS Code extension.\n\ncapcut-cli by René Zander - A zero-dependency Node CLI (and Claude Code plugin/skill) that lets the agent edit CapCut / JianYing video projects programmatically — inspect timelines, build drafts, add text/audio, word-level captions and Whisper transcription, templates, and cut long-form into shorts — JSON in, JSON out, no server. Deeply mature for a media tool: 205 tests across macOS/Windows/Linux CI, a huge documented command surface, and a deliberately stateless \"the CLI is the protocol\" design. motion-skills by iart.ai - An open-source collection of ~50 motion-graphics, animation, and video skills across 14 installable packs — kinetic typography, data-driven charts, explainers, TikTok/Reels, web/WebGL animation, and Manim math animation — that teach an agent how a professional would build each piece. Every visual skill ships a deliver-and-verify loop (render a frame → screenshot → check) plus a small verify toolkit, so the agent inspects its own output instead of guessing at timing",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "4 days ago",
        "search_provider": "anthropic",
        "url": "https://github.com/hesreallyhim/awesome-claude-code"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Orchestra-Research/AI-Research-SKILLs: Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. · GitHub",
      "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepowe...\n\nComprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. - Orchestra-Research/AI-Research-SKILLs\n\nAutoresearch - Autonomous research orchestration using a two-loop architecture (inner optimization + outer synthesis). Manages the full lifecycle from literature survey to paper writing, routing to all domain-specific skills. Supports Claude Code /loop and OpenClaw heartbeat for continuous operation (390 lines + 3 refs) LitGPT - Lightning AI's 20+ clean LLM implementations with production training recipes (462 lines + 4 refs) Mamba - State-space models with O(n) complexity, 5× faster than Transformers (253 lines + 3 refs) RWKV - RNN+Transformer hybrid, infinite context, Linux Foundation project (253 lines + 3 refs) NanoGPT - Educational GPT in ~300 lines by Karpathy (283 lines + 3 refs) TorchTitan - PyTorch-native distributed training for Llama 3.1 with 4D parallelism ·\n\nAuto-detects your installed coding agents (Claude Code, Hermes Agent, OpenCode, Qoder, Cursor, Gemini CLI, etc.) Installs skills to ~/.orchestra/skills/ with symlinks to each agent (falls back to copy on Windows) Offers everything, quickstart bundle, by category, or individual skills ... # Interactive installer (recommended) npx @orchestra-research/ai-research-skills # Direct commands npx @orchestra-research/ai-research-skills list # View installed skills npx @orchestra-research/ai-research-skills update # Update installed skills ...\n\nclaude-ai-research-skills/ ├── README.md ← You are here ├── CONTRIBUTING.md ← Contribution guide ├── demos/ ← Curated demo gallery (links to demo repos) ├── docs/ ├── 0-autoresearch-skill/ (1 skill ✓ - Autonomous research orchestration) ├── 01-model-architecture/ (5 skills ✓ - LitGPT, Mamba, RWKV, NanoGPT, TorchTitan) ├── 02-tokenization/ (2 skills ✓ - HuggingFace Tokenizers, SentencePiece) ├── 03-fine-tuning/ (4 skills ✓ - Axolotl, LLaMA-Factory, Unsloth, PEFT) ├── 04-mechanistic-interpretability/ (4 skills ✓ - TransformerLens, SAELens, pyvene, nnsight) ├── 05-data-processing/ (2 skills ✓ - Ray Data, NeMo Curator) ├── 06-post-training/ (8 skills ✓ - TRL, GRPO, OpenRLHF, SimPO, verl, slime, miles, torchforge) ├── 07-safety-alignment/ (4 skills ✓ - Constitutional AI, LlamaGuard, NeMo Guardrails, Prompt Guard) ├── 08-distributed-training/ (6 skills ✓ - Megatron-Core, DeepSpeed, FSDP, Accelerate, Lightning, Ray Train) ├── 09-infrastructure/ (3 skills ✓ - Modal, SkyPilot, Lambda Labs) ├──",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 weeks ago",
        "search_provider": "anthropic",
        "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Imbad0202/academic-research-skills: Academic Research Skills for Claude Code: research → write → review → revise → finalize",
      "url": "https://github.com/imbad0202/academic-research-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Style Calibration (academic-paper intake Step 10, optional): Provide 3+ past papers and the pipeline learns your writing voice — sentence rhythm, vocabulary preferences, citation integration style. Applied as a soft guide during drafting; discipline conventions always take priority. Priority system: discipline norms (hard) &gt; journal conventions (strong) &gt; personal style (soft). See shared/style_calibration_protocol.md · Writing Quality Check (academic-paper/references/writing_quality_check.md): Writing quality checklist applied during draft self-review. 5 categories: AI high-frequency term warnings (25 terms), punctuation pattern control (em dash ≤3), throat-clearing opener detection, structural pattern warnings (Rule of Three, uniform paragraphs, synonym cycling), and burstiness checks (sentence length variation). These are good writing rules — not detection evasion ·\n\nA patch release folding the genuinely-novel parts of an external contribution into existing skills as modes, per ARS's mode-based architecture. New modes: deep-research three-way-scan — a lightweight WHY/HOW/WHAT paper-comparison triage between quick and lit-review, with per-paper shortlists + a cross-paper synthesis (deep-research 2.9.4 → 2.10.0); academic-paper rebuttal-audit — standalone advisory QA of an author's existing rebuttal/response draft against the reviewer comments (per-comment coverage table + gap list + tone/evidence/misread risk flags), which generates nothing and explicitly suppresses Schema 11 / Material Passport writes / ready_to_submit when run standalone (enforced by a check_rebuttal_audit_guard() lint with mutation coverage); plus a revision-coach scope extension to pushback/disagreement posture and non-journal scopes, and /ars-3w + /ars-rebuttal-audit slash commands.\n\nDeterministic advisory verifier at the Phase 4 → 5 boundary covering 5 temporal failure modes (P1 retrospective arithmetic, P2 anachronistic citation, P3 comparator unmaterialized, P4 causal inversion, P5 deictic present). New Phase 2 sibling timeline_extraction_agent owns phase2_investigation/timeline.yaml + phase2_investigation/citation_provenance.yaml. Verifier script scripts/temporal_integrity_audit.py runs 5 passes deterministically. M3 Temporal Integrity Iron Rule added to report_compiler_agent + draft_writer_agent. M6-minimal: Crossref issued + pdftotext cover first-party verification. M7-minimal: date provenance + comparator materialization. M5-stub: user-declared version_family_id only. Zero modification to literature_corpus_entry, claim_audit_result, claim_intent_manifest. bibliography_agent unmodified (F2 invariant). 3 new sidecar schemas.\n\nExternal contributions: @mchesbro1 originally proposed and drafted the IS Basket of 8 journals (Issue #5); @cloudenochcsis extended it to the full Senior Scholars' Basket of 11 (Issue #7, PR #8). Updated academic-paper-reviewer/references/top_journals_by_field.md Section 7, adding Decision Support Systems, Information & Management, and Information and Organization. Source: AIS Senior Scholars' List of Premier Journals. Inspired by patterns from aspi6246/Claude-Code-Skills-for-Academics. ... 29 explicit Anti-Patterns across all 4 skills (7-8 per skill, tabular format with \"Why It Fails\" + \"Correct Behavior\") 22 IRON RULE markers on critical rules that must not be violated even in long conversations · Read-only constraint on academic-paper-reviewer (reviewers cannot modify the manuscript) Wave 2: Traceability + Cognitive Frameworks + Reinforcement ·\n\nStyle Calibration (academic-paper intake Step 10, optional): Provide 3+ past papers and the pipeline learns your writing voice — sentence rhythm, vocabulary preferences, citation integration style. Applied as a soft guide during drafting; discipline conventions always take priority. Priority system: discipline norms (hard) > journal conventions (strong) > personal style (soft). See shared/style_calibration_protocol.md · Writing Quality Check (academic-paper/references/writing_quality_check.md): Writing quality checklist applied during draft self-review. 5 categories: AI high-frequency term warnings (25 terms), punctuation pattern control (em dash ≤3), throat-clearing opener detection, structural pattern warnings (Rule of Three, uniform paragraphs, synonym cycling), and burstiness checks (sentence length variation). These are good writing rules — not detection evasion ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "2 days ago",
        "search_provider": "anthropic",
        "url": "https://github.com/imbad0202/academic-research-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - glebis/claude-skills: Collection of Claude Code skills for enhanced AI workflows · GitHub",
      "url": "https://github.com/glebis/claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Collection of Claude Code skills for enhanced AI workflows - glebis/claude-skills\n\nUse when: You need to improve AI-generated text quality, remove bureaucratic language (канцелярит), humanize drafts while preserving facts, or refine professional writing across languages. Quantified ROI analysis for automation decisions with voice-enabled web interface. Analytical precision design. ... # Install dependencies pip install flask groq python-dotenv # Add Groq API key (optional, for voice) export GROQ_API_KEY=\"your-key\" # Start web server python3 server_web.py # Open browser open http://localhost:8080 · Use when: Deciding whether to automate repetitive tasks - transforms \"this feels tedious\" into quantified recommendations with clear next steps. Generate structured decision-making tools — step-by-step guides, bias checkers, scenario matrices, and interactive dashboards. ... # Copy to skills directory cp -r decision-toolkit ~/.claude/skills/ # Invoke for a decision /decision-toolkit \"Should I switch to a new tech stack?\"\n\nCreate, preview, and publish formatted Telegram posts from draft markdown files with HTML formatting and media. Built for @klodkot and Gleb Kalinin's other Telegram channels -- channel configs (footers, tags, language) are hardcoded but the pattern is easy to adapt.\n\n💰 Draft mode (--draft): 512x512 low quality at ~$0.02/image (10× cheaper for iteration) ⚠️ Cost confirmation: prompts before spending >$0.50, skip with -y · 💵 Cost estimation (--estimate): preview cost before generating · 🌐 OpenRouter support (--provider openrouter) for unified billing ...\n\nCut a software release and maintain a tiered compatibility policy from one command. Config-driven (release.config.json): bumps every version file, runs your readiness gate, drafts a Keep-a-Changelog section from conventional commits, updates a COMPATIBILITY.md (surfaces × maturity tiers + deprecations), tags (→ your CI release workflow), and reports closed issues. Teaches the standards as it runs. ... 🎚️ Surfaces × tiers (experimental → preview → stable) with compatibility modes — a breaking change to a stable surface is forced to a major bump · 🧱 Stdlib-only engine (scripts/release.py) with 27 unit tests; safe version-file rewrites (key + exact-value match, errors on ambiguity) 📓 COMPATIBILITY.md updated every release; deprecation windows (RFC 9745/8594) 📐 Grows into Contracts & Modes: golden/contract tests in the gate (worked DB round-trip example) 📚 Encodes SemVer ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "2 weeks ago",
        "search_provider": "anthropic",
        "url": "https://github.com/glebis/claude-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - K-Dense-AI/scientific-agent-skills: Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 160,000+ scientists worldwide. 140 ready-to-use skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard. · GitHub",
      "url": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 160,000+ scientists worldwide. 140 ready-to-use skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard. - K-Dense-AI/scientific-agent-skills\n\nTurn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 160,000+ scientists worldwide. 140 ready-to-use skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard. - K-Dense-AI/scientific-agent-skills\n\nWorks with Cursor, Claude Code, Codex, Google Antigravity, and more. Transform your AI agent into a research assistant capable of executing complex multi-step scientific workflows across biology, chemistry, medicine, and beyond. ⭐ Help make AI for science easier to discover: If Scientific Agent Skills saves you time, teaches your agent a workflow, or helps your lab move faster, please star this repository. A star is a public signal that these open, reusable research skills are worth maintaining: it helps scientists, engineers, and open-source contributors find the project, shows which agent-skill standards are gaining real adoption, and gives us a clear reason to keep expanding the collection for the community. These skills enable your AI agent to seamlessly work with specialized scientific libraries, databases, and tools across multiple scientific domains.\n\nClient: Any agent that supports the Agent Skills standard (Cursor, Claude Code, Gemini CLI, Codex, Google Antigravity, etc.) ... Dependencies: Automatically handled by individual skills (check SKILL.md files for specific requirements) The skills use uv as the package manager for installing Python dependencies. Install it using the instructions for your operating system: ... For more installation options and details, visit the official uv documentation. Once you've installed the skills, you can ask your AI agent to execute complex multi-step scientific workflows. Here are some example prompts: Goal: Find novel EGFR inhibitors for lung cancer treatment ... Use available skills you have access to whenever possible. Query ChEMBL for EGFR inhibitors (IC50 < 50nM), analyze structure-activity relationships with RDKit, generate improved analogs with datamol, perform virtual screening with DiffDock against AlphaFold EGFR structure, search PubMed for resistance mechanisms, check COSMIC for mutat\n\nQ: Can I use this with other AI models? A: The skills follow the open Agent Skills standard and work with any compatible agent, including Cursor, Claude Code, Codex, Google Antigravity, OpenClaw, NVIDIA NemoClaw, Hermes, and Pi. Q: Do I need all the Python packages installed? A: No! Only install the packages you need. Each skill specifies its requirements in its SKILL.md file. Q: What if a skill doesn't work? A: First check the Troubleshooting section. If the issue persists, file an issue on GitHub with detailed reproduction steps. Q: Do the skills work offline? A: Database skills require internet access to query APIs. Package skills work offline once Python dependencies are installed. Q: Can I contribute my own skills? A: Absolutely! We welcome contributions. See the Contributing section for guidelines and best practices. Q: How do I report bugs or suggest features?",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://github.com/K-Dense-AI/scientific-agent-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Imbad0202/academic-research-skills-codex: Codex-native Academic Research Skills suite for human-in-the-loop academic research workflows · GitHub",
      "url": "https://github.com/Imbad0202/academic-research-skills-codex",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Open a new Codex conversation after installation. Existing Codex sessions may keep their old skill cache; you do not need to close unrelated Claude or Codex sessions. Verify with /skills: you should see one ARS entry, academic-research-suite or Academic Research .... You should not see separate academic-paper, academic-pipeline, deep-research, or academic-paper-reviewer skills from this package. If you do, reinstall with the update command above and open a new Codex conversation. Codex Desktop can also install this repository as a custom plugin marketplace. Add this repository as the marketplace source and install the Academic Research Skills plugin: Marketplace source: https://github.com/Imbad0202/academic-research-skills-codex.git Branch/ref: main Plugin: academic-research-skills · The plugin root lives at plugins/academic-research-skills/. Its skills/ directory contains a materialized copy of academic-research-suite, not a symlink.\n\nCodex setup covers installation, ars-* aliases, optional tools, Material Passport adapters, and unsupported Claude plugin features. Codex architecture explains the logical ARS pipeline with the Codex runtime overlay. Optional full-runtime adapter documents the disabled-by-default planner, Codex agent-team templates, and hook pack. Invoke the suite explicitly with $academic-research-suite (singular), then describe the research task and provide any source files, notes, draft text, reviewer comments, or output constraints. Use $academic-research-suite to help me plan a systematic literature review on AI adoption in higher education quality assurance. The Codex adapter routes the request to one of five ARS workflows: ... Use $academic-research-suite to build a systematic review protocol for AI in higher education QA. ... Use $academic-research-suite to turn these notes into an IMRaD paper outline and drafting plan.\n\nThe vendored ARS source currently tracks Imbad0202/academic-research-skills@8157a15b3bfad94af5c3ac4d7a79d5a9362622f4 (v3.14.0). Vendored runtime content includes the ARS v3.14 eval-harness PR comment renderer, prompt-debt retirement updates, July harness-retirement audit, release-aligned README/CITATION/MODE_REGISTRY surfaces, refreshed setup and architecture docs, and prior v3.13 portability and verification hardening. Nested upstream .github/ workflows and root agents/ mirrors are preserved for traceability and self-tests, but are not repo-level CI or Codex entrypoints; Claude/plugin loader files under .claude/ and .claude-plugin/ remain intentionally excluded. Install the skill from this repo path. Use --method git so public and credentialed GitHub access both work consistently: python3 \"$HOME/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py\" \\ --repo Imbad0202/academic-research-skills-codex \\ --ref main \\ --path skills/academic-research-suite \\ --method gi\n\nOpen a new Codex conversation after installation. Existing Codex sessions may keep their old skill cache; you do not need to close unrelated Claude or Codex sessions. Verify with /skills: you should see one ARS entry, academic-research-suite or Academic Research .... You should not see separate academic-paper, academic-pipeline, deep-research, or academic-paper-reviewer skills from this package. If you do, reinstall with the update command above and open a new Codex conversation. Codex Desktop can also install this repository as a custom plugin marketplace. Add this repository as the marketplace source and install the Academic Research Skills plugin: Marketplace source: https://github.com/Imbad0202/academic-research-skills-codex.git Branch/ref: main Plugin: academic-research-skills · The plugin root lives at plugins/academic-research-skills/. Its skills/ directory contains a materialized copy of academic-research-suite, not a symlink.\n\nUpstream references to a \"fresh Claude Code session\" mean a new Codex conversation in this package; Material Passport reset semantics still apply. If a citation, source, statistic, or journal policy cannot be verified, Codex should mark it as unverified rather than invent support. This package aims for the same user-facing workflow content as upstream ARS v3.14.0 where Codex has an equivalent concept. ... Agent files are role/phase prompts; Codex runs them inline unless the user explicitly asks for delegated subagents ... Planner, agent-team templates, and hook pack live under skills/academic-research-suite/codex/; disabled by default ... For reviewer calibration or cross-model devil's advocate checks, configure one of the provider tuples documented in ars/shared/cross_model_verification.md, then ask for cross-model verification explicitly in the prompt.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "4 days ago",
        "search_provider": "anthropic",
        "url": "https://github.com/Imbad0202/academic-research-skills-codex"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Galaxy-Dawn/claude-scholar: Semi-automated research assistant for academic research and software development. Supports Claude Code, Codex CLI, Kimi Code CLI, and OpenCode across ideation, coding, experiments, writing, and publication. · GitHub",
      "url": "https://github.com/Galaxy-Dawn/claude-scholar",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Help me draft the related work section for this project based on the current findings and paper notes. ... Help me write a rebuttal draft for these reviewer comments. ... If you already maintain your own local CLAUDE.md files, merge the Claude Scholar sections you want into them instead of assuming sidecar files apply automatically. Zotero and Obsidian are optional, but they become much more useful when you want durable literature notes or project memory rather than one-off chat output. ... Claude Code — the primary installation target. Codex CLI — supported workflow and documentation are available in this repo ecosystem. OpenCode — supported as an alternative CLI workflow. The top-level workflow is the same: research, coding, experiments, reporting, and project knowledge management. Use Zotero when you want Claude Scholar to help with: ... See MCP_SETUP.md.\n\nSemi-automated research assistant for academic research and software development. Supports Claude Code, Codex CLI, Kimi Code CLI, and OpenCode across ideation, coding, experiments, writing, and publication. - Galaxy-Dawn/claude-scholar\n\nHelp me draft the related work section for this project based on the current findings and paper notes. ... Help me write a rebuttal draft for these reviewer comments. ... If you already maintain your own local CLAUDE.md files, merge the Claude Scholar sections you want into them instead of assuming sidecar files apply automatically. Zotero and Obsidian are optional, but they become much more useful when you want durable literature notes or project memory rather than one-off chat output. ... Claude Code — the primary installation target. Codex CLI — supported workflow and documentation are available in this repo ecosystem. OpenCode — supported as an alternative CLI workflow. The top-level workflow is the same: research, coding, experiments, reporting, and project knowledge management. Use Zotero when you want Claude Scholar to help with: ... See MCP_SETUP.md.\n\nStart a new topic with literature search, Zotero organization, research question cards, and proposal drafting only when the evidence gate passes. ... Review an existing Zotero collection and generate a structured literature synthesis. ... Batch-read a Zotero collection and create structured paper reading notes. ... 5W1H Brainstorming: turn a vague topic into structured questions (What / Why / Who / When / Where / How). Literature Search & Import: search papers, extract DOI/arXiv/URLs, import them into Zotero, and organize them into themed collections. PDF & Full Text: attach PDFs when available, read full text when possible, and fall back to abstract-level analysis when necessary. Gap Analysis: identify literature, methodological, application, interdisciplinary, or temporal gaps. Research Question & Planning: convert the review into concrete questions, initial hypotheses, and next-step planning.\n\nSystematic academic writing from structure setup to draft refinement. ... Draft publication-oriented ML/AI papers from repo context, evidence, and literature. ... Draft or rebuild Nature-style manuscript sections from claims, figures, results, notes, or Chinese drafts. ... Polish, restructure, or translate manuscript prose into concise Nature-leaning English. ... Draft, audit, or revise point-by-point reviewer response letters for Nature-family revisions. ... Prepare Nature-ready Data Availability statements, repository plans, and FAIR metadata checks. ... Check references, metadata, and claim-citation alignment to prevent citation mistakes. ... Reduce robotic phrasing and improve clarity, rhythm, and human academic tone. ... Clean messy conference templates into an Overleaf-ready writing structure. ... Mine strong papers for reusable writing patterns, structure, and venue expectations.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "June 2, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/Galaxy-Dawn/claude-scholar"
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

Confirmed: no skill exists whose sole job is "conclusion drafting." But for academic papers and reports, conclusion-writing lives inside several open-source manuscript-drafting skill suites. Facts vs. assumptions below, each attributed.

**Facts (attributed to primary repos):**

Four MIT/open-source suites handle manuscript drafting (which includes the conclusion) as part of a research-writing pipeline:

- **academic-research-skills** by Imbad0202 (github.com/imbad0202/academic-research-skills) — an "Academic Research Skills for Claude Code: research → write → review → revise → finalize" pipeline. Its `academic-paper` skill applies a writing-quality checklist during draft self-review across 5 categories, including AI high-frequency-term warnings (25 terms), em-dash control (≤3), throat-clearing-opener detection, and sentence-length burstiness checks. It also offers optional style calibration that learns your writing voice from 3+ past papers. This is the most actively maintained (updates dated 2 days ago) and the closest to a section-level drafting tool.

- **claude-scholar** by Galaxy-Dawn (github.com/Galaxy-Dawn/claude-scholar) — a research assistant supporting Claude Code/Codex/OpenCode. It explicitly supports drafting individual manuscript sections, e.g. "draft the related work section," and its writing skills cover "systematic academic writing from structure setup to draft refinement," plus prose polishing to "concise Nature-leaning English." Section-by-section drafting (conclusion included) is the intended use.

- **ai-research-skills** by Wenyu Chiou (github.com/WenyuChiou/ai-research-skills) — a 15-skill catalog across 8 research stages including manuscript drafting. Manuscript work is a separate opt-in plugin (`academic-writing-skills`) offering claim-evidence audit, banned-word, and reviewer-response tooling. MIT licensed. Note: its drafting stage only fires after a research gap clears a 3-gate check, so it's pipeline-coupled rather than a drop-in conclusion tool.

- **academic-research-skills-codex** by Imbad0202 (github.com/Imbad0202/academic-research-skills-codex) — a Codex-native port of the first repo, if you use Codex CLI. It marks unverifiable citations/statistics as unverified rather than inventing support.

**Assumptions / gaps I could not verify from the sources:**

None of these documents a skill file literally named or scoped to "conclusion." Whether each drafts a conclusion well as an isolated task (vs. only inside a full-paper run) isn't stated in the retrieved material — I'd have to read the individual SKILL.md files to confirm.

**My take, given your context (physics manuscripts + reports):** `imbad0202/academic-research-skills` is the strongest first candidate — most recently maintained, discipline-norm-aware, and its writing-quality checks map well to physics prose. `claude-scholar` is the better fit if you specifically want per-section drafting on demand rather than a full pipeline.

Two things would let me point you more precisely:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T12:01:00.260717Z",
  "stop_timestamp": "2026-07-04T12:01:02.143958Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01W14Zhmo6Mdc6oaxq88FKTp",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "question": "Do you want a full pipeline suite, or a lightweight single-purpose skill you invoke on demand?",
        "options": [
          "Full pipeline suite",
          "Lightweight single-purpose",
          "Either — just show best fit"
        ]
      },
      {
        "question": "Should I read the actual SKILL.md files to confirm conclusion-drafting support before you install?",
        "options": [
          "Yes, verify the SKILL.md contents",
          "No, the repo list is enough"
        ]
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
  "start_timestamp": "2026-07-04T12:01:02.158700Z",
  "stop_timestamp": "2026-07-04T12:01:02.158705Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01W14Zhmo6Mdc6oaxq88FKTp",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\"questions\":[{\"question\":\"Do you want a full pipeline suite, or a lightweight single-purpose skill you invoke on demand?\",\"options\":[\"Full pipeline suite\",\"Lightweight single-purpose\",\"Either — just show best fit\"]},{\"question\":\"Should I read the actual SKILL.md files to confirm conclusion-drafting support before you install?\",\"options\":[\"Yes, verify the SKILL.md contents\",\"No, the repo list is enough\"]}]}",
      "uuid": "b6a0189e-c546-4061-950c-c0370ebb1895"
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

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2d00-7ae8-71a9-b40c-9f8b307fb121",
  "updated_at": "2026-07-04T12:01:02.204530Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f2d00-7ae8-7816-82aa-985a3e4a458c"
}
```

</details>
