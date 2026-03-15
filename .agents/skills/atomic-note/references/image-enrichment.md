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
| `descriptor` | Short semantic label (see table below) | `schematic`, `principle`, `patent` |
| `ext` | Original format preserved | `png`, `svg`, `jpg` |

**Standard descriptors** (pick the most fitting):

| Descriptor | Use for |
|---|---|
| `schematic` | Labeled technical drawing showing components |
| `diagram` | Conceptual/block diagram |
| `principle` | Diagram showing operating principle or physics |
| `cross_section` | Cross-sectional view |
| `patent` | Patent drawing |
| `graph` | Plot / data graph |
| `photo` | Photograph of real equipment |
| `comparison` | Side-by-side or overlay comparison (extend mode) |

If multiple images share the same descriptor, append a number: `Cyclotron_schematic_2.png`.

## I1. Local Image Check

Glob `50_Resources/Attachments/{ConceptName}_*` (where `{ConceptName}` = note title with spaces → underscores).

- **Images found →** list them, embed any that aren't already in the note, then ask: **"Existing images found. Fetch more from Wikimedia? (yes / no)"**
- **No images found →** proceed to I2.

## I2. Wikimedia Commons Search

Use the Wikipedia/Wikimedia API to find relevant schematics:

1. Query the Wikipedia article for the concept: `https://en.wikipedia.org/w/api.php?action=query&titles={ConceptName}&prop=images&format=json` — collect all `File:` entries.
2. Filter to diagrams/schematics (`.png`, `.svg`, `.jpg`) — exclude flags, icons, logos, and photographs of people.
3. For each candidate, fetch metadata: `https://en.wikipedia.org/w/api.php?action=query&titles={FileTitle}&prop=imageinfo&iiprop=url|extmetadata&iiextmetadatafilter=ImageDescription|LicenseShortName&format=json`
4. **License filter:** Only use images that are **Public domain**, **CC0**, **CC BY**, **CC BY-SA** (any version). Reject all others.
5. Select the **2–4 most informative** schematics (prefer labeled diagrams over photographs; prefer SVG over raster when available).
6. If no suitable schematics are found via API, report this and skip image embedding — do NOT fabricate image URLs.

## I3. Download & Rename

For each selected image:

```bash
curl -L -o "50_Resources/Attachments/{ConceptName}_{descriptor}.{ext}" "{direct_upload_url}"
```

Verify the file downloaded successfully (non-zero size).

## I4. Embed in Note

Insert a `## Schematics` section **immediately after the frontmatter closing `---`** and before `## Definition` (for wiki notes) or before the first body heading (for research notes).

**Embedding format** — each image uses two lines:

```markdown
![[{ConceptName}_{descriptor}.{ext}]]
*Caption describing what the image shows. (License, source attribution)*
```

- One blank line between image–caption pairs.
- Caption is italic (`*...*`), describes the content, and ends with parenthesized license + source.
- If the note already has a `## Schematics` section, append new images to it rather than creating a duplicate section.

## I5. Image Report

Append to the mode's post-creation/post-scan report:

```
Images:
  Local:    {count} existing in Attachments
  Fetched:  {count} downloaded from Wikimedia Commons
  Embedded: {list of ![[filenames]]}
```
