/*----- app's state (variables) -----*/
let turn, winner;
score2 = 0;
score1 = 0;
timer = 60;

/*----- constants -----*/
const player1 = document.createElement("img");
player1.src = "/style/assets/Player1.png";

const player2 = " ";

// const obj1 = document.createElement("img");
// obj1.src = "assets/Player1.png";

boardarray = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
];

/*----- cached element references -----*/

// const playSound = new Audio("PlacementAudio.mp3");
// const bkacgroundSound = new Audio("background.mp3");
let obj1 = new Image("/assets/Player1.png");
const board = document.getElementById("insideBoard");
const buttonExit = document.getElementById("buttonExit");
const buttonReset = document.getElementById("buttonReset");
const buttonMute = document.getElementById("buttonMute");

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
  // requgnize wich id was clicked
  // then replace it with a img

  document.target.innerHTML = "<img src='/style/assets/Player1.png'>";
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
