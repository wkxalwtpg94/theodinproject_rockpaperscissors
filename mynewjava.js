

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
let round_number = 1;


// Write logic to play a single round
function playRound(humanChoice, computerChoice) {
    
    console.log(`Computer chooses: ${computerChoice}`)
    console.log(`You choose: ${humanChoice}`)

    const mainbody = document.querySelector("body")
    const div_element_one = document.createElement("div")
    const div_element_two = document.createElement("div")
        

    div_element_one.textContent = `Computer chooses: ${computerChoice} & You choose: ${humanChoice}`
        
    mainbody.appendChild(div_element_one)
    mainbody.appendChild(div_element_two)




    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore = computerScore + 1;
        div_element_two.textContent = "You Lose! Paper Beats Rock."
        round_number = round_number + 1

    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore = humanScore + 1;
        div_element_two.textContent = "You win! Rock beats Scissors."
        round_number = round_number + 1

    } else if (humanChoice == computerChoice) {
        console.log("It's a draw!")
        div_element_two.textContent = "It's a draw!"
        round_number = round_number + 1

    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore = humanScore + 1;
        div_element_two.textContent = "You win! Paper beats Rock."
        round_number = round_number + 1

    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore = computerScore + 1;
        div_element_two.textContent = "You lose! Scissors beats Paper."
        round_number = round_number + 1

    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore = computerScore + 1;
        div_element_two.textContent = "You lose! Rock beats Scissors."
        round_number = round_number + 1

    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore = humanScore + 1;
        div_element_two.textContent = "You win! Scissors beats Paper."
        round_number = round_number + 1
    }
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const mainbody = document.querySelector("body")
        if (round_number <6) {
        // prints the round number
        const round_number_element = document.createElement("div")
        mainbody.appendChild(round_number_element)
        round_number_element.textContent = `Round Number: ${round_number}`
        

        // gets the Human Selection
        let humanSelection = getHumanChoice((button.textContent.toLowerCase()).trim());
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection,computerSelection)
        
        countScore()
        mainbody.appendChild(document.createElement("br"))
        
        } else {
            let finished_game = document.createElement("div");
            finished_game.textContent = "Game is finished, Refresh to play again!"
            mainbody.appendChild(finished_game)

        }
    });
});


function countScore() {
    const mainbody = document.querySelector("body")
    const div_element_three = document.createElement("div")
    const div_element_four = document.createElement("div")
    mainbody.appendChild(div_element_three)
    mainbody.appendChild(div_element_four)

        
        div_element_three.textContent = `Current Score: You: ${humanScore}, Computer: ${computerScore}`

    }

 



function playGame() {
    
 




    for (let i = 0; i < 5 ; i++) {
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






