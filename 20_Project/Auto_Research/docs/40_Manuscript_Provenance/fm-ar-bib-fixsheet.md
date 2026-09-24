> Origin: `fm-ar-bib-fixsheet` scout report; recorded 2026-09-24. Companion paste-ready BibTeX: `fixes.bib` (firstmate data dir `fm-ar-bib-fixsheet/`, not copied into the vault). Related: [[40_Manuscript_Provenance/fm-ar-bib-additions|Bib additions sheet for references.bib]].

<!-- SOURCE-PREFIX-START -->
# fm-ar-bib-fixsheet — ready-to-apply bib fix sheet for `references.bib`

**Date:** 2026-09-24 · **Worker:** fm-ar-bib-fixsheet (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation`. Nothing in `10_Papers-Thesis/` was modified; all work happened in the worktree's gitignored `.scratch/bibfix/`. Deliverables: this report + `fixes.bib` (same directory) — full corrected entries, paste-ready.

**Manuscript:** `10_Papers-Thesis/Physics_Informed/main.tex` (606 lines), `references.bib` (442 lines, 45 entries, 38 cited).

**Verification method:** every DOI below was resolved live against `api.crossref.org/works/<doi>` and every arXiv ID against `export.arxiv.org/api/query?id_list=` on 2026-09-24; returned titles are quoted verbatim. Final check: `scripts/tools/verify_bib.py` run on a fully patched copy of the bib + tex (see §7).

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/01-1-cited-fabricated-unverifiable-entries-replacements|1. Cited fabricated / unverifiable entries — replacements]]
- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/02-2-wrong-doi-wrong-title-missing-doi-stale-entries-corrected|2. Wrong-DOI / wrong-title / missing-DOI / stale entries — corrected BibTeX]]
- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/03-3-uncited-dead-entries-delete-list|3. Uncited dead entries — delete list]]
- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/04-4-identifier-additions-needed-for-verify-bib-py-to-pass|4. Identifier additions needed for `verify_bib.py` to pass]]
- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/05-5-summary-of-all-main-tex-citation-edits|5. Summary of all `main.tex` citation edits]]
- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/06-6-verify-bib-py-result-on-the-fully-patched-copy|6. `verify_bib.py` result on the fully patched copy]]
- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/07-7-what-i-did|7. What I did]]
- [[40_Manuscript_Provenance/fm-ar-bib-fixsheet/08-8-captain-hold-inventory|8. Captain-hold inventory]]

<!-- ORIGINAL-BODY-SHA256: 34c381049328350f1ecad00a7bf6f521619c9e664f40259382676301ef0036c0 -->
<!-- ORIGINAL-BODY-BYTES: 14900 -->
