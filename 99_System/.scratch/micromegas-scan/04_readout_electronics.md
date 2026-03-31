# Scratch Report: Readout Electronics

**Date:** 2026-03-31
**Wiki note:** `40_Wiki/Physics_Math/Readout Electronics.md`

## Duplicate Check
- No existing note at `40_Wiki/**/Readout Electronics.md`
- No matches in `50_Resources/` or `30_Research/`
- Note `DAQ.md` already contained a wikilink `[[Readout Electronics]]` (red link now resolved)

## Wikilink Discovery
Scanned all `40_Wiki/**/*.md` (~90+ notes). Relevant existing notes wikilinked:
- [[ADC]], [[TDC]], [[FPGA]], [[ASIC]], [[DAQ]], [[Dead Time]], [[Energy Resolution]]
- [[Time Projection Chamber]], [[Scintillation Detector]], [[Photomultiplier Tube]]
- [[Leading-Edge Discriminator]], [[Constant Fraction Discriminator]]
- [[Coincidence Detection]], [[Track Reconstruction]], [[Silicon Photomultiplier]]
- [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]]

## Image Enrichment
- No pre-existing images at `50_Resources/Attachments/Readout_Electronics_*`
- Wikipedia API for `Readout_integrated_circuit` returned 4 images
- Selected: `Readout_integrated_circuit_(ROIC)_block_diagram.jpg` -- ROIC architecture diagram showing pixel array, column buffers, PGA, and output drivers
- Downloaded to: `50_Resources/Attachments/Readout_Electronics_ROIC_block_diagram.jpg` (32.6 KB)
- Visually verified: clear block diagram, relevant to readout IC architecture

## Content Summary
- Atomic note covering the full signal chain: preamplifier -> shaper -> discriminator -> ADC/TDC -> FPGA/ASIC -> DAQ
- Key points: front-end amplification (CSA), pulse shaping (CR-RC^n), discriminators, digitization, digital back-end, ASIC vs FPGA trade-off, noise budget, grounding/shielding
- Examples: GET system for TPCs, scintillator coincidence setup, SAMURAI at RIKEN
- References: Spieler, Knoll, Blum et al., Pollacco et al. (GET paper)
- LaTeX equations for charge-to-voltage conversion and noise scaling

## Status
Complete. Note is atomic, self-contained, and richly cross-linked to 15 existing wiki notes.
