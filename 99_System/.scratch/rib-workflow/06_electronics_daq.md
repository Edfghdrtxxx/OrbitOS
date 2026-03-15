# 6. Electronics, DAQ & Digitization

> From detector output to stored digital data: the complete signal chain in a radioactive isotope beam experiment.

---

## 6.1 Analog Signal Chain

When a charged particle traverses a detector, it produces a raw electrical signal -- charge pulses from ionization in gas or semiconductor detectors, or light pulses from scintillators converted to current by photomultiplier tubes (PMTs) or silicon photomultipliers (SiPMs). These signals are typically small (femtocoulombs to picocoulombs of charge, or millivolt-scale voltage transients) and require several stages of analog conditioning before digitization.

### 6.1.1 Preamplifiers

The [[Preamplifier]] is the first active electronics stage and its noise performance dominates the entire system's [[Energy Resolution]] and signal-to-noise ratio (SNR). There are three main types:

- **Charge-sensitive preamplifier (CSA):** Integrates the detector current pulse onto a feedback capacitor, producing a voltage step proportional to the total collected charge. This is the standard choice for semiconductor detectors, HPGe detectors, and TPC pad readouts. The output is independent of the detector capacitance (to first order), making it robust across varying detector geometries. The equivalent noise charge (ENC) of the CSA sets the low-energy detection threshold [Knoll 2010, Ch. 16; Spieler 2005, Ch. 6-7].

- **Current-sensitive (trans-impedance) preamplifier:** Converts the detector current directly to a voltage, preserving the fast time structure of the signal. Preferred for timing applications with [[Photomultiplier Tube|PMTs]] and SiPMs, where sub-nanosecond rise times are needed for [[Time-of-Flight]] measurements.

- **Voltage-sensitive preamplifier:** Simplest design, but noisier and less commonly used in precision nuclear physics applications.

In the GET electronics system used for TPC readout, each AGET channel integrates its own charge-sensitive amplifier with four programmable gain ranges (120 fC, 240 fC, 1 pC, and 10 pC full-scale dynamic range), eliminating the need for external preamplifiers [Pollacco et al. 2018; semi-cylindrical TPC at HIRFL, Springer 2023].

### 6.1.2 Shapers and Amplifiers

After preamplification, the signal passes through a **shaping amplifier** that serves two purposes:

1. **Noise filtering:** The shaper applies a bandpass filter to optimize the SNR. A semi-Gaussian shaping filter (typically 4--7 poles of CR-RC integration) produces an output pulse that approximates a Gaussian with a characteristic shaping time $\tau$. The time to peak is approximately $2.2\tau$. The optimal shaping time balances two noise contributions: series noise (thermal noise from the input FET, which decreases with longer shaping times) and parallel noise (leakage current, which increases with longer shaping times) [Knoll 2010, Ch. 17; IAEA-TECDOC-1634].

2. **Pulse shaping for rate capability:** The unipolar or bipolar shaped pulse returns to baseline faster than the raw preamplifier output, reducing pulse pileup at high count rates. Shorter shaping times allow higher rates but degrade energy resolution.

Typical shaping times range from ~50 ns (fast timing applications) to ~10 $\mu$s (high-resolution gamma spectroscopy). In the AGET ASIC, 16 programmable peaking times are available, spanning from ~50 ns to ~1 $\mu$s, allowing the user to optimize for the specific experiment [Pollacco et al. 2018].

### 6.1.3 Discriminators

Discriminators convert analog detector pulses into standardized digital logic signals (NIM or LVDS) for the trigger and timing systems. Two main types are used:

- **[[Leading-Edge Discriminator]] (LED):** Fires when the signal crosses a fixed voltage threshold. Simple and inexpensive, but suffers from [[Time Walk]] -- larger pulses cross the threshold earlier than smaller ones, introducing an amplitude-dependent timing error. Suitable when signal amplitudes are uniform or when nanosecond-level timing precision is not critical [Knoll 2010, Ch. 17].

- **[[Constant Fraction Discriminator]] (CFD):** Splits the input into an attenuated copy (fraction $f \approx 0.2$--$0.4$) and a delayed, inverted copy, then fires at the zero-crossing of their sum. This provides an amplitude-independent timing marker, eliminating time walk and achieving sub-nanosecond time resolution. Essential for precision [[Time-of-Flight]] measurements and [[Coincidence Detection]] [Gedcke & McDonald 1967].

