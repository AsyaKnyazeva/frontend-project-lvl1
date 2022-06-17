const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
    let a = num1;
    let b = num2;
    let divis;
    while (b !== 0) {
      divis = b;
      b = a % b;
      a = divis;
    }
    return divis;
  };
  


const makeRound = () => {
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
  const statement = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return [correctAnswer, statement];
};

export { makeRound, rules };