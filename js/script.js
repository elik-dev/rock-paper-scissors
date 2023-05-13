function getComputerChoice() {
    const handSigns = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * handSigns.length);
    return handSigns[randomIndex];
}
function restartGame() {
    const gameWindow = document.querySelector(".game-window");
    const result = document.querySelector(".round-result");
    const resultScreen = document.querySelector(".result-screen");
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    result.textContent = "Win 5 rounds";
    if (resultScreen) gameWindow.removeChild(resultScreen);
    return;
}
function finishGame(result) {
    const gameWindow = document.querySelector(".game-window");
    const resultScreen = document.createElement("div");

    resultScreen.setAttribute("class", "result-screen");
    gameWindow.appendChild(resultScreen);

    const gameResult = document.createElement("p")
    gameResult.setAttribute("class", "game-result");
    gameResult.textContent = result;
    resultScreen.appendChild(gameResult);

    const restartButton = document.createElement("button");
    restartButton.addEventListener('click', restartGame);
    restartButton.textContent = "Play again";
    resultScreen.appendChild(restartButton);
}
function playRound(evt) {
    const playerSelection = evt.target.getAttribute("alt");
    let roundResult = document.querySelector(".round-result");
    const computerSelection = getComputerChoice();
    if (playerSelection === "Restart") {
        restartGame();
        return;
    };
    if ((playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        roundResult.textContent = "Round won";
        playerScore.textContent++;

    } else if (playerSelection === computerSelection) {
        roundResult.textContent = "Tie :|"
    } else {
        roundResult.textContent = "Round lost";
        computerScore.textContent++;
    }
    if (playerScore.textContent == 5) {
        finishGame("Victory!");
        return;
    } else if (computerScore.textContent == 5) {
        finishGame("Defeat :(");
        return;
    }
}

let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

const selections = document.querySelectorAll("div.selection");
selections.forEach(selection => selection.addEventListener("click", playRound));