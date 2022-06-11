#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = askName();

const descr1 = 'What is the result of the expression?';
console.log(descr1);
const getQuestionAdd = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const sumOfTwo = num1 + num2;
  const arrSum = [`${num1} + ${num2}?`, sumOfTwo];
  return arrSum;
};
const getQuestionDiff = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const diffOfTwo = num1 - num2;
  const arrDiff = [`${num1}-${num2}?`, diffOfTwo];
  return arrDiff;
};
const getQuestionMult = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const multOfTwo = num1 * num2;
  const arrMult = [`${num1}*${num2}?`, multOfTwo];
  return arrMult;
};

let count = 0;
for (let i = 1; i <= 3; i += 1) {
  const firstQuest = getQuestionAdd();
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

  const secondQuest = getQuestionDiff();
  console.log('Question:', secondQuest[0]);
  const answerSecond = readlineSync.question('Your answer:');
  if (secondQuest[1] === Number(answerSecond)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answerSecond}' was wrong. ;(. Correct answer was '${secondQuest[1]}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  const thirdQuest = getQuestionMult();
  console.log('Question:', thirdQuest[0]);
  const answerThird = readlineSync.question('Your answer:');
  if (thirdQuest[1] === Number(answerThird)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answerThird}' was wrong. ;(. Correct answer was '${thirdQuest[1]}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
