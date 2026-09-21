---
name: orchestrate-trust-taste
description: >
  Orchestrate a judgment task (analyze, audit, rank, decide, then ship):
  subagents gather evidence and may reframe, the main agent owns the final
  call and taste, and every claim the call rests on is reproduced first-hand.
  Lock with acceptance criteria before implementing; end-to-end review is
  never skipped. Use when the user runs /orchestrate-trust-taste, says
  "orchestrate this", "you are the PM", or hands over an open-ended "find
  what is wrong / what needs improving" task. Not for mechanical fan-out
  with a known answer, and not the tmux transport (/tmux-orchestrator).
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder if it exists. Apply accumulated lessons.

# Contract

The user trusts the main agent's taste. Subagents are peers who widen the search and may reframe the problem; take their evidence and their framing as inspiration, and say so when a framing becomes yours. What stays with the main agent: the final call, and first-hand verification of whatever that call rests on. Trust is reciprocal, not absent.

# Flow

## 1. Ground (overlap, not a gate)

- Read the domain memory and the repo rules first. Then look for a prior pass on the same question (handoffs, locks, reviews). Do not re-nominate what already shipped unless it reproduces broken.
- Start first-hand contact (open, run, or read core files). Do **not** finish a long solo ground before §2.

## 2. Dispatch first — evidence, not verdicts

- As soon as slices are named, spawn the evidence batch in **one** `task` call, **same turn** as the first reads. Pick the strongest model per aspect.
- Never wait for one agent before spawning the rest. A slow seat does not block synthesis: use ≥2 responders; mark the rest non-yield.
- Brief each with a fixed report contract: numbered findings, each with **Claim / Evidence (file:line, selector, measured number, screenshot path) / Impact / Severity / Fix sketch / Effort**, then a Top 3, a Not-nominated list, and Uncertainties. The Not-nominated list is what stops later re-litigation.
- Isolation rules go in the brief: separate ports, fresh profiles, never the user's live data, stop servers and delete temps on exit.
- While they run, keep working the surface yourself. Waiting idle — or waiting on a single agent — is the failure mode.

## 3. Verify before you believe

- `completed` means the agent yielded, not that the artifact exists. Check the path. A read-only agent may return the report in its output; persist it yourself.
- Reproduce every claim you intend to rank on. Same origin, same steps, your own hands. Record what you saw, not what they said.
- Discard claims that do not reproduce. Name them in the synthesis with the evidence that killed them; a rejected finding is information.
- An agent whose severities miss once: keep its measurements, weight its labels less.

## 4. Rank with your own taste

- Rank by certain cost to the user in their real timeframe, then by fix cost. Not by what a perfect system would have.
- Write the chairman synthesis in your voice: one paragraph per item with what you saw, why it is first, and the slice. Include a "Not in need of improvement (verified)" section and a "Rejected after re-verification" section.
- Say what is good and should stay. Taste is not only subtraction.

## 5. Push back on "done"

Before yielding, and before accepting any agent's yield, ask: is that really all? Agents (this one included) deliver with the surface half-touched, a phase skipped, or a report claimed but not written. Check scope against the original ask, check depth against what you actually ran, check the artifact exists. The second pass usually sharpens the top item rather than adding a new one.

## 6. Lock, dispatch, review end to end

- Turn the ranking into a lock before any implementer starts: waves, per-file owners with exclusive ownership, explicit out-of-scope, and acceptance criteria a stranger could check on a cold profile. Held invariants ("what must still be true") are part of the AC. State cross-unit contracts (names, keys, signatures) in the batch context so agents do not negotiate them.
- Dispatch one batch per wave. Disjoint files, no mid-flight validation, one test file per unit at most.
- End-to-end review is indispensable: a reviewer other than the implementer walks the AC with real interactions on a cold profile, not console calls. Do this yourself, dispatch a skeptical reviewer, or both; never skip it.
- Read the diff of anything touched outside declared ownership. Record what shipped against the lock.

# Stay out

- Unioning subagent Top 3s into a shipping list
- Trusting `completed`, severity labels, or "verified" without reproduction
- Accepting a yield without checking the artifact exists and the scope was met
- Delegating the ranking, the lock, or the taste call
- Pure-PM idleness while agents run
- Serializing on one agent before dispatch or before synthesis
- Widening scope "while you're here"; parked items stay parked and named
- Any transport-specific plumbing (tmux, CLIs); use what the host has
