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