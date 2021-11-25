//Variables created for quiz, results, and 'submit' button
var quizBox = document.getElementById("quiz");
var resultsBox = document.getElementById("results");
var startButton = document.getElementById("start");
var count;
var correctAnswer;
var questionIndex;
var quizTimer;
var highScores = JSON.parse(localStorage.getItem("highScores"));

//Starts game when 'Start' button is clicked
document.getElementById("start").addEventListener("click", startGame);

//Logs score when 'Submit' button is clicked
document.getElementById("initial-form").addEventListener("submit", logScore);

//Restarts game when user clicks 'retake quiz'
document.getElementById("retake-quiz").addEventListener("click", reloadPage);

//Quiz appears on screen
function makeQuiz() {
    quizBox.style.display = "block";
    var currentQuestion = quizQuestions[questionIndex];
    correctAnswer = currentQuestion.correctAnswer;
    displayCurrentQuestion();
}

//Displays current question and answer options
function displayCurrentQuestion() {
    quizBox.innerHTML = "";
    var currentQuestion = quizQuestions[questionIndex];
    //Finds correct answer for question
    correctAnswer = currentQuestion["correctAnswer"];
    var questionEl = document.createElement("div");
    questionEl.textContent = currentQuestion.question;
    quizBox.appendChild(questionEl);
    var answerKeys = Object.keys(currentQuestion["answers"]);

    //Generates question/answer button 
    for (let index=0; index < answerKeys.length; index++) {        
        var currentKey = answerKeys[index];
        var buttonText = currentQuestion["answers"][currentKey];
        var answer = document.createElement("button");
        answer.classList.add("options-button");
        answer.value = currentKey;
        answer.innerHTML = buttonText;
        quizBox.appendChild(answer);
        answer.addEventListener("click", chooseAnswer);
    }
}

//When user chooses the correct answer, the next question populates the screen
function chooseAnswer(event) {
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
        //if the user answers incorrectly, five seconds are deducted from the timer and score
    } else {
        count = count - 5;
        document.getElementById("timer").innerHTML = count;
    }

}
//The game starts by hiding the 'welcome' page and displaying the timer 
function startGame() {
    count = 75;
    questionIndex = 0;
    document.getElementById("welcome").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("timer").innerHTML = count;
    makeQuiz();
    //Timer begins counting down from 75 to 0
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
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    quizBox.innerHTML = "";
    clearInterval(quizTimer);
}

//Allows user to log initials and score, prints to page
function logScore(event) {
    event.preventDefault();
    if (document.getElementById("initials").value.length >= 4) {
        alert("Please write three or fewer characters.")
        return;
    }
    document.getElementById("timer").style.display = "none";
    //User high score and initials are stored and available on page load
    var highScore = {
        score: count,
        initials: document.getElementById("initials").value
    }
    if (!highScores) {
        highScores = [];
    }
    //hides form after score is logged to console to prevent multiple entries
    document.getElementById("initial-form").style.display = "none";
    //shows high scores from all previous games saved
    document.getElementById("high-scores").style.display = "block";
    //displays button to retake quiz
    document.getElementById("retake-quiz").style.display = "inline-block";

    highScores.push(highScore);

    //User high score and initials are displayed on page after 'SUBMIT' is clicked inside the "score-list" ol

    //Make a list item per user submission and display on page

    for (let index=0; index < highScores.length; index++) {
        var currentHighScore = highScores[index];
        var userScore = document.createElement("li");
        userScore.innerHTML = currentHighScore.initials + " : " + currentHighScore.score;
        document.getElementById("score-list").appendChild(userScore);
 
    }

    localStorage.setItem("highScores", JSON.stringify(highScores));
}
function reloadPage() {
    reload = location.reload();
}

//Quiz questions and answers
var quizQuestions = [
    {
        question: "JavaScript is a ___-side programming language.",
        answers: {
            a: "client",
            b: "server",
            c: "client and server"
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
            c: "none of the above",
            d: "all of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What will the code 'Boolean(3>7)' return?",
        answers: {
            a: "false",
            b: "true", 
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
        question: "JavaScript has the file extension:___.",
        answers: {
            a: ".js",
            b: ".Java",
            c: ".javascript",
            d: ".javajava",
            e: ".html"
        },
        correctAnswer: "a"
    },
    {
        question: "Which attribute can hold the JavaScript version?",
        answers: {
            a: "SCRIPT",
            b: "LANGUAGE",
            c: "VERSION",
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is NOT considered a JavaScript operator?",
        answers: {
            a: "this",
            b: "new",
            c: "typeof",
            d: "delete"
        },
        correctAnswer: "a"
    },
    {
        question: "Using a/an ___ statement is how you test for a specific condition.",
        answers: {
            a: "For-",
            b: "Switch-",
            c: "If-",
            d: "When-",
            e: "Super Awesome-"
        },
        correctAnswer: "c"
    }
]

console.log("oh hey there :)");