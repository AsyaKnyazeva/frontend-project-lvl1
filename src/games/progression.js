import makeRandomNumber from '../rand.js';
import createGame from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (length, start, stepFunc) => {
  const progr = [];
  let startNumber = start;
  for (let i = 0; i < length; i += 1) {
    progr.push(startNumber);
    startNumber += stepFunc;
  }
  return progr;
};

const makeRound = () => {
  const progrLength = makeRandomNumber(5, 10);
  const progrStep = makeRandomNumber(5, 10);
  const progrStart = makeRandomNumber(5, 10);
  const progression = getProgression(progrLength, progrStart, progrStep);
  const index = makeRandomNumber(0, progrLength - 1);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const statement = progression.join(' ');
  return [correctAnswer, statement];
};

const newGame = () => createGame(makeRound, rules);

export default newGame;
