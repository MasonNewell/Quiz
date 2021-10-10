var startBtn = document.querySelector("#start");
var buttonA = document.querySelector("#button-A");
var buttonB = document.querySelector("#button-B");
var buttonC = document.querySelector("#button-C");
var buttonD = document.querySelector("#button-D");
var updateTime = document.querySelector("#timer");
var questionText = document.querySelector("#question-text");
var correct_incorrect = document.querySelector("#correct-incorrect");

var timeRemaining;
var currentQuestion = 0;
var gameover = false;

// Questions
var questionInfo = [
  {
    question: "Commonly used data types DO NOT include:",
    A: "strings",
    B: "booleans",
    C: "alerts",
    D: "numbers",
    answer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _______",
    A: "quotes",
    B: "curly brackets",
    C: "parentheses",
    D: "square brackets",
    answer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store _______",
    A: "numbers and strings",
    B: "other arrays",
    C: "booleans",
    D: "all of the above",
    answer: "all of the above",
  },
];

// Timer
function timer() {
  var timeInterval = setInterval(function () {
    // OPTION 1: Time up
    if (timeRemaining === 0 || gameover) {
      clearInterval(timeInterval);
    }
    // OPTION 2: Time remaining, questions remaining
    else {
      timeRemaining--;
      updateTime.textContent = "Time: " + timeRemaining;
    }
  }, 1000);
}

// Start button - start quiz
startBtn.addEventListener("click", startQuiz);
// MAIN function
function startQuiz() {
  timeRemaining = 300;
  startBtn.disabled = true;
  timer();
  updateQuestionInfo();
}

// Questions + Answers update
function updateQuestionInfo() {
  questionText.textContent = questionInfo[currentQuestion].question;
  buttonA.textContent = questionInfo[currentQuestion].A;
  buttonB.textContent = questionInfo[currentQuestion].B;
  buttonC.textContent = questionInfo[currentQuestion].C;
  buttonD.textContent = questionInfo[currentQuestion].D;
}

// Updates after each question
function update() {
  if (currentQuestion < 2) {
    currentQuestion++;
    updateQuestionInfo();
  } else {
    gameover = true;
  }
}

// User picks correct answer
function correctAnswer() {
  correct_incorrect.textContent = "Correct!";
}
// User picks incorrect
function wrongAnswer() {
  correct_incorrect.textContent = "Wrong";
  timeRemaining -= 50;
}

// Choice A is pressed
buttonA.addEventListener("click", function () {
  if (questionInfo[currentQuestion].answer === buttonA.textContent) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  update();
});
// Choice B is pressed
buttonB.addEventListener("click", function () {
  if (questionInfo[currentQuestion].answer === buttonB.textContent) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  update();
});
// Choice C is pressed
buttonC.addEventListener("click", function () {
  if (questionInfo[currentQuestion].answer === buttonC.textContent) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  update();
});
// Choice D is pressed
buttonD.addEventListener("click", function () {
  if (questionInfo[currentQuestion].answer === buttonD.textContent) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  update();
});
