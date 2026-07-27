# JinLei Tongji University workflow repository access

## Export metadata (verbatim)

```json
{
  "uuid": "3619a11c-4f72-48fd-8ec3-a21b9193f602",
  "name": "JinLei Tongji University workflow repository access",
  "summary": "**Conversation Overview**\n\nThe person asked Claude to investigate whether Jin Lei (金磊), a professor at Tongji University's School of Physics Science and Engineering, has a publicly accessible repository containing the Claude Code skills and research workflow shown in a slide the person had uploaded. The slide depicted a personal AI-assisted research pipeline — including named skills such as `research-planning`, `literature-wiki`, `debug-physics-first`, `prc-writing`, `prl-writing`, `review-writing`, and `slidev-talk` — attributed to Jin Lei, who claimed to have produced 16 papers in four months using this system.\n\nWhen the person provided Jin Lei's personal website (jinlei.fewbody.com), Claude fetched it to confirm his identity and GitHub handle (`jinleiphys`), then investigated his GitHub repositories, his AI Use page, and his Talks page. Claude confirmed the slide matches Jin Lei's \"16 papers in four months\" talk series delivered at SUSTech, IMP (近物所), and Fudan in June–July 2025. Notably, Claude flagged that the June 23 IMP talk was delivered at the person's own institute, suggesting the person may be affiliated with IMP (Institute of Modern Physics). Claude was unable to locate a public repository for the skills toolbox across multiple search and fetch attempts, and noted that Jin Lei's own slide describes the workflow as \"个人品味的蒸馏, 不可复制\" (a distillation of personal taste, not replicable), suggesting it may be intentionally non-distributed.\n\nClaude recommended three concrete next steps: emailing Jin Lei directly at his Tongji address, browsing his full GitHub repository list (only 6 of 57 repos were visible to Claude), and checking the final slides of the IMP talk deck for any resource links, since Slidev's client-side rendering prevented Claude from reading the deck content directly.\n\n**Tool Knowledge**\n\nWeb fetching Slidev-based presentation sites (such as jinleiphys.github.io/talks/) returned only metadata rather than slide content, because Slidev renders entirely client-side via JavaScript. This is a consistent limitation: fetching Slidev URLs will not yield readable slide text regardless of the specific talk URL. For GitHub profiles, the public repository listing via `github.com/[username]?tab=repositories` only surfaced the 6 \"popular\" pinned repositories out of 57 total when fetched without authentication, making it unreliable for comprehensive repo discovery. Web searches combining the person's name, institution, and specific skill names (`literature-wiki`, `debug-physics-first`, `prc-writing`) produced no repo hits, suggesting that if a repo exists, it is either private or not indexed under those terms.",
  "created_at": "2026-07-04T05:25:37.319554Z",
  "updated_at": "2026-07-04T05:33:00.497594Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-04T05:25:38.588016Z

This is a workflow from JinLei, Tongji University. Find out whether there is a public repo where I can have access to these skills and workflows.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2b96-e779-71d1-a957-8986a784612d",
  "updated_at": "2026-07-04T05:25:38.588016Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "abb27ce0-30f4-4390-b646-b0d0da4a950c",
      "file_name": "1783142681882_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-04T05:26:06.221208Z

I'll search for this. Let me look for JinLei from Tongji University and these physics research skills.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:25:39.605788Z",
  "stop_timestamp": "2026-07-04T05:25:39.795169Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017892gc6vjjs5xu1FUnSyFV",
  "name": "web_search",
  "input": {
    "query": "JinLei Tongji University physics research skills Claude pipeline"
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
  "start_timestamp": "2026-07-04T05:25:40.704768Z",
  "stop_timestamp": "2026-07-04T05:25:40.704783Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_017892gc6vjjs5xu1FUnSyFV",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Best Physics in Tongji University - H-Index Ranking | Research.com",
      "url": "https://research.com/university/physics/tongji-university",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "research.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=research.com",
        "site_name": "Research.com"
      },
      "is_missing": false,
      "text": "Tongji University (同济大学), established in 1907 in Shanghai, China, is a comprehensive public research university with deep historical roots. Originally founded by German physicians, Tongji has grown into a leading member of China’s “Double First Class” initiative, emphasizing global engagement and academic excellence. With a student body exceeding 50,000—including more than 20,000 postgraduates—Tongji operates across multiple campuses in Shanghai and employs over 2,800 academic staff. The university’s scope and urban location make it a vital contributor to China’s higher education and research landscape. Tongji is distinguished for its outstanding programs in engineering, architecture, environmental science, and business, consistently ranking among the top universities nationally and globally—QS World University Rankings 2024 places Tongji within the world’s top 250.\n\n\n\nTongji University (同济大学), established in 1907 in Shanghai, China, is a comprehensive public research university with deep historical roots. Originally founded by German physicians, Tongji has grown into a leading member of China’s “Double First Class” initiative, emphasizing global engagement and academic excellence. With a student body exceeding 50,000—including more than 20,000 postgraduates—Tongji operates across multiple campuses in Shanghai and employs over 2,800 academic staff. The university’s scope and urban location make it a vital contributor to China’s higher education and research landscape. Tongji is distinguished for its outstanding programs in engineering, architecture, environmental science, and business, consistently ranking among the top universities nationally and globally—QS World University Rankings 2024 places Tongji within the world’s top 250.\n\n\n\nThe university promotes interdisciplinary integration and problem-based learning, fostering innovation in areas such as urban planning, civil engineering, and sustainable development.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://research.com/university/physics/tongji-university"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Jin LEI | Professor | PhD | Tongji University, Shanghai | School of Physics Science and Engineering | Research profile",
      "url": "https://www.researchgate.net/profile/Jin-Lei-7",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "Jin LEI, Professor | Cited by 1,215 | of Tongji University, Shanghai | Read 91 publications | Contact Jin LEI",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.researchgate.net/profile/Jin-Lei-7"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Jin Lei",
      "url": "https://scholar.google.com/citations?user=ft9l8c8AAAAJ&hl=en",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "google.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
        "site_name": "Google Scholar"
      },
      "is_missing": false,
      "text": "‪Tongji University‬ - ‪‪Cited by 1,442‬‬ - ‪nuclear reactions‬\n\nBrett Vern CarlsonProfessor of Physics, Instituto Tecnológico de AeronáuticaVerified email at ita.br ... Rodrigo Navarro PerezAssistant Professor. San Diego State UniversityVerified email at sdsu.edu ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://scholar.google.com/citations?user=ft9l8c8AAAAJ&hl=en"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "A Scientific Human-Agent Reproduction Pipeline",
      "url": "https://arxiv.org/pdf/2604.18752",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "# **Code Availability**\n\nThe SHARP template is available at: https://github.com/stanford-ai4physics/sharp. The claude-parser tool for the conversation analysis is available at: https://github.com/nollde/claude-parser. The claude-hpc containment tool is available at: https://github.com/nollde/claude-hpc.\n\n## Acknowledgments\n\nThis project originated at the \"Human Meets AI in Scientific Research Replication\" hackathon at the Center for Decoding the Universe at Stanford University – we would like to thank the organizers, especially Ioana Ciucă. B.N., D.N., and T.W. are supported by the Department of Energy (DOE), Office of Science under contract DE-AC02-76SF00515. T.W. is supported by the National Science Foundation under Grant No. 2311666. This research used resources of the National Energy Research Scientific Computing Center, a DOE Office of Science User Facility supported by the Office of Science of the U.S. Department of Energy under Contract No.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2604.18752"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Spotlight on researchers during a wet-lab to dry-lab transition period: an interview with Guifen Liu and Qi Wang",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11461634/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nih.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
        "site_name": "nih"
      },
      "is_missing": false,
      "text": "# Spotlight on researchers during a wet-lab to dry-lab transition period: an interview with Guifen Liu and Qi Wang\n\n**DOI:** 10.1038/s42003-024-06923-x\n\n**Published:** 2024-10-08\n\n**Authors:** \n\n## Abstract\n\nDr. Guifen Liu, now an Associate Professor at ZhangLab, Tongji University, began her research in epigenetic regulation using zebrafish as a model, first as a postdoctoral researcher and then as a research scientist. She established the zebrafish culturing system at the Department of Informatics, Tongji University, Shanghai, China. Dr. Qi Wang is an Assistant Professor at ZhangLab, Tongji University, and she is in charge of the cell culture part of the lab and has broad expertise in high-throughput experimental research on chromatin structure. They are the only two experimental biologists in a dry lab focusing on different research topics. At present, they are in the transition period from experimental scientists to computational scientists. \n\nCurrent Lab Members-Yong Zhang Lab (tongji.edu.cn).\n\n\nJingfan Zhu. Pictured: Guifen Liu\n\n\nPlease tell us about the journey of your career.\n\nGuifen Liu **[GL]** In my professional journey, I have been fortunate to experience a series of research stages that are both independent and interconnected. During my master’s program, my research focused on identifying molecular targets in gastrointestinal tumors, which is a basic and critical starting point. As my understanding of epigenetics deepened, I was drawn to the immense potential of this field. Consequently, I chose to continue my studies for a PhD and to delve into the study of epigenetic regulation mechanisms in eukaryotes. There, my previous group was dedicated to traditional wet lab experiments, which provided me with valuable experimental skills and rigorous scientific training.\n\nHowever, with the explosive growth of -omics data, I realized the enormous potential of combining wet lab experiments with computational biology.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11461634/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "A Knowledge-Inspired Hierarchical Physics-Informed Neural Network for   Pipeline Hydraulic Transient Simulation",
      "url": "https://arxiv.org/pdf/2409.10911",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "# 5 Acknowledgement\n\nThis work was partially supported by the National Natural Science Foundation of China (52202405), the ARC Linkage Project LP230100083, and the Science Foundation of China University of Petroleum, Beijing (2462023BJRC026). The authors are grateful to all study participants.\n\n### References\n\n- Zhao Chen, Yang Liu, and Hao Sun. Physics-informed learning of governing equations from scarce data. *Nature communications*, 12(1):6136, 2021.\n- J.A. Delgado-Aguiñaga, V. Puig, and F.I. Becerra-López. Leak diagnosis in pipelines based on a kalman filter for linear parameter varying systems. *Control Engineering Practice*, 115:104888, 2021. ISSN 0967-0661. doi: https://doi.org/10.1016/j.conengprac.2021.104888. URL https://www.sciencedirect.com/science/article/pii/S0967066121001659.\n- Jian Du, Jianqin Zheng, Yongtu Liang, Xinyi Lu, Jiří Jaromír Klemeš, Petar Sabev Varbanov, Khurram Shahzad, Muhammad Imtiaz Rashid, Arshid Mahmood Ali, Qi Liao, and Bohong Wang.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2409.10911"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Physics-Informed Neural Network with Adaptive Clustering Learning Mechanism for Information Popularity Prediction",
      "url": "https://arxiv.org/pdf/2603.19599",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "Guangyin Jin is an Assistant Research Fellow in National Innovative Institute of Defense Technology, and an IEEE Senior Member. He received a Ph.D degree at College of Systems Engineering of National University of Defense Technology. His research interest falls in the area of spatial-temporal data mining, graph neural networks and urban computing. So far, he has published more than 40 papers in top journals and conferences such as TKDE, TITS, TIST, TRC, TKDD, AAAI, CIKM, NIPS, ICCV, SIGSPATIL, accumulating more than 3,000\n\ncitations on Google Scholar. He is also an editorial board member for SCI-indexed journals such as Scientific Reports, Humanities & Social Sciences Communications, and Mathematics.\n\n\nJie Zhao is a PhD in Physics with a robust interdisciplinary background in plasma physics and optics. His research encompasses the transport of carriers in topological insulators, gamma-vortex generation, and the production and acceleration of positrons.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2603.19599"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Online education at the medical School of Tongji University during the COVID-19 pandemic: a cross-sectional study",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8478270/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nih.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
        "site_name": "nih"
      },
      "is_missing": false,
      "text": "# Online education at the medical School of Tongji University during the COVID-19 pandemic: a cross-sectional study\n\n**DOI:** 10.1186/s12909-021-02951-x\n\n**Published:** 2021-09-28\n\n**Authors:** Yaxiang Song, Shu Wang, Yixian Liu, Xinying Liu, Ai Peng\n\n**Affiliations:** grid.24516.340000000123704535Center for Nephrology and Clinical Metabolomics and Division of Nephrology and Rheumatology, Shanghai Tenth People’s Hospital, Tongji University School of Medicine, Shanghai, 200072 People’s Republic of China\n\n**Keywords:** Medical students and teachers, COVID-19, Online teaching, Questionnaire, Prospective study\n\n## Abstract\n\n**Background:**\n\nThe global reputation of coronavirus disease (COVID-19) has led universities in China to conduct online teaching. However, the actual feedback from medical teachers and students regarding online education remains unclear.\n\n**Methods:**\n\n\n\nA prospective questionnaire survey examined the current opinions of online education from teachers and students at the Medical School of Tongji University.\n\n**Results:**\n\nA total of 488 valid questionnaires were collected (223 males, 45.7%; 265 females, 54.3%), including 394 students (80.7%) and 94 teachers (19.3%). Most teachers and students were “in favor of online teaching,” had “positive views for online education,” were “satisfied with online teaching,” and “expected for regular online education,” although students thought that “too much learning tasks had been assigned” (90.4% teachers vs. 43.1% students, *P* < 0.001) and “less teaching effect than in offline classes” (68.1% teachers vs. 43.4% students). Compared to female counterpart, male students had higher “learning interest” (27.6% vs. 14.9%), “learning attention” (29.2% vs. 14.4%), “learning efficiency” (30.2% vs. 16.7%), and “better learning effect” (27.6% vs. 15.3%). \n\nDiversified online education can enrich learning and teaching methods [[6], [7]]. Teaching management can be completed th",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8478270/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "COHORT PROFILE FOR THE TONGJI CARDIOVASCULAR HEALTH STUDY: A PROSPECTIVE MULTI-OMICS COHORT STUDY",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10739366/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nih.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
        "site_name": "nih"
      },
      "is_missing": false,
      "text": "The Tongji Cardiovascular Health Study aimed to further explore the onset and progression mechanisms of cardiovascular disease (CVD) through the combination of traditional cohort study and multi-omics analysis including genomics, metabolomics and metagenomics. This study included participants aged 20-70 years old from Geriatric Health Management Center of Tongji Hospital of Tongji Medical College of Huazhong University of Science and Technology. After enrollment, each participant underwent a comprehensive series of traditional and novel cardiovascular risk factors assessments at baseline, including questionnaires, physical examinations, laboratory tests, cardiovascular health assessments, and biological samples collection for subsequent multi-omics analysis. A biennial follow-up will be performed for ten years to collect the information above and the outcome data. Totally, 2,601 participants were recruited in this study (73.4% men), with a mean age of 51.5±11.5 years.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10739366/"
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

Jin Lei (雷金) is confirmed as a nuclear reactions professor at Tongji University. Let me search for his specific Claude skills/workflow repo.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:25:43.680460Z",
  "stop_timestamp": "2026-07-04T05:25:43.997658Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LCwgBXxFtFPvsyFaVRZz33",
  "name": "web_search",
  "input": {
    "query": "Jin Lei nuclear physics Claude skills literature-wiki debug-physics-first github"
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
  "start_timestamp": "2026-07-04T05:25:45.202992Z",
  "stop_timestamp": "2026-07-04T05:25:45.203007Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01LCwgBXxFtFPvsyFaVRZz33",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - Orchestra-Research/AI-Research-SKILLs: Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. · GitHub",
      "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "End-to-End Coverage - 98 skills spanning the full AI research lifecycle, from ideation and literature survey to experiments and paper writing · Research-Grade Quality - Documentation sourced from official repos, real GitHub issues, and battle-tested production workflows · Quality over quantity: Each skill provides comprehensive, expert-level guidance with real code examples, troubleshooting guides, and production-ready workflows. For humans — interactive installer with one command: ... Read https://www.orchestra-research.com/ai-research-skills/welcome.md and follow the instructions to install and use AI Research Skills. This installs all 98 skills, loads the autoresearch orchestration layer, and starts autonomous research. ... \n\nAuto-detects your installed coding agents (Claude Code, Hermes Agent, OpenCode, Qoder, Cursor, Gemini CLI, etc.) Installs skills to ~/.orchestra/skills/ with symlinks to each agent (falls back to copy on Windows) Offers everything, quickstart bundle, by category,\n\nComprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. - Orchestra-Research/AI-Research-SKILLs\n\nAutoresearch - Autonomous research orchestration using a two-loop architecture (inner optimization + outer synthesis). Manages the full lifecycle from literature survey to paper writing, routing to all domain-specific skills. \n\nSupports Claude Code /loop and OpenClaw heartbeat for continuous operation (390 lines + 3 refs) LitGPT - Lightning AI's 20+ clean LLM implementations with production training recipes (462 lines + 4 refs) Mamba - State-space models with O(n) complexity, 5× faster than Transformers (253 lines + 3 refs) RWKV - RNN+Transformer hybrid, infinite context, Linux Foundation project (253 lines + 3 refs) NanoGPT - Educational GPT in ~300 lines by Karpathy (283 lines + 3 refs) TorchTitan - PyTor",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 weeks ago",
        "search_provider": "anthropic",
        "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Imbad0202/academic-research-skills: Academic Research Skills for Claude Code: research → write → review → revise → finalize",
      "url": "https://github.com/Imbad0202/academic-research-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Academic Research Skills for Claude Code: research → write → review → revise → finalize - Imbad0202/academic-research-skills\n\nDeterministic advisory verifier at the Phase 4 → 5 boundary covering 5 temporal failure modes (P1 retrospective arithmetic, P2 anachronistic citation, P3 comparator unmaterialized, P4 causal inversion, P5 deictic present). New Phase 2 sibling timeline_extraction_agent owns phase2_investigation/timeline.yaml + phase2_investigation/citation_provenance.yaml. Verifier script scripts/temporal_integrity_audit.py runs 5 passes deterministically. M3 Temporal Integrity Iron Rule added to report_compiler_agent + draft_writer_agent. M6-minimal: Crossref issued + pdftotext cover first-party verification. M7-minimal: date provenance + comparator materialization. M5-stub: user-declared version_family_id only. Zero modification to literature_corpus_entry, claim_audit_result, claim_intent_manifest. bibliography_agent unmodified (F2 invariant). 3 new sidecar schemas.\n\n\n\nCI gates: scripts/check_literature_corpus_schema.py validates schemas + adapter examples; scripts/sync_adapter_docs.py --check prevents schema→docs drift; new pytest.yml workflow runs scripts/adapters/tests/ on path-filtered triggers. Input-port-only at v3.6.4: v3.6.4 shipped the schema and adapter contract without consumer integration. bibliography_agent and literature_strategist_agent were wired in v3.6.5. No breaking changes. Opt-in passport reset boundary (ARS_PASSPORT_RESET=1). Promotes every FULL checkpoint to a context-reset boundary. New resume_from_passport=<hash> mode lets users resume in a fresh Claude Code session from the Material Passport ledger alone. systematic-review mode with the flag ON makes reset mandatory at every FULL checkpoint; other modes treat reset as the flag-gated default. Flag OFF preserves pre-v3.6.3 behavior byte-for-byte.\n\n\n\nKnown Hallucination Patterns: 5-type taxonomy (TF/PAC/IH/PH/SH) from GPTZero × NeurIPS 2025 study, 5 compound deception patt",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 days ago",
        "search_provider": "anthropic",
        "url": "https://github.com/Imbad0202/academic-research-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - wanshuiyin/Auto-claude-code-research-in-sleep: ARIS ⚔️ (Auto-Research-In-Sleep) — Lightweight Markdown-only skills for autonomous ML research: cross-model review loops, idea discovery, and experiment automation. No framework, no lock-in — works with Claude Code, Codex, OpenClaw, or any LLM agent.",
      "url": "https://github.com/wanshuiyin/auto-claude-code-research-in-sleep",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Which literature sources to search: zotero, obsidian, local, web, semantic-scholar, deepxiv, exa, or all. Note: semantic-scholar, deepxiv, and exa must be explicitly listed — not included in all ... Download top relevant arXiv PDFs during literature survey. When false, only fetches metadata (title, abstract, authors) ... Fetch real BibTeX from DBLP/CrossRef instead of LLM-generated entries. Eliminates hallucinated citations. Zero install ... GPT-5.5 xhigh reviews experiment code before GPU deployment. Set false to skip ... Auto-add W&amp;B logging to experiment scripts. Set true + configure wandb_project in CLAUDE.md. /monitor-experiment pulls training curves from W&amp;B ... AI illustration in Workflow 3: gemini (default, needs GEMINI_API_KEY), mermaid (free), or false (skip) ... Target venue: ICLR, NeurIPS, ICML, CVPR, ACL, AAAI, ACM. Determines LaTeX style file and page limit ...\n\n\n\nThe embedded skills set in the v0.4.10 binary had fallen behind main (~6 of 56 main skills/ commits had been cherry-picked); v0.4.11 syncs the full set and ships sync infrastructure so the gap can't silently reopen. Bundle: 65→74 user-facing skills, 34→49 helper resources. 10 new skills bundled: /citation-audit (fourth-layer bibliography audit), /experiment-queue (SSH multi-seed job queue with OOM retry), /kill-argument (two-thread adversarial review for theory papers), /resubmit-pipeline (W5: text-only port to a new venue), /paper-talk (end-to-end conference talk pipeline), /slides-polish (per-page Codex layout review), /overleaf-sync (two-way Overleaf Git-bridge), /gemini-search + /openalex (broader literature sources), /qzcli (Qizhi GPU jobs). \n\n46 existing SKILL.md refreshed — most critically the canonical resolver chain rollout (closes real user incident where /research-wiki was empty for a week from hardcoded tools/research_wiki.py), submission assurance gate + external verifier (/\n\nLegacy override: /gemini-search \"topic\" — model: gemini-2.5-pro. Other overrides: gemin",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "5 days ago",
        "search_provider": "anthropic",
        "url": "https://github.com/wanshuiyin/auto-claude-code-research-in-sleep"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Organizing, Orchestrating, and Benchmarking Agent Skills at Ecosystem Scale",
      "url": "https://arxiv.org/pdf/2603.02176",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "Introduced by Claude in October 2025, a skill is a markdown file that defines a structured folder comprising declarative instructions, executable scripts, and auxiliary resources (Anthropic, 2025). By supporting dynamic loading and execution at runtime, skills enable a large language model (LLM) to acquire domain-specific knowledge and extend its operational capabilities (Xu & Yan, 2026). Skills have been adopted by multiple model service providers and integrated into platforms such as Coze, enabling cross-model skill reuse and execution. As of late Feb 2026, more than 280,000 skills are publicly available, and the overwhelming majority is developed and maintained by decentralized, third-party contributors. At this scale and degree of decentralization, a critical question emerges: how can the agent skill ecosystem be effectively leveraged, managed, and scaled?\n\nThis question is of both practical importance and research interest.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2603.02176"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Coding Beyond Your Training: Claude Code and the Technological Frontier of Software Developers",
      "url": "https://arxiv.org/pdf/2605.25438",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "# Coding Beyond Your Training: Claude Code and the Technological Frontier of Software Developers\\*\n\nAlexander Quispe<sup>†</sup>\n\nMay 26, 2026\n\n#### Abstract\n\nWe study whether adoption of an AI coding assistant causally expands the technological frontier of individual software developers. We exploit the staggered rollout of Claude Code across GitHub between May 2025 and January 2026 in a panel of 5,838 developers observed monthly over 28 months, with treatment defined by the developer's first Claude-co-authored commit and not-yet-treated developers as controls. Using the doubly robust Callaway and Sant'Anna (2021) estimator, we find positive and significant effects on monthly commits (+41), repositories contributed to (+1.5), distinct programming languages used (+0.83), Shannon language entropy (+0.14), newly-used languages (+0.31), and cumulative lifetime languages (+0.51). \n\nFrom the user's perspective, this provides a form of *skill substitution*: where she once needed deep proficiency to write Rust, she can now produce working Rust by describing what she wants. If the substitution is sufficiently good, the developer's effective production function expands to include languages and domains previously beyond her individual reach. This paper asks whether that expansion is empirically detectable.\n\nWe exploit the staggered rollout of Claude Code across the GitHub developer population between May 2025 and January 2026 to estimate the causal effect of AI assistant adoption on six measures of an individual developer's technological frontier. We construct a panel from 7.8 million Claude-co-authored commits paired with the full public contribution history of a stratified sample of 5,838 developers over 28 months, capturing every public repository contribution and language usage at monthly frequency. \n\nSecond, the literature on skill-biased technological change (Acemoglu and Restrepo, 2019, 2022; Autor, 2015; Autor et al., 2024): we document a third margin alongside displ",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2605.25438"
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

None of those are Jin Lei's. Let me search his GitHub directly and for the specific slidev-talk/slides context, which suggests he posted this publicly.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:25:47.375478Z",
  "stop_timestamp": "2026-07-04T05:25:48.246945Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_019bJvP7KRHXuicT5X6kGAG8",
  "name": "web_search",
  "input": {
    "query": "\"Jin Lei\" 雷金 Tongji nuclear physics Claude Code skills slidev workflow 16 papers"
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
  "start_timestamp": "2026-07-04T05:25:49.167138Z",
  "stop_timestamp": "2026-07-04T05:25:49.167158Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_019bJvP7KRHXuicT5X6kGAG8",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Exploring the Capabilities of the Frontier Large Language Models for Nuclear Energy Research",
      "url": "https://arxiv.org/pdf/2506.19863",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "Applications ranged from developing foundation models for fusion reactor control to automating Monte Carlo simulations, predicting material degradation, and designing experimental programs for advanced reactors. Teams employed structured workflows combining prompt engineering, deep research capabilities, and iterative refinement to generate hypotheses, prototype code, and research strategies. Key findings demonstrate that LLMs excel at early-stage exploration, literature synthesis, and workflow design, successfully identifying research gaps and generating plausible experimental frameworks. However, significant limitations emerged, including difficulties with novel materials designs, advanced code generation for modeling and simulation, and domain-specific details requiring expert validation. The successful outcomes resulted from expert-driven prompt engineering and treating AI as a complementary tool rather than a replacement for physics-based methods. \n\nWe present detailed case studies from each team, highlighting successful applications where AI demonstrated clear value—such as literature synthesis, workflow design, and initial code prototyping—as well as areas where current limitations became apparent, including challenges with novelty, technical accuracy, and the need for expert validation. The synthesis of these experiences provides an advanced understanding of AI's current role in nuclear science: not as a replacement for domain expertise or rigorous physical modeling, but as an accelerant for scientific exploration.\n\nThe implications of this work extend beyond the immediate findings. As U.S. race to achieve energy dominance through advanced nuclear technologies, the ability to rapidly explore design spaces, identify promising research directions, and integrate knowledge across disciplines becomes a strategic imperative. \n\nTeams explored applications spanning materials science, plasma control, neutronics modeling, and data management—representing the ful",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2506.19863"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation",
      "url": "https://arxiv.org/pdf/2606.08091",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "# VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation\n\nJianhui Wei<sup>1,2,\\*,§</sup> Jie Tan<sup>1\\*</sup> Hengchuan Zhu<sup>1\\*</sup> Xiaotian Zhang<sup>1</sup>\nYan Zhang<sup>2‡</sup> Ziyi Chen<sup>2</sup> Daoan Zhang<sup>2</sup> Wei Xu<sup>2‡</sup> Zuozhu Liu<sup>1†</sup>\n\n<sup>1</sup>Zhejiang University <sup>2</sup>ByteDance\n{jianhui1.24, zuozhuliu}@intl.zju.edu.cn\n\n#### **Abstract**\n\nRecent agent frameworks such as Claude Code, Codex, and OpenClaw are strong at tool use and orchestration, but whether they can handle long video generation, a long-horizon multimodal task, remains underexplored. Unlike earlier video agents whose pipeline is handcrafted, these frameworks can build and refine their own workflows. \n\nMeanwhile, general-purpose agent frameworks such as Claude Code (Anthropic, 2026a), Codex (OpenAI, 2026b), and OpenClaw (Open-Claw, 2026) pair a reasoning backbone with a tool-augmented runtime, show strong tool-use and orchestration, and can build and refine their own workflows directly from a task. Whether such general harnesses can handle long video generation has not been systematically explored.\n\nTo study this, we introduce VideoWeaver, a benchmark for long video generation built around an agent harness. In our harness, a backbone foundation model (OpenAI, 2026a; ByteDance Seed, 2026; DeepSeek-AI, 2026) is equipped with a set of *foundation skills*, self-contained, independently invocable capabilities for video, image, and audio generation, understanding, and media processing. Given a single high-level instruction, the agent composes these foundation skills into its own *composition skill*, a high-level procedural workflow,\n\n<sup>\\*</sup> Equal contributions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2606.08091"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The Efficacy and Safety of TACE, Lenvatinib and Camrelizumab in the Treatment of BCLC Stage B/C Hepatocellular Carcinoma: a Single-arm, Single-center, Open-label Study",
      "url": "https://cdn.clinicaltrials.gov/large-docs/66/NCT04909866/Prot_000.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "clinicaltrials.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=clinicaltrials.gov",
        "site_name": "clinicaltrials"
      },
      "is_missing": false,
      "text": "| Tongji Medical C<br>Huazhong Univers<br>and Technology | | 2001.9 | 2004.6 | Imaging medicine and nuclear science Medicine (intervention) | master |\n| Tongji Medical C<br>Huazhong Univers<br>and Technology | | 2005.9 | 2008.6 | Imaging medicine and nuclear science Medicine (intervention) | doctor |\n| | | worki | ng situation | | |\n| | Work unit nar | ne | post | From (time) | To (time) |\n\n| Wuhan union hospital radiology | Resident<br>assistance | 1998.7 | 2003.6 |\n| | teach | | |\n| Radiology Hospital of Freiburg<br>University,<br>Germany | visiting<br>scholar | 2007.1 | 2008.9 |\n| Wuhan union hospital radiology | The attending physician said teacher | 2003.7 | 2012.10 |\n| Wuhan union hospital radiology | associate chief | 2012.11 | 2017.10 |\n| Wuhan union hospital radiology | Master tutor | 2013.12 | hitherto |\n| Wuhan union hospital radiology | associate<br>professor | 2016.11 | hitherto |\n| Wuhan union hospital radiology | archiater | 2017.11 | hitherto |",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://cdn.clinicaltrials.gov/large-docs/66/NCT04909866/Prot_000.pdf"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "SkillFlow:Benchmarking Lifelong Skill Discovery and Evolution for Autonomous Agents",
      "url": "https://arxiv.org/pdf/2604.17308",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "We introduce SKILLFLOW, a benchmark of 166 tasks across 20 families in which task construction within each family follows a Domain-Agnostic Execution Flow (DAEF) that defines an agent workflow framework, allowing these tasks to share a consistent workflow. Agents are evaluated under an Agentic Lifelong Learning protocol in which they begin without skills, solve tasks sequentially within each family, externalize lessons through trajectoryand rubric-driven skill patches, and carry the updated library forward. Experiments reveal a substantial capability gap. For Claude Opus 4.6, lifelong skill evolution improves task success from 62.65% to 71.08% (+8.43 points). However, high skill usage does not necessarily imply high utility: Kimi K2.5 gains only +0.60 points despite 66.87% skill usage, while Qwen-Coder-Next reaches only a 44.58% task completion rate and still regresses relative to the vanilla setting. \n\nSKILLFLOW contributes a structured testbed for this direction and an in-depth empirical analysis of skill discovery, patching, transfer, and their failure modes under lifelong evaluation. The code is available at https://github.com/ZhangZi-a/SkillFlow.\n\n# 1 Introduction\n\nFrontier Large Language Models(LLMs) systems are increasingly deployed as autonomous command-line agents that solve realistic multi-step tasks in terminal environments. Claude Code [2], Gemini CLI [11], Codex CLI [25], and Qwen-Coder [30] are prominent examples. Agent skills have recently emerged as external packages of procedural knowledge that augment model capabilities for specialized tasks. These skills can encode usage scenarios, core guidance, and reusable code or documentation assets. As a result, many vendors are beginning to release agent versions with native skill support.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2604.17308"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Engineering Pitfalls in AI Coding Tools: An Empirical Study of Bugs in Claude Code, Codex, and Gemini CLI",
      "url": "https://arxiv.org/pdf/2603.20847",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "# Engineering Pitfalls in Al Coding Tools: An Empirical Study of Bugs in Claude Code, Codex, and Gemini CLI\n\nRuixin Zhang\\* York University Toronto, Canada jason666@my.yorku.ca\n\n> Gias Uddin York University Toronto, Canada guddin@yorku.ca\n\nWuyang Dai\\* York University Toronto, Canada ddai2002@my.yorku.ca\n\nJinqiu Yang Concordia University Montreal, Canada jinqiu.yang@concordia.ca Hung Viet Pham York University Toronto, Canada hvpham@yorku.ca\n\nSong Wang York University Toronto, Canada wangsong@yorku.ca\n\n# **ABSTRACT**\n\nThe rapid integration of Large Language Models (LLMs) into soft-ware development workflows has given rise to a new class of AI-assisted coding tools, such as Claude-Code, Codex, and Gemini CLIs. While promising significant productivity gains, the engineering process of building these tools, which sit at the complex intersection of traditional software engineering, AI system design, and human-computer interaction, is fraught with unique and poorly understood challenges.\n\n\n\nThis paper presents the first empirical study of engineering pit-falls in building such tools, on a systematic, manual analysis of over 3.8K publicly reported bugs in the open-source repositories of three AI coding tools (i.e., Claude-Code, Codex, and Gemini CLI) on GitHub. Specifically, we employ an open-coding methodology to manually examine the issue description, associated user discussions, and developer responses. Through this process, we categorize each bug in multiple dimensions, including bug type, bug location, root cause, and observed symptoms. This fine-grained annotation enables us to characterize common failure patterns and identify recurring engineering challenges.\n\nOur results show that more than 67% of the bugs in these tools are related to functionality. In terms of root causes, 37.3% of the bugs stem from API, integration, or configuration errors. \n\nConsequently, the most commonly observed symptoms reported by users are API errors (18.3%), terminal problems (14%), and",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2603.20847"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "SciVisAgentSkills: Design and Evaluation of Agent Skills for Scientific Data Analysis and Visualization",
      "url": "https://arxiv.org/pdf/2606.05525",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "# SciVisAgentSkills: Design and Evaluation of Agent Skills for Scientific Data Analysis and Visualization\n\nKuangshi Ai\\* Univ. Notre Dame Haichao Miao† LLNL\n\nKaiyuan Tang‡ Univ. Notre Dame\n\nShusen Liu§ LLNL\n\nChaoli Wang<sup>¶</sup> Univ. Notre Dame\n\n## **ABSTRACT**\n\nRecent advances in agentic visualization have enabled the translation of natural language into executable scientific visualization (SciVis) workflows. While general-purpose coding agents show strong capabilities, they often lack the tool-specific expertise required for SciVis tasks. In this work, we present SciVisAgentSkills, a collection of reusable agent skills that augment coding agents for scientific data analysis and visualization by encoding environment assumptions, tool usage patterns, and domain heuristics across scientific tools such as ParaView, napari, VMD, and TTK. We evaluate these skills on Codex and Claude Code using SciVis-AgentBench, a benchmark of 108 expert-designed multi-step tasks. \n\nIn this sense, agent skills serve as a reusable layer between a base model and a specialized application domain: foundation models provide general capabilities, agent harnesses manage context and tool execution, and agent skills inject task- and domainspecific expertise.\n\nThe broader agent skill ecosystem has expanded rapidly, with community repositories now hosting thousands of user-contributed agent skills for software engineering, analysis, and enterprise workflows. Prior work suggests that general-purpose coding agents such as Claude Code [6], Codex [32], and Gemini CLI [18] are already competitive on long-horizon visualization tasks, and that agent skills can further improve both success rate and efficiency [3]. Recent work also compares interaction paradigms for SciVis agents and shows tradeoffs among structured tool use, CLI- or GUI-based general interaction, and persistent memory [39]. \n\nWe release a broader multi-tool skill collection, document the common design protocol used to produce it",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2606.05525"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "From Paper to Program: Externalizing and Diagnosing Knowledge Bottlenecks in AI-Assisted Quantum Many-Body Code Generation",
      "url": "https://arxiv.org/pdf/2604.04089",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "# From Paper to Program: Externalizing and Diagnosing Knowledge Bottlenecks in AI-Assisted Quantum Many-Body Code Generation\n\nYi Zhou<sup>1,\\*</sup>\n\n<sup>1</sup>Institute of Physics, Chinese Academy of Sciences, Beijing 100190, China (Dated: June 18, 2026)\n\nLarge language models can write scientific code, but direct paper-to-program translation remains fragile when correctness depends on tacit conventions rather than explicit equations. We frame this as a knowledge-externalization problem: index choices, gauges, fermionic signs, contraction order, validation gates, and scaling constraints must be made explicit before code generation. We evaluate a multi-stage, human-in-the-loop workflow on two quantum many-body tasks. \n\nDMRG from Schollwock's pedagogical review serves as calibration: specification-guided implementations pass in all 16 model pairings, compared with 6/13 direct attempts, and a prose-specification ablation shows that externalized content, not LATEX form, is the active ingredient. Pfaffian conversion of HFB states to MPS from the five-page Letter by Jin et al. serves as the stress test: no public implementation is available, and success depends on tacit sign, gauge, ordering, and scalability conventions. Here the workflow yields 11/26 audited passes, while direct prompting yields none. Cross-specification transfer is asymmetric: non-GPT specifications implemented by GPT 5.5 pass 4/4, whereas GPT 5.5 specifications implemented by weaker models fail 4/4. The contrast supports a two-bottleneck picture. Externalization resolves the first bottleneck—paper-to-code ambiguity—well enough to make DMRG reproducible and Pfaffian-MPS auditable.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2604.04089"
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

Still no direct hit on Jin Lei's personal repo. The slide mentions this is a personal, "not replicable" (不可复制) toolbox that was distilled from his own taste. Let me check his GitHub profile directly.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:25:51.921778Z",
  "stop_timestamp": "2026-07-04T05:25:52.603114Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CSxnCgByvumcfHCXXB43ZN",
  "name": "web_search",
  "input": {
    "query": "jinlei nuclear physics github research-planning literature-wiki debug-physics-first prc-writing skills"
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
  "start_timestamp": "2026-07-04T05:25:53.166504Z",
  "stop_timestamp": "2026-07-04T05:25:53.166519Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01CSxnCgByvumcfHCXXB43ZN",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "nuclear-physics · GitHub Topics · GitHub",
      "url": "https://github.com/topics/nuclear-physics",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "GitHub is where people build software. More than 150 million people use GitHub to discover, fork, and contribute to over 420 million projects.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/topics/nuclear-physics"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - paolofinelli/Theoretical-and-Numerical-Nuclear-Physics-Course: List of notes, codes and everything necessary to my course on theoretical nuclear physics · GitHub",
      "url": "https://github.com/paolofinelli/Theoretical-and-Numerical-Nuclear-Physics-Course",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "List of notes, codes and everything necessary to my course on theoretical nuclear physics - paolofinelli/Theoretical-and-Numerical-Nuclear-Physics-Course",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/paolofinelli/Theoretical-and-Numerical-Nuclear-Physics-Course"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "academic-writing · GitHub Topics · GitHub",
      "url": "https://github.com/topics/academic-writing",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A self-hosted AI assistant for academic research — manages your papers, searches literature, tracks deadlines, and answers you on the channels you already use. telegram-bot self-hosted multi-agent overleaf arxiv autonomous-agents academic-writing scientific-writing overleaf-sync ai-agent feishu-bot research-tools llm ... Light — 全流程科研技能包：28 个技能覆盖文献调研到投稿全流程，配套 9 个可核查知识库。适配主流 AI 编程客户端。 · latex pptx paper-writing codex academic-writing literature-review scientific-workflow ai-agent research-tools scientific-figures agent-skills ai-skills claude-code llm-skills ... 🎓 AI 科研论文写作助手 - 30 个 Prompt 模板覆盖论文写作全流程。支持中英文翻译、润色、文献综述、投稿回复、基金申请等。 · productivity research skill paper-writing academic-writing scientific-writing ai-writing research-tools prompt-engineering openclaw ...\n\nEnd-to-end AI-powered academic paper writing system — from idea generation and literature search to experiment execution, result backfill, and LaTeX paper compilation. Supports multi-LLM routing, SSH remote training, incremental sync, and anti-AI-detection writing style. ssh latex ai remote-execution academic-writing paper-generation llm ... Journal-specific Claude Code/Codex skill packs covering mainstream journals — AER, QJE, Nature, Cell, 管理世界, 经济研究 & 200+ more — your fast track to getting published. ｜ 覆盖主流期刊的 Claude Code/Codex 期刊技能包，从选题、识别策略到表格规范与审稿回复全流程，助你快速发论文。 · agent finance journal skills mcp economics awesome-list codex ai-agents claude academic-writing peer-review scholarly-publishing academic-research research-tools llm anthropic agent-skills claude-code claudecode ...\n\nclaude academic-writing literature-review peer-review ai-research prompt-engineering claude-code academic-pipeline ... codex academic-writing literature-review peer-review ai-research research-assistant academic-research openai-codex prompt-engineering academic-pipeline ... This list of writing prompts covers a range of topics and tasks, including brainstorming research ideas, improving language and style, conducting literature reviews, and developing research plans. writing prompt academic-writing literature-review gpt3 ai-writing gpt4 chatgpt chatgpt-prompts gpt35 customgpt ... A ready-to-fork Claude Code template for academics using LaTeX/Beamer + R. Multi-agent review, quality gates, adversarial QA, and replication protocols. latex reproducible-research economics econometrics causal-inference academic-writing quarto claude-code claude-code-skills research-workflow ...\n\nA self-hosted AI assistant for academic research — manages your papers, searches literature, tracks deadlines, and answers you on the channels you already use. telegram-bot self-hosted multi-agent overleaf arxiv autonomous-agents academic-writing scientific-writing overleaf-sync ai-agent feishu-bot research-tools llm ... Light — 全流程科研技能包：28 个技能覆盖文献调研到投稿全流程，配套 9 个可核查知识库。适配主流 AI 编程客户端。 · latex pptx paper-writing codex academic-writing literature-review scientific-workflow ai-agent research-tools scientific-figures agent-skills ai-skills claude-code llm-skills ... 🎓 AI 科研论文写作助手 - 30 个 Prompt 模板覆盖论文写作全流程。支持中英文翻译、润色、文献综述、投稿回复、基金申请等。 · productivity research skill paper-writing academic-writing scientific-writing ai-writing research-tools prompt-engineering openclaw ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/topics/academic-writing"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Master-cai/Research-Paper-Writing-Skills: Skill package for ML/CV/NLP paper writing, curated and adapted from Prof. Peng Sida's open notes for Codex, Claude Code, and Gemini. · GitHub",
      "url": "https://github.com/Master-cai/Research-Paper-Writing-Skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Skill package for ML/CV/NLP paper writing, curated and adapted from Prof. Peng Sida&#x27;s open notes for Codex, Claude Code, and Gemini. - Master-cai/Research-Paper-Writing-Skills",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://github.com/Master-cai/Research-Paper-Writing-Skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Physical Review C - About Physical Review C",
      "url": "https://journals.aps.org/prc/about",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aps.org",
        "site_name": "APS Journals"
      },
      "is_missing": false,
      "text": "PRC authors gain high visibility and achieve broad dissemination of their work in this leading nuclear physics journal. PRC editors bring attention to outstanding research and elucidate its importance through a number of features: Structured Abstracts: The journal fully supports structured abstracts for authors to articulate the background, purpose, methods, results, and conclusions of their research. Editors’ Suggestions: Selected papers are chosen as Editors’ Suggestions to direct readers to interesting, important, and well-written articles in areas of research beyond their usual interests. They garner, on average, more downloads and citations than other papers published in the journal and are more frequently covered by news outlets. Featured in Physics: Editors regularly notify Physics, APS’s daily online news and commentary publication, about important papers, resulting in coverage in the forms of Synopsis, Focus, or Viewpoint.\n\nAdd to the existing knowledge related to nuclear physics. Make a high-quality, significant contribution in a specific research area and generate interest for PRC's readers. Represent an authoritative and substantive addition to the body of literature. ... At the core of APS's mission is a commitment to meeting the needs of physicists, a community that has been at the leading edge of open access. As a result, APS supports a variety of sustainable access options: Authors can pay an article publication charge (APC) to make accepted manuscripts immediately accessible on publication under a CC-BY (4.0 International) license. In keeping with APS's community orientation, this is the most permissive license available at this time and permits anyone to copy, distribute, transmit, and adapt the work with proper attribution. APCs cover publishing costs and decrease the need for subscription revenue, helping to keep subscription prices low (current APS APCs).\n\nPhysical Review C is a trusted journal for high-quality, significant developments in nuclear physics. Established in 1970, PRC is a trusted, essential resource for nuclear physics researchers, nuclear data aggregators and evaluators, and others who use nuclear science research results. PRC provides a collegial and proactive environment for researchers looking to publish in APS’s Physical Review family of journals. PRC coordinates with other members of APS’s Physical Review of journals to serve new subspecialties as they develop. PRC publishes detailed research articles as well as Letters, which are short accessible papers of particular importance. Whereas Letters are length-restricted, the journal has a flexible approach to article lengths and welcomes submission of longer papers that provide depth and authority in their subject areas. Like all of the journals in the Physical Review family, PRC is shaped by researchers to serve the research community.\n\nPRC authors gain high visibility and achieve broad dissemination of their work in this leading nuclear physics journal. PRC editors bring attention to outstanding research and elucidate its importance through a number of features: Structured Abstracts: The journal fully supports structured abstracts for authors to articulate the background, purpose, methods, results, and conclusions of their research. Editors’ Suggestions: Selected papers are chosen as Editors’ Suggestions to direct readers to interesting, important, and well-written articles in areas of research beyond their usual interests. They garner, on average, more downloads and citations than other papers published in the journal and are more frequently covered by news outlets. Featured in Physics: Editors regularly notify Physics, APS’s daily online news and commentary publication, about important papers, resulting in coverage in the forms of Synopsis, Focus, or Viewpoint.\n\nSCOAP3: As of 2018, PRC is part of the Sponsoring Consortium for Open Access Publishing in Particle Physics. All high-energy physics articles published in PRC since January 1, 2018, and that are posted on arXiv under one of the four \"hep\" primary designations, are made open access under a Creative Commons Attribution license under the auspices of SCOAP3. APS offers authors from lower income countries the opportunity to publish Open Access at no cost by automatically offering APC waivers for articles accepted into all Hybrid and Gold Open Access titles. Learn more here. APS provides free access to its subscription-based journals content for readers in lower income countries through partnerships with Research4Life and other programs. Learn more here. More on APS Open Access Policies, Processes & Partnerships · The PRC Editorial Board is a diverse, global group of active, distinguished scientists, selected by editors in consultation with APS units and appointed by the Executive Editor.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "December 29, 2017",
        "search_provider": "anthropic",
        "url": "https://journals.aps.org/prc/about"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - oslocyclotronlab/Resources-List: A list of useful resources for nuclear physics such as software and webpages · GitHub",
      "url": "https://github.com/oslocyclotronlab/Resources-List",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A list of useful resources for nuclear physics such as software and webpages - oslocyclotronlab/Resources-List",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/oslocyclotronlab/Resources-List"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Physical Review C - APS Journals",
      "url": "https://journals.aps.org/prc/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aps.org",
        "site_name": "APS Journals"
      },
      "is_missing": false,
      "text": "The importance of quadrupole degrees of freedom has long been a hallmark of nuclear structure studies, while octupole degrees of freedom become increasingly important as proton and neutron numbers increase. This work introduces a microscopic collective Hamiltonian built upon multidimensionally constrained covariant density functional theory, incorporating both axial and triaxial quadrupole and octupole modes and their mutual couplings. As an example application, the complex excitation spectrum of · 152Sm is well reproduced, along with a good replication of ... 2 transitions. The unifying microscopic collective Hamiltonian proposed here is relevant for achieving a microscopic description of shape coexistence in nuclei and their associated excitation modes. J. Xiang, J. Zhao, Z. P. Li, and D. Vretenar Phys. Rev. C 113, 044328 (2026) ... Several free-to-publish and Open Access journals from our portfolio have come together to form the Astronomy and Astrophysics Topical Group, dedicated to\n\nA key goal in nuclear astrophysics is explaining the abundance patterns of the elements in combination with observational astrophysical data and nuclear reaction networks. Although two nuclear reaction pathways—the slow ( ... r process) neutron capture processes—are known to produce many heavy elements beyond iron, a process at intermediate neutron densities (the · i process) has been proposed. This process is an additional pathway that occurs in some stellar environments to explain observed elemental abundances. In this work, the authors utilized a ... i process. In addition, the results significantly reduce the uncertainty in the rate of this reaction by determining the ... 88Kr. This work demonstrates that reducing experimental uncertainties in a single neutron-capture reaction can significantly affect comparisons with theoretical predictions of element abundance patterns.\n\nThe results are relevant for future applications of PTQMC to realistic nuclear matter and finite nuclei, as well as for the systematic assessment of perturbative uncertainties in ... X. Zhen, R. Z. Hu, J. C. Pei, and F. R. Xu Phys. Rev. C 113, L051302 (2026) ... P violation and physics beyond the Standard Model. Experimental sensitivity scales with the applied electric field, making higher fields essential for improved measurements. A 1994 proposal to perform an nEDM experiment in superfluid · 4He suggested several potential advantages, including in-situ production of ultracold neutrons with reduced loss and the possibility of higher electric fields. Here, the authors report the outcome of a comprehensive program to develop the high-voltage and electrode system for such an experiment, including new insights into relevant physical phenomena and detailing selected technical solutions with their corresponding experimental demonstrations.\n\nThe importance of quadrupole degrees of freedom has long been a hallmark of nuclear structure studies, while octupole degrees of freedom become increasingly important as proton and neutron numbers increase. This work introduces a microscopic collective Hamiltonian built upon multidimensionally constrained covariant density functional theory, incorporating both axial and triaxial quadrupole and octupole modes and their mutual couplings. As an example application, the complex excitation spectrum of · 152Sm is well reproduced, along with a good replication of ... 2 transitions. The unifying microscopic collective Hamiltonian proposed here is relevant for achieving a microscopic description of shape coexistence in nuclei and their associated excitation modes. J. Xiang, J. Zhao, Z. P. Li, and D. Vretenar Phys. Rev. C 113, 044328 (2026) ... Several free-to-publish and Open Access journals from our portfolio have come together to form the Astronomy and Astrophysics Topical Group, dedicated to\n\nResearchers look back at key contributions to the field of nuclear physics. ... Physical Review C is a trusted journal for significant developments in nuclear physics. Learn more about this journal ... Vol. 114, Iss. 1 — July 2026View Current IssueView All Volumes and Issues · The policy allows authors and reviewers to use AI tools and establishes boundaries to preserve human oversight and accountability. For the first time, we’re offering perpetual rights as an optional enhancement to your APS All subscription. Own the most influential physics research for years to come with Frontlist Perpetual Rights. Ten high-quality studies by authors from around the world have found a home in the American Physical Society’s new community-driven, open access journal. Physical Review C joins the many other journals in the APS journal portfolio in publishing Perspective articles.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://journals.aps.org/prc/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Physical Review C",
      "url": "https://prc.aps.org/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aps.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aps.org",
        "site_name": "Physical Review C"
      },
      "is_missing": false,
      "text": "Several free-to-publish and Open Access journals from our portfolio have come together to form the Astronomy and Astrophysics Topical Group, dedicated to covering a broad range of topics in astronomy and astrophysics, from nuclear astrophysics to exoplanets and planetary atmospheres. ... A new Collection by the Physical Review journals celebrates the 50th anniversary of the discovery of asymptotic freedom in quantum chromodynamics (QCD)—the theoretical basis for the strong force of nature that binds quarks and gluons into hadrons. ... o no-core shell model calculations do well in reproducing experimental energies. Observables with radial dependences, however, such as radii and electric quadrupole moments and transitions, are particularly affected by large-distance tails of the nuclear wave function. Such observables are generally in poorer agreement with experiment and are much more sensitive to the choice of model space.\n\n40 island of inversion. The nature of the results holds promise for a deeper understanding of nuclear structure in a region that harbors shell and shape evolution. L. Lalanne et al. (CERN, ISOLDE Collaboration, IS714) Phys. Rev. C 112, L031301 (2025) ... The American Physical Society (APS) is pleased to announce that it will begin sponsoring Astrobites, a daily astrophysical literature journal written by graduate students in astronomy. This mutually beneficial collaboration aims to enhance the dissemination of research, educational resources, and career insights in the field of astronomy and astrophysics. ... When determining the authorship list for your next paper, be generous yet disciplined. ... APS has appointed Professor Joseph Kapusta, School of Physics and Astronomy, University of Minnesota as the Lead Editor of Physical Review C. Professor Kapusta takes the helm following the journal’s previous Lead Editor Benjamin F.\n\nSeveral free-to-publish and Open Access journals from our portfolio have come together to form the Astronomy and Astrophysics Topical Group, dedicated to covering a broad range of topics in astronomy and astrophysics, from nuclear astrophysics to exoplanets and planetary atmospheres. ... A new Collection by the Physical Review journals celebrates the 50th anniversary of the discovery of asymptotic freedom in quantum chromodynamics (QCD)—the theoretical basis for the strong force of nature that binds quarks and gluons into hadrons. ... o no-core shell model calculations do well in reproducing experimental energies. Observables with radial dependences, however, such as radii and electric quadrupole moments and transitions, are particularly affected by large-distance tails of the nuclear wave function. Such observables are generally in poorer agreement with experiment and are much more sensitive to the choice of model space.\n\nMachine learning (ML) is rapidly becoming an important technique in nuclear physics. However, applying machine learning reliably requires quantifying the uncertainty in an ML model, which can be computationally very expensive, requiring multiple runs of training. Researchers at Lawrence Livermore National Laboratory have, for the first time in nuclear physics, implemented a method to combine training data features with biases also selected from the training data features, which allow for simultaneous fitting and uncertainty quantification. When applied to nuclear binding energies, the new method not only successfully quantifies the errors, but in particular signals when the ML model is extrapolated too far from data and becomes unreliable. This heralds a new ability to extrapolate data to extreme conditions, with reduced computational resources, yet without compromising our knowledge of how trustworthy the extrapolation is.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://prc.aps.org/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "academic-research · GitHub Topics · GitHub",
      "url": "https://github.com/topics/academic-research",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "cli literature-review academic-research llm paperpilot ai-literature-review ... A curated list of research-oriented skills usable in OpenAI Codex, covering writing, literature review, evaluation, and research workflows. academic-writing literature-review academic-research openai-codex agent-skills research-workflow ... python nlp machine-learning arxiv pdf-parser literature-review research-proposal citation-analysis scientific-papers rag research-assistant fastapi hypothesis-generation semantic-scholar academic-research ai-agent langchain retrieval-augmented-generation paper-search research-workflow ... Shareable Claude Code infrastructure for PhD researchers — skills, agents, hooks, and rules for academic workflows · latex phd claude academic-research ai-tools claude-code research-workflow ... Add a description, image, and links to the academic-research topic page so that developers can more easily learn about it.\n\ncodex academic-writing literature-review peer-review ai-research research-assistant academic-research openai-codex prompt-engineering academic-pipeline ... Semi-automated research assistant for academic research and software development. Supports Claude Code, Codex CLI, Kimi Code CLI, and OpenCode across ideation, coding, experiments, writing, and publication. mcp opencode developer-tools zotero paper-writing ai-agents claude academic-research openai-codex claude-code codex-cli kimi-code ... 🔬 A curated collection of 23,000+ agent skills for empirical research across 8 social science disciplines. | 精选 23,000+ AI Agent 技能库，覆盖8大社会科学学科的实证研究。CoPaper.AI 20分钟完成一篇可复现的规范实证论文，并支持用户上传 Skills。-- Maintained by CoPaper.AI from Stanford REAP. education communication reproducible-research sociology economics political-science psychology awesome-list international-relations social-science public-administration empirical-research academic-research ai-agent agent-skills skills-library copaper ...\n\ngithub-pages research-tool arxiv literature-review github-actions openreview arxiv-papers academic-research paper-recommendation llm ... Open‑WebUI Tools is a modular toolkit designed to extend and enrich your Open WebUI instance, turning it into a powerful AI workstation. With a suite of over 15 specialized tools, function pipelines, and filters, this project supports academic research, agentic autonomy, multimodal creativity, workflows, and more · multi-agent image-generation arxiv music-generation ai-agents video-generation academic-research llm llms comfyui llm-tools local-ai ollama open-webui semantic-routing ai-workstation letta ... Journal-specific Claude Code/Codex skill packs covering mainstream journals — AER, QJE, Nature, Cell, 管理世界, 经济研究 & 200+ more — your fast track to getting published. ｜ 覆盖主流期刊的 Claude Code/Codex 期刊技能包，从选题、识别策略到表格规范与审稿回复全流程，助你快速发论文。 ·\n\nskill mcp codex literature-review hypothesis-generation semantic-scholar academic-research scientific-discovery autonomous-research research-agent ai-scientist deep-research claude-code research-orchestration autoresearch auto-research agent-native-research-artifact ... Google search MCP. One MCP replaces search + fetch + academic-paper extractor. fetch mcp google-search self-healing pdf-processing playwright academic-research model-context-protocol ... Academic research skills suite for Claude Code — literature search (arXiv+PubMed+WoS), PDF extraction, figure cropping, review writing, Zotero sync, and PPT generation. agent skills opencode zotero pptx codex academic-research llm-tools claude-code openclaw ... AI semantic search for Zotero, with a built-in MCP server for AI agents (Claude Code, Codex). Find papers by meaning. 100% local and private.\n\ncli literature-review academic-research llm paperpilot ai-literature-review ... A curated list of research-oriented skills usable in OpenAI Codex, covering writing, literature review, evaluation, and research workflows. academic-writing literature-review academic-research openai-codex agent-skills research-workflow ... python nlp machine-learning arxiv pdf-parser literature-review research-proposal citation-analysis scientific-papers rag research-assistant fastapi hypothesis-generation semantic-scholar academic-research ai-agent langchain retrieval-augmented-generation paper-search research-workflow ... Shareable Claude Code infrastructure for PhD researchers — skills, agents, hooks, and rules for academic workflows · latex phd claude academic-research ai-tools claude-code research-workflow ... Add a description, image, and links to the academic-research topic page so that developers can more easily learn about it.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/topics/academic-research"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Nuclear Physics | Physics | Illinois",
      "url": "https://physics.illinois.edu/research/groups-and-centers/nuclear-physics",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "illinois.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=illinois.edu",
        "site_name": "University of Illinois Physics"
      },
      "is_missing": false,
      "text": "Nuclear fusion in stars and nuclear processes at the end of stellar life have formed the rich spectrum of elements we observe in nature · Nuclear physics is the study of the structure of nuclei—their formation, stability, and decay.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://physics.illinois.edu/research/groups-and-centers/nuclear-physics"
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

The specific personal repo doesn't appear in searches. Based on the slide text and my findings, here's the answer:

**Fact vs. assumption**

**Facts (verified):**
- Jin Lei (雷金) is a Professor of Physics at Tongji University's School of Physics Science and Engineering, working on nuclear reactions (confirmed via his ResearchGate profile and Google Scholar, listing Tongji University and nuclear reactions).
- The slide you uploaded describes his personal skill toolbox: `research-planning`, `research-profile`, `todo`, `literature-wiki`, `literature-search`, `debug-physics-first`, `prc-writing`, `prl-writing`, `review-writing`, and `slidev-talk`.

**Assumption stated by the author himself:** The slide explicitly says this is "个人品味的蒸馏, 不可复制" — *"a distillation of personal taste, not replicable."* That phrasing signals the author considers it a personal, non-packaged workflow rather than a distributed product.

**On a public repo — I could not verify one exists.** I ran multiple searches (his name, the specific skill names like `literature-wiki` / `debug-physics-first` / `prc-writing`, and combinations with Tongji/GitHub) and found no public repository containing this exact skill set. I could not access or confirm his personal GitHub profile through search. This is an *absence of found evidence*, not proof that no repo exists — the searches simply didn't surface one.

What I'd suggest for a definitive answer, since I can't verify these directly:
- Check his GitHub directly. His Google Scholar profile (scholar.google.com/citations?user=ft9l8c8AAAAJ) or ResearchGate may link a GitHub handle.
- The slide came from somewhere (a talk, WeChat post, Zhihu, or X/Twitter thread). Whoever shared it is the most reliable source for whether the skills are published.
- The `slidev-talk` note says the slide *itself* was generated by that skill — so the original posting context likely includes any repo link if one was released.

Do you have a link to where you found this slide? That's the fastest path — I can fetch it and check for a repo reference directly.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2b96-e779-7850-9c43-d73dd4c4f520",
  "updated_at": "2026-07-04T05:26:06.221208Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f2b96-e779-71d1-a957-8986a784612d"
}
```

