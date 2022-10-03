// Constants
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

// Cached elements
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const restartBtn = document.querySelector("#restartBtn");

 // Variables
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

// Functions

//First, we need to initiliaze the game by calling initialize() function
initialize();

//First, we add an event listener to every cell which is a "click". Our callback is function cellClicked. 
//Then, we add an event listener to our button and we callback restartGame function.
//Finally, third line is for the message and we are checking if game is running;

function initialize(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

//This function is what happens when the cell is clicked on;
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex"); //First, we create a local variable cellIndex. "This" refers to whatever cell that's been clicked on.
    // getAttribute is using "cellIndex" to get cell's index. 
    if(options[cellIndex] != "" || !running){
        return; // nothing will happen
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer; 
}

function changePlayer(){
    currentPlayer = (currentPlayer === "X") ? "O" : "X"; //if current player is X, we will reassign to O. Otherwise, X. 
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]]; //we are iterating over const winConditions array, there are 3 indices in each array;
        const cellB = options[condition[1]]; //if there are no spaces, and they are all the same character, somebody won.
        const cellC = options[condition[2]];

        if(cellA === "" || cellB === "" || cellC === ""){ //if there are no empty spaces, we continue iterating through arrays.
            continue;
        }
        if(cellA === cellB && cellB === cellC){ //making sure all the full spaces are the same character.
            roundWon = true;
            break;
        }
    }

    if(roundWon){ //if roundWon = true;
        statusText.textContent = `Player ${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){ //if there are no spaces left, it is a draw.
        statusText.textContent = `Draw! Press "PLAY" to play again`;
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
