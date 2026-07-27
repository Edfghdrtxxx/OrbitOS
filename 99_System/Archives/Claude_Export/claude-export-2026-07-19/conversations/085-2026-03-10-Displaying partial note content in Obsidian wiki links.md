# Displaying partial note content in Obsidian wiki links

## Export metadata (verbatim)

```json
{
  "uuid": "ce5c4a52-eb0c-4f0e-8d75-2da405f05ebe",
  "name": "Displaying partial note content in Obsidian wiki links",
  "summary": "**Conversation Overview**\n\nThe person asked a technical question about Obsidian, the note-taking application, specifically how to display part of an inserted note's content using wiki links. Claude explained Obsidian's transclusion (embedding) feature, covering the core syntax of using `![[Note Name]]` to embed an entire note, `![[Note Name#Heading]]` to embed a specific heading section, and `![[Note Name^blockid]]` to embed a specific block. Claude also clarified the distinction between regular wiki links (for navigation) and links prefixed with `!` (for inline embedding), and noted that embedded content updates live when the source note changes. No corrections or follow-up questions were provided by the person.",
  "created_at": "2026-03-10T02:00:37.588156Z",
  "updated_at": "2026-03-10T02:00:49.943677Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-10T02:00:39.347678Z

How to let the wiki link in obsidian to display a part of the inserted note's content?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd579-8b0e-740b-9f47-14be16a8efdb",
  "updated_at": "2026-03-10T02:00:39.347678Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-10T02:00:49.943677Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about Obsidian's wiki link feature for embedding/displaying part of a note's content.

</details>

In Obsidian, you can use **transclusion** (embedding) to display content from another note. Here's how:

## Embed an entire note
Use `!` before the wiki link:
```
![[Note Name]]
```

## Embed a specific heading section
```
![[Note Name#Heading]]
```
This displays only the content under that heading (until the next heading of the same or higher level).

## Embed a specific block
First, give the block an ID by adding `^blockid` at the end of a paragraph in the source note:

```
This is the paragraph I want to reference. ^my-block
```

Then embed it elsewhere:
```
![[Note Name^my-block]]
```

## Embed specific lines with a range (using the Waypoint or Dataview plugin)
Obsidian core doesn't support line-range embedding natively, but the above block-level method covers most use cases.

## Tips
- **`[[Note Name#Heading]]`** (without `!`) — creates a regular link that *navigates* to that heading.
- **`![[Note Name#Heading]]`** (with `!`) — *embeds/transcribes* that section inline.
- Block IDs are auto-suggested when you type `^` inside `[[...]]`, so you don't have to manually write them.
- Embedded content is **live** — it updates automatically when the source note changes.

The `![[...]]` syntax is the core feature you're looking for, and combining it with `#heading` or `^blockid` gives you precise control over which portion appears.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd579-8b0e-7dc5-a760-02af187114e8",
  "updated_at": "2026-03-10T02:00:49.943677Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd579-8b0e-740b-9f47-14be16a8efdb"
}
```

</details>
