import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rule = 'What is the result of the expression?';

const calculate = (operand1, operand2, operation) => {
  switch (operation) {
    case '+': return operand1 + operand2;

    case '-': return operand1 - operand2;

    case '*': return operand1 * operand2;

    default:
      throw new Error(`Unknown operator: ${operation}`);
  }
};

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const operand1 = getRandomNumber(0, 10);
  const operand2 = getRandomNumber(0, 10);
  const randomNum = getRandomNumber(0, operations.length - 1);
  const operation = operations[randomNum];
  const question = `${operand1} ${operation} ${operand2}`;
  const answer = calculate(operand1, operand2, operation);
  return [question, String(answer)];
};

const startCalc = () => {
  runEngine(rule, generateRound);
};

export default startCalc;
