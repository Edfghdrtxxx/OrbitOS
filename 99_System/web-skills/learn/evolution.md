# Evolution Log

Local copy of teaching lessons. grok.com publish is `SKILL.md` only (lessons inlined in Phase 0). When a teaching rule evolves, update Phase 0 of `SKILL.md` and this file.

## 2026-08-22 — grok.com fork

### Lessons

- **I/O only differs.** Pedagogy matches local `/learn`. File-backed: project/connector files. Chat-backed: session document. Never fail a turn for a missing vault path; never invent prior knowledge.
- **Package like website `reflect`:** `SKILL.md` only in the left rail. No `show_widget`, `read_me`, or `AskUserQuestion` on grok.com.
- **Do not upload the local folder.** Vault paths and Claude/Grok-Build tools will stall the website agent.

## 2026-08-22

### Lessons

- **Same family, same note.** If the new miss is a sibling of an existing thread, keep going there — even if that note was closed. Today: TOEFL compound-pairing errors went on the collocations/noun-logic session, not a new dated file with a finer name. Physics prerequisite forks still split.

## 2026-08-11

### Lessons

- **No hints or answer keys in session notes** unless learner asks — check in chat after they attempt.

### User Preferences

- **Drills: user prefer mixed-judgment over** labeled sections.

## 2026-08-05

### Lessons

- **No LaTeX in GFM pipe tables in progress notes.** Obsidian breaks `$...$` / kets inside `| cells |` (pipes, `\|`, math not parsed). Use bullet lists (`- **Label:** $...$`) for formula summaries.
- **Physics mastery drills → Physics GRE level (Physics only).** When the learner asks for drills / mastery checks on **Physics** topics (not first-contact scaffolds), target Physics GRE difficulty: multi-step algebra, two-way checks, invert formulas, short conceptual traps — not only single-line plug-ins. Do **not** apply GRE difficulty to non-Physics threads (English, TOEFL, etc.).



## 2026-07-27



### Lessons

- **Mid-session split stays on the table.** Prerequisite forks are not only for session start. If a digression appears mid-thread (e.g. $\Psi(x,t)=\langle x|\Psi(t)\rangle$ while doing TISE) and it is really a separate foundation — representation, notation layer, missing premise — open a new `60_Learning_Progress` note, link parent ↔ child, and continue the digression there. Do not keep stuffing the parent session just because the conversation already started.



### User Preferences

- Prefer splitting representation / ket-vs-wavefunction foundations out of TISE-HO-$D(\alpha)$ threads even when the gap surfaces mid-turn.



## 2026-07-26



### Lessons

- **Diagnose prerequisites first.** Before guided derivation of a target concept, check which premises the learner actually has (e.g. Dirac notation, Hermitian operators, ladder ops, HO spectrum). Do not assume harmonic-oscillator algebra is available just because the target formula uses $a$ and $a^\dagger$.
- **Split missing prerequisites into separate notes.** If the learner lacks foundations for the target (e.g. displacement operator $D(\alpha)$ needs HO + ladder operators), open a separate `60_Learning_Progress/<topic>/` session note for each missing concept instead of teaching them inside the target thread. Link parent ↔ child notes; resume the parent only when the foundations are solid enough to use.

