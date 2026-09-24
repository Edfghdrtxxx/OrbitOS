<!-- Verbatim source section; overview: [[../fm-ar-claims-ledger]] -->
<!-- SOURCE-BODY-START -->
## 4. Claims the manuscript does NOT make but the evidence now supports

Ordered by value to the paper. All are scout-verified findings with no current manuscript home.

1. **The physics query carries no event-specific signal** — `permuted_q` Δ=0 on 6/6 checkpoints (both representations, both tasks; fm-ar-referee C5). Caveats: on Raw the query is ~constant by construction (Izz≈170 DC; weak test there — strong evidence is HC + corrected 4He); n=2000 bounds effects at <~0.2% of predictions. This is the campaign's most seed-robust mechanism fact and directly sharpens the L313/L319 attention framing.
2. **On HC the attention collapses to a fixed sink token** (87% argmax on token 50, an edge-adjacent near-empty block — not the beam hole; f_Bragg ≤0.02, 3/3 seeds; fm-ar-attn-sink). The honest architecture description: **single-query attention pooling + parallel physics concat** — the cross-modal routing is vestigial in the attention branch at this scale.
3. **Unnormalized physics is an unbounded linear side-channel** — measured: Izz≈170 fixes 108/128 hidden ReLU signs; carbon OOD events inflate hidden activations ~4×; the leak direction is 58% inside the physics weight-column span (fm-ar-feature-norm §3, fm-ar-ood-leakage §6). This unifies the EXP8 carbon leak, the `zero_cls` collapse, and the `permuted_q` invariance under one mechanism — and it is the same fact that makes L170/L207's "standardized" claim wrong.
4. **The HC−Raw gap is image-side denoising, proven by the physics-free arm** — ResNet (no physics exposure) gains +6.5 pp on HC; DBSCAN removes ~94% of pads (1,956→113/3,840); Raw Ch0 track is below the σ≈0.028 noise floor while Ch1 retains the track (+35% at HC pads) (fm-ar-hc-vs-raw). The manuscript's "+1.5/+2.3 pp HC gains" (L298) currently lacks this mechanism.
5. **A true-4He result exists:** XA-Raw label-fix s42 = 0.92136 val acc, α-recall 0.7254 (verified on disk today). Single-seed, no comparator — but it is the only EXP3 number legally quotable as 4He.
6. **Z²A ordering validated on data** (fm-ar-difficulty): seen-pair confusion orders by relZ²A (ρ=−0.70) not Δ(A/Z) (+0.05); same-class TV distance ρ≈+0.72-0.74 — the physics prior structures the latent space, not just the boundary. Supports Table 1's framing with real evidence.
7. **Penultimate activation magnitude detects OOD where softmax fails** — max|h| AUROC ≈0.90 on both arms vs confidence-based detection at/below chance (fm-ar-ood-leakage §5b). A concrete, citable (ReAct-family) fix direction for the §5.7 leak.
8. **The Raw deficit survives balanced accuracy** (−2.7/−4.6 pp; fm-ar-referee §B.4) — it is not purely a threshold artifact, though a joint threshold sweep is still unrun (and the sweep script has a verdict-logic bug, code-audit §2).
9. **EXP8's seen-channel parity is a real result worth stating plainly:** on seen channels the two arms are statistically identical (Δ ≤0.3 pp per channel) — the arms differ *only* on far-OOD inputs. The manuscript reports this but does not draw the conclusion: the physics pathway's cost is exclusively extrapolative.
10. **Kuchera transfer context** (fm-ar-transfer): the only public AT-TPC dataset saturates CNNs (our ResNet18 val 1.0000; published CNN 1.00); honest traditional-baseline anchor on it is flattened-pixel LR 0.9215, not the moments-LR 0.70. Relevant if the paper cites Kuchera as the nearest prior method (L76 already does).

---

<!-- SOURCE-BODY-END -->
