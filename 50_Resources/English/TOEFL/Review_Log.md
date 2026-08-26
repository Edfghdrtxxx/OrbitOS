---
title: TOEFL Flashcard Review — Guide & Notes
type: resource
status: active
area: "[[Self-Development]]"
created: 2026-06-24
updated: 2026-08-22
tags: [english, TOEFL, speaking, writing, spaced-repetition, review]
related:
  - "[[TOEFL_Phrase_Bank]]"
sr_engine: Obsidian Spaced Repetition plugin (st3v3nmw)
review_target_per_day: 5
---
# TOEFL Flashcard Review — Guide & Notes

> [!info] Scheduling is owned by the plugin
> The **Obsidian Spaced Repetition** plugin (st3v3nmw) schedules every card in
> [[TOEFL_Phrase_Bank]] (SM-2 or FSRS) and writes review data as an
> `<!--SR:...-->` comment next to the card. Do not edit those comments by hand.
>
> Bank note: [[TOEFL_Phrase_Bank]] contains both **Speaking** (`#flashcards/toefl/speaking`)
> and **Writing** (`#flashcards/toefl/writing`) subdecks.

## Plugin paradigm (surveyed 2026-07-29)

Source: [plugin README](https://github.com/st3v3nmw/obsidian-spaced-repetition) · parser behavior in `src/parser.ts`.

### Deck tags

| Setting | Default | What works |
|---------|---------|------------|
| Flashcard tags | `#flashcards` | Any tag that **is** `#flashcards` or starts with `#flashcards/` |
| Subdecks | hierarchical tags | e.g. `#flashcards/toefl/speaking` → tree under `flashcards` |
| Custom root tags | must be added in settings | e.g. bare `#toefl-speaking` is **ignored** unless added to Flashcard tags |

This bank uses **`#flashcards/toefl/speaking`** (frontmatter + inline) so it works with **default** plugin settings — no settings change required.

### Card formats (defaults)

| Type | Separator | Cards produced |
|------|-----------|----------------|
| Single-line basic | `Question::Answer` | 1 (front → back) |
| Single-line bidirectional | `Question:::Answer` | 2 (both directions) |
| Multi-line basic | line that is only `?` | 1 |
| Multi-line bidirectional | line that is only `??` | 2 |
| Cloze | `==text==` (highlights on by default) | 1+ |

**Speaking bank uses multi-line basic (`?`) — one-way only.**

| Direction | Front (prompt) | Back (recall) |
|-----------|----------------|---------------|
| Fixed | Scenario / interview cue | Phrase + Model (+ optional Note/Alt) |

Do **not** use `??` in the speaking bank — that would spawn reverse siblings (phrase → scenario), which is not the intended practice mode.

### Hard rules (parser)

1. A **blank line ends a multi-line card** (unless you set a custom end marker).
2. **No blank line** between front, `?`, and back — or the card splits/breaks.
3. Separators must be **alone on the line** (after trim): `?` not `? something`.
4. HTML comments other than `<!--SR:...-->` are skipped; leave SR comments intact.
5. Inline separators are ignored inside odd-backtick code spans.
6. Headings are not part of the card text when a blank line follows them; they still show as **context** if *Show context in cards* is on.

### Vault sibling that already works

[[Daily Accumulation]] uses frontmatter tag `flashcards/english` and single-line `::` / `:::` cards — same plugin, same deck-root convention.

## One-time setup

1. Install **Spaced Repetition** (Stephen Mwangi / st3v3nmw): Settings → Community plugins.
2. Leave **Flashcard tags** at default `#flashcards` (or ensure it remains).
3. Leave separators at defaults: `::` · `:::` · `?` · `??`.
4. Open [[TOEFL_Phrase_Bank]] once so the vault cache sees the tags.
5. Command palette → **Spaced Repetition: Review flashcards** → select deck:
   - **`flashcards` → `toefl` → `speaking`** for oral practice (~5/day).
   - **`flashcards` → `toefl` → `writing`** for written / email practice.

No need to add a custom root tag.

## Daily review (~5/day)

1. **Spaced Repetition: Review flashcards** (or ribbon icon) → choose subdeck `toefl/speaking` or `toefl/writing`.
2. Read the **scenario / cue** on the front.
3. **Recall** the phrase + model aloud (speaking) or visualize the syntax/frame (writing), then flip to check.
4. Rate Again / Hard / Good / Easy — the plugin schedules the next due date.

### Common confusion: empty right sidebar

The plugin has **two separate systems**:

| System | Tag | UI | This bank? |
|--------|-----|-----|------------|
| **Flashcards** | `#flashcards/...` | Command **Review flashcards** → deck tree | **Yes** — use this |
| **Note review** | `#review` | Right sidebar **"Review a note"** | **No** — stays empty |

`enableNoteReviewPaneOnStartup` opens the note-review sidebar automatically. An empty `#review` list does **not** mean the collocation cards failed to load.

## On-demand practice

Ask Claude: *"Generate a Take-an-Interview prompt and a model answer that naturally uses my due collocations."* (Independent of the plugin.)

## Optional session notes

*(Free-text only — not for scheduling. Newest at top.)*

- 2026-08-22 — Unified Speaking & Writing banks into single note [[TOEFL_Phrase_Bank]] with dual subdecks (`#flashcards/toefl/speaking` [33 cards] and `#flashcards/toefl/writing` [14 cards]); consolidated 46-item reconcile log.
- 2026-08-21 — Synchronized EXMP-09 (childhood memory); added EXMP-15 (big city living / urban convenience).
- 2026-08-20 — Reconciled Google Doc *English Sentence Material Accumulation* → vault: OPIN-07, EXMP-10–14, writing EM-04. Drive MCP read-only; local corrections not pushed back.
- 2026-07-30 — Fixed review direction to **scenario → phrase + model** only: multi-line separator `??` → `?` (one-way); dual `<!--SR:...-->` schedules trimmed to the forward card.
- 2026-07-29 — Bank reformatted for plugin defaults: deck tag `#flashcards/toefl/speaking` (was bare `#toefl-speaking`, which default settings ignore); multi-line blocks with no internal blank lines; blank line between cards. Paradigm surveyed from upstream README + `parser.ts`.
- 2026-07-29 — Full reconcile with Apple Notes; writing/email/AD → [[Writing_Phrase_Bank]].
- 2026-06-24 — Bank created with seed phrases (OPEN/OPIN/EXMP/CONT/CONC).
