const viewStart = document.getElementById("view-start");
const startBtn = document.getElementById("start-btn");
const viewQuiz = document.getElementById("view-quiz");
const progress = document.getElementById("progress");
const tiemr = document.getElementById("timer");
const quizBox = document.getElementById("quiz-box");
const submitBtn = document.getElementById("submit-btn");
const viewResult = document.getElementById("view-result");
const score = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

let questions = [];

let currentIndex = 0;
let userAnswers = [];

startBtn.addEventListener("click", async () => {
  // 시작 버튼 이벤트
  viewStart.style.display = "none"; // 화면을 보이게
  viewQuiz.style.display = "block"; // 화면을 숨김
  await loadQuestions();
  renderQuestions();
});

submitBtn.addEventListener("click", () => {
  // 제출 버튼 이벤트
  const selected = document.querySelector('input[name="quiz"]:checked');

  const selectedValue = parseInt(selected.value, 10);
  userAnswers[currentIndex] = selectedValue;

  currentIndex++;

  if (currentIndex < questions.length) {
    renderQuestions();
  } else {
    showResult();
  }
});

async function loadQuestions() {
  // 문제 불러오기
  try {
    const res = await fetch("data/questions.json");
    const data = await res.json();
    const count = parseInt(document.getElementById("select-count").value, 10);
    questions = data.sort(() => Math.random() - 0.5).slice(0, count);
  } catch (err) {
    alert("에러");
  }
}

function renderQuestions() {
  // 문제 렌더링
  const question = questions[currentIndex];

  quizBox.innerHTML = `<p>${question.question}</p>`;

  question.choices.forEach((choice, index) => {
    quizBox.innerHTML += `
      <label>
        <input type="radio" name="quiz" value=${index}>
        ${choice} 
      </label><br/>
    `;
    submitBtn.disabled = false;
  });
}

function showResult() {
  // 결과 화면
  viewQuiz.style.display = "none"; // 화면을 보이게
  viewResult.style.display = "block"; // 화면을 숨김
}
