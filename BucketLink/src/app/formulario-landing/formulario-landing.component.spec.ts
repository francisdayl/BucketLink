import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLandingComponent } from './formulario-landing.component';

describe('FormularioLandingComponent', () => {
  let component: FormularioLandingComponent;
  let fixture: ComponentFixture<FormularioLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
