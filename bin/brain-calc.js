#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars

import bodygume from '../src/bodygame.js';

import task from '../src/game/calc.js';

const description = 'Welcome to the Brain Games!';
bodygume(description, task);
