import readlineSync from 'readline-sync';

const countOfRounds = 3;

const generalLogic = (rule, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let countOfAnswer = 0;
  while (countOfAnswer < countOfRounds) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');
    if (correctAnswer === response) {
      console.log('Correct!');
      countOfAnswer += 1;
    } else {
      console.log(`"${response}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generalLogic;
