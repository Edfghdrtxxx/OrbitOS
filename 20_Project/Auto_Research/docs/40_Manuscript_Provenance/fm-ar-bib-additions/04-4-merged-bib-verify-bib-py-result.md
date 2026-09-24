<!-- Verbatim source section; overview: [[../fm-ar-bib-additions]] -->
<!-- SOURCE-BODY-START -->
## 4. Merged bib + `verify_bib.py` result

Built `.scratch/bibadd/references_merged.bib` = `references.bib` with all `fixes.bib` replacements applied, the 11 fix-sheet deletions removed, `verify={no-identifier: …}` added to `DBSCAN` (PR #36 exemption), and the 12 `additions.bib` entries appended → **54 entries** (48 − 11 + 5 fix-sheet additions + 12 additions). `.scratch/bibadd/main_patched.tex` = `main.tex` + the 6 fix-sheet cite edits + the 7 add-on edits above (13 substitutions, all single-occurrence, asserted).

Command:
```
python3 scripts/tools/verify_bib.py .scratch/bibadd/references_merged.bib \
    --tex .scratch/bibadd/main_patched.tex --cache .scratch/bibadd/verify_cache.json
```

Result: **exit 0** — 53 entries `ok` (title similarity ≥0.90, year match, identifier resolves), 1 `exempt` (`DBSCAN`, via the new `verify` field), **zero uncited entries** (all 54 keys are cited in the patched tex). Full table in `.scratch/bibadd/verify_out.txt`; the only non-`ok` row:

```
DBSCAN                       exempt                 -      Ester et al. KDD-96 has no DOI or arXiv ID; AAAI Press proceedings
```

This is one better than the fix sheet's run (41/42 ok, exit 1 on DBSCAN) — the PR #36 exemption clears the last flag.

<!-- SOURCE-BODY-END -->
