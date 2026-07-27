# Nuclear physics detectors comparison

## Export metadata (verbatim)

```json
{
  "uuid": "7a7eca8d-8d1e-4697-b06f-2ace9c956af3",
  "name": "Nuclear physics detectors comparison",
  "summary": "**Conversation overview**\n\nThe person is a student or researcher learning about nuclear physics detectors, specifically the MUSIC (MUlti-Sampling Ionization Chamber) and MWDC (Multi-Wire Drift Chamber) detectors used at HIRFL (Heavy Ion Research Facility in Lanzhou) and RIBLL (Radioactive Ion Beam Line in Lanzhou) at IMP (Institute of Modern Physics), Chinese Academy of Sciences. Their explicitly stated purpose was to learn about both detectors. The conversation covered working principles, technical specifications, and a detailed comparison between the two detector systems in the context of the HIRFL-CSR facility.\n\nClaude produced two substantial research reports. The first was a broad comparative overview covering implementations at GSI, RIKEN, and Argonne in addition to HIRFL-CSR, detailing the Bethe-Bloch energy-loss physics underlying MUSIC, the multi-sampling statistical improvement scaling as 1/√N, Frisch grid operation, gas choices (CF₄, P-10, Xe/CH₄), and MWDC drift-time measurement principles including space-time relation calibration, wire plane orientations (X/U/V at 0°/±30°), and avalanche gain. The second report focused specifically on the HIRFL-RIBLL context, providing exact technical parameters for the IMP MUSIC (8 anode segments, 520 mm total length, CF₄ gas, σ_Z ~ 0.19 for ⁷⁵As at 300 MeV/u) and the ETF/CEE MWDC arrays (230–301 µm spatial resolution, >95% layer efficiency, P-10 or Ar/CO₂ gas), the sandwich detector arrangement at RIBLL2-F4, the Bρ-ΔE-TOF identification method, and the experimental physics program including charge-changing cross sections and mass measurements.\n\nThe person then asked two follow-up questions. First, they requested the full name and exact meaning of \"HIRFL-CSR,\" which Claude answered by breaking down each component word-by-word: Heavy Ion Research Facility in Lanzhou (HIRFL) and Cooler Storage Ring (CSR), explaining the electron cooling mechanism, the storage ring concept, and the full accelerator cascade from ECR source through SFC, SSC, CSRm, RIBLL2, and CSRe. Second, the person asked a technically sophisticated question about whether the signal (current) induced during the electron drift phase in a MWDC follows the same paradigm as other gaseous detectors. Claude gave a detailed physics explanation invoking the Shockley-Ramo theorem, explaining that the 1/r weighting field geometry near a thin sense wire makes the long primary electron drift essentially invisible on the anode, that the detectable signal is dominated by positive ion motion in the avalanche zone near the wire, and that this makes the MWDC fundamentally a precision timing device rather than an energy measurement device — contrasting it explicitly with MUSIC's parallel-plate geometry where uniform weighting field makes the full electron drift contribute to the amplitude signal. Key references cited throughout include S. Lee et al. NIM B 376 (2016), Y.Z. Sun et al. NIM A 894 (2018), Fang et al. arXiv:2106.04760, and arXiv:2505.00053 on full RIBLL2 realization.",
  "created_at": "2026-03-12T05:33:42.585568Z",
  "updated_at": "2026-03-12T08:23:40.876088Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-12T05:33:43.905256Z

MUSIC,  a known Nuclear physics detector
MWDC, another know Nuclear physics detector

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce089-5ad2-7303-bc0d-921d937f5ae6",
  "updated_at": "2026-03-12T05:33:43.905256Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-12T05:33:47.214561Z



A couple quick questions to make sure I research exactly what you need:

1. What aspect of these detectors are you most interested in? (e.g., working principles, comparison between the two, use in specific experiments, technical specs)
2. Do you have a specific context in mind — such as a particular experiment, facility (like HIRFL at IMP), or reaction type?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce089-5ad2-7dbf-9a3a-e5230b5b5a88",
  "updated_at": "2026-03-12T05:33:47.214561Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce089-5ad2-7303-bc0d-921d937f5ae6"
}
```

</details>

### 3. human — 2026-03-12T05:35:20.875006Z

1. Working principles, technical specs and comparison between the two.
2. HIRFL and RIBLL at IMP.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce08a-d56a-7615-9190-d7a5a6ccb24d",
  "updated_at": "2026-03-12T05:35:20.875006Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce089-5ad2-7dbf-9a3a-e5230b5b5a88"
}
```

</details>

### 4. assistant — 2026-03-12T05:35:26.532296Z



Great, that gives me a clear picture. I'll dive into a thorough research on both detectors now — covering their working principles, technical specs, and how they compare, specifically in the context of HIRFL and RIBLL at IMP.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-12T05:35:23.020733Z",
  "stop_timestamp": "2026-03-12T05:35:26.464835Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01ABrgmRjBYCNM3nujbF17p7",
  "name": "launch_extended_search_task",
  "input": {
    "command": "Research the MUSIC (MUSic Ionization Chamber) and MWDC (Multi-Wire Drift Chamber) nuclear physics detectors, with a focus on:\n\n1. Working principles of each detector:\n   - MUSIC: how it measures energy loss (ΔE), how it identifies nuclear charge (Z identification), gas mixture, electric field configuration, anode/cathode structure, signal readout\n   - MWDC: how it achieves position/tracking measurements, wire plane configuration, drift time-to-position conversion, gas mixture, field wires vs sense wires\n\n2. Technical specifications:\n   - MUSIC: dimensions, number of anode segments"
  },
  "message": "launch_extended_search_task",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>



<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce08a-d56a-7ab5-a1a3-bee588e5b740",
  "updated_at": "2026-03-12T05:35:26.532296Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce08a-d56a-7615-9190-d7a5a6ccb24d"
}
```

</details>

### 5. human — 2026-03-12T05:35:47.498203Z

