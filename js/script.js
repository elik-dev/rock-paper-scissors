function getComputerChoice() {
    // generate random number from 0 to 2 and store it in random0to2
    let random0to2 = Math.floor(Math.random() * 3);
    // return choice depending on random0to2 value
    if (random0to2 === 0) {
        return "rock";
    } else if (random0to2 === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// ask player to input his choice
// ask again if it's not rock, paper or scissors
function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    switch (playerInput) {
        case "rock":
        case "paper":
        case "scissors":
            break;
        default:
            playerInput = getPlayerChoice();
    }
    return playerInput;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let winMsg = `You won. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
    let loseMsg = `You lost. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`
    let drawMsg = `Draw. ${capitalize(playerSelection)} vs ${capitalize(computerSelection)}.`;
    if (playerSelection === computerSelection) {
        alert(drawMsg);
        return;
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert(winMsg);
        return;
    } else if (playerSelection === 'rock') {
        alert(loseMsg);
        return;
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert(winMsg);
        return;
    } else if (playerSelection === 'paper') {
        alert(loseMsg);
        return;
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert(winMsg);
        return;
    } else if (playerSelection === 'scissors') {
        alert(loseMsg);
        return;
    }
}