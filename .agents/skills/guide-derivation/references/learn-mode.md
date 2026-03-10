# Learn Mode — Socratic Coaching (Note-Based)

Interactive. The user builds the derivation; I coach. **The Obsidian note is the primary workspace** — terminal output is terse status only. The user should read but not edit the note directly during the session; all input goes through `AskUserQuestion`.

## Callout Lifecycle

- `[!question]` — **always replaced** by the confirmed step content once resolved.
- `[!hint]` — **kept** in the final note (marks where the user needed a nudge).
- `[!warning]` — **kept** in the final note (marks missed assumptions or revealed steps).

## L0. Scaffold the Session Note

Ensure the `<Domain>/` subdirectory exists (create if needed). Then scaffold the note and open it.

```bash
obsidian create path="30_Research/Guide-Derivation/<Domain>/<Name>.md" template="Derivation_Template" silent
# Set known properties now: domain, tags, aliases
# Defer until L6: premises, result (not yet known)
obsidian open path="30_Research/Guide-Derivation/<Domain>/<Name>.md"
```

From this point, **build the note incrementally** using Edit/append. Terminal prints only short status lines (e.g., "Step 2 written to note", "Waiting for your answer").

## L1. Clarify the Target

Write the **title** and **Setup** section into the note (Goal, Starting from, Strategy: _blank_). Then use `AskUserQuestion` to confirm the target and ask the user to propose a strategy.

## L2. Record the Strategy

Write the user's chosen strategy (corrected/refined if needed) into the Setup section of the note.

## L3. Step-by-Step Coaching

For each derivation step:

1. **Prompt:** Append a coaching question to the note as a callout:
   ```markdown
   > [!question] Step N
   > What's the next move? / How do we handle this term? / ...
   ```
   Then use `AskUserQuestion` with concise options + "Other" for free-form input.

2. **If correct:** Replace the `[!question]` callout with the confirmed derivation step (`### Step N` heading, equations, physical insight). Print `✓ Step N confirmed` to terminal.

3. **If wrong or incomplete:** Append a `[!hint]` callout below the question:
   ```markdown
   > [!hint]
   > Targeted hint — not the answer.
   ```
   Ask again via `AskUserQuestion`. Only reveal the full step after **2 failed attempts**, replacing the `[!question]` with the step and marking it:
   ```markdown
   > [!warning] Revealed
   > You needed help here. Review: [concept].
   ```

4. **Missed assumptions:** If the user forgets to state an assumption, insert a callout:
   ```markdown
   > [!warning] Missed assumption
   > We assumed [X] here — don't forget to state this on an exam.
   ```

## L4. Box the Result Together

Append a `[!question]` asking the user to write the final expression. Use `AskUserQuestion` for their answer. Verify, correct if needed, then replace the callout with the **Result** section (with `\boxed{}`, validity conditions, breaking conditions).

## L5. Pitfalls & Debrief

Append two sections:

### `## Pitfalls`
1–3 common errors or exam traps for this derivation (matches the Derivation_Template structure).

### `## Debrief`
- Summary of mistakes made and concepts to review
- Coaching callouts (`[!warning]`, `[!hint]`) are already inline — they serve as spaced-repetition anchors on future reviews

## L6. Finalize

1. Set deferred frontmatter properties: `premises`, `result` (now known).
2. Fill the `## Related` section with wikilinks to relevant concepts, or remove the placeholder if none apply.
3. The note is complete. Print the file path and a one-line summary to terminal.
