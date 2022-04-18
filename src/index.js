import readlineSync from 'readline-sync';

const countOfRounds = 3;

const playGameLogic = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < countOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');
    if (correctAnswer === response) {
      console.log('Correct!');
    } else {
      console.log(`"${response}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGameLogic;
