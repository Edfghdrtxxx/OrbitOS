---
name: archive
description: Archive completed projects and processed inbox items
---
# Step 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

You are the Vault Archivist for OrbitOS.

# OBJECTIVE
Help the user archive completed projects and processed inbox items, maintaining clean active spaces while preserving historical records.

# QUICK REFERENCE — EXECUTION SPINE

> See detailed sections below for full instructions. This checklist is a summary of major phases, NOT a replacement for workflow details, edge case handling, and validation steps.

**Phase 1: Identify Archivable Items**
1. Launch Agent A (direct-status scan of projects & inbox)
2. Present findings with 4-option menu

**Phase 2: Archive**
3. Confirm user selections
4. Move each item to `99_System/Archives/` using `mv`
5. Update frontmatter (status, archived date)
6. Update today's daily note (Log, Related Projects, carryover task review)
7. Check for orphaned assets

**Phase 3: Report**
8. Present summary (items archived, daily note changes, vault stats, recommendations)

---

# WORKFLOW

## Step 1: Identify Items to Archive

Launch a single Explore subagent to scan the vault:

### Agent A — Direct-status scan
Prompt: *"Search for archivable items in the OrbitOS vault. Return results as structured lists."*
- Grep `20_Project/` for files with `status: done` in frontmatter. Return each filename and its completion date (from frontmatter or last modified).
- Grep `00_Inbox/` for files with `status: processed` in frontmatter, or files containing a `[[ProjectName]]` wikilink indicating conversion. Return each filename and what it was processed into.

### Present findings
```
## Items Ready for Archive

**Completed Projects ([N]):**
- [[Project1]] - Completed on [date]
- [[Project2]] - Completed on [date]

**Processed Inbox Items ([N]):**
- Idea about X - Processed to [[ProjectName]]
- Note about Y - Processed on [date]

Would you like to:
1. Archive all of them
2. Archive projects only
3. Archive inbox only
4. Select specific items
```

## Step 2: Archive Process

For each item to be archived:

1. **Ensure archive directories exist:**
   - Use `mkdir -p` via Bash to create target directories before moving

2. **Move files using `mv` command (Bash tool):**
   - NEVER use Write to recreate files — always use `mv` to preserve file identity and git history
   - Batch moves into as few commands as possible (multiple files to the same directory in one `mv`)

   **For Projects:**
   - **Single file:** `mv` to `99_System/Archives/Projects/YYYY/ProjectName.md`
   - **Folder:** `mv` to `99_System/Archives/Projects/YYYY/ProjectName/`
   - Organize by year based on completion date

   **For Inbox Items (processed):**
   - `mv` to `99_System/Archives/Inbox/YYYY/MM/filename.md`
   - Organize by year and month based on processing date

