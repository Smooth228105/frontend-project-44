#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars

import bodygume from '../src/bodygame.js';

import task from '../src/game/calc.js';

const description = 'What is the result of the expression?';
bodygume(description, task);
