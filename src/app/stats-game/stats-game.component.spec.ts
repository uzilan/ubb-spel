import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGameComponent } from './stats-game.component';

describe('StatsGameComponent', () => {
  let component: StatsGameComponent;
  let fixture: ComponentFixture<StatsGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
