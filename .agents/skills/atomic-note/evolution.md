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
