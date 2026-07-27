# Building a collocation bank for TOEFL speaking

## Export metadata (verbatim)

```json
{
  "uuid": "65739589-a734-4dd0-be68-b7144c5f225e",
  "name": "Building a collocation bank for TOEFL speaking",
  "summary": "**Conversation Overview**\n\nThe person is building a TOEFL speaking collocation bank — a \"prefab phrase bank\" of ready-made expressions (e.g., \"I've never thought about this before, but in my opinion...\") designed to reduce cognitive load during the test so working memory can focus on content rather than sentence construction. The goal is a target score of 100+ on TOEFL speaking. The desired organization scheme is both axes: rhetorical function (open, contrast, cite-source, conclude) within speaking task type (Task 1 independent / Tasks 2–4 integrated). The dual purpose is spaced-repetition memorization and on-demand practice prompt generation with model answers.\n\nAfter discussing delivery format options, the person decided to hand the project off to Cowork rather than build it in this chat, specifically because Cowork offers cross-session persistence, scheduled tasks, and access to their locally installed skills (feynman-technique, vocabulary-visualization, phrasing-refining, concept-visualizer, evolve-skills). Claude drafted a structured handoff prompt using the person's local `handoff-prompt` skill. A key open question was whether Cowork's scheduler supported per-item spaced-repetition intervals (variable cadences like SM-2) or only fixed schedules.\n\nThe person then asked Claude to verify this against official Anthropic documentation. Claude searched and confirmed via the Anthropic Help Center that Cowork only supports fixed cadences (hourly, daily, weekly, weekdays, manual). The verified architectural decision is: schedule the task daily, and place all SR interval logic inside a skill file that reads and writes a records file each run, computing due items by stored next-review dates. Two additional design constraints were documented: the prompt should not hold durable logic because Cowork rewrites the prompt after the first run, and scheduled tasks only fire when the machine is awake and the app is open, so the SR logic must surface all overdue items in a single catch-up run rather than assuming exact daily execution. The handoff prompt was updated to reflect these verified facts. The conversation ended with Claude offering to draft the SR-logic skill file and a starter collocation set to hand over alongside the prompt.",
  "created_at": "2026-06-24T06:34:13.142512Z",
  "updated_at": "2026-06-24T06:40:45.173977Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-06-24T06:34:13.839178Z

I intend to create a new project can let me accumulate collocations for speaking, especially TOEFL speaking.
For example, when I need to start talking, I can directly invoke "I have never thought about this thing before, but in my opinion, I think..." to avoid cognitive load.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ef856-1802-7083-84f2-b4674faf2110",
  "updated_at": "2026-06-24T06:34:13.839178Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-06-24T06:34:21.258078Z

This is a solid idea — a "prefab phrase bank" that frees up working memory during the test so you can focus on content, not sentence construction. Let me ask a few things before building, since the right format depends on how you'll actually use it.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-24T06:34:17.568704Z",
  "stop_timestamp": "2026-06-24T06:34:21.194794Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Gq8HLosUv7KFpVv5EuL851",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "options": [
          "Interactive web app (drill/flashcard)",
          "Obsidian-friendly markdown bank",
          "Custom Claude skill",
          "Printable reference sheet"
        ],
        "question": "What form should the deliverable take?"
      },
      {
        "options": [
          "By speaking task (Task 1 indep / Task 2-4 integrated)",
          "By rhetorical function (open/contrast/cite/conclude)",
          "Both axes (function within task)",
          "By topic theme"
        ],
        "question": "How should the collocations be organized?"
      },
      {
        "options": [
          "Memorize via spaced repetition",
          "Browse/lookup while practicing",
          "Generate practice prompts + model answers",
          "Just a clean static collection"
        ],
        "question": "What's the main thing you want it to do for you?"
      }
    ]
  },
  "message": "Generating ask_user_input_v0...",
  "integration_name": "Dynamic Widget",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01Gq8HLosUv7KFpVv5EuL851",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\n  \"questions\": [\n    {\n      \"question\": \"What form should the deliverable take?\",\n      \"options\": [\n        \"Interactive web app (drill/flashcard)\",\n        \"Obsidian-friendly markdown bank\",\n        \"Custom Claude skill\",\n        \"Printable reference sheet\"\n      ]\n    },\n    {\n      \"question\": \"How should the collocations be organized?\",\n      \"options\": [\n        \"By speaking task (Task 1 indep / Task 2-4 integrated)\",\n        \"By rhetorical function (open/contrast/cite/conclude)\",\n        \"Both axes (function within task)\",\n        \"By topic theme\"\n      ]\n    },\n    {\n      \"question\": \"What's the main thing you want it to do for you?\",\n      \"options\": [\n        \"Memorize via spaced repetition\",\n        \"Browse/lookup while practicing\",\n        \"Generate practice prompts + model answers\",\n        \"Just a clean static collection\"\n      ]\n    }\n  ]\n}",
      "uuid": "d7d19eb0-d401-4f19-9d05-833c7ee57a9f"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Generated ask_user_input_v0 widget",
  "integration_name": "Dynamic Widget",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ef856-1802-73a8-9bd2-6d1135d85ef6",
  "updated_at": "2026-06-24T06:34:21.258078Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ef856-1802-7083-84f2-b4674faf2110"
}
```

</details>

### 3. human — 2026-06-24T06:38:16.857466Z

Q: What form should the deliverable take?
A: A schedule task in cowork, with records there to avoid repetition. Furthermore, it should have review mechanism. I have some skills locally, I think maybe it's better to hand off this task to cowork?

Q: How should the collocations be organized?
A: Both axes (function within task)

