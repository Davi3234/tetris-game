import { Pieces } from "../consts/Pieces";
import { Game } from "./Game";

export class GameRules {
  game: Game;

  constructor(game: Game){
    this.game = game;
  }

  initializeBoard(){
    this.game.initializePieces();
    this.game.pickNextPiece();
    this.game.addRandomPiece();
  }

  checkCollision(newPosition: { x: number, y: number }): boolean {
    this.game.board.cleanPiece(this.game.currentPiece);
    for (let i = 0; i < this.game.currentPiece.shape.length; i++) {
      for (let j = 0; j < this.game.currentPiece.shape[i].length; j++) {
        if (this.game.currentPiece.shape[i][j] && 
            (newPosition.y + i >= this.game.board.height || 
             newPosition.x + j < 0 || 
             newPosition.x + j >= this.game.board.width || 
             this.game.board.grid[newPosition.y + i]?.[newPosition.x + j] !== 0)) {
              this.game.addPiece();
          return true;
        }
      }
    }
    this.game.addPiece();
    return false;
  }

  movePieceDown(newPosition: { x: number, y: number }){
    this.game.board.cleanPiece(this.game.currentPiece);
    this.game.currentPiece.position = newPosition;
    this.game.addPiece();
  }
}