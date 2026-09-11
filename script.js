const supabaseClient = (SUPABASE_URL && SUPABASE_URL.startsWith("http"))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

let current = 0;
let studentName = "";
let studentEmail = "";
const answers = {};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const doneScreen = document.getElementById("done-screen");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const startError = document.getElementById("start-error");
const startBtn = document.getElementById("start-btn");

const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const doneSub = document.getElementById("done-sub");

startBtn.addEventListener("click", () => {
  studentName = nameInput.value.trim();
  studentEmail = emailInput.value.trim();

  if (!studentName || !studentEmail) {
    startError.style.display = "block";
    return;
  }
  startError.style.display = "none";

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
});

function renderQuestion() {
  const q = QUESTIONS[current];

  progressLabel.textContent = `Question ${current + 1} of ${QUESTIONS.length}`;
  progressFill.style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  questionText.textContent = q.text;

  optionsList.innerHTML = "";
  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    if (answers[q.id] === i) div.classList.add("selected");
    div.innerHTML = `<span class="dot"></span><span>${opt}</span>`;
    div.addEventListener("click", () => {
      answers[q.id] = i;
      renderQuestion();
    });
    optionsList.appendChild(div);
  });

  prevBtn.style.visibility = current === 0 ? "hidden" : "visible";
  nextBtn.textContent = current === QUESTIONS.length - 1 ? "Submit" : "Next";
}

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  const q = QUESTIONS[current];
  if (answers[q.id] === undefined) {
    return;
  }

  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuestion();
  } else {
    submitTest();
  }
});

async function submitTest() {
  nextBtn.disabled = true;
  nextBtn.textContent = "Submitting...";

  const payload = QUESTIONS.map(q => ({
    question_id: q.id,
    selected_option: q.options[answers[q.id]]
  }));

  if (supabaseClient) {
    const { error } = await supabaseClient.from("quiz_responses").insert([
      {
        name: studentName,
        email: studentEmail,
        answers: payload
      }
    ]);

    if (error) {
      doneSub.textContent = "There was a problem saving your responses. Please try again.";
    }
  }

  quizScreen.classList.add("hidden");
  doneScreen.classList.remove("hidden");
}