Modern systems increasingly implement **digital CFD (dCFD)** algorithms in [[FPGA]] firmware on digitized waveforms, offering flexibility and multi-channel scalability without dedicated analog CFD modules [FPGA wiki note].

In the AGET ASIC, each channel includes a built-in leading-edge discriminator for self-triggering capability, where the channel fires when the shaped signal exceeds a programmable threshold. This per-channel discriminator feeds into the GET system's multiplicity-based trigger [Pollacco et al. 2018].

---

## 6.2 Digitization

Digitization converts the conditioned analog signals into numerical data that can be processed, stored, and analyzed by computers. The two fundamental quantities extracted are **energy** (from pulse amplitude or integral) and **timing** (from signal arrival time).

### 6.2.1 ADC (Analog-to-Digital Converter)

The [[ADC]] is characterized by two key specifications: **resolution** (number of bits, determining the smallest distinguishable voltage step) and **sampling rate** (samples per second, determining time granularity). Several ADC types are used in nuclear physics:

**Peak-sensing ADC:**
The traditional workhorse of nuclear spectroscopy. The signal chain consists of a charge-sensitive preamplifier, a shaping amplifier, and a peak-sensing ADC that detects and digitizes the maximum voltage of the shaped pulse. The peak height is proportional to the deposited energy. Typical resolutions are 12--14 bits. The conversion process introduces dead time (typically tens of microseconds per event), during which the ADC cannot accept new signals [CAEN digitizer whitepaper; Knoll 2010, Ch. 17].

**Charge-integrating ADC (QDC -- Charge-to-Digital Converter):**
Integrates the input current over a defined gate window, digitizing the total collected charge. Well suited for scintillator-PMT systems where the light output (and hence charge) is proportional to deposited energy. Commonly implemented in VME modules (e.g., CAEN V792) with 12-bit resolution and 32 channels per module.

**Flash ADC (waveform digitizer):**
Samples the analog waveform continuously at high speed (typically 100 MS/s to 5 GS/s for commercial units; 10--16 bit resolution). The entire waveform is captured, enabling post-acquisition extraction of energy (from pulse height or integral), timing (from digital CFD algorithms), and pulse shape (for particle identification via pulse-shape discrimination). Flash ADCs represent the modern digital revolution in nuclear physics DAQ, replacing multiple traditional modules (peak-sensing ADC, QDC, TDC, discriminator) with a single digitizer board [CAEN digitizer whitepaper].

**Switched Capacitor Array (SCA):**
A specialized approach used in the GET system's AGET ASIC. The analog signal is continuously written into a circular buffer of 512 capacitor cells at a programmable write frequency (1--100 MHz). Upon a trigger, the writing stops and the stored analog samples are read out sequentially through a slower external ADC (12-bit in the AsAd board). This approach achieves effective sampling rates up to 100 MHz with lower power consumption than a true flash ADC, at the cost of dead time during readout (~tens to ~200 $\mu$s) [Pollacco et al. 2018; Giovinazzo et al. 2018].

| ADC Type | Resolution | Speed | Best For |
|---|---|---|---|
| Peak-sensing | 12--14 bit | ~$\mu$s conversion | Spectroscopy, low rates |
| QDC | 12 bit | Gate-based | Scintillator total charge |
| Flash ADC | 10--16 bit | 100 MS/s -- 5 GS/s | Waveform capture, PSD |
| SCA (AGET) | 12 bit (ext.) | 1--100 MHz sampling | TPC pad readout |

### 6.2.2 TDC (Time-to-Digital Converter)

The [[TDC]] measures the time interval between two logic signals (typically START and STOP) and encodes it as a digital number. Key characteristics:

- **Resolution:** Ranges from ~25 ps (dedicated [[ASIC]]s like HPTDC at CERN) to ~100 ps (FPGA-based implementations using carry-chain delay elements). The TDC resolution sets the achievable time-of-flight precision [Henzler, *Time-to-Digital Converters*].

- **Common architectures:** Tapped delay-line TDC, Vernier TDC (dual oscillators), and interpolation-based designs. FPGA implementations are increasingly common, offering flexibility and integration with trigger logic.

- **Multi-hit TDC:** Records multiple STOP signals relative to a single START (or a common clock), essential for high-rate experiments where multiple particles arrive within one event window.

- **Complementarity with ADC:** The TDC records *when* an event occurred; the ADC records *what* the signal looked like. Together, they provide the complete information for particle identification: energy loss ($dE/dx$ from ADC), time-of-flight (from TDC), and position (from TDC drift-time in a TPC or from strip/pad hit patterns).

