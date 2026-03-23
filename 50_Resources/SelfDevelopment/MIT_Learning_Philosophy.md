---
type: resource
source: "Twitter/X - @ihtesham2005 (Ihtesham Ali), 2026-03-11"
topic: learning strategy
tags:
  - self-development
  - learning
  - AI-tools
  - exam-prep
created: 2026-03-14
---

## Summary

A CS student at MIT finished his final semester with a 4.0 GPA using a distinctive NotebookLM workflow. Instead of using AI to passively summarize material, he used it as an **adversarial study partner** — forcing it to expose his weaknesses rather than reinforce his comfort.

## The Three-Prompt Workflow

He ran three prompts **every single week**, saved as phone shortcuts:

### Prompt 1 — Weaponize the Material
> "Here are my notes, the textbook chapter, and last year's past papers. Give me the 3 ways professors trick students on exams with this concept. Then generate a problem that combines it with everything from the last 3 weeks."

He wasn't studying the material. He was studying **how the material gets weaponized against you**.

> [!tip]- NotebookLM Prompts — Weaponize
> **Podcast** (debate format):
> `notebooklm generate audio --format debate "Argue about the 3 most common ways professors turn this material into tricky exam problems. One host defends intuitive understanding, the other exposes where intuition breaks down. End with a combined problem that links concepts from the last 3 weeks."`
>
> **Quiz** (hard):
> `notebooklm generate quiz --difficulty hard "Focus on adversarial exam-style questions: concept combinations across multiple chapters, edge cases where formulas break, and problems that look like one topic but require another."`
>
> **Study Guide**:
> `notebooklm generate report --format study-guide --append "Structure around exam traps, not topic summaries. For each concept: (1) what it looks like on an exam, (2) the common wrong answer and why students pick it, (3) the trick to recognizing the trap."`

### Prompt 2 — Find the Pattern in Mistakes
> *"The move that made me close my laptop and stare at the ceiling."*

He uploaded every single assignment he'd gotten wrong all semester, then asked:

> "Find the pattern in my mistakes. What's the one concept I keep misunderstanding in different forms?"

Every other student was using NotebookLM as a search engine. He was using it as a **mirror**.

> [!tip]- NotebookLM Prompts — Mirror
> **Podcast** (critique format):
> `notebooklm generate audio --format critique "Analyze the uploaded assignments and wrong answers. Identify the recurring conceptual misunderstanding hiding behind different surface-level mistakes. Be brutally honest — what does this student keep getting wrong, and why?"`
>
> **Report** (custom):
> `notebooklm generate report --format custom --append "You are an exam diagnostician. Across all uploaded assignments and mistakes, find the ONE concept this student keeps misunderstanding in different forms. Show the pattern: list each mistake, trace it back to the root misunderstanding, and give a concrete drill to fix it."`
>
> **Flashcards**:
> `notebooklm generate flashcards --difficulty hard "Generate cards ONLY from concepts where the source material shows errors or weak understanding. Each card should target a specific misconception — the front should present the trap, the back should explain why the intuitive answer is wrong."`

### Prompt 3 — Predict Weak Spots
> "Based on my notes and these past papers, what topic am I least prepared for right now? Give me the 5 questions most likely to appear on my final that I can't answer yet."

> [!tip]- NotebookLM Prompts — Predict Weak Spots
> **Podcast** (deep-dive):
> `notebooklm generate audio --format deep-dive "Compare what's covered in the notes against what past papers emphasize. Focus the entire conversation on the gaps — topics the student is least prepared for. Rank them by likelihood of appearing on the final."`
>
> **Quiz** (targeted gaps):
> `notebooklm generate quiz --difficulty hard "Generate the 5 questions most likely to appear on the final that the student CANNOT answer based on their current notes. Focus on under-studied topics and cross-concept connections not yet practiced."`
>
> **Briefing Doc**:
> `notebooklm generate report --format briefing-doc --append "Produce a gap analysis: compare topics in the notes vs topics in past exams. For each gap, estimate exam likelihood (high/medium/low) and give the minimum knowledge needed to answer a question on it. Prioritize by risk."`

## Core Idea

While his classmates were rereading slides the night before finals, he already knew exactly where he was going to fail. Then he fixed it.

**He didn't study harder. He just never let himself feel comfortable.**

As a commenter (@Techmik) put it: *"The real strategy wasn't the tool — it was the mindset."* Use AI not to confirm what you know, but to ruthlessly diagnose what you don't.

## Takeaways

1. **AI as mirror, not search engine** — Ask it to reveal your blind spots, not just retrieve information
2. **Study the failure modes** — Learn how concepts get tested adversarially, not just what they mean
3. **Systematic weakness tracking** — Upload mistakes and find recurring patterns across assignments
4. **Predictive preparation** — Identify the gaps *before* the exam, every week, not the night before
5. **Discomfort as signal** — Comfort means you're not learning; seek out what you can't do yet

## Application
This three-prompt pattern maps directly to structured exam prep for [[Fundamental_Knowledge]] (UTokyo entrance / GRE Physics) and [[English_Learning]] (TOEFL). Replace "NotebookLM" with any AI tool — the method is tool-agnostic.

![[MIT_Learning_Philosophy.jpg]]