import { Piece } from "./Piece";

export class Board {
  width: number;
  height: number;
  grid: ({ value: number; color: string })[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () =>
      Array(width).fill({ value: 0, color: '' })
    );
  }

  clearRow(row: number) {
    this.grid.splice(row, 1);
    this.grid.unshift(Array(this.width).fill({ value: 0, color: '' }));
  }

  isRowFull(row: number): boolean {
    return this.grid[row].every(cell => cell.value !== 0);
  }

  addPiece(piece: Piece) {
    for (let i = 0; i < piece.shape.length; i++) {
      for (let j = 0; j < piece.shape[i].length; j++) {
        if (piece.shape[i][j] && this.grid[piece.position.y + i] !== undefined) {
          this.grid[piece.position.y + i][piece.position.x + j] = {
            value: piece.shape[i][j],
            color: piece.color,
          };
        }
      }
    }
  }

  cleanPiece(piece: Piece) {
    for (let i = 0; i < piece.shape.length; i++) {
      for (let j = 0; j < piece.shape[i].length; j++) {
        if (piece.shape[i][j] && this.grid[piece.position.y + i] !== undefined) {
          this.grid[piece.position.y + i][piece.position.x + j] = {
            value: 0,
            color: '',
          };
        }
      }
    }
  }
}
