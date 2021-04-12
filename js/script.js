let playerScore = 0;
let computerScore = 0;

const playerChoices = document.querySelectorAll('button');
const result = document.querySelector('#result-of-round');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');

playerChoices.forEach(choice => {
  choice.addEventListener('click', e => {
    let playerChoice = e.target.id;
    let computerChoice = computerSelection();
    playRound(playerChoice, computerChoice);
  });
});

function computerSelection() {
  let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
      return 'rock';
    }
    if (choice == 1) {
      return 'paper';
    }
    return 'scissors';
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    result.textContent = `You both chose ${playerSelection}. It's a tie!`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper'){
    result.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
    playerScoreDisplay.textContent = `You: ${++playerScore}`;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
             computerSelection === 'paper' && playerSelection === 'rock' ||
             computerSelection === 'scissors' && playerSelection === 'paper'){
    result.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose.`;
    computerScoreDisplay.textContent = `Computer: ${++computerScore}`;
  }
  checkWinner();
}

function checkWinner() {
  if (playerScore == 5) {
    alert(`Congratulations! You won the game!\n\nFinal score\nYou: ${playerScore}\nComputer: ${computerScore}`);
    endGame();
  } else if (computerScore == 5) {
    alert(`Too bad! You lost the game.\n\nFinal score\nYou: ${playerScore}\nComputer: ${computerScore}`);
    endGame();
  }
}

function endGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = '';
  playerScoreDisplay.textContent = 'You: 0';
  computerScoreDisplay.textContent = 'Computer: 0';
}