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
    console.log(playerSelection);
    console.log(computerSelection);
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return alert("You win!");
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return alert("You lose!");
    } else {
        return alert("Tie!");
    }
}
console.log(playRound(playerChoice(), getComputerChoice()));
