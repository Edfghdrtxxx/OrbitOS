# Using Claude design tool anywhere

## Export metadata (verbatim)

```json
{
  "uuid": "c7409da8-aef0-4889-b6ed-3709baadf4cc",
  "name": "Using Claude design tool anywhere",
  "summary": "**Conversation Overview**\n\nThe person asked a vague initial question about a \"newest Claude design tool\" and where to use it, without specifying which tool or platform they meant. Claude asked clarifying questions via a structured input prompt, and the person responded by asking Claude to investigate through the internet rather than providing specifics directly.\n\nClaude conducted web searches and fetched Anthropic's official announcement, identifying the tool as **Claude Design**, launched on April 17, 2026, via Anthropic Labs. Claude then provided a detailed breakdown of the feature: it is a research-preview design collaboration tool running on Claude Opus 4.7, accessible at claude.ai/design, and available to Pro, Max, Team, and Enterprise subscribers. Claude explained how to access it, its core capabilities (prompt-to-design generation, file imports, web capture, design system integration, export options, and Claude Code handoff), and noted that Enterprise organizations must enable it manually via admin settings. Claude also explicitly distinguished between verified facts sourced from Anthropic's announcement and unverified aspects, such as regional availability and the person's subscription tier eligibility, offering to investigate further if needed.\n\nThe person demonstrated a preference for having Claude proactively research answers rather than asking follow-up clarifying questions, and showed no stated platform preference for where to use the tool.",
  "created_at": "2026-04-18T01:44:53.372121Z",
  "updated_at": "2026-04-18T01:47:10.701803Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-18T01:44:53.771541Z

Hey, Claude. How to use the newest Claude design tool in anywhere?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9e43-2110-73b9-ba2d-2f7ce6f2c0e3",
  "updated_at": "2026-04-18T01:44:53.771541Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-18T01:44:57.046502Z

 

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9e43-2110-71a7-b603-d15a9a2f3c16",
  "updated_at": "2026-04-18T01:44:57.046502Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9e43-2110-73b9-ba2d-2f7ce6f2c0e3"
}
```

</details>

### 3. human — 2026-04-18T01:45:02.937981Z

Hey, Claude. How to use the newest Claude design tool in somewhere?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9e43-43fe-71d5-8c1e-1957a1195951",
  "updated_at": "2026-04-18T01:45:02.937981Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 4. assistant — 2026-04-18T01:45:16.470589Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user's question is pretty vague about what they mean by "Claude design tool" — they could be referring to Artifacts, Claude Code, a new design-specific tool from Anthropic, or the Visualizer feature. Given Reid's interest in cutting-edge AI and coding tools, I should clarify what they're actually looking for before diving into an answer.

</details>

Happy to help, but I want to make sure I point you at the right thing — "the newest Claude design tool" could mean a few different things, and "somewhere" is a bit open-ended too. Which one are you thinking of?

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T01:45:11.776919Z",
  "stop_timestamp": "2026-04-18T01:45:13.942805Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01FvezxqWGAk5C6gSAd6giwZ",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "type": "single_select",
        "options": [
          "Artifacts (in-chat visuals/apps)",
          "Claude Code (CLI coding agent)",
          "Claude in Chrome / Excel / Cowork",
          "Something else — I'll clarify"
        ],
        "question": "Which tool do you mean?"
      },
      {
        "type": "single_select",
        "options": [
          "claude.ai web app",
          "Claude desktop/mobile app",
          "Terminal / IDE",
          "Not sure yet"
        ],
        "question": "Where do you want to use it?"
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
  "tool_use_id": "toolu_01FvezxqWGAk5C6gSAd6giwZ",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\n  \"questions\": [\n    {\n      \"question\": \"Which tool do you mean?\",\n      \"options\": [\n        \"Artifacts (in-chat visuals/apps)\",\n        \"Claude Code (CLI coding agent)\",\n        \"Claude in Chrome / Excel / Cowork\",\n        \"Something else \\u2014 I'll clarify\"\n      ],\n      \"type\": \"single_select\"\n    },\n    {\n      \"question\": \"Where do you want to use it?\",\n      \"options\": [\n        \"claude.ai web app\",\n        \"Claude desktop/mobile app\",\n        \"Terminal / IDE\",\n        \"Not sure yet\"\n      ],\n      \"type\": \"single_select\"\n    }\n  ]\n}",
      "uuid": "f514d6f3-01f2-405a-b376-687efb45f1a7"
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

Tap whichever fits — or just type what you saw/heard about it (a headline, a screenshot description, where you first came across it) and I'll figure out which one it is and walk you through setup.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9e43-43fe-7601-9996-8e61b84184e1",
  "updated_at": "2026-04-18T01:45:16.470589Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9e43-43fe-71d5-8c1e-1957a1195951"
}
```

</details>

### 5. human — 2026-04-18T01:46:17.336700Z

Q: Which tool do you mean?
A: You can investigate through the internet first. It's a new feature launched by anthropic recently

Q: Where do you want to use it?
A: [No preference]

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9e44-669d-7d6a-911d-dd6a05e0c3ce",
  "updated_at": "2026-04-18T01:46:17.336700Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9e43-43fe-7601-9996-8e61b84184e1"
}
```

</details>

