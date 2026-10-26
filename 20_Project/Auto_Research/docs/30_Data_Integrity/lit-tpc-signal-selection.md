# Real TPC signal-pad selection versus the "drift time > 0.1" mask

> Origin: three literature scouts on 2026-10-23 (`lit-tpc-readout`, `lit-tpc-ml-noise`, `lit-tpc-drift-time`, all Grok 4.7), merged by firstmate. Full scout reports: `/Users/Reid Hu/firstmate/data/lit-tpc-readout/report.md`, `/Users/Reid Hu/firstmate/data/lit-tpc-ml-noise/report.md`, `/Users/Reid Hu/firstmate/data/lit-tpc-drift-time/report.md`. Every DOI and arXiv id below was resolved against Crossref or arxiv.org on 2026-10-23.

**Question.** The Raw-image features mark a pad as a signal pad when channel 1 (normalized drift coordinate) exceeds 0.1. Does a real TPC readout offer that selection? This matters for the fidelity rule: every model input must be obtainable from a real TPC readout.

**Answer.** No. A real readout fires a pad on amplitude or charge, then assigns a drift time to fired pads only. The 0.1 drift cut is an artefact of how the simulation fills empty pads.

## 1. What the MATE pipeline does

Paths below are in `/Users/Reid Hu/MATE-Automation`.

- Channel 0 is the sum of `log1p` of the hit charge. Channel 1 is the mean of `(x − X_MIN)/(X_MAX − X_MIN)` with `X_MIN = −100 mm`, `X_MAX = 100 mm`, written only where a pad has a hit (`scripts/preprocessing/convert_trk_server_v3.py` lines 167–168 and 280–308). Empty pads stay 0.
- The Garfield postprocessor `garfield_postprocessor_v5.C` adds `Gaus(0, 0.027)` to the charge and `Gaus(0, 0.01)` to the drift value of every pad, empty pads included. It has no gas gain, no discriminator, no zero suppression. Macro text: `/Users/Reid Hu/firstmate/data/mate-imp-ro/launch/probe.out` lines 405–570.
- Hierarchy Cluster (HC) files rebuild from the clean hit list, so HC times are noise-free (`openspec/changes/EXP8-unseen-channel/research_null_noise_investigation.md` line 97).
- The Raw feature scripts use `hit = t > 0.1` (`/Users/Reid Hu/firstmate/data/mate-lead-p/out/d670/feat_raw_v1.py` line 64, `feat_raw_v2.py` line 73). Their comment cites `physics_from_raw_image`; that function exists in the lead's exported source `/Users/Reid Hu/firstmate/data/mate-lead-p/out/d575/src82/src/data/normalization.py` line 171 (not in the main MATE-Automation copy).
- **Encoding order matters** (consultant check, `/Users/Reid Hu/firstmate/data/mate-cons-u/report.md` section "900", letter `mate-cons-u-to-mate-lead-p-479.msg`): the d575/src82 loader encodes the image before it computes physics features. Under some encodings channel 1 is no longer the drift coordinate (in A1 it becomes a "charge > 0" flag; in E1b a 0.1 gate equals original drift > 0.55). So "0.1 = the plane x = −80 mm" holds only for the unencoded Raw channel, and a charge threshold in linear units cannot be reused after a log or other transform.
- Other cuts in the code: classical baselines keep `Ch0 > 0` (`src/baselines/common.py` line 79); one counter uses charge `Ch0 > 0.1` (`scripts/analysis/exp3_isotope_separability.py` line 22, about 3.5σ of the charge noise).
- Measured on Raw: pads at least three cells from any HC signal have channel-1 99.9th percentile 0.032, and 0.035% exceed 0.1. Moving the cut from 0.1 to 0.2 changes recoil-layer fractions by at most 0.04 (`/Users/Reid Hu/firstmate/data/mate-cons-p/report.md` sections 3.8–3.9, lines 118–135).

**What the 0.1 cut really does.** 0.1 is the plane `x = −80 mm`. An empty pad sits at 0 ± 0.01, ten standard deviations below the cut, so the cut works as an occupancy tag ("this pad received a deposit in simulation"). It also deletes every true hit in the 20 mm slice nearest `x = −100 mm`, and it applies no charge test to the pads it keeps.

## 2. What real readouts do (facts from the sources)

