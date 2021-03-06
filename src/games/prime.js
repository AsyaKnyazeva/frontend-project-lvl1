import makeRandomNumber from '../rand.js';
import createGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numberToCheck) => {
  if (numberToCheck < 2) {
    return false;
  }
  for (let div = 2; div <= (numberToCheck / 2); div += 1) {
    if (numberToCheck % div === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const numberToCheck = makeRandomNumber(0, 100);
  const statement = `${numberToCheck}`;
  const correctAnswer = isPrime(numberToCheck) ? 'yes' : 'no';
  return [correctAnswer, statement];
};

const makeNewGamePrime = () => createGame(makeRound, rules);

export default makeNewGamePrime;
