// script.js
// Handles quiz logic for Math & Physics Practice App

let filteredQuestions = [];
let currentIndex = 0;
let timerInterval;
let timeLeft;
let elapsedPerQuestion = [];
let quizStartTime;

const subjectSelect = document.getElementById('subjectSelect');
const topicFilter = document.getElementById('topicFilter');
const startBtn = document.getElementById('startBtn');
const quizArea = document.getElementById('quizArea');
const setup = document.getElementById('setup');
const resultArea = document.getElementById('resultArea');
const questionText = document.getElementById('questionText');
const optionsDiv = document.getElementById('options');
const totalQuestions = document.getElementById('totalQuestions');
const curIndex = document.getElementById('curIndex');
const timeLeftDisplay = document.getElementById('timeLeft');
const qElapsed = document.getElementById('qElapsed');
const summaryBox = document.getElementById('summaryBox');
const details = document.getElementById('details');
const numQuestionsInput = document.getElementById('numQuestions');
const quizDurationInput = document.getElementById('quizDuration');
const submitBtn = document.getElementById('submitBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const downloadCsv = document.getElementById('downloadCsv');

// Populate topic dropdown based on selected subject
function populateTopics() {
  const selectedSubject = subjectSelect.value;
  const topics = new Set();

  QUESTIONS.forEach(q => {
    if (selectedSubject === 'all' || q.subject === selectedSubject) {
      topics.add(q.topic);
    }
  });

  topicFilter.innerHTML = '<option value="all">All Topics</option>';
  topics.forEach(topic => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = formatTopicName(topic);
    topicFilter.appendChild(opt);
  });
}

function formatTopicName(name) {
  const map = {
    simultaneous2: 'Simultaneous (2 Unknowns)',
    simultaneous3: 'Simultaneous (3 Unknowns)',
    quadratic: 'Quadratic Equations',
    waves: 'Waves',
    heat: 'Heat Energy'
  };
  return map[name] || name;
}

// Start quiz
startBtn.addEventListener('click', () => {
  const selectedSubject = subjectSelect.value;
  const selectedTopic = topicFilter.value;
  const numQuestions = parseInt(numQuestionsInput.value);

  let available = QUESTIONS.filter(q => {
    return (selectedSubject === 'all' || q.subject === selectedSubject) &&
           (selectedTopic === 'all' || q.topic === selectedTopic);
  });

  if (available.length === 0) {
    alert('No questions available for the chosen filters.');
    return;
  }

  filteredQuestions = shuffleArray(available).slice(0, numQuestions);
  currentIndex = 0;
  elapsedPerQuestion = Array(filteredQuestions.length).fill(0);

  setup.classList.add('hidden');
  quizArea.classList.remove('hidden');
  resultArea.classList.add('hidden');

  totalQuestions.textContent = filteredQuestions.length;
  showQuestion();

  timeLeft = parseInt(quizDurationInput.value);
  quizStartTime = Date.now();

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
});

function showQuestion() {
  const q = filteredQuestions[currentIndex];
  curIndex.textContent = currentIndex + 1;

  questionText.innerHTML = q.question;

  optionsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'block w-full text-left p-3 border rounded hover:bg-blue-50';
    btn.innerHTML = opt;
    btn.onclick = () => selectAnswer(i);
    if (q.userAnswer === i) {
      btn.classList.add('bg-blue-100');
    }
    optionsDiv.appendChild(btn);
  });

  qElapsed.textContent = elapsedPerQuestion[currentIndex] + 's';
  MathJax.typesetPromise();
}

function selectAnswer(index) {
  filteredQuestions[currentIndex].userAnswer = index;
  showQuestion();
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < filteredQuestions.length - 1) {
    currentIndex++;
    showQuestion();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
});

submitBtn.addEventListener('click', finishQuiz);

function updateTimer() {
  timeLeft--;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeLeftDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  elapsedPerQuestion[currentIndex]++;

  if (timeLeft <= 0) {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(timerInterval);
  quizArea.classList.add('hidden');
  resultArea.classList.remove('hidden');

  let correct = 0;
  filteredQuestions.forEach(q => {
    if (q.userAnswer === q.correct) correct++;
  });

  const scorePercent = ((correct / filteredQuestions.length) * 100).toFixed(1);
  summaryBox.innerHTML = `
    <p><strong>Total Questions:</strong> ${filteredQuestions.length}</p>
    <p><strong>Correct Answers:</strong> ${correct}</p>
    <p><strong>Score:</strong> ${scorePercent}%</p>
    <p><strong>Total Time:</strong> ${(Date.now() - quizStartTime) / 1000}s</p>
  `;

  details.innerHTML = '';
  filteredQuestions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'p-3 border rounded-lg bg-white';

    let correctText = q.options[q.correct];
    let userText = q.userAnswer != null ? q.options[q.userAnswer] : 'No answer';
    let resultColor = q.userAnswer === q.correct ? 'text-green-700' : 'text-red-700';

    let solutionHTML = '<ol class="list-decimal pl-6 mt-2 space-y-1">';
    q.solutionSteps.forEach(step => {
      solutionHTML += `<li>${step}</li>`;
    });
    solutionHTML += '</ol>';

    div.innerHTML = `
      <p class="font-semibold">${i + 1}. ${q.question}</p>
      <p class="${resultColor} mt-1">Your Answer: ${userText}</p>
      <p class="text-green-700">Correct Answer: ${correctText}</p>
      <div class="mt-2 text-gray-700">
        <strong>Solution:</strong>
        ${solutionHTML}
      </div>
    `;

    details.appendChild(div);
  });

  MathJax.typesetPromise();
}

// Restart
restartBtn.addEventListener('click', () => {
  setup.classList.remove('hidden');
  quizArea.classList.add('hidden');
  resultArea.classList.add('hidden');
  populateTopics();
});

// Download CSV
downloadCsv.addEventListener('click', () => {
  let csv = 'Question,Your Answer,Correct Answer,Result\n';
  filteredQuestions.forEach(q => {
    const your = q.userAnswer != null ? q.options[q.userAnswer] : 'No answer';
    const correct = q.options[q.correct];
    const result = q.userAnswer === q.correct ? 'Correct' : 'Wrong';
    csv += `"${q.question.replace(/\n/g, ' ')}","${your}","${correct}","${result}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quiz_results.csv';
  a.click();
  URL.revokeObjectURL(url);
});

// Utility
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Initialize
populateTopics();
subjectSelect.addEventListener('change', populateTopics);
