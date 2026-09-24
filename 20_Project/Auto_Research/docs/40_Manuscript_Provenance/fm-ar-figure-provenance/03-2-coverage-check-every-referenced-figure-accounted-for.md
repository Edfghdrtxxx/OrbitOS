<!-- Verbatim source section; overview: [[../fm-ar-figure-provenance]] -->
<!-- SOURCE-BODY-START -->
## 2. Coverage check — every referenced figure accounted for

`grep -n includegraphics` on both files: 8 in main.tex + 4 in supplementary.tex = **12 figures, all ledgered above**. No `\input`/`\include` in main.tex (single file). Unreferenced files in `figures/` are raster/vector duplicates of referenced figures plus `figures/_legacy/` (9 files incl. the three V6 figures flagged in §0 — unreferenced, do not reinstate before the Windows label check).

<!-- SOURCE-BODY-END -->
