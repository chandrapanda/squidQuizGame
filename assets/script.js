//Variables created for quiz, results, and 'submit' button
var quizBox = document.getElementById("quiz");
var resultsBox = document.getElementById("results");
var startButton = document.getElementById("start");
var count;
var correctAnswer;
var questionIndex;

document.getElementById("start").addEventListener("click", startGame);

//Displays quiz questions and answers
function makeQuiz() {
    quizBox.style.display = "block";
    var currentQuestion = quizQuestions[questionIndex];
    correctAnswer = currentQuestion.correctAnswer;
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    var currentQuestion = quizQuestions[questionIndex];
    var questionEl = document.createElement("div");
    questionEl.textContent = currentQuestion.question;
    quizBox.appendChild(questionEl);
    var answerKeys = Object.keys(currentQuestion["answers"]);

    for (let index=0; index < answerKeys.length; index++) {        
        var currentKey = answerKeys[index];
        var buttonText = currentQuestion["answers"][currentKey];
        var answer = document.createElement("button");
        answer.innerHTML = buttonText;
        quizBox.appendChild(answer);
    }

    // document.getElementById("results").appendChild(resultsBox);
}

function showResults() {
    var answerContainer = quizBox.querySelectorAll('.answers');
    //Tracks user's answers
    let numCorrect = 0; 
    quizQuestions.forEach( (currentQuestion, questionIndex) => {
        var answerContainer = answerContainer[currentQuestion];
        var userAnswer = (answerContainer.querySelector(selector)) || {}.value;

        if(userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainer[questionIndex].style.color = '#A7E99C';
        }
        else{
            answerContainer[questionIndex].style.color = '#880808';
        }
    });
    resultsBox.innerHTML = '${numCorrect} out of ${questions.length}';
}

function startGame() {
    count = 75;
    questionIndex = 0;
    document.getElementById("welcome").style.display = "none";
    document.getElementById("timer").innerHTML = count;
    makeQuiz();
    var quizTimer = setInterval(() => {
        count--; 
        document.getElementById("timer").innerHTML = count;
        if(count <= 0) {
           clearInterval(quizTimer);
           endGame(); 
        }
    }, 1000);
}
//Hides timer when game ends, displays results
function endGame() {
    document.getElementById("results").style.display = "block";
    document.getElementById("timer").style.display = "none";
}
//TODO create a for loop for each question/answer 

//Quiz questions and answers
var quizQuestions = [
    {
        question: "JavaScript is a ___-side programming language.",
        answers: {
            a: "client",
            b: "server",
            c: "both"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: {
            a: "min(x,y)",
            b: "Math.min(x,y)",
            c: "Math.min(xy)"
        },
        correctAnswer: "b"
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: {
            a: "default",
            b: "catch",
            c: "label"
        },
        correctAnswer:"a"
    },
    {
        question: "Which is a correct 'if' statement to execute certain code if 'x' is equal to 2?",
        answers: {
            a: "if(x==2)",
            b: "if(x=2)",
            c: "none of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What will the code 'Boolean(3>7)' return?",
        answers: {
            a: "false",
            b: "true",
            c: "SyntaxError"
        },
        correctAnswer: "b"
    },
    {
        question: "What are variables used for in JavaScript programs?",
        answers: {
            a: "inducing high-school algebra flashbacks",
            b: "varying randomly",
            c: "storing numbers, dates, or other values"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answers: {
            a: "accept parameters",
            b: "return a value",
            c: "accept parameters and return a value"
        },
        correctAnswer: "a"
    },
    {
        question: "Which attribute can hold the JavaScript version?",
        answers: {
            a: "SCRIPT",
            b: "LANGUAGE",
            c: "VERSION"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is NOT considered a JavaScript operator?",
        answers: {
            a: "this",
            b: "new",
            c: "typeof"
        },
        correctAnswer: "a"
    },
    {
        question: "Using a/an ___ statement is how you test for a specific condition.",
        answers: {
            a: "For-",
            b: "Switch-",
            c: "If-"
        },
        correctAnswer: "c"
    }
]

console.log("oh hey there");