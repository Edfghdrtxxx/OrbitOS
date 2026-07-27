# Decoder-only architecture advantages in transformers

## Export metadata (verbatim)

```json
{
  "uuid": "663941e5-6a13-43f0-b53d-fe0d7aeb11c7",
  "name": "Decoder-only architecture advantages in transformers",
  "summary": "**Conversation Overview**\n\nThe person engaged in a technical deep-dive on Transformer architectures, specifically asking what OpenAI's papers say about decoder-only architecture and why it became the mainstream choice for large language models. Claude began by correcting several language issues in the person's question (capitalizing \"OpenAI,\" using \"decoder-only\" instead of \"decode-only,\" and restructuring the question syntax), then conducted multiple web searches to ground the response in primary sources before answering.\n\nThe conversation covered the distinction between the original encoder-decoder Transformer (Vaswani et al., 2017, Google) and GPT-1's decoder-only approach (Radford et al., 2018, OpenAI), with Claude explicitly correcting a framing assumption in the person's question: GPT-1 does not argue decoder-only is architecturally superior—it simply uses a causal decoder because next-token prediction is inherently autoregressive. The systematic architectural comparison the person was looking for actually comes from Wang et al. 2022 (ICML), which found causal decoder-only wins for zero-shot generalization after pure self-supervised pretraining, but that encoder-decoder models with masked language modeling and multi-task fine-tuning can outperform decoder-only in fine-tuning regimes. Claude provided a structured breakdown of the practical reasons for decoder-only dominance—KV-cache efficiency, faster causal attention (~2×), unified architecture, scaling behavior, and GPT-3's empirical success—carefully labeling each claim as established fact, empirically observed, or weakly supported hypothesis. A summary table distinguishing facts from assumptions was provided.\n\nThe person then invoked a `/concept-visualizer` skill with a fallback visualization scheme after a widget timed out earlier in the conversation. Claude read the skill file, designed a metaphor-based pedagogical approach (translator at two desks vs. stream writer at one scroll), and produced a JSX artifact with two interactive panel cards showing stick-figure scenes representing encoder-decoder and decoder-only attention patterns respectively. The artifact included click-to-reveal captions mapping the metaphor back to the real mechanism, and an explicit note flagging where the metaphor breaks down (real attention is parallel, not serial). The person demonstrated familiarity with ML architecture terminology (KV-cache, causal masking, cross-attention, bidirectional attention, autoregressive generation) throughout.",
  "created_at": "2026-04-24T07:35:54.223832Z",
  "updated_at": "2026-04-24T07:50:40.116511Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-24T07:35:54.801239Z

I know that Transformer Architecture has encoder and decoder.
What does that open AI's paper say about decode-only architecture? Why this kind of architecture outperforms and becomes the mainstream choice nowadays?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe6a-a1a3-7e33-a6da-298e89458e4a",
  "updated_at": "2026-04-24T07:35:54.801239Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-24T07:42:59.682420Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user is asking about decoder-only Transformer architecture and wants to know what OpenAI's research says about why this design became dominant. They're particular about accuracy—they want me to cite primary sources, distinguish between verified facts and speculation, and correct any language issues directly. I should also make sure any interactive elements are dynamic and engaging.

I'm trying to pinpoint which paper they're referencing. The most likely candidates are GPT-1, GPT-2, or GPT-3, though I should note that the original Transformer paper came from Google and included both encoder and decoder components. I need to verify what these papers actually claim about the architectural choice rather than relying on assumptions. I also spotted some language that needs tightening—"decode-only" should be "decoder-only," and the phrasing around why this architecture became mainstream could be clearer.

There's something worth flagging here: the user seems to be looking for one specific OpenAI paper that introduced decoder-only architecture, but the reality is more nuanced. The GPT papers adopted this approach, but the architectural choice wasn't really "invented" by OpenAI. There are actually other papers exploring why decoder-only architectures perform well, like Wang et al. 2022's work on zero-shot generalization. Let me search for the actual sources to give them accurate information.

</details>

Before I answer, let me correct a few language points in your question:

- **"open AI's paper"** → **"OpenAI's paper"** (OpenAI is one word, the company name)
- **"decode-only"** → **"decoder-only"** (the architecture is named after the *decoder* component)
- **"Why this kind of architecture outperforms and becomes the mainstream choice"** → **"Why does this architecture outperform others and become the mainstream choice"** (English needs the auxiliary "does" in questions, and "outperform" needs an object)
- **"nowadays"** is slightly informal for a technical question; **"today"** or **"currently"** is cleaner

Now let me search for primary sources before answering, since you asked for verifiable attribution.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:36:08.931391Z",
  "stop_timestamp": "2026-04-24T07:36:09.259998Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0172NponkTGEwTaZWW1Ck1sA",
  "name": "web_search",
  "input": {
    "query": "GPT-1 paper Radford 2018 \"Improving Language Understanding by Generative Pre-Training\" decoder architecture"
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
  "tool_use_id": "toolu_0172NponkTGEwTaZWW1Ck1sA",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GPT1: Improving Language Understanding by Generative Pre-Training, Technical report, OpenAI, 2018 - yenguage",
      "url": "https://yenguage.github.io/natural%20language%20processing/GPT/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
        "site_name": "yenguage"
      },
      "is_missing": false,
      "text": "two-stage semi-supervised approachcombination of unsupervised pre-training and supervised fine-tuning 1) generative pre-training of LM on a diverse corpus of unlabeled text (unsupervised) 2) then, discriminative fine-tuning on each specific task (supervised) task-aware input transformation during fine-tuning for effective transfer w/ minimal changes of model architecture · use Transformer decoder for LM for long-term dependencies · task-specific input adaptations for robust transfer performance (traversal style) Evaluation on NLI, QA &amp; Commonsense Reasoning, Sentence similarity, Classification task · Effect of number of layers transferredincreasing number of layers ~ transfer performance · source: Alec Radford, Karthik Narasimhan, Tim Salimans, and Ilya Sutskever. 2018. Improving language understanding with unsupervised learning. Technical report, OpenAI. https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf ·\n\n\n\ntwo-stage semi-supervised approachcombination of unsupervised pre-training and supervised fine-tuning 1) generative pre-training of LM on a diverse corpus of unlabeled text (unsupervised) 2) then, discriminative fine-tuning on each specific task (supervised) task-aware input transformation during fine-tuning for effective transfer w/ minimal changes of model architecture · use Transformer decoder for LM for long-term dependencies · task-specific input adaptations for robust transfer performance (traversal style) Evaluation on NLI, QA & Commonsense Reasoning, Sentence similarity, Classification task · Effect of number of layers transferredincreasing number of layers ~ transfer performance · source: Alec Radford, Karthik Narasimhan, Tim Salimans, and Ilya Sutskever. 2018. Improving language understanding with unsupervised learning. Technical report, OpenAI. https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://yenguage.github.io/natural%20language%20processing/GPT/",
        "search_provider": "anthropic",
        "age": "December 22, 2021"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Improving Language Understanding by Generative Pre-Training",
      "url": "https://www.cs.princeton.edu/courses/archive/spring20/cos598C/lectures/lec4-pretraining.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "princeton.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=princeton.edu",
        "site_name": "Princeton"
      },
      "is_missing": false,
      "text": "Elmo(Peters et al., 2018) ○ · OpenAI GPT(Radford et al., 2018) ○ · ULMFit(Howard and Rudder, 2018) ●Language model pre-training has been used to improve · many NLP tasks · ○ · Feature-based: include pre-trained representations as additional · features(e.g., ELMo) ○ · Fine-tuning: introduce task-specific parameters and fine-tune the · pre-trained parameters · Limitations of Previous Techniques · ●Problem: Language models only use left · context or right context, but language · understanding is bidirectional. ●Why are LMs unidirectional? ●Reason: Words can “see themselves” in a · bidirectional encoder. Main Ideas · ●Propose a new training objective so that a · deep bidirectional transformer can be trained · ○The masked language model · ○Next Sentence Prediction · ●Merits of BERT · ○Just fine-tune BERT Model for specific tasks to ·\n\n\n\nElmo(Peters et al., 2018) ○ · OpenAI GPT(Radford et al., 2018) ○ · ULMFit(Howard and Rudder, 2018) ●Language model pre-training has been used to improve · many NLP tasks · ○ · Feature-based: include pre-trained representations as additional · features(e.g., ELMo) ○ · Fine-tuning: introduce task-specific parameters and fine-tune the · pre-trained parameters · Limitations of Previous Techniques · ●Problem: Language models only use left · context or right context, but language · understanding is bidirectional. ●Why are LMs unidirectional? ●Reason: Words can “see themselves” in a · bidirectional encoder. Main Ideas · ●Propose a new training objective so that a · deep bidirectional transformer can be trained · ○The masked language model · ○Next Sentence Prediction · ●Merits of BERT · ○Just fine-tune BERT Model for specific tasks to ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cs.princeton.edu/courses/archive/spring20/cos598C/lectures/lec4-pretraining.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Improving language understanding by generative pre-training | BibSonomy",
      "url": "https://www.bibsonomy.org/bibtex/273ced32c0d4588eb95b6986dc2c8147c/jonaskaiser",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bibsonomy.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bibsonomy.org",
        "site_name": "BibSonomy"
      },
      "is_missing": false,
      "text": "@article{radford2018improving, added-at = {2020-07-14T16:37:42.000+0200}, author = {Radford, Alec and Narasimhan, Karthik and Salimans, Tim and Sutskever, Ilya}, biburl = {https://www.bibsonomy.org/bibtex/273ced32c0d4588eb95b6986dc2c8147c/jonaskaiser}, interhash = {5c343ed9a31ac52fd17a898f72af228f}, intrahash = {73ced32c0d4588eb95b6986dc2c8147c}, keywords = {final thema:transformer}, timestamp = {2020-07-14T16:49:42.000+0200}, title = {Improving language understanding by generative pre-training}, year = 2018 } ...\n\n%0 Journal Article %1 radford2018improving %A Radford, Alec %A Narasimhan, Karthik %A Salimans, Tim %A Sutskever, Ilya %D 2018 %K final thema:transformer %T Improving language understanding by generative pre-training ·\n\n\n\n@article{radford2018improving, added-at = {2020-07-14T16:37:42.000+0200}, author = {Radford, Alec and Narasimhan, Karthik and Salimans, Tim and Sutskever, Ilya}, biburl = {https://www.bibsonomy.org/bibtex/273ced32c0d4588eb95b6986dc2c8147c/jonaskaiser}, interhash = {5c343ed9a31ac52fd17a898f72af228f}, intrahash = {73ced32c0d4588eb95b6986dc2c8147c}, keywords = {final thema:transformer}, timestamp = {2020-07-14T16:49:42.000+0200}, title = {Improving language understanding by generative pre-training}, year = 2018 } ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.bibsonomy.org/bibtex/273ced32c0d4588eb95b6986dc2c8147c/jonaskaiser",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GPT-1 - Wikipedia",
      "url": "https://en.wikipedia.org/wiki/GPT-1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "wikipedia.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
        "site_name": "Wikipedia"
      },
      "is_missing": false,
      "text": "In June 2018, OpenAI released a paper titled &quot;Improving Language Understanding by Generative Pre-Training&quot;, in which they introduced that initial model along with the general concept of a generative pre-trained transformer.\n\nIn contrast, a GPT's \"semi-supervised\" approach involved two stages: an unsupervised generative \"pre-training\" stage in which a language modeling objective was used to set initial parameters, and a supervised discriminative \"fine-tuning\" stage in which these parameters were adapted to a target task. The use of a transformer architecture, as opposed to previous techniques involving attention-augmented RNNs, provided GPT models with a more structured memory than could be achieved through recurrent mechanisms; this resulted in \"robust transfer performance across diverse tasks\". The GPT-1 architecture is a twelve-layer decoder-only transformer, using twelve masked self-attention heads, with 64-dimensional states each (for a total of 768).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://en.wikipedia.org/wiki/GPT-1",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "2018 ImprovingLanguageUnderstandingb - GM-RKB",
      "url": "https://www.gabormelli.com/RKB/Radford_et_al.,_2018",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "gabormelli.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=gabormelli.com",
        "site_name": "Gabormelli"
      },
      "is_missing": false,
      "text": "It emphasized the use of a ... more complex sequence dependencies in larger datasets. ... . An unsupervised pretraining phase using a decoder-only Transformer to learn language models from a vast dataset. . A supervised fine-tuning phase where the pre-trained model is ...\n\n(Radford et al., 2018) ⇒ Alec Radford, Karthik Narasimhan, Tim Salimans, and Ilya Sutskever. (2018). “Improving Language Understanding by Generative Pre-Training.” · Subject Headings: OpenAI GPT-1 LLM; Transformer-Based Language Model, Emergence in LLMs. It introduced the OpenAI GPT model, a significant advancement in Natural Language Processing (NLP), utilizing a semi-supervised approach to improve performance across a variety of tasks. It emphasized the use of a Transformer-Based Language Model, marking a shift from traditional LSTM-based models, which allowed for better learning of longer and more complex sequence dependencies in larger datasets. ... . \n\nAn unsupervised pretraining phase using a decoder-only Transformer to learn language models from a vast dataset. . A supervised fine-tuning phase where the pre-trained model is further trained with labeled data for specific downstream tasks.\n\nIt showcased the GPT model's flexibility and broad applicability to diverse downstream tasks, with task-specific fine-tuning structures, like the concatenation of hypothesis and conclusion for Textual Entailment tasks. ... Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering, semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant, labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to perform adequately.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.gabormelli.com/RKB/Radford_et_al.,_2018",
        "search_provider": "anthropic",
        "age": "January 14, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Improving Language Understanding by Generative Pre-Training Alec Radford OpenAI",
      "url": "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "openai.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=openai.com",
        "site_name": "OpenAI"
      },
      "is_missing": false,
      "text": "An alternative dataset, the 1B · Word Benchmark, which is used by a similar approach, ELMo [44], is approximately the same size ... Table 1: A list of the different tasks and datasets used in our experiments. ... but is shufﬂed at a sentence level - destroying long-range structure. Our language model achieves a · very low token level perplexity of 18.4 on this corpus. ... Our model largely follows the original transformer work [62]. We trained a · 12-layer decoder-only transformer with masked self-attention heads (768 dimensional states and 12 · attention heads). For the position-wise feed-forward networks, we used 3072 dimensional inner states. We used the Adam optimization scheme [27] with a max learning rate of 2.5e-4. The learning rate · was increased linearly from zero over the ﬁrst 2000 updates and annealed to 0 using a cosine schedule.\n\n\n\nmethod outperforming the others on different tasks.1 Second, there is no consensus on the most · effective way to transfer these learned representations to the target task. Existing techniques involve · a combination of making task-speciﬁc changes to the model architecture [43, 44], using intricate · learning schemes [21] and adding auxiliary learning objectives [50]. These uncertainties have made · it difﬁcult to develop effective semi-supervised learning approaches for language processing. ... Preprint. Work in progress. In this paper, we explore a semi-supervised approach for language understanding tasks using a · combination of unsupervised pre-training and supervised ﬁne-tuning. Our goal is to learn a universal · representation that transfers with little adaptation to a wide range of tasks. We assume access to · a large corpus of unlabeled text and several datasets with manually annotated training examples ·\n\n\n\nFigure 1: (left) Transformer architecture and training objectives used in this work. (right) Input · transformations for ﬁne-tuning on different tasks. We convert all structured inputs i",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[PDF] Improving Language Understanding by Generative Pre-Training | Semantic Scholar",
      "url": "https://www.semanticscholar.org/paper/Improving-Language-Understanding-by-Generative-Radford-Narasimhan/cd18800a0fe0b668a1cc19f2ec95b5003d0a5035",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "semanticscholar.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=semanticscholar.org",
        "site_name": "Semantic Scholar"
      },
      "is_missing": false,
      "text": "@inproceedings{Radford2018ImprovingLU, title={Improving Language Understanding by Generative Pre-Training}, author={Alec Radford and Karthik Narasimhan}, year={2018}, url={https://api.semanticscholar.org/CorpusID:49313245} } ... The general task-agnostic model outperforms discriminatively trained models that use architectures speciﬁcally crafted for each task, improving upon the state of the art in 9 out of the 12 tasks studied.Expand ... Generative Pre-Training (opens in a new tab)Question Answering (opens in a new tab)Language Models (opens in a new tab)Textual Entailment (opens in a new tab)Microsoft Paraphrase Corpus (opens in a new tab)Natural Language Understanding (opens in a new tab)Delimiter Tokens (opens in a new tab)SciTaiL (opens in a new tab)Discriminative Fine-tuning (opens in a new tab)Bytepair Encoding (opens in a new tab) ... Alec RadfordJeff WuR.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.semanticscholar.org/paper/Improving-Language-Understanding-by-Generative-Radford-Narasimhan/cd18800a0fe0b668a1cc19f2ec95b5003d0a5035",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Paper Summary: Improving Language Understanding by Generative Pre-Training",
      "url": "https://queirozf.com/entries/paper-summary-improving-language-understanding-by-generative-pre-training",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "queirozf.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=queirozf.com",
        "site_name": "Linux find Examples"
      },
      "is_missing": false,
      "text": "(thick blue line) Source: Radford ... Pre-Training · Beats State-of-the-Art in several tasks using default datasets: NLI/Textual Entailment, Question-Answering, Semantic Similarity and Text Classification....\n\nAs unexpected as it seems, it's actually possible to get good results on supervised tasks with a model that was trained exclusively on unlabelled data (i.e. a language model). The GPT seems to be especially good at that, probably due to its use of Transformer architecture. This is an extreme form of domain adaptation, called zero-shot learning. See below: It is possible to reach up to 70% of the SOTA score on Sentiment Analysis with a pure unsupervised language model!! (thick blue line) Source: Radford et al., 2018: Improving Language Understanding by Generative Pre-Training · Beats State-of-the-Art in several tasks using default datasets: NLI/Textual Entailment, Question-Answering, Semantic Similarity and Text Classification. \n\nTransformers work better than LSTMs because they are able to learn longer dependencies between pieces of text · Datasets with long sentences and plots (such as prose books) are better to train models because they contain longer-ranged dependencies (as opposed to \n\nThe main difference between this article and ULMFit seems to be the fact that it uses Transformer architecture rather than a BiLSTM like ULMFit and that ULMFit apparently only applied this to text classification while GPT is applied to a wider set of downstream tasks. Very interesting how the authors describe the structuring of the fine-tuning architecture depending on the downstream task at hand. For example: to adapt the pretrained model to the Textual Entailment task, they concatenate the hypothesis and the possible conclusion and apply the whole thing together (against a 0-1 target I suppose). \n\nSee below: For the supervised task fine-tuning, (step 2 of the strategy), the architecture is adapted depending on the downstream task at hand. Source: Radford et al., 2018: Im",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://queirozf.com/entries/paper-summary-improving-language-understanding-by-generative-pre-training",
        "search_provider": "anthropic",
        "age": "March 1, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Improving Language Understanding by Generative Pre-Training, 2018",
      "url": "https://velog.io/@yenguage/Improving-Language-Understanding-by-Generative-Pre-Training-2018",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "velog.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=velog.io",
        "site_name": "velog"
      },
      "is_missing": false,
      "text": "Improving Language Understanding by Generative Pre-Training, 2018\n\nyenguage·2021년 12월 21일\n\nPapers\n\n목록 보기\n4/9\n\nImproving Language Understanding by Generative Pre-Training, Technical report, OpenAI, 2018\n\nGPT-1\n\nGoal :\n\nLearn a universal representation that transfers with little adaptation to a wide range of tasks\n\nChallenge :\n\n  • word-level information by unlabeled data\n    1) unclear of optimization objectives for effective transfer\n    2) no consensus on the most effective way to transfer these learned representations to the target task\n\n  • 기존의 다른 pretrained LM 들의 한계 (feature based approach)\n    1) restrict on short range : ELMo는 LSTM 기반\n    2) downstream task 를 위해 추가적인 아키텍처 필요\n\nSolution :\n\n  • two-stage semi-supervised approach : combination of unsupervised pre-training and supervised fine-tuning\n    1) generative pre-training of LM on a diverse corpus of unlabeled text (unsupervised)\n\n\n    2) then, discriminative fine-tuning on each specific task (supervised)\n  • task-aware input transformation during fine-tuning for effective transfer w/ minimal changes of model architecture\n\nMethod:\n\n  • use Transformer decoder for LM for long-term dependencies\n  • task-specific input adaptations for robust transfer performance (traversal style)\n\nEvaluation:\n\n  • Evaluation on NLI, QA & Commonsense Reasoning, Sentence similarity, Classification task\n  • Effect of number of layers transferred : increasing number of layers ~ transfer performance\n\nsource:\nAlec Radford, Karthik Narasimhan, Tim Salimans, and\nIlya Sutskever. 2018. Improving language understanding with unsupervised learning. Technical report, OpenAI.\nhttps://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf\n\nprofile\n신비한 AI 나라의 소시민\n\n1개의 댓글\n\ncomment-user-thumbnail\n2022년 6월 23일\n\nAre you worry about essay writing ideas?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://velog.io/@yenguage/Improving-Language-Understanding-by-Generative-Pre-Training-2018",
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

 I've got the GPT-1 paper now, so let me look into the Wang et al. 2022 research that compares different architectures directly—that should help explain why decoder-only models have become dominant.

</details>

I have the GPT-1 primary source. Now let me find research that directly compares architectures to explain *why* decoder-only wins.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:36:13.355971Z",
  "stop_timestamp": "2026-04-24T07:36:14.255821Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01XAZ9nvkpGWAWAWZwfYBF5e",
  "name": "web_search",
  "input": {
    "query": "Wang 2022 \"What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization\" decoder-only encoder-decoder"
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
  "tool_use_id": "toolu_01XAZ9nvkpGWAWAWZwfYBF5e",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Figure 3 from What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization? | Semantic Scholar",
      "url": "https://www.semanticscholar.org/paper/What-Language-Model-Architecture-and-Pretraining-Wang-Roberts/15190e8b459bd85d546286f7d7da61b4f4f3f58a/figure/4",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "semanticscholar.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=semanticscholar.org",
        "site_name": "Semantic Scholar"
      },
      "is_missing": false,
      "text": "A large-scale evaluation of modeling choices and their impact on zero-shot generalization finds that pretrained non-causal decoder models can be adapted into performant generative causal decoding models, using autoregressive language modeling as a ...\n\nThomas Wang, Adam Roberts, +5 authors Colin Raffel · Published in International Conference on… 12 April 2022 ... A large-scale evaluation of modeling choices and their impact on zero-shot generalization finds that pretrained non-causal decoder models can be adapted into performant generative causal decoding models, using autoregressive language modeling as a downstream task.Expand ... \n\nFor full language modeling, all tokens in a sequence are used during training. For prefix language modeling, we… Expand · Published in International Conference on Machine Learning 2022What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?\n\nThis work proposes to use language models as a general-purpose interface to various foundation models to jointly pretrain the interface and the modular encoders, and subsume the advantages and capabilities from both causal and non-causal modeling.Expand ... This work proposes an LLM-enhanced paradigm LLM4MSR, which first leverage LLM to uncover multi-level knowledge from the designed scenario- and user-level prompt without fine-tuning the LLM, then adopt hierarchical meta networks to generate multi-level meta layers to explicitly improve the scenario-aware and personalized recommendation capability.Expand ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.semanticscholar.org/paper/What-Language-Model-Architecture-and-Pretraining-Wang-Roberts/15190e8b459bd85d546286f7d7da61b4f4f3f58a/figure/4",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[PDF] What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization? | Semantic Scholar",
      "url": "https://www.semanticscholar.org/paper/What-Language-Model-Architecture-and-Pretraining-Wang-Roberts/15190e8b459bd85d546286f7d7da61b4f4f3f58a",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "semanticscholar.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=semanticscholar.org",
        "site_name": "Semantic Scholar"
      },
      "is_missing": false,
      "text": "In particular, we focus on text-to-text models and experiment with three model architectures (causal/non-causal decoder-only and encoder-decoder), trained with two different pretraining objectives (autoregressive and masked language modeling), and evalua\n\nThomas Wang, Adam Roberts, +5 authors Colin Raffel · Published in International Conference on… 12 April 2022 ... A large-scale evaluation of modeling choices and their impact on zero-shot generalization finds that pretrained non-causal decoder models can be adapted into performant generative causal decoding models, using autoregressive language modeling as a downstream task.Expand ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.semanticscholar.org/paper/What-Language-Model-Architecture-and-Pretraining-Wang-Roberts/15190e8b459bd85d546286f7d7da61b4f4f3f58a",
        "search_provider": "anthropic",
        "age": "April 12, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[2204.05832] What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?",
      "url": "https://arxiv.org/abs/2204.05832",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "In particular, we focus on text-to-text models and experiment with three model architectures (causal/non-causal decoder-only and encoder-decoder), trained with two different pretraining objectives (autoregressive and masked language modeling), and evaluated with and without multitask prompted finetuning. We train models with over 5 billion parameters for more than 170 billion tokens, thereby increasing the likelihood that our conclusions will transfer to even larger scales.\n\nAbstract page for arXiv paper 2204.05832: What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?\n\nHowever, models with non-causal visibility on their input trained with a masked language modeling objective followed by multitask finetuning perform the best among our experiments. We therefore consider the adaptation of pretrained models across architectures and objectives. \n\nWe find that pretrained non-causal decoder models can be adapted into performant generative causal decoder models, using autoregressive language modeling as a downstream task. Furthermore, we find that pretrained causal decoder models can be efficiently adapted into non-causal decoder models, ultimately achieving competitive performance after multitask finetuning. Code and checkpoints are available at this https URL. From: Julien Launay [view email] [v1] Tue, 12 Apr 2022 14:19:49 UTC (4,292 KB) ... View a PDF of the paper titled What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?, by Thomas Wang and 7 other authors ...\n\nView a PDF of the paper titled What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?, by Thomas Wang and 7 other authors View PDF · Abstract:Large pretrained Transformer language models have been shown to exhibit zero-shot generalization, i.e. \n\nthey can perform a wide variety of tasks that they were not explicitly trained on. However, the architectures and pretraining objecti",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/abs/2204.05832",
        "search_provider": "anthropic",
        "age": "April 12, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[2204.05832v1] What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?",
      "url": "https://arxiv.org/abs/2204.05832v1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "In particular, we focus on text-to-text models and experiment with three model architectures (causal/non-causal decoder-only and encoder-decoder), trained with two different pretraining objectives (autoregressive and masked language modeling), and evaluated with and without multitask prompted finetuning. We train models with over 5 billion parameters for more than 170 billion tokens, thereby increasing the likelihood that our conclusions will transfer to even larger scales.\n\nAbstract page for arXiv paper 2204.05832v1: What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?\n\nHowever, models with non-causal visibility on their input trained with a masked language modeling objective followed by multitask finetuning perform the best among our experiments. We therefore consider the adaptation of pretrained models across architectures and objectives. \n\nWe find that pretrained non-causal decoder models can be adapted into performant generative causal decoder models, using autoregressive language modeling as a downstream task. Furthermore, we find that pretrained causal decoder models can be efficiently adapted into non-causal decoder models, ultimately achieving competitive performance after multitask finetuning. Code and checkpoints are available at this https URL. From: Julien Launay [view email] [v1] Tue, 12 Apr 2022 14:19:49 UTC (4,292 KB) ... View a PDF of the paper titled What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?, by Thomas Wang and 7 other authors ...\n\nView a PDF of the paper titled What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?, by Thomas Wang and 7 other authors View PDF · Abstract:Large pretrained Transformer language models have been shown to exhibit zero-shot generalization, i.e. \n\nthey can perform a wide variety of tasks that they were not explicitly trained on. However, the architectures and pretraining objec",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/abs/2204.05832v1",
        "search_provider": "anthropic",
        "age": "April 12, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What Language Model Architecture and Pretraining Objective Works Best for Zero-Shot Generalization?",
      "url": "https://proceedings.mlr.press/v162/wang22u.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mlr.press",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mlr.press",
        "site_name": "Proceedings of Machine Learning Research"
      },
      "is_missing": false,
      "text": "Our experiments show that causal decoder-only models trained on an autoregressive language modeling objective exhibit the strongest zero-shot generalization after purely self-supervised pretraining.\n\nThomas Wang, Adam Roberts, Daniel Hesslow, Teven Le Scao, Hyung Won Chung, Iz Beltagy, Julien Launay, Colin Raffel · Proceedings of the 39th International Conference on Machine Learning, PMLR 162:22964-22984, 2022. Large pretrained Transformer language models have been shown to exhibit zero-shot generalization, i.e. they can perform a wide variety of tasks that they were not explicitly trained on. However, the architectures and pretraining objectives used across state-of-the-art models differ significantly, and there has been limited systematic comparison of these factors. In this work, we present a large-scale evaluation of modeling choices and their impact on zero-shot generalization. \n\nIn particular, we focus on text-to-text models and experiment with three model architectures (causal/non-causal decoder-only and encoder-decoder), trained with two different pretraining objectives (autoregressive and masked language modeling), and evaluated with and without multitask prompted finetuning\n\nWhat Language Model Architecture and Pretraining Objective Works Best for Zero-Shot Generalization?Thomas Wang, Adam Roberts, Daniel Hesslow, ...\n\nWe train models with over 5 billion parameters for more than 168 billion tokens, thereby increasing the likelihood that our conclusions will transfer to even larger scales. Our experiments show that causal decoder-only models trained on an autoregressive language modeling objective exhibit the strongest zero-shot generalization after purely self-supervised pretraining. \n\nHowever, models with non-causal visibility on their input trained with a masked language modeling objective followed by multitask finetuning perform the best among our experiments. We therefore consider the adaptation of pretrained models across architectures and objectives",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://proceedings.mlr.press/v162/wang22u.html",
        "search_provider": "anthropic",
        "age": "June 28, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?",
      "url": "https://www.researchgate.net/publication/359917804_What_Language_Model_Architecture_and_Pretraining_Objective_Work_Best_for_Zero-Shot_Generalization",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "(2022b), which show that well-tuned encoder-decoder architectures can outperform GPT-3 in ze\n\nWang et al. (2022b), which show that well-tuned encoder-decoder architectures can outperform GPT-3 in zero-shot generalization. ... VIMA: General Robot Manipulation with Multimodal Prompts ... Prompt-based learning has emerged as a successful paradigm in natural language processing, where a single general-purpose language model can be instructed to perform any task specified by input prompts. Yet task specification in robotics comes in various forms, such as imitating one-shot demonstrations, following language instructions, and reaching visual goals. They are often considered different tasks and tackled by specialized models. This work shows that we can express a wide spectrum of robot manipulation tasks with multimodal prompts, interleaving textual and visual tokens. \n\nThis bears resemblance to the empirical results in Sanh et al. (2021); Wang et al. (2022b), which show that well-tuned encoder-decoder architectures can outperform GPT-3 in ze",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/publication/359917804_What_Language_Model_Architecture_and_Pretraining_Objective_Work_Best_for_Zero-Shot_Generalization",
        "search_provider": "anthropic",
        "age": "April 12, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What Language Model Architecture and Pretraining Objective Work Best for",
      "url": "https://proceedings.mlr.press/v162/wang22u/wang22u.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mlr.press",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mlr.press",
        "site_name": "Proceedings of Machine Learning Research"
      },
      "is_missing": false,
      "text": "Figure 7. Applying non-causal MLM adaptation to a causal decoder-only FLM before multitask finetuning improves zero-shot · performances Zero-shot generalization on T0-Eval (left) and EAI-Eval (right), for the T5-LM and T0 baselines, and for models from · our study. Converting the model into a non-causal decoder for multitask finetuning only does not improve performance on T0-Eval. 2021; Lewis et al., 2021; Zoph et al., 2022), retrieval mod- ules (Guu et al., 2020; Lewis et al., 2020), or parameter · sharing (Lan et al., 2019; Dehghani et al., 2018). To facili- tate future work, we release all models, code, and data used ... BigScience. This work was pursued as part of the Big- Science research workshop.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://proceedings.mlr.press/v162/wang22u/wang22u.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization? [Quick Review]",
      "url": "https://liner.com/review/what-language-model-architecture-and-pretraining-objective-work-best-for",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "liner.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=liner.com",
        "site_name": "Liner"
      },
      "is_missing": false,
      "text": "Specifically, models pretrained with a Masked Language Modeling (MLM) objective, particularly the Encoder-Decoder (ED) architecture, demonstrate superior zero-shot generalization.\n\nThis study aims to systematically analyze which architecture and pretraining objective pair produces LLMs with the strongest zero-shot generalization capabilities, considering adaptation and multitask finetuning. We conduct a large-scale systematic study evaluating causal, non-causal decoder-only, and encoder-decoder architectures with autoregressive and masked language modeling objectives for zero-shot generalization. Our work explores language modeling adaptation, converting MLM-trained non-causal decoder models to causal decoder models with an FLM objective, demonstrating improved convergence speed. \n\nWe introduce non-causal masked language modeling adaptation, efficiently converting FLM-pretrained causal decoder models to non-causal decoder models with an MLM objective, significantly accelerating convergence for multitask finetuning. The proposed method investigates the impact of multitask finetuning on different architecture and objective combinations, revealing that an encoder-deco\n\nAfter multitask finetuning, the optimal architecture and pretraining objective for zero-shot generalization performance shifts dramatically compared to unsupervised pretraining alone. Specifically, models pretrained with a Masked Language Modeling (MLM) objective, particularly the Encoder-Decoder (ED) architecture, demonstrate superior zero-shot generalization. \n\nFor instance, the encoder-decoder model pretrained with MLM achieves strong performance even with a quarter of the pretraining tokens compared to other configurations, highlighting the efficiency and effectiveness of this combination for zero-shot generalization. This indicates that multitask finetuning acts as a powerful catalyst, allowing models with certain pretraining characteristics to unlock their full zero-shot potential.\n\nThe research al",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://liner.com/review/what-language-model-architecture-and-pretraining-objective-work-best-for",
        "search_provider": "anthropic",
        "age": "April 12, 2022"
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

 I should look into more recent research on why decoder-only models have become the dominant architecture—Yi Tay's work and other contemporary analyses probably have solid explanations for this shift.

</details>

Let me get one more source on the practical reasons decoder-only dominates.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:36:22.866610Z",
  "stop_timestamp": "2026-04-24T07:36:23.229152Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_018iHXdYKhrZTdCee8y6ySuP",
  "name": "web_search",
  "input": {
    "query": "why decoder-only architecture mainstream LLM causal attention efficiency in-context learning"
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
  "tool_use_id": "toolu_018iHXdYKhrZTdCee8y6ySuP",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Why Decoder-only Transformers?. In the realm of natural language… | by Himank Jain | Medium",
      "url": "https://medium.com/@himankvjain/why-decoder-only-transformers-fc60ee77959b",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "... Decoder-Only (Causal Decoder): Uses autoregressive attention, which maintains full rank status and theoretically offers stronger expressive capability. Encoder-Decoder: Uses bidirectional attention, which speeds up learning but may limit ...\n\nIn the realm of natural language processing (NLP), Transformer architectures have revolutionized the way machines understand and generate…\n\nIn decoder-only models, prompts have a more direct effect as they do not need intermediate context translation. Encoder-decoder models require careful tuning of the encoder for optimal performance with prompts. ... Decoder-only models reuse Key (K) and Value (V) matrices from previous tokens, enhancing efficiency and reducing computational costs during inference. ... Decoder-Only (Causal Decoder): Uses autoregressive attention, which maintains full rank status and theoretically offers stronger expressive capability. \n\nEncoder-Decoder: Uses bidirectional attention, which speeds up learning but may limit the model’s ability to learn deeper predictive patterns. Experiments show that a mix of forward and backward attention (Forward-Backward attention) performs slightly better than full bidirectional attention but the difference is marginal with sufficient training. The popularity of decoder-only architecture comes from its simplicity, good zero-shot generalization, and cheaper training cost \n\nIn the realm of natural language processing (NLP), Transformer architectures have revolutionized the way machines understand and generate human language. At the heart of these architectures are the Encoder and Decoder blocks, which are the main components driving contextual understanding and output generation. Among the various transformer models, decoder-only transformers have garnered significant attention for their efficiency and effectiveness, particularly in text generation tasks.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@himankvjain/why-decoder-only-transformers-fc60ee77959b",
        "search_provider": "anthropic",
        "age": "July 28, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Why are most LLMs decoder-only?. Dive into the rabbit hole of recent… | by Yumo Bai | Medium",
      "url": "https://medium.com/@yumo-bai/why-are-most-llms-decoder-only-590c903e4789",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "This caching mechanism improves efficiency by avoiding the recomputation of K and V matrices for tokens that have already been processed, facilitating faster generation and lower computational costs during inference in autoregressive models like GPT.\n\nWhy are most LLMs decoder-only? Dive into the rabbit hole of recent advancement in Large Language Models I came across this question during mentoring for DeltaHacks and could not come up with an …\n\nIf we perceive prompting as introducing a gradient to the attention weight, we can probably expect it to have a more straightforward effect for the decoder-only models as it does not need to be translated into an intermediate context first before being used for generative tasks. Logically, it should still work for encoder-decoder architectures, but it requires the encoder to be carefully tuned to an optimal performance which might be difficult. \n\nin decoder-only models, the Key (K) and Value (V) matrices from previous tokens can be reused for subsequent tokens during the decoding process. Since each position only attends to previous tokens (due to the causal attention mechanism), the K and V matrices for these tokens remain unchanged. This caching mechanism improves efficiency by avoiding the recomputation of K and V matrices for tokens that have already been processed, facilitating faster generation and lower computational costs during inference in autoregressive models like GPT.\n\nThe decoder-only ones, on the other hand, make perfect sense: They are used to generate outputs and are pre-trained on Next Token Prediction tasks, which is exactly the task for most LLMs. The question really boils down to Decoder-only versus Encoder-Decoder architecture: Having a decoder component and thereby generative ability, wouldn’t having the extra encoder components only help? \n\nThe performance of decoder-only, also referred to as causal decoder, against encoder-decoder models has long been studied. One of the earlier works is the pape",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@yumo-bai/why-are-most-llms-decoder-only-590c903e4789",
        "search_provider": "anthropic",
        "age": "February 9, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Decoder-Only Large Language Models",
      "url": "https://www.emergentmind.com/topics/decoder-only-large-language-models",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "emergentmind.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=emergentmind.com",
        "site_name": "Emergent Mind"
      },
      "is_missing": false,
      "text": "Decoder-only LLMs use causal self-attention for efficient autoregressive generation, powering scalable language modeling and adaptable multi-task learning.\n\nDecoder-only LLMs are transformer-based models that use causal self-attention to predict tokens autoregressively, enabling scalable and efficient generative language modeling. They leverage innovations such as dynamic inference techniques and architectural modifications to balance compute costs and performance in tasks like translation and code search. Despite their efficiency, decoder-only models face challenges with bidirectional context and complex reasoning, prompting research into hybrid and modular adaptations. Decoder-only LLMs are a class of neural sequence models that use a stack of causal self-attention and feed-forward sublayers to model conditional distributions over sequences. \n\nUnlike encoder-decoder architectures, the decoder-only paradigm processes the entire input sequence as a single prompt and generates outputs autoregressively, predicting each token conditioned only on its leftward context.\n\nDecoder-only LLMs present limitations in tasks demanding robust bidirectional context, latent-state aggregation, or explict multi-hop reasoning, as in causal reasoning or scientific simulations. While very large models can partially overcome these deficits, encoder or encoder-decoder architectures remain preferable in resource-constrained or distribution-shifted regimes (Roy et al., 11 Dec 2025). Scaling laws require domain- and range-specific recalibration and do not guarantee reliable extrapolation across domains or languages (Caillaut et al., 2024). \n\nThese modifications trade off memory and compute for small performance reductions, supporting on-device and low-resource settings (Suresh et al., 2024). ... Decoder-only LLMs are trained with the standard next-token prediction (causal language modeling) objective: ... The causal masking ensures autoregressive inference, precluding explicit bidirectional c",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.emergentmind.com/topics/decoder-only-large-language-models",
        "search_provider": "anthropic",
        "age": "December 21, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Encoder-Decoder or Decoder-Only? Revisiting Encoder-Decoder Large Language Model",
      "url": "https://arxiv.org/html/2510.26622",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "This decomposition often improves sample and inference efficiency, making it a preferred choice for several LLMs, such as T5 (Raffel et al., 2020), BART (Lewis et al., 2020) and OpenBA (Li et al., 2023). Instead, the decoder-only architecture relies on a single decoder self-attention module to handle all dependencies, unifying understanding and generation and simplifying the learning...\n\nThis decomposition often improves sample and inference efficiency, making it a preferred choice for several LLMs, such as T5 (Raffel et al., 2020), BART (Lewis et al., 2020) and OpenBA (Li et al., 2023). Instead, the decoder-only architecture relies on a single decoder self-attention module to handle all dependencies, unifying understanding and generation and simplifying the learning. \n\nWhile DecLLM is overall more compute-optimal during pretraining, RedLLM demonstrates comparable scaling and context length extrapolation capabilities. After instruction tuning, RedLLM achieves comparable and even better results on various downstream tasks while enjoying substantially better inference efficiency. We hope our findings could inspire more efforts on re-examining RedLLM, unlocking its potential for developing powerful and efficient LLMs. A crucial lesson from the past decade for modeling is to design scalable and universal architectures being capable of handling different tasks (modalities) and aut\n\nFigure 3 (and 13) shows that while RedLLM shows a slight edge in low-compute settings, DecLLM’s advantage becomes dominant as the compute scales up. This superior scaling behavior might come from its causal LM objective, which endows DecLLM with higher efficiency in utilizing training tokens.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/html/2510.26622",
        "search_provider": "anthropic",
        "age": "October 30, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Decoder-Only Transformers: The Workhorse of Generative LLMs",
      "url": "https://cameronrwolfe.substack.com/p/decoder-only-transformers-the-workhorse",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "As such, building a working understanding of the decoder-only transformer architecture is an absolute necessity for anyone interested in better understanding the inner workings of a langua\n\nAlthough self-attention is the foundation of the transformer architecture, this operation is somewhat inefficient—it is an O(N^2) operation! For this reason, a plethora of efficient attention variants have been proposed; Reformer, SMYRF, and Performer to name a few. Many of these techniques theoretically reduce the complexity of self-attention to O(N), but they fail to achieve measurable speedups in practice. To solve this issue, FlashAttention [25] reformulates the self-attention operation in an efficient and IO-aware manner; see below. ... The inner workings of FlashAttention are mostly hardware-related; see here for more details. However, the result is a drop-in replacement for the self-attention operation that has a variety of awesome benefits: Speeds up BERT-large training time by 15%. \n\nImproves training speed by 3X for GPT-2. Enables longer context lengths for LLMs (due to better memory efficiency).\n\nThe self-attention operation described above forms the basis of the transformer architecture. However, the transformer’s decoder uses a slightly more complex version of self-attention called masked, multi-headed self-attention. First, we will learn the differences between masked and bidirectional self-attention. Then, we will discuss how attention can be computed across multiple “heads” in parallel. Masked self-attention. Decoder-only transformers use a variant of self-attention called masked (or causal) self-attention. While vanilla (or bidirectional) self-attention—as described in the previous section—allows all tokens within the sequence to be considered when computing attention scores, masked self-attention modifies the underlying attention pattern by “masking out” tokens that follow a given token within the sequence.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://cameronrwolfe.substack.com/p/decoder-only-transformers-the-workhorse",
        "search_provider": "anthropic",
        "age": "March 4, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Encoder-Decoder or Decoder-Only? Revisiting ...",
      "url": "https://arxiv.org/pdf/2510.26622",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "Instead, the decoder-only architecture · relies on a single decoder self-attention module to handle all dependencies, unifying understanding · and generation and simplifying the learning. Studies comparing both architectures are many (Fu · et al., 2023; Raffel et al., 2020; Wang et al., ...\n\ninference efficiency, making it a preferred choice for several LLMs, such as T5 (Raffel et al., 2020), BART (Lewis et al., 2020) and OpenBA (Li et al., 2023). Instead, the decoder-only architecture · relies on a single decoder self-attention module to handle all dependencies, unifying understanding · and generation and simplifying the learning. Studies comparing both architectures are many (Fu · et al., 2023; Raffel et al., 2020; Wang et al., 2022), but none of them explored the scaling landscape · except (Zhang et al., 2022a) which nevertheless focuses on machine translation exclusively. \n\nPretraining objective defines what to learn and how to represent information, influencing the model’s · knowledge acquisition and learning efficiency. Popular choices include span corruption that masks · out random tokens from the input to form the target (Raffel et al., 2020), causal LM that simply ·\n\nhave become an essential part of LLM development (Ouyang et al., 2022). ... strong training stability. By contrast, RedLLM excels in finetuning scenarios, showing superior run- ning efficiency and finetuning performance. Besides, RedLLM demonstrates comparable scaling · properties and context length extrapolation capability. There are many potential future directions. We are particularly interested in exploring the scalability · of RedLLM beyond 8B parameters. Our current study focused on balanced architectures, where · the encoder and decoder have an equal number of layers. Investigating imbalanced architectures, ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/pdf/2510.26622",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Decoder-only Foundation Model",
      "url": "https://www.emergentmind.com/topics/decoder-only-foundation-model",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "emergentmind.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=emergentmind.com",
        "site_name": "Emergent Mind"
      },
      "is_missing": false,
      "text": "Decoder-only foundation models are transformer architectures that use only decoder layers with causal autoregressive attention, eliminating the need for a separate encoder. They simplify design while delivering robust performance across natural ...\n\nAll user data, item information, and instruction signals are verbalized as text and processed autoregressively, enabling in-context learning for new tasks and domains and obviating complex feature engineering and dependency graphs. Time-series forecasting (Das et al., 2023): Patched-decoder architectures process input sequences in nonoverlapping patches, using causal attention and autoregressive output patches. Zero-shot performance on public datasets is competitive with supervised state-of-the-art models. Domain adaptation strategies include continual pretraining on specialized corpora and the use of text-based prompts to encode entity attributes, interactions, or domain knowledge. \n\nThe decoder-only paradigm requires careful attention to monotonic alignment, source-target correlation, and order bias—addressed by new inference and training strategies. Partial Attention LLM (PALM) (Fu et al., 2023): Introduces a dedicated partial attention component (ATTₗᴾ) responsible for attending excl\n\nSpeech-LLaMA uses a Connectionist Temporal Classification (CTC) compressor to reduce the sequence length of speech frames, then a lightweight audio encoder to embed acoustic features in the LLM's semantic space. The processed speech and/or text prompt form a single sequence to be autoregressively decoded using causal attention. DTrOCR “patchifies” input images and feeds the patch sequence directly into a decoder-only transformer for OCR. No vision encoder or explicit cross-attention is employed; positional encodings ensure spatial order is preserved.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.emergentmind.com/topics/decoder-only-foundation-model",
        "search_provider": "anthropic",
        "age": "August 16, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Large Language Model Architecture Explained [Updated]",
      "url": "https://www.labellerr.com/blog/exploring-architectures-and-configurations-for-large-language-models-llms/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "labellerr.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=labellerr.com",
        "site_name": "Label Rer"
      },
      "is_missing": false,
      "text": "The causal decoder architecture incorporates a unidirectional attention mask, allowing each input token to attend only to past tokens and itself. Both the input and output tokens are processed in the same manner within the decoder.\n\nLarge Language Models (LLMs) like GPT-4 excel in NLP tasks through advanced architectures, including encoder-decoder, causal decoder, and prefix decoder. This article delves into their configurations, activation functions, and training stability for optimal performance. ... Language models have become increasingly successful in recent years, especially large language models (LLMs) like GPT-4. These models have shown remarkable abilities in various natural language processing (NLP) tasks, such as text generation, language translation, question-answering, and more. Their success can be attributed to their ability to learn from large amounts of text data and sophisticated architecture and training methods. \n\nIn this section, we will examine the configurations related to four crucial components of the Transformer: normalization, position embeddings, activation functions, and attention and bias.\n\nEncoder-decoder PLMs like T5 and BART have demonstrated effectiveness in various NLP tasks. However, only a few LLMs, such as Flan-T5, are built using this architecture. The causal decoder architecture incorporates a unidirectional attention mask, allowing each input token to attend only to past tokens and itself. Both the input and output tokens are processed in the same manner within the decoder. The GPT-series models, including GPT-1, GPT-2, and GPT-3, are representative language models built on this architecture. GPT-3 has shown remarkable in-context learning capabilities. Various LLMs, including OPT, BLOOM, and Gopher have widely adopted causal decoders.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.labellerr.com/blog/exploring-architectures-and-configurations-for-large-language-models-llms/",
        "search_provider": "anthropic",
        "age": "April 17, 2025"
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

 Now I should examine the expressiveness argument more closely—there's a frequently cited paper demonstrating that decoder-only models achieve full-rank representations, which is relevant to this discussion.

</details>

Let me check one more claim about expressive power (the "full rank" argument):

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:36:27.695437Z",
  "stop_timestamp": "2026-04-24T07:36:28.475689Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Quk1rn2P3fRWSTgXGFW3qg",
  "name": "web_search",
  "input": {
    "query": "\"attention matrix\" \"full rank\" causal decoder-only expressive power triangular low-rank bidirectional"
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
  "tool_use_id": "toolu_01Quk1rn2P3fRWSTgXGFW3qg",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Why Decoder-only Transformers?. In the realm of natural language… | by Himank Jain | Medium",
      "url": "https://medium.com/@himankvjain/why-decoder-only-transformers-fc60ee77959b",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Decoder-Only (Causal Decoder): Uses autoregressive attention, which maintains full rank status and theoretically offers stronger expressive capability. Encoder-Decoder: Uses bidirectional attention, which speeds up learning but may limit the ...\n\nIn the realm of natural language processing (NLP), Transformer architectures have revolutionized the way machines understand and generate…\n\nDecoder-Only (Causal Decoder): Uses autoregressive attention, which maintains full rank status and theoretically offers stronger expressive capability. Encoder-Decoder: Uses bidirectional attention, which speeds up learning but may limit the model’s ability to learn deeper predictive patterns. Experiments show that a mix of forward and backward attention (Forward-Backward attention) performs slightly better than full bidirectional attention but the difference is marginal with sufficient training.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@himankvjain/why-decoder-only-transformers-fc60ee77959b",
        "search_provider": "anthropic",
        "age": "July 28, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Prefix Linear Attention Can Outspeed Causal Linear Attention | Hailey Schoelkopf",
      "url": "https://haileyschoelkopf.github.io/blog/2024/prefix-lm/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
        "site_name": "Haileyschoelkopf"
      },
      "is_missing": false,
      "text": "First, let’s briefly recap some of the disadvantages of PrefixLM for typical decoder-only GPT-style autoregressive LMs. If you are already familiar with PrefixLM and other LM objectives as well as their tradeoffs, feel free to skip to later sections. ... , by computing tiles of the \\(L \\times L\\) attention matrix at a time, makes it possible to skip tiles that are fully masked out. This means we don’t have to compute anything where all positions in the tile are above the diagonal in the causal mask \\(M\\), and can get 2x faster attention when we’re doing fully-causal attention as compared to bidirectional attention. For PrefixLM, although we can take advantage of some of the masked-out tiles to speed up over the fully-bidirectional case · , we still are forced to compute more values that wouldn’t be needed when performing fully causal attention.\n\n\n\nIf you are already familiar with PrefixLM and other LM objectives as well as their tradeoffs, feel free to skip to later sections. ... , by computing tiles of the \\(L \\times L\\) attention matrix at a time, makes it possible to skip tiles that are fully masked out. This means we don’t have to compute anything where all positions in the tile are above the diagonal in the causal mask \\(M\\), and can get 2x faster attention when we’re doing fully-causal attention as compared to bidirectional attention. For PrefixLM, although we can take advantage of some of the masked-out tiles to speed up over the fully-bidirectional case · , we still are forced to compute more values that wouldn’t be needed when performing fully causal attention.\n\nThe one we’ll focus on in this post is Prefix Language Modeling (“PrefixLM”). \n\nAmong Causal Decoder (decoder-only model trained with Causal LM), Non-causal Decoder (decoder-only model trained with Prefix",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://haileyschoelkopf.github.io/blog/2024/prefix-lm/",
        "search_provider": "anthropic",
        "age": "August 11, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Encoder-Only Transformer",
      "url": "https://www.emergentmind.com/topics/encoder-only-transformer",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "emergentmind.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=emergentmind.com",
        "site_name": "Emergent Mind"
      },
      "is_missing": false,
      "text": "Compared to encoder-decoder or decoder-only designs, encoder-only transformers operate without causal masks by default, granting bidirectional or global context to all positions. Encoder-only and decoder-only transformers each possess unique expressive regimes. Formal results show: ... L \\geq 2L≥2, there exist causal functions expressible in constant depth that no decoder-only of the same size can model [(Ewer et al., 2024), Theorem 4.2]. Explicitly, the &quot;Count3&quot; function is computable in constant-depth encoder-only but requires ... Conversely, decoder-only transformers also possess function classes inaccessible to encoder-only models of bounded depth [(Ewer et al., 2024), Theorem 4.1]. ... O(n^3 D L)O(n3DL) for a full sequence, as the transformer must recompute attention for the augmented input at each step. Decoder-only models, leveraging KV-caching and causal attention, achieve ...\n\n\n\nThese results clarify that attention scaling and initialization scheme selection crucially affect both convergence and the expressive regime of the model. Feature learning (finite-width regime) is preferable where nontrivial attention is desired (Wu et al., 2023). Adapting decoder-only transformers for encoder tasks has proven effective: Gemma Encoder demonstrates that switching a decoder-only (causal) transformer to bidirectional attention, attaching a lightweight pooling+MLP head, and applying dropout during fine-tuning yields models that outperform or match best-in-class encoder-only architectures across classification, regression, and ranking tasks (e.g., GLUE, MS MARCO) (Suganthan et al., 4 Mar 2025). Various pooling strategies (mean pooling, last-token, attention pooling with learned query probes) have been benchmarked; in practical scenarios, simple mean or last-token pooling is often optimal when fine-tuning on moderate corpora.\n\n\n\nEncoder-Only Transformers are neural network architectures that rely solely on stacked self-attention layers to process input bidirec",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.emergentmind.com/topics/encoder-only-transformer",
        "search_provider": "anthropic",
        "age": "January 6, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Chain and Causal Attention for Efficient Entity Tracking",
      "url": "https://arxiv.org/html/2410.05565v1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "In this work, we focus on the decoder-only architecture Radford and Narasimhan (2018) based on transformers Vaswani et al. (2017). This kind of generative architecture is at the core of Causal Language Modeling (CLM). While there are many variants Radford and Narasimhan (2018); Radford et al. (2019); Brown et al. (2020a); Raffel et al. (2020b); Lewis et al. (2020), they all rely on the same framework. After a tokenization step of the texts, the embedding layer converts the pre-processed input in a sequence of vectors, i.e a matrix. Then, ... italic_L layers of transformers process this matrix, each made of a self-attention layer followed by a feedforward network. The output vectors are finally projected into logits for prediction purposes. At the core of the transformer architecture is the attention layer. Given an input ... \n\nbold_W start_POSTSUBSCRIPT bold_q end_POSTSUBSCRIPT ∈ blackboard_R start_POSTSUPERSCRIPT italic_d × italic_d start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POS\n\nFinally, the high computational efficiency of our method mainly relies on the attention matrix being lower-triangular, which is only the case in decoder transformers for causal language modeling. Further research may attempt to generalize ChaCAL to non-causal transformers such as BERT Devlin et al. (2019) and many others Vaswani et al. (2017); Liu et al. (2019); He et al. (2021); Raffel et al. (2020b). In this study, we have theorized that transformers require at least ... roman_log start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT ( italic_n + 1 ) layers for effective entity tracking tasks with ... italic_n jumps.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/html/2410.05565v1",
        "search_provider": "anthropic",
        "age": "October 7, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Creating a Transformer From Scratch - Part One: The Attention Mechanism | Mixed Precision",
      "url": "https://benjaminwarner.dev/2023/07/01/attention-mechanism",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "benjaminwarner.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=benjaminwarner.dev",
        "site_name": "Mixed Precision"
      },
      "is_missing": false,
      "text": "We will use an upper triangular matrix for the Causal Attention mask to ensure the current token can only attend to past tokens no matter where the current token is in the sequence.\n\nThe three standard types of Attention layers introduced in Attention is All You Need, are Bidirectional Attention, Causal Attention, and Cross AttentionBidirectional Attention can also be referred as “fully-visible” and Causal Attention as “Autoregressive”.. Both Bidirectional and Causal Attention are forms of Self-Attention, as they only apply Attention to one input sequence, while Cross Attention applies Attention on multiple inputsI will explain each type of Attention in detail with code later in the post, so don’t worry if this overview is a bit confusing.. Bidirectional Attention is used in encoder blocks in encoder-only models (BERTJacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. \n\nFrom Attention is All You Need.We’ll start our implementation of a Attention layer with the simplest Attention mechanism: Single Head Bidirectional Self-Attention.\n\nGray shading indicates a masked token. From The Illustrated GPT2.For Causal Attention, we need to ensure that current tokens can only attend to past tokens, and not future tokens in the sequence. We can accomplish this through masking. We will use an upper triangular matrix for the Causal Attention mask to ensure the current token can only attend to past tokens no matter where the current token is in the sequence. Figure 7 illustrates how the upper triangular matrix is applied on a per-token level, where the diagonal, ... (2,2)(2,2), etc, is the current token in the sequence. Green shaded tokens, both the current token and tokens to the left of the current token, are unmasked and can be attended too, while grey shaded tokens to the right of the current token are masked and cannot used in the Attention mechanism.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://benjaminwarner.dev/2023/07/01/attention-mechanism",
        "search_provider": "anthropic",
        "age": "July 1, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Understanding Multi-Head Latent Attention",
      "url": "https://planetbanatt.net/articles/mla.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "planetbanatt.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=planetbanatt.net",
        "site_name": "Planet Banatt"
      },
      "is_missing": false,
      "text": "In comparison, Multi-head Latent Attention12 (MLA) is an attention variant introduced by the DeepSeek-V2 paper. Rather than reducing the number of heads, MLA will instead replace the \\(W_{KV}\\) matrix with a low-rank matrix decomposition which first compresses down to a latent KV vector, caches that instead, and then decompresses back up to a full-size K and V. This allows it, in theory, to enjoy the benefits of the full expressive power of distinct K and V heads for each Q head, while compressing the KV cache to a similar degree as MQA. MLA is comparatively very understudied. Some work exists for exploring the properties of MLA, but a lot of it is Chinese-language blogs13. The hope with this work is a straightforward, pedagogical implementation of MLA to aid in understanding the costs and benefits. RoPE is largely considered the de facto standard for position embeddings in modern LLMs.\n\n\n\nIn comparison, Multi-head Latent Attention12 (MLA) is an attention variant introduced by the DeepSeek-V2 paper. Rather than reducing the number of heads, MLA will instead replace the \\(W_{KV}\\) matrix with a low-rank matrix decomposition which first compresses down to a latent KV vector, caches that instead, and then decompresses back up to a full-size K and V. This allows it, in theory, to enjoy the benefits of the full expressive power of distinct K and V heads for each Q head, while compressing the KV cache to a similar degree as MQA. MLA is comparatively very understudied. Some work exists for exploring the properties of MLA, but a lot of it is Chinese-language blogs13. The hope with this work is a straightforward, pedagogical implementation of MLA to aid in understanding the costs and benefits. RoPE is largely considered the de facto standard for position embeddings in modern LLMs.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://planetbanatt.net/articles/mla.html",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "mlr based attention method",
      "url": "https://www.emergentmind.com/topics/mlr-based-attention-method",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "emergentmind.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=emergentmind.com",
        "site_name": "emergentmind"
      },
      "is_missing": false,
      "text": "Papers\nTopics\nAuthors\nRecent\n2000 character limit reached\n\nMLR-Based Attention Method\n\nUpdated 10 September 2025\n  • MLR-Based Attention Method is a neural approach that replaces low-rank bottlenecks with hierarchical multi-level low-rank structured matrices for improved expressiveness.\n  • It utilizes a sum of block-diagonal low-rank products and block tensor-train matrices to efficiently allocate computational resources across local and global patterns.\n  • Empirical results demonstrate reduced errors in in-context regression, language modeling, and time-series forecasting, confirming its scalability and performance benefits.\n\nThe MLR-Based Attention Method refers to a set of attention mechanisms that exploit Multi-Level Low Rank (MLR) structured matrices—either alone or along with similar constructs such as Block Tensor-Train (BTT) matrices—to enhance the expressiveness and inductive bias of attention in neural networks. \n\nAt its core, MLR-based attention generalizes the standard bilinear dot-product attention function, often constrained by a low-rank bottleneck, by replacing it with hierarchically-structured matrices which can achieve full rank or encode distance- or block-dependent compute bias. This enables improved performance in settings where inputs are high-dimensional, data exhibits hierarchical or locality patterns, or tasks require efficient scaling in both compute and memory.\n\n1. Motivation and Theoretical Foundations\n\nStandard attention mechanisms rely on projecting both inputs and queries into low-dimensional spaces and then computing their bilinear interaction:\n\ns(x,x)=xWQWKxs(x, x') = x^\\top W_Q W_K^\\top x'\n\nHere, WQRD×dW_Q \\in \\mathbb{R}^{D \\times d} and WKRD×dW_K \\in \\mathbb{R}^{D \\times d} are projection matrices with dDd \\ll D, limiting the rank of WQWKW_Q W_K^\\top and thus reducing the capacity of the scoring function. \n\nThis bottleneck leads to significant information loss in high-dimensional problems (notably, in in-context regre",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.emergentmind.com/topics/mlr-based-attention-method",
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

 I've got the key points sorted out now. The original Transformer architecture came from Google in 2017 with both encoder and decoder components, while OpenAI's GPT-1 in 2018 pioneered the decoder-only approach for generative language modeling.

The important distinction here is that GPT-1 didn't actually argue decoder-only was architecturally superior—it used that design because language modeling is inherently autoregressive. The paper's real innovation was the pre-train-then-finetune paradigm, not an architectural comparison. The systematic architectural comparisons between encoder, decoder, and encoder-decoder models came later with research like Wang et al. 2022.

Now looking at what Wang et al. actually found: decoder-only dominates in practice for several concrete reasons—it's simpler with a unified architecture, it has KV-caching efficiency during inference, and it empirically scales better based on the scaling laws derived from decoder-only models. But here's the key finding: after multi-task fine-tuning, encoder-decoder models with masked language modeling actually outperform decoder-only. So decoder-only isn't unconditionally best; it excels specifically at zero-shot generalization from pure self-supervised pretraining. The practical dominance also comes from in-context learning emerging naturally and the 2x faster attention from causal masking.

I should clarify what's actually fact versus speculation here. Wang et al. 2022 definitively showed causal decoder-only wins for pure self-supervised zero-shot, but the broader question of why decoder-only became mainstream despite encoder-decoder's fine-tuning advantages likely comes down to simplicity, GPT-3's empirical success, and inference efficiency gains. The full-rank attention argument I mentioned comes from a non-peer-reviewed source, so that's more speculative. And I need to correct something about OpenAI's framing—their papers don't actually argue decoder-only is fundamentally better; they use it because language modeling is naturally causal, and then the empirical success and practical advantages took over from there.

For the response, I'll structure it to separate what we know from what's assumption, use the visualizer to show the architectural differences, and make sure to highlight that GPT-1 didn't claim decoder-only superiority in general—it just picked that approach for generative pretraining.

</details>

Now I have enough primary-source grounding. Let me also flag an important correction to your framing before diving in, then create an interactive visualization.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:36:56.015805Z",
  "stop_timestamp": "2026-04-24T07:36:56.546020Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_012qcCFnafj6zf7rmuBucZsq",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "diagram",
      "interactive"
    ],
    "platform": "unknown"
  },
  "message": "read_me",
  "integration_name": "visualize",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": false,
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
  "tool_use_id": "toolu_012qcCFnafj6zf7rmuBucZsq",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. **No unintentional overlaps.** For every pair of elements that aren't meant to layer (label-on-label, label-on-arrow, box-on-box, callout-on-shape), check their bounding boxes do not intersect. The only allowed overlaps are deliberate: a label centered inside its own box, an arrowhead touching the box it points to, a highlight rect behind the thing it highlights. If two unrelated elements would collide, move one — shorten the label, shift the y, add a row. A diagram with crossed labels reads as broken regardless of how good the content is.\n7. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 476 H\"` in a 680px container scales everything by 680/476 = 1.43×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=240..440) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680×560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n\n\n## UI components\n\n### Layout width\nThe widget container is 680px wide. Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns — auto-fit lets the grid pick column count by available width.\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n",
      "uuid": "5b9d7d0b-ca93-4fac-b191-8a94231bd5f7"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": "visualize",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 Now I'm organizing my response around what the user actually asked—clarifying what OpenAI's research says about decoder-only models and why they've become dominant. I'll create an interactive comparison diagram showing how the three architecture types stack up against each other, since that visual approach will help illustrate the key differences and performance tradeoffs. I'm going to build an interactive visualization where users can click through the three architectures and see how their attention patterns differ—showing the bidirectional attention in encoders, causal masking in decoders, and the cross-attention bridge in encoder-decoder models.

