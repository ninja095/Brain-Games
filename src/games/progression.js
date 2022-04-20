import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rule = 'What number is missing in the progression?';
const length = 10;
const getProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const hiddenNumber = getRandomNumber(0, length - 1);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const progression = getProgression(start, step);
  const answer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startProgression = () => runEngine(rule, generateRound);

export default startProgression;
