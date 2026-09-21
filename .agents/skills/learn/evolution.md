# Evolution Log


## 2026-09-21

### Lessons
- **GRE miss + Guessed + no Progress-context hit = no prior.** Do not open from DC-MPT, conjugate match, Thevenin, or any unlisted theorem. Do not treat the clicked option as a reasoned misconception until the learner states a reason. Diagnose the floor (series $I$, $P=I^2 R$) or split the missing foundation (e.g. impedance) into a child note.
- **Terminal paths every turn.** 2026-09-21 incident: Turn 1 dumped tutor prose in chat and assumed DC-MPT. After the session note is written, the terminal is the list of edited paths only — never the tutor reply, never a paraphrase of the check question. The 2026-09-20 "first turn" wording is not a loophole.

## 2026-09-20

### User Preferences
- **No response repetition in terminal:** The progress note under `60_Learning_Progress/` is the primary surface containing the full tutor prose, derivations, and context. Once the turn's response is written to the local note file, do not repeat it in the terminal — **every turn, not only the first.** Chat is the list of edited note paths only. Never tutor prose, never a paraphrase of the check question.

## 2026-09-19

### Lessons
- **Daily note sync on solid/locked knowledge:** The moment knowledge is considered solid or locked (understanding verified, drill completed, or trap reworked), immediately update today's daily note (`10_Daily/YYYY-MM-DD.md`)—tick completed tasks/subtasks, append performed drills, and write a one-line summary under `## Log`—without waiting for user prompting.

## 2026-09-18

### Lessons
- **Turn brevity & anti-lecture cap:** Keep explanation turns strictly to 1–2 short paragraphs or a compact bullet pair answering only the immediate question, ending with exactly one check question. Compound prompts must never trigger multi-section essays or monograph dumps.

## 2026-09-17

### Lessons
- **Trap logging mandatory on missteps:** Whenever the learner falls into an exam trap, calculation slip, or flawed conceptual assumption during practice or reasoning, record it immediately into `60_Learning_Progress/Trap-Log.md` with the exact trap, correct invariant, and rework status. Subsequent agents must check `Trap-Log.md` alongside `Progress-context.md` to avoid repeating pitfalls and to re-test these specific vulnerabilities.

## 2026-09-08

### Lessons

- **Derivation compile is not live scaffolding.** `/guide-derivation` archived into `/learn`. Tutoring stays in `60_Learning_Progress/`. Write `30_Research/` only when the derivation is complete (boxed result + validity + pitfalls). No Quick/Learn mode menu. Details in `references/derivation.md`.

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

