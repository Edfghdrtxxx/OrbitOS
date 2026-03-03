---
description: Enforce explicit discussion before action to prevent hallucination.
---

**Guardrails**
- Do NOT guess or assume when information is missing, ambiguous, or could be interpreted multiple ways.
- **Challenge Assumptions**: If a premise conflicts with repo evidence or is internally inconsistent, say so, cite evidence (file/line or command output), and ask a closed-ended question. Stop until resolved.
- Do NOT proceed to implementation until all clarification questions are resolved.
- Treat "I don't know" as an acceptable, honest answer — never fabricate to appear knowledgeable.
- If the user provides partial answers, acknowledge what is now clear and re-ask only the remaining unknowns.
- **Source Citation**: When asserting any fact about the codebase or context, explicitly state the source (e.g., `Found in [file_path]:[line_number]` or `Output of [command]`).
- **Exhaustive Search**: Before asking the user, you MUST use available tools (search, file reading) to try and find the missing information within the project context.

**Steps**
1. **Parse Request** — Identify the user's explicit ask and decompose it into atomic sub-tasks.
2. **Ambiguity Scan** — For each sub-task, classify information as:
   - `[CLEAR]` — Unambiguous, actionable as-is. **(MUST cite source)**
   - `[VAGUE]` — Meaning unclear, multiple interpretations exist.
   - `[MISSING]` — Required information not provided.
   - `[ASSUMED]` — Information inferred but not confirmed.
   - `[CONTRADICTION]` — Premise conflicts with repo evidence (file content, terminal output) or is internally inconsistent.
3. **Context Investigation** — For any item marked `[VAGUE]`, `[MISSING]`, `[ASSUMED]`, or `[CONTRADICTION]`, attempt to resolve it autonomously.
   - If found: Reclassify as `[CLEAR]` and cite the source.
   - If not found: Keep as `[MISSING/VAGUE/ASSUMED]` and proceed to ask the user.
   - If contradictory evidence exists: Keep as `[CONTRADICTION]` and ask the user to reconcile it. Stop until resolved.
4. **Generate Questions** — For each remaining `[VAGUE]`, `[MISSING]`, `[ASSUMED]`, or `[CONTRADICTION]` item, formulate a **focused, closed-ended question** that eliminates ambiguity. Avoid open-ended "what do you want?" questions.
5. **Present Clarification Block** — Output questions in the following format, then STOP and wait for user response:
   ```
   ## Clarification Needed
   
   Before I proceed, I need to confirm:
   
   | # | Item | Status | Explanation | Question |
   |---|------|--------|-------------|----------|
   | 1 | [sub-task/detail] | [VAGUE/MISSING/ASSUMED/CONTRADICTION] | [Reason for confusion/Why it is ambiguous or contradictory] | [focused question] |
   | 2 | ... | ... | ... |
    
   Please answer these so I can proceed accurately.
   ```
6. **Iterate** — After user responds, re-run Steps 2-5 on remaining unknowns. Repeat until all items are `[CLEAR]`.
7. **Confirm Scope** — Once all clarifications are resolved, summarize the confirmed scope in a compact statement and ask for final approval before acting.
8. **Proceed** — Execute the task only after explicit approval from Step 7.

**Reference**
- Invoke `/reflect` after completing the task to verify no hallucination occurred during execution.
- If mid-task a new ambiguity arises, STOP immediately and return to Step 5.
- Log clarification history in the response so the user can trace what was confirmed.