### 6. assistant — 2026-04-18T01:47:10.701803Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I need to search for information about a recent design tool launch from Anthropic to answer the user's question about what's new as of April 2026.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T01:46:20.327778Z",
  "stop_timestamp": "2026-04-18T01:46:20.327778Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01E83qmhT783euKpSiQBAutE",
  "name": "web_search",
  "input": {
    "query": "Anthropic new Claude design tool launch 2026"
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
  "tool_use_id": "toolu_01E83qmhT783euKpSiQBAutE",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Anthropic Launches Claude Design, Figma Stock Immediately Nosedives",
      "url": "https://gizmodo.com/anthropic-launches-claude-design-figma-stock-immediately-nosedives-2000748071",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "gizmodo.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=gizmodo.com",
        "site_name": "Gizmodo"
      },
      "is_missing": false,
      "text": "The tool is powered by Claude Opus 4.7 and is rolling out as a research preview to Claude Pro, Max, Team, and Enterprise subscribers gradually throughout today. It works by letting users describe what they want in plain language prompts.\n\nBy Bruce Gil Published April 17, 2026, 5:35 pm ET · Reading time 2 minutes · © Anthropic · Read Later Read Later Comments (0) Wall Street seems to think Anthropic’s new AI design tool could be a serious threat to Figma and other software. On Friday, Anthropic announced Claude Design, a new tool that lets users create polished visuals like slide decks, app prototypes, and marketing one-pagers using simple text prompts. The tool is powered by Claude Opus 4.7 and is rolling out as a research preview to Claude Pro, Max, Team, and Enterprise subscribers gradually throughout today. It works by letting users describe what they want in plain language prompts.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://gizmodo.com/anthropic-launches-claude-design-figma-stock-immediately-nosedives-2000748071",
        "search_provider": "anthropic",
        "age": "4 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic just launched Claude Design, an AI tool that turns prompts into prototypes and challenges Figma | VentureBeat",
      "url": "https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "venturebeat.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=venturebeat.com",
        "site_name": "VentureBeat"
      },
      "is_missing": false,
      "text": "The company is in early talks with Goldman Sachs, JPMorgan, and Morgan Stanley about a potential IPO that could come as early as October 2026. The product follows a workflow that Anthropic has designed to feel like a natural creative conversation.\n\nClaude Design is powered by Claude Opus 4.7, Anthropic's most capable generally available vision model, which the company also released today. Anthropic says it is rolling access out gradually throughout the day to Claude Pro, Max, Team, and Enterprise subscribers. The simultaneous launches mark a watershed for Anthropic, whose ambitions now visibly extend from foundation model provider to full-stack product company — one that wants to own the arc from a rough idea to a shipped product. The timing is also significant: Anthropic hit roughly $20 billion in annualized revenue in early March 2026, according to Bloomberg, up from $9 billion at the end of 2025 — and surpassed $30 billion by early April 2026. \n\nThe company is in early talks with Goldman Sachs, JPMorgan, and Morgan Stanley about a potential IPO that could come as early as October 2026. The product follows a workflow that Anthropic has designed to feel like a natural creative conversation.\n\nWhat distinguishes Claude Design from the wave of AI design experiments that have proliferated in the past year is the handoff mechanism. When a design is ready to build, Claude packages everything into a handoff bundle that can be passed to Claude Code with a single instruction. That creates a closed loop — exploration to prototype to production code — all within Anthropic's ecosystem. The export options acknowledge that not everyone's next step is Claude Code: users can also share designs as an internal URL within their organization, save as a folder, or export to Canva, PDF, PPTX, or standalone HTML files. Anthropic points to Brilliant, the education technology company known for intricate interactive lessons, as an early proof point. \n\nThe company's senior product de",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma",
        "search_provider": "anthropic",
        "age": "9 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Debuts Claude Design for Creating Prototypes, Pitch Decks, and Mockups - MacRumors",
      "url": "https://www.macrumors.com/2026/04/17/anthropic-claude-design/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "macrumors.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=macrumors.com",
        "site_name": "MacRumors"
      },
      "is_missing": false,
      "text": "Friday April 17, 2026 1:01 pm PDT by Juli Clover · Anthropic today launched Claude Design, a new AI product for creating designs, prototypes, slides, and more. Claude Design uses Opus 4.7, a new AI model that was introduced earlier this week.\n\nFriday April 17, 2026 1:01 pm PDT by Juli Clover · Anthropic today launched Claude Design, a new AI product for creating designs, prototypes, slides, and more. Claude Design uses Opus 4.7, a new AI model that was introduced earlier this week. Opus 4.7 is Anthropic's most capable vision model, and it can see images in greater resolution. Anthropic says that it is \"more tasteful and creative\" when doing professional tasks. It is able to create higher-quality interfaces, slides, and docs, making it ideal for Claude Design. Claude Design was developed to allow founders, product managers, and marketers without a design background to create visuals for sharing an idea. \n\nClaude Design is able to mock up an initial design after being provided with a prompt, and from there, designers can make revisions through conversation, comments, direct edits, and custom sliders made by Claude.\n\nClaude Design is available as a research preview for Claude Pro, Max, Team, and Enterprise subscribers. It is rolling out to users gradually throughout the day. Tag: Anthropic · [ 27 comments ] Friday April 17, 2026 3:50 am PDT by Hartley Charlton · A source said to be familiar with Apple's supply chain today revealed the color options Apple is planning for the iPhone 18 Pro, iPhone 18 Pro Max, and the upcoming foldable iPhone. Image via Macworld. The information comes from Macworld, which says the signature new color for this year's Pro models will be Dark Cherry, a deep wine-like red. While other sources had previously reported on a... \n\nRead Full Article • 102 comments · Wednesday April 15, 2026 8:15 am PDT by Tim Hardwick · According to the latest rumors, Apple is close to launching its next-generation iPad mini. So what should we expect from t",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.macrumors.com/2026/04/17/anthropic-claude-design/",
        "search_provider": "anthropic",
        "age": "6 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Claude Design, a new product for creating quick visuals | TechCrunch",
      "url": "https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techcrunch.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techcrunch.com",
        "site_name": "TechCrunch"
      },
      "is_missing": false,
      "text": "Anthropic announced on Friday that it’s launching Claude Design, a new experimental product that lets users create visuals like prototypes, slides, one-pagers, and more using Claude.\n\nSave up to $680 on your Disrupt 2026 pass. Ends 11:59 p.m. PT tonight. REGISTER NOW. Close ... Anthropic announced on Friday that it’s launching Claude Design, a new experimental product that lets users create visuals like prototypes, slides, one-pagers, and more using Claude. The company says Claude Design is intended to help people like founders and product managers without a design background share their ideas more easily. With Claude Design, users describe what they want, and Claude will create an initial version. From there, users can refine the visuals with direct edits or requests. For example, you could ask Claude to “prototype a serene mobile meditation app. \n\nAnthropic says Claude Design is able to do this by reading a company’s codebase and design files. Additionally, teams can refine these components and maintain more than one design system.\n\nThe new product is powered by Claude Opus 4.7 and is available in research preview for Claude Pro, Max, Team, and Enterprise subscribers. The launch highlights Anthropic’s ongoing push into the enterprise and prosumer categories, as competition intensifies around AI workplace tools. In January, Anthropic rolled out Claude Cowork, an agentic assistant built for complex tasks. A few weeks later, the company brought agentic plug-ins to Cowork that are designed to automate specialized tasks within a company’s various departments. Today’s announcement comes a few days after Bloomberg reported that VCs have been offering the company a preemptive funding round that would value it at $800 billion or more, which would almost match or even surpass its rival OpenAI. \n\nBut so far, Anthropic isn’t interested in the latest offers, according to the report.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/",
        "search_provider": "anthropic",
        "age": "10 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Claude Design following Opus 4.7 model upgrade - 9to5Mac",
      "url": "https://9to5mac.com/2026/04/17/anthropic-launches-claude-design-for-mac-following-opus-4-7-model-upgrade/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "9to5mac.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=9to5mac.com",
        "site_name": "9to5Mac"
      },
      "is_missing": false,
      "text": "The new Claude Design joins an existing suite of Mac tools, including Claude Cowork and Claude Code. Powered by Opus 4.7, Claude Design is Anthropic’s latest research preview from the Anthropic Labs team.\n\nZac Hall | Apr 17 2026 - 8:20 am PT · 2 Comments · After two previous design-related updates this week, Anthropic is out with a new product today: Claude Design. The new Claude Design joins an existing suite of Mac tools, including Claude Cowork and Claude Code. Powered by Opus 4.7, Claude Design is Anthropic’s latest research preview from the Anthropic Labs team. Anthropic describes how the new product works: During onboarding, Claude builds a design system for your team by reading your codebase and design files. Every project after that uses your colors, typography, and components automatically. You can refine the system over time, and teams can maintain more than one. Start from a text prompt, upload images and documents (DOCX, PPTX, XLSX), or point Claude at your codebase. \n\nYou can also use the web capture tool to grab elements directly from your website so prototypes look like the real product.\n\nAfter two previous design-related updates this week, Anthropic is out with a new product today: Claude Design. The new Claude Design joins an existing suite of Mac tools, including Claude Cowork and Claude Code. Powered by Opus 4.7, Claude Design is Anthropic’s latest research preview from the Anthropic Labs team. ... During onboarding, Claude builds a design system for your team by reading your codebase and design files. Every project after that uses your colors, typography, and components automatically. You can refine the system over time, and teams can maintain more than one. Start from a text prompt, upload images and documents (DOCX, PPTX, XLSX), or point Claude at your codebase. You can also use the web capture tool to grab elements directly from your website so prototypes look like the real product. \n\nFrom there, Claude Design includes features for ref",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://9to5mac.com/2026/04/17/anthropic-launches-claude-design-for-mac-following-opus-4-7-model-upgrade/",
        "search_provider": "anthropic",
        "age": "10 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic rolls out 'Claude Design' for AI-powered visual creation - The Tech Portal",
      "url": "https://thetechportal.com/2026/04/17/anthropic-rolls-out-claude-design-for-ai-powered-visual-creation",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "thetechportal.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=thetechportal.com",
        "site_name": "The Tech Portal"
      },
      "is_missing": false,
      "text": "Anthropic has introduced a new experimental product called Claude Design, a tool that can turn simple text prompts into visuals like app designs, presentations, and marketing content.\n\nPublished on April 17, 2026, 22:18 Asia/Kolkata · anthropic, anthropic ai, anthropic ai tools, anthropic claude, anthropic claude design, claude design, design ai tool · Anthropic has introduced a new experimental product called Claude Design, a tool that can turn simple text prompts into visuals like app designs, presentations, and marketing content. It is part of the company’s effort to expand its Claude platform beyond text and coding into creative work. Users can generate and refine designs through conversation, making quick changes without using traditional design software. The feature is powered by the latest Claude models and is currently available as a research preview for Pro, Team, and Enterprise users.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://thetechportal.com/2026/04/17/anthropic-rolls-out-claude-design-for-ai-powered-visual-creation",
        "search_provider": "anthropic",
        "age": "8 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Claude Design to speed up graphic design projects - SiliconANGLE",
      "url": "https://siliconangle.com/2026/04/17/anthropic-launches-claude-design-speed-graphic-design-projects/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "siliconangle.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=siliconangle.com",
        "site_name": "SiliconANGLE"
      },
      "is_missing": false,
      "text": "The company launched the offering into public preview today. It’s available to Claude users with Pro, Max, Team and Enterprise subscriptions. The first component of the Claude Design interface is a “Let’s prototype” sidebar.\n\nUPDATED 16:45 EDT / APRIL 17 2026 · AI · by Maria Deutscher · SHARE · The latest addition to Anthropic PBC’s product portfolio is Claude Design, a tool that enables users to generate visual assets with prompts. The company launched the offering into public preview today. It’s available to Claude users with Pro, Max, Team and Enterprise subscriptions. The first component of the Claude Design interface is a “Let’s prototype” sidebar. It contains a chat box that allows users to describe the visual asset they wish to create in natural language. There are also other ways to launch a project. According to Anthropic, customers can upload reference images such a sketch of what they wish to draw. Claude Design also supports document uploads. \n\nA marketer could upload a PDF file that describes a new smart home appliance and ask Claude Design to create a banner ad for the product.\n\nThe latest addition to Anthropic PBC’s product portfolio is Claude Design, a tool that enables users to generate visual assets with prompts. The company launched the offering into public preview today. It’s available to Claude users with Pro, Max, Team and Enterprise subscriptions. The first component of the Claude Design interface is a “Let’s prototype” sidebar. It contains a chat box that allows users to describe the visual asset they wish to create in natural language. There are also other ways to launch a project. According to Anthropic, customers can upload reference images such a sketch of what they wish to draw. Claude Design also supports document uploads. A marketer could upload a PDF file that describes a new smart home appliance and ask Claude Design to create a banner ad for the product. \n\nWhen Claude Design is given access to a desig",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://siliconangle.com/2026/04/17/anthropic-launches-claude-design-speed-graphic-design-projects/",
        "search_provider": "anthropic",
        "age": "5 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "pb zvy67 16b6981",
      "url": "https://www.podbean.com/media/share/pb-zvy67-16b6981?download=1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "podbean.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=podbean.com",
        "site_name": "podbean"
      },
      "is_missing": false,
      "text": "Daily Unicorn News - August 28, 2024Anthropic has announced the general availability of its 'Artifacts' feature across all user tiers and mobile apps. This new tool allows users to create and interact with interactive code and content directly within the Claude chatbot interface, enhancing productivity and collaboration.Sourceshttps://venturebeat.com/ai/anthropic-launches-claude-artifacts-generally-for-all-users-mobile/\nDaily Unicorn News - August 28, 2024\nAnthropic has announced the general availability of its 'Artifacts' feature across all user tiers and mobile apps. This new tool allows users to create and interact with interactive code and content directly within the Claude chatbot interface, enhancing productivity and collaboration.\nSources\nhttps://venturebeat.com/ai/anthropic-launches-claude-artifacts-generally-for-all-users-mobile/\nhttps://www.digitaltrends.com/computing/anthropic-artifacts-now-available-all-claude-users/\nOutline\n(00:00:00) Introduction",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.podbean.com/media/share/pb-zvy67-16b6981?download=1",
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

 The user is asking about Claude Design, which launched yesterday on April 17, 2026. I should look into Anthropic's documentation or announcements to find details on how to access and use it.

