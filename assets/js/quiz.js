
// Pseudo code
// timer starts at full count (75sec) until startbutton is clicked
// once startbutton clicked, text in html elements cycle through questions array
//          use a for-loop to cycle through each value
//          assign titles to #title in html
//          styled ul for choices
//          when choice clicked IF correct... show 'correct!', nextQ
//          ELSE reduce timer and show 'wrong!!', nextQ
//      final Q stops the loop (use i < questions.length in for-loop)
// score = time (in sec) remaining after completing

// final Q screen w/ log for initals and score... 
//  how to store and display this data ?



// store list of questions using objects in an array 
var questions = [
    {
        title: "which of the following is NOT a value type?",
        choices: ['string', 'boolean', 'undefined', 'variable'], 
        answer: 'variable'
    },
    {
        title: 'a functioned is called using which of the following:',
        choices: ['()', ';', '{}', '[]'], 
        answer: '()'
    },
    {
        title: 'within which html element do you link your javascript file?', 
        choices: ['header', 'body', 'html', 'head'], 
        answer: 'body'
    },
    {
        title: 'true or false: developers can use "console.log" in their JavaScipt to make text appear on a webpage', 
        choices: ['true', 'false'], 
        answer: 'false'
    },
    {
        title: 'the following symbols ($$, ||, ===, <, >) are known as...',
        choices: ['computer operators', 'methods', 'comparative operators', 'computer science'], 
        answer: 'comparative operators'
    }
];





var timerEl = document.querySelector("#timer");
var getLiEls = document.querySelectorAll('li');



var timeLeft = 76;
var timeInterval = setInterval(function() {
    timeLeft--;
    timerEl.innerText = `time left: ${timeLeft}s`

    if(timeLeft === 0){
        clearInterval();
    }
    }, 1000);

function evaluate(){
    console.log('working')
   
}

var wrapperEl = document.querySelector('.answer-list');
var allAnswers = document.querySelectorAll('li');
    

let i = 0;

function currentPage(){
    var changeQuestion = document.querySelector('#question');
    currentQ = questions[i].title;
    currentChoices = questions[i].choices; 
    changeQuestion.innerText = currentQ;

// empties wrapper html
    wrapperEl.innerHTML = '';

 // create new li for each value in current indexed questions.choices
    currentChoices.forEach((item)=>{
    let newLi = document.createElement('li');
    newLi.innerText = item;
    // innerHTML instead of append, 
    wrapperEl.append(newLi);
    })

    

    i++
    return;
}

    // checkAnswer();

    currentPage();