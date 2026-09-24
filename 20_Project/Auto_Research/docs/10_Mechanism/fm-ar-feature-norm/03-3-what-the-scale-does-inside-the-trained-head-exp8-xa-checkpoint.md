<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 3. What the scale does inside the trained head (EXP8 XA checkpoint, measured)

Weights extracted torch-free (zip+pickle) from `runs/EXP8-XA-Ideal-UnseenChannel/auditfix_d570d34_01/best_model.pth` (`classifier.classifier.0.weight` (128,68), `fusion.query_proj.weight` (64,4)):

**(a) The head did NOT learn to downweight physics.** Physics-column weight rms 0.058 vs attended-column rms 0.075 — same order. The network compensated for scale only partially in weights; the residual imbalance is absorbed by the input magnitudes.

**(b) Physics dominates hidden pre-activation.** At a typical seen event (phys ≈ [5,170,0,4]): pre-activation from physics alone spans **−28.0 to +13.3** (rms 10.3); learned bias rms is 0.081; attended contribution ~0.3–0.6 rms/unit. **108/128 hidden units have their ReLU sign fixed across the entire seen feature range** (lo=[0.1,130,−60,2.3] → hi=[150,210,70,7.5]) — i.e. ~84% of the hidden layer is effectively hard-wired on/off by the physics DC offset, leaving ~20 units of free capacity for event-varying signal. This is a concrete, measured mechanism for "redundancy-crowding" (H1b): the unnormalized features don't just add information, they *tile the ReLU pattern* and shrink the effective head width.

**(c) The query is a ~constant vector.** `query_proj(physics)` at typical features has |q| ≈ **383**, of which the Izz term alone contributes |W[:,1]·170| ≈ 386 (bias |b| = 2.9). Across the full seen feature range |q| varies 350→525, but the *direction* is dominated by the fixed Izz component. This explains `permuted_q = original` on all 6 checkpoints without invoking "content-free physics": permuting the batch preserves the Izz≈170 DC almost exactly (Izz varies only ±11%), so the query barely changes. It also explains `zero_q` hurting: zeroing removes the 386-norm DC, producing an out-of-distribution query direction. **The counterfactual battery's query results are consistent with a pure scale artifact** — the query never carried event-specific *directional* information because one feature's DC swamps the others.

**(d) OOD extrapolation is unbounded.** Nothing clips or normalizes the physics input; the head is linear in it. Carbon-scale features (or zeroed features) land outside the training range and push hidden activations ~4× (prior scout's measurement: max|h| 26.4 vs 12.9–16.6 seen). `zero_cls` collapse and the carbon→A leak are the same artifact at opposite ends of the range.

<!-- SOURCE-BODY-END -->
