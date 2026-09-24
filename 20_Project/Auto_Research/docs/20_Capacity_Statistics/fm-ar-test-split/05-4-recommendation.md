<!-- Verbatim source section; overview: [[../fm-ar-test-split]] -->
<!-- SOURCE-BODY-START -->
## 4. Recommendation

**Adopt (a) + (d): launch Rung 1 as merged, and add the unused-pool held-out evaluation.**

- The merged configs are already optimal for pairing: identical val to lf, identical recipe. Do **not** add `split_ratio` — option (b) destroys both pairing axes and still needs (d)'s harness to produce a test number.
- Before or alongside the GPU runs, run the (d) harness on the existing lf checkpoint (and optionally the buggy s42/s0 checkpoints — same unused pool) on box-176 CPU: recompute the seed-42 complement indices, dump predictions, publish `held_out_accuracy` alongside `best_val_acc`. When Rung 1 lands, repeat for the three new checkpoints → the campaign's first fully paired, true held-out 2×2.
- Disclosure wording for the closing doc / paper: *"All EXP3 accuracies are validation-set metrics on the 25k split used for early stopping and best-epoch selection; the selection premium is bounded at ≤0.3pp for the label-fix run (≤1.7pp worst arm, mean 0.7pp; `exp3_selection_bias.py`). Held-out numbers on the unused 75k-per-file event pool are reported separately."*
- If a *training-time-recorded* test split is ever mandated (referee-facing provenance inside `data_split.json`), prefer (c)'s carve-from-train over (b) — it preserves val pairing — but recognize it still cannot evaluate lf, so (d) remains necessary regardless.

**What should ship (for firstmate's promote decision):** the (d) glue — a small `scripts/analysis/exp3_heldout_unused.py` (complement-index computation + `data_split.json` writer or `--indices-file` patch to `_build_eval_dataset`) plus a one-line doc addition to `exp3_gpu_rung1.md`. No changes to training code or the merged configs.

---

<!-- SOURCE-BODY-END -->
