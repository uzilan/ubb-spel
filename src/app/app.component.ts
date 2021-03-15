import { Component } from '@angular/core';
import {StatsComponent} from './stats/stats.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phase = Phase.Welcome;
  PhaseType = Phase;
  players = '';

  constructor(public dialog: MatDialog) {
  }

  showStats() {
    const stats = this.dialog.open(StatsComponent, {
      height: '400px',
      width: '600px',
    });
  }
}

enum Phase {
  Welcome,
  HowMany,
  Game
}
