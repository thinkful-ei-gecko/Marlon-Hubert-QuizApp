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

function generateQuestions() {
    return `
    <div class="question-${questionNum}">
    <h2>${STORE[questionNum].question}</h2>
    </div>
    `
}

function questionMaker() {

};

function generateAnswers() {

};

function answersSubmitted() {

};

function correctAnswer() {

};

function wrongAnswer() {

};


$(startQuiz);
$(generateQuestions);
$(questionMaker)