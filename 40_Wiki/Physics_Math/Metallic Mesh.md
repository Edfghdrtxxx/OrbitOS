---
area: "[[Physics]]"
tags: [detector, micromegas, component]
created: 2026-03-31
last_reviewed:
next_review: 2026-03-31
review_interval: 0
---
# Metallic Mesh

## Schematics

![[Metallic_Mesh_bulk_detail.png]]
*Close-up photograph of a woven metallic micro-mesh used in a bulk [[Micromegas]] detector. The regular grid pattern with $\sim 30\;\mu\text{m}$ pitch is visible. (CC BY-SA 4.0, Wikimedia Commons)*

![[Metallic_Mesh_micromegas_principle_v2.png]]
*Cross-section of a [[Micromegas]] detector. The micromesh (dashed red line) separates the 3 mm conversion (drift) region from the $\sim 100\;\mu\text{m}$ amplification gap. The drift field $E_1 \approx 1\;\text{kV/cm}$ guides primary electrons toward the mesh, where they enter the high amplification field $E_2 \approx 40\;\text{kV/cm}$ and undergo avalanche multiplication before reaching the readout strips. (CC BY-SA 3.0, Wikimedia Commons)*

## Definition

A metallic mesh is a thin, finely woven or electroformed metal grid (typically nickel, copper, or stainless steel) that serves as the boundary electrode between the drift and amplification regions in a [[Micromegas]] detector. Suspended $\sim 100\;\mu\text{m}$ above the anode plane, it is held at an intermediate voltage so that the [[Electric Field]] ratio between the two regions ($E_{\text{amp}}/E_{\text{drift}} \sim 40$) ensures near-complete electron transparency while blocking positive ions from drifting back into the conversion gap.

## Key Points

- Typical mesh parameters: wire diameter $\sim 18\text{--}30\;\mu\text{m}$, pitch $\sim 30\text{--}80\;\mu\text{m}$, resulting in optical transparency of $\sim 50\text{--}80\%$ depending on weave geometry
- Electron transparency approaches $> 95\%$ when the field ratio $E_{\text{amp}}/E_{\text{drift}}$ exceeds $\sim 20$, because field lines funnel through the mesh openings and efficiently capture drifting electrons into the amplification gap
- In the **bulk Micromegas** fabrication technique, the mesh is laminated directly onto a PCB using photolithographic pillars ($\sim 128\;\mu\text{m}$ height) that define the amplification gap with micron-level uniformity across large areas
- The mesh also acts as a natural ion barrier: positive ions created in the avalanche are largely collected on the mesh electrode, suppressing [[Ion Backflow]] into the [[Time Projection Chamber|TPC]] drift volume and reducing [[Space Charge]] distortions
- Mesh quality (flatness, pitch uniformity, absence of defects) directly impacts [[Energy Resolution]] and [[Spatial Resolution]], since local gap variations cause gain non-uniformity

## Examples

- The ATLAS New Small Wheel Micromegas modules at [[CERN]] use woven stainless-steel mesh with $\sim 63\;\mu\text{m}$ pitch, stretched and laminated over $> 1{,}200\;\text{m}^2$ of active area
- [[Active-Target TPC]] detectors at [[RCNP]] and other facilities use electroformed nickel mesh with $\sim 45\;\mu\text{m}$ pitch to achieve fine spatial granularity for nuclear reaction studies

## Related Concepts

- [[Micromegas]]
- [[Time Projection Chamber]]
- [[GEM Detector]]
- [[Electric Field]]
- [[Drift Velocity]]
- [[Energy Resolution]]
- [[Spatial Resolution]]
- [[Signal-to-Noise Ratio]]
- [[Preamplifier]]
- [[FPGA]]
- [[DAQ]]
- [[CERN]]

## References

- Giomataris, Y. et al., "MICROMEGAS: a high-granularity position-sensitive gaseous detector for high particle-flux environments," *Nucl. Instrum. Methods A* **376**, 29--35 (1996)
- Giomataris, Y. et al., "Micromegas in a bulk," *Nucl. Instrum. Methods A* **560**, 405--408 (2006)
- Alexopoulos, T. et al., "A spark-resistant bulk-micromegas chamber for high-rate applications," *Nucl. Instrum. Methods A* **640**, 110--118 (2011)