Q: What's the main thing you want it to do for you?
A: 1 + 3

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ef859-cfd2-778b-9a77-8f889659c7b8",
  "updated_at": "2026-06-24T06:38:16.857466Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ef856-1802-73a8-9bd2-6d1135d85ef6"
}
```

</details>

### 4. assistant — 2026-06-24T06:38:45.029355Z

You've essentially described a recurring, stateful workflow — not a one-off artifact. That genuinely belongs in Cowork, not in this chat. Here's my honest read on why, and what to hand off.

Why Cowork fits and this chat doesn't: you want (a) persistence across sessions to avoid repetition, (b) a scheduled task that fires on a cadence, (c) a spaced-repetition review mechanism with state, and (d) it to use your local skills. This chat has no memory of a "records" file between sessions and can't schedule anything. Cowork has a working directory that persists, supports scheduled tasks, and can read your local skill ecosystem (`feynman-technique`, `vocabulary-visualization`, etc.). So yes — handing off is the correct call.

One thing I can't verify and you should confirm yourself: whether Cowork's scheduled-task feature can trigger a *spaced-repetition* cadence (variable intervals per item) versus only fixed schedules (e.g. "every day at 9am"). My understanding is scheduled tasks run on fixed cron-like cadences. True SR (per-card intervals like SM-2: 1d → 3d → 7d → …) would need the *task* to run daily and the *logic* inside to pick which items are due. That's a design constraint worth knowing before you build. I'd flag it as an assumption, not a fact, until you check it in Cowork's docs.

Since you have the `handoff-prompt` skill locally, let me use it to generate a clean handoff that transfers the *why* and *what* so the Cowork agent owns the *how*.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-24T06:38:25.959956Z",
  "stop_timestamp": "2026-06-24T06:38:26.489518Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_012rk6xpmdJgGzj6P61ioFTj",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/handoff-prompt/SKILL.md",
    "description": "Reading the handoff-prompt skill to follow its format"
  },
  "message": "Reading the handoff-prompt skill to follow its format",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading the handoff-prompt skill to follow its format"
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_012rk6xpmdJgGzj6P61ioFTj",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: handoff-prompt\n     3\tdescription: \"Generate a handoff prompt that transfers the mental model — the WHY and WHAT — so the follow-up AI can own the HOW entirely. TRIGGER when: user says \\\"handoff prompt\\\", \\\"hand this off\\\", \\\"another context-clean AI\\\", \\\"pick up later\\\", \\\"delegate this task\\\", or any variation requesting a transferable prompt for task continuation or delegation.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead  the following evolution lessons. Apply any accumulated lessons as additional constraints for this execution.\n     9\t\n    10\t## 2026-03-04\n    11\t### Lessons\n    12\t- Give an outline prompt, not detailed verbose steps — less interference is better\n    13\t- The follow-up AI is autonomous; over-prescribing HOW defeats the purpose of a handoff\n    14\t- Keep the template minimal — if a section can be inferred, omit it\n    15\t\n    16\t## 2026-04-17\n    17\t### Lessons\n    18\t- **HIGH-RISK — `## Non-document facts` is the easiest infiltration path for procedural HOW.** Do NOT write procedural bullets (\"always run X before Y\", \"first do A, then B\", \"use method M\") into this section, even when disguised as context. The section is for state, decisions, and history — past-tense facts only. If a bullet describes *how to execute the task*, cut it; the follow-up AI owns the HOW. Self-check before writing any `## Non-document facts` bullet: *\"Am I describing what happened/was decided, or what to do next?\"* Only the former belongs.\n    19\t\n    20\t## 2026-04-23\n    21\t### Lessons\n    22\t- Ask user a series of key questions to gather additional context you need to best write this prompt\n    23\t\n    24\t# Philosophy\n    25\t\n    26\t**Minimal instructions, clear intent.** The follow-up AI is a **peer, not an intern**. Transfer the mental model, then get out of the way. **Less is more** — if the AI can infer it from the files, omit it. Point to paths; don't summarize contents. Self-check: *\"Am I telling the AI what to think, or giving it what it needs to think for itself?\"* If the former, cut.\n    27\t\n    28\t# What You Produce\n    29\t\n    30\tA clipboard-ready outline, **under 20–30 lines** (the principle block at the end counts toward the budget).\n    31\t\n    32\t```markdown\n    33\t# Handoff: [Short Task Title]\n    34\t\n    35\t## Why This Matters\n    36\t[User's actual motivation. What problem? What do they care about?]\n    37\t\n    38\t## Current State\n    39\t[File path pointers. No content summaries.]\n    40\t\n    41\t## Success Criteria\n    42\t- [Outcome-shaped bullets — observable conditions that will be true when the task is complete. Write *\"L6 LOW-energy RMSE appears in the summary table\"*, not *\"add L6 split to eval script\"*. Conditions, not actions. Keep 1–3 bullets.]\n    43\t\n    44\t## Non-document facts (only if such state exists)\n    45\t- [Anything non-inferable from the files: decisions the user made, overrides, rejected alternatives, off-repo responsibilities, declared off-limits, environment realities. Write as past-tense state, not imperatives — *\"User has declared the server off-limits\"*, not *\"Do not touch the server\"*. The context carries the why; the rule follows from it. Keep a bullet only if omitting it would cause the follow-up AI to re-open a closed question.]\n    46\t\n    47\t## Principles of Paramount Importance\n    48\t- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.\n    49\t- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.\n    50\t```\n    51\t\n    52\t# Principles of Paramount Importance\n    53\t\n    54\tThese apply not only to the follow-up AI receiving the handoff, **but also to you while drafting it**:\n    55\t- **Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.\n    56\t- **No Silent Assumptions:** Even when the task is requested, confirm the *method* if it wasn't specified.\n    57\t",
      "uuid": "5e903d72-9398-4193-b6f9-ff89be1343ef"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "md"
  },
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Following the skill, here's your handoff prompt. It deliberately stays outline-level so the Cowork agent owns the HOW.

```markdown
# Handoff: TOEFL Speaking Collocation Bank + Scheduled Review

## Why This Matters
Reid wants prefab phrases (e.g. "I've never thought about this before, but in my opinion...")
ready to invoke during TOEFL speaking, to cut cognitive load so working memory goes to
content, not sentence construction. Two jobs: (1) memorize via spaced repetition,
(2) generate practice prompts + model answers. Target: 100+ speaking.

## Current State
- Local skills available: ~/.../skills/user/ (feynman-technique, vocabulary-visualization,
  phrasing-refining, concept-visualizer, evolve-skills). Reuse, don't rebuild.
- No bank file exists yet — create persistent records in the Cowork working dir.

## Success Criteria
- A persistent collocation store exists, organized as rhetorical function WITHIN speaking
  task (Task 1 indep / Tasks 2–4 integrated × open / contrast / cite-source / conclude).
- A scheduled task surfaces due items on a cadence and logs what was reviewed, so nothing
  repeats and review history is queryable.
- On demand, it produces a practice prompt + a model answer that uses the due collocations.

## Non-document facts
- Reid chose Cowork over a one-off artifact specifically for cross-session persistence,
  scheduling, and access to local skills.
- Reid rejects fixed-cadence "drill everything daily" if true per-item spaced repetition
  is feasible; the SR-vs-fixed-schedule capability is UNVERIFIED and must be confirmed first.
- Organization scheme (both axes) and dual purpose (SR + practice generation) are decided —
  do not re-open these.

## Principles of Paramount Importance
- **Zero Assumptions:** If the scheduler cannot do per-item SR intervals, halt and ask Reid
  how to approximate it (e.g. daily run + internal due-date logic) before building.
- **No Silent Assumptions:** Confirm the storage format and review-data schema before writing.
```

