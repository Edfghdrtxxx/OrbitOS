# Converting DOCX files to e-book formats

## Export metadata (verbatim)

```json
{
  "uuid": "f00cab09-5aa3-44ad-bc86-901a25cec0e8",
  "name": "Converting DOCX files to e-book formats",
  "summary": "**Conversation Overview**\n\nThe person asked about tools and open source projects for converting .docx files to .mobi or other e-book formats. Claude provided an overview of available options including Calibre (open source, GUI and CLI), Pandoc, and the deprecated KindleGen, along with a recommended two-step workflow of converting .docx to .epub via Pandoc first, then to .mobi via Calibre for cleaner output. Claude also noted that .mobi is being phased out by Amazon in favor of .epub and .azw3.\n\nThe person then clarified they were specifically interested in web-based, deployment-free online tools rather than locally installed software. Claude responded with a curated list of browser-based converters including Zamzar, CloudConvert, Convertio, Online-Convert.com, and FreeFileConvert, along with a comparison table covering factors such as output quality, account requirements, file size limits, and API availability. CloudConvert was highlighted as the best option for quality and large files, while Convertio and FreeFileConvert were noted as requiring no account. The person's preference for deployment-free, browser-based solutions over CLI or installable tools was explicitly established in this conversation.",
  "created_at": "2026-03-09T12:03:26.413457Z",
  "updated_at": "2026-03-09T12:05:17.154159Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-09T12:03:27.636286Z

Do we have any tools or open source projects that can let me convert .docx to .mobi (or other formats of e-books)?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd27b-12b9-7ae3-ab83-6757af63029d",
  "updated_at": "2026-03-09T12:03:27.636286Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-09T12:03:38.547169Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about tools to convert .docx to .mobi or other e-book formats. This is a general knowledge question I can answer directly.

</details>

Yes! There are several solid options for converting `.docx` to `.mobi` and other e-book formats:

**Calibre (most popular)**
- Free, open-source, cross-platform e-book management tool
- Supports conversion between dozens of formats: `.docx` → `.mobi`, `.epub`, `.azw3`, `.pdf`, etc.
- Has both a GUI and a powerful CLI tool (`ebook-convert`)
- CLI example: `ebook-convert input.docx output.mobi`
- GitHub: https://github.com/kovidgoyal/calibre

**Pandoc**
- Universal document converter, very popular in academic/technical circles
- Can convert `.docx` → `.epub` directly, but `.mobi` requires a two-step via Calibre or KindleGen
- Example: `pandoc input.docx -o output.epub`
- GitHub: https://github.com/jgm/pandoc

**KindleGen (Amazon, now deprecated)**
- Amazon's official tool for generating `.mobi`/`.azw3` files
- No longer actively maintained; Amazon now recommends Kindle Previewer 3 or using Calibre
- Still works if you have an older copy

**Recommended workflow for `.docx` → `.mobi`:**
The most reliable path is **Pandoc → Calibre**:
1. Use Pandoc to convert `.docx` → `.epub` (better intermediate format)
2. Use Calibre's `ebook-convert` to convert `.epub` → `.mobi`

This two-step approach tends to produce much cleaner output than going `.docx` → `.mobi` directly, since `.epub` is a well-structured intermediate.

For modern Kindle devices, `.epub` and `.azw3` are actually preferred over `.mobi` now, so you might not even need `.mobi` depending on your target device.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd27b-12b9-7b53-bc5a-5d9176b2d854",
  "updated_at": "2026-03-09T12:03:38.547169Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd27b-12b9-7ae3-ab83-6757af63029d"
}
```

</details>

### 3. human — 2026-03-09T12:04:04.254410Z

