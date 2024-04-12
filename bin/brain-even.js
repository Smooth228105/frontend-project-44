#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars, consistent-return

// import readlineSync from 'readline-sync';
// import greeting from '../src/cli.js';

import bodygume from '../src/bodygame.js';

import task from '../src/game/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
bodygume(description, task);
