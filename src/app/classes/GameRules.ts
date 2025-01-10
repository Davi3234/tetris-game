import { Game } from './Game';

export class GameRules {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  initializeBoard() {
    this.game.initializePieces();
    this.game.pickNextPiece();
    this.game.addRandomPiece();
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
            this.game.addPiece();
            return true;
          }
        }
      }
    }

    this.game.addPiece();
    return false;
  }

  movePieceDown() {
    const newPosition = {
      x: this.game.currentPiece.position.x,
      y: this.game.currentPiece.position.y + 1,
    };
    if (this.checkCollision(newPosition)) {
      this.game.loadNewPiece();
    } else {
      this.cleanAndSetNewPosition(newPosition);
    }
  }
  movePieceLeft() {
    const newPosition = {
      x: this.game.currentPiece.position.x - 1,
      y: this.game.currentPiece.position.y,
    };
    if (!this.checkCollision(newPosition)) {
      this.cleanAndSetNewPosition(newPosition);
    }
  }
  movePieceRight() {
    const newPosition = {
      x: this.game.currentPiece.position.x + 1,
      y: this.game.currentPiece.position.y,
    };
    if (!this.checkCollision(newPosition)) {
      this.cleanAndSetNewPosition(newPosition);
    }
  }

  movePieceDownFast() {
    let newPosition = {
      x: this.game.currentPiece.position.x,
      y: this.game.currentPiece.position.y,
    };

    while (!this.checkCollision({ x: newPosition.x, y: newPosition.y + 1 })) {
      newPosition.y += 1;
    }

    this.cleanAndSetNewPosition(newPosition);
    this.game.loadNewPiece();
  }

  rotatePiece() {}
  leftRotatePiece() {}
  rightRotatePiece() {}
  holdPiece() {}
  cleanAndSetNewPosition(newPosition: { x: number; y: number }) {
    this.game.board.cleanPiece(this.game.currentPiece);
    this.game.currentPiece.position = newPosition;
    this.game.addPiece();
  }
}
