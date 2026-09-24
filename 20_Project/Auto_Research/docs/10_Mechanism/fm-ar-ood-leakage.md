> Origin: `fm-ar-ood-leakage` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# Scout report: why the XA arm leaks unseen carbons into the proton class (EXP8)

**Question (firstmate spec):** why does the cross-attention (physics-informed) arm leak unseen carbon isotopes into the proton class at ~8% on EXP8 while the ResNet arm leaks ~1.5%? Quantify leakage per isotope/arm, confidence/entropy of leaked vs correct events, clustering in stored features, rejection-rule AUROC, connect to the `zero_cls` collapse, cite OOD literature, deliver a verdict + paper paragraph + cheapest confirming experiment.

**Verdict (short):** The leak is an **out-of-distribution magnitude artifact in the classifier-side raw physics input**, not image-space confusion and not attention routing. The XA head consumes the 4 unnormalized physics features (`[Iyy, Izz, Iyz, total_mass]`) concatenated onto the 64-d attended vector (`cat → Linear(68→128) → ReLU → Linear(128→3)`; `src/models/model.py:32`, `src/models/classifier.py:6`). Carbon events push hidden activations to ~4× the seen range (per-event max |h| median 26.4, p99 63.5 vs 12.9–16.6 for seen classes — measured on the cached penultimate dump), and the leaked sub-population's excess hidden direction lies 58% inside the span of the four physics weight columns, aligned +Iyy/−Izz. The same events are correctly rejected by ResNet (90.3–90.9% → other; their RN p_A is *lower* than the channel median), so the images are not proton-like — the physics pathway manufactures the leak. This is the inference-time twin of the `zero_cls` collapse: the head leans on raw physics magnitudes, and any input far outside the training range (zeroed, or carbon-scale) produces a confident, wrong, fixed-direction answer. Confidence/entropy/rejection-score cannot separate the leaks (AUROC ≤ 0.18 within channel; OOD AUROC ≈ 0.47–0.51 for carbons on XA, **inverted** 0.29–0.30 on RN); a hidden-activation-norm score reaches AUROC ≈ 0.90.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[10_Mechanism/fm-ar-ood-leakage/01-1-data-used-all-read-only-under-users-reid-hu-mate-automation-ru|1. Data used (all read-only under `/Users/Reid Hu/MATE-Automation/runs`)]]
- [[10_Mechanism/fm-ar-ood-leakage/02-2-leakage-per-unseen-isotope-per-arm|2. Leakage per unseen isotope, per arm]]
- [[10_Mechanism/fm-ar-ood-leakage/03-3-confidence-and-entropy-leaked-vs-correctly-routed-same-channel|3. Confidence and entropy: leaked vs correctly-routed (same channel)]]
- [[10_Mechanism/fm-ar-ood-leakage/04-4-cross-arm-event-level-test-the-decisive-table|4. Cross-arm event-level test (the decisive table)]]
- [[10_Mechanism/fm-ar-ood-leakage/05-5-rejection-rules-auroc-per-arm|5. Rejection rules: AUROC per arm]]
- [[10_Mechanism/fm-ar-ood-leakage/06-6-mechanism-where-the-leak-is-manufactured|6. Mechanism: where the leak is manufactured]]
- [[10_Mechanism/fm-ar-ood-leakage/07-7-paper-ready-framing-paragraph|7. Paper-ready framing paragraph]]
- [[10_Mechanism/fm-ar-ood-leakage/08-8-cheapest-box-side-experiment-to-confirm-ranked|8. Cheapest box-side experiment to confirm (ranked)]]
- [[10_Mechanism/fm-ar-ood-leakage/09-9-ood-literature-to-cite|9. OOD literature to cite]]
- [[10_Mechanism/fm-ar-ood-leakage/10-10-open-questions-for-the-lead-not-blocking|10. Open questions for the lead (not blocking)]]
- [[10_Mechanism/fm-ar-ood-leakage/11-11-reproduction|11. Reproduction]]

<!-- ORIGINAL-BODY-SHA256: 7f997709ccd1b98c5833388c1961b8fc1a7250185653bb7da76c3af39d8d1bdb -->
<!-- ORIGINAL-BODY-BYTES: 20094 -->
