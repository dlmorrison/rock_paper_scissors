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
    
    
}

function game() {
    
}