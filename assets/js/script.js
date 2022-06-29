// Pseudo code
// 

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
        title: 'the following symbols are known as... "&&", "||", "===", "<", etc.', 
        choices: ['computer operators', 'methods', 'comparative operators', 'computer science'], 
        answer: 'comparative operators'
    }
];

var score = 0;
var questionIndex = 0;

var quizTimer = document.getElementById("timer");







document.getElementById("start").addEventListener("click", startQuiz)