const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

let currentQuestion = 0;
let score = 0;

//÷,≠,≈,>,<,≥,≤,A⋂B,A⋃B,A⊆B,A⊂B,A⊄B,A⊇B,A⊃B,A⊅B,
let questions = [
   {
       question: "1.What number should be added to -3/4 to get -5/14?",
       answers: [
           {option: "1/6", answer: true},
           {option: "1/4", answer: false},
       ]
   },
   {
       question: "2.Simplify 3/5+7/6+(-2/3)+(-7/10).",
       answers: [
           {option: "3/5", answer: false},
           {option: "2/5", answer: true},
       ]
   },
   {
       question: "3.-2 is reciprocal of......",
       answers: [
           {option: "-2/1", answer: false},
           {option: "-1/2", answer: true},
       ]
   },
   {
    question: "4.By what number should -5/3 be divided to get 20/21?",
    answers: [
        {option: "7/4", answer: false},
        {option: "-7/4", answer: true},
    ]
},
{
    question: "5.Fill in the blank. ..... ÷2/3=-7/12.",
    answers: [
        {option: "6/4", answer: false},
        {option: "-7/18", answer: true},
    ]
},
{
    question: "6.By what rational number should -8/25 be divided to get 3/10?.",
    answers: [
        {option: "11/15", answer: false},
        {option: "-16/15", answer: true},
    ]
},
{
    question: "7.Fill in blank 8/27 ÷ .... =-4/9.",
    answers: [
        {option: "-2/3", answer: true},
        {option: "1/2", answer: false},
    ]
},
{
    question: "8.Find the cost of 6 3/10 meter of cloth at the rate of rupees 62 1/2 per metre?.",
    answers: [
        {option: "39 2/4", answer: false},
        {option: "393 3/4", answer: true},
    ]
},
{
    question: "9.Ravi was asked to multiply a rational number by 2/3.By mistake he multiplied the rational number by 2/9.<br>His answer was -3 1/5 more tnan the answer.Find the rational Number",
    answers: [
        {option: "-2/3", answer: true},
        {option: "1/2", answer: false},
    ]
},
{
    question: "10.25 men working 8 hours a day do a job in 63 days.<br>how long would 45 men take to finish the job,working 7 hours a day?.",
    answers: [
        {option: "39 2/4", answer: false},
        {option: "393 3/4", answer: true},
    ]
},

]

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 9) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 9) {
            next();
        }
    }
  
    prevBtn.classList.add("hide");
 }
  
 beginQuiz();

 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }
 function next() {
    currentQuestion++;
    if(currentQuestion >= 9) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 9) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 9) {
            next();
        }
    }
  
    prevBtn.classList.remove("hide");
 }

 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 9) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 9) {
            next();
        }
    }
  
    nextBtn.classList.remove("hide");
 }

 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
 }