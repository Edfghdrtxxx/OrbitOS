# LISE++ open source status

## Export metadata (verbatim)

```json
{
  "uuid": "248137d2-6ea2-4316-9d0b-59d08329d7e6",
  "name": "LISE++ open source status",
  "summary": "**Conversation Overview**\n\nThe person asked about the licensing status of LISE++ (the radioactive ion beam simulation software developed at MSU/FRIB by Tarasov and Bazin), specifically whether it is open source. Claude clarified that LISE++ is freeware rather than open source — freely downloadable and distributable, but distributed only as a compiled executable without public access to source code. Claude also noted that the `lanl/LISE` repository on GitHub is an unrelated project (a nuclear DFT/SLDA solver from Los Alamos).\n\nThe person then asked how to use Claude Code to programmatically control LISE++. Claude outlined three approaches in order of practicality: file-based I/O (reading and writing `.lpp` configuration files and parsing LISE++ output files), command-line/batch mode (checking whether LISE++ supports headless execution via CLI flags), and GUI automation as a last resort using tools like `pyautogui`, `pywinauto`, or `xdotool`. Claude recommended starting with the file-based approach — having Claude Code reverse-engineer the `.lpp` format from existing files, generate new configurations by varying parameters, and parse output results. The conversation ended with Claude asking whether the person wanted help reverse-engineering the `.lpp` format or had a specific workflow in mind, such as optimizing separator settings or batch PID simulations. The domain involves nuclear physics instrumentation and fragment separator simulation.",
  "created_at": "2026-03-17T02:50:34.452621Z",
  "updated_at": "2026-03-17T03:05:51.616564Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-17T02:50:35.650066Z

Do you know whether LISE++ is open source?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cf9b3-c7e9-7367-beeb-aeebc8c9fd6c",
  "updated_at": "2026-03-17T02:50:35.650066Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-17T02:50:46.386629Z

 

<details>
<summary>Thinking (verbatim)</summary>

Let me search for this information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-17T02:50:36.923772Z",
  "stop_timestamp": "2026-03-17T02:50:36.983861Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01PGEopfLS61xSM6GuR1PwSr",
  "name": "web_search",
  "input": {
    "query": "LISE++ open source"
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
  "tool_use_id": "toolu_01PGEopfLS61xSM6GuR1PwSr",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - lanl/LISE",
      "url": "https://github.com/lanl/LISE",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "The LISE software library dependencies are widely supported on HPC systems worldwide, and there exist open-source versions of each, except for NVIDIA&#x27;s &#x27;mvcc&#x27; which is proprietary, that can be built on Linux server clusters.\n\nA copy of the programs is left in the respective directories './LISE-SLDAsolver', './LISE-TDSLDA'. 'clean' removes the objects and programs from these directories only, not from './bin'. The programs in './bin' are overwritten on subsequent builds. NOTES: --Implicit function resolution: --Underscores and (Sca)LAPACK installations: --Implicit function resolution: A function that is used somewhere in a code but is not prototyped or declared is known as an implicit function. Such functions are implicitly declared on first use, must be resolved during linking, and the argument types must match those linked into the program text. On most high-capability supercomputers deployed in the US DOE system, the vendors or specific labs provide a packaged configuration software ecosystem that includes a proprietary branch of an open-source Linux server operating system, language compilers, network semantics, and a software stack that normally includes prebuilt versions of all LISE dependencies.\n\nThe LISE software library dependencies are widely supported on HPC systems worldwide, and there exist open-source versions of each, except for NVIDIA's 'mvcc' which is proprietary, that can be built on Linux server clusters. No reference versions of these libraries are packaged with the LISE software. References for obtaining the required software are provided for convenience. Most vendors provide a highly tuned variant of each library. However, installation-specific modifications to header files, routine names, apis, variable types, and routine parameters are not uncommon -see the build examples for more details.\n\nContribute to lanl/LISE development by creating an account on GitHub.\n\n'./LISE-SLDAsolver': directory that contains the source codes and a default makefile for the LISE solver program; './LISE-SLDAsolver/builds' contains successful 'LISE.defs' and makefiles for a couple of target platforms · './LISE-TDSLDA': directory that contains the source codes and a default makefile for the LISE time-dependent programs; './LISE-TDSLDA/builds' contains successful 'LISE.defs' and makefiles for a couple of target platforms · './LISE-TESTS': directory that contains the LISE build acceptance tests ('./LISE-TESTS/O20'), prototype problem examples ('./LISE-TESTS/Collisions_238U', './LISE-TESTS/Fission_240Pu'), and 'README.txt' for clarifications · './LISE.defs': users should only need to edit this file to set the variables and software paths for including and linking the LISE software dependencies · './Makefile': generic makefile structure that should not need to be edited; default case imports 'LISE.defs' specified for 'summit.olcf.ornl.gov' target ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/lanl/LISE",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LISE++ : Rare Isotope Beam Production",
      "url": "https://lise.frib.msu.edu/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "msu.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=msu.edu",
        "site_name": "Msu"
      },
      "is_missing": false,
      "text": "We cannot provide a description for this page right now",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://lise.frib.msu.edu/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LISE++ - Wikipedia",
      "url": "https://en.wikipedia.org/wiki/LISE++",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "wikipedia.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
        "site_name": "Wikipedia"
      },
      "is_missing": false,
      "text": "The program LISE++ is designed to predict the intensity and purity of radioactive ion beams (RIB) produced by In-flight separators. LISE++ also facilitates the tuning of experiments where its results can be quickly compared to on-line data. The program is constantly expanding and evolving from ...\n\nThe program LISE++ is designed to predict the intensity and purity of radioactive ion beams (RIB) produced by In-flight separators. LISE++ also facilitates the tuning of experiments where its results can be quickly compared to on-line data. The program is constantly expanding and evolving from the feedback of its users around the world. The aim of LISE++ is to simulate the production of RIBs via some type of nuclear reactions (several are available in the program), between a beam of stable isotopes and a target. The program simulates the characteristics of the nuclear reactions based on well-established models, as well as the effects of the filtering device located downstream of the target used to create the RIBs. The LISE++ name is borrowed from the well known evolution of the C programming language, and is meant to indicate that the program is no longer limited to a fixed configuration like it was in the original “LISE” program, but can be configured to match any type of device or ad\n\nThe LISE++ package includes configuration files for most of the existing fragment and recoil separators found in the world (examples of fragment separators whose configurations are available in LISE++). Projectile fragmentation, fusion–evaporation, fusion–fission, Coulomb fission, abrasion–fission and two body nuclear reactions models are included in this program and can be used as the production reaction mechanism to simulate experiments at beam energies above the Coulomb barrier. LISE++ can be used not only to forecast the yields and purities of radioactive beams, but also as an on-line tool for beam identification and tuning during experiments. Large progress has recently been done in ion-beam optics with the introduction of \"elemental\" blocks, that allows optical matrices calculation within LISE++. New type of configurations based on these blocks allow a detailed analysis of the transmission, useful for fragment separator design, and can be used for optics optimization based on use\n\nMany “satellite” tools have been incorporated into the LISE++ framework, which are accessible with buttons on the main toolbar and include: ... The program PACE4 (fusion-evaporation code) by A. Gavron et al. Spectrometric calculator by J. Kantele · The program CHARGE (charge state distribution code) by Th. Stöhlker et al. The program GLOBAL (charge-state distribution code) by W. E. Meyerhof et al. ... MOTER by H.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://en.wikipedia.org/wiki/LISE++",
        "search_provider": "anthropic",
        "age": "December 29, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "AUR (en) - lise-app",
      "url": "https://aur.archlinux.org/packages/lise-app",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "archlinux.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=archlinux.org",
        "site_name": "Arch Linux"
      },
      "is_missing": false,
      "text": "https://lise.nscl.msu.edu/download/Linux/lise-app_v17.7.run · https://lise.nscl.msu.edu/picture/emblem_little.gif · lise-app.desktop · lise-app.sh · aurweb v6.2.16 · Report issues here. Copyright © 2004-2025 aurweb Development Team. AUR packages are user produced content.\n\nhttps://lise.nscl.msu.edu/download/Linux/lise-app_v17.7.run · https://lise.nscl.msu.edu/picture/emblem_little.gif · lise-app.desktop · lise-app.sh · aurweb v6.2.16 · Report issues here. Copyright © 2004-2025 aurweb Development Team. AUR packages are user produced content.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aur.archlinux.org/packages/lise-app",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LISE++ : design your own spectrometer - ScienceDirect",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0375947404010048",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "sciencedirect.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
        "site_name": "ScienceDirect"
      },
      "is_missing": false,
      "text": "The LISE++ package already includes configuration files for most of the existing fragment and recoil separators such as the A1900 and the S800 at the NSCL, LISE3 at GANIL, FRS and SuperFRS at GSI, BigRIPS and RIPS at RIKEN. Projectile fragmentation, fusion–evaporation, fusion–fission, Coulomb fission, abrasion–fission and two body reactions models are included in this program and can be used as the production reaction mechanism to simulate experiments at beam energies above the Coulomb barrier. This program can be downloaded free of charge from the following web site: &lt;http://www.nscl.msu.edu/lise&gt;. 2007, Journal of Physics G Nuclear and Particle Physics ... Applied Radiation and Isotopes, Volume 114, 2016, pp. 173-178 · T. Nemes, …, S. Grujic ... Anel Beganović, …, Christian W. Huck · Physics Letters B, Volume 779, 2018, pp. 124-129 · B.\n\nIn 1998 the program went through a number of significant changes and was ported to the “Windows” environment. LISE++ [4,5] was developed in 2001 and denotes the new generation, where users can create a separator through the use of different optical and material elements called “blocks”. The last years of the LISE++ development were devoted mostly to the implementation of different reaction mechanisms to make LISE++ able to simulate radioactive nuclear beams produced with in-flight fission. ... The program LISE++ is designed to predict intensity and purity for future experiments using radioactive beams with in-flight separators, and for tuning experiments where its results can be quickly compared to on-line data. The name LISE++ denotes the new generation of the LISE program, in which any separator can be built through the use of different sections labeled “blocks”. Its user-friendly interface can be used to quickly construct many separator configurations from the available blocks.\n\nAuthor links open overlay panelO.B. Tarasov a b, D. Bazin aShow more ... The program LISE is designed to predict intensities and purities for the planning of future experiments with in-flight separators, as well as for beam tuning during experiments where its results can be quickly compared to on-line data. LISE++ is the new generation of the LISE code, which allows the creation of a spectrometer through the use of different sections (dispersive section, velocity filter, electrostatic separator and gas-filled separator ...) called \"blocks\". The code has an improved interface, new utilities, and a spectrometer schematics which allows a quick editing of blocks. The code can be freely downloaded from the following sites: http://www.nscl.msu.edu/lise or http://dnr080.jinr.ru/lise. Check access to the full text by signing in through your organization.Access through your organization ...\n\nThe LISE++ package already includes configuration files for most of the existing fragment and recoil separators such as the A1900 and the S800 at the NSCL, LISE3 at GANIL, FRS and SuperFRS at GSI, BigRIPS and RIPS at RIKEN. Projectile fragmentation, fusion–evaporation, fusion–fission, Coulomb fission, abrasion–fission and two body reactions models are included in this program and can be used as the production reaction mechanism to simulate experiments at beam energies above the Coulomb barrier. This program can be downloaded free of charge from the following web site: <http://www.nscl.msu.edu/lise>. 2007, Journal of Physics G Nuclear and Particle Physics ... Applied Radiation and Isotopes, Volume 114, 2016, pp. 173-178 · T. Nemes, …, S. Grujic ... Anel Beganović, …, Christian W. Huck · Physics Letters B, Volume 779, 2018, pp. 124-129 · B.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0375947404010048",
        "search_provider": "anthropic",
        "age": "November 19, 2004"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LISE++ Software Updates and Future Plans",
      "url": "https://inspirehep.net/literature/1414009",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "inspirehep.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=inspirehep.net",
        "site_name": "INSPIRE"
      },
      "is_missing": false,
      "text": "You need to enable JavaScript to run this app",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://inspirehep.net/literature/1414009",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Nuclear Data Needs for LISE++ O.B.Tarasov@WANDA.US; 01/25/2021 1 Contents",
      "url": "https://conferences.lbl.gov/event/504/contributions/4098/attachments/3111/1734/LISE.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "lbl.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=lbl.gov",
        "site_name": "Lbl"
      },
      "is_missing": false,
      "text": "The LISE++ package (including codes PACE4, Global, Charge, MOTER, ETACHA4, GEMINI++, Spectroscopic · Calculator) operating on Windows, macOS, Linux environment · The LISE++ package is maintained by LISE++ group @ Michigan State University and is freely available and · distributable through the LISE++ website: &lt;http://lise.nscl.msu.edu&gt; Fragment Separator Construction and Transmission calculations ...\n\nThe LISE++ package (including codes PACE4, Global, Charge, MOTER, ETACHA4, GEMINI++, Spectroscopic · Calculator) operating on Windows, macOS, Linux environment · The LISE++ package is maintained by LISE++ group @ Michigan State University and is freely available and · distributable through the LISE++ website: <http://lise.nscl.msu.edu> Fragment Separator Construction and Transmission calculations ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://conferences.lbl.gov/event/504/contributions/4098/attachments/3111/1734/LISE.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The application on the left side is the LISE ++ Utilities Package which... | Download Scientific Diagram",
      "url": "https://www.researchgate.net/figure/The-application-on-the-left-side-is-the-LISE-Utilities-Package-which-launches-the-Qt_fig5_288021581",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "Download scientific diagram | The application on the left side is the LISE ++ Utilities Package which launches the Qt ISO C++ versions of the satellite utilities. On the right side is an example of a PACE4 calculation using the new package. from publication: LISE++ Software Updates and Future Plans | This paper describes capabilities and future upgrade plans for the isotope production and simulation software that is used at many in-flight fragmentation facilities, namely LISE++. We highlight the process and methods of updating the software while retaining the... | Computation and clinical coding | ResearchGate, the professional network for scientists.\n\nSource publication · LISE++ Software Updates and Future Plans · Article · Full-text available · Dec 2015 · Michelle Perry Kuchera · Oleg Borisovich Tarasov · D. Bazin · [...] KV Tarasova · This paper describes capabilities and future upgrade plans for the isotope production and simulation software that is used at many in-flight fragmentation facilities, namely LISE++. We highlight the process and methods of updating the software while retaining the computational integrity of the code. The calculations of beam transport and isotope pr... Cite · Download full-text · Context 1 · ... was the LISE ++ Utilities Package, released March 4, 2015. It is available from the LISE ++ website [5].This is a cross platform transportation of the satellite utilities in LISE framework to Qt. The package consists of five stand-alone programs useful for experiment design: PACE4, Charge, Global, Spectrometric Calculator, and a units converter.\n\nThis paper describes capabilities and future upgrade plans for the isotope production and simulation software that is used at many in-flight fragmentation facilities, namely LISE++. We highlight the process and methods of updating the software while retaining the computational integrity of the code. The calculations of beam transport and isotope pr... ... ... was the LISE ++ Utilities Package, released March 4, 2015. It is available from the LISE ++ website [5].This is a cross platform transportation of the satellite utilities in LISE framework to Qt. The package consists of five stand-alone programs useful for experiment design: PACE4, Charge, Global, Spectrometric Calculator, and a units converter. Fig. 5 shows the package along with the program PACE4 with ... ... G.G. Adamyan · N. V. Antonenko · The excitation functions of the production of new heaviest isotopes of superheavy nuclei with charge numbers 111–117 in the pxn and αxn evaporation channels of the ⁴⁸Ca-induced hot fusion re\n\nBy employing the LISE++ code, the level densities the compound nuclei, 309, 312126 nuclei, are calculated to be about 105 – 1050 (MeV-1) in the energy range of interest. Results: The lifetime of the compound nuclei, 309, 312126 nuclei, which are estimated based on the total width, is about 10-22-10-20 s. The fission has the largest width compared to those of the alpha decay and nucleon evaporations. Hence, the 58Ni+251Cf and 64Zn + 248Cm combinations are appropriate to the study of the mass distribution. In addition, the large alpha decay widths suggest the 309, 312126 isotopes be the alpha-decay nuclei. Conclusion: The results are expected to be useful for considering measurements at facilities in the near future. ... Objective. Carbon is an ion species of significant radiobiological interest, particularly in view of its use in cancer radiotherapy, where its large Relative Biological Efficiency is often exploited to overcome radio resistance.\n\n... Al foils of different thicknesses were placed as filters in front of the CR-39 detector sensitive surface to study the alpha particles energy distribution based on the cutoff energy determined by the Al foil thickness, and also to avoid saturation of the detector by undesired low energy plasma particles. The cutoff energy of the Al filters was calculated using LISE++ ... Laser-driven proton-boron (pB) fusion has been gaining significant interest for energetic alpha particles production because of its neutron-less nature. This approach requires the use of Band H-rich materials as targets, and common practice is the use of BN and conventional polymers. In this work, we chose plasma-assisted vapour phase deposition to prepare films of oligoethylenes (plasma polymers) on Boron Nitride BN substrates as an advanced alternative. The r.f. power delivered to the plasma was varied between 0 and 50 W to produce coatings with different crosslink density and hydrogen content, while maintaining",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/figure/The-application-on-the-left-side-is-the-LISE-Utilities-Package-which-launches-the-Qt_fig5_288021581",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - 1337programming/LISE-WebAssembly: The LISE Game Engine for WebAssembly -- this is just a fun OpenGL project for WebAssembly development.",
      "url": "https://github.com/1337programming/LISE-WebAssembly",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "The LISE Game Engine for WebAssembly -- this is just a fun OpenGL project for WebAssembly development. - 1337programming/LISE-WebAssembly",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/1337programming/LISE-WebAssembly",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "(PDF) LISE++ Software Updates and Future Plans",
      "url": "https://www.researchgate.net/publication/288021581_LISE_Software_Updates_and_Future_Plans",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "LISE++ is the Physical Calculator, shown in Fig. 2. This is used to calculate energy loss through · 21st International Conference on Computing in High Energy and Nuclear Physics (CHEP2015) IOP Publishing · Journal of Physics: Conference Series 664 (2015) 072029 doi:10.1088/1742-6596/664/7/072029 · Content from this work may be used under the terms of the Creative Commons Attribution 3.0 licence. Any further distribution · of this work must maintain attribution to the author(s) and the title of the work, journal citation and DOI. ... Figure 1. : The ... Figure 2. : The physical ... Figure 3. : Horizontal space en- ... LISE++. This represents the beam ... Inﬁnity for higher order calculations [2]. Also included in the suite are stand-alone utilities · for other calculations useful in these experiments such as charge state calculations, fusion- evaporation calculations, and a spectrometric calculator.\n\nThis paper describes capabilities and future upgrade plans for the isotope production and simulation software that is used at many in-flight fragmentation facilities, namely LISE++. We highlight the process and methods of updating the software while retaining the computational integrity of the code. The calculations of beam transport and isotope production are becoming more computationally intense with the new large scale facilities. Computational improvements as well as the process of updating this large code is discussed. : The LISE ++ main GUI with a ∆E vs Total Kinetic Energy particle identification simulation plot overlaid. ... : The physical calculator is a widely used utility in the LISE++ framework. It calculates the energy loss through an unlimited number of material blocks. ... : Horizontal space envelope of the A1900 fragment separator at NSCL calculated with LISE ++. This represents the beam ray paths through the spectrometer.\n\nLISE++ is software used to predict beam intensity and purity of rare isotope beams produced · in-ﬂight by magnetic and electric separators. The primary use of LISE++ at most facilities is · to predict and identify the composition of Radioactive Nuclear Beams [1]. Intensity and purity · of a desired beam can be predicted, along with the separator magnet settings. Included in the · LISE++ package are models of isotope production mechanisms, ion optical transport through · magnetic and electric systems, and ion interactions in matter. The suite contains a set of · tools to assist in the simulation of many components of projectile fragmentation experiments. Users include designers of spectrographs and fragment seprarators, experimentalists at existing · facilities, and beam physicists involved in tuning beams through such systems. ... User Interface (GUI) from which the user sets up and completes all calculations.\n\nLISE++ is the Physical Calculator, shown in Fig. 2. This is used to calculate energy loss through · 21st International Conference on Computing in High Energy and Nuclear Physics (CHEP2015) IOP Publishing · Journal of Physics: Conference Series 664 (2015) 072029 doi:10.1088/1742-6596/664/7/072029 · Content from this work may be used under the terms of the Creative Commons Attribution 3.0 licence. Any further distribution · of this work must maintain attribution to the author(s) and the title of the work, journal citation and DOI. ... Figure 1. : The ... Figure 2. : The physical ... Figure 3. : Horizontal space en- ... LISE++. This represents the beam ... Inﬁnity for higher order calculations [2]. Also included in the suite are stand-alone utilities · for other calculations useful in these experiments such as charge state calculations, fusion- evaporation calculations, and a spectrometric calculator.\n\nLISE++ is currently distributed as a Windows executable with support for 32-bit compilation. The program was developed within the Borland C++ framework. Since its inception 1998, the · code has grown immensely. It started on MS-DOS with 14 C++ ﬁles and less than 10,000 lines · of code and grew to 606 ﬁles on MS Windows today. The calculations of beam transport and · isotope production are becoming more computationally intense with the new large scale facilities. For example, the 90 m long FRIB separator will have around ﬁfty magnetic elements and ten · points of beam interactions with matter. In order to perform the calculations in acceptable · time, updates to the current software are desired. In order to meet computational demands of · new large scale facilities, the software is being converted to a new development environment. A new compiler is necessary to implement parallel computing, which is not available in the ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/publication/288021581_LISE_Software_Updates_and_Future_Plans",
        "search_provider": "anthropic",
        "age": "December 23, 2015"
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

Based on the search results, LISE++ (the radioactive ion beam simulation software from MSU/FRIB) is **not** open source — it's freely available and freely distributable, but that's different from being open source. The source code is not publicly available; it's distributed as a compiled executable.

The "lanl/LISE" on GitHub is a completely different project (a nuclear DFT solver from Los Alamos).

</details>

**LISE++** (the radioactive ion beam simulation tool developed at MSU/FRIB by Tarasov and Bazin) is **not open source**, though it is **free to download and use**.

Here's the distinction:

- The LISE++ package is freely available and distributable through the LISE++ website.
- However, LISE++ was developed within the Borland C++ framework and is distributed as a compiled executable — the source code is not publicly released.

So you can run it for free on Windows, macOS, and Linux, but you can't inspect or modify the source. It's **freeware**, not open source.

(Note: the `lanl/LISE` repo on GitHub is a completely different project — a nuclear DFT/SLDA solver from Los Alamos — not the fragment separator tool you're likely thinking of.)

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cf9b3-c7e9-739c-8a22-75dc8905d312",
  "updated_at": "2026-03-17T02:50:46.386629Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cf9b3-c7e9-7367-beeb-aeebc8c9fd6c"
}
```

