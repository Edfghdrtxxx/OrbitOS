> Origin: `fm-ar-bib-additions` scout report; recorded 2026-09-25. Companion paste-ready BibTeX: `additions.bib` (firstmate data dir `fm-ar-bib-additions/`, not copied into the vault). Related: [[40_Manuscript_Provenance/fm-ar-bib-fixsheet|Bib fix sheet for references.bib]].

<!-- SOURCE-PREFIX-START -->
# fm-ar-bib-additions — paste-ready add-on sheet for `references.bib`

**Date:** 2026-09-24 · **Worker:** fm-ar-bib-additions (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation`. Nothing in `10_Papers-Thesis/` was modified; all work happened in the worktree's gitignored `.scratch/bibadd/`. Deliverables: this report + `additions.bib` (same directory) — 12 new entries, paste-ready, no key collisions with `references.bib` or `fixes.bib`.

**Manuscript:** `10_Papers-Thesis/Physics_Informed/main.tex` (606 lines), `references.bib` (**48 entries** — the fix sheet said 45; recount: 48 `@` blocks, of which 38 cited).

**Verification method:** every DOI resolved live against `api.crossref.org/works/<doi>` and every arXiv ID against `export.arxiv.org/api/query?id_list=` on 2026-09-24; returned titles quoted verbatim in §2. Final check: `scripts/tools/verify_bib.py` on a fully merged bib + patched tex copy (§4) — **exit 0, 53 ok + 1 exempt, zero uncited**.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[40_Manuscript_Provenance/fm-ar-bib-additions/01-1-candidate-by-candidate-the-sentence-each-would-support-and|1. Candidate-by-candidate: the sentence each would support, and the verdict]]
- [[40_Manuscript_Provenance/fm-ar-bib-additions/02-2-full-bibtex-live-verification|2. Full BibTeX + live verification]]
- [[40_Manuscript_Provenance/fm-ar-bib-additions/03-3-citation-points-and-suggested-sentences-as-applied-to-the-|3. Citation points and suggested sentences (as applied to the patched copy)]]
- [[40_Manuscript_Provenance/fm-ar-bib-additions/04-4-merged-bib-verify-bib-py-result|4. Merged bib + `verify_bib.py` result]]
- [[40_Manuscript_Provenance/fm-ar-bib-additions/05-5-what-i-did|5. What I did]]
- [[40_Manuscript_Provenance/fm-ar-bib-additions/06-6-captain-hold-inventory|6. Captain-hold inventory]]

<!-- ORIGINAL-BODY-SHA256: c3cb9e15238bf985e5794098247b452e931f08bd4387c9da04c6d77ae27880ca -->
<!-- ORIGINAL-BODY-BYTES: 16459 -->
