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