---
title: TOEFL Speaking Collocation Bank
type: resource
status: active
area: "[[Self-Development]]"
created: 2026-06-24
updated: 2026-06-24
tags: [english, TOEFL, speaking, collocations, spaced-repetition]
related:
  - "[[English_Learning]]"
  - "[[TOEFL_Study_Progress]]"
exam_format: TOEFL iBT 2026 (effective 2026-01-21)
purpose: prefab conversational phrases to cut cognitive load in Take-an-Interview
review_state: "[[Review_Log]]"
---
# TOEFL Speaking Collocation Bank

> [!info] Why this exists
> Prefab phrases you can invoke automatically during the spoken exam, so working memory
> goes to **content** instead of sentence construction. Memorize via review (see [[Review_Log]]),
> and practise by asking Claude to generate an interview prompt + model answer that uses
> your due phrases.

## Format scope (verified against ETS — read before using)

> [!warning] This bank targets the **2026 TOEFL iBT Speaking** section, which has **two** task types:
> 1. **Listen and Repeat** — repeat seven sentences exactly as heard, in an academic/campus
>    scenario. *Prefab phrases do not help here* — this is a pronunciation / listening-precision
>    skill. Practise by shadowing, not by memorizing openers.
> 2. **Take an Interview** — a simulated interview; you answer questions about your experiences
>    and opinions in a **natural speaking style**.
>
> Almost every phrase below is for **Take an Interview**. Because the official scoring rewards a
> *natural* style, treat these as flexible conversational moves — not rigid templates to recite
> verbatim. Over-templated, robotic delivery can lower the score.
>
> Source (primary): [ETS — TOEFL iBT Speaking](https://www.ets.org/toefl/test-takers/ibt/about/content/speaking.html);
> [ETS — 2026 update](https://www.ets.org/toefl/test-takers/ibt/upcoming-updates-jan-2026.html).

## How to use this bank

- **Daily review:** open [[Review_Log]] for the review-state table. Practise the items that are
  due (target ~5/day), say each aloud in a full sentence, then update its row.
- **On-demand practice:** ask Claude — *"Generate a Take-an-Interview prompt and a model answer
  that naturally uses my due collocations."* It will pull from this bank and weave the phrases in.
- **Add phrases:** append a new entry under the right category and add a matching row to the
  review-state table in [[Review_Log]] (same ID). Keep IDs stable — they are the join key.

## Category scheme

Organized as **rhetorical function**, covering both the interview task and general academic
speaking. ID prefixes:

| Prefix | Function | Primary use |
|---|---|---|
| `OPEN` | Opening / buying time | First seconds of an interview answer |
| `OPIN` | Stating an opinion | Answering opinion questions |
| `EXMP` | Giving a personal example / experience | Backing up a claim |
| `CONT` | Contrast / concession | Acknowledging the other side |
| `CONC` | Concluding / wrapping up | Closing an answer cleanly |
| `ACAD` | General academic / discussion | Broader fluency + Writing's academic-discussion task |

> The seed set below covers OPEN, OPIN, EXMP, CONT, CONC (one each). Expand toward 100+ over time;
> `ACAD` is intentionally left open for academic-register phrases as you encounter them.

---

## OPEN — Opening / buying time

### OPEN-01 — "I've never really thought about this before, but…"
- **Function:** Buys a moment and signals a spontaneous, honest answer.
- **Use when:** You're hit with an unexpected opinion question and need a natural beat to think.
- **Model:** *"I've never really thought about this before, but off the top of my head, I'd say staying in touch with old friends matters more than making new ones."*
- **Note:** Sounds natural precisely because it admits you're thinking on your feet — don't overuse it (once per answer max).

## OPIN — Stating an opinion

### OPIN-01 — "If you ask me, … / Personally, I'd say…"
- **Function:** Marks a clear personal stance without sounding like a written essay.
- **Use when:** The interviewer asks what you think or prefer.
- **Model:** *"If you ask me, group projects teach you more than studying alone, just because you have to explain your ideas out loud."*

## EXMP — Giving a personal example / experience

### EXMP-01 — "A good example from my own experience is when…"
- **Function:** Pivots smoothly from a claim into concrete support — examiners reward developed answers.
- **Use when:** You've stated an opinion and need to back it up.
- **Model:** *"A good example from my own experience is when I joined a study group last year — my grades went up because we kept each other accountable."*

## CONT — Contrast / concession

### CONT-01 — "That said, … / I can see both sides, but…"
- **Function:** Shows balanced thinking, then returns to your position.
- **Use when:** You want to acknowledge a counterpoint without losing your stance.
- **Model:** *"Working from home is convenient. That said, I'd still choose an office, because I focus better when other people are around."*

## CONC — Concluding / wrapping up

### CONC-01 — "So all in all, … / That's basically why I…"
- **Function:** Signals you're finishing — gives the answer a clean shape instead of trailing off.
- **Use when:** Your prep time is nearly up and you want to land the answer.
- **Model:** *"So all in all, that's why I'd rather travel with one or two close friends than in a big group."*

## ACAD — General academic / discussion

*(empty — add academic-register phrases here as you collect them; e.g. "the evidence suggests…",
"one key factor is…", "to put it another way…")*

---

> [!note] Review state lives in [[Review_Log]], not here.
> This file holds stable content. The mutable per-item review fields (status, count, dates) are in
> the review-state table so daily updates never churn the phrase content.
