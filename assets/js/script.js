const buttons = document.getElementsByClassName("control");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("messages")
const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"]
let gameover = false;
const restartBtn = document.getElementById("restart");

restartBtn.addEventListener('click', function () {
    location.reload();
})


//add event listeners to buttons
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerchoice) {
    if (!gameover) {

        playerImage.src = `assets/images/${choices[playerchoice]}.jpg`
        playerImage.alt = choices[playerchoice];

        let computerChoice = Math.floor(Math.random() * 5)

        computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
        computerImage.alt = choices[computerChoice];

        let result = checkWinner(choices[computerChoice], choices[playerchoice]);

        updateScores(result);
    }

}

function checkWinner(compChoice, playerChoice) {

    let result;
    if (compChoice === playerChoice) {
        result = "draw";
    } else if (compChoice == "ROCK" && playerChoice == "SCISSORS" ||
        compChoice == "ROCK" && playerChoice == "LIZARD" ||
        compChoice == "LIZARD" && playerChoice == "PAPER" ||
        compChoice == "LIZARD" && playerChoice == "SPOCK" ||
        compChoice == "SPOCK" && playerChoice == "ROCK" ||
        compChoice == "SPOCK" && playerChoice == "SCISSORS" ||
        compChoice == "SCISSORS" && playerChoice == "PAPER" ||
        compChoice == "SCISSORS" && playerChoice == "LIZARD" ||
        compChoice == "PAPER" && playerChoice == "ROCK" ||
        compChoice == "PAPER" && playerChoice == "SPOCK") {
        result = "computer"
    } else {
        result = "player";
    }

    return result;
}

function updateScores(result) {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    let newScore;


    if (result == "draw") {
        message.textContent = "It is a draw!";
    }

    if (result === "computer") {
        newScore = parseInt(computerScore.textContent) + 1;
        computerScore.textContent = newScore;
        message.textContent = "Computer won!";
    }

    if (result === "player") {
        newScore = parseInt(playerScore.textContent) + 1;
        playerScore.textContent = newScore;
        message.textContent = "You won!";
    }

    if (newScore === 5) {
        alert("GAME OVER!")
        gameover = true;
    }

}