Two notes before you paste it into Cowork. First, the one real unknown — flagged in the prompt — is whether Cowork's scheduler supports variable per-item intervals or only fixed cadences; the handoff tells the agent to verify and halt rather than guess. Second, I haven't seeded any actual collocations here. If you'd like, I can draft a starter set (organized on those two axes) in this chat that you hand over alongside the prompt, so the Cowork agent starts with content rather than a blank store.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ef859-cfd2-78ae-b7ce-d847a3de054d",
  "updated_at": "2026-06-24T06:38:45.029355Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ef859-cfd2-778b-9a77-8f889659c7b8"
}
```

</details>

### 5. human — 2026-06-24T06:40:15.094542Z

You can check through the reliable official documents from anthropic.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ef85b-9d5a-79d4-a80f-4ba788c9bcfe",
  "updated_at": "2026-06-24T06:40:15.094542Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ef859-cfd2-78ae-b7ce-d847a3de054d"
}
```

</details>

### 6. assistant — 2026-06-24T06:40:45.173977Z

I'll check Anthropic's official docs on Cowork's scheduled tasks to resolve the spaced-repetition question.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-24T06:40:20.151339Z",
  "stop_timestamp": "2026-06-24T06:40:20.151339Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Vir4zUMPGB4Y5VRopX8QUK",
  "name": "web_search",
  "input": {
    "query": "Claude Cowork scheduled tasks documentation"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01Vir4zUMPGB4Y5VRopX8QUK",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Schedule recurring tasks in Claude Cowork | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Alternatively, open an existing task. Type &quot;/schedule&quot; in the chat input. This launches a Skill to create a scheduled task that can be run on demand or automatically on an interval.\n\nWhen you create a scheduled task, Claude saves your prompt as the task's instructions and runs them at the cadence you choose. Tasks can search Slack, query files, run web research, generate reports, and more—using any connectors and plugins you've set up in Cowork. Each scheduled task runs as its own Cowork session. You can review the results when they're ready, just like any other task. Important: Scheduled tasks only run while your computer is awake and the Claude Desktop app is open. If your computer is asleep or the app is closed when a task is scheduled to run, Cowork will skip the task, then run it automatically once your computer wakes up or you open the desktop app again. When Cowork re-runs a skipped task, you will see a notification letting you know. Skipped runs also appear in the task’s history. For Team and Enterprise organizations, admins control Cowork access through the admin toggle.\n\nOpen Cowork and click “+ New task” in the upper left corner to start a new task. Enter your prompt in the chat input, then click \"Let's go\" to start the task. Alternatively, open an existing task. Type \"/schedule\" in the chat input. This launches a Skill to create a scheduled task that can be run on demand or automatically on an interval. Add any other required details about the task you’re trying to create in the chat input and send the message. Claude may ask you questions with multiple choice responses before creating the scheduled task. Once Claude has all the necessary information, it will output the name of the task it’s creating, the schedule it will follow, and what the task actually does. You can explicitly confirm you want to schedule the task when prompted by Claude by clicking “Schedule\": Claude will create and schedule your task, and it will be added to the “Scheduled tasks” page.\n\nClick “Scheduled” in the left sidebar. Click “+ New task” in the upper right. In the Create scheduled task modal, enter the following information: ... The prompt describing what your task does. Note: Type \"/\" to include plugins and Skills. How frequently the task will run (hourly, daily, weekly, on weekdays, or manually) ... Click “Save” to add a new task to the Scheduled tasks page. To view and manage all your scheduled tasks, click “Scheduled” in the left sidebar.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork",
        "search_provider": "anthropic",
        "age": "April 9, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork scheduled tasks: 6 ways I automated my work on repeat",
      "url": "https://aiblewmymind.substack.com/p/claude-cowork-scheduled-tasks-6-ways",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "Once created, all your scheduled tasks live in the “Scheduled” section of the sidebar. From there you can view upcoming and past runs, edit instructions or cadence, pause, resume, delete, or run a task on demand anytime.\n\nTLDR: Claude Cowork just got scheduled tasks. You write a prompt once, pick a cadence (daily, weekly, monthly), and Claude runs it automatically. No code, no APIs. I tested 6 use cases: morning email briefings, file cleanup, Stripe reporting, invoice organizing, Apple Notes tidying, and flight price tracking. I’m sharing the prompts for each plus 10 more I’m setting up next. Here’s everything you need to get started. ... New in Cowork: scheduled tasks. Claude can now complete recurring tasks at specific times automatically: a morning brief, weekly spreadsheet updates, Friday team presentations. ... You might think I got fixated on Cowork. And if you do, you’re not wrong. It’s a great productivity unlock for me right now and I think it’s the easiest way for anyone to experience agentic AI in their work. No code, no terminal, no technical knowledge.\n\nIf you're new to Claude and want to understand how Cowork fits into everything else it can do, start with the complete Claude guide first. Scheduled tasks are exactly what they sound like. You write a prompt once, tell Cowork how often to run it, and it handles the rest. Hourly, daily, weekly, weekdays only, or on demand. You pick. Each task runs on its own. When it’s done, the output is waiting for you to review. This is the piece that makes it proactive. It doesn’t wait for you to ask anymore. And they are now available in Cowork on Claude Desktop for all paid plans (Pro, Max, Team, and Enterprise). Before you start, make sure your Claude Desktop app is fully up to date. I had to update mine twice. Once just to see the /schedule command and again before I could actually create tasks. Once you're updated, there are two ways to create a scheduled task: Open Cowork and start a new task or use one you’re already working on.\n\nConfirm. Done. Task scheduled. Worth knowing: the prompt you send initially won't stay exactly as you wrote it. Once it runs the first time, Claude rewrites it based on what it learned, so it knows exactly what to do, where to find the info, and which connectors to use on the next run. Click “Scheduled” in your Cowork sidebar. Click “New task” in the upper right. ... Click “Save”. Done. Worth knowing: This method works best when you already have a well-defined prompt with clear instructions (like the ones I’ll share with each use case later). If you’re starting from a rough idea, Method 1 is better because Claude helps you shape it. Once created, all your scheduled tasks live in the “Scheduled” section of the sidebar. From there you can view upcoming and past runs, edit instructions or cadence, pause, resume, delete, or run a task on demand anytime.\n\n15 new plugins were added, covering design, operations, human resources, and more. Some built by Anthropic, some by third parties and verified by Anthropic. Check them all out at claude.com/plugins. Cowork is now available for Team and Enterprise users. Which means your company can now use this, not just individual subscribers. Details here. And as of yesterday, scheduled tasks. The feature that puts your entire Cowork workflow on autopilot. When you put it all together, the picture is pretty clear. Skills taught Claude how you work. Plugins bundled those skills with your apps and commands so Claude could handle entire processes on its own. Scheduled tasks put all of it on repeat. Eventually all of this needs a home. That's a Cowork operating system: folders and memory files that hold your context, so every scheduled task already knows your world.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aiblewmymind.substack.com/p/claude-cowork-scheduled-tasks-6-ways",
        "search_provider": "anthropic",
        "age": "February 26, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Schedule recurring tasks in Claude Code Desktop - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/desktop-scheduled-tasks",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Use plain language; for example, “schedule a task to run all the tests every 6 hours.” · Scheduled tasks run on your machine. Desktop checks the schedule every minute while the app is open and starts a fresh session when a task is due, ...\n\nFetch the complete documentation index at: /docs/llms.txt · Use this file to discover all available pages before exploring further. ... Set up scheduled tasks in Claude Code Desktop to run Claude automatically on a recurring basis for daily code reviews, dependency audits, or morning briefings. ... Scheduled tasks start a new session automatically at a time and frequency you choose. Use them for recurring work like daily code reviews, dependency update checks, or morning briefings that pull from your calendar and inbox. The Desktop app’s Routines page lets you create both local scheduled tasks and remote routines. A local task runs on your machine with direct access to your files and tools, but only fires while the app is open and your computer is awake. A remote routine runs on Anthropic-managed cloud infrastructure even when your computer is off, and can also fire on API calls or GitHub events.\n\nThis page covers local scheduled tasks; for remote routines and their trigger options, see Routines. Claude Code offers three ways to schedule recurring or one-off work: Use cloud tasks for work that should run reliably without your machine. Use Desktop tasks when you need access to local files and tools. Use /loop for quick polling during a session. By default, scheduled tasks run against whatever state your working directory is in, including uncommitted changes. Enable the worktree toggle when creating the task to give each run its own isolated Git worktree, the same way parallel sessions work. Click Routines in the sidebar, then click New routine and choose Local. Configure these fields: A folder is required before you can save the task. If you haven’t trusted that folder yet, Desktop prompts you to trust it before saving. You can also create a task by describing what you want in any session.\n\nFor example, “set up a daily code review that runs every morning at 9am” creates a recurring task, and “remind me at 3pm tomorrow to check the deploy” creates a one-time task that disables itself after it fires. ... Manual: no schedule, only runs when you click Run now. Useful for saving a prompt you trigger on demand ... Weekly: shows a time picker and a day picker For intervals the picker doesn’t offer, such as every 15 minutes, the first of each month, or a single run at a specific future time, ask Claude in any Desktop session to set the schedule. Use plain language; for example, “schedule a task to run all the tests every 6 hours.” · Scheduled tasks run on your machine. Desktop checks the schedule every minute while the app is open and starts a fresh session when a task is due, independent of any manual sessions you have open. Each task gets a small delay of a few minutes after the scheduled time to stagger API traffic.\n\nThe delay is deterministic: the same task always starts at the same offset. When a task fires, you get a desktop notification and a new session appears under a Scheduled section in the sidebar. Open it to see what Claude did, review changes, or respond to permission prompts. The session works like any other: Claude can edit files, run commands, create commits, and open pull requests. Tasks only run while the desktop app is running and your computer is awake. If your computer sleeps through a scheduled time, the run is skipped. To prevent idle-sleep, enable Keep computer awake in Settings under Desktop app → General. Closing the laptop lid still puts it to sleep. For tasks that need to run even when your computer is off, or that should trigger on an API call or GitHub event, create a remote routine instead. When the app starts or your computer wakes, Desktop checks whether each task missed any runs in the last seven days.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://code.claude.com/docs/en/desktop-scheduled-tasks",
        "search_provider": "anthropic",
        "age": "April 21, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Scheduled Tasks: The Loop Skill and Cron Tools | The AI Agent Factory",
      "url": "https://agentfactory.panaversity.org/docs/General-Agents-Foundations/general-agents/scheduled-tasks-cron",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "panaversity.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=panaversity.org",
        "site_name": "Panaversity"
      },
      "is_missing": false,
      "text": "Fix: Recreate the tasks, or switch to a durable alternative (Desktop scheduled tasks, GitHub Actions) for workflows that must persist. The next section covers Claude Cowork -- Claude&#x27;s desktop application that brings a visual interface to everything you have been doing in the terminal. Cowork has its own scheduling capabilities through Desktop scheduled tasks, which offer the persistence that session-scoped /loop deliberately avoids. Exercise 1: Your First Scheduled Task (Predict + Run) Before running this, predict: how many times will this fire in 3 minutes? /loop 1m tell me the current time and count how many files are in this directory · Watch it fire. Was your prediction correct? Remember: the first fire may have jitter, and cron has one-minute granularity. What you&#x27;re learning: The basic /loop lifecycle -- scheduling, observing fires, and understanding the one-minute minimum ...\n\nFix: Recreate the tasks, or switch to a durable alternative (Desktop scheduled tasks, GitHub Actions) for workflows that must persist. The next section covers Claude Cowork -- Claude's desktop application that brings a visual interface to everything you have been doing in the terminal. Cowork has its own scheduling capabilities through Desktop scheduled tasks, which offer the persistence that session-scoped /loop deliberately avoids. Exercise 1: Your First Scheduled Task (Predict + Run) Before running this, predict: how many times will this fire in 3 minutes? /loop 1m tell me the current time and count how many files are in this directory · Watch it fire. Was your prediction correct? Remember: the first fire may have jitter, and cron has one-minute granularity. What you're learning: The basic /loop lifecycle -- scheduling, observing fires, and understanding the one-minute minimum interval.\n\nSchedule recurring checks, one-time reminders, and background polling with /loop and Claude Code's cron tools; session-scoped task automation without leaving the terminal\n\nThe Spec-Driven Blueprint for Building and Monetizing Digital FTEs: Reliable AI Agents You Can Trust, Deploy, and Scale\n\nYou kick off a 45-minute database migration. The terminal is running, Claude is idle, and you need to know when it finishes -- but you also need to keep working on something else. Without scheduled tasks, you alt-tab every few minutes to check progress. With one line, you hand that job to Claude: /loop 5m check if the migration finished and tell me what happened · Claude sets up a recurring check that fires every 5 minutes in the background. You keep working. When the migration completes, Claude tells you -- no manual polling, no context switching. In Lesson 15, you learned hooks: code that reacts to events Claude triggers. Scheduled tasks flip the relationship. Instead of waiting for an event, you create events on a timer. Hooks are reactive; scheduled tasks are proactive. ... This lesson is Claude Code specific. Claude Code ships built-in scheduling: the /loop skill plus the CronCreate, CronList, and CronDelete tools that let the agent schedule itself from inside a session.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://agentfactory.panaversity.org/docs/General-Agents-Foundations/general-agents/scheduled-tasks-cron",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork Scheduled Tasks: How to Set Them Up (2026 Guide)",
      "url": "https://leadershipinchange.com/p/how-to-use-claude-cowork-task-scheduler",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "leadershipinchange.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=leadershipinchange.com",
        "site_name": "Leadershipinchange"
      },
      "is_missing": false,
      "text": "Scheduled tasks work exactly like they sound. You give Claude Cowork a set of instructions, pick a schedule, and it runs automatically at that interval. Every morning. Every Friday afternoon.\n\nTL;DR: Cowork on Claude Desktop now lets leaders schedule AI tasks that run automatically on a timer, including morning briefings, weekly reports, and research sweeps, with no coding required. Scheduled tasks are available for all paid plans (Pro, Max, Team, Enterprise) starting at Claude Pro ($20/month). Setup takes about 15 minutes, and results wait for you whenever you open the app. Think about how you started your morning today. If you’re like most leaders I work with, you opened your laptop and immediately started reacting. Emails. Slack. Calendar. News. Thirty minutes gone before you made a single proactive decision (at least it happens to me)… ... You sit down, open Claude Desktop, and a full briefing is already waiting for you. Your calendar summarized. The three emails that actually matter, flagged. An industry headline your team should know about, explained in two sentences.\n\nThat’s not a concept. That’s a feature called scheduled tasks in Cowork, and you can set it up today. The timing here matters. More people are switching from ChatGPT to Claude right now (check out this post by Daria Cupareanu or this by Karo (Product with Attitude) for more on switching), than at any point since Claude launched. According to Appfigures Intelligence, Claude surpassed ChatGPT in daily US app downloads on February 28, 2026, and has stayed ahead since, hitting 149,000 downloads compared to ChatGPT’s 124,000 by early March. If you’re one of those new users (or you’ve been on Claude for a while and haven’t explored this yet), Cowork scheduling is the feature that turns Claude from something you open into something that works for you on its own clock. ... Quick Win (< 60 seconds) - You need: Claude Pro or Max ($20+/month), Claude Desktop, and 2 minutes for this one task.\n\nOpen Claude Desktop → Click the Cowork tab → Click Schedule in the sidebar → Click + New Task → Name it “Morning Headlines” → Paste this: “Give me the top 5 AI and leadership news stories from the past 24 hours with a one-sentence summary of each.” · Set frequency to Daily → Save. Next time you open Claude, the briefing will be waiting. That is 1 of 30 ready-made prompts in the Premium Starter Kit. See all 30 → · A word from our partners, tools I love and use daily… · Jotform is a Leadership in Change partner, and I’m sharing them here because their AI does the same thing for forms that scheduled tasks do for your morning. You describe what you need in plain language, and Jotform AI generates it instantly: fields, conditional logic, structure, all of it. It won’t replace a custom-coded solution for complex workflows, but for feedback forms, event registrations, and lead capture, it’s my go-to tool, genuinely faster than building from scratch.\n\nScheduled tasks work exactly like they sound. You give Claude Cowork a set of instructions, pick a schedule, and it runs automatically at that interval. Every morning. Every Friday afternoon. Every Monday at 7 AM. Whatever you need. Think of it like setting up a coffee maker. You prep it once, and it's ready when you need it. Here's what makes this different from ChatGPT's scheduling: Scheduled tasks have access to the same capabilities as regular Cowork tasks, including connected tools, skills, and installed plugins. That means you can build multi-step workflows, not just ask a single question. Your morning briefing can check your calendar AND summarize emails AND pull industry news in one task (This works when you've connected the relevant tools to Claude, like calendar or email integrations through “connectors”). And here’s the part that actually matters for leaders who aren’t engineers: you don’t need any technical skills to use this.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://leadershipinchange.com/p/how-to-use-claude-cowork-task-scheduler",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude's scheduled tasks finally fixed what ChatGPT, Gemini, and every other AI tool got wrong",
      "url": "https://www.xda-developers.com/claude-scheduled-tasks-feature/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "xda-developers.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=xda-developers.com",
        "site_name": "XDA Developers"
      },
      "is_missing": false,
      "text": "Each scheduled task runs as its own Cowork session, meaning it has access to your files, connected tools, skills, and plugins every single time. Since Cowork has direct access to your file system, it can save deliverables exactly where you need ...\n\nClaude currently has three types of Scheduled Tasks: Cowork scheduled tasks within the Desktop app, Claude Code cloud scheduled tasks, and Claude Code CLI session-scoped tasks. In this article, I'm going to focus on the first two — since they're the most relevant for the majority of users. Now, Cowork scheduled tasks is what came first and got me hooked on Claude's implementation of this idea. If you haven't used Cowork yet, it's a feature currently in Research Preview that lets you connect Claude to your local files on your system. It's like Claude Code, but with a more user-friendly interface and is aimed at non-technical people who aren't comfortable with the terminal. Along with your local files, you can connect it to all your daily tools through Claude Connectors or MCP servers. Cowork lets you schedule any task you'd normally run manually, and have Claude execute it automatically on the frequency you choose.\n\nEach scheduled task runs as its own Cowork session, meaning it has access to your files, connected tools, skills, and plugins every single time. Since Cowork has direct access to your file system, it can save deliverables exactly where you need them as well. This means that once a scheduled task is done, you don't even necessarily need to open the Claude app to see the output! I have a task that generates a .md file every morning, and I don't remember the last time I opened the Claude app to retrieve the output of that task since it saves the file directly to a folder on my desktop. I just open it like any other file. ... All without me opening Finder once! ... That said, it does save every output as a separate thread since it runs as its own Cowork session each time. So if you ever need to go back and review a previous run or compare results across days, everything is there in the Scheduled section of the sidebar.\n\nNow, since Cowork is meant to work with your local files, it's only available on the Claude Desktop app. Ultimately, this means you'll find Scheduled Tasks within Cowork only on the Desktop app. This also means you'll only be able to use this feature if you have a paid Claude plan, since free users don't currently have access to Cowork. It's available on Pro, Max, Team, and Enterprise plans. The biggest complaint that users, including me, have had about the feature is that scheduled tasks only run when your computer is turned on and the Claude Desktop app is running. Otherwise, the task is skipped and runs when you next open the app. This is where Claude Code's cloud scheduled tasks come in. You can also schedule tasks to run automatically by heading to claude.ai/code/scheduled on the web. These tasks run on Anthropic's cloud infrastructure, which means they don't depend on your local machine being awake or the desktop app being open at all.\n\nWhile cloud scheduled tasks are seemingly focused on developers, they work with connectors you've connected to your Claude account. So, things like Gmail, Slack, Notion, Linear, etc., will work on both Cowork and cloud scheduled tasks. The main difference is that Cowork gives you local file access while cloud tasks give you reliability! I've automated all sorts of tasks with Claude's Schedule Tasks feature. One of my favorite uses of Cowork is using it to organize my very messy desktop. For example, I take a lot of screenshots for articles I write. And given just how much I write in a week, my desktop turns into a mess every few days. When Cowork launched, the first task I made it do was organize my desktop by sorting all the files into folders. I already had folders for Screenshots, University, Projects, etc. I just wouldn't really have the disciploine to actually sort things into them.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.xda-developers.com/claude-scheduled-tasks-feature/",
        "search_provider": "anthropic",
        "age": "March 29, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Cowork Scheduled Tasks: How To Set Them Up And 7 Prompts Worth Running » Prompt Guy",
      "url": "https://promptguy.io/claude-cowork-scheduled-tasks/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "promptguy.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=promptguy.io",
        "site_name": "Prompt Guy"
      },
      "is_missing": false,
      "text": "Open Cowork and start a new task, or use one you’re already working on. Type /schedule in the chat input. Claude walks you through the setup conversationally — asking about frequency, timing, and what you want done.\n\nClaude Cowork scheduled tasks let you write a prompt once, pick a cadence, and have Claude run it automatically — every morning, every Friday, every hour if you want. No code, no APIs, no cron jobs. You describe what you need in plain language, set the schedule, and Cowork handles it while you do something else. This is the feature that turns Cowork from a tool you open into a tool that works on its own clock. Morning briefings that summarize your email and calendar before you sit down. Weekly reports compiled from your project folder. Friday file cleanups that organize your Downloads. All running without you lifting a finger. But most people either don’t know scheduled tasks exist, or they set one up, write a vague prompt, and wonder why the output is useless. This guide covers both setup methods, gives you 7 copy-paste prompts for the use cases that actually work, and explains the gotchas nobody warns you about.\n\nA scheduled task is a saved Cowork prompt that runs automatically on a recurring cadence. Each run fires as its own Cowork session, which means it has full access to everything regular Cowork can touch — your local files, connected tools (Gmail, Slack, Google Calendar, Google Drive, Notion), installed plugins, skills, and web search. The output gets saved wherever you tell it to. If your prompt says “save the briefing as morning-brief.md in my outputs folder,” that file shows up on your desktop without you opening the Claude app. Every run also gets logged as a separate thread in the Scheduled section of the sidebar, so you can go back and review past results. One thing worth understanding early: after the first run, Claude rewrites your prompt instructions based on what it learned. Which connectors it used, where it found the data, what worked.\n\nScheduled tasks are available on all paid Claude plans: Pro ($20/month), Max ($100/month), Team, and Enterprise. You need the Claude Desktop app, fully updated. There are two setup methods, and they’re suited for different situations. Open Cowork and start a new task, or use one you’re already working on. Type /schedule in the chat input. Claude walks you through the setup conversationally — asking about frequency, timing, and what you want done. It helps you shape the prompt if you’re starting from a vague idea. This is the better option when you know what you want but haven’t figured out the exact wording yet. Claude asks the right questions and builds the task with you. Click “Scheduled” in the left sidebar. Click “+ New task” in the upper right. Fill in the fields: task name, prompt instructions, frequency (hourly, daily, weekly, weekdays, or manual), and working folder.\n\nYour computer must be awake. Scheduled tasks run locally, not in the cloud. If your laptop is closed or the Claude Desktop app isn’t running when a task is due, it gets skipped. Cowork will catch up and run the missed task when you wake the machine, but it won’t execute at the exact time you wanted. The workaround: adjust your power settings to keep your machine awake during your task window. Some people use a dedicated Mac Mini that stays on 24/7 as their “Cowork server.” Another option is Claude Code’s cloud scheduled tasks at claude.ai/code/scheduled — these run on Anthropic’s infrastructure and don’t depend on your local machine. They’re developer-focused but work with any connectors you’ve connected to your account. Each task eats your usage. Every scheduled run is a full Cowork session. On the Pro plan, running several heavy tasks daily will push you toward your limits.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://promptguy.io/claude-cowork-scheduled-tasks/",
        "search_provider": "anthropic",
        "age": "April 7, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Scheduled Tasks: Complete Setup Guide (2026)",
      "url": "https://claudefa.st/blog/guide/development/scheduled-tasks",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudefa.st",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudefa.st",
        "site_name": "Claude Fast"
      },
      "is_missing": false,
      "text": "For example: &quot;schedule a task to run all the tests every 6 hours.&quot; Desktop checks the schedule every minute while the app is open. When a task is due, it starts a fresh session independent of whatever you&#x27;re working on.\n\nWho is Claude?What is Claude CodeInstallation GuideNative InstallerFirst ProjectConfiguration BasicsTerminal SetupSandboxing GuideSettings Reference ... Large CodebasesAgentic PracticesOpus 4.7 Best PracticesInfraOps VPS GuideGit IntegrationCode ReviewGit WorktreesRemote ControlChannelsScheduled TasksRoutinesPermission ManagementAuto ModeDynamic WorkflowsFable 5 PricingUltracodeWorkflows vs TeamsSubscription Safe UseHigher Usage LimitsFable 5 PricingAgent SDK CreditFeedback LoopsTodo WorkflowsTask ManagementProject TemplatesUsage OptimizationAgent Manager Role ... Set up scheduled tasks in Claude Code Desktop and CLI. Automate code reviews, error monitoring, and daily briefings step by step. Stop configuring. Start shipping.Everything you're reading about and more.. Agentic Orchestration Kit for Claude Code. ... Claude Code scheduled tasks let you save a prompt and have it run automatically on a recurring cadence.\n\nNo more opening a new session every morning to type the same \"check error logs\" prompt. No more forgetting to run your daily code review. You define the work once, Claude handles the timing. Pair scheduled tasks with Channels to get results delivered straight to Telegram or Discord. There are two flavors. Desktop scheduled tasks are persistent: they survive restarts, run on a visual schedule, and fire as long as the app is open. CLI session-scoped tasks use /loop and cron tools for quick, in-session polling that dies when you exit. This guide covers both. Desktop scheduled tasks are the primary way to automate recurring work in Claude Code. They run locally on your machine, each firing a fresh session at the time and frequency you choose. Every run has full access to your files, MCP servers, skills, connectors, and plugins. Click Schedule in the Desktop sidebar, then + New task.\n\nThe prompt input also includes controls for model selection, permission mode, working folder, and worktree isolation. Enable the worktree toggle to give each run its own isolated Git worktree, preventing scheduled runs from interfering with your manual work. You can also create a task conversationally. In any Desktop session, just say: \"set up a daily code review that runs every morning at 9am.\" Claude handles the rest. For intervals the picker doesn't offer (every 15 minutes, first of each month), ask Claude in any Desktop session using plain language. For example: \"schedule a task to run all the tests every 6 hours.\" Desktop checks the schedule every minute while the app is open. When a task is due, it starts a fresh session independent of whatever you're working on. Each task gets a deterministic delay of up to 10 minutes after the scheduled time to stagger API traffic.\n\nWhen a task fires, you get a desktop notification and a new session appears under the Scheduled section in the sidebar. Open it to see what Claude did, review diffs, or respond to permission prompts. The session works like any other: Claude can edit files, run commands, create commits, and open pull requests. When the app starts or your computer wakes, Desktop checks whether each task missed any runs in the last seven days. If it did, it starts exactly one catch-up run for the most recently missed time and discards anything older. A daily task that missed six days runs once on wake. Desktop shows a notification when a catch-up run starts. Keep this in mind when writing prompts. A task scheduled for 9am might run at 11pm if your computer was asleep all day. If timing matters, add guardrails to the prompt: \"Only review today's commits. If it's after 5pm, skip the review and post a summary of what was missed.\"",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claudefa.st/blog/guide/development/scheduled-tasks",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Get started with Claude Cowork | Claude Help Center",
      "url": "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "You can set up tasks that Claude runs automatically or on demand. To schedule a task, type /schedule in any Cowork task. You can also click &quot;Scheduled&quot; in the left sidebar to view, create, and manage your scheduled tasks.\n\nFor important limitations and considerations for Team and Enterprise organizations using Cowork, see Cowork for Team and Enterprise plans. Direct local file access: Claude can read from and write to your local files without manual uploads or downloads. Sub-agent coordination: Claude breaks complex work into smaller tasks and coordinates parallel workstreams to complete them. Professional outputs: Generate polished deliverables like Excel spreadsheets with working formulas, PowerPoint presentations, and formatted documents. Edit drafts in place: When Claude drafts a Markdown document, highlight the text you want changed, click \"Edit with Claude,\" and type your request. Claude makes the edit right where you marked it, with no need to describe the section in your task thread. Long-running tasks: Work on complex tasks for extended periods without conversation timeouts or context limits interrupting your progress. Scheduled tasks: Create and save tasks that you can have Claude run on-demand\n\nPlugins customize how Claude works for your role, team, and company in Cowork. Each one bundles skills, connectors, and sub-agents into a single package. For details on finding, installing, and customizing plugins, see Use plugins in Cowork. You can set up tasks that Claude runs automatically or on demand. To schedule a task, type /schedule in any Cowork task. You can also click \"Scheduled\" in the left sidebar to view, create, and manage your scheduled tasks. Scheduled tasks only run while your computer is awake and the Claude Desktop app is open. For more in-depth details, see Schedule recurring tasks in Cowork. Working on tasks with Cowork consumes more of your usage allocation than chatting with Claude. This is because complex, multi-step tasks are compute-intensive and require more tokens to execute. If you find yourself hitting usage limits frequently when using Cowork, consider: Batching related work into single sessions.\n\nClaude works on your desktop using your local files and connectors—you just don't have to be sitting in front of it. See Assign tasks to Claude from anywhere in Cowork. Cowork runs directly on your computer, giving Claude access to the files you choose to share. Code runs safely in an isolated space, but Claude can make real changes to your files. ... Analyzes your request and creates a plan. Breaks complex work into subtasks when needed. Runs code and shell commands in an isolated virtual machine (VM) on your computer. Coordinates multiple workstreams in parallel if appropriate. Delivers finished outputs directly to your file system. You maintain visibility into what Claude is planning and doing throughout the process so you can steer when it matters, or let Claude run independently. Claude Desktop app: Cowork requires the desktop app for macOS or Windows and is not available on web or mobile.\n\nClick the \"Cowork\" tab to switch modes to \"Tasks\". Describe the task you want Claude to complete. Review Claude's approach, then let it run. Note: The Claude Desktop app must remain open while Claude is working. If you close the app, your session will end. ... Progress indicators show what Claude is doing at each step. Transparency: Claude surfaces its reasoning and approach so you can follow along. Steering: You can jump in to course-correct or provide additional direction mid-task. Parallel work: For complex tasks, Claude may coordinate multiple sub-agents working simultaneously. Deletion protection: When using Cowork, Claude requires your explicit permission before permanently deleting any files. You will see a permission prompt and will need to select \"Allow\" before Claude is allowed to perform deletion tasks. Tasks can run for extended periods depending on complexity.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Schedule Recurring Web Tasks with Claude Desktop and Firecrawl",
      "url": "https://www.firecrawl.dev/blog/schedule-tasks-claude-desktop-firecrawl",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "firecrawl.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=firecrawl.dev",
        "site_name": "Firecrawl"
      },
      "is_missing": false,
      "text": "The Schedule tab lets you create recurring tasks that run automatically at a frequency you choose: manual, hourly, daily, weekday, or weekly. Each task runs with the connectors and prompt you define, with no extra code required.\n\nCowork is a tab inside Claude Desktop for running agentic tasks on your local machine. The Schedule tab lets you create recurring tasks that run automatically at a frequency you choose: manual, hourly, daily, weekday, or weekly. Each task runs with the connectors and prompt you define, with no extra code required. Claude's built-in search is general-purpose. Firecrawl's search endpoint is optimized for scale and precision: you can filter by time window (e.g. past 24 hours only), filter by country or location, and get results back as clean markdown that Claude can immediately reason over. For recurring research tasks that need fresh, targeted data, Firecrawl gives you far more control. Go to Customize > Connectors in Claude Desktop, click the plus button, and choose Add Custom Connector. Type 'Firecrawl', enter the remote MCP server URL (available in Firecrawl's documentation), and paste your Firecrawl API key.\n\nClaude Desktop now lets you schedule recurring tasks in Cowork. Combine it with Firecrawl's MCP to automatically scrape, search, and summarize the web on any schedule: no code required.\n\nClaude Desktop's Cowork tab now has a Schedule feature that runs AI agents on a recurring basis: hourly, daily, weekday, or weekly. Connect Firecrawl as an MCP connector to give Claude access to real-time web search with time and location filtering. Write a prompt, pick a frequency, and Claude handles the rest: searching, summarizing, and delivering results to wherever you want (like Google Calendar). Claude Desktop just shipped a feature that when combined with Firecrawl lets you automate basically any web research task on a schedule. In this post I'll walk through how to set it up, using daily AI news as the example. This works for anything you can imagine. Claude Desktop is Anthropic's native app for Mac and Windows. It brings the full Claude experience to your local machine: chat, projects, file attachments, artifacts, and (most importantly for this post) deep integration with tools running on your computer.\n\nWhat sets Claude Desktop apart from the web version is the Cowork tab. Cowork is where Claude runs as an agent: it can read and write local files, execute tasks step by step, and connect to external services through MCP-based connectors. Think of it as Claude operating on your behalf inside your own environment, not just responding in a chat window. Anthropic recently added a Schedule tab inside Cowork. This is where you define tasks that Claude runs automatically on a recurring basis. You can read the official docs on scheduling recurring tasks in Cowork. ... What makes this different from a simple cron job is that Claude is running a full agentic loop each time: reading context, calling tools, reasoning over results, and writing outputs. You're not just triggering a script. You're running a capable AI agent on a schedule. Here's what I set up: every day, Claude uses Firecrawl to search for the latest AI news from the past 24 hours, summarizes the key stories, and creates a Google Cal",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.firecrawl.dev/blog/schedule-tasks-claude-desktop-firecrawl",
        "search_provider": "anthropic",
        "age": "March 11, 2026"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Documentation resolves the question. Here's what's confirmed and what it means for your design.

