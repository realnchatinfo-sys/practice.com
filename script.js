/*
script.js
Purpose: Main application logic for the Quiz App.
Features:
- Loads QUESTIONS from data.js (ES module import by index.html).
- Maintains stable question IDs but randomizes question order and option order each session/retake.
- Prevents repetition within a single session.
- Live progress, navigation (Prev/Next), Submit and Retake logic.
- Displays result summary and per-question feedback with correct answers.
- Uses accessible markup updates and triggers MathJax typeset where needed.
- Comments explain each function and section for maintainability.
*/

export class QuizApp {
  constructor({ container, data }){
    this.container = container;
    this.data = data;
    // internal state
    this.currentSubject = 'math'; // 'math' or 'physics'
    this.fullBank = { math: data.math, physics: data.physics };
    this.sessionQuestions = []; // shuffled copy of questions for current session
    this.userAnswers = {}; // {qid: 'A'/'B'/...}
    this.currentIndex = 0;
    this.started = false;

    // bind UI elements
    this.bindElements();
    this.attachHandlers();
    this.updateTopMeta();
  }

  bindElements(){
    this.subjectSelect = document.getElementById('subjectSelect');
    this.startBtn = document.getElementById('startBtn');
    this.submitBtn = document.getElementById('submitBtn');
    this.retakeBtn = document.getElementById('retakeBtn');
    this.questionPanel = document.getElementById('questionPanel');
    this.questionHtml = document.getElementById('questionHtml');
    this.optionsList = document.getElementById('optionsList');
    this.progressBar = document.getElementById('progressBar');
    this.progressText = document.getElementById('progressText');
    this.progressFraction = document.getElementById('progressFraction');
    this.answeredCount = document.getElementById('answeredCount');
    this.unansweredCount = document.getElementById('unansweredCount');
    this.qid = document.getElementById('qid');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.scoreCard = document.getElementById('scoreCard');
    this.scoreText = document.getElementById('scoreText');
    this.percentText = document.getElementById('percentText');
    this.answersList = document.getElementById('answersList');
    this.showAnswersBtn = document.getElementById('showAnswersBtn');
    this.topSubject = document.getElementById('subjectSpan');
    this.submitBtn.disabled = true;
    this.retakeBtn.disabled = true;
    this.showAnswersBtn.disabled = true;
  }

  attachHandlers(){
    // subject change
    this.subjectSelect.addEventListener('change', (e)=>{
      this.currentSubject = e.target.value;
      this.topSubject.textContent = this.currentSubject === 'math' ? 'Mathematics' : 'Physics';
      this.updateTopMeta();
    });

    // start
    this.startBtn.addEventListener('click', async ()=>{
      this.startTest();
    });

    // prev/next navigation
    this.prevBtn.addEventListener('click', () => this.goto(this.currentIndex - 1));
    this.nextBtn.addEventListener('click', () => this.goto(this.currentIndex + 1));

    // submit
    this.submitBtn.addEventListener('click', () => this.submit());

    // retake
    this.retakeBtn.addEventListener('click', () => {
      this.startTest({retake:true});
    });

    // show answers
    this.showAnswersBtn.addEventListener('click', () => {
      this.renderAnswersList(true);
      this.showAnswersBtn.disabled = true;
    });
  }

  updateTopMeta(){
    const count = (this.sessionQuestions && this.sessionQuestions.length) || this.fullBank[this.currentSubject].length;
    this.progressText.textContent = `Question ${this.currentIndex+1} of ${count}`;
    this.progressFraction.textContent = `${this.answeredCount.textContent || 0} / ${count}`;
    this.topSubject.textContent = this.currentSubject === 'math' ? 'Mathematics' : 'Physics';
  }

