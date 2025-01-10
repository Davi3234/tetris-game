import { Pieces } from "../consts/Pieces";
import { Board } from "./Board";
import { Piece } from "./Piece";
import { Renderer } from "./Renderer";
import { GameRules } from "./GameRules";
import { KeyboardHandler } from "./KeyboardHandler";

export class Game {
  board: Board;
  renderer: Renderer;
  currentPiece: Piece;
  piecesStorage: Piece[];
  gameRules: GameRules;
  keyboardHandler: KeyboardHandler;

  constructor(canvas: HTMLCanvasElement) {
    this.board = new Board(10, 20);
    this.renderer = new Renderer(canvas);
    this.currentPiece = new Piece('initial', [[1]], 'blue');
    this.currentPiece.position = { x: 3, y: 0 };
    this.gameRules = new GameRules(this);
    this.keyboardHandler = new KeyboardHandler(this.gameRules);
    this.gameRules.initializeBoard();
  }

  start() {
    this.gameLoop();
  }

  gameLoop() {
    setInterval(() => {
      this.update();
    }, 1000);
    setInterval(() => {
      this.render();
    }, 1)
  }

  update() {
    const newPosition = { x: this.currentPiece.position.x, y: this.currentPiece.position.y + 1 };

    //Moving down
    if (this.gameRules.checkCollision(newPosition)) {
      this.loadNewPiece();
    }
    else {
      this.gameRules.movePieceDown();
    }
  }

  render() {
    this.renderer.render(this.board.grid);
  }

  addPiece(){
    this.board.addPiece(this.currentPiece);
  }

  loadNewPiece(){
    this.addPiece();
    this.currentPiece.position = { x: 3, y: 0 };
    this.pickNextPiece();
    this.addRandomPiece();
  }

  initializePieces(){
    //Cloning object
    this.piecesStorage = [...Pieces];
    this.shufflePieces();
  }

  shufflePieces() {
    for (let i = this.piecesStorage.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.piecesStorage[i], this.piecesStorage[j]] = [this.piecesStorage[j], this.piecesStorage[i]];
    }
  }

  addRandomPiece(){
    const randomIndex = Math.floor(Math.random() * Pieces.length);
    this.piecesStorage.push(Pieces[randomIndex]);
  }

  pickNextPiece(){
    const position = this.currentPiece.position;
    this.currentPiece = this.piecesStorage[0];
    this.currentPiece.position = position;
    this.piecesStorage.shift();
  }

}
