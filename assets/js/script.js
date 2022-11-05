const score = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];

//add event listeners to buttons
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}


