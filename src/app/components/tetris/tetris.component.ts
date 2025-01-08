import { Component, OnInit } from '@angular/core';
import { Game } from '../../classes/Game';
import { Renderer } from '../../classes/Renderer';

@Component({
  selector: 'app-tetris',
  standalone: true,
  imports: [],
  templateUrl: './tetris.component.html',
  styleUrl: './tetris.component.css'
})
export class TetrisComponent implements OnInit {
  game: Game | undefined;
  render: Renderer | undefined;

  ngOnInit() {
    const canvas = document.getElementById('tetrisCanvas') as HTMLCanvasElement;
    this.game = new Game(canvas);
    this.game.start();
  }
}
