function computerPlay () {
    let randomNumber = Math.floor(Math.random()*10)
    console.log (randomNumber)
    switch (true) {
        case randomNumber < 4:
            return "rock";
        case randomNumber < 7:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    switch (true) {
        case playerSelection.toLowerCase() === "rock":
            if (computerSelection === "rock") {
                return "It is a tie!";
            }
            else if (computerSelection === "paper") {
                return "Paper! You lose.";
            }
            else if (computerSelection === "scissors") {
                return "Scissors! You won!";
            }
            else return "That is not a valid option";
        
        case playerSelection.toLowerCase() === "paper":
            if (computerSelection === "paper") {
                return "It is a tie!";
            }
            else if (computerSelection === "scissors") {
                return "Scissors! You lose.";
            }
            else if (computerSelection === "rock") {
                return "Rock! You won!";
            }
            else return "That is not a valid option";
        
        case playerSelection.toLowerCase() === "scissors":
            if (computerSelection === "scissors") {
                return "It is a tie!";
            }
            else if (computerSelection === "rock") {
                return "Rock! You lose.";
            }
            else if (computerSelection === "paper") {
                return "Paper! You won!";
            }
            else return "That is not a valid option";
    }
}