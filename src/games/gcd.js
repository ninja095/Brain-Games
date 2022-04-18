import getRandomNumber from '../randomNumber.js';
import generalLogic from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
};
const questionAndAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, String(answer)];
};
/* const getGreatestCommonDivisor = (num1, num2) => (num2 === 0
  ? num1 : getGreatestCommonDivisor(num2, num1 % num2));

console.log(getGreatestCommonDivisor(20, 10));

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
} */

const startGCD = () => generalLogic(rule, questionAndAnswer);

export default startGCD;