</details>

Found it — **Claude Design**, which Anthropic launched yesterday (April 17, 2026). Let me pull the official details so I'm not just relaying press coverage.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T01:46:26.255619Z",
  "stop_timestamp": "2026-04-18T01:46:26.523832Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_019av8w23HskrQPV3wV2oZqY",
  "name": "web_search",
  "input": {
    "query": "Anthropic Claude Design announcement how to access"
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
  "tool_use_id": "toolu_019av8w23HskrQPV3wV2oZqY",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Anthropic just launched Claude Design, an AI tool that turns prompts into prototypes and challenges Figma | VentureBeat",
      "url": "https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "venturebeat.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=venturebeat.com",
        "site_name": "VentureBeat"
      },
      "is_missing": false,
      "text": "Anthropic says it is rolling access out gradually throughout the day to Claude Pro, Max, Team, and Enterprise subscribers. The simultaneous launches mark a watershed for Anthropic, whose ambitions now visibly extend from foundation model provider ...\n\nClaude Design is not merely another AI copilot embedded in an existing design application. It is a standalone product that generates complete, interactive prototypes from natural language — accessible to founders, product managers, and marketers who have never opened Figma. The expansion of the design user base to non-designers is the real competitive threat, even if the professional designer's workflow remains anchored in Figma for now. The model powering Claude Design is itself a significant story. \n\nClaude Opus 4.7 is Anthropic's most capable generally available model, with notable improvements over its predecessor Opus 4.6 in software engineering, instruction following, and vision — but it is intentionally less capable than Anthropic's most powerful offering, Claude Mythos Preview, the model the company announced earlier this month as too dangerous for broad release due to its cybersecurity capabilities.\n\nAnthropic launched Claude Design, an AI tool that turns text prompts into interactive prototypes, alongside its most powerful public model, Claude Opus 4.7 — directly challenging Figma and signaling the company's shift from AI lab to full-stack product company.\n\nClaude Design is powered by Claude Opus 4.7, Anthropic's most capable generally available vision model, which the company also released today. Anthropic says it is rolling access out gradually throughout the day to Claude Pro, Max, Team, and Enterprise subscribers. \n\nThe simultaneous launches mark a watershed for Anthropic, whose ambitions now visibly extend from foundation model provider to full-stack product company — one that wants to own the arc from a rough idea to a shipped product. The timing is also significant: Anthropic hit roughly $20 bi",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma",
        "search_provider": "anthropic",
        "age": "9 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Claude Design to speed up graphic design projects - SiliconANGLE",
      "url": "https://siliconangle.com/2026/04/17/anthropic-launches-claude-design-speed-graphic-design-projects/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "siliconangle.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=siliconangle.com",
        "site_name": "SiliconANGLE"
      },
      "is_missing": false,
      "text": "The company launched the offering into public preview today. It’s available to Claude users with Pro, Max, Team and Enterprise subscriptions. The first component of the Claude Design interface is a “Let’s prototype” sidebar.\n\nThe new service can generate a wide range of visual assets. In one internal demo, Anthropic staffers used it to create a three-dimensional, interactive globe with appearance customization controls. It also lends itself to creating simpler assets such as slides and ads. The tool supports so-called design systems. Those are guidelines that describe how an organization’s employees should create customer-facing visual assets. When Claude Design is given access to a design system, it can automatically apply the guidelines to user projects. Developers, meanwhile, can give the tool access to an application’s code repository and ask it to generate an interface for the program. \n\nOnce a visual asset is ready, users can generate a sharable link that allows colleagues to view it. It’s also possible to export visual assets in several file formats. Under the hood, Claude Design is powered by Anthropic’s latest Claude Opus 4.7 large language model introduced yesterday.\n\nThe latest addition to Anthropic PBC’s product portfolio is Claude Design, a tool that enables users to generate visual assets with prompts. The company launched the offering into public preview today. It’s available to Claude users with Pro, Max, Team and Enterprise subscriptions. The first component of the Claude Design interface is a “Let’s prototype” sidebar. It contains a chat box that allows users to describe the visual asset they wish to create in natural language. There are also other ways to launch a project. According to Anthropic, customers can upload reference images such a sketch of what they wish to draw. Claude Design also supports document uploads. \n\nA marketer could upload a PDF file that describes a new smart home appliance and ask Claude Design to",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://siliconangle.com/2026/04/17/anthropic-launches-claude-design-speed-graphic-design-projects/",
        "search_provider": "anthropic",
        "age": "5 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic debuts Claude Design, because who needs designers? • The Register",
      "url": "https://www.theregister.com/2026/04/17/anthropic_debuts_claude_design/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "theregister.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=theregister.com",
        "site_name": "The Register"
      },
      "is_missing": false,
      "text": "Based on Claude Opus 4.7, Anthropic&#x27;s just-released, more costly model, Claude Design is accessible via the palette icon on the Claude.ai left-hand navigation frame to Pro, Max, Team, and Enterprise subscribers.\n\n: The bar for creating visual assets has been lowered to the ability to converse with a model\n\nAnthropic won't own MCP 'design flaw' putting 200K servers at risk, researchers say · Users complain that UK Azure is having capacity problems · Attention data hoarders: Alexa loses its Plex appeal as voice feature gets canned · Cisco Wi-Fi boxes are filling their disks with 5MB of undeletable data every day · Thereafter, projects inherit this style information, so designs don't start from scratch. Instead of manual dexterity and perhaps some art edu, working with Claude Design requires the ability to craft prompts. \"You don't need to be a designer to get great results,\" company documentation declares. \n\n\"Be specific about what you're building, who it's for, and what matters most.\" After this conversational design process, users have the option to download the results in various formats (.zip, .pdf, .pptx) or to export the results to Canva, HTML, or Claude Code.\n\nUsage of Claude Design is metered and tracked separately from other Claude services. \"It has its own usage tracking, its own allowances, and – for subscription plans – its own weekly limits that sit alongside (not inside) your existing chat or Claude Code limits,\" Anthropic explains. The AI biz is offering Enterprise usage-based Claude Design users a taste, in the form of a one-time credit said to cover about 20 typical prompts. The credit is consumed before additional Claude Design usage counts toward organizational spend and expires on July 17.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.theregister.com/2026/04/17/anthropic_debuts_claude_design/",
        "search_provider": "anthropic",
        "age": "5 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Claude Design, a new product for creating quick visuals | TechCrunch",
      "url": "https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techcrunch.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techcrunch.com",
        "site_name": "TechCrunch"
      },
      "is_missing": false,
      "text": "Additionally, teams can refine these components and maintain more than one design system. ... The new product is powered by Claude Opus 4.7 and is available in research preview for Claude Pro, Max, Team, and Enterprise subscribers.\n\nAnthropic announced on Friday that it’s launching Claude Design, a new experimental product that lets users create visuals like prototypes, slides, one-pagers, and more using Claude. The company says Claude Design is intended to help people like founders and product managers without a design background share their ideas more easily. With Claude Design, users describe what they want, and Claude will create an initial version. From there, users can refine the visuals with direct edits or requests. For example, you could ask Claude to “prototype a serene mobile meditation app. \n\nIt should have calming typography, subtle nature-inspired colors, and a clean layout.” · You could then tweak the colors, the size of the typography, or ask Claude to add a dark mode toggle. ... While Claude Design may initially seem like it’s looking to compete with popular design app Canva, which has just expanded its own AI capabilities, Anthropic told TechCrunch that it’s intended to complement it rather than re\n\nIn January, Anthropic rolled out Claude Cowork, an agentic assistant built for complex tasks. A few weeks later, the company brought agentic plug-ins to Cowork that are designed to automate specialized tasks within a company’s various departments. Today’s announcement comes a few days after Bloomberg reported that VCs have been offering the company a preemptive funding round that would value it at $800 billion or more, which would almost match or even surpass its rival OpenAI. \n\nBut so far, Anthropic isn’t interested in the latest offers, according to the report. ... Aisha is a consumer news reporter at TechCrunch. Prior to joining the publication in 2021, she was a telecom reporter at MobileSyrup. Aisha holds an honours bachelor’s de",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/",
        "search_provider": "anthropic",
        "age": "10 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Claude Design following Opus 4.7 model upgrade - 9to5Mac",
      "url": "https://9to5mac.com/2026/04/17/anthropic-launches-claude-design-for-mac-following-opus-4-7-model-upgrade/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "9to5mac.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=9to5mac.com",
        "site_name": "9to5Mac"
      },
      "is_missing": false,
      "text": "Anthropic says Claude Design is available for Pro, Max, Team, and Enterprise subscribers. The feature is off by default for Enterprise, but can be enabled by admins. The feature will roll out gradually over the course of the day, the company says.\n\nAfter two previous design-related updates this week, Anthropic is out with a new product today: Claude Design. The new Claude Design joins an existing suite of Mac tools, including Claude Cowork and Claude Code. Powered by Opus 4.7, Claude Design is Anthropic’s latest research preview from the Anthropic Labs team. ... During onboarding, Claude builds a design system for your team by reading your codebase and design files. Every project after that uses your colors, typography, and components automatically. You can refine the system over time, and teams can maintain more than one. Start from a text prompt, upload images and documents (DOCX, PPTX, XLSX), or point Claude at your codebase. \n\nYou can also use the web capture tool to grab elements directly from your website so prototypes look like the real product. From there, Claude Design includes features for refining design work, collaborating with others, and exporting files.\n\n“Over the coming weeks, we’ll make it easier to build integrations with Claude Design, so you can connect it to more of the tools your team already uses,” Anthropic adds. Anthropic says Claude Design is available for Pro, Max, Team, and Enterprise subscribers. The feature is off by default for Enterprise, but can be enabled by admins. The feature will roll out gradually over the course of the day, the company says. You can learn more about Claude Design here. Claude for Mac is available here. Earlier this week, Anthropic redesigned Claude Code on the Mac and released Claude Opus 4.7, which it says has better design skills. \n\nApple AirTag 2 | Add Find My tracking to keys, bags, bikes, more · Beats USB-A to USB-C Cable | The official CarPlay cable · Wireless CarPlay Adapter | No more plugging",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://9to5mac.com/2026/04/17/anthropic-launches-claude-design-for-mac-following-opus-4-7-model-upgrade/",
        "search_provider": "anthropic",
        "age": "10 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic now has a design assistant too",
      "url": "https://www.engadget.com/ai/anthropic-now-has-a-design-assistant-too-150000903.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "engadget.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=engadget.com",
        "site_name": "Engadget"
      },
      "is_missing": false,
      "text": "Anthropic now has a design assistant too\n\n<strong>Anthropic</strong> has <strong>announced</strong> <strong>Claude</strong> <strong>Design</strong>, a new research preview that allows subscribers <strong>to</strong> use <strong>Claude</strong> <strong>to</strong> generate <strong>designs</strong>, prototypes, slides and more.\n\nPublished: 11 hours ago\nSource: www.engadget.com",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.engadget.com/ai/anthropic-now-has-a-design-assistant-too-150000903.html",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Launches Claude Design, Challenging Lovable and Figma",
      "url": "https://www.trendingtopics.eu/anthropic-launches-claude-design-challenging-lovable-and-figma/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "trendingtopics.eu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=trendingtopics.eu",
        "site_name": "trendingtopics"
      },
      "is_missing": false,
      "text": "Anthropic Launches Claude Design, Challenging Lovable and Figma\n\nThings are moving at a breakneck pace: <strong>Anthropic</strong> has, as the rumor mill predicted, launched a new product called <strong>Claude</strong> <strong>Design</strong> that directly enters the\n\nPublished: 6 hours ago\nSource: www.trendingtopics.eu",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.trendingtopics.eu/anthropic-launches-claude-design-challenging-lovable-and-figma/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Introducing Claude Design by Anthropic Labs",
      "url": "https://www.anthropic.com/news/claude-design-anthropic-labs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "We cannot provide a description for this page right now",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/claude-design-anthropic-labs",
        "search_provider": "anthropic",
        "age": "10 hours ago"
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

 I should look up the official Anthropic announcement to make sure I have the accurate information.

