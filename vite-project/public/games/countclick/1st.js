
var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highscore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');
var pauseButton = document.querySelector('#pauseButton');
var resumeButton = document.querySelector('#resumeButton');



var current = 0;
var high = 0;
var timer1 = 10;
var flag = false;
var timeId = null;
var isPaused = false;


function onWebsite(){
  loadData();
  displayContent();
  
  resumeButton.style.display = 'none';
}
function loadData(){
  var temp = localStorage.getItem('highScore');
  if(temp != null){
    high=temp;
  }
  else{
    high=0;
  }
}

function displayContent(){
  currentScore.textContent=current;
  highScore.textContent=high;
  timer.textContent=timer1;
}

function statusMsg(msg){
  statusMessage.textContent=msg;
}

function endGame(){
  clearInterval(timeId);
  flag= false;
  clickButton.disabled=true;
  if(current>high){
    localStorage.setItem('highScore',current);
    highScore.textContent=current; 
    statusMsg("Scored High");
  }
  else{
    statusMsg(`Your current score is ${current}`);
  }
}
function startGame(){
  current = 0; 
  timer1 = 10; 
  clickButton.disabled=false;
  clickButton.style.backgroundColor='red';
  flag=true;
  isPaused = false;
  pauseButton.style.display = 'inline-block';
  resumeButton.style.display = 'none';
  statusMsg("Game Begins");
  displayContent(); 
  if (timeId) clearInterval(timeId); 
  timeId=setInterval(function(){
      if (!isPaused) {
          timer1--;
          displayContent();
          if(timer1<=0){
              endGame();
          }
      }
    },1000);


}

function userClick(){
  if(flag){
    current++;
    displayContent();
  }
}



startButton.addEventListener('click', startGame);

clickButton.addEventListener('click', userClick);

pauseButton.addEventListener('click', function() {
    isPaused = true;
    clickButton.disabled = true;
    pauseButton.style.display = 'none';
    resumeButton.style.display = 'inline-block';
    statusMsg("Game Paused");
});

resumeButton.addEventListener('click', function() {
    isPaused = false;
    clickButton.disabled = false;
    pauseButton.style.display = 'inline-block';
    resumeButton.style.display = 'none';
    statusMsg("Game Resumed");
});

var resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function() {
    localStorage.removeItem('highScore');
    high = 0;
    displayContent();
    statusMsg("High score has been reset!");
});

onWebsite();