1. Working principles, technical specs and comparison between the two.
2. HIRFL and RIBLL at IMP.
3. My purpose is to learn this two

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce08b-38b8-766e-904f-642325332736",
  "updated_at": "2026-03-12T05:35:47.498203Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce089-5ad2-7dbf-9a3a-e5230b5b5a88"
}
```

</details>

### 6. assistant — 2026-03-12T05:35:57.358834Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants to learn about MUSIC and MWDC detectors used at HIRFL/RIBLL at IMP. This is clear enough to launch research directly.

</details>

Great context! I'll dive into a thorough research on both detectors now.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-12T05:35:50.414760Z",
  "stop_timestamp": "2026-03-12T05:35:57.102357Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01BxzuH71fyHvL4rc7Hm6NR7",
  "name": "launch_extended_search_task",
  "input": {
    "command": "Research the MUSIC detector and MWDC detector used in nuclear physics experiments, specifically in the context of HIRFL (Heavy Ion Research Facility in Lanzhou) and RIBLL (Radioactive Ion Beam Line in Lanzhou) at IMP (Institute of Modern Physics), Chinese Academy of Sciences. \n\nPlease cover the following for EACH detector:\n1. **Working Principles** – How does each detector physically work? What physical processes does it exploit to detect particles?\n2. **Technical Specifications** – Key technical parameters such as dimensions, gas type/mixture, voltage, position resolution, time resolution, efficiency, number of anodes/wires, drift velocity, etc.\n3. **Role in Experiments** – What are these detectors typically used to measure? (e.g., energy loss ΔE, position tracking, particle identification)\n\nThen provide a **comparison** between MUSIC and MWDC:\n- How do they differ in working principle?\n- What different roles do they serve in a beamline setup?\n- How are they complementary to each other?\n- Advantages and disadvantages of each.\n\nFocus on their use at RIBLL1/RIBLL2 at HIRFL-IMP, and any specific experiments involving direct reactions, particle identification (Z identification via ΔE), or Time Projection Chamber setups. Include references to key papers or technical notes if available."
  },
  "message": "launch_extended_search_task",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01BxzuH71fyHvL4rc7Hm6NR7",
  "name": "launch_extended_search_task",
  "content": [
    {
      "type": "text",
      "text": "{\"task_id\": \"wf-52387b92-8c03-40e8-b6e6-e7040d08f475\"}",
      "uuid": "c9b1dab3-713a-4434-807b-79f3c01a9c5e"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>



Your nuclear fragment detector report is ready. It covers the operating principles, electrode configurations, gas selections, and performance benchmarks of MUSIC ionization chambers and Multi-Wire Drift Chambers. The report details implementations at GSI, RIKEN, Argonne, and HIRFL-CSR, including how multi-sampling energy-loss measurements achieve element-by-element charge identification from Z = 3 to 92, and how drift-time techniques deliver sub-millimeter position resolution for precision isotope tracking.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_use",
  "id": null,
  "name": "artifacts",
  "input": {
    "id": "compass_artifact_wf-4e15347e-1f07-4dc3-9424-22a974a27b71_text/markdown",
    "type": "text/markdown",
    "title": "MUSIC and MWDC Detectors: Principles and Performance in Nuclear Fragment Identification for Heavy-Ion Physics",
    "source": "c",
    "command": "create",
    "content": "# How MUSIC and MWDC detectors identify nuclear fragments\n\nHeavy-ion physics experiments rely on two complementary detector technologies — the **MUSIC** (MUlti-Sampling Ionization Chamber) for nuclear charge identification and the **MWDC** (Multi-Wire Drift Chamber) for precision position tracking — that together form the backbone of particle identification at facilities like GSI, RIKEN, and HIRFL-CSR. The MUSIC measures energy loss (ΔE) through segmented anodes to determine atomic number Z, while the MWDC extracts sub-millimeter spatial positions from electron drift times. Their combined use in the **Bρ–TOF–ΔE method** enables event-by-event identification of rare isotopes produced in fragmentation reactions. This report details the physics principles, electrode configurations, gas choices, and performance benchmarks of each detector.\n\n---\n\n## MUSIC: multiple energy-loss samples yield sharp Z resolution\n\nThe MUSIC detector operates on a straightforward physical principle. A heavy ion traversing a gas volume ionizes molecules along its path, liberating electron–ion pairs. An applied electric field drifts these electrons to anode electrodes, where the collected charge is directly proportional to the ion's energy deposition ΔE. The Bethe-Bloch formula connects this energy loss to the projectile's nuclear charge: **−dE/dx ∝ Z²eff · f(β)**, where Zeff is the effective charge and β = v/c is the velocity. For fully stripped ions at relativistic energies (200–1000 MeV/u), Zeff equals the atomic number Z. By combining the measured ΔE with velocity information from time-of-flight detectors, experiments extract Z with element-by-element precision from lithium through uranium.\n\nThe defining innovation of MUSIC over a single-anode ionization chamber is its **segmented anode**, which provides N independent ΔE measurements along the beam path. Averaging these samples — typically via a geometric mean or truncated mean — improves charge resolution by approximately **1/√N**. For 8 anode segments, this yields a factor of ~2.8 improvement. Equally important, the multi-sampling approach suppresses the non-Gaussian tails caused by energetic knock-on electrons (δ-rays) that can escape individual anode segments. By identifying and rejecting these outliers, the truncated-mean method produces distributions far narrower than Vavilov's energy-loss theory predicts.\n\nThe standard geometry is a parallel-plate configuration with the electric field oriented perpendicular to the beam axis. The cathode sits at high negative voltage on one side, and segmented anode strips sit at or near ground on the opposite side. Between them, a **Frisch grid** shields the anodes from induced signals until the drifting electrons pass through, ensuring the pulse height depends only on the collected charge rather than on where ionization occurred within the drift gap. Field homogenization is achieved through precision resistive voltage dividers — in the GSI MUSIC-80, aluminum strips deposited on float-glass windows via photolithography create the graded potential.\n\n---\n\n## MUSIC technical specifications across three major implementations\n\nDifferent laboratories have optimized the MUSIC concept for their specific physics programs, producing several well-characterized variants:\n\n**MUSIC-80 at the GSI Fragment Separator (FRS)** uses **8 anode strips**, each 50 mm long in the beam direction, yielding a 400 mm total active length. The active cross-section is 200 mm wide by 80 mm in drift height. It operates with pure CF₄ gas at atmospheric pressure, chosen for its high density (3.93 mg/cm³), fast electron drift velocity (~10 cm/μs at 1.0 kV/cm/atm), and stability. The cathode voltage ranges from −8 to −10 kV; the Frisch grid sits 7 mm above the anodes with 100 μm wire diameter at 1 mm spacing. Three interchangeable preamplifier gain sets cover the enormous dynamic range from **Z = 3 to Z = 92** (a factor of 10³ in charge signal). The 10th-order shaper design with DC coupling supports particle rates up to **200 kHz**.\n\n**The ANL MUSIC at Argonne's ATLAS facility** serves as an active-target detector for fusion reactions with radioactive beams. It houses **18 anode strips** (16 active plus 2 control), each 1.58 cm long, within a 30 × 10 × 20 cm aluminum box. The active strips are subdivided into left and right staggered halves for multiplicity filtering — distinguishing fusion events (one product) from scattering (two products). Operating at low pressure (~200 mbar) with CH₄, He, or other target gases, its thin titanium entrance windows (1.45 mg/cm²) minimize energy loss of the beam before the active volume.\n\n**The RIKEN BigRIPS ionization chamber** uses **12 anodes and 13 cathodes** arranged alternately at 2.0 cm intervals perpendicular to the beam. The electrodes are 2.5 μm aluminized Mylar films mounted on aluminum rings with a 6.0 cm inner diameter. The active gas length is 48 cm, and it operates at 620 Torr. A major recent advance is the use of **Xe/CH₄ (70:30) gas** instead of the standard P-10 (Ar/CH₄), which dramatically improves Z identification for heavy ions above Z ≈ 70 by enabling charge-state equilibrium through xenon's higher charge-changing cross section.\n\n---\n\n## MWDC: drift time measurements deliver sub-millimeter tracking\n\nThe MWDC achieves precise position measurements through a fundamentally different approach than the MWPC it evolved from. When a charged particle ionizes the fill gas, the freed electrons drift under a shaped electric field toward thin anode (sense) wires. Rather than simply registering which wire fired — the MWPC approach, which limits resolution to the wire spacing — the MWDC measures the **electron drift time** and converts it to a drift distance using a calibrated space-time relation (STR). The basic conversion is **d = t_drift × v_drift**, though in practice an iterative self-calibration procedure refines the R-T curve using tracking residuals until convergence.\n\nThe wire configuration establishes two distinct field regions. **Sense (anode) wires** are very thin — typically **20 μm gold-plated tungsten** — held at positive high voltage (1.5–2.7 kV depending on the gas and pressure). Their small radius creates a strong 1/r electric field in the immediate vicinity, driving Townsend avalanche multiplication with gains of 10⁴–10⁶. **Field (cathode) wires**, thicker at 50–100 μm, are held at ground or negative potential and shape the electric field in the drift region to maintain a uniform drift velocity of roughly **4–5 cm/μs**. In the HIRFL-CSR CEE MWDC, each drift cell (10 × 10 mm) is defined by 1 sense wire surrounded by 2 field wires and 10 cathode wires.\n\nMultiple wire planes at different angular orientations enable full two-dimensional position reconstruction. The CEE MWDC employs **6 sense wire layers** in three directions — X (0°), U (+30°), V (−30°) — with pairs of planes staggered by half a cell width to resolve the inherent left-right ambiguity of drift chambers. Each layer contains 80 sense wires in the full-size detector, totaling 480 channels per chamber. The RIKEN SHARAQ beamline uses an X-X'-Y-Y' four-plane configuration instead, trading angular information for direct X-Y coordinate measurement.\n\n---\n\n## Gas choices reflect the tension between resolution, rate, and material budget\n\nGas selection in both detector types involves careful trade-offs between ionization yield, drift velocity, diffusion, and material thickness.\n\nFor MUSIC detectors, **CF₄** (used at GSI) offers fast signals and high stopping power but cannot serve as a reaction target. **P-10** (90% Ar + 10% CH₄) is the standard workhorse at RIKEN and Lanzhou, providing good energy resolution of **1.9–3.0% FWHM** for uranium beams, though performance degrades above Z ≈ 70 due to charge-state fluctuation straggling. The recently developed **Xe/CH₄ mixture** at RIKEN addresses this limitation directly. Active-target variants at Argonne fill the chamber with the reaction target gas itself — CH₄ for carbon targets, helium for (α,p) reactions — making the detection medium and physics target one and the same.\n\nMWDC gas choices prioritize drift properties and minimal scattering. At RIKEN, the LP-MWDC operates with **isobutane at just 10 kPa** (about 1/10 atmosphere), drastically reducing multiple scattering of radioactive isotope beams while still providing adequate ionization for heavy ions. The GSI HADES experiment uses atmospheric-pressure **Ar/CO₂/alcohol** mixtures. For specialized applications like beta-decay tracking, He/isobutane mixtures at 300 mbar minimize energy loss of low-energy electrons while maintaining spatial resolution around 500 μm.\n\n---\n\n## Performance benchmarks reveal order-of-magnitude advantages over predecessors\n\nThe practical performance of these detectors justifies their widespread adoption. MUSIC detectors at the GSI FRS achieve **element-by-element Z identification from Z = 3 through Z = 92** across beam energies of 200–1000 MeV/u. The Lanzhou ETF MUSIC reports Z resolution of **0.4–0.6 charge units (FWHM)**. The RIKEN BigRIPS system, which has contributed to the discovery of over 170 new isotopes, relies on its ionization chambers as the primary Z-identification element in the Bρ–TOF–ΔE particle identification scheme.\n\nMWDCs deliver position resolution of **200–300 μm**, representing roughly a tenfold improvement over the ~2 mm resolution of the MWPCs they replace. The CEE MWDC prototype achieved a tracking residual of **301 ± 2 μm** in beam tests at HIRFL-CSR, while the RIKEN LP-MWDC reaches 300 μm FWHM even at beam intensities of 1 MHz — critical for experiments with high-intensity radioactive beams. This spatial precision directly translates to momentum resolution: the SHARAQ spectrometer achieves δp/p = 1/14,700 for high-resolution nuclear spectroscopy. Beyond resolution, MWDCs require far fewer electronics channels than MWPCs for the same active area, since larger drift cells (5–10 mm) replace dense wire arrays (1–2 mm spacing), substantially reducing cost and complexity.\n\n---\n\n## Conclusion\n\nMUSIC and MWDC detectors represent mature, highly optimized solutions to two fundamental challenges in heavy-ion physics: \"what is it?\" and \"where did it go?\" The MUSIC's multi-sampling strategy — averaging N independent energy-loss measurements to beat down statistical and δ-ray fluctuations — transforms the Bethe-Bloch relationship into a practical tool for charge identification spanning the entire periodic table. The MWDC's drift-time measurement converts a simple binary wire signal into a continuous position variable, achieving sub-millimeter resolution with fewer channels and lower cost than wire-spacing-limited alternatives. Together in the Bρ–TOF–ΔE framework, these detectors have enabled the discovery of hundreds of new isotopes and remain central to the physics programs at GSI, RIKEN, FRIB, and HIRFL-CSR. The most consequential recent advance is RIKEN's adoption of xenon-based gas in their ionization chambers, which extends reliable Z identification into the heaviest elements by solving the long-standing charge-state equilibrium problem above Z ≈ 70.",
    "language": null,
    "md_citations": [
      {
        "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
        "uuid": "900d4c17-6f7d-457d-bffc-a0b132fd34c0",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
            "uuid": "900d4c17-6f7d-457d-bffc-a0b132fd34c0",
            "title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "900d4c17-6f7d-457d-bffc-a0b132fd34c0",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory"
        },
        "end_index": 502,
        "start_index": 406,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "4ddc6f58-4ddf-4f5e-9e3b-7cfe65da102c",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "4ddc6f58-4ddf-4f5e-9e3b-7cfe65da102c",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "4ddc6f58-4ddf-4f5e-9e3b-7cfe65da102c",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 719,
        "start_index": 581,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
        "uuid": "8eda0dd2-9813-4fab-8329-81b726f446f4",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
            "uuid": "8eda0dd2-9813-4fab-8329-81b726f446f4",
            "title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "8eda0dd2-9813-4fab-8329-81b726f446f4",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory"
        },
        "end_index": 719,
        "start_index": 581,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ionization_chamber",
        "uuid": "2de2ef60-6da1-462b-ad5d-d2729cb67433",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Ionization_chamber",
            "uuid": "2de2ef60-6da1-462b-ad5d-d2729cb67433",
            "title": "Ionization chamber - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2de2ef60-6da1-462b-ad5d-d2729cb67433",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Ionization chamber - Wikipedia"
        },
        "end_index": 1245,
        "start_index": 988,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.britannica.com/technology/ionization-chamber",
        "uuid": "3c8c6d02-f949-4473-9751-5233ef60ab20",
        "title": "Britannica",
        "sources": [
          {
            "url": "https://www.britannica.com/technology/ionization-chamber",
            "uuid": "3c8c6d02-f949-4473-9751-5233ef60ab20",
            "title": "Ionization chamber | Radiation Detection, Nuclear Physics & Measurement | Britannica",
            "source": "Britannica",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=britannica.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "3c8c6d02-f949-4473-9751-5233ef60ab20",
          "source": "Britannica",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=britannica.com",
          "preview_title": "Ionization chamber | Radiation Detection, Nuclear Physics & Measurement | Britannica"
        },
        "end_index": 1245,
        "start_index": 988,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900287912137",
        "uuid": "afb5aa71-38f6-414e-be69-b99ba24861f7",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900287912137",
            "uuid": "afb5aa71-38f6-414e-be69-b99ba24861f7",
            "title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "afb5aa71-38f6-414e-be69-b99ba24861f7",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect"
        },
        "end_index": 1664,
        "start_index": 1523,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
        "uuid": "fefd3836-d5aa-4d26-8623-4be6caf41612",
        "title": "Oxford Academic",
        "sources": [
          {
            "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
            "uuid": "fefd3836-d5aa-4d26-8623-4be6caf41612",
            "title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic",
            "source": "Oxford Academic",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "fefd3836-d5aa-4d26-8623-4be6caf41612",
          "source": "Oxford Academic",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
          "preview_title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic"
        },
        "end_index": 1992,
        "start_index": 1862,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900287912137",
        "uuid": "ac9feded-eb57-4b10-a2dd-bf9f62ff6c21",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900287912137",
            "uuid": "ac9feded-eb57-4b10-a2dd-bf9f62ff6c21",
            "title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "ac9feded-eb57-4b10-a2dd-bf9f62ff6c21",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect"
        },
        "end_index": 2379,
        "start_index": 2057,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://link.springer.com/article/10.1140/epjc/s10052-021-09879-y",
        "uuid": "361c0af1-1d04-4f5d-9985-f0c893c7f61d",
        "title": "Springer",
        "sources": [
          {
            "url": "https://link.springer.com/article/10.1140/epjc/s10052-021-09879-y",
            "uuid": "361c0af1-1d04-4f5d-9985-f0c893c7f61d",
            "title": "Exploration of grid scheme for Frisch-grid ionization chamber | The European Physical Journal C",
            "source": "Springer",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "361c0af1-1d04-4f5d-9985-f0c893c7f61d",
          "source": "Springer",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
          "preview_title": "Exploration of grid scheme for Frisch-grid ionization chamber | The European Physical Journal C"
        },
        "end_index": 2868,
        "start_index": 2628,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www-windows.gsi.de/frs/technical/FRSsetup/detectors/music80/music80_manual.pdf",
        "uuid": "7f8378bd-bb6d-4721-ab0e-00bd16e0fba0",
        "title": "gsi",
        "sources": [
          {
            "url": "https://www-windows.gsi.de/frs/technical/FRSsetup/detectors/music80/music80_manual.pdf",
            "uuid": "7f8378bd-bb6d-4721-ab0e-00bd16e0fba0",
            "title": "",
            "source": "gsi",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "7f8378bd-bb6d-4721-ab0e-00bd16e0fba0",
          "source": "gsi",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
          "preview_title": ""
        },
        "end_index": 3068,
        "start_index": 2869,
        "origin_tool_name": "web_fetch"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
        "uuid": "36adf3c4-a601-4caa-b9a8-7dca06ccbcd3",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
            "uuid": "36adf3c4-a601-4caa-b9a8-7dca06ccbcd3",
            "title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "36adf3c4-a601-4caa-b9a8-7dca06ccbcd3",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect"
        },
        "end_index": 3359,
        "start_index": 3340,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www-win.gsi.de/frs/technical/FRSsetup/detectors/music.asp",
        "uuid": "decad9ab-7d85-4f86-b367-24211f1484ee",
        "title": "Gsi",
        "sources": [
          {
            "url": "https://www-win.gsi.de/frs/technical/FRSsetup/detectors/music.asp",
            "uuid": "decad9ab-7d85-4f86-b367-24211f1484ee",
            "title": "FRS website: Detectors - ionization chambers",
            "source": "Gsi",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "decad9ab-7d85-4f86-b367-24211f1484ee",
          "source": "Gsi",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
          "preview_title": "FRS website: Detectors - ionization chambers"
        },
        "end_index": 3520,
        "start_index": 3504,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www-windows.gsi.de/frs/technical/FRSsetup/detectors/music80/music80_manual.pdf",
        "uuid": "17a51cab-28ce-4e6d-92a3-3d657d6517f4",
        "title": "gsi",
        "sources": [
          {
            "url": "https://www-windows.gsi.de/frs/technical/FRSsetup/detectors/music80/music80_manual.pdf",
            "uuid": "17a51cab-28ce-4e6d-92a3-3d657d6517f4",
            "title": "",
            "source": "gsi",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "17a51cab-28ce-4e6d-92a3-3d657d6517f4",
          "source": "gsi",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
          "preview_title": ""
        },
        "end_index": 4035,
        "start_index": 3286,
        "origin_tool_name": "web_fetch"
      },
      {
        "url": "https://www.osti.gov/servlets/purl/1237907",
        "uuid": "a7a24dea-a210-4a08-bebf-f3810432f62d",
        "title": "OSTI",
        "sources": [
          {
            "url": "https://www.osti.gov/servlets/purl/1237907",
            "uuid": "a7a24dea-a210-4a08-bebf-f3810432f62d",
            "title": "1 A Multi-Sampling Ionization Chamber (MUSIC) for Measurements 1",
            "source": "OSTI",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a7a24dea-a210-4a08-bebf-f3810432f62d",
          "source": "OSTI",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
          "preview_title": "1 A Multi-Sampling Ionization Chamber (MUSIC) for Measurements 1"
        },
        "end_index": 4279,
        "start_index": 4164,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
        "uuid": "3e685063-6005-408d-85b3-6ed4d22e4177",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
            "uuid": "3e685063-6005-408d-85b3-6ed4d22e4177",
            "title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "3e685063-6005-408d-85b3-6ed4d22e4177",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect"
        },
        "end_index": 4528,
        "start_index": 4454,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.osti.gov/servlets/purl/1237907",
        "uuid": "a54d4bdf-bc3f-4e91-a51d-8864150e3193",
        "title": "osti",
        "sources": [
          {
            "url": "https://www.osti.gov/servlets/purl/1237907",
            "uuid": "a54d4bdf-bc3f-4e91-a51d-8864150e3193",
            "title": "",
            "source": "osti",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a54d4bdf-bc3f-4e91-a51d-8864150e3193",
          "source": "osti",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
          "preview_title": ""
        },
        "end_index": 4636,
        "start_index": 4164,
        "origin_tool_name": "web_fetch"
      },
      {
        "url": "https://arxiv.org/html/2401.08679v1",
        "uuid": "fa755436-a2a2-428c-a98f-b9318cae1495",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2401.08679v1",
            "uuid": "fa755436-a2a2-428c-a98f-b9318cae1495",
            "title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "fa755436-a2a2-428c-a98f-b9318cae1495",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70"
        },
        "end_index": 4734,
        "start_index": 4684,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2401.08679v1",
        "uuid": "2d830a3f-b77b-4442-9027-1f1fda4d73cf",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2401.08679v1",
            "uuid": "2d830a3f-b77b-4442-9027-1f1fda4d73cf",
            "title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2d830a3f-b77b-4442-9027-1f1fda4d73cf",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70"
        },
        "end_index": 4918,
        "start_index": 4782,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2401.08679",
        "uuid": "3fe30252-7fa2-4737-be26-b740c70584cd",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2401.08679",
            "uuid": "3fe30252-7fa2-4737-be26-b740c70584cd",
            "title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "3fe30252-7fa2-4737-be26-b740c70584cd",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70"
        },
        "end_index": 4918,
        "start_index": 4684,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
        "uuid": "517970ef-a9bd-44f5-ad68-790fc0bb6b28",
        "title": "Oxford Academic",
        "sources": [
          {
            "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
            "uuid": "517970ef-a9bd-44f5-ad68-790fc0bb6b28",
            "title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic",
            "source": "Oxford Academic",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "517970ef-a9bd-44f5-ad68-790fc0bb6b28",
          "source": "Oxford Academic",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
          "preview_title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic"
        },
        "end_index": 4947,
        "start_index": 4638,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
        "uuid": "9a13bd41-29e7-4932-b8aa-ddfbb88dfa30",
        "title": "Oxford Academic",
        "sources": [
          {
            "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
            "uuid": "9a13bd41-29e7-4932-b8aa-ddfbb88dfa30",
            "title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic",
            "source": "Oxford Academic",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "9a13bd41-29e7-4932-b8aa-ddfbb88dfa30",
          "source": "Oxford Academic",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
          "preview_title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic"
        },
        "end_index": 5210,
        "start_index": 4948,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2401.08679",
        "uuid": "e8b5ee08-0bec-42c2-8809-c7902de41718",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2401.08679",
            "uuid": "e8b5ee08-0bec-42c2-8809-c7902de41718",
            "title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "e8b5ee08-0bec-42c2-8809-c7902de41718",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70"
        },
        "end_index": 5210,
        "start_index": 4948,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Proportional_counter",
        "uuid": "c9ac8dea-8fae-469e-9db9-fa5d39c6b11b",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Proportional_counter",
            "uuid": "c9ac8dea-8fae-469e-9db9-fa5d39c6b11b",
            "title": "Proportional counter - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "c9ac8dea-8fae-469e-9db9-fa5d39c6b11b",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Proportional counter - Wikipedia"
        },
        "end_index": 5539,
        "start_index": 5405,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://indico.cern.ch/event/426015/contributions/1047606/attachments/906077/1278746/DriftChamber_ICFA2005.pdf",
        "uuid": "1bcf9737-cedd-462c-840d-99c4c27e5110",
        "title": "cern",
        "sources": [
          {
            "url": "https://indico.cern.ch/event/426015/contributions/1047606/attachments/906077/1278746/DriftChamber_ICFA2005.pdf",
            "uuid": "1bcf9737-cedd-462c-840d-99c4c27e5110",
            "title": "",
            "source": "cern",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=cern.ch",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "1bcf9737-cedd-462c-840d-99c4c27e5110",
          "source": "cern",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=cern.ch",
          "preview_title": ""
        },
        "end_index": 5539,
        "start_index": 5405,
        "origin_tool_name": "web_fetch"
      },
      {
        "url": "https://indico.cern.ch/event/426015/contributions/1047606/attachments/906077/1278746/DriftChamber_ICFA2005.pdf",
        "uuid": "30f2cfbd-0e33-4b93-bc77-4ac890bf8cfd",
        "title": "cern",
        "sources": [
          {
            "url": "https://indico.cern.ch/event/426015/contributions/1047606/attachments/906077/1278746/DriftChamber_ICFA2005.pdf",
            "uuid": "30f2cfbd-0e33-4b93-bc77-4ac890bf8cfd",
            "title": "",
            "source": "cern",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=cern.ch",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "30f2cfbd-0e33-4b93-bc77-4ac890bf8cfd",
          "source": "cern",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=cern.ch",
          "preview_title": ""
        },
        "end_index": 5833,
        "start_index": 5783,
        "origin_tool_name": "web_fetch"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wire_chamber",
        "uuid": "8ae8ca32-65cf-4ee5-a13f-fe24a9d7aa33",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Wire_chamber",
            "uuid": "8ae8ca32-65cf-4ee5-a13f-fe24a9d7aa33",
            "title": "Wire chamber - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "8ae8ca32-65cf-4ee5-a13f-fe24a9d7aa33",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Wire chamber - Wikipedia"
        },
        "end_index": 5833,
        "start_index": 5655,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2406.12878",
        "uuid": "a6a0446e-f338-4f09-8d24-50efdd02f351",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2406.12878",
            "uuid": "a6a0446e-f338-4f09-8d24-50efdd02f351",
            "title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a6a0446e-f338-4f09-8d24-50efdd02f351",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment"
        },
        "end_index": 5958,
        "start_index": 5853,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.phy.bnl.gov/e949/detector/e787nim_final/node7.html",
        "uuid": "c2573ebf-4221-4b27-a4d5-5b83c236ac3f",
        "title": "Bnl",
        "sources": [
          {
            "url": "https://www.phy.bnl.gov/e949/detector/e787nim_final/node7.html",
            "uuid": "c2573ebf-4221-4b27-a4d5-5b83c236ac3f",
            "title": "Drift Chamber",
            "source": "Bnl",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=bnl.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "c2573ebf-4221-4b27-a4d5-5b83c236ac3f",
          "source": "Bnl",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=bnl.gov",
          "preview_title": "Drift Chamber"
        },
        "end_index": 6135,
        "start_index": 6023,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Proportional_counter",
        "uuid": "9e3bf4a1-8fa5-4710-b2da-642c8d5a2a3a",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Proportional_counter",
            "uuid": "9e3bf4a1-8fa5-4710-b2da-642c8d5a2a3a",
            "title": "Proportional counter - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "9e3bf4a1-8fa5-4710-b2da-642c8d5a2a3a",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Proportional counter - Wikipedia"
        },
        "end_index": 6330,
        "start_index": 5960,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2406.12878",
        "uuid": "db2830a7-23ad-4cf6-92f9-d47912dcd01a",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2406.12878",
            "uuid": "db2830a7-23ad-4cf6-92f9-d47912dcd01a",
            "title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "db2830a7-23ad-4cf6-92f9-d47912dcd01a",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment"
        },
        "end_index": 6665,
        "start_index": 6533,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/abs/2406.12878",
        "uuid": "cfcb2bf2-de2a-40fe-9eec-d5e9cd2147ad",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/abs/2406.12878",
            "uuid": "cfcb2bf2-de2a-40fe-9eec-d5e9cd2147ad",
            "title": "[2406.12878] Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "cfcb2bf2-de2a-40fe-9eec-d5e9cd2147ad",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "[2406.12878] Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment"
        },
        "end_index": 6868,
        "start_index": 6775,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2406.12878",
        "uuid": "d22174cf-5355-4ce8-b4d7-9e026f4e4743",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2406.12878",
            "uuid": "d22174cf-5355-4ce8-b4d7-9e026f4e4743",
            "title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "d22174cf-5355-4ce8-b4d7-9e026f4e4743",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment"
        },
        "end_index": 6986,
        "start_index": 6871,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
        "uuid": "0bf60557-9aed-4eb1-86bf-6785e6a3ea0a",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
            "uuid": "0bf60557-9aed-4eb1-86bf-6785e6a3ea0a",
            "title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0bf60557-9aed-4eb1-86bf-6785e6a3ea0a",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect"
        },
        "end_index": 7546,
        "start_index": 7481,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
        "uuid": "815734f3-c782-41a2-83f2-1498b7ab78b9",
        "title": "Oxford Academic",
        "sources": [
          {
            "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
            "uuid": "815734f3-c782-41a2-83f2-1498b7ab78b9",
            "title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic",
            "source": "Oxford Academic",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "815734f3-c782-41a2-83f2-1498b7ab78b9",
          "source": "Oxford Academic",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
          "preview_title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic"
        },
        "end_index": 7819,
        "start_index": 7586,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2401.08679",
        "uuid": "e71a3cb2-80f3-412f-a830-79de42fdac0c",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2401.08679",
            "uuid": "e71a3cb2-80f3-412f-a830-79de42fdac0c",
            "title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "e71a3cb2-80f3-412f-a830-79de42fdac0c",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70"
        },
        "end_index": 7819,
        "start_index": 7586,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
        "uuid": "a60471f2-3cba-467d-9230-8746a787213e",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
            "uuid": "a60471f2-3cba-467d-9230-8746a787213e",
            "title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a60471f2-3cba-467d-9230-8746a787213e",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect"
        },
        "end_index": 8019,
        "start_index": 7907,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
        "uuid": "0b74f454-5671-48d0-ae3a-addec0b5e0f7",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
            "uuid": "0b74f454-5671-48d0-ae3a-addec0b5e0f7",
            "title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0b74f454-5671-48d0-ae3a-addec0b5e0f7",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect"
        },
        "end_index": 8113,
        "start_index": 7907,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168583X13008677",
        "uuid": "2f4b5c55-800c-4759-a223-a11776ac12d4",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168583X13008677",
            "uuid": "2f4b5c55-800c-4759-a223-a11776ac12d4",
            "title": "Development of low-pressure multi-wire drift chambers for high-resolution spectroscopy with radioactive isotope beams - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2f4b5c55-800c-4759-a223-a11776ac12d4",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Development of low-pressure multi-wire drift chambers for high-resolution spectroscopy with radioactive isotope beams - ScienceDirect"
        },
        "end_index": 8401,
        "start_index": 8184,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.gsi.de/en/researchaccelerators/research_an_overview/hades_experiment/configuration_of_the_hades_experiment",
        "uuid": "199949d5-58a6-4a27-a8a7-0184e5bef4ba",
        "title": "GSI",
        "sources": [
          {
            "url": "https://www.gsi.de/en/researchaccelerators/research_an_overview/hades_experiment/configuration_of_the_hades_experiment",
            "uuid": "199949d5-58a6-4a27-a8a7-0184e5bef4ba",
            "title": "GSI - Configuration of the HADES experiment",
            "source": "GSI",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "199949d5-58a6-4a27-a8a7-0184e5bef4ba",
          "source": "GSI",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
          "preview_title": "GSI - Configuration of the HADES experiment"
        },
        "end_index": 8452,
        "start_index": 8402,
        "origin_tool_name": "web_search"
      },
      {
        "url": "http://web-docs.gsi.de/~weick/frs/mwpc.html",
        "uuid": "0d78f36d-702f-422b-a631-d46af00df1e4",
        "title": "GSI",
        "sources": [
          {
            "url": "http://web-docs.gsi.de/~weick/frs/mwpc.html",
            "uuid": "0d78f36d-702f-422b-a631-d46af00df1e4",
            "title": "FRS MWPC description",
            "source": "GSI",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0d78f36d-702f-422b-a631-d46af00df1e4",
          "source": "GSI",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=gsi.de",
          "preview_title": "FRS MWPC description"
        },
        "end_index": 8481,
        "start_index": 8402,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900209015459",
        "uuid": "55a5bca3-2d9a-4dcd-9333-0031404f86d4",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900209015459",
            "uuid": "55a5bca3-2d9a-4dcd-9333-0031404f86d4",
            "title": "Ultra-thin gas detector for tracking of low energy electrons - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "55a5bca3-2d9a-4dcd-9333-0031404f86d4",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Ultra-thin gas detector for tracking of low energy electrons - ScienceDirect"
        },
        "end_index": 8667,
        "start_index": 8482,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900295002944",
        "uuid": "ce7196b2-7ddf-4eda-bdb0-12d369a55be1",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900295002944",
            "uuid": "ce7196b2-7ddf-4eda-bdb0-12d369a55be1",
            "title": "The scintillation-detector equipment of the GSI projectile—fragment separator - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "ce7196b2-7ddf-4eda-bdb0-12d369a55be1",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The scintillation-detector equipment of the GSI projectile—fragment separator - ScienceDirect"
        },
        "end_index": 8982,
        "start_index": 8838,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "eb34c31b-9d41-4e24-898c-d1cc58fc7136",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "eb34c31b-9d41-4e24-898c-d1cc58fc7136",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "eb34c31b-9d41-4e24-898c-d1cc58fc7136",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 9061,
        "start_index": 8983,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
        "uuid": "4e41acc5-4b4d-46b5-864a-be6818441030",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
            "uuid": "4e41acc5-4b4d-46b5-864a-be6818441030",
            "title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "4e41acc5-4b4d-46b5-864a-be6818441030",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory"
        },
        "end_index": 9087,
        "start_index": 9062,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/271029012_Energy_resolution_of_gas_ionization_chamber_for_high-energy_heavy_ions",
        "uuid": "5f479785-37dc-4d2b-8abf-b53d61d25bfc",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/271029012_Energy_resolution_of_gas_ionization_chamber_for_high-energy_heavy_ions",
            "uuid": "5f479785-37dc-4d2b-8abf-b53d61d25bfc",
            "title": "Energy resolution of gas ionization chamber for high-energy heavy ions | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "5f479785-37dc-4d2b-8abf-b53d61d25bfc",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "Energy resolution of gas ionization chamber for high-energy heavy ions | Request PDF"
        },
        "end_index": 9275,
        "start_index": 9062,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
        "uuid": "724da83c-c4c1-4411-97a8-04c90e4f2578",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
            "uuid": "724da83c-c4c1-4411-97a8-04c90e4f2578",
            "title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "724da83c-c4c1-4411-97a8-04c90e4f2578",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory"
        },
        "end_index": 9275,
        "start_index": 9153,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "1977a343-31b6-4b58-a581-e87e1d8201e6",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "1977a343-31b6-4b58-a581-e87e1d8201e6",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "1977a343-31b6-4b58-a581-e87e1d8201e6",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 9425,
        "start_index": 9277,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/abs/2406.12878",
        "uuid": "5bdc3aa0-b824-458c-bc67-b340c6000c25",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/abs/2406.12878",
            "uuid": "5bdc3aa0-b824-458c-bc67-b340c6000c25",
            "title": "[2406.12878] Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "5bdc3aa0-b824-458c-bc67-b340c6000c25",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "[2406.12878] Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment"
        },
        "end_index": 9523,
        "start_index": 9277,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/270837011_The_SHARAQ_spectrometer",
        "uuid": "45faf03c-4122-40a2-b1cf-f49bba6046dd",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/270837011_The_SHARAQ_spectrometer",
            "uuid": "45faf03c-4122-40a2-b1cf-f49bba6046dd",
            "title": "The SHARAQ spectrometer | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "45faf03c-4122-40a2-b1cf-f49bba6046dd",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "The SHARAQ spectrometer | Request PDF"
        },
        "end_index": 9601,
        "start_index": 9530,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://academic.oup.com/ptep/article/2012/1/03C007/1572797",
        "uuid": "31d786f6-d332-496b-b9ce-54f1f80a01a3",
        "title": "Oxford Academic",
        "sources": [
          {
            "url": "https://academic.oup.com/ptep/article/2012/1/03C007/1572797",
            "uuid": "31d786f6-d332-496b-b9ce-54f1f80a01a3",
            "title": "SHARAQ spectrometer | Progress of Theoretical and Experimental Physics | Oxford Academic",
            "source": "Oxford Academic",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "31d786f6-d332-496b-b9ce-54f1f80a01a3",
          "source": "Oxford Academic",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
          "preview_title": "SHARAQ spectrometer | Progress of Theoretical and Experimental Physics | Oxford Academic"
        },
        "end_index": 9825,
        "start_index": 9668,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900209015459",
        "uuid": "a5161456-cd9d-468e-a348-4747640b7ed5",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900209015459",
            "uuid": "a5161456-cd9d-468e-a348-4747640b7ed5",
            "title": "Ultra-thin gas detector for tracking of low energy electrons - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a5161456-cd9d-468e-a348-4747640b7ed5",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Ultra-thin gas detector for tracking of low energy electrons - ScienceDirect"
        },
        "end_index": 10049,
        "start_index": 9826,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
        "uuid": "00257974-d213-432e-ba00-7efa853816ec",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/238592499_Ion-optical_studies_of_BigRIPS_separator_and_ZeroDegree_spectrometer_at_RIKEN_RI_Beam_Factory",
            "uuid": "00257974-d213-432e-ba00-7efa853816ec",
            "title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "00257974-d213-432e-ba00-7efa853816ec",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "(PDF) Ion-optical studies of BigRIPS separator and ZeroDegree spectrometer at RIKEN RI Beam Factory"
        },
        "end_index": 10817,
        "start_index": 10710,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
        "uuid": "192e725d-c786-4745-aa01-4f00f9607e21",
        "title": "Oxford Academic",
        "sources": [
          {
            "url": "https://academic.oup.com/ptep/article/2025/5/053H01/8120275",
            "uuid": "192e725d-c786-4745-aa01-4f00f9607e21",
            "title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic",
            "source": "Oxford Academic",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "192e725d-c786-4745-aa01-4f00f9607e21",
          "source": "Oxford Academic",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=oup.com",
          "preview_title": "Xenon-Gas Ionization Chamber to Improve the Z Identification of Heavy-Ion Beams with Z > 70 | Progress of Theoretical and Experimental Physics | Oxford Academic"
        },
        "end_index": 11146,
        "start_index": 10897,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2401.08679",
        "uuid": "fd765256-e546-48b9-bacb-abdbc3fcd854",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2401.08679",
            "uuid": "fd765256-e546-48b9-bacb-abdbc3fcd854",
            "title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "fd765256-e546-48b9-bacb-abdbc3fcd854",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Xenon-gas ionization chamber to improve particle identification of heavy ion beams with 𝑍>70"
        },
        "end_index": 11146,
        "start_index": 10897,
        "origin_tool_name": "web_search"
      }
    ],
    "version_uuid": "0551aac8-13d7-470b-8912-819920988bc6"
  },
  "message": null,
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": null,
  "name": "artifacts",
  "content": [
    {
      "type": "text",
      "text": "OK",
      "uuid": "9724125e-f54b-49e4-b920-f41867e9a500"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Your research report on the MUSIC and MWDC detectors at HIRFL-RIBLL is ready. It covers the operating principles, technical specifications, and complementary roles of both detector systems in particle identification at the RIBLL2 separator. The report details how MUSIC's segmented ionization chamber achieves Z resolution of σ~0.19, how MWDC's drift-time tracking delivers ~230 µm spatial resolution, their sandwich configuration for the Bρ-ΔE-TOF method, side-by-side comparisons across all key dimensions, and the experimental program they enable including charge-changing cross sections and mass measurements at HIRFL-CSR.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_use",
  "id": null,
  "name": "artifacts",
  "input": {
    "id": "compass_artifact_wf-52387b92-8c03-40e8-b6e6-e7040d08f475_text/markdown",
    "type": "text/markdown",
    "title": "MUSIC and MWDC Detectors at HIRFL-RIBLL: Principles, Specifications, and Complementary Roles in Isotope Identification",
    "source": "c",
    "command": "create",
    "content": "# MUSIC and MWDC detectors at HIRFL-RIBLL\n\nThe MUSIC (MUlti-Sampling Ionization Chamber) and MWDC (Multi-Wire Drift Chamber) detectors form the backbone of particle identification at the RIBLL2 separator of the HIRFL-CSR complex at IMP Lanzhou. **Together they deliver complete isotope identification** — MUSIC pins down the atomic number Z through energy-loss measurement, while MWDC determines the mass-to-charge ratio A/Z through precision trajectory reconstruction. Combined with time-of-flight from plastic scintillators, the Bρ-ΔE-TOF method at RIBLL2 has achieved **σ_Z ~ 0.19** and **σ_{A/Q} ~ 5.8 × 10⁻³** for fragments from ⁷⁸Kr at 300 MeV/nucleon — performance sufficient to unambiguously identify nuclei across the mass range A ~ 20–80 on an event-by-event basis. This report details how each detector works, its specifications, and how the two complement each other in the RIBLL experimental program.\n\n---\n\n## How MUSIC exploits ionization to measure atomic number\n\nThe MUSIC detector is a gas-filled ionization chamber whose key innovation is a **segmented anode** that provides multiple independent energy-loss samples for every traversing ion. When a heavy ion passes through the gas volume, it ionizes gas molecules along its path. Electrons drift under a uniform electric field toward the anode, while positive ions drift toward the cathode. A **Frisch grid** positioned between the drift region and the anode ensures the induced signal depends only on collected charge — not on where ionization occurred vertically — yielding clean ΔE signals.\n\nThe anode is divided into **8 equal strips** along the beam direction, each roughly 47.5 mm long with 2 mm gaps. As one ion traverses all segments, each strip independently records the energy deposited in that slice of gas. Averaging these 8 samples dramatically reduces Landau fluctuations (energy-loss straggling), improving charge resolution far beyond what a single measurement could achieve.\n\nThe underlying physics is the **Bethe-Bloch formula**: energy loss per unit length scales as dE/dx ∝ Z²/β², where Z is the nuclear charge and β is the velocity. Since β is independently measured via time-of-flight, the MUSIC's ΔE measurement directly yields Z. For fully stripped relativistic ions typical at RIBLL2 energies (~300 MeV/nucleon), Z_eff equals the nuclear charge, making the identification clean. For very heavy ions (Z > 70), charge-state fluctuations in the gas become the dominant resolution-limiting factor — motivating the use of xenon-based gas mixtures at facilities like RIKEN, though the IMP MUSIC uses CF₄.\n\n### MUSIC technical parameters at RIBLL2\n\nThe MUSIC detector built for the HIRFL-CSR External Target Facility and the RIBLL2-F4 platform has the following specifications:\n\n| Parameter | Value |\n|---|---|\n| Total length | 520 mm (448 mm gas volume) |\n| Entrance window diameter | 90 mm |\n| Number of anode segments | 8 |\n| Segment length | ~47.5 mm (with 2 mm gaps) |\n| Cathode-to-anode distance | 100 mm |\n| Frisch grid position | 10 mm above the anode |\n| Electrode material | 2 mm thick PCB, copper-clad on one side |\n| Working gas | CF₄ at atmospheric pressure |\n| Start working voltage | ~−1000 V (from plateau curve) |\n| Energy resolution (single cell) | Better than **2%** (tested with ²³⁹Pu α source) |\n| Z resolution (σ) | **0.19** for ⁷⁵As³³⁺ at 300 MeV/u |\n| Z resolution (FWHM) | **0.4–0.6** for ¹⁸O fragments at 400 MeV/u |\n\n**CF₄ was chosen** specifically for its fast electron drift velocity — approximately twice that of isobutane — enabling the detector to handle the beam rates at RIBLL2. The compact 8-segment design is optimized for relativistic ions where total energy loss in the gas is moderate. The key reference for this detector is S. Lee et al., *Nuclear Instruments and Methods B* 376 (2016) 24–27, which describes the design, construction, and commissioning with both α sources and radioactive beams.\n\n---\n\n## How MWDC uses drift time for sub-millimeter tracking\n\nThe MWDC operates on a fundamentally different principle from MUSIC. Rather than measuring total energy deposited, it measures **where** a particle passes through. Gas ionization still initiates the process — a traversing ion creates electron-ion pairs — but the critical measurement is the **drift time**: the interval between the particle's passage (determined by an external trigger) and the arrival of the electron avalanche signal at the nearest sense wire.\n\nSince drift velocity in the gas is known and approximately constant across the cell, the relation **x = v_drift × t_drift** converts time to distance, giving the perpendicular distance from the sense wire to the particle track. Each MWDC contains **6 sense-wire layers** with approximately 80 wires per layer, oriented in three directions: **X (0°), U (+30°), and V (−30°)** relative to vertical. This three-angle geometry resolves both horizontal and vertical position and eliminates the left-right ambiguity inherent in single-wire measurements.\n\nThe drift cell structure is defined by thin **sense wires** (~20–30 µm gold-plated tungsten) at high voltage, surrounded by thicker **field wires** (~100 µm) and bounded by cathode planes. Each sense wire is flanked by 2 field wires and 10 cathode wires. Near the sense wire, the electric field transitions from uniform (in the drift region) to radial (1/r), triggering a Townsend avalanche with gas gain of **10⁴–10⁵** that produces a detectable signal.\n\n### MWDC technical parameters at RIBLL2\n\nMultiple generations of MWDC have been deployed at HIRFL. The key specifications span the ETF and CEE programs:\n\n| Parameter | ETF MWDC array (2018) | CEE prototype (2024) |\n|---|---|---|\n| Configuration | 3 identical MWDCs | 3-layer forward array |\n| Active area per chamber | 160 × 160 mm² | 760 × 760 mm² (prototype) |\n| Sense wire layers | 6 per MWDC | 6 per MWDC |\n| Wire orientations | X (0°), U (+30°), V (−30°) | X (0°), U (+30°), V (−30°) |\n| Working gas | P10 (Ar:CH₄ 90:10) at 1 atm | Ar/CO₂ (70/30) at 1 atm |\n| Operating HV | ~1500–1720 V | 1500 V |\n| Drift velocity | ~0.73 cm/µs (Ar/CO₂ at 300 V/cm) | Similar |\n| Spatial resolution (tracking residual) | **230 µm** | **301 ± 2 µm** |\n| Layer efficiency | **>95%** | **>95%** |\n| Tracking efficiency | >90% | >90% |\n| Wire positioning accuracy | — | Better than **20 µm** |\n\nThe upgrade from MWPCs (multi-wire proportional chambers, ~2 mm resolution, ~62% tracking efficiency) to MWDCs brought a **factor of ~10 improvement** in spatial resolution — from roughly 1.2 mm down to 230 µm — which was decisive for achieving high-quality Bρ determination and thus A/Z identification. This development is documented in Y.Z. Sun et al., *Nuclear Instruments and Methods A* 894 (2018) 72–80.\n\nFor the CEE spectrometer currently under commissioning, the largest planned MWDC reaches **176 cm × 314 cm** in active area — among the largest drift chambers built for nuclear physics at intermediate energies.\n\n---\n\n## The sandwich arrangement that enables full isotope identification\n\nAt the RIBLL2-F4 experimental platform, MUSIC and MWDC detectors are deployed in a characteristic **sandwich configuration** that reveals their complementary roles. The detector arrangement, described in the 2025 paper on full realization of the RIBLL2 separator (arXiv:2505.00053), is:\n\n**Upstream of the reaction target:**\nSC1 (scintillator, TOF-start at F1) → SC2 (scintillator, TOF-stop) → **MWDC1** → **MUSIC1** → **MWDC2** → secondary target\n\n**Downstream of the reaction target:**\n**MUSIC2** → **MWDC3** → **MWDC4** → SC Wall (scintillator array)\n\nThis symmetric layout serves a specific purpose. The upstream cluster identifies every incoming ion: MUSIC1 measures ΔE to determine Z, while the flanking MWDCs track the ion's trajectory to reconstruct Bρ (and thus A/Z). The downstream cluster does the same for outgoing fragments. By comparing Z before and after the target, **charge-changing cross sections** can be extracted — a measurement that has been a flagship program at RIBLL2.\n\nThe three independent observables combine as follows. **ΔE from MUSIC** directly yields Z through the Bethe-Bloch relation. **TOF from plastic scintillators** over flight paths of tens of meters yields velocity β with resolution as fine as **27 ps (σ)**. **Position from MWDCs** at dispersive focal planes, combined with knowledge of the ion-optical transfer matrix, yields magnetic rigidity Bρ = p/q. Since Bρ = γmβc/(Ze), knowing β and Z allows extraction of mass number A.\n\nThe position-to-Bρ conversion uses the dispersion relation Δp/p = x/D, where x is the measured position offset and D is the dispersion at the focal plane. At F1 of RIBLL2, the momentum dispersion is **1.169 cm/%**, and the first-order momentum resolving power reaches ~1200. The precision achieved by this combined system — **σ_Z ~ 0.19 and σ_{A/Q} ~ 5.8 × 10⁻³** — is sufficient to separate neighboring isotopes across a broad mass range.\n\n---\n\n## Comparing MUSIC and MWDC across every dimension\n\nThe two detectors differ fundamentally in what they measure, how they measure it, and what role they play:\n\n| Dimension | MUSIC | MWDC |\n|---|---|---|\n| **Primary measurement** | Energy loss ΔE | Position (x, y) |\n| **Derived physical quantity** | Atomic number Z | Magnetic rigidity Bρ → mass-to-charge A/Z |\n| **Detection principle** | Total ionization charge collection | Drift time measurement |\n| **Signal source** | Integrated charge on segmented anode | Timing of avalanche signal on sense wire |\n| **Key structure** | Frisch grid + 8 anode segments | 6 wire planes at 0°/±30° |\n| **Gas** | CF₄ (fast drift, high density) | P10 or Ar/CO₂ (stable, well-characterized drift) |\n| **Typical resolution** | σ_Z ~ 0.19 (charge units) | ~230 µm (spatial) |\n| **Rate capability** | ~10⁴ particles/s (pile-up limited) | Higher; less pile-up sensitivity |\n| **Construction complexity** | Relatively simple (PCB electrodes, gas box) | Complex (many wires, precise alignment <20 µm) |\n| **Number of channels** | 8 (one per anode segment) | ~480 per MWDC (80 wires × 6 layers) |\n| **Material budget** | Low (thin entrance/exit windows, gas) | Low (thin windows, gas) |\n| **Answers the question** | \"What element is this?\" | \"What isotope is this?\" (with TOF) |\n\n**MUSIC's advantage** lies in its simplicity and excellent energy resolution. With only 8 readout channels, it provides clean Z identification for elements from lithium to krypton and beyond. Its Frisch-grid design makes the signal insensitive to where in the vertical cross-section the ion passes, and CF₄ gas ensures fast electron collection. The multi-sampling technique is elegant: 8 independent measurements of the same quantity, averaged to beat down fluctuations.\n\n**MWDC's advantage** lies in spatial precision. Sub-millimeter position resolution translates directly into precise momentum and rigidity determination, which is essential for mass identification. The multi-layer, multi-angle wire configuration provides redundancy (any 3 of 6 layers can reconstruct a 2D point) and resolves tracking ambiguities. MWDCs also handle higher rates than MUSIC because each wire has a much shorter dead time than a large-volume ionization chamber.\n\n**MUSIC's limitation** is rate: with drift times of several microseconds across the 100 mm cathode-anode gap, pile-up becomes significant above ~10⁴ particles per second. It also provides no useful position information. **MWDC's limitation** is complexity: hundreds of wires must be positioned to <20 µm accuracy, calibrated with precise space-time relations, and read out through ~1440 channels for a 3-chamber array. High-voltage stability is critical, and the chambers are sensitive to gas purity and flow conditions.\n\n---\n\n## Experiments that put these detectors to work\n\nThe MUSIC-MWDC system at RIBLL2 has enabled a productive experimental program spanning nuclear structure, reaction physics, and astrophysics-relevant measurements.\n\n**Charge-changing cross sections (CCCS)** represent the flagship application. Measurements of **¹¹⁻¹⁵C, ¹³⁻¹⁷N, and ¹⁵,¹⁷⁻¹⁸O** at ~300 MeV/nucleon on carbon targets — the first extension to p-shell isotopes — relied entirely on the MUSIC-MWDC sandwich to identify ions before and after the reaction target (published in *Physics Letters B*, 2023). The **²⁸Si** charge-changing cross section at 300 MeV/nucleon on carbon was similarly measured. These cross sections probe nuclear radii and skin thicknesses, testing nuclear structure models far from stability.\n\nAt **RIBLL1**, operating at lower energies (up to ~80 MeV/u from the SSC cyclotron), direct reaction experiments have used PPACs and silicon detectors alongside ionization chambers for studies of halo nuclei (¹¹Be, ⁸B), cluster structures (the α+¹⁰Be structure of ¹⁴C via ¹H(¹⁴C, ¹⁴C*)p at 23 MeV/u), elastic scattering of proton drip-line nuclei, and β-delayed particle emission from exotic species like ²²Al and ²⁶P.\n\n**Mass measurements** via isochronous mass spectrometry in the CSRe storage ring depend on RIBLL2 for fragment production and identification before injection. The MUSIC-MWDC system tags each injected ion, and the CSRe's ~100-nanosecond revolution-time measurement yields masses with precision sufficient to test nuclear models and inform astrophysical r-process calculations.\n\nThe **MATE active-target TPC** (Multi-purpose Active-target Time projection chamber for nuclear astrophysical and Exotic beam Experiments) has been developed at IMP and tested at RIBLL1 with ¹⁴N beams. Filled with ⁹⁵% ⁴He + 5% CO₂ at 500 mbar and supplemented by a silicon detector array (MATE-PA), it provides three-dimensional tracking of reaction products inside the gas volume — a complementary approach to the discrete-detector arrangement of MUSIC and MWDC.\n\n---\n\n## Conclusion\n\nMUSIC and MWDC are not alternatives — they are **two halves of the same measurement**. MUSIC answers \"what element?\" through the Z² dependence of energy loss; MWDC answers \"what isotope?\" through sub-millimeter trajectory reconstruction that yields magnetic rigidity. Their sandwich arrangement at RIBLL2 — MWDC flanking MUSIC on both sides of a reaction target — exemplifies how nuclear physics experiments combine simple physical principles (gas ionization in both cases) with different engineering implementations to extract orthogonal information from the same beam particles.\n\nThe upgrade path is instructive: replacing MWPCs with MWDCs improved spatial resolution by a factor of 10 (from ~1.2 mm to ~230 µm), which directly translated into sharper A/Z separation. Meanwhile, the MUSIC's 8-segment design with CF₄ gas delivers Z resolution that cleanly separates neighboring elements up to at least Z ~ 36. As the CEE spectrometer comes online with MWDCs as large as **1.76 m × 3.14 m** and the facility pushes toward heavier and more exotic beams, these detector technologies — conceptually simple but engineered for precision — will remain central to the physics program at HIRFL-CSR.\n\nKey references for the interested reader include S. Lee et al. on the MUSIC design (*NIM B* 376, 2016), Y.Z. Sun et al. on the MWDC array (*NIM A* 894, 2018), Fang et al. on improved PID at RIBLL2 (arXiv:2106.04760), the 2025 paper on full RIBLL2 realization (arXiv:2505.00053), and Z.Y. Sun et al. on the original RIBLL1 design (*NIM A* 503, 2003).",
    "language": null,
    "md_citations": [
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "f02dfda8-463a-4b4e-8ad5-7d8e4221467f",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "f02dfda8-463a-4b4e-8ad5-7d8e4221467f",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "f02dfda8-463a-4b4e-8ad5-7d8e4221467f",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 557,
        "start_index": 470,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/abs/2106.04760",
        "uuid": "4c4cb775-4656-4494-98f2-a3161a450105",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/abs/2106.04760",
            "uuid": "4c4cb775-4656-4494-98f2-a3161a450105",
            "title": "[2106.04760] Improving the particle identification of radioactive isotope beams at the RIBLL2 separator",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "4c4cb775-4656-4494-98f2-a3161a450105",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "[2106.04760] Improving the particle identification of radioactive isotope beams at the RIBLL2 separator"
        },
        "end_index": 657,
        "start_index": 571,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
        "uuid": "79b19412-58b8-4bf2-a76c-ff2e6a41b51e",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
            "uuid": "79b19412-58b8-4bf2-a76c-ff2e6a41b51e",
            "title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "79b19412-58b8-4bf2-a76c-ff2e6a41b51e",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect"
        },
        "end_index": 1032,
        "start_index": 979,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ionization_chamber",
        "uuid": "58083827-7348-4997-87fe-bef93ddb295c",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Ionization_chamber",
            "uuid": "58083827-7348-4997-87fe-bef93ddb295c",
            "title": "Ionization chamber - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "58083827-7348-4997-87fe-bef93ddb295c",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Ionization chamber - Wikipedia"
        },
        "end_index": 1248,
        "start_index": 1160,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.britannica.com/technology/ionization-chamber",
        "uuid": "ea776113-dc27-4b3a-8d91-0048d774eb7f",
        "title": "Britannica",
        "sources": [
          {
            "url": "https://www.britannica.com/technology/ionization-chamber",
            "uuid": "ea776113-dc27-4b3a-8d91-0048d774eb7f",
            "title": "Ionization chamber | Radiation Detection, Nuclear Physics & Measurement | Britannica",
            "source": "Britannica",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=britannica.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "ea776113-dc27-4b3a-8d91-0048d774eb7f",
          "source": "Britannica",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=britannica.com",
          "preview_title": "Ionization chamber | Radiation Detection, Nuclear Physics & Measurement | Britannica"
        },
        "end_index": 1248,
        "start_index": 1160,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK597384/",
        "uuid": "92bf8ce6-8456-467d-b79e-c381c54c8220",
        "title": "NCBI",
        "sources": [
          {
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK597384/",
            "uuid": "92bf8ce6-8456-467d-b79e-c381c54c8220",
            "title": "Nuclear Medicine Instrumentation - StatPearls - NCBI Bookshelf",
            "source": "NCBI",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "92bf8ce6-8456-467d-b79e-c381c54c8220",
          "source": "NCBI",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
          "preview_title": "Nuclear Medicine Instrumentation - StatPearls - NCBI Bookshelf"
        },
        "end_index": 1359,
        "start_index": 1160,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/gas-chamber",
        "uuid": "0908b3eb-e887-443e-843a-1dea1f39370e",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/gas-chamber",
            "uuid": "0908b3eb-e887-443e-843a-1dea1f39370e",
            "title": "Gas Chamber - an overview | ScienceDirect Topics",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0908b3eb-e887-443e-843a-1dea1f39370e",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Gas Chamber - an overview | ScienceDirect Topics"
        },
        "end_index": 1359,
        "start_index": 1249,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/topics/physics-and-astronomy/ionization-chamber",
        "uuid": "a95ca1e3-3507-47b5-b92c-0cf48cf698bd",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/topics/physics-and-astronomy/ionization-chamber",
            "uuid": "a95ca1e3-3507-47b5-b92c-0cf48cf698bd",
            "title": "Ionization Chamber - an overview | ScienceDirect Topics",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a95ca1e3-3507-47b5-b92c-0cf48cf698bd",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Ionization Chamber - an overview | ScienceDirect Topics"
        },
        "end_index": 1562,
        "start_index": 1360,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "4423c3a1-fbc6-4305-8449-48e32de2c38c",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "4423c3a1-fbc6-4305-8449-48e32de2c38c",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "4423c3a1-fbc6-4305-8449-48e32de2c38c",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 1676,
        "start_index": 1564,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
        "uuid": "ce416723-a50e-4170-9949-2c2dd5606667",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
            "uuid": "ce416723-a50e-4170-9949-2c2dd5606667",
            "title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "ce416723-a50e-4170-9949-2c2dd5606667",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect"
        },
        "end_index": 1676,
        "start_index": 1564,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bethe_formula",
        "uuid": "43a4fbd7-806f-472d-b6f8-f1288dd05b22",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Bethe_formula",
            "uuid": "43a4fbd7-806f-472d-b6f8-f1288dd05b22",
            "title": "Bethe formula - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "43a4fbd7-806f-472d-b6f8-f1288dd05b22",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Bethe formula - Wikipedia"
        },
        "end_index": 2122,
        "start_index": 2017,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168583X23003051",
        "uuid": "a5101234-a4fc-4fcd-a00e-61af1c15fbb5",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168583X23003051",
            "uuid": "a5101234-a4fc-4fcd-a00e-61af1c15fbb5",
            "title": "Neural network-based nuclear charge Z identification from ionization chamber waveforms of low-energy heavy ions - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a5101234-a4fc-4fcd-a00e-61af1c15fbb5",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Neural network-based nuclear charge Z identification from ionization chamber waveforms of low-energy heavy ions - ScienceDirect"
        },
        "end_index": 2122,
        "start_index": 2017,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/pdf/2401.08679",
        "uuid": "5bbf1f1d-468b-4bda-9206-c217dbd74b2e",
        "title": "arxiv",
        "sources": [
          {
            "url": "https://arxiv.org/pdf/2401.08679",
            "uuid": "5bbf1f1d-468b-4bda-9206-c217dbd74b2e",
            "title": "Xenon-gas ionization chamber to improve particle identification of heavy   ion beams with Z>70",
            "source": "arxiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "5bbf1f1d-468b-4bda-9206-c217dbd74b2e",
          "source": "arxiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Xenon-gas ionization chamber to improve particle identification of heavy   ion beams with Z>70"
        },
        "end_index": 2561,
        "start_index": 2373,
        "origin_tool_name": "web_fetch"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900214002915",
        "uuid": "e98abb95-42e2-43ab-b3ec-920a3644c1d7",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900214002915",
            "uuid": "e98abb95-42e2-43ab-b3ec-920a3644c1d7",
            "title": "Construction of a fast ionization chamber for high-rate particle identification - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "e98abb95-42e2-43ab-b3ec-920a3644c1d7",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Construction of a fast ionization chamber for high-rate particle identification - ScienceDirect"
        },
        "end_index": 3539,
        "start_index": 3502,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "5eecd76e-f831-4763-92f1-843e97836bdc",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "5eecd76e-f831-4763-92f1-843e97836bdc",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "5eecd76e-f831-4763-92f1-843e97836bdc",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 3711,
        "start_index": 3431,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wire_chamber",
        "uuid": "299ee668-2780-468e-af4b-a82a176ea6a1",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Wire_chamber",
            "uuid": "299ee668-2780-468e-af4b-a82a176ea6a1",
            "title": "Wire chamber - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "299ee668-2780-468e-af4b-a82a176ea6a1",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Wire chamber - Wikipedia"
        },
        "end_index": 4448,
        "start_index": 4150,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://pe2bz.philpem.me.uk/Comm01/-%20-%20Ion-Photon-RF/-%20-%20Scintillation/Site-004/node50.html",
        "uuid": "47c4c8de-1456-4b1d-a31c-22d6b678d831",
        "title": "Philpem",
        "sources": [
          {
            "url": "https://pe2bz.philpem.me.uk/Comm01/-%20-%20Ion-Photon-RF/-%20-%20Scintillation/Site-004/node50.html",
            "uuid": "47c4c8de-1456-4b1d-a31c-22d6b678d831",
            "title": "Drift Chamber",
            "source": "Philpem",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=philpem.me.uk",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "47c4c8de-1456-4b1d-a31c-22d6b678d831",
          "source": "Philpem",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=philpem.me.uk",
          "preview_title": "Drift Chamber"
        },
        "end_index": 4677,
        "start_index": 4450,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "d2be4153-a81f-4c3d-8b33-52c3ae30a7ab",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "d2be4153-a81f-4c3d-8b33-52c3ae30a7ab",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "d2be4153-a81f-4c3d-8b33-52c3ae30a7ab",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 4759,
        "start_index": 4678,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/abs/2406.12878",
        "uuid": "de97f30c-8361-4754-a485-9b36d69c8de5",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/abs/2406.12878",
            "uuid": "de97f30c-8361-4754-a485-9b36d69c8de5",
            "title": "[2406.12878] Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "de97f30c-8361-4754-a485-9b36d69c8de5",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "[2406.12878] Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment"
        },
        "end_index": 4846,
        "start_index": 4790,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2406.12878",
        "uuid": "15b29776-fd40-4cd8-bc6b-2ac40ab9b324",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2406.12878",
            "uuid": "15b29776-fd40-4cd8-bc6b-2ac40ab9b324",
            "title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "15b29776-fd40-4cd8-bc6b-2ac40ab9b324",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Beam test results of the prototype of the multi wire drift chamber for the CSR external-target experiment"
        },
        "end_index": 4846,
        "start_index": 4790,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.science.gov/topicpages/w/wire+drift+chamber.html",
        "uuid": "2e8b6053-57f9-47df-af2a-afe9f0ae6f55",
        "title": "Science.gov",
        "sources": [
          {
            "url": "https://www.science.gov/topicpages/w/wire+drift+chamber.html",
            "uuid": "2e8b6053-57f9-47df-af2a-afe9f0ae6f55",
            "title": "wire drift chamber: Topics by Science.gov",
            "source": "Science.gov",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=science.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2e8b6053-57f9-47df-af2a-afe9f0ae6f55",
          "source": "Science.gov",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=science.gov",
          "preview_title": "wire drift chamber: Topics by Science.gov"
        },
        "end_index": 4997,
        "start_index": 4847,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "35bb78a5-b7fe-4df3-9a40-3a2190711bd2",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "35bb78a5-b7fe-4df3-9a40-3a2190711bd2",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "35bb78a5-b7fe-4df3-9a40-3a2190711bd2",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 5253,
        "start_index": 4999,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/gas-chamber",
        "uuid": "b0d233f9-9a06-4782-89db-ebd4cbfb6956",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/gas-chamber",
            "uuid": "b0d233f9-9a06-4782-89db-ebd4cbfb6956",
            "title": "Gas Chamber - an overview | ScienceDirect Topics",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "b0d233f9-9a06-4782-89db-ebd4cbfb6956",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Gas Chamber - an overview | ScienceDirect Topics"
        },
        "end_index": 5389,
        "start_index": 5254,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.britannica.com/technology/ionization-chamber",
        "uuid": "faf66f56-e6cd-4fb7-b7e1-e65738fb6b68",
        "title": "Britannica",
        "sources": [
          {
            "url": "https://www.britannica.com/technology/ionization-chamber",
            "uuid": "faf66f56-e6cd-4fb7-b7e1-e65738fb6b68",
            "title": "Ionization chamber | Radiation Detection, Nuclear Physics & Measurement | Britannica",
            "source": "Britannica",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=britannica.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "faf66f56-e6cd-4fb7-b7e1-e65738fb6b68",
          "source": "Britannica",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=britannica.com",
          "preview_title": "Ionization chamber | Radiation Detection, Nuclear Physics & Measurement | Britannica"
        },
        "end_index": 5453,
        "start_index": 5254,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.science.gov/topicpages/d/drift+chamber+studies.html",
        "uuid": "8aa0a80f-be23-4586-be32-457fad461151",
        "title": "Science.gov",
        "sources": [
          {
            "url": "https://www.science.gov/topicpages/d/drift+chamber+studies.html",
            "uuid": "8aa0a80f-be23-4586-be32-457fad461151",
            "title": "drift chamber studies: Topics by Science.gov",
            "source": "Science.gov",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=science.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "8aa0a80f-be23-4586-be32-457fad461151",
          "source": "Science.gov",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=science.gov",
          "preview_title": "drift chamber studies: Topics by Science.gov"
        },
        "end_index": 6411,
        "start_index": 6336,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "b1dc90a5-5ebc-48b8-ad31-a45d458bbe93",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "b1dc90a5-5ebc-48b8-ad31-a45d458bbe93",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "b1dc90a5-5ebc-48b8-ad31-a45d458bbe93",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 6508,
        "start_index": 6336,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "168b2257-fbab-4d90-9145-d6d671450c7f",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "168b2257-fbab-4d90-9145-d6d671450c7f",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "168b2257-fbab-4d90-9145-d6d671450c7f",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 6545,
        "start_index": 6336,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.science.gov/topicpages/c/calibration+chamber+test",
        "uuid": "2edafffd-4b0c-4c39-bae2-5902b0c201d8",
        "title": "Science.gov",
        "sources": [
          {
            "url": "https://www.science.gov/topicpages/c/calibration+chamber+test",
            "uuid": "2edafffd-4b0c-4c39-bae2-5902b0c201d8",
            "title": "calibration chamber test: Topics by Science.gov",
            "source": "Science.gov",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=science.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2edafffd-4b0c-4c39-bae2-5902b0c201d8",
          "source": "Science.gov",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=science.gov",
          "preview_title": "calibration chamber test: Topics by Science.gov"
        },
        "end_index": 6744,
        "start_index": 6640,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://link.springer.com/article/10.1007/s41365-024-01515-0",
        "uuid": "0d4c099b-a08a-4d11-947a-c84133815b8f",
        "title": "Springer",
        "sources": [
          {
            "url": "https://link.springer.com/article/10.1007/s41365-024-01515-0",
            "uuid": "0d4c099b-a08a-4d11-947a-c84133815b8f",
            "title": "Development of a MWDC prototype of the CSR external-target experiment | Nuclear Science and Techniques",
            "source": "Springer",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0d4c099b-a08a-4d11-947a-c84133815b8f",
          "source": "Springer",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
          "preview_title": "Development of a MWDC prototype of the CSR external-target experiment | Nuclear Science and Techniques"
        },
        "end_index": 6869,
        "start_index": 6746,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://link.springer.com/article/10.1007/s41365-019-0716-x",
        "uuid": "0bbab737-d746-4722-9ef3-ec695234d1ac",
        "title": "Springer",
        "sources": [
          {
            "url": "https://link.springer.com/article/10.1007/s41365-019-0716-x",
            "uuid": "0bbab737-d746-4722-9ef3-ec695234d1ac",
            "title": "Simulation and prototype testing of multi-wire drift chamber arrays for the CEE | Nuclear Science and Techniques | Springer Nature Link",
            "source": "Springer",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0bbab737-d746-4722-9ef3-ec695234d1ac",
          "source": "Springer",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
          "preview_title": "Simulation and prototype testing of multi-wire drift chamber arrays for the CEE | Nuclear Science and Techniques | Springer Nature Link"
        },
        "end_index": 6869,
        "start_index": 6746,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2505.00053",
        "uuid": "a498aa69-b3cc-4572-8ace-73cc379b0431",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2505.00053",
            "uuid": "a498aa69-b3cc-4572-8ace-73cc379b0431",
            "title": "Full realization of the RIBLL2 separator at the HIRFL-CSR facility",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a498aa69-b3cc-4572-8ace-73cc379b0431",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Full realization of the RIBLL2 separator at the HIRFL-CSR facility"
        },
        "end_index": 7197,
        "start_index": 7033,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "2f47fee3-eb17-426a-af51-759cc8e57cf3",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "2f47fee3-eb17-426a-af51-759cc8e57cf3",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2f47fee3-eb17-426a-af51-759cc8e57cf3",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 7966,
        "start_index": 7871,
        "origin_tool_name": "web_search"
      },
      {
        "url": "http://zgwlc.xml-journal.net/article/doi/10.1088/1674-1137/41/6/066001",
        "uuid": "d06a810b-42f4-445f-b930-aa4f96d6064c",
        "title": "Xml-journal",
        "sources": [
          {
            "url": "http://zgwlc.xml-journal.net/article/doi/10.1088/1674-1137/41/6/066001",
            "uuid": "d06a810b-42f4-445f-b930-aa4f96d6064c",
            "title": "Plastic scintillation detectors for precision Time-of-Flight measurements of relativistic heavy ions",
            "source": "Xml-journal",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=xml-journal.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "d06a810b-42f4-445f-b930-aa4f96d6064c",
          "source": "Xml-journal",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=xml-journal.net",
          "preview_title": "Plastic scintillation detectors for precision Time-of-Flight measurements of relativistic heavy ions"
        },
        "end_index": 8282,
        "start_index": 8152,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/308744178_Plastic_scintillation_detectors_for_precision_Time-of-Flight_measurements_of_relativistic_heavy_ions",
        "uuid": "badae948-7d71-4c7e-b47f-aceccaeb8f09",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/308744178_Plastic_scintillation_detectors_for_precision_Time-of-Flight_measurements_of_relativistic_heavy_ions",
            "uuid": "badae948-7d71-4c7e-b47f-aceccaeb8f09",
            "title": "(PDF) Plastic scintillation detectors for precision Time-of-Flight measurements of relativistic heavy ions",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "badae948-7d71-4c7e-b47f-aceccaeb8f09",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "(PDF) Plastic scintillation detectors for precision Time-of-Flight measurements of relativistic heavy ions"
        },
        "end_index": 8282,
        "start_index": 8152,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rigidity_(electromagnetism)",
        "uuid": "b4568882-7680-4f4a-b427-b35b091daaed",
        "title": "Wikipedia",
        "sources": [
          {
            "url": "https://en.wikipedia.org/wiki/Rigidity_(electromagnetism)",
            "uuid": "b4568882-7680-4f4a-b427-b35b091daaed",
            "title": "Rigidity (electromagnetism) - Wikipedia",
            "source": "Wikipedia",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "b4568882-7680-4f4a-b427-b35b091daaed",
          "source": "Wikipedia",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
          "preview_title": "Rigidity (electromagnetism) - Wikipedia"
        },
        "end_index": 8503,
        "start_index": 8430,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/html/2505.00053",
        "uuid": "795d2825-0486-46b8-ad7b-a73f4e176d27",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/html/2505.00053",
            "uuid": "795d2825-0486-46b8-ad7b-a73f4e176d27",
            "title": "Full realization of the RIBLL2 separator at the HIRFL-CSR facility",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "795d2825-0486-46b8-ad7b-a73f4e176d27",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "Full realization of the RIBLL2 separator at the HIRFL-CSR facility"
        },
        "end_index": 8779,
        "start_index": 8505,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/339705004_Ion-optical_design_of_High_energy_FRagment_Separator_HFRS_at_HIAF",
        "uuid": "d8a19815-7ede-4a95-850d-9c11971981c5",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/339705004_Ion-optical_design_of_High_energy_FRagment_Separator_HFRS_at_HIAF",
            "uuid": "d8a19815-7ede-4a95-850d-9c11971981c5",
            "title": "Ion-optical design of High energy FRagment Separator (HFRS) at HIAF | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "d8a19815-7ede-4a95-850d-9c11971981c5",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "Ion-optical design of High energy FRagment Separator (HFRS) at HIAF | Request PDF"
        },
        "end_index": 8868,
        "start_index": 8829,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://arxiv.org/abs/2106.04760",
        "uuid": "0d174b60-1ae7-4171-b356-00849a2860d3",
        "title": "arXiv",
        "sources": [
          {
            "url": "https://arxiv.org/abs/2106.04760",
            "uuid": "0d174b60-1ae7-4171-b356-00849a2860d3",
            "title": "[2106.04760] Improving the particle identification of radioactive isotope beams at the RIBLL2 separator",
            "source": "arXiv",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0d174b60-1ae7-4171-b356-00849a2860d3",
          "source": "arXiv",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
          "preview_title": "[2106.04760] Improving the particle identification of radioactive isotope beams at the RIBLL2 separator"
        },
        "end_index": 8868,
        "start_index": 8780,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900287912137",
        "uuid": "8e28a304-c93e-4e79-acba-0ea6345af23e",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/0168900287912137",
            "uuid": "8e28a304-c93e-4e79-acba-0ea6345af23e",
            "title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "8e28a304-c93e-4e79-acba-0ea6345af23e",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect"
        },
        "end_index": 10729,
        "start_index": 10604,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://pe2bz.philpem.me.uk/Comm01/-%20-%20Ion-Photon-RF/-%20-%20Scintillation/Site-004/node50.html",
        "uuid": "8c32808a-4ea7-4d59-acd4-5d7b3228a9cf",
        "title": "Philpem",
        "sources": [
          {
            "url": "https://pe2bz.philpem.me.uk/Comm01/-%20-%20Ion-Photon-RF/-%20-%20Scintillation/Site-004/node50.html",
            "uuid": "8c32808a-4ea7-4d59-acd4-5d7b3228a9cf",
            "title": "Drift Chamber",
            "source": "Philpem",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=philpem.me.uk",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "8c32808a-4ea7-4d59-acd4-5d7b3228a9cf",
          "source": "Philpem",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=philpem.me.uk",
          "preview_title": "Drift Chamber"
        },
        "end_index": 11206,
        "start_index": 11078,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
        "uuid": "42d3f2f1-80a8-41b5-a5d0-7c9f13b29cc9",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900215008591",
            "uuid": "42d3f2f1-80a8-41b5-a5d0-7c9f13b29cc9",
            "title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "42d3f2f1-80a8-41b5-a5d0-7c9f13b29cc9",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Multi-Sampling Ionization Chamber (MUSIC) for measurements of fusion reactions with radioactive beams - ScienceDirect"
        },
        "end_index": 11378,
        "start_index": 11208,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.osti.gov/servlets/purl/1237907",
        "uuid": "1e084821-e18f-4075-9f0e-78ce585cb2ae",
        "title": "OSTI",
        "sources": [
          {
            "url": "https://www.osti.gov/servlets/purl/1237907",
            "uuid": "1e084821-e18f-4075-9f0e-78ce585cb2ae",
            "title": "1 A Multi-Sampling Ionization Chamber (MUSIC) for Measurements 1",
            "source": "OSTI",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "1e084821-e18f-4075-9f0e-78ce585cb2ae",
          "source": "OSTI",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
          "preview_title": "1 A Multi-Sampling Ionization Chamber (MUSIC) for Measurements 1"
        },
        "end_index": 11378,
        "start_index": 11208,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.osti.gov/servlets/purl/1237907",
        "uuid": "2fcd3483-68b6-44a2-856e-8a8c29415e17",
        "title": "osti",
        "sources": [
          {
            "url": "https://www.osti.gov/servlets/purl/1237907",
            "uuid": "2fcd3483-68b6-44a2-856e-8a8c29415e17",
            "title": "",
            "source": "osti",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2fcd3483-68b6-44a2-856e-8a8c29415e17",
          "source": "osti",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=osti.gov",
          "preview_title": ""
        },
        "end_index": 11378,
        "start_index": 11208,
        "origin_tool_name": "web_fetch"
      },
      {
        "url": "https://link.springer.com/article/10.1007/s41365-024-01515-0",
        "uuid": "47515e64-6e21-4758-bad4-b03b36a43c85",
        "title": "Springer",
        "sources": [
          {
            "url": "https://link.springer.com/article/10.1007/s41365-024-01515-0",
            "uuid": "47515e64-6e21-4758-bad4-b03b36a43c85",
            "title": "Development of a MWDC prototype of the CSR external-target experiment | Nuclear Science and Techniques",
            "source": "Springer",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "47515e64-6e21-4758-bad4-b03b36a43c85",
          "source": "Springer",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
          "preview_title": "Development of a MWDC prototype of the CSR external-target experiment | Nuclear Science and Techniques"
        },
        "end_index": 11521,
        "start_index": 11428,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "5f714671-7dc4-41b1-abc1-5a65ca3b80b8",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "5f714671-7dc4-41b1-abc1-5a65ca3b80b8",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "5f714671-7dc4-41b1-abc1-5a65ca3b80b8",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 11626,
        "start_index": 11428,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.phy.bnl.gov/e949/detector/e787nim_final/node7.html",
        "uuid": "6f95dc3b-9729-48b3-8431-e18a3fd3e356",
        "title": "Bnl",
        "sources": [
          {
            "url": "https://www.phy.bnl.gov/e949/detector/e787nim_final/node7.html",
            "uuid": "6f95dc3b-9729-48b3-8431-e18a3fd3e356",
            "title": "Drift Chamber",
            "source": "Bnl",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=bnl.gov",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "6f95dc3b-9729-48b3-8431-e18a3fd3e356",
          "source": "Bnl",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=bnl.gov",
          "preview_title": "Drift Chamber"
        },
        "end_index": 11728,
        "start_index": 11627,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S2095927317306242",
        "uuid": "7b5281aa-d22e-4dc2-b7c3-c55391be7025",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S2095927317306242",
            "uuid": "7b5281aa-d22e-4dc2-b7c3-c55391be7025",
            "title": "Towards the full realization of the RIBLL2 beam line at the HIRFL-CSR complex - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "7b5281aa-d22e-4dc2-b7c3-c55391be7025",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Towards the full realization of the RIBLL2 beam line at the HIRFL-CSR complex - ScienceDirect"
        },
        "end_index": 12156,
        "start_index": 12027,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "0cd11fc7-d141-45ec-b6c8-fc9fa16b0acc",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "0cd11fc7-d141-45ec-b6c8-fc9fa16b0acc",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "0cd11fc7-d141-45ec-b6c8-fc9fa16b0acc",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 12156,
        "start_index": 12027,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
        "uuid": "a2861b4f-88ee-4423-bbd0-2dba98c513c0",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S016890021500772X",
            "uuid": "a2861b4f-88ee-4423-bbd0-2dba98c513c0",
            "title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a2861b4f-88ee-4423-bbd0-2dba98c513c0",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber for the External Target Facility - ScienceDirect"
        },
        "end_index": 12297,
        "start_index": 12027,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S2095927317306242",
        "uuid": "cca71b00-f8ef-4adb-adfb-fac25ee4fda7",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S2095927317306242",
            "uuid": "cca71b00-f8ef-4adb-adfb-fac25ee4fda7",
            "title": "Towards the full realization of the RIBLL2 beam line at the HIRFL-CSR complex - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "cca71b00-f8ef-4adb-adfb-fac25ee4fda7",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Towards the full realization of the RIBLL2 beam line at the HIRFL-CSR complex - ScienceDirect"
        },
        "end_index": 12297,
        "start_index": 12027,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/238906000_Progress_in_HIRFL-CSR",
        "uuid": "1cba1335-2466-4594-a404-4c28553b1c9d",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/238906000_Progress_in_HIRFL-CSR",
            "uuid": "1cba1335-2466-4594-a404-4c28553b1c9d",
            "title": "Progress in HIRFL-CSR | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "1cba1335-2466-4594-a404-4c28553b1c9d",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "Progress in HIRFL-CSR | Request PDF"
        },
        "end_index": 12393,
        "start_index": 12298,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
        "uuid": "9217b2e0-62c9-452c-b7a1-ffa960e4e32b",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
            "uuid": "9217b2e0-62c9-452c-b7a1-ffa960e4e32b",
            "title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "9217b2e0-62c9-452c-b7a1-ffa960e4e32b",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF"
        },
        "end_index": 12718,
        "start_index": 12511,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://lssf01.cas.cn/en/facilities-view.jsp?id=ff8080814ff56599014ff5a45000004d",
        "uuid": "f27d0581-a076-4835-a082-0303b6fae1f8",
        "title": "Cas",
        "sources": [
          {
            "url": "https://lssf01.cas.cn/en/facilities-view.jsp?id=ff8080814ff56599014ff5a45000004d",
            "uuid": "f27d0581-a076-4835-a082-0303b6fae1f8",
            "title": "Heavy Ion Research Facility in Lanzhou (HIRFL)",
            "source": "Cas",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=cas.cn",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "f27d0581-a076-4835-a082-0303b6fae1f8",
          "source": "Cas",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=cas.cn",
          "preview_title": "Heavy Ion Research Facility in Lanzhou (HIRFL)"
        },
        "end_index": 12749,
        "start_index": 12511,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
        "uuid": "2b0839c2-5cd8-455d-bf2d-109e5e8a2cd8",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
            "uuid": "2b0839c2-5cd8-455d-bf2d-109e5e8a2cd8",
            "title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2b0839c2-5cd8-455d-bf2d-109e5e8a2cd8",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF"
        },
        "end_index": 12811,
        "start_index": 12751,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
        "uuid": "48ed9fb5-9eff-4bdc-838e-a086b81254a1",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
            "uuid": "48ed9fb5-9eff-4bdc-838e-a086b81254a1",
            "title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "48ed9fb5-9eff-4bdc-838e-a086b81254a1",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF"
        },
        "end_index": 12858,
        "start_index": 12812,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
        "uuid": "2957c37b-2cf9-4980-9f7a-6f8a1d81f46a",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
            "uuid": "2957c37b-2cf9-4980-9f7a-6f8a1d81f46a",
            "title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "2957c37b-2cf9-4980-9f7a-6f8a1d81f46a",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF"
        },
        "end_index": 12920,
        "start_index": 12863,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
        "uuid": "dd692ea5-22c3-493d-95be-480d9c04c8d4",
        "title": "ResearchGate",
        "sources": [
          {
            "url": "https://www.researchgate.net/publication/232386751_RIBLL_the_radioactive_ion_beam_line_in_Lanzhou",
            "uuid": "dd692ea5-22c3-493d-95be-480d9c04c8d4",
            "title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF",
            "source": "ResearchGate",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "dd692ea5-22c3-493d-95be-480d9c04c8d4",
          "source": "ResearchGate",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
          "preview_title": "RIBLL, the radioactive ion beam line in Lanzhou | Request PDF"
        },
        "end_index": 12929,
        "start_index": 12859,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://link.springer.com/article/10.1007/s41365-024-01500-7",
        "uuid": "6350d4cd-1ec3-4a72-a0ed-9827cae629aa",
        "title": "Springer",
        "sources": [
          {
            "url": "https://link.springer.com/article/10.1007/s41365-024-01500-7",
            "uuid": "6350d4cd-1ec3-4a72-a0ed-9827cae629aa",
            "title": "Construction and performance test of charged particle detector array for MATE | Nuclear Science and Techniques | Springer Nature Link",
            "source": "Springer",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "6350d4cd-1ec3-4a72-a0ed-9827cae629aa",
          "source": "Springer",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
          "preview_title": "Construction and performance test of charged particle detector array for MATE | Nuclear Science and Techniques | Springer Nature Link"
        },
        "end_index": 13688,
        "start_index": 13308,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://sciencedirect.com/science/article/pii/0168900287912137",
        "uuid": "8270f353-2537-473f-bf6d-f46c927c571f",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://sciencedirect.com/science/article/pii/0168900287912137",
            "uuid": "8270f353-2537-473f-bf6d-f46c927c571f",
            "title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "8270f353-2537-473f-bf6d-f46c927c571f",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "A multiple sampling ionization chamber (MUSIC) for measuring the charge of relativistic heavy ions - ScienceDirect"
        },
        "end_index": 13951,
        "start_index": 13880,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://link.springer.com/article/10.1007/s41365-019-0716-x?error=cookies_not_supported&code=4226f431-2cd4-4a2a-a2c5-7f184a0b9d0c",
        "uuid": "3b9a0f93-793e-4dd1-9c07-ae1f7671dcdf",
        "title": "Springer",
        "sources": [
          {
            "url": "https://link.springer.com/article/10.1007/s41365-019-0716-x?error=cookies_not_supported&code=4226f431-2cd4-4a2a-a2c5-7f184a0b9d0c",
            "uuid": "3b9a0f93-793e-4dd1-9c07-ae1f7671dcdf",
            "title": "Simulation and prototype testing of multi-wire drift chamber arrays for the CEE - Nuclear Science and Techniques",
            "source": "Springer",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "3b9a0f93-793e-4dd1-9c07-ae1f7671dcdf",
          "source": "Springer",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
          "preview_title": "Simulation and prototype testing of multi-wire drift chamber arrays for the CEE - Nuclear Science and Techniques"
        },
        "end_index": 14480,
        "start_index": 14375,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "73f96ad7-3fa3-4ebd-b873-5da398db29d4",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "73f96ad7-3fa3-4ebd-b873-5da398db29d4",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "73f96ad7-3fa3-4ebd-b873-5da398db29d4",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 14507,
        "start_index": 14375,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
        "uuid": "18f1f13b-6dd4-4949-9168-2e91d0ded8a1",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900218303930",
            "uuid": "18f1f13b-6dd4-4949-9168-2e91d0ded8a1",
            "title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "18f1f13b-6dd4-4949-9168-2e91d0ded8a1",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "The drift chamber array at the external target facility in HIRFL-CSR - ScienceDirect"
        },
        "end_index": 14562,
        "start_index": 14375,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://proceedings.jacow.org/hiat2018/papers/mozba01.pdf",
        "uuid": "9ccee77a-65d5-4d53-9306-269f4d3df5ee",
        "title": "Jacow",
        "sources": [
          {
            "url": "https://proceedings.jacow.org/hiat2018/papers/mozba01.pdf",
            "uuid": "9ccee77a-65d5-4d53-9306-269f4d3df5ee",
            "title": "PRESENT STATUS OF HIRFL COMPLEX IN LANZHOU*",
            "source": "Jacow",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=jacow.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "9ccee77a-65d5-4d53-9306-269f4d3df5ee",
          "source": "Jacow",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=jacow.org",
          "preview_title": "PRESENT STATUS OF HIRFL COMPLEX IN LANZHOU*"
        },
        "end_index": 14704,
        "start_index": 14563,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
        "uuid": "77a6e438-3e0e-4634-8110-11b6f6ac8213",
        "title": "ScienceDirect",
        "sources": [
          {
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0168900297005779",
            "uuid": "77a6e438-3e0e-4634-8110-11b6f6ac8213",
            "title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect",
            "source": "ScienceDirect",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "77a6e438-3e0e-4634-8110-11b6f6ac8213",
          "source": "ScienceDirect",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
          "preview_title": "Position sensitive detectors in heavy ion physics (at GSI) - ScienceDirect"
        },
        "end_index": 14704,
        "start_index": 14563,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://link.springer.com/article/10.1007/s41365-024-01515-0",
        "uuid": "b924c860-575c-41f4-8a0b-ac67c120e561",
        "title": "Springer",
        "sources": [
          {
            "url": "https://link.springer.com/article/10.1007/s41365-024-01515-0",
            "uuid": "b924c860-575c-41f4-8a0b-ac67c120e561",
            "title": "Development of a MWDC prototype of the CSR external-target experiment | Nuclear Science and Techniques",
            "source": "Springer",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "b924c860-575c-41f4-8a0b-ac67c120e561",
          "source": "Springer",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
          "preview_title": "Development of a MWDC prototype of the CSR external-target experiment | Nuclear Science and Techniques"
        },
        "end_index": 14784,
        "start_index": 14705,
        "origin_tool_name": "web_search"
      },
      {
        "url": "https://inis.iaea.org/records/669ve-fmh87",
        "uuid": "a445c882-d516-4eb3-90d9-0376f5f8dbbc",
        "title": "IAEA",
        "sources": [
          {
            "url": "https://inis.iaea.org/records/669ve-fmh87",
            "uuid": "a445c882-d516-4eb3-90d9-0376f5f8dbbc",
            "title": "RIBLL, the radioactive ion beam line in Lanzhou",
            "source": "IAEA",
            "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=iaea.org",
            "subtitles": null,
            "content_body": null,
            "resource_type": null
          }
        ],
        "metadata": {
          "type": "generic_metadata",
          "uuid": "a445c882-d516-4eb3-90d9-0376f5f8dbbc",
          "source": "IAEA",
          "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=iaea.org",
          "preview_title": "RIBLL, the radioactive ion beam line in Lanzhou"
        },
        "end_index": 15335,
        "start_index": 15269,
        "origin_tool_name": "web_search"
      }
    ],
    "version_uuid": "7dfe53c2-1170-42e2-acfa-f6a14a11d189"
  },
  "message": null,
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": null,
  "name": "artifacts",
  "content": [
    {
      "type": "text",
      "text": "OK",
      "uuid": "b435ba34-62cd-4c49-b3d9-72e4f9606987"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce08b-38b8-7f8b-a81d-b61725e95e78",
  "updated_at": "2026-03-12T05:43:22.743003Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce08b-38b8-766e-904f-642325332736"
}
```

