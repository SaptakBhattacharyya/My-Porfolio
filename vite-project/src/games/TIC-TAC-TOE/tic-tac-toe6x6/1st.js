const boxes = document.querySelectorAll(".box")
let player = true;
const winner = [
    [0, 6, 12, 18, 24, 30],
    [1, 7, 13, 19, 25, 31],
    [2, 8, 14, 20, 26, 32],
    [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34],
    [5, 11, 17, 23, 29, 35],
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],
    [0, 7, 14, 21, 28, 35],
    [5, 10, 15, 20, 25, 30],

];
function loadState() {
    const savedBoard = JSON.parse(localStorage.getItem('board6x6') || 'null');
    const savedPlayer = localStorage.getItem('player6x6');

    if (Array.isArray(savedBoard) && savedBoard.length === boxes.length) {
        savedBoard.forEach((val, idx) => {
            boxes[idx].innerHTML = val || '';
            boxes[idx].disabled = !!val;
        });
    }
    if (savedPlayer !== null) player = (savedPlayer === 'true');
}

function saveState() {
    const board = Array.from(boxes).map(b => b.innerHTML || '');
    localStorage.setItem('board6x6', JSON.stringify(board));
    localStorage.setItem('player6x6', String(player));
}

function resetGame() {
    localStorage.removeItem('board6x6');
    localStorage.removeItem('player6x6');
    boxes.forEach(b => {
        b.innerHTML = '';
        b.disabled = false;
    });
    player = true;
}

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.addEventListener('click', () => {
    resetGame();
});
document.body.appendChild(resetBtn);

loadState();

function checkWinner() {
    for (let data of winner) {
        const btn1 = boxes[data[0]].innerHTML;
        const btn2 = boxes[data[1]].innerHTML;
        const btn3 = boxes[data[2]].innerHTML;
        const btn4 = boxes[data[3]].innerHTML;
        const btn5 = boxes[data[4]].innerHTML;
        const btn6 = boxes[data[5]].innerHTML;

        if (btn1 != "" && btn2 != "" && btn3 != "" && btn4 != "" && btn5 != "" && btn6 != "") {
            if (btn1 === btn2 && btn2 == btn3 && btn3 == btn4 && btn4 == btn5 && btn5 == btn6) {
                console.log("the winner is" + btn1);
                for (let box of boxes) {
                    box.disabled = true;
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
