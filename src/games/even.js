import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import getRandomNumber from '../randomNumber.js';

const countOfRounds = 3;
const isEvenNumber = (num) => num % 2 === 0;
const questionAndAnswer = () => {
  const question = getRandomNumber(10);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfAnswer = 0;
  while (countOfAnswer < countOfRounds) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');
    if (correctAnswer === response) {
      console.log('Correct!');
      countOfAnswer += 1;
    } else {
      console.log(`"${response}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainEven();
