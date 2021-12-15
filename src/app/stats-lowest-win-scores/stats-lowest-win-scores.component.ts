import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../../model/game";
import {NameAndValue} from "../../model/name-and-value";
import * as _ from 'lodash';
import {map} from "rxjs/operators";
import {StatsComponent} from "../stats/stats.component";

@Component({
  selector: 'app-stats-lowest-win-scores',
  templateUrl: './stats-lowest-win-scores.component.html',
  styleUrls: ['./stats-lowest-win-scores.component.css']
})
export class StatsLowestWinScoresComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  lowest$: Observable<NameAndValue[]>;

  constructor() { }

  ngOnInit(): void {
    this.lowest$ = this.games$.pipe(map(games => {
      return _.chain(games)
        .map(game => ({
          name: game.winner.name,
          value: game.winner.points
        }))
        .orderBy('value')
        .take(StatsComponent.constants.statsCount)
        .value();
    }));
  }
}
