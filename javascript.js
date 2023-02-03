const choice = ["rock", "paper", "scissors"];
let resultText = "";
function computerChoice() {
    let x = Math.floor(Math.random()*choice.length);
    return choice[x];
}

function playRound (playerSelection, computerSelection) {
    const container = document.querySelector('.container');
    

    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        container.textContent = 'You win! Your choice is rock. Computer\'s choice is scissors. Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        container.textContent = 'You win! Your choice is paper. Computer\'s choice is rock. Paper beats rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        container.textContent = 'You win! Your choice is scissors. Computer\'s choice is paper. Scissors beats paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        container.textContent = 'You lose! Your choice is rock. Computer\'s choice is paper. Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        container.textContent = 'You lose! Your choice is paper. Computer\'s choice is scissors. Scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        container.textContent = 'You lose! Your choice is scissors. Computer\'s choice is rock. Rock beats scissors!';
    } else {
        container.textContent = `Tie! Your choice is ${playerSelection}. Computer's choice is ${computerSelection}`;
    }

}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value, computerChoice());
    });
})






