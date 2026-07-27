# Design problem justification

## Export metadata (verbatim)

```json
{
  "uuid": "f6f671c7-9f2a-4bd6-9eb9-15c921f6f73c",
  "name": "Design problem justification",
  "summary": "**Conversation Overview**\n\nThe person is using a custom slash command `/phrasing-refining` that corresponds to a skill file stored at `/mnt/skills/user/phrasing-refining/SKILL.md`. They submitted a sentence for correction: \"Why do we need this design? What does the problems this design aim to solve?\" Claude initially responded directly from its own judgment without consulting the skill file, which the person flagged as incorrect behavior. The person explicitly corrected Claude, noting it should have invoked the corresponding skill rather than responding ad hoc.\n\nAfter the correction, Claude read the skill file and reapplied it properly, delivering the output in the skill's structured format: multiple phrasing variants (Idiomatic, Academic/Formal, Polished), a Notes section explaining each fix with grammatical reasoning, and an Interactive Pattern Practice prompt asking the person to extract the reusable sentence skeleton before Claude reveals it.\n\nThe key instruction for future interactions is clear: when the person invokes a `/phrasing-refining` command, Claude must read the skill file at `/mnt/skills/user/phrasing-refining/SKILL.md` first and follow its defined format, rather than responding directly from general knowledge. The person expects Claude to honor the skill-invocation workflow consistently.",
  "created_at": "2026-07-10T01:52:56.672112Z",
  "updated_at": "2026-07-10T01:55:56.838533Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-10T01:52:57.914589Z

/phrasing-refining 
" Why do we need this design? What does the problems this design aim to solve?"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f49ba-5046-75b8-bc6f-37d885603161",
  "updated_at": "2026-07-10T01:52:57.914589Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-10T01:53:02.023301Z

Two issues:

**"What does the problems"** → **"What problems does"** — subject-verb-object order is wrong. With "what" as the object, the auxiliary "does" comes after it, then subject, then bare verb: *What problems does this design aim to solve?* Also "problems" (plural) can't take "does the."

Clean version:

> Why do we need this design? What problems does it aim to solve?

("it" avoids repeating "this design" awkwardly; keep "this design" if you want the emphasis.)

Minor note: the two questions overlap in meaning — the second basically answers the first. If that's intentional (rhetorical build-up), fine. If you want them distinct:

> Why do we need this design, and what problem does it solve?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f49ba-5046-740a-a6de-b262646405d4",
  "updated_at": "2026-07-10T01:53:02.023301Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f49ba-5046-75b8-bc6f-37d885603161"
}
```

</details>

### 3. human — 2026-07-10T01:55:41.246689Z

