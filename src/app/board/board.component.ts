import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() players: string[];
  rows: number[][];

  constructor() {
  }

  ngOnInit(): void {
    this.rows = new Array<Array<number>>();
    for (let x = 0; x <= +this.players; x++) {
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
    let value = this.rows[row][col];
    return value === 0 ? '' : value;
  }
}
