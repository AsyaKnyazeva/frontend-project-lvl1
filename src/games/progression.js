import rand from '../rand.js';
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
  const progrLength = rand(5, 10);
  const progrStep = rand(5, 10);
  const progrStart = rand(5, 10);
  const progression = getProgression(progrLength, progrStart, progrStep);
  const index = rand(0, progrLength - 1);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const statement = progression.join(' ');
  return [correctAnswer, statement];
};

const newGame = () => createGame(makeRound, rules);

export default newGame;
