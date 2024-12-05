const prompt = require("prompt-sync")();

// Function to get human choice
function getHumanChoice () {
    let choice;
    do {
        choice = prompt("Your choice (rock, paper or scissors): ")
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors")
    return choice;
}


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


//vars to track scores
let humanScore = 0
let computerScore = 0


//logic to play a round
function playRound() {
    const humanChoice = getHumanChoice(); // Get the human's choice
    const computerChoice = getComputerChoice(); // Get the computer's choice
    console.log("Computer choice: " + computerChoice);
  
    if (humanChoice === computerChoice) {
      console.log("tie!");
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
               (computerChoice === "paper" && humanChoice === "rock") ||
               (computerChoice === "scissors" && humanChoice === "paper")) {
      console.log("you lose!");
      computerScore++; // Increment computer's score
    } else {
      console.log("you win!");
      humanScore++; // Increment human's score
    }
  }



//logic to play multiple rounds

function playGame (times) {
    for (let i = 0; i < times; i++) {
        playRound();
    }
    console.log("Final score: Human - " + humanScore + ", Computer - " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame(5)