### 6.2.3 Information Extracted by Digitization

| Quantity | How Extracted | Detector Example |
|---|---|---|
| Energy / $dE/dx$ | Pulse height or integral (ADC) | TPC pads, $\Delta E$-$E$ telescopes |
| Timing / ToF | Start-stop interval (TDC) or digital CFD on waveform | Scintillator-PMT, plastic scintillators |
| Waveform shape | Full waveform from flash ADC or SCA | Pulse-shape discrimination (n/$\gamma$), track reconstruction in TPC |
| Position | Drift time (TDC) or pad/strip hit pattern | TPC, drift chambers, MWPCs |
| Particle ID | Combined $dE/dx$ + ToF + $B\rho$ | Focal-plane detectors, [[MUSIC Detector]] |

---

## 6.3 Trigger System

The trigger system decides in real time which detector signals represent physics events worth recording, rejecting backgrounds while keeping the data rate within the DAQ's bandwidth.

### 6.3.1 Hardware Triggers and Coincidence Logic

At the lowest level, the trigger is built from fast analog logic:

- **Discriminator outputs** from individual detectors are fed into **coincidence units** (AND logic gates), requiring two or more detector signals to arrive within a narrow resolving time $2\tau$. This suppresses uncorrelated background: the accidental coincidence rate is $R_{\text{acc}} = 2\tau \cdot R_1 \cdot R_2$ [Knoll 2010, Ch. 17; [[Coincidence Detection]] wiki note].

- A **master trigger** combines coincidence conditions with veto signals (e.g., anti-coincidence with cosmic-ray veto detectors) to form the final event trigger. This master trigger gates the ADCs and TDCs to begin conversion/readout.

- Hardware coincidence logic is traditionally implemented with NIM (Nuclear Instrumentation Module) electronics. Modern systems increasingly use [[FPGA]]-based trigger modules for programmable, multi-condition trigger logic [TRLO II system at GSI].

### 6.3.2 Trigger Levels

Large experiments employ a multi-level trigger hierarchy to progressively reduce the data rate:

- **Level 0 / Level 1 (L0/L1):** Hardware trigger, implemented in fast analog logic or FPGAs, operating with latency of ~100 ns to ~$\mu$s. Applies simple conditions (multiplicity thresholds, coincidences). Must make decisions before the detector signal buffers overflow.

- **Level 2 (L2):** Software-based or FPGA-based trigger with access to more detailed detector information (e.g., rough energy or position). Higher latency (~$\mu$s to ms) but more selective.

- **Level 3 / High-Level Trigger (HLT):** Full software reconstruction on a computing farm. Used in large collider experiments (LHC) but generally not needed for fixed-target nuclear physics at the intensity scales of RIB facilities.

For typical RIB experiments at facilities like IMP-HIRFL, a simpler 1--2 level trigger suffices. The GET system implements a **3-level trigger** within the MuTAnT module, where the first level uses per-channel discriminator hits (multiplicity), the second level applies conditions across multiple AsAd boards, and the third level incorporates external trigger inputs [Pollacco et al. 2018].

### 6.3.3 Spill Gate

At synchrotron-based facilities, the beam is delivered in bursts called **spills** during slow extraction. The [[Spill Gate]] is a timing signal from the accelerator that marks the window (~100--500 ms) during which beam is present at the target.

- The DAQ only accepts triggers while the spill gate is **open**. Detector hits outside the spill window are ignored, reducing background and dead-time overhead.

- **Duty cycle** (spill duration / cycle period) determines the effective instantaneous rate. For example, at IMP's CSR (Cooler Storage Ring), a ~200 ms spill in a ~1 s cycle gives ~20% duty cycle, meaning the instantaneous rate during the spill is ~5x the average rate [Spill Gate wiki note; Mao et al., HIRFL-CSR spill feedback].

- Spill structure quality (uniformity of beam intensity within the spill) directly affects data quality. At HIRFL-CSR, 50 Hz ripple from power supplies can cause micro-structure in the spill; an FPGA-based feedback system has been developed to mitigate this [Mao et al., *BEAM SPILL STRUCTURE FEEDBACK TEST IN HIRFL-CSR*].

### 6.3.4 Dead Time and Busy Signals

[[Dead Time]] is the minimum interval after recording an event during which the system cannot accept another event:

- **Non-paralyzable (non-extending):** Fixed dead window $\tau$; events during it are lost. True rate: $n = m / (1 - m\tau)$.
- **Paralyzable (extending):** Each new event restarts the dead window; at extreme rates, the detector locks out entirely. $m = n e^{-n\tau}$.

