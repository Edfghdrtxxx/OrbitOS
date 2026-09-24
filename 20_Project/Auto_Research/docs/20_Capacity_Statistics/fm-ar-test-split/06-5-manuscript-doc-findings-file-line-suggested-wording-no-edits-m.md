<!-- Verbatim source section; overview: [[../fm-ar-test-split]] -->
<!-- SOURCE-BODY-START -->
## 5. Manuscript / doc findings (file:line, suggested wording — no edits made)

1. **`20_doc/EXP3_closing_analysis_2026-09-24.md` §4 L41/L43/L45** — "test acc 0.92136" / "a valid completed-run test metric": mislabeled; it is val accuracy on the selection split. Suggested: *"val acc 0.92136 (n=25k validation events — the same split used for early stopping and best-epoch selection; no held-out test set exists in the EXP1/EXP2/EXP3 lineage)"*. (Matches closing-check R1; my §1 adds the EXP8/TRK exception so the global sentence should say "in the EXP3 lineage", not "in this campaign".)
2. **`10_Papers-Thesis/Physics_Informed/main.tex:248`** — "Training uses an 80/20 train/validation split for the main tasks, and all reported accuracies refer to the held-out validation sets." **Accurate as written** — but incomplete: it does not disclose that the same split drives best-epoch selection and early stopping. Suggested addition: *"…held-out validation sets, which also serve for early stopping and best-epoch checkpoint selection; the resulting selection bias is bounded at under 2 percentage points (see Section X)."*
3. **`main.tex:255`** (Table `tab:classification-results` caption) — "best-epoch validation values" — accurate; consider appending *"(selection-set; see §methods)"* if the bound sentence lands.
4. **`main.tex:156,399,410,447,475`** — TRK/EXP8 "held-out test split" claims — **verified accurate**: those pipelines do record and evaluate `test_indices` (§1). No change needed.
5. **EXP1 openspec `02_training_config.md:237`** already flags the "held-out test set" misnomer for the V6 lineage — consistent with this report; no action.

---

<!-- SOURCE-BODY-END -->
