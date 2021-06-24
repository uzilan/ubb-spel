import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayerStatsComponent } from './game-player-stats.component';

describe('GamePlayerStatsComponent', () => {
  let component: GamePlayerStatsComponent;
  let fixture: ComponentFixture<GamePlayerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePlayerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
