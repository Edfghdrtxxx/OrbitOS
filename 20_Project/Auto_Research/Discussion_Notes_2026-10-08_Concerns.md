# Auto-research: concerns and open questions (2026-10-08)

Purpose: the project owner's concerns about the state of the auto-research, written in formal research register, for a discussion with Fable once the Claude Code quota resets. Every statement in section 1 and 2 comes from the project owner's own words on 2026-10-08. Section 3 lists facts read from the pipeline on 2026-10-08, each with its source.

## 1. Concerns

1. **Progress, not machine utilization.** The Windows GPU and memory were idle from 07:50 UTC, after the last queued run finished. The idle hardware is a symptom. The underlying concern is whether the auto-research makes substantive progress toward the paper. Having no run to queue is not an acceptable end state; the research team must design new work.
2. **Beyond answering reviewers.** Closing the gaps that reviewers are likely to raise is necessary but not sufficient. The team should also propose new network architectures and new data-processing pipelines that improve the results themselves.
3. **The margin over the baseline is too small.** The gap between the physics-informed cross-attention architecture and the generic ResNet is too small to justify the architecture. The paper needs either a larger margin or a clearer argument for why the margin is enough.
4. **Attribution of changes.** Many changes have accumulated (for example mixed precision, data prefetching, configuration edits, normalization, data handling). The separate effect of each change is not known. A factor-attribution table is needed: which changes contribute, which do not, and which are confounded with each other.
5. **Input encoding is not validated.** The current projection assigns channel 0 to the z dimension and channel 1 to the charge. It is not established that this is the best encoding. Alternative projections should be proposed and compared under the same conditions so that the choice can be made on evidence.

## 2. Questions for the discussion

1. Which alternative encodings of the same detector data are worth testing against the current channel-0 (z) and channel-1 (charge) projection, and what is the physical reason each might help? Examples to consider: a different channel assignment, additional channels for derived physical quantities, a point-cloud or graph representation, a coordinate-aware encoding, and a learned projection.
2. What experimental design isolates the encoding effect from every other factor (same seed, same architecture, same training budget, same data split, same precision settings), and how many seeds are needed to separate the effect from seed noise?
3. Which architectural changes follow from the physics, so that the cross-attention model gains an advantage the generic ResNet cannot obtain by capacity alone? What is the smallest experiment that would show it?
4. What is the minimal set of runs that gives a clean attribution of the changes already made?
5. Which of these items would a reviewer regard as essential for the paper, and which only as improvements?

## 3. Facts read from the pipeline on 2026-10-08

- The run `Q7a-EXP2-XA-HC-noamp-s42` started at 2026-10-08T01:45:19Z and finished at 2026-10-08T04:46:06Z. The run `Q7a-EXP2-RN-HC-noamp-s42` started at 04:46:07Z and finished at 2026-10-08T07:50:37Z with exit code 0. Source: `/home/mate/pipeline/status.json` on the Windows PC, read at 08:16Z.
- The queue was empty after that run; `mate-queue.service` was active. Source: the same read.
- The lead accepted `Q7a-EXP2-XA-HC-noamp-s42` and noted that its difference from the earlier `Q2a` run contains both mixed precision and prefetching, so the difference cannot be attributed to mixed precision alone. Source: lead status line, `state/mate-lead-g.status`, 2026-10-08.
- All quantitative results so far use seed 42. Source: lead message 033 in `state/fm-mate-research-channel/`.
- The lead and the consultant have been asked to produce an attribution plan, a list of new architectures and data pipelines, and a roadmap with runs for the PC. Their answers are not yet available at the time of writing.
