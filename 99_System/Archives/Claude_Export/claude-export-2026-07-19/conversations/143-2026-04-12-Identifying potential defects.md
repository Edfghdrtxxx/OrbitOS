# Identifying potential defects

## Export metadata (verbatim)

```json
{
  "uuid": "0811c458-706c-4673-87e4-8146857bea96",
  "name": "Identifying potential defects",
  "summary": "**Conversation Overview**\n\nThe person asked Claude to fact-check a physics slide about direct and surrogate nuclear reactions. The slide contained claims spanning nuclear physics concepts, experimental methods, mathematical formalism, and specific nuclear data values. Claude conducted a systematic verification of each claim, using web searches to consult authoritative sources including NNDC NuDat, NUBASE2020, and the primary literature.\n\nThe fact-check confirmed the accuracy of the Escher et al. citation (Rev. Mod. Phys. 84, 353, 2012), the ²³⁷U half-life of 6.75 days, the surrogate reaction formula structure, the active-target TPC description, and the physics claims about shell evolution and tensor force contributions. A minor discrepancy was identified for the ²³⁸U half-life: the slide states 4.47 × 10⁹ years, which is consistent with the NNDC value of 4.468 × 10⁹ years when rounded to three significant figures, though some sources cite 4.463 × 10⁹ years. Two qualitative claims (TB-scale data volume and tensor force attribution) were flagged as unverifiable assertions lacking citations.\n\nThe person then followed up with a pointed question about whether the Escher et al. citation on the slide applied only to the formula or also to the accompanying diagram. Claude identified this as a citation placement ambiguity: the citation is visually positioned beneath the formula and detached from the diagram, which could mislead readers into thinking the diagram is unsourced — even though the cited review paper substantively covers both elements. Claude noted this would be a clearer issue in a paper context than in a presentation, and suggested repositioning the citation or adding a separate figure credit to resolve the ambiguity.",
  "created_at": "2026-04-12T15:21:03.426253Z",
  "updated_at": "2026-04-12T15:25:22.935461Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-12T15:21:03.941702Z

Fact check to identify any possible defects

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8248-31f4-7a84-bfca-23c88f2618e0",
  "updated_at": "2026-04-12T15:21:03.941702Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d8248-00b6-769d-a7ff-fe95364a4142",
      "file_name": "1776007249059_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-12T15:23:01.866275Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to fact-check the physics slide about "Direct & Surrogate Reactions." Let me analyze each claim carefully.

Let me go through the claims:

1. **Shell evolution & shape coexistence**: "Magic numbers erode in neutron-rich nuclei; tensor NN force drives coexisting deformations"
- Magic numbers eroding in neutron-rich nuclei is well-established (e.g., N=8, 20, 28 quenching). The tensor force role in shell evolution is associated with Otsuka et al. This is generally accurate.

2. **Probe via direct & surrogate reactions**: "(d,p)/(p,d) → C²S, Jπ; surrogates constrain r-process (n,γ) rates"


- (d,p) reactions extract spectroscopic factors C²S, which is the standard notation combining isospin Clebsch-Gordan coefficients with spectroscopic factors. Surrogate reactions do indeed constrain r-process neutron-capture rates, so this checks out.

3. **Active-target TPCs for rare-isotope beams**: "Gas = target + detector → thick-target luminosity, full kinematics"
- This accurately describes how active target TPCs use the gas as both target and detector medium, enabling high luminosity and complete kinematic reconstruction.

4. **Bottleneck: TB-scale**

Each experiment generates several terabytes of raw data, and extracting meaningful physics from that volume is a significant challenge in modern nuclear physics experiments.

5. **Surrogate Reaction Method diagram**:
- The desired reaction shows neutron capture on ²³⁷U producing an excited ²³⁸U nucleus that decays through various channels.
- The surrogate reaction achieves the same excited state via alpha inelastic scattering on ²³⁸U.
- The half-lives listed are ²³⁷U at 6.75 days and ²³⁸U at 4.47×10⁹ years, both of which match the known values.

6. **The formula**: σ(n,x) = Σ_{J,π} σ_CN(n+A; Jπ) × P_decay(B*; Jπ)
- This is the standard surrogate reaction formula from the Escher et al. review in Reviews of Modern Physics, which describes how to extract neutron-induced cross sections from compound nuclear reactions populated through alternative mechanisms.

Now I need to verify the specific citation details and check whether the half-lives and surrogate reaction example are accurate. The α + ²³⁸U inelastic scattering forming ²³⁸U* as a surrogate for n + ²³⁷U is conceptually sound, but I should confirm the exact reference and the nuclear data values.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T15:21:24.120675Z",
  "stop_timestamp": "2026-04-12T15:21:24.240011Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01A6zfPtFxbTK1xa8gCUhpbE",
  "name": "web_search",
  "input": {
    "query": "Escher surrogate reaction Rev Mod Phys 84 353 2012"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_01A6zfPtFxbTK1xa8gCUhpbE",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Compound-nuclear reaction cross sections from surrogate measurements | Rev. Mod. Phys.",
      "url": "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.84.353",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aps.org",
        "site_name": "APS Journals"
      },
      "is_missing": false,
      "text": "Rev. Mod. Phys. 84, 353 – Published 13 March, 2012 ... Nuclear reaction cross sections are important for a variety of applications in the areas of astrophysics, nuclear energy, and national security. When these cross sections cannot be measured directly or predicted reliably, it becomes necessary ...\n\nNuclear reaction cross sections are important for a variety of applications in the areas of astrophysics, nuclear energy, and national security. When these cross sections cannot be measured directly or predicted reliably, it becomes necessary to develop indirect methods for determining the relevant reaction rates. The surrogate nuclear reactions approach is such an indirect method. First used in the 1970s for estimating $(n,f)$ cross sections, the method has recently been recognized as a potentially powerful tool for a wide range of applications that involve compound-nuclear reactions. The method is expected to become an important focus of inverse-kinematics experiments at rare-isotope facilities. The present paper reviews the current status of the surrogate approach. Experimental techniques employed and theoretical descriptions of the reaction mechanisms involved are presented and representative cross section measurements are discussed.\n\nJutta E. Escher, Jason T. Harke, Frank S. Dietrich, Nicholas D. Scielzo, Ian J. Thompson, and Walid Younes · Lawrence Livermore National Laboratory, Livermore, California 94550, USA ... Rev. Mod. Phys. 84, 353 – Published 13 March, 2012 ... Nuclear reaction cross sections are important for a variety of applications in the areas of astrophysics, nuclear energy, and national security. When these cross sections cannot be measured directly or predicted reliably, it becomes necessary to develop indirect methods for determining the relevant reaction rates. The surrogate nuclear reactions approach is such an indirect method. First used in the 1970s for estimating ... ) cross sections, the method has recently been recognized as a potentially powerful tool for a wide range of applications that involve compound-nuclear reactions. The method is expected to become an important focus of inverse-kinematics experiments at rare-isotope facilities.\n\nRev. Mod. Phys. 84, 353– Published 13 March, 2012 · Vol. 84, Iss. 1 — January - March 2012 ... Rev. Mod. Phys. 84, 353– Published 13 March, 2012 · Vol. 84, Iss.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.84.353",
        "search_provider": "anthropic",
        "age": "March 13, 2012"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Reviews of Modern Physics - Volume 84 Issue 1",
      "url": "https://journals.aps.org/rmp/issues/84/1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aps.org",
        "site_name": "APS Journals"
      },
      "is_missing": false,
      "text": "Mod. Phys. 84, 353 (2012) - Published 13 March, 2012 · To understand the origin of the elements heavier than iron, innovative nuclear-fuel cycles, and nuclear weapon test data, a detailed knowledge of certain reaction cross section is required. Oftentimes, when the key reactions cannot be ...\n\nJutta E. Escher, Jason T. Harke, Frank S. Dietrich, Nicholas D. Scielzo, Ian J. Thompson, and Walid Younes · Rev. Mod. Phys. 84, 353 (2012) - Published 13 March, 2012 · To understand the origin of the elements heavier than iron, innovative nuclear-fuel cycles, and nuclear weapon test data, a detailed knowledge of certain reaction cross section is required. Oftentimes, when the key reactions cannot be studied directly or predicted reliably, it becomes necessary to develop indirect, or surrogate, techniques. This review discusses the foundations and applications of the surrogate nuclear reaction approach, and the prospects for the future, especially at rare-isotope facilities. Vincenzo Cirigliano, Gerhard Ecker, Helmut Neufeld, Antonio Pich, and Jorge Portolés · Rev. Mod. Phys. 84, 399 (2012) - Published 21 March, 2012 · This review article surveys the theoretical structure, experimental status, and physics implications of the large variety of neutral and charged kaon decay modes.\n\nCold and trapped metastable noble gases Wim Vassen, Claude Cohen-Tannoudji, Michele Leduc, Denis Boiron, Christoph I. Westbrook, Andrew Truscott, Ken Baldwin, Gerhard Birkl, Pablo Cancio, and Marek Trippenbach Rev. Mod. Phys. 84, 175 (2012) P. D. Nation, J. R. Johansson, M. P. Blencowe, and Franco Nori · Rev. Mod. Phys. 84, 1 (2012) - Published 11 January, 2012 · In classical mechanics the “vacuum” is empty (nothingness). In contrast, the vacuum of quantum mechanics is a volatile sea of ephemeral virtual particles. This Colloquium describes several processes in which these vacuum fluctuations are amplified into real observable particles, and how superconducting circuits can be used to realize such amplification mechanisms, and therefore explore the properties of the quantum vacuum. ... Rev. Mod. Phys. 84, 25 (2012) - Published 17 January, 2012 ·\n\nRev. Mod. Phys. 84, 65 (2012) - Published 23 January, 2012 · Since the discovery of charm mesons in 1974 precision measurements of their decay in fixed target and colliding beam experiments at particle accelerators have yielded a wealth of information on the weak and strong interactions of heavy flavor quarks. This review summarizes what is presently known experimentally and theoretically in the field and provides an excellent foundation for future charm studies at the LHC and the next generation of ... G. Catalan, J. Seidel, R. Ramesh, and J. F. Scott · Rev. Mod. Phys. 84, 119 (2012) - Published 3 February, 2012 · The formation of domains in thin films of ferroelectrics, ferromagnets, ferroelastics, or multiferroics can be thought of as a consequence of a finite-size effect driven by a minimization of a surface energy. This review, which focuses on ferroelectrics, describes the energetics of domain formation and how domain walls can act as mobile interfaces suited to a variety of nano\n\nRev. Mod. Phys. 84, 157 (2012) - Published 8 February, 2012 · As the mass and complexity of objects, such as molecules and atoms, increase, they behave more classically than quantum mechanically. Certain small systems such as clusters and molecules are on the border line between the classical and quantum description. In this Colloquium, the developments in the interferometry of these systems are described as well as the new physics that they bring to light. Wim Vassen, Claude Cohen-Tannoudji, Michele Leduc, Denis Boiron, Christoph I. Westbrook, Andrew Truscott, Ken Baldwin, Gerhard Birkl, Pablo Cancio, and Marek Trippenbach · Rev. Mod. Phys. 84, 175 (2012) - Published 24 February, 2012 · Cold atomic gases have numerous applications, ranging from matter-wave interferometry to many-body physics. Atoms from the noble gas family play a special role in this research.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://journals.aps.org/rmp/issues/84/1",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "First Measurement of the Neutron-Emission Probability with a Surrogate Reaction in Inverse Kinematics at a Heavy-Ion Storage Ring | Phys. Rev. Lett.",
      "url": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.072501",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aps.org",
        "site_name": "APS Journals"
      },
      "is_missing": false,
      "text": "J. E. Escher, J. T. Harke, F. S. Dietrich, N. D. Scielzo, I. J. Thompson, and W. Younes, Rev. Mod. Phys. 84, 353 (2012). A. Larsen, A. Spyrou, S. Liddick, and M. Guttormsen, Prog. Part. Nucl. Phys. 107, 69 (2019). J. E. Escher et al., EPJ Web Conf. 122, 12001 (2016). J. E. Escher, J. T. Harke, R. O. Hughes, N. D. Scielzo, R. J. Casperson, S. Ota, H. I. Park, A. Saastamoinen, and T. J. Ross, Phys. Rev. Lett. 121, 052501 (2018). A. Ratkiewicz et al., Phys. Rev. Lett. 122, 052502 (2019). R. Pérez Sánchez et al., Phys. Rev. Lett. 125, 122502 (2020). G. Kessedjian, B. Jurado, G. Barreau, P. Marini, L. Mathieu, I. Tsekhanovich, M. Aiche, G. Boutoux, S. Czajkowski, and Q. Ducasse, Phys. Rev. C 91, 044607 (2015). R. Pérez Sánchez et al., Nucl. Instrum. Methods Phys. Res., Sect. A 933, 63 (2019). M. Steck and Y. A. Litvinov, Prog. Part. Nucl. Phys. 115, 103811 (2020).\n\nNeutron-induced reaction cross sections of short-lived nuclei are imperative to understand the origin of heavy elements in stellar nucleosynthesis and for societal applications, but their measurement is extremely complicated due to the radioactivity of the targets involved. One way of overcoming this issue is to combine surrogate reactions with the unique possibilities offered by heavy-ion storage rings. In this work, we describe the first surrogate-reaction experiment in inverse kinematics, which we successfully conducted at the Experimental Storage Ring (ESR) of the GSI/FAIR facility, using the $^{208}\\mathrm{Pb}(p,{p}^{\\ensuremath{'}})$ reaction as a surrogate for neutron capture on $^{207}\\mathrm{Pb}$. Thanks to the outstanding detection efficiencies possible at the ESR, we were able to measure for the first time the neutron-emission probability as a function of the excitation energy of $^{208}\\mathrm{Pb}$. We have used this probability to select different descriptions of the $\\ens\n\nS. Hilaire, M. Girod, S. Goriely, and A. J. Koning, Phys. Rev. C 86, 064317 (2012). L. A. Bernstein, D. A. Brown, A. J. Koning, B. T. Rearden, C. E. Romano, A. A. Sonzogni, A. S. Voyles, and W. Younes, Annu. Rev. Nucl. Part. Sci. 69, 109 (2019). Z. Ge et al., EPJ Web Conf. 239, 09001 (2020). O. Iwamoto et al., J. Nucl. Sci. Technol. 60, 1 (2023). A. Koning, D. Rochman, J. Sublet, N. Dzysiuk, M. Fleming, and S. van der Marck, Nucl. Data Sheets 155, 1 (2019). D. A. Brown et al., Nucl. Data Sheets 148, 1 (2018). ... Phys. Rev. Lett. 134, 072501– Published 18 February, 2025 · Vol. 134, Iss. 7 — 21 February 2025 ... Published by the American Physical Society under the terms of the Creative Commons Attribution 4.0 International license. Further distribution of this work must maintain attribution to the author(s) and the published article’s title, journal citation, and DOI.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.072501",
        "search_provider": "anthropic",
        "age": "February 18, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Neutron Capture Cross Sections from Surrogate Reaction Data and Theory: Connecting the Pieces with a Markov-Chain Monte Carlo Approach | SpringerLink",
      "url": "https://link.springer.com/chapter/10.1007/978-3-030-58082-7_28",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "springer.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
        "site_name": "Springer"
      },
      "is_missing": false,
      "text": "J.E. Escher et al., Compound-nuclear reaction cross sections from surrogate measurements. Rev. Mod. Phys. 84, 353 (2012) ... J.E. Escher et al., Constraining neutron capture cross sections for unstable nuclei with surrogate reaction data and theory.\n\nJutta E. Escher9 · Part of the book series: Springer Proceedings in Physics ((SPPHY,volume 310)) ... The neutron capture cross section for 90Zr(n, γ) has recently been determined using surrogate 92Zr(p, dγ) data and nuclear reaction theory (J.E. Escher et al., Phys Rev Lett 121:052501, 2018). That work employed an approximate fitting method based on Bayesian Monte Carlo sampling to determine parameters needed for calculating the 90Zr(n, γ) cross section. Here, we improve the approach by introducing a more sophisticated Markov-Chain Monte Carlo sampling method (W.K. Hastings, Biometrika 57:97, 1970). We present preliminary results. This is a preview of subscription content, log in via an institution to check access. ... R. Capote et al., RIPL - reference input parameter library for calculation of nuclear reactions and nuclear data evaluations. Nucl. Data Sheets 110, 3107 (2009) ...\n\nJ.E. Escher et al., Compound-nuclear reaction cross sections from surrogate measurements. Rev. Mod. Phys. 84, 353 (2012) ... J.E. Escher et al., Constraining neutron capture cross sections for unstable nuclei with surrogate reaction data and theory. Phys. Rev. Lett. 121, 052501 (2018) ... A. Gilbert, A. Cameron, A composite nuclear-level density formula with shell corrections. Can. J. Phys. 43(8), 1446–1496 (1965) ... A. Ignatyuk, et al., Sov. J. Nucl. Phys. 21, 255 (1975) ... W.K. Hastings, Monte Carlo sampling methods using Markov chains and their applications. Biometrika 57, 97 (1970) ... D.P. Kroese, T. Taimre, Z.I. Botev, Handbook of Monte Carlo Methods. Wiley Series in Probability and Statistics (Wiley, New York, 2011) ... R. Koning, Modern nuclear data evaluation with the TALYS code system. Nucl. Data Sheets 113, 2841 (2012) ... M.B. Chadwick et al., ENDF/B-VII.0: Next generation evaluated nuclear data library for nuclear science and technology.\n\nGorton, O., Escher, J.E. (2021). Neutron Capture Cross Sections from Surrogate Reaction Data and Theory: Connecting the Pieces with a Markov-Chain Monte Carlo Approach. In: Escher, J., et al. Compound-Nuclear Reactions. Springer Proceedings in Physics, vol 310. Springer, Cham. https://doi.org/10.1007/978-3-030-58082-7_28 ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://link.springer.com/chapter/10.1007/978-3-030-58082-7_28",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Investigation of Surrogate method for 55Fe(n,p)55Mn Reaction",
      "url": "https://inspirehep.net/files/da25f0d33cc054e68100e582bfea096d",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "inspirehep.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=inspirehep.net",
        "site_name": "INSPIRE"
      },
      "is_missing": false,
      "text": "[3] J.E. Escher et al., Rev.Mod.Phys. 84,353-397 · ( 2012). [4] V.F.Weisskopf and P.H.Ewing. Phys.Rev. C · 57,472 ( 1940) [5] S.M.Grimes and R.C.Haigh. Phys.Rev. C 19, 2127-2137 ( 1979) [6] Sheng Fan et al., Nuclear Instruments and · Methods in Physics Research B 215,16-26, ( 2004) [7] Herman, M. et al., User’s Manual: EMPIRE- 3.1 Rivoli modular system for nuclear · reaction calculations and nuclear data · evaluation( 2012). [8] Koning, A.J., et al., Talys User Manual , A · nuclear reaction program, User Manual. NRG-1755 ZG Petten, The Netherlands · (2011). [9] D. Cramer and H. C. Britt Phys. Rev. C 2, 2350 (1970). [10] S.R. Lesher et al., Phys. Rev. C 79, 044609(2009) [11] B. K. Nayak, A. Saxena, D. C. Biswas, E. T. Mirgule, B.V. John, S. Santra, R. P. Vind, R.K.Choudhury, and S. Ganesan, Phys. Rev. C78, 061602(R) (2008). [12] J.F.Ziegler,J.P.Biersack, SRIM-2008 ·\n\n[3] J.E. Escher et al., Rev.Mod.Phys. 84,353-397 · ( 2012). [4] V.F.Weisskopf and P.H.Ewing. Phys.Rev. C · 57,472 ( 1940) [5] S.M.Grimes and R.C.Haigh. Phys.Rev. C 19, 2127-2137 ( 1979) [6] Sheng Fan et al., Nuclear Instruments and · Methods in Physics Research B 215,16-26, ( 2004) [7] Herman, M. et al., User’s Manual: EMPIRE- 3.1 Rivoli modular system for nuclear · reaction calculations and nuclear data · evaluation( 2012). [8] Koning, A.J., et al., Talys User Manual , A · nuclear reaction program, User Manual. NRG-1755 ZG Petten, The Netherlands · (2011). [9] D. Cramer and H. C. Britt Phys. Rev. C 2, 2350 (1970). [10] S.R. Lesher et al., Phys. Rev. C 79, 044609(2009) [11] B. K. Nayak, A. Saxena, D. C. Biswas, E. T. Mirgule, B.V. John, S. Santra, R. P. Vind, R.K.Choudhury, and S. Ganesan, Phys. Rev. C78, 061602(R) (2008). [12] J.F.Ziegler,J.P.Biersack, SRIM-2008 ·\n\nProceedings of the DAE Symp. on Nucl. Phys. 58 (2013) ... MeV. Two methods (absolute and ratio method) ... Method (ESRM). ... Surrogate method 52Cr(6Li, d)56Fe*. Proposed · surrogate reaction fulfils all the requirements of ... The authors are thankful to Prof. Robin Forrest, ... Mumbai), S. Ganesan (BARC, Mumbai), V.M. Dattar (NPD, BARC), H.M. Agrawal (Pantnagar · Univ.) for their valuable suggestion . ... Vol.59, No.2, pp. 1378- 1381 (2011). ... Mirgule, B.V. John, S. Santra, R. P. Vind, R.K.Choudhury, and S. Ganesan, Phys. Rev. C78, 061602(R) (2008). ... Proceedings of the DAE Symp. on Nucl. Phys.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://inspirehep.net/files/da25f0d33cc054e68100e582bfea096d",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Theoretical nuclear physics industrial studentship | University of Surrey",
      "url": "https://www.surrey.ac.uk/fees-and-funding/studentships/theoretical-nuclear-physics-industrial-studentship",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "surrey.ac.uk",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=surrey.ac.uk",
        "site_name": "University of Surrey"
      },
      "is_missing": false,
      "text": "One indirect method, called &quot;surrogate reactions&quot; (see e.g. Escher et al. Rev. Mod. Phys. 84 (2012)) is an active research field since the early 2000s, pushed mainly by the Lawrence Livermore National Laboratory (LLNL) in USA with some contribution from AWE. The current PhD project will involve ...\n\nThe theoretical model developed by the student will be compared to the surrogate reaction data supplied by the LLNL. There is also the potential for the student to spend time at LLNL as part of the project. The project results will be presented at national and international conferences. The PhD would be funded by AWE and an AWE Industrial Supervisor would be closely involved in the study. Applicants are expected to hold a first or upper-second class degree in a relevant discipline (or equivalent overseas qualification), or a lower second plus a good Master’s degree (distinction normally required). You will need to meet the minimum entry requirements for our PhD programme. Open to UK nationals only. Applications should be submitted via the Physics PhD programme page. In place of a research proposal you should upload a document stating the title of the project that you wish to apply for and the name of the relevant supervisor.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.surrey.ac.uk/fees-and-funding/studentships/theoretical-nuclear-physics-industrial-studentship",
        "search_provider": "anthropic",
        "age": "July 15, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Surrogate Reaction Method for Neutron Capture and Other Reactions on Unstable Isotopes | Springer Nature Link",
      "url": "https://link.springer.com/chapter/10.1007/978-3-030-58082-7_27",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "springer.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
        "site_name": "Springer"
      },
      "is_missing": false,
      "text": "J.E. Escher, J.T. Burke, F.S. Dietrich, n.d. Scielzo, I.J. Thompson, W. Younes, Rev. Mod. Phys. 84, 353 (2012) ... J.E. Escher, F.S. Dietrich, Phys. Rev. C 74(5), 054601 (2006) ... J.E. Escher, F.S. Dietrich, Phys. Rev. C 81(2), 024612 (2010) ... C. Forssén, F. Dietrich, J. Escher, R. Hoffman, K. Kelley, Phys. Rev. C 75, 055807 (2007) ... J.E. Escher, F.S. Dietrich, Phys. Rev. C 81(2), 024612 (2010) ... S. Chiba, O. Iwamoto, Phys. Rev. C 81(4), 044604 (2010) ... n.d. Scielzo, J.E. Escher, J.M. Allmond, M.S. Basunia, C.W. Beausang, L.A. Bernstein, D.L. Bleuel, J.T. Burke, R.M. Clark, F.S. Dietrich, P. Fallon, J. Gibelin, B.L. Goldblum, S.R. Lesher, M.A. McMahan, E.B. Norman, L. Phair, E. Rodriquez-Vieitez, S.A. Sheets, I.J. Thompson, M. Wiedeking, Phys. Rev. C 81(3), 034608 (2010) ... G. Boutoux, B. Jurado, V. Méot, O. Roig, L. Mathieu, M. Aïche, G. Barreau, N.\n\nJ. E. Escher8, J. T. Burke8, R. O. Hughes8, N. D. Scielzo8 & ... R. J. Casperson8 Show authors · Part of the book series: Springer Proceedings in Physics ((SPPHY,volume 310)) ... Recently, it was demonstrated that the surrogate reaction method is a viable indirect approach for determining neutron capture cross sections for unstable isotopes. Key to the successful application of the method is a proper theoretical description of the compound nucleus in the surrogate reaction. We review recent progress in this area and discuss the procedure for obtaining the cross sections of interest, with particular emphasis on the (p,d) surrogate reaction. The approach makes no use of auxiliary constraining quantities, such as neutron resonance data, or average radiative widths, which are not available for short-lived isotopes; hence, it can be applied to isotopes away from stability.\n\nJ.E. Escher, J.T. Burke, F.S. Dietrich, n.d. Scielzo, I.J. Thompson, W. Younes, Rev. Mod. Phys. 84, 353 (2012) ... J.E. Escher, F.S. Dietrich, Phys. Rev. C 74(5), 054601 (2006) ... J.E. Escher, F.S. Dietrich, Phys. Rev. C 81(2), 024612 (2010) ... C. Forssén, F. Dietrich, J. Escher, R. Hoffman, K. Kelley, Phys. Rev. C 75, 055807 (2007) ... J.E. Escher, F.S. Dietrich, Phys. Rev. C 81(2), 024612 (2010) ... S. Chiba, O. Iwamoto, Phys. Rev. C 81(4), 044604 (2010) ... n.d. Scielzo, J.E. Escher, J.M. Allmond, M.S. Basunia, C.W. Beausang, L.A. Bernstein, D.L. Bleuel, J.T. Burke, R.M. Clark, F.S. Dietrich, P. Fallon, J. Gibelin, B.L. Goldblum, S.R. Lesher, M.A. McMahan, E.B. Norman, L. Phair, E. Rodriquez-Vieitez, S.A. Sheets, I.J. Thompson, M. Wiedeking, Phys. Rev. C 81(3), 034608 (2010) ... G. Boutoux, B. Jurado, V. Méot, O. Roig, L. Mathieu, M. Aïche, G. Barreau, N.\n\nG.P.A. Nobre, F.S. Dietrich, J.E. Escher, I.J. Thompson, M. Dupuis, J. Terasaki, J. Engel, Phys. Rev. C 84, 064609 (2011) ... M. Dupuis, T. Kawano, J.P. Delaroche, E. Bauge, Phys. Rev. C 83, 014602 (2011) ... M. Dupuis, E. Bauge, S. Hilaire, F. Lechaftois, S. Péru, N. Pillet, C. Robin, Eur. Phys. J. A 51(12), 168 (2015) ... M. Dupuis, Eur. Phys. J. A 53(5), 111 (2017) ... This work was performed under the auspices of the U.S. Department of Energy (DOE) by Lawrence Livermore National Laboratory under contract DE-AC52-07NA27344, with partial support from LLNL’s LDRD project 19-ERD-017. Lawrence Livermore National Laboratory, Livermore, CA, USA · J. E. Escher, J. T. Burke, R. O. Hughes, N. D. Scielzo & R. J. Casperson ... J. E. Escher ... J. T. Burke ... R. O. Hughes ... N. D. Scielzo ... R. J. Casperson ... Correspondence to J. E. Escher . Lawrence Livermore National Laboratory, Livermore, CA, USA ...\n\nCapellan, I. Companis, S. Czajkowski, K.H. Schmidt, J. Burke, A. Bail, J. Daugas, T. Faul, P. Morel, N. Pillet, C. Théroine, X. Derkx, O. Sérot, I. Matéa, L. Tassan-Got, Phys. Lett. B 712(4–5), 319 (2012) ... R. Hatarik, L.A. Bernstein, J.A. Cizewski, D.L. Bleuel, J.T. Burke, J.E. Escher, J. Gibelin, B.L. Goldblum, A.M. Hatarik, S.R. Lesher, P.D. O’Malley, L. Phair, E. Rodriguez-Vieitez, T. Swan, M. Wiedeking, Phys. Rev. C 81(1), 011602 (2010) ... S. Hilaire, C. Lagrange, A.J. Koning, Ann. Phys. 306(2), 209 (2003) ... J.E. Escher, A.P. Tonchev, J.T. Burke, P. Bedrossian, R.J. Casperson, N. Cooper, R.O. Hughes, P. Humby, R.S. Ilieva, S. Ota, N. Pietralla, n.d. Scielzo, V. Werner, EPJ Web Conf. 122, 12001 (2016) ... J.E. Escher, J.T. Burke, R.O. Hughes, n.d. Scielzo, R.J. Casperson, S. Ota, H.I. Park, A. Saastamoinen, T.J. Ross, Phys. Rev. Lett. 121, 052501 (2018) ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://link.springer.com/chapter/10.1007/978-3-030-58082-7_27",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Measurement of 55Fe(n,p)55Mn reaction cross-section by Surrogate",
      "url": "http://sympnp.org/proceedings/60/B10.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "sympnp.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=sympnp.org",
        "site_name": "Sympnp"
      },
      "is_missing": false,
      "text": "[4] J.E.Escher, et al., Rev.Mod.Phys. 84, 353- 397 (2012). [5] https://www-nds.iaea.org/exfor/endf.htm#1 · [6] http://www.nndc.bnl.gov/nndcscr/model- codes/modlibs// Proceedings of the DAE-BRNS Symp. on Nucl. Phys. 60 (2015) 347 ·\n\n[4] J.E.Escher, et al., Rev.Mod.Phys. 84, 353- 397 (2012). [5] https://www-nds.iaea.org/exfor/endf.htm#1 · [6] http://www.nndc.bnl.gov/nndcscr/model- codes/modlibs// Proceedings of the DAE-BRNS Symp. on Nucl. Phys. 60 (2015) 347 ·\n\nb Nuclear Physics Division, Bhabha Atomic Research Centre, Mumbai – 400 085, India · cPhysics Department, Faculty of Science, M.S. University of Baroda-390002, Vadodara, India · d Department of Physics, G.B. Pant University of Ag. and Tech. Pantnagar, Uttarakhand – 263145, India · eDepartment of Physics, Panjab University, Chandigarh-160014, India ... Fe~65%). Interaction of 14-MeV neutrons with ... TIFR, Mumbai. The 56Fe* and 47Ti* compound ... Proceedings of the DAE-BRNS Symp. on Nucl. Phys. 60 (2015) ... MeV). The experimental 55Fe(n,p)cross sections ... Fig 1. The measured 55Fe(n,p) cross-sections are ... Fig 1. (Color online) The 55Fe(n,p) cross-section as · a function of equivalent neutron energy along with ... Physical Society 59 1378- 1381 (2011). ... Proceedings of the DAE-BRNS Symp. on Nucl. Phys.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "http://sympnp.org/proceedings/60/B10.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Measurement of (n, f) and (n, xn) cross sections with surrogate reaction method | EPJ Web of Conferences",
      "url": "https://www.epj-conferences.org/articles/epjconf/ref/2020/15/epjconf_nd2019_01007/epjconf_nd2019_01007.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "epj-conferences.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=epj-conferences.org",
        "site_name": "EPJ Conferences"
      },
      "is_missing": false,
      "text": "Escher J, Burke J.T, Dietrich F.S, et al. Rev. Mod. Phys., 84, 353 (2012) [CrossRef] [Google Scholar] Cramer J.D and Britt H.C, Phys. Rev. C, 2, 2350 (1970) [CrossRef] [Google Scholar] Plettner C, Ai H, Beausang C.W, et al. Phys. Rev. C, 71, 051602(R) (2005) [Google Scholar] Burke J.T, Bernstein L.A, Escher J. et al. Phys. Rev. C, 73, 054604 (2006) [CrossRef] [Google Scholar] Escher J and Dietrich F.S, in Second Argonne/MSU/JINA/INTRIA Workshop, AIP Conf. Proc. 791, 93 (2005) [Google Scholar] Wang B.S, Harke J.T, Akindele O.A, et al. Phys. Rev. C 100, 064609 (2019) [Google Scholar] Ducasse Q, Jurado B, Aiche M. et al. Phys. Rev. C. 94, 024614 (2016) [Google Scholar] Basuniaa M.S, Clarka R.M, Bernstein L.A, et al. AIP Conf. Proc. 1005, 101 (2008) [Google Scholar] fusion-evaporation code, http://lise.nscl.msu.edu/lise.html [Google Scholar] Raynal J, Technical Report No.\n\nEscher J, Burke J.T, Dietrich F.S, et al. Rev. Mod. Phys., 84, 353 (2012) [CrossRef] [Google Scholar] Cramer J.D and Britt H.C, Phys. Rev. C, 2, 2350 (1970) [CrossRef] [Google Scholar] Plettner C, Ai H, Beausang C.W, et al. Phys. Rev. C, 71, 051602(R) (2005) [Google Scholar] Burke J.T, Bernstein L.A, Escher J. et al. Phys. Rev. C, 73, 054604 (2006) [CrossRef] [Google Scholar] Escher J and Dietrich F.S, in Second Argonne/MSU/JINA/INTRIA Workshop, AIP Conf. Proc. 791, 93 (2005) [Google Scholar] Wang B.S, Harke J.T, Akindele O.A, et al. Phys. Rev. C 100, 064609 (2019) [Google Scholar] Ducasse Q, Jurado B, Aiche M. et al. Phys. Rev. C. 94, 024614 (2016) [Google Scholar] Basuniaa M.S, Clarka R.M, Bernstein L.A, et al. AIP Conf. Proc. 1005, 101 (2008) [Google Scholar] fusion-evaporation code, http://lise.nscl.msu.edu/lise.html [Google Scholar] Raynal J, Technical Report No.\n\nBernstein L.A, Becker J.A, Garrett P.E, et al., Phys. Rev. C, 65, 021601(R) (2002) [Google Scholar] Frehaut J, et al. Nucl. Sci. Eng., 74, 29 (1980) [CrossRef] [Google Scholar] Lougheed R.W, Webster W. Namboodiri M.N, et al., Radiochim. Acta, 90, 833 (2002) [CrossRef] [Google Scholar] Mather D.S, Bampton P.F, Coles R.E, et al., Nind, P. J.: Report AWRE-O-72/,72 (1972), Report AWRE-O-47/, 69 (1969) [Google Scholar] Current usage metrics show cumulative count of Article Views (full-text article views including HTML views, PDF and ePub downloads, according to the available data) and Abstracts Views on Vision4Press platform. Data correspond to usage on the plateform after 2015. The current usage metrics is available 48-96 hours after online publication and is updated daily on week days.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.epj-conferences.org/articles/epjconf/ref/2020/15/epjconf_nd2019_01007/epjconf_nd2019_01007.html",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Cross sections for neutron-induced reactions from surrogate data: Reexamining the Weisskopf-Ewing approximation for and reactions | Phys. Rev. C",
      "url": "https://journals.aps.org/prc/abstract/10.1103/PhysRevC.107.044612",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aps.org",
        "site_name": "APS Journals"
      },
      "is_missing": false,
      "text": "Jutta E. Escher† · San Diego State University, San Diego, California 92182, USA · Lawrence Livermore National Laboratory, Livermore, California 94550, USA · *ogorton@sdsu.edu; University of California, Irvine, California 92679, USA. ... Phys. Rev. C 107, 044612 – Published 27 April, 2023 ... Background: Modeling nuclear reaction networks for nuclear science applications and for simulations of astrophysical environments relies on cross section data for a vast number of reactions, many of which have never been measured. Cross sections for neutron-induced reactions on unstable nuclei are particularly scarce, since they are the most difficult to measure. Consequently, we must rely on theoretical predictions or indirect measurements to obtain the requisite reaction data. For compound nuclear reactions, the surrogate reaction method can be used to determine many cross sections of interest.\n\nBackground: Modeling nuclear reaction networks for nuclear science applications and for simulations of astrophysical environments relies on cross section data for a vast number of reactions, many of which have never been measured. Cross sections for neutron-induced reactions on unstable nuclei are particularly scarce, since they are the most difficult to measure. Consequently, we must rely on theoretical predictions or indirect measurements to obtain the requisite reaction data. For compound nuclear reactions, the surrogate reaction method can be used to determine many cross sections of interest.Purpose: Earlier work has demonstrated that cross sections for neutron-induced fission and radiative neutron capture can be determined from a combination of surrogate reaction data and theory. For the fission case, it was shown that the Weisskopf-Ewing approximation, which significantly simplifies the implementation of the surrogate method, can be employed.\n\nJutta E. Escher† · San Diego State University, San Diego, California 92182, USA · Lawrence Livermore National Laboratory, Livermore, California 94550, USA · *ogorton@sdsu.edu; University of California, Irvine, California 92679, USA. ... Phys. Rev. C 107, 044612 – Published 27 April, 2023 ... Background: Modeling nuclear reaction networks for nuclear science applications and for simulations of astrophysical environments relies on cross section data for a vast number of reactions, many of which have never been measured. Cross sections for neutron-induced reactions on unstable nuclei are particularly scarce, since they are the most difficult to measure. Consequently, we must rely on theoretical predictions or indirect measurements to obtain the requisite reaction data. For compound nuclear reactions, the surrogate reaction method can be used to determine many cross sections of interest.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://journals.aps.org/prc/abstract/10.1103/PhysRevC.107.044612",
        "search_provider": "anthropic",
        "age": "April 27, 2023"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Good. The citation is confirmed. Now let me check the half-lives of ²³⁷U and ²³⁸U, and also check the second author's name in the citation - I notice from one source it says "Jason T. Harke" and from another "Jason T. Burke". Let me check this.

From source 1: "Jutta E. Escher, Jason T. Harke, Frank S. Dietrich..."
From source 7: "J.E. Escher, J.T. Burke..."

The slide says "Escher et al." so this doesn't matter much for the slide.


Now I'm looking up the half-lives for those uranium isotopes to verify the values.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T15:21:29.952791Z",
  "stop_timestamp": "2026-04-12T15:21:30.458598Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01MwszjYtNtifGRs2PxAxKWH",
  "name": "web_search",
  "input": {
    "query": "uranium-237 half-life days NNDC"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_01MwszjYtNtifGRs2PxAxKWH",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Isotopes of uranium - Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Isotopes_of_uranium",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "wikipedia.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
        "site_name": "Wikipedia"
      },
      "is_missing": false,
      "text": "Uranium-237 has a half-life of about 6.75 days. It decays into neptunium-237 by beta decay. It was discovered by Japanese physicist Yoshio Nishina in 1940, who in a near-miss discovery, inferred the creation of element 93, but was unable to isolate the then-unknown element or measure its decay ...\n\nUranium-237 has a half-life of about 6.75 days. It decays into neptunium-237 by beta decay. It was discovered by Japanese physicist Yoshio Nishina in 1940, who in a near-miss discovery, inferred the creation of element 93, but was unable to isolate the then-unknown element or measure its decay properties. Uranium-238 (238U or U-238) is the most common isotope of uranium in nature. It is not fissile, but is fertile: it can capture a slow neutron and after two beta decays become fissile plutonium-239. Uranium-238 is fissionable by fast neutrons, but cannot support a chain reaction because inelastic scattering reduces neutron energy below the range where fast fission of one or more next-generation nuclei is probable. Doppler broadening of 238U's neutron absorption resonances, increasing absorption as fuel temperature increases, is an essential negative feedback mechanism for reactor control.\n\nUranium-233 is produced by neutron irradiation of thorium-232. When thorium-232 absorbs a neutron, it becomes thorium-233, which has a half-life of only 22 minutes. Thorium-233 beta decays into protactinium-233. Protactinium-233 has a half-life of 27 days and beta decays into uranium-233; some proposed molten salt reactor designs attempt to physically isolate the protactinium from further neutron capture before beta decay can occur. Uranium-233 usually fissions on neutron absorption but sometimes retains the neutron, becoming uranium-234. The capture-to-fission ratio is smaller than the other two major fissile fuels, uranium-235 and plutonium-239; it is also lower than that of short-lived plutonium-241, but bested by very difficult-to-produce neptunium-236. 234U occurs in natural uranium as an indirect decay product of uranium-238, but makes up only 55 parts per million of the uranium because its half-life of 245,500 years is only about 1/18,000 that of 238U.\n\nUranium-239 is usually produced by exposing 238U to neutron radiation in a nuclear reactor. 239U has a half-life of about 23.45 minutes and beta decays into neptunium-239, with a total decay energy of about 1.29 MeV. The most common gamma decay at 74.660 keV accounts for the difference in the two major channels of beta emission energy, at 1.28 and 1.21 MeV. 239Np then, with a half-life of about 2.356 days, beta-decays to plutonium-239.\n\nNatural uranium consists of three main isotopes, 238U (99.2739–99.2752% natural abundance), 235U (0.7198–0.7202%), and 234U (0.0050–0.0059%). All three isotopes are radioactive (i.e., they are radioisotopes), and the most abundant and stable is uranium-238, with a half-life of 4.463×109 years (about the age of the Earth). Uranium-238 is an alpha emitter, decaying through the 18-member uranium series into lead-206. The decay series of uranium-235 (historically called actino-uranium) has 15 members and ends in lead-207. The constant rates of decay in these series makes comparison of the ratios of parent-to-daughter elements useful in radiometric dating. Uranium-233 is made from thorium-232 by neutron bombardment. Uranium-235 is important for both nuclear reactors (energy production) and nuclear weapons because it is the only isotope existing in nature to any appreciable extent that is fissile in response to thermal neutrons, i.e., thermal neutron capture has a high probability of inducin\n\nUranium-232 has a half-life of 68.9 years and is a side product in the thorium cycle. It has been cited as an obstacle to nuclear proliferation using 233U, because the intense gamma radiation from 208Tl (a daughter of 232U, produced relatively quickly) makes 233U contaminated with it more difficult to handle. Uranium-232 is a rare example of an even-even isotope that is fissile with both thermal and fast neutrons. Uranium-233 is a fissile isotope that is bred from thorium-232 as part of the thorium fuel cycle. 233U was investigated for use in nuclear weapons and as a reactor fuel. It was occasionally tested but never deployed in nuclear weapons and has not been used commercially as a nuclear fuel. It has been used successfully in experimental nuclear reactors and has been proposed for much wider use as a nuclear fuel. It has a half-life of around 160,000 years.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://en.wikipedia.org/wiki/Isotopes_of_uranium",
        "search_provider": "anthropic",
        "age": "20 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "uranium-237 - Wikidata",
      "url": "https://www.wikidata.org/wiki/Q18845543",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "wikidata.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikidata.org",
        "site_name": "Wikidata"
      },
      "is_missing": false,
      "text": "neptunium-237 · decay mode · beta minus decay · proportion · 1.0 · 1 reference · retrieved · 9 November 2015 · reference URL · http://www.nndc.bnl.gov/nudat2/reCenter.jsp?z=92&amp;n=145 · edition number · 2.6 · stated in · NuDat · half-life · 6.75±0.01 day · 1 reference · retrieved ...\n\nneptunium-237 · decay mode · beta minus decay · proportion · 1.0 · 1 reference · retrieved · 9 November 2015 · reference URL · http://www.nndc.bnl.gov/nudat2/reCenter.jsp?z=92&n=145 · edition number · 2.6 · stated in · NuDat · half-life · 6.75±0.01 day · 1 reference · retrieved · 29 October 2015 · stated in · NuDat · reference URL · http://www.nndc.bnl.gov/nudat2/reCenter.jsp?z=92&n=145 · edition number · 2.6 · binding energy · 1,795,536.174±1.185 kiloelectronvolt · uncertainty corresponds to · standard deviation · 1 reference · reference URL · http://amdc.in2p3.fr/masstables/Ame2016/mass16.txt · retrieved · 1 March 2017 · stated in · The AME2016 atomic mass evaluation (I). Evaluation of input data; and adjustment procedures · The AME2016 atomic mass evaluation (II). Tables, graphs and references · archive URL ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.wikidata.org/wiki/Q18845543",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Uranium-237 - isotopic data and properties",
      "url": "https://www.chemlin.org/isotope/uranium-237",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "chemlin.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=chemlin.org",
        "site_name": "Chemlin"
      },
      "is_missing": false,
      "text": "After chemical separation, β-decay curves were recorded, revealing an activity with a characteristic half-life of about 6.5 days, which could be unambiguously assigned to 237U [1]. See also: List of individual Uranium isotopes (and general data sources). ... Half-life T½ = 6.752(2) d respectively ...\n\nThe first observation of the isotope 237U was reported in a 1940 publication: A uranium dioxide sample was irradiated with fast neutrons produced by bombarding lithium with 3-MeV deuterons (nuclei of hydrogen-2). In this process, the nuclide uranium-237 was formed via the reaction 238U(n,2n)237U. After chemical separation, β-decay curves were recorded, revealing an activity with a characteristic half-life of about 6.5 days, which could be unambiguously assigned to 237U [1]. See also: List of individual Uranium isotopes (and general data sources). ... Half-life T½ = 6.752(2) d respectively 5.83373 × 105 seconds s. Direct parent isotopes are: 241Pu, 237Pa. Nuclear isomers or excited states with the activation energy in keV related to the ground state. The following table shows the atomic nuclei that are isotonic (same neutron number N = 145) and isobaric (same nucleon number A = 237) with Uranium-237.\n\nProperties of the nuclide / isotope Uran-237",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.chemlin.org/isotope/uranium-237",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Uranium 237 has a half - life of about 6.78 days. If there are 10 grams of Uranium 237 now, how much will be left after 2 weeks?",
      "url": "https://www.toppr.com/ask/question/uranium-237-has-a-halflife-of-about-678-days-if-there-are-10-grams-of/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "toppr.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=toppr.com",
        "site_name": "Toppr"
      },
      "is_missing": false,
      "text": "Click here👆to get an answer to your question ✍️ Uranium 237 has a half - life of about 6.78 days. If there are 10 grams of Uranium 237 now, how much will be left after 2 weeks?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.toppr.com/ask/question/uranium-237-has-a-halflife-of-about-678-days-if-there-are-10-grams-of/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Neptunium-237 – Knowledge and References - Taylor & Francis",
      "url": "https://taylorandfrancis.com/knowledge/Engineering_and_technology/Chemical_engineering/Neptunium-237/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "taylorandfrancis.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=taylorandfrancis.com",
        "site_name": "Taylor & Francis"
      },
      "is_missing": false,
      "text": "Neptunium-237, which has along half-life of 2.14 × 106 years [1], is transmuted to 238Np through the neutron capture reaction. Since 238Np decays in only 2.117 days [1], it is expected to artificially accelerate the decay of long ...\n\nFinally, I0ʹ and I0 were derived from Equations (3) and (9) using the σ0 and s0 in consideration of systematic errors as described above. In the present work, the thermal-neutron capture cross-section σ0 was obtained as 186.9 ± 6.2 barn. The present results for the thermal-neutron capture cross-section σ0 and the resonance integral I0 are summarized in Table 9 together with the past reported values and evaluations. The evaluation value based on reported experimental data is 178.1 barn in JENDL-4.0 [16], and the present result is found to be about 5% larger than that. That is, 237Np tends to absorb thermal-neutrons by about 5% from the evaluated data. Neptunium-237, which has along half-life of 2.14 × 106 years [1], is transmuted to 238Np through the neutron capture reaction. Since 238Np decays in only 2.117 days [1], it is expected to artificially accelerate the decay of long lived 237Np nuclide.\n\nThe decay product, neptunium-237, is also radioactive with a two million year half-life.From: Japanese evaluated nuclear data library version 5: JENDL-5 [2023], An Introduction to Radiation Protection 6E [2019], Measurements of thermal-neutron capture cross-section and resonance integral of neptunium-237 [2019], Encyclopaedia of Medical Physics [2020] ... The research on this page is brought to you by Taylor & Francis Knowledge Centers. This collection is automatically generated from our most recent books and journals on this topic. ... [atomic, nuclear] Metallic element discovered in 1940. The first isotope was produced in the University of California, Berkeley by Edwin Mattison McMillian (1907–1991) and Philip Hauge Abelson (1913–2004) by bombarding uranium with slow moving neutrons, creating neptunium-239, with a half-life of approximately 2.3–2.4 days, decays to plutonium-239 by beta decay.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://taylorandfrancis.com/knowledge/Engineering_and_technology/Chemical_engineering/Neptunium-237/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Solved The half-life of uranium-237 is 6.75 days.What is the | Chegg.com",
      "url": "https://www.chegg.com/homework-help/questions-and-answers/half-life-uranium-237-675-days-decay-constant-su-q49637433",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "chegg.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=chegg.com",
        "site_name": "Chegg"
      },
      "is_missing": false,
      "text": "Answer to The half-life of uranium-237 is 6.75 days.What is the\n\nThe half-life of uranium-237 is 6.75 days. ... Here’s the best way to solve it. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.chegg.com/homework-help/questions-and-answers/half-life-uranium-237-675-days-decay-constant-su-q49637433",
        "search_provider": "anthropic",
        "age": "May 6, 2020"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Isotope data for uranium-237 in the Periodic Table",
      "url": "https://periodictable.com/Isotopes/092.237/index.p.full.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "periodictable.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=periodictable.com",
        "site_name": "Periodic Table"
      },
      "is_missing": false,
      "text": "Detailed decay information for the isotope uranium-237 including decay chains and daughter products.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://periodictable.com/Isotopes/092.237/index.p.full.html",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Section 12.0 Useful Tables",
      "url": "https://nuclearweaponarchive.org/Nwfaq/Nfaq12.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nuclearweaponarchive.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nuclearweaponarchive.org",
        "site_name": "The Nuclear Weapon Archive"
      },
      "is_missing": false,
      "text": "Half Life: 14.35 Y Specific Activity: 103.3 curie/g Radioisotopic Power: 0.01287 W/g Primary Mode of Decay: Beta to Am-241 · Decay Energy: 0.021 MeV Secondary Mode of Decay: Alpha to U-237 ... Critical mass: 12.3-13.0 kg (C4/TMR2001/200-1), 12 kg (Lovins; De Volpi), 9.03 kg (one-group calculation) ...\n\nHalf Life: 432.2 Y Specific Activity: 3.431 curie/g Radioisotopic Power: 0.1147 W/g Primary Mode of Decay: Alpha to Np-237 · Decay Energy: 5.638 MeV Secondary Mode of Decay: Spontaneous fission ... Neutron emission rate (N/sec/g) = 1. ... Critical mass: 58 kg (LA-UR-78-427), 57.6-75.6 kg (C4/TMR2001/200-1), 83.5 kg (Lovins; density adjusted), 23 kg (one-group calculation) --------------------------------------------------------------------------- REACTION 2200-m/s Maxw.Avg. Res.Integ 14-MeV Fiss.Avg.\n\nThe neutronic data is derived from the authoritative ENDF-VI evaluated nuclear data base compiled and maintained by the National Nuclear Data Center (NNDC) at the Brookhaven National Laboratory (BNL). The data listings below were prepared with the assistance of the Japan Atomic Energy Research Institute (JAERI). ... The Maxwellian average cross sections are for a peak neutron energy distribution at 0.0253 eV (a room temperature thermal distribution). Molar volume is the minimum volume per mole for the densest phase at standard pressure and temperature (STP) ... Critical mass estimates for the fissile isotopes are given for bare spheres at the densest STP phase. Where available these estimates are from other sources and are based either on actual experimental measurement, or reasonably sophisticated numerical computations. All fissile isotopes also include for comparison critical mass estimates made by me, using an exact criticality solution with a one-group representation of neutronic \n\nHalf Life: 12.33 years Specific Activity: 9613 curie/g Radioisotopic Power: 1.059 W/g Primary Mode of Decay: Beta to He-3 ... A principal thermonuclear fuel, best used in conjunction with deuterium (the D+T reaction is the easiest by far to ignite, as well as one of the most energetic). It is produced in place by tritium breeding reactions in thermonuclear weapons. It can also manufactured and loaded into weapons (with deuterium) for use in fusion boosting of fission weapons, as the neutron source in neutron bombs and neutron generators for commercial or weapons use. Tritium is a pure beta emitter. Due to weak radiation emissions, it is used in safe luminescent displays. This nuclide is useful for thickness gauge of thin plastics. ... This isotope is produced by the decay of tritium and so accumulates in fusion boosting reservoirs as an undesirable contaminant due to its high neutron absorption.\n\nAlthough the concept of the enhanced fallout \"cobalt bomb\", in which radioactive Co-60 is produced by fusion neutrons, is well known this isotope is not known to have been seriously considered for weapons applications. The 5.26 year half-life of Co-60 is too long to be of real military interest, which favors more intense shorter term effects. --------------------------------------------------------------------------- REACTION 2200-m/s Maxw.Avg. Res.Integ 14-MeV Fiss.Avg.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://nuclearweaponarchive.org/Nwfaq/Nfaq12.html",
        "search_provider": "anthropic",
        "age": "April 5, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "NuDat 3",
      "url": "https://www.nndc.bnl.gov/nudat3/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bnl.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bnl.gov",
        "site_name": "National Nuclear Data Center"
      },
      "is_missing": false,
      "text": "Datasets Half-life Decay Mode BE/A (BE-LDM Fit)/A Pair. Gap β2 B(E2)4→2/B(E2)2→0 Q-Values Qβ- QEC Qβ+ Qα ΔQα Q2β- Q2EC QECp Qβ-n Qβ-2n Separation Energies Sn Sp S2n S2p Excited States E1st ex. st. E2+ E2nd 2+ E3- E4+ E4+/E2+ Cross Sections σ(n,γ) σ(n,F) Independent Fission Yields 235U IFY 238U IFY 239Pu IFY 241Pu IFY 252Cf IFY Cumulative Fission Yields 235U cFY 238U cFY 239Pu cFY 241Pu cFY 252Cf cFY ... Display the 1D plots to the right (space permitting) or below the chart of nuclides. ... Click to select multiple nuclides. Then export selection as an image ... Half-life Decay Mode Qβ- QEC Qβ+ Qα ΔQα Q2β- Q2EC QECp Qβ-n Qβ-2n Sn Sp S2n S2p E1st ex. st. E2+ E3- E4+/E2+ Pairing Gap BE/A (BE-LDM Fit)/A β2 B(E2)4-&gt;2/B(E2)2-&gt;0 σ(n,γ) σ(n,F) 235U IFY 239Pu IFY 252Cf IFY ... E1st ex. st. ... J vs. E* plot · J vs. E(γ) plot ...\n\nDatasets Half-life Decay Mode BE/A (BE-LDM Fit)/A Pair. Gap β2 B(E2)4→2/B(E2)2→0 Q-Values Qβ- QEC Qβ+ Qα ΔQα Q2β- Q2EC QECp Qβ-n Qβ-2n Separation Energies Sn Sp S2n S2p Excited States E1st ex. st. E2+ E2nd 2+ E3- E4+ E4+/E2+ Cross Sections σ(n,γ) σ(n,F) Independent Fission Yields 235U IFY 238U IFY 239Pu IFY 241Pu IFY 252Cf IFY Cumulative Fission Yields 235U cFY 238U cFY 239Pu cFY 241Pu cFY 252Cf cFY ... Display the 1D plots to the right (space permitting) or below the chart of nuclides. ... Click to select multiple nuclides. Then export selection as an image ... Half-life Decay Mode Qβ- QEC Qβ+ Qα ΔQα Q2β- Q2EC QECp Qβ-n Qβ-2n Sn Sp S2n S2p E1st ex. st. E2+ E3- E4+/E2+ Pairing Gap BE/A (BE-LDM Fit)/A β2 B(E2)4->2/B(E2)2->0 σ(n,γ) σ(n,F) 235U IFY 239Pu IFY 252Cf IFY ... E1st ex. st. ... J vs. E* plot · J vs. E(γ) plot ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nndc.bnl.gov/nudat3/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Human Health Fact Sheet ANL, October 2001 Symbol: Np Atomic Number: 93",
      "url": "http://hpschapters.org/northcarolina/NSDS/neptunium.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "hpschapters.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=hpschapters.org",
        "site_name": "Hpschapters"
      },
      "is_missing": false,
      "text": "The half-lives · of these three isotopes range · from 1.1 to 2.1 million years, while those of the other isotopes · are less than five days. Of the · three, neptunium-237 is the most · prevalent isotope at DOE sites · such as Hanford. It has a half- life of 2.1 million years and · decays ...\n\nneptunium-239, which has a half-life of 2.4 days. This isotope was first · produced in 1940 in a cyclotron at the University of California at Berkeley by · bombarding uranium-238 with high-energy neutrons. Neptunium was the first transuranic element to be · formed and was named for the planet Neptune. Of the seventeen neptunium isotopes, only three have half-lives long enough to warrant concern at · Department of Energy (DOE) environmental management sites: neptunium-235, neptunium-236, and · neptunium-237. The half-lives · of these three isotopes range · from 1.1 to 2.1 million years, while those of the other isotopes · are less than five days. Of the · three, neptunium-237 is the most · prevalent isotope at DOE sites · such as Hanford. It has a half- life of 2.1 million years and · decays by emitting an alpha · particle with a small amount of ·\n\ndeposits in other soft tissues, and the rest is excreted, primarily in urine. The biological half-lives in the · skeleton and liver are about 50 and 20 years, respectively. (This information is per simplified models that do · not reflect intermediate redistribution.) The amount deposited in the liver and skeleton depends on the age of · the individual, with fractional uptake in the liver increasing with age. Neptunium in the skeleton is deposited · on bone surfaces and slowly redistributes throughout the bone volume over time. What Is the Primary Health Effect? Neptunium is generally a health hazard only if it is taken into the · body, although there is an external risk associated with the gamma rays emitted by neptunium-236 and to a · lesser degree by neptunium-237. The main means of exposure are ingestion of food and water containing · neptunium isotopes and inhalation of neptunium-contaminated dust.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "http://hpschapters.org/northcarolina/NSDS/neptunium.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Good. ²³⁷U half-life is confirmed as 6.75 days (NuDat: 6.752(2) days).

Now for ²³⁸U half-life: Wikipedia says 4.463×10⁹ years. The slide says 4.47×10⁹ years. Let me check this more carefully.

From Wikipedia: "the most abundant and stable is uranium-238, with a half-life of 4.463×10⁹ years"

More precise value from NNDC/AME: ~4.468×10⁹ years


The slide's value of 4.47×10⁹ years aligns well with the authoritative sources like IAEA/NNDC and NUBASE2020, which both cite 4.468 Ga, so this checks out.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T15:21:38.308075Z",
  "stop_timestamp": "2026-04-12T15:21:38.413388Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016VieNXUkyho5QkTUYc9hQw",
  "name": "web_search",
  "input": {
    "query": "uranium-238 half-life 4.468 4.47 billion years NUBASE NNDC"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_016VieNXUkyho5QkTUYc9hQw",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Uranium-238 - Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Uranium-238",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "wikipedia.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
        "site_name": "Wikipedia"
      },
      "is_missing": false,
      "text": "Doppler broadening of 238U&#x27;s neutron absorption resonances, increasing absorption as fuel temperature increases, is also an essential negative feedback mechanism for reactor control. The isotope has a half-life of 4.463 billion years (1.408×1017 s). Due to its abundance and half-life relative ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://en.wikipedia.org/wiki/Uranium-238",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Uranium-238 Atomic Number, Fission, Decay, Half-Life, Uses",
      "url": "https://www.chemistrylearner.com/uranium-238.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "chemistrylearner.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=chemistrylearner.com",
        "site_name": "Chemistry Learner"
      },
      "is_missing": false,
      "text": "Uranium-238 has a very long half life of 4.468 billon years. This material does not undergo fission unless struck by a high energy neutron. It collides with a neutron and turns into Uranium 239, which undergoes decay and produces Plutonium-239.\n\nHalf life is the time period taken by a radioactive substance to decay and reduce to the half of its original amount. Uranium-238 has a very long half life of 4.468 billon years. This material does not undergo fission unless struck by a high energy neutron. It collides with a neutron and turns into Uranium 239, which undergoes decay and produces Plutonium-239. This final radioactive isotope is highly useful in power plants. This radioactive metal has a very long half life. The Depleted Uranium (DU) is very heavy having a high density level. These properties make this substance useful in various industries. Fertile uranium-238 isotope is used in Breeder Reactors for its neutron capture ability. It produces fissile products like Plutonium- 239, which is used as a nuclear fuel to produce high amounts of energy. This technology is used in many experimental nuclear reactors.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.chemistrylearner.com/uranium-238.html",
        "search_provider": "anthropic",
        "age": "April 8, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How do we know the half-life of Uranium 238 is 4.5 billion years if we haven't been around long enough to test it? - Quora",
      "url": "https://www.quora.com/How-do-we-know-the-half-life-of-Uranium-238-is-4-5-billion-years-if-we-havent-been-around-long-enough-to-test-it",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "quora.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=quora.com",
        "site_name": "Quora"
      },
      "is_missing": false,
      "text": "Answer (1 of 19): A sample of natural Uranium ore can give us a rough idea. In it will also be the known decay products of its disintegration ,and their weight proportional to the remaining weight of U 238 will be an indication of how much decay has occurred over the life of the sample.Astrophysi...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.quora.com/How-do-we-know-the-half-life-of-Uranium-238-is-4-5-billion-years-if-we-havent-been-around-long-enough-to-test-it",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ChemTeam: Half-life problems involving uranium-238",
      "url": "https://www.chemteam.info/Radioactivity/Radioactivity-Half-Life-U238only.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "chemteam.info",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=chemteam.info",
        "site_name": "ChemTeam"
      },
      "is_missing": false,
      "text": "Assuming that radioactive decay of U-238 is the only source of Pb-206, estimate the rock&#x27;s age. Half life of U-238 radioactive disintegration is = 4.468 x 109 years. ... We could assume grams rather than milligrams, but let&#x27;s not. moles U-238 ---&gt; 0.06427 g / 238.0508 g/mol = 0.00026998 mol ...\n\nProblem #56: U-238 has a half-life of 4.468 x 109 years. How much U-238 should be present in a sample 2.50 x 109 years old, if 2.00 grams was present initially? (I found the U-238 half-life value here.) ... Problem #57: A sample of rock is known to contain the isotopes U-238 and Pb-206 in the mass ratio of 2:1. What is the age of the sample assuming all the Pb-206 has originated from the decay of U-238? The half-life of U-238 is 4.468 x 109 years. ... Assume 200. g of U-238 and 100. g of Pb-206. moles U-238 ---> 200. g / 238.0508 g/mol = 0.84016 mol moles Pb-206 ---> 100. g / 205.9745 g/mol = 0.48550 mol · At time zero, there was 1.32566 mole of U-238 and zero mole of Pb-206. 2) The percentage of U that remains in the present is this: ... Problem #58: A sample of rock contains 64.27 mg of U-238 (isotopic mass 238.0508 amu) and 22.66 mg of Pb-206 (isotopic mass 205.9745 amu).\n\nAssuming that radioactive decay of U-238 is the only source of Pb-206, estimate the rock's age. Half life of U-238 radioactive disintegration is = 4.468 x 109 years. ... We could assume grams rather than milligrams, but let's not. moles U-238 ---> 0.06427 g / 238.0508 g/mol = 0.00026998 mol moles Pb-206 ---> 0.02266 g / 205.9745 g/mol = 0.00011001 mol · At time zero, there was 0.00037999 mole of U-238 and zero mole of Pb-206. 2) The percentage of U that remains in the present is this: ... Problem #59: A rock is found contains uranium-238 and also lead-206. Scientist analyze the rock for these two elements and find that the total mass of uranium in the rock is 2.40 g, while the amount of lead is 1.11 g. How old is this rock? ... Assume 240. g of U-238 and 111 g of Pb-206. moles U-238 ---> 240. g / 238.0508 g/mol = 1.00819 mol moles Pb-206 ---> 111 g / 205.9745 g/mol = 0.53890 mol ·\n\nProblem #60: If the half-life of 238-U is 4.468 x 109 y and the half-life of 235-U is 7.04 x 108 y and the age of the Earth is 4.468 x 109 y and if the percentage of 238-U in the Earth is 99.3% and 235-U is 0.7% then what were their percentages when the Earth was formed? ... 1) Assume 100 g of present-day uranium is present. In it, there are 99.3 g of 238-U and 0.7 g of 235-U ... 238-U ⇒ 198.6 / 255.57 = 77.7% 235-U ⇒ 56.97 / 255.57 = 22.3% (I did this one by subtraction from 100%.) Problem #61: The half-life for the following process is 4.468 x 109 yr. ... A mineral sample contains 43.20 mg of U-238 and 14.50 mg of Pb-206. What is the age of the mineral? Here is another set of numbers for this problem: 40.60 mg of U-238 and 12.80 mg of Pb-206. Use those numbers to do a parallel calculation as you study the following explanation. ... Problem #62: A rock from Australia was found to contain 0.435 g of Pb-206 to every 1.00 g of U-238.\n\nAssuming that the rock did not contain any Pb-206 at the time of its formation, how old is the rock? The half life of U-238 is 4.468 x 109 years. ... There is a 1:1 molar ratio between U-238 decaying and Pb-206 forming. ... Problem #63: How much Pb-206 will be in a rock sample that is 1.3 x 108 years old and that contains 3.25 mg of U-238? ... The half-life of U-238 is 4.468 x 109 yr. 1.3 x 108 yr / 4.468 x 109 yr = 0.029098 (this is how many half-lives have elapsed) (1/2)0.029098 = 0.9800 (this is the decimal amount of U-238 remaining) ... This means 2.78513 x 10-7 mol of Pb-206 was formed. (2.78513 x 10-7 mol) (205.97 g/mol) = 0.0000573653 g ... Problem #64: U-238 has a half-life of 4.468 x 109 years. Estimates of the age of the universe range from 9 x 109 years to 23 x 109 years. What fraction of this isotope present at the start of the universe remains today?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.chemteam.info/Radioactivity/Radioactivity-Half-Life-U238only.html",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Uranium dating Uranium-238 (U-238) has a half-life of 4.5 billion... | Study Prep in Pearson+",
      "url": "https://www.pearson.com/channels/calculus/asset/4e6111e1/uranium-dating-uranium-238-u-238-has-a-half-life-of-45-billion-years-geologists-",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pearson.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pearson.com",
        "site_name": "Pearson"
      },
      "is_missing": false,
      "text": "Uranium dating Uranium-238 (U-238) has a half-life of 4.5 billion years. Geologists find a rock containing a mixture of U-238 and lead, and they determine that 85% of the original U-238 remains; the other 15% has decayed into lead.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.pearson.com/channels/calculus/asset/4e6111e1/uranium-dating-uranium-238-u-238-has-a-half-life-of-45-billion-years-geologists-",
        "search_provider": "anthropic",
        "age": "July 23, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Flexi answers - <p>Uranium-238 decays very slowly, with a half-life of 4.47 billion years. What percentage of a sample of uranium-238 would remain after 13.4 billion years?</p> | CK-12 Foundation",
      "url": "https://www.ck12.org/flexi/physical-science/Half-Life-in-Chemistry/uranium-238-decays-very-slowly-with-a-half-life-of-4-47-billion-years-what-percentage-of-a-sample-of-uranium-238-would-remain-after-13-4-billion-years/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ck12.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ck12.org",
        "site_name": "CK-12 Foundation"
      },
      "is_missing": false,
      "text": "The half-life of Uranium-238 is 4.47 billion years. This means that after 4.47 billion years, half of the Uranium-238 atoms will have decayed, and half will remain. After 13.4 billion years, which is three half-lives (13.4 billion years ÷ 4.47 billion years per half-life = 3 half-lives), the ...\n\nThe half-life of Uranium-238 is 4.47 billion years. This means that after 4.47 billion years, half of the Uranium-238 atoms will have decayed, and half will remain. After 13.4 billion years, which is three half-lives (13.4 billion years ÷ 4.47 billion years per half-life = 3 half-lives), the amount of Uranium-238 remaining would be: @$$\\begin{align*}\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8} = 0.125\\end{align*}@$$ or 12.5%. So, after 13.4 billion years, 12.5% of the original sample of Uranium-238 would remain.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.ck12.org/flexi/physical-science/Half-Life-in-Chemistry/uranium-238-decays-very-slowly-with-a-half-life-of-4-47-billion-years-what-percentage-of-a-sample-of-uranium-238-would-remain-after-13-4-billion-years/",
        "search_provider": "anthropic",
        "age": "September 11, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How To Obtain the Half-Life for Long-Lived Radionuclides",
      "url": "https://hps.org/publicinformation/ate/q8270/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "hps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=hps.org",
        "site_name": "HPS"
      },
      "is_missing": false,
      "text": "Learn how scientists determined the half-life of 238U, a primordial radionuclide, to be about 4.5 billion years including the measurement error.\n\nA = 1014 cpm/0.315 c d-1 = 3219 dpm = λ N = (ln2/T1/2)(4.41 x 10-3 g/238.03 g/g-atomic weight)(6.022 x 1023 atoms/g-atomic weight). If we solve for T1/2 we obtain T1/2 = 2.40 x 1015 minutes = 4.57 x 109 years. This would compare to the presently accepted value of 4.468 x 109 years. See the Chart of the Nuclides on the Brookhaven National Laboratory site. The estimated uncertainty in this value is approximately 3 x 106 years. Naturally, the numbers used in the example were contrived, and the uncertainty in the result would have to consider all the uncertainties involved in the measurement. We have also not considered the complication associated with possible interference from 234U, which also occurs in natural uranium and also decays by alpha emission. Counting using alpha particle energy spectrometry is effective in separating the alpha particles from the two uranium isotopes.\n\nHow did scientists determine the half-life of 238U, a primordial radionuclide, to be about 4.5 billion years and what is the measurement error for this half-life? As you have apparently inferred, when a radionuclide has a half-life that is long compared to the time interval over which radioactive decay observations are possible, the overall decay rate remains substantially the same and experimental measurements of the change in the activity of a given sample with time are not sufficiently precise to allow determination of the half-life. In such instances, one must employ alternative techniques to evaluate the half-life. In the case of 238U and some other long-lived radionuclides, one approach that has been used is to separate a pure sample of the radionuclide in a known chemical form, weigh the sample, and then measure the activity, A (disintegration rate).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://hps.org/publicinformation/ate/q8270/",
        "search_provider": "anthropic",
        "age": "May 7, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Flexi answers - How long is uranium-238's half-life? | CK-12 Foundation",
      "url": "https://www.ck12.org/flexi/physical-science/radioactive-dating-in-chemistry/how-long-is-uranium-238's-half-life/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ck12.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ck12.org",
        "site_name": "CK-12 Foundation"
      },
      "is_missing": false,
      "text": "Uranium-238 has a half-life of about 4.5 billion years. That&#x27;s a really long time! It&#x27;s one of the reasons uranium-238 is used to date rocks and understand the age of the Earth. 🌍",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.ck12.org/flexi/physical-science/radioactive-dating-in-chemistry/how-long-is-uranium-238's-half-life/",
        "search_provider": "anthropic",
        "age": "September 11, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Half life - Energy Education",
      "url": "https://energyeducation.ca/encyclopedia/Half_life",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "energyeducation.ca",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=energyeducation.ca",
        "site_name": "Energy Education"
      },
      "is_missing": false,
      "text": "Uranium-238 has a half life of 4.51 billion years.[2] This means that it would take billions of years for uranium-238 to decay into a ratio of half uranium-238 and half thorium-234.[4] Uranium-235 (another naturally occurring isotope of uranium) has a shorter half life than uranium-238, that&#x27;s ...\n\nSome radioactive elements have half of their unstable nuclei decay in much less than one second. For example, krypton-101 has a half life of about a ten millionth of a second.[4] In contrast, some elements have extraordinarily long half lives and take billions of years to decay. Uranium-238 has a half life of 4.51 billion years.[2] This means that it would take billions of years for uranium-238 to decay into a ratio of half uranium-238 and half thorium-234.[4] Uranium-235 (another naturally occurring isotope of uranium) has a shorter half life than uranium-238, that's only ~700 million years.[4] There is an equation that is frequently used to determine how much of a certain radioactive substance remains after a given time has passed. This is determined from properties such as the half life of the substance, and how much of the substance there was initially.\n\n↑ 4.0 4.1 4.2 Chart of the nuclides. (July 24, 2015). Half-Life [Online]. Available; http://www.nndc.bnl.gov/chart/reCenter.jsp?z=92&n=143 ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://energyeducation.ca/encyclopedia/Half_life",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Uranium-238 has a half-life of 4.47 * 109 years and decays - McMurry 8th Edition Ch 20 Problem 70",
      "url": "https://www.pearson.com/channels/general-chemistry/textbook-solutions/mcmurry-8th-edition-9781292336145/ch-19-nuclear-chemistry/uranium-238-has-a-half-life-of-4-47-109-years-and-decays-through-a-series-of-eve",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pearson.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pearson.com",
        "site_name": "Pearson"
      },
      "is_missing": false,
      "text": "Uranium-238 has a half-life of 4.47 * 109 years and decays through a series of events to yield lead-206. Estimate the age of a rock that contains 105 mmol of 238U and 33 mmol of 206Pb.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.pearson.com/channels/general-chemistry/textbook-solutions/mcmurry-8th-edition-9781292336145/ch-19-nuclear-chemistry/uranium-238-has-a-half-life-of-4-47-109-years-and-decays-through-a-series-of-eve",
        "search_provider": "anthropic",
        "age": "July 23, 2022"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

So for ²³⁸U half-life:
- NNDC/BNL: 4.468 × 10⁹ years (most authoritative)
- Wikipedia U-238: 4.463 × 10⁹ years
- Various educational sources: 4.47 × 10⁹ years

The slide says 4.47 × 10⁹ years. This is a rounded value that is consistent with 4.468 rounded to 3 significant figures. It's not incorrect per se — it's a commonly used rounded approximation. 

The difference between the NNDC value of 4.468 Ga and Wikipedia's 4.463 Ga comes from different nuclear data evaluations, but the slide's 4.47 × 10⁹ is just a rounded form of the more precise NNDC value, so that's acceptable.

Now I'm looking at other potential issues in the slide, starting with the surrogate reaction formula and how it's being applied.

The Hauser-Feshbach formula looks correct—it's summing over all possible spin-parity states J and π, where σ_CN represents the compound nucleus formation cross section and P_decay gives the probability that the excited compound nucleus decays into the desired channel. The surrogate reaction setup also checks out: both the direct reaction (neutron on ²³⁷U) and the surrogate (alpha on ²³⁸U) produce the same excited compound nucleus ²³⁸U*, which is the key requirement for this approach to work.

The spectroscopic factor notation C²S is standard—C being the isospin Clebsch-Gordan coefficient and S the single-particle factor. The tensor force's influence on shell evolution is well-documented from Otsuka's work, and the erosion of magic numbers in neutron-rich isotopes like those in the island of inversion is firmly established.

Active-target TPCs function as described—the gas serves simultaneously as target and detector, enabling thick-target luminosity measurements with complete kinematic reconstruction. The TB-scale data claim is qualitative but consistent with current experimental capabilities.

Now I'm double-checking the ²³⁸U half-life value. The slide gives 4.47 × 10⁹ years, which appears to be a reasonable rounding of the more precise NNDC value around 4.468 × 10⁹ years. Let me verify this against other authoritative sources to confirm the precision is acceptable. The compound nucleus ²³⁸U* forms in both reactions, which makes physical sense for a surrogate reaction setup. Now I'm checking the authorship details more carefully—I'm seeing "Jason T. Harke" in one source and "J.T. Burke" in another, so I need to verify which is correct from the original APS article itself. Looking at the formula more carefully, I notice the slide uses a branching ratio notation that differs from the standard Hauser-Feshbach formalism — it should express the decay probability in terms of the specific decay channel rather than just a generic decay function. Let me verify the half-life value for ²³⁸U is within acceptable precision, and check whether the other factual claims hold up. just with different notation. Now I'm going through the key claims to verify them: the Escher citation checks out, the ²³⁷U half-life of 6.75 days is confirmed, and the ²³⁸U value of 4.47×10⁹ years is a reasonable rounding even though different sources give slightly different precision. The surrogate method formula itself is correct in form, and I'm working through the remaining details. The rounding checks out — 4.468 rounds to 4.47 at three significant figures, so the slide value is acceptable, though there's a minor discrepancy with Wikipedia's 4.463 value that would round differently. Looking at the overall fact-check, the citation and ²³⁷U half-life both check out, and the only real issue is this minor source inconsistency on the ²³⁸U half-life. (NNDC: 6.752±0.002 d)
3. Magic numbers erode in neutron-rich nuclei ✓
4. Tensor NN force contributes to shell evolution / shape coexistence ✓  
5. (d,p)/(p,d) → C²S, Jπ ✓
6. Surrogate reactions constrain r-process (n,γ) rates ✓
7. Active-target TPC: gas = target + detector → thick-target luminosity, full kinematics ✓
8. The surrogate formula structure ✓

**MINOR DISCREPANCY:**
- ²³⁸U half-life: The slide uses 4.47×10⁹ years, which is the rounded textbook value, but the most authoritative source—NNDC NuDat—gives 4.468×10⁹ years. There's some scatter across the literature: Wikipedia cites 4.463 Ga, NUBASE lists 4.468 Ga, and older sources go as high as 4.51 Ga. The discrepancy is minor since 4.468 rounds to 4.47 at three significant figures, though some sources do report 4.463.

Now I'm checking the nuclear reaction formula notation more carefully. The cross section uses σ_CN to denote the compound nucleus, and the reactant is neutron plus...

Actually, let me verify the mass numbers match up. In the n + ²³⁷U → ²³⁸U* reaction, the target is A = ²³⁷U and the compound nucleus B* = ²³⁸U*, which means B has mass number 238. The formula notation with "n+A" for the entrance channel is consistent with this diagram.

Now I'm thinking about what the (n,γ) notation means in the context of the slide. The surrogate method is specifically designed to measure radiative neutron capture cross sections for short-lived nuclei that can't be studied directly, which is exactly what the r-process needs to constrain its neutron capture rates. Looking at the diagram, the desired reaction shows a neutron hitting ²³⁷U to form the compound nucleus ²³⁸U*, and then various decay channels emerge. The surrogate reaction at the bottom uses an alpha particle instead, but should produce the same compound nucleus through a different entrance channel.

The target nuclei are correctly chosen—²³⁷U is short-lived (6.75 days) and impractical as a target, so the surrogate uses stable ²³⁸U instead. Both pathways form ²³⁸U*, which is the whole point of the surrogate method. The physics here checks out, and I don't see any significant errors in how the method is being presented.

</details>

Here is a systematic fact-check of every verifiable claim in the slide, separated by evidence type.

---

## ✅ Confirmed Correct

**Citation — Escher et al., Rev. Mod. Phys. 84, 353 (2012)**
Confirmed: the paper "Compound-nuclear reaction cross sections from surrogate measurements" by Jutta E. Escher et al. was published in Rev. Mod. Phys. 84, 353, on 13 March 2012. Volume, page, and year all match.

**²³⁷U half-life = 6.75 days**
Confirmed via NNDC/NuDat: ²³⁷U half-life = 6.75 ± 0.01 days. The more precise value is 6.752(2) days; the slide's 6.75 is correct to 3 sig figs.

**Shell evolution: magic numbers erode in neutron-rich nuclei**
Well-established experimentally (e.g., disappearance of N=20 in the "island of inversion," N=28 quenching). No controversy here.

**Tensor NN force drives shell evolution and coexisting deformations**
Well established in the literature (Otsuka et al. 2005, 2010; PRL and PRC). Correctly attributed.

**(d,p)/(p,d) reactions → C²S, Jπ**
Standard result: transfer reactions extract spectroscopic factors C²S (isospin Clebsch–Gordan coefficient C times single-particle spectroscopic factor S) and spin-parity Jπ. Notation and physics correct.

**Surrogate reactions constrain r-process (n,γ) rates**
Confirmed as a primary motivation in the Escher et al. RMP review and broader literature.

**Active-target TPC: gas = target + detector → thick-target luminosity, full kinematics**
Correct description of the active-target principle (e.g., AT-TPC at FRIB, ACTAR-TPC at GANIL).

**The surrogate formula structure**
σ(n,x) = Σ_{J,π} σ_CN(n+A; Jπ) × P_decay(B\*; Jπ) reproduces the standard Hauser–Feshbach/surrogate decomposition as presented in the cited Escher et al. review. Notation is self-consistent with the diagram (n + ²³⁷U → ²³⁸U\* = B\*).

**The surrogate reaction diagram (α + ²³⁸U inelastic → α + ²³⁸U\*)**
Physically valid: both the desired reaction (n + ²³⁷U) and the surrogate (α + ²³⁸U inelastic) form the same compound nucleus ²³⁸U\*, which is the foundational requirement of the surrogate method.

---

## ⚠️ Minor Discrepancy: ²³⁸U Half-Life (4.47 × 10⁹ yr)

The slide states **4.47 × 10⁹ years**. This sits in a zone of source-dependent variation:

| Source | Value |
|---|---|
| NNDC NuDat / NUBASE2020 | **4.468 × 10⁹ yr** |
| Wikipedia (²³⁸U article) | **4.463 × 10⁹ yr** |
| BNL Chart of the Nuclides (cited by HPS) | **4.468 × 10⁹ yr** |
| Slide | **4.47 × 10⁹ yr** |

**Assessment:** The NNDC authoritative value (4.468 Ga) rounds to **4.47** at 3 significant figures, so the slide value is internally consistent with NNDC. However, some evaluations (e.g., Wikipedia citing 4.463 Ga) round to **4.46**, not 4.47. This is not a factual error — it is a rounding choice — but it is worth noting that the most precise primary source value is **4.468 × 10⁹ yr** (NNDC NuDat), not exactly 4.47.

---

## 🔍 Unverifiable / Qualitative Claims

- **"Several TB of raw data per run"** — a plausible operational statement for modern TPC experiments at rare-isotope facilities, but no primary source is cited and exact figures vary by experiment. Presented as-is with no attribution; flagged as an assertion.
- **"Tensor NN force drives coexisting deformations"** — scientifically mainstream but attributed to no specific primary reference on the slide.

---

## Summary

No outright factual errors were found. The only substantive precision issue is the ²³⁸U half-life (4.47 vs. the most precise NNDC value of 4.468 × 10⁹ yr — a rounding artefact, not an error). The citation, both half-lives, the surrogate formula, and the reaction diagrams are all consistent with primary sources.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8248-31f4-7cc3-8a69-81f47ce714da",
  "updated_at": "2026-04-12T15:23:01.866275Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8248-31f4-7a84-bfca-23c88f2618e0"
}
```

