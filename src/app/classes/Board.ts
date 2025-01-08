import { Piece } from "./Piece";

export class Board {
  width: number;
  height: number;
  grid: number[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () => Array(width).fill(0));
  }

  clearRow(row: number) {
    this.grid.splice(row, 1);
    this.grid.unshift(Array(this.width).fill(0));
  }

  isRowFull(row: number): boolean {
    return this.grid[row].every(cell => cell !== 0);
  }

  addPiece(piece : Piece) {
    for (let i = 0; i < piece.shape.length; i++) {
      for (let j = 0; j < piece.shape[i].length; j++) {
        if (piece.shape[i][j] && this.grid[piece.position.y + i] !== undefined) {
          this.grid[piece.position.y + i][piece.position.x + j] = piece.shape[i][j];
        }
      }
    }
  }

  cleanPiece(piece : Piece){
    for (let i = 0; i < piece.shape.length; i++) {
      for (let j = 0; j < piece.shape[i].length; j++) {
        if (piece.shape[i][j] && this.grid[piece.position.y + i] !== undefined) {
          this.grid[piece.position.y + i][piece.position.x + j] = 0;
        }
      }
    }
  }
}
