---
name: research
description: Deep research workflow for technologies, concepts, or complex topics
---
# Phase 0 — BOOTSTRAP

1. Read `evolution.md` in this skill's folder (if it exists). Apply accumulated lessons.
2. Read `.agents/skills/orchestrate/SKILL.md` and its `references/inline-mode.md`. You will follow orchestrate's full protocol with the supplementations below.

# Supplementation for Phase 1

- **Explore agent** - Should always include at least the following directories: `30_Research/`, `40_Wiki/`, `20_Project/`.

# Supplementation for Phase 2 (No Supplementation for Phase 1.5)

Integrate these parts into decomposition output:

- **Web research** — list specific search domains
- **Main note** → `30_Research/<Subfolder>/<Topic>.md` with topic-appropriate sections (not a fixed template), always ending with `## References`
- **Wiki concepts** → Spawn an agent with telling it to activate `/atomic-note` to scan the main note.
- **Canvas** → yes/no (opt-in, delegates to `/json-canvas`)

# Supplementation for Phase 3

Constraints for implementers:

- **References (MANDATORY, last section):** local `[[Note]]`, online `[Title](URL)`, every sourced claim cited, group if many

# Supplementation for Phase 4

- Missing, empty or incomplete `## References` section → **hard-fail**, needs-revision

# Supplementation for Phase 5

Append to synthesis output:

- 3 key takeaways

# Edge Cases

- **Already covered:** update/expand, not duplicate
- **Follow-up:** modify in place, no duplicates, update References
