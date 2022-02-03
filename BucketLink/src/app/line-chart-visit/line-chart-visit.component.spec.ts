import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartVisitComponent } from './line-chart-visit.component';

describe('LineChartVisitComponent', () => {
  let component: LineChartVisitComponent;
  let fixture: ComponentFixture<LineChartVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
