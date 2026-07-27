# Essential components of effective prompts

## Export metadata (verbatim)

```json
{
  "uuid": "72680184-a27a-4c55-8839-e2b7fd6c5e1c",
  "name": "Essential components of effective prompts",
  "summary": "**Conversation Overview**\n\nThe person asked Claude to identify the four most important components of writing a prompt. Claude provided a ranked list: clear task and objective, context and constraints, examples (few-shot), and output format specification, noting alignment with Anthropic's official prompt engineering documentation and linking to it directly. Claude also flagged that for agentic or complex work, chain-of-thought prompting and role-setting might warrant inclusion.\n\nThe person then shared a four-header template structure — `# Goal`, `# Context`, `# Examples`, `# Output format` — and asked whether it mapped to Claude's list. Claude confirmed all four headers corresponded cleanly to its recommended components, but highlighted a subtlety: the `# Context` header risks obscuring the distinction between background information and hard constraints (what to avoid, limits, rules). Claude proposed an optional five-header expansion splitting `# Context` into `# Context` and `# Constraints` to make that distinction explicit. Claude also noted that headers are scaffolding, not guarantees — content quality within each section determines actual prompt effectiveness.\n\nThe person demonstrated a preference for structured, template-based thinking about prompting and appears to be developing practical skills around Claude usage, potentially including Claude Code work (mentioned by Claude as relevant context for weighting prompt components).",
  "created_at": "2026-07-14T01:41:11.461654Z",
  "updated_at": "2026-07-14T09:27:28.916679Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-14T01:41:12.591312Z

Which four components do you consider the most important when writing a prompt?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5e49-00ef-77a5-b5df-6287a6a0176b",
  "updated_at": "2026-07-14T01:41:12.591312Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-14T01:41:21.210451Z

The four I'd weight most heavily:

1. **Clear task and objective** — State exactly what you want produced and what "done" looks like. Ambiguity here propagates into everything downstream.

2. **Context and constraints** — Background the model needs (audience, domain, prior decisions) plus hard limits (length, format, what to avoid). This is where your research-domain specificity pays off.

3. **Examples (few-shot)** — Concrete input→output pairs, or positive/negative samples. Usually the highest-leverage single addition for shaping style and structure.

4. **Output format specification** — Explicit structure (JSON schema, XML tags, section headings, length). Removes a whole class of "close but unusable" results.

A brief note on attribution, per your preference: the above is my own synthesized judgment, not a sourced claim. It aligns closely with Anthropic's own prompt-engineering guidance, which emphasizes being clear and direct, using examples, giving Claude a role/context, and specifying output format — see https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview for the primary source. If you want, I can pull the exact list Anthropic publishes and compare it against mine.

One honest caveat: "most important four" is a ranking judgment, and reasonable practitioners weight these differently depending on task type (a one-off factual query needs little; an agentic pipeline needs far more structure). For your Claude Code skill work, chain-of-thought prompting and role-setting would arguably crack the top four.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5e49-00ef-7642-8f05-aecafd975449",
  "updated_at": "2026-07-14T01:41:21.210451Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f5e49-00ef-77a5-b5df-6287a6a0176b"
}
```

</details>

### 3. human — 2026-07-14T01:43:35.245207Z

<components>
# Goal
# Context
# Examples
# Output format
<components>

If I send AI a structure like this, can I match what you just said?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5e4b-26dd-7121-bfb9-7dfee1d3cce0",
  "updated_at": "2026-07-14T01:43:35.245207Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f5e49-00ef-7642-8f05-aecafd975449"
}
```

</details>

### 4. assistant — 2026-07-14T01:43:44.072461Z

Close, but not a full match. Your structure covers three of my four cleanly and drops one:

- **# Goal** → matches my #1 (task/objective) ✓
- **# Context** → matches my #2 (context and constraints) ✓
- **# Examples** → matches my #3 ✓
- **# Output format** → matches my #4 ✓

So actually all four map. The gap is subtler: a bare header skeleton isn't the same as the content quality each header demands. The headers are necessary scaffolding but not sufficient — an empty `# Goal` invites a vague one-liner, which is exactly the failure mode my #1 warns against.

Two honest caveats:

**Facts vs. my judgment:** The mapping above is factual (your four labels do correspond to my four). But "does this structure work well" is my assessment, not a verifiable claim. Whether a template helps depends on how you fill it, which no header can enforce.

**One thing the skeleton hides:** constraints. In my #2 I bundled context *and* constraints (length limits, what to avoid, hard rules). A reader of your template might put only background under `# Context` and forget the negative constraints. You might consider splitting it:

```
# Goal
# Context
# Constraints
# Examples
# Output format
```

That five-header version maps more completely to what I described and separates "here's the situation" from "here's what you must/must not do" — a distinction that tends to matter in practice.

So: yes, your structure matches, with the caveat that headers are prompts-for-yourself, not guarantees.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5e4b-26dd-7171-8e9a-f1934a2a6c11",
  "updated_at": "2026-07-14T01:43:44.072461Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f5e4b-26dd-7121-bfb9-7dfee1d3cce0"
}
```

</details>
