import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../model/game";
import {Row} from "../../model/row";
import * as _ from 'lodash';
import {Observable} from "rxjs";

@Component({
  selector: 'app-stats-scores',
  templateUrl: './stats-scores.component.html',
  styleUrls: ['./stats-scores.component.css']
})
export class StatsScoresComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;
  topFive: Row[];

  constructor() {
  }

  ngOnInit(): void {
    this.games$.subscribe(games => {
        this.topFive = _.chain(games)
          .flatMap(game => game.rows)
          .orderBy('sum', 'desc')
          .take(5)
          .value();
      }
    )
  }
}
