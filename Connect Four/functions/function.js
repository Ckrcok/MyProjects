/*----- app's state (variables) -----*/
let playerTurn, winner;
score2 = 0;
score1 = 0;
timer = 60;

/*----- constants -----*/
const player1 = document.createElement("img");
player1.classList.add("img");
player1.src = "/style/assets/Player1.png";

const player2 = " ";

// const obj1 = document.createElement("img");
// obj1.src = "assets/Player1.png";

let boardarray = [
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

/*----- cached element references -----*/

// const playSound = new Audio("PlacementAudio.mp3");
// const bkacgroundSound = new Audio("background.mp3");
let obj1 = new Image("/assets/Player1.png");
const board = document.getElementById("insideBoard");
const buttonExit = document.getElementById("buttonExit");
const buttonReset = document.getElementById("buttonReset");
const buttonMute = document.getElementById("buttonMute");
let tr = document.querySelectorAll("tr");

let td = document.querySelectorAll("td");
// const obj1 = new image("assets/Player1.png");

/*----- event listeners -----*/
board.addEventListener("click", click);
buttonExit.addEventListener("click", exit);
buttonReset.addEventListener("click", reset);
buttonMute.addEventListener("click", mute);
/*----- functions -----*/

function click(e) {
  console.log("Clicked the " + event.target.id);
  innerHTML = "<img src='/style/assets/Player1.png'>";

  if (playerTurn == 1) {
  }

  let x_from_id = event.target.id[0];
  let y_from_id = event.target.id[1];

  boardarray[x_from_id][y_from_id] = playerTurn;
}

function exit(e) {
  console.log("Exit");
}

function mute(e) {
  console.log("Mute");
}

function reset(e) {
  console.log("Reset");
}

// for (let row = 0; row < 6; row++) {
//   for (let col = 0; col < 7; col++) {
//     // tr[col].setAttribute("id", String(col));
//     td[row + col].setAttribute("id", String(row) + String(col));
//     console.log(td[row + col].innerHTML);
//
//     // td[row + col].innerHTML = row;
//   }
// }

for (let i = 0; i < td.length; i++) {
  let col = i % 7;
  let row = Math.floor(i / 7);
  td[i].id = row + "" + col;
  td[i].innerHTML = row + "" + col;
}
// Aidan Way
// let board = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 3, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 2, 0, 0, 0, 1, 0],
// ];
// let DOMboard = document.getElementById("board");
// board.forEach((r, index1) => {
//   let row = document.createElement("div");
//   row.className = "row";
//   row.id = `r${x}`;
//   r.forEach((c, index2) => {
//     let cell = document.createElement("div");
//     cell.className = "cell";
//     cell.innerText = `c${x}${y}`;
//     cell.id = `c${x}${y}`;
//     console.log(cell);
//     row.appendChild(cell);
//   });
//   DOMboard.appendChild(row);
// });

function render() {
  setTimeout(render, 1000);
  console.log("Drawing...");
  // document.getElementById("0").boardarray
  if (boardarray[i] == 1) {
    document.getElementById(event.target.id).innerHTML =
      "<img class='img' src='/style/assets/Player1.png'>";
  } else if (boardarray[i][j] == -1) {
    document.getElementById(event.target.id).innerHTML =
      "<img class='img' src='/style/assets/Player2.png'>";
  }
}

// render();
