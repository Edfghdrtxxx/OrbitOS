---
title: TOEFL iBT Listen-and-Repeat — 10-Day Sprint
type: project
status: active
area: "[[Self-Development]]"
created: 2026-09-03
due: 2026-09-13
priority: high
tags: [toefl, speaking, listen-repeat, exam-prep]
---
# TOEFL iBT Listen-and-Repeat — 10-Day Sprint

## Context

**Objective:** In 10 days (exam 2026-09-13), raise redesigned TOEFL iBT "Listen and Repeat" performance by fixing the working-memory encoding failure on long (12–16 word) sentences — hold and reproduce sentences 5–7 near-verbatim without losing the opening clause.

**Root-cause diagnosis (LLM-Council 2026-09-03, corrected):** The failure is NOT hearing/decoding and NOT subvocal rehearsal. It is **primacy decay from no semantic scaffold** — raw acoustic memory decays in 2–4s and cannot hold a 4–5s sentence, so the beginning evaporates before the beep. Fix = store 2–4 units of *meaning*, regenerate the words. Council transcript: [[2026-09-03-toefl-listen-repeat-method]].

**Success Metrics:**
- [ ] Day 10 (exam eve): 13–16-word items hold the first clause with no pause/restart
- [ ] PrepEx AI-scored L&R Content ≥ 4/5 per sentence, fluency not collapsing on s6–7
- [ ] Zero "freeze" events (skip-and-finish reflex installed) in the final mock
- [ ] Dropped **content** words → near-zero; only function words (a/the) tolerated

**Key Constraints:**
- Timeline: 10 days, exam 2026-09-13. 50 min/day (distributed practice — spacing beats a 7-day cram for memory consolidation).
- Resources: PrepEx AI **Pro** (unlimited scored L&R sets). Mic + Chrome.
- Dependencies: none blocking.

