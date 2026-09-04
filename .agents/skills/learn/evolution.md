# Evolution Log

## 2026-09-02

### Lessons

- **Full drill prompts in session notes (never stubs):** When issuing drill batches, the complete verbatim drill text (passages, questions, options, instructions) must be written directly into the session note under the Tutor turn. Never use placeholders/stubs like `*(Drill Batch 1 issued in chat)*`—the session note is the primary self-contained record.

## 2026-08-29

### Lessons

- **AskQuestion letters are not a record.** If the learner answers grill-me / AskQuestion with option letters only (`Option A + B`), the session note must store the **full option wording** those letters pointed at — at the question turn and in the learner block. Letters alone are not recoverable by a later agent.

## 2026-08-28

### User Preferences
- **Drills: weak-spot loop.** Several turns; re-weight toward misses; close with 2–3 error-prone *patterns* (not item scores or a word list). One-question tutoring rhythm yields during drills.

## 2026-08-27

### Lessons

- **Images → Context verbatim.** If the learner attaches images, record the complete corresponding content in the session note's Context section: transcribe all readable item text (question, chosen answer, correct answer, WHY/explanation, and any other on-screen copy). Do not paraphrase the screenshot.
- **Images → describe what transcription misses.** If transcription cannot fully capture the image, describe the remaining targeted content: layout, marks (e.g. red incorrect vs green correct), and any non-textual cue the learner is pointing at. Do not invent wording that is not visible.


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

