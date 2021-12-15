import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../model/game';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NameAndValue} from '../../model/name-and-value';
import {StatsComponent} from "../stats/stats.component";

@Component({
  selector: 'app-stats-scores',
  templateUrl: './stats-scores.component.html',
  styleUrls: ['./stats-scores.component.css']
})
export class StatsScoresComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  topFive$: Observable<NameAndValue[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.topFive$ = this.games$.pipe(map(games => {
      return _.chain(games)
        .flatMap(game => game.rows)
        .orderBy('sum', 'desc')
        .take(StatsComponent.constants.statsCount)
        .map(row => ({name: row.player, value: row.sum}))
        .value();
    }));
  }
}
