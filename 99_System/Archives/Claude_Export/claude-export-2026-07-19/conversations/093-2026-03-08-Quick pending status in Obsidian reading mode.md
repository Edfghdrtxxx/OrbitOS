# Quick pending status in Obsidian reading mode

## Export metadata (verbatim)

```json
{
  "uuid": "99498aba-302a-41cd-b080-71da4fb8c061",
  "name": "Quick pending status in Obsidian reading mode",
  "summary": "**Conversation Overview**\n\nThe person asked about how to quickly mark an item as \"pending\" (using the `[*]` checkbox syntax) in Obsidian's reading mode without the tedious process of manually switching to writing mode. Claude explained that direct editing in reading mode is not possible, and offered several alternatives: setting a hotkey to toggle between reading and Live Preview modes, using Live Preview as a default since it allows direct checkbox interaction, and using the Tasks plugin for cycling through task statuses via a single hotkey.\n\nThe person then shared that they had assigned `Ctrl+I` as their hotkey for toggling between reading and Live Preview modes, and asked whether this would conflict with existing shortcuts. Claude confirmed that `Ctrl+I` is Obsidian's standard italic formatting shortcut and would conflict during editing. Claude suggested safer alternatives including `Ctrl+Shift+R`, `Ctrl+Shift+`` ` ``, or F-row keys like `F9` or `F10`, and noted that Obsidian's Settings → Hotkeys panel can be used to check for conflicts before assigning a shortcut. The conversation used Obsidian-specific terminology including Live Preview, reading mode, task status syntax (`[*]`), and the Tasks plugin.",
  "created_at": "2026-03-08T01:56:40.576833Z",
  "updated_at": "2026-03-08T02:05:01.272527Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-08T01:56:42.306726Z

How to quickly mark an item as pending in obsidian in reading mode? It's tedious to switch to writing mode and then write a "*" in that check box.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccb29-369c-7784-b84a-e20866355790",
  "updated_at": "2026-03-08T01:56:42.306726Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "5d6e9faf-a6f0-485b-9c03-8138c4440a4d",
      "file_name": "1772934909046_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-08T01:56:51.179494Z

 In Obsidian's reading mode, you can't directly edit checkboxes without switching modes — but here are some faster approaches:

**Quickest option: Use a hotkey to toggle edit mode**
Set a keyboard shortcut for "Toggle Live Preview/Reading view" so switching modes is just one keypress. Then click the checkbox and switch back.

**Better option: Stay in Live Preview instead of Reading mode**
Live Preview lets you click checkboxes directly without fully entering edit mode. The `- [*]` pending syntax works there seamlessly.

**Plugin option: Checklist / Tasks plugins**
The **Tasks** plugin or **Dataview** can sometimes interact with task states, but for the `[*]` pending state specifically, support varies.

**Hotkey for the specific task status (best long-term)**
If you use the **Tasks** plugin, it supports cycling through task statuses (including pending/cancelled/etc.) with a single hotkey — no manual typing of `*` needed.

The most practical quick fix is probably just **mapping a hotkey to toggle reading↔live preview**, since Live Preview is nearly identical to reading mode but lets you click checkboxes directly.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccb29-369c-728f-9452-413e89aba38b",
  "updated_at": "2026-03-08T01:56:51.179494Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ccb29-369c-7784-b84a-e20866355790"
}
```

</details>

### 3. human — 2026-03-08T02:04:55.059435Z

I have set `ctrl + i` as a hotkey to toggle between reading and live preview. Will it conflict with any others?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccb30-b7d5-712e-885c-e716a9be051c",
  "updated_at": "2026-03-08T02:04:55.059435Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ccb29-369c-728f-9452-413e89aba38b"
}
```

</details>

### 4. assistant — 2026-03-08T02:05:01.272527Z

 

<details>
<summary>Thinking (verbatim)</summary>

Ctrl+I is typically the italic formatting shortcut in most text editors and apps.

</details>

Yes — **Ctrl+I** is the standard shortcut for *italic* formatting in Obsidian (and most text editors). So when you're in Live Preview/editing mode, it'll italicize selected text instead of doing what you want.

A few safer alternatives that are unlikely to conflict:

- **Ctrl+Shift+R** — toggle reading mode (mnemonic: **R**ead)
- **Ctrl+E** is Obsidian's *default* toggle between editing and reading, so that's already taken
- **Ctrl+Shift+`** — uncommon, rarely used
- Something in the **F-key** row like **F9** or **F10**

Worth checking: in Obsidian's Settings → Hotkeys, you can search for a key combo and it'll warn you if there's already something assigned to it.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccb30-b7d5-7483-934d-f5f317285768",
  "updated_at": "2026-03-08T02:05:01.272527Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ccb30-b7d5-712e-885c-e716a9be051c"
}
```

</details>
