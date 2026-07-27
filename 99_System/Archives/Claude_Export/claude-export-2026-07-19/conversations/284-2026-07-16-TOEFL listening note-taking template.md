# TOEFL listening note-taking template

## Export metadata (verbatim)

```json
{
  "uuid": "e8b3adf0-0113-4ccf-840a-71634df21b1c",
  "name": "TOEFL listening note-taking template",
  "summary": "**Conversation overview**\n\nThe person is preparing for the TOEFL iBT listening section and shared a personal note-taking template for feedback. Claude reviewed the template, provided minor grammar corrections on the person's message phrasing, and then researched the 2026 TOEFL format changes to ensure advice was current rather than based on the older test structure. The conversation established that the 2026 Listening section contains four distinct task types — a quick-response listen-and-choose task, short conversations, announcements, and academic talks — each requiring a different note-taking approach.\n\nClaude proposed reorganizing the person's original single template into a three-template system: Template A for conversations (who/goal → problem or news → reaction/next step with a +/− stance marker), Template B for academic talks (topic → main claim → example/evidence → contrast/exception → \"next time we will…\"), and Template C for announcements (who's affected/type → what changed old-to-new → action/deadline/condition). The person explicitly asked about announcements after Claude had bundled them with conversations in Template A, prompting Claude to correct this by separating announcements into their own dedicated Template C. Practical constraints were noted throughout, including the Home Edition whiteboard marker requirement, which argued for compact slots over detailed diagrams.\n\nThe person's working style shows preference for visual, interactive tools — Claude used interactive HTML widgets with editable input fields, animated example-fill buttons, and practice prompt buttons for each template. A convention was established in the examples: condition words like \"UNLESS\" and \"ONLY IF\" are written in capitals on the whiteboard to flag answer-flipping language. Claude consistently flagged that research sources were test-prep sites rather than official ETS materials, advising verification against official practice tests during the simulation phase.",
  "created_at": "2026-07-16T07:51:15.314674Z",
  "updated_at": "2026-07-16T08:27:18.699451Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-16T07:51:21.179840Z

I am preparing for TOEFL listening. My note template is shown as attached. What is your opinion? Is there anything else we can improve?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69e8-855e-7074-be5c-7c8eaae0afc6",
  "updated_at": "2026-07-16T07:51:21.179840Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "15382305-68d5-4f0a-9f5c-3387cb859f8f",
      "file_name": "1784188211404_attitude.jpg"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-16T07:52:03.255116Z

<details>
<summary>Thinking (verbatim)</summary>

Reid wants feedback on a TOEFL listening note-taking template that organizes information around problem-attitude-solution-reaction, with side notes for goal and reasoning. I should verify the current TOEFL listening format against what I know about the 2026 revamp, flag whether I'm drawing from test-prep sources or official materials, and provide direct corrections where needed—keeping things concise but substantive.

</details>

**Quick language notes on your message:**
- "My note template is shown as attached" → "My note template is attached" or "…is shown in the attachment." ("shown as attached" mixes two constructions.)
- "Is there anything else we can improve?" → "anything else" implies improvements were already made. Here, "Is there anything we could improve?" is more natural.

Before commenting on the template, let me verify what the current TOEFL Listening section actually looks like — the 2026 revamp changed several sections, and I don't want to advise you based on the old format.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-16T07:51:29.286657Z",
  "stop_timestamp": "2026-07-16T07:51:30.080696Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_018H4SHxS5TYqgsYxJcMaBs9",
  "name": "web_search",
  "input": {
    "query": "TOEFL iBT 2026 listening section format changes"
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
  "start_timestamp": "2026-07-16T07:51:30.722595Z",
  "stop_timestamp": "2026-07-16T07:51:30.722609Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_018H4SHxS5TYqgsYxJcMaBs9",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "What Do TOEFL® Test-Takers Need to Know About the New 2026 Listening Format? - Study.com",
      "url": "https://study.com/resources/master-new-toefl-listening.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "study.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=study.com",
        "site_name": "Study.com"
      },
      "is_missing": false,
      "text": "The 2026 TOEFL® Listening section&#x27;s ... model: all test takers start with the same calibration question sets, and the test adjusts the difficulty of subsequent questions based on that initial performance for a fairer, more personalized experience. The 2026 TOEFL® Listening section runs approximately 29 minutes and includes up to 47 items, with shorter audio clips and less buffer time between tasks compared to the previous version...\n\nGet ready for the adaptive TOEFL® Listening 2026 format by taking a timed baseline test, training real-time accuracy and endurance with targeted drills, and simulating the two-stage adaptive flow under a continuous timer while tracking results and adjusting weaknesses. Start practicing now with adaptive-style materials, so you're ready for whatever pathway your test takes. It depends on the test mode. For the TOEFL® iBT Home Edition, ETS explicitly states headphones and earbuds are not allowed, and you must use your computer's built-in audio setup under proctoring rules. If you are testing at a center, equipment is provided under that center's standardized setup. ETS requires Home Edition test takers to use an erasable marker and write notes on either a whiteboard or a blank sheet of paper inside a transparent sheet protector. These rules matter because Listening is fast, and you must stay compliant while still capturing key details quickly and legibly.\n\nThe 2026 TOEFL® Listening section's primary change is its new adaptive model: all test takers start with the same calibration question sets, and the test adjusts the difficulty of subsequent questions based on that initial performance for a fairer, more personalized experience. The 2026 TOEFL® Listening section runs approximately 29 minutes and includes up to 47 items, with shorter audio clips and less buffer time between tasks compared to the previous version. Starting January 2026, the TOEFL® introduces a new section band score of 1 to 6 aligned with the Common European Framework of Reference for Languages (CEFR). Final scores are calculated as the average of all section scores. During a two-year transition period, score reports will also include the traditional 0-120 total score to help institutions interpret results across both formats. The new TOEFL® listening question types are Listen and Choose a Response, Conversation Questions, Announcement Questions, and Academic Talk Questio\n\nWhat the speaker wants (help, confirmation, information, or company), which is the primary signal the 2026 adaptive format tests in short exchanges · The emotion behind the statement (frustration, relief, curiosity) as the tone cues help distinguish correct responses across both Stage 1 and Stage 2 · Any hidden expectation or next step, which is the unstated meaning Listen and Choose a Response is uniquely designed to assess · Conversation questions in the new TOEFL® Listening Section include fast-paced dialogues between students, campus staff, or peers. The tasks focus on listening to verbal cues, the main point, facts and opinions, and agreements and disagreements in exchanges that move quickly and sometimes change direction without warning. Student A: \"Did you submit the lab report already?\" Student B: \"Not yet. The professor extended the deadline to Friday, remember?\"\n\nNo, the two-year validity rule hasn't changed. TOEFL® scores, including the Listening section score, expire two years from the test date regardless of which format was in effect. Scores from tests taken before January 2026 on the 0-120 scale remain valid until their two-year window closes; there is no requirement to retake under the new format if the existing score meets program requirements.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://study.com/resources/master-new-toefl-listening.html"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL 2026 Listening Section: Complete Guide [35-45 Questions] | Writing30 AI | Writing30 - TOEFL® Writing Practice 2026",
      "url": "https://www.writing30.com/blog/toefl-2026-listening-complete-guide",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "writing30.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=writing30.com",
        "site_name": "Writing30 AI"
      },
      "is_missing": false,
      "text": "Instead, you&#x27;ll encounter shorter, more focused audio clips across 4 distinct task types.[3] The section is adaptive—your performance on the first module determines the difficulty of the second module.[5] ... Key Challenge: All content is ...\n\nMaster all 4 listening task types in the new TOEFL 2026 format. Adaptive, 18-27 minutes, 35-45 questions.\n\nMaster the new TOEFL 2026 Listening format. Complete guide to all 4 task types: Choose a Response, Conversations, Announcements & Academic Talks. 18-27 minutes, adaptive format.\n\nTOEFL 2026 writing practice with AI feedback. Practice Build a Sentence, Write an Email & Academic Discussion. Templates, samples & examples.\n\nThe TOEFL 2026 Listening section represents a major departure from the old format.[1] Gone are the 5-7 minute lectures. Instead, you'll encounter shorter, more focused audio clips across 4 distinct task types.[3] The section is adaptive—your performance on the first module determines the difficulty of the second module.[5] ... Key Challenge: All content is audio-only. You will NOT see transcripts on screen. This tests your ability to comprehend spoken English in real-time, including understanding speaker intent, tone, and pragmatic meaning. This task tests pragmatic understanding—your ability to recognize appropriate responses in social and academic contexts. You'll hear a short statement or question (audio only, no text), then select the most appropriate response from 4 written options. ... A) I don't like going to the library. B) Yes, it opens at 10 AM on weekends.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "February 10, 2026",
        "search_provider": "anthropic",
        "url": "https://www.writing30.com/blog/toefl-2026-listening-complete-guide"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The New TOEFL iBT 2026: All the Changes You Need to Know – Affordable English School in Los Angeles | Mentor Language Institute",
      "url": "https://mliesl.edu/contents/the-new-toefl-ibt-2026-all-the-changes-you-need-to-know/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mliesl.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mliesl.edu",
        "site_name": "Mliesl"
      },
      "is_missing": false,
      "text": "The Listening section will also move to a multistage adaptive format, meaning the difficulty of questions will adapt to each test taker’s performance. In the past, the Listening section had 3 lectures and 2 conversations, all following a fixed ...\n\nStarting January 21, 2026, the TOEFL iBT will undergo one of its biggest updates in years. ETS (the organization behind the TOEFL) is redesigning the test to make it shorter, adaptive, and more relevant to real-world academic and daily situations. If you’re planning to take the TOEFL in 2026 or later, understanding these updates is essential. Let’s break down everything you need to know about the new TOEFL format, from section structure to timing and scoring, so you can prepare smarter and stay ahead of the changes. ... Adaptive Testing The Reading and Listening sections will be in a multistage adaptive format. This means that the difficulty of the questions in the next stage of each section will be changed based on a test-taker’s performance in the previous stage. Total Test Time The total test time will be reduced to under 2 hours. Content Focus Content will be updated to include a wider mix of academic topics and more relevant, modern, and fair content, including real-life campus an\n\nThis revised section focuses on spontaneous response and real-time verbal communication skills. ⏱ Estimated time: About 8 minutes (reduced from around 17 minutes) ❓ Total items: 11 total items (instead of 4 tasks) The new TOEFL iBT, starting in January 2026, is changing to enhance efficiency and reinforce practical English skills. With a shorter test time, the introduction of the adaptive format, and new real-world question types, a fresh, targeted study strategy is essential. * Shorter Test Time: Reduced from three hours to under two hours. * Adaptive Testing: The Reading and Listening sections will use a multistage adaptive format. * New Scoring Scale: A new 1-6 banded score (similar to CEFR) will be introduced alongside the traditional 0-120 score. * Enhanced Practicality: Shorter, functional tasks related to real-life campus and daily situations are being added across all four sections.\n\nOrder of Sections On the new version of the test, the order of sections will be Reading, Listening, Writing, and then Speaking. The new TOEFL iBT will continue to have the MyBest score on the score report for a test. As a reminder, MyBest score is a combination of the best scores that a test-taker has gotten on each section of tests that have been taken in the last two years. Previously, the Reading section had two long passages (about 700 words each) and 10 standard questions per passage. Now, ETS is introducing a multistage adaptive format — meaning the difficulty level of questions will adjust based on how you perform as you go. What’s even more interesting is the introduction of three new task types designed to reflect real-life and academic reading experiences: 1. Complete the Words – You will fill in missing letters in academic paragraphs.\n\nThe Listening section will also move to a multistage adaptive format, meaning the difficulty of questions will adapt to each test taker’s performance. In the past, the Listening section had 3 lectures and 2 conversations, all following a fixed format. Starting January 2026, the section becomes more dynamic with four new task types combining academic and conversational listening: 1. Listen and Choose a Response – You will hear a short statement or question and select the appropriate response. The text is not shown on screen — you will only be able to hear the statement or question.. 2. Listen to a Conversation – Short everyday or campus-life conversations (e.g., student-to-student). Each conversation is followed by 2 multiple-choice questions. 3. Listen to an Announcement – Campus or classroom announcements (40–85 words). Each one is followed by several multiple-choice questions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://mliesl.edu/contents/the-new-toefl-ibt-2026-all-the-changes-you-need-to-know/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "New TOEFL Format Changes 2026 | BestMyTest",
      "url": "https://www.bestmytest.com/blog/new-toefl-format-changes",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bestmytest.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bestmytest.com",
        "site_name": "BestMyTest"
      },
      "is_missing": false,
      "text": "You can now experience the multistage adaptive format yourself. ... Starting January 2026, TOEFL iBT scores will also be available on a simplified 1–6 band scale in addition to the traditional 0–120 scale. This dual-scale system will align more closely with the Common European Framework ...\n\nThe New TOEFL Format Changes 2026 have been officially unveiled, marking a transformative set of updates to the TOEFL iBT® exam. These updates aim to modernize the test experience, improve fairness, and better align with the needs of today’s global learners. The new TOEFL format changes introduced all-new reading, listening, writing, and speaking tasks. The remaining task from the current roster is the most recent writing academic discussion task. In addition, the new TOEFL changes included a multistage adaptive format for the Reading and Listening sections, tailoring question difficulty in real-time based on test-taker performance. This personalized structure ensures that every student receives a fair and accurate measurement of their English ability. Prepare for the New TOEFL Online Preparation Course, where you can experience all the new TOEFL question types right now.\n\nThese enhancements are part of ETS's commitment to evolving the TOEFL iBT to meet the needs of today's diverse and global student population. With the introduction of the Reading and Listening sections' multistage adaptive format, the test will adjust question difficulty in real time based on your responses. To succeed under this new format, it’s essential to sharpen your ability to think critically and adapt to increasingly more challenging material. At BestMyTest, we have already updated our content and simulation tests to the new changes, including the fully adaptive versions of our reading and listening tests. You can now experience the multistage adaptive format yourself. ... Starting January 2026, TOEFL iBT scores will also be available on a simplified 1–6 band scale in addition to the traditional 0–120 scale. This dual-scale system will align more closely with the Common European Framework of Reference for Languages (CEFR), making score interpretation easier for both institution\n\nCollectively, these changes represent ETS’s largest investment to date in enhancing the TOEFL iBT ecosystem. Another major aspect of the Major TOEFL Changes in 2026 is a renewed focus on academic authenticity and cultural neutrality. ETS plans to revamp test content to reflect real-world academic interactions better while minimizing cultural bias. These updates are designed to provide equitable opportunities for students of all backgrounds to succeed. With the TOEFL Changes 2026, ETS is emphasizing its commitment to delivering a globally fair, relevant, and accessible testing experience. For more details, visit the official announcement: ETS Press Release · The new TOEFL format & the new TOEFL changes have made TOEFL much easier. In this article, you'll learn about several · new TOEFL format changes for 2025 updates. A couple of them are quite significant in that it's making TOEFL significantly easier to achieve your target TOEFL score! The first section of this article's research was \n\nTo help you achieve your target score and forget about a single bad section that's costing you your admission into your program of choice, the new TOEFL format has a new score report which includes an IBT MyBest™ score in the report. The IBT MyBest™ score works like this: They select the best scores from each TOEFL section from your previous 2 years and combine them to create your best score possible. For example, let's say you took the TOEFL 4 times in the last 2 years. Now, on the score report, your program would see the following: Many universities have requested this, but please be aware it is not guaranteed your program will accept it, so you’ll need to contact them and ask if they do. The final section of this article was discovered by an exceptional TOEFL teacher named Michael Goodine. He has his own YouTube channel where you can find a ton of great information about TOEFL, including a video on the new TOEFL changes in 2018 & 2019 found here: TOEFLresources YouTube ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "March 22, 2026",
        "search_provider": "anthropic",
        "url": "https://www.bestmytest.com/blog/new-toefl-format-changes"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL 2026 Updates: New Exam Pattern, Scoring Scale, Major Changes",
      "url": "https://www.acadfly.com/blogs/toefl-updates",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "acadfly.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=acadfly.com",
        "site_name": "Acadfly"
      },
      "is_missing": false,
      "text": "The biggest changes in the TOEFL iBT 2026 exam pattern are the introduction of a multi-stage adaptive format in the Reading and Listening sections, and the shift to a new 1–6 Band Scoring Scale.\n\nThe updated TOEFL iBT 2026 structure is designed to be more efficient and showcases university communication in real life. The major modifications include the introduction of adaptive technology in the first two sections and a complete overhaul of question types in all four sections. The TOEFL test changes 2026 introduce new task formats in all four sections to test academic and campus communication skills in real life. Reading and listening now follow an adaptive model of multiple stages. Here, the difficulty and test length of the question differ based on performance. The writing and Speaking sections focus more on practical usage, grammar accuracy, and spontaneous responses. The table below showcases the changes in task types, number of items, and estimated time for each section in the updated TOEFL exam pattern 2026. Note: As the Reading and Listening sections are adaptive, the number of items and time are estimated and may differ based on performance.\n\nThe biggest changes in the TOEFL iBT 2026 exam pattern are the introduction of a multi-stage adaptive format in the Reading and Listening sections, and the shift to a new 1–6 Band Scoring Scale. Additionally, the total test duration has been shortened to approximately 90 minutes. No. While the primary scoring system will be the new 1–6 band scale, for a two-year transition period (2026–2028), ETS will also provide a comparable overall score on the traditional 0–120 scale on the score report. Yes, the Speaking section has been completely revised in the TOEFL test changes 2026. All four old tasks have been replaced with two new tasks: Listen and Repeat and Take an Interview. This section now focuses heavily on spontaneous and real-time verbal communication. In the TOEFL syllabus 2026, the Reading and Listening sections use a multi-stage adaptive format.\n\nTOEFL 2026 updates will apply from January 21, 2026, introducing a shorter 90-minute adaptive TOEFL iBT, new Speaking and Writing tasks, a CEFR-aligned 1–6 band scoring scale, and faster score delivery within 72 hours. ... TOEFL 2026 updates mark a major evolution in the TOEFL iBT exam, aiming to make the test more adaptive, relevant, and aligned with modern academic and professional communication needs. Starting January 21, 2026, test takers worldwide will experience a revamped format, new question types, an adaptive scoring structure, and faster score delivery. Understanding the TOEFL exam 2026 changes is important for effective preparation. For students who are planning their study abroad journey. The important focus of the new structure is to provide an accurate and personalised assessment of the English language proficiency of the candidate.\n\nThe overall TOEFL syllabus for 2026 still covers the four core skills, including Reading, Listening, Speaking, and Writing. The content has been modernised to reflect current academic environments. One of the significant TOEFL 2026 updates is the introduction of a new 1–6 score scale. It is designed to simplify interpretation and align with the international CEFR (Common European Framework of Reference for Languages). New Scale: 1.0 to 6.0 (in 0.5 point increments). Overall Score Calculation: The total score is now the average of the four section scores (Reading, Listening, Speaking, Writing), rounded to the nearest half band. Transition Period: For two years after January 21, 2026, score reports will include the new 1–6 band scores, the CEFR level, and a comparable overall score on the traditional 0–120 scale to ensure smooth acceptance by universities.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "February 27, 2026",
        "search_provider": "anthropic",
        "url": "https://www.acadfly.com/blogs/toefl-updates"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL 2026 changes",
      "url": "https://www.manyagroup.com/blog/toefl/toefl-2026-changes/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "manyagroup.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=manyagroup.com",
        "site_name": "Manya The Princeton Review"
      },
      "is_missing": false,
      "text": "Reading and Listening sections will now be 18-27 minutes long. The adaptive format will reduce the need for unnecessary questions, thereby shortening the test time. The speaking section has been shortened to approximately 8 minutes from 16.\n\nETS has implemented the new TOEFL iBT from 21 January 2026. The revamped version of the English proficiency test, TOEFL iBT 2026, will now have a 6-band scoring system, an adaptive format for Reading and Listening sections, more streamlined tasks for better user experience, shorter test duration and result turnaround time, better audio equipment and expanded study resources. The new TOEFL duration has been shortened from 2 hours to 90 minutes. The scoring scale of 0-120 has been changed to a 1.0-6.0 band scale, aligned with the CEFR. The structure was earlier linear, with fixed difficulty. Now the Reading and Listening sections of the TOEFL iBT format is adaptive, adjusting to the test taker. Earlier, the content was 100% academic. The updated TOEFL has Academic and real-life content. According to the TOEFL website, the changes have been announced as “a fairer, more accessible, smarter and tailored experience.” ·\n\nThe listening section will no longer have only academic speeches and lectures. Rather, you will get to listen to more everyday, real-world communication. ETS has reduced the TOEFL iBT test time to 90 minutes from 2 hours, with no scheduled 10-minute break in between. Effective January 2026, the total test time will now be shortened, thanks to the adaptive format and shorter tasks. Reading and Listening sections will now be 18-27 minutes long. The adaptive format will reduce the need for unnecessary questions, thereby shortening the test time. The speaking section has been shortened to approximately 8 minutes from 16. Writing is now 23 minutes long with streamlined prompts. The new shorter format leads to less mental fatigue with a focus on real-world applications of English. Read Also: TOEFL vs IELTS: Key Differences & Test Comparison · ETS has upgraded the Writing section of the TOEFL iBT to focus on practical, concise communication, rather than lengthy essays that can be confusing an\n\nHowever, the older scale of 0-120 will still be applicable during the transition phase (2026-2028). The test reports will show your score on the 6-band system and the 0-120 scale. ETS has also introduced MyBest scores, which combine the best section performances from the past two years. The older scoring system meant a waiting period of 4–8 days. With the new upgrades, students can get their TOEFL test scores within 72 hours (3 days) or less. Students can access their unofficial Reading and Listening scores immediately on screen at test centres, which provides them with instant feedback. However, they can access the full official score only on the ETS site or via email after the stipulated time. Quick results are incredibly helpful when the students have to race against time to meet application deadlines. It reduces the anxiety of the student and facilitates better planning. Audio equipment for TOEFL iBT has been upgraded since July 2025.\n\nTOEFL will undergo a major shift on 21 January 2026. All TOEFL test centres across the world will bring out new test formats. TOEFL iBT 2026 will have adaptive sectional formats, shorter test duration and result turnaround time, more streamlined questions, and an updated 6-band scoring system. The old TOEFL before 21 January 2026 was 2 hours long, based on academic English, had a linear format and a scoring system out of 120. The new TOEFL iBT 2026 is shorter (approximately 90 minutes), has an adaptive system for Reading and Listening sections, has a 6-band scoring system, and a shorter result turnaround time · No. The new TOEFL is not harder. In fact, the shorter time duration, streamlined questions with less focus on academic content, adaptive format and better equipment make the TOEFL iBT 2026 simpler than its predecessor. The shorter test duration also eases the mental fatigue that comes with longer tests that span 2 hours.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "January 28, 2026",
        "search_provider": "anthropic",
        "url": "https://www.manyagroup.com/blog/toefl/toefl-2026-changes/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Master the TOEFL Listening Section (2026 version) | Test Resources",
      "url": "https://www.toeflresources.com/listening/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "toeflresources.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=toeflresources.com",
        "site_name": "Test Resources"
      },
      "is_missing": false,
      "text": "The TOEFL listening section is now divided into two modules. First is the &quot;routing module.&quot; This is the longest module and the difficulty is the same for everyone. The second module depends on your performance in the routing module.\n\nThe TOEFL listening section is now divided into two modules. First is the \"routing module.\" This is the longest module and the difficulty is the same for everyone. The second module depends on your performance in the routing module. If you do well on the routing module, you get the \"hard module.\n\nListen very carefully for phrases like “next time we will…” or “in our next class…”. Make detailed notes about what is said, as that will be referred to in one of the questions. If your performance is poor in the routing module (approximately less than 60% correct answers) you will be sent to the easy module. It will begin with several “choose a response” questions, which will be followed by conversations and announcements. There will be no academic talks. If your performance is strong in the routing module (approximately more than 60% correct answers) you will be sent to the hard module. It will begin with a small number of “choose a response” questions, which will be followed by conversations, announcements and academic talks. And that’s the end of the new 2026 TOEFL listening section! An unofficial score will be displayed at the end of your test.\n\nThe TOEFL listening section is now divided into two modules. First is the “routing module.” This is the longest module and the difficulty is the same for everyone. The second module depends on your performance in the routing module. If you do well on the routing module, you get the “hard module.” If you do poorly, you get the “easy module.” You should correctly answer about 60% of the questions in the routing module to reach the hard module. Every test is different, but you’ll probably have about 29 minutes to complete both of them. A clock on the screen will display how much time is remaining in the current module. The listening section will contain both scored and unscored questions. You won’t know which is which. This is the longest module. You’ll get a mix of four tasks: “choose a response,” “listen to a conversation,” “listen to an announcement” and “listen to an academic talk.” ·\n\nFinally, you will listen to one or more short academic talks. They’ll be about 90 seconds each and will be followed by five questions. These can be about a variety of topics including psychology, sociology, history, economics, art, etc. ETS says that they are more likely to be about topics that modern test takers are familiar with than the old TOEFL (before 2025). We’ll see. When I took the test in February, one of the was pretty damn obscure. Here’s the transcript of a sample lecture followed by five questions. On test day, of course, you will only hear the lecture. You won’t see the text. Have you ever disagreed with something but stayed silent because you thought you were the only one who didn’t like it? But later it turned out that almost everyone else shared your belief? Well, you may have experienced something that sociologists call “pluralistic ignorance.” This is when our public behavior says “everything’s fine,” while our private beliefs say “I’m confused” or “I don’t like thi",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.toeflresources.com/listening/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL Exam Pattern 2026: 4 Sections, 100 Minutes, New Format",
      "url": "https://www.toeflmocktests.com/blog/toefl-exam-pattern-2026/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "toeflmocktests.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=toeflmocktests.com",
        "site_name": "TOEFLMock"
      },
      "is_missing": false,
      "text": "... The 2026 TOEFL iBT pattern has four sections delivered in a fixed order in a single 100-minute sitting: Reading (35 minutes, around 20 questions across two adaptive modules), Listening (29 minutes, around 28 questions across two adaptive modules...\n\nThird, the Listen and Repeat task in Speaking is being delivered with a 7-second recording window in most testing forms (it was 6 seconds in early 2024 pilot forms), which gives noticeably more buffer time for the second half of longer sentences. If you are using practice materials from late 2024 or early 2025, the 7-second window is what to expect on test day. None of these shifts affects the underlying section structure or the 1-6 band rubric. The vocabulary level, the adaptive routing, and the task types are all unchanged. If you have prepared against the structure described above, the late-May details adjust your timing buffer but do not change your prep plan. ... The 2026 TOEFL iBT pattern has four sections delivered in a fixed order in a single 100-minute sitting: Reading (35 minutes, around 20 questions across two adaptive modules), Listening (29 minutes, around 28 questions across two adaptive modules), Speaking (16 minutes, four tasks split between Listen and Repeat and Take a\n\nYes, but only in the Reading and Listening sections. Each of those sections is split into Stage 1 and Stage 2. Your performance on Stage 1 routes you into either a hard module 2 or an easy module 2 in Stage 2. The hard path is uncapped and can earn the full 6.0 band, while the easy path is capped at band 4.0 even if you answer every question correctly. Speaking and Writing are not adaptive in the same routing sense; they are scored linearly on the rubric. What is the difference between TOEFL iBT 2026 and the older TOEFL pattern? The biggest changes from the pre-2026 TOEFL iBT are total testing time (down from roughly 2 hours to 100 minutes), the introduction of adaptive routing in Reading and Listening, the addition of three new task types (Complete the Words, Listen and Repeat, Build a Sentence), the consolidation of Writing into three shorter tasks instead of two longer ones, the removal of Independent Speaking, and the new 1.0 to 6.0 band scale published alongside the legacy 0 to 12\n\nBand 3 and band 5 Take-an-Interview transcripts plus a Listen-and-Repeat strategy walkthrough View → · Also useful: Vocabulary by topic · University TOEFL scores ... Content is written against the official ETS TOEFL iBT 2026 specification, reviewed twice before publication, and updated when the format changes. See our editorial standards.\n\nTOEFL exam pattern 2026: 4 sections in 100 minutes (Reading 35, Listening 29, Speaking 16, Writing 20), scored on the new 1-6 band scale. Full breakdown.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 month ago",
        "search_provider": "anthropic",
        "url": "https://www.toeflmocktests.com/blog/toefl-exam-pattern-2026/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL 2026 Format Changes | New Scoring & Sections Guide",
      "url": "https://www.toeflmocktests.com/blog/toefl-2026-format-changes/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "toeflmocktests.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=toeflmocktests.com",
        "site_name": "TOEFLMock"
      },
      "is_missing": false,
      "text": "The Listening section features a more compact item set, and the Speaking section introduces two entirely new task formats: Listen &amp; Repeat and the Interview task. Writing remains broadly similar, though time allocations have been tightened.\n\nHome Reading Listening Writing Speaking Score HistoryScore Calculator About Us Contact Us BlogPricingPartnership Enquiries Take Full Test ... The TOEFL iBT underwent its most significant transformation in January 2026. ETS rolled out sweeping changes that affect every aspect of the exam, from the section layout and question types to the scoring rubric and test delivery mechanism. Whether you are just beginning your preparation or retaking the exam, understanding these changes is essential for achieving your target score. ETS announced the 2026 overhaul as part of a broader initiative to make the TOEFL iBT more reflective of real-world academic communication. The redesigned exam is shorter, more technology-driven, and aligned with the Common European Framework of Reference (CEFR). Key motivations behind the update include increasing accessibility, reducing test fatigue, and producing scores that translate clearly across international standards.\n\nThe Listening section features a more compact item set, and the Speaking section introduces two entirely new task formats: Listen & Repeat and the Interview task. Writing remains broadly similar, though time allocations have been tightened. Perhaps the most impactful change for test-takers is the new scoring system. The old 0-30 per-section scale (totaling 0-120) has been replaced with a 1-6 band score for each section. Each band maps directly to a CEFR level: ... This alignment makes TOEFL scores immediately comparable to IELTS and other CEFR-based assessments. Most universities that previously required a total score of 80-100 on the old scale now ask for Band 4 or Band 5 across all sections. The composite score is an average of the four section bands, reported to one decimal place (for example, 4.8). The 2026 TOEFL iBT now employs multi-stage adaptive testing (MST) in the Reading and Listening sections.\n\nThe 2026 TOEFL iBT is a more streamlined, technology-forward exam that prioritizes authentic language use. By understanding the structural changes and adjusting your preparation accordingly, you can approach test day with confidence. Take a free full-length practice test designed for the 2026 TOEFL iBT. Start Free Practice Test · Minimum TOEFL iBT scores at 30 top universities including Harvard, Oxford, Cambridge, and Toronto View → · Band 3 and band 5 sample essays with full rubric breakdown for Email and Academic Discussion tasks View → · Also useful: Vocabulary by topic · Sample speaking responses ... Content is written against the official ETS TOEFL iBT 2026 specification, reviewed twice before publication, and updated when the format changes. See our editorial standards.\n\nRouting also creates a hidden score ceiling on the easy path. For a deep dive into the Stage 1 and Stage 2 mechanics, the band-4.0 cap on the easy module, and exact strategy for the routing block, see our guide on how TOEFL adaptive testing works in 2026. While the Reading and Writing sections remain structurally familiar, the Speaking section has been completely reimagined with two new task types: You hear a sentence or short passage and must reproduce it as accurately as possible. This task measures pronunciation, intonation, stress patterns, and listening accuracy. It replaces the old independent speaking task and takes approximately 3-4 minutes total. An AI-driven conversational prompt presents a scenario, and you respond naturally as if speaking with a professor or classmate. Follow-up questions adapt based on the content of your initial response.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 8, 2026",
        "search_provider": "anthropic",
        "url": "https://www.toeflmocktests.com/blog/toefl-2026-format-changes/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL 2026 Changes",
      "url": "https://toefl.magoosh.com/toefl-2026-changes",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "magoosh.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=magoosh.com",
        "site_name": "Magoosh"
      },
      "is_missing": false,
      "text": "You&#x27;ll also receive a familiar 0-120 score for comparison. Adaptive Reading and Listening. These sections adapt based on how you perform on each section, not each question. Do well on one section, and the next one gets harder. This helps the test measure your true ability faster.\n\nThe TOEFL iBT has a brand-new format as of January 21, 2026, and Magoosh is ready to help you prepare. With Magoosh, you get 100% official TOEFL® questions created by and licensed from ETS, the test maker. Whether you're just starting out or adjusting your study plan, you'll get the authentic practice you need to score your best. Shorter test, same purpose. The new TOEFL takes about 1.5 hours (down from 2 hours) and uses a 1-6 band score aligned with international language standards (CEFR). You'll also receive a familiar 0-120 score for comparison. Adaptive Reading and Listening. These sections adapt based on how you perform on each section, not each question. Do well on one section, and the next one gets harder. This helps the test measure your true ability faster. More real-world content. Expect a mix of academic and everyday scenarios: emails, discussion forums, casual conversations, and simulated interviews alongside traditional lectures and passages.\n\nListening: Lectures and classroom discussions plus daily-life conversations. Writing: New formats including brief emails and academic discussion forum posts. Speaking: Phrase repetition and simulated interview questions alongside traditional speaking tasks. 1,300+ official TOEFL® questions licensed directly from ETS · Full-length practice tests that mirror the real exam · Video lessons covering every question type on the new test ... Study at your own pace, on any device, whenever you have time. See all features and pricing. Your purchase comes with a 7-day money-back guarantee and a score improvement guarantee. ... Magoosh is a play on the Old Persian word magush, one who is highly learned, wise and generous. ... Official TOEFL® questions used under license from ETS. All rights reserved.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://toefl.magoosh.com/toefl-2026-changes"
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

I'm recognizing that the note template shown here is designed for the older TOEFL conversation format, where a student brings a problem to office hours and the professor offers solutions. But the 2026 TOEFL listening section has shifted significantly—it now includes four different task types: a quick response task with minimal time for notes, shorter conversations with just two questions each, brief announcements under 90 seconds, and longer academic lectures around 90 seconds with five questions. The audio clips are noticeably shorter overall with less downtime, so note-taking strategies need to adapt accordingly.

The template works reasonably well for conversations and announcements, but academic talks require a different approach—tracking the topic, main argument, supporting examples, the professor's stance, and any hints about what's coming next. I should also note that these sources are test-prep sites rather than official ETS materials, which is worth flagging. My take is that while this template is solid for the old long-format conversations, it's only partially aligned with 2026's shorter, adaptive clips, so I'd suggest developing task-specific templates with minimal notation and reconsidering the listening-first versus note-taking trade-off given how compressed these new clips are.

</details>

Your template is solid for one specific genre — the classic "student with a problem" conversation — but I want to flag a mismatch with the current test before praising it too much.

**What's good about it**

The problem → attitude / solution / reaction branching captures exactly what conversation questions test: not just *what* was said, but how the speakers *feel* about it (attitude/reaction) and *why* they're talking at all (goal/why). Those pragmatic dimensions — speaker intent and stance — are precisely what the new format emphasizes. Test-prep analysis of the 2026 format highlights that the short-exchange tasks primarily test what the speaker wants (help, confirmation, information), the emotion behind the statement, and hidden expectations or next steps. So conceptually, your categories are well chosen.

**The mismatch: one template, four task types**

The 2026 Listening section no longer consists of long lectures and office-hour conversations where you'd fill in a rich template. It now has four task types: Listen and Choose a Response (a short statement/question, audio only), short conversations followed by 2 multiple-choice questions, announcements of 40–85 words, and academic talks. Audio clips are shorter, with less buffer time between tasks than in the previous version, and academic talks run about 90 seconds each, followed by five questions.

This changes the cost-benefit of note-taking per task:

1. **Listen and Choose a Response** — the clip is a single sentence. Any note-taking here is pure loss; your eyes should be on the four written options, ears on tone and intent. Your template doesn't apply, and that's fine — just consciously *don't* use it here.

2. **Conversations & Announcements** — your template fits, but it's oversized for a 30–60 second clip with 2–3 questions. I'd compress it to three quick slots: **who/goal → problem or news → reaction/next step**. "Attitude" and "reaction" can merge into one slot with a +/− symbol plus one word ("frustrated," "relieved").

3. **Academic talks** — this is where you need a *different* template, and it's missing from yours. For a 90-second talk with 5 questions, I'd suggest: **topic → main claim → example/evidence → contrast or exception → "next time…"**. That last slot matters: one test-prep author who took the new test recommends listening carefully for phrases like "next time we will…" because they get asked about. (This addresses your known weak spot too — the cascading focus-loss happens in exactly these academic talks, and a fixed slot structure gives your attention somewhere to return to after a vocabulary stumble.)

**One more practical constraint** — for the Home Edition, ETS requires notes to be written with an erasable marker on a whiteboard or a sheet inside a transparent sheet protector. Markers are slow and fat-tipped, which is another argument for fewer, larger slots rather than a detailed diagram.

**Sourcing caveat:** everything above comes from test-prep sites (Study.com, TOEFL Resources, Mentor Language Institute), not ETS directly — though the four task types and adaptive structure are consistently reported across all of them, and the TOEFL Resources author reports having taken the actual test in February. Worth verifying against the ETS official free practice test when you reach the simulation phase of your plan.

My overall opinion: keep your template's *categories*, but split it into a two-template system (conversation/announcement vs. academic talk) and shrink each to what a marker on a whiteboard can capture in real time. Want me to mock up the two compact layouts?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69e8-855e-7522-bc61-0fe9a6074a1d",
  "updated_at": "2026-07-16T07:52:03.255116Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f69e8-855e-7074-be5c-7c8eaae0afc6"
}
```

