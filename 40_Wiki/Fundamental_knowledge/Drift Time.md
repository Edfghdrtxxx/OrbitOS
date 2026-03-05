---
area: "[[Physics]]"
tags: [gaseous-detectors, TPC, timing]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Drift Time

## Definition

Drift Time is the interval required for ionization electrons (or ions) to travel from their point of creation to the collection electrode in a gaseous or liquid detector, serving as the primary measurable that converts timing information into spatial position.

## Key Points

- **Governing relation**: \(t_{\text{drift}} = d / v_d\), where \(d\) is the drift distance and \(v_d\) is the [[Drift Velocity|drift velocity]] determined by the [[Electric Field|electric field]] strength and gas mixture
- **Spatial reconstruction**: In a [[Time Projection Chamber]], the drift time of each electron cluster is multiplied by the calibrated drift velocity to recover the coordinate along the electric field axis, enabling full 3D [[Track Reconstruction]]
- **Error sources**: [[Time Walk]], [[Diffusion|diffusion]] (both longitudinal and transverse), and electric-field non-uniformities degrade the drift-time-to-position mapping
- **Typical values**: Ranges from ~100 ns (mm-scale [[Micromegas]] gaps) to ~100 µs (metre-scale TPCs), depending on detector geometry and drift field
- **Calibration**: Drift velocity is measured in-situ using known reference tracks or laser ionization systems; temperature and pressure must be monitored because $v_d$ is sensitive to gas density

## Examples

- In the ALICE TPC at CERN, the maximum drift length is $\sim 2.5\;\text{m}$ with a drift time of $\sim 90\;\mu\text{s}$ at a field of $\sim 400\;\text{V/cm}$ in a $\text{Ne/CO}_2/\text{N}_2$ mixture
- In a small [[Micromegas]]-based detector with a 5 mm drift gap, electrons arrive at the mesh within ~100 ns, yielding sub-100 µm [[Spatial Resolution|position resolution]] after [[Time Walk]] correction

## Related Concepts

- [[Time Projection Chamber]]
- [[Track Reconstruction]]
- [[Time Walk]]
- [[Micromegas]]
- [[GEM Detector]]
- [[Drift Velocity]]
- [[Electric Field]]
- [[Diffusion]]
- [[Spatial Resolution]]
- [[DAQ]]

## References

- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer — Ch. 3
- Sauli, F. (2014). *Gaseous Radiation Detectors*. Cambridge University Press — Ch. 5
