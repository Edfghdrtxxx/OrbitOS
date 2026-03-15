# Evolution Log

## 2026-03-15
### Lessons
- When the user provides a source context via `/atomic-note <topic> in <file>`, after creating the note, automatically grep the source file for unlinked mentions of the new topic and offer to insert `[[Topic]]` wikilinks back into that source file. This avoids the user having to manually request backlink insertion as a separate step.

## 2026-03-10
### Lessons
- Cross-reference and duplicate check must include `50_Resources/` — not just `40_Wiki/` and `30_Research/`. Near-duplicate scan (filename-contains-topic) across all three; ask user before proceeding.

## 2026-03-07
### Lessons
- When creating notes from source material (e.g. .docx, pasted text), verify factual claims independently before propagating them. The source may contain errors (e.g. "TString inherits from TObject" was wrong — TObjString does, TString does not). Do not blindly trust the input.
- This extends to **self-generated content**: journal article citations (title, authors, volume, page, year) are frequently hallucinated in plausible-sounding ways (correct authors + wrong title, or correct journal + wrong page). Before writing a References section, look up each citation via INSPIRE-HEP, DOI, or Google Scholar. Textbook citations (title + year) are lower risk but should still be sanity-checked.
- **Wikilink aliases must be semantically correct.** Do not alias `[[ConceptA|ConceptB]]` unless ConceptB genuinely IS ConceptA. Example failure: `[[Coulomb Excitation|fusion-evaporation]]` — these are completely different reaction mechanisms. When uncertain about the correct target note, use a stub `[[Fusion-Evaporation Reaction|fusion-evaporation]]` rather than forcing an incorrect alias to an existing note.
