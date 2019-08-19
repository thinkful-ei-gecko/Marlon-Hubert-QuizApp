'use strict';

let questionNum = 0;
let currentScore = 0;

//Starts the quiz
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
          <input type="radio" tabindex="1" value="${STORE[questionNum].answers[0]}" name="answer-group1" required> ${STORE[questionNum].answers[0]}
        </label>
        <label class="answerSelect-row1">
          <input type="radio" tabindex="2" value="${STORE[questionNum].answers[1]}" name="answer-group1" required> ${STORE[questionNum].answers[1]}
        </label>
        <label class="answerSelect-row2">
          <input type="radio" tabindex="3" value="${STORE[questionNum].answers[2]}" name="answer-group1" required> ${STORE[questionNum].answers[2]}
        </label>
        <label class="answerSelect-row2">
          <input type="radio" tabindex="4" value="${STORE[questionNum].answers[3]}" name="answer-group1" required> ${STORE[questionNum].answers[3]}
        </label>
        <button type="submit" class="submitButton">Next Question</button>
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

    if (answer === rightAnswer && questionNum === 10) {
      selectCorrectAnswer();
      scoreUpdater();
    } else {
      selectWrongAnswer();
      resultPage();
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
  $('.questionPage').html(
    `<div class="correct-answer">
    <img src="" alt=""></img>
      <h2>You are correct!</h2>
        <button type="button" class="nextButton">Next</button>
  </div>`
  );
};

//Feedback page for selecting the wrong answer
function selectWrongAnswer() {
    let rightAnswer = `${STORE[questionNum].correctAnswer}`;
    $('.questionPage').html(
      `<div class="wrong-answer">
      <img src="" alt=""></img>
        <h2>You are incorrect! The correct answer is "${rightAnswer}"</h2>
          <button type="button" class="nextButton">Next</button>
    </div>`
    );
};

// When the user clicks 'next' button on the feedback page
function nextQuestionGenerator() {
  $('.questionPage').on('click', '.nextButton', function(event) {
    questionNumIncrementor();
    questionMaker();
    generateQuestions();
    selectAnswer();
  });
}

//Result page after the last question is answered
function resultPage() {
  $('.questionPage').html(`
  <section id="feedback-page">
    <h2>Final Score: You got ${correctAnswer} out of 10 questions correct</h2>
    <button id="reset-button"> One more time!</button>
  </section>
  `);
}

//Reset's the quiz from the result page
function resetQuiz() {
  $('.questionPage').on('click', '#reset-button', function(event) {
    initialize();
  })
}

// Starts the quiz
function initialize() {
  startQuiz();
  questionMaker();
  selectAnswer();
  nextQuestionGenerator();
}

$(initialize);