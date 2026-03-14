---
area: "[[Physics]]"
tags:
  - detector
  - signal-processing
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# Pile-up

## Definition

Pile-up is a signal distortion that occurs when two or more detector pulses arrive within a time interval shorter than the system's resolving time, causing their waveforms to overlap. This leads to incorrect amplitude (energy) measurements and can make [[PID|particle identification]] unreliable.

## Key Points

- Probability of pile-up increases with beam intensity; at high rates ($\gtrsim 10^5$ particles/s), pile-up becomes a dominant source of systematic error
- Directly related to [[Dead Time]] — both arise from finite detector/electronics response time, but pile-up specifically distorts the measured signal rather than simply missing events
- Can be diagnosed by examining pulse multiplicity (number of pulses per acquisition window) and by creating time-distribution spectra to identify correlated arrivals
- Mitigation strategies include faster electronics, waveform deconvolution, and machine learning approaches that can learn to separate overlapping pulses

## Examples

- In an [[Ionisation Chamber|ion chamber]] at high beam intensity, pile-up causes a second pulse to ride on the tail of the first, shifting the apparent $\Delta E$ and contaminating the [[PID]] spectrum
- In [[Time Projection Chamber|TPC]] experiments, pile-up of track signals can merge distinct particle tracks, complicating [[Track Reconstruction|track reconstruction]]

## Related Concepts

- [[Dead Time]]
- [[PID]]
- [[Pulse Height Spectrum]]
- [[Ionisation Chamber]]
- [[ADC]]

## References

- G. F. Knoll, *Radiation Detection and Measurement*, 4th ed., Wiley (2010), Ch. 17