</details>

### 3. human — 2026-07-16T08:04:03.174758Z

Use widget to visualize the templates for case 2 and 3.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69f4-29d6-7696-8f48-d516bb67b6e5",
  "updated_at": "2026-07-16T08:04:03.174758Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f69e8-855e-7522-bc61-0fe9a6074a1d"
}
```

</details>

### 4. assistant — 2026-07-16T08:04:58.152848Z

<details>
<summary>Thinking (verbatim)</summary>

Reid needs a widget to display the two note templates visually. I'm considering whether the concept-visualizer skill is the right fit since it's designed for visual metaphors with stick figures, but this is more of a template layout mockup. I'm leaning toward using the visualize:read_me module with diagram/mockup capabilities instead, though I should verify what the concept-visualizer skill actually does.

Given the user's preference for interactive and dynamic content, I could build an interactive HTML widget with tabs for each template or a demo that walks through filling in the template slots progressively as an audio scenario plays. I'll call read_me with the mockup and interactive modules to get started, assuming a desktop or unknown platform since the user's device isn't specified.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-16T08:04:10.680718Z",
  "stop_timestamp": "2026-07-16T08:04:10.693277Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_012tt1cxjBraApGNV9pReb1Q",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "mockup",
      "interactive"
    ],
    "platform": "desktop"
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
  "start_timestamp": "2026-07-16T08:04:14.716412Z",
  "stop_timestamp": "2026-07-16T08:04:14.716426Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_012tt1cxjBraApGNV9pReb1Q",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji. Icons = Tabler **outline** webfont (5800+, already loaded): `<i class=\"ti ti-home\"></i>`. Outline only — never use `-filled` suffixes (`ti-heart-filled` etc. are not loaded and will render blank). Inherits color + font-size from parent. Decorative icons get `aria-hidden=\"true\"`; icon-only buttons get `aria-label`. Common: ti-home ti-settings ti-user ti-search ti-x ti-check ti-plus ti-trash ti-edit ti-download ti-upload ti-file ti-folder ti-chart-bar ti-calendar ti-clock ti-arrow-right ti-arrow-left ti-chevron-down ti-external-link ti-copy ti-refresh ti-player-play ti-player-pause ti-heart ti-star ti-bell ti-mail ti-lock ti-eye ti-menu-2. Don't hand-draw icon SVG paths.\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-voice)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--radius)` for controls, `12px` for cards. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: Tabler `<i class=\"ti …\">` sizes with `font-size` — 16–20px inline, 24px max decorative. For one-off inline SVG icons, set `width`/`height` explicitly (same limits).\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows. The library `<script src>` tag must come BEFORE any inline script that uses its global — never call a library from code that appears above its `<script src>` tag.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`, `fonts.googleapis.com`, `fonts.gstatic.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Surfaces**: `--surface-2` (white), `--surface-1` (card), `--surface-0` (page bg); role tints `--bg-{accent,danger,success,warning}`\n**Text**: `--text-primary` (black), `--text-secondary` (muted), `--text-muted` (hints); role `--text-{accent,danger,success,warning}`\n**Borders**: `--border` (default hairline), `--border-strong` (hover), `--border-stronger`; role `--border-{accent,danger,success,warning}`\n**Typography**: `--font-sans`, `--font-voice` (serif), `--font-mono`\n**Layout**: `--radius` (8px), `--pad-{sm,md,lg,xl}`, `--gap-{xs,sm,md,lg,xl}`; for larger corners use literal `12px`/`16px`\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--text-primary, --text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## UI components\n\n### Layout width\nThe widget container is 680px wide. Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns — auto-fit lets the grid pick column count by available width.\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--border)` (or `--border-strong` for emphasis)\n- Corner radius: `var(--radius)` for most elements, `12px` for cards\n- Cards: white bg (`var(--surface-2)`), 0.5px border, 12px radius, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px `--border-strong` border, hover `--surface-1`, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--surface-1)`, no border, `border-radius: var(--radius)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--surface-1)` container with `border-radius: 12px` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Each option in a card. Use badges for key differentiators. A leading Tabler icon (`<i class=\"ti ti-NAME\">` at 20px, `aria-hidden`) anchors each option visually — pick the most apt name per option.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--border-accent)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--bg-accent); color: var(--text-accent); font-size: 12px; padding: 4px 12px; border-radius: var(--radius)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--surface-2); border-radius: 12px; border: 0.5px solid var(--border); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--bg-accent); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--text-accent);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--border); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--text-secondary); padding: 4px 0;\"><i class=\"ti ti-mail\" style=\"font-size:16px; vertical-align:-2px; margin-right:6px\" aria-hidden=\"true\"></i>Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--text-accent);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--text-secondary); padding: 4px 0;\"><i class=\"ti ti-phone\" style=\"font-size:16px; vertical-align:-2px; margin-right:6px\" aria-hidden=\"true\"></i>Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n<!-- @generated by apps/cds-docs/scripts/gen-cds-skill.mjs from packages/cds/{CLAUDE.md,docs/**}. Do not edit by hand — edit the source docs and re-run `yarn workspace @ant/cds-docs gen:cds-skill`. -->\n\n# CDS tokens — vanilla\n\nThe Claude Design System token vocabulary for plain HTML/CSS/SVG\nsurfaces without React or Tailwind. Tokens are unprefixed CSS custom\nproperties (`--text-primary`, `--surface-1`, `--border`) declared on\n`:root` by `@ant/cds/tokens.vanilla.css`, with dark-mode overrides under\n`[data-mode=\"dark\"]` and `@media (prefers-color-scheme: dark)`.\n\nReferences below to `CdsRoot`, `Button`, or Tailwind utilities belong to\nthe React build; in vanilla, read a utility like `bg-surface-1` as the\nunderlying `var(--surface-1)`.\n\n## Rules\n\n### Token rule\n\nReference purpose-layer tokens as CSS custom properties:\n\n```css\n/* GOOD */\nbackground: var(--surface-1);\ncolor: var(--text-secondary);\nborder: 0.5px solid var(--border);\n\n/* BAD — raw hex, invisible in dark mode */\ncolor: #3d3d3a;\n```\n\n| Property   | Tokens |\n| ---------- | ------ |\n| Background | `--surface-{0..3,popover,panel}` · `--bg-{accent,danger,success,warning,pro,neutral}` · `--fill-{role}` |\n| Text       | `--text-{primary,secondary,muted,disabled}` · `--text-{accent,danger,success,warning,pro}` · `--on-{role}` |\n| Border     | `--border` (default hairline) · `--border-{strong,stronger}` · `--border-{role}` |\n| Sizing     | `--h-control` · `--pad-{sm,md,lg,xl}` · `--gap-{xs,sm,md,lg,xl}` · `--radius` |\n| Typography | `--font-{sans,mono,voice}` · `--font-size-{caption,footnote,body,code,heading,title}` |\n| Shadow     | `--shadow-{sm,md,lg,popover}` |\n| Motion     | `--dur-{fast,snap,base,slow}` · `--ease-{out,snap,overshoot}` |\n\n### Dark mode rule\n\nDark mode is `[data-mode=\"dark\"]` on `:root` (or `prefers-color-scheme: dark` with no explicit `data-mode`). All tokens flip automatically — never hardcode a dark-mode override.\n\n### Muted text rule\n\nSupporting copy uses `color: var(--text-secondary)`; reserve `var(--text-muted)` for placeholders, captions, and metadata. **Never** `opacity` on text — opacity multiplies against the background and drifts per-surface.\n\n### Accent rule\n\nAt most **one** accent-filled (`variant=\"primary\"`) Button per view; siblings use `secondary` or `ghost`. The `brand` (clay) role is reserved for Claude-initiated actions — send, generate — never ordinary user CTAs.\n\n### Restraint rule\n\nDefault to the quieter, lighter option — \"too cluttered\" is the most common design note.\n\n- `secondary` is the default Button; `primary` / `brand` read as aggressive — don't reach for them in popovers, banners, or dense tool/canvas surfaces.\n- Avoid disabled buttons. Keep them enabled and respond on use (disabled controls are low-contrast and show no tooltip on touch); use `disabledReason` only when you genuinely must disable.\n- Dense lists: bordered rows, not rounded-rect cards.\n\n### Elevation rule\n\n`surface-0` is the page canvas (via `--page-bg`); `1`/`2`/`3` step above it. At most **two** floating elevations (`panel` / `popover`) on screen at once. A third floating layer means `Dialog`, not popover-on-popover. Flat in-flow tiles (`rounded-card bg-surface-1 shadow-card-ring`) have no depth and don't count toward this limit.\n\n---\n\n## CDS principles\n\nHow something feels like Claude — the philosophy behind the tokens. Tokens tell you _what_ you can use; the [Rules](../CLAUDE.md#rules) tell you _how_ to apply them. These principles tell you _why_.\n\n## Claude-native\n\ncds is designed to be authored _by_ Claude as much as _for_ Claude's products. The `CLAUDE.md` you're reading is the system prompt; component docs are structured for retrieval; utilities are named so a model can guess them; the GenerateDemo page proves the loop works. A design system an LLM can use fluently is one humans can use fluently too.\n\n## Clay is Claude's color\n\n`brand` (clay) is reserved for what Claude does — send, generate, the spark mark. User-driven primary actions take the neutral `accent` blue; everything else stays gray. Holding clay back to a single role is what lets it carry meaning instead of becoming wallpaper.\n\n## Serif is Claude's voice\n\nClaude's responses render in serif; the surrounding chrome stays sans. Typography signals who's speaking before a word is read. cds ships `--font-voice` (the `font-voice` utility) for response surfaces.\n\n## Density adapts to the surface\n\nConsole, claude.ai and antfarm share the same components — `compact` for dev tools and power users, `comfortable` for consumer apps. Density is one switch on `CdsRoot`, not a per-component prop, so a product can change its feel without forking a single component.\n\n## Built to be extended\n\nEvery component takes `className`, every token is a public CSS var, and compound parts (`.Root`, `.Item`, `.Trigger`) sit under the porcelain helpers. The system expects you to compose past it — wrap, restyle, slot arbitrary children — not fork it.\n\n## Restraint over options\n\nOne accent per view, one elevation step, t-shirt sizes instead of 0–12 scales. Fewer decisions at the call site means fewer ways for two screens to drift apart — consistency comes from removing knobs, not policing them.\n\n## CDS tokens\n\nEvery visual decision in `@ant/cds` resolves to a `--*` CSS custom property. The TypeScript source of truth lives under `packages/cds/tokens/`; `yarn gen:tokens` emits the shipped CSS at [`src/generated/tokens.css`](../src/generated/tokens.css). Tokens are layered so that a single edit at the bottom (a hex value) propagates through ramps, roles, and purposes without touching component code.\n\n## The layer model\n\n```\n1. Base palette   --{hue}-{stop}      literal hex, mode-stable (gray, red, orange,\n                                          yellow, green, aqua, blue, violet, magenta)\n2. Theme ramps    --neutral-N         gray-N in light, gray-(900-N) in dark\n                  --alpha-N           neutral-900 @ fixed opacity (so it flips too)\n3. Elevation      --surface-{0..3}    0 = darkest, 3 = lightest, in BOTH modes\n4. Purpose        --surface-{popover, what components actually consume; includes the\n                   panel}, --text-*,  role mappings ({fill|bg|border|text}-{role})\n                   --fill-*, --on-*\n—  page-bg        --page-bg           hook the host app sets to its canvas color\n5. Density        --h-control*,       px values; remapped by [data-density]\n                   --pad-*, --gap-*,\n                   --radius, --font-size-*,\n                   --leading-*\n6. Motion         --dur-*,            durations + easing curves (mode/density-invariant)\n                   --ease-*\n```\n\n**Components only read layer 4 (and 5 for sizing).** Layers 1–3 are wiring.\n\n---\n\n## 1. Base palette\n\nLiteral hex values, mode-stable — `gray-500` is the same pixel in light and dark. Nine hues share one 36-stop grid (0, 10–100 by 10, 150–800 by 50, 810–900 by 10); every hue anchors 0 = `#ffffff` and 900 = `#0b0b0b`. Rarely referenced directly — reach for layers 2–4 and let them resolve here.\n\n---\n\n## 2. Theme ramps\n\n`--neutral-N` is `gray-N` in light and `gray-(900-N)` in dark, so `neutral-0` is always the near-background end and `neutral-900` the near-foreground end. Use it for \"contrast against the page\" (text, borders, fills); use `gray-*` when you mean a specific pixel value regardless of mode. `--alpha-N` is `neutral-900` at fixed opacity — a black wash in light, a white wash in dark, without per-mode overrides.\n\n---\n\n## 3. Elevation\n\n| Token             | Light     | Dark       | Use case     |\n| ----------------- | --------- | ---------- | ------------ |\n| `--surface-0` | `gray-20` | `gray-890` | Page         |\n| `--surface-1` | `gray-10` | `gray-830` | In-flow card |\n| `--surface-2` | `gray-0`  | `gray-750` | Panel        |\n| `--surface-3` | `gray-0`  | `gray-700` | Popover      |\n\nThe ordinal is absolute lightness in both modes: 0 is the darkest, 3 the lightest. `--surface-panel` and `--surface-popover` alias levels 2 and 3. The page canvas is the app's own choice — set `--page-bg` so knockout hairlines (focus ring inset, Pulse halo) blend into it; it defaults to `surface-0`.\n\n---\n\n## 4. Purpose\n\n**This is the layer components consume.**\n\n### Roles\n\nEach role maps a semantic meaning to a hue. Property-first pattern: `--fill-{role}` (solid hue-450), `--fill-{role}-hover` (hue-400), `--bg-{role}` (hue-100 / dark hue-800), `--border-{role}` (solid hue-250 in light / hue-700 in dark), `--text-{role}` (600 fg). Warning's fill diverges: yellow-200 / hover yellow-250. Brand uses named `clay-emphasized` / hover `clay` (not hue stops).\n\n| Role      | Hue    | Tokens                                                                                          |\n| --------- | ------ | ----------------------------------------------------------------------------------------------- |\n| `accent`  | blue   | `--fill-accent{,-hover}`, `--bg-accent`, `--border-accent`, `--text-accent`     |\n| `brand`   | clay   | `--fill-brand{,-hover}`, `--on-brand` (fill-only — no text/bg/border)                   |\n| `danger`  | red    | `--fill-danger{,-hover}`, `--bg-danger`, `--border-danger`, `--text-danger`     |\n| `success` | green  | `--fill-success{,-hover}`, `--bg-success`, `--border-success`, `--text-success` |\n| `warning` | yellow | `--fill-warning{,-hover}`, `--bg-warning`, `--border-warning`, `--text-warning` |\n| `pro`     | purple | `--fill-pro{,-hover}`, `--bg-pro`, `--border-pro`, `--text-pro`                 |\n\n#### `git-*` roles\n\nDiff and PR/CR-state colors — `added`, `removed`, `modified`, `conflicting`, `merged`, `closed`, `draft`, plus `opened`/`queued` as aliases of `added`/`modified`. Each carries the full `text` / `fill{,-hover}` / `bg` / `border` / `on` suite. Values come from `@ant/epitaxy`'s `--extended-*` palette (not CDS ramp stops), so migrating claude.ai's diff UI onto these tokens is a rename; `fill` light is the Epitaxy hue darkened just enough for white `on-git-*` to pass AA.\n\n### Background vs. fill\n\nBoth are backgrounds; the split is saturation, and therefore which foreground token pairs on top.\n\n`bg-{role}` is the pale tint (hue-100 light / hue-800 dark) for passive status surfaces — Banner, Badge, chip. Light enough that `text-{role}` (hue-600) reads against it: a danger banner is `bg-danger` + `text-danger`. `fill-{role}` is the saturated solid (hue-450) for interactive controls — button, checkbox, toggle. Too dark for `text-{role}`, so it pairs with `on-{role}` (gray-0 / gray-900) instead; the 450 stop is chosen for WCAG contrast against `on-*`.\n\n|       | Background    | Foreground    | Example       |\n| ----- | ------------- | ------------- | ------------- |\n| Tint  | `bg-{role}`   | `text-{role}` | Banner, Badge |\n| Solid | `fill-{role}` | `on-{role}`   | Button        |\n\nThe token name encodes the pairing: use `bg-*` when the hue is ambient context behind body text; `fill-*` when the hue _is_ the control surface.\n\n### Purpose tokens\n\n| Token                        | Value (light)                                            | Use case                                         |\n| ---------------------------- | -------------------------------------------------------- | ------------------------------------------------ |\n| `--text-primary`         | `neutral-900`                                            | Body text                                        |\n| `--text-secondary`       | `neutral-600`                                            | Supporting text                                  |\n| `--text-muted`           | `neutral-400`                                            | Placeholder, captions                            |\n| `--text-disabled`        | `alpha-4`                                                | Disabled labels                                  |\n| `--border`               | `alpha-2`                                                | Default 1px hairline                             |\n| `--border-strong`        | `alpha-3`                                                | Emphasized divider                               |\n| `--border-stronger`      | `neutral-900 / 40%`                                      | Heavy divider                                    |\n| `--fill-primary`         | `neutral-900`                                            | Primary button bg                                |\n| `--fill-primary-hover`   | `neutral-750`                                            |                                                  |\n| `--fill-secondary`       | `hsl(0 0% 100% / 0.1)`                                   | Secondary button bg                              |\n| `--fill-secondary-hover` | `alpha-1`                                                |                                                  |\n| `--fill-secondary-ring`  | `border` (light) / transparent (dark)                    | Secondary button ring                            |\n| `--fill-field`           | `hsl(0 0% 100% / 0.5)` (light) / `fill-secondary` (dark) | Field control bg (TextInput, TextArea, Combobox) |\n| `--fill-ghost-hover`     | `alpha-1`                                                | Ghost button hover bg                            |\n| `--fill-control`         | `alpha-2`                                                | Avatar fallback bg                               |\n| `--fill-control-hover`   | `alpha-3`                                                |                                                  |\n| `--fill-disabled`        | `alpha-1`                                                | Disabled control bg                              |\n| `--on-primary`           | `neutral-0`                                              | Text on `fill-primary`                           |\n| `--on-accent`            | `gray-0`                                                 | Text on `accent`                                 |\n| `--on-brand`             | `gray-0`                                                 | Text on `brand`                                  |\n| `--on-danger`            | `gray-0`                                                 | Text on `danger`                                 |\n| `--on-success`           | `gray-900`                                               | Text on `success`                                |\n| `--on-warning`           | `gray-900`                                               | Text on `warning`                                |\n| `--on-pro`               | `gray-0`                                                 | Text on `pro`                                    |\n| `--focus-shadow`         | `0 0 0 1px accent, 0 0 6px 1px bg-accent`                | `focus-visible` ring                             |\n| `--shadow-sm`            | two-layer via `--shadow-color`                       | Low elevation                                    |\n| `--shadow-md`            | two-layer via `--shadow-color`                       | Card / panel                                     |\n| `--shadow-lg`            | two-layer via `--shadow-color`                       | Dialog / sheet                                   |\n| `--shadow-popover`       | `0 8px 24px /12%, 0 2px 6px /8%`                         | Menu, dropdown popups                            |\n| `--surface-popover`      | `surface-3`                                              | Named alias                                      |\n| `--surface-panel`        | `surface-2`                                              | Named alias                                      |\n\n`--shadow-sm/md/lg` are two-layer composites (contact + diffused drop) driven by `--shadow-color`, which deepens to `black/24%` in dark mode (epitaxy parity). `--shadow-popover` is a fixed two-layer literal tuned for floating menus.\n\n---\n\n## CDS content\n\nHow to write the words that go inside cds components. Tokens decide how the UI _looks_; this decides how it _sounds_.\n\nThe voice is **intelligent, warm, unvarnished, and collaborative** — your smartest friend explaining something in plain terms. Friendly lives in the copy, not in extra chrome.\n\n## Mechanics\n\n- **Sentence case everywhere.** Buttons, headings, tabs, labels, menu items. \"Save changes\", not \"Save Changes\". Title Case is for proper nouns only (Claude, Opus, Anthropic Console).\n- **No terminal punctuation on labels and headings.** Helper text, descriptions, and empty-state body copy _do_ end with a period.\n- **Use contractions.** \"Can't\", \"you'll\", \"it's\". Conversational, not stiff.\n- **Active voice, verb first.** \"Delete project\", not \"Project deletion\".\n- **Ellipsis = in progress only.** \"Claude is thinking…\". Not for trailing off, not for menu suffixes.\n- **No ampersands.** Spell out \"and\".\n- **Serial comma.** \"Chats, projects, and artifacts.\"\n\n## Pronouns\n\nUI speaks as the product, not as Claude and not as the user.\n\n| Context          | Use               | Example                                                 |\n| ---------------- | ----------------- | ------------------------------------------------------- |\n| User's things    | **your**          | \"Your projects\" — never \"My projects\"                   |\n| Confirmations    | none / past tense | \"Saved\", \"Got it\" — never \"I saved it\"                  |\n| Errors           | **you / your**    | \"Your session expired\" — never \"I couldn't…\"            |\n| Claude (in chat) | **I**             | Reserved for the chat surface; system UI never says \"I\" |\n\n## Words to avoid\n\n| Skip                                        | Why                                   | Instead          |\n| ------------------------------------------- | ------------------------------------- | ---------------- |\n| \"successfully\"                              | The success toast _is_ the success    | \"File uploaded\"  |\n| \"please\"                                    | UI isn't asking a favor               | \"Enter a name\"   |\n| \"Click here\" / \"Tap to…\"                    | Link text should name the destination | \"Read the docs\"  |\n| \"!\" on system copy                          | Reads as shouty                       | \"Settings saved\" |\n| \"leverage\", \"seamless\", \"unlock\", \"empower\" | Corporate filler                      | Say what it does |\n| \"simply\", \"just\", \"easy\"                    | Presumes — and condescends            | Cut it           |\n\n## Patterns\n\n**Buttons / CTAs** — verb first, 1–3 words, sentence case, no punctuation. \"Create project\", \"Upgrade to Pro\". Not \"OK\", \"Submit\", or \"Click to continue\".\n\n**Errors** — say what happened, then what to do. One sentence, no \"Error:\" prefix, no first person. \"That name's already taken. Try another.\" Never surface raw exception strings.\n\n**Empty states** — an invitation, not an apology. Headline names the space (\"Start your first project\"), one-line body explains it, CTA is a verb (\"Create project\"). Skip \"Nothing here yet.\"\n\n**Placeholders** — a real example of valid input (\"name@company.com\", \"Summarize this document\"). No \"e.g.\" prefix, don't repeat the field label.\n\n**Links** — describe where they go (\"Learn more\", \"View pricing\"). Keep them at the end of the sentence; punctuation sits outside the link.\n\n## Do / Don't\n\n| Do                                 | Don't                                  |\n| ---------------------------------- | -------------------------------------- |\n| \"File uploaded\"                    | \"Your file was uploaded successfully!\" |\n| \"Enter a workspace name\"           | \"Please enter a workspace name.\"       |\n| \"Couldn't connect to Slack. Retry\" | \"Error: I was unable to connect.\"      |\n| \"Your projects\"                    | \"My projects\"                          |\n| \"Create project\"                   | \"Click Here To Get Started\"            |\n| \"Connect Slack\"                    | \"Add the Slack Connector\"              |\n\n\nDo not overthink. Try to keep thinking below 500 tokens. If the visual is complex and requires more reasoning effort, consider creating an artifact instead.",
      "uuid": "ae0b8db5-f9bf-4f43-8347-4f5627121224"
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

