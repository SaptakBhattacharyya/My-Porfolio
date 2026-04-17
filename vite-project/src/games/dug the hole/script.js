// 🎯 DOM Elements
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');

console.log(holes);


let score = 0;
let time = 30;
let bestScore = 0;
let playGame = false;
let gameId = null;


let audio = new Audio('https://memes.co.in/meme-templates/video/767/7-crore-meme-video-download-from-kbc');

//call on evry game start
function webLoad() {
    onLoad();
    displayContent();

}

function onLoad() {

    var temp = localStorage.getItem('highScoreGame');

    if (temp !== null) {
        bestScore = parseInt(temp);
    } else {
        bestScore = 0;
    }
}

// displaying content to user

function displayContent() {
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
}

webLoad();

function randomIndex() {
    var index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

//Random time generator implementation
function randomTimeGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + max);
}
// random index which will return the distinct element

// pop game implementaion for image appear and disapp
function popImageGame() {
    if (time <= 0) {
        return;
    }
    var randomTime = randomTimeGenerator(500, 1500);
    var hole = randomIndex();
    var mole = hole.querySelector('.mole');
    if (playGame) {
        mole.classList.add('up');
        setTimeout(function () {
            mole.classList.remove('up');
            popImageGame(); //recursion type ka hogya bar bar chlega fir nya randomtime nya hole;
        }, randomTime);
    }
}


//end game function implementation

function endGame() {
    clearInterval(gameId);
    playGame = false;
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('highScoreGame', bestScore);
        alert("your score is higher  than the previous score " + bestScore);
        maxScoreDisplay.textContent = bestScore; // update best score display immediately
       
    } else {
        alert("Your score is " + score);
    }
audio.play();
    score = 0;
    time = 30;
    displayContent();
    startBtn.disabled = false;
}




// ACTUAL IMPLEMENTATION OF START GAME FUNCTION
function startGame() {
    startBtn.disabled = true;
    playGame = true;
    popImageGame();
    // disabled -> true which means button is disabled.....
    gameId = setInterval(function () {
        time--;
        if (time === 0) {
            clearInterval(gameId);
            playGame = false;
            // This method is used only to stop the setInterva
            endGame();
        }
        displayContent();
    }, 1000);
}



//ADD EVENT LISTENER PART
startBtn.addEventListener('click', startGame);
function bonk(event) {
    if (playGame == false) return;
    if (event.target.classList.contains('up')) {
        score++;
        event.target.classList.remove('up');
        event.target.classList.add('bonked');
    }
    setTimeout(function () {
        event.target.classList.remove('bonked');
    }, 200);
    displayContent();
}

//this is just a normal loop to apply the add event listener in each mle class element
moles.forEach((mole) => {
    mole.addEventListener('click', bonk);
});


// PAUSE, RESUME, RESET BUTTON 
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const resetBtn = document.getElementById('resetBtn');

let paused = false;
let savedTime = null;
let savedScore = null;
let savedGameId = null;

pauseBtn.addEventListener('click', function () {
    // if (playGame && !paused) {
    //     paused = true;
    //     clearInterval(gameId);
    //     savedTime = time;
    //     savedScore = score;
    //     savedGameId = gameId;
    //     pauseBtn.disabled = true;
    //     resumeBtn.disabled = false;
    // }
    clearInterval(gameId);
    playGame = false;
    resumeBtn.disabled = false;
});

resumeBtn.addEventListener('click', function () {
    playGame = true;
    popImageGame();
    gameId = setInterval(function () {
        time--;
        if (time === 0) {
            endGame();
        }
        displayContent();
    }, 1000);
});

resetBtn.addEventListener('click', function () {
    clearInterval(gameId);
    playGame = false;
    localStorage.clear();
    score = 0;
    time = 30;
    bestScore = 0;
    displayContent();
});

resumeBtn.disabled = true;