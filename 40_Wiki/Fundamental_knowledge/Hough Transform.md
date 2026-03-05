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

The Hough transform is a feature-extraction algorithm that maps points or edges in image space into a parameter space, where geometric primitives (lines, circles, ellipses) are detected by accumulating votes — a peak in parameter space corresponds to the presence of that shape in the original data.

## Key Points

- **Line detection (classic form):** Each point (x, y) votes for all lines (ρ, θ) that could pass through it; collinear points produce a common peak in (ρ, θ) space
- **Generalised to curves:** Circle, ellipse, and helix Hough transforms extend the idea to higher-dimensional parameter spaces
- **Robustness:** Tolerant to gaps and noise because each point contributes independently; widely used when parametric models are known
- **Computational cost:** Grows with parameter-space resolution; often approximated with randomised or probabilistic variants

## Examples

- Detecting straight-line tracks in wire-chamber or [[Time Projection Chamber]] pad readout by accumulating hits in (ρ, θ) space
- Circle detection in iris recognition or particle identification from ring-imaging Cherenkov detectors
- Helix Hough transform for helical track finding in solenoidal magnetic fields (e.g., collider tracking)

## Related Concepts

- [[Time Projection Chamber]]
- [[Particle Identification]]
- [[Linear_Algebra]]
- [[Kalman Filter]]
- [[Track Reconstruction]]

## References

- Hough, P. V. C. (1962). "Method and means for recognizing complex patterns." US Patent 3069654
- Duda, R. O., & Hart, P. E. (1972). "Use of the Hough transformation to detect lines and curves in pictures." *Comm. ACM* 15(1): 11–15
