#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = askName();

const descr1 = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(descr1);
const getNumber = () => {
  const numberToCheck = Math.round(Math.random() * 100);
  const isPrime = () => {
    if (numberToCheck < 2) {
      return 'no';
    }
    for (let div = 2; div <= (numberToCheck / 2); div += 1) {
      if (numberToCheck % div === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const arrGcd = [numberToCheck, isPrime()];
  return arrGcd;
};

let count = 0;
for (let i = 1; i <= 3; i += 1) {
  const firstQuest = getNumber();
  console.log('Question:', firstQuest[0]);
  const answerFirst = readlineSync.question('Your answer:');
  if (firstQuest[1] === answerFirst) {
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