</details>

## First, an important correction to your premise

You wrote *"Transformer Architecture has encoder and decoder"* — this describes only the **original** Transformer from Vaswani et al., 2017 ("Attention Is All You Need"), which was from **Google, not OpenAI**. Today, "Transformer" is an umbrella term: you can keep the encoder only (→ BERT), keep the decoder only (→ GPT), or keep both (→ T5, BART).

This matters because your question assumes OpenAI's paper argues *why* decoder-only is superior. **It actually doesn't.** Let me show you what it really says, and then what the real evidence for decoder-only's dominance looks like.

---

## What OpenAI's GPT-1 paper actually says

**Primary source:** Radford, Narasimhan, Salimans, and Sutskever (2018), *"Improving Language Understanding by Generative Pre-Training"*, Technical Report, OpenAI.

The architectural statement in the paper is remarkably brief. Section 3.1 says:

> Our model largely follows the original transformer work. We trained a 12-layer decoder-only transformer with masked self-attention heads (768 dimensional states and 12 attention heads).

That's essentially it. **The paper does not contain a comparative argument that decoder-only outperforms encoder-decoder.** The main contribution the paper argues for is the *two-stage semi-supervised training paradigm* — unsupervised generative pre-training followed by supervised fine-tuning — not the architectural choice itself. The decoder was picked because the pre-training task (next-token prediction on unlabeled text) is inherently autoregressive, so a causal decoder is the natural fit.

