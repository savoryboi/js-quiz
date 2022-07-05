(function($){ 
// Pseudo code
// timer starts at full count (75sec) until startbutton is clicked
// once startbutton clicked, text in html elements cycle through questions array

// final Q screen w/ log for initals and score... 

// store list of questions using objects in an array 

var questions = [
    {
        title: "Q1/5: which of the following is NOT a value type?",
        choices: ['string', 'boolean', 'undefined', 'variable'], 
    },
    {
        title: 'Q2/5: a functioned is called using which of the following:',
        choices: ['()', ';', '{}', '[]'], 

    },
    {
        title: 'Q3/5: within which html element do you link your javascript file?', 
        choices: ['header', 'body', 'html', 'head'], 
    },
    {
        title: 'Q4/5: true or false: developers can use "console.log" in their JavaScipt to make text appear on a webpage', 
        choices: ['true', 'false'], 
    },
    {
        title: 'Q5/5 the following symbols ($$, ||, ===, <, >) are known as...',
        choices: ['computer operators', 'methods', 'comparative operators', 'computer science'], 
    }
];

//devlare variables

var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector('#question')
var liEls = document.querySelectorAll('li');
var scoreEl = document.querySelector('#score');
var timeLeft = 60;
let score = 0;
var wrapperEl = document.querySelector('.answer-list');
var finalScoreEl = document.querySelector('#final-score');
var finalScore = evaluate();
const answerEls = document.querySelector('li');


// assign correct answers to variable to be compared to later
var answer1 = questions[0].choices[3];
var answer2 = questions[1].choices[0];
var answer3 = questions[2].choices[1];
var answer4 = questions[3].choices[1];
var answer5 = questions[4].choices[2];
var lastQuestion = questions[4].title;


// timer setup
var timeInterval = setInterval(function() {
    timeLeft--;
    timerEl.innerText = `time left: ${timeLeft}s`;
    
    if(timeLeft === 0 || timeLeft < 0){
        clearInterval(timeInterval);
        // alert('are u dumb? lol guess so');
        // window.location = 'index.html'
        finishQuiz();
    }
    }, 1000);

scoreEl.innerText = `${score}`;

let i = 0;

function currentPage(){
    var changeQuestion = document.querySelector('#question');
    
    if(i < questions.length){
        var currentQ = questions[i].title;
        var currentChoices = questions[i].choices;  
      
    changeQuestion.innerText = currentQ;
    console.log('banana');

// empties wrapper html
    wrapperEl.innerHTML = '';

 // create new li for each value in current indexed questions.choices
    currentChoices.forEach((item)=>{
        let newLi = document.createElement('li');
        newLi.innerText = item;
        wrapperEl.append(newLi);
    })
    }
    evaluate();
}

function evaluate() {
    document.querySelectorAll('li').forEach((item)=>{

        item.addEventListener('click', function(){

        var userAnswer = this.innerText;
        console.log(userAnswer);
        
        // compare to correct answers...
        if(userAnswer === answer1 || 
        userAnswer === answer2 || 
        userAnswer === answer3 || 
        userAnswer === answer4 || 
        userAnswer === answer5) {
            console.log('correct!');
            score++;
            scoreEl.innerText = `${score}`;
            i++;
            // check for correct answer on final question to send us to final screen
            console.log(i);

            if(i >= questions.length){
                
                score = evaluate();
                finishQuiz();
                console.log(i);

            }
            currentPage();
        } else if(questionEl.textContent == lastQuestion) {
     
            score = evaluate();
            finishQuiz();
        } else {
            // dock time
            timeLeft -= 10;
            console.log('wrong!');
            score--;
            scoreEl.innerText = `${score}`;
            i++;
            currentPage();
            }
        })
    })
    return score;  
}

function finishQuiz(){
    var finalScoreEl = document.querySelector('#score-form');
    scoreEl.innerText = `${score}`;
    questionEl.innerText = 'You have completed the quiz! Type your initials to save your score to the leaderboard.'
    $("#wrapper").addClass("d-none");
    $('#score-form').removeClass("d-none");
    $('#score-form').addClass("d-block");   

}
currentPage();

$("#submitBtn").on('click', function(event){
    event.preventDefault();
    var storageInitials = $("#initials").val();
    var highScores = JSON.parse(localStorage.getItem('initial')) || [];
    highScores.push({storageInitials, score});
    localStorage.setItem('initial', JSON.stringify(highScores));
})

})(jQuery);