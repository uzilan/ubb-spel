import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {AngularFirestore} from '@angular/fire/firestore';
import {Game} from '../../model/game';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() players: number;
  rows: number[][];
  playerNames: string[] = new Array(this.players);

  constructor(private store: AngularFirestore) {
  }

  ngOnInit(): void {
    this.rows = new Array<Array<number>>();
    for (let x = 0; x < this.players; x++) {
      const row: number[] = new Array<number>();
      for (let y = 0; y <= 7; y++) {
        row.push(0);
      }
      this.rows.push(row);
    }
  }

  sum(row: number) {
    return this.rows[row].reduce((a, b) => a + b, 0);
  }

  getCell(row: number, col: number) {
    const value = this.rows[row][col];
    return value === 0 ? '' : value;
  }

  lastGamePlayed(): boolean {
    return _.some(this.rows,
      row => row[6] !== 0);
  }

  saveGame() {
    const rowData = _.map(this.rows, row =>
      ({
        player: this.playerNames[_.indexOf(this.rows, row)],
        ss: row[0],
        sl: row[1],
        ll: row[2],
        sss: row[3],
        ssl: row[4],
        sll: row[5],
        lll: row[6],
        sum: _.sum(row)
      })
    );

    const winner = _.minBy(rowData, 'sum');

    const game: Game = {
      playerNames: this.playerNames,
      rows: rowData,
      winner: {name: winner.player, points: winner.sum},
      date: new Date()
    };

    this.store.collection('games').add(game);
  }
}