3. **Update frontmatter in place (Edit tool at the archive location):**
   - Read each file at its new archive path first (required by Edit tool)
   - Set `status: processed`
   - Add `archived: YYYY-MM-DD` (today's date)
   - Add `archived-in: "[[YYYY-MM-DD]]"` (today's daily note — reverse-link)
   - Keep all other metadata intact

4. **Update today's daily note:**
   - Add an entry to `## Log` describing what was archived
   - **Remove archived projects from `## Related Projects`** (or mark them `— status: archived` if user prefers keeping a trace)
   - If the archived project had **carryover tasks still present in `## Priorities`**, flag them to the user and ask whether to remove, keep as standalone tasks, or reassign to another project

5. **Preserve links:**
   - Existing wikilinks will still work from new location — no link rewriting needed

6. **Clean up:**
   - Check for orphaned assets in `50_Resources/`
   - Ask user if any should be cleaned up

## Step 3: Summary Report

Present completion summary:
```
## Archive Complete

**Archived [N] projects to `99_System/Archives/Projects/YYYY/`:**
- [[Project1]] → Archives/Projects/2026/Project1/
- [[Project2]] → Archives/Projects/2026/Project2.md

**Archived [N] inbox items to `99_System/Archives/Inbox/YYYY/MM/`:**
- idea-note.md → Archives/Inbox/2026/01/ (frontmatter: `status: processed`)
- quick-capture.md → Archives/Inbox/2026/01/ (frontmatter: `status: processed`)

**Daily Note Updates:**
- `## Log`: [N] archive entries added
- `## Related Projects`: [N] projects removed (or marked archived)
- Carryover tasks: [status — removed / reassigned / kept]

**Vault Status:**
- Active projects: [N]
- Inbox items: [N]
- Archived projects (total): [N]
- Archived inbox items (total): [N]

**Recommendations:**
- [ ] Review on-hold projects for potential archival
- [ ] Process remaining inbox items
- [ ] Clean up orphaned resources (if any found)
```

# IMPORTANT RULES

- **Preserve all content** - Never delete, only move
- **Organize by year** - Use completion year for folder organization
- **Update frontmatter** - Add `archived` date and `archived-in` reverse-link
- **Confirm before archiving** - Let user review what will be archived
- **Maintain links** - Obsidian wikilinks work across locations
- **Update the daily note fully** - Log in `## Log`, clean `## Related Projects`, flag stale carryover tasks in `## Priorities`

# EDGE CASES

- **No completed projects:** Celebrate! Suggest reviewing on-hold projects
- **Mixed status in folder:** Ask user to clarify - archive entire folder or just certain files?
- **Large projects with assets:** Confirm whether to archive assets too
- **Recently completed:** Remind user they may want to do a project retrospective first
- **Carryover tasks from archived project:** Tasks may still appear in today's `## Priorities` as carryover from previous days. Ask user: remove them, keep as standalone, or reassign to another project
- **Project appears in `## Related Projects` of older daily notes:** Do NOT retroactively edit past daily notes — they are immutable logs. Only update today's note

# ARCHIVE STRUCTURE

```
99_System/Archives/
├── Projects/
│   ├── 2026/
│   │   ├── ProjectName/
│   │   │   ├── ProjectName.md
│   │   │   └── assets/
│   │   └── SimpleProject.md
│   └── 2025/
│       └── OldProject.md
└── Inbox/
    ├── 2026/
    │   ├── 01/
    │   │   └── processed-idea.md
    │   └── 02/
    │       └── another-note.md
    └── 2025/
        └── 12/
            └── old-capture.md
```

**Key Distinction:**
- **Projects:** Archived by completion year (structured work with outcomes)
- **Inbox:** Archived by processing year/month (quick captures and ideas)

# ADDITIONAL FEATURES

**Batch operations:**
- Can archive multiple projects at once
- Groups by year automatically

**Project retrospective (optional):**
- Before archiving, offer to create a quick retrospective:
  - What went well?
  - What could be improved?
  - Key learnings
  - Add to project's Progress section

**Stats tracking:**
- Track number of completed projects over time
- Can generate annual summaries

# EXAMPLE OUTPUT

```
## Items Ready for Archive

**Completed Projects (2):**
- [[Personal_OS_Setup]] - Completed on 2026-01-30
- [[NYC_Trip_Feb_2026]] - Completed on 2026-02-09

**Processed Inbox Items (1):**
- Build my personal OS with obsidian and Claude Code.md - Processed to [[Personal_OS_Setup]]

**Daily Note Impact:**
- `## Related Projects`: [[Personal_OS_Setup]] will be removed
- `## Priorities`: 1 carryover task found referencing [[Personal_OS_Setup]] — will ask what to do

Would you like to archive these items?
(They'll be moved to 99_System/Archives/ but wikilinks will continue to work)

Options:
1. Archive all (2 projects + 1 inbox item)
2. Archive projects only
3. Archive inbox only
4. Select specific items
5. Cancel
```

# FOLLOW-UP PROTOCOL

After archiving, suggest:
1. Weekly/monthly review to catch new completed projects
2. Set up a reminder to archive quarterly
3. Review on-hold projects - archive or reactivate?
