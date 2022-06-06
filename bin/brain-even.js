import askName from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let name = askName();



const descr = 'Answer "yes" if number odd otherwise answer "no".';
console.log(descr);
const getQuestion = () => {
let num = Math.round(Math.random() * 100);
return num};

let count = 0;
for (let i = 1; i <= 3; i += 1) {
let numActive = getQuestion();
console.log(`Question:`, numActive);
const answer = readlineSync.question('Your answer:');
if (numActive % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      count +=1;
    } else {
      console.log(`'${answer}' is wrong.`);
      break;

    }
  }
  if (numActive % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      count +=1;
    } else {
      console.log(`'${answer}' is wrong.`);
      break;
    }
  }
};
if (count === 3){
    console.log(`Congratulations, ${name}!`)
};




  