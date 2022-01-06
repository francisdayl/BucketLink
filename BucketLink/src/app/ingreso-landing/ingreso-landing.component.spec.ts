import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoLandingComponent } from './ingreso-landing.component';

describe('IngresoLandingComponent', () => {
  let component: IngresoLandingComponent;
  let fixture: ComponentFixture<IngresoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
