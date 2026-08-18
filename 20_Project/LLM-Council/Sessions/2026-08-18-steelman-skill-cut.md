---
type: council-session
date: 2026-08-18
question: Should bidirectional steelman, /super-alignment, and /elon-musk become one concise skill, or is that the wrong cut?
chairman: grok-4.6
members: [grok-4.6, Gemini, Claude]
status: complete
---
# Steelman skill cut

## Question & Brief
Should bidirectional steelman, /super-alignment, and /elon-musk become one concise skill, or is that the wrong cut? Argue a position. Name the weakest link in the obvious alternative. End with one concrete recommendation: what should exist on disk after the change, and what the daily trigger is.

Context: OrbitOS personal skill vault. Bidirectional steelman restates the real question, steelmans both sides, isolates the decisive variable, then forces a judgment + fork question + next action. /super-alignment is too heavy (re-reads files already in context) and is seldom used. /elon-musk is a first-principles voice that must not force a ritual. User pain: too many similar “confirm my intention” skills; files are the reflection of decisions. /brainstorm archived. User chose “Merge them into a concise skill.” Competing cut: fold steelman into a slimmer super-alignment; leave /elon-musk.

## Stage 1 — First Opinions
### Member-Claude
Merge steelman and super-alignment. Do not keep Elon as a third internal mode. Either leave `/elon-musk` as its own command, or dissolve it into two optional lenses with no persona switch.

The user's two pains fight each other under a naive three-way merge. Pain 1 is skill count. Pain 2 is a remaining skill too heavy to trigger. A “concise” file that still has discussion-mode, steelman-mode, and file-mode is three skills with one name. That is how you get another skill they seldom open.

Steelman and super-alignment share a job: confirm what they actually mean. Files are the write-back of that confirmation, not a second job. One daily path: restate the real question, steelman both sides, name the decisive variable, ask one fork question, then judge. If they pointed at files, write the confirmed intent back from what is already in the conversation. Do not re-read by default. That is the heaviness they already named, fixed at the source.

Elon-musk does not share that job. It is a voice plus a deletion/physics lens. Folding the whole persona in either makes every intention-check sound like Elon — including quiet file alignment they never asked to be theatrical — or it adds a mode picker, which is the management problem again.

The weakest link in “just merge all three and keep it short” is the word *concise*. Short word count is not few jobs. An 80-line skill with three entry points is still three skills.

Recommendation: One surviving skill whose default is bidirectional steelman. File write is an optional last step and must not re-read attached context. Keep `/elon-musk` unless they explicitly want that command gone; if they do, keep only The Algorithm and first-principles as one-line lenses, no Elon mode.

### Member-Gemini
Merging all three is a mistake. The competing proposal—folding bidirectional steelman into a lean `/super-alignment` while leaving `/elon-musk` separate—is the only correct cut.

You are conflating *precision* with *ambition*. Bidirectional steelman and super-alignment share the exact same genetic purpose: precision. Steelman aligns the *problem statement* by stripping away false premises; super-alignment aligns the *written artifact* by ensuring the output matches your actual intent. They are two points on the same continuum of "making sure we are solving the right problem."

`/elon-musk`, however, is an entirely different vector. It is not about aligning with your intent; it is about *destroying* your intent if it violates first principles, and aggressively applying "The Algorithm" (delete, simplify, accelerate). If you force a rigorous, mechanical alignment protocol to share a single prompt with a persona-driven ambition engine, you will dilute both. You will get an AI that tries to execute a rigid 4-step interrogation while roleplaying, resulting in bloated, unfocused outputs.

The argument for a monolithic merge assumes that because all three skills "push back" or "challenge the user," they belong in one box. The fatal flaw here is **predictability of invocation**. If you merge them, the AI must guess your unstated context: do you want a structural steelman, a deep file interrogation, or an Elon-style teardown? You will hesitate to use the trigger because you won't know which behavior will fire. This exact friction is why the old `/super-alignment` became dead weight. Skills must have singular, highly predictable atomic purposes.

Concrete recommendation:
- What should exist on disk: just two files.
  1. `.agents/skills/align/SKILL.md`: The merger. A lean protocol that runs the 4-step steelman on raw ideas, naturally escalating to targeted file-edits *only* if an artifact is in context (no mandatory re-reads).
  2. `.agents/skills/elon-musk/SKILL.md`: Kept strictly isolated for first-principles critique and The Algorithm.
- Daily triggers:
  - `/align`: Fire this when you need ruthless precision to ensure your problem statement or draft reflects reality.
  - `/elon-musk`: Fire this when you need your underlying assumptions vaporized and your timeline accelerated.

### Member-GPT
*(Claude used in place of GPT.)*

Position: The competing cut is right. Three-way merge is wrong.

The axis that matters is function, not vibes. Steelman and super-alignment both answer one question: *"Is this what you actually mean?"* One interrogates decisions in conversation. The other interrogates written artifacts on disk. Same muscle, different surface. Merging them is a compression along a real shared axis — you get a single skill with a light mode (steelman your thinking, no files touched) and a heavy mode (align a file to your confirmed intent). The trigger is natural: if files are pointed at, edit them; if not, just steelman the decision.

