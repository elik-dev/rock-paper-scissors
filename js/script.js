function getComputerChoice() {
    const selectionList = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * selectionList.length);
    return selectionList[randomIndex];
}
function restartGame(evt) {
    const gameEnd = document.querySelector(".game-end");
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundResult.textContent = "Win 5 rounds";
    playerImage.setAttribute("src", "img/placeholder-player.png");
    computerImage.setAttribute("src", "img/placeholder-computer.png");
    if (gameEnd) gameWindow.removeChild(gameEnd);
}
function finishGame(result) {
    const currentScore = document.querySelector(".current-score");

    const gameEnd = document.createElement("div");
    gameEnd.classList.add("game-end");
    gameWindow.appendChild(gameEnd);

    const gameResult = document.createElement("p");
    gameResult.classList.add("game-result");
    gameResult.textContent = result;
    gameEnd.appendChild(gameResult);

    const finalScore = document.createElement("p");
    finalScore.classList.add("final-score");
    finalScore.textContent = `Final score: ${currentScore.textContent}`;
    gameEnd.appendChild(finalScore);

    const restartButton = document.createElement("button");
    restartButton.classList.add("restart-button");
    restartButton.addEventListener('click', restartGame);
    restartButton.textContent = "Play again";
    gameEnd.appendChild(restartButton);
}
function addClickEffects(evt) {
    evt.preventDefault();
    evt.currentTarget.classList.add("selection-active");
}
function removeTransition(evt) {
    evt.preventDefault();
    evt.currentTarget.classList.remove("highlight-blue", "selection-active");
}
function playRound(evt) {
    const playerSelection = evt.target.getAttribute("alt");
    const computerSelection = getComputerChoice();
    playerImage.setAttribute("src", evt.target.getAttribute("src"));
    computerImage.setAttribute("src", document.querySelector(`img[alt="${computerSelection}"]`).getAttribute("src"));
    roundResult.classList.add("highlight-blue");
    addClickEffects(evt);
    if (playerSelection === "Restart") {
        return restartGame(evt);
    }
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
    } else if (computerScore.textContent == 5) {
        finishGame("Defeat :(");
    }
}
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

const gameWindow = document.querySelector(".game");
const playerImage = document.querySelector(".player-choice img");
const computerImage = document.querySelector(".computer-choice img");
const roundResult = document.querySelector(".round-result");

const selections = document.querySelectorAll("div.selection");
selections.forEach(selection => {
    selection.addEventListener("mousedown", playRound);
    selection.addEventListener("touchstart", playRound);
    selection.addEventListener("transitionend", removeTransition);
});
roundResult.addEventListener("transitionend", removeTransition);