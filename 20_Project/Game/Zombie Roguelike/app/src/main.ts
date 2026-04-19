const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
if (!ctx) throw new Error('Canvas 2D context unavailable');

ctx.fillStyle = '#14171c';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#9bb3c6';
ctx.font = '20px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(
  'Zombie Roguelike — PWA scaffold ready',
  canvas.width / 2,
  canvas.height / 2,
);
