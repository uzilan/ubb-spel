import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMostPlayedComponent } from './stats-most-played.component';

describe('StatsMostPlayedComponent', () => {
  let component: StatsMostPlayedComponent;
  let fixture: ComponentFixture<StatsMostPlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsMostPlayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsMostPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
