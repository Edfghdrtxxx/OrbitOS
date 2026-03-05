---
area: "[[Physics]]"
tags: [particle-tracking, detector-physics, nuclear-instrumentation]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Track Reconstruction

## Definition

Track reconstruction is the process of inferring charged-particle trajectories (tracks) from spatially distributed detector hits or clusters, combining geometry, magnetic field, and timing information to determine momentum, charge, and particle identity in nuclear and particle physics experiments.

## Key Points

- **Hit association**: Raw hits from [[Time Projection Chamber]], drift chambers, or silicon strips must be grouped into track candidates — often done by [[Hough Transform]], combinatorial search, or [[Kalman Filter]] seeding
- **Trajectory fitting**: A track model (helix in a uniform field, multiple scattering) is fitted to hits; the [[Kalman Filter]] propagates the state and adds hits sequentially
- **Output**: Fitted track parameters (momentum, direction, vertex) feed [[Particle Identification]] and physics analysis
- **Challenges**: High hit density, dead channels, and combinatorics scale poorly — acceleration via [[FPGA]] triggers or GPU-based pattern recognition is common

## Examples

- ALICE TPC reconstruction: hits from back-end (low occupancy) seeded, [[Kalman Filter]] refit inward to vertex
- SAMURAI at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]]: tracks from TPC + [[Time-of-Flight|ToF]] combined for isotope identification in direct reactions

## Related Concepts

- [[Time Projection Chamber]]
- [[Hough Transform]]
- [[Kalman Filter]]
- [[Particle Identification]]
- [[FPGA]]
- [[DAQ]]

## References

- Frühwirth, R., et al. "Application of Kalman filtering to track and vertex fitting." *Nucl. Instrum. Methods A* 262 (1987)
- Richter-Wa̧s, E., & Was, Z. "Practical aspects of track fitting." *CERN Yellow Report*, 2020
