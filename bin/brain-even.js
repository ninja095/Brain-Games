#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';

const countOfRounds = 3;

const brainEven = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const answer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfAnswer = 0;
  while (countOfAnswer < countOfRounds) {
    console.log(`Question: ${randomNumber}`);
    const response = readlineSync.question('Your answer: ');
    if (answer === response) {
      console.log('Correct!');
      countOfAnswer += 1;
    } else {
      console.log(`"${response}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
