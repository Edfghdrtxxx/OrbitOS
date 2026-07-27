# Adjusting Claude search box position on dual monitors

## Export metadata (verbatim)

```json
{
  "uuid": "0d0cd729-70a0-404d-8664-c58de1c0430b",
  "name": "Adjusting Claude search box position on dual monitors",
  "summary": "**Conversation Overview**\n\nThe person asked about adjusting the screen position of the Claude quick-access popup invoked via the Ctrl+Alt+Space keyboard shortcut, specifically in the context of using a dual-monitor setup. They clarified their question with an attached image after Claude initially misidentified the feature being referenced. Claude explained that there is no built-in setting within the extension to control which screen the popup appears on, as it defaults to the primary display. Claude offered several workarounds, including changing the primary display in Windows or macOS system settings, and suggested submitting a feature request to Anthropic for a \"preferred display\" option. The person's correction mid-conversation indicated that Claude's first response did not correctly identify the UI element in question, and the follow-up response adjusted accordingly.",
  "created_at": "2026-03-06T14:57:16.154764Z",
  "updated_at": "2026-03-06T15:06:18.581995Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-06T14:57:17.419271Z

Do you know how to adjust the appearing position of the "ctrl + Alt + space" method to invoke cluade's searching box. I have two screens now.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cc3a7-1f0d-78f1-bc1f-209adf3a6a85",
  "updated_at": "2026-03-06T14:57:17.419271Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-06T14:57:31.572953Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-06T14:57:18.911883Z",
  "stop_timestamp": "2026-03-06T14:57:19.220971Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01APEJnSCzNUYMUGnMgHNUYm",
  "name": "tool_search",
  "input": {
    "query": "window position screen display settings"
  },
  "message": "Searching available tools: window position screen display settings",
  "integration_name": "Tool Search",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "search",
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
  "tool_use_id": "toolu_01APEJnSCzNUYMUGnMgHNUYm",
  "name": "tool_search",
  "content": [
    {
      "type": "text",
      "text": "Loaded 16 tools:\n\nMatched tools:\n  Claude in Chrome (5):\n  Claude in Chrome:resize_window:\n    height: number - Target window height in pixels\n    tabId: number - Tab ID to get the window for. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a vali...\n    width: number - Target window width in pixels\n  Claude in Chrome:javascript_tool:\n    action: string - Must be set to 'javascript_exec'\n    tabId: number - Tab ID to execute the code in. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a val...\n    text: string - The JavaScript code to execute. The code will be evaluated in the page context. The result of the last expression wil...\n  Claude in Chrome:computer:\n    action: string [left_click|right_click|type|screenshot|wait|scroll|key|left_click_drag|...] - The action to perform:\n* `left_click`: Click the left mouse button at the specified coordinates.\n* `right_click`: Cli...\n    tabId: number - Tab ID to execute the action on. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a v...\n    coordinate?: array [number] - (x, y): The x (pixels from the left edge) and y (pixels from the top edge) coordinates. Required for `left_click`, `r...\n    duration?: number - The number of seconds to wait. Required for `wait`. Maximum 30 seconds.\n    modifiers?: string - Modifier keys for click actions. Supports: \"ctrl\", \"shift\", \"alt\", \"cmd\" (or \"meta\"), \"win\" (or \"windows\"). Can be co...\n    ref?: string - Element reference ID from read_page or find tools (e.g., \"ref_1\", \"ref_2\"). Required for `scroll_to` action. Can be u...\n    region?: array [number] - (x0, y0, x1, y1): The rectangular region to capture for `zoom`. Coordinates define a rectangle from top-left (x0, y0)...\n    repeat?: number - Number of times to repeat the key sequence. Only applicable for `key` action. Must be a positive integer between 1 an...\n    scroll_amount?: number - The number of scroll wheel ticks. Optional for `scroll`, defaults to 3.\n    scroll_direction?: string [up|down|left|right] - The direction to scroll. Required for `scroll`.\n    start_coordinate?: array [number] - (x, y): The starting coordinates for `left_click_drag`.\n    text?: string - The text to type (for `type` action) or the key(s) to press (for `key` action). For `key` action: Provide space-separ...\n  Claude in Chrome:form_input:\n    ref: string - Element reference ID from the read_page tool (e.g., \"ref_1\", \"ref_2\")\n    tabId: number - Tab ID to set form value in. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid...\n    value: string | boolean | number - The value to set. For checkboxes use boolean, for selects use option value or text, for other inputs use appropriate ...\n  Claude in Chrome:shortcuts_execute:\n    tabId: number - Tab ID to execute the shortcut on. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a...\n    command?: string - The command name of the shortcut to execute (e.g., 'debug', 'summarize'). Do not include the leading slash.\n    shortcutId?: string - The ID of the shortcut to execute\n\nRelated tools (also loaded):\n  Claude in Chrome: Claude in Chrome:find, Claude in Chrome:get_page_text, Claude in Chrome:gif_creator, Claude in Chrome:navigate, Claude in Chrome:read_console_messages, Claude in Chrome:read_network_requests, Claude in Chrome:read_page, Claude in Chrome:shortcuts_list, Claude in Chrome:tabs_context_mcp, Claude in Chrome:tabs_create_mcp, Claude in Chrome:upload_image\nAll tools above are now available for you to call directly.",
      "uuid": "09b3d478-3fe8-47c2-bee7-3bcf5bb4706f"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Searched available tools",
  "integration_name": "Tool Search",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "search",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

