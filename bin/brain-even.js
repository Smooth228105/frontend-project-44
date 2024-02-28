#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars, consistent-return

import greeting from '../src/cli.js';

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
function even() {
  const numbers = Math.floor(Math.random() * 100);
  if (numbers % 2 === 0) {
    return [numbers, 'yes'];
  }
  return [numbers, 'no'];
}