1. **GET electronics** (used by AT-TPC, ACTAR TPC, SπRIT, TexAT, and per a 2025 talk by MATE). Each AGET channel has a charge preamplifier, a shaper (peaking time 50/70 ns–1 µs), a 512-cell buffer sampled at 1–100 MHz, a 12-bit ADC, and a per-channel leading-edge discriminator with a 7-bit threshold. Readout is all channels, hit channels only, or a list. Charge resolution < 850 e⁻; time resolution ≤ 20 ns. (AGET data sheet v3; Pollacco 2018 Table 2; Anvar 2011.)
2. **Hit definition.** After fixed-pattern-noise (FPN) and baseline subtraction, a pad is kept when the pulse maximum or charge integral exceeds a threshold.
   - ACTAR analysis cuts: 15, 20 and 30 coder units; the hardware threshold codes 4–48 span about 22–260 counts (Giovinazzo 2020 §§4.1–4.3).
   - Residual noise after FPN subtraction: RMS 2.5 counts (full readout) and 4.7 counts (partial readout) on the bench (Giovinazzo 2016 Fig. 12). About 5 counts on real AT-TPC data (Fortino 2022 §3).
   - LCTPC: 5 × pedestal RMS. SAMPA (ALICE chip) data zero-suppressed at 3σ and 5σ (Gajdoš 2025). MicroBooNE drops pixels below 10 PIU, MIP peak near 40 PIU.
3. **Time.** Computed only for pads that passed the amplitude cut: pulse centroid (AT-TPC), digital constant fraction (ACTAR), peak bin or half-amplitude edge (Carnegie 2005), rising-edge inflection (LCTPC). A pad below threshold has no time; it is absent, not zero.
4. **Time resolution pieces** (combining in quadrature is inference): sampling bin 25–40 ns in practice; electronics floor ≤ 20 ns; amplitude walk for leading-edge timing; longitudinal diffusion `D_L·√L`. No published `D_L` for 95% ⁴He + 5% CO₂ at 500 mbar was found; the converter's optional `0.0258745 cm^(−1/2)` is an AT-TPC value and is off by default.
5. **MATE itself.** Zhang et al. NIM A 1016 (2021) conclusion: total-energy threshold about 150 keV, per-pad readout threshold about 2 keV. The ADC count behind 2 keV is unverified (PDF not opened).

## 3. Simulation-to-real evidence for ML on TPCs

| Study | Detector | Result |
|---|---|---|
| Kuchera 2019 | AT-TPC, ⁴⁶Ar(p,p) | Binary proton F1 on real test events: 0.90 trained on real labels (Table 4; 0.93 is the multiclass setting); 0.72 trained on simulation; 0.55 when uniform random noise points are added to simulation (Table 5). Test sets differ between tables, so the gaps are not a paired causal difference. Fine-tuning plateaus near 550 real events. Uniform noise is "not a sufficient proxy" for structured detector noise. |
| Zhang 2026 (arXiv:2605.28296) | MATE-TPC at IMP, 1024 channels, 32×32 pads | Task: elastic scattering versus fusion in ¹²C + ¹²C, not our ⁴He-versus-rest task, so these scores are not a benchmark for this project. MATEROOT simulates gain, drift and an energy threshold (values unpublished). About 97% on simulation, about 90% on Hough-preselected experimental events (ResNet-50 90.28%). Different pad plane from our 80×48 images. |
| Dey 2025 | AT-TPC fission | PointNet on recorded point clouds; 99% fission identified with heuristic. |
| Wu 2023 | Active-target TPC, ¹²C | Simulation only; no experimental test. |
| MicroBooNE 2017–2024 | LArTPC | Simulated signals overlaid on real cosmic data; amplitude floor 10 PIU; data agree with Monte Carlo within uncertainties in the 2024 note. |
| Gajdoš 2025 | SAMPA TPC | Denoiser trained on synthetic tracks works on experimental data at 3σ and 5σ suppression. |

## 4. Consequence for the fidelity rule

- **Fact.** No paper read uses a cut that requires the drift coordinate itself to exceed a fraction of the drift length to decide that a pad fired.
- **Inference.** A feature that depends on `t > 0.1` uses information a readout does not provide: it treats "the simulation wrote a deposit here" as "the detector fired here", without a charge test, and it removes real ionization in 10% of the drift span. Any Raw-feature gain that depends on this mask may come from the encoding, not from physics.
- **Unverified.** In-detector noise RMS and noise-pad occupancy for MATE; the ADC equivalent of MATE's ~2 keV per pad; the gain and W-value behind the macro's `0.027 MeV`; Kuchera's numeric noise distributions.

## 5. CPU comparison the team can run (proposal, not a decision)

Replace the 0.1 mask with a readout-shaped selection and check whether the Raw-feature gain survives:

