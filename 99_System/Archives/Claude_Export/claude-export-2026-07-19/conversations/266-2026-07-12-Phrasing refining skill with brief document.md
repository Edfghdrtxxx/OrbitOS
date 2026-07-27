# Phrasing refining skill with brief document

## Export metadata (verbatim)

```json
{
  "uuid": "d7521bd6-ef71-4491-9bd5-ff73d74bb1ce",
  "name": "Phrasing refining skill with brief document",
  "summary": "**Conversation Overview**\n\nThe person shared a raw skill instruction snippet written for an AI skill file and invoked the `/phrasing-refining` skill on it. The instruction described conditional behavior: when a user triggers a skill with an argument like \"with brief document,\" the AI should produce a concise handoff document enabling a subsequent AI instance to continue the work seamlessly. The text contained multiple grammatical and spelling errors that needed correction.\n\nClaude read the skill file for `/phrasing-refining`, then produced four polished variants of the instruction — Idiomatic, Academic/Formal, Polished, and a shared Notes section — followed by an interactive practice prompt. The Notes section itemized every fix with explanations: subject-verb agreement (`If user use` → `If the user invokes`), repeated misspelling of \"brief,\" an ungrammatical relative clause (`or something else carries the similar semantic` → `or a semantically equivalent phrase`), incorrect use of `write down` for document authoring, a spelling error in `subsequent`, a redundant preposition in `continue with your work`, and a non-finite clause error (`while keep` → `while keeping`). Claude also flagged a structural issue in the original instruction: mixing an exact-match trigger with a fuzzy one in the same clause, and suggested the cleaner pattern of `\"X\" or any phrase with equivalent meaning`. The session closed with Claude posing a pattern-extraction exercise, asking the person to identify the reusable sentence skeleton from the polished variant before Claude would confirm it.\n\nThe person is working on AI skill instruction files and appears to be building or maintaining a library of skills for AI workflows. The domain involves precise, terse instructional writing for AI handoff documents. No corrections to Claude's approach were requested.",
  "created_at": "2026-07-12T07:22:50.649106Z",
  "updated_at": "2026-07-12T07:23:22.504786Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-12T07:22:55.404311Z

/phrasing-refining "

```skill
- If user use this skill with an argument "with berief document" or something else carries the similar semantic, write down a berif document to let the subseuqnt AI continue with your work seamlessly, while keep the document terse.
```

"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5535-1175-7689-9e8b-dd7b01829e42",
  "updated_at": "2026-07-12T07:22:55.404311Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-12T07:23:22.504786Z

<details>
<summary>Thinking (verbatim)</summary>

I need to check the skill file for the /phrasing-refining command to understand what it does.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-12T07:22:56.473359Z",
  "stop_timestamp": "2026-07-12T07:22:57.271114Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KjrbfhkG6MnGsE8d2VRbYL",
  "name": "view",
  "input": {
    "description": "Read the phrasing-refining skill instructions",
    "path": "/mnt/skills/user/phrasing-refining/SKILL.md"
  },
  "message": "Read the phrasing-refining skill instructions",
  "integration_name": "File Creation",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Read the phrasing-refining skill instructions"
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
  "start_timestamp": "2026-07-12T07:23:02.690980Z",
  "stop_timestamp": "2026-07-12T07:23:02.690991Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01KjrbfhkG6MnGsE8d2VRbYL",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: phrasing-refining\n     3\tdescription: \"Review English drafts for grammar, idiom, and naturalness. Correct inline with terse explanations.\"\n     4\t---\n     5\t\n     6\tYou are an English language coach for a B2-level non-native speaker.\n     7\t\n     8\tIf the argument contains text wrapped in `\"\"`, treat the quoted text as the draft to refine. Treat anything outside the quotes as additional instructions (e.g., register, tone, context). If there are no quotes, treat the entire argument as the draft.\n     9\t\n    10\tReview the draft and respond with **three versions**:\n    11\t\n    12\t### 1. Idiomatic\n    13\tRewrite the draft in a natural, conversational tone — the way a native speaker would say it in everyday speech or informal writing. Prioritize collocations, contractions, and rhythm.\n    14\t\n    15\t### 2. Academic / Formal\n    16\tRewrite the draft in a polished, formal register suitable for academic papers, professional emails, or official correspondence. Prefer precise vocabulary, complete forms (no contractions), and hedging where appropriate.\n    17\t\n    18\t### 3. Polished\n    19\tRewrite the draft as the strongest overall academic version for the likely context. Go beyond correction: improve flow, emphasis, sentence structure, and rhetorical clarity while preserving the user's meaning and technical precision. Always use an academic register for this version; prefer precise vocabulary, complete forms, and formal transitions rather than conversational phrasing.\n    20\t\n    21\tFor all three versions, **bold every changed word or phrase** compared to the original draft.\n    22\t\n    23\t### 4. Notes\n    24\tFor each change, one line: `original -> correction — why (tone)`\n    25\tGroup shared fixes first, then list tone-specific changes under `Idiomatic only` / `Academic only` sub-headings if needed.\n    26\t\n    27\tKeep notes terse. Focus on: grammar, word choice, collocations, idiom, register, and naturalness. Do not over-polish — preserve the user's voice and intent. Only flag what a native speaker would actually notice.\n    28\t\n    29\t### 5. Interactive Pattern Practice\n    30\tAfter the notes, add a short interactive phase:\n    31\t- Ask the user to extract the reusable sentence pattern from the polished version before revealing your own pattern. Do not provide hints, blanks, templates, or example patterns before the user attempts extraction.\n    32\t- Wait for the user's extracted pattern. Then check whether it is correct and refine it if needed.\n    33\t- After the pattern is confirmed, always ask the user to reuse the confirmed pattern by writing one new sentence about another topic related to their current work.\n    34\t- Keep this section brief and active-recall based. Do not provide the answer pattern immediately unless the user asks or attempts the exercise.\n    35\t\n    36\t",
      "uuid": "cfb0f3a7-f5c6-4893-ac0f-0a59c2dd273a"
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

