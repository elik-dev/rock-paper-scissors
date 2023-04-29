// generate computer choice
function getComputerChoice() {
    // generate random number from 0 to 2 and store it in random0to2 variable
    let random0to2 = Math.floor(Math.random() * 3);
    // return computer choice based on random0to2 value
    if (random0to2 === 0) {
        return 'rock';
    } else if (random0to2 === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
// input player choice
function getPlayerChoice() {
    let validChoice = false;
    let playerInput;
    // validate input
    while (validChoice === false) {
        playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
        switch (playerInput) {
            case 'rock':
            case 'paper':
            case 'scissors':
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
// capitalize first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// play one round of game
function playRound() {
    // get player and computer choices and store them in following variables
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    // store game result messages in following variables
    let winMessage = `You won. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    let loseMessage = `You lost. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    let drawMessage = `Tie. ${capitalize(playerSelection)} vs ${capitalize(computerSelection)}.`;
    // check round result and return corresponding message
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
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
// play 5 rounds and return winner of a game
function game() {
    // store player and computer scores in corresponding variables
    let playerScore = 0;
    let computerScore = 0;
    // increase winner's score by 1
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === 'win') {
            playerScore += 1;
        } else if (result === 'lose') {
            computerScore += 1;
        }
    }
    // output game result with final score
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