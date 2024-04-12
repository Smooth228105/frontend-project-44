#!/usr/bin/env node

import bodygume from '../src/bodygame.js';

import task from '../src/game/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
bodygume(description, task);