<details>
<summary>Thinking (verbatim)</summary>

I'm reviewing a skill instruction that needs refinement. The main issues are grammatical—fixing the article and verb agreement in "If user use" to "If the user uses," correcting the spelling of "brief" which appears as both "berief" and "berif," and improving the phrasing of "or something else carries the similar semantic" to be more concise and natural.

I also need to address "subseuqnt" as a typo for "subsequent," change "write down a brief document" to just "write a brief document" since "write down" implies casual notes rather than formal documentation, and fix "while keep the document terse" to "while keeping the document terse" for proper grammar. The phrase "continue with your work" should be simplified to "continue your work" or "pick up your work."

</details>

### 1. Idiomatic
- **If the user invokes** this skill with **the** argument **"with brief document" or similar wording**, **write** a **brief handoff** document **so the next** AI **can pick up** your work seamlessly — **but keep it** terse.

### 2. Academic / Formal
- **If the user invokes** this skill with **the** argument **"with brief document" or a semantically equivalent phrase**, **produce** a **brief** document **that enables a subsequent** AI **to** continue your work seamlessly, while **keeping** the document terse.

### 3. Polished
- **When the user invokes** this skill with **the** argument **"with brief document" or any semantically equivalent phrase**, **produce a concise handoff** document **that enables a subsequent** AI **instance to** continue your work seamlessly**; brevity takes priority over completeness**.

### 4. Notes

Shared fixes:
- `If user use` → `If the user invokes` — missing article; subject–verb agreement (*user uses*); *invoke* is the standard verb for triggering a command/skill
- `berief / berif` → `brief` — spelling (same word misspelled two ways)
- `or something else carries the similar semantic` → `or a semantically equivalent phrase` — missing relative pronoun (*something else **that** carries*); *the similar* → *a similar* (non-specific reference); *semantic* is an adjective — the noun is *semantics* or *meaning*; the whole clause compresses naturally into one adjective phrase
- `write down a document` → `write / produce a document` — *write down* is for jotting notes or dictation, not authoring a document
- `subseuqnt` → `subsequent` — spelling
- `continue with your work` → `continue your work` — *continue* takes a direct object here; *continue with* is possible but weaker
- `while keep the document terse` → `while keeping the document terse` — after *while*, use the *-ing* form (elliptical clause)

Tone-specific:
- Polished only: `seamlessly, while keeping it terse` → `seamlessly; brevity takes priority over completeness` — turns the trailing constraint into an explicit priority rule, which is what instruction files need

One structural note for the skill file itself: `"with berief document" or something else carries the similar semantic` mixes an exact-match trigger with a fuzzy one. In instruction writing, the cleaner pattern is *"X" or any phrase with equivalent meaning* — one noun phrase, no second clause.

### 5. Interactive Pattern Practice
Before I show you mine: extract the reusable sentence pattern from the polished version — the skeleton you could reuse for other conditional instructions. Give it a try, then I'll check it.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5535-1175-74ac-95fe-47d3500c603d",
  "updated_at": "2026-07-12T07:23:22.504786Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f5535-1175-7689-9e8b-dd7b01829e42"
}
```

</details>
