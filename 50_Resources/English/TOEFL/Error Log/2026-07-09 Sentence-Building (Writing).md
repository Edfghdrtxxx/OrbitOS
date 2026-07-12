---
date: 2026-07-09
passage: Sentence-Building (word-order) drill, Q1-Q10
section: Writing
errors: 3
flawed_items: 1
question_types:
  - Embedded (indirect) question
  - Relative clause (defining / contact)
  - Determiner order
  - Prepositional phrase attachment
tags:
  - TOEFL
  - writing
  - error-log
  - grammar
---
## Task: Make an appropriate sentence (word-order)

The prompt gives a spoken question, a sentence frame with blanks, and a shuffled word bank (sometimes with one extra distractor word). You reorder the bank to answer the question.

Flagged wrong by the app: **Q1, Q5, Q9, Q10**. Correct: Q2, Q3, Q4, Q6, Q7, Q8.

**Revised after review:** Q5 is a **defective item** — my answer was correct and the published key is not. Genuine errors: **Q1, Q9, Q10** (3, not 4).

---

## Error 1 — Embedded (indirect) question + distractor

> **Prompt:** "What were you talking about after the meeting ended?"
> **Frame:** Some colleagues ___ ___ ___ ___ ___ ___ ___.
> **Bank (8 words, 1 distractor):** a conference · they · wanted to · can · register for · make · find out · where

**Your answer:** Some colleagues wanted to register for a conference where they can **make**.
**Correct answer:** Some colleagues **wanted to find out where they can register for a conference**. *(drop: make)*

### Why wrong (inference)
You built the sentence around *register for* as the main action, which stranded "they can **make**" with no meaning and left *find out* unused. The intended structure is **main verb + embedded question**: *find out* → *where* → *they can register…*. Note the embedded clause keeps **statement word order** ("where **they can** register"), not question order.

### Takeaway
- When a bank has a question word (*where/what/why*) plus a verb like *find out / know / ask / decide*, suspect an **embedded question**: `verb + question-word + subject + verb`.
- A leftover word with nowhere sensible to go is usually the **distractor** — here, *make*.

---

## Q5 — NOT my error: defective item (PP-attachment ambiguity)

> **Prompt:** "When will the new office furniture arrive?"
> **Frame:** The desk ___ ___ ___ ___ ___ ___ ___.
> **Bank (7):** scheduled · to arrive · you · Friday · is · ordered · on

**My answer:** The desk you ordered **is scheduled to arrive on Friday**. ✅
**Published key:** The desk you ordered **on Friday** is scheduled to arrive. ❌ (marked me wrong)

### The ambiguity
Both strings are grammatical. They differ in **where the prepositional phrase *on Friday* attaches** — English resolves this by **proximity to the verb**:

| Arrangement | *on Friday* modifies | Friday is when… | Answers "when will it arrive?" |
|---|---|---|---|
| …**arrive on Friday** | *arrive* | it **arrives** | ✅ yes |
| …ordered **on Friday**… | *ordered* | **you ordered** it | ❌ no — arrival time never stated |

### Verdict (fact vs. assumption)
- **Fact:** the key's sentence never states an arrival time, so it does not answer its own prompt. No grammatical rule blocks *scheduled to arrive on Friday*.
- **Assumption:** the key is wrong, or the auto-grader accepts only one hard-coded string. These generators often produce the sentence first and attach a question separately; mismatches follow. I cannot construct a rationale that makes the key correct.

**Do not "learn" this key.** My answer is the one a native speaker would give.

### What is still worth keeping
1. **Contact relative clause.** *The desk* **(that) you ordered** appears in *both* versions: *that* is dropped because it is the **object** of *ordered*. Only object pronouns may be dropped — a subject pronoun cannot (*"The desk **that** was ordered"*).
2. **PP-attachment rule.** When a time adverbial could attach to two verbs, **place it beside the verb it modifies.** In a reorder task, choose the arrangement that actually **answers the prompt**.

---

## Error 3 — Determiner order: "the only", not "only the"

> **Prompt:** "Why didn't you go to the library today?"
> **Frame:** ___ ___ ___ in town ___ ___ ___.
> **Bank (7):** library · temporarily closed · for · is · renovations · the · only

**Your answer:** **Only the** library in town is temporarily closed for renovations.
**Correct answer:** **The only** library in town is temporarily closed for renovations.

### Why wrong
Both are grammatical, but they mean different things:
- **"The only library"** = there is *just one* library, and it's closed. ✅ (answers "why didn't you go")
- **"Only the library"** = *the library specifically* (as opposed to other buildings) is closed. ❌ (wrong emphasis)

*only* here is a limiting adjective that sits **after** the article: `the + only + noun`. Putting *only* first turns it into a focusing adverb modifying *the library*.

---

## Error 4 — Defining relative clause + distractor (unsolved under time)

> **Prompt:** "Can you recommend a good book to read?"
> **Frame:** ___ ___ ___ ___ ___ ___ ___.
> **Bank (8 words, 1 distractor):** my sister · you · that · suggest · one · might interest · can · be

**Correct answer:** **My sister can suggest one that might interest you.** *(drop: be)*

### Structure
Skeleton = *My sister can suggest one*. Then the noun *one* is post-modified by a **defining relative clause**: *one* **that might interest you**. The distractor *be* has no slot once the skeleton is built.

---

## Blind Spot Analysis

### Core pattern: main clause + embedded/relative clause
Of my **three genuine errors**, **two (Q1, Q10)** share one shape — a head word followed by a clause that modifies it:

| Item | Head | Modifier clause | Type | Genuine error? |
|------|------|-----------------|------|----------------|
| Q1 | find out | where they can register… | embedded question | ✅ yes |
| Q10 | one | that might interest you | defining relative | ✅ yes |
| Q5 | the desk | (that) you ordered | contact relative | ❌ no — bad key |
| Q9 | — | — | determiner order (*the only*) | ✅ yes |

The failure is not vocabulary — it is **not seeing the two-clause architecture**, then choosing the wrong connector or wrong main verb, and **not isolating the distractor** early (*make* in Q1, *be* in Q10).

Q9 is a separate, smaller issue: **determiner order** (*the only*). Q5 is not a blind spot at all — it is a flawed item, though its **PP-attachment** ambiguity is worth internalising anyway.

### The fix — 5-step assembly drill
1. **Predict** the answer's meaning from the prompt question before touching words.
2. Build the **skeleton**: one main subject + one main verb + core object (Q10: *sister … can suggest one*).
3. **Count** bank vs. blanks; if the bank is longer, find the **distractor now**, not last.
4. **Attach the modifier** to its noun/verb, choosing the connector by type:
   - identity of a person/thing → *that / who* (drop it if it's the **object**)
   - place → *where* · time → *when*
   - embedded question → *question word + statement word order*
5. **Park adverbials next to the verb they modify** (*arrive **on Friday***, not *ordered **on Friday***).
6. **Read the whole sentence back** against the prompt. If it doesn't answer the question, the order is wrong — regardless of how grammatical it sounds.

### Grammar references (primary source)
- Defining relative clauses; object-pronoun omission; reduced relatives — Murphy, R. *English Grammar in Use* (Cambridge), Units 92–97. (Same source cited in [[Relative Clauses]].)
- Embedded/indirect questions retain statement word order — Murphy, R. *English Grammar in Use*, indirect-question units.

## Related Concepts
- [[Relative Clauses]]
- [[Where vs That (Relative Clauses)]]
- [[Articles]]
