# JRPG Trivia
### Test your JRPG knowledge with this trivia game made using jQuery timers.

Test it in your browser!: (https://hchen651.github.io/triviagame)

## How to play:
* Upon starting the game, a question will be displayed along with 4 answer choices.
* You have 30 seconds to select an answer.
* Each correct answer gets you one point. Your score is tallied at the end.

## How does it work?
The HTML file contains containers which store the start menu, questions, answers, and score screens. Only one container is shown at a time, and they are manipulated with various show and hide functions. The questions and answers are changed either upon the interval timer reaching 0 or on a user's click on an answer. Upon clicking an answer, the screen which displays the result and correct answer is shown for 5 seconds. A function loops through the array of question objects until all questions are answered or skipped. The final score container is shown at the end.

Currently, there are only five questions, but more can be added later by simply adding new objects to the question array.
