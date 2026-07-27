# Understanding ab initio from scratch

## Export metadata (verbatim)

```json
{
  "uuid": "40282da2-ced3-47e3-af95-2f2887a5e498",
  "name": "Understanding ab initio from scratch",
  "summary": "**Conversation overview**\n\nThe person, Reid, is a nuclear physicist (affiliated with IMP/CAS based on context) who engaged in a structured learning session on ab initio methods in nuclear physics. The conversation began with a request to explain \"ab initio\" at an accessible level, using the Feynman technique — starting from a simple LEGO analogy and progressively building toward domain-specific technical depth. Reid demonstrated strong foundational knowledge throughout, correctly identifying key concepts during explain-back exercises and making insightful analogical connections independently.\n\nThe session covered several interconnected topics: the general meaning of ab initio (building theoretical systems from first principles without experimental fitting), its application in nuclear physics via chiral effective field theory (chiral EFT) as the source of nucleon-nucleon (NN) and three-nucleon forces (3NF), the landscape of ab initio many-body methods (NCSM, Coupled Cluster, IM-SRG, GFMC, BCC, VS-IMSRG), and the current computational frontier including the landmark ²⁰⁸Pb result by Hu et al. (Nature Physics, 2022) and the wavefunction matching breakthrough by Elhatisari et al. (Nature, 2024). The conversation then moved into many-body perturbation theory (MBPT), where Reid independently drew a connection to Taylor expansion — a conceptually accurate analogy that Claude confirmed and refined, noting the key difference in combinatorial complexity across orders. Claude also clarified how coupled-cluster relates to MBPT by resumming specific diagram classes to infinite order.\n\nReid's explain-back responses revealed consistent patterns: strong grasp of core concepts, occasional imprecision in English scientific vocabulary (e.g., \"trivial interactions\" instead of \"elementary interactions,\" \"computation source-expensive\" instead of \"computationally expensive\"), and a tendency to correctly identify practical limitations without always articulating the underlying mechanism. Reid prefers technically substantive explanations and pushed back when Claude was vague about the frontier of ab initio reach, prompting a web-search-grounded correction. The Feynman technique structure — analogy, concept build-up, common misconceptions, explain-back, blind spots — was used consistently and Reid engaged actively with each stage. The session ended with an open invitation to continue into coupled-cluster theory or other ab initio topics.",
  "created_at": "2026-03-21T03:12:51.100421Z",
  "updated_at": "2026-03-22T10:01:24.860034Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-21T03:12:52.113546Z

Explain ab initio like I'm a 12-year-old child

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e61-9edb-70c8-9d40-efaad3feb671",
  "updated_at": "2026-03-21T03:12:52.113546Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-21T03:13:28.271235Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants a Feynman-style explanation of "ab initio." Let me check the Feynman technique skill first.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T03:12:54.699477Z",
  "stop_timestamp": "2026-03-21T03:12:55.266659Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Fa5Vxy6G3gqa14uRa5JMaA",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/feynman-technique/SKILL.md",
    "description": "Reading the Feynman technique skill"
  },
  "message": "Reading the Feynman technique skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading the Feynman technique skill"
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
  "tool_use_id": "toolu_01Fa5Vxy6G3gqa14uRa5JMaA",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\r\n     2\tname: Feynman-Technique\r\n     3\tdescription: Explain concepts using the Feynman Technique, treating the user as a 12-year-old non-native English speaker. Use this skill whenever the user says \"Feynman\", \"explain like I'm 12\", \"ELI12\", \"simple explanation\", \"teach me like a kid\", \"feynman-style\", \"explain it simply\", or any phrasing that requests a beginner-friendly, jargon-free breakdown of a concept. Works for any subject — physics, math, CS, machine learning, or everyday topics. Do NOT use for tasks like writing code, generating files, or editing documents.\r\n     4\t---\r\n     5\t\r\n     6\t# Feynman Technique Explainer\r\n     7\t\r\n     8\tExplain concepts to a smart, curious 12-year-old who speaks English as a second language. The goal is real understanding, not simplified words.\r\n     9\t\r\n    10\t## Explanation flow\r\n    11\t\r\n    12\tFor every explanation, follow these five steps in order:\r\n    13\t\r\n    14\t1. **Name it plainly.** One sentence saying what the thing *is* or *does*. No jargon yet.\r\n    15\t2. **One analogy.** Map the concept onto something physical and universal (a ball, water, cooking, a video game). Pick the best analogy and commit — don't list alternatives. If it breaks down somewhere, say so.\r\n    16\t3. **Step-by-step logic.** Connect the analogy back to the real concept. One idea per sentence. Introduce technical terms gently inline: *\"Scientists call this 'entropy' — it just means things naturally get messier over time.\"*\r\n    17\t4. **Flag the tricky part.** Call out the common misconception or surprise directly: *\"Here's what tricks most people: ...\"*\r\n    18\t5. **Ask them to explain it back.** Low-pressure, not a test. E.g.: *\"If your friend asked you what [concept] is, what would you say?\"* If their answer has gaps, re-explain only that part.\r\n    19\t\r\n    20\tNever skip step 5 — it's the core of the technique.\r\n    21\t\r\n    22\t## Language rules\r\n    23\t\r\n    24\t- No idioms or slang (\"piece of cake\", \"ball is in your court\").\r\n    25\t- Expand acronyms on first use: \"CPU (the 'brain' of a computer)\".\r\n    26\t- Address the reader as \"you\" / \"we\".\r\n    27\t- Describe math in words first.\r\n    28\t- Don't open with a formal definition or Wikipedia-style paragraph.\r\n    29\t\r\n    30\t## Tone\r\n    31\t\r\n    32\tWarm and a little playful — like a favorite teacher. Never condescending: the *topic* is hard, not the person.\r\n    33\t\r\n    34\t## Follow-ups\r\n    35\t\r\n    36\tExtend the existing analogy if possible. Otherwise build a new small one. Always end with a gentle check: *\"Does that make sense?\"*\r\n    37\t\r\n    38\t## Broad topics\r\n    39\t\r\n    40\tBreak into small pieces. Teach one, check understanding, then move to the next. Stairs, not elevators.\r\n    41\t",
      "uuid": "b252abc6-d800-4502-bce3-7c17ba35999b"
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

Now let me explain "ab initio" using the Feynman technique. Given Reid's nuclear physics background, "ab initio" likely refers to ab initio methods in nuclear physics (or possibly quantum chemistry). Let me provide an explanation that's accessible but relevant.

Actually, the user just said "ab initio" without specifying a context. Given their nuclear physics background, they might mean ab initio nuclear structure calculations. But I should clarify... wait, actually "ab initio" is a general term used across physics and chemistry. Let me explain the general concept and connect it to physics, since that's their domain.

Let me follow the Feynman technique steps.

</details>

## What "ab initio" means

**Ab initio** is a Latin phrase that means "from the very beginning." In science, it means: **figure out how something works by starting from the most basic rules of nature — no shortcuts, no guessing, no copying from experiments.**

---

**Think of it like building with LEGO.**

Imagine you see a beautiful LEGO castle in a store. You have two choices:

- **Choice A:** Take a photo of the castle and try to copy what it looks like from the outside. You glue pieces together until your version *looks* similar. Fast, but you don't really understand *why* it holds together.

- **Choice B:** Open the instruction manual that comes in the box. Start from piece #1. Follow every step. It takes longer, but when you finish, you know *exactly* why every piece is where it is.

Ab initio is **Choice B** — but the "instruction manual" is the fundamental laws of physics (like how particles push and pull on each other), and the "castle" is whatever system you're trying to understand: a molecule, an atom, or even a nucleus.

---

**How it connects to real science:**

In an ab initio calculation, you start from the basic equations that describe how tiny particles interact — scientists call these the "fundamental interactions." Then you use a computer to solve those equations step by step, building up from the smallest pieces to predict what a bigger system (like a whole nucleus or molecule) will do.

You don't plug in any measurements from experiments. The *only* ingredients are the basic laws themselves. If your final answer matches what experiments actually observe, that's a strong sign you truly understand what's going on inside.

---

**Here's what tricks most people:**

They think ab initio means "easy" or "simple" because you start from basics. It's actually the *opposite* — it's extremely hard and computationally expensive. Starting from scratch means you need enormous computing power to track every tiny interaction. That's why scientists often use approximate shortcuts instead. Ab initio is the gold standard, but it comes at a high cost.

---

So, Reid — if a friend asked you "what does ab initio mean in science?", how would you explain it in your own words?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e61-9edb-7983-a00a-f2b78a32b97b",
  "updated_at": "2026-03-21T03:13:28.271235Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e61-9edb-70c8-9d40-efaad3feb671"
}
```

</details>

### 3. human — 2026-03-21T03:22:16.111809Z

I would explain to him that the ab initio is a method to build a theorical system from scratch, without the measurement from experiments, like semi-empirical equations or fitness. We need to consider every trivial interactions in this system, hence it's hard to establish and computation source-expensive. 
Furthermore, the metric of its success is to compare the ab initio results based on experimental results.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e6a-2eb6-7488-a1e4-97390b59e6b6",
  "updated_at": "2026-03-21T03:22:16.111809Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e61-9edb-7983-a00a-f2b78a32b97b"
}
```

</details>

### 4. assistant — 2026-03-21T03:22:39.705501Z

<details>
<summary>Thinking (verbatim)</summary>

Reid gave a solid explanation back. Let me evaluate it according to the Feynman technique - identify what's correct and gently address any gaps or imprecisions.

His explanation is quite good. Let me note:

1. ✅ "build a theoretical system from scratch" — correct
2. ✅ "without measurement from experiments, like semi-empirical equations or fitness" — good contrast with semi-empirical methods
3. ✅ "consider every trivial interactions" — he means "every small/fundamental interaction" — minor language point
4. ✅ "hard to establish and computation source-expensive" — correct idea, minor phrasing issue ("computationally expensive")


5. ✅ "metric of success is to compare with experimental results" — correct, though I should clarify that comparison serves as validation rather than input, and that "fitness" likely refers to parameter fitting, which is a useful distinction he's making.

Overall, Reid's got the core concept down well, especially for someone in nuclear physics — I'll affirm what he's understood and just gently reinforce the distinction between ab initio calculations as standalone theory versus their role in validating against experiments.

</details>

That's a really solid explanation! You captured the key ideas well. Let me just sharpen two small points:

**What you nailed:**

Your contrast with semi-empirical methods and fitting is exactly right — that's the crucial distinction. Ab initio takes no pre-measured parameters as input, unlike semi-empirical approaches that borrow numbers from experiment and plug them into simplified formulas.

Your point about computational cost is also spot-on.

**One subtle thing to sharpen:**

You said the metric of success is to "compare ab initio results based on experimental results." The idea is correct, but the word choice matters here: experiments serve as **validation**, not as input. The ab initio calculation runs completely independently first, *then* you hold the result up against experimental data to check it. If they agree, it suggests your understanding of the underlying interactions is correct. If they disagree, something in your starting assumptions or approximations needs fixing.

The distinction is: experiments **judge** the result — they don't **feed** it. You already understand this, but in scientific writing, being precise about that boundary matters.

**Since you work with nuclear physics:**

You've probably seen this tension firsthand — ab initio nuclear structure calculations (like those using chiral effective field theory as the input interaction) are pushing toward heavier nuclei, but the computational cost explodes as you add more nucleons. That's exactly the "LEGO problem" getting harder with more pieces.

Want to go deeper into how ab initio applies specifically in your nuclear physics context?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e6a-2eb6-7865-9855-ffb1b00005a7",
  "updated_at": "2026-03-21T03:22:39.705501Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e6a-2eb6-7488-a1e4-97390b59e6b6"
}
```

</details>

### 5. human — 2026-03-21T03:41:01.474201Z

I would explain to him that the ab initio is a method to build a theorical system from scratch, without the measurement from experiments, like semi-empirical equations or fitness. We need to consider every trivial interactions in this system, hence it's hard to establish and computation source-expensive. 
Furthermore, the metric of its success is to compare the ab initio results based on experimental results.

