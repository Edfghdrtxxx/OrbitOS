> Origin: `fm-ar-attn-sink` scout report; recorded 2026-09-24.

# fm-ar-attn-sink — What the EXP4 attention sink means now that the physics query is content-free

**Date:** 2026-09-24 · **Scope:** local artifacts only (live checkout `runs/`, `20_doc/`, `src/`, `scripts/`). No box-176 access, no GPU, no writes to the live checkout.

## TL;DR

1. **Token 50 is an edge-adjacent, near-always-empty 8×8-pad block — not the beam hole.** It covers image pads `y∈[64,72)`, `z∈[16,24)` (physical `y∈[87.9,117.2] mm`, `z∈[98.6,147.8] mm`). The beam hole is `z≥46, 28≤y≤51` — tokens 40–41 and 46–47. Token 50 is addressable in the analytic pad model but empirically off-track in ~98% of events (2.1% argmax-on-track overall vs 87% on token 50).
2. **A constant query does NOT mathematically force a fixed attention map** — the map is `softmax(q·k_i(x)/√d)` and keys `k_i(x)` are event-dependent. The observed fixed argmax therefore means the model *learned* a dominant sink key: token 50's logit wins for every query in the realistic-query cone. `permuted_q` Δ=0 on 6/6 checkpoints is exactly what this geometry predicts.
3. **The Bragg-focus claim survives only in weakened form.** On Raw, ~47% of attention mass lands on the Bragg region — but the physics query demonstrably does not steer it (permutation changes nothing). The honest claim is "the attention layer concentrates on the Bragg region, driven by image content alone" — i.e., the module is a **single-query attention-pooling head, not cross-modal fusion**. On HC the claim fails outright (f_Bragg ≤ 0.02, fixed sink).
4. **New caveat the lead should know:** the `permuted_q` test is *weak* on Raw — Raw physics features are near-constant (total_mass CV ≈ 3%), so permuting them barely moves the query. The strong evidence for query-content irrelevance comes from HC (CV ≈ 27%). On Raw the correct statement is "the query is *nearly constant by construction*," which yields the same conclusion (image-driven map) via a different mechanism.
5. **Cheapest CPU check for box 176:** dump per-event attention maps under `original` vs `permuted_q` on one checkpoint (~10 lines added to `exp4_attention_metrics.py`, ~5 min at the existing 2000-event/2 GB settings). This upgrades "accuracy-invariant" to "map-invariant" and simultaneously answers whether Raw's map is event-adaptive or a fixed spatial prior — the one measurement never recorded for Raw.

---

## 1. Where token 50 sits

Token indexing (`scripts/analysis/exp4_attention_metrics.py:222-235`, `src/models/cross_attention.py:151`): the ResNet layer-4 map `(B,512,10,6)` is flattened row-major, `token = y_tok*6 + z_tok`, each token = an 8×8-pad block of the `(80,48)` image (`TOKEN_STRIDE=8`).

- **Token 50 = (y_tok=8, z_tok=2)** → image pads `y∈[64,72)`, `z∈[16,24)`.
- Physical extent (`convert_trk_server_v2.py:150-161`, `Y_MIN=-146.5`, `W_PAD≈3.66 mm`, `H_ROW≈6.16 mm`): `y∈[87.9, 117.2] mm`, `z∈[98.6, 147.8] mm` — the +y edge of the pad plane, mid-z.
- **Not the beam hole.** The hole mask is `(z≥46) & (28≤y≤51)` (`convert_trk_server_v2.py:261-262`), i.e. tokens `(y_tok∈{3..6}, z_tok=5)` = tokens 23,29,35,41,47 and `(y_tok∈{3..6}, z_tok=4)` partially — nowhere near token 50.
- **Not padding in the image sense** — the analytic pad model covers the full 80×48 rectangle, so pads there *can* receive hits. But it is edge-adjacent (y_tok=8 of 0–9) and empirically almost never on a track: the EXP4 eval found only **2.1% of argmax tokens on the occupied track while 87% of argmaxes land on token 50** (`20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:135`). The audit figure `20_doc/audits/2026-09-23_raw-hc-examples.png` shows the same: at z 16–24 the HC tracks sit at y≲60; the y 64–72 block is black.
- **Verdict:** token 50 is a *low-information* patch, not a structurally dead one. Whether it is *systematically* emptier than other edge blocks is unmeasured — cheap check C below settles it.

