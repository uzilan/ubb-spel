import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsHighestDiffComponent } from './stats-highest-diff.component';

describe('StatsHighestDiffComponent', () => {
  let component: StatsHighestDiffComponent;
  let fixture: ComponentFixture<StatsHighestDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsHighestDiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsHighestDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