**➜ This is a blind spot worth flagging:** many tutorials retroactively present GPT-1 as *proving* decoder-only is better. It didn't. It just demonstrated that a decoder-only model, pretrained then fine-tuned, beats task-specific architectures on 9 of 12 NLU tasks.

---

## The actual evidence for *why* decoder-only dominates

The systematic comparison you're looking for came four years later:

**Primary source:** Wang, Roberts, Hesslow, Le Scao, Chung, Beltagy, Launay, and Raffel (2022), *"What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?"*, ICML 2022 (arXiv:2204.05832).

They trained models at the >5B parameter scale across three architectures (causal decoder-only, non-causal decoder-only, encoder-decoder) × two objectives (autoregressive LM, masked LM). Their headline finding:

> Our experiments show that causal decoder-only models trained on an autoregressive language modeling objective exhibit the strongest zero-shot generalization after purely self-supervised pretraining.

**But — and this is the nuance most summaries omit — they also found:**

> models with non-causal visibility on their input trained with a masked language modeling objective followed by multitask finetuning perform the best among our experiments

So the honest statement is: **decoder-only wins *in the regime people actually deploy* (pretrain once, then zero-shot or few-shot prompt)**. Encoder-decoder with masked-LM + multi-task finetuning can actually beat it when you're willing to do extensive task-specific fine-tuning.

