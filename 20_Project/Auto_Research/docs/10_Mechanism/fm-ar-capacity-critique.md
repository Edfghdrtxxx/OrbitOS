> Origin: `fm-ar-capacity-critique` scout report; recorded 2026-09-24.

# EXP3 Campaign Analysis: Critique of Pre-registered Decision Table

This report evaluates the pre-registered decision table for separating capacity (H1a) from redundancy-crowding (H1b), identifies critical ambiguities (specifically regarding the `zero_cls` collapse), and proposes an amended diagnostic suite.

## 1. Analysis of D1-D4: Licensing and Limits

The pre-registered table assumes the classifier head's reliance on physics features is driven by *information content*. However, because the XA classifier is an MLP (`Linear(68, 128) -> ReLU -> ...`), zeroing features at inference time causes massive covariate shift. 

* **D1 (Linear probe on 68-dim frozen features vs RN GAP)**
  * **Licenses:** If `probe_XA << probe_RN`, it cleanly isolates H1a (capacity): the 64+4 representation inherently lacks the linearly separable information present in the 512-dim RN GAP. If `probe_XA ≈ probe_RN`, it licenses that the representation *has* the capacity, but the trained MLP head failed to utilize it well.
  * **Does not license:** If `probe_XA ≈ probe_RN`, it does not definitively confirm H1b (redundancy-crowding). The MLP might simply suffer from optimization instability on this specific representation, whereas a strongly regularized linear probe finds the optimal weights.
* **D2 (Physics-only linear probe)**
  * **Licenses:** If accuracy is high, it confirms the physics features are predictive enough to *enable* shortcut learning (H1b). 
  * **Does not license:** If accuracy is chance, it does *not* mean the MLP ignores physics. The MLP could use them conditionally to gate/scale the attended vector, or simply as a learned bias.
* **D3 (Attended-only linear probe)**
  * **Licenses:** If `probe_attn ≈ probe_RN`, it isolates the failure to the concatenation step and the MLP head. If `probe_attn << probe_RN`, it confirms the attention mechanism failed to extract the right image features.
  * **Does not license:** Cannot explain *why* the head failed (needs D1).
* **D4 (Per-class error overlap)**
  * **Licenses:** Strongly supports crowding if errors concentrate on events where the physics heuristic misleads.
  * **Does not license:** Ruling out capacity (models can be capacity-constrained *and* over-reliant on heuristics).

**The Ambiguous Combination:**
If `D1 ≈ RN` (68-dim is good), `D2 ≈ chance` (physics alone is useless), and `D3 ≈ RN` (64-dim is good), but the full model performs poorly and collapses when `zero_cls` is applied. The current table has no answer for this. It assumes `zero_cls` collapse means physics is "load-bearing" for information, but D2 says they have no information. 

## 2. The Critical Alternative Explanation: OOD Bias Shift

The analysis in Section 8 interprets the `zero_cls` drop to 0.1935 as proof that the 4 physics features are "load-bearing" for classification (H1b). **This interpretation is highly likely flawed.**

**The Artifact:** In the triton-vs-rest task, triton (class 0) is the minority class. Its prevalence in the dataset is approximately 19-20%. When an MLP learns large weights for the physics features, setting those features to exactly zero (`zero_cls`) drastically shifts the pre-activations of the hidden layer. This out-of-distribution (OOD) bias shift pushes the network to confidently predict a single class unconditionally. The fact that the accuracy drops to exactly **0.1935** (and 0.2075 on the 4He task) strongly suggests the model is simply predicting the minority class 100% of the time. 

**Cheapest CPU Diagnostic:** `permuted_cls` (shuffle the 4 physics features across the batch before concatenation) or `mean_cls` (replace with batch means). 
* If `permuted_cls` recovers accuracy to near 0.87, the physics features contain *no event-specific signal* for the head; their role is purely a learned static bias/scaling factor, and the `zero_cls` collapse was just an OOD artifact. 
* If `permuted_cls` also collapses to ~0.19, then the network genuinely relies on the event-specific correlation between the physics features and the target (true H1b crowding).

