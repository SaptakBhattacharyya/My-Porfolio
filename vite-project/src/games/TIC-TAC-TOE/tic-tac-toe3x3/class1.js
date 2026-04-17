// var a;
// a=10;
// console.log("this is the data"+a);
// console.log(typeof(a));
// a='v';
// console.log("this is the data"+a);
// console.log(typeof(a));
var player1=prompt("enter your name:");
console.log(player1);
var player2=prompt("enter your name:");
console.log(player2)
const boxes = document.querySelectorAll(".box")
let player = true;
const winner = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function checkWinner() {
    for (let data of winner) {
          const btn1=boxes[data[0]].innerHTML;
          const btn2=boxes[data[1]].innerHTML;
          const btn3=boxes[data[2]].innerHTML;

          if(btn1 !="" && btn2!=""&&btn3!=""){
            if(btn1===btn2&&btn2==btn3){
                console.log("the winner is"+player1);
                for(let box of boxes){
                    box.disabled=true;
                }
            }
          }
    }
};
boxes.forEach((box) => {
    // console.log(box.innerHTML);
    // box.innerHTML="aq"
    box.addEventListener("click", () => {
        if (player) {
            box.innerHTML = 'o';
            player = false
        }
        else {
            box.innerHTML = "x";
            player = true;
        }
        box.disabled = true;
        checkWinner()
    });

    box.style.color = "aqua";
});
