import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartVisitComponent } from './bar-chart-visit.component';

describe('BarChartVisitComponent', () => {
  let component: BarChartVisitComponent;
  let fixture: ComponentFixture<BarChartVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
