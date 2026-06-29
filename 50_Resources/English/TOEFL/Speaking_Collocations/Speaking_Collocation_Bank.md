---
title: TOEFL Speaking Collocation Bank
type: resource
status: active
area: "[[Self-Development]]"
created: 2026-06-24
updated: 2026-06-29
tags: [english, TOEFL, speaking, collocations, spaced-repetition]
related:
  - "[[English_Learning]]"
  - "[[TOEFL_Study_Progress]]"
exam_format: TOEFL iBT 2026 (effective 2026-01-21)
purpose: prefab conversational phrases to cut cognitive load in Take-an-Interview
sr_engine: Obsidian Spaced Repetition plugin (st3v3nmw) — owns scheduling inline
review_guide: "[[Review_Log]]"
---
# TOEFL Speaking Collocation Bank

> [!info] Why this exists
> Prefab phrases you can invoke automatically during the spoken exam, so working memory
> goes to **content** instead of sentence construction. Memorize them as flashcards via the
> **Obsidian Spaced Repetition** plugin; practise by asking Claude to generate an interview
> prompt + model answer that uses your due phrases. See [[Review_Log]] for how review works.

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

## How this works with the plugin

- Every entry below is a **multi-line bidirectional flashcard** (`??` separator), so the plugin
  creates two sibling cards per phrase: **cue → phrase** and **phrase → cue**. This trains both
  recognition and live production. Card format verified against the
  [plugin docs](https://stephenmwangi.com/obsidian-spaced-repetition/flashcards/q-and-a-cards/).
- All cards belong to the deck tag **`#toefl-speaking`** (set just below), which appears as its own
  top-level deck in the Spaced Repetition deck list. The plugin
  schedules each card (SM-2) and writes its review data inline as an `<!--SR:...-->` comment.
  No manual review table is needed.
- **Daily review:** run the plugin command *"Review flashcards"* (or open the deck). Aim ~5/day.
- **On-demand practice:** ask Claude — *"Generate a Take-an-Interview prompt and a model answer
  that naturally uses my due collocations."*
- **Add a phrase:** copy an entry's structure under the right category, keep the `??` with both
  sides touching it (no blank line around `??`), and give it a new ID.

## Category scheme

Organized as **rhetorical function**, covering both the interview task and general academic
speaking. ID prefixes: `OPEN` (opening / buying time), `OPIN` (stating an opinion),
`EXMP` (personal example), `CONT` (contrast / concession), `CONC` (concluding),
`ACAD` (general academic / discussion).

## Flashcards

#toefl-speaking

### OPEN-01 · Opening / buying time

**Cue:** Unexpected opinion question — you need a natural beat to think.
??
**Phrase:** "I've never really thought about this before, but…"
**Model:** *"I've never really thought about this before, but off the top of my head, I'd say staying in touch with old friends matters more than making new ones."*

### OPIN-01 · Stating an opinion

**Cue:** The interviewer asks what you think or prefer — mark a clear stance, conversationally.
??
**Phrase:** "If you ask me… / Personally, I'd say…"
**Model:** *"If you ask me, group projects teach you more than studying alone, just because you have to explain your ideas out loud."*

### EXMP-01 · Giving a personal example

**Cue:** You've stated an opinion and need to back it up with concrete support.
??
**Phrase:** "A good example from my own experience is when…"
**Model:** *"A good example from my own experience is when I joined a study group last year — my grades went up because we kept each other accountable."*

### EXMP-02 · Giving a personal example

**Cue:** You've named an experience and want to spell out *why* it was hard or significant.
??
**Phrase:** "What made it so demanding was…"
**Model:** *"What made it so demanding was juggling lab work and coursework at the same time, with neither giving me any slack."*

### EXMP-03 · Giving a personal example

**Cue:** Mid-story, you want to convey the low point — the moment you nearly gave up — before the turnaround.
??
**Phrase:** "Honestly, there were times I wasn't sure I'd make it through…"
**Model:** *"Honestly, there were times I wasn't sure I'd make it through, but I forced myself to take it one step at a time, and that's what got me through."*

### CONT-01 · Contrast / concession

**Cue:** Acknowledge a counterpoint, then return to your position.
??
**Phrase:** "That said… / I can see both sides, but…"
**Model:** *"Working from home is convenient. That said, I'd still choose an office, because I focus better when other people are around."*

### CONC-01 · Concluding / wrapping up

**Cue:** Prep time is nearly up — land the answer cleanly instead of trailing off.
??
**Phrase:** "So all in all… / That's basically why I…"
**Model:** *"So all in all, that's why I'd rather travel with one or two close friends than in a big group."*

### CONC-02 · Concluding / lesson learned

**Cue:** You've told a personal story (an achievement, a hard effort) and want to close on what it taught you.
??
**Phrase:** "That moment taught me that… — and it's an accomplishment I'm still proud of today."
**Model:** *"That moment taught me that disciplined, sustained effort really does pay off — and it's an accomplishment I'm still proud of today."*

### ACAD-01 · General academic / discussion

**Cue:** Single out the one factor that matters most among several — in any topic.
**Phrase:** "The single most important factor in X is Y."
**Model:** *"Sufficient, constant exposure to native input is the single most important factor in language acquisition."*
