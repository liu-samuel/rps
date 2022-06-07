let playerWins = 0;
let computerWins = 0;
let draws = 0;

let rockButton = document.getElementsByClassName(".rock");
let paperButton = document.getElementsByClassName(".paper");
let scissorsButton = document.getElementsByClassName(".scissors");

let result = document.querySelector(".result");
let picks = document.querySelector(".picks");

let resultText = document.createElement('div');
resultText.classList.add('resultText');

let picksText = document.createElement('div');
picksText.classList.add('resultText');



rockButton.onclick = function () {
    playRound('rock', computerPlay());
}

paperButton.onclick = function () {
    playRound('paper', computerPlay());
}

scissorsButton.onclick = function () {
    playRound('scissors', computerPlay());
}



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
            picksText.textContent("You picked rock and the computer picked rock");
            picks.appendChild(picksText);
            resultText.textContent("Draw!");
            result.appendChild(resultText)
            return "draw";
        }
        else if (computerSelection == "paper") {
            picksText.textContent("You picked rock and the computer picked paper");
            picks.appendChild(picksText);
            resultText.textContent("You lose! Paper wraps rock");
            result.appendChild(resultText)
            return "loss";
        }
        else if (computerSelection == "scissors"){
            picksText.textContent("You picked rock and the computer picked scissors");
            picks.appendChild(picksText);
            resultText.textContent("You win! Rock smashes scissors");
            result.appendChild(resultText)
            return "win";
        }
    }

    else if (playerSelection == "paper") {
        if  (computerSelection == "paper") {
            picksText.textContent("You picked paper and the computer picked paper");
            picks.appendChild(picksText);
            resultText.textContent("Draw!");
            result.appendChild(resultText);
            return "draw";
            }
        else if (computerSelection == "scissors") {
            picksText.textContent("You picked paper and the computer picked scissors");
            picks.appendChild(picksText);
            resultText.textContent("You lose! Scissors cut paper");
            result.appendChild(resultText);
            return "loss";
        }
        else {
            picksText.textContent("You picked paper and the computer picked rock");
            picks.appendChild(picksText);
            resultText.textContent("You win! Paper wraps rock");
            result.appendChild(resultText);
            return "win";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            picksText.textContent("You picked scissors and the computer picked scissors");
            picks.appendChild(picksText);
            resultText.textContent("Draw!");
            result.appendChild(resultText);
            return "draw";
        }
        else if (computerSelection == "paper") {
            picksText.textContent("You picked scissors and the computer picked paper");
            picks.appendChild(picksText);
            resultText.textContent("You win! Scissors cut paper");
            result.appendChild(resultText);
            return "win";
        }
        else {
            picksText.textContent("You picked scissors and the computer picked rock");
            picks.appendChild(picksText);
            resultText.textContent("You lose! Rock smashes scissors");
            result.appendChild(resultText);
            return "loss";
        }
    }
}