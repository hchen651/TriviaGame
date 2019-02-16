var intervalId1;
var intervalId2;
var timeRemaining = 30;
var correctAnswer;
//An array of question objects. 
//'q' represents the questions, 'a1-a4' represents the answer choices and 'ca' represents the correct answer.
var questions = [
    { q: "What is the name of the main antagonist's weapon in Final Fantasy VII?", a1: "Muramasa", a2: "Masamune", a3: "Buster Sword", a4: "Longclaw", ca: "Masamune" },
    { q: "In Kingdom Hearts 1, which one of the following keyblades has the highest attack?", a1: "Oathbreaker", a2: "Ultima Weapon", a3: "Kingdom Key", a4: "Lionheart", ca: "Ultima Weapon" },
    { q: "What is the name of the knight who betrays you in ", a1: "a", a2: "s", a3: "d", a4: "f", ca: "d" },
    { q: "q4", a1: "a", a2: "s", a3: "d", a4: "f", ca: "f" },
    { q: "q5", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a" },
]
var currentQuestion = -1;

function displayQuestion() {
    currentQuestion++;
    $(".question").html("<h3>" + questions[currentQuestion].q + "</h3>");
    $("#a1").html("<h2>" + questions[currentQuestion].a1 + "</h2>");
    $("#a2").html("<h2>" + questions[currentQuestion].a2 + "</h2>");
    $("#a3").html("<h2>" + questions[currentQuestion].a3 + "</h2>");
    $("#a4").html("<h2>" + questions[currentQuestion].a4 + "</h2>");
    timeRemaining = 30;
    $(".time-remaining").html(timeRemaining);
}

function countdownTimer(){
    timeRemaining--;
    $(".time-remaining").html(timeRemaining);
}

//intervalId2 = setInterval(countdownTimer,1000);

function cycleQuestion() {
    intervalId1 = setInterval(displayQuestion, 30000);
}

$(".game-container").hide();

$(".answer").click(function(){
    var selectedAnswer = $(this).attr('id');
    console.log(selectedAnswer);
    if ()
    {

    }
    else{

    }

    displayQuestion();
});

$(".start-button").click(function(){
    $(".start-container").hide();
    $(".game-container").show();
    intervalId2 = setInterval(countdownTimer,1000);
    displayQuestion();
    cycleQuestion();
});