The **Ctrl+Alt+Space** shortcut for the Claude search/quick-access box is part of the **Claude in Chrome extension**. Unfortunately, there's currently **no built-in setting to configure which screen the popup appears on** in a dual-monitor setup.

Here's what you can do:

**Current behavior:** The popup typically appears on whichever screen your active Chrome window is on, or centered on your primary display — this depends on your OS and extension implementation.

**Workarounds for dual-monitor setups:**

1. **Move Chrome to your preferred screen first** — The popup should follow the active Chrome window's screen. If you trigger the shortcut while Chrome is focused on your secondary monitor, it may appear there.

2. **Set your preferred screen as primary** — In Windows: *Settings → System → Display → select your preferred monitor → "Make this my main display"*. On macOS: *System Settings → Displays → drag the menu bar to your preferred screen.*

3. **Check extension settings** — Open Chrome and go to `chrome://extensions`, find the Claude extension, click **Details**, and look for any options page that might expose display preferences.

4. **Feedback to Anthropic** — This is worth submitting as a feature request. You can use the **thumbs down** button in the interface or visit [support.claude.ai](https://support.claude.ai) to suggest adding a "preferred display" option for the shortcut popup.

As of now, there's no direct configuration option exposed for controlling the popup's screen position — it's a known limitation when using extension-based hotkeys on multi-monitor setups.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cc3a7-1f0d-7486-aeee-32450f2e7a03",
  "updated_at": "2026-03-06T14:57:31.572953Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cc3a7-1f0d-78f1-bc1f-209adf3a6a85"
}
```

</details>

### 3. human — 2026-03-06T15:06:07.305307Z

No, not that. See? image attached.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cc3af-339f-7bf9-83e7-6249a825b54f",
  "updated_at": "2026-03-06T15:06:07.305307Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "7a0b80e1-0ed6-419d-bd0f-4da0d239d9ac",
      "file_name": "1772809552115_image.png"
    }
  ],
  "parent_message_uuid": "019cc3a7-1f0d-7486-aeee-32450f2e7a03"
}
```

</details>

### 4. assistant — 2026-03-06T15:06:18.581995Z

 Ah, I see now! That's the **Claude in Chrome extension's quick-access popup** (the floating search bar). Thanks for the screenshot.

Unfortunately, there's **no built-in setting to control which screen this popup appears on** in a dual-monitor setup. The popup position is hardcoded by the extension — it typically appears centered on your **primary display**, regardless of where your Chrome window is.

**What you can try:**

1. **Change your primary display** — The popup follows your primary screen. In Windows: *Settings → System → Display → select your preferred monitor → "Make this my main display"*. On macOS: *System Preferences → Displays → drag the white menu bar to your preferred screen*.

2. **Move your taskbar/primary display** — If your secondary monitor is where you work most, making it the primary should pull the popup there.

3. **Check extension options** — Right-click the Claude extension icon in Chrome → *Options* or *Manage Extension* — there might be a hidden display preference, though this is unlikely currently.

4. **Submit a feature request** — This is a genuine usability gap for multi-monitor users. You can request a "preferred display" setting via the thumbs down button here or at [support.claude.ai](https://support.claude.ai). It's a reasonable ask!

The root issue is that Chrome extensions have limited ability to query which screen the user is actively using, so the extension defaults to the primary display. Making your working monitor the primary display is currently the most reliable fix.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cc3af-339f-75d3-96f1-1178ae142b07",
  "updated_at": "2026-03-06T15:06:18.581995Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cc3af-339f-7bf9-83e7-6249a825b54f"
}
```

</details>