Let me visualize the architectural difference that drives this, since the attention-mask shape is the core of the story:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:37:36.961948Z",
  "stop_timestamp": "2026-04-24T07:38:22.028548Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KqP4XkQq6ukeSv2GjrCjut",
  "name": "visualize:show_widget",
  "input": {
    "title": "transformer_architecture_attention_masks",
    "loading_messages": [
      "Laying out the architectures",
      "Drawing attention masks",
      "Wiring up the toggle"
    ],
    "widget_code": "<style>\n.arch-toggle { display: flex; gap: 4px; margin-bottom: 1.25rem; background: var(--color-background-secondary); padding: 4px; border-radius: var(--border-radius-md); }\n.arch-btn { flex: 1; padding: 8px 10px; background: transparent; border: none; border-radius: 6px; font-size: 13px; font-weight: 400; color: var(--color-text-secondary); cursor: pointer; transition: background .15s, color .15s; font-family: var(--font-sans); }\n.arch-btn.active { background: var(--color-background-primary); color: var(--color-text-primary); font-weight: 500; box-shadow: 0 0 0 0.5px var(--color-border-tertiary); }\n.arch-label { font-size: 12px; color: var(--color-text-secondary); margin: 0 0 4px; }\n.arch-value { font-size: 15px; color: var(--color-text-primary); font-weight: 500; margin: 0 0 14px; }\n.meta-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-top: 1rem; }\n.meta-card { background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px 12px; }\n.meta-card-label { font-size: 11px; color: var(--color-text-secondary); margin: 0 0 2px; text-transform: uppercase; letter-spacing: 0.04em; }\n.meta-card-value { font-size: 13px; color: var(--color-text-primary); font-weight: 500; margin: 0; line-height: 1.35; }\n</style>\n<h2 class=\"sr-only\">Interactive comparison of encoder-decoder, encoder-only, and decoder-only Transformer attention masks</h2>\n\n<div class=\"arch-toggle\" role=\"tablist\">\n  <button class=\"arch-btn active\" data-arch=\"encdec\" onclick=\"setArch('encdec')\">Encoder–decoder</button>\n  <button class=\"arch-btn\" data-arch=\"enc\" onclick=\"setArch('enc')\">Encoder-only</button>\n  <button class=\"arch-btn\" data-arch=\"dec\" onclick=\"setArch('dec')\">Decoder-only</button>\n</div>\n\n<p class=\"arch-label\">Example model</p>\n<p class=\"arch-value\" id=\"example\">Original Transformer, T5, BART</p>\n\n<svg width=\"100%\" viewBox=\"0 0 680 340\" role=\"img\" aria-labelledby=\"arch-title arch-desc\">\n  <title id=\"arch-title\">Attention mask pattern</title>\n  <desc id=\"arch-desc\">Grid showing which tokens can attend to which other tokens. Filled cells mean attention is allowed.</desc>\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </marker>\n  </defs>\n\n  <!-- Tokens along top (keys) -->\n  <text class=\"ts\" x=\"340\" y=\"24\" text-anchor=\"middle\">Key token (attended to)</text>\n  <g id=\"keys\">\n    <text class=\"ts\" x=\"215\" y=\"52\" text-anchor=\"middle\">the</text>\n    <text class=\"ts\" x=\"265\" y=\"52\" text-anchor=\"middle\">cat</text>\n    <text class=\"ts\" x=\"315\" y=\"52\" text-anchor=\"middle\">sat</text>\n    <text class=\"ts\" x=\"365\" y=\"52\" text-anchor=\"middle\">down</text>\n    <text class=\"ts\" x=\"415\" y=\"52\" text-anchor=\"middle\">[SEP]</text>\n    <text class=\"ts\" x=\"465\" y=\"52\" text-anchor=\"middle\">le</text>\n  </g>\n\n  <!-- Query tokens on left -->\n  <g transform=\"rotate(-90)\">\n    <text class=\"ts\" x=\"-170\" y=\"98\" text-anchor=\"middle\">Query (looking)</text>\n  </g>\n  <g id=\"queries\">\n    <text class=\"ts\" x=\"180\" y=\"85\"  text-anchor=\"end\" dominant-baseline=\"central\">the</text>\n    <text class=\"ts\" x=\"180\" y=\"115\" text-anchor=\"end\" dominant-baseline=\"central\">cat</text>\n    <text class=\"ts\" x=\"180\" y=\"145\" text-anchor=\"end\" dominant-baseline=\"central\">sat</text>\n    <text class=\"ts\" x=\"180\" y=\"175\" text-anchor=\"end\" dominant-baseline=\"central\">down</text>\n    <text class=\"ts\" x=\"180\" y=\"205\" text-anchor=\"end\" dominant-baseline=\"central\">[SEP]</text>\n    <text class=\"ts\" x=\"180\" y=\"235\" text-anchor=\"end\" dominant-baseline=\"central\">le</text>\n  </g>\n\n  <!-- Grid of cells (6x6). Origin (x=190, y=70), cell 50x30 -->\n  <g id=\"grid\"></g>\n\n  <!-- Separator line between input and output (positioned dynamically) -->\n  <line id=\"sep-h\" x1=\"190\" y1=\"190\" x2=\"490\" y2=\"190\" stroke=\"var(--color-text-secondary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\" opacity=\"0\"/>\n  <line id=\"sep-v\" x1=\"390\" y1=\"60\" x2=\"390\" y2=\"250\" stroke=\"var(--color-text-secondary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\" opacity=\"0\"/>\n\n  <!-- Legend -->\n  <g transform=\"translate(520, 85)\">\n    <rect width=\"14\" height=\"14\" rx=\"2\" fill=\"#AFA9EC\"/>\n    <text class=\"ts\" x=\"20\" y=\"11\">Bidirectional</text>\n    <rect y=\"28\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#5DCAA5\"/>\n    <text class=\"ts\" x=\"20\" y=\"39\">Causal (past only)</text>\n    <rect y=\"56\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#F0997B\"/>\n    <text class=\"ts\" x=\"20\" y=\"67\">Cross-attention</text>\n    <rect y=\"84\" width=\"14\" height=\"14\" rx=\"2\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n    <text class=\"ts\" x=\"20\" y=\"95\">Masked</text>\n  </g>\n\n  <!-- Caption -->\n  <text class=\"ts\" x=\"340\" y=\"290\" text-anchor=\"middle\" id=\"caption\">Each row shows what that query token can \"see\".</text>\n  <text class=\"ts\" x=\"340\" y=\"310\" text-anchor=\"middle\" id=\"caption2\">First 4 tokens = input, last 2 = output.</text>\n</svg>\n\n<div class=\"meta-grid\">\n  <div class=\"meta-card\">\n    <p class=\"meta-card-label\">Input visibility</p>\n    <p class=\"meta-card-value\" id=\"input-vis\">Bidirectional</p>\n  </div>\n  <div class=\"meta-card\">\n    <p class=\"meta-card-label\">Output visibility</p>\n    <p class=\"meta-card-value\" id=\"output-vis\">Causal</p>\n  </div>\n  <div class=\"meta-card\">\n    <p class=\"meta-card-label\">KV-cache reusable?</p>\n    <p class=\"meta-card-value\" id=\"kv-cache\">Partial (output only)</p>\n  </div>\n  <div class=\"meta-card\">\n    <p class=\"meta-card-label\">Parameter usage</p>\n    <p class=\"meta-card-value\" id=\"params\">Split: encoder + decoder</p>\n  </div>\n</div>\n\n<script>\n(function() {\n  const grid = document.getElementById('grid');\n  const sepH = document.getElementById('sep-h');\n  const sepV = document.getElementById('sep-v');\n  const example = document.getElementById('example');\n  const cap1 = document.getElementById('caption');\n  const cap2 = document.getElementById('caption2');\n  const inputVis = document.getElementById('input-vis');\n  const outputVis = document.getElementById('output-vis');\n  const kvCache = document.getElementById('kv-cache');\n  const params = document.getElementById('params');\n\n  // Colors\n  const BIDIR = '#AFA9EC';   // purple 200 - bidirectional input\n  const CAUSAL = '#5DCAA5';  // teal 200 - causal output\n  const CROSS = '#F0997B';   // coral 200 - cross attention\n  const MASKED_FILL = 'var(--color-background-secondary)';\n  const MASKED_STROKE = 'var(--color-border-tertiary)';\n\n  // 6 tokens: 0-3 input (\"the cat sat down\"), 4-5 output (\"[SEP] le\")\n  const N = 6;\n  const INPUT_END = 4; // tokens 0..3 are input\n\n  function buildGrid(arch) {\n    grid.innerHTML = '';\n    for (let r = 0; r < N; r++) {\n      for (let c = 0; c < N; c++) {\n        let fill = MASKED_FILL;\n        let stroke = MASKED_STROKE;\n        let allowed = false;\n\n        if (arch === 'enc') {\n          // Encoder-only: all bidirectional\n          allowed = true;\n          fill = BIDIR;\n        } else if (arch === 'dec') {\n          // Decoder-only: causal everywhere (c <= r)\n          if (c <= r) { allowed = true; fill = CAUSAL; }\n        } else if (arch === 'encdec') {\n          const qInput = r < INPUT_END;\n          const kInput = c < INPUT_END;\n          if (qInput && kInput) {\n            // Input to input: bidirectional\n            allowed = true; fill = BIDIR;\n          } else if (!qInput && kInput) {\n            // Output querying input: cross-attention (full access)\n            allowed = true; fill = CROSS;\n          } else if (!qInput && !kInput) {\n            // Output to output: causal\n            if (c <= r) { allowed = true; fill = CAUSAL; }\n          }\n          // input row querying output col: always masked\n        }\n\n        const x = 190 + c * 50;\n        const y = 70 + r * 30;\n        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n        rect.setAttribute('x', x);\n        rect.setAttribute('y', y);\n        rect.setAttribute('width', 48);\n        rect.setAttribute('height', 28);\n        rect.setAttribute('rx', 3);\n        rect.setAttribute('fill', fill);\n        if (!allowed) {\n          rect.setAttribute('stroke', stroke);\n          rect.setAttribute('stroke-width', '0.5');\n        }\n        grid.appendChild(rect);\n      }\n    }\n  }\n\n  const config = {\n    encdec: {\n      example: 'Original Transformer (2017), T5, BART',\n      cap: 'Input (rows 1–4) sees itself bidirectionally. Output (rows 5–6) sees input via cross-attention + its own past.',\n      cap2: 'Separate encoder and decoder stacks — ~2× parameters for the same \"depth\".',\n      inputVis: 'Bidirectional (full)',\n      outputVis: 'Causal + cross-attn',\n      kvCache: 'Partial (decoder side)',\n      params: 'Split: encoder + decoder',\n      sep: true\n    },\n    enc: {\n      example: 'BERT, RoBERTa, DeBERTa',\n      cap: 'Every token sees every other token. Great for classification.',\n      cap2: 'Cannot generate autoregressively — no notion of \"next token\".',\n      inputVis: 'Bidirectional (full)',\n      outputVis: 'No generation',\n      kvCache: 'N/A (not autoregressive)',\n      params: 'Single stack',\n      sep: false\n    },\n    dec: {\n      example: 'GPT-1, GPT-2, GPT-3, Llama, Claude',\n      cap: 'Each token sees only itself and earlier tokens. Input + output unified.',\n      cap2: 'Lower-triangular mask → KV-cache works perfectly, inference ~2× faster than bidirectional.',\n      inputVis: 'Causal (past only)',\n      outputVis: 'Causal (past only)',\n      kvCache: 'Full (reuse every prior K, V)',\n      params: 'Single unified stack',\n      sep: false\n    }\n  };\n\n  window.setArch = function(arch) {\n    document.querySelectorAll('.arch-btn').forEach(b => {\n      b.classList.toggle('active', b.dataset.arch === arch);\n    });\n    const c = config[arch];\n    example.textContent = c.example;\n    cap1.textContent = c.cap;\n    cap2.textContent = c.cap2;\n    inputVis.textContent = c.inputVis;\n    outputVis.textContent = c.outputVis;\n    kvCache.textContent = c.kvCache;\n    params.textContent = c.params;\n    sepH.setAttribute('opacity', c.sep ? '1' : '0');\n    sepV.setAttribute('opacity', c.sep ? '1' : '0');\n    buildGrid(arch);\n  };\n\n  // Initial render\n  buildGrid('encdec');\n})();\n</script>"
  },
  "message": "show_widget",
  "integration_name": "visualize",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": true,
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
  "tool_use_id": "toolu_01KqP4XkQq6ukeSv2GjrCjut",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "No result received from the Claude Desktop app after waiting 4 minutes. The local MCP server providing this tool may be unresponsive, crashed, or not running. Further calls to this tool are likely to time out the same way; consider using an alternative approach or ask the user to restart their local MCP servers.",
      "uuid": "c04edff8-9288-45ce-a086-e4f622cec23c"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": "visualize",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 The visualization tool timed out, so I'll switch to a text-based explanation instead and wrap up the answer.

