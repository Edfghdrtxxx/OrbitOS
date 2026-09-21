# Evolution Log

## 2026-09-16 (background poll default)
### Lessons
- User feedback often never reached the agent because open-verify finished and the agent chatted **without** a live `lavish-axi poll`. Chrome “Your agent is not listening” is exactly that gap.
- User instruction: starting a **background** poll so the next Send reaches the agent must be the **default**, not an afterthought.
### Fixes
- After CDP verify **pass** on any session that expects Send: immediately `npx -y lavish-axi poll <html>` non-blocking. Smoke-only (no feedback expected) may skip. Restart background poll after handling feedback if the session stays open. SKILL open-verify steps updated.

## 2026-09-16 (send button no-op)
### Lessons
- Primary hang: lavish-axi **0.1.67** chrome-client `sendQueued` → `requestSnapshot("submit")` waits forever for iframe `lavish:snapshot`. Dead/409 iframe → no POST; queue lives only in tab sessionStorage; poll never sees it; after 10s `SEND_STALLED_COPY` only. **0.1.68** (#334): `SNAPSHOT_REQUEST_TIMEOUT_MS=5000`, submit with empty snapshot, request ids block double-submit. **0.1.69** (#339) also settles by `prompt_id`. Requirement: run **≥ 0.1.68** (prefer 0.1.69). `npx -y lavish-axi` should be latest; a stale global binary can win on PATH — check `npx -y lavish-axi --version`.
- Still in 0.1.69 (do not claim fixed):
  - **TOKEN-DROP-SILENT:** chrome drops all iframe postMessages when `msg.artifact_load_token !== artifactLoadToken` (incl. `queuePrompt` / `sendQueuedPrompts`). Template still shows Queued. No mismatch UX. Symptom: iframe Queued, no chrome Conversation pill.
  - **MULTI-TAB / parent+child `--reopen`:** `beginArtifactLoad` increments `artifact_revision`, orphans tokens, 409 “no longer current”; chips in a stale tab not in `state.json`. High rev thrash (7–12) is this.
  - **UX-QUEUE-NOT-SEND:** in-page Queue/template buttons only `queuePrompt`; chrome `#send` POSTs. Do not label queue-only buttons “Send”.
  - **EMPTY-QUEUE:** Send with empty `queued[]` shows a brief hint; button is not disabled.
- **SUPERSEDES 2026-09-16 (CDP + sandbox) queue-share.** Sandbox without `allow-same-origin` still blocks parent `/eval` of iframe `window.lavish`. FALSE: a separate artifact tab does **not** share the chrome queue. `queuePrompt` is `parent.postMessage`; top-level tab `parent===self`; host requires `event.source===frame.contentWindow`. Do not `form.requestSubmit()` in a detached tab expecting host Send to deliver. Prefer user click in host, or postMessage from the **live iframe** only.
- Recovery: one session tab; interview child owns `--reopen`; `poll` or read `~/.lavish-axi/state.json`; host Ask fallback. Ended sessions can still hold undelivered prompts in state.json (end without poll).

### Fixes
- Before relying on Send: confirm lavish-axi ≥ 0.1.68; if older, upgrade or force `npx -y lavish-axi` latest (ignore stale global).
- Iframe Queued + no pill → token/stale: close extra `session/<key>` tabs → one `--reopen` (child only) → re-queue in the live iframe. Recover copy from UI/state; Ask if delivery is still broken.
- Keep in-page buttons **Queue…**; chrome **Send to Agent** delivers. Empty Send is a hint, not a hang.
- Do not CDP-queue via a separate artifact tab.

## 2026-09-16 (template)
### Lessons
- Vault starter HTML lives at `references/artifact-template.html`. SKILL.md must point agents there (theme + SECTION markers + Kun whiteboard recipe). Shipping the file without a skill-body link means agents never discover it.
- Whiteboard smoke feedback (session ended before poll): user said the subject Mermaid → host Excalidraw path is much better; asked whether skill body mentioned the template — it did not until this entry/SKILL patch.
- Always `lavish-axi poll` (or read state) before assuming no user feedback; ending a session without poll drops queued notes until recovered from `~/.lavish-axi/state.json`.

## 2026-09-16 (CDP + sandbox)
### Lessons
- The artifact iframe in the Lavish host page is `sandbox` WITHOUT `allow-same-origin`: parent-frame `/eval` cannot read its DOM or `window.lavish`. Separate-tab open of iframe `src` (`/artifact/<session>/index.html?artifact_revision=…&artifact_load_token=…`, from `iframe#artifact`) is **inspect-only** — `window.lavish` + `__lavishTemplate` are live there. **SUPERSEDED (queue share):** that tab does **not** share the server-side / chrome queue — see 2026-09-16 (send button no-op). Host chrome buttons (Send to Agent / Send & End) remain clickable in the **session** tab via `/eval` + `el.click()`.
- **SUPERSEDED queue recipe:** do **not** `form.requestSubmit()` in a separate artifact tab expecting host Send to deliver. `queuePrompt` uses `parent.postMessage`; top-level tab `parent===self`; host requires `event.source===frame.contentWindow`. Prefer user click in host, or postMessage from the live iframe only. Poll still: `lavish-axi poll` → `status: feedback` with `prompts[]`; `session_ended: true` + `ended_by: user` when the user ends it.

## 2026-09-16
### Lessons
- After `lavish-axi <html>` reports `status: opened`, do not assume the reviewer can see the page. Load `skill://web-access` and prove via Chrome CDP (proxy `localhost:3456`) that a tab exists whose URL/title/DOM matches **this** artifact (path, lavish session, or distinctive title/h1) and the document is loaded (not blank/error). Prefer `/targets` first; `/new` only if missing.
- `lavish-axi poll` staying silent is not proof the page is on screen. A live poll can outlive a closed or never-shown window. Do not start/continue poll until CDP verify succeeds.
- After HTML edits, `--reopen`, or refresh that should show the page: re-verify via CDP. Verify once after open; reopen only on failed verify; max 2 reopen attempts then report failure. Do not spam relaunch loops.
- Once CDP verify **passes** (matching tab loaded) OR the user confirms the page is visible, **stop**. Do not reopen, re-launch, or re-verify in a loop. One pass is enough for smoke tests; cleanup at most one close of the test tab.
- Smoke/open-verify tests must not long-poll and must not treat “agent not listening” as a reason to relaunch.
- Interview success path: after verified open, poll as usual; before telling parent “waiting on user”, re-check the tab is still present once.
- Supersedes the earlier same-day “check a desktop/Lavish window exists” rule — visual window presence is not enough; web-access CDP match is required.
- Composer UI is not a second product mode. Chrome always has **Send to Agent** + **Send & End**. Queue chips (Conversation pills) appear only while unsent prompts exist (`queuePrompt`, annotations, layout-issue batch, whiteboard Queue feedback). `window.lavish.sendQueuedPrompts()` skips the chip wait and sends immediately.
- Prefer Kun/CLI canonical: input playbook `queuePrompt` then user **Send to Agent**. After CDP verify, note **queued multi-message** vs **single send**. Poll/parse both; never relaunch because chips are missing/present. Interviews: one send pattern for the whole session.

### Fixes
- Interview 2026-09-16 (formula pick counts): CLI said opened and poll kept running, but no Lavish/browser window was on the desktop. User: “You have not launched that page. Evolve the skill that you should check if the page still exists.”
- Same day, interview worker kept “launching pages for review” but the user could not rely on the page being open; prior desktop-window check was insufficient. User correction: prove the page with **web-access** (Chrome CDP), not CLI `status: opened` or a silent poll.
- User 2026-09-16: “Every time the queue messages are different: sometimes they show queue one by one, sometimes they have only one send button without queue this one.” Cause: agents mixed input-playbook queue-then-Send (e.g. gre-miss, practice-gre-set) with auto-`sendQueuedPrompts()` (e.g. formula-pick-interview). Both UIs are valid; skill now prefers Kun queue-then-Send and forbids mid-session thrash.

## 2026-09-16 (stale artifact load + specialist agent)
### Lessons
- 409 HTML “This artifact load is no longer current. Reload Lavish to continue.” means the iframe’s `artifact_load_token` / `artifact_revision` no longer match the server’s active load. Root cause in practice: **multiple host session tabs** and/or **multi-reopen while old tabs stay open** — each `beginArtifactLoad` does `artifact_revision + 1` and orphans prior tokens.
- Fix: close extra `http://127.0.0.1:<port>/session/<key>` tabs → **one** `--reopen` (or open) → CDP-verify iframe `src` revision matches `~/.lavish-axi/state.json` → poll. Never parent+child reopen race.
- Conversation chips visible only in a stale host tab may **not** be in `state.prompts` after reopen; recover text from the UI if needed and put it on the page as a callout.
- Queue-reload flakiness: host Ask is a valid interview fallback when Lavish delivery is broken mid-session.
- Interview dispatch is now specialized agent `lavish-interview` (`~/.omp/agent/agents/lavish-interview.md`, `autoloadSkills: [lavish]`). Main must not load this skill for interviews; structured `local://` payload + short task only.
- Parent+child reopen race (this session): main debugging with `--reopen` while interview subagent also reopened → revision thrash. Rule: interview child owns the Lavish session; parent only hubs.
- **Main skill isolation (user 2026-09-16):** main must not read `skill://lavish` **or** `skill://web-access` for interviews — success **or** failure. Child autoloads lavish and owns CDP verify. Child failure → host **Ask** (internal interview tool) with the same decision shape — **not** main loading those skills to diagnose/re-drive delivery. Hub-first while child still owns the session; no parallel “help” CDP.

## 2026-09-16 (main must not pre-load lavish/web-access)
### Lessons
- Gap: ban covered `skill://lavish` but not `skill://web-access`; main could still burn context “helping” CDP while child owned the interview.
- Rule: success path = payload + dispatch only. Main **never** loads lavish/web-access for interviews.
- Logic defect fixed same day: failure exception is **host Ask**, not “main may load skills to diagnose.” DIY recovery via lavish/CDP on main recreates the isolation bug.
### Fixes
- `preference_interview_api.md`, AGENTS.md Interview API, this SKILL who-loads + open-verify actor, `lavish-interview` agent ownership, `reflect` interview channel — failure → Ask only.
