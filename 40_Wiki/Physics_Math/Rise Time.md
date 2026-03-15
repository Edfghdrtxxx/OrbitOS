---
area: "[[Physics]]"
tags: [signal-processing, waveform, timing]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Rise Time

## Definition

Rise Time is the interval for a detector signal pulse to transition from 10% to 90% of its peak amplitude on the [[Rising Edge]], directly governing the achievable [[Time Resolution]] and [[Jitter]] of a timing measurement.

## Key Points

- **Bandwidth relation**: Rise time and system bandwidth are inversely related — $t_r \approx 0.35 / BW$ for a single-pole system, meaning faster rise times demand wider-bandwidth electronics
- **Detector dependence**: Ranges from < 1 ns (fast plastic [[Scintillation Detector|scintillators]] + [[Photomultiplier Tube]]) to ~µs (ionisation chambers), depending on the charge-collection mechanism
- **Effect on timing**: Shorter rise times steepen the [[Rising Edge]], reducing [[Jitter]] and making the threshold crossing point less sensitive to noise and [[Pulse Height]] variations
- **Shaping trade-off**: The [[Preamplifier]] and shaping amplifier may deliberately slow the rise time to optimise [[Signal-to-Noise Ratio]] for energy measurements, at the cost of [[Time Resolution]]

## Examples

- A Hamamatsu R3809U MCP-[[Photomultiplier Tube|PMT]] has a rise time of ~150 ps, enabling [[Time-of-Flight]] measurements with < 50 ps timing precision
- In an [[HPGe Detector]] spectroscopy chain, the shaping amplifier sets a rise time of 1–10 µs to maximise [[Energy Resolution]], making the system unsuitable for sub-ns timing without a separate fast output

## Related Concepts

- [[Rising Edge]]
- [[Time Resolution]]
- [[Jitter]]
- [[Preamplifier]]
- [[Signal-to-Noise Ratio]]
- [[Bandwidth]]

## References

- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 7
- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. Springer — Ch. 11
