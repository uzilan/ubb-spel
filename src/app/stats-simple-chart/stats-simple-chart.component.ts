import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import * as _ from "lodash";

@Component({
  selector: 'app-stats-simple-chart',
  templateUrl: './stats-simple-chart.component.html',
  styleUrls: ['./stats-simple-chart.component.css']
})
export class StatsSimpleChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {}; // required
  oneToOneFlag: boolean = true; // optional boolean, defaults to false

  @Input()
  data: { name: string, value: number }[];

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: _.map(this.data, 'name')
      },
      yAxis: {
        title: {
          text: ''
        },
      },
      series: [{
        data: _.map(this.data, 'value'),
        type: 'bar',
      }]
    }
  }
}
