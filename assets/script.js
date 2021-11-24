//Variables created for quiz, results, and 'submit' button
var quizBox = document.getElementById("quiz");
var resultsBox = document.getElementById("results");
var startButton = document.getElementById("start");
var count;
var correctAnswer;
var questionIndex;
var quizTimer;

//Starts game when 'Start' button is clicked
document.getElementById("start").addEventListener("click", startGame);

//Logs score when 'Submit' button is clicked
document.getElementById("submit").addEventListener("click", logScore);

//Displays quiz questions and answers
function makeQuiz() {
    quizBox.style.display = "block";
    var currentQuestion = quizQuestions[questionIndex];
    correctAnswer = currentQuestion.correctAnswer;
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    quizBox.innerHTML = "";
    var currentQuestion = quizQuestions[questionIndex];
    correctAnswer = currentQuestion["correctAnswer"];
    var questionEl = document.createElement("div");
    questionEl.textContent = currentQuestion.question;
    quizBox.appendChild(questionEl);
    var answerKeys = Object.keys(currentQuestion["answers"]);


    for (let index=0; index < answerKeys.length; index++) {        
        var currentKey = answerKeys[index];
        var buttonText = currentQuestion["answers"][currentKey];
        var answer = document.createElement("button");
        answer.value = currentKey;
        answer.innerHTML = buttonText;
        quizBox.appendChild(answer);
        answer.addEventListener("click", chooseAnswer);
    }
    
}

function chooseAnswer(event) {
    console.log(event.target.value);
    console.log(correctAnswer);
    var userAnswer = event.target.value;
    currentQuestion = quizQuestions[questionIndex]
    correctAnswer = currentQuestion["correctAnswer"];
    if(userAnswer === correctAnswer) {

        ////When user answers final question correctly, the game ends
        if(questionIndex === quizQuestions.length - 1) {
            endGame();

        } else {
            questionIndex++;
            displayCurrentQuestion(); 
        }

    } else {
        count = count - 5;
        document.getElementById("timer").innerHTML = count;
    }

}

function startGame() {
    count = 75;
    questionIndex = 0;
    document.getElementById("welcome").style.display = "none";
    document.getElementById("timer").innerHTML = count;
    makeQuiz();
    quizTimer = setInterval(() => {
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
    quizBox.innerHTML = "";
    //Create a result box
    clearInterval(quizTimer);
}

//Allows user to log initials and score, prints to page
function logScore() {
    var score = quizTimer.value;
    console.log(score);
    var initials = document.querySelector("initials");
    document.getElementById("initials").innerHTML = score;
    localStorage.getItem(initials, score);
}

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
        correctAnswer: "a"
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