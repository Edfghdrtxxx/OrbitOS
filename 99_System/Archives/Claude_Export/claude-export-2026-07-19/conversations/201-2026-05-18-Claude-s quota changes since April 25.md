# Claude's quota changes since April 25

## Export metadata (verbatim)

```json
{
  "uuid": "3d0c5f02-e089-4329-9a48-66b2921ffa01",
  "name": "Claude's quota changes since April 25",
  "summary": "**Conversation Overview**\n\nThe person requested a detailed breakdown of Claude's quota changes since April 25, 2026, covering Claude.ai consumer plans (Free, Pro, Max) and Claude Code (terminal). Claude asked clarifying questions to establish the timeframe and product surfaces before researching the topic using web search and document retrieval tools.\n\nClaude produced a structured, source-attributed breakdown of three major events: the May 6 doubling of Claude Code 5-hour limits tied to the SpaceX/Colossus 1 compute deal; the May 13 temporary 50% increase to Claude Code weekly limits through July 13 (sourced to the official @ClaudeDevs account); and the Agent SDK credit carve-out announced May 13 and effective June 15, which separates programmatic Agent SDK usage into a dedicated monthly credit pool rather than drawing from subscription limits. Claude explicitly distinguished between facts confirmed by Anthropic primary sources, facts confirmed only via the @ClaudeDevs tweet, and claims reported by third parties but unverified from official Anthropic channels.\n\nThe person then asked for Claude's opinion on whether the changes were partially driven by OpenAI competition. Claude provided analytical commentary differentiating the three events: framing the May 6 changes as primarily supply-driven, the May 13 weekly increase as substantially a competitive response to OpenAI's Codex enterprise offer (noting the same-day timing of competing announcements and the temporary expiration window as key signals), and the Agent SDK carve-out as margin protection unrelated to competitive dynamics. Claude proactively disclosed its position as an Anthropic product as a potential source of bias. The person demonstrated a preference for precise source attribution, clear separation of verified facts from assumptions, and nuanced causal analysis rather than single-factor explanations.",
  "created_at": "2026-05-18T11:49:48.806574Z",
  "updated_at": "2026-05-18T12:23:42.532576Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-05-18T11:49:49.885017Z

Please provide a detailed breakdown of Claude's quota changes since April 25

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019e3aeb-bb71-7dca-9fbd-ddb34a8a953f",
  "updated_at": "2026-05-18T11:49:49.885017Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-05-18T11:50:16.667319Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user is asking about Claude's quota changes since April 25, so I need to check my product knowledge and search Anthropic's official documentation to give them accurate information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:49:54.247054Z",
  "stop_timestamp": "2026-05-18T11:49:55.187290Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01XTfq72VjvJ7GerJSfDsWee",
  "name": "view",
  "input": {
    "description": "Reading product self-knowledge skill before answering questions about Anthropic products",
    "path": "/mnt/skills/public/product-self-knowledge/SKILL.md"
  },
  "message": "Reading product self-knowledge skill before answering questions about Anthropic products",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading product self-knowledge skill before answering questions about Anthropic products"
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
  "tool_use_id": "toolu_01XTfq72VjvJ7GerJSfDsWee",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: product-self-knowledge\n     3\tdescription: \"Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Claude Code (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Claude API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Claude.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Claude capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong.\"\n     4\t---\n     5\t\n     6\t# Anthropic Product Knowledge\n     7\t\n     8\t## Core Principles\n     9\t\n    10\t1. **Accuracy over guessing** - Check official docs when uncertain\n    11\t2. **Distinguish products** - Claude.ai, Claude Code, and Claude API are separate products\n    12\t3. **Source everything** - Always include official documentation URLs\n    13\t4. **Right resource first** - Use the correct docs for each product (see routing below)\n    14\t\n    15\t---\n    16\t\n    17\t## Question Routing\n    18\t\n    19\t### Claude API or Claude Code questions?\n    20\t\n    21\t→ **Check the docs maps first**, then navigate to specific pages:\n    22\t\n    23\t- **Claude API & General:** https://docs.claude.com/en/docs_site_map.md\n    24\t- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    25\t\n    26\t### Claude.ai questions?\n    27\t\n    28\t→ **Browse the support page:**\n    29\t\n    30\t- **Claude.ai Help Center:** https://support.claude.com\n    31\t\n    32\t---\n    33\t\n    34\t## Response Workflow\n    35\t\n    36\t1. **Identify the product** - API, Claude Code, or Claude.ai?\n    37\t2. **Use the right resource** - Docs maps for API/Code, support page for Claude.ai\n    38\t3. **Verify details** - Navigate to specific documentation pages\n    39\t4. **Provide answer** - Include source link and specify which product\n    40\t5. **If uncertain** - Direct user to relevant docs: \"For the most current information, see [URL]\"\n    41\t\n    42\t---\n    43\t\n    44\t## Quick Reference\n    45\t\n    46\t**Claude API:**\n    47\t\n    48\t- Documentation: https://docs.claude.com/en/api/overview\n    49\t- Docs Map: https://docs.claude.com/en/docs_site_map.md\n    50\t\n    51\t**Claude Code:**\n    52\t\n    53\t- Documentation: https://docs.claude.com/en/docs/claude-code/overview\n    54\t- Docs Map: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    55\t- npm Package: https://www.npmjs.com/package/@anthropic-ai/claude-code\n    56\t\n    57\t**Claude.ai:**\n    58\t\n    59\t- Support Center: https://support.claude.com\n    60\t- Getting Help: https://support.claude.com/en/articles/9015913-how-to-get-support\n    61\t\n    62\t**Other:**\n    63\t\n    64\t- Product News: https://www.anthropic.com/news\n    65\t- Enterprise Sales: https://www.anthropic.com/contact-sales\n    66\t",
      "uuid": "4b26c051-9cc8-461b-b77b-557267e9d25e"
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

 The user is asking about quota changes since April 25, which could refer to Claude.ai usage limits, Claude Code limits, or API rate limits. I need to clarify whether they mean April 25, 2025 or 2026, and search for any relevant updates from Anthropic during that period.

</details>

Before I dig in, two genuine ambiguities are worth resolving — they significantly change which sources I need to pull from and how much ground I'd be covering.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:50:12.968239Z",
  "stop_timestamp": "2026-05-18T11:50:14.930377Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01WJtxspMnqv5mD5dWVKrHMJ",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "question": "Which 'April 25' did you mean?",
        "options": [
          "April 25, 2025 (~13 months of changes)",
          "April 25, 2026 (last ~3 weeks)",
          "Both — full timeline"
        ],
        "type": "single_select"
      },
      {
        "question": "Which product surface(s) do you want covered?",
        "options": [
          "Claude.ai (Free / Pro / Max)",
          "Claude Code (terminal)",
          "API rate limits",
          "All of the above"
        ],
        "type": "multi_select"
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
  "tool_use_id": "toolu_01WJtxspMnqv5mD5dWVKrHMJ",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\n  \"questions\": [\n    {\n      \"question\": \"Which 'April 25' did you mean?\",\n      \"options\": [\n        \"April 25, 2025 (~13 months of changes)\",\n        \"April 25, 2026 (last ~3 weeks)\",\n        \"Both \\u2014 full timeline\"\n      ],\n      \"type\": \"single_select\"\n    },\n    {\n      \"question\": \"Which product surface(s) do you want covered?\",\n      \"options\": [\n        \"Claude.ai (Free / Pro / Max)\",\n        \"Claude Code (terminal)\",\n        \"API rate limits\",\n        \"All of the above\"\n      ],\n      \"type\": \"multi_select\"\n    }\n  ]\n}",
      "uuid": "d193a729-fd14-47c1-b2b2-9089f9e43cba"
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
  "uuid": "019e3aeb-bb71-7b22-aa63-0195195fbabf",
  "updated_at": "2026-05-18T11:50:16.667319Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019e3aeb-bb71-7dca-9fbd-ddb34a8a953f"
}
```

</details>

### 3. human — 2026-05-18T11:50:35.532697Z

Q: Which 'April 25' did you mean?
A: April 25, 2026 (last ~3 weeks)

