import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsLowestWinScoresComponent } from './stats-lowest-win-scores.component';

describe('StatsLowestWinScoresComponent', () => {
  let component: StatsLowestWinScoresComponent;
  let fixture: ComponentFixture<StatsLowestWinScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsLowestWinScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsLowestWinScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
