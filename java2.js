// // Step 2: Step 2: Write the logic to get the computer choice

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "Rock"
    } else if (computerChoice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}   

// console.log(getComputerChoice())
// the function is called and a number is generated, but goes 'nowhere'

const computerChoice = getComputerChoice()

// Step 3: Write the logic to get the human choice

function getHumanChoice() {
    let humanChoice = window.prompt("Make a choice: Rock, Paper, or Scissors");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock"
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper"
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors"
    } else {
        alert("refresh the page and try again. ")
    }
}
// console.log(getHumanChoice())
const humanChoice = getHumanChoice()

// Step 4: Declare the players score variables

let humanScore    = 0
let computerScore = 0

// Step 5: Write the logic to play a single round

function playRound(computerChoice, humanChoice) {
// Add missing Logic Code here
}

const humanSelection    = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)