let questions = [

    {
        "question": "In welcher Stadt wurde Harley Davidson gegründet?",
        "answer_1": "Milwaukee",
        "answer_2": "Alabama",
        "answer_3": "New York",
        "answer_4": "San Francisco",
        "right_answer": 1
    },

    {
        "question": "Für was stehen die Buchstaben der Firma KTM?",
        "answer_1": "Kloster, Tauber, Maintal",
        "answer_2": "Kälte, Teer, Matsch",
        "answer_3": "Kippschalter, Trennscheibe, Magnet",
        "answer_4": "Kronreif, Trunkenpolz, Mattighofen",
        "right_answer": 4
    },

    {
        "question": "In welchem Jahr wurde Harley Davidson gegründet?",
        "answer_1": "1954",
        "answer_2": "1901",
        "answer_3": "1936",
        "answer_4": "1876",
        "right_answer": 2
    },

    {
        "question": "Welches Modell von Harley Davidson hat den größten Hubraum?",
        "answer_1": "Sportster 883",
        "answer_2": "Sportster 1200",
        "answer_3": "Fat Boy",
        "answer_4": "Fat Bob",
        "right_answer": 3
    },

    {
        "question": "Aus welchem Land stammt die Firma Piaggio?",
        "answer_1": "Spanien",
        "answer_2": "Italien",
        "answer_3": "Holland",
        "answer_4": "Griechenland",
        "right_answer": 2
    }

]
let currentQuestion = 0;

function init() {
    document.getElementById('card-quiz').style.display = "none";
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestions();

}



function showQuestions() {

    if (currentQuestion >= questions.length) {

    } else {
        let question = questions[currentQuestion];
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('allQuestions').innerHTML = questions.length;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let selectedNumber = selection.slice(-1);
    let question = questions[currentQuestion];
    let ifOfRightNumber = `answer_${question['right_answer']}`;

    if (selectedNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        document.getElementById(selection).classList.add('card-sub-right');

    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(ifOfRightNumber).classList.add('bg-success');
        document.getElementById(ifOfRightNumber).classList.add('card-sub-right');


    }
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    resetAnswers();
    showQuestions();
}

function resetAnswers() {
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_1').classList.remove('card-sub-right');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('card-sub-right');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('card-sub-right');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('card-sub-right');
}
function startQuiz(){
    document.getElementById('card-quiz').style.display = "flex";
    document.getElementById('card-start').style.display = "none";
}