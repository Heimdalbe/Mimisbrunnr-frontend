import assert from 'node:assert/strict';
import test from 'node:test';
import formatTime from './formatTime.js';

for (const [hour, minute, expected] of [
  [0, 5, '00:05'],
  [9, 7, '09:07'],
  [12, 0, '12:00'],
  [19, 5, '19:05'],
  [23, 59, '23:59'],
]) {
  test(`formats ${hour}:${minute} as ${expected}`, () => {
    assert.equal(formatTime(new Date(2026, 9, 30, hour, minute, 42)), expected);
  });
}

test('keeps missing or invalid dates empty while an event is loading', () => {
  for (const value of [null, undefined, '', 'invalid']) {
    assert.equal(formatTime(value), '');
  }
});
