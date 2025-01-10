import { Game } from '../Game';

export class CollisionRules {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  checkCollision(newPosition: { x: number; y: number }): boolean {
    this.game.board.cleanPiece(this.game.currentPiece);

    for (let i = 0; i < this.game.currentPiece.shape.length; i++) {
      for (let j = 0; j < this.game.currentPiece.shape[i].length; j++) {
        if (this.game.currentPiece.shape[i][j]) {
          const y = newPosition.y + i;

          if (
            y >= this.game.board.height ||
            (this.game.board.grid[y]?.[newPosition.x + j]?.value !== 0)
          ) {
            this.game.addPieceToBoard();
            return true;
          }
        }
      }
    }

    this.game.addPieceToBoard();
    return false;
  }
}