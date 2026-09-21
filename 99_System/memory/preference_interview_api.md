---
name: preference_interview_api
description: Main-agent Interview API — structured local:// payload in, dispatch agent lavish-interview, structured decisions out; main never loads skill://lavish or skill://web-access for interviews; child failure → host Ask fallback
type: preference
saved_at: 2026-09-16
updated: 2026-09-16
---

# Interview API (main → lavish-interview)

**When this fires:** about to ask the user a multi-option choice, method fork, findings triage, or any decision that needs briefing/jargon — or about to open host Ask for those shapes.

This file is the **main-agent contract** (in/out + dispatch). Implementation details live on agent `lavish-interview` and skill `lavish` — **not** on main.

## Mental model

1. **Irreducible only** — investigate first (`feedback_investigate_over_ask`). No interview for discoverable facts.
2. **Dispatch specialized agent** — `agent: "lavish-interview"` (user agent: `~/.omp/agent/agents/lavish-interview.md`). That agent is **`blocking: true`**, **autoloadSkills: [lavish]** (child loads lavish → web-access for CDP), and owns CLI, playbooks, HTML, open, CDP verify, poll, parse.
3. **Main skill ban (absolute for interviews)** — main MUST NOT `read skill://lavish` or `skill://web-access` (or their `evolution.md` / references) for interviews — success **or** failure. Also MUST NOT write interview HTML, run `lavish-axi`, CDP-verify, poll, reopen the Lavish session, or open parallel session tabs “to help.” Main = **payload in → dispatch → decisions out** only. Curiosity / parallel verify / DIY recovery via those skills is not allowed.
4. **Child failure → internal interview fallback** — when the child fails or cannot deliver decisions, main does **not** load lavish/web-access to diagnose or re-drive delivery. Trigger host **Ask** (omp `ask` / host AskUserQuestion) with the **same decision shape** as the payload (options+stakes or findings Fix/Leave). Prefer a brief hub nudge to the child first if it still owns the session and might self-recover; if still no decisions → Ask. Examples that trip fallback:
   - yield `status: failed_lavish` | `abandoned`
   - child error/cancel with no usable decisions
   - hub: child blocked on open/CDP/poll and cannot self-recover
5. **Main = Interview API only**
   - **In:** structured payload file + short task (+ optional `outputSchema` override).
   - **Out:** structured decisions (and raw feedback if needed). Then continue the big picture.
6. **Explain without assuming** — the specialist must understand question + friction, carry intent/big picture onto the page, and define terms/stakes for a smart non-insider. Terse chat option labels are the failure mode.
7. **Channel:** Lavish HTML via `lavish-interview` when multi-option **or** stakes/jargon need explanation. Host Ask when Lavish cannot run (child failed / queue-reload broken), or for **1-bit** missing input with no jargon.
8. **Session ownership while interviewing:** main does **not** `--reopen` the HTML, rewrite the artifact, or open parallel Lavish session tabs while the child owns it. Debug via `hub` to the child; the child alone reopens. Main never takes over CDP/lavish to “fix” the page.

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
- **Scope:** interview-only; lavish skill nearly exclusive to interviews
- **Model:** `google-antigravity/gemini-3.8-flash:high`, fallback `xai-oauth/grok-4.6:high`
- **blocking:** `true` (parent waits under async task mode)
- **autoloadSkills:** `[lavish]`
- **Default output** on agent; parent still passes real `outputSchema` when shape differs
- **Not** in thin v1: tool restrict list, pinned thinking essay, duplicated open-verify essay in agent body (skill + evolution remain SoT) — aside from stale-load + parent-race rules

## Reflect defaults (pilot)

- Findings: all on one page (no cap of 4).
- Payload: `Interview_API_Payload.md` Findings table (stable ID, issue, location, consequence).
- Fix/Leave via input playbook; on Send → **apply fixes immediately** (main applies from subagent result).
- Fallback Ask keeps the same A/B shape if Lavish is unavailable.

## Related

- AGENTS.md · User interviews (Interview API)
- Agent: `lavish-interview` · Skill: `lavish` (implementer only) · `reflect`
- Template: `99_System/Templates/Interview_API_Payload.md`
- `feedback_investigate_over_ask.md`, `feedback_necessity_check.md`
