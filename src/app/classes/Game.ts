import { Board } from "./Board";
import { Piece } from "./Piece";
import { Renderer } from "./Renderer";
import { KeyboardHandler } from "./KeyboardHandler";
import { PieceFactory } from "./factories/PieceFactory";
import { GameRules } from "./rules/GameRules";
import { Pieces } from "../consts/Pieces";

export class Game {
  board: Board;
  renderer: Renderer;
  currentPiece: Piece;
  piecesStorage: Piece[];
  gameRules: GameRules;
  keyboardHandler: KeyboardHandler;
  updateInterval: NodeJS.Timeout;
  renderInterval: NodeJS.Timeout;

  constructor(canvas: HTMLCanvasElement) {
    this.board = new Board(10, 20);
    this.renderer = new Renderer(canvas);
    this.currentPiece = PieceFactory.createPiece("I_Piece");
    this.currentPiece.position = { x: 3, y: 0 };
    this.gameRules = new GameRules(this);
    this.keyboardHandler = new KeyboardHandler(this.gameRules);
    this.initializeGame();
  }

  initializeGame() {
    this.initializePieces();
    this.pickNextPiece();
    this.addRandomPiece();
  }

  start() {
    this.startGameLoop();
  }

  restart(){
    this.breakGameLoop();
    this.start();
  }

  startGameLoop() {
    this.updateInterval = setInterval(() => this.update(), 1000);
    this.renderInterval = setInterval(() => this.render(), 1);
  }

  breakGameLoop(){
    clearInterval(this.updateInterval);
    clearInterval(this.renderInterval);
  }

  update() {
    const newPosition = { x: this.currentPiece.position.x, y: this.currentPiece.position.y + 1 };

    if (this.gameRules.collisionRules.checkCollision(newPosition)) {
      this.loadNewPiece();
    } else {
      this.gameRules.movePieceDown();
    }
  }

  render() {
    this.renderer.render(this.board.grid);
  }

  addPieceToBoard() {
    this.board.addPiece(this.currentPiece);
  }

  loadNewPiece() {
    this.addPieceToBoard();
    this.currentPiece.position = { x: 3, y: 0 };
    this.pickNextPiece();
    this.addRandomPiece();
  }

  initializePieces() {
    this.piecesStorage = [...Pieces];
    this.shufflePieces();
  }

  shufflePieces() {
    for (let i = this.piecesStorage.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.piecesStorage[i], this.piecesStorage[j]] = [this.piecesStorage[j], this.piecesStorage[i]];
    }
  }

  addRandomPiece() {
    const randomIndex = Math.floor(Math.random() * Pieces.length);
    this.piecesStorage.push(Pieces[randomIndex]);
  }

  pickNextPiece() {
    const position = this.currentPiece.position;
    this.currentPiece = this.piecesStorage.shift()!;
    this.currentPiece.position = position;
  }
}