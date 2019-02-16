var intervalId;
var timeRemaining = 30;
var correctAnswer;
var score = 0;

//An array of question objects. 
//'q' represents the questions, 'a1-a4' represents the answer choices, 'ca' represents the correct answer, and 'ai' represents the message shown on the answer screen.
var questions = [
    { q: "What is the name of the main antagonist's weapon in Final Fantasy VII?", a1: "Muramasa", a2: "Masamune", a3: "Buster Sword", a4: "Longclaw", ca: "Masamune", ai: "Sephiroth's sword is called Masamune." },
    { q: "In Kingdom Hearts 1, which one of the following keyblades has the highest attack stat?", a1: "Oathbreaker", a2: "Ultima Weapon", a3: "Kingdom Key", a4: "Lionheart", ca: "Ultima Weapon", ai: "The most powerful keyblade in the first game is Ultima Weapon." },
    { q: "In the Fire Emblem Series, which weapon type is most effective against Lances?", a1: "Sword", a2: "Bow", a3: "Axe", a4: "", ca: "Axe" },
    { q: "q4", a1: "a", a2: "s", a3: "d", a4: "f", ca: "f" },
    { q: "q5", a1: "a", a2: "s", a3: "d", a4: "f", ca: "a" },
]
var currentQuestion = -1;

function displayQuestion() {
    $(".start-container").hide();
    $(".answer-container").hide();
    $(".game-container").show();
    currentQuestion++;
    $(".question").html("<h3>" + questions[currentQuestion].q + "</h3>");
    $("#a1").html("<h2>" + questions[currentQuestion].a1 + "</h2>");
    $("#a2").html("<h2>" + questions[currentQuestion].a2 + "</h2>");
    $("#a3").html("<h2>" + questions[currentQuestion].a3 + "</h2>");
    $("#a4").html("<h2>" + questions[currentQuestion].a4 + "</h2>");
    correctAnswer = questions[currentQuestion].ca;
    timeRemaining = 30;
    $(".time-remaining").html(timeRemaining);
}

function countdownTimer(){
    timeRemaining--;
    $(".time-remaining").html(timeRemaining);
    if(timeRemaining<=0)
    {
        clearInterval(intervalId);
        $(".game-container").hide();
        $(".answer-container").show();
        $(".answer-info").text("Time's Up! " + questions[currentQuestion].ai);
        setTimeout(displayQuestion, 3500);
    }
}

$(".game-container").hide();
$(".answer-container").hide();

$(".answer").click(function(){
    var selectedAnswer = "#" + $(this).attr('id');
    if ($(selectedAnswer).text() == correctAnswer)
    {
        score++;
        $(".game-container").hide();
        $(".answer-container").show();
        $(".answer-info").text('Correct! ' + questions[currentQuestion].ai);
    }
    else{
        $(".game-container").hide();
        $(".answer-container").show();
        $(".answer-info").text('Wrong! ' + questions[currentQuestion].ai);
    }
    setTimeout(displayQuestion, 3500);
});

$(".start-button").click(function(){
    $(".start-container").hide();
    $(".game-container").show();
    intervalId = setInterval(countdownTimer,1000);
    displayQuestion();
});