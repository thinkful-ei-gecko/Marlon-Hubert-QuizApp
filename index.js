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
    return `<div class ="questions">
    <h2>Question 1</h2></div>`
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