---
area: "[[Physics]]"
tags: [state-estimation, particle-tracking, signal-processing]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Kalman Filter

## Definition

The Kalman filter is a recursive algorithm that estimates the state of a linear dynamical system from noisy measurements, combining a predictive step (propagate state and covariance via the system model) with an update step (fuse new measurement via optimal linear combination) to produce minimum-variance state estimates.

## Key Points

- **Prediction–update cycle**: Predict state and covariance forward; on measurement, compute Kalman gain and update estimate and covariance
- **Optimal for linear Gaussian systems**: Under linear dynamics and additive Gaussian noise, the Kalman filter is the optimal (MMSE) estimator
- **Extensions**: Extended Kalman filter (EKF) and unscented Kalman filter (UKF) handle nonlinearities; essential for curved tracks in magnetic fields
- **Track fitting**: [[Track Reconstruction]] uses Kalman filters to add hits sequentially along a track, with scattering and energy loss in the propagation model

## Examples

- [[Time Projection Chamber]] track refit: propagate from outer pad rows inward, add hits, update helix parameters
- Inertial navigation, GPS fusion, and control systems

## Related Concepts

- [[Track Reconstruction]]
- [[Time Projection Chamber]]
- [[Hough Transform]]
- [[RANSAC]]
- [[Particle Identification]]

## References

- Kalman, R. E. (1960). "A New Approach to Linear Filtering and Prediction Problems." *Transactions of the ASME*
- Frühwirth, R. "Application of Kalman filtering to track and vertex fitting." *Nucl. Instrum. Methods A* 262 (1987)
