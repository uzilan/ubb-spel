import {Component} from '@angular/core';
import {StatsComponent} from './stats/stats.component';
import {MatDialog} from '@angular/material/dialog';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phase = Phase.Welcome;
  PhaseType = Phase;
  players = '';

  constructor(public auth: AngularFireAuth, public dialog: MatDialog) {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  showStats() {
    this.dialog.open(StatsComponent, {
      height: '85%',
      width: '85%',
    });
  }
}

enum Phase {
  Welcome,
  HowMany,
  Game
}
