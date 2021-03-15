import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../model/game';

@Component({
  selector: 'app-stats-game-list',
  templateUrl: './stats-game-list.component.html',
  styleUrls: ['./stats-game-list.component.css']
})
export class StatsGameListComponent implements OnInit {

  @Input()
  games$: Observable<Game[]>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