1. **Fired pad** = charge above `k × σ_charge`, with `k` = 3, 4 and 5. With σ_charge = 0.027 from the macro, 3/4/5σ is 0.081/0.108/0.135 in linear `fDE` units, or 0.0779/0.1026/0.1266 after `log1p` (the downstream converter fixes `CHARGE_MODE="log"`, `probe.out` line 671). The source chain is not closed, so 0.027 is not certified as the σ of the current images or of real electronics.
2. **Drift value** only on fired pads; unfired pads carry no time (masked, not 0).
3. **Smear** only the surviving times. The stored times already carry `Gaus(0, 0.01)` (≈ 2 mm); adding a second independent 0.01 doubles the variance (consultant measured ratio 1.997), so do not add it again to keep the original resolution. As a stress case add a bin of 25–40 ns and a diffusion term once a drift velocity is assumed (AT-TPC ⁴He reference about 2 cm/µs, not a MATE value).
4. **Time window** about the full drift length, keeping short drifts (no 20 mm slice removed).
5. Optional realism: add structured noise (a few noise pads per event at 4σ, coherent baseline offsets) rather than uniform points, per Kuchera.

Compare each feature with and without step 1–4 on the same events. Test trigger, time validity and drift window as separate factors. Change only the physics-feature input as one attribution group; if the image itself changes, the generic ResNet and the cross-attention model must share the same input condition. A gain that vanishes under the readout-shaped selection should not be claimed.

Consultant review (2026-10-23, letter `mate-cons-u-to-mate-lead-p-479.msg`): the split of amplitude trigger and drift time is correct; the strong wording in section 4 ("no readout analogue", "deletes every hit in the slice") holds for the unencoded Raw channel and should be read with the encoding caveat in section 1.

## References

- AGET data sheet, GET-QA-000-0014, production v3.0. http://wuhongyi.cn/HardwareNote/pdf/AGET/AGET_Data_Sheet_v3.pdf
- Anvar, S., et al. AGET, the GET front-end ASIC. IEEE NSS 2011, 745–749. DOI 10.1109/NSSMIC.2011.6154095
- Ayyad, Y., et al. J. Phys.: Conf. Ser. 876 (2017) 012003. DOI 10.1088/1742-6596/876/1/012003
- Barney, J., et al. The SπRIT Time Projection Chamber. Rev. Sci. Instrum. DOI 10.1063/5.0041191; arXiv:2005.10806
- Carnegie, R. K., Dixit, M. S., et al. NIM A 538 (2005) 372; arXiv:physics/0402054
- Dalitz, C., Ayyad, Y., et al. arXiv:1807.03513
- Dey, P., et al. NIM A 1072 (2025) 170002. DOI 10.1016/j.nima.2024.170002
- Fortino, G. F., Zamora, J. C., et al. NIM A (2022) 166497. DOI 10.1016/j.nima.2022.166497; arXiv:2202.12941
- Gajdoš, M., et al. Comput. Phys. Commun. 312 (2025) 109608. DOI 10.1016/j.cpc.2025.109608
- Giovinazzo, J., et al. GET electronics samples data analysis. NIM A 840 (2016) 15–27. DOI 10.1016/j.nima.2016.09.018
- Giovinazzo, J., Pancin, J., Pibernat, J., Roger, T. ACTAR TPC performance with GET electronics. NIM A 953 (2020) 163184. DOI 10.1016/j.nima.2019.163184; HAL hal-02416890
- Koshchiy, E., et al. TexAT. NIM A 957 (2020) 163398. DOI 10.1016/j.nima.2020.163398; arXiv:1906.07845
- Kuchera, M. P., et al. Machine learning methods for track classification in the AT-TPC. NIM A 940 (2019) 156–167. DOI 10.1016/j.nima.2019.05.097; arXiv:1810.10350
- LCTPC Collaboration. NIM A 856 (2017) 109–118. DOI 10.1016/j.nima.2016.11.002
- MicroBooNE: Acciarri et al. JINST 12 (2017) P03011, arXiv:1611.05531; Phys. Rev. D 99 (2019) 092001, DOI 10.1103/PhysRevD.99.092001; arXiv:2012.08513; MICROBOONE-NOTE-1123-PUB
- Pollacco, E. C., et al. GET. NIM A 887 (2018) 81–93. DOI 10.1016/j.nima.2018.01.020
- Poleshchuk, O., et al. SpecMAT. NIM A 1015 (2021) 165765. DOI 10.1016/j.nima.2021.165765
- Wu, H., et al. NIM A 1055 (2023) 168528; arXiv:2304.13233
- Zhang, M., et al. ML for ¹²C + ¹²C with the MATE-TPC. arXiv:2605.28296 (2026)
- Zhang, Z. C., et al. NIM A 1016 (2021) 165740. DOI 10.1016/j.nima.2021.165740
