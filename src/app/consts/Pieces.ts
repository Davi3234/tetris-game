import { Piece } from "../classes/Piece";

export const Pieces: Piece[] = [
  new Piece("I_Piece", [[1, 1, 1, 1]], "blue", 1),
  new Piece("O_Piece", [[1, 1], [1, 1]], "yellow", 0),
  new Piece("T_Piece", [[0, 1, 0], [1, 1, 1]], "pink", 3),
  new Piece("J_Piece", [[1, 0, 0], [1, 1, 1]], "blue", 3),
  new Piece("L_Piece", [[0, 0, 1], [1, 1, 1]], "orange", 3),
  new Piece("S_Piece", [[0, 1, 1], [1, 1, 0]], "green", 1),
  new Piece("Z_Piece", [[1, 1, 0], [0, 1, 1]], "red", 1)
];