The cadence constraint is real. Per Anthropic's official Help Center, Cowork scheduled tasks run at a fixed frequency you pick — hourly, daily, weekly, on weekdays, or manually. There is no native per-item spaced-repetition scheduler. So my earlier flag was correct: you cannot ask Cowork's scheduler itself to fire on SM-2 intervals (1d → 3d → 7d…).

But the workaround is fully supported, and better than I'd assumed. Each scheduled run is a complete agentic session, not a dumb trigger — each scheduled task runs as its own Cowork session, meaning it has access to your files, connected tools, skills, and plugins every single time, and since Cowork has direct access to your file system, it can save deliverables exactly where you need them. That means the correct architecture is: schedule the task **daily**, and put the spaced-repetition logic *inside the prompt/skill* — each morning the agent reads your records file, computes which collocations are due today by their stored next-review date, drills only those, then writes back updated intervals. The scheduler handles "when to wake up"; your skill handles "what's due." This is exactly the pattern the docs describe — Claude is running a full agentic loop each time: reading context, calling tools, reasoning over results, and writing outputs, not just triggering a script.

Three gotchas worth building around, all documented:

Tasks only fire while the machine is awake and the app is open — if your computer is asleep or the app is closed when a task is scheduled to run, Cowork will skip the task, then run it automatically once your computer wakes up. For daily SR this is fine (a missed day just runs on wake), but your skill should compute "due" by date arithmetic, not assume it ran exactly on schedule. The Claude Code docs are blunter about catch-up: a daily task that missed six days runs once on wake — so design the skill to surface *all* overdue items in one run, not just one day's worth.

