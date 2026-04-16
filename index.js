#!/usr/bin/env node
//import dependencies
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

//declare variable that keeps count of correct answers
let correctAnswerCount = 0;

//start a quiz game => use async function to use await
async function startGame() {
	const welcomeTitle = chalkAnimation.rainbow("Welcome to the Quiz Game!");
	await new Promise((resolve) => setTimeout(resolve, 1000));
	welcomeTitle.stop();
}
//view questions sequentially
//select answers to questions
//get feedback on their answers
//create an array of objects with the questions to enable looping
const questions = [
	{
		name: "question1",
		type: "list",
		message: "Who invented the first computer?",
		choices: ["Ada Lovelace", "Charles Babbage", "Heidwig Kiesler"], //charles
		answer: "Charles Babbage",
	},
	{
		name: "question2",
		type: "list",
		message: "When was the first computer invented?",
		choices: ["1822", "1915", "1860"], //1822
		answer: "1822",
	},
	{
		name: "question3",
		type: "list",
		message: "Who helped in discovering electricity?",
		choices: ["Benjamin Franklin", "Gandhi", "Heidwig Kiesler"], // ben
		answer: "Benjamin Franklin",
	},
	{
		name: "question4",
		type: "list",
		message: "Who was the first documented person to discover electricity?",
		choices: ["Otto von Guericke", "Charles Babbage", "William Gilbert"], //WIll
		answer: "William Gilbert",
	},
	{
		name: "question5",
		type: "list",
		message: "When was the name electricity coined?",
		choices: ["1459", "1646", "1706"], //1646
		answer: "1646",
	},
	{
		name: "question6",
		type: "list",
		message: "When was the first electric battery invented?",
		choices: ["1840", "1760", "1800"], //1800
		answer: "1800",
	},
	{
		name: "question7",
		type: "list",
		message: "Who pioneered AC power transmission?",
		choices: ["Thomas Edison", "Nikola Tesla", "Michael Faraday"], //nik
		answer: "Nikola Tesla",
	},
	{
		name: "question8",
		type: "list",
		message: "Who invented the first electric battery?",
		choices: ["Alessandro Volta", "Michael Robby", "Stephen King"], //ale
		answer: "Alessandro Volta",
	},
	{
		name: "question9",
		type: "list",
		message: "Who invented coding?",
		choices: ["Ada Lovelace", "Charles Babbage", "Heidwig Kiesler"], //ada
		answer: "Ada Lovelace",
	},
	{
		name: "question10",
		type: "list",
		message: "When was coding invented?",
		choices: ["1843", "1834", "1856"], //1843
		answer: "1843",
	},
];

//this function loops through the array of objects with the questions
async function answerQuestions() {
  //takes each question from the questions array and give it a variable e.g. question is a variable that is used to store all the data baing looped through in the questions array
  //dont use forEach because it doesn't wait for asynchronous and will display all the answers at once without waiting for user input instead use for..of
	for (const question of questions) {
		//this is whatis used to display the questions and answers on the terminal
		const answer = await inquirer.prompt([
			{
				name: "response", //key where answer is stored e.g if the answer is "B" then the answer will be stored in an object e.g {response: "B"}
				type: "list",
				message: question.message, //takes the message from the questions array 
				choices: question.choices, //takes the choices from the questions array 
				answer: question.answer, //takes the answer from the questions array
			},
		]);
    //answer.<key> reads the value
    //console.log(answer.name) answer.name doesn't work
		//answer.response is the answer that the user has chosen which has been stored inside an object with a key of response
		if (answer.response=== question.answer) {
			console.log(chalk.green("Correct answer!"));
			correctAnswerCount++; //if the answer is correct increase the correct answer count
		} else {
			console.log(chalk.red("Incorrect answer!"));
		}
	}
}

//get feedback when game is over
//used an async function to use the rainbow text cause without it you have to console.log and you just get objects and functions and arrays not the actual text color
async function endGame() {
  const endText = chalkAnimation.rainbow(`You have scored ${correctAnswerCount}/${questions.length}
  Thank you for playing!`)
  await new Promise((resolve) => setTimeout(resolve, 1000)); //delays the text being displayed
	endText.stop(); //stops the rainbow text
	process.exit();//exits the trivia and goes back to the normal terminal
}

console.clear();
//i think it was called top level await (apparently its risky but idk do more research)
//need to use await or use timeout in order for the code to run sequentially otherwise only the first question will run and then the game will end and the start function also wont work because it has a timeout hence the other code will have executed before its done being in timeout
await startGame();
await answerQuestions();
await endGame();
