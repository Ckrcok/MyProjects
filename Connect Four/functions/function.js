/*----- constants -----*/
const player1 = {
  color: red,
};

const player2 = {
  color: yellow,
};

boardarray = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
];

/*----- app's state (variables) -----*/

scoreplayer1 = 0;
scoreplayer2 = 0;
timer = 60;

/*----- cached element references -----*/

const playSound = new Audio("PlacementAudio.mp3");
const bkacgroundSound = new Audio("background.mp3");
const board = document.querySelectorAll(boardarry);
const player1obj = document.getElementById("player1");
const player2objt = document.getElementById("player2");
const obj1 = new image("assets/Player1.png");
/*----- event listeners -----*/

eventlistner.muteButton;
eventlistner.resetButton;
eventlistner.exitButton;
eventlistner.board;

/*----- functions -----*/