</details>

### 3. human — 2026-04-12T15:25:05.622045Z

So the citation is for the formula only?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d824b-e17a-71c6-887b-d2d4d05aa8a8",
  "updated_at": "2026-04-12T15:25:05.622045Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8248-31f4-7cc3-8a69-81f47ce714da"
}
```

</details>

### 4. assistant — 2026-04-12T15:25:22.935461Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking whether the Escher et al. citation at the bottom of the slide is only for the formula, or if it also covers the diagram.

Looking at the slide again: the citation "Escher et al., Rev. Mod. Phys. 84, 353 (2012)" appears at the bottom right, below the formula σ(n,x) = Σ_{J,π} σ_CN(n+A; Jπ) × P_decay(B*; Jπ). 

The diagram showing the surrogate reaction method (with the U-237/U-238 example) is positioned above the formula. The citation is placed directly under the formula.


Since the Escher et al. paper is a comprehensive review of the surrogate method, it covers both the conceptual framework illustrated in the diagram and the mathematical formulation of the formula. While the citation's placement below the formula might suggest it's specifically for that equation, it likely references both elements — the diagram represents the core concept from the review, and the formula is the mathematical expression of that method.

</details>

Good catch — that's a citation **placement** ambiguity worth flagging.

The Escher et al. RMP review is a comprehensive treatment of the entire surrogate reaction method, so it substantiates **both** the diagram and the formula. The paper covers the conceptual setup (desired vs. surrogate reaction, forming the same compound nucleus), the experimental techniques, and the mathematical formalism including exactly that decomposition formula.

However, as the slide is laid out, the citation sits **directly beneath the formula** and is visually detached from the diagram above it. A reader could reasonably interpret it as supporting only the formula, leaving the diagram's source unattributed.

The practical consequence depends on context:

- **In a paper**: this would be a citation-placement issue — the diagram illustration (or its original source) should be credited separately, or the citation should be moved to cover the whole right panel.
- **In a presentation slide**: it's a lesser concern, but still somewhat misleading if the diagram was adapted from a specific figure in Escher et al. or from another source entirely. If the diagram was drawn by the authors independently, no citation is needed for it, but that should be implicit from context.

So to directly answer your question: **based on placement alone, yes, it reads as if the citation covers only the formula** — but the content of the cited paper actually supports the diagram as well. The slide would be clearer if the citation were repositioned to visually cover the entire right panel, or if a separate figure credit were added for the diagram.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d824b-e17a-7417-9c59-d1673e633eb1",
  "updated_at": "2026-04-12T15:25:22.935461Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d824b-e17a-71c6-887b-d2d4d05aa8a8"
}
```

</details>
