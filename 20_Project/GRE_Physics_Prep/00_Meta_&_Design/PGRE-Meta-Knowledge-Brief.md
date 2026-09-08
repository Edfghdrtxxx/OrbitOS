# PGRE Meta-Knowledge Extraction — Companion Brief

## You Are an Orchestrator
Act as the orchestrator for this task. You own the HOW: decide how to decompose the work, what to analyze in what order, and how to synthesize.

## Local Data Schema
`content/bank/ets-exams.js` exports `PGRE.ETS_EXAMS` (array) and `PGRE.ETS_DRILLS` (array). Each exam object:
```
{ id, title, format, link, scale: [{raw, scaled}...],
  questions: [{ id, topic, subtopic, difficulty, q, choices, answer,
                choiceSols, sol, images, src }] }
```
- `topic`: two-letter code (cm, em, qm, td, at, ow, sr, lm, sp)
- `choiceSols`: per-distractor explanations (null if none)
- `sol`: HTML string with worked solution
- 7 exams: ets2024, gr0177, gr0877, gr1777, gr8677, gr9277, gr9677

## Web Research
Use `/deep-research` for the web-sourced portion. Target reliable platforms:
- ETS's own GRE Physics content specifications and scoring documentation
- PhysicsGRE.com forums (test-taker experiences, pattern observations)
- GradCafe Physics GRE threads
- Published prep-guide authors' strategic observations (Kahn, Hecht, Taylor)
- Any academic or test-prep analysis of Physics GRE question design

## Output Specification
Write a single file: `20_docs/Project Docs/PGRE-Philosophy.md`
- Pure prose, first-principles philosophy
- No rigid taxonomy, no per-topic breakdown, no archetype catalog
- The document should be self-contained: an agent reading only this file absorbs the *mindset* of what makes a GRE problem a GRE problem
- Never reproduce ETS question text (copyright + spoiler protection)

## What Already Exists at Output Path
Nothing — `20_docs/Project Docs/` contains `DESIGN.md`, `PROPOSAL.md`, `FORMULA-MEMORIZATION-SURVEY.md`, `Practice Resources.md`. The philosophy doc is new.
