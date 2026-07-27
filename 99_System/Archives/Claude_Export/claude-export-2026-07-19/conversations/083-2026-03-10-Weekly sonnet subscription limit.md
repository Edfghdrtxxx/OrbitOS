# Weekly sonnet subscription limit

## Export metadata (verbatim)

```json
{
  "uuid": "828be44d-a9a1-46c9-865a-5a7dc47e2f39",
  "name": "Weekly sonnet subscription limit",
  "summary": "**Conversation Overview**\n\nThe person asked about Claude subscription plan features, specifically whether the weekly Sonnet usage feature available on their current Max x20 plan would still be present if they downgraded to a Max x5 plan the following month. Claude confirmed that both Max tiers share the same dual-limit structure (a rolling usage window plus a weekly reset), and that the weekly Sonnet usage feature exists on both plans. Claude provided a comparison table showing that Max x5 offers roughly half the weekly Sonnet capacity of Max x20, and noted that Max x5 is generally suitable for part-time development use cases.",
  "created_at": "2026-03-10T03:38:44.273737Z",
  "updated_at": "2026-03-10T03:39:59.179241Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-10T03:38:46.553616Z

Now I have weekly sonnet usage because my subscription is max x20.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd5d3-5de6-7135-8d10-2e50e5bc7979",
  "updated_at": "2026-03-10T03:38:46.553616Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-10T03:38:47.805577Z

 

<details>
<summary>Thinking (verbatim)</summary>

The

</details>



<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd5d3-5de6-7e61-a8b9-1b4168324fba",
  "updated_at": "2026-03-10T03:38:47.805577Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd5d3-5de6-7135-8d10-2e50e5bc7979"
}
```

</details>

### 3. human — 2026-03-10T03:39:40.626859Z

Now I have weekly sonnet usage because my subscription is max x20.
I want to know that if next month I use a max 5x subscription, will this  feature still exist?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd5d4-33bf-7d8f-9e36-c77dd1fbff30",
  "updated_at": "2026-03-10T03:39:40.626859Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 4. assistant — 2026-03-10T03:39:59.179241Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about whether the "weekly Sonnet usage" feature will still exist if they downgrade from Max x20 to Max x5 subscription. Let me check the product knowledge skill for accurate info.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T03:39:42.835479Z",
  "stop_timestamp": "2026-03-10T03:39:43.516802Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CJSWoEs4rMuxJbMapmNGPP",
  "name": "view",
  "input": {
    "description": "Check product self-knowledge skill for subscription details",
    "path": "/mnt/skills/public/product-self-knowledge/SKILL.md"
  },
  "message": "Check product self-knowledge skill for subscription details",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check product self-knowledge skill for subscription details"
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
  "tool_use_id": "toolu_01CJSWoEs4rMuxJbMapmNGPP",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: product-self-knowledge\n     3\tdescription: \"Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Claude Code (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Claude API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Claude.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Claude capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong.\"\n     4\t---\n     5\t\n     6\t# Anthropic Product Knowledge\n     7\t\n     8\t## Core Principles\n     9\t\n    10\t1. **Accuracy over guessing** - Check official docs when uncertain\n    11\t2. **Distinguish products** - Claude.ai, Claude Code, and Claude API are separate products\n    12\t3. **Source everything** - Always include official documentation URLs\n    13\t4. **Right resource first** - Use the correct docs for each product (see routing below)\n    14\t\n    15\t---\n    16\t\n    17\t## Question Routing\n    18\t\n    19\t### Claude API or Claude Code questions?\n    20\t\n    21\t→ **Check the docs maps first**, then navigate to specific pages:\n    22\t\n    23\t- **Claude API & General:** https://docs.claude.com/en/docs_site_map.md\n    24\t- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    25\t\n    26\t### Claude.ai questions?\n    27\t\n    28\t→ **Browse the support page:**\n    29\t\n    30\t- **Claude.ai Help Center:** https://support.claude.com\n    31\t\n    32\t---\n    33\t\n    34\t## Response Workflow\n    35\t\n    36\t1. **Identify the product** - API, Claude Code, or Claude.ai?\n    37\t2. **Use the right resource** - Docs maps for API/Code, support page for Claude.ai\n    38\t3. **Verify details** - Navigate to specific documentation pages\n    39\t4. **Provide answer** - Include source link and specify which product\n    40\t5. **If uncertain** - Direct user to relevant docs: \"For the most current information, see [URL]\"\n    41\t\n    42\t---\n    43\t\n    44\t## Quick Reference\n    45\t\n    46\t**Claude API:**\n    47\t\n    48\t- Documentation: https://docs.claude.com/en/api/overview\n    49\t- Docs Map: https://docs.claude.com/en/docs_site_map.md\n    50\t\n    51\t**Claude Code:**\n    52\t\n    53\t- Documentation: https://docs.claude.com/en/docs/claude-code/overview\n    54\t- Docs Map: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    55\t- npm Package: https://www.npmjs.com/package/@anthropic-ai/claude-code\n    56\t\n    57\t**Claude.ai:**\n    58\t\n    59\t- Support Center: https://support.claude.com\n    60\t- Getting Help: https://support.claude.com/en/articles/9015913-how-to-get-support\n    61\t\n    62\t**Other:**\n    63\t\n    64\t- Product News: https://www.anthropic.com/news\n    65\t- Enterprise Sales: https://www.anthropic.com/contact-sales\n    66\t",
      "uuid": "9dfef620-7cc4-49f3-b1bd-e2c9de73ad0a"
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
<summary>Thinking (verbatim)</summary>

