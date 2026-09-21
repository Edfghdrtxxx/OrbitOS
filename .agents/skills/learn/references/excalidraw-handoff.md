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
   - **Inherent inline embed invariant:** Embed directly as `![[<name>.excalidraw|1000]]`. Never compromise by substituting `.svg` exports or altering embed syntax. The Obsidian Excalidraw plugin natively parses and renders `.excalidraw` JSON inline. If Obsidian momentarily shows an unresolved document card right after external file creation, it is solely an index sync delay in `metadataCache`; reloading or reopening the note ensures native inline rendering without any workaround.
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

The visual remains that turn's scaffold: one relationship, one question for what is missing.

## Fallback

Use inline sketches (markdown table, ASCII, Mermaid) ONLY when:
- the learner explicitly requested a chat-only sketch before dispatch (pre-dispatch opt-out); or
- the `excalidraw-trigger` sub-agent settled with an exact structured `status: fallback` receipt.

Post-dispatch fallback is strictly receipt-driven; parent agents must never infer or self-declare fallback prior to sub-agent settlement. Fallback sketches still show only the relationship under discussion and still pair with one focused question.
