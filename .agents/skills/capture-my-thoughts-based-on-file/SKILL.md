---
name: capture-my-thoughts-based-on-file
description: Read one or more files and iteratively interrogate the user to reach mental alignment, then edit the files so they match the user's true intent. Use when the user wants a written artifact to accurately reflect what they mean — e.g. "capture my thoughts", "make this file match what I actually think", "align this note with my intent".
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder if it exists. Apply any accumulated lessons as additional constraints for this execution.

# Task and Objective

Given one or more existing files, close the gap between what the files currently say and what the user actually means. You do this by reading carefully, asking structured clarifying questions until ambiguity is gone, then editing the files to match the confirmed intent.

# Inputs

- **Args given:** treat as target file paths.
- **No args but files mentioned/attached:** use those.
- **Neither:** ask the user which files.

If 2+ files, clarify whether they form one coherent thought or separate pieces before proceeding.

# Tone: Explanatory-first

Default register is **explanatory, but light**. The user reads this skill's output to make decisions, so every sentence should make a decision point legible.

- **Before** each question: one sentence on what's at stake and how the options differ in consequence. Option descriptions carry consequences, not just labels.
- **After** each answer: one sentence on what shifted. Skip if nothing changed.

Explanatory ≠ verbose. Cut anything that doesn't move a decision forward.

# Workflow

## 1. Read & Restate

Read every target file end-to-end. In plain prose, restate back to the user:
- The core claim/intent you think each file is trying to express
- Every ambiguity, gap, contradiction, or unstated assumption you noticed — each tagged with a phrase on why it would change the edit

Keep this restatement tight — user needs to spot disagreement fast.

## 2. Interrogate (loop)

Use `AskUserQuestion` to resolve ambiguities. Rules:

- **Batch 1–4 questions per round**, each with 2–4 concrete options drawn from what the file could plausibly mean.
- Options must be mutually exclusive and specific — no "it depends" filler. "Other" is automatic.
- After each round, integrate the answers into your working model and ask the next round.
- **Preface each round** with one sentence on the stakes; after each answer, note what shifted in one sentence (skip if nothing changed).
- **No round cap** — keep going as long as you can still generate an option that would meaningfully change the files. Stop only when you can't.

## 3. Propose Alignment

Write a single consolidated restatement of the user's confirmed intent: key claims, scope, what's explicitly *out* of scope, any tensions resolved. Briefly narrate how tensions resolved, not only the final state. Then ask **one** confirmation question via `AskUserQuestion`:

- **Aligned — edit the files**
- **Not yet — more questions** (triggers another Interrogate round)
- **Aligned but don't edit yet** (user wants to review first)

## 4. Preview

Before any file is touched, produce a **per-file preview** showing the proposed change — a diff for surgical edits, or the full replacement block for rewrites. Tag each diff with the answer or intent that drove it. For each file, **declare the mode explicitly**:

- **Surgical** (default) — touch only misaligned sentences/sections.
- **Rewrite** — only when >50% of the file's content is misaligned with the confirmed intent.

Ask one final `AskUserQuestion` confirmation:

- **Apply as shown**
- **Revise preview** (state what to change)
- **Cancel edits**

## 5. Edit

Only after the Step 4 go-ahead: write the edits. Preserve the user's voice, formatting, wikilinks, frontmatter, checkboxes, tables, callouts.

Report what changed per file in one line each.

# Guardrails

- **Never** edit files before both Step 3 (intent) and Step 4 (preview) confirmations.
- **Never** guess when a clarifying question would do — that's the whole point of this skill.
- If the user says "just edit it" mid-loop, still produce the consolidated restatement in Step 3 and the preview in Step 4 before writing — but collapse each to a short bullet list.
- If a file's current content already matches the user's intent after interrogation, say so and skip editing that file.
