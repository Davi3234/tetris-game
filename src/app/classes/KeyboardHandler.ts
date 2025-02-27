import { GameRules } from "./rules/GameRules";

export class KeyboardHandler {
  gameRules: GameRules;

  constructor(gameRules: GameRules) {
    this.gameRules = gameRules;
    this.addKeyListeners();
  }

  addKeyListeners() {
    document.addEventListener('keydown', (event: KeyboardEvent) => this.handleKeyPress(event));
  }

  handleKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowLeft":
        this.gameRules.movePieceLeft();
        break;
      case "ArrowRight":
        this.gameRules.movePieceRight();
        break;
      case "ArrowDown":
        this.gameRules.movePieceDown();
        break;
      case "ArrowUp":
        this.gameRules.rotatePieceToNext();
        break;
      case " ":
        this.gameRules.movePieceDownFast();
        break;
      case "z":
        this.gameRules.leftRotatePiece();
        break;
      case "x":
        this.gameRules.rightRotatePiece();
        break;
      case "c":
        this.gameRules.holdPiece();
        break;
      default:
        break;
    }
    this.gameRules.game.render();
  }
}