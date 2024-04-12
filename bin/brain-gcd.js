#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import bodygume from '../src/bodygame.js';

import task from '../src/game/gcd.js';

const description = 'Find the greatest common divisor of given numbers.';
bodygume(description, task);
