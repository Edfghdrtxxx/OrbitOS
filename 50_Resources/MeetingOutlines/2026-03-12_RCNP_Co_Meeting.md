# RCNP Collaboration Meeting — 2026-03-12

## Summary

The meeting covered TPC data analysis techniques across multiple experiments. Josema presented unpacker/merger updates; Tatsuya and Daniel discussed ADC threshold calibration and RANSAC algorithm optimization for event reconstruction. Xuan shared preliminary PID spectra from TPC and silicon data, noting discrepancies likely due to pile-up in the ion chamber. Weiliang introduced "ATPC Flow," a new Python/C++ analysis framework still under development. Zhang reported completing a 7.2 TB data transfer from MSU to Sappho. Additional updates included silicon calibrations (Tim/Amber) and carbon-17 reaction analysis (Périne).

## Notes

### 1. Unpacker Updates & PID Discussion — Josema, Périne, Tatsuya

- Josema presented updates on the Unpacker implementation, including new features for VIN paths and encoder reader functionality.
- Demonstrated how to add specific lines of code to read timestamps and PPAC data; timestamp matching shows nearly identical results between systems.
- Périne clarified that certain peaks in the ion chamber correspond to ¹⁹N and ¹⁷C.
- Tatsuya suggested using silicon detector data for better particle identification.
- Silicon detectors were removed during beam time, but historical PID data from F2 remains available for cross-checking.

### 2. Data Transfer & Event Checking — Zhang, Daniel, Soki

- Zhang completed a 7.2 TB data transfer from MSU to Sappho in four days; discussed file name formatting issues (Daniel suggested a script to convert to underscores).
- Ginseng plans to copy missing backup data from MSU to Sappho, potentially using global bus due to the ~500 Gb data size.
- Daniel reported that scalar data for the FlipTIC is included in the matched data files but requires documentation and turning on the DAC computer for channel mapping.
- Soki shared progress on event checking in Run 52; plans to present results at the JPS meeting on March 26.

### 3. Lead Point Visualization & Geometry Issues — Soki, Tatsuya, Josema, Yassid

- Lead points appearing outside the cylinder in visualization figures — potential causes include incorrect geometry files and velocity settings.
- Josema suggested geometry discrepancies between the actual TPC and the model.
- Yassid clarified that the geometry might be outdated from a previous experiment, but angle information remains correct for simulation.
- Tatsuya requested Soki to share the current geometry file on Discord for verification.

### 4. Experimental Data Analysis & Parameters — Josema, Tatsuya, Xuan

- Josema demonstrated analysis macros for examining ADC values and time bucket distributions (sampling frequency: 12.5 MHz).
- Tatsuya proposed checking threshold values and drift velocity for each experiment and sharing them in a spreadsheet.
- Xuan presented updates from running a new ATPC branch, sharing PID spectrum results with features requiring further investigation, particularly regarding energy degradation effects.

### 5. Plastic Detector Signal Distribution — Tatsuya, Xuan

- Examined differences in F2 and F3 plastic detector responses and how positions affect signal distribution.
- Timing resolution issues identified: ¹²Ba and ¹⁴Ba patterns appeared consistent between detectors, but discrepancies exist in weaker signal times.
- Potential pile-up effects identified in the ion chamber; strange patterns in the distribution potentially related to the main component.

### 6. Ion Chamber Pulse Detection & Pile-Up — Yassid, Daniel, Tatsuya

- Yassid suggested checking how the system handles multiple pulses and their timing correlation.
- Daniel and Yassid recommended creating a time distribution spectrum for the ion chamber to identify pile-up effects — particularly important for higher intensity experiments.
- Discussion covered energy loss data interpretation and particle stopping patterns in silicon layers; Tatsuya explained particle interactions across different detection layers.

### 7. ATPC Flow Development — Weiliang, Daniel

- Weiliang presented "ATPC Flow," an open-source data analysis framework combining C++, Python, and Rust with a workflow-driven GUI.
- Framework is still under development with several bugs; not yet ready for use.
- Daniel mentioned that Spiral's first phase could potentially be used for point cloud analysis, though it assumes the presence of a magnetic field.

### 8. Student Progress Updates — Daniel, Tim, Périne, Haoyu

- Daniel reported that a student began implementing RANSAC in Spiral but progress is limited due to restricted maintainer availability.
- Tim: Amber is working on silicon calibrations and extending unpacker objects to carry strip information.
- Haoyu (Peking University): no updates due to work on another experiment.
- Périne: developing methods for proper reaction selection, using ¹⁶C incident particles as a benchmark.

## Action Items

- [ ] **Daniel** — Measure the small distance between the F3 PPAC and the HTTPC entrance and report the result.
- [ ] **Tatsuya** — Prepare a shared folder/directory for all meeting slides.
- [ ] **Tatsuya** — Prepare a spreadsheet to share ADC threshold and drift velocity parameters for each experiment.
- [ ] **Soki** — Post on Discord which geometry file is being used; Yassid to guide if a better one exists.
- [ ] **Soki** — Send event check results/data to Kawabata.
- [ ] **Soki** — Review the standard analysis manual and procedures before the next meeting/conference.
- [ ] **Soki** — Check and optimize the ADC threshold and time bucket settings for TPC analysis.
- [ ] **Xuan** — Check the effect of pile-up in ion chamber data and investigate the multiplicity (pulses per trace).
- [ ] **Xuan** — Upload slides to the shared folder when ready.
- [ ] **Josema** — Continue updating/tuning the Bragg peak fitting section.
- [ ] **Weiliang** — Continue ATPC Flow development and share updates when ready for broader use.
- [ ] **Zhang** — Install the analysis environment and begin analysis after data transfer is complete.
- [ ] **Tim/Amber** — Continue silicon calibrations and extend unpacker to carry strip information; coordinate with Josema; push to main branch when ready.
- [ ] **Périne** — Prepare slides for next meeting showing progress on ¹⁷C analysis and reaction selection.
- [ ] **All teams** — Check threshold value and drift velocity from data and share results in the Google spreadsheet.
