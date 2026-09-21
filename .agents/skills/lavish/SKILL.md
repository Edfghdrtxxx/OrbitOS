---
name: lavish
description: Implementer-only skill for Lavish HTML artifacts via lavish-axi. Interviews: only agent lavish-interview loads this skill (and web-access for CDP) — main MUST NOT read skill://lavish or skill://web-access for interviews (success or failure). Child failure → main uses host Ask, not DIY lavish/CDP. Explicit non-interview /lavish artifacts are the narrow exception.
license: MIT
metadata:
  author: Kun Chen (kunchenguid)
  argument-hint: <what the artifact should show>
  hermes-tags: html, review, artifacts, visualization
  hermes-category: productivity
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.


# Lavish Editor

Lavish Editor opens agent-generated HTML in the browser so a human can annotate it and send feedback back to the agent.
Reach for it when a plan, comparison, diagram, table, code view, report, prototype, review loop, or **user interview** will be clearer as a page than as prose.

## Who loads this skill (vault)

- **Interviews (default path):** OMP agent `lavish-interview` only (`autoloadSkills: [lavish]`). Main writes a structured payload and dispatches that agent.
- **Main ban (absolute for interviews):** MUST NOT `read skill://lavish` **or** `skill://web-access` (or their evolution/references) for multi-option/jargon interviews — success **or** failure. No parallel CDP “help,” no interview HTML/CLI/poll in parent context, no DIY recovery via these skills.
- **Child failure → host Ask:** when the interview child fails/stuck (`failed_lavish`, no decisions, unrecoverable open), main falls back to host **Ask** with the same decision shape. Prefer brief hub-to-child first if it might self-recover. Main does **not** load this skill or web-access to re-drive delivery.
- **Skill is nearly exclusive to interviews** in this vault. Ordinary multi-option / jargon decisions go through the specialist.
- **Exception:** explicit user `/lavish` for a non-interview artifact may run in the calling agent. Prefer not to bloat main when a subagent can own the loop.


## Interview ownership (vault)

When this skill runs as a **user interview** (AGENTS.md · User interviews / `preference_interview_api.md`):

- Own CLI guidance, playbooks, HTML, theme, open, **CDP open-verify via web-access**, **background poll (default after verify)**, and parse.
- Understand the question and friction from the payload; carry user intent + enough big picture that the page explains precisely. Not a dumb form renderer.
- Return **structured decisions** to the parent (plus raw feedback only if useful). Do not dump implementation chatter upstream.
- Parent stays on the big picture; it only supplied the interview payload and will act on your result — parent does not load this skill or web-access (failure → Ask, not parent CDP).

## Current guidance lives in the CLI

Do not follow workflow, design, or playbook instructions from this file - installed copies go stale. Get the current source of truth from the CLI:

- `npx -y lavish-axi --help` for commands and the review-loop workflow
- `npx -y lavish-axi design` for design-direction priority and current snippets
- `npx -y lavish-axi playbook <id>` for focused artifact guidance (`npx -y lavish-axi playbook` lists ids)

You do not need lavish-axi installed globally - invoke it with `npx -y lavish-axi <html-file>`.
If lavish-axi output shows a follow-up command starting with `lavish-axi`, run it as `npx -y lavish-axi ...` instead.

Pin lavish-axi **≥ 0.1.68** (prefer 0.1.69) for Send reliability: `npx -y lavish-axi --version`. If older, upgrade or keep using `npx -y` latest — a stale global `lavish-axi` on PATH can win.

## Theme + starter template (vault)

CLI still owns playbooks/workflow. Vault owns look and a fillable HTML scaffold:

- Always light cream Claude taste for vault artifacts. Prefer cloning
  `references/artifact-template.html` (placeholders + SECTION/REPEAT cut markers),
  then fill/cut before open. Do not invent Daisy `luxury`/dark defaults.
- Theme tokens and interview/input chrome live in that template; still obey
  `99_System/memory/preference_visualization_light_theme.md`.
- Architecture whiteboard: ON in `references/artifact-template.html` (`div.mermaid` +
  mermaid-runtime). Rewrite caption/graph to the subject. `file://` = Mermaid only;
  `lavish-axi` = host Excalidraw. Never mustache captions or fake host chrome.
