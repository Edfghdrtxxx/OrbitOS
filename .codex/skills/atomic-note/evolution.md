# Evolution Log

## 2026-03-10
### Lessons
- Wikilink discovery and cross-referencing must include `50_Resources/**/*.md` alongside `40_Wiki/` and `30_Research/`. Previously only the latter two were searched, causing missed links and undetected near-duplicates (e.g. `50_Resources/Physics/ExtractionDistillation/Spin-Orbit Coupling in Nuclei.md` was invisible when creating `40_Wiki/.../Spin-Orbit Coupling.md`).
- Duplicate check (C1) must go beyond exact-match in `40_Wiki/`. A near-duplicate scan across `50_Resources/` and `30_Research/` (filename-contains-topic) catches pre-existing content on the same subject under a slightly different name. When found, ask the user before proceeding.

## 2026-03-07
### Lessons
- When creating notes from source material (e.g. .docx, pasted text), verify factual claims independently before propagating them. The source may contain errors (e.g. "TString inherits from TObject" was wrong — TObjString does, TString does not). Do not blindly trust the input.
