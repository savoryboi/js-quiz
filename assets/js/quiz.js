
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

// var score = 0;
// let seconds = 75;
// let milliseconds = 00;
// var activeTime = (`${seconds}:${milliseconds});



var totalTime = document.getElementById("seconds");
var startButton = document.getElementById("start");

function startQuiz(){
    var wrapperEl = document.querySelector('.answer-list');


    for(var i = 0; i < questions.length; i++) {
        var changeQuestion = document.querySelector('#question');
        currentQ = questions[i].title;
        currentChoices = questions[i].choices; 
        changeQuestion.innerText = currentQ;

        // create new li for each value in current indexed questions.choices
        currentChoices.forEach((item)=>{
            let newLi = document.createElement('li');
            newLi.innerText = item;
            wrapperEl.append(newLi);
        })

 

       return;
    }  

    console.log(currentOptions);
}

startQuiz();