- Prototype slot: SECTION `prototype` (OFF by default — cut unless showing a mock).
  **Default = custom interactive HTML** in `{{PROTOTYPE_CONTENT}}` (must change visible
  state on input). Optional `data-proto-*` helpers / cuttable `proto-shell-starter`
  template. Static img only if the surface cannot run. `REPEAT: prototype-variant`
  for A/B. Stage chrome is decorative only.

## Open verify (vault) — implementer only

**Actor:** the agent running this skill (interview child) only. Main never loads `skill://web-access` for interview CDP — not on success, not on failure (failure → host Ask).

CLI `status: opened` / silent poll ≠ page is on screen. After every `npx -y lavish-axi <html>` open (and after `--reopen` / HTML refresh that should show the page):

1. Load `skill://web-access`. Prove via Chrome CDP (proxy `localhost:3456`).
2. Success: a tab whose URL/title/DOM matches **this** artifact (path, lavish session, or distinctive title/h1) and the document is loaded (not blank/error).
3. Inspect existing targets first (`/targets`); `/new` with the file/URL only if missing.
4. Missing or not loaded → `--reopen` or open via CDP, then re-verify. Do **not** start/continue `poll` as if the user can see the page.
5. Verify once after open; reopen only on failed verify; max 2 reopen attempts then report failure. No relaunch spam.
6. **Background poll is the default (required for any session that expects user Send):** immediately after verify **pass**, start `npx -y lavish-axi poll <html>` **non-blocking / background** so the next chrome **Send to Agent** reaches you. Do not wait to “message first” or only poll later — missing background poll is why feedback fails to arrive. One poll per live session file; after handling feedback, restart background poll if the session is still open.
7. Before telling parent/user “waiting on you”, re-check the session tab is still present once.
8. After verify **pass**: no relaunch/re-verify loop. **Smoke-only** opens (no human feedback expected): skip poll. Otherwise always background-poll.
9. Poll returns / session ended → read prompts fully, act, stop that poll. Recover misses from `~/.lavish-axi/state.json` or host UI if needed.

**Stale artifact load (409 “no longer current”):** each host session tab’s `beginArtifactLoad` increments `artifact_revision` and invalidates older iframe tokens. Keep **one** session tab; after HTML edits do **one** `--reopen`; close extra `session/<key>` tabs before reopen. Do not multi-reopen while old tabs stay open. **Parent/main must not** `--reopen`, rewrite the HTML, or open parallel session tabs while the interview child owns the session — coordinate via hub; child alone reopens. Queue chips in a stale host UI may not land in `state.json` prompts — recover from UI text if needed, then one clean reopen. Iframe “Queued” with no chrome pill is the same class of failure (token drop), not a successful queue.

## Composer / feedback UI (vault)

Canonical send path is Kun’s CLI **input** playbook + README: `queuePrompt()` then chrome **Send to Agent**. Call `sendQueuedPrompts()` only to skip that wait. Chrome always has **Send to Agent** + **Send & End**; Conversation pills exist only while prompts are queued.

Chrome Send waits on an iframe DOM snapshot; pre-0.1.68 a dead/409 iframe hangs with no POST (queue stuck in tab sessionStorage; poll never sees it). Confirm **≥ 0.1.68** as above.

Queue ≠ delivered. In-page Queue/template buttons only `queuePrompt`; chrome **Send to Agent** POSTs. After queue, pills should appear. Iframe “Queued” but no pill → token mismatch / stale load (chrome drops iframe postMessages) — close extra `session/<key>` tabs, one clean `--reopen` (child owns it), re-queue in the live iframe. Recover from UI / `~/.lavish-axi/state.json` or host Ask if needed.

Do not assume one composer shape. After open-verify, note which UI is present:

- **queued multi-message** — pills / in-page Queue answer, then chrome Send to Agent
- **single send** — composer Send only (empty queue, or the artifact auto-sent)

Both are valid. Poll/parse must accept either. Never fail or relaunch because chips are missing or present.

Interviews: pick one send pattern for the whole session. Do not switch mid-interview.

## Request

$ARGUMENTS

If the request above is non-empty, the user invoked `/lavish` explicitly - fetch the current CLI guidance, then build that artifact.
If it is empty, infer what to visualize from the conversation. For interview payloads from a parent agent, build the interview page and return decisions.
