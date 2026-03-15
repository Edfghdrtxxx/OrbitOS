---
area: "[[Physics]]"
tags: [gaseous-detectors, radiation, nuclear-instrumentation]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Ionisation Chamber

## Definition

An Ionisation Chamber is a gaseous radiation detector that operates by collecting the charge produced when [[Ionizing Radiation]] creates electron–ion pairs in a gas-filled volume under an [[Electric Field]] — it operates without internal gas gain, making it the simplest and most linear charge-collection device.

## Key Points

- **Operating principle**: An applied [[Electric Field]] (typically 100–1000 V/cm) sweeps ionisation electrons to the anode and ions to the cathode before they recombine; the collected charge is proportional to the deposited energy
- **No gas gain**: Unlike [[Micromegas]] or [[GEM Detector|GEM]] detectors, the field is too low for avalanche multiplication — the signal equals the primary ionisation charge only, requiring a sensitive [[Preamplifier|charge-sensitive preamplifier]] with low noise
- **Signal characteristics**: Slow [[Rise Time]] (~µs, limited by ion drift) and small [[Pulse Height]], making ionisation chambers unsuitable for fast timing but excellent for precise dosimetry and high-rate current-mode operation
- **Modes**: Pulse mode (counts individual events), current mode (measures average current proportional to dose rate, used in [[Dosimetry]]), and integrating mode (total accumulated charge)

## Examples

- Parallel-plate ionisation chambers are the reference instrument for absolute [[Dosimetry]] in radiotherapy, measuring absorbed dose to water with < 1% uncertainty
- A Frisch-grid ionisation chamber provides energy spectroscopy of alpha particles and fission fragments, using the grid to eliminate the slow ion-signal contribution and improve [[Energy Resolution]]

## Related Concepts

- [[Ionizing Radiation]]
- [[Electric Field]]
- [[Dosimetry]]
- [[Preamplifier]]
- [[Rise Time]]
- [[Energy Resolution]]
- [[Micromegas]]
- [[GEM Detector]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 5
- Sauli, F. (2014). *Gaseous Radiation Detectors*. Cambridge University Press — Ch. 1
