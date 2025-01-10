import { Piece } from "../classes/Piece";

export const Pieces: Piece[] = [
  new Piece("I_Piece", [[1, 1, 1, 1]], "blue"),
  new Piece("O_Piece", [[1, 1], [1, 1]], "yellow"),
  new Piece("T_Piece", [[0, 1, 0], [1, 1, 1]], "pink"),
  new Piece("J_Piece", [[1, 0, 0], [1, 1, 1]], "blue"),
  new Piece("L_Piece", [[0, 0, 1], [1, 1, 1]], "orange"),
  new Piece("S_Piece", [[0, 1, 1], [1, 1, 0]], "green"),
  new Piece("Z_Piece", [[1, 1, 0], [0, 1, 1]], "red")
];