</details>

### 7. human — 2026-03-12T08:10:07.451732Z

What

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce118-84ff-722c-89ed-e207a0bb54dc",
  "updated_at": "2026-03-12T08:10:07.451732Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce08b-38b8-7f8b-a81d-b61725e95e78"
}
```

</details>

### 8. assistant — 2026-03-12T08:10:07.539587Z

_No text content in this message._

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce118-8500-7494-8488-990f67424a6f",
  "updated_at": "2026-03-12T08:10:07.539587Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce118-84ff-722c-89ed-e207a0bb54dc"
}
```

</details>

### 9. human — 2026-03-12T08:10:33.060950Z

What is the full name of HIRFL-CSR? Please tell me about the exact meaning of it.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce118-ecd9-7cb0-8555-45fa4876bc3b",
  "updated_at": "2026-03-12T08:10:33.060950Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce08b-38b8-7f8b-a81d-b61725e95e78"
}
```

</details>

### 10. assistant — 2026-03-12T08:10:48.869024Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to know the full name and meaning of HIRFL-CSR.

HIRFL = Heavy Ion Research Facility in Lanzhou
CSR = Cooler Storage Ring

Let me explain both parts.

</details>

**HIRFL-CSR** stands for:

**Heavy Ion Research Facility in Lanzhou — Cooler Storage Ring**

Let's break it down word by word:

**HIRFL — Heavy Ion Research Facility in Lanzhou**

- **Heavy Ion** — refers to ions of elements heavier than hydrogen (i.e., nuclei with Z ≥ 2, from helium up through uranium). The facility accelerates these heavy ions to relativistic energies for nuclear physics experiments.
- **Research Facility** — it is a large-scale scientific infrastructure, not a single machine, but a complex of accelerators and experimental beamlines.
- **in Lanzhou** — located in Lanzhou, the capital of Gansu Province, China, at the Institute of Modern Physics (IMP), Chinese Academy of Sciences (CAS).

**CSR — Cooler Storage Ring**

- **Cooler** — the ring has a dedicated **electron cooler**, a device that reduces the momentum spread of the stored ion beam by letting the ions interact with a cold, monoenergetic electron beam traveling at the same average velocity. This "cools" the beam — meaning it narrows the velocity distribution — resulting in much higher beam quality.
- **Storage** — ions can be stored and circulated in the ring for extended periods (seconds to minutes), unlike a simple transport beamline where ions pass through only once. This is essential for precision experiments like isochronous mass spectrometry.
- **Ring** — it is literally a ring-shaped magnetic storage ring, where dipole magnets bend the beam into a closed circular orbit.

**The full picture of the complex:**

HIRFL is actually a cascade of accelerators feeding into each other:

1. **ECR ion source** — produces heavy ions
2. **SFC** (Sector Focused Cyclotron) — the first-stage accelerator, up to ~10 MeV/nucleon
3. **SSC** (Separated Sector Cyclotron) — boosts beams to ~80 MeV/nucleon; this feeds **RIBLL1**
4. **CSRm** (main CSR ring) — further accelerates ions up to ~900 MeV/nucleon
5. **RIBLL2** — the second radioactive ion beam line, fed by CSRm
6. **CSRe** (experimental CSR ring) — a smaller storage ring for precision mass measurements and atomic physics

So when people say **HIRFL-CSR**, they typically refer to the entire upgraded complex that includes both the original HIRFL cyclotron system and the cooler storage ring extension added in the 2000s. The CSR addition was a major upgrade that pushed HIRFL from a purely cyclotron-based facility into a world-class facility capable of precision nuclear and atomic physics with stored and cooled relativistic heavy-ion beams.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce118-ecd9-7382-935a-f18d432ae797",
  "updated_at": "2026-03-12T08:10:48.869024Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce118-ecd9-7cb0-8555-45fa4876bc3b"
}
```

