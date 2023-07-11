import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NameAndValue} from "../../model/name-and-value";

@Component({
  selector: 'app-stats-simple-table',
  templateUrl: './stats-simple-table.component.html',
  styleUrls: ['./stats-simple-table.component.css']
})
export class StatsSimpleTableComponent implements OnInit {

  @Input()
  data$: Observable<NameAndValue[]>;

  @Input()
  unit = "p"

  constructor() { }

  ngOnInit(): void {
  }

}
