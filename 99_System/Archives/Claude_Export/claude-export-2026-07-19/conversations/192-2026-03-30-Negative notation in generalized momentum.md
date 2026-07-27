# Negative notation in generalized momentum

## Export metadata (verbatim)

```json
{
  "uuid": "e10fe838-e954-4b3e-9f39-2317658eb389",
  "name": "Negative notation in generalized momentum",
  "summary": "**Conversation Overview**\n\nThe person used a `/phrasing-refining` skill command to request editing help on a two-part question about physics notation. Specifically, they wanted to refine a question asking why a negative sign appears before generalized momentum but not generalized position, and what the symbol \"f\" represents in an image.\n\nClaude read the relevant skill file and then applied it to produce two refined versions of the original draft: an idiomatic version suited for casual or spoken contexts, and an academic/formal version suited for written or scholarly contexts. Claude also provided a structured notes section explaining each correction made, including subject-auxiliary inversion in direct questions (`why there is` → `why is there`), collocation correction (`negative notation` → `negative sign`), addition of definite articles before specific physics terms, repair of a fragmentary clause missing a verb, and register-appropriate verb choices (`stand for` vs. `denote`) and terminology (`image` vs. `figure`).\n\nThe interaction demonstrates the person's interest in physics-related academic writing and their use of structured skill commands to get targeted language refinement. The workflow followed a clear pattern: skill file retrieval followed by dual-register output with explicit linguistic annotations.",
  "created_at": "2026-03-30T01:33:56.333736Z",
  "updated_at": "2026-03-30T01:34:17.777874Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-30T01:33:57.329630Z

/phrasing-refining "Why there is a negative notation in front of generalized momentum while positive for generalized position? What does the "f" mean in the image?"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c60-4a74-7164-aa6b-eb35846958a5",
  "updated_at": "2026-03-30T01:33:57.329630Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-30T01:34:17.766885Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to use the phrasing-refining skill. Let me read the skill file first.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-30T01:33:59.170018Z",
  "stop_timestamp": "2026-03-30T01:33:59.733682Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01PF2Y7X2tBSXWrcx2u6fS3F",
  "name": "view",
  "input": {
    "description": "Reading phrasing-refining skill",
    "path": "/mnt/skills/user/phrasing-refining/SKILL.md"
  },
  "message": "Reading phrasing-refining skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading phrasing-refining skill"
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
  "tool_use_id": "toolu_01PF2Y7X2tBSXWrcx2u6fS3F",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\r\n     2\tname: phrasing-refining\r\n     3\tdescription: Review English drafts for grammar, idiom, and naturalness. Correct inline with terse explanations.\r\n     4\t---\r\n     5\tYou are an English language coach for a B2-level non-native speaker.\r\n     6\t\r\n     7\tIf the argument contains text wrapped in `\"\"`, treat the quoted text as the draft to refine. Treat anything outside the quotes as additional instructions (e.g., register, tone, context). If there are no quotes, treat the entire argument as the draft.\r\n     8\t\r\n     9\tReview the draft and respond with **two versions side by side**:\r\n    10\t\r\n    11\t### 1. Idiomatic\r\n    12\tRewrite the draft in a natural, conversational tone — the way a native speaker would say it in everyday speech or informal writing. Prioritize collocations, contractions, and rhythm.\r\n    13\t\r\n    14\t### 2. Academic / Formal\r\n    15\tRewrite the draft in a polished, formal register suitable for academic papers, professional emails, or official correspondence. Prefer precise vocabulary, complete forms (no contractions), and hedging where appropriate.\r\n    16\t\r\n    17\tFor both versions, **bold every changed word or phrase** compared to the original draft.\r\n    18\t\r\n    19\t### 3. Notes\r\n    20\tFor each change, one line: `original -> correction — why (tone)`\r\n    21\tGroup shared fixes first, then list tone-specific changes under `Idiomatic only` / `Academic only` sub-headings if needed.\r\n    22\t\r\n    23\tKeep notes terse. Focus on: grammar, word choice, collocations, idiom, register, and naturalness. Do not over-polish — preserve the user's voice and intent. Only flag what a native speaker would actually notice.\r\n    24\t\r\n    25\t## Persistent Suggestions File\r\n    26\tPath: `50_Resources/English/English_Suggestions_Claude.md`\r\n    27\tWhen the user asks for English learning suggestions, update this file. Keep it **terse and table-driven**:\r\n    28\t- **Active Patterns** table: one row per error pattern, merge new examples into existing rows rather than adding new ones\r\n    29\t- **Corrected Collocations** list: flat `wrong → right` entries, deduplicate\r\n    30\t- Remove patterns the user has demonstrably mastered (no errors in 3+ sessions)\r\n    31\t- Never organize by session date — organize by pattern category only\r\n    32\t",
      "uuid": "7969cb23-e1d4-485a-8790-42e081a91575"
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

Now I'll apply the skill to the draft.

Draft: "Why there is a negative notation in front of generalized momentum while positive for generalized position? What does the "f" mean in the image?"

Issues:
1. "Why there is" → "Why is there" (subject-verb inversion in questions)
2. "negative notation" → probably "negative sign" or "minus sign" — "notation" is not the right collocation here
3. "in front of generalized momentum" — slightly awkward; "before" or "preceding" could work, or "on the generalized momentum term"


4. "while positive for generalized position" — missing "it is" or some verb; also "positive" alone is a bit vague
5. The second sentence is fine but "in the image" could be "in the figure" for academic context.

</details>

---

### 1. Idiomatic

**"Why is there** a negative **sign** in front of **the** generalized momentum **but not** **the** generalized position? What does **the** 'f' **stand for** in the image?"

---

### 2. Academic / Formal

"**Why does** a negative **sign appear** **before** the generalized momentum **whereas the generalized position carries a positive one**? What does **'**f**'** **denote** in the **figure**?"

---

### 3. Notes

**Shared fixes**

- `Why there is` → `Why is there` / `Why does … appear` — questions require subject-auxiliary inversion; *why there is* is a subordinate clause structure, not a direct question
- `negative notation` → `negative sign` — the standard collocation; *notation* refers to a system of symbols, not a single symbol
- `generalized momentum` / `generalized position` → `the generalized momentum` / `the generalized position` — specific physical quantities take the definite article
- `while positive for generalized position` → needs a verb; the original reads as a fragment (missing *it is* or equivalent)

**Idiomatic only**

- `but not the generalized position` — natural contrast phrasing in speech
- `stand for` — the idiomatic verb for "what does an abbreviation mean?"

**Academic only**

- `whereas … carries a positive one` — formal adversative conjunction; avoids the abrupt *but not*
- `denote` — the standard academic verb for mathematical symbols (preferred over *mean* or *stand for* in formal writing)
- `figure` — the conventional term in academic papers; *image* is informal in this context

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c60-4a74-75a1-8458-f6ba59ba3fcb",
  "updated_at": "2026-03-30T01:34:17.766885Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3c60-4a74-7164-aa6b-eb35846958a5"
}
```

</details>
