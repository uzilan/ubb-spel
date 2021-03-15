import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../model/game';

@Component({
  selector: 'app-stats-game',
  templateUrl: './stats-game.component.html',
  styleUrls: ['./stats-game.component.css']
})
export class StatsGameComponent implements OnInit {

  @Input()
  game: Game;

  constructor() {
  }

  ngOnInit(): void {
  }

}
