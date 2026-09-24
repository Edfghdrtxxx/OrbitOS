<!-- Verbatim source section; overview: [[../fm-ar-difficulty]] -->
<!-- SOURCE-BODY-START -->
## 4. EXP8 pair table (both arms)

Symmetrized confusion = mean of directional rates. `i→j`/`j→i` are the directional components (i→j = isotope i misrouted into j's class).

| pair | relZ²A | \|Δ(A/Z)\| | XA conf | XA i→j | XA j→i | RN conf | RN i→j | RN j→i |
|---|---|---|---|---|---|---|---|---|
| p–d | 1.00 | 1.00 | 0.0404 | .0470 | .0337 | 0.0414 | .0477 | .0350 |
| p–t | 2.00 | 2.00 | 0.0254 | .0291* | .0218 | 0.0266 | .0289* | .0242 |
| p–³He | 11.00 | 0.50 | 0.0245 | .0291* | .0198 | 0.0252 | .0289* | .0214 |
| p–⁴He | 15.00 | 1.00 | 0.0240 | .0291* | .0126 | 0.0252 | .0289* | .0143 |
| p–¹²C | 431 | 1.00 | 0.0547 | .0291* | .0803 | 0.0223 | .0289* | .0158 |
| p–¹³C | 467 | 1.17 | 0.0560 | .0291* | .0828 | 0.0219 | .0289* | .0148 |
| p–¹⁴C | 503 | 1.33 | 0.0569 | .0291* | .0847 | 0.0214 | .0289* | .0139 |
| d–t | 0.50 | 1.00 | **0.0586** | .0571* | .0600 | **0.0569** | .0539* | .0599 |
| d–³He | 5.00 | 0.50 | 0.0452 | .0571* | .0332 | 0.0429 | .0539* | .0318 |
| d–⁴He | 7.00 | **0.00** | 0.0475 | .0571* | .0379 | 0.0448 | .0539* | .0358 |
| d–¹²C | 215 | **0.00** | 0.0421 | .0571* | .0270 | 0.0392 | .0539* | .0245 |
| d–¹³C | 233 | 0.17 | 0.0419 | .0571* | .0267 | 0.0384 | .0539* | .0245 |
| d–¹⁴C | 251 | 0.33 | 0.0408 | .0571* | .0246 | 0.0377 | .0539* | .0216 |

`*` = upper bound (route into the lumped "other" bucket). Unseen-channel rows (⁴He, carbons) measure OOD false-target rate, not trained-boundary difficulty.

**Rank correlations, seen pairs only (n=6: p–d, p–t, p–³He, d–t, d–³He + t–³He unresolvable → effectively 5 measurable cross-class seen pairs; the 6th, t–³He, is same-class):**

| predictor | XA ρ | RN ρ |
|---|---|---|
| relZ²A | **−0.70** (p=0.19) | **−0.70** (p=0.19) |
| \|Δ(A/Z)\| | +0.05 (p=0.93) | +0.05 (p=0.93) |

Sign is negative = larger separation → less confusion, as the anchor predicts. n=5–6 so p-values are weak, but the ordering is monotone-clean: d–t (smallest relZ²A=0.5) is the hardest seen pair in both arms; p–³He/p–⁴He (relZ²A 11–15) are the easiest despite tiny Δ(A/Z) (0.5–1.0 vs d–t's 1.0).

**All 13 cross-class pairs (incl. unseen):** XA ρ=+0.26 (relZ²A) — sign flips because XA misroutes unseen carbons to p at ~8% (huge separation, high "confusion" = OOD leakage, not boundary difficulty). RN ρ=−0.76 (p=0.002). Interpretation: for the physics-informed arm, Z²A separation does **not** predict OOD false-target rate — the XA arm leaks far-OOD carbon events into the p class ~4–5× more than ResNet (8.0–8.5% vs 1.4–1.6%). This is a genuine arm difference worth the lead's attention: physics features make the model *more* willing to call an unseen heavy ion a proton.

**Same-class pairs — TV distance between predicted-class distributions (n=15 pairs):**

| predictor | XA ρ | RN ρ |
|---|---|---|
| relZ²A | **+0.72** (p=0.003) | **+0.74** (p=0.002) |
| \|Δ(A/Z)\| | +0.06 (p=0.84) | +0.62 (p=0.014) |

Strongest single result: within the "other" bucket, how differently the model treats two isotopes tracks relZ²A almost monotonically on the XA arm (³He–⁴He TV=0.0045 at relZ²A=0.33; t–¹²C TV=0.058 at relZ²A=143), while Δ(A/Z) has *zero* correlation on XA. On RN both correlate (A/Z and Z²A are entangled for these pairs), but Z²A is still stronger.

**Same-element isotope check (the anchor's ΔA/A special case):** ¹²C/¹³C/¹⁴C pairwise TV distances are 0.002–0.005 and their XA false-target rates are 10.9%/10.9%/10.7% — statistically indistinguishable, consistent with ΔA/A ≈ 8–17% being below the model's resolution. The anchor's same-element claim is *consistent* with data but only weakly tested (these are unseen OOD channels).

<!-- SOURCE-BODY-END -->
