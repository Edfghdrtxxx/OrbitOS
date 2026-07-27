# Importing skills to Claude desktop

## Export metadata (verbatim)

```json
{
  "uuid": "f84689cc-dc24-458c-a85b-27d6bd7c65c0",
  "name": "Importing skills to Claude desktop",
  "summary": "**Conversation Overview**\n\nThe person asked a brief technical question about how to import skills to Claude Desktop. Claude clarified the distinction between different Claude environments and features: the file-based skills system used in the claude.ai chat interface is platform-managed and not manually imported, while Claude Desktop supports customization through persistent custom instructions (via Settings → Custom Instructions) and MCP (Model Context Protocol) server configurations via the `claude_desktop_config.json` file. Claude referenced the official documentation at docs.claude.com for MCP setup details and asked a follow-up question to better understand the person's specific goal — whether they were looking to add custom tools, persistent instructions, or something else. The conversation ended without the person providing clarification on their underlying objective.",
  "created_at": "2026-03-07T12:04:40.918149Z",
  "updated_at": "2026-03-07T12:04:56.385595Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-07T12:04:42.551130Z

How to import skills to claude desktop?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cc82f-7e61-7db9-a722-03c195de62a5",
  "updated_at": "2026-03-07T12:04:42.551130Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-07T12:04:56.385595Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-07T12:04:43.722537Z",
  "stop_timestamp": "2026-03-07T12:04:44.351953Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Knpc1NZBhhbJnkg1GKao33",
  "name": "view",
  "input": {
    "path": "/mnt/skills/public/product-self-knowledge/SKILL.md",
    "description": "Check product self-knowledge skill"
  },
  "message": "Check product self-knowledge skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check product self-knowledge skill"
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
  "tool_use_id": "toolu_01Knpc1NZBhhbJnkg1GKao33",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: product-self-knowledge\n     3\tdescription: \"Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Claude Code (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Claude API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Claude.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Claude capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong.\"\n     4\t---\n     5\t\n     6\t# Anthropic Product Knowledge\n     7\t\n     8\t## Core Principles\n     9\t\n    10\t1. **Accuracy over guessing** - Check official docs when uncertain\n    11\t2. **Distinguish products** - Claude.ai, Claude Code, and Claude API are separate products\n    12\t3. **Source everything** - Always include official documentation URLs\n    13\t4. **Right resource first** - Use the correct docs for each product (see routing below)\n    14\t\n    15\t---\n    16\t\n    17\t## Question Routing\n    18\t\n    19\t### Claude API or Claude Code questions?\n    20\t\n    21\t→ **Check the docs maps first**, then navigate to specific pages:\n    22\t\n    23\t- **Claude API & General:** https://docs.claude.com/en/docs_site_map.md\n    24\t- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    25\t\n    26\t### Claude.ai questions?\n    27\t\n    28\t→ **Browse the support page:**\n    29\t\n    30\t- **Claude.ai Help Center:** https://support.claude.com\n    31\t\n    32\t---\n    33\t\n    34\t## Response Workflow\n    35\t\n    36\t1. **Identify the product** - API, Claude Code, or Claude.ai?\n    37\t2. **Use the right resource** - Docs maps for API/Code, support page for Claude.ai\n    38\t3. **Verify details** - Navigate to specific documentation pages\n    39\t4. **Provide answer** - Include source link and specify which product\n    40\t5. **If uncertain** - Direct user to relevant docs: \"For the most current information, see [URL]\"\n    41\t\n    42\t---\n    43\t\n    44\t## Quick Reference\n    45\t\n    46\t**Claude API:**\n    47\t\n    48\t- Documentation: https://docs.claude.com/en/api/overview\n    49\t- Docs Map: https://docs.claude.com/en/docs_site_map.md\n    50\t\n    51\t**Claude Code:**\n    52\t\n    53\t- Documentation: https://docs.claude.com/en/docs/claude-code/overview\n    54\t- Docs Map: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    55\t- npm Package: https://www.npmjs.com/package/@anthropic-ai/claude-code\n    56\t\n    57\t**Claude.ai:**\n    58\t\n    59\t- Support Center: https://support.claude.com\n    60\t- Getting Help: https://support.claude.com/en/articles/9015913-how-to-get-support\n    61\t\n    62\t**Other:**\n    63\t\n    64\t- Product News: https://www.anthropic.com/news\n    65\t- Enterprise Sales: https://www.anthropic.com/contact-sales\n    66\t",
      "uuid": "432f2325-067e-4dbe-8d9b-33095f35e40c"
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

"Skills" as they appear in this chat interface (the file-based instructions in `/mnt/skills/`) are a feature specific to **claude.ai's web/desktop chat environment** — they're not something you manually import or configure. They're pre-loaded by Anthropic's platform automatically based on context.

That said, if you're asking about **Claude Desktop** (the standalone app), the closest equivalent concept would be **MCP servers** or **custom system prompts**. Here's a quick breakdown:

**If you mean the Claude.ai desktop app:**
Skills like the ones used here (docx, pptx, etc.) are built into the platform — you don't need to import them. They're available automatically.

**If you mean configuring Claude Desktop with custom behavior:**
You can set persistent custom instructions via **Settings → Custom Instructions**, which acts like a persistent prompt/persona.

**If you mean MCP (Model Context Protocol) tools:**
Claude Desktop supports MCP servers, which let you extend Claude with custom tools. You'd configure them in the `claude_desktop_config.json` file. For details, the official docs are the best source: [docs.claude.com](https://docs.claude.com)

Could you clarify what you're trying to accomplish? Are you looking to add custom tools, persistent instructions, or something else? That'll help me point you in the right direction.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cc82f-7e61-7c2d-a49b-c0de47c34c01",
  "updated_at": "2026-03-07T12:04:56.385595Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cc82f-7e61-7db9-a722-03c195de62a5"
}
```

</details>
