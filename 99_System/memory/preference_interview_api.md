---
name: preference_interview_api
description: Main-agent Interview API — structured local:// payload in, dispatch agent lavish-interview, structured decisions out; main-agent ban: AGENTS.md · User interviews
type: preference
saved_at: 2026-09-16
updated: 2026-10-03
---

# Interview API (main → lavish-interview)

**When this fires:** an explicitly requested visual interview, or a necessary decision that requires visual inspection or annotation (especially diagram relationships, placement, or connections). Ordinary questions use chat or host Ask. Multiple options, jargon, or stakes alone do not trigger this route.

This file is the **main-agent contract** (in/out + dispatch). Implementation details live on agent `lavish-interview` and skill `lavish` — **not** on main.

## Mental model

1. **Irreducible only** — investigate first (`feedback_investigate_over_ask`). Ask only for missing intent, preference, constraint, or approval evidence that the files and request cannot resolve.
2. **Dispatch specialized agent** — `agent: "lavish-interview"` (user agent: `~/.omp/agent/agents/lavish-interview.md`). That agent is **`blocking: true`**, **autoloadSkills: [lavish]** (child loads lavish → web-access for CDP), and owns CLI, playbooks, HTML, open, CDP verify, poll, parse.
3. **Main skill ban:** AGENTS.md · User interviews.
4. **Child failure → internal interview fallback** — when the child fails or cannot deliver decisions, main does **not** load lavish/web-access to diagnose or re-drive delivery. Trigger host **Ask** (omp `ask` / host AskUserQuestion) with the **same decision shape** as the payload (options+stakes or findings Fix/Leave). Prefer a brief hub nudge to the child first if it still owns the session and might self-recover; if still no decisions → Ask. Examples that trip fallback:
   - yield `status: failed_lavish` | `abandoned`
   - child error/cancel with no usable decisions
   - hub: child blocked on open/CDP/poll and cannot self-recover
5. **For an actual visual interview, Main = Interview API only**
   - **In:** structured payload file + short task (+ optional `outputSchema` override).
   - **Out:** structured decisions (and raw feedback if needed). Then continue the big picture.
6. **Explain without assuming** — the specialist must understand question + friction, carry intent/big picture onto the page, and define terms/stakes for a smart non-insider. Terse chat option labels are the failure mode.
7. **Channel:** Lavish HTML via `lavish-interview` only for an explicitly requested visual interview or a decision requiring visual inspection/annotation. Host Ask is the ordinary fallback for necessary questions and the same-decision fallback when an actual visual child fails. A diagram title or export format can be asked directly when no visual inspection is needed.
8. **Session ownership while interviewing:** AGENTS.md · User interviews.

## Standard payload (structured local file)

1. Copy `99_System/Templates/Interview_API_Payload.md` (or write equivalent sections).
2. Write `local://interview-<topic>.md` (or vault scratch if you need a durable path).
3. Dispatch (agent is blocking — parent waits for yield):

```json
{
  "context": "User interview only. Do not implement product changes.",
  "tasks": [
    {
      "name": "LavishInterview",
      "agent": "lavish-interview",
      "task": "Interview per local://interview-<topic>.md. Return structured decisions only."
    }
  ]
}
```

When the decision shape differs from the agent default, pass a **real** JSON Schema, for example findings dispositions:

```json
{
  "context": "Reflect findings interview. Do not implement.",
  "tasks": [
    {
      "name": "ReflectFindings",
      "agent": "lavish-interview",
      "task": "Interview per local://interview-reflect-<topic>.md. Return dispositions for every finding ID.",
      "outputSchema": {
        "type": "object",
        "required": ["dispositions", "status"],
        "properties": {
          "dispositions": {
            "type": "object",
            "additionalProperties": { "type": "string", "enum": ["fix", "leave"] }
          },
          "notes": {
            "type": "object",
            "additionalProperties": { "type": "string" }
          },
          "raw_feedback": { "type": "string" },
          "status": {
            "type": "string",
            "enum": ["ok", "failed_lavish", "abandoned"]
          }
        }
      }
    }
  ]
}
```

Fixed sections: Why / Grounded state / Options+stakes **or** Findings Fix/Leave / Glossary / Constraints / Desired decision shape.

## Agent contract (thin)

- **Name:** `lavish-interview`
- **Location:** user `~/.omp/agent/agents/` (all omp projects on this Mac)
- **Scope:** this agent runs user interviews. Lavish routing: AGENTS.md · User interviews.
- **Model:** `google-antigravity/gemini-3.8-flash:high`, fallback `xai-oauth/grok-4.6:high`
- **blocking:** `true` (parent waits under async task mode)
- **autoloadSkills:** `[lavish]`
- **Default output** on agent; parent still passes real `outputSchema` when shape differs
- **Not** in thin v1: tool restrict list, pinned thinking essay, duplicated open-verify essay in agent body (skill remains SoT)

## Reflect visual-interview defaults (pilot)

- Findings: all on one page (no cap of 4).
- Payload: `Interview_API_Payload.md` Findings table (stable ID, issue, location, consequence).
- For an actual visual interview, Fix/Leave via input playbook; on Send → **apply authorized fixes immediately** (main applies from subagent result).
- Direct concise findings and Fix/Leave decisions are allowed when visual inspection is unnecessary; visual interviewing remains optional under the shared criteria. Fallback Ask keeps the same decision shape if an actual visual interview is unavailable.

## Related

- AGENTS.md · User interviews (Interview API)
- Agent: `lavish-interview` · Skill: `lavish` (implementer only) · `reflect`
- Template: `99_System/Templates/Interview_API_Payload.md`
- `feedback_investigate_over_ask.md`, `feedback_necessity_check.md`
