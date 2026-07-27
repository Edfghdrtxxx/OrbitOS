# Explaining computer science concepts simply

## Export metadata (verbatim)

```json
{
  "uuid": "03ed809a-3c12-4459-9f8d-827ab97d1fe2",
  "name": "Explaining computer science concepts simply",
  "summary": "**Conversation Overview**\n\nThe person self-identified as a beginner in computer science and submitted a sentence for refinement using the `phrasing-refining` skill. Their original sentence requested that Claude use an explanatory tone and explain things vividly when decisions are needed. The goal was to improve the phrasing of this self-introduction and communication preference statement.\n\nClaude read the relevant skill file and produced three refined versions of the sentence — idiomatic, academic/formal, and polished — along with a correction table identifying specific grammar and collocation errors in the original. Key corrections included fixing the preposition \"novice on\" to \"novice in,\" replacing \"explain vividly\" with more appropriate idioms like \"explain clearly\" or \"in plain terms,\" and restructuring the conditional phrasing for greater naturalness. The response concluded with an interactive pattern-practice exercise, inviting the person to extract the abstract sentence structure from the polished version before receiving further explanation.\n\nThe person's stated preference is for an explanatory, accessible communication style when decisions or technical choices are involved — this should be kept in mind for future interactions involving computer science topics.",
  "created_at": "2026-07-16T07:42:27.215120Z",
  "updated_at": "2026-07-16T07:42:51.333560Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-16T07:42:30.474088Z

/phrasing-refining "  I am a novice on computer science. If you need me to decide anything, use an explanatory tone and explain vividly to me."

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69e0-7809-7cfc-9bff-01180c1f35f5",
  "updated_at": "2026-07-16T07:42:30.474088Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-16T07:42:51.333560Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-16T07:42:30.466036Z",
  "stop_timestamp": "2026-07-16T07:42:30.930084Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016A4vWpUryHhsJ2PJBmv14n",
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
  "start_timestamp": "2026-07-16T07:42:36.390826Z",
  "stop_timestamp": "2026-07-16T07:42:36.390855Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_016A4vWpUryHhsJ2PJBmv14n",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: phrasing-refining\n     3\tdescription: \"Review English drafts for grammar, idiom, and naturalness. Correct inline with terse explanations.\"\n     4\t---\n     5\t\n     6\tYou are an English language coach for a B2-level non-native speaker.\n     7\t\n     8\tIf the argument contains text wrapped in `\"\"`, treat the quoted text as the draft to refine. Treat anything outside the quotes as additional instructions (e.g., register, tone, context). If there are no quotes, treat the entire argument as the draft.\n     9\t\n    10\tReview the draft and respond with **three versions**:\n    11\t\n    12\t### 1. Idiomatic\n    13\tRewrite the draft in a natural, conversational tone — the way a native speaker would say it in everyday speech or informal writing. Prioritize collocations, contractions, and rhythm.\n    14\t\n    15\t### 2. Academic / Formal\n    16\tRewrite the draft in a polished, formal register suitable for academic papers, professional emails, or official correspondence. Prefer precise vocabulary, complete forms (no contractions), and hedging where appropriate.\n    17\t\n    18\t### 3. Polished\n    19\tRewrite the draft as the strongest overall academic version for the likely context. Go beyond correction: improve flow, emphasis, sentence structure, and rhetorical clarity while preserving the user's meaning and technical precision. Always use an academic register for this version; prefer precise vocabulary, complete forms, and formal transitions rather than conversational phrasing.\n    20\t\n    21\tFor all three versions, **bold every changed word or phrase** compared to the original draft.\n    22\t\n    23\t### 4. Notes\n    24\tFor each change, one line: `original -> correction — why (tone)`\n    25\tGroup shared fixes first, then list tone-specific changes under `Idiomatic only` / `Academic only` sub-headings if needed.\n    26\t\n    27\tKeep notes terse. Focus on: grammar, word choice, collocations, idiom, register, and naturalness. Do not over-polish — preserve the user's voice and intent. Only flag what a native speaker would actually notice.\n    28\t\n    29\t### 5. Interactive Pattern Practice\n    30\tAfter the notes, add a short interactive phase:\n    31\t- Ask the user to extract the reusable sentence pattern from the polished version before revealing your own pattern. Do not provide hints, blanks, templates, or example patterns before the user attempts extraction.\n    32\t- Wait for the user's extracted pattern. Then check whether it is correct and refine it if needed.\n    33\t- After the pattern is confirmed, always ask the user to reuse the confirmed pattern by writing one new sentence about another topic related to their current work.\n    34\t- Keep this section brief and active-recall based. Do not provide the answer pattern immediately unless the user asks or attempts the exercise.\n    35\t\n    36\t",
      "uuid": "7a8bfeee-aeaf-4976-a419-d2250d17821b"
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

Here are the three refined versions of your sentence:

---

### 1. Idiomatic
"I'm **pretty new to** computer science. **Whenever you need me to make a decision, please walk me through it** — **spell it out clearly** so I can follow along."

### 2. Academic / Formal
"I **have limited background** in computer science. **Should any decision be required on my part**, I would appreciate **a thorough explanation presented in accessible terms**."

### 3. Polished
"I **have little background** in computer science. **When a decision is required of me**, please **explain the options clearly and in plain terms** so that I can respond **meaningfully**."

---

### 4. Notes

| Original | Correction | Why |
|---|---|---|
| "novice on" | **novice in** | fixed preposition — "novice in [field]" is the standard collocation |
| "if you need me to decide anything" | **when(ever) a decision is required / should a decision be required** | "if you need me to decide anything" sounds slightly informal/awkward; restructuring is more natural |
| "use an explanatory tone" | removed as a meta-instruction | native speakers don't typically ask for a "tone"; the meaning is better captured by saying *explain clearly* |
| "explain vividly" | **explain clearly / in plain terms / spell it out** | "vividly" collocates with sensory description, not explanations; "clearly" or "in plain terms" is the right idiom here |

**Idiomatic only:** "walk me through it", "spell it out", "follow along" — natural conversational chunks for this idea.

**Academic only:** "have limited background", "accessible terms", "thorough explanation" — formal register appropriate for written requests.

---

### 5. Interactive Pattern Practice

Before I show you the reusable pattern from the **Polished** version, try to extract it yourself.

Look at this sentence:
> *"When a decision is required of me, please explain the options clearly and in plain terms so that I can respond meaningfully."*

**What is the underlying sentence pattern here?** Try to write it in abstract form (e.g., using placeholders like `[condition]`, `[request]`, `[purpose]`).

Take a shot — no hints yet! 🎯

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69e0-7809-7c72-83fe-717d0e7fb86d",
  "updated_at": "2026-07-16T07:42:51.333560Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f69e0-7809-7cfc-9bff-01180c1f35f5"
}
```

</details>
