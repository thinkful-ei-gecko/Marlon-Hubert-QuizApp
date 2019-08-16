'use strict';

let questionNum = 0;
let currentScore = 0;

function startQuiz() {
    $('.title-page').on('click', '.start-quiz', function(event) {
        event.preventDefault();
        $('.title-page').remove();
        $('header').css('visibility','visible');
      
    })
};

function generateQuestions() {
    return `    
    <section>
    <form class="question-form">
      <fieldset name="answers">Select An Answer
        <input type="radio"> Answer1
        <input type="radio"> Answer2
        <input type="radio"> Answer3
        <input type="radio"> Answer4
        <button type="button">Next Question</button>
      </fieldset>
    </form>
  </section>`
}

function generateAnswers() {

};

function answersSubmitted() {

};

function correctAnswer() {

};

function wrongAnswer() {

};


$(startQuiz);
$(generateQuestion);