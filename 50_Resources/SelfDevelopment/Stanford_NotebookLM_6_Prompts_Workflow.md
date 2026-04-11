---
title: "Stanford NotebookLM 6-Prompt Reading Workflow"
source: https://x.com/aiwithmayank/status/2042878582108889265
author: "@aiwithmayank (Mayank Vora)"
captured: 2026-04-11
type: resource
tags: [notebooklm, study-method, reading, ai-workflow, zettelkasten]
status: complete
---
## TL;DR

Upload a book PDF to NotebookLM, then run these **6 prompts in order**. The claim:
extracts more usable insight in ~20 minutes than a second full re-read.

The prompts form a pipeline — each one strips a different kind of noise:

| # | Prompt | Strips away |
|---|--------|-------------|
| 1 | Core Argument Extractor | Topic vs. argument confusion |
| 2 | Assumption Auditor | Hidden ideology masquerading as fact |
| 3 | Personal Relevance Filter | Generic advice that doesn't fit you |
| 4 | Steelman & Counter-Challenger | Unchallenged ideas you'd adopt by default |
| 5 | Action Extractor | Insight that never becomes behavior |
| 6 | Permanent Note Builder | Context-bound highlights that don't compound |

## Source

Thread by **Mayank Vora** (@aiwithmayank) on X — [link](https://x.com/aiwithmayank/status/2042878582108889265).

> Top Stanford students have a secret NotebookLM workflow. They never re-read a book.
> They upload the PDF in NotebookLM, run 6 prompts, and extract more insight in 20
> minutes than most readers get from finishing it twice.

---

## 1. The Core Argument Extractor

**Why it matters:** Every book has one central argument everything else serves.
Most readers finish the whole thing and can't state it in two sentences — they've
been *present* for the book, not *finished* it.

**Prompt:**
```
Read this entire book and identify the single central argument the author is
making. Not the topic. The argument — the specific claim they are trying to
convince me is true. State it in two sentences maximum. Then identify the 3 to 5
key sub-arguments that support the central claim. For each sub-argument: what
evidence or reasoning does the author use to support it, and how strong is that
evidence on a scale of anecdote to empirical proof?
```

**Payoff:** Forces the book down to a claim + load-bearing supports, graded by
evidence strength.

---

## 2. The Assumption Auditor

**Why it matters:** Every author has a worldview baked into their writing.
Most assumptions are never stated because they feel like *facts* to the writer.
Strong books survive this prompt with most of their argument intact; overrated
ones collapse at assumption two or three. This is how you measure *insight vs. ideology*.

**Prompt:**
```
Identify every significant assumption this author makes that they never
explicitly state or defend. What does the author take for granted about human
nature, about how organizations work, about what people want, about how change
happens? For each unstated assumption: is it well-supported by evidence outside
this book, is it contested by credible thinkers in related fields, or is it
simply the author's worldview presented as universal truth? Which assumption,
if wrong, would most undermine the book's central argument?
```

**Payoff:** Surfaces the book's load-bearing invisible beliefs and identifies
the single one whose failure would collapse the argument.

---

## 3. The Personal Relevance Filter

**Why it matters:** A book written for a general audience contains ideas that
are highly relevant to your specific situation *and* ideas that are completely
irrelevant to it. Passive readers absorb both equally and act on neither
specifically. The same book produces completely different insights depending
on who reads it and when — this prompt extracts *your* version of the book,
not the average reader's.

**Prompt:**
```
Here is my specific context: [describe your work, your current challenges,
your goals, and the decisions you're currently facing]. Now filter this entire
book through that context. Which specific ideas, frameworks, or arguments are
directly applicable to my situation right now? Which ones are interesting in
general but don't apply to where I am? For the ideas that are directly
applicable: what would implementing them look like in my specific context —
not in the generic examples the author uses, but in my actual situation?
```

**Payoff:** Separates "interesting" from "actionable-for-me-right-now."

> **Note for me (OrbitOS context block to paste into this prompt):**
> Master's student in Particle & Nuclear Physics at IMP/UCAS; thesis on
> TPC particle ID using ResNet/ViT + domain adaptation; Japan immigration
> via UTokyo CNS / RIKEN JRA PhD route (Route B); currently preparing
> entrance exam + GRE Physics + TOEFL 100+; rejects 996 culture.

---

## 4. The Steelman & Counter-Challenger

**Why it matters:** Every book deserves two readings — one charitable, one
adversarial. Most readers only do the first, which means they adopt ideas
that haven't been tested. Ideas that survive a steelman challenge are worth
building on; ideas that collapse under it are worth discarding *before*
they shape your decisions.

**Prompt:**
```
First: steelman this book's central argument. Make it as strong as possible —
stronger than the author made it themselves. Find the best evidence that
supports it, including evidence the author didn't cite. Now: build the
strongest possible counter-argument. Who are the most credible thinkers who
would disagree with this book's central claim and what would they say? What
real-world evidence exists that cuts against the author's argument? After
running both: what is your honest assessment of how well this book's argument
holds up under serious scrutiny?
```

**Payoff:** Runs the adversarial challenge for you so you don't have to hold
both sides of the argument in your head simultaneously.

---

## 5. The Action Extractor

**Why it matters:** The gap between reading a book and changing anything because
of it is where most insight goes to die. Authors write principles and give
examples — they almost never tell you what to do differently on Monday morning.
A book that produces zero behavior change produced zero value, regardless of
how many pages you read.

**Prompt:**
```
Based on this book: generate the 5 most specific, immediately actionable
changes I could make in the next 30 days based on its core ideas. Not vague
directional shifts like 'be more strategic' or 'focus on what matters.'
Specific behavioral changes with a clear trigger, a clear action, and a clear
way to measure whether I actually did it. Then rank these 5 changes by: how
much impact they would have if I actually implemented them versus how much
friction they would create in my current life. Which one should I start with
tomorrow and what exactly does starting look like?
```

**Payoff:** Converts the book into a trigger → action → measurement checklist,
ranked by impact/friction, with a single "start tomorrow" commitment.

---

## 6. The Permanent Note Builder

**Why it matters:** The last and most important prompt for **long-term compounding**.
Niklas Luhmann built a system of 90,000 interconnected notes that produced 70
books and hundreds of papers. His rule: *never capture a quote — always capture
the idea in your own words, connected to something you already know.*

Most reading produces highlights that make sense in context and nothing outside
of it. This prompt produces insights that compound across everything else you know.
That's the whole difference between *consuming* books and *learning* from them.

**Prompt:**
```
Synthesize this entire book into 5 permanent notes I can add to my knowledge
system. Each note must: state one core idea from the book in my own words as
if explaining it to someone who hasn't read the book, connect that idea to at
least one other concept I might already know from a different domain, include
the single most compelling piece of evidence from the book that supports this
idea, and end with one open question this idea raises that I haven't seen
fully answered anywhere. Write each note as a standalone insight that would
be useful even to someone who never reads this book.
```

**Payoff:** Outputs atomic, cross-domain-linked, evidence-anchored, question-
opening notes — exactly the format [[40_Wiki]] atomic notes are supposed to take.

---

## Workflow Summary (for reuse)

1. Upload PDF to NotebookLM.
2. Run prompts **1 → 6 in order** (each builds on the prior context).
3. Output of prompt 5 → add the "start tomorrow" action to a daily note.
4. Output of prompt 6 → drop the 5 atomic notes into `40_Wiki/` and
   wikilink them into whatever cluster they belong to.

## Related

- [[40_Wiki]] — atomic note system (prompt 6 outputs land here)
- [[99_System/Prompts]] — house this alongside other reusable prompts
- `.claude/skills/notebooklm/SKILL.md` — existing NotebookLM skill
- `.claude/skills/atomic-note/SKILL.md` — atomic note writing guidance
- [[Feynman-Technique]] — complementary "explain it simply" method
