import readlineSync from 'readline-sync';

const roundsQuantity = 3;

const createGame = (makeRound, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 1; i <= roundsQuantity; i += 1) {
    const [correctAnswer, statement] = makeRound();
    console.log(`Question: ${statement}`);
    const yourAnswer = readlineSync.question('Your answer? ');
    if (String(yourAnswer) !== String(correctAnswer)) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default createGame;
