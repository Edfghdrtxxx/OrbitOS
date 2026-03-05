---
area:
tags: [computer-vision, robust-estimation, algorithm]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# RANSAC

## Definition

RANSAC (RANdom SAmple Consensus) is an iterative algorithm for robust model fitting in the presence of outliers: repeatedly sample a minimal subset of data points, fit a model, count inliers (points within a distance threshold), and keep the model with the highest inlier count.

## Key Points

- **Robustness**: Designed for data where a significant fraction of points are outliers (contamination, background hits); the consensus step rejects bad fits
- **Minimal sample**: Each iteration uses the smallest set needed to define the model (e.g., 2 points for a line, 3 for a circle), making random sampling feasible
- **Trade-off**: Number of iterations grows with outlier fraction; often combined with [[Hough Transform]] or [[Kalman Filter]] for track/geometry fitting
- **Extensions**: MSAC, LO-RANSAC improve scoring; used in [[Track Reconstruction]] for initial seed finding

## Examples

- Fitting lines or planes to 2D/3D point clouds with noise and clutter
- [[Time Projection Chamber]] track seeding when [[Hough Transform]] accumulator is too large
- Structure-from-motion and camera pose estimation in computer vision

## Related Concepts

- [[Hough Transform]]
- [[Kalman Filter]]
- [[Track Reconstruction]]
- [[Time Projection Chamber]]

## References

- Fischler, M. A., & Bolles, R. C. (1981). "Random sample consensus: a paradigm for model fitting with applications to image analysis and automated cartography." *Communications of the ACM*, 24(6), 381–395
