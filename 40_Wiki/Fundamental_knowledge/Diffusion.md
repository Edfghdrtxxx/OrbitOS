---
area: "[[Physics]]"
tags: [gaseous-detectors, transport-properties, TPC]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Diffusion

## Definition

Diffusion (in the context of gaseous and liquid detectors) is the random spreading of a charge-carrier cloud due to thermal motion as it drifts under an [[Electric Field]], broadening the spatial distribution of ionization electrons and directly limiting [[Spatial Resolution]].

## Key Points

- **Longitudinal vs. transverse**: Diffusion along the drift direction (longitudinal, \(D_L\)) and perpendicular to it (transverse, \(D_T\)) are generally different; both grow as \(\sigma \propto \sqrt{L}\), where \(L\) is the drift distance
- **Gas-mixture dependence**: Cool gases (CO₂, CF₄) suppress diffusion; Ar/CO₂ mixtures achieve \(D_T \sim\) 200–300 µm/√cm, while pure Ar can exceed 500 µm/√cm
- **Impact on resolution**: Transverse diffusion limits position resolution perpendicular to the drift, while longitudinal diffusion smears the [[Drift Time]] distribution and degrades resolution along the [[Electric Field]] axis — both degrade [[Track Reconstruction]]
- **Relation to drift velocity**: [[Drift Velocity]] and diffusion coefficients are both functions of the reduced field \(E/N\); choosing an operating point where velocity is near its plateau often coincides with low diffusion

## Examples

- In the ALICE TPC (2.5 m drift in Ne/CO₂/N₂), longitudinal diffusion spreads the electron cloud by ~3 mm RMS at maximum drift, contributing to the ~0.8 mm total [[Spatial Resolution]]
- A [[Micromegas]] with a 6 mm drift gap in Ar/iC₄H₁₀ has negligible diffusion broadening (~70 µm RMS), making the readout strip pitch the dominant resolution limit

## Related Concepts

- [[Drift Time]]
- [[Drift Velocity]]
- [[Spatial Resolution]]
- [[Electric Field]]
- [[Time Projection Chamber]]
- [[Track Reconstruction]]

## References

- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer — Ch. 2
- Sauli, F. (2014). *Gaseous Radiation Detectors*. Cambridge University Press — Ch. 3