I'm planning to build an interactive HTML widget with two side-by-side note templates—one for conversations or announcements with fields for who, goal, problem/news, and a reaction, and another for academic talks covering topic, main claim, example, contrast, and next steps. I'll add a "Fill with Example" button for each template that populates the fields step-by-step with a demo scenario.

The interface will use editable input fields and textareas for each slot, with a "Clear" button to reset for practice. I'm styling template A in teal and template B in purple with minimal color accents on labels, laying out the cards in a responsive grid that stacks on smaller screens. The widget will be 680px wide and include a "Give me a practice clip" button for additional prompts.

</details>

<details>
<summary>Thinking (verbatim)</summary>

I've created an interactive widget with two editable templates where you can practice filling in slots, and a "Show example" button that populates them one by one to simulate real-time note-taking.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-16T08:04:27.116265Z",
  "stop_timestamp": "2026-07-16T08:04:48.364167Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_018fGEhTne2W28G7MbFD4oQA",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Sketching the note slots",
      "Sharpening the whiteboard marker",
      "Teaching arrows where to point"
    ],
    "title": "toefl_listening_note_templates",
    "widget_code": "<h2 class=\"sr-only\" style=\"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);\">Two editable TOEFL listening note templates: a compact one for conversations and announcements, and a five-slot one for academic talks, each with an example-fill button.</h2>\n\n<div style=\"display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:16px; padding:1rem 0;\">\n\n  <div style=\"background:var(--surface-2); border:0.5px solid var(--border); border-radius:12px; padding:1rem 1.25rem;\">\n    <div style=\"display:flex; align-items:center; gap:8px; margin-bottom:4px;\">\n      <i class=\"ti ti-messages\" style=\"font-size:20px; color:#0F6E56;\" aria-hidden=\"true\"></i>\n      <p style=\"font-weight:500; font-size:15px; margin:0;\">Template A — conversation / announcement</p>\n    </div>\n    <p style=\"font-size:13px; color:var(--text-secondary); margin:0 0 14px;\">Clip ~30–60 s · 2–3 questions · 3 slots max</p>\n\n    <div style=\"display:flex; flex-direction:column; gap:10px;\">\n      <div>\n        <label style=\"font-size:12px; color:#0F6E56; font-weight:500;\" for=\"a1\">who / goal</label>\n        <input id=\"a1\" placeholder=\"stdnt → advisor: drop class?\" style=\"width:100%;\" />\n      </div>\n      <div>\n        <label style=\"font-size:12px; color:#0F6E56; font-weight:500;\" for=\"a2\">problem or news</label>\n        <input id=\"a2\" placeholder=\"deadline passed, needs form\" style=\"width:100%;\" />\n      </div>\n      <div>\n        <label style=\"font-size:12px; color:#0F6E56; font-weight:500;\" for=\"a3\">reaction / next step (+/− one word)</label>\n        <input id=\"a3\" placeholder=\"− frustrated → email dean\" style=\"width:100%;\" />\n      </div>\n    </div>\n\n    <div style=\"display:flex; gap:8px; margin-top:14px;\">\n      <button onclick=\"fillA()\" style=\"font-size:13px;\"><i class=\"ti ti-player-play\" style=\"font-size:14px;\" aria-hidden=\"true\"></i> Show example</button>\n      <button onclick=\"clearIds(['a1','a2','a3'])\" style=\"font-size:13px;\">Clear</button>\n    </div>\n  </div>\n\n  <div style=\"background:var(--surface-2); border:0.5px solid var(--border); border-radius:12px; padding:1rem 1.25rem;\">\n    <div style=\"display:flex; align-items:center; gap:8px; margin-bottom:4px;\">\n      <i class=\"ti ti-school\" style=\"font-size:20px; color:#534AB7;\" aria-hidden=\"true\"></i>\n      <p style=\"font-weight:500; font-size:15px; margin:0;\">Template B — academic talk</p>\n    </div>\n    <p style=\"font-size:13px; color:var(--text-secondary); margin:0 0 14px;\">Clip ~90 s · 5 questions · 5 slots</p>\n\n    <div style=\"display:flex; flex-direction:column; gap:10px;\">\n      <div>\n        <label style=\"font-size:12px; color:#534AB7; font-weight:500;\" for=\"b1\">topic</label>\n        <input id=\"b1\" placeholder=\"pluralistic ignorance (sociol.)\" style=\"width:100%;\" />\n      </div>\n      <div>\n        <label style=\"font-size:12px; color:#534AB7; font-weight:500;\" for=\"b2\">main claim</label>\n        <input id=\"b2\" placeholder=\"public behavior ≠ private belief\" style=\"width:100%;\" />\n      </div>\n      <div>\n        <label style=\"font-size:12px; color:#534AB7; font-weight:500;\" for=\"b3\">example / evidence</label>\n        <input id=\"b3\" placeholder=\"class silent, all confused\" style=\"width:100%;\" />\n      </div>\n      <div>\n        <label style=\"font-size:12px; color:#534AB7; font-weight:500;\" for=\"b4\">contrast / exception</label>\n        <input id=\"b4\" placeholder=\"but: one voice can break it\" style=\"width:100%;\" />\n      </div>\n      <div>\n        <label style=\"font-size:12px; color:#534AB7; font-weight:500;\" for=\"b5\">\"next time we will…\"</label>\n        <input id=\"b5\" placeholder=\"next: groupthink experiments\" style=\"width:100%;\" />\n      </div>\n    </div>\n\n    <div style=\"display:flex; gap:8px; margin-top:14px;\">\n      <button onclick=\"fillB()\" style=\"font-size:13px;\"><i class=\"ti ti-player-play\" style=\"font-size:14px;\" aria-hidden=\"true\"></i> Show example</button>\n      <button onclick=\"clearIds(['b1','b2','b3','b4','b5'])\" style=\"font-size:13px;\">Clear</button>\n    </div>\n  </div>\n\n</div>\n\n<div style=\"display:flex; gap:8px; margin-top:4px;\">\n  <button onclick=\"sendPrompt('Give me a short TOEFL-style conversation transcript so I can practice filling Template A, then quiz me with 2 questions.')\" style=\"font-size:13px;\">Practice Template A ↗</button>\n  <button onclick=\"sendPrompt('Give me a 90-second TOEFL-style academic talk transcript so I can practice filling Template B, then quiz me with 5 questions.')\" style=\"font-size:13px;\">Practice Template B ↗</button>\n</div>\n\n<script>\nfunction typeInto(id, text, startDelay) {\n  const el = document.getElementById(id);\n  setTimeout(() => {\n    el.value = '';\n    let i = 0;\n    const iv = setInterval(() => {\n      el.value = text.slice(0, ++i);\n      if (i >= text.length) clearInterval(iv);\n    }, 35);\n  }, startDelay);\n}\nfunction fillA() {\n  typeInto('a1', 'stdnt → housing office: room swap', 0);\n  typeInto('a2', 'roommate noisy, no free rooms now', 1400);\n  typeInto('a3', '− disappointed → waitlist, chk Fri', 3000);\n}\nfunction fillB() {\n  typeInto('b1', 'plural. ignorance (sociol.)', 0);\n  typeInto('b2', 'ppl hide doubt, think others agree', 1200);\n  typeInto('b3', 'ex: lecture, no one asks Q', 2700);\n  typeInto('b4', 'but: anonymity reveals true view', 3900);\n  typeInto('b5', 'next: groupthink lab study', 5300);\n}\nfunction clearIds(ids) { ids.forEach(id => document.getElementById(id).value = ''); }\n</script>"
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
  "start_timestamp": "2026-07-16T08:04:48.977029Z",
  "stop_timestamp": "2026-07-16T08:04:48.977038Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_018fGEhTne2W28G7MbFD4oQA",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "dd1221b2-1c07-4c13-bbce-6a2a047db204"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "ddab6d01-94ea-4be3-b8b1-7b79bf1d779b"
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

