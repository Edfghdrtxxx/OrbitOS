<!-- Verbatim source section; overview: [[../fm-ar-d14-power]] -->
<!-- SOURCE-BODY-START -->
## 6. Recommended follow-up ships (clear, small)

1. **Store per-event outputs in `h1_diagnostics.json`**: probe correctness vectors for D1/D2/D3 (3×250 bools) and the existing preds/labels (already computed, just not saved). Cost: ~2 KB; unlocks exact paired CIs, McNemar on probes, and bootstrap — the difference between "unresolved" and resolved at the same n.
2. **k-fold or repeated-split probes** (e.g., 5×2 CV or 10 random 50/50 splits): turns single-draw scores into a mean±spread at zero extra extraction cost — features are already in RAM.
3. **The memory fix in §4** (`set_num_threads(1)` + two-process split) → rerun at n=8000; resolves the observed effect sizes.
4. **Prereg wording fix**: D2 branch should read "≈ majority baseline" not "≈ chance"; D4 needs a third cell — "concentrated on shared hard events → common difficulty, mechanism unattributed" — since the observed outcome matches neither pre-registered branch.
5. **Report D4 conditional on class**: shared-error rate within class-0 vs class-1 (computable once per-event preds are stored) separates "both models find triton hard" from "physics-mediated errors."

<!-- SOURCE-BODY-END -->