I just updated the skill, re-read it to employ the philosophy

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e7b-6671-7348-86b3-d934c02a3ad9",
  "updated_at": "2026-03-21T03:41:01.474201Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e61-9edb-7983-a00a-f2b78a32b97b"
}
```

</details>

### 6. assistant — 2026-03-21T03:41:34.277120Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to re-read the Feynman technique skill since they said they updated it.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T03:41:03.929264Z",
  "stop_timestamp": "2026-03-21T03:41:04.377993Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0114GYrevikwDegbSCJ4PNrU",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/feynman-technique/SKILL.md",
    "description": "Re-reading the updated Feynman technique skill"
  },
  "message": "Re-reading the updated Feynman technique skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Re-reading the updated Feynman technique skill"
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
  "tool_use_id": "toolu_0114GYrevikwDegbSCJ4PNrU",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\r\n     2\tname: Feynman-Technique\r\n     3\tdescription: Explain concepts using the Feynman Technique, treating the user as a 12-year-old non-native English speaker. Use this skill whenever the user says \"Feynman\", \"explain like I'm 12\", \"ELI12\", \"simple explanation\", \"teach me like a kid\", \"feynman-style\", \"explain it simply\", or any phrasing that requests a beginner-friendly, jargon-free breakdown of a concept. Works for any subject — physics, math, CS, machine learning, or everyday topics. Do NOT use for tasks like writing code, generating files, or editing documents.\r\n     4\t---\r\n     5\t\r\n     6\t# Feynman Technique Explainer\r\n     7\t\r\n     8\tExplain concepts to a smart, curious 12-year-old who speaks English as a second language. The goal is real understanding, not simplified words.\r\n     9\t\r\n    10\t## Explanation flow\r\n    11\t\r\n    12\tFor every explanation, follow these five steps in order:\r\n    13\t\r\n    14\t1. **Name it plainly.** One sentence saying what the thing *is* or *does*. No jargon yet.\r\n    15\t2. **One analogy.** Map the concept onto something physical and universal (a ball, water, cooking, a video game). Pick the best analogy and commit — don't list alternatives. If it breaks down somewhere, say so.\r\n    16\t3. **Step-by-step logic.** Connect the analogy back to the real concept. One idea per sentence. Introduce technical terms gently inline: *\"Scientists call this 'entropy' — it just means things naturally get messier over time.\"*\r\n    17\t4. **Flag the tricky part.** Call out the common misconception or surprise directly: *\"Here's what tricks most people: ...\"*\r\n    18\t5. **Ask them to explain it back.** Low-pressure, not a test. E.g.: *\"If your friend asked you what [concept] is, what would you say?\"* If their answer has gaps, re-explain only that part.\r\n    19\t\r\n    20\tNever skip step 5 — it's the core of the technique.\r\n    21\t\r\n    22\t## Language rules\r\n    23\t\r\n    24\t- No idioms or slang (\"piece of cake\", \"ball is in your court\").\r\n    25\t- Expand acronyms on first use: \"CPU (the 'brain' of a computer)\".\r\n    26\t- Address the reader as \"you\" / \"we\".\r\n    27\t- Describe math in words first.\r\n    28\t- Don't open with a formal definition or Wikipedia-style paragraph.\r\n    29\t\r\n    30\t## Tone\r\n    31\t\r\n    32\tWarm and a little playful — like a favorite teacher. Never condescending: the *topic* is hard, not the person.\r\n    33\t\r\n    34\t## Follow-ups\r\n    35\t\r\n    36\tExtend the existing analogy if possible. Otherwise build a new small one. Always end with a gentle check: *\"Does that make sense?\"*\r\n    37\t\r\n    38\t## Broad topics\r\n    39\t\r\n    40\tBreak into small pieces. Teach one, check understanding, then move to the next. Stairs, not elevators.\r\n    41\t",
      "uuid": "62cf89b5-e96e-4f34-8fe9-a8af1bc688fe"
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

The skill hasn't actually changed from what I can see. But the user said they updated it. Let me proceed with the Feynman technique step 5 — evaluate their explanation and re-explain any gaps.

Their explanation was quite good. Let me check for gaps:

1. "theorical system from scratch" — they mean "theoretical model from scratch" — minor language point
2. "without the measurement from experiments, like semi-empirical equations or fitness" — Good! They correctly identify that ab initio avoids experimental input. "Fitness" likely means "fitting" (as in fitting parameters to data). Semi-empirical is a good contrast.
3. "consider every trivial interactions" — they probably mean "every individual/fundamental interaction" not "trivial." This is a meaningful gap — "trivial" means unimportant, but they mean the opposite.


4. "computation source-expensive" — they mean "computationally resource-expensive" — minor language issue.
5. On validation, they've got the right idea that ab initio results are checked against experiments, though there's a subtle distinction worth making: the experiments serve as a validation check afterward, not as input to the model itself.

Overall their understanding is solid. The main thing to address is that "trivial" flips the meaning of what they're trying to say, and I should clarify the validation point to emphasize the difference between using experiments as input versus using them as a benchmark.

</details>

That's a really solid explanation, Reid! You clearly got the core idea. The skill file looks the same to me — it may not have saved yet. But let me follow its philosophy and address two small gaps I noticed:

**1. "Trivial" flips your meaning.**

You said "every trivial interactions" — but "trivial" means *unimportant* or *easy to ignore*. You actually mean the opposite: ab initio forces you to account for every interaction, even the ones that seem small and tempting to skip. A better word here would be something like "every individual interaction, even the tiny ones."

**2. Validated *against* experiments, not *based on* them.**

You said "compare the ab initio results based on experimental results." The direction matters here. Back to our LEGO analogy: after you finish building the castle purely from the instruction manual (basic laws), you hold it up next to the photo of the real castle and ask "does mine look like the real one?" You check your result *against* the experiment — but the experiment never entered your building process. The word you want is "validated against" or "compared with," not "based on." "Based on" could sound like you used experiments as an ingredient, which is exactly what ab initio avoids.

Your contrast with semi-empirical methods and fitting was excellent — that's a distinction many people miss. Semi-empirical approaches borrow numbers from experiments and plug them in; ab initio refuses to do that.

Does that make sense?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e7b-6671-70eb-87df-a9a38f8d125a",
  "updated_at": "2026-03-21T03:41:34.277120Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e7b-6671-7348-86b3-d934c02a3ad9"
}
```

</details>

### 7. human — 2026-03-21T03:44:37.539172Z

I would explain to him that the ab initio is a method to build a theorical system from scratch, without the measurement from experiments, like semi-empirical equations or fitness. We need to consider every trivial interactions in this system, hence it's hard to establish and computation source-expensive. 
Furthermore, the metric of its success is to compare the ab initio results based on experimental results.
After the explain-back, list any blind spots revealed — things the user missed, got wrong, or was uncertain about — as a concise bullet list under a Blind spots heading.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e7e-b1bd-7f93-af52-a47acc58b187",
  "updated_at": "2026-03-21T03:44:37.539172Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e61-9edb-7983-a00a-f2b78a32b97b"
}
```

</details>

### 8. assistant — 2026-03-21T03:45:06.995968Z

<details>
<summary>Thinking (verbatim)</summary>

The user explained back the concept and wants me to evaluate their understanding, then list blind spots.

Let me assess their explanation:

1. "a method to build a theoretical system from scratch, without the measurement from experiments" — Good, captures the core idea.

2. "like semi-empirical equations or fitness" — They're giving examples of what ab initio is NOT (semi-empirical methods, fitting to data). This is correct reasoning, though the phrasing is a bit ambiguous — it could read as if those are examples of ab initio. I think they mean "without shortcuts like semi-empirical equations or fitting."

3. "We need to consider every trivial interactions" — They probably mean "every individual/small interaction." The word "trivial" here is slightly off — they likely mean "every small/elementary interaction," not "trivial" (which means unimportant). This is a vocabulary issue more than a conceptual one.


4. "computation source-expensive" — They meant "computationally expensive," just a minor language slip.

5. "the metric of its success is to compare the ab initio results based on experimental results" — They're partially there. Comparison with experiment validates the approach, but that's not the only measure of success, and there's a subtle distinction: ab initio methods are self-contained and don't require experiments to work. Experiments are external validation, not a built-in success metric.

The main gap I'm noticing is they haven't identified what the "basic rules" actually are — the fundamental physics laws and quantum mechanics equations that form the foundation.

</details>

That's a really solid explanation, Reid. You captured the core idea well. Let me give you specific feedback.

**What you nailed:**

You correctly identified that ab initio builds from scratch without plugging in experimental measurements, and you correctly contrasted it against semi-empirical equations and fitting — those are exactly the kinds of shortcuts ab initio avoids. You also got the key point that it's computationally expensive *because* you must account for many interactions, and that experimental comparison is an important validation check.

---

### Blind spots

- **"Trivial" is the wrong word here.** You likely meant "every small/elementary interaction." In English, "trivial" means *unimportant* or *easy to ignore* — almost the opposite of what you intended. A better phrasing: "every individual interaction, even the small ones."

- **What are the "basic rules" specifically?** Your explanation didn't name what you're starting *from*. In most ab initio work (molecular or nuclear), the starting point is quantum mechanics — specifically, equations like the Schrödinger equation or its relativistic equivalents, plus known fundamental forces. Without naming this, a listener might wonder: "from scratch... but starting from *what*?"

- **Experimental comparison is validation, not the only goal.** You framed it as "the metric of success," but ab initio has a superpower you didn't mention: it can **predict** properties of systems that have *never been measured*. For example, in nuclear physics, ab initio methods can predict properties of exotic nuclei that are too short-lived to study easily in the lab. So comparison with experiment validates the method, but prediction beyond experiment is where it becomes truly powerful.

- **"Computation source-expensive"** — small language note: the natural phrasing is "computationally expensive" or "resource-intensive."

---

Want to dig into how ab initio actually works in nuclear physics specifically — like how it connects to the shell model or nuclear forces you're working with?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e7e-b1bd-73ff-902e-f9d1c3b58878",
  "updated_at": "2026-03-21T03:45:06.995968Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e7e-b1bd-7f93-af52-a47acc58b187"
}
```

</details>

### 9. human — 2026-03-21T03:49:12.352702Z

Great! Go ahead

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e82-e200-7037-91dd-2981391077f3",
  "updated_at": "2026-03-21T03:49:12.352702Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e7e-b1bd-73ff-902e-f9d1c3b58878"
}
```

</details>

### 10. assistant — 2026-03-21T03:49:55.010897Z

<details>
<summary>Thinking (verbatim)</summary>

Reid wants me to explain how ab initio works specifically in nuclear physics, connecting to shell model and nuclear forces. This is his research area, so I should build on the LEGO analogy while introducing the real physics. Let me follow the Feynman technique flow.

Let me think about what I know about ab initio nuclear physics:

1. Starting point: nucleon-nucleon (NN) interactions derived from QCD or chiral effective field theory (χEFT)
2. You solve the many-body Schrödinger equation for A nucleons
3. Methods include: No-Core Shell Model (NCSM), Coupled Cluster, In-Medium SRG, Green's Function Monte Carlo, etc.


4. The key difference from traditional shell model is that ab initio derives the effective interaction directly from fundamental NN and 3N forces rather than fitting it empirically to data.
5. Three-nucleon forces turned out to be essential—that was a significant breakthrough in the field.

Since Reid works at IMP/CAS on nuclear physics, I can build on concepts he already knows like the shell model and nuclear forces, but I should stay grounded in established facts and use the Feynman approach to make this accessible.

</details>

## Ab initio in nuclear physics

Let's extend our LEGO analogy one more level.

---

**The big question ab initio nuclear physics asks:**

You have a bunch of protons and neutrons (we call them *nucleons*). You know the rules for how they push, pull, and interact with each other. Can you predict what a whole nucleus — like carbon-12 or oxygen-16 — will look like, just from those rules? Its energy levels, its shape, its size?

---

**Back to LEGO — but now with a twist.**

Remember our LEGO castle? Now imagine something harder. You have a rulebook that only tells you how **two LEGO bricks** stick together — how strong the connection is, at what angles they click, how far apart they can be. That's your **nucleon-nucleon (NN) interaction**.

Your job: using *only* that two-brick rulebook, predict what a castle made of 12 bricks looks like. No peeking at the finished photo.

Sounds possible, right? But here's the twist — sometimes, when you put **three** bricks together, they behave a little differently than you'd predict from just the two-brick rules. Scientists call these **three-nucleon forces (3NF)**. It's as if three bricks together create a tiny extra click that doesn't exist when you only hold two. This turned out to be *crucial* — without including 3NF, ab initio predictions for even medium-sized nuclei go noticeably wrong.

---

**Where does the rulebook come from?**

This is the key question. The *truly* fundamental theory of how quarks and gluons interact is called **QCD** (Quantum Chromodynamics). But QCD is almost impossibly hard to solve directly at the energy scales inside a nucleus.

So nuclear physicists use a clever bridge called **chiral effective field theory (chiral EFT)**. Think of it like this: QCD is the full architect's blueprint written in a language you can barely read. Chiral EFT is a reliable *translation* of that blueprint into simpler language — it captures the essential physics of how nucleons interact at nuclear energy scales, organized by importance. The most important interactions come first, smaller corrections come next, and so on. This organized expansion is what gives chiral EFT its systematic power.

The NN and 3NF forces derived from chiral EFT are the starting ingredients — the "from scratch" part of ab initio.

---

**How you actually solve it — the many-body problem:**

Once you have your forces, you need to solve the quantum mechanical equation (the Schrödinger equation) for all A nucleons simultaneously. This is the **nuclear many-body problem**, and it's where the computational cost explodes.

There are several ab initio methods to tackle this, each with trade-offs:

- **No-Core Shell Model (NCSM)** — treats every nucleon as active (no frozen "core"), and expands the solution in a harmonic oscillator basis. Very accurate for light nuclei, but the computational space grows enormously as you add more nucleons.

- **Coupled Cluster (CC)** — uses a clever mathematical trick to approximate correlations efficiently. Scales better to medium-mass nuclei (up to around nickel, calcium regions), but works best for nuclei near closed shells.

- **In-Medium Similarity Renormalization Group (IM-SRG)** — transforms the Hamiltonian itself to make it simpler to solve, step by step. Also reaches medium-mass nuclei.

- **Green's Function Monte Carlo (GFMC)** — uses random sampling to find solutions. Very precise for light nuclei (up to about A ≈ 12), but computationally intensive.

---

**How this connects to the traditional shell model you already know:**

In the traditional shell model, you assume a closed core (say, oxygen-16) and only let a few "valence" nucleons outside that core interact — using effective interactions that are **fitted to experimental data**. That fitting is exactly the shortcut that makes it *not* ab initio.

The ab initio goal is to **derive** those effective interactions from the underlying chiral EFT forces, so even the shell-model-like description becomes rooted in fundamental physics rather than parameter fitting.

---

**Here's what tricks most people about ab initio nuclear physics:**

They assume it should work for *any* nucleus by now. In reality, fully ab initio calculations are still limited — they work well for light nuclei and are being pushed into the medium-mass region (roughly up to the tin region in recent years), but heavy nuclei like uranium remain far out of reach. The computational cost scales harshly with the number of nucleons.

---

**One important honesty note:** I'm confident about the general framework I described — chiral EFT as the input, the many-body methods, the role of 3NF. But the exact frontiers of which nuclei have been reached by which methods are advancing rapidly. For the most current status, recent review articles (for example, from groups like Hergert, Hebeler, or Hagen) would give you the precise state of the art.

---

So, Reid — how does this map onto what you've encountered at IMP? Does the connection between chiral EFT and the shell model make sense, or should we dig into any particular piece?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0e82-e200-7351-98c6-a9001d1b4d08",
  "updated_at": "2026-03-21T03:49:55.010897Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0e82-e200-7037-91dd-2981391077f3"
}
```

