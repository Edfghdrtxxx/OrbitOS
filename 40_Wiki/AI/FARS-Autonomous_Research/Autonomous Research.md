---
area: [[Physics]]
tags: [autonomous-research, multi-agent, research-automation, physics]
created: 2026-02-27
last_reviewed:
next_review: 2026-03-03
review_interval: 0
---
# Autonomous Research

## Definition

Autonomous research is a system-level approach where AI agents independently perform the full research cycle in a bounded domain. In physics, this means generating hypotheses, designing experiments or simulations, executing them on compute, analyzing results, and drafting reports with reproducibility and physical constraints enforced by the system.

## Key Points

- End-to-end autonomy requires explicit domain constraints, reproducibility checks, and verification against physics priors.
- A modular pipeline allows swapping models, tools, and data sources without breaking the full workflow.
- Evaluation should combine scientific validity, novelty, and operational efficiency (time, compute, cost).

## Proposed System Design (Physics)

- Stage 0: Scope and Constraints. Define target subfield, allowable methods, physics invariants, compute limits, and success criteria.
- Stage 1: Knowledge Ingestion. Curate papers, datasets, codebases, and lab notes into a structured knowledge graph.
- Stage 2: Hypothesis Generation. Produce testable claims with explicit assumptions and expected signatures.
- Stage 3: Planning. Translate hypotheses into simulation or analysis plans, specifying datasets, models, and metrics.
- Stage 4: Execution. Run simulations or analyses with automated logging, provenance, and failure recovery.
- Stage 5: Verification. Enforce physical constraints, cross-check with baselines, and detect spurious correlations.
- Stage 6: Writing and Review. Draft a short paper, run automated reviews, and flag uncertainty or missing checks.

## Interfaces and Tooling

- Orchestrator: task planner + tool router + memory store.
- Physics engine: Geant4/FLUKA simulation wrappers or domain-specific pipelines.
- Data layer: versioned datasets, experiment configs, and artifact registry.
- Evaluation: automated reviewer + reproducibility tests + statistical sanity checks.

## Risks and Mitigations

- Hallucinated physics or invalid assumptions: enforce symbolic constraints and unit checks.
- Overfitting to simulation artifacts: cross-validate with alternative generators and data splits.
- Misleading novelty: require baseline replication and effect-size reporting.

## Examples

- Autonomous scan of TPC reconstruction hyperparameters with physics-consistent priors.
- Automated hypothesis testing for particle identification features under domain shift.

## Related Concepts

- [[FARS]]
- [[Multi-Agent Systems]]
- [[AI Scientist]]
- [[Agentic Reviewer]]

## References

- User request: physics-focused autonomous research system design (2026-02-27)