</details>

The visualization tool timed out — I'll continue with the analysis in prose. If you'd like to retry the interactive diagram later, let me know.

## Practical reasons decoder-only became the mainstream choice

These are the mechanisms people cite in practice. I'll mark each as **established fact** vs **widely-believed reasoning**:

**1. Inference efficiency via KV-cache (fact, mechanical).** In a causal decoder, token *t*'s attention depends only on tokens 1…*t*, so the Key and Value matrices for tokens 1…*t*−1 never change when you generate token *t*+1. You cache them and reuse them. in decoder-only models, the Key (K) and Value (V) matrices from previous tokens can be reused for subsequent tokens during the decoding process. Since each position only attends to previous tokens (due to the causal attention mechanism), the K and V matrices for these tokens remain unchanged. Bidirectional encoders cannot do this — every new token invalidates the cache.

**2. Attention is ~2× faster (fact).** With FlashAttention-style tiled computation, roughly half the attention tiles (those above the causal diagonal) can be skipped entirely. by computing tiles of the L × L attention matrix at a time, makes it possible to skip tiles that are fully masked out... can get 2x faster attention when we're doing fully-causal attention as compared to bidirectional attention

**3. Unified architecture (fact, design).** Decoder-only uses one stack for both "understanding" the prompt and "generating" the output. the decoder-only architecture relies on a single decoder self-attention module to handle all dependencies, unifying understanding and generation and simplifying the learning. Encoder-decoder models split parameters between two stacks, which can halve the effective depth for a given parameter budget.

**4. Compute-optimal scaling (empirical, recent evidence).** A 2025 study on arXiv found: while RedLLM shows a slight edge in low-compute settings, DecLLM's advantage becomes dominant as the compute scales up. This superior scaling behavior might come from its causal LM objective, which endows DecLLM with higher efficiency in utilizing training tokens. Note the authors' hedge — *"might come from"* — this is an observation, not a proof.

**5. Full-rank attention argument (theoretical, weakly supported).** A claim circulating in secondary sources is that the lower-triangular attention matrix of a causal decoder is always full-rank, while bidirectional softmax attention can suffer rank collapse, giving decoder-only stronger expressive capacity. **I want to flag this honestly:** I could not find the claim in a top-tier peer-reviewed primary source — it appears mainly in blog-post summaries such as Decoder-Only (Causal Decoder): Uses autoregressive attention, which maintains full rank status and theoretically offers stronger expressive capability. Treat this as a **plausible hypothesis people repeat**, not an established fact.

**6. In-context learning emerged on decoder-only at scale (historical).** GPT-3 (Brown et al., 2020) was a decoder-only model that demonstrated strong few-shot/zero-shot prompting. This empirical success, more than any architectural proof, is probably the biggest *sociological* reason decoder-only became the default — the industry followed what worked at scale.

---

## Facts vs. assumptions — honest summary

| Claim | Status |
|---|---|
| GPT-1 uses a 12-layer decoder-only transformer | **Fact** — directly stated in Radford et al. 2018 |
| OpenAI's GPT-1 paper argues decoder-only is *superior to* encoder-decoder | **False assumption** — the paper makes no such claim |
| Causal decoder-only wins on zero-shot after pure self-supervised pretraining at ≥5B scale | **Fact** — Wang et al. 2022, ICML |
| Encoder-decoder + MLM + multi-task finetuning actually beats decoder-only in Wang et al.'s experiments | **Fact** — same paper, often omitted in summaries |
| Causal attention enables KV-caching; bidirectional does not | **Fact** — mechanical consequence of the mask |
| Causal attention tiles are ~2× faster than bidirectional | **Fact** — FlashAttention behavior |
| Causal attention is "full rank" and therefore more expressive | **Weakly supported** — popular in blogs, primary sources I found are limited |
| Decoder-only scales better with compute | **Empirically observed**, mechanism still debated |
| GPT-3's success caused industry convergence on decoder-only | **Historical/sociological** — not a mathematical result |

---

## Knowledge blind spots I noticed in your question

1. **"OpenAI's paper" (singular).** There isn't one OpenAI paper that answers "why decoder-only wins." GPT-1 *uses* it without justifying it comparatively; GPT-2 and GPT-3 scale it up; the systematic comparison is from a Hugging Face / BigScience collaboration (Wang et al. 2022), not OpenAI.

2. **Framing decoder-only as unconditionally "outperforming."** It outperforms *in the pretrain-then-prompt regime*, which happens to be the dominant deployment pattern. In the fine-tune-heavily regime, encoder-decoder (T5-style) can still win on many benchmarks — which is why Google kept using T5/Flan-T5 for years.

3. **Conflating "Transformer" with "encoder-decoder."** The original 2017 Transformer was encoder-decoder, but modern usage of "Transformer" refers to the self-attention block pattern, independent of which stacks you keep.

Would you like me to dig into any of these threads further — for example, the Wang et al. 2022 experimental setup in detail, or the theoretical expressiveness argument?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe6a-a1a3-77d2-b813-6ee4b763ed55",
  "updated_at": "2026-04-24T07:42:59.682420Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019dbe6a-a1a3-7e33-a6da-298e89458e4a"
}
```

</details>

### 3. human — 2026-04-24T07:47:52.646581Z

/concept-visualizer US fallback visualization scheme

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe75-9b59-7c7e-be2c-c4ce3945f3a4",
  "updated_at": "2026-04-24T07:47:52.646581Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019dbe6a-a1a3-77d2-b813-6ee4b763ed55"
}
```

</details>

### 4. assistant — 2026-04-24T07:47:53.721710Z

_No text content in this message._

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe75-9b59-78d0-b73f-6e692b733c9b",
  "updated_at": "2026-04-24T07:47:53.721710Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019dbe75-9b59-7c7e-be2c-c4ce3945f3a4"
}
```

</details>

### 5. human — 2026-04-24T07:48:00.450302Z

/concept-visualizer Use fallback visualization scheme

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe75-b7ed-7b72-9efa-b71f728e91cb",
  "updated_at": "2026-04-24T07:48:00.450302Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019dbe6a-a1a3-77d2-b813-6ee4b763ed55"
}
```

</details>