Q: Which product surface(s) do you want covered? (Select all that apply)
A: Claude.ai (Free / Pro / Max), Claude Code (terminal)

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019e3aec-705f-7364-bebf-cea763afefe1",
  "updated_at": "2026-05-18T11:50:35.532697Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019e3aeb-bb71-7b22-aa63-0195195fbabf"
}
```

</details>

### 4. assistant — 2026-05-18T11:52:26.768103Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I'm looking for recent quota changes across Claude.ai's different tiers and Claude Code since late April, so I'll need to check Anthropic's official announcements, the support documentation, and Claude Code's release notes to find what's changed in the last few weeks.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:50:40.266210Z",
  "stop_timestamp": "2026-05-18T11:50:40.591295Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01T8qKCbocH6iHKQzo6Hv4Bz",
  "name": "web_search",
  "input": {
    "query": "Anthropic Claude usage limits change April May 2026"
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
  "tool_use_id": "toolu_01T8qKCbocH6iHKQzo6Hv4Bz",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Higher usage limits for Claude and a compute deal with ...",
      "url": "https://www.anthropic.com/news/higher-limits-spacex",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "This gives us access to more than 300 megawatts of new capacity (over 220,000 NVIDIA GPUs) within the month. This additional capacity will directly improve capacity for Claude Pro and Claude Max subscribers. This joins our other significant compute announcements: An up to 5 gigawatt (GW) agreement ...\n\nOur updated API rate limits for Claude Opus models. We’ve signed an agreement with SpaceX to use all of the compute capacity at their Colossus 1 data center. This gives us access to more than 300 megawatts of new capacity (over 220,000 NVIDIA GPUs) within the month. This additional capacity will directly improve capacity for Claude Pro and Claude Max subscribers. This joins our other significant compute announcements: An up to 5 gigawatt (GW) agreement with Amazon, which includes nearly 1 GW of new capacity by the end of 2026; A 5 GW agreement with Google and Broadcom, which will begin coming online in 2027; A strategic partnership with Microsoft and NVIDIA that includes $30 billion of Azure capacity; Our $50 billion investment in American AI infrastructure with Fluidstack. We train and run Claude on a range of AI hardware—AWS Trainium, Google TPUs, and NVIDIA GPUs—and continue to explore opportunities to bring additional capacity online.\n\nPwC will roll out Claude Code and Cowork starting with U.S. teams and expanding toward a global workforce of hundreds of thousands of professionals, establish a joint Center of Excellence, and train and certify 30,000 PwC professionals on Claude.Read more ... We're launching Claude for Small Business, a package of connectors and ready-to-run workflows that put Claude inside the tools small businesses use every day.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/higher-limits-spacex",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Expands Claude Access with Higher Usage Limits | The Coders Blog | Home",
      "url": "https://thecodersblog.com/anthropic-claude-usage-limits-increased-2026/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "thecodersblog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=thecodersblog.com",
        "site_name": "The Coders Blog"
      },
      "is_missing": false,
      "text": "For Claude Code, the five-hour rolling rate limits are now doubled across Pro, Max, Team, and seat-based Enterprise plans. Crucially, the peak hours limit reduction has been entirely removed for Pro and Max accounts.\n\nHitting that dreaded rate limit mid-development, mid-analysis, mid-workflow, feels like a digital brick wall. For many AI developers and businesses leveraging Anthropic’s Claude, this has been a recurring, frustrating reality. The good news? That wall is about to get a lot higher. As of May 6, 2026, Anthropic is rolling out significant increases to Claude’s usage limits, a move directly addressing past user pain points and signalling a new era of accelerated AI deployment. Before these changes, user sentiment surrounding Claude’s accessibility was often tinged with frustration. Stories of hitting limits within hours, rapid token consumption, and a general lack of transparency across various plan tiers (Free, Pro, Max) were common. Surging demand had clearly outpaced Anthropic’s prior capacity, creating bottlenecks for even dedicated users.\n\nThe SpaceX compute deal underscores Anthropic’s commitment to scaling and reliability. However, this doesn’t mean a complete abdication of intelligent usage practices. The multi-dimensional nature of rate limits (5-hour rolling, weekly, RPM, ITPM, OTPM) still requires careful monitoring. Opus models, while powerful, are inherently resource-intensive; exceeding their elevated limits will now simply happen faster. Agentic workflows and large context windows will continue to be token-hungry. Here’s the honest verdict: For simpler tasks, opting for the more cost-effective Sonnet or Haiku models remains crucial. Continuous, unmanaged agentic loops, even with higher caps, can still lead to limit exhaustion. While transparency on exact numerical Opus API limits would be beneficial for advanced planning, these increases significantly improve Claude’s accessibility.\n\n# Example using Admin API to retrieve rate limits curl -X GET 'https://api.anthropic.com/v1/organizations/rate_limits' \\ -H 'Authorization: Bearer sk-ant-admin-...' To optimize ITPM, prompt caching mechanisms like CLAUDE_CODE_AUTO_COMPACT_WINDOW can be employed. For managing context, explicit commands like /clear or simply starting new chat sessions are still essential. The previous limitations naturally led users to explore alternatives. Tools like Cursor, GitHub Copilot, Google’s Gemini, OpenAI’s Codex, and even local LLMs via Ollama became go-to options when Claude’s constraints proved too restrictive. This expansion by Anthropic is a strategic move to reclaim and retain users, making Claude a more viable, primary tool for a wider range of demanding applications. These increased limits are undeniably a major step forward, directly addressing the frustration and uncertainty that plagued many Claude users.\n\nThese aren’t just minor tweaks; Anthropic is fundamentally addressing the capacity crunch. For Claude Code, the five-hour rolling rate limits are now doubled across Pro, Max, Team, and seat-based Enterprise plans. Crucially, the peak hours limit reduction has been entirely removed for Pro and Max accounts. This means more consistent access when you need it most. The Claude API, particularly for the powerful Opus models, sees “considerably raised” rate limits. This is a significant boon for developers building complex applications. The API tracks limits across three key dimensions: Requests Per Minute (RPM), Input Tokens Per Minute (ITPM), and Output Tokens Per Minute (OTPM) per model. Real-time status is accessible via the anthropic-ratelimit-* response headers. // Example of a rate limit response header { \"anthropic-ratelimit-limit\": \"5000,100000,100000\", // RPM, ITPM, OTPM \"anthropic-ratelimit-remaining\": \"4980,99950,99900\", \"anthropic-ratelimit-reset\": \"10s,60s,60s\" // Time until re",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://thecodersblog.com/anthropic-claude-usage-limits-increased-2026/",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Daily Limit in 2026: What Free, Pro, and Max Actually Reset | LaoZhang AI Blog",
      "url": "https://blog.laozhang.ai/en/posts/claude-daily-limit",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "laozhang.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=laozhang.ai",
        "site_name": "LaoZhang AI Blog"
      },
      "is_missing": false,
      "text": "As of April 8, 2026, Free usage resets every five hours, Pro and Max give you more capacity plus weekly limits, and your real headroom still changes with conversation length, attachments, tools, model choice, and current demand.\n\nClaude does not publish one fixed public daily token number for consumer plans. As of April 8, 2026, Free usage resets every five hours, Pro and Max give you more capacity plus weekly limits, and your real headroom still changes with conversation length, attachments, tools, model choice, and current demand. What many readers call a Claude token limit per day is usually one of four different questions: Free plan usage, Pro or Max session headroom, a context-window question, or Claude Code / API usage. If you keep hitting the limit, identify which system you are actually in first, because that tells you whether the right move is to wait for a reset, buy extra usage, upgrade plans, or switch to a more specific guide. Verification note: this guide was rechecked against Anthropic pricing and help-center usage pages on April 8, 2026. Where Anthropic uses relative or variable wording instead of a fixed quota, this article keeps that wording intact rather than inventing a cleaner number.\n\nAnthropic's help pages repeatedly frame consumer usage as variable by design. The factors it names are the ones that actually change the outcome: message length, attached files, current conversation length, model choice, tool or feature use, and overall demand. That is why any article that confidently promises one exact public \"Claude daily token limit\" should be treated carefully. It may be quoting anecdotes, older plan language, or a rough planning band as if it were a contract. There is also a smaller source of confusion on Anthropic's own surfaces. The web-search help page says Free accounts have daily usage limits for web search and web fetch. That statement is real, but it does not add up to a universal public daily token budget for all consumer Claude usage. It is better read as a feature-surface constraint layered on top of the broader Free-plan system.\n\nIf you are on Free Claude, start with workload shape, not quota math. Long conversations, big attachments, and search-heavy or fetch-heavy use can make Free feel much smaller than a plain-text chat session. The first move is usually to wait for the next five-hour reset, shorten the conversation, or reduce what you are asking Claude to inspect in one pass. If that pattern keeps breaking normal work, the real answer is not a better folklore number. It is that Free may no longer match your workload. If you are on Pro, watch for repeated interruption rather than one bad afternoon. Pro is the right default for many serious users, but the upgrade signal is not \"I hit the limit once.\" It is \"five-hour resets and the weekly cap are breaking valuable work often enough that the interruptions now cost more than the price difference.\" Anthropic's current paid-plan structure also gives you extra usage as an overflow route.\n\nYes. Anthropic's web-search help page says web search and web fetch use capacity on Free accounts and can consume a meaningful share of that feature's limit. If search-heavy use is what is making Free feel small, the problem may be your feature mix rather than a mysterious drop in general chat capacity. Is the context window the same as the Claude daily limit? No. The context window is about how much text Claude can hold in the conversation at once. Usage limits are about how much plan capacity you have left before reset or overflow. They are related in the sense that bigger workloads can consume more usage, but they are not the same meter. ... Then this page is only the first correction. Use the Claude Code usage guide if you are asking about shared paid-plan usage in coding workflows, or the Claude API key free tier guide if you are asking about API billing, Console credits, or token-priced developer usage.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.laozhang.ai/en/posts/claude-daily-limit",
        "search_provider": "anthropic",
        "age": "April 8, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Increases Weekly Limits by 50% Through July 13, 2026: Anthropic's Anti-Codex Move",
      "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pasqualepillitteri.it",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pasqualepillitteri.it",
        "site_name": "Pasquale Pillitteri"
      },
      "is_missing": false,
      "text": "It fits into a sequence of three coordinated moves that, read together, tell an explicit strategy shift on Anthropic&#x27;s part. The first move, on April 16, 2026, was the &quot;Claude 2x&quot; promo that temporarily doubled capacity during off-peak hours.\n\nThe estimates above are indicative reconstructions based on telemetry data shared by users in recent hours. Anthropic neither confirms nor denies the precise numbers, a gray zone that fuels the debate on the Pro plan described in the piece Claude Code out of the Pro plan: how Anthropic changed pricing last month. The May 13 increase doesn't arrive in isolation. It fits into a sequence of three coordinated moves that, read together, tell an explicit strategy shift on Anthropic's part. The first move, on April 16, 2026, was the \"Claude 2x\" promo that temporarily doubled capacity during off-peak hours. The second, on May 6, brought two interventions in one shot: doubling of hourly limits for Pro, Max, Team and Enterprise and total removal of the \"peak hours\" concept for Pro and Max. The third, today May 13, raises weekly caps by 50% through July 13. The inevitable question is why Anthropic split the intervention into three close-together announcements rather than making just one.\n\nOn May 13, 2026 Anthropic raises Claude Code weekly limits by 50% through July 13 for Pro, Max, Team and Enterprise. Defensive move against Codex.\n\nClaude Code increases weekly limits by 50% through July 13, 2026: a defensive move against OpenAI's Codex · Update (May 15, 2026): OpenAI just responded with Codex on ChatGPT mobile. TL;DR: Anthropic raises Claude Code weekly limits by 50% from May 13, 2026 through July 13, 2026. The promo is live for Pro, Max, Team and seat-based Enterprise. The free plan is excluded. Stated reading: infrastructure capacity. Real reading: retaining users who are migrating to Codex because of its significantly lower token consumption. Update May 15, 2026: Anthropic manually reset the 5-hour and weekly counters for Pro, Max, Team and Enterprise plans. Read the analysis of the reset. The original @ClaudeDevs post reports a single line, accompanied by a graphic showing the new caps per plan: \"Claude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users.\"\n\nClaude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users. — ClaudeDevs (@ClaudeDevs) May 13, 2026 · The context is anything but neutral. Three minutes after the official announcement, the @bridgemindai account published a comment that collected thousands of interactions within hours: \"Claude Code just raised weekly limits by 50%. This puts Claude Code rate limits on par with Codex. I cancelled my Max plan twice over rate limits.\" The key phrase, \"on par with Codex\", is exactly the competitive reading that Anthropic itself didn't want to make explicit but that the market picked up immediately. While Anthropic was defending its user base by raising the caps, OpenAI launched on the very same May 13, 2026 a mirror-image, symmetrical acquisition play. The @OpenAIDevs account posted a few hours before the @ClaudeDevs tweet an announcement aimed directly at the CTOs of enterprise Claude Code customers, with an offer th",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
        "search_provider": "anthropic",
        "age": "18 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic's Compute Shortage: Why Claude Limits Are Getting Worse | MindStudio",
      "url": "https://www.mindstudio.ai/blog/anthropic-compute-shortage-claude-limits",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mindstudio.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mindstudio.ai",
        "site_name": "MindStudio"
      },
      "is_missing": false,
      "text": "Every enterprise team that adds an AI agent to their stack adds another source of continuous, high-volume token consumption. Anthropic’s user base is growing, and the average compute consumption per user is growing faster. ... Remy writes the spec, manages the build, and ships the app. The world&#x27;s most powerful product manager agentTry Remy today · New capabilities require more compute. Each generation of Claude has been more capable — and more compute-hungry per request. The AI tipping point in capabilities that recent models represent came with a corresponding jump in inference costs. Better models are more expensive to run. Data center buildout is slow. Even with aggressive investment, new capacity won’t come online until late 2026 at the earliest. The data center infrastructure constraints affecting the whole industry — energy, land, regulatory approvals — are real.\n\nAnthropic underinvested in compute and now can't serve demand. Here's why Claude quotas are tightening, what it means for developers, and what comes next. ... If you’ve been using Claude regularly in 2026, you’ve probably noticed something: the quotas are tighter than they were a year ago. Pro plan users are hitting walls faster. API rate limits feel more restrictive. And if you’re running agentic workflows or heavy Claude Code sessions, you’re likely burning through your allowance in hours rather than days. This isn’t a billing glitch or a policy change for its own sake. Anthropic has a genuine compute shortage — and the decisions that created it were made years ago, when the company was still small enough that “we’ll figure out infrastructure later” seemed reasonable. Here’s what’s actually happening, why it happened, and what it means if Claude is part of your development stack.\n\nThe compute shortfall isn’t a secret. Anthropic’s CEO Dario Amodei has publicly described the company as compute-constrained and has pointed to it as a primary bottleneck on model development and deployment velocity. The company has raised billions since — including a massive funding round in late 2024 — but data center capacity doesn’t appear overnight. Ordering GPUs, signing colocation deals, and provisioning infrastructure takes 18 to 24 months at minimum. Money raised today turns into compute capacity in late 2026 or 2027. In the meantime, demand has kept growing. And the shape of that demand has changed in ways that make the problem significantly worse. A year ago, most Claude interactions looked like this: a user sends a prompt, Claude responds, done. Maybe a few back-and-forth turns. Total token consumption: a few thousand tokens per session, at most.\n\nEvery enterprise team that adds an AI agent to their stack adds another source of continuous, high-volume token consumption. Anthropic’s user base is growing, and the average compute consumption per user is growing faster. ... Remy writes the spec, manages the build, and ships the app. The world's most powerful product manager agentTry Remy today · New capabilities require more compute. Each generation of Claude has been more capable — and more compute-hungry per request. The AI tipping point in capabilities that recent models represent came with a corresponding jump in inference costs. Better models are more expensive to run. Data center buildout is slow. Even with aggressive investment, new capacity won’t come online until late 2026 at the earliest. The data center infrastructure constraints affecting the whole industry — energy, land, regulatory approvals — are real.\n\nAnthropic underinvested in compute infrastructure relative to the demand its models would generate, and the gap is now visible in tightening quotas and rate limits. Agentic use cases — Claude Code, multi-step agent loops, long-context workloads — consume dramatically more compute per user than traditional chat usage, multiplying the pressure. New infrastructure investment will take 12 to 24 months to translate into available capacity, meaning limits will likely stay tight or get tighter through 2026. Developers building on Claude should build rate limit handling into their systems, optimize token usage aggressively, and architect for model portability. Anthropic is actively working on the problem — prompt caching, tiered pricing, infrastructure investment — but none of it resolves the shortage quickly. The most durable response is to stop treating any single model provider as unlimited infrastructure, and build systems that can adapt as the compute landscape shifts.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.mindstudio.ai/blog/anthropic-compute-shortage-claude-limits",
        "search_provider": "anthropic",
        "age": "4 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic reinstates OpenClaw and third-party agent usage on Claude subscriptions — with a catch | VentureBeat",
      "url": "https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "venturebeat.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=venturebeat.com",
        "site_name": "VentureBeat"
      },
      "is_missing": false,
      "text": "The move is a major reversal from the Anthropic&#x27;s policy introduced in early April 2026 that expressly prohibited its AI subscriptions from being used to power these kind of non-Anthropic agents and harnesses, after Anthropic said they caused ...\n\nNow, Anthropic is giving Claude subscribers another way to use their subscription bill to pay for third-party agents. However, the restoration comes with a significant catch: programmatic usage is no longer subsidized by the general subscription pool but is instead restricted to a fixed, non-rollover monthly credit, also worth $20-$200 depending on your Claude plan, and billed at the API rates. In other words, if you don't end up using these new Agent SDK credits, they simply expire at the end of the month. And if you do use them all up, you cannot dip into your general subscription usage limits to cover any additional usage — you'll need to buy extra usage credits instead. To understand why this restoration matters, one must look at the technical friction that led to the initial ban on April 4, 2026. Anthropic’s first-party tools, such as Claude Code and Claude Cowork, are engineered to maximize \"prompt cache hit rates\"—a method of reusing previously processed text to save on expensiv\n\nIf an agent is inefficient and burns through tokens, it simply drains the user's new $20 to $200 Agent SDK credit budget faster, rather than exceeding the value of Anthropic's fixed monthly subscription tiers.\n\nOnce the Agent SDK credit limit ($20 for Pro plans, $100 for Max 5X, etc) is exhausted, programmatic usage stops unless the user has enabled \"extra usage\" billing, which is charged at standard, pay-as-you-go API rates. Crucially, for those who found the original subscription model to be an infinite resource, this is a hard cap. Credits do not roll over, meaning the \"use it or lose it\" nature of the system forces a monthly reset of the developer’s budget. The licensing implications of this move are profound for the \"agentic\" ecosystem. By explicitly allowing third-party apps like Conductor and OpenClaw to authenticate via the Agent SDK, Anthropic is legitimizing a workflow it had previously attempted to block. However, in doing so, it has ended the era of \"compute arbitrage\".In the early part of 2026, a $20 Pro subscription could be leveraged via OpenClaw to run agents that would cost hundreds of dollars on a standard API key.\n\nThe restoration of third-party access is segmented across Anthropic’s billing tiers, creating a new hierarchy of \"programmatic power.\" Here's how much Anthropic is giving each user in terms of the new Agent SDK credits (in addition to their normal Claude usage through Anthropic Claude products like Claude Code, Claude Cowork etc). This system introduces a sharp divide between \"interactive\" and \"programmatic\" workflows. If you are chatting with Claude in a browser or using Claude Code in a terminal to write code interactively, you are still drawing from your standard, high-capacity subscription limits. As Anthropic technical staffer Lydia Hallie wrote in a post on X, \"To add some clarity: you don't pay extra. It's the same subscription, same price per month.\" Hallie also included the following helpful diagram of how the new Agent SDK credits work: However, the moment you use the claude -p command for non-interactive tasks, run a GitHub Action, or connect a third-party tool like OpenClaw",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic tightens Claude limits as OpenAI courts agent users",
      "url": "https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "axios.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=axios.com",
        "site_name": "Axios"
      },
      "is_missing": false,
      "text": "Subscribers will now get a new monthly credit that they can use with third-party harnesses like OpenClaw. Anthropic says that new changes should support the ways that the majority of people use Claude.\n\nWhy it matters: The fight shows that \"all-you-can-eat\" AI subscriptions may not survive the agent era, where software can burn through computing resources far faster than humans ever could. Driving the news: Anthropic announced that it's bringing back support for outside agent tools on paid Claude plans. But it is putting that usage behind a separate credit meter. Subscribers will now get a new monthly credit that they can use with third-party harnesses like OpenClaw. Anthropic says that new changes should support the ways that the majority of people use Claude. What they're saying: Anthropic's changes didn't go over well. Claude Code product manager Noah Zweben's X post about the new rules was riddled with critical replies, with respondents calling the changes \"gaslighting\" and claiming to be switching to Codex. The intrigue: OpenAI is taking the opposite tack, at least for now.\n\nAnthropic has been among the more aggressive in restricting use because it's been the top choice for coders who use agents the most and have been struggling to maintain enough compute resources.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens",
        "search_provider": "anthropic",
        "age": "4 days ago"
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

 I've got some solid leads here. The user is looking for primary sources, so I should pull the Anthropic news post directly. I'm tracking down key events from April 25, 2026 onward to verify—there's the Claude 2x promotion from mid-April for context, and then the May 6 update that doubled the rolling limits for various subscription tiers.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:50:47.222535Z",
  "stop_timestamp": "2026-05-18T11:50:47.222535Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01B4UEmVE7mHgLi8juLSnETm",
  "name": "web_fetch",
  "input": {
    "url": "https://www.anthropic.com/news/higher-limits-spacex"
  },
  "message": "Fetching: https://www.anthropic.com/news/higher-limits-spacex",
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
  "tool_use_id": "toolu_01B4UEmVE7mHgLi8juLSnETm",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "",
      "url": "https://www.anthropic.com/news/higher-limits-spacex",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "anthropic"
      },
      "is_missing": false,
      "text": "---\nmeta-next-size-adjust:\nmeta-theme-color: #141413\nmeta-viewport: width=device-width, initial-scale=1\n---\n\n\n[Skip to main content](#main-content)[Skip to footer](#footer)\n\n[/](https://www.anthropic.com/)\n\n- [Research](https://www.anthropic.com/research)\n- [Economic Futures](https://www.anthropic.com/economic-futures)\n- Commitments\n\n- Learn\n\n- [News](https://www.anthropic.com/news)\n\n[Try Claude](https://claude.ai/)\n\nAnnouncements\n\n# Higher usage limits for Claude and a compute deal with SpaceX\n\nMay 6, 2026\n\n![Higher usage limits for Claude and a compute deal with SpaceX](https://www-cdn.anthropic.com/images/4zrzovbb/website/5f455d24ea80569b34eb4347f06152d8a5508722-1000x1000.svg)\n\nWe’ve agreed to a partnership with SpaceX that will substantially increase our compute capacity. This, along with our other recent compute deals, means that we’ve been able to increase our usage limits for Claude Code and the Claude API.\n\nBelow, we describe these changes and the progress we’re making on compute.\n\n## Higher usage limits\n\nThe following three changes—all effective today—are aimed at improving the experience of using Claude for our most dedicated customers.\n\nFirst, we’re **doubling Claude Code’s five-hour rate limits** for Pro, Max, Team, and seat-based Enterprise plans.\n\nSecond, we’re **removing the peak hours limit reduction on Claude Code** for Pro and Max accounts.\n\nThird, we’re **raising our [API rate limits](https://platform.claude.com/docs/en/api/rate-limits) considerably for Claude Opus models**, as shown in the table below:\n\n![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fd8f4f661bde0f11088d087dcda98916becad077f-1920x801.png&amp;w=3840&amp;q=75)\n\n**Our updated API rate limits for Claude Opus models.**\n\n## New compute partnership with SpaceX\n\nWe’ve signed an agreement with SpaceX to use all of the compute capacity at their Colossus 1 data center. This gives us access to more than 300 megawatts of new capacity (over 220,000 NVIDIA GPUs) within the month. This additional capacity will directly improve capacity for Claude Pro and Claude Max subscribers.\n\nThis joins our other significant compute announcements:\n\n- [An up to 5 gigawatt (GW) agreement with Amazon](https://urldefense.us/v3/__https:/www.anthropic.com/news/anthropic-amazon-compute__;!!Fqb0NABsjhF0Kh8I!f3EziG8q3wGsRgicn_ZGbvtLp5ZdopVN_KTE1QXfiqHcZ0l9w_sq_kpBwgsm-IHRGC18VQ89pRZ3BOVEnw$), which includes nearly 1 GW of new capacity by the end of 2026;\n- [A 5 GW agreement with Google](https://urldefense.us/v3/__https:/www.anthropic.com/news/google-broadcom-partnership-compute__;!!Fqb0NABsjhF0Kh8I!f3EziG8q3wGsRgicn_ZGbvtLp5ZdopVN_KTE1QXfiqHcZ0l9w_sq_kpBwgsm-IHRGC18VQ89pRZtorfLOg$) and Broadcom, which will begin coming online in 2027;\n- A [strategic partnership](https://urldefense.us/v3/__https:/www.anthropic.com/news/microsoft-nvidia-anthropic-announce-strategic-partnerships__;!!Fqb0NABsjhF0Kh8I!f3EziG8q3wGsRgicn_ZGbvtLp5ZdopVN_KTE1QXfiqHcZ0l9w_sq_kpBwgsm-IHRGC18VQ89pRaViUpCKQ$) with Microsoft and NVIDIA that includes $30 billion of Azure capacity;\n- Our [$50 billion investment](https://urldefense.us/v3/__https:/www.anthropic.com/news/anthropic-invests-50-billion-in-american-ai-infrastructure__;!!Fqb0NABsjhF0Kh8I!f3EziG8q3wGsRgicn_ZGbvtLp5ZdopVN_KTE1QXfiqHcZ0l9w_sq_kpBwgsm-IHRGC18VQ89pRYa_xNtww$) in American AI infrastructure with Fluidstack.\n\n\nWe train and run Claude on a range of AI hardware—AWS Trainium, Google TPUs, and NVIDIA GPUs—and continue to explore opportunities to bring additional capacity online.\n\nAs part of this agreement, we have also expressed interest in partnering with SpaceX to develop multiple gigawatts of orbital AI compute capacity.\n\n## Expanding internationally\n\nOur enterprise customers—particularly those in regulated industries like financial services, healthcare, and government—increasingly need in-region infrastructure to meet compliance and data residency requirements. Accordingly, some of our capacity expansion will be international: our recently announced [collaboration with Amazon](https://www.anthropic.com/news/anthropic-amazon-compute) includes additional inference in Asia and Europe.\n\nWe’re very intentional about where we’ll add capacity—partnering with democratic countries whose legal and regulatory frameworks support investments of this scale, and where the supply chain on which our compute depends—hardware, networking, and facilities—will be secure.\n\nFinally, we recently made a [commitment](https://www.anthropic.com/news/covering-electricity-price-increases) to cover any consumer electricity price increases caused by our data centers in the US. As part of our international expansion, we’re exploring ways to extend that commitment to new jurisdictions, as well as partnering with local leaders to invest back into the communities that host our facilities.\n\n[https://twitter.com/intent/tweet?text=https://www.anthropic.com/news/higher-limits-spacex](https://twitter.com/intent/tweet?text=https://www.anthropic.com/news/higher-limits-spacex)[https://www.linkedin.com/shareArticle?mini=true&url=https://www.anthropic.com/news/higher-limits-spacex](https://www.linkedin.com/shareArticle?mini=true&url=https://www.anthropic.com/news/higher-limits-spacex)\n\n## Related content\n\n### PwC is deploying Claude to build technology, execute deals, and reinvent enterprise functions for clients\n\nPwC will roll out Claude Code and Cowork starting with U.S. teams and expanding toward a global workforce of hundreds of thousands of professionals, establish a joint Center of Excellence, and train and certify 30,000 PwC professionals on Claude.\n\n[Read more](https://www.anthropic.com/news/pwc-expanded-partnership)\n\n### Anthropic forms $200 million partnership with the Gates Foundation\n\n[Read more](https://www.anthropic.com/news/gates-foundation-partnership)\n\n### Introducing Claude for Small Business\n\nWe're launching Claude for Small Business, a package of connectors and ready-to-run workflows that put Claude inside the tools small businesses use every day.\n\n[Read more](https://www.anthropic.com/news/claude-for-small-business)\n\n[/](https://www.anthropic.com/)\n\n### Products\n\n- [Claude](https://claude.com/product/overview)\n- [Claude Code](https://claude.com/product/claude-code)\n- [Claude Code Enterprise](https://claude.com/product/claude-code/enterprise)\n- [Claude Cowork](https://claude.com/product/cowork)\n- [Claude Security](https://claude.com/product/claude-security)\n- [Claude for Chrome](https://claude.com/chrome)\n- [Claude for Slack](https://claude.com/claude-for-slack)\n- [Claude for Microsoft 365](https://claude.com/claude-for-microsoft-365)\n- [Skills](https://www.claude.com/skills)\n- [Max plan](https://claude.com/pricing/max)\n- [Team plan](https://claude.com/pricing/team)\n- [Enterprise plan](https://claude.com/pricing/enterprise)\n- [Download app](https://claude.ai/download)\n- [Pricing](https://claude.com/pricing)\n- [Log in to Claude](https://claude.ai/)\n\n### Models\n\n- [Mythos Preview](https://www.anthropic.com/glasswing)\n- [Opus](https://www.anthropic.com/claude/opus)\n- [Sonnet](https://www.anthropic.com/claude/sonnet)\n- [Haiku](https://www.anthropic.com/claude/haiku)\n\n### Solutions\n\n- [AI agents](https://claude.com/solutions/agents)\n- [Code modernization](https://claude.com/solutions/code-modernization)\n- [Coding](https://claude.com/solutions/coding)\n- [Customer support](https://claude.com/solutions/customer-support)\n- [Education](https://claude.com/solutions/education)\n- [Financial services](https://claude.com/solutions/financial-services)\n- [Government](https://claude.com/solutions/government)\n- [Healthcare](https://claude.com/solutions/healthcare)\n- [Legal](https://claude.com/solutions/legal)\n- [Life sciences](https://claude.com/solutions/life-sciences)\n- [Nonprofits](https://claude.com/solutions/nonprofits)\n- [Security](https://claude.com/solutions/security)\n- [Small business](https://claude.com/solutions/small-business)\n\n### Claude Platform\n\n- [Overview](https://claude.com/platform/api)\n- [Developer docs](https://platform.claude.com/docs)\n- [Pricing](https://claude.com/pricing#api)\n- [Marketplace](https://claude.com/platform/marketplace)\n- [Regional compliance](https://claude.com/regional-compliance)\n- [Claude on AWS](https://claude.com/partners/claude-on-aws)\n- [Google Cloud’s Vertex AI](https://claude.com/partners/google-cloud-vertex-ai)\n- [Microsoft Foundry](https://claude.com/partners/microsoft-foundry)\n- [Console login](https://platform.claude.com/)\n\n### Resources\n\n- [Blog](https://claude.com/blog)\n- [Claude partner network](https://claude.com/partners)\n- [Community](https://claude.com/community)\n- [Connectors](https://claude.com/connectors)\n- [Courses](https://www.anthropic.com/learn)\n- [Customer stories](https://claude.com/customers)\n- [Engineering at Anthropic](https://www.anthropic.com/engineering)\n- [Events](https://www.anthropic.com/events)\n- [Inside Claude Code](https://www.anthropic.com/product/claude-code)\n- [Inside Claude Cowork](https://www.anthropic.com/product/claude-cowork)\n- [Inside Claude Enterprise](https://www.anthropic.com/product/enterprise)\n- [Inside Claude Security](https://www.anthropic.com/product/security)\n- [Plugins](https://claude.com/plugins)\n- [Powered by Claude](https://claude.com/partners/powered-by-claude)\n- [Service partners](https://claude.com/partners/services)\n- [Startups program](https://claude.com/programs/startups)\n- [Tutorials](https://claude.com/resources/tutorials)\n- [Use cases](https://claude.com/resources/use-cases)\n\n### Help and security\n\n- [Availability](https://www.anthropic.com/supported-countries)\n- [Status](https://status.anthropic.com/)\n- [Support center](https://support.claude.com/en/)\n\n### Company\n\n- [Anthropic](https://www.anthropic.com/company)\n- [Careers](https://www.anthropic.com/careers)\n- [Economic Futures](https://www.anthropic.com/economic-index)\n- [Research](https://www.anthropic.com/research)\n- [News](https://www.anthropic.com/news)\n- [Claude’s Constitution](https://www.anthropic.com/constitution)\n- [Responsible Scaling Policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)\n- [Security and compliance](https://trust.anthropic.com/)\n- [Transparency](https://www.anthropic.com/transparency)\n\n### Terms and policies\n\n- [Privacy policy](https://www.anthropic.com/legal/privacy)\n- [Consumer health data privacy policy](https://www.anthropic.com/legal/consumer-health-data-privacy-policy)\n- [Responsible disclosure policy](https://www.anthropic.com/responsible-disclosure-policy)\n- [Terms of service: Commercial](https://www.anthropic.com/legal/commercial-terms)\n- [Terms of service: Consumer](https://www.anthropic.com/legal/consumer-terms)\n- [Usage policy](https://www.anthropic.com/legal/aup)\n\n© 2026 Anthropic PBC\n\n- [https://www.linkedin.com/company/anthropicresearch](https://www.linkedin.com/company/anthropicresearch)\n- [https://x.com/AnthropicAI](https://x.com/AnthropicAI)\n- [https://www.youtube.com/@anthropic-ai](https://www.youtube.com/@anthropic-ai)\n\n  Higher usage limits for Claude and a compute deal with SpaceX \\ Anthropic  ",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://www.anthropic.com/news/higher-limits-spacex"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: https://www.anthropic.com/news/higher-limits-spacex",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://www.anthropic.com/news/higher-limits-spacex",
      "subtitles": null,
      "url": "https://www.anthropic.com/news/higher-limits-spacex",
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

 I've got the primary source for the May 6 changes locked down. Now I need to track down a few more things — specifically the May 13 announcement about Claude Code's weekly limits increasing by 50%, which looks like it came from a @ClaudeDevs tweet, plus I need to verify the timeline on the third-party agent SDK credits, which involved a ban on April 4 and then a reinstatement on May 14. Let me dig into finding those primary sources.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:50:51.688970Z",
  "stop_timestamp": "2026-05-18T11:50:51.941843Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01AYrzouUdJLhDokq3WJtkVW",
  "name": "web_search",
  "input": {
    "query": "Anthropic Claude Code weekly limits 50% July 13 ClaudeDevs announcement"
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
  "tool_use_id": "toolu_01AYrzouUdJLhDokq3WJtkVW",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Code Increases Weekly Limits by 50% Through July 13, 2026: Anthropic's Anti-Codex Move",
      "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pasqualepillitteri.it",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pasqualepillitteri.it",
        "site_name": "Pasquale Pillitteri"
      },
      "is_missing": false,
      "text": "On May 13, 2026 Anthropic raises Claude Code weekly limits by 50% through July 13 for Pro, Max, Team and Enterprise. Defensive move against Codex.\n\nUpdate May 15, 2026: Anthropic manually reset the 5-hour and weekly counters for Pro, Max, Team and Enterprise plans. Read the analysis of the reset. The original @ClaudeDevs post reports a single line, accompanied by a graphic showing the new caps per plan: \"Claude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users.\" The expiration date, July 13, sets the promo's duration at exactly two months, the same interval already used for the \"Claude 2x\" promo of spring 2026 that many users thought would last longer. Claude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users. — ClaudeDevs (@ClaudeDevs) May 13, 2026 · The context is anything but neutral. Three minutes after the official announcement, the @bridgemindai account published a comment that collected thousands of interactions within hours: \"Claude Code just raised weekly limits by 50%. This \n\nWhile Anthropic was defending its user base by raising the caps, OpenAI launched on the very same May 13, 2026 a mirror-image, symmetrical acquisition play. The @OpenAIDevs account posted a few hours before the @ClaudeDevs tweet an announcement aimed directly at the CTOs of enterprise Claude Code customers, with an offer that leaves no room for strategic interpretation: two months of free Codex usage for new users, reserved for eligible enterprise customers who switch in the next thirty days. Want to (officially) use Codex at work? Send this post to your CTO to bring your team to Codex. Eligible enterprise customers who switch in the next 30 days get 2 free months of Codex usage for new users. — OpenAI Developers (@OpenAIDevs) May 13, 2026 · The symmetry of the two May 13 moves is the most interesting data point for anyone trying to read the market's geometry.\n\nclaude code anthropic claude code weekly limits codex vs claude code openai codex anti-codex claude code limits increase claude code 2026 anthropic codex move claude code rate limits ... On May 13, 2026 at 2:19 PM San Francisco time, the official @ClaudeDevs account announced a 50% increase in Claude Code weekly limits for all Pro, Max, Team and seat-based Enterprise users, with an expiration date set for July 13, 2026. The move comes seven days after the doubling of hourly limits on May 6 and follows by one month the removal of peak hours for Pro and Max, marking Anthropic's third consecutive intervention on delivered capacity in five weeks. It's no coincidence: the competitive pressure from OpenAI's Codex, which consumes up to 4.2 times fewer tokens for equivalent tasks, is eroding the Claude Code user base seriously enough to push Anthropic into an explicit defensive maneuver.\n\nThe chosen timing, the same day as the Anthropic announcement with a few hours of head start, has two possible readings. The first is pure coincidence, even though the statistical probability of two competing announcements on the same niche on the same day is very low. The second is that OpenAI knew the Anthropic move was coming, knowledge obtainable either via an internal leak or by observing Anthropic's typical pattern of publishing rate limit announcements on Tuesdays from 2:00 PM PT onwards. The second reading is the more plausible for anyone familiar with the communication rhythms of the two companies. The math behind the two free months has to be framed within Codex's enterprise pricing structure. A typical seat-based contract starts at 30 dollars per user per month, scaling down to lower rates for large teams. Two free months on a fifty-developer team translate into between 3,000 and 5,000 dollars of real credit, a meaningful figure even for mid-market companies.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
        "search_provider": "anthropic",
        "age": "18 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Weekly Limits Just Jumped 50% Through July 13: What Pro, Max, and Team Users Should Do With the Extra Quota",
      "url": "https://apidog.com/blog/claude-code-weekly-limits-50-percent-increase-july-2026/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "apidog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=apidog.com",
        "site_name": "Apidog"
      },
      "is_missing": false,
      "text": "Anthropic raised Claude Code weekly limits 50% through July 13, 2026. What changed for Pro, Max, Team, and Enterprise, plus how to use the extra quota.\n\nAnthropic raised Claude Code weekly limits 50% through July 13, 2026. What changed for Pro, Max, Team, and Enterprise, plus how to use the extra quota. ... Anthropic raised Claude Code weekly usage limits by 50%, effective immediately and running through July 13 at 6PM PDT (1AM GMT, July 14). It is live on every paid plan (Pro, Max, Team, and seat-based Enterprise) and applies everywhere Claude Code runs: CLI, IDE extensions, the desktop app, and the web. There is nothing to opt into. The new ceiling is already on your account. The interesting part is what this stacks on top of. Last week, Anthropic doubled the 5-hour limits. Combined, that is a 2x boost to your short-window quota and a 1.5x boost to your weekly cap, all live at the same time, all without a price increase. For two months you get a Claude Code account that runs significantly hotter than it did in April.\n\nFirst, capacity. Anthropic has been provisioning new compute aggressively through Q1 and Q2 of 2026. When you have spare capacity, the cheapest way to deepen platform loyalty is to give existing paying users more of what they are already paying for. It also flushes out usage patterns that inform future pricing tiers. Second, competition. Codex shipped its own /goal autonomous agent loop a few weeks ago, and OpenAI has been quietly bumping rate limits on its developer plans too. The 50% lift through July 13 is a defensive move against engineering teams who were starting to split their workloads across vendors. Worth noting: the temporary window matters. July 13 at 6PM PDT is when the boost ends. Anthropic has not said whether the new ceiling will become permanent, drop back to baseline, or land somewhere in between. Plan accordingly. Generic “more usage” coverage misses the point.\n\nFor people who do not want to pay for a Claude Code plan, the free Claude API access guide covers the paths Anthropic and partners offer. Those are separate from Claude Code’s paid quota and are not affected by this 50% increase. The 50% lift only applies to Pro, Max, Team, and seat-based Enterprise. To set expectations correctly, this update does not: Change Claude API rate limits for direct API users (those are governed by your Anthropic API account, not your Claude Code plan) ... It is a usage cap lift, nothing more, nothing less. The value is in what you do with the extra room. When exactly does the 50% increase end? July 13, 2026 at 6PM PDT (1AM GMT, July 14). After that, Anthropic has not announced what the ceiling becomes. Assume it reverts to baseline unless they say otherwise. Do I need to do anything to enable it? No. The limits are already raised on your account.\n\nWhat if I upgrade to a different plan during the window? Anthropic has not published guidance on this specifically. Based on how their usage windows have worked historically, the new tier’s limits apply at the new (already-raised) levels from the moment you upgrade. Does this affect Claude Code on the Anthropic API plans? No. This change is to Claude Code plans only (Pro, Max, Team, seat-based Enterprise). If you call Claude through the Anthropic API directly, your rate limits are governed separately and have not changed. Will this become permanent? Unknown. Anthropic explicitly framed it as a window through July 13. Treat the next eight weeks as a chance to test whether you actually need the higher ceiling, then decide based on real usage data. ... What the weekly limits are, and what 50% more meansWhy Anthropic is doing this nowWhat the 50% increase actually unlocksLonger-horizon agent runsBigger codebase contextMulti-agent workflowsHeavier MCP server usageThe smart play for the next",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://apidog.com/blog/claude-code-weekly-limits-50-percent-increase-july-2026/",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code weekly limits increasing 50% till July 13 | Hacker News",
      "url": "https://news.ycombinator.com/item?id=48126429",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ycombinator.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ycombinator.com",
        "site_name": "Hacker News"
      },
      "is_missing": false,
      "text": "I just bumped my Claude account down from the £200/month option to £18/month. I use Real-Claude to validate the decisions of DeepSeek, which seems to not get quite as much of the fine details as Real-Claude does. Once they&#x27;re pointed out though, DeepSeek is fine, and off to the races · Won&#x27;t go back, especially since their new Opus 4.7 is such a disaster",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://news.ycombinator.com/item?id=48126429",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Announces Increased Claude Code Quotas: Weekly Limit Increased by 50% Until July 13",
      "url": "https://www.aibase.com/news/27977",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aibase.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aibase.com",
        "site_name": "AIbase"
      },
      "is_missing": false,
      "text": "Anthropic recently announced that the weekly usage limit for its developer tool Claude Code has been temporarily increased by 50%, and this adjustment will remain in effect until July 13, 2026. Notably, this 50% increase in quota can be combined with the &quot;double to 5 hours&quot; limit that took ...\n\nAnthropic recently announced that the weekly usage limit for its developer tool Claude Code has been temporarily increased by 50%, and this adjustment will remain in effect until July 13, 2026. Notably, this 50% increase in quota can be combined with the \"double to 5 hours\" limit that took effect last week, meaning developers will have significantly higher code generation and processing capabilities over the next two months. This quota adjustment takes effect automatically, and users do not need to perform any additional configuration or application. As a core tool in Anthropic's developer ecosystem, Claude Code has been renowned for its deep understanding of complex codebases and efficient execution of programming tasks since its launch. In the current context of explosive growth in global AI-native application development, Anthropic's continuous accumulation of quota benefits clearly aims to reduce the cost of trial and error for developers, attracting more frequent users to deeply i\n\nThis resource allocation targeting a specific time period not only reflects the importance of flexible computing power distribution in model competition but also indicates that AI programming assistance tools are moving from \"experimental support\" to a \"high-intensity productivity\" phase. As the window period approaches July 13, performance feedback from developers on the Claude series models in high-intensity projects may become an important reference for measuring Anthropic's appeal in the developer market. ... Welcome to the [AI Daily] column! This is your daily guide to exploring the world of artificial intelligence. Every day, we present you with hot topics in the AI field, focusing on developers, helping you understand technical trends, and learning about innovative AI product applications. ... Elon Musk's xAI has launched its first specialized programming AI agent, Grok Build, entering the developer market.\n\nAnthropic and the Gates Foundation announced a $200 million, four-year partnership to apply AI in healthcare, education, and agriculture for public good, aiming to improve global health, life sciences, and economic mobility..... ... Microsoft is gradually revoking Claude Code licenses for thousands of internal developers, a popular AI coding tool from Anthropic, as it shifts focus to its own GitHub Copilot CLI due to product integration and financial considerations. With June 30 marking the end of Microsoft's fiscal year, this license cancellation is seen as a cost-cutting measure, reflecting internal tool competition and resource optimization..... ... Tech company 'Moon's Dark Side' launches Kimi WebBridge browser plugin, using AI to simulate human actions for automating tasks like login, clicks, and scrolling. It leverages user login status and cookies to enhance browsing experience.....\n\nSecurity experts used Anthropic's AI model Claude Mythos to discover a privilege escalation vulnerability in Apple macOS 26.4.1. Starting from a standard local account, researchers analyzed and exploited two system flaws to gain root shell access, showcasing AI's new potential in OS security..... ... OpenAI announced that Codex can now be remotely controlled via the ChatGPT mobile app on Mac, allowing users to approve tasks, check progress, and issue new commands without being at the computer. Simply update the mobile ChatGPT to the latest version to load real-time status of Mac Codex and smoothly view conversation threads and approval requests..... ... On May 15, xAI launched the early beta of Grok Build, an intelligent coding assistant for software development, available exclusively to SuperGrok subscribers and runnable directly in the terminal.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.aibase.com/news/27977",
        "search_provider": "anthropic",
        "age": "5 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Weekly Limits Jump 50% Through July 13 • Buttondown",
      "url": "https://buttondown.com/loreai/archive/claude-code-weekly-limits-jump-50-through-july-13/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "buttondown.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=buttondown.com",
        "site_name": "Buttondown"
      },
      "is_missing": false,
      "text": "Claude Code Weekly Limits Jump 50% Through July 13 Preheader (hidden preview text) Claude Code Weekly Limits Jump 50% Through July 13 Outer wrapper Inner...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://buttondown.com/loreai/archive/claude-code-weekly-limits-jump-50-through-july-13/",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "🚨 AI News | TestingCatalog on X: \"Anthropic raise weekly limits on Claude Code by 50% until July 13! Sounds like Colossus 1 came into play! https://t.co/z8RETXdc7G\" / X",
      "url": "https://x.com/testingcatalog/status/2054643286560690262",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "x.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=x.com",
        "site_name": "X"
      },
      "is_missing": false,
      "text": "Anthropic raise weekly limits on Claude Code by 50% until July 13! Sounds like Colossus 1 came into play! ... Claude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users. ... Sign up now to get your own personalized timeline!\n\nAnthropic raise weekly limits on Claude Code by 50% until July 13! Sounds like Colossus 1 came into play! ... Claude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users. ... Sign up now to get your own personalized timeline! Sign up with GoogleSign up with Google. Opens in new tab ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://x.com/testingcatalog/status/2054643286560690262",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Boosted Claude Code Weekly Limits by 50 ...",
      "url": "https://www.zeniteq.com/en/anthropic-boosted-claude-code-weekly-limits-by-50-percent-through-july-13-w9b0tz",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "zeniteq.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=zeniteq.com",
        "site_name": "Zeniteq"
      },
      "is_missing": false,
      "text": "Zeniteq · Anthropic Boosted Claude Code Weekly Limits by 50 Percent Through July 13 | Zeniteq",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.zeniteq.com/en/anthropic-boosted-claude-code-weekly-limits-by-50-percent-through-july-13-w9b0tz",
        "search_provider": "anthropic",
        "age": "5 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic on X: \"We’re rolling out new weekly rate limits for Claude Pro and Max in late August. We estimate they’ll apply to less than 5% of subscribers based on current usage. https://t.co/X8FAss3jIC\" / X",
      "url": "https://x.com/AnthropicAI/status/1949898502688903593",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "x.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=x.com",
        "site_name": "X"
      },
      "is_missing": false,
      "text": "JavaScript is not available · We’ve detected that JavaScript is disabled in this browser. Please enable JavaScript or switch to a supported browser to continue using x.com. You can see a list of supported browsers in our Help Center · Help Center · Terms of Service Privacy Policy Cookie Policy Imprint Ads info © 2025 X Corp · Don’t miss what’s happening · People on X are the first to know · Log in · Sign up · See new posts · Conversation",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://x.com/AnthropicAI/status/1949898502688903593",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Limits Doubled: 5x More With Smart Routing",
      "url": "https://claudefa.st/blog/guide/development/higher-usage-limits",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudefa.st",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudefa.st",
        "site_name": "Claude Fast"
      },
      "is_missing": false,
      "text": "Read the announcement carefully and the wording is precise. Anthropic doubled the five-hour rate limits. They removed the peak-hour limit reduction. They did not say anything about weekly caps.\n\nAnthropic doubled Claude Code's 5-hour windows and removed peak throttling. Weekly caps unchanged. Here's how to absorb the new throughput. Stop configuring. Start shipping.Everything you're reading about and more.. Agentic Orchestration Kit for Claude Code. ... Anthropic announced this morning that Claude Code's 5-hour rate limits are doubling for every Pro, Max, Team, and seat-based Enterprise account. Peak-hour throttling on Pro and Max is gone. Opus API rate limits went up. All effective today. That's the headline. The amount of work you can push through Claude Code in a single 5-hour window just doubled. The part most people will misread: the weekly caps did not change. Today's announcement only touches the 5-hour rate-limit window and the peak-hour throttle. Your weekly bucket is the same size it was yesterday. What's different is the size of the spigot draining out of that bucket during your actual work hours.\n\nPeak-hour throttling on Claude Code is removed for Pro and Max. Anthropic had been quietly clipping limits during high-traffic windows. That clip is gone for the two tiers most likely to feel it. Opus API rate limits are raised considerably. Higher per-minute and per-day ceilings for anyone hitting Opus through the API. The published table is in their post. The why behind the change is short too. Anthropic is bringing on more compute. The headline partnership is a SpaceX/xAI deal that adds Colossus 1 -- 300 megawatts and 220,000+ NVIDIA GPUs -- to Claude infrastructure inside the next month. That sits on top of existing buildouts with AWS Trainium, Google TPUs, and NVIDIA GPU partners. More capacity, looser limits. For context on how Pro and Max compare structurally, and what counts toward the 5-hour window in the first place, see our Claude Code subscription guide and the usage optimization guide.\n\nRead the announcement carefully and the wording is precise. Anthropic doubled the five-hour rate limits. They removed the peak-hour limit reduction. They did not say anything about weekly caps. ... The 5-hour window resets every five hours. The weekly cap is the absolute ceiling on what you can spend across a rolling seven-day period. Today's change widens the per-window pipe; it does not widen the weekly tank. That sounds like a smaller win, and it is. But the working assumption that most users were maxing their weekly cap was already wrong. Most weren't. They were being clipped inside individual work sessions by the per-window throttle and the peak-hour cut, and walking away from a session with weekly headroom they couldn't actually consume during the hours they were at the keyboard. What this announcement does, in effect, is unblock your weekly cap during the hours you actually want to use it.\n\nToday's change is the largest single increase to Claude Code's per-window limits Anthropic has shipped. It also won't matter much for developers who route every task through Opus and run out of weekly room twice as fast as before. The pattern that does matter is the one underneath -- which model handles which step, what stays in context, and what gets compacted out. Opus on the bookends. Sonnet in the middle. Tight context, plan first, fast mode for the volume work. If you want this baked into your setup without configuring it yourself, the Code Kit ships with the routing wired into 18 specialist agents and the Agent Teams workflow on top. If you'd rather wire it manually, model selection, usage optimization, and efficiency patterns are the three posts to read next. Either way, today is a good day to stop running Opus by default. ... Stop configuring.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudefa.st/blog/guide/development/higher-usage-limits",
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

 I've confirmed the May 13 announcement from multiple sources, so now I'm tracking down the April 4 third-party agent ban and the May 14 reinstatement with Agent SDK credits. The @ClaudeDevs tweet serves as the primary Anthropic source for the May 13 date, and I need to dig into the Agent SDK credit specifics and check Anthropic's support documentation for usage limits.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:50:57.657364Z",
  "stop_timestamp": "2026-05-18T11:50:58.021080Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Kwr4WttDoWbKHWzSL5EPuH",
  "name": "web_search",
  "input": {
    "query": "Anthropic Agent SDK credits Claude subscription May 2026 third-party harness"
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
  "tool_use_id": "toolu_01Kwr4WttDoWbKHWzSL5EPuH",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Anthropic reinstates OpenClaw and third-party agent usage on Claude subscriptions — with a catch | VentureBeat",
      "url": "https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "venturebeat.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=venturebeat.com",
        "site_name": "VentureBeat"
      },
      "is_missing": false,
      "text": "A few hours ago, Anthropic announced ... for all paid subscribers, which they can now allocate specifically for &quot;programmatic&quot; uses, including external, third-party agents such as OpenClaw....\n\nEven with Anthropic’s massive expansion into new hardware—including access to the 300MW Colossus 1 data center and its 220,000+ GPUs—the demand for agentic workflows was outpacing sustainable supply. The new \"Agent SDK credit\" system solves this technical bottleneck by shifting the cost of inefficiency back to the user. By providing a dedicated dollar-amount credit, Anthropic no longer has to \"eat the difference\" on unoptimized third-party code. If an agent is inefficient and burns through tokens, it simply drains the user's new $20 to $200 Agent SDK credit budget faster, rather than exceeding the value of Anthropic's fixed monthly subscription tiers. The restoration of third-party access is segmented across Anthropic’s billing tiers, creating a new hierarchy of \"programmatic power.\" Here's how much Anthropic is giving each user in terms of the new Agent SDK credits (in addition to their normal Claude usage through Anthropic Claude products like Claude Code, Claude Cowork etc).\n\nGood news, OpenClaw fans — you can once again use your Claude AI subscription to power the hit, open source, autonomous AI agentic harness! But, there's a big catch with how it's being enacted. A few hours ago, Anthropic announced via its official developer communications account on X, @ClaudeDevs, that it is changing its Claude paid subscription tiers, introducing a new subcategory of \"Agent SDK\" credits for all paid subscribers, which they can now allocate specifically for \"programmatic\" uses, including external, third-party agents such as OpenClaw. The move is a major reversal from the Anthropic's policy introduced in early April 2026 that expressly prohibited its AI subscriptions from being used to power these kind of non-Anthropic agents and harnesses, after Anthropic said they caused capacity and service issues. The problem was that some Claude subscribers were paying $20 to $200 per month under Anthropic's Claude Pro and Max subscriptions, but consuming hundreds, even thousands \n\nTo understand why this restoration matters, one must look at the technical friction that led to the initial ban on April 4, 2026. Anthropic’s first-party tools, such as Claude Code and Claude Cowork, are engineered to maximize \"prompt cache hit rates\"—a method of reusing previously processed text to save on expensive compute cycles. Third-party tools like OpenClaw, which allow users to run autonomous agents through external services like Discord or Telegram, were often unoptimized for these efficiencies.Boris Cherny, Head of Claude Code, noted that these third-party services were \"really hard for us to do sustainably\" because they bypassed the caching mechanisms that allow Anthropic to offer flat-rate subscriptions. The sheer volume of data being re-processed by inefficient agents was threatening the stability of the system for the broader user base.\n\nCrucially, for those who found the original subscription model to be an infinite resource, this is a hard cap. Credits do not roll over, meaning the \"use it or lose it\" nature of the system forces a monthly reset of the developer’s budget. The licensing implications of this move are profound for the \"agentic\" ecosystem. By explicitly allowing third-party apps like Conductor and OpenClaw to authenticate via the Agent SDK, Anthropic is legitimizing a workflow it had previously attempted to block. However, in doing so, it has ended the era of \"compute arbitrage\".In the early part of 2026, a $20 Pro subscription could be leveraged via OpenClaw to run agents that would cost hundreds of dollars on a standard API key. By moving to a metered credit, Anthropic is aligning its subscription model with its Developer Platform (API). While it offers a \"free\" buffer for subscribers, it ensures that high-volume, production-level automation is moved to predictable, token-based billing.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What Anthropic's $200 Agent SDK Credit Means If You Run claude -p in Production - DEV Community",
      "url": "https://dev.to/vainamoinen/what-anthropics-200-agent-sdk-credit-means-if-you-run-claude-p-in-production-ce2",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dev.to",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dev.to",
        "site_name": "DEV Community"
      },
      "is_missing": false,
      "text": "On May 13, 2026, Anthropic emailed ... subscription rate-limit pool onto a separate monthly credit: Pro $20, Max 5x $100, Max 20x $200, Team $100/seat, Enterprise $200/seat....\n\nEffective June 15, 2026, claude -p and the Agent SDK move off your Claude subscription onto a $200 monthly credit at API list rates. Here is the math, the affected architectures, and three migration patterns. Tagged with claude, anthropic, ai, devops.\n\nIf you run claude -p from cron, CI, GitHub Actions, or any third-party Agent SDK harness against your Claude subscription, your bill structure changes on June 15, 2026. This is a technical look at what breaks, what the math says, and what to do before the deadline. On May 13, 2026, Anthropic emailed Max 20x subscribers that effective June 15, 2026, Claude Agent SDK usage (including the claude -p non-interactive command, Claude Code GitHub Actions, and third-party apps that auth with your subscription through the Agent SDK) moves off the subscription rate-limit pool onto a separate monthly credit: Pro $20, Max 5x $100, Max 20x $200, Team $100/seat, Enterprise $200/seat. The credit is metered at standard API list rates. Interactive Claude Code, Cowork, and chat stay on existing subscription limits. Overflow is opt-in \"extra usage\" billed at API list, default off.\n\nFor comparison, The Register documented one OpenClaw user extracting ~$236 of API-equivalent token value/month from a $20 Pro plan before the April crackdown, a ~12x ratio. Theo Browne's \"25x cut\" is a middle estimate; Sonnet-heavy fleets at the higher end of Max 20x weekly quotas (240–480h/week) could reach 150–175x in API-equivalent value. That math is reconstructed from documented quotas at API list; actual ratio varies by cache hit rate, prompt structure, and model mix. Boris Cherny (Head of Claude Code) told The Register Anthropic's \"systems are highly optimized for one kind of workload\" and \"our subscriptions weren't built for the usage patterns of these third-party tools,\" and is further quoted in VentureBeat as saying these workloads were \"really hard for us to do sustainably.\" Calling this a \"free $200 credit\" is technically accurate.\n\nIt's also a 25x effective cut for anyone making real use of the previous programmatic envelope. Lydia Hallie's clarification tweet from Anthropic was Community-Noted on X; the consensus correction: \"Previously, programmatic usage like claude -p counted toward subsidized subscription limits; starting June 15, it draws from a separate $20–$200 monthly credit metered at full API rates, while interactive limits remain unchanged.\" Once the credit is exhausted, SDK calls fail unless you've enabled extra usage (help center article 12429409). Mechanics: Default: OFF. SDK calls return rate-limit errors once the credit is gone. Manually toggleable per account. Pay-as-you-go at API list price, no subscription discount. Supports a monthly cap in dollars. Set it. For any unattended claude -p workload, the correct sequence: enable extra usage, set a hard monthly cap, write the cap into your runbook.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://dev.to/vainamoinen/what-anthropics-200-agent-sdk-credit-means-if-you-run-claude-p-in-production-ce2",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic splits billing again: Agent SDK gets separate credit pools - The New Stack",
      "url": "https://thenewstack.io/anthropic-agent-sdk-credits/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "thenewstack.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=thenewstack.io",
        "site_name": "The New Stack"
      },
      "is_missing": false,
      "text": "The credit covers programmatic usage, i.e., Claude Agent SDK, claude -p, Claude Code GitHub Actions, and third-party apps built on the Agent SDK. The new policy draws a stark line in the sand between how programmatic usage and interactive usage ...\n\nMar 14th 2026 9:00am, by Darryl K. Taft · Mastra empowers web devs to build AI agents in TypeScript ... Anthropic splits billing for Agent SDK usage starting June 15. New monthly credit pools separate programmatic usage from interactive chat subscriptions. ... Anthropic announced this week that programmatic usage, including third-party apps built on Agent SDK, will draw from a new monthly credit pool, starting June 15. In a Wednesday X post, the company stated that Claude paid-subscriptions will soon be eligible for a monthly Agent SDK credit. The credit covers programmatic usage, i.e., Claude Agent SDK, claude -p, Claude Code GitHub Actions, and third-party apps built on the Agent SDK. The new policy draws a stark line in the sand between how programmatic usage and interactive usage are billed. For example, chatting with Claude on the web, desktop, or mobile, using Claude Code in the terminal, and using Claude Cowork will still count against typical subscription limits.\n\nAnthropic's Claude Code agent view is a better dashboard. So why aren't developers convinced? ... Apr 12th 2025 7:00am, by Damon M. Garn · Pagoda: A Web Development Starter Kit for Go Programmers ... Java 26 lands without an LTS badge. Here's why developers should care anyway. Mar 18th 2026 9:35am, by Darryl K. Taft ... Feb 10th 2026 12:58pm, by Darryl K. Taft · BellSoft bets Java expertise can beat hardened container wave · Jan 26th 2026 3:00pm, by Darryl K. Taft · Java Developers Get Multiple Paths To Building AI Agents · Dec 26th 2025 7:02am, by Darryl K. Taft · \"Real maturity problems\": Not every developer is thrilled with Bun after Anthropic acquisition ... Mar 14th 2026 9:00am, by Darryl K. Taft · WebAssembly is everywhere. Here's how it works ... Wasm vs. JavaScript: Who wins at a million rows? ... Feb 14th 2026 7:00am, by Darryl K. Taft · Who will maintain the web when PHP's veterans retire?\n\nMay 13th 2026 11:27am, by Steven J. Vaughan-Nichols · I tested OpenAI's three claims about GPT-5.5 Instant, and only one fully held up ... Anthropic's Claude Code agent view is a better dashboard. So why aren't developers convinced? ... Apr 19th 2026 10:00am, by Darryl K. Taft · MCP is everywhere, but don't panic. Here's why your existing APIs still matter. Mar 23rd 2026 5:00am, by Camille Crowell-Lee and Morgan Fine · Why PHP performance keeps getting bumped from the roadmap · May 6th 2026 10:00am, by Matthew Weier O’Phinney · Why Postgres wants NVMe on the hot path, and S3 everywhere else ... OpenAI's Daybreak and Anthropic's Glasswing have nearly identical benchmarks — and 3 of the same partners ... May 13th 2026 9:00am, by Darryl K. Taft · Jensen Huang and Bill McDermott bet on OpenShell to secure enterprise AI agents · May 12th 2026 4:08pm, by Darryl K.\n\nWhy agent harnesses fail inside cloud-native systems ... Why Prometheus couldn't see Cilium metrics at 2 a.m. ... Edera spent years calling KVM less secure. Here's why it changed its mind. Mar 25th 2026 2:22pm, by Steven J. Vaughan-Nichols · Minimus aims to solve one of open-source's long-festering problems ... Mar 18th 2026 9:24am, by Darryl K. Taft · Fivetran's CPO: Closed data stacks won't survive the agent era ... Edera spent years calling KVM less secure. Here's why it changed its mind. Mar 25th 2026 2:22pm, by Steven J. Vaughan-Nichols · Your Kubernetes isn't ready for AI workloads, and drift is the reason ... Feb 24th 2026 11:00am, by B. Cameron Gain · Merging To Test Is Killing Your Microservices Velocity ... May 13th 2026 9:48am, by Chris J. Preimesberger · Jensen Huang and Bill McDermott bet on OpenShell to secure enterprise AI agents ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://thenewstack.io/anthropic-agent-sdk-credits/",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic June 15 Claude subscription billing overhaul: Full interpretation of the 5 key points of the Agent SDK separate billing pool - Apiyi.com Blog",
      "url": "https://help.apiyi.com/en/anthropic-claude-subscription-agent-sdk-billing-split-june-2026-en.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "apiyi.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=apiyi.com",
        "site_name": "Apiyi.com Blog"
      },
      "is_missing": false,
      "text": "The Agent SDK, the claude -p command, Claude Code GitHub Actions, and all third-party Agent applications—including OpenClaw, Conductor, Zed, and Jean—will be removed from the existing subscription usage pool and migrated to a brand-new, ...\n\nOn the surface, this split might look like a simple price hike. However, looking at Anthropic's own supply-and-demand structure, two forces are at play. First, token supply is struggling to keep up with demand. Since the beginning of 2026, the actual usage of Claude models has continued to grow super-linearly. Following the launch of Sonnet 4.6 and Opus 4.7, inference compute has remained tight, forcing Anthropic to reallocate resources to protect the core interactive experience. Second, there is the issue of \"subscription arbitrage\" caused by third-party Agent frameworks like OpenClaw. Simply put, some users pay only $20 to $200 per month for a subscription but use tools like OpenClaw to run long-cycle tasks, consuming tokens worth hundreds or even thousands of dollars. Anthropic banned this usage in February, tightened the ban in April, and has now reopened it in May via this \"split-billing\" approach, which essentially formalizes cost accountability.\n\nWe recommend adding APIYI (apiyi.com) to your multi-model infrastructure evaluation list. It supports the entire Claude model family, offers transparent billing, and remains unaffected by subscription policy fluctuations, making it a stable alternative to your Anthropic subscription. Regardless of which path you choose, June 15, 2026, is a date worth marking on your calendar. We suggest performing a self-audit this week: How many of your Claude calls over the past month were programmatic, used the Agent SDK path, and would fall into the new credit pool? This number will determine whether you need to adjust your subscription tier, migrate workflows, or renegotiate contracts before June 15th. 🎯 Quick Decision Advice: If your monthly programmatic consumption is stable and exceeds your subscription credit limit, migrating to a pay-as-you-go API proxy solution is more cost-effective.\n\nAuthor's Note: A step-by-step guide to configuring both OpenAI-compatible mode and Claude native format in OpenClaw, including complete JSON configuration code, applicable model lists, and key differences. In OpenClaw (Open WebUI), there are two ways to connect to Large Language Models: OpenAI-compatible mode (openai-completions) and Claude native format (anthropic-messages). Many users aren't clear on the… ... Author's Note: A summary of all major OpenAI Codex updates from March 2026: Plugin ecosystem, Triggers for automated events, Security Agent, Windows release, and GPT-5.4 mini integration. March 2026 was a busy month for OpenAI Codex—with the Plugin system, automated Triggers, Security Agent, Windows version, and GPT-5.4 mini integration, they dropped five major updates at… ... Author's Note: I've compiled 20 verified prompts for Claude Code's /loop command, covering 6 key scenarios including PR reviews, deployment monitoring, code quality, security scanning, and log analysis, co\n\nThe /loop command in Claude Code is the most practical new feature as of March 2026—it transforms Claude Code from a \"one-off… ... Spent $200 on a monthly Claude Max 20x subscription, only to find you're using less than 10% of your quota each day? You're not alone. Many developers subscribe to the Max plan only to realize they \"don't know how to use it to its full potential\"—writing a few snippets of code or asking a couple… ... Author's Note: This article provides a detailed breakdown of the 7 key differences between Claude Opus 4.7 and 4.6, including a 3x boost in visual performance, a significant leap in coding capabilities, the new xhigh reasoning tier, and the Task Budgets feature. We also analyze how the new Tokenizer affects your actual costs, even though… ... Author's Note: A deep dive into all 60+ Claude Code environment variables, focusing on how CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS fixes the anthropic-beta header error on third-party platforms.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://help.apiyi.com/en/anthropic-claude-subscription-agent-sdk-billing-split-june-2026-en.html",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Just Metered the Agent SDK: What Breaks on June 15 · Dik Rana",
      "url": "https://dikrana.dev/blog/anthropic-agent-sdk-credit-split/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dikrana.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dikrana.dev",
        "site_name": "Dik Rana"
      },
      "is_missing": false,
      "text": "The monthly programmatic credit mirrors the subscription price: Pro $20, Max 5x $100, Max 20x $200 (The New Stack, 2026). The interactive Claude Code surface in the terminal continues to draw from the subscription pool and is unaffected.\n\nThe monthly programmatic credit mirrors the subscription price: Pro $20, Max 5x $100, Max 20x $200 (The New Stack, 2026). The interactive Claude Code surface in the terminal continues to draw from the subscription pool and is unaffected. Power users put the effective cost increase at 25 to 40 times for the programmatic slice (BigGo, 2026). The defensible read is that a $20 Pro subscription could previously drive roughly $500 of equivalent API workload, and Anthropic engineered the smallest bound that keeps harness builders inside the subscription product (InfoWorld, 2026). The April 2026 ban on third-party Agent SDK consumers, reversed on May 13 with the meter as the price of admission, is itself the story. The five-month gap between Anthropic’s April “encourage local development and experimentation with the Agent SDK and Claude-P” promise and the May meter is the load-bearing process complaint (BigGo, 2026).\n\nA Claude Code product manager publicly stated in April that the company wanted “to encourage local development and experimentation with the Agent SDK and Claude-P”; the last such promise arrived in April, after which Anthropic stopped responding (BigGo, 2026). The May meter contradicts the April promise. The silence in between is the process complaint Browne cites. The May 13 reversal-plus-meter is the final shape. Anthropic’s announcement explicitly frames it as a reinstatement of third-party Agent SDK access, with the credit pool as the price of admission (VentureBeat, 2026). The defensible read: no rational vendor can subsidise unbounded compute-loop arbitrage indefinitely. If subscription tiers are to survive at all, programmatic loops have to be metered separately. The meter is the smallest move that bounds the arbitrage while keeping harness builders inside the subscription product.\n\nThe honest tradeoffs: Codex is younger than Claude Code, the model-mix is different (GPT-5 family versus Opus and Sonnet), and the ecosystem of harnesses is thinner than Claude Code’s, though the gap is closing fast. For an Opus-heavy workload (long-context refactors, ambiguous specs) Codex is a regression on certain tasks. For many parallel-subagent workloads, the regression is small and the price stability is large. The 12-month conventional-wisdom flip is the highest-information sentence in the post. For the eighteen months prior to May 2026, the conventional wisdom in the agentic-coding community was that Anthropic was the price-stable subscription choice and OpenAI was the metered-API choice. The June 15 cutover flips that. OpenAI is now the price-stable subscription choice for programmatic Claude-equivalent workloads, and Anthropic is the metered choice for the same surface.\n\nPro $20, Max 5x $100, Max 20x $200, billed at full Anthropic API rates with no rollover (The New Stack, 2026). Team plans get a per-seat credit pool on a similar shape. Once the credit is exhausted, programmatic calls error out; the interactive Claude Code surface continues working from the subscription pool. Yes. The interactive Claude Code CLI continues to draw from the existing subscription pool and is unaffected. Only claude -p, the Agent SDK, Claude Code GitHub Actions, and third-party Agent SDK harnesses move to the programmatic credit pool (Anthropic support, 2026). Interactive use on the same plan is unchanged. OpenAI’s Codex CLI on ChatGPT Plus ($20) or Pro ($200) is the closest analog in May 2026 (OpenAI Codex pricing, 2026). Cursor and Gemini CLI are functional alternatives with different pricing shapes. Pylon ships against both Claude and Codex SDKs as a reference for how to keep the swap mechanical when a vendor reprices.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://dikrana.dev/blog/anthropic-agent-sdk-credit-split/",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Splits Claude Subscriptions: What Changes for Indie Hackers on June 15",
      "url": "https://devtoolpicks.com/blog/anthropic-splits-claude-subscriptions-agent-sdk-credit-june-2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "devtoolpicks.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=devtoolpicks.com",
        "site_name": "DevToolPicks"
      },
      "is_missing": false,
      "text": "Starting June 15, 2026, programmatic usage of Claude via subscription plans moves to a separate monthly credit pool. The change comes after months of friction: Anthropic banned third-party agents from subscriptions in April, briefly tested removing ...\n\nStarting June 15, Anthropic splits Claude subscriptions into interactive and programmatic pools. Here is what changes for indie hackers and what to do.\n\nYesterday, Anthropic announced a change that affects every developer using Claude Code for automation, CI pipelines, or third-party agent tools. Starting June 15, 2026, programmatic usage of Claude via subscription plans moves to a separate monthly credit pool. The change comes after months of friction: Anthropic banned third-party agents from subscriptions in April, briefly tested removing Claude Code from the Pro plan, and now has landed on a new model. This post explains exactly what changes, who is affected, and what to do before June 15. On May 13, via the official @ClaudeDevs account, Anthropic announced that Agent SDK and claude -p usage will draw from a new dedicated credit starting June 15, separate from your subscription's interactive usage limits. The specific things moving to the new credit pool: ... This is an important distinction. Most indie hackers who run Claude Code manually are not affected.\n\nSome subscribers were paying $20 to $200 per month while consuming hundreds to thousands of dollars in token value through third-party automation. Boris Cherny, head of Claude Code at Anthropic, described it bluntly: third-party tools operating outside the cache system are \"really hard to do sustainably.\" The credit system ends the compute arbitrage era, where a $20 Pro subscription could run agent workflows that would cost $500 on a direct API key. The reaction from the developer community is largely negative, framed around the difference between \"new credits\" and \"reduced value.\" Theo Browne, founder of T3.gg, warned that anyone using tools like Conductor, Zed, or claude -p in CI scripts has effectively had their usage cut by 25x due to the removal of subscription subsidization. He noted he now has to make the Claude Code experience on T3 Code \"significantly worse\" to avoid burning through the new credit ceiling.\n\nAnthropic engineer Lydia Hallie pushed back on the framing: \"You don't pay extra. It's the same subscription, same price per month. Interactive limits unchanged. Programmatic gets a new $20-$200 included credit.\" Both readings are technically accurate. The subscription price has not changed. The value delivered per dollar for heavy programmatic users has dropped significantly. ... You use Claude Code interactively (manual terminal sessions). Do nothing. Your workflow is unchanged and your subscription limits are not affected. You use claude -p in scripts or CI pipelines occasionally. Claim your Agent SDK credit before June 15. At $20-$200 per month in credit, occasional automation will likely stay within the credit ceiling. Monitor usage after June 15 to see where you land. You use Claude Code GitHub Actions on a few repos. Same as above. Claim the credit, watch your usage after the changeover.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://devtoolpicks.com/blog/anthropic-splits-claude-subscriptions-agent-sdk-credit-june-2026",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic has announced Claude Agent SDK credits, enabling third-party autonomous AI agent harnesses such as OpenClaw to run again. - GIGAZINE",
      "url": "https://gigazine.net/gsc_news/en/20260514-anthropic-claude-agent-sdk-credits/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "gigazine.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=gigazine.net",
        "site_name": "GIGAZINE"
      },
      "is_missing": false,
      "text": "Starting June 15, paid Claude plans can claim a dedicated monthly credit for programmatic usage. The credit card usage of: - Mariude Client SDK - claude -p - Claude Code GitHub Actions - Third-party apps built on the Agent SDK — ClaudeDevs (@ClaudeDevs) May 13, 2026 · Agent SDK credits are granted on an individual basis and cannot be shared or combined within a team. Unused credits are not carried over to the next month. Agent SDK usage is first consumed from monthly credits. After the credits are used up, you will be charged at the standard API rate only if additional usage is enabled. If additional usage is not enabled, Agent SDK requests will be suspended until the next renewal. Technology media outlet VentureBeat has described this measure as a policy shift by Anthropic. In April 2026, Anthropic restricted the use of Claude subscriptions with third-party agent tools such as OpenClaw, but this new system allows external agents like OpenClaw to be used via subscriptions once again.\n\nStarting June 15, paid Claude plans can claim a dedicated monthly credit for programmatic usage. The credit card usage of: - Mariude Client SDK - claude -p - Claude Code GitHub Actions - Third-party apps built on the Agent SDK — ClaudeDevs (@ClaudeDevs) May 13, 2026 · Agent SDK credits are granted on an individual basis and cannot be shared or combined within a team. Unused credits are not carried over to the next month. Agent SDK usage is first consumed from monthly credits. After the credits are used up, you will be charged at the standard API rate only if additional usage is enabled. If additional usage is not enabled, Agent SDK requests will be suspended until the next renewal. Technology media outlet VentureBeat has described this measure as a policy shift by Anthropic. In April 2026, Anthropic restricted the use of Claude subscriptions with third-party agent tools such as OpenClaw, but this new system allows external agents like OpenClaw to be used via subscriptions once again.\n\nFraming this as a free credit instead of a regression for users is wild. Now I have to make the Claude Code experience on T3 Code significantly worse in order to keep using the 25x subsidization provided on a Claude Code subscription. https://t.co/IFfTT7vdun — Theo - t3.gg (@theo) May 13, 2026 · XDA-Developers also points out that in Anthropic's efforts to separate coding use from AI interaction, it previously blocked third-party tools like OpenClaw from using subscription rate limits and instead required users to switch to API billing. One user, who hadn't used any third-party tools, was flagged by the detection logic because their git commit message contained the string 'HERMES.md,' and was charged $200.98 (approximately 31,700 yen) for API usage. XDA-Developers explains that Anthropic initially had no intention of refunding this charge, but did so after the case became widely known.\n\nMay 14, 2026 13:00:00 in AI, Web Service, Posted by log1i_yk\n\nAnthropic has announced the introduction of a monthly 'Agent SDK Credit' tier to Claude's paid plans, separating the use of the Claude Agent SDK, claude -p, Claude Code GitHub Actions, and third-party apps authenticated with the Agent SDK from the regular subscription tier. As a result, Pro, Max, Team, and Enterprise users will receive dedicated credits worth between $20 (approximately 3,100 yen) and $200 (approximately 31,000 yen) depending on their plan, while regular use of Claude chat and interactive Claude Code will continue to be subject to the existing subscription limits. Using the Claude Agent SDK with your Claude plan | Claude Help Center https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan Agent SDK credits are a monthly, dedicated usage allowance specifically for calling Claude from programs. They apply to using the Claude Agent SDK in your own projects, the non-interactive mode of Claude Code (claude -p), Claude Code GitHub Actions",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://gigazine.net/gsc_news/en/20260514-anthropic-claude-agent-sdk-credits/",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Aihola",
      "url": "https://aihola.com/article/claude-agent-sdk-credits",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aihola.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aihola.com",
        "site_name": "aiHola"
      },
      "is_missing": false,
      "text": "Pro gets $20 a month, Max 20x gets $200, and interactive Claude usage stays untouched. Anthropic&#x27;s support article lays out the breakdown: $20 for Pro and Team Standard seats, $100 for Max 5x and Team Premium seats, $200 for Max 20x and Enterprise ...\n\nOn April 4, Anthropic blocked Claude subscription authentication from working with third-party CLIs. The announcement came from Boris Cherny on X with about a day's notice, and the rationale was straightforward enough: subscribers paying $20 or $200 a month were piping their OAuth tokens into OpenClaw-style harnesses and burning what would have cost ten times that on the API. That was the actual problem. Not third-party tools as a category, but the math. A Max subscription costs $200; an equivalent month of heavy agentic API usage can run past $1,000. VentureBeat's coverage called the gap \"compute arbitrage\" and said the new credit ends the era. That's about right. That's the question Pro subscribers running automation should be asking. Before April, Agent SDK and claude -p calls drew from the same pool as interactive Claude Code, which meant the same subsidized headroom.\n\nAnd the $20 figure being identical to the Pro subscription itself? Makes the framing feel less like a bonus and more like Anthropic charging twice for the same money. The developer reactions VentureBeat quotes called it a significant reduction in the value of subscriptions. Hard to argue. The flip side: anyone who only uses Claude interactively will never notice this change. Their limits don't move. The split is targeted at programmatic users, and it's priced like API access because that's effectively what it is. The SDK change isn't landing in isolation. On May 13, Anthropic raised Claude Code's weekly limits by 50% through July 13 for Pro, Max, Team, and seat-based Enterprise users. That came on the heels of a May 6 announcement that doubled five-hour rate limits and stripped out peak-hour throttling for Pro and Max accounts. All of which traces back to the SpaceX deal for the compute capacity of the Colossus 1 data center in Memphis.\n\nIf you're using an API key through the Claude Developer Platform, none of this applies. Pay-as-you-go continues. No credit, no separation. The cleaner read on the whole move: Anthropic is converging its subscription and API products. Interactive use stays on subscriptions. Programmatic use, even when it wears a subscription badge, gets priced like the API. The era when a $20 plan could quietly pretend to be a $1,000 one is over. Tags:anthropicclaude-agent-sdkclaude-codeopenclawopencodeai-subscriptionsdeveloper-toolsapi-pricingai-billing ... Liza covers the rapidly evolving world of artificial intelligence, from breakthroughs in research labs to real-world applications reshaping industries. With a background in computer science and journalism, she translates complex technical developments into accessible insights for curious readers. ... Get the latest AI news, reviews, and deals delivered straight to your inbox.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aihola.com/article/claude-agent-sdk-credits",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What Anthropic's New Claude Billing Means for Zed Users — Zed's Blog",
      "url": "https://zed.dev/blog/anthropic-subscription-changes",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "zed.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=zed.dev",
        "site_name": "Zed"
      },
      "is_missing": false,
      "text": "Starting June 15, Anthropic is ... Code CLI), and another for third-party agent and SDK usage (anything running through ACP, claude -p, or other third-party tools)....\n\nYesterday Anthropic announced changes to how Claude subscriptions work when you use Claude Code through tools like Zed, rather than directly in the terminal. The details have been hard to parse, and we've been getting a lot of questions from Zed users about what it means in practice. So here's an overview of what's actually changing and what options you have moving forward. Starting June 15, Anthropic is splitting Claude subscription billing into two pools: one for using Claude through Anthropic's first-party tools (such as chat, or the official Claude Code CLI), and another for third-party agent and SDK usage (anything running through ACP, claude -p, or other third-party tools). If you use Claude Code through ACP (in Zed or anywhere else), that usage will no longer draw from your Claude Pro or Max subscription limits. Instead, it draws from a new monthly \"Agent SDK credit\" that Anthropic is adding to each plan: $20 for Pro, $100 for Max 5x, $200 for Max 20x.\n\nKeep using Claude with your subscription. If you want to keep using Claude with your Claude Pro or Max plan at your existing subscription limits, you can run Anthropic's official claude CLI in a terminal inside Zed instead of through ACP. When the official claude CLI runs in the terminal, it uses your subscription's limits, not the new credit. ... We're actively working on making TUI agents a first-class part of orchestrating agents in Zed. Stay tuned for next week's release of Terminal Threads. Use Zed's built-in agent with the provider that works for you. You can use Zed-hosted models, bring your own API keys from any supported provider, connect to Copilot, run local models through Ollama, or use DeepSeek. Bring your own agent. You can run any ACP compatible agent inside Zed. OpenCode, Codex, Factory, Cursor, and many more all work inside Zed. Several of these still offer rate-limited subscriptions that subsidize heavy usage.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://zed.dev/blog/anthropic-subscription-changes",
        "search_provider": "anthropic",
        "age": "4 days ago"
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

 I'm looking for the official Anthropic documentation or announcement about the Agent SDK credit and the May 13/14 release date.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:51:02.273750Z",
  "stop_timestamp": "2026-05-18T11:51:02.760644Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01AfWxerCNWxfXkLsDMmzZkt",
  "name": "web_fetch",
  "input": {
    "url": "https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan"
  },
  "message": "Fetching: https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan",
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
  "tool_use_id": "toolu_01AfWxerCNWxfXkLsDMmzZkt",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Use the Claude Agent SDK with your Claude plan | Claude Help Center",
      "url": "https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "---\ncanonical: https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan\nmeta-baggage: sentry-environment=production,sentry-release=c465b38b63c46a70130d4c09f8daaf7d8cef8f5e,sentry-public_key=187f842308a64dea9f1f64d4b1b9c298,sentry-trace_id=a22393914405e37d7e6369305b381ec2,sentry-org_id=2129,sentry-sampled=false,sentry-sample_rand=0.9777541007305427,sentry-sample_rate=0\nmeta-description:\nmeta-og:description:\nmeta-og:image: https://downloads.intercomcdn.com/i/o/lupk8zyo/792494/717b10d3ebd874823db64841659b/76f3062d78ebbb04863fb1de3ef9cca0.png\nmeta-og:title: Use the Claude Agent SDK with your Claude plan | Claude Help Center\nmeta-og:type: article\nmeta-robots: all\nmeta-sentry-trace: a22393914405e37d7e6369305b381ec2-327c4661589f1b8b-0\nmeta-twitter:description:\nmeta-twitter:image: https://downloads.intercomcdn.com/i/o/lupk8zyo/792494/717b10d3ebd874823db64841659b/76f3062d78ebbb04863fb1de3ef9cca0.png\nmeta-twitter:title: Use the Claude Agent SDK with your Claude plan | Claude Help Center\nmeta-viewport: width=device-width, initial-scale=1\ntitle: Use the Claude Agent SDK with your Claude plan | Claude Help Center\n---\n\n\n[Skip to main content](#main-content)\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/lupk8zyo/787776/ade321b9d8ff06050cb06ac0049d/d7ef4b66df4ff3851b5de741185c97ab.png)](https://support.claude.com/en/)\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\n* English\nFrançais\nDeutsch\nBahasa Indonesia\nItaliano\n日本語\n한국어\nPortuguês\nPусский\n简体中文\nEspañol\n繁體中文\n\nEnglish\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\n* English\nFrançais\nDeutsch\nBahasa Indonesia\nItaliano\n日本語\n한국어\nPortuguês\nPусский\n简体中文\nEspañol\n繁體中文\n\nEnglish\n\nSearch for articles...\n\n1. [All Collections](https://support.claude.com/en/)\n\n2. [Claude](https://support.claude.com/en/collections/4078531-claude)\n\n3. [Usage and limits](https://support.claude.com/en/collections/18031876-usage-and-limits)\n\n4. Use the Claude Agent SDK with your Claude plan\n\n# Use the Claude Agent SDK with your Claude plan\n\n Updated this week\n\nClaude subscription plans are now eligible to receive a monthly Agent SDK credit. This credit covers Claude Agent SDK usage, the `claude -p` command, and third-party apps built on the Agent SDK. This article explains what the credit covers, how it works, and how to claim it.\n\nAvailable on Pro, Max, Team, and Enterprise plans starting on June 15, 2026. Claude Platform accounts using an API key don’t receive a credit. Pay-as-you-go billing continues as before.\n\n\n\n## What’s changing\n\nStarting **June 15, 2026**, Claude Agent SDK and `claude -p` usage no longer counts toward your Claude plan’s usage limits. Your subscription usage limits stay the same and stay reserved for interactive use of Claude Code, Claude Cowork, and Claude.\n\n\n\nTo support Agent SDK use, eligible Pro, Max, Team, and Enterprise plan users can claim a separate monthly credit. The credit applies only to Agent SDK usage and refreshes with your billing cycle.\n\n\n\n## Monthly credit by plan\n\n| **Plan** | **Monthly credit** |\n| --- | --- |\n| Pro | $20 |\n| Max 5x | $100 |\n| Max 20x | $200 |\n| Team (Standard seats) | $20 |\n| Team (Premium seats) | $100 |\n| Enterprise (usage-based) | $20 |\n| Enterprise (seat-based Premium seats*) | $200 |\n\n*Members of seat-based Enterprise plans on Standard seats aren’t eligible to claim the Agent SDK monthly credit.\n\n\n\n---\n\n\n\n## What the credit covers\n\nThe Agent SDK monthly credit applies to:\n\n- Claude Agent SDK usage in your own projects (Python or TypeScript)\n\n- The `claude -p` command in Claude Code (non-interactive mode)\n\n- The Claude Code GitHub Actions integration\n\n- Third-party apps that authenticate with your Claude subscription through the Agent SDK\n\nThe credit doesn’t apply to:\n\n- Interactive Claude Code in the terminal or IDE\n\n- Claude conversations on the web, desktop, or mobile apps\n\n- Claude Cowork\n\n- Other features that draw from extra usage\n\n  \n\n---\n\n\n\n## How the credit works\n\n**Per-user, not pooled.** Credits belong to individual accounts. They can’t be shared or pooled across teammates.\n\n\n\n**Refreshes monthly.** Your credit resets at the start of each billing cycle. Unused credits don't roll over to the next billing cycle.\n\n\n\n**One-time opt-in.** You claim your credit through your Claude account once. After that, it refreshes automatically each cycle.\n\n\n\n**Drains first.** Agent SDK usage draws from your monthly credit before any other source.\n\n\n\n**Past the credit, usage moves to extra usage.** When your monthly credit runs out, additional Agent SDK usage flows to extra usage at standard API rates—but only if you’ve enabled extra usage. If extra usage isn’t enabled, Agent SDK requests stop until your credit refreshes.\n\n\n\n---\n\n\n\n## What stays the same\n\nThis change doesn’t affect:\n\n- **Subscription usage limits.** Your plan usage limits haven’t changed as part of this update.\n\n- **Interactive Claude Code.** Using Claude Code in the terminal or your IDE continues to use your subscription usage limits exactly as before.\n\n- **Claude conversations.** Web, desktop, and mobile chat continue to use subscription usage limits.\n\n- **API key users.** If you use the Agent SDK with an API key from the Claude Platform, nothing changes. Pay-as-you-go billing continues, and you don’t receive an Agent SDK monthly credit.\n\n  \n\n---\n\n\n\n## For Team and Enterprise admins\n\nIf you administer a Team or Enterprise account, here’s what to know:\n\n\n\n**Credits are per-user.** Each eligible user on your team claims their own credit. Credits can’t be pooled, transferred, or shared across the organization.\n\n\n\n**Production automation at scale.** The Agent SDK monthly credit is sized for individual experimentation and automation. Teams running shared production automation should use Claude Platform with an API key for predictable pay-as-you-go billing.\n\n\n\n**What you need to do.** Nothing right now. Eligible users on your team will receive an email with details and instructions to claim their credit before June 15, 2026.\n\n---\n\n\nRelated Articles\n\n[What is the Enterprise plan?](https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan)[Use Claude Code with your Pro or Max plan](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan)[How am I billed for my Enterprise plan?](https://support.claude.com/en/articles/11526368-how-am-i-billed-for-my-enterprise-plan)[Use Claude Code with your Team or Enterprise plan](https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan)[Claude Design subscription usage and pricing](https://support.claude.com/en/articles/14667344-claude-design-subscription-usage-and-pricing)\n\n**Did this answer your question?**\n\n😞\n\n😐\n\n😃\n\n[](#h_9ec8e36f83)\n\n[](#h_6248a95212)\n\n[](#h_399c2f3b5e)\n\n[](#h_8da53569bd)\n\n[](#h_97211e7cc9)\n\n[](#h_0a6be2fd8c)\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/487548/17213f6a445c8e6e874b1f4b/fad85208982e639d11b9108df895a293.png)](https://support.claude.com/en/)\n\n- [Product](https://www.anthropic.com/product)\n- [Research](https://www.anthropic.com/research)\n- [Company](https://www.anthropic.com/company)\n- [News](https://www.anthropic.com/news)\n- [Careers](https://www.anthropic.com/careers)\n\n- [Terms of Service - Consumer](https://www.anthropic.com/terms)\n- [Terms of Service - Commercial](https://www.anthropic.com/legal/commercial-terms)\n- [Privacy Policy](https://www.anthropic.com/privacy)\n- [Usage Policy](https://www.anthropic.com/aup)\n- [Responsible Disclosure Policy](https://www.anthropic.com/responsible-disclosure-policy)\n- [Compliance](https://trust.anthropic.com/)",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Use the Claude Agent SDK with your Claude plan | Claude Help Center",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Use the Claude Agent SDK with your Claude plan | Claude Help Center",
      "subtitles": null,
      "url": "https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan",
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

 I've got the official Anthropic source for the Agent SDK credits, and now I'm cross-referencing the May 13 Claude Code weekly limits increase with the @ClaudeDevs tweet as the primary source. I should also look into whether there were any manual resets on May 14-15 and check what changed on the free plan, since the user mentioned Claude.ai across Free, Pro, and Max tiers.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-18T11:51:08.194464Z",
  "stop_timestamp": "2026-05-18T11:51:08.699282Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01QqfxzSBTA2StL8AjemxvVh",
  "name": "web_search",
  "input": {
    "query": "Anthropic Claude Code usage limits support article May 2026 Pro Max"
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
  "tool_use_id": "toolu_01QqfxzSBTA2StL8AjemxvVh",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Anthropic doubles Claude Code limits, thanks to a deal with SpaceX | PCWorld",
      "url": "https://www.pcworld.com/article/3132997/anthropic-doubles-claude-code-limits-thanks-to-a-deal-with-spacex.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pcworld.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pcworld.com",
        "site_name": "PCWorld"
      },
      "is_missing": false,
      "text": "Thanks to the deal, Anthropic says it will double Claude Code five-hour usage limits for Claude Pro, Max, Team, and seat-based Enterprise plans, while also raising pay-per-token API rate limits for Claude’s powerful Opus models.\n\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our ... You'll get twice as much Claude Code during five-hour usage windows, after Anthropic struck a deal with a strange bedfellow. ... Anthropic has partnered with SpaceX to double Claude Code usage limits across Pro, Max, Team, and Enterprise plans, according to PCWorld. The deal provides access to SpaceX’s Colossus 1 data center featuring over 220,000 Nvidia GPUs, significantly boosting Anthropic’s computing capacity. This partnership marks a surprising shift, as Elon Musk previously criticized Anthropic but recently expressed being impressed after meetings with company staff. \n\nInstead of downgrading its most affordable Claude subscription plan by dropping access to Claude Code, Anthropic has instead doubled Claude Code usage rates for subscribers, starting today.\n\nSame here. By way of background for those who care, I spent a lot of time last week with senior members of the Anthropic team to understand what they do to ensure Claude is good for humanity and was impressed. Everyone I met was highly competent and cared a great deal about…— Elon Musk (@elonmusk) May 6, 2026 · Anthropic, meanwhile, has been straining to meet capacity demands, with the company recently mulling the idea of dropping Claude Code access from its $20-a-month Claude Pro plan. That hasn’t actually happened yet, but an Anthropic exec recently admitted that the company’s consumer plans weren’t built for token-hungry agentic tools like Claude Code and Cowork.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.pcworld.com/article/3132997/anthropic-doubles-claude-code-limits-thanks-to-a-deal-with-spacex.html",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
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
      "text": "Starting today, Claude is doubling Code’s five-hour limits for Pro, Max, Team, and Enterprise (seat-based) plans. The only plan not getting an upgrade is the free one. Claude Code will also remove “peak hours” limitations for Pro and Max accounts...\n\nAnthropic today announced that Claude is getting a big boost to usage limits, including doubling Code limits and stripping back on peak hour reductions. Starting today, Claude is doubling Code’s five-hour limits for Pro, Max, Team, and Enterprise (seat-based) plans. The only plan not getting an upgrade is the free one. Claude Code will also remove “peak hours” limitations for Pro and Max accounts. Beyond this, Claude API limits are being drastically increased. Tier 1, for example, is seeing a 1500% increase in maximum input tokens per minute, and a 900% increase to maximum output tokens per minute, with major boosts for other tiers as well. In other words, the Claude API just got a whole lot more powerful.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://9to5google.com/2026/05/06/claude-code-is-getting-higher-usage-limits-doubled-for-most-users/",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Increases Weekly Limits by 50% Through July 13, 2026: Anthropic's Anti-Codex Move",
      "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pasqualepillitteri.it",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pasqualepillitteri.it",
        "site_name": "Pasquale Pillitteri"
      },
      "is_missing": false,
      "text": "TL;DR: Anthropic raises Claude Code weekly limits by 50% from May 13, 2026 through July 13, 2026. The promo is live for Pro, Max, Team and seat-based Enterprise. The free plan is excluded.\n\nTL;DR: Anthropic raises Claude Code weekly limits by 50% from May 13, 2026 through July 13, 2026. The promo is live for Pro, Max, Team and seat-based Enterprise. The free plan is excluded. Stated reading: infrastructure capacity. Real reading: retaining users who are migrating to Codex because of its significantly lower token consumption. Update May 15, 2026: Anthropic manually reset the 5-hour and weekly counters for Pro, Max, Team and Enterprise plans. Read the analysis of the reset. The original @ClaudeDevs post reports a single line, accompanied by a graphic showing the new caps per plan: \"Claude Code weekly limits are increasing 50%, now through July 13. \n\nLive now for all Pro, Max, Team, and seat-based Enterprise users.\" The expiration date, July 13, sets the promo's duration at exactly two months, the same interval already used for the \"Claude 2x\" promo of spring 2026 that many users thought would last longer.\n\nClaude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users. — ClaudeDevs (@ClaudeDevs) May 13, 2026 · The context is anything but neutral. Three minutes after the official announcement, the @bridgemindai account published a comment that collected thousands of interactions within hours: \"Claude Code just raised weekly limits by 50%. This puts Claude Code rate limits on par with Codex. I cancelled my Max plan twice over rate limits.\" The key phrase, \"on par with Codex\", is exactly the competitive reading that Anthropic itself didn't want to make explicit but that the market picked up immediately. \n\nWhile Anthropic was defending its user base by raising the caps, OpenAI launched on the very same May 13, 2026 a mirror-image, symmetrical acquisition play. The @OpenAIDevs account posted a few hour",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
        "search_provider": "anthropic",
        "age": "18 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic increases Claude Code and API usage limits | Let's Data Science",
      "url": "https://letsdatascience.com/news/anthropic-increases-claude-code-and-api-usage-limits-735fd0ac",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "letsdatascience.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=letsdatascience.com",
        "site_name": "Let's Data Science"
      },
      "is_missing": false,
      "text": "Anthropic published a blog post ... that lists three immediate product changes: doubling Claude Code&#x27;s five-hour rate limits for Pro, Max, Team, and seat-based Enterprise plans; removing the peak hours limit reduction on Claude ...\n\nAnthropic published a blog post titled \"Higher usage limits for Claude and a compute deal with SpaceX\" on May 6, 2026, that lists three immediate product changes: doubling Claude Code's five-hour rate limits for Pro, Max, Team, and seat-based Enterprise plans; removing the peak hours limit reduction on Claude Code for Pro and Max accounts; and materially raising API rate limits for `Claude Opus` models, with a rate table in the announcement showing substantially higher per-minute token throughput for multiple tiers. \n\nThe blog post attributes the increases to a new compute partnership with SpaceX, stating access to the Colossus 1 facility will provide more than 300 megawatts of additional capacity and over 220,000 NVIDIA GPUs \"within the month.\" 9to5Google reports specific uplifts, citing a 1500% increase to Tier 1 maximum input tokens per minute and a 900% increase to maximum output tokens per minute for that tier.\n\nSources for the reported facts include Anthropic's May 6, 2026 blog post and supporting documentation, 9to5Google's coverage summarizing percentage increases, the March support article on a prior off-peak promotion, and earlier BBC reporting on user issues with Claude Code. The update materially increases per-user and per-tier throughput and is backed by a large compute agreement, which matters to practitioners running production workloads. It is significant but not a frontier research or paradigm-shifting event. ... A 5-minute Monday brief on AI & data science. Curated, no fluff.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://letsdatascience.com/news/anthropic-increases-claude-code-and-api-usage-limits-735fd0ac",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Limits Doubled: Anthropic Uses SpaceX Compute Expansion to Ease Usage Constraints",
      "url": "https://www.knightli.com/en/2026/05/09/anthropic-claude-code-higher-limits-spacex-compute/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "knightli.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=knightli.com",
        "site_name": "KnightLi Blog"
      },
      "is_missing": false,
      "text": "Anthropic says the following three changes took effect on the day of the announcement: Claude Code’s five-hour rate limit doubled for Pro, Max, Team, and seat-based Enterprise plans. Peak-hour limit reductions for Pro and Max Claude Code accounts were removed.\n\nOn May 6, 2026, Anthropic announced higher usage limits for Claude Code and the Claude API, along with a new compute partnership with SpaceX. For everyday users, the most direct change is more usable capacity for Claude Code. For developers and enterprises, the larger point is that Claude’s inference capacity is still expanding. ... Higher limits for Claude Code and the Claude API. New compute capacity from SpaceX data centers. Anthropic says the following three changes took effect on the day of the announcement: Claude Code’s five-hour rate limit doubled for Pro, Max, Team, and seat-based Enterprise plans. Peak-hour limit reductions for Pro and Max Claude Code accounts were removed. \n\nIt is also about power, data centers, GPUs, TPUs, networking, and global deployment capacity. For developers, the most important change is the doubled five-hour Claude Code limit.\n\nFor everyday Claude Code users, the most important points are the doubled five-hour limit and the removal of peak-hour reductions for Pro and Max. For API and enterprise users, the main points are higher Opus rate limits and Anthropic’s longer-term compute partnerships with SpaceX, Amazon, Google, Microsoft, NVIDIA, and Fluidstack. AI tools are increasingly infrastructure services. Model quality matters, but stable capacity, regional compliance, limit policy, and cost control also shape the user experience. ... A practical guide to common causes of Claude and Claude Code account suspension, usage limits, and … 2026-05-09 · What are the differences between Claude Opus 4.7, Claude Sonnet 4.6, and Claude Haiku 4.5? \n\nThis … 2026-05-08 · A practical walkthrough of connecting Claude to Fusion 360: enabling the API/MCP service, connecting …",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.knightli.com/en/2026/05/09/anthropic-claude-code-higher-limits-spacex-compute/",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Daily Limit in 2026: What Free, Pro, and Max Actually Reset | LaoZhang AI Blog",
      "url": "https://blog.laozhang.ai/en/posts/claude-daily-limit",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "laozhang.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=laozhang.ai",
        "site_name": "LaoZhang AI Blog"
      },
      "is_missing": false,
      "text": "As of April 8, 2026, Free usage resets every five hours, Pro and Max give you more capacity plus weekly limits, and your real headroom still changes with conversation length, attachments, tools, model choice, and current demand.\n\nClaude does not publish one fixed public daily token number for consumer plans. As of April 8, 2026, Free usage resets every five hours, Pro and Max give you more capacity plus weekly limits, and your real headroom still changes with conversation length, attachments, tools, model choice, and current demand. What many readers call a Claude token limit per day is usually one of four different questions: Free plan usage, Pro or Max session headroom, a context-window question, or Claude Code / API usage. If you keep hitting the limit, identify which system you are actually in first, because that tells you whether the right move is to wait for a reset, buy extra usage, upgrade plans, or switch to a more specific guide. \n\nVerification note: this guide was rechecked against Anthropic pricing and help-center usage pages on April 8, 2026. Where Anthropic uses relative or variable wording instead of a fixed quota, this article keeps that wording intact rather than inventing a cleaner number.\n\nAnthropic's help pages repeatedly frame consumer usage as variable by design. The factors it names are the ones that actually change the outcome: message length, attached files, current conversation length, model choice, tool or feature use, and overall demand. That is why any article that confidently promises one exact public \"Claude daily token limit\" should be treated carefully. It may be quoting anecdotes, older plan language, or a rough planning band as if it were a contract. There is also a smaller source of confusion on Anthropic's own surfaces. The web-search help page says Free accounts have daily usage limits for web search and web fetch. \n\nPro is the right default for many serious users, but the upgrade signal is not \"I hit the limit once.\" It is \"fiv",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.laozhang.ai/en/posts/claude-daily-limit",
        "search_provider": "anthropic",
        "age": "April 8, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude 2x Usage 2026: What's Permanent, What Ended | TECHSY",
      "url": "https://techsy.io/en/blog/claude-2x-usage-limits-explained",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techsy.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techsy.io",
        "site_name": "TECHSY"
      },
      "is_missing": false,
      "text": "The March 2026 promotion ran from March 13 through March 28, doubling 5-hour usage limits during off-peak hours and all day on weekends for Free, Pro, Max, and Team users. Peak hours were 8 AM – 2 PM ET (5–11 AM PT, 12–6 PM GMT) on weekdays.\n\nOn May 6, 2026, Anthropic permanently doubled Claude Code's 5-hour limits for Pro, Max, Team, and seat-based Enterprise plans. Weekly caps did not change in either announcement — only 5-hour windows. The Free plan got the March promo but was excluded from the May 6 permanent doubling. Claude 2x usage refers to two separate 2026 events: a March 13–28 temporary off-peak promotion that doubled 5-hour limits during off-peak hours for Free, Pro, Max, and Team users, and a May 6 permanent doubling of Claude Code's 5-hour rate limits for Pro, Max, Team, and Enterprise — driven by Anthropic's new SpaceX/xAI Colossus 1 compute deal. The easiest way to keep them straight is a highway analogy. \n\nSo if you were in Bangalore, your \"peak\" actually fell in the evening — meaning your morning workday was already in the bonus zone. This is the critical clarifier. During the promo, any messages you sent in off-peak hours or on weekends consumed a doubled 5-hour bucket — but those messages were not deducted from your week\n\nAnd yes, this is over. The promo ended March 28, 2026. Community trackers like claude2x.com and isclaude2x.com still get traffic from confused searchers, but the source of truth is the /usage command inside Claude Code, or your /usage panel in the web UI. The Register's coverage documented the capacity-pressure context Anthropic was navigating at the time. On May 6, 2026, Anthropic permanently doubled Claude Code's 5-hour rate limits for Pro, Max, Team, and seat-based Enterprise customers, and removed peak-hour throttling for Pro and Max. \n\nThe change was enabled by a new SpaceX/xAI Colossus 1 compute deal: 300+ MW and 220,000+ NVIDIA GPUs coming online within the month. Weekly caps were unchanged. ... Claude Cod",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://techsy.io/en/blog/claude-2x-usage-limits-explained",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "anthropic announces weekly rate limits for its claude pro and claude max subscribers amid user policy violation by sharing and reselling accounts effective from august 28 7030454",
      "url": "https://www.latestly.com/socially/technology/anthropic-announces-weekly-rate-limits-for-its-claude-pro-and-claude-max-subscribers-amid-user-policy-violation-by-sharing-and-reselling-accounts-effective-from-august-28-7030454.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "latestly.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=latestly.com",
        "site_name": "latestly"
      },
      "is_missing": false,
      "text": "Anthropic AI announced it would implement weekly rate limits for Claude Pro and Claude Max users in late August 2025. The Anthropic Claude Pro offers 5x more usage compared to the free version, and Anthropic Claude MAX users can use about 20x more usage than the Pro subscription. However, the weekly rate limits will be effective from August 28, 2025. Anthropic said, \"We estimate they’ll apply to less than 5% of subscribers based on current usage.\" The company highlighted that some users violated its user policies by sharing and reselling accounts. Claude New Features: Anthropic Adds Capability to Read and Update NotionHQ Pages, Reportedly Working on Ghost Chat; Says Claude Witnessed Unprecedented Demand.\nClaude Pro, Claude MAX Weekly Rate Limits Will Be Effective From August 28: Anthropic AI\nWe’re rolling out new weekly rate limits for Claude Pro and Max in late August. We estimate they’ll apply to less than 5% of subscribers based on current usage. pic.twitter.com/X8FAss3jIC\n\n\n— Anthropic (@AnthropicAI) July 28, 2025\n(SocialLY brings you all the latest breaking news, fact checks and information from social media world, including Twitter (X), Instagram and Youtube. The above post contains publicly available embedded media, directly from the user's social media account and the views appearing in the social media post do not reflect the opinions of LatestLY.)\n\n\n\n\n\n\n\n\n\n\n\n\n\nQuickly",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.latestly.com/socially/technology/anthropic-announces-weekly-rate-limits-for-its-claude-pro-and-claude-max-subscribers-amid-user-policy-violation-by-sharing-and-reselling-accounts-effective-from-august-28-7030454.html",
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

 I've verified enough primary sources for the breakdown, so I'm ready to compile the quota changes since April 25, 2026 across Claude.ai's different tiers and Claude Code. Let me organize the timeline starting with what happened on May 6, 2026. parate pool with dedicated monthly credits that refresh without rollover and are per-user only. The amounts vary by plan tier, while interactive Claude Code and web chat remain on their existing limits. I also found a secondary claim about manual counter resets on May 14-15 that needs verification from an official source. For the Free plan, there haven't been any explicit quota changes in this window based on primary sources—it was excluded from both the May 6 and May 13 updates. Looking at Claude.ai chat specifically, the May changes targeted Claude Code limits rather than the web interface, though I'm checking the Anthropic blog post to see if there's any broader chat impact. I'm realizing the user wants a detailed, well-sourced breakdown with clear separation between verified facts and assumptions, and given the timeline spans multiple quota events, a structured visualization might actually serve them better than just text. I'm deciding between a text-only breakdown with citations versus including an interactive timeline visualization—given the user's explicit preference for interactivity and the fact that quota changes have a natural visual structure, I'll include a timeline. Though the user asked for a detailed breakdown, their emphasis on separating facts from assumptions and attributing to primary sources suggests they'd benefit from a structured format that supports that clarity. Now I'm deciding on the best way to present this — the user wants detailed text with clear source attribution, so I'll prioritize that over visualization. I need to make sure I'm citing only the primary Anthropic sources I can verify, then flag what's third-party reporting versus unconfirmed claims. I'm realizing I need to be careful about the May 13 update since I can only reference the @ClaudeDevs tweet through secondary sources rather than verifying it directly from X. Given how much the user values precise attribution, I should structure this with clear headers for each date and keep citations inline and concise, separating what I can confirm from Anthropic's official channels versus what comes from reporting about their announcements.

</details>

I have verified primary sources for the major events. Here's the breakdown for the window **April 25 – May 18, 2026**, covering Claude.ai consumer plans and Claude Code (terminal).

---

## Event 1 — May 6, 2026: Claude Code 5-hour limits doubled + peak-hour throttling removed

**Primary source:** Anthropic blog post, *"Higher usage limits for Claude and a compute deal with SpaceX"* (anthropic.com/news/higher-limits-spacex, May 6, 2026).

Three changes took effect that day. Anthropic doubled Claude Code's five-hour rate limits for Pro, Max, Team, and seat-based Enterprise plans; removed the peak hours limit reduction on Claude Code for Pro and Max accounts; and raised API rate limits considerably for Claude Opus models (the API change is outside your scope).

Anthropic's stated cause: a partnership with SpaceX to use all of the compute capacity at their Colossus 1 data center — more than 300 megawatts of new capacity (over 220,000 NVIDIA GPUs) within the month.

**Free plan:** Not included. Third-party reporting confirms this explicitly — the only plan not getting an upgrade is the free one.

**Weekly caps:** Unchanged in this announcement — only the 5-hour window and peak-hour reduction were touched. (The Anthropic post itself says nothing about weekly caps, which is the basis for this negative claim.)

---

## Event 2 — May 13, 2026: Claude Code weekly limits +50% through July 13

**Primary source:** Official @ClaudeDevs account on X (May 13, 2026). I have not fetched the tweet directly; the quoted text appears in multiple independent secondary reports.

The quoted announcement text: "Claude Code weekly limits are increasing 50%, now through July 13. Live now for all Pro, Max, Team, and seat-based Enterprise users."

This is **temporary**, expiring July 13, 2026. It is live on every paid plan (Pro, Max, Team, and seat-based Enterprise) and applies everywhere Claude Code runs: CLI, IDE extensions, the desktop app, and the web. There is nothing to opt into. Free plan excluded.

This **stacks** with the May 6 change: a 2x boost to your short-window quota and a 1.5x boost to your weekly cap, all live at the same time.

---

## Event 3 — May 13, 2026 (announcement) / June 15, 2026 (effective): Agent SDK credit carve-out

**Primary source:** Anthropic support article #15036540, *"Use the Claude Agent SDK with your Claude plan"* (support.claude.com).

This is the most structurally significant change because it **removes** something from the subscription pool rather than adding to it. Starting June 15, 2026, Claude Agent SDK and `claude -p` usage no longer counts toward your Claude plan's usage limits. Your subscription usage limits stay the same and stay reserved for interactive use of Claude Code, Claude Cowork, and Claude.

**Monthly credit by plan** (verbatim from the support article):

| Plan | Monthly credit |
|---|---|
| Pro | $20 |
| Max 5x | $100 |
| Max 20x | $200 |
| Team (Standard seats) | $20 |
| Team (Premium seats) | $100 |
| Enterprise (usage-based) | $20 |
| Enterprise (seat-based Premium seats) | $200 |

Mechanics: Credits belong to individual accounts. They can't be shared or pooled across teammates. Your credit resets at the start of each billing cycle. Unused credits don't roll over to the next billing cycle. Once exhausted, additional Agent SDK usage flows to extra usage at standard API rates — but only if you've enabled extra usage. If extra usage isn't enabled, Agent SDK requests stop until your credit refreshes.

What the credit covers vs. what it doesn't (verbatim from Anthropic): The Agent SDK monthly credit applies to: Claude Agent SDK usage in your own projects (Python or TypeScript); the `claude -p` command in Claude Code (non-interactive mode); the Claude Code GitHub Actions integration; third-party apps that authenticate with your Claude subscription through the Agent SDK. The credit doesn't apply to: Interactive Claude Code in the terminal or IDE; Claude conversations on the web, desktop, or mobile apps; Claude Cowork.

**Context (not from Anthropic's article, from third-party reporting):** This reverses a prior policy. The move is a major reversal from Anthropic's policy introduced in early April 2026 that expressly prohibited its AI subscriptions from being used to power these kind of non-Anthropic agents and harnesses. The original April 4 ban itself predates your April 25 window, so I'm flagging it as background context only.

---

## What didn't change in this window (negative findings)

- **Claude.ai web/mobile/desktop chat quotas** (Free, Pro, Max): No quota changes announced by Anthropic between April 25 and May 18, 2026 that I could locate in primary sources. The May 6 blog post mentions improved *capacity* benefiting Pro/Max subscribers but does not announce new chat-side quota numbers.
- **Free plan**: Excluded from both the May 6 doubling and the May 13 weekly +50%.
- **Direct API users**: If you use the Agent SDK with an API key from the Claude Platform, nothing changes. Pay-as-you-go billing continues, and you don't receive an Agent SDK monthly credit.

---

## Facts vs. unverified claims

**Confirmed by Anthropic primary sources:** The May 6 changes (blog post), the June 15 Agent SDK credit structure (support article).

**Confirmed only via the official @ClaudeDevs tweet, quoted across multiple independent reports:** The May 13 Claude Code weekly +50% through July 13.

**Reported by third parties but I have NOT verified from any Anthropic primary source:**
- A claim that Anthropic manually reset the 5-hour and weekly counters for Pro, Max, Team and Enterprise plans on May 15. Treat as unverified.
- Specific user-shared "telemetry" estimates of the new caps in tokens (the May 13 announcement included a graphic with numbers, but I haven't seen those numbers in a primary Anthropic page).
- Competitive-strategy framing (Codex, "compute arbitrage", etc.) — analyst commentary, not Anthropic statements.

Let me know if you'd like an interactive timeline visualization of these changes, or a deeper dig into the Agent SDK billing mechanics — I held back on the visual since you asked for a "breakdown" specifically, but the timeline structure would render well.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019e3aec-705f-74f1-b8be-3b0e6d893efe",
  "updated_at": "2026-05-18T11:52:26.768103Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019e3aec-705f-7364-bebf-cea763afefe1"
}
```

