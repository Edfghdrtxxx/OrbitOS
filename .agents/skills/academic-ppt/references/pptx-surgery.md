# Surgical PPTX edits (python-pptx)

- **Clone, don't draw:** new cards, captions, asides, and titles are deep copies of an existing shape on a sibling slide, so fill, radius, shadow, font, and insets are inherited. Then set the text on the first run and delete the other runs.
- **Re-ID every clone:** deep copies keep the source `cNvPr id`. Set it to max+1 on the target slide, or you get duplicate IDs.
- **New slide from pptxgenjs decks:** the notes page may lack a body placeholder (`notes_text_frame is None`). Copy the BODY placeholder from a sibling slide's notes first.
- **Reorder or delete slides** through `sldIdLst`. When deleting, also `drop_rel(rId)`.
- **Swap an image in place:** replace the related image part's `_blob`, then reset width/height from the new aspect ratio. Only do this when the image is used once in the deck.
- **PowerPoint re-encodes media on save** (and applies crops), so after a user save, hash-matching against `assets/` can fail. Match by shape position or name instead.
- **Build on a clean base:** when a scripted edit needs a redo and nobody has edited since the handoff, copy the last version over current and rerun the script rather than editing on top.