</details>

### 11. human — 2026-03-12T08:22:47.275502Z

During the electron ionization period of the MWDC, is the signal (current) induced by drift electrons just like the paradigm of other gaseous detectors?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce124-1be9-7470-a445-876a99294d53",
  "updated_at": "2026-03-12T08:22:47.275502Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce118-ecd9-7382-935a-f18d432ae797"
}
```

</details>

### 12. assistant — 2026-03-12T08:23:40.858475Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking a very specific and insightful question about the signal formation mechanism in MWDCs — specifically whether the current signal is induced by the drifting electrons (like in ionization chambers) or by something else.

This is a deep question about the Shockley-Ramo theorem and how signals are formed in gaseous detectors. Let me think carefully.

In gaseous detectors, the signal (current) on the electrodes is induced by the **motion of charges** (both electrons and ions) in the electric field, not by the actual collection of charges. This is described by the **Shockley-Ramo theorem**: the induced current is i = q · v_drift · E_w, where E_w is the "weighting field."


Now I'm contrasting how different detector types handle this signal formation. In ionization chambers like MUSIC, both drifting electrons and positive ions contribute to the induced signal, though the Frisch grid blocks the ion contribution in the drift region, resulting in slower signals proportional to total ionization. MWPCs operate differently — they work in avalanche mode very close to the sense wire where the multiplication happens within just a few wire radii.

The crucial difference is that electrons in the avalanche barely travel before reaching the wire, contributing minimally to the signal, while the positive ions created in that avalanche drift outward across a much larger distance toward the cathode, dominating the signal. This creates the characteristic fast rise from electron collection followed by a prolonged ion tail. MWDCs follow the same avalanche principle near the sense wire, but here the drift electrons travel several centimeters before reaching it — yet the signal during this long drift remains small because the weighting field weakens with distance from the wire, so the actual pulse is still dominated by the avalanche's positive ion component moving outward.

The timing of this signal is what matters for measurement — the delay between trigger and signal tells you the drift time. So when considering whether the long drift phase contributes significantly to the induced current, like in an ionization chamber, the answer is no. The weighting field is too weak far from the sense wire for drifting electrons to produce measurable current, and the real signal pulse comes from the avalanche itself, where positive ions moving outward dominate over the electrons' brief journey to the wire.

What the drift chamber actually measures is when that avalanche pulse arrives, not how much current flows during the drift phase. This is fundamentally different from an ionization detector like MUSIC, which has no avalanche and instead collects the full charge from electrons and ions drifting long distances to measure energy. The drift chamber is essentially a timing device using the avalanche as a trigger, whereas MUSIC is an energy measurement device that needs a Frisch grid to separate the signals.

</details>

This is an excellent and subtle question that gets to the heart of how signal formation in a MWDC differs from simpler gaseous detectors. The answer is: **not quite — the paradigm is meaningfully different**, and understanding why reveals something deep about how drift chambers actually work.

---

## The General Principle: Shockley-Ramo Theorem

In **all** gaseous detectors, the instantaneous current induced on an electrode is not caused by charges physically arriving at that electrode, but by the **motion of charges through the electric field**. The Shockley-Ramo theorem states:

$$i(t) = q \cdot \vec{v}_{drift}(t) \cdot \vec{E}_{weighting}(\vec{r}(t))$$

where $\vec{E}_{weighting}$ is the "weighting field" — a virtual field that describes how strongly a moving charge at position $\vec{r}$ couples to a particular electrode. This applies universally to ionization chambers, MWPCs, and MWDCs alike. So at the level of fundamental physics, yes, the same framework governs all of them.

**But the geometry of the electric field makes the MWDC behave very differently in practice.**

---

## Why the MWDC Signal Paradigm Differs

### Phase 1: The Long Drift — Almost No Signal

In a MWDC, primary electrons drift from wherever ionization occurred (up to ~5 mm away) toward the sense wire. During this long drift, you might expect a large induced current — but there is almost none. Here's why:

The weighting field $\vec{E}_{weighting}$ of a thin sense wire falls off as **1/r** and is extremely weak far from the wire. In the drift region (several mm away), $E_{weighting}$ is tiny. So even though electrons are moving at ~5 cm/µs, the induced current on the sense wire during the drift phase is negligibly small. The drift produces **no usable signal** on the anode.

This is the opposite of what happens in an ionization chamber like MUSIC, where the parallel-plate geometry produces a **uniform weighting field** throughout the drift gap — meaning every centimeter of electron drift contributes equally to the induced signal on the anode.

| Detector | Weighting field in drift region | Signal during drift? |
|---|---|---|
| MUSIC (ionization chamber) | Uniform (parallel plates) | Yes — large and proportional to ΔE |
| MWDC | Very weak (1/r, sense wire far away) | Essentially no |

### Phase 2: The Avalanche Near the Sense Wire — Where the Signal Actually Comes From

When the drifting electrons arrive within a few wire radii (~10–20 µm) of the thin sense wire (~20 µm diameter), they enter a region of extremely strong radial electric field. Here gas multiplication (Townsend avalanche) occurs with a gain of $10^4$–$10^5$.

Now the critical point: within the avalanche, the **electrons** travel only a few micrometers to reach the wire surface and are collected almost instantly. Their contribution to the induced signal is tiny.

The **positive ions** created in the avalanche, however, must drift outward — from near the wire (~10–100 µm) all the way back to the cathode (several mm). During this outward journey, they pass through the region of strong weighting field close to the wire, inducing a large, fast-rising current pulse.

So the detectable signal in a MWDC is dominated by **positive ion motion in the avalanche region**, not by the primary electron drift. This gives the characteristic MWDC signal shape:

- **Fast rising edge** (~1–2 ns) — as ions move away from the wire through the high-field zone
- **Long ion tail** (~100–200 µs) — as ions slowly drift all the way to the cathode

### Phase 3: What the MWDC Actually Measures

Here is the most important conceptual distinction. In MUSIC, you care about the **amplitude** of the signal — it encodes the energy deposited (ΔE ∝ Z²). In a MWDC, you care about the **timing** of the signal onset:

$$t_{drift} = t_{signal} - t_{trigger}$$

The drift time $t_{drift}$ is then converted to a distance via the space-time relation (STR):

$$d = \int_0^{t_{drift}} v_{drift}(E(r))\, dt$$

The amplitude of the signal is largely irrelevant for position measurement. This is a fundamentally different measurement paradigm from MUSIC.

---

## Summary: Comparing the Signal Formation Paradigms

| Aspect | MUSIC | MWDC |
|---|---|---|
| Operating mode | Sub-avalanche (ion chamber mode) | Avalanche (proportional mode) |
| What moves to make the signal | Primary electrons AND ions drifting long distances | Avalanche-produced positive ions moving short distances near wire |
| Weighting field in drift region | Strong and uniform (parallel plate) | Negligible (1/r, wire far away) |
| Signal during primary drift | Large — this IS the measurement | Negligible — drift is "invisible" to anode |
| What is extracted from signal | Amplitude → ΔE → Z | Timing → drift distance → position |
| Frisch grid needed? | Yes — to decouple cathode induction | No — irrelevant in this geometry |
| Ion tail | Manageable (no multiplication) | Dominant component of signal; often clipped by electronics |

---

## The Bottom Line

In a MWDC, the long primary electron drift that gives the detector its name is **ironically invisible** on the sense wire during that drift. The measurable signal pulse only appears when the electrons finally arrive at the avalanche zone and generate positive ions that rapidly move away from the wire through the strongest part of the weighting field. The MWDC is fundamentally a **precision clock** — it uses the avalanche pulse as a timing marker, and the physics of interest is entirely encoded in *when* that pulse arrives, not *how large* it is.

This is why MUSIC and MWDC, despite both being gas-filled detectors ionized by the same beam particles, extract completely orthogonal information and are irreplaceable partners in the RIBLL2 detector stack.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ce124-1be9-7b79-aa81-2fde625520b1",
  "updated_at": "2026-03-12T08:23:40.858475Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ce124-1be9-7470-a445-876a99294d53"
}
```

</details>
