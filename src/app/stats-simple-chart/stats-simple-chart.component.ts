import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {NameAndValue} from '../../model/name-and-value';

@Component({
  selector: 'app-stats-simple-chart',
  templateUrl: './stats-simple-chart.component.html',
  styleUrls: ['./stats-simple-chart.component.css']
})
export class StatsSimpleChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  oneToOneFlag = true;

  @Input()
  data$: Observable<NameAndValue[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.data$.subscribe(data =>
      this.chartOptions = {
        title: {
          text: ''
        },
        legend: {
          enabled: false
        },
        xAxis: {
          categories: _.map(data, 'name')
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
          data: _.map(data, 'value'),
          type: 'bar',
        }]
      });
  }
}
