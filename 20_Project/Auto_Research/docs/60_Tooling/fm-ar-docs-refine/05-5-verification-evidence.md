<!-- Verbatim source section; overview: [[../fm-ar-docs-refine]] -->
<!-- SOURCE-BODY-START -->
## 5. Verification Evidence

1. **Automated Documentation Validation & Manifest Verification:**
   ```bash
   $ python3 /Users/leyi/.treehouse/OrbitOS-aa5bdb/2/OrbitOS/20_Project/Auto_Research/docs/check_docs.py
   OK: 246 files checked
   ```
   - All 246 files below `docs/` are indexed in `docs/README.md`.
   - Every Obsidian wikilink resolves to a valid, existing markdown note.
   - All 24 split reports reconstruct byte-for-byte to their original source reports with exact sha256 digest and byte-count parity.
2. **Git Commit History:**
   ```bash
   $ git -C '/Users/leyi/.treehouse/OrbitOS-aa5bdb/2/OrbitOS' log -4 --oneline
   5347d9c Clarify split chapter navigation and checks
   c50b7ca Split long auto-research reports into linked sections
   3eb09c6 Refine auto-research navigation and document rules
   b397e0b Migrate EXP3 auto-research records into OrbitOS docs
   ```
3. **Evidence Invariance:**
   - Section bodies are wrapped verbatim between `<!-- SOURCE-BODY-START -->` and `<!-- SOURCE-BODY-END -->`.
   - Zero modifications to numbers, experimental results, hypotheses, citations, file:line references, URLs, or dates.
   - Single-file reports (`exp3-garfield.md`, `fm-ar-comparisons.md`) retain their original bodies verbatim after standard origin headers.

---

<!-- SOURCE-BODY-END -->
