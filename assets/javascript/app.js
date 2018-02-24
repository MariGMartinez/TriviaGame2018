var questions = [{
    question: "What year was the 1st World Cup?",
    choices: ["July 23 1930", "July 23 1950", "June 23 1930", "June 23 1950"],
    correctAnswer: 0
}, {
    question: "How many World Cups have there been since it's inception?",
    choices: ["30", "24", "20", "15"],
    correctAnswer: 2
}, {
    question: "What was the name of the '94 USA World Cup Mascot?",
    choices: ["Patriot", "Kicker", "Striker", "Stars"],
    correctAnswer: 2
}, {
    question: "Which country has wone the most World Cups?",
    choices: ["Germany", "Spain", "Brazil", "Argentina"],
    correctAnswer: 2
}, {
    question: "What country was the 1998 World Cup held ?",
    choices: ["Japan", "France", "Germany", "Italy"],
    correctAnswer: 1
}];


var questionsHTML = "";
for (var i = 0; i < questions.length; i++) {
    console.log(questions[i])
    questionsHTML += "<div>" + questions[i].question + "</div>"
    for (var j = 0; j < questions[i].choices.length; j++) {
        console.log(questions[i].choices[j])

        questionsHTML += "<input type='radio' value='" + questions[i].choices[j] + "' name='choices" + i + "'>" + questions[i].choices[j] + "</input>"

    }
}
console.log(questionsHTML)
$(".question").append(questionsHTML);


$(".button").on("click", function () {
    correct = 0;
    incorrect  = 0
    answerChoice0 = $("input[name='choices0']:checked").val()
    answerChoice1 = $("input[name='choices1']:checked").val()
    answerChoice2 = $("input[name='choices2']:checked").val()
    answerChoice3 = $("input[name='chioces3]:checked").val()
    answerChoice4 = $("input[name='choices4:checked").val()
    if (answerChoice0 == questions[0].choices[0]) {
        correct++;
    }
    else{
        incorrect++;
    }
    
    if (answerChoice1 == questions[1].choices[2]) {
        correct++;
    }
    else{
        incorrect++;
    }
    if (answerChoice2 == questions[2].choices[2]) {
        correct++;
    }
    else{
        incorrect++;
    }
    if (answerChoice3 == questions[3].choices[2]) {
        correct++;
    }
    else{
        incorrect++;
    }
    
    if (answerChoice4 == questions[4].choices[1]) {
        correct++;
    }
    else{
        incorrect++;
    }

    $(".result").html("<div>Correct: " + correct +  "</div><div>Incorrect: " + incorrect + "</div>");
});







