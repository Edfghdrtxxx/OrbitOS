---
name: preference_e2e_over_unit_tests
description: Prefer end-to-end regression coverage over adding unit tests for behavior changes
type: preference
saved_at: 2026-09-24
---

**Trigger:** deciding how to verify an implemented behavior, integration, UI flow, or other user-visible change.

**Rule:** Prefer end-to-end tests that exercise the shipped product and user path. Do not add new unit tests by default; use them only when an end-to-end test cannot observe the failure or when the user explicitly asks for unit coverage.

**Why:** The user considers realistic browser behavior more valuable for this app's daily study flows than isolated unit coverage.
