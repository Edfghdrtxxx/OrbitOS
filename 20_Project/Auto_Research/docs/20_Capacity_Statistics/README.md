# Capacity, power, and evaluation

Reports on the H1 decision table, statistical power, GPU budget, seed evidence, referee stress tests, and held-out evaluation.

## Contents

- [[fm-ar-d14-bign|D1–D4 at n≈8000 feasibility and patch]] — Establishes the n=8000 k-fold run cannot execute locally; ships a verified CV/hypergeometric/RSS patch, exact box command, and analytic MDE.
- [[fm-ar-d14-power|D1–D4 power and interpretation]] — Assesses statistical power and decision thresholds for capacity diagnostic criteria D1–D4.
- [[fm-ar-gpu-ladder|GPU budget ladder]] — Consolidated training ladders, estimated runtimes, and execution priorities within the approved GPU budget.
- [[fm-ar-gpu-plan-draft|Ranked experiment plan draft]] — Proposes phased training sequence and resource allocation across candidate compute rounds.
- [[fm-ar-nimpsim-cost|NimpSim Option B cost settlement]] — Derives the Option B reserve cost at ~20–35 GPU-h from measured per-epoch anchors; shows it does not fit the ~9.5 h reserve and ranks the cheapest fitting variants.
- [[fm-ar-referee|Hostile-referee attack ranking]] — Catalogs potential peer-review vulnerabilities, methodology critiques, and decisive counter-experiments.
- [[fm-ar-seed-evidence|Seed-robust evidence]] — Aggregates multi-seed variance statistics across EXP3 configurations to verify stability.
- [[fm-ar-test-split|Held-out evaluation protocol]] — Defines strict held-out test splits and evaluation procedures prior to final compute spend.
