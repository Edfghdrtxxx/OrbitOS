 > Give me a handoff prompt for this task:
   Now I need a new skill + command (just like '/start-my-day') that can
   let AI estimate the completion time of every tasks (resolution to
   subtask level), and also remind me after every time I execute
   '/start-my-day'
  Responding with gemini-3-flash-preview
✦ Here is a comprehensive handoff prompt you can use to implement this new
  capability. It defines the technical requirements, the skill logic, and
  the integration points for OrbitOS.

  ---

  Handoff: Implement /estimate-time Skill & Command


  Context:
  We are using OrbitOS, a personal knowledge and planning system. We have a
  functional /start-my-day workflow that generates daily notes in
  10_Daily/YYYY-MM-DD.md. The user organizes tasks into time-staged blocks
  (a, b, c, d, e).


  Objective:
  Create a new skill and CLI command called /estimate-time that parses the
  current day's tasks, provides subtask-level time estimates, and
  integrates as a post-planning reminder.


  1. New Skill: estimate-time
  Location: .agents/skills/estimate-time/SKILL.md
  Logic:
   - Parse: Read 10_Daily/[Today].md. Extract all unchecked tasks (- [ ])
     and their nested subtasks.
   - Estimate: For each item, assign a duration (e.g., 15m, 30m, 45m, 1h)
     based on:
       - Keywords (e.g., "Read" = 45m, "Search" = 15m, "Exercise" = 90m).
       - User-provided hints (e.g., if the user wrote (45mins) in the
         text).
   - Update: Rewrite the daily note by appending the estimate to the task
     line.
       - Example: - [ ] Step 1.5: Implement PDF conversion → - [ ] Step
         1.5: Implement PDF conversion (45m)
   - Totalize: Calculate the total estimated time per stage (a, b, c, d, e)
     and the grand total for the day.
   - Review: Flag "Overloaded" days (e.g., if total > 10 hours) and suggest
     which tasks to move to "Secondary".

  2. New Command: estimate-time.toml
  Location: .gemini/commands/estimate-time.toml
   - Define the command /estimate-time.
   - Point it to the estimate-time skill.


  3. Integration & Reminder
  Modification to `start-my-day` Skill:
   - Update .agents/skills/start-my-day/SKILL.md.
   - In Step 5 (Present Summary), add a mandatory instruction to remind the
     user:
    > "Your day is planned. To get a realistic view of your schedule, run
  /estimate-time to calculate durations for all subtasks."


  Technical Instructions for Agent:
   1. Create the folder structure and SKILL.md for estimate-time.
   2. Register the command in .gemini/commands/.
   3. Update the start-my-day skill instructions to ensure the reminder is
      issued at the end of every morning plan.
   4. Validation: Run /estimate-time on 10_Daily/2026-02-28.md and verify
      that time tags are added correctly to both top-level and sub-level
      tasks.

  ---


  [Completeness] Y
  [Accuracy] Y
  [Assumptions] Y (Assuming you want the estimates written back to the
  file)
  [Constraints] Y
  [Confidence] 10

 > 1. I don't like the metric of 'keywords' for estimation
   2. This vault is not only for gemini CLI, but also for Claude Code and
   Codex, so the command should be comprehensively synchronized and
   compatible
  Responding with gemini-3-flash-preview
✦ Here is the refined handoff prompt, redesigned for multi-agent
  compatibility and context-aware estimation (moving away from rigid
  keywords).

  ---


  Handoff: Implement Cross-Agent /estimate-time Skill

  Context:
  OrbitOS is a multi-agent workspace (Gemini CLI, Claude Code, Codex). To
  maintain synchronization, all automation must be "Agent Agnostic." The
  logic lives in .agents/skills/ while command triggers are registered in
  agent-specific configs.


  Objective:
  Implement a task estimation system that uses LLM reasoning (not keywords)
  to predict completion times at a subtask level and integrates a mandatory
  reminder after every morning planning session.

  ---


  3. Unified Skill: estimate-time
  File: .agents/skills/estimate-time/SKILL.md
  Logic (Contextual Reasoning):
   - Analysis: Instead of keywords, use the user's context (Master's
     Physics student, graduation goals, current blockers) to judge task
     complexity.
   - Subtask Resolution: Decompose every top-level task. If a task has no
     subtasks, the AI must propose a realistic 2-3 step breakdown before
     estimating.
   - Factors: Consider "Research Depth" (Physics thesis vs. trivial
     script), "Technical Friction" (Docker/WSL issues), and "Cognitive
     Load" (Japanese N5 vs. N1).
   - Format: In-place update of 10_Daily/YYYY-MM-DD.md.
       - Format: - [ ] Task Description (Estimate: XXm)
       - Summary Table: Add a "Capacity Analysis" at the bottom of the note
         showing total time vs. available hours.


  2. Multi-Agent Command Registration
  For Gemini CLI:
   - Create .gemini/commands/estimate-time.toml.
  For Claude Code / Codex:
   - Update CLAUDE.md and GEMINI.md (Project Context) to include
     /estimate-time in the "Standard Workflows" list so all agents
     recognize and can execute the command by reading the skill file.


  3. The "Post-Planning" Hook
  Instruction Update:
   - Modify .agents/skills/start-my-day/SKILL.md.
   - New Rule: Every agent, upon completing the /start-my-day workflow,
     MUST append this specific reminder to its final output:
    > ⏳ Action Required: Run /estimate-time to generate a realistic
  schedule and subtask breakdown for today's plan.

  ---


  Technical Implementation Steps for the Agent:
   1. Infrastructure: Create .agents/skills/estimate-time/SKILL.md with
      instructions for "Reasoning-based Estimation."
   2. Command Configs: Write the .toml for Gemini CLI.
   3. Global Context Update: Edit GEMINI.md (and CLAUDE.md if available) to
      register the /estimate-time command as a system-wide protocol.
   4. Integration: Edit the start-my-day skill to include the mandatory
      reminder hook.
   5. Validation: Execute /start-my-day, verify the reminder appears, then
      execute /estimate-time to ensure the AI provides intelligent
      estimates for the Physics/Thesis tasks without relying on a "word
      list."

  ---


  [Completeness] Y
  [Accuracy] Y
  [Assumptions] Y (Assuming you want the AI to propose subtasks where they
  are missing)
  [Constraints] Y (No keywords; Multi-agent compatible)
  [Confidence] 10

 > Let logic part more concise, don't be so confident about yours, let me
   discuss with follow-up AI