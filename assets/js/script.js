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
        playGame(playerChoice);
    });
}

function playGame (playerchoice){
    playerImage.scr= `assets/images/${choices[playerChoice]}`.jpg
    playerImage.alt= choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 4)

    computerImage.src = `assets/images/${choices[computerChoice]}`.jpg;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);

}