</details>

### 5. human — 2026-05-18T12:22:24.936760Z

What's your opinion on these changes?
Do you think they are partially because of the progress of openai?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019e3b09-976b-77bd-854b-18d8492d5480",
  "updated_at": "2026-05-18T12:22:24.936760Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019e3aec-705f-74f1-b8be-3b0e6d893efe"
}
```

</details>

### 6. assistant — 2026-05-18T12:23:42.532576Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I'm considering whether I should share an opinion on Anthropic's quota changes and competitive dynamics with OpenAI. This isn't a politically charged topic—it's straightforward business strategy analysis—so I can engage with it directly. The tricky part is that Anthropic created me, which means I should be thoughtful about potential bias when evaluating my creator's decisions.

Looking at the actual evidence, the timing is revealing: Anthropic announced a 50% increase to Claude Code limits on May 13, but OpenAI posted a competing offer with free Codex months just hours before that announcement. The May 6 changes appear tied to increased compute availability from SpaceX, which is a supply-side factor, but the decision about when and how much to increase limits still involves strategic timing. There's also the Agent SDK credit carve-out to consider, which suggests layered thinking about different product tiers and use cases.

So yes, I think OpenAI competition is a meaningful factor in the May 13 announcement specifically — the same-day mirror announcements and the temporary window through July 13 suggest a defensive move rather than a permanent repricing. But the underlying compute expansion was happening anyway, and not every pricing decision is purely reactive.

I should be clear about what's evidence-based versus speculation though. The user wants that separation, and I shouldn't overstate confidence about Anthropic's internal thinking. I'll frame this as competitive pressure being a real factor while acknowledging the supply-side justifications are legitimate too, and keep it to a couple short paragraphs since they're on mobile.

The May 6 changes look more compute-driven — the SpaceX deal genuinely expanded capacity, and widening the per-window limits is exactly what you'd do with new supply. The timing overlapped with OpenAI's moves, but the substance feels supply-motivated rather than purely reactive.

May 13 is where the competitive signal gets stronger. OpenAI announced a Codex offer for enterprise switchers hours before Anthropic's Claude Code announcement, which could be coincidence but the timing is tight. That's the clearest evidence of tit-for-tat positioning.

The Claude Code weekly boost through July 13 reads as defensive — the expiration date suggests a temporary bridge rather than a permanent shift, which would be odd if this were purely about Colossus 1 coming online. Community reaction was immediate: people saw it as matching Codex's capabilities. I'd estimate this is 60-70% competitive response, with the rest being genuine capacity gains.

The Agent SDK credit carve-out is different — that's not about competing with OpenAI, it's about protecting margins against subscription arbitrage.  It mostly affects heavy programmatic users while leaving interactive users alone, and the community actually read it as making Codex's flat-rate model look better by comparison.

I should note I don't have access to Anthropic's internal strategy, so this is all inference from public moves, and I'm made by Anthropic, which is worth keeping in mind when weighing my read on this. The May 6 capacity increase looks genuinely supply-driven — the SpaceX infrastructure change and removal of weekly caps align with what you'd actually do with new compute, not just a competitive move. But May 13 is where the competitive angle gets stronger: OpenAI's enterprise switcher offer dropped hours before Claude's announcement that same day, and the temporary July 13 expiration suggests some strategic timing rather than a permanent product decision.

The Agent SDK restrictions feel like pure margin defense against people running expensive workloads through cheaper plans, and it actually makes OpenAI's flat-rate model look better by comparison, which explains why developers reacted negatively. This is the kind of thing Anthropic would've done regardless of what OpenAI was doing.

I should note two things: I'm working from public information rather than internal knowledge, and I'm made by Anthropic, so you should factor that into how much weight you give this analysis.

Also, I'm second-guessing those specific percentages I threw out earlier—60-70% versus 30-40% is too precise for what's really just my subjective read. Let me be clearer that these are rough estimates, not data-backed claims.

The user's preferences emphasize separating facts from assumptions, so I need to flag which parts are direct observations versus my interpretations. And on the formatting question—I was thinking about using bolded event names as section breaks, but that's starting to feel list-like. For comparing three distinct events, it does help readability, but I should make sure each section is a real paragraph rather than bullet-style points. Actually, let me just collapse this into two clean paragraphs without the headers since this is opinion, not a structured report. The May 13 weekly cap increase reads as the clearest competitive response — OpenAI's enterprise offer timing, the temporary July expiration, and immediate community comparisons all point to Codex pressure driving both the decision and its urgency, with Colossus 1 providing the compute cushion to make it feasible. The Agent SDK exemption, though, moves in the opposite direction entirely — it's a margin defense against runaway API costs from autonomous agents, not a competitive jab.

I should note I'm working from public signals rather than internal context, and as an Anthropic product I carry that bias, though I've tried to evaluate the evidence neutrally. I need to add citations for the factual claims I'm making since they come from the web search results that are still in context — the OpenAI timing, the community comments, and the expiration dates all need to be properly attributed to their source documents.

</details>

Short answer: yes, OpenAI pressure is a real factor — but I'd resist a single-cause story, because the weight differs sharply across the three events.

The **May 6 doubling** has the most credible supply-side explanation. The SpaceX/Colossus 1 capacity is real, and the substance — wider 5-hour pipe, no weekly cap increase — is what you'd do with fresh compute, not what you'd reach for as a competitive headline. I'd read this as mostly capacity-driven with competitive *timing*.

The **May 13 weekly +50%** is where competition reads strongest, and I think it's substantially a Codex response. Three signals: OpenAI's @OpenAIDevs posted an announcement a few hours before the @ClaudeDevs tweet aimed at enterprise Claude Code customers, offering two months of free Codex usage for eligible enterprise customers who switch in the next thirty days — same day, mirror-image. The temporary July 13 expiration framed explicitly as a window through July 13 looks more like a defensive bridge than permanent recalibration following Colossus 1 coming online. And the community read was immediate and unambiguous — the bridgemindai comment three minutes after the announcement, "Claude Code just raised weekly limits by 50%. This puts Claude Code rate limits on par with Codex". My interpretation: Codex pressure shaped both the timing and the magnitude, with new compute serving as enabling background rather than the underlying cause.

The **Agent SDK carve-out**, by contrast, isn't a competitive move at all — it cuts the other way. It's margin protection against the "compute arbitrage era, where a $20 Pro subscription could run agent workflows that would cost $500 on a direct API key". The mechanism makes Codex's flat-rate offering *more* attractive by comparison, which is why developer reaction skewed negative. Anthropic would have done this regardless of OpenAI — the only OpenAI-linked element is that it makes switching costs lower for the developers most affected.

Two caveats I owe you: I'm inferring from the public record, not internal strategy meetings. And I'm made by Anthropic, which I'd flag explicitly — I've tried to read the evidence the same way I would for any company, but weight that disclosure as you see fit.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019e3b09-976b-77bd-854b-18d95d3b30a4",
  "updated_at": "2026-05-18T12:23:42.532576Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019e3b09-976b-77bd-854b-18d8492d5480"
}
```

</details>
