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
import {environment} from '../environments/environment';
import {StatsComponent} from './stats/stats.component';
import {MatDialogModule} from '@angular/material/dialog';
import {StatsWinnersComponent} from './stats-winners/stats-winners.component';
import {StatsScoresComponent} from './stats-scores/stats-scores.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {StatsGameListComponent} from './stats-game-list/stats-game-list.component';
import {StatsGameComponent} from './stats-game/stats-game.component';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {OrderbyPipe} from './orderby.pipe';
import {StatsLowestWinScoresComponent} from './stats-lowest-win-scores/stats-lowest-win-scores.component';
import {StatsMostPlayedComponent} from './stats-most-played/stats-most-played.component';
import {GamePlayerStatsComponent} from "./game-player-stats/game-player-stats.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {StatsHighestHandComponent} from "./stats-highest-hand/stats-highest-hand.component";
import {StatsHighestDiffComponent} from './stats-highest-diff/stats-highest-diff.component';
import {StatsSimpleTableComponent} from './stats-simple-table/stats-simple-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StatsComponent,
    StatsWinnersComponent,
    StatsScoresComponent,
    StatsGameListComponent,
    StatsGameComponent,
    OrderbyPipe,
    StatsLowestWinScoresComponent,
    StatsMostPlayedComponent,
    GamePlayerStatsComponent,
    StatsHighestHandComponent,
    StatsHighestDiffComponent,
    StatsSimpleTableComponent,
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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HighchartsChartModule,
    MatAutocompleteModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
