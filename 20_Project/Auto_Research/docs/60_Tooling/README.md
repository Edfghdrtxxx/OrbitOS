# Tooling

Area for auto-research tooling, utility scripts, and automation test records. During the EXP3 migration, tooling contributions were shipped directly as code/PRs (such as GPU launchers, verification tools, and testing packs) rather than standalone investigation reports.

## Contents

- [[fm-ar-docs-refine|Docs-migration phrasing refinement]] — Two-round phrasing and progressive-disclosure review of the docs migration itself: 12 suggestions, 100% accepted, with verification evidence for `check_docs.py` and the split manifest.
- [[fm-ar-pack-drycheck|EXP3 pack dry-check]] — CPU dry-check of the Rung 1, reserve, and NimpSim GPU packs against current main: all CPU-checkable paths pass; one break found (prereg `rn-mod` match never resolves the RNMod run's metrics).
