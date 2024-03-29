#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars, consistent-return

// import readlineSync from 'readline-sync';
// import greeting from '../src/cli.js';

import bodygume from '../src/bodygame.js';

/// const nameUser = greeting();
const task = () => {
  const numbers = Math.floor(Math.random() * 100);
  if (numbers % 2 === 0) {
    return [numbers, 'yes'];
  }
  return [numbers, 'no'];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
bodygume(description, task);
