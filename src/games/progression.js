import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rule = 'What number is missing in the progression?';
const lengthProgression = 10;
const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const hiddenIndex = getRandomNumber(0, lengthProgression - 1);
  const startProgression = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 5);
  const progression = getProgression(startProgression, stepProgression, lengthProgression);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startProgression = () => runEngine(rule, generateRound);

export default startProgression;
