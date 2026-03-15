---
area: "[[Physics]]"
tags: [accelerator, trigger, data-acquisition]
created: 2026-03-12
last_reviewed:
next_review: 2026-03-12
review_interval: 0
---
# Spill Gate

## Definition

A spill gate is a timing signal from a synchrotron that defines the window (typically ~100–500 ms) during which beam is being extracted and delivered to the experimental target, used by the trigger and [[DAQ]] systems to accept or reject detector signals.

## Key Points

- **Origin**: Synchrotrons accumulate and accelerate particles, then slowly extract them in a burst called a "spill"; the spill gate signal marks the start and end of this extraction
- **Trigger role**: The [[DAQ]] only accepts triggers while the spill gate is open — detector hits outside the spill window are ignored, reducing background and dead-time overhead
- **Duty cycle**: The fraction of time beam is actually present (spill duration / cycle period); a 200 ms spill in a 1 s cycle gives 20% duty cycle, meaning all events are compressed into that window
- **Rate implications**: Effective instantaneous rate during a spill is higher than the average rate — e.g., $10^3$ pps average with 20% duty cycle means ~$5 \times 10^3$ particles/s instantaneous during the spill

## Examples

- At IMP's CSR (Cooler Storage Ring), the slow extraction delivers beam in spills of ~200 ms; the trigger system gates all [[Time-of-Flight]] and [[MUSIC Detector|MUSIC]] signals to this window
- At GSI's SIS18, spill durations range from ~100 ms to several seconds depending on the extraction scheme, with the spill gate synchronizing the entire [[DAQ]] chain

## Related Concepts

- [[DAQ]]
- [[Coincidence Detection]]
- [[Dead Time]]
- [[Time-of-Flight]]
- [[MUSIC Detector]]
- [[Radioactive Isotope Beam]]

## References

- Haberer, T. et al. (1993). *Nuclear Instruments and Methods A*, 330, 296–305 — slow extraction and spill structure at SIS
