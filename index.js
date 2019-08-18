'use strict';

let questionNum = 0;
let currentScore = 0;

function startQuiz() {
    $('.title-page').on('click', '.start-quiz', function(event) {
        event.preventDefault();
        $('.title-page').remove();
        $('header').css('visibility','visible');
        $('.questionPage').css('display', 'block');
        $('.questionNum').html('1');
        $('.questionPage').html(generateQuestions());
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
          <input type="radio" value="answer1" name="answer-group1" required> ${STORE[questionNum].answers[0]}
        </label>
        <label class="answerSelect-row1">
          <input type="radio" value="answer2" name="answer-group1" required> ${STORE[questionNum].answers[1]}
        </label>
        <label class="answerSelect-row2">
          <input type="radio" value="answer3" name="answer-group1" required> ${STORE[questionNum].answers[2]}
        </label>
        <label class="answerSelect-row2">
          <input type="radio" value="answer4" name="answer-group1" required> ${STORE[questionNum].answers[3]}
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

function generateAnswers() {

};

// When user selects an answer and presses button
function selectAnswer() {
    $('form').on('click', '.submitButton', function(event) {
        event.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val()
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
};

// When the user clicks 'next' button on the feedback page
function nextQuestionGenerator() {

}


function initialize() {
  $(startQuiz);
  $(generateQuestions);
  $(questionMaker);
  $(selectAnswer);
}

initialize();