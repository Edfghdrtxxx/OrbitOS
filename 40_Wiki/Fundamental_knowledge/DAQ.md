---
area: "[[Physics]]"
tags:
  - experimental-methods
  - nuclear-instrumentation
  - electronics
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# DAQ

## Definition

A Data Acquisition System (DAQ) is the integrated hardware and software chain that reads out detector signals, digitises them, applies real-time event selection, and stores the resulting physics data — forming the central infrastructure of any nuclear or particle physics experiment.

## Key Points

- **Signal chain:** Detector → preamplifier → shaper/discriminator → [[ADC]] (analogue-to-digital converter) → [[FPGA]]-based logic → event builder → storage
- **Trigger system:** A multi-level logic (often implemented on [[FPGA]]s) that decides in real time which events to record, rejecting backgrounds while keeping physics signals with minimal [[Dead Time]]
- **Readout architectures:** Range from simple single-channel scalers to massively parallel systems reading thousands of [[Time Projection Chamber]] pads or [[Scintillation Detector]] channels simultaneously
- **Data rates:** Modern experiments (e.g., at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]] or the LHC) can produce raw data at GB/s, requiring on-the-fly compression and filtering
- **Software layer:** Frameworks like MIDAS, ADAQ, or FRIB's NSCLDAQ provide run control, online monitoring, and data format management

## Examples

- The GET (General Electronics for TPCs) system digitises all pads of a [[Time Projection Chamber]] at 100 MHz, with [[FPGA]]-level zero suppression reducing data volume by orders of magnitude before storage
- A simple [[Gamma Spectroscopy]] DAQ consists of a [[Scintillation Detector]], a [[Photomultiplier Tube]], a shaping amplifier, a peak-sensing [[ADC]], and a PC-based multi-channel analyser

## Related Concepts

- [[FPGA]]
- [[Time Projection Chamber]]
- [[Scintillation Detector]]
- [[Photomultiplier Tube]]
- [[Coincidence Detection]]
- [[Dead Time]]
- [[Particle Identification]]
- [[Gamma Spectroscopy]]
- [[ADC]]
- [[Trigger System]]
- [[Event Builder]]
- [[Readout Electronics]]

## References

- S. Tavernier, *Experimental Techniques in Nuclear and Particle Physics*, Springer
- H. Spieler, *Semiconductor Detector Systems*, Oxford University Press
