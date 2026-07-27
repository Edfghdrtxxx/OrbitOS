# Overhead zombie defense shooter game

## Export metadata (verbatim)

```json
{
  "uuid": "641759f8-d74a-4765-9707-941c251ada8b",
  "name": "Overhead zombie defense shooter game",
  "summary": "**Conversation Overview**\n\nThis was a game development session focused on building and iterating on a top-down zombie shooter as a single HTML file artifact. The person requested a roguelike-style game with an overhead (MOBA-style) perspective, modern cartoon aesthetic, and specific mechanical requirements. The session covered two main phases: the initial roguelike architecture build, and two rounds of targeted amendments.\n\nThe core game built features a run-based structure across 5 floors × 4 rooms (3 combat + 1 boss), permadeath, procedurally generated room layouts with themed obstacles, an XP and level-up system with 15 stackable upgrades, five enemy archetypes (Walker, Runner, Spitter, Exploder, Brute) plus a Boss type with Elite modifiers, floor-scaling enemy stats, a player dash ability with i-frames, and a full HUD with HP/XP/ammo bars. Enemy HP bars are displayed on all zombies. Controls are WASD + mouse aim + click to shoot + R reload + Space dash + Esc pause.\n\nThe person requested two specific amendments in the final exchange: (1) the game should auto-freeze for 1 second before upgrade cards appear after leveling up, creating a deliberate pre-pause rather than instant card display; and (2) upgrade selection should require a two-step select-then-confirm interaction (click or arrow keys to select, then Enter or second click to confirm) rather than direct single-click confirmation. Claude implemented both changes, also converting room-transition timers from `setTimeout` to game-tick-driven countdown logic so transitions correctly pause during the upgrade freeze, and adding a short-circuit so that if a level-up interrupts a room transition, the player jumps straight to the next room upon confirming their upgrade rather than waiting in an empty cleared room.",
  "created_at": "2026-04-18T14:47:09.350453Z",
  "updated_at": "2026-04-19T01:28:48.227721Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-18T14:47:09.815642Z

Create a overhead view (the view is similar to moba games) shooting game to defense zombie waves, with several levels.
The style should use modern cartoon.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019da10f-4c6b-7a1f-9f10-61ac7c8d219b",
  "updated_at": "2026-04-18T14:47:09.815642Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-18T14:53:40.056782Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user is asking for an overhead MOBA-style zombie defense game with multiple levels in modern cartoon style, which I'll build as an interactive HTML artifact. I should keep the animation dynamic and interactive, and I have enough detail to start building without needing clarification.

I'm planning the core mechanics: top-down perspective with WASD controls for player movement, mouse-based aiming and shooting, waves of zombies to defend against, and progression through multiple levels with increasing difficulty.

For the game features, I'll include a health system, ammo management with reloading, several zombie variants with different behaviors, level progression, score tracking, and power-ups to keep gameplay engaging.

The art direction will lean into modern cartoon aesthetics with bright colors, rounded character designs, clean linework, and soft shadows to create a vibrant, approachable feel.

I'm structuring this as a Canvas-based HTML game for smooth performance, and I'll organize the code to handle game state, rendering, input handling, and entity management.

Building the game engine... I'm mapping out the control scheme—mouse aiming with left click to shoot, R for reload, and maybe space for a special ability. Now I'm setting up a single HTML file with everything embedded to keep it self-contained, aiming for around 800-1000 lines of polished code for a solid experience.

Writing the game engine... I'm sketching out the enemy variety—walkers as the basic threat, runners for speed challenges, brutes for tank encounters, spitters for ranged pressure, and a boss fight to cap things off. For weapons, I'll keep it focused with just the starting pistol and maybe introduce a shotgun powerup later to avoid feature creep and maintain polish.

I'm going back and forth on audio—initially thinking to skip it for simplicity, but simple procedural sound effects would actually add a lot of polish without much overhead. I'll include basic Web Audio API sounds for shooting, hits, zombie groans, level completion, and game over to make the experience feel more complete.

Setting up the core game architecture... Defining the core game classes... Writing the full game implementation... Writing the game code... arena makes sense. Let me go with that.
- Arena 1200x700 or so
- Player starts in center
- Zombies spawn from edges
- Obstacles scattered in the arena

Actually, let me make the arena a bit larger and have the camera follow the player. Gives more interesting gameplay.

Arena: 2000x1400
Camera viewport: 1200x700

That works well.

OK let me stop planning and start writing.

One more decision: weapon variety. Let me have:
- Default pistol (unlimited, needs reload)
- Shotgun (pick up, limited ammo)
- Machine gun (pick up, limited ammo)

Pickups appear in later levels.

OK, writing now.

Now I'm settling on a cohesive color scheme for the game. I'll use warm earth tones for the arena floor with sage green grass patches, darker browns and grays for obstacles and walls. The player will be teal blue, and I'll differentiate the zombie types with different green shades—sickly green for regular ones, pale yellow-green for the fast variants, and a darker green with purple tint for brutes. Bullets will pop as bright yellow, and I'll keep the gore dark red or purple to maintain that cartoony feel.

For the arena itself, I'm going with a 2000x1400 pixel space with the camera following the player within a 1200x700 viewport, which should create more dynamic gameplay. The player spawns in the center while zombies emerge from the edges, with obstacles scattered throughout. I'm also planning weapon variety—starting with an unlimited pistol that requires reloading, then introducing a shotgun and machine gun as pickups in later levels.

Now I'm ready to start building.

</details>

I'll build you a complete overhead-view zombie defense game with multiple levels. Since you've given me a clear specification, I'll make reasonable design choices and note them inline as I go.

**Design assumptions I'm making** (stated upfront per your preference for transparency):
- **Controls**: WASD to move, mouse to aim, click to shoot, R to reload — standard top-down shooter conventions
- **Levels**: 5 progressive levels with waves (standard arcade structure)
- **Art**: flat cartoon with thick outlines, bright saturated palette
- **Scope**: single HTML file, procedural audio via Web Audio API, no external assets

Let me check the frontend-design skill for styling patterns before building.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T14:48:11.264586Z",
  "stop_timestamp": "2026-04-18T14:48:11.828961Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01XLhJ5HAWJTs2Ko5UK4vNtA",
  "name": "view",
  "input": {
    "description": "Checking frontend-design skill for guidance",
    "path": "/mnt/skills/public/frontend-design/SKILL.md"
  },
  "message": "Checking frontend-design skill for guidance",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Checking frontend-design skill for guidance"
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
  "tool_use_id": "toolu_01XLhJ5HAWJTs2Ko5UK4vNtA",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: frontend-design\n     3\tdescription: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.\n     4\tlicense: Complete terms in LICENSE.txt\n     5\t---\n     6\t\n     7\tThis skill guides creation of distinctive, production-grade frontend interfaces that avoid generic \"AI slop\" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.\n     8\t\n     9\tThe user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.\n    10\t\n    11\t## Design Thinking\n    12\t\n    13\tBefore coding, understand the context and commit to a BOLD aesthetic direction:\n    14\t- **Purpose**: What problem does this interface solve? Who uses it?\n    15\t- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.\n    16\t- **Constraints**: Technical requirements (framework, performance, accessibility).\n    17\t- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?\n    18\t\n    19\t**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.\n    20\t\n    21\tThen implement working code (HTML/CSS/JS, React, Vue, etc.) that is:\n    22\t- Production-grade and functional\n    23\t- Visually striking and memorable\n    24\t- Cohesive with a clear aesthetic point-of-view\n    25\t- Meticulously refined in every detail\n    26\t\n    27\t## Frontend Aesthetics Guidelines\n    28\t\n    29\tFocus on:\n    30\t- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.\n    31\t- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.\n    32\t- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.\n    33\t- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.\n    34\t- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.\n    35\t\n    36\tNEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.\n    37\t\n    38\tInterpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.\n    39\t\n    40\t**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.\n    41\t\n    42\tRemember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.\n    43\t",
      "uuid": "fe9053ba-2ee3-49b8-9459-34234616d18b"
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
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T14:48:19.596648Z",
  "stop_timestamp": "2026-04-18T14:48:19.904631Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01GyTpMD4FBq77efM6k3maD6",
  "name": "bash_tool",
  "input": {
    "command": "ls /mnt/skills/public/frontend-design/",
    "description": "Checking skill directory for more resources"
  },
  "message": "Checking skill directory for more resources",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"ls /mnt/skills/public/frontend-design/\"}"
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
  "tool_use_id": "toolu_01GyTpMD4FBq77efM6k3maD6",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"LICENSE.txt\\nSKILL.md\\n\",\"stderr\":\"\"}",
      "uuid": "2dab013f-ab58-4141-9b60-e9d43af61c27"
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
    "json_block": "{\"returncode\":0,\"stdout\":\"LICENSE.txt\\nSKILL.md\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 Building the game now with a bold cartoon aesthetic using thick outlines and vibrant colors, plus animations like screen shake and floating damage numbers across multiple progression levels.

</details>

Now I'll build the game. Let me create it as a polished single-file HTML artifact.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T14:48:27.150061Z",
  "stop_timestamp": "2026-04-18T14:52:43.967701Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015nQYwZVDaFzQX5xmd5QUPt",
  "name": "create_file",
  "input": {
    "description": "Creating the main zombie defense game HTML file",
    "path": "/home/claude/zombie_defense.html",
    "file_text": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Zombie Horde Defense</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@700;900&display=swap\" rel=\"stylesheet\">\n<style>\n  :root {\n    --c-bg-a: #1a1428;\n    --c-bg-b: #2a1f3d;\n    --c-accent: #ffbd2e;\n    --c-accent-hot: #ff6b6b;\n    --c-accent-cool: #4ecdc4;\n    --c-dark: #0f0a1a;\n    --c-blood: #c73866;\n    --c-slime: #8fcf3f;\n  }\n  * { margin: 0; padding: 0; box-sizing: border-box; }\n  html, body {\n    width: 100%; height: 100%;\n    overflow: hidden;\n    background: var(--c-bg-a);\n    font-family: 'Nunito', sans-serif;\n    color: #fff;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n  #stage {\n    position: relative;\n    width: 100vw; height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background:\n      radial-gradient(ellipse at 30% 20%, #3a2a54 0%, transparent 60%),\n      radial-gradient(ellipse at 70% 80%, #241836 0%, transparent 60%),\n      linear-gradient(180deg, #1a1428 0%, #0f0a1a 100%);\n  }\n  canvas {\n    display: block;\n    image-rendering: pixelated;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: crisp-edges;\n    cursor: crosshair;\n    box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 4px var(--c-dark), 0 0 0 8px var(--c-accent);\n    border-radius: 6px;\n  }\n  #hud {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Nunito', sans-serif;\n  }\n  .hud-top, .hud-bottom {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    gap: 16px;\n    padding: 14px 22px;\n    pointer-events: none;\n  }\n  .hud-top { top: 3vh; }\n  .hud-bottom { bottom: 3vh; }\n  .pill {\n    background: rgba(15, 10, 26, 0.78);\n    border: 3px solid var(--c-dark);\n    box-shadow: 0 4px 0 var(--c-dark), inset 0 2px 0 rgba(255,255,255,0.08);\n    border-radius: 16px;\n    padding: 10px 18px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-weight: 900;\n    letter-spacing: 0.5px;\n  }\n  .pill .label {\n    font-size: 11px;\n    opacity: 0.7;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .pill .value {\n    font-family: 'Bangers', sans-serif;\n    font-size: 24px;\n    letter-spacing: 2px;\n  }\n  .hp-bar, .ammo-bar {\n    width: 140px;\n    height: 14px;\n    background: #0a0614;\n    border-radius: 8px;\n    border: 2px solid var(--c-dark);\n    overflow: hidden;\n    position: relative;\n  }\n  .hp-fill {\n    height: 100%;\n    background: linear-gradient(180deg, #ff9baf, var(--c-blood));\n    transition: width 0.18s ease;\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\n  }\n  .ammo-fill {\n    height: 100%;\n    background: linear-gradient(180deg, #ffd966, var(--c-accent));\n    transition: width 0.12s ease;\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\n  }\n  .ammo-fill.reload {\n    background: linear-gradient(180deg, #7dd3d0, var(--c-accent-cool));\n    animation: reloading 0.8s ease-in-out infinite alternate;\n  }\n  @keyframes reloading {\n    from { filter: brightness(0.8); }\n    to { filter: brightness(1.3); }\n  }\n  .wave-banner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: 'Bangers', sans-serif;\n    font-size: 72px;\n    letter-spacing: 8px;\n    color: var(--c-accent-hot);\n    text-shadow:\n      4px 4px 0 var(--c-dark),\n      -2px -2px 0 #fff,\n      0 0 40px rgba(255,107,107,0.5);\n    opacity: 0;\n    pointer-events: none;\n    white-space: nowrap;\n  }\n  .wave-banner.show {\n    animation: banner-in 2.4s cubic-bezier(0.2, 0.9, 0.3, 1.4) forwards;\n  }\n  @keyframes banner-in {\n    0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(-10deg); }\n    18%  { opacity: 1; transform: translate(-50%, -50%) scale(1.15) rotate(2deg); }\n    28%  { transform: translate(-50%, -50%) scale(1) rotate(0deg); }\n    75%  { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }\n    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4) rotate(0deg); }\n  }\n  .overlay {\n    position: absolute;\n    inset: 0;\n    background: rgba(15, 10, 26, 0.82);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 24px;\n    pointer-events: auto;\n    backdrop-filter: blur(6px);\n    -webkit-backdrop-filter: blur(6px);\n  }\n  .overlay.hidden { display: none; }\n  .title {\n    font-family: 'Bangers', sans-serif;\n    font-size: 110px;\n    letter-spacing: 6px;\n    line-height: 0.9;\n    color: var(--c-accent);\n    text-shadow:\n      5px 5px 0 var(--c-dark),\n      -3px -3px 0 var(--c-accent-hot),\n      0 0 40px rgba(255,189,46,0.4);\n    text-align: center;\n    transform: rotate(-2deg);\n  }\n  .title small {\n    display: block;\n    font-size: 34px;\n    color: var(--c-accent-cool);\n    letter-spacing: 10px;\n    text-shadow: 3px 3px 0 var(--c-dark);\n    margin-top: 8px;\n    transform: rotate(3deg);\n  }\n  .subtitle {\n    font-family: 'Bangers', sans-serif;\n    font-size: 54px;\n    letter-spacing: 5px;\n    color: #fff;\n    text-shadow: 4px 4px 0 var(--c-dark);\n    text-align: center;\n  }\n  .subtitle.hot { color: var(--c-accent-hot); }\n  .subtitle.cool { color: var(--c-accent-cool); }\n  .subtitle.warn { color: var(--c-accent); }\n  .level-card {\n    background: rgba(26, 20, 40, 0.9);\n    border: 4px solid var(--c-dark);\n    box-shadow: 0 8px 0 var(--c-dark), inset 0 4px 0 rgba(255,255,255,0.08);\n    border-radius: 20px;\n    padding: 24px 36px;\n    max-width: 540px;\n    text-align: center;\n  }\n  .level-card .name {\n    font-family: 'Bangers', sans-serif;\n    font-size: 38px;\n    letter-spacing: 3px;\n    color: var(--c-accent-cool);\n    margin-bottom: 6px;\n  }\n  .level-card .desc {\n    font-size: 16px;\n    line-height: 1.5;\n    opacity: 0.85;\n    font-weight: 700;\n  }\n  .level-card .stats {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 14px;\n    font-family: 'Bangers', sans-serif;\n    letter-spacing: 2px;\n    font-size: 20px;\n  }\n  .btn {\n    font-family: 'Bangers', sans-serif;\n    font-size: 30px;\n    letter-spacing: 4px;\n    padding: 14px 44px;\n    background: var(--c-accent);\n    color: var(--c-dark);\n    border: 4px solid var(--c-dark);\n    box-shadow: 0 6px 0 var(--c-dark);\n    border-radius: 16px;\n    cursor: pointer;\n    transition: transform 0.08s ease, box-shadow 0.08s ease;\n    text-shadow: none;\n  }\n  .btn:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 8px 0 var(--c-dark);\n  }\n  .btn:active {\n    transform: translateY(4px);\n    box-shadow: 0 2px 0 var(--c-dark);\n  }\n  .btn.cool { background: var(--c-accent-cool); }\n  .btn.hot { background: var(--c-accent-hot); color: #fff; }\n  .controls {\n    display: flex;\n    gap: 14px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 600px;\n    margin-top: 6px;\n  }\n  .key {\n    background: rgba(15,10,26,0.7);\n    border: 3px solid var(--c-dark);\n    box-shadow: 0 3px 0 var(--c-dark);\n    padding: 6px 14px;\n    border-radius: 10px;\n    font-family: 'Bangers', sans-serif;\n    letter-spacing: 2px;\n    font-size: 18px;\n    color: var(--c-accent);\n  }\n  .key .desc {\n    color: #fff;\n    letter-spacing: 1px;\n    margin-left: 8px;\n    opacity: 0.8;\n    font-size: 14px;\n  }\n  .level-select {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 14px;\n    max-width: 700px;\n  }\n  .level-tile {\n    width: 110px; height: 110px;\n    border: 4px solid var(--c-dark);\n    background: rgba(26, 20, 40, 0.9);\n    box-shadow: 0 6px 0 var(--c-dark);\n    border-radius: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.1s ease;\n    font-family: 'Bangers', sans-serif;\n  }\n  .level-tile:hover { transform: translateY(-4px); }\n  .level-tile .num {\n    font-size: 44px;\n    color: var(--c-accent);\n    line-height: 1;\n    letter-spacing: 2px;\n  }\n  .level-tile .lbl {\n    font-size: 12px;\n    letter-spacing: 2px;\n    opacity: 0.7;\n    margin-top: 4px;\n  }\n  .level-tile.locked {\n    opacity: 0.35;\n    cursor: not-allowed;\n  }\n  .level-tile.locked:hover { transform: none; }\n  .score-row {\n    display: flex;\n    gap: 28px;\n    font-family: 'Bangers', sans-serif;\n    font-size: 32px;\n    letter-spacing: 3px;\n  }\n  .score-row span { color: var(--c-accent); }\n\n  .fade-in { animation: fadeIn 0.4s ease-out; }\n  @keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n  .crosshair-hint {\n    position: absolute;\n    bottom: 12px;\n    right: 14px;\n    font-size: 12px;\n    letter-spacing: 1px;\n    opacity: 0.4;\n    pointer-events: none;\n  }\n  .damage-flash {\n    position: absolute;\n    inset: 0;\n    background: radial-gradient(ellipse at center, transparent 50%, var(--c-blood) 120%);\n    opacity: 0;\n    pointer-events: none;\n    mix-blend-mode: screen;\n  }\n  .damage-flash.hit {\n    animation: damageFlash 0.35s ease-out;\n  }\n  @keyframes damageFlash {\n    0% { opacity: 0; }\n    20% { opacity: 0.7; }\n    100% { opacity: 0; }\n  }\n</style>\n</head>\n<body>\n<div id=\"stage\">\n  <canvas id=\"game\" width=\"1280\" height=\"720\"></canvas>\n\n  <div id=\"hud\">\n    <div class=\"hud-bottom\">\n      <div class=\"pill\">\n        <span class=\"label\">HP</span>\n        <div class=\"hp-bar\"><div class=\"hp-fill\" id=\"hpFill\" style=\"width:100%\"></div></div>\n        <span class=\"value\" id=\"hpText\">100</span>\n      </div>\n      <div class=\"pill\">\n        <span class=\"label\">AMMO</span>\n        <div class=\"ammo-bar\"><div class=\"ammo-fill\" id=\"ammoFill\" style=\"width:100%\"></div></div>\n        <span class=\"value\" id=\"ammoText\">12/12</span>\n      </div>\n    </div>\n\n    <div class=\"hud-top\">\n      <div class=\"pill\"><span class=\"label\">LVL</span><span class=\"value\" id=\"lvlText\">1</span></div>\n      <div class=\"pill\"><span class=\"label\">WAVE</span><span class=\"value\" id=\"waveText\">1/3</span></div>\n      <div class=\"pill\"><span class=\"label\">LEFT</span><span class=\"value\" id=\"leftText\">0</span></div>\n      <div class=\"pill\"><span class=\"label\">KILLS</span><span class=\"value\" id=\"killText\">0</span></div>\n      <div class=\"pill\"><span class=\"label\">SCORE</span><span class=\"value\" id=\"scoreText\">0</span></div>\n    </div>\n\n    <div class=\"wave-banner\" id=\"waveBanner\"></div>\n    <div class=\"damage-flash\" id=\"damageFlash\"></div>\n    <div class=\"crosshair-hint\">WASD move · Mouse aim · Click shoot · R reload · ESC menu</div>\n  </div>\n\n  <!-- MENU -->\n  <div class=\"overlay\" id=\"menu\">\n    <div class=\"title\">ZOMBIE HORDE<small>DEFENSE</small></div>\n    <div class=\"level-select\" id=\"levelSelect\"></div>\n    <div class=\"controls\">\n      <div class=\"key\">WASD<span class=\"desc\">Move</span></div>\n      <div class=\"key\">Mouse<span class=\"desc\">Aim</span></div>\n      <div class=\"key\">Click<span class=\"desc\">Shoot</span></div>\n      <div class=\"key\">R<span class=\"desc\">Reload</span></div>\n      <div class=\"key\">ESC<span class=\"desc\">Pause</span></div>\n    </div>\n  </div>\n\n  <!-- LEVEL INTRO -->\n  <div class=\"overlay hidden\" id=\"levelIntro\">\n    <div class=\"subtitle warn\" id=\"introLevelNum\">LEVEL 1</div>\n    <div class=\"level-card\">\n      <div class=\"name\" id=\"introName\">The Outskirts</div>\n      <div class=\"desc\" id=\"introDesc\">A quiet street...until it wasn't.</div>\n      <div class=\"stats\" id=\"introStats\"></div>\n    </div>\n    <button class=\"btn\" id=\"startBtn\">START</button>\n  </div>\n\n  <!-- LEVEL COMPLETE -->\n  <div class=\"overlay hidden\" id=\"levelComplete\">\n    <div class=\"subtitle cool\">LEVEL CLEAR!</div>\n    <div class=\"score-row\">\n      <div>KILLS: <span id=\"completeKills\">0</span></div>\n      <div>SCORE: <span id=\"completeScore\">0</span></div>\n    </div>\n    <div style=\"display:flex; gap:16px;\">\n      <button class=\"btn cool\" id=\"nextBtn\">NEXT LEVEL</button>\n      <button class=\"btn\" id=\"completeMenuBtn\">MENU</button>\n    </div>\n  </div>\n\n  <!-- VICTORY -->\n  <div class=\"overlay hidden\" id=\"victory\">\n    <div class=\"title\" style=\"font-size:80px\">VICTORY!<small>THE HORDE IS BROKEN</small></div>\n    <div class=\"score-row\">\n      <div>TOTAL SCORE: <span id=\"victoryScore\">0</span></div>\n    </div>\n    <button class=\"btn\" id=\"victoryMenuBtn\">BACK TO MENU</button>\n  </div>\n\n  <!-- GAME OVER -->\n  <div class=\"overlay hidden\" id=\"gameOver\">\n    <div class=\"subtitle hot\">YOU DIED</div>\n    <div class=\"score-row\">\n      <div>KILLS: <span id=\"overKills\">0</span></div>\n      <div>SCORE: <span id=\"overScore\">0</span></div>\n    </div>\n    <div style=\"display:flex; gap:16px;\">\n      <button class=\"btn hot\" id=\"retryBtn\">RETRY</button>\n      <button class=\"btn\" id=\"overMenuBtn\">MENU</button>\n    </div>\n  </div>\n\n  <!-- PAUSE -->\n  <div class=\"overlay hidden\" id=\"pause\">\n    <div class=\"subtitle cool\">PAUSED</div>\n    <div style=\"display:flex; gap:16px;\">\n      <button class=\"btn cool\" id=\"resumeBtn\">RESUME</button>\n      <button class=\"btn\" id=\"pauseMenuBtn\">MENU</button>\n    </div>\n  </div>\n</div>\n\n<script>\n// =============================================================\n// ZOMBIE HORDE DEFENSE — single-file canvas game\n// =============================================================\n// Cartoon top-down shooter with wave-based zombie defense.\n// Style: flat shapes, thick black outlines, chunky particle FX.\n// =============================================================\n\nconst canvas = document.getElementById('game');\nconst ctx = canvas.getContext('2d');\nconst W = canvas.width, H = canvas.height;\n\n// ------------- UTILITY -----------------------------------------\nconst TAU = Math.PI * 2;\nconst lerp = (a, b, t) => a + (b - a) * t;\nconst clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;\nconst dist2 = (ax, ay, bx, by) => { const dx=bx-ax, dy=by-ay; return dx*dx+dy*dy; };\nconst rand = (a, b) => a + Math.random() * (b - a);\nconst randi = (a, b) => Math.floor(rand(a, b));\nconst choice = arr => arr[randi(0, arr.length)];\n\n// ------------- AUDIO (procedural) ------------------------------\nlet audioCtx = null;\nfunction initAudio() {\n  if (!audioCtx) {\n    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }\n    catch(e) { audioCtx = null; }\n  }\n}\nfunction beep(freq, duration, type='square', vol=0.08, sweep=0) {\n  if (!audioCtx) return;\n  const t = audioCtx.currentTime;\n  const osc = audioCtx.createOscillator();\n  const gain = audioCtx.createGain();\n  osc.type = type;\n  osc.frequency.setValueAtTime(freq, t);\n  if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq+sweep), t+duration);\n  gain.gain.setValueAtTime(vol, t);\n  gain.gain.exponentialRampToValueAtTime(0.0001, t+duration);\n  osc.connect(gain); gain.connect(audioCtx.destination);\n  osc.start(t); osc.stop(t+duration+0.02);\n}\nfunction sfx(name) {\n  if (!audioCtx) return;\n  switch(name) {\n    case 'shoot':   beep(880, 0.06, 'square', 0.05, -500); break;\n    case 'hit':     beep(200, 0.08, 'sawtooth', 0.07, -100); break;\n    case 'reload':  beep(400, 0.05, 'triangle', 0.05); setTimeout(()=>beep(600, 0.05, 'triangle', 0.05), 120); break;\n    case 'die':     beep(150, 0.3, 'sawtooth', 0.09, -80); break;\n    case 'hurt':    beep(120, 0.18, 'square', 0.1, -60); break;\n    case 'pickup':  beep(600, 0.08, 'sine', 0.08); setTimeout(()=>beep(900, 0.1, 'sine', 0.08), 80); break;\n    case 'wave':    beep(300, 0.15, 'sawtooth', 0.08); setTimeout(()=>beep(500, 0.2, 'square', 0.08), 150); break;\n    case 'clear':   [523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,0.12,'triangle',0.09),i*90)); break;\n    case 'gameover':[400,300,200,100].forEach((f,i)=>setTimeout(()=>beep(f,0.25,'sawtooth',0.1),i*180)); break;\n  }\n}\n\n// ------------- INPUT -------------------------------------------\nconst keys = Object.create(null);\nconst mouse = { x: W/2, y: H/2, worldX: 0, worldY: 0, down: false };\n\naddEventListener('keydown', e => {\n  keys[e.key.toLowerCase()] = true;\n  if (e.key.toLowerCase() === 'r') tryReload();\n  if (e.key === 'Escape') togglePause();\n});\naddEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });\ncanvas.addEventListener('mousemove', e => {\n  const r = canvas.getBoundingClientRect();\n  mouse.x = (e.clientX - r.left) * (canvas.width / r.width);\n  mouse.y = (e.clientY - r.top)  * (canvas.height / r.height);\n});\ncanvas.addEventListener('mousedown', e => { mouse.down = true; initAudio(); });\ncanvas.addEventListener('mouseup',   e => { mouse.down = false; });\ncanvas.addEventListener('contextmenu', e => e.preventDefault());\n\n// ------------- WORLD / CAMERA ----------------------------------\nconst world = { w: 2400, h: 1600 };\nconst camera = { x: 0, y: 0, shake: 0 };\n\nfunction cameraUpdate() {\n  const tx = clamp(game.player.x - W/2, 0, world.w - W);\n  const ty = clamp(game.player.y - H/2, 0, world.h - H);\n  camera.x = lerp(camera.x, tx, 0.12);\n  camera.y = lerp(camera.y, ty, 0.12);\n  mouse.worldX = mouse.x + camera.x;\n  mouse.worldY = mouse.y + camera.y;\n  if (camera.shake > 0.01) camera.shake *= 0.86; else camera.shake = 0;\n}\nfunction shakeCam(amt) { camera.shake = Math.min(20, camera.shake + amt); }\n\n// ------------- LEVELS ------------------------------------------\n// Each wave defines counts of zombie types to spawn.\nconst LEVELS = [\n  {\n    name: \"The Outskirts\",\n    desc: \"A sleepy town hits its bad day. Don't let them swarm.\",\n    bgA: '#8FA876', bgB: '#7B9363',\n    obstacles: [\n      {x: 600, y: 400, w: 140, h: 140, type:'crate'},\n      {x:1400, y: 900, w: 180, h: 100, type:'crate'},\n      {x: 900, y:1100, w: 120, h: 120, type:'barrel'},\n      {x:1800, y: 300, w: 100, h: 180, type:'crate'},\n    ],\n    waves: [ {walker:6}, {walker:8,runner:2}, {walker:10,runner:4} ],\n  },\n  {\n    name: \"Downtown Drift\",\n    desc: \"Abandoned cars, broken streets. More of them now.\",\n    bgA: '#7A6F88', bgB: '#5E5571',\n    obstacles: [\n      {x: 400, y: 300, w: 220, h: 110, type:'car'},\n      {x:1100, y: 500, w: 220, h: 110, type:'car'},\n      {x:1700, y: 950, w: 220, h: 110, type:'car'},\n      {x: 700, y:1150, w: 120, h: 120, type:'barrel'},\n      {x:1400, y:1200, w: 180, h: 80,  type:'crate'},\n    ],\n    waves: [ {walker:8,runner:3}, {walker:10,runner:5}, {walker:12,runner:6,brute:1} ],\n  },\n  {\n    name: \"Mall Panic\",\n    desc: \"Narrow aisles, fast sprinters. Keep moving.\",\n    bgA: '#A89878', bgB: '#8D7E60',\n    obstacles: [\n      {x: 500, y: 400, w: 80, h: 300, type:'crate'},\n      {x: 900, y: 400, w: 80, h: 300, type:'crate'},\n      {x:1300, y: 400, w: 80, h: 300, type:'crate'},\n      {x:1700, y: 400, w: 80, h: 300, type:'crate'},\n      {x: 500, y: 900, w: 80, h: 300, type:'crate'},\n      {x: 900, y: 900, w: 80, h: 300, type:'crate'},\n      {x:1300, y: 900, w: 80, h: 300, type:'crate'},\n      {x:1700, y: 900, w: 80, h: 300, type:'crate'},\n    ],\n    waves: [ {walker:6,runner:6}, {walker:8,runner:8,brute:1}, {walker:10,runner:10,brute:2} ],\n  },\n  {\n    name: \"Industrial Rot\",\n    desc: \"Barrels leak green. Brutes shrug off bullets.\",\n    bgA: '#5F6B70', bgB: '#4A5559',\n    obstacles: [\n      {x: 300, y: 300, w: 120, h: 120, type:'barrel'},\n      {x:2000, y: 300, w: 120, h: 120, type:'barrel'},\n      {x: 300, y:1200, w: 120, h: 120, type:'barrel'},\n      {x:2000, y:1200, w: 120, h: 120, type:'barrel'},\n      {x:1150, y: 700, w: 200, h: 200, type:'crate'},\n      {x: 700, y: 500, w: 140, h: 70,  type:'crate'},\n      {x:1550, y:1000, w: 140, h: 70,  type:'crate'},\n    ],\n    waves: [ {walker:10,runner:6,brute:2}, {walker:10,runner:10,brute:3}, {walker:12,runner:12,brute:4} ],\n  },\n  {\n    name: \"Final Stand\",\n    desc: \"Everything they've got. Everything you've got.\",\n    bgA: '#4A3A56', bgB: '#352741',\n    obstacles: [\n      {x: 400, y: 400, w: 160, h: 160, type:'crate'},\n      {x:1840, y: 400, w: 160, h: 160, type:'crate'},\n      {x: 400, y:1040, w: 160, h: 160, type:'crate'},\n      {x:1840, y:1040, w: 160, h: 160, type:'crate'},\n      {x:1120, y: 720, w: 160, h: 160, type:'barrel'},\n    ],\n    waves: [\n      {walker:12,runner:8,brute:3},\n      {walker:14,runner:12,brute:4},\n      {walker:10,runner:10,brute:3,boss:1},\n    ],\n  },\n];\n\n// Zombie archetypes\nconst ZTYPES = {\n  walker: { hp: 30, speed: 60,  damage: 10, radius: 20, color:'#8FCF3F', eye:'#c73866', score: 10, touchCooldown: 600 },\n  runner: { hp: 18, speed: 130, damage: 6,  radius: 16, color:'#CEDE4E', eye:'#6c2a4e', score: 15, touchCooldown: 450 },\n  brute:  { hp: 120, speed: 38, damage: 24, radius: 32, color:'#5F8C3F', eye:'#ff6b6b', score: 40, touchCooldown: 900 },\n  boss:   { hp: 600, speed: 50, damage: 35, radius: 54, color:'#3D5B2A', eye:'#ffbd2e', score: 250, touchCooldown: 700 },\n};\n\n// ------------- GAME STATE --------------------------------------\nconst game = {\n  state: 'menu',          // menu, intro, playing, paused, levelComplete, victory, gameOver\n  levelIdx: 0,\n  unlocked: 1,            // how many levels unlocked (level 1 always)\n  waveIdx: 0,\n  inWaveBreak: false,\n  waveBreakT: 0,\n  player: null,\n  zombies: [],\n  bullets: [],\n  particles: [],\n  damageNums: [],\n  powerups: [],\n  obstacles: [],\n  spawnQueue: [],\n  spawnTimer: 0,\n  kills: 0,\n  score: 0,\n  totalScore: 0,\n  levelKills: 0,\n  levelScore: 0,\n  tSinceHit: 999,         // for low-health red vignette pulsing\n};\n\n// ------------- ENTITIES ----------------------------------------\nclass Player {\n  constructor() {\n    this.x = world.w/2;\n    this.y = world.h/2;\n    this.r = 18;\n    this.speed = 210;           // px/sec\n    this.angle = 0;\n    this.hp = 100; this.maxHp = 100;\n    this.ammo = 12; this.maxAmmo = 12;\n    this.reloading = false;\n    this.reloadT = 0;\n    this.fireCd = 0;             // seconds until next shot\n    this.fireRate = 0.14;        // seconds between shots\n    this.damage = 14;\n    this.walkPhase = 0;\n    this.iFrames = 0;            // invuln time after hit\n    this.flashT = 0;\n  }\n  update(dt) {\n    // Movement\n    let mx = 0, my = 0;\n    if (keys['w'] || keys['arrowup'])    my -= 1;\n    if (keys['s'] || keys['arrowdown'])  my += 1;\n    if (keys['a'] || keys['arrowleft'])  mx -= 1;\n    if (keys['d'] || keys['arrowright']) mx += 1;\n    const mag = Math.hypot(mx, my);\n    if (mag > 0) {\n      mx /= mag; my /= mag;\n      const nx = this.x + mx * this.speed * dt;\n      const ny = this.y + my * this.speed * dt;\n      // Collide against obstacles (axis-separated)\n      if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\n      if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\n      this.x = clamp(this.x, this.r, world.w - this.r);\n      this.y = clamp(this.y, this.r, world.h - this.r);\n      this.walkPhase += dt * 14;\n    } else {\n      this.walkPhase *= 0.92;\n    }\n\n    // Aim\n    this.angle = Math.atan2(mouse.worldY - this.y, mouse.worldX - this.x);\n\n    // Fire\n    this.fireCd = Math.max(0, this.fireCd - dt);\n    if (mouse.down && !this.reloading && this.ammo > 0 && this.fireCd <= 0) this.shoot();\n\n    // Auto-reload when empty\n    if (this.ammo <= 0 && !this.reloading) this.startReload();\n\n    // Reload progress\n    if (this.reloading) {\n      this.reloadT -= dt;\n      if (this.reloadT <= 0) {\n        this.reloading = false;\n        this.ammo = this.maxAmmo;\n      }\n    }\n\n    // Invuln / hit flash\n    this.iFrames = Math.max(0, this.iFrames - dt);\n    this.flashT = Math.max(0, this.flashT - dt);\n  }\n  shoot() {\n    this.fireCd = this.fireRate;\n    this.ammo--;\n    // Spawn bullet from muzzle\n    const mx = this.x + Math.cos(this.angle) * 28;\n    const my = this.y + Math.sin(this.angle) * 28;\n    const spread = (Math.random() - 0.5) * 0.06;\n    const a = this.angle + spread;\n    game.bullets.push(new Bullet(mx, my, a, 900, this.damage));\n    // Muzzle flash particles\n    for (let i = 0; i < 5; i++) {\n      game.particles.push(new Particle(mx, my, {\n        vx: Math.cos(a) * rand(120, 260) + rand(-40,40),\n        vy: Math.sin(a) * rand(120, 260) + rand(-40,40),\n        life: 0.1, r: rand(3, 6),\n        color: Math.random() < 0.5 ? '#ffbd2e' : '#fff6c9',\n        fade: true,\n      }));\n    }\n    shakeCam(2);\n    sfx('shoot');\n  }\n  startReload() {\n    if (this.reloading || this.ammo === this.maxAmmo) return;\n    this.reloading = true;\n    this.reloadT = 1.0;\n    sfx('reload');\n  }\n  hurt(dmg) {\n    if (this.iFrames > 0) return;\n    this.hp = Math.max(0, this.hp - dmg);\n    this.iFrames = 0.55;\n    this.flashT = 0.25;\n    shakeCam(8);\n    flashDamage();\n    sfx('hurt');\n    game.tSinceHit = 0;\n    if (this.hp <= 0) {\n      game.state = 'gameOver';\n      sfx('gameover');\n      showGameOver();\n    }\n  }\n  draw() {\n    const x = this.x, y = this.y;\n    // Shadow\n    drawShadow(x, y, this.r);\n    // Legs bob\n    const legBob = Math.sin(this.walkPhase) * 3;\n    // Body\n    const bodyFlash = this.flashT > 0 && (Math.floor(this.flashT*30)%2===0);\n    ctx.save();\n    ctx.translate(x, y);\n    // Draw legs (two small ovals rotated in move direction)\n    ctx.fillStyle = '#2a2f4a';\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.fill();\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.fill();\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.stroke();\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.stroke();\n\n    ctx.rotate(this.angle);\n    // Gun (drawn first so body overlaps base)\n    ctx.fillStyle = '#2a2f4a';\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    // barrel\n    ctx.beginPath(); ctx.rect(10, -4, 24, 8); ctx.fill(); ctx.stroke();\n    // sight\n    ctx.beginPath(); ctx.rect(14, -7, 4, 3); ctx.fill(); ctx.stroke();\n    // Body (torso)\n    ctx.fillStyle = bodyFlash ? '#ffffff' : '#4ecdc4';\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill();\n    ctx.stroke();\n    // Chest strap\n    ctx.strokeStyle = '#0f0a1a';\n    ctx.lineWidth = 2.5;\n    ctx.beginPath(); ctx.moveTo(-12, -8); ctx.lineTo(12, 8); ctx.stroke();\n    // Head (offset forward so aim reads)\n    ctx.fillStyle = bodyFlash ? '#ffffff' : '#ffd2a4';\n    ctx.beginPath(); ctx.arc(4, 0, 11, 0, TAU); ctx.fill();\n    ctx.lineWidth = 3; ctx.strokeStyle = '#0f0a1a'; ctx.stroke();\n    // Eye (pointing forward)\n    ctx.fillStyle = '#0f0a1a';\n    ctx.beginPath(); ctx.arc(10, -1, 2, 0, TAU); ctx.fill();\n    // Hair tuft\n    ctx.fillStyle = '#3b2a1d';\n    ctx.beginPath(); ctx.arc(0, -7, 5, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.restore();\n  }\n}\n\nclass Zombie {\n  constructor(x, y, type='walker') {\n    const spec = ZTYPES[type];\n    this.x = x; this.y = y;\n    this.type = type;\n    this.spec = spec;\n    this.r = spec.radius;\n    this.hp = spec.hp;\n    this.maxHp = spec.hp;\n    this.speed = spec.speed;\n    this.damage = spec.damage;\n    this.color = spec.color;\n    this.eye = spec.eye;\n    this.touchCd = 0;\n    this.walkPhase = Math.random() * TAU;\n    this.hitFlash = 0;\n    this.angle = 0;\n    this.wobble = rand(0, TAU);\n  }\n  update(dt, player) {\n    const dx = player.x - this.x;\n    const dy = player.y - this.y;\n    const d = Math.hypot(dx, dy) || 0.001;\n    this.angle = Math.atan2(dy, dx);\n\n    // Speed: slight wobble for walkers, dead aim for runners\n    let spd = this.speed;\n    if (this.type === 'walker') spd *= 0.9 + 0.2*Math.sin(this.wobble);\n    this.wobble += dt * 3;\n\n    const vx = (dx/d) * spd;\n    const vy = (dy/d) * spd;\n    const nx = this.x + vx * dt;\n    const ny = this.y + vy * dt;\n    if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\n    if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\n\n    // Separate from other zombies (simple)\n    for (const other of game.zombies) {\n      if (other === this) continue;\n      const ox = other.x - this.x, oy = other.y - this.y;\n      const od = Math.hypot(ox, oy);\n      const minD = this.r + other.r;\n      if (od > 0 && od < minD) {\n        const push = (minD - od) * 0.5;\n        this.x -= (ox/od) * push;\n        this.y -= (oy/od) * push;\n      }\n    }\n\n    this.walkPhase += dt * (this.type === 'runner' ? 16 : this.type === 'brute' ? 6 : 10);\n    this.touchCd = Math.max(0, this.touchCd - dt*1000);\n    this.hitFlash = Math.max(0, this.hitFlash - dt);\n\n    // Attack on contact\n    if (d < this.r + player.r && this.touchCd <= 0) {\n      player.hurt(this.damage);\n      this.touchCd = this.spec.touchCooldown;\n      // knockback on brute/boss\n      if (this.type === 'brute' || this.type === 'boss') {\n        player.x += (dx/d) * -30;\n        player.y += (dy/d) * -30;\n      }\n    }\n  }\n  hurt(dmg, bx, by) {\n    this.hp -= dmg;\n    this.hitFlash = 0.12;\n    // blood spurt\n    for (let i = 0; i < 8; i++) {\n      const a = Math.random() * TAU;\n      const s = rand(120, 320);\n      game.particles.push(new Particle(bx, by, {\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\n        life: rand(0.25, 0.6), r: rand(3, 6),\n        color: this.type==='boss' ? '#ffbd2e' : '#8FCF3F',\n        fade: true, gravity: 200,\n      }));\n    }\n    // damage number\n    game.damageNums.push({\n      x: bx, y: by - this.r, life: 0.8, text: Math.ceil(dmg),\n      vy: -60, color: '#ffbd2e',\n    });\n    sfx('hit');\n    if (this.hp <= 0) {\n      this.die();\n      return true;\n    }\n    return false;\n  }\n  die() {\n    // Big splat\n    for (let i = 0; i < 18; i++) {\n      const a = Math.random() * TAU;\n      const s = rand(60, 280);\n      game.particles.push(new Particle(this.x, this.y, {\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\n        life: rand(0.4, 0.9), r: rand(4, 8),\n        color: this.type==='boss' ? '#ffbd2e' : '#8FCF3F',\n        fade: true, gravity: 300,\n      }));\n    }\n    // Chance to drop\n    if (Math.random() < 0.08) {\n      game.powerups.push(new Powerup(this.x, this.y, 'health'));\n    } else if (Math.random() < 0.06) {\n      game.powerups.push(new Powerup(this.x, this.y, 'ammo'));\n    }\n    game.kills++; game.levelKills++;\n    game.score += this.spec.score; game.levelScore += this.spec.score;\n    shakeCam(this.type==='boss' ? 14 : this.type==='brute' ? 6 : 3);\n    sfx('die');\n  }\n  draw() {\n    const x = this.x, y = this.y;\n    drawShadow(x, y, this.r);\n    ctx.save();\n    ctx.translate(x, y);\n\n    const flash = this.hitFlash > 0;\n    const bodyColor = flash ? '#ffffff' : this.color;\n\n    // Leg wobble (feet)\n    const bob = Math.sin(this.walkPhase) * 3;\n    ctx.fillStyle = '#1e3816';\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.ellipse(-this.r*0.4, this.r*0.7+bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.beginPath(); ctx.ellipse( this.r*0.4, this.r*0.7-bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\n\n    // Body (tilted toward player)\n    ctx.rotate(this.angle);\n    ctx.fillStyle = bodyColor;\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();\n\n    // Torn shirt accents (dark stripes)\n    ctx.strokeStyle = flash ? '#c8c8c8' : '#3a5a1f';\n    ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.moveTo(-this.r*0.7, -this.r*0.2); ctx.lineTo(this.r*0.3, this.r*0.5); ctx.stroke();\n    ctx.beginPath(); ctx.moveTo(-this.r*0.5, this.r*0.3); ctx.lineTo(this.r*0.1, -this.r*0.4); ctx.stroke();\n\n    // Head\n    const hr = this.r * 0.68;\n    ctx.fillStyle = flash ? '#ffffff' : lighten(this.color, 12);\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.arc(this.r*0.35, 0, hr, 0, TAU); ctx.fill(); ctx.stroke();\n\n    // Mouth / teeth\n    ctx.fillStyle = '#1a0a0a';\n    ctx.beginPath(); ctx.ellipse(this.r*0.7, hr*0.15, hr*0.35, hr*0.2, 0, 0, TAU); ctx.fill();\n    ctx.fillStyle = '#ffffff';\n    const teethY = hr*0.15;\n    for (let i = 0; i < 3; i++) {\n      ctx.beginPath();\n      ctx.rect(this.r*0.55 + i*5, teethY - 3, 3, 6);\n      ctx.fill();\n    }\n\n    // Eye (glowing)\n    ctx.fillStyle = this.eye;\n    ctx.beginPath(); ctx.arc(this.r*0.55, -hr*0.25, hr*0.22, 0, TAU); ctx.fill();\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2; ctx.stroke();\n    ctx.fillStyle = '#ffffff';\n    ctx.beginPath(); ctx.arc(this.r*0.58, -hr*0.30, hr*0.08, 0, TAU); ctx.fill();\n\n    // Boss horns\n    if (this.type === 'boss') {\n      ctx.fillStyle = '#f5e8c8';\n      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n      ctx.beginPath(); ctx.moveTo(this.r*0.2, -hr*0.8); ctx.lineTo(this.r*0.4, -hr*1.4); ctx.lineTo(this.r*0.55, -hr*0.75); ctx.closePath(); ctx.fill(); ctx.stroke();\n      ctx.beginPath(); ctx.moveTo(this.r*0.55, -hr*0.75); ctx.lineTo(this.r*0.85, -hr*1.2); ctx.lineTo(this.r*0.80, -hr*0.55); ctx.closePath(); ctx.fill(); ctx.stroke();\n    }\n\n    ctx.restore();\n\n    // HP bar for non-walkers\n    if (this.type === 'brute' || this.type === 'boss') {\n      const bw = this.r*2.2, bh = 5;\n      ctx.fillStyle = '#0f0a1a';\n      ctx.fillRect(x - bw/2 - 1, y - this.r - 12 - 1, bw + 2, bh + 2);\n      ctx.fillStyle = '#c73866';\n      ctx.fillRect(x - bw/2, y - this.r - 12, bw * (this.hp / this.maxHp), bh);\n    }\n  }\n}\n\nclass Bullet {\n  constructor(x, y, angle, speed, damage) {\n    this.x = x; this.y = y;\n    this.vx = Math.cos(angle) * speed;\n    this.vy = Math.sin(angle) * speed;\n    this.angle = angle;\n    this.life = 0.7;\n    this.damage = damage;\n    this.dead = false;\n    this.trail = [];\n  }\n  update(dt) {\n    this.trail.push({x: this.x, y: this.y, a: 1});\n    if (this.trail.length > 5) this.trail.shift();\n    this.x += this.vx * dt;\n    this.y += this.vy * dt;\n    this.life -= dt;\n    if (this.life <= 0) { this.dead = true; return; }\n    if (this.x < 0 || this.y < 0 || this.x > world.w || this.y > world.h) { this.dead = true; return; }\n    if (collidesObstacle(this.x, this.y, 2)) {\n      this.dead = true;\n      // sparks\n      for (let i = 0; i < 6; i++) {\n        const a = Math.random()*TAU;\n        const s = rand(80, 200);\n        game.particles.push(new Particle(this.x, this.y, {\n          vx: Math.cos(a)*s, vy: Math.sin(a)*s,\n          life: 0.2, r: rand(2,4), color: '#ffbd2e', fade: true,\n        }));\n      }\n      return;\n    }\n    for (const z of game.zombies) {\n      if (dist2(this.x, this.y, z.x, z.y) < z.r*z.r) {\n        z.hurt(this.damage, this.x, this.y);\n        this.dead = true;\n        return;\n      }\n    }\n  }\n  draw() {\n    // Trail\n    for (let i = 0; i < this.trail.length; i++) {\n      const t = this.trail[i];\n      const a = (i+1) / this.trail.length;\n      ctx.globalAlpha = a * 0.6;\n      ctx.fillStyle = '#ffbd2e';\n      ctx.beginPath(); ctx.arc(t.x, t.y, 3 * a, 0, TAU); ctx.fill();\n    }\n    ctx.globalAlpha = 1;\n    // Body\n    ctx.save();\n    ctx.translate(this.x, this.y);\n    ctx.rotate(this.angle);\n    ctx.fillStyle = '#fff6c9';\n    ctx.strokeStyle = '#e08e00';\n    ctx.lineWidth = 2;\n    ctx.beginPath(); ctx.ellipse(0, 0, 7, 3, 0, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.restore();\n  }\n}\n\nclass Particle {\n  constructor(x, y, opts) {\n    this.x = x; this.y = y;\n    this.vx = opts.vx || 0;\n    this.vy = opts.vy || 0;\n    this.life = opts.life || 0.5;\n    this.maxLife = this.life;\n    this.r = opts.r || 3;\n    this.color = opts.color || '#fff';\n    this.fade = opts.fade;\n    this.gravity = opts.gravity || 0;\n    this.dead = false;\n  }\n  update(dt) {\n    this.x += this.vx * dt;\n    this.y += this.vy * dt;\n    this.vx *= 0.92;\n    this.vy *= 0.92;\n    this.vy += this.gravity * dt;\n    this.life -= dt;\n    if (this.life <= 0) this.dead = true;\n  }\n  draw() {\n    const alpha = this.fade ? clamp(this.life / this.maxLife, 0, 1) : 1;\n    ctx.globalAlpha = alpha;\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.r * (this.fade ? alpha*0.6 + 0.4 : 1), 0, TAU);\n    ctx.fill();\n    ctx.globalAlpha = 1;\n  }\n}\n\nclass Powerup {\n  constructor(x, y, type) {\n    this.x = x; this.y = y;\n    this.type = type; // 'health', 'ammo'\n    this.r = 16;\n    this.phase = 0;\n    this.dead = false;\n    this.life = 14; // despawn after a while\n  }\n  update(dt, player) {\n    this.phase += dt * 3;\n    this.life -= dt;\n    if (this.life <= 0) this.dead = true;\n    if (dist2(this.x, this.y, player.x, player.y) < (this.r + player.r)**2) {\n      if (this.type === 'health') {\n        player.hp = Math.min(player.maxHp, player.hp + 30);\n      } else if (this.type === 'ammo') {\n        player.ammo = player.maxAmmo;\n        player.reloading = false;\n      }\n      this.dead = true;\n      sfx('pickup');\n      for (let i = 0; i < 10; i++) {\n        const a = Math.random()*TAU;\n        game.particles.push(new Particle(this.x, this.y, {\n          vx: Math.cos(a)*rand(60,160), vy: Math.sin(a)*rand(60,160),\n          life: 0.5, r: rand(3,5),\n          color: this.type==='health' ? '#ff6b6b' : '#ffbd2e', fade: true,\n        }));\n      }\n    }\n  }\n  draw() {\n    const yOff = Math.sin(this.phase) * 4;\n    // Halo\n    ctx.fillStyle = this.type==='health' ? 'rgba(255,107,107,0.2)' : 'rgba(255,189,46,0.2)';\n    ctx.beginPath(); ctx.arc(this.x, this.y + yOff, this.r*1.6, 0, TAU); ctx.fill();\n    // Box\n    ctx.save();\n    ctx.translate(this.x, this.y + yOff);\n    ctx.fillStyle = this.type==='health' ? '#fff' : '#2a2f4a';\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath();\n    ctx.rect(-this.r, -this.r, this.r*2, this.r*2);\n    ctx.fill(); ctx.stroke();\n    // Icon\n    if (this.type === 'health') {\n      ctx.fillStyle = '#c73866';\n      ctx.fillRect(-4, -10, 8, 20);\n      ctx.fillRect(-10, -4, 20, 8);\n    } else {\n      ctx.fillStyle = '#ffbd2e';\n      ctx.beginPath();\n      ctx.moveTo(-8, -4); ctx.lineTo(0, -10); ctx.lineTo(8, -4); ctx.lineTo(8, 8); ctx.lineTo(-8, 8); ctx.closePath();\n      ctx.fill(); ctx.stroke();\n      ctx.fillStyle = '#0f0a1a';\n      ctx.fillRect(-2, -2, 4, 8);\n    }\n    ctx.restore();\n  }\n}\n\n// ------------- COLLISION / HELPERS -----------------------------\nfunction collidesObstacle(x, y, r) {\n  for (const o of game.obstacles) {\n    const cx = clamp(x, o.x, o.x + o.w);\n    const cy = clamp(y, o.y, o.y + o.h);\n    const dx = x - cx, dy = y - cy;\n    if (dx*dx + dy*dy < r*r) return true;\n  }\n  return false;\n}\nfunction lighten(hex, pct) {\n  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);\n  const m = v => clamp(Math.floor(v + (255-v) * pct/100), 0, 255);\n  return '#' + [m(r),m(g),m(b)].map(v=>v.toString(16).padStart(2,'0')).join('');\n}\nfunction drawShadow(x, y, r) {\n  ctx.fillStyle = 'rgba(15, 10, 26, 0.35)';\n  ctx.beginPath(); ctx.ellipse(x, y + r*0.85, r*0.95, r*0.35, 0, 0, TAU); ctx.fill();\n}\n\n// ------------- RENDERING ---------------------------------------\nfunction drawWorld() {\n  const level = LEVELS[game.levelIdx];\n  // Camera shake offset\n  const sx = camera.shake ? (Math.random()-0.5)*camera.shake : 0;\n  const sy = camera.shake ? (Math.random()-0.5)*camera.shake : 0;\n\n  ctx.save();\n  ctx.translate(-camera.x + sx, -camera.y + sy);\n\n  // Background tile\n  const tileSize = 80;\n  const startX = Math.floor(camera.x / tileSize) * tileSize;\n  const startY = Math.floor(camera.y / tileSize) * tileSize;\n  for (let x = startX; x < camera.x + W + tileSize; x += tileSize) {\n    for (let y = startY; y < camera.y + H + tileSize; y += tileSize) {\n      const parity = ((x/tileSize) + (y/tileSize)) & 1;\n      ctx.fillStyle = parity ? level.bgA : level.bgB;\n      ctx.fillRect(x, y, tileSize, tileSize);\n    }\n  }\n  // Scattered speckles (grass blades / cracks)\n  ctx.fillStyle = 'rgba(255,255,255,0.04)';\n  for (let i = 0; i < 120; i++) {\n    // deterministic by seed so they don't shimmer\n    const seed = i * 9301 + 49297;\n    const px = (seed * 3) % world.w;\n    const py = (seed * 7) % world.h;\n    if (px < camera.x - 60 || px > camera.x + W + 60) continue;\n    if (py < camera.y - 60 || py > camera.y + H + 60) continue;\n    ctx.beginPath(); ctx.arc(px, py, 2 + (seed%3), 0, TAU); ctx.fill();\n  }\n\n  // World border\n  ctx.strokeStyle = '#0f0a1a';\n  ctx.lineWidth = 12;\n  ctx.strokeRect(0, 0, world.w, world.h);\n  // Inner border line (decorative)\n  ctx.strokeStyle = 'rgba(0,0,0,0.2)';\n  ctx.lineWidth = 3;\n  ctx.strokeRect(18, 18, world.w-36, world.h-36);\n\n  // Obstacles\n  for (const o of game.obstacles) drawObstacle(o);\n\n  // Powerups\n  for (const p of game.powerups) p.draw();\n\n  // Entities (sort by y for depth)\n  const sorted = [game.player, ...game.zombies].sort((a,b) => a.y - b.y);\n  for (const e of sorted) e.draw();\n\n  // Bullets (above entities for visibility)\n  for (const b of game.bullets) b.draw();\n\n  // Particles\n  for (const p of game.particles) p.draw();\n\n  // Damage numbers\n  for (const d of game.damageNums) {\n    const alpha = clamp(d.life / 0.8, 0, 1);\n    ctx.globalAlpha = alpha;\n    ctx.font = 'bold 20px Bangers, sans-serif';\n    ctx.textAlign = 'center';\n    ctx.lineWidth = 4; ctx.strokeStyle = '#0f0a1a';\n    ctx.strokeText(d.text, d.x, d.y);\n    ctx.fillStyle = d.color;\n    ctx.fillText(d.text, d.x, d.y);\n    ctx.globalAlpha = 1;\n  }\n\n  ctx.restore();\n\n  // Low HP vignette\n  if (game.player && game.player.hp < 35) {\n    const pulse = 0.25 + 0.15 * Math.sin(performance.now()/200);\n    const grad = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.max(W,H)*0.7);\n    grad.addColorStop(0, 'rgba(199,56,102,0)');\n    grad.addColorStop(1, `rgba(199,56,102,${pulse})`);\n    ctx.fillStyle = grad;\n    ctx.fillRect(0, 0, W, H);\n  }\n}\n\nfunction drawObstacle(o) {\n  const {x, y, w, h, type} = o;\n  ctx.save();\n  if (type === 'crate') {\n    // Shadow\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\n    ctx.fillRect(x+6, y+h-4, w, 12);\n    // Body\n    ctx.fillStyle = '#a36841';\n    ctx.fillRect(x, y, w, h);\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;\n    ctx.strokeRect(x, y, w, h);\n    // Planks\n    ctx.strokeStyle = '#6b3e24'; ctx.lineWidth = 3;\n    ctx.beginPath();\n    ctx.moveTo(x, y+h/3); ctx.lineTo(x+w, y+h/3);\n    ctx.moveTo(x, y+h*2/3); ctx.lineTo(x+w, y+h*2/3);\n    ctx.moveTo(x+w/2, y); ctx.lineTo(x+w/2, y+h);\n    ctx.stroke();\n    // Highlight\n    ctx.fillStyle = 'rgba(255,255,255,0.1)';\n    ctx.fillRect(x+4, y+4, w-8, 6);\n  } else if (type === 'barrel') {\n    // Shadow\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\n    ctx.beginPath(); ctx.ellipse(x+w/2+6, y+h+6, w*0.55, 10, 0, 0, TAU); ctx.fill();\n    // Body\n    ctx.fillStyle = '#c73866';\n    ctx.beginPath(); ctx.ellipse(x+w/2, y+h/2, w*0.5, h*0.5, 0, 0, TAU); ctx.fill();\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4; ctx.stroke();\n    // Ridges\n    ctx.strokeStyle = '#8e1e3d'; ctx.lineWidth = 3;\n    ctx.beginPath();\n    ctx.ellipse(x+w/2, y+h*0.3, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();\n    ctx.beginPath();\n    ctx.ellipse(x+w/2, y+h*0.7, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();\n    // Bio hazard dot\n    ctx.fillStyle = '#ffbd2e';\n    ctx.beginPath(); ctx.arc(x+w/2, y+h/2, 6, 0, TAU); ctx.fill();\n  } else if (type === 'car') {\n    // Shadow\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\n    ctx.fillRect(x+6, y+h+2, w, 10);\n    // Body\n    ctx.fillStyle = '#4a5a8c';\n    ctx.fillRect(x, y, w, h);\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;\n    ctx.strokeRect(x, y, w, h);\n    // Windows\n    ctx.fillStyle = '#1a1428';\n    ctx.fillRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);\n    ctx.fillRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);\n    ctx.strokeRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);\n    ctx.strokeRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);\n    // Headlights\n    ctx.fillStyle = '#fff6c9';\n    ctx.beginPath(); ctx.arc(x+w-4, y+10, 5, 0, TAU); ctx.fill();\n    ctx.beginPath(); ctx.arc(x+w-4, y+h-10, 5, 0, TAU); ctx.fill();\n  }\n  ctx.restore();\n}\n\n// ------------- LEVEL LOGIC -------------------------------------\nfunction loadLevel(idx) {\n  game.levelIdx = idx;\n  game.waveIdx = 0;\n  game.zombies = [];\n  game.bullets = [];\n  game.particles = [];\n  game.damageNums = [];\n  game.powerups = [];\n  game.spawnQueue = [];\n  game.levelKills = 0;\n  game.levelScore = 0;\n  game.inWaveBreak = false;\n  game.waveBreakT = 0;\n  const level = LEVELS[idx];\n  game.obstacles = level.obstacles.map(o => ({...o}));\n  game.player = new Player();\n  // Start player in a safe spot not inside obstacles\n  while (collidesObstacle(game.player.x, game.player.y, game.player.r + 4)) {\n    game.player.x += 40;\n  }\n  camera.x = game.player.x - W/2;\n  camera.y = game.player.y - H/2;\n}\n\nfunction startWave() {\n  const level = LEVELS[game.levelIdx];\n  const wave = level.waves[game.waveIdx];\n  game.spawnQueue = [];\n  for (const [type, count] of Object.entries(wave)) {\n    for (let i = 0; i < count; i++) {\n      game.spawnQueue.push({\n        type,\n        // stagger delay so they trickle in\n        delay: i * (type === 'boss' ? 1500 : type === 'brute' ? 800 : type === 'runner' ? 220 : 350),\n      });\n    }\n  }\n  game.spawnTimer = 0;\n  showWaveBanner(`WAVE ${game.waveIdx+1} / ${level.waves.length}`);\n  sfx('wave');\n}\n\nfunction updateSpawns(dt) {\n  if (game.spawnQueue.length === 0) return;\n  game.spawnTimer += dt * 1000;\n  // Spawn any queued that have elapsed\n  const remaining = [];\n  for (const s of game.spawnQueue) {\n    if (game.spawnTimer >= s.delay) {\n      spawnZombie(s.type);\n    } else {\n      remaining.push(s);\n    }\n  }\n  game.spawnQueue = remaining;\n}\n\nfunction spawnZombie(type) {\n  // Spawn at a random edge, picking the furthest side from player for interesting pressure\n  const p = game.player;\n  const sides = [\n    { x: rand(40, world.w-40), y: 40 },\n    { x: rand(40, world.w-40), y: world.h-40 },\n    { x: 40, y: rand(40, world.h-40) },\n    { x: world.w-40, y: rand(40, world.h-40) },\n  ];\n  // pick one weighted by distance from player\n  sides.sort((a,b) => dist2(b.x,b.y,p.x,p.y) - dist2(a.x,a.y,p.x,p.y));\n  const pick = sides[randi(0, Math.min(2, sides.length))];\n  // avoid spawning inside obstacle\n  let x = pick.x, y = pick.y, tries = 0;\n  while (collidesObstacle(x, y, 30) && tries < 10) {\n    x = rand(40, world.w-40);\n    y = rand(40, world.h-40);\n    tries++;\n  }\n  // spawn puff\n  for (let i = 0; i < 10; i++) {\n    const a = Math.random()*TAU;\n    game.particles.push(new Particle(x, y, {\n      vx: Math.cos(a)*rand(40,120), vy: Math.sin(a)*rand(40,120),\n      life: 0.4, r: rand(3,6), color: '#c73866', fade: true,\n    }));\n  }\n  game.zombies.push(new Zombie(x, y, type));\n}\n\nfunction endWaveCheck() {\n  if (game.spawnQueue.length === 0 && game.zombies.length === 0 && !game.inWaveBreak) {\n    const level = LEVELS[game.levelIdx];\n    if (game.waveIdx + 1 >= level.waves.length) {\n      completeLevel();\n    } else {\n      game.inWaveBreak = true;\n      game.waveBreakT = 3.0;\n    }\n  }\n}\n\nfunction completeLevel() {\n  game.state = 'levelComplete';\n  game.totalScore += game.levelScore;\n  game.unlocked = Math.max(game.unlocked, game.levelIdx + 2);\n  sfx('clear');\n  // Check full victory\n  if (game.levelIdx + 1 >= LEVELS.length) {\n    game.state = 'victory';\n    showVictory();\n  } else {\n    showLevelComplete();\n  }\n}\n\nfunction tryReload() {\n  if (game.state !== 'playing') return;\n  if (game.player) game.player.startReload();\n}\n\n// ------------- UI BINDINGS -------------------------------------\nconst $ = id => document.getElementById(id);\nconst menu = $('menu'), levelIntro = $('levelIntro'), levelComplete = $('levelComplete'),\n      victory = $('victory'), gameOver = $('gameOver'), pause = $('pause');\nconst waveBanner = $('waveBanner');\nconst damageFlashEl = $('damageFlash');\n\nfunction hideAllOverlays() {\n  [menu, levelIntro, levelComplete, victory, gameOver, pause].forEach(o => o.classList.add('hidden'));\n}\nfunction showOverlay(el) { hideAllOverlays(); el.classList.remove('hidden'); el.classList.add('fade-in'); }\n\nfunction renderLevelSelect() {\n  const wrap = $('levelSelect');\n  wrap.innerHTML = '';\n  LEVELS.forEach((lv, i) => {\n    const tile = document.createElement('div');\n    tile.className = 'level-tile' + (i + 1 > game.unlocked ? ' locked' : '');\n    tile.innerHTML = `<div class=\"num\">${i+1}</div><div class=\"lbl\">${lv.name.toUpperCase()}</div>`;\n    if (i + 1 <= game.unlocked) {\n      tile.addEventListener('click', () => { initAudio(); openLevelIntro(i); });\n    }\n    wrap.appendChild(tile);\n  });\n}\n\nfunction openLevelIntro(idx) {\n  const lv = LEVELS[idx];\n  $('introLevelNum').textContent = `LEVEL ${idx+1}`;\n  $('introName').textContent = lv.name;\n  $('introDesc').textContent = lv.desc;\n  const totals = lv.waves.reduce((acc, w) => {\n    for (const [k,v] of Object.entries(w)) acc[k] = (acc[k]||0) + v;\n    return acc;\n  }, {});\n  $('introStats').innerHTML = Object.entries(totals).map(([k,v]) => `<span>${v} ${k.toUpperCase()}</span>`).join('');\n  game.levelIdx = idx;\n  showOverlay(levelIntro);\n}\n\nfunction startGame() {\n  loadLevel(game.levelIdx);\n  game.state = 'playing';\n  hideAllOverlays();\n  startWave();\n}\n\nfunction showLevelComplete() {\n  $('completeKills').textContent = game.levelKills;\n  $('completeScore').textContent = game.levelScore;\n  showOverlay(levelComplete);\n}\nfunction showVictory() {\n  $('victoryScore').textContent = game.totalScore;\n  showOverlay(victory);\n}\nfunction showGameOver() {\n  $('overKills').textContent = game.levelKills;\n  $('overScore').textContent = game.levelScore;\n  showOverlay(gameOver);\n}\n\nfunction showWaveBanner(text) {\n  waveBanner.textContent = text;\n  waveBanner.classList.remove('show');\n  // force reflow\n  void waveBanner.offsetWidth;\n  waveBanner.classList.add('show');\n}\n\nfunction flashDamage() {\n  damageFlashEl.classList.remove('hit');\n  void damageFlashEl.offsetWidth;\n  damageFlashEl.classList.add('hit');\n}\n\nfunction togglePause() {\n  if (game.state === 'playing') {\n    game.state = 'paused';\n    showOverlay(pause);\n  } else if (game.state === 'paused') {\n    game.state = 'playing';\n    hideAllOverlays();\n  }\n}\n\n// ------------- HUD UPDATE --------------------------------------\nfunction updateHUD() {\n  if (!game.player) return;\n  const p = game.player;\n  $('hpFill').style.width = (p.hp / p.maxHp * 100) + '%';\n  $('hpText').textContent = p.hp;\n  const af = $('ammoFill');\n  if (p.reloading) {\n    af.style.width = (1 - p.reloadT/1.0) * 100 + '%';\n    af.classList.add('reload');\n    $('ammoText').textContent = 'RELOAD';\n  } else {\n    af.style.width = (p.ammo / p.maxAmmo * 100) + '%';\n    af.classList.remove('reload');\n    $('ammoText').textContent = `${p.ammo}/${p.maxAmmo}`;\n  }\n  $('lvlText').textContent = game.levelIdx + 1;\n  const lv = LEVELS[game.levelIdx];\n  $('waveText').textContent = `${game.waveIdx+1}/${lv.waves.length}`;\n  $('leftText').textContent = game.zombies.length + game.spawnQueue.length;\n  $('killText').textContent = game.kills;\n  $('scoreText').textContent = game.score;\n}\n\n// ------------- MAIN LOOP ---------------------------------------\nlet lastT = performance.now();\nfunction loop(now) {\n  const dt = Math.min(0.05, (now - lastT) / 1000);\n  lastT = now;\n\n  if (game.state === 'playing') {\n    game.player.update(dt);\n    cameraUpdate();\n\n    for (const z of game.zombies) z.update(dt, game.player);\n    for (const b of game.bullets) b.update(dt);\n    for (const p of game.particles) p.update(dt);\n    for (const pw of game.powerups) pw.update(dt, game.player);\n\n    // damage numbers\n    for (const d of game.damageNums) {\n      d.y += d.vy * dt;\n      d.vy *= 0.95;\n      d.life -= dt;\n    }\n\n    // Clean up dead\n    game.zombies = game.zombies.filter(z => z.hp > 0);\n    game.bullets = game.bullets.filter(b => !b.dead);\n    game.particles = game.particles.filter(p => !p.dead);\n    game.damageNums = game.damageNums.filter(d => d.life > 0);\n    game.powerups = game.powerups.filter(p => !p.dead);\n\n    // Wave spawn / progression\n    if (game.inWaveBreak) {\n      game.waveBreakT -= dt;\n      if (game.waveBreakT <= 0) {\n        game.inWaveBreak = false;\n        game.waveIdx++;\n        startWave();\n      }\n    } else {\n      updateSpawns(dt);\n      endWaveCheck();\n    }\n\n    game.tSinceHit += dt;\n    updateHUD();\n  } else if (game.state === 'paused' || game.state === 'intro' || game.state === 'menu') {\n    // Still tick particles for menu ambience? skip for now\n  }\n\n  // Render (always, so we see scene behind overlays)\n  ctx.fillStyle = '#0f0a1a';\n  ctx.fillRect(0, 0, W, H);\n  if (game.player) drawWorld();\n  else drawMenuScene();\n\n  requestAnimationFrame(loop);\n}\n\n// Ambient cartoon scene under the menu\nlet menuT = 0;\nfunction drawMenuScene() {\n  menuT += 0.016;\n  // tiled grass background\n  const tile = 80;\n  for (let x = 0; x < W + tile; x += tile) {\n    for (let y = 0; y < H + tile; y += tile) {\n      const parity = ((x/tile) + (y/tile)) & 1;\n      ctx.fillStyle = parity ? '#8FA876' : '#7B9363';\n      ctx.fillRect(x, y, tile, tile);\n    }\n  }\n  // Drifting ambient zombies\n  for (let i = 0; i < 7; i++) {\n    const baseX = ((i * 187 + menuT*30) % (W + 200)) - 100;\n    const baseY = 120 + (i * 91) % (H - 240);\n    const z = { x: baseX, y: baseY + Math.sin(menuT + i)*10, r: 22, type:'walker', spec: ZTYPES.walker,\n                color: '#8FCF3F', eye: '#c73866', walkPhase: menuT*8+i, angle: 0, hitFlash: 0 };\n    Zombie.prototype.draw.call(z);\n  }\n}\n\n// ------------- WIRING ------------------------------------------\n$('startBtn').addEventListener('click', () => { initAudio(); startGame(); });\n$('nextBtn').addEventListener('click', () => { initAudio(); game.levelIdx++; openLevelIntro(game.levelIdx); });\n$('completeMenuBtn').addEventListener('click', () => backToMenu());\n$('victoryMenuBtn').addEventListener('click', () => backToMenu());\n$('overMenuBtn').addEventListener('click', () => backToMenu());\n$('retryBtn').addEventListener('click', () => { initAudio(); startGame(); });\n$('resumeBtn').addEventListener('click', () => togglePause());\n$('pauseMenuBtn').addEventListener('click', () => backToMenu());\n\nfunction backToMenu() {\n  game.state = 'menu';\n  game.player = null;\n  game.zombies = []; game.bullets = []; game.particles = []; game.powerups = [];\n  renderLevelSelect();\n  showOverlay(menu);\n}\n\n// Init\nrenderLevelSelect();\nshowOverlay(menu);\nrequestAnimationFrame(loop);\n\n// Responsive: scale canvas to fit viewport while preserving 16:9\nfunction fitCanvas() {\n  const stage = document.getElementById('stage');\n  const availW = stage.clientWidth - 40;\n  const availH = stage.clientHeight - 40;\n  const ratio = 1280/720;\n  let w = availW, h = availW / ratio;\n  if (h > availH) { h = availH; w = availH * ratio; }\n  canvas.style.width = w + 'px';\n  canvas.style.height = h + 'px';\n}\naddEventListener('resize', fitCanvas);\nfitCanvas();\n</script>\n</body>\n</html>\n"
  },
  "message": "Creating the main zombie defense game HTML file",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"html\", \"code\": \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n<meta charset=\\\"UTF-8\\\">\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n<title>Zombie Horde Defense</title>\\n<link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n<link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n<link href=\\\"https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@700;900&display=swap\\\" rel=\\\"stylesheet\\\">\\n<style>\\n  :root {\\n    --c-bg-a: #1a1428;\\n    --c-bg-b: #2a1f3d;\\n    --c-accent: #ffbd2e;\\n    --c-accent-hot: #ff6b6b;\\n    --c-accent-cool: #4ecdc4;\\n    --c-dark: #0f0a1a;\\n    --c-blood: #c73866;\\n    --c-slime: #8fcf3f;\\n  }\\n  * { margin: 0; padding: 0; box-sizing: border-box; }\\n  html, body {\\n    width: 100%; height: 100%;\\n    overflow: hidden;\\n    background: var(--c-bg-a);\\n    font-family: 'Nunito', sans-serif;\\n    color: #fff;\\n    user-select: none;\\n    -webkit-user-select: none;\\n  }\\n  #stage {\\n    position: relative;\\n    width: 100vw; height: 100vh;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background:\\n      radial-gradient(ellipse at 30% 20%, #3a2a54 0%, transparent 60%),\\n      radial-gradient(ellipse at 70% 80%, #241836 0%, transparent 60%),\\n      linear-gradient(180deg, #1a1428 0%, #0f0a1a 100%);\\n  }\\n  canvas {\\n    display: block;\\n    image-rendering: pixelated;\\n    image-rendering: -moz-crisp-edges;\\n    image-rendering: crisp-edges;\\n    cursor: crosshair;\\n    box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 4px var(--c-dark), 0 0 0 8px var(--c-accent);\\n    border-radius: 6px;\\n  }\\n  #hud {\\n    position: absolute;\\n    inset: 0;\\n    pointer-events: none;\\n    display: flex;\\n    flex-direction: column;\\n    font-family: 'Nunito', sans-serif;\\n  }\\n  .hud-top, .hud-bottom {\\n    position: absolute;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    display: flex;\\n    gap: 16px;\\n    padding: 14px 22px;\\n    pointer-events: none;\\n  }\\n  .hud-top { top: 3vh; }\\n  .hud-bottom { bottom: 3vh; }\\n  .pill {\\n    background: rgba(15, 10, 26, 0.78);\\n    border: 3px solid var(--c-dark);\\n    box-shadow: 0 4px 0 var(--c-dark), inset 0 2px 0 rgba(255,255,255,0.08);\\n    border-radius: 16px;\\n    padding: 10px 18px;\\n    display: flex;\\n    align-items: center;\\n    gap: 10px;\\n    font-weight: 900;\\n    letter-spacing: 0.5px;\\n  }\\n  .pill .label {\\n    font-size: 11px;\\n    opacity: 0.7;\\n    text-transform: uppercase;\\n    letter-spacing: 1.5px;\\n  }\\n  .pill .value {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 24px;\\n    letter-spacing: 2px;\\n  }\\n  .hp-bar, .ammo-bar {\\n    width: 140px;\\n    height: 14px;\\n    background: #0a0614;\\n    border-radius: 8px;\\n    border: 2px solid var(--c-dark);\\n    overflow: hidden;\\n    position: relative;\\n  }\\n  .hp-fill {\\n    height: 100%;\\n    background: linear-gradient(180deg, #ff9baf, var(--c-blood));\\n    transition: width 0.18s ease;\\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\\n  }\\n  .ammo-fill {\\n    height: 100%;\\n    background: linear-gradient(180deg, #ffd966, var(--c-accent));\\n    transition: width 0.12s ease;\\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\\n  }\\n  .ammo-fill.reload {\\n    background: linear-gradient(180deg, #7dd3d0, var(--c-accent-cool));\\n    animation: reloading 0.8s ease-in-out infinite alternate;\\n  }\\n  @keyframes reloading {\\n    from { filter: brightness(0.8); }\\n    to { filter: brightness(1.3); }\\n  }\\n  .wave-banner {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 72px;\\n    letter-spacing: 8px;\\n    color: var(--c-accent-hot);\\n    text-shadow:\\n      4px 4px 0 var(--c-dark),\\n      -2px -2px 0 #fff,\\n      0 0 40px rgba(255,107,107,0.5);\\n    opacity: 0;\\n    pointer-events: none;\\n    white-space: nowrap;\\n  }\\n  .wave-banner.show {\\n    animation: banner-in 2.4s cubic-bezier(0.2, 0.9, 0.3, 1.4) forwards;\\n  }\\n  @keyframes banner-in {\\n    0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(-10deg); }\\n    18%  { opacity: 1; transform: translate(-50%, -50%) scale(1.15) rotate(2deg); }\\n    28%  { transform: translate(-50%, -50%) scale(1) rotate(0deg); }\\n    75%  { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }\\n    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4) rotate(0deg); }\\n  }\\n  .overlay {\\n    position: absolute;\\n    inset: 0;\\n    background: rgba(15, 10, 26, 0.82);\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 24px;\\n    pointer-events: auto;\\n    backdrop-filter: blur(6px);\\n    -webkit-backdrop-filter: blur(6px);\\n  }\\n  .overlay.hidden { display: none; }\\n  .title {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 110px;\\n    letter-spacing: 6px;\\n    line-height: 0.9;\\n    color: var(--c-accent);\\n    text-shadow:\\n      5px 5px 0 var(--c-dark),\\n      -3px -3px 0 var(--c-accent-hot),\\n      0 0 40px rgba(255,189,46,0.4);\\n    text-align: center;\\n    transform: rotate(-2deg);\\n  }\\n  .title small {\\n    display: block;\\n    font-size: 34px;\\n    color: var(--c-accent-cool);\\n    letter-spacing: 10px;\\n    text-shadow: 3px 3px 0 var(--c-dark);\\n    margin-top: 8px;\\n    transform: rotate(3deg);\\n  }\\n  .subtitle {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 54px;\\n    letter-spacing: 5px;\\n    color: #fff;\\n    text-shadow: 4px 4px 0 var(--c-dark);\\n    text-align: center;\\n  }\\n  .subtitle.hot { color: var(--c-accent-hot); }\\n  .subtitle.cool { color: var(--c-accent-cool); }\\n  .subtitle.warn { color: var(--c-accent); }\\n  .level-card {\\n    background: rgba(26, 20, 40, 0.9);\\n    border: 4px solid var(--c-dark);\\n    box-shadow: 0 8px 0 var(--c-dark), inset 0 4px 0 rgba(255,255,255,0.08);\\n    border-radius: 20px;\\n    padding: 24px 36px;\\n    max-width: 540px;\\n    text-align: center;\\n  }\\n  .level-card .name {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 38px;\\n    letter-spacing: 3px;\\n    color: var(--c-accent-cool);\\n    margin-bottom: 6px;\\n  }\\n  .level-card .desc {\\n    font-size: 16px;\\n    line-height: 1.5;\\n    opacity: 0.85;\\n    font-weight: 700;\\n  }\\n  .level-card .stats {\\n    display: flex;\\n    justify-content: center;\\n    gap: 20px;\\n    margin-top: 14px;\\n    font-family: 'Bangers', sans-serif;\\n    letter-spacing: 2px;\\n    font-size: 20px;\\n  }\\n  .btn {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 30px;\\n    letter-spacing: 4px;\\n    padding: 14px 44px;\\n    background: var(--c-accent);\\n    color: var(--c-dark);\\n    border: 4px solid var(--c-dark);\\n    box-shadow: 0 6px 0 var(--c-dark);\\n    border-radius: 16px;\\n    cursor: pointer;\\n    transition: transform 0.08s ease, box-shadow 0.08s ease;\\n    text-shadow: none;\\n  }\\n  .btn:hover {\\n    transform: translateY(-2px);\\n    box-shadow: 0 8px 0 var(--c-dark);\\n  }\\n  .btn:active {\\n    transform: translateY(4px);\\n    box-shadow: 0 2px 0 var(--c-dark);\\n  }\\n  .btn.cool { background: var(--c-accent-cool); }\\n  .btn.hot { background: var(--c-accent-hot); color: #fff; }\\n  .controls {\\n    display: flex;\\n    gap: 14px;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    max-width: 600px;\\n    margin-top: 6px;\\n  }\\n  .key {\\n    background: rgba(15,10,26,0.7);\\n    border: 3px solid var(--c-dark);\\n    box-shadow: 0 3px 0 var(--c-dark);\\n    padding: 6px 14px;\\n    border-radius: 10px;\\n    font-family: 'Bangers', sans-serif;\\n    letter-spacing: 2px;\\n    font-size: 18px;\\n    color: var(--c-accent);\\n  }\\n  .key .desc {\\n    color: #fff;\\n    letter-spacing: 1px;\\n    margin-left: 8px;\\n    opacity: 0.8;\\n    font-size: 14px;\\n  }\\n  .level-select {\\n    display: grid;\\n    grid-template-columns: repeat(5, 1fr);\\n    gap: 14px;\\n    max-width: 700px;\\n  }\\n  .level-tile {\\n    width: 110px; height: 110px;\\n    border: 4px solid var(--c-dark);\\n    background: rgba(26, 20, 40, 0.9);\\n    box-shadow: 0 6px 0 var(--c-dark);\\n    border-radius: 16px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    cursor: pointer;\\n    transition: transform 0.1s ease;\\n    font-family: 'Bangers', sans-serif;\\n  }\\n  .level-tile:hover { transform: translateY(-4px); }\\n  .level-tile .num {\\n    font-size: 44px;\\n    color: var(--c-accent);\\n    line-height: 1;\\n    letter-spacing: 2px;\\n  }\\n  .level-tile .lbl {\\n    font-size: 12px;\\n    letter-spacing: 2px;\\n    opacity: 0.7;\\n    margin-top: 4px;\\n  }\\n  .level-tile.locked {\\n    opacity: 0.35;\\n    cursor: not-allowed;\\n  }\\n  .level-tile.locked:hover { transform: none; }\\n  .score-row {\\n    display: flex;\\n    gap: 28px;\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 32px;\\n    letter-spacing: 3px;\\n  }\\n  .score-row span { color: var(--c-accent); }\\n\\n  .fade-in { animation: fadeIn 0.4s ease-out; }\\n  @keyframes fadeIn {\\n    from { opacity: 0; }\\n    to { opacity: 1; }\\n  }\\n  .crosshair-hint {\\n    position: absolute;\\n    bottom: 12px;\\n    right: 14px;\\n    font-size: 12px;\\n    letter-spacing: 1px;\\n    opacity: 0.4;\\n    pointer-events: none;\\n  }\\n  .damage-flash {\\n    position: absolute;\\n    inset: 0;\\n    background: radial-gradient(ellipse at center, transparent 50%, var(--c-blood) 120%);\\n    opacity: 0;\\n    pointer-events: none;\\n    mix-blend-mode: screen;\\n  }\\n  .damage-flash.hit {\\n    animation: damageFlash 0.35s ease-out;\\n  }\\n  @keyframes damageFlash {\\n    0% { opacity: 0; }\\n    20% { opacity: 0.7; }\\n    100% { opacity: 0; }\\n  }\\n</style>\\n</head>\\n<body>\\n<div id=\\\"stage\\\">\\n  <canvas id=\\\"game\\\" width=\\\"1280\\\" height=\\\"720\\\"></canvas>\\n\\n  <div id=\\\"hud\\\">\\n    <div class=\\\"hud-bottom\\\">\\n      <div class=\\\"pill\\\">\\n        <span class=\\\"label\\\">HP</span>\\n        <div class=\\\"hp-bar\\\"><div class=\\\"hp-fill\\\" id=\\\"hpFill\\\" style=\\\"width:100%\\\"></div></div>\\n        <span class=\\\"value\\\" id=\\\"hpText\\\">100</span>\\n      </div>\\n      <div class=\\\"pill\\\">\\n        <span class=\\\"label\\\">AMMO</span>\\n        <div class=\\\"ammo-bar\\\"><div class=\\\"ammo-fill\\\" id=\\\"ammoFill\\\" style=\\\"width:100%\\\"></div></div>\\n        <span class=\\\"value\\\" id=\\\"ammoText\\\">12/12</span>\\n      </div>\\n    </div>\\n\\n    <div class=\\\"hud-top\\\">\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">LVL</span><span class=\\\"value\\\" id=\\\"lvlText\\\">1</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">WAVE</span><span class=\\\"value\\\" id=\\\"waveText\\\">1/3</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">LEFT</span><span class=\\\"value\\\" id=\\\"leftText\\\">0</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">KILLS</span><span class=\\\"value\\\" id=\\\"killText\\\">0</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">SCORE</span><span class=\\\"value\\\" id=\\\"scoreText\\\">0</span></div>\\n    </div>\\n\\n    <div class=\\\"wave-banner\\\" id=\\\"waveBanner\\\"></div>\\n    <div class=\\\"damage-flash\\\" id=\\\"damageFlash\\\"></div>\\n    <div class=\\\"crosshair-hint\\\">WASD move \\u00b7 Mouse aim \\u00b7 Click shoot \\u00b7 R reload \\u00b7 ESC menu</div>\\n  </div>\\n\\n  <!-- MENU -->\\n  <div class=\\\"overlay\\\" id=\\\"menu\\\">\\n    <div class=\\\"title\\\">ZOMBIE HORDE<small>DEFENSE</small></div>\\n    <div class=\\\"level-select\\\" id=\\\"levelSelect\\\"></div>\\n    <div class=\\\"controls\\\">\\n      <div class=\\\"key\\\">WASD<span class=\\\"desc\\\">Move</span></div>\\n      <div class=\\\"key\\\">Mouse<span class=\\\"desc\\\">Aim</span></div>\\n      <div class=\\\"key\\\">Click<span class=\\\"desc\\\">Shoot</span></div>\\n      <div class=\\\"key\\\">R<span class=\\\"desc\\\">Reload</span></div>\\n      <div class=\\\"key\\\">ESC<span class=\\\"desc\\\">Pause</span></div>\\n    </div>\\n  </div>\\n\\n  <!-- LEVEL INTRO -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"levelIntro\\\">\\n    <div class=\\\"subtitle warn\\\" id=\\\"introLevelNum\\\">LEVEL 1</div>\\n    <div class=\\\"level-card\\\">\\n      <div class=\\\"name\\\" id=\\\"introName\\\">The Outskirts</div>\\n      <div class=\\\"desc\\\" id=\\\"introDesc\\\">A quiet street...until it wasn't.</div>\\n      <div class=\\\"stats\\\" id=\\\"introStats\\\"></div>\\n    </div>\\n    <button class=\\\"btn\\\" id=\\\"startBtn\\\">START</button>\\n  </div>\\n\\n  <!-- LEVEL COMPLETE -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"levelComplete\\\">\\n    <div class=\\\"subtitle cool\\\">LEVEL CLEAR!</div>\\n    <div class=\\\"score-row\\\">\\n      <div>KILLS: <span id=\\\"completeKills\\\">0</span></div>\\n      <div>SCORE: <span id=\\\"completeScore\\\">0</span></div>\\n    </div>\\n    <div style=\\\"display:flex; gap:16px;\\\">\\n      <button class=\\\"btn cool\\\" id=\\\"nextBtn\\\">NEXT LEVEL</button>\\n      <button class=\\\"btn\\\" id=\\\"completeMenuBtn\\\">MENU</button>\\n    </div>\\n  </div>\\n\\n  <!-- VICTORY -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"victory\\\">\\n    <div class=\\\"title\\\" style=\\\"font-size:80px\\\">VICTORY!<small>THE HORDE IS BROKEN</small></div>\\n    <div class=\\\"score-row\\\">\\n      <div>TOTAL SCORE: <span id=\\\"victoryScore\\\">0</span></div>\\n    </div>\\n    <button class=\\\"btn\\\" id=\\\"victoryMenuBtn\\\">BACK TO MENU</button>\\n  </div>\\n\\n  <!-- GAME OVER -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"gameOver\\\">\\n    <div class=\\\"subtitle hot\\\">YOU DIED</div>\\n    <div class=\\\"score-row\\\">\\n      <div>KILLS: <span id=\\\"overKills\\\">0</span></div>\\n      <div>SCORE: <span id=\\\"overScore\\\">0</span></div>\\n    </div>\\n    <div style=\\\"display:flex; gap:16px;\\\">\\n      <button class=\\\"btn hot\\\" id=\\\"retryBtn\\\">RETRY</button>\\n      <button class=\\\"btn\\\" id=\\\"overMenuBtn\\\">MENU</button>\\n    </div>\\n  </div>\\n\\n  <!-- PAUSE -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"pause\\\">\\n    <div class=\\\"subtitle cool\\\">PAUSED</div>\\n    <div style=\\\"display:flex; gap:16px;\\\">\\n      <button class=\\\"btn cool\\\" id=\\\"resumeBtn\\\">RESUME</button>\\n      <button class=\\\"btn\\\" id=\\\"pauseMenuBtn\\\">MENU</button>\\n    </div>\\n  </div>\\n</div>\\n\\n<script>\\n// =============================================================\\n// ZOMBIE HORDE DEFENSE \\u2014 single-file canvas game\\n// =============================================================\\n// Cartoon top-down shooter with wave-based zombie defense.\\n// Style: flat shapes, thick black outlines, chunky particle FX.\\n// =============================================================\\n\\nconst canvas = document.getElementById('game');\\nconst ctx = canvas.getContext('2d');\\nconst W = canvas.width, H = canvas.height;\\n\\n// ------------- UTILITY -----------------------------------------\\nconst TAU = Math.PI * 2;\\nconst lerp = (a, b, t) => a + (b - a) * t;\\nconst clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;\\nconst dist2 = (ax, ay, bx, by) => { const dx=bx-ax, dy=by-ay; return dx*dx+dy*dy; };\\nconst rand = (a, b) => a + Math.random() * (b - a);\\nconst randi = (a, b) => Math.floor(rand(a, b));\\nconst choice = arr => arr[randi(0, arr.length)];\\n\\n// ------------- AUDIO (procedural) ------------------------------\\nlet audioCtx = null;\\nfunction initAudio() {\\n  if (!audioCtx) {\\n    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }\\n    catch(e) { audioCtx = null; }\\n  }\\n}\\nfunction beep(freq, duration, type='square', vol=0.08, sweep=0) {\\n  if (!audioCtx) return;\\n  const t = audioCtx.currentTime;\\n  const osc = audioCtx.createOscillator();\\n  const gain = audioCtx.createGain();\\n  osc.type = type;\\n  osc.frequency.setValueAtTime(freq, t);\\n  if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq+sweep), t+duration);\\n  gain.gain.setValueAtTime(vol, t);\\n  gain.gain.exponentialRampToValueAtTime(0.0001, t+duration);\\n  osc.connect(gain); gain.connect(audioCtx.destination);\\n  osc.start(t); osc.stop(t+duration+0.02);\\n}\\nfunction sfx(name) {\\n  if (!audioCtx) return;\\n  switch(name) {\\n    case 'shoot':   beep(880, 0.06, 'square', 0.05, -500); break;\\n    case 'hit':     beep(200, 0.08, 'sawtooth', 0.07, -100); break;\\n    case 'reload':  beep(400, 0.05, 'triangle', 0.05); setTimeout(()=>beep(600, 0.05, 'triangle', 0.05), 120); break;\\n    case 'die':     beep(150, 0.3, 'sawtooth', 0.09, -80); break;\\n    case 'hurt':    beep(120, 0.18, 'square', 0.1, -60); break;\\n    case 'pickup':  beep(600, 0.08, 'sine', 0.08); setTimeout(()=>beep(900, 0.1, 'sine', 0.08), 80); break;\\n    case 'wave':    beep(300, 0.15, 'sawtooth', 0.08); setTimeout(()=>beep(500, 0.2, 'square', 0.08), 150); break;\\n    case 'clear':   [523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,0.12,'triangle',0.09),i*90)); break;\\n    case 'gameover':[400,300,200,100].forEach((f,i)=>setTimeout(()=>beep(f,0.25,'sawtooth',0.1),i*180)); break;\\n  }\\n}\\n\\n// ------------- INPUT -------------------------------------------\\nconst keys = Object.create(null);\\nconst mouse = { x: W/2, y: H/2, worldX: 0, worldY: 0, down: false };\\n\\naddEventListener('keydown', e => {\\n  keys[e.key.toLowerCase()] = true;\\n  if (e.key.toLowerCase() === 'r') tryReload();\\n  if (e.key === 'Escape') togglePause();\\n});\\naddEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });\\ncanvas.addEventListener('mousemove', e => {\\n  const r = canvas.getBoundingClientRect();\\n  mouse.x = (e.clientX - r.left) * (canvas.width / r.width);\\n  mouse.y = (e.clientY - r.top)  * (canvas.height / r.height);\\n});\\ncanvas.addEventListener('mousedown', e => { mouse.down = true; initAudio(); });\\ncanvas.addEventListener('mouseup',   e => { mouse.down = false; });\\ncanvas.addEventListener('contextmenu', e => e.preventDefault());\\n\\n// ------------- WORLD / CAMERA ----------------------------------\\nconst world = { w: 2400, h: 1600 };\\nconst camera = { x: 0, y: 0, shake: 0 };\\n\\nfunction cameraUpdate() {\\n  const tx = clamp(game.player.x - W/2, 0, world.w - W);\\n  const ty = clamp(game.player.y - H/2, 0, world.h - H);\\n  camera.x = lerp(camera.x, tx, 0.12);\\n  camera.y = lerp(camera.y, ty, 0.12);\\n  mouse.worldX = mouse.x + camera.x;\\n  mouse.worldY = mouse.y + camera.y;\\n  if (camera.shake > 0.01) camera.shake *= 0.86; else camera.shake = 0;\\n}\\nfunction shakeCam(amt) { camera.shake = Math.min(20, camera.shake + amt); }\\n\\n// ------------- LEVELS ------------------------------------------\\n// Each wave defines counts of zombie types to spawn.\\nconst LEVELS = [\\n  {\\n    name: \\\"The Outskirts\\\",\\n    desc: \\\"A sleepy town hits its bad day. Don't let them swarm.\\\",\\n    bgA: '#8FA876', bgB: '#7B9363',\\n    obstacles: [\\n      {x: 600, y: 400, w: 140, h: 140, type:'crate'},\\n      {x:1400, y: 900, w: 180, h: 100, type:'crate'},\\n      {x: 900, y:1100, w: 120, h: 120, type:'barrel'},\\n      {x:1800, y: 300, w: 100, h: 180, type:'crate'},\\n    ],\\n    waves: [ {walker:6}, {walker:8,runner:2}, {walker:10,runner:4} ],\\n  },\\n  {\\n    name: \\\"Downtown Drift\\\",\\n    desc: \\\"Abandoned cars, broken streets. More of them now.\\\",\\n    bgA: '#7A6F88', bgB: '#5E5571',\\n    obstacles: [\\n      {x: 400, y: 300, w: 220, h: 110, type:'car'},\\n      {x:1100, y: 500, w: 220, h: 110, type:'car'},\\n      {x:1700, y: 950, w: 220, h: 110, type:'car'},\\n      {x: 700, y:1150, w: 120, h: 120, type:'barrel'},\\n      {x:1400, y:1200, w: 180, h: 80,  type:'crate'},\\n    ],\\n    waves: [ {walker:8,runner:3}, {walker:10,runner:5}, {walker:12,runner:6,brute:1} ],\\n  },\\n  {\\n    name: \\\"Mall Panic\\\",\\n    desc: \\\"Narrow aisles, fast sprinters. Keep moving.\\\",\\n    bgA: '#A89878', bgB: '#8D7E60',\\n    obstacles: [\\n      {x: 500, y: 400, w: 80, h: 300, type:'crate'},\\n      {x: 900, y: 400, w: 80, h: 300, type:'crate'},\\n      {x:1300, y: 400, w: 80, h: 300, type:'crate'},\\n      {x:1700, y: 400, w: 80, h: 300, type:'crate'},\\n      {x: 500, y: 900, w: 80, h: 300, type:'crate'},\\n      {x: 900, y: 900, w: 80, h: 300, type:'crate'},\\n      {x:1300, y: 900, w: 80, h: 300, type:'crate'},\\n      {x:1700, y: 900, w: 80, h: 300, type:'crate'},\\n    ],\\n    waves: [ {walker:6,runner:6}, {walker:8,runner:8,brute:1}, {walker:10,runner:10,brute:2} ],\\n  },\\n  {\\n    name: \\\"Industrial Rot\\\",\\n    desc: \\\"Barrels leak green. Brutes shrug off bullets.\\\",\\n    bgA: '#5F6B70', bgB: '#4A5559',\\n    obstacles: [\\n      {x: 300, y: 300, w: 120, h: 120, type:'barrel'},\\n      {x:2000, y: 300, w: 120, h: 120, type:'barrel'},\\n      {x: 300, y:1200, w: 120, h: 120, type:'barrel'},\\n      {x:2000, y:1200, w: 120, h: 120, type:'barrel'},\\n      {x:1150, y: 700, w: 200, h: 200, type:'crate'},\\n      {x: 700, y: 500, w: 140, h: 70,  type:'crate'},\\n      {x:1550, y:1000, w: 140, h: 70,  type:'crate'},\\n    ],\\n    waves: [ {walker:10,runner:6,brute:2}, {walker:10,runner:10,brute:3}, {walker:12,runner:12,brute:4} ],\\n  },\\n  {\\n    name: \\\"Final Stand\\\",\\n    desc: \\\"Everything they've got. Everything you've got.\\\",\\n    bgA: '#4A3A56', bgB: '#352741',\\n    obstacles: [\\n      {x: 400, y: 400, w: 160, h: 160, type:'crate'},\\n      {x:1840, y: 400, w: 160, h: 160, type:'crate'},\\n      {x: 400, y:1040, w: 160, h: 160, type:'crate'},\\n      {x:1840, y:1040, w: 160, h: 160, type:'crate'},\\n      {x:1120, y: 720, w: 160, h: 160, type:'barrel'},\\n    ],\\n    waves: [\\n      {walker:12,runner:8,brute:3},\\n      {walker:14,runner:12,brute:4},\\n      {walker:10,runner:10,brute:3,boss:1},\\n    ],\\n  },\\n];\\n\\n// Zombie archetypes\\nconst ZTYPES = {\\n  walker: { hp: 30, speed: 60,  damage: 10, radius: 20, color:'#8FCF3F', eye:'#c73866', score: 10, touchCooldown: 600 },\\n  runner: { hp: 18, speed: 130, damage: 6,  radius: 16, color:'#CEDE4E', eye:'#6c2a4e', score: 15, touchCooldown: 450 },\\n  brute:  { hp: 120, speed: 38, damage: 24, radius: 32, color:'#5F8C3F', eye:'#ff6b6b', score: 40, touchCooldown: 900 },\\n  boss:   { hp: 600, speed: 50, damage: 35, radius: 54, color:'#3D5B2A', eye:'#ffbd2e', score: 250, touchCooldown: 700 },\\n};\\n\\n// ------------- GAME STATE --------------------------------------\\nconst game = {\\n  state: 'menu',          // menu, intro, playing, paused, levelComplete, victory, gameOver\\n  levelIdx: 0,\\n  unlocked: 1,            // how many levels unlocked (level 1 always)\\n  waveIdx: 0,\\n  inWaveBreak: false,\\n  waveBreakT: 0,\\n  player: null,\\n  zombies: [],\\n  bullets: [],\\n  particles: [],\\n  damageNums: [],\\n  powerups: [],\\n  obstacles: [],\\n  spawnQueue: [],\\n  spawnTimer: 0,\\n  kills: 0,\\n  score: 0,\\n  totalScore: 0,\\n  levelKills: 0,\\n  levelScore: 0,\\n  tSinceHit: 999,         // for low-health red vignette pulsing\\n};\\n\\n// ------------- ENTITIES ----------------------------------------\\nclass Player {\\n  constructor() {\\n    this.x = world.w/2;\\n    this.y = world.h/2;\\n    this.r = 18;\\n    this.speed = 210;           // px/sec\\n    this.angle = 0;\\n    this.hp = 100; this.maxHp = 100;\\n    this.ammo = 12; this.maxAmmo = 12;\\n    this.reloading = false;\\n    this.reloadT = 0;\\n    this.fireCd = 0;             // seconds until next shot\\n    this.fireRate = 0.14;        // seconds between shots\\n    this.damage = 14;\\n    this.walkPhase = 0;\\n    this.iFrames = 0;            // invuln time after hit\\n    this.flashT = 0;\\n  }\\n  update(dt) {\\n    // Movement\\n    let mx = 0, my = 0;\\n    if (keys['w'] || keys['arrowup'])    my -= 1;\\n    if (keys['s'] || keys['arrowdown'])  my += 1;\\n    if (keys['a'] || keys['arrowleft'])  mx -= 1;\\n    if (keys['d'] || keys['arrowright']) mx += 1;\\n    const mag = Math.hypot(mx, my);\\n    if (mag > 0) {\\n      mx /= mag; my /= mag;\\n      const nx = this.x + mx * this.speed * dt;\\n      const ny = this.y + my * this.speed * dt;\\n      // Collide against obstacles (axis-separated)\\n      if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\\n      if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\\n      this.x = clamp(this.x, this.r, world.w - this.r);\\n      this.y = clamp(this.y, this.r, world.h - this.r);\\n      this.walkPhase += dt * 14;\\n    } else {\\n      this.walkPhase *= 0.92;\\n    }\\n\\n    // Aim\\n    this.angle = Math.atan2(mouse.worldY - this.y, mouse.worldX - this.x);\\n\\n    // Fire\\n    this.fireCd = Math.max(0, this.fireCd - dt);\\n    if (mouse.down && !this.reloading && this.ammo > 0 && this.fireCd <= 0) this.shoot();\\n\\n    // Auto-reload when empty\\n    if (this.ammo <= 0 && !this.reloading) this.startReload();\\n\\n    // Reload progress\\n    if (this.reloading) {\\n      this.reloadT -= dt;\\n      if (this.reloadT <= 0) {\\n        this.reloading = false;\\n        this.ammo = this.maxAmmo;\\n      }\\n    }\\n\\n    // Invuln / hit flash\\n    this.iFrames = Math.max(0, this.iFrames - dt);\\n    this.flashT = Math.max(0, this.flashT - dt);\\n  }\\n  shoot() {\\n    this.fireCd = this.fireRate;\\n    this.ammo--;\\n    // Spawn bullet from muzzle\\n    const mx = this.x + Math.cos(this.angle) * 28;\\n    const my = this.y + Math.sin(this.angle) * 28;\\n    const spread = (Math.random() - 0.5) * 0.06;\\n    const a = this.angle + spread;\\n    game.bullets.push(new Bullet(mx, my, a, 900, this.damage));\\n    // Muzzle flash particles\\n    for (let i = 0; i < 5; i++) {\\n      game.particles.push(new Particle(mx, my, {\\n        vx: Math.cos(a) * rand(120, 260) + rand(-40,40),\\n        vy: Math.sin(a) * rand(120, 260) + rand(-40,40),\\n        life: 0.1, r: rand(3, 6),\\n        color: Math.random() < 0.5 ? '#ffbd2e' : '#fff6c9',\\n        fade: true,\\n      }));\\n    }\\n    shakeCam(2);\\n    sfx('shoot');\\n  }\\n  startReload() {\\n    if (this.reloading || this.ammo === this.maxAmmo) return;\\n    this.reloading = true;\\n    this.reloadT = 1.0;\\n    sfx('reload');\\n  }\\n  hurt(dmg) {\\n    if (this.iFrames > 0) return;\\n    this.hp = Math.max(0, this.hp - dmg);\\n    this.iFrames = 0.55;\\n    this.flashT = 0.25;\\n    shakeCam(8);\\n    flashDamage();\\n    sfx('hurt');\\n    game.tSinceHit = 0;\\n    if (this.hp <= 0) {\\n      game.state = 'gameOver';\\n      sfx('gameover');\\n      showGameOver();\\n    }\\n  }\\n  draw() {\\n    const x = this.x, y = this.y;\\n    // Shadow\\n    drawShadow(x, y, this.r);\\n    // Legs bob\\n    const legBob = Math.sin(this.walkPhase) * 3;\\n    // Body\\n    const bodyFlash = this.flashT > 0 && (Math.floor(this.flashT*30)%2===0);\\n    ctx.save();\\n    ctx.translate(x, y);\\n    // Draw legs (two small ovals rotated in move direction)\\n    ctx.fillStyle = '#2a2f4a';\\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.fill();\\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.fill();\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.stroke();\\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.stroke();\\n\\n    ctx.rotate(this.angle);\\n    // Gun (drawn first so body overlaps base)\\n    ctx.fillStyle = '#2a2f4a';\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    // barrel\\n    ctx.beginPath(); ctx.rect(10, -4, 24, 8); ctx.fill(); ctx.stroke();\\n    // sight\\n    ctx.beginPath(); ctx.rect(14, -7, 4, 3); ctx.fill(); ctx.stroke();\\n    // Body (torso)\\n    ctx.fillStyle = bodyFlash ? '#ffffff' : '#4ecdc4';\\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill();\\n    ctx.stroke();\\n    // Chest strap\\n    ctx.strokeStyle = '#0f0a1a';\\n    ctx.lineWidth = 2.5;\\n    ctx.beginPath(); ctx.moveTo(-12, -8); ctx.lineTo(12, 8); ctx.stroke();\\n    // Head (offset forward so aim reads)\\n    ctx.fillStyle = bodyFlash ? '#ffffff' : '#ffd2a4';\\n    ctx.beginPath(); ctx.arc(4, 0, 11, 0, TAU); ctx.fill();\\n    ctx.lineWidth = 3; ctx.strokeStyle = '#0f0a1a'; ctx.stroke();\\n    // Eye (pointing forward)\\n    ctx.fillStyle = '#0f0a1a';\\n    ctx.beginPath(); ctx.arc(10, -1, 2, 0, TAU); ctx.fill();\\n    // Hair tuft\\n    ctx.fillStyle = '#3b2a1d';\\n    ctx.beginPath(); ctx.arc(0, -7, 5, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.restore();\\n  }\\n}\\n\\nclass Zombie {\\n  constructor(x, y, type='walker') {\\n    const spec = ZTYPES[type];\\n    this.x = x; this.y = y;\\n    this.type = type;\\n    this.spec = spec;\\n    this.r = spec.radius;\\n    this.hp = spec.hp;\\n    this.maxHp = spec.hp;\\n    this.speed = spec.speed;\\n    this.damage = spec.damage;\\n    this.color = spec.color;\\n    this.eye = spec.eye;\\n    this.touchCd = 0;\\n    this.walkPhase = Math.random() * TAU;\\n    this.hitFlash = 0;\\n    this.angle = 0;\\n    this.wobble = rand(0, TAU);\\n  }\\n  update(dt, player) {\\n    const dx = player.x - this.x;\\n    const dy = player.y - this.y;\\n    const d = Math.hypot(dx, dy) || 0.001;\\n    this.angle = Math.atan2(dy, dx);\\n\\n    // Speed: slight wobble for walkers, dead aim for runners\\n    let spd = this.speed;\\n    if (this.type === 'walker') spd *= 0.9 + 0.2*Math.sin(this.wobble);\\n    this.wobble += dt * 3;\\n\\n    const vx = (dx/d) * spd;\\n    const vy = (dy/d) * spd;\\n    const nx = this.x + vx * dt;\\n    const ny = this.y + vy * dt;\\n    if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\\n    if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\\n\\n    // Separate from other zombies (simple)\\n    for (const other of game.zombies) {\\n      if (other === this) continue;\\n      const ox = other.x - this.x, oy = other.y - this.y;\\n      const od = Math.hypot(ox, oy);\\n      const minD = this.r + other.r;\\n      if (od > 0 && od < minD) {\\n        const push = (minD - od) * 0.5;\\n        this.x -= (ox/od) * push;\\n        this.y -= (oy/od) * push;\\n      }\\n    }\\n\\n    this.walkPhase += dt * (this.type === 'runner' ? 16 : this.type === 'brute' ? 6 : 10);\\n    this.touchCd = Math.max(0, this.touchCd - dt*1000);\\n    this.hitFlash = Math.max(0, this.hitFlash - dt);\\n\\n    // Attack on contact\\n    if (d < this.r + player.r && this.touchCd <= 0) {\\n      player.hurt(this.damage);\\n      this.touchCd = this.spec.touchCooldown;\\n      // knockback on brute/boss\\n      if (this.type === 'brute' || this.type === 'boss') {\\n        player.x += (dx/d) * -30;\\n        player.y += (dy/d) * -30;\\n      }\\n    }\\n  }\\n  hurt(dmg, bx, by) {\\n    this.hp -= dmg;\\n    this.hitFlash = 0.12;\\n    // blood spurt\\n    for (let i = 0; i < 8; i++) {\\n      const a = Math.random() * TAU;\\n      const s = rand(120, 320);\\n      game.particles.push(new Particle(bx, by, {\\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\\n        life: rand(0.25, 0.6), r: rand(3, 6),\\n        color: this.type==='boss' ? '#ffbd2e' : '#8FCF3F',\\n        fade: true, gravity: 200,\\n      }));\\n    }\\n    // damage number\\n    game.damageNums.push({\\n      x: bx, y: by - this.r, life: 0.8, text: Math.ceil(dmg),\\n      vy: -60, color: '#ffbd2e',\\n    });\\n    sfx('hit');\\n    if (this.hp <= 0) {\\n      this.die();\\n      return true;\\n    }\\n    return false;\\n  }\\n  die() {\\n    // Big splat\\n    for (let i = 0; i < 18; i++) {\\n      const a = Math.random() * TAU;\\n      const s = rand(60, 280);\\n      game.particles.push(new Particle(this.x, this.y, {\\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\\n        life: rand(0.4, 0.9), r: rand(4, 8),\\n        color: this.type==='boss' ? '#ffbd2e' : '#8FCF3F',\\n        fade: true, gravity: 300,\\n      }));\\n    }\\n    // Chance to drop\\n    if (Math.random() < 0.08) {\\n      game.powerups.push(new Powerup(this.x, this.y, 'health'));\\n    } else if (Math.random() < 0.06) {\\n      game.powerups.push(new Powerup(this.x, this.y, 'ammo'));\\n    }\\n    game.kills++; game.levelKills++;\\n    game.score += this.spec.score; game.levelScore += this.spec.score;\\n    shakeCam(this.type==='boss' ? 14 : this.type==='brute' ? 6 : 3);\\n    sfx('die');\\n  }\\n  draw() {\\n    const x = this.x, y = this.y;\\n    drawShadow(x, y, this.r);\\n    ctx.save();\\n    ctx.translate(x, y);\\n\\n    const flash = this.hitFlash > 0;\\n    const bodyColor = flash ? '#ffffff' : this.color;\\n\\n    // Leg wobble (feet)\\n    const bob = Math.sin(this.walkPhase) * 3;\\n    ctx.fillStyle = '#1e3816';\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.ellipse(-this.r*0.4, this.r*0.7+bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.beginPath(); ctx.ellipse( this.r*0.4, this.r*0.7-bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\\n\\n    // Body (tilted toward player)\\n    ctx.rotate(this.angle);\\n    ctx.fillStyle = bodyColor;\\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();\\n\\n    // Torn shirt accents (dark stripes)\\n    ctx.strokeStyle = flash ? '#c8c8c8' : '#3a5a1f';\\n    ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.moveTo(-this.r*0.7, -this.r*0.2); ctx.lineTo(this.r*0.3, this.r*0.5); ctx.stroke();\\n    ctx.beginPath(); ctx.moveTo(-this.r*0.5, this.r*0.3); ctx.lineTo(this.r*0.1, -this.r*0.4); ctx.stroke();\\n\\n    // Head\\n    const hr = this.r * 0.68;\\n    ctx.fillStyle = flash ? '#ffffff' : lighten(this.color, 12);\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.arc(this.r*0.35, 0, hr, 0, TAU); ctx.fill(); ctx.stroke();\\n\\n    // Mouth / teeth\\n    ctx.fillStyle = '#1a0a0a';\\n    ctx.beginPath(); ctx.ellipse(this.r*0.7, hr*0.15, hr*0.35, hr*0.2, 0, 0, TAU); ctx.fill();\\n    ctx.fillStyle = '#ffffff';\\n    const teethY = hr*0.15;\\n    for (let i = 0; i < 3; i++) {\\n      ctx.beginPath();\\n      ctx.rect(this.r*0.55 + i*5, teethY - 3, 3, 6);\\n      ctx.fill();\\n    }\\n\\n    // Eye (glowing)\\n    ctx.fillStyle = this.eye;\\n    ctx.beginPath(); ctx.arc(this.r*0.55, -hr*0.25, hr*0.22, 0, TAU); ctx.fill();\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2; ctx.stroke();\\n    ctx.fillStyle = '#ffffff';\\n    ctx.beginPath(); ctx.arc(this.r*0.58, -hr*0.30, hr*0.08, 0, TAU); ctx.fill();\\n\\n    // Boss horns\\n    if (this.type === 'boss') {\\n      ctx.fillStyle = '#f5e8c8';\\n      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n      ctx.beginPath(); ctx.moveTo(this.r*0.2, -hr*0.8); ctx.lineTo(this.r*0.4, -hr*1.4); ctx.lineTo(this.r*0.55, -hr*0.75); ctx.closePath(); ctx.fill(); ctx.stroke();\\n      ctx.beginPath(); ctx.moveTo(this.r*0.55, -hr*0.75); ctx.lineTo(this.r*0.85, -hr*1.2); ctx.lineTo(this.r*0.80, -hr*0.55); ctx.closePath(); ctx.fill(); ctx.stroke();\\n    }\\n\\n    ctx.restore();\\n\\n    // HP bar for non-walkers\\n    if (this.type === 'brute' || this.type === 'boss') {\\n      const bw = this.r*2.2, bh = 5;\\n      ctx.fillStyle = '#0f0a1a';\\n      ctx.fillRect(x - bw/2 - 1, y - this.r - 12 - 1, bw + 2, bh + 2);\\n      ctx.fillStyle = '#c73866';\\n      ctx.fillRect(x - bw/2, y - this.r - 12, bw * (this.hp / this.maxHp), bh);\\n    }\\n  }\\n}\\n\\nclass Bullet {\\n  constructor(x, y, angle, speed, damage) {\\n    this.x = x; this.y = y;\\n    this.vx = Math.cos(angle) * speed;\\n    this.vy = Math.sin(angle) * speed;\\n    this.angle = angle;\\n    this.life = 0.7;\\n    this.damage = damage;\\n    this.dead = false;\\n    this.trail = [];\\n  }\\n  update(dt) {\\n    this.trail.push({x: this.x, y: this.y, a: 1});\\n    if (this.trail.length > 5) this.trail.shift();\\n    this.x += this.vx * dt;\\n    this.y += this.vy * dt;\\n    this.life -= dt;\\n    if (this.life <= 0) { this.dead = true; return; }\\n    if (this.x < 0 || this.y < 0 || this.x > world.w || this.y > world.h) { this.dead = true; return; }\\n    if (collidesObstacle(this.x, this.y, 2)) {\\n      this.dead = true;\\n      // sparks\\n      for (let i = 0; i < 6; i++) {\\n        const a = Math.random()*TAU;\\n        const s = rand(80, 200);\\n        game.particles.push(new Particle(this.x, this.y, {\\n          vx: Math.cos(a)*s, vy: Math.sin(a)*s,\\n          life: 0.2, r: rand(2,4), color: '#ffbd2e', fade: true,\\n        }));\\n      }\\n      return;\\n    }\\n    for (const z of game.zombies) {\\n      if (dist2(this.x, this.y, z.x, z.y) < z.r*z.r) {\\n        z.hurt(this.damage, this.x, this.y);\\n        this.dead = true;\\n        return;\\n      }\\n    }\\n  }\\n  draw() {\\n    // Trail\\n    for (let i = 0; i < this.trail.length; i++) {\\n      const t = this.trail[i];\\n      const a = (i+1) / this.trail.length;\\n      ctx.globalAlpha = a * 0.6;\\n      ctx.fillStyle = '#ffbd2e';\\n      ctx.beginPath(); ctx.arc(t.x, t.y, 3 * a, 0, TAU); ctx.fill();\\n    }\\n    ctx.globalAlpha = 1;\\n    // Body\\n    ctx.save();\\n    ctx.translate(this.x, this.y);\\n    ctx.rotate(this.angle);\\n    ctx.fillStyle = '#fff6c9';\\n    ctx.strokeStyle = '#e08e00';\\n    ctx.lineWidth = 2;\\n    ctx.beginPath(); ctx.ellipse(0, 0, 7, 3, 0, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.restore();\\n  }\\n}\\n\\nclass Particle {\\n  constructor(x, y, opts) {\\n    this.x = x; this.y = y;\\n    this.vx = opts.vx || 0;\\n    this.vy = opts.vy || 0;\\n    this.life = opts.life || 0.5;\\n    this.maxLife = this.life;\\n    this.r = opts.r || 3;\\n    this.color = opts.color || '#fff';\\n    this.fade = opts.fade;\\n    this.gravity = opts.gravity || 0;\\n    this.dead = false;\\n  }\\n  update(dt) {\\n    this.x += this.vx * dt;\\n    this.y += this.vy * dt;\\n    this.vx *= 0.92;\\n    this.vy *= 0.92;\\n    this.vy += this.gravity * dt;\\n    this.life -= dt;\\n    if (this.life <= 0) this.dead = true;\\n  }\\n  draw() {\\n    const alpha = this.fade ? clamp(this.life / this.maxLife, 0, 1) : 1;\\n    ctx.globalAlpha = alpha;\\n    ctx.fillStyle = this.color;\\n    ctx.beginPath();\\n    ctx.arc(this.x, this.y, this.r * (this.fade ? alpha*0.6 + 0.4 : 1), 0, TAU);\\n    ctx.fill();\\n    ctx.globalAlpha = 1;\\n  }\\n}\\n\\nclass Powerup {\\n  constructor(x, y, type) {\\n    this.x = x; this.y = y;\\n    this.type = type; // 'health', 'ammo'\\n    this.r = 16;\\n    this.phase = 0;\\n    this.dead = false;\\n    this.life = 14; // despawn after a while\\n  }\\n  update(dt, player) {\\n    this.phase += dt * 3;\\n    this.life -= dt;\\n    if (this.life <= 0) this.dead = true;\\n    if (dist2(this.x, this.y, player.x, player.y) < (this.r + player.r)**2) {\\n      if (this.type === 'health') {\\n        player.hp = Math.min(player.maxHp, player.hp + 30);\\n      } else if (this.type === 'ammo') {\\n        player.ammo = player.maxAmmo;\\n        player.reloading = false;\\n      }\\n      this.dead = true;\\n      sfx('pickup');\\n      for (let i = 0; i < 10; i++) {\\n        const a = Math.random()*TAU;\\n        game.particles.push(new Particle(this.x, this.y, {\\n          vx: Math.cos(a)*rand(60,160), vy: Math.sin(a)*rand(60,160),\\n          life: 0.5, r: rand(3,5),\\n          color: this.type==='health' ? '#ff6b6b' : '#ffbd2e', fade: true,\\n        }));\\n      }\\n    }\\n  }\\n  draw() {\\n    const yOff = Math.sin(this.phase) * 4;\\n    // Halo\\n    ctx.fillStyle = this.type==='health' ? 'rgba(255,107,107,0.2)' : 'rgba(255,189,46,0.2)';\\n    ctx.beginPath(); ctx.arc(this.x, this.y + yOff, this.r*1.6, 0, TAU); ctx.fill();\\n    // Box\\n    ctx.save();\\n    ctx.translate(this.x, this.y + yOff);\\n    ctx.fillStyle = this.type==='health' ? '#fff' : '#2a2f4a';\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath();\\n    ctx.rect(-this.r, -this.r, this.r*2, this.r*2);\\n    ctx.fill(); ctx.stroke();\\n    // Icon\\n    if (this.type === 'health') {\\n      ctx.fillStyle = '#c73866';\\n      ctx.fillRect(-4, -10, 8, 20);\\n      ctx.fillRect(-10, -4, 20, 8);\\n    } else {\\n      ctx.fillStyle = '#ffbd2e';\\n      ctx.beginPath();\\n      ctx.moveTo(-8, -4); ctx.lineTo(0, -10); ctx.lineTo(8, -4); ctx.lineTo(8, 8); ctx.lineTo(-8, 8); ctx.closePath();\\n      ctx.fill(); ctx.stroke();\\n      ctx.fillStyle = '#0f0a1a';\\n      ctx.fillRect(-2, -2, 4, 8);\\n    }\\n    ctx.restore();\\n  }\\n}\\n\\n// ------------- COLLISION / HELPERS -----------------------------\\nfunction collidesObstacle(x, y, r) {\\n  for (const o of game.obstacles) {\\n    const cx = clamp(x, o.x, o.x + o.w);\\n    const cy = clamp(y, o.y, o.y + o.h);\\n    const dx = x - cx, dy = y - cy;\\n    if (dx*dx + dy*dy < r*r) return true;\\n  }\\n  return false;\\n}\\nfunction lighten(hex, pct) {\\n  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);\\n  const m = v => clamp(Math.floor(v + (255-v) * pct/100), 0, 255);\\n  return '#' + [m(r),m(g),m(b)].map(v=>v.toString(16).padStart(2,'0')).join('');\\n}\\nfunction drawShadow(x, y, r) {\\n  ctx.fillStyle = 'rgba(15, 10, 26, 0.35)';\\n  ctx.beginPath(); ctx.ellipse(x, y + r*0.85, r*0.95, r*0.35, 0, 0, TAU); ctx.fill();\\n}\\n\\n// ------------- RENDERING ---------------------------------------\\nfunction drawWorld() {\\n  const level = LEVELS[game.levelIdx];\\n  // Camera shake offset\\n  const sx = camera.shake ? (Math.random()-0.5)*camera.shake : 0;\\n  const sy = camera.shake ? (Math.random()-0.5)*camera.shake : 0;\\n\\n  ctx.save();\\n  ctx.translate(-camera.x + sx, -camera.y + sy);\\n\\n  // Background tile\\n  const tileSize = 80;\\n  const startX = Math.floor(camera.x / tileSize) * tileSize;\\n  const startY = Math.floor(camera.y / tileSize) * tileSize;\\n  for (let x = startX; x < camera.x + W + tileSize; x += tileSize) {\\n    for (let y = startY; y < camera.y + H + tileSize; y += tileSize) {\\n      const parity = ((x/tileSize) + (y/tileSize)) & 1;\\n      ctx.fillStyle = parity ? level.bgA : level.bgB;\\n      ctx.fillRect(x, y, tileSize, tileSize);\\n    }\\n  }\\n  // Scattered speckles (grass blades / cracks)\\n  ctx.fillStyle = 'rgba(255,255,255,0.04)';\\n  for (let i = 0; i < 120; i++) {\\n    // deterministic by seed so they don't shimmer\\n    const seed = i * 9301 + 49297;\\n    const px = (seed * 3) % world.w;\\n    const py = (seed * 7) % world.h;\\n    if (px < camera.x - 60 || px > camera.x + W + 60) continue;\\n    if (py < camera.y - 60 || py > camera.y + H + 60) continue;\\n    ctx.beginPath(); ctx.arc(px, py, 2 + (seed%3), 0, TAU); ctx.fill();\\n  }\\n\\n  // World border\\n  ctx.strokeStyle = '#0f0a1a';\\n  ctx.lineWidth = 12;\\n  ctx.strokeRect(0, 0, world.w, world.h);\\n  // Inner border line (decorative)\\n  ctx.strokeStyle = 'rgba(0,0,0,0.2)';\\n  ctx.lineWidth = 3;\\n  ctx.strokeRect(18, 18, world.w-36, world.h-36);\\n\\n  // Obstacles\\n  for (const o of game.obstacles) drawObstacle(o);\\n\\n  // Powerups\\n  for (const p of game.powerups) p.draw();\\n\\n  // Entities (sort by y for depth)\\n  const sorted = [game.player, ...game.zombies].sort((a,b) => a.y - b.y);\\n  for (const e of sorted) e.draw();\\n\\n  // Bullets (above entities for visibility)\\n  for (const b of game.bullets) b.draw();\\n\\n  // Particles\\n  for (const p of game.particles) p.draw();\\n\\n  // Damage numbers\\n  for (const d of game.damageNums) {\\n    const alpha = clamp(d.life / 0.8, 0, 1);\\n    ctx.globalAlpha = alpha;\\n    ctx.font = 'bold 20px Bangers, sans-serif';\\n    ctx.textAlign = 'center';\\n    ctx.lineWidth = 4; ctx.strokeStyle = '#0f0a1a';\\n    ctx.strokeText(d.text, d.x, d.y);\\n    ctx.fillStyle = d.color;\\n    ctx.fillText(d.text, d.x, d.y);\\n    ctx.globalAlpha = 1;\\n  }\\n\\n  ctx.restore();\\n\\n  // Low HP vignette\\n  if (game.player && game.player.hp < 35) {\\n    const pulse = 0.25 + 0.15 * Math.sin(performance.now()/200);\\n    const grad = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.max(W,H)*0.7);\\n    grad.addColorStop(0, 'rgba(199,56,102,0)');\\n    grad.addColorStop(1, `rgba(199,56,102,${pulse})`);\\n    ctx.fillStyle = grad;\\n    ctx.fillRect(0, 0, W, H);\\n  }\\n}\\n\\nfunction drawObstacle(o) {\\n  const {x, y, w, h, type} = o;\\n  ctx.save();\\n  if (type === 'crate') {\\n    // Shadow\\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\\n    ctx.fillRect(x+6, y+h-4, w, 12);\\n    // Body\\n    ctx.fillStyle = '#a36841';\\n    ctx.fillRect(x, y, w, h);\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;\\n    ctx.strokeRect(x, y, w, h);\\n    // Planks\\n    ctx.strokeStyle = '#6b3e24'; ctx.lineWidth = 3;\\n    ctx.beginPath();\\n    ctx.moveTo(x, y+h/3); ctx.lineTo(x+w, y+h/3);\\n    ctx.moveTo(x, y+h*2/3); ctx.lineTo(x+w, y+h*2/3);\\n    ctx.moveTo(x+w/2, y); ctx.lineTo(x+w/2, y+h);\\n    ctx.stroke();\\n    // Highlight\\n    ctx.fillStyle = 'rgba(255,255,255,0.1)';\\n    ctx.fillRect(x+4, y+4, w-8, 6);\\n  } else if (type === 'barrel') {\\n    // Shadow\\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\\n    ctx.beginPath(); ctx.ellipse(x+w/2+6, y+h+6, w*0.55, 10, 0, 0, TAU); ctx.fill();\\n    // Body\\n    ctx.fillStyle = '#c73866';\\n    ctx.beginPath(); ctx.ellipse(x+w/2, y+h/2, w*0.5, h*0.5, 0, 0, TAU); ctx.fill();\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4; ctx.stroke();\\n    // Ridges\\n    ctx.strokeStyle = '#8e1e3d'; ctx.lineWidth = 3;\\n    ctx.beginPath();\\n    ctx.ellipse(x+w/2, y+h*0.3, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();\\n    ctx.beginPath();\\n    ctx.ellipse(x+w/2, y+h*0.7, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();\\n    // Bio hazard dot\\n    ctx.fillStyle = '#ffbd2e';\\n    ctx.beginPath(); ctx.arc(x+w/2, y+h/2, 6, 0, TAU); ctx.fill();\\n  } else if (type === 'car') {\\n    // Shadow\\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\\n    ctx.fillRect(x+6, y+h+2, w, 10);\\n    // Body\\n    ctx.fillStyle = '#4a5a8c';\\n    ctx.fillRect(x, y, w, h);\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;\\n    ctx.strokeRect(x, y, w, h);\\n    // Windows\\n    ctx.fillStyle = '#1a1428';\\n    ctx.fillRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);\\n    ctx.fillRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);\\n    ctx.strokeRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);\\n    ctx.strokeRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);\\n    // Headlights\\n    ctx.fillStyle = '#fff6c9';\\n    ctx.beginPath(); ctx.arc(x+w-4, y+10, 5, 0, TAU); ctx.fill();\\n    ctx.beginPath(); ctx.arc(x+w-4, y+h-10, 5, 0, TAU); ctx.fill();\\n  }\\n  ctx.restore();\\n}\\n\\n// ------------- LEVEL LOGIC -------------------------------------\\nfunction loadLevel(idx) {\\n  game.levelIdx = idx;\\n  game.waveIdx = 0;\\n  game.zombies = [];\\n  game.bullets = [];\\n  game.particles = [];\\n  game.damageNums = [];\\n  game.powerups = [];\\n  game.spawnQueue = [];\\n  game.levelKills = 0;\\n  game.levelScore = 0;\\n  game.inWaveBreak = false;\\n  game.waveBreakT = 0;\\n  const level = LEVELS[idx];\\n  game.obstacles = level.obstacles.map(o => ({...o}));\\n  game.player = new Player();\\n  // Start player in a safe spot not inside obstacles\\n  while (collidesObstacle(game.player.x, game.player.y, game.player.r + 4)) {\\n    game.player.x += 40;\\n  }\\n  camera.x = game.player.x - W/2;\\n  camera.y = game.player.y - H/2;\\n}\\n\\nfunction startWave() {\\n  const level = LEVELS[game.levelIdx];\\n  const wave = level.waves[game.waveIdx];\\n  game.spawnQueue = [];\\n  for (const [type, count] of Object.entries(wave)) {\\n    for (let i = 0; i < count; i++) {\\n      game.spawnQueue.push({\\n        type,\\n        // stagger delay so they trickle in\\n        delay: i * (type === 'boss' ? 1500 : type === 'brute' ? 800 : type === 'runner' ? 220 : 350),\\n      });\\n    }\\n  }\\n  game.spawnTimer = 0;\\n  showWaveBanner(`WAVE ${game.waveIdx+1} / ${level.waves.length}`);\\n  sfx('wave');\\n}\\n\\nfunction updateSpawns(dt) {\\n  if (game.spawnQueue.length === 0) return;\\n  game.spawnTimer += dt * 1000;\\n  // Spawn any queued that have elapsed\\n  const remaining = [];\\n  for (const s of game.spawnQueue) {\\n    if (game.spawnTimer >= s.delay) {\\n      spawnZombie(s.type);\\n    } else {\\n      remaining.push(s);\\n    }\\n  }\\n  game.spawnQueue = remaining;\\n}\\n\\nfunction spawnZombie(type) {\\n  // Spawn at a random edge, picking the furthest side from player for interesting pressure\\n  const p = game.player;\\n  const sides = [\\n    { x: rand(40, world.w-40), y: 40 },\\n    { x: rand(40, world.w-40), y: world.h-40 },\\n    { x: 40, y: rand(40, world.h-40) },\\n    { x: world.w-40, y: rand(40, world.h-40) },\\n  ];\\n  // pick one weighted by distance from player\\n  sides.sort((a,b) => dist2(b.x,b.y,p.x,p.y) - dist2(a.x,a.y,p.x,p.y));\\n  const pick = sides[randi(0, Math.min(2, sides.length))];\\n  // avoid spawning inside obstacle\\n  let x = pick.x, y = pick.y, tries = 0;\\n  while (collidesObstacle(x, y, 30) && tries < 10) {\\n    x = rand(40, world.w-40);\\n    y = rand(40, world.h-40);\\n    tries++;\\n  }\\n  // spawn puff\\n  for (let i = 0; i < 10; i++) {\\n    const a = Math.random()*TAU;\\n    game.particles.push(new Particle(x, y, {\\n      vx: Math.cos(a)*rand(40,120), vy: Math.sin(a)*rand(40,120),\\n      life: 0.4, r: rand(3,6), color: '#c73866', fade: true,\\n    }));\\n  }\\n  game.zombies.push(new Zombie(x, y, type));\\n}\\n\\nfunction endWaveCheck() {\\n  if (game.spawnQueue.length === 0 && game.zombies.length === 0 && !game.inWaveBreak) {\\n    const level = LEVELS[game.levelIdx];\\n    if (game.waveIdx + 1 >= level.waves.length) {\\n      completeLevel();\\n    } else {\\n      game.inWaveBreak = true;\\n      game.waveBreakT = 3.0;\\n    }\\n  }\\n}\\n\\nfunction completeLevel() {\\n  game.state = 'levelComplete';\\n  game.totalScore += game.levelScore;\\n  game.unlocked = Math.max(game.unlocked, game.levelIdx + 2);\\n  sfx('clear');\\n  // Check full victory\\n  if (game.levelIdx + 1 >= LEVELS.length) {\\n    game.state = 'victory';\\n    showVictory();\\n  } else {\\n    showLevelComplete();\\n  }\\n}\\n\\nfunction tryReload() {\\n  if (game.state !== 'playing') return;\\n  if (game.player) game.player.startReload();\\n}\\n\\n// ------------- UI BINDINGS -------------------------------------\\nconst $ = id => document.getElementById(id);\\nconst menu = $('menu'), levelIntro = $('levelIntro'), levelComplete = $('levelComplete'),\\n      victory = $('victory'), gameOver = $('gameOver'), pause = $('pause');\\nconst waveBanner = $('waveBanner');\\nconst damageFlashEl = $('damageFlash');\\n\\nfunction hideAllOverlays() {\\n  [menu, levelIntro, levelComplete, victory, gameOver, pause].forEach(o => o.classList.add('hidden'));\\n}\\nfunction showOverlay(el) { hideAllOverlays(); el.classList.remove('hidden'); el.classList.add('fade-in'); }\\n\\nfunction renderLevelSelect() {\\n  const wrap = $('levelSelect');\\n  wrap.innerHTML = '';\\n  LEVELS.forEach((lv, i) => {\\n    const tile = document.createElement('div');\\n    tile.className = 'level-tile' + (i + 1 > game.unlocked ? ' locked' : '');\\n    tile.innerHTML = `<div class=\\\"num\\\">${i+1}</div><div class=\\\"lbl\\\">${lv.name.toUpperCase()}</div>`;\\n    if (i + 1 <= game.unlocked) {\\n      tile.addEventListener('click', () => { initAudio(); openLevelIntro(i); });\\n    }\\n    wrap.appendChild(tile);\\n  });\\n}\\n\\nfunction openLevelIntro(idx) {\\n  const lv = LEVELS[idx];\\n  $('introLevelNum').textContent = `LEVEL ${idx+1}`;\\n  $('introName').textContent = lv.name;\\n  $('introDesc').textContent = lv.desc;\\n  const totals = lv.waves.reduce((acc, w) => {\\n    for (const [k,v] of Object.entries(w)) acc[k] = (acc[k]||0) + v;\\n    return acc;\\n  }, {});\\n  $('introStats').innerHTML = Object.entries(totals).map(([k,v]) => `<span>${v} ${k.toUpperCase()}</span>`).join('');\\n  game.levelIdx = idx;\\n  showOverlay(levelIntro);\\n}\\n\\nfunction startGame() {\\n  loadLevel(game.levelIdx);\\n  game.state = 'playing';\\n  hideAllOverlays();\\n  startWave();\\n}\\n\\nfunction showLevelComplete() {\\n  $('completeKills').textContent = game.levelKills;\\n  $('completeScore').textContent = game.levelScore;\\n  showOverlay(levelComplete);\\n}\\nfunction showVictory() {\\n  $('victoryScore').textContent = game.totalScore;\\n  showOverlay(victory);\\n}\\nfunction showGameOver() {\\n  $('overKills').textContent = game.levelKills;\\n  $('overScore').textContent = game.levelScore;\\n  showOverlay(gameOver);\\n}\\n\\nfunction showWaveBanner(text) {\\n  waveBanner.textContent = text;\\n  waveBanner.classList.remove('show');\\n  // force reflow\\n  void waveBanner.offsetWidth;\\n  waveBanner.classList.add('show');\\n}\\n\\nfunction flashDamage() {\\n  damageFlashEl.classList.remove('hit');\\n  void damageFlashEl.offsetWidth;\\n  damageFlashEl.classList.add('hit');\\n}\\n\\nfunction togglePause() {\\n  if (game.state === 'playing') {\\n    game.state = 'paused';\\n    showOverlay(pause);\\n  } else if (game.state === 'paused') {\\n    game.state = 'playing';\\n    hideAllOverlays();\\n  }\\n}\\n\\n// ------------- HUD UPDATE --------------------------------------\\nfunction updateHUD() {\\n  if (!game.player) return;\\n  const p = game.player;\\n  $('hpFill').style.width = (p.hp / p.maxHp * 100) + '%';\\n  $('hpText').textContent = p.hp;\\n  const af = $('ammoFill');\\n  if (p.reloading) {\\n    af.style.width = (1 - p.reloadT/1.0) * 100 + '%';\\n    af.classList.add('reload');\\n    $('ammoText').textContent = 'RELOAD';\\n  } else {\\n    af.style.width = (p.ammo / p.maxAmmo * 100) + '%';\\n    af.classList.remove('reload');\\n    $('ammoText').textContent = `${p.ammo}/${p.maxAmmo}`;\\n  }\\n  $('lvlText').textContent = game.levelIdx + 1;\\n  const lv = LEVELS[game.levelIdx];\\n  $('waveText').textContent = `${game.waveIdx+1}/${lv.waves.length}`;\\n  $('leftText').textContent = game.zombies.length + game.spawnQueue.length;\\n  $('killText').textContent = game.kills;\\n  $('scoreText').textContent = game.score;\\n}\\n\\n// ------------- MAIN LOOP ---------------------------------------\\nlet lastT = performance.now();\\nfunction loop(now) {\\n  const dt = Math.min(0.05, (now - lastT) / 1000);\\n  lastT = now;\\n\\n  if (game.state === 'playing') {\\n    game.player.update(dt);\\n    cameraUpdate();\\n\\n    for (const z of game.zombies) z.update(dt, game.player);\\n    for (const b of game.bullets) b.update(dt);\\n    for (const p of game.particles) p.update(dt);\\n    for (const pw of game.powerups) pw.update(dt, game.player);\\n\\n    // damage numbers\\n    for (const d of game.damageNums) {\\n      d.y += d.vy * dt;\\n      d.vy *= 0.95;\\n      d.life -= dt;\\n    }\\n\\n    // Clean up dead\\n    game.zombies = game.zombies.filter(z => z.hp > 0);\\n    game.bullets = game.bullets.filter(b => !b.dead);\\n    game.particles = game.particles.filter(p => !p.dead);\\n    game.damageNums = game.damageNums.filter(d => d.life > 0);\\n    game.powerups = game.powerups.filter(p => !p.dead);\\n\\n    // Wave spawn / progression\\n    if (game.inWaveBreak) {\\n      game.waveBreakT -= dt;\\n      if (game.waveBreakT <= 0) {\\n        game.inWaveBreak = false;\\n        game.waveIdx++;\\n        startWave();\\n      }\\n    } else {\\n      updateSpawns(dt);\\n      endWaveCheck();\\n    }\\n\\n    game.tSinceHit += dt;\\n    updateHUD();\\n  } else if (game.state === 'paused' || game.state === 'intro' || game.state === 'menu') {\\n    // Still tick particles for menu ambience? skip for now\\n  }\\n\\n  // Render (always, so we see scene behind overlays)\\n  ctx.fillStyle = '#0f0a1a';\\n  ctx.fillRect(0, 0, W, H);\\n  if (game.player) drawWorld();\\n  else drawMenuScene();\\n\\n  requestAnimationFrame(loop);\\n}\\n\\n// Ambient cartoon scene under the menu\\nlet menuT = 0;\\nfunction drawMenuScene() {\\n  menuT += 0.016;\\n  // tiled grass background\\n  const tile = 80;\\n  for (let x = 0; x < W + tile; x += tile) {\\n    for (let y = 0; y < H + tile; y += tile) {\\n      const parity = ((x/tile) + (y/tile)) & 1;\\n      ctx.fillStyle = parity ? '#8FA876' : '#7B9363';\\n      ctx.fillRect(x, y, tile, tile);\\n    }\\n  }\\n  // Drifting ambient zombies\\n  for (let i = 0; i < 7; i++) {\\n    const baseX = ((i * 187 + menuT*30) % (W + 200)) - 100;\\n    const baseY = 120 + (i * 91) % (H - 240);\\n    const z = { x: baseX, y: baseY + Math.sin(menuT + i)*10, r: 22, type:'walker', spec: ZTYPES.walker,\\n                color: '#8FCF3F', eye: '#c73866', walkPhase: menuT*8+i, angle: 0, hitFlash: 0 };\\n    Zombie.prototype.draw.call(z);\\n  }\\n}\\n\\n// ------------- WIRING ------------------------------------------\\n$('startBtn').addEventListener('click', () => { initAudio(); startGame(); });\\n$('nextBtn').addEventListener('click', () => { initAudio(); game.levelIdx++; openLevelIntro(game.levelIdx); });\\n$('completeMenuBtn').addEventListener('click', () => backToMenu());\\n$('victoryMenuBtn').addEventListener('click', () => backToMenu());\\n$('overMenuBtn').addEventListener('click', () => backToMenu());\\n$('retryBtn').addEventListener('click', () => { initAudio(); startGame(); });\\n$('resumeBtn').addEventListener('click', () => togglePause());\\n$('pauseMenuBtn').addEventListener('click', () => backToMenu());\\n\\nfunction backToMenu() {\\n  game.state = 'menu';\\n  game.player = null;\\n  game.zombies = []; game.bullets = []; game.particles = []; game.powerups = [];\\n  renderLevelSelect();\\n  showOverlay(menu);\\n}\\n\\n// Init\\nrenderLevelSelect();\\nshowOverlay(menu);\\nrequestAnimationFrame(loop);\\n\\n// Responsive: scale canvas to fit viewport while preserving 16:9\\nfunction fitCanvas() {\\n  const stage = document.getElementById('stage');\\n  const availW = stage.clientWidth - 40;\\n  const availH = stage.clientHeight - 40;\\n  const ratio = 1280/720;\\n  let w = availW, h = availW / ratio;\\n  if (h > availH) { h = availH; w = availH * ratio; }\\n  canvas.style.width = w + 'px';\\n  canvas.style.height = h + 'px';\\n}\\naddEventListener('resize', fitCanvas);\\nfitCanvas();\\n</script>\\n</body>\\n</html>\\n\", \"filename\": \"/home/claude/zombie_defense.html\"}"
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
  "tool_use_id": "toolu_015nQYwZVDaFzQX5xmd5QUPt",
  "name": "create_file",
  "content": [
    {
      "type": "text",
      "text": "File created successfully: /home/claude/zombie_defense.html",
      "uuid": "e519bec9-0bce-46aa-ac60-c05b77af25a5"
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
    "text": "File created successfully: /home/claude/zombie_defense.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 I'm doing a quick mental walkthrough of the game code to catch any issues—checking the player controls, zombie AI and variety, bullet physics with collision detection, the particle effects system, the wave-based level progression, audio implementation, and the HUD display to make sure everything integrates properly before finalizing it.

Now I'm verifying that the menu scene's zombie rendering works correctly by checking all the properties the draw function needs—position, radius, animation state, color, angle, and type-specific attributes like health bars for certain zombie variants. The walker zombie in the menu should have everything it needs since I'm initializing those properties, and the shadow drawing function is separate so that should work fine too.

I'm also confirming that zombies render at their screen-space coordinates without camera translation in the menu, which is correct, and that collision checks won't be called during menu rendering so there's no issue with obstacles not being loaded yet. But I'm noticing something about the reload UI that needs attention.

Checking the reload progress bar logic...

The next level button increments the level index and opens the intro for that level, while the retry button restarts the current level using the existing index—both flows look correct. I'm a bit concerned about whether the game state fully resets between levels, but the core progression logic seems solid, so I'll prepare this for output.

Now I'm checking the mouse coordinate scaling to ensure it accounts for CSS resizing of the canvas, and the handler properly converts screen coordinates to the internal 1280x720 resolution. I want to verify the menu drawing won't error since I'm calling prototype methods on plain objects, so I need to confirm the z object has all the required properties like x and y coordinates.

Verifying the draw method can access all the properties on this walker object—position, radius, animation phase, colors, and angle all check out, and the type-specific branches for boss and brute won't execute since it's a walker. The stroke calls for the body and shirt accents all have matching beginPath statements, so that checks out. The code should work as intended, so I'll move it to the output directory.

</details>

Let me copy to the output directory and verify it renders correctly:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T14:53:16.545036Z",
  "stop_timestamp": "2026-04-18T14:53:17.702468Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014uCZ8wmfqAagZ6ExKW2w8o",
  "name": "bash_tool",
  "input": {
    "command": "mkdir -p /mnt/user-data/outputs && cp /home/claude/zombie_defense.html /mnt/user-data/outputs/zombie_defense.html && echo \"File size: $(wc -c < /mnt/user-data/outputs/zombie_defense.html) bytes, $(wc -l < /mnt/user-data/outputs/zombie_defense.html) lines\"",
    "description": "Copy game to outputs and verify size"
  },
  "message": "Copy game to outputs and verify size",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"mkdir -p /mnt/user-data/outputs && cp /home/claude/zombie_defense.html /mnt/user-data/outputs/zombie_defense.html && echo \\\"File size: $(wc -c < /mnt/user-data/outputs/zombie_defense.html) bytes, $(wc -l < /mnt/user-data/outputs/zombie_defense.html) lines\\\"\"}"
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
  "tool_use_id": "toolu_014uCZ8wmfqAagZ6ExKW2w8o",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"File size: 54224 bytes, 1669 lines\\n\",\"stderr\":\"\"}",
      "uuid": "a0cb3f83-a999-42d3-9bc3-b997402c39d1"
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
    "json_block": "{\"returncode\":0,\"stdout\":\"File size: 54224 bytes, 1669 lines\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T14:53:19.600003Z",
  "stop_timestamp": "2026-04-18T14:53:21.893743Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VYFZgkEZVK9Fcxqs53Fp44",
  "name": "bash_tool",
  "input": {
    "command": "cd /home/claude && node -e \"\nconst fs = require('fs');\nconst html = fs.readFileSync('zombie_defense.html', 'utf8');\n// Extract just the script block and check for obvious syntax errors\nconst match = html.match(/<script>([\\s\\S]*?)<\\/script>/);\nif (match) {\n  const code = match[1];\n  try {\n    // Use Function constructor to parse (won't execute DOM-dependent code)\n    new Function(code);\n    console.log('✓ JavaScript parses cleanly');\n    console.log('Script length:', code.length, 'chars');\n  } catch(e) {\n    console.log('✗ Syntax error:', e.message);\n  }\n}\n\"",
    "description": "Verify JavaScript syntax is valid"
  },
  "message": "Verify JavaScript syntax is valid",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"cd /home/claude && node -e \\\"\\nconst fs = require('fs');\\nconst html = fs.readFileSync('zombie_defense.html', 'utf8');\\n// Extract just the script block and check for obvious syntax errors\\nconst match = html.match(/<script>([\\\\s\\\\S]*?)<\\\\/script>/);\\nif (match) {\\n  const code = match[1];\\n  try {\\n    // Use Function constructor to parse (won't execute DOM-dependent code)\\n    new Function(code);\\n    console.log('\\u2713 JavaScript parses cleanly');\\n    console.log('Script length:', code.length, 'chars');\\n  } catch(e) {\\n    console.log('\\u2717 Syntax error:', e.message);\\n  }\\n}\\n\\\"\"}"
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
  "tool_use_id": "toolu_01VYFZgkEZVK9Fcxqs53Fp44",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"✓ JavaScript parses cleanly\\nScript length: 41033 chars\\n\",\"stderr\":\"\"}",
      "uuid": "0ed36085-1453-4ce2-9c3a-baeb0cc72582"
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
    "json_block": "{\"returncode\":0,\"stdout\":\"✓ JavaScript parses cleanly\\nScript length: 41033 chars\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 The JavaScript parsed without issues, so I can share the file with the user now.

</details>

Code parses cleanly. Let me present the game:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T14:53:24.436187Z",
  "stop_timestamp": "2026-04-18T14:53:24.789635Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01RzAac1jeWh3cKiji5gMyDs",
  "name": "present_files",
  "input": {
    "filepaths": [
      "/mnt/user-data/outputs/zombie_defense.html"
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
        "['/mnt/user-data/outputs/zombie_defense.html']"
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
  "tool_use_id": "toolu_01RzAac1jeWh3cKiji5gMyDs",
  "name": "present_files",
  "content": [
    {
      "type": "local_resource",
      "file_path": "/mnt/user-data/outputs/zombie_defense.html",
      "name": "zombie defense",
      "mime_type": "text/html",
      "uuid": "59eae0c8-ad93-4914-98ab-a10a1355b824"
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

**Zombie Horde Defense** — 5 levels, top-down MOBA-style view, cartoon aesthetic.

**Controls:** WASD to move, mouse to aim, click to shoot, R to reload, ESC to pause.

**What's in it:**
- **5 progressive levels** — The Outskirts → Downtown Drift → Mall Panic → Industrial Rot → Final Stand (boss wave)
- **4 zombie types** — Walker (slow tank), Runner (fast glass cannon), Brute (heavy with knockback), Boss (horned giant with an HP bar)
- **Wave system** — 3 waves per level with 3-second breathers, staggered spawns from edges
- **Cartoon feel** — flat palette, thick black outlines, bouncy leg animation, squash-on-hit flashes, rotating head with eye/teeth
- **Juice** — screen shake, muzzle flashes, floating damage numbers, blood spurts with gravity, low-HP red vignette pulse, hit-freeze flashes
- **Economy** — 30% health packs and ammo crates drop from kills (~14% combined chance)
- **Audio** — procedural Web Audio (square/saw/triangle waves) for shots, hits, reloads, wave starts
- **Camera** — follows player with smooth lerp, shakes on impacts, 2400×1600 arena visible through 1280×720 viewport

**Design choices worth flagging as assumptions** (since I didn't ask upfront):
- I went with classic pistol-only combat — didn't add weapon variety to keep the scope tight. Easy to extend.
- "Modern cartoon" I interpreted as flat-color + chunky-outline (Castle Crashers / Cult of the Lamb lineage) rather than painterly/Pixar. If you wanted the latter, the sprites would need rework.
- Levels unlock progressively — you can't skip to level 5 without clearing 1–4.

If anything feels off (difficulty curve, control sensitivity, visual direction), tell me which knob to turn and I'll iterate.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019da10f-4c6b-7c08-9a3c-2437a18da2c5",
  "updated_at": "2026-04-18T15:24:23.658416Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019da10f-4c6b-7a1f-9f10-61ac7c8d219b"
}
```

</details>

### 3. human — 2026-04-18T15:12:58.683701Z

1. It should be Roguelike Game
2. Show the hp bar
3. Adjust the monsters' power and properties referring to the common pattern of Roguelike Game

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019da126-ee5d-7cb3-8b86-75c2a9f426d1",
  "updated_at": "2026-04-18T15:12:58.683701Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019da10f-4c6b-7c08-9a3c-2437a18da2c5"
}
```

</details>

### 4. assistant — 2026-04-18T15:23:34.922258Z

 

<details>
<summary>Thinking (verbatim)</summary>

 So the user wants me to turn this into a roguelike game. I'm thinking through what that actually entails—procedurally generated levels, permadeath mechanics, a run-based structure where you make build choices through item pickups and upgrades, escalating difficulty as you progress deeper, and that room-clearing progression system like in games such as Binding of Isaac.

On the HP bar front, I'm realizing they probably want visual feedback on enemy health since I'm only showing it for brutes and bosses right now. I should display HP bars above all zombies during combat—that's standard roguelike feedback for showing damage dealt. I'll keep the player's HUD prominent but make sure health visibility is consistent across the board.

Now I'm thinking through the enemy design structure. I need tiered enemies with different behaviors—melee rushers, ranged attackers, tanky units, fast swarmers, and special types like bombers or healers. Elite variants and mini-bosses should scale with difficulty, leading up to floor bosses with unique mechanics.

For the core loop, I'm picturing: start a run, clear rooms of enemies to open doors, pick from three random upgrades between rooms, progress through multiple rooms per floor, face a boss at the end, then move to a harder floor. Death sends you back to floor one. Each room spawns enemies in waves with increasing difficulty, and every fifth room or so becomes a boss encounter. I'm thinking around 15-20 rooms per run, or maybe infinite scaling. The real roguelike magic comes from the upgrade system—I need about 10-15 meaningful upgrades like damage, fire rate, movement speed, max HP, and other build-defining options that create variety across runs.

For enemies specifically, I'm planning a Walker as the baseline melee unit that scales with each floor, a Runner for fast melee threats, a Brute for tanky opposition, and new ranged types like a Spitter that shoots projectiles and an Exploder that detonates on contact. I could add a Summoner that spawns smaller enemies too. Each floor's boss would have distinct mechanics to keep encounters fresh.

On progression, killing enemies fills an XP bar, and leveling up pauses the action to let me pick from three random upgrades—keeping it clean and simple like Vampire Survivors or Brotato. Clearing a room grants either healing or an item drop. For scaling, I'm thinking each floor bumps enemy stats by around 20% HP, 15% damage, and 5% speed, with more enemies spawning per room and occasional elite variants to increase difficulty.

For the overall structure, I'm planning five distinct floor themes that loop with escalating enemy tiers, each containing five rooms (four normal encounters plus a boss). That's a lot of content per run, so I might compress it or offer an endless mode after completing the initial cycle.

Let me settle on a more manageable pacing: three regular rooms plus one boss per floor, giving me twenty total rooms across the five-floor campaign. Once players finish floor five, they either achieve victory or jump into a harder loop with fifty percent increased difficulty.

I'm working out the enemy scaling now—health and damage will scale exponentially per floor, with speed ramping up slightly and new enemy types unlocking as players progress through each tier.

Now I'm mapping out the enemy variety that appears on each floor, starting with just walkers and runners on floor one, then gradually introducing spitters, exploders, brutes, and boss variants as difficulty increases. I'm also setting elite enemy chances at ten percent from floor two onward, with better upgrade drops as a reward. For progression, I'm defining the XP values each enemy type grants when defeated, ranging from five for basic walkers up to a hundred for bosses. Finally, I'm adding visual feedback by placing HP bars above every zombie alongside the existing player HUD bar.

I'm expanding the UI to show more run information—an XP bar, level counter, current floor and room tracker, and overall run statistics. Then I'm building out the upgrade pool with offensive options like damage boosts, fire rate increases, ammo capacity, reload speed, and special bullet effects such as piercing, ricochet, and explosive rounds. I'm recognizing this is a lot of scope, so I need to focus on the essentials and implement the core loop really well rather than trying to do everything. I've got the key systems in place—room progression, leveling with upgrade choices, scaling enemies, distinct enemy types, health bars, permadeath, and a run summary—so now I'm mapping out the actual flow: start from the main menu, play through rooms killing enemies, then move to the next area once cleared.

I'm realizing the cleanest approach is to trigger an upgrade choice after every room clear (like Brotato does), which feels generous and keeps the pacing snappy. But actually, XP-based leveling might be better—enemies drop XP, the bar fills up, and when you level up you get a choice screen. Room clears just give a small heal and open the door to the next area. I'm settling on the classic roguelike pattern where killing enemies builds XP toward level-ups, each level-up pauses the game to let me choose from three upgrades, and clearing a room grants a small heal before moving to the next one. The XP scaling uses an exponential formula so early progression feels snappy but later levels require more grinding, which creates a nice organic difficulty curve. Now I need to plan out the implementation carefully since this is a significant restructuring of the game state and logic.

Defining the state structure...

Deriving player stats from upgrades...

Adding new enemy types like the Spitter that hangs back and fires projectiles...

Designing the upgrade system with a clean data structure that tracks counts for stackable upgrades...

Now I'm planning the UI for when the player levels up—I'll pause the game and display three upgrade cards centered on screen for them to choose from.

Each card needs an icon, name, description, and current level indicator if it's a stackable upgrade, with a cartoon aesthetic using thick outlines, bright colors, and hover effects.

I'm going to restructure the codebase to keep the solid foundation (rendering, particles, bullets, player mechanics, existing zombies) but overhaul the progression system with floors and rooms instead of levels, add an XP mechanic, implement the upgrade selection system, introduce new enemy types like Spitters and Exploders with elite variants, add health bars for all enemies and the player, and scale enemy stats as difficulty increases.

The architecture will keep the core engine, input handling, audio, and camera intact, then refactor the world into smaller randomized rooms, add obstacle generation per room, extend the Player class with upgrade-aware stat getters, expand Zombie to handle new types and floor-based scaling, enhance Bullet with piercing and ricochet properties, and create new classes for zombie projectiles and explosions. I'll also need to build out the upgrade system, XP tracking, room/floor progression logic, and a new UI layer for the upgrade choice screen.

For room generation, I'm thinking smaller arenas than the original 2400x1600—something like 1400x900 for tighter, more intense combat encounters that randomize each time.

Now I'm debating the arena size: should I go with a viewport-sized arena (1280x720) to keep everything visible without camera movement, which is simpler and matches roguelikes like Binding of Isaac, or stick with a larger arena that lets the camera follow the player for a more dynamic feel? The viewport approach trades exploration for clarity and implementation simplicity, but the camera follow from the previous version did feel good. I'm leaning toward keeping a slightly larger arena around 1800 pixels wide to preserve that camera movement while still being manageable.

Actually, settling on 1400x900 with camera follow feels like the right balance—enemies can still emerge dramatically from off-screen while rooms stay contained and focused. I'm also locking in the room structure: normal rooms have 2 waves of enemies with randomly placed obstacles that vary by floor theme, and boss rooms come every 4th room. The progression spans 5 floors with 3 normal rooms plus a boss in each, culminating in a final boss on floor 5.

Wait, that's 20 rooms total—pretty long. Let me reconsider the pacing. Maybe 2 normal rooms plus a boss per floor gives 15 rooms, which feels more reasonable for a 10-15 minute run. Actually, since each room already has 2 waves, that's plenty of combat density. Let me simplify to 1 wave per room instead and stick with 3 rooms per floor.

So the final structure: 3 combat rooms plus 1 boss room per floor, 5 floors total, 20 rooms per run. That should hit the right difficulty and length for most players.

Now I'm working out the progression curve—specifically how much XP is needed to level up. The costs scale exponentially, starting at 15 XP for level 2 and growing by roughly 1.6x each level.  Early kills will trigger quick level-ups and give players frequent upgrade choices, but the curve flattens out so a full run gets you to around level 10-15 with maybe 10-15 total upgrades. That feels like a solid power progression.

I'm also adding a base dash ability to make movement more engaging from the start—SPACE to activate, with a short dash duration, cooldown, and brief invulnerability frames during the dash itself.

Now I'm writing the full rewrite, aiming for around 1400 lines. I'll keep the HTML and CSS mostly intact but rebuild the JavaScript with a cleaner structure: core systems like canvas and input handling, then the upgrades system, player class with upgrade-modified stats and the dash mechanic, and the rest of the game logic.

Writing the game code... Now I'm setting up the zombie types with their specific behaviors—spitters that projectile attack, exploders that rush and detonate—and scaling their stats by floor difficulty. I'm also defining the bullet system to handle piercing, explosive, and critical damage modifiers, then building out the room generation logic that spawns enemies based on floor progression and triggers boss encounters on the fourth room. Finally, I'm sketching the upgrade UI that pauses the game to present three card choices and the main game loop structure.

Before I start coding though, I should lock in whether to keep those five themed levels from before—grass, urban, mall, industrial, final—and map each floor to its visual theme for the roguelike structure. Let me also nail down the core numbers: player starts with 100 HP, moves at 210 px/s, deals 14 damage per shot with a 0.14 second fire rate, carries 12 ammo with a 1 second reload, and has a dash that recharges every 1.5 seconds for a quick 0.25 second burst at 600 px/s. For floor 1 enemies, walkers have 30 HP and deal 10 damage.

Now I'm filling out the rest of the enemy roster with their individual stats—runners are faster and lighter, spitters attack from range, exploders deal massive burst damage, brutes are tanky threats, and the boss has special mechanics. Then I'm applying a scaling formula across floors so that HP and damage increase as you progress deeper, with floor 2 getting a 1.25× HP multiplier and 1.15× damage multiplier, and floor 3 jumping to 1.55×.

I'm also tracking the elite variant multipliers—they get double HP and 1.5× damage with a visual glow effect—and mapping out the XP rewards for each enemy type, where bosses give 80 XP and elites double that. The leveling curve uses an exponential formula so that each level requires increasingly more XP, and I'm checking that a player grinding through floor 1's 30 enemies should reach around level 2 or 3 before moving on.

Now I'm ready to start implementing the upgrade system with about 15 different perks that players can pick up, ranging from damage boosts and fire rate increases to movement speed and ammo capacity improvements, most of which can stack multiple times. Eagle Eye also boosts speed, and I'm adding a few more upgrades like Scholar for XP gains, Lucky for better drop rates, Berserker for high-risk damage, and Bullet Storm for burst fire mechanics. I'll prioritize the first ten as essential and keep the rest as nice-to-haves, then implement all fifteen with simplified effects to avoid complexity.

Now I'm thinking through the obstacle generation system for randomized room layouts, making sure they don't overlap and the player spawn stays clear. I'll also need to update the HUD with an XP bar, floor indicator, dash cooldown, and a health bar above the player.

Writing the game code...

For the visual elements, I'm adding HP bars above every zombie and the player, styling the upgrade cards to be bright and hoverable, and creating a run summary screen. I should also clarify the spitter's behavior pattern.

Now I'm working through the specific enemy mechanics: spitters need to maintain distance while telegraphing their attacks, exploders should rush and detonate with a shockwave effect, and I want to introduce elite variants starting from floor 2 that are visually distinct with enhanced stats.

For rewards, I'm keeping it simple—elites just drop 3x XP instead of adding upgrade choices. On bosses, I'm realizing the initial concept of unique types per floor is getting unwieldy, so I'm pivoting toward making each boss a powered-up version of an existing enemy type, scaling them appropriately for their floor. I'm settling on a simpler boss structure: floors 1-4 get a basic boss with a charge attack, and floor 5 has a mega boss with three special abilities. Now I'm ready to start coding the full implementation, aiming for around 1500-1800 lines. The key flow I need to build is: menu to start run, generate floor 1, clear rooms with a banner and door transition, handle level-ups between rooms, then progress through floors with boss encounters and floor-cleared banners.

For the transition between rooms, I'm going with an automatic fade rather than making the player walk to a physical door—it's cleaner and faster. After a room clears, the banner displays, any pending upgrades get shown, then a quick fade out and fade in loads the next room with its own banner.

Writing the implementation now... Writing the full game structure...

Now I'm thinking about the visual design for upgrade cards—each one needs a simple canvas-drawn icon to make them visually distinct, like a red explosion star for the Boomstick upgrade. I'm deciding between different approaches for rendering the upgrade icons—emojis would be quickest but might have rendering issues, so I'll go with simple SVG or HTML elements instead. For the upgrade cards themselves, I'm structuring them as DOM overlays with a colored icon box, the upgrade name, description, and level indicator.

After weighing the options, I'm settling on emoji icons with text fallbacks since they're simple enough for a prototype and most systems handle them reasonably well. Now I'm ready to start writing the actual code—I'll put together the HTML structure and CSS styling first, then handle all the JavaScript logic in one block.

Before I dive in, I need to make a bigger decision about the game structure itself. Since the user wants a proper roguelike, I should completely replace the old level-based system with procedural floors and rooms instead of the fixed wave progression. That means removing the level select screen, ditching the hard-coded levels, and building a room-by-room progression that scales with difficulty as you go deeper.

Writing the complete rewrite...

</details>

Good feedback. Let me rebuild this as a proper roguelike — that means procedural rooms, run-based progression, XP + upgrade choices, enemy variety with meaningful behaviors, and scaling difficulty. Let me implement the full rewrite.

**Roguelike patterns I'm implementing:**
- **Run structure**: 5 floors × 4 rooms (3 combat + 1 boss) = 20-room runs, permadeath
- **XP + level-up choices**: kill enemies → fill XP bar → pick 1 of 3 random upgrades
- **Enemy variety**: Walker, Runner, Spitter (ranged), Exploder (suicide), Brute (tank), Boss + Elite modifier
- **Floor scaling**: HP ×1.25/floor, damage ×1.15/floor, new enemy types unlock per floor
- **Elite enemies**: 15% chance from floor 2, 2× HP / 1.5× damage / 3× XP, purple aura
- **HP bars on every enemy** plus a small one over the player
- **Dash ability** (base, not an upgrade) — Space, i-frames, 1.5s cooldown
- **15 stackable upgrades** covering damage, utility, defense, and build-shaping mechanics (piercing, explosive, crits, vampire, regen, thorns…)

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T15:15:50.040466Z",
  "stop_timestamp": "2026-04-18T15:22:23.434706Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Fyeps1LBpownrP6bQk1vjY",
  "name": "create_file",
  "input": {
    "description": "Full roguelike rewrite of zombie defense game",
    "path": "/home/claude/zombie_roguelike.html",
    "file_text": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Zombie Rogue: Endless Horde</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@700;800;900&display=swap\" rel=\"stylesheet\">\n<style>\n  :root {\n    --c-bg-a: #1a1428;\n    --c-bg-b: #2a1f3d;\n    --c-accent: #ffbd2e;\n    --c-hot: #ff6b6b;\n    --c-cool: #4ecdc4;\n    --c-dark: #0f0a1a;\n    --c-blood: #c73866;\n    --c-slime: #8fcf3f;\n    --c-xp: #7b68ee;\n    --c-elite: #c881ff;\n  }\n  * { margin: 0; padding: 0; box-sizing: border-box; }\n  html, body {\n    width: 100%; height: 100%;\n    overflow: hidden;\n    background: var(--c-bg-a);\n    font-family: 'Nunito', sans-serif;\n    color: #fff;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n  #stage {\n    position: relative;\n    width: 100vw; height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background:\n      radial-gradient(ellipse at 30% 20%, #3a2a54 0%, transparent 60%),\n      radial-gradient(ellipse at 70% 80%, #241836 0%, transparent 60%),\n      linear-gradient(180deg, #1a1428 0%, #0f0a1a 100%);\n  }\n  canvas {\n    display: block;\n    image-rendering: pixelated;\n    image-rendering: crisp-edges;\n    cursor: crosshair;\n    box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 4px var(--c-dark), 0 0 0 8px var(--c-accent);\n    border-radius: 6px;\n  }\n  #hud {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    font-family: 'Nunito', sans-serif;\n  }\n  /* Bottom bar: HP, XP, Ammo */\n  .hud-bottom {\n    position: absolute;\n    bottom: 3vh;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    align-items: center;\n  }\n  .stat-row { display: flex; gap: 14px; }\n  .pill {\n    background: rgba(15, 10, 26, 0.82);\n    border: 3px solid var(--c-dark);\n    box-shadow: 0 4px 0 var(--c-dark), inset 0 2px 0 rgba(255,255,255,0.08);\n    border-radius: 14px;\n    padding: 8px 14px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-weight: 900;\n  }\n  .pill .label {\n    font-size: 10px;\n    opacity: 0.65;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  .pill .value {\n    font-family: 'Bangers', sans-serif;\n    font-size: 22px;\n    letter-spacing: 2px;\n  }\n  .bar {\n    width: 160px; height: 12px;\n    background: #0a0614;\n    border-radius: 7px;\n    border: 2px solid var(--c-dark);\n    overflow: hidden;\n    position: relative;\n  }\n  .hp-fill {\n    height: 100%;\n    background: linear-gradient(180deg, #ff9baf, var(--c-blood));\n    transition: width 0.18s ease;\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\n  }\n  .xp-fill {\n    height: 100%;\n    background: linear-gradient(180deg, #aea0ff, var(--c-xp));\n    transition: width 0.18s ease;\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\n  }\n  .ammo-fill {\n    height: 100%;\n    background: linear-gradient(180deg, #ffd966, var(--c-accent));\n    transition: width 0.12s ease;\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\n  }\n  .ammo-fill.reload {\n    background: linear-gradient(180deg, #7dd3d0, var(--c-cool));\n    animation: reloading 0.8s ease-in-out infinite alternate;\n  }\n  @keyframes reloading {\n    from { filter: brightness(0.8); } to { filter: brightness(1.3); }\n  }\n  /* Top bar: Run info */\n  .hud-top {\n    position: absolute;\n    top: 3vh;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    gap: 12px;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  /* Left column: active upgrades */\n  .upgrade-stack {\n    position: absolute;\n    top: 3vh;\n    left: 3vh;\n    max-width: 120px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n  }\n  .upg-chip {\n    background: rgba(15,10,26,0.8);\n    border: 2px solid var(--c-dark);\n    border-radius: 10px;\n    padding: 4px 8px;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n    font-weight: 900;\n  }\n  .upg-chip .dot {\n    width: 20px; height: 20px;\n    border-radius: 6px;\n    display: grid;\n    place-items: center;\n    font-size: 14px;\n    border: 2px solid var(--c-dark);\n  }\n  .upg-chip .lvl {\n    margin-left: auto;\n    font-family: 'Bangers', sans-serif;\n    font-size: 14px;\n    color: var(--c-accent);\n    letter-spacing: 1px;\n  }\n  /* Right column: dash + minimap icons */\n  .hud-right {\n    position: absolute;\n    top: 3vh;\n    right: 3vh;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-end;\n  }\n  .dash-indicator {\n    width: 64px; height: 64px;\n    background: rgba(15,10,26,0.82);\n    border: 3px solid var(--c-dark);\n    box-shadow: 0 4px 0 var(--c-dark);\n    border-radius: 14px;\n    display: grid;\n    place-items: center;\n    position: relative;\n    overflow: hidden;\n  }\n  .dash-indicator.ready { background: var(--c-cool); }\n  .dash-indicator .key {\n    font-family: 'Bangers', sans-serif;\n    font-size: 18px;\n    letter-spacing: 1px;\n    color: #fff;\n    text-shadow: 2px 2px 0 var(--c-dark);\n    position: relative;\n    z-index: 2;\n  }\n  .dash-indicator .cool-fill {\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    background: rgba(78,205,196,0.3);\n    transition: height 0.1s linear;\n  }\n  /* Wave / transition banner */\n  .banner {\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: 'Bangers', sans-serif;\n    font-size: 68px;\n    letter-spacing: 6px;\n    color: var(--c-hot);\n    text-shadow:\n      4px 4px 0 var(--c-dark),\n      -2px -2px 0 #fff,\n      0 0 40px rgba(255,107,107,0.5);\n    opacity: 0;\n    pointer-events: none;\n    white-space: nowrap;\n    text-align: center;\n  }\n  .banner small {\n    display: block;\n    font-size: 28px;\n    color: var(--c-accent);\n    letter-spacing: 4px;\n    margin-top: 4px;\n    text-shadow: 3px 3px 0 var(--c-dark);\n  }\n  .banner.show {\n    animation: banner-in 2.4s cubic-bezier(0.2, 0.9, 0.3, 1.4) forwards;\n  }\n  @keyframes banner-in {\n    0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(-8deg); }\n    14%  { opacity: 1; transform: translate(-50%, -50%) scale(1.15) rotate(2deg); }\n    24%  { transform: translate(-50%, -50%) scale(1) rotate(0deg); }\n    80%  { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }\n    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.35) rotate(0deg); }\n  }\n  .damage-flash {\n    position: absolute; inset: 0;\n    background: radial-gradient(ellipse at center, transparent 50%, var(--c-blood) 120%);\n    opacity: 0;\n    pointer-events: none;\n    mix-blend-mode: screen;\n  }\n  .damage-flash.hit { animation: damageFlash 0.35s ease-out; }\n  @keyframes damageFlash {\n    0% { opacity: 0; } 20% { opacity: 0.7; } 100% { opacity: 0; }\n  }\n  .xp-flash {\n    position: absolute; inset: 0;\n    background: radial-gradient(ellipse at center, transparent 60%, var(--c-xp) 130%);\n    opacity: 0;\n    pointer-events: none;\n    mix-blend-mode: screen;\n  }\n  .xp-flash.flash { animation: xpFlash 0.5s ease-out; }\n  @keyframes xpFlash {\n    0% { opacity: 0; } 25% { opacity: 0.8; } 100% { opacity: 0; }\n  }\n  /* Overlays */\n  .overlay {\n    position: absolute;\n    inset: 0;\n    background: rgba(15, 10, 26, 0.85);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    pointer-events: auto;\n    backdrop-filter: blur(6px);\n    -webkit-backdrop-filter: blur(6px);\n    padding: 40px;\n  }\n  .overlay.hidden { display: none; }\n  .title {\n    font-family: 'Bangers', sans-serif;\n    font-size: 96px;\n    letter-spacing: 6px;\n    line-height: 0.9;\n    color: var(--c-accent);\n    text-shadow:\n      5px 5px 0 var(--c-dark),\n      -3px -3px 0 var(--c-hot),\n      0 0 40px rgba(255,189,46,0.4);\n    text-align: center;\n    transform: rotate(-2deg);\n  }\n  .title small {\n    display: block;\n    font-size: 30px;\n    color: var(--c-cool);\n    letter-spacing: 10px;\n    text-shadow: 3px 3px 0 var(--c-dark);\n    margin-top: 6px;\n    transform: rotate(3deg);\n  }\n  .subtitle {\n    font-family: 'Bangers', sans-serif;\n    font-size: 52px;\n    letter-spacing: 5px;\n    color: #fff;\n    text-shadow: 4px 4px 0 var(--c-dark);\n    text-align: center;\n  }\n  .subtitle.hot { color: var(--c-hot); }\n  .subtitle.cool { color: var(--c-cool); }\n  .subtitle.warn { color: var(--c-accent); }\n  .btn {\n    font-family: 'Bangers', sans-serif;\n    font-size: 28px;\n    letter-spacing: 4px;\n    padding: 14px 40px;\n    background: var(--c-accent);\n    color: var(--c-dark);\n    border: 4px solid var(--c-dark);\n    box-shadow: 0 6px 0 var(--c-dark);\n    border-radius: 16px;\n    cursor: pointer;\n    transition: transform 0.08s ease, box-shadow 0.08s ease;\n  }\n  .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 0 var(--c-dark); }\n  .btn:active { transform: translateY(4px); box-shadow: 0 2px 0 var(--c-dark); }\n  .btn.cool { background: var(--c-cool); }\n  .btn.hot { background: var(--c-hot); color: #fff; }\n  .controls {\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 700px;\n  }\n  .key {\n    background: rgba(15,10,26,0.7);\n    border: 3px solid var(--c-dark);\n    box-shadow: 0 3px 0 var(--c-dark);\n    padding: 6px 14px;\n    border-radius: 10px;\n    font-family: 'Bangers', sans-serif;\n    letter-spacing: 2px;\n    font-size: 16px;\n    color: var(--c-accent);\n  }\n  .key .desc {\n    color: #fff; letter-spacing: 1px; margin-left: 8px; opacity: 0.8; font-size: 13px;\n  }\n  /* Upgrade choice cards */\n  .upgrade-choices {\n    display: flex;\n    gap: 24px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 1100px;\n  }\n  .upgrade-card {\n    width: 280px; height: 340px;\n    background: rgba(26, 20, 40, 0.95);\n    border: 5px solid var(--c-dark);\n    box-shadow: 0 8px 0 var(--c-dark), inset 0 4px 0 rgba(255,255,255,0.08);\n    border-radius: 22px;\n    padding: 24px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n    transition: transform 0.12s ease, box-shadow 0.12s ease;\n    position: relative;\n    overflow: hidden;\n  }\n  .upgrade-card::before {\n    content: '';\n    position: absolute;\n    top: -60%; left: -60%;\n    width: 220%; height: 220%;\n    background: conic-gradient(transparent 0deg, var(--accent-color) 45deg, transparent 90deg, transparent 360deg);\n    opacity: 0.08;\n    animation: spin 8s linear infinite;\n    pointer-events: none;\n  }\n  @keyframes spin { to { transform: rotate(360deg); } }\n  .upgrade-card:hover {\n    transform: translateY(-10px) rotate(-1deg);\n    box-shadow: 0 16px 0 var(--c-dark), 0 0 30px var(--accent-color);\n  }\n  .upgrade-card .icon {\n    width: 90px; height: 90px;\n    background: var(--accent-color);\n    border: 4px solid var(--c-dark);\n    border-radius: 20px;\n    display: grid; place-items: center;\n    font-size: 48px;\n    box-shadow: inset 0 4px 0 rgba(255,255,255,0.2), 0 4px 0 var(--c-dark);\n    margin-top: 6px;\n    line-height: 1;\n  }\n  .upgrade-card .name {\n    font-family: 'Bangers', sans-serif;\n    font-size: 30px;\n    letter-spacing: 3px;\n    color: var(--accent-color);\n    text-align: center;\n    text-shadow: 2px 2px 0 var(--c-dark);\n    line-height: 1;\n  }\n  .upgrade-card .desc {\n    font-size: 14px;\n    line-height: 1.4;\n    text-align: center;\n    opacity: 0.85;\n    font-weight: 700;\n    flex: 1;\n    display: flex;\n    align-items: center;\n    padding: 0 4px;\n  }\n  .upgrade-card .lvl-pill {\n    background: var(--c-dark);\n    border: 3px solid var(--accent-color);\n    border-radius: 10px;\n    padding: 4px 12px;\n    font-family: 'Bangers', sans-serif;\n    letter-spacing: 2px;\n    font-size: 16px;\n    color: var(--accent-color);\n  }\n  .upgrade-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n  }\n  .upgrade-title .lvl-up {\n    font-family: 'Bangers', sans-serif;\n    font-size: 68px;\n    letter-spacing: 6px;\n    color: var(--c-xp);\n    text-shadow: 4px 4px 0 var(--c-dark), 0 0 30px rgba(123,104,238,0.5);\n  }\n  .upgrade-title .lvl-up small {\n    display: block;\n    font-size: 22px;\n    color: #fff;\n    letter-spacing: 4px;\n    text-shadow: 2px 2px 0 var(--c-dark);\n  }\n  /* Run summary */\n  .run-summary {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 12px;\n    max-width: 600px;\n    width: 100%;\n  }\n  .stat-card {\n    background: rgba(26,20,40,0.9);\n    border: 3px solid var(--c-dark);\n    box-shadow: 0 4px 0 var(--c-dark);\n    border-radius: 14px;\n    padding: 14px;\n    text-align: center;\n  }\n  .stat-card .lbl { font-size: 11px; opacity: 0.7; letter-spacing: 2px; }\n  .stat-card .val {\n    font-family: 'Bangers', sans-serif;\n    font-size: 32px;\n    letter-spacing: 3px;\n    color: var(--c-accent);\n  }\n  .stat-card.hot .val { color: var(--c-hot); }\n  .stat-card.cool .val { color: var(--c-cool); }\n  .stat-card.xp .val { color: var(--c-xp); }\n  /* Active upgrades list in summary */\n  .summary-upgrades {\n    display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;\n    max-width: 600px;\n  }\n  .sum-chip {\n    background: rgba(15,10,26,0.8);\n    border: 2px solid var(--c-dark);\n    border-radius: 10px;\n    padding: 6px 10px;\n    display: flex; align-items: center; gap: 6px;\n    font-size: 12px; font-weight: 900;\n  }\n  .sum-chip .dot {\n    width: 22px; height: 22px;\n    border-radius: 6px;\n    display: grid; place-items: center;\n    font-size: 14px;\n    border: 2px solid var(--c-dark);\n  }\n  .fade-in { animation: fadeIn 0.35s ease-out; }\n  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n  .crosshair-hint {\n    position: absolute;\n    bottom: 10px; right: 14px;\n    font-size: 11px; letter-spacing: 1px; opacity: 0.4;\n    pointer-events: none;\n  }\n</style>\n</head>\n<body>\n<div id=\"stage\">\n  <canvas id=\"game\" width=\"1280\" height=\"720\"></canvas>\n\n  <div id=\"hud\">\n    <!-- Top: Floor/Room/Kills/Score -->\n    <div class=\"hud-top\">\n      <div class=\"pill\"><span class=\"label\">FLOOR</span><span class=\"value\" id=\"floorText\">1</span></div>\n      <div class=\"pill\"><span class=\"label\">ROOM</span><span class=\"value\" id=\"roomText\">1/4</span></div>\n      <div class=\"pill\"><span class=\"label\">LVL</span><span class=\"value\" id=\"lvlText\">1</span></div>\n      <div class=\"pill\"><span class=\"label\">LEFT</span><span class=\"value\" id=\"leftText\">0</span></div>\n      <div class=\"pill\"><span class=\"label\">KILLS</span><span class=\"value\" id=\"killText\">0</span></div>\n      <div class=\"pill\"><span class=\"label\">SCORE</span><span class=\"value\" id=\"scoreText\">0</span></div>\n    </div>\n\n    <!-- Bottom: HP / XP / Ammo -->\n    <div class=\"hud-bottom\">\n      <div class=\"stat-row\">\n        <div class=\"pill\">\n          <span class=\"label\">HP</span>\n          <div class=\"bar\"><div class=\"hp-fill\" id=\"hpFill\" style=\"width:100%\"></div></div>\n          <span class=\"value\" id=\"hpText\">100</span>\n        </div>\n        <div class=\"pill\">\n          <span class=\"label\">XP</span>\n          <div class=\"bar\"><div class=\"xp-fill\" id=\"xpFill\" style=\"width:0%\"></div></div>\n          <span class=\"value\" id=\"xpText\">0/15</span>\n        </div>\n        <div class=\"pill\">\n          <span class=\"label\">AMMO</span>\n          <div class=\"bar\"><div class=\"ammo-fill\" id=\"ammoFill\" style=\"width:100%\"></div></div>\n          <span class=\"value\" id=\"ammoText\">12/12</span>\n        </div>\n      </div>\n    </div>\n\n    <!-- Left: active upgrades -->\n    <div class=\"upgrade-stack\" id=\"upgradeStack\"></div>\n\n    <!-- Right: dash -->\n    <div class=\"hud-right\">\n      <div class=\"dash-indicator\" id=\"dashIndicator\">\n        <div class=\"cool-fill\" id=\"dashCool\"></div>\n        <div class=\"key\">DASH<br><span style=\"font-size:11px\">SPACE</span></div>\n      </div>\n    </div>\n\n    <div class=\"banner\" id=\"banner\"></div>\n    <div class=\"damage-flash\" id=\"damageFlash\"></div>\n    <div class=\"xp-flash\" id=\"xpFlash\"></div>\n    <div class=\"crosshair-hint\">WASD · MOUSE AIM · CLICK FIRE · R RELOAD · SPACE DASH · ESC PAUSE</div>\n  </div>\n\n  <!-- MAIN MENU -->\n  <div class=\"overlay\" id=\"menu\">\n    <div class=\"title\">ZOMBIE ROGUE<small>ENDLESS HORDE</small></div>\n    <div style=\"text-align:center; max-width:600px; font-weight:800; opacity:0.85; line-height:1.5;\">\n      Survive 5 floors of undead chaos. Every run is different.<br>\n      Level up — pick your build — push deeper — die trying.\n    </div>\n    <button class=\"btn\" id=\"startBtn\">START RUN</button>\n    <div class=\"controls\">\n      <div class=\"key\">WASD<span class=\"desc\">Move</span></div>\n      <div class=\"key\">Mouse<span class=\"desc\">Aim</span></div>\n      <div class=\"key\">Click<span class=\"desc\">Shoot</span></div>\n      <div class=\"key\">R<span class=\"desc\">Reload</span></div>\n      <div class=\"key\">Space<span class=\"desc\">Dash</span></div>\n      <div class=\"key\">ESC<span class=\"desc\">Pause</span></div>\n    </div>\n  </div>\n\n  <!-- UPGRADE CHOICE -->\n  <div class=\"overlay hidden\" id=\"upgradeChoice\">\n    <div class=\"upgrade-title\">\n      <div class=\"lvl-up\">LEVEL UP!<small id=\"upgradeLvlSub\">CHOOSE YOUR UPGRADE</small></div>\n    </div>\n    <div class=\"upgrade-choices\" id=\"choiceGrid\"></div>\n  </div>\n\n  <!-- RUN SUMMARY / GAME OVER / VICTORY -->\n  <div class=\"overlay hidden\" id=\"runEnd\">\n    <div class=\"subtitle\" id=\"endTitle\">YOU DIED</div>\n    <div class=\"run-summary\">\n      <div class=\"stat-card\"><div class=\"lbl\">FLOOR</div><div class=\"val\" id=\"endFloor\">1</div></div>\n      <div class=\"stat-card hot\"><div class=\"lbl\">KILLS</div><div class=\"val\" id=\"endKills\">0</div></div>\n      <div class=\"stat-card\"><div class=\"lbl\">SCORE</div><div class=\"val\" id=\"endScore\">0</div></div>\n      <div class=\"stat-card cool\"><div class=\"lbl\">LEVEL</div><div class=\"val\" id=\"endLvl\">1</div></div>\n      <div class=\"stat-card xp\"><div class=\"lbl\">TIME</div><div class=\"val\" id=\"endTime\">0s</div></div>\n      <div class=\"stat-card\"><div class=\"lbl\">UPGRADES</div><div class=\"val\" id=\"endUpgrades\">0</div></div>\n    </div>\n    <div class=\"summary-upgrades\" id=\"endUpgradeList\"></div>\n    <div style=\"display:flex; gap:16px;\">\n      <button class=\"btn hot\" id=\"restartBtn\">NEW RUN</button>\n      <button class=\"btn\" id=\"endMenuBtn\">MENU</button>\n    </div>\n  </div>\n\n  <!-- PAUSE -->\n  <div class=\"overlay hidden\" id=\"pause\">\n    <div class=\"subtitle cool\">PAUSED</div>\n    <div style=\"display:flex; gap:16px;\">\n      <button class=\"btn cool\" id=\"resumeBtn\">RESUME</button>\n      <button class=\"btn\" id=\"pauseMenuBtn\">QUIT RUN</button>\n    </div>\n  </div>\n</div>\n\n<script>\n// =============================================================\n// ZOMBIE ROGUE — roguelike top-down shooter\n// =============================================================\n\nconst canvas = document.getElementById('game');\nconst ctx = canvas.getContext('2d');\nconst W = canvas.width, H = canvas.height;\n\n// ------------- UTIL --------------------------------------------\nconst TAU = Math.PI * 2;\nconst lerp = (a,b,t) => a + (b-a)*t;\nconst clamp = (v,lo,hi) => v<lo?lo:v>hi?hi:v;\nconst dist2 = (ax,ay,bx,by) => { const dx=bx-ax,dy=by-ay; return dx*dx+dy*dy; };\nconst rand = (a,b) => a + Math.random()*(b-a);\nconst randi = (a,b) => Math.floor(rand(a,b));\nconst choice = arr => arr[randi(0, arr.length)];\nfunction lighten(hex, pct) {\n  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);\n  const m = v => clamp(Math.floor(v + (255-v)*pct/100), 0, 255);\n  return '#' + [m(r),m(g),m(b)].map(v=>v.toString(16).padStart(2,'0')).join('');\n}\n\n// ------------- AUDIO -------------------------------------------\nlet audioCtx = null;\nfunction initAudio() { if (!audioCtx) { try { audioCtx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e) {} } }\nfunction beep(freq, duration, type='square', vol=0.06, sweep=0) {\n  if (!audioCtx) return;\n  const t = audioCtx.currentTime;\n  const osc = audioCtx.createOscillator();\n  const gain = audioCtx.createGain();\n  osc.type = type;\n  osc.frequency.setValueAtTime(freq, t);\n  if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq+sweep), t+duration);\n  gain.gain.setValueAtTime(vol, t);\n  gain.gain.exponentialRampToValueAtTime(0.0001, t+duration);\n  osc.connect(gain); gain.connect(audioCtx.destination);\n  osc.start(t); osc.stop(t+duration+0.02);\n}\nfunction sfx(name) {\n  if (!audioCtx) return;\n  switch(name) {\n    case 'shoot':   beep(880, 0.05, 'square', 0.04, -500); break;\n    case 'hit':     beep(200, 0.07, 'sawtooth', 0.06, -100); break;\n    case 'reload':  beep(400, 0.05, 'triangle', 0.04); setTimeout(()=>beep(600, 0.05, 'triangle', 0.04), 120); break;\n    case 'die':     beep(150, 0.25, 'sawtooth', 0.08, -80); break;\n    case 'hurt':    beep(120, 0.15, 'square', 0.09, -60); break;\n    case 'pickup':  beep(600, 0.07, 'sine', 0.07); setTimeout(()=>beep(900, 0.08, 'sine', 0.07), 70); break;\n    case 'wave':    beep(300, 0.12, 'sawtooth', 0.07); setTimeout(()=>beep(500, 0.18, 'square', 0.07), 120); break;\n    case 'clear':   [523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,0.1,'triangle',0.08),i*80)); break;\n    case 'levelup': [659,784,988,1319].forEach((f,i)=>setTimeout(()=>beep(f,0.09,'triangle',0.08),i*70)); break;\n    case 'gameover':[400,300,200,100].forEach((f,i)=>setTimeout(()=>beep(f,0.22,'sawtooth',0.09),i*170)); break;\n    case 'dash':    beep(500, 0.09, 'sine', 0.06, 400); break;\n    case 'boom':    beep(80, 0.25, 'sawtooth', 0.1, -40); break;\n    case 'spit':    beep(250, 0.12, 'sawtooth', 0.05, 100); break;\n    case 'boss':    [110,130,150,170,200].forEach((f,i)=>setTimeout(()=>beep(f,0.18,'sawtooth',0.1),i*90)); break;\n  }\n}\n\n// ------------- INPUT -------------------------------------------\nconst keys = Object.create(null);\nconst mouse = { x: W/2, y: H/2, worldX: 0, worldY: 0, down: false };\naddEventListener('keydown', e => {\n  keys[e.key.toLowerCase()] = true;\n  if (e.key.toLowerCase() === 'r') tryReload();\n  if (e.key === ' ') { e.preventDefault(); tryDash(); }\n  if (e.key === 'Escape') togglePause();\n});\naddEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });\ncanvas.addEventListener('mousemove', e => {\n  const r = canvas.getBoundingClientRect();\n  mouse.x = (e.clientX - r.left) * (canvas.width / r.width);\n  mouse.y = (e.clientY - r.top)  * (canvas.height / r.height);\n});\ncanvas.addEventListener('mousedown', () => { mouse.down = true; initAudio(); });\ncanvas.addEventListener('mouseup',   () => { mouse.down = false; });\ncanvas.addEventListener('contextmenu', e => e.preventDefault());\n\n// ------------- WORLD / CAMERA ----------------------------------\nconst world = { w: 1800, h: 1100 };\nconst camera = { x: 0, y: 0, shake: 0 };\nfunction cameraUpdate() {\n  const tx = clamp(game.player.x - W/2, 0, world.w - W);\n  const ty = clamp(game.player.y - H/2, 0, world.h - H);\n  camera.x = lerp(camera.x, tx, 0.12);\n  camera.y = lerp(camera.y, ty, 0.12);\n  mouse.worldX = mouse.x + camera.x;\n  mouse.worldY = mouse.y + camera.y;\n  if (camera.shake > 0.01) camera.shake *= 0.86; else camera.shake = 0;\n}\nfunction shakeCam(amt) { camera.shake = Math.min(24, camera.shake + amt); }\n\n// ------------- FLOOR THEMES ------------------------------------\nconst FLOORS = [\n  { name:'The Outskirts',   bgA:'#8FA876', bgB:'#7B9363', obstacles:['crate','barrel'] },\n  { name:'Downtown Drift',  bgA:'#7A6F88', bgB:'#5E5571', obstacles:['car','crate','barrel'] },\n  { name:'Mall Panic',      bgA:'#A89878', bgB:'#8D7E60', obstacles:['crate','crate','barrel'] },\n  { name:'Industrial Rot',  bgA:'#5F6B70', bgB:'#4A5559', obstacles:['barrel','barrel','crate'] },\n  { name:'Final Stand',     bgA:'#4A3A56', bgB:'#352741', obstacles:['crate','barrel','car'] },\n];\nconst ROOMS_PER_FLOOR = 4; // 3 combat + 1 boss\nconst COMBAT_ROOMS = 3;\n\n// ------------- ENEMY ARCHETYPES --------------------------------\n// Base stats — floor scaling applies a multiplier. Elite doubles HP & 1.5x damage.\nconst ZTYPES = {\n  walker:   { hp: 28,  speed: 62,  damage: 10, radius: 20, color:'#8FCF3F', eye:'#c73866', score: 8,   xp: 4,  touchCd: 600, minFloor: 1 },\n  runner:   { hp: 16,  speed: 135, damage: 6,  radius: 16, color:'#CEDE4E', eye:'#6c2a4e', score: 12,  xp: 6,  touchCd: 450, minFloor: 1 },\n  spitter:  { hp: 22,  speed: 78,  damage: 12, radius: 18, color:'#b5d645', eye:'#ffbd2e', score: 18,  xp: 9,  touchCd: 700, minFloor: 2, range: 380, shootCd: 1800 },\n  exploder: { hp: 18,  speed: 115, damage: 28, radius: 17, color:'#ff7b5c', eye:'#fff0a0', score: 18,  xp: 10, touchCd: 100, minFloor: 3, fuse: 600, boomR: 95 },\n  brute:    { hp: 110, speed: 38,  damage: 22, radius: 32, color:'#5F8C3F', eye:'#ff6b6b', score: 40,  xp: 18, touchCd: 900, minFloor: 2 },\n  boss:     { hp: 420, speed: 46,  damage: 30, radius: 54, color:'#3D5B2A', eye:'#ffbd2e', score: 180, xp: 80, touchCd: 700, minFloor: 1 },\n};\nfunction enemyStats(type, floor, elite) {\n  const base = ZTYPES[type];\n  const hpMul  = Math.pow(1.25, floor - 1) * (elite ? 2.0 : 1.0);\n  const dmgMul = Math.pow(1.15, floor - 1) * (elite ? 1.5 : 1.0);\n  return {\n    hp: Math.round(base.hp * hpMul),\n    damage: Math.round(base.damage * dmgMul),\n    speed: base.speed,\n    radius: base.radius * (elite ? 1.15 : 1.0),\n    score: Math.round(base.score * (elite ? 2.5 : 1.0)),\n    xp: Math.round(base.xp * (elite ? 3 : 1.0)),\n  };\n}\nfunction enemyPool(floor) {\n  const pool = [];\n  // base weights\n  const weights = {\n    walker:   [4, 4, 3, 3, 2],\n    runner:   [2, 3, 3, 3, 3],\n    spitter:  [0, 2, 2, 2, 2],\n    exploder: [0, 0, 2, 2, 2],\n    brute:    [0, 1, 1, 2, 2],\n  };\n  for (const [type, w] of Object.entries(weights)) {\n    const weight = w[Math.min(4, floor-1)] || 0;\n    for (let i = 0; i < weight; i++) pool.push(type);\n  }\n  return pool;\n}\n\n// ------------- UPGRADE CATALOG ---------------------------------\n// Each upgrade: id, name, desc (can be function(level)), icon (emoji or text), color,\n// maxLevel (null=infinite), apply function or direct stat references.\nconst UPGRADES = [\n  { id:'dmg',      name:'Boomstick',     color:'#ff6b6b', icon:'💥',\n    desc:(l)=>`+25% damage per level\\n(now +${25*l}%)`, max:null },\n  { id:'rof',      name:'Hair Trigger',  color:'#ffbd2e', icon:'⚡',\n    desc:(l)=>`+18% fire rate per level\\n(now +${18*l}%)`, max:5 },\n  { id:'speed',    name:'Sneakers',      color:'#4ecdc4', icon:'👟',\n    desc:(l)=>`+12% move speed per level\\n(now +${12*l}%)`, max:5 },\n  { id:'hp',       name:'Tough Skin',    color:'#ff6b6b', icon:'❤️',\n    desc:(l)=>`+20 max HP per level\\n(heals 20 on pickup)`, max:null },\n  { id:'reload',   name:'Quick Hands',   color:'#ffbd2e', icon:'⏱️',\n    desc:(l)=>`-28% reload time per level\\n(now -${Math.round((1-Math.pow(0.72,l))*100)}%)`, max:3 },\n  { id:'ammo',     name:'Extra Clip',    color:'#a36841', icon:'📦',\n    desc:(l)=>`+6 max ammo per level\\n(refills on pickup)`, max:5 },\n  { id:'double',   name:'Double Tap',    color:'#ffbd2e', icon:'🔫',\n    desc:()=>`Fire TWO bullets per shot\\n(slight spread)`, max:1 },\n  { id:'crit',     name:'Sharpshooter',  color:'#ff6b6b', icon:'🎯',\n    desc:(l)=>`+12% crit chance per level\\n(crits deal 2.5× damage)`, max:4 },\n  { id:'pierce',   name:'Piercing Rounds', color:'#7b68ee', icon:'🔩',\n    desc:(l)=>`Bullets pierce ${l} extra enemy\\nper level`, max:3 },\n  { id:'explode',  name:'Explosive Rounds', color:'#ff6b6b', icon:'💣',\n    desc:()=>`Bullets explode on hit\\n(60% dmg in small radius)`, max:1 },\n  { id:'vamp',     name:'Vampire',       color:'#c73866', icon:'🩸',\n    desc:(l)=>`Heal ${2*l} HP per kill`, max:null },\n  { id:'regen',    name:'Regeneration',  color:'#8fcf3f', icon:'✚',\n    desc:(l)=>`Regen ${l} HP/sec while combat\\nactive`, max:3 },\n  { id:'thorns',   name:'Thorns',        color:'#c881ff', icon:'🌵',\n    desc:(l)=>`Touching enemies take\\n${10*l} damage`, max:3 },\n  { id:'eagle',    name:'Eagle Eye',     color:'#4ecdc4', icon:'🦅',\n    desc:(l)=>`+30% bullet speed & range\\nper level`, max:3 },\n  { id:'scholar',  name:'Scholar',       color:'#7b68ee', icon:'📘',\n    desc:(l)=>`+15% XP gain per level`, max:3 },\n];\nconst UPG_BY_ID = Object.fromEntries(UPGRADES.map(u => [u.id, u]));\n\n// ------------- GAME STATE --------------------------------------\nconst game = {\n  state: 'menu',\n  floor: 1,\n  roomIdx: 0,         // 0..3\n  isBossRoom: false,\n  obstacles: [],\n  player: null,\n  zombies: [],\n  bullets: [],\n  ezBullets: [],      // enemy projectiles\n  explosions: [],\n  particles: [],\n  damageNums: [],\n  powerups: [],\n  spawnQueue: [],\n  spawnTimer: 0,\n  kills: 0,\n  score: 0,\n  upgrades: {},\n  pendingLevelUps: 0,\n  runStartT: 0,\n  runTime: 0,\n  roomState: 'active',   // active, cleared, transitioning\n  transitionT: 0,\n};\n\n// ------------- COLLISION HELPERS -------------------------------\nfunction collidesObstacle(x, y, r) {\n  for (const o of game.obstacles) {\n    const cx = clamp(x, o.x, o.x + o.w);\n    const cy = clamp(y, o.y, o.y + o.h);\n    const dx = x - cx, dy = y - cy;\n    if (dx*dx + dy*dy < r*r) return true;\n  }\n  return false;\n}\nfunction drawShadow(x, y, r) {\n  ctx.fillStyle = 'rgba(15, 10, 26, 0.35)';\n  ctx.beginPath(); ctx.ellipse(x, y + r*0.85, r*0.95, r*0.35, 0, 0, TAU); ctx.fill();\n}\nfunction drawHPBar(x, y, w, h, frac, color='#c73866') {\n  ctx.fillStyle = '#0f0a1a';\n  ctx.fillRect(x - 1, y - 1, w + 2, h + 2);\n  ctx.fillStyle = '#2a0e1c';\n  ctx.fillRect(x, y, w, h);\n  ctx.fillStyle = color;\n  ctx.fillRect(x, y, w * clamp(frac, 0, 1), h);\n}\n\n// ------------- PLAYER ------------------------------------------\nclass Player {\n  constructor() {\n    this.x = world.w/2;\n    this.y = world.h/2;\n    this.r = 18;\n    this.angle = 0;\n    // base stats\n    this._baseSpeed = 215;\n    this._baseMaxHp = 100;\n    this._baseMaxAmmo = 12;\n    this._baseFireRate = 0.14;\n    this._baseDamage = 14;\n    this._baseReload = 1.0;\n    this._baseBulletSpeed = 900;\n    this._baseBulletLife = 0.7;\n\n    this.hp = this.maxHp;\n    this.ammo = this.maxAmmo;\n    this.reloading = false;\n    this.reloadT = 0;\n    this.fireCd = 0;\n    this.walkPhase = 0;\n    this.iFrames = 0;\n    this.flashT = 0;\n    // dash\n    this.dashCd = 0;\n    this.dashT = 0;       // remaining dash duration\n    this.dashDx = 0;\n    this.dashDy = 0;\n    this.dashDuration = 0.22;\n    this.dashCdMax = 1.4;\n    this.dashSpeed = 620;\n    // level\n    this.level = 1;\n    this.xp = 0;\n    this.xpNeeded = 15;\n    // regen\n    this.regenAcc = 0;\n  }\n  u(id) { return game.upgrades[id] || 0; }\n\n  get speed()        { return this._baseSpeed * (1 + 0.12 * this.u('speed')); }\n  get maxHp()        { return this._baseMaxHp + 20 * this.u('hp'); }\n  get maxAmmo()      { return this._baseMaxAmmo + 6 * this.u('ammo'); }\n  get fireRate()     { return this._baseFireRate / (1 + 0.18 * this.u('rof')); }\n  get damage()       { return this._baseDamage * (1 + 0.25 * this.u('dmg')); }\n  get reloadTime()   { return this._baseReload * Math.pow(0.72, this.u('reload')); }\n  get bulletSpeed()  { return this._baseBulletSpeed * (1 + 0.30 * this.u('eagle')); }\n  get bulletLife()   { return this._baseBulletLife * (1 + 0.30 * this.u('eagle')); }\n  get critChance()   { return 0.12 * this.u('crit'); }\n  get pierce()       { return this.u('pierce'); }\n  get explosive()    { return this.u('explode') > 0; }\n  get doubleTap()    { return this.u('double') > 0; }\n  get xpMul()        { return 1 + 0.15 * this.u('scholar'); }\n  get vampHeal()     { return 2 * this.u('vamp'); }\n  get regenRate()    { return this.u('regen'); }\n  get thornsDmg()    { return 10 * this.u('thorns'); }\n\n  update(dt) {\n    // Regen\n    if (this.regenRate > 0 && this.hp < this.maxHp) {\n      this.regenAcc += dt * this.regenRate;\n      while (this.regenAcc >= 1) {\n        this.hp = Math.min(this.maxHp, this.hp + 1);\n        this.regenAcc -= 1;\n      }\n    }\n\n    // Dash\n    this.dashCd = Math.max(0, this.dashCd - dt);\n    if (this.dashT > 0) {\n      this.dashT -= dt;\n      const nx = this.x + this.dashDx * this.dashSpeed * dt;\n      const ny = this.y + this.dashDy * this.dashSpeed * dt;\n      if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\n      if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\n      this.x = clamp(this.x, this.r, world.w - this.r);\n      this.y = clamp(this.y, this.r, world.h - this.r);\n      // dash trail\n      if (Math.random() < 0.7) {\n        game.particles.push(new Particle(this.x, this.y, {\n          vx: rand(-30,30), vy: rand(-30,30),\n          life: 0.25, r: rand(4,8), color:'#4ecdc4', fade:true\n        }));\n      }\n    } else {\n      let mx=0, my=0;\n      if (keys['w']||keys['arrowup']) my -= 1;\n      if (keys['s']||keys['arrowdown']) my += 1;\n      if (keys['a']||keys['arrowleft']) mx -= 1;\n      if (keys['d']||keys['arrowright']) mx += 1;\n      const mag = Math.hypot(mx, my);\n      if (mag > 0) {\n        mx /= mag; my /= mag;\n        const nx = this.x + mx * this.speed * dt;\n        const ny = this.y + my * this.speed * dt;\n        if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\n        if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\n        this.x = clamp(this.x, this.r, world.w - this.r);\n        this.y = clamp(this.y, this.r, world.h - this.r);\n        this.walkPhase += dt * 14;\n      } else {\n        this.walkPhase *= 0.92;\n      }\n    }\n\n    this.angle = Math.atan2(mouse.worldY - this.y, mouse.worldX - this.x);\n\n    this.fireCd = Math.max(0, this.fireCd - dt);\n    if (mouse.down && !this.reloading && this.ammo > 0 && this.fireCd <= 0) this.shoot();\n    if (this.ammo <= 0 && !this.reloading) this.startReload();\n\n    if (this.reloading) {\n      this.reloadT -= dt;\n      if (this.reloadT <= 0) {\n        this.reloading = false;\n        this.ammo = this.maxAmmo;\n      }\n    }\n    this.iFrames = Math.max(0, this.iFrames - dt);\n    this.flashT = Math.max(0, this.flashT - dt);\n  }\n  dash() {\n    if (this.dashCd > 0 || this.dashT > 0) return;\n    // direction from keys, fallback to facing\n    let mx=0, my=0;\n    if (keys['w']||keys['arrowup']) my -= 1;\n    if (keys['s']||keys['arrowdown']) my += 1;\n    if (keys['a']||keys['arrowleft']) mx -= 1;\n    if (keys['d']||keys['arrowright']) mx += 1;\n    const mag = Math.hypot(mx, my);\n    if (mag > 0) { mx /= mag; my /= mag; }\n    else { mx = Math.cos(this.angle); my = Math.sin(this.angle); }\n    this.dashDx = mx; this.dashDy = my;\n    this.dashT = this.dashDuration;\n    this.dashCd = this.dashCdMax;\n    this.iFrames = Math.max(this.iFrames, this.dashDuration + 0.05);\n    sfx('dash');\n    for (let i = 0; i < 12; i++) {\n      game.particles.push(new Particle(this.x, this.y, {\n        vx: rand(-60,60), vy: rand(-60,60),\n        life: 0.3, r: rand(3,6), color:'#4ecdc4', fade:true\n      }));\n    }\n  }\n  shoot() {\n    this.fireCd = this.fireRate;\n    this.ammo--;\n    const muzX = this.x + Math.cos(this.angle) * 28;\n    const muzY = this.y + Math.sin(this.angle) * 28;\n\n    const shots = this.doubleTap ? 2 : 1;\n    for (let i = 0; i < shots; i++) {\n      const spread = (Math.random()-0.5) * (this.doubleTap ? 0.14 : 0.06);\n      const a = this.angle + spread;\n      const isCrit = Math.random() < this.critChance;\n      const dmg = this.damage * (isCrit ? 2.5 : 1.0);\n      game.bullets.push(new Bullet(muzX, muzY, a, this.bulletSpeed, dmg, {\n        pierce: this.pierce, explosive: this.explosive,\n        life: this.bulletLife, crit: isCrit,\n      }));\n    }\n    for (let i = 0; i < 5; i++) {\n      game.particles.push(new Particle(muzX, muzY, {\n        vx: Math.cos(this.angle)*rand(120,260) + rand(-40,40),\n        vy: Math.sin(this.angle)*rand(120,260) + rand(-40,40),\n        life: 0.1, r: rand(3,6),\n        color: Math.random()<0.5 ? '#ffbd2e' : '#fff6c9', fade:true,\n      }));\n    }\n    shakeCam(1.5);\n    sfx('shoot');\n  }\n  startReload() {\n    if (this.reloading || this.ammo === this.maxAmmo) return;\n    this.reloading = true;\n    this.reloadT = this.reloadTime;\n    sfx('reload');\n  }\n  hurt(dmg, sourceX, sourceY) {\n    if (this.iFrames > 0) return;\n    this.hp = Math.max(0, this.hp - dmg);\n    this.iFrames = 0.55;\n    this.flashT = 0.25;\n    shakeCam(8);\n    flashDamage();\n    sfx('hurt');\n    if (this.hp <= 0) {\n      game.state = 'dead';\n      sfx('gameover');\n      showRunEnd(false);\n    }\n  }\n  gainXP(amt) {\n    this.xp += amt * this.xpMul;\n    let leveled = false;\n    while (this.xp >= this.xpNeeded) {\n      this.xp -= this.xpNeeded;\n      this.level++;\n      this.xpNeeded = Math.floor(15 * Math.pow(1.45, this.level - 1));\n      game.pendingLevelUps++;\n      leveled = true;\n    }\n    if (leveled) {\n      sfx('levelup');\n      flashXP();\n    }\n  }\n  draw() {\n    const x = this.x, y = this.y;\n    drawShadow(x, y, this.r);\n    const legBob = Math.sin(this.walkPhase) * 3;\n    const bodyFlash = this.flashT > 0 && (Math.floor(this.flashT*30)%2===0);\n    const dashing = this.dashT > 0;\n\n    ctx.save();\n    ctx.translate(x, y);\n    // Legs\n    ctx.fillStyle = '#2a2f4a';\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.fill();\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.fill();\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.stroke();\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.stroke();\n\n    ctx.rotate(this.angle);\n    // Gun\n    ctx.fillStyle = '#2a2f4a';\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.rect(10, -4, 24, 8); ctx.fill(); ctx.stroke();\n    ctx.beginPath(); ctx.rect(14, -7, 4, 3); ctx.fill(); ctx.stroke();\n    // Body\n    ctx.fillStyle = bodyFlash ? '#ffffff' : (dashing ? '#7dd3d0' : '#4ecdc4');\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2.5;\n    ctx.beginPath(); ctx.moveTo(-12, -8); ctx.lineTo(12, 8); ctx.stroke();\n    // Head\n    ctx.fillStyle = bodyFlash ? '#fff' : '#ffd2a4';\n    ctx.beginPath(); ctx.arc(4, 0, 11, 0, TAU); ctx.fill();\n    ctx.lineWidth = 3; ctx.stroke();\n    ctx.fillStyle = '#0f0a1a';\n    ctx.beginPath(); ctx.arc(10, -1, 2, 0, TAU); ctx.fill();\n    ctx.fillStyle = '#3b2a1d';\n    ctx.beginPath(); ctx.arc(0, -7, 5, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.restore();\n\n    // Player HP bar (over head)\n    const bw = 44, bh = 6;\n    drawHPBar(x - bw/2, y - this.r - 16, bw, bh, this.hp / this.maxHp, '#8fcf3f');\n  }\n}\n\n// ------------- ZOMBIE ------------------------------------------\nclass Zombie {\n  constructor(x, y, type, elite=false) {\n    const stats = enemyStats(type, game.floor, elite);\n    this.x = x; this.y = y;\n    this.type = type;\n    this.elite = elite;\n    const base = ZTYPES[type];\n    this.r = stats.radius;\n    this.hp = stats.hp;\n    this.maxHp = stats.hp;\n    this.speed = stats.speed;\n    this.damage = stats.damage;\n    this.score = stats.score;\n    this.xp = stats.xp;\n    this.color = base.color;\n    this.eye = base.eye;\n    this.touchCdMax = base.touchCd;\n    this.touchCd = 0;\n    this.walkPhase = Math.random() * TAU;\n    this.hitFlash = 0;\n    this.angle = 0;\n    this.wobble = rand(0, TAU);\n    // spitter\n    this.shootCd = type === 'spitter' ? rand(800, 1600) : 0;\n    // exploder\n    this.fusing = false;\n    this.fuseT = 0;\n    // boss\n    this.chargeCd = type === 'boss' ? 2500 : 0;\n    this.charging = false;\n    this.chargeT = 0;\n    this.chargeDx = 0;\n    this.chargeDy = 0;\n    this.summonCd = (type === 'boss' && game.floor >= 2) ? 5000 : 0;\n  }\n  update(dt, player) {\n    this.hitFlash = Math.max(0, this.hitFlash - dt);\n    this.touchCd = Math.max(0, this.touchCd - dt*1000);\n    this.wobble += dt * 3;\n\n    const dx = player.x - this.x;\n    const dy = player.y - this.y;\n    const d = Math.hypot(dx, dy) || 0.001;\n    this.angle = Math.atan2(dy, dx);\n\n    // Behavior by type\n    if (this.type === 'spitter') {\n      // keep distance ~280, shoot periodically\n      const base = ZTYPES.spitter;\n      this.shootCd -= dt * 1000;\n      const desiredD = 280;\n      let mx = 0, my = 0;\n      if (d > desiredD + 40) { mx = dx/d; my = dy/d; }\n      else if (d < desiredD - 40) { mx = -dx/d; my = -dy/d; }\n      else {\n        // strafe\n        mx = -dy/d; my = dx/d;\n        if ((Math.floor(this.wobble) % 2) === 0) { mx = -mx; my = -my; }\n      }\n      this.move(mx, my, this.speed, dt);\n      if (this.shootCd <= 0 && d < base.range) {\n        this.shootCd = base.shootCd;\n        // telegraph + shoot\n        const proj = new ZombieProjectile(this.x, this.y, Math.atan2(dy, dx), 340, this.damage);\n        game.ezBullets.push(proj);\n        sfx('spit');\n        // muzzle slime\n        for (let i = 0; i < 6; i++) {\n          const a = this.angle + rand(-0.3, 0.3);\n          game.particles.push(new Particle(this.x, this.y, {\n            vx: Math.cos(a)*rand(60,140), vy: Math.sin(a)*rand(60,140),\n            life: 0.3, r: rand(3,5), color: '#8fcf3f', fade:true\n          }));\n        }\n      }\n    } else if (this.type === 'exploder') {\n      // sprint toward player; start fuse when close\n      const base = ZTYPES.exploder;\n      if (!this.fusing && d < 80) {\n        this.fusing = true;\n        this.fuseT = base.fuse;\n      }\n      if (this.fusing) {\n        this.fuseT -= dt * 1000;\n        // still moves, slightly slower\n        this.move(dx/d, dy/d, this.speed*0.6, dt);\n        if (this.fuseT <= 0) {\n          this.explode();\n          return;\n        }\n      } else {\n        this.move(dx/d, dy/d, this.speed, dt);\n      }\n    } else if (this.type === 'boss') {\n      // charges periodically, otherwise walks toward player\n      this.chargeCd -= dt * 1000;\n      if (this.charging) {\n        this.chargeT -= dt;\n        this.move(this.chargeDx, this.chargeDy, 360, dt);\n        if (this.chargeT <= 0) this.charging = false;\n      } else {\n        this.move(dx/d, dy/d, this.speed, dt);\n        if (this.chargeCd <= 0 && d < 500 && d > 120) {\n          this.charging = true;\n          this.chargeT = 0.7;\n          this.chargeDx = dx/d; this.chargeDy = dy/d;\n          this.chargeCd = 3500;\n          // telegraph burst\n          for (let i = 0; i < 20; i++) {\n            const a = Math.random()*TAU;\n            game.particles.push(new Particle(this.x, this.y, {\n              vx: Math.cos(a)*rand(80,160), vy: Math.sin(a)*rand(80,160),\n              life: 0.4, r: rand(4,7), color:'#ffbd2e', fade:true\n            }));\n          }\n        }\n      }\n      // summon on higher floors\n      if (this.summonCd > 0) {\n        this.summonCd -= dt * 1000;\n        if (this.summonCd <= 0) {\n          this.summonCd = 6000;\n          const n = Math.min(3, game.floor - 1);\n          for (let i = 0; i < n; i++) {\n            const a = Math.random()*TAU;\n            const sx = this.x + Math.cos(a)*60;\n            const sy = this.y + Math.sin(a)*60;\n            game.zombies.push(new Zombie(sx, sy, 'runner', false));\n            for (let j = 0; j < 8; j++) {\n              const aa = Math.random()*TAU;\n              game.particles.push(new Particle(sx, sy, {\n                vx:Math.cos(aa)*rand(40,100), vy:Math.sin(aa)*rand(40,100),\n                life:0.4, r:rand(3,5), color:'#c73866', fade:true\n              }));\n            }\n          }\n        }\n      }\n    } else {\n      // walker / runner / brute: chase\n      let spd = this.speed;\n      if (this.type === 'walker') spd *= 0.9 + 0.2*Math.sin(this.wobble);\n      this.move(dx/d, dy/d, spd, dt);\n    }\n\n    // walk phase\n    const phaseMul = this.type==='runner' ? 16 : this.type==='brute' ? 6 : this.type==='boss' ? 5 : 10;\n    this.walkPhase += dt * phaseMul;\n\n    // Separate from other zombies\n    for (const other of game.zombies) {\n      if (other === this) continue;\n      const ox = other.x - this.x, oy = other.y - this.y;\n      const od = Math.hypot(ox, oy);\n      const minD = this.r + other.r;\n      if (od > 0 && od < minD) {\n        const push = (minD - od) * 0.5;\n        this.x -= (ox/od) * push;\n        this.y -= (oy/od) * push;\n      }\n    }\n\n    // Contact damage\n    if (d < this.r + player.r && this.touchCd <= 0 && this.type !== 'exploder') {\n      player.hurt(this.damage, this.x, this.y);\n      this.touchCd = this.touchCdMax;\n      // thorns\n      if (player.thornsDmg > 0) {\n        this.hurt(player.thornsDmg, this.x, this.y, false);\n      }\n      if (this.type === 'brute' || this.type === 'boss') {\n        // knockback\n        player.x += (dx/d) * -30;\n        player.y += (dy/d) * -30;\n      }\n    }\n  }\n  move(vx, vy, spd, dt) {\n    const nx = this.x + vx * spd * dt;\n    const ny = this.y + vy * spd * dt;\n    if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\n    if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\n    this.x = clamp(this.x, this.r, world.w - this.r);\n    this.y = clamp(this.y, this.r, world.h - this.r);\n  }\n  hurt(dmg, bx, by, showNumber=true) {\n    const wasAlive = this.hp > 0;\n    this.hp -= dmg;\n    this.hitFlash = 0.12;\n    for (let i = 0; i < 6; i++) {\n      const a = Math.random()*TAU;\n      const s = rand(100, 280);\n      game.particles.push(new Particle(bx, by, {\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\n        life: rand(0.2, 0.5), r: rand(3,6),\n        color: this.type==='boss' ? '#ffbd2e' : '#8fcf3f', fade:true, gravity: 200,\n      }));\n    }\n    if (showNumber) {\n      game.damageNums.push({\n        x: bx, y: by - this.r,\n        life: 0.8, text: Math.ceil(dmg),\n        vy: -60, color: dmg > 40 ? '#ff6b6b' : '#ffbd2e',\n      });\n    }\n    sfx('hit');\n    if (this.hp <= 0 && wasAlive) {\n      this.die();\n      return true;\n    }\n    return false;\n  }\n  die() {\n    // Splat\n    for (let i = 0; i < 18; i++) {\n      const a = Math.random()*TAU;\n      const s = rand(60, 280);\n      game.particles.push(new Particle(this.x, this.y, {\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\n        life: rand(0.4, 0.9), r: rand(4,8),\n        color: this.type==='boss' ? '#ffbd2e' : '#8fcf3f', fade: true, gravity: 300,\n      }));\n    }\n    // Elite drops\n    const dropRoll = Math.random();\n    const eliteBonus = this.elite ? 0.15 : 0;\n    if (dropRoll < 0.08 + eliteBonus) {\n      game.powerups.push(new Powerup(this.x, this.y, 'health'));\n    } else if (dropRoll < 0.14 + eliteBonus) {\n      game.powerups.push(new Powerup(this.x, this.y, 'ammo'));\n    }\n    game.kills++;\n    game.score += this.score;\n    // vampire heal\n    if (game.player.vampHeal > 0) {\n      game.player.hp = Math.min(game.player.maxHp, game.player.hp + game.player.vampHeal);\n    }\n    game.player.gainXP(this.xp);\n    shakeCam(this.type==='boss' ? 14 : this.type==='brute' ? 6 : 3);\n    sfx('die');\n  }\n  explode() {\n    // Trigger explosion, destroy self\n    this.hp = 0;\n    const base = ZTYPES.exploder;\n    const eStats = enemyStats('exploder', game.floor, this.elite);\n    game.explosions.push(new Explosion(this.x, this.y, base.boomR*(this.elite?1.2:1), eStats.damage, false));\n    // just vanish into smoke, no splat particles\n    for (let i = 0; i < 20; i++) {\n      const a = Math.random()*TAU;\n      const s = rand(80, 260);\n      game.particles.push(new Particle(this.x, this.y, {\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\n        life: rand(0.3, 0.7), r: rand(5,10),\n        color: choice(['#ff7b5c','#ffbd2e','#c73866']), fade:true,\n      }));\n    }\n    game.kills++;\n    game.score += this.score;\n    game.player.gainXP(this.xp);\n    sfx('boom');\n  }\n  draw() {\n    const x = this.x, y = this.y;\n    drawShadow(x, y, this.r);\n\n    // Elite aura\n    if (this.elite) {\n      const pulse = 0.5 + 0.3*Math.sin(performance.now()/200);\n      ctx.fillStyle = `rgba(200,129,255,${0.15*pulse})`;\n      ctx.beginPath(); ctx.arc(x, y, this.r*1.8, 0, TAU); ctx.fill();\n      ctx.strokeStyle = `rgba(200,129,255,${0.5*pulse})`;\n      ctx.lineWidth = 2;\n      ctx.beginPath(); ctx.arc(x, y, this.r*1.4, 0, TAU); ctx.stroke();\n    }\n\n    // Exploder fuse flash\n    const fuseFlash = this.type==='exploder' && this.fusing &&\n                     (Math.floor(performance.now()/80) % 2 === 0);\n\n    ctx.save();\n    ctx.translate(x, y);\n\n    const flash = this.hitFlash > 0 || fuseFlash;\n    const bodyColor = flash ? '#ffffff' : this.color;\n\n    // Legs\n    const bob = Math.sin(this.walkPhase) * 3;\n    ctx.fillStyle = '#1e3816';\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.ellipse(-this.r*0.4, this.r*0.7+bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.beginPath(); ctx.ellipse( this.r*0.4, this.r*0.7-bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\n\n    ctx.rotate(this.angle);\n    // Body\n    ctx.fillStyle = bodyColor;\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();\n\n    // Shirt stripes\n    ctx.strokeStyle = flash ? '#c8c8c8' : '#3a5a1f';\n    ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.moveTo(-this.r*0.7, -this.r*0.2); ctx.lineTo(this.r*0.3, this.r*0.5); ctx.stroke();\n    ctx.beginPath(); ctx.moveTo(-this.r*0.5, this.r*0.3); ctx.lineTo(this.r*0.1, -this.r*0.4); ctx.stroke();\n\n    // Head\n    const hr = this.r * 0.68;\n    ctx.fillStyle = flash ? '#ffffff' : lighten(this.color, 12);\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.arc(this.r*0.35, 0, hr, 0, TAU); ctx.fill(); ctx.stroke();\n\n    // Mouth / teeth\n    ctx.fillStyle = '#1a0a0a';\n    ctx.beginPath(); ctx.ellipse(this.r*0.7, hr*0.15, hr*0.35, hr*0.2, 0, 0, TAU); ctx.fill();\n    ctx.fillStyle = '#ffffff';\n    for (let i = 0; i < 3; i++) {\n      ctx.beginPath();\n      ctx.rect(this.r*0.55 + i*5, hr*0.15 - 3, 3, 6);\n      ctx.fill();\n    }\n\n    // Eye\n    ctx.fillStyle = this.eye;\n    ctx.beginPath(); ctx.arc(this.r*0.55, -hr*0.25, hr*0.22, 0, TAU); ctx.fill();\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2; ctx.stroke();\n    ctx.fillStyle = '#ffffff';\n    ctx.beginPath(); ctx.arc(this.r*0.58, -hr*0.30, hr*0.08, 0, TAU); ctx.fill();\n\n    // Boss horns\n    if (this.type === 'boss') {\n      ctx.fillStyle = '#f5e8c8';\n      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n      ctx.beginPath(); ctx.moveTo(this.r*0.2, -hr*0.8); ctx.lineTo(this.r*0.4, -hr*1.4); ctx.lineTo(this.r*0.55, -hr*0.75); ctx.closePath(); ctx.fill(); ctx.stroke();\n      ctx.beginPath(); ctx.moveTo(this.r*0.55, -hr*0.75); ctx.lineTo(this.r*0.85, -hr*1.2); ctx.lineTo(this.r*0.80, -hr*0.55); ctx.closePath(); ctx.fill(); ctx.stroke();\n    }\n\n    // Spitter extra: jaw pouch\n    if (this.type === 'spitter') {\n      ctx.fillStyle = '#ffbd2e';\n      ctx.beginPath(); ctx.arc(this.r*0.75, hr*0.35, 5, 0, TAU); ctx.fill();\n      ctx.strokeStyle='#0f0a1a'; ctx.lineWidth=2; ctx.stroke();\n    }\n    // Exploder: glowing fuse\n    if (this.type === 'exploder') {\n      ctx.fillStyle = this.fusing ? '#ffffff' : '#ffbd2e';\n      ctx.beginPath(); ctx.arc(0, -this.r*0.7, 4, 0, TAU); ctx.fill();\n      if (this.fusing) {\n        ctx.strokeStyle = '#ff6b6b';\n        ctx.lineWidth = 3;\n        ctx.beginPath(); ctx.arc(0, -this.r*0.7, 8, 0, TAU); ctx.stroke();\n      }\n    }\n\n    ctx.restore();\n\n    // HP bar for ALL zombies\n    const bw = this.r * 2, bh = this.type==='boss' ? 8 : 4;\n    const bx = x - bw/2;\n    const by = y - this.r - (this.type==='boss' ? 14 : 10);\n    if (this.type === 'boss') {\n      drawHPBar(bx, by, bw, bh, this.hp / this.maxHp, '#c73866');\n      // Boss name\n      ctx.font = 'bold 14px Bangers, sans-serif';\n      ctx.textAlign = 'center';\n      ctx.lineWidth = 4; ctx.strokeStyle = '#0f0a1a';\n      const name = this.elite ? 'ELITE BOSS' : 'BOSS';\n      ctx.strokeText(name, x, by - 4);\n      ctx.fillStyle = this.elite ? '#c881ff' : '#ffbd2e';\n      ctx.fillText(name, x, by - 4);\n    } else if (this.hp < this.maxHp || this.elite || this.type === 'brute') {\n      drawHPBar(bx, by, bw, bh, this.hp / this.maxHp, this.elite ? '#c881ff' : '#c73866');\n    }\n  }\n}\n\n// ------------- BULLET ------------------------------------------\nclass Bullet {\n  constructor(x, y, angle, speed, damage, opts={}) {\n    this.x = x; this.y = y;\n    this.vx = Math.cos(angle)*speed;\n    this.vy = Math.sin(angle)*speed;\n    this.angle = angle;\n    this.life = opts.life || 0.7;\n    this.damage = damage;\n    this.dead = false;\n    this.trail = [];\n    this.pierce = opts.pierce || 0;\n    this.piercedSet = new Set();\n    this.explosive = !!opts.explosive;\n    this.crit = !!opts.crit;\n  }\n  update(dt) {\n    this.trail.push({x:this.x,y:this.y,a:1});\n    if (this.trail.length > 6) this.trail.shift();\n    this.x += this.vx*dt; this.y += this.vy*dt;\n    this.life -= dt;\n    if (this.life <= 0) { this.dead = true; return; }\n    if (this.x<0||this.y<0||this.x>world.w||this.y>world.h) { this.dead = true; return; }\n    if (collidesObstacle(this.x, this.y, 2)) {\n      this.dead = true;\n      if (this.explosive) game.explosions.push(new Explosion(this.x, this.y, 70, this.damage*0.6, true));\n      for (let i=0;i<6;i++) {\n        const a=Math.random()*TAU, s=rand(80,200);\n        game.particles.push(new Particle(this.x, this.y, {\n          vx:Math.cos(a)*s, vy:Math.sin(a)*s,\n          life:0.2, r:rand(2,4), color:'#ffbd2e', fade:true,\n        }));\n      }\n      return;\n    }\n    for (const z of game.zombies) {\n      if (this.piercedSet.has(z)) continue;\n      if (dist2(this.x, this.y, z.x, z.y) < z.r*z.r) {\n        z.hurt(this.damage, this.x, this.y);\n        this.piercedSet.add(z);\n        if (this.explosive) game.explosions.push(new Explosion(this.x, this.y, 70, this.damage*0.6, true));\n        if (this.pierce <= 0) {\n          this.dead = true;\n          return;\n        } else {\n          this.pierce--;\n        }\n      }\n    }\n  }\n  draw() {\n    for (let i=0; i<this.trail.length; i++) {\n      const t=this.trail[i], a=(i+1)/this.trail.length;\n      ctx.globalAlpha = a*0.6;\n      ctx.fillStyle = this.crit ? '#ff6b6b' : '#ffbd2e';\n      ctx.beginPath(); ctx.arc(t.x, t.y, 3*a, 0, TAU); ctx.fill();\n    }\n    ctx.globalAlpha = 1;\n    ctx.save();\n    ctx.translate(this.x, this.y); ctx.rotate(this.angle);\n    ctx.fillStyle = this.crit ? '#ffdede' : '#fff6c9';\n    ctx.strokeStyle = this.crit ? '#c73866' : '#e08e00';\n    ctx.lineWidth = 2;\n    ctx.beginPath(); ctx.ellipse(0, 0, this.crit?9:7, this.crit?4:3, 0, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.restore();\n  }\n}\n\n// ------------- ENEMY PROJECTILE --------------------------------\nclass ZombieProjectile {\n  constructor(x, y, angle, speed, damage) {\n    this.x = x; this.y = y;\n    this.vx = Math.cos(angle)*speed;\n    this.vy = Math.sin(angle)*speed;\n    this.life = 2.2;\n    this.damage = damage;\n    this.dead = false;\n    this.phase = 0;\n  }\n  update(dt, player) {\n    this.phase += dt * 12;\n    this.x += this.vx*dt; this.y += this.vy*dt;\n    this.life -= dt;\n    if (this.life <= 0) { this.dead = true; return; }\n    if (this.x<0||this.y<0||this.x>world.w||this.y>world.h) { this.dead = true; return; }\n    if (collidesObstacle(this.x, this.y, 4)) { this.dead = true; return; }\n    if (dist2(this.x, this.y, player.x, player.y) < (player.r+8)**2) {\n      player.hurt(this.damage);\n      this.dead = true;\n      // splat\n      for (let i=0;i<10;i++) {\n        const a=Math.random()*TAU, s=rand(40,140);\n        game.particles.push(new Particle(this.x, this.y, {\n          vx:Math.cos(a)*s, vy:Math.sin(a)*s,\n          life:0.4, r:rand(3,5), color:'#8fcf3f', fade:true,\n        }));\n      }\n    }\n  }\n  draw() {\n    const wobble = Math.sin(this.phase) * 2;\n    ctx.save();\n    ctx.translate(this.x, this.y);\n    // slime ball\n    ctx.fillStyle = '#8fcf3f';\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.arc(0, 0, 10 + wobble, 0, TAU); ctx.fill(); ctx.stroke();\n    ctx.fillStyle = '#cedc4e';\n    ctx.beginPath(); ctx.arc(-2, -3, 3, 0, TAU); ctx.fill();\n    // drip trail (particles behind)\n    if (Math.random() < 0.4) {\n      game.particles.push(new Particle(this.x, this.y, {\n        vx: rand(-20,20), vy: rand(-20,20),\n        life: 0.4, r: rand(2,4), color:'#8fcf3f', fade:true, gravity: 80,\n      }));\n    }\n    ctx.restore();\n  }\n}\n\n// ------------- EXPLOSION ---------------------------------------\nclass Explosion {\n  constructor(x, y, radius, damage, fromPlayer) {\n    this.x = x; this.y = y;\n    this.radius = radius;\n    this.damage = damage;\n    this.fromPlayer = fromPlayer;\n    this.t = 0;\n    this.life = 0.4;\n    this.dead = false;\n    this.hitSet = new Set();\n    // visual burst\n    for (let i = 0; i < 24; i++) {\n      const a = Math.random()*TAU, s = rand(80, 360);\n      game.particles.push(new Particle(x, y, {\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\n        life: rand(0.3, 0.7), r: rand(5, 10),\n        color: choice(['#ff6b6b','#ffbd2e','#fff6c9']), fade:true,\n      }));\n    }\n    shakeCam(fromPlayer ? 4 : 10);\n    sfx('boom');\n  }\n  update(dt, player) {\n    this.t += dt;\n    // Apply damage instantly at start\n    if (this.t < dt * 2) {\n      if (this.fromPlayer) {\n        // damage zombies\n        for (const z of game.zombies) {\n          if (this.hitSet.has(z)) continue;\n          if (dist2(this.x, this.y, z.x, z.y) < (this.radius + z.r)**2) {\n            z.hurt(this.damage, this.x, this.y);\n            this.hitSet.add(z);\n          }\n        }\n      } else {\n        // damage player\n        if (dist2(this.x, this.y, player.x, player.y) < (this.radius + player.r)**2) {\n          player.hurt(this.damage);\n        }\n      }\n    }\n    if (this.t >= this.life) this.dead = true;\n  }\n  draw() {\n    const p = clamp(this.t / this.life, 0, 1);\n    const r = this.radius * (0.3 + p * 0.9);\n    ctx.globalAlpha = (1 - p) * 0.6;\n    ctx.fillStyle = this.fromPlayer ? '#ffbd2e' : '#ff6b6b';\n    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.fill();\n    ctx.globalAlpha = (1 - p) * 0.9;\n    ctx.strokeStyle = '#fff6c9';\n    ctx.lineWidth = 4;\n    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.stroke();\n    ctx.globalAlpha = 1;\n  }\n}\n\n// ------------- PARTICLE ----------------------------------------\nclass Particle {\n  constructor(x, y, opts) {\n    this.x=x; this.y=y;\n    this.vx=opts.vx||0; this.vy=opts.vy||0;\n    this.life = opts.life || 0.5;\n    this.maxLife = this.life;\n    this.r = opts.r || 3;\n    this.color = opts.color || '#fff';\n    this.fade = opts.fade;\n    this.gravity = opts.gravity || 0;\n    this.dead = false;\n  }\n  update(dt) {\n    this.x += this.vx*dt; this.y += this.vy*dt;\n    this.vx *= 0.92; this.vy *= 0.92;\n    this.vy += this.gravity*dt;\n    this.life -= dt;\n    if (this.life <= 0) this.dead = true;\n  }\n  draw() {\n    const alpha = this.fade ? clamp(this.life/this.maxLife, 0, 1) : 1;\n    ctx.globalAlpha = alpha;\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.r*(this.fade?alpha*0.6+0.4:1), 0, TAU);\n    ctx.fill();\n    ctx.globalAlpha = 1;\n  }\n}\n\n// ------------- POWERUP -----------------------------------------\nclass Powerup {\n  constructor(x, y, type) {\n    this.x=x; this.y=y;\n    this.type=type;\n    this.r=16;\n    this.phase=0;\n    this.dead=false;\n    this.life = 14;\n  }\n  update(dt, player) {\n    this.phase += dt*3;\n    this.life -= dt;\n    if (this.life <= 0) this.dead = true;\n    if (dist2(this.x, this.y, player.x, player.y) < (this.r+player.r)**2) {\n      if (this.type==='health') {\n        player.hp = Math.min(player.maxHp, player.hp + 30);\n      } else if (this.type==='ammo') {\n        player.ammo = player.maxAmmo;\n        player.reloading = false;\n      }\n      this.dead = true;\n      sfx('pickup');\n      for (let i=0;i<10;i++) {\n        const a=Math.random()*TAU;\n        game.particles.push(new Particle(this.x, this.y, {\n          vx:Math.cos(a)*rand(60,160), vy:Math.sin(a)*rand(60,160),\n          life:0.5, r:rand(3,5),\n          color:this.type==='health'?'#ff6b6b':'#ffbd2e', fade:true,\n        }));\n      }\n    }\n  }\n  draw() {\n    const yOff = Math.sin(this.phase)*4;\n    ctx.fillStyle = this.type==='health' ? 'rgba(255,107,107,0.2)' : 'rgba(255,189,46,0.2)';\n    ctx.beginPath(); ctx.arc(this.x, this.y+yOff, this.r*1.6, 0, TAU); ctx.fill();\n    ctx.save();\n    ctx.translate(this.x, this.y+yOff);\n    ctx.fillStyle = this.type==='health' ? '#fff' : '#2a2f4a';\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.rect(-this.r, -this.r, this.r*2, this.r*2);\n    ctx.fill(); ctx.stroke();\n    if (this.type==='health') {\n      ctx.fillStyle = '#c73866';\n      ctx.fillRect(-4, -10, 8, 20);\n      ctx.fillRect(-10, -4, 20, 8);\n    } else {\n      ctx.fillStyle = '#ffbd2e';\n      ctx.beginPath();\n      ctx.moveTo(-8,-4); ctx.lineTo(0,-10); ctx.lineTo(8,-4); ctx.lineTo(8,8); ctx.lineTo(-8,8); ctx.closePath();\n      ctx.fill(); ctx.stroke();\n      ctx.fillStyle = '#0f0a1a';\n      ctx.fillRect(-2, -2, 4, 8);\n    }\n    ctx.restore();\n  }\n}\n\n// ------------- ROOM GENERATION ---------------------------------\nfunction generateObstacles(floor, isBoss) {\n  const theme = FLOORS[Math.min(floor-1, 4)];\n  const count = isBoss ? randi(3, 5) : randi(4, 7);\n  const obs = [];\n  let tries = 0;\n  while (obs.length < count && tries < 200) {\n    tries++;\n    const type = choice(theme.obstacles);\n    let w, h;\n    if (type === 'crate')       { w = randi(80, 180); h = randi(80, 180); }\n    else if (type === 'barrel') { w = h = randi(90, 130); }\n    else                        { w = randi(180, 240); h = randi(90, 130); }\n    const x = randi(140, world.w - w - 140);\n    const y = randi(140, world.h - h - 140);\n    // ensure not too close to center (player spawn) or other obstacles\n    const centerD = Math.hypot((x + w/2) - world.w/2, (y + h/2) - world.h/2);\n    if (centerD < 180) continue;\n    let overlap = false;\n    for (const o of obs) {\n      if (x < o.x + o.w + 30 && x + w + 30 > o.x && y < o.y + o.h + 30 && y + h + 30 > o.y) {\n        overlap = true; break;\n      }\n    }\n    if (!overlap) obs.push({x,y,w,h,type});\n  }\n  return obs;\n}\n\nfunction generateRoomSpawns(floor, roomIdx, isBoss) {\n  const spawns = [];\n  if (isBoss) {\n    // Boss room: boss + minions (scales per floor)\n    spawns.push({ type:'boss', elite: floor === 5, delay: 0 });\n    const minionCount = Math.min(2 + floor, 8);\n    const pool = enemyPool(floor).filter(t => t !== 'brute' && t !== 'boss');\n    for (let i = 0; i < minionCount; i++) {\n      spawns.push({ type: choice(pool), elite: false, delay: 1500 + i * 500 });\n    }\n    return spawns;\n  }\n  // Normal room: number of enemies scales with floor and room\n  const baseCount = 5 + roomIdx + Math.floor(floor * 1.5);\n  const pool = enemyPool(floor);\n  const eliteChance = floor >= 2 ? 0.10 + floor * 0.03 : 0;\n  for (let i = 0; i < baseCount; i++) {\n    const type = choice(pool);\n    const elite = (floor >= 2) && Math.random() < eliteChance && type !== 'boss';\n    // Stagger delay: faster early, slower for tougher types\n    const baseDelay = type === 'brute' ? 500 : type === 'exploder' ? 350 : type === 'spitter' ? 260 : type === 'runner' ? 180 : 280;\n    spawns.push({ type, elite, delay: i * baseDelay });\n  }\n  return spawns;\n}\n\nfunction enterRoom(floor, roomIdx) {\n  game.floor = floor;\n  game.roomIdx = roomIdx;\n  game.isBossRoom = (roomIdx === COMBAT_ROOMS);\n  game.obstacles = generateObstacles(floor, game.isBossRoom);\n  game.zombies = [];\n  game.bullets = [];\n  game.ezBullets = [];\n  game.explosions = [];\n  game.particles = [];\n  game.damageNums = [];\n  game.powerups = [];\n  // Player keeps HP/ammo, but refill ammo a bit\n  game.player.ammo = game.player.maxAmmo;\n  game.player.reloading = false;\n  // Place player at center\n  game.player.x = world.w/2;\n  game.player.y = world.h/2;\n  // Push out of any obstacle\n  let safety = 0;\n  while (collidesObstacle(game.player.x, game.player.y, game.player.r + 8) && safety < 20) {\n    game.player.x += 40; safety++;\n  }\n  camera.x = game.player.x - W/2;\n  camera.y = game.player.y - H/2;\n  game.spawnQueue = generateRoomSpawns(floor, roomIdx, game.isBossRoom);\n  game.spawnTimer = 0;\n  game.roomState = 'active';\n\n  const theme = FLOORS[Math.min(floor-1, 4)];\n  if (game.isBossRoom) {\n    showBanner(`BOSS ROOM`, theme.name);\n    sfx('boss');\n  } else {\n    showBanner(`FLOOR ${floor} · ROOM ${roomIdx+1}`, theme.name);\n    sfx('wave');\n  }\n}\n\nfunction clearRoomAndAdvance() {\n  // Heal on clear\n  const healAmt = game.isBossRoom ? 40 : 15;\n  game.player.hp = Math.min(game.player.maxHp, game.player.hp + healAmt);\n  game.player.ammo = game.player.maxAmmo;\n  game.player.reloading = false;\n\n  if (game.isBossRoom) {\n    if (game.floor >= FLOORS.length) {\n      // Victory!\n      game.state = 'victory';\n      showRunEnd(true);\n      return;\n    }\n    showBanner('FLOOR CLEAR', `ENTERING ${FLOORS[game.floor].name.toUpperCase()}`);\n    sfx('clear');\n    setTimeout(() => {\n      if (game.state !== 'playing' && game.state !== 'cleared') return;\n      enterRoom(game.floor + 1, 0);\n    }, 2200);\n  } else {\n    showBanner('ROOM CLEAR', '+'+healAmt+' HP  ·  AMMO REFILLED');\n    sfx('clear');\n    setTimeout(() => {\n      if (game.state !== 'playing' && game.state !== 'cleared') return;\n      enterRoom(game.floor, game.roomIdx + 1);\n    }, 1800);\n  }\n}\n\nfunction updateSpawns(dt) {\n  if (game.spawnQueue.length === 0) return;\n  game.spawnTimer += dt * 1000;\n  const remaining = [];\n  for (const s of game.spawnQueue) {\n    if (game.spawnTimer >= s.delay) {\n      spawnZombie(s.type, s.elite);\n    } else {\n      remaining.push(s);\n    }\n  }\n  game.spawnQueue = remaining;\n}\n\nfunction spawnZombie(type, elite=false) {\n  const p = game.player;\n  const sides = [\n    { x: rand(60, world.w-60), y: 60 },\n    { x: rand(60, world.w-60), y: world.h-60 },\n    { x: 60, y: rand(60, world.h-60) },\n    { x: world.w-60, y: rand(60, world.h-60) },\n  ];\n  sides.sort((a,b) => dist2(b.x,b.y,p.x,p.y) - dist2(a.x,a.y,p.x,p.y));\n  let pick = sides[randi(0, Math.min(2, sides.length))];\n  let x = pick.x, y = pick.y, tries = 0;\n  while (collidesObstacle(x, y, 36) && tries < 10) {\n    x = rand(60, world.w-60);\n    y = rand(60, world.h-60);\n    tries++;\n  }\n  for (let i = 0; i < 10; i++) {\n    const a = Math.random()*TAU;\n    game.particles.push(new Particle(x, y, {\n      vx: Math.cos(a)*rand(40,120), vy: Math.sin(a)*rand(40,120),\n      life: 0.4, r: rand(3,6), color: elite ? '#c881ff' : '#c73866', fade:true,\n    }));\n  }\n  game.zombies.push(new Zombie(x, y, type, elite));\n}\n\nfunction endRoomCheck() {\n  if (game.roomState !== 'active') return;\n  if (game.spawnQueue.length === 0 && game.zombies.length === 0) {\n    game.roomState = 'cleared';\n    clearRoomAndAdvance();\n  }\n}\n\n// ------------- UPGRADE SYSTEM ----------------------------------\nfunction rollUpgradeChoices(n=3) {\n  const eligible = UPGRADES.filter(u => {\n    const have = game.upgrades[u.id] || 0;\n    if (u.max && have >= u.max) return false;\n    return true;\n  });\n  const choices = [];\n  const pool = [...eligible];\n  while (choices.length < n && pool.length > 0) {\n    const idx = randi(0, pool.length);\n    choices.push(pool[idx]);\n    pool.splice(idx, 1);\n  }\n  return choices;\n}\nfunction applyUpgrade(id) {\n  game.upgrades[id] = (game.upgrades[id] || 0) + 1;\n  // HP upgrade heals\n  if (id === 'hp') game.player.hp = Math.min(game.player.maxHp, game.player.hp + 20);\n  if (id === 'ammo') game.player.ammo = game.player.maxAmmo;\n  renderUpgradeStack();\n}\nfunction showUpgradeChoice() {\n  const choices = rollUpgradeChoices(3);\n  if (choices.length === 0) {\n    game.pendingLevelUps--;\n    resumeFromUpgrade();\n    return;\n  }\n  const grid = document.getElementById('choiceGrid');\n  grid.innerHTML = '';\n  $('upgradeLvlSub').textContent = `CHOOSE · LEVEL ${game.player.level}`;\n  for (const u of choices) {\n    const currentLv = game.upgrades[u.id] || 0;\n    const nextLv = currentLv + 1;\n    const card = document.createElement('div');\n    card.className = 'upgrade-card';\n    card.style.setProperty('--accent-color', u.color);\n    const descText = typeof u.desc === 'function' ? u.desc(nextLv) : u.desc;\n    card.innerHTML = `\n      <div class=\"icon\">${u.icon}</div>\n      <div class=\"name\">${u.name}</div>\n      <div class=\"desc\">${descText}</div>\n      <div class=\"lvl-pill\">${currentLv>0?`Lv ${currentLv} → ${nextLv}`:`NEW · Lv ${nextLv}`}</div>\n    `;\n    card.addEventListener('click', () => {\n      applyUpgrade(u.id);\n      game.pendingLevelUps--;\n      if (game.pendingLevelUps > 0) {\n        showUpgradeChoice();\n      } else {\n        resumeFromUpgrade();\n      }\n    });\n    grid.appendChild(card);\n  }\n  showOverlay($('upgradeChoice'));\n  game.state = 'upgradeChoice';\n}\nfunction resumeFromUpgrade() {\n  hideAllOverlays();\n  game.state = 'playing';\n}\n\n// ------------- UI ----------------------------------------------\nconst $ = id => document.getElementById(id);\nconst overlays = () => ['menu','upgradeChoice','runEnd','pause'].map(id => $(id));\nfunction hideAllOverlays() { overlays().forEach(o => o.classList.add('hidden')); }\nfunction showOverlay(el) { hideAllOverlays(); el.classList.remove('hidden'); el.classList.add('fade-in'); }\n\nfunction showBanner(big, small) {\n  const el = $('banner');\n  el.innerHTML = `${big}${small?`<small>${small}</small>`:''}`;\n  el.classList.remove('show');\n  void el.offsetWidth;\n  el.classList.add('show');\n}\nfunction flashDamage() {\n  const el = $('damageFlash');\n  el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');\n}\nfunction flashXP() {\n  const el = $('xpFlash');\n  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');\n}\nfunction togglePause() {\n  if (game.state === 'playing') {\n    game.state = 'paused';\n    showOverlay($('pause'));\n  } else if (game.state === 'paused') {\n    game.state = 'playing';\n    hideAllOverlays();\n  }\n}\nfunction tryReload() {\n  if (game.state !== 'playing' || !game.player) return;\n  game.player.startReload();\n}\nfunction tryDash() {\n  if (game.state !== 'playing' || !game.player) return;\n  game.player.dash();\n}\n\nfunction renderUpgradeStack() {\n  const wrap = $('upgradeStack');\n  wrap.innerHTML = '';\n  for (const [id, lv] of Object.entries(game.upgrades)) {\n    if (!lv) continue;\n    const u = UPG_BY_ID[id];\n    const chip = document.createElement('div');\n    chip.className = 'upg-chip';\n    chip.innerHTML = `<div class=\"dot\" style=\"background:${u.color}\">${u.icon}</div><span>${u.name}</span><span class=\"lvl\">${lv}</span>`;\n    wrap.appendChild(chip);\n  }\n}\n\nfunction updateHUD() {\n  if (!game.player) return;\n  const p = game.player;\n  $('hpFill').style.width = (p.hp / p.maxHp * 100) + '%';\n  $('hpText').textContent = `${Math.ceil(p.hp)}/${p.maxHp}`;\n  $('xpFill').style.width = (p.xp / p.xpNeeded * 100) + '%';\n  $('xpText').textContent = `${Math.floor(p.xp)}/${p.xpNeeded}`;\n  const af = $('ammoFill');\n  if (p.reloading) {\n    af.style.width = (1 - p.reloadT/p.reloadTime) * 100 + '%';\n    af.classList.add('reload');\n    $('ammoText').textContent = 'RELOAD';\n  } else {\n    af.style.width = (p.ammo / p.maxAmmo * 100) + '%';\n    af.classList.remove('reload');\n    $('ammoText').textContent = `${p.ammo}/${p.maxAmmo}`;\n  }\n  $('floorText').textContent = game.floor;\n  $('roomText').textContent = `${game.roomIdx+1}/${ROOMS_PER_FLOOR}`;\n  $('lvlText').textContent = p.level;\n  $('leftText').textContent = game.zombies.length + game.spawnQueue.length;\n  $('killText').textContent = game.kills;\n  $('scoreText').textContent = game.score;\n  // Dash indicator\n  const cd = p.dashCd / p.dashCdMax;\n  const di = $('dashIndicator');\n  $('dashCool').style.height = (cd * 100) + '%';\n  if (p.dashCd <= 0) di.classList.add('ready');\n  else di.classList.remove('ready');\n}\n\n// ------------- RENDER ------------------------------------------\nfunction drawWorld() {\n  const theme = FLOORS[Math.min(game.floor-1, 4)];\n  const sx = camera.shake ? (Math.random()-0.5)*camera.shake : 0;\n  const sy = camera.shake ? (Math.random()-0.5)*camera.shake : 0;\n\n  ctx.save();\n  ctx.translate(-camera.x + sx, -camera.y + sy);\n\n  // Tile background\n  const tileSize = 80;\n  const startX = Math.floor(camera.x / tileSize) * tileSize;\n  const startY = Math.floor(camera.y / tileSize) * tileSize;\n  for (let x = startX; x < camera.x + W + tileSize; x += tileSize) {\n    for (let y = startY; y < camera.y + H + tileSize; y += tileSize) {\n      const parity = ((x/tileSize) + (y/tileSize)) & 1;\n      ctx.fillStyle = parity ? theme.bgA : theme.bgB;\n      ctx.fillRect(x, y, tileSize, tileSize);\n    }\n  }\n  // Speckles\n  ctx.fillStyle = 'rgba(255,255,255,0.04)';\n  for (let i = 0; i < 120; i++) {\n    const seed = i * 9301 + 49297;\n    const px = (seed * 3) % world.w;\n    const py = (seed * 7) % world.h;\n    if (px < camera.x - 60 || px > camera.x + W + 60) continue;\n    if (py < camera.y - 60 || py > camera.y + H + 60) continue;\n    ctx.beginPath(); ctx.arc(px, py, 2 + (seed%3), 0, TAU); ctx.fill();\n  }\n  // Border\n  ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 12;\n  ctx.strokeRect(0, 0, world.w, world.h);\n  ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 3;\n  ctx.strokeRect(18, 18, world.w-36, world.h-36);\n\n  // Obstacles\n  for (const o of game.obstacles) drawObstacle(o);\n\n  // Powerups\n  for (const p of game.powerups) p.draw();\n\n  // Entities (sorted by y for depth)\n  const sorted = [game.player, ...game.zombies].sort((a,b)=>a.y-b.y);\n  for (const e of sorted) e.draw();\n\n  // Enemy projectiles\n  for (const p of game.ezBullets) p.draw();\n  // Player bullets\n  for (const b of game.bullets) b.draw();\n  // Explosions\n  for (const e of game.explosions) e.draw();\n  // Particles\n  for (const p of game.particles) p.draw();\n  // Damage nums\n  for (const d of game.damageNums) {\n    const alpha = clamp(d.life / 0.8, 0, 1);\n    ctx.globalAlpha = alpha;\n    ctx.font = 'bold 20px Bangers, sans-serif';\n    ctx.textAlign = 'center';\n    ctx.lineWidth = 4; ctx.strokeStyle = '#0f0a1a';\n    ctx.strokeText(d.text, d.x, d.y);\n    ctx.fillStyle = d.color;\n    ctx.fillText(d.text, d.x, d.y);\n    ctx.globalAlpha = 1;\n  }\n  ctx.restore();\n\n  // Low HP vignette\n  if (game.player && game.player.hp < game.player.maxHp * 0.35) {\n    const pulse = 0.25 + 0.15*Math.sin(performance.now()/200);\n    const grad = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.max(W,H)*0.7);\n    grad.addColorStop(0, 'rgba(199,56,102,0)');\n    grad.addColorStop(1, `rgba(199,56,102,${pulse})`);\n    ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);\n  }\n}\n\nfunction drawObstacle(o) {\n  const {x,y,w,h,type} = o;\n  ctx.save();\n  if (type === 'crate') {\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\n    ctx.fillRect(x+6, y+h-4, w, 12);\n    ctx.fillStyle = '#a36841';\n    ctx.fillRect(x, y, w, h);\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;\n    ctx.strokeRect(x, y, w, h);\n    ctx.strokeStyle = '#6b3e24'; ctx.lineWidth = 3;\n    ctx.beginPath();\n    ctx.moveTo(x, y+h/3); ctx.lineTo(x+w, y+h/3);\n    ctx.moveTo(x, y+h*2/3); ctx.lineTo(x+w, y+h*2/3);\n    ctx.moveTo(x+w/2, y); ctx.lineTo(x+w/2, y+h);\n    ctx.stroke();\n    ctx.fillStyle = 'rgba(255,255,255,0.1)';\n    ctx.fillRect(x+4, y+4, w-8, 6);\n  } else if (type === 'barrel') {\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\n    ctx.beginPath(); ctx.ellipse(x+w/2+6, y+h+6, w*0.55, 10, 0, 0, TAU); ctx.fill();\n    ctx.fillStyle = '#c73866';\n    ctx.beginPath(); ctx.ellipse(x+w/2, y+h/2, w*0.5, h*0.5, 0, 0, TAU); ctx.fill();\n    ctx.strokeStyle='#0f0a1a'; ctx.lineWidth=4; ctx.stroke();\n    ctx.strokeStyle = '#8e1e3d'; ctx.lineWidth = 3;\n    ctx.beginPath(); ctx.ellipse(x+w/2, y+h*0.3, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();\n    ctx.beginPath(); ctx.ellipse(x+w/2, y+h*0.7, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();\n    ctx.fillStyle = '#ffbd2e';\n    ctx.beginPath(); ctx.arc(x+w/2, y+h/2, 6, 0, TAU); ctx.fill();\n  } else if (type === 'car') {\n    ctx.fillStyle = 'rgba(15,10,26,0.35)';\n    ctx.fillRect(x+6, y+h+2, w, 10);\n    ctx.fillStyle = '#4a5a8c';\n    ctx.fillRect(x, y, w, h);\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;\n    ctx.strokeRect(x, y, w, h);\n    ctx.fillStyle = '#1a1428';\n    ctx.fillRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);\n    ctx.fillRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);\n    ctx.strokeRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);\n    ctx.strokeRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);\n    ctx.fillStyle = '#fff6c9';\n    ctx.beginPath(); ctx.arc(x+w-4, y+10, 5, 0, TAU); ctx.fill();\n    ctx.beginPath(); ctx.arc(x+w-4, y+h-10, 5, 0, TAU); ctx.fill();\n  }\n  ctx.restore();\n}\n\n// ------------- GAME FLOW ---------------------------------------\nfunction startRun() {\n  game.floor = 1;\n  game.roomIdx = 0;\n  game.zombies = []; game.bullets = []; game.ezBullets = [];\n  game.explosions = []; game.particles = []; game.damageNums = [];\n  game.powerups = []; game.spawnQueue = [];\n  game.kills = 0; game.score = 0;\n  game.upgrades = {};\n  game.pendingLevelUps = 0;\n  game.runStartT = performance.now();\n  game.runTime = 0;\n  game.player = new Player();\n  renderUpgradeStack();\n  enterRoom(1, 0);\n  hideAllOverlays();\n  game.state = 'playing';\n}\n\nfunction showRunEnd(victory) {\n  game.runTime = (performance.now() - game.runStartT) / 1000;\n  $('endTitle').textContent = victory ? 'VICTORY!' : 'YOU DIED';\n  $('endTitle').className = 'subtitle ' + (victory ? 'cool' : 'hot');\n  $('endFloor').textContent = game.floor;\n  $('endKills').textContent = game.kills;\n  $('endScore').textContent = game.score;\n  $('endLvl').textContent = game.player ? game.player.level : 1;\n  $('endTime').textContent = Math.floor(game.runTime) + 's';\n  $('endUpgrades').textContent = Object.values(game.upgrades).reduce((a,b)=>a+b,0);\n  // render upgrade list\n  const list = $('endUpgradeList');\n  list.innerHTML = '';\n  for (const [id, lv] of Object.entries(game.upgrades)) {\n    if (!lv) continue;\n    const u = UPG_BY_ID[id];\n    const chip = document.createElement('div');\n    chip.className = 'sum-chip';\n    chip.innerHTML = `<div class=\"dot\" style=\"background:${u.color}\">${u.icon}</div><span>${u.name} ×${lv}</span>`;\n    list.appendChild(chip);\n  }\n  showOverlay($('runEnd'));\n}\n\nfunction quitToMenu() {\n  game.state = 'menu';\n  game.player = null;\n  game.zombies = []; game.bullets = []; game.ezBullets = [];\n  game.explosions = []; game.particles = []; game.damageNums = [];\n  game.powerups = []; game.spawnQueue = [];\n  $('upgradeStack').innerHTML = '';\n  showOverlay($('menu'));\n}\n\n// ------------- MAIN LOOP ---------------------------------------\nlet lastT = performance.now();\nfunction loop(now) {\n  const dt = Math.min(0.05, (now - lastT) / 1000);\n  lastT = now;\n\n  if (game.state === 'playing') {\n    game.player.update(dt);\n    cameraUpdate();\n    for (const z of game.zombies) z.update(dt, game.player);\n    for (const b of game.bullets) b.update(dt);\n    for (const p of game.ezBullets) p.update(dt, game.player);\n    for (const e of game.explosions) e.update(dt, game.player);\n    for (const p of game.particles) p.update(dt);\n    for (const pw of game.powerups) pw.update(dt, game.player);\n    for (const d of game.damageNums) {\n      d.y += d.vy * dt;\n      d.vy *= 0.95;\n      d.life -= dt;\n    }\n    game.zombies = game.zombies.filter(z => z.hp > 0);\n    game.bullets = game.bullets.filter(b => !b.dead);\n    game.ezBullets = game.ezBullets.filter(b => !b.dead);\n    game.explosions = game.explosions.filter(e => !e.dead);\n    game.particles = game.particles.filter(p => !p.dead);\n    game.damageNums = game.damageNums.filter(d => d.life > 0);\n    game.powerups = game.powerups.filter(p => !p.dead);\n\n    updateSpawns(dt);\n    endRoomCheck();\n\n    updateHUD();\n\n    // If level-ups pending and we're in normal play, trigger upgrade choice\n    if (game.pendingLevelUps > 0 && game.state === 'playing') {\n      showUpgradeChoice();\n    }\n  }\n\n  // Render\n  ctx.fillStyle = '#0f0a1a';\n  ctx.fillRect(0, 0, W, H);\n  if (game.player) drawWorld();\n  else drawMenuScene();\n  requestAnimationFrame(loop);\n}\n\n// Ambient menu scene\nlet menuT = 0;\nfunction drawMenuScene() {\n  menuT += 0.016;\n  const tile = 80;\n  for (let x = 0; x < W + tile; x += tile) {\n    for (let y = 0; y < H + tile; y += tile) {\n      const parity = ((x/tile) + (y/tile)) & 1;\n      ctx.fillStyle = parity ? '#8FA876' : '#7B9363';\n      ctx.fillRect(x, y, tile, tile);\n    }\n  }\n  for (let i = 0; i < 7; i++) {\n    const baseX = ((i * 187 + menuT*30) % (W + 200)) - 100;\n    const baseY = 120 + (i * 91) % (H - 240);\n    const z = {\n      x: baseX, y: baseY + Math.sin(menuT + i)*10,\n      r: 22, type:'walker', elite: false,\n      color: '#8FCF3F', eye: '#c73866',\n      walkPhase: menuT*8+i, angle: 0, hitFlash: 0,\n      hp: 30, maxHp: 30,\n      fusing: false,\n    };\n    Zombie.prototype.draw.call(z);\n  }\n}\n\n// ------------- WIRING ------------------------------------------\n$('startBtn').addEventListener('click', () => { initAudio(); startRun(); });\n$('restartBtn').addEventListener('click', () => { initAudio(); startRun(); });\n$('endMenuBtn').addEventListener('click', () => quitToMenu());\n$('resumeBtn').addEventListener('click', () => togglePause());\n$('pauseMenuBtn').addEventListener('click', () => quitToMenu());\n\nshowOverlay($('menu'));\nrequestAnimationFrame(loop);\n\nfunction fitCanvas() {\n  const stage = document.getElementById('stage');\n  const availW = stage.clientWidth - 40;\n  const availH = stage.clientHeight - 40;\n  const ratio = 1280/720;\n  let w = availW, h = availW / ratio;\n  if (h > availH) { h = availH; w = availH * ratio; }\n  canvas.style.width = w + 'px';\n  canvas.style.height = h + 'px';\n}\naddEventListener('resize', fitCanvas);\nfitCanvas();\n</script>\n</body>\n</html>\n"
  },
  "message": "Full roguelike rewrite of zombie defense game",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"html\", \"code\": \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n<meta charset=\\\"UTF-8\\\">\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n<title>Zombie Rogue: Endless Horde</title>\\n<link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n<link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n<link href=\\\"https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@700;800;900&display=swap\\\" rel=\\\"stylesheet\\\">\\n<style>\\n  :root {\\n    --c-bg-a: #1a1428;\\n    --c-bg-b: #2a1f3d;\\n    --c-accent: #ffbd2e;\\n    --c-hot: #ff6b6b;\\n    --c-cool: #4ecdc4;\\n    --c-dark: #0f0a1a;\\n    --c-blood: #c73866;\\n    --c-slime: #8fcf3f;\\n    --c-xp: #7b68ee;\\n    --c-elite: #c881ff;\\n  }\\n  * { margin: 0; padding: 0; box-sizing: border-box; }\\n  html, body {\\n    width: 100%; height: 100%;\\n    overflow: hidden;\\n    background: var(--c-bg-a);\\n    font-family: 'Nunito', sans-serif;\\n    color: #fff;\\n    user-select: none;\\n    -webkit-user-select: none;\\n  }\\n  #stage {\\n    position: relative;\\n    width: 100vw; height: 100vh;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background:\\n      radial-gradient(ellipse at 30% 20%, #3a2a54 0%, transparent 60%),\\n      radial-gradient(ellipse at 70% 80%, #241836 0%, transparent 60%),\\n      linear-gradient(180deg, #1a1428 0%, #0f0a1a 100%);\\n  }\\n  canvas {\\n    display: block;\\n    image-rendering: pixelated;\\n    image-rendering: crisp-edges;\\n    cursor: crosshair;\\n    box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 4px var(--c-dark), 0 0 0 8px var(--c-accent);\\n    border-radius: 6px;\\n  }\\n  #hud {\\n    position: absolute;\\n    inset: 0;\\n    pointer-events: none;\\n    font-family: 'Nunito', sans-serif;\\n  }\\n  /* Bottom bar: HP, XP, Ammo */\\n  .hud-bottom {\\n    position: absolute;\\n    bottom: 3vh;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    display: flex;\\n    flex-direction: column;\\n    gap: 8px;\\n    align-items: center;\\n  }\\n  .stat-row { display: flex; gap: 14px; }\\n  .pill {\\n    background: rgba(15, 10, 26, 0.82);\\n    border: 3px solid var(--c-dark);\\n    box-shadow: 0 4px 0 var(--c-dark), inset 0 2px 0 rgba(255,255,255,0.08);\\n    border-radius: 14px;\\n    padding: 8px 14px;\\n    display: flex;\\n    align-items: center;\\n    gap: 10px;\\n    font-weight: 900;\\n  }\\n  .pill .label {\\n    font-size: 10px;\\n    opacity: 0.65;\\n    text-transform: uppercase;\\n    letter-spacing: 1.5px;\\n  }\\n  .pill .value {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 22px;\\n    letter-spacing: 2px;\\n  }\\n  .bar {\\n    width: 160px; height: 12px;\\n    background: #0a0614;\\n    border-radius: 7px;\\n    border: 2px solid var(--c-dark);\\n    overflow: hidden;\\n    position: relative;\\n  }\\n  .hp-fill {\\n    height: 100%;\\n    background: linear-gradient(180deg, #ff9baf, var(--c-blood));\\n    transition: width 0.18s ease;\\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\\n  }\\n  .xp-fill {\\n    height: 100%;\\n    background: linear-gradient(180deg, #aea0ff, var(--c-xp));\\n    transition: width 0.18s ease;\\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\\n  }\\n  .ammo-fill {\\n    height: 100%;\\n    background: linear-gradient(180deg, #ffd966, var(--c-accent));\\n    transition: width 0.12s ease;\\n    box-shadow: inset 0 2px 0 rgba(255,255,255,0.25);\\n  }\\n  .ammo-fill.reload {\\n    background: linear-gradient(180deg, #7dd3d0, var(--c-cool));\\n    animation: reloading 0.8s ease-in-out infinite alternate;\\n  }\\n  @keyframes reloading {\\n    from { filter: brightness(0.8); } to { filter: brightness(1.3); }\\n  }\\n  /* Top bar: Run info */\\n  .hud-top {\\n    position: absolute;\\n    top: 3vh;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    display: flex;\\n    gap: 12px;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n  }\\n  /* Left column: active upgrades */\\n  .upgrade-stack {\\n    position: absolute;\\n    top: 3vh;\\n    left: 3vh;\\n    max-width: 120px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 6px;\\n  }\\n  .upg-chip {\\n    background: rgba(15,10,26,0.8);\\n    border: 2px solid var(--c-dark);\\n    border-radius: 10px;\\n    padding: 4px 8px;\\n    display: flex;\\n    align-items: center;\\n    gap: 6px;\\n    font-size: 12px;\\n    font-weight: 900;\\n  }\\n  .upg-chip .dot {\\n    width: 20px; height: 20px;\\n    border-radius: 6px;\\n    display: grid;\\n    place-items: center;\\n    font-size: 14px;\\n    border: 2px solid var(--c-dark);\\n  }\\n  .upg-chip .lvl {\\n    margin-left: auto;\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 14px;\\n    color: var(--c-accent);\\n    letter-spacing: 1px;\\n  }\\n  /* Right column: dash + minimap icons */\\n  .hud-right {\\n    position: absolute;\\n    top: 3vh;\\n    right: 3vh;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 8px;\\n    align-items: flex-end;\\n  }\\n  .dash-indicator {\\n    width: 64px; height: 64px;\\n    background: rgba(15,10,26,0.82);\\n    border: 3px solid var(--c-dark);\\n    box-shadow: 0 4px 0 var(--c-dark);\\n    border-radius: 14px;\\n    display: grid;\\n    place-items: center;\\n    position: relative;\\n    overflow: hidden;\\n  }\\n  .dash-indicator.ready { background: var(--c-cool); }\\n  .dash-indicator .key {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    color: #fff;\\n    text-shadow: 2px 2px 0 var(--c-dark);\\n    position: relative;\\n    z-index: 2;\\n  }\\n  .dash-indicator .cool-fill {\\n    position: absolute;\\n    bottom: 0; left: 0; right: 0;\\n    background: rgba(78,205,196,0.3);\\n    transition: height 0.1s linear;\\n  }\\n  /* Wave / transition banner */\\n  .banner {\\n    position: absolute;\\n    top: 40%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 68px;\\n    letter-spacing: 6px;\\n    color: var(--c-hot);\\n    text-shadow:\\n      4px 4px 0 var(--c-dark),\\n      -2px -2px 0 #fff,\\n      0 0 40px rgba(255,107,107,0.5);\\n    opacity: 0;\\n    pointer-events: none;\\n    white-space: nowrap;\\n    text-align: center;\\n  }\\n  .banner small {\\n    display: block;\\n    font-size: 28px;\\n    color: var(--c-accent);\\n    letter-spacing: 4px;\\n    margin-top: 4px;\\n    text-shadow: 3px 3px 0 var(--c-dark);\\n  }\\n  .banner.show {\\n    animation: banner-in 2.4s cubic-bezier(0.2, 0.9, 0.3, 1.4) forwards;\\n  }\\n  @keyframes banner-in {\\n    0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(-8deg); }\\n    14%  { opacity: 1; transform: translate(-50%, -50%) scale(1.15) rotate(2deg); }\\n    24%  { transform: translate(-50%, -50%) scale(1) rotate(0deg); }\\n    80%  { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }\\n    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.35) rotate(0deg); }\\n  }\\n  .damage-flash {\\n    position: absolute; inset: 0;\\n    background: radial-gradient(ellipse at center, transparent 50%, var(--c-blood) 120%);\\n    opacity: 0;\\n    pointer-events: none;\\n    mix-blend-mode: screen;\\n  }\\n  .damage-flash.hit { animation: damageFlash 0.35s ease-out; }\\n  @keyframes damageFlash {\\n    0% { opacity: 0; } 20% { opacity: 0.7; } 100% { opacity: 0; }\\n  }\\n  .xp-flash {\\n    position: absolute; inset: 0;\\n    background: radial-gradient(ellipse at center, transparent 60%, var(--c-xp) 130%);\\n    opacity: 0;\\n    pointer-events: none;\\n    mix-blend-mode: screen;\\n  }\\n  .xp-flash.flash { animation: xpFlash 0.5s ease-out; }\\n  @keyframes xpFlash {\\n    0% { opacity: 0; } 25% { opacity: 0.8; } 100% { opacity: 0; }\\n  }\\n  /* Overlays */\\n  .overlay {\\n    position: absolute;\\n    inset: 0;\\n    background: rgba(15, 10, 26, 0.85);\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 20px;\\n    pointer-events: auto;\\n    backdrop-filter: blur(6px);\\n    -webkit-backdrop-filter: blur(6px);\\n    padding: 40px;\\n  }\\n  .overlay.hidden { display: none; }\\n  .title {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 96px;\\n    letter-spacing: 6px;\\n    line-height: 0.9;\\n    color: var(--c-accent);\\n    text-shadow:\\n      5px 5px 0 var(--c-dark),\\n      -3px -3px 0 var(--c-hot),\\n      0 0 40px rgba(255,189,46,0.4);\\n    text-align: center;\\n    transform: rotate(-2deg);\\n  }\\n  .title small {\\n    display: block;\\n    font-size: 30px;\\n    color: var(--c-cool);\\n    letter-spacing: 10px;\\n    text-shadow: 3px 3px 0 var(--c-dark);\\n    margin-top: 6px;\\n    transform: rotate(3deg);\\n  }\\n  .subtitle {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 52px;\\n    letter-spacing: 5px;\\n    color: #fff;\\n    text-shadow: 4px 4px 0 var(--c-dark);\\n    text-align: center;\\n  }\\n  .subtitle.hot { color: var(--c-hot); }\\n  .subtitle.cool { color: var(--c-cool); }\\n  .subtitle.warn { color: var(--c-accent); }\\n  .btn {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 28px;\\n    letter-spacing: 4px;\\n    padding: 14px 40px;\\n    background: var(--c-accent);\\n    color: var(--c-dark);\\n    border: 4px solid var(--c-dark);\\n    box-shadow: 0 6px 0 var(--c-dark);\\n    border-radius: 16px;\\n    cursor: pointer;\\n    transition: transform 0.08s ease, box-shadow 0.08s ease;\\n  }\\n  .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 0 var(--c-dark); }\\n  .btn:active { transform: translateY(4px); box-shadow: 0 2px 0 var(--c-dark); }\\n  .btn.cool { background: var(--c-cool); }\\n  .btn.hot { background: var(--c-hot); color: #fff; }\\n  .controls {\\n    display: flex;\\n    gap: 10px;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    max-width: 700px;\\n  }\\n  .key {\\n    background: rgba(15,10,26,0.7);\\n    border: 3px solid var(--c-dark);\\n    box-shadow: 0 3px 0 var(--c-dark);\\n    padding: 6px 14px;\\n    border-radius: 10px;\\n    font-family: 'Bangers', sans-serif;\\n    letter-spacing: 2px;\\n    font-size: 16px;\\n    color: var(--c-accent);\\n  }\\n  .key .desc {\\n    color: #fff; letter-spacing: 1px; margin-left: 8px; opacity: 0.8; font-size: 13px;\\n  }\\n  /* Upgrade choice cards */\\n  .upgrade-choices {\\n    display: flex;\\n    gap: 24px;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    max-width: 1100px;\\n  }\\n  .upgrade-card {\\n    width: 280px; height: 340px;\\n    background: rgba(26, 20, 40, 0.95);\\n    border: 5px solid var(--c-dark);\\n    box-shadow: 0 8px 0 var(--c-dark), inset 0 4px 0 rgba(255,255,255,0.08);\\n    border-radius: 22px;\\n    padding: 24px 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 12px;\\n    cursor: pointer;\\n    transition: transform 0.12s ease, box-shadow 0.12s ease;\\n    position: relative;\\n    overflow: hidden;\\n  }\\n  .upgrade-card::before {\\n    content: '';\\n    position: absolute;\\n    top: -60%; left: -60%;\\n    width: 220%; height: 220%;\\n    background: conic-gradient(transparent 0deg, var(--accent-color) 45deg, transparent 90deg, transparent 360deg);\\n    opacity: 0.08;\\n    animation: spin 8s linear infinite;\\n    pointer-events: none;\\n  }\\n  @keyframes spin { to { transform: rotate(360deg); } }\\n  .upgrade-card:hover {\\n    transform: translateY(-10px) rotate(-1deg);\\n    box-shadow: 0 16px 0 var(--c-dark), 0 0 30px var(--accent-color);\\n  }\\n  .upgrade-card .icon {\\n    width: 90px; height: 90px;\\n    background: var(--accent-color);\\n    border: 4px solid var(--c-dark);\\n    border-radius: 20px;\\n    display: grid; place-items: center;\\n    font-size: 48px;\\n    box-shadow: inset 0 4px 0 rgba(255,255,255,0.2), 0 4px 0 var(--c-dark);\\n    margin-top: 6px;\\n    line-height: 1;\\n  }\\n  .upgrade-card .name {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 30px;\\n    letter-spacing: 3px;\\n    color: var(--accent-color);\\n    text-align: center;\\n    text-shadow: 2px 2px 0 var(--c-dark);\\n    line-height: 1;\\n  }\\n  .upgrade-card .desc {\\n    font-size: 14px;\\n    line-height: 1.4;\\n    text-align: center;\\n    opacity: 0.85;\\n    font-weight: 700;\\n    flex: 1;\\n    display: flex;\\n    align-items: center;\\n    padding: 0 4px;\\n  }\\n  .upgrade-card .lvl-pill {\\n    background: var(--c-dark);\\n    border: 3px solid var(--accent-color);\\n    border-radius: 10px;\\n    padding: 4px 12px;\\n    font-family: 'Bangers', sans-serif;\\n    letter-spacing: 2px;\\n    font-size: 16px;\\n    color: var(--accent-color);\\n  }\\n  .upgrade-title {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 4px;\\n  }\\n  .upgrade-title .lvl-up {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 68px;\\n    letter-spacing: 6px;\\n    color: var(--c-xp);\\n    text-shadow: 4px 4px 0 var(--c-dark), 0 0 30px rgba(123,104,238,0.5);\\n  }\\n  .upgrade-title .lvl-up small {\\n    display: block;\\n    font-size: 22px;\\n    color: #fff;\\n    letter-spacing: 4px;\\n    text-shadow: 2px 2px 0 var(--c-dark);\\n  }\\n  /* Run summary */\\n  .run-summary {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    gap: 12px;\\n    max-width: 600px;\\n    width: 100%;\\n  }\\n  .stat-card {\\n    background: rgba(26,20,40,0.9);\\n    border: 3px solid var(--c-dark);\\n    box-shadow: 0 4px 0 var(--c-dark);\\n    border-radius: 14px;\\n    padding: 14px;\\n    text-align: center;\\n  }\\n  .stat-card .lbl { font-size: 11px; opacity: 0.7; letter-spacing: 2px; }\\n  .stat-card .val {\\n    font-family: 'Bangers', sans-serif;\\n    font-size: 32px;\\n    letter-spacing: 3px;\\n    color: var(--c-accent);\\n  }\\n  .stat-card.hot .val { color: var(--c-hot); }\\n  .stat-card.cool .val { color: var(--c-cool); }\\n  .stat-card.xp .val { color: var(--c-xp); }\\n  /* Active upgrades list in summary */\\n  .summary-upgrades {\\n    display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;\\n    max-width: 600px;\\n  }\\n  .sum-chip {\\n    background: rgba(15,10,26,0.8);\\n    border: 2px solid var(--c-dark);\\n    border-radius: 10px;\\n    padding: 6px 10px;\\n    display: flex; align-items: center; gap: 6px;\\n    font-size: 12px; font-weight: 900;\\n  }\\n  .sum-chip .dot {\\n    width: 22px; height: 22px;\\n    border-radius: 6px;\\n    display: grid; place-items: center;\\n    font-size: 14px;\\n    border: 2px solid var(--c-dark);\\n  }\\n  .fade-in { animation: fadeIn 0.35s ease-out; }\\n  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\\n  .crosshair-hint {\\n    position: absolute;\\n    bottom: 10px; right: 14px;\\n    font-size: 11px; letter-spacing: 1px; opacity: 0.4;\\n    pointer-events: none;\\n  }\\n</style>\\n</head>\\n<body>\\n<div id=\\\"stage\\\">\\n  <canvas id=\\\"game\\\" width=\\\"1280\\\" height=\\\"720\\\"></canvas>\\n\\n  <div id=\\\"hud\\\">\\n    <!-- Top: Floor/Room/Kills/Score -->\\n    <div class=\\\"hud-top\\\">\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">FLOOR</span><span class=\\\"value\\\" id=\\\"floorText\\\">1</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">ROOM</span><span class=\\\"value\\\" id=\\\"roomText\\\">1/4</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">LVL</span><span class=\\\"value\\\" id=\\\"lvlText\\\">1</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">LEFT</span><span class=\\\"value\\\" id=\\\"leftText\\\">0</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">KILLS</span><span class=\\\"value\\\" id=\\\"killText\\\">0</span></div>\\n      <div class=\\\"pill\\\"><span class=\\\"label\\\">SCORE</span><span class=\\\"value\\\" id=\\\"scoreText\\\">0</span></div>\\n    </div>\\n\\n    <!-- Bottom: HP / XP / Ammo -->\\n    <div class=\\\"hud-bottom\\\">\\n      <div class=\\\"stat-row\\\">\\n        <div class=\\\"pill\\\">\\n          <span class=\\\"label\\\">HP</span>\\n          <div class=\\\"bar\\\"><div class=\\\"hp-fill\\\" id=\\\"hpFill\\\" style=\\\"width:100%\\\"></div></div>\\n          <span class=\\\"value\\\" id=\\\"hpText\\\">100</span>\\n        </div>\\n        <div class=\\\"pill\\\">\\n          <span class=\\\"label\\\">XP</span>\\n          <div class=\\\"bar\\\"><div class=\\\"xp-fill\\\" id=\\\"xpFill\\\" style=\\\"width:0%\\\"></div></div>\\n          <span class=\\\"value\\\" id=\\\"xpText\\\">0/15</span>\\n        </div>\\n        <div class=\\\"pill\\\">\\n          <span class=\\\"label\\\">AMMO</span>\\n          <div class=\\\"bar\\\"><div class=\\\"ammo-fill\\\" id=\\\"ammoFill\\\" style=\\\"width:100%\\\"></div></div>\\n          <span class=\\\"value\\\" id=\\\"ammoText\\\">12/12</span>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- Left: active upgrades -->\\n    <div class=\\\"upgrade-stack\\\" id=\\\"upgradeStack\\\"></div>\\n\\n    <!-- Right: dash -->\\n    <div class=\\\"hud-right\\\">\\n      <div class=\\\"dash-indicator\\\" id=\\\"dashIndicator\\\">\\n        <div class=\\\"cool-fill\\\" id=\\\"dashCool\\\"></div>\\n        <div class=\\\"key\\\">DASH<br><span style=\\\"font-size:11px\\\">SPACE</span></div>\\n      </div>\\n    </div>\\n\\n    <div class=\\\"banner\\\" id=\\\"banner\\\"></div>\\n    <div class=\\\"damage-flash\\\" id=\\\"damageFlash\\\"></div>\\n    <div class=\\\"xp-flash\\\" id=\\\"xpFlash\\\"></div>\\n    <div class=\\\"crosshair-hint\\\">WASD \\u00b7 MOUSE AIM \\u00b7 CLICK FIRE \\u00b7 R RELOAD \\u00b7 SPACE DASH \\u00b7 ESC PAUSE</div>\\n  </div>\\n\\n  <!-- MAIN MENU -->\\n  <div class=\\\"overlay\\\" id=\\\"menu\\\">\\n    <div class=\\\"title\\\">ZOMBIE ROGUE<small>ENDLESS HORDE</small></div>\\n    <div style=\\\"text-align:center; max-width:600px; font-weight:800; opacity:0.85; line-height:1.5;\\\">\\n      Survive 5 floors of undead chaos. Every run is different.<br>\\n      Level up \\u2014 pick your build \\u2014 push deeper \\u2014 die trying.\\n    </div>\\n    <button class=\\\"btn\\\" id=\\\"startBtn\\\">START RUN</button>\\n    <div class=\\\"controls\\\">\\n      <div class=\\\"key\\\">WASD<span class=\\\"desc\\\">Move</span></div>\\n      <div class=\\\"key\\\">Mouse<span class=\\\"desc\\\">Aim</span></div>\\n      <div class=\\\"key\\\">Click<span class=\\\"desc\\\">Shoot</span></div>\\n      <div class=\\\"key\\\">R<span class=\\\"desc\\\">Reload</span></div>\\n      <div class=\\\"key\\\">Space<span class=\\\"desc\\\">Dash</span></div>\\n      <div class=\\\"key\\\">ESC<span class=\\\"desc\\\">Pause</span></div>\\n    </div>\\n  </div>\\n\\n  <!-- UPGRADE CHOICE -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"upgradeChoice\\\">\\n    <div class=\\\"upgrade-title\\\">\\n      <div class=\\\"lvl-up\\\">LEVEL UP!<small id=\\\"upgradeLvlSub\\\">CHOOSE YOUR UPGRADE</small></div>\\n    </div>\\n    <div class=\\\"upgrade-choices\\\" id=\\\"choiceGrid\\\"></div>\\n  </div>\\n\\n  <!-- RUN SUMMARY / GAME OVER / VICTORY -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"runEnd\\\">\\n    <div class=\\\"subtitle\\\" id=\\\"endTitle\\\">YOU DIED</div>\\n    <div class=\\\"run-summary\\\">\\n      <div class=\\\"stat-card\\\"><div class=\\\"lbl\\\">FLOOR</div><div class=\\\"val\\\" id=\\\"endFloor\\\">1</div></div>\\n      <div class=\\\"stat-card hot\\\"><div class=\\\"lbl\\\">KILLS</div><div class=\\\"val\\\" id=\\\"endKills\\\">0</div></div>\\n      <div class=\\\"stat-card\\\"><div class=\\\"lbl\\\">SCORE</div><div class=\\\"val\\\" id=\\\"endScore\\\">0</div></div>\\n      <div class=\\\"stat-card cool\\\"><div class=\\\"lbl\\\">LEVEL</div><div class=\\\"val\\\" id=\\\"endLvl\\\">1</div></div>\\n      <div class=\\\"stat-card xp\\\"><div class=\\\"lbl\\\">TIME</div><div class=\\\"val\\\" id=\\\"endTime\\\">0s</div></div>\\n      <div class=\\\"stat-card\\\"><div class=\\\"lbl\\\">UPGRADES</div><div class=\\\"val\\\" id=\\\"endUpgrades\\\">0</div></div>\\n    </div>\\n    <div class=\\\"summary-upgrades\\\" id=\\\"endUpgradeList\\\"></div>\\n    <div style=\\\"display:flex; gap:16px;\\\">\\n      <button class=\\\"btn hot\\\" id=\\\"restartBtn\\\">NEW RUN</button>\\n      <button class=\\\"btn\\\" id=\\\"endMenuBtn\\\">MENU</button>\\n    </div>\\n  </div>\\n\\n  <!-- PAUSE -->\\n  <div class=\\\"overlay hidden\\\" id=\\\"pause\\\">\\n    <div class=\\\"subtitle cool\\\">PAUSED</div>\\n    <div style=\\\"display:flex; gap:16px;\\\">\\n      <button class=\\\"btn cool\\\" id=\\\"resumeBtn\\\">RESUME</button>\\n      <button class=\\\"btn\\\" id=\\\"pauseMenuBtn\\\">QUIT RUN</button>\\n    </div>\\n  </div>\\n</div>\\n\\n<script>\\n// =============================================================\\n// ZOMBIE ROGUE \\u2014 roguelike top-down shooter\\n// =============================================================\\n\\nconst canvas = document.getElementById('game');\\nconst ctx = canvas.getContext('2d');\\nconst W = canvas.width, H = canvas.height;\\n\\n// ------------- UTIL --------------------------------------------\\nconst TAU = Math.PI * 2;\\nconst lerp = (a,b,t) => a + (b-a)*t;\\nconst clamp = (v,lo,hi) => v<lo?lo:v>hi?hi:v;\\nconst dist2 = (ax,ay,bx,by) => { const dx=bx-ax,dy=by-ay; return dx*dx+dy*dy; };\\nconst rand = (a,b) => a + Math.random()*(b-a);\\nconst randi = (a,b) => Math.floor(rand(a,b));\\nconst choice = arr => arr[randi(0, arr.length)];\\nfunction lighten(hex, pct) {\\n  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);\\n  const m = v => clamp(Math.floor(v + (255-v)*pct/100), 0, 255);\\n  return '#' + [m(r),m(g),m(b)].map(v=>v.toString(16).padStart(2,'0')).join('');\\n}\\n\\n// ------------- AUDIO -------------------------------------------\\nlet audioCtx = null;\\nfunction initAudio() { if (!audioCtx) { try { audioCtx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e) {} } }\\nfunction beep(freq, duration, type='square', vol=0.06, sweep=0) {\\n  if (!audioCtx) return;\\n  const t = audioCtx.currentTime;\\n  const osc = audioCtx.createOscillator();\\n  const gain = audioCtx.createGain();\\n  osc.type = type;\\n  osc.frequency.setValueAtTime(freq, t);\\n  if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq+sweep), t+duration);\\n  gain.gain.setValueAtTime(vol, t);\\n  gain.gain.exponentialRampToValueAtTime(0.0001, t+duration);\\n  osc.connect(gain); gain.connect(audioCtx.destination);\\n  osc.start(t); osc.stop(t+duration+0.02);\\n}\\nfunction sfx(name) {\\n  if (!audioCtx) return;\\n  switch(name) {\\n    case 'shoot':   beep(880, 0.05, 'square', 0.04, -500); break;\\n    case 'hit':     beep(200, 0.07, 'sawtooth', 0.06, -100); break;\\n    case 'reload':  beep(400, 0.05, 'triangle', 0.04); setTimeout(()=>beep(600, 0.05, 'triangle', 0.04), 120); break;\\n    case 'die':     beep(150, 0.25, 'sawtooth', 0.08, -80); break;\\n    case 'hurt':    beep(120, 0.15, 'square', 0.09, -60); break;\\n    case 'pickup':  beep(600, 0.07, 'sine', 0.07); setTimeout(()=>beep(900, 0.08, 'sine', 0.07), 70); break;\\n    case 'wave':    beep(300, 0.12, 'sawtooth', 0.07); setTimeout(()=>beep(500, 0.18, 'square', 0.07), 120); break;\\n    case 'clear':   [523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,0.1,'triangle',0.08),i*80)); break;\\n    case 'levelup': [659,784,988,1319].forEach((f,i)=>setTimeout(()=>beep(f,0.09,'triangle',0.08),i*70)); break;\\n    case 'gameover':[400,300,200,100].forEach((f,i)=>setTimeout(()=>beep(f,0.22,'sawtooth',0.09),i*170)); break;\\n    case 'dash':    beep(500, 0.09, 'sine', 0.06, 400); break;\\n    case 'boom':    beep(80, 0.25, 'sawtooth', 0.1, -40); break;\\n    case 'spit':    beep(250, 0.12, 'sawtooth', 0.05, 100); break;\\n    case 'boss':    [110,130,150,170,200].forEach((f,i)=>setTimeout(()=>beep(f,0.18,'sawtooth',0.1),i*90)); break;\\n  }\\n}\\n\\n// ------------- INPUT -------------------------------------------\\nconst keys = Object.create(null);\\nconst mouse = { x: W/2, y: H/2, worldX: 0, worldY: 0, down: false };\\naddEventListener('keydown', e => {\\n  keys[e.key.toLowerCase()] = true;\\n  if (e.key.toLowerCase() === 'r') tryReload();\\n  if (e.key === ' ') { e.preventDefault(); tryDash(); }\\n  if (e.key === 'Escape') togglePause();\\n});\\naddEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });\\ncanvas.addEventListener('mousemove', e => {\\n  const r = canvas.getBoundingClientRect();\\n  mouse.x = (e.clientX - r.left) * (canvas.width / r.width);\\n  mouse.y = (e.clientY - r.top)  * (canvas.height / r.height);\\n});\\ncanvas.addEventListener('mousedown', () => { mouse.down = true; initAudio(); });\\ncanvas.addEventListener('mouseup',   () => { mouse.down = false; });\\ncanvas.addEventListener('contextmenu', e => e.preventDefault());\\n\\n// ------------- WORLD / CAMERA ----------------------------------\\nconst world = { w: 1800, h: 1100 };\\nconst camera = { x: 0, y: 0, shake: 0 };\\nfunction cameraUpdate() {\\n  const tx = clamp(game.player.x - W/2, 0, world.w - W);\\n  const ty = clamp(game.player.y - H/2, 0, world.h - H);\\n  camera.x = lerp(camera.x, tx, 0.12);\\n  camera.y = lerp(camera.y, ty, 0.12);\\n  mouse.worldX = mouse.x + camera.x;\\n  mouse.worldY = mouse.y + camera.y;\\n  if (camera.shake > 0.01) camera.shake *= 0.86; else camera.shake = 0;\\n}\\nfunction shakeCam(amt) { camera.shake = Math.min(24, camera.shake + amt); }\\n\\n// ------------- FLOOR THEMES ------------------------------------\\nconst FLOORS = [\\n  { name:'The Outskirts',   bgA:'#8FA876', bgB:'#7B9363', obstacles:['crate','barrel'] },\\n  { name:'Downtown Drift',  bgA:'#7A6F88', bgB:'#5E5571', obstacles:['car','crate','barrel'] },\\n  { name:'Mall Panic',      bgA:'#A89878', bgB:'#8D7E60', obstacles:['crate','crate','barrel'] },\\n  { name:'Industrial Rot',  bgA:'#5F6B70', bgB:'#4A5559', obstacles:['barrel','barrel','crate'] },\\n  { name:'Final Stand',     bgA:'#4A3A56', bgB:'#352741', obstacles:['crate','barrel','car'] },\\n];\\nconst ROOMS_PER_FLOOR = 4; // 3 combat + 1 boss\\nconst COMBAT_ROOMS = 3;\\n\\n// ------------- ENEMY ARCHETYPES --------------------------------\\n// Base stats \\u2014 floor scaling applies a multiplier. Elite doubles HP & 1.5x damage.\\nconst ZTYPES = {\\n  walker:   { hp: 28,  speed: 62,  damage: 10, radius: 20, color:'#8FCF3F', eye:'#c73866', score: 8,   xp: 4,  touchCd: 600, minFloor: 1 },\\n  runner:   { hp: 16,  speed: 135, damage: 6,  radius: 16, color:'#CEDE4E', eye:'#6c2a4e', score: 12,  xp: 6,  touchCd: 450, minFloor: 1 },\\n  spitter:  { hp: 22,  speed: 78,  damage: 12, radius: 18, color:'#b5d645', eye:'#ffbd2e', score: 18,  xp: 9,  touchCd: 700, minFloor: 2, range: 380, shootCd: 1800 },\\n  exploder: { hp: 18,  speed: 115, damage: 28, radius: 17, color:'#ff7b5c', eye:'#fff0a0', score: 18,  xp: 10, touchCd: 100, minFloor: 3, fuse: 600, boomR: 95 },\\n  brute:    { hp: 110, speed: 38,  damage: 22, radius: 32, color:'#5F8C3F', eye:'#ff6b6b', score: 40,  xp: 18, touchCd: 900, minFloor: 2 },\\n  boss:     { hp: 420, speed: 46,  damage: 30, radius: 54, color:'#3D5B2A', eye:'#ffbd2e', score: 180, xp: 80, touchCd: 700, minFloor: 1 },\\n};\\nfunction enemyStats(type, floor, elite) {\\n  const base = ZTYPES[type];\\n  const hpMul  = Math.pow(1.25, floor - 1) * (elite ? 2.0 : 1.0);\\n  const dmgMul = Math.pow(1.15, floor - 1) * (elite ? 1.5 : 1.0);\\n  return {\\n    hp: Math.round(base.hp * hpMul),\\n    damage: Math.round(base.damage * dmgMul),\\n    speed: base.speed,\\n    radius: base.radius * (elite ? 1.15 : 1.0),\\n    score: Math.round(base.score * (elite ? 2.5 : 1.0)),\\n    xp: Math.round(base.xp * (elite ? 3 : 1.0)),\\n  };\\n}\\nfunction enemyPool(floor) {\\n  const pool = [];\\n  // base weights\\n  const weights = {\\n    walker:   [4, 4, 3, 3, 2],\\n    runner:   [2, 3, 3, 3, 3],\\n    spitter:  [0, 2, 2, 2, 2],\\n    exploder: [0, 0, 2, 2, 2],\\n    brute:    [0, 1, 1, 2, 2],\\n  };\\n  for (const [type, w] of Object.entries(weights)) {\\n    const weight = w[Math.min(4, floor-1)] || 0;\\n    for (let i = 0; i < weight; i++) pool.push(type);\\n  }\\n  return pool;\\n}\\n\\n// ------------- UPGRADE CATALOG ---------------------------------\\n// Each upgrade: id, name, desc (can be function(level)), icon (emoji or text), color,\\n// maxLevel (null=infinite), apply function or direct stat references.\\nconst UPGRADES = [\\n  { id:'dmg',      name:'Boomstick',     color:'#ff6b6b', icon:'\\ud83d\\udca5',\\n    desc:(l)=>`+25% damage per level\\\\n(now +${25*l}%)`, max:null },\\n  { id:'rof',      name:'Hair Trigger',  color:'#ffbd2e', icon:'\\u26a1',\\n    desc:(l)=>`+18% fire rate per level\\\\n(now +${18*l}%)`, max:5 },\\n  { id:'speed',    name:'Sneakers',      color:'#4ecdc4', icon:'\\ud83d\\udc5f',\\n    desc:(l)=>`+12% move speed per level\\\\n(now +${12*l}%)`, max:5 },\\n  { id:'hp',       name:'Tough Skin',    color:'#ff6b6b', icon:'\\u2764\\ufe0f',\\n    desc:(l)=>`+20 max HP per level\\\\n(heals 20 on pickup)`, max:null },\\n  { id:'reload',   name:'Quick Hands',   color:'#ffbd2e', icon:'\\u23f1\\ufe0f',\\n    desc:(l)=>`-28% reload time per level\\\\n(now -${Math.round((1-Math.pow(0.72,l))*100)}%)`, max:3 },\\n  { id:'ammo',     name:'Extra Clip',    color:'#a36841', icon:'\\ud83d\\udce6',\\n    desc:(l)=>`+6 max ammo per level\\\\n(refills on pickup)`, max:5 },\\n  { id:'double',   name:'Double Tap',    color:'#ffbd2e', icon:'\\ud83d\\udd2b',\\n    desc:()=>`Fire TWO bullets per shot\\\\n(slight spread)`, max:1 },\\n  { id:'crit',     name:'Sharpshooter',  color:'#ff6b6b', icon:'\\ud83c\\udfaf',\\n    desc:(l)=>`+12% crit chance per level\\\\n(crits deal 2.5\\u00d7 damage)`, max:4 },\\n  { id:'pierce',   name:'Piercing Rounds', color:'#7b68ee', icon:'\\ud83d\\udd29',\\n    desc:(l)=>`Bullets pierce ${l} extra enemy\\\\nper level`, max:3 },\\n  { id:'explode',  name:'Explosive Rounds', color:'#ff6b6b', icon:'\\ud83d\\udca3',\\n    desc:()=>`Bullets explode on hit\\\\n(60% dmg in small radius)`, max:1 },\\n  { id:'vamp',     name:'Vampire',       color:'#c73866', icon:'\\ud83e\\ude78',\\n    desc:(l)=>`Heal ${2*l} HP per kill`, max:null },\\n  { id:'regen',    name:'Regeneration',  color:'#8fcf3f', icon:'\\u271a',\\n    desc:(l)=>`Regen ${l} HP/sec while combat\\\\nactive`, max:3 },\\n  { id:'thorns',   name:'Thorns',        color:'#c881ff', icon:'\\ud83c\\udf35',\\n    desc:(l)=>`Touching enemies take\\\\n${10*l} damage`, max:3 },\\n  { id:'eagle',    name:'Eagle Eye',     color:'#4ecdc4', icon:'\\ud83e\\udd85',\\n    desc:(l)=>`+30% bullet speed & range\\\\nper level`, max:3 },\\n  { id:'scholar',  name:'Scholar',       color:'#7b68ee', icon:'\\ud83d\\udcd8',\\n    desc:(l)=>`+15% XP gain per level`, max:3 },\\n];\\nconst UPG_BY_ID = Object.fromEntries(UPGRADES.map(u => [u.id, u]));\\n\\n// ------------- GAME STATE --------------------------------------\\nconst game = {\\n  state: 'menu',\\n  floor: 1,\\n  roomIdx: 0,         // 0..3\\n  isBossRoom: false,\\n  obstacles: [],\\n  player: null,\\n  zombies: [],\\n  bullets: [],\\n  ezBullets: [],      // enemy projectiles\\n  explosions: [],\\n  particles: [],\\n  damageNums: [],\\n  powerups: [],\\n  spawnQueue: [],\\n  spawnTimer: 0,\\n  kills: 0,\\n  score: 0,\\n  upgrades: {},\\n  pendingLevelUps: 0,\\n  runStartT: 0,\\n  runTime: 0,\\n  roomState: 'active',   // active, cleared, transitioning\\n  transitionT: 0,\\n};\\n\\n// ------------- COLLISION HELPERS -------------------------------\\nfunction collidesObstacle(x, y, r) {\\n  for (const o of game.obstacles) {\\n    const cx = clamp(x, o.x, o.x + o.w);\\n    const cy = clamp(y, o.y, o.y + o.h);\\n    const dx = x - cx, dy = y - cy;\\n    if (dx*dx + dy*dy < r*r) return true;\\n  }\\n  return false;\\n}\\nfunction drawShadow(x, y, r) {\\n  ctx.fillStyle = 'rgba(15, 10, 26, 0.35)';\\n  ctx.beginPath(); ctx.ellipse(x, y + r*0.85, r*0.95, r*0.35, 0, 0, TAU); ctx.fill();\\n}\\nfunction drawHPBar(x, y, w, h, frac, color='#c73866') {\\n  ctx.fillStyle = '#0f0a1a';\\n  ctx.fillRect(x - 1, y - 1, w + 2, h + 2);\\n  ctx.fillStyle = '#2a0e1c';\\n  ctx.fillRect(x, y, w, h);\\n  ctx.fillStyle = color;\\n  ctx.fillRect(x, y, w * clamp(frac, 0, 1), h);\\n}\\n\\n// ------------- PLAYER ------------------------------------------\\nclass Player {\\n  constructor() {\\n    this.x = world.w/2;\\n    this.y = world.h/2;\\n    this.r = 18;\\n    this.angle = 0;\\n    // base stats\\n    this._baseSpeed = 215;\\n    this._baseMaxHp = 100;\\n    this._baseMaxAmmo = 12;\\n    this._baseFireRate = 0.14;\\n    this._baseDamage = 14;\\n    this._baseReload = 1.0;\\n    this._baseBulletSpeed = 900;\\n    this._baseBulletLife = 0.7;\\n\\n    this.hp = this.maxHp;\\n    this.ammo = this.maxAmmo;\\n    this.reloading = false;\\n    this.reloadT = 0;\\n    this.fireCd = 0;\\n    this.walkPhase = 0;\\n    this.iFrames = 0;\\n    this.flashT = 0;\\n    // dash\\n    this.dashCd = 0;\\n    this.dashT = 0;       // remaining dash duration\\n    this.dashDx = 0;\\n    this.dashDy = 0;\\n    this.dashDuration = 0.22;\\n    this.dashCdMax = 1.4;\\n    this.dashSpeed = 620;\\n    // level\\n    this.level = 1;\\n    this.xp = 0;\\n    this.xpNeeded = 15;\\n    // regen\\n    this.regenAcc = 0;\\n  }\\n  u(id) { return game.upgrades[id] || 0; }\\n\\n  get speed()        { return this._baseSpeed * (1 + 0.12 * this.u('speed')); }\\n  get maxHp()        { return this._baseMaxHp + 20 * this.u('hp'); }\\n  get maxAmmo()      { return this._baseMaxAmmo + 6 * this.u('ammo'); }\\n  get fireRate()     { return this._baseFireRate / (1 + 0.18 * this.u('rof')); }\\n  get damage()       { return this._baseDamage * (1 + 0.25 * this.u('dmg')); }\\n  get reloadTime()   { return this._baseReload * Math.pow(0.72, this.u('reload')); }\\n  get bulletSpeed()  { return this._baseBulletSpeed * (1 + 0.30 * this.u('eagle')); }\\n  get bulletLife()   { return this._baseBulletLife * (1 + 0.30 * this.u('eagle')); }\\n  get critChance()   { return 0.12 * this.u('crit'); }\\n  get pierce()       { return this.u('pierce'); }\\n  get explosive()    { return this.u('explode') > 0; }\\n  get doubleTap()    { return this.u('double') > 0; }\\n  get xpMul()        { return 1 + 0.15 * this.u('scholar'); }\\n  get vampHeal()     { return 2 * this.u('vamp'); }\\n  get regenRate()    { return this.u('regen'); }\\n  get thornsDmg()    { return 10 * this.u('thorns'); }\\n\\n  update(dt) {\\n    // Regen\\n    if (this.regenRate > 0 && this.hp < this.maxHp) {\\n      this.regenAcc += dt * this.regenRate;\\n      while (this.regenAcc >= 1) {\\n        this.hp = Math.min(this.maxHp, this.hp + 1);\\n        this.regenAcc -= 1;\\n      }\\n    }\\n\\n    // Dash\\n    this.dashCd = Math.max(0, this.dashCd - dt);\\n    if (this.dashT > 0) {\\n      this.dashT -= dt;\\n      const nx = this.x + this.dashDx * this.dashSpeed * dt;\\n      const ny = this.y + this.dashDy * this.dashSpeed * dt;\\n      if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\\n      if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\\n      this.x = clamp(this.x, this.r, world.w - this.r);\\n      this.y = clamp(this.y, this.r, world.h - this.r);\\n      // dash trail\\n      if (Math.random() < 0.7) {\\n        game.particles.push(new Particle(this.x, this.y, {\\n          vx: rand(-30,30), vy: rand(-30,30),\\n          life: 0.25, r: rand(4,8), color:'#4ecdc4', fade:true\\n        }));\\n      }\\n    } else {\\n      let mx=0, my=0;\\n      if (keys['w']||keys['arrowup']) my -= 1;\\n      if (keys['s']||keys['arrowdown']) my += 1;\\n      if (keys['a']||keys['arrowleft']) mx -= 1;\\n      if (keys['d']||keys['arrowright']) mx += 1;\\n      const mag = Math.hypot(mx, my);\\n      if (mag > 0) {\\n        mx /= mag; my /= mag;\\n        const nx = this.x + mx * this.speed * dt;\\n        const ny = this.y + my * this.speed * dt;\\n        if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\\n        if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\\n        this.x = clamp(this.x, this.r, world.w - this.r);\\n        this.y = clamp(this.y, this.r, world.h - this.r);\\n        this.walkPhase += dt * 14;\\n      } else {\\n        this.walkPhase *= 0.92;\\n      }\\n    }\\n\\n    this.angle = Math.atan2(mouse.worldY - this.y, mouse.worldX - this.x);\\n\\n    this.fireCd = Math.max(0, this.fireCd - dt);\\n    if (mouse.down && !this.reloading && this.ammo > 0 && this.fireCd <= 0) this.shoot();\\n    if (this.ammo <= 0 && !this.reloading) this.startReload();\\n\\n    if (this.reloading) {\\n      this.reloadT -= dt;\\n      if (this.reloadT <= 0) {\\n        this.reloading = false;\\n        this.ammo = this.maxAmmo;\\n      }\\n    }\\n    this.iFrames = Math.max(0, this.iFrames - dt);\\n    this.flashT = Math.max(0, this.flashT - dt);\\n  }\\n  dash() {\\n    if (this.dashCd > 0 || this.dashT > 0) return;\\n    // direction from keys, fallback to facing\\n    let mx=0, my=0;\\n    if (keys['w']||keys['arrowup']) my -= 1;\\n    if (keys['s']||keys['arrowdown']) my += 1;\\n    if (keys['a']||keys['arrowleft']) mx -= 1;\\n    if (keys['d']||keys['arrowright']) mx += 1;\\n    const mag = Math.hypot(mx, my);\\n    if (mag > 0) { mx /= mag; my /= mag; }\\n    else { mx = Math.cos(this.angle); my = Math.sin(this.angle); }\\n    this.dashDx = mx; this.dashDy = my;\\n    this.dashT = this.dashDuration;\\n    this.dashCd = this.dashCdMax;\\n    this.iFrames = Math.max(this.iFrames, this.dashDuration + 0.05);\\n    sfx('dash');\\n    for (let i = 0; i < 12; i++) {\\n      game.particles.push(new Particle(this.x, this.y, {\\n        vx: rand(-60,60), vy: rand(-60,60),\\n        life: 0.3, r: rand(3,6), color:'#4ecdc4', fade:true\\n      }));\\n    }\\n  }\\n  shoot() {\\n    this.fireCd = this.fireRate;\\n    this.ammo--;\\n    const muzX = this.x + Math.cos(this.angle) * 28;\\n    const muzY = this.y + Math.sin(this.angle) * 28;\\n\\n    const shots = this.doubleTap ? 2 : 1;\\n    for (let i = 0; i < shots; i++) {\\n      const spread = (Math.random()-0.5) * (this.doubleTap ? 0.14 : 0.06);\\n      const a = this.angle + spread;\\n      const isCrit = Math.random() < this.critChance;\\n      const dmg = this.damage * (isCrit ? 2.5 : 1.0);\\n      game.bullets.push(new Bullet(muzX, muzY, a, this.bulletSpeed, dmg, {\\n        pierce: this.pierce, explosive: this.explosive,\\n        life: this.bulletLife, crit: isCrit,\\n      }));\\n    }\\n    for (let i = 0; i < 5; i++) {\\n      game.particles.push(new Particle(muzX, muzY, {\\n        vx: Math.cos(this.angle)*rand(120,260) + rand(-40,40),\\n        vy: Math.sin(this.angle)*rand(120,260) + rand(-40,40),\\n        life: 0.1, r: rand(3,6),\\n        color: Math.random()<0.5 ? '#ffbd2e' : '#fff6c9', fade:true,\\n      }));\\n    }\\n    shakeCam(1.5);\\n    sfx('shoot');\\n  }\\n  startReload() {\\n    if (this.reloading || this.ammo === this.maxAmmo) return;\\n    this.reloading = true;\\n    this.reloadT = this.reloadTime;\\n    sfx('reload');\\n  }\\n  hurt(dmg, sourceX, sourceY) {\\n    if (this.iFrames > 0) return;\\n    this.hp = Math.max(0, this.hp - dmg);\\n    this.iFrames = 0.55;\\n    this.flashT = 0.25;\\n    shakeCam(8);\\n    flashDamage();\\n    sfx('hurt');\\n    if (this.hp <= 0) {\\n      game.state = 'dead';\\n      sfx('gameover');\\n      showRunEnd(false);\\n    }\\n  }\\n  gainXP(amt) {\\n    this.xp += amt * this.xpMul;\\n    let leveled = false;\\n    while (this.xp >= this.xpNeeded) {\\n      this.xp -= this.xpNeeded;\\n      this.level++;\\n      this.xpNeeded = Math.floor(15 * Math.pow(1.45, this.level - 1));\\n      game.pendingLevelUps++;\\n      leveled = true;\\n    }\\n    if (leveled) {\\n      sfx('levelup');\\n      flashXP();\\n    }\\n  }\\n  draw() {\\n    const x = this.x, y = this.y;\\n    drawShadow(x, y, this.r);\\n    const legBob = Math.sin(this.walkPhase) * 3;\\n    const bodyFlash = this.flashT > 0 && (Math.floor(this.flashT*30)%2===0);\\n    const dashing = this.dashT > 0;\\n\\n    ctx.save();\\n    ctx.translate(x, y);\\n    // Legs\\n    ctx.fillStyle = '#2a2f4a';\\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.fill();\\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.fill();\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.stroke();\\n    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.stroke();\\n\\n    ctx.rotate(this.angle);\\n    // Gun\\n    ctx.fillStyle = '#2a2f4a';\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.rect(10, -4, 24, 8); ctx.fill(); ctx.stroke();\\n    ctx.beginPath(); ctx.rect(14, -7, 4, 3); ctx.fill(); ctx.stroke();\\n    // Body\\n    ctx.fillStyle = bodyFlash ? '#ffffff' : (dashing ? '#7dd3d0' : '#4ecdc4');\\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2.5;\\n    ctx.beginPath(); ctx.moveTo(-12, -8); ctx.lineTo(12, 8); ctx.stroke();\\n    // Head\\n    ctx.fillStyle = bodyFlash ? '#fff' : '#ffd2a4';\\n    ctx.beginPath(); ctx.arc(4, 0, 11, 0, TAU); ctx.fill();\\n    ctx.lineWidth = 3; ctx.stroke();\\n    ctx.fillStyle = '#0f0a1a';\\n    ctx.beginPath(); ctx.arc(10, -1, 2, 0, TAU); ctx.fill();\\n    ctx.fillStyle = '#3b2a1d';\\n    ctx.beginPath(); ctx.arc(0, -7, 5, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.restore();\\n\\n    // Player HP bar (over head)\\n    const bw = 44, bh = 6;\\n    drawHPBar(x - bw/2, y - this.r - 16, bw, bh, this.hp / this.maxHp, '#8fcf3f');\\n  }\\n}\\n\\n// ------------- ZOMBIE ------------------------------------------\\nclass Zombie {\\n  constructor(x, y, type, elite=false) {\\n    const stats = enemyStats(type, game.floor, elite);\\n    this.x = x; this.y = y;\\n    this.type = type;\\n    this.elite = elite;\\n    const base = ZTYPES[type];\\n    this.r = stats.radius;\\n    this.hp = stats.hp;\\n    this.maxHp = stats.hp;\\n    this.speed = stats.speed;\\n    this.damage = stats.damage;\\n    this.score = stats.score;\\n    this.xp = stats.xp;\\n    this.color = base.color;\\n    this.eye = base.eye;\\n    this.touchCdMax = base.touchCd;\\n    this.touchCd = 0;\\n    this.walkPhase = Math.random() * TAU;\\n    this.hitFlash = 0;\\n    this.angle = 0;\\n    this.wobble = rand(0, TAU);\\n    // spitter\\n    this.shootCd = type === 'spitter' ? rand(800, 1600) : 0;\\n    // exploder\\n    this.fusing = false;\\n    this.fuseT = 0;\\n    // boss\\n    this.chargeCd = type === 'boss' ? 2500 : 0;\\n    this.charging = false;\\n    this.chargeT = 0;\\n    this.chargeDx = 0;\\n    this.chargeDy = 0;\\n    this.summonCd = (type === 'boss' && game.floor >= 2) ? 5000 : 0;\\n  }\\n  update(dt, player) {\\n    this.hitFlash = Math.max(0, this.hitFlash - dt);\\n    this.touchCd = Math.max(0, this.touchCd - dt*1000);\\n    this.wobble += dt * 3;\\n\\n    const dx = player.x - this.x;\\n    const dy = player.y - this.y;\\n    const d = Math.hypot(dx, dy) || 0.001;\\n    this.angle = Math.atan2(dy, dx);\\n\\n    // Behavior by type\\n    if (this.type === 'spitter') {\\n      // keep distance ~280, shoot periodically\\n      const base = ZTYPES.spitter;\\n      this.shootCd -= dt * 1000;\\n      const desiredD = 280;\\n      let mx = 0, my = 0;\\n      if (d > desiredD + 40) { mx = dx/d; my = dy/d; }\\n      else if (d < desiredD - 40) { mx = -dx/d; my = -dy/d; }\\n      else {\\n        // strafe\\n        mx = -dy/d; my = dx/d;\\n        if ((Math.floor(this.wobble) % 2) === 0) { mx = -mx; my = -my; }\\n      }\\n      this.move(mx, my, this.speed, dt);\\n      if (this.shootCd <= 0 && d < base.range) {\\n        this.shootCd = base.shootCd;\\n        // telegraph + shoot\\n        const proj = new ZombieProjectile(this.x, this.y, Math.atan2(dy, dx), 340, this.damage);\\n        game.ezBullets.push(proj);\\n        sfx('spit');\\n        // muzzle slime\\n        for (let i = 0; i < 6; i++) {\\n          const a = this.angle + rand(-0.3, 0.3);\\n          game.particles.push(new Particle(this.x, this.y, {\\n            vx: Math.cos(a)*rand(60,140), vy: Math.sin(a)*rand(60,140),\\n            life: 0.3, r: rand(3,5), color: '#8fcf3f', fade:true\\n          }));\\n        }\\n      }\\n    } else if (this.type === 'exploder') {\\n      // sprint toward player; start fuse when close\\n      const base = ZTYPES.exploder;\\n      if (!this.fusing && d < 80) {\\n        this.fusing = true;\\n        this.fuseT = base.fuse;\\n      }\\n      if (this.fusing) {\\n        this.fuseT -= dt * 1000;\\n        // still moves, slightly slower\\n        this.move(dx/d, dy/d, this.speed*0.6, dt);\\n        if (this.fuseT <= 0) {\\n          this.explode();\\n          return;\\n        }\\n      } else {\\n        this.move(dx/d, dy/d, this.speed, dt);\\n      }\\n    } else if (this.type === 'boss') {\\n      // charges periodically, otherwise walks toward player\\n      this.chargeCd -= dt * 1000;\\n      if (this.charging) {\\n        this.chargeT -= dt;\\n        this.move(this.chargeDx, this.chargeDy, 360, dt);\\n        if (this.chargeT <= 0) this.charging = false;\\n      } else {\\n        this.move(dx/d, dy/d, this.speed, dt);\\n        if (this.chargeCd <= 0 && d < 500 && d > 120) {\\n          this.charging = true;\\n          this.chargeT = 0.7;\\n          this.chargeDx = dx/d; this.chargeDy = dy/d;\\n          this.chargeCd = 3500;\\n          // telegraph burst\\n          for (let i = 0; i < 20; i++) {\\n            const a = Math.random()*TAU;\\n            game.particles.push(new Particle(this.x, this.y, {\\n              vx: Math.cos(a)*rand(80,160), vy: Math.sin(a)*rand(80,160),\\n              life: 0.4, r: rand(4,7), color:'#ffbd2e', fade:true\\n            }));\\n          }\\n        }\\n      }\\n      // summon on higher floors\\n      if (this.summonCd > 0) {\\n        this.summonCd -= dt * 1000;\\n        if (this.summonCd <= 0) {\\n          this.summonCd = 6000;\\n          const n = Math.min(3, game.floor - 1);\\n          for (let i = 0; i < n; i++) {\\n            const a = Math.random()*TAU;\\n            const sx = this.x + Math.cos(a)*60;\\n            const sy = this.y + Math.sin(a)*60;\\n            game.zombies.push(new Zombie(sx, sy, 'runner', false));\\n            for (let j = 0; j < 8; j++) {\\n              const aa = Math.random()*TAU;\\n              game.particles.push(new Particle(sx, sy, {\\n                vx:Math.cos(aa)*rand(40,100), vy:Math.sin(aa)*rand(40,100),\\n                life:0.4, r:rand(3,5), color:'#c73866', fade:true\\n              }));\\n            }\\n          }\\n        }\\n      }\\n    } else {\\n      // walker / runner / brute: chase\\n      let spd = this.speed;\\n      if (this.type === 'walker') spd *= 0.9 + 0.2*Math.sin(this.wobble);\\n      this.move(dx/d, dy/d, spd, dt);\\n    }\\n\\n    // walk phase\\n    const phaseMul = this.type==='runner' ? 16 : this.type==='brute' ? 6 : this.type==='boss' ? 5 : 10;\\n    this.walkPhase += dt * phaseMul;\\n\\n    // Separate from other zombies\\n    for (const other of game.zombies) {\\n      if (other === this) continue;\\n      const ox = other.x - this.x, oy = other.y - this.y;\\n      const od = Math.hypot(ox, oy);\\n      const minD = this.r + other.r;\\n      if (od > 0 && od < minD) {\\n        const push = (minD - od) * 0.5;\\n        this.x -= (ox/od) * push;\\n        this.y -= (oy/od) * push;\\n      }\\n    }\\n\\n    // Contact damage\\n    if (d < this.r + player.r && this.touchCd <= 0 && this.type !== 'exploder') {\\n      player.hurt(this.damage, this.x, this.y);\\n      this.touchCd = this.touchCdMax;\\n      // thorns\\n      if (player.thornsDmg > 0) {\\n        this.hurt(player.thornsDmg, this.x, this.y, false);\\n      }\\n      if (this.type === 'brute' || this.type === 'boss') {\\n        // knockback\\n        player.x += (dx/d) * -30;\\n        player.y += (dy/d) * -30;\\n      }\\n    }\\n  }\\n  move(vx, vy, spd, dt) {\\n    const nx = this.x + vx * spd * dt;\\n    const ny = this.y + vy * spd * dt;\\n    if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;\\n    if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;\\n    this.x = clamp(this.x, this.r, world.w - this.r);\\n    this.y = clamp(this.y, this.r, world.h - this.r);\\n  }\\n  hurt(dmg, bx, by, showNumber=true) {\\n    const wasAlive = this.hp > 0;\\n    this.hp -= dmg;\\n    this.hitFlash = 0.12;\\n    for (let i = 0; i < 6; i++) {\\n      const a = Math.random()*TAU;\\n      const s = rand(100, 280);\\n      game.particles.push(new Particle(bx, by, {\\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\\n        life: rand(0.2, 0.5), r: rand(3,6),\\n        color: this.type==='boss' ? '#ffbd2e' : '#8fcf3f', fade:true, gravity: 200,\\n      }));\\n    }\\n    if (showNumber) {\\n      game.damageNums.push({\\n        x: bx, y: by - this.r,\\n        life: 0.8, text: Math.ceil(dmg),\\n        vy: -60, color: dmg > 40 ? '#ff6b6b' : '#ffbd2e',\\n      });\\n    }\\n    sfx('hit');\\n    if (this.hp <= 0 && wasAlive) {\\n      this.die();\\n      return true;\\n    }\\n    return false;\\n  }\\n  die() {\\n    // Splat\\n    for (let i = 0; i < 18; i++) {\\n      const a = Math.random()*TAU;\\n      const s = rand(60, 280);\\n      game.particles.push(new Particle(this.x, this.y, {\\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\\n        life: rand(0.4, 0.9), r: rand(4,8),\\n        color: this.type==='boss' ? '#ffbd2e' : '#8fcf3f', fade: true, gravity: 300,\\n      }));\\n    }\\n    // Elite drops\\n    const dropRoll = Math.random();\\n    const eliteBonus = this.elite ? 0.15 : 0;\\n    if (dropRoll < 0.08 + eliteBonus) {\\n      game.powerups.push(new Powerup(this.x, this.y, 'health'));\\n    } else if (dropRoll < 0.14 + eliteBonus) {\\n      game.powerups.push(new Powerup(this.x, this.y, 'ammo'));\\n    }\\n    game.kills++;\\n    game.score += this.score;\\n    // vampire heal\\n    if (game.player.vampHeal > 0) {\\n      game.player.hp = Math.min(game.player.maxHp, game.player.hp + game.player.vampHeal);\\n    }\\n    game.player.gainXP(this.xp);\\n    shakeCam(this.type==='boss' ? 14 : this.type==='brute' ? 6 : 3);\\n    sfx('die');\\n  }\\n  explode() {\\n    // Trigger explosion, destroy self\\n    this.hp = 0;\\n    const base = ZTYPES.exploder;\\n    const eStats = enemyStats('exploder', game.floor, this.elite);\\n    game.explosions.push(new Explosion(this.x, this.y, base.boomR*(this.elite?1.2:1), eStats.damage, false));\\n    // just vanish into smoke, no splat particles\\n    for (let i = 0; i < 20; i++) {\\n      const a = Math.random()*TAU;\\n      const s = rand(80, 260);\\n      game.particles.push(new Particle(this.x, this.y, {\\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\\n        life: rand(0.3, 0.7), r: rand(5,10),\\n        color: choice(['#ff7b5c','#ffbd2e','#c73866']), fade:true,\\n      }));\\n    }\\n    game.kills++;\\n    game.score += this.score;\\n    game.player.gainXP(this.xp);\\n    sfx('boom');\\n  }\\n  draw() {\\n    const x = this.x, y = this.y;\\n    drawShadow(x, y, this.r);\\n\\n    // Elite aura\\n    if (this.elite) {\\n      const pulse = 0.5 + 0.3*Math.sin(performance.now()/200);\\n      ctx.fillStyle = `rgba(200,129,255,${0.15*pulse})`;\\n      ctx.beginPath(); ctx.arc(x, y, this.r*1.8, 0, TAU); ctx.fill();\\n      ctx.strokeStyle = `rgba(200,129,255,${0.5*pulse})`;\\n      ctx.lineWidth = 2;\\n      ctx.beginPath(); ctx.arc(x, y, this.r*1.4, 0, TAU); ctx.stroke();\\n    }\\n\\n    // Exploder fuse flash\\n    const fuseFlash = this.type==='exploder' && this.fusing &&\\n                     (Math.floor(performance.now()/80) % 2 === 0);\\n\\n    ctx.save();\\n    ctx.translate(x, y);\\n\\n    const flash = this.hitFlash > 0 || fuseFlash;\\n    const bodyColor = flash ? '#ffffff' : this.color;\\n\\n    // Legs\\n    const bob = Math.sin(this.walkPhase) * 3;\\n    ctx.fillStyle = '#1e3816';\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.ellipse(-this.r*0.4, this.r*0.7+bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.beginPath(); ctx.ellipse( this.r*0.4, this.r*0.7-bob, this.r*0.35, this.r*0.5, 0, 0, TAU); ctx.fill(); ctx.stroke();\\n\\n    ctx.rotate(this.angle);\\n    // Body\\n    ctx.fillStyle = bodyColor;\\n    ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();\\n\\n    // Shirt stripes\\n    ctx.strokeStyle = flash ? '#c8c8c8' : '#3a5a1f';\\n    ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.moveTo(-this.r*0.7, -this.r*0.2); ctx.lineTo(this.r*0.3, this.r*0.5); ctx.stroke();\\n    ctx.beginPath(); ctx.moveTo(-this.r*0.5, this.r*0.3); ctx.lineTo(this.r*0.1, -this.r*0.4); ctx.stroke();\\n\\n    // Head\\n    const hr = this.r * 0.68;\\n    ctx.fillStyle = flash ? '#ffffff' : lighten(this.color, 12);\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.arc(this.r*0.35, 0, hr, 0, TAU); ctx.fill(); ctx.stroke();\\n\\n    // Mouth / teeth\\n    ctx.fillStyle = '#1a0a0a';\\n    ctx.beginPath(); ctx.ellipse(this.r*0.7, hr*0.15, hr*0.35, hr*0.2, 0, 0, TAU); ctx.fill();\\n    ctx.fillStyle = '#ffffff';\\n    for (let i = 0; i < 3; i++) {\\n      ctx.beginPath();\\n      ctx.rect(this.r*0.55 + i*5, hr*0.15 - 3, 3, 6);\\n      ctx.fill();\\n    }\\n\\n    // Eye\\n    ctx.fillStyle = this.eye;\\n    ctx.beginPath(); ctx.arc(this.r*0.55, -hr*0.25, hr*0.22, 0, TAU); ctx.fill();\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2; ctx.stroke();\\n    ctx.fillStyle = '#ffffff';\\n    ctx.beginPath(); ctx.arc(this.r*0.58, -hr*0.30, hr*0.08, 0, TAU); ctx.fill();\\n\\n    // Boss horns\\n    if (this.type === 'boss') {\\n      ctx.fillStyle = '#f5e8c8';\\n      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n      ctx.beginPath(); ctx.moveTo(this.r*0.2, -hr*0.8); ctx.lineTo(this.r*0.4, -hr*1.4); ctx.lineTo(this.r*0.55, -hr*0.75); ctx.closePath(); ctx.fill(); ctx.stroke();\\n      ctx.beginPath(); ctx.moveTo(this.r*0.55, -hr*0.75); ctx.lineTo(this.r*0.85, -hr*1.2); ctx.lineTo(this.r*0.80, -hr*0.55); ctx.closePath(); ctx.fill(); ctx.stroke();\\n    }\\n\\n    // Spitter extra: jaw pouch\\n    if (this.type === 'spitter') {\\n      ctx.fillStyle = '#ffbd2e';\\n      ctx.beginPath(); ctx.arc(this.r*0.75, hr*0.35, 5, 0, TAU); ctx.fill();\\n      ctx.strokeStyle='#0f0a1a'; ctx.lineWidth=2; ctx.stroke();\\n    }\\n    // Exploder: glowing fuse\\n    if (this.type === 'exploder') {\\n      ctx.fillStyle = this.fusing ? '#ffffff' : '#ffbd2e';\\n      ctx.beginPath(); ctx.arc(0, -this.r*0.7, 4, 0, TAU); ctx.fill();\\n      if (this.fusing) {\\n        ctx.strokeStyle = '#ff6b6b';\\n        ctx.lineWidth = 3;\\n        ctx.beginPath(); ctx.arc(0, -this.r*0.7, 8, 0, TAU); ctx.stroke();\\n      }\\n    }\\n\\n    ctx.restore();\\n\\n    // HP bar for ALL zombies\\n    const bw = this.r * 2, bh = this.type==='boss' ? 8 : 4;\\n    const bx = x - bw/2;\\n    const by = y - this.r - (this.type==='boss' ? 14 : 10);\\n    if (this.type === 'boss') {\\n      drawHPBar(bx, by, bw, bh, this.hp / this.maxHp, '#c73866');\\n      // Boss name\\n      ctx.font = 'bold 14px Bangers, sans-serif';\\n      ctx.textAlign = 'center';\\n      ctx.lineWidth = 4; ctx.strokeStyle = '#0f0a1a';\\n      const name = this.elite ? 'ELITE BOSS' : 'BOSS';\\n      ctx.strokeText(name, x, by - 4);\\n      ctx.fillStyle = this.elite ? '#c881ff' : '#ffbd2e';\\n      ctx.fillText(name, x, by - 4);\\n    } else if (this.hp < this.maxHp || this.elite || this.type === 'brute') {\\n      drawHPBar(bx, by, bw, bh, this.hp / this.maxHp, this.elite ? '#c881ff' : '#c73866');\\n    }\\n  }\\n}\\n\\n// ------------- BULLET ------------------------------------------\\nclass Bullet {\\n  constructor(x, y, angle, speed, damage, opts={}) {\\n    this.x = x; this.y = y;\\n    this.vx = Math.cos(angle)*speed;\\n    this.vy = Math.sin(angle)*speed;\\n    this.angle = angle;\\n    this.life = opts.life || 0.7;\\n    this.damage = damage;\\n    this.dead = false;\\n    this.trail = [];\\n    this.pierce = opts.pierce || 0;\\n    this.piercedSet = new Set();\\n    this.explosive = !!opts.explosive;\\n    this.crit = !!opts.crit;\\n  }\\n  update(dt) {\\n    this.trail.push({x:this.x,y:this.y,a:1});\\n    if (this.trail.length > 6) this.trail.shift();\\n    this.x += this.vx*dt; this.y += this.vy*dt;\\n    this.life -= dt;\\n    if (this.life <= 0) { this.dead = true; return; }\\n    if (this.x<0||this.y<0||this.x>world.w||this.y>world.h) { this.dead = true; return; }\\n    if (collidesObstacle(this.x, this.y, 2)) {\\n      this.dead = true;\\n      if (this.explosive) game.explosions.push(new Explosion(this.x, this.y, 70, this.damage*0.6, true));\\n      for (let i=0;i<6;i++) {\\n        const a=Math.random()*TAU, s=rand(80,200);\\n        game.particles.push(new Particle(this.x, this.y, {\\n          vx:Math.cos(a)*s, vy:Math.sin(a)*s,\\n          life:0.2, r:rand(2,4), color:'#ffbd2e', fade:true,\\n        }));\\n      }\\n      return;\\n    }\\n    for (const z of game.zombies) {\\n      if (this.piercedSet.has(z)) continue;\\n      if (dist2(this.x, this.y, z.x, z.y) < z.r*z.r) {\\n        z.hurt(this.damage, this.x, this.y);\\n        this.piercedSet.add(z);\\n        if (this.explosive) game.explosions.push(new Explosion(this.x, this.y, 70, this.damage*0.6, true));\\n        if (this.pierce <= 0) {\\n          this.dead = true;\\n          return;\\n        } else {\\n          this.pierce--;\\n        }\\n      }\\n    }\\n  }\\n  draw() {\\n    for (let i=0; i<this.trail.length; i++) {\\n      const t=this.trail[i], a=(i+1)/this.trail.length;\\n      ctx.globalAlpha = a*0.6;\\n      ctx.fillStyle = this.crit ? '#ff6b6b' : '#ffbd2e';\\n      ctx.beginPath(); ctx.arc(t.x, t.y, 3*a, 0, TAU); ctx.fill();\\n    }\\n    ctx.globalAlpha = 1;\\n    ctx.save();\\n    ctx.translate(this.x, this.y); ctx.rotate(this.angle);\\n    ctx.fillStyle = this.crit ? '#ffdede' : '#fff6c9';\\n    ctx.strokeStyle = this.crit ? '#c73866' : '#e08e00';\\n    ctx.lineWidth = 2;\\n    ctx.beginPath(); ctx.ellipse(0, 0, this.crit?9:7, this.crit?4:3, 0, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.restore();\\n  }\\n}\\n\\n// ------------- ENEMY PROJECTILE --------------------------------\\nclass ZombieProjectile {\\n  constructor(x, y, angle, speed, damage) {\\n    this.x = x; this.y = y;\\n    this.vx = Math.cos(angle)*speed;\\n    this.vy = Math.sin(angle)*speed;\\n    this.life = 2.2;\\n    this.damage = damage;\\n    this.dead = false;\\n    this.phase = 0;\\n  }\\n  update(dt, player) {\\n    this.phase += dt * 12;\\n    this.x += this.vx*dt; this.y += this.vy*dt;\\n    this.life -= dt;\\n    if (this.life <= 0) { this.dead = true; return; }\\n    if (this.x<0||this.y<0||this.x>world.w||this.y>world.h) { this.dead = true; return; }\\n    if (collidesObstacle(this.x, this.y, 4)) { this.dead = true; return; }\\n    if (dist2(this.x, this.y, player.x, player.y) < (player.r+8)**2) {\\n      player.hurt(this.damage);\\n      this.dead = true;\\n      // splat\\n      for (let i=0;i<10;i++) {\\n        const a=Math.random()*TAU, s=rand(40,140);\\n        game.particles.push(new Particle(this.x, this.y, {\\n          vx:Math.cos(a)*s, vy:Math.sin(a)*s,\\n          life:0.4, r:rand(3,5), color:'#8fcf3f', fade:true,\\n        }));\\n      }\\n    }\\n  }\\n  draw() {\\n    const wobble = Math.sin(this.phase) * 2;\\n    ctx.save();\\n    ctx.translate(this.x, this.y);\\n    // slime ball\\n    ctx.fillStyle = '#8fcf3f';\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.arc(0, 0, 10 + wobble, 0, TAU); ctx.fill(); ctx.stroke();\\n    ctx.fillStyle = '#cedc4e';\\n    ctx.beginPath(); ctx.arc(-2, -3, 3, 0, TAU); ctx.fill();\\n    // drip trail (particles behind)\\n    if (Math.random() < 0.4) {\\n      game.particles.push(new Particle(this.x, this.y, {\\n        vx: rand(-20,20), vy: rand(-20,20),\\n        life: 0.4, r: rand(2,4), color:'#8fcf3f', fade:true, gravity: 80,\\n      }));\\n    }\\n    ctx.restore();\\n  }\\n}\\n\\n// ------------- EXPLOSION ---------------------------------------\\nclass Explosion {\\n  constructor(x, y, radius, damage, fromPlayer) {\\n    this.x = x; this.y = y;\\n    this.radius = radius;\\n    this.damage = damage;\\n    this.fromPlayer = fromPlayer;\\n    this.t = 0;\\n    this.life = 0.4;\\n    this.dead = false;\\n    this.hitSet = new Set();\\n    // visual burst\\n    for (let i = 0; i < 24; i++) {\\n      const a = Math.random()*TAU, s = rand(80, 360);\\n      game.particles.push(new Particle(x, y, {\\n        vx: Math.cos(a)*s, vy: Math.sin(a)*s,\\n        life: rand(0.3, 0.7), r: rand(5, 10),\\n        color: choice(['#ff6b6b','#ffbd2e','#fff6c9']), fade:true,\\n      }));\\n    }\\n    shakeCam(fromPlayer ? 4 : 10);\\n    sfx('boom');\\n  }\\n  update(dt, player) {\\n    this.t += dt;\\n    // Apply damage instantly at start\\n    if (this.t < dt * 2) {\\n      if (this.fromPlayer) {\\n        // damage zombies\\n        for (const z of game.zombies) {\\n          if (this.hitSet.has(z)) continue;\\n          if (dist2(this.x, this.y, z.x, z.y) < (this.radius + z.r)**2) {\\n            z.hurt(this.damage, this.x, this.y);\\n            this.hitSet.add(z);\\n          }\\n        }\\n      } else {\\n        // damage player\\n        if (dist2(this.x, this.y, player.x, player.y) < (this.radius + player.r)**2) {\\n          player.hurt(this.damage);\\n        }\\n      }\\n    }\\n    if (this.t >= this.life) this.dead = true;\\n  }\\n  draw() {\\n    const p = clamp(this.t / this.life, 0, 1);\\n    const r = this.radius * (0.3 + p * 0.9);\\n    ctx.globalAlpha = (1 - p) * 0.6;\\n    ctx.fillStyle = this.fromPlayer ? '#ffbd2e' : '#ff6b6b';\\n    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.fill();\\n    ctx.globalAlpha = (1 - p) * 0.9;\\n    ctx.strokeStyle = '#fff6c9';\\n    ctx.lineWidth = 4;\\n    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.stroke();\\n    ctx.globalAlpha = 1;\\n  }\\n}\\n\\n// ------------- PARTICLE ----------------------------------------\\nclass Particle {\\n  constructor(x, y, opts) {\\n    this.x=x; this.y=y;\\n    this.vx=opts.vx||0; this.vy=opts.vy||0;\\n    this.life = opts.life || 0.5;\\n    this.maxLife = this.life;\\n    this.r = opts.r || 3;\\n    this.color = opts.color || '#fff';\\n    this.fade = opts.fade;\\n    this.gravity = opts.gravity || 0;\\n    this.dead = false;\\n  }\\n  update(dt) {\\n    this.x += this.vx*dt; this.y += this.vy*dt;\\n    this.vx *= 0.92; this.vy *= 0.92;\\n    this.vy += this.gravity*dt;\\n    this.life -= dt;\\n    if (this.life <= 0) this.dead = true;\\n  }\\n  draw() {\\n    const alpha = this.fade ? clamp(this.life/this.maxLife, 0, 1) : 1;\\n    ctx.globalAlpha = alpha;\\n    ctx.fillStyle = this.color;\\n    ctx.beginPath();\\n    ctx.arc(this.x, this.y, this.r*(this.fade?alpha*0.6+0.4:1), 0, TAU);\\n    ctx.fill();\\n    ctx.globalAlpha = 1;\\n  }\\n}\\n\\n// ------------- POWERUP -----------------------------------------\\nclass Powerup {\\n  constructor(x, y, type) {\\n    this.x=x; this.y=y;\\n    this.type=type;\\n    this.r=16;\\n    this.phase=0;\\n    this.dead=false;\\n    this.life = 14;\\n  }\\n  update(dt, player) {\\n    this.phase += dt*3;\\n    this.life -= dt;\\n    if (this.life <= 0) this.dead = true;\\n    if (dist2(this.x, this.y, player.x, player.y) < (this.r+player.r)**2) {\\n      if (this.type==='health') {\\n        player.hp = Math.min(player.maxHp, player.hp + 30);\\n      } else if (this.type==='ammo') {\\n        player.ammo = player.maxAmmo;\\n        player.reloading = false;\\n      }\\n      this.dead = true;\\n      sfx('pickup');\\n      for (let i=0;i<10;i++) {\\n        const a=Math.random()*TAU;\\n        game.particles.push(new Particle(this.x, this.y, {\\n          vx:Math.cos(a)*rand(60,160), vy:Math.sin(a)*rand(60,160),\\n          life:0.5, r:rand(3,5),\\n          color:this.type==='health'?'#ff6b6b':'#ffbd2e', fade:true,\\n        }));\\n      }\\n    }\\n  }\\n  draw() {\\n    const yOff = Math.sin(this.phase)*4;\\n    ctx.fillStyle = this.type==='health' ? 'rgba(255,107,107,0.2)' : 'rgba(255,189,46,0.2)';\\n    ctx.beginPath(); ctx.arc(this.x, this.y+yOff, this.r*1.6, 0, TAU); ctx.fill();\\n    ctx.save();\\n    ctx.translate(this.x, this.y+yOff);\\n    ctx.fillStyle = this.type==='health' ? '#fff' : '#2a2f4a';\\n    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;\\n    ctx.beginPath(); ctx.rect(-this.r, -this.r, this.r*2, this.r*2);\\n    ctx.fill(); ctx.stroke();\\n    if (this.type==='health') {\\n      ctx.fillStyle = '#c73866';\\n      ctx.fillRect(-4, -10, 8, 20);\\n      ctx.fillRect(-10, -4, 20, 8);\\n    } else {\\n      ctx.fillStyle = '#ffbd2e';\\n      ctx.beginPath();\\n      ctx.moveTo(-8,-4); ctx.lineTo(0,-10); ctx.lineTo(8,-4); ctx.lineTo(8,8); ctx.lineTo(-8,8); ctx.closePath();\\n      ctx.fill(); ctx.stroke();\\n      ctx.fillStyle = '#0f0a1a';\\n      ctx.fillRect(-2, -2, 4, 8);\\n    }\\n    ctx.restore();\\n  }\\n}\\n\\n// ------------- ROOM GENERATION ---------------------------------\\nfunction generateObstacles(floor, isBoss) {\\n  const theme = FLOORS[Math.min(floor-1, 4)];\\n  const count = isBoss ? randi(3, 5) : randi(4, 7);\\n  const obs = [];\\n  let tries = 0;\\n  while (obs.length < count && tries < 200) {\\n    tries++;\\n    const type = choice(theme.obstacles);\\n    let w, h;\\n    if (type === 'crate')       { w = randi(80, 180); h = randi(80, 180); }\\n    else if (type === 'barrel') { w = h = randi(90, 130); }\\n    else                        { w = randi(180, 240); h = randi(90, 130); }\\n    const x = randi(140, world.w - w - 140);\\n    const y = randi(140, world.h - h - 140);\\n    // ensure not too close to center (player spawn) or other obstacles\\n    const centerD = Math.hypot((x + w/2) - world.w/2, (y + h/2) - world.h/2);\\n    if (centerD < 180) continue;\\n    let overlap = false;\\n    for (const o of obs) {\\n      if (x < o.x + o.w + 30 && x + w + 30 > o.x && y < o.y + o.h + 30 && y + h + 30 > o.y) {\\n        overlap = true; break;\\n      }\\n    }\\n    if (!overlap) obs.push({x,y,w,h,type});\\n  }\\n  return obs;\\n}\\n\\nfunction generateRoomSpawns(floor, roomIdx, isBoss) {\\n  const spawns = [];\\n  if (isBoss) {\\n    // Boss room: boss + minions (scales per floor)\\n    spawns.push({ type:'boss', elite: floor === 5, delay: 0 });\\n    const minionCount = Math.min(2 + floor, 8);\\n    const pool = enemyPool(floor).filter(t => t !== 'brute' && t !== 'boss');\\n    for (let i = 0; i < minionCount; i++) {\\n      spawns.push({ type: choice(pool), elite: false, delay: 1500 + i * 500 });\\n    }\\n    return spawns;\\n  }\\n  // Normal room: number of enemies scales with floor and room\\n  const baseCount = 5 + roomIdx + Math.floor(floor * 1.5);\\n  const pool = enemyPool(floor);\\n  const eliteChance = floor >= 2 ? 0.10 + floor * 0.03 : 0;\\n  for (let i = 0; i < baseCount; i++) {\\n    const type = choice(pool);\\n    const elite = (floor >= 2) && Math.random() < eliteChance && type !== 'boss';\\n    // Stagger delay: faster early, slower for tougher types\\n    const baseDelay = type === 'brute' ? 500 : type === 'exploder' ? 350 : type === 'spitter' ? 260 : type === 'runner' ? 180 : 280;\\n    spawns.push({ type, elite, delay: i * baseDelay });\\n  }\\n  return spawns;\\n}\\n\\nfunction enterRoom(floor, roomIdx) {\\n  game.floor = floor;\\n  game.roomIdx = roomIdx;\\n  game.isBossRoom = (roomIdx === COMBAT_ROOMS);\\n  game.obstacles = generateObstacles(floor, game.isBossRoom);\\n  game.zombies = [];\\n  game.bullets = [];\\n  game.ezBullets = [];\\n  game.explosions = [];\\n  game.particles = [];\\n  game.damageNums = [];\\n  game.powerups = [];\\n  // Player \n…[truncated — 84118 chars total]"
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
  "tool_use_id": "toolu_01Fyeps1LBpownrP6bQk1vjY",
  "name": "create_file",
  "content": [
    {
      "type": "text",
      "text": "File created successfully: /home/claude/zombie_roguelike.html",
      "uuid": "cd946c25-2d73-4e8f-ae9b-a6f04090d671"
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
    "text": "File created successfully: /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 Let me quickly scan through the JavaScript to catch any syntax errors or logical issues before I share this.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T15:22:33.795368Z",
  "stop_timestamp": "2026-04-18T15:22:36.230492Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Rz3HdqH8F4BxoevGPAjk1K",
  "name": "bash_tool",
  "input": {
    "command": "cd /home/claude && node -e \"\nconst fs = require('fs');\nconst html = fs.readFileSync('zombie_roguelike.html', 'utf8');\nconst match = html.match(/<script>([\\s\\S]*?)<\\/script>/);\nif (match) {\n  const code = match[1];\n  try {\n    new Function(code);\n    console.log('✓ JavaScript parses cleanly');\n    console.log('Script length:', code.length, 'chars');\n    console.log('Total file size:', html.length, 'chars');\n  } catch(e) {\n    console.log('✗ Syntax error:', e.message);\n    // Show context\n    const lineMatch = e.message.match(/line (\\\\d+)/);\n    console.log(e.stack.split('\\\\n').slice(0,5).join('\\\\n'));\n  }\n}\n\"",
    "description": "Verify JS syntax"
  },
  "message": "Verify JS syntax",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"cd /home/claude && node -e \\\"\\nconst fs = require('fs');\\nconst html = fs.readFileSync('zombie_roguelike.html', 'utf8');\\nconst match = html.match(/<script>([\\\\s\\\\S]*?)<\\\\/script>/);\\nif (match) {\\n  const code = match[1];\\n  try {\\n    new Function(code);\\n    console.log('\\u2713 JavaScript parses cleanly');\\n    console.log('Script length:', code.length, 'chars');\\n    console.log('Total file size:', html.length, 'chars');\\n  } catch(e) {\\n    console.log('\\u2717 Syntax error:', e.message);\\n    // Show context\\n    const lineMatch = e.message.match(/line (\\\\\\\\d+)/);\\n    console.log(e.stack.split('\\\\\\\\n').slice(0,5).join('\\\\\\\\n'));\\n  }\\n}\\n\\\"\"}"
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
  "tool_use_id": "toolu_01Rz3HdqH8F4BxoevGPAjk1K",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"✓ JavaScript parses cleanly\\nScript length: 62482 chars\\nTotal file size: 81134 chars\\n\",\"stderr\":\"\"}",
      "uuid": "a3e85562-15ef-4206-b8d5-21bc9c2f6b23"
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
    "json_block": "{\"returncode\":0,\"stdout\":\"✓ JavaScript parses cleanly\\nScript length: 62482 chars\\nTotal file size: 81134 chars\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 I'm tracing through the player constructor to verify the initialization order—specifically checking that the `maxHp` getter is properly resolved before `hp` gets assigned, since it depends on the base max HP value and the HP upgrade multiplier.

Looking at the upgrade flow now: when a zombie dies and grants XP, it triggers a level up which increments `pendingLevelUps`, and the main loop detects this to show the upgrade choice UI. Once the player selects an upgrade, `pendingLevelUps` decrements and the game resumes—but I need to confirm the state machine prevents player updates while the upgrade choice is open, which it does through the `game.state === 'playing'` check at the top of each frame.

For the boss room on floor 1, the summon cooldown is only applied when the floor is 2 or higher, so early bosses won't spawn minions. The exploder enemy works as intended too—it runs up to the player, the fuse triggers when close enough, and the explosion deals damage in a radius that catches the player.

Now I'm wondering about what happens when the player levels up multiple times in quick succession, like from a boss dropping a huge amount of XP at once—`pendingLevelUps` could stack up and show multiple upgrade choices in sequence.

But there's a potential timing issue: if leveling up happens right as a room is being cleared, the game state transitions from 'cleared' back to 'playing' through the `clearRoomAndAdvance` function, which uses a setTimeout before entering the next room. During that window, the game state is still 'playing' but all enemies and spawn queues are empty, so I need to check if `pendingLevelUps` could trigger during this transition and cause unexpected behavior.

Actually, looking closer at the flow: when the player levels up on the final kill, `showUpgradeChoice` sets the state to 'upgradeChoice', and then the setTimeout fires to set up the next room. The issue is that `enterRoom` only updates `roomState` to 'active' but doesn't touch `game.state`, so the player would be viewing the upgrade menu while the world is already loaded behind it. But that's actually fine because `resumeFromUpgrade` handles resetting the state once the player makes their choice. The room transition happens behind the modal, which is fine—when the player closes the upgrade choice, they're already in the next room. Now I'm checking the implementation details: the flash methods are defined, the damage number filtering works correctly, the spitter's range check is in place, and the boss naming logic handles elite bosses properly.

I'm also verifying the collision system—with the player radius at 18 and minimum obstacle spacing at 30, there shouldn't be any gaps where the player can get trapped. The menu scene correctly initializes the zombie with `elite: false` for the draw call, and the HP bar conditionally displays based on whether the entity has taken damage.

I need to check if `pendingLevelUps` could trigger repeatedly on the same frame and cause issues with the upgrade choice state.

Looking at the flow: when a zombie dies and triggers a level-up in the same frame that another zombie kills the player, both `gainXP` and `hurt` execute. The player's state switches to 'dead' and calls `showRunEnd`, but then at the end of the loop iteration, the code checks `pendingLevelUps` — which could conflict with the dead state.

Actually, since state is already 'dead', the upgrade choice won't trigger, so the game-over takes priority. That's correct.

One more edge case to verify: if all upgrades hit their max levels, the `choices` array could theoretically be empty. But looking at the upgrade list, three upgrades have no caps (damage, HP, vampire), so `choices.length` will always have at least those three options available.

The HP bar display handles upgrades correctly too—when the player gains HP from an upgrade, I'm capping the immediate heal at the new max, and any remaining healing happens naturally through regeneration over time.

Now I'm doing a smoke test to verify the game loop initializes properly on first frame: the menu loads, then when the player starts a run, the game state transitions to playing and the first room generates with obstacles and a spawn queue for zombies.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T15:23:32.604808Z",
  "stop_timestamp": "2026-04-18T15:23:33.706875Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_019zJMUEAnW1aW9FcBJFMFEF",
  "name": "bash_tool",
  "input": {
    "command": "cp /home/claude/zombie_roguelike.html /mnt/user-data/outputs/zombie_roguelike.html && echo \"Final: $(wc -c < /mnt/user-data/outputs/zombie_roguelike.html) bytes, $(wc -l < /mnt/user-data/outputs/zombie_roguelike.html) lines\"",
    "description": "Copy to outputs"
  },
  "message": "Copy to outputs",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"cp /home/claude/zombie_roguelike.html /mnt/user-data/outputs/zombie_roguelike.html && echo \\\"Final: $(wc -c < /mnt/user-data/outputs/zombie_roguelike.html) bytes, $(wc -l < /mnt/user-data/outputs/zombie_roguelike.html) lines\\\"\"}"
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
  "tool_use_id": "toolu_019zJMUEAnW1aW9FcBJFMFEF",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"Final: 81191 bytes, 2342 lines\\n\",\"stderr\":\"\"}",
      "uuid": "4f1c4b3c-bd0c-4c0b-b7f2-bf07303777f8"
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
    "json_block": "{\"returncode\":0,\"stdout\":\"Final: 81191 bytes, 2342 lines\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019da126-ee5d-7148-a537-f13cfe9fb76d",
  "updated_at": "2026-04-18T15:23:34.922258Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019da126-ee5d-7cb3-8b86-75c2a9f426d1"
}
```

</details>

### 5. assistant — 2026-04-18T15:24:51.808184Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I'm realizing the roguelike file was already presented to the user earlier, so they likely resent their message for a different reason—maybe they want me to clarify what changed or provide additional details about the implementation.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-18T15:24:32.564308Z",
  "stop_timestamp": "2026-04-18T15:24:32.905471Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SvbdoFEvRjnHroT4RJgCmT",
  "name": "present_files",
  "input": {
    "filepaths": [
      "/mnt/user-data/outputs/zombie_roguelike.html"
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
        "['/mnt/user-data/outputs/zombie_roguelike.html']"
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
  "tool_use_id": "toolu_01SvbdoFEvRjnHroT4RJgCmT",
  "name": "present_files",
  "content": [
    {
      "type": "local_resource",
      "file_path": "/mnt/user-data/outputs/zombie_roguelike.html",
      "name": "zombie roguelike",
      "mime_type": "text/html",
      "uuid": "c9c83ece-1a99-4a13-af61-bc262bcc659b"
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

Here's the roguelike rebuild. Key changes against your three requirements:

**1. Roguelike structure**
- **Runs, not levels**: 5 floors × 4 rooms (3 combat + 1 boss) = 20 rooms per run. Permadeath — die and start fresh from floor 1.
- **Procedural rooms**: obstacles are randomly placed each room, enemy composition is rolled from a floor-specific pool.
- **XP + level-up choices**: kills give XP, each level-up pauses the game and offers 3 random upgrades from a pool of 15 (Boomstick, Sharpshooter, Piercing Rounds, Vampire, Thorns, Explosive Rounds, etc.). Most stack.
- **Build variety**: the upgrades meaningfully reshape combat — piercing + damage is a sniper build, double-tap + fire-rate is a shotgunner, vampire + thorns is a bruiser.
- **Dash as a base ability** (Space, 1.4s cooldown, i-frames) — gives the moment-to-moment skill ceiling roguelikes need.

**2. HP bars**
- **Player HP bar over head** (green, small) in addition to the HUD bar.
- **Every zombie** shows a red HP bar once damaged; brutes and elites always show one; bosses show a prominent bar with their name label.

**3. Monster properties (standard roguelike archetypes)**
- **Walker** — baseline melee, moderate HP/damage (floor 1+)
- **Runner** — fast, fragile swarmer (floor 1+)
- **Spitter** — ranged kiter, keeps distance 280px and shoots slime projectiles, strafes (floor 2+)
- **Exploder** — suicide rusher, triggers 600ms fuse when close, 95px AOE (floor 3+)
- **Brute** — tank, slow, knockback on contact (floor 2+)
- **Boss** — floor-gated, charges every 3.5s, summons minions from floor 2+
- **Elite modifier** — 10–25% chance from floor 2, ×2 HP / ×1.5 damage / ×3 XP, purple aura ring
- **Scaling** — per floor: HP ×1.25, damage ×1.15

A note on the evidence standard in your preferences: the scaling numbers, room counts, and enemy stats above are **design parameters I chose** (documented in the `ZTYPES`, `FLOORS`, and `enemyStats()` code), not facts from an external source. If you want me to align them with a specific published roguelike (Binding of Isaac, Hades, Brotato, Vampire Survivors), let me know which and I'll recalibrate against that reference.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "d1397e03-1eff-4574-9fa6-99af0f49c87e",
  "updated_at": "2026-04-18T15:24:51.808184Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019da126-ee5d-7148-a537-f13cfe9fb76d"
}
```

</details>

### 6. human — 2026-04-19T01:19:35.360707Z

Amendment:
Let the game auto-stop 1 second before upgrade option cards appears. And let me confirm the option  with mouse or `Enter` instead of direct confirmation.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019da352-4f73-7a66-8e2a-78f63a7cbc2e",
  "updated_at": "2026-04-19T01:19:35.360707Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "d1397e03-1eff-4574-9fa6-99af0f49c87e"
}
```

</details>

### 7. assistant — 2026-04-19T01:28:48.227721Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user wants two changes: auto-stop the game one second before upgrade cards appear to create a pause transition, and add a selection plus confirmation flow where clicking a card selects it, then the player confirms with either a mouse click or Enter key rather than the card applying the upgrade immediately.

For the interaction model, I'm thinking arrow keys or number keys (1/2/3) or mouse hover can select a card, and then Enter or a click confirms the selection. I need to add the one-second freeze before the cards appear as well.

When a level-up is detected, I'll pause the game state, display a "LEVEL UP!" banner for a second while everything is frozen, then transition to showing the upgrade choice overlay with the first card pre-selected.

For the upgrade UI, I need to separate selection from confirmation: hovering or using arrow keys selects a card visually, then clicking that card or pressing Enter applies the upgrade. This prevents accidental immediate selections and gives players a clear two-step interaction model. ects the card (showing a visual highlight and "CLICK AGAIN OR PRESS ENTER" prompt), a second click on the same card or pressing Enter confirms the selection, while clicking a different card switches which one is selected. Arrow keys let you navigate between cards, and I'll auto-select the first card by default so users can confirm immediately if they want.

Now I'm implementing this interaction pattern...

For the level-up flow, I need a 1-second pause when the level-up is detected to show a pulsing "LEVEL UP!" banner and freeze the game, then display the upgrade choice overlay. The selection mechanics work like this: the first card starts selected by default, hovering or using arrow keys (or number keys 1/2/3) changes which card is highlighted, clicking a card either selects it or confirms if it's already selected, and pressing Enter confirms whatever's currently selected. The selected card gets a distinct visual treatment with a brighter border and glow effect plus a hint text. yboard: arrow keys change selection, Enter confirms.

So the flow is: 1-second pause, cards appear with the first one highlighted, then users can navigate with arrows or mouse hover and confirm with Enter or click. This gives them time to process and makes the confirmation explicit rather than immediate.

Actually, requiring two clicks per level-up might be tedious. Let me reconsider what the user actually asked for—they want to confirm with mouse or Enter, not apply changes directly. A single click to select combined with Enter to confirm, or letting a click on a card both select and confirm it if it's already selected, feels like the right balance between clarity and friction.

I'll go with the game-like pattern: arrow keys and mouse hover for selection, then Enter or click to confirm. I'm settling on a two-step confirmation flow: the "LEVEL UP!" message flashes, then the cards appear with the first one already highlighted. Users can navigate with arrow keys or number keys, hover to change selection, or click an unselected card to highlight it—and then click again or press Enter to confirm their choice. This eliminates the instant confirmation problem while keeping both mouse and keyboard workflows intuitive.

Now I'm working through the implementation details, starting with adding a `'levelup_pending'` state that triggers when there are pending level-ups, showing the banner and countdown before revealing the upgrade options.

Implementing the state machine and timing logic... I need to refactor the level-up flow so there's a pause state before showing upgrade choices, giving the player time to see the "LEVEL UP!" banner before being presented with options. I'm setting up a transition where the game enters a `levelup_pending` state that counts down before triggering the upgrade choice overlay.

For the upgrade selection itself, I'm tracking which card the player has highlighted with `selectedChoice` and storing the available upgrades in `currentChoices`. Then I'll wire up keyboard input to navigate between cards and confirm a selection.

Adding keyboard event handling... Writing event handlers... ear selection feedback

Pattern B: Click selects, second click/Enter confirms
- Mouse user: clicks once to select (highlights), clicks again to confirm
- Keyboard user: arrows navigate, Enter confirms
- This is a full two-step click process

The user said "instead of direct confirmation" — I think this pushes me toward Pattern B. A single click currently applies. They want more than one action needed.

But Pattern B can feel clunky (two clicks per upgrade). Let me compromise:

Pattern C: First card pre-selected. Click on selected = confirm. Click on unselected = select.
- If the user just wants the first card: one click on it confirms
- If they want a different card: click to select, click again to confirm
- Enter always confirms the current selection
- Arrow keys navigate

This is cleaner. Let me go with Pattern C.

Actually, I'm realizing hover should move the selection too — otherwise mouse-only users need two clicks for any card that isn't first. So maybe hovering acts as the selection step and clicking confirms what's currently hovered. That brings me back to Pattern A, where the selection and confirmation are distinct actions even for mouse users.

I'm going to combine both approaches: hovering or arrow keys select (with a strong visual indicator, not just a subtle hover effect), and clicking or pressing Enter confirms. The first card starts pre-selected when the overlay opens. This gives keyboard and mouse users a consistent mental model while keeping the interaction flexible. The user wants two distinct steps: pick an option, then confirm it. So clicking a card should select it with a strong highlight and a "PRESS ENTER" prompt, and then either pressing Enter or clicking again confirms the choice. Hovering shows a subtle effect to distinguish it from selection. I'm settling on a two-step interaction pattern: click to select a card (with strong highlighting), then click again or press Enter to confirm. This matches what the user is asking for—they want to move away from direct one-click confirmation. I'll implement this with a pending state to track the selected card and add the one-second pause they mentioned.

Setting up the implementation now...

I need to add the visual styling for the selected upgrade card with a strong highlight and hint text, plus update the banner to display "LEVEL UP!" during that one-second pause. I should also make sure ESC doesn't interfere with the upgrade choice state, and verify that the canvas clicks are properly blocked during the pause—the overlay's `pointer-events: auto` should handle that. During the `levelup_pending` state, the game loop's state check will prevent any shooting actions even if the canvas receives input, so that's covered.

Now I'm adding a visual flash or hint during the pause to build anticipation before showing the upgrade choices. Let me refactor the upgrade choice function...

Modifying the upgrade display code... Writing the upgrade choice handler... Building the upgrade cards...

Now I'm setting up the click handlers so players can select an upgrade by clicking the card again, or navigate with arrow keys using the change selection function. When they confirm their choice, it applies the upgrade and clears the pending state. Writing keyboard handler... I need to avoid hijacking the "a" key since it's already used for WASD movement, so I'll stick with arrow keys and number keys for selection instead. I'll also allow mouse clicks on cards to select them. The state check already prevents player movement updates during upgrade selection, so I don't need to manually clear the keys object. Now I'm setting up the main game loop to detect when level-ups are pending and trigger the upgrade choice state.

Still writing game state logic... I'm thinking through where to trigger the level-up banner and sound effect—it makes sense to keep both in gainXP where the level actually happens, then just have the state transition freeze the game silently. The xpFlash animation is already firing on level up, so I can layer the banner call on top of that for a cohesive effect. It looks like the existing code already handles multiple level-ups the same way—showing just one SFX and flash regardless. So I'll follow that pattern: trigger the banner in gainXP when leveled is true, then in the main loop, transition to levelup_pending state and set a timer before showing the upgrade choices after 1 second.

Writing the implementation... Writing card styles... I'm working through the interaction model for card selection—whether clicking should select, confirm, or both. The two-step approach makes more sense: clicking a card selects it if it's not already selected, and clicking an already-selected card confirms the choice. The first card will be auto-selected to get things started.

For keyboard, arrow keys or number keys move the selection, and Enter confirms. For mouse, it's click to select, click again to confirm. I'm keeping hover as just a subtle visual effect without changing the actual selection state, so the user has a clear mental model: hover shows what's available, selection shows what's picked, and clicking or pressing Enter finalizes the choice. I'm realizing the auto-selection of the first card creates an issue—clicking it would feel like a direct confirmation rather than a deliberate two-step choice. Maybe I should leave no card selected initially, so the user has to actively pick one first. and the cards are already rendered with selection. So the user has no preview during the 1s — they just see the frozen game world.

Maybe I should show the cards during the 1s pause, but make them non-clickable until the pause ends? That way the user can see their options during the pause, but can't commit.

Or maybe: show the cards during the pause, faded/disabled, then enable them after 1s.

Actually, I'm overcomplicating this. The user's request is clear: stop the game, wait 1 second, then show the cards. The cards appear after the pause, not during it. So the flow is straightforward — freeze, pause, then present the options for confirmation.

For the interaction pattern, I'll keep it simple: auto-select the first card so keyboard users can immediately press Enter, use arrow keys to navigate between cards, and let mouse users click to select and click again to confirm.

I'll add a clear on-screen prompt telling players to click the selected card or press Enter, and now I'm ready to start implementing this.

I need to be careful about the mouse state when transitioning between game states — specifically, if the player clicks to confirm an upgrade selection, that mousedown event could linger and trigger an auto-shot when returning to gameplay. The canvas mousedown listener sets a flag, but since overlay clicks don't register on the canvas itself, the flag should stay false. Let me trace through what happens when the player clicks back over the canvas after confirming.

Now I'm deciding where to place the confirmation hint text in the UI — either below the upgrade cards within the overlay or positioned at the top.

I'll place it below the cards and create a footer section that displays the keyboard and mouse controls for selecting and confirming an upgrade choice.

Building the hint UI...

Now I'm thinking through the timing of the level-up sequence — when the banner triggers its 2.4-second animation, it'll be playing behind the overlay that appears with the cards, so the blur and dark background will mostly obscure it anyway.

I already have the xpFlash effect in place when leveling up, so I just need to add a showBanner call to display "LEVEL UP!" with the upgrade prompt text right there in the gainXP function.

Adding banner call... I'm working through the implementation now, making the edits with string replacements to the HTML file. I need to clarify the timing for the level-up sequence: the "LEVEL UP!" banner displays immediately when XP is gained, then there's a 1-second pause before the upgrade cards appear, so I'll make that pause visually prominent with a pulsing effect or build-up animation during that waiting period.

Modifying the keydown handler...

Now I'm adding state-specific handling for the upgrade choice screen—intercepting Enter to confirm the selection, arrow keys to navigate between options, and number keys as quick shortcuts to pick a specific upgrade.

I realize I should also clear the keys state when exiting the upgrade choice to prevent any lingering key presses from carrying over into normal gameplay.

Wait, actually arrow keys never get added to the keys object during upgrade choice because of the early return in the handler. But I'm second-guessing myself on whether WASD could get stuck—if a player presses W before the level up triggers and holds it through the transition, the keyup event should still fire normally, so there shouldn't be any stuck keys to worry about.

Let me trace through the keyup handler logic: it always sets keys to false regardless of game state, which is good. If W was held before the level up, it stays true during the frozen state, then when the player releases it, keyup fires and sets it to false. If they press W again during the upgrade choice, the keydown returns early so keys['w'] stays false. When the game resumes, W won't be stuck in a pressed state.

Actually, I think a cleaner approach is to keep the keys object updating normally throughout the upgrade choice—since the player update is blocked anyway, it won't matter. I'll just intercept the specific keys I need for navigation and confirmation.

Writing the revised key handler... I'm realizing I should also suppress keyboard input during the `levelup_pending` state to prevent the player from dashing, reloading, or shooting during that one-second freeze. For mouse input, I need to make sure shooting is blocked during both `levelup_pending` and `upgradeChoice` states, though the player update logic already handles most of this since it only runs when the game is actively playing.

Now I'm ready to make the actual code changes. I need to add CSS styles for the selected upgrade card state with a scale transform and enhanced shadow effect.

Adding selected card styles... Still writing styles... Adding the choice footer UI... I'm checking the current game state object to see what fields already exist, then I'll add the new properties for the level-up pause timer, selected choice index, and available choices array. After that, I need to refactor the upgrade choice display function and create helper functions to support the new UI flow.

Building the upgrade card UI... I'm setting up the upgrade choice flow by rolling three random upgrades, then rendering them as clickable cards that let the player select which upgrade to apply before continuing the game.

Building the choice cards... Building the upgrade card interaction system...

I'm adding a sound effect when the selection changes, then implementing the confirmation handler that applies the selected upgrade, decrements the pending level-ups counter, and either shows the next upgrade choice or resumes gameplay depending on whether there are more upgrades to choose.

Now I'm updating the keyboard event listener to intercept arrow keys and Enter during the upgrade choice state... Writing event handler logic... I'm looking at the main game loop structure—it calculates delta time, updates game logic when playing, then renders the scene and requests the next frame.

I've refactored the level-up pending handler to work outside the main conditional, and I'm making sure the state variables get properly reset. The levelupPauseT gets initialized in the game object and resets when the upgrade choice displays, so I don't need to worry about manually resetting it between runs. Same with selectedChoice and currentChoices—they're set fresh each time showUpgradeChoice is called. I should also make sure quitToMenu clears any stuck upgrade state, though the overlay prevents input during that phase anyway.

When resumeFromUpgrade() is called, it just hides the overlays and returns to playing state while preserving the keys state from before the pause. If the player was holding a movement key when the level-up triggered, they'll continue moving once they confirm the upgrade. The keydown handler returns early during upgrade choice, so new key presses don't register—preventing unwanted queued inputs—but keys that were already held before the pause remain true and carry through.

I should add preventDefault for the space key during upgrade choice to avoid any accidental page scrolling, and only allow Enter and arrow keys through during that state. I'm just going to block space to prevent accidental scrolling. Now I need to apply all these edits, and I'm also thinking about the level-up banner — it could potentially overlap with room entry or clear banners if the timing lines up, though in practice XP comes from kills rather than room transitions.

Looking at the sequence: when the last zombie dies, gainXP fires and shows 'LEVEL UP!', but then the main loop immediately detects the room is cleared and shows 'ROOM CLEAR' instead, which overwrites the first banner since they use the same element. The level-up overlay still appears a second later, so there's no real conflict, just the room clear message takes precedence visually.

Then I'm realizing the setTimeout from clearRoomAndAdvance will fire even while the user is in the upgrade choice state, since timers don't respect game state — so enterRoom could get called while the game is frozen, which might cause issues. Ah, I see—there's actually a state guard in the setTimeout that checks if the game state is still 'playing' or 'cleared' before advancing. So if the user is stuck on the upgrade screen, the enterRoom call won't fire, which prevents the spawn queue from starting prematurely.

But here's the issue: after the user confirms their upgrade and the state switches back to 'playing', that setTimeout has already passed, so enterRoom never gets called. The player ends up stuck in the cleared room with no way forward.

This looks like a pre-existing bug that my changes might be exposing more frequently. Let me trace through the original flow: level up triggers, state becomes upgradeChoice, user picks an upgrade, state goes back to playing, but by then the setTimeout window has closed and the room never advances.

I think the cleanest solution is to add a flag that tracks when a room advance is pending—if the setTimeout fires while we're in upgradeChoice, I'll reschedule it or queue the action to happen once we return to the playing state.

Setting up a pending room advance flag... I see the issue now — the setTimeout keeps running even when the user is on the upgrade screen, so if a level up happens right after clearing a room, the timer fires while they're still choosing upgrades and skips the room advance. I should use a game-state-aware timer instead of setTimeout to handle this properly.

Implementing transition timer... Implementing the state-aware timer now. I need to make sure the transition only decrements during 'playing' state, while pausing during levelup_pending and upgradeChoice so the room advance gets delayed appropriately. Refactoring the room clear function... Writing game logic... the transition timer stays frozen while the upgrade menu is showing, then resumes once the player makes their choice and returns to playing. Now I'm going through the implementation checklist: updating the CSS for the selected card styling and choice footer, modifying the HTML structure, and initializing all the new game state properties like the pause timer, selected choice, available choices, and transition timer.

I need to be careful with the string replacements to avoid mismatches, so I'll tackle each change methodically. I'm also considering whether to add mouseenter handling so hovering over a card changes the selection, not just clicking it—that would make the interaction feel more responsive.

Implementing the changes now... I'm settling on a single, clear interaction pattern: click selects a card if it's not already selected, or confirms if it is selected; Enter key confirms the currently selected card; and the first card starts pre-selected so users have immediate visual feedback about what they're choosing. step for non-default choices.

**Option Y: Hover/click both select, click-again to confirm**
- Hover: changes selection
- Click: if selected, confirm; else select (but hover already would've selected)
- So effectively: hover to preview, click to confirm
- Enter: confirm
- Arrow/number: select

With Option Y, if user hovers over a card, it's selected. If they click it, confirms. Feels like "direct" to me, just with hover preview.

Unless hover is delayed (e.g., requires 200ms hover to commit selection). Too complex.

Let me just go with **Option X** (click-only selection).

Wait, one more thought: if the user uses keyboard to navigate (arrow keys) and then mouse to click somewhere, the mouse click on a non-selected card just selects it. They need to click again. This feels right — mouse interaction is explicit.

OK Option X it is.

Actually, let me reconsider. In many card-based games like Hearthstone, you can hover to preview details but clicking is the definitive action. For an upgrade selection where the user wants an intermediate step before confirmation, the cleanest approach is click to select, then either click again or press Enter to confirm.

Now I'm thinking through the pre-selection issue: the first card starts selected, so clicking it immediately confirms. That's technically "direct confirmation" for the default, but the user will see the selection state before clicking, so the visual feedback is there. Alternatively, I could leave nothing pre-selected so every first interaction is a selection, then confirmation is always a second action. That's more consistent but slightly slower. Let me figure out what makes sense with the mouse-or-Enter confirmation pattern when something's already pre-selected.

If the first card is pre-selected, clicking it confirms and pressing Enter also confirms the pre-selected choice. That actually flows really well for the default case. For any other card, the first click selects it (showing the new selection), then a second click or Enter confirms. So it's one click for the default, two for alternatives—that feels natural and efficient.

I'm going to stick with pre-selection and now focus on making the selected card visually distinct with a strong outline.

For the selected state, I'll use the accent color with a larger scale, a brighter glow, and maybe a white inner ring to make it pop. I don't think I need a "CONFIRM" label on the card itself—the footer hint should be enough guidance.

I've been overthinking this. Time to actually write the code. I also need to make sure I handle the transitionTarget bug properly by clearing it when the game initializes and when starting a new run.

Writing the implementation... Adding more initialization variables...

</details>

Two changes makes sense. Let me walk through the design decisions so you can sanity-check before I code:

**1. Pre-pause (1 second before cards)**
When a level-up happens, I'll freeze the game immediately (entities stop updating), show a "LEVEL UP! CHOOSE YOUR PATH" banner, and only after 1 full second do the cards slide in. This also means the room-clear transition timer will pause during this window — right now it's a `setTimeout` that runs regardless of game state, which I'll convert to a game-tick-driven timer so it correctly waits out the upgrade screen.

**2. Select-then-confirm pattern**
- First card auto-selected on appear (strong outline + accent glow)
- **Select via**: click non-selected card, ← → arrows, or 1/2/3 keys
- **Confirm via**: click the currently selected card, or Enter
- Numbered badges on each card make keyboard mapping obvious
- Keyboard-flow hint at the bottom: `← → / 1-3` select · `ENTER / CLICK` confirm

The tradeoff worth flagging: since the first card is pre-selected, clicking the first card once still confirms (one click). Clicking a non-default card always takes two interactions (click to select → click/Enter to confirm). If you want zero pre-selection (always 2 clicks for mouse), say the word and I'll change it.

Making the edits now.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:25:42.773665Z",
  "stop_timestamp": "2026-04-19T01:25:53.964807Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SW2cHm5SjKnMTcfCGEybcR",
  "name": "str_replace",
  "input": {
    "description": "Add selected-card CSS, num badge, and confirmation hint styles",
    "path": "/home/claude/zombie_roguelike.html",
    "old_str": "  .upgrade-card:hover {\n    transform: translateY(-10px) rotate(-1deg);\n    box-shadow: 0 16px 0 var(--c-dark), 0 0 30px var(--accent-color);\n  }",
    "new_str": "  .upgrade-card:hover {\n    transform: translateY(-10px) rotate(-1deg);\n    box-shadow: 0 16px 0 var(--c-dark), 0 0 30px var(--accent-color);\n  }\n  .upgrade-card.selected {\n    transform: translateY(-14px) scale(1.04);\n    box-shadow: 0 22px 0 var(--c-dark), 0 0 60px var(--accent-color);\n    outline: 4px solid var(--accent-color);\n    outline-offset: 2px;\n    animation: selPulse 1.2s ease-in-out infinite;\n  }\n  @keyframes selPulse {\n    0%, 100% { box-shadow: 0 22px 0 var(--c-dark), 0 0 40px var(--accent-color); }\n    50%      { box-shadow: 0 22px 0 var(--c-dark), 0 0 80px var(--accent-color); }\n  }\n  .upgrade-card.selected::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border-radius: 22px;\n    box-shadow: inset 0 0 0 3px rgba(255,255,255,0.45);\n    pointer-events: none;\n  }\n  .upgrade-card .num-badge {\n    position: absolute;\n    top: 10px; left: 12px;\n    width: 30px; height: 30px;\n    background: var(--c-dark);\n    border: 3px solid var(--accent-color);\n    border-radius: 10px;\n    display: grid; place-items: center;\n    font-family: 'Bangers', sans-serif;\n    font-size: 18px;\n    color: var(--accent-color);\n    letter-spacing: 1px;\n    z-index: 3;\n    box-shadow: 0 2px 0 var(--c-dark);\n  }\n  .upgrade-card.selected .num-badge {\n    background: var(--accent-color);\n    color: var(--c-dark);\n    box-shadow: 0 2px 0 var(--c-dark), 0 0 18px var(--accent-color);\n  }\n  .choice-footer {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    font-family: 'Nunito', sans-serif;\n    font-weight: 800;\n    color: rgba(255,255,255,0.85);\n    letter-spacing: 2px;\n    font-size: 13px;\n    margin-top: 6px;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .choice-footer .key { padding: 4px 10px; font-size: 13px; }\n  .choice-footer .sep { opacity: 0.4; margin: 0 4px; }\n  /* Pre-pause dramatic flash overlay */\n  .prepause-flash {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    background: radial-gradient(circle at center, rgba(123,104,238,0.25) 0%, rgba(123,104,238,0) 70%);\n    opacity: 0;\n  }\n  .prepause-flash.on { animation: prepulse 1s ease-out; }\n  @keyframes prepulse {\n    0%   { opacity: 0; }\n    30%  { opacity: 1; }\n    100% { opacity: 0; }\n  }"
  },
  "message": "Add selected-card CSS, num badge, and confirmation hint styles",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Add selected-card CSS, num badge, and confirmation hint styles"
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
  "tool_use_id": "toolu_01SW2cHm5SjKnMTcfCGEybcR",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "ac68fc82-4b5c-4a4f-9489-9fc7c6ca3e1c"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:25:59.078453Z",
  "stop_timestamp": "2026-04-19T01:26:04.050638Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017jmaRknf19HNkGK6Ki3AXg",
  "name": "str_replace",
  "input": {
    "description": "Add choice-footer hint inside upgrade choice overlay and add prepause flash element to HUD",
    "new_str": "  <!-- UPGRADE CHOICE -->\n  <div class=\"overlay hidden\" id=\"upgradeChoice\">\n    <div class=\"upgrade-title\">\n      <div class=\"lvl-up\">LEVEL UP!<small id=\"upgradeLvlSub\">CHOOSE YOUR UPGRADE</small></div>\n    </div>\n    <div class=\"upgrade-choices\" id=\"choiceGrid\"></div>\n    <div class=\"choice-footer\">\n      <span class=\"key\">&larr; &rarr;</span>\n      <span>OR</span>\n      <span class=\"key\">1-3</span>\n      <span>SELECT</span>\n      <span class=\"sep\">&middot;</span>\n      <span class=\"key\">ENTER</span>\n      <span>OR</span>\n      <span class=\"key\">CLICK</span>\n      <span>CONFIRM</span>\n    </div>\n  </div>",
    "old_str": "  <!-- UPGRADE CHOICE -->\n  <div class=\"overlay hidden\" id=\"upgradeChoice\">\n    <div class=\"upgrade-title\">\n      <div class=\"lvl-up\">LEVEL UP!<small id=\"upgradeLvlSub\">CHOOSE YOUR UPGRADE</small></div>\n    </div>\n    <div class=\"upgrade-choices\" id=\"choiceGrid\"></div>\n  </div>",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Add choice-footer hint inside upgrade choice overlay and add prepause flash element to HUD",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Add choice-footer hint inside upgrade choice overlay and add prepause flash element to HUD"
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
  "tool_use_id": "toolu_017jmaRknf19HNkGK6Ki3AXg",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "79ebc221-7040-4dab-a7fd-d4ef6a177d44"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:26:05.921950Z",
  "stop_timestamp": "2026-04-19T01:26:07.760335Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017MLi6TUpBYnx338fsGdtLL",
  "name": "str_replace",
  "input": {
    "description": "Add the prepause-flash element next to the damage/xp flashes in the HUD",
    "new_str": "    <div class=\"banner\" id=\"banner\"></div>\n    <div class=\"damage-flash\" id=\"damageFlash\"></div>\n    <div class=\"xp-flash\" id=\"xpFlash\"></div>\n    <div class=\"prepause-flash\" id=\"prepauseFlash\"></div>",
    "old_str": "    <div class=\"banner\" id=\"banner\"></div>\n    <div class=\"damage-flash\" id=\"damageFlash\"></div>\n    <div class=\"xp-flash\" id=\"xpFlash\"></div>",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Add the prepause-flash element next to the damage/xp flashes in the HUD",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Add the prepause-flash element next to the damage/xp flashes in the HUD"
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
  "tool_use_id": "toolu_017MLi6TUpBYnx338fsGdtLL",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "e165f1de-94a8-45f9-aa13-0cbf68df026f"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:26:09.657986Z",
  "stop_timestamp": "2026-04-19T01:26:17.278862Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01XB72222J8yx9GnPqcpyQ8s",
  "name": "str_replace",
  "input": {
    "description": "Add new fields to the game state object for transition timer, pre-pause, and selection tracking",
    "new_str": "const game = {\n  state: 'menu',\n  floor: 1,\n  roomIdx: 0,         // 0..3\n  isBossRoom: false,\n  obstacles: [],\n  player: null,\n  zombies: [],\n  bullets: [],\n  ezBullets: [],      // enemy projectiles\n  explosions: [],\n  particles: [],\n  damageNums: [],\n  powerups: [],\n  spawnQueue: [],\n  spawnTimer: 0,\n  kills: 0,\n  score: 0,\n  upgrades: {},\n  pendingLevelUps: 0,\n  runStartT: 0,\n  runTime: 0,\n  roomState: 'active',   // active, cleared, transitioning\n  transitionT: 0,\n  transitionTarget: null,  // { floor, roomIdx } — advance to this room when timer hits 0\n  levelupPauseT: 0,        // countdown for the 1s freeze before upgrade cards appear\n  selectedChoice: 0,\n  currentChoices: [],\n};",
    "old_str": "const game = {\n  state: 'menu',\n  floor: 1,\n  roomIdx: 0,         // 0..3\n  isBossRoom: false,\n  obstacles: [],\n  player: null,\n  zombies: [],\n  bullets: [],\n  ezBullets: [],      // enemy projectiles\n  explosions: [],\n  particles: [],\n  damageNums: [],\n  powerups: [],\n  spawnQueue: [],\n  spawnTimer: 0,\n  kills: 0,\n  score: 0,\n  upgrades: {},\n  pendingLevelUps: 0,\n  runStartT: 0,\n  runTime: 0,\n  roomState: 'active',   // active, cleared, transitioning\n  transitionT: 0,\n};",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Add new fields to the game state object for transition timer, pre-pause, and selection tracking",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Add new fields to the game state object for transition timer, pre-pause, and selection tracking"
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
  "tool_use_id": "toolu_01XB72222J8yx9GnPqcpyQ8s",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "ea758b5e-a468-4e98-86eb-08b7d6e68543"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now update `gainXP` to show the banner + pre-pause flash:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:26:19.405417Z",
  "stop_timestamp": "2026-04-19T01:26:21.639004Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016okB6fRR7uor4JNtFVPRzu",
  "name": "str_replace",
  "input": {
    "description": "Show LEVEL UP banner and prepause flash when XP causes a level up",
    "new_str": "    if (leveled) {\n      sfx('levelup');\n      flashXP();\n      showBanner('LEVEL UP!', 'CHOOSE YOUR PATH');\n      flashPrePause();\n    }\n  }",
    "old_str": "    if (leveled) {\n      sfx('levelup');\n      flashXP();\n    }\n  }",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Show LEVEL UP banner and prepause flash when XP causes a level up",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Show LEVEL UP banner and prepause flash when XP causes a level up"
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
  "tool_use_id": "toolu_016okB6fRR7uor4JNtFVPRzu",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "aeccf59b-387c-4b3c-9d46-39902fde56c9"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now convert `clearRoomAndAdvance` from `setTimeout` to a game-tick-driven timer so room transitions properly wait during the upgrade screen:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:26:24.800690Z",
  "stop_timestamp": "2026-04-19T01:26:33.836987Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01M5vrVa28RGxaHbVcyGfqot",
  "name": "str_replace",
  "input": {
    "description": "Replace setTimeout-based room transitions with game-state-aware transition timer",
    "new_str": "function clearRoomAndAdvance() {\n  // Heal on clear\n  const healAmt = game.isBossRoom ? 40 : 15;\n  game.player.hp = Math.min(game.player.maxHp, game.player.hp + healAmt);\n  game.player.ammo = game.player.maxAmmo;\n  game.player.reloading = false;\n\n  if (game.isBossRoom) {\n    if (game.floor >= FLOORS.length) {\n      // Victory!\n      game.state = 'victory';\n      showRunEnd(true);\n      return;\n    }\n    showBanner('FLOOR CLEAR', `ENTERING ${FLOORS[game.floor].name.toUpperCase()}`);\n    sfx('clear');\n    // Game-tick-driven transition — automatically pauses during level-up pre-pause\n    // or upgrade choice, since it's only decremented inside the 'playing' state block.\n    game.transitionT = 2.2;\n    game.transitionTarget = { floor: game.floor + 1, roomIdx: 0 };\n  } else {\n    showBanner('ROOM CLEAR', '+'+healAmt+' HP  ·  AMMO REFILLED');\n    sfx('clear');\n    game.transitionT = 1.8;\n    game.transitionTarget = { floor: game.floor, roomIdx: game.roomIdx + 1 };\n  }\n}",
    "old_str": "function clearRoomAndAdvance() {\n  // Heal on clear\n  const healAmt = game.isBossRoom ? 40 : 15;\n  game.player.hp = Math.min(game.player.maxHp, game.player.hp + healAmt);\n  game.player.ammo = game.player.maxAmmo;\n  game.player.reloading = false;\n\n  if (game.isBossRoom) {\n    if (game.floor >= FLOORS.length) {\n      // Victory!\n      game.state = 'victory';\n      showRunEnd(true);\n      return;\n    }\n    showBanner('FLOOR CLEAR', `ENTERING ${FLOORS[game.floor].name.toUpperCase()}`);\n    sfx('clear');\n    setTimeout(() => {\n      if (game.state !== 'playing' && game.state !== 'cleared') return;\n      enterRoom(game.floor + 1, 0);\n    }, 2200);\n  } else {\n    showBanner('ROOM CLEAR', '+'+healAmt+' HP  ·  AMMO REFILLED');\n    sfx('clear');\n    setTimeout(() => {\n      if (game.state !== 'playing' && game.state !== 'cleared') return;\n      enterRoom(game.floor, game.roomIdx + 1);\n    }, 1800);\n  }\n}",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Replace setTimeout-based room transitions with game-state-aware transition timer",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Replace setTimeout-based room transitions with game-state-aware transition timer"
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
  "tool_use_id": "toolu_01M5vrVa28RGxaHbVcyGfqot",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "f3cdd22a-3a2c-4a6a-ab0a-3707f2948939"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now refactor `showUpgradeChoice` and add the selection/confirmation helpers:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:26:36.478517Z",
  "stop_timestamp": "2026-04-19T01:26:50.813256Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Vg3HR6mnPGsXvcDLorNKy9",
  "name": "str_replace",
  "input": {
    "description": "Refactor showUpgradeChoice into roll+render functions and add selection/confirm helpers",
    "new_str": "function showUpgradeChoice() {\n  const choices = rollUpgradeChoices(3);\n  if (choices.length === 0) {\n    game.pendingLevelUps--;\n    resumeFromUpgrade();\n    return;\n  }\n  game.currentChoices = choices;\n  game.selectedChoice = 0;\n  renderChoiceCards();\n  showOverlay($('upgradeChoice'));\n  game.state = 'upgradeChoice';\n}\n\nfunction renderChoiceCards() {\n  const choices = game.currentChoices;\n  const grid = document.getElementById('choiceGrid');\n  grid.innerHTML = '';\n  $('upgradeLvlSub').textContent = `CHOOSE · LEVEL ${game.player.level}`;\n  choices.forEach((u, idx) => {\n    const currentLv = game.upgrades[u.id] || 0;\n    const nextLv = currentLv + 1;\n    const card = document.createElement('div');\n    card.className = 'upgrade-card' + (idx === game.selectedChoice ? ' selected' : '');\n    card.style.setProperty('--accent-color', u.color);\n    const descText = typeof u.desc === 'function' ? u.desc(nextLv) : u.desc;\n    card.innerHTML = `\n      <div class=\"num-badge\">${idx+1}</div>\n      <div class=\"icon\">${u.icon}</div>\n      <div class=\"name\">${u.name}</div>\n      <div class=\"desc\">${descText}</div>\n      <div class=\"lvl-pill\">${currentLv>0?`Lv ${currentLv} → ${nextLv}`:`NEW · Lv ${nextLv}`}</div>\n    `;\n    card.addEventListener('click', () => {\n      if (game.selectedChoice === idx) {\n        confirmSelectedUpgrade();\n      } else {\n        game.selectedChoice = idx;\n        updateCardSelection();\n        sfx('pickup');\n      }\n    });\n    grid.appendChild(card);\n  });\n}\n\nfunction updateCardSelection() {\n  const grid = document.getElementById('choiceGrid');\n  Array.from(grid.children).forEach((card, idx) => {\n    if (idx === game.selectedChoice) card.classList.add('selected');\n    else card.classList.remove('selected');\n  });\n}\n\nfunction changeSelection(delta) {\n  const n = game.currentChoices.length;\n  if (n === 0) return;\n  game.selectedChoice = ((game.selectedChoice + delta) % n + n) % n;\n  updateCardSelection();\n  sfx('pickup');\n}\n\nfunction confirmSelectedUpgrade() {\n  if (game.state !== 'upgradeChoice') return;\n  const u = game.currentChoices[game.selectedChoice];\n  if (!u) return;\n  applyUpgrade(u.id);\n  game.pendingLevelUps--;\n  if (game.pendingLevelUps > 0) {\n    showUpgradeChoice();\n  } else {\n    resumeFromUpgrade();\n  }\n}",
    "old_str": "function showUpgradeChoice() {\n  const choices = rollUpgradeChoices(3);\n  if (choices.length === 0) {\n    game.pendingLevelUps--;\n    resumeFromUpgrade();\n    return;\n  }\n  const grid = document.getElementById('choiceGrid');\n  grid.innerHTML = '';\n  $('upgradeLvlSub').textContent = `CHOOSE · LEVEL ${game.player.level}`;\n  for (const u of choices) {\n    const currentLv = game.upgrades[u.id] || 0;\n    const nextLv = currentLv + 1;\n    const card = document.createElement('div');\n    card.className = 'upgrade-card';\n    card.style.setProperty('--accent-color', u.color);\n    const descText = typeof u.desc === 'function' ? u.desc(nextLv) : u.desc;\n    card.innerHTML = `\n      <div class=\"icon\">${u.icon}</div>\n      <div class=\"name\">${u.name}</div>\n      <div class=\"desc\">${descText}</div>\n      <div class=\"lvl-pill\">${currentLv>0?`Lv ${currentLv} → ${nextLv}`:`NEW · Lv ${nextLv}`}</div>\n    `;\n    card.addEventListener('click', () => {\n      applyUpgrade(u.id);\n      game.pendingLevelUps--;\n      if (game.pendingLevelUps > 0) {\n        showUpgradeChoice();\n      } else {\n        resumeFromUpgrade();\n      }\n    });\n    grid.appendChild(card);\n  }\n  showOverlay($('upgradeChoice'));\n  game.state = 'upgradeChoice';\n}",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Refactor showUpgradeChoice into roll+render functions and add selection/confirm helpers",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Refactor showUpgradeChoice into roll+render functions and add selection/confirm helpers"
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
  "tool_use_id": "toolu_01Vg3HR6mnPGsXvcDLorNKy9",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "cf05d4c3-f287-4e49-85bf-6beb4b4b4455"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now add the `flashPrePause` helper next to the other flash helpers:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:26:53.329232Z",
  "stop_timestamp": "2026-04-19T01:26:55.897659Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01NNrBvjPJfnP9vPYyLcWmmn",
  "name": "str_replace",
  "input": {
    "description": "Add flashPrePause helper to trigger the 1s pulse effect",
    "new_str": "function flashXP() {\n  const el = $('xpFlash');\n  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');\n}\nfunction flashPrePause() {\n  const el = $('prepauseFlash');\n  if (!el) return;\n  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on');\n}",
    "old_str": "function flashXP() {\n  const el = $('xpFlash');\n  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');\n}",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Add flashPrePause helper to trigger the 1s pulse effect",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Add flashPrePause helper to trigger the 1s pulse effect"
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
  "tool_use_id": "toolu_01NNrBvjPJfnP9vPYyLcWmmn",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "ad872e8a-dade-420d-a80c-ac6c2f8c0652"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now update the keyboard handler to support arrows/1-3/Enter during the upgrade choice:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:26:58.526325Z",
  "stop_timestamp": "2026-04-19T01:27:05.637265Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LQbRJ3hLmP21Td2sgQzpTW",
  "name": "str_replace",
  "input": {
    "description": "Expand keyboard handler to support upgrade choice selection and confirmation",
    "new_str": "addEventListener('keydown', e => {\n  // Upgrade choice: arrows / 1-3 select, Enter confirms, swallow everything else\n  if (game.state === 'upgradeChoice') {\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      confirmSelectedUpgrade();\n      return;\n    }\n    if (e.key === 'ArrowLeft') {\n      e.preventDefault();\n      changeSelection(-1);\n      return;\n    }\n    if (e.key === 'ArrowRight') {\n      e.preventDefault();\n      changeSelection(1);\n      return;\n    }\n    if (e.key >= '1' && e.key <= '9') {\n      e.preventDefault();\n      const idx = parseInt(e.key) - 1;\n      if (idx < game.currentChoices.length && idx !== game.selectedChoice) {\n        game.selectedChoice = idx;\n        updateCardSelection();\n        sfx('pickup');\n      }\n      return;\n    }\n    // Prevent space from scrolling etc.\n    if (e.key === ' ' || e.key === 'Tab') e.preventDefault();\n    return;\n  }\n  // During the 1s pre-pause freeze, ignore all gameplay input\n  if (game.state === 'levelup_pending') {\n    if (e.key === ' ' || e.key === 'Tab') e.preventDefault();\n    return;\n  }\n  // Normal game key handling\n  keys[e.key.toLowerCase()] = true;\n  if (e.key.toLowerCase() === 'r') tryReload();\n  if (e.key === ' ') { e.preventDefault(); tryDash(); }\n  if (e.key === 'Escape') togglePause();\n});",
    "old_str": "addEventListener('keydown', e => {\n  keys[e.key.toLowerCase()] = true;\n  if (e.key.toLowerCase() === 'r') tryReload();\n  if (e.key === ' ') { e.preventDefault(); tryDash(); }\n  if (e.key === 'Escape') togglePause();\n});",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Expand keyboard handler to support upgrade choice selection and confirmation",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Expand keyboard handler to support upgrade choice selection and confirmation"
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
  "tool_use_id": "toolu_01LQbRJ3hLmP21Td2sgQzpTW",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "0dd3eaea-938b-41b9-9f5d-9e1d1224731a"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now update the main loop — add the transition timer and replace the direct `showUpgradeChoice` call with the levelup_pending state transition:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:27:08.381399Z",
  "stop_timestamp": "2026-04-19T01:27:15.731669Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01F6WTeQJX3acthkrVsENx6f",
  "name": "str_replace",
  "input": {
    "description": "Update main loop: add transition timer inside playing block and levelup_pending handler outside",
    "new_str": "    updateSpawns(dt);\n    endRoomCheck();\n\n    // Room-transition timer (only ticks while actively playing, so it pauses\n    // during the 1s pre-pause and the upgrade-choice screen).\n    if (game.transitionT > 0) {\n      game.transitionT -= dt;\n      if (game.transitionT <= 0 && game.transitionTarget) {\n        const t = game.transitionTarget;\n        game.transitionTarget = null;\n        enterRoom(t.floor, t.roomIdx);\n      }\n    }\n\n    updateHUD();\n\n    // Level-up pending: trigger the 1-second pre-pause before cards appear.\n    if (game.pendingLevelUps > 0 && game.state === 'playing') {\n      game.state = 'levelup_pending';\n      game.levelupPauseT = 1.0;\n    }\n  }\n\n  // 1-second freeze before upgrade cards slide in. Entity updates are skipped\n  // entirely — only the HUD keeps refreshing and the pre-pause banner plays.\n  if (game.state === 'levelup_pending') {\n    game.levelupPauseT -= dt;\n    updateHUD();\n    if (game.levelupPauseT <= 0) {\n      showUpgradeChoice();\n    }\n  }",
    "old_str": "    updateSpawns(dt);\n    endRoomCheck();\n\n    updateHUD();\n\n    // If level-ups pending and we're in normal play, trigger upgrade choice\n    if (game.pendingLevelUps > 0 && game.state === 'playing') {\n      showUpgradeChoice();\n    }\n  }",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Update main loop: add transition timer inside playing block and levelup_pending handler outside",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Update main loop: add transition timer inside playing block and levelup_pending handler outside"
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
  "tool_use_id": "toolu_01F6WTeQJX3acthkrVsENx6f",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "be1821f6-f4e3-4651-a5a5-de3421e815a3"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now update `startRun` to reset the new fields, and `quitToMenu` too:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:27:18.285859Z",
  "stop_timestamp": "2026-04-19T01:27:23.630850Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01DudD4XgsNvRJr1buj9FNzR",
  "name": "str_replace",
  "input": {
    "description": "Reset new state fields in startRun",
    "new_str": "function startRun() {\n  game.floor = 1;\n  game.roomIdx = 0;\n  game.zombies = []; game.bullets = []; game.ezBullets = [];\n  game.explosions = []; game.particles = []; game.damageNums = [];\n  game.powerups = []; game.spawnQueue = [];\n  game.kills = 0; game.score = 0;\n  game.upgrades = {};\n  game.pendingLevelUps = 0;\n  game.transitionT = 0;\n  game.transitionTarget = null;\n  game.levelupPauseT = 0;\n  game.selectedChoice = 0;\n  game.currentChoices = [];\n  game.runStartT = performance.now();\n  game.runTime = 0;\n  game.player = new Player();\n  renderUpgradeStack();\n  enterRoom(1, 0);\n  hideAllOverlays();\n  game.state = 'playing';\n}",
    "old_str": "function startRun() {\n  game.floor = 1;\n  game.roomIdx = 0;\n  game.zombies = []; game.bullets = []; game.ezBullets = [];\n  game.explosions = []; game.particles = []; game.damageNums = [];\n  game.powerups = []; game.spawnQueue = [];\n  game.kills = 0; game.score = 0;\n  game.upgrades = {};\n  game.pendingLevelUps = 0;\n  game.runStartT = performance.now();\n  game.runTime = 0;\n  game.player = new Player();\n  renderUpgradeStack();\n  enterRoom(1, 0);\n  hideAllOverlays();\n  game.state = 'playing';\n}",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Reset new state fields in startRun",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reset new state fields in startRun"
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
  "tool_use_id": "toolu_01DudD4XgsNvRJr1buj9FNzR",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "baf01cb6-6706-4922-b388-df8a4d2dcdb3"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:27:25.707175Z",
  "stop_timestamp": "2026-04-19T01:27:28.662666Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SbaZwqxWWs2jdMNYoqPev9",
  "name": "str_replace",
  "input": {
    "description": "Reset new state fields in quitToMenu",
    "new_str": "function quitToMenu() {\n  game.state = 'menu';\n  game.player = null;\n  game.zombies = []; game.bullets = []; game.ezBullets = [];\n  game.explosions = []; game.particles = []; game.damageNums = [];\n  game.powerups = []; game.spawnQueue = [];\n  game.transitionT = 0;\n  game.transitionTarget = null;\n  game.levelupPauseT = 0;\n  game.pendingLevelUps = 0;\n  $('upgradeStack').innerHTML = '';\n  showOverlay($('menu'));\n}",
    "old_str": "function quitToMenu() {\n  game.state = 'menu';\n  game.player = null;\n  game.zombies = []; game.bullets = []; game.ezBullets = [];\n  game.explosions = []; game.particles = []; game.damageNums = [];\n  game.powerups = []; game.spawnQueue = [];\n  $('upgradeStack').innerHTML = '';\n  showOverlay($('menu'));\n}",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "Reset new state fields in quitToMenu",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reset new state fields in quitToMenu"
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
  "tool_use_id": "toolu_01SbaZwqxWWs2jdMNYoqPev9",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "498b07f1-a996-4d3d-b959-94c243545f7c"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Now verify JS syntax, look for any leftover references to removed code, and copy to outputs:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:27:31.594468Z",
  "stop_timestamp": "2026-04-19T01:27:38.398127Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VdMXFZe6g4HbRMtSARqHZP",
  "name": "bash_tool",
  "input": {
    "command": "cd /home/claude && node -e \"\nconst fs = require('fs');\nconst html = fs.readFileSync('zombie_roguelike.html', 'utf8');\nconst match = html.match(/<script>([\\s\\S]*?)<\\/script>/);\nif (match) {\n  const code = match[1];\n  try {\n    new Function(code);\n    console.log('✓ JavaScript parses cleanly');\n    console.log('Script length:', code.length, 'chars');\n  } catch(e) {\n    console.log('✗ Syntax error:', e.message);\n    const stack = e.stack.split('\\n').slice(0, 8).join('\\n');\n    console.log(stack);\n  }\n}\nconsole.log('Total file size:', html.length, 'chars');\n// sanity checks for references we care about\nconst checks = [\n  ['game.levelupPauseT',         true],\n  ['game.selectedChoice',        true],\n  ['game.currentChoices',        true],\n  ['game.transitionTarget',      true],\n  ['confirmSelectedUpgrade',     true],\n  ['changeSelection',            true],\n  ['updateCardSelection',        true],\n  ['renderChoiceCards',          true],\n  ['flashPrePause',              true],\n  ['levelup_pending',            true],\n  ['prepauseFlash',              true],\n  // things that should NOT exist anymore\n  ['setTimeout(() => {',         false],\n];\nfor (const [needle, shouldExist] of checks) {\n  const found = html.includes(needle);\n  const ok = found === shouldExist;\n  console.log((ok?'✓':'✗'), needle, '→', found ? 'present' : 'absent', shouldExist ? '(want present)' : '(want absent)');\n}\n\"",
    "description": "Syntax + sanity check for new references and removed patterns"
  },
  "message": "Syntax + sanity check for new references and removed patterns",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"cd /home/claude && node -e \\\"\\nconst fs = require('fs');\\nconst html = fs.readFileSync('zombie_roguelike.html', 'utf8');\\nconst match = html.match(/<script>([\\\\s\\\\S]*?)<\\\\/script>/);\\nif (match) {\\n  const code = match[1];\\n  try {\\n    new Function(code);\\n    console.log('\\u2713 JavaScript parses cleanly');\\n    console.log('Script length:', code.length, 'chars');\\n  } catch(e) {\\n    console.log('\\u2717 Syntax error:', e.message);\\n    const stack = e.stack.split('\\\\n').slice(0, 8).join('\\\\n');\\n    console.log(stack);\\n  }\\n}\\nconsole.log('Total file size:', html.length, 'chars');\\n// sanity checks for references we care about\\nconst checks = [\\n  ['game.levelupPauseT',         true],\\n  ['game.selectedChoice',        true],\\n  ['game.currentChoices',        true],\\n  ['game.transitionTarget',      true],\\n  ['confirmSelectedUpgrade',     true],\\n  ['changeSelection',            true],\\n  ['updateCardSelection',        true],\\n  ['renderChoiceCards',          true],\\n  ['flashPrePause',              true],\\n  ['levelup_pending',            true],\\n  ['prepauseFlash',              true],\\n  // things that should NOT exist anymore\\n  ['setTimeout(() => {',         false],\\n];\\nfor (const [needle, shouldExist] of checks) {\\n  const found = html.includes(needle);\\n  const ok = found === shouldExist;\\n  console.log((ok?'\\u2713':'\\u2717'), needle, '\\u2192', found ? 'present' : 'absent', shouldExist ? '(want present)' : '(want absent)');\\n}\\n\\\"\"}"
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
  "tool_use_id": "toolu_01VdMXFZe6g4HbRMtSARqHZP",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"✓ JavaScript parses cleanly\\nScript length: 66124 chars\\nTotal file size: 87250 chars\\n✓ game.levelupPauseT → present (want present)\\n✓ game.selectedChoice → present (want present)\\n✓ game.currentChoices → present (want present)\\n✓ game.transitionTarget → present (want present)\\n✓ confirmSelectedUpgrade → present (want present)\\n✓ changeSelection → present (want present)\\n✓ updateCardSelection → present (want present)\\n✓ renderChoiceCards → present (want present)\\n✓ flashPrePause → present (want present)\\n✓ levelup_pending → present (want present)\\n✓ prepauseFlash → present (want present)\\n✓ setTimeout(() => { → absent (want absent)\\n\",\"stderr\":\"\"}",
      "uuid": "b196496f-3d9a-4da5-bb92-e23130d3891e"
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
    "json_block": "{\"returncode\":0,\"stdout\":\"✓ JavaScript parses cleanly\\nScript length: 66124 chars\\nTotal file size: 87250 chars\\n✓ game.levelupPauseT → present (want present)\\n✓ game.selectedChoice → present (want present)\\n✓ game.currentChoices → present (want present)\\n✓ game.transitionTarget → present (want present)\\n✓ confirmSelectedUpgrade → present (want present)\\n✓ changeSelection → present (want present)\\n✓ updateCardSelection → present (want present)\\n✓ renderChoiceCards → present (want present)\\n✓ flashPrePause → present (want present)\\n✓ levelup_pending → present (want present)\\n✓ prepauseFlash → present (want present)\\n✓ setTimeout(() => { → absent (want absent)\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 Checking the state transition logic more carefully—when `showUpgradeChoice` runs from within the `levelup_pending` block, it changes the game state to `upgradeChoice`, but I need to verify that the main loop doesn't process that same block again in the current tick since the state has already shifted.

Actually, there's an edge case I'm catching: if `rollUpgradeChoices` returns zero choices, `showUpgradeChoice` calls `resumeFromUpgrade()` instead, which sets state back to `playing`—but at that point the main loop has already exited the `levelup_pending` block, so the `playing` state won't be processed until the next frame.

Let me verify the render path works correctly during the upgrade choice state: the scene checks if `game.player` exists and calls `drawWorld()` to render the frozen world state, which is exactly what we want. I should also confirm that things like camera shake don't decay weirdly during the pause.

Actually, camera updates only run in the 'playing' block, so shake stays frozen during the pause—that's fine. Same with particles and damage numbers, they're all locked in place while the upgrade menu is active.

Let me trace through the full sequence: when the player kills the last zombie and levels up simultaneously, the gainXP function triggers the level-up SFX, XP flash, and banner, then the main loop's endRoomCheck fires to set the room state to 'cleared' and advance, showing the room clear message.

The room clear banner replaces the level-up one with a 1.8 second transition, then since there are pending level-ups, the state shifts to 'levelup_pending' with a 1-second timer. Once that timer expires, the upgrade choice cards appear with the first option already selected. The player navigates and confirms their choice, which applies the upgrade, clears the pending count, and returns to playing state. Back in the main loop, the transition timer continues decrementing from around 1.8 seconds.

Now I'm checking whether the room clear banner stays visible during the level-up pause—the banner animates for 2.4 seconds total, so it keeps playing behind the upgrade overlay until it finishes, which is fine. When the player confirms their upgrade around the 3-second mark, the game resumes with the transition timer still at 1.8 since it wasn't ticking during the pause.

That means the player sits in an empty cleared room for 1.8 seconds with no visual feedback, since the banner animation ended long ago. I'm wondering if I should either re-trigger the room clear banner when resuming or shorten that transition delay to avoid the awkward silence.

Actually, the cleaner approach is to check if the transition time has already elapsed by the time the player confirms—if it has, I can just advance immediately instead of making them wait for a delay that's no longer serving its purpose.

Modifying resumeFromUpgrade to handle this...

Still writing the upgrade handler... I need to handle both scenarios: when there's no level-up, the banner and transition work as before, but when a level-up happens during the room clear, I skip the wait and go straight to the new room. My change only affects the level-up case, so case 1 stays intact. In case 2, the transitionT doesn't decrement because we're in the levelup_pending state instead of playing.

</details>

One more polish: when a level-up happens mid room-transition, the player might finish picking upgrades long after the "ROOM CLEAR" banner has already animated out. Without a fix they'd stare at an empty room waiting for the transition timer. Let me short-circuit that:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:28:23.867105Z",
  "stop_timestamp": "2026-04-19T01:28:26.986849Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_012UNmp88pkQK7Cv1aUi66bX",
  "name": "str_replace",
  "input": {
    "description": "If a room transition was pending when upgrade choice started, jump straight to next room on resume (banner already played during the pause)",
    "new_str": "function resumeFromUpgrade() {\n  hideAllOverlays();\n  game.state = 'playing';\n  // If a room transition was queued when level-up interrupted, the ROOM CLEAR\n  // banner has already played out behind the upgrade overlay — skip the remaining\n  // wait and jump straight to the next room so the player doesn't stare at an\n  // empty cleared room.\n  if (game.transitionTarget) {\n    const t = game.transitionTarget;\n    game.transitionTarget = null;\n    game.transitionT = 0;\n    enterRoom(t.floor, t.roomIdx);\n  }\n}",
    "old_str": "function resumeFromUpgrade() {\n  hideAllOverlays();\n  game.state = 'playing';\n}",
    "path": "/home/claude/zombie_roguelike.html"
  },
  "message": "If a room transition was pending when upgrade choice started, jump straight to next room on resume (banner already played during the pause)",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "edit",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "If a room transition was pending when upgrade choice started, jump straight to next room on resume (banner already played during the pause)"
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
  "tool_use_id": "toolu_012UNmp88pkQK7Cv1aUi66bX",
  "name": "str_replace",
  "content": [
    {
      "type": "text",
      "text": "Successfully replaced string in /home/claude/zombie_roguelike.html",
      "uuid": "817f72eb-debd-4107-b99d-84a46d9d87bc"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "edit",
  "display_content": {
    "type": "text",
    "text": "Successfully replaced string in /home/claude/zombie_roguelike.html"
  },
  "hidden_in_chat": null
}
```

</details>

Final verification and copy to outputs:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:28:29.443110Z",
  "stop_timestamp": "2026-04-19T01:28:31.885397Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01NyENW6L3dfftpGmmcoAnov",
  "name": "bash_tool",
  "input": {
    "command": "cd /home/claude && node -e \"\nconst fs = require('fs');\nconst html = fs.readFileSync('zombie_roguelike.html', 'utf8');\nconst match = html.match(/<script>([\\s\\S]*?)<\\/script>/);\nconst code = match[1];\ntry { new Function(code); console.log('✓ JS parses cleanly'); }\ncatch(e) { console.log('✗ Syntax error:', e.message); process.exit(1); }\nconsole.log('File size:', html.length, 'bytes');\nconsole.log('Script size:', code.length, 'chars');\n\" && cp /home/claude/zombie_roguelike.html /mnt/user-data/outputs/zombie_roguelike.html && ls -la /mnt/user-data/outputs/zombie_roguelike.html",
    "description": "Final syntax check and copy to outputs"
  },
  "message": "Final syntax check and copy to outputs",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "commandLine",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"bash\", \"code\": \"cd /home/claude && node -e \\\"\\nconst fs = require('fs');\\nconst html = fs.readFileSync('zombie_roguelike.html', 'utf8');\\nconst match = html.match(/<script>([\\\\s\\\\S]*?)<\\\\/script>/);\\nconst code = match[1];\\ntry { new Function(code); console.log('\\u2713 JS parses cleanly'); }\\ncatch(e) { console.log('\\u2717 Syntax error:', e.message); process.exit(1); }\\nconsole.log('File size:', html.length, 'bytes');\\nconsole.log('Script size:', code.length, 'chars');\\n\\\" && cp /home/claude/zombie_roguelike.html /mnt/user-data/outputs/zombie_roguelike.html && ls -la /mnt/user-data/outputs/zombie_roguelike.html\"}"
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
  "tool_use_id": "toolu_01NyENW6L3dfftpGmmcoAnov",
  "name": "bash_tool",
  "content": [
    {
      "type": "text",
      "text": "{\"returncode\":0,\"stdout\":\"✓ JS parses cleanly\\nFile size: 87683 bytes\\nScript size: 66557 chars\\n-rw-r--r-- 1 claude root 87748 Apr 19 01:25 /mnt/user-data/outputs/zombie_roguelike.html\\n\",\"stderr\":\"\"}",
      "uuid": "7f8519a9-100c-47d9-a032-85ce85171470"
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
    "json_block": "{\"returncode\":0,\"stdout\":\"✓ JS parses cleanly\\nFile size: 87683 bytes\\nScript size: 66557 chars\\n-rw-r--r-- 1 claude root 87748 Apr 19 01:25 /mnt/user-data/outputs/zombie_roguelike.html\\n\",\"stderr\":\"\"}"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-19T01:28:34.281496Z",
  "stop_timestamp": "2026-04-19T01:28:34.510166Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_013AvdpvGHTK5dtNN6KbcAhd",
  "name": "present_files",
  "input": {
    "filepaths": [
      "/mnt/user-data/outputs/zombie_roguelike.html"
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
        "['/mnt/user-data/outputs/zombie_roguelike.html']"
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
  "tool_use_id": "toolu_013AvdpvGHTK5dtNN6KbcAhd",
  "name": "present_files",
  "content": [
    {
      "type": "local_resource",
      "file_path": "/mnt/user-data/outputs/zombie_roguelike.html",
      "name": "zombie roguelike",
      "mime_type": "text/html",
      "uuid": "42ef7955-6904-493f-9849-c77514aafb97"
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

Done. Here's what changed behaviorally:

**1-second pre-pause**
When you level up, the game now immediately freezes all entity updates (zombies stop, bullets freeze, particles hold). A "LEVEL UP! CHOOSE YOUR PATH" banner flashes with a purple radial pulse, and only after a full 1-second countdown do the upgrade cards slide in. Built as a new `levelup_pending` game state with `levelupPauseT` countdown — no `setTimeout`, so it's deterministic and ties to the game clock.

**Select-then-confirm cards**
- First card is auto-selected on appear (bright outline, accent glow, numbered badge inverts color)
- **Select**: click a non-selected card, or press ← / → / `1` / `2` / `3`
- **Confirm**: click the currently-selected card, or press `Enter`
- Selected card has a pulsing glow animation so it's unmistakable
- Footer hint at the bottom of the overlay shows the full control scheme

**Secondary fix I rolled in**
The previous `setTimeout`-based room transitions fired regardless of game state, so a level-up during a room-clear could leave you stuck if the timer fired while the upgrade screen was up. Converted to a game-tick-driven `transitionT` that only decrements during `playing`. And if you confirm your upgrade while a transition was queued, it jumps straight to the next room rather than making you wait in an empty cleared room (the ROOM CLEAR banner already played behind the overlay during the pause).

**One design call I'd flag per your evidence-vs-assumption preference**: I pre-selected the first card on appear, which means clicking the first card once confirms it (one click for the default, two for non-defaults). That's a **design choice**, not a strict reading of "not direct confirmation." If you'd prefer a stricter interpretation where every choice requires two clicks (no pre-selection — initial click on any card just selects), tell me and I'll flip that single behavior.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019da352-4f73-7f36-aa65-321d5d5bf709",
  "updated_at": "2026-04-19T01:28:48.227721Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019da352-4f73-7a66-8e2a-78f63a7cbc2e"
}
```

</details>