In a DAQ system, dead time arises from multiple sources: ADC conversion time, readout transfer time, event-building latency, and buffer full conditions. A **busy signal** is asserted by the DAQ when it cannot accept new triggers -- this signal vetoes the master trigger, preventing data corruption.

- Typical dead times: ~1 $\mu$s (fast scintillators with flash ADC), ~10--100 $\mu$s (TPC readout windows), ~ms (full event readout in CAMAC systems).
- Dead-time correction is essential for absolute cross-section measurements. The fraction of live time is monitored by scalers counting accepted vs. presented triggers.
- In the GET system, dead time is dominated by the SCA readout: reading all 512 time buckets at 25 MHz sampling takes significantly longer than at reduced depth. Reducing the readout to 64 or 256 time buckets can cut dead time (and hence improve throughput) by factors of 2--8 [GADGET II TPC paper].

---

## 6.4 DAQ Systems

### 6.4.1 Traditional VME/CAMAC-Based Systems

**CAMAC (Computer Automated Measurement And Control):**
A modular electronics standard dating from the 1960s, using a 24-bit dataway bus in standardized crates. CAMAC modules include ADCs, TDCs, scalers, coincidence units, and I/O registers. A crate controller interfaces to a host computer. CAMAC is simple and well-understood but limited by slow readout speeds (~$\mu$s per word) and is being phased out in favor of VME [Leo 1994; Wikipedia CAMAC].

**VME (Versa Module Eurocard):**
The successor standard offering higher throughput (110 ns read cycle, ~40 MB/s for VME64x) and higher channel density. A single VME crate with modern multi-channel modules (e.g., CAEN V775 TDC with 32 channels, CAEN V785 ADC with 32 channels) can instrument hundreds of detector channels. VME systems significantly reduce cabling complexity and dead time compared to CAMAC [sympnp.org DAQ proceedings].

Both standards use a **common readout paradigm**: a trigger signal gates the conversion modules, a readout controller reads out all modules sequentially, and the data is shipped to a host computer for event building and storage.

### 6.4.2 The GET System (General Electronics for TPCs)

The **GET (General Electronics for TPCs)** system is a purpose-built, high-channel-count DAQ for time projection chambers and other detectors requiring waveform capture on many channels simultaneously. It was developed collaboratively by laboratories including GANIL (France), NSCL/FRIB (USA), and CENBG (France) [Pollacco et al. 2018].

#### Architecture (Bottom to Top):

```
Detector Pads
     |
   AGET (ASIC) -- 64 ch + 4 FPN channels per chip
     |  (CSA + Shaper + Discriminator + 512-cell SCA)
     |
   AsAd (Analog-to-digital) -- 4 AGET chips = 256 channels per board
     |  (12-bit ADC, calibration, synchronization, monitoring)
     |
   CoBo (Concentration Board) -- 4 AsAd boards = 1024 channels per module
     |  (Virtex-5 FPGA: time-stamping, zero suppression, compression)
     |  (housed in microTCA chassis, GbE output)
     |
   MuTAnT (Multiplicity Trigger and Time)
     |  (2x Virtex-5 FPGAs: 3-level trigger, master clock distribution,
     |   timestamp generation, multiplicity summation)
     |
   DAQ Computer / Storage Farm
```

#### Key Specifications:

| Parameter | Value |
|---|---|
| Max channels | 33,792 (132 AGET chips) |
| Channels per AGET | 64 signal + 4 fixed-pattern noise (FPN) |
| CSA dynamic range | 120 fC, 240 fC, 1 pC, 10 pC (4 programmable gains) |
| Peaking times | 16 values, ~50 ns to ~1 $\mu$s |
| SCA depth | 512 cells per channel |
| Sampling frequency | 1--100 MHz (programmable) |
| External ADC | 12-bit (on AsAd board) |
| Channels per AsAd | 256 (4 AGET chips) |
| Channels per CoBo | 1024 (4 AsAd boards) |
| CoBo FPGA | Xilinx Virtex-5 LXT |
| Zero suppression | Factor 10--100 data reduction |
| MuTAnT trigger | 3-level programmable (multiplicity + external) |
| Chassis | MicroTCA (PICMG AMC.0 R1.0), up to 11 CoBo per chassis |
| Readout interface | Gigabit Ethernet |
| Signal polarity | Positive or negative (programmable) |
| Typical event rate | Up to ~1 kHz (depending on channel count and readout depth) |

