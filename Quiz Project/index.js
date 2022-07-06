const quizData = [
    {
        question: 'What is the most consumed beverage in the World?',
        a: 'Coca-Cola',
        b: 'Iced Tea',
        c: 'Water',
        d: 'Milk',
        correct: 'c'
    },
    {
        question: 'Who is the 45th president of the United States?',
        a: 'Steve Jobs',
        b: 'Barack Obama',
        c: 'Johnny Depp',
        d: 'Donald Trump',
        correct: 'd'
    },
    {
        question: 'Who is the leader in blue of the Teenage Mutant Ninja Turtles?',
        a: 'Hannah Montana',
        b: 'Leonardo',
        c: 'Rafael',
        d: 'Yoda',
        correct: 'b'
    },
    {
        question: 'What is the most used Progamming Language of 2020?',
        a: 'JavaScript',
        b: 'Java',
        c: 'HTML',
        d: 'CSS',
        correct: 'a'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hungry Turtles Making Lasagna',
        c: 'Here, There, My Location',
        d: 'Hello Theres My Lady',
        correct: 'a'
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){


    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers (){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    audio.squeak.play()

        if(answer){

            if(answer === quizData[currentQuiz].correct){
                score++;
            }

            currentQuiz++;

            if(currentQuiz < quizData.length){
                loadQuiz()
            } 
             else {
                // Show results
                quiz.innerHTML = `<h2> You answered ${score} / ${quizData.length} questions correct.</h2> <button onclick = "location.reload()"> Reload </button>`
            }
        }
});