### 6. assistant — 2026-04-24T07:50:40.116511Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user is calling the concept-visualizer skill, so I need to check what that does and see if there's a fallback visualization approach I should use.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:48:02.603878Z",
  "stop_timestamp": "2026-04-24T07:48:03.339971Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01XdYzWZYhbKvPrvEopaHt8K",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md",
    "description": "Load the concept-visualizer skill to understand the fallback visualization scheme"
  },
  "message": "Load the concept-visualizer skill to understand the fallback visualization scheme",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Load the concept-visualizer skill to understand the fallback visualization scheme"
  },
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
  "tool_use_id": "toolu_01XdYzWZYhbKvPrvEopaHt8K",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation', or any phrasing requesting a pictorial/diagrammatic explanation of an abstract concept. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the <Evolution Log> carefully. Apply any accumulated lessons as additional constraints.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-04-22\n    13\t- `show_widget` is the real Anthropic tool (launched 2026-03-12); `visualize:read_me` with `modules: [\"diagram\"]` must be called first. Fallback: JSX artifact via `present_files` when the tool isn't loaded this session.\n    14\t- Use light theme, not dark — Anthropic palette: bg #FAFAF8, card #FFFFFF, borders #E2DDD6, text #1A1717, secondary #6B6460. Deep/saturated accent colors for legibility (#92400E amber, #1E3A5F navy, #065F46 teal), never pastels.\n    15\t- Serif typography throughout (Iowan Old Style / Palatino / Georgia stack). Applies to SVG `<text>` too — set `font-family` on the `<svg>`.\n    16\t- Render all math with KaTeX (load `katex.min.{css,js}` from cdnjs dynamically). Use a `<Math>` wrapper in HTML; in SVG, use `<foreignObject>` + `<Math>`.\n    17\t\n    18\t# Concept Visualizer\n    19\t\n    20\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n    21\t\n    22\t## Core principle\n    23\t\n    24\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    25\t\n    26\t## Workflow\n    27\t\n    28\t### 1. Extract the mechanism\n    29\t\n    30\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    31\t\n    32\t| Concept | Mechanism |\n    33\t|---|---|\n    34\t| Entropy | Things spread out / get disordered over time |\n    35\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    36\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    37\t| Recursion | Do the same task on a smaller version of itself |\n    38\t| Natural selection | Variants compete; survivors pass traits forward |\n    39\t| Opportunity cost | Choosing one path locks out another |\n    40\t\n    41\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    42\t\n    43\t### 2. Find the metaphor object\n    44\t\n    45\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    46\t\n    47\t- **Physical and visible** — something you can draw (not another abstraction)\n    48\t- **Universally known** — no culture/domain-specific objects\n    49\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    50\t\n    51\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    52\t\n    53\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    54\t\n    55\t### 3. Decompose into 2–5 panels\n    56\t\n    57\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    58\t\n    59\tPanel types:\n    60\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    61\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    62\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    63\t\n    64\tEach panel gets:\n    65\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    66\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    67\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    68\t\n    69\t### 4. Render via Visualizer\n    70\t\n    71\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    72\t\n    73\t**SVG structure:**\n    74\t\n    75\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    76\t- Consistent canvas: each panel is a square cell within a wide strip\n    77\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    78\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    79\t- Distinct muted color per panel stage; light-theme palette (see Evolution Log)\n    80\t- Arrow or flow indicator between sequential panels\n    81\t- Click a panel → reveal caption fades in below the scene\n    82\t\n    83\t**Visual rules:**\n    84\t\n    85\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    86\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    87\t- Labels sentence-case; captions in italic\n    88\t- No decorative elements that don't carry meaning\n    89\t- Consistent ground line across panels for visual continuity\n    90\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    91\t\n    92\t**Interactivity:**\n    93\t\n    94\t- Click/tap a panel to toggle its reveal caption\n    95\t- Subtle hover highlight on panels (opacity shift)\n    96\t- Active panel gets a gentle border highlight\n    97\t\n    98\t### 5. Prose after the visual\n    99\t\n   100\tDo NOT restate what the visual shows. Instead:\n   101\t\n   102\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n   103\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n   104\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n   105\t\n   106\t## Integration with other skills\n   107\t\n   108\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n   109\t\n   110\t- Accept the concept and any analogy already established by the calling skill\n   111\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   112\t- If no analogy is provided, select one using step 2 above\n   113\t- Return the visual inline; the calling skill handles surrounding prose\n   114\t\n   115\t## Constraints\n   116\t\n   117\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   118\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   119\t- **Primary:** use `show_widget` (call `visualize:read_me` with `modules: [\"diagram\"]` first). `widget_code` is a raw HTML fragment — no `<!DOCTYPE>`, `<html>`, `<head>`, or `<body>` tags.\n   120\t- **Fallback** (if `show_widget` is not in the tool list): render as a `.jsx` file via `present_files`. Single file, `export default function App()`, light-theme palette.\n   121\t- One concept per visualization; compound concepts get multiple visuals\n   122\t",
      "uuid": "38b08c11-12b1-4090-bed1-201395e20e39"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 The user wants me to switch to a fallback approach since the widget timed out—I'll create a JSX file instead that visualizes the three attention mask patterns for decoder-only versus encoder-decoder architectures.

I'm thinking about how to represent causal versus bidirectional attention masks visually. The core idea is that causal attention restricts tokens to only looking at previous tokens, while bidirectional attention lets any token attend to any other token. I could use a metaphor of people reading a story—in the bidirectional case, everyone can look at any word freely, but in the causal case, people can only look backward at words they've already read. For the encoder-decoder setup, the encoder group reads everything freely while the decoder group can only look backward at their own sequence.

Actually, I'm realizing the user wants me to use the fallback visualization approach with JSX. Let me refocus on the core mechanism: each token decides which other tokens to attend to based on the architecture's attention mask. The key distinction is that encoder-decoder models use bidirectional attention for the input and causal attention for the output (with cross-attention between them), while decoder-only models use causal attention throughout. A better metaphor might be translating a letter versus writing one—the translator reads the entire source document first, then writes the translation one word at a time while referencing back to the source.

I'll create a two-panel contrast visualization: one showing the translator at two desks (reading the source bidirectionally, then writing with occasional glances back), and another showing the writer at a single desk (only looking backward at their own writing as they continue forward). Since the user asked specifically about these two architectures, I'll focus on those rather than including encoder-only. Writing the JSX component... Building out the panel data structure...

Now I'm planning the SVG visualizations for each architecture. For the encoder-decoder model, I'll draw two desks side by side — the first one has a stick figure reading text with bidirectional eye gaze arrows, and the second desk shows the figure writing output while maintaining a cross-attention connection back to the first desk. For the decoder-only model, I'm visualizing a single continuous scroll where the stick figure reads and writes sequentially, with all attention flowing backward through the same parameter set. with shorter wavy lines (partial text). Stick figure writing. Eye gaze arrow going ONLY BACKWARD (left) over what's written. Big curved arrow from this figure back to Desk 1 = cross-attention.

Panel 2: Decoder-only — One long desk
- One single desk/scroll running across the panel width
- Text scrolling along it, some already written
- Stick figure at the right end, writing. Eye gaze arrow going BACKWARD only.
- No separation between "input" and "output" — just one continuous flow.

Let me write the SVG components. Each panel is ~380px wide.

For stick figures:
- Head: small circle
- Body: vertical line
- Arms: two lines from body
- Legs: two lines from body base

For gaze arrows:
- Thin arrows

Now I'm building the interactive visualization with clear panel separation, a consistent ground line, and click-to-reveal functionality. I'll create the file in the outputs directory and structure it cleanly.

</details>

Reading the skill. The fallback path: render as a JSX artifact via `present_files` since `show_widget` timed out last call.

Let me extract the mechanism and design the metaphor before coding.

**Mechanism:** each token decides which other tokens to attend to. The architecture determines the *shape* of who-can-look-at-whom.

**Metaphor object:** a writer at a desk. Direction of gaze = attention pattern.
- **Encoder–decoder** = a *translator* with two desks: reads the source fully (eyes dart left-and-right over the page), then writes at a second desk, occasionally glancing back at the source.
- **Decoder-only** = a *stream writer* with one long scroll: prompt and output live on the same surface, and the writer only ever glances backward at what's already there.

