#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = askName();

const descr1 = 'What number is missing in the progression?';
console.log(descr1);
const getProgression = () => {
  const arrInt = [];
  let startNumber = Math.round(Math.random() * 100);
  const quantity = 10;
  const stepFunc = Math.round(Math.random() * 10);
  let i = 0;
  const index = Math.round(Math.random(0, 9) * 10);
  let startNumberOne = startNumber;
  const memNumber = startNumber + (index + 1) * stepFunc;
  // console.log(startNumber, stepFunc, index, memNumber);
  while (i < quantity) {
    if (i === index) {
      const nextNum = startNumber + stepFunc;
      startNumberOne = nextNum;
      startNumber = '..';
    } else {
      startNumber += stepFunc;
      startNumberOne = startNumber;
    }
    arrInt.push(startNumber);
    startNumber = startNumberOne;
    i += 1;
  }
  const arrGcd = [arrInt, memNumber];
  return arrGcd;
};

let count = 0;
for (let i = 1; i <= 3; i += 1) {
  const firstQuest = getProgression();
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
