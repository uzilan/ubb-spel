import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../model/game';
import {Row} from "../../model/row";

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

  winnerClass(row: Row) {
    return this.game.winner.name === row.player ? 'winner': '';
  }
}
