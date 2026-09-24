<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 5. Paper-ready sentence

> "The HC representation contributes hit-level denoising, not new information: DBSCAN largest-cluster filtering (eps = 10 mm, min_samples = 3, in the pad plane) removes the ~51%-occupancy electronics-noise floor that submerges the primary track's charge signal in the raw pad image, reducing the active input to a ~113-pad sparse track; that this single change closes a 6.5–8.6 pp accuracy gap in a physics-free ResNet baseline shows the gain is image-side denoising, while the physics-feature vector — computed from the same charge channel — is redundant with the cleaned image but becomes the classifier's only global charge statistic on the noise-dominated input."

(Shorter variant if space is tight: "HC contributes denoising, not information: DBSCAN filtering removes the noise floor that hides the track's charge signal, and the resulting sparse image makes the physics-feature vector redundant rather than additive.")

<!-- SOURCE-BODY-END -->
