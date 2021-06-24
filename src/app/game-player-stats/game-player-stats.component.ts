import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import addMore from "highcharts/highcharts-more";
import * as _ from 'lodash';
import {Row} from "../../model/row";

@Component({
  selector: 'app-game-player-stats',
  templateUrl: './game-player-stats.component.html',
  styleUrls: ['./game-player-stats.component.css']
})
export class GamePlayerStatsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  oneToOneFlag = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    addMore(Highcharts);

    const q25 = arr => quantile(arr, .25);
    const q50 = arr => quantile(arr, .50);
    const q75 = arr => quantile(arr, .75);
    const asc = arr => arr.sort((a, b) => a - b);
    const quantile = (arr, q) => {
      const sorted = asc(arr);
      const pos = (sorted.length - 1) * q;
      const base = Math.floor(pos);
      const rest = pos - base;
      if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
      } else {
        return sorted[base];
      }
    };

    const game = this.data.game;
    const rows = _.map(game.rows, (row: Row) => {
        const scores = [row.ss, row.sl, row.ll, row.sss, row.ssl, row.sll, row.lll];
        const low = _.min(scores);
        const q1 = q25(scores);
        const median = q50(scores);
        const q3 = q75(scores);
        const high = _.max(scores);
        return [row.player, low, q1, median, q3, high];
      }
    );

    this.chartOptions = {
      chart: {
        type: 'boxplot',
        inverted: true
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: game.playerNames
      },
      yAxis: {
        title: {
          text: ''
        },
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'results',
        type: 'boxplot',
        data: rows,
      }]
    };
  }
}
