const prompt = require("prompt-sync")();

// Function to get human choice
function getHumanChoice() {
    return prompt("Your choice (rock, paper, scissors): ").toLowerCase();
}

// Logic to get human choice
let humanChoice = getHumanChoice();

// Start the loop to get a valid human choice
do {
    console.log(`You entered: ${humanChoice}`);
} while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
);

//make func to get comp choice
function getComputerChoice () {
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


//vars to track scores
var humanScore = 0
var computerScore = 0


//logic to play a single round
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("tie!")
    }
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("you lose!")
    }
    else {
        console.log("you win!")
    }
}

playRound(humanChoice, computerChoice)