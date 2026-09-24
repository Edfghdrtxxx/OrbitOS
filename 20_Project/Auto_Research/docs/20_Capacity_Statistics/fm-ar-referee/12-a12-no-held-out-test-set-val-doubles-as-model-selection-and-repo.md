<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A12. No held-out test set — val doubles as model-selection and reporting set
- **Hits:** every accuracy number.
- **Why it bites:** the split is 80/20 train/val (`data_split.json`: `test_size: 0.2`, `stratify: true` — there is no third split). Best-epoch checkpoint selection, early stopping (patience on val_loss), and all reported metrics use the *same* 25k events. With best-val selection over ~20–38 epochs the optimistic bias is small (~0.1–0.3pp typical) but nonzero, and a referee can note the paper's tightest claims (HC Δ = −0.08pp mean) are smaller than the plausible selection bias.
- **Already answered?** No — undisclosed anywhere.
- **Cheapest check:** **CPU, ~1–2h on box 176** — re-evaluate each best checkpoint on a held-out *subset of the train split* (e.g. 5k train events never used for selection) to bound the selection bias; or disclose "metrics are val-set, selection bias ≤ best-val minus final-epoch gap" (measurable from history.json for free: XA-Raw s42 best 0.8710 vs final 0.8596 — the selection premium is visible). For the paired Δ claims the bias is arm-symmetric and largely cancels — worth one sentence.

### Attacks considered and ranked out (honorable mentions)
- **EXP8 carbon-leak as counter-evidence** (physics features *hurt* OOD): already a documented finding (fm-ar-ood-leakage); strengthens rather than attacks the mechanism story. E2 clipped-physics eval is queued.
- **Train/val leakage via paired Raw/HC events:** Raw[i] and HC[i] are the same physical event, but splits are within-representation so no cross-contamination; same-seed val_indices are byte-identical across arms — this is a *feature* (enables pairing), not a leak.
- **n=2000 battery vs 25k metrics mismatch:** folded into A4.
- **p–t difficulty outlier** (Z²A ordering): folded into the difficulty report's open questions; C6 energy-confound check queued — secondary to the 12 above.

---

# PART B — Seed-robust evidence from on-disk artifacts

<!-- SOURCE-BODY-END -->
