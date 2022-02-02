import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperLandingComponent } from './stepper-landing.component';

describe('StepperLandingComponent', () => {
  let component: StepperLandingComponent;
  let fixture: ComponentFixture<StepperLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
