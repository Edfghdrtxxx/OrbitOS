---
name: pre-ppt
description: Presentation DESIGN phase — run BEFORE authoring any deck. Interviews the user with Winston/Yanai-derived questions, locks the story, and writes PPT-Design.md for /html-ppt to consume. Trigger ONLY when the user types /pre-ppt or explicitly asks to design, plan, or outline a talk / presentation / defense / 组会汇报 before slides exist. Do not intercept generic requests for slides or a PPT — those go to /html-ppt.
---

# pre-ppt — story before slides

Design the talk; do not author it. Deliverable: `PPT-Design.md`. Never write slide HTML here — that is /html-ppt's job.

## Flow

1. **Read `references/principles.md`** (Winston + Yanai — the why behind every question below).
2. **Interview, staged adaptive.** Skip any question the user's material already answers.
   - **Round 1 — context** (AskUserQuestion): occasion & stakes (组会 / conference / defense / job or interview talk…), audience & what they already know, duration, language.
   - **Round 2 — story** (free-form, one at a time):
     1. What is your core conclusion, in one sentence?
     2. What will the audience know or be able to do afterward that they can't now? (empowerment promise)
     3. What background does the audience need to follow it?
     4. What are you tempted to include that can be cut without hurting the storyline?
     5. What might the audience confuse your work with, and how does it differ? (fence)
3. **Gather material** if the user points at sources (notes, results, figures). Dispatch subagents with `model: opus`.
4. **Draft `PPT-Design.md`** from `references/design-doc-template.md` (starting heuristic: ~2–3 min per slide). Write to `D:\Something\research\MATE-Automation-V4\presentations\<Distinct Topic>\PPT-Design.md` (create the folder; `<Distinct Topic>` = short talk name).
5. **Review with the user.** Walk the slide plan; delete-test any slide they doubt. Iterate until approved.
6. **Hand off:** tell the user to run `/html-ppt` pointing at the PPT-Design.md.

## Hard rules

- Every slide entry must pass the delete-test: "cut it — does the storyline still hold?"
- Slide titles are summarizing sentences, never bare labels like "Results".
- Opening = empowerment promise, never a joke. Final slide = Contributions, never "Thank you" / "Questions?".
- Explain, not impress: plan only elements the speaker will speak to.
- Restate the core conclusion ~3 times (cycling); mark the cycle points in the spine.
