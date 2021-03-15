import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as _ from 'lodash';
import {Game} from '../../model/game';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  games?: Game[];
  i = 99;

  constructor(private store: AngularFirestore) {
  }

  ngOnInit(): void {
    const games$ = this.store.collection('games');
    games$.get().subscribe(data => {
      this.games = _.map(data.docs, doc => {
        return {
          playerNames: doc.get('playerNames'),
          rows: doc.get('rows'),
          winner: doc.get('winner'),
          date: doc.get('date'),
        };
      });
    });

  }
}
