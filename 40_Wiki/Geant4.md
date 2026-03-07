---
area:
tags: [hep, simulation]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# Geant4

## Definition

Geant4 (GEometry ANd Tracking 4) is a C++ toolkit developed at [[CERN]] and collaborating institutes for simulating the passage of particles through matter. It is the standard Monte Carlo simulation framework in high-energy and nuclear physics experiments.

## Key Points

- Models electromagnetic, hadronic, and optical physics processes across a wide energy range (eV to TeV)
- Users define detector geometry, materials, and sensitive volumes; Geant4 handles particle transport and energy deposition
- Output is typically analyzed with the [[ROOT Framework]] — hit collections and energy deposits are written to `.root` files
- Used beyond HEP: medical physics (proton therapy planning), space radiation, and nuclear engineering
- Detector components like [[Scintillation Detector]]s, [[GEM Detector]]s, and [[Silicon Photomultiplier]]s are routinely modeled in Geant4

## Examples

```cpp
// Minimal Geant4 setup (simplified)
G4RunManager* runManager = new G4RunManager;
runManager->SetUserInitialization(new MyDetectorConstruction());
runManager->SetUserInitialization(new FTFP_BERT());  // physics list
runManager->SetUserAction(new MyPrimaryGeneratorAction());
runManager->Initialize();
runManager->BeamOn(10000);  // simulate 10k events
```

## Related Concepts

- [[CERN]]
- [[ROOT Framework]]
- [[Scintillation Detector]]
- [[GEM Detector]]
- [[Silicon Photomultiplier]]
- [[Bethe-Bloch Formula]]
- [[Particle Identification]]

## References

- https://geant4.web.cern.ch/
