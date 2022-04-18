import getRandomNumber from '../utils.js';
import playGameLogic from '../index.js';

const rule = 'What is the result of the expression?';

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+': return a + b;

    case '-': return a - b;

    case '*': return a * b;

    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operations = ['+', '*', '-'];
  const a = getRandomNumber(0, 10);
  const b = getRandomNumber(0, 10);
  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${a} ${operation} ${b}`;
  const answer = calculate(a, b, operation);
  return [question, String(answer)];
};

const startCalc = () => {
  playGameLogic(rule, getQuestionAndAnswer);
};

export default startCalc;
