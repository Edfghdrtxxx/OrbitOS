<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 5. CNN vs classical baselines (shared events)

All five manuscript-family baselines pair on 179,964 events (each leaves the same 36 events without a finite prediction — consistent with the caption's "36 events"). Δ = baseline − CNN (positive = CNN better).

| pair | n | RMSE base | RMSE CNN | ΔRMSE | MAE base | MAE CNN | ΔMAE | Wilcoxon p |
|---|---|---|---|---|---|---|---|---|
| ransac_fixed vs cnn_resnet | 179,964 | 0.4827 | 0.0260 | +0.4567 | 0.3338 | 0.0146 | +0.3192 | <1e-300 |
| ransac_fixed vs cnn_xa | 179,964 | 0.4827 | 0.0214 | +0.4613 | 0.3338 | 0.0103 | +0.3235 | <1e-300 |
| hough_fixed vs cnn_resnet | 179,964 | 0.5234 | 0.0260 | +0.4975 | 0.3574 | 0.0146 | +0.3428 | <1e-300 |
| hough_fixed vs cnn_xa | 179,964 | 0.5234 | 0.0214 | +0.5020 | 0.3574 | 0.0103 | +0.3471 | <1e-300 |
| hough_opt vs cnn_resnet | 179,964 | 0.4935 | 0.0260 | +0.4675 | 0.3362 | 0.0146 | +0.3216 | <1e-300 |
| hough_opt vs cnn_xa | 179,964 | 0.4935 | 0.0214 | +0.4721 | 0.3362 | 0.0103 | +0.3259 | <1e-300 |
| hc_fixed vs cnn_resnet | 179,964 | 0.7375 | 0.0260 | +0.7115 | 0.5652 | 0.0146 | +0.5505 | <1e-300 |
| hc_fixed vs cnn_xa | 179,964 | 0.7375 | 0.0214 | +0.7161 | 0.5652 | 0.0103 | +0.5549 | <1e-300 |
| hc_opt vs cnn_resnet | 179,964 | 0.7197 | 0.0260 | +0.6938 | 0.5474 | 0.0146 | +0.5327 | <1e-300 |
| hc_opt vs cnn_xa | 179,964 | 0.7197 | 0.0214 | +0.6983 | 0.5474 | 0.0103 | +0.5371 | <1e-300 |

All baseline RMSE/MAE cells reproduce Table `tab:energy-regression` exactly (0.4827/0.3338, 0.4935/0.3362, 0.5234/0.3574, 0.7197/0.5474, 0.7375/0.5652). CNN RMSEs computed on the 179,964-event common subset are 0.0260/0.0214 (vs 0.0264/0.0219 on all 180k — the 36 dropped events are slightly harder than average). Refused pairs: `ransac_v3`, `hough_v3`, `hc_v3` vs both CNNs — `no_common_observations` (0/180,000 shared events).

<!-- SOURCE-BODY-END -->
