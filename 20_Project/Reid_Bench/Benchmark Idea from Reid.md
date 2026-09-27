Written by Reid. This note is the standard and source of truth for Reid Bench. `Reid_Bench(AI conclusion).md` is an AI-derived execution plan; where the two conflict, this note wins.

## Test Dimensions

1. **Instruction Following**: how well the model follows instructions from different sources
   - Typed directly by the user in the prompt box
   - Defined by constraints or workflows, such as skills or MCP servers
   - A mix of both
2. **Creativity**: building something from scratch, starting from the user's vague idea
   - Evidence: gathered from social media platforms, plus my own judgment as the receiver
3. **Aesthetics**: visual quality of the output
   - Covers: documents (PPT, PDF, DOCX, ...), videos, websites
   - Evidence: other people's results, existing rankings (e.g., Arena), manual review, and my own testing
4. **Intent Understanding**: grasping what the user actually means
   - Evidence: other people's feedback and my own experience
5. **Blind-Spot Detection**: pointing out what the user hasn't considered
6. **Research Novelty**: ability to push the research frontier
7. **Hallucination Rate**
   - Evidence: my own experience (a sense, not a reliable rate) plus public benchmarks
8. **External Rankings**: use the 屎山代码争霸赛 ranking (Bilibili) as a reference

## Evidence Principles

Read this before interpreting or building on the dimensions above.

- **Mixed evidence is deliberate.** Most dimensions combine my own judgment with external signals (other people's results, public rankings). Do not "fix" this by dropping either side.
- **Why my judgment counts:** I receive the deliverables, so my opinion is significant.
- **Why external signals are needed:** My energy goes almost entirely to research and study, so building a full private benchmark from scratch is not an option. My taste is also still developing, so synthesizing others' tastes and judgments is unavoidable, especially for creativity and aesthetics.
- **Why not rely on famous public benchmarks alone:** Widely known benchmarks and rankings (e.g., Artificial Analysis, Terminal-Bench) are too public to stay private, so providers can overfit them. Niche or informal rankings, such as the 屎山代码争霸赛 ranking, are harder to game.