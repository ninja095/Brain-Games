import getRandomNumber from '../utils.js';
import playGemeLogic from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 10);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => {
  playGemeLogic(rule, getQuestionAndAnswer);
};

export default startEven();
