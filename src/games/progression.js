import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const rule = 'What number is missing in the progression?';
const lengthProgression = 10;
const getProgression = () => {
  const startProgression = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 5);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startProgression + stepProgression * i);
  }
  return progression;
};

const generateRound = () => {
  const hiddenNumber = getRandomNumber(0, lengthProgression - 1);
  const progression = getProgression();
  const answer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startProgression = () => runEngine(rule, generateRound);

export default startProgression;
