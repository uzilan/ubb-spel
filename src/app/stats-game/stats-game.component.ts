import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../model/game';
import {Row} from "../../model/row";
import {MatDialog} from "@angular/material/dialog";
import {StatsComponent} from "../stats/stats.component";
import {GamePlayerStatsComponent} from "../game-player-stats/game-player-stats.component";

@Component({
  selector: 'app-stats-game',
  templateUrl: './stats-game.component.html',
  styleUrls: ['./stats-game.component.css']
})
export class StatsGameComponent implements OnInit {

  @Input()
  game: Game;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  winnerClass(row: Row) {
    return this.game.winner.name === row.player ? 'winner': '';
  }

  showGamePlayerStats() {
    this.dialog.open(GamePlayerStatsComponent, {
      height: '50%',
      width: '50%',
      data: {game: this.game}
    });
  }
}
