import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../model/game";
import {from, Observable} from "rxjs";
import * as _ from 'lodash';
import {NameAndValue} from "../../model/name-and-value";


@Component({
  selector: 'app-stats-winners',
  templateUrl: './stats-winners.component.html',
  styleUrls: ['./stats-winners.component.css']
})
export class StatsWinnersComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  winners: NameAndValue[];
  winners$: Observable<NameAndValue[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.games$.subscribe(games => {
        this.winners = _.chain(games)
          .groupBy('winner.name')
          .map((value, key) => ({
            name: key,
            value: value.length
          }))
          .value();
        // this.winners$ = from(this.winners)
      }
    );
  }
}
