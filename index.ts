import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*6+1);
console.log("Welcome to number Guessing game");
const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        messge:"Please guess a number between 1-6"

    }
]);
if( 
    answers.userGuessedNumber === randomNumber
){console.log("Congratulations! You guessed ight number");}
else {console.log("OH!OH! You guessed wrong number");}