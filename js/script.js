function getComputerChoice() {
    // generate random number from 0 to 2 and store in i
    let i = Math.floor(Math.random() * 3);
    // return choice based on i value
    if (i === 0) {
        return "rock";
    } else if (i === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}