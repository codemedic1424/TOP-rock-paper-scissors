//  Global Variables

const computerChoice = getComputerChoice();
const humanChoice    = getHumanChoice();

// Functions and Methods

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}  

function getHumanChoice() {
    let humanChoice = window.prompt("Make a choice: Rock, Paper, or Scissors");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}

function playGame() {
    let humanScore    = 0;
    let computerScore = 0;
    function playRound(computerChoice, humanChoice) {
        if (humanChoice == "Rock" && computerChoice == "Rock") {
            console.log("Draw!");
        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
            computerScore ++;
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            humanScore ++;
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            humanScore ++;
        } else if (humanChoice == "Paper" && computerChoice == "Paper") {
            console.log("Draw!");
        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
            computerScore ++;
        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
            computerScore ++;
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            humanScore ++;
        } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
            console.log("Draw!");
        }
    }  
}  

function score() {
    console.log("Player Score: ",humanScore);
    console.log("Computer Score: ",computerScore);
 }

// Inits. and Event Listeners
