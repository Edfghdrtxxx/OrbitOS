> Origin: `fm-ar-halt` manager report; recorded 2026-09-25.

<!-- SOURCE-PREFIX-START -->
# fm-ar-halt — EXP3/Auto-Research temporary halt report (manager side)

**Halt called:** 2026-09-25 morning, captain via firstmate. **Report time:** ~09:05 (real clock). **Author:** campaign manager (omp/SWE-2). Scope: box-176 operations, artifact custody, pending queue. Analysis/interpretation remains firstmate's domain; this report records state, not verdicts.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Status

**The EXP3/Auto-Research campaign is PAUSED as of 2026-09-25** (temporary halt at the captain's call — paused, not ended). This chapter is the resume point: its [[00_Campaign/fm-ar-halt/03-3-pending-list-ordered|pending list]] and [[00_Campaign/fm-ar-halt/05-5-artifact-map|artifact map]] carry the restart state.

## Firstmate findings

- **Mac MATE-Automation master is 3 commits ahead of origin, but those commits are NOT safe to push** — their only content not already on origin reverts the prereg match strings to names that do not match the real experiment_ids (for example `rn-mod` vs the real `V4HeHe-RNMod-NimpSim-160k-seed42`, `rn-raw`/`lf` vs `EXP3-ResNet-Raw-100k-label-fix-seed42`) and deletes the regression test added by MATE PR #29 (https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/29). Origin's version is correct; the local copy awaits a captain decision to reset.
- **Resume routing:** the CPU-only jobs in the pending list (D6-s42 battery, diag-s0, the five redumps, the held-out eval, e23) are to run on the **IMP server**, which carries no fee, rather than AutoDL box 176; AutoDL is for GPU work only. Whether IMP has the needed environment, checkpoints, and data is unverified. Connection details live in MATE-Automation `20_doc/servers/IMP_server_context.md` — linked by path only; never copy credentials into docs.
- **Storage and servers (2026-09-25):** captain decisions — the group-owned **IMP server is the first-priority home for durable data** (CPU-only jobs go there, no fee); **AutoDL is scratch** (GPU only); **the Mac is temporary staging only**. The IMP route is currently blocked at connectivity — see [[00_Campaign/fm-ar-imp-resume|IMP resume attempt]]. Per the captain's "keep them in autodl temporarily this turn", **box 176 holds the only copies** of the EXP3 checkpoints and the Garfield data for now — inventory in [[00_Campaign/fm-ar-box-evac/02-2-box-176-inventory-for-a-later-imp-move-all-under-root-autodl|box-evac §2]]. Server context: MATE-Automation `20_doc/servers/IMP_server_context.md` (path only; no credentials in docs).

## Contents

- [[00_Campaign/fm-ar-halt/01-1-events-since-2026-09-25-03-55-real-clock|1. Events since 2026-09-25 03:55 (real clock)]]
- [[00_Campaign/fm-ar-halt/02-2-final-state-of-experiment-lines|2. Final state of experiment lines]]
- [[00_Campaign/fm-ar-halt/03-3-pending-list-ordered|3. Pending list (ordered)]]
- [[00_Campaign/fm-ar-halt/04-4-repo-checkout-state|4. Repo/checkout state]]
- [[00_Campaign/fm-ar-halt/05-5-artifact-map|5. Artifact map]]

<!-- ORIGINAL-BODY-SHA256: 2f267c89b7923d3430ad4d0f2a5834edb8e4e2780b0c92fab08c718457c28b60 -->
<!-- ORIGINAL-BODY-BYTES: 10113 -->
