export const directions = {
  ArrowUp: [0, -1], ArrowRight: [1, 0], ArrowDown: [0, 1], ArrowLeft: [-1, 0],
};

const same = (a, b) => a[0] === b[0] && a[1] === b[1];

export function createGame(width = 20, height = 16) {
  const x = Math.floor(width / 3), y = Math.floor(height / 2);
  return {
    width, height, snake: [[x, y], [x - 1, y], [x - 2, y]], direction: [1, 0], turns: [],
    food: [Math.min(width - 2, x + 4), y], score: 0, status: 'ready',
  };
}

export function turn(game, direction) {
  const previous = game.turns.at(-1) ?? game.direction;
  if (!direction || game.turns.length >= 2 || same(previous, direction)
    || same(previous, direction.map((v) => -v))) return game;
  return { ...game, turns: [...game.turns, direction] };
}

export function step(game, random = Math.random) {
  if (game.status !== 'running') return game;
  const direction = game.turns[0] ?? game.direction;
  const head = game.snake[0].map((v, i) => v + direction[i]);
  const eating = same(head, game.food);
  const body = eating ? game.snake : game.snake.slice(0, -1);
  if (head[0] < 0 || head[0] >= game.width || head[1] < 0 || head[1] >= game.height
    || body.some((p) => same(p, head))) return { ...game, status: 'over' };
  const snake = [head, ...body];
  const next = { ...game, snake, direction, turns: game.turns.slice(1), score: game.score + Number(eating) };
  if (!eating) return next;
  const free = [];
  const occupied = new Set(snake.map(([x, y]) => y * game.width + x));
  for (let y = 0; y < game.height; y++) {
    for (let x = 0; x < game.width; x++) {
      if (!occupied.has(y * game.width + x)) free.push([x, y]);
    }
  }
  return { ...next, food: free.length ? free[Math.floor(random() * free.length)] : null,
    status: free.length ? 'running' : 'won' };
}
