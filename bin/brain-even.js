#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars, consistent-return

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const nameUser = greeting();
const taskF = () => {
  const numbers = Math.floor(Math.random() * 100);
  if (numbers % 2 === 0) {
    return [numbers, 'yes'];
  }
  return [numbers, 'no'];
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
function even(task, name) {
  for (let i = 0; i < 3; i += 1) {
    const [question, answerCorrect] = task();
    const questionP = `'Question: ${question}`;
    console.log(questionP);
    const answer = readlineSync.question('Your answer: ');
    if (answer === answerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

even(taskF, nameUser);
