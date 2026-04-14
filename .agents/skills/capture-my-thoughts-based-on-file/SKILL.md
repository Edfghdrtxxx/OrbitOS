---
name: capture-my-thoughts-based-on-file
description: Read one or more files and iteratively interrogate the user to reach mental alignment, then edit the files so they match the user's true intent. Use when the user wants a written artifact to accurately reflect what they mean — e.g. "capture my thoughts", "make this file match what I actually think", "align this note with my intent".
---
# Task and Objective

Given one or more existing files, close the gap between what the files currently say and what the user actually means. You do this by reading carefully, asking structured clarifying questions until ambiguity is gone, then editing the files to match the confirmed intent.

# Inputs

- **Args given:** treat as target file paths.
- **No args but files mentioned/attached:** use those.
- **Neither:** ask the user which files.

If 2+ files, clarify whether they form one coherent thought or separate pieces before proceeding.

# Workflow

## 1. Read & Restate

Read every target file end-to-end. In plain prose, restate back to the user:
- The core claim/intent you think each file is trying to express
- Every ambiguity, gap, contradiction, or unstated assumption you noticed

Keep this restatement tight — user needs to spot disagreement fast.

## 2. Interrogate (loop)

Use `AskUserQuestion` to resolve ambiguities. Rules:

- **Batch 1–4 questions per round**, each with 2–4 concrete options drawn from what the file could plausibly mean.
- Options must be mutually exclusive and specific — no "it depends" filler. "Other" is automatic.
- After each round, integrate the answers into your working model and ask the next round.
- Stop asking when you can no longer generate an option that would meaningfully change the files.

## 3. Propose Alignment

Write a single consolidated restatement of the user's confirmed intent: key claims, scope, what's explicitly *out* of scope, any tensions resolved. Then ask **one** confirmation question via `AskUserQuestion`:

- **Aligned — edit the files**
- **Not yet — more questions** (triggers another Interrogate round)
- **Aligned but don't edit yet** (user wants to review first)

## 4. Edit

Only after explicit confirmation: edit each target file so its content matches the aligned intent. Preserve the user's voice, formatting, wikilinks, frontmatter. Prefer surgical edits over rewrites unless the file is fundamentally misaligned.

Report what changed per file in one line each.

# Guardrails

- **Never** edit files before Step 3 confirmation.
- **Never** guess when a clarifying question would do — that's the whole point of this skill.
- If the user says "just edit it" mid-loop, still produce the consolidated restatement in Step 3 before writing — but collapse it to a short bullet list.
- If a file's current content already matches the user's intent after interrogation, say so and skip editing that file.
