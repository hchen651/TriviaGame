var intervalId1;
var intervalId2;
var timeRemaining = 30;
//An array of question objects. 
//'q' represents the questions, 'a1-a4' represents the answer choices and 'ca' represents the correct answer.
var questions = [
    { q: "q1", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a1" },
    { q: "q2", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a2" },
    { q: "q3", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a3" },
    { q: "q4", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a4" },
    { q: "q5", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a1" },
    { q: "q6", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a2" },
    { q: "q7", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a3" },
    { q: "q8", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a4" },
    { q: "q9", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a1" },
    { q: "q10", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a2" },
]
var currentQuestion = 0;

function displayQuestion() {
    $(".question").html("<h3>" + questions[currentQuestion].q + "</h3>");
    $(".answer1").html("<h2>" + questions[currentQuestion].a1 + "</h2>");
    $(".answer2").html("<h2>" + questions[currentQuestion].a2 + "</h2>");
    $(".answer3").html("<h2>" + questions[currentQuestion].a3 + "</h2>");
    $(".answer4").html("<h2>" + questions[currentQuestion].a4 + "</h2>");
    currentQuestion++;
    timeRemaining = 30;
    $(".time-remaining").html(timeRemaining);
}

function countdownTimer(){
    timeRemaining--;
    $(".time-remaining").html(timeRemaining);
}

intervalId2 = setInterval(countdownTimer,1000);

function cycleQuestion() {
    intervalId1 = setInterval(displayQuestion, 30000);
}

displayQuestion();
cycleQuestion();