## 2. Does a constant query + fixed keys force a fixed map? — the math

From `src/models/cross_attention.py:151-200`: `kv = kv_proj(tokens)` (single shared K=V projection), `q = query_proj(physics)`, then `nn.MultiheadAttention` computes per head `α_i = softmax_i(q_h·k_{i,h}/√16)` (64-dim, 4 heads → 16-dim per head), `attended = Σ_i α_i v_i`, plus `out_proj`.

- **Constant q alone does not fix the map.** `α` depends on `k_i(x)`, which varies with the image. A fixed map requires either constant keys or a **dominant logit**: `q·k_sink > q·k_i` for all `i` and all `q` in the realistic-query cone `Q = {W_q·p + b_q : p ∈ physics distribution}`. The argmax regions of `q ↦ softmax(q·k_i)` are convex polyhedral cones; `permuted_q` Δ=0 on 6/6 checkpoints says the entire realistic-query manifold sits inside one region (or close enough that downstream predictions never flip).
- **The sink is therefore learned, not architecturally forced.** Nothing in the module pins token 50 — no positional encoding exists at all (position enters only through conv features). The model discovered that token 50's features are near-constant (empty block ⇒ deterministic conv output ⇒ constant `k_50`, `v_50`) and trained `kv_proj`/`in_proj` so `k_50`'s logit dominates. This is the textbook softmax-sink mechanism: softmax must place mass somewhere; an always-available, content-free token is the cheapest place to dump it (Xiao et al. 2023; Miller's "softmax is off by one"; Gu et al. ICLR 2025 — sinks act as learned key-biases).
- **`zero_q` hurting is consistent, not contradictory.** `zero_q` feeds `physics=0` → `q = b_q` (the `query_proj` bias), a *specific point* in query space that can lie outside the dominant region → different fixed map → accuracy drop. The wild seed variance of `zero_q` (−5.8 to −57.1pp) vs `permuted_q` (≤0.05pp) is exactly "how far is `b_q` from the realistic-query cone" — a seed-dependent accident, not evidence of query-content use. The closing doc's phrase "the model needs *a* varying query" should be revised: the model needs a query **inside the trained cone**; variation per se is irrelevant.
- **Caveat on test power (new):** `permuted_q` only probes *within* the realistic-query manifold, and on **Raw that manifold is tiny** — Raw physics features are near-constant (total_mass CV ≈ 3%, |r| ≤ 0.038; `2026-09-23_exp3-xa-raw-cell.md:101`). Permuting near-constant features produces near-identical queries, so Raw's Δ=0 is a weak measurement. On **HC** (total_mass CV ≈ 27%, |r| up to 0.09) the permutation genuinely scrambles the query, and Δ=0 there is the strong result. Net: "query content-free" is proven on HC; on Raw the query is *nearly constant by construction* — same practical conclusion (the map is image-driven), different mechanism, worth one sentence of precision in the paper.

## 3. Does the Bragg-focus claim survive?

Partially — the spatial fact survives on Raw, the causal framing does not.

| Sub-claim | Status |
|---|---|
| "Attention mass concentrates on the Bragg region" | **True on Raw only** (f_Bragg 0.467/0.480 vs 0.20 null, p≈1e-11/1e-69). False on HC (≤0.02, all 3 seeds). |
| "The physics-informed query guides attention to the Bragg peak" | **Refuted on both representations.** On HC the query is ignored outright (fixed sink). On Raw the query is ~constant and permutation-invariant — the map is key(image)-driven. The physics features inform the classifier through the **direct concat path** (`model.py:374-377`), not through attention routing. |
| "Attention is event-adaptive on Raw" | **Unverified.** f_Bragg=0.47 is consistent with an event-adaptive map *and* with a fixed spatial prior whose tokens usually fall in the far-from-vertex region (the Bragg heuristic picks the far 20% of occupied pads; a fixed map concentrated at low-z/high-|y| tokens would score high whenever tracks range out that way). The argmax-dispersion and argmax-on-track stats were recorded for HC (87% token 50, 2.1% on-track) but **never for Raw** — `exp4_attention_metrics.py` does not persist per-event argmax at all (it only aggregates f_Bragg and attn–charge r; the 444/512 number came from an ad-hoc eval). |

**Verdict for the paper:** describe the maps as *image-driven attention pooling*, not physics-guided cross-attention:

> "The cross-attention branch allocates its mass over image tokens independently of the physics query: permuting the query across the batch changes no prediction on any checkpoint. On the Raw representation the resulting map concentrates on the Bragg region (f_Bragg ≈ 0.47 vs 0.20 null); on HC it collapses to a fixed low-information token (87% argmax on one edge token, f_Bragg ≤ 0.02) — a softmax attention sink. The physics features instead inform the classifier through the direct concatenation path."

This is *stronger* than the current draft wording ("the physics-feature query attends to the physically meaningful end of the track") because it survives the counterfactual evidence. It also reframes the architecture honestly: at 100k scale the learned module is a **single-query attention-pooling head with a parallel physics-feature concat** — the "cross-modal" part is vestigial in the attention branch. The `query_mode: "learned"` variant already in the code (`cross_attention.py:82-83`) is the natural control to make this explicit.

## 4. Literature grounding

- **Xiao et al. 2023, StreamingLLM (ICLR 2024):** softmax must dump mass somewhere; models converge on a fixed sink token regardless of content. Token 50 is the same phenomenon in a spatial CNN-token setting.
- **Darcet et al. 2024, "Vision Transformers Need Registers" (ICLR 2024):** ViTs develop high-norm outlier tokens in *low-information patches*; registers absorb the sink. Token 50 = a low-information edge block used as a de facto register — the fix they motivate (explicit register tokens) maps directly onto the already-implemented `query_mode: learned` / `attention_mode: din` variants.
- **Miller, "Attention Is Off By One" (2023):** softmax denominator forbids exact zero → forced mass. Explains why the sink exists at all.
- **Gu et al. (ICLR 2025):** sinks act as learned key-biases; non-normalized (sigmoid) attention eliminates them — the `attention_mode: din` flag is exactly this mitigation.
- **Sun et al. 2024, "Massive Activations"**: massive activations function as fixed bias terms — matches the "attended vector ≈ constant offset" reading on HC.
- **Conditional sinks** (Guo et al. 2024 active-dormant heads; Barbero et al. 2025 trigger heads; Ran-Milo 2026 necessity proof): prior work conditions on *input content*. The narrative draft's claimed novelty — conditioning on *query-modality informativeness* — **needs one revision**: on HC the query modality is informative yet attention still sinks, because the same features reach the classifier through the concat path. The accurate framing is "the sink is conditioned on the **redundancy of the attention branch given a parallel direct-feature path**" — attention sinks precisely when it has nothing unique to add. Still a distinct and reportable observation, but the draft sentence "conditioned on the informativeness of the query modality itself" is now wrong on its face.

## 5. Cheapest CPU checks for box 176 (ranked)

All fit the 2 GB / `--max-events 2000 --batch-size 64` envelope already proven for the battery; each is inference-only on existing checkpoints + HDF5 already on-box.

**Check A (the one to run first — ~5 min): map-level query invariance + Raw argmax dispersion.**
Patch `exp4_attention_metrics.py` to (a) also run each batch with `physics_query_override=physics[randperm]` and record `max|α_orig − α_perm|` and argmax-agreement, and (b) persist the per-event argmax token + argmax-on-track flag for *both* conditions. One pass over the same 2000-event val subset on `EXP3-XA-Raw-100k-seed42` and `EXP3-XA-HC-100k-seed42`.
- `max|Δα| ≈ 0` → the map itself is query-invariant (upgrades accuracy-invariance to map-invariance; closes the "predictions could still flip" gap).
- Raw argmax histogram: dispersed + on-track → event-adaptive claim confirmed; concentrated on a few fixed tokens → Raw is also a (track-prior-shaped) sink and the Bragg claim needs another downgrade.

**Check B (~2 min, no model): token-50 occupancy on HC.**
Over the same val subset, fraction of events where any of token 50's 64 pads is occupied (HC mask: `Ch0>thr OR Ch1>0`). ≈0% → "systematically empty block" confirmed → strengthens the register-token framing. Also gives the per-token occupancy map for free (is 50 special, or just the first empty edge token?).

**Check C (~5 min): EXP4 metrics on `EXP3-XA-Raw-100k-label-fix-seed42`.**
The checkpoint exists on-box; `exp4_attention_metrics.py` was never run on it (auto-EXP4 targeted XA-HC-lf, which doesn't exist). This is the only available attention measurement on the *true 4He task* — directly answers whether Bragg-focus/sink behavior is task-linked or architectural. The pre-registered XA-HC-lf rerun (`EXP4_attention_collapse_finding.md` §5) remains blocked: that checkpoint was never trained.

**Check D (optional, ~1 min once maps are dumped): sink-logit margin.**
From the same forward pass, record `q·k_50 − max_{i≠50} q·k_i` per event. Uniformly positive margin ≫ query-induced spread → direct confirmation of the dominant-sink geometry in §2.

## 6. Data hygiene flags for the lead

- **`runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery.json` on the live checkout is the VOID buggy run** (original 0.7005, zero_q +9.2pp — the retracted label-misalignment numbers). The corrected run (original 0.9275, zero_q 0.8065) exists only in the closing doc §11 text. Re-sync or delete the stale JSON before anyone quotes it. Consequently, `permuted_q` on the true 4He task is **unmeasured** — include it in the corrected battery re-run.
- The local battery JSONs predate D5 (`permuted_cls`, `mean_cls`, `pred_histograms` absent) — the zero_cls OOD-artifact question is still open on all synced artifacts.
- `exp4_attention_metrics.py` persists no per-event argmax — every argmax claim in the docs traces to ad-hoc evals; Check A makes them reproducible artifacts.

## 7. Open questions (need lead/box resources)

1. Is token 50 systematically the emptiest edge block on HC, or an arbitrary winner among several? (Check B.)
2. Is Raw's attention map event-adaptive or a fixed prior? (Check A.)
3. Does the sink/Bragg pattern hold on the true 4He task? (Check C; XA-HC-lf checkpoint does not exist — the pre-registered HC rerun needs a training run, not a diagnostic.)
4. Corrected label-fix battery: does `permuted_q` Δ=0 hold on 4He? (Re-run with fixed script.)

## Appendix — evidence index

| Claim | Source |
|---|---|
| Token grid/mapping | `scripts/analysis/exp4_attention_metrics.py:41-57,222-235`; `src/models/cross_attention.py:151` |
| Beam-hole mask | `scripts/preprocessing/convert_trk_server_v2.py:261-262` |
| Pad geometry (mm) | `scripts/preprocessing/convert_trk_server_v2.py:150-161` |
| Sink stats (87%, 444/512, 2.1%, max-wt 0.52) | `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:135`; `20_doc/EXP4_attention_collapse_finding.md:23-27` |
| f_Bragg values | `runs/EXP3-XA-*/​*/exp4_attention_metrics.json` (4 files, live checkout) |
| Battery numbers | `runs/EXP3-*/​*/counterfactual_battery.json` (6 files); `20_doc/EXP3_closing_analysis_2026-09-24.md` §9, §11-12 |
| Query/override wiring | `src/models/model.py:354-377`; `src/models/cross_attention.py:156-200`; `scripts/analysis/exp3_counterfactual_battery.py:117-131` |
| Physics-feature informativeness (CV, \|r\|) | `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:101`; `20_doc/EXP4_attention_collapse_finding.md:33-34` |
| Raw Ch1 occupancy ~51% | `20_doc/audits/2026-09-23_raw-hc-input-audit.json` (`occupancy_ch1` mean ≈1978/3840) |
| Track vs token-50 geometry | `20_doc/audits/2026-09-23_raw-hc-examples.png` (viewed) |
| Literature | cited from knowledge — `web_search` was auth-blocked this session; verify page numbers/venues before quoting in the manuscript |
