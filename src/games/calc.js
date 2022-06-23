import makeRandomNumber from '../rand.js';
import createGame from '../index.js';

export const rules = 'What is the result of the expression?';

const makeRound = () => {
  const random1 = makeRandomNumber(0, 100);
  const random2 = makeRandomNumber(0, 100);
  const operators = ['+', '-', '*'];

  const makeMathExercise = (randomNum1, randomNum2, randOperator) => {
    switch (randOperator) {
      case '+':
        return randomNum1 + randomNum2;
      case '-':
        return randomNum1 - randomNum2;
      case '*':
        return randomNum1 * randomNum2;
      default:
        return `Unknown operand: '${randOperator}'!`;
    }
  };
  const operator = operators[makeRandomNumber(0, operators.length - 1)];
  const correctAnswer = makeMathExercise(random1, random2, operator).toString();
  const statement = `${random1} ${operator} ${random2}`;
  return [correctAnswer, statement];
};
const makeNewGameCalc = () => createGame(makeRound, rules);

export default makeNewGameCalc;
