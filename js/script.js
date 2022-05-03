function computerPlay () {
    let randomNumber = Math.floor(Math.random()*10)
    //console.log (randomNumber)
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
                alert("It is a tie!")
                break
            }
            else if (computerSelection === "paper") {
                pc += 1
                alert("Paper! You lose.")
                break
            }
            else if (computerSelection === "scissors") {
                player += 1
                alert ("Scissors! You won!")
                break
            }
            else {
                alert ("That is not a valid option");
                break}
        
        case playerSelection.toLowerCase() === "paper":
            if (computerSelection === "paper") {
                alert ("It is a tie!")
                break
            }
            else if (computerSelection === "scissors") {
                pc += 1
                alert ("Scissors! You lose.")
                break
            }
            else if (computerSelection === "rock") {
                player += 1
                alert ("Rock! You won!")
                break
            }
            else {
                alert ("That is not a valid option")
                break}
        
        case playerSelection.toLowerCase() === "scissors":
            if (computerSelection === "scissors") {
                alert ("It is a tie!")
                break
            }
            else if (computerSelection === "rock") {
                pc += 1
                alert ("Rock! You lose.")
            }
            else if (computerSelection === "paper") {
                player += 1
                alert ("Paper! You won!")
                break
            }
            else {
                alert ("That is not a valid option")
                break}
    }
}

function game(){
    for (let i = 1; i < 6; i++) {
        playRound(prompt('What do you chose?'), computerPlay())
        alert (`Current results:\n Player: ${player} \n PC: ${pc} \n Game number ${i}`)
        }
    if (player > pc) {
            alert ("You won!")} 
        else if (player === pc) {alert ("Its a draw!")}
        else alert("You lose")
    }

let player = 0
let pc = 0

game()