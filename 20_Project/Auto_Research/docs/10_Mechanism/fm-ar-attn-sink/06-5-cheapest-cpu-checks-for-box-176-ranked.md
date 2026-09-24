<!-- Verbatim source section; overview: [[../fm-ar-attn-sink]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