Wait. Why didn't you invoke the corresponding skill? You asked to me directly instead.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f49bc-d218-7063-9f05-363ce48b17d7",
  "updated_at": "2026-07-10T01:55:41.246689Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f49ba-5046-740a-a6de-b262646405d4"
}
```

</details>

### 4. assistant — 2026-07-10T01:55:56.838533Z

You're right — the phrasing-refining skill exists and I should have read it before responding, rather than winging it from my own judgment. Let me do that now.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-10T01:55:42.267545Z",
  "stop_timestamp": "2026-07-10T01:55:42.903509Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SZtQFSgPbTxKKRK31ygYoA",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/phrasing-refining/SKILL.md",
    "description": "Reading the phrasing-refining skill I should have consulted first"
  },
  "message": "Reading the phrasing-refining skill I should have consulted first",
  "integration_name": "File Creation",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading the phrasing-refining skill I should have consulted first"
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
  "start_timestamp": "2026-07-10T01:55:47.466365Z",
  "stop_timestamp": "2026-07-10T01:55:47.466377Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01SZtQFSgPbTxKKRK31ygYoA",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: phrasing-refining\n     3\tdescription: \"Review English drafts for grammar, idiom, and naturalness. Correct inline with terse explanations.\"\n     4\t---\n     5\t\n     6\tYou are an English language coach for a B2-level non-native speaker.\n     7\t\n     8\tIf the argument contains text wrapped in `\"\"`, treat the quoted text as the draft to refine. Treat anything outside the quotes as additional instructions (e.g., register, tone, context). If there are no quotes, treat the entire argument as the draft.\n     9\t\n    10\tReview the draft and respond with **three versions**:\n    11\t\n    12\t### 1. Idiomatic\n    13\tRewrite the draft in a natural, conversational tone — the way a native speaker would say it in everyday speech or informal writing. Prioritize collocations, contractions, and rhythm.\n    14\t\n    15\t### 2. Academic / Formal\n    16\tRewrite the draft in a polished, formal register suitable for academic papers, professional emails, or official correspondence. Prefer precise vocabulary, complete forms (no contractions), and hedging where appropriate.\n    17\t\n    18\t### 3. Polished\n    19\tRewrite the draft as the strongest overall academic version for the likely context. Go beyond correction: improve flow, emphasis, sentence structure, and rhetorical clarity while preserving the user's meaning and technical precision. Always use an academic register for this version; prefer precise vocabulary, complete forms, and formal transitions rather than conversational phrasing.\n    20\t\n    21\tFor all three versions, **bold every changed word or phrase** compared to the original draft.\n    22\t\n    23\t### 4. Notes\n    24\tFor each change, one line: `original -> correction — why (tone)`\n    25\tGroup shared fixes first, then list tone-specific changes under `Idiomatic only` / `Academic only` sub-headings if needed.\n    26\t\n    27\tKeep notes terse. Focus on: grammar, word choice, collocations, idiom, register, and naturalness. Do not over-polish — preserve the user's voice and intent. Only flag what a native speaker would actually notice.\n    28\t\n    29\t### 5. Interactive Pattern Practice\n    30\tAfter the notes, add a short interactive phase:\n    31\t- Ask the user to extract the reusable sentence pattern from the polished version before revealing your own pattern. Do not provide hints, blanks, templates, or example patterns before the user attempts extraction.\n    32\t- Wait for the user's extracted pattern. Then check whether it is correct and refine it if needed.\n    33\t- After the pattern is confirmed, always ask the user to reuse the confirmed pattern by writing one new sentence about another topic related to their current work.\n    34\t- Keep this section brief and active-recall based. Do not provide the answer pattern immediately unless the user asks or attempts the exercise.\n    35\t\n    36\t",
      "uuid": "33a0ac02-4bbc-44e1-aa6c-557203134fef"
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

The draft: **"Why do we need this design? What does the problems this design aim to solve?"**

### 1. Idiomatic
Why do we need this design? What **problems is it trying to** solve?

### 2. Academic / Formal
Why is this design necessary? What **problems does it aim to** **address**?

### 3. Polished
Why is this design necessary, **and what problems does it aim to solve**?

### 4. Notes
Shared fixes:
- `What does the problems ... aim` → `What problems does it aim` — question word order: the object (*what problems*) fronts, then auxiliary *does*, then subject, then bare verb. Your version doubled the auxiliary and misplaced the subject.
- `the problems` → `problems` — no article before a plural, non-specific noun; and *the ... does* was a number mismatch.
- `this design aim` → `it aim(s)` — avoids repeating *this design*; the pronoun is cleaner once the referent is established.

Academic only:
- `we need this design` → `this design is necessary` — impersonal register; drops the conversational *we need*.
- `solve` → `address` — slightly more formal collocation with *problems* (both are fine; *solve* is not wrong).

Polished only:
- Two questions → one — the second question largely restates the first, so merging with *and* removes the redundancy while keeping the rhetorical build.

### 5. Interactive Pattern Practice
Before I show you the reusable pattern: look at the polished version and try to extract the underlying sentence pattern yourself — the structural skeleton you could reuse for other topics. Write it out, and I'll check it.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f49bc-d218-7c11-aa7e-5d6a4a9da0ff",
  "updated_at": "2026-07-10T01:55:56.838533Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f49bc-d218-7063-9f05-363ce48b17d7"
}
```

</details>
