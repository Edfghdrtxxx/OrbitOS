---
name: vocabulary-absorption
description: >
  Context-first vocabulary absorption. Feed words, get back contextual passages,
  collocation drills, and targeted quizzes — never bare "word = definition" flashcards.
  Trigger: /vocabulary-absorption, "absorb these words", "vocab drill", "help me absorb",
  or any request to practice a batch of vocabulary in context.
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

# Philosophy

Words live in context, not in dictionaries. A word learned as a key-value pair
(word → definition) stays inert; a word encountered in a sentence, compared against
its near-synonyms, and tested through production becomes usable. AI generates the
context at speed — but the remembering is still on the learner.

# Record (optional, at the end)

At the end of the session, ask the learner if they want to record the results. If they agree:

1. Locate or create the session note:
   - Check `60_Learning_Progress/Vocabulary/` for an existing topic note — **reuse first**
   - If missing, create `60_Learning_Progress/Vocabulary/<YYYY-MM-DD-HHmm> <topic-or-source>.md`
2. Write drill content and results into the session note.
3. Update `60_Learning_Progress/Progress-context.md`:
   - **Known solid**: words the learner used correctly across all stages
   - **In progress**: words with partial recall or collocation errors
   - **Gaps / next**: error-prone patterns surfaced in Stage 4

Keep the record terse. One line per entry. Do not log words that were trivially easy.

# Input

Accept words however they arrive — a plain list, a screenshot, a paste from
Anki, a single tricky word, or twenty. No minimum, no maximum.

After receiving the words, ask the learner:
> Any of these you'd mark as **"always forget"** or **"keep mixing up"**?

If they flag any, weight those words more heavily across all four stages.

# Output — Four Stages

## Stage 1 · Visual Mnemonic

Open with a vivid first impression. For each word (or the most interesting /
hardest ones if the batch is large), generate a **mnemonic illustration** using
the image generation tool (Aspect Ratio: 16:9):

1. Decompose the word into its **etymological components** (e.g., prefixes, roots, suffixes with their origins and meanings).
2. Craft a vivid image prompt: The image must feature the etymological breakdown floating as glowing text (e.g. "'AF' -> FIRM, from Latin FIRMUS, meaning STRONG, SOLID, STEADY"). Below it, depict a surreal cinematic scene that illustrates the meaning (e.g., a blacksmith forging a glowing "YES" on an anvil for 'affirm'), with memorable colors (neon gold, cyan, etc.), and a mnemonic learning style.
3. Generate the image and embed it in the session note.
4. Explain the visual mnemonic — how each element and etymological root maps to the word's meaning.

This is the hook — make the learner *want* to remember. Prioritize phrasal
verbs, idioms, and words with a decomposable literal-vs-figurative gap.

## Stage 2 · Contextual Passage

Write **one short, natural passage or dialogue** (150–250 words) that weaves in
**every** provided word. The passage should read like authentic material — not a
contrived word-soup. Bold each target word on first appearance.

Then give **3–5 comprehension questions** that force the learner to infer word
meaning from context. Do not ask "what does X mean?" — ask questions whose answers
require understanding X.

Wait for the learner's answers. Give brief feedback, then move to Stage 3.

## Stage 3 · Collocation & Synonym Drill

For each word (or the subset the learner struggled with), provide:
- 2–3 **common collocations** (verb + noun, adj + noun, etc.)
- 1–2 **near-synonyms or easily confused words** with a one-line distinction
- **One fill-in-the-blank or error-correction item** testing the above

Present all items, wait for answers, then explain each answer concisely and
supply one additional example sentence per corrected item.

## Stage 4 · Weak-Spot Quiz

Design a focused **10-minute mini quiz** (8–12 items) mixing formats:
sentence completion, multiple choice, collocation matching, error correction.
**Weight the quiz toward words the learner got wrong** in Stages 2–3.

After the learner finishes, highlight their **2–3 most error-prone patterns**
(not just words — patterns: e.g. "you keep using *arise* as transitive",
"you confuse *complement* / *compliment* collocations").

# Rules

- **English first** — Chinese glosses only when the learner is visibly stuck.
- **No bare word lists**. Every word appears in a sentence at least once.
- **Active recall over passive review**. Ask before telling.
- **Keep it tight**. Each stage ≈ 5–10 minutes, not a lecture.
- **Adapt difficulty** across stages — easy Stage 1 → harder Stage 3.
