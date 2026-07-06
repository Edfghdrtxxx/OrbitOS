---
area: "[[Physics]]"
tags: [detector-physics, nuclear-instrumentation, particle-tracking]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Time Projection Chamber

## Definition

A Time Projection Chamber (TPC) is a gaseous (or liquid) particle detector that reconstructs 3D charged-particle trajectories by combining 2D position readout from a segmented anode with drift-time measurement along the electric field direction, providing continuous tracking with particle identification via specific energy loss ($\mathrm{d}E/\mathrm{d}x$).

## Key Points

- **Operating principle**: Charged particles ionize the gas; liberated electrons drift in a uniform electric field toward the readout plane; the 2D hit position combined with measured drift time yields full 3D track reconstruction
- **Particle identification**: The $\mathrm{d}E/\mathrm{d}x$ (energy loss per unit length) measured along the track follows the [[Bethe-Bloch Formula]] and distinguishes particle species — a core technique for particle identification in direct reactions
- **Readout technologies**: Pad planes, [[Micromegas]], [[GEM Detector|GEM]]-based amplification stages; digitized by [[ADC]]s and processed in [[FPGA]] firmware with [[Constant Ratio Timing|digital CFD]] for precise drift-time extraction
- **Key parameters**: Drift velocity (depends on gas mixture and field), diffusion (limits spatial resolution), and gain (from gas amplification)

## Examples

- The ALICE TPC at CERN is one of the largest TPCs ever built ($90\;\text{m}^3$ gas volume), providing tracking and $\mathrm{d}E/\mathrm{d}x$-based particle identification for heavy-ion collisions at the LHC
- At IMP-CAS, TPCs are used in direct-reaction experiments to reconstruct light-ion tracks and measure angular distributions for nuclear structure studies

## Related Concepts

- [[Constant Ratio Timing]]
- [[FPGA]]
- [[Ionizing Radiation]]
- [[Time-of-Flight]]
- [[Scintillation Detector]]
- [[Bethe-Bloch Formula]]
- [[GEM Detector]]
- [[Micromegas]]

## References

- Blum, W., Riegler, W., & Rolandi, L. (2008). *Particle Detection with Drift Chambers*, 2nd ed. Springer
- Nygren, D. R. (1974). "The Time Projection Chamber: A New 4π Detector for Charged Particles." *PEP Summer Study*, PEP-0144

## Papers

- [[Acciarri 2016 — CNNs Applied to Neutrino Events in a LArTPC]] (2016) — treats the 90-ton MicroBooNE LArTPC as a camera: three wire planes at 3 mm pitch imaged at **0.55 mm per pixel** along the drift axis with 12-bit ADC charge, with ~**10%** unresponsive wires handled in image preparation.
- [[Kuchera 2019 — ML Track Classification in the AT-TPC]] (2019) — AT-TPC events (10,240 pads x 512 time buckets = **5,242,880 voxels/event**) are compressed to 128x128 xy-projection images so pre-trained 2D CNNs can classify proton tracks directly from detector output.
- [[He 2023 — ML in Nuclear Physics at Low and Intermediate Energies]] (2023) — CNNs classify and fit short 3D tracks in the NSCL Active-Target TPC using both simulated and experimental data (harder than high-energy tracking; no benchmark quoted for AT-TPC itself), in a review whose comparable CNN event-classification tasks reach **95% accuracy**.
- [[Wu 2023 — ML for 12C Event Classification in AT-TPC]] (2023) — CNN vertex/energy/angle reconstruction on simulated fMata-TPC (active target) events reaches pad-granularity limits; vertex **sigma_z = 1.12 mm** and energy sigma_E < 77 keV with ResNet-18.
- [[Dey 2024 — Point-Cloud ML for Fission Event Classification in the AT-TPC]] (2024) — PointNet on native 4D (x,y,z,q) AT-TPC point clouds recovers fission events that hand-tuned track cuts leave unlabeled; combined heuristic+ML pipeline identifies **98.9% of all fission events** across 6,280,362 recorded events.
- [[Zhang 2025 — ML Event Classification and Vertex Reconstruction with MATE-TPC]] (2025) — 1024-channel MATE active-target TPC fusion measurement analyzed by rendering two-plane track projections as images; training set of **65,000 simulated fusion + 48,000 elastic events** from the MATEROOT (Geant4) digitization chain.
- [[Benchikhi — Domain Adaptation for Electron Identification]] (MSc thesis, n.d.) — the TPC dE/dx signal carries the largest MC-vs-real discrepancy, so two momentum-weighted dE/dx features were added to focus the adaptation on it; quality tracks require at least **70 TPC clusters** (of 159 max) and 100 crossed rows.
