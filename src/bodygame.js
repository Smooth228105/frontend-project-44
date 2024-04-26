import readlineSync from 'readline-sync';
import greeting from './cli.js';

function bodygume(description, task) {
  const name = greeting();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, answerCorrect] = task();
    const questionP = `Question: ${question}`;
    console.log(questionP);
    const answer = readlineSync.question('Your answer: ');
    if (answer === answerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export default bodygume;
