const quizData = [
  {
    question: "How old is Rolandas?",
    a: "10",
    b: "20",
    c: "35",
    d: "28",
    correct: "d",
  },
  {
    question: "What is the most used programming language in 2022?",
    a: "Python",
    b: "Java",
    c: "Javascript",
    d: "C#",
    correct: "c",
  },
  {
    question: "What is the most game played in 2022?",
    a: "Call of Duty: Modern Warfare II/Warzone 2.0",
    b: "Runescape",
    c: "Need for speed",
    d: "Apex Legends",
    correct: "a",
  },
  {
    question: "What is the #1 game in the world?",
    a: "League of legends",
    b: "Minecraft",
    c: "Counter-strike",
    d: "Apex Legends",
    correct: "b",
  },
  {
    question: "Which is No 1 online game?",
    a: "League of legends",
    b: "Minecraft",
    c: "PUBG",
    d: "Valorant",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