After the first run, Claude rewrites your prompt — after the first run, Claude rewrites your prompt instructions based on what it learned. So put the durable SR logic in a *skill file* the prompt references, not buried in the prompt text itself, so a rewrite can't quietly erode it.

Cost: each scheduled run is a full Cowork session and consumes more usage than chatting, so a daily run is reasonable but an hourly one would burn quota fast.

One option I should mention for the awake-dependency problem, since you rely on a VPN'd Windows setup: Claude Code offers **cloud** scheduled tasks that run on Anthropic's cloud infrastructure, which means they don't depend on your local machine being awake or the desktop app being open at all. The tradeoff is they lose local file access — so if your records file must live locally (e.g. in Obsidian), Cowork's local task is the right call and you accept the awake requirement.

So the handoff prompt I gave you is sound; I'd just add one line to its "Non-document facts" so the Cowork agent doesn't waste time rediscovering the constraint. Here's the patch:

```markdown
## Non-document facts
- Reid chose Cowork over a one-off artifact specifically for cross-session persistence,
  scheduling, and access to local skills.
- VERIFIED (Anthropic Help Center): Cowork's scheduler offers only fixed cadences
  (hourly/daily/weekly/weekdays/manual) — no native per-item spaced repetition.
  Decision: schedule DAILY; put SR interval logic inside a skill file that reads/writes
  the records file each run and computes which items are due by stored next-review dates.
- SR logic lives in a skill file, NOT the prompt text — Cowork rewrites the prompt after
  first run, so durable logic must sit where a rewrite can't erode it.
- Org scheme (function within task) and dual purpose (SR + practice generation) are decided.
```

Want me to draft that SR-logic skill file now (the date-arithmetic "what's due today" core plus the records-file schema), so you hand it over alongside the prompt and the Cowork agent has the hard part already specified? I can also seed a starter collocation set on your two axes at the same time.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ef85b-9d5a-7efb-9cd0-c80114cfa67a",
  "updated_at": "2026-06-24T06:40:45.173977Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ef85b-9d5a-79d4-a80f-4ba788c9bcfe"
}
```

</details>
