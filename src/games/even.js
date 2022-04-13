import getRandomNumber from '../randomNumber.js';
import generalLogic from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;

const questionAndAnswer = () => {
  const question = getRandomNumber(0, 10);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => {
  generalLogic(rule, questionAndAnswer);
};

export default startEven();
