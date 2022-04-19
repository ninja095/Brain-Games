import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(0, 10);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => {
  runEngine(rule, generateRound);
};

export default startEven;
