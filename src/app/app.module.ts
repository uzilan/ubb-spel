import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {BoardComponent} from './board/board.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {StatsComponent} from './stats/stats.component';
import {MatDialogModule} from '@angular/material/dialog';
import {StatsWinnersComponent} from './stats-winners/stats-winners.component';
import {StatsScoresComponent} from './stats-scores/stats-scores.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {StatsSimpleChartComponent} from './stats-simple-chart/stats-simple-chart.component';
import {StatsGameListComponent} from './stats-game-list/stats-game-list.component';
import {StatsGameComponent} from './stats-game/stats-game.component';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StatsComponent,
    StatsWinnersComponent,
    StatsScoresComponent,
    StatsSimpleChartComponent,
    StatsGameListComponent,
    StatsGameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatGridListModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
