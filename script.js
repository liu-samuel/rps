let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.innerHTML = "Rock"
paperButton.innerHTML = "Paper"
scissorsButton.innerHTML = "Scissors"

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

function computerPlay() {
    let rps = Math.floor(Math.random() * 3) + 1;
    switch(rps) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3: 
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerLowerCase = playerSelection.toLowerCase();
    let computerLowerCase = computerSelection.toLowerCase();
    
    if (playerLowerCase == "rock") {
        if (computerLowerCase == "rock") {
            console.log("You picked rock and the computer picked rock");
            console.log("Draw!");
            return "draw";
        }
        else if (computerLowerCase == "paper") {
            console.log("You picked rock and the computer picked paper");
            console.log("You lose! Paper wraps rock");
            return "loss";
        }
        else if (computerLowerCase == "scissors"){
            console.log("You picked rock and the computer picked scissors");
            console.log("You win! Rock smashes scissors");
            return "win";
        }
    }

    else if (playerLowerCase == "paper") {
        if  (computerLowerCase == "paper") {
            console.log("You picked paper and the computer picked paper");
            console.log("Draw!");
            return "draw";
            }
        else if (computerLowerCase == "scissors") {
            console.log("You picked paper and the computer picked scissors");
            console.log("You lose! Scissors cut paper");
            return "loss";
        }
        else {
            console.log("You picked paper and the computer picked rock");
            console.log("You win! Paper wraps rock");
            return "win";
        }
    }

    else if (playerLowerCase == "scissors") {
        if (computerLowerCase == "scissors") {
            console.log("You picked scissors and the computer picked scissors");
            console.log("Draw!");
            return "draw";
        }
        else if (computerLowerCase == "paper") {
            console.log("You picked scissors and the computer picked paper");

            console.log("You win! Scissors cut paper");
            return "win";
        }
        else {
            console.log("You picked scissors and the computer picked rock");

            console.log("You lose! Rock smashes scissors");
            return "loss";
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let result = playRound(playerChoice, computerPlay());
        if (result == "win") {
            playerWins++;
        }
        else if (result == "draw") {
            draws++;
        }
        else {
            computerWins++;
        }
        
        console.log("Player Wins: " + playerWins);
        console.log("Computer Wins " + computerWins);
        console.log("Draws: " + draws);
    }
}