export class Renderer {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  tileSize: number;

  constructor(canvas: HTMLCanvasElement, tileSize: number = 20) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d')!;
    this.tileSize = tileSize;
  }

  render(board: ({ value: number; color: string })[][]) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        const cell = board[y][x];
        if (cell.value) {
          this.context.fillStyle = cell.color || 'blue'; // Use a cor da peça ou azul como fallback
          this.context.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
        }
      }
    }
  }
}