Remote Web projects first

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd27b-a18d-7b1e-8721-3cf66266ce93",
  "updated_at": "2026-03-09T12:04:04.254410Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd27b-12b9-7b53-bc5a-5d9176b2d854"
}
```

</details>

### 4. assistant — 2026-03-09T12:04:13.054123Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user seems to be asking about something related to "Remote Web projects" but this message is quite unclear. They might be referring to continuing a previous conversation, or perhaps they want me to search past chats for something about remote web projects. Let me search past conversations to understand context.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-09T12:04:07.400938Z",
  "stop_timestamp": "2026-03-09T12:04:07.502949Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Kom9oZzqzcc6wLEgaFnSVG",
  "name": "conversation_search",
  "input": {
    "query": "remote web projects"
  },
  "message": "Looking for relevant chats...",
  "integration_name": "Search Past Conversations",
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "tool_identifier": null,
  "icon_name": "memory",
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
  "tool_use_id": "toolu_01Kom9oZzqzcc6wLEgaFnSVG",
  "name": "conversation_search",
  "content": [
    {
      "type": "text",
      "text": "No matching conversations found.",
      "uuid": "37571c96-aba2-428d-8298-6838ac8a38b9"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Relevant chats",
  "integration_name": "Search Past Conversations",
  "mcp_server_url": null,
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "icon_name": "memory",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

No results. The message is ambiguous. Could they mean they want to prioritize remote/web-based tools first (as opposed to local CLI tools) for the docx to mobi conversion? Let me ask for clarification.

</details>

Could you clarify what you mean by "Remote Web projects"? A couple of possibilities:

- **Web-based tools** — online converters you can use in a browser without installing anything (like Zamzar, CloudConvert, etc.)?
- **A specific project or repo** you're referring to from a previous conversation?
- **Something else entirely** — like web projects hosted remotely that need conversion integrated?

Happy to dig in once I know what you're after!

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd27b-a18d-780f-ab48-15c855b65690",
  "updated_at": "2026-03-09T12:04:13.054123Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd27b-a18d-7b1e-8721-3cf66266ce93"
}
```

</details>

### 5. human — 2026-03-09T12:05:06.816330Z

Yes, I mean the web-based tools, online converters I can use in a browser which are deployment-free.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd27c-95fe-72cd-afc7-59833fd715ea",
  "updated_at": "2026-03-09T12:05:06.816330Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd27b-a18d-780f-ab48-15c855b65690"
}
```

</details>

### 6. assistant — 2026-03-09T12:05:17.154159Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants web-based online converter tools for docx to mobi/ebook formats that require no installation or deployment.

</details>

Here are the best web-based, deployment-free options:

**General Document Converters (support .docx → .epub/.mobi)**

- **Zamzar** (zamzar.com) — supports `.docx` → `.epub`, `.mobi`, `.azw3`. Free tier with file size limits (~50MB).
- **CloudConvert** (cloudconvert.com) — high quality, supports many formats. Free tier gives 25 conversions/day. API also available if you want to automate.
- **Convertio** (convertio.co) — simple drag-and-drop, supports `.docx` → `.epub`/`.mobi`. 100MB free limit.

**E-book Specific**

- **Online-Convert.com** — has a dedicated e-book converter section, supports `.mobi`, `.epub`, `.azw3` outputs from `.docx`.
- **FreeFileConvert** (freefileconvert.com) — no account needed, supports common e-book formats.

**Considerations when choosing:**

| Factor | Best Option |
|---|---|
| Privacy (no upload to server) | ❌ None — all upload your file |
| Best output quality | CloudConvert |
| No account required | Convertio / FreeFileConvert |
| Automation via API | CloudConvert |
| Large files | CloudConvert (up to 1GB on free) |

**One caveat:** Since `.mobi` is being phased out by Amazon in favor of `.epub` and `.azw3`, some of these tools are shifting focus away from `.mobi`. If your target is a Kindle, `.epub` or `.azw3` is the better choice now and all of the above support it well.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd27c-95fe-716e-8a61-7c1f26225e5c",
  "updated_at": "2026-03-09T12:05:17.154159Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd27c-95fe-72cd-afc7-59833fd715ea"
}
```

</details>
