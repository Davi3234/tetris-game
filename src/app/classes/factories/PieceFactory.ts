import { Piece } from "../Piece";

export class PieceFactory {
  static createPiece(type: string): Piece {
    switch (type) {
      case "I_Piece":
        return new Piece(
          "I_Piece",
          [
            [1, 1, 1, 1]
          ],
          "blue"
        );
      case "O_Piece":
        return new Piece(
          "O_Piece",
          [
            [1, 1],
            [1, 1]
          ],
          "yellow"
        );
      case "T_Piece":
        return new Piece(
          "T_Piece",
          [
            [0, 1, 0],
            [1, 1, 1]
          ],
          "pink"
        );
      case "J_Piece":
        return new Piece(
          "J_Piece",
          [
            [1, 0, 0],
            [1, 1, 1]
          ],
          "blue"
        );
      case "L_Piece":
        return new Piece(
          "L_Piece",
          [
            [0, 0, 1],
            [1, 1, 1]
          ],
          "orange"
        );
      case "S_Piece":
        return new Piece(
          "S_Piece", 
          [
            [0, 1, 1], 
            [1, 1, 0]
          ],
          "green"
        );
      case "Z_Piece":
        return new Piece(
          "Z_Piece",
          [
            [1, 1, 0],
            [0, 1, 1]
          ],
          "red"
        );
      default:
        throw new Error("Unknown piece type");
    }
  }
}