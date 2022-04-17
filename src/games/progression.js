import getRandomNumber from '../randomNumber.js';
import generalLogic from '../index.js';

const rule = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  const startProgression = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 5);
  const lengthProgression = 10;
  const hiddenNumber = getRandomNumber(0, lengthProgression);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startProgression + stepProgression * i);
  }
  const answer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const getProgression = () => generalLogic(rule, questionAndAnswer);

export default getProgression;