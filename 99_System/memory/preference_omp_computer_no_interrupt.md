---
name: preference_omp_computer_no_interrupt
description: omp computer-use must not interrupt a live user — no raise, no foreground, no desktop HID
type: preference
saved_at: 2026-09-09
---
# omp computer-use — do not interrupt

**Trigger:** any omp `computer` prelude work (Eval `computer.*` / `desktop.*`).

**Rule:** The user is often on the same screen and mouse. There is **no headless/no-head desktop** (no virtual framebuffer). Do not steal focus, move the pointer, or change window order.

## Defaults
- Inspection only unless mutation is required: `windows()`, `screenshot()`, `ax()`, `find()`, `capabilities()`.
- Mutate with window-scoped `delivery: "background"` (default) or AX (`el.press()`, `el.setValue()`, `el.perform()`). Never `win.raise()`, `el.focus()`, or `delivery: "foreground"` unless the user explicitly asks to steal focus.
- Never `computer.click` / `move` / `type` / `press` on the **desktop composite** — macOS ignores `delivery` there and posts global HID.
- `"open <app>"` is not authorization to raise or click Stage Manager/Dock while the user is live.
- If background/AX cannot complete the task, **stop and say so**. Do not escalate to foreground.

## Known limits
- Background keyboard throws `BackgroundUnavailable` when the app owns **>1 window**.
- Custom UIs (e.g. WeChat chat list) may expose no AX press; Stage Manager can shrink the AX window to a side card.
- `clipboard.write` clobbers the user's clipboard without raising.

## Origin
2026-09-09: agent raised WeChat and clicked Stage Manager/Dock while the user was using the machine. User asked whether no-head mode exists; it does not.
