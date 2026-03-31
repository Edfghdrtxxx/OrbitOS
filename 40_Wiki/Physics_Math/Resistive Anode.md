---
area: "[[Physics]]"
tags: [detector, micromegas, spark-protection]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# Resistive Anode

## Schematics

*No suitable open-license schematics found on Wikimedia Commons for this topic. A schematic would show: a segmented copper readout plane covered by a thin resistive layer (resistive paste, DLC, or resistive Kapton), with the [[Micromegas]] mesh above and the [[Amplification Gap]] in between.*

## Definition

A resistive anode is a spark-protection technique for micro-pattern gaseous detectors (MPGDs) in which a thin layer of high-resistivity material is deposited on top of the readout electrode. When a discharge (spark) occurs in the [[Amplification Gap]], the resistive layer limits the instantaneous current by distributing the charge over a finite $RC$ time constant, thereby reducing the energy deposited locally and preventing damage to the readout [[ASIC]]s and strips.

## Key Points

- **Mechanism:** During normal operation, signal electrons from the avalanche induce charge on the underlying readout pads/strips through the resistive layer capacitively. When a spark develops, the resistive layer acts as a distributed $RC$ network: the local voltage drops, quenching the discharge before it can deliver destructive energy. The characteristic quenching time scales as $\tau \sim R_\square \cdot C$, where $R_\square$ is the sheet resistance ($\sim 0.1$–$10\;\text{M}\Omega/\square$) and $C$ is the local capacitance per unit area.
- **Materials:** Common resistive coatings include:
  - **Resistive paste** (screen-printed carbon-loaded ink) -- the original approach used in early prototypes
  - **Diamond-Like Carbon (DLC)** -- sputtered amorphous carbon film with tuneable resistivity ($10^6$--$10^{10}\;\Omega\cdot\text{cm}$)
  - **Resistive Kapton** -- a Kapton foil with embedded or coated resistive layers, used in [[GEM Detector]] variants as well
- **Rate capability tradeoff:** The same $RC$ time constant that quenches sparks also governs how quickly the signal charge drains from the resistive surface. Higher $R_\square$ improves spark protection but increases the charge spreading time and limits the maximum counting rate. For $R_\square \sim 1\;\text{M}\Omega/\square$ and pad pitch $\sim 1\;\text{mm}$, rate capability is typically limited to $\sim 10\;\text{kHz/cm}^2$. Optimising $R_\square$ is therefore a balance between robustness and rate performance.
- **Spatial resolution:** Resistive charge spreading can actually *improve* [[Spatial Resolution]] by distributing the signal over multiple readout pads, enabling interpolation (centroid reconstruction) to achieve sub-pitch position accuracy ($< 100\;\mu\text{m}$).
- **Gain stability:** Because discharges are suppressed, the detector can operate at higher gains ($\sim 10^4$) without risk of accumulated damage, improving long-term [[Energy Resolution]] and [[Signal-to-Noise Ratio]].

## Examples

- **ATLAS New Small Wheel (NSW):** The largest deployment of resistive [[Micromegas]] to date -- over $1{,}200\;\text{m}^2$ of resistive-strip Micromegas modules provide muon tracking and triggering in the LHC forward region. Uses DLC or resistive paste with $R_\square \sim 10$--$20\;\text{M}\Omega/\square$ on the readout strips.
- **T2K TPC upgrade:** Resistive bulk [[Micromegas]] modules with resistive Kapton foils were developed for the ND280 upgrade to handle higher beam intensities while maintaining spark protection.
- **R&D at CERN RD51:** Systematic studies of resistive [[THGEM]] and resistive Micromegas prototypes, comparing DLC and screen-printed resistive layers, have established design guidelines for resistivity vs. rate capability.

## Related Concepts

- [[Micromegas]]
- [[GEM Detector]]
- [[THGEM]]
- [[Time Projection Chamber]]
- [[Amplification Gap]]
- [[Electric Field]]
- [[Dead Time]]
- [[Spatial Resolution]]
- [[Energy Resolution]]
- [[Signal-to-Noise Ratio]]
- [[ASIC]]
- [[Readout Electronics]]
- [[Dynamic Range]]

## References

- Alexopoulos, T. et al., "A spark-resistant bulk-Micromegas chamber for high-rate applications," Nuclear Instruments and Methods A, 2011
- Dixit, M. S. et al., "Position sensing from charge dispersion in micropattern gas detectors with a resistive anode," Nuclear Instruments and Methods A, 2004
- Bencivenni, G. et al., "Performance of resistive Micromegas for the ATLAS New Small Wheel," Journal of Instrumentation, 2017
