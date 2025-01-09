import { GameRules } from "./GameRules";

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
        this.gameRules.rotatePiece();
        break;
      case "Space":
        this.gameRules.movePieceDownFast();
        break;
      case "KeyZ":
        this.gameRules.leftRotatePiece();
        break;
      case "KeyX":
        this.gameRules.rightRotatePiece();
        break;
      case "KeyC":
        this.gameRules.holdPiece();
        break;
      default:
        break;
    }
  }
}
