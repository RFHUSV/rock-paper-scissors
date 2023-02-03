const choice = ["rock", "paper", "scissors"];
function computerChoice() {
    let x = Math.floor(Math.random()*choice.length);
    return choice[x];
}
let playerWins = 0;
let computerWins = 0;
function playRound (playerSelection, computerSelection) {
    const container = document.querySelector('.container');
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWins++;
        container.textContent = 'You win! Your choice is rock. Computer\'s choice is scissors. Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins++;
        container.textContent = 'You win! Your choice is paper. Computer\'s choice is rock. Paper beats rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins++;
        container.textContent = 'You win! Your choice is scissors. Computer\'s choice is paper. Scissors beats paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWins++;
        container.textContent = 'You lose! Your choice is rock. Computer\'s choice is paper. Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWins++;
        container.textContent = 'You lose! Your choice is paper. Computer\'s choice is scissors. Scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWins++;
        container.textContent = 'You lose! Your choice is scissors. Computer\'s choice is rock. Rock beats scissors!';
    } else {
        playerWins++;
        computerWins++;
        container.textContent = `Tie! Your choice is ${playerSelection}. Computer's choice is ${computerSelection}`;
    }

}

function playGame(button) {
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    while (true) {
        if (playerWins<5 && computerWins<5) {
            playRound(button, computerChoice());
                if (playerWins === 5 || computerWins ===5) {
                    const container = document.querySelector('.container');
                    if (playerWins > computerWins) {
                        container.textContent = `You won this battle! Score: ${playerWins} - ${computerWins}`;
                        player.textContent = `Player score is ${playerWins}`;
                        computer.textContent = `Computer score is ${computerWins}`;
                        playerWins = 0;
                        computerWins = 0;
                        break;
                    } else if (playerWins < computerWins) {
                        container.textContent = `You lose this battle! Score: ${playerWins} - ${computerWins}`;
                        player.textContent = `Player score is ${playerWins}`;
                        computer.textContent = `Computer score is ${computerWins}`;
                        playerWins = 0;
                        computerWins = 0;
                        break;
                    } else {
                        container.textContent = `DRAW! Score: ${playerWins} - ${computerWins}`;
                        player.textContent = `Player score is ${playerWins}`;
                        computer.textContent = `Computer score is ${computerWins}`;
                        playerWins = 0;
                        computerWins = 0;
                        break;
                    }
                }
            player.textContent = `Player score is ${playerWins}`;
            computer.textContent = `Computer score is ${computerWins}`;
            return;       
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.value);
    });
})