I should note that abbreviations like "TL;DR" or "ASAP" are commonly used, and I'll keep the explanation brief and practical for quick reference.

</details>

A few usage notes:

- The example fills use marker-friendly shorthand deliberately — `→` for direction, `+/−` for stance, chopped words (`stdnt`, `chk`). On the real whiteboard, aim for that density, not full sentences.
- The gray placeholder text in each empty slot is itself a second example, so you get two model fills per template.
- The two "Practice" buttons at the bottom will ask me to generate a transcript and quiz you — that's the fastest way to test whether the slot structure actually holds up at listening speed. (My transcripts are approximations of the format, not official ETS material, so treat difficulty calibration with some skepticism.)

One honest caveat: the "Show example" typing speed is illustrative, not calibrated to real audio pacing. In a real 90-second talk, you'd have roughly 15–18 seconds of speech per slot, which is tighter than it looks here.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69f4-29d6-7a95-9b73-975efb39c607",
  "updated_at": "2026-07-16T08:04:58.152848Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f69f4-29d6-7696-8f48-d516bb67b6e5"
}
```

</details>

### 5. human — 2026-07-16T08:05:53.722569Z

Give me a short TOEFL-style conversation transcript so I can practice filling Template A, then quiz me with 2 questions.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69f5-e372-759e-a0c3-69c981fe33ab",
  "updated_at": "2026-07-16T08:05:53.722569Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f69f4-29d6-7a95-9b73-975efb39c607"
}
```

