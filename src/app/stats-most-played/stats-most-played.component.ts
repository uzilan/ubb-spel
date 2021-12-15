import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../../model/game";
import {NameAndValue} from "../../model/name-and-value";
import * as _ from 'lodash';
import {map} from 'rxjs/operators';
import {StatsComponent} from "../stats/stats.component";

@Component({
  selector: 'app-stats-most-played',
  templateUrl: './stats-most-played.component.html',
  styleUrls: ['./stats-most-played.component.css']
})
export class StatsMostPlayedComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  players$: Observable<NameAndValue[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.players$ = this.games$.pipe(map(games => {
      return _.chain(games)
        .flatMap('playerNames')
        .groupBy(_)
        .map((value, key) => ({
          name: key,
          value: value.length
        }))
        .orderBy('value', 'desc')
        .take(StatsComponent.constants.statsCount)
        .value();
    }));
  }
}
