const innerButton = document.querySelectorAll('.inner--button');
const victoryMessage = document.querySelector('.victory--message');
const resetButton = document.querySelector('.reset');
const newGameButton = document.querySelector('.newgame');


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let player1 = true;
let player2 = false;

function checkWinner() {
    for(let pattern of winPatterns){
        let pos1 = innerButton[pattern[0]].innerHTML;
        let pos2 = innerButton[pattern[1]].innerHTML;
        let pos3 = innerButton[pattern[2]].innerHTML;

        let winner = player1?'Player1':'Player2';

        if(pos1 != '',pos2 != '',pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                victoryMessage.innerHTML = `Congratulation Victory for ${winner}`; 
                innerButton.forEach((element) => {
                    element.disabled = true;
                });

            }
        }
    }
}

innerButton.forEach(element => {

    element.addEventListener('click',() => {
        if(player1){
            element.innerHTML = 'X';
            player2 = true;
            player1 = false;
            element.disabled = true;
        }
        else {
            element.innerHTML = '0';
            player2 = false;
            player1 = true;
            element.disabled = true;
        }
        checkWinner();
    });

});

resetButton.addEventListener('click', (event) => {
    event.preventDefault();

    innerButton.forEach(e => {
        e.innerHTML = '';
        e.disabled = false;
        victoryMessage.innerHTML = '';
    })
});

newGameButton.addEventListener('click', (event) => {
    event.preventDefault();

    innerButton.forEach(e => {
        e.innerHTML = '';
        e.disabled = false;
        victoryMessage.innerHTML = '';
    })
});