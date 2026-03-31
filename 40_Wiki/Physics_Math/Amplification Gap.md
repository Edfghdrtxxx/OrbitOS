---
area: "[[Physics]]"
tags: [detector, micromegas, gas-detector]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# Amplification Gap

## Schematics

![[Micromegas_principle.png]]
*Cross-section of a [[Micromegas]] detector. The amplification gap is the narrow region between the metallic micro-mesh and the anode strips (bottom), where the [[Electric Field]] reaches ~40 kV/cm and triggers [[Avalanche Multiplication|electron avalanche]] multiplication. The wider drift/conversion gap above the mesh operates at a much lower field (~1 kV/cm). (CC BY-SA 3.0, Wikimedia Commons)*

## Definition

The Amplification Gap is the narrow region (typically $100$–$128\;\mu\text{m}$) in a [[Micromegas]] detector between the [[Metallic Mesh]] and the anode readout plane. A large potential difference applied across this small distance creates a very high [[Electric Field]] ($\sim 40$–$50\;\text{kV/cm}$), sufficient to accelerate ionisation electrons above the gas excitation and ionisation thresholds and initiate an [[Avalanche Multiplication|electron avalanche]] — the Townsend avalanche process. This confined high-field region is what converts a few primary electrons (produced by [[Ionizing Radiation]] in the drift gap above) into a detectable charge signal with gas gains of $\sim 10^3$–$10^4$.

## Key Points

- **Geometry**: The gap width is set mechanically by insulating pillars (photolithographic or stretched-mesh spacers) that hold the [[Metallic Mesh]] at a precise, uniform distance ($\sim 100$–$128\;\mu\text{m}$) above the anode. Uniformity of this gap is critical for gain homogeneity across the detector surface.
- **Field ratio**: The amplification field $E_\text{amp} \sim 40$–$50\;\text{kV/cm}$ is roughly $40$–$80\times$ the drift field $E_\text{drift} \sim 0.5$–$1\;\text{kV/cm}$ in the conversion gap above. This large ratio ensures that virtually all electrons crossing the mesh are funneled into the avalanche region (high mesh transparency), quantified by:
$$
r = \frac{E_\text{amp}}{E_\text{drift}} \gg 1
$$
- **Avalanche physics**: Electrons crossing the mesh gain enough energy between collisions with gas molecules to liberate secondary electrons. The gas gain $G$ follows:
$$
G = e^{\alpha \, d}
$$
  where $\alpha$ is the first Townsend coefficient (ionisations per unit length, strongly dependent on $E/p$, the reduced field) and $d$ is the gap width.
- **Fast signals**: Because the gap is so narrow, the electron component of the induced signal is collected in $\sim 1$–$2\;\text{ns}$ and the slower ion component drifts back to the mesh in $\sim 100\;\text{ns}$. This gives [[Micromegas]] detectors excellent [[Time Resolution]] ($\lesssim 10\;\text{ns}$) and low sensitivity to [[Pile-up]] in high-rate environments.
- **Spark protection**: At very high gains or with heavily ionising particles, the avalanche can transition into a discharge (spark). Modern bulk Micromegas mitigate this with [[Resistive Anode]] layers that locally quench sparks and limit the stored energy released, preserving detector lifetime and reducing [[Dead Time]].

## Examples

- In a standard bulk [[Micromegas]] with a $128\;\mu\text{m}$ amplification gap filled with Ar:[[Isobutane]] (95:5) at atmospheric pressure, an amplification field of $\sim 45\;\text{kV/cm}$ yields a gas gain of $\sim 10^4$ — sufficient to detect single primary electrons from minimum-ionising particles.
- Compared to [[GEM Detector]]s (where amplification occurs inside micro-holes in a foil) and [[THGEM]]s (drilled PCB holes), the Micromegas amplification gap is a single planar region — geometrically simpler but requiring tighter mechanical tolerances on mesh-to-anode distance.

## Related Concepts

- [[Micromegas]]
- [[Electric Field]]
- [[Avalanche Multiplication|Electron Avalanche]]
- [[Avalanche Multiplication|Gas Amplification]]
- [[Resistive Anode]]
- [[Metallic Mesh]]
- [[Time Projection Chamber]]
- [[GEM Detector]]
- [[THGEM]]
- [[Drift Velocity]]
- [[Diffusion]]
- [[Time Resolution]]
- [[Energy Resolution]]
- [[Spatial Resolution]]
- [[Dead Time]]
- [[Ionizing Radiation]]
- [[Readout Electronics]]
- [[Signal-to-Noise Ratio]]

## References

- Giomataris, Y. et al., "MICROMEGAS: a high-granularity position-sensitive gaseous detector for high particle-flux environments," *Nucl. Instrum. Meth. A* **376**, 29–35 (1996)
- Giomataris, Y. et al., "Micromegas in a bulk," *Nucl. Instrum. Meth. A* **560**, 405–408 (2006)
- Blum, W., Riegler, W., & Rolandi, L., *Particle Detection with Drift Chambers*, 2nd ed. Springer (2008) — Ch. 6 (gas amplification)
