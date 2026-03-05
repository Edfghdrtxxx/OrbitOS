---
area: "[[Physics]]"
tags: [electronics, digital-design, instrumentation]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# FPGA

## Definition

A Field-Programmable Gate Array (FPGA) is a reconfigurable integrated circuit containing an array of programmable logic blocks and interconnects, allowing custom digital circuits to be implemented in hardware after manufacturing — widely used in nuclear and particle physics for real-time data acquisition and trigger logic.

## Key Points

- **Architecture**: Configurable Logic Blocks (CLBs), I/O blocks, block RAM, DSP slices, and a programmable interconnect fabric; programmed via HDL (Verilog/VHDL)
- **Advantages over software**: Deterministic, parallel execution with nanosecond-scale latency — essential for real-time trigger decisions and [[Constant Ratio Timing|digital CFD]] implementations
- **Physics applications**: Digital pulse processing (energy extraction, [[Constant Ratio Timing]]), trigger/[[Coincidence Detection|coincidence]] logic, data readout from [[Time Projection Chamber|TPCs]] and [[Scintillation Detector|scintillation detectors]]
- **Common families**: Xilinx (AMD) Artix/Kintex/Virtex, Intel (Altera) Cyclone/Stratix

## Examples

- A Kintex-7 FPGA implements a digital [[Constant Fraction Discriminator]] on 128 channels simultaneously, providing sub-nanosecond timestamps for a [[Time-of-Flight]] detector array
- In [[Time Projection Chamber|TPC]] readout electronics, FPGAs perform zero suppression and pedestal subtraction on raw ADC data before transmission to the DAQ system

## Related Concepts

- [[Constant Ratio Timing]]
- [[Time Projection Chamber]]
- [[Scintillation Detector]]
- [[Coincidence Detection]]
- [[Time-of-Flight]]
- [[ASIC]]
- [[ADC]]

## References

- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 13 (Digital electronics)
- Maxfield, C. (2004). *The Design Warrior's Guide to FPGAs*. Newnes
