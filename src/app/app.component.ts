import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phase = Phase.Welcome;
  PhaseType = Phase;
  players = '';
}

enum Phase {
  Welcome,
  HowMany,
  Game
}
