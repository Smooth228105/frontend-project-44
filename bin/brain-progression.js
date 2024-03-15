#!/usr/bin/env node
import bodygume from '../src/bodygame.js';

const description = 'What number is missing in the progression?';

const task = () => {
  const yesLength = Math.floor(Math.random() * 5) + 5;
  const one = Math.round(Math.random() * 50);
  const hiddenIndex = Math.floor(Math.random() * yesLength);
  const difference = Math.round(Math.random() * 10);

  const progression = [];
  progression.push(one);

  for (let i = 1; i < yesLength; i += 1) {
    progression.push(progression[i - 1] + difference);
  }
  const result = `${progression[hiddenIndex]}`;
  progression[hiddenIndex] = '..';
  return [progression.join(' '), result];
};

bodygume(description, task);
