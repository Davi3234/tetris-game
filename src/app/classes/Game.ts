import { Pieces } from "../consts/Pieces";
import { Board } from "./Board";
import { Piece } from "./Piece";
import { Renderer } from "./Renderer";

export class Game {
  board: Board;
  renderer: Renderer;
  currentPiece: Piece;
  piecesStorage: Piece[];

  constructor(canvas: HTMLCanvasElement) {
    this.board = new Board(10, 20);
    this.renderer = new Renderer(canvas);
    this.currentPiece.position = { x: 3, y: 0 };
    this.initializePieces();
    this.pickNextPiece();
    this.addPiece();
  }

  start() {
    this.gameLoop();
  }

  gameLoop() {
    setInterval(() => {
      this.update();
      this.render();
    }, 1000);
  }

  update() {
    const newPosition = { x: this.currentPiece.position.x, y: this.currentPiece.position.y + 1 };
    
    if (this.checkCollision(newPosition)) {
      this.addPiece();
      this.currentPiece.position = { x: 3, y: 0 };
      this.pickNextPiece();
    }
    else {
      this.board.cleanPiece(this.currentPiece);
      this.currentPiece.position = newPosition;
      this.addPiece();
    }
  }

  checkCollision(newPosition: { x: number, y: number }): boolean {
    for (let i = 0; i < this.currentPiece.shape.length; i++) {
      for (let j = 0; j < this.currentPiece.shape[i].length; j++) {
        if (this.currentPiece.shape[i][j] && 
            (newPosition.y + i >= this.board.height || 
             newPosition.x + j < 0 || 
             newPosition.x + j >= this.board.width || 
             this.board.grid[newPosition.y + i]?.[newPosition.x + j] !== 0)) {
          return true;
        }
      }
    }
    return false;
  }

  render() {
    this.renderer.render(this.board.grid);
  }

  addPiece(){
    this.board.addPiece(this.currentPiece);
  }

  initializePieces(){
    this.piecesStorage = Pieces;
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
