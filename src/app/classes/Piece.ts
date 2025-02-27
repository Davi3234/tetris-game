export class Piece {
  name: string;
  shape: number[][];
  color: string;
  position: { x: number; y: number };
  rotation: number;
  maxRotation: number;

  constructor(name: string, shape: number[][], color: string, maxRotation: number) {
    this.name = name;
    this.shape = shape;
    this.color = color;
    this.position = { x: 0, y: 0 };
    this.rotation = 0;
    this.maxRotation = maxRotation;
  }
}