import getRandomNumber from '../randomNumber.js';
import generalLogic from '../index.js';

const rule = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const questionAndAnswer = () => {
  const question = getRandomNumber(1, 10);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrime = () => generalLogic(rule, questionAndAnswer);

export default startPrime;
