let playerWins = 0;
let computerWins = 0;
let draws = 0;

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let result = document.querySelector(".result");
let picks = document.querySelector(".picks");

let scores = document.querySelector(".scores")
let resultText = document.createElement('div');
let picksText = document.createElement('div');
let cScoreText = document.querySelector(".cScore");
let pScoreText = document.querySelector(".pScore");

let restart = document.querySelector(".restart");



rockButton.addEventListener('click', () => {
    playRound('rock', computerPlay());
    if (playerWins == 5|| computerWins == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
});

paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay());
    if (playerWins == 5|| computerWins == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    if (playerWins == 5|| computerWins == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
});

restart.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    draws = 0;
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
    
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            picksText.textContent = "You picked rock and the computer picked rock";
            picks.appendChild(picksText);
            resultText.textContent = "Draw!";
            result.appendChild(resultText)
            draws += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "draw";
        }
        else if (computerSelection == "paper") {
            picksText.textContent = "You picked rock and the computer picked paper";
            picks.appendChild(picksText);
            resultText.textContent = "You lose! Paper wraps rock";
            result.appendChild(resultText)
            computerWins += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "loss";
        }
        else if (computerSelection == "scissors"){
            picksText.textContent = "You picked rock and the computer picked scissors";
            picks.appendChild(picksText);
            resultText.textContent = "You win! Rock smashes scissors";
            result.appendChild(resultText)
            playerWins += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "win";
        }
    }

    else if (playerSelection == "paper") {
        if  (computerSelection == "paper") {
            picksText.textContent = "You picked paper and the computer picked paper";
            picks.appendChild(picksText);
            resultText.textContent = "Draw!";
            result.appendChild(resultText);
            draws += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "draw";
            }
        else if (computerSelection == "scissors") {
            picksText.textContent = "You picked paper and the computer picked scissors";
            picks.appendChild(picksText);
            resultText.textContent = "You lose! Scissors cut paper";
            result.appendChild(resultText);
            computerWins += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "loss";
        }
        else {
            picksText.textContent = "You picked paper and the computer picked rock";
            picks.appendChild(picksText);
            resultText.textContent = "You win! Paper wraps rock";
            result.appendChild(resultText);
            playerWins += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "win";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            picksText.textContent = "You picked scissors and the computer picked scissors";
            picks.appendChild(picksText);
            resultText.textContent = "Draw!";
            result.appendChild(resultText);
            draws += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "draw";
        }
        else if (computerSelection == "paper") {
            picksText.textContent = "You picked scissors and the computer picked paper";
            picks.appendChild(picksText);
            resultText.textContent = "You win! Scissors cut paper";
            result.appendChild(resultText);
            playerWins += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "win";
        }
        else {
            picksText.textContent = "You picked scissors and the computer picked rock";
            picks.appendChild(picksText);
            resultText.textContent = "You lose! Rock smashes scissors";
            result.appendChild(resultText);
            computerWins += 1;
            cScoreText.textContent = String(computerWins);
            pScoreText.textContent = String(playerWins);
            scores.appendChild(cScoreText);
            scores.appendChild(pScoreText);
            return "loss";
        }
    }
}

