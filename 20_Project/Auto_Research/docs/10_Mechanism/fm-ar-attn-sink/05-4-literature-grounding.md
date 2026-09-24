<!-- Verbatim source section; overview: [[../fm-ar-attn-sink]] -->
<!-- SOURCE-BODY-START -->
## 4. Literature grounding

- **Xiao et al. 2023, StreamingLLM (ICLR 2024):** softmax must dump mass somewhere; models converge on a fixed sink token regardless of content. Token 50 is the same phenomenon in a spatial CNN-token setting.
- **Darcet et al. 2024, "Vision Transformers Need Registers" (ICLR 2024):** ViTs develop high-norm outlier tokens in *low-information patches*; registers absorb the sink. Token 50 = a low-information edge block used as a de facto register — the fix they motivate (explicit register tokens) maps directly onto the already-implemented `query_mode: learned` / `attention_mode: din` variants.
- **Miller, "Attention Is Off By One" (2023):** softmax denominator forbids exact zero → forced mass. Explains why the sink exists at all.
- **Gu et al. (ICLR 2025):** sinks act as learned key-biases; non-normalized (sigmoid) attention eliminates them — the `attention_mode: din` flag is exactly this mitigation.
- **Sun et al. 2024, "Massive Activations"**: massive activations function as fixed bias terms — matches the "attended vector ≈ constant offset" reading on HC.
- **Conditional sinks** (Guo et al. 2024 active-dormant heads; Barbero et al. 2025 trigger heads; Ran-Milo 2026 necessity proof): prior work conditions on *input content*. The narrative draft's claimed novelty — conditioning on *query-modality informativeness* — **needs one revision**: on HC the query modality is informative yet attention still sinks, because the same features reach the classifier through the concat path. The accurate framing is "the sink is conditioned on the **redundancy of the attention branch given a parallel direct-feature path**" — attention sinks precisely when it has nothing unique to add. Still a distinct and reportable observation, but the draft sentence "conditioned on the informativeness of the query modality itself" is now wrong on its face.

<!-- SOURCE-BODY-END -->
