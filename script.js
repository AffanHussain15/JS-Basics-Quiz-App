var startBtn = document.getElementById("start-btn");
var submitBtn = document.getElementById("submit-btn");
var home = document.getElementById("home");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");
var questionsContainer = document.getElementById("questions-container");
var scoreDisplay = document.getElementById("score");

var score = 0;

var questions = [
  {
    question: "Who was the founder of Pakistan?",
    options: [
      "Allama Iqbal",
      "Quaid e Azam Muhammad Ali Jinnah",
      "Liaquat Ali Khan",
      "Maulana Shabbir Ahmad Usmani",
    ],
    answer: "Quaid e Azam Muhammad Ali Jinnah",
  },
  {
    question: "Which city is the Capital of Pakistan?",
    options: ["Sialkot", "Queta", "Peshawar", "Islamabad"],
    answer: "Islamabad",
  },
  {
    question: "Which is the largest city of Pakistan?",
    options: ["Faislabad", "Karachi", "Islamabad", "Lahore"],
    answer: "Karachi",
  },
];

function startQuiz() {
  home.style.display = "none";
  quiz.style.display = "block";
  loadQuestions();
}

function loadQuestions() {
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    var questionTitle = document.createElement("p");
    questionTitle.textContent = i + 1 + ". " + q.question;
    questionDiv.appendChild(questionTitle);

    var optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    for (var j = 0; j < q.options.length; j++) {
      var option = q.options[j];

      var label = document.createElement("label");
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "question" + i;
      input.value = option;

      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      optionsDiv.appendChild(label);
    }

    questionDiv.appendChild(optionsDiv);
    questionsContainer.appendChild(questionDiv);
  }
}

function calculateScore() {
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var selectedOption = document.querySelector(
      'input[name="question' + i + '"]:checked'
    );
    if (selectedOption && selectedOption.value === q.answer) {
      score++;
    }
  }

  displayResult();
}

function displayResult() {
  quiz.style.display = "none";
  result.style.display = "block";
  scoreDisplay.textContent =
    "You scored " + score + " out of " + questions.length;
}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", calculateScore);