Elon-musk does something categorically different. It's not alignment — it's *adversarial reframing*. It applies The Algorithm (delete, simplify, accelerate), raises ambition, attacks scope. That's a thinking partner, not an intent-clarifier. Folding it into an alignment skill creates a trigger collision: when the user says "challenge this," do they want sycophancy-fighting steelman, or do they want Elon's "delete step one entirely"? Those are different moves. A merged skill would need internal routing logic that is itself a smell — it means you merged things that don't share a decision boundary.

Weakest link in the three-way merge: the daily trigger. Steelman triggers on "I need to decide X." Super-alignment triggers on "this file doesn't match what I mean." Elon triggers on "give me a first-principles take." No single slash-command name or invocation phrase covers all three without becoming so generic it's just "/think-harder" — which is what the model should do by default, making the skill pointless.

Weakest link in the competing cut: naming. "/super-alignment" already has low usage partly because the name is opaque and heavy-sounding. If you keep the name, you inherit the friction. This is fixable, not structural.

Concrete recommendation:
- `.agents/skills/steelman/SKILL.md` — merged steelman + super-alignment. Two modes: light (conversation) and file (interrogate → preview → edit only when a file is pointed at). No mandatory re-read.
- `.agents/skills/elon-musk/SKILL.md` — unchanged.
- `.agents/skills/super-alignment/` — archived or symlinked to steelman.
Daily trigger: `/steelman` for sycophancy/vague thinking; `/elon-musk` for a first-principles teardown.

## Stage 2 — Anonymized Peer Review
**Mapping:** A=Claude (GPT seat), B=Gemini, C=host (Member-Claude / grok-4.6)

### Member-Claude review
1. Accuracy — Member A > Member B. A states the shared job cleanly and names a real remaining defect (the old name). B reaches the same cut but treats “deep file interrogation” as if the heavy loop should survive.
2. Insight — Member A > Member B. A’s “internal routing is a smell” is load-bearing. B’s precision-vs-ambition split is vivid but overclaims.
3. Strongest flaw across both: Neither treats “merge them into a concise skill” as a constraint to design against. They refute the three-way merge and stop.
4. Would either change my opinion? On the cut, no. On naming, yes: do not keep `/super-alignment`.

### Member-Gemini review
1. Accuracy: A > C. A answers every constraint with zero hedging and diagnoses `/think-harder`. C hedges on `/elon-musk` and violates “no it depends.”
2. Insight: C > A. “Short word count is not few jobs” teardowns the delusion that a concise file solves cognitive load.
3. Strongest flaw: C’s hedge, and A’s `/steelman` name obscures file-editing so the user will forget the tool can write files.
4. Change in opinion: Structural conclusion unchanged. Missed that `/super-alignment` carries psychological baggage. Adopted C’s “files are the write-back, not a second job.”

### Member-GPT review
*(Claude used in place of GPT.)*
1. Accuracy: C > B. C diagnoses why super-alignment died (ceremony + mandatory re-reads). B misattributes the death to hypothetical mode-guessing.
2. Insight: C > B. “Short word count is not few jobs” defuses “merge into a concise skill.” B’s axis is clean labeling.
3. Strongest flaw: Neither fully internalizes “files are the reflection of decisions.” Both still frame light/file as two modes. It should be one pipeline with an optional write-back tail.
4. Would either change my opinion? No on the cut. Yes on how to write the skill: drop mode framing.

## Stage 3 — Chairman Synthesis
The three-way merge is the wrong cut. Merge steelman into a slimmer alignment skill. Leave `/elon-musk` alone.

That is not a close call. All three members independently drew the same line, and peer review did not move it. The shared job is precision — “is this what you actually mean?” Steelman does that to the question; super-alignment does it to the artifact. Files are the write-back of a confirmed decision, not a second skill and not a second mode. `/elon-musk` is a different vector: it is allowed to destroy the intent if first principles say the intent is wrong. Putting that persona in the same trigger as a 4-step alignment protocol makes the model guess whether you wanted precision or a teardown. That guess is why a merged “concise” skill would become the next thing you seldom open.

Peer review docked the host opinion (C) for hedging on whether to dissolve Elon, and docked the Claude-seat opinion (A) for naming the merger `/steelman`, which hides the write-back. Both docks stand. The surviving skill is not “Elon optional.” Elon stays a separate command. The surviving skill is not named `/super-alignment` (baggage) and not named `/steelman` (it sounds conversation-only). The name that covers problem and artifact is `/align`.

Write it as one linear flow, not light-mode / file-mode: restate the real question, steelman both sides, name the decisive variable, ask one fork question, judge, then — only if files are already on the table — write the confirmed intent back from context already in the conversation. No mandatory re-read. No unbounded interrogation. Archive `/super-alignment`.

## Unresolved Tension
Whether `/align` will actually get used daily, or whether any named alignment skill inherits the same “too heavy, skip it” habit.

## Recommendation
On disk: `.agents/skills/align/SKILL.md` (steelman + optional file write-back, no re-read, no modes) and unchanged `.agents/skills/elon-musk/SKILL.md`; archive `.agents/skills/super-alignment/`. Daily triggers: `/align` for precision, `/elon-musk` for first-principles teardown.
