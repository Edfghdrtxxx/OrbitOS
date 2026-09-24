> Origin: `fm-ar-nimpsim-cost` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# NimpSim Option B (`V4HeHe_RNMod_NimpSim_160k_seed42`) — cost settlement

**Verdict: Option B does NOT fit the ~9.5 GPU-h reserve.** Best estimate **~20–35 GPU-h**
(plausible range ~10–50 h), driven by batch_size 32 → 5,000 steps/epoch at 160k train
and a published-run trajectory that needed ~93–100 epochs. The README's 4–6 h is an
underived guess that ignores the 6.4× steps/epoch increase vs the EXP3 anchor; the
prereg's 12–18 h is also underived but lands inside the plausible band — treat it as
the floor, not the ceiling.

Read-only scout; no code/doc changes. All paths relative to repo root unless absolute.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[20_Capacity_Statistics/fm-ar-nimpsim-cost/01-1-provenance-of-the-two-estimates|1. Provenance of the two estimates]]
- [[20_Capacity_Statistics/fm-ar-nimpsim-cost/02-2-evidence-derived-cost|2. Evidence-derived cost]]
- [[20_Capacity_Statistics/fm-ar-nimpsim-cost/03-3-does-it-fit-no-cheapest-ways-to-make-it-fit|3. Does it fit? No — cheapest ways to make it fit]]
- [[20_Capacity_Statistics/fm-ar-nimpsim-cost/04-4-files-to-stage|4. Files to stage]]
- [[20_Capacity_Statistics/fm-ar-nimpsim-cost/05-5-commands-run|5. Commands run]]
- [[20_Capacity_Statistics/fm-ar-nimpsim-cost/06-6-caveats|6. Caveats]]

<!-- ORIGINAL-BODY-SHA256: f27735a8d6d2dd11626ae174bea3c0ed09a67d7ee516f845e3991c69a503dff3 -->
<!-- ORIGINAL-BODY-BYTES: 11903 -->