## 3. Explicit Interpretation of `zero_q` Sign Flip and `s0` Anomaly

**The `zero_q` Sign Flip (-6.5pp on converged triton vs +9.2pp on undertrained 4He):**
Because `permuted_q` has zero effect, the physics query carries no event-specific signal. It acts as a static, learned "where to look" prior (effectively `mean(query_proj(physics))`). 
* For the **converged** triton model, the keys and values have adapted perfectly to this specific static prior. Zeroing the query shifts this prior to `query_proj(0)`. This OOD shift breaks the learned attention mapping, hurting performance (-6.5pp).
* For the **undertrained** 4He model, the key-value representations haven't fully committed to the noisy `query_proj(physics)` prior. Zeroing it provides a simpler, more stable constant query, which actually helps early routing (+9.2pp).

**The `XA-Raw s0` Anomaly (`zero_both` 0.772 > `zero_cls` 0.41):**
This is a textbook symptom of breaking expected covariance between two highly correlated, redundant inputs. The MLP head receives `[attention_out, physics]`. Because `attention_out` is driven by a query projected from the *same* `physics` features, the two halves of the concatenated vector covary. 
Seed 0 learned a delicate balance where the activations from the attention output and the direct physics inputs complement or cancel each other. 
* Zeroing *only* the classifier physics (`zero_cls`) breaks this covariance: the attention output is now completely miscalibrated relative to the missing physics input, causing a severe OOD collapse (0.41).
* Zeroing *both* (`zero_both`) shifts the attention output as well. This simultaneous shift happens to land the concatenated vector closer to a valid (or less catastrophic) regime for the MLP, partially restoring performance (0.772).

## 4. Proposed Amended Decision Table

Add **D5** to cleanly separate "learned bias dependence" from "information dependence".

| # | Diagnostic | Method | Interpretation |
|---|---|---|---|
| **D1** | Linear probe on 68-dim | LogReg on 68-dim head input vs RN GAP | probe_XA ≪ RN → **H1a** (upstream capacity bottleneck). probe_XA ≈ RN → Head optimization failure / Crowding. |
| **D2** | Physics-only probe | LogReg on 4 raw physics features | Acc high → Physics highly predictive; **H1b** mechanism viable. |
| **D3** | Attended-only probe | LogReg on 64-dim attended vector | probe_attn ≪ RN → Attention failed to extract image features. |
| **D4** | Per-class error overlap | Same-subset confusion vs RN | Errors match physics heuristics → **H1b** (Crowding). |
| **D5** | **Permuted classifier physics** | Evaluate with `permuted_cls` | `permuted_cls` ≈ original → `zero_cls` collapse was an OOD bias artifact; physics just a static scale. `permuted_cls` ≪ original → Head genuinely relies on event-specific physics info (**H1b**). |

## 5. Prior Literature and Framing

* **Feature Suppression / Shortcut Learning:** Neural networks often latch onto low-dimensional, simple features (like our 4-dim physics vector) and ignore complex, high-dimensional features (the 64-dim attended vector) even if the complex features are more robust. 
  * *Citation:* Geirhos et al. (2020), "Shortcut learning in deep neural networks", *Nature Machine Intelligence*.
* **Modality Starvation (Redundant Auxiliary Inputs):** In late-fusion architectures, an "easy" modality converges quickly and starves the gradient of the "harder" modality, capping total capacity.
  * *Citation:* Wang et al. (2020), "What Makes Training Multi-Modal Classification Networks Hard?", *CVPR*.
* **Attention with Constant / Latent Queries:** Using static, learned vectors as queries (ignoring input variance) is an established architectural choice. 
  * *Citation:* Jaegle et al. (2021), "Perceiver: General Perception with Iterative Attention", *ICML*; Carion et al. (2020), "End-to-End Object Detection with Transformers" (DETR). 
  * *Our Diagnostic Framing:* We are using `permuted_q` as a novel *diagnostic tool* to empirically prove that an architecture designed to be conditionally routed has degenerated into a static-query regime (query collapse).