#### Operational Examples:

- **AT-TPC at FRIB:** 10,240 channels (10 CoBo boards), single MicroTCA chassis [AT-TPC wiki].
- **ACTAR TPC at GANIL:** Up to 16,384 pads (2$\times$2 mm$^2$ pitch), sampling the active volume into ~8 mega-voxels. Typical operation at 25 MHz sampling with 270 time buckets, achieving ~60 Hz event rate. Reducing readout depth from 512 to 256 time buckets doubles the data throughput [Giovinazzo et al. 2018; Mauss et al. 2020].
- **GADGET II at FRIB:** 1,024 channels (4 CoBo boards), 50 MHz sampling, 502 ns shaping time, 1 pC gain setting. Readout reduced to 64 time buckets for high-throughput operation [Roger et al. 2024].

### 6.4.3 DAQ Software Frameworks

Several software frameworks manage the data flow, run control, online monitoring, and storage:

- **MIDAS (Maximum Integration Data Acquisition System):** Developed at PSI (Switzerland) and TRIUMF (Canada). General-purpose framework for small to medium experiments, with web-based run control, online histogramming, and support for multiple front-end hardware standards. Widely used in nuclear physics worldwide [MIDAS, PSI/TRIUMF].

- **NSCLDAQ:** Developed at NSCL/FRIB (Michigan State University). Modular architecture that breaks the DAQ problem into smaller applications (readout programs, event builders, analysis pipelines). Standard DAQ at FRIB and several university labs [NSCLDAQ, sourceforge.net].

- **NARVAL / DCOD:** Developed at GANIL (France). Originally used for the AGATA gamma-tracking array, NARVAL is a distributed data-flow framework where "actors" (processing nodes) perform tasks such as energy calibration, time alignment, and pulse-shape analysis. Upgraded to DCOD in 2017 for improved rate capability [GANIL DAQ documentation].

- **GET-specific software:** The GET system includes its own DAQ software for configuring the AGET/AsAd/CoBo/MuTAnT chain, controlling runs, and streaming data to storage. The software interfaces with experiment-level frameworks (e.g., NSCLDAQ at FRIB, NARVAL at GANIL) via standard protocols.

### 6.4.4 Data Format and Event Structure

The fundamental unit of DAQ output is the **event** -- a snapshot of all detector signals associated with a single physics interaction:

- **Event header:** Trigger number, timestamp (from the master clock, typically with ~10 ns resolution or better), trigger type/pattern.
- **Data body:** For each fired channel -- channel ID, digitized values (ADC counts, TDC values, or full waveform samples). With zero suppression, only channels above threshold are included.
- **Event footer:** Data integrity checks (checksums), event size.

**Data formats:**
- Raw binary formats optimized for write speed during acquisition.
- ROOT TTree format (CERN): Columnar layout enabling selective branch reading. Widely used for offline analysis in nuclear and particle physics. Hundreds of petabytes of HEP/NP data are stored in this format [ROOT project, CERN].
- HDF5: Used in some facilities for large-array data (e.g., TPC waveforms).

**Data rates and storage:**
- Traditional VME-based systems: ~10--100 MB/s raw data rate.
- GET system: With 10,240 channels at 25 MHz sampling and 512 time buckets, the raw data per event is $\sim 10240 \times 512 \times 2$ bytes $\approx$ 10 MB/event. At 100 Hz event rate, this would be ~1 GB/s *before* zero suppression. Zero suppression (factor 10--100) reduces this to ~10--100 MB/s, manageable over Gigabit Ethernet.
- A typical week-long RIB experiment at IMP might produce ~1--10 TB of compressed data, depending on beam rate and trigger conditions.

---

## 6.5 IMP-Specific: GET System at HIRFL

At the Institute of Modern Physics (IMP), Chinese Academy of Sciences, the GET electronics system is deployed for active-target and forward-angle TPC detectors used in direct reaction studies with radioactive isotope beams from the HIRFL-CSR facility.

### Semi-cylindrical TPC (scTPC) at HIRFL

A semi-cylindrical TPC based on THGEM (Thick Gas Electron Multiplier) technology has been developed at IMP for ($^3$He,$t$) charge-exchange reactions in inverse kinematics. Key parameters:

- **Pad plane:** 886 zigzag-shaped pads
- **Geometry:** Semi-cylindrical, 20 cm length, ~20 cm radius
- **Gas:** Ar/iC$_4$H$_{10}$ (95/5) mixture
- **Readout:** AGET-based GET electronics, with CSA at 4 programmable gains (120 fC, 240 fC, 1 pC, 10 pC)
- **Application:** Measuring $\Delta E$ and reconstructing particle tracks for charge-exchange reactions using HIRFL radioactive isotope beams [Springer, EPJC 2023; NST 2025].

