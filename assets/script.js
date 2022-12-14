//FUNCTIONS
// function buildQuiz(){ ... };
// function showResults(){ ... };

//VARIABLES
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
// const myQuestions = [ ... ];

//START
function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
      );
    }
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].getElementsByClassName.color =
        "lightgreen";
    } else {
      answerContainers[questionNumber].stylecolor = "red";
    }
  });
}

//EVENT LISTENERS
submitButton.addEventListener("click", showResults);

//QUESTIONS
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Abe Lincoln",
      b: "Freddy Mercury",
      c: "Brendan Eich",
      correctAnswer: "c",
    },
  },

  {
    question: "Which type of file do we write JavaScript in?",
    answers: {
      a: "script.js",
      b: "index.html",
      c: "style.css",
      correctAnswer: "a",
    },
  },

  {
    question: "Which of these do we put around values in a string?",
    answers: {
      a: "paranthesis",
      b: "quotation marks",
      c: "periods",
      correctAnswer: "b",
    },
  },

  {
    question: "Which of these is NOT a JavaScript keyword?",
    answers: {
      a: "boy",
      b: "let",
      c: "var",
      correctAnswer: "a",
    },
  },

  {
    question: "What does the keyword var do?",
    answers: {
      a: "declares a variable",
      b: "declares a function",
      c: "exits a function",
      correctAnswer: "a",
    },
  },

  {
    question: "What do we use strings for in JavaScript?",
    answers: {
      a: "running functions",
      b: "storing and manipulating text",
      c: "playing mp3 files",
      correctAnswer: "b",
    },
  },
];

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
