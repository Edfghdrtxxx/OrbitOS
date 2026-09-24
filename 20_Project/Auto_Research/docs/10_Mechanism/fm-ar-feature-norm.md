> Origin: `fm-ar-feature-norm` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# Scout report: physics-feature scaling into the XA query and classifier head (EXP3/EXP8)

**Question (firstmate spec):** how are the physics features (`[Iyy, Izz, Iyz, total_mass]`) scaled on their way into the cross-attention query and the classifier head in the EXP3/EXP8 training/eval code, and could their scale explain the XA-Raw deficit and the OOD leak?

**Verdict (short):** The features are **completely unnormalized** — raw float32 straight from HDF5 into both `query_proj` and the classifier concat, by deliberate spec (Req-7.2). The dominant pathology is not just "unbounded" but **scale asymmetry inside the 4-vector**: `Izz` sits at ~130–245 (median ~170) while `Iyy`/`Iyz`/`M` sit at ~0–150/~±130/~2–8. On the EXP8 XA checkpoint, `Izz` alone contributes a ~386-norm DC component to the 64-d query (vs |bias|=2.9) and a ±28-unit DC offset to the 128-d hidden pre-activation (vs learned-bias rms 0.08), fixing the sign of **108/128 hidden units** across the entire seen feature range. Scale is therefore a *plausible and quantified* contributor to the XA-Raw deficit — it acts as a fixed capacity-reducing bias plus a variance-dominating side-channel — but it is a diagnostic hypothesis, not yet a confirmed mechanism; the cheapest discriminator is a `mean_cls`/`scaled_cls`/`clipped_cls` extension of the existing counterfactual battery (zero retraining, minutes of CPU). For the OOD leak, scale is almost certainly *the* mechanism: the head is a linear extrapolator on an unbounded input, and far-OOD feature magnitudes leave the training range.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[10_Mechanism/fm-ar-feature-norm/01-1-exact-code-path-file-line-worktree-head|1. Exact code path (file:line, worktree HEAD)]]
- [[10_Mechanism/fm-ar-feature-norm/02-2-feature-scale-table-measured|2. Feature scale table (measured)]]
- [[10_Mechanism/fm-ar-feature-norm/03-3-what-the-scale-does-inside-the-trained-head-exp8-xa-checkpoint|3. What the scale does inside the trained head (EXP8 XA checkpoint, measured)]]
- [[10_Mechanism/fm-ar-feature-norm/04-4-asymmetry-worth-flagging-z01-baseline-does-standardize|4. Asymmetry worth flagging: Z01 baseline DOES standardize]]
- [[10_Mechanism/fm-ar-feature-norm/05-5-manuscript-discrepancy-for-the-lead-captain-owns-10papers-thes|5. Manuscript discrepancy (for the lead; captain owns `10_Papers-Thesis/`)]]
- [[10_Mechanism/fm-ar-feature-norm/06-6-verdict-is-scale-a-plausible-contributor-to-the-xa-raw-deficit|6. Verdict: is scale a plausible contributor to the XA-Raw deficit?]]
- [[10_Mechanism/fm-ar-feature-norm/07-7-cheapest-cpu-diagnostics-for-box-176-ranked-all-inference-only|7. Cheapest CPU diagnostics for box 176 (ranked, all inference-only, no retraining)]]
- [[10_Mechanism/fm-ar-feature-norm/08-8-open-questions-for-the-lead-not-blocking|8. Open questions for the lead (not blocking)]]
- [[10_Mechanism/fm-ar-feature-norm/09-9-reproduction|9. Reproduction]]

<!-- ORIGINAL-BODY-SHA256: 79425bf77e3b4902ccfdb38f501a0946605406a1b81f8558c2f3426017de3964 -->
<!-- ORIGINAL-BODY-BYTES: 18795 -->
