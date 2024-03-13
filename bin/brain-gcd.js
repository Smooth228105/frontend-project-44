#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import bodygume from '../src/bodygame.js';

const description = 'Find the greatest common divisor of given numbers.';

// eslint-disable-next-line consistent-return
const task = () => {
  const one = Math.floor(Math.random() * 100);
  const two = Math.floor(Math.random() * 100);

  let a = one;
  let b = two;
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;
  return [`${one} ${two}`, answer];
};

bodygume(description, task);
