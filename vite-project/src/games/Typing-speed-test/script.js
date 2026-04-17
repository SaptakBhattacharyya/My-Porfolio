// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn'); 

// Test texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state
let currentText = '';
let timeLeft = 60;
let timeInterval = null;
let startTime = null;
let isTestActive = false; 
let bestWPM = 0;
let wpm = 0; 


function webLoad() {
    onLoad();
    displayContent();
    typingArea.disabled = true; 
}

function onLoad() {
   
    const temp = sessionStorage.getItem('typingTestBestWPM');
    if (temp != null) {
        bestWPM = parseInt(temp);
    } else {
        bestWPM = 0;
    }
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}


webLoad();



function startGame() {
    resetGame();
    isTestActive = true;
    startBtn.disabled = true;
    
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.innerHTML = ''; 
    highlight(); 
    
    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder', 'Start typing...');

    startTime = null;

    timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
          
            clearInterval(timeInterval);
            endGame();
        }
        displayContent();
    }, 1000);
}

function endGame() {
    isTestActive = false;
    clearInterval(timeInterval);
    startBtn.disabled = false;

    typingArea.disabled = true; 

    if (wpm > bestWPM) {
        bestWPM = wpm;
   
        sessionStorage.setItem('typingTestBestWPM', bestWPM);
        alert(`New High Score! Your score is: ${wpm} WPM`);
    } else {
   
        alert(`Your score is: ${wpm} WPM`);
    }
    
 
    wpmDisplay.textContent = wpm; 
    displayContent(); 
}

function resetGame() {
    clearInterval(timeInterval);
    timeLeft = 60;
    wpm = 0;
    currentText = '';
    startTime = null;
    isTestActive = false;
    
    textDisplay.textContent = "Click 'Start' to begin.";
    typingArea.value = "";
    typingArea.disabled = true;
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = 0;
    startBtn.disabled = false;
    
    displayContent();
}



function typeControl() {
    currentText.style.cursor=none;
    if (startTime == null) {
        startTime = Date.now();
    }
    if (typingArea.value === currentText && timeLeft > 0) {
        const newbankai = testTexts(Math.floor(Math.random() * testTexts.length));
        currentText += " " + newbankai;
    }

    updateStatus();
    highlight();
}

function updateStatus() {
    const typed = typingArea.value;
    

    const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;
    const word = typed.trim().split(/\s+/).filter(w => w.length > 0);

    wpm = (elapsedMinutes > 0) ? Math.round(word.length / elapsedMinutes) : 0;
    wpmDisplay.textContent = wpm;

   
    let correctScore = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === currentText[i]) {
            correctScore++;
        }
    }
    const accuracy = (typed.length > 0) ? Math.floor((correctScore / typed.length) * 100) : 0;
    accuracyDisplay.textContent = accuracy;
}

function highlight() {
    const typed = typingArea.value;
    let highText = '';
    
 
    for (let i = 0; i < currentText.length; i++) {
       
        if (i < typed.length) {
      
            if (currentText[i] === typed[i]) {
                highText += `<span class="correct">${currentText[i]}</span>`;
            } else {
                highText += `<span class="incorrect">${currentText[i]}</span>`;
            }
        } else {
        
            highText += `<span>${currentText[i]}</span>`;
        }
    }
    textDisplay.innerHTML = highText;
}


startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', typeControl);


if (resetBtn) {
    resetBtn.addEventListener('click', resetGame);
}