</details>

### 6. assistant — 2026-07-16T08:05:53.773706Z

<details>
<summary>Thinking metadata (verbatim)</summary>

```json
{
  "start_timestamp": "2026-07-16T08:05:53.715492Z",
  "stop_timestamp": "2026-07-16T08:05:53.719198Z",
  "flags": null,
  "type": "thinking",
  "thinking": "",
  "summaries": [
    {
      "summary": "Thinking about creating a TOEFL conversation transcript and formulating comprehension questions."
    }
  ],
  "cut_off": false,
  "truncated": false,
  "hidden": false,
  "thinking_hidden": false,
  "alternative_display_type": null,
  "signature": null
}
```

</details>

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f69f5-e372-7ec1-97f9-e6196288e195",
  "updated_at": "2026-07-16T08:05:53.773706Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f69f5-e372-759e-a0c3-69c981fe33ab"
}
```

</details>

### 7. human — 2026-07-16T08:26:31.890920Z

How about the announcement?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6a08-b1a7-7737-a70a-e2f1ee7fa86a",
  "updated_at": "2026-07-16T08:26:31.890920Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f69f4-29d6-7a95-9b73-975efb39c607"
}
```

</details>

### 8. assistant — 2026-07-16T08:27:18.699451Z

<details>
<summary>Thinking (verbatim)</summary>

