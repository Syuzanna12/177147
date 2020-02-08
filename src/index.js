import Phaser from "phaser";
import { Game } from "./game";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  hight: 400,
  width: 1350,
  scene: []
};

const game = new Game(config);
