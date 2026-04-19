type SfxName =
  | 'shoot' | 'hit' | 'reload' | 'die' | 'hurt' | 'pickup'
  | 'wave' | 'clear' | 'levelup' | 'gameover'
  | 'dash' | 'boom' | 'spit' | 'boss';

let audioCtx: AudioContext | null = null;

export function initAudio(): void {
  if (audioCtx) return;
  try {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (Ctor) audioCtx = new Ctor();
  } catch {
    // ignored — browser without WebAudio
  }
}

function beep(freq: number, duration: number, type: OscillatorType = 'square', vol = 0.06, sweep = 0): void {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + sweep), t + duration);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + duration + 0.02);
}

export function sfx(name: SfxName): void {
  if (!audioCtx) return;
  switch (name) {
    case 'shoot':    beep(880, 0.05, 'square',   0.04, -500); break;
    case 'hit':      beep(200, 0.07, 'sawtooth', 0.06, -100); break;
    case 'reload':
      beep(400, 0.05, 'triangle', 0.04);
      setTimeout(() => beep(600, 0.05, 'triangle', 0.04), 120);
      break;
    case 'die':      beep(150, 0.25, 'sawtooth', 0.08, -80); break;
    case 'hurt':     beep(120, 0.15, 'square',   0.09, -60); break;
    case 'pickup':
      beep(600, 0.07, 'sine', 0.07);
      setTimeout(() => beep(900, 0.08, 'sine', 0.07), 70);
      break;
    case 'wave':
      beep(300, 0.12, 'sawtooth', 0.07);
      setTimeout(() => beep(500, 0.18, 'square', 0.07), 120);
      break;
    case 'clear':
      [523, 659, 784, 1047].forEach((f, i) =>
        setTimeout(() => beep(f, 0.1, 'triangle', 0.08), i * 80),
      );
      break;
    case 'levelup':
      [659, 784, 988, 1319].forEach((f, i) =>
        setTimeout(() => beep(f, 0.09, 'triangle', 0.08), i * 70),
      );
      break;
    case 'gameover':
      [400, 300, 200, 100].forEach((f, i) =>
        setTimeout(() => beep(f, 0.22, 'sawtooth', 0.09), i * 170),
      );
      break;
    case 'dash':     beep(500, 0.09, 'sine',     0.06, 400); break;
    case 'boom':     beep(80,  0.25, 'sawtooth', 0.1,  -40); break;
    case 'spit':     beep(250, 0.12, 'sawtooth', 0.05, 100); break;
    case 'boss':
      [110, 130, 150, 170, 200].forEach((f, i) =>
        setTimeout(() => beep(f, 0.18, 'sawtooth', 0.1), i * 90),
      );
      break;
  }
}