  // Start or restart the test
  startTest({retake=false} = {}){
    // Reset session state
    this.started = true;
    this.userAnswers = {};
    this.currentIndex = 0;

    // Make a deep copy of the bank and shuffle question order (stable IDs preserved)
    const source = this.fullBank[this.currentSubject].slice();
    this.sessionQuestions = this.shuffleArray(source);

    // For stability, ensure we will not repeat: sessionQuestions is used for this session
    this.showAnswersBtn.disabled = true;
    this.scoreCard.hidden = true;
    this.answersList.innerHTML = '';

    this.renderQuestionPanel();
    this.updateProgressUI();

    // enable controls
    this.submitBtn.disabled = false;
    this.retakeBtn.disabled = false;
    this.questionPanel.hidden = false;
    // focus first option for accessibility
    setTimeout(()=>{ this.focusFirstOption(); }, 200);
  }

  // Shuffle an array (Fisher-Yates) returns new array copy
  shuffleArray(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Render the current question and shuffled options
  renderQuestionPanel(){
    const qObj = this.sessionQuestions[this.currentIndex];
    if(!qObj) return;

    // Prepare shuffled options while keeping track of which letter is correct after shuffle.
    // We will create a mapping object cached per question instance so that the original 'answer' (A) is mapped to new letter.
    if(!qObj._shuffled){ // store per session to keep consistent during navigation
      const baseOptions = qObj.options.map((opt,idx)=>({text:opt, originalIndex: idx}));
      // shuffle options
      const shuffled = this.shuffleArray(baseOptions);
      qObj._shuffled = shuffled;
      // compute which new position contains the original correct (original answer we set to 'A')
      // original 'A' corresponds to originalIndex 0
      const correctIndex = shuffled.findIndex(o => o.originalIndex === 0);
      qObj._currentAnswerLetter = ['A','B','C','D'][correctIndex];
    }

    // Update question HTML (support LaTeX via MathJax)
    this.qid.textContent = `ID: ${qObj.id}`;
    this.questionHtml.innerHTML = qObj.question;

    // Build options list with radio buttons; use stable input names per question id
    this.optionsList.innerHTML = '';
    qObj._shuffled.forEach((optObj, idx) => {
      const letter = ['A','B','C','D'][idx];
      const optionDiv = document.createElement('label');
      optionDiv.className = 'option';
      optionDiv.tabIndex = 0;
      optionDiv.setAttribute('role','listitem');

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `opt-${qObj.id}`;
      input.value = letter;
      input.id = `${qObj.id}-${letter}`;
      input.checked = (this.userAnswers[qObj.id] === letter);

      input.addEventListener('change', (e)=>{
        this.userAnswers[qObj.id] = e.target.value;
        this.updateProgressUI();
      });

      const span = document.createElement('span');
      span.innerHTML = `<strong>${letter}.</strong>&nbsp; ${optObj.text}`;

      optionDiv.appendChild(input);
      optionDiv.appendChild(span);
      // allow clicking the whole label
      this.optionsList.appendChild(optionDiv);
    });

    // Update meta/controls
    this.updateProgressUI();

    // Update prev/next button states
    this.prevBtn.disabled = (this.currentIndex === 0);
    this.nextBtn.disabled = (this.currentIndex >= this.sessionQuestions.length - 1);

    // Re-typeset MathJax for LaTeX rendering if present
    if(window.MathJax && MathJax.typesetPromise){
      MathJax.typesetPromise([this.questionHtml, this.optionsList]).catch(()=>{/*ignore*/});
    }
  }

  focusFirstOption(){
    const firstOption = this.optionsList.querySelector('.option');
    if(firstOption) firstOption.focus();
  }

  // Navigate to index (bounded)
  goto(index){
    if(index < 0 || index >= this.sessionQuestions.length) return;
    this.currentIndex = index;
    this.renderQuestionPanel();
  }

  updateProgressUI(){
    const total = this.sessionQuestions.length || this.fullBank[this.currentSubject].length;
    const answered = Object.keys(this.userAnswers).length;
    const unanswered = total - answered;
    const percent = total ? Math.round((answered/total)*100) : 0;

    this.progressText.textContent = `Question ${this.currentIndex+1} of ${total}`;
    this.progressFraction.textContent = `${answered} / ${total}`;
    this.answeredCount.textContent = `${answered}`;
    this.unansweredCount.textContent = `${unanswered}`;
    this.progressBar.style.width = `${percent}%`;
  }

  // Submit the test and compute results
  submit(){
    if(!this.started) return;
    // compute score by comparing userAnswers against each question's _currentAnswerLetter
    let correctCount = 0;
    const results = [];

    for(const qObj of this.sessionQuestions){
      const qid = qObj.id;
      const userAns = this.userAnswers[qid] || null;
      const correct = qObj._currentAnswerLetter || 'A'; // fallback
      const correctIndex = ['A','B','C','D'].indexOf(correct);
      const correctText = qObj._shuffled && qObj._shuffled[correctIndex] ? qObj._shuffled[correctIndex].text : qObj.options[0];

      const isCorrect = userAns === correct;
      if(isCorrect) correctCount++;
      results.push({
        id: qid,
        question: qObj.question,
        userAns,
        correctAns: correct,
        correctText,
        allOptions: qObj._shuffled ? qObj._shuffled.map(o => o.text) : qObj.options
      });
    }

    // Display result summary
    const total = this.sessionQuestions.length;
    const percent = ((correctCount / total) * 100).toFixed(2);
    this.scoreText.textContent = `Score: ${correctCount} / ${total}`;
    this.percentText.textContent = `${percent}%`;
    this.scoreCard.hidden = false;

    // show answers list collapsed and enable Show button
    this.answersList.innerHTML = '';
    this.showAnswersBtn.disabled = false;

    // store results for rendering later when user clicks Show
    this._lastResults = results;
    this._lastScore = {correctCount, total, percent};

    // disable submit to prevent re-submitting same session; but allow retake
    this.submitBtn.disabled = true;
    // allow review: scroll to answers region
    this.answersList.scrollIntoView({behavior:'smooth'});
  }

  // Render detailed answers list (called by Show Answers or automatically)
  renderAnswersList(expand=true){
    if(!this._lastResults) return;
    this.answersList.innerHTML = '';
    const ul = document.createElement('div');
    ul.style.display = 'grid';
    ul.style.gap = '8px';

    for(const r of this._lastResults){
      const wrap = document.createElement('div');
      wrap.style.padding = '8px';
      wrap.style.borderRadius = '8px';
      wrap.style.border = '1px solid rgba(2,6,23,0.04)';
      wrap.style.background = '#fff';

      const qh = document.createElement('div');
      qh.innerHTML = `<strong>${r.id}</strong> — ${r.question}`;
      qh.style.marginBottom = '6px';

      const ua = document.createElement('div');
      const userLabel = r.userAns || 'Unanswered';
      const correctLabel = r.correctAns;
      const correctClass = r.userAns === r.correctAns ? 'correct' : 'incorrect';
      ua.innerHTML = `Your answer: <strong>${userLabel}</strong> &nbsp; | &nbsp; Correct: <strong class="${correctClass}">${correctLabel}</strong>`;
      ua.style.marginBottom = '6px';

      const optList = document.createElement('div');
      optList.style.display = 'grid';
      optList.style.gap = '4px';
      const letters = ['A','B','C','D'];
      r.allOptions.forEach((t, idx)=>{
        const el = document.createElement('div');
        el.innerHTML = `<strong>${letters[idx]}.</strong> ${t}`;
        el.style.opacity = (letters[idx] === r.correctAns) ? '1' : '0.9';
        if(letters[idx] === r.correctAns){
          el.style.fontWeight = '700';
        }
        optList.appendChild(el);
      });

      wrap.appendChild(qh);
      wrap.appendChild(ua);
      wrap.appendChild(optList);
      ul.appendChild(wrap);
    }

    this.answersList.appendChild(ul);
    if(expand) this.answersList.scrollIntoView({behavior:'smooth'});
  }
}

/* Note:
- The data.js file intentionally leaves each question object's 'answer' set to "A" (first option)
  because script.js shuffles options per session and computes the correct letter for the shuffled options.
- This approach preserves stable IDs while ensuring per-attempt randomization of options.
- To integrate more advanced question content (images, diagrams), extend question objects with
  optional fields like 'image', 'meta', and adapt renderQuestionPanel to include them.
*/