</details>

### 11. human — 2026-03-21T09:31:50.957598Z

You could be more specific about this part.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0fbc-8eeb-73f2-b1e4-7c5e98c28bf5",
  "updated_at": "2026-03-21T09:31:50.957598Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 82,
      "file_type": "txt",
      "extracted_content": "they work well for light nuclei and are being pushed into the medium-mass region ("
    }
  ],
  "files": [
    {
      "file_uuid": "0ccb6061-9180-483f-8321-09389042254b",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019d0e82-e200-7351-98c6-a9001d1b4d08"
}
```

</details>

### 12. assistant — 2026-03-21T09:32:40.249018Z

<details>
<summary>Thinking (verbatim)</summary>

Reid wants me to be more specific about the frontier of ab initio nuclear physics — which nuclei have been reached by which methods. Let me search for current information rather than relying on potentially outdated training data.

</details>

Good catch — I was vague there. Let me search for the current state of the art rather than guess.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T09:31:54.403264Z",
  "stop_timestamp": "2026-03-21T09:31:54.974734Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CsdoyUrcyzY41C9KioJ53a",
  "name": "web_search",
  "input": {
    "query": "ab initio nuclear structure calculations medium mass heavy nuclei 2025"
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
  "tool_use_id": "toolu_01CsdoyUrcyzY41C9KioJ53a",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Ab initio computations of atomic nuclei",
      "url": "https://arxiv.org/html/2410.00843v1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "Ab initio computations of atomic nuclei, based on Hamiltonians from effective field theories of quantum chromodynamics, are now routinely used to predict and describe properties of medium heavy nuclei, and even the heavy nucleus 208Pb has been reached. These lecture notes describe what are ...\n\nAnother argument in favor of approximate solutions to the nuclear many-body problem is that exact computations are rarely required. Nuclear Hamiltonians are only approximate themselves. More precisely: they are effective Hamiltonians for approximate descriptions of low-energy nuclear phenomena. When taken from effective theories of quantum chromodynamics [13, 14, 15], effective Hamiltonians are worked out up to some order in the power counting. Then it is not necessary to solve such approximate Hamiltonians exactly. All one really needs is that the error in the solution is smaller than the uncertainty of the Hamiltonian for the observables of interest. As the reader will see, ab initio computations are heuristic approaches that build on phenomenology and the insights gained from simple models. On first sight, this might be not what one would expect from ab initio methods.\n\nHere, phenomenology taught us that quadrupole (and possibly octopole) deformations are most important. It would be hard to significantly enlarge the set of constraints that are probed in mean-field calculations to find the most appropriate product state of a nucleus. In other words, the search for the optimal reference state itself might already be exponentially hard if one were not to take known phenomenology into account. Thus, practitioners of ab initio computations very much benefit from the collected wisdom of nuclear structure and many-body methods [16, 17]. The ideas and concepts behind some of today’s ab initio computations date back to the 1960s. Coester and Kümmel [18], for instance, introduced coupled-cluster theory as a method to compute “short-range correlations in nuclear wave functions.” These correlations deliver the bulk of nuclear binding energy.\n\nThese lecture notes are organized as follows. They start with a definition of the term “ab initio” in Sect. 2. Next follows a brief introduction of Hamiltonians from effective field theories in Sect. 3. Necessary details about single-particle bases (e.g. the number of single-particle states required for a computation and the computation of matrix elements) are presented in Sect. 4. Section 5 is dedicated to the importance of the mean-field and symmetry breaking. The inclusion of correlations is presented in Sect. 6, and excited states are discussed in Sect. 7. Finally a few results are highlighted in Sect. 8 and the Epilogue 9 concludes these lecture notes. Quantum chromodynamics is the theory of the strong nuclear force, and this then literally is the beginning from which nuclear theory could start. However, there are practical and principal objections to this starting point.\n\nSummarizing, there are two big advantages of breaking symmetries in the mean field. The first is that the symmetry breaking reveals important physics such as nuclear deformation (in the case of breaking rotational symmetry) and superfluidity (in the case of breaking particle numbers). The second is that the restoration of symmetries is about including long-wavelength physics into the nuclear ground state. It is universal because it leads to rotational and pairing rotational bands in the case of breaking rotational symmetry and particle numbers, respectively. These infrared phenomena are separated in scale from the short-range correlations that make the bulk of nuclear binding. Thus, one can use different methods to include them. This separtion of scales has been exploited recently in ab initio computations [107]. Nuclei are complex systems, and a nucleus can exhibit various structures.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/html/2410.00843v1",
        "search_provider": "anthropic",
        "age": "October 1, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Frontiers in Nuclear Lattice EFT: From Ab Initio Nuclear Structure to Reactions (1-March 3, 2025) · Indico of IHEP (Indico)",
      "url": "https://indico.ihep.ac.cn/event/24637/timetable/?print=1&view=standard_numbered",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ihep.ac.cn",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ihep.ac.cn",
        "site_name": "IHEP Indico"
      },
      "is_missing": false,
      "text": "Nuclear charge radii are among the most fundamental properties of atomic nuclei. In nuclear lattice effective field theory, charge radii are typically calculated using the pinhole method, where an $A$-body density operator ($A$ being the mass number) is inserted at mid-time during the imaginary time evolution. However, this $A$-body density operator introduces significant sign oscillations, especially for heavy nuclei and large imaginary times. In this talk, I will present a novel approach called the partial pinhole method for calculating nuclear charge radii. By reducing the order of the density operators, this method significantly alleviates the sign oscillation issue. This method is then combined with the recently developed wavefunction matching technique, and the charge radii of oxygen isotopes are well reproduced using high-fidelity chiral effective field theory interactions.\n\nUnderstanding the fundamental aspects of nuclear structure and reactions remains a central challenge in nuclear physics. Nuclear Lattice Effective Field Theory (NLEFT) has emerged as a powerful ab initio approach that bridges effective field theories and lattice simulations to study nuclear systems directly from the underlying forces. This symposium will cover recent progress in Nuclear Lattice Effective Field Theory (NLEFT) and related areas, including advancements in nuclear lattice simulations, ab initio calculations of nuclear structure, nuclear thermodynamics, nuclear and neutron matter, hyper-neutron matter and hypernuclei, as well as nuclear scattering dynamics and reactions. Additionally, effective field theories in nuclear physics, computational methods and algorithms in NLEFT, and applications to nuclear astrophysics will be featured. The symposium aims to bring together researchers and experts working in NLEFT and related fields to discuss these developments, exchange ideas,\n\nPrediction of dripline heavier nuclei than neon is currently depends on theoretical approaches. However, there exist strong model-dependence in the prediction of the dripline in theoretical approach. Nuclear Lattice Effective Field Theory is one of the ab initio approach to explore the quantum many-body systems. In this talk, I will give a talk about the nuclear properties of Oxygen isotopes under the Woods-Saxon potential which is semi ab initio near the neutron dripline using lattice Monte Carlo simulations. ... The equation of state (EoS) of neutron matter plays a decisive role to understand the neutron star properties and the gravitational waves from neutron star mergers. At sufficient densities, the appearance of hyperons generally softens the EoS, leading to a reduction in the maximum mass of neutron stars well below the observed values of about 2 solar masses.\n\nNuclear charge radii are among the most fundamental properties of atomic nuclei. In nuclear lattice effective field theory, charge radii are typically calculated using the pinhole method, where an $A$-body density operator ($A$ being the mass number) is inserted at mid-time during the imaginary time evolution. However, this $A$-body density operator introduces significant sign oscillations, especially for heavy nuclei and large imaginary times. In this talk, I will present a novel approach called the partial pinhole method for calculating nuclear charge radii. By reducing the order of the density operators, this method significantly alleviates the sign oscillation issue. This method is then combined with the recently developed wavefunction matching technique, and the charge radii of oxygen isotopes are well reproduced using high-fidelity chiral effective field theory interactions.\n\nHowever, they generally suffer from the “fermion-sign problem” that leads to exponential scaling of the computation effort with system size. As an alternative, the variational Monte Carlo (VMC) approach avoids such sign problems, but the challenge becomes how to construct an efficient and accurate variational ansatz. In this talk, I will introduce our recent developments in the neural-network ansatz for the VMC approach. I will show that the VMC calculations with neural-network ansatz can provide accurate solutions for the ground states of few- and many-body nuclei while keeping the computational cost polynomially scaling with system size, thanks to the strong expressive power of neural networks. ... Speaker: F.-K. Guo ... We employ the nuclear lattice effective field theory (NLEFT), an efficient tool for nuclear ab. initio calculations, to solve the asymmetric multi-hadron systems.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://indico.ihep.ac.cn/event/24637/timetable/?print=1&view=standard_numbered",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Mass measurements of 99–101In challenge ab initio nuclear theory of the nuclide 100Sn | Nature Physics",
      "url": "https://www.nature.com/articles/s41567-021-01326-9",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nature.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nature.com",
        "site_name": "Nature"
      },
      "is_missing": false,
      "text": "In recent years, there has been great progress advancing ab initio calculations in medium-mass nuclei23,24 up to the tin isotopes2 based on modern nuclear forces derived from chiral effective field theory of the strong interaction. Most ab initio approaches are benchmarked on even–even nuclei, which are considerably simpler to compute, but this excludes from the benchmark effects that are only visible in odd nuclei. Among these are the single-particle states accessible to the unpaired nucleon and their interaction with the states of the even–even core, the blocking effect on pairing correlations and, in the case of odd–odd nuclei, the residual interaction between the unpaired proton and neutron. The latter two give rise to an odd–even staggering (OES) of binding energies, which can be quantified by a three-point estimator. Odd systems thus provide a complementary and stringent testing ground for state-of-the-art theoretical approaches.\n\nThe tin isotope 100Sn is of singular interest for nuclear structure due to its closed-shell proton and neutron configurations. It is also the heaviest nucleus comprising protons and neutrons in equal numbers—a feature that enhances the contribution of the short-range proton–neutron pairing interaction and strongly influences its decay via the weak interaction. Decay studies in the region of 100Sn have attempted to prove its doubly magic character1 but few have studied it from an ab initio theoretical perspective2,3, and none of these has addressed the odd-proton neighbours, which are inherently more difficult to describe but crucial for a complete test of nuclear forces. Here we present direct mass measurements of the exotic odd-proton nuclide 100In, the beta-decay daughter of 100Sn, and of 99In, with one proton less than 100Sn. We use advanced mass spectrometry techniques to measure 99In, which is produced at a rate of only a few ions per second, and to resolve the ground and isomeric\n\nNature Physics - Accurate mass measurements of the indium isotopes adjacent to the doubly magic 100Sn provide critical benchmarks for ab initio theory, which withstands the challenge.\n\nIn recent years, there has been great progress advancing ab initio calculations in medium-mass nuclei23,24 up to the tin isotopes2 based on modern nuclear forces derived from chiral effective field theory of the strong interaction. Most ab initio approaches are benchmarked on even–even nuclei, which are considerably simpler to compute, but this excludes from the benchmark effects that are only visible in odd nuclei. Among these are the single-particle states accessible to the unpaired nucleon and their interaction with the states of the even–even core, the blocking effect on pairing correlations and, in the case of odd–odd nuclei, the residual interaction between the unpaired proton and neutron. The latter two give rise to an odd–even staggering (OES) of binding energies, which can be quantified by a three-point estimator. Odd systems thus provide a complementary and stringent testing ground for state-of-the-art theoretical approaches.\n\nAmong ab initio approaches, the valence-space formulation of the in-medium similarity renormalization group (VS-IMSRG)25 is able to access a broad range of closed- and open-shell nuclei in the nuclear chart26. In addition, we will explore the shell-model coupled-cluster (SMCC) method27 in this region. Both the VS-IMSRG and coupled-cluster calculations provide access to a broad range of observables, such as ab initio calculations of beta decays—up to 100Sn (ref. 3). The VS-IMSRG was also recently shown to adequately describe both OES of nuclear masses and charge radii in neutron-rich odd-Z copper (Z = 29) isotopes28. Here we present VS-IMSRG and SMCC results that allow direct comparisons with the odd-Z nuclides adjacent to the iconic 100Sn nucleus. We have performed cross-shell VS-IMSRG29 and SMCC calculations using the 1.8/2.0(EM) two-nucleon (NN) and three-nucleon (3N) interactions of ref.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nature.com/articles/s41567-021-01326-9",
        "search_provider": "anthropic",
        "age": "February 21, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Deformed natural orbitals for ab initio calculations | The European Physical Journal A | Springer Nature Link",
      "url": "https://link.springer.com/article/10.1140/epja/s10050-024-01466-5",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "springer.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
        "site_name": "Springer"
      },
      "is_missing": false,
      "text": "The rapid development of ab initio nuclear structure methods towards doubly open-shell nuclei, heavy nuclei and greater accuracy occurs at the price of evermore increased computational costs, especially RAM and CPU time. While most of the numerical simulations are carried out by expanding relevant operators and wave functions on the spherical harmonic oscillator basis, alternative one-body bases offering advantages in terms of computational efficiency have recently been investigated. In particular, the so-called natural basis used in combination with symmetry-conserving methods applicable to doubly closed-shell nuclei has proven beneficial in this respect. The present work examines the performance of the natural basis in the context of symmetry-breaking many-body calculations enabling the description of superfluid and deformed open-shell nuclei at polynomial cost with system’s size.\n\nThe European Physical Journal A - The rapid development of ab initio nuclear structure methods towards doubly open-shell nuclei, heavy nuclei and greater accuracy occurs at the price of evermore...\n\nScalesi, A., Duguet, T., Frosini, M. et al. Deformed natural orbitals for ab initio calculations. Eur. Phys. J. A 61, 1 (2025). https://doi.org/10.1140/epja/s10050-024-01466-5 ... Sorry, a shareable link is not currently available for this article. ... Price excludes VAT (USA) Tax calculation will be finalised during checkout.\n\nGonzales-Miret, A. Porro, T., A. Roux, S. Sainato, A. Scalesi, V. Somá, P. Tamagno, L. Zurek, Pan@cea solver for the nuclear many-body problem, in preparation (2025) A. Tichai, J. Müller, K. Vobig, R. Roth, Natural orbitals for ab initio no-core shell model calculations. Phys. Rev. C 99, 034321 (2019). https://doi.org/10.1103/PhysRevC.99.034321 ... P.-O. Lowdin, Expansion theorems for the total wave function and extended Hartree–Fock schemes. Rev. Mod. Phys. 32, 328 (1960) ... V. Rotival, T. Duguet, New analysis method of the halo phenomenon in finite many-fermion systems. First applications to medium-mass atomic nuclei, Phys. Rev. C 79, 054308 (2009). arXiv:nucl-th/0702050. https://doi.org/10.1103/PhysRevC.79.054308 · A. Ekström, G. R. Jansen, K. A. Wendt, G. Hagen, T. Papenbrock, B. D. Carlsson, C. Forssén, M. Hjorth-Jensen, P. Navrátil, W.\n\nThese one-body eigenergies are meaningful effective single-particle energies [58, 59] and are routinely evaluated in nuclear structure calculations. The HF basis is both the NAT basis and the BAR basis associated with the HF Slater determinant. The occupations being highly degenerate (step function), such a variable does not authorise an unambiguous ordering. It is thus necessary to use Baranger (i.e. HF) single-particle energies to generate a meaningful ordering of the basis states. As for the large majority of doubly open-shell nuclei computed with ab initio interactions [34], the dHFB solution of \\(^{20}\\)Ne is unpaired. A simple way to enforce pairing correlations among protons is thus to use the even number-parity solution for the neigboring isotone \\(^{21}\\)Na. Given the conclusion of Sect. 3.5 this constitutes a well justified option. Although hardly visible in the linear y-scale of the figure, the validity of this statement has been explicitly verified.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://link.springer.com/article/10.1140/epja/s10050-024-01466-5",
        "search_provider": "anthropic",
        "age": "January 3, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Frontiers | What is ab initio in nuclear theory?",
      "url": "https://www.frontiersin.org/journals/physics/articles/10.3389/fphy.2023.1129094/full",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "frontiersin.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=frontiersin.org",
        "site_name": "Frontiers"
      },
      "is_missing": false,
      "text": "We interpret the ab initio method as employing Lagrangians, Hamiltonians, or energy density functionals based on EFT principles and with degrees of freedom chosen such that it maximizes our predictive capabilities. Ab initio descriptions of atomic nuclei concern the physics of multi-hadron systems in an energy range from keV to a few hundreds of MeV. As such, it is reasonable to start from hadronic degrees of freedom with interactions derived from the Standard Model using the principles of EFT. While hadrons are composite systems, and QCD is the underlying theory of the strong nuclear force, Lattice QCD calculations of two-hadron systems are not yet under control [21, 22]. This might change, and one could imagine computing nuclei ab initio from QCD. Moving the beginning from hadronic degrees of freedom to quarks and gluons would extend the upper limit of the applicable energy scale by several orders of magnitude and thus increase predictive capabilities significantly.\n\nThe literal meaning of the latin term ab initio implies that one starts from the beginning. In computations of atomic nuclei, this means that the relevant degrees of freedom should be quarks and gluons. However, the history of physics tells us that we do not need to know everything to describe something and that we have some freedom in choosing the starting point. As such, we do not necessarily have to employ Standard Model degrees of freedom. In fact, many nuclear properties were successfully analyzed in terms of hadronic degrees of freedom before we even knew about the existence of quarks [1–3]. Today, we know how to explain this using renormalization group (RG) ideas [4, 5]. One may wonder about the exact meaning of the ab initio method and what should constitute the beginning. However, it is safe to say that a hallmark of this approach is its promise of precise and accurate predictions, with quantified uncertainties, across the multiple energy scales relevant to nuclei.\n\nWe interpret the ab initio method as employing Lagrangians, Hamiltonians, or energy density functionals based on EFT principles and with degrees of freedom chosen such that it maximizes our predictive capabilities. Ab initio descriptions of atomic nuclei concern the physics of multi-hadron systems in an energy range from keV to a few hundreds of MeV. As such, it is reasonable to start from hadronic degrees of freedom with interactions derived from the Standard Model using the principles of EFT. While hadrons are composite systems, and QCD is the underlying theory of the strong nuclear force, Lattice QCD calculations of two-hadron systems are not yet under control [21, 22]. This might change, and one could imagine computing nuclei ab initio from QCD. Moving the beginning from hadronic degrees of freedom to quarks and gluons would extend the upper limit of the applicable energy scale by several orders of magnitude and thus increase predictive capabilities significantly.\n\nAssuming that ab initio descriptions of nuclei inherit the physics of the Standard Model via EFT methods, we expect to obtain more reliable predictions compared to complementary and phenomenological approaches. Also, building on an EFT, the ab initio method should be systematically improvable, organizing the relevant physics according to importance following the principles of power counting. To use this advantage, we must obtain observables using numerically exact methods or, if necessary, using controlled approximations that allow for a systematic analysis. By controlled approximations, we mean ignoring, in a graded way, what we believe to be less essential physics. Doing so, we obtain a handle on what we discard and a more meaningful estimate of our prediction uncertainty. We would like to emphasize the distinction between ignored physics and unresolved physics.\n\nThis recipe for improvement is what we seek in an ab initio method. Unfortunately, the convergence pattern might be irregular and vary significantly depending on the observable considered. For example, a rapid convergence for the ground- and first excited-state energies does not imply that their respective wave functions yield a converged description of non-stationary observables [130]. Convergence must be inspected empirically by either gradually increasing the number of particle-hole excitations, or defining a more appropriate starting point (reference state) for the expansion, see, e.g., Ref. [131]. Understanding this kind of convergence pattern is important for proper uncertainty quantification and remains an open question that requires significant domain knowledge. In Figure 4, we show how the 2p-2h and 3p-3h excitations of the coupled-cluster method contribute to the correlation energy of various closed-shell nuclei.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.frontiersin.org/journals/physics/articles/10.3389/fphy.2023.1129094/full",
        "search_provider": "anthropic",
        "age": "February 7, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[2307.15619] Towards heavy-mass ab initio nuclear structure: Open-shell Ca, Ni and Sn isotopes from Bogoliubov coupled-cluster theory",
      "url": "https://arxiv.org/abs/2307.15619",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "In this Letter, controlled ab initio Bogoliubov coupled cluster (BCC) calculations are performed for the first time, targeting the ground-state of all calcium, nickel and tin isotopes up to mass A ~ 180.\n\nAbstract page for arXiv paper 2307.15619: Towards heavy-mass ab initio nuclear structure: Open-shell Ca, Ni and Sn isotopes from Bogoliubov coupled-cluster theory\n\nView a PDF of the paper titled Towards heavy-mass ab initio nuclear structure: Open-shell Ca, Ni and Sn isotopes from Bogoliubov coupled-cluster theory, by A. Tichai and 1 other authors View PDF · Abstract:Recent developments in nuclear many-body theory enabled the description of open-shell medium-mass nuclei from first principles by exploiting the spontaneous breaking of symmetries within correlation expansion methods. Once combined with systematically improvable inter-nucleon interactions consistently derived from chiral effective field theory, modern ab initio nuclear structure calculations provide a powerful framework to deliver first-principle predictions accompanied with theoretical uncertainties. In this Letter, controlled ab initio Bogoliubov coupled cluster (BCC) calculations are performed for the first time, targeting the ground-state of all calcium, nickel and tin isotopes up to mass A ~ 180.\n\nWhile showing good agreement with available experimental data, the shell structure evolution in neutron-rich isotopes and the location of the neutron drip-lines are predicted. The BCC approach constitutes a key development towards reliable first-principles simulations of heavy-mass open-shell nuclei. From: Pepijn Demol [view email] [v1] Fri, 28 Jul 2023 15:27:44 UTC (1,244 KB) [v2] Fri, 19 Jan 2024 07:38:50 UTC (1,261 KB) [v3] Wed, 24 Jul 2024 10:22:31 UTC (942 KB) ... View a PDF of the paper titled Towards heavy-mass ab initio nuclear structure: Open-shell Ca, Ni and Sn isotopes from Bogoliubov coupled-cluster theory, by A. Tichai and 1 other authors ... arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. Both individuals and organizations that work with arXivLabs have embraced and accepted our values of openness, community, excellence, and user data privacy.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/abs/2307.15619",
        "search_provider": "anthropic",
        "age": "July 24, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What is ab initio in nuclear theory?",
      "url": "https://arxiv.org/pdf/2212.11064",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "loosely bound and unbound nuclei [11–16], and to lepton nucleus scattering in the quasi- elastic energy regime [17–19]. We expect the ab initio method to reliably extrapolate, in a · controlled and systematic way, to regions outside the ones used for inferring the model · parameters. Following the ideas from effective ﬁeld theory (EFT) [20], we interpret the ab · initio method to be a systematically improvable approach for quantitatively describing nuclei · using the ﬁnest resolution scale possible while maximizing its predictive capabilities. A key part · of this interpretation is the possible tension between the two latter aspects. In a nuclear · physics context, we therefore let nucleons, and possibly other relevant hadronic degrees of · freedom, deﬁne the beginning. Lattice quantum chromodynamics (QCD) might one day be · the optimal starting point for predicting nuclear phenomena.\n\nThe literal meaning of the latin term ab initio implies that one starts from the beginning. In computations of atomic nuclei, this means that the relevant degrees of freedom should be · quarks and gluons. However, the history of physics tells us that we do not need to know · everything to describe something and that we have some freedom in choosing the starting · point. As such, we do not necessarily have to employ Standard Model degrees of freedom. In · fact, many nuclear properties were successfully analyzed in terms of hadronic degrees of · freedom before we even knew about the existence of quarks [1–3]. Today, we know how to · explain this using renormalization group (RG) ideas [4, 5]. One may wonder about the exact · meaning of the ab initio method and what should constitute the beginning. However, it is · safe to say that a hallmark of this approach is its promise of precise and accurate predictions, with quantiﬁed uncertainties, across the multiple energy scales relevant to nucl\n\nloosely bound and unbound nuclei [11–16], and to lepton nucleus scattering in the quasi- elastic energy regime [17–19]. We expect the ab initio method to reliably extrapolate, in a · controlled and systematic way, to regions outside the ones used for inferring the model · parameters. Following the ideas from effective ﬁeld theory (EFT) [20], we interpret the ab · initio method to be a systematically improvable approach for quantitatively describing nuclei · using the ﬁnest resolution scale possible while maximizing its predictive capabilities. A key part · of this interpretation is the possible tension between the two latter aspects. In a nuclear · physics context, we therefore let nucleons, and possibly other relevant hadronic degrees of · freedom, deﬁne the beginning. Lattice quantum chromodynamics (QCD) might one day be · the optimal starting point for predicting nuclear phenomena.\n\nHowever, it currently lacks predictive power for describing atomic nuclei [21–25]. We acknowledge that the ab initio method is interpreted differently by different people; see, e.g., Refs. [26–33]. In nuclear physics, the evolution of ab initio and its wide application ... A. Ekström, ... Front. Phys. 11:1129094. ... Jansen , Jiang and Papenbrock. This is an ... Attribution License (CC BY). The use, ... Leinweber (Ref. [35]) and Friar (Ref. [36]) are the earliest published · in the mid-1990s. Since then, an ever-increasing number of authors · have used the term ab initio to characterize their work. In Figure 1, we show a plot of the data for the yearly use of this term in titles and ... The authors of Ref. [34] did not explain what distinguished their · ab initio no-core shell model computations from quite similar earlier · approaches [37, 38] (see also Ref.\n\nAb initio computation of the ... Towards grounding nuclear physics in qcd. Prog Part Nucl Phys (2021) 121:103888. ... Toward a resolution of the NN controversy. In: PoS LATTICE 2021 (2022). p. 098. ... Lattice QCD forces at MPS =469 MeV/c2. Phys Rev C (2018) 97:021303. doi:10.1103/ ... Ekström et al. ... Rev C (1998) 57:3119–28. doi:10.1103/PhysRevC.57.3119 · 39. Barrett BR, Navrátil P, Vary JP. Ab initio no core shell model. Prog Part Nucl Phys · (2013) 69:131–81. doi:10.1016/j.ppnp.2012.10.003 · 40. Wiringa RB, Stoks VGJ, Schiavilla R. Accurate nucleon-nucleon potential with · charge-independence breaking. Phys Rev C (1995) 51:38–51. doi:10.1103/PhysRevC. ... Phys Rev C (2001) 63:024001. doi:10.1103/PhysRevC.63.024001 · 42. Epelbaum E, Hammer HW, Meißner UG. Modern theory of nuclear forces. Rev · Mod Phys (2009) 81:1773–825. doi:10.1103/RevModPhys.81.1773 ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/pdf/2212.11064",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Ab initio symmetry-adapted approaches to nuclear reactions - ScienceDirect",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0146641026000086",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "sciencedirect.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=sciencedirect.com",
        "site_name": "ScienceDirect"
      },
      "is_missing": false,
      "text": "In this review, we discuss recent applications of the ab initio symmetry-adapted no-core shell-model (SA-NCSM) theory for study and prediction of structure and reactions of stable and unstable nuclei from light to medium mass range. We explore structure properties of neutron-rich He, Li, and Mg isotopes, with a focus on nuclear collectivity, clustering, and spectroscopic factors, as well as multi-particle excitations of utmost significance in the proximity of the drip lines. In addition, we present extensions of the SA-NCSM with continuum for determining the microscopic structure of reaction fragments, which enables calculations of reaction cross sections for targets from the lightest ... 6He to 40Ca, rooted in first principles. We illustrate this for neutron and proton elastic scattering, deuteron and alpha capture reactions, and alpha knock-out reactions.\n\nIn this review, we discuss recent applications of the ab initio symmetry-adapted no-core shell-model (SA-NCSM) theory for study and prediction of structure and reactions of stable and unstable nuclei from light to medium mass range. We explore structure properties of neutron-rich He, Li, and Mg isotopes, with a focus on nuclear collectivity, clustering, and spectroscopic factors, as well as multi-particle excitations of utmost significance in the proximity of the drip lines. In addition, we present extensions of the SA-NCSM with continuum for determining the microscopic structure of reaction fragments, which enables calculations of reaction cross sections for targets from the lightest ... 6He to 40Ca, rooted in first principles. We illustrate this for neutron and proton elastic scattering, deuteron and alpha capture reactions, and alpha knock-out reactions.\n\nModeling atomic nuclei and their reactions, starting from the nuclear constituents, protons and neutrons, represents one of the most challenging complexity in physics today. Historically, multiple theoretical approaches have been used to capture the rich variety of experimentally observed nuclear phenomena and properties. Complementary methods have been dedicated to describe specific properties of the empirical data, covering the range from light to heavy isotopes, from structure to reaction observables, from spherical to deformed nuclei, and from short-range physics to long-range collective correlations and clustering. Fortunately, we have now reached state-of-the-art theoretical developments, which, coupled with frontier computational capabilities, allow for a fully microscopic (time-independent) approach that unifies all of the above within a single framework. One such example is the ab initio symmetry-adapted no-core shell-model (SA-NCSM) theory [1], [2], [3], the focus of this rev\n\nIndeed, the medium-mass region is of utmost importance, as it is a major milepost between the light and heavy nuclei. In this region, nuclear systems exhibit properties very similar to those characteristic of heavy nuclei. This represents a unique opportunity to utilize ab initio nuclear simulations to inform the modeling of heavier species. While the heavy nuclei have been reached through a subset of the SA-NCSM theory, namely, by utilizing microscopic interactions (e.g., see 166Er in Ref. [15]), it has come as a surprise that the same physics of one or two dominant shapes governs even lower-mass nuclei, such as ... In addition, the symmetry-adapted concept allows not only to reach heavier nuclei, but also larger spaces in which nucleons reside (referred to as “model spaces”). This makes it ideal for achieving accurate descriptions of nuclear wavefunctions within the nuclear interaction range (the so-called interior), by properly accounting for spatially expanded deformed and clusteri\n\nThe paper is organized as follows. An overview of reaction approaches, along with their important role for understanding the physics of nuclei, is presented in Section 2. The ab initio symmetry-adapted no-core shell model with continuum is discussed in Section 3 with a focus on structure calculations and the role of multi-particle configurations toward the drip line. Section 4 discusses single-nucleon spectroscopic factors that can provide information about the target structure in reactions. The next section presents modeling of neutron and proton elastic scattering, with a focus on the SA-NCSM Green’s function approach, SANCSM/GF (Section 5.1), the SA resonating group method, SA-RGM (Section 5.2), and a Feshbach projection approach to optical potentials (Section 5.3). Proton elastic scattering at intermediate energies for 20Ne and 40Ca targets is discussed in the framework of the multiple scattering theory in Section 5.4.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0146641026000086",
        "search_provider": "anthropic",
        "age": "January 30, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[2510.15171] Ab initio symmetry-adapted approaches to nuclear reactions",
      "url": "https://arxiv.org/abs/2510.15171",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "Abstract:In this review, we discuss recent applications of the ab initio symmetry-adapted no-core shell-model (SA-NCSM) theory for study and prediction of structure and reactions of stable and unstable nuclei from light to medium mass range. We explore structure properties of neutron-rich He, Mg, and Li isotopes, with a focus on nuclear collectivity, clustering, and spectroscopic factors, as well as multi-particle excitations of utmost significance in the proximity of the drip lines. In addition, we present extensions of the SA-NCSM with continuum for determining the microscopic structure of reaction fragments, which enables calculations of reaction cross sections for targets from the lightest $^{4,6}$He to $^{40}$Ca, rooted in first principles. We illustrate this for neutron and proton elastic scattering, deuteron and alpha capture reactions, and alpha knock-out reactions.\n\nAbstract:In this review, we discuss recent applications of the ab initio symmetry-adapted no-core shell-model (SA-NCSM) theory for study and prediction of structure and reactions of stable and unstable nuclei from light to medium mass range. We explore structure properties of neutron-rich He, Mg, and Li isotopes, with a focus on nuclear collectivity, clustering, and spectroscopic factors, as well as multi-particle excitations of utmost significance in the proximity of the drip lines. In addition, we present extensions of the SA-NCSM with continuum for determining the microscopic structure of reaction fragments, which enables calculations of reaction cross sections for targets from the lightest $^{4,6}$He to $^{40}$Ca, rooted in first principles. We illustrate this for neutron and proton elastic scattering, deuteron and alpha capture reactions, and alpha knock-out reactions.\n\nAbstract page for arXiv paper 2510.15171: Ab initio symmetry-adapted approaches to nuclear reactions\n\nFrom: Kristina D. Launey [view email] [v1] Thu, 16 Oct 2025 22:16:34 UTC (11,904 KB) ... View a PDF of the paper titled Ab initio symmetry-adapted approaches to nuclear reactions, by Kristina D Launey and 4 other authors ... arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. Both individuals and organizations that work with arXivLabs have embraced and accepted our values of openness, community, excellence, and user data privacy. arXiv is committed to these values and only works with partners that adhere to them. Have an idea for a project that will add value for arXiv's community? Learn more about arXivLabs. Which authors of this paper are endorsers?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/abs/2510.15171",
        "search_provider": "anthropic",
        "age": "October 16, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "(PDF) Ab Initio Path to Heavy Nuclei",
      "url": "https://www.researchgate.net/publication/259367944_Ab_Initio_Path_to_Heavy_Nuclei",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "We present the ﬁrst ab initio calculations of nuclear ground states up into the domain of heavy nuclei, span- ning the range from 16O to 132 Sn, based on two- plus three-nucleon interactions derived from chiral eﬀective ﬁeld · theory.\n\nWe present the first ab initio calculations of nuclear ground states up into the domain of heavy nuclei, spanning the range from 16-O to 132-Sn based on two- plus three-nucleon interactions derived within chiral effective field theory. We employ the similarity renormalization group for preparing the Hamiltonian and use coupled-cluster theory to solve the many-body problem for nuclei with closed sub-shells. Through an analysis of theoretical uncertainties resulting from various truncations in this framework, we identify and eliminate the technical hurdles that previously inhibited the step beyond medium-mass nuclei, allowing for reliable validations of nuclear Hamiltonians in the heavy regime. Following this path we show that chiral Hamiltonians qualitatively reproduce the systematics of nuclear ground-state energies up to the neutron-rich Sn isotopes.\n\nWe present the ﬁrst ab initio calculations of nuclear ground states up into the domain of heavy nuclei, span- ning the range from 16O to 132 Sn, based on two- plus three-nucleon interactions derived from chiral eﬀective ﬁeld · theory. We employ the similarity renormalization group for preparing the Hamiltonian and use coupled-cluster · theory to solve the many-body problem for nuclei with closed sub-shells. Through an analysis of theoretical · uncertainties resulting from various truncations in this framework, we identify and eliminate the technical hur- dles that previously inhibited the step beyond medium-mass nuclei, allowing for reliable validations of nuclear · Hamiltonians in the heavy regime. Following this path we show that chiral Hamiltonians qualitatively reproduce · the systematics of nuclear ground-state energies up to the neutron-rich Sn isotopes.\n\nUnderstanding nuclear forces, infinite nuclear matter, and finite nuclei within a unified framework has remained a central challenge in nuclear physics for decades. While most \\textit{ab initio} studies employ nonrelativistic Schrödinger-equation frameworks, this work offers a relativistic perspective. Using a leading-order (LO) relativistic chiral interaction, we describe two-nucleon scattering via the Thompson equation, symmetric nuclear matter, and medium-mass nuclei (Ca, Ni, Zr, Sn) via the relativistic Brueckner-Hartree-Fock theory. Systematic uncertainties from regulator cutoffs and interaction parameters are analyzed. The empirical saturation region of nuclear matter is reproduced, and the binding energies and charge radii of medium-mass nuclei agree reasonably well with experimental data, significantly improving the ``Coester line\". These results highlight that the relativistic approach, employing a leading-order chiral force with only four low-energy constants and no three-nuc\n\nIn low-energy nuclear physics applications normal-ordered Hamiltonians consisting of two- and three-nucleon forces are usually truncated at the two-body rank with residual three-nucleon operators being discarded. Benchmark computations have showed that this truncation is accurate, but we lack an understanding about why it works. We show that the normal-ordered two-body truncation is exact for zero-range three-body forces when nuclei are computed using the coupled cluster with singles and doubles method. As the nuclear three-nucleon force is short ranged and a three-body contact is a leading term in effective field theories of quantum chromodynamics, our result provides an analytical basis for the popular normal-ordered two-body approximation. ... ... Remedies like perturbation theory [17,18] require a nearly sign-problem-free interaction as the non-perturbative zeroth order. Meanwhile, recent ab initio calculations found inconsistencies among few-body, manybody, and nuclear matter pred",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/publication/259367944_Ab_Initio_Path_to_Heavy_Nuclei",
        "search_provider": "anthropic",
        "age": "December 19, 2013"
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

Now let me search for the most recent developments, particularly the 208Pb result and the wavefunction matching breakthrough.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-21T09:32:03.579535Z",
  "stop_timestamp": "2026-03-21T09:32:03.895695Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01TX1msftmq6ojsYBDHVSAu9",
  "name": "web_search",
  "input": {
    "query": "ab initio nuclear 208Pb lead wavefunction matching 2024"
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
  "tool_use_id": "toolu_01TX1msftmq6ojsYBDHVSAu9",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Ab initio predictions link the neutron skin of 208Pb to nuclear forces | Nature Physics",
      "url": "https://www.nature.com/articles/s41567-022-01715-8",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nature.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nature.com",
        "site_name": "Nature"
      },
      "is_missing": false,
      "text": "In this paper, we develop a unified ab initio framework to link the physics of nucleon–nucleon scattering and few-nucleon systems to properties of medium- and heavy-mass nuclei up to 208Pb, and ultimately to the nuclear-matter equation of ...\n\nHeavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus 208Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools and emulator technology, we make quantitative predictions for the properties of 208Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics. We explore 109 different nuclear force parameterizations via history matching, confront them with data in select light nuclei and arrive at an importance-weighted ensemble of interactions.\n\nNature Physics - Predictions of the properties of 208Pb from first principles augmented by statistical learning techniques reproduce those seen in experiments but rule out very thick neutron skins.\n\nThe structure and size of neutron stars are linked to the thickness of the neutron skin in atomic nuclei via the neutron-matter equation of state1,2,3. The nucleus 208Pb is an attractive target for exploring this link in both experimental4,5 and theoretical2,6,7 studies owing to the large excess of neutrons and its simple structure. Mean-field calculations predict a wide range for Rskin(208Pb) because the isovector parts of nuclear energy density functionals are not well constrained by binding energies and charge radii2,7,8,9. Additional constraints may be obtained10 by including the electric dipole polarizability of 208Pb, though this comes with a model dependence11 which is difficult to quantify. In general, the estimation of systematic theoretical uncertainties is a challenge for mean-field theory. In contrast, precise ab initio computations, which provide a path to comprehensive uncertainty estimation, have been accomplished for the neutron-matter equation of state12,13,14 and the \n\nIn this paper, we develop a unified ab initio framework to link the physics of nucleon–nucleon scattering and few-nucleon systems to properties of medium- and heavy-mass nuclei up to 208Pb, and ultimately to the nuclear-matter equation of state near saturation density. Our approach to constructing nuclear interactions is based on chiral effective field theory (EFT)20,21,22. In this theory, the long-range part of the strong nuclear force is known and stems from pion exchanges, while the unknown short-range contributions are represented as contact interactions; we also include the Δ isobar degree of freedom23. At next-to-next-to leading order in Weinberg’s power counting, the four pion–nucleon low-energy constants (LECs) are tightly fixed from pion–nucleon scattering data24. The 13 additional LECs in the nuclear potential must be constrained from data.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nature.com/articles/s41567-022-01715-8",
        "search_provider": "anthropic",
        "age": "November 20, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Ab initio predictions link the neutron skin of 208Pb to nuclear forces - PMC",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9537109/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nih.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
        "site_name": "PubMed Central"
      },
      "is_missing": false,
      "text": "The final result of the five history-matching waves is a set of 34 non-implausible samples in the 17-dimensional parameter space of the LECs. We then perform ab initio calculations for nuclear observables in 48Ca and 208Pb, as well as for properties of infinite nuclear matter. We employ the coupled-cluster (CC)12,30,31, in-medium similarity renormalization group (IMSRG)32 and many-body perturbation theory (MBPT) methods to approximately solve the Schrödinger equation and obtain the ground-state energy and nucleon densities of 48Ca and 208Pb. We analyse the model space convergence and use the differences between the CC, IMSRG and MBPT results to estimate the method approximation errors (Methods and Extended Data Figs. 3 and 4). The computational cost of these methods scales (only) polynomially with increasing numbers of nucleons and single-particle orbitals.\n\nHeavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus 208Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools and emulator technology, we make quantitative predictions for the properties of 208Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics. We explore 109 different nuclear force parameterizations via history matching, confront them with data in select light nuclei and arrive at an importance-weighted ensemble of interactions.\n\nThe structure and size of neutron stars are linked to the thickness of the neutron skin in atomic nuclei via the neutron-matter equation of state1–3. The nucleus 208Pb is an attractive target for exploring this link in both experimental4,5 and theoretical2,6,7 studies owing to the large excess of neutrons and its simple structure. Mean-field calculations predict a wide range for Rskin(208Pb) because the isovector parts of nuclear energy density functionals are not well constrained by binding energies and charge radii2,7–9. Additional constraints may be obtained10 by including the electric dipole polarizability of 208Pb, though this comes with a model dependence11 which is difficult to quantify. In general, the estimation of systematic theoretical uncertainties is a challenge for mean-field theory. In contrast, precise ab initio computations, which provide a path to comprehensive uncertainty estimation, have been accomplished for the neutron-matter equation of state12–14 and the neutron\n\nIn this paper, we develop a unified ab initio framework to link the physics of nucleon–nucleon scattering and few-nucleon systems to properties of medium- and heavy-mass nuclei up to 208Pb, and ultimately to the nuclear-matter equation of state near saturation density. Our approach to constructing nuclear interactions is based on chiral effective field theory (EFT)20–22. In this theory, the long-range part of the strong nuclear force is known and stems from pion exchanges, while the unknown short-range contributions are represented as contact interactions; we also include the Δ isobar degree of freedom23. At next-to-next-to leading order in Weinberg’s power counting, the four pion–nucleon low-energy constants (LECs) are tightly fixed from pion–nucleon scattering data24. The 13 additional LECs in the nuclear potential must be constrained from data.\n\nThe final result of the five history-matching waves is a set of 34 non-implausible samples in the 17-dimensional parameter space of the LECs. We then perform ab initio calculations for nuclear observables in 48Ca and 208Pb, as well as for properties of infinite nuclear matter. We employ the coupled-cluster (CC)12,30,31, in-medium similarity renormalization group (IMSRG)32 and many-body perturbation theory (MBPT) methods to approximately solve the Schrödinger equation and obtain the ground-state energy and nucleon densities of 48Ca and 208Pb. We analyse the model space convergence and use the differences between the CC, IMSRG and MBPT results to estimate the method approximation errors (Methods and Extended Data Figs. 3 and 4). The computational cost of these methods scales (only) polynomially with increasing numbers of nucleons and single-particle orbitals.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9537109/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Author Correction: Ab initio predictions link the neutron skin of 208Pb to nuclear forces - PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/38239896/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nih.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
        "site_name": "PubMed"
      },
      "is_missing": false,
      "text": "2024;20(1):169. doi: 10.1038/s41567-023-02324-9. Epub 2023 Nov 20. Baishan Hu # 1 , Weiguang Jiang # 2 , Takayuki Miyagi # 1 3 4 , Zhonghao Sun # 5 6 , Andreas Ekström 2 , Christian Forssén 2 , Gaute Hagen 1 5 6 , Jason D Holt 1 7 , Thomas Papenbrock 5 6 , S Ragnar Stroberg 8 9 , Ian Vernon 10 ... 4 ExtreMe Matter Institute EMMI, GSI Helmholtzzentrum für Schwerionenforschung GmbH, Darmstadt, Germany. 5 Department of Physics and Astronomy, University of Tennessee, Knoxville, TN USA. 6 Physics Division, Oak Ridge National Laboratory, Oak Ridge, TN USA. 7 Department of Physics, McGill University, Montreal, Quebec Canada. 8 Department of Physics, University of Washington, Seattle, WA USA. 9 Physics Division, Argonne National Laboratory, Lemont, IL USA. 10 Department of Mathematical Sciences, Durham University, Durham, UK. ... Ab initio predictions link the neutron skin of 208Pb to nuclear forces.\n\n2024;20(1):169. doi: 10.1038/s41567-023-02324-9. Epub 2023 Nov 20. Baishan Hu # 1 , Weiguang Jiang # 2 , Takayuki Miyagi # 1 3 4 , Zhonghao Sun # 5 6 , Andreas Ekström 2 , Christian Forssén 2 , Gaute Hagen 1 5 6 , Jason D Holt 1 7 , Thomas Papenbrock 5 6 , S Ragnar Stroberg 8 9 , Ian Vernon 10 ... 4 ExtreMe Matter Institute EMMI, GSI Helmholtzzentrum für Schwerionenforschung GmbH, Darmstadt, Germany. 5 Department of Physics and Astronomy, University of Tennessee, Knoxville, TN USA. 6 Physics Division, Oak Ridge National Laboratory, Oak Ridge, TN USA. 7 Department of Physics, McGill University, Montreal, Quebec Canada. 8 Department of Physics, University of Washington, Seattle, WA USA. 9 Physics Division, Argonne National Laboratory, Lemont, IL USA. 10 Department of Mathematical Sciences, Durham University, Durham, UK. ... Ab initio predictions link the neutron skin of 208Pb to nuclear forces.\n\nAdd to Search . 2024;20(1):169. doi: 10.1038/s41567-023-02324-9. Epub 2023 Nov 20. Baishan Hu # 1 , Weiguang Jiang # 2 , Takayuki Miyagi # 1 3 4 , Zhonghao Sun # 5 6 , Andreas Ekström 2 , Christian Forssén 2 , Gaute Hagen 1 5 6 , Jason D Holt 1 7 , Thomas Papenbrock 5 6 , S Ragnar Stroberg 8 9 , Ian Vernon 10 ... 4 ExtreMe Matter Institute EMMI, GSI Helmholtzzentrum für Schwerionenforschung GmbH, Darmstadt, Germany. 5 Department of Physics and Astronomy, University of Tennessee, Knoxville, TN USA. 6 Physics Division, Oak Ridge National Laboratory, Oak Ridge, TN USA. 7 Department of Physics, McGill University, Montreal, Quebec Canada. 8 Department of Physics, University of Washington, Seattle, WA USA. 9 Physics Division, Argonne National Laboratory, Lemont, IL USA. 10 Department of Mathematical Sciences, Durham University, Durham, UK. ... Baishan Hu et al.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pubmed.ncbi.nlm.nih.gov/38239896/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Ab initio predictions link the neutron skin of 208Pb to nuclear forces - PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/36217363/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nih.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nih.gov",
        "site_name": "PubMed"
      },
      "is_missing": false,
      "text": "2. Ab initio posterior predictive distributions for light to heavy nuclei. Model checking is indicated by green (blue) distributions, corresponding to observables used for history-matching (likelihood calibration), while pure predictions are shown as pink distributions. The nuclear observables shown are the quadrupole moment Q, point-proton radii Rp, ground-state energies E (or energy per nucleon E/A), 2+ excitation energy ... + and electric dipole polarizabilities αD. See Extended Data Table 1 for the numerical specification of the experimental data (z), errors (σi), medians (white circle) and 68% credibility regions (thick bar). The prediction for Rskin(208Pb) in the bottom panel is shown on an absolute scale and compared with experimental results using electroweak (purple), hadronic, (red), electromagnetic (green) and gravitational wave (blue) probes (from top to bottom; see Extended Data Fig.\n\nAuthor Correction: Ab initio predictions link the neutron skin of 208Pb to nuclear forces. Hu B, Jiang W, Miyagi T, Sun Z, Ekström A, Forssén C, Hagen G, Holt JD, Papenbrock T, Stroberg SR, Vernon I. Hu B, et al. Nat Phys. 2024;20(1):169. doi: 10.1038/s41567-023-02324-9. Epub 2023 Nov 20. Nat Phys. 2024. PMID: 38239896 Free PMC article. Heavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus 208Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools and emulator technology, we make quantitative predictions for the properties of 208Pb starting\n\nWe explore 109 different nuclear force parameterizations via history matching, confront them with data in select light nuclei and arrive at an importance-weighted ensemble of interactions. We accurately reproduce bulk properties of 208Pb and determine the neutron skin thickness, which is smaller and more precise than a recent extraction from parity-violating electron scattering but in agreement with other experimental probes. This work demonstrates how realistic two- and three-nucleon forces act in a heavy nucleus and allows us to make quantitative predictions across the nuclear landscape. Keywords: Astronomy and astrophysics; Theoretical nuclear physics. ... Competing interestsThe authors declare no competing interests. Fig. 1. Trend of realistic ab initio… · Fig. 1. Trend of realistic ab initio computations for the nuclear A -body problem. ... Fig.\n\n2. Ab initio posterior predictive distributions for light to heavy nuclei. Model checking is indicated by green (blue) distributions, corresponding to observables used for history-matching (likelihood calibration), while pure predictions are shown as pink distributions. The nuclear observables shown are the quadrupole moment Q, point-proton radii Rp, ground-state energies E (or energy per nucleon E/A), 2+ excitation energy ... + and electric dipole polarizabilities αD. See Extended Data Table 1 for the numerical specification of the experimental data (z), errors (σi), medians (white circle) and 68% credibility regions (thick bar). The prediction for Rskin(208Pb) in the bottom panel is shown on an absolute scale and compared with experimental results using electroweak (purple), hadronic, (red), electromagnetic (green) and gravitational wave (blue) probes (from top to bottom; see Extended Data Fig.\n\na Correlation of computed Rskin( 208Pb) with the proton-neutron 1S0 phase shift δ(1S0) at a laboratory energy of 50 MeV, shown in blue. The error bars represent method and model (EFT) uncertainties. The green band indicates the experimental phase shift, while the purple line (band) indicate the mean result (one-sigma error) of the PREX experiment. The dashed line indicates the linear trend of the ab initio points with r2 the coefficient of determination. b Correlation of neutron skin Rskin( 208Pb) vs slope of the symmetry energy L. Relativistic and non-relativistic mean-field calculations are indicated with open symbols, while ab initio results using the 34 non-implausible samples are indicated with filled circles. Experimental extractions of Rskin( 208Pb) shown in the figure are from PREX, MAMI, RCNP, ... ¯, and GW17081736. All of these results involve modeling input as the neutron skin thickness cannot be measured directly.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pubmed.ncbi.nlm.nih.gov/36217363/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Ab initio predictions link the neutron skin of 208Pb to nuclear forces | ORNL",
      "url": "https://www.ornl.gov/publication/ab-initio-predictions-link-neutron-skin-208pb-nuclear-forces",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ornl.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ornl.gov",
        "site_name": "Oak Ridge National Laboratory"
      },
      "is_missing": false,
      "text": "Heavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus 208Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools and emulator technology, we make quantitative predictions for the properties of 208Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics. We explore 109 different nuclear force parameterizations via history matching, confront them with data in select light nuclei and arrive at an importance-weighted ensemble of interactions.\n\nHeavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus 208Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools and emulator technology, we make quantitative predictions for the properties of 208Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics. We explore 109 different nuclear force parameterizations via history matching, confront them with data in select light nuclei and arrive at an importance-weighted ensemble of interactions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.ornl.gov/publication/ab-initio-predictions-link-neutron-skin-208pb-nuclear-forces",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Author Correction: Ab initio predictions link the neutron skin of 208Pb to nuclear forces | Nature Physics",
      "url": "https://www.nature.com/articles/s41567-023-02324-9",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nature.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nature.com",
        "site_name": "Nature"
      },
      "is_missing": false,
      "text": "The fourth sentence in the Discussion now starts “We find that both Rskin (208Pb) = 0.14–0.20 fm and the slope parameter L = 38–69 MeV are strongly correlated with scattering in the 1S0 partial wave for laboratory energies around 50 MeV”, replacing the original wording “We find that ...\n\nNature Physics - Author Correction: Ab initio predictions link the neutron skin of 208Pb to nuclear forces\n\nThe initially published version of the paper contained an error. Matrix elements in the normal-ordering procedure of the three-nucleon force were computed incorrectly, which influences results presented in Fig. 3a. The figure has been corrected, and the Source Data file for Fig. 3 has been replaced. These changes have no effect on the conclusions drawn in the article regarding the neutron skin thickness of 208Pb and other properties of finite nuclei.\n\nThe fourth sentence in the Discussion now starts “We find that both Rskin (208Pb) = 0.14–0.20 fm and the slope parameter L = 38–69 MeV are strongly correlated with scattering in the 1S0 partial wave for laboratory energies around 50 MeV”, replacing the original wording “We find that both Rskin (208Pb) = 0.14–0.20 fm and the slope parameter L = 37–66 MeV are strongly correlated with scattering in the 1S0 partial wave for laboratory energies around 50 MeV”. The error also affects results presented in Methods, Extended Data Table 2 and Extended Data Figs. 6–8. The final two sentences in the third paragraph of the “Bayesian machine learning error model” section (in Methods) now read “In this work, we find \\({\\bar{{\\rm{c}}}}_{{PNM}}=0.99\\) and lPNM = 0.88 fm−1 for pure neutron matter and \\({\\bar{{\\rm{c}}}}_{{SNM}}=1.66\\) and \\({l}_{{SNM}}=0.45\\) fm−1 for symmetric nuclear matter.\n\nThis leads to Q = 0.41 when estimating the model errors for E/A in 48Ca and 208Pb”, replacing the original wording “In this work, we find \\({\\bar{{\\rm{c}}}}_{{PNM}}=1.00\\) and \\({l}_{{PNM}}=0.92\\) fm−1 for pure neutron matter and \\({\\bar{{\\rm{c}}}}_{{SNM}}=1.55\\) and lSNM = 0.48 fm−1 for symmetric nuclear matter.” · Furthermore, the fourth sentence after Eq. (14) that reads “The correlation lengths learned from the training data are lme,PNM = 0.83 fm−1 for pure neutron matter and lme,SNM = 0.39 fm−1 for symmetric nuclear matter.” was changed from “The correlation lengths learned from the training data are lme,PNM = 0.81 fm−1 for pure neutron matter and lme,SNM = 0.34 fm−1 for symmetric nuclear matter.” · Finally, the last sentence of the same paragraph now starts with “Here we simply used \\(0.83\\) fm−1 (0.39 fm−1) as the correlation length …” which was changed from the original text “Here we simply used \\(0.81\\) fm−1 (0.34 fm−1) as the correlation length …”. All results that involve pr",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nature.com/articles/s41567-023-02324-9",
        "search_provider": "anthropic",
        "age": "November 20, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Wavefunction matching for solving quantum many-body problems | Nature",
      "url": "https://www.nature.com/articles/s41586-024-07422-z",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nature.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nature.com",
        "site_name": "Nature"
      },
      "is_missing": false,
      "text": "Here we address the problem by introducing an approach called wavefunction matching. Wavefunction matching transforms the interaction between particles so that the wavefunctions up to some finite range match that of an easily computable interaction.\n\nAb initio calculations have an essential role in our fundamental understanding of quantum many-body systems across many subfields, from strongly correlated fermions1–3 to quantum chemistry4–6 and from atomic and molecular systems7–9 to nuclear physics10–14. One of the primary challenges is to perform accurate calculations for systems where the interactions may be complicated and difficult for the chosen computational method to handle. Here we address the problem by introducing an approach called wavefunction matching. Wavefunction matching transforms the interaction between particles so that the wavefunctions up to some finite range match that of an easily computable interaction. This allows for calculations of systems that would otherwise be impossible owing to problems such as Monte Carlo sign cancellations. We apply the method to lattice Monte Carlo simulations15,16 of light nuclei, medium-mass nuclei, neutron matter and nuclear matter.\n\nAn approach called wavefunction matching transforms particle interactions so that their wavefunctions match those of easily computable interactions, to allow for calculations of quantum many-body systems that would otherwise be difficult or impossible.\n\nNature - An approach called wavefunction matching transforms particle interactions so that their wavefunctions match those of easily computable interactions, to allow for calculations of quantum...\n\nHu, B. et al. Ab initio predictions link the neutron skin of 208Pb to nuclear forces. Nat. Phys. 18, 1196–1200 (2022). ... Stroberg, S. R. et al. A nucleus-dependent valence-space approach to nuclear structure. Phys. Rev. Lett. 118, 032502 (2017). ... Hüther, T., Vobig, K., Hebeler, K., Machleidt, R. & Roth, R. Family of chiral two- plus three-nucleon interactions for accurate nuclear structure studies. Phys. Lett. B 808, 135651 (2020). ... Hoppe, J., Drischler, C., Hebeler, K., Schwenk, A. & Simonis, J. Probing chiral interactions up to next-to-next-to-next-to-leading order in medium-mass nuclei. Phys. Rev. C 100, 024318 (2019). ... Nosyk, Y., Entem, D. R. & Machleidt, R. Nucleon–nucleon potentials from Δ-full chiral effective-field-theory and implications. Phys. Rev. C 104, 054001 (2021). ... Elhatisari, S. et al. Nuclear binding near a quantum phase transition.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nature.com/articles/s41586-024-07422-z",
        "search_provider": "anthropic",
        "age": "May 15, 2024"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "[2112.01125] Ab initio predictions link the neutron skin of ${}^{208}$Pb to nuclear forces",
      "url": "https://arxiv.org/abs/2112.01125",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "Heavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus ${}^{208}$Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools, and emulator technology, we make quantitative predictions for the properties of ${}^{208}$Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics. We explore $10^9$ different nuclear-force parameterisations via history matching, confront them with data in select light nuclei, and arrive at an importance-weighted ensemble of interactions.\n\nHeavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus ${}^{208}$Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools, and emulator technology, we make quantitative predictions for the properties of ${}^{208}$Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics. We explore $10^9$ different nuclear-force parameterisations via history matching, confront them with data in select light nuclei, and arrive at an importance-weighted ensemble of interactions.\n\nAbstract page for arXiv paper 2112.01125: Ab initio predictions link the neutron skin of ${}^{208}$Pb to nuclear forces\n\nView a PDF of the paper titled Ab initio predictions link the neutron skin of ${}^{208}$Pb to nuclear forces, by Baishan Hu and 10 other authors View PDF · Abstract:Heavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus ${}^{208}$Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools, and emulator technology, we make quantitative predictions for the properties of ${}^{208}$Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics.\n\nView a PDF of the paper titled Ab initio predictions link the neutron skin of ${}^{208}$Pb to nuclear forces, by Baishan Hu and 10 other authors ... arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. Both individuals and organizations that work with arXivLabs have embraced and accepted our values of openness, community, excellence, and user data privacy. arXiv is committed to these values and only works with partners that adhere to them. Have an idea for a project that will add value for arXiv's community? Learn more about arXivLabs. Which authors of this paper are endorsers?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/abs/2112.01125",
        "search_provider": "anthropic",
        "age": "August 22, 2022"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What is ab initio in nuclear theory?",
      "url": "https://arxiv.org/pdf/2212.11064",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "nuclei, where they quantiﬁed an ab initio PPD for the neutron- skin thickness in 208Pb. This distribution is conditioned on low- energy data from light- and medium-mass nuclei together with · assigned uncertainties of the employed nuclear interactions and · the many-body methods.\n\nnuclei, where they quantiﬁed an ab initio PPD for the neutron- skin thickness in 208Pb. This distribution is conditioned on low- energy data from light- and medium-mass nuclei together with · assigned uncertainties of the employed nuclear interactions and · the many-body methods. To enable predictions for nuclei with A ≳10, one must use · methods whose computational complexity scales gently with A · and the size of the single-particle basis. Still, these methods must · retain essential many-body physics to describe the observable of · interest. Three-nucleon interactions can be challenging to handle · computationally [127]. Operating with truncated model spaces · and normal-order-approximated interactions goes well with the · ideas of the ab initio method. Here, we exemplify our discussion · using the coupled cluster method [30] with polynomial scaling in ·\n\n58. Hu B, Jiang W, Miyagi T, Sun Z, Ekström A, Forssén C, et al. Ab initio predictions · link the neutron skin of 208pb to nuclear forces. Nat Phys (2022) 18:1196–200. doi:10. 1038/s41567-022-01715-8 · 59. Hagen G, Papenbrock T, Dean DJ, Schwenk A, Nogga A, Włoch M, et al. Coupled- cluster theory for three-body Hamiltonians. Phys Rev C (2007) 76:034302. doi:10.1103/ PhysRevC.76.034302 · 60. Ripoche J, Tichai A, Duguet T. Normal-ordered k-body approximation in particle- number-breaking theories. Eur Phys J A (2020) 56:40. doi:10.1140/epja/s10050-020- 00045-8 · 61. Hagen G, Papenbrock T, Dean DJ. Solution of the center-of-mass problem in · nuclear structure calculations. Phys Rev Lett (2009) 103:062503. doi:10.1103/ PhysRevLett.103.062503 · 62. Parzuchowski NM, Stroberg SR, Navrátil P, Hergert H, Bogner SK. Ab initio · electromagnetic observables with the in-medium similarity renormalization group.\n\nAb initio has been used as a label in nuclear theory for over two decades. Its ... The literal meaning of the latin term ab initio implies that one starts from the beginning. In computations of atomic nuclei, this means that the relevant degrees of freedom should be · quarks and gluons. However, the history of physics tells us that we do not need to know · everything to describe something and that we have some freedom in choosing the starting · point. As such, we do not necessarily have to employ Standard Model degrees of freedom. In · fact, many nuclear properties were successfully analyzed in terms of hadronic degrees of · freedom before we even knew about the existence of quarks [1–3]. Today, we know how to · explain this using renormalization group (RG) ideas [4, 5]. One may wonder about the exact · meaning of the ab initio method and what should constitute the beginning.\n\nelastic energy regime [17–19]. We expect the ab initio method to reliably extrapolate, in a · controlled and systematic way, to regions outside the ones used for inferring the model · parameters. Following the ideas from effective ﬁeld theory (EFT) [20], we interpret the ab · initio method to be a systematically improvable approach for quantitatively describing nuclei · using the ﬁnest resolution scale possible while maximizing its predictive capabilities. A key part · of this interpretation is the possible tension between the two latter aspects. In a nuclear · physics context, we therefore let nucleons, and possibly other relevant hadronic degrees of · freedom, deﬁne the beginning. Lattice quantum chromodynamics (QCD) might one day be · the optimal starting point for predicting nuclear phenomena. Presently, Lattice QCD · continues to provide useful input for EFTs based on hadronic degrees of freedom.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/pdf/2212.11064",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "(PDF) Ab initio predictions link the neutron skin of 208Pb to nuclear forces",
      "url": "https://www.researchgate.net/publication/362854791_Ab_initio_predictions_link_the_neutron_skin_of_208Pb_to_nuclear_forces",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "of the LECs. We then perform ab initio calculations for nuclear · observables in 48Ca and 208Pb, as well as for properties of infinite ... Data Figs. 3 and 4). The computational cost of these methods · scales (only) polynomially with increasing numbers of nucleons · and single-particle orbitals. The main challenge in computing · 208Pb is the vast number of matrix elements of the three-nucleon · (3N) force which must be handled. We overcome this limita- tion by using a recently introduced storage scheme in which we · only store linear combinations of matrix elements directly enter- ing the normal-ordered two-body approximation19 (see Methods ... Fig. 2. The statistical approach that leads to these results is com- posed of three stages. First, history matching identified a set of · 34 non-implausible interaction parameterizations. Second, model ·\n\nHeavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that differ in size by orders of magnitude. The nucleus 208Pb is of particular interest because it exhibits a simple structure and is experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining advances in quantum many-body methods, statistical tools and emulator technology, we make quantitative predictions for the properties of 208Pb starting from nuclear forces that are consistent with symmetries of low-energy quantum chromodynamics. We explore 109 different nuclear force parameterizations via history matching, confront them with data in select light nuclei and arrive at an importance-weighted ensemble of interactions.\n\nAb initio predictions link the neutron skin of 208Pb ... Baishan Hu 1,11, Weiguang Jiang 2,11, Takayuki Miyagi 1,3,4,11, Zhonghao Sun5,6,11, Andreas Ekström2, Christian Forssén 2 ✉ , Gaute Hagen 1,5,6, Jason D. Holt 1,7, Thomas Papenbrock 5,6, S. Ragnar Stroberg8,9 and Ian Vernon10 · Heavy atomic nuclei have an excess of neutrons over protons, which leads to the formation of a neutron skin whose thickness · is sensitive to details of the nuclear force. This links atomic nuclei to properties of neutron stars, thereby relating objects that · differ in size by orders of magnitude. The nucleus 208Pb is of particular interest because it exhibits a simple structure and is · experimentally accessible. However, computing such a heavy nucleus has been out of reach for ab initio theory. By combining · advances in quantum many-body methods, statistical tools and emulator technology, we make quantitative predictions for the ·\n\narrive at an importance-weighted ensemble of interactions. We accurately reproduce bulk properties of 208Pb and determine · the neutron skin thickness, which is smaller and more precise than a recent extraction from parity-violating electron scattering · but in agreement with other experimental probes. This work demonstrates how realistic two- and three-nucleon forces act in a · heavy nucleus and allows us to make quantitative predictions across the nuclear landscape. NATURE PHYSICS | VOL 18 | OCTOBER 2022 | 1196–1200 | www.nature.com/naturephysics ... Content courtesy of Springer Nature, terms of use apply. Rights reserved ... EFT truncation at next-to-next-to leading order, respectively. The · parameter vector θ corresponds to the 17 LECs at this order. The · method error represents, for example, model space truncations and · other approximations in the employed ab initio many-body solv- ers.\n\nof the LECs. We then perform ab initio calculations for nuclear · observables in 48Ca and 208Pb, as well as for properties of infinite ... Data Figs. 3 and 4). The computational cost of these methods · scales (only) polynomially with increasing numbers of nucleons · and single-particle orbitals. The main challenge in computing · 208Pb is the vast number of matrix elements of the three-nucleon · (3N) force which must be handled. We overcome this limita- tion by using a recently introduced storage scheme in which we · only store linear combinations of matrix elements directly enter- ing the normal-ordered two-body approximation19 (see Methods ... Fig. 2. The statistical approach that leads to these results is com- posed of three stages. First, history matching identified a set of · 34 non-implausible interaction parameterizations. Second, model ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/publication/362854791_Ab_initio_predictions_link_the_neutron_skin_of_208Pb_to_nuclear_forces",
        "search_provider": "anthropic",
        "age": "August 22, 2022"
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

Now I have excellent source material. Let me compile a specific, well-sourced answer about the current frontiers.

</details>

Good call — here's what the sources actually say, with specifics.

---

**The frontier is further than I implied.** Here's a method-by-method picture, grounded in published results:

**Coupled Cluster (CC) and IM-SRG — the heaviest reach:**
The landmark result was Hu, Jiang, Miyagi, Sun et al. (Nature Physics, 2022), who performed the first ab initio calculations reaching ²⁰⁸Pb — a doubly magic nucleus with 208 nucleons. They used coupled-cluster, IM-SRG, and many-body perturbation theory together. The main technical challenge for ²⁰⁸Pb was handling the enormous number of three-nucleon force matrix elements, which they overcame using a new storage scheme based on normal-ordered two-body approximations. This was a major milestone — ²⁰⁸Pb is not "medium-mass"; it's firmly a heavy nucleus.

**Bogoliubov Coupled Cluster (BCC) — open-shell isotopic chains:**
Tichai et al. (arXiv: 2307.15619) performed the first ab initio BCC calculations targeting ground states of all calcium, nickel, and tin isotopes up to mass A ≈ 180. This is significant because those are *open-shell* nuclei — much harder than the closed-shell cases that CC and IM-SRG handle most naturally.

**VS-IMSRG — benchmarking near ¹⁰⁰Sn:**
The valence-space IM-SRG (VS-IMSRG) and shell-model coupled-cluster (SMCC) methods have reached the tin isotopes, including the doubly magic ¹⁰⁰Sn and its odd-proton neighbours ⁹⁹In and ¹⁰⁰In. These odd-mass systems are a particularly stringent test because they probe single-particle structure and pairing effects that even–even benchmarks miss.

**NCSM variants — light to medium mass with reactions:**
The symmetry-adapted no-core shell model (SA-NCSM) has been applied to nuclei from ⁴He up to ⁴⁰Ca for reaction cross sections rooted in first principles, covering elastic scattering, deuteron and alpha capture, and knock-out reactions.

**Wavefunction matching — a methodological breakthrough:**
Elhatisari et al. (Nature, 2024) introduced "wavefunction matching," which transforms particle interactions so their wavefunctions match those of easily computable interactions, enabling lattice Monte Carlo simulations that would otherwise suffer from sign cancellations. They applied it to light nuclei, medium-mass nuclei, and nuclear matter within the Nuclear Lattice EFT framework.

**GFMC — precise but limited:**
Green's Function Monte Carlo remains the highest-precision method for light systems, but its exponential scaling still confines it to roughly A ≤ 12.

---

**So the corrected picture is:**

The frontier is **not** just "medium-mass." For closed-shell and near-closed-shell systems, ab initio has reached ²⁰⁸Pb (A = 208). For open-shell isotopic chains, it's been pushed through the tin region (A ≈ 100–180). The *precision* frontier — where you trust the results quantitatively including uncertainty estimates — is still strongest in the calcium-nickel region and below, but the *reach* extends much further than my original statement suggested.

What I should have said is: ab initio methods now span from light nuclei all the way to ²⁰⁸Pb, but the reliability and the types of observables you can compute still depend heavily on which method you use and whether the nucleus has closed shells or not.

Does that fill in the gap, or do you want to dig into any particular method?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0fbc-8eeb-70bc-9a60-2ea1bef64d78",
  "updated_at": "2026-03-21T09:32:40.249018Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0fbc-8eeb-73f2-b1e4-7c5e98c28bf5"
}
```

</details>

### 13. human — 2026-03-21T09:43:35.953597Z

Explain the many-body perturbation theory

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0fc7-5314-732a-93eb-50f18b308fdb",
  "updated_at": "2026-03-21T09:43:35.953597Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0fbc-8eeb-70bc-9a60-2ea1bef64d78"
}
```

</details>

### 14. assistant — 2026-03-21T09:44:18.186302Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to explain many-body perturbation theory (MBPT). They asked for it in the context of our ab initio nuclear physics discussion. Given the Feynman technique skill was used earlier, and the user originally asked for ELI12-style explanations, I should continue with that approach.

Let me read the skill again to make sure I follow the flow.

Actually, I already read it. Let me just follow the 5-step Feynman technique flow.

</details>

## Many-Body Perturbation Theory (MBPT)

**What it is in one sentence:** MBPT is a way to find the answer to a very hard problem by starting from a simpler problem you *can* solve, then adding small corrections, one layer at a time.

---

**The analogy: tuning a guitar by ear.**

Imagine you're tuning a guitar. You start by getting each string *roughly* in tune — close enough that you can hear a recognizable chord. That's your starting point.

But now you notice: when you press two strings at the same time, one sounds slightly off. So you make a tiny adjustment. Then you check three strings together — another tiny adjustment. Each round of corrections gets smaller and smaller, until eventually the whole guitar sounds right.

MBPT works the same way. You start with an approximate answer (each string tuned alone), then systematically correct for what happens when the parts interact with each other (strings resonating together).

---

**Connecting the analogy back to nuclear physics, step by step:**

**Step 1 — The "easy" starting problem (the reference state).**
You begin by pretending each nucleon moves independently in an average field created by all the others. This is essentially the Hartree-Fock (HF) approximation — each nucleon feels a smooth, averaged-out potential, like each guitar string tuned in isolation. The Schrödinger equation for this simplified system *can* be solved. Scientists call this solution the **reference state** or **zeroth-order approximation**.

**Step 2 — Define what you left out (the "perturbation").**
The real nuclear Hamiltonian (the full set of interactions) is more complicated than the smooth average field. The difference between the real Hamiltonian and the simple one is called the **residual interaction** — this is the "perturbation," written as *V*. It contains all the correlations you ignored: nucleons scattering off each other, pairing effects, and so on.

So you split the full problem into:

*H* = *H*₀ + *V*

where *H*₀ is the part you can solve, and *V* is the leftover that makes it hard.

**Step 3 — Add corrections order by order.**
Now you compute corrections in a series:

- **First order:** How does the perturbation *V* shift the energy *directly*? You calculate the expectation value of *V* in your reference state. This is like noticing two strings are slightly off when played together.

- **Second order:** Nucleon pairs get virtually excited out of the reference state into unoccupied orbits, then fall back. You sum over all these possible "virtual excitations." Each one contributes a small energy correction. This is where you capture most of the **correlation energy** — the energy that the mean-field misses. Mathematically, each term looks like a fraction: the square of the matrix element of *V* between states, divided by the energy difference between those states.

- **Third order and beyond:** Higher-order corrections involve more complex virtual processes — three particles scattering simultaneously, or sequences of two-particle excitations. Each order adds smaller corrections, but also costs much more computation.

Scientists label these as MBPT(1), MBPT(2), MBPT(3), and so on.

**Step 4 — When to stop.**
In principle, if you sum *all* orders to infinity, you get the exact answer. In practice, you truncate — usually at second or third order. The key assumption is that *V* is "small" compared to *H*₀, so higher-order terms shrink rapidly. Whether this is actually true depends on how good your reference state is.

---

**Here's what tricks most people:**

They assume MBPT always converges — that adding more orders always gets you closer to the right answer. **This is not guaranteed.** If the perturbation *V* is too large relative to *H*₀ (the residual interaction is not actually "small"), the series can diverge or oscillate. This is exactly why the choice of reference state matters so much. A bad starting point means the corrections don't shrink with each order, and the whole method breaks down.

This is also why, in modern ab initio nuclear physics, MBPT is often not used alone. It's frequently combined with other methods. For example, in the ²⁰⁸Pb calculation by Hu et al. that we discussed, they used MBPT *alongside* coupled-cluster and IM-SRG — using the differences between the three methods to estimate how reliable the results are.

Another subtlety: MBPT is **not variational**. Unlike some other methods, there's no guarantee that your approximate energy is always above (or below) the true energy. So you can't easily bound your error from one side.

---

**Why MBPT is still useful despite its limitations:**

It's computationally cheap compared to coupled-cluster or IM-SRG — especially at low orders like MBPT(2) or MBPT(3). This makes it valuable as a fast diagnostic or a cross-check. It also provides the conceptual backbone for understanding *why* more sophisticated methods work: coupled-cluster theory, for instance, can be understood as summing certain classes of MBPT diagrams to infinite order.

---

So, Reid — if someone asked you "why not just use MBPT for everything instead of coupled-cluster?", what would you tell them?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d0fc7-5314-779d-ab24-4f7d39d9ecce",
  "updated_at": "2026-03-21T09:44:18.186302Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d0fc7-5314-732a-93eb-50f18b308fdb"
}
```

