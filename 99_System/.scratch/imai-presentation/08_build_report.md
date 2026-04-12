# Build Report: Imai Meeting Presentation (2026-04-13)

**Generated:** 2026-04-12
**Output:** `D:\obsidian\OrbitOS\99_System\.scratch\imai-presentation\Imai_Meeting_20260413.pptx`
**File size:** 3.0 MB | **Slides:** 5 | **Format:** 16:9 widescreen

---

## Slide Contents

### Slide 1 -- Physics Motivation: Nuclear Structure Through Direct Reactions
- Shell evolution far from stability, magic number changes
- Inverse-kinematics transfer/knockout reactions as the probe
- Active-target TPCs: thick-target luminosity, full kinematic coverage
- The bottleneck: reliable PID for physics extraction
- **Figure embedded:** NST paper MATE-TPC schematic (`_page_3_Figure_9.jpeg`) -- right side
- **Speaker notes:** Shell evolution context, Otsuka RMP 2020 reference, dE-E limitations

### Slide 2 -- The PID Problem in Active-Target TPCs
- Traditional dE-E/Bragg-curve limitations with overlapping distributions
- MATE-TPC specs: GEM, 3792 triangular pads, GET electronics, 12C+12C commissioning
- Key insight: 2D track images contain rich species info
- Our approach: CNNs on track images, ResNet-18 + CrossAttention
- **Figure embedded:** NST paper 3D track displays (`_page_5_Figure_3.jpeg`) -- right side
- **Speaker notes:** HC preprocessing, DBSCAN denoising, Hough mislabeling rate

### Slide 3 -- Results: Event Classification to Trajectory Reconstruction
- PID: 90-97% elastic/fusion, ~95% across 5 channels (NST-2025-0958)
- Architecture: CrossAtt+HC 95.80% (EXP1, matched 100k); EXP2 fusion comparison
- Trajectory: CrossAtt MAE improvement -16.1% (p<10^-16), 65.3% -> 72.9% high-tier
- Takeaway: pipeline generalizes -- classification AND regression
- **Figure embedded:** `cross_task_honest_comparison.png` (3-panel: Isotope ID / Track Class / Angle Reg) -- right side
- **Speaker notes:** Detailed EXP1/EXP2 numbers, honest architecture vs data-scaling decomposition, TRK quantitative results

### Slide 4 -- Connection: From MATE-TPC (IMP) to DONUTS (UTokyo CNS)
- ML-PID maps to DONUTS: OEDO-SHARAQ, SAKURA programs
- DG-M-THGEM dual-gain active target (Iwamoto/Ota/Imai, PTEP 2023)
- 79Se(d,p) PLB 2024 flagship -- why PID matters for SAKURA
- Transferable: ResNet+CrossAtt framework, full pipeline, track reconstruction
- **Figure embedded:** `OEDO-SHARAQ.png` -- right side
- **Speaker notes:** Bridge slide framing, CAT-M shared infrastructure, "validated toolkit" messaging

### Slide 5 -- Outlook: Next Steps and Open Questions
- Extend CrossAtt-PID to DONUTS detector data
- Open questions: transfer learning across geometries, RIKEN beam conditions, SAKURA multi-body channels, ATPC Flow integration
- Broader vision: ML-augmented analysis as standard for RI-beam experiments
- Closing: "Looking forward to your guidance on the highest-impact application."
- **No figure** (text-focused closing slide)
- **Speaker notes:** Timeline context (graduation June 2027, D1 Oct 2027), suggested question to ask Imai

---

## Figures -- Embedding Status

All 4 embedded figures loaded successfully from local paths:

| Slide | Figure | Source | Status |
|-------|--------|--------|--------|
| 1 | MATE-TPC schematic | `50_Resources/.../NST-ML-12C12C-MATE/_page_3_Figure_9.jpeg` | Embedded |
| 2 | 3D track displays | `50_Resources/.../NST-ML-12C12C-MATE/_page_5_Figure_3.jpeg` | Embedded |
| 3 | Cross-task comparison | `runs/TRK-comparison/figures/cross_task_honest_comparison.png` | Embedded |
| 4 | OEDO-SHARAQ beamline | `50_Resources/Attachments/OEDO-SHARAQ.png` | Embedded |

### Figures available but not embedded (mentioned in speaker notes for optional manual insertion):
- `mate_geometry_schema.png` -- paper-quality MATE detector diagram
- `example_tracks.png` -- two-channel 80x48 TPC track images
- `cross_attention_schema.png` -- CrossAttention architecture diagram
- `v6_confusion_matrix_grid.png` -- confusion matrices across ablation variants
- `paradigm_comparison.png` -- range-energy PID vs ML paradigm comparison
- `exp2_accuracy_bars.png` -- EXP2 fusion mechanism comparison bar chart
- `attention_overlay.png` -- attention weights on TPC image
- `data_pipeline.png` -- full data pipeline schematic

---

## Design Decisions

1. **Layout:** Navy header stripe + white body + blue accent footer line. No title slide -- jumps straight to content per instruction.
2. **Font:** Calibri throughout. Titles 28pt white on navy. Body 15-16pt dark gray.
3. **Image placement:** Right 40% of slides 1-4. Bounding-box constrained to avoid overflow (max 4.5-5.0 in wide, 4.5-4.8 in tall).
4. **Bullet hierarchy:** Level-0 for main points, level-1 for supporting details. Key numbers bolded.
5. **Speaker notes:** Extensive talking points, figure paths, and backup numbers for each slide.
6. **Slide 2 figure choice:** Used NST paper 3D track displays instead of `example_tracks.png` (better visual impact showing 3D elastic vs fusion events; example_tracks is a 2-channel raster better suited for a methods slide).
7. **Slide 3 figure choice:** Used `cross_task_honest_comparison.png` (three-panel comparison across all tasks) as the primary result visualization rather than a single confusion matrix.
8. **Numbers included:** 95.80%, 90-97%, ~95%, 16.1%, p<10^-16, 65.3%->72.9%, 0.948 precision, 0.914 recall, 0.931 F1.

---

## Manual Polish Recommended

Before the 09:30 meeting:
1. Open in PowerPoint and check that figure resolution is acceptable at presentation size
2. Consider swapping/adding figures on slides where more visual impact is needed
3. Review speaker notes for talking point order and pacing
4. Slide 3 is the densest -- consider splitting or trimming if time is tight
5. Test that Unicode characters render correctly on the presentation machine (superscripts, arrows, Greek letters)

---

## Build Script

`build_pptx.py` in the same directory. Re-run with `python build_pptx.py` to regenerate.
Requires: `python-pptx`, `Pillow` (both installed).
