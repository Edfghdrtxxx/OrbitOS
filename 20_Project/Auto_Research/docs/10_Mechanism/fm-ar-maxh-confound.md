> Origin: `fm-ar-maxh-confound` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# fm-ar-maxh-confound — Is the EXP8 max|h| OOD signal a trivial-observable proxy?

**Verdict (one line):** The 0.90 AUROC reproduces exactly, but the claim "max|h| flags unseen carbon isotopes" does **not** survive scrutiny: a *seen* channel (A, protons) separates from the chosen negatives just as strongly (0.906/0.903), the score cannot tell the three unseen isotopes apart (F/G/H pairwise ≈ 0.50), and against the full seen set the pooled unseen AUROC drops to 0.67/0.58. Whether the residual signal is a trivial observable (deposited charge / track extent) or learned structure **cannot be settled on this Mac** — the EXP8 H5 event files are not present locally — but the channel-level pattern is fully consistent with a single deposition-scale proxy. Cheapest decisive check: a ~60-line torch-free join script on the GPU box (exact command in §5).

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[10_Mechanism/fm-ar-maxh-confound/01-1-what-the-caches-contain-and-whether-rows-join-to-events|1. What the caches contain, and whether rows join to events]]
- [[10_Mechanism/fm-ar-maxh-confound/02-2-local-observables-what-could-and-could-not-be-computed|2. Local observables — what could and could not be computed]]
- [[10_Mechanism/fm-ar-maxh-confound/03-3-does-the-0-90-claim-survive|3. Does the 0.90 claim survive?]]
- [[10_Mechanism/fm-ar-maxh-confound/04-4-manuscript-implication-finding-only-captain-edits|4. Manuscript implication (finding only — captain edits)]]
- [[10_Mechanism/fm-ar-maxh-confound/05-5-cheapest-decisive-check-on-the-gpu-box-exact-command|5. Cheapest decisive check on the GPU box (exact command)]]
- [[10_Mechanism/fm-ar-maxh-confound/06-6-commands-run-local|6. Commands run (local)]]
- [[10_Mechanism/fm-ar-maxh-confound/07-7-limitations|7. Limitations]]

<!-- ORIGINAL-BODY-SHA256: 9b6c44af93971a505a1d1f3a4cadbfaa84ab02777970c448cd7f2bd7c659fb94 -->
<!-- ORIGINAL-BODY-BYTES: 14782 -->
