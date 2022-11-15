//Timer
var timeEl = document.querySelector(".timer");
var secondsLeft = 100;

document.querySelector("#start").addEventListener("click", startTimer);

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = " Time Remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

      quizOver();
    }
  }, 1000);
}

function quizOver() {}

//QUESTIONS
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Abe Lincoln",
      b: "Freddy Mercury",
      c: "Brendan Eich"
    }
    correctAnswer: "c"
  },

  {
    question: "Which type of file do we write JavaScript in?",
    answers: {
      a: "script.js",
      b: "index.html",
      c: "style.css"
    }
    correctAnswer: "a"
},

{
  question: "Which of these do we put around values in a string?",
  answers: {
    a: "paranthesis",
    b: "quotation marks",
    c: "periods"
  }
  correctAnswer: "b"
},

{
  question: "Which of these is NOT a JavaScript keyword?",
  answers: {
    a: "boy",
    b: "let",
    c: "var"
  }
  correctAnswer: "a"
}

{
  question: "What does the keyword var do?",
  answers: {
    a: "declares a variable",
    b: "declares a function",
    c: "exits a function"
  }
  correctAnswer: "a"
}

{
  question: "What do we use strings for in JavaScript?",
  answers: {
    a: "running functions",
    b: "storing and manipulating text",
    c: "playing mp3 files"
  }
  correctAnswer: "b"
}
]
