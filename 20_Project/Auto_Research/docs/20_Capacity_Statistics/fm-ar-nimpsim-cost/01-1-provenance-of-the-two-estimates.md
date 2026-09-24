<!-- Verbatim source section; overview: [[../fm-ar-nimpsim-cost]] -->
<!-- SOURCE-BODY-START -->
## 1. Provenance of the two estimates

| Estimate | Source | Origin | Derivation |
|---|---|---|---|
| Option B ~4–6 h | `20_doc/nimpsim_reserve/README.md:136-139` | PR #13 (`git show b6eb7f9`, merged 1c0e39d) | **None.** The sentence derives only Option A ("EXP3 Raw arms measured 4.6–4.9 h each; clean NimpSim images should be ≤ Raw") and then asserts "Option B ~4–6 h" with no arithmetic. It silently ignores that Option B runs bs 32 (not 128), 160k train (not 100k), FP32 (not AMP), and augmentation — i.e. ~6.4× the optimizer steps per epoch of the anchor it cites. |
| ~12–18 train h (unverified) | `20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml:357-359` (`id: rn_mod_nimpsim`, `cost_purpose: "~12–18 train h (unverified); repairs the mislabeled §5.5 decomposition."`) | PR #15 (`git show 034aa90`) — a **verbatim transcription** of the locked mechanism scout report's gpu_runs table ("Transcribes the locked 2026-09-24 preregistration … both tables verbatim"). PR #29 (3484020) only fixed the run-name match `rn-mod`→`rnmod`; no cost change. | **None recorded.** Self-flagged "unverified". No measured basis exists in the repo; it reads as a conservative guess that happens to sit inside the evidence-derived band below. |
| Queue doc | `20_doc/workflows/gpu_session_queue.md:120` | PR #34 (0ae4798) | Reports both numbers and flags the prereg one as "the risk case"; correct framing. |

<!-- SOURCE-BODY-END -->
