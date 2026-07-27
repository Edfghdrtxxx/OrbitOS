# TOEFL reading section practice

## Export metadata (verbatim)

```json
{
  "uuid": "ddcd6667-d9b5-4549-9ad3-8105631ae8ce",
  "name": "TOEFL reading section practice",
  "summary": "**Conversation Overview**\n\nThe person is preparing for the TOEFL iBT 2026 redesign and sought focused practice on the new \"Complete the Words\" reading task, where an academic paragraph contains ten words with missing letters that must be reconstructed from context. The session began with an initial practice round using a volcanology passage, after which the person asked Claude to first research the official ETS specifications for the task format before building a reusable practice skill. The person stated a clear preference for plain text output (no widgets or artifacts during practice), exact letter counts shown per blank, and a session loop of generate → answer → mark and explain.\n\nClaude researched the task, distinguished confirmed ETS facts (official name \"Complete the Words,\" live since January 21, 2026, measures vocabulary and meaning-from-context) from well-supported prep-platform conventions (ten blanks, ~70 words, intact first and last sentences, gaps in sentences 2–3) and one genuine discrepancy (ETS language suggests \"second half\" missing, while the person's real sample and prep sources show variable-length gaps). Claude built a complete practice skill: a SKILL.md with trigger descriptions and session-loop instructions, a Python engine (`scripts/ctw.py`) with `generate`, `validate`, and `grade` subcommands, and reference documentation in `references/authoring.md` and `references/format-notes.md`. The validator caught real bugs in the initial passage bank (11 blanks instead of 10, word counts under 60), which were corrected before packaging. The skill was delivered as a downloadable `toefl-complete-the-words.skill` file.\n\nAfter delivery, the person noted the skill was too verbose. Claude agreed, identifying three specific problems: the source-honesty caveat was stated three times across the skill, the seven format rules each had redundant justification sentences, and sourcing detail belonged in references rather than the main skill file consulted on every trigger. The person confirmed the proposed fix, and Claude revised SKILL.md to collapse seven rules to five tight lines, moved all sourcing and discrepancy material into a new `references/format-notes.md` consulted only on demand, and preserved the error-pattern diagnosis section intact as the skill's core teaching value. The skill was repackaged and re-delivered. The person's demonstrated preference is for concise, non-redundant instructions and for progressive disclosure (detail in references, not in the main instruction layer).",
  "created_at": "2026-06-26T08:32:56.334195Z",
  "updated_at": "2026-06-27T08:55:45.982400Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-06-26T08:32:57.054784Z

It is the new form of TOEFL reading section, and I am weak of it. Please help me practice.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f030f-8022-77db-a8d8-e96dec53e506",
  "updated_at": "2026-06-26T08:32:57.054784Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "d31cf390-9441-41ca-863e-c93be6d079ce",
      "file_name": "1782462745208_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. human — 2026-06-26T08:33:36.659320Z

Yes, that's better

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0310-1be6-763b-a2d7-270baed8db66",
  "updated_at": "2026-06-26T08:33:36.659320Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f030f-8022-797d-afbe-6e9e7e70b4e0"
}
```

</details>

### 3. human — 2026-06-26T08:37:53.644283Z

Yes, that's better. Don't forget to provide the number of letter I need to fill.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0314-087f-7a6c-8110-46b42f95bcb2",
  "updated_at": "2026-06-26T08:37:53.644283Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f030f-8022-797d-afbe-6e9e7e70b4e0"
}
```

</details>

### 4. human — 2026-06-26T08:40:49.833168Z

Yes, that's better. Don't forget to provide the number of letter I need to fill. And don't use widget, just give me plain text

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0316-b792-78e1-9fd3-b354eaab1edc",
  "updated_at": "2026-06-26T08:40:49.833168Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f030f-8022-797d-afbe-6e9e7e70b4e0"
}
```

</details>

### 5. human — 2026-06-26T08:42:24.853369Z

1. conc

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0318-2b54-7811-9d9f-8d4ba285064c",
  "updated_at": "2026-06-26T08:42:24.853369Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f0316-b792-7516-97f5-77da6f067c32"
}
```

</details>

### 6. human — 2026-06-26T08:48:39.236979Z

1. conc
2. processes
3. where
4. known
5. from
6. reacting
7. eruptes
8. called
9. monitor
10. measuring
11. ground
12. because
13. often
14. studying
15. better
16. future
17. live
18. petentially

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f031d-e154-7330-aead-91c0e8a0de27",
  "updated_at": "2026-06-26T08:48:39.236979Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f0316-b792-7516-97f5-77da6f067c32"
}
```

</details>

### 7. human — 2026-06-26T08:51:03.898507Z

I think you need to search for the canons of this new form first, and we can solidate and encapsulate this process as a skill for me to practice this form in the future.
Should any aspects remain vague, proactively raise questions so that we can confirm my intentions.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0320-15aa-7db4-82f0-89685ae46171",
  "updated_at": "2026-06-26T08:51:03.898507Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f031d-e154-7173-b5c2-d72992d92397"
}
```

</details>

### 8. human — 2026-06-27T07:21:40.885051Z

Q: What is the official name of this question type you want me to research? The image just says 'Fill in the missing letters' — do you know what ETS/TOEFL calls it?
A: I don't know the official name — please find it

Q: What should the practice skill prioritize?
A: Replicate the exact ETS format/rules faithfully

Q: How should the skill run a practice session?
A: Generate passage → I answer → you mark & explain

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f07f4-9a92-7c4d-8457-dbf2a5f56b26",
  "updated_at": "2026-06-27T07:21:40.885051Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f0320-15aa-7358-929f-a87008cb3462"
}
```

</details>

### 9. human — 2026-06-27T08:54:01.995529Z

Do you think the current skill is slightly verbose?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0849-2a21-7a26-b5ae-3c00cec7a7f7",
  "updated_at": "2026-06-27T08:54:01.995529Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f07f4-9a93-7377-948f-1bf5e7575be1"
}
```

</details>

### 10. human — 2026-06-27T08:54:47.162251Z

Yes

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0849-dc42-73ba-86a5-dc934f38f2c3",
  "updated_at": "2026-06-27T08:54:47.162251Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f0849-2a21-797e-9f61-243d858e0048"
}
```

</details>
