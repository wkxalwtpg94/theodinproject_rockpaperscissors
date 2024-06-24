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


function getHumanChoice(mychoice) {
    
    console.log(mychoice)
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

let humanScore = 0;
let computerScore = 0;


// Write logic to play a single round
function playRound(humanChoice, computerChoice) {
    
    console.log(`Computer chooses: ${computerChoice}`)
    console.log(`You choose ${humanChoice}`)
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore = computerScore + 1;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore = humanScore + 1;
    } else if (humanChoice == computerChoice) {
        console.log("It's a draw!")
    } else if (humanChoice = "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore = humanScore + 1;
    } else if (humanChoice = "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore = computerScore + 1;
    } else if (humanChoice = "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore = computerScore + 1;
    } else if (humanChoice = "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore = humanScore + 1;
    }
}

/*
function playGame() {
    
    
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5 ; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current Score: You: ${humanScore}, Computer: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the winner!");
    } else {
        console.log ("It's a tie!")
    }
 
}

*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanSelection = getHumanChoice((button.textContent.toLowerCase()).trim());
        let computerSelecton = getComputerChoice();
        playRound(humanSelection, computerSelecton);
        

    });
});

