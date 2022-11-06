const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("messages")
const choices = ["rock", "paper", "scissors", "lizard", "spock"]

//add event listeners to buttons
for ( let button of buttons) {
    buttons.addEventListener("click", function() {
        let playerChoice= this.getAttribute("data-choice");
        playgame(playerChoice);
    });
}


