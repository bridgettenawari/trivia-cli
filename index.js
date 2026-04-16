#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradientString from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let correctAnswerCount = 0;
//start a quiz game
async function startGame() {
	const welcomeTitle = chalkAnimation.rainbow("Welcome to the Quiz Game!");
	await new Promise(resolve => setTimeout(resolve, 2000));
	welcomeTitle.stop();
}
//view questions sequentially
//select answers to questions
//get feedback on their answers
async function question1() {
	const answers = await inquirer.prompt({
		name: "question1",
		type: "list",
		message: "Who invented the first computer?",
		choices: ["Ada Lovelace", "Charles Babbage", "Heidwig Kiesler"], //charles
    // answer: "Charles Babbage"
	});
	if (answers.question1 === "Charles Babbage") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question2() {
	const answers = await inquirer.prompt({
		name: "question2",
		type: "list",
		message: "When was the first computer invented?",
		choices: ["1822", "1915", "1860"], //1822
    // answer: "1822"
	});
	if (answers.question2 === "1822") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {          
		console.log("Incorrect answer");
	}
}
async function question3() {
	const answers = await inquirer.prompt({
		name: "question3",
		type: "list",
		message: "Who helped in discovering electricity?",
		choices: ["Benjamin Franklin", "Gandhi", "Heidwig Kiesler"], // ben
    // answer: "Benjamin Franklin"
	});
	if (answers.question3 === "Benjamin Franklin") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question4() {
	const answers = await inquirer.prompt({
		name: "question4",
		type: "list",
		message: "Who was the first documented person to discover electricity?",
		choices: ["Otto von Guericke", "Charles Babbage", "William Gilbert"], //WIll
    // answer: "William Gilbert"
	});
	if (answers.question4 === "William Gilbert") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question5() {
	const answers = await inquirer.prompt({
		name: "question5",
		type: "list",
		message: "When was the name electricity coined?",
		choices: ["1459", "1646", "1706"], //1646
    // answer: "1646"
	});
	if (answers.question5 === "1646") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question6() {
	const answers = await inquirer.prompt({
		name: "question6",
		type: "list",
		message: "When was the first electric battery invented?",
		choices: ["1840", "1760", "1800"], //1800
    // answer: "1800"
	});
	if (answers.question6 === "1800") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question7() {
	const answers = await inquirer.prompt({
		name: "question7",
		type: "list",
		message: "Who pioneered AC power transmission?",
		choices: ["Thomas Edison", "Nikola Tesla", "Michael Faraday"], //nik
    // answer: "Nikola Tesla"
	});
	if (answers.question7 === "Nikola Tesla") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question8() {
	const answers = await inquirer.prompt({
		name: "question8",
		type: "list",
		message: "Who invented the first electric battery?",
		choices: ["Alessandro Volta", "Michael Robby", "Stephen King"], //ale
    // answer: "Alessandro Volta"
	});
	if (answers.question8 === "Alessandro Volta") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question9() {
	const answers = await inquirer.prompt({
		name: "question9",
		type: "list",
		message: "Who invented coding?",
		choices: ["Ada Lovelace", "Charles Babbage", "Heidwig Kiesler"], //ada
    // answer: "Ada Lovelace"
	});
	if (answers.question9 === "Ada Lovelace") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}
async function question10() {
	const answers = await inquirer.prompt({
		name: "question10",
		type: "list",
		message: "When was coding invented?",
		choices: ["1843", "1834", "1856"], //1843
    // answer: "1843"
	});
	if (answers.question10 === "1843") {
		console.log("Correct Answer!");
    correctAnswerCount++;
	} else {
		console.log("Incorrect answer");
	}
}

//get feedback when game is over
function endGame() {
	console.log("Thank you for playing");
	process.exit();
}

console.clear();
await startGame();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
endGame();
