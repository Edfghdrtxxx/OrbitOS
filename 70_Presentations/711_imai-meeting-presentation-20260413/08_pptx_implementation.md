# PPTX Implementation Report

**File:** `D:\Something\research\MATE-Automation-V4\presentations\imai_meeting_20260413.pptx`
**Built:** 2026-04-12 via PptxGenJS 4.0.1
**Size:** 7.7 MB (8 images embedded)

---

## Slide Summary

### Slide 1 — Physics Motivation: Understanding Nuclear Structure Through Direct Reactions
- **Layout:** Dark navy background, text left, figure right
- **Content:** Shell evolution, inverse-kinematics direct reactions, AT-TPC advantages, PID bottleneck
- **Figures:** `mate_geometry_schema.png` (MATE detector schematic), `mate_pad_geometry.png` (pad layout inset)
- **Design notes:** Teal accent bar, Georgia headers, Calibri body, bullet hierarchy with muted sub-text

### Slide 2 — The PID Challenge in Active-Target TPCs
- **Layout:** Light off-white background, card left (text), two images right
- **Content:** Traditional method limitations, MATE-TPC specs, key insight about 2D track images, AFTPC pipeline
- **Figures:** `_page_5_Figure_3.jpeg` (NST paper 3D track displays), `paradigm_comparison.png` (Range-Energy vs CNN)
- **Design notes:** White card with shadow, two stacked images with captions

### Slide 3 — Results: Event Classification to Trajectory Reconstruction
- **Layout:** Dark deep-blue background, 3 stat callout cards top, 2 figures bottom
- **Content:** Three headline numbers: 90-97% PID, 95.80% CrossAtt+HC, -16.1% MAE reduction
- **Figures:** `v6_confusion_matrix_grid.png` (2x2 ablation), `cross_task_honest_comparison.png` (3-panel cross-task)
- **Design notes:** Cards with teal/seafoam/red left-border accents, large stat numbers (32pt)

### Slide 4 — Connection: From MATE to DONUTS
- **Layout:** Light off-white background, 3 content cards (OEDO-SHARAQ, SAKURA, Shared Challenge), 2 figures bottom
- **Content:** DONUTS program mapping, SAKURA surrogate reactions, shared GEM-based AT-TPC infrastructure
- **Figures:** `cross_attention_schema.png` (architecture diagram), `data_pipeline.png` (end-to-end pipeline)
- **Design notes:** Cards with colored top borders, shadow, specific references to Imai publications

### Slide 5 — Outlook & Discussion
- **Layout:** Dark navy background, 3-column cards, bottom highlight box
- **Content:** Next steps, open questions, discussion prompts for Imai-sensei
- **Figures:** None (text-focused closing slide with emphasis on discussion)
- **Design notes:** Seafoam/teal/red left-border accents, core message callout box at bottom

---

## Figures Included (8 total)

| Slide | Figure | Source Path |
|-------|--------|-------------|
| 1 | MATE detector schematic | `10_Papers-Thesis/Physics_Informed/figures/mate_geometry_schema.png` |
| 1 | Pad geometry | `10_Papers-Thesis/Physics_Informed/figures/mate_pad_geometry.png` |
| 2 | 3D track displays (NST) | `50_Resources/Physics/literature/MLforPhysics/NST-ML-12C12C-MATE/_page_5_Figure_3.jpeg` |
| 2 | Paradigm comparison | `runs/EXP1-XA-HC-100k/.../figures/paradigm_comparison.png` |
| 3 | Confusion matrix grid | `10_Papers-Thesis/Physics_Informed/figures/v6_confusion_matrix_grid.png` |
| 3 | Cross-task comparison | `runs/TRK-comparison/figures/cross_task_honest_comparison.png` |
| 4 | CrossAttention schema | `10_Papers-Thesis/Physics_Informed/figures/cross_attention_schema.png` |
| 4 | Data pipeline | `10_Papers-Thesis/Physics_Informed/figures/data_pipeline.png` |

---

## Design Decisions

1. **Color palette:** Ocean Gradient variant (navy/deep-blue/teal/seafoam) — chosen to match physics/academic tone while avoiding generic blue
2. **Typography:** Georgia headers (personality) + Calibri body (clean), consistent with SKILL.md recommendations
3. **Layout variety:** Dark-light-dark-light-dark sandwich structure; stat cards, content cards, and discussion cards across slides
4. **Figure selection:** Prioritized PNG versions (PptxGenJS compatibility); chose publication-quality thesis figures over NST paper extracts where possible; used NST paper track images (Slide 2) since they show real experimental data
5. **Slide 5 has no images:** Intentional — the closing slide is a discussion invitation, not a data slide. The emphasis box at the bottom carries the core message
6. **No icons:** react-icons/sharp not installed globally; used colored accent bars and card layouts for visual structure instead
7. **Unicode characters:** Used Unicode for superscripts/subscripts (12C, 3He, 79Se etc.) and special chars (arrow, pi, gamma) since PptxGenJS handles these natively

---

## QA Results

- **Content QA:** All 5 slides verified via markitdown extraction — correct order, no missing content, no placeholder text
- **Overflow check:** python-pptx position analysis confirms zero elements overflow slide boundaries (10.00" x 5.62")
- **Image embedding:** 8 images across 4 slides (2 per slide), file size 7.7 MB confirms all embedded
- **Visual QA limitation:** LibreOffice not available on this Windows machine; soffice.py fails on AF_UNIX socket. Thumbnail.py also depends on soffice. Visual inspection deferred to presenter opening the file in PowerPoint.

---

## Build Artifact

Generator script: `D:\Something\research\MATE-Automation-V4\presentations\build_imai_pptx.js`
Run command: `NODE_PATH="$(npm root -g)" node build_imai_pptx.js`