Reid's questioning whether announcements should have their own template since I grouped them with conversations. Announcements are structured differently—they're monologues with specific information like dates and times, followed by MCQs, rather than the dialogue-based "who/goal → problem → reaction" pattern that fits conversations. I need to reconsider whether announcements need a separate template that captures their format of "who/what → key details → required action."

</details>

Fair challenge — I bundled announcements into Template A, but let me check whether that actually holds up, since an announcement is a monologue, not a dialogue.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-16T08:26:37.755781Z",
  "stop_timestamp": "2026-07-16T08:26:39.108645Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01X79nMbBoovTEx9Mhezc7GV",
  "name": "web_search",
  "input": {
    "query": "TOEFL 2026 \"listen to an announcement\" question types what is tested"
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
  "start_timestamp": "2026-07-16T08:26:39.696434Z",
  "stop_timestamp": "2026-07-16T08:26:39.696447Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01X79nMbBoovTEx9Mhezc7GV",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "TOEFL Listen to an Announcement: Complete Guide | TOEFL 2026 New Format",
      "url": "https://goarno.io/blog/announcement-guide-toefl/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "goarno.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=goarno.io",
        "site_name": "Arno"
      },
      "is_missing": false,
      "text": "Questions usually cover the main purpose and one or two key details, and the detail question very often targets the instruction or action at the end of the announcement. This task sits in the Listening section, which uses a multistage adaptive format. ETS lists the Listening section at about 29 minutes of base time, and because the section is adaptive the exact time can vary. ETS does not publish a separate time limit for this task. Because the section adapts, accurate answers early can route you to a higher module. ... The ending is almost always tested. Announcements close with an instruction or a call to action, such as register by Friday or bring your ID. Listen hardest at the end, not just the start. ... Arno has full TOEFL 2026 practice with instant feedback, at your level and free to start. Build the habit before test day. Try Arno Free → ·\n\nArno The Fastest Way to Prepare for English Proficiency Tests ... Listen to an Announcement is one of the question types in the redesigned TOEFL iBT® Listening section, after the overhaul that took effect on January 21, 2026. The announcements are short, played once, and set on a campus or in a class. The task is a brief spoken announcement followed by a few questions. It is short, but it is built around specific information and an instruction that is easy to miss. This guide explains exactly what the task is, how it is scored using the official ETS numbers, and the strategies that raise your score. What is the \"Listen to an Announcement\" question type? ... According to ETS, in Listen to an Announcement you \"listen to an announcement in an academic or campus setting.\" The task measures your ability to understand the speaker's purpose, key information, implied meaning, and likely next actions.\n\nQuestions usually cover the main purpose and one or two key details, and the detail question very often targets the instruction or action at the end of the announcement. This task sits in the Listening section, which uses a multistage adaptive format. ETS lists the Listening section at about 29 minutes of base time, and because the section is adaptive the exact time can vary. ETS does not publish a separate time limit for this task. Because the section adapts, accurate answers early can route you to a higher module. ... The ending is almost always tested. Announcements close with an instruction or a call to action, such as register by Friday or bring your ID. Listen hardest at the end, not just the start. ... Arno has full TOEFL 2026 practice with instant feedback, at your level and free to start. Build the habit before test day. Try Arno Free → ·\n\nPractice every TOEFL 2026 question type on Arno with instant, specific feedback. Start free and turn the strategies in this guide into points. Start Practicing → · Get free practice questions, full mock tests, and personalized study plans Free practice & study plans Start Practicing → ×\n\nThat is how you turn the tips in this guide into real points on test day. Click here to create your free account! About 6 to 10 items within the 2026 Listening section. The announcements are short and set on a campus or in a class. Each item is machine scored multiple choice and worth a maximum of 1 point. There is no partial credit; an answer is either right or wrong. The main purpose of the announcement and a key detail, very often the instruction or action at the end, such as a deadline or what to bring. One time only. You cannot replay the audio or return to previous items, so active listening is essential. Your ability to understand the speaker's purpose, key information, implied meaning, and the likely next actions. Yes. It was introduced in the TOEFL iBT update that took effect on January 21, 2026, as part of the redesigned Listening section.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 26, 2026",
        "search_provider": "anthropic",
        "url": "https://goarno.io/blog/announcement-guide-toefl/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL Listening Announcement (2026): Format, Question Types, Strategies & Practice",
      "url": "https://lingoleap.ai/toefl/listening-announcement",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "lingoleap.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=lingoleap.ai",
        "site_name": "Lingoleap"
      },
      "is_missing": false,
      "text": "All 6 question types may appear: Main Idea, Factual, Inference, Purpose, Method, and Attitude. How are announcement questions different from conversation questions? Announcements have a single speaker delivering a concise message (40–85 words), ...\n\nThe TOEFL Listening Announcement task presents short campus messages from a single speaker and tests how well you identify key information, understand purpose and context, and make inferences from concise communication. This guide explains the format, common question patterns, strategies, and where to practice. Calibrated against TOEFL single-speaker announcement transcripts and action-item question patterns ... An Announcement is a 40–85 word recorded message — a class reminder, schedule change, library notice, or campus alert — followed by 2 multiple-choice questions. The defining quirk of this task is asymmetry: the speaker often spends the first half explaining background (\"because the heating system is being serviced…\") before delivering the actual announcement (\"the lecture has been moved to room 207\"). Test-takers who weight the first half too heavily lose Main Idea questions; the rule of thumb is that the action verb usually arrives in the back half of the message.\n\nIn the TOEFL Listening section, \"Listen to an Announcement\" is one of 4 task types (alongside Listen & Choose Response, Conversation, and Academic Talk). Each announcement is a short spoken message of 40–85 words delivered by a single speaker in a classroom or campus media context — covering schedules, rules, event information, campus updates, or official notices. Each announcement is followed by 2 multiple-choice questions. The task tests whether you can identify key information such as names, dates, times, locations, and requirements; understand the purpose and context of the message; and make inferences from concise communication. Voices vary across items, so train with several recorded-notice sources rather than only one familiar speaker. For a broader overview of all Listening tasks, see the TOEFL Listening overview or the Listening question types guide.\n\nWhat skills does TOEFL Listening Announcement test? Announcements test three core skill areas: identifying key information (names, dates, times, locations, requirements), understanding purpose and context of the message, and making inferences from concise communication. All 6 question types may appear: Main Idea, Factual, Inference, Purpose, Method, and Attitude. How are announcement questions different from conversation questions? Announcements have a single speaker delivering a concise message (40–85 words), while conversations feature 2 speakers in a dialogue (35–100 words). Both have 2 questions each. Announcements focus on extracting specific information from a one-way message, whereas conversations test your ability to follow an interactive exchange with natural speech patterns. What is the best strategy for TOEFL Listening Announcements?\n\nWith only 2 questions per announcement, take time to read each question fully. One typically tests factual recall while the other tests purpose or inference — they require different approaches. Build your Listening Announcement skills step by step. TOEFL-style Listening practice sets including Announcements.Start practicing → · Announcement-specific techniques and approaches.Read strategies → · Full Listening section format and task types.View overview → · Practice Announcement tasks alongside Conversations, Academic Talks, and more with guided feedback on LingoLeap.Start TOEFL Listening Practice ... Called 'Listen to an Announcement' on the exam, it is one of four task types in the TOEFL Listening section. Each announcement is a short spoken message of 40–85 words delivered by a single speaker in a classroom or campus media context, followed by 2 multiple-choice questions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "March 13, 2026",
        "search_provider": "anthropic",
        "url": "https://lingoleap.ai/toefl/listening-announcement"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL 2026: New Format, Scoring & Prep Guide",
      "url": "https://lingoleap.ai/toefl/2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "lingoleap.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=lingoleap.ai",
        "site_name": "Lingoleap"
      },
      "is_missing": false,
      "text": "For test-takers, adaptivity means the module that follows the router will feel harder or easier depending on router performance. There is no penalty for wrong answers, and you cannot go back to change previous responses in adaptive sections — focus forward. For a deeper analysis of what ETS has and has not confirmed, see our TOEFL MST Strategy guide. Each section of the TOEFL 2026 has its own question types, timing, and scoring criteria. Click a section for the full breakdown: ... Three task types: Complete the Words, Read in Daily Life, and Read an Academic Passage. Stage 2 difficulty adapts to Stage 1 performance. ... Four task types: Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, and Listen to an Academic Talk. Stage 2 adapts to Stage 1. ... Build a Sentence, Write an Email, and Write for an Academic Discussion.\n\nFor test-takers, adaptivity means the module that follows the router will feel harder or easier depending on router performance. There is no penalty for wrong answers, and you cannot go back to change previous responses in adaptive sections — focus forward. For a deeper analysis of what ETS has and has not confirmed, see our TOEFL MST Strategy guide. Each section of the TOEFL 2026 has its own question types, timing, and scoring criteria. Click a section for the full breakdown: ... Three task types: Complete the Words, Read in Daily Life, and Read an Academic Passage. Stage 2 difficulty adapts to Stage 1 performance. ... Four task types: Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, and Listen to an Academic Talk. Stage 2 adapts to Stage 1. ... Build a Sentence, Write an Email, and Write for an Academic Discussion.\n\nETS launched significant changes to the TOEFL iBT effective January 2026. The goals are a shorter, more precise exam that better reflects academic English proficiency — and band scores that are easier for universities and students to interpret. ... Adaptive Reading & Listening. The 2026 ETS blueprint confirms a two-stage router/module design: every test-taker first takes a router, then is placed into either a lower or upper module. ETS has not publicly disclosed the routing thresholds or the exact scoring algorithm. New 1–6 Band Score Scale. Each of the four sections and the overall test are reported as band scores from 1 to 6 in 0.5 increments. The overall score is derived by averaging the four section band scores (per the ETS Technical Manual). Shorter Test Duration. The test is now approximately two hours, down from roughly three hours in the previous format. Fewer questions per section — quality over quantity.\n\nScreenshots of the new TOEFL 2026 task types, captured from official ETS practice materials. Use them to recognize the interface on test day. ... Fill in missing letters to complete words in a short passage. Tests vocabulary recognition and spelling. ... Listen to a short statement or question, then choose the best response. Tests everyday listening. ... Listen to a sentence, then repeat it aloud. Machine-scored against predefined answers — testing pronunciation accuracy and listening precision (7 items). ... Answer interview-style questions. AI-scored on fluency, coherence, grammar, vocabulary, and communication effectiveness (4 items). ... Rearrange words into a grammatically correct sentence. Machine-scored on sentence-level grammar and syntax (10 items). ... Write an email response to a given prompt. AI-scored on organisation, tone, grammar, and communication effectiveness.\n\nDo full-length timed practice tests in a quiet environment. For adaptive sections, use a simulator that adjusts question difficulty. Review every mistake — don't just check the answer, understand why. LingoLeap's TOEFL Speaking practice simulates real test conditions and gives you detailed feedback on every response. Free to start.Start Practicing Free ... ETS launched the redesigned TOEFL iBT in January 2026. If you're registering for a test date from January 2026 onward, you'll take the new format. Check ETS's official site for the exact implementation date for your region. How is the new overall score calculated on the 1–6 scale?⌄ · Per the ETS Technical Manual, the overall test score is the average of the four section band scores (Reading, Listening, Writing, Speaking). Both section scores and the overall score are reported on a 1–6 band scale in 0.5 increments.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 18, 2026",
        "search_provider": "anthropic",
        "url": "https://lingoleap.ai/toefl/2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Announcement Mastery - TOEFL 2026 Listening Guide",
      "url": "https://prepex.ai/toefl/2026/listening/announcement",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "prepex.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=prepex.ai",
        "site_name": "PrepEx AI"
      },
      "is_missing": false,
      "text": "In this task, you hear an announcement related to campus or classroom life, then answer multiple-choice questions about purpose, key details, and implications. You need quick comprehension and selective note taking, not full transcription.\n\nIn this task, you hear an announcement related to campus or classroom life, then answer multiple-choice questions about purpose, key details, and implications. You need quick comprehension and selective note taking, not full transcription. Fact check note: ETS lists Listen to an Announcement as one of the four TOEFL iBT Listening task types in the January 2026 format. ETS also lists Listening at 47 items with about 29 minutes base time for the section. Catch topic, audience, and action items. Record dates, places, changes, conditions. Eliminate distractors tied to partial details. ... Who is speaking and why this message matters now. ... Schedule change, event detail, room update, policy notice. ... What students should do next, by when, and where. ... Office hour, website, email, or help desk contact. Why the announcement was made. Time, location, eligibility, deadline, or required document.\n\nQuestion 1: What is the main purpose of the announcement? ... Use short labels to capture only answer-relevant information. Type: [event / class / policy / facility] Who: [audience] What changed: [room / time / rule] Action: [do what] Deadline: [date/time] Consequence: [if not done] Do not write full sentences. Your notes should be fast markers you can scan while answering. Mistake: Picking an answer with one correct detail but wrong purpose. Fix: Confirm the option matches the whole message, not one keyword. Mistake: Missing condition words like \"unless,\" \"only if,\" or \"will not.\" Fix: Circle condition language in your notes. Mistake: Confusing old information with updated information. Fix: Mark the final version of time or location clearly. Practice 6-8 announcements per day. Label purpose, change, action, deadline in notes. Run timed sets with mixed question types.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://prepex.ai/toefl/2026/listening/announcement"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "2026 TOEFL Format Revealed | Test Resources",
      "url": "https://www.toeflresources.com/blog/2026_toefl_format_revealed/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "toeflresources.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=toeflresources.com",
        "site_name": "Test Resources"
      },
      "is_missing": false,
      "text": "Listen to an announcement. Test takers listen to a campus or classroom announcement and answer multiple-choice questions about it. Listen to an academic talk. Test takers listen to a short lecture (100 to 250 words) and answer multiple-choice ...\n\nETS has announced the new format for the TOEFL iBT. Below is a detailed rundown of what the test will contain starting January 21, 2026. Interestingly, the test will no longer contain integrated questions. Nor will it contain an essay task. As has been noted, this format is extremely similar to the existing TOEFL Essentials Test. For all the details, start reading here. Update: If you are a publisher or test prep company and need some help adjusting to the changes, feel free to reach out: [email protected] ... Complete the Words. This is a “fill in the missing letters” task, like on the Duolingo English Test. The test gives test takers a paragraph from an academic article and the second and third sentences contain words where the second half is missing. They have to deduce the missing part. Read in Daily Life. Test takers read non-academic texts between 15 and 150 words like an email, a text message chain, a memo, a poster, a menu, an invoice, etc.\n\nListen to an announcement. Test takers listen to a campus or classroom announcement and answer multiple-choice questions about it. Listen to an academic talk. Test takers listen to a short lecture (100 to 250 words) and answer multiple-choice questions about it. The test will include multiple of each task. There will be 35 to 45 questions in total. ... Build a Sentence. Test takers unscramble mixed-up sentences. The sentences are part of an exchange between students. Write an email. Test takers have seven minutes to write an email regarding a specific scenario. Writing for an academic discussion. Same as the current TOEFL. Ten minutes to write a post on a class discussion board. ... Listen and Repeat. Test takers listen and repeat seven sentences about a campus or daily life topic. Take an Interview. Test takers are asked four questions about a given topic.\n\n“Human rating remains a critical component of the overall scoring process of TOEFL’s Writing and Speaking tasks because the automated scoring engines are trained on human ratings. Human ratings not only set the standard for machine learning but also provide oversight to ensure the accuracy and reliability of our scoring.” ... We use cookies to improve your experience on our site. By using our site, you consent to cookies. ... Essential cookies enable basic functions and are necessary for the proper function of the website. ... This cookie is used to store the consent settings based on the visitor's location. ... This cookie is used to store the user's cookie consent preferences. ... CloudFlare provides web performance and security solutions, enhancing site speed and protecting against threats. Service URL: developers.cloudflare.com (opens in a new window) ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "October 11, 2025",
        "search_provider": "anthropic",
        "url": "https://www.toeflresources.com/blog/2026_toefl_format_revealed/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL Listening Section 2026: Format, Scoring & Prep",
      "url": "https://study.com/toefl/listening/how-is-the-new-toefl-2026-listening-section-structured.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "study.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=study.com",
        "site_name": "Study.com"
      },
      "is_missing": false,
      "text": "Listen to an Announcement: you hear a short campus or academic announcement and answer questions about the speaker&#x27;s purpose, key information, and likely next actions. Listen to an Academic Talk: you hear a short talk by a professor or expert ...\n\nEach section receives a 1 to 6 band score in 0.5 increments aligned to CEFR levels, with a legacy 0 to 120 total score also reported through the 2026 to 2028 transition period. Efficient prep focuses on the four new task types, a fast note-taking system, timed adaptive practice, and tracking weak question types to reduce total study hours. The TOEFL Listening section measures your ability to understand spoken English in realistic university settings. It assesses your grasp of main ideas, key details, inferences, speaker purpose, and tone across campus conversations, announcements, and short academic talks featuring native-speaker accents in the TOEFL iBT Listening section. ... Listen and Choose a Response: you hear a short spoken prompt and select the most appropriate reply from four written options. This tests pragmatic understanding, including implied meaning and social context.\n\nListen to an Announcement: you hear a short campus or academic announcement and answer questions about the speaker's purpose, key information, and likely next actions. Listen to an Academic Talk: you hear a short talk by a professor or expert and answer questions about main ideas, supporting details, organization, and inferences. Audio clips include accents from North America, the U.K., Australia, and New Zealand. All clips play once with no option to pause or replay, so active listening and note-taking from the first second are essential. You can explore all four task types in the 2026 TOEFL Listening format guide. The 2026 TOEFL Listening section format uses a two-module adaptive design that adjusts to your ability in real time. This approach gives ETS a more precise measure of your comprehension than the old fixed-form test, because the second module targets your demonstrated level rather than presenting the same items to everyone.\n\nThe most efficient way to prepare for the TOEFL Listening section is to practice with the four new task types using authentic academic audio. To improve efficiently, develop a quick note-taking method, drill under real timing pressure, and track your performance by question type so you focus only on the skills that need work. Daily academic listening: use short academic talks, campus-style conversations, and announcement clips to match the 2026 task types. Entertainment audio does not build the specific skills this section tests. Note-taking system: Develop a shorthand that captures main ideas, key details, and signal words quickly. For conversations, split your scratch paper by speaker so you can track who said what. Timed full run-throughs: complete full Listening sections (approximately 29 minutes) with no pausing to build test-day stamina and adaptive pacing.\n\nScore tracking by question type: Log results by skill (main idea, inference, attitude, pragmatic understanding) and by task type (Choose a Response vs. Academic Talk) to identify and target weak areas. Cost-efficient prep: Compare total prep costs and hours across your options. As the Official TOEFL Test Prep Partner of ETS, Study.com offers TOEFL practice tests aligned to the 2026 format, with practice tests that mirror the real exam's task types and timing. Targeted prep that matches the actual test format cuts wasted study hours and gets you to your target band score faster. TOEFL® and TOEFL iBT® are registered trademarks of ETS (Educational Testing Service). At a test center, you receive scratch paper and a pencil for note-taking during the Listening section. For the Home Edition, ETS requires an erasable marker on a whiteboard or blank paper.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://study.com/toefl/listening/how-is-the-new-toefl-2026-listening-section-structured.html"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Free TOEFL Listening Practice Tests 2026 | 16 Tests | TOEFLMock",
      "url": "https://www.toeflmocktests.com/practice-tests/listening/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "toeflmocktests.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=toeflmocktests.com",
        "site_name": "TOEFLMock"
      },
      "is_missing": false,
      "text": "The 2026 Listening section features ... dialogues between two people, A2-C1), Listen to an Announcement (6-10 single-speaker campus announcements, A2-C1), and Listen to an Academic Talk (8-16 academic lectures requiring ...\n\nTOEFL listening practice in the new 2026 format. Two modules per test, 47 questions total, with all four official task types: Choose a Response, conversations, announcements, and academic talks. Instant 1 to 6 band scoring. Take a free practice test to start. ... TOEFL listening tests in the 2026 format. Test 1 is free; the rest unlock with a subscription. Choose any test to begin. ... Choose a response, conversations, announcements, and an academic talk on the Zeigarnik Effect (psychology). ... Conversations, announcements, and an academic talk on social conformity (sociology). ... Campus dialogues, announcements, and an academic talk on opportunity cost (economics). ... Conversations, announcements, and an academic talk on cultural anthropology fieldwork. ... Conversations, announcements, and an academic talk on photosynthesis (biology). ... Conversations, announcements, and an academic talk on chemical bonding (chemistry).\n\nThe 2026 Listening section features four task types per the ETS spec: Listen and Choose a Response (15-19 short single-exchange dialogues, A1-B2), Listen to a Conversation (10 short dialogues between two people, A2-C1), Listen to an Announcement (6-10 single-speaker campus announcements, A2-C1), and Listen to an Academic Talk (8-16 academic lectures requiring identification of main ideas, supporting details, and inferred meaning, A2-C2). Scoring uses the new 1 to 6 band scale aligned to CEFR levels, with instant results available immediately after you finish. Our practice tests mirror each of these task types and provide detailed answer explanations so you can identify patterns in your mistakes and improve systematically before test day. ... The 2026 TOEFL listening section includes four distinct task types that test different listening skills. Listen to short audio recordings and answer comprehension questions about what you heard.\n\nEach of our practice tests takes 29 minutes total, split across two modules. Module 1 has 30 questions and Module 2 has 17 more (including an academic talk). You move forward through the test without going back, just like the real exam. What are the listening task types in the 2026 TOEFL? Per the ETS 2026 Test Blueprint, the Listening section features four task types totalling 47 items: Listen and Choose a Response (15-19 short single-exchange dialogues, A1-B2), Listen to a Conversation (10 short dialogues between two people, A2-C1), Listen to an Announcement (6-10 single-speaker campus announcements, A2-C1), and Listen to an Academic Talk (8-16 academic lectures, A2-C2). Can I replay the audio during the TOEFL listening section? No, audio clips in the TOEFL listening section are played only once, just like in a real classroom or conversation. You cannot pause, rewind, or replay any recording.\n\nThe TOEFL listening section features a variety of English accents including North American, British, Australian, and occasionally other native English accents. This reflects real academic environments where you will encounter professors and classmates from different English-speaking countries. Practice listening to diverse accents through international podcasts and media to prepare yourself. ... Absolutely. Note-taking is one of the most important strategies for the listening section because audio is played only once. Write down key words, names, dates, and main ideas rather than trying to transcribe everything. Use abbreviations and symbols to keep up with the speaker. Organized notes will help you answer detail and inference questions accurately after the audio ends. ... The 2026 format is different rather than necessarily harder. The adaptive testing means the difficulty adjusts to your level, so strong listeners face more challenging content while others get appropriately leveled m",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.toeflmocktests.com/practice-tests/listening/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL 2026 Test Structure: Sections, Timing, and What to ...",
      "url": "https://lingoleap.ai/toefl/2026-test-structure",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "lingoleap.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=lingoleap.ai",
        "site_name": "Lingoleap"
      },
      "is_missing": false,
      "text": "Listen to an Announcement — Short spoken messages about campus events or instructions · Listen to an Academic Talk — Longer lectures or class discussions across disciplines · Skills tested: main idea, detail, inference, purpose, speaker ...\n\nThe Reading section uses a two-stage adaptive structure (router + lower/upper module, per the April 2026 ETS blueprint) and measures your ability to understand academic and everyday written texts. Item totals include some non-scored items used for calibration. The section includes three task types: Fill in missing words within a passage, testing vocabulary and contextual understanding. Comprehend everyday texts such as notices, emails, and announcements. Longer academic texts requiring inference, detail identification, and comprehension. Skills tested: vocabulary, inference, reading comprehension, contextual understandingExplore TOEFL Reading ... The Listening section uses the same router/lower-or-upper-module adaptive structure as Reading, with the router running ~18 minutes and the assigned module running 7 minutes (lower) or 11 minutes (upper).\n\nListen to an Announcement — Short spoken messages about campus events or instructions · Listen to an Academic Talk — Longer lectures or class discussions across disciplines · Skills tested: main idea, detail, inference, purpose, speaker attitudeExplore TOEFL Listening ... The Writing section includes three task types that assess your ability to produce written English, from sentence-level accuracy to academic discussion. This section is linear (not adaptive). The April 2026 ETS blueprint identifies Write an Email and Write for an Academic Discussion as AI-scored — with the model evaluating qualities such as fluency, coherence, grammar, and communication effectiveness — while Build a Sentence is machine-scored against predefined answers. Arrange words into grammatically correct sentences. 10 items. Compose a short email response based on a scenario.\n\nTOEFL iBT Format 2026Complete guide to all TOEFL sections, scoring, and tasks · TOEFL ReadingReading task types, strategies, and practice · TOEFL ListeningConversations, announcements, and academic talks · TOEFL WritingSentence building, emails, and academic discussion · TOEFL SpeakingListen and Repeat and Interview tasks · TOEFL Practice TestFull-length TOEFL mock tests with AI scoring ·\n\nThe TOEFL iBT has four sections — Reading, Listening, Writing, and Speaking — and takes approximately 2 hours. Learn the exact timing, question counts, and adaptive format details for each section. ... The TOEFL iBT 2026 test has four sections: Reading, Listening, Writing, and Speaking. Per the April 2026 ETS Blueprint, working test time ranges from about 1 hr 23 min to 1 hr 29 min: Reading ~27–30 min, Listening ~25–29 min, Writing 23 min, and Speaking 8 min. With instructions and transitions, the full appointment is approximately 2 hours. The TOEFL iBT evaluates your ability to use and understand English at the university level. The test includes four sections — Reading, Listening, Writing, and Speaking — each designed to measure different academic English skills. The total test takes approximately 2 hours. Reading and Listening use multistage adaptive testing, while Writing and Speaking are not adaptive.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "March 13, 2026",
        "search_provider": "anthropic",
        "url": "https://lingoleap.ai/toefl/2026-test-structure"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "TOEFL iBT Listening Section",
      "url": "https://www.ets.org/toefl/test-takers/ibt/about/content/listening.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ets.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ets.org",
        "site_name": "ETS"
      },
      "is_missing": false,
      "text": "This task measures your ability to understand main ideas, supporting details, organization, inferences, and sometimes uncommon or idiomatic vocabulary. ... Audio clips are concise and focused, helping you stay engaged and manage your time effectively. Topics come from a range of academic fields, ...\n\nListen to an Announcement You will listen to an announcement in an academic or campus setting. This task measures your ability to understand the speaker’s purpose, key information, implied meaning, and likely next actions. Listen to an Academic Talk You will listen to a short academic talk given by a professor or expert. This task measures your ability to understand main ideas, supporting details, organization, inferences, and sometimes uncommon or idiomatic vocabulary. ... Audio clips are concise and focused, helping you stay engaged and manage your time effectively. Topics come from a range of academic fields, and no background knowledge is required. You can take notes while listening to help you answer the questions. You may hear native-speaker English accents from North America, the U.K., New Zealand, or Australia, reflecting the variety of English used in academic environments.\n\nThe TOEFL iBT Listening section measures your ability to understand spoken English in modern learning environments. The tasks reflect the kinds of listening you may do in classrooms, lectures, and other university situations. Instead of long listening sets, the Listening section uses short, focused audio clips that allow you to demonstrate how well you understand meaning, organization, and speaker intent. Listening skills are measured using two task types: Listen and Choose a Response You will listen to a spoken prompt and choose the most appropriate response. This task measures your ability to understand meaning, intent, and common patterns of spoken English used in academic settings. Listen to a Conversation You will listen to a conversation primarily related to campus life. This task measures your understanding of main ideas, key details, speaker intent, and implied meaning.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.ets.org/toefl/test-takers/ibt/about/content/listening.html"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The New TOEFL iBT 2026: All the Changes You Need to Know – Affordable English School in Los Angeles | Mentor Language Institute",
      "url": "https://mliesl.edu/contents/the-new-toefl-ibt-2026-all-the-changes-you-need-to-know/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mliesl.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mliesl.edu",
        "site_name": "Mliesl"
      },
      "is_missing": false,
      "text": "3. Listen to an Announcement – Campus or classroom announcements (40–85 words). Each one is followed by several multiple-choice questions. 4. Listen to an Academic Talk – Short lectures (100–250 words).\n\nThe new TOEFL iBT, starting in January 2026, is changing to enhance efficiency and reinforce practical English skills. With a shorter test time, the introduction of the adaptive format, and new real-world question types, a fresh, targeted study strategy is essential. * Shorter Test Time: Reduced from three hours to under two hours. * Adaptive Testing: The Reading and Listening sections will use a multistage adaptive format. * New Scoring Scale: A new 1-6 banded score (similar to CEFR) will be introduced alongside the traditional 0-120 score. * Enhanced Practicality: Shorter, functional tasks related to real-life campus and daily situations are being added across all four sections. Due to these major updates, trying to analyze and prepare for the new test alone can be inefficient and overwhelming. We, the experts at Mentor Language Institute (MLI), are a specialized institution for the new TOEFL iBT, accurately responding to changes based on official ETS information.\n\n2. Read in Daily Life – You will read short, practical texts like emails, announcements, or social media posts (15–150 words each). Each text has 2–3 multiple-choice questions. 3. Read an Academic Passage – You will read a short academic text (around 200 words). Each passage has 5 multiple-choice questions. These changes make the reading tasks shorter, more focused, and diverse, testing your ability to understand both academic and everyday English. ⏱ Estimated time: About 27 minutes (reduced from 36 minutes) ❓ Total items: 35–48 (instead of 20 questions) The Listening section will also move to a multistage adaptive format, meaning the difficulty of questions will adapt to each test taker’s performance. In the past, the Listening section had 3 lectures and 2 conversations, all following a fixed format. Starting January 2026, the section becomes more dynamic with four new task types combining academic and conversational listening: 1.\n\n3. Listen to an Announcement – Campus or classroom announcements (40–85 words). Each one is followed by several multiple-choice questions. 4. Listen to an Academic Talk – Short lectures (100–250 words). Each lecture is followed by 4 questions. These updates make the Listening section more interactive and realistic, similar to what you’d encounter in real campus settings. ⏱ Estimated time: About 27 minutes (reduced from 41 minutes) ❓ Total items: 35–45 · Previously, the Writing section consisted of 2 tasks (1 Integrated and 1 Independent). Starting in January 2026, the section will feature three task types focusing on shorter, functional writing. The total time will be about 23 minutes (reduced from around 35 minutes). The new format will assess 12 total items. Here are the new task types: 1. Build a Sentence: You will form a correct sentence from a mix of possible words.\n\nThe Speaking section previously had 4 tasks (1 Independent and 3 Integrated tasks). Starting in January 2026, the section will be restructured with 2 new, short task types. The total time will be about 8 minutes (reduced from around 17 minutes). The new format will assess 11 total items. The two new task types are: 1. Listen and Repeat (7 questions): You will hear a short sentence and must repeat it exactly. Sentences are only heard and not written on the screen. All sentences will be based on the same picture that is on screen. Based on the information in each sentence, arrows, shapes, or highlighting may be added to the picture. The sentences become longer and more difficult. There is no preparation time for each sentence, and you have 8 to 12 seconds of recording time. 2. Take an Interview (4 questions): You will respond to a simulated interview on a familiar topic.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://mliesl.edu/contents/the-new-toefl-ibt-2026-all-the-changes-you-need-to-know/"
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

