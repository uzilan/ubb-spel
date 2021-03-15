import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsHighestPointsComponent } from './stats-highest-points.component';

describe('StatsHighestPointsComponent', () => {
  let component: StatsHighestPointsComponent;
  let fixture: ComponentFixture<StatsHighestPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsHighestPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsHighestPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
