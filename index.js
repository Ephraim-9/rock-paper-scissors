const prompt = require('prompt-sync')();
let getHumanChoice = prompt("your choice: ").toLowerCase();
function getComputerChoice  () {
   const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
    return("rock");
    }
    else if (randomNumber === 1) {
    return("paper");
    }
    else {
    return("scissors")
    }
}

const computerChoice = getComputerChoice();
console.log("Computer choice: " + computerChoice);

let humanScore = 0

let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("tie!")
    }
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("you loose!")
    }
    else {
        console.log("you win!")
    }
}
  
const humanSelection = getHumanChoice;
const computerSelection = computerChoice;
 
playRound(humanSelection, computerSelection);