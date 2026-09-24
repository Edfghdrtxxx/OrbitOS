<!-- Verbatim source section; overview: [[../fm-ar-bib-fixsheet]] -->
<!-- SOURCE-BODY-START -->
## 6. `verify_bib.py` result on the fully patched copy

Patched copy built in `.scratch/bibfix/` (bib edits above + the six tex edits above applied to a copy of `main.tex`). Command:

```
python3 scripts/tools/verify_bib.py .scratch/bibfix/references_fixed.bib \
    --tex .scratch/bibfix/main_patched.tex --cache .scratch/bibfix/verify_cache.json
```

Output:

```
41 of 42 entries `ok` (title similarity ≥0.90, year match, identifier resolves). The single non-`ok` row:

```
DBSCAN                       no-identifier          -
```

`DBSCAN` (Ester et al., KDD-96) has no DOI or arXiv ID in existence — see §4. Every other entry verifies clean, including all corrected and all replacement entries. Uncited list: empty (all 42 keys are cited in the patched tex). Exit code is 1 solely because of the `DBSCAN` flag; the bib is otherwise clean.

Second-round fixes the verifier itself surfaced (first run): `Bradt2017` title-mismatch (fixed, §2), `Ayyad2020_PRL` MathML title artifact (switched to arXiv eprint), `Perez2018FiLM`/`Szegedy2016LabelSmoothing`/`AdamW` year-mismatches (switched to published DOIs `10.1609/aaai.v32i1.11671` and `10.1109/CVPR.2016.308`, and set `AdamW` year=2017 with `note={ICLR 2019}`).
```

---

<!-- SOURCE-BODY-END -->
