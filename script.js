const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which language is used for web?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  let q = questions[currentIndex];
  questionEl.textContent = q.question;

  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    let btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");

    btn.onclick = () => checkAnswer(option);

    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentIndex].answer) {
    score++;
  }
}

nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";

  scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

// start quiz
loadQuestion();