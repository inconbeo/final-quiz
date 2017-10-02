'use strict';

const quizQuestions = [ 
  {question: 'How many planets are there in our solar system?',
    answer: 'eight',
    a: 'eight',
    b: 'nine',
    c: 'thirteen',
    d: 'six'},
  {question: 'Of the four inner planets, which is biggest?',
    answer: 'Earth',
    a: 'Mars',
    b: 'Saturn',
    c: 'Venus',
    d: 'Earth'},
  {question: 'Which planet in our solar system has rings?',
    answer: 'all of the above',
    a: 'Jupiter',
    b: 'Saturn',
    c: 'Uranus',
    d: 'all of the above'},
  {question: 'What was the first planet to be discovered with a telescope?',
    answer: 'Uranus',
    a: 'Uranus',
    b: 'Saturn',
    c: 'Mercury',
    d: 'Neptune'},
  {question: 'How many exoplanets (planets orbiting stars other than our Sun) have we discovered?',
    answer: '3600',
    a: '3600',
    b: '4200',
    c: '58',
    d: 'none'},
  {question: 'Which planet was discovered through mathematical calculations rather than with a telescope?',
    answer: 'Neptune',
    a: 'Europa',
    b: 'Pluto',
    c: 'Neptune',
    d: 'Mercury'},
  {question: 'Which of the four Galilean moons is most likely to harbor life in its subsurface oceans?',
    answer: 'Europa',
    a: 'Io',
    b: 'Europa',
    c: 'Ganimede',
    d: 'Callisto'},
  {question: 'Which of the four Galilean moons is the biggest?',
    answer: 'Ganimede',
    a: 'Io',
    b: 'Europa',
    c: 'Ganimede',
    d: 'Callisto'},
  {question: 'On which planet is the solar system\'s largest volcano, Olympus Mons, located?',
    answer: 'Mars',
    a: 'Mars',
    b: 'Venus',
    c: 'Jupiter',
    d: 'Earth'},
  {question: 'Jupiter\'s Great Red Spot is a gigantic hurricane bigger than Earth. How long has it been raging?',
    answer: '350 years',
    a: '3 months',
    b: '18 months',
    c: 'a year',
    d: '350 years'},
];

const STORE = {
  view: 'intro',
  questions: [{}, {}, {}, {}, {}],
  choice: null,
  currentQuestion: null,
  correctResponses: null,
};

function render() {
  if (STORE.view === 'intro') {
    console.log('Intro');
    renderIntro();
  }

  else if (STORE.view === 'questions') {
    console.log('questions');
    renderQuestions();
  }

  else if (STORE.view === 'results') {
    console.log('results');
    renderResults();
  }
}

function renderIntro() {}

function renderQuestions() {}

function renderQuestionsFeedback() {}

function renderResults() {}

function resetQuiz() {}

function main() { 
  render();

}

$(main);