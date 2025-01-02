// Function to get human choice
function getHumanChoice () {
  const buttonList = document.getElementById("buttonList");

  buttonList.addEventListener("click", function(event){
    if (event.target.tagName === "BUTTON") {
      const playerSelection = event.target.textContent;
      playRound(playerSelection);
    }
  });
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
function playRound(playerSelection) {
    const computerChoice = getComputerChoice(); // Get the computer's choice
    const compScore = document.getElementById("compScore");
    const humScore = document.getElementById("humScore"); 
    const resultDiv = document.getElementById("result");
    const winDiv = document.getElementById("winner");
    if (playerSelection === computerChoice) {
        resultDiv.textContent = "It's a tie!";
    } else if ((computerChoice === "rock" && playerSelection === "scissors") ||
               (computerChoice === "paper" && playerSelection === "rock") ||
               (computerChoice === "scissors" && playerSelection === "paper")) {
        resultDiv.textContent = "You lose! Computer chose " + computerChoice;
        computerScore++; // Increment computer's score


    } else {
        resultDiv.textContent = "You win! Computer chose " + computerChoice;
        humanScore++; // Increment human's score

    }
    compScore.textContent = "Computer score: " + computerScore;
    humScore.textContent = "Human score: " + humanScore;
    if (humanScore >= 5) {
      computerScore = 0;
      humanScore = 0;
      winDiv.textContent = "You won the game!";
    }
    else if (computerScore >= 5) {
      computerScore = 0;
      humanScore = 0;
      winDiv.textContent = "Computer won the game!";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    getHumanChoice();
});