</details>

Let me fetch Anthropic's own announcement for the authoritative version.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T01:46:29.907242Z",
  "stop_timestamp": "2026-04-18T01:46:29.907242Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015H25qLLWPBicrYSPwDerS2",
  "name": "web_fetch",
  "input": {
    "url": "https://www.anthropic.com/news/claude-design-anthropic-labs"
  },
  "message": "Fetching: https://www.anthropic.com/news/claude-design-anthropic-labs",
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
  "tool_use_id": "toolu_015H25qLLWPBicrYSPwDerS2",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Introducing Claude Design by Anthropic Labs",
      "url": "https://www.anthropic.com/news/claude-design-anthropic-labs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "anthropic"
      },
      "is_missing": false,
      "text": "[Skip to main content](#main-content)[Skip to footer](#footer)\n\n* [Research](https://www.anthropic.com/research)\n* [Economic Futures](https://www.anthropic.com/economic-futures)\n* Commitments\n* Learn\n* [News](https://www.anthropic.com/news)\n\n[Try Claude](https://claude.ai/)\n\nProductAnnouncements\n\n# Introducing Claude Design by Anthropic Labs\n\nApr 17, 2026\n\n![Introducing Claude Design by Anthropic Labs](https://www-cdn.anthropic.com/images/4zrzovbb/website/33dbe8f783d4835a838b4c4ae85d3c04e352fee1-1000x1000.svg)\n\nToday, we’re launching Claude Design, a new [Anthropic Labs](https://www.anthropic.com/news/introducing-anthropic-labs) product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more.\n\nClaude Design is powered by our most capable vision model, [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7), and is available in research preview for Claude Pro, Max, Team, and Enterprise subscribers. We’re rolling out to users gradually throughout the day.\n\n## Design with Claude\n\nEven experienced designers have to ration exploration—there's rarely time to prototype a dozen directions, so you limit yourself to a few. And for founders, product managers, and marketers with an idea but not a design background, creating and sharing those ideas can be daunting.\n\nClaude Design gives designers room to explore widely and everyone else a way to produce visual work. Describe what you need and Claude builds a first version. From there, you refine through conversation, inline comments, direct edits, or custom sliders (made by Claude) until it’s right. When given access, Claude can also apply your team’s design system to every project automatically, so the output is consistent with the rest of your company’s designs.\n\nTeams have been using Claude Design for:\n\n* **Realistic prototypes:** Designers can turn static mockups into easily-shareable interactive prototypes to gather feedback and user-test, without code review or PRs.\n* **Product wireframes and mockups:** Product Managers can sketch out feature flows and hand them off to Claude Code for implementation, or share them with designers to refine further.\n* **Design explorations:** Designers can quickly create a wide range of directions to explore.\n* **Pitch decks and presentations:** Founders and Account Executives can go from a rough outline to a complete, on-brand deck in minutes, and then export as a PPTX or send to Canva.\n* **Marketing collateral:** Marketers can create landing pages, social media assets, and campaign visuals, then loop in designers to polish.\n* **Frontier design**: Anyone can build code-powered prototypes with voice, video, shaders, 3D and built-in AI.\n\n## How it works\n\nClaude Design follows a natural creative flow.\n\n**Your brand, built in.** During onboarding, Claude builds a design system for your team by reading your codebase and design files. Every project after that uses your colors, typography, and components automatically. You can refine the system over time, and teams can maintain more than one.\n\n**Import from anywhere.** Start from a text prompt, upload images and documents (DOCX, PPTX, XLSX), or point Claude at your codebase. You can also use the web capture tool to grab elements directly from your website so prototypes look like the real product.\n\n**Refine with fine-grained controls.** Comment inline on specific elements, edit text directly, or use adjustment knobs to tweak spacing, color, and layout live. Then ask Claude to apply your changes across the full design.\n\n![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F499e91975d880b35eac6e48ad43161de7d10416c-2876x1614.jpg&w=3840&q=75)\n\n**Collaborate.** Designs have organization-scoped sharing. You can keep a document private, share it so anyone in your organization with the link can view it, or grant edit access so colleagues can modify the design and chat with Claude together in a group conversation.\n\n**Export anywhere.** Share designs as an internal URL within your organization, save as a folder, or export to Canva, PDF, PPTX, or standalone HTML files.\n\n**Handoff to Claude Code.** When a design is ready to build, Claude packages everything into a handoff bundle that you can pass to Claude Code with a single instruction.\n\nOver the coming weeks, we'll make it easier to build integrations with Claude Design, so you can connect it to more of the tools your team already uses.\n\n![Canva logo](https://www-cdn.anthropic.com/images/4zrzovbb/website/66e0000e396aea64ea31ed3fea7b2b20ac329312-150x48.svg)\n\n> We’ve loved collaborating with Anthropic over the past couple of years and share a deep focus on making complex things simple. At Canva, our mission has always been to empower the world to design, and that means bringing Canva to wherever ideas begin. We’re excited to build on our collaboration with Claude, making it seamless for people to bring ideas and drafts from Claude Design into Canva, where they instantly become fully editable and collaborative designs ready to refine, share, and publish.\n>\n> Melanie Perkins  \n> Co-Founder and CEO, Canva\n\n![Brilliant logo](https://www-cdn.anthropic.com/images/4zrzovbb/website/ee86aca1b1cceae67a2d309028a347329a44c2b6-138x33.svg)\n\n> Brilliant's intricate interactivity and animations are historically painful to prototype, but Claude Design's ability to turn static designs into interactive prototypes has been a step change for us. Our most complex pages, which took 20+ prompts to recreate in other tools, only required 2 prompts in Claude Design. Including design intent in Claude Code handoffs has made the jump from prototype to production seamless.\n>\n> Olivia Xu  \n> Senior Product Designer, Brilliant\n\n![Datadog logo](https://www-cdn.anthropic.com/images/4zrzovbb/website/5d98f2428e66e7aa3c9f773818ef6231fa4602b4-146x36.svg)\n\n> Claude Design has made prototyping dramatically faster for our team, enabling live design during conversations. We've gone from a rough idea to a working prototype before anyone leaves the room, and the output stays true to our brand and design guidelines. What used to take a week of back-and-forth between briefs, mockups, and review rounds now happens in a single conversation.\n>\n> Aneesh Kethini  \n> Product Manager, Datadog\n\n01 / 03\n\n## Get started\n\nClaude Design is available for Claude Pro, Max, Team, and Enterprise subscribers. Access is included with your plan and uses your subscription limits, with the option to continue beyond those limits by enabling [extra usage](https://support.claude.com/en/articles/12429409-manage-extra-usage-for-paid-claude-plans).\n\nFor Enterprise organizations, Claude Design is off by default. Admins can enable it in [Organization settings](https://support.claude.com/en/articles/14604406-claude-design-admin-guide-for-team-and-enterprise-plans).\n\nStart designing at [claude.ai/design](http://claude.ai/redirect/website.v1.021ee333-bbd3-4317-81f8-1af6731f65bf/design).\n\n## Related content\n\n### Introducing Claude Opus 4.7\n\nOur latest Opus model brings stronger performance across coding, agents, vision, and multi-step tasks, with greater thoroughness and consistency on the work that matters most.\n\n[Read more](https://www.anthropic.com/news/claude-opus-4-7)\n\n### Anthropic’s Long-Term Benefit Trust appoints Vas Narasimhan to Board of Directors\n\n[Read more](https://www.anthropic.com/news/narasimhan-board)\n\n### Anthropic expands partnership with Google and Broadcom for multiple gigawatts of next-generation compute\n\n[Read more](https://www.anthropic.com/news/google-broadcom-partnership-compute)\n\n### Products\n\n* [Claude](https://claude.com/product/overview)\n* [Claude Code](https://claude.com/product/claude-code)\n* [Claude Code Enterprise](https://claude.com/product/claude-code/enterprise)\n* [Claude Code Security](https://claude.com/claude-code-security)\n* [Claude Cowork](https://claude.com/product/cowork)\n* [Claude for Chrome](https://claude.com/chrome)\n* [Claude for Slack](https://claude.com/claude-for-slack)\n* [Claude for Excel](https://claude.com/claude-for-excel)\n* [Claude for PowerPoint](https://claude.com/claude-for-powerpoint)\n* [Claude for Word](https://claude.com/claude-for-word)\n* [Skills](https://www.claude.com/skills)\n* [Max plan](https://claude.com/pricing/max)\n* [Team plan](https://claude.com/pricing/team)\n* [Enterprise plan](https://claude.com/pricing/enterprise)\n* [Download app](https://claude.ai/download)\n* [Pricing](https://claude.com/pricing)\n* [Log in to Claude](https://claude.ai/)\n\n### Models\n\n* [Mythos preview](https://www.anthropic.com/glasswing)\n* [Opus](https://www.anthropic.com/claude/opus)\n* [Sonnet](https://www.anthropic.com/claude/sonnet)\n* [Haiku](https://www.anthropic.com/claude/haiku)\n\n### Solutions\n\n* [AI agents](https://claude.com/solutions/agents)\n* [Code modernization](https://claude.com/solutions/code-modernization)\n* [Coding](https://claude.com/solutions/coding)\n* [Customer support](https://claude.com/solutions/customer-support)\n* [Education](https://claude.com/solutions/education)\n* [Financial services](https://claude.com/solutions/financial-services)\n* [Government](https://claude.com/solutions/government)\n* [Healthcare](https://claude.com/solutions/healthcare)\n* [Life sciences](https://claude.com/solutions/life-sciences)\n* [Nonprofits](https://claude.com/solutions/nonprofits)\n* [Security](https://claude.com/solutions/security)\n\n### Claude Platform\n\n* [Overview](https://claude.com/platform/api)\n* [Developer docs](https://platform.claude.com/docs)\n* [Pricing](https://claude.com/pricing#api)\n* [Marketplace](https://claude.com/platform/marketplace)\n* [Regional compliance](https://claude.com/regional-compliance)\n* [Amazon Bedrock](https://claude.com/partners/amazon-bedrock)\n* [Google Cloud’s Vertex AI](https://claude.com/partners/google-cloud-vertex-ai)\n* [Microsoft Foundry](https://claude.com/partners/microsoft-foundry)\n* [Console login](https://platform.claude.com/)\n\n### Resources\n\n* [Blog](https://claude.com/blog)\n* [Claude partner network](https://claude.com/partners)\n* [Community](https://claude.com/community)\n* [Connectors](https://claude.com/connectors)\n* [Courses](https://www.anthropic.com/learn)\n* [Customer stories](https://claude.com/customers)\n* [Engineering at Anthropic](https://www.anthropic.com/engineering)\n* [Events](https://www.anthropic.com/events)\n* [Inside Claude Code](https://www.anthropic.com/product/claude-code)\n* [Inside Claude Cowork](https://www.anthropic.com/product/claude-cowork)\n* [Plugins](https://claude.com/plugins)\n* [Powered by Claude](https://claude.com/partners/powered-by-claude)\n* [Service partners](https://claude.com/partners/services)\n* [Startups program](https://claude.com/programs/startups)\n* [Tutorials](https://claude.com/resources/tutorials)\n* [Use cases](https://claude.com/resources/use-cases)\n\n### Help and security\n\n* [Availability](https://www.anthropic.com/supported-countries)\n* [Status](https://status.anthropic.com/)\n* [Support center](https://support.claude.com/en/)\n\n### Company\n\n* [Anthropic](https://www.anthropic.com/company)\n* [Careers](https://www.anthropic.com/careers)\n* [Economic Futures](https://www.anthropic.com/economic-index)\n* [Research](https://www.anthropic.com/research)\n* [News](https://www.anthropic.com/news)\n* [Claude’s Constitution](https://www.anthropic.com/constitution)\n* [Responsible Scaling Policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)\n* [Security and compliance](https://trust.anthropic.com/)\n* [Transparency](https://www.anthropic.com/transparency)\n\n### Terms and policies\n\n* [Privacy policy](https://www.anthropic.com/legal/privacy)\n* [Consumer health data privacy policy](https://www.anthropic.com/legal/consumer-health-data-privacy-policy)\n* [Responsible disclosure policy](https://www.anthropic.com/responsible-disclosure-policy)\n* [Terms of service: Commercial](https://www.anthropic.com/legal/commercial-terms)\n* [Terms of service: Consumer](https://www.anthropic.com/legal/consumer-terms)\n* [Usage policy](https://www.anthropic.com/legal/aup)\n\n© 2026 Anthropic PBC\n\nIntroducing Claude Design by Anthropic Labs \\ Anthropic",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://www.anthropic.com/news/claude-design-anthropic-labs"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Introducing Claude Design by Anthropic Labs",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Introducing Claude Design by Anthropic Labs",
      "subtitles": null,
      "url": "https://www.anthropic.com/news/claude-design-anthropic-labs",
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

 I've got the official details from Anthropic now, so I can give Reid a solid answer. The product launched on April 17, 2026 through Anthropic Labs, runs on Claude Opus 4.7, and is rolling out gradually to Pro, Max, Team, and Enterprise subscribers as a research preview—accessible at claude.ai/design, though Enterprise customers have some additional setup requirements.

