//array of the object
const quizData = [
    {
        question: "Choose the correct HTML element for the largest heading?",
        a: "h6",
        b: "<heading>",
        c: "head",
        d: "<h1>",
        correct: "d",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<script>",
        c: "<scripting>",
        d: "<javascript>",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Home Tool Makeup Language",
        c: "Hyperlink and Text Markup Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
//fuction to load questions from array quizdata
function loadQuiz() {
    deselectAnswers();       //when ever we load quiz it should not be selected for item (radiobutton)

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {                    //to check which element of radio button is selected by user
    let answer = undefined;                 //initially answer will be undefined 

    answerEls.forEach((answerEl) => {      //checks each and every item being selected ornot using foreach loop
        if (answerEl.checked) {
            answer = answerEl.id;            //storing selected item id into answer variable
        }
    });

    return answer;
}
//to deselect radio button for next question
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});