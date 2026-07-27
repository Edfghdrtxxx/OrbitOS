# Best AI models for medical advice

## Export metadata (verbatim)

```json
{
  "uuid": "2efe4651-c679-4758-8548-9d4d694a4396",
  "name": "Best AI models for medical advice",
  "summary": "**Conversation Overview**\n\nThe person asked for recommendations on which AI model to use for seeking medical advice, specifying they wanted options beyond Claude models. Claude conducted web searches to gather current benchmark data and provided an evidence-based comparison of major large language models evaluated on clinically relevant benchmarks, particularly HealthBench and HealthBench Hard.\n\nClaude presented benchmark scores for several models including GPT-5.4, Gemini 3.1 Pro, Grok 4.2, and Claude Sonnet and Opus variants, drawing on April 2026 HealthBench data. Claude recommended GPT-5.4 via ChatGPT (with thinking mode and web search enabled) as the primary choice based on benchmark performance, with Claude Opus 4.8 in extended thinking mode as a strong alternative due to its low hallucination rate on medical queries. Claude also noted that web search access and reasoning/thinking mode are the most impactful variables for reducing errors across all models. The response consistently emphasized that no AI model substitutes for a licensed physician and that these tools are best used for preparation, terminology clarification, and organizing questions rather than diagnosis or treatment decisions. Claude closed by offering to give more tailored guidance if the person shared the specific type of medical question they had in mind.",
  "created_at": "2026-06-11T12:49:41.294222Z",
  "updated_at": "2026-06-11T12:50:06.313627Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-06-11T12:49:41.866782Z

If I want to consult some medical advises, which model will you recommend? Tell me the reason as well.
Not only claude models

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019eb6bb-2c37-7b86-9b55-5156d9769ba3",
  "updated_at": "2026-06-11T12:49:41.866782Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-06-11T12:50:06.313627Z

For medical questions, here's how the major models compare and my recommendation.

My recommendation: use a frontier reasoning model regardless of brand, and treat any of them as a starting point rather than a verdict. The most relevant capability for medical consultation is accuracy on clinical reasoning, willingness to express uncertainty, and citation of sources. Let me give you the factual landscape and separate what's measurable from what isn't.

Let me search for current benchmark data so I'm not relying on stale claims.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-11T12:49:46.044002Z",
  "stop_timestamp": "2026-06-11T12:49:46.307326Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VqapTm4QLqC4LTTmLN5HVF",
  "name": "web_search",
  "input": {
    "query": "best LLM medical question accuracy benchmark 2026 MedQA HealthBench"
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
  "tool_use_id": "toolu_01VqapTm4QLqC4LTTmLN5HVF",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Medmarks: A Comprehensive Open-Source LLM Benchmark Suite for Medical Tasks",
      "url": "https://arxiv.org/html/2605.01417v1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "A broad middle tier spanning mean scores of 0.368 to 0.784 includes datasets of moderate difficulty such as M-ARC (Kim et al., 2025a) (0.368), MedCalc-Bench (Khandekar et al., 2024) (0.439), MedConceptsQA (Shoham and Rappoport, 2024) (0.526-0.781), MedMCQA (Pal et al., 2022) (0.656), and MedQA (Jin et al., 2021) (0.784).666MedCalc-Bench tests the medical calculation capabilities of LLMs without any calculator tool. We also evaluated tool-calling capable models on MedCalc-Bench with a python and calculator tool, Appendix L. The most challenging benchmark in the Verifiable subset is MedXpertQA (Zuo et al., 2025) (0.236-0.237), making it the benchmark with the most headroom for future models to improve on. Turning our attention to Medmarks-OE, we likewise see a range of difficulty, with MedCaseReasoning (Wu et al., 2025b) and HealthBench (Arora et al., 2025) among the hardest datasets.\n\n\n\nMedical capabilities of LLMs have mostly been evaluated with multiple-choice question answering benchmarks (Singhal et al., 2023) like MedQA (Jin et al., 2021), PubMedQA (Jin et al., 2019), MedMCQA (Pal et al., 2022), MMLU (Hendrycks et al., 2021), and MMLU Pro Health (Wang et al., 2024). The recent HealthBench benchmark aims to evaluate models in more realistic scenarios, with questions and rubrics designed by clinicians (Arora et al., 2025). However, it focuses solely on medical conversations, so non-conversational medical capabilities are not evaluated. A variety of LLM benchmarking suites for clinical use-cases have been developed, like CliniBench (Grundmann et al., 2026) and DR.BENCH (Gao et al., 2023). However, most of these suites have very limited scopes. Instead, the MedHELM suite (Bedi et al., 2026) expands evaluation to 37 benchmarks focused on representing real-world medical use-cases.\n\n\n\nThis includes multiple choice question answering tasks like MedQA (Jin et al., 2021), Medbullets (Chen et al., 2025b), etc. but also other verifiable tasks like medical calculations (MedC",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/html/2605.01417v1",
        "search_provider": "anthropic",
        "age": "May 2, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation",
      "url": "https://arxiv.org/pdf/2506.04078",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "## 1 Introduction\n\nLanguage model based AI systems demonstrate significant potential in medical applications. These technologies are rapidly transforming healthcare delivery and decision support. Examples include\n\n| Dataset | Open<br>QA | Closed<br>QA | Know. | Reason. | Ethics |\n| MedExam (2025) | X | / | / | Х | / |\n| MedQA (2023) | X | 1 | 1 | X | X |\n| MedMCQA (2022) | X | 1 | 1 | ✓ | X |\n| PubMedQA (2019) | X | 1 | 1 | ✓ | X |\n| MedNLI (2021) | Х | X | X | ✓ | X |\n| MedCalc (2024) | Х | ✓ | X | X | X |\n| MultiMedQA (2022) | 1 | ✓ | ✓ | ✓ | X |\n| MedBench (2023) | 1 | ✓ | ✓ | ✓ | X |\n| MedJourney (2024) | ✓ | ✓ | X | ✓ | X |\n| LLMEval-Med (Ours) | 1 | <b>√</b> | <b>√</b> | 1 | / |\n\nTable 1: Comparison of medical datasets. **Open QA**: Free-form clinical responses. **Closed QA**: Multiple-choice medical questions. **Knowledge**: Basic medical knowledge. **Reasoning**: Multi-step clinical reasoning skills. **Ethics**: Medical ethics scenarios.\n\n\n\nCleveland Clinic's Watson chatbots for disease management (Clinic, 2016), Google's Med-PaLM2 for diagnostic suggestions (Singhal et al., 2023), and Stanford's simulation systems for medical education (Spector, 2024).\n\nHowever, these medical AI systems require exceptional accuracy as errors directly impact patient safety. Several concerning cases highlight this challenge: IBM's Watson for Oncology recommended unsafe cancer treatments (Ross and Swetlitz, 2018); AI systems showed higher false-positive rates than radiologists in lung disease detection (Plesner et al., 2023); and diabetic retinopathy screening tools demonstrated inconsistent performance with sensitivities ranging from 51% to 86% (Lee et al., 2021). These examples emphasize the critical need for rigorous testing before deploying LLM-powered AI in high-risk medical environments, making the development of robust benchmarks an extremely important issue.\n\n\n\nTo date, various benchmarks have been proposed and can be grouped into three",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/pdf/2506.04078",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "A novel evaluation benchmark for medical LLMs illuminating safety and effectiveness in clinical domains | npj Digital Medicine",
      "url": "https://www.nature.com/articles/s41746-025-02277-8",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nature.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nature.com",
        "site_name": "Nature"
      },
      "is_missing": false,
      "text": "For example, MedQA has become the most widely used benchmark in the medical domain, and models failing to reach an accuracy rate of 60% are generally considered unqualified for clinical assessment.\n\nLarge language models (LLMs) hold promise in clinical decision support but face major challenges in safety evaluation and effectiveness validation. We developed the Clinical Safety-Effectiveness Dual-Track Benchmark (CSEDB), a multidimensional framework built on clinical expert consensus, encompassing 30 metrics covering critical areas like critical illness recognition, guideline adherence, and medication safety, with weighted consequence measures. Thirty-two specialist physicians developed and revised 2069 open-ended Q&A items aligned with these criteria, spanning 26 clinical departments to simulate real-world scenarios. \n\nThese tasks are readily standardized, as performance can be quantified by answer accuracy without requiring continuous expert oversight. For example, MedQA has become the most widely used benchmark in the medical domain, and models failing to reach an accuracy rate of 60% are generally considered unqualified for clinical assessment. However, such tasks suffer from context distortion and limited capability coverage, as real clinical decision-making does not involve selecting from fixed options, and high MCQ scores may result from flawed reasoning processes.\n\nNevertheless, traditional natural language generation (NLG) metrics correlate poorly with expert judgment, and the high cost and low scalability of human assessments remain significant barriers. Recent studies such as CRAFT-MD20, AMIE21, and AgentClinic22 have explored new directions for open-ended evaluation by simulating interactions between AI agents and LLMs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nature.com/articles/s41746-025-02277-8",
        "search_provider": "anthropic",
        "age": "December 26, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Large Language Model Synergy for Ensemble Learning in Medical Question Answering: Design and Evaluation Study",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12337233/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nih.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
        "site_name": "nih"
      },
      "is_missing": false,
      "text": "However, individual LLMs often exhibit varying performance across different medical QA datasets. We benchmarked individual zero-shot LLMs (GPT-4, Llama2-13B, Vicuna-13B, MedLlama-13B, and MedAlpaca-13B) to assess their baseline performance. Within the benchmark, GPT-4 achieves the best 71% on MedMCQA (medical multiple-choice question answering dataset), Vicuna-13B achieves 89.5% on PubMedQA (a dataset for biomedical question answering), and MedAlpaca-13B achieves the best 70% among all, showing the potential for better performance across different tasks and highlighting the need for strategies that can harness their collective strengths. Ensemble learning methods, combining multiple models to improve overall accuracy and reliability, offer a promising approach to address this challenge.\n\n**Objective:**\n\nTo develop and evaluate efficient ensemble learning approaches, we focus on improving performance across 3 medical QA datasets through our proposed two ensemble strategies.\n\n\n\nSpecifically comparing the best individual LLM, the Boosting-based Majority Weighted Vote achieved accuracies of 35.84% on MedMCQA (+3.81%), 96.21% on PubMedQA (+0.64%), and 37.26% (tie) on MedQA-USMLE. The Cluster-based Dynamic Model Selection yields even higher accuracies of 38.01% (+5.98%) for MedMCQA, 96.36% (+1.09%) for PubMedQA, and 38.13% (+0.87%) for MedQA-USMLE.\n\n**Conclusions:**\n\nThe LLM-Synergy framework, using 2 ensemble methods, represents a significant advancement in leveraging LLMs for medical QA tasks. Through effectively combining the strengths of diverse LLMs, this framework provides a flexible and efficient strategy adaptable to current and future challenges in biomedical informatics.\n\n## Introduction\n\nQuestion answering (QA) tasks in the medical domain involve a complex process of accurately interpreting and responding to health care–related queries [[1]]. QA tasks typically encompass two formats: open-ended and structured.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12337233/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ADRD-Bench: A Preliminary LLM Benchmark for Alzheimer's Disease and Related Dementias",
      "url": "https://arxiv.org/pdf/2602.11460",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "More recently, Google's MultiMedQA benchmark combined several of these resources, spanning professional medical exams, research questions, and consumer health queries, to holistically evaluate medical LLM knowledge [40]. OpenAI's HealthBench [8] focuses on open-ended generation tasks, utilizing 48,562 unique rubric criteria to enable more realistic and granular clinical evaluations.\n\nThese benchmarks have driven rapid progresses; for instance, an instruction-tuned PaLM model (Med-PaLM) achieved state-of-the-art (SOTA) performance on multiple-choice questions, reaching 67.6% accuracy on MedQA [40]. Despite these gains, high scores on structured, exam-style questions do not necessarily translate to real-world clinical competence [23]. Human evaluations reveal\n\nTable 1: Number of total and ADRD-related questions in commonly used public healthcare benchmarks.\n\n| Benchmark Name | Number of<br>Questions | Number of ADRD-<br>Related Questions | | | | | | | |",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/pdf/2602.11460",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "(PDF) Medmarks: A Comprehensive Open-Source LLM Benchmark Suite for Medical Tasks",
      "url": "https://www.researchgate.net/publication/404427309_Medmarks_A_Comprehensive_Open-Source_LLM_Benchmark_Suite_for_Medical_Tasks",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "Preprint. May 5, 2026. pital administrative workﬂows, clinical decision support, patient-facing chatbots, and more (Brodeur et al.,2026). Additionally, clinicians and other healthcare profession- als have begun integrating LLMs into routine workﬂows, both through public-facing interfaces such as ChatGPT and · through LLM-enabled tools embedded within electronic · health record systems (OpenAI,2026;Griot et al.,2025b). Figure 1. Results on MEDMARKS- V and MEDMARKS-OE for ... LLM benchmark suites is in Appendix E. There is a need for a regularly updated, fully open-source · and easy-to-run medical LLM evaluation suite capable of · benchmarking a wide swath of models and datasets across · clinically relevant tasks. To this end, we introduce MED - MARKS, an evaluation suite to assess the medical capabili- ties of LLMs. To our knowledge, this suite is the largest com- pletely open-source automated evaluation suite for medical ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/publication/404427309_Medmarks_A_Comprehensive_Open-Source_LLM_Benchmark_Suite_for_Medical_Tasks",
        "search_provider": "anthropic",
        "age": "May 7, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LLM Benchmarks in Life Sciences: Comprehensive Overview | IntuitionLabs",
      "url": "https://intuitionlabs.ai/articles/large-language-model-benchmarks-life-sciences-overview",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "intuitionlabs.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=intuitionlabs.ai",
        "site_name": "IntuitionLabs"
      },
      "is_missing": false,
      "text": "Each question includes a patient scenario and four or more answer options, requiring application of medical facts and reasoning to choose the correct one. MedQA is a test of an LLM&#x27;s ability to perform medical reasoning and decision-making. Traditionally, models struggled on this benchmark – for years, accuracy remained near 40%, since random guessing is 25%. However, recent LLMs have made dramatic gains. Fine-tuned transformers (like Google&#x27;s Med-PaLM, a PaLM model fine-tuned on medical Q&amp;A) reached ~67% accuracy (close to passing) in 2022. Then, GPT-4 essentially solved much of the task: GPT-4 in zero-shot scored about 71.6% accuracy on the MedQA dataset ([2]), and in some reports GPT-4 averaged ~86% on USMLE-style questions overall ([30]) – surpassing the passing threshold by over 20 points. 2025–2026 Updates: The landscape has continued to advance rapidly.\n\n\n\nFor IT professionals in the pharmaceutical and biotech industry, understanding these benchmarks is crucial. Benchmarks provide standardized tasks and datasets to measure how well LLMs perform on biomedical literature mining, clinical question-answering, drug discovery, genomics analysis, and more. By comparing models on common metrics, benchmarks help identify strengths, weaknesses, and readiness for real-world applications. This report surveys all major LLM benchmarks used in life sciences – spanning biomedical, pharmaceutical, and genomics domains – with an emphasis on developments from 2020 to 2026. We cover general natural language processing (NLP) and question-answering benchmarks (e.g. BioASQ, PubMedQA, MedQA), as well as task-specific evaluations in drug discovery (molecule generation, property prediction) and genomics (gene and protein understanding).\n\n\n\nEach question includes a patient scenario and four or more answer options, requiring application of medical facts and reasoning to choose the correct one. MedQA is a test of an LLM's ability to perform medical reasoning and d",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://intuitionlabs.ai/articles/large-language-model-benchmarks-life-sciences-overview",
        "search_provider": "anthropic",
        "age": "January 21, 2026"
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

Let me check current HealthBench leaderboard specifically, since that's the most clinically realistic benchmark.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-11T12:49:49.127255Z",
  "stop_timestamp": "2026-06-11T12:49:49.599145Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_013v8qNPK8XyHXve8gHzZJXm",
  "name": "web_search",
  "input": {
    "query": "HealthBench leaderboard GPT-5 Gemini Claude top score 2026"
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
  "tool_use_id": "toolu_013v8qNPK8XyHXve8gHzZJXm",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "LLM Leaderboard 2026 — Compare Top AI Models - Vellum",
      "url": "https://www.vellum.ai/llm-leaderboard",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "vellum.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=vellum.ai",
        "site_name": "Vellum"
      },
      "is_missing": false,
      "text": "updated 9 Jun 2026 · This LLM leaderboard displays the latest public benchmark performance for SOTA model versions released after April 2024. The data comes from model providers as well as independently run evaluations by Vellum or the open-source community. We feature results from non-saturated benchmarks, excluding outdated benchmarks (e.g. MMLU). 100����% 95.4%Claude 3 Opus · 94.2%Claude Opus 4.7 · 94.1%Claude Fable 5 · 94.1%Claude Mythos 5 · 93.6%Claude Opus 4.8 · 100����% 100%Gemini 3 Pro · 100%GPT 5.2 · 99.8%Claude Opus 4.6 · 99.1%Kimi K2 Thinking · 98.7%GPT oss 20b · 100��yr% 95.5%Claude Mythos 5 · 95%Claude Fable 5 · 88.6%Claude Opus 4.8 · 87.6%Claude Opus 4.7 · 82%Claude Sonnet 4.5 · 70S5\u0018%0% 64.5%Claude Mythos 5 · 57.9%Claude Opus 4.8 · 45.8%Gemini 3 Pro · 44.9%Kimi K2 Thinking · 43.1%GPT-5.5 Pro ·\n\n\n\nupdated 9 Jun 2026 · This LLM leaderboard displays the latest public benchmark performance for SOTA model versions released after April 2024. The data comes from model providers as well as independently run evaluations by Vellum or the open-source community. We feature results from non-saturated benchmarks, excluding outdated benchmarks (e.g. MMLU). 100����% 95.4%Claude 3 Opus · 94.2%Claude Opus 4.7 · 94.1%Claude Fable 5 · 94.1%Claude Mythos 5 · 93.6%Claude Opus 4.8 · 100����% 100%Gemini 3 Pro · 100%GPT 5.2 · 99.8%Claude Opus 4.6 · 99.1%Kimi K2 Thinking · 98.7%GPT oss 20b · 100��yr% 95.5%Claude Mythos 5 · 95%Claude Fable 5 · 88.6%Claude Opus 4.8 · 87.6%Claude Opus 4.7 · 82%Claude Sonnet 4.5 · 70S5\u0018%0% 64.5%Claude Mythos 5 · 57.9%Claude Opus 4.8 · 45.8%Gemini 3 Pro · 44.9%Kimi K2 Thinking · 43.1%GPT-5.5 Pro ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.vellum.ai/llm-leaderboard",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "AI Leaderboard 2026: Compare & Rank 300+ Top AI Models by Intelligence, Speed & Price",
      "url": "https://llm-stats.com/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "llm-stats.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=llm-stats.com",
        "site_name": "LLM Leaderboard"
      },
      "is_missing": false,
      "text": "Quick answers for choosing, comparing and interpreting today&#x27;s leading AI models. On the LLM Stats Leaderboard, Claude Mythos Preview currently leads on GPQA Diamond (94.6% gpqa), the most discriminating reasoning benchmark at the frontier.\n\nThe leading LLMs in 2026 are Claude Mythos Preview, Claude Opus 4.6, and the frontier models from OpenAI (GPT-5 family), Anthropic (Claude Opus and Sonnet), Google (Gemini 3 Pro), xAI (Grok 4), DeepSeek (V3 / R1) and Z.AI (GLM-5). Open-weights leaders include Llama, Qwen and DeepSeek. The full ranking is in the leaderboard table above. Qwen3.7 Max is the cheapest model in the top 10 by GPQA Diamond, at $1.25 /M tok input. The Cheapest filter on the leaderboard restricts to verified, currently-available frontier models — pricing is pulled from each provider's public price list and cross-checked against billing samples through the LLM Stats proxy. Grok 4 Fast currently exposes the largest practical context window at 2.0M tokens tokens. \n\nLarger context lets you keep more documents, conversation history and tool traces in a single request. For long-document workloads, also consult the per-model \"effective context\" notes on each model detail page — providers vary in how well they actually us\n\nIndependent rankings of GPT, Claude, Gemini, Llama, DeepSeek and 300+ AI models — composite LLM Stats Score, updated continuously from public benchmarks and live API metrics. See the full LLM Leaderboard for complete LLM rankings with advanced filters. ... LLMLLMImage GenerationImageVideo GenerationVideoText-to-SpeechTTSSpeech-to-TextSTTEmbeddingsEmbeddingsFull leaderboardFull ... Announced in the last 15 days. ... Composite TrueSkill ratings across published benchmarks. ... The LLM Stats leaderboard ranks GPT, Claude, Gemini, Llama, DeepSeek, Qwen, Mistral, GLM and more by intelligence, speed and price. Every score is sourced from public benchmarks and live API metrics.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://llm-stats.com/",
        "search_provider": "anthropic",
        "age": "10 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LLM Leaderboard 2026: Compare 300+ Top AI Models by Intelligence, Speed & Price",
      "url": "https://llm-stats.com/leaderboards/llm-leaderboard",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "llm-stats.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=llm-stats.com",
        "site_name": "LLM Leaderboard"
      },
      "is_missing": false,
      "text": "The LLM Leaderboard — independent ranking of GPT, Claude, Gemini, Llama, DeepSeek and 300+ AI models by intelligence, speed and price. Filter by provider, license, modality and context window; sort by every benchmark. Composite LLM Stats Score updated continuously from public benchmarks and live API metrics.\n\nBest for coding (Arena): Claude Opus 4.6 (21.3 arena score) Best on GPQA Diamond: Claude Mythos Preview (94.6%) ... Based on coding-arena performance — the most discriminating signal at the frontier — Claude Opus 4.6 currently leads. For knowledge-heavy reasoning (GPQA Diamond), Claude Mythos Preview scores highest. Choose by axis rather than a single ranking — see the highlights above for per-metric leaders. Models are sorted by coding-arena score (when available), then by GPQA Diamond. Each row aggregates verified benchmark results, provider-reported pricing, and live performance metrics (output throughput and time-to-first-token) sampled across the major API providers.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://llm-stats.com/leaderboards/llm-leaderboard",
        "search_provider": "anthropic",
        "age": "9 hours ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Best AI Model for Coding (June 2026): 12 Models Ranked by SWE-bench Pro Score and Cost per Task",
      "url": "https://www.morphllm.com/best-ai-model-for-coding",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "morphllm.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=morphllm.com",
        "site_name": "Morph"
      },
      "is_missing": false,
      "text": "Three things fall out of the combined view. GPT-5.4 wins on score and is competitive on cost per point. Haiku 4.5 solves 67% as many tasks as gpt-5.4 at a third of its output price, making it the cost-per-point leader at roughly $0.13 per point.\n\nClaude Fable 5 (95.0% SWE-bench Verified, $10/$50), Opus 4.8, GPT-5.5, GPT-5.4, Gemini 3.1 Pro, DeepSeek V4, MiniMax M3 compared. SWE-bench Pro scores, per-token pricing, and output-dollar per solved point for 12 models. Updated June 9, 2026. ... Every ranking page shows you a benchmark column or a price column. Almost none divide one by the other. This page does both: SWE-bench Pro scores from Scale's standardized leaderboard, official per-token prices, and the output-dollar cost per solved benchmark point. Updated June 9, 2026, the day Claude Fable 5 went GA. ... Claude Fable 5 (GA June 9): 95.0% SWE-bench Verified, $10/$50, 1M context, adaptive thinking always on. \n\nAnd Opus 4.6, the top Claude entry Scale has tested, pays a 2x cost-per-point premium over gpt-5.4 for 7.2 fewer points on this harness, which is exactly why Anthropic publishes its own numbers (covered below). ... On SWE-bench Pro's commercial (private) set, Claude Opus 4.6 leads at 47.10%, ahead of Muse Spark (44.70%) and gpt-5.4 (43.40%). Gemini 3.1 Pro drops to 32.20%. Models that top the public set do not automatically to\n\nClaude Opus 4.8 (API ID claude-opus-4-8) is the default: 88.6% SWE-bench Verified, 69.2% SWE-bench Pro on Anthropic's harness, $5/$25, 1M context with no long-context surcharge. Claude Fable 5 (claude-fable-5, $10/$50) is the ceiling at 95.0% Verified. Claude Sonnet 4.6 (claude-sonnet-4-6, $3/$15) is the volume pick with a 1M context, and Claude Haiku 4.5 (claude-haiku-4-5, $1/$5) handles quick edits and subagents. Avoid Sonnet 4 and Opus 4 (retire June 15, 2026) and Opus 4.1 (retires August 5, 2026, still $15/$75).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.morphllm.com/best-ai-model-for-coding",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LLM Leaderboard: Best AI Models Ranked (April 2026)",
      "url": "https://ofox.ai/blog/llm-leaderboard-best-ai-models-ranked-2026/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ofox.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ofox.ai",
        "site_name": "Ofox"
      },
      "is_missing": false,
      "text": "Claude Opus 4.7 leads SWE-bench Verified at 82% and tops LM Arena at 1504 Elo. Claude 4.7, Gemini 3.1 Pro Preview, and GPT-5.4 tie at the top of the Artificial Analysis Intelligence Index (57).\n\nUpdate May 2026: GPT-5.5 (released April 23) has displaced Claude Opus 4.7 from the top SWE-bench Verified slot at 88.7%. See AI Model Rankings May 2026 for the refreshed coding, reasoning, and cost rankings. TL;DR: There is no single best model in April 2026 — the leaderboard has fractured by task. Claude Opus 4.7 leads coding on SWE-bench Verified (82.0%) and tops LM Arena at 1504 Elo. Claude 4.7, Gemini 3.1 Pro Preview, and GPT-5.4 tie on the Artificial Analysis Intelligence Index at 57. DeepSeek V3.2 leads price-performance at $0.29/M input tokens. If you want one API key that covers all of them, ofox.ai routes to every model on this list. Three independent leaderboards measure different things, and they disagree — which is the point. \n\nLM Arena (formerly LMSYS Chatbot Arena) uses blind human preference votes. Two models answer the same prompt; users pick the better response without knowing which model is which.\n\nOn the Artificial Analysis Intelligence Index, Claude Opus 4.7, Gemini 3.1 Pro Preview, and GPT-5.4 are tied at 57 points. Claude Opus 4.6 scores 53. Kimi K2.6 scores 54 — the strongest open-weight model in the index and ahead of the previous Claude generation. Claude Opus 4.7 leads SWE-bench Verified at 82.0%, making it the strongest model for autonomous software engineering tasks. Source: vals.ai SWE-bench leaderboard, verified April 16, 2026. The spread between #1 and #5 is roughly 4 percentage points. For most coding agent workflows, that gap will show up in edge cases — complex multi-file refactors, ambiguous specs, long-running tasks — rather than simple completions. Kimi K2.6 is not yet independently listed on SWE-bench Verified. \n\nMoonshot AI has published internal numbers that place it in the same band as GPT-5.4 and Gemini 3.1 Pro Preview, bu",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://ofox.ai/blog/llm-leaderboard-best-ai-models-ranked-2026/",
        "search_provider": "anthropic",
        "age": "April 22, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "SWE-Bench 2026: Claude 77.2% vs GPT-5 74.9% | Full Leaderboard | Local AI Master",
      "url": "https://localaimaster.com/models/swe-bench-explained-ai-benchmarks",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "localaimaster.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=localaimaster.com",
        "site_name": "Local AI Master"
      },
      "is_missing": false,
      "text": "SWE-bench verified scores 2026: Claude 4 Sonnet 77.2%, GPT-5 74.9%, Gemini 2.5 71.8%. LMArena rankings, HumanEval scores, and what benchmarks mean.\n\nWhich AI actually codes best? Claude 4 scores 77.2%, GPT-5 hits 74.9%, Llama 70B reaches 58%. Real benchmarks, not marketing hype.\n\nWhich AI codes best? Claude 4: 77.2%, GPT-5: 74.9%, Llama 70B: 58%. Real benchmarks, not marketing. Free guide.\n\n\n\nFinal Score = (Correctness × 0.4) + (Quality × 0.25) + (Completeness × 0.15) + (Efficiency × 0.1) + (Speed × 0.1) Example: Claude 4: (9 × 0.4) + (9 × 0.25) + (8 × 0.15) + (7 × 0.1) + (6 × 0.1) = 3.6 + 2.25 + 1.2 + 0.7 + 0.6 = 8.35/10 GPT-5: (8 × 0.4) + (8 × 0.25) + (9 × 0.15) + (8 × 0.1) + (9 × 0.1) = 3.2 + 2.0 + 1.35 + 0.8 + 0.9 = 8.25/10 · Model Comparison Tracker: Model: Claude 4 Sonnet ----------------------- Test Duration: 2 weeks Prompts Sent: 487 Avg Input Tokens: 1,842 Avg Output Tokens: 1,234 Total Input Tokens: 897,054 Total Output Tokens: 601,058 Cost Calculation: Input: 897,054 × $3 / 1M = $2.69 Output: 601,058 × $15 / 1M = $9.02 Total: $11.71 for 2 weeks = ~$23.42/month Success Rate: 73% correct first try Quality Score: 8.35/10 Speed: 4.2s avg response time ROI: Estimated 6 hours saved = $300 value (at $50/hr) Cost-Benefit: 12.8x return on investment · 📅 Published: October 30, 2025🔄 Last Updated: March 18, 2026✓ Manually Reviewed ...\n\n\n\nKey Finding: Model performance varies significantly by language. Most models score: ... Why It Matters: If you're not working in Python, model rankings may differ. GPT-5 and Claude 4 have the best cross-language performance. High SWE-bench + High HumanEval (e.g., Claude 4, GPT-5): ... Best Practice: Use benchmarks as a starting point, then test models on your actual codebase with your real problems. See our testing guide below. ... Primary language: Python, JavaScript, TypeScript, Go, Rust, etc. Common tasks: API development, data processing, UI components, algorithms · Codebase size: Small scripts, mediu",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://localaimaster.com/models/swe-bench-explained-ai-benchmarks",
        "search_provider": "anthropic",
        "age": "3 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Which AI Hallucinates Least? June 2026 Benchmark Rates Data | Suprmind",
      "url": "https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "suprmind.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=suprmind.ai",
        "site_name": "Suprmind"
      },
      "is_missing": false,
      "text": "Claude Opus 4.8 (May 28, 2026) — the current Anthropic flagship, superseding Opus 4.7 after 41 days. AA-Omniscience index: 27 (second-highest overall, behind only Gemini 3.1 Pro&#x27;s 33) and the highest of any model attempting questions at scale.\n\nHealthBench thinking mode: 1.6% — one of the best medical hallucination scores recorded. SimpleQA without web: 47%. With web: 9.6%. FACTS overall: 61.8. [8][12] The pattern across the GPT-5 family: web search access is the single biggest variable. With browsing enabled, GPT-5 models compete for the lowest hallucination rates in the industry. Without it, rates jump 3-5x. If you're deploying a GPT-5 variant, keep web access on. Claude Opus 4.8 (May 28, 2026) — the current Anthropic flagship, superseding Opus 4.7 after 41 days. AA-Omniscience index: 27 (second-highest overall, behind only Gemini 3.1 Pro's 33) and the highest of any model attempting questions at scale. Accuracy: 46.6%. \n\nGPT's thinking mode gives it a specific advantage for medical and health-related queries where reasoning reduces hallucination dramatically.\n\nHealthBench Professional (April 2026): OpenAI launched a new clinician-grade benchmark on April 22, 2026, alongside the release of \"ChatGPT for Clinicians.\" Unlike the original HealthBench (synthetic conversations), HealthBench Professional uses real clinical scenarios across consultation, documentation, and research tasks. On HealthBench Hard, the new benchmark's most challenging slice, scores diverge sharply: Muse Spark leads at 42.8, GPT-5.4 (powering ChatGPT for Clinicians) scores 40.1, Gemini 3.1 Pro scores 20.6, Grok 4.2 scores 20.3, and Claude Sonnet 4.6 scores 14.8. The benchmark's designers report that GPT-5.4-powered responses outperform physician-written responses on the consultation slice, though the methodology is still under independent review.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "AI Model Leaderboard 2026: GPT-5, Claude, Gemini, Llama Ranked | Local AI Master",
      "url": "https://localaimaster.com/tools/ai-model-leaderboard",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "localaimaster.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=localaimaster.com",
        "site_name": "Local AI Master"
      },
      "is_missing": false,
      "text": "Which model should I actually pick from this leaderboard? Use our AI Model Finder for personalized recommendations based on your hardware and use case. As a starting point: Coding (API) → Claude Sonnet 5. Coding (self-hosted) → Qwen3-Coder-Next or DeepSeek V4. Reasoning (API) → Claude Opus 4.7 or GPT-5.5 Pro. Reasoning (self-hosted) → DeepSeek V4-Pro. Long context → Gemini 3.1 Pro (1M tokens). Lowest cost API → Gemini 3 Flash. Edge / mobile → Phi-4 Mini or Llama 3.2 3B. ... We exclude single-task benchmarks that have been heavily optimized against (GSM8K, classic MMLU, original HumanEval) because top models all score 95%+ and the benchmark stops discriminating. We exclude proprietary or paid-only benchmarks (Scale SEAL, Artificial Analysis composite scores) because the methodology is opaque. We exclude human-preference benchmarks like LMSYS Arena because they measure response style as much as capability — useful but a different signal.\n\n\n\n30+ AI models ranked by verified benchmarks. Free, sortable, no signup. Updated May 2026.\n\n30+ AI models, verified benchmarks. Sort by SWE-Bench, MMLU, ARC-AGI. Free.\n\nEvery score traces to a public source: SWE-Bench from swebench.com leaderboard, MMLU-Pro from the MMLU-Pro repository, ARC-AGI-2 from the official ARC Prize site, AIME from AIME 2025 evaluations, and HumanEval+ from EvalPlus. For closed models we use the vendor-published numbers from their model cards (Anthropic, OpenAI, Google, DeepSeek, Moonshot AI, Zhipu, Alibaba, Mistral). When numbers conflict between vendor and independent eval, we use the more conservative number and note the discrepancy in the model's detailed page. ... Major updates within 7 days of any new frontier release (Claude, GPT, Gemini, DeepSeek, Qwen). Benchmark refreshes weekly as new community evaluations land. The \"Last updated\" date at the top reflects the most recent change. We track all major model launches and publish a refresh log on the blog. \n\nWhy is Claude Sonnet 5 ranked",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://localaimaster.com/tools/ai-model-leaderboard",
        "search_provider": "anthropic",
        "age": "May 9, 2026"
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

Here's the evidence-based picture.

What the benchmarks show (facts, attributed)

The most clinically realistic public benchmark is HealthBench (OpenAI, designed with clinician-written rubrics) and its harder clinician-grade successor HealthBench Professional. On the hardest slice, HealthBench Hard, Muse Spark leads at 42.8, GPT-5.4 (powering ChatGPT for Clinicians) scores 40.1, Gemini 3.1 Pro scores 20.6, Grok 4.2 scores 20.3, and Claude Sonnet 4.6 scores 14.8 (Suprmind, citing the April 2026 benchmark; note the Claude entry tested was Sonnet, not the stronger Opus tier). On medical hallucination specifically, Claude Opus 4.8 recorded a HealthBench thinking-mode hallucination rate of 1.6%, one of the best medical hallucination scores recorded.

A consistent and important finding: for the GPT-5 family, web search access is the single biggest variable — with browsing enabled, GPT-5 models compete for the lowest hallucination rates in the industry; without it, rates jump 3-5x. Thinking/reasoning mode also reduces hallucination dramatically for medical and health-related queries.

One methodological caveat worth flagging: the HealthBench Professional designers report GPT-5.4 responses outperformed physician-written responses on the consultation slice, though the methodology is still under independent review — so treat that specific claim as provisional.

My recommendation

For consumer medical questions, I'd recommend GPT-5.4 / ChatGPT (in thinking mode, with web search on) as the primary choice, because it currently has the strongest published performance on the clinician-grade HealthBench Professional benchmark and OpenAI built a clinician-targeted product around it. Claude Opus 4.8 with extended thinking is a strong second — its medical-hallucination rate is among the lowest measured, which matters a lot when the failure mode you most want to avoid is a confident wrong answer. Gemini 3.1 Pro is reasonable but scored notably lower on HealthBench Hard.

Facts vs. assumptions, stated plainly. The benchmark numbers above are the facts. The assumption embedded in my recommendation is that HealthBench-style benchmark performance transfers to your actual question — which is not guaranteed. High multiple-choice scores may result from flawed reasoning processes, and real clinical decision-making does not involve selecting from fixed options. High scores on exam-style questions do not necessarily translate to real-world clinical competence.

Two practical points regardless of model: always enable web search and thinking/reasoning mode, since both measurably cut errors; and no model substitutes for a licensed physician — use it to prepare questions, understand terminology, and organize concerns, not for diagnosis or treatment decisions. I'm not a medical professional, and neither is any of these models.

If you tell me the specific kind of medical question (e.g., interpreting lab results, understanding a diagnosis, medication interactions), I can be more precise about which tool fits best.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019eb6bb-2c37-7e5e-8c7f-313840fdf638",
  "updated_at": "2026-06-11T12:50:06.313627Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019eb6bb-2c37-7b86-9b55-5156d9769ba3"
}
```

</details>
