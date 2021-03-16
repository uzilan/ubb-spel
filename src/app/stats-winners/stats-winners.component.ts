import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../model/game';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {NameAndValue} from '../../model/name-and-value';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-stats-winners',
  templateUrl: './stats-winners.component.html',
  styleUrls: ['./stats-winners.component.css']
})
export class StatsWinnersComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  winners$: Observable<NameAndValue[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.winners$ = this.games$.pipe(map(games => {
      return _.chain(games)
        .groupBy('winner.name')
        .map((value, key) => ({
          name: key,
          value: value.length
        }))
        .orderBy('value', 'desc')
        .value();
    }));
  }
}
