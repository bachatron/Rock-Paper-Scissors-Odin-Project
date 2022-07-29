let player = 0;
let pc = 0;

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener('click', playRock);

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', playPaper);

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', playScissors)

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
        currentGame.textContent = "DRAW";
    }
    else if (pcSelected === 'paper') {
        pc += 1
        currentGame.textContent = "Paper! You lose";
    }
    else if (pcSelected === 'scissors') {
        player += 1
        currentGame.textContent = "Scissors! You win";
    }
    updateScore()
     
}

function playPaper () {
    let pcSelected = computerPlay();
    if (pcSelected === 'paper') {
        currentGame.textContent = "DRAW";
    }
    else if (pcSelected === 'scissors') {
        pc += 1
        currentGame.textContent = "Scissors! You lose";
    }
    else if (pcSelected === 'rock') {
        player += 1
        currentGame.textContent = "Rock! You win";
    }
    updateScore()
     
}

function playScissors () {
    let pcSelected = computerPlay();
    if (pcSelected === 'scissors') {
        currentGame.textContent = "DRAW";
    }
    else if (pcSelected === 'rock') {
        pc += 1
        currentGame.textContent = "Rock! You lose";
    }
    else if (pcSelected === 'paper') {
        player += 1
        currentGame.textContent = "Paper! You win";
    }
    updateScore()
     
}

//Updating current score and game status
function updateScore() {
    if (currentScore.innerText !== 'Current Score') currentScore.innerText = 'Current Score';
    score.innerHTML = 'PC: ' + pc + ' You: ' + player;
    if (pc === 5) {
        currentScore.innerHTML =('GAME OVER');
        reset();
    } else if (player === 5) {
        currentScore.innerHTML =('You win!');
        reset();
    }
    
}

//Reset every score
function reset () {
    player = 0
    pc = 0
    currentGame.textContent= 'Click to play again'
    





}