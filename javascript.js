const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let x = Math.floor(Math.random()*choice.length);
    return choice[x];
}

function playerChoice() {
    let x = prompt("Choose rock, paper or scissors", "");
    return x.toLowerCase();
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return alert("You Won! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return alert("You Won! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return alert("You Won! Scissors beats Paper");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return alert("You Lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return alert("You Lose! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection === "rock") {
        return alert("You Lose! Rock beats Scissors");
    } else {
        alert("Tie!")
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice(), getComputerChoice());
    }
}
game();
