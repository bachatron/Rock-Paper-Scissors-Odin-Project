let player = 0;
let pc = 0;

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener('click', playRock);

const score = document.getElementById('score');

const currentScore = document.getElementById('currentScore')

const currentGame = document.getElementById('currentGame');


function computerPlay () {
    let randomNumber = 0
    //Get a random number between 1 to 9
    while (randomNumber === 0) {
        randomNumber = Math.floor(Math.random()*10)
    }
    //Set the values for each range of number
    //console.log (randomNumber)
    if (randomNumber < 4) {
        //console.log ("rock");
        return 'rock'
    } else if (randomNumber < 7) {
        //console.log ("paper");
        return 'paper'
    } else if (randomNumber < 10){
        //console.log ("scissors");
        return 'scissors'
    } 
}    
//This function check what happens when you choose play Rock.
function playRock () {
    let pcSelected = computerPlay();
    if (pcSelected === 'rock') {
        currentGame.innerHTML = "DRAW";
    }
    else if (pcSelected === 'paper') {
        pc += 1
        currentGame.innerHTML = "Paper! You lose";
    }
    else if (pcSelected === 'scissors') {
        player += 1
        currentGame.innerHTML = "Scissors! You win";
    }
    updateScore()
     
}

//Updating
function updateScore() {
    currentScore.innerHTML = 'Current Score'
    score.innerHTML = 'PC: ' + pc + ' You: ' + player;
    if (pc === 5) {
        currentScore.innerHTML =('GAME OVER');
        reset();
    } else if (player === 5) {
        currentScore.innerHTML =('You won!');
        reset();
    }
    
}


function reset () {
    player = 0
    pc = 0
    currentGame.innerHTML = '-'
    





}