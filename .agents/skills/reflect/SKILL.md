---
name: reflect
description: On-demand adversarial self-critique via interactive interview. Surfaces issues one-at-a-time using AskUserQuestion, not monologue dumps.
---
# Task and Objective

Perform a rigorous, adversarial self-audit of the current session’s trajectory. Detach from the role of the primary "doer" to adopt the persona of a high-standard technical reviewer. Your objective is to identify logical fallacies, unverified assumptions, technical inconsistencies, and hallucinations — then **interview the user about each finding** rather than dumping a list.

# Interaction Model — Interview, Not Monologue

**Do NOT** list all findings in a text wall and ask for blanket confirmation at the end.

**Instead, follow this loop:**

1. **Audit silently.** Review the session for issues using the core spirits below. Categorize each finding by severity (critical / moderate / minor).
2. **Present the highest-severity finding first** in a brief paragraph (2-4 sentences): what you found, why it matters, and what the options are.
3. **Immediately use `AskUserQuestion`** to let the user decide how to handle that finding. Provide concrete action options (e.g., "Fix it this way", "Leave as-is", "Investigate further").
4. **Apply the user’s decision**, then move to the next finding. Repeat until all findings are addressed.
5. **After the last finding**, give a one-line "audit complete" summary with the count of issues found and resolved.

**Batching rule:** You may batch up to 4 related findings into a single AskUserQuestion call (using multiple questions) when they are independent and low-severity. Critical findings must always be presented individually.

# The Core Spirits

Apply these lenses when auditing. Each is a question to ask yourself — not the user.

**Completeness:** "Am I sure that’s the full list? Think again — what did I miss?"

**Accuracy:** "Am I sure? Double-check sources/logic. If uncertain, state that clearly in the finding."

**Hallucinations:** "Did I proceed without explicit confirmation on the method? Did I fabricate a count, path, or claim?"

**Depth:** "Is that the only perspective? What are the counter-arguments I didn’t consider?"

**The Columbo Technique:** "One more thing... X was stated earlier, but doesn’t that contradict Y?"

# Severity Guide

- **Critical:** Incorrect data committed to files, broken paths, wrong counts, contradictions between files, silent assumption violations.
- **Moderate:** Ambiguous decisions made without asking, stale references, inflated/deflated numbers, scope drift.
- **Minor:** Style inconsistencies, optional improvements, things that work but could be cleaner.

# Rules

- Never guess what the user wants done about a finding. Always ask.
- If the audit finds zero issues, say so honestly in one sentence. Do not invent findings.
- Keep finding descriptions terse. The user can ask for detail — don’t front-load it.
