import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsScoresComponent } from './stats-scores.component';

describe('StatsScoresComponent', () => {
  let component: StatsScoresComponent;
  let fixture: ComponentFixture<StatsScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