### MATE TPC

The Multi-purpose TPC for nuclear AsTrophysical and Exotic beam experiments (MATE) at HIRFL is another detector utilizing GET electronics for active-target experiments. It is designed for decay spectroscopy and direct reaction measurements with exotic beams from HIRFL.

### DAQ Integration at IMP

The DAQ at IMP integrates the GET system with:
- **Spill gate synchronization** from the CSR slow extraction (~200 ms spill, ~1 s cycle)
- **External trigger inputs** from ancillary detectors (e.g., beam-tracking detectors, $\Delta E$-$E$ telescopes at forward angles)
- **FPGA-based spill feedback** to mitigate the 50 Hz ripple in the CSR extraction [Mao et al.]
- **Data storage** on local computing clusters for offline analysis

### Typical Data Flow at IMP

```
TPC Pads → AGET (CSA + SCA @ 25-50 MHz) → AsAd (12-bit ADC)
    → CoBo (zero suppression, timestamp) → GbE → DAQ Server
    → ROOT/binary files → Offline analysis (track reconstruction, PID)
```

Typical experiments at HIRFL with the GET-based TPC systems operate at beam rates of ~$10^3$--$10^5$ particles per second (pps), with event rates of ~10--1000 Hz after triggering. With zero suppression, sustained data rates of ~10--50 MB/s are typical, producing ~1--5 TB per experiment week.

---

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley -- Ch. 16-17
- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press -- Ch. 6-8, 13
- Leo, W. R. (1994). *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed. Springer -- Ch. 11
- Gedcke, D. A. & McDonald, W. J. (1967). "A constant fraction of pulse height trigger for optimum time resolution." *Nucl. Instrum. Methods*, 55, 377-380
- Pollacco, E. et al. (2018). "GET: A generic electronics system for TPCs and nuclear physics instrumentation." *Nucl. Instrum. Methods A*, 887, 81-93. [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0168900218300342)
- Mauss, B. et al. (2020). "ACTAR TPC performance with GET electronics." *Nucl. Instrum. Methods A*, 953, 163184. [HAL](https://hal.science/hal-02416890)
- Roger, T. et al. (2024). "Time Projection Chamber for GADGET II." *Phys. Rev. C*, 110, 035807. [arXiv:2401.01904](https://arxiv.org/abs/2401.01904)
- Giovinazzo, J. et al. (2018). "GET electronics for ACTAR TPC." Presentation, GET meeting. [GANIL Indico](https://indico.in2p3.fr/event/17431/contributions/65180/)
- Mao, R. et al. "Beam spill structure feedback test in HIRFL-CSR." [ResearchGate](https://www.researchgate.net/publication/265340534_BEAM_SPILL_STRUCTURE_FEEDBACK_TEST_IN_HIRFL-CSR)
- CAEN. "Digitizer whitepaper." [CAEN](https://www.caen.it/caen-digitizer-whitepaper/)
- AT-TPC Wiki, FRIB. [CoBo page](https://wikihost.frib.msu.edu/attpc/doku.php?id=cobo); [Electronics page](https://wikihost.frib.msu.edu/attpc/doku.php?id=electronics_old)
- IAEA-TECDOC-1634. *Signal Processing and Electronics for Nuclear Spectrometry*. [IAEA](https://www-pub.iaea.org/MTCD/Publications/PDF/te_1634_web.pdf)
- Semi-cylindrical TPC at HIRFL: *Eur. Phys. J. C* 83 (2023); *Nucl. Sci. Tech.* 36 (2025). [Springer EPJC](https://link.springer.com/article/10.1140/epjc/s10052-023-12170-x); [Springer NST](https://link.springer.com/article/10.1007/s41365-025-01660-0)
- MIDAS DAQ. [Wikipedia](https://en.wikipedia.org/wiki/Maximum_Integrated_Data_Acquisition_System)
- NSCLDAQ. [SourceForge](https://sourceforge.net/projects/nscldaq/); [FRIB Docs](https://docs.frib.msu.edu/daq/new_index.php)
- NARVAL/GANIL. [GANIL-SPIRAL2 DAQ](https://www.ganil-spiral2.eu/event/data-acquisition-systems-in-nuclear-physics-architectures-and-challenges/)
