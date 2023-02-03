const choice = ["rock", "paper", "scissors"];
let resultText = "";
function computerChoice() {
    let x = Math.floor(Math.random()*choice.length);
    return choice[x];
}

function playRound (playerSelection, computerSelection) {
    const container = document.querySelector('.container');
    

    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        container.textContent = 'You win! Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        container.textContent = 'You win! Paper beats rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        container.textContent = 'You win! Scissors beats paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        container.textContent = 'You lose! Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        container.textContent = 'You lose! Scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        container.textContent = 'You lose! Rock beats scissors!';
    } else {
        container.textContent = 'Tie!';
    }

}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value, computerChoice());
    });
})






