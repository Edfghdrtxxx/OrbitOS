# Image Enrichment — Shared Procedure

Fetch and embed schematics/diagrams for wiki notes. Called from create, scan, and extend modes.

## Naming Convention

All image files in `50_Resources/Attachments/` follow this pattern:

```
{ConceptName}_{descriptor}.{ext}
```

| Component | Rule | Examples |
|---|---|---|
| `ConceptName` | Note title, spaces → underscores | `Cyclotron`, `Lorentz_Force`, `RF_Electric_Field` |
| `descriptor` | Short semantic label (see list below) | `schematic`, `principle`, `patent` |
| `ext` | Original format preserved | `png`, `svg`, `jpg` |

**Standard descriptors:** `schematic`, `diagram`, `principle`, `cross_section`, `patent`, `graph`, `photo`, `comparison` (extend mode). If multiple images share the same descriptor, append a number: `Cyclotron_schematic_2.png`.

## I1. Image Fetching (Subagent)

Launch a general-purpose agent (`Agent` tool) with the following prompt — substitute `{ConceptName}` with the note title (spaces → underscores for file operations):

> Image fetching for **"{ConceptName}"**:
>
> **Naming convention:** Files go in `50_Resources/Attachments/` as `{ConceptName}_{descriptor}.{ext}`. Standard descriptors: `schematic`, `diagram`, `principle`, `cross_section`, `patent`, `graph`, `photo`. If multiple images share a descriptor, append a number (e.g., `_schematic_2`). Preserve original extension.
>
> 1. **Local check:** Glob `50_Resources/Attachments/{ConceptName}_*` — list any existing image files with full paths.
> 2. **Wikimedia search:** Query `https://en.wikipedia.org/w/api.php?action=query&titles={ConceptName}&prop=images&format=json` to collect `File:` entries. Filter to `.png`/`.svg`/`.jpg` diagrams/schematics — exclude flags, icons, logos, photographs of people. For each candidate, fetch metadata via `https://en.wikipedia.org/w/api.php?action=query&titles={FileTitle}&prop=imageinfo&iiprop=url|extmetadata&iiextmetadatafilter=ImageDescription|LicenseShortName&format=json`. **License filter:** only use Public domain, CC0, CC BY, CC BY-SA (any version). Reject all others. Select the **2–4 most informative** schematics (prefer labeled diagrams over photographs; prefer SVG over raster).
> 3. **Download:** For each selected image, run `curl -L -o "50_Resources/Attachments/{ConceptName}_{descriptor}.{ext}" "{direct_upload_url}"`. Verify non-zero file size. Do NOT fabricate image URLs.
>
> **Return format:**
> - If images found (local or downloaded): list each image as `{path} | {license} | {source_url}` for downloaded, or `{path} | local` for pre-existing.
> - If no suitable schematics found anywhere: return exactly: `No suitable open-license schematics found on Wikimedia Commons. Proceeding with note creation.`

## I2. View & Confirm Images

**If the subagent returned images:**

- **Read each image file** using the Read tool to view its visual content (labels, axes, annotations, depicted structures).
- Assess relevance and quality — discard any images that are irrelevant, low-quality, or misleading.
- Use what you see to write accurate, descriptive captions for I3. Do not guess caption content from the filename alone.

**If the subagent returned the no-images message:** proceed to I3 directly.

## I3. Embed in Note

**Always create the section:** Insert a `## Schematics` section **after the `# Heading`** and before `## Definition` (for wiki notes) or before the first body heading (for research notes) — even when no images were found. If no images are available, add the italic explanation: `*No suitable open-license schematics found on Wikimedia Commons for this topic.*`

**Embedding format** — each image uses two lines:

```markdown
![[{ConceptName}_{descriptor}.{ext}]]
*Caption describing what the image shows. (License, source attribution)*
```

- One blank line between image–caption pairs.
- Caption is italic (`*...*`), describes the content, and ends with parenthesized license + source.
- If the note already has a `## Schematics` section, append new images to it rather than creating a duplicate section.
- **Dedup:** Skip any image whose `![[filename]]` already appears in the note.

## I4. Image Report

Append to the mode's post-creation/post-scan report:

```
Images:
  Local:    {count} existing in Attachments
  Fetched:  {count} downloaded from Wikimedia Commons
  Embedded: {list of ![[filenames]]}
```
