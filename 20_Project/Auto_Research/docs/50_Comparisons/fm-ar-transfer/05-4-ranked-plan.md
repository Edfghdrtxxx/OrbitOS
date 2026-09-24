<!-- Verbatim source section; overview: [[../fm-ar-transfer]] -->
<!-- SOURCE-BODY-START -->
## 4. Ranked plan

1. **[Highest value, moderate cost] VGG16-style fine-tune on MATE tasks (direction A).** Render MATE charge channel 80×48→128×128, fine-tune ImageNet-VGG16 per Kuchera recipe on the existing α-vs-lump and/or ¹³C/¹⁴C splits pinned to existing `data_split.json`s. Report accuracy + α-recall vs the published 2×2 cells. This is the only transfer that can *discriminate* methods (MATE tasks are unsaturated) and directly satisfies "apply the published method to our data." Cost: one GPU training run per task on box 176-class hardware; CPU-infeasible. Caveat: label it "Kuchera-style VGG16 recipe" — reimplementation, not their binary.
2. **[Cheap, already in flight] Finish Z01 publisher-test eval (direction B).** The lead's `predump_chain.sh` already queues it. Report ResNet18 test bal-acc next to Kuchera's published 1.00 — expect a ceiling tie; frame as "our pipeline reproduces published-level performance on public AT-TPC data," a capability/robustness statement, not a comparison win.
3. **[Cheap, CPU, novel angle] Noise-robustness transfer on the public set.** Score the trained Z01 ResNet18 under the uniform-noise protocol (needs torch — box or IMP, not this Mac; the LR-side numbers above are already in hand). Kuchera showed CNN=1.00 under noise while LR collapsed; showing our generic arm matches that robustness is the only non-tied claim direction B can yield.
4. **[Optional, cheap] Kuchera FCNN arm on MATE.** Single-hidden-layer Keras FCNN on flattened voxels — trivially reimplementable in torch/sklearn on CPU once MATE H5 is reachable (not on this Mac). Adds a second published-method point in direction A at near-zero cost. Lower rank: FCNNs are weak baselines, adds little beyond VGG16.
5. **[Do not do]** Do not build a physics-informed Z01 arm (council-ruled; no independent physics vector exists). Do not pursue Solli/Dey/Wu/SAT-TPC transfers (no public data). Do not quote Kuchera's 0.98 LR against our 0.70 moments-LR as a "gap" — different feature spaces; the honest pair is pixel-LR 0.92 vs their 0.98.

<!-- SOURCE-BODY-END -->