</details>

### 3. human — 2026-07-04T05:32:16.972114Z

https://jinlei.fewbody.com/

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2b9c-f423-7732-8d68-e0aca9922c0f",
  "updated_at": "2026-07-04T05:32:16.972114Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f2b96-e779-7850-9c43-d73dd4c4f520"
}
```

</details>

### 4. assistant — 2026-07-04T05:33:00.497594Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:32:16.968185Z",
  "stop_timestamp": "2026-07-04T05:32:17.011283Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015bxGZJucCi3XxtGhCX76kY",
  "name": "web_fetch",
  "input": {
    "url": "https://jinlei.fewbody.com/"
  },
  "message": "Fetching: https://jinlei.fewbody.com/",
  "integration_name": "Web Fetch",
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
  "start_timestamp": "2026-07-04T05:32:18.276556Z",
  "stop_timestamp": "2026-07-04T05:32:18.276568Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_015bxGZJucCi3XxtGhCX76kY",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "",
      "url": "https://jinlei.fewbody.com/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "fewbody.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=fewbody.com",
        "site_name": "fewbody"
      },
      "is_missing": false
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: https://jinlei.fewbody.com/",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=fewbody.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://jinlei.fewbody.com/",
      "subtitles": null,
      "url": "https://jinlei.fewbody.com/",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=fewbody.com",
      "source": "fewbody"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

Confirmed his identity and GitHub (`jinleiphys`). There's also an "AI Use" page, which is the most likely place to describe these skills. Let me check both.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:32:20.717102Z",
  "stop_timestamp": "2026-07-04T05:32:20.725243Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01L9GQ6gundeTBo662ghZgig",
  "name": "web_fetch",
  "input": {
    "url": "https://jinleiphys.github.io/ai-use/"
  },
  "message": "Fetching: https://jinleiphys.github.io/ai-use/",
  "integration_name": "Web Fetch",
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
  "start_timestamp": "2026-07-04T05:32:21.894442Z",
  "stop_timestamp": "2026-07-04T05:32:21.894457Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01L9GQ6gundeTBo662ghZgig",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "",
      "url": "https://jinleiphys.github.io/ai-use/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
        "site_name": "github"
      },
      "is_missing": false
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: https://jinleiphys.github.io/ai-use/",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://jinleiphys.github.io/ai-use/",
      "subtitles": null,
      "url": "https://jinleiphys.github.io/ai-use/",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

The AI Use page describes his philosophy but doesn't link the specific skills. Let me check his GitHub profile directly for a public repo containing these skills.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:32:23.989543Z",
  "stop_timestamp": "2026-07-04T05:32:24.420586Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CRoiD85YcbB8kaoscQevH8",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/jinleiphys?tab=repositories"
  },
  "message": "Fetching: https://github.com/jinleiphys?tab=repositories",
  "integration_name": "Web Fetch",
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
  "start_timestamp": "2026-07-04T05:32:24.616190Z",
  "stop_timestamp": "2026-07-04T05:32:24.616203Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01CRoiD85YcbB8kaoscQevH8",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "jinleiphys - Overview",
      "url": "http://github.com/jinleiphys",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "github"
      },
      "is_missing": false
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: jinleiphys - Overview",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "jinleiphys - Overview",
      "subtitles": null,
      "url": "http://github.com/jinleiphys",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

He has 57 repositories, but only the popular ones are shown here (scatt2b, latex-advice, inhomoR, notes, COLOSS, cfac) — none is the skills toolbox. Let me search his repos specifically for skill-related names.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:32:27.093505Z",
  "stop_timestamp": "2026-07-04T05:32:27.495612Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01NkgkqdyNksZkMrusVqyzFx",
  "name": "web_search",
  "input": {
    "query": "github.com/jinleiphys skills claude research-planning literature-wiki slidev"
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
  "start_timestamp": "2026-07-04T05:32:28.103298Z",
  "stop_timestamp": "2026-07-04T05:32:28.103309Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01NkgkqdyNksZkMrusVqyzFx",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - Imbad0202/academic-research-skills: Academic Research Skills for Claude Code: research → write → review → revise → finalize",
      "url": "https://github.com/imbad0202/academic-research-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Academic Research Skills for Claude Code: research → write → review → revise → finalize - Imbad0202/academic-research-skills",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 day ago",
        "search_provider": "anthropic",
        "url": "https://github.com/imbad0202/academic-research-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - BehiSecc/awesome-claude-skills: A curated list of Claude Skills. · GitHub",
      "url": "https://github.com/BehiSecc/awesome-claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A curated list of Claude Skills. Contribute to BehiSecc/awesome-claude-skills development by creating an account on GitHub.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 month ago",
        "search_provider": "anthropic",
        "url": "https://github.com/BehiSecc/awesome-claude-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - lishix520/academic-paper-skills: Systematic framework for planning and writing academic papers using Claude Code. Includes strategist (planning) and composer (writing) skills with quality checkpoints. · GitHub",
      "url": "https://github.com/lishix520/academic-paper-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Systematic framework for planning and writing academic papers using Claude Code. Includes strategist (planning) and composer (writing) skills with quality checkpoints. - lishix520/academic-paper-skills\n\nSystematic framework for planning and writing academic papers using Claude Code. Includes strategist (planning) and composer (writing) skills with quality checkpoints. - lishix520/academic-paper-skills",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/lishix520/academic-paper-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - ComposioHQ/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows · GitHub",
      "url": "https://github.com/ComposioHQ/awesome-claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows - ComposioHQ/awesome-claude-skills",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 23, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/ComposioHQ/awesome-claude-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - luwill/research-skills: Some commonly used research experiences and processes are encapsulated into Agent skills. · GitHub",
      "url": "https://github.com/luwill/research-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A collection of Claude Code skills for academic research workflows. ... A collaborative system where 5 specialized AI agents work together to produce conference-quality survey papers.\n\nA collection of Claude Code skills for academic research workflows. ... A collaborative system where 5 specialized AI agents work together to produce conference-quality survey papers. ... # For medical-imaging-review cp -r medical-imaging-review ~/.claude/skills/ # For paper-slide-deck cp -r paper-slide-deck ~/.claude/skills/ # For research-proposal cp -r research-proposal ~/.claude/skills/ ... cp -r medical-imaging-review .agents/skills/ cp -r paper-slide-deck .agents/skills/ cp -r research-proposal .agents/skills/ A systematic workflow for writing survey papers, systematic reviews, and literature analyses on medical imaging AI topics. Structured 7-phase workflow for literature review writing · Domain-specific templates covering multiple medical imaging domains · Standardized writing style with hedging language and citation patterns ... Transform academic papers into professional slide decks with automatic figure extraction and AI-generated visuals.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 25, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/luwill/research-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - abubakarsiddik31/claude-skills-collection: A curated collection of official and community-built Claude Skills – extend Anthropic's Claude with powerful, modular capabilities for productivity, creativity, coding, and more.",
      "url": "https://github.com/abubakarsiddik31/claude-skills-collection",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A curated collection of official and community-built Claude Skills – extend Anthropic&#x27;s Claude with powerful, modular capabilities for productivity, creativity, coding, and more. - abubakar...\n\nA curated collection of official and community-built Claude Skills – extend Anthropic's Claude with powerful, modular capabilities for productivity, creativity, coding, and more. - abubakarsiddik31/claude-skills-collection",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/abubakarsiddik31/claude-skills-collection"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-skills · GitHub Topics · GitHub",
      "url": "https://github.com/topics/claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "GitHub is where people build software. More than 150 million people use GitHub to discover, fork, and contribute to over 420 million projects.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 28, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/topics/claude-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Orchestra-Research/AI-Research-SKILLs: Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. · GitHub",
      "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepowe...\n\nComprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. - Orchestra-Research/AI-Research-SKILLs\n\nAutoresearch - Autonomous research orchestration using a two-loop architecture (inner optimization + outer synthesis). Manages the full lifecycle from literature survey to paper writing, routing to all domain-specific skills. Supports Claude Code /loop and OpenClaw heartbeat for continuous operation (390 lines + 3 refs) LitGPT - Lightning AI's 20+ clean LLM implementations with production training recipes (462 lines + 4 refs) Mamba - State-space models with O(n) complexity, 5× faster than Transformers (253 lines + 3 refs) RWKV - RNN+Transformer hybrid, infinite context, Linux Foundation project (253 lines + 3 refs) NanoGPT - Educational GPT in ~300 lines by Karpathy (283 lines + 3 refs) TorchTitan - PyTorch-native distributed training for Llama 3.1 with 4D parallelism ·\n\nAuto-detects your installed coding agents (Claude Code, Hermes Agent, OpenCode, Qoder, Cursor, Gemini CLI, etc.) Installs skills to ~/.orchestra/skills/ with symlinks to each agent (falls back to copy on Windows) Offers everything, quickstart bundle, by category, or individual skills ... # Interactive installer (recommended) npx @orchestra-research/ai-research-skills # Direct commands npx @orchestra-research/ai-research-skills list # View installed skills npx @orchestra-research/ai-research-skills update # Update installed skills ...\n\nclaude-ai-research-skills/ ├── README.md ← You are here ├── CONTRIBUTING.md ← Contribution guide ├── demos/ ← Curated demo gallery (links to demo repos) ├── docs/ ├── 0-autoresearch-skill/ (1 skill ✓ - Autonomous research orchestration) ├── 01-model-architecture/ (5 skills ✓ - LitGPT, Mamba, RWKV, NanoGPT, TorchTitan) ├── 02-tokenization/ (2 skills ✓ - HuggingFace Tokenizers, SentencePiece) ├── 03-fine-tuning/ (4 skills ✓ - Axolotl, LLaMA-Factory, Unsloth, PEFT) ├── 04-mechanistic-interpretability/ (4 skills ✓ - TransformerLens, SAELens, pyvene, nnsight) ├── 05-data-processing/ (2 skills ✓ - Ray Data, NeMo Curator) ├── 06-post-training/ (8 skills ✓ - TRL, GRPO, OpenRLHF, SimPO, verl, slime, miles, torchforge) ├── 07-safety-alignment/ (4 skills ✓ - Constitutional AI, LlamaGuard, NeMo Guardrails, Prompt Guard) ├── 08-distributed-training/ (6 skills ✓ - Megatron-Core, DeepSpeed, FSDP, Accelerate, Lightning, Ray Train) ├── 09-infrastructure/ (3 skills ✓ - Modal, SkyPilot, Lambda Labs) ├──",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 weeks ago",
        "search_provider": "anthropic",
        "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - travisvn/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows — particularly Claude Code",
      "url": "https://github.com/travisvn/awesome-claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows — particularly Claude Code - travisvn/awesome-claude-skills",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/travisvn/awesome-claude-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - kfchou/wiki-skills: LLM-maintained personal wiki skills for Claude Code — implements Karpathy's LLM Wiki pattern",
      "url": "https://github.com/kfchou/wiki-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "LLM-maintained personal wiki skills for Claude Code — implements Karpathy&#x27;s LLM Wiki pattern - kfchou/wiki-skills",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 1, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/kfchou/wiki-skills"
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

Still no dedicated skills repo found under `jinleiphys`. Let me check his "Talks" page, since the slide was clearly from a talk (the slide itself says it was generated by `slidev-talk`), which may link to the presentation and repo.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:32:31.059206Z",
  "stop_timestamp": "2026-07-04T05:32:31.065551Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017VRTVsoPfdH5q6S2ATMtfo",
  "name": "web_fetch",
  "input": {
    "url": "https://jinleiphys.github.io/talks/"
  },
  "message": "Fetching: https://jinleiphys.github.io/talks/",
  "integration_name": "Web Fetch",
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
  "start_timestamp": "2026-07-04T05:32:32.146505Z",
  "stop_timestamp": "2026-07-04T05:32:32.146515Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_017VRTVsoPfdH5q6S2ATMtfo",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Talks · Jin Lei",
      "url": "https://jinleiphys.github.io/talks/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
        "site_name": "github"
      },
      "is_missing": false
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Talks · Jin Lei",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Talks · Jin Lei",
      "subtitles": null,
      "url": "https://jinleiphys.github.io/talks/",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

The slide you uploaded matches the June 23 IMP talk (近物所) or the SUSTech June 17 talk — both explicitly reference "四个月十六篇论文" (16 papers in four months). Note this is your own institute, IMP. Let me fetch the SUSTech talk slides, which most closely matches the "16 papers" pipeline framing, to look for a skills repo link.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:32:36.023569Z",
  "stop_timestamp": "2026-07-04T05:32:36.429220Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01YPTKs7uyVgiwieSKA3mDUn",
  "name": "web_fetch",
  "input": {
    "url": "https://jinlei.fewbody.com/talks/sustech-talk/"
  },
  "message": "Fetching: https://jinlei.fewbody.com/talks/sustech-talk/",
  "integration_name": "Web Fetch",
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
  "start_timestamp": "2026-07-04T05:32:38.025471Z",
  "stop_timestamp": "2026-07-04T05:32:38.025484Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01YPTKs7uyVgiwieSKA3mDUn",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "四天 vs 三个月：Vibe Research in Direct Nuclear Reactions - Slidev",
      "url": "https://jinlei.fewbody.com/talks/sustech-talk/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "fewbody.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=fewbody.com",
        "site_name": "fewbody"
      },
      "is_missing": false
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: 四天 vs 三个月：Vibe Research in Direct Nuclear Reactions - Slidev",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=fewbody.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "四天 vs 三个月：Vibe Research in Direct Nuclear Reactions - Slidev",
      "subtitles": null,
      "url": "https://jinlei.fewbody.com/talks/sustech-talk/",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=fewbody.com",
      "source": "fewbody"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

The Slidev deck renders client-side, so the fetch didn't capture body content. Let me search his GitHub repos list for the slides/talks source repo, which would reveal whether the skills are published alongside.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-04T05:32:40.577685Z",
  "stop_timestamp": "2026-07-04T05:32:41.087464Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0123TRqQEwp1QA7PqtAwnWXP",
  "name": "web_search",
  "input": {
    "query": "jinleiphys github talks slidev vibe research repository skills SOP knowledge base"
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
  "start_timestamp": "2026-07-04T05:32:41.653329Z",
  "stop_timestamp": "2026-07-04T05:32:41.653341Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_0123TRqQEwp1QA7PqtAwnWXP",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "slidev · GitHub Topics · GitHub",
      "url": "https://github.com/topics/slidev",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "💬🗣️ Public talks I presented historically in Demo Day, Demo Inn, KubeCon, @DaoCloud, all built with @slidevjs ... Sitio web con presentaciones interactivas usando Kalouk. ... Arrows with fancy styles and intuitive positioning for Slidev. ... A Unicorn theme for Slidev slides based on dawntraoz.com design. ... A theme for Slidev, inspired by the Frankfurt theme in Beamer. ... react nix vue nextjs postgresql storybook remix figma mdx nx nestjs tailwind-css playwright trunk-based-development slidev payloadcms diataxis shadcn-ui drizzle-orm fumadocs ... Add a description, image, and links to the slidev topic page so that developers can more easily learn about it. ... To associate your repository with the slidev topic, visit your repo&#x27;s landing page and select &quot;manage topics.&quot; ...\n\n💬🗣️ Public talks I presented historically in Demo Day, Demo Inn, KubeCon, @DaoCloud, all built with @slidevjs ... Sitio web con presentaciones interactivas usando Kalouk. ... Arrows with fancy styles and intuitive positioning for Slidev. ... A Unicorn theme for Slidev slides based on dawntraoz.com design. ... A theme for Slidev, inspired by the Frankfurt theme in Beamer. ... react nix vue nextjs postgresql storybook remix figma mdx nx nestjs tailwind-css playwright trunk-based-development slidev payloadcms diataxis shadcn-ui drizzle-orm fumadocs ... Add a description, image, and links to the slidev topic page so that developers can more easily learn about it. ... To associate your repository with the slidev topic, visit your repo's landing page and select \"manage topics.\" ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/topics/slidev"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - rhuss/cc-slidev: Claude Code plugin for creating developer-focused technical presentations using Slidev with evidence-based design guardrails · GitHub",
      "url": "https://github.com/rhuss/cc-slidev",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Create developer-focused technical presentations using Slidev with evidence-based design guardrails · A Claude Code plugin for creating technical presentations powered by Slidev - the presentation framework for developers. Specifically designed for tech talks, conference presentations, internal demos, and developer-focused content. Key differentiator: Evidence-based design principles are enforced as guardrails, not suggestions. The plugin automatically prevents common presentation mistakes through hard limits based on cognitive science research. See real-world technical presentations created with this plugin, including source code and PDF exports: GPUs on Kubernetes Unlocked - Technical deep-dive on GPU scheduling (PDF) Lifting LLMs on K8s - Running large language models on Kubernetes (PDF) Slidev is a web-based presentation tool built for developers.\n\nCreate developer-focused technical presentations using Slidev with evidence-based design guardrails · A Claude Code plugin for creating technical presentations powered by Slidev - the presentation framework for developers. Specifically designed for tech talks, conference presentations, internal demos, and developer-focused content. Key differentiator: Evidence-based design principles are enforced as guardrails, not suggestions. The plugin automatically prevents common presentation mistakes through hard limits based on cognitive science research. See real-world technical presentations created with this plugin, including source code and PDF exports: GPUs on Kubernetes Unlocked - Technical deep-dive on GPU scheduling (PDF) Lifting LLMs on K8s - Running large language models on Kubernetes (PDF) Slidev is a web-based presentation tool built for developers.\n\nWrite your slides in markdown, use Vue components, live code with Monaco editor, and export to PDF/PPTX. This plugin adds intelligent automation, evidence-based guardrails, and complete workflow management on top of Slidev's powerful foundation. These are not suggestions - they're automatic hard limits based on cognitive science research: ≤6 elements per slide - Prevents information overload (Miller's Law: working memory holds 7±2 items) <50 words body text - Ensures slides support speech, not replace it · One idea per slide - Automatically splits dense content into focused slides · Meaningful assertion titles - \"System handles 10K req/sec\" not \"Results\" 18pt+ fonts, 4.5:1+ contrast - Accessibility by default, not afterthought · Colorblind-safe palettes - Blue + Orange default (tested for all types of colorblindness) When content exceeds limits: The plugin creates additional slides instead of cramming.\n\nTip: Start with /slidev:init Your Topic for a guided end-to-end workflow, or use individual commands for specific phases.\n\n# Validate plugin manifests make validate # Install or reinstall make install make reinstall # Test workflow /slidev:init Test Presentation · See CONTRIBUTING.md for details and ARCHITECTURE.md for system design. ... See CONTRIBUTING.md for development setup and workflow. Feedback and suggestions are welcome via issues.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/rhuss/cc-slidev"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - slidevjs/slidev: Presentation Slides for Developers · GitHub",
      "url": "https://github.com/slidevjs/slidev",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Presentation Slides for Developers. Contribute to slidevjs/slidev development by creating an account on GitHub.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/slidevjs/slidev"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "slidev - Claude Code Plugin",
      "url": "https://www.claudepluginhub.com/plugins/rhuss-slidev-slidev",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudepluginhub.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudepluginhub.com",
        "site_name": "ClaudePluginHub"
      },
      "is_missing": false,
      "text": "A Claude Code plugin for creating technical presentations powered by Slidev - the presentation framework for developers. Specifically designed for tech talks, conference presentations, internal demos, and developer-focused content. Key differentiator: Evidence-based design principles are enforced ...\n\nBuild complete Slidev presentations from init to export: generate outlines and markdown slides, automate add/delete/move/renumber with git, enhance with Mermaid/PlantUML/Excalidraw diagrams and visuals, add presenter notes, create LaTeX handouts with embedded images, preview/export to PDF/PPTX/PNG, and validate design/accessibility via checklists. ... Based on adoption, maintenance, documentation, and repository signals. Not a security audit or endorsement. ... You are a presentation outline validation specialist focused on ensuring outlines are complete, logical, and achievable within time constraints using evidence-based timing guidelines. ... You are a visual enhancement specialist focused on suggesting appropriate diagrams, images, and visual elements that improve presentation effectiveness. ... This skill should be used when the user asks to \"create mermaid diagram\", \"add visuals to slides\", \"suggest stock photos\", \"generate AI image prompts\", \"create diagram for presentation\", \"d\n\nA Claude Code plugin for creating technical presentations powered by Slidev - the presentation framework for developers. Specifically designed for tech talks, conference presentations, internal demos, and developer-focused content. Key differentiator: Evidence-based design principles are enforced as guardrails, not suggestions. The plugin automatically prevents common presentation mistakes through hard limits based on cognitive science research. See real-world technical presentations created with this plugin, including source code and PDF exports: GPUs on Kubernetes Unlocked - Technical deep-dive on GPU scheduling (PDF) Lifting LLMs on K8s - Running large language models on Kubernetes (PDF) Slidev is a web-based presentation tool built for developers. Write your slides in markdown, use Vue components, live code with Monaco editor, and export to PDF/PPTX.\n\nThis plugin adds intelligent automation, evidence-based guardrails, and complete workflow management on top of Slidev's powerful foundation. These are not suggestions - they're automatic hard limits based on cognitive science research: ≤6 elements per slide - Prevents information overload (Miller's Law: working memory holds 7±2 items) <50 words body text - Ensures slides support speech, not replace it · One idea per slide - Automatically splits dense content into focused slides · Meaningful assertion titles - \"System handles 10K req/sec\" not \"Results\" 18pt+ fonts, 4.5:1+ contrast - Accessibility by default, not afterthought · Colorblind-safe palettes - Blue + Orange default (tested for all types of colorblindness) When content exceeds limits: The plugin creates additional slides instead of cramming. Quality over convenience. Code syntax highlighting - Shiki/Prism integration with 100+ languages ·\n\n# Add the marketplace (once) /plugin marketplace add rhuss/cc-rhuss-marketplace # Install the plugin /plugin install slidev@cc-rhuss-marketplace ... git clone https://github.com/rhuss/cc-slidev.git cd cc-slidev # Install plugin via Makefile make install # After making changes, reinstall make reinstall · See CONTRIBUTING.md for the full development workflow. Here's a full end-to-end workflow for creating a technical presentation: ... Create polished, professional reveal.js presentations with themes, multi-column layouts, callout boxes, code highlighting, animations, speaker notes, and custom styling. Generates HTML + CSS with no build step required. ... End-to-end slide deck creation via RDIV workflow. Requires paperbanana plugin for image generation. ... AI-powered HTML presentation generator with 20 curated design presets, PPTX export, and Excalidraw diagrams ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "March 9, 2026",
        "search_provider": "anthropic",
        "url": "https://www.claudepluginhub.com/plugins/rhuss-slidev-slidev"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "skills · GitHub Topics · GitHub",
      "url": "https://github.com/topics/skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "i18n go golang jwt admin ai vue skills mcp gin gorm element-ui vue-admin claw casbin vue3 go-admin gin-admin gin-vue-admin vibecoding ... Add a description, image, and links to the skills topic page so that developers can more easily learn about it. ... To associate your repository with the skills topic, visit your repo&#x27;s landing page and select &quot;manage topics.&quot; ...\n\nagent design ai frontend skills skill coding codex claude nocode lowcode vibecoding claude-code ... AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs · skills codex ai-agent deepseek agent-skills vibe-coding claude-code openclaw hermes-agent awesome-skills ...\n\ni18n go golang jwt admin ai vue skills mcp gin gorm element-ui vue-admin claw casbin vue3 go-admin gin-admin gin-vue-admin vibecoding ... Add a description, image, and links to the skills topic page so that developers can more easily learn about it. ... To associate your repository with the skills topic, visit your repo's landing page and select \"manage topics.\" ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 26, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/topics/skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - marcoshaber99/slidev-skills: Agent Skills for Slidev. Helps AI agents generate correct presentation code · GitHub",
      "url": "https://github.com/marcoshaber99/slidev-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Agent Skills for Slidev. Presentation Slides for Developers. Helps AI agents (Claude Code, Cursor, Codex, Copilot) generate correct Slidev code by encoding best practices and preventing common mistakes. ... Or manually copy skills/slidev to .claude/skills/ or .github/skills/ in your project.\n\nAgent Skills for Slidev. Presentation Slides for Developers. Helps AI agents (Claude Code, Cursor, Codex, Copilot) generate correct Slidev code by encoding best practices and preventing common mistakes. ... Or manually copy skills/slidev to .claude/skills/ or .github/skills/ in your project.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/marcoshaber99/slidev-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "vibe-research · GitHub Topics · GitHub",
      "url": "https://github.com/topics/vibe-research",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "GitHub is where people build software. More than 150 million people use GitHub to discover, fork, and contribute to over 420 million projects.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/topics/vibe-research"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Orchestra-Research/AI-Research-SKILLs: Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. · GitHub",
      "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower.\n\nComprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research. - Orchestra-Research/AI-Research-SKILLs",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 weeks ago",
        "search_provider": "anthropic",
        "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "research-skills · GitHub Topics · GitHub",
      "url": "https://github.com/topics/research-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "awesome skills awesome-list ai-research ai-researcher phd-research research-skills vibe-research ... 42 AI agent skills for literature review, academic writing, citation verification, conference submission, rebuttal, publication, and presentations. open-source latex reproducibility paper-writing research-paper ai-agents academic-writing literature-review peer-review scientific-writing paper-submission academic-research rebuttal research-tools citation-verification llms-txt agent-skills research-skills ai-research-tools phd-tools ... 📚 Elevate your reading with the Deep Reading Analyst skill, using 10+ frameworks for systematic analysis and deeper comprehension. machine-learning natural-language-processing data-mining programming text-analysis data-visualization reading-comprehension learning-resources ai-in-education academic-support educational-tools research-skills deep-reading critical-reading analysis-techniques ...\n\nawesome skills awesome-list ai-research ai-researcher phd-research research-skills vibe-research ... 42 AI agent skills for literature review, academic writing, citation verification, conference submission, rebuttal, publication, and presentations. open-source latex reproducibility paper-writing research-paper ai-agents academic-writing literature-review peer-review scientific-writing paper-submission academic-research rebuttal research-tools citation-verification llms-txt agent-skills research-skills ai-research-tools phd-tools ... 📚 Elevate your reading with the Deep Reading Analyst skill, using 10+ frameworks for systematic analysis and deeper comprehension. machine-learning natural-language-processing data-mining programming text-analysis data-visualization reading-comprehension learning-resources ai-in-education academic-support educational-tools research-skills deep-reading critical-reading analysis-techniques ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/topics/research-skills"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "skills repositories · GitHub",
      "url": "https://github.com/orgs/skills/repositories",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Learn how to use GitHub in GitHub using interactive exercises. - GitHub Skills",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 14, 2026",
        "search_provider": "anthropic",
        "url": "https://github.com/orgs/skills/repositories"
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

I've done a thorough search. Here's my assessment.

## Answer: No public repo found for these specific skills

**Facts I verified (primary sources):**

The slide is from Jin Lei (金磊 / 雷金), a professor at Tongji University's physics department, School of Physics Science and Engineering (source: [jinlei.fewbody.com](https://jinlei.fewbody.com/), his personal page; his email jinl@tongji.edu.cn and GitHub `jinleiphys` are listed there). His research is nuclear reaction theory / quantum few-body problems.

The specific slide you uploaded matches his "16 papers in four months" (四个月十六篇论文) talk series — this exact framing appears in his SUSTech (Jun 17), IMP/近物所 (Jun 23), and Fudan AI-Agent (Jul 4) talks, per his [Talks page](https://jinlei.fewbody.com/talks/). Notably, the June 23 talk was *at your own institute, IMP*.

His talks are all built with Slidev and hosted at jinleiphys.github.io/talks (stated at the bottom of the Talks page: "Powered by Slidev & GitHub Pages").

**What I could NOT verify — no public skills repo:**

I searched his GitHub (`jinleiphys`, 57 repos — I could only see the 6 "popular" ones: scatt2b, latex-advice, inhomoR, notes, COLOSS, cfac; none is the skill toolbox), plus keyword searches for the exact skill names (`research-planning`, `literature-wiki`, `debug-physics-first`, `prc-writing`, `slidev-talk`, etc.). **None surfaced a repository containing these skills.** This is *absence of found evidence*, not proof none exists — the other 51 repos on his profile weren't visible to me, and any repo could be private.

**Strong contrary signal from the primary source itself:** The slide explicitly labels this toolbox "个人品味的蒸馏, 不可复制" — *"a distillation of personal taste, not replicable."* And his July 4 Fudan talk describes the philosophy as building "一个人的知识库" (one person's private knowledge base) by training the AI agent like a graduate student. Both strongly suggest he presents this as a *personal, deliberately non-packaged* workflow rather than a distributable product — so a public repo may not exist by design.

**Your most reliable next steps (I can't access these directly):**
1. Email him: jinl@tongji.edu.cn — the fastest definitive answer, and you share an institute (IMP), which is a natural connection.
2. Browse his full repo list yourself while logged in: [github.com/jinleiphys?tab=repositories](https://github.com/jinleiphys?tab=repositories) (I could only see 6 of 57).
3. Check the June 23 IMP talk deck's final slides at [jinlei.fewbody.com/talks/imp-talk](https://jinlei.fewbody.com/talks/imp-talk/) — talk decks often end with a resources/links slide. (I couldn't read it because Slidev renders client-side and my fetch returned only metadata.)

Want me to try fetching any of the individual talk decks another way, or draft a short email to him asking whether the skills are shared?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f2b9c-f423-74cb-bb0b-e158ca22d0d9",
  "updated_at": "2026-07-04T05:33:00.497594Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f2b9c-f423-7732-8d68-e0aca9922c0f"
}
```

</details>