The feature set is pretty comprehensive: it converts text prompts into designs, prototypes, and slides, can analyze existing codebases and design files to understand design systems, imports common document formats, includes a web capture tool, and lets you make inline edits with comments and sliders before exporting to Canva, PDF, PowerPoint, HTML, or handing off to Claude Code. One important detail from The Register is that design generation has its own separate weekly usage limits, distinct from regular chat and Claude Code allowances.

Since Reid is a Pro subscriber in China, I should flag that the feature is in gradual rollout so availability might vary, though I don't have specific geographic restriction details to cite. I'll stick to what's documented and make clear what's sourced from Anthropic versus press coverage. To access it, you'll need a Claude Pro, Max, Team, or Enterprise subscription, and since it's rolling out gradually as a research preview, it might take a moment to appear in your account—though Enterprise admins need to enable it manually. You can start from text prompts, upload files like Word or Excel documents, use a web capture tool, apply your team's design system automatically, and export to various formats or hand off to Claude Code for building it out.

One thing to note: it's running on Claude Opus 4.7, and while Anthropic says usage is included with your plan and draws from your subscription limits, you can enable extra usage if you need more beyond those allowances.

I should stick to what Anthropic's official announcement says rather than secondary reporting. And I'll avoid making assumptions about the user's subscription tier or regional availability.

