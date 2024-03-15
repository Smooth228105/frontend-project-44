#!/usr/bin/env node

import bodygume from '../src/bodygame.js';

const description = '"yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const numbers = Math.floor(Math.random() * 100);

  if (numbers % 2 && numbers % 3 && numbers % 4 && numbers % 7) {
    return [numbers, 'yes'];
  }
  return [numbers, 'no'];
};
bodygume(description, task);
