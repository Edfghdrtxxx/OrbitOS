# Claude subscription double usage promotion

## Export metadata (verbatim)

```json
{
  "uuid": "76112d34-ce6d-4702-8309-8fa99629d3a6",
  "name": "Claude subscription double usage promotion",
  "summary": "**Conversation Overview**\n\nThe person asked whether Claude's subscription currently includes a double usage promotion and, if so, until when it lasts. Claude provided a structured response clarifying the status of two distinct promotions. The first was a temporary double-usage promotion for Free, Pro, Max, and Team plans that ran from March 13–27, 2026 (off-peak hours only on weekdays), which has since expired. The second was a permanent doubling of Claude Code's 5-hour rate limits for Pro, Max, Team, and Enterprise plans, effective May 6, 2026, tied to a compute agreement with SpaceX's Colossus 1 data center. Claude clarified that the permanent change applies specifically to Claude Code and not to general claude.ai chat usage limits, and presented the information in a summary table format for clarity.",
  "created_at": "2026-06-14T08:10:51.749972Z",
  "updated_at": "2026-06-14T08:11:23.012851Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-06-14T08:10:52.166464Z

Does the subscription of Claude have double usage now? If it has, till when?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ec52f-0207-7445-aeab-a0ec265a0c06",
  "updated_at": "2026-06-14T08:10:52.166464Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-06-14T08:11:23.012851Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-14T08:10:54.098736Z",
  "stop_timestamp": "2026-06-14T08:10:54.543938Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016iJiCKds4i6yiY4kXGGoa9",
  "name": "view",
  "input": {
    "description": "Checking product self-knowledge skill",
    "path": "/mnt/skills/public/product-self-knowledge/SKILL.md"
  },
  "message": "Checking product self-knowledge skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Checking product self-knowledge skill"
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
  "tool_use_id": "toolu_016iJiCKds4i6yiY4kXGGoa9",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: product-self-knowledge\n     3\tdescription: \"Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Claude Code (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Claude API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Claude.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Claude capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong.\"\n     4\t---\n     5\t\n     6\t# Anthropic Product Knowledge\n     7\t\n     8\t## Core Principles\n     9\t\n    10\t1. **Accuracy over guessing** - Check official docs when uncertain\n    11\t2. **Distinguish products** - Claude.ai, Claude Code, and Claude API are separate products\n    12\t3. **Source everything** - Always include official documentation URLs\n    13\t4. **Right resource first** - Use the correct docs for each product (see routing below)\n    14\t\n    15\t---\n    16\t\n    17\t## Question Routing\n    18\t\n    19\t### Claude API or Claude Code questions?\n    20\t\n    21\t→ **Check the docs maps first**, then navigate to specific pages:\n    22\t\n    23\t- **Claude API & General:** https://docs.claude.com/en/docs_site_map.md\n    24\t- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    25\t\n    26\t### Claude.ai questions?\n    27\t\n    28\t→ **Browse the support page:**\n    29\t\n    30\t- **Claude.ai Help Center:** https://support.claude.com\n    31\t\n    32\t---\n    33\t\n    34\t## Response Workflow\n    35\t\n    36\t1. **Identify the product** - API, Claude Code, or Claude.ai?\n    37\t2. **Use the right resource** - Docs maps for API/Code, support page for Claude.ai\n    38\t3. **Verify details** - Navigate to specific documentation pages\n    39\t4. **Provide answer** - Include source link and specify which product\n    40\t5. **If uncertain** - Direct user to relevant docs: \"For the most current information, see [URL]\"\n    41\t\n    42\t---\n    43\t\n    44\t## Quick Reference\n    45\t\n    46\t**Claude API:**\n    47\t\n    48\t- Documentation: https://docs.claude.com/en/api/overview\n    49\t- Docs Map: https://docs.claude.com/en/docs_site_map.md\n    50\t\n    51\t**Claude Code:**\n    52\t\n    53\t- Documentation: https://docs.claude.com/en/docs/claude-code/overview\n    54\t- Docs Map: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    55\t- npm Package: https://www.npmjs.com/package/@anthropic-ai/claude-code\n    56\t\n    57\t**Claude.ai:**\n    58\t\n    59\t- Support Center: https://support.claude.com\n    60\t- Getting Help: https://support.claude.com/en/articles/9015913-how-to-get-support\n    61\t\n    62\t**Other:**\n    63\t\n    64\t- Product News: https://www.anthropic.com/news\n    65\t- Enterprise Sales: https://www.anthropic.com/contact-sales\n    66\t",
      "uuid": "74794a86-6463-49c6-9a8e-cac8e2c08463"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "md"
  },
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
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-14T08:11:03.685204Z",
  "stop_timestamp": "2026-06-14T08:11:03.926652Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01YQSCNUWtUXqFspGRVm5g8q",
  "name": "web_fetch",
  "input": {
    "url": "https://support.claude.com",
    "html_extraction_method": "markdown"
  },
  "message": "Fetching: https://support.claude.com",
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
  "tool_use_id": "toolu_01YQSCNUWtUXqFspGRVm5g8q",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL was not in any prior search or fetch result. web_search for it first, then fetch the result link.\"}",
      "uuid": "78fddd0d-40c7-4ef4-89ce-d28db00f4de5"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://support.claude.com",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://support.claude.com",
      "subtitles": null,
      "url": "https://support.claude.com",
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
  "start_timestamp": "2026-06-14T08:11:06.157803Z",
  "stop_timestamp": "2026-06-14T08:11:06.281741Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VNfdiQfQqoctKXaSBMopTH",
  "name": "web_search",
  "input": {
    "query": "Claude Pro subscription double usage limits 2026"
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
  "tool_use_id": "toolu_01VNfdiQfQqoctKXaSBMopTH",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Anthropic Offering Double Limits for Claude Usage on Free & Pro Plans—With a Catch",
      "url": "https://www.androidheadlines.com/2026/03/claude-double-usage-limits-march-2026-promotion.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "androidheadlines.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=androidheadlines.com",
        "site_name": "Android Headlines"
      },
      "is_missing": false,
      "text": "As a gesture of appreciation for its rapidly growing community, Anthropic announced that it is doubling Claude’s usage limits from March 13 through March 27, 2026. While the extra capacity is a welcome relief, there is a specific schedule ...\n\nAs a gesture of appreciation for its rapidly growing community, Anthropic announced that it is doubling Claude’s usage limits from March 13 through March 27, 2026. While the extra capacity is a welcome relief, there is a specific schedule to keep in mind. The doubled limits apply only during “off-peak” hours. On weekdays, this means any time outside the window of 8 AM to 2 PM Eastern Time (5 AM to 11 AM Pacific Time). If you are a weekend user, you are in luck: the doubled limits apply 24/7 on Saturdays and Sundays. According to Anthropic, this promotion is entirely automatic. You do not need to toggle any settings or enter a code. \n\nIf you are using Claude through the web, mobile app, or desktop version during those off-peak hours, the system simply grants you twice the usual number of messages within the standard rolling five-hour window. A small thank you to everyone using Claude: We’re doubling usage outside our peak hours for the next two weeks.\n\n/ Tech News / Artificial Intelligence News / Anthropic Offering Double Limits for Claude Usage on Free & Pro Plans—With a Catch ... From March 13 to March 27, 2026, Anthropic will double the usage limits for Claude during off-peak hours. This applies for Free, Pro, Max, and Team plans -Enterprise users are not included. You can get extra capacity all weekend and on weekdays from 8 AM to 2 PM ET. This move follows a surge in popularity linked to recent shifts in the AI ​​landscape and the company’s ethical positioning. \n\nIf you have spent any time using Claude lately, you probably know the feeling of hitting a usage ceiling just as you are getting into a rhythm. Anthropic’s AI chatbot is famous for its intelligence, but it is equally well-known for its notoriou",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.androidheadlines.com/2026/03/claude-double-usage-limits-march-2026-promotion.html",
        "search_provider": "anthropic",
        "age": "March 16, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code is getting higher usage limits, doubled for most users",
      "url": "https://9to5google.com/2026/05/06/claude-code-is-getting-higher-usage-limits-doubled-for-most-users/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "9to5google.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=9to5google.com",
        "site_name": "9to5Google"
      },
      "is_missing": false,
      "text": "Starting today, Claude is doubling Code’s five-hour limits for Pro, Max, Team, and Enterprise (seat-based) plans. The only plan not getting an upgrade is the free one. Claude Code will also remove “peak hours” limitations for Pro and Max ...\n\nBen Schoon | May 6 2026 - 10:10 am PT · 1 Comment · Anthropic today announced that Claude is getting a big boost to usage limits, including doubling Code limits and stripping back on peak hour reductions. Starting today, Claude is doubling Code’s five-hour limits for Pro, Max, Team, and Enterprise (seat-based) plans. The only plan not getting an upgrade is the free one. Claude Code will also remove “peak hours” limitations for Pro and Max accounts. Beyond this, Claude API limits are being drastically increased. Tier 1, for example, is seeing a 1500% increase in maximum input tokens per minute, and a 900% increase to maximum output tokens per minute, with major boosts for other tiers as well. \n\nIn other words, the Claude API just got a whole lot more powerful. This comes as a result of Anthropic striking a deal with SpaceX for additional compute capacity.\n\nStarting today, Claude is doubling Code’s five-hour limits for Pro, Max, Team, and Enterprise (seat-based) plans. The only plan not getting an upgrade is the free one. Claude Code will also remove “peak hours” limitations for Pro and Max accounts. Beyond this, Claude API limits are being drastically increased. Tier 1, for example, is seeing a 1500% increase in maximum input tokens per minute, and a 900% increase to maximum output tokens per minute, with major boosts for other tiers as well. In other words, the Claude API just got a whole lot more powerful. This comes as a result of Anthropic striking a deal with SpaceX for additional compute capacity.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://9to5google.com/2026/05/06/claude-code-is-getting-higher-usage-limits-doubled-for-most-users/",
        "search_provider": "anthropic",
        "age": "May 6, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Usage Limits (2026): 5-Hour Caps Doubled May 6, Weekly Limits by Plan",
      "url": "https://www.morphllm.com/claude-code-usage-limits",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "morphllm.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=morphllm.com",
        "site_name": "Morph"
      },
      "is_missing": false,
      "text": "Yes, on May 6, 2026: five-hour rate limits doubled, peak-hour reductions removed, Opus API rate limits raised. The compute came from a SpaceX deal for 300+ MW (220,000+ NVIDIA GPUs) at Colossus 1. Articles describing limit cuts predate this change.\n\nAnthropic doubled Claude Code's 5-hour rate limits on May 6, 2026. How the rolling session works, Pro vs Max 5x vs Max 20x capacity, the two weekly caps, the June 15 Agent SDK credit, and what to do when you hit the wall.\n\nAnthropic doubled Claude Code's 5-hour rate limits on May 6, 2026 and removed peak-hour reductions. How the rolling session works, Pro vs Max 5x vs Max 20x capacity, the two weekly caps, the June 15 Agent SDK credit, and what to do when you hit the wall. ... Most pages about Claude usage limits were written before May 2026 and are now wrong. On May 6, 2026, Anthropic announced three changes, effective the same day: Claude Code's five-hour rate limits doubled for Pro, Max, Team, and seat-based Enterprise plans. \n\nThe peak-hours limit reduction was removed for Pro and Max Claude Code accounts. Limits no longer shrink during high-demand hours. Opus API rate limits were raised for Console accounts. ... The capacity came from a compute agreement with SpaceX covering the Colossus 1 data center: more than 300 megawatts, over 220,000 NVIDIA GPUs, online within the month of the announcement.\n\nFile-by-file search is the dominant hidden cost: the agent reads 10-20 files into context to find one function, and every byte counts against your session. WarpGrep runs codebase search on a dedicated trained model that finds target code in 3.8 steps on average (0.73 F1), so the search tokens never touch your Claude quota. Pricing: $0 for 100k requests free, $1 per 1M requests on Pro. The same logic applies to applying edits. Morph Fast Apply merges edit snippets at 10,500 tok/s on morph-v3-fast, so Claude emits a short lazy diff instead of rewriting whole files as output tokens. \n\nLess output per edit, more edits per sess",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.morphllm.com/claude-code-usage-limits",
        "search_provider": "anthropic",
        "age": "5 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Rate Limits & Usage Quotas Explained (2026)",
      "url": "https://www.truefoundry.com/blog/claude-code-limits-explained",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "truefoundry.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=truefoundry.com",
        "site_name": "TrueFoundry"
      },
      "is_missing": false,
      "text": "Anthropic governs Claude Code through a dual-layer usage system: a 5-hour rolling window for short-term activity, and a weekly cap on active compute hours. The same bucket is shared across Claude Code, Claude.ai chat, and Cowork — burn tokens ...\n\nAnthropic governs Claude Code through a dual-layer usage system: a 5-hour rolling window for short-term activity, and a weekly cap on active compute hours. The same bucket is shared across Claude Code, Claude.ai chat, and Cowork — burn tokens in one, you lose capacity in the others. Here's what each plan gets, followed by exactly how the limits work and how to stay productive within them. Note: Anthropic reduced 5-hour limits during weekday peak hours (5–11 AM PT) starting March 2026, and acknowledged on March 31 that users are hitting limits faster than expected. The numbers below reflect the post-March 28 reality. \n\nPrompt counts are ranges from independent testing — actual usage varies based on prompt length, context, model choice, and server load. Subscription limits are shared across Claude Code, Claude.ai chat, and Cowork. Peak-hour throttling: 5-hour limits are reduced weekdays 5–11 AM PT.\n\nHit Claude Code's 5-hour limit or weekly cap? Learn how the rolling window, Pro vs Max quotas, and token counting work, plus tips to stretch every session.\n\nInput prompts over 200K tokens are billed at 2× the standard API rate. Opus 4.7 can generate ~35% more tokens than 4.6 for the same input, increasing effective costs. ... Per-seat Claude Code subscriptions break at team scale. Pool a single enterprise Anthropic contract across your whole team through a gateway — add Bedrock and Vertex Claude for failover and extra capacity. Same models, central cost tracking, no per-seat tax. \n\nAnthropic defines an active hour not as wall-clock time, but as periods when Claude models are actively processing tokens or executing code-related reasoning. Idle moments such as file browsing or conversational pauses do not count toward",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.truefoundry.com/blog/claude-code-limits-explained",
        "search_provider": "anthropic",
        "age": "April 22, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude has temporarily doubled usage limits for everyone — but there is a catch",
      "url": "https://www.techradar.com/ai-platforms-assistants/claude/claude-has-temporarily-doubled-usage-limits-for-everyone-but-there-is-a-catch",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techradar.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techradar.com",
        "site_name": "techradar"
      },
      "is_missing": false,
      "text": "Claude has temporarily doubled usage limits for everyone — but there is a catch\nIt depends what time you use it\nSign up for breaking news, reviews, opinion, top tech deals, and more.\nYou are now subscribed\nYour newsletter sign-up was successful\n- Claude is giving all of its users double the usage for two weeks\n- The bonus usage can only be used outside of peak hours\n- Users have been flocking to Claude over its stance on military AI\nWe know that AI chatbot users have been flocking to Claude in recent days — partly due to the stance parent company Anthropic has taken over deals with the US military — and now all Claude users are getting double the usage limits for the next two weeks.\nAs per the official Claude account on X, the gesture is \"a small thank you\" to users. It applies to all types of usage, across all subscription levels and plans (including the free tier), and no action is needed to enable it.\n\n\nThere is a catch though: these extra usage limits are only available outside peak hours. On weekdays, that's 5am to 11am PT – or 8am to 2pm ET, 12pm to 6pm GMT, and 11pm to 5am if you're using Claude in Australia.\nArticle continues belowOn weekends, you can take advantage of the extra usage limits all day, so that might be the best time to build something with Claude Code, or try out the new interactive visualizations feature that just got rolled out to the AI chatbot.\nUp until March 27\nA small thank you to everyone using Claude: We’re doubling usage outside our peak hours for the next two weeks. pic.twitter.com/W7TEBPditqMarch 14, 2026\nYou can find out more information on the usage promotion page. The offer is running from Friday, March 13 through to the end of Friday, March 27. Enterprise accounts don't qualify for the promotion, and the bonus usage doesn't count towards your weekly limits.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.techradar.com/ai-platforms-assistants/claude/claude-has-temporarily-doubled-usage-limits-for-everyone-but-there-is-a-catch",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "'A small thank you to users': Claude extends usage limits for every user, but there's a slight catch",
      "url": "https://www.tomsguide.com/ai/a-small-thank-you-to-users-claude-extends-usage-limits-for-every-user-but-theres-a-slight-catch",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "tomsguide.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=tomsguide.com",
        "site_name": "tomsguide"
      },
      "is_missing": false,
      "text": "Claude has seen a surge in new users following the “QuitGPT” movement that has seen people cancelling their ChatGPT subscriptions following backlash over OpenAI’s agreement to deploy its models within U.S. defense networks.\nAnthropic rejected a similar deal from the Pentagon and called out OpenAI over its dealings. The result was the app surged to the top of the App Store rankings and more people than ever are choosing Claude.\nArticle continues belowA small thank you to everyone using Claude: We’re doubling usage outside our peak hours for the next two weeks. pic.twitter.com/W7TEBPditqMarch 14, 2026\nAnthropic says that users won't need to do anything. The extra allowances will be available to all regular users (Enterprise accounts don't qualify) from Friday, March 13 through Friday, March 27.\nAny bonus usage doesn't count towards your regular weekly usage. There is, however, a small catch to be aware of.\nOnly available outside peak hours",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.tomsguide.com/ai/a-small-thank-you-to-users-claude-extends-usage-limits-for-every-user-but-theres-a-slight-catch",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude daily limit",
      "url": "https://blog.laozhang.ai/en/posts/claude-daily-limit",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "laozhang.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=laozhang.ai",
        "site_name": "laozhang"
      },
      "is_missing": false,
      "text": "Skip to main content\n\nClaude Daily Limit in 2026: What Free, Pro, and Max Actually Reset\n\nA\n13 min readClaude\n\nClaude does not publish one fixed public daily token number for consumer plans. The useful answer is what Free, Pro, and Max actually reset, why capacity changes with workload, how usage limits differ from context window and API billing, and which next step makes sense when you hit the limit.\n\nClaude Daily Limit in 2026: What Free, Pro, and Max Actually Reset\n\nClaude does not publish one fixed public daily token number for consumer plans. As of April 8, 2026, Free usage resets every five hours, Pro and Max give you more capacity plus weekly limits, and your real headroom still changes with conversation length, attachments, tools, model choice, and current demand.\n\nWhat many readers call a Claude token limit per day is usually one of four different questions: Free plan usage, Pro or Max session headroom, a context-window question, or Claude Code / API usage.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.laozhang.ai/en/posts/claude-daily-limit",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "19262596 claude pro anthropic ai subscription 10 month for 3 months regular 20 month",
      "url": "https://slickdeals.net/f/19262596-claude-pro-anthropic-ai-subscription-10-month-for-3-months-regular-20-month",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "slickdeals.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=slickdeals.net",
        "site_name": "slickdeals"
      },
      "is_missing": false,
      "text": "Pro plans also have a weekly usage limit that applies across all models and resets seven days after your session starts.\nIn addition, to manage capacity and ensure fair access to all users, we may limit your usage in other ways, such as weekly and monthly caps or model and feature usage, at our discretion.\nslickd888\n1394 Posts\n109 Reputation\nUncle Sam wants to use Claude to do whatever it wants, Anthropic said not so fast, insisted \"no spying on Americans and no autonomous self-firing weapons with no human intervention\", Uncle Sam said F that, fired Anthropic and signed a deal with OpenAI instead. People now dumping ChatGPT for Claude.\nslickdealgb\n1251 Posts\n113 Reputation\nWar is peace. Freedom is slavery. Ignorance is strength.\n\n112 Comments\n\nSign up for a Slickdeals account to remove this ad.\n\nMar 02, 2026 03:51 AM\n4,316 Posts\nJoined Feb 2011\niygMar 02, 2026 03:51 AM\n4,316 Posts\n\nOur community has rated this post as helpful. If you agree, why not thank iyg\n\nThump up for no evil !\n3\n1\n22\n\n\nJoined Sep 2019\nFabulousStranger526Mar 02, 2026 06:07 AM\n531 Posts\n\nOur community has rated this post as helpful. If you agree, why not thank FabulousStranger526\n\nThis probably has to do with their feud with the Pentagon.\n1\nMar 02, 2026 06:07 AM\n43 Posts\nJoined Oct 2016\noldmoozyMar 02, 2026 06:07 AM\n43 Posts\n\nOur community has rated this post as helpful. If you agree, why not thank oldmoozy\n\nThis is probably the most open-ended and vague explanation of limits I ever seen\n------------------------------------------------------------------------------------\nDoes the Pro plan have any usage limits?\nYes. During peak hours, the Pro plan offers at least five times the usage per session compared to our free service. The number of messages you can send will vary based on message length, including the length of files you attach, the length of your current conversation, and the model or feature you use. Your session-based usage limit will reset every five hours.\n\n\nPro plans also have a week",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://slickdeals.net/f/19262596-claude-pro-anthropic-ai-subscription-10-month-for-3-months-regular-20-month",
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

Here's what I found, with sources clearly distinguished from assumptions:

---

**Short answer: No, the double-usage promotion has already ended.**

Here are the verified facts:

**The March 2026 Double-Usage Promotion (now expired)**

Anthropic ran a temporary promotion doubling Claude's usage limits from **March 13 through March 27, 2026**, as a gesture of appreciation for its rapidly growing community.

The doubled limits were only available **outside peak hours** — on weekdays, that was 5 AM–11 AM PT (8 AM–2 PM ET). On weekends, the doubled limits applied all day. Enterprise accounts did not qualify, and the bonus usage did not count toward weekly limits.

That promotion ended about 11 weeks ago (as of today, June 14, 2026).

---

**What changed more recently (May 6, 2026 — permanent)**

On May 6, 2026, Anthropic announced a **permanent** doubling of Claude Code's 5-hour rate limits for Pro, Max, Team, and Enterprise (seat-based) plans, and also removed peak-hours limitations for Pro and Max accounts. This came from a compute agreement with SpaceX covering the Colossus 1 data center — over 300 megawatts and 220,000+ NVIDIA GPUs.

However, this specifically applies to **Claude Code**, not to general claude.ai chat usage limits.

---

**Summary table**

| Promotion | Period | Scope | Status |
|---|---|---|---|
| Double usage (all plans) | Mar 13–27, 2026 | Free, Pro, Max, Team (off-peak only) | **Expired** |
| Claude Code limits doubled (permanent) | From May 6, 2026 | Pro, Max, Team, Enterprise | **Ongoing** |

So if you're asking about a general subscription double-usage bonus for claude.ai chat — that's expired. If you're a Claude Code user, the doubled limits are now permanent.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ec52f-0208-755d-99f3-1a22e830e37c",
  "updated_at": "2026-06-14T08:11:23.012851Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ec52f-0207-7445-aeab-a0ec265a0c06"
}
```

</details>
