---
area:
tags: [computer-vision, image-processing]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Edge Detection

## Definition

Edge detection is the process of identifying boundaries or discontinuities in image intensity (or other 2D signals), typically by computing gradients or convolutions that respond strongly to rapid changes, producing a binary or gradient-magnitude map of edge pixels.

## Key Points

- **Gradient-based**: Sobel, Prewitt, or Canny operators convolve the image with derivative kernels; large gradients indicate edges
- **Canny edge detector**: Multi-step (smoothing, gradient, non-maximum suppression, hysteresis thresholding) for thin, connected edges
- **Downstream use**: Edge maps feed [[Hough Transform]] for line/circle detection, contour extraction, or segmentation
- **Noise sensitivity**: Raw gradients amplify noise; smoothing (Gaussian) or more sophisticated filters trade sharpness for robustness

## Examples

- Lane detection: edges → [[Hough Transform]] for line segments
- Detector hit pattern analysis: local maxima or thresholded signals as "edges" for track finding

## Related Concepts

- [[Hough Transform]]
- [[Track Reconstruction]]

## References

- Canny, J. (1986). "A Computational Approach to Edge Detection." *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 8(6), 679–698
