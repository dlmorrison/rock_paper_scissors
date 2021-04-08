let playerScore = 0;
let computerScore = 0;
game(5);

function playerPlay() {
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    while(!validateSelection(playerSelection)){
        playerSelection = prompt('Please select one of: Rock, Paper, Scissors');
    }
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function validateSelection(selection) {
    selection = selection.toLowerCase();
    if (selection === 'rock' || selection === 'paper' || selection === 'scissors'){
        return true;
    }
    return false;
}

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
        return `It's a tie! You both selected ${playerSelection}.\nPlayer Score: ${playerScore}\nComputerScore: ${computerScore}`;
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors' ||
              playerSelection === 'Paper' && computerSelection === 'Rock' ||
              playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.\nPlayer Score: ${playerScore}\nComputerScore: ${computerScore}`;
    } else if(computerSelection === 'Rock' && playerSelection === 'Scissors' ||
              computerSelection === 'Paper' && playerSelection === 'Rock' ||
              computerSelection === 'Scissors' && playerSelection === 'Paper'){
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.\nPlayer Score: ${playerScore}\nComputerScore: ${computerScore}`;
    }
}

function game(numRounds) {
    playerScore = 0;
    computerScore = 0;

    for(i = 0; i < numRounds; i++){
        console.log(playRound(playerPlay(),computerPlay()));
    }

}