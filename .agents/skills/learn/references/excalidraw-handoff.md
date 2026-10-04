# Learn Excalidraw handoff

Load this reference only when a `/learn` session warrants an Excalidraw schema — a complex concept, a concrete physical picture, or an explicit learner request for a schema/diagram file. Tutor discretion remains the gate; this handoff does not trigger from ordinary one-step explanation, notation, or a mermaid/ASCII sketch that already carries the structure.

## Purpose

Replace parent-authored `.excalidraw` JSON with a dedicated **excalidraw-trigger** sub-agent. The child loads `skill://excalidraw-diagram-generator`, writes one Socratic partial scaffold, and returns a receipt. The parent embeds the file and keeps teaching in prose.

Inline mermaid/ASCII/tables stay parent-owned for simple sketches. They are also the fallback when the child returns `status: fallback`.

## Parent → excalidraw-trigger payload

The Learn agent dispatches an excalidraw-trigger sub-agent with this payload and points it at this file's sub-agent contract:

```yaml
session_note: 60_Learning_Progress/<topic>/<session-note>.md
topic: <topic folder>
name: <kebab-case basename, no extension>
show: <the one relationship, component, or step under discussion>
hide: <finished mechanism / derived result the learner must supply>
question: <the one focused question this scaffold pairs with>
learner_has: <what they already got right this turn>
math: none | latex
```

Do not dispatch until `show` / `hide` / `question` are grounded in the current turn and session note; never request a full finished mechanism, and never infer the picture from the note title alone.

### Parent Guard (anti-drift)

When an Excalidraw schema is the chosen visual:
- **Pre-dispatch opt-out:** If (and only if) the learner explicitly asks to stay in chat (e.g. "just sketch it here", "mermaid is enough", "no Excalidraw file"), honor that and use inline sketches without dispatching.
- **Mandatory dispatch:** For every other Excalidraw-warranted turn, the parent Learn agent MUST dispatch the `excalidraw-trigger` sub-agent first.
- **Strict prohibitions:** The parent Learn agent MUST NOT load `skill://excalidraw-diagram-generator`, write `.excalidraw` JSON, invent a file path, embed a missing file, or declare the generator unavailable until the sub-agent returns.
- **Post-dispatch rule:** Post-dispatch fallback to inline sketches is permitted ONLY on an exact structured `status: fallback` receipt from the sub-agent. Sub-agent timeout, crash, or absent receipt is NOT permission to improvise a `.excalidraw` file (re-dispatch or report blocker).

## Excalidraw-trigger sub-agent contract

1. **Load the generator skill.** Read and follow `skill://excalidraw-diagram-generator`. Do not tutor the learner; do not edit the session note, `Progress-context.md`, or `Trap-Log.md`.
2. **Draw only the payload `show`.** Socratic partial scaffold: the one relationship, component, or step under discussion. Never draw `hide`. Never label the derived result the question asks for. One diagram, not a textbook plate.
3. **Write the file.** Save as `60_Learning_Progress/<topic>/assets/<name>.excalidraw` (create `assets/` if needed). Valid Excalidraw JSON. All text uses `fontFamily: 5` (Excalifont). Light theme: `appState.viewBackgroundColor` `#ffffff` and `"theme": "light"` so Obsidian does not invert to a black canvas. Dark strokes, readable labels (font size 16+), no overlapping elements.
   - **Inherent inline embed invariant:** Embed directly as `![[<name>.excalidraw|1000]]`. Never compromise by substituting `.svg` exports or altering embed syntax. The Obsidian Excalidraw plugin natively parses and renders `.excalidraw` JSON inline. A document card in place of the drawing is a stale reading-view render, not a bad file; the parent clears it with the forced re-render in Learn-session recording. Reopening the note does not clear it.
4. **Math.** If `math: latex` (display formulas, aligned equations, fractions, integrals, or labels with more than two math tokens), tag those text elements with `customData: { latex: "<TeX>", latexDisplay: true|false }` and run `excalidraw-diagram-generator/scripts/render-latex.js`. Isolated symbols may stay Unicode. If `math: none`, skip the Node pipeline.
5. **Return a receipt to Learn.** On success:

   ```yaml
   status: launched
   path: 60_Learning_Progress/<topic>/assets/<name>.excalidraw
   embed: '![[<name>.excalidraw|1000]]'
   shown: <what is visible>
   hidden: <what the learner must supply>
   pointer: <1–2 sentence structural pointer for chat>
   ```

   If any prerequisite fails (cannot write, generator skill missing, payload too thin to draw without inventing `hide`), return `status: fallback` with the reason. Do not invent a complete mechanism or write a placeholder file.

## Learn-session recording

After a `status: launched` receipt, embed `![[<name>.excalidraw|1000]]` in the current session note's Tutor turn and, in chat, give the receipt's 1–2 sentence pointer plus the turn's one question. Do not paste JSON. Do not dump the finished mechanism in prose around the figure.

### Force the inline render (mandatory after every embed)

Right after writing the embed line, re-render the note in place and read back the counts. The command targets the note by path, so it neither switches tabs nor takes focus:

```bash
obsidian eval code="(async()=>{const p='<session_note path from vault root>';const ls=[];app.workspace.iterateAllLeaves(l=>{if(l.view?.file?.path===p&&l.view.previewMode)ls.push(l)});ls.forEach(l=>l.view.previewMode.rerender(true));await new Promise(r=>setTimeout(r,3000));const q=s=>ls.reduce((n,l)=>n+l.view.containerEl.querySelectorAll(s).length,0);return JSON.stringify({leaves:ls.length,cards:q('.internal-embed.file-embed'),drawn:q('.excalidraw-embedded-img')})})()"
```

- `cards: 0` with `drawn` ≥ 1 → rendered. Say so only on this evidence.
- `leaves: 0` → the note is not open; nothing to clear.
- `cards` > 0 after the re-render → check the file with `app.plugins.plugins['obsidian-excalidraw-plugin'].ea.createSVG('<path>')`. An SVG back means the file is sound: report the view as the blocker. An error means the file is bad: re-dispatch.
- Never tell the learner to reopen the note, reload the app, or open the drawing in its own tab. Never report an embed as rendered from a JSON parse alone.

2026-10-03 incident: the embed showed as a `file-embed mod-generic` card in reading view and survived a reopen; `previewMode.rerender(true)` drew it. Live Preview was not tested.

The visual remains that turn's scaffold: one relationship, one question for what is missing.

## Fallback

Use inline sketches (markdown table, ASCII, Mermaid) ONLY when:
- the learner explicitly requested a chat-only sketch before dispatch (pre-dispatch opt-out); or
- the `excalidraw-trigger` sub-agent settled with an exact structured `status: fallback` receipt.

Post-dispatch fallback is strictly receipt-driven; parent agents must never infer or self-declare fallback prior to sub-agent settlement. Fallback sketches still show only the relationship under discussion and still pair with one focused question.
