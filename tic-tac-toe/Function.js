/*game flow
1 - when the game starts is always Player 1 who plays
2 - The border around the Player 1 in the scoreboard highlights and the player 2's gets hidden
3 - Player 1 picks a square (td) and then the dash symbol will change to X
4 - Player 2's scoreboard highlights and player 1's gets hidden
5 - PLayer 2 select a square and its element is set to 0. If a square has already been selected, player is notified via alert message and can select another one
6 - Player 1 picks a square (td) and then the dash symbol will change to X, and same restriction applies where PLayer 1 cannot change its previous nor change PLayer 2's selection
7 - When a winning combination happens, the winner is displayed and a new round is started
8 - The new round starts with Player 2 and follows the same flow as above.
9 - Tie is only declared at the end of all 9 moves if a winner is not declared.
10 - Reset button has dual functionality where clicking once resets the current round and twice resets the whole game
*/

/*-------------- app's state (variables) --------------*/
let turn, winner;
let clickCount = 0;
let score1 = 0;
let score2 = 0;

/*-------------- constants --------------*/
const Player1 = "X";
const Player2 = "O";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*-------------- cached element references --------------*/
const playSound = new Audio(
  "https://www.myinstants.com/media/sounds/discord-notification.mp3"
);
const resetSound = new Audio(
  "https://www.myinstants.com/media/sounds/discord-leave.mp3"
);
const squares = document.querySelectorAll("#game td"); //[td#square0, td#square1, td#square2, td#square3, td#square4, td#square5, td#square6, td#square7, td#square8]
const player1Obj = document.getElementById("Score1");
const player2Obj = document.getElementById("Score2");

/*-------------- Event listeners --------------*/
document.querySelector("#game").addEventListener("click", placeMove);
document.querySelector("button").addEventListener("click", reset);

/*-------------- Functions --------------*/
//Function to reset the game
function reset() {
  init();
  score1 = 0;
  score2 = 0;
}

//Function to initilize all variables, attributes, clear the html elements, and re-initilize the game after the 3rd match
function init() {
  clickCount = 0;
  turn = Player1;
  winner = null;
  clearTable();
  document.getElementById("Score1").innerHTML = "Player 1: " + score1;
  document.getElementById("Score2").innerHTML = "Player 2: " + score2;
  player1Obj.setAttribute("class", "playerClassOn");
  player2Obj.setAttribute("class", null);
  if (score1 === 3) {
    alert("Player 1 wins the match");
    score1 = 0;
    score2 = 0;
    init();
  }
  if (score2 === 3) {
    alert("Player 2 wins the match");
    score1 = 0;
    score2 = 0;
    init();
  }
}

//Function applies the element X or 0 to the container after a player places a move. If the selection is on an existing selection,
//it alerts the user and also allow the user to play again
function placeMove(event) {
  //get index of the square
  const idSquare = parseInt(event.target.id.replace("square", ""));
  if (
    squares[idSquare].innerHTML === Player1 ||
    squares[idSquare].innerHTML === Player2
  ) {
    alert("this spot has already been selected, please select another one");
  } else if (turn === Player1) {
    playSound.play();
    squares[idSquare].innerHTML = Player1;
    turn = Player2;
    clickCount++;
    player2Obj.classList.toggle("playerClassOn");
    player1Obj.classList.toggle("playerClassOn");
    checkWinner();
  } else if (turn === Player2) {
    playSound.play();
    squares[idSquare].innerHTML = Player2;
    turn = Player1;
    player1Obj.classList.toggle("playerClassOn");
    player2Obj.classList.toggle("playerClassOn");
    clickCount++;
    checkWinner();
  }
}

//Function checks for a winner after a move is made, if at the end of the 9 moves a winner is not declared, it returns a tie as an alert and reset the game
function checkWinner() {
  for (x = 0; x < 9; x++) {
    if (
      squares[winningCombos[x][0]].innerHTML === Player1 &&
      squares[winningCombos[x][1]].innerHTML === Player1 &&
      squares[winningCombos[x][2]].innerHTML === Player1
    ) {
      winner = Player1;
      score1++;
      alert("Player 1 won");
      init();
    } else if (
      squares[winningCombos[x][0]].innerHTML === Player2 &&
      squares[winningCombos[x][1]].innerHTML === Player2 &&
      squares[winningCombos[x][2]].innerHTML === Player2
    ) {
      winner = Player2;
      score2++;
      alert("Player 2 won");
      init();
    } else if (clickCount == 9) {
      alert("game is a tie");
      init();
    }
  }
}

//when init() is called, it also trigger the clearTable() function to set the elements to dash
function clearTable() {
  resetSound.play();
  square0.textContent = "-";
  square1.textContent = "-";
  square2.textContent = "-";
  square3.textContent = "-";
  square4.textContent = "-";
  square5.textContent = "-";
  square6.textContent = "-";
  square7.textContent = "-";
  square8.textContent = "-";
}

init();
