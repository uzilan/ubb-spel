import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../model/game';
import * as _ from 'lodash';
import {Row} from '../../model/row';

@Component({
  selector: 'app-stats-highest-points',
  templateUrl: './stats-highest-points.component.html',
  styleUrls: ['./stats-highest-points.component.css']
})
export class StatsHighestPointsComponent implements OnInit {

  @Input()
  games: Game[];
  topTen: Row[];

  @Input()
  i: number;

  constructor() {
  }

  ngOnInit(): void {
    const rows = _.flatMap(this.games, game => game.rows);
    const highest = _.sortBy(rows, 'sum');
    this.topTen = _.take(highest, 10);
    debugger;
  }

}
