const playerSelection = 'Rock';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'Rock';
    }
    if (choice == 1) {
        return 'Paper';
    }
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return `It's a tie! You both selected ${playerSelection}.`;
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors' ||
              playerSelection === 'Paper' && computerSelection === 'Rock' ||
              playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if(computerSelection === 'Rock' && playerSelection === 'Scissors' ||
              computerSelection === 'Paper' && playerSelection === 'Rock' ||
              computerSelection === 'Scissors' && playerSelection === 'Paper'){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    
}