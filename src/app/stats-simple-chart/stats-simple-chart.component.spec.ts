import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSimpleChartComponent } from './stats-simple-chart.component';

describe('StatsSimpleChartComponent', () => {
  let component: StatsSimpleChartComponent;
  let fixture: ComponentFixture<StatsSimpleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsSimpleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsSimpleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
