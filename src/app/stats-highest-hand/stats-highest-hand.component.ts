import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../../model/game";
import {map} from "rxjs/operators";
import * as _ from 'lodash';
import {NameAndValue} from "../../model/name-and-value";
import {StatsComponent} from "../stats/stats.component";

@Component({
  selector: 'app-stats-highest-hand',
  templateUrl: './stats-highest-hand.component.html',
  styleUrls: ['./stats-highest-hand.component.css']
})
export class StatsHighestHandComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  highest$: Observable<NameAndValue[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.highest$ = this.games$.pipe(map(games => {
      return _.chain(games)
        .flatMap(game => game.rows)
        .map(row => {
          return {name: row.player, value: Math.max(...[row.ss, row.sl, row.ll, row.sss, row.ssl, row.sll, row.lll])};
        })
        .orderBy('value', 'desc')
        .take(StatsComponent.constants.statsCount)
        .value()
    }))
  }
}
