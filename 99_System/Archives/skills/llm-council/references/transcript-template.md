# Transcript Template

Save session transcripts to: `20_Project/LLM-Council/Sessions/YYYY-MM-DD-<topic-slug>.md`

Create the directory if needed. Slug: kebab-case, ≤ 8 words from the question.

## Frontmatter

```yaml
---
type: council-session
date: YYYY-MM-DD
question: <one-line restatement>
chairman: <host model clean name>
members: [<host model clean name>, Grok-4.6, <Gemini-3.8-Flash or GLM-5.3-Flash>]
thinking: high
quorum: 3/3
status: complete
---
```

Use `quorum: 2/3` if a member was offline (or note fallback). If GLM was used, replace `Gemini-3.8-Flash` with `GLM-5.3-Flash`. Omit offline member sections.
## Body

```markdown
# <topic>

## Question & Brief
<full brief from Stage 1>

## Stage 1 — First Opinions
### <Host-Model-ID> (Host) — <stance in ≤8 words>
<text>
### Grok-4.6 — <stance in ≤8 words>
<text>
### Gemini-3.8-Flash (or GLM-5.3-Flash) — <stance in ≤8 words>
<text>

## Stage 2 — Peer Review
### <Host-Model-ID> (Host) — Peer Review
<text with direct model IDs in review and rankings>
### Grok-4.6 — Peer Review
<text with direct model IDs in review and rankings>
### Gemini-3.8-Flash (or GLM-5.3-Flash) — Peer Review
<text with direct model IDs in review and rankings>

## Stage 3 — Chairman Synthesis
### Self-Bias Audit
<one-line finding: was <Host-Model-ID> (Host) docked? how did it affect synthesis weight?>

### Final Answer
<consolidated final answer>

### Unresolved Tension
<one line>

### Recommendation
<one line>
```

Write the transcript at the end of Stage 3 after synthesis is in the conversation. Tell the user the filename only — do not dump file contents.
