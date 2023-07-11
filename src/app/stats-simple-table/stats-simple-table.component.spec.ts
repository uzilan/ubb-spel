import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSimpleTableComponent } from './stats-simple-table.component';

describe('StatsSimpleTableComponent', () => {
  let component: StatsSimpleTableComponent;
  let fixture: ComponentFixture<StatsSimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsSimpleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsSimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
