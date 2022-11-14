var timeEl = document.querySelector(".timer");
var secondsLeft = 100;

document.querySelector("#start").addEventListener("click", startTimer);


function startTimer() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = " Time Remaining: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
      quizOver();
    }

  }, 1000);
}

function quizOver(){
    
}
