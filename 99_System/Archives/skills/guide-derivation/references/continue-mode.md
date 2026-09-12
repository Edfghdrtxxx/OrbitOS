# Continue Mode — Resume or Review an Existing Derivation

## C0. Provide the Path

Tell the user which note was found and its full path, so they can browse it before proceeding.

## C1. Read the Existing Note

Read the full note content. Determine its completion status:

- **Completed:** The note has explicit logical steps progressing to a final result in `\boxed{}` (with validity/breaking conditions). All sections are filled in.
- **Incomplete:** Everything that doesn't match the completed status.

## C2. Branch by Status

### If Completed

Use `AskUserQuestion` to ask:

> Found existing note: `<path>`. This derivation appears complete. What would you like to do?
> - **Normal review** — I'll read it at my own pace.
> - **Wiki review** — Start a spaced-repetition review session using the `wiki-review` skill.
> - **Start again** — Discard the existing note and derive from scratch.

- **Normal review:** Done.
- **Wiki review:** Invoke the `wiki-review` skill on this note. Done.
- **Start again:** Proceed to Mode Detection in `SKILL.md` (the user picks quick or learn, and the note is overwritten).

### If Incomplete

Use `AskUserQuestion` to ask:

> Found existing note: `<path>`. This derivation is incomplete. Make sure you have browsed this note first. What would you like to do?
> - **Continue** — Pick up from where the note left off.
> - **Start from scratch** — Discard the existing note and derive from the beginning.

- **Continue:** Determine which mode the original note was written in (check for `[!question]`/`[!hint]` callouts → learn mode; otherwise → quick mode). Resume the derivation from the last completed step, following the corresponding mode's instructions. Preserve all existing content and callouts.
- **Start from scratch:** Proceed to Mode Detection in `SKILL.md` (the user picks quick or learn, and the note is overwritten).
