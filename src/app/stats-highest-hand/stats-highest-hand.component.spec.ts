import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsHighestHandComponent } from './stats-highest-hand.component';

describe('StatsHighestHandComponent', () => {
  let component: StatsHighestHandComponent;
  let fixture: ComponentFixture<StatsHighestHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsHighestHandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsHighestHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
