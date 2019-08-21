'use strict';

let questionNum = 0;
let currentScore = 0;

//Starts the quiz
function startQuiz() {
  $('.title-page').on('click', '.start-quiz', function (event) {
    event.preventDefault();
    $('.title-page').remove();
    $('header').show();
    $('.questionPage').css('display', 'block');
    $('.questionNum').html('1');
    //generateQuestions();
  })
};

// Generates questions to display on the page.
function generateQuestions() {
  if (questionNum < STORE.length) {
    return `
    <div class="question-${questionNum}">
    <h2>${STORE[questionNum].question}</h2>
    </div>
    <section>
    <form class="question-form" aria-live="polite">
      <fieldset name="answers" id="answer-group1">
        <label class="answerSelect row1">
          <input type ="radio" class="selectButton" value="${STORE[questionNum].answers[0]}" name="answer-group1" required> ${STORE[questionNum].answers[0]}
        </label>
        <label class="answerSelect row1">
          <input type="radio" class="selectButton" value="${STORE[questionNum].answers[1]}" name="answer-group1" required> ${STORE[questionNum].answers[1]}
        </label>
        <label class="answerSelect row2">
          <input type="radio" class="selectButton" value="${STORE[questionNum].answers[2]}" name="answer-group1" required> ${STORE[questionNum].answers[2]}
        </label>
        <label class="answerSelect row2">
          <input type="radio" class="selectButton" value="${STORE[questionNum].answers[3]}" name="answer-group1" required> ${STORE[questionNum].answers[3]}
        </label>
        <button type="submit" class="submitButton">Next Question</button>
      </fieldset>
    </form>
  </section>
    `
  } else {
    feedbackPage();
    $('.questionNum').text(10);
    resetQuiz();
  }
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
function submitAnswer() {
  $('form').on('submit', function (event) {
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
       <h3>You are correct!</h3>
       ${imgLink}
      <button type="button" class="nextButton">Next</button>
     </div>`
  );
};

//Feedback page for selecting the wrong answer
function selectWrongAnswer() {
  let imgLink = `${STORE[questionNum].answerImage}`
  let rightAnswer = `${STORE[questionNum].correctAnswer}`;
  $('.questionPage').html(
    `<div class="wrong-answer">
    <h3>You are incorrect! The correct answer is "${rightAnswer}"</h3>
    ${imgLink}
    <button type="button" class="nextButton">Next</button>
    </div>`
  );
};

function feedbackPage() {
    if (currentScore >= 8) {
      $('.questionPage').html(`
      <div class="feedback-container">
      <h2>You got ${currentScore} out of 10 correct!</h2>
      <p>You are a television trivia wizard!</p>
      <button type="submit" class="restartButton">Try Again!</button>
      </div>
      `)
    } else if (currentScore > 4 && currentScore < 8) {
      $('.questionPage').html(
        `<div class="feedback-container">
      <h2>You got ${currentScore} out of 10 correct!</h2>
      <p>Hurry and get your next monthly Netflix subscription!</p>
      <button type="submit" class="restartButton">Try Again!</button>
      </div>`)
    } else {
      $('.questionPage').html(
        `<div class="feedback-container">
      <h2>You got ${currentScore} out of 10 correct!</h2>
      <p>Give yourself a pat on the back for trying.</p>
      <button type="submit" class="restartButton">Try Again!</button>
      </div>`);
    }
}

// When the user clicks 'next' button on the feedback page
function nextQuestionGenerator() {
  $('.questionPage').on('click', '.nextButton', function (event) {
    questionNumIncrementor();
    questionMaker();
    submitAnswer();
  });
}

//Reset's the quiz from the result page
function resetQuiz() {
  $('.questionPage').on('click', '.restartButton', function(event) {
    questionNum = 0;
    currentScore = 0;
    $('.questionNum').html('0');
    $('.quizScore').html('0');
    $('header').show();
    $('.questionPage').css('display', 'block');
    $('.questionNum').html('1');
    questionMaker();
  })
}

// Starts the quiz
function initialize() {
  startQuiz();
  questionMaker();
  submitAnswer();
  nextQuestionGenerator();
}

initialize();