import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as _ from 'lodash';
import {Game} from '../../model/game';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  games$: Observable<Game[]>;

  static constants = {
    statsCount: 7
  }

  constructor(private store: AngularFirestore) {
  }

  ngOnInit(): void {
    this.games$ = this.store.collection('games')
      .get()
      .pipe(map(data => {
        return _.map(data.docs, doc => {
          return {
            playerNames: doc.get('playerNames'),
            rows: doc.get('rows'),
            winner: doc.get('winner'),
            date: doc.get('date'),
          };
        });
      }));
  }
}
