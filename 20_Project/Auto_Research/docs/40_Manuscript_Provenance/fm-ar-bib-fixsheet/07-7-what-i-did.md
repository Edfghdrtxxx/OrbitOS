<!-- Verbatim source section; overview: [[../fm-ar-bib-fixsheet]] -->
<!-- SOURCE-BODY-START -->
## 7. What I did

- Read the audit (`fm-ar-related-work/report.md` §2), full `references.bib`, and all cite sites in `main.tex` from the live checkout (read-only).
- Verified every proposed DOI against Crossref and every arXiv ID against the arXiv API (commands: `urllib` calls to `api.crossref.org/works/<doi>` and `export.arxiv.org/api/query?id_list=`); quoted titles above are the API responses, not memory.
- Found and fixed three errors the audit missed: `Bradt2021`'s author list (first author is Solli, not Bradt), `Bradt2017`'s title (DOI resolves to "Commissioning of the Active-Target Time Projection Chamber"), and `Guo2026DomainAdapt`'s now-final volume/pages (1088:171506).
- Built `references_fixed.bib` + `main_patched.tex` in `.scratch/bibfix/`, ran `verify_bib.py` — result in §6.
- `fixes.bib` (this directory) contains all 26 corrected/new entries verbatim from the verified fixed bib.

<!-- SOURCE-BODY-END -->