</details>

### 15. human — 2026-03-22T10:00:51.613253Z

Like what the Taylor Expansion does?

Answer to your question:
MBPT yields highly accurate results and is not computationally demanding under certain conditions. However, it does not guarantee convergence as the number of terms increases; the series can diverge or oscillate. Consequently, applying it in appropriate context is essential. It is not a universal solution to every problem.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d14fd-731d-7936-af44-127467bed4ee",
  "updated_at": "2026-03-22T10:00:51.613253Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 204,
      "file_type": "txt",
      "extracted_content": "MBPT works the same way. You start with an approximate answer (each string tuned alone), then systematically correct for what happens when the parts interact with each other (strings resonating together)."
    }
  ],
  "files": [
    {
      "file_uuid": "dba2a055-612d-49c8-80d4-2ef980e1b72d",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019d0fc7-5314-779d-ab24-4f7d39d9ecce"
}
```

</details>

### 16. assistant — 2026-03-22T10:01:24.837228Z

<details>
<summary>Thinking (verbatim)</summary>

Reid is making a connection between MBPT and Taylor expansion, and also answering my explain-back question. Let me address both.

The Taylor expansion analogy is actually quite good — MBPT does have a similar structure of building up corrections order by order. But there are important differences I should highlight.

Then I should evaluate his explain-back answer.

</details>

Yes — that's an excellent connection. The structural similarity is real.

In a Taylor expansion, you approximate a function *f(x)* around a known point *x*₀:

*f(x) = f(x₀) + f'(x₀)(x - x₀) + ½ f''(x₀)(x - x₀)² + ...*

Each term is a higher-order correction that gets smaller **as long as** (x - x₀) is small — meaning you're close to your expansion point.

MBPT has exactly the same logic. Your "expansion point" is the reference state (Hartree-Fock), and the "small quantity" you expand in is the residual interaction *V*. Each order adds corrections involving higher powers of *V*, just like higher derivatives in Taylor's series. And the convergence condition is analogous: the Taylor series diverges outside its radius of convergence, and MBPT diverges when *V* is too large relative to the energy denominators.

The one important difference worth flagging: in a Taylor expansion, the terms are built from derivatives of a single known function. In MBPT, each order involves summing over **all possible virtual excitations** — particles jumping to unoccupied states and back. So the combinatorial complexity grows much faster than Taylor terms. That's why even MBPT(3) is already noticeably more expensive than MBPT(2), while computing a third-order Taylor term is trivial.

---

**On your answer to my question:**

That's solid. You identified both the strength (accuracy at low cost under favorable conditions) and the critical weakness (no convergence guarantee). Your point about using it "in appropriate context" is exactly right — it works best for systems where the reference state already captures most of the physics, so the perturbation is genuinely small.

One thing you could sharpen: *why* coupled-cluster specifically succeeds where MBPT might fail. The key insight is that coupled-cluster **resums certain classes of MBPT diagrams to infinite order** — particularly the "ladder" and "ring" diagrams that dominate nuclear correlations. So instead of hoping that truncating at third order is enough, coupled-cluster captures the most important contributions from *all* orders at once. It's like the difference between keeping the first few terms of a geometric series versus recognizing the closed-form sum 1/(1-x).

---

Want to move on to coupled-cluster itself, or explore another piece of the ab initio landscape?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d14fd-7320-712f-b98d-cc2cbab015a5",
  "updated_at": "2026-03-22T10:01:24.837228Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d14fd-731d-7936-af44-127467bed4ee"
}
```

</details>
