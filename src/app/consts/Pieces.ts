import { Piece } from "../classes/Piece";

export const Pieces = [
  {
    name:"I_Piece",
    shape:[
      [1, 1, 1, 1]
    ],
    color: "blue"
  },
  {
    name:"O_Piece",
    shape:[
      [1, 1],
      [1, 1]
    ],
    color: "yellow"
  },
  {
    name:"T_Piece",
    shape:[
      [0, 1, 0],
      [1, 1, 1]
    ],
    color: "pink"
  },
  {
    name:"J_Piece",
    shape:[
      [1, 0, 0],
      [1, 1, 1]
    ],
    color: "blue"
  },
  {
    name:"L_Piece",
    shape:[
      [0, 0, 1],
      [1, 1, 1]
    ],
    color: "orange"
  },
  {
    name:"S_Piece",
    shape:[
      [0, 1, 1],
      [1, 1, 0]
    ],
    color: "green"
  },
  {
    name:"Z_Piece",
    shape:[
      [1, 1, 0],
      [0, 1, 1]
    ],
    color: "red"
  }
 ] as Piece[];
