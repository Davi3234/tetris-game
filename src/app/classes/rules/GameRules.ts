import { Game } from '../Game';
import { CollisionRules } from './CollisionRules';
import { RotationRules } from './RotationRules';

export class GameRules {
  game: Game;
  collisionRules: CollisionRules;
  rotationRules: RotationRules;

  constructor(game: Game) {
    this.game = game;
    this.collisionRules = new CollisionRules(game);
    this.rotationRules = new RotationRules(this);
  }

  movePieceDown() {
    const newPosition = {
      x: this.game.currentPiece.position.x,
      y: this.game.currentPiece.position.y + 1,
    };
    if (this.collisionRules.checkCollision(newPosition)) {
      this.game.loadNewPiece();
      this.game.restart()
    } else {
      this.updatePiecePosition(newPosition);
    }
  }

  movePieceLeft() {
    const newPosition = {
      x: this.game.currentPiece.position.x - 1,
      y: this.game.currentPiece.position.y,
    };
    if (!this.collisionRules.checkCollision(newPosition)) {
      this.updatePiecePosition(newPosition);
    }
  }

  movePieceRight() {
    const newPosition = {
      x: this.game.currentPiece.position.x + 1,
      y: this.game.currentPiece.position.y,
    };
    if (!this.collisionRules.checkCollision(newPosition)) {
      this.updatePiecePosition(newPosition);
    }
  }

  movePieceDownFast() {
    let newPosition = {
      x: this.game.currentPiece.position.x,
      y: this.game.currentPiece.position.y,
    };

    while (!this.collisionRules.checkCollision({ x: newPosition.x, y: newPosition.y + 1 })) {
      newPosition.y += 1;
    }

    this.updatePiecePosition(newPosition);
    this.game.loadNewPiece();
    this.game.restart();
  }

  leftRotatePiece() {
    const newShape = this.rotationRules.rotateLeft(this.game.currentPiece);
    this.game.board.cleanPiece(this.game.currentPiece);
    if(newShape){
      this.game.currentPiece.shape = newShape;
    }
    this.updatePiecePosition(this.game.currentPiece.position);
  }

  rightRotatePiece() {
    const newShape = this.rotationRules.rotateRight(this.game.currentPiece);
    this.game.board.cleanPiece(this.game.currentPiece);
    if(newShape){
      this.game.currentPiece.shape = newShape;
    }
    this.updatePiecePosition(this.game.currentPiece.position);
  }

  holdPiece() {
    // Implement hold piece logic
  }

  updatePiecePosition(newPosition: { x: number; y: number }) {
    this.game.board.cleanPiece(this.game.currentPiece);
    this.game.currentPiece.position = newPosition;
    this.game.addPieceToBoard();
  }
}