I'm seeing that announcements need their own template structure. The ETS source confirms the listening task measures speaker purpose, key details, and implied meaning, while test prep sources highlight that action verbs typically appear in the second half and endings are heavily tested—usually containing deadlines or instructions. The prep template breaks this down as Type, Who, What changed, Action, Deadline, and Consequence. I should also watch for conditional language like "unless" and "only if" since those shift the meaning significantly.

My original Template A's "audience → what changed → reaction" doesn't quite fit announcements; the reaction should really be "action + deadline" instead. I'll propose a revised template specifically for announcements that captures audience, what changed, and the required action with deadline, flagging any conditions. Since you asked about announcements, I should add a compact card to the widget showing this template alongside the existing ones.

</details>

<details>
<summary>Thinking (verbatim)</summary>

You're right that announcements need their own template since the "reaction" slot doesn't work without a second speaker, and the sources point to understanding the speaker's purpose and next actions instead. I'll create a separate announcement template that captures who's affected, what changed, the required action with deadline, and any condition words to watch for.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-16T08:26:59.027769Z",
  "stop_timestamp": "2026-07-16T08:27:11.282955Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LtiMEMqgzQEQk5wjDDHYfY",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Drafting the announcement card",
      "Underlining the deadline twice",
      "Flagging sneaky condition words"
    ],
    "title": "toefl_announcement_note_template",
    "widget_code": "<h2 class=\"sr-only\" style=\"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);\">Editable TOEFL announcement note template with three slots — audience, what changed, action and deadline — plus an example-fill button.</h2>\n\n<div style=\"max-width:420px; background:var(--surface-2); border:0.5px solid var(--border); border-radius:12px; padding:1rem 1.25rem; margin:1rem 0;\">\n  <div style=\"display:flex; align-items:center; gap:8px; margin-bottom:4px;\">\n    <i class=\"ti ti-speakerphone\" style=\"font-size:20px; color:#993C1D;\" aria-hidden=\"true\"></i>\n    <p style=\"font-weight:500; font-size:15px; margin:0;\">Template C — announcement</p>\n  </div>\n  <p style=\"font-size:13px; color:var(--text-secondary); margin:0 0 14px;\">Clip 40–85 words · 1 speaker · payload comes late</p>\n\n  <div style=\"display:flex; flex-direction:column; gap:10px;\">\n    <div>\n      <label style=\"font-size:12px; color:#993C1D; font-weight:500;\" for=\"c1\">who's affected / type</label>\n      <input id=\"c1\" placeholder=\"bio 201 students · room change\" style=\"width:100%;\" />\n    </div>\n    <div>\n      <label style=\"font-size:12px; color:#993C1D; font-weight:500;\" for=\"c2\">what changed (old → new)</label>\n      <input id=\"c2\" placeholder=\"rm 105 → rm 207, this wk only\" style=\"width:100%;\" />\n    </div>\n    <div>\n      <label style=\"font-size:12px; color:#993C1D; font-weight:500;\" for=\"c3\">action + deadline (+ condition!)</label>\n      <input id=\"c3\" placeholder=\"register by Fri · UNLESS online\" style=\"width:100%;\" />\n    </div>\n  </div>\n\n  <div style=\"display:flex; gap:8px; margin-top:14px;\">\n    <button onclick=\"fillC()\" style=\"font-size:13px;\"><i class=\"ti ti-player-play\" style=\"font-size:14px;\" aria-hidden=\"true\"></i> Show example</button>\n    <button onclick=\"clearC()\" style=\"font-size:13px;\">Clear</button>\n    <button onclick=\"sendPrompt('Give me a 40-85 word TOEFL-style campus announcement so I can practice filling Template C, then quiz me with 2 questions — one on purpose, one on the action/deadline detail.')\" style=\"font-size:13px;\">Practice ↗</button>\n  </div>\n</div>\n\n<script>\nfunction typeIntoC(id, text, startDelay) {\n  const el = document.getElementById(id);\n  setTimeout(() => {\n    el.value = '';\n    let i = 0;\n    const iv = setInterval(() => {\n      el.value = text.slice(0, ++i);\n      if (i >= text.length) clearInterval(iv);\n    }, 35);\n  }, startDelay);\n}\nfunction fillC() {\n  typeIntoC('c1', 'library users · hours notice', 0);\n  typeIntoC('c2', 'closes 10pm → 8pm (exam wk: normal)', 1300);\n  typeIntoC('c3', 'return books by Thu, ONLY IF recalled', 3200);\n}\nfunction clearC() { ['c1','c2','c3'].forEach(id => document.getElementById(id).value = ''); }\n</script>"
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
  "start_timestamp": "2026-07-16T08:27:11.778081Z",
  "stop_timestamp": "2026-07-16T08:27:11.778091Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01LtiMEMqgzQEQk5wjDDHYfY",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "08fd6ae0-60fd-44f0-b1ac-ff8f398cb929"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "764632be-5bf9-4665-950d-43b7464f49cd"
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

So we're settling on a three-template approach, where condition words follow a specific capitalization pattern, and Template A is now limited to conversations only.

</details>

So your system now has three templates: A (conversations), B (academic talks), C (announcements). One deliberate convention in the example fill: condition words get written in capitals (`UNLESS`, `ONLY IF`) — since those are exactly the words that flip an answer choice, they should visually shout on your whiteboard.

And to be precise about what changed from before: Template A is now conversations only — its "reaction / next step" slot assumes a second speaker, which announcements don't have.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6a08-b1a9-77f4-8318-dae5c3103835",
  "updated_at": "2026-07-16T08:27:18.699451Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f6a08-b1a7-7737-a70a-e2f1ee7fa86a"
}
```

</details>
