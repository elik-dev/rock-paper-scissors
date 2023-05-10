function getComputerChoice() {
    let random0to2 = Math.floor(Math.random() * 3);
    if (random0to2 === 0) {
        return 'Rock';
    } else if (random0to2 === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
function getPlayerChoice() {
    let validChoice = false;
    let playerInput;
    while (validChoice === false) {
        playerInput = capitalize(prompt("Rock, Paper or Scissors?"));
        switch (playerInput) {
            case 'Rock':
            case 'Paper':
            case 'Scissors':
                validChoice = true;
                break;
            default:
                alert('Please enter a valid option: Rock, Paper or Scissors');
                validChoice = false;
                break;
        }
    }
    return playerInput;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let winMessage = `You won. ${playerSelection} beats ${computerSelection}.`;
    let loseMessage = `You lost. ${computerSelection} beats ${playerSelection}.`;
    let drawMessage = `Tie. ${playerSelection} vs ${computerSelection}.`;
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        console.log(winMessage);
        return 'win';
    } else if (playerSelection === computerSelection) {
        console.log(drawMessage);
        return 'tie';
    } else {
        console.log(loseMessage);
        return 'lose';
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === 'win') {
            playerScore += 1;
        } else if (result === 'lose') {
            computerScore += 1;
        }
    }
    let finalScore = `Final score: ${playerScore} - ${computerScore}`;
    if (playerScore > computerScore) {
        console.log(`Victory. ${finalScore}`);
        return;
    } else if (playerScore === computerScore) {
        console.log(`Draw. ${finalScore}`);
        return;
    } else {
        console.log(`Defeat. ${finalScore}`);
        return;
    }
}