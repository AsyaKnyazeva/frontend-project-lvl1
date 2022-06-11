#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = askName();

const descr1 = 'Find the greatest common divisor of given numbers.';
console.log(descr1);
const findGcd = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const gcd = (a = num1, b = num2) => (b === 0 ? Math.abs(a) : gcd(b, a % b));
  const arrGcd = [`${num1}  ${num2}`, gcd()];
  return arrGcd;
};

let count = 0;
for (let i = 1; i <= 3; i += 1) {
  const firstQuest = findGcd();
  console.log('Question:', firstQuest[0]);
  const answerFirst = readlineSync.question('Your answer:');
  if (firstQuest[1] === Number(answerFirst)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answerFirst}' was wrong. ;(. Correct answer was '${firstQuest[1]}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
