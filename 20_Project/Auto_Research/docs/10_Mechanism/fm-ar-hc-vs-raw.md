> Origin: `fm-ar-hc-vs-raw` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# EXP3 mechanism scout: why HC beats Raw, and why classifier-side physics is redundant on HC but load-bearing on Raw

**Date:** 2026-09-24 · **Worker:** fm-ar-hc-vs-raw (scout, read-only on live checkout `/Users/Reid Hu/MATE-Automation`) · **Deliverable:** mechanism verdict + paper-ready sentence + cheapest discriminating CPU check for box 176.

**Headline verdict:** the HC−Raw gap is an **input-denoising effect, not a feature effect**. The ResNet arm (`fusion_type: none`, physics features accepted but ignored — `src/models/model.py:199-202`) gains +6.5pp on HC with zero physics exposure, so the entire representation gap lives in the image. What HC does to the image is exactly one thing that matters: **DBSCAN largest-cluster filtering removes ~94% of pads (1,956→113 of 3,840), converting a noise-dominated Ch0 (track charge below the σ≈0.028 noise floor) into a sparse track-shaped image.** The classifier-side asymmetry follows from the same fact: physics features are computed **from Ch0 itself**, so on HC they are redundant with what the backbone already sees, while on Raw they are the head's only global charge statistic — and zeroing them is also a large out-of-distribution shift (zero_cls lands *below* the majority baseline), so "load-bearing" is still ambiguous between information-dependence and OOD artifact until D5 lands.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[10_Mechanism/fm-ar-hc-vs-raw/01-1-what-hc-does-to-the-event-vs-raw-code-trace|1. What HC does to the event vs Raw — code trace]]
- [[10_Mechanism/fm-ar-hc-vs-raw/02-2-what-the-input-audit-measured-20doc-audits-2026-09-23raw-hc-in|2. What the input audit measured (`20_doc/audits/2026-09-23_raw-hc-input-audit.json`, 20k events/file × 5 files, paired)]]
- [[10_Mechanism/fm-ar-hc-vs-raw/03-3-candidate-mechanisms-evidence-for-against|3. Candidate mechanisms — evidence for/against]]
- [[10_Mechanism/fm-ar-hc-vs-raw/04-4-mechanism-verdict|4. Mechanism verdict]]
- [[10_Mechanism/fm-ar-hc-vs-raw/05-5-paper-ready-sentence|5. Paper-ready sentence]]
- [[10_Mechanism/fm-ar-hc-vs-raw/06-6-cheapest-discriminating-cpu-check-on-box-176|6. Cheapest discriminating CPU check on box 176]]
- [[10_Mechanism/fm-ar-hc-vs-raw/07-7-commands-evidence-index|7. Commands / evidence index]]
- [[10_Mechanism/fm-ar-hc-vs-raw/08-8-open-questions-for-the-lead-non-blocking|8. Open questions for the lead (non-blocking)]]

<!-- ORIGINAL-BODY-SHA256: 48c3eb0d8256a1e82d25359c842491d3302f4323a4a5e759280a8db219eb9be0 -->
<!-- ORIGINAL-BODY-BYTES: 14296 -->
