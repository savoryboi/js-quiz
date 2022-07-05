
var startButton = document.querySelector("#start");
var leaderboardBtn = document.querySelector('#leaderboard')

function newPage(){
    window.location.href = 'quiz.html';
}



startButton.addEventListener('click', newPage);
