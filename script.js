let playerWins = 0;
let computerWins = 0;
let draws = 0;

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let buttons = document.getElementsByTagName("button");

let result = document.querySelector(".result");
let picks = document.querySelector(".picks");
let gameOver = document.querySelector(".gameOver");

let scores = document.querySelector(".scores")
let resultText = document.createElement('div');
let picksText = document.createElement('div');
let cScoreText = document.querySelector(".cScore");
let pScoreText = document.querySelector(".pScore");
let gameOverText = document.querySelector(".gameOver");

let restart = document.querySelector(".restart");



rockButton.addEventListener('click', () => {
    playRound('rock', computerPlay());
    if (computerWins == 5 || playerWins == 5) {
        for (let i = 0; i < 3; i++) {
            buttons[i].disabled = true;
        }
    }
    if (computerWins == 5) {
        gameOverText.textContent = "The computer wins this game";
        gameOver.appendChild(gameOverText);
    }
    else if (playerWins == 5) {
        gameOverText.textContent = "You win this game";
        gameOver.appendChild(gameOverText);
    }
});

paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay());
    if (computerWins == 5 || playerWins == 5) {
        for (let i = 0; i < 3; i++) {
            buttons[i].disabled = true;
        }
    }
    if (computerWins == 5) {
        gameOverText.textContent = "The computer wins this game";
        gameOver.appendChild(gameOverText);
    }
    else if (playerWins == 5) {
        gameOverText.textContent = "You win this game";
        gameOver.appendChild(gameOverText);
    }
     
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    if (computerWins == 5 || playerWins == 5) {
        for (let i = 0; i < 3; i++) {
            buttons[i].disabled = true;
        }
    }
    if (computerWins == 5) {
        gameOverText.textContent = "The computer wins this game";
        gameOver.appendChild(gameOverText);
    }
    else if (playerWins == 5) {
        gameOverText.textContent = "You win this game";
        gameOver.appendChild(gameOverText);
    }
     
});

restart.addEventListener('click', () => {
    window.location.reload();
});



function computerPlay() {
    let rps = Math.floor(Math.random() * 3) + 1;
    switch(rps) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        picksText.textContent = "You picked " + playerSelection + " and the computer picked " + computerSelection;
        picks.appendChild(picksText);
        resultText.textContent = "Result: Draw!";
        result.appendChild(resultText);
        draws += 1;
        cScoreText.textContent = "Computer: " + computerWins;
        pScoreText.textContent = "Player: " + playerWins;
        scores.appendChild(pScoreText);
        scores.appendChild(cScoreText);
        
    }

    else {
        if (playerSelection == 'rock') {
            if (computerSelection == "paper") {
                picksText.textContent = "You picked rock and the computer picked paper";
                picks.appendChild(picksText);
                resultText.textContent = "Result: You lose! Paper wraps rock";
                result.appendChild(resultText)
                computerWins += 1;
                cScoreText.textContent = "Computer: " + computerWins;
                pScoreText.textContent = "Player: " + playerWins;
                scores.appendChild(pScoreText);
                scores.appendChild(cScoreText);
                
            }
            
            else {
                picksText.textContent = "You picked rock and the computer picked scissors";
                picks.appendChild(picksText);
                resultText.textContent = "Result: You win! Rock smashes scissors";
                result.appendChild(resultText)
                playerWins += 1;
                cScoreText.textContent = "Computer: " + computerWins;
                pScoreText.textContent = "Player: " + playerWins;
                scores.appendChild(pScoreText); 
                scores.appendChild(cScoreText);      
            }
        }
        
    
        else if (playerSelection == 'paper') {
            if (computerSelection == "scissors") {
                picksText.textContent = "You picked paper and the computer picked scissors";
                picks.appendChild(picksText);
                resultText.textContent = "Result: You lose! Scissors cut paper";
                result.appendChild(resultText);
                computerWins += 1;
                cScoreText.textContent = "Computer: " + computerWins;
                pScoreText.textContent = "Player: " + playerWins;
                scores.appendChild(pScoreText); 
                scores.appendChild(cScoreText);
            }
            else {
                picksText.textContent = "You picked paper and the computer picked rock";
                picks.appendChild(picksText);
                resultText.textContent = "Result: You win! Paper wraps rock";
                result.appendChild(resultText);
                playerWins += 1;
                cScoreText.textContent = "Computer: " + computerWins;
                pScoreText.textContent = "Player: " + playerWins;
                scores.appendChild(pScoreText); 
                scores.appendChild(cScoreText);
                   
            }
        }

        else {
            if (computerSelection == "paper") {
                picksText.textContent = "You picked scissors and the computer picked paper";
                picks.appendChild(picksText);
                resultText.textContent = "Result: You win! Scissors cut paper";
                result.appendChild(resultText);
                playerWins += 1;
                cScoreText.textContent = "Computer: " + computerWins;
                pScoreText.textContent = "Player: " + playerWins;
                scores.appendChild(pScoreText);
                scores.appendChild(cScoreText);
            }
            else {
                picksText.textContent = "You picked scissors and the computer picked rock";
                picks.appendChild(picksText);
                resultText.textContent = "Result: You lose! Rock smashes scissors";
                result.appendChild(resultText);
                computerWins += 1;
                cScoreText.textContent = "Computer: " + computerWins;
                pScoreText.textContent = "Player: " + playerWins;
                scores.appendChild(pScoreText);
                scores.appendChild(cScoreText);
                
            }
        
        }
    }
}



