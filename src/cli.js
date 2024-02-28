#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your name: ');
  console.log(`'Hello, ${name}!`);
  return name;
}
