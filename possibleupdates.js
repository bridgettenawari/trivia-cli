
//import { createSpinner } from "nanospinner";
//import figlet from "figlet";
//import gradientString from "gradient-string";




/*
//making a loading spinner in the answerQuestions() function
  async function answerQuestions() {
  for (const q of questions) {
    const answer = await inquirer.prompt([{
      name: "response",
      type: "list",
      message: q.message,
      choices: q.choices
    }]);

    const spinner = createSpinner("Checking answer...").start();
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (answer.response === q.answer) {
      spinner.success({ text: chalk.green("Correct answer! ✅") });
      correctAnswerCount++;
    } else {
      spinner.error({ text: chalk.red(`Incorrect! ❌ Correct answer: ${q.answer}`) });
    }

    console.log("\n");
  }
}
*/