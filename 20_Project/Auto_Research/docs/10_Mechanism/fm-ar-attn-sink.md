> Origin: `fm-ar-attn-sink` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# fm-ar-attn-sink — What the EXP4 attention sink means now that the physics query is content-free

**Date:** 2026-09-24 · **Scope:** local artifacts only (live checkout `runs/`, `20_doc/`, `src/`, `scripts/`). No box-176 access, no GPU, no writes to the live checkout.

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[10_Mechanism/fm-ar-attn-sink/01-tl-dr|TL;DR]]
- [[10_Mechanism/fm-ar-attn-sink/02-1-where-token-50-sits|1. Where token 50 sits]]
- [[10_Mechanism/fm-ar-attn-sink/03-2-does-a-constant-query-fixed-keys-force-a-fixed-map-the-math|2. Does a constant query + fixed keys force a fixed map? — the math]]
- [[10_Mechanism/fm-ar-attn-sink/04-3-does-the-bragg-focus-claim-survive|3. Does the Bragg-focus claim survive?]]
- [[10_Mechanism/fm-ar-attn-sink/05-4-literature-grounding|4. Literature grounding]]
- [[10_Mechanism/fm-ar-attn-sink/06-5-cheapest-cpu-checks-for-box-176-ranked|5. Cheapest CPU checks for box 176 (ranked)]]
- [[10_Mechanism/fm-ar-attn-sink/07-6-data-hygiene-flags-for-the-lead|6. Data hygiene flags for the lead]]
- [[10_Mechanism/fm-ar-attn-sink/08-7-open-questions-need-lead-box-resources|7. Open questions (need lead/box resources)]]
- [[10_Mechanism/fm-ar-attn-sink/09-appendix-evidence-index|Appendix — evidence index]]

<!-- ORIGINAL-BODY-SHA256: 221dee9795744c46505ba014d13508922866d930b9c601c05c3594912ab8106c -->
<!-- ORIGINAL-BODY-BYTES: 16195 -->
