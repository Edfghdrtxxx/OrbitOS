<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 6. Cheapest discriminating CPU check on box 176

The top two mechanisms for the *representation* gap are already separated by the ResNet arm (image-side proven). The live ambiguity is **within** image-side: does Raw fail because Ch0 noise is actively harmful, or because only Ch1 carries signal? And for the classifier asymmetry: information-dependence vs OOD artifact (D5, already queued).

**Recommended: channel-ablation inference battery on existing checkpoints** — same harness as `exp3_counterfactual_battery.py`, one new override that zeroes an image channel instead of physics. ~10 lines of new code, runs on-box CPU under the 2 GB cap at `--max-events 2000 --batch-size 64` (~5 min/checkpoint, same cost as one battery condition):

| Condition | RN-Raw prediction | XA-Raw prediction | Interpretation |
|---|---|---|---|
| `zero_ch0` (image[:,0]=0) | ≈0.89 (small drop) | ≈0.87 | Ch0 noise contributes nothing → HC's gain is purely "removing harmful noise"; Raw signal lives in Ch1 |
| `zero_ch0` | large drop | large drop | the CNN does extract sub-noise-floor Ch0 signal → HC's gain is "amplifying effective SNR", not just noise removal |
| `zero_ch1` | collapse | collapse | confirms Ch1 carries the Raw signal (expected given +35% elevation at HC pads) |

Discriminates "noise removal" (M1-as-subtraction) from "signal recovery" (M1-as-amplification) — the two readings the current data cannot separate. Optional second condition on XA only: `swap_physics` (feed the paired HC event's physics vector to the Raw checkpoint — event alignment is verified, so index-matched swap is legal). If XA-Raw + HC-physics ≈ 0.95, the XA-specific deficit is feature-quality; if ≈0.87, it is image-side — one extra forward pass, decisive for how much of the XA gap D1–D4 even need to explain.

**Do not bother with:** re-deriving per-event Raw-vs-HC feature correlations (already on disk), or a masked-Raw inference (Raw Ch0 masked to HC support) — the audit already shows Raw Ch0 at HC pads = unconditional mean, so masking only tests occupancy shape, which the channel ablation covers more cleanly.

<!-- SOURCE-BODY-END -->
