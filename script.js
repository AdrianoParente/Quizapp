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
        "question": "Wie lauten die Vornamen von Harley und Davidson?",
        "answer_1": "Tom und Jerry",
        "answer_2": "Fred und Mike",
        "answer_3": "William und Arthur",
        "answer_4": "John und Tim",
        "right_answer": 3
    },

    {
        "question": "In welchem Jahr wurde Harley Davidson gegründet?",
        "answer_1": "1954",
        "answer_2": "1903",
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
        "question": "Welchen Marktanteil hat Harley Davidson weltweit?",
        "answer_1": "25,3%",
        "answer_2": "9,1%",
        "answer_3": "36,5%",
        "answer_4": "14,9%",
        "right_answer": 2
    }

]

let currentQuestion = 0;
let numOfRightAnswers = 0;
let AUDIO_SUCCESS = new Audio('audio/411924_5121236-lq.mp3')
let AUDIO_FAIL = new Audio('audio/27881_208079-lq.mp3')
let AUDIO_START = new Audio('audio/436532_8938826-lq.mp3')

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestions();
}


/**
 * decides which screen is displayed
 */
function showQuestions() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressbar();
        updateToNextQuestion();
    }
}

/**
 * 
 * @returns boolean when game is over
 */
function gameIsOver() {
    return currentQuestion >= questions.length;
}

/**
 * shows endscreen
 */
function showEndScreen() {
    document.getElementById('card-quiz').style.display = "none";
    document.getElementById('endScreen').style.display = "flex";
    document.getElementById('numAnswers').innerHTML = questions.length;
    document.getElementById('numOfRightAnswers').innerHTML = numOfRightAnswers;
}

/**
 * updates progressbar
 */
function updateProgressbar() {
    let percent = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style = `width: ${percent}% `;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
}

/**
 * update screen to next question
 */
function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

/**
 * 
 * @param {string} selection which button is clicked
 */
function answer(selection) {
    let selectedNumber = selection.slice(-1);
    let question = questions[currentQuestion];
    let ifOfRightNumber = `answer_${question['right_answer']}`;
    document.getElementById('overlay').style.display = "flex";

    if (selectedNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        document.getElementById(selection).classList.add('card-sub-right');
        numOfRightAnswers++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(ifOfRightNumber).classList.add('bg-success');
        document.getElementById(ifOfRightNumber).classList.add('card-sub-right');
        AUDIO_FAIL.play();
    }
    document.getElementById('nextBtn').disabled = false;
}

/**
 * shows next question
 */
function nextQuestion() {
    document.getElementById('overlay').style.display = "none";
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    resetAnswers();
    showQuestions();
}

/**
 * reset the answers
 */
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

/**
 * display the startscreen
 */
function startQuiz() {
    AUDIO_START.play();
    document.getElementById('card-quiz').style.display = "flex";
    document.getElementById('card-start').style.display = "none";
}

/**
 * restart the game
 */
function restart() {
    document.getElementById('endScreen').style.display = "none";
    document.getElementById('card-quiz').style.display = "flex";
    currentQuestion = 0;
    numOfRightAnswers = 0;
    init();
}