This is an honest metaphor — the "looking backward only" gaze genuinely mirrors the lower-triangular causal mask.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:49:01.815466Z",
  "stop_timestamp": "2026-04-24T07:50:16.450218Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0158vtc2xpezBKywgVByFuqu",
  "name": "create_file",
  "input": {
    "description": "Build the concept-visualizer fallback: contrast panels for encoder-decoder vs decoder-only",
    "path": "/home/claude/attention_architectures.jsx",
    "file_text": "import React, { useState } from 'react';\n\n// Light-theme Anthropic palette from skill evolution log\nconst BG = '#FAFAF8';\nconst CARD = '#FFFFFF';\nconst BORDER = '#E2DDD6';\nconst INK = '#1A1717';\nconst MUTED = '#6B6460';\n\nconst SERIF = \"'Iowan Old Style', 'Palatino Linotype', 'Palatino', 'Georgia', serif\";\n\n// ——————————————————————————————————————————————————————————————\n// Stick figure — head + body + arms + legs at a given (x, yGround)\n// ——————————————————————————————————————————————————————————————\nfunction StickFigure({ x, yGround, gazeDir = 'left', gazeRange = 'back', writing = false, color = INK }) {\n  // yGround = ground line y; figure stands on this\n  const headR = 7;\n  const headY = yGround - 46;\n  const neckY = yGround - 39;\n  const hipY = yGround - 18;\n  const armY = yGround - 32;\n\n  // Eye gaze arrows — emanating from head, length depends on range\n  const gazeY = headY;\n  const gazeLen = gazeRange === 'both' ? 40 : 28;\n\n  return (\n    <g>\n      {/* head */}\n      <circle cx={x} cy={headY} r={headR} fill=\"none\" stroke={color} strokeWidth=\"1.4\" />\n      {/* body */}\n      <line x1={x} y1={neckY} x2={x} y2={hipY} stroke={color} strokeWidth=\"1.4\" />\n      {/* arms — writing pose if writing=true */}\n      {writing ? (\n        <>\n          <line x1={x} y1={armY} x2={x - 12} y2={armY + 4} stroke={color} strokeWidth=\"1.4\" />\n          <line x1={x} y1={armY} x2={x + 14} y2={armY + 10} stroke={color} strokeWidth=\"1.4\" />\n        </>\n      ) : (\n        <>\n          <line x1={x} y1={armY} x2={x - 13} y2={armY + 6} stroke={color} strokeWidth=\"1.4\" />\n          <line x1={x} y1={armY} x2={x + 13} y2={armY + 6} stroke={color} strokeWidth=\"1.4\" />\n        </>\n      )}\n      {/* legs */}\n      <line x1={x} y1={hipY} x2={x - 8} y2={yGround} stroke={color} strokeWidth=\"1.4\" />\n      <line x1={x} y1={hipY} x2={x + 8} y2={yGround} stroke={color} strokeWidth=\"1.4\" />\n\n      {/* gaze arrows */}\n      {gazeRange === 'both' && (\n        <>\n          <GazeArrow x1={x - headR - 2} y1={gazeY} x2={x - headR - gazeLen} y2={gazeY} color={color} />\n          <GazeArrow x1={x + headR + 2} y1={gazeY} x2={x + headR + gazeLen} y2={gazeY} color={color} />\n        </>\n      )}\n      {gazeRange === 'back' && (\n        <GazeArrow\n          x1={gazeDir === 'left' ? x - headR - 2 : x + headR + 2}\n          y1={gazeY}\n          x2={gazeDir === 'left' ? x - headR - gazeLen : x + headR + gazeLen}\n          y2={gazeY}\n          color={color}\n        />\n      )}\n    </g>\n  );\n}\n\nfunction GazeArrow({ x1, y1, x2, y2, color }) {\n  const dx = x2 - x1;\n  const dy = y2 - y1;\n  const len = Math.hypot(dx, dy);\n  const ux = dx / len;\n  const uy = dy / len;\n  // arrowhead\n  const hx = x2 - ux * 6;\n  const hy = y2 - uy * 6;\n  const perpX = -uy;\n  const perpY = ux;\n  const h1x = hx + perpX * 3;\n  const h1y = hy + perpY * 3;\n  const h2x = hx - perpX * 3;\n  const h2y = hy - perpY * 3;\n  return (\n    <g stroke={color} strokeWidth=\"1.1\" fill=\"none\" opacity=\"0.75\">\n      <line x1={x1} y1={y1} x2={x2} y2={y2} />\n      <line x1={h1x} y1={h1y} x2={x2} y2={y2} />\n      <line x1={h2x} y1={h2y} x2={x2} y2={y2} />\n    </g>\n  );\n}\n\n// ——————————————————————————————————————————————————————————————\n// Desk with text lines on top\n// ——————————————————————————————————————————————————————————————\nfunction Desk({ x, y, w, textLines = 3, textFill = 0.85, accent }) {\n  // desk top is at y, legs go down 30\n  const topH = 4;\n  return (\n    <g>\n      {/* desk top */}\n      <rect x={x} y={y} width={w} height={topH} fill={INK} />\n      {/* legs */}\n      <line x1={x + 6} y1={y + topH} x2={x + 6} y2={y + topH + 28} stroke={INK} strokeWidth=\"1.4\" />\n      <line x1={x + w - 6} y1={y + topH} x2={x + w - 6} y2={y + topH + 28} stroke={INK} strokeWidth=\"1.4\" />\n      {/* paper on top */}\n      <rect\n        x={x + 10}\n        y={y - 22}\n        width={w - 20}\n        height={22}\n        fill={CARD}\n        stroke={BORDER}\n        strokeWidth=\"0.6\"\n      />\n      {/* text lines representing tokens */}\n      {Array.from({ length: textLines }).map((_, i) => {\n        const lineY = y - 18 + i * 6;\n        const lineW = (w - 28) * textFill;\n        return (\n          <line\n            key={i}\n            x1={x + 14}\n            y1={lineY}\n            x2={x + 14 + lineW}\n            y2={lineY}\n            stroke={accent || MUTED}\n            strokeWidth=\"1.3\"\n            opacity={0.7 - i * 0.12}\n          />\n        );\n      })}\n    </g>\n  );\n}\n\n// ——————————————————————————————————————————————————————————————\n// Panel: Encoder–decoder (two desks, translator glances between them)\n// ——————————————————————————————————————————————————————————————\nfunction EncoderDecoderPanel({ width, height, groundY, accent }) {\n  const desk1X = 22;\n  const desk1W = 130;\n  const desk2X = width - 22 - 130;\n  const desk2W = 130;\n  const deskTopY = groundY - 34; // desk top height\n\n  return (\n    <g>\n      {/* Desk 1 — source, full text */}\n      <Desk x={desk1X} y={deskTopY} w={desk1W} textLines={3} textFill={0.95} accent={accent} />\n      {/* label under desk */}\n      <text\n        x={desk1X + desk1W / 2}\n        y={groundY + 20}\n        textAnchor=\"middle\"\n        fill={MUTED}\n        fontSize=\"11\"\n        fontStyle=\"italic\"\n        fontFamily={SERIF}\n      >\n        Source (bidirectional)\n      </text>\n\n      {/* Reader at desk 1 — looking both ways */}\n      <StickFigure\n        x={desk1X + desk1W / 2}\n        yGround={groundY}\n        gazeRange=\"both\"\n        color={INK}\n      />\n\n      {/* Desk 2 — target, partial text */}\n      <Desk x={desk2X} y={deskTopY} w={desk2W} textLines={2} textFill={0.55} accent={accent} />\n      <text\n        x={desk2X + desk2W / 2}\n        y={groundY + 20}\n        textAnchor=\"middle\"\n        fill={MUTED}\n        fontSize=\"11\"\n        fontStyle=\"italic\"\n        fontFamily={SERIF}\n      >\n        Target (causal + cross-attn)\n      </text>\n\n      {/* Writer at desk 2 — looking backward at own writing, AND glancing back at desk 1 */}\n      <StickFigure\n        x={desk2X + desk2W / 2 + 6}\n        yGround={groundY}\n        gazeRange=\"back\"\n        gazeDir=\"left\"\n        writing\n        color={INK}\n      />\n\n      {/* Cross-attention curve — big arc from desk 2 writer back to desk 1 */}\n      <path\n        d={`M ${desk2X + desk2W / 2 - 20} ${groundY - 52}\n            Q ${width / 2} ${groundY - 95}\n              ${desk1X + desk1W / 2 + 14} ${groundY - 52}`}\n        fill=\"none\"\n        stroke={accent}\n        strokeWidth=\"1.2\"\n        strokeDasharray=\"3 3\"\n        opacity=\"0.85\"\n      />\n      {/* arrowhead at desk 1 end */}\n      <polygon\n        points={`${desk1X + desk1W / 2 + 14},${groundY - 52}\n                 ${desk1X + desk1W / 2 + 22},${groundY - 56}\n                 ${desk1X + desk1W / 2 + 22},${groundY - 48}`}\n        fill={accent}\n      />\n      {/* cross-attn label */}\n      <text\n        x={width / 2}\n        y={groundY - 92}\n        textAnchor=\"middle\"\n        fill={accent}\n        fontSize=\"11\"\n        fontStyle=\"italic\"\n        fontFamily={SERIF}\n      >\n        cross-attention\n      </text>\n    </g>\n  );\n}\n\n// ——————————————————————————————————————————————————————————————\n// Panel: Decoder-only (one long scroll, writer looks only backward)\n// ——————————————————————————————————————————————————————————————\nfunction DecoderOnlyPanel({ width, height, groundY, accent }) {\n  const scrollX = 22;\n  const scrollW = width - 44;\n  const deskTopY = groundY - 34;\n\n  // text fills ~ 70% of scroll, writer at ~70% position\n  const writtenFrac = 0.68;\n  const writerX = scrollX + scrollW * writtenFrac + 8;\n\n  return (\n    <g>\n      {/* One continuous scroll desk */}\n      <Desk x={scrollX} y={deskTopY} w={scrollW} textLines={3} textFill={writtenFrac} accent={accent} />\n\n      {/* Vertical tick marking \"prompt ends, generation begins\" — subtle, but inside the text */}\n      {/* Purposely no separation in the desk surface — emphasizes unified stream */}\n      {Array.from({ length: 3 }).map((_, i) => {\n        const lineY = deskTopY - 18 + i * 6;\n        const tickX = scrollX + 14 + (scrollW - 28) * 0.42;\n        return (\n          <line\n            key={i}\n            x1={tickX}\n            y1={lineY - 2}\n            x2={tickX}\n            y2={lineY + 2}\n            stroke={MUTED}\n            strokeWidth=\"0.6\"\n            opacity=\"0.5\"\n          />\n        );\n      })}\n\n      {/* label under scroll */}\n      <text\n        x={scrollX + scrollW * 0.21}\n        y={groundY + 20}\n        textAnchor=\"middle\"\n        fill={MUTED}\n        fontSize=\"11\"\n        fontStyle=\"italic\"\n        fontFamily={SERIF}\n      >\n        Prompt\n      </text>\n      <text\n        x={scrollX + scrollW * 0.78}\n        y={groundY + 20}\n        textAnchor=\"middle\"\n        fill={MUTED}\n        fontSize=\"11\"\n        fontStyle=\"italic\"\n        fontFamily={SERIF}\n      >\n        Generation\n      </text>\n      {/* subtle dashed boundary below, just to hint at the join */}\n      <line\n        x1={scrollX + 14 + (scrollW - 28) * 0.42}\n        y1={groundY + 5}\n        x2={scrollX + 14 + (scrollW - 28) * 0.42}\n        y2={groundY + 11}\n        stroke={MUTED}\n        strokeWidth=\"0.6\"\n        strokeDasharray=\"2 2\"\n      />\n\n      {/* Writer, backward gaze only */}\n      <StickFigure\n        x={writerX}\n        yGround={groundY}\n        gazeRange=\"back\"\n        gazeDir=\"left\"\n        writing\n        color={INK}\n      />\n\n      {/* Long backward gaze arrow across the scroll */}\n      <path\n        d={`M ${writerX - 14} ${groundY - 46}\n            L ${scrollX + 20} ${groundY - 46}`}\n        fill=\"none\"\n        stroke={accent}\n        strokeWidth=\"1.1\"\n        opacity=\"0.7\"\n      />\n      {/* arrowhead at left end */}\n      <polygon\n        points={`${scrollX + 20},${groundY - 46}\n                 ${scrollX + 28},${groundY - 50}\n                 ${scrollX + 28},${groundY - 42}`}\n        fill={accent}\n        opacity=\"0.7\"\n      />\n      <text\n        x={scrollX + scrollW * 0.45}\n        y={groundY - 52}\n        textAnchor=\"middle\"\n        fill={accent}\n        fontSize=\"11\"\n        fontStyle=\"italic\"\n        fontFamily={SERIF}\n      >\n        one causal gaze over everything\n      </text>\n    </g>\n  );\n}\n\n// ——————————————————————————————————————————————————————————————\n// A single panel card\n// ——————————————————————————————————————————————————————————————\nfunction PanelCard({ panel, active, onClick, children }) {\n  const accent = panel.color;\n  return (\n    <div\n      onClick={onClick}\n      style={{\n        background: CARD,\n        border: `1px solid ${active ? accent : BORDER}`,\n        borderRadius: 8,\n        padding: '18px 20px 16px',\n        cursor: 'pointer',\n        transition: 'border-color 0.2s, box-shadow 0.2s',\n        boxShadow: active ? `0 0 0 3px ${panel.lightColor}` : 'none',\n        flex: 1,\n        minWidth: 0,\n        display: 'flex',\n        flexDirection: 'column',\n        gap: 10,\n      }}\n    >\n      {/* Header */}\n      <div>\n        <div\n          style={{\n            fontFamily: SERIF,\n            fontSize: 12,\n            fontStyle: 'italic',\n            color: accent,\n            marginBottom: 2,\n            letterSpacing: '0.02em',\n          }}\n        >\n          {panel.subtitle}\n        </div>\n        <div\n          style={{\n            fontFamily: SERIF,\n            fontSize: 20,\n            fontWeight: 500,\n            color: INK,\n            lineHeight: 1.2,\n          }}\n        >\n          {panel.title}\n        </div>\n      </div>\n\n      {/* Scene */}\n      <div style={{ width: '100%' }}>{children}</div>\n\n      {/* Examples */}\n      <div\n        style={{\n          fontFamily: SERIF,\n          fontSize: 12,\n          color: MUTED,\n          fontStyle: 'italic',\n          borderTop: `1px dashed ${BORDER}`,\n          paddingTop: 8,\n        }}\n      >\n        e.g. {panel.examples}\n      </div>\n\n      {/* Caption — reveals on click */}\n      <div\n        style={{\n          maxHeight: active ? 400 : 0,\n          opacity: active ? 1 : 0,\n          overflow: 'hidden',\n          transition: 'max-height 0.35s ease, opacity 0.25s ease',\n        }}\n      >\n        <div\n          style={{\n            fontFamily: SERIF,\n            fontSize: 13,\n            color: INK,\n            lineHeight: 1.55,\n            padding: '10px 12px',\n            background: panel.lightColor,\n            borderRadius: 6,\n            marginTop: 4,\n          }}\n        >\n          {panel.caption}\n        </div>\n      </div>\n\n      {/* Hint */}\n      {!active && (\n        <div\n          style={{\n            fontFamily: SERIF,\n            fontSize: 11,\n            color: MUTED,\n            fontStyle: 'italic',\n            opacity: 0.7,\n          }}\n        >\n          click to reveal mapping →\n        </div>\n      )}\n    </div>\n  );\n}\n\n// ——————————————————————————————————————————————————————————————\n// Main\n// ——————————————————————————————————————————————————————————————\nexport default function App() {\n  const [active, setActive] = useState(null);\n\n  const panels = [\n    {\n      id: 'encdec',\n      title: 'Encoder–decoder',\n      subtitle: 'The translator at two desks',\n      examples: 'original Transformer (2017), T5, BART',\n      color: '#1E3A5F',\n      lightColor: '#E8EDF3',\n      caption:\n        'Two parameter stacks. The encoder reads the input with bidirectional attention — every input token can look both left and right. The decoder then writes the output one token at a time (causal), while cross-attention lets every output token glance back at the fully encoded input. This split gives clean separation but ~2× the parameters for the same effective depth, and each generated token invalidates less of the KV-cache because cross-attention keys/values must be recomputed.',\n    },\n    {\n      id: 'dec',\n      title: 'Decoder-only',\n      subtitle: 'The stream writer',\n      examples: 'GPT-1/2/3, Llama, Claude',\n      color: '#065F46',\n      lightColor: '#E1EFEA',\n      caption:\n        'One unified stack. Prompt and generation live on a single continuous sequence; every token only attends to earlier tokens (lower-triangular causal mask). Consequences: (1) K and V from every prior token are permanently reusable — this is why KV-caching works at all, (2) tiled attention can skip the upper triangle, giving ~2× faster attention than bidirectional, (3) no architectural split between \"understanding\" and \"generating\" — the same parameters do both.',\n    },\n  ];\n\n  const svgW = 440;\n  const svgH = 190;\n  const groundY = 140;\n  const accentEncDec = panels[0].color;\n  const accentDec = panels[1].color;\n\n  return (\n    <div\n      style={{\n        background: BG,\n        minHeight: '100vh',\n        padding: '32px 20px',\n        fontFamily: SERIF,\n        color: INK,\n      }}\n    >\n      <div style={{ maxWidth: 980, margin: '0 auto' }}>\n        {/* Title block */}\n        <div style={{ marginBottom: 6 }}>\n          <div\n            style={{\n              fontSize: 12,\n              fontStyle: 'italic',\n              color: MUTED,\n              letterSpacing: '0.06em',\n              textTransform: 'uppercase',\n              marginBottom: 4,\n            }}\n          >\n            Transformer architectures — attention as gaze\n          </div>\n          <h1\n            style={{\n              fontSize: 28,\n              fontWeight: 500,\n              margin: 0,\n              lineHeight: 1.2,\n            }}\n          >\n            Who is allowed to look at whom?\n          </h1>\n        </div>\n        <p\n          style={{\n            fontSize: 15,\n            color: MUTED,\n            lineHeight: 1.55,\n            margin: '10px 0 24px',\n            maxWidth: 720,\n          }}\n        >\n          An attention mask is just a rule about where a token's gaze can land. The architectural\n          choice is really a choice of gaze pattern.\n        </p>\n\n        {/* Panels */}\n        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>\n          <PanelCard\n            panel={panels[0]}\n            active={active === 'encdec'}\n            onClick={() => setActive(active === 'encdec' ? null : 'encdec')}\n          >\n            <svg\n              viewBox={`0 0 ${svgW} ${svgH}`}\n              width=\"100%\"\n              style={{ display: 'block', fontFamily: SERIF }}\n              role=\"img\"\n              aria-label=\"Translator with two desks: reads source bidirectionally, writes target causally with cross-attention back to source\"\n            >\n              {/* ground line */}\n              <line\n                x1=\"12\"\n                y1={groundY}\n                x2={svgW - 12}\n                y2={groundY}\n                stroke={BORDER}\n                strokeWidth=\"0.8\"\n              />\n              <EncoderDecoderPanel\n                width={svgW}\n                height={svgH}\n                groundY={groundY}\n                accent={accentEncDec}\n              />\n            </svg>\n          </PanelCard>\n\n          <PanelCard\n            panel={panels[1]}\n            active={active === 'dec'}\n            onClick={() => setActive(active === 'dec' ? null : 'dec')}\n          >\n            <svg\n              viewBox={`0 0 ${svgW} ${svgH}`}\n              width=\"100%\"\n              style={{ display: 'block', fontFamily: SERIF }}\n              role=\"img\"\n              aria-label=\"Stream writer at one long scroll: prompt and generation on a single surface, writer looks only backward\"\n            >\n              <line\n                x1=\"12\"\n                y1={groundY}\n                x2={svgW - 12}\n                y2={groundY}\n                stroke={BORDER}\n                strokeWidth=\"0.8\"\n              />\n              <DecoderOnlyPanel width={svgW} height={svgH} groundY={groundY} accent={accentDec} />\n            </svg>\n          </PanelCard>\n        </div>\n\n        {/* Metaphor-break note */}\n        <div\n          style={{\n            marginTop: 28,\n            padding: '14px 18px',\n            background: CARD,\n            border: `1px solid ${BORDER}`,\n            borderRadius: 8,\n            fontSize: 13,\n            color: INK,\n            lineHeight: 1.6,\n          }}\n        >\n          <span style={{ fontStyle: 'italic', color: MUTED }}>Where the metaphor breaks: </span>\n          Real tokens don't take turns — every position in the sequence computes attention in\n          parallel during training. The \"writer\" metaphor is a serial story for what is actually a\n          simultaneous matrix operation with a triangular mask. The gaze direction is real; the\n          sequencing of glances is pedagogical fiction.\n        </div>\n      </div>\n    </div>\n  );\n}\n"
  },
  "message": "Build the concept-visualizer fallback: contrast panels for encoder-decoder vs decoder-only",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"javascript\", \"code\": \"import React, { useState } from 'react';\\n\\n// Light-theme Anthropic palette from skill evolution log\\nconst BG = '#FAFAF8';\\nconst CARD = '#FFFFFF';\\nconst BORDER = '#E2DDD6';\\nconst INK = '#1A1717';\\nconst MUTED = '#6B6460';\\n\\nconst SERIF = \\\"'Iowan Old Style', 'Palatino Linotype', 'Palatino', 'Georgia', serif\\\";\\n\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\n// Stick figure \\u2014 head + body + arms + legs at a given (x, yGround)\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\nfunction StickFigure({ x, yGround, gazeDir = 'left', gazeRange = 'back', writing = false, color = INK }) {\\n  // yGround = ground line y; figure stands on this\\n  const headR = 7;\\n  const headY = yGround - 46;\\n  const neckY = yGround - 39;\\n  const hipY = yGround - 18;\\n  const armY = yGround - 32;\\n\\n  // Eye gaze arrows \\u2014 emanating from head, length depends on range\\n  const gazeY = headY;\\n  const gazeLen = gazeRange === 'both' ? 40 : 28;\\n\\n  return (\\n    <g>\\n      {/* head */}\\n      <circle cx={x} cy={headY} r={headR} fill=\\\"none\\\" stroke={color} strokeWidth=\\\"1.4\\\" />\\n      {/* body */}\\n      <line x1={x} y1={neckY} x2={x} y2={hipY} stroke={color} strokeWidth=\\\"1.4\\\" />\\n      {/* arms \\u2014 writing pose if writing=true */}\\n      {writing ? (\\n        <>\\n          <line x1={x} y1={armY} x2={x - 12} y2={armY + 4} stroke={color} strokeWidth=\\\"1.4\\\" />\\n          <line x1={x} y1={armY} x2={x + 14} y2={armY + 10} stroke={color} strokeWidth=\\\"1.4\\\" />\\n        </>\\n      ) : (\\n        <>\\n          <line x1={x} y1={armY} x2={x - 13} y2={armY + 6} stroke={color} strokeWidth=\\\"1.4\\\" />\\n          <line x1={x} y1={armY} x2={x + 13} y2={armY + 6} stroke={color} strokeWidth=\\\"1.4\\\" />\\n        </>\\n      )}\\n      {/* legs */}\\n      <line x1={x} y1={hipY} x2={x - 8} y2={yGround} stroke={color} strokeWidth=\\\"1.4\\\" />\\n      <line x1={x} y1={hipY} x2={x + 8} y2={yGround} stroke={color} strokeWidth=\\\"1.4\\\" />\\n\\n      {/* gaze arrows */}\\n      {gazeRange === 'both' && (\\n        <>\\n          <GazeArrow x1={x - headR - 2} y1={gazeY} x2={x - headR - gazeLen} y2={gazeY} color={color} />\\n          <GazeArrow x1={x + headR + 2} y1={gazeY} x2={x + headR + gazeLen} y2={gazeY} color={color} />\\n        </>\\n      )}\\n      {gazeRange === 'back' && (\\n        <GazeArrow\\n          x1={gazeDir === 'left' ? x - headR - 2 : x + headR + 2}\\n          y1={gazeY}\\n          x2={gazeDir === 'left' ? x - headR - gazeLen : x + headR + gazeLen}\\n          y2={gazeY}\\n          color={color}\\n        />\\n      )}\\n    </g>\\n  );\\n}\\n\\nfunction GazeArrow({ x1, y1, x2, y2, color }) {\\n  const dx = x2 - x1;\\n  const dy = y2 - y1;\\n  const len = Math.hypot(dx, dy);\\n  const ux = dx / len;\\n  const uy = dy / len;\\n  // arrowhead\\n  const hx = x2 - ux * 6;\\n  const hy = y2 - uy * 6;\\n  const perpX = -uy;\\n  const perpY = ux;\\n  const h1x = hx + perpX * 3;\\n  const h1y = hy + perpY * 3;\\n  const h2x = hx - perpX * 3;\\n  const h2y = hy - perpY * 3;\\n  return (\\n    <g stroke={color} strokeWidth=\\\"1.1\\\" fill=\\\"none\\\" opacity=\\\"0.75\\\">\\n      <line x1={x1} y1={y1} x2={x2} y2={y2} />\\n      <line x1={h1x} y1={h1y} x2={x2} y2={y2} />\\n      <line x1={h2x} y1={h2y} x2={x2} y2={y2} />\\n    </g>\\n  );\\n}\\n\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\n// Desk with text lines on top\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\nfunction Desk({ x, y, w, textLines = 3, textFill = 0.85, accent }) {\\n  // desk top is at y, legs go down 30\\n  const topH = 4;\\n  return (\\n    <g>\\n      {/* desk top */}\\n      <rect x={x} y={y} width={w} height={topH} fill={INK} />\\n      {/* legs */}\\n      <line x1={x + 6} y1={y + topH} x2={x + 6} y2={y + topH + 28} stroke={INK} strokeWidth=\\\"1.4\\\" />\\n      <line x1={x + w - 6} y1={y + topH} x2={x + w - 6} y2={y + topH + 28} stroke={INK} strokeWidth=\\\"1.4\\\" />\\n      {/* paper on top */}\\n      <rect\\n        x={x + 10}\\n        y={y - 22}\\n        width={w - 20}\\n        height={22}\\n        fill={CARD}\\n        stroke={BORDER}\\n        strokeWidth=\\\"0.6\\\"\\n      />\\n      {/* text lines representing tokens */}\\n      {Array.from({ length: textLines }).map((_, i) => {\\n        const lineY = y - 18 + i * 6;\\n        const lineW = (w - 28) * textFill;\\n        return (\\n          <line\\n            key={i}\\n            x1={x + 14}\\n            y1={lineY}\\n            x2={x + 14 + lineW}\\n            y2={lineY}\\n            stroke={accent || MUTED}\\n            strokeWidth=\\\"1.3\\\"\\n            opacity={0.7 - i * 0.12}\\n          />\\n        );\\n      })}\\n    </g>\\n  );\\n}\\n\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\n// Panel: Encoder\\u2013decoder (two desks, translator glances between them)\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\nfunction EncoderDecoderPanel({ width, height, groundY, accent }) {\\n  const desk1X = 22;\\n  const desk1W = 130;\\n  const desk2X = width - 22 - 130;\\n  const desk2W = 130;\\n  const deskTopY = groundY - 34; // desk top height\\n\\n  return (\\n    <g>\\n      {/* Desk 1 \\u2014 source, full text */}\\n      <Desk x={desk1X} y={deskTopY} w={desk1W} textLines={3} textFill={0.95} accent={accent} />\\n      {/* label under desk */}\\n      <text\\n        x={desk1X + desk1W / 2}\\n        y={groundY + 20}\\n        textAnchor=\\\"middle\\\"\\n        fill={MUTED}\\n        fontSize=\\\"11\\\"\\n        fontStyle=\\\"italic\\\"\\n        fontFamily={SERIF}\\n      >\\n        Source (bidirectional)\\n      </text>\\n\\n      {/* Reader at desk 1 \\u2014 looking both ways */}\\n      <StickFigure\\n        x={desk1X + desk1W / 2}\\n        yGround={groundY}\\n        gazeRange=\\\"both\\\"\\n        color={INK}\\n      />\\n\\n      {/* Desk 2 \\u2014 target, partial text */}\\n      <Desk x={desk2X} y={deskTopY} w={desk2W} textLines={2} textFill={0.55} accent={accent} />\\n      <text\\n        x={desk2X + desk2W / 2}\\n        y={groundY + 20}\\n        textAnchor=\\\"middle\\\"\\n        fill={MUTED}\\n        fontSize=\\\"11\\\"\\n        fontStyle=\\\"italic\\\"\\n        fontFamily={SERIF}\\n      >\\n        Target (causal + cross-attn)\\n      </text>\\n\\n      {/* Writer at desk 2 \\u2014 looking backward at own writing, AND glancing back at desk 1 */}\\n      <StickFigure\\n        x={desk2X + desk2W / 2 + 6}\\n        yGround={groundY}\\n        gazeRange=\\\"back\\\"\\n        gazeDir=\\\"left\\\"\\n        writing\\n        color={INK}\\n      />\\n\\n      {/* Cross-attention curve \\u2014 big arc from desk 2 writer back to desk 1 */}\\n      <path\\n        d={`M ${desk2X + desk2W / 2 - 20} ${groundY - 52}\\n            Q ${width / 2} ${groundY - 95}\\n              ${desk1X + desk1W / 2 + 14} ${groundY - 52}`}\\n        fill=\\\"none\\\"\\n        stroke={accent}\\n        strokeWidth=\\\"1.2\\\"\\n        strokeDasharray=\\\"3 3\\\"\\n        opacity=\\\"0.85\\\"\\n      />\\n      {/* arrowhead at desk 1 end */}\\n      <polygon\\n        points={`${desk1X + desk1W / 2 + 14},${groundY - 52}\\n                 ${desk1X + desk1W / 2 + 22},${groundY - 56}\\n                 ${desk1X + desk1W / 2 + 22},${groundY - 48}`}\\n        fill={accent}\\n      />\\n      {/* cross-attn label */}\\n      <text\\n        x={width / 2}\\n        y={groundY - 92}\\n        textAnchor=\\\"middle\\\"\\n        fill={accent}\\n        fontSize=\\\"11\\\"\\n        fontStyle=\\\"italic\\\"\\n        fontFamily={SERIF}\\n      >\\n        cross-attention\\n      </text>\\n    </g>\\n  );\\n}\\n\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\n// Panel: Decoder-only (one long scroll, writer looks only backward)\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\nfunction DecoderOnlyPanel({ width, height, groundY, accent }) {\\n  const scrollX = 22;\\n  const scrollW = width - 44;\\n  const deskTopY = groundY - 34;\\n\\n  // text fills ~ 70% of scroll, writer at ~70% position\\n  const writtenFrac = 0.68;\\n  const writerX = scrollX + scrollW * writtenFrac + 8;\\n\\n  return (\\n    <g>\\n      {/* One continuous scroll desk */}\\n      <Desk x={scrollX} y={deskTopY} w={scrollW} textLines={3} textFill={writtenFrac} accent={accent} />\\n\\n      {/* Vertical tick marking \\\"prompt ends, generation begins\\\" \\u2014 subtle, but inside the text */}\\n      {/* Purposely no separation in the desk surface \\u2014 emphasizes unified stream */}\\n      {Array.from({ length: 3 }).map((_, i) => {\\n        const lineY = deskTopY - 18 + i * 6;\\n        const tickX = scrollX + 14 + (scrollW - 28) * 0.42;\\n        return (\\n          <line\\n            key={i}\\n            x1={tickX}\\n            y1={lineY - 2}\\n            x2={tickX}\\n            y2={lineY + 2}\\n            stroke={MUTED}\\n            strokeWidth=\\\"0.6\\\"\\n            opacity=\\\"0.5\\\"\\n          />\\n        );\\n      })}\\n\\n      {/* label under scroll */}\\n      <text\\n        x={scrollX + scrollW * 0.21}\\n        y={groundY + 20}\\n        textAnchor=\\\"middle\\\"\\n        fill={MUTED}\\n        fontSize=\\\"11\\\"\\n        fontStyle=\\\"italic\\\"\\n        fontFamily={SERIF}\\n      >\\n        Prompt\\n      </text>\\n      <text\\n        x={scrollX + scrollW * 0.78}\\n        y={groundY + 20}\\n        textAnchor=\\\"middle\\\"\\n        fill={MUTED}\\n        fontSize=\\\"11\\\"\\n        fontStyle=\\\"italic\\\"\\n        fontFamily={SERIF}\\n      >\\n        Generation\\n      </text>\\n      {/* subtle dashed boundary below, just to hint at the join */}\\n      <line\\n        x1={scrollX + 14 + (scrollW - 28) * 0.42}\\n        y1={groundY + 5}\\n        x2={scrollX + 14 + (scrollW - 28) * 0.42}\\n        y2={groundY + 11}\\n        stroke={MUTED}\\n        strokeWidth=\\\"0.6\\\"\\n        strokeDasharray=\\\"2 2\\\"\\n      />\\n\\n      {/* Writer, backward gaze only */}\\n      <StickFigure\\n        x={writerX}\\n        yGround={groundY}\\n        gazeRange=\\\"back\\\"\\n        gazeDir=\\\"left\\\"\\n        writing\\n        color={INK}\\n      />\\n\\n      {/* Long backward gaze arrow across the scroll */}\\n      <path\\n        d={`M ${writerX - 14} ${groundY - 46}\\n            L ${scrollX + 20} ${groundY - 46}`}\\n        fill=\\\"none\\\"\\n        stroke={accent}\\n        strokeWidth=\\\"1.1\\\"\\n        opacity=\\\"0.7\\\"\\n      />\\n      {/* arrowhead at left end */}\\n      <polygon\\n        points={`${scrollX + 20},${groundY - 46}\\n                 ${scrollX + 28},${groundY - 50}\\n                 ${scrollX + 28},${groundY - 42}`}\\n        fill={accent}\\n        opacity=\\\"0.7\\\"\\n      />\\n      <text\\n        x={scrollX + scrollW * 0.45}\\n        y={groundY - 52}\\n        textAnchor=\\\"middle\\\"\\n        fill={accent}\\n        fontSize=\\\"11\\\"\\n        fontStyle=\\\"italic\\\"\\n        fontFamily={SERIF}\\n      >\\n        one causal gaze over everything\\n      </text>\\n    </g>\\n  );\\n}\\n\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\n// A single panel card\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\nfunction PanelCard({ panel, active, onClick, children }) {\\n  const accent = panel.color;\\n  return (\\n    <div\\n      onClick={onClick}\\n      style={{\\n        background: CARD,\\n        border: `1px solid ${active ? accent : BORDER}`,\\n        borderRadius: 8,\\n        padding: '18px 20px 16px',\\n        cursor: 'pointer',\\n        transition: 'border-color 0.2s, box-shadow 0.2s',\\n        boxShadow: active ? `0 0 0 3px ${panel.lightColor}` : 'none',\\n        flex: 1,\\n        minWidth: 0,\\n        display: 'flex',\\n        flexDirection: 'column',\\n        gap: 10,\\n      }}\\n    >\\n      {/* Header */}\\n      <div>\\n        <div\\n          style={{\\n            fontFamily: SERIF,\\n            fontSize: 12,\\n            fontStyle: 'italic',\\n            color: accent,\\n            marginBottom: 2,\\n            letterSpacing: '0.02em',\\n          }}\\n        >\\n          {panel.subtitle}\\n        </div>\\n        <div\\n          style={{\\n            fontFamily: SERIF,\\n            fontSize: 20,\\n            fontWeight: 500,\\n            color: INK,\\n            lineHeight: 1.2,\\n          }}\\n        >\\n          {panel.title}\\n        </div>\\n      </div>\\n\\n      {/* Scene */}\\n      <div style={{ width: '100%' }}>{children}</div>\\n\\n      {/* Examples */}\\n      <div\\n        style={{\\n          fontFamily: SERIF,\\n          fontSize: 12,\\n          color: MUTED,\\n          fontStyle: 'italic',\\n          borderTop: `1px dashed ${BORDER}`,\\n          paddingTop: 8,\\n        }}\\n      >\\n        e.g. {panel.examples}\\n      </div>\\n\\n      {/* Caption \\u2014 reveals on click */}\\n      <div\\n        style={{\\n          maxHeight: active ? 400 : 0,\\n          opacity: active ? 1 : 0,\\n          overflow: 'hidden',\\n          transition: 'max-height 0.35s ease, opacity 0.25s ease',\\n        }}\\n      >\\n        <div\\n          style={{\\n            fontFamily: SERIF,\\n            fontSize: 13,\\n            color: INK,\\n            lineHeight: 1.55,\\n            padding: '10px 12px',\\n            background: panel.lightColor,\\n            borderRadius: 6,\\n            marginTop: 4,\\n          }}\\n        >\\n          {panel.caption}\\n        </div>\\n      </div>\\n\\n      {/* Hint */}\\n      {!active && (\\n        <div\\n          style={{\\n            fontFamily: SERIF,\\n            fontSize: 11,\\n            color: MUTED,\\n            fontStyle: 'italic',\\n            opacity: 0.7,\\n          }}\\n        >\\n          click to reveal mapping \\u2192\\n        </div>\\n      )}\\n    </div>\\n  );\\n}\\n\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\n// Main\\n// \\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\u2014\\nexport default function App() {\\n  const [active, setActive] = useState(null);\\n\\n  const panels = [\\n    {\\n      id: 'encdec',\\n      title: 'Encoder\\u2013decoder',\\n      subtitle: 'The translator at two desks',\\n      examples: 'original Transformer (2017), T5, BART',\\n      color: '#1E3A5F',\\n      lightColor: '#E8EDF3',\\n      caption:\\n        'Two parameter stacks. The encoder reads the input with bidirectional attention \\u2014 every input token can look both left and right. The decoder then writes the output one token at a time (causal), while cross-attention lets every output token glance back at the fully encoded input. This split gives clean separation but ~2\\u00d7 the parameters for the same effective depth, and each generated token invalidates less of the KV-cache because cross-attention keys/values must be recomputed.',\\n    },\\n    {\\n      id: 'dec',\\n      title: 'Decoder-only',\\n      subtitle: 'The stream writer',\\n      examples: 'GPT-1/2/3, Llama, Claude',\\n      color: '#065F46',\\n      lightColor: '#E1EFEA',\\n      caption:\\n        'One unified stack. Prompt and generation live on a single continuous sequence; every token only attends to earlier tokens (lower-triangular causal mask). Consequences: (1) K and V from every prior token are permanently reusable \\u2014 this is why KV-caching works at all, (2) tiled attention can skip the upper triangle, giving ~2\\u00d7 faster attention than bidirectional, (3) no architectural split between \\\"understanding\\\" and \\\"generating\\\" \\u2014 the same parameters do both.',\\n    },\\n  ];\\n\\n  const svgW = 440;\\n  const svgH = 190;\\n  const groundY = 140;\\n  const accentEncDec = panels[0].color;\\n  const accentDec = panels[1].color;\\n\\n  return (\\n    <div\\n      style={{\\n        background: BG,\\n        minHeight: '100vh',\\n        padding: '32px 20px',\\n        fontFamily: SERIF,\\n        color: INK,\\n      }}\\n    >\\n      <div style={{ maxWidth: 980, margin: '0 auto' }}>\\n        {/* Title block */}\\n        <div style={{ marginBottom: 6 }}>\\n          <div\\n            style={{\\n              fontSize: 12,\\n              fontStyle: 'italic',\\n              color: MUTED,\\n              letterSpacing: '0.06em',\\n              textTransform: 'uppercase',\\n              marginBottom: 4,\\n            }}\\n          >\\n            Transformer architectures \\u2014 attention as gaze\\n          </div>\\n          <h1\\n            style={{\\n              fontSize: 28,\\n              fontWeight: 500,\\n              margin: 0,\\n              lineHeight: 1.2,\\n            }}\\n          >\\n            Who is allowed to look at whom?\\n          </h1>\\n        </div>\\n        <p\\n          style={{\\n            fontSize: 15,\\n            color: MUTED,\\n            lineHeight: 1.55,\\n            margin: '10px 0 24px',\\n            maxWidth: 720,\\n          }}\\n        >\\n          An attention mask is just a rule about where a token's gaze can land. The architectural\\n          choice is really a choice of gaze pattern.\\n        </p>\\n\\n        {/* Panels */}\\n        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>\\n          <PanelCard\\n            panel={panels[0]}\\n            active={active === 'encdec'}\\n            onClick={() => setActive(active === 'encdec' ? null : 'encdec')}\\n          >\\n            <svg\\n              viewBox={`0 0 ${svgW} ${svgH}`}\\n              width=\\\"100%\\\"\\n              style={{ display: 'block', fontFamily: SERIF }}\\n              role=\\\"img\\\"\\n              aria-label=\\\"Translator with two desks: reads source bidirectionally, writes target causally with cross-attention back to source\\\"\\n            >\\n              {/* ground line */}\\n              <line\\n                x1=\\\"12\\\"\\n                y1={groundY}\\n                x2={svgW - 12}\\n                y2={groundY}\\n                stroke={BORDER}\\n                strokeWidth=\\\"0.8\\\"\\n              />\\n              <EncoderDecoderPanel\\n                width={svgW}\\n                height={svgH}\\n                groundY={groundY}\\n                accent={accentEncDec}\\n              />\\n            </svg>\\n          </PanelCard>\\n\\n          <PanelCard\\n            panel={panels[1]}\\n            active={active === 'dec'}\\n            onClick={() => setActive(active === 'dec' ? null : 'dec')}\\n          >\\n            <svg\\n              viewBox={`0 0 ${svgW} ${svgH}`}\\n              width=\\\"100%\\\"\\n              style={{ display: 'block', fontFamily: SERIF }}\\n              role=\\\"img\\\"\\n              aria-label=\\\"Stream writer at one long scroll: prompt and generation on a single surface, writer looks only backward\\\"\\n            >\\n              <line\\n                x1=\\\"12\\\"\\n                y1={groundY}\\n                x2={svgW - 12}\\n                y2={groundY}\\n                stroke={BORDER}\\n                strokeWidth=\\\"0.8\\\"\\n              />\\n              <DecoderOnlyPanel width={svgW} height={svgH} groundY={groundY} accent={accentDec} />\\n            </svg>\\n          </PanelCard>\\n        </div>\\n\\n        {/* Metaphor-break note */}\\n        <div\\n          style={{\\n            marginTop: 28,\\n            padding: '14px 18px',\\n            background: CARD,\\n            border: `1px solid ${BORDER}`,\\n            borderRadius: 8,\\n            fontSize: 13,\\n            color: INK,\\n            lineHeight: 1.6,\\n          }}\\n        >\\n          <span style={{ fontStyle: 'italic', color: MUTED }}>Where the metaphor breaks: </span>\\n          Real tokens don't take turns \\u2014 every position in the sequence computes attention in\\n          parallel during training. The \\\"writer\\\" metaphor is a serial story for what is actually a\\n          simultaneous matrix operation with a triangular mask. The gaze direction is real; the\\n          sequencing of glances is pedagogical fiction.\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}\\n\", \"filename\": \"/home/claude/attention_architectures.jsx\"}"
  },
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
  "tool_use_id": "toolu_0158vtc2xpezBKywgVByFuqu",
  "name": "create_file",
  "content": [
    {
      "type": "text",
      "text": "File created successfully: /home/claude/attention_architectures.jsx",
      "uuid": "c160f11f-b0f7-4a11-8a41-f3ec76d4b50b"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": {
    "type": "text",
    "text": "File created successfully: /home/claude/attention_architectures.jsx"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:50:21.644521Z",
  "stop_timestamp": "2026-04-24T07:50:22.427752Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CTSRhYDqXESKwqsCw3J5Mm",
  "name": "bash_tool",
  "input": {
    "command": "cp /home/claude/attention_architectures.jsx /mnt/user-data/outputs/attention_architectures.jsx && ls -la /mnt/user-data/outputs/",
    "description": "Copy the JSX artifact to the outputs directory"
  },
  "message": "Copy the JSX artifact to the outputs directory",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"cp /home/claude/attention_architectures.jsx /mnt/user-data/outputs/attention_architectures.jsx && ls -la /mnt/user-data/outputs/\"}"
  },
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
  "tool_use_id": "toolu_01CTSRhYDqXESKwqsCw3J5Mm",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"total 24\\ndrwxr-xr-x 1 claude root     0 Apr 24 07:50 .\\ndrwxr-xr-x 5 root   root  4096 Apr 24 07:48 ..\\n-rw-r--r-- 1 claude root 20113 Apr 24 07:50 attention_architectures.jsx\\n\",\"stderr\":\"\"}",
      "uuid": "74b9b1e4-0de8-4c75-a789-500218985366"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "commandLine",
  "display_content": {
    "type": "json_block",
    "json_block": "{\"returncode\":0,\"stdout\":\"total 24\\ndrwxr-xr-x 1 claude root     0 Apr 24 07:50 .\\ndrwxr-xr-x 5 root   root  4096 Apr 24 07:48 ..\\n-rw-r--r-- 1 claude root 20113 Apr 24 07:50 attention_architectures.jsx\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-24T07:50:25.338288Z",
  "stop_timestamp": "2026-04-24T07:50:25.593394Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01E5edjTC4kXRtwz5FjTW5H1",
  "name": "present_files",
  "input": {
    "filepaths": [
      "/mnt/user-data/outputs/attention_architectures.jsx"
    ]
  },
  "message": "Presenting file(s)...",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "table",
    "table": [
      [
        "filepaths",
        "['/mnt/user-data/outputs/attention_architectures.jsx']"
      ]
    ]
  },
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
  "tool_use_id": "toolu_01E5edjTC4kXRtwz5FjTW5H1",
  "name": "present_files",
  "content": [
    {
      "type": "local_resource",
      "file_path": "/mnt/user-data/outputs/attention_architectures.jsx",
      "name": "attention architectures",
      "mime_type": null,
      "uuid": "426cf729-04d1-4046-a8d8-888276048597"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Presented file",
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Two side-by-side panels, each clickable to reveal the mapping from metaphor back to the real mechanism.

**Map back to the real concept.** A translator with two desks is the encoder–decoder: desk 1 holds the source (read fully, gaze sweeping both directions = bidirectional attention), desk 2 holds the target (writing forward only = causal mask), with the dashed arc = cross-attention letting every output token consult the encoded source. A stream writer at one long scroll is the decoder-only model: prompt and generation share a single surface, the writer's gaze only ever travels backward, and the same parameters handle both "reading" the prompt and "writing" the output.

**Where the metaphor breaks.** I flagged this inside the widget too, but to be explicit: real attention isn't serial. All positions compute their attention in parallel during training — the "one writer moving through time" image is a pedagogical fiction for what is mathematically a single triangular-masked matrix multiplication. The *direction* of attention is honest; the *sequencing* is not.

**An honest caveat specific to your original question.** The visual shows the architectures as structurally different, but Wang et al. 2022 found that with enough compute and the right training recipe, you can *convert between* them — a causal decoder can be adapted into a non-causal one and vice versa, with competitive post-finetuning performance. So the gaze pattern isn't a permanent identity; it's the pattern a model was *trained under*, not a hard wall.

Would you like a follow-up visual showing the attention *mask matrix* itself (lower-triangular vs full vs the hybrid encoder-decoder shape), or one showing why KV-caching only works when the gaze points backward?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbe75-b7ed-7087-83ba-64d4d9767ed6",
  "updated_at": "2026-04-24T07:50:40.116511Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019dbe75-b7ed-7b72-9efa-b71f728e91cb"
}
```

</details>
