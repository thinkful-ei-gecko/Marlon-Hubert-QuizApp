'use strict';

let questionNum = 0;
let currentScore = 0;

function startQuiz() {
    $('.title-page').on('click', '.start-quiz', function(event) {
        event.preventDefault();
        $('.title-page').remove();
        $('header').hide();
        $('.questionPage').css('display', 'block');
        $('.questionNum').html('1');
        $('generateQuestions')
    })
};

// Generates questions to display on the page.
function generateQuestions() {
    return `
    <div class="question-${questionNum}">
    <h2>${STORE[questionNum].question}</h2>
    </div>
    <section>
    <form class="question-form">
      <fieldset name="answers" id="answer-group1">
        <label class="answerSelect-row1">
          <button type="button" tabindex="1" value="${STORE[questionNum].answers[0]}" name="answer-group1" required> ${STORE[questionNum].answers[0]}
        </label>
        <label class="answerSelect-row1">
          <button type="button" tabindex="2" value="${STORE[questionNum].answers[1]}" name="answer-group1" required> ${STORE[questionNum].answers[1]}
        </label>
        <label class="answerSelect-row2">
          <button type="button" tabindex="3" value="${STORE[questionNum].answers[2]}" name="answer-group1" required> ${STORE[questionNum].answers[2]}
        </label>
        <label class="answerSelect-row2">
          <button type="button" tabindex="4" value="${STORE[questionNum].answers[3]}" name="answer-group1" required> ${STORE[questionNum].answers[3]}
        </label>
        <button type="button" class="submitButton">Next Question</button>
      </fieldset>
    </form>
  </section>
    `
}

//increments score
function scoreIncrementor() {
  currentScore++;
}

//increments question number
function questionNumIncrementor() {
  questionNum++
  $('.questionNum').text(questionNum + 1);
}

// Displays the next question and answers for user to select
function questionMaker() {
    $('.questionPage').html(generateQuestions());
};


// When user selects an answer and presses button
function selectAnswer() {
  $('form').on('submit', function(event) {
      event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let rightAnswer = `${STORE[questionNum].correctAnswer}`;

    if (answer === rightAnswer) {
      selectCorrectAnswer();
      scoreUpdater();
    } else {
      selectWrongAnswer();
    }
  })
};

//Updates score text
function scoreUpdater() {
  scoreIncrementor();
  $('.quizScore').text(currentScore);
}

//Feedback page for selecting the correct answer
function selectCorrectAnswer() {
  let imgLink = `${STORE[questionNum].answerImage}`
  $('.questionPage').html(
    `<div class="correct-answer">
    ${imgLink}
      <h2>You are correct!</h2>
        <button type="button" class="nextButton">Next</button>
  </div>`
  );
};

//Feedback page for selecting the wrong answer
function selectWrongAnswer() {
    let rightAnswer = `${STORE[questionNum].correctAnswer}`;
    let imgLink = `${STORE[questionNum].answerImage}`
    $('.questionPage').html(
      `<div class="wrong-answer">
      ${imgLink}
        <h2>You are incorrect! The correct answer is "${rightAnswer}"</h2>
          <button type="button" class="nextButton">Next</button>
    </div>`
    );
};

function feedbackPage() {
  $('.questionPage').on('click', '.nextButton', function(event) {
    if (currentScore > 8) {
      $(this).html(`
      <div class="feedback-container">
      <h2>You got ${questionNum} out of 10 corrent!</h2>
      <p>You are a television trivia wizard!</p>
      </div>
      `)
    } else if(currentScore > 4 && currentScore < 8) {
      $(this).html(
      `<div class="feedback-container">
      <h2>You got ${questionNum} out of 10 corrent!</h2>
      <p>Subscribe to your next netflix subcription</p>
      </div>`)
    } else {
      $(this).html(
      `<div class="feedback-container">
      <h2>You got ${questionNum} out of 10 corrent!</h2>
      <p>filler</p>
      </div>`)
    }
  });
}

// When the user clicks 'next' button on the feedback page
function nextQuestionGenerator() {
  $('.questionPage').on('click', '.nextButton', function(event) {
    questionNumIncrementor();
    questionMaker();
    selectAnswer();
  });
}


function initialize() {
  startQuiz();
  questionMaker();
  selectAnswer();
  nextQuestionGenerator();
}

$(initialize);