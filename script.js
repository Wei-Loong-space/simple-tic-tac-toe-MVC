const playerTitle = document.querySelector(".player-title");
const grids = [...document.querySelectorAll(".single-grid")];
const board = document.querySelector(".grid-container");
grids.forEach(grid => {
  grid.addEventListener("click", function () {
    handleClick(grid);
  });
});

const restartBtn = document.querySelector(".restart-btn");
const gameBoard = document.querySelector(".game-board");
const winningConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

//State
let isPlayerTurn = true;
let playerScore = [];
let player2Score = [];

function handleClick(grid) {
  if (isPlayerTurn) {
    grid.classList.add("circle");
    playerScore.push(parseInt(grid.dataset.grid));
    validate(playerScore, "Player 1");
  } else {
    grid.classList.add("cross");
    player2Score.push(parseInt(grid.dataset.grid));
    validate(player2Score, "Player 2");
  }
  playerTitle.classList.toggle("badge-danger");
  isPlayerTurn = !isPlayerTurn;
  playerTitle.textContent = isPlayerTurn ? "Player 1" : "Player 2";
}

function validate(scoreArr, player) {
  const checkWin = winningConditions.find(combo =>
    combo.every(element => scoreArr.includes(element))
  );
  if (checkWin) {
    announceWinner(player);
    toggleWinningTheme(checkWin);
    stopGame();
    return;
  }

  if (playerScore.length + player2Score.length === 9) {
    announceWinner();
    stopGame();
  }
}

function stopGame() {
  board.classList.add("grid-container-disable");
}
function announceWinner(player = undefined) {
  const createAlert = document.createElement("div");
  createAlert.classList.add("alert", "alert-info");
  createAlert.textContent = !player ? "Draw!" : `${player} wins!`;
  gameBoard.append(createAlert);
}

function toggleWinningTheme(winningGrid) {
  winningGrid.forEach(grid => {
    const winGrid = document.querySelector(`.single-grid-${grid}`);
    winGrid.classList.add("winning-bg");
  });
}
restartBtn.addEventListener("click", () => {
  isPlayerTurn = true;
  playerScore = [];
  player2Score = [];
  playerTitle.classList.remove("badge-danger");
  playerTitle.textContent = "Player 1";
  board.classList.remove("grid-container-disable");
  if (document.querySelector(".alert")) {
    gameBoard.removeChild(document.querySelector(".alert"));
  }
  grids.forEach(grid => {
    grid.classList.remove("cross", "circle", "winning-bg");
  });
});



