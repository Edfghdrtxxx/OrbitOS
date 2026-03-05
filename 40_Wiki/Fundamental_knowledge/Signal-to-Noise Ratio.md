---
area: "[[Physics]]"
tags: [signal-processing, electronics, instrumentation]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Signal-to-Noise Ratio

## Definition

Signal-to-Noise Ratio (SNR) is the ratio of the desired signal power to the background noise power in a measurement system, usually expressed in decibels — it quantifies how cleanly a detector's output represents the true physical event above electronic and statistical fluctuations.

## Key Points

- **Expression**: \(\text{SNR} = 20 \log_{10}(V_{\text{signal}} / V_{\text{noise}})\) in dB for voltage signals; higher SNR means cleaner measurements
- **Noise sources**: Thermal (Johnson) noise, shot noise, and 1/f noise in the [[Preamplifier]] and readout chain; pile-up noise at high rates
- **Impact on timing**: SNR directly affects [[Jitter]] — at the trigger point on the [[Rising Edge]], timing uncertainty scales as \(\sigma_t \approx \sigma_n / (dV/dt)\), where \(\sigma_n\) is the noise RMS
- **Impact on energy**: Low SNR broadens the [[Pulse Height]] distribution, degrading [[Energy Resolution]] and raising the minimum detectable energy
- **Optimisation**: Cooling the [[Preamplifier]], optimal shaping time selection, and increasing detector gain (e.g., higher [[Silicon Photomultiplier|SiPM]] overvoltage) all improve SNR

## Examples

- An [[HPGe Detector]] with a cooled FET [[Preamplifier]] achieves SNR > 60 dB, enabling < 2 keV FWHM [[Energy Resolution]] at 1332 keV
- In a [[Time Projection Chamber]], the SNR of pad signals (~20:1) determines whether low-ionisation tracks are distinguishable from baseline fluctuations during [[Track Reconstruction]]

## Related Concepts

- [[Dynamic Range]]
- [[Preamplifier]]
- [[Energy Resolution]]
- [[Jitter]]
- [[Rising Edge]]
- [[Pulse Height]]
- [[Electronic Noise]]

## References

- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 6
- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. Springer — Ch. 6
