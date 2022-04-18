import getRandomNumber from '../utils.js';
import playGameLogic from '../index.js';

const rule = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 10);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrime = () => playGameLogic(rule, getQuestionAndAnswer);

export default startPrime;
