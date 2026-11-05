import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createGame, turn, step } from './snake.js';

const running = (width = 20, height = 16) => ({ ...createGame(width, height), status: 'running' });

test('food grows the dragon once and respawns on a free cell', () => {
  let game = running();
  for (let i = 0; i < 4; i++) game = step(game, () => 0);
  assert.equal(game.score, 1);
  assert.equal(game.snake.length, 4);
  assert.deepEqual(game.food, [0, 0]);
  assert.equal(new Set(game.snake.map(String)).has(String(game.food)), false);
});

test('queued turns cannot reverse into the neck or overwrite a pending corner', () => {
  let game = turn(running(), [-1, 0]);
  assert.equal(game.turns.length, 0);
  game = turn(turn(game, [0, -1]), [-1, 0]);
  game = turn(game, [0, 1]);
  assert.equal(game.turns.length, 2);
  game = step(game);
  assert.deepEqual(game.direction, [0, -1]);
  game = step(game);
  assert.deepEqual(game.direction, [-1, 0]);
});

test('walls and the body end the round without moving outside the board', () => {
  let game = running(8, 8);
  for (let i = 0; i < 20; i++) game = step(game, () => 0);
  assert.equal(game.status, 'over');
  assert.ok(game.snake.every(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8));
  game = { ...running(), snake: [[2, 2], [2, 3], [3, 3], [3, 2], [3, 1]], direction: [1, 0] };
  assert.equal(step(game).status, 'over');
});

test('moving into the vacating tail is allowed', () => {
  const game = { ...running(), snake: [[2, 2], [2, 3], [3, 3], [3, 2]], direction: [1, 0] };
  assert.equal(step(game).status, 'running');
});

test('filling the final free cell wins without attempting to place more food', () => {
  const game = { ...running(2, 2), snake: [[0, 0], [0, 1], [1, 1]], food: [1, 0], score: 0 };
  const won = step(game);
  assert.equal(won.status, 'won');
  assert.equal(won.score, 1);
  assert.equal(won.snake.length, 4);
  assert.equal(won.food, null);
});

test('pause and restart work on rectangular boards at both dimension limits', () => {
  for (const [width, height] of [[8, 40], [40, 8]]) {
    const fresh = createGame(width, height);
    assert.equal(fresh.width * fresh.height - fresh.snake.length, 317);
    assert.equal(fresh.score, 0);
    const paused = { ...fresh, status: 'paused' };
    assert.equal(step(paused), paused);
    assert.ok(fresh.snake.every(([x, y]) => x >= 0 && x < width && y >= 0 && y < height));
  }
});
