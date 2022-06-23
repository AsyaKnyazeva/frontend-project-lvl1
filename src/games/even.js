import makeRandomNumber from '../rand.js';
import createGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const makeRound = () => {
  const randomNum = makeRandomNumber(0, 100);
  const statement = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [correctAnswer, statement];
};

const makeNewGameEven = () => createGame(makeRound, rules);

export default makeNewGameEven;
