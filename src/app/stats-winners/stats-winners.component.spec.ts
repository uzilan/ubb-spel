import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsWinnersComponent } from './stats-winners.component';

describe('StatsWinnersComponent', () => {
  let component: StatsWinnersComponent;
  let fixture: ComponentFixture<StatsWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
