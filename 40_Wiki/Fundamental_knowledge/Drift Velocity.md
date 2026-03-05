---
area: "[[Physics]]"
tags: [gaseous-detectors, TPC, transport-properties]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Drift Velocity

## Definition

Drift Velocity is the average speed at which charge carriers (electrons or ions) move through a gas or liquid under the influence of an [[Electric Field]], determined by the balance between field acceleration and collisional energy loss — it is the calibration constant that converts [[Drift Time]] into spatial position.

## Key Points

- **Field dependence**: In gases, electron drift velocity rises with field strength, saturates around 5–8 cm/µs in common mixtures (Ar/CO₂, Ar/iC₄H₁₀), and may even decrease at very high fields due to inelastic collisions
- **Gas-mixture sensitivity**: Adding a quench gas (CO₂, CF₄, iC₄H₁₀) shifts the drift-velocity curve; small variations in gas composition directly affect [[Spatial Resolution]] and [[Track Reconstruction]] accuracy
- **Temperature/pressure**: Drift velocity scales with the reduced field \(E/N\) (field per gas density), making it sensitive to temperature and pressure changes — real-time monitoring is essential
- **Measurement**: Calibrated in-situ using straight tracks of known geometry or dedicated laser-ionisation systems in a [[Time Projection Chamber]]

## Examples

- In the ALICE TPC, electrons drift at ~2.7 cm/µs in a Ne/CO₂/N₂ (90/10/5) mixture at ~400 V/cm; a 1% velocity error over the 2.5 m drift length translates to ~2.5 cm position shift
- In a [[Micromegas]] detector operating in Ar/iC₄H₁₀ (95/5), the drift velocity plateau near 5 cm/µs at ~600 V/cm minimises sensitivity to field fluctuations

## Related Concepts

- [[Drift Time]]
- [[Electric Field]]
- [[Time Projection Chamber]]
- [[Spatial Resolution]]
- [[Diffusion]]
- [[Track Reconstruction]]
- [[Mobility]]

## References

- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer — Ch. 2
- Sauli, F. (2014). *Gaseous Radiation Detectors*. Cambridge University Press — Ch. 3
