<!-- Verbatim source section; overview: [[../fm-ar-related-work]] -->
<!-- SOURCE-BODY-START -->
## 6. What I did and verified

- Read `main.tex` (all 606 lines) and `references.bib` (all 45 entries) in the live checkout; extracted every `\cite` key and diffed against bib keys (7 uncited entries found).
- Verified **every** DOI in the bib against `api.crossref.org/works/<doi>` and every arXiv ID against `export.arxiv.org/api/query?id_list=`. Results in §2 — 4 fabricated, 1 unverifiable, 5 wrong-DOI, 3 wrong-title, 1 missing-DOI, 1 stale-preprint, 2 miscited.
- Verified **every candidate new citation** in §3 the same way before listing it (DOI or arXiv ID confirmed to resolve to the stated paper). No reference is asserted from memory.
- Read `fm-ar-mechanism/report.md` and `fm-ar-claims-ledger/report.md` in full for the campaign evidence behind each verdict.
- Web search tool was unavailable (auth-gated); all verification used direct Crossref/arXiv API calls — commands shown inline above.

<!-- SOURCE-BODY-END -->
