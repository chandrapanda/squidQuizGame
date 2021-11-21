//Variables created for quiz, results, and 'submit' button
var quizBox = document.getElementById("quiz");
var resultsBox = document.getElementById("results");
var submitButton = document.getElementById("submit");

//Displays quiz questions and answers
function makeQuiz(questions, quizBox, resultsBox, submitButton){
    var output = [];
    quizQuestions.forEach(
        (currentQuestion, questionNumber) {
            var answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                  </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
              );
            }
          );
        }
    )
}

function quizResults(){}

function generateQuizd

makeQuiz();

submitButton.addEventListener("click", quizResults);
//Quiz questions and answers
var quizQuestions = [
    {
        question: "Who was the Greek goddess of love?",
        answers: {
            a: "Athena",
            b: "Calypso",
            c: "Aphrodite"
        },
        correctAnswer: "c"
    },
    {
        question: "What is 'pie' in Italian?",
        answers: {
            a: "Cake",
            b: "Pizza",
            c: "Piazzo"
        },
        correctAnswer: "b"
    },
    {
        question: "Who sang a song about being an eggman and a walrus?",
        answers: {
            a: "The Beatles",
            b: "Elvis Presley",
            c: "Whitney Houston"
        },
        correctAnswer:"a"
    },
    {
        question: "How many total sides would 3 triangles and 3 rectangles have?",
        answers: {
            a: "21",
            b: "14",
            c: "38"
        },
        correctAnswer: "a"
    },
    {
        question: "Which ocean surrounds the Madlives?",
        answers: {
            a: "Pacific",
            b: "Indian",
            c: "Atlantic"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is a gas planet?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter"
        },
        correctAnswer: "c"
    },
    {
        question: "Which famous Chinese writer is known for preaching morals?",
        answers: {
            a: "Confucius",
            b: "Tao",
            c: "Mao Ze Dong"
        },
        correctAnswer: "a"
    },
    {
        question: "How many pedals do modern pianos have?",
        answers: {
            a: "2",
            b: "3",
            c: "4"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital city of Spain?",
        answers: {
            a: "Madrid",
            b: "Barcelona",
            c: "Valencia"
        },
        correctAnswer: "a"
    },
    {
        question: "Which Chess piece can only move diagonally?",
        answers: {
            a: "The queen",
            b: "A rook",
            c: "A bishop"
        },
        correctAnswer: "c"
    },
]

console.log("oh hey there");