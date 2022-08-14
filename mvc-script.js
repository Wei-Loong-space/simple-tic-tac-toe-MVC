class Model {
  constructor() {
    this.isPlayerTurn = true;
    this.playerScore = [];
    this.computerScore = [];
    this.winningCondition = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
  }
  changeTurn() {
    this.isPlayerTurn = false;
  }
  updatePlayerScore(score) {
    console.log("updatePlayerScore!");
    // this.playerScore.push(parseInt(score));
  }
  updateComputerScore(score) {
    console.log("updatePlayerScore!");
    // this.computerScore.push(parseInt(score));
  }
  validateScore(score, player) {}
  stopGame() {}
}

class View {
  constructor() {
    this.playerTitle = document.querySelector(".player-title");
    this.board = document.querySelector(".grid-container");
    this.grids = [...document.querySelectorAll(".single-grid")];
  }
  render() {}
  getPlayerTitle() {}
  bindHandleClick(handler) {
    this.grids.forEach(grid => {
      grid.addEventListener("click", () => {
        handler(grid);
      });
    });
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindHandleClick(this.handleClick);
  }

  handleClick(grid) {
    console.log("nice!", this);
    // if (this.model.isPlayerTurn) {
    // this.model.updatePlayerScore(grid);
    // } else {
    // this.model.updateComputerScore(grid);
    // }
  }
}

const app = new Controller(new Model(), new View());
