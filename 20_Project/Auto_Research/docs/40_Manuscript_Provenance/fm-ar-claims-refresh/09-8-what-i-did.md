<!-- Verbatim source section; overview: [[../fm-ar-claims-refresh]] -->
<!-- SOURCE-BODY-START -->
## 8. What I did

- Read the 16:53 ledger in full; enumerated every `fm-ar-*/report.md` newer than 16:53 (`find -newermt`): figure-provenance, d14-power, related-work, closing-sync, docs-refine, pack-drycheck, maxh-confound, d14-bign, nimpsim-cost, bib-fixsheet — read all 10. (`closing-check` at 16:34 predates the ledger and was already in its evidence base; `act-ood` and `bib-verify` have no report.md — in flight.)
- Read the lead's updated `20_doc/EXP3_closing_analysis_2026-09-24.md` (mtime 21:52 — D6 §10b–10d, Z01 §17), `gpu_session_queue.md`, `exp3_d6_battery_usage.md`, `exp3_collect_tables.md`, `EXP8_manuscript_replacement_inventory.md`, and the vault `L1_Current_Campaign.md` + `auto-research-exp3.md` campaign log.
- Verified all three `counterfactual_battery_d5.json` files on disk — values match the closing doc exactly (s0: 0.8675/0.8685/0.8685/0.4095/0.8675/0.4770; lf: 0.9275/0.9275/0.9270/0.1935/0.9275/0.8600; HC: 0.9530/0.9535/0.9530/0.9540/0.9530/0.8870).
- Scored every landed condition against `20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml` bands by hand (§3); computed `selection_bias` final_gap = −0.0306 from the two `history.json` files.
- Enumerated merged PRs #21–#35 + 4 direct D6/Z01 commits from the live checkout's `git log` (HEAD `fc9869c`).
- Read `main.tex` lines 190, 211, 248, 313, 315-335, 475, 526 verbatim for the citation/claim checks.

<!-- SOURCE-BODY-END -->
