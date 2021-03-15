import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGameListComponent } from './stats-game-list.component';

describe('StatsGameListComponent', () => {
  let component: StatsGameListComponent;
  let fixture: ComponentFixture<StatsGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