I need to check the support page for Claude.ai to find details about Max plan tiers and their features.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T03:39:49.164923Z",
  "stop_timestamp": "2026-03-10T03:39:49.602968Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KsV3pvKGdMzp8PgsJ93AZg",
  "name": "web_fetch",
  "input": {
    "url": "https://support.claude.com/en/articles/10612931-claude-max-plan"
  },
  "message": "Fetching: https://support.claude.com/en/articles/10612931-claude-max-plan",
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
  "tool_use_id": "toolu_01KsV3pvKGdMzp8PgsJ93AZg",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "118b30a6-9563-40f9-9347-cb942b9b78ea"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://support.claude.com/en/articles/10612931-claude-max-plan",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://support.claude.com/en/articles/10612931-claude-max-plan",
      "subtitles": null,
      "url": "https://support.claude.com/en/articles/10612931-claude-max-plan",
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
  "start_timestamp": "2026-03-10T03:39:51.022883Z",
  "stop_timestamp": "2026-03-10T03:39:51.313043Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KzKMCnEoUXarfTVMdYd6va",
  "name": "web_search",
  "input": {
    "query": "Claude Max plan 5x 20x weekly Sonnet usage limits"
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
  "tool_use_id": "toolu_01KzKMCnEoUXarfTVMdYd6va",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "What is the Max plan? | Claude Help Center",
      "url": "https://support.claude.com/en/articles/11049741-what-is-the-max-plan",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Max plans also have two weekly usage limits: one that applies across all models and another for Sonnet models only. Both limits reset seven days after your session starts. In addition, to manage capacity and ensure fair access to all users, ...\n\nMore usage capacity: Get 5x or 20x more usage than the Pro plan, depending on your selected tier. No more interruptions: Stay in flow when it matters most with higher usage limits that allow for deeper, more extensive work with Claude. Scale as needed: Choose the usage tier that matches your workflow, with the flexibility to adjust as your needs change. Priority access: Be among the first to experience new models, features, and products. Access to Claude Code: Use Claude Code for your terminal-based coding workflows with one unified subscription. Access to Cowork: Hand off complex, multi-step tasks to Claude in Claude Desktop. See this article for more information: Get started with Cowork. The Max plan is available in two tiers to match your usage needs: ... Note: These prices are for web subscriptions only. Mobile pricing may vary depending on your app platform.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/11049741-what-is-the-max-plan",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Usage Patterns and Limits by Plan | ClaudeLog",
      "url": "https://claudelog.com/faqs/claude-code-usage/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudelog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudelog.com",
        "site_name": "ClaudeLog"
      },
      "is_missing": false,
      "text": "Starting August 28, 2024, weekly ... interface, API, and Claude Code combined · Max 5x expectations: 140-280 hours of Sonnet and 15-35 hours of Opus per week ·...\n\nReset frequency: Your usage resets every 5 hours with 5x the Pro allocation. Starting August 28, 2024, weekly limits will provide 140-280 hours of Sonnet and generous Opus 4.5 allocation per week, supporting typical daily development across projects. Extensive limits: Community reports from r/ClaudeAI consistently show users never running out of allocation during normal development usage. This tier provides 20x the Pro allocation, which is substantial enough for teams, multiple concurrent projects, or extremely intensive development workflows. Opus access: You'll have sufficient Opus allocation for multiple parallel sessions, extensive architectural planning, and complex problem-solving throughout the day. This tier removes the strategic constraints of lower tiers and lets you use Opus freely when needed. Professional workflows: Designed to support intensive development without interruption.\n\nThis uses Opus 4.5 with clarifying questions upfront and editable plan.md files, then switches to Sonnet 4.5 for execution. With increased limits for Max users, it's more accessible for daily complex tasks. Parallel sessions: Max 20x provides enough allocation to support multiple concurrent projects, team development scenarios, or intensive research and development work. You can run several Claude Code instances simultaneously without worrying about depleting your allocation. Starting August 28, 2024, weekly usage limits will be introduced alongside existing 5-hour limits to address policy violations and ensure fair access: Weekly structure: Single weekly limit shared across all models and platforms that will reset every 7 days · Cross-platform sharing: Weekly limit applies to usage across web interface, API, and Claude Code combined · Max 5x expectations: 140-280 hours of Sonnet and 15-35 hours of Opus per week ·\n\nReset frequency: Your usage resets every 5 hours with 20x the Pro allocation. Starting August 28, 2024, weekly limits will be introduced that are generous enough to support normal development workflows without impact for most users. ... Run multiple autonomous coding agents simultaneously with Verdent's isolated Git worktrees. Each agent tackles different components while maintaining full context awareness, eliminating manual debugging bottlenecks and accelerating feature delivery. Discover Verdent AI (Free Trial) No Opus in Claude Code: Since Pro tier doesn't have Opus access within Claude Code, focus entirely on maximizing your Sonnet allocation in the terminal. While you can use Opus in the web interface, the terminal application is primarily limited to Sonnet for development work. Sonnet is incredibly capable for most development tasks. Sonnet primary: Use Sonnet for 100% of your development work including code writing, debugging, refactoring, and most architectural discussions.\n\nModel access: Limited to Claude Sonnet 4.5 within Claude Code for most practical development work. While Pro subscribers can access Opus in the web interface, Opus is not available in the terminal application. This is intentional as Opus consumes approximately 5x more allocation than Sonnet. Reset frequency: Your usage allocation resets every 5 hours with the exact countdown timestamp displayed in Claude Code. Starting August 28, 2024, weekly limits will be introduced that reset every 7 days to prevent abuse and ensure fair access for all users. Best for: Occasional coding assistance, light development work, learning to code, and personal projects where you don't need continuous all-day access. Sonnet usage: With Claude Max 5x, you rarely hit limits during all-day coding sessions when using Sonnet. This tier provides 5x the allocation of Pro, which is substantial for most professional development workflows.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudelog.com/faqs/claude-code-usage/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Extra usage for paid Claude plans | Claude Help Center",
      "url": "https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "When using Research mode, extra usage rates apply once you exceed your included Max 20X limits. Research sessions may consume tokens more quickly due to multiple searches and comprehensive analysis.\n\nThis article explains how to enable and use extra usage on your paid Claude plan (Pro, Max 5x, or Max 20x), allowing you to continue working with Claude after reaching your plan’s usage limits by switching to pay-as-you-go pricing. Extra usage allows individuals subscribed to paid Claude plans (Pro, Max 5x, and Max 20x) to continue using Claude seamlessly after reaching their included usage limits. Instead of being blocked when you hit your session limits, you can switch to consumption-based pricing at standard API rates and continue your work without interruption. Note: If you subscribed through one of the Claude mobile apps, you can only enable extra usage on the web version of Claude. You will need to add your payment method before enabling and purchasing extra usage on the web. When you reach your plan’s usage limit with extra usage enabled: You’ll see a notification that you’ve reached your session usage limit.\n\nWhen using Research mode, extra usage rates apply once you exceed your included Max 20X limits. Research sessions may consume tokens more quickly due to multiple searches and comprehensive analysis. Documents stored in project files count toward your context when used in conversations. Extra usage pricing applies to all tokens processed, including project content. Yes, you can disable extra usage at any time through Settings > Usage. Once disabled, you'll only have access to your plan's included usage. Your plan’s included usage limit will reset every five hours once you reach it. Extra usage doesn’t affect this reset timing. If you purchased your paid plan through one of the Claude mobile apps, extra usage is only available if you enable and purchase it on the Claude web app. You will not be able to set up extra usage on the mobile app. Yes, extra usage is now available for all paid Claude plans, including Pro, Max 5x, and Max 20x plans.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Max Plan Explained: Pricing, Limits & Features | IntuitionLabs",
      "url": "https://intuitionlabs.ai/articles/claude-max-plan-pricing-usage-limits",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "intuitionlabs.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=intuitionlabs.ai",
        "site_name": "IntuitionLabs"
      },
      "is_missing": false,
      "text": "Higher Usage Limits: Max 5x grants ... tests indicate this translates to roughly 225 messages per 5-hour window (Max 5x) or around 900 messages per 5 hours (Max 20x) before throttling ([33]). By comparison, the Pro plan was observed ...\n\nAnthropic’s Claude Max Plan (launched April 2025) is a high-usage subscription tier designed to meet the needs of power users of the Claude AI assistant. The Max plan offers two premium tiers – Max 5x ($100/month) and Max 20x ($200/month) – providing 5× or 20× the usage limits of the standard Pro subscription ([1]) ([2]). In addition to expanded usage (e.g. enabling hundreds of messages or multi-hour sessions before rate-limits), Max subscribers get priority access to new models and features (such as advanced reasoning models, Claude Code, and voice mode) ([3]) ([4]). These tiers are explicitly aimed at professionals and heavy users – “frequent users who work with Claude on a variety of tasks” or “daily users who collaborate often with Claude” ([5]) ([6]). Anthropic positions Max as the solution to the primary request of active Claude users: expanded access and deeper sessions ([7]) ([8]).\n\nPricing & Usage: Max 5x costs $100/month (5× Pro’s usage); Max 20x costs $200/month (20× Pro’s usage) ([1]) ([2]). These reset every ~5 hours (rolling window) rather than daily, allowing multiple intensive sessions per day ([9]). Features: Everything from Free/Pro tiers (multi-modal chat, Claude Code integration, Cowork file workflows, memory, etc.), plus higher output limits, early access to new Claude features (e.g. advanced models), and priority service during peak times ([3]) ([10]). Post-launch updates (May 2025) added full Claude Code, web search, and integrations to Max ([11]) ([12]). Target Audience: Individuals who use Claude extensively for work – e.g. knowledge workers, developers, writers, analysts – who need long conversations, document analysis, coding assistance, and minimal interruptions ([13]) ([14]). Anthropic explicitly notes Max is for those hitting usage limits on the Pro plan (users working “4–5 hours daily on complex tasks,” or frequent Cowork/file operations) ([\n\nHigher Usage Limits: Max 5x grants 5× the usage of the Pro plan; Max 20x grants 20× that of Pro ([1]) ([31]). Concretely, independent tests indicate this translates to roughly 225 messages per 5-hour window (Max 5x) or around 900 messages per 5 hours (Max 20x) before throttling ([33]). By comparison, the Pro plan was observed to hit limits around 40–45 messages in 5 hours ([33]). Critically, these allowances reset every ~5 hours, not daily ([9]) – allowing multiple intensive sessions each day. (If one exhausts the Max 20x quota in a short burst, one must wait a few hours for the next cycle ([19]).) In practical terms, this means very long conversations and data-processing threads can run without interruption far longer than on lower tiers. Priority Access to Models/Features: Both Max tiers include provide “priority access to our newest features and models” ([29]).\n\nFor many users, the calculus is about productivity gains. If, for example, paying +$80/month (from $20 to $100) means no lost productivity for days of work, it could be worth it. Reviewers probing real tasks concluded that heavy users saw Pro throttling at ~3–4 hours, while Max 5x covered a full 6–8 hours with one model ([15]). In a money-value analysis, if those hours translate to significant billable work or deadlines, the cost is rationalized by saved time. It is important to note Anthropic’s billing model: as of launch, Max plans are month-to-month only ([48]). There is no discount for annual commitment (unlike the Pro $17 rate). Upgrades/downgrades are prorated. This flexibility may appeal to businesses or consultants who want agility, but means less “buying power” for individual consumers. Also, Anthropic’s site cautions that mobile app pricing can differ by platform (signaling that paying via app stores might slightly alter cost) ([54]).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://intuitionlabs.ai/articles/claude-max-plan-pricing-usage-limits",
        "search_provider": "anthropic",
        "age": "February 3, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Mastering Claude’s Max Plan in 2025: Your Guide to Smashing Usage Limits and Supercharging Productivity | by Lalatendu Keshari Swain | Medium",
      "url": "https://lalatenduswain.medium.com/mastering-claudes-max-plan-in-2025-your-guide-to-smashing-usage-limits-and-supercharging-1fada115674c",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Sessions reset every five hours on a rolling window, and while message counts vary (think 225+ for 5x tier, 900+ for 20x with short prompts), factors like token-heavy attachments or compute-intensive models (hello, Opus 4) can accelerate burnout.\n\nClaude’s Max Plan isn’t just an upgrade — it’s a lifeline for heavy hitters. Building on Pro’s foundation, it offers exponentially more breathing room, but usage remains a nuanced dance. Sessions reset every five hours on a rolling window, and while message counts vary (think 225+ for 5x tier, 900+ for 20x with short prompts), factors like token-heavy attachments or compute-intensive models (hello, Opus 4) can accelerate burnout. ... Context Window: Still capped at 200K tokens across all plans — plenty for deep dives, but a nudge to keep chats laser-focused. Model Mix: Balance Sonnet 4.5 (lighter, faster) for routine tasks and Opus 4 for heavy lifting to preserve quotas. New Weekly Caps: Introduced mid-year, these add a safety net (or net, depending on your view). Pro users get ~40–80 hours of Claude Code; Max scales up to 140–280 hours for Sonnet and 15–35 for Opus.\n\nThe 5x tier? Solid for sporadic sprints. But 20x? It’s priority queuing during Sonnet 4.5 rollouts and buffer for Claude Code’s agentic evolutions — think 250+ monthly hours without sweat. For daily drivers, it’s the difference between “good enough” and “game-changing.” · In 2025, Claude’s Max Plan isn’t about escaping limits — it’s about redefining them. Armed with this roadmap, slash commands, and turbocharged tips, you’ll not only evade caps but amplify impact across content, code, and research. Merits? Skyrocketed output, beta perks, and ROI that pays for itself in hours saved. Demerits? Steeper entry ($100–200/month) and the learning curve for new caps — plus, over-reliance risks creative ruts. Test Pro waters if unsure, but for the committed? Dive into Max. Your future self (and projects) will thank you. What’s your top hack?\n\nCross-reference with the Anthropic Console Dashboard for API-level insights, including weekly projections. If you’re clocking 32% of limits in 2–3 hours of coding, it’s time for the 20x tier. Claude thrives on structure, not streams of consciousness. Launch topic-specific chats to sidestep context bloat — unlike continuous LLMs, it’s optimized for focused bursts. Batch queries (e.g., “Outline, draft, and refine this report in one go”) to minimize round-trips. Big files are quota killers. Chunk docs into 50K-token bites, upload to Projects for persistent access, and purge fluff quarterly. Bonus: Use Claude’s summarization to distill uploads into pasteable nuggets for new threads. Unify limits across web, Code, and Research — treat them as one ecosystem. For Claude Code, toggle to “Default” mode (50% Opus, rest Sonnet) when limits loom.\n\nEmbrace Lighter Models First: Default to Sonnet 4.5 for 80% of tasks — it’s 2–3x less thirsty than Opus, saving premium slots for genius-level work. Break It Down, Build It Up: Decompose mega-tasks (e.g., app dev) into micro-sessions: Plan → Code chunk → Test → Iterate. Avoid all-day marathons. Leverage Artifacts for Output: Generate code/docs as shareable artifacts — Claude handles rendering without extra tokens. Trigger ‘Think’ Mode Sparingly: In Code, cue “think step-by-step” for complex logic, granting extra compute without full-model escalation. Batch and Buffer: Queue non-urgent prompts during low-usage windows; use Projects as a “token bank” for reused intel. Attachment Audit Ritual: Pre-upload, ask Claude: “Estimate tokens for this file?” Trim visuals/text ruthlessly. Weekly Reset Rituals: Sunday audits via /usage — reallocate from overused features like Research to Code.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://lalatenduswain.medium.com/mastering-claudes-max-plan-in-2025-your-guide-to-smashing-usage-limits-and-supercharging-1fada115674c",
        "search_provider": "anthropic",
        "age": "October 9, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Max plan | Claude",
      "url": "https://claude.com/pricing/max",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Great for frequent users who work with Claude on a variety of tasks, with 5x more usage per session than Pro. ... Perfect for daily users who collaborate often with Claude for most tasks, with 20x more usage per session than Pro.\n\nGreat for frequent users who work with Claude on a variety of tasks, with 5x more usage per session than Pro. ... Perfect for daily users who collaborate often with Claude for most tasks, with 20x more usage per session than Pro. ... Extra usage limits apply. Prices shown don't include applicable tax. ... Thank you! Your submission has been received! Oops! Something went wrong while submitting the form. ... Hi Claude! Could you help me develop a unique voice for an audience? If you need more information from me, ask me 1-2 key questions right away. If you think I should upload any documents that would help you do a better job, let me know. You can use the tools you have access to— like Google Drive, web search, etc.—if they’ll help you better accomplish this task. Do not use analysis tool. Please keep your responses friendly, brief and conversational.\n\nThe Max plan combines Claude desktop and mobile apps and Claude Code in one subscription, with up to 20x more usage per session than Pro. That’s a lot of deep work potential. ... Enable every team to spark new ideas, achieve more, and collaborate better. Handle sophisticated, multi-dimensional challenges—the kind that require a true thinking partner. Launch features, complete analyses, publish content, and more with Claude. Claude shows its thinking, seeks clarification, and collaborates thoughtfully. ... Create a scatter plot matrix showing business performance vs opportunity analysis. Plot data points by Current Performance Score (x-axis, 0-100) vs Growth Opportunity Score (y-axis, 0-100). Include quadrant divisions with labels: \"Optimize\" (top-right), \"Develop\" (top-left), \"Maintain\" (bottom-right), \"Divest\" (bottom-left). Color code by business category and size points by revenue/impact potential.\n\nWith up to 20x more usage per session, you can finally pursue every thread, explore every possibility, and complete ambitious projects. Run multiple [[research|Research|Build research reports in minutes, complete with easy-to-check citations.]] sessions daily. Build complex [[artifacts|Artifacts|Turn ideas into shareable creations. Build tools, visualizations, and experiences by simply describing what you need.]] iteratively. [[Create files, analyze data|Code execution and file creation|Claude executes code to quickly analyze data and create ready-to-use documents, spreadsheets, slides, PDFs, and more.]] and pull context from all your integrated [[tools|Tools|Connect Claude to your favorite tools like JIRA, Zapier, and Intercom, or build your own.]] freely. New features and models often launch on Max first, before they expand to other plans. ... I have tons of messy data and need to find meaningful patterns.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claude.com/pricing/max",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What does “more usage” in Claude 4.5 Limits actually mean: Explained for Opus, Sonnet & Haiku | by Gunratna Borkar | Medium",
      "url": "https://medium.com/@Gunratna/what-does-more-usage-in-claude-4-5-limits-actually-mean-explained-for-opus-sonnet-haiku-720535b70d55",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "The catch: One Opus conversation can consume as much quota as 10+ Sonnet conversations. Use it strategically, not casually. ... Not all messages are equal. Here’s what secretly multiplies your usage: Extended Thinking → Claude generates ...\n\nThe catch: One Opus conversation can consume as much quota as 10+ Sonnet conversations. Use it strategically, not casually. ... Not all messages are equal. Here’s what secretly multiplies your usage: Extended Thinking → Claude generates invisible reasoning before responding. You see 200 words but pay for 1,200. (5–10x cost) Long Conversations → Each message re-processes the entire history. Your 20th message costs 20x more than your first. (20–30x cost) File Uploads → Claude re-reads ALL files with EVERY message. One PDF + 10 messages = reading that PDF 10 times. (5–10x cost) Code Analysis → Reading entire codebase + deep analysis + thinking mode. One debugging session = 20+ simple Q&As. (10–20x cost) Multiple Iterations → “Try again” re-reads everything and generates from scratch. Five iterations = 5x the base cost. (5x per iteration) Bottom line: A complex task can consume 20x more quota than a simple question — even though both look like “one message” to you.\n\nThen suddenly: “You’ve reached your usage limit for Claude Sonnet. Please try again in X hours.” ... If you’re paying $20, $100, or even $200/month for Claude Pro or Max, you’ve probably noticed your allowance disappearing faster than expected. Your “Max” plan feels like a trial. By Wednesday, you’re already rationed. And the explanations from Anthropic don’t quite match your real experience. Here’s what’s actually happening: Claude 4.5 isn’t measured in simple message counts anymore — it’s measured by how hard Claude works. Some conversations use 10x more of your allowance than others, even if they look similar to you. This guide breaks down the real limits, explains why some tasks consume your quota faster, and provides practical strategies that work to get 3–5 times more value from your subscription. And once you understand how this actually works, you can get 3–5x more value from the same plan.\n\nUse opus only when needed for complex questions; else, sonnet will solve it most of the time if you use correct prompts. Keep opus for the last one or 2 days of your weekly limit and use it there based on the weekly limits left. Want detailed strategies to actually master and maximize your Claude 5 hours and weekly windows? Head on over to this blog: https://medium.com/@Gunratna/7-simple-tricks-to-get-3x-more-from-your-claude-subscription-no-coding-required-99ff806867fe ... Reality: Good for testing Claude. Expect frequent limits. Not viable for regular work. Best for: Trying before subscribing, occasional casual use ... Limitations: You’ll hit walls during focused work sessions. Not enough for full-time professional use. ... Limitations: Opus quota still tight for intensive research/design work. Weekly caps noticeable by midweek if you’re a power user.\n\nMedium Effort: Balanced. Matches Sonnet 4.5’s peak performance while using 76% fewer output tokens than High. Low Effort: Fast, minimal thinking. Good for simple tasks or high-volume automation. Pro tip: Don’t default to High Effort. Start with Medium. Only escalate to High for problems that fail on Medium or require novel mathematical reasoning. When you use Claude Code (the terminal agent), you’re not just sending prompts. You’re triggering an autonomous loop: Plan: Claude analyzes your request (inference cycle #1) Explore: Claude runs ls, grep, find to map your codebase (cycles #2-5) Read: Claude loads relevant files into context (cycle #6) Edit: Claude modifies code using text editor tool (cycle #7) Verify: Claude might run tests to confirm (cycle #8) You see one “prompt.” Claude executes 8+ inference cycles. Each one consumes tokens.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@Gunratna/what-does-more-usage-in-claude-4-5-limits-actually-mean-explained-for-opus-sonnet-haiku-720535b70d55",
        "search_provider": "anthropic",
        "age": "November 25, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Using Claude Code with your Pro or Max plan | Claude Help Center",
      "url": "https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Enable extra usage to continue using Claude with your Max plan after hitting the included usage limit. You will have the flexibility to switch to pay-as-you-go usage with a Claude Console account for intensive coding sprints.\n\nIf you're on the Max 5x plan, consider upgrading to the Max 20x plan if you consistently hit limits. Enable extra usage to continue using Claude with your Max plan after hitting the included usage limit. You will have the flexibility to switch to pay-as-you-go usage with a Claude Console account for intensive coding sprints. Wait until your usage limits reset. For more details on efficient usage, refer to our Usage limit best practices. It's important to recognize these are separate systems: Claude Code: Presents options for continuing usage through API credits. Claude Console / Claude API: Contains optional auto-reload settings for API credit management where your terminal is located. If you want to use API credits through Claude Code: Usage will be billed at standard API rates (distinct from Pro/Max Plan pricing). If auto-reload is enabled in your Console account, additional credits will be automatically added when your balance runs low.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Weekly Limit vs 5-Hour Lockout: What You Need to Know - Usagebar Blog",
      "url": "https://usagebar.com/blog/claude-code-weekly-limit-vs-5-hour-lockout",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "usagebar.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=usagebar.com",
        "site_name": "Usagebar"
      },
      "is_missing": false,
      "text": "Even intensive multi-hour sessions rarely trigger limits. Max 5x (140-280 hours/week): Suitable for part-time development or teams sharing a single account. Daily multi-hour sessions might approach limits toward week&#x27;s end.\n\nThe good news: Anthropic expects fewer than 2% of users to hit the weekly limit using Sonnet 4.5 with normal usage patterns. However, intensive development sessions—especially with Claude Code generating complex code—can burn through weekly allocation faster. Max 20x users get the most generous limits (240-480 hours of Sonnet 4 per week), while Pro users get 40-80 hours. If you're hitting weekly limits consistently, upgrading from Pro to Max 5x or Max 20x typically provides 3–6x more capacity. The real problem isn't the limits themselves—it's the surprise. You're in the middle of debugging a production issue or wrapping up a PR when Claude Code suddenly locks you out for five hours. No warning. No grace period. Just a cold \"usage limit reached\" message. This happens because most developers don't monitor their usage. You can check via the /usage command in Claude Code or by navigating to claude.ai/settings/usage, but constantly checking manually interrupts your workflow.\n\nMax 20x (240-480 hours/week of Sonnet 4): Optimized for full-time Claude Code development. Even intensive multi-hour sessions rarely trigger limits. Max 5x (140-280 hours/week): Suitable for part-time development or teams sharing a single account. Daily multi-hour sessions might approach limits toward week's end. Pro (40-80 hours/week): Fine for casual use, but heavy Claude Code users will hit weekly limits. If you're coding for 2+ hours daily, Max 5x is probably necessary. If you consistently hit the 5-hour limit and exhaust your weekly allocation within days, upgrading to Max likely makes financial sense. But before upgrading, use Usagebar to understand your actual usage pattern. You might discover you can optimize your workflow (batching tasks, using cached projects) to stay within Pro limits. 5-Hour Limit: Rolling window reset every 5 hours from first use.\n\nClaude Code operates under a dual-limit system: a 5-hour session limit that resets every five hours, plus a weekly cap that prevents account abuse. Understanding the difference is critical—hitting either limit locks you out of Claude Code until the window resets. Pro plans allow approximately 45 messages per 5-hour window, while Max 5x subscribers get 225 messages and Max 20x users get 900. The weekly limit is shared across all Claude and Claude Code usage, resetting every 7 days. Usagebar tracks both windows in your macOS menu bar, eliminating the frustration of a surprise lockout mid-task. 5-hour limits reset independently; weekly limits reset every 7 days · Pro: ~45 messages per 5 hours; Max 5x: ~225; Max 20x: ~900 · Fewer than 2% of users hit weekly limits with normal usage patterns · The 5-hour session limit is a rolling window that begins when you start using Claude Code.\n\nWeekly Limit: Resets every 7 calendar days. Shared across Claude and Claude Code. Varies by plan tier (Pro: 40-80 hours; Max 5x: 140-280 hours; Max 20x: 240-480 hours). The 5-hour limit is your immediate concern during a session; the weekly limit is the longer-term boundary. Both require monitoring to avoid surprise lockouts. Stop checking /usage commands manually. Get Usagebar to see your remaining capacity and exact reset times in your menu bar. With smart 50%, 75%, and 90% alerts, you'll know when to wrap up a task or batch your next work session. Flexible pricing (pay what you want, free for students) means you can try it risk-free. Stay in flow. Avoid the 5-hour lockout. Know exactly when your limits reset. Using Claude Code with your Pro or Max plan – Claude Help Center ... Never hit your usage limits unexpectedly.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://usagebar.com/blog/claude-code-weekly-limit-vs-5-hour-lockout",
        "search_provider": "anthropic",
        "age": "January 29, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Usage Limits and Subscription Plans Explained (Aug 2025) - Geeky Gadgets",
      "url": "https://www.geeky-gadgets.com/claude-code-usage-limits-pricing-plans-guide-sept-2025/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "geeky-gadgets.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=geeky-gadgets.com",
        "site_name": "Geeky Gadgets"
      },
      "is_missing": false,
      "text": "Max 20x ($200/month): For power users. Supports ~900 messages or 200–800 prompts every five hours, ~240–480 hours of Sonnet 4 and 24–40 hours of Opus 4 weekly. Includes full access to both models.\n\nMax 5x ($100/month): For moderate usage or larger repositories. Access to Sonnet 4 and Opus 4. ~225 messages or 50–200 prompts every five hours, ~140–280 hours of Sonnet 4 and 15–35 hours of Opus 4 weekly. Max 20x ($200/month): For power users. Supports ~900 messages or 200–800 prompts every five hours, ~240–480 hours of Sonnet 4 and 24–40 hours of Opus 4 weekly. Includes full access to both models. See details at Claude’s Max Plan Usage. It’s also important to understand that Anthropic may apply warnings and discretionary caps beyond the five-hour resets. Users typically receive warning messages before hitting their limit, giving them time to adjust workflows or save progress. In addition to the rolling five-hour windows, weekly and monthly usage caps can be applied at Anthropic’s discretion to balance system-wide demand. This means heavy users may occasionally encounter limits sooner than expected, even if they haven’t maxed out their short-term allocation.\n\nMax 5x: Switches from Opus 4 → Sonnet 4 at 20% usage. Max 20x: Switches from Opus 4 → Sonnet 4 at 50% usage. Manual control is possible with the /model command, but remember Opus consumes capacity much faster. Download and install Claude Code from the official documentation page. Authenticate with your Claude Pro or Max credentials during setup. ... Use /logout and /login to reset credentials. Run claude update for the latest version. Restart your terminal fully. API credits are optional. You must explicitly consent before being billed. To stay within your plan: Decline API credit prompts. Monitor your remaining usage with /status. Log in only with Pro or Max credentials to avoid being prompted for Console credits. ... Billed at standard API rates (separate from plan pricing). Auto-reload is managed in the Console, not Claude Code. Upgrade: Pro users can move to Max for higher limits.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.geeky-gadgets.com/claude-code-usage-limits-pricing-plans-guide-sept-2025/",
        "search_provider": "anthropic",
        "age": "September 4, 2025"
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

The key question is: does the weekly Sonnet usage limit feature exist on Max 5x? Yes, it does. Both Max tiers have the same dual-limit structure (5-hour rolling + weekly reset). The weekly Sonnet limit is a feature of both Max plans, just at different capacities.

</details>

Yes, the weekly Sonnet usage feature **does exist on Max 5x** — both Max tiers share the same dual-limit structure. The difference is just the capacity:

Max plans have two weekly usage limits: one that applies across all models, and another for Sonnet models only. Both limits reset seven days after your session starts.

Here's how the Sonnet weekly limits compare between the two tiers:

| Plan | Weekly Sonnet hours (est.) |
|---|---|
| **Max 5x** ($100/mo) | ~140–280 hours |
| **Max 20x** ($200/mo) | ~240–480 hours |

So if you downgrade to Max 5x next month, you'll still have the weekly Sonnet usage feature — just with roughly half the capacity. For most users, Max 5x is suitable for part-time development, though daily multi-hour sessions might approach limits toward the week's end.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd5d4-33bf-7c58-8c7e-ad4d618cd77b",
  "updated_at": "2026-03-10T03:39:59.179241Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd5d4-33bf-7d8f-9e36-c77dd1fbff30"
}
```

</details>
