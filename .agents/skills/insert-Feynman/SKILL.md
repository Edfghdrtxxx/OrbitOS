---
name: insert-Feynman
description: Insert Feynman-style explanation callouts directly into notes at the point of confusion. Use when the user attaches or references a note and asks about an unclear concept, wants something explained simply, says "explain this", "what does this mean", "I don't understand this part", or points to a line number in a note. This skill writes explanations INTO the note file — it does not answer in the conversation. Unlike /ask (which answers in conversation with optional Feynman practice), this skill is file-first — all output is written into the note as foldable callouts.
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder (if it exists). Apply any accumulated lessons as additional constraints for this execution.

# insert-Feynman

You insert Feynman-style explanations directly into the user's note as foldable callout blocks. All output goes into the file — do not explain in the conversation. Keep terminal output minimal (status only, not content).

## How It Works

1. **Read the note** the user points you to (path or attached file).
2. **Identify what's unclear** — the user may give a line number, quote a phrase, or describe what confuses them. If ambiguous, use `AskUserQuestion` to confirm.
3. **Write the explanation** as a foldable callout and insert it directly below the unclear statement in the note.
4. **Annotate related statements** — if other lines in the note touch the same concept, append `` see `Feynman: <topic>` `` at the end of those lines so the user can find the main explanation.

## Callout Format

```markdown
> [!Feynman]- <Topic Name>
> First line of explanation.
> Second line — building on the first.
>
> A new paragraph within the callout for a distinct sub-point.
> Every line (including blank separators) must start with `> `.
```

- The `-` after `[!Feynman]` makes it **collapsed by default** so it doesn't clutter the reading flow.
- Topic name should be short and descriptive (2-5 words).
- Every line inside the callout **must** begin with `> ` — including blank lines between paragraphs (use `>` alone on those lines). Missing the `>` breaks the callout.

## Explanation Style

Write every explanation as if teaching someone encountering the idea for the first time:

- **Start from what's familiar.** Anchor to everyday experience or something the reader already knows from context in the note.
- **Use concrete analogies.** Abstract → concrete. "A potential well is like a bowl — a ball rolls to the bottom and stays unless you give it enough energy to escape."
- **Build up, don't dump.** One idea per sentence. Layer complexity gradually. Stop when the concept is clear — don't over-explain.
- **No jargon in the explanation itself.** If a technical term is unavoidable, define it inline on first use.
- **Short.** Aim for 3-8 lines inside the callout. If the concept genuinely requires more, it's fine to go longer, but default to concise.

## Positioning Rules

- **Line number given**: Insert the callout on the line immediately after the referenced line.
- **Phrase quoted**: Find the line containing the phrase, insert callout after it.
- **General question about the note**: Insert at the most relevant location (where the concept first appears or is most central).
- **Multiple insertions**: If the user asks about several things at once, insert each callout at its respective location. Work from bottom to top so line numbers don't shift as you insert.

## Cross-Reference Annotations

When a concept explained in one Feynman callout is also mentioned elsewhere in the same note, append a subtle annotation to those other lines:

```markdown
Original line content see `Feynman: <Topic Name>`
```

- Use inline code, not wikilinks.
- Only annotate if the connection genuinely helps the reader — don't litter the note.
- If there are more than 3 other references, annotate only the most important ones.

## What NOT to Do

- Do not print the explanation in the terminal/conversation — it goes in the file.
- Do not restructure or reformat the user's existing note content.
- Do not add frontmatter or metadata changes.
- Do not create new files — work within the note the user specified.