</details>

### 3. human — 2026-03-17T03:05:33.829485Z

Then if I intend to use claude code to control it, how can I realize it?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cf9c1-7c20-76a7-bce7-ebd9fe64131b",
  "updated_at": "2026-03-17T03:05:33.829485Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cf9b3-c7e9-739c-8a22-75dc8905d312"
}
```

</details>

### 4. assistant — 2026-03-17T03:05:51.600912Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to use Claude Code to control LISE++. Since LISE++ is a closed-source GUI application (Windows executable, originally Borland C++), there's no API or programmatic interface. Let me think about the possible approaches:

1. **Automation via scripting** - LISE++ has configuration files (.lpp files) that define the separator setup. Claude Code could potentially read/write these configuration files.

2. **Command-line interface** - Check if LISE++ has any CLI mode or batch processing capability.

3. **File-based interaction** - LISE++ reads/writes files, so Claude Code could manipulate input files and parse output files.


4. **GUI automation** - Tools like AutoHotkey or pyautogui could automate the GUI directly, though that's more fragile.

The most practical path forward is probably file-based manipulation of the .lpp configuration files combined with parsing LISE++'s output, or checking if there's a command-line mode available. GUI automation would be a fallback if those don't work.

</details>

Since LISE++ is closed-source with no public API, your options for Claude Code control depend on how deep you want to go. Here are the realistic approaches, roughly from simplest to most complex:

---

## 1. File-Based I/O (Most Practical)

LISE++ uses configuration files (`.lpp`) and exports results as text/dat files. Claude Code can:
- **Generate or modify `.lpp` config files** programmatically (changing target, beam, separator settings, etc.)
- **Parse output files** that LISE++ writes after a calculation run
- **Batch-process** multiple configurations by scripting file generation

This is the most robust approach and doesn't require any GUI interaction. The key is reverse-engineering the `.lpp` file format — Claude Code can help you do that by analyzing example files from your existing setups.

---

## 2. Command-Line / Batch Mode

Check whether LISE++ supports a headless/batch mode:
```bash
lise++ --input config.lpp --output results.txt
```
Some physics GUI tools quietly support this. You'd want to check the LISE++ documentation or contact the MSU group. If it exists, Claude Code can directly invoke it via `subprocess`.

---

## 3. GUI Automation (Last Resort)

If neither above works, you can automate the GUI itself using tools like:
- **`pyautogui`** or **`pywinauto`** (Windows) — click buttons, fill fields programmatically
- **`xdotool`** / **`xautomation`** (Linux)

Claude Code could orchestrate these scripts, but this approach is brittle and breaks with UI updates.

---

## Recommended Starting Point

I'd suggest starting with **approach 1** — have Claude Code:
1. Read your existing `.lpp` files to learn the format
2. Generate new configs by varying parameters (e.g., sweeping beam energies or target thicknesses)
3. Launch LISE++ runs and parse the output

Would you like help reverse-engineering the `.lpp` file format from an example file, or is there a specific workflow you have in mind (e.g., optimizing separator settings, batch PID simulations)?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cf9c1-7c20-7718-a254-496152282e3d",
  "updated_at": "2026-03-17T03:05:51.600912Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cf9c1-7c20-76a7-bce7-ebd9fe64131b"
}
```

</details>
