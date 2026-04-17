const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
var easy=document.querySelectorAll('.easy');
const colorBoxes = document.querySelectorAll('.color-box');
const hearts= document.querySelectorAll('.heart');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');
var currentStreak = 0; //user-> track
var bestStreak = 0; // previously data fecth -> store
var pickCorrectColor = 0; // -> random color
var color = []; // -> empty array -> 6 - color store index - by - index
var num = 6; //> loop control
var wrongTries = 0; // Track wrong guesses per round
var lifelines = 3; // Number of hearts/lifelines
function webload(){ //step 3 whenever the website will load then first it will load the entire data and then it will dislay the data
    onLoad();
    setGame();
    displayCount();
}
//whenever the website will load then first it will load the entire data...
function onLoad(){   //step 1 if user has already played the game then we will fetch the data from local storage else we will set the default value...
    var temp=localStorage.getItem('highBestStreak');//we made it a function so that whenever the web loads it will fetch the data from local storage...
   if(temp!=null){
       bestStreak = parseInt(temp);///convert  string to integer
   }
   else{
         bestStreak = 0;
   }
}

//here we will define the display content message in a function format...
function displayCount(){ //step 2
    currentStreakDisplay.textContent=currentStreak;
    bestStreakDisplay.textContent=bestStreak;
} 
  
// random color generator
function colorGenerate() {   //this projet new concept //step4
    var a = Math.floor(Math.random() * 256);//to generae random number red 
    var b = Math.floor(Math.random() * 256);//green
    var c = Math.floor(Math.random() * 256);//blue
    return `rgb(${a}, ${b}, ${c})`; //to give color in rgb format to the random number
}
//step5
function generateColor(num) { // num -> 6 i = 0, colorGenerate -> rgb(122,34,56) ,, i = 1, colorGenerate
    const arr = [];
    for(var i = 0; i < num; i++){
        arr.push(colorGenerate());
    }
    return arr;
}
 function  pickGenerator(){ //step7
    const index = Math.floor(Math.random() * color.length);
    console.log(index);
    return color [index];
 }

function setGame() {//step 6
    color = generateColor(num);
    pickCorrectColor = pickGenerator();
    colorDisplay.textContent = pickCorrectColor;
    wrongTries = 0;
    lifelines = 3;
    for (var i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].style.backgroundColor = color[i];
        colorBoxes[i].disabled = false;
    }
    // Show all hearts
    var hearts = document.querySelectorAll('.heart');
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].style.display = 'inline-block';
    }
}
webload();

function winGuess(event) { //STEP9
    console.log(event.target);
    var tempbox = event.target;
    if (pickCorrectColor === tempbox.style.backgroundColor) {
        messageDisplay.textContent = "you won";
        currentStreak++;
        webload();
        currentStreakDisplay.textContent = currentStreak;
    } else {
        wrongTries++;
        lifelines--;
        // Hide a heart (lifeline) if available
        var hearts = document.querySelectorAll('.heart');
        if (hearts[lifelines]) {
            hearts[lifelines].style.display = 'none';
        }
        if (wrongTries >= 3) {
            // Disable all color buttons and hide all hearts
            for (var i = 0; i < colorBoxes.length; i++) {
                colorBoxes[i].disabled = true;
            }
            for (var i = 0; i < hearts.length; i++) {
                hearts[i].style.display = 'none';
            }
            messageDisplay.textContent = "Game Over! Start a new round.";
        } else {
            messageDisplay.textContent = "try again";
        }
    }
}



//step 8

colorBoxes.forEach((box)=>{
    box.addEventListener('click',winGuess);//if we dont add individual event listener and add event listener together then also we can track individual box 
});

resetStreakBtn.addEventListener('click', function () {
    currentStreak = 0;
    bestStreak=0;
    localStorage.clear();
    messageDisplay.textContent="Pick a color!";
    displayCount();
    setGame();

});
newRoundBtn.addEventListener('click',function(){
   currentStreakDisplay.textContent = currentStreak;
        if(currentStreak > bestStreak){
            bestStreak = currentStreak;
            localStorage.setItem('highBestStreak', bestStreak);
        }
        bestStreakDisplay.textContent = bestStreak;
        
        currentStreak=0;
        currentStreakDisplay.textContent=currentStreak;
        setGame();
    messageDisplay.textContent="Pick a color!";
   
});


easyBtn.addEventListener('click',function(){
    num=3;
    webload();
    for(var i=0;i<num;i++){
        easy[i].style.display="none";
    }

});

hardBtn.addEventListener('click',function(){
    num=6;
    webload();
    for(var i=0;i<num;i++){
        easy[i].style.display="block";
    }

});