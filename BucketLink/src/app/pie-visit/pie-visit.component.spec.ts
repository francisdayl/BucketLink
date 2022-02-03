import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieVisitComponent } from './pie-visit.component';

describe('PieVisitComponent', () => {
  let component: PieVisitComponent;
  let fixture: ComponentFixture<PieVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
