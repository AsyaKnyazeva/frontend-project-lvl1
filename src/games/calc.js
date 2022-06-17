#!/usr/bin/env node
// import readlineSync from 'readline-sync';

export const rules = 'What is the result of the expression?';

export const makeRound = () => {
  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  // var randOperator = '';
  const randOperator = ['+', '-', '*'];
  const correctAnswer = [];
  const k = Math.round(Math.random() * 3);
  const neededOperator = randOperator[k];

  if (neededOperator === '+') {
    correctAnswer.push(randomNum1 + randomNum2);
  } else if (neededOperator === '-') {
    correctAnswer.push(randomNum1 - randomNum2);
  } else if (neededOperator === '*') {
    correctAnswer.push(randomNum1 * randomNum2);
  }

  const statement = `${randomNum1} ${neededOperator} ${randomNum2}`;
  return [correctAnswer, statement];
};
