#!/usr/bin/env node
import bodygume from '../src/bodygame.js';

import task from '../src/game/progression.js';

const description = 'What number is missing in the progression?';

bodygume(description, task);
