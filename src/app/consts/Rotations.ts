export const Rotations: { name: string, rotations: [number[][], number[][]] | [number[][]] | [number[][], number[][], number[][], number[][]] }[] = [
  {
    name: "I_Piece",
    rotations: [
      [[1, 1, 1, 1]],
      [[1], [1], [1], [1]]
    ]
  },
  {
    name: "O_Piece",
    rotations: [
      [[1, 1], [1, 1]]
    ]
  },
  {
    name: "T_Piece",
    rotations: [
      [[0, 1, 0], [1, 1, 1]],
      [[1, 0], [1, 1], [1, 0]],
      [[1, 1, 1], [0, 1, 0]],
      [[0, 1], [1, 1], [0, 1]]
    ]
  },
  {
    name: "J_Piece",
    rotations: [
      [[1, 0, 0], [1, 1, 1]],
      [[1, 1], [1, 0], [1, 0]],
      [[1, 1, 1], [0, 0, 1]],
      [[0, 1], [0, 1], [1, 1]]
    ]
  },
  {
    name: "L_Piece",
    rotations: [
      [[0, 0, 1], [1, 1, 1]],
      [[1, 0], [1, 0], [1, 1]],
      [[1, 1, 1], [1, 0, 0]],
      [[1, 1], [0, 1], [0, 1]]
    ]
  },
  {
    name: "S_Piece",
    rotations: [
      [[0, 1, 1], [1, 1, 0]],
      [[1, 0], [1, 1], [0, 1]]
    ]
  },
  {
    name: "Z_Piece",
    rotations: [
      [[1, 1, 0], [0, 1, 1]],
      [[0, 1], [1, 1], [1, 0]]
    ]
  }
];