export class Piece {
  name: string;
  shape: number[][];
  color: string;
  position: { x: number; y: number };

  constructor(name: string, shape: number[][], color: string) {
    this.name = name;
    this.shape = shape;
    this.color = color;
    this.position = { x: 0, y: 0 };
  }

  rotate() {
    const newShape = this.shape[0].map((_, index) => 
      this.shape.map(row => row[index]).reverse()
    );
    this.shape = newShape;
  }
}