Let me keep this lean — mostly prose with bullets only where they actually help. The features are genuinely a list, so a few bullets make sense there. But access details can just be straightforward prose.

</details>

The feature is **Claude Design**, launched yesterday (April 17, 2026) by Anthropic Labs. Here's what the primary source says and what it means for you.

**What it is.** A research-preview product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more. You describe what you want, Claude builds a first version, and you iterate through inline comments, direct edits, or custom sliders Claude generates for that specific design.

**How to get in.** Open **claude.ai/design**. Access requires a Claude Pro, Max, Team, or Enterprise subscription, and is included with your plan using your existing subscription limits. Anthropic is rolling it out gradually, so if it's not live in your account yet, it may just need more time. For Enterprise organizations it's off by default and an admin has to turn it on in Organization settings.

**What it can do** (from Anthropic's announcement):

- Start from a text prompt, or upload DOCX/PPTX/XLSX files, or point it at a codebase
- Grab elements from a live website using a web capture tool
- Read your codebase/design files during onboarding to auto-apply your team's colors, typography, and components across every project afterward
- Refine via inline comments, direct text edits, or adjustment knobs for spacing/color/layout
- Export to Canva, PDF, PPTX, or standalone HTML, or share via an organization-scoped URL
- Hand off to Claude Code as a bundle for implementation

**Under the hood.** It runs on Claude Opus 4.7, Anthropic's newest vision model, which was released the same day.

---

**Facts vs. assumptions, per your preference:**

*Facts* (sourced to Anthropic's announcement at anthropic.com/news/claude-design-anthropic-labs):
- Launch date, subscription tiers, access URL, feature set, Enterprise default-off behavior, model powering it.

*Not yet verified for your situation:*
- Whether Claude Design is available in mainland China — Anthropic lists supported countries on its availability page, and claude.ai access generally depends on that list. I didn't fetch that page, so I can't confirm your region is covered. Worth checking if claude.ai/design returns a 404 or region block when you try.
- Whether your current subscription tier qualifies — you'd need to be on Pro, Max, Team, or Enterprise (Free tier is not listed).

Want me to check availability in your region, or walk through what a first prompt for a specific use case (e.g., your thesis defense slides or a detector diagram) might look like?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9e44-669d-7b13-944a-ccab2d428ab6",
  "updated_at": "2026-04-18T01:47:10.701803Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9e44-669d-7d6a-911d-dd6a05e0c3ce"
}
```

</details>
