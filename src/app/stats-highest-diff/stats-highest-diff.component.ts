import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../../model/game";
import {map} from "rxjs/operators";
import * as _ from "lodash";
import {StatsComponent} from "../stats/stats.component";
import {NameAndValue} from "../../model/name-and-value";

@Component({
  selector: 'app-stats-highest-diff',
  templateUrl: './stats-highest-diff.component.html',
  styleUrls: ['./stats-highest-diff.component.css']
})
export class StatsHighestDiffComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  highest$: Observable<NameAndValue[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.highest$ = this.games$.pipe(map(games => {
      return _.chain(games)
        .map(game => game.rows)
        .orderBy('sum')
        .map(rows => {
          const lowest = rows[0]
          const highest = rows[rows.length - 1]
          const names = `${highest.player} (${highest.sum}) - ${lowest.player} (${lowest.sum})`
          const diff = highest.sum - lowest.sum
          return {name: names, value: diff}
        })
        .orderBy('value', 'desc')
        .take(StatsComponent.constants.statsCount)
        .value()
    }))
  }
}
