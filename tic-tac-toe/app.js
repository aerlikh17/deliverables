// //Constants
// const gridColor = {
//     "1" : "green",
//     "-1": "blue",
//     "null": "white"
// };

// const winCombo = [
//    [0, 1, 2],
//    [3, 4, 5],
//    [6, 7, 8],
//    [0, 4, 8],
//    [0, 3, 6],
//    [1, 4, 7],
//    [2, 4, 6],
//    [2, 5, 8],
// ];

// //Variables
// let board; //represents the squares
// let winner; //win tie or game in play
// let turn; //represents whose turn it is

// //Stored objects
// const squares = document.querySelectorAll("td");
// const message = document.querySelectorAll("h2");

// //Event listeners
// document.querySelector("table").addEventListener("click", handleMove);
// document.querySelector("button").addEventListener("click", initialize);

// //Functions

// initialize(); //resetting to empty board
// render(); //rendering the board

// function render() {
//     board.forEach(function(sq, idx) {
//         squares[idx].style.background = gridColor[sq];
//       });
//     if (winner === 'T') {
//       message.innerHTML = 'Rats, another tie!';
//     } else if (winner) {
//       message.innerHTML = `Congrats ${gridColor[winner].toUpperCase()}!`;
//     } else {
//       message.innerHTML = `${gridColor[turn].toUpperCase()}'s Turn`;
//     }
//   }

// function initialize() {
//     board = [null, null, null, null, null, null, null, null, null];    
//     turn = 1;
//     winner = null;
//     render();
//   }

// function handleMove(evt) {
//     const idx = parseInt(evt.target.id.replace('sq', ''));
//     if (board[idx] || winner) return;
//     board[idx] = turn;
//     turn *= -1;
//     winner = getWinner();
//     render();
//   }
  
//   function getWinner() {
//     for (let i = 0; i < winCombo.length; i++) {
//       if (Math.abs(board[winCombo[i][0]] + board[winCombo[i][1]] + board[winCombo[i][2]]) === 3) return board[winCombo[i][0]];
//     console.log("winner")
//     }
//     if (board.includes(null)) return null;
//     return 'T';
//   }
  

  
 