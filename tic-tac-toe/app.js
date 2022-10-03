
// // Constants

// // Winning combos
// const winningCombo = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// // Variables
// let board = ['', '', '', '', '', '', '', '', '']; //an array of placeholders;
// let currentPlayer = "X"; //checks who the current player is;
// let gameRunning = false; //checks if the game is running;

// // Cached elements

// const squares = document.querySelectorAll('.square');
// const startButton = document.querySelector('#start-game');
// const message = document.querySelector('#game-status');

// // Functions

// initialize();


// function initialize() {
//     squares.forEach(square => square.addEventListener('click', squareClicked));
//     startButton.addEventListener('click', restartGame);
//     message.textContent = `${currentPlayer}'s turn`;
//     gameRunning = true;

// }

// function squareClicked() {
//    const squareIndex = this.getAttribute('.square');
//    if(board[squareIndex] != '' || !gameRunning){ 
//     return;
//     // if the square is empty or the game is not running, the function will update cell and get winner;
//    }
//    render(this, squareIndex);
//    getWinner();
// }

// function render(square, index) {
//    board[index] - currentPlayer;
//    square.textContent = currentPlayer;
// }

// function changePlayer() {
//    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
//    message.textContent = `${currentPlayer}'s turn`;
// }

// function getWinner(){
//     let roundWon = false;

//     for(let i = 0; i < winningCombo.length; i++){
//         const condition = winningCombo[i];
//         const cellA = board[condition[0]];
//         const cellB = board[condition[1]];
//         const cellC = board[condition[2]];

//         if(cellA == "" || cellB == "" || cellC == ""){
//             continue;
//         }
//         if(cellA == cellB && cellB == cellC){
//             roundWon = true;
//             break;
//         }
//     }

//     if(roundWon){
//         message.textContent = `${currentPlayer} wins!`;
//         gameRunning = false;
//     }
//     else if(!board.includes("")){
//         message.textContent = `Draw!`;
//         gameRunning = false;
//     }
//     else{
//         changePlayer();
//     }
// }
// function restartGame(){
//     currentPlayer = 'X';
//     board = ['', '', '', '', '', '', '', '', ''];
//     message.textContent = `${currentPlayer}'s turn`;
//     squares.forEach(cell => cell.textContent = "");
//     gameRunning = true;
// }


// Constants

// Winning combos
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

 // Variables
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

// Cached elements

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
