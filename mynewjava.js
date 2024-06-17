console.log("Hello World")


function getComputerChoice() {
    let chosenchoice = Math.random();

    if (chosenchoice < (1/3)) {
        return "Rock"
    } else if (chosenchoice >= (1/3) && chosenchoice < (2/3)) {
        return "Paper"
    } else {
        return "Scissors"
    }

}


function getHumanChoice() {
    let mychoice = prompt("Please enter: Rock, Paper, or Scissors.")

    if (mychoice.toLowerCase() == "rock") {
        return "Rock"
    } else if (mychoice.toLowerCase() == "paper") {
        return "Paper"
    } else if (mychoice.toLowerCase() == "scissors") {
        return "Scissors"
    } else {
        console.log("Invalid choice, please try again.");
    }

}

// Declare players score variables
let humanScore = 0;
let computerScore = 0;


// Write logic to play a single round
function playRound() {
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    console.log(`Computer chooses: ${computerChoice}`)

    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore = computerScore + 1;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore = humanScore + 1;
    } else if (humanChoice == computerChoice) {
        console.log("It's a draw!")
    }


}