### Confirmed task facts (redesigned TOEFL iBT 2026)
- 7 sentences, each played **once**, no on-screen text, **beep → record immediately**, zero prep time.
- Response window ~8s (short) → ~10–12s (long). Scored 0–5/sentence on **content accuracy + pronunciation + fluency/prosody**.
- Band 5 = near-verbatim; a content-word swap drops to ~3; a dropped article can still score 4. Hesitation/restart is penalized harder than a dropped function word.
- Sources: [ETS iBT content](https://www.ets.org/toefl/test-takers/ibt/about/content.html), [MySpeakingScore memory-wall](https://www.myspeakingscore.com/blog/the-toefl-ibt-2026-listen-repeat-memory-wall). Window figures (8/10–12s) are prep-aggregator estimates, not ETS-published.

### PrepEx AI — how it's used (survey 2026-09-03)
Three content layers; the plan uses all three:

| Layer | Access | Role in plan |
|---|---|---|
| 70-sentence public catalog (10 campus sets, tiered by syllable) | Free | **Daily raw drill material** (shadow + chunking) |
| Scored 7-sentence hub (per-sentence /5 + **Target vs Detected** ASR transcript) | **Pro (have it)** | **Daily objective dropped-word audit** + day 3/6 full mocks |
| 1-sentence AI preview | Free | (skip — Pro covers it) |

**PrepEx capabilities [CONFIRMED]:** audio-first (transcript hidden until after record); per-sentence score; ASR "Detected" vs "Target" string = the working-memory diagnostic.
**PrepEx limits [must compensate manually]:**
1. Transcript is two plain strings, **not** a highlighted token-diff → eyeball drops yourself into the error log.
2. Does **not** label cause (memory vs pronunciation vs ASR mishear) → interpret high-Pronunciation + low-Content as the WM signal.
3. Cannot isolate-retry one sentence — restart relaunches all 7.
4. **Beep/single-play not confirmed in UI** (public demo has a Play button + no beep) → self-enforce one-play + manual beep in Block 3.
5. Scale ≠ ETS: PrepEx shows 1–6 / /5 / /100. **Do not read PrepEx 4.5/6 as ETS 4.5/5** — track trend, not absolute.
Source: [PrepEx L&R guide](https://prepex.ai/toefl/2026/speaking/listen-repeat), [free L&R demo](https://prepex.ai/free-listen-and-repeat-toefl-2026), [toeflair login-test (REPORTED)](https://toeflair.com/blog/prepex-ai-vs-toeflair).

---

## Actions

### Technique cards (memorize before Day 1)

**① Chunking rule (the core move).** As the sentence plays, split it into **2–4 sense-groups**, not words:
`[WHO / situation]` → `[did-what / hinge: contrast or cause]` → `[result / object clause]`.
Store the *meaning* of each group; at the beep, regenerate the actual words from meaning. 3 chunks beats 13 words because you hold ~3 items, not ~13.

**② Dual-register (Gemini's insight).** Hold the **early** clauses as compressed *meaning* (scaffold survives = fixes primacy); let the **final** clause ride the **raw acoustic buffer** (still fresh at the beep = uses recency). Deliberately split storage: meaning for the front, sound for the tail.

**③ Never-freeze (Grok's rule).** If the opening is gone, **speak what you have and finish in one pass.** A dropped function word costs less than a hesitation/restart. Never re-listen, never restart mid-sentence.

**④ Accuracy target.** Regenerate **content words verbatim** (nouns, main verbs, key adjectives). Only a/an/the are safe casualties. Do NOT settle for loose gist — gist scores 3.

### Daily 50-minute protocol

**Block 1 — Shadow warm-up (10 min).** PrepEx catalog **sets 1–2** (short sentences). Play, echo immediately mouth-30–50ms-behind, no pause, no meaning goal — warm the ear / decoding speed only. Never let this become the core method.

**Block 2 — Chunking core (30 min).** PrepEx catalog **sets 3–7** (12–16-word wall) + Pro scored hub.
1. Play **once only** (self-enforced — do NOT click replay, do NOT open transcript).
2. Apply ① chunking + ② dual-register while listening.
3. At a self-counted 2-second beep, speak in one pass — ③ never freeze.
4. Submit to the **Pro scored hub**; read **Target vs Detected**; log every dropped/swapped **content** word in the table below.
5. Re-attempt the same item **once from chunk-memory** (not a second listen). Then move on.
6. ~8–10 items/day, **half at 13+ words**.

**Block 3 — Beep-simulation mock (10 min).** Full 7-sentence set under strict test conditions: one play, manual 2-sec beep, speak immediately, no replay. Trains the zero-prep reflex PrepEx's UI may not enforce.

### Phase 1: Days 1–3 — Install the habit
- [x] **Day 1: Onboarding & Baseline Protocol** (~ 80 mins)
	- [x] Memorize 4 technique cards (Chunking, Dual-register, Never-freeze, Accuracy target) (~ 15 mins)
	- [x] Verify PrepEx mic + UX replay constraints via one scored set (~ 10 mins) `[blocked by: Memorize 4 technique cards]`
	- [x] Daily 50-minute drill protocol (Sets 1–4) (~ 50 mins) `[blocked by: Verify PrepEx mic + UX replay constraints via one scored set]`
		- [x] Block 1: Shadow warm-up on sets 1–2 (mouth-30–50ms-behind) (~ 10 mins)
		- [x] Block 2: Chunking core on sets 3–4 (8–10 items, 11–13 words, dual-register) (~ 30 mins) `[blocked by: Block 1: Shadow warm-up on sets 1–2]`
		- [x] Block 3: Beep-simulation mock (full 7-sentence set, strict 1-play + 2s manual beep) (~ 10 mins) `[blocked by: Block 2: Chunking core on sets 3–4]`
	- [x] Initialize content-word error log (audit Target vs Detected drops) (~ 5 mins) `[blocked by: Daily 50-minute drill protocol (Sets 1–4)]`
- [*] Days 2–3: Blocks 1–3 on catalog sets 1–4 (short/medium; stay at/just past the 11–13 wall) (~ 50 mins/day) — Day 2 completed (2026-09-04)
- [ ] Identify recurring content drop patterns by end of Day 3
### Phase 2: Days 4–7 — Push the wall
- [ ] **Day 4: full PrepEx AI-scored mock** (7 sentences) — baseline number, log Content/Fluency per sentence
- [ ] Days 4–7: Blocks on catalog sets 5–7 + hard items (14–18 words); drill **dual-register** on s6–7
- [ ] **Day 7: full PrepEx AI-scored mock** — mid-point trend check vs Day 4
- [ ] Every session: attack the error-log's top recurring drop pattern, not random sentences
- [ ] Verify "never-freeze" — count freeze events, drive toward zero

### Phase 3: Days 8–10 — Simulate & taper
- [ ] **Day 9: full PrepEx AI-scored mock** — final trend point (3 mocks: D4→D7→D9, trend not absolute scale)
- [ ] Days 8–9: pure Block-3 conditions all session (one-play + beep), no study-mode replays
- [ ] Day 10 (exam eve): light taper — 2 full mocks max, confirm success metrics, rest voice
- [ ] Exam day (2026-09-13): chunk → dual-register → never freeze → content words verbatim

### Parked until 2026-11-02

> [!note] Agent instruction
> Do not copy these into daily notes before 2026-11-02. On the first plan day on/after that date, propose which of these become weekly rows.

- Mock test feedback acquisition (~ 225 mins)
	- Listening Practice (~ 60 mins)
	- Listening (~ 30 mins)
	- Writing (~ 45 mins)
	- Speaking (~ 15 mins)
	- Speaking practice (45 mins)

---

## Progress

- 2026-09-03: [[2026-09-03]] - Project initiated. Task facts confirmed (7 sentences, once, beep, 0–5). LLM-Council locked core method = meaning-anchored chunking + 10-min shadow warm-up; corrected root cause to primacy decay. PrepEx surveyed (3 scouts); Pro confirmed → daily scored audits. grill-me locked all decision branches.
- 2026-09-03: Exam date corrected to 2026-09-13 (was 09-10). Replanned 7→10 days: distributed the same 50-min/day protocol across 10 days (spacing effect for memory consolidation), added a 3rd scored-mock checkpoint (Day 4 → Day 7 → Day 9) for a 3-point trend, kept exam-eve taper.
- 2026-09-04: [[2026-09-04]] - Day 2 drill completed. Finished 4 packs (sets 1–4), each drilled 2× using meaning-anchored chunking and strict never-freeze rule.
---

## Related

- [[2026-09-03-toefl-listen-repeat-method]] — LLM-Council session (method decision + transcript)
- [PrepEx L&R practice catalog (70 sentences)](https://prepex.ai/listen-and-repeat-practice-questions-toefl-2026)
- [PrepEx scored practice hub](https://prepex.ai/toefl/practice?section=speaking&type=listen-repeat)
- [[English_Learning]] — parent English-study project (Self-Development area)

---

## Notes

### Content-word error log (fill daily)
| Day | Set/Sentence | Words dropped/swapped (content) | Chunk that failed | Freeze? (Y/N) | PrepEx Content /5 |
|---|---|---|---|---|---|
| | | | | | |

### Interpreting PrepEx feedback for the WM problem
- **High Pronunciation % + low Content % + truncated Detected string** → working-memory drop (your target failure). Drill chunking harder.
- **Low Pronunciation % on words you know you said** → likely ASR mishear or articulation, not memory — discount for WM purposes.
- Detected string cut off near the end → recency held but front-scaffold failed → push dual-register.
