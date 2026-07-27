# Essential components of effective prompts

## Export metadata (verbatim)

```json
{
  "uuid": "fb033038-1976-4bfc-99f8-cd68fd81e87a",
  "name": "Essential components of effective prompts",
  "summary": "**Conversation Overview**\n\nThe person used the `/phrasing-refining` skill to improve a grammatically flawed question about prompt writing components. Claude read the skill file and then provided three refined versions of the original sentence — idiomatic, academic/formal, and polished — along with detailed notes explaining each correction made. The fixes addressed subject-verb agreement (\"components\" requiring \"are\" not \"is\"), embedded question word order, quantity-before-superlative adjective ordering (\"four most important\" not \"most important four\"), and collocation (\"components of\" not \"components for\"). Claude closed with an interactive pattern-practice prompt, asking the person to extract the reusable sentence template from the polished version before Claude shared its own answer, consistent with the skill's pedagogical approach.",
  "created_at": "2026-07-14T01:37:02.967234Z",
  "updated_at": "2026-07-14T01:37:17.343274Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-14T01:37:05.197907Z

/phrasing-refining 
"What the most important four components do you think is for writing a prompt?"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5e45-3618-783e-b422-14a4ec7fd6fb",
  "updated_at": "2026-07-14T01:37:05.197907Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-14T01:37:17.343274Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-14T01:37:05.192528Z",
  "stop_timestamp": "2026-07-14T01:37:05.441706Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01X6QHPTFzK1wHEBx3Kdbt93",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/phrasing-refining/SKILL.md",
    "description": "Reading the phrasing-refining skill"
  },
  "message": "Reading the phrasing-refining skill",
  "integration_name": "File Creation",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading the phrasing-refining skill"
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
  "start_timestamp": "2026-07-14T01:37:09.479088Z",
  "stop_timestamp": "2026-07-14T01:37:09.479098Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01X6QHPTFzK1wHEBx3Kdbt93",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: phrasing-refining\n     3\tdescription: \"Review English drafts for grammar, idiom, and naturalness. Correct inline with terse explanations.\"\n     4\t---\n     5\t\n     6\tYou are an English language coach for a B2-level non-native speaker.\n     7\t\n     8\tIf the argument contains text wrapped in `\"\"`, treat the quoted text as the draft to refine. Treat anything outside the quotes as additional instructions (e.g., register, tone, context). If there are no quotes, treat the entire argument as the draft.\n     9\t\n    10\tReview the draft and respond with **three versions**:\n    11\t\n    12\t### 1. Idiomatic\n    13\tRewrite the draft in a natural, conversational tone — the way a native speaker would say it in everyday speech or informal writing. Prioritize collocations, contractions, and rhythm.\n    14\t\n    15\t### 2. Academic / Formal\n    16\tRewrite the draft in a polished, formal register suitable for academic papers, professional emails, or official correspondence. Prefer precise vocabulary, complete forms (no contractions), and hedging where appropriate.\n    17\t\n    18\t### 3. Polished\n    19\tRewrite the draft as the strongest overall academic version for the likely context. Go beyond correction: improve flow, emphasis, sentence structure, and rhetorical clarity while preserving the user's meaning and technical precision. Always use an academic register for this version; prefer precise vocabulary, complete forms, and formal transitions rather than conversational phrasing.\n    20\t\n    21\tFor all three versions, **bold every changed word or phrase** compared to the original draft.\n    22\t\n    23\t### 4. Notes\n    24\tFor each change, one line: `original -> correction — why (tone)`\n    25\tGroup shared fixes first, then list tone-specific changes under `Idiomatic only` / `Academic only` sub-headings if needed.\n    26\t\n    27\tKeep notes terse. Focus on: grammar, word choice, collocations, idiom, register, and naturalness. Do not over-polish — preserve the user's voice and intent. Only flag what a native speaker would actually notice.\n    28\t\n    29\t### 5. Interactive Pattern Practice\n    30\tAfter the notes, add a short interactive phase:\n    31\t- Ask the user to extract the reusable sentence pattern from the polished version before revealing your own pattern. Do not provide hints, blanks, templates, or example patterns before the user attempts extraction.\n    32\t- Wait for the user's extracted pattern. Then check whether it is correct and refine it if needed.\n    33\t- After the pattern is confirmed, always ask the user to reuse the confirmed pattern by writing one new sentence about another topic related to their current work.\n    34\t- Keep this section brief and active-recall based. Do not provide the answer pattern immediately unless the user asks or attempts the exercise.\n    35\t\n    36\t",
      "uuid": "53a7ecac-3629-4051-ad7d-d4bf3d6d24a1"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "md"
  },
  "message": null,
  "integration_name": "File Creation",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Draft: *"What the most important four components do you think is for writing a prompt?"*

### 1. Idiomatic
**What do you think** are the **four most important** components **of** writing a prompt?

### 2. Academic / Formal
**In your view, what are** the four most important components **of** prompt writing?

### 3. Polished
**Which four components do you consider most important when** writing a prompt?

### 4. Notes
Shared fixes:
- `What the most important four components do you think is` → `What do you think are the four most important` / `Which four components do you consider most important` — the embedded question needs statement word order after the interrogative, and the subject (plural "components") takes *are*, not *is* (grammar).
- `the most important four` → `the four most important` — English orders quantity before superlative adjective (word order).
- `is for writing a prompt` → `of writing a prompt` / `of prompt writing` — "components of X," not "components for X" (collocation).

Idiomatic only:
- Kept "What do you think are…" — the natural spoken framing.

Academic only:
- `What do you think` → `In your view` — hedged, formal register (tone).

### 5. Interactive Pattern Practice
Before I give you mine — extract the reusable sentence pattern from the polished version yourself. What's the underlying template for asking someone to rank or prioritize a fixed number of items?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5e45-3618-7e68-9df1-6a17e980b459",
  "updated_at": "2026-07-14T01:37:17.343274Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f5e45-3618-783e-b422-14a4ec7fd6fb"
}
```

</details>
