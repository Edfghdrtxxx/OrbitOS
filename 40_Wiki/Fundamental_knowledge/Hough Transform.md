---
area: "[[Physics]]"
tags: [computer-vision, track-reconstruction, image-processing]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Hough Transform

## Definition

The Hough transform is a voting-based algorithm that maps features in the original space (e.g., points in an image) into a parameter space where each feature votes for a family of shapes (lines, circles, ellipses) that could pass through it, allowing robust detection of geometric structures even in noisy data.

## Key Points

- **Line detection (classic)**: A point $(x, y)$ in image space maps to a sinusoid in $(\rho, \theta)$ space; collinear points produce intersecting sinusoids whose peak identifies the line
- **Generalised forms**: Extensible to circles (3D accumulator), ellipses, and custom shapes; used in [[Time Projection Chamber]] track finding as a helix or circle fit in momentum–position space
- **Robustness**: Voting inherently tolerates outliers and gaps in the data, making it suitable for detector hits with inefficiencies and background
- **Computational trade-off**: Accumulator size grows with parameter dimensionality; often combined with local maxima search or [[RANSAC]] for efficiency

## Examples

- Detecting straight lines in [[Edge Detection|edge-detected]] images (e.g., lane detection)
- Finding circular arcs in wire-chamber or [[Time Projection Chamber]] hit patterns for charged-particle [[Track Reconstruction]]
- Identifying helical trajectories in magnetic-field detectors by Hough transform in curvature–dip–$z_0$ space

## Related Concepts

- [[Time Projection Chamber]]
- [[FPGA]]
- [[Track Reconstruction]]
- [[RANSAC]]
- [[Edge Detection]]
- [[Kalman Filter]]

## References

- Duda, R. O., & Hart, P. E. (1972). "Use of the Hough transformation to detect lines and curves in pictures." *Communications of the ACM*, 15(1), 11–15
- Ballard, D. H. (1981). "Generalizing the Hough transform to detect arbitrary shapes." *Pattern Recognition*, 13(2), 111–122
