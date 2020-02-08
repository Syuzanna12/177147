import { BOARD_DIMENSIONS } from "../src/constants";
import { Cell } from "./cell";
import { Cube } from "./cube";

export class Board extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);

    this._cells = [];
    this._buildBoard();
  }

  _buildBoard() {
    const gap = 5;
    for (let col = 0; col < BOARD_DIMENSIONS.width; col++) {
      const column = [];

      for (let row = 0; row < BOARD_DIMENSIONS.height; row++) {
        const cell = new Cell(this.scene, row, col);
        this.add(cell);
        column.push(cell);
        const { width, height } = cell;
        cell.setPosition(
          col * (width + gap) + width / 2,
          row * (height + gap) + height / 2
        );
      }

      this._cells.push(column);
      const cube = new Cube(this.scene);
      this._cells[0][0].addCube(cube);
    }
  }
}
