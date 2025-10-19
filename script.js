/* script.js
-----------------------------------------------------
Upgraded to support Subject -> Topic filtering.
Keeps original functionality: whole timer, per-question timer,
MathJax rendering, CSV download, solution steps.
----------------------------------------------------- */

(function() {
  // === DOM REFERENCES ===
  const startBtn = document.getElementById('startBtn');
  const numQuestionsSel = document.getElementById('numQuestions');
  const topicFilter = document.getElementById('topicFilter');
  const subjectSelect = document.getElementById('subjectSelect');
  const quizDuration = document.getElementById('quizDuration');

  const quizArea = document.getElementById('quizArea');
  const questionText = document.getElementById('questionText');
  const optionsBox = document.getElementById('options');
  const curIndexEl = document.getElementById('curIndex');
  const totalQuestionsEl = document.getElementById('totalQuestions');
  const timeLeftEl = document.getElementById('timeLeft');
  const qElapsedEl = document.getElementById('qElapsed');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  const resultArea = document.getElementById('resultArea');
  const summaryBox = document.getElementById('summaryBox');
  const detailsBox = document.getElementById('details');
  const restartBtn = document.getElementById('restartBtn');
  const downloadCsv = document.getElementById('downloadCsv');

  // === APP STATE ===
  let pool = [];        // Filtered questions
  let quiz = [];        // Selected set
  let current = 0;      // Current index
  let selections = {};  // {qid: selectedIndex}
  let perQTime = {};    // {qid: seconds}
  let qStartTs = null;  // Timestamp when question started
  let wholeTimer = null;
  let wholeRemaining = 0;
  let quizStartTs = null;

  // === UTILITIES ===
  function formatTime(s) {
    if (s < 0) s = 0;
    const mm = Math.floor(s / 60).toString().padStart(2, '0');
    const ss = Math.floor(s % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  }

  // === TOPIC / SUBJECT POPULATION ===
  function getUniqueTopics(subject) {
    const set = new Set();
    QUESTIONS.forEach(q => {
      if (subject === 'all' || q.subject === subject) set.add(q.topic);
    });
    return Array.from(set).sort();
  }

  function prettyTopicName(topic) {
    // map machine topic keys to readable names (you can extend this)
    const map = {
      simultaneous2: 'Simultaneous (2 Unknowns)',
      simultaneous3: 'Simultaneous (3 Unknowns)',
      quadratic: 'Quadratic Equations',
      waves: 'Waves',
      heat: 'Heat Energy'
    };
    return map[topic] || topic;
  }

  function populateTopics() {
    const subject = subjectSelect.value;
    const topics = getUniqueTopics(subject);
    topicFilter.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'All Topics';
    topicFilter.appendChild(allOpt);

    topics.forEach(t => {
      const o = document.createElement('option');
      o.value = t;
      o.textContent = prettyTopicName(t);
      topicFilter.appendChild(o);
    });
  }

  // initialize topics on load (data.js already loaded)
  populateTopics();

  // update topics when subject changes
  subjectSelect.addEventListener('change', () => {
    populateTopics();
  });

  // === SELECT QUESTIONS ===
  function pickQuestions() {
    const n = Math.max(1, parseInt(numQuestionsSel.value, 10) || 1);
    const subject = subjectSelect.value;
    const topic = topicFilter.value;

    pool = QUESTIONS.slice();

    if (subject !== 'all') {
      pool = pool.filter(q => q.subject === subject);
    }

    if (topic !== 'all') {
      pool = pool.filter(q => q.topic === topic);
    }

    // Shuffle pool (Fisher-Yates)
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    quiz = pool.slice(0, n);
    totalQuestionsEl.textContent = quiz.length;
  }

  // === DISPLAY QUESTION ===
  function showQuestion(idx) {
    if (!quiz.length) {
      questionText.innerHTML = "<em>No questions available for selected Subject/Topic. Please adjust filters.</em>";
      optionsBox.innerHTML = '';
      curIndexEl.textContent = 0;
      totalQuestionsEl.textContent = 0;
      return;
    }

    if (idx < 0) idx = 0;
    if (idx >= quiz.length) idx = quiz.length - 1;
    current = idx;

    const q = quiz[current];
    curIndexEl.textContent = current + 1;

    // Show question
    questionText.innerHTML = `\\(${q.question}\\)`;

    // Build options
    optionsBox.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'text-left p-3 border rounded w-full hover:bg-gray-100 transition';
      btn.innerHTML = `<div class="flex items-center gap-3"><div class="font-medium">${String.fromCharCode(65 + i)}.</div><div>\\(${opt}\\)</div></div>`;
      btn.onclick = () => selectOption(q.id, i);
      if (selections[q.id] === i) {
        btn.classList.add('bg-blue-50', 'border-blue-500');
      }
      optionsBox.appendChild(btn);
    });

    // Restart question timer
    qStartTs = performance.now();
    updateQElapsed();

    // Render math
    if (window.MathJax?.typesetPromise) {
      MathJax.typesetClear();
      MathJax.typesetPromise([questionText, optionsBox]).catch(console.error);
    }

    // Update navigation buttons
    prevBtn.disabled = (current === 0);
    nextBtn.disabled = (current === quiz.length - 1);
  }

  // === PER-QUESTION TIMER ===
  function updateQElapsed() {
    if (!qStartTs) return;
    const now = performance.now();
    const s = (now - qStartTs) / 1000;
    qElapsedEl.textContent = `${s.toFixed(2)}s`;
    requestAnimationFrame(updateQElapsed);
  }

  // === SELECT OPTION ===
  function selectOption(qid, idx) {
    // Save time spent before click
    const now = performance.now();
    if (qStartTs) {
      const elapsed = (now - qStartTs) / 1000;
      perQTime[qid] = (perQTime[qid] || 0) + elapsed;
    }
    selections[qid] = idx;
    // keep the user on the same question but re-render (to highlight)
    showQuestion(current);
  }

  // === WHOLE QUIZ TIMER ===
  function startWholeTimer() {
    wholeRemaining = Math.max(1, parseInt(quizDuration.value, 10) || 60);
    quizStartTs = Date.now();
    timeLeftEl.textContent = formatTime(wholeRemaining);
    if (wholeTimer) clearInterval(wholeTimer);
    wholeTimer = setInterval(() => {
      wholeRemaining -= 1;
      timeLeftEl.textContent = formatTime(wholeRemaining);
      if (wholeRemaining <= 0) {
        clearInterval(wholeTimer);
        finishQuiz('Time up');
      }
    }, 1000);
  }

  // === FINISH QUIZ ===
  function finishQuiz(reason) {
    // Save last question time
    if (qStartTs && quiz[current]) {
      const now = performance.now();
      const elapsed = (now - qStartTs) / 1000;
      const qid = quiz[current].id;
      perQTime[qid] = (perQTime[qid] || 0) + elapsed;
      qStartTs = null;
    }
    if (wholeTimer) clearInterval(wholeTimer);

    const results = quiz.map(q => {
      const selected = (selections[q.id] === undefined) ? null : selections[q.id];
      return {
        id: q.id,
        question: q.question,
        selected,
        correct: q.correct,
        isCorrect: selected === q.correct,
        time: perQTime[q.id] || 0,
        solutionSteps: q.solutionSteps || [],
        subject: q.subject,
        topic: q.topic
      };
    });

    renderResults(results, reason);
  }

  // === SHOW RESULTS ===
  function renderResults(results, reason) {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    const total = results.length;
    const attempted = results.filter(r => r.selected !== null).length;
    const correct = results.filter(r => r.isCorrect).length;
    const accuracy = total ? ((correct / total) * 100).toFixed(2) : 0;
    const totalTime = Object.values(perQTime).reduce((a, b) => a + (b || 0), 0);
    const avgSec = total ? (totalTime / total) : 0;

    summaryBox.innerHTML = `
      <div><strong>Reason:</strong> ${reason || 'Submitted'}</div>
      <div class="mt-2 grid grid-cols-2 gap-2 text-sm">
        <div>Total questions: <strong>${total}</strong></div>
        <div>Attempted: <strong>${attempted}</strong></div>
        <div>Correct: <strong>${correct}</strong></div>
        <div>Accuracy: <strong>${accuracy}%</strong></div>
        <div>Total time: <strong>${totalTime.toFixed(2)}s</strong></div>
        <div>Average per question: <strong>${avgSec.toFixed(2)}s</strong></div>
      </div>
    `;

    // Per-question breakdown
    detailsBox.innerHTML = '';
    results.forEach((r, idx) => {
      const card = document.createElement('div');
      card.className = 'border rounded p-4 bg-white';
      card.innerHTML = `
        <div class="mb-2"><strong>Q${idx + 1} (${r.subject} — ${prettyTopicName(r.topic)}):</strong> \\(${r.question}\\)</div>
        <div class="mb-1">Your answer: <strong>${r.selected === null ? '---' : String.fromCharCode(65 + r.selected)}</strong> 
          &nbsp; | &nbsp; Correct: <strong>${String.fromCharCode(65 + r.correct)}</strong>
        </div>
        <div class="text-sm text-gray-600 mb-2">Time spent: ${r.time.toFixed(2)}s</div>
        <details class="mt-1">
          <summary class="cursor-pointer text-blue-600 font-medium">Show worked solution</summary>
          <div class="mt-2 space-y-1">
            ${r.solutionSteps.map(s => `<div>\\(${s}\\)</div>`).join('')}
          </div>
        </details>
      `;
      detailsBox.appendChild(card);
    });

    // Render math
    if (window.MathJax?.typesetPromise) {
      MathJax.typesetPromise([summaryBox, detailsBox]).catch(console.error);
    }
  }

  // === DOWNLOAD RESULTS (CSV) ===
  function downloadCSV() {
    const rows = [['#', 'Subject','Topic', 'Question', 'Selected', 'Correct', 'IsCorrect', 'Time(s)']];
    quiz.forEach((q, i) => {
      const sel = selections[q.id];
      const isCorrect = sel === q.correct;
      rows.push([
        i + 1,
        q.subject,
        q.topic,
        q.question.replace(/\n/g, ' '),
        sel === undefined ? '' : String.fromCharCode(65 + sel),
        String.fromCharCode(65 + q.correct),
        isCorrect ? '1' : '0',
        (perQTime[q.id] || 0).toFixed(2)
      ]);
    });
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quiz_results.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  // === EVENT BINDINGS ===
  startBtn.addEventListener('click', () => {
    pickQuestions();
    selections = {};
    perQTime = {};
    current = 0;
    resultArea.classList.add('hidden');
    if (!quiz.length) {
      alert('No questions match the selected Subject/Topic. Please change your selection.');
      return;
    }
    quizArea.classList.remove('hidden');
    showQuestion(0);
    if (wholeTimer) clearInterval(wholeTimer);
    startWholeTimer();
  });

  prevBtn.addEventListener('click', () => {
    saveTimeCurrent();
    showQuestion(current - 1);
  });

  nextBtn.addEventListener('click', () => {
    saveTimeCurrent();
    showQuestion(current + 1);
  });

  submitBtn.addEventListener('click', () => {
    if (!confirm('Submit quiz now?')) return;
    finishQuiz('User submitted');
  });

  restartBtn.addEventListener('click', () => {
    resultArea.classList.add('hidden');
    quizArea.classList.add('hidden');
    document.getElementById('setup').scrollIntoView({ behavior: 'smooth' });
  });

  downloadCsv.addEventListener('click', downloadCSV);

  // === HELPER: SAVE CURRENT QUESTION TIME ===
  function saveTimeCurrent() {
    if (!qStartTs || !quiz[current]) return;
    const now = performance.now();
    const elapsed = (now - qStartTs) / 1000;
    const qid = quiz[current].id;
    perQTime[qid] = (perQTime[qid] || 0) + elapsed;
    qStartTs = performance.now(); // reset for next question
  }

  // Utility used in renderResults (redeclared here to keep local)
  function prettyTopicName(topic) {
    const map = {
      simultaneous2: 'Simultaneous (2 Unknowns)',
      simultaneous3: 'Simultaneous (3 Unknowns)',
      quadratic: 'Quadratic Equations',
      waves: 'Waves',
      heat: 'Heat Energy'
    };
    return map[topic] || topic;
  }

})();
