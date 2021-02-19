/*----- app's state (variables) -----*/

scoreplayer2 = 0;
scoreplayer1 = 0;
timer = 60;

/*----- constants -----*/
// const player1 = {
//   color: red,
// };
//
// const player2 = {
//   color: yellow,
// };

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
const board = document.getElementById("insideBoard");
// const obj1 = new image("assets/Player1.png");

/*----- event listeners -----*/

// eventlistner.muteButton;
// eventlistner.resetButton;
// eventlistner.exitButton;
document
  .getElementById("insideBoard")
  .addEventListener("click", console.log(" the board have been clicked"));

/*----- functions -----*/
